import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as a,useEffect as o}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const s={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(s).reduce(((e,n)=>{const r=s[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),g=f("max-width"),h=(f("min-width"),s);var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,y="object"==typeof p&&p&&p.Object===Object&&p,F="object"==typeof self&&self&&self.Object===Object&&self,S=y||F||Function("return this")(),b=S.Symbol,v=b,B=Object.prototype,$=B.hasOwnProperty,x=B.toString,D=v?v.toStringTag:void 0;var H=function(t){var e=$.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=x.call(t);return r&&(e?t[D]=n:delete t[D]),i},E=Object.prototype.toString;var w=H,A=function(t){return E.call(t)},_=b?b.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?w(t):A(t)};var k=z,O=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==k(t)},j=m,L=C,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var I=function(t,e){if(j(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!L(t))||(N.test(t)||!W.test(t)||null!=e&&t in Object(e))};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R=z,V=T;var P,G=function(t){if(!V(t))return!1;var e=R(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},U=S["__core-js_shared__"],Z=(P=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(t){return!!Z&&Z in t},M=Function.prototype.toString;var Y=G,J=X,K=T,q=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=/^\[object .+?Constructor\]$/,tt=Function.prototype,et=Object.prototype,nt=tt.toString,rt=et.hasOwnProperty,it=RegExp("^"+nt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!K(t)||J(t))&&(Y(t)?it:Q).test(q(t))},ot=function(t,e){return null==t?void 0:t[e]};var lt=function(t,e){var n=ot(t,e);return at(n)?n:void 0},ct=lt(Object,"create"),dt=ct;var ut=function(){this.__data__=dt?dt(null):{},this.size=0};var st=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=ct,gt=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},pt=ct,mt=Object.prototype.hasOwnProperty;var yt=ct;var Ft=ut,St=st,bt=ht,vt=function(t){var e=this.__data__;return pt?void 0!==e[t]:mt.call(e,t)},Bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=yt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=Ft,$t.prototype.delete=St,$t.prototype.get=bt,$t.prototype.has=vt,$t.prototype.set=Bt;var xt=$t;var Dt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var Et=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},wt=Et,At=Array.prototype.splice;var _t=Et;var zt=Et;var kt=Et;var Ot=Dt,Ct=function(t){var e=this.__data__,n=wt(e,t);return!(n<0)&&(n==e.length-1?e.pop():At.call(e,n,1),--this.size,!0)},jt=function(t){var e=this.__data__,n=_t(e,t);return n<0?void 0:e[n][1]},Lt=function(t){return zt(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=kt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=Ot,Nt.prototype.delete=Ct,Nt.prototype.get=jt,Nt.prototype.has=Lt,Nt.prototype.set=Wt;var It=Nt,Tt=lt(S,"Map"),Rt=xt,Vt=It,Pt=Tt;var Gt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ut=function(t,e){var n=t.__data__;return Gt(e)?n["string"==typeof e?"string":"hash"]:n.map},Zt=Ut;var Xt=Ut;var Mt=Ut;var Yt=Ut;var Jt=function(){this.size=0,this.__data__={hash:new Rt,map:new(Pt||Vt),string:new Rt}},Kt=function(t){var e=Zt(this,t).delete(t);return this.size-=e?1:0,e},qt=function(t){return Xt(this,t).get(t)},Qt=function(t){return Mt(this,t).has(t)},te=function(t,e){var n=Yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ee.prototype.clear=Jt,ee.prototype.delete=Kt,ee.prototype.get=qt,ee.prototype.has=Qt,ee.prototype.set=te;var ne=ee;function re(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(re.Cache||ne),n}re.Cache=ne;var ie=re;var ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/\\(\\)?/g,le=function(t){var e=ie(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ae,(function(t,n,r,i){e.push(r?i.replace(oe,"$1"):n||t)})),e}));var ce=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},de=m,ue=C,se=b?b.prototype:void 0,fe=se?se.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(de(e))return ce(e,t)+"";if(ue(e))return fe?fe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},he=ge;var pe=function(t){return null==t?"":he(t)},me=m,ye=I,Fe=le,Se=pe;var be=C;var ve=function(t,e){return me(t)?t:ye(t,e)?[t]:Fe(Se(t))},Be=function(t){if("string"==typeof t||be(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $e=function(t,e){for(var n=0,r=(e=ve(e,t)).length;null!=t&&n<r;)t=t[Be(e[n++])];return n&&n==r?t:void 0};var xe=function(t,e,n){var r=null==t?void 0:$e(t,e);return void 0===r?n:r};const De=(t,e,n)=>e?xe(n,e)||xe(t,e):n||t,He=(t,e)=>{const n=e||t.defaultValue;return xe(t.collections,n)};var Ee;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ee||(Ee={}));const we={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ae=t=>e=>{const n=e.theme,r=He(we,n[Ee.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},_e={Brand:{1:Ae("Brand.1"),2:Ae("Brand.2"),3:Ae("Brand.3"),4:Ae("Brand.4"),5:Ae("Brand.5"),6:Ae("Brand.6")},Primary:Ae("Primary"),PrimaryDark:Ae("PrimaryDark"),Secondary:Ae("Secondary"),Accent:{Light:{1:Ae("Accent.Light.1"),2:Ae("Accent.Light.2"),3:Ae("Accent.Light.3"),4:Ae("Accent.Light.4"),5:Ae("Accent.Light.5"),6:Ae("Accent.Light.6")},Dark:{1:Ae("Accent.Dark.1"),2:Ae("Accent.Dark.2"),3:Ae("Accent.Dark.3")}},Neutral:{1:Ae("Neutral.1"),2:Ae("Neutral.2"),3:Ae("Neutral.3"),4:Ae("Neutral.4"),5:Ae("Neutral.5"),6:Ae("Neutral.6"),7:Ae("Neutral.7"),8:Ae("Neutral.8")},Validation:{Green:{Text:Ae("Validation.Green.Text"),Icon:Ae("Validation.Green.Icon"),Border:Ae("Validation.Green.Border"),Background:Ae("Validation.Green.Background")},Orange:{Text:Ae("Validation.Orange.Text"),Icon:Ae("Validation.Orange.Icon"),Border:Ae("Validation.Orange.Border"),Background:Ae("Validation.Orange.Background"),Badge:Ae("Validation.Orange.Badge")},Red:{Text:Ae("Validation.Red.Text"),Icon:Ae("Validation.Red.Icon"),Border:Ae("Validation.Red.Border"),Background:Ae("Validation.Red.Background")},Blue:{Text:Ae("Validation.Blue.Text"),Icon:Ae("Validation.Blue.Icon"),Border:Ae("Validation.Blue.Border"),Background:Ae("Validation.Blue.Background")}},Shadow:{Accent:Ae("Shadow.Accent"),Red:Ae("Shadow.Red"),Elevation:Ae("Shadow.Elevation")}},ze=l.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=t;return c`
            grid-column: ${e||"auto"} / span ${n||1};

            ${g.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${g.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`,ke=r.forwardRef(((e,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=e,o=u(e,["mobileCols","tabletCols","desktopCols"]);return t(ze,Object.assign({ref:n},(()=>{const t=i||r,e=r,n=Oe(a||i||r),o=Oe(t),l=Oe(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),Oe=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},Ce=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=e,l=u(e,["children","data-testid","type","stretch"]);return t(je,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},l,{children:r}))})),je=l.div`
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
`,Le=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=e,o=u(e,["children","data-testid","stretch"]);return t(We,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),We=l.section`
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
`,Ne=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1}=e,c=u(e,["children","data-testid","className","type","stretch"]);return t(Le,Object.assign({ref:n,"data-testid":i,className:a,stretch:l},c,{children:t(Ce,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),Ie={Section:Le,Container:Ce,Content:Ne,ColDiv:ke},Te={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Re={collections:{base:{D1:{fontFamily:Te.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Te.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Te.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Te.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Te.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Te.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Te.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Te.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Te.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Te.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Te.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Te.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Te.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Te.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ve=t=>e=>{const n=e.theme,r=He(Re,n[Ee.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Pe={D1:{fontFamily:Ve("D1.fontFamily"),fontSize:Ve("D1.fontSize"),fontWeight:Ve("D1.fontWeight"),lineHeight:Ve("D1.lineHeight"),letterSpacing:Ve("D1.letterSpacing")},D2:{fontFamily:Ve("D2.fontFamily"),fontSize:Ve("D2.fontSize"),fontWeight:Ve("D2.fontWeight"),lineHeight:Ve("D2.lineHeight"),letterSpacing:Ve("D2.letterSpacing")},D3:{fontFamily:Ve("D3.fontFamily"),fontSize:Ve("D3.fontSize"),fontWeight:Ve("D3.fontWeight"),lineHeight:Ve("D3.lineHeight"),letterSpacing:Ve("D3.letterSpacing")},D4:{fontFamily:Ve("D4.fontFamily"),fontSize:Ve("D4.fontSize"),fontWeight:Ve("D4.fontWeight"),lineHeight:Ve("D4.lineHeight"),letterSpacing:Ve("D4.letterSpacing")},DBody:{fontFamily:Ve("DBody.fontFamily"),fontSize:Ve("DBody.fontSize"),fontWeight:Ve("DBody.fontWeight"),lineHeight:Ve("DBody.lineHeight"),letterSpacing:Ve("DBody.letterSpacing")},H1:{fontFamily:Ve("H1.fontFamily"),fontSize:Ve("H1.fontSize"),fontWeight:Ve("H1.fontWeight"),lineHeight:Ve("H1.lineHeight"),letterSpacing:Ve("H1.letterSpacing")},H2:{fontFamily:Ve("H2.fontFamily"),fontSize:Ve("H2.fontSize"),fontWeight:Ve("H2.fontWeight"),lineHeight:Ve("H2.lineHeight"),letterSpacing:Ve("H2.letterSpacing")},H3:{fontFamily:Ve("H3.fontFamily"),fontSize:Ve("H3.fontSize"),fontWeight:Ve("H3.fontWeight"),lineHeight:Ve("H3.lineHeight"),letterSpacing:Ve("H3.letterSpacing")},H4:{fontFamily:Ve("H4.fontFamily"),fontSize:Ve("H4.fontSize"),fontWeight:Ve("H4.fontWeight"),lineHeight:Ve("H4.lineHeight"),letterSpacing:Ve("H4.letterSpacing")},H5:{fontFamily:Ve("H5.fontFamily"),fontSize:Ve("H5.fontSize"),fontWeight:Ve("H5.fontWeight"),lineHeight:Ve("H5.lineHeight"),letterSpacing:Ve("H5.letterSpacing")},H6:{fontFamily:Ve("H6.fontFamily"),fontSize:Ve("H6.fontSize"),fontWeight:Ve("H6.fontWeight"),lineHeight:Ve("H6.lineHeight"),letterSpacing:Ve("H6.letterSpacing")},Body:{fontFamily:Ve("Body.fontFamily"),fontSize:Ve("Body.fontSize"),fontWeight:Ve("Body.fontWeight"),lineHeight:Ve("Body.lineHeight"),letterSpacing:Ve("Body.letterSpacing")},BodySmall:{fontFamily:Ve("BodySmall.fontFamily"),fontSize:Ve("BodySmall.fontSize"),fontWeight:Ve("BodySmall.fontWeight"),lineHeight:Ve("BodySmall.lineHeight"),letterSpacing:Ve("BodySmall.letterSpacing")},XSmall:{fontFamily:Ve("XSmall.fontFamily"),fontSize:Ve("XSmall.fontSize"),fontWeight:Ve("XSmall.fontWeight"),lineHeight:Ve("XSmall.lineHeight"),letterSpacing:Ve("XSmall.letterSpacing")}},Ge=t=>{switch(t){case 700:case"bold":return Te.Bold;case 600:case"semibold":return Te.Semibold;case 300:case"light":return Te.Light;case 400:case"regular":return Te.Regular;default:return""}},Ue=(t,e)=>n=>{var r;const i=Pe[t].fontFamily(n),a=Pe[t].fontWeight(n);return Object.values(Te).includes(i)?c`
                font-family: ${Ge(e)||Ge(a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Ze(e)||a)&&void 0!==r?r:"normal"};
        `},Ze=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xe=t=>{if(t>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Me=(t,e,n=!1)=>r=>{const i=Pe[t],a=i.fontSize(r);return c`
            ${Ue(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ye=(t=!1,e=!1,n=void 0)=>e?c`
            display: block;
            ${Xe(n)}
        `:t?c`
            display: inline;
        `:c`
            display: block;
            ${Xe(n)}
        `;var Je;!function(t){t.D1=l.h1`
        ${t=>c`
                ${Me("D1",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Me("D2",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Me("D3",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Me("D4",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Me("DBody",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Me("H1",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Me("H2",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Me("H3",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Me("H4",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Me("H5",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Me("H6",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Me("Body",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Me("BodySmall",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Me("XSmall",t.weight,t.paragraph)}
                color: ${_e.Neutral[1]};
                ${Ye(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Qe(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Qe(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Je||(Je={}));const Ke=l.a`
    ${t=>c`
            ${Me(t.textStyle,t.weight)}
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
`,qe=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qe=n=>{var{external:r=!1,children:i}=n,a=u(n,["external","children"]);return e(Ke,Object.assign({},a,{children:[i,r&&t(qe,{})]}))};var tn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(tn||(tn={}));const en=l.div`
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
`,nn=l.nav`
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
`,rn=l.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{const{position:e,backgroundColor:n}=t;let r;const i="rgba(255,255,255,0.001)";return r="left"===e?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(Ie.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const an=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${t=>{const{highlighted:e}=t;return`\n            background-color: ${(e?_e.Accent.Light[1]:_e.Neutral[6])(t)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,on=l(Je.BodySmall)`
    margin-right: 0.5rem;

    ${t=>{const{highlighted:e}=t;return`color: ${(e?_e.Primary:_e.Neutral[4])(t)};`}};
`,ln=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var cn=function(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n};var dn=function(t){return function(e){return null==t?void 0:t[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),un=pe,sn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var gn=function(t){return(t=un(t))&&t.replace(sn,dn).replace(fn,"")},hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var pn=function(t){return t.match(hn)||[]},mn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var yn=function(t){return mn.test(t)},Fn="\\ud800-\\udfff",Sn="\\u2700-\\u27bf",bn="a-z\\xdf-\\xf6\\xf8-\\xff",vn="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$n="["+Bn+"]",xn="\\d+",Dn="["+Sn+"]",Hn="["+bn+"]",En="[^"+Fn+Bn+xn+Sn+bn+vn+"]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",_n="["+vn+"]",zn="(?:"+Hn+"|"+En+")",kn="(?:"+_n+"|"+En+")",On="(?:['’](?:d|ll|m|re|s|t|ve))?",Cn="(?:['’](?:D|LL|M|RE|S|T|VE))?",jn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Ln="[\\ufe0e\\ufe0f]?",Wn=Ln+jn+("(?:\\u200d(?:"+["[^"+Fn+"]",wn,An].join("|")+")"+Ln+jn+")*"),Nn="(?:"+[Dn,wn,An].join("|")+")"+Wn,In=RegExp([_n+"?"+Hn+"+"+On+"(?="+[$n,_n,"$"].join("|")+")",kn+"+"+Cn+"(?="+[$n,_n+zn,"$"].join("|")+")",_n+"?"+zn+"+"+On,_n+"+"+Cn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xn,Nn].join("|"),"g");var Tn=pn,Rn=yn,Vn=pe,Pn=function(t){return t.match(In)||[]};var Gn=cn,Un=gn,Zn=function(t,e,n){return t=Vn(t),void 0===(e=n?void 0:e)?Rn(t)?Pn(t):Tn(t):t.match(e)||[]},Xn=RegExp("['’]","g");var Mn=function(t){return function(e){return Gn(Zn(Un(e).replace(Xn,"")),t,"")}}((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));const Yn=r=>{var{steps:l,currentIndex:c,displayExtractor:d,fadeColor:s,fadePosition:f="both"}=r,g=u(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const[p,m]=i(!!f),[y,F]=i("left"===f||"both"===f),[S,b]=i("right"===f||"both"===f),v=a(null),B=a(null);o((()=>{x(),window.addEventListener("resize",x);const t=B.current;return t&&t.addEventListener("scroll",x),()=>{window.removeEventListener("resize",x),t&&t.removeEventListener("scroll",x)}}),[]),o((()=>($(),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),[c]);const $=()=>{if(window.innerWidth>h.mobileL)return;const t=B.current;if(t){const e=10.5*c-4;t.scrollLeft=16*e}},x=()=>{if(p){m(window.innerWidth<h.mobileL);const t=B.current,e=v.current;t&&e&&t.scrollWidth>e.offsetWidth?(m(!0),F(t.scrollLeft>=1),b(t.scrollWidth-t.scrollLeft>e.offsetWidth)):m(!1)}},D=(t,e)=>t<e?"Completed step":t===e?"Current step":"Uncompleted step",H=(t,e)=>Mn(`${D(t,e)} ${t}`);if(!l.length)return null;return e(en,Object.assign({ref:v},g,{children:[t(nn,Object.assign({ref:B},{children:l.map(((n,r)=>{const i=r<=c,a=r===c?"bold":"regular";return e(ln,Object.assign({"aria-label":D(r,c),id:H(r,c)},{children:[t(an,{highlighted:i}),t(on,Object.assign({highlighted:i,weight:a},{children:(o=n,d?d(o):o.toString())}))]}),r);var o}))})),p&&e(n,{children:[y&&t(rn,{backgroundColor:s,position:"left"}),S&&t(rn,{backgroundColor:s,position:"right"})]})]}))};export{Yn as ProgressIndicator};
//# sourceMappingURL=index.js.map
