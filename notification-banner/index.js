import{jsx as e,jsxs as t}from"react/jsx-runtime";import n,{useState as r,useEffect as o}from"react";import{CrossIcon as i}from"@lifesg/react-icons/cross";import a,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,d="object"==typeof s&&s&&s.Object===Object&&s,f="object"==typeof self&&self&&self.Object===Object&&self,p=d||f||Function("return this")(),m=p.Symbol,h=m,g=Object.prototype,y=g.hasOwnProperty,v=g.toString,S=h?h.toStringTag:void 0;var b=function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var o=v.call(e);return r&&(t?e[S]=n:delete e[S]),o},F=Object.prototype.toString;var E=b,D=function(e){return F.call(e)},B=m?m.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":B&&B in Object(e)?E(e):D(e)};var _=A,w=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==_(e)},x=u,k=T,H=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var $=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!k(e))||(N.test(e)||!H.test(e)||null!=t&&e in Object(t))};var O=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},C=A,R=O;var L,z=function(e){if(!R(e))return!1;var t=C(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=p["__core-js_shared__"],M=(L=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var W=function(e){return!!M&&M in e},j=Function.prototype.toString;var U=function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""},P=z,G=W,V=O,X=U,q=/^\[object .+?Constructor\]$/,Y=Function.prototype,K=Object.prototype,Z=Y.toString,J=K.hasOwnProperty,Q=RegExp("^"+Z.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!V(e)||G(e))&&(P(e)?Q:q).test(X(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),oe=re;var ie=function(){this.__data__=oe?oe(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},ue=re,de=Object.prototype.hasOwnProperty;var fe=re;var pe=ie,me=ae,he=se,ge=function(e){var t=this.__data__;return ue?void 0!==t[e]:de.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=pe,ve.prototype.delete=me,ve.prototype.get=he,ve.prototype.has=ge,ve.prototype.set=ye;var Se=ve;var be=function(){this.__data__=[],this.size=0};var Fe=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(Fe(e[n][0],t))return n;return-1},De=Ee,Be=Array.prototype.splice;var Ae=Ee;var _e=Ee;var we=Ee;var Te=be,xe=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():Be.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},He=function(e){return _e(this.__data__,e)>-1},Ne=function(e,t){var n=this.__data__,r=we(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=Te,$e.prototype.delete=xe,$e.prototype.get=ke,$e.prototype.has=He,$e.prototype.set=Ne;var Oe=$e,Ce=ne(p,"Map"),Re=Se,Le=Oe,ze=Ce;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Me=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},We=Me;var je=Me;var Ue=Me;var Pe=Me;var Ge=function(){this.size=0,this.__data__={hash:new Re,map:new(ze||Le),string:new Re}},Ve=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return je(this,e).get(e)},qe=function(e){return Ue(this,e).has(e)},Ye=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Ge,Ke.prototype.delete=Ve,Ke.prototype.get=Xe,Ke.prototype.has=qe,Ke.prototype.set=Ye;var Ze=Ke;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Je.Cache||Ze),n}Je.Cache=Ze;var Qe=Je;var et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=et((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,o){t.push(r?o.replace(nt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},it=u,at=T,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(at(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ut=st;var dt=u,ft=$,pt=rt,mt=function(e){return null==e?"":ut(e)};var ht=T;var gt=function(e,t){return dt(e)?e:ft(e,t)?[e]:pt(mt(e))},yt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=gt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r};const bt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=Ft(Dt,n[Et.colorScheme]);return n.options&&n.options.color?bt(r,e,n.options.color):bt(r,e)},At=(Bt("Brand.1"),Bt("Brand.2"),Bt("Brand.3"),Bt("Brand.4"),Bt("Brand.5"),Bt("Brand.6"),Bt("Primary")),_t=(Bt("PrimaryDark"),Bt("Secondary")),wt=(Bt("Accent.Light.1"),Bt("Accent.Light.2"),Bt("Accent.Light.3"),Bt("Accent.Light.4"),Bt("Accent.Light.5"),Bt("Accent.Light.6"),Bt("Accent.Dark.1"),Bt("Accent.Dark.2"),Bt("Accent.Dark.3"),{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")}),Tt={Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},xt=(Bt("Shadow.Accent"),Bt("Shadow.Red"),Bt("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),kt=e=>Object.keys(xt).reduce(((t,n)=>{const r=xt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ht=kt("max-width"),Nt=(kt("min-width"),n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1,...l}=t;return e($t,{ref:n,"data-testid":o,$type:i,$stretch:a,...l,children:r})}))),$t=a.div`
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
`,Ot=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1,...a}=t;return e(Ct,{ref:n,"data-testid":o,$stretch:i,...a,children:r})})),Ct=a.section`
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
`,Rt=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1,...c}=t;return e(Ot,{ref:n,"data-testid":o,className:i,stretch:l,...c,children:e(Nt,{"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l,children:r})})})),Lt={Section:Ot,Container:Nt,Content:Rt},zt=a.button`
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
                background-color: ${wt[7]};
            `}
    }
`,It=n.forwardRef((({children:t,focusHighlight:n=!0,focusOutline:r="none",type:o="button",...i},a)=>e(zt,{ref:a,$outline:r,$highlight:n,type:o,...i,children:t}))),Mt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:Mt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Mt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Mt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Mt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Mt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Mt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Mt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Mt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Mt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Mt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Mt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Mt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},jt=e=>t=>{const n=t.theme,r=Ft(Wt,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?bt(r,e,n.options.textStyle):bt(r,e)},Ut={D1:{fontFamily:jt("D1.fontFamily"),fontSize:jt("D1.fontSize"),fontWeight:jt("D1.fontWeight"),lineHeight:jt("D1.lineHeight"),letterSpacing:jt("D1.letterSpacing")},D2:{fontFamily:jt("D2.fontFamily"),fontSize:jt("D2.fontSize"),fontWeight:jt("D2.fontWeight"),lineHeight:jt("D2.lineHeight"),letterSpacing:jt("D2.letterSpacing")},D3:{fontFamily:jt("D3.fontFamily"),fontSize:jt("D3.fontSize"),fontWeight:jt("D3.fontWeight"),lineHeight:jt("D3.lineHeight"),letterSpacing:jt("D3.letterSpacing")},D4:{fontFamily:jt("D4.fontFamily"),fontSize:jt("D4.fontSize"),fontWeight:jt("D4.fontWeight"),lineHeight:jt("D4.lineHeight"),letterSpacing:jt("D4.letterSpacing")},DBody:{fontFamily:jt("DBody.fontFamily"),fontSize:jt("DBody.fontSize"),fontWeight:jt("DBody.fontWeight"),lineHeight:jt("DBody.lineHeight"),letterSpacing:jt("DBody.letterSpacing")},H1:{fontFamily:jt("H1.fontFamily"),fontSize:jt("H1.fontSize"),fontWeight:jt("H1.fontWeight"),lineHeight:jt("H1.lineHeight"),letterSpacing:jt("H1.letterSpacing")},H2:{fontFamily:jt("H2.fontFamily"),fontSize:jt("H2.fontSize"),fontWeight:jt("H2.fontWeight"),lineHeight:jt("H2.lineHeight"),letterSpacing:jt("H2.letterSpacing")},H3:{fontFamily:jt("H3.fontFamily"),fontSize:jt("H3.fontSize"),fontWeight:jt("H3.fontWeight"),lineHeight:jt("H3.lineHeight"),letterSpacing:jt("H3.letterSpacing")},H4:{fontFamily:jt("H4.fontFamily"),fontSize:jt("H4.fontSize"),fontWeight:jt("H4.fontWeight"),lineHeight:jt("H4.lineHeight"),letterSpacing:jt("H4.letterSpacing")},H5:{fontFamily:jt("H5.fontFamily"),fontSize:jt("H5.fontSize"),fontWeight:jt("H5.fontWeight"),lineHeight:jt("H5.lineHeight"),letterSpacing:jt("H5.letterSpacing")},H6:{fontFamily:jt("H6.fontFamily"),fontSize:jt("H6.fontSize"),fontWeight:jt("H6.fontWeight"),lineHeight:jt("H6.lineHeight"),letterSpacing:jt("H6.letterSpacing")},Body:{fontFamily:jt("Body.fontFamily"),fontSize:jt("Body.fontSize"),fontWeight:jt("Body.fontWeight"),lineHeight:jt("Body.lineHeight"),letterSpacing:jt("Body.letterSpacing")},BodySmall:{fontFamily:jt("BodySmall.fontFamily"),fontSize:jt("BodySmall.fontSize"),fontWeight:jt("BodySmall.fontWeight"),lineHeight:jt("BodySmall.lineHeight"),letterSpacing:jt("BodySmall.letterSpacing")},XSmall:{fontFamily:jt("XSmall.fontFamily"),fontSize:jt("XSmall.fontSize"),fontWeight:jt("XSmall.fontWeight"),lineHeight:jt("XSmall.lineHeight"),letterSpacing:jt("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Mt.Bold;case 600:case"semibold":return Mt.Semibold;case 300:case"light":return Mt.Light;case 400:case"regular":return Mt.Regular;default:return""}},Gt=(e,t)=>n=>{const r=Ut[e].fontFamily(n),o=Ut[e].fontWeight(n);return Object.values(Mt).includes(r)?l`
                font-family: ${Pt(t)||Pt(o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Vt(t)||o)??"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=Gt,qt=(e,t,n=!1)=>r=>{const o=Ut[e],i=o.fontSize(r);return l`
            ${Gt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Yt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Kt;!function(e){e.D1=a.h1`
        ${e=>l`
                ${qt("D1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${qt("D2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${qt("D3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${qt("D4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${qt("DBody",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${qt("H1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${qt("H2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${qt("H3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${qt("H4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${qt("H5",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${qt("H6",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${qt("Body",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${qt("BodySmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${qt("XSmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Yt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Qt({...e,textStyle:"Body"}),Small:e=>Qt({...e,textStyle:"BodySmall"})}}(Kt||(Kt={}));const Zt=a.a`
    ${e=>l`
            ${qt(e.textStyle,e.weight)}
            color: ${At};
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
`,Jt=a(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qt=({external:n=!1,children:r,...o})=>t(Zt,{...o,children:[r,n&&e(Jt,{})]});var en;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(en||(en={}));const tn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",nn=l`
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
`,rn=a.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${tn};
    background: ${wt[2]};
    z-index: 25;
`,on=a(Lt.Content)`
    display: flex;
`,an=a.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,ln=a.div`
    display: inline-block;
    width: 100%;

    ${qt("Body","regular")}
    color: ${wt[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Xt("Body","semibold")}
        color: ${wt[8]};
    }

    a {
        ${qt("Body","regular")}
        ${nn}
    }
`,cn=a(Kt.Hyperlink.Default)`
    position: relative;

    ${nn}
`,sn=a(It)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,un=a(i)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${wt[8]};
`,dn=({children:n,visible:i=!0,dismissible:a=!0,sticky:l=!0,onDismiss:c,id:s,forwardedRef:u,...d})=>{const f=d["data-testid"],[p,m]=r(i);o((()=>{m(i)}),[i]);return p?e(rn,{ref:u,$sticky:l,...d,children:t(on,{id:fn("container",s),children:[e(an,{children:e(ln,{"data-testid":fn("text-content",f),children:n})}),a&&e(sn,{onClick:()=>{m(!1),a&&c&&c()},id:fn("dismiss-button",s),"data-testid":fn("dismiss-button",f),focusHighlight:!1,children:e(un,{})})]})}):null},fn=(e,t="wrapper")=>`${t}-${e}`,pn=n.forwardRef(((t,n)=>e(dn,{...t,forwardedRef:n}))),mn=Object.assign(pn,{Link:cn});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function hn(e){return hn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hn(e)}function gn(e,t){return gn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},gn(e,t)}function yn(e,t,n){return yn=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&gn(o,n.prototype),o},yn.apply(null,arguments)}function vn(e){return function(e){if(Array.isArray(e))return Sn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Sn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Sn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var bn=Object.hasOwnProperty,Fn=Object.setPrototypeOf,En=Object.isFrozen,Dn=Object.getPrototypeOf,Bn=Object.getOwnPropertyDescriptor,An=Object.freeze,_n=Object.seal,wn=Object.create,Tn="undefined"!=typeof Reflect&&Reflect,xn=Tn.apply,kn=Tn.construct;xn||(xn=function(e,t,n){return e.apply(t,n)}),An||(An=function(e){return e}),_n||(_n=function(e){return e}),kn||(kn=function(e,t){return yn(e,vn(t))});var Hn,Nn=Un(Array.prototype.forEach),$n=Un(Array.prototype.pop),On=Un(Array.prototype.push),Cn=Un(String.prototype.toLowerCase),Rn=Un(String.prototype.toString),Ln=Un(String.prototype.match),zn=Un(String.prototype.replace),In=Un(String.prototype.indexOf),Mn=Un(String.prototype.trim),Wn=Un(RegExp.prototype.test),jn=(Hn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return kn(Hn,t)});function Un(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return xn(e,t,r)}}function Pn(e,t,n){n=n||Cn,Fn&&Fn(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(En(t)||(t[r]=i),o=i)}e[o]=!0}return e}function Gn(e){var t,n=wn(null);for(t in e)!0===xn(bn,e,[t])&&(n[t]=e[t]);return n}function Vn(e,t){for(;null!==e;){var n=Bn(e,t);if(n){if(n.get)return Un(n.get);if("function"==typeof n.value)return Un(n.value)}e=Dn(e)}return function(e){return console.warn("fallback value for",e),null}}var Xn=An(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qn=An(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yn=An(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Kn=An(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zn=An(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Jn=An(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Qn=An(["#text"]),er=An(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),tr=An(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),nr=An(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rr=An(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),or=_n(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ir=_n(/<%[\w\W]*|[\w\W]*%>/gm),ar=_n(/\${[\w\W]*}/gm),lr=_n(/^data-[\-\w.\u00B7-\uFFFF]/),cr=_n(/^aria-[\-\w]+$/),sr=_n(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ur=_n(/^(?:\w+script|data):/i),dr=_n(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),fr=_n(/^html$/i),pr=function(){return"undefined"==typeof window?null:window};var mr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pr(),n=function(t){return e(t)};if(n.version="2.4.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,d=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=Vn(h,"cloneNode"),y=Vn(h,"nextSibling"),v=Vn(h,"childNodes"),S=Vn(h,"parentNode");if("function"==typeof a){var b=o.createElement("template");b.content&&b.content.ownerDocument&&(o=b.content.ownerDocument)}var F=function(e,t){if("object"!==hn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(m,r),E=F?F.createHTML(""):"",D=o,B=D.implementation,A=D.createNodeIterator,_=D.createDocumentFragment,w=D.getElementsByTagName,T=r.importNode,x={};try{x=Gn(o).documentMode?o.documentMode:{}}catch(e){}var k={};n.isSupported="function"==typeof S&&B&&void 0!==B.createHTMLDocument&&9!==x;var H,N,$=or,O=ir,C=ar,R=lr,L=cr,z=ur,I=dr,M=sr,W=null,j=Pn({},[].concat(vn(Xn),vn(qn),vn(Yn),vn(Zn),vn(Qn))),U=null,P=Pn({},[].concat(vn(er),vn(tr),vn(nr),vn(rr))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,X=null,q=!0,Y=!0,K=!1,Z=!0,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!1,oe=!1,ie=!0,ae=!1,le=!0,ce=!1,se={},ue=null,de=Pn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),fe=null,pe=Pn({},["audio","video","img","source","image","track"]),me=null,he=Pn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml",Se=ve,be=!1,Fe=null,Ee=Pn({},[ge,ye,ve],Rn),De=["application/xhtml+xml","text/html"],Be=null,Ae=o.createElement("form"),_e=function(e){return e instanceof RegExp||e instanceof Function},we=function(e){Be&&Be===e||(e&&"object"===hn(e)||(e={}),e=Gn(e),H=H=-1===De.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,N="application/xhtml+xml"===H?Rn:Cn,W="ALLOWED_TAGS"in e?Pn({},e.ALLOWED_TAGS,N):j,U="ALLOWED_ATTR"in e?Pn({},e.ALLOWED_ATTR,N):P,Fe="ALLOWED_NAMESPACES"in e?Pn({},e.ALLOWED_NAMESPACES,Rn):Ee,me="ADD_URI_SAFE_ATTR"in e?Pn(Gn(he),e.ADD_URI_SAFE_ATTR,N):he,fe="ADD_DATA_URI_TAGS"in e?Pn(Gn(pe),e.ADD_DATA_URI_TAGS,N):pe,ue="FORBID_CONTENTS"in e?Pn({},e.FORBID_CONTENTS,N):de,V="FORBID_TAGS"in e?Pn({},e.FORBID_TAGS,N):{},X="FORBID_ATTR"in e?Pn({},e.FORBID_ATTR,N):{},se="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Y=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Z=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ne=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,te=e.FORCE_BODY||!1,ie=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,le=!1!==e.KEEP_CONTENT,ce=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,Se=e.NAMESPACE||ve,G=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Y=!1),re&&(ne=!0),se&&(W=Pn({},vn(Qn)),U=[],!0===se.html&&(Pn(W,Xn),Pn(U,er)),!0===se.svg&&(Pn(W,qn),Pn(U,tr),Pn(U,rr)),!0===se.svgFilters&&(Pn(W,Yn),Pn(U,tr),Pn(U,rr)),!0===se.mathMl&&(Pn(W,Zn),Pn(U,nr),Pn(U,rr))),e.ADD_TAGS&&(W===j&&(W=Gn(W)),Pn(W,e.ADD_TAGS,N)),e.ADD_ATTR&&(U===P&&(U=Gn(U)),Pn(U,e.ADD_ATTR,N)),e.ADD_URI_SAFE_ATTR&&Pn(me,e.ADD_URI_SAFE_ATTR,N),e.FORBID_CONTENTS&&(ue===de&&(ue=Gn(ue)),Pn(ue,e.FORBID_CONTENTS,N)),le&&(W["#text"]=!0),Q&&Pn(W,["html","head","body"]),W.table&&(Pn(W,["tbody"]),delete V.tbody),An&&An(e),Be=e)},Te=Pn({},["mi","mo","mn","ms","mtext"]),xe=Pn({},["foreignobject","desc","title","annotation-xml"]),ke=Pn({},["title","style","font","a","script"]),He=Pn({},qn);Pn(He,Yn),Pn(He,Kn);var Ne=Pn({},Zn);Pn(Ne,Jn);var $e=function(e){On(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=E}catch(t){e.remove()}}},Oe=function(e,t){try{On(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){On(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!U[e])if(ne||re)try{$e(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ce=function(e){var t,n;if(te)e="<remove></remove>"+e;else{var r=Ln(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===H&&Se===ve&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=F?F.createHTML(e):e;if(Se===ve)try{t=(new p).parseFromString(i,H)}catch(e){}if(!t||!t.documentElement){t=B.createDocument(Se,"template",null);try{t.documentElement.innerHTML=be?E:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Se===ve?w.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},Re=function(e){return A.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Le=function(e){return"object"===hn(l)?e instanceof l:e&&"object"===hn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,r){k[e]&&Nn(k[e],(function(e){e.call(n,t,r,Be)}))},Ie=function(e){var t,r;if(ze("beforeSanitizeElements",e,null),(r=e)instanceof f&&("string"!=typeof r.nodeName||"string"!=typeof r.textContent||"function"!=typeof r.removeChild||!(r.attributes instanceof d)||"function"!=typeof r.removeAttribute||"function"!=typeof r.setAttribute||"string"!=typeof r.namespaceURI||"function"!=typeof r.insertBefore||"function"!=typeof r.hasChildNodes))return $e(e),!0;if(Wn(/[\u0080-\uFFFF]/,e.nodeName))return $e(e),!0;var o=N(e.nodeName);if(ze("uponSanitizeElement",e,{tagName:o,allowedTags:W}),e.hasChildNodes()&&!Le(e.firstElementChild)&&(!Le(e.content)||!Le(e.content.firstElementChild))&&Wn(/<[/\w]/g,e.innerHTML)&&Wn(/<[/\w]/g,e.textContent))return $e(e),!0;if("select"===o&&Wn(/<template/i,e.innerHTML))return $e(e),!0;if(!W[o]||V[o]){if(!V[o]&&We(o)){if(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,o))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(o))return!1}if(le&&!ue[o]){var i=S(e)||e.parentNode,a=v(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(g(a[l],!0),y(e))}return $e(e),!0}return e instanceof c&&!function(e){var t=S(e);t&&t.tagName||(t={namespaceURI:Se,tagName:"template"});var n=Cn(e.tagName),r=Cn(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===ve?"svg"===n:t.namespaceURI===ge?"svg"===n&&("annotation-xml"===r||Te[r]):Boolean(He[n]):e.namespaceURI===ge?t.namespaceURI===ve?"math"===n:t.namespaceURI===ye?"math"===n&&xe[r]:Boolean(Ne[n]):e.namespaceURI===ve?!(t.namespaceURI===ye&&!xe[r])&&!(t.namespaceURI===ge&&!Te[r])&&!Ne[n]&&(ke[n]||!He[n]):!("application/xhtml+xml"!==H||!Fe[e.namespaceURI]))}(e)?($e(e),!0):"noscript"!==o&&"noembed"!==o||!Wn(/<\/no(script|embed)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=zn(t,$," "),t=zn(t,O," "),t=zn(t,C," "),e.textContent!==t&&(On(n.removed,{element:e.cloneNode()}),e.textContent=t)),ze("afterSanitizeElements",e,null),!1):($e(e),!0)},Me=function(e,t,n){if(ie&&("id"===t||"name"===t)&&(n in o||n in Ae))return!1;if(Y&&!X[t]&&Wn(R,t));else if(q&&Wn(L,t));else if(!U[t]||X[t]){if(!(We(e)&&(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&Wn(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&Wn(G.tagNameCheck,n)||G.tagNameCheck instanceof Function&&G.tagNameCheck(n))))return!1}else if(me[t]);else if(Wn(M,zn(n,I,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==In(n,"data:")||!fe[e]){if(K&&!Wn(z,zn(n,I,"")));else if(n)return!1}else;return!0},We=function(e){return e.indexOf("-")>0},je=function(e){var t,r,o,i;ze("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:U};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Mn(t.value),o=N(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ze("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Oe(s,e),l.keepAttr))if(Z||!Wn(/\/>/i,r)){J&&(r=zn(r,$," "),r=zn(r,O," "),r=zn(r,C," "));var d=N(e.nodeName);if(Me(d,o,r)){if(!ae||"id"!==o&&"name"!==o||(Oe(s,e),r="user-content-"+r),F&&"object"===hn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(d,o)){case"TrustedHTML":r=F.createHTML(r);break;case"TrustedScriptURL":r=F.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),$n(n.removed)}catch(e){}}}else Oe(s,e)}ze("afterSanitizeAttributes",e,null)}},Ue=function e(t){var n,r=Re(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),Ie(n)||(n.content instanceof i&&e(n.content),je(n));ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((be=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Le(e)){if("function"!=typeof e.toString)throw jn("toString is not a function");if("string"!=typeof(e=e.toString()))throw jn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===hn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Le(e))return t.toStaticHTML(e.outerHTML)}return e}if(ee||we(d),n.removed=[],"string"==typeof e&&(ce=!1),ce){if(e.nodeName){var f=N(e.nodeName);if(!W[f]||V[f])throw jn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=Ce("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!ne&&!J&&!Q&&-1===e.indexOf("<"))return F&&oe?F.createHTML(e):e;if(!(o=Ce(e)))return ne?null:oe?E:""}o&&te&&$e(o.firstChild);for(var p=Re(ce?e:o);c=p.nextNode();)3===c.nodeType&&c===s||Ie(c)||(c.content instanceof i&&Ue(c.content),je(c),s=c);if(s=null,ce)return e;if(ne){if(re)for(u=_.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(U.shadowroot||U.shadowrootmod)&&(u=T.call(r,u,!0)),u}var m=Q?o.outerHTML:o.innerHTML;return Q&&W["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Wn(fr,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),J&&(m=zn(m,$," "),m=zn(m,O," "),m=zn(m,C," ")),F&&oe?F.createHTML(m):m},n.setConfig=function(e){we(e),ee=!0},n.clearConfig=function(){Be=null,ee=!1},n.isValidAttribute=function(e,t,n){Be||we({});var r=N(e),o=N(t);return Me(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(k[e]=k[e]||[],On(k[e],t))},n.removeHook=function(e){if(k[e])return $n(k[e])},n.removeHooks=function(e){k[e]&&(k[e]=[])},n.removeAllHooks=function(){k={}},n}();const hr=t=>n.forwardRef(((n,r)=>e(dn,{forwardedRef:r,...n,children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=mr.sanitize(t.content);return e("p",{...r,dangerouslySetInnerHTML:{__html:o}},n)}{const r=t.otherAttributes;return e(mn.Link,{...r,children:t.content},n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})));export{dn as NBComponent,mn as NotificationBanner,hr as withNotificationBanner};
//# sourceMappingURL=index.js.map
