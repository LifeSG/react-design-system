import{jsx as e,jsxs as t}from"react/jsx-runtime";import n,{useState as r,useEffect as i}from"react";import{CrossIcon as o}from"@lifesg/react-icons/cross";import a,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),h=m.Symbol,g=h,y=Object.prototype,b=y.hasOwnProperty,v=y.toString,S=g?g.toStringTag:void 0;var F=function(e){var t=b.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=v.call(e);return r&&(t?e[S]=n:delete e[S]),i},E=Object.prototype.toString;var D=F,B=function(e){return E.call(e)},A=h?h.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?D(e):B(e)};var _=w,x=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==_(e)},O=d,k=T,H=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var $=function(e,t){if(O(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!k(e))||(N.test(e)||!H.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=w,L=C;var z,I=function(e){if(!L(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},M=m["__core-js_shared__"],j=(z=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var W=function(e){return!!j&&j in e},P=Function.prototype.toString;var U=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=I,V=W,X=C,q=U,Y=/^\[object .+?Constructor\]$/,K=Function.prototype,Z=Object.prototype,J=K.toString,Q=Z.hasOwnProperty,ee=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!X(e)||V(e))&&(G(e)?ee:Y).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},ie=re(Object,"create"),oe=ie;var ae=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,se=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return se.call(t,e)?t[e]:void 0},de=ie,fe=Object.prototype.hasOwnProperty;var pe=ie;var me=ae,he=le,ge=ue,ye=function(e){var t=this.__data__;return de?void 0!==t[e]:fe.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=me,ve.prototype.delete=he,ve.prototype.get=ge,ve.prototype.has=ye,ve.prototype.set=be;var Se=ve;var Fe=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},Be=De,Ae=Array.prototype.splice;var we=De;var _e=De;var xe=De;var Te=Fe,Oe=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ae.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=we(t,e);return n<0?void 0:t[n][1]},He=function(e){return _e(this.__data__,e)>-1},Ne=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=Te,$e.prototype.delete=Oe,$e.prototype.get=ke,$e.prototype.has=He,$e.prototype.set=Ne;var Ce=$e,Re=re(m,"Map"),Le=Se,ze=Ce,Ie=Re;var Me=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Me(t)?n["string"==typeof t?"string":"hash"]:n.map},We=je;var Pe=je;var Ue=je;var Ge=je;var Ve=function(){this.size=0,this.__data__={hash:new Le,map:new(Ie||ze),string:new Le}},Xe=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Pe(this,e).get(e)},Ye=function(e){return Ue(this,e).has(e)},Ke=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Ve,Ze.prototype.delete=Xe,Ze.prototype.get=qe,Ze.prototype.has=Ye,Ze.prototype.set=Ke;var Je=Ze;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var et=Qe;var tt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,it=tt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,i){t.push(r?i.replace(rt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},at=d,lt=T,ct=h?h.prototype:void 0,st=ct?ct.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(at(t))return ot(t,e)+"";if(lt(t))return st?st.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ut;var ft=d,pt=$,mt=it,ht=function(e){return null==e?"":dt(e)};var gt=T;var yt=function(e,t){return ft(e)?e:pt(e,t)?[e]:mt(ht(e))},bt=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r};const Ft=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Et=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Et(Bt,n[Dt.colorScheme]);return n.options&&n.options.color?Ft(r,e,n.options.color):Ft(r,e)},wt=(At("Brand.1"),At("Brand.2"),At("Brand.3"),At("Brand.4"),At("Brand.5"),At("Brand.6"),At("Primary")),_t=(At("PrimaryDark"),At("Secondary")),xt=(At("Accent.Light.1"),At("Accent.Light.2"),At("Accent.Light.3"),At("Accent.Light.4"),At("Accent.Light.5"),At("Accent.Light.6"),At("Accent.Dark.1"),At("Accent.Dark.2"),At("Accent.Dark.3"),{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")}),Tt={Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Ot=(At("Shadow.Accent"),At("Shadow.Red"),At("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),kt=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ht=kt("max-width"),Nt=(kt("min-width"),n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,l=s(t,["children","data-testid","type","stretch"]);return e($t,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},l,{children:r}))}))),$t=a.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?l`
                padding: 0 3rem;
            `:l`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Ht.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ht.tablet} {
        max-width: 720px;
    }
    ${Ht.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return l`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ht.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ht.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return l`
                    display: flex;
                    flex-direction: column;
                `;default:return l`
                    display: flex;
                `}}}
`,Ct=n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=s(t,["children","data-testid","stretch"]);return e(Rt,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),Rt=a.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?l`
                ${Ht.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:l`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Lt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:l=!1}=t,c=s(t,["children","data-testid","className","type","stretch"]);return e(Ct,Object.assign({ref:n,"data-testid":i,className:o,stretch:l},c,{children:e(Nt,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),zt={Section:Ct,Container:Nt,Content:Lt},It=a.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&l`
                background-color: ${xt[7]};
            `}
    }
`,Mt=n.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,l=s(t,["children","focusHighlight","focusOutline","type"]);return e(It,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Pt=e=>t=>{const n=t.theme,r=Et(Wt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?Ft(r,e,n.options.textStyle):Ft(r,e)},Ut={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Gt=e=>{switch(e){case 700:case"bold":return jt.Bold;case 600:case"semibold":return jt.Semibold;case 300:case"light":return jt.Light;case 400:case"regular":return jt.Regular;default:return""}},Vt=(e,t)=>n=>{var r;const i=Ut[e].fontFamily(n),o=Ut[e].fontWeight(n);return Object.values(jt).includes(i)?l`
                font-family: ${Gt(t)||Gt(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Xt(t)||o)&&void 0!==r?r:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},qt=Vt,Yt=(e,t,n=!1)=>r=>{const i=Ut[e],o=i.fontSize(r);return l`
            ${Vt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Kt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Zt;!function(e){e.D1=a.h1`
        ${e=>l`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${xt[1]};
                ${Kt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>en(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>en(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zt||(Zt={}));const Jt=a.a`
    ${e=>l`
            ${Yt(e.textStyle,e.weight)}
            color: ${wt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_t};

                svg {
                    color: ${_t};
                }
            }
        `}
`,Qt=a(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,en=n=>{var{external:r=!1,children:i}=n,o=s(n,["external","children"]);return t(Jt,Object.assign({},o,{children:[i,r&&e(Qt,{})]}))};var tn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(tn||(tn={}));const nn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",rn=l`
    color: ${Tt.Orange.Icon};

    svg {
        color: ${Tt.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Tt.Orange.Icon};
        svg {
            color: ${Tt.Orange.Icon};
        }
    }
`,on=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${nn};
    background: ${xt[2]};
    z-index: 25;
`,an=a(zt.Content)`
    display: flex;
`,ln=a.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,cn=a.div`
    display: inline-block;
    width: 100%;

    ${Yt("Body","regular")}
    color: ${xt[8]};

    p {
        display: inline-block;
    }

    strong {
        ${qt("Body","semibold")}
        color: ${xt[8]};
    }

    a {
        ${Yt("Body","regular")}
        ${rn}
    }
`,sn=a(Zt.Hyperlink.Default)`
    position: relative;

    ${rn}
`,un=a(Mt)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,dn=a(o)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${xt[8]};
`,fn=n=>{var{children:o,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:u,id:d,forwardedRef:f}=n,p=s(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef"]);const m=p["data-testid"],[h,g]=r(a);i((()=>{g(a)}),[a]);return h?e(on,Object.assign({ref:f,$sticky:c},p,{children:t(an,Object.assign({id:pn("container",d)},{children:[e(ln,{children:e(cn,Object.assign({"data-testid":pn("text-content",m)},{children:o}))}),l&&e(un,Object.assign({onClick:()=>{g(!1),l&&u&&u()},id:pn("dismiss-button",d),"data-testid":pn("dismiss-button",m),focusHighlight:!1},{children:e(dn,{})}))]}))})):null},pn=(e,t="wrapper")=>`${t}-${e}`,mn=n.forwardRef(((t,n)=>e(fn,Object.assign({},t,{forwardedRef:n})))),hn=Object.assign(mn,{Link:sn});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function gn(e){return gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gn(e)}function yn(e,t){return yn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},yn(e,t)}function bn(e,t,n){return bn=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&yn(i,n.prototype),i},bn.apply(null,arguments)}function vn(e){return function(e){if(Array.isArray(e))return Sn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Sn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Sn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Fn=Object.hasOwnProperty,En=Object.setPrototypeOf,Dn=Object.isFrozen,Bn=Object.getPrototypeOf,An=Object.getOwnPropertyDescriptor,wn=Object.freeze,_n=Object.seal,xn=Object.create,Tn="undefined"!=typeof Reflect&&Reflect,On=Tn.apply,kn=Tn.construct;On||(On=function(e,t,n){return e.apply(t,n)}),wn||(wn=function(e){return e}),_n||(_n=function(e){return e}),kn||(kn=function(e,t){return bn(e,vn(t))});var Hn,Nn=Un(Array.prototype.forEach),$n=Un(Array.prototype.pop),Cn=Un(Array.prototype.push),Rn=Un(String.prototype.toLowerCase),Ln=Un(String.prototype.toString),zn=Un(String.prototype.match),In=Un(String.prototype.replace),Mn=Un(String.prototype.indexOf),jn=Un(String.prototype.trim),Wn=Un(RegExp.prototype.test),Pn=(Hn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return kn(Hn,t)});function Un(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return On(e,t,r)}}function Gn(e,t,n){n=n||Rn,En&&En(e,null);for(var r=t.length;r--;){var i=t[r];if("string"==typeof i){var o=n(i);o!==i&&(Dn(t)||(t[r]=o),i=o)}e[i]=!0}return e}function Vn(e){var t,n=xn(null);for(t in e)!0===On(Fn,e,[t])&&(n[t]=e[t]);return n}function Xn(e,t){for(;null!==e;){var n=An(e,t);if(n){if(n.get)return Un(n.get);if("function"==typeof n.value)return Un(n.value)}e=Bn(e)}return function(e){return console.warn("fallback value for",e),null}}var qn=wn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Yn=wn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Kn=wn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Zn=wn(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Jn=wn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Qn=wn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),er=wn(["#text"]),tr=wn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),nr=wn(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rr=wn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ir=wn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),or=_n(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ar=_n(/<%[\w\W]*|[\w\W]*%>/gm),lr=_n(/\${[\w\W]*}/gm),cr=_n(/^data-[\-\w.\u00B7-\uFFFF]/),sr=_n(/^aria-[\-\w]+$/),ur=_n(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dr=_n(/^(?:\w+script|data):/i),fr=_n(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),pr=_n(/^html$/i),mr=function(){return"undefined"==typeof window?null:window};var hr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mr(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,o=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,d=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=Xn(h,"cloneNode"),y=Xn(h,"nextSibling"),b=Xn(h,"childNodes"),v=Xn(h,"parentNode");if("function"==typeof a){var S=i.createElement("template");S.content&&S.content.ownerDocument&&(i=S.content.ownerDocument)}var F=function(e,t){if("object"!==gn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(m,r),E=F?F.createHTML(""):"",D=i,B=D.implementation,A=D.createNodeIterator,w=D.createDocumentFragment,_=D.getElementsByTagName,x=r.importNode,T={};try{T=Vn(i).documentMode?i.documentMode:{}}catch(e){}var O={};n.isSupported="function"==typeof v&&B&&void 0!==B.createHTMLDocument&&9!==T;var k,H,N=or,$=ar,C=lr,R=cr,L=sr,z=dr,I=fr,M=ur,j=null,W=Gn({},[].concat(vn(qn),vn(Yn),vn(Kn),vn(Jn),vn(er))),P=null,U=Gn({},[].concat(vn(tr),vn(nr),vn(rr),vn(ir))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,X=null,q=!0,Y=!0,K=!1,Z=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,ie=!1,oe=!0,ae=!1,le=!0,ce=!1,se={},ue=null,de=Gn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),fe=null,pe=Gn({},["audio","video","img","source","image","track"]),me=null,he=Gn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml",ve=be,Se=!1,Fe=null,Ee=Gn({},[ge,ye,be],Ln),De=["application/xhtml+xml","text/html"],Be=null,Ae=i.createElement("form"),we=function(e){return e instanceof RegExp||e instanceof Function},_e=function(e){Be&&Be===e||(e&&"object"===gn(e)||(e={}),e=Vn(e),k=k=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,H="application/xhtml+xml"===k?Ln:Rn,j="ALLOWED_TAGS"in e?Gn({},e.ALLOWED_TAGS,H):W,P="ALLOWED_ATTR"in e?Gn({},e.ALLOWED_ATTR,H):U,Fe="ALLOWED_NAMESPACES"in e?Gn({},e.ALLOWED_NAMESPACES,Ln):Ee,me="ADD_URI_SAFE_ATTR"in e?Gn(Vn(he),e.ADD_URI_SAFE_ATTR,H):he,fe="ADD_DATA_URI_TAGS"in e?Gn(Vn(pe),e.ADD_DATA_URI_TAGS,H):pe,ue="FORBID_CONTENTS"in e?Gn({},e.FORBID_CONTENTS,H):de,V="FORBID_TAGS"in e?Gn({},e.FORBID_TAGS,H):{},X="FORBID_ATTR"in e?Gn({},e.FORBID_ATTR,H):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Z=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ne=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,te=e.FORCE_BODY||!1,oe=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,ve=e.NAMESPACE||be,G=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Y=!1),re&&(ne=!0),se&&(j=Gn({},vn(er)),P=[],!0===se.html&&(Gn(j,qn),Gn(P,tr)),!0===se.svg&&(Gn(j,Yn),Gn(P,nr),Gn(P,ir)),!0===se.svgFilters&&(Gn(j,Kn),Gn(P,nr),Gn(P,ir)),!0===se.mathMl&&(Gn(j,Jn),Gn(P,rr),Gn(P,ir))),e.ADD_TAGS&&(j===W&&(j=Vn(j)),Gn(j,e.ADD_TAGS,H)),e.ADD_ATTR&&(P===U&&(P=Vn(P)),Gn(P,e.ADD_ATTR,H)),e.ADD_URI_SAFE_ATTR&&Gn(me,e.ADD_URI_SAFE_ATTR,H),e.FORBID_CONTENTS&&(ue===de&&(ue=Vn(ue)),Gn(ue,e.FORBID_CONTENTS,H)),le&&(j["#text"]=!0),Q&&Gn(j,["html","head","body"]),j.table&&(Gn(j,["tbody"]),delete V.tbody),wn&&wn(e),Be=e)},xe=Gn({},["mi","mo","mn","ms","mtext"]),Te=Gn({},["foreignobject","desc","title","annotation-xml"]),Oe=Gn({},["title","style","font","a","script"]),ke=Gn({},Yn);Gn(ke,Kn),Gn(ke,Zn);var He=Gn({},Jn);Gn(He,Qn);var Ne=function(e){Cn(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=E}catch(t){e.remove()}}},$e=function(e,t){try{Cn(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Cn(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!P[e])if(ne||re)try{Ne(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ce=function(e){var t,n;if(te)e="<remove></remove>"+e;else{var r=zn(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===k&&ve===be&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=F?F.createHTML(e):e;if(ve===be)try{t=(new p).parseFromString(o,k)}catch(e){}if(!t||!t.documentElement){t=B.createDocument(ve,"template",null);try{t.documentElement.innerHTML=Se?E:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ve===be?_.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},Re=function(e){return A.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Le=function(e){return"object"===gn(l)?e instanceof l:e&&"object"===gn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,r){O[e]&&Nn(O[e],(function(e){e.call(n,t,r,Be)}))},Ie=function(e){var t,r;if(ze("beforeSanitizeElements",e,null),(r=e)instanceof f&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof d)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return Ne(e),!0;if(Wn(/[\u0080-\uFFFF]/,e.nodeName))return Ne(e),!0;var i=H(e.nodeName);if(ze("uponSanitizeElement",e,{tagName:i,allowedTags:j}),e.hasChildNodes()&&!Le(e.firstElementChild)&&(!Le(e.content)||!Le(e.content.firstElementChild))&&Wn(/<[/\w]/g,e.innerHTML)&&Wn(/<[/\w]/g,e.textContent))return Ne(e),!0;if("select"===i&&Wn(/<template/i,e.innerHTML))return Ne(e),!0;if(!j[i]||V[i]){if(!V[i]&&je(i)){if(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,i))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(i))return!1}if(le&&!ue[i]){var o=v(e)||e.parentNode,a=b(e)||e.childNodes;if(a&&o)for(var l=a.length-1;l>=0;--l)o.insertBefore(g(a[l],!0),y(e))}return Ne(e),!0}return e instanceof c&&!function(e){var t=v(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});var n=Rn(e.tagName),r=Rn(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===be?"svg"===n:t.namespaceURI===ge?"svg"===n&&("annotation-xml"===r||xe[r]):Boolean(ke[n]):e.namespaceURI===ge?t.namespaceURI===be?"math"===n:t.namespaceURI===ye?"math"===n&&Te[r]:Boolean(He[n]):e.namespaceURI===be?!(t.namespaceURI===ye&&!Te[r])&&!(t.namespaceURI===ge&&!xe[r])&&!He[n]&&(Oe[n]||!ke[n]):!("application/xhtml+xml"!==k||!Fe[e.namespaceURI]))}(e)?(Ne(e),!0):"noscript"!==i&&"noembed"!==i||!Wn(/<\/no(script|embed)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=In(t,N," "),t=In(t,$," "),t=In(t,C," "),e.textContent!==t&&(Cn(n.removed,{element:e.cloneNode()}),e.textContent=t)),ze("afterSanitizeElements",e,null),!1):(Ne(e),!0)},Me=function(e,t,n){if(oe&&("id"===t||"name"===t)&&(n in i||n in Ae))return!1;if(Y&&!X[t]&&Wn(R,t));else if(q&&Wn(L,t));else if(!P[t]||X[t]){if(!(je(e)&&(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&Wn(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,n)||G.tagNameCheck instanceof Function&&G.tagNameCheck(n))))return!1}else if(me[t]);else if(Wn(M,In(n,I,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Mn(n,"data:")||!fe[e]){if(K&&!Wn(z,In(n,I,"")));else if(n)return!1}else;return!0},je=function(e){return e.indexOf("-")>0},We=function(e){var t,r,i,o;ze("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};for(o=a.length;o--;){var c=t=a[o],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:jn(t.value),i=H(s),l.attrName=i,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ze("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&($e(s,e),l.keepAttr))if(Z||!Wn(/\/>/i,r)){J&&(r=In(r,N," "),r=In(r,$," "),r=In(r,C," "));var d=H(e.nodeName);if(Me(d,i,r)){if(!ae||"id"!==i&&"name"!==i||($e(s,e),r="user-content-"+r),F&&"object"===gn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(d,i)){case"TrustedHTML":r=F.createHTML(r);break;case"TrustedScriptURL":r=F.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),$n(n.removed)}catch(e){}}}else $e(s,e)}ze("afterSanitizeAttributes",e,null)}},Pe=function e(t){var n,r=Re(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),Ie(n)||(n.content instanceof o&&e(n.content),We(n));ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var i,a,c,s,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Se=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Le(e)){if("function"!=typeof e.toString)throw Pn("toString is not a function");if("string"!=typeof(e=e.toString()))throw Pn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===gn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Le(e))return t.toStaticHTML(e.outerHTML)}return e}if(ee||_e(d),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var f=H(e.nodeName);if(!j[f]||V[f])throw Pn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(i=Ce("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!ne&&!J&&!Q&&-1===e.indexOf("<"))return F&&ie?F.createHTML(e):e;if(!(i=Ce(e)))return ne?null:ie?E:""}i&&te&&Ne(i.firstChild);for(var p=Re(ce?e:i);c=p.nextNode();)3===c.nodeType&&c===s||Ie(c)||(c.content instanceof o&&Pe(c.content),We(c),s=c);if(s=null,ce)return e;if(ne){if(re)for(u=w.call(i.ownerDocument);i.firstChild;)u.appendChild(i.firstChild);else u=i;return(P.shadowroot||P.shadowrootmod)&&(u=x.call(r,u,!0)),u}var m=Q?i.outerHTML:i.innerHTML;return Q&&j["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&Wn(pr,i.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+m),J&&(m=In(m,N," "),m=In(m,$," "),m=In(m,C," ")),F&&ie?F.createHTML(m):m},n.setConfig=function(e){_e(e),ee=!0},n.clearConfig=function(){Be=null,ee=!1},n.isValidAttribute=function(e,t,n){Be||_e({});var r=H(e),i=H(t);return Me(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(O[e]=O[e]||[],Cn(O[e],t))},n.removeHook=function(e){if(O[e])return $n(O[e])},n.removeHooks=function(e){O[e]&&(O[e]=[])},n.removeAllHooks=function(){O={}},n}();const gr=t=>n.forwardRef(((n,r)=>e(fn,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=hr.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(hn.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{fn as NBComponent,hn as NotificationBanner,gr as withNotificationBanner};
//# sourceMappingURL=index.js.map
