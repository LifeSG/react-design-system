import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as a,useEffect as o}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";const u={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(u).reduce(((e,n)=>{const r=u[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),g=f("max-width"),h=(f("min-width"),u);var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,y="object"==typeof self&&self&&self.Object===Object&&self,F=m||y||Function("return this")(),S=F.Symbol,v=S,B=Object.prototype,b=B.hasOwnProperty,$=B.toString,D=v?v.toStringTag:void 0;var x=function(t){var e=b.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=$.call(t);return r&&(e?t[D]=n:delete t[D]),i},H=Object.prototype.toString;var E=x,w=function(t){return H.call(t)},A=S?S.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?E(t):w(t)};var z=_,O=function(t){return null!=t&&"object"==typeof t};var k=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==z(t)},j=p,C=k,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var N=function(t,e){if(j(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(L.test(t)||!W.test(t)||null!=e&&t in Object(e))};var I=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=_,R=I;var V,P=function(t){if(!R(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},G=F["__core-js_shared__"],U=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var Z=function(t){return!!U&&U in t},X=Function.prototype.toString;var M=P,Y=Z,J=I,K=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,tt=Object.prototype,et=Q.toString,nt=tt.hasOwnProperty,rt=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!J(t)||Y(t))&&(M(t)?rt:q).test(K(t))},at=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=at(t,e);return it(n)?n:void 0},lt=ot(Object,"create"),ct=lt;var dt=function(){this.__data__=ct?ct(null):{},this.size=0};var ut=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=lt,gt=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},st=lt,pt=Object.prototype.hasOwnProperty;var mt=lt;var yt=dt,Ft=ut,St=ht,vt=function(t){var e=this.__data__;return st?void 0!==e[t]:pt.call(e,t)},Bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mt&&void 0===e?"__lodash_hash_undefined__":e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=yt,bt.prototype.delete=Ft,bt.prototype.get=St,bt.prototype.has=vt,bt.prototype.set=Bt;var $t=bt;var Dt=function(){this.__data__=[],this.size=0};var xt=function(t,e){return t===e||t!=t&&e!=e};var Ht=function(t,e){for(var n=t.length;n--;)if(xt(t[n][0],e))return n;return-1},Et=Ht,wt=Array.prototype.splice;var At=Ht;var _t=Ht;var zt=Ht;var Ot=Dt,kt=function(t){var e=this.__data__,n=Et(e,t);return!(n<0)&&(n==e.length-1?e.pop():wt.call(e,n,1),--this.size,!0)},jt=function(t){var e=this.__data__,n=At(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return _t(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=Ot,Lt.prototype.delete=kt,Lt.prototype.get=jt,Lt.prototype.has=Ct,Lt.prototype.set=Wt;var Nt=Lt,It=ot(F,"Map"),Tt=$t,Rt=Nt,Vt=It;var Pt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Gt=function(t,e){var n=t.__data__;return Pt(e)?n["string"==typeof e?"string":"hash"]:n.map},Ut=Gt;var Zt=Gt;var Xt=Gt;var Mt=Gt;var Yt=function(){this.size=0,this.__data__={hash:new Tt,map:new(Vt||Rt),string:new Tt}},Jt=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e},Kt=function(t){return Zt(this,t).get(t)},qt=function(t){return Xt(this,t).has(t)},Qt=function(t,e){var n=Mt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Yt,te.prototype.delete=Jt,te.prototype.get=Kt,te.prototype.has=qt,te.prototype.set=Qt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var re=ne;var ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ae=/\\(\\)?/g,oe=function(t){var e=re(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ie,(function(t,n,r,i){e.push(r?i.replace(ae,"$1"):n||t)})),e}));var le=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ce=p,de=k,ue=S?S.prototype:void 0,fe=ue?ue.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(ce(e))return le(e,t)+"";if(de(e))return fe?fe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},he=ge;var se=function(t){return null==t?"":he(t)},pe=p,me=N,ye=oe,Fe=se;var Se=k;var ve=function(t,e){return pe(t)?t:me(t,e)?[t]:ye(Fe(t))},Be=function(t){if("string"==typeof t||Se(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var be=function(t,e){for(var n=0,r=(e=ve(e,t)).length;null!=t&&n<r;)t=t[Be(e[n++])];return n&&n==r?t:void 0};var $e=function(t,e,n){var r=null==t?void 0:be(t,e);return void 0===r?n:r};const De=(t,e,n)=>e?$e(n,e)||$e(t,e):n||t,xe=(t,e)=>{const n=e||t.defaultValue;return $e(t.collections,n)};var He;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(He||(He={}));const Ee={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},we=t=>e=>{const n=e.theme,r=xe(Ee,n[He.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},Ae={Brand:{1:we("Brand.1"),2:we("Brand.2"),3:we("Brand.3"),4:we("Brand.4"),5:we("Brand.5"),6:we("Brand.6")},Primary:we("Primary"),PrimaryDark:we("PrimaryDark"),Secondary:we("Secondary"),Accent:{Light:{1:we("Accent.Light.1"),2:we("Accent.Light.2"),3:we("Accent.Light.3"),4:we("Accent.Light.4"),5:we("Accent.Light.5"),6:we("Accent.Light.6")},Dark:{1:we("Accent.Dark.1"),2:we("Accent.Dark.2"),3:we("Accent.Dark.3")}},Neutral:{1:we("Neutral.1"),2:we("Neutral.2"),3:we("Neutral.3"),4:we("Neutral.4"),5:we("Neutral.5"),6:we("Neutral.6"),7:we("Neutral.7"),8:we("Neutral.8")},Validation:{Green:{Text:we("Validation.Green.Text"),Icon:we("Validation.Green.Icon"),Border:we("Validation.Green.Border"),Background:we("Validation.Green.Background")},Orange:{Text:we("Validation.Orange.Text"),Icon:we("Validation.Orange.Icon"),Border:we("Validation.Orange.Border"),Background:we("Validation.Orange.Background"),Badge:we("Validation.Orange.Badge")},Red:{Text:we("Validation.Red.Text"),Icon:we("Validation.Red.Icon"),Border:we("Validation.Red.Border"),Background:we("Validation.Red.Background")},Blue:{Text:we("Validation.Blue.Text"),Icon:we("Validation.Blue.Icon"),Border:we("Validation.Blue.Border"),Background:we("Validation.Blue.Background")}},Shadow:{Accent:we("Shadow.Accent"),Red:we("Shadow.Red"),Elevation:we("Shadow.Elevation")}};function _e(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const ze=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=e,l=_e(e,["children","data-testid","type","stretch"]);return t(Oe,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},l,{children:r}))})),Oe=l.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?c`
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

    ${t=>{switch(t.$type){case"grid":return c`
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
`,ke=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=e,o=_e(e,["children","data-testid","stretch"]);return t(je,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),je=l.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?c`
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
`,Ce=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1}=e,c=_e(e,["children","data-testid","className","type","stretch"]);return t(ke,Object.assign({ref:n,"data-testid":i,className:a,stretch:l},c,{children:t(ze,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),We={Section:ke,Container:ze,Content:Ce},Le={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ne={collections:{base:{D1:{fontFamily:Le.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Le.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Le.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Le.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Le.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Le.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Le.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Le.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Le.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Le.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Le.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Le.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Le.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Le.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ie=t=>e=>{const n=e.theme,r=xe(Ne,n[He.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Te={D1:{fontFamily:Ie("D1.fontFamily"),fontSize:Ie("D1.fontSize"),fontWeight:Ie("D1.fontWeight"),lineHeight:Ie("D1.lineHeight"),letterSpacing:Ie("D1.letterSpacing")},D2:{fontFamily:Ie("D2.fontFamily"),fontSize:Ie("D2.fontSize"),fontWeight:Ie("D2.fontWeight"),lineHeight:Ie("D2.lineHeight"),letterSpacing:Ie("D2.letterSpacing")},D3:{fontFamily:Ie("D3.fontFamily"),fontSize:Ie("D3.fontSize"),fontWeight:Ie("D3.fontWeight"),lineHeight:Ie("D3.lineHeight"),letterSpacing:Ie("D3.letterSpacing")},D4:{fontFamily:Ie("D4.fontFamily"),fontSize:Ie("D4.fontSize"),fontWeight:Ie("D4.fontWeight"),lineHeight:Ie("D4.lineHeight"),letterSpacing:Ie("D4.letterSpacing")},DBody:{fontFamily:Ie("DBody.fontFamily"),fontSize:Ie("DBody.fontSize"),fontWeight:Ie("DBody.fontWeight"),lineHeight:Ie("DBody.lineHeight"),letterSpacing:Ie("DBody.letterSpacing")},H1:{fontFamily:Ie("H1.fontFamily"),fontSize:Ie("H1.fontSize"),fontWeight:Ie("H1.fontWeight"),lineHeight:Ie("H1.lineHeight"),letterSpacing:Ie("H1.letterSpacing")},H2:{fontFamily:Ie("H2.fontFamily"),fontSize:Ie("H2.fontSize"),fontWeight:Ie("H2.fontWeight"),lineHeight:Ie("H2.lineHeight"),letterSpacing:Ie("H2.letterSpacing")},H3:{fontFamily:Ie("H3.fontFamily"),fontSize:Ie("H3.fontSize"),fontWeight:Ie("H3.fontWeight"),lineHeight:Ie("H3.lineHeight"),letterSpacing:Ie("H3.letterSpacing")},H4:{fontFamily:Ie("H4.fontFamily"),fontSize:Ie("H4.fontSize"),fontWeight:Ie("H4.fontWeight"),lineHeight:Ie("H4.lineHeight"),letterSpacing:Ie("H4.letterSpacing")},H5:{fontFamily:Ie("H5.fontFamily"),fontSize:Ie("H5.fontSize"),fontWeight:Ie("H5.fontWeight"),lineHeight:Ie("H5.lineHeight"),letterSpacing:Ie("H5.letterSpacing")},H6:{fontFamily:Ie("H6.fontFamily"),fontSize:Ie("H6.fontSize"),fontWeight:Ie("H6.fontWeight"),lineHeight:Ie("H6.lineHeight"),letterSpacing:Ie("H6.letterSpacing")},Body:{fontFamily:Ie("Body.fontFamily"),fontSize:Ie("Body.fontSize"),fontWeight:Ie("Body.fontWeight"),lineHeight:Ie("Body.lineHeight"),letterSpacing:Ie("Body.letterSpacing")},BodySmall:{fontFamily:Ie("BodySmall.fontFamily"),fontSize:Ie("BodySmall.fontSize"),fontWeight:Ie("BodySmall.fontWeight"),lineHeight:Ie("BodySmall.lineHeight"),letterSpacing:Ie("BodySmall.letterSpacing")},XSmall:{fontFamily:Ie("XSmall.fontFamily"),fontSize:Ie("XSmall.fontSize"),fontWeight:Ie("XSmall.fontWeight"),lineHeight:Ie("XSmall.lineHeight"),letterSpacing:Ie("XSmall.letterSpacing")}},Re=t=>{switch(t){case 700:case"bold":return Le.Bold;case 600:case"semibold":return Le.Semibold;case 300:case"light":return Le.Light;case 400:case"regular":return Le.Regular;default:return""}},Ve=(t,e)=>n=>{var r;const i=Te[t].fontFamily(n),a=Te[t].fontWeight(n);return Object.values(Le).includes(i)?c`
                font-family: ${Re(e)||Re(a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Pe(e)||a)&&void 0!==r?r:"normal"};
        `},Pe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ge=(t,e,n=!1)=>r=>{const i=Te[t],a=i.fontSize(r);return c`
            ${Ve(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ue=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `;var Ze;!function(t){t.D1=l.h1`
        ${t=>c`
                ${Ge("D1",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Ge("D2",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Ge("D3",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Ge("D4",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Ge("DBody",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Ge("H1",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Ge("H2",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Ge("H3",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Ge("H4",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Ge("H5",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Ge("H6",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Ge("Body",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Ge("BodySmall",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Ge("XSmall",t.weight,t.paragraph)}
                color: ${Ae.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ye(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ye(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ze||(Ze={}));const Xe=l.a`
    ${t=>c`
            ${Ge(t.textStyle,t.weight)}
            color: ${Ae.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ae.Secondary};

                svg {
                    color: ${Ae.Secondary};
                }
            }
        `}
`,Me=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ye=n=>{var{external:r=!1,children:i}=n,a=_e(n,["external","children"]);return e(Xe,Object.assign({},a,{children:[i,r&&t(Me,{})]}))};var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const Ke=l.div`
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
`,qe=l.nav`
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
`,Qe=l.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{const{position:e,backgroundColor:n}=t;let r;const i="rgba(255,255,255,0.001)";return r="left"===e?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(We.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const tn=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${t=>{const{highlighted:e}=t;return`\n            background-color: ${(e?Ae.Accent.Light[1]:Ae.Neutral[6])(t)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,en=l(Ze.BodySmall)`
    margin-right: 0.5rem;

    ${t=>{const{highlighted:e}=t;return`color: ${(e?Ae.Primary:Ae.Neutral[4])(t)};`}};
`,nn=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var rn=function(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n};var an=function(t){return function(e){return null==t?void 0:t[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),on=se,ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,cn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var dn=function(t){return(t=on(t))&&t.replace(ln,an).replace(cn,"")},un=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var fn=function(t){return t.match(un)||[]},gn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var hn=function(t){return gn.test(t)},sn="\\ud800-\\udfff",pn="\\u2700-\\u27bf",mn="a-z\\xdf-\\xf6\\xf8-\\xff",yn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Sn="["+Fn+"]",vn="\\d+",Bn="["+pn+"]",bn="["+mn+"]",$n="[^"+sn+Fn+vn+pn+mn+yn+"]",Dn="(?:\\ud83c[\\udde6-\\uddff]){2}",xn="[\\ud800-\\udbff][\\udc00-\\udfff]",Hn="["+yn+"]",En="(?:"+bn+"|"+$n+")",wn="(?:"+Hn+"|"+$n+")",An="(?:['’](?:d|ll|m|re|s|t|ve))?",_n="(?:['’](?:D|LL|M|RE|S|T|VE))?",zn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",On="[\\ufe0e\\ufe0f]?",kn=On+zn+("(?:\\u200d(?:"+["[^"+sn+"]",Dn,xn].join("|")+")"+On+zn+")*"),jn="(?:"+[Bn,Dn,xn].join("|")+")"+kn,Cn=RegExp([Hn+"?"+bn+"+"+An+"(?="+[Sn,Hn,"$"].join("|")+")",wn+"+"+_n+"(?="+[Sn,Hn+En,"$"].join("|")+")",Hn+"?"+En+"+"+An,Hn+"+"+_n,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vn,jn].join("|"),"g");var Wn=fn,Ln=hn,Nn=se,In=function(t){return t.match(Cn)||[]};var Tn=rn,Rn=dn,Vn=function(t,e,n){return t=Nn(t),void 0===(e=n?void 0:e)?Ln(t)?In(t):Wn(t):t.match(e)||[]},Pn=RegExp("['’]","g");var Gn=function(t){return function(e){return Tn(Vn(Rn(e).replace(Pn,"")),t,"")}}((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));const Un=({steps:r,currentIndex:l,displayExtractor:c,fadeColor:d,fadePosition:u="both"})=>{const[f,g]=i(!!u),[s,p]=i("left"===u||"both"===u),[m,y]=i("right"===u||"both"===u),F=a(null),S=a(null);o((()=>{B(),window.addEventListener("resize",B);const t=S.current;return t&&t.addEventListener("scroll",B),()=>{window.removeEventListener("resize",B),t&&t.removeEventListener("scroll",B)}}),[]),o((()=>(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[l]);const v=()=>{if(window.innerWidth>h.mobileL)return;const t=S.current;if(t){const e=10.5*l-4;t.scrollLeft=16*e}},B=()=>{if(f){g(window.innerWidth<h.mobileL);const t=S.current,e=F.current;t&&e&&t.scrollWidth>e.offsetWidth?(g(!0),p(t.scrollLeft>=1),y(t.scrollWidth-t.scrollLeft>e.offsetWidth)):g(!1)}},b=(t,e)=>t<e?"Completed step":t===e?"Current step":"Uncompleted step",$=(t,e)=>Gn(`${b(t,e)} ${t}`);if(!r.length)return null;return e(Ke,Object.assign({ref:F},{children:[t(qe,Object.assign({ref:S},{children:r.map(((n,r)=>{const i=r<=l,a=r===l?"bold":"regular";return e(nn,Object.assign({"aria-label":b(r,l),id:$(r,l)},{children:[t(tn,{highlighted:i}),t(en,Object.assign({highlighted:i,weight:a},{children:(o=n,c?c(o):o.toString())}))]}),r);var o}))})),f&&e(n,{children:[s&&t(Qe,{backgroundColor:d,position:"left"}),m&&t(Qe,{backgroundColor:d,position:"right"})]})]}))};export{Un as ProgressIndicator};
//# sourceMappingURL=index.js.map
