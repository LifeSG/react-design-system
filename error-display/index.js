import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import s,{keyframes as i,css as n,useTheme as o}from"styled-components";import a from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(r[s[i]]=e[s[i]])}return r}var c;"function"==typeof SuppressedError&&SuppressedError,function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const m=s=>i=>{switch(s){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]});case"inactivity":{const s=i,n=Math.floor(s.secondsLeft/60),o=s.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var p;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:s,width:i,height:n}=e;return{srcSet:`${t} 400w, ${r} 800w, ${s} 1200w`,src:s,sizes:`(max-width: ${h.mobileL}px) 400px, (max-width: ${h.tablet}px) 800px, 1200px`,width:i,height:n}}}(p||(p={}));const{imgAttributeHelper:f}=p,u={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},y={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},v=Object.assign(Object.assign({},u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),b=Object.assign(Object.assign({},u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),F=e=>new Map([["400",{img:f(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:f(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:f(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:f(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:f(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:f(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:f(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:f(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:f(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:f(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:f(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:f(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:f(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:m("inactivity")}],["maintenance",{img:f(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:m("maintenance")}],["no-item-found",{img:f(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:f(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:f(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:f(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:f(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:f(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]);var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x=Array.isArray,w="object"==typeof B&&B&&B.Object===Object&&B,D="object"==typeof self&&self&&self.Object===Object&&self,$=w||D||Function("return this")(),E=$.Symbol,H=E,k=Object.prototype,A=k.hasOwnProperty,C=k.toString,z=H?H.toStringTag:void 0;var T=function(e){var t=A.call(e,z),r=e[z];try{e[z]=void 0;var s=!0}catch(e){}var i=C.call(e);return s&&(t?e[z]=r:delete e[z]),i},O=Object.prototype.toString;var _=T,I=function(e){return O.call(e)},j=E?E.toStringTag:void 0;var P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?_(e):I(e)};var W=P,L=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||L(e)&&"[object Symbol]"==W(e)},R=x,V=N,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/;var Y=function(e,t){if(R(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!V(e))||(X.test(e)||!G.test(e)||null!=t&&e in Object(t))};var U=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=P,Z=U;var q,J=function(e){if(!Z(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=$["__core-js_shared__"],Q=(q=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var ee=function(e){return!!Q&&Q in e},te=Function.prototype.toString;var re=J,se=ee,ie=U,ne=function(e){if(null!=e){try{return te.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=/^\[object .+?Constructor\]$/,ae=Function.prototype,ge=Object.prototype,le=ae.toString,ce=ge.hasOwnProperty,de=RegExp("^"+le.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var me=function(e){return!(!ie(e)||se(e))&&(re(e)?de:oe).test(ne(e))},he=function(e,t){return null==e?void 0:e[t]};var pe=function(e,t){var r=he(e,t);return me(r)?r:void 0},fe=pe(Object,"create"),ue=fe;var ye=function(){this.__data__=ue?ue(null):{},this.size=0};var ve=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},be=fe,Fe=Object.prototype.hasOwnProperty;var Be=function(e){var t=this.__data__;if(be){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Fe.call(t,e)?t[e]:void 0},Se=fe,xe=Object.prototype.hasOwnProperty;var we=fe;var De=ye,$e=ve,Ee=Be,He=function(e){var t=this.__data__;return Se?void 0!==t[e]:xe.call(t,e)},ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=we&&void 0===t?"__lodash_hash_undefined__":t,this};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ae.prototype.clear=De,Ae.prototype.delete=$e,Ae.prototype.get=Ee,Ae.prototype.has=He,Ae.prototype.set=ke;var Ce=Ae;var ze=function(){this.__data__=[],this.size=0};var Te=function(e,t){return e===t||e!=e&&t!=t};var Oe=function(e,t){for(var r=e.length;r--;)if(Te(e[r][0],t))return r;return-1},_e=Oe,Ie=Array.prototype.splice;var je=Oe;var Pe=Oe;var We=Oe;var Le=ze,Ne=function(e){var t=this.__data__,r=_e(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ie.call(t,r,1),--this.size,!0)},Re=function(e){var t=this.__data__,r=je(t,e);return r<0?void 0:t[r][1]},Ve=function(e){return Pe(this.__data__,e)>-1},Ge=function(e,t){var r=this.__data__,s=We(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Xe.prototype.clear=Le,Xe.prototype.delete=Ne,Xe.prototype.get=Re,Xe.prototype.has=Ve,Xe.prototype.set=Ge;var Ye=Xe,Ue=pe($,"Map"),Me=Ce,Ze=Ye,qe=Ue;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var r=e.__data__;return Je(t)?r["string"==typeof t?"string":"hash"]:r.map},Qe=Ke;var et=Ke;var tt=Ke;var rt=Ke;var st=function(){this.size=0,this.__data__={hash:new Me,map:new(qe||Ze),string:new Me}},it=function(e){var t=Qe(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return et(this,e).get(e)},ot=function(e){return tt(this,e).has(e)},at=function(e,t){var r=rt(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}gt.prototype.clear=st,gt.prototype.delete=it,gt.prototype.get=nt,gt.prototype.has=ot,gt.prototype.set=at;var lt=gt;function ct(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var s=arguments,i=t?t.apply(this,s):s[0],n=r.cache;if(n.has(i))return n.get(i);var o=e.apply(this,s);return r.cache=n.set(i,o)||n,o};return r.cache=new(ct.Cache||lt),r}ct.Cache=lt;var dt=ct;var mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,pt=function(e){var t=dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mt,(function(e,r,s,i){t.push(s?i.replace(ht,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,s=null==e?0:e.length,i=Array(s);++r<s;)i[r]=t(e[r],r,e);return i},ut=x,yt=N,vt=E?E.prototype:void 0,bt=vt?vt.toString:void 0;var Ft=function e(t){if("string"==typeof t)return t;if(ut(t))return ft(t,e)+"";if(yt(t))return bt?bt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Bt=Ft;var St=x,xt=Y,wt=pt,Dt=function(e){return null==e?"":Bt(e)};var $t=N;var Et=function(e,t){return St(e)?e:xt(e,t)?[e]:wt(Dt(e))},Ht=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var kt=function(e,t){for(var r=0,s=(t=Et(t,e)).length;null!=e&&r<s;)e=e[Ht(t[r++])];return r&&r==s?e:void 0};var At=S((function(e,t,r){var s=null==e?void 0:kt(e,t);return void 0===s?r:s}));const Ct=(e,t,r)=>t?At(r,t)||At(e,t):r||e,zt=(e,t)=>{const r=t||e.defaultValue;return At(e.collections,r)},Tt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ot=e=>t=>{const r=t.theme,s=zt(Tt,r[c.colorScheme]);return r.options&&r.options.color?Ct(s,e,r.options.color):Ct(s,e)},_t={Brand:{1:Ot("Brand.1"),2:Ot("Brand.2"),3:Ot("Brand.3"),4:Ot("Brand.4"),5:Ot("Brand.5"),6:Ot("Brand.6")},Primary:Ot("Primary"),PrimaryDark:Ot("PrimaryDark"),Secondary:Ot("Secondary"),Accent:{Light:{1:Ot("Accent.Light.1"),2:Ot("Accent.Light.2"),3:Ot("Accent.Light.3"),4:Ot("Accent.Light.4"),5:Ot("Accent.Light.5"),6:Ot("Accent.Light.6")},Dark:{1:Ot("Accent.Dark.1"),2:Ot("Accent.Dark.2"),3:Ot("Accent.Dark.3")}},Neutral:{1:Ot("Neutral.1"),2:Ot("Neutral.2"),3:Ot("Neutral.3"),4:Ot("Neutral.4"),5:Ot("Neutral.5"),6:Ot("Neutral.6"),7:Ot("Neutral.7"),8:Ot("Neutral.8")},Validation:{Green:{Text:Ot("Validation.Green.Text"),Icon:Ot("Validation.Green.Icon"),Border:Ot("Validation.Green.Border"),Background:Ot("Validation.Green.Background")},Orange:{Text:Ot("Validation.Orange.Text"),Icon:Ot("Validation.Orange.Icon"),Border:Ot("Validation.Orange.Border"),Background:Ot("Validation.Orange.Background"),Badge:Ot("Validation.Orange.Badge")},Red:{Text:Ot("Validation.Red.Text"),Icon:Ot("Validation.Red.Icon"),Border:Ot("Validation.Red.Border"),Background:Ot("Validation.Red.Background")},Blue:{Text:Ot("Validation.Blue.Text"),Icon:Ot("Validation.Blue.Icon"),Border:Ot("Validation.Blue.Border"),Background:Ot("Validation.Blue.Background")}},Shadow:{Accent:Ot("Shadow.Accent"),Red:Ot("Shadow.Red"),Elevation:Ot("Shadow.Elevation")}},It=e=>Object.keys(h).reduce(((t,r)=>{const s=h[r];return t[r]=`@media screen and (${e}: ${s}px)`,t}),{}),jt=It("max-width"),Pt=(It("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Wt=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Lt=s.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||_t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Wt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Nt=s(Lt)`
    animation-delay: -0.45s;
`,Rt=s(Lt)`
    animation-delay: -0.3s;
`,Vt=s(Lt)`
    animation-delay: -0.15s;
`,Gt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xt={collections:{base:{D1:{fontFamily:Gt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Gt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Gt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Gt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Gt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Gt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Gt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Gt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Gt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Gt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Gt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Yt=e=>t=>{const r=t.theme,s=zt(Xt,r[c.textStyleScheme]);return r.options&&r.options.textStyle?Ct(s,e,r.options.textStyle):Ct(s,e)},Ut={D1:{fontFamily:Yt("D1.fontFamily"),fontSize:Yt("D1.fontSize"),fontWeight:Yt("D1.fontWeight"),lineHeight:Yt("D1.lineHeight"),letterSpacing:Yt("D1.letterSpacing")},D2:{fontFamily:Yt("D2.fontFamily"),fontSize:Yt("D2.fontSize"),fontWeight:Yt("D2.fontWeight"),lineHeight:Yt("D2.lineHeight"),letterSpacing:Yt("D2.letterSpacing")},D3:{fontFamily:Yt("D3.fontFamily"),fontSize:Yt("D3.fontSize"),fontWeight:Yt("D3.fontWeight"),lineHeight:Yt("D3.lineHeight"),letterSpacing:Yt("D3.letterSpacing")},D4:{fontFamily:Yt("D4.fontFamily"),fontSize:Yt("D4.fontSize"),fontWeight:Yt("D4.fontWeight"),lineHeight:Yt("D4.lineHeight"),letterSpacing:Yt("D4.letterSpacing")},DBody:{fontFamily:Yt("DBody.fontFamily"),fontSize:Yt("DBody.fontSize"),fontWeight:Yt("DBody.fontWeight"),lineHeight:Yt("DBody.lineHeight"),letterSpacing:Yt("DBody.letterSpacing")},H1:{fontFamily:Yt("H1.fontFamily"),fontSize:Yt("H1.fontSize"),fontWeight:Yt("H1.fontWeight"),lineHeight:Yt("H1.lineHeight"),letterSpacing:Yt("H1.letterSpacing")},H2:{fontFamily:Yt("H2.fontFamily"),fontSize:Yt("H2.fontSize"),fontWeight:Yt("H2.fontWeight"),lineHeight:Yt("H2.lineHeight"),letterSpacing:Yt("H2.letterSpacing")},H3:{fontFamily:Yt("H3.fontFamily"),fontSize:Yt("H3.fontSize"),fontWeight:Yt("H3.fontWeight"),lineHeight:Yt("H3.lineHeight"),letterSpacing:Yt("H3.letterSpacing")},H4:{fontFamily:Yt("H4.fontFamily"),fontSize:Yt("H4.fontSize"),fontWeight:Yt("H4.fontWeight"),lineHeight:Yt("H4.lineHeight"),letterSpacing:Yt("H4.letterSpacing")},H5:{fontFamily:Yt("H5.fontFamily"),fontSize:Yt("H5.fontSize"),fontWeight:Yt("H5.fontWeight"),lineHeight:Yt("H5.lineHeight"),letterSpacing:Yt("H5.letterSpacing")},H6:{fontFamily:Yt("H6.fontFamily"),fontSize:Yt("H6.fontSize"),fontWeight:Yt("H6.fontWeight"),lineHeight:Yt("H6.lineHeight"),letterSpacing:Yt("H6.letterSpacing")},Body:{fontFamily:Yt("Body.fontFamily"),fontSize:Yt("Body.fontSize"),fontWeight:Yt("Body.fontWeight"),lineHeight:Yt("Body.lineHeight"),letterSpacing:Yt("Body.letterSpacing")},BodySmall:{fontFamily:Yt("BodySmall.fontFamily"),fontSize:Yt("BodySmall.fontSize"),fontWeight:Yt("BodySmall.fontWeight"),lineHeight:Yt("BodySmall.lineHeight"),letterSpacing:Yt("BodySmall.letterSpacing")},XSmall:{fontFamily:Yt("XSmall.fontFamily"),fontSize:Yt("XSmall.fontSize"),fontWeight:Yt("XSmall.fontWeight"),lineHeight:Yt("XSmall.lineHeight"),letterSpacing:Yt("XSmall.letterSpacing")}},Mt=e=>{switch(e){case 700:case"bold":return Gt.Bold;case 600:case"semibold":return Gt.Semibold;case 300:case"light":return Gt.Light;case 400:case"regular":return Gt.Regular;default:return""}},Zt=(e,t)=>r=>{var s;const i=Ut[e].fontFamily(r),o=Ut[e].fontWeight(r);return Object.values(Gt).includes(i)?n`
                font-family: ${Mt(t)||Mt(o)||i};
                font-weight: normal !important;
            `:n`
            font-family: ${i};
            font-weight: ${null!==(s=qt(t)||o)&&void 0!==s?s:"normal"};
        `},qt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Jt=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Kt=Zt,Qt=(e,t,r=!1)=>s=>{const i=Ut[e],o=i.fontSize(s);return n`
            ${Zt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(s)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},er=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Jt(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Jt(r)}
        `;var tr;!function(e){e.D1=s.h1`
        ${e=>n`
                ${Qt("D1",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>n`
                ${Qt("D2",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>n`
                ${Qt("D3",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>n`
                ${Qt("D4",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>n`
                ${Qt("DBody",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>n`
                ${Qt("H1",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>n`
                ${Qt("H2",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>n`
                ${Qt("H3",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>n`
                ${Qt("H4",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>n`
                ${Qt("H5",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>n`
                ${Qt("H6",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>n`
                ${Qt("Body",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>n`
                ${Qt("BodySmall",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>n`
                ${Qt("XSmall",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>ir(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ir(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(tr||(tr={}));const rr=s.a`
    ${e=>n`
            ${Qt(e.textStyle,e.weight)}
            color: ${_t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_t.Secondary};

                svg {
                    color: ${_t.Secondary};
                }
            }
        `}
`,sr=s(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ir=t=>{var{external:s=!1,children:i}=t,n=l(t,["external","children"]);return e(rr,Object.assign({},n,{children:[i,s&&r(sr,{})]}))};var nr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nr||(nr={}));const or={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${_t.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${_t.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${_t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${_t.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${_t.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${_t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ar=e=>t=>{var r;const s=t.theme,i=zt(or,s[c.designTokenScheme]);return(null===(r=s.options)||void 0===r?void 0:r.designToken)?Ct(i,e,s.options.designToken):Ct(i,e)},gr={InputBoxShadow:ar("InputBoxShadow"),InputErrorBoxShadow:ar("InputErrorBoxShadow"),ElevationBoxShadow:ar("ElevationBoxShadow"),Table:{Header:ar("Table.Header"),Cell:{Primary:ar("Table.Cell.Primary"),Secondary:ar("Table.Cell.Secondary"),Selected:ar("Table.Cell.Selected"),Hover:ar("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ar("Button.Danger.BackgroundColor"),Hover:ar("Button.Danger.Hover"),Primary:ar("Button.Danger.Primary"),Border:ar("Button.Danger.Border")}}},lr=s.button`
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
                    background-color: ${_t.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?gr.Button.Danger.Border:_t.Primary};

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:_t.Primary};
                `;case"light":return n`
                    background-color: ${_t.Neutral[8]};
                    border: 1px solid ${_t.Neutral[5]};

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:_t.Primary};
                `;case"disabled":return n`
                    background-color: ${_t.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_t.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:_t.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?gr.Button.Danger.Hover:_t.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?gr.Button.Danger.BackgroundColor:_t.Primary};
                    border: 1px solid transparent;

                    ${jt.mobileL} {
                        width: 100%;
                    }

                    color: ${_t.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${Qt("H5","semibold")}

                    ${jt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${Qt("H4","semibold")}

                    ${jt.mobileS} {
                        height: auto;
                    }
                `}
`,cr=s((({color:t,className:s,size:i=18})=>e(Pt,Object.assign({className:s,$size:i,$color:t},{children:[r(Lt,{id:"inner1",$size:i-2,$borderWidth:2,$color:t}),r(Nt,{id:"inner2",$size:i-2,$borderWidth:2,$color:t}),r(Rt,{id:"inner3",$size:i-2,$borderWidth:2,$color:t}),r(Vt,{id:"inner4",$size:i-2,$borderWidth:2,$color:t})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?gr.Button.Danger.Primary:_t.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=_t.Neutral[3](e);break;default:t=_t.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,dr={Default:a.forwardRef(((t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return e(lr,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(cr,Object.assign({},d)),r("span",{children:i})]}))})),Small:a.forwardRef(((t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return e(lr,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&r(cr,Object.assign({},d,{size:16})),r("span",{children:i})]}))}))},mr=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,hr=s.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${jt.mobileL} {
        width: 20rem;
    }

    ${jt.mobileM} {
        width: 18rem;
    }

    ${jt.mobileS} {
        width: 15rem;
    }
`,pr=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,fr=s(tr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,ur=s.div`
    ${Qt("Body","regular")} // Follow styling of Text.Body
    color: ${_t.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Kt("Body","semibold")}
    }

    a {
        ${Qt("Body","semibold")}
        color: ${_t.Primary};

        :hover,
        :active,
        :focus {
            color: ${_t.Secondary};
        }
    }
`,yr=s(dr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${jt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,vr=t=>{var{type:s,img:i,title:n,description:a,actionButton:g,additionalProps:c,imageOnly:m,illustrationScheme:h}=t,p=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=o(),B=((e,t)=>{switch(t){case"bookingsg":return F(y).get(e);case"ccube":return F(v).get(e);case"mylegacy":return F(b).get(e);default:return F(u).get(e)}})(s,h||(f||d).resourceScheme),S=p["data-testid"]||"error-display",x=()=>{switch(s){case"maintenance":{const e=c;return c&&e.dateString?B.renderDescription(e):a||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?B.renderDescription(e):a||void 0}default:return a||void 0}};if(!B)return null;const w=Object.assign(Object.assign(Object.assign(Object.assign({},B),i&&{img:i}),n&&{title:n}),x()&&{description:x()});return e(mr,Object.assign({},p,{"data-testid":S},{children:[r(hr,Object.assign({},w.img,{alt:"","data-id":"error-display-image"})),!m&&(w.title||w.description?e(pr,{children:[w.title&&("string"==typeof w.title?r(fr,Object.assign({"data-testid":`${S}--title`,"data-id":"error-display-title",weight:"semibold"},{children:w.title})):w.title),w.description&&r(ur,Object.assign({"data-testid":`${S}--description`,"data-id":"error-display-description"},{children:"string"==typeof w.description?r("p",{children:w.description}):w.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(yr,Object.assign({},e))})()]}))};export{vr as ErrorDisplay,p as ErrorDisplayHelper};
//# sourceMappingURL=index.js.map
