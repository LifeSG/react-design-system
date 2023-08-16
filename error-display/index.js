import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as n,css as a}from"styled-components";import o from"react";import{ExternalIcon as s}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}const g={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},c={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},u={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},m={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},y={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},F={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},v={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},b={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},S={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},B={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},$={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},x={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},D={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},H={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"},w=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${g.mobileL}px) 400px, (max-width: ${g.tablet}px) 800px, 1200px`}},E=new Map([["400",{img:w({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"}),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:w(c),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:w(d),title:"404 No Page Found",description:"No page found."}],["408",{img:w(p),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:w(h),title:"Error state",description:"A generic error state illustration."}],["502",{img:w(u),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:w(f),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:w(m),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:w(y),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:w(b),title:"Link Error",description:"When a link is expired."}],["logout",{img:w(S),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:w(F),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:w(v),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:w(f),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:i=>e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]})}],["no-item-found",{img:w(B),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:w($),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:w(x),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:w(D),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:w(D),title:"Error state",description:"A generic error state illustration."}],["warning",{img:w(H),title:"Warning states",description:"Generic warning and error state illustrations."}]]);var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},_=Array.isArray,O="object"==typeof z&&z&&z.Object===Object&&z,A="object"==typeof self&&self&&self.Object===Object&&self,k=O||A||Function("return this")(),j=k.Symbol,W=j,T=Object.prototype,N=T.hasOwnProperty,C=T.toString,P=W?W.toStringTag:void 0;var I=function(e){var t=N.call(e,P),r=e[P];try{e[P]=void 0;var i=!0}catch(e){}var n=C.call(e);return i&&(t?e[P]=r:delete e[P]),n},R=Object.prototype.toString;var V=I,L=function(e){return R.call(e)},X=j?j.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?V(e):L(e)};var M=G,U=function(e){return null!=e&&"object"==typeof e};var q=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==M(e)},Z=_,Y=q,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var Q=function(e,t){if(Z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Y(e))||(K.test(e)||!J.test(e)||null!=t&&e in Object(t))};var ee=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},te=G,re=ee;var ie,ne=function(e){if(!re(e))return!1;var t=te(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ae=k["__core-js_shared__"],oe=(ie=/[^.]+$/.exec(ae&&ae.keys&&ae.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var se=function(e){return!!oe&&oe in e},le=Function.prototype.toString;var ge=ne,ce=se,de=ee,pe=function(e){if(null!=e){try{return le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},he=/^\[object .+?Constructor\]$/,ue=Function.prototype,fe=Object.prototype,me=ue.toString,ye=fe.hasOwnProperty,Fe=RegExp("^"+me.call(ye).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ve=function(e){return!(!de(e)||ce(e))&&(ge(e)?Fe:he).test(pe(e))},be=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var r=be(e,t);return ve(r)?r:void 0},Be=Se(Object,"create"),$e=Be;var xe=function(){this.__data__=$e?$e(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=Be,we=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(He){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return we.call(t,e)?t[e]:void 0},ze=Be,_e=Object.prototype.hasOwnProperty;var Oe=Be;var Ae=xe,ke=De,je=Ee,We=function(e){var t=this.__data__;return ze?void 0!==t[e]:_e.call(t,e)},Te=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Oe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ne.prototype.clear=Ae,Ne.prototype.delete=ke,Ne.prototype.get=je,Ne.prototype.has=We,Ne.prototype.set=Te;var Ce=Ne;var Pe=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t};var Re=function(e,t){for(var r=e.length;r--;)if(Ie(e[r][0],t))return r;return-1},Ve=Re,Le=Array.prototype.splice;var Xe=Re;var Ge=Re;var Me=Re;var Ue=Pe,qe=function(e){var t=this.__data__,r=Ve(t,e);return!(r<0)&&(r==t.length-1?t.pop():Le.call(t,r,1),--this.size,!0)},Ze=function(e){var t=this.__data__,r=Xe(t,e);return r<0?void 0:t[r][1]},Ye=function(e){return Ge(this.__data__,e)>-1},Je=function(e,t){var r=this.__data__,i=Me(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=qe,Ke.prototype.get=Ze,Ke.prototype.has=Ye,Ke.prototype.set=Je;var Qe=Ke,et=Se(k,"Map"),tt=Ce,rt=Qe,it=et;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var at=function(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map},ot=at;var st=at;var lt=at;var gt=at;var ct=function(){this.size=0,this.__data__={hash:new tt,map:new(it||rt),string:new tt}},dt=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},pt=function(e){return st(this,e).get(e)},ht=function(e){return lt(this,e).has(e)},ut=function(e,t){var r=gt(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function ft(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ft.prototype.clear=ct,ft.prototype.delete=dt,ft.prototype.get=pt,ft.prototype.has=ht,ft.prototype.set=ut;var mt=ft;function yt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],a=r.cache;if(a.has(n))return a.get(n);var o=e.apply(this,i);return r.cache=a.set(n,o)||a,o};return r.cache=new(yt.Cache||mt),r}yt.Cache=mt;var Ft=yt;var vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bt=/\\(\\)?/g,St=function(e){var t=Ft(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(vt,(function(e,r,i,n){t.push(i?n.replace(bt,"$1"):r||e)})),t}));var Bt=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},$t=_,xt=q,Dt=j?j.prototype:void 0,Ht=Dt?Dt.toString:void 0;var wt=function e(t){if("string"==typeof t)return t;if($t(t))return Bt(t,e)+"";if(xt(t))return Ht?Ht.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Et=wt;var zt=_,_t=Q,Ot=St,At=function(e){return null==e?"":Et(e)};var kt=q;var jt=function(e,t){return zt(e)?e:_t(e,t)?[e]:Ot(At(e))},Wt=function(e){if("string"==typeof e||kt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Tt=function(e,t){for(var r=0,i=(t=jt(t,e)).length;null!=e&&r<i;)e=e[Wt(t[r++])];return r&&r==i?e:void 0};var Nt=function(e,t,r){var i=null==e?void 0:Tt(e,t);return void 0===i?r:i};const Ct=(e,t,r)=>t?Nt(r,t)||Nt(e,t):r||e,Pt=(e,t)=>{const r=t||e.defaultValue;return Nt(e.collections,r)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Rt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,i=Pt(Rt,r[It.colorScheme]);return r.options&&r.options.color?Ct(i,e,r.options.color):Ct(i,e)},Lt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}},Xt=e=>Object.keys(g).reduce(((t,r)=>{const i=g[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Gt=Xt("max-width"),Mt=(Xt("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ut=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,qt=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Lt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ut} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Zt=i(qt)`
    animation-delay: -0.45s;
`,Yt=i(qt)`
    animation-delay: -0.3s;
`,Jt=i(qt)`
    animation-delay: -0.15s;
`,Kt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Qt={collections:{base:{D1:{fontFamily:Kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},er=e=>t=>{const r=t.theme,i=Pt(Qt,r[It.textStyleScheme]);return r.options&&r.options.textStyle?Ct(i,e,r.options.textStyle):Ct(i,e)},tr={D1:{fontFamily:er("D1.fontFamily"),fontSize:er("D1.fontSize"),fontWeight:er("D1.fontWeight"),lineHeight:er("D1.lineHeight"),letterSpacing:er("D1.letterSpacing")},D2:{fontFamily:er("D2.fontFamily"),fontSize:er("D2.fontSize"),fontWeight:er("D2.fontWeight"),lineHeight:er("D2.lineHeight"),letterSpacing:er("D2.letterSpacing")},D3:{fontFamily:er("D3.fontFamily"),fontSize:er("D3.fontSize"),fontWeight:er("D3.fontWeight"),lineHeight:er("D3.lineHeight"),letterSpacing:er("D3.letterSpacing")},D4:{fontFamily:er("D4.fontFamily"),fontSize:er("D4.fontSize"),fontWeight:er("D4.fontWeight"),lineHeight:er("D4.lineHeight"),letterSpacing:er("D4.letterSpacing")},DBody:{fontFamily:er("DBody.fontFamily"),fontSize:er("DBody.fontSize"),fontWeight:er("DBody.fontWeight"),lineHeight:er("DBody.lineHeight"),letterSpacing:er("DBody.letterSpacing")},H1:{fontFamily:er("H1.fontFamily"),fontSize:er("H1.fontSize"),fontWeight:er("H1.fontWeight"),lineHeight:er("H1.lineHeight"),letterSpacing:er("H1.letterSpacing")},H2:{fontFamily:er("H2.fontFamily"),fontSize:er("H2.fontSize"),fontWeight:er("H2.fontWeight"),lineHeight:er("H2.lineHeight"),letterSpacing:er("H2.letterSpacing")},H3:{fontFamily:er("H3.fontFamily"),fontSize:er("H3.fontSize"),fontWeight:er("H3.fontWeight"),lineHeight:er("H3.lineHeight"),letterSpacing:er("H3.letterSpacing")},H4:{fontFamily:er("H4.fontFamily"),fontSize:er("H4.fontSize"),fontWeight:er("H4.fontWeight"),lineHeight:er("H4.lineHeight"),letterSpacing:er("H4.letterSpacing")},H5:{fontFamily:er("H5.fontFamily"),fontSize:er("H5.fontSize"),fontWeight:er("H5.fontWeight"),lineHeight:er("H5.lineHeight"),letterSpacing:er("H5.letterSpacing")},H6:{fontFamily:er("H6.fontFamily"),fontSize:er("H6.fontSize"),fontWeight:er("H6.fontWeight"),lineHeight:er("H6.lineHeight"),letterSpacing:er("H6.letterSpacing")},Body:{fontFamily:er("Body.fontFamily"),fontSize:er("Body.fontSize"),fontWeight:er("Body.fontWeight"),lineHeight:er("Body.lineHeight"),letterSpacing:er("Body.letterSpacing")},BodySmall:{fontFamily:er("BodySmall.fontFamily"),fontSize:er("BodySmall.fontSize"),fontWeight:er("BodySmall.fontWeight"),lineHeight:er("BodySmall.lineHeight"),letterSpacing:er("BodySmall.letterSpacing")},XSmall:{fontFamily:er("XSmall.fontFamily"),fontSize:er("XSmall.fontSize"),fontWeight:er("XSmall.fontWeight"),lineHeight:er("XSmall.lineHeight"),letterSpacing:er("XSmall.letterSpacing")}},rr=e=>{switch(e){case 700:case"bold":return Kt.Bold;case 600:case"semibold":return Kt.Semibold;case 300:case"light":return Kt.Light;case 400:case"regular":return Kt.Regular;default:return""}},ir=(e,t)=>r=>{var i;const n=tr[e].fontFamily(r),o=tr[e].fontWeight(r);return Object.values(Kt).includes(n)?a`
                font-family: ${rr(t)||rr(o)||n};
                font-weight: normal !important;
            `:a`
            font-family: ${n};
            font-weight: ${null!==(i=nr(t)||o)&&void 0!==i?i:"normal"};
        `},nr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ar=ir,or=(e,t,r=!1)=>i=>{const n=tr[e],o=n.fontSize(i);return a`
            ${ir(e,t)}
            font-size: ${o}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},sr=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `;var lr;!function(e){e.D1=i.h1`
        ${e=>a`
                ${or("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>a`
                ${or("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>a`
                ${or("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>a`
                ${or("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>a`
                ${or("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>a`
                ${or("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>a`
                ${or("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>a`
                ${or("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>a`
                ${or("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>a`
                ${or("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>a`
                ${or("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>a`
                ${or("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>a`
                ${or("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>a`
                ${or("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${sr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>dr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(lr||(lr={}));const gr=i.a`
    ${e=>a`
            ${or(e.textStyle,e.weight)}
            color: ${Lt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Lt.Secondary};

                svg {
                    color: ${Lt.Secondary};
                }
            }
        `}
`,cr=i(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dr=t=>{var{external:i=!1,children:n}=t,a=l(t,["external","children"]);return e(gr,Object.assign({},a,{children:[n,i&&r(cr,{})]}))};var pr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(pr||(pr={}));const hr=i.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return a`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Primary(e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"light":return a`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Neutral[5](e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"disabled":return a`
                    background-color: ${Lt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Lt.Neutral[3](e)};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Lt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Lt.Secondary};
                        }
                    }
                `;default:return a`
                    background-color: ${Lt.Primary(e)};
                    border: 1px solid transparent;

                    ${Gt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Lt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${or("H5","semibold")}
                    }

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${or("H4","semibold")}
                    }

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `}
`,ur=i((({color:t,className:i,size:n=18})=>e(Mt,Object.assign({className:i,$size:n,$color:t},{children:[r(qt,{id:"inner1",$size:n-2,$borderWidth:2}),r(Zt,{id:"inner2",$size:n-2,$borderWidth:2}),r(Yt,{id:"inner3",$size:n-2,$borderWidth:2}),r(Jt,{id:"inner4",$size:n-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Lt.Primary(e);break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,fr={Default:o.forwardRef(((t,i)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return e(hr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:a},c,g,{children:[o&&r(ur,Object.assign({},c)),r("span",{children:n})]}))})),Small:o.forwardRef(((t,i)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default"}=t,g=l(t,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return e(hr,Object.assign({ref:i,"data-testid":g["data-testid"]||"button",disabled:a},c,g,{children:[o&&r(ur,Object.assign({},c,{size:16})),r("span",{children:n})]}))}))},mr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,yr=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${Gt.mobileL} {
        width: 20rem;
    }

    ${Gt.mobileM} {
        width: 18rem;
    }

    ${Gt.mobileS} {
        width: 15rem;
    }
`,Fr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,vr=i(lr.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,br=i.div`
    ${or("Body","regular")} // Follow styling of Text.Body
    color: ${Lt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${ar("Body","semibold")}
    }

    a {
        ${or("Body","semibold")}
        color: ${Lt.Primary};

        :hover,
        :active,
        :focus {
            color: ${Lt.Secondary};
        }
    }
`,Sr=i(fr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Gt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Br=t=>{var{type:i,img:n,title:a,description:o,actionButton:s,additionalProps:g}=t,c=l(t,["type","img","title","description","actionButton","additionalProps"]);const d=E.get(i),p=c["data-testid"]||"error-display",h=()=>{if("maintenance"===i){const e=g;return g&&e.dateString?d.renderDescription(e):o||void 0}return o||void 0};if(!d)return null;const u=Object.assign(Object.assign(Object.assign(Object.assign({},d),n&&{img:n}),a&&{title:a}),h()&&{description:h()});return e(mr,Object.assign({},c,{"data-testid":p},{children:[r(yr,Object.assign({},u.img,{alt:""})),e(Fr,{children:[r(vr,Object.assign({"data-testid":`${p}--title`},{children:u.title})),r(br,Object.assign({"data-testid":`${p}--description`},{children:"string"==typeof u.description?r("p",{children:u.description}):u.description}))]}),s&&(()=>{const e=Object.assign({children:"Proceed"},s);return r(Sr,Object.assign({},e))})()]}))};export{Br as ErrorDisplay};
//# sourceMappingURL=index.js.map
