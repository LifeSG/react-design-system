import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as s,css as n,useTheme as o}from"styled-components";import a from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r}var c;"function"==typeof SuppressedError&&SuppressedError,function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const h=i=>s=>{switch(i){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:s.dateString}),"."]});case"inactivity":{const i=s,n=Math.floor(i.secondsLeft/60),o=i.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},p={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var m;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:i,width:s,height:n}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${p.mobileL}px) 400px, (max-width: ${p.tablet}px) 800px, 1200px`,width:s,height:n}}}(m||(m={}));const{imgAttributeHelper:u}=m,f={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},y={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},b={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},v={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},F={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},S={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},B={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},w={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},x={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},$={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},D={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},E={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},k={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},H={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},A={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},T={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},z={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280},_={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},O={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},C={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},I={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},P={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},j={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},L={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},W={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},N={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},R={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},V={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},Y={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},U={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},X={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},G={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},M={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},Z={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},q={base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280},J=new Map([["400",{img:u({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280}),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:u(f),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:u(y),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:u(b),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:u(v),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:u(F),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:u(S),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:u(B),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:u(w),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:u(D),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:u(E),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:u(x),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:u($),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:h("inactivity")}],["maintenance",{img:u(S),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:h("maintenance")}],["no-item-found",{img:u(k),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:u(H),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:u(A),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:u(T),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:u(T),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:u(z),title:"Are you sure?",description:"You will lose your progress."}]]),K=new Map([["400",{img:u(_),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:u(O),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:u(C),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:u(I),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:u(P),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:u(j),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:u(L),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:u(W),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:u(N),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:u(Y),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:u(U),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:u(R),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:u(V),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:h("inactivity")}],["maintenance",{img:u(L),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:h("maintenance")}],["no-item-found",{img:u(X),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:u(G),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:u(M),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:u(Z),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:u(Z),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:u(q),title:"Are you sure?",description:"You will lose your progress."}]]);var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te=Array.isArray,re="object"==typeof Q&&Q&&Q.Object===Object&&Q,ie="object"==typeof self&&self&&self.Object===Object&&self,se=re||ie||Function("return this")(),ne=se.Symbol,oe=ne,ae=Object.prototype,ge=ae.hasOwnProperty,le=ae.toString,ce=oe?oe.toStringTag:void 0;var de=function(e){var t=ge.call(e,ce),r=e[ce];try{e[ce]=void 0;var i=!0}catch(e){}var s=le.call(e);return i&&(t?e[ce]=r:delete e[ce]),s},he=Object.prototype.toString;var pe=de,me=function(e){return he.call(e)},ue=ne?ne.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ue&&ue in Object(e)?pe(e):me(e)};var ye=fe,be=function(e){return null!=e&&"object"==typeof e};var ve=function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==ye(e)},Fe=te,Se=ve,Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,we=/^\w*$/;var xe=function(e,t){if(Fe(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Se(e))||(we.test(e)||!Be.test(e)||null!=t&&e in Object(t))};var $e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},De=fe,Ee=$e;var ke,He=function(e){if(!Ee(e))return!1;var t=De(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ae=se["__core-js_shared__"],Te=(ke=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||""))?"Symbol(src)_1."+ke:"";var ze=function(e){return!!Te&&Te in e},_e=Function.prototype.toString;var Oe=He,Ce=ze,Ie=$e,Pe=function(e){if(null!=e){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""},je=/^\[object .+?Constructor\]$/,Le=Function.prototype,We=Object.prototype,Ne=Le.toString,Re=We.hasOwnProperty,Ve=RegExp("^"+Ne.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!Ie(e)||Ce(e))&&(Oe(e)?Ve:je).test(Pe(e))},Ue=function(e,t){return null==e?void 0:e[t]};var Xe=function(e,t){var r=Ue(e,t);return Ye(r)?r:void 0},Ge=Xe(Object,"create"),Me=Ge;var Ze=function(){this.__data__=Me?Me(null):{},this.size=0};var qe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Je=Ge,Ke=Object.prototype.hasOwnProperty;var Qe=function(e){var t=this.__data__;if(Je){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ke.call(t,e)?t[e]:void 0},et=Ge,tt=Object.prototype.hasOwnProperty;var rt=Ge;var it=Ze,st=qe,nt=Qe,ot=function(e){var t=this.__data__;return et?void 0!==t[e]:tt.call(t,e)},at=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=rt&&void 0===t?"__lodash_hash_undefined__":t,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}gt.prototype.clear=it,gt.prototype.delete=st,gt.prototype.get=nt,gt.prototype.has=ot,gt.prototype.set=at;var lt=gt;var ct=function(){this.__data__=[],this.size=0};var dt=function(e,t){return e===t||e!=e&&t!=t};var ht=function(e,t){for(var r=e.length;r--;)if(dt(e[r][0],t))return r;return-1},pt=ht,mt=Array.prototype.splice;var ut=ht;var ft=ht;var yt=ht;var bt=ct,vt=function(e){var t=this.__data__,r=pt(t,e);return!(r<0)&&(r==t.length-1?t.pop():mt.call(t,r,1),--this.size,!0)},Ft=function(e){var t=this.__data__,r=ut(t,e);return r<0?void 0:t[r][1]},St=function(e){return ft(this.__data__,e)>-1},Bt=function(e,t){var r=this.__data__,i=yt(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}wt.prototype.clear=bt,wt.prototype.delete=vt,wt.prototype.get=Ft,wt.prototype.has=St,wt.prototype.set=Bt;var xt=wt,$t=Xe(se,"Map"),Dt=lt,Et=xt,kt=$t;var Ht=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var At=function(e,t){var r=e.__data__;return Ht(t)?r["string"==typeof t?"string":"hash"]:r.map},Tt=At;var zt=At;var _t=At;var Ot=At;var Ct=function(){this.size=0,this.__data__={hash:new Dt,map:new(kt||Et),string:new Dt}},It=function(e){var t=Tt(this,e).delete(e);return this.size-=t?1:0,t},Pt=function(e){return zt(this,e).get(e)},jt=function(e){return _t(this,e).has(e)},Lt=function(e,t){var r=Ot(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function Wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Wt.prototype.clear=Ct,Wt.prototype.delete=It,Wt.prototype.get=Pt,Wt.prototype.has=jt,Wt.prototype.set=Lt;var Nt=Wt;function Rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],n=r.cache;if(n.has(s))return n.get(s);var o=e.apply(this,i);return r.cache=n.set(s,o)||n,o};return r.cache=new(Rt.Cache||Nt),r}Rt.Cache=Nt;var Vt=Rt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ut=/\\(\\)?/g,Xt=function(e){var t=Vt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yt,(function(e,r,i,s){t.push(i?s.replace(Ut,"$1"):r||e)})),t}));var Gt=function(e,t){for(var r=-1,i=null==e?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s},Mt=te,Zt=ve,qt=ne?ne.prototype:void 0,Jt=qt?qt.toString:void 0;var Kt=function e(t){if("string"==typeof t)return t;if(Mt(t))return Gt(t,e)+"";if(Zt(t))return Jt?Jt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Qt=Kt;var er=te,tr=xe,rr=Xt,ir=function(e){return null==e?"":Qt(e)};var sr=ve;var nr=function(e,t){return er(e)?e:tr(e,t)?[e]:rr(ir(e))},or=function(e){if("string"==typeof e||sr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ar=function(e,t){for(var r=0,i=(t=nr(t,e)).length;null!=e&&r<i;)e=e[or(t[r++])];return r&&r==i?e:void 0};var gr=ee((function(e,t,r){var i=null==e?void 0:ar(e,t);return void 0===i?r:i}));const lr=(e,t,r)=>t?gr(r,t)||gr(e,t):r||e,cr=(e,t)=>{const r=t||e.defaultValue;return gr(e.collections,r)},dr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},hr=e=>t=>{const r=t.theme,i=cr(dr,r[c.colorScheme]);return r.options&&r.options.color?lr(i,e,r.options.color):lr(i,e)},pr={Brand:{1:hr("Brand.1"),2:hr("Brand.2"),3:hr("Brand.3"),4:hr("Brand.4"),5:hr("Brand.5"),6:hr("Brand.6")},Primary:hr("Primary"),PrimaryDark:hr("PrimaryDark"),Secondary:hr("Secondary"),Accent:{Light:{1:hr("Accent.Light.1"),2:hr("Accent.Light.2"),3:hr("Accent.Light.3"),4:hr("Accent.Light.4"),5:hr("Accent.Light.5"),6:hr("Accent.Light.6")},Dark:{1:hr("Accent.Dark.1"),2:hr("Accent.Dark.2"),3:hr("Accent.Dark.3")}},Neutral:{1:hr("Neutral.1"),2:hr("Neutral.2"),3:hr("Neutral.3"),4:hr("Neutral.4"),5:hr("Neutral.5"),6:hr("Neutral.6"),7:hr("Neutral.7"),8:hr("Neutral.8")},Validation:{Green:{Text:hr("Validation.Green.Text"),Icon:hr("Validation.Green.Icon"),Border:hr("Validation.Green.Border"),Background:hr("Validation.Green.Background")},Orange:{Text:hr("Validation.Orange.Text"),Icon:hr("Validation.Orange.Icon"),Border:hr("Validation.Orange.Border"),Background:hr("Validation.Orange.Background"),Badge:hr("Validation.Orange.Badge")},Red:{Text:hr("Validation.Red.Text"),Icon:hr("Validation.Red.Icon"),Border:hr("Validation.Red.Border"),Background:hr("Validation.Red.Background")},Blue:{Text:hr("Validation.Blue.Text"),Icon:hr("Validation.Blue.Icon"),Border:hr("Validation.Blue.Border"),Background:hr("Validation.Blue.Background")}},Shadow:{Accent:hr("Shadow.Accent"),Red:hr("Shadow.Red"),Elevation:hr("Shadow.Elevation")}},mr=e=>Object.keys(p).reduce(((t,r)=>{const i=p[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),ur=mr("max-width"),fr=(mr("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),yr=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,br=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||pr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${yr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vr=i(br)`
    animation-delay: -0.45s;
`,Fr=i(br)`
    animation-delay: -0.3s;
`,Sr=i(br)`
    animation-delay: -0.15s;
`,Br={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},wr={collections:{base:{D1:{fontFamily:Br.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Br.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Br.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Br.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Br.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Br.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Br.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Br.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Br.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Br.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Br.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Br.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Br.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Br.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xr=e=>t=>{const r=t.theme,i=cr(wr,r[c.textStyleScheme]);return r.options&&r.options.textStyle?lr(i,e,r.options.textStyle):lr(i,e)},$r={D1:{fontFamily:xr("D1.fontFamily"),fontSize:xr("D1.fontSize"),fontWeight:xr("D1.fontWeight"),lineHeight:xr("D1.lineHeight"),letterSpacing:xr("D1.letterSpacing")},D2:{fontFamily:xr("D2.fontFamily"),fontSize:xr("D2.fontSize"),fontWeight:xr("D2.fontWeight"),lineHeight:xr("D2.lineHeight"),letterSpacing:xr("D2.letterSpacing")},D3:{fontFamily:xr("D3.fontFamily"),fontSize:xr("D3.fontSize"),fontWeight:xr("D3.fontWeight"),lineHeight:xr("D3.lineHeight"),letterSpacing:xr("D3.letterSpacing")},D4:{fontFamily:xr("D4.fontFamily"),fontSize:xr("D4.fontSize"),fontWeight:xr("D4.fontWeight"),lineHeight:xr("D4.lineHeight"),letterSpacing:xr("D4.letterSpacing")},DBody:{fontFamily:xr("DBody.fontFamily"),fontSize:xr("DBody.fontSize"),fontWeight:xr("DBody.fontWeight"),lineHeight:xr("DBody.lineHeight"),letterSpacing:xr("DBody.letterSpacing")},H1:{fontFamily:xr("H1.fontFamily"),fontSize:xr("H1.fontSize"),fontWeight:xr("H1.fontWeight"),lineHeight:xr("H1.lineHeight"),letterSpacing:xr("H1.letterSpacing")},H2:{fontFamily:xr("H2.fontFamily"),fontSize:xr("H2.fontSize"),fontWeight:xr("H2.fontWeight"),lineHeight:xr("H2.lineHeight"),letterSpacing:xr("H2.letterSpacing")},H3:{fontFamily:xr("H3.fontFamily"),fontSize:xr("H3.fontSize"),fontWeight:xr("H3.fontWeight"),lineHeight:xr("H3.lineHeight"),letterSpacing:xr("H3.letterSpacing")},H4:{fontFamily:xr("H4.fontFamily"),fontSize:xr("H4.fontSize"),fontWeight:xr("H4.fontWeight"),lineHeight:xr("H4.lineHeight"),letterSpacing:xr("H4.letterSpacing")},H5:{fontFamily:xr("H5.fontFamily"),fontSize:xr("H5.fontSize"),fontWeight:xr("H5.fontWeight"),lineHeight:xr("H5.lineHeight"),letterSpacing:xr("H5.letterSpacing")},H6:{fontFamily:xr("H6.fontFamily"),fontSize:xr("H6.fontSize"),fontWeight:xr("H6.fontWeight"),lineHeight:xr("H6.lineHeight"),letterSpacing:xr("H6.letterSpacing")},Body:{fontFamily:xr("Body.fontFamily"),fontSize:xr("Body.fontSize"),fontWeight:xr("Body.fontWeight"),lineHeight:xr("Body.lineHeight"),letterSpacing:xr("Body.letterSpacing")},BodySmall:{fontFamily:xr("BodySmall.fontFamily"),fontSize:xr("BodySmall.fontSize"),fontWeight:xr("BodySmall.fontWeight"),lineHeight:xr("BodySmall.lineHeight"),letterSpacing:xr("BodySmall.letterSpacing")},XSmall:{fontFamily:xr("XSmall.fontFamily"),fontSize:xr("XSmall.fontSize"),fontWeight:xr("XSmall.fontWeight"),lineHeight:xr("XSmall.lineHeight"),letterSpacing:xr("XSmall.letterSpacing")}},Dr=e=>{switch(e){case 700:case"bold":return Br.Bold;case 600:case"semibold":return Br.Semibold;case 300:case"light":return Br.Light;case 400:case"regular":return Br.Regular;default:return""}},Er=(e,t)=>r=>{var i;const s=$r[e].fontFamily(r),o=$r[e].fontWeight(r);return Object.values(Br).includes(s)?n`
                font-family: ${Dr(t)||Dr(o)||s};
                font-weight: normal !important;
            `:n`
            font-family: ${s};
            font-weight: ${null!==(i=kr(t)||o)&&void 0!==i?i:"normal"};
        `},kr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Hr=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ar=Er,Tr=(e,t,r=!1)=>i=>{const s=$r[e],o=s.fontSize(i);return n`
            ${Er(e,t)}
            font-size: ${o}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${s.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},zr=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Hr(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Hr(r)}
        `;var _r;!function(e){e.D1=i.h1`
        ${e=>n`
                ${Tr("D1",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>n`
                ${Tr("D2",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>n`
                ${Tr("D3",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>n`
                ${Tr("D4",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>n`
                ${Tr("DBody",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>n`
                ${Tr("H1",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>n`
                ${Tr("H2",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>n`
                ${Tr("H3",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>n`
                ${Tr("H4",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>n`
                ${Tr("H5",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>n`
                ${Tr("H6",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>n`
                ${Tr("Body",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>n`
                ${Tr("BodySmall",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>n`
                ${Tr("XSmall",e.weight,e.paragraph)}
                color: ${pr.Neutral[1]};
                ${zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(_r||(_r={}));const Or=i.a`
    ${e=>n`
            ${Tr(e.textStyle,e.weight)}
            color: ${pr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${pr.Secondary};

                svg {
                    color: ${pr.Secondary};
                }
            }
        `}
`,Cr=i(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ir=t=>{var{external:i=!1,children:s}=t,n=l(t,["external","children"]);return e(Or,Object.assign({},n,{children:[s,i&&r(Cr,{})]}))};var Pr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pr||(Pr={}));const jr={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${pr.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${pr.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${pr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${pr.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${pr.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${pr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Lr=e=>t=>{var r;const i=t.theme,s=cr(jr,i[c.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?lr(s,e,i.options.designToken):lr(s,e)},Wr={InputBoxShadow:Lr("InputBoxShadow"),InputErrorBoxShadow:Lr("InputErrorBoxShadow"),ElevationBoxShadow:Lr("ElevationBoxShadow"),Table:{Header:Lr("Table.Header"),Cell:{Primary:Lr("Table.Cell.Primary"),Secondary:Lr("Table.Cell.Secondary"),Selected:Lr("Table.Cell.Selected"),Hover:Lr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Lr("Button.Danger.BackgroundColor"),Hover:Lr("Button.Danger.Hover"),Primary:Lr("Button.Danger.Primary"),Border:Lr("Button.Danger.Border")}}},Nr=i.button`
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
                    background-color: ${pr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Wr.Button.Danger.Border:pr.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Wr.Button.Danger.Primary:pr.Primary};
                    }
                `;case"light":return n`
                    background-color: ${pr.Neutral[8]};
                    border: 1px solid ${pr.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Wr.Button.Danger.Primary:pr.Primary};
                    }
                `;case"disabled":return n`
                    background-color: ${pr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${pr.Neutral[3]};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Wr.Button.Danger.Primary:pr.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Wr.Button.Danger.Hover:pr.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?Wr.Button.Danger.BackgroundColor:pr.Primary};
                    border: 1px solid transparent;

                    ${ur.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${pr.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${Tr("H5","semibold")}
                    }

                    ${ur.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${Tr("H4","semibold")}
                    }

                    ${ur.mobileS} {
                        height: auto;
                    }
                `}
`,Rr=i((({color:t,className:i,size:s=18})=>e(fr,Object.assign({className:i,$size:s,$color:t},{children:[r(br,{id:"inner1",$size:s-2,$borderWidth:2}),r(vr,{id:"inner2",$size:s-2,$borderWidth:2}),r(Fr,{id:"inner3",$size:s-2,$borderWidth:2}),r(Sr,{id:"inner4",$size:s-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Wr.Button.Danger.Primary:pr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=pr.Neutral[3](e);break;default:t=pr.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Vr={Default:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return e(Nr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(Rr,Object.assign({},d)),r("span",{children:s})]}))})),Small:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return e(Nr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(Rr,Object.assign({},d,{size:16})),r("span",{children:s})]}))}))},Yr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Ur=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${ur.mobileL} {
        width: 20rem;
    }

    ${ur.mobileM} {
        width: 18rem;
    }

    ${ur.mobileS} {
        width: 15rem;
    }
`,Xr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Gr=i(_r.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Mr=i.div`
    ${Tr("Body","regular")} // Follow styling of Text.Body
    color: ${pr.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Ar("Body","semibold")}
    }

    a {
        ${Tr("Body","semibold")}
        color: ${pr.Primary};

        :hover,
        :active,
        :focus {
            color: ${pr.Secondary};
        }
    }
`,Zr=i(Vr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${ur.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,qr=t=>{var{type:i,img:s,title:n,description:a,actionButton:g,additionalProps:c,imageOnly:h,illustrationScheme:p}=t,m=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=o(),f=((e,t)=>"bookingsg"===t?K.get(e):J.get(e))(i,p||(u||d).resourceScheme),y=m["data-testid"]||"error-display",b=()=>{switch(i){case"maintenance":{const e=c;return c&&e.dateString?f.renderDescription(e):a||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?f.renderDescription(e):a||void 0}default:return a||void 0}};if(!f)return null;const v=Object.assign(Object.assign(Object.assign(Object.assign({},f),s&&{img:s}),n&&{title:n}),b()&&{description:b()});return e(Yr,Object.assign({},m,{"data-testid":y},{children:[r(Ur,Object.assign({},v.img,{alt:"","data-id":"error-display-image"})),!h&&(v.title||v.description?e(Xr,{children:[v.title&&("string"==typeof v.title?r(Gr,Object.assign({"data-testid":`${y}--title`,"data-id":"error-display-title",weight:"semibold"},{children:v.title})):v.title),v.description&&r(Mr,Object.assign({"data-testid":`${y}--description`,"data-id":"error-display-description"},{children:"string"==typeof v.description?r("p",{children:v.description}):v.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(Zr,Object.assign({},e))})()]}))};export{qr as ErrorDisplay,m as ErrorDisplayHelper};
//# sourceMappingURL=index.js.map
