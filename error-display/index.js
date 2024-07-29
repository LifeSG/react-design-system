import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as s,css as n,useTheme as o}from"styled-components";import a from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r}var c;"function"==typeof SuppressedError&&SuppressedError,function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const h=i=>s=>{switch(i){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:s.dateString}),"."]});case"inactivity":{const i=s,n=Math.floor(i.secondsLeft/60),o=i.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},m={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var p;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:i,width:s,height:n}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${m.mobileL}px) 400px, (max-width: ${m.tablet}px) 800px, 1200px`,width:s,height:n}}}(p||(p={}));const{imgAttributeHelper:u}=p,f={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},y={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},F=Object.assign(Object.assign({},f),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),b=e=>new Map([["400",{img:u(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:u(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:u(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:u(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:u(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:u(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:u(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:u(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:u(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:u(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:u(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:u(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:u(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:h("inactivity")}],["maintenance",{img:u(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:h("maintenance")}],["no-item-found",{img:u(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:u(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:u(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:u(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:u(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:u(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]);var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S=Array.isArray,x="object"==typeof v&&v&&v.Object===Object&&v,w="object"==typeof self&&self&&self.Object===Object&&self,D=x||w||Function("return this")(),$=D.Symbol,E=$,H=Object.prototype,k=H.hasOwnProperty,A=H.toString,C=E?E.toStringTag:void 0;var z=function(e){var t=k.call(e,C),r=e[C];try{e[C]=void 0;var i=!0}catch(e){}var s=A.call(e);return i&&(t?e[C]=r:delete e[C]),s},T=Object.prototype.toString;var O=z,_=function(e){return T.call(e)},I=$?$.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?O(e):_(e)};var P=j,W=function(e){return null!=e&&"object"==typeof e};var L=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==P(e)},N=S,R=L,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,t){if(N(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!R(e))||(G.test(e)||!V.test(e)||null!=t&&e in Object(t))};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U=j,M=Y;var Z,q=function(e){if(!M(e))return!1;var t=U(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=D["__core-js_shared__"],K=(Z=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"";var Q=function(e){return!!K&&K in e},ee=Function.prototype.toString;var te=q,re=Q,ie=Y,se=function(e){if(null!=e){try{return ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ne=/^\[object .+?Constructor\]$/,oe=Function.prototype,ae=Object.prototype,ge=oe.toString,le=ae.hasOwnProperty,ce=RegExp("^"+ge.call(le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var de=function(e){return!(!ie(e)||re(e))&&(te(e)?ce:ne).test(se(e))},he=function(e,t){return null==e?void 0:e[t]};var me=function(e,t){var r=he(e,t);return de(r)?r:void 0},pe=me(Object,"create"),ue=pe;var fe=function(){this.__data__=ue?ue(null):{},this.size=0};var ye=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fe=pe,be=Object.prototype.hasOwnProperty;var ve=function(e){var t=this.__data__;if(Fe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return be.call(t,e)?t[e]:void 0},Be=pe,Se=Object.prototype.hasOwnProperty;var xe=pe;var we=fe,De=ye,$e=ve,Ee=function(e){var t=this.__data__;return Be?void 0!==t[e]:Se.call(t,e)},He=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=xe&&void 0===t?"__lodash_hash_undefined__":t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ke.prototype.clear=we,ke.prototype.delete=De,ke.prototype.get=$e,ke.prototype.has=Ee,ke.prototype.set=He;var Ae=ke;var Ce=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t};var Te=function(e,t){for(var r=e.length;r--;)if(ze(e[r][0],t))return r;return-1},Oe=Te,_e=Array.prototype.splice;var Ie=Te;var je=Te;var Pe=Te;var We=Ce,Le=function(e){var t=this.__data__,r=Oe(t,e);return!(r<0)&&(r==t.length-1?t.pop():_e.call(t,r,1),--this.size,!0)},Ne=function(e){var t=this.__data__,r=Ie(t,e);return r<0?void 0:t[r][1]},Re=function(e){return je(this.__data__,e)>-1},Ve=function(e,t){var r=this.__data__,i=Pe(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Ge(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ge.prototype.clear=We,Ge.prototype.delete=Le,Ge.prototype.get=Ne,Ge.prototype.has=Re,Ge.prototype.set=Ve;var Xe=Ge,Ye=me(D,"Map"),Ue=Ae,Me=Xe,Ze=Ye;var qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var r=e.__data__;return qe(t)?r["string"==typeof t?"string":"hash"]:r.map},Ke=Je;var Qe=Je;var et=Je;var tt=Je;var rt=function(){this.size=0,this.__data__={hash:new Ue,map:new(Ze||Me),string:new Ue}},it=function(e){var t=Ke(this,e).delete(e);return this.size-=t?1:0,t},st=function(e){return Qe(this,e).get(e)},nt=function(e){return et(this,e).has(e)},ot=function(e,t){var r=tt(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}at.prototype.clear=rt,at.prototype.delete=it,at.prototype.get=st,at.prototype.has=nt,at.prototype.set=ot;var gt=at;function lt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,s=t?t.apply(this,i):i[0],n=r.cache;if(n.has(s))return n.get(s);var o=e.apply(this,i);return r.cache=n.set(s,o)||n,o};return r.cache=new(lt.Cache||gt),r}lt.Cache=gt;var ct=lt;var dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,mt=function(e){var t=ct(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(dt,(function(e,r,i,s){t.push(i?s.replace(ht,"$1"):r||e)})),t}));var pt=function(e,t){for(var r=-1,i=null==e?0:e.length,s=Array(i);++r<i;)s[r]=t(e[r],r,e);return s},ut=S,ft=L,yt=$?$.prototype:void 0,Ft=yt?yt.toString:void 0;var bt=function e(t){if("string"==typeof t)return t;if(ut(t))return pt(t,e)+"";if(ft(t))return Ft?Ft.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},vt=bt;var Bt=S,St=X,xt=mt,wt=function(e){return null==e?"":vt(e)};var Dt=L;var $t=function(e,t){return Bt(e)?e:St(e,t)?[e]:xt(wt(e))},Et=function(e){if("string"==typeof e||Dt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ht=function(e,t){for(var r=0,i=(t=$t(t,e)).length;null!=e&&r<i;)e=e[Et(t[r++])];return r&&r==i?e:void 0};var kt=B((function(e,t,r){var i=null==e?void 0:Ht(e,t);return void 0===i?r:i}));const At=(e,t,r)=>t?kt(r,t)||kt(e,t):r||e,Ct=(e,t)=>{const r=t||e.defaultValue;return kt(e.collections,r)},zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,i=Ct(zt,r[c.colorScheme]);return r.options&&r.options.color?At(i,e,r.options.color):At(i,e)},Ot={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}},_t=e=>Object.keys(m).reduce(((t,r)=>{const i=m[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),It=_t("max-width"),jt=(_t("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Pt=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Wt=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ot.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Pt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Lt=i(Wt)`
    animation-delay: -0.45s;
`,Nt=i(Wt)`
    animation-delay: -0.3s;
`,Rt=i(Wt)`
    animation-delay: -0.15s;
`,Vt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Gt={collections:{base:{D1:{fontFamily:Vt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Vt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Vt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Vt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Vt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Vt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Vt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Vt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Vt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Vt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Vt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Vt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Vt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Vt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Vt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Vt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Vt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Vt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Vt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Vt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Vt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Xt=e=>t=>{const r=t.theme,i=Ct(Gt,r[c.textStyleScheme]);return r.options&&r.options.textStyle?At(i,e,r.options.textStyle):At(i,e)},Yt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Ut=e=>{switch(e){case 700:case"bold":return Vt.Bold;case 600:case"semibold":return Vt.Semibold;case 300:case"light":return Vt.Light;case 400:case"regular":return Vt.Regular;default:return""}},Mt=(e,t)=>r=>{var i;const s=Yt[e].fontFamily(r),o=Yt[e].fontWeight(r);return Object.values(Vt).includes(s)?n`
                font-family: ${Ut(t)||Ut(o)||s};
                font-weight: normal !important;
            `:n`
            font-family: ${s};
            font-weight: ${null!==(i=Zt(t)||o)&&void 0!==i?i:"normal"};
        `},Zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},qt=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jt=Mt,Kt=(e,t,r=!1)=>i=>{const s=Yt[e],o=s.fontSize(i);return n`
            ${Mt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${s.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Qt=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${qt(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${qt(r)}
        `;var er;!function(e){e.D1=i.h1`
        ${e=>n`
                ${Kt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>n`
                ${Kt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>n`
                ${Kt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>n`
                ${Kt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>n`
                ${Kt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>n`
                ${Kt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>n`
                ${Kt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>n`
                ${Kt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>n`
                ${Kt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>n`
                ${Kt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>n`
                ${Kt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>n`
                ${Kt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>n`
                ${Kt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>n`
                ${Kt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>ir(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ir(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(er||(er={}));const tr=i.a`
    ${e=>n`
            ${Kt(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,rr=i(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ir=t=>{var{external:i=!1,children:s}=t,n=l(t,["external","children"]);return e(tr,Object.assign({},n,{children:[s,i&&r(rr,{})]}))};var sr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(sr||(sr={}));const nr={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},or=e=>t=>{var r;const i=t.theme,s=Ct(nr,i[c.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?At(s,e,i.options.designToken):At(s,e)},ar={InputBoxShadow:or("InputBoxShadow"),InputErrorBoxShadow:or("InputErrorBoxShadow"),ElevationBoxShadow:or("ElevationBoxShadow"),Table:{Header:or("Table.Header"),Cell:{Primary:or("Table.Cell.Primary"),Secondary:or("Table.Cell.Secondary"),Selected:or("Table.Cell.Selected"),Hover:or("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:or("Button.Danger.BackgroundColor"),Hover:or("Button.Danger.Hover"),Primary:or("Button.Danger.Primary"),Border:or("Button.Danger.Border")}}},gr=i.button`
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
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ar.Button.Danger.Border:Ot.Primary};

                    color: ${e.$buttonIsDanger?ar.Button.Danger.Primary:Ot.Primary};
                `;case"light":return n`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid ${Ot.Neutral[5]};

                    color: ${e.$buttonIsDanger?ar.Button.Danger.Primary:Ot.Primary};
                `;case"disabled":return n`
                    background-color: ${Ot.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ot.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ar.Button.Danger.Primary:Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ar.Button.Danger.Hover:Ot.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?ar.Button.Danger.BackgroundColor:Ot.Primary};
                    border: 1px solid transparent;

                    ${It.mobileL} {
                        width: 100%;
                    }

                    color: ${Ot.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${Kt("H5","semibold")}

                    ${It.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${Kt("H4","semibold")}

                    ${It.mobileS} {
                        height: auto;
                    }
                `}
`,lr=i((({color:t,className:i,size:s=18})=>e(jt,Object.assign({className:i,$size:s,$color:t},{children:[r(Wt,{id:"inner1",$size:s-2,$borderWidth:2,$color:t}),r(Lt,{id:"inner2",$size:s-2,$borderWidth:2,$color:t}),r(Nt,{id:"inner3",$size:s-2,$borderWidth:2,$color:t}),r(Rt,{id:"inner4",$size:s-2,$borderWidth:2,$color:t})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ar.Button.Danger.Primary:Ot.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cr={Default:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return e(gr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(lr,Object.assign({},d)),r("span",{children:s})]}))})),Small:a.forwardRef(((t,i)=>{const{children:s,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return e(gr,Object.assign({ref:i,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(lr,Object.assign({},d,{size:16})),r("span",{children:s})]}))}))},dr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,hr=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${It.mobileL} {
        width: 20rem;
    }

    ${It.mobileM} {
        width: 18rem;
    }

    ${It.mobileS} {
        width: 15rem;
    }
`,mr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,pr=i(er.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,ur=i.div`
    ${Kt("Body","regular")} // Follow styling of Text.Body
    color: ${Ot.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Jt("Body","semibold")}
    }

    a {
        ${Kt("Body","semibold")}
        color: ${Ot.Primary};

        :hover,
        :active,
        :focus {
            color: ${Ot.Secondary};
        }
    }
`,fr=i(cr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${It.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,yr=t=>{var{type:i,img:s,title:n,description:a,actionButton:g,additionalProps:c,imageOnly:h,illustrationScheme:m}=t,p=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=o(),v=((e,t)=>{switch(t){case"bookingsg":return b(y).get(e);case"ccube":return b(F).get(e);default:return b(f).get(e)}})(i,m||(u||d).resourceScheme),B=p["data-testid"]||"error-display",S=()=>{switch(i){case"maintenance":{const e=c;return c&&e.dateString?v.renderDescription(e):a||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?v.renderDescription(e):a||void 0}default:return a||void 0}};if(!v)return null;const x=Object.assign(Object.assign(Object.assign(Object.assign({},v),s&&{img:s}),n&&{title:n}),S()&&{description:S()});return e(dr,Object.assign({},p,{"data-testid":B},{children:[r(hr,Object.assign({},x.img,{alt:"","data-id":"error-display-image"})),!h&&(x.title||x.description?e(mr,{children:[x.title&&("string"==typeof x.title?r(pr,Object.assign({"data-testid":`${B}--title`,"data-id":"error-display-title",weight:"semibold"},{children:x.title})):x.title),x.description&&r(ur,Object.assign({"data-testid":`${B}--description`,"data-id":"error-display-description"},{children:"string"==typeof x.description?r("p",{children:x.description}):x.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(fr,Object.assign({},e))})()]}))};export{yr as ErrorDisplay,p as ErrorDisplayHelper};
//# sourceMappingURL=index.js.map
