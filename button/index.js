import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r from"react";import i,{keyframes as a,css as o}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,d="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),u=g.Symbol,s=u,f=Object.prototype,p=f.hasOwnProperty,y=f.toString,m=s?s.toStringTag:void 0;var S=function(e){var t=p.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var i=y.call(e);return r&&(t?e[m]=n:delete e[m]),i},F=Object.prototype.toString;var $=S,b=function(e){return F.call(e)},B=u?u.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":B&&B in Object(e)?$(e):b(e)};var H=v,D=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||D(e)&&"[object Symbol]"==H(e)},z=c,w=_,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var C=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!w(e))||(E.test(e)||!x.test(e)||null!=t&&e in Object(t))};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=v,A=k;var N,O=function(e){if(!A(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=g["__core-js_shared__"],j=(N=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var V=function(e){return!!j&&j in e},I=Function.prototype.toString;var P=O,R=V,L=k,X=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,Z=Object.prototype,U=M.toString,Y=Z.hasOwnProperty,q=RegExp("^"+U.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(e){return!(!L(e)||R(e))&&(P(e)?q:G).test(X(e))},K=function(e,t){return null==e?void 0:e[t]};var Q=function(e,t){var n=K(e,t);return J(n)?n:void 0},ee=Q(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var re=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ee,ae=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ae.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var de=ee;var he=ne,ge=re,ue=oe,se=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=he,pe.prototype.delete=ge,pe.prototype.get=ue,pe.prototype.has=se,pe.prototype.set=fe;var ye=pe;var me=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var Fe=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},$e=Fe,be=Array.prototype.splice;var Be=Fe;var ve=Fe;var He=Fe;var De=me,_e=function(e){var t=this.__data__,n=$e(t,e);return!(n<0)&&(n==t.length-1?t.pop():be.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=Be(t,e);return n<0?void 0:t[n][1]},we=function(e){return ve(this.__data__,e)>-1},xe=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=De,Ee.prototype.delete=_e,Ee.prototype.get=ze,Ee.prototype.has=we,Ee.prototype.set=xe;var Ce=Ee,ke=Q(g,"Map"),We=ye,Ae=Ce,Ne=ke;var Oe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return Oe(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Te;var Ve=Te;var Ie=Te;var Pe=Te;var Re=function(){this.size=0,this.__data__={hash:new We,map:new(Ne||Ae),string:new We}},Le=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Ge=function(e){return Ie(this,e).has(e)},Me=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Re,Ze.prototype.delete=Le,Ze.prototype.get=Xe,Ze.prototype.has=Ge,Ze.prototype.set=Me;var Ue=Ze;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ye.Cache||Ue),n}Ye.Cache=Ue;var qe=Ye;var Je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ke=/\\(\\)?/g,Qe=function(e){var t=qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Je,(function(e,n,r,i){t.push(r?i.replace(Ke,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},tt=c,nt=_,rt=u?u.prototype:void 0,it=rt?rt.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ot=at;var lt=c,ct=C,dt=Qe,ht=function(e){return null==e?"":ot(e)};var gt=_;var ut=function(e,t){return lt(e)?e:ct(e,t)?[e]:dt(ht(e))},st=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[st(t[n++])];return n&&n==r?e:void 0};var pt=function(e,t,n){var r=null==e?void 0:ft(e,t);return void 0===r?n:r};const yt=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,mt=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const Ft={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},$t=e=>t=>{const n=t.theme,r=mt(Ft,n[St.colorScheme]);return n.options&&n.options.color?yt(r,e,n.options.color):yt(r,e)},bt={Brand:{1:$t("Brand.1"),2:$t("Brand.2"),3:$t("Brand.3"),4:$t("Brand.4"),5:$t("Brand.5"),6:$t("Brand.6")},Primary:$t("Primary"),PrimaryDark:$t("PrimaryDark"),Secondary:$t("Secondary"),Accent:{Light:{1:$t("Accent.Light.1"),2:$t("Accent.Light.2"),3:$t("Accent.Light.3"),4:$t("Accent.Light.4"),5:$t("Accent.Light.5"),6:$t("Accent.Light.6")},Dark:{1:$t("Accent.Dark.1"),2:$t("Accent.Dark.2"),3:$t("Accent.Dark.3")}},Neutral:{1:$t("Neutral.1"),2:$t("Neutral.2"),3:$t("Neutral.3"),4:$t("Neutral.4"),5:$t("Neutral.5"),6:$t("Neutral.6"),7:$t("Neutral.7"),8:$t("Neutral.8")},Validation:{Green:{Text:$t("Validation.Green.Text"),Icon:$t("Validation.Green.Icon"),Border:$t("Validation.Green.Border"),Background:$t("Validation.Green.Background")},Orange:{Text:$t("Validation.Orange.Text"),Icon:$t("Validation.Orange.Icon"),Border:$t("Validation.Orange.Border"),Background:$t("Validation.Orange.Background"),Badge:$t("Validation.Orange.Badge")},Red:{Text:$t("Validation.Red.Text"),Icon:$t("Validation.Red.Icon"),Border:$t("Validation.Red.Border"),Background:$t("Validation.Red.Background")},Blue:{Text:$t("Validation.Blue.Text"),Icon:$t("Validation.Blue.Icon"),Border:$t("Validation.Blue.Border"),Background:$t("Validation.Blue.Background")}},Shadow:{Accent:$t("Shadow.Accent"),Red:$t("Shadow.Red"),Elevation:$t("Shadow.Elevation")}},Bt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vt=e=>Object.keys(Bt).reduce(((t,n)=>{const r=Bt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ht=vt("max-width"),Dt=(vt("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),_t=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zt=i.div`
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
    animation: ${_t} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,wt=i(zt)`
    animation-delay: -0.45s;
`,xt=i(zt)`
    animation-delay: -0.3s;
`,Et=i(zt)`
    animation-delay: -0.15s;
`,Ct={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},kt={collections:{base:{D1:{fontFamily:Ct.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ct.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ct.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ct.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ct.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ct.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ct.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ct.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ct.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ct.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const n=t.theme,r=mt(kt,n[St.textStyleScheme]);return n.options&&n.options.textStyle?yt(r,e,n.options.textStyle):yt(r,e)},At={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Nt=e=>{switch(e){case 700:case"bold":return Ct.Bold;case 600:case"semibold":return Ct.Semibold;case 300:case"light":return Ct.Light;case 400:case"regular":return Ct.Regular;default:return""}},Ot=(e,t)=>n=>{const r=At[e].fontFamily(n),i=At[e].fontWeight(n);return Object.values(Ct).includes(r)?o`
                font-family: ${Nt(t)||Nt(i)||r};
                font-weight: normal !important;
            `:o`
            font-family: ${r};
            font-weight: ${(Tt(t)||i)??"normal"};
        `},Tt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jt=(e,t,n=!1)=>r=>{const i=At[e],a=i.fontSize(r);return o`
            ${Ot(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Vt=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `;var It,Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});var Rt=e;const Lt=e=>Rt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Rt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Xt;Lt.displayName="ExternalIcon",It=Pt.ExternalIcon=Lt,function(e){e.D1=i.h1`
        ${e=>o`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Vt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Zt({...e,textStyle:"Body"}),Small:e=>Zt({...e,textStyle:"BodySmall"})}}(Xt||(Xt={}));const Gt=i.a`
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
`,Mt=i(It)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=({external:e=!1,children:r,...i})=>t(Gt,{...i,children:[r,e&&n(Mt,{})]});var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Yt=i.button`
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

                    ${Ht.mobileL} {
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

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${jt("H4","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `}
`,qt=i((({color:e,className:r,size:i=18})=>t(Dt,{className:r,$size:i,$color:e,children:[n(zt,{id:"inner1",$size:i-2,$borderWidth:2}),n(wt,{id:"inner2",$size:i-2,$borderWidth:2}),n(xt,{id:"inner3",$size:i-2,$borderWidth:2}),n(Et,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=bt.Primary(e);break;case"disabled":t=bt.Neutral[3](e);break;default:t=bt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Jt={Default:r.forwardRef(((e,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return t(Yt,{ref:r,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&n(qt,{...d}),n("span",{children:i})]})})),Small:r.forwardRef(((e,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return t(Yt,{ref:r,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&n(qt,{...d,size:16}),n("span",{children:i})]})}))};export{Jt as Button};
//# sourceMappingURL=index.js.map
