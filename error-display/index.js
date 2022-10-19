import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import i,{keyframes as n,css as o}from"styled-components";import a from"react";const l={base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"},s={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},c={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/500.png",md:"https://assets.life.gov.sg/react-design-system/img/error/500@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/500@3x.png"},g={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser.png",md:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser@3x.png"},p=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 416w, ${r} 832w, ${i} 1248w`,src:i,sizes:"(max-width: 480px) 416px, (max-width: 1199px) 832px, 1248px"}},f=new Map([["400",{img:p(l),title:"Something went wrong",description:e(t,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 400 error."]})}],["403",{img:p(s),title:"Error loading page",description:e(t,{children:["You may not have permission to view this page. If you believe this is a mistake, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"}),"."]})}],["404",{img:p(c),title:"Page not found",description:e(t,{children:["If you entered or pasted the URL, check that it’s correct. If you followed a link on LifeSG, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","to let us know."]})}],["408",{img:p(l),title:"Something went wrong",description:e(t,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 408 error."]})}],["500",{img:p(d),title:"Something went wrong",description:e(t,{children:["Please try again later. If it’s still not working, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page in your email."]}),renderDescription:i=>e(t,{children:["Please try again later. If it’s still not working, email"," ",r("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page or this reference ID in your email: ",r("strong",{children:i.referenceId}),"."]})}],["503",{img:p(g),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["maintenance",{img:p(g),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:i=>e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]})}],["unsupported-browser",{img:p(h),title:"Browser not supported",description:"To use LifeSG, download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:p(h),title:"Browser not supported",description:"LifeSG works best with the latest version of Chrome, Edge, Firefox or Safari. If you continue with your browser, you may run into problems."}]]);var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,y="object"==typeof u&&u&&u.Object===Object&&u,v="object"==typeof self&&self&&self.Object===Object&&self,S=y||v||Function("return this")(),$=S.Symbol,b=$,F=Object.prototype,w=F.hasOwnProperty,B=F.toString,H=b?b.toStringTag:void 0;var D=function(e){var t=w.call(e,H),r=e[H];try{e[H]=void 0;var i=!0}catch(e){}var n=B.call(e);return i&&(t?e[H]=r:delete e[H]),n},x=Object.prototype.toString;var z=D,k=function(e){return x.call(e)},_=$?$.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?z(e):k(e)};var E=C,W=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==E(e)},T=m,L=N,P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var O=function(e,t){if(T(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!L(e))||(A.test(e)||!P.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=C,R=j;var V,M=function(e){if(!R(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=S["__core-js_shared__"],X=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var Z=function(e){return!!X&&X in e},U=Function.prototype.toString;var Y=M,q=Z,J=j,K=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,re=ee.toString,ie=te.hasOwnProperty,ne=RegExp("^"+re.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!J(e)||q(e))&&(Y(e)?ne:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var r=ae(e,t);return oe(r)?r:void 0},se=le(Object,"create"),ce=se;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,pe=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(he){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pe.call(t,e)?t[e]:void 0},ue=se,me=Object.prototype.hasOwnProperty;var ye=se;var ve=de,Se=ge,$e=fe,be=function(e){var t=this.__data__;return ue?void 0!==t[e]:me.call(t,e)},Fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function we(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}we.prototype.clear=ve,we.prototype.delete=Se,we.prototype.get=$e,we.prototype.has=be,we.prototype.set=Fe;var Be=we;var He=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var xe=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},ze=xe,ke=Array.prototype.splice;var _e=xe;var Ce=xe;var Ee=xe;var We=He,Ne=function(e){var t=this.__data__,r=ze(t,e);return!(r<0)&&(r==t.length-1?t.pop():ke.call(t,r,1),--this.size,!0)},Te=function(e){var t=this.__data__,r=_e(t,e);return r<0?void 0:t[r][1]},Le=function(e){return Ce(this.__data__,e)>-1},Pe=function(e,t){var r=this.__data__,i=Ee(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Ae.prototype.clear=We,Ae.prototype.delete=Ne,Ae.prototype.get=Te,Ae.prototype.has=Le,Ae.prototype.set=Pe;var Oe=Ae,je=le(S,"Map"),Ie=Be,Re=Oe,Ve=je;var Me=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ge=function(e,t){var r=e.__data__;return Me(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ge;var Ze=Ge;var Ue=Ge;var Ye=Ge;var qe=function(){this.size=0,this.__data__={hash:new Ie,map:new(Ve||Re),string:new Ie}},Je=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ze(this,e).get(e)},Qe=function(e){return Ue(this,e).has(e)},et=function(e,t){var r=Ye(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}tt.prototype.clear=qe,tt.prototype.delete=Je,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var rt=tt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],o=r.cache;if(o.has(n))return o.get(n);var a=e.apply(this,i);return r.cache=o.set(n,a)||o,a};return r.cache=new(it.Cache||rt),r}it.Cache=rt;var nt=it;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,lt=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,i,n){t.push(i?n.replace(at,"$1"):r||e)})),t}));var st=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},ct=m,dt=N,gt=$?$.prototype:void 0,ht=gt?gt.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(ct(t))return st(t,e)+"";if(dt(t))return ht?ht.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ft=pt;var ut=m,mt=O,yt=lt,vt=function(e){return null==e?"":ft(e)};var St=N;var $t=function(e,t){return ut(e)?e:mt(e,t)?[e]:yt(vt(e))},bt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var r=0,i=(t=$t(t,e)).length;null!=e&&r<i;)e=e[bt(t[r++])];return r&&r==i?e:void 0};var wt=function(e,t,r){var i=null==e?void 0:Ft(e,t);return void 0===i?r:i};const Bt=(e,t,r)=>t?wt(r,t)||wt(e,t):r||e,Ht=(e,t)=>{const r=t||e.defaultValue;return wt(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Dt||(Dt={}));const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},zt=e=>t=>{const r=t.theme,i=Ht(xt,r[Dt.colorScheme]);return r.options&&r.options.color?Bt(i,e,r.options.color):Bt(i,e)},kt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")}}},_t={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(_t).reduce(((t,r)=>{const i=_t[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Et=Ct("max-width"),Wt=(Ct("min-width"),i.div`
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
`,Tt=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Nt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Lt=i(Tt)`
    animation-delay: -0.45s;
`,Pt=i(Tt)`
    animation-delay: -0.3s;
`,At=i(Tt)`
    animation-delay: -0.15s;
`,Ot={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},jt={collections:{base:{D1:{fontFamily:Ot.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,i=Ht(jt,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?Bt(i,e,r.options.textStyle):Bt(i,e)},Rt={D1:{fontFamily:It("D1.fontFamily"),fontSize:It("D1.fontSize"),fontWeight:It("D1.fontWeight"),lineHeight:It("D1.lineHeight"),letterSpacing:It("D1.letterSpacing")},D2:{fontFamily:It("D2.fontFamily"),fontSize:It("D2.fontSize"),fontWeight:It("D2.fontWeight"),lineHeight:It("D2.lineHeight"),letterSpacing:It("D2.letterSpacing")},D3:{fontFamily:It("D3.fontFamily"),fontSize:It("D3.fontSize"),fontWeight:It("D3.fontWeight"),lineHeight:It("D3.lineHeight"),letterSpacing:It("D3.letterSpacing")},D4:{fontFamily:It("D4.fontFamily"),fontSize:It("D4.fontSize"),fontWeight:It("D4.fontWeight"),lineHeight:It("D4.lineHeight"),letterSpacing:It("D4.letterSpacing")},DBody:{fontFamily:It("DBody.fontFamily"),fontSize:It("DBody.fontSize"),fontWeight:It("DBody.fontWeight"),lineHeight:It("DBody.lineHeight"),letterSpacing:It("DBody.letterSpacing")},H1:{fontFamily:It("H1.fontFamily"),fontSize:It("H1.fontSize"),fontWeight:It("H1.fontWeight"),lineHeight:It("H1.lineHeight"),letterSpacing:It("H1.letterSpacing")},H2:{fontFamily:It("H2.fontFamily"),fontSize:It("H2.fontSize"),fontWeight:It("H2.fontWeight"),lineHeight:It("H2.lineHeight"),letterSpacing:It("H2.letterSpacing")},H3:{fontFamily:It("H3.fontFamily"),fontSize:It("H3.fontSize"),fontWeight:It("H3.fontWeight"),lineHeight:It("H3.lineHeight"),letterSpacing:It("H3.letterSpacing")},H4:{fontFamily:It("H4.fontFamily"),fontSize:It("H4.fontSize"),fontWeight:It("H4.fontWeight"),lineHeight:It("H4.lineHeight"),letterSpacing:It("H4.letterSpacing")},H5:{fontFamily:It("H5.fontFamily"),fontSize:It("H5.fontSize"),fontWeight:It("H5.fontWeight"),lineHeight:It("H5.lineHeight"),letterSpacing:It("H5.letterSpacing")},H6:{fontFamily:It("H6.fontFamily"),fontSize:It("H6.fontSize"),fontWeight:It("H6.fontWeight"),lineHeight:It("H6.lineHeight"),letterSpacing:It("H6.letterSpacing")},Body:{fontFamily:It("Body.fontFamily"),fontSize:It("Body.fontSize"),fontWeight:It("Body.fontWeight"),lineHeight:It("Body.lineHeight"),letterSpacing:It("Body.letterSpacing")},BodySmall:{fontFamily:It("BodySmall.fontFamily"),fontSize:It("BodySmall.fontSize"),fontWeight:It("BodySmall.fontWeight"),lineHeight:It("BodySmall.lineHeight"),letterSpacing:It("BodySmall.letterSpacing")},XSmall:{fontFamily:It("XSmall.fontFamily"),fontSize:It("XSmall.fontSize"),fontWeight:It("XSmall.fontWeight"),lineHeight:It("XSmall.lineHeight"),letterSpacing:It("XSmall.letterSpacing")}},Vt=e=>{switch(e){case 700:case"bold":return Ot.Bold;case 600:case"semibold":return Ot.Semibold;case 300:case"light":return Ot.Light;case 400:case"regular":return Ot.Regular;default:return""}},Mt=(e,t)=>r=>{const i=Rt[e].fontFamily(r),n=Rt[e].fontWeight(r);return Object.values(Ot).includes(i)?o`
                font-family: ${Vt(t)||Vt(n)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${(Gt(t)||n)??"normal"};
        `},Gt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=Mt,Zt=(e,t,r=!1)=>i=>{const n=Rt[e],a=n.fontSize(i);return o`
            ${Mt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Ut=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `,Yt=i.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${kt.Primary};
`,qt=e=>r(Yt,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:r("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Jt=e=>r(Yt,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:r("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Kt=e=>r(Yt,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:r("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Qt=e=>r(Yt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:r("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),er=e=>r(Yt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:r("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),tr=i.span`
    font-size: 1rem;
`;var rr;!function(e){e.D1=i.h1`
        ${e=>o`
                ${Zt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${Zt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${Zt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${Zt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${Zt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${Zt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${Zt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${Zt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${Zt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${Zt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${Zt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${Zt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${Zt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${Zt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Ut(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>or({...e,textStyle:"Body"}),Small:e=>or({...e,textStyle:"BodySmall"})}}(rr||(rr={}));const ir=i.a`
    ${e=>o`
            ${Zt(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};
            }
        `}
`,nr=i((({type:e,...t})=>{switch(e){case"arrow-right":return r(qt,{...t});case"info":return r(Kt,{...t});case"cross":return r(Jt,{...t});case"play":return r(Qt,{...t});case"search":return r(er,{...t});default:{const i=`sgds-icon sgds-icon-${e}`,n=t.className?`${i} ${t.className}`:i;return r(tr,{...t,className:n})}}}))`
    margin-left: 0.4rem;
`,or=({external:t=!1,children:i,...n})=>e(ir,{...n,children:[i,t&&r(nr,{type:"external"})]});var ar;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ar||(ar={}));const lr=i.button`
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
                    background-color: ${kt.Neutral[8](e)};
                    border: 1px solid ${kt.Primary(e)};

                    span {
                        color: ${kt.Primary(e)};
                    }
                `;case"light":return o`
                    background-color: ${kt.Neutral[8](e)};
                    border: 1px solid ${kt.Neutral[5](e)};

                    span {
                        color: ${kt.Primary(e)};
                    }
                `;case"disabled":return o`
                    background-color: ${kt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${kt.Neutral[3](e)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${kt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${kt.Primary(e)};
                    border: 1px solid transparent;

                    ${Et.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${kt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${Zt("H5","semibold")}
                    }

                    ${Et.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Zt("H4","semibold")}
                    }

                    ${Et.mobileS} {
                        height: auto;
                    }
                `}
`,sr=i((({color:t,className:i,size:n=18})=>e(Wt,{className:i,$size:n,$color:t,children:[r(Tt,{id:"inner1",$size:n-2,$borderWidth:2}),r(Lt,{id:"inner2",$size:n-2,$borderWidth:2}),r(Pt,{id:"inner3",$size:n-2,$borderWidth:2}),r(At,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=kt.Primary(e);break;case"disabled":t=kt.Neutral[3](e);break;default:t=kt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cr={Default:a.forwardRef(((t,i)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=t,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return e(lr,{ref:i,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&r(sr,{...c}),r("span",{children:n})]})})),Small:a.forwardRef(((t,i)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=t,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return e(lr,{ref:i,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&r(sr,{...c,size:16}),r("span",{children:n})]})}))},dr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,gr=i.img`
    position: relative;
    width: 26rem;
    height: auto;

    ${Et.mobileL} {
        width: 20rem;
    }

    ${Et.mobileM} {
        width: 18rem;
    }

    ${Et.mobileS} {
        width: 15rem;
    }
`,hr=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,pr=i(rr.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,fr=i.div`
    ${Zt("Body","regular")} // Follow styling of Text.Body
    color: ${kt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Xt("Body","semibold")}
    }

    a {
        ${Zt("Body","semibold")}
        color: ${kt.Primary};

        :hover,
        :active,
        :focus {
            color: ${kt.Secondary};
        }
    }
`,ur=i(cr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Et.mobileL} {
        width: 100%;
    }
`,mr=({type:t,img:i,title:n,description:o,actionButton:a,additionalProps:l,...s})=>{const c=f.get(t),d=s["data-testid"]||"error-display",g=()=>{switch(t){case"maintenance":{const e=l;return l&&e.dateString?c.renderDescription(e):o||void 0}case"500":{const e=l;return l&&e.referenceId?c.renderDescription(e):o||void 0}default:return o||void 0}};if(!c)return null;const h={...c,...i&&{img:i},...n&&{title:n},...g()&&{description:g()}};return e(dr,{...s,"data-testid":d,children:[r(gr,{...h.img,alt:"error"}),e(hr,{children:[r(pr,{"data-testid":`${d}--title`,children:h.title}),r(fr,{"data-testid":`${d}--description`,children:"string"==typeof h.description?r("p",{children:h.description}):h.description})]}),a&&(()=>{const e={children:"Proceed",...a};return r(ur,{...e})})()]})};export{mr as ErrorDisplay};
//# sourceMappingURL=index.js.map
