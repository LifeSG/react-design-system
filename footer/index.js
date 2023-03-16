import t,{jsxs as e,jsx as n,Fragment as i}from"react/jsx-runtime";import r,{css as o}from"styled-components";import a from"react";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof s&&s&&s.Object===Object&&s,u="object"==typeof self&&self&&self.Object===Object&&self,f=d||u||Function("return this")(),g=f.Symbol,p=g,m=Object.prototype,y=m.hasOwnProperty,$=m.toString,S=p?p.toStringTag:void 0;var v=function(t){var e=y.call(t,S),n=t[S];try{t[S]=void 0;var i=!0}catch(t){}var r=$.call(t);return i&&(e?t[S]=n:delete t[S]),r},F=Object.prototype.toString;var D=v,b=function(t){return F.call(t)},H=g?g.toStringTag:void 0;var w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?D(t):b(t)};var _=w,B=function(t){return null!=t&&"object"==typeof t};var x=function(t){return"symbol"==typeof t||B(t)&&"[object Symbol]"==_(t)},C=h,k=x,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var M=function(t,e){if(C(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!k(t))||(O.test(t)||!z.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},A=w,E=W;var j,L=function(t){if(!E(t))return!1;var e=A(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=f["__core-js_shared__"],T=(j=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var I=function(t){return!!T&&T in t},R=Function.prototype.toString;var N=L,Y=I,P=W,U=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,Z=Object.prototype,J=X.toString,q=Z.hasOwnProperty,Q=RegExp("^"+J.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!P(t)||Y(t))&&(N(t)?Q:G).test(U(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return K(n)?n:void 0},nt=et(Object,"create"),it=nt;var rt=function(){this.__data__=it?it(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},st=nt,ht=Object.prototype.hasOwnProperty;var dt=nt;var ut=rt,ft=ot,gt=ct,pt=function(t){var e=this.__data__;return st?void 0!==e[t]:ht.call(e,t)},mt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}yt.prototype.clear=ut,yt.prototype.delete=ft,yt.prototype.get=gt,yt.prototype.has=pt,yt.prototype.set=mt;var $t=yt;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var Ft=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Dt=Ft,bt=Array.prototype.splice;var Ht=Ft;var wt=Ft;var _t=Ft;var Bt=St,xt=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():bt.call(e,n,1),--this.size,!0)},Ct=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},kt=function(t){return wt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,i=_t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ot.prototype.clear=Bt,Ot.prototype.delete=xt,Ot.prototype.get=Ct,Ot.prototype.has=kt,Ot.prototype.set=zt;var Mt=Ot,Wt=et(f,"Map"),At=$t,Et=Mt,jt=Wt;var Lt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Lt(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=Vt;var It=Vt;var Rt=Vt;var Nt=Vt;var Yt=function(){this.size=0,this.__data__={hash:new At,map:new(jt||Et),string:new At}},Pt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Ut=function(t){return It(this,t).get(t)},Gt=function(t){return Rt(this,t).has(t)},Xt=function(t,e){var n=Nt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Zt.prototype.clear=Yt,Zt.prototype.delete=Pt,Zt.prototype.get=Ut,Zt.prototype.has=Gt,Zt.prototype.set=Xt;var Jt=Zt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(qt.Cache||Jt),n}qt.Cache=Jt;var Qt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,i,r){e.push(i?r.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ie=h,re=x,oe=g?g.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(ie(e))return ne(e,t)+"";if(re(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var se=h,he=M,de=ee,ue=function(t){return null==t?"":ce(t)};var fe=x;var ge=function(t,e){return se(t)?t:he(t,e)?[t]:de(ue(t))},pe=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var me=function(t,e){for(var n=0,i=(e=ge(e,t)).length;null!=t&&n<i;)t=t[pe(e[n++])];return n&&n==i?t:void 0};var ye=function(t,e,n){var i=null==t?void 0:me(t,e);return void 0===i?n:i};const $e=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme"}(ve||(ve={}));const Fe={collections:{base:c},defaultValue:"base"},De=t=>e=>{const n=e.theme,i=Se(Fe,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?$e(i,t,n.options.textStyle):$e(i,t)},be={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},He=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},we=(t,e)=>n=>{const i=be[t].fontFamily(n),r=be[t].fontWeight(n);return Object.values(l).includes(i)?o`
                font-family: ${He(e)||He(r)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${(_e(e)||r)??"normal"};
        `},_e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Be=(t,e,n=!1)=>i=>{const r=be[t],a=r.fontSize(i);return o`
            ${we(t,e)}
            font-size: ${a}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},xe=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `;var Ce,ke={};Object.defineProperty(ke,"__esModule",{value:!0});var ze=t;const Oe=t=>ze.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:ze.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});Oe.displayName="ExternalIcon",Ce=ke.ExternalIcon=Oe;const Me={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,i=Se(Me,n[ve.colorScheme]);return n.options&&n.options.color?$e(i,t,n.options.color):$e(i,t)},Ae=(We("Brand.1"),We("Brand.2"),We("Brand.3"),We("Brand.4"),We("Brand.5"),We("Brand.6"),We("Primary")),Ee=(We("PrimaryDark"),We("Secondary")),je=(We("Accent.Light.1"),We("Accent.Light.2"),We("Accent.Light.3"),We("Accent.Light.4"),We("Accent.Light.5"),We("Accent.Light.6"),We("Accent.Dark.1"),We("Accent.Dark.2"),We("Accent.Dark.3"),{1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")});We("Validation.Green.Text"),We("Validation.Green.Icon"),We("Validation.Green.Border"),We("Validation.Green.Background"),We("Validation.Orange.Text"),We("Validation.Orange.Icon"),We("Validation.Orange.Border"),We("Validation.Orange.Background"),We("Validation.Orange.Badge"),We("Validation.Red.Text"),We("Validation.Red.Icon"),We("Validation.Red.Border"),We("Validation.Red.Background"),We("Shadow.Accent"),We("Shadow.Red");var Le;!function(t){t.D1=r.h1`
        ${t=>o`
                ${Be("D1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>o`
                ${Be("D2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>o`
                ${Be("D3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>o`
                ${Be("D4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>o`
                ${Be("DBody",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>o`
                ${Be("H1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>o`
                ${Be("H2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>o`
                ${Be("H3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>o`
                ${Be("H4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>o`
                ${Be("H5",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>o`
                ${Be("H6",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>o`
                ${Be("Body",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>o`
                ${Be("BodySmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>o`
                ${Be("XSmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${xe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ie({...t,textStyle:"Body"}),Small:t=>Ie({...t,textStyle:"BodySmall"})}}(Le||(Le={}));const Ve=r.a`
    ${t=>o`
            ${Be(t.textStyle,t.weight)}
            color: ${Ae};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ee};

                svg {
                    color: ${Ee};
                }
            }
        `}
`,Te=r(Ce)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ie=({external:t=!1,children:i,...r})=>e(Ve,{...r,children:[i,t&&n(Te,{})]});var Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Re||(Re={}));const Ne={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ye=t=>Object.keys(Ne).reduce(((e,n)=>{const i=Ne[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),Pe=Ye("max-width"),Ue=(Ye("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Pe.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ge=r(Le.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Xe=r.div`
    display: flex;
    align-items: flex-start;
`,Ze=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Pe.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Je=()=>e(Ue,{"data-testid":"download-app-section",children:[n(Ge,{weight:"semibold",children:"Download the app"}),e(Xe,{children:[n(Ze,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:n("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),n(Ze,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:n("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var qe,Qe={exports:{}},Ke=Qe.exports=function(){var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",o="minute",a="hour",l="day",c="week",s="month",h="quarter",d="year",u="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+y(i,2,"0")+":"+y(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,s),o=n-r<0,a=e.clone().add(i+(o?-1:1),s);return+(-(i+(n-r)/(o?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:d,w:c,d:l,D:u,h:a,m:o,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",v={};v[S]=m;var F=function(t){return t instanceof w},D=function t(e,n,i){var r;if(!e)return S;if("string"==typeof e){var o=e.toLowerCase();v[o]&&(r=o),n&&(v[o]=n,r=o);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var l=e.name;v[l]=e,r=l}return!i&&r&&(S=r),r||!i&&S},b=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},H=$;H.l=D,H.i=F,H.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(g);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return H},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,i=!!H.u(e)||e,h=H.p(t),f=function(t,e){var r=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(l)},g=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case s:return i?f(1,m):f(0,m+1);case c:var S=this.$locale().weekStart||0,v=(p<S?p+7:p)-S;return f(i?y-v:y+(6-v),m);case l:case u:return g($+"Hours",0);case a:return g($+"Minutes",1);case o:return g($+"Seconds",2);case r:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=H.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[l]=h+"Date",n[u]=h+"Date",n[s]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[o]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===s||c===d){var p=this.clone().set(u,1);p.$d[f](g),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[H.p(t)]()},y.add=function(i,h){var u,f=this;i=Number(i);var g=H.p(h),p=function(t){var e=b(f);return H.w(e.date(e.date()+Math.round(t*i)),f)};if(g===s)return this.set(s,this.$M+i);if(g===d)return this.set(d,this.$y+i);if(g===l)return p(1);if(g===c)return p(7);var m=(u={},u[o]=e,u[a]=n,u[r]=t,u)[g]||1,y=this.$d.getTime()+i*m;return H.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=H.z(this),o=this.$H,a=this.$m,l=this.$M,c=n.weekdays,s=n.months,h=function(t,n,r,o){return t&&(t[n]||t(e,i))||r[n].slice(0,o)},d=function(t){return H.s(o%12||12,t,"0")},u=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:H.s(l+1,2,"0"),MMM:h(n.monthsShort,l,s,3),MMMM:h(s,l),D:this.$D,DD:H.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:H.s(o,2,"0"),h:d(1),hh:d(2),a:u(o,a,!0),A:u(o,a,!1),m:String(a),mm:H.s(a,2,"0"),s:String(this.$s),ss:H.s(this.$s,2,"0"),SSS:H.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||g[t]||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(i,u,f){var g,p=H.p(u),m=b(i),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,S=H.m(this,m);return S=(g={},g[d]=S/12,g[s]=S,g[h]=S/3,g[c]=($-y)/6048e5,g[l]=($-y)/864e5,g[a]=$/n,g[o]=$/e,g[r]=$/t,g)[p]||$,f?S:H.a(S)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},y.clone=function(){return H.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=w.prototype;return b.prototype=_,[["$ms",i],["$s",r],["$m",o],["$H",a],["$W",l],["$M",s],["$y",d],["$D",u]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=D,b.isDayjs=F,b.unix=function(t){return b(1e3*t)},b.en=v[S],b.Ls=v,b.p={},b}();!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${Ke(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener",...t&&t.privacy?t.privacy:{},children:"Privacy Statement"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener",...t&&t.termsOfUse?t.termsOfUse:{},children:"Terms of Use"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0,...t&&t.reportVulnerability?t.reportVulnerability:{},children:"Report Vulnerability"}})}(qe||(qe={}));const tn=a.forwardRef(((t,e)=>{const{children:i,"data-testid":r="container",type:o="flex",...a}=t;return n(en,{ref:e,"data-testid":r,type:o,...a,children:i})})),en=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${Pe.desktopM} {
        max-width: 1140px;
    }

    ${Pe.tablet} {
        max-width: 720px;
    }

    ${Pe.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Pe.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Pe.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,nn=a.forwardRef(((t,e)=>{const{children:i,"data-testid":r="section",...o}=t;return n(rn,{ref:e,"data-testid":r,...o,children:i})})),rn=r.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,on=a.forwardRef(((t,e)=>{const{children:i,"data-testid":r="content",className:o,type:a="flex",...l}=t;return n(nn,{ref:e,"data-testid":r,className:o,...l,children:n(tn,{"data-testid":`${r}-container`,type:a,"data-id":"container",children:i})})})),an={Section:nn,Container:tn,Content:on},ln=r.footer`
    background: ${je[7]};
`,cn=r(Le.Hyperlink.Small)`
    color: ${je[1]};
`,sn=r(an.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${je[5]};

    ${Pe.tablet} {
        padding: 2rem 0;
    }
`,hn=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,dn=r.ul`
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

    ${Pe.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Pe.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,un=r.div`
    grid-column: 9 / span 4;

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,fn=r.div`
    display: none;

    ${Pe.tablet} {
        display: block;
        height: 1px;
        background: ${je[6]};
    }
`,gn=r(an.Content)`
    padding: 1.375rem 0;

    ${Pe.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,pn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,mn=r(pn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Pe.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,yn=r(Le.Hyperlink.Small)`
    ${Be("XSmall","regular")}
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

    ${Pe.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Pe.tablet} {
        margin-bottom: 0.625rem;
    }
`,$n=({children:t,links:r,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:l,logoSrc:c,copyrightInfo:s,onFooterLinkClick:h})=>{const d=t=>t.map(((t,e)=>{const{"data-options":i,...r}=t;return n("li",{children:n(cn,{...r,onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):h&&(t.preventDefault(),h(e))})(e,t)})},e)}));return e(ln,{children:[(()=>{let o=null;return t||((r||l)&&(o=e(i,{children:[n(hn,{"data-testid":"logo-section",children:n("img",{src:c||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})}),r?.[0]&&n(dn,{"data-testid":"link-col-1",children:d(r[0])},"link-col-1"),r?.[1]&&n(dn,{"data-testid":"link-col-2",children:d(r[1])},"link-col-2"),l&&n(un,{children:n(Je,{})})]})),o?n(sn,{type:"grid",children:o}):null)})(),n(fn,{}),e(gn,{type:"grid",children:[n(pn,{children:(()=>{const t=qe.getDisclaimerLinks(a);return Object.keys(t).map((e=>n(yn,{...t[e]},e)))})()},"disclaimer"),n(mn,{children:n(Le.XSmall,{"data-testid":"copyright-text",children:s||e(i,{children:["©"," ",qe.getCopyrightInfo(o)]})})},"copyright")]})]})};export{$n as Footer};
//# sourceMappingURL=index.js.map
