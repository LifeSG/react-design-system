import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as s,css as n,useTheme as a}from"styled-components";import o from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r}const c={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},d={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},m={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},u={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},y={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},b={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},v={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},F={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},S={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},x={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},B={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},$={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},D={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},w={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},H={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"},E={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png"},A={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png"},k={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png"},z={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png"},_={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png"},O={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png"},W={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png"},j={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png"},T={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png"},N={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png"},C={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png"},L={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png"},P={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png"},I={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png"},R={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png"},V={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png"},G={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png"},X={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png"},M=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${c.mobileL}px) 400px, (max-width: ${c.tablet}px) 800px, 1200px`}},U=new Map([["400",{img:M({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"}),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:M(d),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:M(p),title:"404 No Page Found",description:"No page found."}],["408",{img:M(m),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:M(f),title:"Error state",description:"A generic error state illustration."}],["502",{img:M(u),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:M(h),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:M(y),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:M(b),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:M(S),title:"Link Error",description:"When a link is expired."}],["logout",{img:M(x),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:M(v),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:M(F),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:M(h),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:i=>e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]})}],["no-item-found",{img:M(B),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:M($),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:M(D),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:M(w),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:M(w),title:"Error state",description:"A generic error state illustration."}],["warning",{img:M(H),title:"Warning states",description:"Generic warning and error state illustrations."}]]),q=new Map([["400",{img:M(E),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:M(A),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:M(k),title:"404 No Page Found",description:"No page found."}],["408",{img:M(z),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:M(_),title:"Error state",description:"A generic error state illustration."}],["502",{img:M(O),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:M(W),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:M(j),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:M(T),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:M(L),title:"Link Error",description:"When a link is expired."}],["logout",{img:M(P),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:M(N),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:M(C),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:M(W),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:i=>e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]})}],["no-item-found",{img:M(I),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:M(R),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:M(V),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:M(G),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:M(G),title:"Error state",description:"A generic error state illustration."}],["warning",{img:M(X),title:"Warning states",description:"Generic warning and error state illustrations."}]]);var Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Y=Array.isArray,J="object"==typeof Z&&Z&&Z.Object===Object&&Z,K="object"==typeof self&&self&&self.Object===Object&&self,Q=J||K||Function("return this")(),ee=Q.Symbol,te=ee,re=Object.prototype,ie=re.hasOwnProperty,se=re.toString,ne=te?te.toStringTag:void 0;var ae=function(e){var t=ie.call(e,ne),r=e[ne];try{e[ne]=void 0;var i=!0}catch(e){}var s=se.call(e);return i&&(t?e[ne]=r:delete e[ne]),s},oe=Object.prototype.toString;var ge=ae,le=function(e){return oe.call(e)},ce=ee?ee.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?ge(e):le(e)};var pe=de,me=function(e){return null!=e&&"object"==typeof e};var fe=function(e){return"symbol"==typeof e||me(e)&&"[object Symbol]"==pe(e)},ue=Y,he=fe,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,be=/^\w*$/;var ve=function(e,t){if(ue(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!he(e))||(be.test(e)||!ye.test(e)||null!=t&&e in Object(t))};var Fe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Se=de,xe=Fe;var Be,$e=function(e){if(!xe(e))return!1;var t=Se(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},De=Q["__core-js_shared__"],we=(Be=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var He=function(e){return!!we&&we in e},Ee=Function.prototype.toString;var Ae=$e,ke=He,ze=Fe,_e=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,We=Function.prototype,je=Object.prototype,Te=We.toString,Ne=je.hasOwnProperty,Ce=RegExp("^"+Te.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Le=function(e){return!(!ze(e)||ke(e))&&(Ae(e)?Ce:Oe).test(_e(e))},Pe=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var r=Pe(e,t);return Le(r)?r:void 0},Re=Ie(Object,"create"),Ve=Re;var Ge=function(){this.__data__=Ve?Ve(null):{},this.size=0};var Xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Re,Ue=Object.prototype.hasOwnProperty;var qe=function(e){var t=this.__data__;if(Me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ue.call(t,e)?t[e]:void 0},Ze=Re,Ye=Object.prototype.hasOwnProperty;var Je=Re;var Ke=Ge,Qe=Xe,et=qe,tt=function(e){var t=this.__data__;return Ze?void 0!==t[e]:Ye.call(t,e)},rt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Je&&void 0===t?"__lodash_hash_undefined__":t,this};function it(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}it.prototype.clear=Ke,it.prototype.delete=Qe,it.prototype.get=et,it.prototype.has=tt,it.prototype.set=rt;var st=it;var nt=function(){this.__data__=[],this.size=0};var at=function(e,t){return e===t||e!=e&&t!=t};var ot=function(e,t){for(var r=e.length;r--;)if(at(e[r][0],t))return r;return-1},gt=ot,lt=Array.prototype.splice;var ct=ot;var dt=ot;var pt=ot;var mt=nt,ft=function(e){var t=this.__data__,r=gt(t,e);return!(r<0)&&(r==t.length-1?t.pop():lt.call(t,r,1),--this.size,!0)},ut=function(e){var t=this.__data__,r=ct(t,e);return r<0?void 0:t[r][1]},ht=function(e){return dt(this.__data__,e)>-1},yt=function(e,t){var r=this.__data__,i=pt(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}bt.prototype.clear=mt,bt.prototype.delete=ft,bt.prototype.get=ut,bt.prototype.has=ht,bt.prototype.set=yt;var vt=bt,Ft=Ie(Q,"Map"),St=st,xt=vt,Bt=Ft;var $t=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dt=function(e,t){var r=e.__data__;return $t(t)?r["string"==typeof t?"string":"hash"]:r.map},wt=Dt;var Ht=Dt;var Et=Dt;var At=Dt;var kt=function(){this.size=0,this.__data__={hash:new St,map:new(Bt||xt),string:new St}},zt=function(e){var t=wt(this,e).delete(e);return this.size-=t?1:0,t},_t=function(e){return Ht(this,e).get(e)},Ot=function(e){return Et(this,e).has(e)},Wt=function(e,t){var r=At(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function jt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}jt.prototype.clear=kt,jt.prototype.delete=zt,jt.prototype.get=_t,jt.prototype.has=Ot,jt.prototype.set=Wt;var Tt=jt;function Nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],n=r.cache;if(n.has(s))return n.get(s);var a=e.apply(this,i);return r.cache=n.set(s,a)||n,a};return r.cache=new(Nt.Cache||Tt),r}Nt.Cache=Tt;var Ct=Nt;var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/\\(\\)?/g,It=function(e){var t=Ct(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Lt,(function(e,r,i,s){t.push(i?s.replace(Pt,"$1"):r||e)})),t}));var Rt=function(e,t){for(var r=-1,i=null==e?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s},Vt=Y,Gt=fe,Xt=ee?ee.prototype:void 0,Mt=Xt?Xt.toString:void 0;var Ut=function e(t){if("string"==typeof t)return t;if(Vt(t))return Rt(t,e)+"";if(Gt(t))return Mt?Mt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},qt=Ut;var Zt=Y,Yt=ve,Jt=It,Kt=function(e){return null==e?"":qt(e)};var Qt=fe;var er=function(e,t){return Zt(e)?e:Yt(e,t)?[e]:Jt(Kt(e))},tr=function(e){if("string"==typeof e||Qt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var rr=function(e,t){for(var r=0,i=(t=er(t,e)).length;null!=e&&r<i;)e=e[tr(t[r++])];return r&&r==i?e:void 0};var ir=function(e,t,r){var i=null==e?void 0:rr(e,t);return void 0===i?r:i};const sr=(e,t,r)=>t?ir(r,t)||ir(e,t):r||e,nr=(e,t)=>{const r=t||e.defaultValue;return ir(e.collections,r)};var ar;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ar||(ar={}));const or={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},gr=e=>t=>{const r=t.theme,i=nr(or,r[ar.colorScheme]);return r.options&&r.options.color?sr(i,e,r.options.color):sr(i,e)},lr={Brand:{1:gr("Brand.1"),2:gr("Brand.2"),3:gr("Brand.3"),4:gr("Brand.4"),5:gr("Brand.5"),6:gr("Brand.6")},Primary:gr("Primary"),PrimaryDark:gr("PrimaryDark"),Secondary:gr("Secondary"),Accent:{Light:{1:gr("Accent.Light.1"),2:gr("Accent.Light.2"),3:gr("Accent.Light.3"),4:gr("Accent.Light.4"),5:gr("Accent.Light.5"),6:gr("Accent.Light.6")},Dark:{1:gr("Accent.Dark.1"),2:gr("Accent.Dark.2"),3:gr("Accent.Dark.3")}},Neutral:{1:gr("Neutral.1"),2:gr("Neutral.2"),3:gr("Neutral.3"),4:gr("Neutral.4"),5:gr("Neutral.5"),6:gr("Neutral.6"),7:gr("Neutral.7"),8:gr("Neutral.8")},Validation:{Green:{Text:gr("Validation.Green.Text"),Icon:gr("Validation.Green.Icon"),Border:gr("Validation.Green.Border"),Background:gr("Validation.Green.Background")},Orange:{Text:gr("Validation.Orange.Text"),Icon:gr("Validation.Orange.Icon"),Border:gr("Validation.Orange.Border"),Background:gr("Validation.Orange.Background"),Badge:gr("Validation.Orange.Badge")},Red:{Text:gr("Validation.Red.Text"),Icon:gr("Validation.Red.Icon"),Border:gr("Validation.Red.Border"),Background:gr("Validation.Red.Background")},Blue:{Text:gr("Validation.Blue.Text"),Icon:gr("Validation.Blue.Icon"),Border:gr("Validation.Blue.Border"),Background:gr("Validation.Blue.Background")}},Shadow:{Accent:gr("Shadow.Accent"),Red:gr("Shadow.Red"),Elevation:gr("Shadow.Elevation")}},cr=e=>Object.keys(c).reduce(((t,r)=>{const i=c[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),dr=cr("max-width"),pr=(cr("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),mr=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fr=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||lr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${mr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ur=i(fr)`
    animation-delay: -0.45s;
`,hr=i(fr)`
    animation-delay: -0.3s;
`,yr=i(fr)`
    animation-delay: -0.15s;
`,br={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},vr={collections:{base:{D1:{fontFamily:br.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:br.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:br.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:br.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:br.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:br.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:br.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:br.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:br.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:br.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:br.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:br.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:br.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:br.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Fr=e=>t=>{const r=t.theme,i=nr(vr,r[ar.textStyleScheme]);return r.options&&r.options.textStyle?sr(i,e,r.options.textStyle):sr(i,e)},Sr={D1:{fontFamily:Fr("D1.fontFamily"),fontSize:Fr("D1.fontSize"),fontWeight:Fr("D1.fontWeight"),lineHeight:Fr("D1.lineHeight"),letterSpacing:Fr("D1.letterSpacing")},D2:{fontFamily:Fr("D2.fontFamily"),fontSize:Fr("D2.fontSize"),fontWeight:Fr("D2.fontWeight"),lineHeight:Fr("D2.lineHeight"),letterSpacing:Fr("D2.letterSpacing")},D3:{fontFamily:Fr("D3.fontFamily"),fontSize:Fr("D3.fontSize"),fontWeight:Fr("D3.fontWeight"),lineHeight:Fr("D3.lineHeight"),letterSpacing:Fr("D3.letterSpacing")},D4:{fontFamily:Fr("D4.fontFamily"),fontSize:Fr("D4.fontSize"),fontWeight:Fr("D4.fontWeight"),lineHeight:Fr("D4.lineHeight"),letterSpacing:Fr("D4.letterSpacing")},DBody:{fontFamily:Fr("DBody.fontFamily"),fontSize:Fr("DBody.fontSize"),fontWeight:Fr("DBody.fontWeight"),lineHeight:Fr("DBody.lineHeight"),letterSpacing:Fr("DBody.letterSpacing")},H1:{fontFamily:Fr("H1.fontFamily"),fontSize:Fr("H1.fontSize"),fontWeight:Fr("H1.fontWeight"),lineHeight:Fr("H1.lineHeight"),letterSpacing:Fr("H1.letterSpacing")},H2:{fontFamily:Fr("H2.fontFamily"),fontSize:Fr("H2.fontSize"),fontWeight:Fr("H2.fontWeight"),lineHeight:Fr("H2.lineHeight"),letterSpacing:Fr("H2.letterSpacing")},H3:{fontFamily:Fr("H3.fontFamily"),fontSize:Fr("H3.fontSize"),fontWeight:Fr("H3.fontWeight"),lineHeight:Fr("H3.lineHeight"),letterSpacing:Fr("H3.letterSpacing")},H4:{fontFamily:Fr("H4.fontFamily"),fontSize:Fr("H4.fontSize"),fontWeight:Fr("H4.fontWeight"),lineHeight:Fr("H4.lineHeight"),letterSpacing:Fr("H4.letterSpacing")},H5:{fontFamily:Fr("H5.fontFamily"),fontSize:Fr("H5.fontSize"),fontWeight:Fr("H5.fontWeight"),lineHeight:Fr("H5.lineHeight"),letterSpacing:Fr("H5.letterSpacing")},H6:{fontFamily:Fr("H6.fontFamily"),fontSize:Fr("H6.fontSize"),fontWeight:Fr("H6.fontWeight"),lineHeight:Fr("H6.lineHeight"),letterSpacing:Fr("H6.letterSpacing")},Body:{fontFamily:Fr("Body.fontFamily"),fontSize:Fr("Body.fontSize"),fontWeight:Fr("Body.fontWeight"),lineHeight:Fr("Body.lineHeight"),letterSpacing:Fr("Body.letterSpacing")},BodySmall:{fontFamily:Fr("BodySmall.fontFamily"),fontSize:Fr("BodySmall.fontSize"),fontWeight:Fr("BodySmall.fontWeight"),lineHeight:Fr("BodySmall.lineHeight"),letterSpacing:Fr("BodySmall.letterSpacing")},XSmall:{fontFamily:Fr("XSmall.fontFamily"),fontSize:Fr("XSmall.fontSize"),fontWeight:Fr("XSmall.fontWeight"),lineHeight:Fr("XSmall.lineHeight"),letterSpacing:Fr("XSmall.letterSpacing")}},xr=e=>{switch(e){case 700:case"bold":return br.Bold;case 600:case"semibold":return br.Semibold;case 300:case"light":return br.Light;case 400:case"regular":return br.Regular;default:return""}},Br=(e,t)=>r=>{var i;const s=Sr[e].fontFamily(r),a=Sr[e].fontWeight(r);return Object.values(br).includes(s)?n`
                font-family: ${xr(t)||xr(a)||s};
                font-weight: normal !important;
            `:n`
            font-family: ${s};
            font-weight: ${null!==(i=$r(t)||a)&&void 0!==i?i:"normal"};
        `},$r=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Dr=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wr=Br,Hr=(e,t,r=!1)=>i=>{const s=Sr[e],a=s.fontSize(i);return n`
            ${Br(e,t)}
            font-size: ${a}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${s.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Er=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Dr(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Dr(r)}
        `;var Ar;!function(e){e.D1=i.h1`
        ${e=>n`
                ${Hr("D1",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>n`
                ${Hr("D2",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>n`
                ${Hr("D3",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>n`
                ${Hr("D4",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>n`
                ${Hr("DBody",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>n`
                ${Hr("H1",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>n`
                ${Hr("H2",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>n`
                ${Hr("H3",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>n`
                ${Hr("H4",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>n`
                ${Hr("H5",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>n`
                ${Hr("H6",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>n`
                ${Hr("Body",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>n`
                ${Hr("BodySmall",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>n`
                ${Hr("XSmall",e.weight,e.paragraph)}
                color: ${lr.Neutral[1]};
                ${Er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>_r(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>_r(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ar||(Ar={}));const kr=i.a`
    ${e=>n`
            ${Hr(e.textStyle,e.weight)}
            color: ${lr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${lr.Secondary};

                svg {
                    color: ${lr.Secondary};
                }
            }
        `}
`,zr=i(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,_r=t=>{var{external:i=!1,children:s}=t,n=l(t,["external","children"]);return e(kr,Object.assign({},n,{children:[s,i&&r(zr,{})]}))};var Or;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Or||(Or={}));const Wr=i.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${lr.Neutral[8](e)};
                    border: 1px solid ${lr.Primary(e)};

                    span {
                        color: ${lr.Primary(e)};
                    }
                `;case"light":return n`
                    background-color: ${lr.Neutral[8](e)};
                    border: 1px solid ${lr.Neutral[5](e)};

                    span {
                        color: ${lr.Primary(e)};
                    }
                `;case"disabled":return n`
                    background-color: ${lr.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${lr.Neutral[3](e)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${lr.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${lr.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${lr.Primary(e)};
                    border: 1px solid transparent;

                    ${dr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${lr.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${Hr("H5","semibold")}
                    }

                    ${dr.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${Hr("H4","semibold")}
                    }

                    ${dr.mobileS} {
                        height: auto;
                    }
                `}
`,jr=i((({color:t,className:i,size:s=18})=>e(pr,Object.assign({className:i,$size:s,$color:t},{children:[r(fr,{id:"inner1",$size:s-2,$borderWidth:2}),r(ur,{id:"inner2",$size:s-2,$borderWidth:2}),r(hr,{id:"inner3",$size:s-2,$borderWidth:2}),r(yr,{id:"inner4",$size:s-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=lr.Primary(e);break;case"disabled":t=lr.Neutral[3](e);break;default:t=lr.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Tr={Default:o.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:a=!1,styleType:o="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default"};return e(Wr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:n},c,g,{children:[a&&r(jr,Object.assign({},c)),r("span",{children:s})]}))})),Small:o.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:a=!1,styleType:o="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small"};return e(Wr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:n},c,g,{children:[a&&r(jr,Object.assign({},c,{size:16})),r("span",{children:s})]}))}))},Nr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Cr=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${dr.mobileL} {
        width: 20rem;
    }

    ${dr.mobileM} {
        width: 18rem;
    }

    ${dr.mobileS} {
        width: 15rem;
    }
`,Lr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Pr=i(Ar.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,Ir=i.div`
    ${Hr("Body","regular")} // Follow styling of Text.Body
    color: ${lr.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${wr("Body","semibold")}
    }

    a {
        ${Hr("Body","semibold")}
        color: ${lr.Primary};

        :hover,
        :active,
        :focus {
            color: ${lr.Secondary};
        }
    }
`,Rr=i(Tr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${dr.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Vr=t=>{var{type:i,img:s,title:n,description:o,actionButton:g,additionalProps:c,imageOnly:d,illustrationScheme:p}=t,m=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=a(),u=((e,t)=>"bookingsg"===t?q.get(e):U.get(e))(i,p||f.resourceScheme),h=m["data-testid"]||"error-display",y=()=>{if("maintenance"===i){const e=c;return c&&e.dateString?u.renderDescription(e):o||void 0}return o||void 0};if(!u)return null;const b=Object.assign(Object.assign(Object.assign(Object.assign({},u),s&&{img:s}),n&&{title:n}),y()&&{description:y()});return e(Nr,Object.assign({},m,{"data-testid":h},{children:[r(Cr,Object.assign({},b.img,{alt:"","data-id":"error-display-image"})),!d&&(b.title||b.description?e(Lr,{children:[b.title&&("string"==typeof b.title?r(Pr,Object.assign({"data-testid":`${h}--title`,"data-id":"error-display-title"},{children:b.title})):b.title),b.description&&r(Ir,Object.assign({"data-testid":`${h}--description`,"data-id":"error-display-description"},{children:"string"==typeof b.description?r("p",{children:b.description}):b.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(Rr,Object.assign({},e))})()]}))};export{Vr as ErrorDisplay};
//# sourceMappingURL=index.js.map
