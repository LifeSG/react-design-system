import{jsx as e,jsxs as t}from"react/jsx-runtime";import n,{useState as r,useEffect as o}from"react";import{CrossIcon as i}from"@lifesg/react-icons/cross";import a,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,g=p||m||Function("return this")(),h=g.Symbol,y=h,F=Object.prototype,b=F.hasOwnProperty,v=F.toString,S=y?y.toStringTag:void 0;var E=function(e){var t=b.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var o=v.call(e);return r&&(t?e[S]=n:delete e[S]),o},D=Object.prototype.toString;var B=E,A=function(e){return D.call(e)},x=h?h.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?B(e):A(e)};var _=w,k=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==_(e)},O=f,$=T,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H=/^\w*$/;var N=function(e,t){if(O(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!$(e))||(H.test(e)||!C.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=w,I=L;var z,M=function(e){if(!I(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=g["__core-js_shared__"],W=(z=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var P=function(e){return!!W&&W in e},U=Function.prototype.toString;var G=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},V=M,X=P,q=L,Y=G,K=/^\[object .+?Constructor\]$/,Z=Function.prototype,J=Object.prototype,Q=Z.toString,ee=J.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!q(e)||X(e))&&(V(e)?te:K).test(Y(e))},re=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var n=re(e,t);return ne(n)?n:void 0},ie=oe(Object,"create"),ae=ie;var le=function(){this.__data__=ae?ae(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=ie,ue=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},fe=ie,pe=Object.prototype.hasOwnProperty;var me=ie;var ge=le,he=ce,ye=de,Fe=function(e){var t=this.__data__;return fe?void 0!==t[e]:pe.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ge,ve.prototype.delete=he,ve.prototype.get=ye,ve.prototype.has=Fe,ve.prototype.set=be;var Se=ve;var Ee=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},Ae=Be,xe=Array.prototype.splice;var we=Be;var _e=Be;var ke=Be;var Te=Ee,Oe=function(e){var t=this.__data__,n=Ae(t,e);return!(n<0)&&(n==t.length-1?t.pop():xe.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=we(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return _e(this.__data__,e)>-1},He=function(e,t){var n=this.__data__,r=ke(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Te,Ne.prototype.delete=Oe,Ne.prototype.get=$e,Ne.prototype.has=Ce,Ne.prototype.set=He;var Le=Ne,Re=oe(g,"Map"),Ie=Se,ze=Le,Me=Re;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var We=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=We;var Ue=We;var Ge=We;var Ve=We;var Xe=function(){this.size=0,this.__data__={hash:new Ie,map:new(Me||ze),string:new Ie}},qe=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Ye=function(e){return Ue(this,e).get(e)},Ke=function(e){return Ge(this,e).has(e)},Ze=function(e,t){var n=Ve(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Xe,Je.prototype.delete=qe,Je.prototype.get=Ye,Je.prototype.has=Ke,Je.prototype.set=Ze;var Qe=Je;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(et.Cache||Qe),n}et.Cache=Qe;var tt=et;var nt=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=nt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,r,o){t.push(r?o.replace(ot,"$1"):n||e)})),t}));var at=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},lt=f,ct=T,st=h?h.prototype:void 0,ut=st?st.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(lt(t))return at(t,e)+"";if(ct(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ft=dt;var pt=f,mt=N,gt=it,ht=function(e){return null==e?"":ft(e)};var yt=T;var Ft=function(e,t){return pt(e)?e:mt(e,t)?[e]:gt(ht(e))},bt=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var St=d((function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r}));const Et=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=Dt(At,n[Bt.colorScheme]);return n.options&&n.options.color?Et(r,e,n.options.color):Et(r,e)},wt=(xt("Brand.1"),xt("Brand.2"),xt("Brand.3"),xt("Brand.4"),xt("Brand.5"),xt("Brand.6"),xt("Primary")),_t=(xt("PrimaryDark"),xt("Secondary")),kt=(xt("Accent.Light.1"),xt("Accent.Light.2"),xt("Accent.Light.3"),xt("Accent.Light.4"),xt("Accent.Light.5"),xt("Accent.Light.6"),xt("Accent.Dark.1"),xt("Accent.Dark.2"),xt("Accent.Dark.3"),{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")}),Tt={Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Ot=(xt("Shadow.Accent"),xt("Shadow.Red"),xt("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),$t=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ct=$t("max-width"),Ht=($t("min-width"),a.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return l`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Ct.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Ct.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Nt=n.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=s(t,["mobileCols","tabletCols","desktopCols"]);return e(Ht,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=Lt(i||o||r),a=Lt(e),l=Lt(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Lt=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Rt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,l=s(t,["children","data-testid","type","stretch"]);return e(It,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),It=a.div`
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

                ${Ct.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ct.tablet} {
        max-width: 720px;
    }
    ${Ct.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return l`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ct.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ct.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return l`
                    display: flex;
                    flex-direction: column;
                `;default:return l`
                    display: flex;
                `}}}
`,zt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=s(t,["children","data-testid","stretch"]);return e(Mt,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Mt=a.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?l`
                ${Ct.tablet} {
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
`,jt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=t,c=s(t,["children","data-testid","className","type","stretch"]);return e(zt,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:e(Rt,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Wt={Section:zt,Container:Rt,Content:jt,ColDiv:Nt},Pt=a.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&l`
                background-color: ${kt[7]};
            `}
    }
`,Ut=n.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=s(t,["children","focusHighlight","focusOutline","type"]);return e(Pt,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Gt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Vt={collections:{base:{D1:{fontFamily:Gt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Dt(Vt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?Et(r,e,n.options.textStyle):Et(r,e)},qt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Yt=e=>{switch(e){case 700:case"bold":return Gt.Bold;case 600:case"semibold":return Gt.Semibold;case 300:case"light":return Gt.Light;case 400:case"regular":return Gt.Regular;default:return""}},Kt=(e,t)=>n=>{var r;const o=qt[e].fontFamily(n),i=qt[e].fontWeight(n);return Object.values(Gt).includes(o)?l`
                font-family: ${Yt(t)||Yt(i)||o};
                font-weight: normal !important;
            `:l`
            font-family: ${o};
            font-weight: ${null!==(r=Zt(t)||i)&&void 0!==r?r:"normal"};
        `},Zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Jt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Qt=Kt,en=(e,t,n=!1)=>r=>{const o=qt[e],i=o.fontSize(r);return l`
            ${Kt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},tn=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Jt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Jt(n)}
        `;var nn;!function(e){e.D1=a.h1`
        ${e=>l`
                ${en("D1",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${en("D2",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${en("D3",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${en("D4",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${en("DBody",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${en("H1",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${en("H2",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${en("H3",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${en("H4",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${en("H5",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${en("H6",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${en("Body",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${en("BodySmall",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${en("XSmall",e.weight,e.paragraph)}
                color: ${kt[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>an(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>an(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(nn||(nn={}));const rn=a.a`
    ${e=>l`
            ${en(e.textStyle,e.weight)}
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
`,on=a(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,an=n=>{var{external:r=!1,children:o}=n,i=s(n,["external","children"]);return t(rn,Object.assign({},i,{children:[o,r&&e(on,{})]}))};var ln;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ln||(ln={}));const cn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",sn=l`
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
`,un=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${cn};
    background: ${kt[2]};
    z-index: 25;
`,dn=a(Wt.Content)`
    display: flex;
`,fn=a.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,pn=a.div`
    display: inline-block;
    width: 100%;

    ${en("Body","regular")}
    color: ${kt[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Qt("Body","semibold")}
        color: ${kt[8]};
    }

    a {
        ${en("Body","regular")}
        ${sn}
    }
`,mn=a(nn.Hyperlink.Default)`
    position: relative;

    ${sn}
`,gn=a(Ut)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,hn=a(i)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${kt[8]};
`,yn=n=>{var{children:i,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:u,id:d,forwardedRef:f}=n,p=s(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef"]);const m=p["data-testid"],[g,h]=r(a);o((()=>{h(a)}),[a]);return g?e(un,Object.assign({ref:f,$sticky:c},p,{children:t(dn,Object.assign({id:Fn("container",d)},{children:[e(fn,{children:e(pn,Object.assign({"data-testid":Fn("text-content",m)},{children:i}))}),l&&e(gn,Object.assign({onClick:()=>{h(!1),l&&u&&u()},id:Fn("dismiss-button",d),"data-testid":Fn("dismiss-button",m),focusHighlight:!1},{children:e(hn,{})}))]}))})):null},Fn=(e,t="wrapper")=>`${t}-${e}`,bn=n.forwardRef(((t,n)=>e(yn,Object.assign({},t,{forwardedRef:n})))),vn=Object.assign(bn,{Link:mn});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function Sn(e){return Sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sn(e)}function En(e,t){return En=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},En(e,t)}function Dn(e,t,n){return Dn=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&En(o,n.prototype),o},Dn.apply(null,arguments)}function Bn(e){return function(e){if(Array.isArray(e))return An(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return An(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return An(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function An(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var xn=Object.hasOwnProperty,wn=Object.setPrototypeOf,_n=Object.isFrozen,kn=Object.getPrototypeOf,Tn=Object.getOwnPropertyDescriptor,On=Object.freeze,$n=Object.seal,Cn=Object.create,Hn="undefined"!=typeof Reflect&&Reflect,Nn=Hn.apply,Ln=Hn.construct;Nn||(Nn=function(e,t,n){return e.apply(t,n)}),On||(On=function(e){return e}),$n||($n=function(e){return e}),Ln||(Ln=function(e,t){return Dn(e,Bn(t))});var Rn,In=Yn(Array.prototype.forEach),zn=Yn(Array.prototype.pop),Mn=Yn(Array.prototype.push),jn=Yn(String.prototype.toLowerCase),Wn=Yn(String.prototype.toString),Pn=Yn(String.prototype.match),Un=Yn(String.prototype.replace),Gn=Yn(String.prototype.indexOf),Vn=Yn(String.prototype.trim),Xn=Yn(RegExp.prototype.test),qn=(Rn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ln(Rn,t)});function Yn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Nn(e,t,r)}}function Kn(e,t,n){n=n||jn,wn&&wn(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(_n(t)||(t[r]=i),o=i)}e[o]=!0}return e}function Zn(e){var t,n=Cn(null);for(t in e)!0===Nn(xn,e,[t])&&(n[t]=e[t]);return n}function Jn(e,t){for(;null!==e;){var n=Tn(e,t);if(n){if(n.get)return Yn(n.get);if("function"==typeof n.value)return Yn(n.value)}e=kn(e)}return function(e){return console.warn("fallback value for",e),null}}var Qn=On(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),er=On(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),tr=On(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nr=On(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rr=On(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),or=On(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ir=On(["#text"]),ar=On(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),lr=On(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),cr=On(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),sr=On(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ur=$n(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dr=$n(/<%[\w\W]*|[\w\W]*%>/gm),fr=$n(/\${[\w\W]*}/gm),pr=$n(/^data-[\-\w.\u00B7-\uFFFF]/),mr=$n(/^aria-[\-\w]+$/),gr=$n(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hr=$n(/^(?:\w+script|data):/i),yr=$n(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fr=$n(/^html$/i),br=function(){return"undefined"==typeof window?null:window};var vr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:br(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,d=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,g=c.prototype,h=Jn(g,"cloneNode"),y=Jn(g,"nextSibling"),F=Jn(g,"childNodes"),b=Jn(g,"parentNode");if("function"==typeof a){var v=o.createElement("template");v.content&&v.content.ownerDocument&&(o=v.content.ownerDocument)}var S=function(e,t){if("object"!==Sn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(m,r),E=S?S.createHTML(""):"",D=o,B=D.implementation,A=D.createNodeIterator,x=D.createDocumentFragment,w=D.getElementsByTagName,_=r.importNode,k={};try{k=Zn(o).documentMode?o.documentMode:{}}catch(e){}var T={};n.isSupported="function"==typeof b&&B&&void 0!==B.createHTMLDocument&&9!==k;var O,$,C=ur,H=dr,N=fr,L=pr,R=mr,I=hr,z=yr,M=gr,j=null,W=Kn({},[].concat(Bn(Qn),Bn(er),Bn(tr),Bn(rr),Bn(ir))),P=null,U=Kn({},[].concat(Bn(ar),Bn(lr),Bn(cr),Bn(sr))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,X=null,q=!0,Y=!0,K=!1,Z=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,oe=!1,ie=!0,ae=!1,le=!0,ce=!1,se={},ue=null,de=Kn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),fe=null,pe=Kn({},["audio","video","img","source","image","track"]),me=null,ge=Kn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",Fe="http://www.w3.org/1999/xhtml",be=Fe,ve=!1,Se=null,Ee=Kn({},[he,ye,Fe],Wn),De=["application/xhtml+xml","text/html"],Be=null,Ae=o.createElement("form"),xe=function(e){return e instanceof RegExp||e instanceof Function},we=function(e){Be&&Be===e||(e&&"object"===Sn(e)||(e={}),e=Zn(e),O=O=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,$="application/xhtml+xml"===O?Wn:jn,j="ALLOWED_TAGS"in e?Kn({},e.ALLOWED_TAGS,$):W,P="ALLOWED_ATTR"in e?Kn({},e.ALLOWED_ATTR,$):U,Se="ALLOWED_NAMESPACES"in e?Kn({},e.ALLOWED_NAMESPACES,Wn):Ee,me="ADD_URI_SAFE_ATTR"in e?Kn(Zn(ge),e.ADD_URI_SAFE_ATTR,$):ge,fe="ADD_DATA_URI_TAGS"in e?Kn(Zn(pe),e.ADD_DATA_URI_TAGS,$):pe,ue="FORBID_CONTENTS"in e?Kn({},e.FORBID_CONTENTS,$):de,V="FORBID_TAGS"in e?Kn({},e.FORBID_TAGS,$):{},X="FORBID_ATTR"in e?Kn({},e.FORBID_ATTR,$):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Z=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ne=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,te=e.FORCE_BODY||!1,ie=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,be=e.NAMESPACE||Fe,G=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Y=!1),re&&(ne=!0),se&&(j=Kn({},Bn(ir)),P=[],!0===se.html&&(Kn(j,Qn),Kn(P,ar)),!0===se.svg&&(Kn(j,er),Kn(P,lr),Kn(P,sr)),!0===se.svgFilters&&(Kn(j,tr),Kn(P,lr),Kn(P,sr)),!0===se.mathMl&&(Kn(j,rr),Kn(P,cr),Kn(P,sr))),e.ADD_TAGS&&(j===W&&(j=Zn(j)),Kn(j,e.ADD_TAGS,$)),e.ADD_ATTR&&(P===U&&(P=Zn(P)),Kn(P,e.ADD_ATTR,$)),e.ADD_URI_SAFE_ATTR&&Kn(me,e.ADD_URI_SAFE_ATTR,$),e.FORBID_CONTENTS&&(ue===de&&(ue=Zn(ue)),Kn(ue,e.FORBID_CONTENTS,$)),le&&(j["#text"]=!0),Q&&Kn(j,["html","head","body"]),j.table&&(Kn(j,["tbody"]),delete V.tbody),On&&On(e),Be=e)},_e=Kn({},["mi","mo","mn","ms","mtext"]),ke=Kn({},["foreignobject","desc","title","annotation-xml"]),Te=Kn({},["title","style","font","a","script"]),Oe=Kn({},er);Kn(Oe,tr),Kn(Oe,nr);var $e=Kn({},rr);Kn($e,or);var Ce=function(e){Mn(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=E}catch(t){e.remove()}}},He=function(e,t){try{Mn(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Mn(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!P[e])if(ne||re)try{Ce(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ne=function(e){var t,n;if(te)e="<remove></remove>"+e;else{var r=Pn(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===O&&be===Fe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=S?S.createHTML(e):e;if(be===Fe)try{t=(new p).parseFromString(i,O)}catch(e){}if(!t||!t.documentElement){t=B.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?E:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),be===Fe?w.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},Le=function(e){return A.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Re=function(e){return"object"===Sn(l)?e instanceof l:e&&"object"===Sn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ie=function(e,t,r){T[e]&&In(T[e],(function(e){e.call(n,t,r,Be)}))},ze=function(e){var t,r;if(Ie("beforeSanitizeElements",e,null),(r=e)instanceof f&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof d)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return Ce(e),!0;if(Xn(/[\u0080-\uFFFF]/,e.nodeName))return Ce(e),!0;var o=$(e.nodeName);if(Ie("uponSanitizeElement",e,{tagName:o,allowedTags:j}),e.hasChildNodes()&&!Re(e.firstElementChild)&&(!Re(e.content)||!Re(e.content.firstElementChild))&&Xn(/<[/\w]/g,e.innerHTML)&&Xn(/<[/\w]/g,e.textContent))return Ce(e),!0;if("select"===o&&Xn(/<template/i,e.innerHTML))return Ce(e),!0;if(!j[o]||V[o]){if(!V[o]&&je(o)){if(G.tagNameCheck instanceof RegExp&&Xn(G.tagNameCheck,o))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(o))return!1}if(le&&!ue[o]){var i=b(e)||e.parentNode,a=F(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(h(a[l],!0),y(e))}return Ce(e),!0}return e instanceof c&&!function(e){var t=b(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});var n=jn(e.tagName),r=jn(t.tagName);return!!Se[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===Fe?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||_e[r]):Boolean(Oe[n]):e.namespaceURI===he?t.namespaceURI===Fe?"math"===n:t.namespaceURI===ye?"math"===n&&ke[r]:Boolean($e[n]):e.namespaceURI===Fe?!(t.namespaceURI===ye&&!ke[r])&&!(t.namespaceURI===he&&!_e[r])&&!$e[n]&&(Te[n]||!Oe[n]):!("application/xhtml+xml"!==O||!Se[e.namespaceURI]))}(e)?(Ce(e),!0):"noscript"!==o&&"noembed"!==o||!Xn(/<\/no(script|embed)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=Un(t,C," "),t=Un(t,H," "),t=Un(t,N," "),e.textContent!==t&&(Mn(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ie("afterSanitizeElements",e,null),!1):(Ce(e),!0)},Me=function(e,t,n){if(ie&&("id"===t||"name"===t)&&(n in o||n in Ae))return!1;if(Y&&!X[t]&&Xn(L,t));else if(q&&Xn(R,t));else if(!P[t]||X[t]){if(!(je(e)&&(G.tagNameCheck instanceof RegExp&&Xn(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&Xn(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&Xn(G.tagNameCheck,n)||G.tagNameCheck instanceof Function&&G.tagNameCheck(n))))return!1}else if(me[t]);else if(Xn(M,Un(n,z,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Gn(n,"data:")||!fe[e]){if(K&&!Xn(I,Un(n,z,"")));else if(n)return!1}else;return!0},je=function(e){return e.indexOf("-")>0},We=function(e){var t,r,o,i;Ie("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Vn(t.value),o=$(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,Ie("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(He(s,e),l.keepAttr))if(Z||!Xn(/\/>/i,r)){J&&(r=Un(r,C," "),r=Un(r,H," "),r=Un(r,N," "));var d=$(e.nodeName);if(Me(d,o,r)){if(!ae||"id"!==o&&"name"!==o||(He(s,e),r="user-content-"+r),S&&"object"===Sn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(d,o)){case"TrustedHTML":r=S.createHTML(r);break;case"TrustedScriptURL":r=S.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),zn(n.removed)}catch(e){}}}else He(s,e)}Ie("afterSanitizeAttributes",e,null)}},Pe=function e(t){var n,r=Le(t);for(Ie("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ie("uponSanitizeShadowNode",n,null),ze(n)||(n.content instanceof i&&e(n.content),We(n));Ie("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ve=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw qn("toString is not a function");if("string"!=typeof(e=e.toString()))throw qn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===Sn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Re(e))return t.toStaticHTML(e.outerHTML)}return e}if(ee||we(d),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var f=$(e.nodeName);if(!j[f]||V[f])throw qn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=Ne("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!ne&&!J&&!Q&&-1===e.indexOf("<"))return S&&oe?S.createHTML(e):e;if(!(o=Ne(e)))return ne?null:oe?E:""}o&&te&&Ce(o.firstChild);for(var p=Le(ce?e:o);c=p.nextNode();)3===c.nodeType&&c===s||ze(c)||(c.content instanceof i&&Pe(c.content),We(c),s=c);if(s=null,ce)return e;if(ne){if(re)for(u=x.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(P.shadowroot||P.shadowrootmod)&&(u=_.call(r,u,!0)),u}var m=Q?o.outerHTML:o.innerHTML;return Q&&j["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Xn(Fr,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),J&&(m=Un(m,C," "),m=Un(m,H," "),m=Un(m,N," ")),S&&oe?S.createHTML(m):m},n.setConfig=function(e){we(e),ee=!0},n.clearConfig=function(){Be=null,ee=!1},n.isValidAttribute=function(e,t,n){Be||we({});var r=$(e),o=$(t);return Me(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(T[e]=T[e]||[],Mn(T[e],t))},n.removeHook=function(e){if(T[e])return zn(T[e])},n.removeHooks=function(e){T[e]&&(T[e]=[])},n.removeAllHooks=function(){T={}},n}();const Sr=t=>n.forwardRef(((n,r)=>e(yn,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=vr.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:o}}),n)}{const r=t.otherAttributes;return e(vn.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{yn as NBComponent,vn as NotificationBanner,Sr as withNotificationBanner};
//# sourceMappingURL=index.js.map
