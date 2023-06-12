import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import n from"react";import a,{keyframes as i,css as o}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,d="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),u=g.Symbol,s=u,f=Object.prototype,p=f.hasOwnProperty,y=f.toString,F=s?s.toStringTag:void 0;var m=function(e){var t=p.call(e,F),r=e[F];try{e[F]=void 0;var n=!0}catch(e){}var a=y.call(e);return n&&(t?e[F]=r:delete e[F]),a},S=Object.prototype.toString;var B=m,b=function(e){return S.call(e)},$=u?u.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?B(e):b(e)};var D=v,H=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==D(e)},_=c,z=E,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var w=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!z(e))||(x.test(e)||!C.test(e)||null!=t&&e in Object(t))};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},A=v,W=k;var N,O=function(e){if(!W(e))return!1;var t=A(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=g["__core-js_shared__"],j=(N=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var V=function(e){return!!j&&j in e},I=Function.prototype.toString;var P=O,R=V,L=k,X=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,Z=Object.prototype,U=M.toString,Y=Z.hasOwnProperty,q=RegExp("^"+U.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(e){return!(!L(e)||R(e))&&(P(e)?q:G).test(X(e))},K=function(e,t){return null==e?void 0:e[t]};var Q=function(e,t){var r=K(e,t);return J(r)?r:void 0},ee=Q(Object,"create"),te=ee;var re=function(){this.__data__=te?te(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ee,ie=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ae){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ie.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var de=ee;var he=re,ge=ne,ue=oe,se=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pe.prototype.clear=he,pe.prototype.delete=ge,pe.prototype.get=ue,pe.prototype.has=se,pe.prototype.set=fe;var ye=pe;var Fe=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var r=e.length;r--;)if(me(e[r][0],t))return r;return-1},Be=Se,be=Array.prototype.splice;var $e=Se;var ve=Se;var De=Se;var He=Fe,Ee=function(e){var t=this.__data__,r=Be(t,e);return!(r<0)&&(r==t.length-1?t.pop():be.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=$e(t,e);return r<0?void 0:t[r][1]},ze=function(e){return ve(this.__data__,e)>-1},Ce=function(e,t){var r=this.__data__,n=De(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xe.prototype.clear=He,xe.prototype.delete=Ee,xe.prototype.get=_e,xe.prototype.has=ze,xe.prototype.set=Ce;var we=xe,ke=Q(g,"Map"),Ae=ye,We=we,Ne=ke;var Oe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var r=e.__data__;return Oe(t)?r["string"==typeof t?"string":"hash"]:r.map},je=Te;var Ve=Te;var Ie=Te;var Pe=Te;var Re=function(){this.size=0,this.__data__={hash:new Ae,map:new(Ne||We),string:new Ae}},Le=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Ge=function(e){return Ie(this,e).has(e)},Me=function(e,t){var r=Pe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ze.prototype.clear=Re,Ze.prototype.delete=Le,Ze.prototype.get=Xe,Ze.prototype.has=Ge,Ze.prototype.set=Me;var Ue=Ze;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(Ye.Cache||Ue),r}Ye.Cache=Ue;var qe=Ye;var Je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ke=/\\(\\)?/g,Qe=function(e){var t=qe(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Je,(function(e,r,n,a){t.push(n?a.replace(Ke,"$1"):r||e)})),t}));var et=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},tt=c,rt=E,nt=u?u.prototype:void 0,at=nt?nt.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(rt(t))return at?at.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ot=it;var lt=c,ct=w,dt=Qe,ht=function(e){return null==e?"":ot(e)};var gt=E;var ut=function(e,t){return lt(e)?e:ct(e,t)?[e]:dt(ht(e))},st=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var r=0,n=(t=ut(t,e)).length;null!=e&&r<n;)e=e[st(t[r++])];return r&&r==n?e:void 0};var pt=function(e,t,r){var n=null==e?void 0:ft(e,t);return void 0===n?r:n};const yt=(e,t,r)=>t?pt(r,t)||pt(e,t):r||e,Ft=(e,t)=>{const r=t||e.defaultValue;return pt(e.collections,r)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const r=t.theme,n=Ft(St,r[mt.colorScheme]);return r.options&&r.options.color?yt(n,e,r.options.color):yt(n,e)},bt={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},$t={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vt=e=>Object.keys($t).reduce(((t,r)=>{const n=$t[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Dt=vt("max-width"),Ht=(vt("min-width"),a.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Et=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_t=a.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||bt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Et} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,zt=a(_t)`
    animation-delay: -0.45s;
`,Ct=a(_t)`
    animation-delay: -0.3s;
`,xt=a(_t)`
    animation-delay: -0.15s;
`,wt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},kt={collections:{base:{D1:{fontFamily:wt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:wt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:wt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:wt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:wt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:wt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const r=t.theme,n=Ft(kt,r[mt.textStyleScheme]);return r.options&&r.options.textStyle?yt(n,e,r.options.textStyle):yt(n,e)},Wt={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},Nt=e=>{switch(e){case 700:case"bold":return wt.Bold;case 600:case"semibold":return wt.Semibold;case 300:case"light":return wt.Light;case 400:case"regular":return wt.Regular;default:return""}},Ot=(e,t)=>r=>{const n=Wt[e].fontFamily(r),a=Wt[e].fontWeight(r);return Object.values(wt).includes(n)?o`
                font-family: ${Nt(t)||Nt(a)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(Tt(t)||a)??"normal"};
        `},Tt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jt=(e,t,r=!1)=>n=>{const a=Wt[e],i=a.fontSize(n);return o`
            ${Ot(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Vt=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var It,Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});var Rt=e;const Lt=e=>Rt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Rt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Xt;Lt.displayName="ExternalIcon",It=Pt.ExternalIcon=Lt,function(e){e.D1=a.h1`
        ${e=>o`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>o`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>o`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>o`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>o`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>o`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>o`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>o`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>o`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>o`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>o`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>o`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>o`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>o`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Zt({...e,textStyle:"Body"}),Small:e=>Zt({...e,textStyle:"BodySmall"})}}(Xt||(Xt={}));const Gt=a.a`
    ${e=>o`
            ${jt(e.textStyle,e.weight)}
            color: ${bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${bt.Secondary};

                svg {
                    color: ${bt.Secondary};
                }
            }
        `}
`,Mt=a(It)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=({external:e=!1,children:n,...a})=>t(Gt,{...a,children:[n,e&&r(Mt,{})]});var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Yt=a.button`
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
                    background-color: ${bt.Neutral[8](e)};
                    border: 1px solid ${bt.Primary(e)};

                    span {
                        color: ${bt.Primary(e)};
                    }
                `;case"light":return o`
                    background-color: ${bt.Neutral[8](e)};
                    border: 1px solid ${bt.Neutral[5](e)};

                    span {
                        color: ${bt.Primary(e)};
                    }
                `;case"disabled":return o`
                    background-color: ${bt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${bt.Neutral[3](e)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${bt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${bt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${bt.Primary(e)};
                    border: 1px solid transparent;

                    ${Dt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${bt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${jt("H5","semibold")}
                    }

                    ${Dt.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${jt("H4","semibold")}
                    }

                    ${Dt.mobileS} {
                        height: auto;
                    }
                `}
`,qt=a((({color:e,className:n,size:a=18})=>t(Ht,{className:n,$size:a,$color:e,children:[r(_t,{id:"inner1",$size:a-2,$borderWidth:2}),r(zt,{id:"inner2",$size:a-2,$borderWidth:2}),r(Ct,{id:"inner3",$size:a-2,$borderWidth:2}),r(xt,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=bt.Primary(e);break;case"disabled":t=bt.Neutral[3](e);break;default:t=bt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Jt={Default:n.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default"};return t(Yt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[o&&r(qt,{...d}),r("span",{children:a})]})})),Small:n.forwardRef(((e,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small"};return t(Yt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[o&&r(qt,{...d,size:16}),r("span",{children:a})]})}))};export{Jt as Button};
//# sourceMappingURL=index.js.map
