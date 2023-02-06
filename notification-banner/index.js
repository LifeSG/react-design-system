import e,{jsx as t,jsxs as n}from"react/jsx-runtime";import r,{useState as o,useEffect as i}from"react";import a,{css as l}from"styled-components";var c,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u={};Object.defineProperty(u,"__esModule",{value:!0});var f=e;const d=e=>f.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:f.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});d.displayName="CrossIcon",c=u.CrossIcon=d;var p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,h="object"==typeof self&&self&&self.Object===Object&&self,g=m||h||Function("return this")(),y=g.Symbol,v=y,b=Object.prototype,S=b.hasOwnProperty,F=b.toString,w=v?v.toStringTag:void 0;var D=function(e){var t=S.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var o=F.call(e);return r&&(t?e[w]=n:delete e[w]),o},_=Object.prototype.toString;var E=D,x=function(e){return _.call(e)},A=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?E(e):x(e)};var H=C,T=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==H(e)},k=p,B=N,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;var L=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!B(e))||($.test(e)||!O.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},z=C,M=R;var I,j=function(e){if(!M(e))return!1;var t=z(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},W=g["__core-js_shared__"],P=(I=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var U=function(e){return!!P&&P in e},G=Function.prototype.toString;var V=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=j,q=U,Y=R,Z=V,K=/^\[object .+?Constructor\]$/,J=Function.prototype,Q=Object.prototype,ee=J.toString,te=Q.hasOwnProperty,ne=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Y(e)||q(e))&&(X(e)?ne:K).test(Z(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return re(n)?n:void 0},ae=ie(Object,"create"),le=ae;var ce=function(){this.__data__=le?le(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=ae,fe=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=ae,me=Object.prototype.hasOwnProperty;var he=ae;var ge=ce,ye=se,ve=de,be=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=ge,Fe.prototype.delete=ye,Fe.prototype.get=ve,Fe.prototype.has=be,Fe.prototype.set=Se;var we=Fe;var De=function(){this.__data__=[],this.size=0};var _e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(_e(e[n][0],t))return n;return-1},xe=Ee,Ae=Array.prototype.splice;var Ce=Ee;var He=Ee;var Te=Ee;var Ne=De,ke=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ae.call(t,n,1),--this.size,!0)},Be=function(e){var t=this.__data__,n=Ce(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return He(this.__data__,e)>-1},$e=function(e,t){var n=this.__data__,r=Te(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=Ne,Le.prototype.delete=ke,Le.prototype.get=Be,Le.prototype.has=Oe,Le.prototype.set=$e;var Re=Le,ze=ie(g,"Map"),Me=we,Ie=Re,je=ze;var We=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return We(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Pe;var Ge=Pe;var Ve=Pe;var Xe=Pe;var qe=function(){this.size=0,this.__data__={hash:new Me,map:new(je||Ie),string:new Me}},Ye=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Ge(this,e).get(e)},Ke=function(e){return Ve(this,e).has(e)},Je=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=qe,Qe.prototype.delete=Ye,Qe.prototype.get=Ze,Qe.prototype.has=Ke,Qe.prototype.set=Je;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(tt.Cache||et),n}tt.Cache=et;var nt=tt;var rt=function(e){var t=nt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,at=rt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,o){t.push(r?o.replace(it,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ct=p,st=N,ut=y?y.prototype:void 0,ft=ut?ut.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(st(t))return ft?ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},pt=dt;var mt=p,ht=L,gt=at,yt=function(e){return null==e?"":pt(e)};var vt=N;var bt=function(e,t){return mt(e)?e:ht(e,t)?[e]:gt(yt(e))},St=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=bt(t,e)).length;null!=e&&n<r;)e=e[St(t[n++])];return n&&n==r?e:void 0};var wt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const Dt=(e,t,n)=>t?wt(n,t)||wt(e,t):n||e,_t=(e,t)=>{const n=t||e.defaultValue;return wt(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Et||(Et={}));const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=_t(xt,n[Et.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Ct=(At("Brand.1"),At("Brand.2"),At("Brand.3"),At("Brand.4"),At("Brand.5"),At("Brand.6"),At("Primary")),Ht=(At("PrimaryDark"),At("Secondary")),Tt=(At("Accent.Light.1"),At("Accent.Light.2"),At("Accent.Light.3"),At("Accent.Light.4"),At("Accent.Light.5"),At("Accent.Light.6"),At("Accent.Dark.1"),At("Accent.Dark.2"),At("Accent.Dark.3"),{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")}),Nt={Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")}},kt=a.button`
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
                background-color: ${Tt[7]};
            `}
    }
`,Bt=r.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",...o},i)=>t(kt,{ref:i,$outline:r,$highlight:n,...o,children:e}))),Ot={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},$t=e=>Object.keys(Ot).reduce(((t,n)=>{const r=Ot[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Lt=$t("max-width"),Rt=($t("min-width"),r.forwardRef(((e,n)=>{const{children:r,"data-testid":o="container",type:i="flex",...a}=e;return t(zt,{ref:n,"data-testid":o,type:i,...a,children:r})}))),zt=a.div`
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
`,jt=r.forwardRef(((e,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",...l}=e;return t(Mt,{ref:n,"data-testid":o,className:i,...l,children:t(Rt,{"data-testid":`${o}-container`,type:a,"data-id":"container",children:r})})})),Wt={Section:Mt,Container:Rt,Content:jt},Pt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ut={collections:{base:{D1:{fontFamily:Pt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Pt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Pt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Pt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Pt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Pt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Pt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Pt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Pt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Pt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Pt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Pt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Pt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Pt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Gt=e=>t=>{const n=t.theme,r=_t(Ut,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},Vt={D1:{fontFamily:Gt("D1.fontFamily"),fontSize:Gt("D1.fontSize"),fontWeight:Gt("D1.fontWeight"),lineHeight:Gt("D1.lineHeight"),letterSpacing:Gt("D1.letterSpacing")},D2:{fontFamily:Gt("D2.fontFamily"),fontSize:Gt("D2.fontSize"),fontWeight:Gt("D2.fontWeight"),lineHeight:Gt("D2.lineHeight"),letterSpacing:Gt("D2.letterSpacing")},D3:{fontFamily:Gt("D3.fontFamily"),fontSize:Gt("D3.fontSize"),fontWeight:Gt("D3.fontWeight"),lineHeight:Gt("D3.lineHeight"),letterSpacing:Gt("D3.letterSpacing")},D4:{fontFamily:Gt("D4.fontFamily"),fontSize:Gt("D4.fontSize"),fontWeight:Gt("D4.fontWeight"),lineHeight:Gt("D4.lineHeight"),letterSpacing:Gt("D4.letterSpacing")},DBody:{fontFamily:Gt("DBody.fontFamily"),fontSize:Gt("DBody.fontSize"),fontWeight:Gt("DBody.fontWeight"),lineHeight:Gt("DBody.lineHeight"),letterSpacing:Gt("DBody.letterSpacing")},H1:{fontFamily:Gt("H1.fontFamily"),fontSize:Gt("H1.fontSize"),fontWeight:Gt("H1.fontWeight"),lineHeight:Gt("H1.lineHeight"),letterSpacing:Gt("H1.letterSpacing")},H2:{fontFamily:Gt("H2.fontFamily"),fontSize:Gt("H2.fontSize"),fontWeight:Gt("H2.fontWeight"),lineHeight:Gt("H2.lineHeight"),letterSpacing:Gt("H2.letterSpacing")},H3:{fontFamily:Gt("H3.fontFamily"),fontSize:Gt("H3.fontSize"),fontWeight:Gt("H3.fontWeight"),lineHeight:Gt("H3.lineHeight"),letterSpacing:Gt("H3.letterSpacing")},H4:{fontFamily:Gt("H4.fontFamily"),fontSize:Gt("H4.fontSize"),fontWeight:Gt("H4.fontWeight"),lineHeight:Gt("H4.lineHeight"),letterSpacing:Gt("H4.letterSpacing")},H5:{fontFamily:Gt("H5.fontFamily"),fontSize:Gt("H5.fontSize"),fontWeight:Gt("H5.fontWeight"),lineHeight:Gt("H5.lineHeight"),letterSpacing:Gt("H5.letterSpacing")},H6:{fontFamily:Gt("H6.fontFamily"),fontSize:Gt("H6.fontSize"),fontWeight:Gt("H6.fontWeight"),lineHeight:Gt("H6.lineHeight"),letterSpacing:Gt("H6.letterSpacing")},Body:{fontFamily:Gt("Body.fontFamily"),fontSize:Gt("Body.fontSize"),fontWeight:Gt("Body.fontWeight"),lineHeight:Gt("Body.lineHeight"),letterSpacing:Gt("Body.letterSpacing")},BodySmall:{fontFamily:Gt("BodySmall.fontFamily"),fontSize:Gt("BodySmall.fontSize"),fontWeight:Gt("BodySmall.fontWeight"),lineHeight:Gt("BodySmall.lineHeight"),letterSpacing:Gt("BodySmall.letterSpacing")},XSmall:{fontFamily:Gt("XSmall.fontFamily"),fontSize:Gt("XSmall.fontSize"),fontWeight:Gt("XSmall.fontWeight"),lineHeight:Gt("XSmall.lineHeight"),letterSpacing:Gt("XSmall.letterSpacing")}},Xt=e=>{switch(e){case 700:case"bold":return Pt.Bold;case 600:case"semibold":return Pt.Semibold;case 300:case"light":return Pt.Light;case 400:case"regular":return Pt.Regular;default:return""}},qt=(e,t)=>n=>{const r=Vt[e].fontFamily(n),o=Vt[e].fontWeight(n);return Object.values(Pt).includes(r)?l`
                font-family: ${Xt(t)||Xt(o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Yt(t)||o)??"normal"};
        `},Yt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=qt,Kt=(e,t,n=!1)=>r=>{const o=Vt[e],i=o.fontSize(r);return l`
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
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${Kt("D2",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${Kt("D3",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${Kt("D4",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${Kt("DBody",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${Kt("H1",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${Kt("H2",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${Kt("H3",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${Kt("H4",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${Kt("H5",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${Kt("H6",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${Kt("Body",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${Kt("BodySmall",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${Kt("XSmall",e.weight,e.paragraph)}
                color: ${Tt[1]};
                ${Jt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ln({...e,textStyle:"Body"}),Small:e=>ln({...e,textStyle:"BodySmall"})}}(rn||(rn={}));const on=a.a`
    ${e=>l`
            ${Kt(e.textStyle,e.weight)}
            color: ${Ct};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht};

                svg {
                    color: ${Ht};
                }
            }
        `}
`,an=a(Qt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ln=({external:e=!1,children:r,...o})=>n(on,{...o,children:[r,e&&t(an,{})]});var cn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cn||(cn={}));const sn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",un=l`
    color: ${Nt.Orange.Icon};

    svg {
        color: ${Nt.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Nt.Orange.Icon};
        svg {
            color: ${Nt.Orange.Icon};
        }
    }
`,fn=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${sn};
    background: ${Tt[2]};
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
    color: ${Tt[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Zt("Body","semibold")}
        color: ${Tt[8]};
    }

    a {
        ${Kt("Body","regular")}
        ${un}
    }
`,hn=a(rn.Hyperlink.Default)`
    position: relative;

    ${un}
`,gn=a(Bt)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,yn=a(c)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Tt[8]};
`,vn=({children:e,visible:r=!0,dismissible:a=!0,sticky:l=!0,onDismiss:c,id:s,forwardedRef:u,...f})=>{const d=f["data-testid"],[p,m]=o(r);i((()=>{m(r)}),[r]);return p?t(fn,{ref:u,$sticky:l,...f,children:n(dn,{id:bn("container",s),children:[t(pn,{children:t(mn,{"data-testid":bn("text-content",d),children:e})}),a&&t(gn,{onClick:()=>{m(!1),a&&c&&c()},id:bn("dismiss-button",s),"data-testid":bn("dismiss-button",d),focusHighlight:!1,children:t(yn,{})})]})}):null},bn=(e,t="wrapper")=>`${t}-${e}`,Sn=r.forwardRef(((e,n)=>t(vn,{...e,forwardedRef:n}))),Fn=Object.assign(Sn,{Link:hn});
/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */
function wn(e){return wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wn(e)}function Dn(e,t){return Dn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Dn(e,t)}function _n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function En(e,t,n){return En=_n()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Dn(o,n.prototype),o},En.apply(null,arguments)}function xn(e){return function(e){if(Array.isArray(e))return An(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return An(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return An(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function An(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Cn=Object.hasOwnProperty,Hn=Object.setPrototypeOf,Tn=Object.isFrozen,Nn=Object.getPrototypeOf,kn=Object.getOwnPropertyDescriptor,Bn=Object.freeze,On=Object.seal,$n=Object.create,Ln="undefined"!=typeof Reflect&&Reflect,Rn=Ln.apply,zn=Ln.construct;Rn||(Rn=function(e,t,n){return e.apply(t,n)}),Bn||(Bn=function(e){return e}),On||(On=function(e){return e}),zn||(zn=function(e,t){return En(e,xn(t))});var Mn,In=Kn(Array.prototype.forEach),jn=Kn(Array.prototype.pop),Wn=Kn(Array.prototype.push),Pn=Kn(String.prototype.toLowerCase),Un=Kn(String.prototype.toString),Gn=Kn(String.prototype.match),Vn=Kn(String.prototype.replace),Xn=Kn(String.prototype.indexOf),qn=Kn(String.prototype.trim),Yn=Kn(RegExp.prototype.test),Zn=(Mn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return zn(Mn,t)});function Kn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Rn(e,t,r)}}function Jn(e,t,n){n=n||Pn,Hn&&Hn(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(Tn(t)||(t[r]=i),o=i)}e[o]=!0}return e}function Qn(e){var t,n=$n(null);for(t in e)Rn(Cn,e,[t])&&(n[t]=e[t]);return n}function er(e,t){for(;null!==e;){var n=kn(e,t);if(n){if(n.get)return Kn(n.get);if("function"==typeof n.value)return Kn(n.value)}e=Nn(e)}return function(e){return console.warn("fallback value for",e),null}}var tr=Bn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),nr=Bn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),rr=Bn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),or=Bn(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ir=Bn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),ar=Bn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),lr=Bn(["#text"]),cr=Bn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),sr=Bn(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ur=Bn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fr=Bn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),dr=On(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pr=On(/<%[\w\W]*|[\w\W]*%>/gm),mr=On(/\${[\w\W]*}/gm),hr=On(/^data-[\-\w.\u00B7-\uFFFF]/),gr=On(/^aria-[\-\w]+$/),yr=On(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vr=On(/^(?:\w+script|data):/i),br=On(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Sr=On(/^html$/i),Fr=function(){return"undefined"==typeof window?null:window},wr=function(e,t){if("object"!==wn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};var Dr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fr(),n=function(t){return e(t)};if(n.version="2.4.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,d=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=er(h,"cloneNode"),y=er(h,"nextSibling"),v=er(h,"childNodes"),b=er(h,"parentNode");if("function"==typeof a){var S=o.createElement("template");S.content&&S.content.ownerDocument&&(o=S.content.ownerDocument)}var F=wr(m,r),w=F?F.createHTML(""):"",D=o,_=D.implementation,E=D.createNodeIterator,x=D.createDocumentFragment,A=D.getElementsByTagName,C=r.importNode,H={};try{H=Qn(o).documentMode?o.documentMode:{}}catch(e){}var T={};n.isSupported="function"==typeof b&&_&&void 0!==_.createHTMLDocument&&9!==H;var N,k,B=dr,O=pr,$=mr,L=hr,R=gr,z=vr,M=br,I=yr,j=null,W=Jn({},[].concat(xn(tr),xn(nr),xn(rr),xn(ir),xn(lr))),P=null,U=Jn({},[].concat(xn(cr),xn(sr),xn(ur),xn(fr))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,X=null,q=!0,Y=!0,Z=!1,K=!1,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,oe=!0,ie=!1,ae="user-content-",le=!0,ce=!1,se={},ue=null,fe=Jn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),de=null,pe=Jn({},["audio","video","img","source","image","track"]),me=null,he=Jn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml",be=ve,Se=!1,Fe=null,we=Jn({},[ge,ye,ve],Un),De=["application/xhtml+xml","text/html"],_e="text/html",Ee=null,xe=o.createElement("form"),Ae=function(e){return e instanceof RegExp||e instanceof Function},Ce=function(e){Ee&&Ee===e||(e&&"object"===wn(e)||(e={}),e=Qn(e),N=N=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?_e:e.PARSER_MEDIA_TYPE,k="application/xhtml+xml"===N?Un:Pn,j="ALLOWED_TAGS"in e?Jn({},e.ALLOWED_TAGS,k):W,P="ALLOWED_ATTR"in e?Jn({},e.ALLOWED_ATTR,k):U,Fe="ALLOWED_NAMESPACES"in e?Jn({},e.ALLOWED_NAMESPACES,Un):we,me="ADD_URI_SAFE_ATTR"in e?Jn(Qn(he),e.ADD_URI_SAFE_ATTR,k):he,de="ADD_DATA_URI_TAGS"in e?Jn(Qn(pe),e.ADD_DATA_URI_TAGS,k):pe,ue="FORBID_CONTENTS"in e?Jn({},e.FORBID_CONTENTS,k):fe,V="FORBID_TAGS"in e?Jn({},e.FORBID_TAGS,k):{},X="FORBID_ATTR"in e?Jn({},e.FORBID_ATTR,k):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,Z=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=e.SAFE_FOR_TEMPLATES||!1,J=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,oe=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,I=e.ALLOWED_URI_REGEXP||I,be=e.NAMESPACE||ve,e.CUSTOM_ELEMENT_HANDLING&&Ae(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ae(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(Y=!1),ne&&(te=!0),se&&(j=Jn({},xn(lr)),P=[],!0===se.html&&(Jn(j,tr),Jn(P,cr)),!0===se.svg&&(Jn(j,nr),Jn(P,sr),Jn(P,fr)),!0===se.svgFilters&&(Jn(j,rr),Jn(P,sr),Jn(P,fr)),!0===se.mathMl&&(Jn(j,ir),Jn(P,ur),Jn(P,fr))),e.ADD_TAGS&&(j===W&&(j=Qn(j)),Jn(j,e.ADD_TAGS,k)),e.ADD_ATTR&&(P===U&&(P=Qn(P)),Jn(P,e.ADD_ATTR,k)),e.ADD_URI_SAFE_ATTR&&Jn(me,e.ADD_URI_SAFE_ATTR,k),e.FORBID_CONTENTS&&(ue===fe&&(ue=Qn(ue)),Jn(ue,e.FORBID_CONTENTS,k)),le&&(j["#text"]=!0),J&&Jn(j,["html","head","body"]),j.table&&(Jn(j,["tbody"]),delete V.tbody),Bn&&Bn(e),Ee=e)},He=Jn({},["mi","mo","mn","ms","mtext"]),Te=Jn({},["foreignobject","desc","title","annotation-xml"]),Ne=Jn({},["title","style","font","a","script"]),ke=Jn({},nr);Jn(ke,rr),Jn(ke,or);var Be=Jn({},ir);Jn(Be,ar);var Oe=function(e){var t=b(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});var n=Pn(e.tagName),r=Pn(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===ve?"svg"===n:t.namespaceURI===ge?"svg"===n&&("annotation-xml"===r||He[r]):Boolean(ke[n]):e.namespaceURI===ge?t.namespaceURI===ve?"math"===n:t.namespaceURI===ye?"math"===n&&Te[r]:Boolean(Be[n]):e.namespaceURI===ve?!(t.namespaceURI===ye&&!Te[r])&&(!(t.namespaceURI===ge&&!He[r])&&(!Be[n]&&(Ne[n]||!ke[n]))):!("application/xhtml+xml"!==N||!Fe[e.namespaceURI]))},$e=function(e){Wn(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=w}catch(t){e.remove()}}},Le=function(e,t){try{Wn(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Wn(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!P[e])if(te||ne)try{$e(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Re=function(e){var t,n;if(ee)e="<remove></remove>"+e;else{var r=Gn(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===N&&be===ve&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=F?F.createHTML(e):e;if(be===ve)try{t=(new p).parseFromString(i,N)}catch(e){}if(!t||!t.documentElement){t=_.createDocument(be,"template",null);try{t.documentElement.innerHTML=Se?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),be===ve?A.call(t,J?"html":"body")[0]:J?t.documentElement:a},ze=function(e){return E.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Me=function(e){return e instanceof d&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Ie=function(e){return"object"===wn(l)?e instanceof l:e&&"object"===wn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},je=function(e,t,r){T[e]&&In(T[e],(function(e){e.call(n,t,r,Ee)}))},We=function(e){var t;if(je("beforeSanitizeElements",e,null),Me(e))return $e(e),!0;if(Yn(/[\u0080-\uFFFF]/,e.nodeName))return $e(e),!0;var r=k(e.nodeName);if(je("uponSanitizeElement",e,{tagName:r,allowedTags:j}),e.hasChildNodes()&&!Ie(e.firstElementChild)&&(!Ie(e.content)||!Ie(e.content.firstElementChild))&&Yn(/<[/\w]/g,e.innerHTML)&&Yn(/<[/\w]/g,e.textContent))return $e(e),!0;if("select"===r&&Yn(/<template/i,e.innerHTML))return $e(e),!0;if(!j[r]||V[r]){if(!V[r]&&Ue(r)){if(G.tagNameCheck instanceof RegExp&&Yn(G.tagNameCheck,r))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(r))return!1}if(le&&!ue[r]){var o=b(e)||e.parentNode,i=v(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(g(i[a],!0),y(e))}return $e(e),!0}return e instanceof c&&!Oe(e)?($e(e),!0):"noscript"!==r&&"noembed"!==r||!Yn(/<\/no(script|embed)/i,e.innerHTML)?(K&&3===e.nodeType&&(t=e.textContent,t=Vn(t,B," "),t=Vn(t,O," "),t=Vn(t,$," "),e.textContent!==t&&(Wn(n.removed,{element:e.cloneNode()}),e.textContent=t)),je("afterSanitizeElements",e,null),!1):($e(e),!0)},Pe=function(e,t,n){if(oe&&("id"===t||"name"===t)&&(n in o||n in xe))return!1;if(Y&&!X[t]&&Yn(L,t));else if(q&&Yn(R,t));else if(!P[t]||X[t]){if(!(Ue(e)&&(G.tagNameCheck instanceof RegExp&&Yn(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&Yn(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&Yn(G.tagNameCheck,n)||G.tagNameCheck instanceof Function&&G.tagNameCheck(n))))return!1}else if(me[t]);else if(Yn(I,Vn(n,M,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Xn(n,"data:")||!de[e]){if(Z&&!Yn(z,Vn(n,M,"")));else if(n)return!1}else;return!0},Ue=function(e){return e.indexOf("-")>0},Ge=function(e){var t,r,o,i;je("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:qn(t.value),o=k(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,je("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Le(s,e),l.keepAttr))if(Yn(/\/>/i,r))Le(s,e);else{K&&(r=Vn(r,B," "),r=Vn(r,O," "),r=Vn(r,$," "));var f=k(e.nodeName);if(Pe(f,o,r)){if(!ie||"id"!==o&&"name"!==o||(Le(s,e),r=ae+r),F&&"object"===wn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,o)){case"TrustedHTML":r=F.createHTML(r);break;case"TrustedScriptURL":r=F.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),jn(n.removed)}catch(e){}}}}je("afterSanitizeAttributes",e,null)}},Ve=function e(t){var n,r=ze(t);for(je("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)je("uponSanitizeShadowNode",n,null),We(n)||(n.content instanceof i&&e(n.content),Ge(n));je("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Se=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw Zn("toString is not a function");if("string"!=typeof(e=e.toString()))throw Zn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===wn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ie(e))return t.toStaticHTML(e.outerHTML)}return e}if(Q||Ce(f),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var d=k(e.nodeName);if(!j[d]||V[d])throw Zn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=Re("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!te&&!K&&!J&&-1===e.indexOf("<"))return F&&re?F.createHTML(e):e;if(!(o=Re(e)))return te?null:re?w:""}o&&ee&&$e(o.firstChild);for(var p=ze(ce?e:o);c=p.nextNode();)3===c.nodeType&&c===s||We(c)||(c.content instanceof i&&Ve(c.content),Ge(c),s=c);if(s=null,ce)return e;if(te){if(ne)for(u=x.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return P.shadowroot&&(u=C.call(r,u,!0)),u}var m=J?o.outerHTML:o.innerHTML;return J&&j["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Yn(Sr,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),K&&(m=Vn(m,B," "),m=Vn(m,O," "),m=Vn(m,$," ")),F&&re?F.createHTML(m):m},n.setConfig=function(e){Ce(e),Q=!0},n.clearConfig=function(){Ee=null,Q=!1},n.isValidAttribute=function(e,t,n){Ee||Ce({});var r=k(e),o=k(t);return Pe(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(T[e]=T[e]||[],Wn(T[e],t))},n.removeHook=function(e){if(T[e])return jn(T[e])},n.removeHooks=function(e){T[e]&&(T[e]=[])},n.removeAllHooks=function(){T={}},n}();const _r=e=>r.forwardRef(((n,r)=>t(vn,{forwardedRef:r,...n,children:e.length>0?e.map(((e,n)=>{if("text"===e.type){const r=e.otherAttributes,o=Dr.sanitize(e.content);return t("p",{...r,dangerouslySetInnerHTML:{__html:o}},n)}{const r=e.otherAttributes;return t(Fn.Link,{...r,children:e.content},n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})));export{vn as NBComponent,Fn as NotificationBanner,_r as withNotificationBanner};
//# sourceMappingURL=index.js.map
