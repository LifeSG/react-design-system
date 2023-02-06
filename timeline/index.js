import{createElement as t}from"react";import e,{jsxs as n,jsx as i,Fragment as r}from"react/jsx-runtime";import o,{css as a}from"styled-components";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,f="object"==typeof h&&h&&h.Object===Object&&h,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),s=p.Symbol,u=s,m=Object.prototype,y=m.hasOwnProperty,F=m.toString,S=u?u.toStringTag:void 0;var v=function(t){var e=y.call(t,S),n=t[S];try{t[S]=void 0;var i=!0}catch(t){}var r=F.call(t);return i&&(e?t[S]=n:delete t[S]),r},$=Object.prototype.toString;var H=v,B=function(t){return $.call(t)},D=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?H(t):B(t)};var _=b,z=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==_(t)},w=g,x=C,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var k=function(t,e){if(w(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!x(t))||(W.test(t)||!E.test(t)||null!=e&&t in Object(e))};var A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=b,j=A;var V,L=function(t){if(!j(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=p["__core-js_shared__"],T=(V=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var I=function(t){return!!T&&T in t},P=Function.prototype.toString;var R=L,X=I,G=A,M=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!G(t)||X(t))&&(R(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),it=nt;var rt=function(){this.__data__=it?it(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},ht=nt,gt=Object.prototype.hasOwnProperty;var ft=nt;var dt=rt,pt=ot,st=ct,ut=function(t){var e=this.__data__;return ht?void 0!==e[t]:gt.call(e,t)},mt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}yt.prototype.clear=dt,yt.prototype.delete=pt,yt.prototype.get=st,yt.prototype.has=ut,yt.prototype.set=mt;var Ft=yt;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var $t=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Ht=$t,Bt=Array.prototype.splice;var Dt=$t;var bt=$t;var _t=$t;var zt=St,Ct=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},wt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},xt=function(t){return bt(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,i=_t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Wt.prototype.clear=zt,Wt.prototype.delete=Ct,Wt.prototype.get=wt,Wt.prototype.has=xt,Wt.prototype.set=Et;var kt=Wt,At=et(p,"Map"),Ot=Ft,jt=kt,Vt=At;var Lt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Nt=function(t,e){var n=t.__data__;return Lt(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=Nt;var It=Nt;var Pt=Nt;var Rt=Nt;var Xt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Vt||jt),string:new Ot}},Gt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return It(this,t).get(t)},Zt=function(t){return Pt(this,t).has(t)},Ut=function(t,e){var n=Rt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}qt.prototype.clear=Xt,qt.prototype.delete=Gt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,i,r){e.push(i?r.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ie=g,re=C,oe=s?s.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(ie(e))return ne(e,t)+"";if(re(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var he=g,ge=k,fe=ee,de=function(t){return null==t?"":ce(t)};var pe=C;var se=function(t,e){return he(t)?t:ge(t,e)?[t]:fe(de(t))},ue=function(t){if("string"==typeof t||pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var me=function(t,e){for(var n=0,i=(e=se(e,t)).length;null!=t&&n<i;)t=t[ue(e[n++])];return n&&n==i?t:void 0};var ye=function(t,e,n){var i=null==t?void 0:me(t,e);return void 0===i?n:i};const Fe=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ve||(ve={}));const $e={collections:{base:c},defaultValue:"base"},He=t=>e=>{const n=e.theme,i=Se($e,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?Fe(i,t,n.options.textStyle):Fe(i,t)},Be={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing")}},De=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},be=(t,e)=>n=>{const i=Be[t].fontFamily(n),r=Be[t].fontWeight(n);return Object.values(l).includes(i)?a`
                font-family: ${De(e)||De(r)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${(_e(e)||r)??"normal"};
        `},_e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ze=(t,e,n=!1)=>i=>{const r=Be[t],o=r.fontSize(i);return a`
            ${be(t,e)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ce=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var we,xe={};Object.defineProperty(xe,"__esModule",{value:!0});var Ee=e;const We=t=>Ee.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ee.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});We.displayName="ExternalIcon",we=xe.ExternalIcon=We;const ke={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ae=t=>e=>{const n=e.theme,i=Se(ke,n[ve.colorScheme]);return n.options&&n.options.color?Fe(i,t,n.options.color):Fe(i,t)},Oe=(Ae("Brand.1"),Ae("Brand.2"),Ae("Brand.3"),Ae("Brand.4"),Ae("Brand.5"),Ae("Brand.6"),Ae("Primary")),je=(Ae("PrimaryDark"),Ae("Secondary")),Ve={Light:{1:Ae("Accent.Light.1"),2:Ae("Accent.Light.2"),3:Ae("Accent.Light.3"),4:Ae("Accent.Light.4"),5:Ae("Accent.Light.5"),6:Ae("Accent.Light.6")},Dark:{1:Ae("Accent.Dark.1"),2:Ae("Accent.Dark.2"),3:Ae("Accent.Dark.3")}},Le={1:Ae("Neutral.1"),2:Ae("Neutral.2"),3:Ae("Neutral.3"),4:Ae("Neutral.4"),5:Ae("Neutral.5"),6:Ae("Neutral.6"),7:Ae("Neutral.7"),8:Ae("Neutral.8")};Ae("Validation.Green.Text"),Ae("Validation.Green.Icon"),Ae("Validation.Green.Border"),Ae("Validation.Green.Background"),Ae("Validation.Orange.Text"),Ae("Validation.Orange.Icon"),Ae("Validation.Orange.Border"),Ae("Validation.Orange.Background"),Ae("Validation.Orange.Badge"),Ae("Validation.Red.Text"),Ae("Validation.Red.Icon"),Ae("Validation.Red.Border"),Ae("Validation.Red.Background");var Ne;!function(t){t.D1=o.h1`
        ${t=>a`
                ${ze("D1",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${ze("D2",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${ze("D3",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${ze("D4",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${ze("DBody",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${ze("H1",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${ze("H2",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${ze("H3",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${ze("H4",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${ze("H5",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${ze("H6",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${ze("Body",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${ze("BodySmall",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${ze("XSmall",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Pe({...t,textStyle:"Body"}),Small:t=>Pe({...t,textStyle:"BodySmall"})}}(Ne||(Ne={}));const Te=o.a`
    ${t=>a`
            ${ze(t.textStyle,t.weight)}
            color: ${Oe};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${je};

                svg {
                    color: ${je};
                }
            }
        `}
`,Ie=o(we)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Pe=({external:t=!1,children:e,...r})=>n(Te,{...r,children:[e,t&&i(Ie,{})]});var Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Re||(Re={}));const Xe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ge=t=>Object.keys(Xe).reduce(((e,n)=>{const i=Xe[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),Me=Ge("max-width"),Ze=(Ge("min-width"),o.div`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${t=>t.$filled?a`
                border: none;
                background-color: ${Ve.Light[1]};
            `:a`
            border: 3.2px solid ${Ve.Light[1]};
            background-color: transparent;
        `}
`),Ue=o.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${Ve.Light[1]};
`,qe=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`,Je=o.div`
    grid-column: ${t=>t.$startCol?t.$startCol:3} / span
        ${t=>t.$colSpan?t.$colSpan:8};

    ${Me.tablet} {
        grid-column: span 8;
    }

    ${Me.mobileL} {
        grid-column: span 4;
    }
`,Ke=o(Ne.H3)`
    margin-bottom: 1rem;

    ${Me.tablet} {
        margin-bottom: 1.5rem;
    }
`,Qe=o.div`
    display: flex;
`,Ye=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,tn=o(Ne.H4)`
    margin-bottom: 0.5rem;
`,en=o(Ne.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,nn=o.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?a`
                background-color: ${Le[1]};

                & > span {
                    color: ${Le[8]};
                }
            `:a`
            background-color: ${Le[8]};
            border: 1px solid ${Le[5]};

            & > span {
                color: ${Le[1]};
            }
        `}
`,rn=({items:e,className:o,title:a,startCol:l,colSpan:c,"data-base-indicator-testid":h,"data-testid":g="timeline"})=>{const f=t=>"string"==typeof t?i(Ne.Body,{className:"timeline-item-content-text",children:t}):i(r,{children:t}),d=t=>"string"==typeof t?i(tn,{weight:"semibold",className:"timeline-item-title",children:t}):i(r,{children:t}),p=e=>e.slice(0,2).map(((e,n)=>t(nn,{...e,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"},i(Ne.XSmall,{children:e.label}))));return n(Je,{className:o,"data-testid":g,$startCol:l,$colSpan:c,children:[i(Ke,{id:"timeline-title",children:a}),e.map(((t,e)=>{const{title:r,content:o,statuses:a}=t;return n(Qe,{children:[n(qe,{children:[i(Ze,{"data-testid":h?`circleindicator${e+1}_div_${h}`:"circleindicator",$filled:0===e}),i(Ue,{})]}),n(Ye,{className:"timeline-item-content",children:[d(r),a&&i(en,{children:p(a)}),f(o)]})]},`timeline-item-${e}`)}))]})};export{rn as Timeline};
//# sourceMappingURL=index.js.map
