import{jsxs as e,jsx as t}from"react/jsx-runtime";import r from"react";import n,{keyframes as a,css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,h="object"==typeof self&&self&&self.Object===Object&&self,s=g||h||Function("return this")(),u=s.Symbol,f=u,p=Object.prototype,y=p.hasOwnProperty,F=p.toString,m=f?f.toStringTag:void 0;var S=function(e){var t=y.call(e,m),r=e[m];try{e[m]=void 0;var n=!0}catch(e){}var a=F.call(e);return n&&(t?e[m]=r:delete e[m]),a},b=Object.prototype.toString;var B=S,$=function(e){return b.call(e)},v=u?u.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?B(e):$(e)};var H=D,E=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==H(e)},_=d,x=z,w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var O=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!x(e))||(k.test(e)||!w.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=D,j=A;var T,N=function(e){if(!j(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},C=s["__core-js_shared__"],P=(T=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var I=function(e){return!!P&&P in e},R=Function.prototype.toString;var V=N,L=I,X=A,G=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,J=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!X(e)||L(e))&&(V(e)?J:M).test(G(e))},Q=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var r=Q(e,t);return K(r)?r:void 0},te=ee(Object,"create"),re=te;var ne=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return oe.call(t,e)?t[e]:void 0},ce=te,de=Object.prototype.hasOwnProperty;var ge=te;var he=ne,se=ae,ue=le,fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:de.call(t,e)},pe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ye.prototype.clear=he,ye.prototype.delete=se,ye.prototype.get=ue,ye.prototype.has=fe,ye.prototype.set=pe;var Fe=ye;var me=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var r=e.length;r--;)if(Se(e[r][0],t))return r;return-1},Be=be,$e=Array.prototype.splice;var ve=be;var De=be;var He=be;var Ee=me,ze=function(e){var t=this.__data__,r=Be(t,e);return!(r<0)&&(r==t.length-1?t.pop():$e.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=ve(t,e);return r<0?void 0:t[r][1]},xe=function(e){return De(this.__data__,e)>-1},we=function(e,t){var r=this.__data__,n=He(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ke.prototype.clear=Ee,ke.prototype.delete=ze,ke.prototype.get=_e,ke.prototype.has=xe,ke.prototype.set=we;var Oe=ke,Ae=ee(s,"Map"),We=Fe,je=Oe,Te=Ae;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ce=function(e,t){var r=e.__data__;return Ne(t)?r["string"==typeof t?"string":"hash"]:r.map},Pe=Ce;var Ie=Ce;var Re=Ce;var Ve=Ce;var Le=function(){this.size=0,this.__data__={hash:new We,map:new(Te||je),string:new We}},Xe=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ie(this,e).get(e)},Me=function(e){return Re(this,e).has(e)},Ue=function(e,t){var r=Ve(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ze.prototype.clear=Le,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(qe.Cache||Ye),r}qe.Cache=Ye;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=function(e){var t=Je(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,r,n,a){t.push(n?a.replace(Qe,"$1"):r||e)})),t}));var tt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},rt=d,nt=z,at=u?u.prototype:void 0,it=at?at.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(rt(t))return tt(t,e)+"";if(nt(t))return it?it.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},lt=ot;var ct=d,dt=O,gt=et,ht=function(e){return null==e?"":lt(e)};var st=z;var ut=function(e,t){return ct(e)?e:dt(e,t)?[e]:gt(ht(e))},ft=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var r=0,n=(t=ut(t,e)).length;null!=e&&r<n;)e=e[ft(t[r++])];return r&&r==n?e:void 0};var yt=function(e,t,r){var n=null==e?void 0:pt(e,t);return void 0===n?r:n};const Ft=(e,t,r)=>t?yt(r,t)||yt(e,t):r||e,mt=(e,t)=>{const r=t||e.defaultValue;return yt(e.collections,r)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const r=t.theme,n=mt(bt,r[St.colorScheme]);return r.options&&r.options.color?Ft(n,e,r.options.color):Ft(n,e)},$t={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Dt=e=>Object.keys(vt).reduce(((t,r)=>{const n=vt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ht=Dt("max-width"),Et=(Dt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),zt=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_t=n.div`
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
    animation: ${zt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,xt=n(_t)`
    animation-delay: -0.45s;
`,wt=n(_t)`
    animation-delay: -0.3s;
`,kt=n(_t)`
    animation-delay: -0.15s;
`,Ot={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},At={collections:{base:{D1:{fontFamily:Ot.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=mt(At,r[St.textStyleScheme]);return r.options&&r.options.textStyle?Ft(n,e,r.options.textStyle):Ft(n,e)},jt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return Ot.Bold;case 600:case"semibold":return Ot.Semibold;case 300:case"light":return Ot.Light;case 400:case"regular":return Ot.Regular;default:return""}},Nt=(e,t)=>r=>{var n;const a=jt[e].fontFamily(r),o=jt[e].fontWeight(r);return Object.values(Ot).includes(a)?i`
                font-family: ${Tt(t)||Tt(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(n=Ct(t)||o)&&void 0!==n?n:"normal"};
        `},Ct=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=(e,t,r=!1)=>n=>{const a=jt[e],o=a.fontSize(n);return i`
            ${Nt(e,t)}
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
        `;var Rt;!function(e){e.D1=n.h1`
        ${e=>i`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>i`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>i`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>i`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>i`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>i`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>i`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>i`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>i`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>i`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>i`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>i`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>i`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>i`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=n.a`
    ${e=>i`
            ${Pt(e.textStyle,e.weight)}
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
`,Lt=n(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xt=r=>{var{external:n=!1,children:a}=r,i=l(r,["external","children"]);return e(Vt,Object.assign({},i,{children:[a,n&&t(Lt,{})]}))};var Gt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gt||(Gt={}));const Mt=n.button`
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

                    ${Ht.mobileL} {
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
                        ${Pt("H5","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    span {
                        ${Pt("H4","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `}
`,Ut=n((({color:r,className:n,size:a=18})=>e(Et,Object.assign({className:n,$size:a,$color:r},{children:[t(_t,{id:"inner1",$size:a-2,$borderWidth:2}),t(xt,{id:"inner2",$size:a-2,$borderWidth:2}),t(wt,{id:"inner3",$size:a-2,$borderWidth:2}),t(kt,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=$t.Primary(e);break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return i`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Zt={Default:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:c="default"}=r,d=l(r,["children","disabled","loading","styleType"]),g={$buttonStyle:i?"disabled":c,$buttonSizeStyle:"default"};return e(Mt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},g,d,{children:[o&&t(Ut,Object.assign({},g)),t("span",{children:a})]}))})),Small:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:c="default"}=r,d=l(r,["children","disabled","loading","styleType"]),g={$buttonStyle:i?"disabled":c,$buttonSizeStyle:"small"};return e(Mt,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},g,d,{children:[o&&t(Ut,Object.assign({},g,{size:16})),t("span",{children:a})]}))}))};export{Zt as Button};
//# sourceMappingURL=index.js.map
