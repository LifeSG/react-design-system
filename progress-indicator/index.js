import t,{jsx as e,jsxs as n,Fragment as r}from"react/jsx-runtime";import i,{useState as o,useRef as a,useEffect as l}from"react";import c,{css as d}from"styled-components";const u={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},f=t=>Object.keys(u).reduce(((e,n)=>{const r=u[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),h=f("max-width"),g=(f("min-width"),u);var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof s&&s&&s.Object===Object&&s,y="object"==typeof self&&self&&self.Object===Object&&self,S=m||y||Function("return this")(),v=S.Symbol,F=v,B=Object.prototype,$=B.hasOwnProperty,b=B.toString,x=F?F.toStringTag:void 0;var H=function(t){var e=$.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var i=b.call(t);return r&&(e?t[x]=n:delete t[x]),i},D=Object.prototype.toString;var w=H,_=function(t){return D.call(t)},E=v?v.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?w(t):_(t)};var C=z,A=function(t){return null!=t&&"object"==typeof t};var k=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==C(t)},W=p,O=k,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var N=function(t,e){if(W(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!O(t))||(L.test(t)||!j.test(t)||null!=e&&t in Object(e))};var I=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=z,R=I;var V,P=function(t){if(!R(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},G=S["__core-js_shared__"],U=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var Z=function(t){return!!U&&U in t},M=Function.prototype.toString;var X=P,Y=Z,J=I,K=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,tt=Object.prototype,et=Q.toString,nt=tt.hasOwnProperty,rt=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!J(t)||Y(t))&&(X(t)?rt:q).test(K(t))},ot=function(t,e){return null==t?void 0:t[e]};var at=function(t,e){var n=ot(t,e);return it(n)?n:void 0},lt=at(Object,"create"),ct=lt;var dt=function(){this.__data__=ct?ct(null):{},this.size=0};var ut=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ft=lt,ht=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(ft){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ht.call(e,t)?e[t]:void 0},st=lt,pt=Object.prototype.hasOwnProperty;var mt=lt;var yt=dt,St=ut,vt=gt,Ft=function(t){var e=this.__data__;return st?void 0!==e[t]:pt.call(e,t)},Bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=yt,$t.prototype.delete=St,$t.prototype.get=vt,$t.prototype.has=Ft,$t.prototype.set=Bt;var bt=$t;var xt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var Dt=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},wt=Dt,_t=Array.prototype.splice;var Et=Dt;var zt=Dt;var Ct=Dt;var At=xt,kt=function(t){var e=this.__data__,n=wt(e,t);return!(n<0)&&(n==e.length-1?e.pop():_t.call(e,n,1),--this.size,!0)},Wt=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Ot=function(t){return zt(this.__data__,t)>-1},jt=function(t,e){var n=this.__data__,r=Ct(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=At,Lt.prototype.delete=kt,Lt.prototype.get=Wt,Lt.prototype.has=Ot,Lt.prototype.set=jt;var Nt=Lt,It=at(S,"Map"),Tt=bt,Rt=Nt,Vt=It;var Pt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Gt=function(t,e){var n=t.__data__;return Pt(e)?n["string"==typeof e?"string":"hash"]:n.map},Ut=Gt;var Zt=Gt;var Mt=Gt;var Xt=Gt;var Yt=function(){this.size=0,this.__data__={hash:new Tt,map:new(Vt||Rt),string:new Tt}},Jt=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e},Kt=function(t){return Zt(this,t).get(t)},qt=function(t){return Mt(this,t).has(t)},Qt=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Yt,te.prototype.delete=Jt,te.prototype.get=Kt,te.prototype.has=qt,te.prototype.set=Qt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var re=ne;var ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/\\(\\)?/g,ae=function(t){var e=re(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ie,(function(t,n,r,i){e.push(r?i.replace(oe,"$1"):n||t)})),e}));var le=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ce=p,de=k,ue=v?v.prototype:void 0,fe=ue?ue.toString:void 0;var he=function t(e){if("string"==typeof e)return e;if(ce(e))return le(e,t)+"";if(de(e))return fe?fe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ge=he;var se=function(t){return null==t?"":ge(t)},pe=p,me=N,ye=ae,Se=se;var ve=k;var Fe=function(t,e){return pe(t)?t:me(t,e)?[t]:ye(Se(t))},Be=function(t){if("string"==typeof t||ve(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $e=function(t,e){for(var n=0,r=(e=Fe(e,t)).length;null!=t&&n<r;)t=t[Be(e[n++])];return n&&n==r?t:void 0};var be=function(t,e,n){var r=null==t?void 0:$e(t,e);return void 0===r?n:r};const xe=(t,e,n)=>e?be(n,e)||be(t,e):n||t,He=(t,e)=>{const n=e||t.defaultValue;return be(t.collections,n)};var De;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(De||(De={}));const we={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_e=t=>e=>{const n=e.theme,r=He(we,n[De.colorScheme]);return n.options&&n.options.color?xe(r,t,n.options.color):xe(r,t)},Ee={Brand:{1:_e("Brand.1"),2:_e("Brand.2"),3:_e("Brand.3"),4:_e("Brand.4"),5:_e("Brand.5"),6:_e("Brand.6")},Primary:_e("Primary"),PrimaryDark:_e("PrimaryDark"),Secondary:_e("Secondary"),Accent:{Light:{1:_e("Accent.Light.1"),2:_e("Accent.Light.2"),3:_e("Accent.Light.3"),4:_e("Accent.Light.4"),5:_e("Accent.Light.5"),6:_e("Accent.Light.6")},Dark:{1:_e("Accent.Dark.1"),2:_e("Accent.Dark.2"),3:_e("Accent.Dark.3")}},Neutral:{1:_e("Neutral.1"),2:_e("Neutral.2"),3:_e("Neutral.3"),4:_e("Neutral.4"),5:_e("Neutral.5"),6:_e("Neutral.6"),7:_e("Neutral.7"),8:_e("Neutral.8")},Validation:{Green:{Text:_e("Validation.Green.Text"),Icon:_e("Validation.Green.Icon"),Border:_e("Validation.Green.Border"),Background:_e("Validation.Green.Background")},Orange:{Text:_e("Validation.Orange.Text"),Icon:_e("Validation.Orange.Icon"),Border:_e("Validation.Orange.Border"),Background:_e("Validation.Orange.Background"),Badge:_e("Validation.Orange.Badge")},Red:{Text:_e("Validation.Red.Text"),Icon:_e("Validation.Red.Icon"),Border:_e("Validation.Red.Border"),Background:_e("Validation.Red.Background")},Blue:{Text:_e("Validation.Blue.Text"),Icon:_e("Validation.Blue.Icon"),Border:_e("Validation.Blue.Border"),Background:_e("Validation.Blue.Background")}},Shadow:{Accent:_e("Shadow.Accent"),Red:_e("Shadow.Red"),Elevation:_e("Shadow.Elevation")}},ze=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1,...l}=t;return e(Ce,{ref:n,"data-testid":i,$type:o,$stretch:a,...l,children:r})})),Ce=c.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?d`
                padding: 0 3rem;
            `:d`
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

    ${t=>{switch(t.$type){case"grid":return d`
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
`,Ae=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1,...a}=t;return e(ke,{ref:n,"data-testid":i,$stretch:o,...a,children:r})})),ke=c.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?d`
                ${h.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:d`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,We=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:l=!1,...c}=t;return e(Ae,{ref:n,"data-testid":i,className:o,stretch:l,...c,children:e(ze,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:l,children:r})})})),Oe={Section:Ae,Container:ze,Content:We},je={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Le={collections:{base:{D1:{fontFamily:je.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:je.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:je.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:je.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:je.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:je.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:je.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:je.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:je.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:je.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:je.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:je.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:je.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:je.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ne=t=>e=>{const n=e.theme,r=He(Le,n[De.textStyleScheme]);return n.options&&n.options.textStyle?xe(r,t,n.options.textStyle):xe(r,t)},Ie={D1:{fontFamily:Ne("D1.fontFamily"),fontSize:Ne("D1.fontSize"),fontWeight:Ne("D1.fontWeight"),lineHeight:Ne("D1.lineHeight"),letterSpacing:Ne("D1.letterSpacing")},D2:{fontFamily:Ne("D2.fontFamily"),fontSize:Ne("D2.fontSize"),fontWeight:Ne("D2.fontWeight"),lineHeight:Ne("D2.lineHeight"),letterSpacing:Ne("D2.letterSpacing")},D3:{fontFamily:Ne("D3.fontFamily"),fontSize:Ne("D3.fontSize"),fontWeight:Ne("D3.fontWeight"),lineHeight:Ne("D3.lineHeight"),letterSpacing:Ne("D3.letterSpacing")},D4:{fontFamily:Ne("D4.fontFamily"),fontSize:Ne("D4.fontSize"),fontWeight:Ne("D4.fontWeight"),lineHeight:Ne("D4.lineHeight"),letterSpacing:Ne("D4.letterSpacing")},DBody:{fontFamily:Ne("DBody.fontFamily"),fontSize:Ne("DBody.fontSize"),fontWeight:Ne("DBody.fontWeight"),lineHeight:Ne("DBody.lineHeight"),letterSpacing:Ne("DBody.letterSpacing")},H1:{fontFamily:Ne("H1.fontFamily"),fontSize:Ne("H1.fontSize"),fontWeight:Ne("H1.fontWeight"),lineHeight:Ne("H1.lineHeight"),letterSpacing:Ne("H1.letterSpacing")},H2:{fontFamily:Ne("H2.fontFamily"),fontSize:Ne("H2.fontSize"),fontWeight:Ne("H2.fontWeight"),lineHeight:Ne("H2.lineHeight"),letterSpacing:Ne("H2.letterSpacing")},H3:{fontFamily:Ne("H3.fontFamily"),fontSize:Ne("H3.fontSize"),fontWeight:Ne("H3.fontWeight"),lineHeight:Ne("H3.lineHeight"),letterSpacing:Ne("H3.letterSpacing")},H4:{fontFamily:Ne("H4.fontFamily"),fontSize:Ne("H4.fontSize"),fontWeight:Ne("H4.fontWeight"),lineHeight:Ne("H4.lineHeight"),letterSpacing:Ne("H4.letterSpacing")},H5:{fontFamily:Ne("H5.fontFamily"),fontSize:Ne("H5.fontSize"),fontWeight:Ne("H5.fontWeight"),lineHeight:Ne("H5.lineHeight"),letterSpacing:Ne("H5.letterSpacing")},H6:{fontFamily:Ne("H6.fontFamily"),fontSize:Ne("H6.fontSize"),fontWeight:Ne("H6.fontWeight"),lineHeight:Ne("H6.lineHeight"),letterSpacing:Ne("H6.letterSpacing")},Body:{fontFamily:Ne("Body.fontFamily"),fontSize:Ne("Body.fontSize"),fontWeight:Ne("Body.fontWeight"),lineHeight:Ne("Body.lineHeight"),letterSpacing:Ne("Body.letterSpacing")},BodySmall:{fontFamily:Ne("BodySmall.fontFamily"),fontSize:Ne("BodySmall.fontSize"),fontWeight:Ne("BodySmall.fontWeight"),lineHeight:Ne("BodySmall.lineHeight"),letterSpacing:Ne("BodySmall.letterSpacing")},XSmall:{fontFamily:Ne("XSmall.fontFamily"),fontSize:Ne("XSmall.fontSize"),fontWeight:Ne("XSmall.fontWeight"),lineHeight:Ne("XSmall.lineHeight"),letterSpacing:Ne("XSmall.letterSpacing")}},Te=t=>{switch(t){case 700:case"bold":return je.Bold;case 600:case"semibold":return je.Semibold;case 300:case"light":return je.Light;case 400:case"regular":return je.Regular;default:return""}},Re=(t,e)=>n=>{const r=Ie[t].fontFamily(n),i=Ie[t].fontWeight(n);return Object.values(je).includes(r)?d`
                font-family: ${Te(e)||Te(i)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(Ve(e)||i)??"normal"};
        `},Ve=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pe=(t,e,n=!1)=>r=>{const i=Ie[t],o=i.fontSize(r);return d`
            ${Re(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ge=(t=!1,e=!1)=>e?d`
            display: block;
        `:t?d`
            display: inline;
        `:d`
            display: block;
        `;var Ue,Ze={};Object.defineProperty(Ze,"__esModule",{value:!0});var Me=t;const Xe=t=>Me.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Me.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ye;Xe.displayName="ExternalIcon",Ue=Ze.ExternalIcon=Xe,function(t){t.D1=c.h1`
        ${t=>d`
                ${Pe("D1",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.D2=c.h1`
        ${t=>d`
                ${Pe("D2",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.D3=c.h1`
        ${t=>d`
                ${Pe("D3",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.D4=c.h1`
        ${t=>d`
                ${Pe("D4",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.DBody=c.h1`
        ${t=>d`
                ${Pe("DBody",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H1=c.h1`
        ${t=>d`
                ${Pe("H1",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H2=c.h2`
        ${t=>d`
                ${Pe("H2",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H3=c.h3`
        ${t=>d`
                ${Pe("H3",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H4=c.h4`
        ${t=>d`
                ${Pe("H4",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H5=c.h5`
        ${t=>d`
                ${Pe("H5",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.H6=c.h6`
        ${t=>d`
                ${Pe("H6",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.Body=c.p`
        ${t=>d`
                ${Pe("Body",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=c.p`
        ${t=>d`
                ${Pe("BodySmall",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.XSmall=c.span`
        ${t=>d`
                ${Pe("XSmall",t.weight,t.paragraph)}
                color: ${Ee.Neutral[1]};
                ${Ge(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>qe({...t,textStyle:"Body"}),Small:t=>qe({...t,textStyle:"BodySmall"})}}(Ye||(Ye={}));const Je=c.a`
    ${t=>d`
            ${Pe(t.textStyle,t.weight)}
            color: ${Ee.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ee.Secondary};

                svg {
                    color: ${Ee.Secondary};
                }
            }
        `}
`,Ke=c(Ue)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qe=({external:t=!1,children:r,...i})=>n(Je,{...i,children:[r,t&&e(Ke,{})]});var Qe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Qe||(Qe={}));const tn=c.div`
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
`,en=c.nav`
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

    ${t=>{const{position:e,backgroundColor:n}=t;let r;const i="rgba(255,255,255,0.001)";return r="left"===e?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${h.tablet} {\n                ${r}\n            }\n        `}};
`;c(Oe.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const rn=c.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${t=>{const{highlighted:e}=t;return`\n            background-color: ${(e?Ee.Accent.Light[1]:Ee.Neutral[6])(t)};\n        `}};

    ${h.mobileL} {
        width: ${"10rem"};
    }
`,on=c(Ye.BodySmall)`
    margin-right: 0.5rem;

    ${t=>{const{highlighted:e}=t;return`color: ${(e?Ee.Primary:Ee.Neutral[4])(t)};`}};
`,an=c.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var ln=function(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n};var cn=function(t){return function(e){return null==t?void 0:t[e]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),dn=se,un=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var hn=function(t){return(t=dn(t))&&t.replace(un,cn).replace(fn,"")},gn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var sn=function(t){return t.match(gn)||[]},pn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var mn=function(t){return pn.test(t)},yn="\\ud800-\\udfff",Sn="\\u2700-\\u27bf",vn="a-z\\xdf-\\xf6\\xf8-\\xff",Fn="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$n="["+Bn+"]",bn="\\d+",xn="["+Sn+"]",Hn="["+vn+"]",Dn="[^"+yn+Bn+bn+Sn+vn+Fn+"]",wn="(?:\\ud83c[\\udde6-\\uddff]){2}",_n="[\\ud800-\\udbff][\\udc00-\\udfff]",En="["+Fn+"]",zn="(?:"+Hn+"|"+Dn+")",Cn="(?:"+En+"|"+Dn+")",An="(?:['’](?:d|ll|m|re|s|t|ve))?",kn="(?:['’](?:D|LL|M|RE|S|T|VE))?",Wn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",On="[\\ufe0e\\ufe0f]?",jn=On+Wn+("(?:\\u200d(?:"+["[^"+yn+"]",wn,_n].join("|")+")"+On+Wn+")*"),Ln="(?:"+[xn,wn,_n].join("|")+")"+jn,Nn=RegExp([En+"?"+Hn+"+"+An+"(?="+[$n,En,"$"].join("|")+")",Cn+"+"+kn+"(?="+[$n,En+zn,"$"].join("|")+")",En+"?"+zn+"+"+An,En+"+"+kn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bn,Ln].join("|"),"g");var In=sn,Tn=mn,Rn=se,Vn=function(t){return t.match(Nn)||[]};var Pn=ln,Gn=hn,Un=function(t,e,n){return t=Rn(t),void 0===(e=n?void 0:e)?Tn(t)?Vn(t):In(t):t.match(e)||[]},Zn=RegExp("['’]","g");var Mn=function(t){return function(e){return Pn(Un(Gn(e).replace(Zn,"")),t,"")}}((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));const Xn=({steps:t,currentIndex:i,displayExtractor:c,fadeColor:d,fadePosition:u="both"})=>{const[f,h]=o(!!u),[s,p]=o("left"===u||"both"===u),[m,y]=o("right"===u||"both"===u),S=a(null),v=a(null);l((()=>{B(),window.addEventListener("resize",B);const t=v.current;return t&&t.addEventListener("scroll",B),()=>{window.removeEventListener("resize",B),t&&t.removeEventListener("scroll",B)}}),[]),l((()=>(F(),window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)})),[i]);const F=()=>{if(window.innerWidth>g.mobileL)return;const t=v.current;if(t){const e=10.5*i-4;t.scrollLeft=16*e}},B=()=>{if(f){h(window.innerWidth<g.mobileL);const t=v.current,e=S.current;t&&e&&t.scrollWidth>e.offsetWidth?(h(!0),p(t.scrollLeft>=1),y(t.scrollWidth-t.scrollLeft>e.offsetWidth)):h(!1)}},$=(t,e)=>t<e?"Completed step":t===e?"Current step":"Uncompleted step",b=(t,e)=>Mn(`${$(t,e)} ${t}`);if(!t.length)return null;return n(tn,{ref:S,children:[e(en,{ref:v,children:t.map(((t,r)=>{const o=r<=i,a=r===i?"bold":"regular";return n(an,{"aria-label":$(r,i),id:b(r,i),children:[e(rn,{highlighted:o}),e(on,{highlighted:o,weight:a,children:(l=t,c?c(l):l.toString())})]},r);var l}))}),f&&n(r,{children:[s&&e(nn,{backgroundColor:d,position:"left"}),m&&e(nn,{backgroundColor:d,position:"right"})]})]})};export{Xn as ProgressIndicator};
//# sourceMappingURL=index.js.map
