import e,{jsxs as t,Fragment as r,jsx as i}from"react/jsx-runtime";import n,{keyframes as a,css as o}from"styled-components";import s from"react";const l={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},g={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},c={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},u={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},m={base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},y={base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},F={base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},v={base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},S={base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},b={base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},B={base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},$={base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},x={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},D={base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"},H=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${l.mobileL}px) 400px, (max-width: ${l.tablet}px) 800px, 1200px`}},w=new Map([["400",{img:H({base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"}),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:H(g),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:H(c),title:"404 No Page Found",description:"No page found."}],["408",{img:H(d),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:H(p),title:"Error state",description:"A generic error state illustration."}],["502",{img:H(h),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:H(u),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:H(f),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:H(m),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:H(v),title:"Link Error",description:"When a link is expired."}],["logout",{img:H(S),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:H(y),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:H(F),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:H(u),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:e=>t(r,{children:["This service is currently unavailable. Please try again after ",i("strong",{children:e.dateString}),"."]})}],["no-item-found",{img:H(b),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:H(B),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:H($),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:H(x),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:H(x),title:"Error state",description:"A generic error state illustration."}],["warning",{img:H(D),title:"Warning states",description:"Generic warning and error state illustrations."}]]);var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},z=Array.isArray,_="object"==typeof E&&E&&E.Object===Object&&E,C="object"==typeof self&&self&&self.Object===Object&&self,A=_||C||Function("return this")(),k=A.Symbol,W=k,T=Object.prototype,N=T.hasOwnProperty,O=T.toString,j=W?W.toStringTag:void 0;var P=function(e){var t=N.call(e,j),r=e[j];try{e[j]=void 0;var i=!0}catch(e){}var n=O.call(e);return i&&(t?e[j]=r:delete e[j]),n},V=Object.prototype.toString;var I=P,R=function(e){return V.call(e)},L=k?k.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?I(e):R(e)};var G=X,M=function(e){return null!=e&&"object"==typeof e};var U=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==G(e)},Z=z,q=U,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/;var K=function(e,t){if(Z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!q(e))||(J.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ee=X,te=Q;var re,ie=function(e){if(!te(e))return!1;var t=ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ne=A["__core-js_shared__"],ae=(re=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+re:"";var oe=function(e){return!!ae&&ae in e},se=Function.prototype.toString;var le=ie,ge=oe,ce=Q,de=function(e){if(null!=e){try{return se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=/^\[object .+?Constructor\]$/,he=Function.prototype,ue=Object.prototype,fe=he.toString,me=ue.hasOwnProperty,ye=RegExp("^"+fe.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Fe=function(e){return!(!ce(e)||ge(e))&&(le(e)?ye:pe).test(de(e))},ve=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var r=ve(e,t);return Fe(r)?r:void 0},be=Se(Object,"create"),Be=be;var $e=function(){this.__data__=Be?Be(null):{},this.size=0};var xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=be,He=Object.prototype.hasOwnProperty;var we=function(e){var t=this.__data__;if(De){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return He.call(t,e)?t[e]:void 0},Ee=be,ze=Object.prototype.hasOwnProperty;var _e=be;var Ce=$e,Ae=xe,ke=we,We=function(e){var t=this.__data__;return Ee?void 0!==t[e]:ze.call(t,e)},Te=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=_e&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ne.prototype.clear=Ce,Ne.prototype.delete=Ae,Ne.prototype.get=ke,Ne.prototype.has=We,Ne.prototype.set=Te;var Oe=Ne;var je=function(){this.__data__=[],this.size=0};var Pe=function(e,t){return e===t||e!=e&&t!=t};var Ve=function(e,t){for(var r=e.length;r--;)if(Pe(e[r][0],t))return r;return-1},Ie=Ve,Re=Array.prototype.splice;var Le=Ve;var Xe=Ve;var Ge=Ve;var Me=je,Ue=function(e){var t=this.__data__,r=Ie(t,e);return!(r<0)&&(r==t.length-1?t.pop():Re.call(t,r,1),--this.size,!0)},Ze=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},qe=function(e){return Xe(this.__data__,e)>-1},Ye=function(e,t){var r=this.__data__,i=Ge(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Je.prototype.clear=Me,Je.prototype.delete=Ue,Je.prototype.get=Ze,Je.prototype.has=qe,Je.prototype.set=Ye;var Ke=Je,Qe=Se(A,"Map"),et=Oe,tt=Ke,rt=Qe;var it=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var r=e.__data__;return it(t)?r["string"==typeof t?"string":"hash"]:r.map},at=nt;var ot=nt;var st=nt;var lt=nt;var gt=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},ct=function(e){var t=at(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return ot(this,e).get(e)},pt=function(e){return st(this,e).has(e)},ht=function(e,t){var r=lt(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function ut(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ut.prototype.clear=gt,ut.prototype.delete=ct,ut.prototype.get=dt,ut.prototype.has=pt,ut.prototype.set=ht;var ft=ut;function mt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],a=r.cache;if(a.has(n))return a.get(n);var o=e.apply(this,i);return r.cache=a.set(n,o)||a,o};return r.cache=new(mt.Cache||ft),r}mt.Cache=ft;var yt=mt;var Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,St=function(e){var t=yt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ft,(function(e,r,i,n){t.push(i?n.replace(vt,"$1"):r||e)})),t}));var bt=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},Bt=z,$t=U,xt=k?k.prototype:void 0,Dt=xt?xt.toString:void 0;var Ht=function e(t){if("string"==typeof t)return t;if(Bt(t))return bt(t,e)+"";if($t(t))return Dt?Dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},wt=Ht;var Et=z,zt=K,_t=St,Ct=function(e){return null==e?"":wt(e)};var At=U;var kt=function(e,t){return Et(e)?e:zt(e,t)?[e]:_t(Ct(e))},Wt=function(e){if("string"==typeof e||At(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Tt=function(e,t){for(var r=0,i=(t=kt(t,e)).length;null!=e&&r<i;)e=e[Wt(t[r++])];return r&&r==i?e:void 0};var Nt=function(e,t,r){var i=null==e?void 0:Tt(e,t);return void 0===i?r:i};const Ot=(e,t,r)=>t?Nt(r,t)||Nt(e,t):r||e,jt=(e,t)=>{const r=t||e.defaultValue;return Nt(e.collections,r)};var Pt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Pt||(Pt={}));const Vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,i=jt(Vt,r[Pt.colorScheme]);return r.options&&r.options.color?Ot(i,e,r.options.color):Ot(i,e)},Rt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")},Blue:{Text:It("Validation.Blue.Text"),Icon:It("Validation.Blue.Icon"),Border:It("Validation.Blue.Border"),Background:It("Validation.Blue.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}},Lt=e=>Object.keys(l).reduce(((t,r)=>{const i=l[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Xt=Lt("max-width"),Gt=(Lt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Mt=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ut=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Rt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Mt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Zt=n(Ut)`
    animation-delay: -0.45s;
`,qt=n(Ut)`
    animation-delay: -0.3s;
`,Yt=n(Ut)`
    animation-delay: -0.15s;
`,Jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Kt={collections:{base:{D1:{fontFamily:Jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Qt=e=>t=>{const r=t.theme,i=jt(Kt,r[Pt.textStyleScheme]);return r.options&&r.options.textStyle?Ot(i,e,r.options.textStyle):Ot(i,e)},er={D1:{fontFamily:Qt("D1.fontFamily"),fontSize:Qt("D1.fontSize"),fontWeight:Qt("D1.fontWeight"),lineHeight:Qt("D1.lineHeight"),letterSpacing:Qt("D1.letterSpacing")},D2:{fontFamily:Qt("D2.fontFamily"),fontSize:Qt("D2.fontSize"),fontWeight:Qt("D2.fontWeight"),lineHeight:Qt("D2.lineHeight"),letterSpacing:Qt("D2.letterSpacing")},D3:{fontFamily:Qt("D3.fontFamily"),fontSize:Qt("D3.fontSize"),fontWeight:Qt("D3.fontWeight"),lineHeight:Qt("D3.lineHeight"),letterSpacing:Qt("D3.letterSpacing")},D4:{fontFamily:Qt("D4.fontFamily"),fontSize:Qt("D4.fontSize"),fontWeight:Qt("D4.fontWeight"),lineHeight:Qt("D4.lineHeight"),letterSpacing:Qt("D4.letterSpacing")},DBody:{fontFamily:Qt("DBody.fontFamily"),fontSize:Qt("DBody.fontSize"),fontWeight:Qt("DBody.fontWeight"),lineHeight:Qt("DBody.lineHeight"),letterSpacing:Qt("DBody.letterSpacing")},H1:{fontFamily:Qt("H1.fontFamily"),fontSize:Qt("H1.fontSize"),fontWeight:Qt("H1.fontWeight"),lineHeight:Qt("H1.lineHeight"),letterSpacing:Qt("H1.letterSpacing")},H2:{fontFamily:Qt("H2.fontFamily"),fontSize:Qt("H2.fontSize"),fontWeight:Qt("H2.fontWeight"),lineHeight:Qt("H2.lineHeight"),letterSpacing:Qt("H2.letterSpacing")},H3:{fontFamily:Qt("H3.fontFamily"),fontSize:Qt("H3.fontSize"),fontWeight:Qt("H3.fontWeight"),lineHeight:Qt("H3.lineHeight"),letterSpacing:Qt("H3.letterSpacing")},H4:{fontFamily:Qt("H4.fontFamily"),fontSize:Qt("H4.fontSize"),fontWeight:Qt("H4.fontWeight"),lineHeight:Qt("H4.lineHeight"),letterSpacing:Qt("H4.letterSpacing")},H5:{fontFamily:Qt("H5.fontFamily"),fontSize:Qt("H5.fontSize"),fontWeight:Qt("H5.fontWeight"),lineHeight:Qt("H5.lineHeight"),letterSpacing:Qt("H5.letterSpacing")},H6:{fontFamily:Qt("H6.fontFamily"),fontSize:Qt("H6.fontSize"),fontWeight:Qt("H6.fontWeight"),lineHeight:Qt("H6.lineHeight"),letterSpacing:Qt("H6.letterSpacing")},Body:{fontFamily:Qt("Body.fontFamily"),fontSize:Qt("Body.fontSize"),fontWeight:Qt("Body.fontWeight"),lineHeight:Qt("Body.lineHeight"),letterSpacing:Qt("Body.letterSpacing")},BodySmall:{fontFamily:Qt("BodySmall.fontFamily"),fontSize:Qt("BodySmall.fontSize"),fontWeight:Qt("BodySmall.fontWeight"),lineHeight:Qt("BodySmall.lineHeight"),letterSpacing:Qt("BodySmall.letterSpacing")},XSmall:{fontFamily:Qt("XSmall.fontFamily"),fontSize:Qt("XSmall.fontSize"),fontWeight:Qt("XSmall.fontWeight"),lineHeight:Qt("XSmall.lineHeight"),letterSpacing:Qt("XSmall.letterSpacing")}},tr=e=>{switch(e){case 700:case"bold":return Jt.Bold;case 600:case"semibold":return Jt.Semibold;case 300:case"light":return Jt.Light;case 400:case"regular":return Jt.Regular;default:return""}},rr=(e,t)=>r=>{const i=er[e].fontFamily(r),n=er[e].fontWeight(r);return Object.values(Jt).includes(i)?o`
                font-family: ${tr(t)||tr(n)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${(ir(t)||n)??"normal"};
        `},ir=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nr=rr,ar=(e,t,r=!1)=>i=>{const n=er[e],a=n.fontSize(i);return o`
            ${rr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var sr,lr={};Object.defineProperty(lr,"__esModule",{value:!0});var gr=e;const cr=e=>gr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:gr.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var dr;cr.displayName="ExternalIcon",sr=lr.ExternalIcon=cr,function(e){e.D1=n.h1`
        ${e=>o`
                ${ar("D1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>o`
                ${ar("D2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>o`
                ${ar("D3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>o`
                ${ar("D4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>o`
                ${ar("DBody",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>o`
                ${ar("H1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>o`
                ${ar("H2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>o`
                ${ar("H3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>o`
                ${ar("H4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>o`
                ${ar("H5",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>o`
                ${ar("H6",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>o`
                ${ar("Body",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>o`
                ${ar("BodySmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>o`
                ${ar("XSmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ur({...e,textStyle:"Body"}),Small:e=>ur({...e,textStyle:"BodySmall"})}}(dr||(dr={}));const pr=n.a`
    ${e=>o`
            ${ar(e.textStyle,e.weight)}
            color: ${Rt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Rt.Secondary};

                svg {
                    color: ${Rt.Secondary};
                }
            }
        `}
`,hr=n(sr)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ur=({external:e=!1,children:r,...n})=>t(pr,{...n,children:[r,e&&i(hr,{})]});var fr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(fr||(fr={}));const mr=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return o`
                    background-color: ${Rt.Neutral[8](e)};
                    border: 1px solid ${Rt.Primary(e)};

                    span {
                        color: ${Rt.Primary(e)};
                    }
                `;case"light":return o`
                    background-color: ${Rt.Neutral[8](e)};
                    border: 1px solid ${Rt.Neutral[5](e)};

                    span {
                        color: ${Rt.Primary(e)};
                    }
                `;case"disabled":return o`
                    background-color: ${Rt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Rt.Neutral[3](e)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Rt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Rt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${Rt.Primary(e)};
                    border: 1px solid transparent;

                    ${Xt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Rt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${ar("H5","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${ar("H4","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `}
`,yr=n((({color:e,className:r,size:n=18})=>t(Gt,{className:r,$size:n,$color:e,children:[i(Ut,{id:"inner1",$size:n-2,$borderWidth:2}),i(Zt,{id:"inner2",$size:n-2,$borderWidth:2}),i(qt,{id:"inner3",$size:n-2,$borderWidth:2}),i(Yt,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Rt.Primary(e);break;case"disabled":t=Rt.Neutral[3](e);break;default:t=Rt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Fr={Default:s.forwardRef(((e,r)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default",...l}=e,g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return t(mr,{ref:r,"data-testid":l["data-testid"]||"button",disabled:a,...g,...l,children:[o&&i(yr,{...g}),i("span",{children:n})]})})),Small:s.forwardRef(((e,r)=>{const{children:n,disabled:a=!1,loading:o=!1,styleType:s="default",...l}=e,g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return t(mr,{ref:r,"data-testid":l["data-testid"]||"button",disabled:a,...g,...l,children:[o&&i(yr,{...g,size:16}),i("span",{children:n})]})}))},vr=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Sr=n.img`
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
`,br=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Br=n(dr.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,$r=n.div`
    ${ar("Body","regular")} // Follow styling of Text.Body
    color: ${Rt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${nr("Body","semibold")}
    }

    a {
        ${ar("Body","semibold")}
        color: ${Rt.Primary};

        :hover,
        :active,
        :focus {
            color: ${Rt.Secondary};
        }
    }
`,xr=n(Fr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Xt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Dr=({type:e,img:r,title:n,description:a,actionButton:o,additionalProps:s,...l})=>{const g=w.get(e),c=l["data-testid"]||"error-display",d=()=>{if("maintenance"===e){const e=s;return s&&e.dateString?g.renderDescription(e):a||void 0}return a||void 0};if(!g)return null;const p={...g,...r&&{img:r},...n&&{title:n},...d()&&{description:d()}};return t(vr,{...l,"data-testid":c,children:[i(Sr,{...p.img,alt:""}),t(br,{children:[i(Br,{"data-testid":`${c}--title`,children:p.title}),i($r,{"data-testid":`${c}--description`,children:"string"==typeof p.description?i("p",{children:p.description}):p.description})]}),o&&(()=>{const e={children:"Proceed",...o};return i(xr,{...e})})()]})};export{Dr as ErrorDisplay};
//# sourceMappingURL=index.js.map
