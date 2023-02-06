import t,{jsxs as e,jsx as n,Fragment as r}from"react/jsx-runtime";import o,{useState as i,useEffect as a}from"react";import l,{css as c}from"styled-components";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=d.Symbol,s=p,y=Object.prototype,m=y.hasOwnProperty,F=y.toString,S=s?s.toStringTag:void 0;var v=function(t){var e=m.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var o=F.call(t);return r&&(e?t[S]=n:delete t[S]),o},B=Object.prototype.toString;var H=v,$=function(t){return B.call(t)},b=p?p.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?H(t):$(t)};var _=D,x=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||x(t)&&"[object Symbol]"==_(t)},z=h,w=C,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var A=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!w(t))||(W.test(t)||!E.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N=D,O=k;var j,V=function(t){if(!O(t))return!1;var e=N(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},L=d["__core-js_shared__"],R=(j=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var T=function(t){return!!R&&R in t},I=Function.prototype.toString;var P=V,X=T,G=k,M=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!G(t)||X(t))&&(P(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),rt=nt;var ot=function(){this.__data__=rt?rt(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var ut=nt;var ft=ot,dt=it,pt=ct,st=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=ft,mt.prototype.delete=dt,mt.prototype.get=pt,mt.prototype.has=st,mt.prototype.set=yt;var Ft=mt;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Ht=Bt,$t=Array.prototype.splice;var bt=Bt;var Dt=Bt;var _t=Bt;var xt=St,Ct=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():$t.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},wt=function(t){return Dt(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=xt,Wt.prototype.delete=Ct,Wt.prototype.get=zt,Wt.prototype.has=wt,Wt.prototype.set=Et;var At=Wt,kt=et(d,"Map"),Nt=Ft,Ot=At,jt=kt;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Lt=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Rt=Lt;var Tt=Lt;var It=Lt;var Pt=Lt;var Xt=function(){this.size=0,this.__data__={hash:new Nt,map:new(jt||Ot),string:new Nt}},Gt=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Tt(this,t).get(t)},Zt=function(t){return It(this,t).has(t)},Ut=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Xt,qt.prototype.delete=Gt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,r,o){e.push(r?o.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},re=h,oe=C,ie=p?p.prototype:void 0,ae=ie?ie.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(oe(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=A,ue=ee,fe=function(t){return null==t?"":ce(t)};var de=C;var pe=function(t,e){return ge(t)?t:he(t,e)?[t]:ue(fe(t))},se=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[se(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:ye(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ve||(ve={}));const Be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=Se(Be,n[ve.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},$e={Brand:{1:He("Brand.1"),2:He("Brand.2"),3:He("Brand.3"),4:He("Brand.4"),5:He("Brand.5"),6:He("Brand.6")},Primary:He("Primary"),PrimaryDark:He("PrimaryDark"),Secondary:He("Secondary"),Accent:{Light:{1:He("Accent.Light.1"),2:He("Accent.Light.2"),3:He("Accent.Light.3"),4:He("Accent.Light.4"),5:He("Accent.Light.5"),6:He("Accent.Light.6")},Dark:{1:He("Accent.Dark.1"),2:He("Accent.Dark.2"),3:He("Accent.Dark.3")}},Neutral:{1:He("Neutral.1"),2:He("Neutral.2"),3:He("Neutral.3"),4:He("Neutral.4"),5:He("Neutral.5"),6:He("Neutral.6"),7:He("Neutral.7"),8:He("Neutral.8")},Validation:{Green:{Text:He("Validation.Green.Text"),Icon:He("Validation.Green.Icon"),Border:He("Validation.Green.Border"),Background:He("Validation.Green.Background")},Orange:{Text:He("Validation.Orange.Text"),Icon:He("Validation.Orange.Icon"),Border:He("Validation.Orange.Border"),Background:He("Validation.Orange.Background"),Badge:He("Validation.Orange.Badge")},Red:{Text:He("Validation.Red.Text"),Icon:He("Validation.Red.Icon"),Border:He("Validation.Red.Border"),Background:He("Validation.Red.Background")}}},be={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},De={collections:{base:{D1:{fontFamily:be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_e=t=>e=>{const n=e.theme,r=Se(De,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},xe={D1:{fontFamily:_e("D1.fontFamily"),fontSize:_e("D1.fontSize"),fontWeight:_e("D1.fontWeight"),lineHeight:_e("D1.lineHeight"),letterSpacing:_e("D1.letterSpacing")},D2:{fontFamily:_e("D2.fontFamily"),fontSize:_e("D2.fontSize"),fontWeight:_e("D2.fontWeight"),lineHeight:_e("D2.lineHeight"),letterSpacing:_e("D2.letterSpacing")},D3:{fontFamily:_e("D3.fontFamily"),fontSize:_e("D3.fontSize"),fontWeight:_e("D3.fontWeight"),lineHeight:_e("D3.lineHeight"),letterSpacing:_e("D3.letterSpacing")},D4:{fontFamily:_e("D4.fontFamily"),fontSize:_e("D4.fontSize"),fontWeight:_e("D4.fontWeight"),lineHeight:_e("D4.lineHeight"),letterSpacing:_e("D4.letterSpacing")},DBody:{fontFamily:_e("DBody.fontFamily"),fontSize:_e("DBody.fontSize"),fontWeight:_e("DBody.fontWeight"),lineHeight:_e("DBody.lineHeight"),letterSpacing:_e("DBody.letterSpacing")},H1:{fontFamily:_e("H1.fontFamily"),fontSize:_e("H1.fontSize"),fontWeight:_e("H1.fontWeight"),lineHeight:_e("H1.lineHeight"),letterSpacing:_e("H1.letterSpacing")},H2:{fontFamily:_e("H2.fontFamily"),fontSize:_e("H2.fontSize"),fontWeight:_e("H2.fontWeight"),lineHeight:_e("H2.lineHeight"),letterSpacing:_e("H2.letterSpacing")},H3:{fontFamily:_e("H3.fontFamily"),fontSize:_e("H3.fontSize"),fontWeight:_e("H3.fontWeight"),lineHeight:_e("H3.lineHeight"),letterSpacing:_e("H3.letterSpacing")},H4:{fontFamily:_e("H4.fontFamily"),fontSize:_e("H4.fontSize"),fontWeight:_e("H4.fontWeight"),lineHeight:_e("H4.lineHeight"),letterSpacing:_e("H4.letterSpacing")},H5:{fontFamily:_e("H5.fontFamily"),fontSize:_e("H5.fontSize"),fontWeight:_e("H5.fontWeight"),lineHeight:_e("H5.lineHeight"),letterSpacing:_e("H5.letterSpacing")},H6:{fontFamily:_e("H6.fontFamily"),fontSize:_e("H6.fontSize"),fontWeight:_e("H6.fontWeight"),lineHeight:_e("H6.lineHeight"),letterSpacing:_e("H6.letterSpacing")},Body:{fontFamily:_e("Body.fontFamily"),fontSize:_e("Body.fontSize"),fontWeight:_e("Body.fontWeight"),lineHeight:_e("Body.lineHeight"),letterSpacing:_e("Body.letterSpacing")},BodySmall:{fontFamily:_e("BodySmall.fontFamily"),fontSize:_e("BodySmall.fontSize"),fontWeight:_e("BodySmall.fontWeight"),lineHeight:_e("BodySmall.lineHeight"),letterSpacing:_e("BodySmall.letterSpacing")},XSmall:{fontFamily:_e("XSmall.fontFamily"),fontSize:_e("XSmall.fontSize"),fontWeight:_e("XSmall.fontWeight"),lineHeight:_e("XSmall.lineHeight"),letterSpacing:_e("XSmall.letterSpacing")}},Ce=t=>{switch(t){case 700:case"bold":return be.Bold;case 600:case"semibold":return be.Semibold;case 300:case"light":return be.Light;case 400:case"regular":return be.Regular;default:return""}},ze=(t,e)=>n=>{const r=xe[t].fontFamily(n),o=xe[t].fontWeight(n);return Object.values(be).includes(r)?c`
                font-family: ${Ce(e)||Ce(o)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(we(e)||o)??"normal"};
        `},we=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=(t,e,n=!1)=>r=>{const o=xe[t],i=o.fontSize(r);return c`
            ${ze(t,e)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},We=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `;var Ae,ke={};Object.defineProperty(ke,"__esModule",{value:!0});var Ne=t;const Oe=t=>Ne.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ne.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var je;Oe.displayName="ExternalIcon",Ae=ke.ExternalIcon=Oe,function(t){t.D1=l.h1`
        ${t=>c`
                ${Ee("D1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Ee("D2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Ee("D3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Ee("D4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Ee("DBody",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Ee("H1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Ee("H2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Ee("H3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Ee("H4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Ee("H5",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Ee("H6",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Ee("Body",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Ee("BodySmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Ee("XSmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${We(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Re({...t,textStyle:"Body"}),Small:t=>Re({...t,textStyle:"BodySmall"})}}(je||(je={}));const Ve=l.a`
    ${t=>c`
            ${Ee(t.textStyle,t.weight)}
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
`,Le=l(Ae)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Re=({external:t=!1,children:r,...o})=>e(Ve,{...o,children:[r,t&&n(Le,{})]});var Te;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Te||(Te={}));const Ie=l(je.H6)`
    text-align: right;

    ${t=>{if(t.disabled)return c`
                color: ${$e.Neutral[4](t)};
            `}}
`,Pe=({value:t,maxLength:e,disabled:l,renderCustomCounter:c})=>{const[g,h]=i("");a((()=>{h(u(`${t||""}`))}),[t,e]);const u=t=>{if(c)return c(e,t.toString().length);{const n=e-t.toString().length;return n<=1?`${n} character left`:`${n.toLocaleString()} characters left`}};return n(r,{children:o.isValidElement(g)?g:n(Ie,{"data-testid":"counter-label",weight:"semibold",disabled:l,children:g})})},Xe="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ge=l.div`
    display: flex;
    flex-direction: column;
`,Me=l.textarea`
    border: 1px solid ${$e.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Xe};

    ${Ee("Body","regular")}
    color: ${$e.Neutral[1]};
    background: ${$e.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${$e.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${$e.Neutral[3]};
    }

    ${t=>t.readOnly?c`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:t.disabled?c`
                background: ${$e.Neutral[6](t)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${$e.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.error?c`
                border: 1px solid ${$e.Validation.Red.Border(t)};

                :focus,
                :active {
                    border: 1px solid ${$e.Validation.Red.Border(t)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`;o.forwardRef((({value:t,disabled:e,error:r,rows:o=5,...i},a)=>n(Me,{ref:a,disabled:e,value:t,error:r,rows:o,...i})));const Ze=o.forwardRef((({value:t,disabled:r,rows:o=5,onChange:l,...c},g)=>{const[h,u]=i(t);a((()=>{u(t)}),[t]);return e(Ge,{children:[n(Me,{ref:g,disabled:r,value:h,rows:o||5,onChange:t=>{const e=t.target.value;c.maxLength&&e.length>c.maxLength||(u(e),t.target.value=e,l&&l(t))},...c}),c.maxLength&&n(Pe,{disabled:r,value:h,maxLength:c.maxLength,renderCustomCounter:c.renderCustomCounter})]})}));export{Ze as Textarea};
//# sourceMappingURL=index.js.map
