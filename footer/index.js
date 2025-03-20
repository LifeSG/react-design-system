import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import s,{css as n,useTheme as a}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import i from"react";function l(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)r.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(t[s[n]]=e[s[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,b="object"==typeof self&&self&&self.Object===Object&&self,h=g||b||Function("return this")(),m=h.Symbol,y=m,p=Object.prototype,x=p.hasOwnProperty,f=p.toString,v=y?y.toStringTag:void 0;var F=function(e){var r=x.call(e,v),t=e[v];try{e[v]=void 0;var s=!0}catch(e){}var n=f.call(e);return s&&(r?e[v]=t:delete e[v]),n},w=Object.prototype.toString;var $=F,C=function(e){return w.call(e)},E=m?m.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?$(e):C(e)};var B=D,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==B(e)},S=u,z=k,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;var O=function(e,r){if(S(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!z(e))||(M.test(e)||!_.test(e)||null!=r&&e in Object(r))};var j=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},L=D,W=j;var T,H=function(e){if(!W(e))return!1;var r=L(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},U=h["__core-js_shared__"],V=(T=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var N=function(e){return!!V&&V in e},Y=Function.prototype.toString;var P=H,G=N,I=j,X=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},R=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e,r){return null==e?void 0:e[r]},re=function(e){return!(!I(e)||G(e))&&(P(e)?K:R).test(X(e))},te=ee;var se=function(e,r){var t=te(e,r);return re(t)?t:void 0},ne=se(Object,"create"),ae=ne;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var ie=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},le=ne,de=Object.prototype.hasOwnProperty;var ce=function(e){var r=this.__data__;if(le){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return de.call(r,e)?r[e]:void 0},ue=ne,ge=Object.prototype.hasOwnProperty;var be=function(e){var r=this.__data__;return ue?void 0!==r[e]:ge.call(r,e)},he=ne;var me=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=he&&void 0===r?"__lodash_hash_undefined__":r,this},ye=oe,pe=ie,xe=ce,fe=be,ve=me;function Fe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}Fe.prototype.clear=ye,Fe.prototype.delete=pe,Fe.prototype.get=xe,Fe.prototype.has=fe,Fe.prototype.set=ve;var we=Fe;var $e=function(){this.__data__=[],this.size=0};var Ce=function(e,r){return e===r||e!=e&&r!=r};var Ee=function(e,r){for(var t=e.length;t--;)if(Ce(e[t][0],r))return t;return-1},De=Ee,Be=Array.prototype.splice;var Ae=function(e){var r=this.__data__,t=De(r,e);return!(t<0)&&(t==r.length-1?r.pop():Be.call(r,t,1),--this.size,!0)},ke=Ee;var Se=function(e){var r=this.__data__,t=ke(r,e);return t<0?void 0:r[t][1]},ze=Ee;var _e=function(e){return ze(this.__data__,e)>-1},Me=Ee;var Oe=function(e,r){var t=this.__data__,s=Me(t,e);return s<0?(++this.size,t.push([e,r])):t[s][1]=r,this},je=$e,Le=Ae,We=Se,Te=_e,He=Oe;function Ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}Ue.prototype.clear=je,Ue.prototype.delete=Le,Ue.prototype.get=We,Ue.prototype.has=Te,Ue.prototype.set=He;var Ve=Ue,Ne=se(h,"Map"),Ye=we,Pe=Ve,Ge=Ne;var Ie=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Xe=function(e,r){var t=e.__data__;return Ie(r)?t["string"==typeof r?"string":"hash"]:t.map},Re=Xe;var Je=function(e){var r=Re(this,e).delete(e);return this.size-=r?1:0,r},Ze=Xe;var qe=function(e){return Ze(this,e).get(e)},Qe=Xe;var Ke=function(e){return Qe(this,e).has(e)},er=Xe;var rr=function(e,r){var t=er(this,e),s=t.size;return t.set(e,r),this.size+=t.size==s?0:1,this},tr=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ge||Pe),string:new Ye}},sr=Je,nr=qe,ar=Ke,or=rr;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}ir.prototype.clear=tr,ir.prototype.delete=sr,ir.prototype.get=nr,ir.prototype.has=ar,ir.prototype.set=or;var lr=ir;function dr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var s=arguments,n=r?r.apply(this,s):s[0],a=t.cache;if(a.has(n))return a.get(n);var o=e.apply(this,s);return t.cache=a.set(n,o)||a,o};return t.cache=new(dr.Cache||lr),t}dr.Cache=lr;var cr=dr;var ur=function(e){var r=cr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,br=/\\(\\)?/g,hr=ur((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(gr,(function(e,t,s,n){r.push(s?n.replace(br,"$1"):t||e)})),r}));var mr=function(e,r){for(var t=-1,s=null==e?0:e.length,n=Array(s);++t<s;)n[t]=r(e[t],t,e);return n},yr=u,pr=k,xr=m?m.prototype:void 0,fr=xr?xr.toString:void 0;var vr=function e(r){if("string"==typeof r)return r;if(yr(r))return mr(r,e)+"";if(pr(r))return fr?fr.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Fr=vr;var wr=u,$r=O,Cr=hr,Er=function(e){return null==e?"":Fr(e)};var Dr=k;var Br=function(e,r){return wr(e)?e:$r(e,r)?[e]:Cr(Er(e))},Ar=function(e){if("string"==typeof e||Dr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var kr=function(e,r){for(var t=0,s=(r=Br(r,e)).length;null!=e&&t<s;)e=e[Ar(r[t++])];return t&&t==s?e:void 0};var Sr=c((function(e,r,t){var s=null==e?void 0:kr(e,r);return void 0===s?t:s}));const zr=(e,r,t)=>Sr(t,r)||Sr(e,r),_r=(e,r)=>{const t=r||e.defaultValue;return Sr(e.collections,t)},Mr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Or=e=>r=>{var t;const s=r.theme,n=_r(Mr,null==s?void 0:s.borderScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.border)?`${zr(n,e,s.overrides.border)}px`:`${n[e]}px`},jr={"width-005":Or("width-005"),"width-010":Or("width-010"),"width-020":Or("width-020"),"width-040":Or("width-040"),solid:(Lr="solid",e=>{var r;const t=e.theme,s=_r(Mr,null==t?void 0:t.borderScheme),n=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?zr(s,Lr,t.overrides.border):s[Lr];return"function"==typeof n?n(e):n})};var Lr;const Wr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Tr=e=>r=>{var t;const s=r.theme,n=_r(Wr,null==s?void 0:s.colourScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.primitiveColour)?zr(n,e,s.overrides.primitiveColour):n[e]},Hr={"brand-10":Tr("brand-10"),"brand-20":Tr("brand-20"),"brand-30":Tr("brand-30"),"brand-40":Tr("brand-40"),"brand-50":Tr("brand-50"),"brand-60":Tr("brand-60"),"brand-70":Tr("brand-70"),"brand-80":Tr("brand-80"),"brand-90":Tr("brand-90"),"brand-95":Tr("brand-95"),"brand-100":Tr("brand-100"),"primary-10":Tr("primary-10"),"primary-20":Tr("primary-20"),"primary-30":Tr("primary-30"),"primary-40":Tr("primary-40"),"primary-50":Tr("primary-50"),"primary-60":Tr("primary-60"),"primary-70":Tr("primary-70"),"primary-80":Tr("primary-80"),"primary-90":Tr("primary-90"),"primary-95":Tr("primary-95"),"primary-100":Tr("primary-100"),"secondary-10":Tr("secondary-10"),"secondary-20":Tr("secondary-20"),"secondary-30":Tr("secondary-30"),"secondary-40":Tr("secondary-40"),"secondary-50":Tr("secondary-50"),"secondary-60":Tr("secondary-60"),"secondary-70":Tr("secondary-70"),"secondary-80":Tr("secondary-80"),"secondary-90":Tr("secondary-90"),"secondary-95":Tr("secondary-95"),"secondary-100":Tr("secondary-100"),"neutral-10":Tr("neutral-10"),"neutral-20":Tr("neutral-20"),"neutral-30":Tr("neutral-30"),"neutral-40":Tr("neutral-40"),"neutral-50":Tr("neutral-50"),"neutral-60":Tr("neutral-60"),"neutral-70":Tr("neutral-70"),"neutral-80":Tr("neutral-80"),"neutral-90":Tr("neutral-90"),"neutral-95":Tr("neutral-95"),"neutral-100":Tr("neutral-100"),"success-10":Tr("success-10"),"success-20":Tr("success-20"),"success-30":Tr("success-30"),"success-40":Tr("success-40"),"success-50":Tr("success-50"),"success-60":Tr("success-60"),"success-70":Tr("success-70"),"success-80":Tr("success-80"),"success-90":Tr("success-90"),"success-95":Tr("success-95"),"success-100":Tr("success-100"),"warning-10":Tr("warning-10"),"warning-20":Tr("warning-20"),"warning-30":Tr("warning-30"),"warning-40":Tr("warning-40"),"warning-50":Tr("warning-50"),"warning-60":Tr("warning-60"),"warning-70":Tr("warning-70"),"warning-80":Tr("warning-80"),"warning-90":Tr("warning-90"),"warning-95":Tr("warning-95"),"warning-100":Tr("warning-100"),"error-10":Tr("error-10"),"error-20":Tr("error-20"),"error-30":Tr("error-30"),"error-40":Tr("error-40"),"error-50":Tr("error-50"),"error-60":Tr("error-60"),"error-70":Tr("error-70"),"error-80":Tr("error-80"),"error-90":Tr("error-90"),"error-95":Tr("error-95"),"error-100":Tr("error-100"),"info-10":Tr("info-10"),"info-20":Tr("info-20"),"info-30":Tr("info-30"),"info-40":Tr("info-40"),"info-50":Tr("info-50"),"info-60":Tr("info-60"),"info-70":Tr("info-70"),"info-80":Tr("info-80"),"info-90":Tr("info-90"),"info-95":Tr("info-95"),"info-100":Tr("info-100"),white:Tr("white"),black:Tr("black"),"primary-inverse":Tr("primary-inverse")},Ur={text:Tr("neutral-20"),"text-subtle":Tr("neutral-30"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-60"),"text-primary":Tr("primary-50"),"text-hover":Tr("primary-40"),"text-selected":Tr("primary-50"),"text-selected-hover":Tr("primary-40"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-20"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("error-40"),"text-info":Tr("info-40"),"text-inverse":Tr("white"),icon:Tr("neutral-50"),"icon-subtle":Tr("neutral-60"),"icon-strongest":Tr("neutral-20"),"icon-primary":Tr("primary-50"),"icon-primary-subtle":Tr("primary-60"),"icon-primary-subtlest":Tr("primary-70"),"icon-hover":Tr("primary-40"),"icon-selected":Tr("primary-50"),"icon-selected-hover":Tr("primary-40"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-60"),"icon-success":Tr("success-50"),"icon-warning":Tr("warning-60"),"icon-error":Tr("error-50"),"icon-error-strong":Tr("error-40"),"icon-info":Tr("info-50"),"icon-inverse":Tr("white"),"icon-primary-inverse":Tr("primary-inverse"),border:Tr("neutral-90"),"border-strong":Tr("neutral-70"),"border-stronger":Tr("neutral-50"),"border-primary":Tr("primary-50"),"border-primary-subtle":Tr("primary-60"),"border-hover":Tr("primary-90"),"border-hover-strong":Tr("primary-60"),"border-selected":Tr("primary-50"),"border-selected-subtle":Tr("primary-70"),"border-selected-subtlest":Tr("primary-90"),"border-selected-hover":Tr("primary-40"),"border-focus":Tr("primary-60"),"border-focus-strong":Tr("primary-50"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-70"),"border-success":Tr("success-60"),"border-warning":Tr("warning-60"),"border-error":Tr("error-60"),"border-error-focus":Tr("error-60"),"border-error-focus-strong":Tr("error-40"),"border-error-strong":Tr("error-40"),"border-info":Tr("info-60"),bg:Tr("white"),"bg-strong":Tr("neutral-100"),"bg-stronger":Tr("neutral-95"),"bg-strongest":Tr("neutral-90"),"bg-hover":Tr("primary-95"),"bg-hover-strong":Tr("primary-90"),"bg-hover-subtle":Tr("primary-100"),"bg-hover-neutral":Tr("neutral-100"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("primary-95"),"bg-selected-hover":Tr("primary-90"),"bg-selected-strong":Tr("primary-90"),"bg-selected-stronger":Tr("primary-70"),"bg-selected-strongest":Tr("primary-50"),"bg-selected-strongest-hover":Tr("primary-40"),"bg-disabled":Tr("neutral-95"),"bg-selected-disabled":Tr("neutral-95"),"bg-selected-stronger-disabled":Tr("neutral-70"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("info-100"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("error-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-20"),"bg-inverse-subtle":Tr("neutral-30"),"bg-inverse-subtler":Tr("neutral-50"),"bg-inverse-subtlest":Tr("neutral-60"),"bg-inverse-hover":Tr("neutral-40"),"bg-primary":Tr("primary-50"),"bg-primary-subtle":Tr("primary-60"),"bg-primary-subtler":Tr("primary-95"),"bg-primary-subtlest":Tr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Tr("primary-40"),"bg-primary-subtlest-hover":Tr("primary-90"),"bg-primary-subtlest-selected":Tr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Tr("primary-50"),"hyperlink-hover":Tr("primary-40"),"hyperlink-visited":Tr("primary-40"),"hyperlink-inverse":Tr("primary-inverse"),"focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")},Vr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,pa:{text:Tr("neutral-30"),"text-subtle":Tr("neutral-40"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-70"),"text-primary":Tr("neutral-10"),"text-hover":Tr("neutral-70"),"text-selected":Tr("neutral-20"),"text-selected-hover":Tr("neutral-10"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-40"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("brand-30"),"text-info":Tr("neutral-40"),"text-inverse":Tr("neutral-100"),icon:Tr("neutral-40"),"icon-subtle":Tr("neutral-50"),"icon-strongest":Tr("neutral-10"),"icon-primary":Tr("neutral-10"),"icon-primary-subtle":Tr("neutral-30"),"icon-primary-subtlest":Tr("neutral-60"),"icon-hover":Tr("neutral-70"),"icon-selected":Tr("brand-20"),"icon-selected-hover":Tr("brand-10"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-40"),"icon-success":Tr("success-40"),"icon-warning":Tr("warning-60"),"icon-error":Tr("brand-30"),"icon-error-strong":Tr("brand-10"),"icon-info":Tr("neutral-40"),"icon-inverse":Tr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Tr("neutral-90"),"border-strong":Tr("neutral-30"),"border-stronger":Tr("neutral-20"),"border-primary":Tr("neutral-40"),"border-primary-subtle":Tr("neutral-60"),"border-hover":Tr("neutral-80"),"border-hover-strong":Tr("neutral-10"),"border-selected":Tr("neutral-20"),"border-selected-subtle":Tr("neutral-40"),"border-selected-subtlest":Tr("neutral-70"),"border-selected-hover":Tr("neutral-10"),"border-focus":Tr("brand-60"),"border-focus-strong":Tr("brand-40"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-80"),"border-success":Tr("success-40"),"border-warning":Tr("warning-60"),"border-error":Tr("brand-30"),"border-error-focus":Tr("brand-20"),"border-error-focus-strong":Tr("brand-10"),"border-error-strong":Tr("brand-20"),"border-info":Tr("neutral-40"),bg:Tr("neutral-100"),"bg-strong":Tr("neutral-95"),"bg-stronger":Tr("neutral-90"),"bg-strongest":Tr("neutral-80"),"bg-hover":Tr("brand-90"),"bg-hover-strong":Tr("brand-80"),"bg-hover-subtle":Tr("neutral-90"),"bg-hover-neutral":Tr("neutral-90"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("brand-50"),"bg-selected-hover":Tr("brand-70"),"bg-selected-strong":Tr("brand-90"),"bg-selected-stronger":Tr("brand-40"),"bg-selected-strongest":Tr("brand-20"),"bg-selected-strongest-hover":Tr("brand-10"),"bg-disabled":Tr("neutral-90"),"bg-selected-disabled":Tr("neutral-90"),"bg-selected-stronger-disabled":Tr("neutral-80"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("neutral-95"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("brand-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-40"),"bg-inverse-subtle":Tr("neutral-60"),"bg-inverse-subtler":Tr("neutral-70"),"bg-inverse-subtlest":Tr("neutral-80"),"bg-inverse-hover":Tr("neutral-30"),"bg-primary":Tr("brand-20"),"bg-primary-subtle":Tr("brand-60"),"bg-primary-subtler":Tr("brand-80"),"bg-primary-subtlest":Tr("brand-100"),"bg-available":Tr("success-60"),"bg-primary-hover":Tr("brand-10"),"bg-primary-subtlest-hover":Tr("brand-80"),"bg-primary-subtlest-selected":Tr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Tr("neutral-10"),"hyperlink-hover":Tr("neutral-40"),"hyperlink-visited":Tr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")}},defaultValue:"lifesg"},Nr=e=>r=>{var t;const s=r.theme,n=_r(Vr,null==s?void 0:s.colourScheme),a=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.semanticColour)?zr(n,e,s.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},Yr={text:Nr("text"),"text-subtle":Nr("text-subtle"),"text-subtler":Nr("text-subtler"),"text-subtlest":Nr("text-subtlest"),"text-primary":Nr("text-primary"),"text-hover":Nr("text-hover"),"text-selected":Nr("text-selected"),"text-selected-hover":Nr("text-selected-hover"),"text-disabled":Nr("text-disabled"),"text-disabled-subtle":Nr("text-disabled-subtle"),"text-disabled-subtlest":Nr("text-disabled-subtlest"),"text-selected-disabled":Nr("text-selected-disabled"),"text-success":Nr("text-success"),"text-warning":Nr("text-warning"),"text-error":Nr("text-error"),"text-info":Nr("text-info"),"text-inverse":Nr("text-inverse"),icon:Nr("icon"),"icon-subtle":Nr("icon-subtle"),"icon-strongest":Nr("icon-strongest"),"icon-primary":Nr("icon-primary"),"icon-primary-subtle":Nr("icon-primary-subtle"),"icon-primary-subtlest":Nr("icon-primary-subtlest"),"icon-hover":Nr("icon-hover"),"icon-selected":Nr("icon-selected"),"icon-selected-hover":Nr("icon-selected-hover"),"icon-disabled":Nr("icon-disabled"),"icon-disabled-subtle":Nr("icon-disabled-subtle"),"icon-selected-disabled":Nr("icon-selected-disabled"),"icon-success":Nr("icon-success"),"icon-warning":Nr("icon-warning"),"icon-error":Nr("icon-error"),"icon-error-strong":Nr("icon-error-strong"),"icon-info":Nr("icon-info"),"icon-inverse":Nr("icon-inverse"),"icon-primary-inverse":Nr("icon-primary-inverse"),border:Nr("border"),"border-strong":Nr("border-strong"),"border-stronger":Nr("border-stronger"),"border-primary":Nr("border-primary"),"border-primary-subtle":Nr("border-primary-subtle"),"border-hover":Nr("border-hover"),"border-hover-strong":Nr("border-hover-strong"),"border-selected":Nr("border-selected"),"border-selected-subtle":Nr("border-selected-subtle"),"border-selected-subtlest":Nr("border-selected-subtlest"),"border-selected-hover":Nr("border-selected-hover"),"border-focus":Nr("border-focus"),"border-focus-strong":Nr("border-focus-strong"),"border-disabled":Nr("border-disabled"),"border-selected-disabled":Nr("border-selected-disabled"),"border-success":Nr("border-success"),"border-warning":Nr("border-warning"),"border-error":Nr("border-error"),"border-error-focus":Nr("border-error-focus"),"border-error-focus-strong":Nr("border-error-focus-strong"),"border-error-strong":Nr("border-error-strong"),"border-info":Nr("border-info"),bg:Nr("bg"),"bg-strong":Nr("bg-strong"),"bg-stronger":Nr("bg-stronger"),"bg-strongest":Nr("bg-strongest"),"bg-hover":Nr("bg-hover"),"bg-hover-strong":Nr("bg-hover-strong"),"bg-hover-subtle":Nr("bg-hover-subtle"),"bg-hover-neutral":Nr("bg-hover-neutral"),"bg-hover-neutral-strong":Nr("bg-hover-neutral-strong"),"bg-selected":Nr("bg-selected"),"bg-selected-hover":Nr("bg-selected-hover"),"bg-selected-strong":Nr("bg-selected-strong"),"bg-selected-stronger":Nr("bg-selected-stronger"),"bg-selected-strongest":Nr("bg-selected-strongest"),"bg-selected-strongest-hover":Nr("bg-selected-strongest-hover"),"bg-disabled":Nr("bg-disabled"),"bg-selected-disabled":Nr("bg-selected-disabled"),"bg-selected-stronger-disabled":Nr("bg-selected-stronger-disabled"),"bg-success":Nr("bg-success"),"bg-success-hover":Nr("bg-success-hover"),"bg-success-strong":Nr("bg-success-strong"),"bg-success-strong-hover":Nr("bg-success-strong-hover"),"bg-warning":Nr("bg-warning"),"bg-warning-hover":Nr("bg-warning-hover"),"bg-warning-strong":Nr("bg-warning-strong"),"bg-warning-strong-hover":Nr("bg-warning-strong-hover"),"bg-info":Nr("bg-info"),"bg-info-hover":Nr("bg-info-hover"),"bg-info-strong":Nr("bg-info-strong"),"bg-info-strong-hover":Nr("bg-info-strong-hover"),"bg-error":Nr("bg-error"),"bg-error-hover":Nr("bg-error-hover"),"bg-error-strong":Nr("bg-error-strong"),"bg-error-strong-hover":Nr("bg-error-strong-hover"),"bg-inverse":Nr("bg-inverse"),"bg-inverse-subtle":Nr("bg-inverse-subtle"),"bg-inverse-subtler":Nr("bg-inverse-subtler"),"bg-inverse-subtlest":Nr("bg-inverse-subtlest"),"bg-inverse-hover":Nr("bg-inverse-hover"),"bg-primary":Nr("bg-primary"),"bg-primary-subtle":Nr("bg-primary-subtle"),"bg-primary-subtler":Nr("bg-primary-subtler"),"bg-primary-subtlest":Nr("bg-primary-subtlest"),"bg-available":Nr("bg-available"),"bg-primary-hover":Nr("bg-primary-hover"),"bg-primary-subtlest-hover":Nr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Nr("bg-primary-subtlest-selected"),"overlay-strong":Nr("overlay-strong"),"overlay-subtle":Nr("overlay-subtle"),hyperlink:Nr("hyperlink"),"hyperlink-hover":Nr("hyperlink-hover"),"hyperlink-visited":Nr("hyperlink-visited"),"hyperlink-inverse":Nr("hyperlink-inverse"),"focus-ring":Nr("focus-ring"),"focus-ring-inverse":Nr("focus-ring-inverse")},Pr={collections:{default:{solid:e=>r=>{var t,s,a;const{thickness:o,radius:i,colour:l}=e||{},d=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:jr["width-010"](r),c=null!==(s="function"==typeof i?i(r):i)&&void 0!==s?s:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Yr.border(r),g=jr.solid;return n`
            border: ${d} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var t,s,a;const{thickness:o,radius:i,colour:l}=e||{},d=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:jr["width-010"](r),c=null!==(s="function"==typeof i?i(r):i)&&void 0!==s?s:0,u=null!==(a="function"==typeof l?l(r):l)&&void 0!==a?a:Yr.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return n`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Gr=e=>1===e.length&&"theme"in e[0],Ir=e=>(...r)=>t=>{const s=Gr(r)?[]:r,n=Gr(r)?r[0]:t,a=n.theme;return(0,_r(Pr,null==a?void 0:a.borderScheme)[e])(...s)(n)},Xr={solid:Ir("solid"),"dashed-default":Ir("dashed-default")},Rr={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Jr=e=>r=>{var t;const s=r.theme,n=_r(Rr,null==s?void 0:s.breakpointScheme);let a;return a=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.breakpoint)?zr(n,e,s.overrides.breakpoint):n[e],a},Zr={"xxs-min":Jr("xxs-min"),"xxs-max":Jr("xxs-max"),"xs-min":Jr("xs-min"),"xs-max":Jr("xs-max"),"sm-min":Jr("sm-min"),"sm-max":Jr("sm-max"),"md-min":Jr("md-min"),"md-max":Jr("md-max"),"lg-min":Jr("lg-min"),"lg-max":Jr("lg-max"),"xl-min":Jr("xl-min"),"xl-max":Jr("xl-max"),"xxl-min":Jr("xxl-min"),"xxs-column":Jr("xxs-column"),"xs-column":Jr("xs-column"),"sm-column":Jr("sm-column"),"md-column":Jr("md-column"),"lg-column":Jr("lg-column"),"xl-column":Jr("xl-column"),"xxl-column":Jr("xxl-column"),"xxs-gutter":Jr("xxs-gutter"),"xs-gutter":Jr("xs-gutter"),"sm-gutter":Jr("sm-gutter"),"md-gutter":Jr("md-gutter"),"lg-gutter":Jr("lg-gutter"),"xl-gutter":Jr("xl-gutter"),"xxl-gutter":Jr("xxl-gutter"),"xxs-margin":Jr("xxs-margin"),"xs-margin":Jr("xs-margin"),"sm-margin":Jr("sm-margin"),"md-margin":Jr("md-margin"),"lg-margin":Jr("lg-margin"),"xl-margin":Jr("xl-margin"),"xxl-margin":Jr("xxl-margin")},qr=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Zr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const s=t(r);return`@media screen and (${e}: ${s}px)`}})(e,t),r)),{}),Qr={MaxWidth:qr("max-width"),MinWidth:qr("min-width")},Kr={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},et={collections:{lifesg:Kr,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:Kr,mylegacy:Kr,ccube:Kr,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},rt=e=>r=>{var t;const s=r.theme,n=_r(et,null==s?void 0:s.fontScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.fontSpec)?zr(n,e,s.overrides.fontSpec):n[e]},tt={"header-size-xxl":rt("header-size-xxl"),"header-size-xl":rt("header-size-xl"),"header-size-lg":rt("header-size-lg"),"header-size-md":rt("header-size-md"),"header-size-sm":rt("header-size-sm"),"header-size-xs":rt("header-size-xs"),"header-lh-xxl":rt("header-lh-xxl"),"header-lh-xl":rt("header-lh-xl"),"header-lh-lg":rt("header-lh-lg"),"header-lh-md":rt("header-lh-md"),"header-lh-sm":rt("header-lh-sm"),"header-lh-xs":rt("header-lh-xs"),"header-ls-xxl":rt("header-ls-xxl"),"header-ls-xl":rt("header-ls-xl"),"header-ls-lg":rt("header-ls-lg"),"header-ls-md":rt("header-ls-md"),"header-ls-sm":rt("header-ls-sm"),"header-ls-xs":rt("header-ls-xs"),"weight-light":rt("weight-light"),"weight-regular":rt("weight-regular"),"weight-semibold":rt("weight-semibold"),"weight-bold":rt("weight-bold"),"font-family":rt("font-family"),"body-size-baseline":rt("body-size-baseline"),"body-size-md":rt("body-size-md"),"body-size-sm":rt("body-size-sm"),"body-size-xs":rt("body-size-xs"),"body-lh-baseline":rt("body-lh-baseline"),"body-lh-md":rt("body-lh-md"),"body-lh-sm":rt("body-lh-sm"),"body-lh-xs":rt("body-lh-xs"),"body-ls-baseline":rt("body-ls-baseline"),"body-ls-md":rt("body-ls-md"),"body-ls-sm":rt("body-ls-sm"),"body-ls-xs":rt("body-ls-xs"),"form-label-size":rt("form-label-size"),"form-description-size":rt("form-description-size"),"form-label-lh":rt("form-label-lh"),"form-description-lh":rt("form-description-lh"),"form-label-ls":rt("form-label-ls"),"form-description-ls":rt("form-description-ls")},st=(e,r,t,s)=>n`
    font-family: ${rt("font-family")};
    font-size: ${rt(e)};
    font-weight: ${rt(r)};
    line-height: ${rt(t)};
    letter-spacing: ${rt(s)};
`,nt={"header-xxl-light":st("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":st("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":st("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":st("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":st("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":st("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":st("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":st("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":st("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":st("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":st("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":st("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":st("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":st("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":st("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":st("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":st("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":st("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":st("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":st("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":st("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":st("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":st("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":st("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":st("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":st("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":st("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":st("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":st("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":st("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":st("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":st("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":st("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":st("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":st("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":st("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":st("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":st("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":st("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":st("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":st("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":st("form-description-size","weight-regular","form-description-lh","form-description-ls")},at={collections:{lifesg:nt,bookingsg:nt,rbs:nt,mylegacy:nt,ccube:nt,pa:nt},defaultValue:"lifesg"},ot=e=>r=>{var t;const s=r.theme,n=_r(at,null==s?void 0:s.fontScheme),a=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.font)?zr(n,e,s.overrides.font):n[e];return"function"==typeof a?a(r):a},it={"header-xxl-light":ot("header-xxl-light"),"header-xxl-regular":ot("header-xxl-regular"),"header-xxl-semibold":ot("header-xxl-semibold"),"header-xxl-bold":ot("header-xxl-bold"),"header-xl-light":ot("header-xl-light"),"header-xl-regular":ot("header-xl-regular"),"header-xl-semibold":ot("header-xl-semibold"),"header-xl-bold":ot("header-xl-bold"),"header-lg-light":ot("header-lg-light"),"header-lg-regular":ot("header-lg-regular"),"header-lg-semibold":ot("header-lg-semibold"),"header-lg-bold":ot("header-lg-bold"),"header-md-light":ot("header-md-light"),"header-md-regular":ot("header-md-regular"),"header-md-semibold":ot("header-md-semibold"),"header-md-bold":ot("header-md-bold"),"header-sm-light":ot("header-sm-light"),"header-sm-regular":ot("header-sm-regular"),"header-sm-semibold":ot("header-sm-semibold"),"header-sm-bold":ot("header-sm-bold"),"header-xs-light":ot("header-xs-light"),"header-xs-regular":ot("header-xs-regular"),"header-xs-semibold":ot("header-xs-semibold"),"header-xs-bold":ot("header-xs-bold"),"body-baseline-light":ot("body-baseline-light"),"body-baseline-regular":ot("body-baseline-regular"),"body-baseline-semibold":ot("body-baseline-semibold"),"body-baseline-bold":ot("body-baseline-bold"),"body-md-light":ot("body-md-light"),"body-md-regular":ot("body-md-regular"),"body-md-semibold":ot("body-md-semibold"),"body-md-bold":ot("body-md-bold"),"body-sm-light":ot("body-sm-light"),"body-sm-regular":ot("body-sm-regular"),"body-sm-semibold":ot("body-sm-semibold"),"body-sm-bold":ot("body-sm-bold"),"body-xs-light":ot("body-xs-light"),"body-xs-regular":ot("body-xs-regular"),"body-xs-semibold":ot("body-xs-semibold"),"body-xs-bold":ot("body-xs-bold"),"form-label":ot("form-label"),"form-description":ot("form-description")},lt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},dt=e=>r=>{var t;const s=r.theme,n=_r(lt,null==s?void 0:s.spacingScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.spacing)?`${zr(n,e,s.overrides.spacing)}px`:`${n[e]}px`},ct={"spacing-0":dt("spacing-0"),"spacing-4":dt("spacing-4"),"spacing-8":dt("spacing-8"),"spacing-12":dt("spacing-12"),"spacing-16":dt("spacing-16"),"spacing-20":dt("spacing-20"),"spacing-24":dt("spacing-24"),"spacing-32":dt("spacing-32"),"spacing-40":dt("spacing-40"),"spacing-48":dt("spacing-48"),"spacing-64":dt("spacing-64"),"spacing-72":dt("spacing-72"),"layout-xs":dt("layout-xs"),"layout-sm":dt("layout-sm"),"layout-md":dt("layout-md"),"layout-lg":dt("layout-lg"),"layout-xl":dt("layout-xl"),"layout-xxl":dt("layout-xxl"),"layout-xxxl":dt("layout-xxxl")},ut=Object.assign(Object.assign({},Yr),{Primitive:Hr}),gt=Object.assign(Object.assign({},it),{Spec:tt});Object.assign(Object.assign({},jr),{Util:Xr});const bt=ct,ht=Zr,mt=Qr,yt=(e,r,t=!1)=>n`
        ${gt[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,pt=e=>{if(e)return n`
            ${r=e,n`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},xt=(e,r)=>n`
    ${yt(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?n`
            display: block;
            ${pt(t)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${pt(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${ut.text};
`;var ft;!function(t){const a=(e,r,t)=>{const n=s(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>xt(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=a("h1","header-xxl","HeaderXXL"),t.HeaderXL=a("h2","header-xl","HeaderXL"),t.HeaderLG=a("h3","header-lg","HeaderLG"),t.HeaderMD=a("h4","header-md","HeaderMD"),t.HeaderSM=a("h5","header-sm","HeaderSM"),t.HeaderXS=a("h6","header-xs","HeaderXS");const o=(e,r)=>{const t=s.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>xt(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=o("body-baseline","BodyBL"),t.BodyMD=o("body-md","BodyMD"),t.BodySM=o("body-sm","BodySM"),t.BodyXS=o("body-xs","BodyXS");const i=(t,a)=>{const o=s.a`
            ${e=>n`
                ${yt(t,e.weight||"regular")}
                color: ${ut.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${ut["text-hover"]};
                }
            `}
        `,i=t=>{var{external:s=!1,children:n}=t,a=l(t,["external","children"]);return e(o,Object.assign({},a,{children:[n,s&&r(vt,{})]}))};return i.displayName=`Typography.${a}`,i};t.LinkBL=i("body-baseline","LinkBL"),t.LinkMD=i("body-md","LinkMD"),t.LinkSM=i("body-sm","LinkSM"),t.LinkXS=i("body-xs","LinkXS")}(ft||(ft={}));const vt=s(o)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Ft=s.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${mt.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,wt=s(ft.BodyMD)`
    margin-bottom: ${bt["spacing-16"]};
`,$t=s.div`
    display: flex;
    align-items: flex-start;
`,Ct=s.a`
    &:not(:last-child) {
        margin-right: ${bt["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${mt.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${bt["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,Et=()=>e(Ft,{"data-testid":"download-app-section",children:[r(wt,{weight:"semibold",children:"Download the app"}),e($t,{children:[r(Ct,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),r(Ct,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var Dt={exports:{}},Bt=c(Dt.exports=function(){var e=1e3,r=6e4,t=36e5,s="millisecond",n="second",a="minute",o="hour",i="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var s=String(e);return!s||s.length>=r?e:""+Array(r+1-s.length).join(t)+e},x={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),n=t%60;return(r<=0?"+":"-")+p(s,2,"0")+":"+p(n,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),n=r.clone().add(s,d),a=t-n<0,o=r.clone().add(s+(a?-1:1),d);return+(-(s+(t-n)/(a?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:i,D:g,h:o,m:a,s:n,ms:s,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",v={};v[f]=y;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,t,s){var n;if(!r)return f;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(n=a),t&&(v[a]=t,n=a);var o=r.split("-");if(!n&&o.length>1)return e(o[0])}else{var i=r.name;v[i]=r,n=i}return!s&&n&&(f=n),n||!s&&f},C=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new D(t)},E=x;E.l=$,E.i=w,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var s=r.match(h);if(s){var n=s[2]-1||0,a=(s[7]||"0").substring(0,3);return t?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,s=!!E.u(r)||r,c=E.p(e),b=function(e,r){var n=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return s?n:n.endOf(i)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(c){case u:return s?b(1,0):b(31,11);case d:return s?b(1,y):b(0,y+1);case l:var f=this.$locale().weekStart||0,v=(m<f?m+7:m)-f;return b(s?p-v:p+(6-v),y);case i:case g:return h(x+"Hours",0);case o:return h(x+"Minutes",1);case a:return h(x+"Seconds",2);case n:return h(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[i]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[n]=c+"Seconds",t[s]=c+"Milliseconds",t)[l],h=l===i?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(s,c){var g,b=this;s=Number(s);var h=E.p(c),m=function(e){var r=C(b);return E.w(r.date(r.date()+Math.round(e*s)),b)};if(h===d)return this.set(d,this.$M+s);if(h===u)return this.set(u,this.$y+s);if(h===i)return m(1);if(h===l)return m(7);var y=(g={},g[a]=r,g[o]=t,g[n]=e,g)[h]||1,p=this.$d.getTime()+s*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var s=e||"YYYY-MM-DDTHH:mm:ssZ",n=E.z(this),a=this.$H,o=this.$m,i=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,n,a){return e&&(e[t]||e(r,s))||n[t].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},h=c||function(e,r,t){var s=e<12?"AM":"PM";return t?s.toLowerCase():s};return s.replace(m,(function(e,s){return s||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return i+1;case"MM":return E.s(i+1,2,"0");case"MMM":return u(t.monthsShort,i,d,3);case"MMMM":return u(d,i);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(a,o,!0);case"A":return h(a,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(s,g,b){var h,m=this,y=E.p(g),p=C(s),x=(p.utcOffset()-this.utcOffset())*r,f=this-p,v=function(){return E.m(m,p)};switch(y){case u:h=v()/12;break;case d:h=v();break;case c:h=v()/3;break;case l:h=(f-x)/6048e5;break;case i:h=(f-x)/864e5;break;case o:h=f/t;break;case a:h=f/r;break;case n:h=f/e;break;default:h=f}return b?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),s=$(e,r,!0);return s&&(t.$L=s),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return C.prototype=B,[["$ms",s],["$s",n],["$m",a],["$H",o],["$W",i],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=v[f],C.Ls=v,C.p={},C}());const At={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},kt={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},St={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var zt;!function(e){e.getCopyrightInfo=(e=new Date,t)=>{const s=r(t);return`${`${(new Date).getFullYear()} ${s}`} Last Updated ${Bt(e).format("D MMMM YYYY")}`};const r=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,r)=>{const t=(e=>{switch(e){case"bookingsg":return kt;case"mylegacy":return St;default:return At}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},t.privacy),r&&r.privacy?r.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},t.termsOfUse),r&&r.termsOfUse?r.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},t.reportVulnerability),r&&r.reportVulnerability?r.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(zt||(zt={}));const _t=s.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:t,$xlStart:s,$xlSpan:a,$lgStart:o,$lgSpan:i,$mdStart:l,$mdSpan:d,$smStart:c,$smSpan:u,$xsStart:g,$xsSpan:b,$xxsStart:h,$xxsSpan:m}=e;return n`
            grid-column: ${r||"auto"} / span ${t||1};

            ${Qr.MaxWidth.xl} {
                grid-column: ${s||"auto"} / span ${a||1};
            }

            ${Qr.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${i||1};
            }

            ${Qr.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${Qr.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${u||1};
            }

            ${Qr.MaxWidth.xs} {
                grid-column: ${g||"auto"} / span ${b||1};
            }

            ${Qr.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${m||1};
            }
        `}}
`,Mt=i.forwardRef(((e,t)=>{const s=a(),{xxlCols:n,xlCols:o,lgCols:i,mdCols:d,smCols:c,xsCols:u,xxsCols:g}=e,b=l(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,t)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${t}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${t}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[t,s]=e;if(-1===s)return{start:t,span:r-t+1};return{start:t,span:Math.min(s-t,r)}}return{start:void 0,span:Math.min(e,r)}};return r(_t,Object.assign({ref:t},(()=>{const e=Zr["xxl-column"]({theme:s}),r=Zr["xl-column"]({theme:s}),t=Zr["lg-column"]({theme:s}),a=Zr["md-column"]({theme:s}),l=Zr["sm-column"]({theme:s}),b=Zr["xs-column"]({theme:s}),m=Zr["xxs-column"]({theme:s}),y=h(n||o||i||d||c||u||g,e,"xxl"),p=h(o||i||d||c||u||g,r,"xl"),x=h(i||d||c||u||g,t,"lg"),f=h(d||c||u||g,a,"md"),v=h(c||u||g,l,"sm"),F=h(u||g,b,"xs"),w=h(g,m,"xxs");return{$xxlStart:y.start,$xxlSpan:y.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:x.start,$lgSpan:x.span,$mdStart:f.start,$mdSpan:f.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),b))})),Ot=s.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n`
                padding: 0 ${ht["xxl-margin"]}px;
            `:n`
                padding: 0 ${ht["xxl-margin"]}px;
                max-width: 1440px;

                ${mt.MaxWidth.xl} {
                    padding: 0 ${ht["xl-margin"]}px;
                }

                ${mt.MaxWidth.lg} {
                    padding: 0 ${ht["lg-margin"]}px;
                }

                ${mt.MaxWidth.md} {
                    padding: 0 ${ht["md-margin"]}px;
                }

                ${mt.MaxWidth.sm} {
                    padding: 0 ${ht["sm-margin"]}px;
                }

                ${mt.MaxWidth.xs} {
                    padding: 0 ${ht["xs-margin"]}px;
                }

                ${mt.MaxWidth.xxs} {
                    padding: 0 ${ht["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return n`
                    column-gap: ${ht["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${ht["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${mt.MaxWidth.xl} {
                        column-gap: ${ht["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mt.MaxWidth.lg} {
                        column-gap: ${ht["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mt.MaxWidth.md} {
                        column-gap: ${ht["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mt.MaxWidth.sm} {
                        column-gap: ${ht["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mt.MaxWidth.xs} {
                        column-gap: ${ht["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mt.MaxWidth.xxs} {
                        column-gap: ${ht["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${ht["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,jt=i.forwardRef(((e,t)=>{const{children:s,"data-testid":n="container",type:a="flex",stretch:o=!1}=e,i=l(e,["children","data-testid","type","stretch"]);return r(Ot,Object.assign({ref:t,"data-testid":n,$type:a,$stretch:o},i,{children:s}))})),Lt=i.forwardRef(((e,t)=>{const{children:s,"data-testid":n="section",stretch:a=!1}=e,o=l(e,["children","data-testid","stretch"]);return r(Wt,Object.assign({ref:t,"data-testid":n,$stretch:a},o,{children:s}))})),Wt=s.section`
    display: block;
    position: relative;
`,Tt=i.forwardRef(((e,t)=>{const{children:s,"data-testid":n="content",className:a,type:o="flex",stretch:i=!1}=e,d=l(e,["children","data-testid","className","type","stretch"]);return r(Lt,Object.assign({ref:t,"data-testid":n,className:a,stretch:i},d,{children:r(jt,{"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:i,children:s})}))})),Ht={Section:Lt,Container:jt,Content:Tt,ColDiv:Mt},Ut={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Vt=e=>Object.keys(Ut).reduce(((r,t)=>{const s=Ut[t];return r[t]=`@media screen and (${e}: ${s}px)`,r}),{}),Nt=Vt("max-width"),Yt=(Vt("min-width"),s.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:t,$tabletStart:s,$tabletSpan:a,$mobileStart:o,$mobileSpan:i}=e;return n`
            grid-column: ${r||"auto"} / span ${t||1};

            ${Nt.tablet} {
                grid-column: ${s||"auto"} / span
                    ${a||1};
            }

            ${Nt.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${i||1};
            }
        `}}
`),Pt=i.forwardRef(((e,t)=>{const{mobileCols:s,tabletCols:n,desktopCols:a}=e,o=l(e,["mobileCols","tabletCols","desktopCols"]);return r(Yt,Object.assign({ref:t},(()=>{const e=n||s,r=s,t=Gt(a||n||s),o=Gt(e),i=Gt(r);return{$desktopSpan:t.span,$desktopStart:t.start,$mobileSpan:i.span,$mobileStart:i.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),Gt=e=>{if(Array.isArray(e)&&e.length>1){const[r,t]=e,s=r<=t?r:t,n=r<=t?t:r;let a;return a=n===s?1:n-s,{start:s,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},It=()=>e=>{let r;r="function"==typeof e.$color?e.$color(e):e.$color||ut.border(e);const t=encodeURIComponent(r),s=e.$thickness||1;return n`
        background-color: transparent;
        height: ${s}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${s}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${t}" stroke-width="${s+1}" stroke-dasharray="4 4" /></svg>');
    `},Xt=s.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return n`
                    ${It}
                `;case"solid":return n`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||ut.border};
                `}}}
`,Rt=s.footer`
    background: ${ut["bg-strong"]};
`,Jt=s(ft.LinkSM)`
    color: ${ut.text};
`,Zt=s((e=>{var{thickness:t=1,lineStyle:s="solid",layoutType:n="flex",color:a,className:o,xxsCols:i,xsCols:d,smCols:c,mdCols:u,lgCols:g,xlCols:b,xxlCols:h,mobileCols:m,tabletCols:y,desktopCols:p}=e,x=l(e,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const f=void 0!==m||void 0!==y||void 0!==p;switch(n){case"flex":return r(Xt,Object.assign({className:o,$thickness:t,$lineStyle:s,$color:a},x));case"grid":return f?r(Pt,Object.assign({className:o,mobileCols:m,tabletCols:y,desktopCols:p},x,{children:r(Xt,{$thickness:t,$lineStyle:s,$color:a})})):r(Mt,Object.assign({className:o},(()=>{const e=i||[1,-1],r=d||e,t=c||r,s=u||t,n=g||s,a=b||n;return{xxlCols:h||a,xlCols:a,lgCols:n,mdCols:s,smCols:t,xsCols:r,xxsCols:e}})(),x,{children:r(Xt,{$thickness:t,$lineStyle:s,$color:a})}))}}))`
    width: 100%;
`,qt=s(Ht.Content)`
    padding: ${bt["spacing-64"]} 0;

    ${mt.MaxWidth.lg} {
        padding: ${bt["spacing-32"]} 0;
    }
`,Qt=s.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${mt.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${bt["spacing-32"]};
    }

    ${mt.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${bt["spacing-32"]};
    }
`,Kt=s.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${bt["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${mt.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${mt.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,es=s.div`
    grid-column: 13 / span 6;

    ${mt.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${bt["spacing-32"]};
    }

    ${mt.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,rs=s(Ht.Content)`
    padding: ${bt["spacing-20"]} 0;

    ${mt.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${bt["spacing-16"]} 0;
    }
`,ts=s.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${bt["spacing-16"]};
    }

    ${mt.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mt.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ss=s(ts)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${mt.MaxWidth.lg} {
        margin-top: ${bt["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${mt.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ns=s(ft.LinkXS)`
    color: ${ut.text};
    &:not(:last-child) {
        margin-right: ${bt["spacing-16"]};
    }

    svg {
        color: ${ut.icon};
    }

    &:hover {
        color: ${ut["text-subtler"]};
        svg {
            color: ${ut["icon-subtle"]};
        }
    }

    ${mt.MaxWidth.lg} {
        margin-bottom: ${bt["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mt.MaxWidth.lg} {
        margin-bottom: ${bt["spacing-8"]};
    }
`,as=s=>{var{children:n,links:o,lastUpdated:i,disclaimerLinks:d,showDownloadAddon:c,logoSrc:u,copyrightInfo:g,onFooterLinkClick:b,layout:h="default"}=s,m=l(s,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const y="stretch"===h,p=a(),x=e=>e.map(((e,t)=>{const s=l(e,["data-options"]);return r("li",{children:r(Jt,Object.assign({},s,{onClick:r=>((e,r)=>{r.onClick?(e.preventDefault(),r.onClick(e)):b&&(e.preventDefault(),b(r))})(r,e)}))},t)}));return e(Rt,Object.assign({},m,{children:[(()=>{let s=null;return n||((o||c)&&(s=e(t,{children:[r(Qt,{"data-testid":"logo-section",children:r("img",{src:u||zt.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&r(Kt,{"data-testid":"link-col-1",children:x(o[0])},"link-col-1"),(null==o?void 0:o[1])&&r(Kt,{"data-testid":"link-col-2",children:x(o[1])},"link-col-2"),c&&r(es,{children:r(Et,{})})]})),s?e(t,{children:[r(qt,{type:"grid",stretch:y,children:s}),r(Zt,{})]}):null)})(),e(rs,{type:"grid",stretch:y,children:[r(ts,{children:(()=>{const e=zt.getDisclaimerLinks(null==p?void 0:p.resourceScheme,d);return Object.keys(e).map((t=>r(ns,Object.assign({},e[t]),t)))})()},"disclaimer"),r(ss,{children:r(ft.BodyXS,{"data-testid":"copyright-text",children:g||e(t,{children:["©"," ",zt.getCopyrightInfo(i,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))};export{as as Footer};
//# sourceMappingURL=index.js.map
