import e,{jsxs as t,Fragment as r,jsx as i}from"react/jsx-runtime";import n,{keyframes as o,css as a}from"styled-components";import l from"react";const s={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},c={base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},g={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},f={base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},u=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 416w, ${r} 832w, ${i} 1248w`,src:i,sizes:`(max-width: ${s.mobileL}px) 416px, (max-width: ${s.tablet}px) 832px, 1248px`}},m=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${s.mobileL}px) 400px, (max-width: ${s.tablet}px) 800px, 1200px`}},y=new Map([["400",{img:u(c),title:"Something went wrong",description:t(r,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 400 error."]})}],["403",{img:u(d),title:"Error loading page",description:t(r,{children:["You may not have permission to view this page. If you believe this is a mistake, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"}),"."]})}],["404",{img:u(g),title:"Page not found",description:t(r,{children:["If you entered or pasted the URL, check that it’s correct. If you followed a link on LifeSG, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","to let us know."]})}],["408",{img:u(c),title:"Something went wrong",description:t(r,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 408 error."]})}],["500",{img:m(h),title:"Something went wrong",description:t(r,{children:["Please try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page in your email."]}),renderDescription:e=>t(r,{children:["Please try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page or this reference ID in your email: ",i("strong",{children:e.referenceId}),"."]})}],["503",{img:u(p),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["maintenance",{img:u(p),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:e=>t(r,{children:["This service is currently unavailable. Please try again after ",i("strong",{children:e.dateString}),"."]})}],["unsupported-browser",{img:m(f),title:"Browser not supported",description:"To use LifeSG, download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:m(f),title:"Browser not supported",description:"LifeSG works best with the latest version of Chrome, Edge, Firefox or Safari. If you continue with your browser, you may run into problems."}]]);var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v=Array.isArray,$="object"==typeof S&&S&&S.Object===Object&&S,b="object"==typeof self&&self&&self.Object===Object&&self,F=$||b||Function("return this")(),B=F.Symbol,H=B,w=Object.prototype,D=w.hasOwnProperty,x=w.toString,k=H?H.toStringTag:void 0;var z=function(e){var t=D.call(e,k),r=e[k];try{e[k]=void 0;var i=!0}catch(e){}var n=x.call(e);return i&&(t?e[k]=r:delete e[k]),n},_=Object.prototype.toString;var C=z,E=function(e){return _.call(e)},T=B?B.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?C(e):E(e)};var N=W,A=function(e){return null!=e&&"object"==typeof e};var O=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==N(e)},P=v,j=O,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var V=function(e,t){if(P(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!j(e))||(L.test(e)||!I.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},G=W,X=R;var M,U=function(e){if(!X(e))return!1;var t=G(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Z=F["__core-js_shared__"],Y=(M=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var q=function(e){return!!Y&&Y in e},J=Function.prototype.toString;var K=U,Q=q,ee=R,te=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},re=/^\[object .+?Constructor\]$/,ie=Function.prototype,ne=Object.prototype,oe=ie.toString,ae=ne.hasOwnProperty,le=RegExp("^"+oe.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var se=function(e){return!(!ee(e)||Q(e))&&(K(e)?le:re).test(te(e))},ce=function(e,t){return null==e?void 0:e[t]};var de=function(e,t){var r=ce(e,t);return se(r)?r:void 0},ge=de(Object,"create"),he=ge;var pe=function(){this.__data__=he?he(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=ge,me=Object.prototype.hasOwnProperty;var ye=function(e){var t=this.__data__;if(ue){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return me.call(t,e)?t[e]:void 0},Se=ge,ve=Object.prototype.hasOwnProperty;var $e=ge;var be=pe,Fe=fe,Be=ye,He=function(e){var t=this.__data__;return Se?void 0!==t[e]:ve.call(t,e)},we=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}De.prototype.clear=be,De.prototype.delete=Fe,De.prototype.get=Be,De.prototype.has=He,De.prototype.set=we;var xe=De;var ke=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t};var _e=function(e,t){for(var r=e.length;r--;)if(ze(e[r][0],t))return r;return-1},Ce=_e,Ee=Array.prototype.splice;var Te=_e;var We=_e;var Ne=_e;var Ae=ke,Oe=function(e){var t=this.__data__,r=Ce(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ee.call(t,r,1),--this.size,!0)},Pe=function(e){var t=this.__data__,r=Te(t,e);return r<0?void 0:t[r][1]},je=function(e){return We(this.__data__,e)>-1},Ie=function(e,t){var r=this.__data__,i=Ne(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Le(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Le.prototype.clear=Ae,Le.prototype.delete=Oe,Le.prototype.get=Pe,Le.prototype.has=je,Le.prototype.set=Ie;var Ve=Le,Re=de(F,"Map"),Ge=xe,Xe=Ve,Me=Re;var Ue=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ze=function(e,t){var r=e.__data__;return Ue(t)?r["string"==typeof t?"string":"hash"]:r.map},Ye=Ze;var qe=Ze;var Je=Ze;var Ke=Ze;var Qe=function(){this.size=0,this.__data__={hash:new Ge,map:new(Me||Xe),string:new Ge}},et=function(e){var t=Ye(this,e).delete(e);return this.size-=t?1:0,t},tt=function(e){return qe(this,e).get(e)},rt=function(e){return Je(this,e).has(e)},it=function(e,t){var r=Ke(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}nt.prototype.clear=Qe,nt.prototype.delete=et,nt.prototype.get=tt,nt.prototype.has=rt,nt.prototype.set=it;var ot=nt;function at(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],o=r.cache;if(o.has(n))return o.get(n);var a=e.apply(this,i);return r.cache=o.set(n,a)||o,a};return r.cache=new(at.Cache||ot),r}at.Cache=ot;var lt=at;var st=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/\\(\\)?/g,dt=function(e){var t=lt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(st,(function(e,r,i,n){t.push(i?n.replace(ct,"$1"):r||e)})),t}));var gt=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},ht=v,pt=O,ft=B?B.prototype:void 0,ut=ft?ft.toString:void 0;var mt=function e(t){if("string"==typeof t)return t;if(ht(t))return gt(t,e)+"";if(pt(t))return ut?ut.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},yt=mt;var St=v,vt=V,$t=dt,bt=function(e){return null==e?"":yt(e)};var Ft=O;var Bt=function(e,t){return St(e)?e:vt(e,t)?[e]:$t(bt(e))},Ht=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var wt=function(e,t){for(var r=0,i=(t=Bt(t,e)).length;null!=e&&r<i;)e=e[Ht(t[r++])];return r&&r==i?e:void 0};var Dt=function(e,t,r){var i=null==e?void 0:wt(e,t);return void 0===i?r:i};const xt=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,kt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(zt||(zt={}));const _t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Ct=e=>t=>{const r=t.theme,i=kt(_t,r[zt.colorScheme]);return r.options&&r.options.color?xt(i,e,r.options.color):xt(i,e)},Et={Brand:{1:Ct("Brand.1"),2:Ct("Brand.2"),3:Ct("Brand.3"),4:Ct("Brand.4"),5:Ct("Brand.5"),6:Ct("Brand.6")},Primary:Ct("Primary"),PrimaryDark:Ct("PrimaryDark"),Secondary:Ct("Secondary"),Accent:{Light:{1:Ct("Accent.Light.1"),2:Ct("Accent.Light.2"),3:Ct("Accent.Light.3"),4:Ct("Accent.Light.4"),5:Ct("Accent.Light.5"),6:Ct("Accent.Light.6")},Dark:{1:Ct("Accent.Dark.1"),2:Ct("Accent.Dark.2"),3:Ct("Accent.Dark.3")}},Neutral:{1:Ct("Neutral.1"),2:Ct("Neutral.2"),3:Ct("Neutral.3"),4:Ct("Neutral.4"),5:Ct("Neutral.5"),6:Ct("Neutral.6"),7:Ct("Neutral.7"),8:Ct("Neutral.8")},Validation:{Green:{Text:Ct("Validation.Green.Text"),Icon:Ct("Validation.Green.Icon"),Border:Ct("Validation.Green.Border"),Background:Ct("Validation.Green.Background")},Orange:{Text:Ct("Validation.Orange.Text"),Icon:Ct("Validation.Orange.Icon"),Border:Ct("Validation.Orange.Border"),Background:Ct("Validation.Orange.Background"),Badge:Ct("Validation.Orange.Badge")},Red:{Text:Ct("Validation.Red.Text"),Icon:Ct("Validation.Red.Icon"),Border:Ct("Validation.Red.Border"),Background:Ct("Validation.Red.Background")}},Shadow:{Accent:Ct("Shadow.Accent"),Red:Ct("Shadow.Red")}},Tt=e=>Object.keys(s).reduce(((t,r)=>{const i=s[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Wt=Tt("max-width"),Nt=(Tt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),At=o`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ot=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Et.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${At} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Pt=n(Ot)`
    animation-delay: -0.45s;
`,jt=n(Ot)`
    animation-delay: -0.3s;
`,It=n(Ot)`
    animation-delay: -0.15s;
`,Lt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Vt={collections:{base:{D1:{fontFamily:Lt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Rt=e=>t=>{const r=t.theme,i=kt(Vt,r[zt.textStyleScheme]);return r.options&&r.options.textStyle?xt(i,e,r.options.textStyle):xt(i,e)},Gt={D1:{fontFamily:Rt("D1.fontFamily"),fontSize:Rt("D1.fontSize"),fontWeight:Rt("D1.fontWeight"),lineHeight:Rt("D1.lineHeight"),letterSpacing:Rt("D1.letterSpacing")},D2:{fontFamily:Rt("D2.fontFamily"),fontSize:Rt("D2.fontSize"),fontWeight:Rt("D2.fontWeight"),lineHeight:Rt("D2.lineHeight"),letterSpacing:Rt("D2.letterSpacing")},D3:{fontFamily:Rt("D3.fontFamily"),fontSize:Rt("D3.fontSize"),fontWeight:Rt("D3.fontWeight"),lineHeight:Rt("D3.lineHeight"),letterSpacing:Rt("D3.letterSpacing")},D4:{fontFamily:Rt("D4.fontFamily"),fontSize:Rt("D4.fontSize"),fontWeight:Rt("D4.fontWeight"),lineHeight:Rt("D4.lineHeight"),letterSpacing:Rt("D4.letterSpacing")},DBody:{fontFamily:Rt("DBody.fontFamily"),fontSize:Rt("DBody.fontSize"),fontWeight:Rt("DBody.fontWeight"),lineHeight:Rt("DBody.lineHeight"),letterSpacing:Rt("DBody.letterSpacing")},H1:{fontFamily:Rt("H1.fontFamily"),fontSize:Rt("H1.fontSize"),fontWeight:Rt("H1.fontWeight"),lineHeight:Rt("H1.lineHeight"),letterSpacing:Rt("H1.letterSpacing")},H2:{fontFamily:Rt("H2.fontFamily"),fontSize:Rt("H2.fontSize"),fontWeight:Rt("H2.fontWeight"),lineHeight:Rt("H2.lineHeight"),letterSpacing:Rt("H2.letterSpacing")},H3:{fontFamily:Rt("H3.fontFamily"),fontSize:Rt("H3.fontSize"),fontWeight:Rt("H3.fontWeight"),lineHeight:Rt("H3.lineHeight"),letterSpacing:Rt("H3.letterSpacing")},H4:{fontFamily:Rt("H4.fontFamily"),fontSize:Rt("H4.fontSize"),fontWeight:Rt("H4.fontWeight"),lineHeight:Rt("H4.lineHeight"),letterSpacing:Rt("H4.letterSpacing")},H5:{fontFamily:Rt("H5.fontFamily"),fontSize:Rt("H5.fontSize"),fontWeight:Rt("H5.fontWeight"),lineHeight:Rt("H5.lineHeight"),letterSpacing:Rt("H5.letterSpacing")},H6:{fontFamily:Rt("H6.fontFamily"),fontSize:Rt("H6.fontSize"),fontWeight:Rt("H6.fontWeight"),lineHeight:Rt("H6.lineHeight"),letterSpacing:Rt("H6.letterSpacing")},Body:{fontFamily:Rt("Body.fontFamily"),fontSize:Rt("Body.fontSize"),fontWeight:Rt("Body.fontWeight"),lineHeight:Rt("Body.lineHeight"),letterSpacing:Rt("Body.letterSpacing")},BodySmall:{fontFamily:Rt("BodySmall.fontFamily"),fontSize:Rt("BodySmall.fontSize"),fontWeight:Rt("BodySmall.fontWeight"),lineHeight:Rt("BodySmall.lineHeight"),letterSpacing:Rt("BodySmall.letterSpacing")},XSmall:{fontFamily:Rt("XSmall.fontFamily"),fontSize:Rt("XSmall.fontSize"),fontWeight:Rt("XSmall.fontWeight"),lineHeight:Rt("XSmall.lineHeight"),letterSpacing:Rt("XSmall.letterSpacing")}},Xt=e=>{switch(e){case 700:case"bold":return Lt.Bold;case 600:case"semibold":return Lt.Semibold;case 300:case"light":return Lt.Light;case 400:case"regular":return Lt.Regular;default:return""}},Mt=(e,t)=>r=>{const i=Gt[e].fontFamily(r),n=Gt[e].fontWeight(r);return Object.values(Lt).includes(i)?a`
                font-family: ${Xt(t)||Xt(n)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${(Ut(t)||n)??"normal"};
        `},Ut=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=Mt,Yt=(e,t,r=!1)=>i=>{const n=Gt[e],o=n.fontSize(i);return a`
            ${Mt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},qt=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `;var Jt,Kt={};Object.defineProperty(Kt,"__esModule",{value:!0});var Qt=e;const er=e=>Qt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Qt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var tr;er.displayName="ExternalIcon",Jt=Kt.ExternalIcon=er,function(e){e.D1=n.h1`
        ${e=>a`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${qt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>nr({...e,textStyle:"Body"}),Small:e=>nr({...e,textStyle:"BodySmall"})}}(tr||(tr={}));const rr=n.a`
    ${e=>a`
            ${Yt(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,ir=n(Jt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,nr=({external:e=!1,children:r,...n})=>t(rr,{...n,children:[r,e&&i(ir,{})]});var or;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(or||(or={}));const ar=n.button`
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
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Primary(e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"light":return a`
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Neutral[5](e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"disabled":return a`
                    background-color: ${Et.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Et.Neutral[3](e)};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Et.Secondary};
                        }
                    }
                `;default:return a`
                    background-color: ${Et.Primary(e)};
                    border: 1px solid transparent;

                    ${Wt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Et.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${Yt("H5","semibold")}
                    }

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${Yt("H4","semibold")}
                    }

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `}
`,lr=n((({color:e,className:r,size:n=18})=>t(Nt,{className:r,$size:n,$color:e,children:[i(Ot,{id:"inner1",$size:n-2,$borderWidth:2}),i(Pt,{id:"inner2",$size:n-2,$borderWidth:2}),i(jt,{id:"inner3",$size:n-2,$borderWidth:2}),i(It,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Et.Primary(e);break;case"disabled":t=Et.Neutral[3](e);break;default:t=Et.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,sr={Default:l.forwardRef(((e,r)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=e,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return t(ar,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&i(lr,{...c}),i("span",{children:n})]})})),Small:l.forwardRef(((e,r)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=e,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return t(ar,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&i(lr,{...c,size:16}),i("span",{children:n})]})}))},cr=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,dr=n.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${Wt.mobileL} {
        width: 20rem;
    }

    ${Wt.mobileM} {
        width: 18rem;
    }

    ${Wt.mobileS} {
        width: 15rem;
    }
`,gr=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,hr=n(tr.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,pr=n.div`
    ${Yt("Body","regular")} // Follow styling of Text.Body
    color: ${Et.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Zt("Body","semibold")}
    }

    a {
        ${Yt("Body","semibold")}
        color: ${Et.Primary};

        :hover,
        :active,
        :focus {
            color: ${Et.Secondary};
        }
    }
`,fr=n(sr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Wt.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,ur=({type:e,img:r,title:n,description:o,actionButton:a,additionalProps:l,...s})=>{const c=y.get(e),d=s["data-testid"]||"error-display",g=()=>{switch(e){case"maintenance":{const e=l;return l&&e.dateString?c.renderDescription(e):o||void 0}case"500":{const e=l;return l&&e.referenceId?c.renderDescription(e):o||void 0}default:return o||void 0}};if(!c)return null;const h={...c,...r&&{img:r},...n&&{title:n},...g()&&{description:g()}};return t(cr,{...s,"data-testid":d,children:[i(dr,{...h.img,alt:""}),t(gr,{children:[i(hr,{"data-testid":`${d}--title`,children:h.title}),i(pr,{"data-testid":`${d}--description`,children:"string"==typeof h.description?i("p",{children:h.description}):h.description})]}),a&&(()=>{const e={children:"Proceed",...a};return i(fr,{...e})})()]})};export{ur as ErrorDisplay};
//# sourceMappingURL=index.js.map
