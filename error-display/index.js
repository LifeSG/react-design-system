import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as s,css as n,useTheme as o}from"styled-components";import a from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r}var c;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const h=i=>s=>{switch(i){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:s.dateString}),"."]});case"inactivity":{const i=s,n=Math.floor(i.secondsLeft/60),o=i.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},p={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var m;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:i,width:s,height:n}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${p.mobileL}px) 400px, (max-width: ${p.tablet}px) 800px, 1200px`,width:s,height:n}}}(m||(m={}));const{imgAttributeHelper:u}=m,f={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},y={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},b={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},v={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},F={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},S={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},B={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},w={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},x={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},$={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},D={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},k={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},E={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},H={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},A={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},T={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},z={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280},C={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},_={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},O={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},I={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},P={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},j={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},L={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},W={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},N={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},R={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},V={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},Y={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},U={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},X={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},G={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},M={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},Z={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},q={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280},J=new Map([["400",{img:u({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280}),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:u(f),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:u(y),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:u(b),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:u(v),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:u(F),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:u(S),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:u(B),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:u(w),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:u(D),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:u(k),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:u(x),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:u($),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:h("inactivity")}],["maintenance",{img:u(S),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:h("maintenance")}],["no-item-found",{img:u(E),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:u(H),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:u(A),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:u(T),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:u(T),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:u(z),title:"Are you sure?",description:"You will lose your progress."}]]),K=new Map([["400",{img:u(C),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:u(_),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:u(O),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:u(I),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:u(P),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:u(j),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:u(L),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:u(W),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:u(N),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:u(Y),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:u(U),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:u(R),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:u(V),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:h("inactivity")}],["maintenance",{img:u(L),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:h("maintenance")}],["no-item-found",{img:u(X),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:u(G),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:u(M),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:u(Z),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:u(Z),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:u(q),title:"Are you sure?",description:"You will lose your progress."}]]);var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ee=Array.isArray,te="object"==typeof Q&&Q&&Q.Object===Object&&Q,re="object"==typeof self&&self&&self.Object===Object&&self,ie=te||re||Function("return this")(),se=ie.Symbol,ne=se,oe=Object.prototype,ae=oe.hasOwnProperty,ge=oe.toString,le=ne?ne.toStringTag:void 0;var ce=function(e){var t=ae.call(e,le),r=e[le];try{e[le]=void 0;var i=!0}catch(e){}var s=ge.call(e);return i&&(t?e[le]=r:delete e[le]),s},de=Object.prototype.toString;var he=ce,pe=function(e){return de.call(e)},me=se?se.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?he(e):pe(e)};var fe=ue,ye=function(e){return null!=e&&"object"==typeof e};var be=function(e){return"symbol"==typeof e||ye(e)&&"[object Symbol]"==fe(e)},ve=ee,Fe=be,Se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/;var we=function(e,t){if(ve(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Fe(e))||(Be.test(e)||!Se.test(e)||null!=t&&e in Object(t))};var xe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$e=ue,De=xe;var ke,Ee=function(e){if(!De(e))return!1;var t=$e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},He=ie["__core-js_shared__"],Ae=(ke=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||""))?"Symbol(src)_1."+ke:"";var Te=function(e){return!!Ae&&Ae in e},ze=Function.prototype.toString;var Ce=Ee,_e=Te,Oe=xe,Ie=function(e){if(null!=e){try{return ze.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Pe=/^\[object .+?Constructor\]$/,je=Function.prototype,Le=Object.prototype,We=je.toString,Ne=Le.hasOwnProperty,Re=RegExp("^"+We.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ve=function(e){return!(!Oe(e)||_e(e))&&(Ce(e)?Re:Pe).test(Ie(e))},Ye=function(e,t){return null==e?void 0:e[t]};var Ue=function(e,t){var r=Ye(e,t);return Ve(r)?r:void 0},Xe=Ue(Object,"create"),Ge=Xe;var Me=function(){this.__data__=Ge?Ge(null):{},this.size=0};var Ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qe=Xe,Je=Object.prototype.hasOwnProperty;var Ke=function(e){var t=this.__data__;if(qe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Je.call(t,e)?t[e]:void 0},Qe=Xe,et=Object.prototype.hasOwnProperty;var tt=Xe;var rt=Me,it=Ze,st=Ke,nt=function(e){var t=this.__data__;return Qe?void 0!==t[e]:et.call(t,e)},ot=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=tt&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}at.prototype.clear=rt,at.prototype.delete=it,at.prototype.get=st,at.prototype.has=nt,at.prototype.set=ot;var gt=at;var lt=function(){this.__data__=[],this.size=0};var ct=function(e,t){return e===t||e!=e&&t!=t};var dt=function(e,t){for(var r=e.length;r--;)if(ct(e[r][0],t))return r;return-1},ht=dt,pt=Array.prototype.splice;var mt=dt;var ut=dt;var ft=dt;var yt=lt,bt=function(e){var t=this.__data__,r=ht(t,e);return!(r<0)&&(r==t.length-1?t.pop():pt.call(t,r,1),--this.size,!0)},vt=function(e){var t=this.__data__,r=mt(t,e);return r<0?void 0:t[r][1]},Ft=function(e){return ut(this.__data__,e)>-1},St=function(e,t){var r=this.__data__,i=ft(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Bt.prototype.clear=yt,Bt.prototype.delete=bt,Bt.prototype.get=vt,Bt.prototype.has=Ft,Bt.prototype.set=St;var wt=Bt,xt=Ue(ie,"Map"),$t=gt,Dt=wt,kt=xt;var Et=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ht=function(e,t){var r=e.__data__;return Et(t)?r["string"==typeof t?"string":"hash"]:r.map},At=Ht;var Tt=Ht;var zt=Ht;var Ct=Ht;var _t=function(){this.size=0,this.__data__={hash:new $t,map:new(kt||Dt),string:new $t}},Ot=function(e){var t=At(this,e).delete(e);return this.size-=t?1:0,t},It=function(e){return Tt(this,e).get(e)},Pt=function(e){return zt(this,e).has(e)},jt=function(e,t){var r=Ct(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function Lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Lt.prototype.clear=_t,Lt.prototype.delete=Ot,Lt.prototype.get=It,Lt.prototype.has=Pt,Lt.prototype.set=jt;var Wt=Lt;function Nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],n=r.cache;if(n.has(s))return n.get(s);var o=e.apply(this,i);return r.cache=n.set(s,o)||n,o};return r.cache=new(Nt.Cache||Wt),r}Nt.Cache=Wt;var Rt=Nt;var Vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Ut=function(e){var t=Rt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Vt,(function(e,r,i,s){t.push(i?s.replace(Yt,"$1"):r||e)})),t}));var Xt=function(e,t){for(var r=-1,i=null==e?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s},Gt=ee,Mt=be,Zt=se?se.prototype:void 0,qt=Zt?Zt.toString:void 0;var Jt=function e(t){if("string"==typeof t)return t;if(Gt(t))return Xt(t,e)+"";if(Mt(t))return qt?qt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Kt=Jt;var Qt=ee,er=we,tr=Ut,rr=function(e){return null==e?"":Kt(e)};var ir=be;var sr=function(e,t){return Qt(e)?e:er(e,t)?[e]:tr(rr(e))},nr=function(e){if("string"==typeof e||ir(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var or=function(e,t){for(var r=0,i=(t=sr(t,e)).length;null!=e&&r<i;)e=e[nr(t[r++])];return r&&r==i?e:void 0};var ar=function(e,t,r){var i=null==e?void 0:or(e,t);return void 0===i?r:i};const gr=(e,t,r)=>t?ar(r,t)||ar(e,t):r||e,lr=(e,t)=>{const r=t||e.defaultValue;return ar(e.collections,r)},cr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},dr=e=>t=>{const r=t.theme,i=lr(cr,r[c.colorScheme]);return r.options&&r.options.color?gr(i,e,r.options.color):gr(i,e)},hr={Brand:{1:dr("Brand.1"),2:dr("Brand.2"),3:dr("Brand.3"),4:dr("Brand.4"),5:dr("Brand.5"),6:dr("Brand.6")},Primary:dr("Primary"),PrimaryDark:dr("PrimaryDark"),Secondary:dr("Secondary"),Accent:{Light:{1:dr("Accent.Light.1"),2:dr("Accent.Light.2"),3:dr("Accent.Light.3"),4:dr("Accent.Light.4"),5:dr("Accent.Light.5"),6:dr("Accent.Light.6")},Dark:{1:dr("Accent.Dark.1"),2:dr("Accent.Dark.2"),3:dr("Accent.Dark.3")}},Neutral:{1:dr("Neutral.1"),2:dr("Neutral.2"),3:dr("Neutral.3"),4:dr("Neutral.4"),5:dr("Neutral.5"),6:dr("Neutral.6"),7:dr("Neutral.7"),8:dr("Neutral.8")},Validation:{Green:{Text:dr("Validation.Green.Text"),Icon:dr("Validation.Green.Icon"),Border:dr("Validation.Green.Border"),Background:dr("Validation.Green.Background")},Orange:{Text:dr("Validation.Orange.Text"),Icon:dr("Validation.Orange.Icon"),Border:dr("Validation.Orange.Border"),Background:dr("Validation.Orange.Background"),Badge:dr("Validation.Orange.Badge")},Red:{Text:dr("Validation.Red.Text"),Icon:dr("Validation.Red.Icon"),Border:dr("Validation.Red.Border"),Background:dr("Validation.Red.Background")},Blue:{Text:dr("Validation.Blue.Text"),Icon:dr("Validation.Blue.Icon"),Border:dr("Validation.Blue.Border"),Background:dr("Validation.Blue.Background")}},Shadow:{Accent:dr("Shadow.Accent"),Red:dr("Shadow.Red"),Elevation:dr("Shadow.Elevation")}},pr=e=>Object.keys(p).reduce(((t,r)=>{const i=p[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),mr=pr("max-width"),ur=(pr("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),fr=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,yr=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||hr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${fr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,br=i(yr)`
    animation-delay: -0.45s;
`,vr=i(yr)`
    animation-delay: -0.3s;
`,Fr=i(yr)`
    animation-delay: -0.15s;
`,Sr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Br={collections:{base:{D1:{fontFamily:Sr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wr=e=>t=>{const r=t.theme,i=lr(Br,r[c.textStyleScheme]);return r.options&&r.options.textStyle?gr(i,e,r.options.textStyle):gr(i,e)},xr={D1:{fontFamily:wr("D1.fontFamily"),fontSize:wr("D1.fontSize"),fontWeight:wr("D1.fontWeight"),lineHeight:wr("D1.lineHeight"),letterSpacing:wr("D1.letterSpacing")},D2:{fontFamily:wr("D2.fontFamily"),fontSize:wr("D2.fontSize"),fontWeight:wr("D2.fontWeight"),lineHeight:wr("D2.lineHeight"),letterSpacing:wr("D2.letterSpacing")},D3:{fontFamily:wr("D3.fontFamily"),fontSize:wr("D3.fontSize"),fontWeight:wr("D3.fontWeight"),lineHeight:wr("D3.lineHeight"),letterSpacing:wr("D3.letterSpacing")},D4:{fontFamily:wr("D4.fontFamily"),fontSize:wr("D4.fontSize"),fontWeight:wr("D4.fontWeight"),lineHeight:wr("D4.lineHeight"),letterSpacing:wr("D4.letterSpacing")},DBody:{fontFamily:wr("DBody.fontFamily"),fontSize:wr("DBody.fontSize"),fontWeight:wr("DBody.fontWeight"),lineHeight:wr("DBody.lineHeight"),letterSpacing:wr("DBody.letterSpacing")},H1:{fontFamily:wr("H1.fontFamily"),fontSize:wr("H1.fontSize"),fontWeight:wr("H1.fontWeight"),lineHeight:wr("H1.lineHeight"),letterSpacing:wr("H1.letterSpacing")},H2:{fontFamily:wr("H2.fontFamily"),fontSize:wr("H2.fontSize"),fontWeight:wr("H2.fontWeight"),lineHeight:wr("H2.lineHeight"),letterSpacing:wr("H2.letterSpacing")},H3:{fontFamily:wr("H3.fontFamily"),fontSize:wr("H3.fontSize"),fontWeight:wr("H3.fontWeight"),lineHeight:wr("H3.lineHeight"),letterSpacing:wr("H3.letterSpacing")},H4:{fontFamily:wr("H4.fontFamily"),fontSize:wr("H4.fontSize"),fontWeight:wr("H4.fontWeight"),lineHeight:wr("H4.lineHeight"),letterSpacing:wr("H4.letterSpacing")},H5:{fontFamily:wr("H5.fontFamily"),fontSize:wr("H5.fontSize"),fontWeight:wr("H5.fontWeight"),lineHeight:wr("H5.lineHeight"),letterSpacing:wr("H5.letterSpacing")},H6:{fontFamily:wr("H6.fontFamily"),fontSize:wr("H6.fontSize"),fontWeight:wr("H6.fontWeight"),lineHeight:wr("H6.lineHeight"),letterSpacing:wr("H6.letterSpacing")},Body:{fontFamily:wr("Body.fontFamily"),fontSize:wr("Body.fontSize"),fontWeight:wr("Body.fontWeight"),lineHeight:wr("Body.lineHeight"),letterSpacing:wr("Body.letterSpacing")},BodySmall:{fontFamily:wr("BodySmall.fontFamily"),fontSize:wr("BodySmall.fontSize"),fontWeight:wr("BodySmall.fontWeight"),lineHeight:wr("BodySmall.lineHeight"),letterSpacing:wr("BodySmall.letterSpacing")},XSmall:{fontFamily:wr("XSmall.fontFamily"),fontSize:wr("XSmall.fontSize"),fontWeight:wr("XSmall.fontWeight"),lineHeight:wr("XSmall.lineHeight"),letterSpacing:wr("XSmall.letterSpacing")}},$r=e=>{switch(e){case 700:case"bold":return Sr.Bold;case 600:case"semibold":return Sr.Semibold;case 300:case"light":return Sr.Light;case 400:case"regular":return Sr.Regular;default:return""}},Dr=(e,t)=>r=>{var i;const s=xr[e].fontFamily(r),o=xr[e].fontWeight(r);return Object.values(Sr).includes(s)?n`
                font-family: ${$r(t)||$r(o)||s};
                font-weight: normal !important;
            `:n`
            font-family: ${s};
            font-weight: ${null!==(i=kr(t)||o)&&void 0!==i?i:"normal"};
        `},kr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Er=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Hr=Dr,Ar=(e,t,r=!1)=>i=>{const s=xr[e],o=s.fontSize(i);return n`
            ${Dr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${s.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Tr=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Er(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Er(r)}
        `;var zr;!function(e){e.D1=i.h1`
        ${e=>n`
                ${Ar("D1",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>n`
                ${Ar("D2",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>n`
                ${Ar("D3",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>n`
                ${Ar("D4",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>n`
                ${Ar("DBody",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>n`
                ${Ar("H1",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>n`
                ${Ar("H2",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>n`
                ${Ar("H3",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>n`
                ${Ar("H4",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>n`
                ${Ar("H5",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>n`
                ${Ar("H6",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>n`
                ${Ar("Body",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>n`
                ${Ar("BodySmall",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>n`
                ${Ar("XSmall",e.weight,e.paragraph)}
                color: ${hr.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Or(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Or(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(zr||(zr={}));const Cr=i.a`
    ${e=>n`
            ${Ar(e.textStyle,e.weight)}
            color: ${hr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${hr.Secondary};

                svg {
                    color: ${hr.Secondary};
                }
            }
        `}
`,_r=i(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Or=t=>{var{external:i=!1,children:s}=t,n=l(t,["external","children"]);return e(Cr,Object.assign({},n,{children:[s,i&&r(_r,{})]}))};var Ir;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ir||(Ir={}));const Pr={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${hr.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${hr.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${hr.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${hr.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jr=e=>t=>{var r;const i=t.theme,s=lr(Pr,i[c.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?gr(s,e,i.options.designToken):gr(s,e)},Lr={InputBoxShadow:jr("InputBoxShadow"),InputErrorBoxShadow:jr("InputErrorBoxShadow"),ElevationBoxShadow:jr("ElevationBoxShadow"),Table:{Header:jr("Table.Header"),Cell:{Primary:jr("Table.Cell.Primary"),Secondary:jr("Table.Cell.Secondary"),Selected:jr("Table.Cell.Selected"),Hover:jr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jr("Button.Danger.BackgroundColor"),Hover:jr("Button.Danger.Hover"),Primary:jr("Button.Danger.Primary"),Border:jr("Button.Danger.Border")}}},Wr=i.button`
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
                    background-color: ${hr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Lr.Button.Danger.Border:hr.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Lr.Button.Danger.Primary:hr.Primary};
                    }
                `;case"light":return n`
                    background-color: ${hr.Neutral[8]};
                    border: 1px solid ${hr.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Lr.Button.Danger.Primary:hr.Primary};
                    }
                `;case"disabled":return n`
                    background-color: ${hr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${hr.Neutral[3]};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Lr.Button.Danger.Primary:hr.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Lr.Button.Danger.Hover:hr.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?Lr.Button.Danger.BackgroundColor:hr.Primary};
                    border: 1px solid transparent;

                    ${mr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${hr.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${Ar("H5","semibold")}
                    }

                    ${mr.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${Ar("H4","semibold")}
                    }

                    ${mr.mobileS} {
                        height: auto;
                    }
                `}
`,Nr=i((({color:t,className:i,size:s=18})=>e(ur,Object.assign({className:i,$size:s,$color:t},{children:[r(yr,{id:"inner1",$size:s-2,$borderWidth:2}),r(br,{id:"inner2",$size:s-2,$borderWidth:2}),r(vr,{id:"inner3",$size:s-2,$borderWidth:2}),r(Fr,{id:"inner4",$size:s-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Lr.Button.Danger.Primary:hr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=hr.Neutral[3](e);break;default:t=hr.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Rr={Default:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return e(Wr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(Nr,Object.assign({},d)),r("span",{children:s})]}))})),Small:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return e(Wr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(Nr,Object.assign({},d,{size:16})),r("span",{children:s})]}))}))},Vr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Yr=i.img`
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
`,Ur=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Xr=i(zr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Gr=i.div`
    ${Ar("Body","regular")} // Follow styling of Text.Body
    color: ${hr.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Hr("Body","semibold")}
    }

    a {
        ${Ar("Body","semibold")}
        color: ${hr.Primary};

        :hover,
        :active,
        :focus {
            color: ${hr.Secondary};
        }
    }
`,Mr=i(Rr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${mr.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Zr=t=>{var{type:i,img:s,title:n,description:a,actionButton:g,additionalProps:c,imageOnly:h,illustrationScheme:p}=t,m=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=o(),f=((e,t)=>"bookingsg"===t?K.get(e):J.get(e))(i,p||(u||d).resourceScheme),y=m["data-testid"]||"error-display",b=()=>{switch(i){case"maintenance":{const e=c;return c&&e.dateString?f.renderDescription(e):a||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?f.renderDescription(e):a||void 0}default:return a||void 0}};if(!f)return null;const v=Object.assign(Object.assign(Object.assign(Object.assign({},f),s&&{img:s}),n&&{title:n}),b()&&{description:b()});return e(Vr,Object.assign({},m,{"data-testid":y},{children:[r(Yr,Object.assign({},v.img,{alt:"","data-id":"error-display-image"})),!h&&(v.title||v.description?e(Ur,{children:[v.title&&("string"==typeof v.title?r(Xr,Object.assign({"data-testid":`${y}--title`,"data-id":"error-display-title",weight:"semibold"},{children:v.title})):v.title),v.description&&r(Gr,Object.assign({"data-testid":`${y}--description`,"data-id":"error-display-description"},{children:"string"==typeof v.description?r("p",{children:v.description}):v.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(Mr,Object.assign({},e))})()]}))};export{Zr as ErrorDisplay,m as ErrorDisplayHelper};
//# sourceMappingURL=index.js.map
