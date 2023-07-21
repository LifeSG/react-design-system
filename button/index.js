import{jsxs as e,jsx as t}from"react/jsx-runtime";import r from"react";import n,{keyframes as a,css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,d="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),u=g.Symbol,s=u,f=Object.prototype,p=f.hasOwnProperty,y=f.toString,F=s?s.toStringTag:void 0;var m=function(e){var t=p.call(e,F),r=e[F];try{e[F]=void 0;var n=!0}catch(e){}var a=y.call(e);return n&&(t?e[F]=r:delete e[F]),a},S=Object.prototype.toString;var B=m,$=function(e){return S.call(e)},b=u?u.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?B(e):$(e)};var D=v,H=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==D(e)},z=c,_=E,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;var k=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(w.test(e)||!x.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=v,N=A;var C,T=function(e){if(!N(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},O=g["__core-js_shared__"],j=(C=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var I=function(e){return!!j&&j in e},P=Function.prototype.toString;var R=T,V=I,L=A,X=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,Z=M.toString,Y=U.hasOwnProperty,q=RegExp("^"+Z.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(e){return!(!L(e)||V(e))&&(R(e)?q:G).test(X(e))},K=function(e,t){return null==e?void 0:e[t]};var Q=function(e,t){var r=K(e,t);return J(r)?r:void 0},ee=Q(Object,"create"),te=ee;var re=function(){this.__data__=te?te(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ee,ie=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ae){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ie.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var de=ee;var he=re,ge=ne,ue=oe,se=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pe.prototype.clear=he,pe.prototype.delete=ge,pe.prototype.get=ue,pe.prototype.has=se,pe.prototype.set=fe;var ye=pe;var Fe=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var r=e.length;r--;)if(me(e[r][0],t))return r;return-1},Be=Se,$e=Array.prototype.splice;var be=Se;var ve=Se;var De=Se;var He=Fe,Ee=function(e){var t=this.__data__,r=Be(t,e);return!(r<0)&&(r==t.length-1?t.pop():$e.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=be(t,e);return r<0?void 0:t[r][1]},_e=function(e){return ve(this.__data__,e)>-1},xe=function(e,t){var r=this.__data__,n=De(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function we(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}we.prototype.clear=He,we.prototype.delete=Ee,we.prototype.get=ze,we.prototype.has=_e,we.prototype.set=xe;var ke=we,Ae=Q(g,"Map"),We=ye,Ne=ke,Ce=Ae;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Oe=function(e,t){var r=e.__data__;return Te(t)?r["string"==typeof t?"string":"hash"]:r.map},je=Oe;var Ie=Oe;var Pe=Oe;var Re=Oe;var Ve=function(){this.size=0,this.__data__={hash:new We,map:new(Ce||Ne),string:new We}},Le=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ie(this,e).get(e)},Ge=function(e){return Pe(this,e).has(e)},Me=function(e,t){var r=Re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ue.prototype.clear=Ve,Ue.prototype.delete=Le,Ue.prototype.get=Xe,Ue.prototype.has=Ge,Ue.prototype.set=Me;var Ze=Ue;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(Ye.Cache||Ze),r}Ye.Cache=Ze;var qe=Ye;var Je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ke=/\\(\\)?/g,Qe=function(e){var t=qe(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Je,(function(e,r,n,a){t.push(n?a.replace(Ke,"$1"):r||e)})),t}));var et=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},tt=c,rt=E,nt=u?u.prototype:void 0,at=nt?nt.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(rt(t))return at?at.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ot=it;var lt=c,ct=k,dt=Qe,ht=function(e){return null==e?"":ot(e)};var gt=E;var ut=function(e,t){return lt(e)?e:ct(e,t)?[e]:dt(ht(e))},st=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var r=0,n=(t=ut(t,e)).length;null!=e&&r<n;)e=e[st(t[r++])];return r&&r==n?e:void 0};var pt=function(e,t,r){var n=null==e?void 0:ft(e,t);return void 0===n?r:n};const yt=(e,t,r)=>t?pt(r,t)||pt(e,t):r||e,Ft=(e,t)=>{const r=t||e.defaultValue;return pt(e.collections,r)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const r=t.theme,n=Ft(St,r[mt.colorScheme]);return r.options&&r.options.color?yt(n,e,r.options.color):yt(n,e)},$t={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},bt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vt=e=>Object.keys(bt).reduce(((t,r)=>{const n=bt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Dt=vt("max-width"),Ht=(vt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Et=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zt=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||$t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Et} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_t=n(zt)`
    animation-delay: -0.45s;
`,xt=n(zt)`
    animation-delay: -0.3s;
`,wt=n(zt)`
    animation-delay: -0.15s;
`,kt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},At={collections:{base:{D1:{fontFamily:kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=Ft(At,r[mt.textStyleScheme]);return r.options&&r.options.textStyle?yt(n,e,r.options.textStyle):yt(n,e)},Nt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return kt.Bold;case 600:case"semibold":return kt.Semibold;case 300:case"light":return kt.Light;case 400:case"regular":return kt.Regular;default:return""}},Tt=(e,t)=>r=>{const n=Nt[e].fontFamily(r),a=Nt[e].fontWeight(r);return Object.values(kt).includes(n)?i`
                font-family: ${Ct(t)||Ct(a)||n};
                font-weight: normal !important;
            `:i`
            font-family: ${n};
            font-weight: ${(Ot(t)||a)??"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jt=(e,t,r=!1)=>n=>{const a=Nt[e],o=a.fontSize(n);return i`
            ${Tt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${i`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},It=(e=!1,t=!1)=>t?i`
            display: block;
        `:e?i`
            display: inline;
        `:i`
            display: block;
        `;var Pt;!function(e){e.D1=n.h1`
        ${e=>i`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>i`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>i`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>i`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>i`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>i`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>i`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>i`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>i`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>i`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>i`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>i`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>i`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>i`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Lt({...e,textStyle:"Body"}),Small:e=>Lt({...e,textStyle:"BodySmall"})}}(Pt||(Pt={}));const Rt=n.a`
    ${e=>i`
            ${jt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Vt=n(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=({external:r=!1,children:n,...a})=>e(Rt,{...a,children:[n,r&&t(Vt,{})]});var Xt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Xt||(Xt={}));const Gt=n.button`
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
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Primary(e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"light":return i`
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Neutral[5](e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"disabled":return i`
                    background-color: ${$t.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${$t.Neutral[3](e)};
                    }
                `;case"link":return i`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${$t.Secondary};
                        }
                    }
                `;default:return i`
                    background-color: ${$t.Primary(e)};
                    border: 1px solid transparent;

                    ${Dt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${$t.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i`
                    height: 2.5rem;
                    span {
                        ${jt("H5","semibold")}
                    }

                    ${Dt.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    span {
                        ${jt("H4","semibold")}
                    }

                    ${Dt.mobileS} {
                        height: auto;
                    }
                `}
`,Mt=n((({color:r,className:n,size:a=18})=>e(Ht,{className:n,$size:a,$color:r,children:[t(zt,{id:"inner1",$size:a-2,$borderWidth:2}),t(_t,{id:"inner2",$size:a-2,$borderWidth:2}),t(xt,{id:"inner3",$size:a-2,$borderWidth:2}),t(wt,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=$t.Primary(e);break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return i`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Ut={Default:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default"};return e(Gt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[o&&t(Mt,{...d}),t("span",{children:a})]})})),Small:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small"};return e(Gt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[o&&t(Mt,{...d,size:16}),t("span",{children:a})]})}))};export{Ut as Button};
//# sourceMappingURL=index.js.map
