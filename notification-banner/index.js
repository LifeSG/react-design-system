import e,{jsx as t,jsxs as n}from"react/jsx-runtime";import r,{useState as o,useEffect as i}from"react";import a,{css as l}from"styled-components";var c,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u={};Object.defineProperty(u,"__esModule",{value:!0});var f=e;const d=e=>f.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:f.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});d.displayName="CrossIcon",c=u.CrossIcon=d;var p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,h="object"==typeof self&&self&&self.Object===Object&&self,g=m||h||Function("return this")(),y=g.Symbol,v=y,S=Object.prototype,b=S.hasOwnProperty,F=S.toString,w=v?v.toStringTag:void 0;var D=function(e){var t=b.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var o=F.call(e);return r&&(t?e[w]=n:delete e[w]),o},_=Object.prototype.toString;var E=D,x=function(e){return _.call(e)},A=y?y.toStringTag:void 0;var T=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?E(e):x(e)};var B=T,C=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==B(e)},N=p,k=H,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;var L=function(e,t){if(N(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!k(e))||($.test(e)||!O.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},z=T,M=R;var I,j=function(e){if(!M(e))return!1;var t=z(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},W=g["__core-js_shared__"],U=(I=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!U&&U in e},V=Function.prototype.toString;var G=function(e){if(null!=e){try{return V.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=j,q=P,Y=R,Z=G,K=/^\[object .+?Constructor\]$/,J=Function.prototype,Q=Object.prototype,ee=J.toString,te=Q.hasOwnProperty,ne=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Y(e)||q(e))&&(X(e)?ne:K).test(Z(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return re(n)?n:void 0},ae=ie(Object,"create"),le=ae;var ce=function(){this.__data__=le?le(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=ae,fe=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=ae,me=Object.prototype.hasOwnProperty;var he=ae;var ge=ce,ye=se,ve=de,Se=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=ge,Fe.prototype.delete=ye,Fe.prototype.get=ve,Fe.prototype.has=Se,Fe.prototype.set=be;var we=Fe;var De=function(){this.__data__=[],this.size=0};var _e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(_e(e[n][0],t))return n;return-1},xe=Ee,Ae=Array.prototype.splice;var Te=Ee;var Be=Ee;var Ce=Ee;var He=De,Ne=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ae.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=Te(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return Be(this.__data__,e)>-1},$e=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=He,Le.prototype.delete=Ne,Le.prototype.get=ke,Le.prototype.has=Oe,Le.prototype.set=$e;var Re=Le,ze=ie(g,"Map"),Me=we,Ie=Re,je=ze;var We=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ue=function(e,t){var n=e.__data__;return We(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Ue;var Ve=Ue;var Ge=Ue;var Xe=Ue;var qe=function(){this.size=0,this.__data__={hash:new Me,map:new(je||Ie),string:new Me}},Ye=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Ve(this,e).get(e)},Ke=function(e){return Ge(this,e).has(e)},Je=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=qe,Qe.prototype.delete=Ye,Qe.prototype.get=Ze,Qe.prototype.has=Ke,Qe.prototype.set=Je;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(tt.Cache||et),n}tt.Cache=et;var nt=tt;var rt=function(e){var t=nt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,at=rt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,o){t.push(r?o.replace(it,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ct=p,st=H,ut=y?y.prototype:void 0,ft=ut?ut.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(st(t))return ft?ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},pt=dt;var mt=p,ht=L,gt=at,yt=function(e){return null==e?"":pt(e)};var vt=H;var St=function(e,t){return mt(e)?e:ht(e,t)?[e]:gt(yt(e))},bt=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=St(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var wt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const Dt=(e,t,n)=>t?wt(n,t)||wt(e,t):n||e,_t=(e,t)=>{const n=t||e.defaultValue;return wt(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=_t(xt,n[Et.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Tt=(At("Brand.1"),At("Brand.2"),At("Brand.3"),At("Brand.4"),At("Brand.5"),At("Brand.6"),At("Primary")),Bt=(At("PrimaryDark"),At("Secondary")),Ct=(At("Accent.Light.1"),At("Accent.Light.2"),At("Accent.Light.3"),At("Accent.Light.4"),At("Accent.Light.5"),At("Accent.Light.6"),At("Accent.Dark.1"),At("Accent.Dark.2"),At("Accent.Dark.3"),{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")}),Ht={Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Nt=(At("Shadow.Accent"),At("Shadow.Red"),At("Shadow.Elevation"),a.button`
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
                background-color: ${Ct[7]};
            `}
    }
`),kt=r.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",...o},i)=>t(Nt,{ref:i,$outline:r,$highlight:n,...o,children:e}))),Ot={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},$t=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Lt=$t("max-width"),Rt=($t("min-width"),r.forwardRef(((e,n)=>{const{children:r,"data-testid":o="container",type:i="flex",...a}=e;return t(zt,{ref:n,"data-testid":o,type:i,...a,children:r})}))),zt=a.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${Lt.desktopM} {
        max-width: 1140px;
    }

    ${Lt.tablet} {
        max-width: 720px;
    }

    ${Lt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.type){case"grid":return l`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Lt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Lt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return l`
                    display: flex;
                    flex-direction: column;
                `;default:return l`
                    display: flex;
                `}}}
`,Mt=r.forwardRef(((e,n)=>{const{children:r,"data-testid":o="section",...i}=e;return t(It,{ref:n,"data-testid":o,...i,children:r})})),It=a.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,jt=r.forwardRef(((e,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",...l}=e;return t(Mt,{ref:n,"data-testid":o,className:i,...l,children:t(Rt,{"data-testid":`${o}-container`,type:a,"data-id":"container",children:r})})})),Wt={Section:Mt,Container:Rt,Content:jt},Ut={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Pt={collections:{base:{D1:{fontFamily:Ut.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ut.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ut.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ut.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ut.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ut.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ut.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ut.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ut.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ut.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ut.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ut.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ut.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ut.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,r=_t(Pt,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},Gt={D1:{fontFamily:Vt("D1.fontFamily"),fontSize:Vt("D1.fontSize"),fontWeight:Vt("D1.fontWeight"),lineHeight:Vt("D1.lineHeight"),letterSpacing:Vt("D1.letterSpacing")},D2:{fontFamily:Vt("D2.fontFamily"),fontSize:Vt("D2.fontSize"),fontWeight:Vt("D2.fontWeight"),lineHeight:Vt("D2.lineHeight"),letterSpacing:Vt("D2.letterSpacing")},D3:{fontFamily:Vt("D3.fontFamily"),fontSize:Vt("D3.fontSize"),fontWeight:Vt("D3.fontWeight"),lineHeight:Vt("D3.lineHeight"),letterSpacing:Vt("D3.letterSpacing")},D4:{fontFamily:Vt("D4.fontFamily"),fontSize:Vt("D4.fontSize"),fontWeight:Vt("D4.fontWeight"),lineHeight:Vt("D4.lineHeight"),letterSpacing:Vt("D4.letterSpacing")},DBody:{fontFamily:Vt("DBody.fontFamily"),fontSize:Vt("DBody.fontSize"),fontWeight:Vt("DBody.fontWeight"),lineHeight:Vt("DBody.lineHeight"),letterSpacing:Vt("DBody.letterSpacing")},H1:{fontFamily:Vt("H1.fontFamily"),fontSize:Vt("H1.fontSize"),fontWeight:Vt("H1.fontWeight"),lineHeight:Vt("H1.lineHeight"),letterSpacing:Vt("H1.letterSpacing")},H2:{fontFamily:Vt("H2.fontFamily"),fontSize:Vt("H2.fontSize"),fontWeight:Vt("H2.fontWeight"),lineHeight:Vt("H2.lineHeight"),letterSpacing:Vt("H2.letterSpacing")},H3:{fontFamily:Vt("H3.fontFamily"),fontSize:Vt("H3.fontSize"),fontWeight:Vt("H3.fontWeight"),lineHeight:Vt("H3.lineHeight"),letterSpacing:Vt("H3.letterSpacing")},H4:{fontFamily:Vt("H4.fontFamily"),fontSize:Vt("H4.fontSize"),fontWeight:Vt("H4.fontWeight"),lineHeight:Vt("H4.lineHeight"),letterSpacing:Vt("H4.letterSpacing")},H5:{fontFamily:Vt("H5.fontFamily"),fontSize:Vt("H5.fontSize"),fontWeight:Vt("H5.fontWeight"),lineHeight:Vt("H5.lineHeight"),letterSpacing:Vt("H5.letterSpacing")},H6:{fontFamily:Vt("H6.fontFamily"),fontSize:Vt("H6.fontSize"),fontWeight:Vt("H6.fontWeight"),lineHeight:Vt("H6.lineHeight"),letterSpacing:Vt("H6.letterSpacing")},Body:{fontFamily:Vt("Body.fontFamily"),fontSize:Vt("Body.fontSize"),fontWeight:Vt("Body.fontWeight"),lineHeight:Vt("Body.lineHeight"),letterSpacing:Vt("Body.letterSpacing")},BodySmall:{fontFamily:Vt("BodySmall.fontFamily"),fontSize:Vt("BodySmall.fontSize"),fontWeight:Vt("BodySmall.fontWeight"),lineHeight:Vt("BodySmall.lineHeight"),letterSpacing:Vt("BodySmall.letterSpacing")},XSmall:{fontFamily:Vt("XSmall.fontFamily"),fontSize:Vt("XSmall.fontSize"),fontWeight:Vt("XSmall.fontWeight"),lineHeight:Vt("XSmall.lineHeight"),letterSpacing:Vt("XSmall.letterSpacing")}},Xt=e=>{switch(e){case 700:case"bold":return Ut.Bold;case 600:case"semibold":return Ut.Semibold;case 300:case"light":return Ut.Light;case 400:case"regular":return Ut.Regular;default:return""}},qt=(e,t)=>n=>{const r=Gt[e].fontFamily(n),o=Gt[e].fontWeight(n);return Object.values(Ut).includes(r)?l`
                font-family: ${Xt(t)||Xt(o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Yt(t)||o)??"normal"};
        `},Yt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=qt,Kt=(e,t,n=!1)=>r=>{const o=Gt[e],i=o.fontSize(r);return l`
            ${qt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Jt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Qt,en={};Object.defineProperty(en,"__esModule",{value:!0});var tn=e;const nn=e=>tn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:tn.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var rn;nn.displayName="ExternalIcon",Qt=en.ExternalIcon=nn,function(e){e.D1=a.h1`
        ${e=>l`
                ${Kt("D1",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Kt("D2",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Kt("D3",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Kt("D4",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Kt("DBody",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Kt("H1",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Kt("H2",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Kt("H3",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Kt("H4",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Kt("H5",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Kt("H6",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Kt("Body",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Kt("BodySmall",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Kt("XSmall",e.weight,e.paragraph)}
                color: ${Ct[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ln({...e,textStyle:"Body"}),Small:e=>ln({...e,textStyle:"BodySmall"})}}(rn||(rn={}));const on=a.a`
    ${e=>l`
            ${Kt(e.textStyle,e.weight)}
            color: ${Tt};
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
`,an=a(Qt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ln=({external:e=!1,children:r,...o})=>n(on,{...o,children:[r,e&&t(an,{})]});var cn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cn||(cn={}));const sn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",un=l`
    color: ${Ht.Orange.Icon};

    svg {
        color: ${Ht.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Ht.Orange.Icon};
        svg {
            color: ${Ht.Orange.Icon};
        }
    }
`,fn=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${sn};
    background: ${Ct[2]};
    z-index: 25;
`,dn=a(Wt.Content)`
    display: flex;
`,pn=a.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,mn=a.div`
    display: inline-block;
    width: 100%;

    ${Kt("Body","regular")}
    color: ${Ct[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Zt("Body","semibold")}
        color: ${Ct[8]};
    }

    a {
        ${Kt("Body","regular")}
        ${un}
    }
`,hn=a(rn.Hyperlink.Default)`
    position: relative;

    ${un}
`,gn=a(kt)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,yn=a(c)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Ct[8]};
`,vn=({children:e,visible:r=!0,dismissible:a=!0,sticky:l=!0,onDismiss:c,id:s,forwardedRef:u,...f})=>{const d=f["data-testid"],[p,m]=o(r);i((()=>{m(r)}),[r]);return p?t(fn,{ref:u,$sticky:l,...f,children:n(dn,{id:Sn("container",s),children:[t(pn,{children:t(mn,{"data-testid":Sn("text-content",d),children:e})}),a&&t(gn,{onClick:()=>{m(!1),a&&c&&c()},id:Sn("dismiss-button",s),"data-testid":Sn("dismiss-button",d),focusHighlight:!1,children:t(yn,{})})]})}):null},Sn=(e,t="wrapper")=>`${t}-${e}`,bn=r.forwardRef(((e,n)=>t(vn,{...e,forwardedRef:n}))),Fn=Object.assign(bn,{Link:hn});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function wn(e){return wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wn(e)}function Dn(e,t){return Dn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Dn(e,t)}function _n(e,t,n){return _n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Dn(o,n.prototype),o},_n.apply(null,arguments)}function En(e){return function(e){if(Array.isArray(e))return xn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var An=Object.hasOwnProperty,Tn=Object.setPrototypeOf,Bn=Object.isFrozen,Cn=Object.getPrototypeOf,Hn=Object.getOwnPropertyDescriptor,Nn=Object.freeze,kn=Object.seal,On=Object.create,$n="undefined"!=typeof Reflect&&Reflect,Ln=$n.apply,Rn=$n.construct;Ln||(Ln=function(e,t,n){return e.apply(t,n)}),Nn||(Nn=function(e){return e}),kn||(kn=function(e){return e}),Rn||(Rn=function(e,t){return _n(e,En(t))});var zn,Mn=Zn(Array.prototype.forEach),In=Zn(Array.prototype.pop),jn=Zn(Array.prototype.push),Wn=Zn(String.prototype.toLowerCase),Un=Zn(String.prototype.toString),Pn=Zn(String.prototype.match),Vn=Zn(String.prototype.replace),Gn=Zn(String.prototype.indexOf),Xn=Zn(String.prototype.trim),qn=Zn(RegExp.prototype.test),Yn=(zn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Rn(zn,t)});function Zn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Ln(e,t,r)}}function Kn(e,t,n){n=n||Wn,Tn&&Tn(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(Bn(t)||(t[r]=i),o=i)}e[o]=!0}return e}function Jn(e){var t,n=On(null);for(t in e)!0===Ln(An,e,[t])&&(n[t]=e[t]);return n}function Qn(e,t){for(;null!==e;){var n=Hn(e,t);if(n){if(n.get)return Zn(n.get);if("function"==typeof n.value)return Zn(n.value)}e=Cn(e)}return function(e){return console.warn("fallback value for",e),null}}var er=Nn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),tr=Nn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nr=Nn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rr=Nn(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),or=Nn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),ir=Nn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ar=Nn(["#text"]),lr=Nn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),cr=Nn(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),sr=Nn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ur=Nn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),fr=kn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dr=kn(/<%[\w\W]*|[\w\W]*%>/gm),pr=kn(/\${[\w\W]*}/gm),mr=kn(/^data-[\-\w.\u00B7-\uFFFF]/),hr=kn(/^aria-[\-\w]+$/),gr=kn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),yr=kn(/^(?:\w+script|data):/i),vr=kn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Sr=kn(/^html$/i),br=function(){return"undefined"==typeof window?null:window};var Fr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:br(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,d=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=Qn(h,"cloneNode"),y=Qn(h,"nextSibling"),v=Qn(h,"childNodes"),S=Qn(h,"parentNode");if("function"==typeof a){var b=o.createElement("template");b.content&&b.content.ownerDocument&&(o=b.content.ownerDocument)}var F=function(e,t){if("object"!==wn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(m,r),w=F?F.createHTML(""):"",D=o,_=D.implementation,E=D.createNodeIterator,x=D.createDocumentFragment,A=D.getElementsByTagName,T=r.importNode,B={};try{B=Jn(o).documentMode?o.documentMode:{}}catch(e){}var C={};n.isSupported="function"==typeof S&&_&&void 0!==_.createHTMLDocument&&9!==B;var H,N,k=fr,O=dr,$=pr,L=mr,R=hr,z=yr,M=vr,I=gr,j=null,W=Kn({},[].concat(En(er),En(tr),En(nr),En(or),En(ar))),U=null,P=Kn({},[].concat(En(lr),En(cr),En(sr),En(ur))),V=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),G=null,X=null,q=!0,Y=!0,Z=!1,K=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,oe=!1,ie=!0,ae=!1,le=!0,ce=!1,se={},ue=null,fe=Kn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),de=null,pe=Kn({},["audio","video","img","source","image","track"]),me=null,he=Kn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml",Se=ve,be=!1,Fe=null,we=Kn({},[ge,ye,ve],Un),De=["application/xhtml+xml","text/html"],_e=null,Ee=o.createElement("form"),xe=function(e){return e instanceof RegExp||e instanceof Function},Ae=function(e){_e&&_e===e||(e&&"object"===wn(e)||(e={}),e=Jn(e),H=H=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,N="application/xhtml+xml"===H?Un:Wn,j="ALLOWED_TAGS"in e?Kn({},e.ALLOWED_TAGS,N):W,U="ALLOWED_ATTR"in e?Kn({},e.ALLOWED_ATTR,N):P,Fe="ALLOWED_NAMESPACES"in e?Kn({},e.ALLOWED_NAMESPACES,Un):we,me="ADD_URI_SAFE_ATTR"in e?Kn(Jn(he),e.ADD_URI_SAFE_ATTR,N):he,de="ADD_DATA_URI_TAGS"in e?Kn(Jn(pe),e.ADD_DATA_URI_TAGS,N):pe,ue="FORBID_CONTENTS"in e?Kn({},e.FORBID_CONTENTS,N):fe,G="FORBID_TAGS"in e?Kn({},e.FORBID_TAGS,N):{},X="FORBID_ATTR"in e?Kn({},e.FORBID_ATTR,N):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,Z=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ne=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,te=e.FORCE_BODY||!1,ie=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,I=e.ALLOWED_URI_REGEXP||I,Se=e.NAMESPACE||ve,V=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(V.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(V.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(V.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Y=!1),re&&(ne=!0),se&&(j=Kn({},En(ar)),U=[],!0===se.html&&(Kn(j,er),Kn(U,lr)),!0===se.svg&&(Kn(j,tr),Kn(U,cr),Kn(U,ur)),!0===se.svgFilters&&(Kn(j,nr),Kn(U,cr),Kn(U,ur)),!0===se.mathMl&&(Kn(j,or),Kn(U,sr),Kn(U,ur))),e.ADD_TAGS&&(j===W&&(j=Jn(j)),Kn(j,e.ADD_TAGS,N)),e.ADD_ATTR&&(U===P&&(U=Jn(U)),Kn(U,e.ADD_ATTR,N)),e.ADD_URI_SAFE_ATTR&&Kn(me,e.ADD_URI_SAFE_ATTR,N),e.FORBID_CONTENTS&&(ue===fe&&(ue=Jn(ue)),Kn(ue,e.FORBID_CONTENTS,N)),le&&(j["#text"]=!0),Q&&Kn(j,["html","head","body"]),j.table&&(Kn(j,["tbody"]),delete G.tbody),Nn&&Nn(e),_e=e)},Te=Kn({},["mi","mo","mn","ms","mtext"]),Be=Kn({},["foreignobject","desc","title","annotation-xml"]),Ce=Kn({},["title","style","font","a","script"]),He=Kn({},tr);Kn(He,nr),Kn(He,rr);var Ne=Kn({},or);Kn(Ne,ir);var ke=function(e){jn(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=w}catch(t){e.remove()}}},Oe=function(e,t){try{jn(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){jn(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!U[e])if(ne||re)try{ke(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},$e=function(e){var t,n;if(te)e="<remove></remove>"+e;else{var r=Pn(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===H&&Se===ve&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=F?F.createHTML(e):e;if(Se===ve)try{t=(new p).parseFromString(i,H)}catch(e){}if(!t||!t.documentElement){t=_.createDocument(Se,"template",null);try{t.documentElement.innerHTML=be?w:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Se===ve?A.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},Le=function(e){return E.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Re=function(e){return"object"===wn(l)?e instanceof l:e&&"object"===wn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,r){C[e]&&Mn(C[e],(function(e){e.call(n,t,r,_e)}))},Me=function(e){var t,r;if(ze("beforeSanitizeElements",e,null),(r=e)instanceof d&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof f)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return ke(e),!0;if(qn(/[\u0080-\uFFFF]/,e.nodeName))return ke(e),!0;var o=N(e.nodeName);if(ze("uponSanitizeElement",e,{tagName:o,allowedTags:j}),e.hasChildNodes()&&!Re(e.firstElementChild)&&(!Re(e.content)||!Re(e.content.firstElementChild))&&qn(/<[/\w]/g,e.innerHTML)&&qn(/<[/\w]/g,e.textContent))return ke(e),!0;if("select"===o&&qn(/<template/i,e.innerHTML))return ke(e),!0;if(!j[o]||G[o]){if(!G[o]&&je(o)){if(V.tagNameCheck instanceof RegExp&&qn(V.tagNameCheck,o))return!1;if(V.tagNameCheck instanceof Function&&V.tagNameCheck(o))return!1}if(le&&!ue[o]){var i=S(e)||e.parentNode,a=v(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(g(a[l],!0),y(e))}return ke(e),!0}return e instanceof c&&!function(e){var t=S(e);t&&t.tagName||(t={namespaceURI:Se,tagName:"template"});var n=Wn(e.tagName),r=Wn(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===ve?"svg"===n:t.namespaceURI===ge?"svg"===n&&("annotation-xml"===r||Te[r]):Boolean(He[n]):e.namespaceURI===ge?t.namespaceURI===ve?"math"===n:t.namespaceURI===ye?"math"===n&&Be[r]:Boolean(Ne[n]):e.namespaceURI===ve?!(t.namespaceURI===ye&&!Be[r])&&!(t.namespaceURI===ge&&!Te[r])&&!Ne[n]&&(Ce[n]||!He[n]):!("application/xhtml+xml"!==H||!Fe[e.namespaceURI]))}(e)?(ke(e),!0):"noscript"!==o&&"noembed"!==o||!qn(/<\/no(script|embed)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=Vn(t,k," "),t=Vn(t,O," "),t=Vn(t,$," "),e.textContent!==t&&(jn(n.removed,{element:e.cloneNode()}),e.textContent=t)),ze("afterSanitizeElements",e,null),!1):(ke(e),!0)},Ie=function(e,t,n){if(ie&&("id"===t||"name"===t)&&(n in o||n in Ee))return!1;if(Y&&!X[t]&&qn(L,t));else if(q&&qn(R,t));else if(!U[t]||X[t]){if(!(je(e)&&(V.tagNameCheck instanceof RegExp&&qn(V.tagNameCheck,e)||V.tagNameCheck instanceof Function&&V.tagNameCheck(e))&&(V.attributeNameCheck instanceof RegExp&&qn(V.attributeNameCheck,t)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(t))||"is"===t&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&qn(V.tagNameCheck,n)||V.tagNameCheck instanceof Function&&V.tagNameCheck(n))))return!1}else if(me[t]);else if(qn(I,Vn(n,M,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Gn(n,"data:")||!de[e]){if(Z&&!qn(z,Vn(n,M,"")));else if(n)return!1}else;return!0},je=function(e){return e.indexOf("-")>0},We=function(e){var t,r,o,i;ze("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:U};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Xn(t.value),o=N(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ze("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Oe(s,e),l.keepAttr))if(K||!qn(/\/>/i,r)){J&&(r=Vn(r,k," "),r=Vn(r,O," "),r=Vn(r,$," "));var f=N(e.nodeName);if(Ie(f,o,r)){if(!ae||"id"!==o&&"name"!==o||(Oe(s,e),r="user-content-"+r),F&&"object"===wn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,o)){case"TrustedHTML":r=F.createHTML(r);break;case"TrustedScriptURL":r=F.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),In(n.removed)}catch(e){}}}else Oe(s,e)}ze("afterSanitizeAttributes",e,null)}},Ue=function e(t){var n,r=Le(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),Me(n)||(n.content instanceof i&&e(n.content),We(n));ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((be=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw Yn("toString is not a function");if("string"!=typeof(e=e.toString()))throw Yn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===wn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Re(e))return t.toStaticHTML(e.outerHTML)}return e}if(ee||Ae(f),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var d=N(e.nodeName);if(!j[d]||G[d])throw Yn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=$e("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!ne&&!J&&!Q&&-1===e.indexOf("<"))return F&&oe?F.createHTML(e):e;if(!(o=$e(e)))return ne?null:oe?w:""}o&&te&&ke(o.firstChild);for(var p=Le(ce?e:o);c=p.nextNode();)3===c.nodeType&&c===s||Me(c)||(c.content instanceof i&&Ue(c.content),We(c),s=c);if(s=null,ce)return e;if(ne){if(re)for(u=x.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(U.shadowroot||U.shadowrootmod)&&(u=T.call(r,u,!0)),u}var m=Q?o.outerHTML:o.innerHTML;return Q&&j["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&qn(Sr,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),J&&(m=Vn(m,k," "),m=Vn(m,O," "),m=Vn(m,$," ")),F&&oe?F.createHTML(m):m},n.setConfig=function(e){Ae(e),ee=!0},n.clearConfig=function(){_e=null,ee=!1},n.isValidAttribute=function(e,t,n){_e||Ae({});var r=N(e),o=N(t);return Ie(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(C[e]=C[e]||[],jn(C[e],t))},n.removeHook=function(e){if(C[e])return In(C[e])},n.removeHooks=function(e){C[e]&&(C[e]=[])},n.removeAllHooks=function(){C={}},n}();const wr=e=>r.forwardRef(((n,r)=>t(vn,{forwardedRef:r,...n,children:e.length>0?e.map(((e,n)=>{if("text"===e.type){const r=e.otherAttributes,o=Fr.sanitize(e.content);return t("p",{...r,dangerouslySetInnerHTML:{__html:o}},n)}{const r=e.otherAttributes;return t(Fn.Link,{...r,children:e.content},n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})));export{vn as NBComponent,Fn as NotificationBanner,wr as withNotificationBanner};
//# sourceMappingURL=index.js.map
