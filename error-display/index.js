import e,{jsxs as t,Fragment as r,jsx as i}from"react/jsx-runtime";import n,{keyframes as o,css as a}from"styled-components";import l from"react";const s={base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"},c={base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},d={base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},g={base:"https://assets.life.gov.sg/react-design-system/img/error/500.png",md:"https://assets.life.gov.sg/react-design-system/img/error/500@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/500@3x.png"},h={base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},p={base:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser.png",md:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/unsupported-browser@3x.png"},f=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 416w, ${r} 832w, ${i} 1248w`,src:i,sizes:"(max-width: 480px) 416px, (max-width: 1199px) 832px, 1248px"}},u=new Map([["400",{img:f(s),title:"Something went wrong",description:t(r,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 400 error."]})}],["403",{img:f(c),title:"Error loading page",description:t(r,{children:["You may not have permission to view this page. If you believe this is a mistake, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"}),"."]})}],["404",{img:f(d),title:"Page not found",description:t(r,{children:["If you entered or pasted the URL, check that it’s correct. If you followed a link on LifeSG, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","to let us know."]})}],["408",{img:f(s),title:"Something went wrong",description:t(r,{children:["Please refresh the page or try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg",children:"helpdesk@life.gov.sg"})," ","and let us know you received a HTTP 408 error."]})}],["500",{img:f(g),title:"Something went wrong",description:t(r,{children:["Please try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page in your email."]}),renderDescription:e=>t(r,{children:["Please try again later. If it’s still not working, email"," ",i("a",{href:"mailto:helpdesk@life.gov.sg","data-testid":"link--helpdesk",children:"helpdesk@life.gov.sg"})," and let us know you received a HTTP 500 error. Do include a screenshot of this page or this reference ID in your email: ",i("strong",{children:e.referenceId}),"."]})}],["503",{img:f(h),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["maintenance",{img:f(h),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:e=>t(r,{children:["This service is currently unavailable. Please try again after ",i("strong",{children:e.dateString}),"."]})}],["unsupported-browser",{img:f(p),title:"Browser not supported",description:"To use LifeSG, download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:f(p),title:"Browser not supported",description:"LifeSG works best with the latest version of Chrome, Edge, Firefox or Safari. If you continue with your browser, you may run into problems."}]]);var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=Array.isArray,v="object"==typeof m&&m&&m.Object===Object&&m,S="object"==typeof self&&self&&self.Object===Object&&self,b=v||S||Function("return this")(),$=b.Symbol,F=$,B=Object.prototype,H=B.hasOwnProperty,w=B.toString,D=F?F.toStringTag:void 0;var x=function(e){var t=H.call(e,D),r=e[D];try{e[D]=void 0;var i=!0}catch(e){}var n=w.call(e);return i&&(t?e[D]=r:delete e[D]),n},k=Object.prototype.toString;var z=x,_=function(e){return k.call(e)},C=$?$.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?z(e):_(e)};var W=E,T=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==W(e)},O=y,P=N,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var I=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!P(e))||(j.test(e)||!A.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=E,R=L;var G,X=function(e){if(!R(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},M=b["__core-js_shared__"],U=(G=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Z=function(e){return!!U&&U in e},Y=Function.prototype.toString;var q=X,J=Z,K=L,Q=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ee=/^\[object .+?Constructor\]$/,te=Function.prototype,re=Object.prototype,ie=te.toString,ne=re.hasOwnProperty,oe=RegExp("^"+ie.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!K(e)||J(e))&&(q(e)?oe:ee).test(Q(e))},le=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var r=le(e,t);return ae(r)?r:void 0},ce=se(Object,"create"),de=ce;var ge=function(){this.__data__=de?de(null):{},this.size=0};var he=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pe=ce,fe=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(pe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return fe.call(t,e)?t[e]:void 0},me=ce,ye=Object.prototype.hasOwnProperty;var ve=ce;var Se=ge,be=he,$e=ue,Fe=function(e){var t=this.__data__;return me?void 0!==t[e]:ye.call(t,e)},Be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ve&&void 0===t?"__lodash_hash_undefined__":t,this};function He(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}He.prototype.clear=Se,He.prototype.delete=be,He.prototype.get=$e,He.prototype.has=Fe,He.prototype.set=Be;var we=He;var De=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var ke=function(e,t){for(var r=e.length;r--;)if(xe(e[r][0],t))return r;return-1},ze=ke,_e=Array.prototype.splice;var Ce=ke;var Ee=ke;var We=ke;var Te=De,Ne=function(e){var t=this.__data__,r=ze(t,e);return!(r<0)&&(r==t.length-1?t.pop():_e.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=Ce(t,e);return r<0?void 0:t[r][1]},Pe=function(e){return Ee(this.__data__,e)>-1},Ae=function(e,t){var r=this.__data__,i=We(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}je.prototype.clear=Te,je.prototype.delete=Ne,je.prototype.get=Oe,je.prototype.has=Pe,je.prototype.set=Ae;var Ie=je,Le=se(b,"Map"),Ve=we,Re=Ie,Ge=Le;var Xe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Me=function(e,t){var r=e.__data__;return Xe(t)?r["string"==typeof t?"string":"hash"]:r.map},Ue=Me;var Ze=Me;var Ye=Me;var qe=Me;var Je=function(){this.size=0,this.__data__={hash:new Ve,map:new(Ge||Re),string:new Ve}},Ke=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Ze(this,e).get(e)},et=function(e){return Ye(this,e).has(e)},tt=function(e,t){var r=qe(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function rt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}rt.prototype.clear=Je,rt.prototype.delete=Ke,rt.prototype.get=Qe,rt.prototype.has=et,rt.prototype.set=tt;var it=rt;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],o=r.cache;if(o.has(n))return o.get(n);var a=e.apply(this,i);return r.cache=o.set(n,a)||o,a};return r.cache=new(nt.Cache||it),r}nt.Cache=it;var ot=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,st=function(e){var t=ot(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,r,i,n){t.push(i?n.replace(lt,"$1"):r||e)})),t}));var ct=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},dt=y,gt=N,ht=$?$.prototype:void 0,pt=ht?ht.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(dt(t))return ct(t,e)+"";if(gt(t))return pt?pt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=ft;var mt=y,yt=I,vt=st,St=function(e){return null==e?"":ut(e)};var bt=N;var $t=function(e,t){return mt(e)?e:yt(e,t)?[e]:vt(St(e))},Ft=function(e){if("string"==typeof e||bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var r=0,i=(t=$t(t,e)).length;null!=e&&r<i;)e=e[Ft(t[r++])];return r&&r==i?e:void 0};var Ht=function(e,t,r){var i=null==e?void 0:Bt(e,t);return void 0===i?r:i};const wt=(e,t,r)=>t?Ht(r,t)||Ht(e,t):r||e,Dt=(e,t)=>{const r=t||e.defaultValue;return Ht(e.collections,r)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(xt||(xt={}));const kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},zt=e=>t=>{const r=t.theme,i=Dt(kt,r[xt.colorScheme]);return r.options&&r.options.color?wt(i,e,r.options.color):wt(i,e)},_t={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")}}},Ct={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Et=e=>Object.keys(Ct).reduce(((t,r)=>{const i=Ct[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),Wt=Et("max-width"),Tt=(Et("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Nt=o`
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
    border-color: ${e=>e.$color||_t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Nt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Pt=n(Ot)`
    animation-delay: -0.45s;
`,At=n(Ot)`
    animation-delay: -0.3s;
`,jt=n(Ot)`
    animation-delay: -0.15s;
`,It={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Lt={collections:{base:{D1:{fontFamily:It.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:It.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:It.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:It.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:It.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:It.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:It.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:It.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:It.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:It.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:It.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:It.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:It.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:It.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,i=Dt(Lt,r[xt.textStyleScheme]);return r.options&&r.options.textStyle?wt(i,e,r.options.textStyle):wt(i,e)},Rt={D1:{fontFamily:Vt("D1.fontFamily"),fontSize:Vt("D1.fontSize"),fontWeight:Vt("D1.fontWeight"),lineHeight:Vt("D1.lineHeight"),letterSpacing:Vt("D1.letterSpacing")},D2:{fontFamily:Vt("D2.fontFamily"),fontSize:Vt("D2.fontSize"),fontWeight:Vt("D2.fontWeight"),lineHeight:Vt("D2.lineHeight"),letterSpacing:Vt("D2.letterSpacing")},D3:{fontFamily:Vt("D3.fontFamily"),fontSize:Vt("D3.fontSize"),fontWeight:Vt("D3.fontWeight"),lineHeight:Vt("D3.lineHeight"),letterSpacing:Vt("D3.letterSpacing")},D4:{fontFamily:Vt("D4.fontFamily"),fontSize:Vt("D4.fontSize"),fontWeight:Vt("D4.fontWeight"),lineHeight:Vt("D4.lineHeight"),letterSpacing:Vt("D4.letterSpacing")},DBody:{fontFamily:Vt("DBody.fontFamily"),fontSize:Vt("DBody.fontSize"),fontWeight:Vt("DBody.fontWeight"),lineHeight:Vt("DBody.lineHeight"),letterSpacing:Vt("DBody.letterSpacing")},H1:{fontFamily:Vt("H1.fontFamily"),fontSize:Vt("H1.fontSize"),fontWeight:Vt("H1.fontWeight"),lineHeight:Vt("H1.lineHeight"),letterSpacing:Vt("H1.letterSpacing")},H2:{fontFamily:Vt("H2.fontFamily"),fontSize:Vt("H2.fontSize"),fontWeight:Vt("H2.fontWeight"),lineHeight:Vt("H2.lineHeight"),letterSpacing:Vt("H2.letterSpacing")},H3:{fontFamily:Vt("H3.fontFamily"),fontSize:Vt("H3.fontSize"),fontWeight:Vt("H3.fontWeight"),lineHeight:Vt("H3.lineHeight"),letterSpacing:Vt("H3.letterSpacing")},H4:{fontFamily:Vt("H4.fontFamily"),fontSize:Vt("H4.fontSize"),fontWeight:Vt("H4.fontWeight"),lineHeight:Vt("H4.lineHeight"),letterSpacing:Vt("H4.letterSpacing")},H5:{fontFamily:Vt("H5.fontFamily"),fontSize:Vt("H5.fontSize"),fontWeight:Vt("H5.fontWeight"),lineHeight:Vt("H5.lineHeight"),letterSpacing:Vt("H5.letterSpacing")},H6:{fontFamily:Vt("H6.fontFamily"),fontSize:Vt("H6.fontSize"),fontWeight:Vt("H6.fontWeight"),lineHeight:Vt("H6.lineHeight"),letterSpacing:Vt("H6.letterSpacing")},Body:{fontFamily:Vt("Body.fontFamily"),fontSize:Vt("Body.fontSize"),fontWeight:Vt("Body.fontWeight"),lineHeight:Vt("Body.lineHeight"),letterSpacing:Vt("Body.letterSpacing")},BodySmall:{fontFamily:Vt("BodySmall.fontFamily"),fontSize:Vt("BodySmall.fontSize"),fontWeight:Vt("BodySmall.fontWeight"),lineHeight:Vt("BodySmall.lineHeight"),letterSpacing:Vt("BodySmall.letterSpacing")},XSmall:{fontFamily:Vt("XSmall.fontFamily"),fontSize:Vt("XSmall.fontSize"),fontWeight:Vt("XSmall.fontWeight"),lineHeight:Vt("XSmall.lineHeight"),letterSpacing:Vt("XSmall.letterSpacing")}},Gt=e=>{switch(e){case 700:case"bold":return It.Bold;case 600:case"semibold":return It.Semibold;case 300:case"light":return It.Light;case 400:case"regular":return It.Regular;default:return""}},Xt=(e,t)=>r=>{const i=Rt[e].fontFamily(r),n=Rt[e].fontWeight(r);return Object.values(It).includes(i)?a`
                font-family: ${Gt(t)||Gt(n)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${(Mt(t)||n)??"normal"};
        `},Mt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ut=Xt,Zt=(e,t,r=!1)=>i=>{const n=Rt[e],o=n.fontSize(i);return a`
            ${Xt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Yt=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `;var qt,Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});var Kt=e;const Qt=e=>Kt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Kt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var er;Qt.displayName="ExternalIcon",qt=Jt.ExternalIcon=Qt,function(e){e.D1=n.h1`
        ${e=>a`
                ${Zt("D1",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${Zt("D2",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${Zt("D3",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${Zt("D4",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${Zt("DBody",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${Zt("H1",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${Zt("H2",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${Zt("H3",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${Zt("H4",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${Zt("H5",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${Zt("H6",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${Zt("Body",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${Zt("BodySmall",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${Zt("XSmall",e.weight,e.paragraph)}
                color: ${_t.Neutral[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ir({...e,textStyle:"Body"}),Small:e=>ir({...e,textStyle:"BodySmall"})}}(er||(er={}));const tr=n.a`
    ${e=>a`
            ${Zt(e.textStyle,e.weight)}
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
`,rr=n(qt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ir=({external:e=!1,children:r,...n})=>t(tr,{...n,children:[r,e&&i(rr,{})]});var nr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nr||(nr={}));const or=n.button`
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
                    background-color: ${_t.Neutral[8](e)};
                    border: 1px solid ${_t.Primary(e)};

                    span {
                        color: ${_t.Primary(e)};
                    }
                `;case"light":return a`
                    background-color: ${_t.Neutral[8](e)};
                    border: 1px solid ${_t.Neutral[5](e)};

                    span {
                        color: ${_t.Primary(e)};
                    }
                `;case"disabled":return a`
                    background-color: ${_t.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${_t.Neutral[3](e)};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_t.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${_t.Secondary};
                        }
                    }
                `;default:return a`
                    background-color: ${_t.Primary(e)};
                    border: 1px solid transparent;

                    ${Wt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${_t.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${Zt("H5","semibold")}
                    }

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${Zt("H4","semibold")}
                    }

                    ${Wt.mobileS} {
                        height: auto;
                    }
                `}
`,ar=n((({color:e,className:r,size:n=18})=>t(Tt,{className:r,$size:n,$color:e,children:[i(Ot,{id:"inner1",$size:n-2,$borderWidth:2}),i(Pt,{id:"inner2",$size:n-2,$borderWidth:2}),i(At,{id:"inner3",$size:n-2,$borderWidth:2}),i(jt,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=_t.Primary(e);break;case"disabled":t=_t.Neutral[3](e);break;default:t=_t.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,lr={Default:l.forwardRef(((e,r)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=e,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return t(or,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&i(ar,{...c}),i("span",{children:n})]})})),Small:l.forwardRef(((e,r)=>{const{children:n,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=e,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return t(or,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&i(ar,{...c,size:16}),i("span",{children:n})]})}))},sr=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,cr=n.img`
    position: relative;
    width: 26rem;
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
`,dr=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,gr=n(er.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,hr=n.div`
    ${Zt("Body","regular")} // Follow styling of Text.Body
    color: ${_t.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Ut("Body","semibold")}
    }

    a {
        ${Zt("Body","semibold")}
        color: ${_t.Primary};

        :hover,
        :active,
        :focus {
            color: ${_t.Secondary};
        }
    }
`,pr=n(lr.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${Wt.mobileL} {
        width: 100%;
    }
`,fr=({type:e,img:r,title:n,description:o,actionButton:a,additionalProps:l,...s})=>{const c=u.get(e),d=s["data-testid"]||"error-display",g=()=>{switch(e){case"maintenance":{const e=l;return l&&e.dateString?c.renderDescription(e):o||void 0}case"500":{const e=l;return l&&e.referenceId?c.renderDescription(e):o||void 0}default:return o||void 0}};if(!c)return null;const h={...c,...r&&{img:r},...n&&{title:n},...g()&&{description:g()}};return t(sr,{...s,"data-testid":d,children:[i(cr,{...h.img,alt:"error"}),t(dr,{children:[i(gr,{"data-testid":`${d}--title`,children:h.title}),i(hr,{"data-testid":`${d}--description`,children:"string"==typeof h.description?i("p",{children:h.description}):h.description})]}),a&&(()=>{const e={children:"Proceed",...a};return i(pr,{...e})})()]})};export{fr as ErrorDisplay};
//# sourceMappingURL=index.js.map
