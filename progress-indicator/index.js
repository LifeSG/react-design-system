import e,{jsx as t,jsxs as n,Fragment as r}from"react/jsx-runtime";import i,{useState as o,useRef as a,useEffect as l}from"react";import c,{css as d}from"styled-components";const u={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=e=>Object.keys(u).reduce(((t,n)=>{const r=u[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),h=f("max-width"),g=(f("min-width"),u);var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,y="object"==typeof self&&self&&self.Object===Object&&self,S=m||y||Function("return this")(),v=S.Symbol,F=v,B=Object.prototype,b=B.hasOwnProperty,x=B.toString,$=F?F.toStringTag:void 0;var H=function(e){var t=b.call(e,$),n=e[$];try{e[$]=void 0;var r=!0}catch(e){}var i=x.call(e);return r&&(t?e[$]=n:delete e[$]),i},D=Object.prototype.toString;var w=H,_=function(e){return D.call(e)},z=v?v.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?w(e):_(e)};var C=E,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==C(e)},W=p,O=k,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var N=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(L.test(e)||!j.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=E,R=I;var V,P=function(e){if(!R(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=S["__core-js_shared__"],U=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var Z=function(e){return!!U&&U in e},M=Function.prototype.toString;var X=P,Y=Z,J=I,K=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||Y(e))&&(X(e)?re:q).test(K(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},le=ae(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fe=le,he=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},se=le,pe=Object.prototype.hasOwnProperty;var me=le;var ye=de,Se=ue,ve=ge,Fe=function(e){var t=this.__data__;return se?void 0!==t[e]:pe.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}be.prototype.clear=ye,be.prototype.delete=Se,be.prototype.get=ve,be.prototype.has=Fe,be.prototype.set=Be;var xe=be;var $e=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},we=De,_e=Array.prototype.splice;var ze=De;var Ee=De;var Ce=De;var Ae=$e,ke=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():_e.call(t,n,1),--this.size,!0)},We=function(e){var t=this.__data__,n=ze(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return Ee(this.__data__,e)>-1},je=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=Ae,Le.prototype.delete=ke,Le.prototype.get=We,Le.prototype.has=Oe,Le.prototype.set=je;var Ne=Le,Ie=ae(S,"Map"),Te=xe,Re=Ne,Ve=Ie;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ge=function(e,t){var n=e.__data__;return Pe(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Ge;var Ze=Ge;var Me=Ge;var Xe=Ge;var Ye=function(){this.size=0,this.__data__={hash:new Te,map:new(Ve||Re),string:new Te}},Je=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ze(this,e).get(e)},qe=function(e){return Me(this,e).has(e)},Qe=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ye,et.prototype.delete=Je,et.prototype.get=Ke,et.prototype.has=qe,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ct=p,dt=k,ut=v?v.prototype:void 0,ft=ut?ut.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return ft?ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},gt=ht;var st=function(e){return null==e?"":gt(e)},pt=p,mt=N,yt=at,St=st;var vt=k;var Ft=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(St(e))},Bt=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[Bt(t[n++])];return n&&n==r?e:void 0};var xt=function(e,t,n){var r=null==e?void 0:bt(e,t);return void 0===r?n:r};const $t=(e,t,n)=>t?xt(n,t)||xt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return xt(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=Ht(wt,n[Dt.colorScheme]);return n.options&&n.options.color?$t(r,e,n.options.color):$t(r,e)},zt={Brand:{1:_t("Brand.1"),2:_t("Brand.2"),3:_t("Brand.3"),4:_t("Brand.4"),5:_t("Brand.5"),6:_t("Brand.6")},Primary:_t("Primary"),PrimaryDark:_t("PrimaryDark"),Secondary:_t("Secondary"),Accent:{Light:{1:_t("Accent.Light.1"),2:_t("Accent.Light.2"),3:_t("Accent.Light.3"),4:_t("Accent.Light.4"),5:_t("Accent.Light.5"),6:_t("Accent.Light.6")},Dark:{1:_t("Accent.Dark.1"),2:_t("Accent.Dark.2"),3:_t("Accent.Dark.3")}},Neutral:{1:_t("Neutral.1"),2:_t("Neutral.2"),3:_t("Neutral.3"),4:_t("Neutral.4"),5:_t("Neutral.5"),6:_t("Neutral.6"),7:_t("Neutral.7"),8:_t("Neutral.8")},Validation:{Green:{Text:_t("Validation.Green.Text"),Icon:_t("Validation.Green.Icon"),Border:_t("Validation.Green.Border"),Background:_t("Validation.Green.Background")},Orange:{Text:_t("Validation.Orange.Text"),Icon:_t("Validation.Orange.Icon"),Border:_t("Validation.Orange.Border"),Background:_t("Validation.Orange.Background"),Badge:_t("Validation.Orange.Badge")},Red:{Text:_t("Validation.Red.Text"),Icon:_t("Validation.Red.Icon"),Border:_t("Validation.Red.Border"),Background:_t("Validation.Red.Background")},Blue:{Text:_t("Validation.Blue.Text"),Icon:_t("Validation.Blue.Icon"),Border:_t("Validation.Blue.Border"),Background:_t("Validation.Blue.Background")}},Shadow:{Accent:_t("Shadow.Accent"),Red:_t("Shadow.Red"),Elevation:_t("Shadow.Elevation")}},Et=i.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:o="flex",...a}=e;return t(Ct,{ref:n,"data-testid":i,type:o,...a,children:r})})),Ct=c.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${h.desktopM} {
        max-width: 1140px;
    }

    ${h.tablet} {
        max-width: 720px;
    }

    ${h.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.type){case"grid":return d`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${h.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${h.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return d`
                    display: flex;
                    flex-direction: column;
                `;default:return d`
                    display: flex;
                `}}}
`,At=i.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",...o}=e;return t(kt,{ref:n,"data-testid":i,...o,children:r})})),kt=c.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,Wt=i.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",...l}=e;return t(At,{ref:n,"data-testid":i,className:o,...l,children:t(Et,{"data-testid":`${i}-container`,type:a,"data-id":"container",children:r})})})),Ot={Section:At,Container:Et,Content:Wt},jt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Lt={collections:{base:{D1:{fontFamily:jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=Ht(Lt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?$t(r,e,n.options.textStyle):$t(r,e)},It={D1:{fontFamily:Nt("D1.fontFamily"),fontSize:Nt("D1.fontSize"),fontWeight:Nt("D1.fontWeight"),lineHeight:Nt("D1.lineHeight"),letterSpacing:Nt("D1.letterSpacing")},D2:{fontFamily:Nt("D2.fontFamily"),fontSize:Nt("D2.fontSize"),fontWeight:Nt("D2.fontWeight"),lineHeight:Nt("D2.lineHeight"),letterSpacing:Nt("D2.letterSpacing")},D3:{fontFamily:Nt("D3.fontFamily"),fontSize:Nt("D3.fontSize"),fontWeight:Nt("D3.fontWeight"),lineHeight:Nt("D3.lineHeight"),letterSpacing:Nt("D3.letterSpacing")},D4:{fontFamily:Nt("D4.fontFamily"),fontSize:Nt("D4.fontSize"),fontWeight:Nt("D4.fontWeight"),lineHeight:Nt("D4.lineHeight"),letterSpacing:Nt("D4.letterSpacing")},DBody:{fontFamily:Nt("DBody.fontFamily"),fontSize:Nt("DBody.fontSize"),fontWeight:Nt("DBody.fontWeight"),lineHeight:Nt("DBody.lineHeight"),letterSpacing:Nt("DBody.letterSpacing")},H1:{fontFamily:Nt("H1.fontFamily"),fontSize:Nt("H1.fontSize"),fontWeight:Nt("H1.fontWeight"),lineHeight:Nt("H1.lineHeight"),letterSpacing:Nt("H1.letterSpacing")},H2:{fontFamily:Nt("H2.fontFamily"),fontSize:Nt("H2.fontSize"),fontWeight:Nt("H2.fontWeight"),lineHeight:Nt("H2.lineHeight"),letterSpacing:Nt("H2.letterSpacing")},H3:{fontFamily:Nt("H3.fontFamily"),fontSize:Nt("H3.fontSize"),fontWeight:Nt("H3.fontWeight"),lineHeight:Nt("H3.lineHeight"),letterSpacing:Nt("H3.letterSpacing")},H4:{fontFamily:Nt("H4.fontFamily"),fontSize:Nt("H4.fontSize"),fontWeight:Nt("H4.fontWeight"),lineHeight:Nt("H4.lineHeight"),letterSpacing:Nt("H4.letterSpacing")},H5:{fontFamily:Nt("H5.fontFamily"),fontSize:Nt("H5.fontSize"),fontWeight:Nt("H5.fontWeight"),lineHeight:Nt("H5.lineHeight"),letterSpacing:Nt("H5.letterSpacing")},H6:{fontFamily:Nt("H6.fontFamily"),fontSize:Nt("H6.fontSize"),fontWeight:Nt("H6.fontWeight"),lineHeight:Nt("H6.lineHeight"),letterSpacing:Nt("H6.letterSpacing")},Body:{fontFamily:Nt("Body.fontFamily"),fontSize:Nt("Body.fontSize"),fontWeight:Nt("Body.fontWeight"),lineHeight:Nt("Body.lineHeight"),letterSpacing:Nt("Body.letterSpacing")},BodySmall:{fontFamily:Nt("BodySmall.fontFamily"),fontSize:Nt("BodySmall.fontSize"),fontWeight:Nt("BodySmall.fontWeight"),lineHeight:Nt("BodySmall.lineHeight"),letterSpacing:Nt("BodySmall.letterSpacing")},XSmall:{fontFamily:Nt("XSmall.fontFamily"),fontSize:Nt("XSmall.fontSize"),fontWeight:Nt("XSmall.fontWeight"),lineHeight:Nt("XSmall.lineHeight"),letterSpacing:Nt("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return jt.Bold;case 600:case"semibold":return jt.Semibold;case 300:case"light":return jt.Light;case 400:case"regular":return jt.Regular;default:return""}},Rt=(e,t)=>n=>{const r=It[e].fontFamily(n),i=It[e].fontWeight(n);return Object.values(jt).includes(r)?d`
                font-family: ${Tt(t)||Tt(i)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(Vt(t)||i)??"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=(e,t,n=!1)=>r=>{const i=It[e],o=i.fontSize(r);return d`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1)=>t?d`
            display: block;
        `:e?d`
            display: inline;
        `:d`
            display: block;
        `;var Ut,Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});var Mt=e;const Xt=e=>Mt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Mt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Yt;Xt.displayName="ExternalIcon",Ut=Zt.ExternalIcon=Xt,function(e){e.D1=c.h1`
        ${e=>d`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>d`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>d`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>d`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>d`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>d`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>d`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>d`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>d`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>d`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>d`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>d`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>d`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>d`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${zt.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>qt({...e,textStyle:"Body"}),Small:e=>qt({...e,textStyle:"BodySmall"})}}(Yt||(Yt={}));const Jt=c.a`
    ${e=>d`
            ${Pt(e.textStyle,e.weight)}
            color: ${zt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${zt.Secondary};

                svg {
                    color: ${zt.Secondary};
                }
            }
        `}
`,Kt=c(Ut)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qt=({external:e=!1,children:r,...i})=>n(Jt,{...i,children:[r,e&&t(Kt,{})]});var Qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qt||(Qt={}));const en=c.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${h.desktopM} {
        margin: 1.5rem 0;
    }

    ${h.tablet} {
        margin: 1rem 0;
    }
`,tn=c.nav`
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
`,nn=c.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{const{position:t,backgroundColor:n}=e;let r;const i="rgba(255,255,255,0.001)";return r="left"===t?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${h.tablet} {\n                ${r}\n            }\n        `}};
`;c(Ot.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const rn=c.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?zt.Accent.Light[1]:zt.Neutral[6])(e)};\n        `}};

    ${h.mobileL} {
        width: ${"10rem"};
    }
`,on=c(Yt.BodySmall)`
    margin-right: 0.5rem;

    ${e=>{const{highlighted:t}=e;return`color: ${(t?zt.Primary:zt.Neutral[4])(e)};`}};
`,an=c.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var ln=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var cn=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),dn=st,un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var hn=function(e){return(e=dn(e))&&e.replace(un,cn).replace(fn,"")},gn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var sn=function(e){return e.match(gn)||[]},pn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var mn=function(e){return pn.test(e)},yn="\\ud800-\\udfff",Sn="\\u2700-\\u27bf",vn="a-z\\xdf-\\xf6\\xf8-\\xff",Fn="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bn="["+Bn+"]",xn="\\d+",$n="["+Sn+"]",Hn="["+vn+"]",Dn="[^"+yn+Bn+xn+Sn+vn+Fn+"]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",_n="[\\ud800-\\udbff][\\udc00-\\udfff]",zn="["+Fn+"]",En="(?:"+Hn+"|"+Dn+")",Cn="(?:"+zn+"|"+Dn+")",An="(?:['’](?:d|ll|m|re|s|t|ve))?",kn="(?:['’](?:D|LL|M|RE|S|T|VE))?",Wn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",On="[\\ufe0e\\ufe0f]?",jn=On+Wn+("(?:\\u200d(?:"+["[^"+yn+"]",wn,_n].join("|")+")"+On+Wn+")*"),Ln="(?:"+[$n,wn,_n].join("|")+")"+jn,Nn=RegExp([zn+"?"+Hn+"+"+An+"(?="+[bn,zn,"$"].join("|")+")",Cn+"+"+kn+"(?="+[bn,zn+En,"$"].join("|")+")",zn+"?"+En+"+"+An,zn+"+"+kn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xn,Ln].join("|"),"g");var In=sn,Tn=mn,Rn=st,Vn=function(e){return e.match(Nn)||[]};var Pn=ln,Gn=hn,Un=function(e,t,n){return e=Rn(e),void 0===(t=n?void 0:t)?Tn(e)?Vn(e):In(e):e.match(t)||[]},Zn=RegExp("['’]","g");var Mn=function(e){return function(t){return Pn(Un(Gn(t).replace(Zn,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));const Xn=({steps:e,currentIndex:i,displayExtractor:c,fadeColor:d,fadePosition:u="both"})=>{const[f,h]=o(!!u),[s,p]=o("left"===u||"both"===u),[m,y]=o("right"===u||"both"===u),S=a(null),v=a(null);l((()=>{B(),window.addEventListener("resize",B);const e=v.current;return e&&e.addEventListener("scroll",B),()=>{window.removeEventListener("resize",B),e&&e.removeEventListener("scroll",B)}}),[]),l((()=>(F(),window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)})),[i]);const F=()=>{if(window.innerWidth>g.mobileL)return;const e=v.current;if(e){const t=10.5*i-4;e.scrollLeft=16*t}},B=()=>{if(f){h(window.innerWidth<g.mobileL);const e=v.current,t=S.current;e&&t&&e.scrollWidth>t.offsetWidth?(h(!0),p(e.scrollLeft>=1),y(e.scrollWidth-e.scrollLeft>t.offsetWidth)):h(!1)}},b=(e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step",x=(e,t)=>Mn(`${b(e,t)} ${e}`);if(!e.length)return null;return n(en,{ref:S,children:[t(tn,{ref:v,children:e.map(((e,r)=>{const o=r<=i,a=r===i?"bold":"regular";return n(an,{"aria-label":b(r,i),id:x(r,i),children:[t(rn,{highlighted:o}),t(on,{highlighted:o,weight:a,children:(l=e,c?c(l):l.toString())})]},r);var l}))}),f&&n(r,{children:[s&&t(nn,{backgroundColor:d,position:"left"}),m&&t(nn,{backgroundColor:d,position:"right"})]})]})};export{Xn as ProgressIndicator};
//# sourceMappingURL=index.js.map
