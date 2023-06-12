import t,{jsxs as e,jsx as n,Fragment as r}from"react/jsx-runtime";import i,{css as a}from"styled-components";import o from"react";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,h="object"==typeof s&&s&&s.Object===Object&&s,u="object"==typeof self&&self&&self.Object===Object&&self,g=h||u||Function("return this")(),f=g.Symbol,p=f,m=Object.prototype,y=m.hasOwnProperty,$=m.toString,F=p?p.toStringTag:void 0;var S=function(t){var e=y.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var i=$.call(t);return r&&(e?t[F]=n:delete t[F]),i},v=Object.prototype.toString;var D=S,b=function(t){return v.call(t)},B=f?f.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?D(t):b(t)};var w=H,_=function(t){return null!=t&&"object"==typeof t};var x=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==w(t)},C=d,k=x,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var O=function(t,e){if(C(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!k(t))||(A.test(t)||!E.test(t)||null!=e&&t in Object(e))};var z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},M=H,W=z;var j,L=function(t){if(!W(t))return!1;var e=M(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},T=g["__core-js_shared__"],V=(j=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var I=function(t){return!!V&&V in t},R=Function.prototype.toString;var N=L,P=I,Y=z,G=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,X=Function.prototype,Z=Object.prototype,J=X.toString,q=Z.hasOwnProperty,Q=RegExp("^"+J.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!Y(t)||P(t))&&(N(t)?Q:U).test(G(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return K(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var at=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},st=nt,dt=Object.prototype.hasOwnProperty;var ht=nt;var ut=it,gt=at,ft=ct,pt=function(t){var e=this.__data__;return st?void 0!==e[t]:dt.call(e,t)},mt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=ut,yt.prototype.delete=gt,yt.prototype.get=ft,yt.prototype.has=pt,yt.prototype.set=mt;var $t=yt;var Ft=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},Dt=vt,bt=Array.prototype.splice;var Bt=vt;var Ht=vt;var wt=vt;var _t=Ft,xt=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():bt.call(e,n,1),--this.size,!0)},Ct=function(t){var e=this.__data__,n=Bt(e,t);return n<0?void 0:e[n][1]},kt=function(t){return Ht(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,r=wt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=_t,At.prototype.delete=xt,At.prototype.get=Ct,At.prototype.has=kt,At.prototype.set=Et;var Ot=At,zt=et(g,"Map"),Mt=$t,Wt=Ot,jt=zt;var Lt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Tt=function(t,e){var n=t.__data__;return Lt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Tt;var It=Tt;var Rt=Tt;var Nt=Tt;var Pt=function(){this.size=0,this.__data__={hash:new Mt,map:new(jt||Wt),string:new Mt}},Yt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return It(this,t).get(t)},Ut=function(t){return Rt(this,t).has(t)},Xt=function(t,e){var n=Nt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Zt.prototype.clear=Pt,Zt.prototype.delete=Yt,Zt.prototype.get=Gt,Zt.prototype.has=Ut,Zt.prototype.set=Xt;var Jt=Zt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(qt.Cache||Jt),n}qt.Cache=Jt;var Qt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=d,ie=x,ae=f?f.prototype:void 0,oe=ae?ae.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return oe?oe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var se=d,de=O,he=ee,ue=function(t){return null==t?"":ce(t)};var ge=x;var fe=function(t,e){return se(t)?t:de(t,e)?[t]:he(ue(t))},pe=function(t){if("string"==typeof t||ge(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var me=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[pe(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:me(t,e);return void 0===r?n:r};const $e=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Se||(Se={}));const ve={collections:{base:c},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=Fe(ve,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?$e(r,t,n.options.textStyle):$e(r,t)},be={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},Be=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},He=(t,e)=>n=>{const r=be[t].fontFamily(n),i=be[t].fontWeight(n);return Object.values(l).includes(r)?a`
                font-family: ${Be(e)||Be(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(we(e)||i)??"normal"};
        `},we=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_e=(t,e,n=!1)=>r=>{const i=be[t],o=i.fontSize(r);return a`
            ${He(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},xe=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var Ce,ke={};Object.defineProperty(ke,"__esModule",{value:!0});var Ee=t;const Ae=t=>Ee.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ee.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});Ae.displayName="ExternalIcon",Ce=ke.ExternalIcon=Ae;const Oe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ze=t=>e=>{const n=e.theme,r=Fe(Oe,n[Se.colorScheme]);return n.options&&n.options.color?$e(r,t,n.options.color):$e(r,t)},Me=(ze("Brand.1"),ze("Brand.2"),ze("Brand.3"),ze("Brand.4"),ze("Brand.5"),ze("Brand.6"),ze("Primary")),We=(ze("PrimaryDark"),ze("Secondary")),je=(ze("Accent.Light.1"),ze("Accent.Light.2"),ze("Accent.Light.3"),ze("Accent.Light.4"),ze("Accent.Light.5"),ze("Accent.Light.6"),ze("Accent.Dark.1"),ze("Accent.Dark.2"),ze("Accent.Dark.3"),{1:ze("Neutral.1"),2:ze("Neutral.2"),3:ze("Neutral.3"),4:ze("Neutral.4"),5:ze("Neutral.5"),6:ze("Neutral.6"),7:ze("Neutral.7"),8:ze("Neutral.8")});ze("Validation.Green.Text"),ze("Validation.Green.Icon"),ze("Validation.Green.Border"),ze("Validation.Green.Background"),ze("Validation.Orange.Text"),ze("Validation.Orange.Icon"),ze("Validation.Orange.Border"),ze("Validation.Orange.Background"),ze("Validation.Orange.Badge"),ze("Validation.Red.Text"),ze("Validation.Red.Icon"),ze("Validation.Red.Border"),ze("Validation.Red.Background"),ze("Validation.Blue.Text"),ze("Validation.Blue.Icon"),ze("Validation.Blue.Border"),ze("Validation.Blue.Background"),ze("Shadow.Accent"),ze("Shadow.Red"),ze("Shadow.Elevation");var Le;!function(t){t.D1=i.h1`
        ${t=>a`
                ${_e("D1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D2=i.h1`
        ${t=>a`
                ${_e("D2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D3=i.h1`
        ${t=>a`
                ${_e("D3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D4=i.h1`
        ${t=>a`
                ${_e("D4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.DBody=i.h1`
        ${t=>a`
                ${_e("DBody",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H1=i.h1`
        ${t=>a`
                ${_e("H1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H2=i.h2`
        ${t=>a`
                ${_e("H2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H3=i.h3`
        ${t=>a`
                ${_e("H3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H4=i.h4`
        ${t=>a`
                ${_e("H4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H5=i.h5`
        ${t=>a`
                ${_e("H5",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H6=i.h6`
        ${t=>a`
                ${_e("H6",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.Body=i.p`
        ${t=>a`
                ${_e("Body",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=i.p`
        ${t=>a`
                ${_e("BodySmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=i.span`
        ${t=>a`
                ${_e("XSmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ie({...t,textStyle:"Body"}),Small:t=>Ie({...t,textStyle:"BodySmall"})}}(Le||(Le={}));const Te=i.a`
    ${t=>a`
            ${_e(t.textStyle,t.weight)}
            color: ${Me};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${We};

                svg {
                    color: ${We};
                }
            }
        `}
`,Ve=i(Ce)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ie=({external:t=!1,children:r,...i})=>e(Te,{...i,children:[r,t&&n(Ve,{})]});var Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Re||(Re={}));const Ne={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pe=t=>Object.keys(Ne).reduce(((e,n)=>{const r=Ne[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ye=Pe("max-width"),Ge=(Pe("min-width"),i.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ye.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ue=i(Le.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Xe=i.div`
    display: flex;
    align-items: flex-start;
`,Ze=i.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ye.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Je=()=>e(Ge,{"data-testid":"download-app-section",children:[n(Ue,{weight:"semibold",children:"Download the app"}),e(Xe,{children:[n(Ze,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:n("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),n(Ze,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:n("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var qe={exports:{}};qe.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",c="week",s="month",d="quarter",h="year",u="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:h,w:c,d:l,D:u,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},F="en",S={};S[F]=m;var v=function(t){return t instanceof H},D=function t(e,n,r){var i;if(!e)return F;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&(F=i),i||!r&&F},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new H(n)},B=$;B.l=D,B.i=v,B.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var H=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,d=B.p(t),g=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},f=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case h:return r?g(1,0):g(31,11);case s:return r?g(1,m):g(0,m+1);case c:var F=this.$locale().weekStart||0,S=(p<F?p+7:p)-F;return g(r?y-S:y+(6-S),m);case l:case u:return f($+"Hours",0);case o:return f($+"Minutes",1);case a:return f($+"Seconds",2);case i:return f($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=B.p(t),d="set"+(this.$u?"UTC":""),g=(n={},n[l]=d+"Date",n[u]=d+"Date",n[s]=d+"Month",n[h]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],f=c===l?this.$D+(e-this.$W):e;if(c===s||c===h){var p=this.clone().set(u,1);p.$d[g](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,d){var u,g=this;r=Number(r);var f=B.p(d),p=function(t){var e=b(g);return B.w(e.date(e.date()+Math.round(t*r)),g)};if(f===s)return this.set(s,this.$M+r);if(f===h)return this.set(h,this.$y+r);if(f===l)return p(1);if(f===c)return p(7);var m=(u={},u[a]=e,u[o]=n,u[i]=t,u)[f]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,l=this.$M,c=n.weekdays,s=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return B.s(a%12||12,t,"0")},u=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:d(n.monthsShort,l,s,3),MMMM:d(s,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:B.s(a,2,"0"),h:h(1),hh:h(2),a:u(a,o,!0),A:u(a,o,!1),m:String(o),mm:B.s(o,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||f[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,u,g){var f,p=B.p(u),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,F=B.m(this,m);return F=(f={},f[h]=F/12,f[s]=F,f[d]=F/3,f[c]=($-y)/6048e5,f[l]=($-y)/864e5,f[o]=$/n,f[a]=$/e,f[i]=$/t,f)[p]||$,g?F:B.a(F)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=H.prototype;return b.prototype=w,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",s],["$y",h],["$D",u]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,H,b),t.$i=!0),b},b.locale=D,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=S[F],b.Ls=S,b.p={},b}();var Qe,Ke=qe.exports;!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${Ke(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener",...t&&t.privacy?t.privacy:{},children:"Privacy Statement"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener",...t&&t.termsOfUse?t.termsOfUse:{},children:"Terms of Use"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0,...t&&t.reportVulnerability?t.reportVulnerability:{},children:"Report Vulnerability"}})}(Qe||(Qe={}));const tn=o.forwardRef(((t,e)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1,...l}=t;return n(en,{ref:e,"data-testid":i,$type:a,$stretch:o,...l,children:r})})),en=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?a`
                padding: 0 3rem;
            `:a`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Ye.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ye.tablet} {
        max-width: 720px;
    }
    ${Ye.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ye.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ye.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return a`
                    display: flex;
                    flex-direction: column;
                `;default:return a`
                    display: flex;
                `}}}
`,nn=o.forwardRef(((t,e)=>{const{children:r,"data-testid":i="section",stretch:a=!1,...o}=t;return n(rn,{ref:e,"data-testid":i,$stretch:a,...o,children:r})})),rn=i.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?a`
                ${Ye.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:a`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,an=o.forwardRef(((t,e)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:l=!1,...c}=t;return n(nn,{ref:e,"data-testid":i,className:a,stretch:l,...c,children:n(tn,{"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:l,children:r})})})),on={Section:nn,Container:tn,Content:an},ln=i.footer`
    background: ${je[7]};
`,cn=i(Le.Hyperlink.Small)`
    color: ${je[1]};
`,sn=i(on.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${je[5]};

    ${Ye.tablet} {
        padding: 2rem 0;
    }
`,dn=i.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,hn=i.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${Ye.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ye.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,un=i.div`
    grid-column: 9 / span 4;

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,gn=i.div`
    display: none;

    ${Ye.tablet} {
        display: block;
        height: 1px;
        background: ${je[6]};
    }
`,fn=i(on.Content)`
    padding: 1.375rem 0;

    ${Ye.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,pn=i.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,mn=i(pn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ye.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,yn=i(Le.Hyperlink.Small)`
    ${_e("XSmall","regular")}
    color: ${je[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${je[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${je[3]};
        svg {
            color: ${je[3]};
        }
    }

    ${Ye.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.tablet} {
        margin-bottom: 0.625rem;
    }
`,$n=({children:t,links:i,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:l,logoSrc:c,copyrightInfo:s,onFooterLinkClick:d,layout:h="default"})=>{const u="stretch"===h,g=t=>t.map(((t,e)=>{const{"data-options":r,...i}=t;return n("li",{children:n(cn,{...i,onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):d&&(t.preventDefault(),d(e))})(e,t)})},e)}));return e(ln,{children:[(()=>{let a=null;return t||((i||l)&&(a=e(r,{children:[n(dn,{"data-testid":"logo-section",children:n("img",{src:c||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})}),i?.[0]&&n(hn,{"data-testid":"link-col-1",children:g(i[0])},"link-col-1"),i?.[1]&&n(hn,{"data-testid":"link-col-2",children:g(i[1])},"link-col-2"),l&&n(un,{children:n(Je,{})})]})),a?n(sn,{type:"grid",stretch:u,children:a}):null)})(),n(gn,{}),e(fn,{type:"grid",stretch:u,children:[n(pn,{children:(()=>{const t=Qe.getDisclaimerLinks(o);return Object.keys(t).map((e=>n(yn,{...t[e]},e)))})()},"disclaimer"),n(mn,{children:n(Le.XSmall,{"data-testid":"copyright-text",children:s||e(r,{children:["©"," ",Qe.getCopyrightInfo(a)]})})},"copyright")]})]})};export{$n as Footer};
//# sourceMappingURL=index.js.map
