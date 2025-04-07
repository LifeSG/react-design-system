import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import s,{css as i,keyframes as n,useTheme as a}from"styled-components";import o from"react";import{ExternalIcon as g}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(r[s[i]]=e[s[i]])}return r}var c;"function"==typeof SuppressedError&&SuppressedError,function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(c||(c={}));const d={[c.colorScheme]:"base",[c.textStyleScheme]:"base",[c.designTokenScheme]:"base",[c.resourceScheme]:"base"};c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme,c.colorScheme,c.textStyleScheme,c.designTokenScheme,c.resourceScheme;const m=s=>i=>{switch(s){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]});case"inactivity":{const s=i,n=Math.floor(s.secondsLeft/60),a=s.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",a," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}},h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var p;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:s,width:i,height:n}=e;return{srcSet:`${t} 400w, ${r} 800w, ${s} 1200w`,src:s,sizes:`(max-width: ${h.mobileL}px) 400px, (max-width: ${h.tablet}px) 800px, 1200px`,width:i,height:n}}}(p||(p={}));const{imgAttributeHelper:f}=p,u={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},y={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},F=Object.assign(Object.assign({},u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),v=Object.assign(Object.assign({},u),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),b=e=>new Map([["400",{img:f(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:f(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:f(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:f(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:f(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:f(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:f(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:f(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:f(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:f(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:f(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:f(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:f(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:m("inactivity")}],["maintenance",{img:f(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:m("maintenance")}],["no-item-found",{img:f(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:f(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:f(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:f(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:f(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:f(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]);var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x=Array.isArray,w="object"==typeof S&&S&&S.Object===Object&&S,D="object"==typeof self&&self&&self.Object===Object&&self,$=w||D||Function("return this")(),H=$.Symbol,E=H,k=Object.prototype,O=k.hasOwnProperty,z=k.toString,A=E?E.toStringTag:void 0;var C=function(e){var t=O.call(e,A),r=e[A];try{e[A]=void 0;var s=!0}catch(e){}var i=z.call(e);return s&&(t?e[A]=r:delete e[A]),i},T=Object.prototype.toString;var P=C,_=function(e){return T.call(e)},V=H?H.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?P(e):_(e)};var I=W,j=function(e){return null!=e&&"object"==typeof e};var L=function(e){return"symbol"==typeof e||j(e)&&"[object Symbol]"==I(e)},N=x,R=L,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/;var G=function(e,t){if(N(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!R(e))||(X.test(e)||!J.test(e)||null!=t&&e in Object(t))};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=W,U=Y;var Z,q=function(e){if(!U(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=$["__core-js_shared__"],Q=(Z=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"";var ee=function(e){return!!Q&&Q in e},te=Function.prototype.toString;var re=q,se=ee,ie=Y,ne=function(e){if(null!=e){try{return te.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ae=/^\[object .+?Constructor\]$/,oe=Function.prototype,ge=Object.prototype,le=oe.toString,ce=ge.hasOwnProperty,de=RegExp("^"+le.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var me=function(e){return!(!ie(e)||se(e))&&(re(e)?de:ae).test(ne(e))},he=function(e,t){return null==e?void 0:e[t]};var pe=function(e,t){var r=he(e,t);return me(r)?r:void 0},fe=pe(Object,"create"),ue=fe;var ye=function(){this.__data__=ue?ue(null):{},this.size=0};var Fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ve=fe,be=Object.prototype.hasOwnProperty;var Se=function(e){var t=this.__data__;if(ve){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return be.call(t,e)?t[e]:void 0},Be=fe,xe=Object.prototype.hasOwnProperty;var we=fe;var De=ye,$e=Fe,He=Se,Ee=function(e){var t=this.__data__;return Be?void 0!==t[e]:xe.call(t,e)},ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=we&&void 0===t?"__lodash_hash_undefined__":t,this};function Oe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Oe.prototype.clear=De,Oe.prototype.delete=$e,Oe.prototype.get=He,Oe.prototype.has=Ee,Oe.prototype.set=ke;var ze=Oe;var Ae=function(){this.__data__=[],this.size=0};var Ce=function(e,t){return e===t||e!=e&&t!=t};var Te=function(e,t){for(var r=e.length;r--;)if(Ce(e[r][0],t))return r;return-1},Pe=Te,_e=Array.prototype.splice;var Ve=Te;var We=Te;var Ie=Te;var je=Ae,Le=function(e){var t=this.__data__,r=Pe(t,e);return!(r<0)&&(r==t.length-1?t.pop():_e.call(t,r,1),--this.size,!0)},Ne=function(e){var t=this.__data__,r=Ve(t,e);return r<0?void 0:t[r][1]},Re=function(e){return We(this.__data__,e)>-1},Je=function(e,t){var r=this.__data__,s=Ie(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Xe.prototype.clear=je,Xe.prototype.delete=Le,Xe.prototype.get=Ne,Xe.prototype.has=Re,Xe.prototype.set=Je;var Ge=Xe,Ye=pe($,"Map"),Me=ze,Ue=Ge,Ze=Ye;var qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var r=e.__data__;return qe(t)?r["string"==typeof t?"string":"hash"]:r.map},Qe=Ke;var et=Ke;var tt=Ke;var rt=Ke;var st=function(){this.size=0,this.__data__={hash:new Me,map:new(Ze||Ue),string:new Me}},it=function(e){var t=Qe(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return et(this,e).get(e)},at=function(e){return tt(this,e).has(e)},ot=function(e,t){var r=rt(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}gt.prototype.clear=st,gt.prototype.delete=it,gt.prototype.get=nt,gt.prototype.has=at,gt.prototype.set=ot;var lt=gt;function ct(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var s=arguments,i=t?t.apply(this,s):s[0],n=r.cache;if(n.has(i))return n.get(i);var a=e.apply(this,s);return r.cache=n.set(i,a)||n,a};return r.cache=new(ct.Cache||lt),r}ct.Cache=lt;var dt=ct;var mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,pt=function(e){var t=dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mt,(function(e,r,s,i){t.push(s?i.replace(ht,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,s=null==e?0:e.length,i=Array(s);++r<s;)i[r]=t(e[r],r,e);return i},ut=x,yt=L,Ft=H?H.prototype:void 0,vt=Ft?Ft.toString:void 0;var bt=function e(t){if("string"==typeof t)return t;if(ut(t))return ft(t,e)+"";if(yt(t))return vt?vt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},St=bt;var Bt=x,xt=G,wt=pt,Dt=function(e){return null==e?"":St(e)};var $t=L;var Ht=function(e,t){return Bt(e)?e:xt(e,t)?[e]:wt(Dt(e))},Et=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var kt=function(e,t){for(var r=0,s=(t=Ht(t,e)).length;null!=e&&r<s;)e=e[Et(t[r++])];return r&&r==s?e:void 0};var Ot=B((function(e,t,r){var s=null==e?void 0:kt(e,t);return void 0===s?r:s}));const zt=(e,t,r)=>t?Ot(r,t)||Ot(e,t):r||e,At=(e,t)=>{const r=t||e.defaultValue;return Ot(e.collections,r)},Ct={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,s=At(Ct,r[c.colorScheme]);return r.options&&r.options.color?zt(s,e,r.options.color):zt(s,e)},Pt={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}},_t={collections:{base:{InputBoxShadow:i`
        inset 0 0 4px 0px ${Pt.Shadow.Accent}
    `,InputErrorBoxShadow:i`
        inset 0 0 4px 0px ${Pt.Shadow.Red}
    `,ElevationBoxShadow:i`
      0px 2px 8px ${Pt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i`
        inset 0 0 3px 0px ${Pt.Shadow.Accent}
    `,InputErrorBoxShadow:i`
        inset 0 0 3px 0px ${Pt.Shadow.Red}
    `,ElevationBoxShadow:i`
      0px 2px 8px ${Pt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vt=e=>t=>{var r;const s=t.theme,i=At(_t,s[c.designTokenScheme]);return(null===(r=s.options)||void 0===r?void 0:r.designToken)?zt(i,e,s.options.designToken):zt(i,e)},Wt={InputBoxShadow:Vt("InputBoxShadow"),InputErrorBoxShadow:Vt("InputErrorBoxShadow"),ElevationBoxShadow:Vt("ElevationBoxShadow"),Table:{Header:Vt("Table.Header"),Cell:{Primary:Vt("Table.Cell.Primary"),Secondary:Vt("Table.Cell.Secondary"),Selected:Vt("Table.Cell.Selected"),Hover:Vt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Vt("Button.Danger.BackgroundColor"),Hover:Vt("Button.Danger.Hover"),Primary:Vt("Button.Danger.Primary"),Border:Vt("Button.Danger.Border")}}},It=e=>Object.keys(h).reduce(((t,r)=>{const s=h[r];return t[r]=`@media screen and (${e}: ${s}px)`,t}),{}),jt=It("max-width"),Lt=(It("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Nt=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Rt=s.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Pt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Nt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Jt=s(Rt)`
    animation-delay: -0.45s;
`,Xt=s(Rt)`
    animation-delay: -0.3s;
`,Gt=s(Rt)`
    animation-delay: -0.15s;
`,Yt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Mt={D1:{fontFamily:Yt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ut={D1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Zt={collections:{base:Mt,oneservice:{D1:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ut},defaultValue:"base"},qt=e=>t=>{const r=t.theme,s=At(Zt,r[c.textStyleScheme]);return r.options&&r.options.textStyle?zt(s,e,r.options.textStyle):zt(s,e)},Kt={D1:{fontFamily:qt("D1.fontFamily"),fontSize:qt("D1.fontSize"),fontWeight:qt("D1.fontWeight"),lineHeight:qt("D1.lineHeight"),letterSpacing:qt("D1.letterSpacing"),fontVariant:qt("D1.fontVariant")},D2:{fontFamily:qt("D2.fontFamily"),fontSize:qt("D2.fontSize"),fontWeight:qt("D2.fontWeight"),lineHeight:qt("D2.lineHeight"),letterSpacing:qt("D2.letterSpacing"),fontVariant:qt("D2.fontVariant")},D3:{fontFamily:qt("D3.fontFamily"),fontSize:qt("D3.fontSize"),fontWeight:qt("D3.fontWeight"),lineHeight:qt("D3.lineHeight"),letterSpacing:qt("D3.letterSpacing"),fontVariant:qt("D3.fontVariant")},D4:{fontFamily:qt("D4.fontFamily"),fontSize:qt("D4.fontSize"),fontWeight:qt("D4.fontWeight"),lineHeight:qt("D4.lineHeight"),letterSpacing:qt("D4.letterSpacing"),fontVariant:qt("D4.fontVariant")},DBody:{fontFamily:qt("DBody.fontFamily"),fontSize:qt("DBody.fontSize"),fontWeight:qt("DBody.fontWeight"),lineHeight:qt("DBody.lineHeight"),letterSpacing:qt("DBody.letterSpacing"),fontVariant:qt("DBody.fontVariant")},H1:{fontFamily:qt("H1.fontFamily"),fontSize:qt("H1.fontSize"),fontWeight:qt("H1.fontWeight"),lineHeight:qt("H1.lineHeight"),letterSpacing:qt("H1.letterSpacing"),fontVariant:qt("H1.fontVariant")},H2:{fontFamily:qt("H2.fontFamily"),fontSize:qt("H2.fontSize"),fontWeight:qt("H2.fontWeight"),lineHeight:qt("H2.lineHeight"),letterSpacing:qt("H2.letterSpacing"),fontVariant:qt("H2.fontVariant")},H3:{fontFamily:qt("H3.fontFamily"),fontSize:qt("H3.fontSize"),fontWeight:qt("H3.fontWeight"),lineHeight:qt("H3.lineHeight"),letterSpacing:qt("H3.letterSpacing"),fontVariant:qt("H3.fontVariant")},H4:{fontFamily:qt("H4.fontFamily"),fontSize:qt("H4.fontSize"),fontWeight:qt("H4.fontWeight"),lineHeight:qt("H4.lineHeight"),letterSpacing:qt("H4.letterSpacing"),fontVariant:qt("H4.fontVariant")},H5:{fontFamily:qt("H5.fontFamily"),fontSize:qt("H5.fontSize"),fontWeight:qt("H5.fontWeight"),lineHeight:qt("H5.lineHeight"),letterSpacing:qt("H5.letterSpacing"),fontVariant:qt("H5.fontVariant")},H6:{fontFamily:qt("H6.fontFamily"),fontSize:qt("H6.fontSize"),fontWeight:qt("H6.fontWeight"),lineHeight:qt("H6.lineHeight"),letterSpacing:qt("H6.letterSpacing"),fontVariant:qt("H6.fontVariant")},Body:{fontFamily:qt("Body.fontFamily"),fontSize:qt("Body.fontSize"),fontWeight:qt("Body.fontWeight"),lineHeight:qt("Body.lineHeight"),letterSpacing:qt("Body.letterSpacing"),fontVariant:qt("Body.fontVariant")},BodySmall:{fontFamily:qt("BodySmall.fontFamily"),fontSize:qt("BodySmall.fontSize"),fontWeight:qt("BodySmall.fontWeight"),lineHeight:qt("BodySmall.lineHeight"),letterSpacing:qt("BodySmall.letterSpacing"),fontVariant:qt("BodySmall.fontVariant")},XSmall:{fontFamily:qt("XSmall.fontFamily"),fontSize:qt("XSmall.fontSize"),fontWeight:qt("XSmall.fontWeight"),lineHeight:qt("XSmall.lineHeight"),letterSpacing:qt("XSmall.letterSpacing"),fontVariant:qt("XSmall.fontVariant")}},Qt=[Yt.OpenSans,Yt.PlusJakartaSans],er=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},tr=(e,t)=>r=>{var s;const n=Kt[e].fontFamily(r),a=Kt[e].fontWeight(r),o=Qt.find((e=>Object.values(e).includes(n)));return o?i`
                font-family: ${er(o,t)||er(o,a)||n};
                font-weight: normal !important;
            `:i`
            font-family: ${n};
            font-weight: ${null!==(s=rr(t)||a)&&void 0!==s?s:"normal"};
        `},rr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},sr=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ir=tr,nr=(e,t,r=!1)=>s=>{const n=Kt[e],a=n.fontSize(s);return i`
            ${tr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(s)||0}rem !important;
            font-variant: ${n.fontVariant(s)||"normal"};
            ${i`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},ar=(e=!1,t=!1,r=void 0)=>t?i`
            display: block;
            ${sr(r)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${sr(r)}
        `;var or;!function(e){e.D1=s.h1`
        ${e=>i`
                ${nr("D1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>i`
                ${nr("D2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>i`
                ${nr("D3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>i`
                ${nr("D4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>i`
                ${nr("DBody",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>i`
                ${nr("H1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>i`
                ${nr("H2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>i`
                ${nr("H3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>i`
                ${nr("H4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>i`
                ${nr("H5",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>i`
                ${nr("H6",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>i`
                ${nr("Body",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>i`
                ${nr("BodySmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>i`
                ${nr("XSmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>cr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>cr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(or||(or={}));const gr=s.a`
    ${e=>i`
            ${nr(e.textStyle,e.weight)}
            color: ${Pt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Pt.Secondary};

                svg {
                    color: ${Pt.Secondary};
                }
            }
        `}
`,lr=s(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,cr=t=>{var{external:s=!1,children:i}=t,n=l(t,["external","children"]);return e(gr,Object.assign({},n,{children:[i,s&&r(lr,{})]}))};var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const mr=s.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return i`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Wt.Button.Danger.Border:Pt.Primary};

                    color: ${e.$buttonIsDanger?Wt.Button.Danger.Primary:Pt.Primary};
                `;case"light":return i`
                    background-color: ${Pt.Neutral[8]};
                    border: 1px solid ${Pt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Wt.Button.Danger.Primary:Pt.Primary};
                `;case"disabled":return i`
                    background-color: ${Pt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Pt.Neutral[3]};
                `;case"link":return i`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Wt.Button.Danger.Primary:Pt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Wt.Button.Danger.Hover:Pt.Secondary};
                    }
                `;default:return i`
                    background-color: ${e.$buttonIsDanger?Wt.Button.Danger.BackgroundColor:Pt.Primary};
                    border: 1px solid transparent;

                    ${jt.mobileL} {
                        width: 100%;
                    }

                    color: ${Pt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i`
                    height: 2.5rem;
                    ${nr("H5","semibold")}

                    ${jt.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    ${nr("H4","semibold")}

                    ${jt.mobileS} {
                        height: auto;
                    }
                `}
`,hr=s((({color:t,className:s,size:i=18})=>e(Lt,Object.assign({className:s,$size:i,$color:t,"data-testid":"component-loading-spinner"},{children:[r(Rt,{id:"inner1",$size:i-2,$borderWidth:2,$color:t}),r(Jt,{id:"inner2",$size:i-2,$borderWidth:2,$color:t}),r(Xt,{id:"inner3",$size:i-2,$borderWidth:2,$color:t}),r(Gt,{id:"inner4",$size:i-2,$borderWidth:2,$color:t})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Wt.Button.Danger.Primary:Pt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Pt.Neutral[3](e);break;default:t=Pt.Neutral[8](e)}return i`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,pr={Default:o.forwardRef(((t,s)=>{const{children:i,disabled:n=!1,loading:a=!1,styleType:o="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:g};return e(mr,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[a&&r(hr,Object.assign({},d)),r("span",{children:i})]}))})),Small:o.forwardRef(((t,s)=>{const{children:i,disabled:n=!1,loading:a=!1,styleType:o="default",danger:g=!1}=t,c=l(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:g};return e(mr,Object.assign({ref:s,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[a&&r(hr,Object.assign({},d,{size:16})),r("span",{children:i})]}))}))},fr=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,ur=s.img`
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
`,yr=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Fr=s(or.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,vr=s.div`
    ${nr("Body","regular")} // Follow styling of Text.Body
    color: ${Pt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${ir("Body","semibold")}
    }

    a {
        ${nr("Body","semibold")}
        color: ${Pt.Primary};

        :hover,
        :active,
        :focus {
            color: ${Pt.Secondary};
        }
    }
`,br=s(pr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${jt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Sr=t=>{var{type:s,img:i,title:n,description:o,actionButton:g,additionalProps:c,imageOnly:m,illustrationScheme:h}=t,p=l(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=a(),S=((e,t)=>{switch(t){case"bookingsg":return b(y).get(e);case"ccube":return b(F).get(e);case"mylegacy":return b(v).get(e);default:return b(u).get(e)}})(s,h||(f||d).resourceScheme),B=p["data-testid"]||"error-display",x=()=>{switch(s){case"maintenance":{const e=c;return c&&e.dateString?S.renderDescription(e):o||void 0}case"inactivity":{const e=c;return c&&e.secondsLeft?S.renderDescription(e):o||void 0}default:return o||void 0}};if(!S)return null;const w=Object.assign(Object.assign(Object.assign(Object.assign({},S),i&&{img:i}),n&&{title:n}),x()&&{description:x()});return e(fr,Object.assign({},p,{"data-testid":B},{children:[r(ur,Object.assign({},w.img,{alt:"","data-id":"error-display-image"})),!m&&(w.title||w.description?e(yr,{children:[w.title&&("string"==typeof w.title?r(Fr,Object.assign({"data-testid":`${B}--title`,"data-id":"error-display-title",weight:"semibold"},{children:w.title})):w.title),w.description&&r(vr,Object.assign({"data-testid":`${B}--description`,"data-id":"error-display-description"},{children:"string"==typeof w.description?r("p",{children:w.description}):w.description}))]}):null),g&&(()=>{const e=Object.assign({children:"Proceed"},g);return r(br,Object.assign({},e))})()]}))};export{Sr as ErrorDisplay,p as ErrorDisplayHelper};
//# sourceMappingURL=index.js.map
