import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";var a,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l={};Object.defineProperty(l,"__esModule",{value:!0});var c=t;const g=t=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:c.jsx("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});g.displayName="ArrowRightIcon",a=l.ArrowRightIcon=g;var h=Array.isArray,f="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,u=f||d||Function("return this")(),p=u.Symbol,s=p,y=Object.prototype,m=y.hasOwnProperty,F=y.toString,S=s?s.toStringTag:void 0;var v=function(t){var e=m.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var i=F.call(t);return r&&(e?t[S]=n:delete t[S]),i},B=Object.prototype.toString;var H=v,$=function(t){return B.call(t)},D=p?p.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?H(t):$(t)};var b=_,C=function(t){return null!=t&&"object"==typeof t};var z=function(t){return"symbol"==typeof t||C(t)&&"[object Symbol]"==b(t)},w=h,x=z,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var W=function(t,e){if(w(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!x(t))||(k.test(t)||!E.test(t)||null!=e&&t in Object(e))};var A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=_,j=A;var V,N=function(t){if(!j(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=u["__core-js_shared__"],L=(V=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var P=function(t){return!!L&&L in t},R=Function.prototype.toString;var T=N,G=P,X=A,M=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!X(t)||G(t))&&(T(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var at=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var ft=nt;var dt=it,ut=at,pt=ct,st=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=dt,mt.prototype.delete=ut,mt.prototype.get=pt,mt.prototype.has=st,mt.prototype.set=yt;var Ft=mt;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Ht=Bt,$t=Array.prototype.splice;var Dt=Bt;var _t=Bt;var bt=Bt;var Ct=St,zt=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():$t.call(e,n,1),--this.size,!0)},wt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},xt=function(t){return _t(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,r=bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=Ct,kt.prototype.delete=zt,kt.prototype.get=wt,kt.prototype.has=xt,kt.prototype.set=Et;var Wt=kt,At=et(u,"Map"),Ot=Ft,jt=Wt,Vt=At;var Nt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Nt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=It;var Pt=It;var Rt=It;var Tt=It;var Gt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Vt||jt),string:new Ot}},Xt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Pt(this,t).get(t)},Zt=function(t){return Rt(this,t).has(t)},Ut=function(t,e){var n=Tt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Gt,qt.prototype.delete=Xt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=h,ie=z,ae=p?p.prototype:void 0,oe=ae?ae.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return oe?oe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=W,fe=ee,de=function(t){return null==t?"":ce(t)};var ue=z;var pe=function(t,e){return ge(t)?t:he(t,e)?[t]:fe(de(t))},se=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[se(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:ye(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ve||(ve={}));const Be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=Se(Be,n[ve.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},$e={Brand:{1:He("Brand.1"),2:He("Brand.2"),3:He("Brand.3"),4:He("Brand.4"),5:He("Brand.5"),6:He("Brand.6")},Primary:He("Primary"),PrimaryDark:He("PrimaryDark"),Secondary:He("Secondary"),Accent:{Light:{1:He("Accent.Light.1"),2:He("Accent.Light.2"),3:He("Accent.Light.3"),4:He("Accent.Light.4"),5:He("Accent.Light.5"),6:He("Accent.Light.6")},Dark:{1:He("Accent.Dark.1"),2:He("Accent.Dark.2"),3:He("Accent.Dark.3")}},Neutral:{1:He("Neutral.1"),2:He("Neutral.2"),3:He("Neutral.3"),4:He("Neutral.4"),5:He("Neutral.5"),6:He("Neutral.6"),7:He("Neutral.7"),8:He("Neutral.8")},Validation:{Green:{Text:He("Validation.Green.Text"),Icon:He("Validation.Green.Icon"),Border:He("Validation.Green.Border"),Background:He("Validation.Green.Background")},Orange:{Text:He("Validation.Orange.Text"),Icon:He("Validation.Orange.Icon"),Border:He("Validation.Orange.Border"),Background:He("Validation.Orange.Background"),Badge:He("Validation.Orange.Badge")},Red:{Text:He("Validation.Red.Text"),Icon:He("Validation.Red.Icon"),Border:He("Validation.Red.Border"),Background:He("Validation.Red.Background")}}},De={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_e={collections:{base:{D1:{fontFamily:De.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:De.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:De.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:De.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:De.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:De.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:De.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:De.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:De.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:De.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},be=t=>e=>{const n=e.theme,r=Se(_e,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},Ce={D1:{fontFamily:be("D1.fontFamily"),fontSize:be("D1.fontSize"),fontWeight:be("D1.fontWeight"),lineHeight:be("D1.lineHeight"),letterSpacing:be("D1.letterSpacing")},D2:{fontFamily:be("D2.fontFamily"),fontSize:be("D2.fontSize"),fontWeight:be("D2.fontWeight"),lineHeight:be("D2.lineHeight"),letterSpacing:be("D2.letterSpacing")},D3:{fontFamily:be("D3.fontFamily"),fontSize:be("D3.fontSize"),fontWeight:be("D3.fontWeight"),lineHeight:be("D3.lineHeight"),letterSpacing:be("D3.letterSpacing")},D4:{fontFamily:be("D4.fontFamily"),fontSize:be("D4.fontSize"),fontWeight:be("D4.fontWeight"),lineHeight:be("D4.lineHeight"),letterSpacing:be("D4.letterSpacing")},DBody:{fontFamily:be("DBody.fontFamily"),fontSize:be("DBody.fontSize"),fontWeight:be("DBody.fontWeight"),lineHeight:be("DBody.lineHeight"),letterSpacing:be("DBody.letterSpacing")},H1:{fontFamily:be("H1.fontFamily"),fontSize:be("H1.fontSize"),fontWeight:be("H1.fontWeight"),lineHeight:be("H1.lineHeight"),letterSpacing:be("H1.letterSpacing")},H2:{fontFamily:be("H2.fontFamily"),fontSize:be("H2.fontSize"),fontWeight:be("H2.fontWeight"),lineHeight:be("H2.lineHeight"),letterSpacing:be("H2.letterSpacing")},H3:{fontFamily:be("H3.fontFamily"),fontSize:be("H3.fontSize"),fontWeight:be("H3.fontWeight"),lineHeight:be("H3.lineHeight"),letterSpacing:be("H3.letterSpacing")},H4:{fontFamily:be("H4.fontFamily"),fontSize:be("H4.fontSize"),fontWeight:be("H4.fontWeight"),lineHeight:be("H4.lineHeight"),letterSpacing:be("H4.letterSpacing")},H5:{fontFamily:be("H5.fontFamily"),fontSize:be("H5.fontSize"),fontWeight:be("H5.fontWeight"),lineHeight:be("H5.lineHeight"),letterSpacing:be("H5.letterSpacing")},H6:{fontFamily:be("H6.fontFamily"),fontSize:be("H6.fontSize"),fontWeight:be("H6.fontWeight"),lineHeight:be("H6.lineHeight"),letterSpacing:be("H6.letterSpacing")},Body:{fontFamily:be("Body.fontFamily"),fontSize:be("Body.fontSize"),fontWeight:be("Body.fontWeight"),lineHeight:be("Body.lineHeight"),letterSpacing:be("Body.letterSpacing")},BodySmall:{fontFamily:be("BodySmall.fontFamily"),fontSize:be("BodySmall.fontSize"),fontWeight:be("BodySmall.fontWeight"),lineHeight:be("BodySmall.lineHeight"),letterSpacing:be("BodySmall.letterSpacing")},XSmall:{fontFamily:be("XSmall.fontFamily"),fontSize:be("XSmall.fontSize"),fontWeight:be("XSmall.fontWeight"),lineHeight:be("XSmall.lineHeight"),letterSpacing:be("XSmall.letterSpacing")}},ze=t=>{switch(t){case 700:case"bold":return De.Bold;case 600:case"semibold":return De.Semibold;case 300:case"light":return De.Light;case 400:case"regular":return De.Regular;default:return""}},we=(t,e)=>n=>{const r=Ce[t].fontFamily(n),a=Ce[t].fontWeight(n);return Object.values(De).includes(r)?i`
                font-family: ${ze(e)||ze(a)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${(xe(e)||a)??"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=we,ke=(t,e,n=!1)=>r=>{const a=Ce[t],o=a.fontSize(r);return i`
            ${we(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},We=(t=!1,e=!1)=>e?i`
            display: block;
        `:t?i`
            display: inline;
        `:i`
            display: block;
        `;var Ae,Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});var je=t;const Ve=t=>je.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:je.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ne;Ve.displayName="ExternalIcon",Ae=Oe.ExternalIcon=Ve,function(t){t.D1=r.h1`
        ${t=>i`
                ${ke("D1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${ke("D2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${ke("D3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${ke("D4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${ke("DBody",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${ke("H1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${ke("H2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${ke("H3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${ke("H4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${ke("H5",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${ke("H6",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${ke("Body",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${ke("BodySmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${ke("XSmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Pe({...t,textStyle:"Body"}),Small:t=>Pe({...t,textStyle:"BodySmall"})}}(Ne||(Ne={}));const Ie=r.a`
    ${t=>i`
            ${ke(t.textStyle,t.weight)}
            color: ${$e.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$e.Secondary};

                svg {
                    color: ${$e.Secondary};
                }
            }
        `}
`,Le=r(Ae)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Pe=({external:t=!1,children:r,...i})=>e(Ie,{...i,children:[r,t&&n(Le,{})]});var Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Re||(Re={}));const Te=r.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${ke("BodySmall","regular")}

    ${t=>{let e,n;switch(t.$type){case"error":e=$e.Validation.Red.Background(t),n=$e.Validation.Red.Border(t);break;case"success":default:e=$e.Validation.Green.Background(t),n=$e.Validation.Green.Border(t);break;case"warning":e=$e.Validation.Orange.Background(t),n=$e.Validation.Orange.Border(t)}return`\n\t\t\tbackground: ${e};\n\t\t\tborder-left: 2pt solid ${n};\n\t\t`}}

	p {
        ${ke("BodySmall","regular")}
        /* display: inline-block; */

		strong {
            ${Ee("BodySmall","semibold")}
        }

        a {
            color: ${$e.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$e.Secondary};
            }
        }
    }
`,Ge=r(Ne.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`,Xe=r(a)`
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
`,Me=({type:t,className:r,children:i,actionLink:a,...o})=>e(Te,{className:r,$type:t,"data-testid":o["data-testid"],children:[i,a&&e(Ge,{weight:"semibold",...a,"data-testid":"action-link",children:[a.children,n(Xe,{})]})]});export{Me as Alert};
//# sourceMappingURL=index.js.map
