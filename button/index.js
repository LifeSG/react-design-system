import{jsxs as e,jsx as t}from"react/jsx-runtime";import n from"react";import r,{keyframes as i,css as a}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,s="object"==typeof c&&c&&c.Object===Object&&c,h="object"==typeof self&&self&&self.Object===Object&&self,g=s||h||Function("return this")(),u=g.Symbol,f=u,p=Object.prototype,y=p.hasOwnProperty,F=p.toString,m=f?f.toStringTag:void 0;var S=function(e){var t=y.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var i=F.call(e);return r&&(t?e[m]=n:delete e[m]),i},b=Object.prototype.toString;var B=S,$=function(e){return b.call(e)},v=u?u.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?B(e):$(e)};var H=D,x=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==H(e)},z=d,_=E,w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var O=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(k.test(e)||!w.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=D,j=A;var T,N=function(e){if(!j(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},C=g["__core-js_shared__"],L=(T=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var P=function(e){return!!L&&L in e},I=Function.prototype.toString;var R=N,V=P,X=A,G=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,J=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!X(e)||V(e))&&(R(e)?J:M).test(G(e))},Q=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Q(e,t);return K(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},ce=te,de=Object.prototype.hasOwnProperty;var se=te;var he=re,ge=ie,ue=le,fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:de.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=he,ye.prototype.delete=ge,ye.prototype.get=ue,ye.prototype.has=fe,ye.prototype.set=pe;var Fe=ye;var me=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},Be=be,$e=Array.prototype.splice;var ve=be;var De=be;var He=be;var xe=me,Ee=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},_e=function(e){return De(this.__data__,e)>-1},we=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=xe,ke.prototype.delete=Ee,ke.prototype.get=ze,ke.prototype.has=_e,ke.prototype.set=we;var Oe=ke,Ae=ee(g,"Map"),We=Fe,je=Oe,Te=Ae;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ce=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Le=Ce;var Pe=Ce;var Ie=Ce;var Re=Ce;var Ve=function(){this.size=0,this.__data__={hash:new We,map:new(Te||je),string:new We}},Xe=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Pe(this,e).get(e)},Me=function(e){return Ie(this,e).has(e)},Ue=function(e,t){var n=Re(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Ve,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(qe.Cache||Ye),n}qe.Cache=Ye;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=function(e){var t=Je(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,n,r,i){t.push(r?i.replace(Qe,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},nt=d,rt=E,it=u?u.prototype:void 0,at=it?it.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=ot;var ct=d,dt=O,st=et,ht=function(e){return null==e?"":lt(e)};var gt=E;var ut=function(e,t){return ct(e)?e:dt(e,t)?[e]:st(ht(e))},ft=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[ft(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:pt(e,t);return void 0===r?n:r};const Ft=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,mt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=mt(bt,n[St.colorScheme]);return n.options&&n.options.color?Ft(r,e,n.options.color):Ft(r,e)},$t={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Dt=e=>Object.keys(vt).reduce(((t,n)=>{const r=vt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ht=Dt("max-width"),xt=(Dt("min-width"),r.div`
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
`,zt=r.div`
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
`,_t=r(zt)`
    animation-delay: -0.45s;
`,wt=r(zt)`
    animation-delay: -0.3s;
`,kt=r(zt)`
    animation-delay: -0.15s;
`,Ot={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},At={collections:{base:{D1:{fontFamily:Ot.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const n=t.theme,r=mt(At,n[St.textStyleScheme]);return n.options&&n.options.textStyle?Ft(r,e,n.options.textStyle):Ft(r,e)},jt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return Ot.Bold;case 600:case"semibold":return Ot.Semibold;case 300:case"light":return Ot.Light;case 400:case"regular":return Ot.Regular;default:return""}},Nt=(e,t)=>n=>{var r;const i=jt[e].fontFamily(n),o=jt[e].fontWeight(n);return Object.values(Ot).includes(i)?a`
                font-family: ${Tt(t)||Tt(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=Ct(t)||o)&&void 0!==r?r:"normal"};
        `},Ct=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Lt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,n=!1)=>r=>{const i=jt[e],o=i.fontSize(r);return a`
            ${Nt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},It=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${Lt(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${Lt(n)}
        `;var Rt;!function(e){e.D1=r.h1`
        ${e=>a`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>a`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>a`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>a`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>a`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>a`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>a`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>a`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>a`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>a`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>a`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>a`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>a`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>a`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=r.a`
    ${e=>a`
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
`,Xt=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gt=n=>{var{external:r=!1,children:i}=n,a=l(n,["external","children"]);return e(Vt,Object.assign({},a,{children:[i,r&&t(Xt,{})]}))};var Mt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Mt||(Mt={}));const Ut=r.button`
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
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Primary(e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"light":return a`
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Neutral[5](e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"disabled":return a`
                    background-color: ${$t.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${$t.Neutral[3](e)};
                    }
                `;case"link":return a`
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
                `;default:return a`
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
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    span {
                        ${Pt("H5","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    span {
                        ${Pt("H4","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `}
`,Zt=r((({color:n,className:r,size:i=18})=>e(xt,Object.assign({className:r,$size:i,$color:n},{children:[t(zt,{id:"inner1",$size:i-2,$borderWidth:2}),t(_t,{id:"inner2",$size:i-2,$borderWidth:2}),t(wt,{id:"inner3",$size:i-2,$borderWidth:2}),t(kt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=$t.Primary(e);break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return a`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Yt={Default:n.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:c="default"}=n,d=l(n,["children","disabled","loading","styleType"]),s={$buttonStyle:a?"disabled":c,$buttonSizeStyle:"default"};return e(Ut,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:a},s,d,{children:[o&&t(Zt,Object.assign({},s)),t("span",{children:i})]}))})),Small:n.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:c="default"}=n,d=l(n,["children","disabled","loading","styleType"]),s={$buttonStyle:a?"disabled":c,$buttonSizeStyle:"small"};return e(Ut,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:a},s,d,{children:[o&&t(Zt,Object.assign({},s,{size:16})),t("span",{children:i})]}))}))};export{Yt as Button};
//# sourceMappingURL=index.js.map
