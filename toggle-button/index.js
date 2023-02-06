import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as i,useEffect as o,useCallback as a}from"react";import l,{css as c}from"styled-components";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,d="object"==typeof h&&h&&h.Object===Object&&h,f="object"==typeof self&&self&&self.Object===Object&&self,u=d||f||Function("return this")(),p=u.Symbol,s=p,y=Object.prototype,F=y.hasOwnProperty,m=y.toString,S=s?s.toStringTag:void 0;var v=function(t){var e=F.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var i=m.call(t);return r&&(e?t[S]=n:delete t[S]),i},H=Object.prototype.toString;var B=v,$=function(t){return H.call(t)},b=p?p.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?B(t):$(t)};var _=D,z=function(t){return null!=t&&"object"==typeof t};var w=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==_(t)},C=g,x=w,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var W=function(t,e){if(C(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!x(t))||(E.test(t)||!k.test(t)||null!=e&&t in Object(e))};var A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N=D,O=A;var j,V=function(t){if(!O(t))return!1;var e=N(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=u["__core-js_shared__"],T=(j=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var I=function(t){return!!T&&T in t},L=Function.prototype.toString;var R=V,X=I,G=A,M=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!G(t)||X(t))&&(R(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},ht=nt,gt=Object.prototype.hasOwnProperty;var dt=nt;var ft=it,ut=ot,pt=ct,st=function(t){var e=this.__data__;return ht?void 0!==e[t]:gt.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=ft,Ft.prototype.delete=ut,Ft.prototype.get=pt,Ft.prototype.has=st,Ft.prototype.set=yt;var mt=Ft;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var Ht=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Bt=Ht,$t=Array.prototype.splice;var bt=Ht;var Dt=Ht;var _t=Ht;var zt=St,wt=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():$t.call(e,n,1),--this.size,!0)},Ct=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},xt=function(t){return Dt(this.__data__,t)>-1},kt=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Et.prototype.clear=zt,Et.prototype.delete=wt,Et.prototype.get=Ct,Et.prototype.has=xt,Et.prototype.set=kt;var Wt=Et,At=et(u,"Map"),Nt=mt,Ot=Wt,jt=At;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=Pt;var It=Pt;var Lt=Pt;var Rt=Pt;var Xt=function(){this.size=0,this.__data__={hash:new Nt,map:new(jt||Ot),string:new Nt}},Gt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return It(this,t).get(t)},Zt=function(t){return Lt(this,t).has(t)},Ut=function(t,e){var n=Rt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Xt,qt.prototype.delete=Gt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=g,ie=w,oe=p?p.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var he=g,ge=W,de=ee,fe=function(t){return null==t?"":ce(t)};var ue=w;var pe=function(t,e){return he(t)?t:ge(t,e)?[t]:de(fe(t))},se=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[se(e[n++])];return n&&n==r?t:void 0};var Fe=function(t,e,n){var r=null==t?void 0:ye(t,e);return void 0===r?n:r};const me=(t,e,n)=>e?Fe(n,e)||Fe(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return Fe(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ve||(ve={}));const He={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=Se(He,n[ve.colorScheme]);return n.options&&n.options.color?me(r,t,n.options.color):me(r,t)},$e={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")}}},be={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},De={collections:{base:{D1:{fontFamily:be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_e=t=>e=>{const n=e.theme,r=Se(De,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?me(r,t,n.options.textStyle):me(r,t)},ze={D1:{fontFamily:_e("D1.fontFamily"),fontSize:_e("D1.fontSize"),fontWeight:_e("D1.fontWeight"),lineHeight:_e("D1.lineHeight"),letterSpacing:_e("D1.letterSpacing")},D2:{fontFamily:_e("D2.fontFamily"),fontSize:_e("D2.fontSize"),fontWeight:_e("D2.fontWeight"),lineHeight:_e("D2.lineHeight"),letterSpacing:_e("D2.letterSpacing")},D3:{fontFamily:_e("D3.fontFamily"),fontSize:_e("D3.fontSize"),fontWeight:_e("D3.fontWeight"),lineHeight:_e("D3.lineHeight"),letterSpacing:_e("D3.letterSpacing")},D4:{fontFamily:_e("D4.fontFamily"),fontSize:_e("D4.fontSize"),fontWeight:_e("D4.fontWeight"),lineHeight:_e("D4.lineHeight"),letterSpacing:_e("D4.letterSpacing")},DBody:{fontFamily:_e("DBody.fontFamily"),fontSize:_e("DBody.fontSize"),fontWeight:_e("DBody.fontWeight"),lineHeight:_e("DBody.lineHeight"),letterSpacing:_e("DBody.letterSpacing")},H1:{fontFamily:_e("H1.fontFamily"),fontSize:_e("H1.fontSize"),fontWeight:_e("H1.fontWeight"),lineHeight:_e("H1.lineHeight"),letterSpacing:_e("H1.letterSpacing")},H2:{fontFamily:_e("H2.fontFamily"),fontSize:_e("H2.fontSize"),fontWeight:_e("H2.fontWeight"),lineHeight:_e("H2.lineHeight"),letterSpacing:_e("H2.letterSpacing")},H3:{fontFamily:_e("H3.fontFamily"),fontSize:_e("H3.fontSize"),fontWeight:_e("H3.fontWeight"),lineHeight:_e("H3.lineHeight"),letterSpacing:_e("H3.letterSpacing")},H4:{fontFamily:_e("H4.fontFamily"),fontSize:_e("H4.fontSize"),fontWeight:_e("H4.fontWeight"),lineHeight:_e("H4.lineHeight"),letterSpacing:_e("H4.letterSpacing")},H5:{fontFamily:_e("H5.fontFamily"),fontSize:_e("H5.fontSize"),fontWeight:_e("H5.fontWeight"),lineHeight:_e("H5.lineHeight"),letterSpacing:_e("H5.letterSpacing")},H6:{fontFamily:_e("H6.fontFamily"),fontSize:_e("H6.fontSize"),fontWeight:_e("H6.fontWeight"),lineHeight:_e("H6.lineHeight"),letterSpacing:_e("H6.letterSpacing")},Body:{fontFamily:_e("Body.fontFamily"),fontSize:_e("Body.fontSize"),fontWeight:_e("Body.fontWeight"),lineHeight:_e("Body.lineHeight"),letterSpacing:_e("Body.letterSpacing")},BodySmall:{fontFamily:_e("BodySmall.fontFamily"),fontSize:_e("BodySmall.fontSize"),fontWeight:_e("BodySmall.fontWeight"),lineHeight:_e("BodySmall.lineHeight"),letterSpacing:_e("BodySmall.letterSpacing")},XSmall:{fontFamily:_e("XSmall.fontFamily"),fontSize:_e("XSmall.fontSize"),fontWeight:_e("XSmall.fontWeight"),lineHeight:_e("XSmall.lineHeight"),letterSpacing:_e("XSmall.letterSpacing")}},we=t=>{switch(t){case 700:case"bold":return be.Bold;case 600:case"semibold":return be.Semibold;case 300:case"light":return be.Light;case 400:case"regular":return be.Regular;default:return""}},Ce=(t,e)=>n=>{const r=ze[t].fontFamily(n),i=ze[t].fontWeight(n);return Object.values(be).includes(r)?c`
                font-family: ${we(e)||we(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(xe(e)||i)??"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ke=(t,e,n=!1)=>r=>{const i=ze[t],o=i.fontSize(r);return c`
            ${Ce(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ee=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `;var We,Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});var Ne=t;const Oe=t=>Ne.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ne.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var je;Oe.displayName="ExternalIcon",We=Ae.ExternalIcon=Oe,function(t){t.D1=l.h1`
        ${t=>c`
                ${ke("D1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${ke("D2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${ke("D3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${ke("D4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${ke("DBody",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${ke("H1",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${ke("H2",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${ke("H3",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${ke("H4",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${ke("H5",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${ke("H6",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${ke("Body",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${ke("BodySmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${ke("XSmall",t.weight,t.paragraph)}
                color: ${$e.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Te({...t,textStyle:"Body"}),Small:t=>Te({...t,textStyle:"BodySmall"})}}(je||(je={}));const Ve=l.a`
    ${t=>c`
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
`,Pe=l(We)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Te=({external:t=!1,children:r,...i})=>e(Ve,{...i,children:[r,t&&n(Pe,{})]});var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Le=l.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${$e.Primary};
    background: ${$e.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px rgba(87, 169, 255, 0.5);
    }

    ${t=>t.disabled&&!t.$selected?c`
                background: ${$e.Neutral[6](t)};
                border: 1px solid ${$e.Neutral[6](t)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:t.disabled&&t.$selected?c`
                background: ${$e.Neutral[6](t)};
                border: 1px solid ${$e.Neutral[4](t)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:t.$selected?c`
                background: ${$e.Accent.Light[5](t)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `:0==t.$selected?c`
                border: 1px solid ${$e.Neutral[5](t)};
            `:void 0}
`,Re=l.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Xe=l.span`
    ${t=>c`
            ${ke("H4",t.$weight)}
        `}
    color: ${$e.Neutral[1]};
    text-align: center;

    ${t=>t.disabled?c`
                color: ${$e.Neutral[3](t)};
            `:t.$selected?c`
                color: ${$e.Primary(t)};
            `:void 0}
`,Ge=({disabled:t,checked:l,onChange:c,type:h="checkbox",children:g,className:d,...f})=>{const[u,p]=r(l),s=i();o((()=>{p(l)}),[l]);const y=a((e=>{t||("radio"!==h||u||p(!0),"checkbox"===h&&p((t=>!t)),c&&c(e))}),[]);return e(Le,{$selected:u,disabled:t,role:"checkbox","aria-checked":u,className:d,children:[n(Re,{ref:s,type:"checkbox","data-testid":"toggle-button-input",disabled:t,onChange:y,checked:u,...f}),n(Xe,{$weight:u?"bold":"regular",$selected:u,disabled:t,"data-testid":"toggle-button-label",children:g})]})};export{Ge as ToggleButton};
//# sourceMappingURL=index.js.map
