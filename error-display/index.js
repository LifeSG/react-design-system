import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as s,css as n,useTheme as o}from"styled-components";import a from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r}var c;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const p={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},m=i=>s=>{switch(i){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:s.dateString}),"."]});case"inactivity":{const i=s,n=Math.floor(i.secondsLeft/60),o=i.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},h={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},u={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},y={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},b={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},v={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},F={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},S={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},B={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},x={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},w={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},$={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},D={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},k={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},H={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},E={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},A={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"},z={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png"},_={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png"},O={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png"},T={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png"},j={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png"},C={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png"},I={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png"},L={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png"},W={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png"},P={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png"},N={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png"},R={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png"},V={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png"},Y={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png"},U={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png"},X={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png"},G={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png"},M={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png"},Z=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${p.mobileL}px) 400px, (max-width: ${p.tablet}px) 800px, 1200px`}},q=new Map([["400",{img:Z({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"}),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Z(h),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Z(u),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Z(f),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Z(y),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Z(b),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Z(v),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Z(F),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Z(S),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Z(w),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Z($),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Z(B),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Z(x),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:m("inactivity")}],["maintenance",{img:Z(v),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:m("maintenance")}],["no-item-found",{img:Z(D),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Z(k),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Z(H),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Z(E),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Z(E),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Z(A),title:"Are you sure?",description:"You will lose your progress."}]]),J=new Map([["400",{img:Z(z),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Z(_),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Z(O),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Z(T),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Z(j),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Z(C),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Z(I),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Z(L),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Z(W),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Z(R),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Z(V),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Z(P),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Z(N),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:m("inactivity")}],["maintenance",{img:Z(I),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:m("maintenance")}],["no-item-found",{img:Z(Y),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Z(U),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Z(X),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Z(G),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Z(G),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Z(M),title:"Are you sure?",description:"You will lose your progress."}]]);var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Q=Array.isArray,ee="object"==typeof K&&K&&K.Object===Object&&K,te="object"==typeof self&&self&&self.Object===Object&&self,re=ee||te||Function("return this")(),ie=re.Symbol,se=ie,ne=Object.prototype,oe=ne.hasOwnProperty,ae=ne.toString,ge=se?se.toStringTag:void 0;var le=function(e){var t=oe.call(e,ge),r=e[ge];try{e[ge]=void 0;var i=!0}catch(e){}var s=ae.call(e);return i&&(t?e[ge]=r:delete e[ge]),s},ce=Object.prototype.toString;var de=le,pe=function(e){return ce.call(e)},me=ie?ie.toStringTag:void 0;var he=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?de(e):pe(e)};var ue=he,fe=function(e){return null!=e&&"object"==typeof e};var ye=function(e){return"symbol"==typeof e||fe(e)&&"[object Symbol]"==ue(e)},be=Q,ve=ye,Fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/;var Be=function(e,t){if(be(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ve(e))||(Se.test(e)||!Fe.test(e)||null!=t&&e in Object(t))};var xe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},we=he,$e=xe;var De,ke=function(e){if(!$e(e))return!1;var t=we(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},He=re["__core-js_shared__"],Ee=(De=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Ae=function(e){return!!Ee&&Ee in e},ze=Function.prototype.toString;var _e=ke,Oe=Ae,Te=xe,je=function(e){if(null!=e){try{return ze.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=/^\[object .+?Constructor\]$/,Ie=Function.prototype,Le=Object.prototype,We=Ie.toString,Pe=Le.hasOwnProperty,Ne=RegExp("^"+We.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e){return!(!Te(e)||Oe(e))&&(_e(e)?Ne:Ce).test(je(e))},Ve=function(e,t){return null==e?void 0:e[t]};var Ye=function(e,t){var r=Ve(e,t);return Re(r)?r:void 0},Ue=Ye(Object,"create"),Xe=Ue;var Ge=function(){this.__data__=Xe?Xe(null):{},this.size=0};var Me=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ze=Ue,qe=Object.prototype.hasOwnProperty;var Je=function(e){var t=this.__data__;if(Ze){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return qe.call(t,e)?t[e]:void 0},Ke=Ue,Qe=Object.prototype.hasOwnProperty;var et=Ue;var tt=Ge,rt=Me,it=Je,st=function(e){var t=this.__data__;return Ke?void 0!==t[e]:Qe.call(t,e)},nt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function ot(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ot.prototype.clear=tt,ot.prototype.delete=rt,ot.prototype.get=it,ot.prototype.has=st,ot.prototype.set=nt;var at=ot;var gt=function(){this.__data__=[],this.size=0};var lt=function(e,t){return e===t||e!=e&&t!=t};var ct=function(e,t){for(var r=e.length;r--;)if(lt(e[r][0],t))return r;return-1},dt=ct,pt=Array.prototype.splice;var mt=ct;var ht=ct;var ut=ct;var ft=gt,yt=function(e){var t=this.__data__,r=dt(t,e);return!(r<0)&&(r==t.length-1?t.pop():pt.call(t,r,1),--this.size,!0)},bt=function(e){var t=this.__data__,r=mt(t,e);return r<0?void 0:t[r][1]},vt=function(e){return ht(this.__data__,e)>-1},Ft=function(e,t){var r=this.__data__,i=ut(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function St(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}St.prototype.clear=ft,St.prototype.delete=yt,St.prototype.get=bt,St.prototype.has=vt,St.prototype.set=Ft;var Bt=St,xt=Ye(re,"Map"),wt=at,$t=Bt,Dt=xt;var kt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ht=function(e,t){var r=e.__data__;return kt(t)?r["string"==typeof t?"string":"hash"]:r.map},Et=Ht;var At=Ht;var zt=Ht;var _t=Ht;var Ot=function(){this.size=0,this.__data__={hash:new wt,map:new(Dt||$t),string:new wt}},Tt=function(e){var t=Et(this,e).delete(e);return this.size-=t?1:0,t},jt=function(e){return At(this,e).get(e)},Ct=function(e){return zt(this,e).has(e)},It=function(e,t){var r=_t(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function Lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Lt.prototype.clear=Ot,Lt.prototype.delete=Tt,Lt.prototype.get=jt,Lt.prototype.has=Ct,Lt.prototype.set=It;var Wt=Lt;function Pt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],n=r.cache;if(n.has(s))return n.get(s);var o=e.apply(this,i);return r.cache=n.set(s,o)||n,o};return r.cache=new(Pt.Cache||Wt),r}Pt.Cache=Wt;var Nt=Pt;var Rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Yt=function(e){var t=Nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Rt,(function(e,r,i,s){t.push(i?s.replace(Vt,"$1"):r||e)})),t}));var Ut=function(e,t){for(var r=-1,i=null==e?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s},Xt=Q,Gt=ye,Mt=ie?ie.prototype:void 0,Zt=Mt?Mt.toString:void 0;var qt=function e(t){if("string"==typeof t)return t;if(Xt(t))return Ut(t,e)+"";if(Gt(t))return Zt?Zt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Jt=qt;var Kt=Q,Qt=Be,er=Yt,tr=function(e){return null==e?"":Jt(e)};var rr=ye;var ir=function(e,t){return Kt(e)?e:Qt(e,t)?[e]:er(tr(e))},sr=function(e){if("string"==typeof e||rr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var nr=function(e,t){for(var r=0,i=(t=ir(t,e)).length;null!=e&&r<i;)e=e[sr(t[r++])];return r&&r==i?e:void 0};var or=function(e,t,r){var i=null==e?void 0:nr(e,t);return void 0===i?r:i};const ar=(e,t,r)=>t?or(r,t)||or(e,t):r||e,gr=(e,t)=>{const r=t||e.defaultValue;return or(e.collections,r)},lr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},cr=e=>t=>{const r=t.theme,i=gr(lr,r[c.colorScheme]);return r.options&&r.options.color?ar(i,e,r.options.color):ar(i,e)},dr={Brand:{1:cr("Brand.1"),2:cr("Brand.2"),3:cr("Brand.3"),4:cr("Brand.4"),5:cr("Brand.5"),6:cr("Brand.6")},Primary:cr("Primary"),PrimaryDark:cr("PrimaryDark"),Secondary:cr("Secondary"),Accent:{Light:{1:cr("Accent.Light.1"),2:cr("Accent.Light.2"),3:cr("Accent.Light.3"),4:cr("Accent.Light.4"),5:cr("Accent.Light.5"),6:cr("Accent.Light.6")},Dark:{1:cr("Accent.Dark.1"),2:cr("Accent.Dark.2"),3:cr("Accent.Dark.3")}},Neutral:{1:cr("Neutral.1"),2:cr("Neutral.2"),3:cr("Neutral.3"),4:cr("Neutral.4"),5:cr("Neutral.5"),6:cr("Neutral.6"),7:cr("Neutral.7"),8:cr("Neutral.8")},Validation:{Green:{Text:cr("Validation.Green.Text"),Icon:cr("Validation.Green.Icon"),Border:cr("Validation.Green.Border"),Background:cr("Validation.Green.Background")},Orange:{Text:cr("Validation.Orange.Text"),Icon:cr("Validation.Orange.Icon"),Border:cr("Validation.Orange.Border"),Background:cr("Validation.Orange.Background"),Badge:cr("Validation.Orange.Badge")},Red:{Text:cr("Validation.Red.Text"),Icon:cr("Validation.Red.Icon"),Border:cr("Validation.Red.Border"),Background:cr("Validation.Red.Background")},Blue:{Text:cr("Validation.Blue.Text"),Icon:cr("Validation.Blue.Icon"),Border:cr("Validation.Blue.Border"),Background:cr("Validation.Blue.Background")}},Shadow:{Accent:cr("Shadow.Accent"),Red:cr("Shadow.Red"),Elevation:cr("Shadow.Elevation")}},pr=e=>Object.keys(p).reduce(((t,r)=>{const i=p[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),mr=pr("max-width"),hr=(pr("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ur=s`
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
    border-color: ${e=>e.$color||dr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ur} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yr=i(fr)`
    animation-delay: -0.45s;
`,br=i(fr)`
    animation-delay: -0.3s;
`,vr=i(fr)`
    animation-delay: -0.15s;
`,Fr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Sr={collections:{base:{D1:{fontFamily:Fr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Fr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Fr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Fr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Fr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Fr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Fr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Fr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Fr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Br=e=>t=>{const r=t.theme,i=gr(Sr,r[c.textStyleScheme]);return r.options&&r.options.textStyle?ar(i,e,r.options.textStyle):ar(i,e)},xr={D1:{fontFamily:Br("D1.fontFamily"),fontSize:Br("D1.fontSize"),fontWeight:Br("D1.fontWeight"),lineHeight:Br("D1.lineHeight"),letterSpacing:Br("D1.letterSpacing")},D2:{fontFamily:Br("D2.fontFamily"),fontSize:Br("D2.fontSize"),fontWeight:Br("D2.fontWeight"),lineHeight:Br("D2.lineHeight"),letterSpacing:Br("D2.letterSpacing")},D3:{fontFamily:Br("D3.fontFamily"),fontSize:Br("D3.fontSize"),fontWeight:Br("D3.fontWeight"),lineHeight:Br("D3.lineHeight"),letterSpacing:Br("D3.letterSpacing")},D4:{fontFamily:Br("D4.fontFamily"),fontSize:Br("D4.fontSize"),fontWeight:Br("D4.fontWeight"),lineHeight:Br("D4.lineHeight"),letterSpacing:Br("D4.letterSpacing")},DBody:{fontFamily:Br("DBody.fontFamily"),fontSize:Br("DBody.fontSize"),fontWeight:Br("DBody.fontWeight"),lineHeight:Br("DBody.lineHeight"),letterSpacing:Br("DBody.letterSpacing")},H1:{fontFamily:Br("H1.fontFamily"),fontSize:Br("H1.fontSize"),fontWeight:Br("H1.fontWeight"),lineHeight:Br("H1.lineHeight"),letterSpacing:Br("H1.letterSpacing")},H2:{fontFamily:Br("H2.fontFamily"),fontSize:Br("H2.fontSize"),fontWeight:Br("H2.fontWeight"),lineHeight:Br("H2.lineHeight"),letterSpacing:Br("H2.letterSpacing")},H3:{fontFamily:Br("H3.fontFamily"),fontSize:Br("H3.fontSize"),fontWeight:Br("H3.fontWeight"),lineHeight:Br("H3.lineHeight"),letterSpacing:Br("H3.letterSpacing")},H4:{fontFamily:Br("H4.fontFamily"),fontSize:Br("H4.fontSize"),fontWeight:Br("H4.fontWeight"),lineHeight:Br("H4.lineHeight"),letterSpacing:Br("H4.letterSpacing")},H5:{fontFamily:Br("H5.fontFamily"),fontSize:Br("H5.fontSize"),fontWeight:Br("H5.fontWeight"),lineHeight:Br("H5.lineHeight"),letterSpacing:Br("H5.letterSpacing")},H6:{fontFamily:Br("H6.fontFamily"),fontSize:Br("H6.fontSize"),fontWeight:Br("H6.fontWeight"),lineHeight:Br("H6.lineHeight"),letterSpacing:Br("H6.letterSpacing")},Body:{fontFamily:Br("Body.fontFamily"),fontSize:Br("Body.fontSize"),fontWeight:Br("Body.fontWeight"),lineHeight:Br("Body.lineHeight"),letterSpacing:Br("Body.letterSpacing")},BodySmall:{fontFamily:Br("BodySmall.fontFamily"),fontSize:Br("BodySmall.fontSize"),fontWeight:Br("BodySmall.fontWeight"),lineHeight:Br("BodySmall.lineHeight"),letterSpacing:Br("BodySmall.letterSpacing")},XSmall:{fontFamily:Br("XSmall.fontFamily"),fontSize:Br("XSmall.fontSize"),fontWeight:Br("XSmall.fontWeight"),lineHeight:Br("XSmall.lineHeight"),letterSpacing:Br("XSmall.letterSpacing")}},wr=e=>{switch(e){case 700:case"bold":return Fr.Bold;case 600:case"semibold":return Fr.Semibold;case 300:case"light":return Fr.Light;case 400:case"regular":return Fr.Regular;default:return""}},$r=(e,t)=>r=>{var i;const s=xr[e].fontFamily(r),o=xr[e].fontWeight(r);return Object.values(Fr).includes(s)?n`
                font-family: ${wr(t)||wr(o)||s};
                font-weight: normal !important;
            `:n`
            font-family: ${s};
            font-weight: ${null!==(i=Dr(t)||o)&&void 0!==i?i:"normal"};
        `},Dr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kr=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Hr=$r,Er=(e,t,r=!1)=>i=>{const s=xr[e],o=s.fontSize(i);return n`
            ${$r(e,t)}
            font-size: ${o}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${s.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Ar=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${kr(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${kr(r)}
        `;var zr;!function(e){e.D1=i.h1`
        ${e=>n`
                ${Er("D1",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>n`
                ${Er("D2",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>n`
                ${Er("D3",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>n`
                ${Er("D4",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>n`
                ${Er("DBody",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>n`
                ${Er("H1",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>n`
                ${Er("H2",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>n`
                ${Er("H3",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>n`
                ${Er("H4",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>n`
                ${Er("H5",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>n`
                ${Er("H6",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>n`
                ${Er("Body",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>n`
                ${Er("BodySmall",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>n`
                ${Er("XSmall",e.weight,e.paragraph)}
                color: ${dr.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(zr||(zr={}));const _r=i.a`
    ${e=>n`
            ${Er(e.textStyle,e.weight)}
            color: ${dr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${dr.Secondary};

                svg {
                    color: ${dr.Secondary};
                }
            }
        `}
`,Or=i(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tr=t=>{var{external:i=!1,children:s}=t,n=l(t,["external","children"]);return e(_r,Object.assign({},n,{children:[s,i&&r(Or,{})]}))};var jr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jr||(jr={}));const Cr=i.button`
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
                    background-color: ${dr.Neutral[8](e)};
                    border: 1px solid ${dr.Primary(e)};

                    span {
                        color: ${dr.Primary(e)};
                    }
                `;case"light":return n`
                    background-color: ${dr.Neutral[8](e)};
                    border: 1px solid ${dr.Neutral[5](e)};

                    span {
                        color: ${dr.Primary(e)};
                    }
                `;case"disabled":return n`
                    background-color: ${dr.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${dr.Neutral[3](e)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${dr.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${dr.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${dr.Primary(e)};
                    border: 1px solid transparent;

                    ${mr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${dr.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${Er("H5","semibold")}
                    }

                    ${mr.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${Er("H4","semibold")}
                    }

                    ${mr.mobileS} {
                        height: auto;
                    }
                `}
`,Ir=i((({color:t,className:i,size:s=18})=>e(hr,Object.assign({className:i,$size:s,$color:t},{children:[r(fr,{id:"inner1",$size:s-2,$borderWidth:2}),r(yr,{id:"inner2",$size:s-2,$borderWidth:2}),r(br,{id:"inner3",$size:s-2,$borderWidth:2}),r(vr,{id:"inner4",$size:s-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=dr.Primary(e);break;case"disabled":t=dr.Neutral[3](e);break;default:t=dr.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Lr={Default:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default"};return e(Cr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:n},c,g,{children:[o&&r(Ir,Object.assign({},c)),r("span",{children:s})]}))})),Small:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small"};return e(Cr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:n},c,g,{children:[o&&r(Ir,Object.assign({},c,{size:16})),r("span",{children:s})]}))}))},Wr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Pr=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${mr.mobileL} {
        width: 20rem;
    }

    ${mr.mobileM} {
        width: 18rem;
    }

    ${mr.mobileS} {
        width: 15rem;
    }
`,Nr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Rr=i(zr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Vr=i.div`
    ${Er("Body","regular")} // Follow styling of Text.Body
    color: ${dr.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Hr("Body","semibold")}
    }

    a {
        ${Er("Body","semibold")}
        color: ${dr.Primary};

        :hover,
        :active,
        :focus {
            color: ${dr.Secondary};
        }
    }
`,Yr=i(Lr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${mr.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Ur=t=>{var{type:i,img:s,title:n,description:a,actionButton:g,additionalProps:c,imageOnly:p,illustrationScheme:m}=t,h=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=o(),f=((e,t)=>"bookingsg"===t?J.get(e):q.get(e))(i,m||(u||d).resourceScheme),y=h["data-testid"]||"error-display",b=()=>{switch(i){case"maintenance":{const e=c;return c&&e.dateString?f.renderDescription(e):a||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?f.renderDescription(e):a||void 0}default:return a||void 0}};if(!f)return null;const v=Object.assign(Object.assign(Object.assign(Object.assign({},f),s&&{img:s}),n&&{title:n}),b()&&{description:b()});return e(Wr,Object.assign({},h,{"data-testid":y},{children:[r(Pr,Object.assign({},v.img,{alt:"","data-id":"error-display-image"})),!p&&(v.title||v.description?e(Nr,{children:[v.title&&("string"==typeof v.title?r(Rr,Object.assign({"data-testid":`${y}--title`,"data-id":"error-display-title",weight:"semibold"},{children:v.title})):v.title),v.description&&r(Vr,Object.assign({"data-testid":`${y}--description`,"data-id":"error-display-description"},{children:"string"==typeof v.description?r("p",{children:v.description}):v.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(Yr,Object.assign({},e))})()]}))};export{Ur as ErrorDisplay};
//# sourceMappingURL=index.js.map
