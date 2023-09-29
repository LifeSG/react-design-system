import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as a,useEffect as o}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const f={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},g=t=>Object.keys(f).reduce(((e,n)=>{const r=f[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),h=g("max-width"),s=(g("min-width"),f);var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,y="object"==typeof p&&p&&p.Object===Object&&p,F="object"==typeof self&&self&&self.Object===Object&&self,S=y||F||Function("return this")(),v=S.Symbol,B=v,b=Object.prototype,$=b.hasOwnProperty,x=b.toString,D=B?B.toStringTag:void 0;var H=function(t){var e=$.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=x.call(t);return r&&(e?t[D]=n:delete t[D]),i},E=Object.prototype.toString;var w=H,A=function(t){return E.call(t)},_=v?v.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?w(t):A(t)};var O=z,k=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==O(t)},j=m,W=C,L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var I=function(t,e){if(j(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!W(t))||(N.test(t)||!L.test(t)||null!=e&&t in Object(e))};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R=z,V=T;var P,G=function(t){if(!V(t))return!1;var e=R(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},U=S["__core-js_shared__"],Z=(P=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(t){return!!Z&&Z in t},M=Function.prototype.toString;var Y=G,J=X,K=T,q=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=/^\[object .+?Constructor\]$/,tt=Function.prototype,et=Object.prototype,nt=tt.toString,rt=et.hasOwnProperty,it=RegExp("^"+nt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!K(t)||J(t))&&(Y(t)?it:Q).test(q(t))},ot=function(t,e){return null==t?void 0:t[e]};var lt=function(t,e){var n=ot(t,e);return at(n)?n:void 0},ct=lt(Object,"create"),dt=ct;var ut=function(){this.__data__=dt?dt(null):{},this.size=0};var ft=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},gt=ct,ht=Object.prototype.hasOwnProperty;var st=function(t){var e=this.__data__;if(gt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ht.call(e,t)?e[t]:void 0},pt=ct,mt=Object.prototype.hasOwnProperty;var yt=ct;var Ft=ut,St=ft,vt=st,Bt=function(t){var e=this.__data__;return pt?void 0!==e[t]:mt.call(e,t)},bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=yt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=Ft,$t.prototype.delete=St,$t.prototype.get=vt,$t.prototype.has=Bt,$t.prototype.set=bt;var xt=$t;var Dt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var Et=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},wt=Et,At=Array.prototype.splice;var _t=Et;var zt=Et;var Ot=Et;var kt=Dt,Ct=function(t){var e=this.__data__,n=wt(e,t);return!(n<0)&&(n==e.length-1?e.pop():At.call(e,n,1),--this.size,!0)},jt=function(t){var e=this.__data__,n=_t(e,t);return n<0?void 0:e[n][1]},Wt=function(t){return zt(this.__data__,t)>-1},Lt=function(t,e){var n=this.__data__,r=Ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=kt,Nt.prototype.delete=Ct,Nt.prototype.get=jt,Nt.prototype.has=Wt,Nt.prototype.set=Lt;var It=Nt,Tt=lt(S,"Map"),Rt=xt,Vt=It,Pt=Tt;var Gt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ut=function(t,e){var n=t.__data__;return Gt(e)?n["string"==typeof e?"string":"hash"]:n.map},Zt=Ut;var Xt=Ut;var Mt=Ut;var Yt=Ut;var Jt=function(){this.size=0,this.__data__={hash:new Rt,map:new(Pt||Vt),string:new Rt}},Kt=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e},qt=function(t){return Xt(this,t).get(t)},Qt=function(t){return Mt(this,t).has(t)},te=function(t,e){var n=Yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ee.prototype.clear=Jt,ee.prototype.delete=Kt,ee.prototype.get=qt,ee.prototype.has=Qt,ee.prototype.set=te;var ne=ee;function re(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(re.Cache||ne),n}re.Cache=ne;var ie=re;var ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/\\(\\)?/g,le=function(t){var e=ie(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ae,(function(t,n,r,i){e.push(r?i.replace(oe,"$1"):n||t)})),e}));var ce=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},de=m,ue=C,fe=v?v.prototype:void 0,ge=fe?fe.toString:void 0;var he=function t(e){if("string"==typeof e)return e;if(de(e))return ce(e,t)+"";if(ue(e))return ge?ge.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},se=he;var pe=function(t){return null==t?"":se(t)},me=m,ye=I,Fe=le,Se=pe;var ve=C;var Be=function(t,e){return me(t)?t:ye(t,e)?[t]:Fe(Se(t))},be=function(t){if("string"==typeof t||ve(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $e=function(t,e){for(var n=0,r=(e=Be(e,t)).length;null!=t&&n<r;)t=t[be(e[n++])];return n&&n==r?t:void 0};var xe=function(t,e,n){var r=null==t?void 0:$e(t,e);return void 0===r?n:r};const De=(t,e,n)=>e?xe(n,e)||xe(t,e):n||t,He=(t,e)=>{const n=e||t.defaultValue;return xe(t.collections,n)};var Ee;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ee||(Ee={}));const we={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ae=t=>e=>{const n=e.theme,r=He(we,n[Ee.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},_e={Brand:{1:Ae("Brand.1"),2:Ae("Brand.2"),3:Ae("Brand.3"),4:Ae("Brand.4"),5:Ae("Brand.5"),6:Ae("Brand.6")},Primary:Ae("Primary"),PrimaryDark:Ae("PrimaryDark"),Secondary:Ae("Secondary"),Accent:{Light:{1:Ae("Accent.Light.1"),2:Ae("Accent.Light.2"),3:Ae("Accent.Light.3"),4:Ae("Accent.Light.4"),5:Ae("Accent.Light.5"),6:Ae("Accent.Light.6")},Dark:{1:Ae("Accent.Dark.1"),2:Ae("Accent.Dark.2"),3:Ae("Accent.Dark.3")}},Neutral:{1:Ae("Neutral.1"),2:Ae("Neutral.2"),3:Ae("Neutral.3"),4:Ae("Neutral.4"),5:Ae("Neutral.5"),6:Ae("Neutral.6"),7:Ae("Neutral.7"),8:Ae("Neutral.8")},Validation:{Green:{Text:Ae("Validation.Green.Text"),Icon:Ae("Validation.Green.Icon"),Border:Ae("Validation.Green.Border"),Background:Ae("Validation.Green.Background")},Orange:{Text:Ae("Validation.Orange.Text"),Icon:Ae("Validation.Orange.Icon"),Border:Ae("Validation.Orange.Border"),Background:Ae("Validation.Orange.Background"),Badge:Ae("Validation.Orange.Badge")},Red:{Text:Ae("Validation.Red.Text"),Icon:Ae("Validation.Red.Icon"),Border:Ae("Validation.Red.Border"),Background:Ae("Validation.Red.Background")},Blue:{Text:Ae("Validation.Blue.Text"),Icon:Ae("Validation.Blue.Icon"),Border:Ae("Validation.Blue.Border"),Background:Ae("Validation.Blue.Background")}},Shadow:{Accent:Ae("Shadow.Accent"),Red:Ae("Shadow.Red"),Elevation:Ae("Shadow.Elevation")}},ze=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=e,l=u(e,["children","data-testid","type","stretch"]);return t(Oe,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},l,{children:r}))})),Oe=l.div`
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

                ${h.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${h.tablet} {
        max-width: 720px;
    }
    ${h.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return c`
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
                `;case"flex-column":return c`
                    display: flex;
                    flex-direction: column;
                `;default:return c`
                    display: flex;
                `}}}
`,ke=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=e,o=u(e,["children","data-testid","stretch"]);return t(Ce,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),Ce=l.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?c`
                ${h.tablet} {
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
`,je=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1}=e,c=u(e,["children","data-testid","className","type","stretch"]);return t(ke,Object.assign({ref:n,"data-testid":i,className:a,stretch:l},c,{children:t(ze,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),We={Section:ke,Container:ze,Content:je},Le={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ne={collections:{base:{D1:{fontFamily:Le.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Le.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Le.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Le.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Le.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Le.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Le.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Le.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Le.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Le.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Le.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Le.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Le.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Le.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ie=t=>e=>{const n=e.theme,r=He(Ne,n[Ee.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Te={D1:{fontFamily:Ie("D1.fontFamily"),fontSize:Ie("D1.fontSize"),fontWeight:Ie("D1.fontWeight"),lineHeight:Ie("D1.lineHeight"),letterSpacing:Ie("D1.letterSpacing")},D2:{fontFamily:Ie("D2.fontFamily"),fontSize:Ie("D2.fontSize"),fontWeight:Ie("D2.fontWeight"),lineHeight:Ie("D2.lineHeight"),letterSpacing:Ie("D2.letterSpacing")},D3:{fontFamily:Ie("D3.fontFamily"),fontSize:Ie("D3.fontSize"),fontWeight:Ie("D3.fontWeight"),lineHeight:Ie("D3.lineHeight"),letterSpacing:Ie("D3.letterSpacing")},D4:{fontFamily:Ie("D4.fontFamily"),fontSize:Ie("D4.fontSize"),fontWeight:Ie("D4.fontWeight"),lineHeight:Ie("D4.lineHeight"),letterSpacing:Ie("D4.letterSpacing")},DBody:{fontFamily:Ie("DBody.fontFamily"),fontSize:Ie("DBody.fontSize"),fontWeight:Ie("DBody.fontWeight"),lineHeight:Ie("DBody.lineHeight"),letterSpacing:Ie("DBody.letterSpacing")},H1:{fontFamily:Ie("H1.fontFamily"),fontSize:Ie("H1.fontSize"),fontWeight:Ie("H1.fontWeight"),lineHeight:Ie("H1.lineHeight"),letterSpacing:Ie("H1.letterSpacing")},H2:{fontFamily:Ie("H2.fontFamily"),fontSize:Ie("H2.fontSize"),fontWeight:Ie("H2.fontWeight"),lineHeight:Ie("H2.lineHeight"),letterSpacing:Ie("H2.letterSpacing")},H3:{fontFamily:Ie("H3.fontFamily"),fontSize:Ie("H3.fontSize"),fontWeight:Ie("H3.fontWeight"),lineHeight:Ie("H3.lineHeight"),letterSpacing:Ie("H3.letterSpacing")},H4:{fontFamily:Ie("H4.fontFamily"),fontSize:Ie("H4.fontSize"),fontWeight:Ie("H4.fontWeight"),lineHeight:Ie("H4.lineHeight"),letterSpacing:Ie("H4.letterSpacing")},H5:{fontFamily:Ie("H5.fontFamily"),fontSize:Ie("H5.fontSize"),fontWeight:Ie("H5.fontWeight"),lineHeight:Ie("H5.lineHeight"),letterSpacing:Ie("H5.letterSpacing")},H6:{fontFamily:Ie("H6.fontFamily"),fontSize:Ie("H6.fontSize"),fontWeight:Ie("H6.fontWeight"),lineHeight:Ie("H6.lineHeight"),letterSpacing:Ie("H6.letterSpacing")},Body:{fontFamily:Ie("Body.fontFamily"),fontSize:Ie("Body.fontSize"),fontWeight:Ie("Body.fontWeight"),lineHeight:Ie("Body.lineHeight"),letterSpacing:Ie("Body.letterSpacing")},BodySmall:{fontFamily:Ie("BodySmall.fontFamily"),fontSize:Ie("BodySmall.fontSize"),fontWeight:Ie("BodySmall.fontWeight"),lineHeight:Ie("BodySmall.lineHeight"),letterSpacing:Ie("BodySmall.letterSpacing")},XSmall:{fontFamily:Ie("XSmall.fontFamily"),fontSize:Ie("XSmall.fontSize"),fontWeight:Ie("XSmall.fontWeight"),lineHeight:Ie("XSmall.lineHeight"),letterSpacing:Ie("XSmall.letterSpacing")}},Re=t=>{switch(t){case 700:case"bold":return Le.Bold;case 600:case"semibold":return Le.Semibold;case 300:case"light":return Le.Light;case 400:case"regular":return Le.Regular;default:return""}},Ve=(t,e)=>n=>{var r;const i=Te[t].fontFamily(n),a=Te[t].fontWeight(n);return Object.values(Le).includes(i)?c`
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
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Ge("D2",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Ge("D3",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Ge("D4",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Ge("DBody",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Ge("H1",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Ge("H2",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Ge("H3",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Ge("H4",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Ge("H5",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Ge("H6",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Ge("Body",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Ge("BodySmall",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Ge("XSmall",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ue(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ye(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ye(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ze||(Ze={}));const Xe=l.a`
    ${t=>c`
            ${Ge(t.textStyle,t.weight)}
            color: ${_e.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_e.Secondary};

                svg {
                    color: ${_e.Secondary};
                }
            }
        `}
`,Me=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ye=n=>{var{external:r=!1,children:i}=n,a=u(n,["external","children"]);return e(Xe,Object.assign({},a,{children:[i,r&&t(Me,{})]}))};var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const Ke=l.div`
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

    ${t=>{const{position:e,backgroundColor:n}=t;let r;const i="rgba(255,255,255,0.001)";return r="left"===e?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${h.tablet} {\n                ${r}\n            }\n        `}};
`;l(We.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const tn=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${t=>{const{highlighted:e}=t;return`\n            background-color: ${(e?_e.Accent.Light[1]:_e.Neutral[6])(t)};\n        `}};

    ${h.mobileL} {
        width: ${"10rem"};
    }
`,en=l(Ze.BodySmall)`
    margin-right: 0.5rem;

    ${t=>{const{highlighted:e}=t;return`color: ${(e?_e.Primary:_e.Neutral[4])(t)};`}};
`,nn=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var rn=function(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n};var an=function(t){return function(e){return null==t?void 0:t[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),on=pe,ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,cn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var dn=function(t){return(t=on(t))&&t.replace(ln,an).replace(cn,"")},un=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var fn=function(t){return t.match(un)||[]},gn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var hn=function(t){return gn.test(t)},sn="\\ud800-\\udfff",pn="\\u2700-\\u27bf",mn="a-z\\xdf-\\xf6\\xf8-\\xff",yn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Sn="["+Fn+"]",vn="\\d+",Bn="["+pn+"]",bn="["+mn+"]",$n="[^"+sn+Fn+vn+pn+mn+yn+"]",xn="(?:\\ud83c[\\udde6-\\uddff]){2}",Dn="[\\ud800-\\udbff][\\udc00-\\udfff]",Hn="["+yn+"]",En="(?:"+bn+"|"+$n+")",wn="(?:"+Hn+"|"+$n+")",An="(?:['’](?:d|ll|m|re|s|t|ve))?",_n="(?:['’](?:D|LL|M|RE|S|T|VE))?",zn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",On="[\\ufe0e\\ufe0f]?",kn=On+zn+("(?:\\u200d(?:"+["[^"+sn+"]",xn,Dn].join("|")+")"+On+zn+")*"),Cn="(?:"+[Bn,xn,Dn].join("|")+")"+kn,jn=RegExp([Hn+"?"+bn+"+"+An+"(?="+[Sn,Hn,"$"].join("|")+")",wn+"+"+_n+"(?="+[Sn,Hn+En,"$"].join("|")+")",Hn+"?"+En+"+"+An,Hn+"+"+_n,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vn,Cn].join("|"),"g");var Wn=fn,Ln=hn,Nn=pe,In=function(t){return t.match(jn)||[]};var Tn=rn,Rn=dn,Vn=function(t,e,n){return t=Nn(t),void 0===(e=n?void 0:e)?Ln(t)?In(t):Wn(t):t.match(e)||[]},Pn=RegExp("['’]","g");var Gn=function(t){return function(e){return Tn(Vn(Rn(e).replace(Pn,"")),t,"")}}((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));const Un=r=>{var{steps:l,currentIndex:c,displayExtractor:d,fadeColor:f,fadePosition:g="both"}=r,h=u(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const[p,m]=i(!!g),[y,F]=i("left"===g||"both"===g),[S,v]=i("right"===g||"both"===g),B=a(null),b=a(null);o((()=>{x(),window.addEventListener("resize",x);const t=b.current;return t&&t.addEventListener("scroll",x),()=>{window.removeEventListener("resize",x),t&&t.removeEventListener("scroll",x)}}),[]),o((()=>($(),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),[c]);const $=()=>{if(window.innerWidth>s.mobileL)return;const t=b.current;if(t){const e=10.5*c-4;t.scrollLeft=16*e}},x=()=>{if(p){m(window.innerWidth<s.mobileL);const t=b.current,e=B.current;t&&e&&t.scrollWidth>e.offsetWidth?(m(!0),F(t.scrollLeft>=1),v(t.scrollWidth-t.scrollLeft>e.offsetWidth)):m(!1)}},D=(t,e)=>t<e?"Completed step":t===e?"Current step":"Uncompleted step",H=(t,e)=>Gn(`${D(t,e)} ${t}`);if(!l.length)return null;return e(Ke,Object.assign({ref:B},h,{children:[t(qe,Object.assign({ref:b},{children:l.map(((n,r)=>{const i=r<=c,a=r===c?"bold":"regular";return e(nn,Object.assign({"aria-label":D(r,c),id:H(r,c)},{children:[t(tn,{highlighted:i}),t(en,Object.assign({highlighted:i,weight:a},{children:(o=n,d?d(o):o.toString())}))]}),r);var o}))})),p&&e(n,{children:[y&&t(Qe,{backgroundColor:f,position:"left"}),S&&t(Qe,{backgroundColor:f,position:"right"})]})]}))};export{Un as ProgressIndicator};
//# sourceMappingURL=index.js.map
