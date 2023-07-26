import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as o,useEffect as a}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";const u={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=e=>Object.keys(u).reduce(((t,n)=>{const r=u[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),g=f("max-width"),h=(f("min-width"),u);var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,F="object"==typeof self&&self&&self.Object===Object&&self,y=m||F||Function("return this")(),S=y.Symbol,B=S,v=Object.prototype,b=v.hasOwnProperty,$=v.toString,D=B?B.toStringTag:void 0;var x=function(e){var t=b.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var i=$.call(e);return r&&(t?e[D]=n:delete e[D]),i},H=Object.prototype.toString;var E=x,w=function(e){return H.call(e)},A=S?S.toStringTag:void 0;var _=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?E(e):w(e)};var z=_,k=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==z(e)},W=p,O=C,L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var N=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(j.test(e)||!L.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=_,R=I;var V,P=function(e){if(!R(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=y["__core-js_shared__"],U=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var Z=function(e){return!!U&&U in e},X=Function.prototype.toString;var M=P,Y=Z,J=I,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||Y(e))&&(M(e)?re:q).test(K(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},le=ae(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fe=le,ge=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},se=le,pe=Object.prototype.hasOwnProperty;var me=le;var Fe=de,ye=ue,Se=he,Be=function(e){var t=this.__data__;return se?void 0!==t[e]:pe.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}be.prototype.clear=Fe,be.prototype.delete=ye,be.prototype.get=Se,be.prototype.has=Be,be.prototype.set=ve;var $e=be;var De=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},Ee=He,we=Array.prototype.splice;var Ae=He;var _e=He;var ze=He;var ke=De,Ce=function(e){var t=this.__data__,n=Ee(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},We=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return _e(this.__data__,e)>-1},Le=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=ke,je.prototype.delete=Ce,je.prototype.get=We,je.prototype.has=Oe,je.prototype.set=Le;var Ne=je,Ie=ae(y,"Map"),Te=$e,Re=Ne,Ve=Ie;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ge=function(e,t){var n=e.__data__;return Pe(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Ge;var Ze=Ge;var Xe=Ge;var Me=Ge;var Ye=function(){this.size=0,this.__data__={hash:new Te,map:new(Ve||Re),string:new Te}},Je=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ze(this,e).get(e)},qe=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var n=Me(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ye,et.prototype.delete=Je,et.prototype.get=Ke,et.prototype.has=qe,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ct=p,dt=C,ut=S?S.prototype:void 0,ft=ut?ut.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return ft?ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ht=gt;var st=function(e){return null==e?"":ht(e)},pt=p,mt=N,Ft=at,yt=st;var St=C;var Bt=function(e,t){return pt(e)?e:mt(e,t)?[e]:Ft(yt(e))},vt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var n=0,r=(t=Bt(t,e)).length;null!=e&&n<r;)e=e[vt(t[n++])];return n&&n==r?e:void 0};var $t=function(e,t,n){var r=null==e?void 0:bt(e,t);return void 0===r?n:r};const Dt=(e,t,n)=>t?$t(n,t)||$t(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return $t(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=xt(Et,n[Ht.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},At={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")},Blue:{Text:wt("Validation.Blue.Text"),Icon:wt("Validation.Blue.Icon"),Border:wt("Validation.Blue.Border"),Background:wt("Validation.Blue.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red"),Elevation:wt("Shadow.Elevation")}},_t=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1,...l}=t;return e(zt,{ref:n,"data-testid":i,$type:o,$stretch:a,...l,children:r})})),zt=l.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?c`
                padding: 0 3rem;
            `:c`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${g.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${g.tablet} {
        max-width: 720px;
    }
    ${g.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return c`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${g.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${g.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return c`
                    display: flex;
                    flex-direction: column;
                `;default:return c`
                    display: flex;
                `}}}
`,kt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1,...a}=t;return e(Ct,{ref:n,"data-testid":i,$stretch:o,...a,children:r})})),Ct=l.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?c`
                ${g.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:c`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Wt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:l=!1,...c}=t;return e(kt,{ref:n,"data-testid":i,className:o,stretch:l,...c,children:e(_t,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:l,children:r})})})),Ot={Section:kt,Container:_t,Content:Wt},Lt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},jt={collections:{base:{D1:{fontFamily:Lt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=xt(jt,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},It={D1:{fontFamily:Nt("D1.fontFamily"),fontSize:Nt("D1.fontSize"),fontWeight:Nt("D1.fontWeight"),lineHeight:Nt("D1.lineHeight"),letterSpacing:Nt("D1.letterSpacing")},D2:{fontFamily:Nt("D2.fontFamily"),fontSize:Nt("D2.fontSize"),fontWeight:Nt("D2.fontWeight"),lineHeight:Nt("D2.lineHeight"),letterSpacing:Nt("D2.letterSpacing")},D3:{fontFamily:Nt("D3.fontFamily"),fontSize:Nt("D3.fontSize"),fontWeight:Nt("D3.fontWeight"),lineHeight:Nt("D3.lineHeight"),letterSpacing:Nt("D3.letterSpacing")},D4:{fontFamily:Nt("D4.fontFamily"),fontSize:Nt("D4.fontSize"),fontWeight:Nt("D4.fontWeight"),lineHeight:Nt("D4.lineHeight"),letterSpacing:Nt("D4.letterSpacing")},DBody:{fontFamily:Nt("DBody.fontFamily"),fontSize:Nt("DBody.fontSize"),fontWeight:Nt("DBody.fontWeight"),lineHeight:Nt("DBody.lineHeight"),letterSpacing:Nt("DBody.letterSpacing")},H1:{fontFamily:Nt("H1.fontFamily"),fontSize:Nt("H1.fontSize"),fontWeight:Nt("H1.fontWeight"),lineHeight:Nt("H1.lineHeight"),letterSpacing:Nt("H1.letterSpacing")},H2:{fontFamily:Nt("H2.fontFamily"),fontSize:Nt("H2.fontSize"),fontWeight:Nt("H2.fontWeight"),lineHeight:Nt("H2.lineHeight"),letterSpacing:Nt("H2.letterSpacing")},H3:{fontFamily:Nt("H3.fontFamily"),fontSize:Nt("H3.fontSize"),fontWeight:Nt("H3.fontWeight"),lineHeight:Nt("H3.lineHeight"),letterSpacing:Nt("H3.letterSpacing")},H4:{fontFamily:Nt("H4.fontFamily"),fontSize:Nt("H4.fontSize"),fontWeight:Nt("H4.fontWeight"),lineHeight:Nt("H4.lineHeight"),letterSpacing:Nt("H4.letterSpacing")},H5:{fontFamily:Nt("H5.fontFamily"),fontSize:Nt("H5.fontSize"),fontWeight:Nt("H5.fontWeight"),lineHeight:Nt("H5.lineHeight"),letterSpacing:Nt("H5.letterSpacing")},H6:{fontFamily:Nt("H6.fontFamily"),fontSize:Nt("H6.fontSize"),fontWeight:Nt("H6.fontWeight"),lineHeight:Nt("H6.lineHeight"),letterSpacing:Nt("H6.letterSpacing")},Body:{fontFamily:Nt("Body.fontFamily"),fontSize:Nt("Body.fontSize"),fontWeight:Nt("Body.fontWeight"),lineHeight:Nt("Body.lineHeight"),letterSpacing:Nt("Body.letterSpacing")},BodySmall:{fontFamily:Nt("BodySmall.fontFamily"),fontSize:Nt("BodySmall.fontSize"),fontWeight:Nt("BodySmall.fontWeight"),lineHeight:Nt("BodySmall.lineHeight"),letterSpacing:Nt("BodySmall.letterSpacing")},XSmall:{fontFamily:Nt("XSmall.fontFamily"),fontSize:Nt("XSmall.fontSize"),fontWeight:Nt("XSmall.fontWeight"),lineHeight:Nt("XSmall.lineHeight"),letterSpacing:Nt("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return Lt.Bold;case 600:case"semibold":return Lt.Semibold;case 300:case"light":return Lt.Light;case 400:case"regular":return Lt.Regular;default:return""}},Rt=(e,t)=>n=>{const r=It[e].fontFamily(n),i=It[e].fontWeight(n);return Object.values(Lt).includes(r)?c`
                font-family: ${Tt(t)||Tt(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(Vt(t)||i)??"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=(e,t,n=!1)=>r=>{const i=It[e],o=i.fontSize(r);return c`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1)=>t?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `;var Ut;!function(e){e.D1=l.h1`
        ${e=>c`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${At.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Mt({...e,textStyle:"Body"}),Small:e=>Mt({...e,textStyle:"BodySmall"})}}(Ut||(Ut={}));const Zt=l.a`
    ${e=>c`
            ${Pt(e.textStyle,e.weight)}
            color: ${At.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${At.Secondary};

                svg {
                    color: ${At.Secondary};
                }
            }
        `}
`,Xt=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mt=({external:n=!1,children:r,...i})=>t(Zt,{...i,children:[r,n&&e(Xt,{})]});var Yt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Yt||(Yt={}));const Jt=l.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${g.desktopM} {
        margin: 1.5rem 0;
    }

    ${g.tablet} {
        margin: 1rem 0;
    }
`,Kt=l.nav`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,qt=l.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{const{position:t,backgroundColor:n}=e;let r;const i="rgba(255,255,255,0.001)";return r="left"===t?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(Ot.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const Qt=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?At.Accent.Light[1]:At.Neutral[6])(e)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,en=l(Ut.BodySmall)`
    margin-right: 0.5rem;

    ${e=>{const{highlighted:t}=e;return`color: ${(t?At.Primary:At.Neutral[4])(e)};`}};
`,tn=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var nn=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var rn=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),on=st,an=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ln=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var cn=function(e){return(e=on(e))&&e.replace(an,rn).replace(ln,"")},dn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var un=function(e){return e.match(dn)||[]},fn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var gn=function(e){return fn.test(e)},hn="\\ud800-\\udfff",sn="\\u2700-\\u27bf",pn="a-z\\xdf-\\xf6\\xf8-\\xff",mn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yn="["+Fn+"]",Sn="\\d+",Bn="["+sn+"]",vn="["+pn+"]",bn="[^"+hn+Fn+Sn+sn+pn+mn+"]",$n="(?:\\ud83c[\\udde6-\\uddff]){2}",Dn="[\\ud800-\\udbff][\\udc00-\\udfff]",xn="["+mn+"]",Hn="(?:"+vn+"|"+bn+")",En="(?:"+xn+"|"+bn+")",wn="(?:['’](?:d|ll|m|re|s|t|ve))?",An="(?:['’](?:D|LL|M|RE|S|T|VE))?",_n="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",zn="[\\ufe0e\\ufe0f]?",kn=zn+_n+("(?:\\u200d(?:"+["[^"+hn+"]",$n,Dn].join("|")+")"+zn+_n+")*"),Cn="(?:"+[Bn,$n,Dn].join("|")+")"+kn,Wn=RegExp([xn+"?"+vn+"+"+wn+"(?="+[yn,xn,"$"].join("|")+")",En+"+"+An+"(?="+[yn,xn+Hn,"$"].join("|")+")",xn+"?"+Hn+"+"+wn,xn+"+"+An,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sn,Cn].join("|"),"g");var On=un,Ln=gn,jn=st,Nn=function(e){return e.match(Wn)||[]};var In=nn,Tn=cn,Rn=function(e,t,n){return e=jn(e),void 0===(t=n?void 0:t)?Ln(e)?Nn(e):On(e):e.match(t)||[]},Vn=RegExp("['’]","g");var Pn=function(e){return function(t){return In(Rn(Tn(t).replace(Vn,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));const Gn=({steps:r,currentIndex:l,displayExtractor:c,fadeColor:d,fadePosition:u="both"})=>{const[f,g]=i(!!u),[s,p]=i("left"===u||"both"===u),[m,F]=i("right"===u||"both"===u),y=o(null),S=o(null);a((()=>{v(),window.addEventListener("resize",v);const e=S.current;return e&&e.addEventListener("scroll",v),()=>{window.removeEventListener("resize",v),e&&e.removeEventListener("scroll",v)}}),[]),a((()=>(B(),window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)})),[l]);const B=()=>{if(window.innerWidth>h.mobileL)return;const e=S.current;if(e){const t=10.5*l-4;e.scrollLeft=16*t}},v=()=>{if(f){g(window.innerWidth<h.mobileL);const e=S.current,t=y.current;e&&t&&e.scrollWidth>t.offsetWidth?(g(!0),p(e.scrollLeft>=1),F(e.scrollWidth-e.scrollLeft>t.offsetWidth)):g(!1)}},b=(e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step",$=(e,t)=>Pn(`${b(e,t)} ${e}`);if(!r.length)return null;return t(Jt,{ref:y,children:[e(Kt,{ref:S,children:r.map(((n,r)=>{const i=r<=l,o=r===l?"bold":"regular";return t(tn,{"aria-label":b(r,l),id:$(r,l),children:[e(Qt,{highlighted:i}),e(en,{highlighted:i,weight:o,children:(a=n,c?c(a):a.toString())})]},r);var a}))}),f&&t(n,{children:[s&&e(qt,{backgroundColor:d,position:"left"}),m&&e(qt,{backgroundColor:d,position:"right"})]})]})};export{Gn as ProgressIndicator};
//# sourceMappingURL=index.js.map
