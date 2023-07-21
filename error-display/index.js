import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as n,css as a}from"styled-components";import o from"react";import{ExternalIcon as s}from"@lifesg/react-icons/external";const l={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},g={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},c={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},u={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},m={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},y={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},F={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},v={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},S={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},b={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},B={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},$={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},x={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},D={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"},H=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${l.mobileL}px) 400px, (max-width: ${l.tablet}px) 800px, 1200px`}},w=new Map([["400",{img:H({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"}),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:H(g),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:H(c),title:"404 No Page Found",description:"No page found."}],["408",{img:H(d),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:H(p),title:"Error state",description:"A generic error state illustration."}],["502",{img:H(h),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:H(u),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:H(f),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:H(m),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:H(v),title:"Link Error",description:"When a link is expired."}],["logout",{img:H(S),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:H(y),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:H(F),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:H(u),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:i=>e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]})}],["no-item-found",{img:H(b),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:H(B),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:H($),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:H(x),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:H(x),title:"Error state",description:"A generic error state illustration."}],["warning",{img:H(D),title:"Warning states",description:"Generic warning and error state illustrations."}]]);var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},z=Array.isArray,_="object"==typeof E&&E&&E.Object===Object&&E,A="object"==typeof self&&self&&self.Object===Object&&self,k=_||A||Function("return this")(),W=k.Symbol,T=W,N=Object.prototype,C=N.hasOwnProperty,O=N.toString,j=T?T.toStringTag:void 0;var P=function(e){var t=C.call(e,j),r=e[j];try{e[j]=void 0;var i=!0}catch(e){}var n=O.call(e);return i&&(t?e[j]=r:delete e[j]),n},I=Object.prototype.toString;var R=P,V=function(e){return I.call(e)},L=W?W.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?R(e):V(e)};var G=X,M=function(e){return null!=e&&"object"==typeof e};var U=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==G(e)},q=z,Z=U,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/;var K=function(e,t){if(q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Z(e))||(J.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee=X,te=Q;var re,ie=function(e){if(!te(e))return!1;var t=ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ne=k["__core-js_shared__"],ae=(re=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+re:"";var oe=function(e){return!!ae&&ae in e},se=Function.prototype.toString;var le=ie,ge=oe,ce=Q,de=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=/^\[object .+?Constructor\]$/,he=Function.prototype,ue=Object.prototype,fe=he.toString,me=ue.hasOwnProperty,ye=RegExp("^"+fe.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Fe=function(e){return!(!ce(e)||ge(e))&&(le(e)?ye:pe).test(de(e))},ve=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var r=ve(e,t);return Fe(r)?r:void 0},be=Se(Object,"create"),Be=be;var $e=function(){this.__data__=Be?Be(null):{},this.size=0};var xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=be,He=Object.prototype.hasOwnProperty;var we=function(e){var t=this.__data__;if(De){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return He.call(t,e)?t[e]:void 0},Ee=be,ze=Object.prototype.hasOwnProperty;var _e=be;var Ae=$e,ke=xe,We=we,Te=function(e){var t=this.__data__;return Ee?void 0!==t[e]:ze.call(t,e)},Ne=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=_e&&void 0===t?"__lodash_hash_undefined__":t,this};function Ce(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ce.prototype.clear=Ae,Ce.prototype.delete=ke,Ce.prototype.get=We,Ce.prototype.has=Te,Ce.prototype.set=Ne;var Oe=Ce;var je=function(){this.__data__=[],this.size=0};var Pe=function(e,t){return e===t||e!=e&&t!=t};var Ie=function(e,t){for(var r=e.length;r--;)if(Pe(e[r][0],t))return r;return-1},Re=Ie,Ve=Array.prototype.splice;var Le=Ie;var Xe=Ie;var Ge=Ie;var Me=je,Ue=function(e){var t=this.__data__,r=Re(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ve.call(t,r,1),--this.size,!0)},qe=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},Ze=function(e){return Xe(this.__data__,e)>-1},Ye=function(e,t){var r=this.__data__,i=Ge(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Je.prototype.clear=Me,Je.prototype.delete=Ue,Je.prototype.get=qe,Je.prototype.has=Ze,Je.prototype.set=Ye;var Ke=Je,Qe=Se(k,"Map"),et=Oe,tt=Ke,rt=Qe;var it=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var r=e.__data__;return it(t)?r["string"==typeof t?"string":"hash"]:r.map},at=nt;var ot=nt;var st=nt;var lt=nt;var gt=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},ct=function(e){var t=at(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return ot(this,e).get(e)},pt=function(e){return st(this,e).has(e)},ht=function(e,t){var r=lt(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function ut(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ut.prototype.clear=gt,ut.prototype.delete=ct,ut.prototype.get=dt,ut.prototype.has=pt,ut.prototype.set=ht;var ft=ut;function mt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],a=r.cache;if(a.has(n))return a.get(n);var o=e.apply(this,i);return r.cache=a.set(n,o)||a,o};return r.cache=new(mt.Cache||ft),r}mt.Cache=ft;var yt=mt;var Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,St=function(e){var t=yt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ft,(function(e,r,i,n){t.push(i?n.replace(vt,"$1"):r||e)})),t}));var bt=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},Bt=z,$t=U,xt=W?W.prototype:void 0,Dt=xt?xt.toString:void 0;var Ht=function e(t){if("string"==typeof t)return t;if(Bt(t))return bt(t,e)+"";if($t(t))return Dt?Dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},wt=Ht;var Et=z,zt=K,_t=St,At=function(e){return null==e?"":wt(e)};var kt=U;var Wt=function(e,t){return Et(e)?e:zt(e,t)?[e]:_t(At(e))},Tt=function(e){if("string"==typeof e||kt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Nt=function(e,t){for(var r=0,i=(t=Wt(t,e)).length;null!=e&&r<i;)e=e[Tt(t[r++])];return r&&r==i?e:void 0};var Ct=function(e,t,r){var i=null==e?void 0:Nt(e,t);return void 0===i?r:i};const Ot=(e,t,r)=>t?Ct(r,t)||Ct(e,t):r||e,jt=(e,t)=>{const r=t||e.defaultValue;return Ct(e.collections,r)};var Pt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Pt||(Pt={}));const It={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Rt=e=>t=>{const r=t.theme,i=jt(It,r[Pt.colorScheme]);return r.options&&r.options.color?Ot(i,e,r.options.color):Ot(i,e)},Vt={Brand:{1:Rt("Brand.1"),2:Rt("Brand.2"),3:Rt("Brand.3"),4:Rt("Brand.4"),5:Rt("Brand.5"),6:Rt("Brand.6")},Primary:Rt("Primary"),PrimaryDark:Rt("PrimaryDark"),Secondary:Rt("Secondary"),Accent:{Light:{1:Rt("Accent.Light.1"),2:Rt("Accent.Light.2"),3:Rt("Accent.Light.3"),4:Rt("Accent.Light.4"),5:Rt("Accent.Light.5"),6:Rt("Accent.Light.6")},Dark:{1:Rt("Accent.Dark.1"),2:Rt("Accent.Dark.2"),3:Rt("Accent.Dark.3")}},Neutral:{1:Rt("Neutral.1"),2:Rt("Neutral.2"),3:Rt("Neutral.3"),4:Rt("Neutral.4"),5:Rt("Neutral.5"),6:Rt("Neutral.6"),7:Rt("Neutral.7"),8:Rt("Neutral.8")},Validation:{Green:{Text:Rt("Validation.Green.Text"),Icon:Rt("Validation.Green.Icon"),Border:Rt("Validation.Green.Border"),Background:Rt("Validation.Green.Background")},Orange:{Text:Rt("Validation.Orange.Text"),Icon:Rt("Validation.Orange.Icon"),Border:Rt("Validation.Orange.Border"),Background:Rt("Validation.Orange.Background"),Badge:Rt("Validation.Orange.Badge")},Red:{Text:Rt("Validation.Red.Text"),Icon:Rt("Validation.Red.Icon"),Border:Rt("Validation.Red.Border"),Background:Rt("Validation.Red.Background")},Blue:{Text:Rt("Validation.Blue.Text"),Icon:Rt("Validation.Blue.Icon"),Border:Rt("Validation.Blue.Border"),Background:Rt("Validation.Blue.Background")}},Shadow:{Accent:Rt("Shadow.Accent"),Red:Rt("Shadow.Red"),Elevation:Rt("Shadow.Elevation")}},Lt=e=>Object.keys(l).reduce(((t,r)=>{const i=l[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Xt=Lt("max-width"),Gt=(Lt("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Mt=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ut=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Vt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Mt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qt=i(Ut)`
    animation-delay: -0.45s;
`,Zt=i(Ut)`
    animation-delay: -0.3s;
`,Yt=i(Ut)`
    animation-delay: -0.15s;
`,Jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Kt={collections:{base:{D1:{fontFamily:Jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Qt=e=>t=>{const r=t.theme,i=jt(Kt,r[Pt.textStyleScheme]);return r.options&&r.options.textStyle?Ot(i,e,r.options.textStyle):Ot(i,e)},er={D1:{fontFamily:Qt("D1.fontFamily"),fontSize:Qt("D1.fontSize"),fontWeight:Qt("D1.fontWeight"),lineHeight:Qt("D1.lineHeight"),letterSpacing:Qt("D1.letterSpacing")},D2:{fontFamily:Qt("D2.fontFamily"),fontSize:Qt("D2.fontSize"),fontWeight:Qt("D2.fontWeight"),lineHeight:Qt("D2.lineHeight"),letterSpacing:Qt("D2.letterSpacing")},D3:{fontFamily:Qt("D3.fontFamily"),fontSize:Qt("D3.fontSize"),fontWeight:Qt("D3.fontWeight"),lineHeight:Qt("D3.lineHeight"),letterSpacing:Qt("D3.letterSpacing")},D4:{fontFamily:Qt("D4.fontFamily"),fontSize:Qt("D4.fontSize"),fontWeight:Qt("D4.fontWeight"),lineHeight:Qt("D4.lineHeight"),letterSpacing:Qt("D4.letterSpacing")},DBody:{fontFamily:Qt("DBody.fontFamily"),fontSize:Qt("DBody.fontSize"),fontWeight:Qt("DBody.fontWeight"),lineHeight:Qt("DBody.lineHeight"),letterSpacing:Qt("DBody.letterSpacing")},H1:{fontFamily:Qt("H1.fontFamily"),fontSize:Qt("H1.fontSize"),fontWeight:Qt("H1.fontWeight"),lineHeight:Qt("H1.lineHeight"),letterSpacing:Qt("H1.letterSpacing")},H2:{fontFamily:Qt("H2.fontFamily"),fontSize:Qt("H2.fontSize"),fontWeight:Qt("H2.fontWeight"),lineHeight:Qt("H2.lineHeight"),letterSpacing:Qt("H2.letterSpacing")},H3:{fontFamily:Qt("H3.fontFamily"),fontSize:Qt("H3.fontSize"),fontWeight:Qt("H3.fontWeight"),lineHeight:Qt("H3.lineHeight"),letterSpacing:Qt("H3.letterSpacing")},H4:{fontFamily:Qt("H4.fontFamily"),fontSize:Qt("H4.fontSize"),fontWeight:Qt("H4.fontWeight"),lineHeight:Qt("H4.lineHeight"),letterSpacing:Qt("H4.letterSpacing")},H5:{fontFamily:Qt("H5.fontFamily"),fontSize:Qt("H5.fontSize"),fontWeight:Qt("H5.fontWeight"),lineHeight:Qt("H5.lineHeight"),letterSpacing:Qt("H5.letterSpacing")},H6:{fontFamily:Qt("H6.fontFamily"),fontSize:Qt("H6.fontSize"),fontWeight:Qt("H6.fontWeight"),lineHeight:Qt("H6.lineHeight"),letterSpacing:Qt("H6.letterSpacing")},Body:{fontFamily:Qt("Body.fontFamily"),fontSize:Qt("Body.fontSize"),fontWeight:Qt("Body.fontWeight"),lineHeight:Qt("Body.lineHeight"),letterSpacing:Qt("Body.letterSpacing")},BodySmall:{fontFamily:Qt("BodySmall.fontFamily"),fontSize:Qt("BodySmall.fontSize"),fontWeight:Qt("BodySmall.fontWeight"),lineHeight:Qt("BodySmall.lineHeight"),letterSpacing:Qt("BodySmall.letterSpacing")},XSmall:{fontFamily:Qt("XSmall.fontFamily"),fontSize:Qt("XSmall.fontSize"),fontWeight:Qt("XSmall.fontWeight"),lineHeight:Qt("XSmall.lineHeight"),letterSpacing:Qt("XSmall.letterSpacing")}},tr=e=>{switch(e){case 700:case"bold":return Jt.Bold;case 600:case"semibold":return Jt.Semibold;case 300:case"light":return Jt.Light;case 400:case"regular":return Jt.Regular;default:return""}},rr=(e,t)=>r=>{const i=er[e].fontFamily(r),n=er[e].fontWeight(r);return Object.values(Jt).includes(i)?a`
                font-family: ${tr(t)||tr(n)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${(ir(t)||n)??"normal"};
        `},ir=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nr=rr,ar=(e,t,r=!1)=>i=>{const n=er[e],o=n.fontSize(i);return a`
            ${rr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `;var sr;!function(e){e.D1=i.h1`
        ${e=>a`
                ${ar("D1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>a`
                ${ar("D2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>a`
                ${ar("D3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>a`
                ${ar("D4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>a`
                ${ar("DBody",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>a`
                ${ar("H1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>a`
                ${ar("H2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>a`
                ${ar("H3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>a`
                ${ar("H4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>a`
                ${ar("H5",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>a`
                ${ar("H6",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>a`
                ${ar("Body",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>a`
                ${ar("BodySmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>a`
                ${ar("XSmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>cr({...e,textStyle:"Body"}),Small:e=>cr({...e,textStyle:"BodySmall"})}}(sr||(sr={}));const lr=i.a`
    ${e=>a`
            ${ar(e.textStyle,e.weight)}
            color: ${Vt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Vt.Secondary};

                svg {
                    color: ${Vt.Secondary};
                }
            }
        `}
`,gr=i(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,cr=({external:t=!1,children:i,...n})=>e(lr,{...n,children:[i,t&&r(gr,{})]});var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const pr=i.button`
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
                    background-color: ${Vt.Neutral[8](e)};
                    border: 1px solid ${Vt.Primary(e)};

                    span {
                        color: ${Vt.Primary(e)};
                    }
                `;case"light":return a`
                    background-color: ${Vt.Neutral[8](e)};
                    border: 1px solid ${Vt.Neutral[5](e)};

                    span {
                        color: ${Vt.Primary(e)};
                    }
                `;case"disabled":return a`
                    background-color: ${Vt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Vt.Neutral[3](e)};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Vt.Secondary};
                        }
                    }
                `;default:return a`
                    background-color: ${Vt.Primary(e)};
                    border: 1px solid transparent;

                    ${Xt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Vt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${ar("H5","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${ar("H4","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `}
`,hr=i((({color:t,className:i,size:n=18})=>e(Gt,{className:i,$size:n,$color:t,children:[r(Ut,{id:"inner1",$size:n-2,$borderWidth:2}),r(qt,{id:"inner2",$size:n-2,$borderWidth:2}),r(Zt,{id:"inner3",$size:n-2,$borderWidth:2}),r(Yt,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Vt.Primary(e);break;case"disabled":t=Vt.Neutral[3](e);break;default:t=Vt.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ur={Default:o.forwardRef(((t,i)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default",...l}=t,g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return e(pr,{ref:i,"data-testid":l["data-testid"]||"button",disabled:a,...g,...l,children:[o&&r(hr,{...g}),r("span",{children:n})]})})),Small:o.forwardRef(((t,i)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default",...l}=t,g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return e(pr,{ref:i,"data-testid":l["data-testid"]||"button",disabled:a,...g,...l,children:[o&&r(hr,{...g,size:16}),r("span",{children:n})]})}))},fr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,mr=i.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${Xt.mobileL} {
        width: 20rem;
    }

    ${Xt.mobileM} {
        width: 18rem;
    }

    ${Xt.mobileS} {
        width: 15rem;
    }
`,yr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Fr=i(sr.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,vr=i.div`
    ${ar("Body","regular")} // Follow styling of Text.Body
    color: ${Vt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${nr("Body","semibold")}
    }

    a {
        ${ar("Body","semibold")}
        color: ${Vt.Primary};

        :hover,
        :active,
        :focus {
            color: ${Vt.Secondary};
        }
    }
`,Sr=i(ur.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Xt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,br=({type:t,img:i,title:n,description:a,actionButton:o,additionalProps:s,...l})=>{const g=w.get(t),c=l["data-testid"]||"error-display",d=()=>{if("maintenance"===t){const e=s;return s&&e.dateString?g.renderDescription(e):a||void 0}return a||void 0};if(!g)return null;const p={...g,...i&&{img:i},...n&&{title:n},...d()&&{description:d()}};return e(fr,{...l,"data-testid":c,children:[r(mr,{...p.img,alt:""}),e(yr,{children:[r(Fr,{"data-testid":`${c}--title`,children:p.title}),r(vr,{"data-testid":`${c}--description`,children:"string"==typeof p.description?r("p",{children:p.description}):p.description})]}),o&&(()=>{const e={children:"Proceed",...o};return r(Sr,{...e})})()]})};export{br as ErrorDisplay};
//# sourceMappingURL=index.js.map
