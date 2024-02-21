import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as a,useEffect as o}from"react";import l,{css as c}from"styled-components";import{ExternalIcon as d}from"@lifesg/react-icons/external";function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const s={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=e=>Object.keys(s).reduce(((t,n)=>{const r=s[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),g=f("max-width"),h=(f("min-width"),s);var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,y="object"==typeof p&&p&&p.Object===Object&&p,S="object"==typeof self&&self&&self.Object===Object&&self,B=y||S||Function("return this")(),b=B.Symbol,v=b,$=Object.prototype,x=$.hasOwnProperty,D=$.toString,E=v?v.toStringTag:void 0;var H=function(e){var t=x.call(e,E),n=e[E];try{e[E]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[E]=n:delete e[E]),i},w=Object.prototype.toString;var A=H,_=function(e){return w.call(e)},k=b?b.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?A(e):_(e)};var z=C,O=function(e){return null!=e&&"object"==typeof e};var j=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==z(e)},L=F,W=j,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var T=function(e,t){if(L(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(N.test(e)||!I.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=C,V=R;var G,U=function(e){if(!V(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Z=B["__core-js_shared__"],X=(G=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var M=function(e){return!!X&&X in e},Y=Function.prototype.toString;var J=U,K=M,q=R,Q=function(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ee=/^\[object .+?Constructor\]$/,te=Function.prototype,ne=Object.prototype,re=te.toString,ie=ne.hasOwnProperty,ae=RegExp("^"+re.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||K(e))&&(J(e)?ae:ee).test(Q(e))},le=function(e,t){return null==e?void 0:e[t]};var ce=function(e,t){var n=le(e,t);return oe(n)?n:void 0},de=ce(Object,"create"),ue=de;var se=function(){this.__data__=ue?ue(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=de,he=Object.prototype.hasOwnProperty;var pe=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},me=de,Fe=Object.prototype.hasOwnProperty;var ye=de;var Se=se,Be=fe,be=pe,ve=function(e){var t=this.__data__;return me?void 0!==t[e]:Fe.call(t,e)},$e=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=Se,xe.prototype.delete=Be,xe.prototype.get=be,xe.prototype.has=ve,xe.prototype.set=$e;var De=xe;var Ee=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},Ae=we,_e=Array.prototype.splice;var ke=we;var Ce=we;var ze=we;var Oe=Ee,je=function(e){var t=this.__data__,n=Ae(t,e);return!(n<0)&&(n==t.length-1?t.pop():_e.call(t,n,1),--this.size,!0)},Le=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ce(this.__data__,e)>-1},Ie=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Oe,Ne.prototype.delete=je,Ne.prototype.get=Le,Ne.prototype.has=We,Ne.prototype.set=Ie;var Te=Ne,Re=ce(B,"Map"),Pe=De,Ve=Te,Ge=Re;var Ue=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ze=function(e,t){var n=e.__data__;return Ue(t)?n["string"==typeof t?"string":"hash"]:n.map},Xe=Ze;var Me=Ze;var Ye=Ze;var Je=Ze;var Ke=function(){this.size=0,this.__data__={hash:new Pe,map:new(Ge||Ve),string:new Pe}},qe=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Me(this,e).get(e)},et=function(e){return Ye(this,e).has(e)},tt=function(e,t){var n=Je(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=Ke,nt.prototype.delete=qe,nt.prototype.get=Qe,nt.prototype.has=et,nt.prototype.set=tt;var rt=nt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(it.Cache||rt),n}it.Cache=rt;var at=it;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,ct=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,i){t.push(r?i.replace(lt,"$1"):n||e)})),t}));var dt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ut=F,st=j,ft=b?b.prototype:void 0,gt=ft?ft.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ut(t))return dt(t,e)+"";if(st(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},pt=ht;var mt=function(e){return null==e?"":pt(e)},Ft=F,yt=T,St=ct,Bt=mt;var bt=j;var vt=function(e,t){return Ft(e)?e:yt(e,t)?[e]:St(Bt(e))},$t=function(e){if("string"==typeof e||bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var xt=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[$t(t[n++])];return n&&n==r?e:void 0};var Dt=m((function(e,t,n){var r=null==e?void 0:xt(e,t);return void 0===r?n:r}));const Et=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=Ht(At,n[wt.colorScheme]);return n.options&&n.options.color?Et(r,e,n.options.color):Et(r,e)},kt={Brand:{1:_t("Brand.1"),2:_t("Brand.2"),3:_t("Brand.3"),4:_t("Brand.4"),5:_t("Brand.5"),6:_t("Brand.6")},Primary:_t("Primary"),PrimaryDark:_t("PrimaryDark"),Secondary:_t("Secondary"),Accent:{Light:{1:_t("Accent.Light.1"),2:_t("Accent.Light.2"),3:_t("Accent.Light.3"),4:_t("Accent.Light.4"),5:_t("Accent.Light.5"),6:_t("Accent.Light.6")},Dark:{1:_t("Accent.Dark.1"),2:_t("Accent.Dark.2"),3:_t("Accent.Dark.3")}},Neutral:{1:_t("Neutral.1"),2:_t("Neutral.2"),3:_t("Neutral.3"),4:_t("Neutral.4"),5:_t("Neutral.5"),6:_t("Neutral.6"),7:_t("Neutral.7"),8:_t("Neutral.8")},Validation:{Green:{Text:_t("Validation.Green.Text"),Icon:_t("Validation.Green.Icon"),Border:_t("Validation.Green.Border"),Background:_t("Validation.Green.Background")},Orange:{Text:_t("Validation.Orange.Text"),Icon:_t("Validation.Orange.Icon"),Border:_t("Validation.Orange.Border"),Background:_t("Validation.Orange.Background"),Badge:_t("Validation.Orange.Badge")},Red:{Text:_t("Validation.Red.Text"),Icon:_t("Validation.Red.Icon"),Border:_t("Validation.Red.Border"),Background:_t("Validation.Red.Background")},Blue:{Text:_t("Validation.Blue.Text"),Icon:_t("Validation.Blue.Icon"),Border:_t("Validation.Blue.Border"),Background:_t("Validation.Blue.Background")}},Shadow:{Accent:_t("Shadow.Accent"),Red:_t("Shadow.Red"),Elevation:_t("Shadow.Elevation")}},Ct=l.div`
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
`,zt=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=u(t,["mobileCols","tabletCols","desktopCols"]);return e(Ct,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Ot(a||i||r),o=Ot(e),l=Ot(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),Ot=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},jt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,l=u(t,["children","data-testid","type","stretch"]);return e(Lt,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},l,{children:r}))})),Lt=l.div`
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
`,Wt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=u(t,["children","data-testid","stretch"]);return e(It,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),It=l.section`
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
`,Nt=r.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1}=t,c=u(t,["children","data-testid","className","type","stretch"]);return e(Wt,Object.assign({ref:n,"data-testid":i,className:a,stretch:l},c,{children:e(jt,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),Tt={Section:Wt,Container:jt,Content:Nt,ColDiv:zt},Rt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Pt={collections:{base:{D1:{fontFamily:Rt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Rt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Rt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Rt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Rt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Rt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Rt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Rt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Rt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Rt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Rt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Rt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Rt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Rt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,r=Ht(Pt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?Et(r,e,n.options.textStyle):Et(r,e)},Gt={D1:{fontFamily:Vt("D1.fontFamily"),fontSize:Vt("D1.fontSize"),fontWeight:Vt("D1.fontWeight"),lineHeight:Vt("D1.lineHeight"),letterSpacing:Vt("D1.letterSpacing")},D2:{fontFamily:Vt("D2.fontFamily"),fontSize:Vt("D2.fontSize"),fontWeight:Vt("D2.fontWeight"),lineHeight:Vt("D2.lineHeight"),letterSpacing:Vt("D2.letterSpacing")},D3:{fontFamily:Vt("D3.fontFamily"),fontSize:Vt("D3.fontSize"),fontWeight:Vt("D3.fontWeight"),lineHeight:Vt("D3.lineHeight"),letterSpacing:Vt("D3.letterSpacing")},D4:{fontFamily:Vt("D4.fontFamily"),fontSize:Vt("D4.fontSize"),fontWeight:Vt("D4.fontWeight"),lineHeight:Vt("D4.lineHeight"),letterSpacing:Vt("D4.letterSpacing")},DBody:{fontFamily:Vt("DBody.fontFamily"),fontSize:Vt("DBody.fontSize"),fontWeight:Vt("DBody.fontWeight"),lineHeight:Vt("DBody.lineHeight"),letterSpacing:Vt("DBody.letterSpacing")},H1:{fontFamily:Vt("H1.fontFamily"),fontSize:Vt("H1.fontSize"),fontWeight:Vt("H1.fontWeight"),lineHeight:Vt("H1.lineHeight"),letterSpacing:Vt("H1.letterSpacing")},H2:{fontFamily:Vt("H2.fontFamily"),fontSize:Vt("H2.fontSize"),fontWeight:Vt("H2.fontWeight"),lineHeight:Vt("H2.lineHeight"),letterSpacing:Vt("H2.letterSpacing")},H3:{fontFamily:Vt("H3.fontFamily"),fontSize:Vt("H3.fontSize"),fontWeight:Vt("H3.fontWeight"),lineHeight:Vt("H3.lineHeight"),letterSpacing:Vt("H3.letterSpacing")},H4:{fontFamily:Vt("H4.fontFamily"),fontSize:Vt("H4.fontSize"),fontWeight:Vt("H4.fontWeight"),lineHeight:Vt("H4.lineHeight"),letterSpacing:Vt("H4.letterSpacing")},H5:{fontFamily:Vt("H5.fontFamily"),fontSize:Vt("H5.fontSize"),fontWeight:Vt("H5.fontWeight"),lineHeight:Vt("H5.lineHeight"),letterSpacing:Vt("H5.letterSpacing")},H6:{fontFamily:Vt("H6.fontFamily"),fontSize:Vt("H6.fontSize"),fontWeight:Vt("H6.fontWeight"),lineHeight:Vt("H6.lineHeight"),letterSpacing:Vt("H6.letterSpacing")},Body:{fontFamily:Vt("Body.fontFamily"),fontSize:Vt("Body.fontSize"),fontWeight:Vt("Body.fontWeight"),lineHeight:Vt("Body.lineHeight"),letterSpacing:Vt("Body.letterSpacing")},BodySmall:{fontFamily:Vt("BodySmall.fontFamily"),fontSize:Vt("BodySmall.fontSize"),fontWeight:Vt("BodySmall.fontWeight"),lineHeight:Vt("BodySmall.lineHeight"),letterSpacing:Vt("BodySmall.letterSpacing")},XSmall:{fontFamily:Vt("XSmall.fontFamily"),fontSize:Vt("XSmall.fontSize"),fontWeight:Vt("XSmall.fontWeight"),lineHeight:Vt("XSmall.lineHeight"),letterSpacing:Vt("XSmall.letterSpacing")}},Ut=e=>{switch(e){case 700:case"bold":return Rt.Bold;case 600:case"semibold":return Rt.Semibold;case 300:case"light":return Rt.Light;case 400:case"regular":return Rt.Regular;default:return""}},Zt=(e,t)=>n=>{var r;const i=Gt[e].fontFamily(n),a=Gt[e].fontWeight(n);return Object.values(Rt).includes(i)?c`
                font-family: ${Ut(t)||Ut(a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Xt(t)||a)&&void 0!==r?r:"normal"};
        `},Xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Mt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Yt=(e,t,n=!1)=>r=>{const i=Gt[e],a=i.fontSize(r);return c`
            ${Zt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Jt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Mt(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Mt(n)}
        `;var Kt;!function(e){e.D1=l.h1`
        ${e=>c`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>en(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>en(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Kt||(Kt={}));const qt=l.a`
    ${e=>c`
            ${Yt(e.textStyle,e.weight)}
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
`,Qt=l(d)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,en=n=>{var{external:r=!1,children:i}=n,a=u(n,["external","children"]);return t(qt,Object.assign({},a,{children:[i,r&&e(Qt,{})]}))};var tn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(tn||(tn={}));const nn=l.div`
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
`,rn=l.nav`
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
`,an=l.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{const{position:t,backgroundColor:n}=e;let r;const i="rgba(255,255,255,0.001)";return r="left"===t?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(Tt.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const on=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?kt.Accent.Light[1]:kt.Neutral[6])(e)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,ln=l(Kt.BodySmall)`
    margin-right: 0.5rem;

    ${e=>{const{highlighted:t}=e;return`color: ${(t?kt.Primary:kt.Neutral[4])(e)};`}};
`,cn=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var dn=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var un=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),sn=mt,fn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var hn=function(e){return(e=sn(e))&&e.replace(fn,un).replace(gn,"")},pn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var mn=function(e){return e.match(pn)||[]},Fn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var yn=function(e){return Fn.test(e)},Sn="\\ud800-\\udfff",Bn="\\u2700-\\u27bf",bn="a-z\\xdf-\\xf6\\xf8-\\xff",vn="A-Z\\xc0-\\xd6\\xd8-\\xde",$n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xn="["+$n+"]",Dn="\\d+",En="["+Bn+"]",Hn="["+bn+"]",wn="[^"+Sn+$n+Dn+Bn+bn+vn+"]",An="(?:\\ud83c[\\udde6-\\uddff]){2}",_n="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="["+vn+"]",Cn="(?:"+Hn+"|"+wn+")",zn="(?:"+kn+"|"+wn+")",On="(?:['’](?:d|ll|m|re|s|t|ve))?",jn="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ln="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",Wn="[\\ufe0e\\ufe0f]?",In=Wn+Ln+("(?:\\u200d(?:"+["[^"+Sn+"]",An,_n].join("|")+")"+Wn+Ln+")*"),Nn="(?:"+[En,An,_n].join("|")+")"+In,Tn=RegExp([kn+"?"+Hn+"+"+On+"(?="+[xn,kn,"$"].join("|")+")",zn+"+"+jn+"(?="+[xn,kn+Cn,"$"].join("|")+")",kn+"?"+Cn+"+"+On,kn+"+"+jn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dn,Nn].join("|"),"g");var Rn=mn,Pn=yn,Vn=mt,Gn=function(e){return e.match(Tn)||[]};var Un=dn,Zn=hn,Xn=function(e,t,n){return e=Vn(e),void 0===(t=n?void 0:t)?Pn(e)?Gn(e):Rn(e):e.match(t)||[]},Mn=RegExp("['’]","g");var Yn=m(function(e){return function(t){return Un(Xn(Zn(t).replace(Mn,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const Jn=r=>{var{steps:l,currentIndex:c,displayExtractor:d,fadeColor:s,fadePosition:f="both"}=r,g=u(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const[p,m]=i(!!f),[F,y]=i("left"===f||"both"===f),[S,B]=i("right"===f||"both"===f),b=a(null),v=a(null);o((()=>{x(),window.addEventListener("resize",x);const e=v.current;return e&&e.addEventListener("scroll",x),()=>{window.removeEventListener("resize",x),e&&e.removeEventListener("scroll",x)}}),[]),o((()=>($(),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),[c]);const $=()=>{if(window.innerWidth>h.mobileL)return;const e=v.current;if(e){const t=10.5*c-4;e.scrollLeft=16*t}},x=()=>{if(p){m(window.innerWidth<h.mobileL);const e=v.current,t=b.current;e&&t&&e.scrollWidth>t.offsetWidth?(m(!0),y(e.scrollLeft>=1),B(e.scrollWidth-e.scrollLeft>t.offsetWidth)):m(!1)}},D=(e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step",E=(e,t)=>Yn(`${D(e,t)} ${e}`);if(!l.length)return null;return t(nn,Object.assign({ref:b},g,{children:[e(rn,Object.assign({ref:v},{children:l.map(((n,r)=>{const i=r<=c,a=r===c?"bold":"regular";return t(cn,Object.assign({"aria-label":D(r,c),id:E(r,c)},{children:[e(on,{highlighted:i}),e(ln,Object.assign({highlighted:i,weight:a},{children:(o=n,d?d(o):o.toString())}))]}),r);var o}))})),p&&t(n,{children:[F&&e(an,{backgroundColor:s,position:"left"}),S&&e(an,{backgroundColor:s,position:"right"})]})]}))};export{Jn as ProgressIndicator};
//# sourceMappingURL=index.js.map
