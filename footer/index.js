import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import s,{css as t,useTheme as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(s=Object.getOwnPropertySymbols(e);t<s.length;t++)r.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(n[s[t]]=e[s[t]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,u="object"==typeof d&&d&&d.Object===Object&&d,b="object"==typeof self&&self&&self.Object===Object&&self,m=u||b||Function("return this")(),h=m.Symbol,y=h,p=Object.prototype,x=p.hasOwnProperty,f=p.toString,F=y?y.toStringTag:void 0;var v=function(e){var r=x.call(e,F),n=e[F];try{e[F]=void 0;var s=!0}catch(e){}var t=f.call(e);return s&&(r?e[F]=n:delete e[F]),t},C=Object.prototype.toString;var w=v,$=function(e){return C.call(e)},E=h?h.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?w(e):$(e)};var B=D,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==B(e)},S=c,z=k,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;var O=function(e,r){if(S(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(M.test(e)||!_.test(e)||null!=r&&e in Object(r))};var j=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},L=D,W=j;var T,H=function(e){if(!W(e))return!1;var r=L(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},U=m["__core-js_shared__"],V=(T=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var N=function(e){return!!V&&V in e},Y=Function.prototype.toString;var P=H,G=N,I=j,X=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},R=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e,r){return null==e?void 0:e[r]},re=function(e){return!(!I(e)||G(e))&&(P(e)?K:R).test(X(e))},ne=ee;var se=function(e,r){var n=ne(e,r);return re(n)?n:void 0},te=se(Object,"create"),ie=te;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var oe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},le=te,de=Object.prototype.hasOwnProperty;var ge=function(e){var r=this.__data__;if(le){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(r,e)?r[e]:void 0},ce=te,ue=Object.prototype.hasOwnProperty;var be=function(e){var r=this.__data__;return ce?void 0!==r[e]:ue.call(r,e)},me=te;var he=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===r?"__lodash_hash_undefined__":r,this},ye=ae,pe=oe,xe=ge,fe=be,Fe=he;function ve(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}ve.prototype.clear=ye,ve.prototype.delete=pe,ve.prototype.get=xe,ve.prototype.has=fe,ve.prototype.set=Fe;var Ce=ve;var we=function(){this.__data__=[],this.size=0};var $e=function(e,r){return e===r||e!=e&&r!=r};var Ee=function(e,r){for(var n=e.length;n--;)if($e(e[n][0],r))return n;return-1},De=Ee,Be=Array.prototype.splice;var Ae=function(e){var r=this.__data__,n=De(r,e);return!(n<0)&&(n==r.length-1?r.pop():Be.call(r,n,1),--this.size,!0)},ke=Ee;var Se=function(e){var r=this.__data__,n=ke(r,e);return n<0?void 0:r[n][1]},ze=Ee;var _e=function(e){return ze(this.__data__,e)>-1},Me=Ee;var Oe=function(e,r){var n=this.__data__,s=Me(n,e);return s<0?(++this.size,n.push([e,r])):n[s][1]=r,this},je=we,Le=Ae,We=Se,Te=_e,He=Oe;function Ue(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}Ue.prototype.clear=je,Ue.prototype.delete=Le,Ue.prototype.get=We,Ue.prototype.has=Te,Ue.prototype.set=He;var Ve=Ue,Ne=se(m,"Map"),Ye=Ce,Pe=Ve,Ge=Ne;var Ie=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Xe=function(e,r){var n=e.__data__;return Ie(r)?n["string"==typeof r?"string":"hash"]:n.map},Re=Xe;var Je=function(e){var r=Re(this,e).delete(e);return this.size-=r?1:0,r},Ze=Xe;var qe=function(e){return Ze(this,e).get(e)},Qe=Xe;var Ke=function(e){return Qe(this,e).has(e)},er=Xe;var rr=function(e,r){var n=er(this,e),s=n.size;return n.set(e,r),this.size+=n.size==s?0:1,this},nr=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ge||Pe),string:new Ye}},sr=Je,tr=qe,ir=Ke,ar=rr;function or(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var s=e[r];this.set(s[0],s[1])}}or.prototype.clear=nr,or.prototype.delete=sr,or.prototype.get=tr,or.prototype.has=ir,or.prototype.set=ar;var lr=or;function dr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var s=arguments,t=r?r.apply(this,s):s[0],i=n.cache;if(i.has(t))return i.get(t);var a=e.apply(this,s);return n.cache=i.set(t,a)||i,a};return n.cache=new(dr.Cache||lr),n}dr.Cache=lr;var gr=dr;var cr=function(e){var r=gr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,br=/\\(\\)?/g,mr=cr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(ur,(function(e,n,s,t){r.push(s?t.replace(br,"$1"):n||e)})),r}));var hr=function(e,r){for(var n=-1,s=null==e?0:e.length,t=Array(s);++n<s;)t[n]=r(e[n],n,e);return t},yr=c,pr=k,xr=h?h.prototype:void 0,fr=xr?xr.toString:void 0;var Fr=function e(r){if("string"==typeof r)return r;if(yr(r))return hr(r,e)+"";if(pr(r))return fr?fr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},vr=Fr;var Cr=c,wr=O,$r=mr,Er=function(e){return null==e?"":vr(e)};var Dr=k;var Br=function(e,r){return Cr(e)?e:wr(e,r)?[e]:$r(Er(e))},Ar=function(e){if("string"==typeof e||Dr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var kr=function(e,r){for(var n=0,s=(r=Br(r,e)).length;null!=e&&n<s;)e=e[Ar(r[n++])];return n&&n==s?e:void 0};var Sr=g((function(e,r,n){var s=null==e?void 0:kr(e,r);return void 0===s?n:s}));const zr=(e,r,n)=>Sr(n,r)||Sr(e,r),_r=(e,r)=>{const n=r||e.defaultValue;return Sr(e.collections,n)},Mr={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Or=e=>r=>{var n;const s=r.theme,t=_r(Mr,null==s?void 0:s.borderScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?`${zr(t,e,s.overrides.border)}px`:`${t[e]}px`},jr={"width-005":Or("width-005"),"width-010":Or("width-010"),"width-020":Or("width-020"),"width-040":Or("width-040"),solid:(Lr="solid",e=>{var r;const n=e.theme,s=_r(Mr,null==n?void 0:n.borderScheme),t=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?zr(s,Lr,n.overrides.border):s[Lr];return"function"==typeof t?t(e):t})};var Lr;const Wr={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Tr=e=>r=>{var n;const s=r.theme,t=_r(Wr,null==s?void 0:s.colourScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.primitiveColour)?zr(t,e,s.overrides.primitiveColour):t[e]},Hr={"brand-10":Tr("brand-10"),"brand-20":Tr("brand-20"),"brand-30":Tr("brand-30"),"brand-40":Tr("brand-40"),"brand-50":Tr("brand-50"),"brand-60":Tr("brand-60"),"brand-70":Tr("brand-70"),"brand-80":Tr("brand-80"),"brand-90":Tr("brand-90"),"brand-95":Tr("brand-95"),"brand-100":Tr("brand-100"),"primary-10":Tr("primary-10"),"primary-20":Tr("primary-20"),"primary-30":Tr("primary-30"),"primary-40":Tr("primary-40"),"primary-50":Tr("primary-50"),"primary-60":Tr("primary-60"),"primary-70":Tr("primary-70"),"primary-80":Tr("primary-80"),"primary-90":Tr("primary-90"),"primary-95":Tr("primary-95"),"primary-100":Tr("primary-100"),"secondary-10":Tr("secondary-10"),"secondary-20":Tr("secondary-20"),"secondary-30":Tr("secondary-30"),"secondary-40":Tr("secondary-40"),"secondary-50":Tr("secondary-50"),"secondary-60":Tr("secondary-60"),"secondary-70":Tr("secondary-70"),"secondary-80":Tr("secondary-80"),"secondary-90":Tr("secondary-90"),"secondary-95":Tr("secondary-95"),"secondary-100":Tr("secondary-100"),"neutral-10":Tr("neutral-10"),"neutral-20":Tr("neutral-20"),"neutral-30":Tr("neutral-30"),"neutral-40":Tr("neutral-40"),"neutral-50":Tr("neutral-50"),"neutral-60":Tr("neutral-60"),"neutral-70":Tr("neutral-70"),"neutral-80":Tr("neutral-80"),"neutral-90":Tr("neutral-90"),"neutral-95":Tr("neutral-95"),"neutral-100":Tr("neutral-100"),"success-10":Tr("success-10"),"success-20":Tr("success-20"),"success-30":Tr("success-30"),"success-40":Tr("success-40"),"success-50":Tr("success-50"),"success-60":Tr("success-60"),"success-70":Tr("success-70"),"success-80":Tr("success-80"),"success-90":Tr("success-90"),"success-95":Tr("success-95"),"success-100":Tr("success-100"),"warning-10":Tr("warning-10"),"warning-20":Tr("warning-20"),"warning-30":Tr("warning-30"),"warning-40":Tr("warning-40"),"warning-50":Tr("warning-50"),"warning-60":Tr("warning-60"),"warning-70":Tr("warning-70"),"warning-80":Tr("warning-80"),"warning-90":Tr("warning-90"),"warning-95":Tr("warning-95"),"warning-100":Tr("warning-100"),"error-10":Tr("error-10"),"error-20":Tr("error-20"),"error-30":Tr("error-30"),"error-40":Tr("error-40"),"error-50":Tr("error-50"),"error-60":Tr("error-60"),"error-70":Tr("error-70"),"error-80":Tr("error-80"),"error-90":Tr("error-90"),"error-95":Tr("error-95"),"error-100":Tr("error-100"),"info-10":Tr("info-10"),"info-20":Tr("info-20"),"info-30":Tr("info-30"),"info-40":Tr("info-40"),"info-50":Tr("info-50"),"info-60":Tr("info-60"),"info-70":Tr("info-70"),"info-80":Tr("info-80"),"info-90":Tr("info-90"),"info-95":Tr("info-95"),"info-100":Tr("info-100"),white:Tr("white"),black:Tr("black"),"primary-inverse":Tr("primary-inverse")},Ur={text:Tr("neutral-20"),"text-subtle":Tr("neutral-30"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-60"),"text-primary":Tr("primary-50"),"text-hover":Tr("primary-40"),"text-selected":Tr("primary-50"),"text-selected-hover":Tr("primary-40"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-20"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("error-40"),"text-info":Tr("info-40"),"text-inverse":Tr("white"),icon:Tr("neutral-50"),"icon-subtle":Tr("neutral-60"),"icon-strongest":Tr("neutral-20"),"icon-primary":Tr("primary-50"),"icon-primary-subtle":Tr("primary-60"),"icon-primary-subtlest":Tr("primary-70"),"icon-hover":Tr("primary-40"),"icon-selected":Tr("primary-50"),"icon-selected-hover":Tr("primary-40"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-60"),"icon-success":Tr("success-50"),"icon-warning":Tr("warning-60"),"icon-error":Tr("error-50"),"icon-error-strong":Tr("error-40"),"icon-info":Tr("info-50"),"icon-inverse":Tr("white"),"icon-primary-inverse":Tr("primary-inverse"),border:Tr("neutral-90"),"border-strong":Tr("neutral-70"),"border-stronger":Tr("neutral-50"),"border-primary":Tr("primary-50"),"border-primary-subtle":Tr("primary-60"),"border-hover":Tr("primary-90"),"border-hover-strong":Tr("primary-60"),"border-selected":Tr("primary-50"),"border-selected-subtle":Tr("primary-70"),"border-selected-subtlest":Tr("primary-90"),"border-selected-hover":Tr("primary-40"),"border-focus":Tr("primary-60"),"border-focus-strong":Tr("primary-50"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-70"),"border-success":Tr("success-60"),"border-warning":Tr("warning-60"),"border-error":Tr("error-60"),"border-error-focus":Tr("error-60"),"border-error-focus-strong":Tr("error-40"),"border-error-strong":Tr("error-40"),"border-info":Tr("info-60"),bg:Tr("white"),"bg-strong":Tr("neutral-100"),"bg-stronger":Tr("neutral-95"),"bg-strongest":Tr("neutral-90"),"bg-hover":Tr("primary-95"),"bg-hover-strong":Tr("primary-90"),"bg-hover-subtle":Tr("primary-100"),"bg-hover-neutral":Tr("neutral-100"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("primary-95"),"bg-selected-hover":Tr("primary-90"),"bg-selected-strong":Tr("primary-90"),"bg-selected-stronger":Tr("primary-70"),"bg-selected-strongest":Tr("primary-50"),"bg-selected-strongest-hover":Tr("primary-40"),"bg-disabled":Tr("neutral-95"),"bg-selected-disabled":Tr("neutral-95"),"bg-selected-stronger-disabled":Tr("neutral-70"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("info-100"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("error-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-20"),"bg-inverse-subtle":Tr("neutral-30"),"bg-inverse-subtler":Tr("neutral-50"),"bg-inverse-subtlest":Tr("neutral-60"),"bg-inverse-hover":Tr("neutral-40"),"bg-primary":Tr("primary-50"),"bg-primary-subtle":Tr("primary-60"),"bg-primary-subtler":Tr("primary-95"),"bg-primary-subtlest":Tr("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Tr("primary-40"),"bg-primary-subtlest-hover":Tr("primary-90"),"bg-primary-subtlest-selected":Tr("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Tr("primary-50"),"hyperlink-hover":Tr("primary-40"),"hyperlink-visited":Tr("primary-40"),"hyperlink-inverse":Tr("primary-inverse"),"focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")},Vr={collections:{lifesg:Ur,bookingsg:Ur,rbs:Ur,mylegacy:Ur,ccube:Ur,oneservice:Ur,pa:{text:Tr("neutral-30"),"text-subtle":Tr("neutral-40"),"text-subtler":Tr("neutral-50"),"text-subtlest":Tr("neutral-70"),"text-primary":Tr("neutral-10"),"text-hover":Tr("neutral-70"),"text-selected":Tr("neutral-20"),"text-selected-hover":Tr("neutral-10"),"text-disabled":Tr("neutral-50"),"text-disabled-subtle":Tr("neutral-60"),"text-disabled-subtlest":Tr("neutral-80"),"text-selected-disabled":Tr("neutral-40"),"text-success":Tr("success-40"),"text-warning":Tr("warning-40"),"text-error":Tr("brand-30"),"text-info":Tr("neutral-40"),"text-inverse":Tr("neutral-100"),icon:Tr("neutral-40"),"icon-subtle":Tr("neutral-50"),"icon-strongest":Tr("neutral-10"),"icon-primary":Tr("neutral-10"),"icon-primary-subtle":Tr("neutral-30"),"icon-primary-subtlest":Tr("neutral-60"),"icon-hover":Tr("neutral-70"),"icon-selected":Tr("brand-20"),"icon-selected-hover":Tr("brand-10"),"icon-disabled":Tr("neutral-50"),"icon-disabled-subtle":Tr("neutral-60"),"icon-selected-disabled":Tr("neutral-40"),"icon-success":Tr("success-40"),"icon-warning":Tr("warning-60"),"icon-error":Tr("brand-30"),"icon-error-strong":Tr("brand-10"),"icon-info":Tr("neutral-40"),"icon-inverse":Tr("neutral-100"),"icon-primary-inverse":"#F9B371",border:Tr("neutral-90"),"border-strong":Tr("neutral-30"),"border-stronger":Tr("neutral-20"),"border-primary":Tr("neutral-40"),"border-primary-subtle":Tr("neutral-60"),"border-hover":Tr("neutral-80"),"border-hover-strong":Tr("neutral-10"),"border-selected":Tr("brand-20"),"border-selected-subtle":Tr("neutral-40"),"border-selected-subtlest":Tr("neutral-70"),"border-selected-hover":Tr("neutral-10"),"border-focus":Tr("neutral-20"),"border-focus-strong":Tr("neutral-10"),"border-disabled":Tr("neutral-90"),"border-selected-disabled":Tr("neutral-80"),"border-success":Tr("success-40"),"border-warning":Tr("warning-60"),"border-error":Tr("brand-30"),"border-error-focus":Tr("brand-20"),"border-error-focus-strong":Tr("brand-10"),"border-error-strong":Tr("brand-20"),"border-info":Tr("neutral-40"),bg:Tr("neutral-100"),"bg-strong":Tr("neutral-95"),"bg-stronger":Tr("neutral-90"),"bg-strongest":Tr("neutral-80"),"bg-hover":Tr("brand-90"),"bg-hover-strong":Tr("brand-80"),"bg-hover-subtle":Tr("neutral-90"),"bg-hover-neutral":Tr("neutral-90"),"bg-hover-neutral-strong":Tr("neutral-90"),"bg-selected":Tr("brand-100"),"bg-selected-hover":Tr("brand-30"),"bg-selected-strong":Tr("brand-50"),"bg-selected-stronger":Tr("brand-40"),"bg-selected-strongest":Tr("brand-20"),"bg-selected-strongest-hover":Tr("brand-10"),"bg-disabled":Tr("neutral-90"),"bg-selected-disabled":Tr("neutral-90"),"bg-selected-stronger-disabled":Tr("neutral-80"),"bg-success":Tr("success-100"),"bg-success-hover":Tr("success-95"),"bg-success-strong":Tr("success-50"),"bg-success-strong-hover":Tr("success-40"),"bg-warning":Tr("warning-100"),"bg-warning-hover":Tr("warning-95"),"bg-warning-strong":Tr("warning-50"),"bg-warning-strong-hover":Tr("warning-40"),"bg-info":Tr("neutral-95"),"bg-info-hover":Tr("info-95"),"bg-info-strong":Tr("info-50"),"bg-info-strong-hover":Tr("info-40"),"bg-error":Tr("brand-100"),"bg-error-hover":Tr("error-95"),"bg-error-strong":Tr("error-50"),"bg-error-strong-hover":Tr("error-40"),"bg-inverse":Tr("neutral-40"),"bg-inverse-subtle":Tr("neutral-60"),"bg-inverse-subtler":Tr("neutral-70"),"bg-inverse-subtlest":Tr("neutral-80"),"bg-inverse-hover":Tr("neutral-30"),"bg-primary":Tr("brand-20"),"bg-primary-subtle":Tr("brand-60"),"bg-primary-subtler":Tr("brand-80"),"bg-primary-subtlest":Tr("brand-100"),"bg-available":Tr("success-60"),"bg-primary-hover":Tr("brand-10"),"bg-primary-subtlest-hover":Tr("brand-80"),"bg-primary-subtlest-selected":Tr("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Tr("neutral-10"),"hyperlink-hover":Tr("neutral-40"),"hyperlink-visited":Tr("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Tr("black"),"focus-ring-inverse":Tr("white")}},defaultValue:"lifesg"},Nr=e=>r=>{var n;const s=r.theme,t=_r(Vr,null==s?void 0:s.colourScheme),i=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.semanticColour)?zr(t,e,s.overrides.semanticColour):t[e];return"function"==typeof i?i(r):i},Yr={text:Nr("text"),"text-subtle":Nr("text-subtle"),"text-subtler":Nr("text-subtler"),"text-subtlest":Nr("text-subtlest"),"text-primary":Nr("text-primary"),"text-hover":Nr("text-hover"),"text-selected":Nr("text-selected"),"text-selected-hover":Nr("text-selected-hover"),"text-disabled":Nr("text-disabled"),"text-disabled-subtle":Nr("text-disabled-subtle"),"text-disabled-subtlest":Nr("text-disabled-subtlest"),"text-selected-disabled":Nr("text-selected-disabled"),"text-success":Nr("text-success"),"text-warning":Nr("text-warning"),"text-error":Nr("text-error"),"text-info":Nr("text-info"),"text-inverse":Nr("text-inverse"),icon:Nr("icon"),"icon-subtle":Nr("icon-subtle"),"icon-strongest":Nr("icon-strongest"),"icon-primary":Nr("icon-primary"),"icon-primary-subtle":Nr("icon-primary-subtle"),"icon-primary-subtlest":Nr("icon-primary-subtlest"),"icon-hover":Nr("icon-hover"),"icon-selected":Nr("icon-selected"),"icon-selected-hover":Nr("icon-selected-hover"),"icon-disabled":Nr("icon-disabled"),"icon-disabled-subtle":Nr("icon-disabled-subtle"),"icon-selected-disabled":Nr("icon-selected-disabled"),"icon-success":Nr("icon-success"),"icon-warning":Nr("icon-warning"),"icon-error":Nr("icon-error"),"icon-error-strong":Nr("icon-error-strong"),"icon-info":Nr("icon-info"),"icon-inverse":Nr("icon-inverse"),"icon-primary-inverse":Nr("icon-primary-inverse"),border:Nr("border"),"border-strong":Nr("border-strong"),"border-stronger":Nr("border-stronger"),"border-primary":Nr("border-primary"),"border-primary-subtle":Nr("border-primary-subtle"),"border-hover":Nr("border-hover"),"border-hover-strong":Nr("border-hover-strong"),"border-selected":Nr("border-selected"),"border-selected-subtle":Nr("border-selected-subtle"),"border-selected-subtlest":Nr("border-selected-subtlest"),"border-selected-hover":Nr("border-selected-hover"),"border-focus":Nr("border-focus"),"border-focus-strong":Nr("border-focus-strong"),"border-disabled":Nr("border-disabled"),"border-selected-disabled":Nr("border-selected-disabled"),"border-success":Nr("border-success"),"border-warning":Nr("border-warning"),"border-error":Nr("border-error"),"border-error-focus":Nr("border-error-focus"),"border-error-focus-strong":Nr("border-error-focus-strong"),"border-error-strong":Nr("border-error-strong"),"border-info":Nr("border-info"),bg:Nr("bg"),"bg-strong":Nr("bg-strong"),"bg-stronger":Nr("bg-stronger"),"bg-strongest":Nr("bg-strongest"),"bg-hover":Nr("bg-hover"),"bg-hover-strong":Nr("bg-hover-strong"),"bg-hover-subtle":Nr("bg-hover-subtle"),"bg-hover-neutral":Nr("bg-hover-neutral"),"bg-hover-neutral-strong":Nr("bg-hover-neutral-strong"),"bg-selected":Nr("bg-selected"),"bg-selected-hover":Nr("bg-selected-hover"),"bg-selected-strong":Nr("bg-selected-strong"),"bg-selected-stronger":Nr("bg-selected-stronger"),"bg-selected-strongest":Nr("bg-selected-strongest"),"bg-selected-strongest-hover":Nr("bg-selected-strongest-hover"),"bg-disabled":Nr("bg-disabled"),"bg-selected-disabled":Nr("bg-selected-disabled"),"bg-selected-stronger-disabled":Nr("bg-selected-stronger-disabled"),"bg-success":Nr("bg-success"),"bg-success-hover":Nr("bg-success-hover"),"bg-success-strong":Nr("bg-success-strong"),"bg-success-strong-hover":Nr("bg-success-strong-hover"),"bg-warning":Nr("bg-warning"),"bg-warning-hover":Nr("bg-warning-hover"),"bg-warning-strong":Nr("bg-warning-strong"),"bg-warning-strong-hover":Nr("bg-warning-strong-hover"),"bg-info":Nr("bg-info"),"bg-info-hover":Nr("bg-info-hover"),"bg-info-strong":Nr("bg-info-strong"),"bg-info-strong-hover":Nr("bg-info-strong-hover"),"bg-error":Nr("bg-error"),"bg-error-hover":Nr("bg-error-hover"),"bg-error-strong":Nr("bg-error-strong"),"bg-error-strong-hover":Nr("bg-error-strong-hover"),"bg-inverse":Nr("bg-inverse"),"bg-inverse-subtle":Nr("bg-inverse-subtle"),"bg-inverse-subtler":Nr("bg-inverse-subtler"),"bg-inverse-subtlest":Nr("bg-inverse-subtlest"),"bg-inverse-hover":Nr("bg-inverse-hover"),"bg-primary":Nr("bg-primary"),"bg-primary-subtle":Nr("bg-primary-subtle"),"bg-primary-subtler":Nr("bg-primary-subtler"),"bg-primary-subtlest":Nr("bg-primary-subtlest"),"bg-available":Nr("bg-available"),"bg-primary-hover":Nr("bg-primary-hover"),"bg-primary-subtlest-hover":Nr("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Nr("bg-primary-subtlest-selected"),"overlay-strong":Nr("overlay-strong"),"overlay-subtle":Nr("overlay-subtle"),hyperlink:Nr("hyperlink"),"hyperlink-hover":Nr("hyperlink-hover"),"hyperlink-visited":Nr("hyperlink-visited"),"hyperlink-inverse":Nr("hyperlink-inverse"),"focus-ring":Nr("focus-ring"),"focus-ring-inverse":Nr("focus-ring-inverse")},Pr={collections:{default:{solid:e=>r=>{var n,s,i;const{thickness:a,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:jr["width-010"](r),g=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,c=null!==(i="function"==typeof l?l(r):l)&&void 0!==i?i:Yr.border(r),u=jr.solid;return t`
            border: ${d} ${u} ${c};
            border-radius: ${g};
        `},"dashed-default":e=>r=>{var n,s,i;const{thickness:a,radius:o,colour:l}=e||{},d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:jr["width-010"](r),g=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,c=null!==(i="function"==typeof l?l(r):l)&&void 0!==i?i:Yr.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${g}' ry='${g}' stroke='${c}' stroke-width='${d}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return t`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${g};
        `}}},defaultValue:"default"},Gr=e=>1===e.length&&"theme"in e[0],Ir=e=>(...r)=>n=>{const s=Gr(r)?[]:r,t=Gr(r)?r[0]:n,i=t.theme;return(0,_r(Pr,null==i?void 0:i.borderScheme)[e])(...s)(t)},Xr={solid:Ir("solid"),"dashed-default":Ir("dashed-default")},Rr={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Jr=e=>r=>{var n;const s=r.theme,t=_r(Rr,null==s?void 0:s.breakpointScheme);let i;return i=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.breakpoint)?zr(t,e,s.overrides.breakpoint):t[e],i},Zr={"xxs-min":Jr("xxs-min"),"xxs-max":Jr("xxs-max"),"xs-min":Jr("xs-min"),"xs-max":Jr("xs-max"),"sm-min":Jr("sm-min"),"sm-max":Jr("sm-max"),"md-min":Jr("md-min"),"md-max":Jr("md-max"),"lg-min":Jr("lg-min"),"lg-max":Jr("lg-max"),"xl-min":Jr("xl-min"),"xl-max":Jr("xl-max"),"xxl-min":Jr("xxl-min"),"xxs-column":Jr("xxs-column"),"xs-column":Jr("xs-column"),"sm-column":Jr("sm-column"),"md-column":Jr("md-column"),"lg-column":Jr("lg-column"),"xl-column":Jr("xl-column"),"xxl-column":Jr("xxl-column"),"xxs-gutter":Jr("xxs-gutter"),"xs-gutter":Jr("xs-gutter"),"sm-gutter":Jr("sm-gutter"),"md-gutter":Jr("md-gutter"),"lg-gutter":Jr("lg-gutter"),"xl-gutter":Jr("xl-gutter"),"xxl-gutter":Jr("xxl-gutter"),"xxs-margin":Jr("xxs-margin"),"xs-margin":Jr("xs-margin"),"sm-margin":Jr("sm-margin"),"md-margin":Jr("md-margin"),"lg-margin":Jr("lg-margin"),"xl-margin":Jr("xl-margin"),"xxl-margin":Jr("xxl-margin")},qr=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Zr["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const s=n(r);return`@media screen and (${e}: ${s}px)`}})(e,n),r)),{}),Qr={MaxWidth:qr("max-width"),MinWidth:qr("min-width")},Kr={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},en=e=>r=>{var n;const s=r.theme,t=_r(Kr,null==s?void 0:s.fontScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.fontSpec)?zr(t,e,s.overrides.fontSpec):t[e]},rn={"heading-size-xxl":en("heading-size-xxl"),"heading-size-xl":en("heading-size-xl"),"heading-size-lg":en("heading-size-lg"),"heading-size-md":en("heading-size-md"),"heading-size-sm":en("heading-size-sm"),"heading-size-xs":en("heading-size-xs"),"heading-lh-xxl":en("heading-lh-xxl"),"heading-lh-xl":en("heading-lh-xl"),"heading-lh-lg":en("heading-lh-lg"),"heading-lh-md":en("heading-lh-md"),"heading-lh-sm":en("heading-lh-sm"),"heading-lh-xs":en("heading-lh-xs"),"heading-ls-xxl":en("heading-ls-xxl"),"heading-ls-xl":en("heading-ls-xl"),"heading-ls-lg":en("heading-ls-lg"),"heading-ls-md":en("heading-ls-md"),"heading-ls-sm":en("heading-ls-sm"),"heading-ls-xs":en("heading-ls-xs"),"weight-light":en("weight-light"),"weight-regular":en("weight-regular"),"weight-semibold":en("weight-semibold"),"weight-bold":en("weight-bold"),"font-family":en("font-family"),"body-size-baseline":en("body-size-baseline"),"body-size-md":en("body-size-md"),"body-size-sm":en("body-size-sm"),"body-size-xs":en("body-size-xs"),"body-lh-baseline":en("body-lh-baseline"),"body-lh-md":en("body-lh-md"),"body-lh-sm":en("body-lh-sm"),"body-lh-xs":en("body-lh-xs"),"body-ls-baseline":en("body-ls-baseline"),"body-ls-md":en("body-ls-md"),"body-ls-sm":en("body-ls-sm"),"body-ls-xs":en("body-ls-xs"),"form-label-size":en("form-label-size"),"form-description-size":en("form-description-size"),"form-label-lh":en("form-label-lh"),"form-description-lh":en("form-description-lh"),"form-label-ls":en("form-label-ls"),"form-description-ls":en("form-description-ls")},nn=(e,r,n,s,i)=>{const{disableLigatures:a}=i||{};return t`
        font-family: ${en("font-family")};
        font-size: ${en(e)};
        font-weight: ${en(r)};
        line-height: ${en(n)};
        letter-spacing: ${en(s)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},sn=(e={})=>({"heading-xxl-light":nn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":nn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":nn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":nn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":nn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":nn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":nn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":nn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":nn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":nn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":nn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":nn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":nn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":nn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":nn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":nn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":nn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":nn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":nn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":nn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":nn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":nn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":nn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":nn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":nn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":nn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":nn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":nn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":nn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":nn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":nn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":nn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":nn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":nn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":nn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":nn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":nn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":nn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":nn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":nn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":nn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":nn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),tn=sn({disableLigatures:!0}),an={collections:{default:sn(),bookingsg:tn,pa:sn({disableLigatures:!0})},defaultValue:"default"},on=e=>r=>{var n;const s=r.theme,t=_r(an,null==s?void 0:s.fontScheme),i=(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.font)?zr(t,e,s.overrides.font):t[e];return"function"==typeof i?i(r):i},ln={"heading-xxl-light":on("heading-xxl-light"),"heading-xxl-regular":on("heading-xxl-regular"),"heading-xxl-semibold":on("heading-xxl-semibold"),"heading-xxl-bold":on("heading-xxl-bold"),"heading-xl-light":on("heading-xl-light"),"heading-xl-regular":on("heading-xl-regular"),"heading-xl-semibold":on("heading-xl-semibold"),"heading-xl-bold":on("heading-xl-bold"),"heading-lg-light":on("heading-lg-light"),"heading-lg-regular":on("heading-lg-regular"),"heading-lg-semibold":on("heading-lg-semibold"),"heading-lg-bold":on("heading-lg-bold"),"heading-md-light":on("heading-md-light"),"heading-md-regular":on("heading-md-regular"),"heading-md-semibold":on("heading-md-semibold"),"heading-md-bold":on("heading-md-bold"),"heading-sm-light":on("heading-sm-light"),"heading-sm-regular":on("heading-sm-regular"),"heading-sm-semibold":on("heading-sm-semibold"),"heading-sm-bold":on("heading-sm-bold"),"heading-xs-light":on("heading-xs-light"),"heading-xs-regular":on("heading-xs-regular"),"heading-xs-semibold":on("heading-xs-semibold"),"heading-xs-bold":on("heading-xs-bold"),"body-baseline-light":on("body-baseline-light"),"body-baseline-regular":on("body-baseline-regular"),"body-baseline-semibold":on("body-baseline-semibold"),"body-baseline-bold":on("body-baseline-bold"),"body-md-light":on("body-md-light"),"body-md-regular":on("body-md-regular"),"body-md-semibold":on("body-md-semibold"),"body-md-bold":on("body-md-bold"),"body-sm-light":on("body-sm-light"),"body-sm-regular":on("body-sm-regular"),"body-sm-semibold":on("body-sm-semibold"),"body-sm-bold":on("body-sm-bold"),"body-xs-light":on("body-xs-light"),"body-xs-regular":on("body-xs-regular"),"body-xs-semibold":on("body-xs-semibold"),"body-xs-bold":on("body-xs-bold"),"form-label":on("form-label"),"form-description":on("form-description")},dn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},gn=e=>r=>{var n;const s=r.theme,t=_r(dn,null==s?void 0:s.spacingScheme);return(null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.spacing)?`${zr(t,e,s.overrides.spacing)}px`:`${t[e]}px`},cn={"spacing-0":gn("spacing-0"),"spacing-4":gn("spacing-4"),"spacing-8":gn("spacing-8"),"spacing-12":gn("spacing-12"),"spacing-16":gn("spacing-16"),"spacing-20":gn("spacing-20"),"spacing-24":gn("spacing-24"),"spacing-32":gn("spacing-32"),"spacing-40":gn("spacing-40"),"spacing-48":gn("spacing-48"),"spacing-64":gn("spacing-64"),"spacing-72":gn("spacing-72"),"layout-xs":gn("layout-xs"),"layout-sm":gn("layout-sm"),"layout-md":gn("layout-md"),"layout-lg":gn("layout-lg"),"layout-xl":gn("layout-xl"),"layout-xxl":gn("layout-xxl"),"layout-xxxl":gn("layout-xxxl")},un=Object.assign(Object.assign({},Yr),{Primitive:Hr}),bn=Object.assign(Object.assign({},ln),{Spec:rn});Object.assign(Object.assign({},jr),{Util:Xr});const mn=cn,hn=Zr,yn=Qr,pn=(e,r,n=!1)=>t`
        ${bn[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,xn=e=>{if(e)return t`
            ${r=e,t`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},fn=(e,r)=>t`
    ${pn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?t`
            display: block;
            ${xn(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${xn(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${un.text};
`;var Fn;!function(n){const i=(e,r,n)=>{const t=s(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>fn(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const a=(e,r)=>{const n=s.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>fn(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=a("body-baseline","BodyBL"),n.BodyMD=a("body-md","BodyMD"),n.BodySM=a("body-sm","BodySM"),n.BodyXS=a("body-xs","BodyXS");const o=(n,i)=>{const a=s.a`
            ${e=>t`
                ${pn(n,e.weight||"regular")}
                color: ${un.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${un["text-hover"]};
                }
            `}
        `,o=n=>{var{external:s=!1,children:t}=n,i=l(n,["external","children"]);return e(a,Object.assign({},i,{children:[t,s&&r(vn,{})]}))};return o.displayName=`Typography.${i}`,o};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(Fn||(Fn={}));const vn=s(a)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Cn=s.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${yn.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,wn=s(Fn.BodyMD)`
    margin-bottom: ${mn["spacing-16"]};
`,$n=s.div`
    display: flex;
    align-items: flex-start;
`,En=s.a`
    &:not(:last-child) {
        margin-right: ${mn["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${yn.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${mn["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,Dn=()=>e(Cn,{"data-testid":"download-app-section",children:[r(wn,{weight:"semibold",children:"Download the app"}),e($n,{children:[r(En,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),r(En,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var Bn={exports:{}},An=g(Bn.exports=function(){var e=1e3,r=6e4,n=36e5,s="millisecond",t="second",i="minute",a="hour",o="day",l="week",d="month",g="quarter",c="year",u="date",b="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var s=String(e);return!s||s.length>=r?e:""+Array(r+1-s.length).join(n)+e},x={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),s=Math.floor(n/60),t=n%60;return(r<=0?"+":"-")+p(s,2,"0")+":"+p(t,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var s=12*(n.year()-r.year())+(n.month()-r.month()),t=r.clone().add(s,d),i=n-t<0,a=r.clone().add(s+(i?-1:1),d);return+(-(s+(n-t)/(i?t-a:a-t))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:c,w:l,d:o,D:u,h:a,m:i,s:t,ms:s,Q:g}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},f="en",F={};F[f]=y;var v="$isDayjsObject",C=function(e){return e instanceof D||!(!e||!e[v])},w=function e(r,n,s){var t;if(!r)return f;if("string"==typeof r){var i=r.toLowerCase();F[i]&&(t=i),n&&(F[i]=n,t=i);var a=r.split("-");if(!t&&a.length>1)return e(a[0])}else{var o=r.name;F[o]=r,t=o}return!s&&t&&(f=t),t||!s&&f},$=function(e,r){if(C(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new D(n)},E=x;E.l=w,E.i=C,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var D=function(){function y(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var s=r.match(m);if(s){var t=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],t,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],t,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var n=$(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return $(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<$(e)},p.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,s=!!E.u(r)||r,g=E.p(e),b=function(e,r){var t=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return s?t:t.endOf(o)},m=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},h=this.$W,y=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(g){case c:return s?b(1,0):b(31,11);case d:return s?b(1,y):b(0,y+1);case l:var f=this.$locale().weekStart||0,F=(h<f?h+7:h)-f;return b(s?p-F:p+(6-F),y);case o:case u:return m(x+"Hours",0);case a:return m(x+"Minutes",1);case i:return m(x+"Seconds",2);case t:return m(x+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=E.p(e),g="set"+(this.$u?"UTC":""),b=(n={},n[o]=g+"Date",n[u]=g+"Date",n[d]=g+"Month",n[c]=g+"FullYear",n[a]=g+"Hours",n[i]=g+"Minutes",n[t]=g+"Seconds",n[s]=g+"Milliseconds",n)[l],m=l===o?this.$D+(r-this.$W):r;if(l===d||l===c){var h=this.clone().set(u,1);h.$d[b](m),h.init(),this.$d=h.set(u,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(s,g){var u,b=this;s=Number(s);var m=E.p(g),h=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*s)),b)};if(m===d)return this.set(d,this.$M+s);if(m===c)return this.set(c,this.$y+s);if(m===o)return h(1);if(m===l)return h(7);var y=(u={},u[i]=r,u[a]=n,u[t]=e,u)[m]||1,p=this.$d.getTime()+s*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var s=e||"YYYY-MM-DDTHH:mm:ssZ",t=E.z(this),i=this.$H,a=this.$m,o=this.$M,l=n.weekdays,d=n.months,g=n.meridiem,c=function(e,n,t,i){return e&&(e[n]||e(r,s))||t[n].slice(0,i)},u=function(e){return E.s(i%12||12,e,"0")},m=g||function(e,r,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(e,s){return s||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return o+1;case"MM":return E.s(o+1,2,"0");case"MMM":return c(n.monthsShort,o,d,3);case"MMMM":return c(d,o);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return c(n.weekdaysMin,r.$W,l,2);case"ddd":return c(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return t}return null}(e)||t.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(s,u,b){var m,h=this,y=E.p(u),p=$(s),x=(p.utcOffset()-this.utcOffset())*r,f=this-p,F=function(){return E.m(h,p)};switch(y){case c:m=F()/12;break;case d:m=F();break;case g:m=F()/3;break;case l:m=(f-x)/6048e5;break;case o:m=(f-x)/864e5;break;case a:m=f/n;break;case i:m=f/r;break;case t:m=f/e;break;default:m=f}return b?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return F[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),s=w(e,r,!0);return s&&(n.$L=s),n},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=D.prototype;return $.prototype=B,[["$ms",s],["$s",t],["$m",i],["$H",a],["$W",o],["$M",d],["$y",c],["$D",u]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,D,$),e.$i=!0),$},$.locale=w,$.isDayjs=C,$.unix=function(e){return $(1e3*e)},$.en=F[f],$.Ls=F,$.p={},$}());const kn={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Sn={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},zn={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var _n;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const s=r(n);return`${`${(new Date).getFullYear()} ${s}`} Last Updated ${An(e).format("D MMMM YYYY")}`};const r=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,r)=>{const n=(e=>{switch(e){case"bookingsg":return Sn;case"mylegacy":return zn;default:return kn}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),r&&r.privacy?r.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),r&&r.termsOfUse?r.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),r&&r.reportVulnerability?r.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(_n||(_n={}));const Mn=s.div`
    position: relative;

    ${e=>{const{$xxlStart:r,$xxlSpan:n,$xlStart:s,$xlSpan:i,$lgStart:a,$lgSpan:o,$mdStart:l,$mdSpan:d,$smStart:g,$smSpan:c,$xsStart:u,$xsSpan:b,$xxsStart:m,$xxsSpan:h}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Qr.MaxWidth.xl} {
                grid-column: ${s||"auto"} / span ${i||1};
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
                grid-column: ${m||"auto"} / span ${h||1};
            }
        `}}
`,On=o.forwardRef(((e,n)=>{const s=i(),{xxlCols:t,xlCols:a,lgCols:o,mdCols:d,smCols:g,xsCols:c,xxsCols:u}=e,b=l(e,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),m=(e,r,n)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>r?console.warn(`Warning: ${n}Cols exceeds maximum (${r}): ${e}`):Array.isArray(e)&&(e[0]>r+1||e[1]>r+1)&&console.warn(`Warning: ${n}Cols array exceeds maximum (${r}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[n,s]=e;if(-1===s)return{start:n,span:r-n+1};return{start:n,span:Math.min(s-n,r)}}return{start:void 0,span:Math.min(e,r)}};return r(Mn,Object.assign({ref:n},(()=>{const e=Zr["xxl-column"]({theme:s}),r=Zr["xl-column"]({theme:s}),n=Zr["lg-column"]({theme:s}),i=Zr["md-column"]({theme:s}),l=Zr["sm-column"]({theme:s}),b=Zr["xs-column"]({theme:s}),h=Zr["xxs-column"]({theme:s}),y=m(t||a||o||d||g||c||u,e,"xxl"),p=m(a||o||d||g||c||u,r,"xl"),x=m(o||d||g||c||u,n,"lg"),f=m(d||g||c||u,i,"md"),F=m(g||c||u,l,"sm"),v=m(c||u,b,"xs"),C=m(u,h,"xxs");return{$xxlStart:y.start,$xxlSpan:y.span,$xlStart:p.start,$xlSpan:p.span,$lgStart:x.start,$lgSpan:x.span,$mdStart:f.start,$mdSpan:f.span,$smStart:F.start,$smSpan:F.span,$xsStart:v.start,$xsSpan:v.span,$xxsStart:C.start,$xxsSpan:C.span}})(),b))})),jn=s.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 ${hn["xxl-margin"]}px;
            `:t`
                padding: 0 ${hn["xxl-margin"]}px;
                max-width: 1440px;

                ${yn.MaxWidth.xl} {
                    padding: 0 ${hn["xl-margin"]}px;
                }

                ${yn.MaxWidth.lg} {
                    padding: 0 ${hn["lg-margin"]}px;
                }

                ${yn.MaxWidth.md} {
                    padding: 0 ${hn["md-margin"]}px;
                }

                ${yn.MaxWidth.sm} {
                    padding: 0 ${hn["sm-margin"]}px;
                }

                ${yn.MaxWidth.xs} {
                    padding: 0 ${hn["xs-margin"]}px;
                }

                ${yn.MaxWidth.xxs} {
                    padding: 0 ${hn["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: ${hn["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${hn["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${yn.MaxWidth.xl} {
                        column-gap: ${hn["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${yn.MaxWidth.lg} {
                        column-gap: ${hn["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${yn.MaxWidth.md} {
                        column-gap: ${hn["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${yn.MaxWidth.sm} {
                        column-gap: ${hn["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${yn.MaxWidth.xs} {
                        column-gap: ${hn["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${yn.MaxWidth.xxs} {
                        column-gap: ${hn["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${hn["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,Ln=o.forwardRef(((e,n)=>{const{children:s,"data-testid":t="container",type:i="flex",stretch:a=!1}=e,o=l(e,["children","data-testid","type","stretch"]);return r(jn,Object.assign({ref:n,"data-testid":t,$type:i,$stretch:a},o,{children:s}))})),Wn=o.forwardRef(((e,n)=>{const{children:s,"data-testid":t="section",stretch:i=!1}=e,a=l(e,["children","data-testid","stretch"]);return r(Tn,Object.assign({ref:n,"data-testid":t,$stretch:i},a,{children:s}))})),Tn=s.section`
    display: block;
    position: relative;
`,Hn=o.forwardRef(((e,n)=>{const{children:s,"data-testid":t="content",className:i,type:a="flex",stretch:o=!1}=e,d=l(e,["children","data-testid","className","type","stretch"]);return r(Wn,Object.assign({ref:n,"data-testid":t,className:i,stretch:o},d,{children:r(Ln,{"data-testid":`${t}-container`,type:a,"data-id":"container",stretch:o,children:s})}))})),Un={Section:Wn,Container:Ln,Content:Hn,ColDiv:On},Vn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Nn=e=>Object.keys(Vn).reduce(((r,n)=>{const s=Vn[n];return r[n]=`@media screen and (${e}: ${s}px)`,r}),{}),Yn=Nn("max-width"),Pn=(Nn("min-width"),s.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:n,$tabletStart:s,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${Yn.tablet} {
                grid-column: ${s||"auto"} / span
                    ${i||1};
            }

            ${Yn.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`),Gn=o.forwardRef(((e,n)=>{const{mobileCols:s,tabletCols:t,desktopCols:i}=e,a=l(e,["mobileCols","tabletCols","desktopCols"]);return r(Pn,Object.assign({ref:n},(()=>{const e=t||s,r=s,n=In(i||t||s),a=In(e),o=In(r);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:o.span,$mobileStart:o.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),In=e=>{if(Array.isArray(e)&&e.length>1){const[r,n]=e,s=r<=n?r:n,t=r<=n?n:r;let i;return i=t===s?1:t-s,{start:s,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Xn=()=>e=>{let r;r="function"==typeof e.$color?e.$color(e):e.$color||un.border(e);const n=encodeURIComponent(r),s=e.$thickness||1;return t`
        background-color: transparent;
        height: ${s}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${s}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${s+1}" stroke-dasharray="4 4" /></svg>');
    `},Rn=s.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return t`
                    ${Xn}
                `;case"solid":return t`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||un.border};
                `}}}
`,Jn=s.footer`
    background: ${un["bg-strong"]};
`,Zn=s(Fn.LinkSM)`
    color: ${un.text};
`,qn=s((e=>{var{thickness:n=1,lineStyle:s="solid",layoutType:t="flex",color:i,className:a,xxsCols:o,xsCols:d,smCols:g,mdCols:c,lgCols:u,xlCols:b,xxlCols:m,mobileCols:h,tabletCols:y,desktopCols:p}=e,x=l(e,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const f=void 0!==h||void 0!==y||void 0!==p;switch(t){case"flex":return r(Rn,Object.assign({className:a,$thickness:n,$lineStyle:s,$color:i},x));case"grid":return f?r(Gn,Object.assign({className:a,mobileCols:h,tabletCols:y,desktopCols:p},x,{children:r(Rn,{$thickness:n,$lineStyle:s,$color:i})})):r(On,Object.assign({className:a},(()=>{const e=o||[1,-1],r=d||e,n=g||r,s=c||n,t=u||s,i=b||t;return{xxlCols:m||i,xlCols:i,lgCols:t,mdCols:s,smCols:n,xsCols:r,xxsCols:e}})(),x,{children:r(Rn,{$thickness:n,$lineStyle:s,$color:i})}))}}))`
    width: 100%;
`,Qn=s(Un.Content)`
    padding: ${mn["spacing-64"]} 0;

    ${yn.MaxWidth.lg} {
        padding: ${mn["spacing-32"]} 0;
    }
`,Kn=s.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${yn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${mn["spacing-32"]};
    }

    ${yn.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${mn["spacing-32"]};
    }
`,es=s.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${mn["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${yn.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${yn.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,rs=s.div`
    grid-column: 13 / span 6;

    ${yn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${mn["spacing-32"]};
    }

    ${yn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ns=s(Un.Content)`
    padding: ${mn["spacing-20"]} 0;

    ${yn.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${mn["spacing-16"]} 0;
    }
`,ss=s.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${mn["spacing-16"]};
    }

    ${yn.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${yn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ts=s(ss)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${yn.MaxWidth.lg} {
        margin-top: ${mn["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${yn.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,is=s(Fn.LinkXS)`
    color: ${un.text};
    &:not(:last-child) {
        margin-right: ${mn["spacing-16"]};
    }

    svg {
        color: ${un.icon};
    }

    &:hover {
        color: ${un["text-subtler"]};
        svg {
            color: ${un["icon-subtle"]};
        }
    }

    ${yn.MaxWidth.lg} {
        margin-bottom: ${mn["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${yn.MaxWidth.lg} {
        margin-bottom: ${mn["spacing-8"]};
    }
`,as=s=>{var{children:t,links:a,lastUpdated:o,disclaimerLinks:d,showDownloadAddon:g,logoSrc:c,copyrightInfo:u,onFooterLinkClick:b,layout:m="default"}=s,h=l(s,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const y="stretch"===m,p=i(),x=e=>e.map(((e,n)=>{const s=l(e,["data-options"]);return r("li",{children:r(Zn,Object.assign({},s,{onClick:r=>((e,r)=>{r.onClick?(e.preventDefault(),r.onClick(e)):b&&(e.preventDefault(),b(r))})(r,e)}))},n)}));return e(Jn,Object.assign({},h,{children:[(()=>{let s=null;return t||((a||g)&&(s=e(n,{children:[r(Kn,{"data-testid":"logo-section",children:r("img",{src:c||_n.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==a?void 0:a[0])&&r(es,{"data-testid":"link-col-1",children:x(a[0])},"link-col-1"),(null==a?void 0:a[1])&&r(es,{"data-testid":"link-col-2",children:x(a[1])},"link-col-2"),g&&r(rs,{children:r(Dn,{})})]})),s?e(n,{children:[r(Qn,{type:"grid",stretch:y,children:s}),r(qn,{})]}):null)})(),e(ns,{type:"grid",stretch:y,children:[r(ss,{children:(()=>{const e=_n.getDisclaimerLinks(null==p?void 0:p.resourceScheme,d);return Object.keys(e).map((n=>r(is,Object.assign({},e[n]),n)))})()},"disclaimer"),r(ts,{children:r(Fn.BodyXS,{"data-testid":"copyright-text",children:u||e(n,{children:["©"," ",_n.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))};export{as as Footer};
//# sourceMappingURL=index.js.map
