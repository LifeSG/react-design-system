import{jsx as e,jsxs as t}from"react/jsx-runtime";import n,{useState as r,useEffect as i}from"react";import{CrossIcon as o}from"@lifesg/react-icons/cross";import a,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),g=m.Symbol,h=g,y=Object.prototype,b=y.hasOwnProperty,v=y.toString,S=h?h.toStringTag:void 0;var F=function(e){var t=b.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=v.call(e);return r&&(t?e[S]=n:delete e[S]),i},E=Object.prototype.toString;var D=F,w=function(e){return E.call(e)},x=g?g.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?D(e):w(e)};var B=A,_=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==B(e)},k=d,O=T,$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H=/^\w*$/;var N=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(H.test(e)||!$.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=A,R=C;var z,I=function(e){if(!R(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},M=m["__core-js_shared__"],j=(z=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var W=function(e){return!!j&&j in e},P=Function.prototype.toString;var U=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=I,V=W,X=C,q=U,Y=/^\[object .+?Constructor\]$/,K=Function.prototype,Z=Object.prototype,J=K.toString,Q=Z.hasOwnProperty,ee=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!X(e)||V(e))&&(G(e)?ee:Y).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},ie=re(Object,"create"),oe=ie;var ae=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,se=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return se.call(t,e)?t[e]:void 0},de=ie,fe=Object.prototype.hasOwnProperty;var pe=ie;var me=ae,ge=le,he=ue,ye=function(e){var t=this.__data__;return de?void 0!==t[e]:fe.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=me,ve.prototype.delete=ge,ve.prototype.get=he,ve.prototype.has=ye,ve.prototype.set=be;var Se=ve;var Fe=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},we=De,xe=Array.prototype.splice;var Ae=De;var Be=De;var _e=De;var Te=Fe,ke=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():xe.call(t,n,1),--this.size,!0)},Oe=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},$e=function(e){return Be(this.__data__,e)>-1},He=function(e,t){var n=this.__data__,r=_e(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Te,Ne.prototype.delete=ke,Ne.prototype.get=Oe,Ne.prototype.has=$e,Ne.prototype.set=He;var Ce=Ne,Le=re(m,"Map"),Re=Se,ze=Ce,Ie=Le;var Me=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Me(t)?n["string"==typeof t?"string":"hash"]:n.map},We=je;var Pe=je;var Ue=je;var Ge=je;var Ve=function(){this.size=0,this.__data__={hash:new Re,map:new(Ie||ze),string:new Re}},Xe=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Pe(this,e).get(e)},Ye=function(e){return Ue(this,e).has(e)},Ke=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Ve,Ze.prototype.delete=Xe,Ze.prototype.get=qe,Ze.prototype.has=Ye,Ze.prototype.set=Ke;var Je=Ze;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var et=Qe;var tt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,it=tt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,i){t.push(r?i.replace(rt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},at=d,lt=T,ct=g?g.prototype:void 0,st=ct?ct.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(at(t))return ot(t,e)+"";if(lt(t))return st?st.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ut;var ft=d,pt=N,mt=it,gt=function(e){return null==e?"":dt(e)};var ht=T;var yt=function(e,t){return ft(e)?e:pt(e,t)?[e]:mt(gt(e))},bt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r};const Ft=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Et=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=Et(wt,n[Dt.colorScheme]);return n.options&&n.options.color?Ft(r,e,n.options.color):Ft(r,e)},At=(xt("Brand.1"),xt("Brand.2"),xt("Brand.3"),xt("Brand.4"),xt("Brand.5"),xt("Brand.6"),xt("Primary")),Bt=(xt("PrimaryDark"),xt("Secondary")),_t=(xt("Accent.Light.1"),xt("Accent.Light.2"),xt("Accent.Light.3"),xt("Accent.Light.4"),xt("Accent.Light.5"),xt("Accent.Light.6"),xt("Accent.Dark.1"),xt("Accent.Dark.2"),xt("Accent.Dark.3"),{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")}),Tt={Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},kt=(xt("Shadow.Accent"),xt("Shadow.Red"),xt("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),Ot=e=>Object.keys(kt).reduce(((t,n)=>{const r=kt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),$t=Ot("max-width"),Ht=(Ot("min-width"),a.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return l`
            grid-column: ${t||"auto"} / span ${n||1};

            ${$t.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${$t.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`),Nt=n.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=s(t,["mobileCols","tabletCols","desktopCols"]);return e(Ht,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Ct(o||i||r),a=Ct(e),l=Ct(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ct=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Lt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,l=s(t,["children","data-testid","type","stretch"]);return e(Rt,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},l,{children:r}))})),Rt=a.div`
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

                ${$t.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${$t.tablet} {
        max-width: 720px;
    }
    ${$t.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return l`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${$t.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${$t.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return l`
                    display: flex;
                    flex-direction: column;
                `;default:return l`
                    display: flex;
                `}}}
`,zt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=s(t,["children","data-testid","stretch"]);return e(It,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),It=a.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?l`
                ${$t.tablet} {
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
`,Mt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:l=!1}=t,c=s(t,["children","data-testid","className","type","stretch"]);return e(zt,Object.assign({ref:n,"data-testid":i,className:o,stretch:l},c,{children:e(Lt,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),jt={Section:zt,Container:Lt,Content:Mt,ColDiv:Nt},Wt=a.button`
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
                background-color: ${_t[7]};
            `}
    }
`,Pt=n.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,l=s(t,["children","focusHighlight","focusOutline","type"]);return e(Wt,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),Ut={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Gt={collections:{base:{D1:{fontFamily:Ut.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ut.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ut.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ut.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ut.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ut.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ut.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ut.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ut.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ut.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ut.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ut.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ut.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ut.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,r=Et(Gt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?Ft(r,e,n.options.textStyle):Ft(r,e)},Xt={D1:{fontFamily:Vt("D1.fontFamily"),fontSize:Vt("D1.fontSize"),fontWeight:Vt("D1.fontWeight"),lineHeight:Vt("D1.lineHeight"),letterSpacing:Vt("D1.letterSpacing")},D2:{fontFamily:Vt("D2.fontFamily"),fontSize:Vt("D2.fontSize"),fontWeight:Vt("D2.fontWeight"),lineHeight:Vt("D2.lineHeight"),letterSpacing:Vt("D2.letterSpacing")},D3:{fontFamily:Vt("D3.fontFamily"),fontSize:Vt("D3.fontSize"),fontWeight:Vt("D3.fontWeight"),lineHeight:Vt("D3.lineHeight"),letterSpacing:Vt("D3.letterSpacing")},D4:{fontFamily:Vt("D4.fontFamily"),fontSize:Vt("D4.fontSize"),fontWeight:Vt("D4.fontWeight"),lineHeight:Vt("D4.lineHeight"),letterSpacing:Vt("D4.letterSpacing")},DBody:{fontFamily:Vt("DBody.fontFamily"),fontSize:Vt("DBody.fontSize"),fontWeight:Vt("DBody.fontWeight"),lineHeight:Vt("DBody.lineHeight"),letterSpacing:Vt("DBody.letterSpacing")},H1:{fontFamily:Vt("H1.fontFamily"),fontSize:Vt("H1.fontSize"),fontWeight:Vt("H1.fontWeight"),lineHeight:Vt("H1.lineHeight"),letterSpacing:Vt("H1.letterSpacing")},H2:{fontFamily:Vt("H2.fontFamily"),fontSize:Vt("H2.fontSize"),fontWeight:Vt("H2.fontWeight"),lineHeight:Vt("H2.lineHeight"),letterSpacing:Vt("H2.letterSpacing")},H3:{fontFamily:Vt("H3.fontFamily"),fontSize:Vt("H3.fontSize"),fontWeight:Vt("H3.fontWeight"),lineHeight:Vt("H3.lineHeight"),letterSpacing:Vt("H3.letterSpacing")},H4:{fontFamily:Vt("H4.fontFamily"),fontSize:Vt("H4.fontSize"),fontWeight:Vt("H4.fontWeight"),lineHeight:Vt("H4.lineHeight"),letterSpacing:Vt("H4.letterSpacing")},H5:{fontFamily:Vt("H5.fontFamily"),fontSize:Vt("H5.fontSize"),fontWeight:Vt("H5.fontWeight"),lineHeight:Vt("H5.lineHeight"),letterSpacing:Vt("H5.letterSpacing")},H6:{fontFamily:Vt("H6.fontFamily"),fontSize:Vt("H6.fontSize"),fontWeight:Vt("H6.fontWeight"),lineHeight:Vt("H6.lineHeight"),letterSpacing:Vt("H6.letterSpacing")},Body:{fontFamily:Vt("Body.fontFamily"),fontSize:Vt("Body.fontSize"),fontWeight:Vt("Body.fontWeight"),lineHeight:Vt("Body.lineHeight"),letterSpacing:Vt("Body.letterSpacing")},BodySmall:{fontFamily:Vt("BodySmall.fontFamily"),fontSize:Vt("BodySmall.fontSize"),fontWeight:Vt("BodySmall.fontWeight"),lineHeight:Vt("BodySmall.lineHeight"),letterSpacing:Vt("BodySmall.letterSpacing")},XSmall:{fontFamily:Vt("XSmall.fontFamily"),fontSize:Vt("XSmall.fontSize"),fontWeight:Vt("XSmall.fontWeight"),lineHeight:Vt("XSmall.lineHeight"),letterSpacing:Vt("XSmall.letterSpacing")}},qt=e=>{switch(e){case 700:case"bold":return Ut.Bold;case 600:case"semibold":return Ut.Semibold;case 300:case"light":return Ut.Light;case 400:case"regular":return Ut.Regular;default:return""}},Yt=(e,t)=>n=>{var r;const i=Xt[e].fontFamily(n),o=Xt[e].fontWeight(n);return Object.values(Ut).includes(i)?l`
                font-family: ${qt(t)||qt(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Kt(t)||o)&&void 0!==r?r:"normal"};
        `},Kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jt=Yt,Qt=(e,t,n=!1)=>r=>{const i=Xt[e],o=i.fontSize(r);return l`
            ${Yt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},en=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Zt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Zt(n)}
        `;var tn;!function(e){e.D1=a.h1`
        ${e=>l`
                ${Qt("D1",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Qt("D2",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Qt("D3",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Qt("D4",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Qt("DBody",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Qt("H1",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Qt("H2",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Qt("H3",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Qt("H4",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Qt("H5",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Qt("H6",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Qt("Body",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Qt("BodySmall",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Qt("XSmall",e.weight,e.paragraph)}
                color: ${_t[1]};
                ${en(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>on(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>on(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(tn||(tn={}));const nn=a.a`
    ${e=>l`
            ${Qt(e.textStyle,e.weight)}
            color: ${At};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Bt};

                svg {
                    color: ${Bt};
                }
            }
        `}
`,rn=a(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,on=n=>{var{external:r=!1,children:i}=n,o=s(n,["external","children"]);return t(nn,Object.assign({},o,{children:[i,r&&e(rn,{})]}))};var an;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(an||(an={}));const ln="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",cn=l`
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
`,sn=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${ln};
    background: ${_t[2]};
    z-index: 25;
`,un=a(jt.Content)`
    display: flex;
`,dn=a.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,fn=a.div`
    display: inline-block;
    width: 100%;

    ${Qt("Body","regular")}
    color: ${_t[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Jt("Body","semibold")}
        color: ${_t[8]};
    }

    a {
        ${Qt("Body","regular")}
        ${cn}
    }
`,pn=a(tn.Hyperlink.Default)`
    position: relative;

    ${cn}
`,mn=a(Pt)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,gn=a(o)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${_t[8]};
`,hn=n=>{var{children:o,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:u,id:d,forwardedRef:f}=n,p=s(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef"]);const m=p["data-testid"],[g,h]=r(a);i((()=>{h(a)}),[a]);return g?e(sn,Object.assign({ref:f,$sticky:c},p,{children:t(un,Object.assign({id:yn("container",d)},{children:[e(dn,{children:e(fn,Object.assign({"data-testid":yn("text-content",m)},{children:o}))}),l&&e(mn,Object.assign({onClick:()=>{h(!1),l&&u&&u()},id:yn("dismiss-button",d),"data-testid":yn("dismiss-button",m),focusHighlight:!1},{children:e(gn,{})}))]}))})):null},yn=(e,t="wrapper")=>`${t}-${e}`,bn=n.forwardRef(((t,n)=>e(hn,Object.assign({},t,{forwardedRef:n})))),vn=Object.assign(bn,{Link:pn});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function Sn(e){return Sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sn(e)}function Fn(e,t){return Fn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Fn(e,t)}function En(e,t,n){return En=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Fn(i,n.prototype),i},En.apply(null,arguments)}function Dn(e){return function(e){if(Array.isArray(e))return wn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return wn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var xn=Object.hasOwnProperty,An=Object.setPrototypeOf,Bn=Object.isFrozen,_n=Object.getPrototypeOf,Tn=Object.getOwnPropertyDescriptor,kn=Object.freeze,On=Object.seal,$n=Object.create,Hn="undefined"!=typeof Reflect&&Reflect,Nn=Hn.apply,Cn=Hn.construct;Nn||(Nn=function(e,t,n){return e.apply(t,n)}),kn||(kn=function(e){return e}),On||(On=function(e){return e}),Cn||(Cn=function(e,t){return En(e,Dn(t))});var Ln,Rn=qn(Array.prototype.forEach),zn=qn(Array.prototype.pop),In=qn(Array.prototype.push),Mn=qn(String.prototype.toLowerCase),jn=qn(String.prototype.toString),Wn=qn(String.prototype.match),Pn=qn(String.prototype.replace),Un=qn(String.prototype.indexOf),Gn=qn(String.prototype.trim),Vn=qn(RegExp.prototype.test),Xn=(Ln=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Cn(Ln,t)});function qn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Nn(e,t,r)}}function Yn(e,t,n){n=n||Mn,An&&An(e,null);for(var r=t.length;r--;){var i=t[r];if("string"==typeof i){var o=n(i);o!==i&&(Bn(t)||(t[r]=o),i=o)}e[i]=!0}return e}function Kn(e){var t,n=$n(null);for(t in e)!0===Nn(xn,e,[t])&&(n[t]=e[t]);return n}function Zn(e,t){for(;null!==e;){var n=Tn(e,t);if(n){if(n.get)return qn(n.get);if("function"==typeof n.value)return qn(n.value)}e=_n(e)}return function(e){return console.warn("fallback value for",e),null}}var Jn=kn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qn=kn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),er=kn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),tr=kn(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),nr=kn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),rr=kn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ir=kn(["#text"]),or=kn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ar=kn(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lr=kn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),cr=kn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),sr=On(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ur=On(/<%[\w\W]*|[\w\W]*%>/gm),dr=On(/\${[\w\W]*}/gm),fr=On(/^data-[\-\w.\u00B7-\uFFFF]/),pr=On(/^aria-[\-\w]+$/),mr=On(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),gr=On(/^(?:\w+script|data):/i),hr=On(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yr=On(/^html$/i),br=function(){return"undefined"==typeof window?null:window};var vr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:br(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,o=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,d=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,g=c.prototype,h=Zn(g,"cloneNode"),y=Zn(g,"nextSibling"),b=Zn(g,"childNodes"),v=Zn(g,"parentNode");if("function"==typeof a){var S=i.createElement("template");S.content&&S.content.ownerDocument&&(i=S.content.ownerDocument)}var F=function(e,t){if("object"!==Sn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(m,r),E=F?F.createHTML(""):"",D=i,w=D.implementation,x=D.createNodeIterator,A=D.createDocumentFragment,B=D.getElementsByTagName,_=r.importNode,T={};try{T=Kn(i).documentMode?i.documentMode:{}}catch(e){}var k={};n.isSupported="function"==typeof v&&w&&void 0!==w.createHTMLDocument&&9!==T;var O,$,H=sr,N=ur,C=dr,L=fr,R=pr,z=gr,I=hr,M=mr,j=null,W=Yn({},[].concat(Dn(Jn),Dn(Qn),Dn(er),Dn(nr),Dn(ir))),P=null,U=Yn({},[].concat(Dn(or),Dn(ar),Dn(lr),Dn(cr))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,X=null,q=!0,Y=!0,K=!1,Z=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,ie=!1,oe=!0,ae=!1,le=!0,ce=!1,se={},ue=null,de=Yn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),fe=null,pe=Yn({},["audio","video","img","source","image","track"]),me=null,ge=Yn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml",ve=be,Se=!1,Fe=null,Ee=Yn({},[he,ye,be],jn),De=["application/xhtml+xml","text/html"],we=null,xe=i.createElement("form"),Ae=function(e){return e instanceof RegExp||e instanceof Function},Be=function(e){we&&we===e||(e&&"object"===Sn(e)||(e={}),e=Kn(e),O=O=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,$="application/xhtml+xml"===O?jn:Mn,j="ALLOWED_TAGS"in e?Yn({},e.ALLOWED_TAGS,$):W,P="ALLOWED_ATTR"in e?Yn({},e.ALLOWED_ATTR,$):U,Fe="ALLOWED_NAMESPACES"in e?Yn({},e.ALLOWED_NAMESPACES,jn):Ee,me="ADD_URI_SAFE_ATTR"in e?Yn(Kn(ge),e.ADD_URI_SAFE_ATTR,$):ge,fe="ADD_DATA_URI_TAGS"in e?Yn(Kn(pe),e.ADD_DATA_URI_TAGS,$):pe,ue="FORBID_CONTENTS"in e?Yn({},e.FORBID_CONTENTS,$):de,V="FORBID_TAGS"in e?Yn({},e.FORBID_TAGS,$):{},X="FORBID_ATTR"in e?Yn({},e.FORBID_ATTR,$):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Z=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ne=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,te=e.FORCE_BODY||!1,oe=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,ve=e.NAMESPACE||be,G=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ae(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ae(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Y=!1),re&&(ne=!0),se&&(j=Yn({},Dn(ir)),P=[],!0===se.html&&(Yn(j,Jn),Yn(P,or)),!0===se.svg&&(Yn(j,Qn),Yn(P,ar),Yn(P,cr)),!0===se.svgFilters&&(Yn(j,er),Yn(P,ar),Yn(P,cr)),!0===se.mathMl&&(Yn(j,nr),Yn(P,lr),Yn(P,cr))),e.ADD_TAGS&&(j===W&&(j=Kn(j)),Yn(j,e.ADD_TAGS,$)),e.ADD_ATTR&&(P===U&&(P=Kn(P)),Yn(P,e.ADD_ATTR,$)),e.ADD_URI_SAFE_ATTR&&Yn(me,e.ADD_URI_SAFE_ATTR,$),e.FORBID_CONTENTS&&(ue===de&&(ue=Kn(ue)),Yn(ue,e.FORBID_CONTENTS,$)),le&&(j["#text"]=!0),Q&&Yn(j,["html","head","body"]),j.table&&(Yn(j,["tbody"]),delete V.tbody),kn&&kn(e),we=e)},_e=Yn({},["mi","mo","mn","ms","mtext"]),Te=Yn({},["foreignobject","desc","title","annotation-xml"]),ke=Yn({},["title","style","font","a","script"]),Oe=Yn({},Qn);Yn(Oe,er),Yn(Oe,tr);var $e=Yn({},nr);Yn($e,rr);var He=function(e){In(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=E}catch(t){e.remove()}}},Ne=function(e,t){try{In(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){In(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!P[e])if(ne||re)try{He(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ce=function(e){var t,n;if(te)e="<remove></remove>"+e;else{var r=Wn(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===O&&ve===be&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=F?F.createHTML(e):e;if(ve===be)try{t=(new p).parseFromString(o,O)}catch(e){}if(!t||!t.documentElement){t=w.createDocument(ve,"template",null);try{t.documentElement.innerHTML=Se?E:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ve===be?B.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},Le=function(e){return x.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Re=function(e){return"object"===Sn(l)?e instanceof l:e&&"object"===Sn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,r){k[e]&&Rn(k[e],(function(e){e.call(n,t,r,we)}))},Ie=function(e){var t,r;if(ze("beforeSanitizeElements",e,null),(r=e)instanceof f&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof d)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return He(e),!0;if(Vn(/[\u0080-\uFFFF]/,e.nodeName))return He(e),!0;var i=$(e.nodeName);if(ze("uponSanitizeElement",e,{tagName:i,allowedTags:j}),e.hasChildNodes()&&!Re(e.firstElementChild)&&(!Re(e.content)||!Re(e.content.firstElementChild))&&Vn(/<[/\w]/g,e.innerHTML)&&Vn(/<[/\w]/g,e.textContent))return He(e),!0;if("select"===i&&Vn(/<template/i,e.innerHTML))return He(e),!0;if(!j[i]||V[i]){if(!V[i]&&je(i)){if(G.tagNameCheck instanceof RegExp&&Vn(G.tagNameCheck,i))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(i))return!1}if(le&&!ue[i]){var o=v(e)||e.parentNode,a=b(e)||e.childNodes;if(a&&o)for(var l=a.length-1;l>=0;--l)o.insertBefore(h(a[l],!0),y(e))}return He(e),!0}return e instanceof c&&!function(e){var t=v(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});var n=Mn(e.tagName),r=Mn(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===be?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||_e[r]):Boolean(Oe[n]):e.namespaceURI===he?t.namespaceURI===be?"math"===n:t.namespaceURI===ye?"math"===n&&Te[r]:Boolean($e[n]):e.namespaceURI===be?!(t.namespaceURI===ye&&!Te[r])&&!(t.namespaceURI===he&&!_e[r])&&!$e[n]&&(ke[n]||!Oe[n]):!("application/xhtml+xml"!==O||!Fe[e.namespaceURI]))}(e)?(He(e),!0):"noscript"!==i&&"noembed"!==i||!Vn(/<\/no(script|embed)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=Pn(t,H," "),t=Pn(t,N," "),t=Pn(t,C," "),e.textContent!==t&&(In(n.removed,{element:e.cloneNode()}),e.textContent=t)),ze("afterSanitizeElements",e,null),!1):(He(e),!0)},Me=function(e,t,n){if(oe&&("id"===t||"name"===t)&&(n in i||n in xe))return!1;if(Y&&!X[t]&&Vn(L,t));else if(q&&Vn(R,t));else if(!P[t]||X[t]){if(!(je(e)&&(G.tagNameCheck instanceof RegExp&&Vn(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&Vn(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&Vn(G.tagNameCheck,n)||G.tagNameCheck instanceof Function&&G.tagNameCheck(n))))return!1}else if(me[t]);else if(Vn(M,Pn(n,I,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Un(n,"data:")||!fe[e]){if(K&&!Vn(z,Pn(n,I,"")));else if(n)return!1}else;return!0},je=function(e){return e.indexOf("-")>0},We=function(e){var t,r,i,o;ze("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};for(o=a.length;o--;){var c=t=a[o],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Gn(t.value),i=$(s),l.attrName=i,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ze("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Ne(s,e),l.keepAttr))if(Z||!Vn(/\/>/i,r)){J&&(r=Pn(r,H," "),r=Pn(r,N," "),r=Pn(r,C," "));var d=$(e.nodeName);if(Me(d,i,r)){if(!ae||"id"!==i&&"name"!==i||(Ne(s,e),r="user-content-"+r),F&&"object"===Sn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(d,i)){case"TrustedHTML":r=F.createHTML(r);break;case"TrustedScriptURL":r=F.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),zn(n.removed)}catch(e){}}}else Ne(s,e)}ze("afterSanitizeAttributes",e,null)}},Pe=function e(t){var n,r=Le(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),Ie(n)||(n.content instanceof o&&e(n.content),We(n));ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var i,a,c,s,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Se=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw Xn("toString is not a function");if("string"!=typeof(e=e.toString()))throw Xn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===Sn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Re(e))return t.toStaticHTML(e.outerHTML)}return e}if(ee||Be(d),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var f=$(e.nodeName);if(!j[f]||V[f])throw Xn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(i=Ce("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!ne&&!J&&!Q&&-1===e.indexOf("<"))return F&&ie?F.createHTML(e):e;if(!(i=Ce(e)))return ne?null:ie?E:""}i&&te&&He(i.firstChild);for(var p=Le(ce?e:i);c=p.nextNode();)3===c.nodeType&&c===s||Ie(c)||(c.content instanceof o&&Pe(c.content),We(c),s=c);if(s=null,ce)return e;if(ne){if(re)for(u=A.call(i.ownerDocument);i.firstChild;)u.appendChild(i.firstChild);else u=i;return(P.shadowroot||P.shadowrootmod)&&(u=_.call(r,u,!0)),u}var m=Q?i.outerHTML:i.innerHTML;return Q&&j["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&Vn(yr,i.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+m),J&&(m=Pn(m,H," "),m=Pn(m,N," "),m=Pn(m,C," ")),F&&ie?F.createHTML(m):m},n.setConfig=function(e){Be(e),ee=!0},n.clearConfig=function(){we=null,ee=!1},n.isValidAttribute=function(e,t,n){we||Be({});var r=$(e),i=$(t);return Me(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(k[e]=k[e]||[],In(k[e],t))},n.removeHook=function(e){if(k[e])return zn(k[e])},n.removeHooks=function(e){k[e]&&(k[e]=[])},n.removeAllHooks=function(){k={}},n}();const Sr=t=>n.forwardRef(((n,r)=>e(hn,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=vr.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(vn.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{hn as NBComponent,vn as NotificationBanner,Sr as withNotificationBanner};
//# sourceMappingURL=index.js.map
