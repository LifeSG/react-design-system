import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import t,{css as s,useTheme as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,u="object"==typeof d&&d&&d.Object===Object&&d,b="object"==typeof self&&self&&self.Object===Object&&self,h=u||b||Function("return this")(),m=h.Symbol,y=m,p=Object.prototype,x=p.hasOwnProperty,f=p.toString,v=y?y.toStringTag:void 0;var F=function(e){var r=x.call(e,v),n=e[v];try{e[v]=void 0;var t=!0}catch(e){}var s=f.call(e);return t&&(r?e[v]=n:delete e[v]),s},w=Object.prototype.toString;var $=F,C=function(e){return w.call(e)},E=m?m.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?$(e):C(e)};var B=D,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==B(e)},S=c,z=k,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;var O=function(e,r){if(S(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(M.test(e)||!_.test(e)||null!=r&&e in Object(r))};var j=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},L=D,W=j;var T,H=function(e){if(!W(e))return!1;var r=L(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},U=h["__core-js_shared__"],V=(T=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var N=function(e){return!!V&&V in e},Y=Function.prototype.toString;var P=H,G=N,I=j,X=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},R=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e,r){return null==e?void 0:e[r]},re=function(e){return!(!I(e)||G(e))&&(P(e)?K:R).test(X(e))},ne=ee;var te=function(e,r){var n=ne(e,r);return re(n)?n:void 0},se=te(Object,"create"),ie=se;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var oe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},le=se,de=Object.prototype.hasOwnProperty;var ge=function(e){var r=this.__data__;if(le){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(r,e)?r[e]:void 0},ce=se,ue=Object.prototype.hasOwnProperty;var be=function(e){var r=this.__data__;return ce?void 0!==r[e]:ue.call(r,e)},he=se;var me=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===r?"__lodash_hash_undefined__":r,this},ye=ae,pe=oe,xe=ge,fe=be,ve=me;function Fe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Fe.prototype.clear=ye,Fe.prototype.delete=pe,Fe.prototype.get=xe,Fe.prototype.has=fe,Fe.prototype.set=ve;var we=Fe;var $e=function(){this.__data__=[],this.size=0};var Ce=function(e,r){return e===r||e!=e&&r!=r};var Ee=function(e,r){for(var n=e.length;n--;)if(Ce(e[n][0],r))return n;return-1},De=Ee,Be=Array.prototype.splice;var Ae=function(e){var r=this.__data__,n=De(r,e);return!(n<0)&&(n==r.length-1?r.pop():Be.call(r,n,1),--this.size,!0)},ke=Ee;var Se=function(e){var r=this.__data__,n=ke(r,e);return n<0?void 0:r[n][1]},ze=Ee;var _e=function(e){return ze(this.__data__,e)>-1},Me=Ee;var Oe=function(e,r){var n=this.__data__,t=Me(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},je=$e,Le=Ae,We=Se,Te=_e,He=Oe;function Ue(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Ue.prototype.clear=je,Ue.prototype.delete=Le,Ue.prototype.get=We,Ue.prototype.has=Te,Ue.prototype.set=He;var Ve=Ue,Ne=te(h,"Map"),Ye=we,Pe=Ve,Ge=Ne;var Ie=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Xe=function(e,r){var n=e.__data__;return Ie(r)?n["string"==typeof r?"string":"hash"]:n.map},Re=Xe;var Je=function(e){var r=Re(this,e).delete(e);return this.size-=r?1:0,r},Ze=Xe;var qe=function(e){return Ze(this,e).get(e)},Qe=Xe;var Ke=function(e){return Qe(this,e).has(e)},er=Xe;var rr=function(e,r){var n=er(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},nr=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ge||Pe),string:new Ye}},tr=Je,sr=qe,ir=Ke,ar=rr;function or(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}or.prototype.clear=nr,or.prototype.delete=tr,or.prototype.get=sr,or.prototype.has=ir,or.prototype.set=ar;var lr=or;function dr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,s=r?r.apply(this,t):t[0],i=n.cache;if(i.has(s))return i.get(s);var a=e.apply(this,t);return n.cache=i.set(s,a)||i,a};return n.cache=new(dr.Cache||lr),n}dr.Cache=lr;var gr=dr;var cr=function(e){var r=gr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,br=/\\(\\)?/g,hr=cr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(ur,(function(e,n,t,s){r.push(t?s.replace(br,"$1"):n||e)})),r}));var mr=function(e,r){for(var n=-1,t=null==e?0:e.length,s=Array(t);++n<t;)s[n]=r(e[n],n,e);return s},yr=c,pr=k,xr=m?m.prototype:void 0,fr=xr?xr.toString:void 0;var vr=function e(r){if("string"==typeof r)return r;if(yr(r))return mr(r,e)+"";if(pr(r))return fr?fr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Fr=vr;var wr=c,$r=O,Cr=hr,Er=function(e){return null==e?"":Fr(e)};var Dr=k;var Br=function(e,r){return wr(e)?e:$r(e,r)?[e]:Cr(Er(e))},Ar=function(e){if("string"==typeof e||Dr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var kr=function(e,r){for(var n=0,t=(r=Br(r,e)).length;null!=e&&n<t;)e=e[Ar(r[n++])];return n&&n==t?e:void 0};var Sr=g((function(e,r,n){var t=null==e?void 0:kr(e,r);return void 0===t?n:t}));const zr=(e,r,n)=>Sr(n,r)||Sr(e,r),_r=(e,r)=>{const n=r||e.defaultValue;return Sr(e.collections,n)},Mr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Or=e=>r=>{var n;const t=r.theme,s=_r(Mr,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${zr(s,e,t.overrides.border)}px`:`${s[e]}px`},jr={"width-005":Or("width-005"),"width-010":Or("width-010"),"width-020":Or("width-020"),"width-040":Or("width-040"),solid:(Lr="solid",e=>{var r;const n=e.theme,t=_r(Mr,null==n?void 0:n.borderScheme),s=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?zr(t,Lr,n.overrides.border):t[Lr];return"function"==typeof s?s(e):s})};var Lr;const Wr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Tr=e=>r=>{var n;const t=r.theme,s=_r(Wr,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?zr(s,e,t.overrides.primitiveColour):s[e]},Hr={"brand-10":Tr("brand-10"),"brand-20":Tr("brand-20"),"brand-30":Tr("brand-30"),"brand-40":Tr("brand-40"),"brand-50":Tr("brand-50"),"brand-60":Tr("brand-60"),"brand-70":Tr("brand-70"),"brand-80":Tr("brand-80"),"brand-90":Tr("brand-90"),"brand-95":Tr("brand-95"),"brand-100":Tr("brand-100"),"primary-10":Tr("primary-10"),"primary-20":Tr("primary-20"),"primary-30":Tr("primary-30"),"primary-40":Tr("primary-40"),"primary-50":Tr("primary-50"),"primary-60":Tr("primary-60"),"primary-70":Tr("primary-70"),"primary-80":Tr("primary-80"),"primary-90":Tr("primary-90"),"primary-95":Tr("primary-95"),"primary-100":Tr("primary-100"),"secondary-10":Tr("secondary-10"),"secondary-20":Tr("secondary-20"),"secondary-30":Tr("secondary-30"),"secondary-40":Tr("secondary-40"),"secondary-50":Tr("secondary-50"),"secondary-60":Tr("secondary-60"),"secondary-70":Tr("secondary-70"),"secondary-80":Tr("secondary-80"),"secondary-90":Tr("secondary-90"),"secondary-95":Tr("secondary-95"),"secondary-100":Tr("secondary-100"),"neutral-10":Tr("neutral-10"),"neutral-20":Tr("neutral-20"),"neutral-30":Tr("neutral-30"),"neutral-40":Tr("neutral-40"),"neutral-50":Tr("neutral-50"),"neutral-60":Tr("neutral-60"),"neutral-70":Tr("neutral-70"),"neutral-80":Tr("neutral-80"),"neutral-90":Tr("neutral-90"),"neutral-95":Tr("neutral-95"),"neutral-100":Tr("neutral-100"),"success-10":Tr("success-10"),"success-20":Tr("success-20"),"success-30":Tr("success-30"),"success-40":Tr("success-40"),"success-50":Tr("success-50"),"success-60":Tr("success-60"),"success-70":Tr("success-70"),"success-80":Tr("success-80"),"success-90":Tr("success-90"),"success-95":Tr("success-95"),"success-100":Tr("success-100"),"warning-10":Tr("warning-10"),"warning-20":Tr("warning-20"),"warning-30":Tr("warning-30"),"warning-40":Tr("warning-40"),"warning-50":Tr("warning-50"),"warning-60":Tr("warning-60"),"warning-70":Tr("warning-70"),"warning-80":Tr("warning-80"),"warning-90":Tr("warning-90"),"warning-95":Tr("warning-95"),"warning-100":Tr("warning-100"),"error-10":Tr("error-10"),"error-20":Tr("error-20"),"error-30":Tr("error-30"),"error-40":Tr("error-40"),"error-50":Tr("error-50"),"error-60":Tr("error-60"),"error-70":Tr("error-70"),"error-80":Tr("error-80"),"error-90":Tr("error-90"),"error-95":Tr("error-95"),"error-100":Tr("error-100"),"info-10":Tr("info-10"),"info-20":Tr("info-20"),"info-30":Tr("info-30"),"info-40":Tr("info-40"),"info-50":Tr("info-50"),"info-60":Tr("info-60"),"info-70":Tr("info-70"),"info-80":Tr("info-80"),"info-90":Tr("info-90"),"info-95":Tr("info-95"),"info-100":Tr("info-100"),white:Tr("white"),black:Tr("black"),"primary-inverse":Tr("primary-inverse")},Ur={text:Tr("neutral-20"),"text-subtle":Tr("neutral-30"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-60"),"text-primary":Tr("primary-50"),"text-hover":Tr("primary-40"),"text-selected":Tr("primary-50"),"text-selected-hover":Tr("primary-40"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-20"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("error-40"),"text-info":Tr("info-40"),"text-inverse":Tr("white"),icon:Tr("neutral-50"),"icon-subtle":Tr("neutral-60"),"icon-strongest":Tr("neutral-20"),"icon-primary":Tr("primary-50"),"icon-primary-subtle":Tr("primary-60"),"icon-primary-subtlest":Tr("primary-70"),"icon-hover":Tr("primary-40"),"icon-selected":Tr("primary-50"),"icon-selected-hover":Tr("primary-40"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-60"),"icon-success":Tr("success-50"),"icon-warning":Tr("warning-60"),"icon-error":Tr("error-50"),"icon-error-strong":Tr("error-40"),"icon-info":Tr("info-50"),"icon-inverse":Tr("white"),"icon-primary-inverse":Tr("primary-inverse"),border:Tr("neutral-90"),"border-strong":Tr("neutral-70"),"border-stronger":Tr("neutral-50"),"border-primary":Tr("primary-50"),"border-primary-subtle":Tr("primary-60"),"border-hover":Tr("primary-90"),"border-hover-strong":Tr("primary-60"),"border-selected":Tr("primary-50"),"border-selected-subtle":Tr("primary-70"),"border-selected-subtlest":Tr("primary-90"),"border-selected-hover":Tr("primary-40"),"border-focus":Tr("primary-60"),"border-focus-strong":Tr("primary-50"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-70"),"border-success":Tr("success-60"),"border-warning":Tr("warning-60"),"border-error":Tr("error-60"),"border-error-focus":Tr("error-60"),"border-error-focus-strong":Tr("error-40"),"border-error-strong":Tr("error-40"),"border-info":Tr("info-60"),bg:Tr("white"),"bg-strong":Tr("neutral-100"),"bg-stronger":Tr("neutral-95"),"bg-strongest":Tr("neutral-90"),"bg-hover":Tr("primary-95"),"bg-hover-strong":Tr("primary-90"),"bg-hover-subtle":Tr("primary-100"),"bg-hover-neutral":Tr("neutral-100"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("primary-95"),"bg-selected-hover":Tr("primary-90"),"bg-selected-strong":Tr("primary-90"),"bg-selected-stronger":Tr("primary-70"),"bg-selected-strongest":Tr("primary-50"),"bg-selected-strongest-hover":Tr("primary-40"),"bg-disabled":Tr("neutral-95"),"bg-selected-disabled":Tr("neutral-95"),"bg-selected-stronger-disabled":Tr("neutral-70"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("info-100"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("error-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-20"),"bg-inverse-subtle":Tr("neutral-30"),"bg-inverse-subtler":Tr("neutral-50"),"bg-inverse-subtlest":Tr("neutral-60"),"bg-inverse-hover":Tr("neutral-40"),"bg-primary":Tr("primary-50"),"bg-primary-subtle":Tr("primary-60"),"bg-primary-subtler":Tr("primary-95"),"bg-primary-subtlest":Tr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Tr("primary-40"),"bg-primary-subtlest-hover":Tr("primary-90"),"bg-primary-subtlest-selected":Tr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Tr("primary-50"),"hyperlink-hover":Tr("primary-40"),"hyperlink-visited":Tr("primary-40"),"hyperlink-inverse":Tr("primary-inverse"),"focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")},Vr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,pa:{text:Tr("neutral-30"),"text-subtle":Tr("neutral-40"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-70"),"text-primary":Tr("neutral-10"),"text-hover":Tr("neutral-70"),"text-selected":Tr("neutral-20"),"text-selected-hover":Tr("neutral-10"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-40"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("brand-30"),"text-info":Tr("neutral-40"),"text-inverse":Tr("neutral-100"),icon:Tr("neutral-40"),"icon-subtle":Tr("neutral-50"),"icon-strongest":Tr("neutral-10"),"icon-primary":Tr("neutral-10"),"icon-primary-subtle":Tr("neutral-30"),"icon-primary-subtlest":Tr("neutral-60"),"icon-hover":Tr("neutral-70"),"icon-selected":Tr("brand-20"),"icon-selected-hover":Tr("brand-10"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-40"),"icon-success":Tr("success-40"),"icon-warning":Tr("warning-60"),"icon-error":Tr("brand-30"),"icon-error-strong":Tr("brand-10"),"icon-info":Tr("neutral-40"),"icon-inverse":Tr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Tr("neutral-90"),"border-strong":Tr("neutral-30"),"border-stronger":Tr("neutral-20"),"border-primary":Tr("neutral-40"),"border-primary-subtle":Tr("neutral-60"),"border-hover":Tr("neutral-80"),"border-hover-strong":Tr("neutral-10"),"border-selected":Tr("neutral-20"),"border-selected-subtle":Tr("neutral-40"),"border-selected-subtlest":Tr("neutral-70"),"border-selected-hover":Tr("neutral-10"),"border-focus":Tr("brand-60"),"border-focus-strong":Tr("brand-40"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-80"),"border-success":Tr("success-40"),"border-warning":Tr("warning-60"),"border-error":Tr("brand-30"),"border-error-focus":Tr("brand-20"),"border-error-focus-strong":Tr("brand-10"),"border-error-strong":Tr("brand-20"),"border-info":Tr("neutral-40"),bg:Tr("neutral-100"),"bg-strong":Tr("neutral-95"),"bg-stronger":Tr("neutral-90"),"bg-strongest":Tr("neutral-80"),"bg-hover":Tr("brand-90"),"bg-hover-strong":Tr("brand-80"),"bg-hover-subtle":Tr("neutral-90"),"bg-hover-neutral":Tr("neutral-90"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("brand-50"),"bg-selected-hover":Tr("brand-70"),"bg-selected-strong":Tr("brand-90"),"bg-selected-stronger":Tr("brand-40"),"bg-selected-strongest":Tr("brand-20"),"bg-selected-strongest-hover":Tr("brand-10"),"bg-disabled":Tr("neutral-90"),"bg-selected-disabled":Tr("neutral-90"),"bg-selected-stronger-disabled":Tr("neutral-80"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("neutral-95"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("brand-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-40"),"bg-inverse-subtle":Tr("neutral-60"),"bg-inverse-subtler":Tr("neutral-70"),"bg-inverse-subtlest":Tr("neutral-80"),"bg-inverse-hover":Tr("neutral-30"),"bg-primary":Tr("brand-20"),"bg-primary-subtle":Tr("brand-60"),"bg-primary-subtler":Tr("brand-80"),"bg-primary-subtlest":Tr("brand-100"),"bg-available":Tr("success-60"),"bg-primary-hover":Tr("brand-10"),"bg-primary-subtlest-hover":Tr("brand-80"),"bg-primary-subtlest-selected":Tr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Tr("neutral-10"),"hyperlink-hover":Tr("neutral-40"),"hyperlink-visited":Tr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")}},defaultValue:"lifesg"},Nr=e=>r=>{var n;const t=r.theme,s=_r(Vr,null==t?void 0:t.colourScheme),i=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?zr(s,e,t.overrides.semanticColour):s[e];return"function"==typeof i?i(r):i},Yr={text:Nr("text"),"text-subtle":Nr("text-subtle"),"text-subtler":Nr("text-subtler"),"text-subtlest":Nr("text-subtlest"),"text-primary":Nr("text-primary"),"text-hover":Nr("text-hover"),"text-selected":Nr("text-selected"),"text-selected-hover":Nr("text-selected-hover"),"text-disabled":Nr("text-disabled"),"text-disabled-subtle":Nr("text-disabled-subtle"),"text-disabled-subtlest":Nr("text-disabled-subtlest"),"text-selected-disabled":Nr("text-selected-disabled"),"text-success":Nr("text-success"),"text-warning":Nr("text-warning"),"text-error":Nr("text-error"),"text-info":Nr("text-info"),"text-inverse":Nr("text-inverse"),icon:Nr("icon"),"icon-subtle":Nr("icon-subtle"),"icon-strongest":Nr("icon-strongest"),"icon-primary":Nr("icon-primary"),"icon-primary-subtle":Nr("icon-primary-subtle"),"icon-primary-subtlest":Nr("icon-primary-subtlest"),"icon-hover":Nr("icon-hover"),"icon-selected":Nr("icon-selected"),"icon-selected-hover":Nr("icon-selected-hover"),"icon-disabled":Nr("icon-disabled"),"icon-disabled-subtle":Nr("icon-disabled-subtle"),"icon-selected-disabled":Nr("icon-selected-disabled"),"icon-success":Nr("icon-success"),"icon-warning":Nr("icon-warning"),"icon-error":Nr("icon-error"),"icon-error-strong":Nr("icon-error-strong"),"icon-info":Nr("icon-info"),"icon-inverse":Nr("icon-inverse"),"icon-primary-inverse":Nr("icon-primary-inverse"),border:Nr("border"),"border-strong":Nr("border-strong"),"border-stronger":Nr("border-stronger"),"border-primary":Nr("border-primary"),"border-primary-subtle":Nr("border-primary-subtle"),"border-hover":Nr("border-hover"),"border-hover-strong":Nr("border-hover-strong"),"border-selected":Nr("border-selected"),"border-selected-subtle":Nr("border-selected-subtle"),"border-selected-subtlest":Nr("border-selected-subtlest"),"border-selected-hover":Nr("border-selected-hover"),"border-focus":Nr("border-focus"),"border-focus-strong":Nr("border-focus-strong"),"border-disabled":Nr("border-disabled"),"border-selected-disabled":Nr("border-selected-disabled"),"border-success":Nr("border-success"),"border-warning":Nr("border-warning"),"border-error":Nr("border-error"),"border-error-focus":Nr("border-error-focus"),"border-error-focus-strong":Nr("border-error-focus-strong"),"border-error-strong":Nr("border-error-strong"),"border-info":Nr("border-info"),bg:Nr("bg"),"bg-strong":Nr("bg-strong"),"bg-stronger":Nr("bg-stronger"),"bg-strongest":Nr("bg-strongest"),"bg-hover":Nr("bg-hover"),"bg-hover-strong":Nr("bg-hover-strong"),"bg-hover-subtle":Nr("bg-hover-subtle"),"bg-hover-neutral":Nr("bg-hover-neutral"),"bg-hover-neutral-strong":Nr("bg-hover-neutral-strong"),"bg-selected":Nr("bg-selected"),"bg-selected-hover":Nr("bg-selected-hover"),"bg-selected-strong":Nr("bg-selected-strong"),"bg-selected-stronger":Nr("bg-selected-stronger"),"bg-selected-strongest":Nr("bg-selected-strongest"),"bg-selected-strongest-hover":Nr("bg-selected-strongest-hover"),"bg-disabled":Nr("bg-disabled"),"bg-selected-disabled":Nr("bg-selected-disabled"),"bg-selected-stronger-disabled":Nr("bg-selected-stronger-disabled"),"bg-success":Nr("bg-success"),"bg-success-hover":Nr("bg-success-hover"),"bg-success-strong":Nr("bg-success-strong"),"bg-success-strong-hover":Nr("bg-success-strong-hover"),"bg-warning":Nr("bg-warning"),"bg-warning-hover":Nr("bg-warning-hover"),"bg-warning-strong":Nr("bg-warning-strong"),"bg-warning-strong-hover":Nr("bg-warning-strong-hover"),"bg-info":Nr("bg-info"),"bg-info-hover":Nr("bg-info-hover"),"bg-info-strong":Nr("bg-info-strong"),"bg-info-strong-hover":Nr("bg-info-strong-hover"),"bg-error":Nr("bg-error"),"bg-error-hover":Nr("bg-error-hover"),"bg-error-strong":Nr("bg-error-strong"),"bg-error-strong-hover":Nr("bg-error-strong-hover"),"bg-inverse":Nr("bg-inverse"),"bg-inverse-subtle":Nr("bg-inverse-subtle"),"bg-inverse-subtler":Nr("bg-inverse-subtler"),"bg-inverse-subtlest":Nr("bg-inverse-subtlest"),"bg-inverse-hover":Nr("bg-inverse-hover"),"bg-primary":Nr("bg-primary"),"bg-primary-subtle":Nr("bg-primary-subtle"),"bg-primary-subtler":Nr("bg-primary-subtler"),"bg-primary-subtlest":Nr("bg-primary-subtlest"),"bg-available":Nr("bg-available"),"bg-primary-hover":Nr("bg-primary-hover"),"bg-primary-subtlest-hover":Nr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Nr("bg-primary-subtlest-selected"),"overlay-strong":Nr("overlay-strong"),"overlay-subtle":Nr("overlay-subtle"),hyperlink:Nr("hyperlink"),"hyperlink-hover":Nr("hyperlink-hover"),"hyperlink-visited":Nr("hyperlink-visited"),"hyperlink-inverse":Nr("hyperlink-inverse"),"focus-ring":Nr("focus-ring"),"focus-ring-inverse":Nr("focus-ring-inverse")},Pr={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:a,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:jr["width-010"](r),g=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,c=null!==(i="function"==typeof l?l(r):l)&&void 0!==i?i:Yr.border(r),u=jr.solid;return s`
            border: ${d} ${u} ${c};
            border-radius: ${g};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:a,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:jr["width-010"](r),g=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,c=null!==(i="function"==typeof l?l(r):l)&&void 0!==i?i:Yr.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${g}' ry='${g}' stroke='${c}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return s`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${g};
        `}}},defaultValue:"default"},Gr=e=>1===e.length&&"theme"in e[0],Ir=e=>(...r)=>n=>{const t=Gr(r)?[]:r,s=Gr(r)?r[0]:n,i=s.theme;return(0,_r(Pr,null==i?void 0:i.borderScheme)[e])(...t)(s)},Xr={solid:Ir("solid"),"dashed-default":Ir("dashed-default")},Rr={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Jr=e=>r=>{var n;const t=r.theme,s=_r(Rr,null==t?void 0:t.breakpointScheme);let i;return i=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?zr(s,e,t.overrides.breakpoint):s[e],i},Zr={"xxs-min":Jr("xxs-min"),"xxs-max":Jr("xxs-max"),"xs-min":Jr("xs-min"),"xs-max":Jr("xs-max"),"sm-min":Jr("sm-min"),"sm-max":Jr("sm-max"),"md-min":Jr("md-min"),"md-max":Jr("md-max"),"lg-min":Jr("lg-min"),"lg-max":Jr("lg-max"),"xl-min":Jr("xl-min"),"xl-max":Jr("xl-max"),"xxl-min":Jr("xxl-min"),"xxs-column":Jr("xxs-column"),"xs-column":Jr("xs-column"),"sm-column":Jr("sm-column"),"md-column":Jr("md-column"),"lg-column":Jr("lg-column"),"xl-column":Jr("xl-column"),"xxl-column":Jr("xxl-column"),"xxs-gutter":Jr("xxs-gutter"),"xs-gutter":Jr("xs-gutter"),"sm-gutter":Jr("sm-gutter"),"md-gutter":Jr("md-gutter"),"lg-gutter":Jr("lg-gutter"),"xl-gutter":Jr("xl-gutter"),"xxl-gutter":Jr("xxl-gutter"),"xxs-margin":Jr("xxs-margin"),"xs-margin":Jr("xs-margin"),"sm-margin":Jr("sm-margin"),"md-margin":Jr("md-margin"),"lg-margin":Jr("lg-margin"),"xl-margin":Jr("xl-margin"),"xxl-margin":Jr("xxl-margin")},qr=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Zr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Qr={MaxWidth:qr("max-width"),MinWidth:qr("min-width")},Kr={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},en=e=>r=>{var n;const t=r.theme,s=_r(Kr,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?zr(s,e,t.overrides.fontSpec):s[e]},rn={"heading-size-xxl":en("heading-size-xxl"),"heading-size-xl":en("heading-size-xl"),"heading-size-lg":en("heading-size-lg"),"heading-size-md":en("heading-size-md"),"heading-size-sm":en("heading-size-sm"),"heading-size-xs":en("heading-size-xs"),"heading-lh-xxl":en("heading-lh-xxl"),"heading-lh-xl":en("heading-lh-xl"),"heading-lh-lg":en("heading-lh-lg"),"heading-lh-md":en("heading-lh-md"),"heading-lh-sm":en("heading-lh-sm"),"heading-lh-xs":en("heading-lh-xs"),"heading-ls-xxl":en("heading-ls-xxl"),"heading-ls-xl":en("heading-ls-xl"),"heading-ls-lg":en("heading-ls-lg"),"heading-ls-md":en("heading-ls-md"),"heading-ls-sm":en("heading-ls-sm"),"heading-ls-xs":en("heading-ls-xs"),"weight-light":en("weight-light"),"weight-regular":en("weight-regular"),"weight-semibold":en("weight-semibold"),"weight-bold":en("weight-bold"),"font-family":en("font-family"),"body-size-baseline":en("body-size-baseline"),"body-size-md":en("body-size-md"),"body-size-sm":en("body-size-sm"),"body-size-xs":en("body-size-xs"),"body-lh-baseline":en("body-lh-baseline"),"body-lh-md":en("body-lh-md"),"body-lh-sm":en("body-lh-sm"),"body-lh-xs":en("body-lh-xs"),"body-ls-baseline":en("body-ls-baseline"),"body-ls-md":en("body-ls-md"),"body-ls-sm":en("body-ls-sm"),"body-ls-xs":en("body-ls-xs"),"form-label-size":en("form-label-size"),"form-description-size":en("form-description-size"),"form-label-lh":en("form-label-lh"),"form-description-lh":en("form-description-lh"),"form-label-ls":en("form-label-ls"),"form-description-ls":en("form-description-ls")},nn=(e,r,n,t,i)=>{const{disableLigatures:a}=i||{};return s`
        font-family: ${en("font-family")};
        font-size: ${en(e)};
        font-weight: ${en(r)};
        line-height: ${en(n)};
        letter-spacing: ${en(t)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},tn=(e={})=>({"heading-xxl-light":nn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":nn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":nn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":nn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":nn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":nn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":nn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":nn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":nn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":nn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":nn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":nn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":nn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":nn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":nn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":nn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":nn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":nn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":nn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":nn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":nn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":nn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":nn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":nn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":nn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":nn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":nn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":nn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":nn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":nn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":nn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":nn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":nn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":nn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":nn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":nn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":nn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":nn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":nn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":nn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":nn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":nn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),sn={collections:{default:tn(),bookingsg:tn({disableLigatures:!0}),pa:tn({disableLigatures:!0})},defaultValue:"default"},an=e=>r=>{var n;const t=r.theme,s=_r(sn,null==t?void 0:t.fontScheme),i=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?zr(s,e,t.overrides.font):s[e];return"function"==typeof i?i(r):i},on={"heading-xxl-light":an("heading-xxl-light"),"heading-xxl-regular":an("heading-xxl-regular"),"heading-xxl-semibold":an("heading-xxl-semibold"),"heading-xxl-bold":an("heading-xxl-bold"),"heading-xl-light":an("heading-xl-light"),"heading-xl-regular":an("heading-xl-regular"),"heading-xl-semibold":an("heading-xl-semibold"),"heading-xl-bold":an("heading-xl-bold"),"heading-lg-light":an("heading-lg-light"),"heading-lg-regular":an("heading-lg-regular"),"heading-lg-semibold":an("heading-lg-semibold"),"heading-lg-bold":an("heading-lg-bold"),"heading-md-light":an("heading-md-light"),"heading-md-regular":an("heading-md-regular"),"heading-md-semibold":an("heading-md-semibold"),"heading-md-bold":an("heading-md-bold"),"heading-sm-light":an("heading-sm-light"),"heading-sm-regular":an("heading-sm-regular"),"heading-sm-semibold":an("heading-sm-semibold"),"heading-sm-bold":an("heading-sm-bold"),"heading-xs-light":an("heading-xs-light"),"heading-xs-regular":an("heading-xs-regular"),"heading-xs-semibold":an("heading-xs-semibold"),"heading-xs-bold":an("heading-xs-bold"),"body-baseline-light":an("body-baseline-light"),"body-baseline-regular":an("body-baseline-regular"),"body-baseline-semibold":an("body-baseline-semibold"),"body-baseline-bold":an("body-baseline-bold"),"body-md-light":an("body-md-light"),"body-md-regular":an("body-md-regular"),"body-md-semibold":an("body-md-semibold"),"body-md-bold":an("body-md-bold"),"body-sm-light":an("body-sm-light"),"body-sm-regular":an("body-sm-regular"),"body-sm-semibold":an("body-sm-semibold"),"body-sm-bold":an("body-sm-bold"),"body-xs-light":an("body-xs-light"),"body-xs-regular":an("body-xs-regular"),"body-xs-semibold":an("body-xs-semibold"),"body-xs-bold":an("body-xs-bold"),"form-label":an("form-label"),"form-description":an("form-description")},ln={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},dn=e=>r=>{var n;const t=r.theme,s=_r(ln,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${zr(s,e,t.overrides.spacing)}px`:`${s[e]}px`},gn={"spacing-0":dn("spacing-0"),"spacing-4":dn("spacing-4"),"spacing-8":dn("spacing-8"),"spacing-12":dn("spacing-12"),"spacing-16":dn("spacing-16"),"spacing-20":dn("spacing-20"),"spacing-24":dn("spacing-24"),"spacing-32":dn("spacing-32"),"spacing-40":dn("spacing-40"),"spacing-48":dn("spacing-48"),"spacing-64":dn("spacing-64"),"spacing-72":dn("spacing-72"),"layout-xs":dn("layout-xs"),"layout-sm":dn("layout-sm"),"layout-md":dn("layout-md"),"layout-lg":dn("layout-lg"),"layout-xl":dn("layout-xl"),"layout-xxl":dn("layout-xxl"),"layout-xxxl":dn("layout-xxxl")},cn=Object.assign(Object.assign({},Yr),{Primitive:Hr}),un=Object.assign(Object.assign({},on),{Spec:rn});Object.assign(Object.assign({},jr),{Util:Xr});const bn=gn,hn=Zr,mn=Qr,yn=(e,r,n=!1)=>s`
        ${un[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,pn=e=>{if(e)return s`
            ${r=e,s`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},xn=(e,r)=>s`
    ${yn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?s`
            display: block;
            ${pn(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${pn(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${cn.text};
`;var fn;!function(n){const i=(e,r,n)=>{const s=t(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>xn(r,e)}
        `;return s.displayName=`Typography.${n}`,s};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const a=(e,r)=>{const n=t.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>xn(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=a("body-baseline","BodyBL"),n.BodyMD=a("body-md","BodyMD"),n.BodySM=a("body-sm","BodySM"),n.BodyXS=a("body-xs","BodyXS");const o=(n,i)=>{const a=t.a`
            ${e=>s`
                ${yn(n,e.weight||"regular")}
                color: ${cn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${cn["text-hover"]};
                }
            `}
        `,o=n=>{var{external:t=!1,children:s}=n,i=l(n,["external","children"]);return e(a,Object.assign({},i,{children:[s,t&&r(vn,{})]}))};return o.displayName=`Typography.${i}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(fn||(fn={}));const vn=t(a)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Fn=t.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${mn.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,wn=t(fn.BodyMD)`
    margin-bottom: ${bn["spacing-16"]};
`,$n=t.div`
    display: flex;
    align-items: flex-start;
`,Cn=t.a`
    &:not(:last-child) {
        margin-right: ${bn["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${mn.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${bn["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,En=()=>e(Fn,{"data-testid":"download-app-section",children:[r(wn,{weight:"semibold",children:"Download the app"}),e($n,{children:[r(Cn,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),r(Cn,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var Dn={exports:{}},Bn=g(Dn.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",s="second",i="minute",a="hour",o="day",l="week",d="month",g="quarter",c="year",u="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},x={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),s=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(s,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),s=r.clone().add(t,d),i=n-s<0,a=r.clone().add(t+(i?-1:1),d);return+(-(t+(n-s)/(i?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:c,w:l,d:o,D:u,h:a,m:i,s:s,ms:t,Q:g}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",v={};v[f]=y;var F="$isDayjsObject",w=function(e){return e instanceof D||!(!e||!e[F])},$=function e(r,n,t){var s;if(!r)return f;if("string"==typeof r){var i=r.toLowerCase();v[i]&&(s=i),n&&(v[i]=n,s=i);var a=r.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=r.name;v[o]=r,s=o}return!t&&s&&(f=s),s||!t&&f},C=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},E=x;E.l=$,E.i=w,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(h);if(t){var s=t[2]-1||0,i=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],s,t[3]||1,t[4]||0,t[5]||0,t[6]||0,i)):new Date(t[1],s,t[3]||1,t[4]||0,t[5]||0,t[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var n=C(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!E.u(r)||r,g=E.p(e),b=function(e,r){var s=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?s:s.endOf(o)},h=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,y=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(g){case c:return t?b(1,0):b(31,11);case d:return t?b(1,y):b(0,y+1);case l:var f=this.$locale().weekStart||0,v=(m<f?m+7:m)-f;return b(t?p-v:p+(6-v),y);case o:case u:return h(x+"Hours",0);case a:return h(x+"Minutes",1);case i:return h(x+"Seconds",2);case s:return h(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=E.p(e),g="set"+(this.$u?"UTC":""),b=(n={},n[o]=g+"Date",n[u]=g+"Date",n[d]=g+"Month",n[c]=g+"FullYear",n[a]=g+"Hours",n[i]=g+"Minutes",n[s]=g+"Seconds",n[t]=g+"Milliseconds",n)[l],h=l===o?this.$D+(r-this.$W):r;if(l===d||l===c){var m=this.clone().set(u,1);m.$d[b](h),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(t,g){var u,b=this;t=Number(t);var h=E.p(g),m=function(e){var r=C(b);return E.w(r.date(r.date()+Math.round(e*t)),b)};if(h===d)return this.set(d,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===o)return m(1);if(h===l)return m(7);var y=(u={},u[i]=r,u[a]=n,u[s]=e,u)[h]||1,p=this.$d.getTime()+t*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var t=e||"YYYY-MM-DDTHH:mm:ssZ",s=E.z(this),i=this.$H,a=this.$m,o=this.$M,l=n.weekdays,d=n.months,g=n.meridiem,c=function(e,n,s,i){return e&&(e[n]||e(r,t))||s[n].slice(0,i)},u=function(e){return E.s(i%12||12,e,"0")},h=g||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return c(n.monthsShort,o,d,3);case"MMMM":return c(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return c(n.weekdaysMin,r.$W,l,2);case"ddd":return c(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,u,b){var h,m=this,y=E.p(u),p=C(t),x=(p.utcOffset()-this.utcOffset())*r,f=this-p,v=function(){return E.m(m,p)};switch(y){case c:h=v()/12;break;case d:h=v();break;case g:h=v()/3;break;case l:h=(f-x)/6048e5;break;case o:h=(f-x)/864e5;break;case a:h=f/n;break;case i:h=f/r;break;case s:h=f/e;break;default:h=f}return b?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return C.prototype=B,[["$ms",t],["$s",s],["$m",i],["$H",a],["$W",o],["$M",d],["$y",c],["$D",u]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,D,C),e.$i=!0),C},C.locale=$,C.isDayjs=w,C.unix=function(e){return C(1e3*e)},C.en=v[f],C.Ls=v,C.p={},C}());const An={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},kn={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Sn={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var zn;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const t=r(n);return`${`${(new Date).getFullYear()} ${t}`} Last Updated ${Bn(e).format("D MMMM YYYY")}`};const r=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,r)=>{const n=(e=>{switch(e){case"bookingsg":return kn;case"mylegacy":return Sn;default:return An}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),r&&r.privacy?r.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),r&&r.termsOfUse?r.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),r&&r.reportVulnerability?r.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(zn||(zn={}));const _n=t.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:t,$xlSpan:i,$lgStart:a,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:g,$smSpan:c,$xsStart:u,$xsSpan:b,$xxsStart:h,$xxsSpan:m}=e;return s`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Qr.MaxWidth.xl} {
                grid-column: ${t||"auto"} / span ${i||1};
            }

            ${Qr.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${o||1};
            }

            ${Qr.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${d||1};
            }

            ${Qr.MaxWidth.sm} {
                grid-column: ${g||"auto"} / span ${c||1};
            }

            ${Qr.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${b||1};
            }

            ${Qr.MaxWidth.xxs} {
                grid-column: ${h||"auto"} / span ${m||1};
            }
        `}}
`,Mn=o.forwardRef(((e,n)=>{const t=i(),{xxlCols:s,xlCols:a,lgCols:o,mdCols:d,smCols:g,xsCols:c,xxsCols:u}=e,b=l(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,r,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${n}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,t]=e;if(-1===t)return{start:n,span:r-n+1};return{start:n,span:Math.min(t-n,r)}}return{start:void 0,span:Math.min(e,r)}};return r(_n,Object.assign({ref:n},(()=>{const e=Zr["xxl-column"]({theme:t}),r=Zr["xl-column"]({theme:t}),n=Zr["lg-column"]({theme:t}),i=Zr["md-column"]({theme:t}),l=Zr["sm-column"]({theme:t}),b=Zr["xs-column"]({theme:t}),m=Zr["xxs-column"]({theme:t}),y=h(s||a||o||d||g||c||u,e,"xxl"),p=h(a||o||d||g||c||u,r,"xl"),x=h(o||d||g||c||u,n,"lg"),f=h(d||g||c||u,i,"md"),v=h(g||c||u,l,"sm"),F=h(c||u,b,"xs"),w=h(u,m,"xxs");return{$xxlStart:y.start,$xxlSpan:y.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:x.start,$lgSpan:x.span,$mdStart:f.start,$mdSpan:f.span,$smStart:v.start,$smSpan:v.span,$xsStart:F.start,$xsSpan:F.span,$xxsStart:w.start,$xxsSpan:w.span}})(),b))})),On=t.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?s`
                padding: 0 ${hn["xxl-margin"]}px;
            `:s`
                padding: 0 ${hn["xxl-margin"]}px;
                max-width: 1440px;

                ${mn.MaxWidth.xl} {
                    padding: 0 ${hn["xl-margin"]}px;
                }

                ${mn.MaxWidth.lg} {
                    padding: 0 ${hn["lg-margin"]}px;
                }

                ${mn.MaxWidth.md} {
                    padding: 0 ${hn["md-margin"]}px;
                }

                ${mn.MaxWidth.sm} {
                    padding: 0 ${hn["sm-margin"]}px;
                }

                ${mn.MaxWidth.xs} {
                    padding: 0 ${hn["xs-margin"]}px;
                }

                ${mn.MaxWidth.xxs} {
                    padding: 0 ${hn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return s`
                    column-gap: ${hn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${hn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${mn.MaxWidth.xl} {
                        column-gap: ${hn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mn.MaxWidth.lg} {
                        column-gap: ${hn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mn.MaxWidth.md} {
                        column-gap: ${hn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mn.MaxWidth.sm} {
                        column-gap: ${hn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mn.MaxWidth.xs} {
                        column-gap: ${hn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${mn.MaxWidth.xxs} {
                        column-gap: ${hn["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return s`
                    display: flex;
                    flex-direction: column;
                `;default:return s`
                    display: flex;
                `}}}
`,jn=o.forwardRef(((e,n)=>{const{children:t,"data-testid":s="container",type:i="flex",stretch:a=!1}=e,o=l(e,["children","data-testid","type","stretch"]);return r(On,Object.assign({ref:n,"data-testid":s,$type:i,$stretch:a},o,{children:t}))})),Ln=o.forwardRef(((e,n)=>{const{children:t,"data-testid":s="section",stretch:i=!1}=e,a=l(e,["children","data-testid","stretch"]);return r(Wn,Object.assign({ref:n,"data-testid":s,$stretch:i},a,{children:t}))})),Wn=t.section`
    display: block;
    position: relative;
`,Tn=o.forwardRef(((e,n)=>{const{children:t,"data-testid":s="content",className:i,type:a="flex",stretch:o=!1}=e,d=l(e,["children","data-testid","className","type","stretch"]);return r(Ln,Object.assign({ref:n,"data-testid":s,className:i,stretch:o},d,{children:r(jn,{"data-testid":`${s}-container`,type:a,"data-id":"container",stretch:o,children:t})}))})),Hn={Section:Ln,Container:jn,Content:Tn,ColDiv:Mn},Un={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Vn=e=>Object.keys(Un).reduce(((r,n)=>{const t=Un[n];return r[n]=`@media screen and (${e}: ${t}px)`,r}),{}),Nn=Vn("max-width"),Yn=(Vn("min-width"),t.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:n,$tabletStart:t,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return s`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Nn.tablet} {
                grid-column: ${t||"auto"} / span
                    ${i||1};
            }

            ${Nn.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`),Pn=o.forwardRef(((e,n)=>{const{mobileCols:t,tabletCols:s,desktopCols:i}=e,a=l(e,["mobileCols","tabletCols","desktopCols"]);return r(Yn,Object.assign({ref:n},(()=>{const e=s||t,r=t,n=Gn(i||s||t),a=Gn(e),o=Gn(r);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:o.span,$mobileStart:o.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Gn=e=>{if(Array.isArray(e)&&e.length>1){const[r,n]=e,t=r<=n?r:n,s=r<=n?n:r;let i;return i=s===t?1:s-t,{start:t,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},In=()=>e=>{let r;r="function"==typeof e.$color?e.$color(e):e.$color||cn.border(e);const n=encodeURIComponent(r),t=e.$thickness||1;return s`
        background-color: transparent;
        height: ${t}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${t}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${t+1}" stroke-dasharray="4 4" /></svg>');
    `},Xn=t.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return s`
                    ${In}
                `;case"solid":return s`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||cn.border};
                `}}}
`,Rn=t.footer`
    background: ${cn["bg-strong"]};
`,Jn=t(fn.LinkSM)`
    color: ${cn.text};
`,Zn=t((e=>{var{thickness:n=1,lineStyle:t="solid",layoutType:s="flex",color:i,className:a,xxsCols:o,xsCols:d,smCols:g,mdCols:c,lgCols:u,xlCols:b,xxlCols:h,mobileCols:m,tabletCols:y,desktopCols:p}=e,x=l(e,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const f=void 0!==m||void 0!==y||void 0!==p;switch(s){case"flex":return r(Xn,Object.assign({className:a,$thickness:n,$lineStyle:t,$color:i},x));case"grid":return f?r(Pn,Object.assign({className:a,mobileCols:m,tabletCols:y,desktopCols:p},x,{children:r(Xn,{$thickness:n,$lineStyle:t,$color:i})})):r(Mn,Object.assign({className:a},(()=>{const e=o||[1,-1],r=d||e,n=g||r,t=c||n,s=u||t,i=b||s;return{xxlCols:h||i,xlCols:i,lgCols:s,mdCols:t,smCols:n,xsCols:r,xxsCols:e}})(),x,{children:r(Xn,{$thickness:n,$lineStyle:t,$color:i})}))}}))`
    width: 100%;
`,qn=t(Hn.Content)`
    padding: ${bn["spacing-64"]} 0;

    ${mn.MaxWidth.lg} {
        padding: ${bn["spacing-32"]} 0;
    }
`,Qn=t.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${mn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${bn["spacing-32"]};
    }

    ${mn.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${bn["spacing-32"]};
    }
`,Kn=t.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${bn["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${mn.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${mn.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,et=t.div`
    grid-column: 13 / span 6;

    ${mn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${bn["spacing-32"]};
    }

    ${mn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,rt=t(Hn.Content)`
    padding: ${bn["spacing-20"]} 0;

    ${mn.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${bn["spacing-16"]} 0;
    }
`,nt=t.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${bn["spacing-16"]};
    }

    ${mn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,tt=t(nt)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${mn.MaxWidth.lg} {
        margin-top: ${bn["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${mn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,st=t(fn.LinkXS)`
    color: ${cn.text};
    &:not(:last-child) {
        margin-right: ${bn["spacing-16"]};
    }

    svg {
        color: ${cn.icon};
    }

    &:hover {
        color: ${cn["text-subtler"]};
        svg {
            color: ${cn["icon-subtle"]};
        }
    }

    ${mn.MaxWidth.lg} {
        margin-bottom: ${bn["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${mn.MaxWidth.lg} {
        margin-bottom: ${bn["spacing-8"]};
    }
`,it=t=>{var{children:s,links:a,lastUpdated:o,disclaimerLinks:d,showDownloadAddon:g,logoSrc:c,copyrightInfo:u,onFooterLinkClick:b,layout:h="default"}=t,m=l(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const y="stretch"===h,p=i(),x=e=>e.map(((e,n)=>{const t=l(e,["data-options"]);return r("li",{children:r(Jn,Object.assign({},t,{onClick:r=>((e,r)=>{r.onClick?(e.preventDefault(),r.onClick(e)):b&&(e.preventDefault(),b(r))})(r,e)}))},n)}));return e(Rn,Object.assign({},m,{children:[(()=>{let t=null;return s||((a||g)&&(t=e(n,{children:[r(Qn,{"data-testid":"logo-section",children:r("img",{src:c||zn.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==a?void 0:a[0])&&r(Kn,{"data-testid":"link-col-1",children:x(a[0])},"link-col-1"),(null==a?void 0:a[1])&&r(Kn,{"data-testid":"link-col-2",children:x(a[1])},"link-col-2"),g&&r(et,{children:r(En,{})})]})),t?e(n,{children:[r(qn,{type:"grid",stretch:y,children:t}),r(Zn,{})]}):null)})(),e(rt,{type:"grid",stretch:y,children:[r(nt,{children:(()=>{const e=zn.getDisclaimerLinks(null==p?void 0:p.resourceScheme,d);return Object.keys(e).map((n=>r(st,Object.assign({},e[n]),n)))})()},"disclaimer"),r(tt,{children:r(fn.BodyXS,{"data-testid":"copyright-text",children:u||e(n,{children:["©"," ",zn.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))};export{it as Footer};
//# sourceMappingURL=index.js.map
