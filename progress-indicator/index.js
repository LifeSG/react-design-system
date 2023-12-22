import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as a,useEffect as o}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const s={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=e=>Object.keys(s).reduce(((t,n)=>{const r=s[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),g=f("max-width"),h=(f("min-width"),s);var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,F="object"==typeof p&&p&&p.Object===Object&&p,y="object"==typeof self&&self&&self.Object===Object&&self,S=F||y||Function("return this")(),B=S.Symbol,b=B,v=Object.prototype,$=v.hasOwnProperty,x=v.toString,D=b?b.toStringTag:void 0;var E=function(e){var t=$.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var i=x.call(e);return r&&(t?e[D]=n:delete e[D]),i},H=Object.prototype.toString;var w=E,A=function(e){return H.call(e)},k=B?B.toStringTag:void 0;var _=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?w(e):A(e)};var C=_,z=function(e){return null!=e&&"object"==typeof e};var O=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==C(e)},j=m,L=O,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var N=function(e,t){if(j(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!L(e))||(I.test(e)||!W.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=_,P=T;var V,G=function(e){if(!P(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},U=S["__core-js_shared__"],Z=(V=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var X=function(e){return!!Z&&Z in e},M=Function.prototype.toString;var Y=G,J=X,K=T,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ie=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!K(e)||J(e))&&(Y(e)?ie:Q).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=oe(e,t);return ae(n)?n:void 0},ce=le(Object,"create"),de=ce;var ue=function(){this.__data__=de?de(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fe=ce,ge=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},pe=ce,me=Object.prototype.hasOwnProperty;var Fe=ce;var ye=ue,Se=se,Be=he,be=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=ye,$e.prototype.delete=Se,$e.prototype.get=Be,$e.prototype.has=be,$e.prototype.set=ve;var xe=$e;var De=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},we=He,Ae=Array.prototype.splice;var ke=He;var _e=He;var Ce=He;var ze=De,Oe=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ae.call(t,n,1),--this.size,!0)},je=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},Le=function(e){return _e(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=ze,Ie.prototype.delete=Oe,Ie.prototype.get=je,Ie.prototype.has=Le,Ie.prototype.set=We;var Ne=Ie,Te=le(S,"Map"),Re=xe,Pe=Ne,Ve=Te;var Ge=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ue=function(e,t){var n=e.__data__;return Ge(t)?n["string"==typeof t?"string":"hash"]:n.map},Ze=Ue;var Xe=Ue;var Me=Ue;var Ye=Ue;var Je=function(){this.size=0,this.__data__={hash:new Re,map:new(Ve||Pe),string:new Re}},Ke=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Xe(this,e).get(e)},Qe=function(e){return Me(this,e).has(e)},et=function(e,t){var n=Ye(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Je,tt.prototype.delete=Ke,tt.prototype.get=qe,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var it=rt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,lt=function(e){var t=it(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var ct=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},dt=m,ut=O,st=B?B.prototype:void 0,ft=st?st.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(dt(t))return ct(t,e)+"";if(ut(t))return ft?ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ht=gt;var pt=function(e){return null==e?"":ht(e)},mt=m,Ft=N,yt=lt,St=pt;var Bt=O;var bt=function(e,t){return mt(e)?e:Ft(e,t)?[e]:yt(St(e))},vt=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var $t=function(e,t){for(var n=0,r=(t=bt(t,e)).length;null!=e&&n<r;)e=e[vt(t[n++])];return n&&n==r?e:void 0};var xt=function(e,t,n){var r=null==e?void 0:$t(e,t);return void 0===r?n:r};const Dt=(e,t,n)=>t?xt(n,t)||xt(e,t):n||e,Et=(e,t)=>{const n=t||e.defaultValue;return xt(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Et(wt,n[Ht.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},kt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}},_t=l.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return c`
            grid-column: ${t||"auto"} / span ${n||1};

            ${g.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${g.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`,Ct=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=u(t,["mobileCols","tabletCols","desktopCols"]);return e(_t,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=zt(a||i||r),o=zt(e),l=zt(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),zt=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ot=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,l=u(t,["children","data-testid","type","stretch"]);return e(jt,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},l,{children:r}))})),jt=l.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?c`
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

    ${e=>{switch(e.$type){case"grid":return c`
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
`,Lt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=u(t,["children","data-testid","stretch"]);return e(Wt,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),Wt=l.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?c`
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
`,It=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1}=t,c=u(t,["children","data-testid","className","type","stretch"]);return e(Lt,Object.assign({ref:n,"data-testid":i,className:a,stretch:l},c,{children:e(Ot,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),Nt={Section:Lt,Container:Ot,Content:It,ColDiv:Ct},Tt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Rt={collections:{base:{D1:{fontFamily:Tt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Tt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Tt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Tt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Tt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Tt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Tt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Tt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Tt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Tt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Pt=e=>t=>{const n=t.theme,r=Et(Rt,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},Vt={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Gt=e=>{switch(e){case 700:case"bold":return Tt.Bold;case 600:case"semibold":return Tt.Semibold;case 300:case"light":return Tt.Light;case 400:case"regular":return Tt.Regular;default:return""}},Ut=(e,t)=>n=>{var r;const i=Vt[e].fontFamily(n),a=Vt[e].fontWeight(n);return Object.values(Tt).includes(i)?c`
                font-family: ${Gt(t)||Gt(a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Zt(t)||a)&&void 0!==r?r:"normal"};
        `},Zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mt=(e,t,n=!1)=>r=>{const i=Vt[e],a=i.fontSize(r);return c`
            ${Ut(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Yt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Xt(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Xt(n)}
        `;var Jt;!function(e){e.D1=l.h1`
        ${e=>c`
                ${Mt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${Mt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${Mt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${Mt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${Mt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${Mt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${Mt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${Mt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${Mt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${Mt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${Mt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${Mt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${Mt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${Mt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Yt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Jt||(Jt={}));const Kt=l.a`
    ${e=>c`
            ${Mt(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        `}
`,qt=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qt=n=>{var{external:r=!1,children:i}=n,a=u(n,["external","children"]);return t(Kt,Object.assign({},a,{children:[i,r&&e(qt,{})]}))};var en;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(en||(en={}));const tn=l.div`
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

    ${e=>{const{position:t,backgroundColor:n}=e;let r;const i="rgba(255,255,255,0.001)";return r="left"===t?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(Nt.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const an=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?kt.Accent.Light[1]:kt.Neutral[6])(e)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,on=l(Jt.BodySmall)`
    margin-right: 0.5rem;

    ${e=>{const{highlighted:t}=e;return`color: ${(t?kt.Primary:kt.Neutral[4])(e)};`}};
`,ln=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var cn=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var dn=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),un=pt,sn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var gn=function(e){return(e=un(e))&&e.replace(sn,dn).replace(fn,"")},hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var pn=function(e){return e.match(hn)||[]},mn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Fn=function(e){return mn.test(e)},yn="\\ud800-\\udfff",Sn="\\u2700-\\u27bf",Bn="a-z\\xdf-\\xf6\\xf8-\\xff",bn="A-Z\\xc0-\\xd6\\xd8-\\xde",vn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$n="["+vn+"]",xn="\\d+",Dn="["+Sn+"]",En="["+Bn+"]",Hn="[^"+yn+vn+xn+Sn+Bn+bn+"]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="["+bn+"]",_n="(?:"+En+"|"+Hn+")",Cn="(?:"+kn+"|"+Hn+")",zn="(?:['’](?:d|ll|m|re|s|t|ve))?",On="(?:['’](?:D|LL|M|RE|S|T|VE))?",jn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Ln="[\\ufe0e\\ufe0f]?",Wn=Ln+jn+("(?:\\u200d(?:"+["[^"+yn+"]",wn,An].join("|")+")"+Ln+jn+")*"),In="(?:"+[Dn,wn,An].join("|")+")"+Wn,Nn=RegExp([kn+"?"+En+"+"+zn+"(?="+[$n,kn,"$"].join("|")+")",Cn+"+"+On+"(?="+[$n,kn+_n,"$"].join("|")+")",kn+"?"+_n+"+"+zn,kn+"+"+On,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xn,In].join("|"),"g");var Tn=pn,Rn=Fn,Pn=pt,Vn=function(e){return e.match(Nn)||[]};var Gn=cn,Un=gn,Zn=function(e,t,n){return e=Pn(e),void 0===(t=n?void 0:t)?Rn(e)?Vn(e):Tn(e):e.match(t)||[]},Xn=RegExp("['’]","g");var Mn=function(e){return function(t){return Gn(Zn(Un(t).replace(Xn,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));const Yn=r=>{var{steps:l,currentIndex:c,displayExtractor:d,fadeColor:s,fadePosition:f="both"}=r,g=u(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const[p,m]=i(!!f),[F,y]=i("left"===f||"both"===f),[S,B]=i("right"===f||"both"===f),b=a(null),v=a(null);o((()=>{x(),window.addEventListener("resize",x);const e=v.current;return e&&e.addEventListener("scroll",x),()=>{window.removeEventListener("resize",x),e&&e.removeEventListener("scroll",x)}}),[]),o((()=>($(),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),[c]);const $=()=>{if(window.innerWidth>h.mobileL)return;const e=v.current;if(e){const t=10.5*c-4;e.scrollLeft=16*t}},x=()=>{if(p){m(window.innerWidth<h.mobileL);const e=v.current,t=b.current;e&&t&&e.scrollWidth>t.offsetWidth?(m(!0),y(e.scrollLeft>=1),B(e.scrollWidth-e.scrollLeft>t.offsetWidth)):m(!1)}},D=(e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step",E=(e,t)=>Mn(`${D(e,t)} ${e}`);if(!l.length)return null;return t(tn,Object.assign({ref:b},g,{children:[e(nn,Object.assign({ref:v},{children:l.map(((n,r)=>{const i=r<=c,a=r===c?"bold":"regular";return t(ln,Object.assign({"aria-label":D(r,c),id:E(r,c)},{children:[e(an,{highlighted:i}),e(on,Object.assign({highlighted:i,weight:a},{children:(o=n,d?d(o):o.toString())}))]}),r);var o}))})),p&&t(n,{children:[F&&e(rn,{backgroundColor:s,position:"left"}),S&&e(rn,{backgroundColor:s,position:"right"})]})]}))};export{Yn as ProgressIndicator};
//# sourceMappingURL=index.js.map
