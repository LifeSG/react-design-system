import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import n,{css as i,keyframes as a}from"styled-components";import o from"react";const l="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",c="Submit",d="Rate your experience",h={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:h.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:h.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:h.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:h.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:h.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:h.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,f="object"==typeof g&&g&&g.Object===Object&&g,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),y=m.Symbol,S=y,b=Object.prototype,F=b.hasOwnProperty,$=b.toString,v=S?S.toStringTag:void 0;var B=function(e){var t=F.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var i=$.call(e);return n&&(t?e[v]=r:delete e[v]),i},H=Object.prototype.toString;var C=B,D=function(e){return H.call(e)},w=y?y.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?C(e):D(e)};var _=x,z=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==_(e)},L=u,E=k,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var A=function(e,t){if(L(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!E(e))||(W.test(e)||!N.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=x,T=j;var P,R=function(e){if(!T(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=m["__core-js_shared__"],I=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var M=function(e){return!!I&&I in e},X=Function.prototype.toString;var G=R,Z=M,U=j,Y=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,ee=K.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!U(e)||Z(e))&&(G(e)?te:q).test(Y(e))},ne=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ae=ie(Object,"create"),oe=ae;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ae,he=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},ge=ae,ue=Object.prototype.hasOwnProperty;var fe=ae;var pe=le,me=ce,ye=se,Se=function(e){var t=this.__data__;return ge?void 0!==t[e]:ue.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=pe,Fe.prototype.delete=me,Fe.prototype.get=ye,Fe.prototype.has=Se,Fe.prototype.set=be;var $e=Fe;var ve=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1},Ce=He,De=Array.prototype.splice;var we=He;var xe=He;var _e=He;var ze=ve,ke=function(e){var t=this.__data__,r=Ce(t,e);return!(r<0)&&(r==t.length-1?t.pop():De.call(t,r,1),--this.size,!0)},Le=function(e){var t=this.__data__,r=we(t,e);return r<0?void 0:t[r][1]},Ee=function(e){return xe(this.__data__,e)>-1},Ne=function(e,t){var r=this.__data__,n=_e(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function We(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}We.prototype.clear=ze,We.prototype.delete=ke,We.prototype.get=Le,We.prototype.has=Ee,We.prototype.set=Ne;var Ae=We,je=ie(m,"Map"),Oe=$e,Te=Ae,Pe=je;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ie=Ve;var Me=Ve;var Xe=Ve;var Ge=Ve;var Ze=function(){this.size=0,this.__data__={hash:new Oe,map:new(Pe||Te),string:new Oe}},Ue=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Ye=function(e){return Me(this,e).get(e)},qe=function(e){return Xe(this,e).has(e)},Je=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ke.prototype.clear=Ze,Ke.prototype.delete=Ue,Ke.prototype.get=Ye,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(et.Cache||Qe),r}et.Cache=Qe;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,it=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,i){t.push(n?i.replace(nt,"$1"):r||e)})),t}));var at=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ot=u,lt=k,ct=y?y.prototype:void 0,dt=ct?ct.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ot(t))return at(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},st=ht;var gt=u,ut=A,ft=it,pt=function(e){return null==e?"":st(e)};var mt=k;var yt=function(e,t){return gt(e)?e:ut(e,t)?[e]:ft(pt(e))},St=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[St(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n};const $t=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Bt||(Bt={}));const Ht={collections:{base:s},defaultValue:"base"},Ct=e=>t=>{const r=t.theme,n=vt(Ht,r[Bt.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},Dt={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return h.Bold;case 600:case"semibold":return h.Semibold;case 300:case"light":return h.Light;case 400:case"regular":return h.Regular;default:return""}},xt=(e,t)=>r=>{const n=Dt[e].fontFamily(r),a=Dt[e].fontWeight(r);return Object.values(h).includes(n)?i`
                font-family: ${wt(t)||wt(a)||n};
                font-weight: normal !important;
            `:i`
            font-family: ${n};
            font-weight: ${(_t(t)||a)??"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=(e,t,r=!1)=>n=>{const a=Dt[e],o=a.fontSize(n);return i`
            ${xt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${i`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1)=>t?i`
            display: block;
        `:e?i`
            display: inline;
        `:i`
            display: block;
        `;var Lt,Et={};Object.defineProperty(Et,"__esModule",{value:!0});var Nt=e;const Wt=e=>Nt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Nt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});Wt.displayName="ExternalIcon",Lt=Et.ExternalIcon=Wt;const At={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},jt=e=>t=>{const r=t.theme,n=vt(At,r[Bt.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},Ot={Brand:{1:jt("Brand.1"),2:jt("Brand.2"),3:jt("Brand.3"),4:jt("Brand.4"),5:jt("Brand.5"),6:jt("Brand.6")},Primary:jt("Primary"),PrimaryDark:jt("PrimaryDark"),Secondary:jt("Secondary"),Accent:{Light:{1:jt("Accent.Light.1"),2:jt("Accent.Light.2"),3:jt("Accent.Light.3"),4:jt("Accent.Light.4"),5:jt("Accent.Light.5"),6:jt("Accent.Light.6")},Dark:{1:jt("Accent.Dark.1"),2:jt("Accent.Dark.2"),3:jt("Accent.Dark.3")}},Neutral:{1:jt("Neutral.1"),2:jt("Neutral.2"),3:jt("Neutral.3"),4:jt("Neutral.4"),5:jt("Neutral.5"),6:jt("Neutral.6"),7:jt("Neutral.7"),8:jt("Neutral.8")},Validation:{Green:{Text:jt("Validation.Green.Text"),Icon:jt("Validation.Green.Icon"),Border:jt("Validation.Green.Border"),Background:jt("Validation.Green.Background")},Orange:{Text:jt("Validation.Orange.Text"),Icon:jt("Validation.Orange.Icon"),Border:jt("Validation.Orange.Border"),Background:jt("Validation.Orange.Background"),Badge:jt("Validation.Orange.Badge")},Red:{Text:jt("Validation.Red.Text"),Icon:jt("Validation.Red.Icon"),Border:jt("Validation.Red.Border"),Background:jt("Validation.Red.Background")}},Shadow:{Accent:jt("Shadow.Accent"),Red:jt("Shadow.Red")}};var Tt;!function(e){e.D1=n.h1`
        ${e=>i`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>i`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>i`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>i`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>i`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>i`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>i`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>i`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>i`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>i`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>i`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>i`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>i`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>i`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Vt({...e,textStyle:"Body"}),Small:e=>Vt({...e,textStyle:"BodySmall"})}}(Tt||(Tt={}));const Pt=n.a`
    ${e=>i`
            ${zt(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,Rt=n(Lt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=({external:e=!1,children:n,...i})=>t(Pt,{...i,children:[n,e&&r(Rt,{})]});var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Mt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Xt=e=>Object.keys(Mt).reduce(((t,r)=>{const n=Mt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Gt=Xt("max-width"),Zt=(Xt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ut=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Yt=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ot.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ut} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qt=n(Yt)`
    animation-delay: -0.45s;
`,Jt=n(Yt)`
    animation-delay: -0.3s;
`,Kt=n(Yt)`
    animation-delay: -0.15s;
`,Qt=n.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i`
                    background-color: ${Ot.Neutral[8](e)};
                    border: 1px solid ${Ot.Primary(e)};

                    span {
                        color: ${Ot.Primary(e)};
                    }
                `;case"light":return i`
                    background-color: ${Ot.Neutral[8](e)};
                    border: 1px solid ${Ot.Neutral[5](e)};

                    span {
                        color: ${Ot.Primary(e)};
                    }
                `;case"disabled":return i`
                    background-color: ${Ot.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ot.Neutral[3](e)};
                    }
                `;case"link":return i`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ot.Secondary};
                        }
                    }
                `;default:return i`
                    background-color: ${Ot.Primary(e)};
                    border: 1px solid transparent;

                    ${Gt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ot.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i`
                    height: 2.5rem;
                    span {
                        ${zt("H5","semibold")}
                    }

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    span {
                        ${zt("H4","semibold")}
                    }

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `}
`,er=n((({color:e,className:n,size:i=18})=>t(Zt,{className:n,$size:i,$color:e,children:[r(Yt,{id:"inner1",$size:i-2,$borderWidth:2}),r(qt,{id:"inner2",$size:i-2,$borderWidth:2}),r(Jt,{id:"inner3",$size:i-2,$borderWidth:2}),r(Kt,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ot.Primary(e);break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return i`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,tr={Default:o.forwardRef(((e,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return t(Qt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(er,{...d}),r("span",{children:i})]})})),Small:o.forwardRef(((e,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=e,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return t(Qt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(er,{...d,size:16}),r("span",{children:i})]})}))},rr=n.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,nr=n.div`
    border-top: 1px solid ${Ot.Neutral[5]};
    border-bottom: 1px solid ${Ot.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,ir=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,ar=n(tr.Default)`
    margin-top: 1rem;
    width: 100%;
`,or=5;var lr,cr={};Object.defineProperty(cr,"__esModule",{value:!0});var dr=e;const hr=e=>dr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:dr.jsx("path",{d:"M7.33295 14.896L9.99995 13.312L12.688 14.896L11.979 11.896L14.292 9.917L11.229 9.646L9.99995 6.792L8.77095 9.646L5.70795 9.917L8.04195 11.896L7.33295 14.896ZM9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});hr.displayName="StarIcon",lr=cr.StarIcon=hr;var sr,gr={};Object.defineProperty(gr,"__esModule",{value:!0});var ur=e;const fr=e=>ur.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ur.jsx("path",{d:"M9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});fr.displayName="StarFillIcon",sr=gr.StarFillIcon=fr;const pr=n.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,mr=i`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Ot.Primary};
    ${pr}:focus-visible + & {
        outline: 0.125rem solid ${Ot.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,yr=n(lr)`
    ${mr}
`,Sr=n(sr)`
    ${mr}
`,br=n.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Fr=n.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,$r=e=>{const{description:n,rating:i,onRatingChange:a}=e,o=e=>{const t=`${e} star${1===e?"":"s"}`;return r(e<=i?Sr:yr,{"aria-label":t})};return r(Fr,{role:"radiogroup","aria-label":n,children:[...Array(or)].map(((e,n)=>{const l=n+1;return t(br,{children:[r(pr,{type:"radio",name:"star",checked:l===i,onChange:()=>(e=>{a(e)})(l)}),o(l)]},l)}))})},vr=e=>{const{imgSrc:n,buttonLabel:i,description:a,rating:o,className:h,onRatingChange:s,onSubmit:g}=e,u=n??l,f=a??d;return t(nr,{className:h,children:[u&&r(rr,{src:u,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(ir,{children:[r(Tt.H3,{weight:"semibold",children:f}),r($r,{description:f,rating:o,onRatingChange:s}),r(ar,{disabled:!o,onClick:g,children:i??c})]})]})};export{vr as FeedbackRating};
//# sourceMappingURL=index.js.map
