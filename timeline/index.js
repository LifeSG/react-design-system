import{createElement as t}from"react";import e,{jsxs as n,jsx as r,Fragment as i}from"react/jsx-runtime";import o,{css as a}from"styled-components";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,p=d||f||Function("return this")(),u=p.Symbol,s=u,F=Object.prototype,m=F.hasOwnProperty,y=F.toString,S=s?s.toStringTag:void 0;var B=function(t){var e=m.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[S]=n:delete t[S]),i},v=Object.prototype.toString;var $=B,H=function(t){return v.call(t)},D=u?u.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?$(t):H(t)};var _=b,C=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||C(t)&&"[object Symbol]"==_(t)},z=h,w=E,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var k=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!w(t))||(x.test(t)||!A.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=b,j=W;var V,T=function(t){if(!j(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=p["__core-js_shared__"],L=(V=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var N=function(t){return!!L&&L in t},R=Function.prototype.toString;var P=T,X=N,G=W,M=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!G(t)||X(t))&&(P(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var dt=nt;var ft=it,pt=ot,ut=ct,st=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=ft,mt.prototype.delete=pt,mt.prototype.get=ut,mt.prototype.has=st,mt.prototype.set=Ft;var yt=mt;var St=function(){this.__data__=[],this.size=0};var Bt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1},$t=vt,Ht=Array.prototype.splice;var Dt=vt;var bt=vt;var _t=vt;var Ct=St,Et=function(t){var e=this.__data__,n=$t(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},wt=function(t){return bt(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xt.prototype.clear=Ct,xt.prototype.delete=Et,xt.prototype.get=zt,xt.prototype.has=wt,xt.prototype.set=At;var kt=xt,Wt=et(p,"Map"),Ot=yt,jt=kt,Vt=Wt;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=It;var Nt=It;var Rt=It;var Pt=It;var Xt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Vt||jt),string:new Ot}},Gt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Nt(this,t).get(t)},Zt=function(t){return Rt(this,t).has(t)},Ut=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Xt,qt.prototype.delete=Gt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=h,ie=E,oe=u?u.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=k,de=ee,fe=function(t){return null==t?"":ce(t)};var pe=E;var ue=function(t,e){return ge(t)?t:he(t,e)?[t]:de(fe(t))},se=function(t){if("string"==typeof t||pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,r=(e=ue(e,t)).length;null!=t&&n<r;)t=t[se(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:Fe(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var Be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Be||(Be={}));const ve={collections:{base:c},defaultValue:"base"},$e=t=>e=>{const n=e.theme,r=Se(ve,n[Be.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},He={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},De=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},be=(t,e)=>n=>{const r=He[t].fontFamily(n),i=He[t].fontWeight(n);return Object.values(l).includes(r)?a`
                font-family: ${De(e)||De(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(_e(e)||i)??"normal"};
        `},_e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ce=(t,e,n=!1)=>r=>{const i=He[t],o=i.fontSize(r);return a`
            ${be(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ee=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var ze,we={};Object.defineProperty(we,"__esModule",{value:!0});var Ae=e;const xe=t=>Ae.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ae.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});xe.displayName="ExternalIcon",ze=we.ExternalIcon=xe;const ke={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=Se(ke,n[Be.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},Oe=(We("Brand.1"),We("Brand.2"),We("Brand.3"),We("Brand.4"),We("Brand.5"),We("Brand.6"),We("Primary")),je=(We("PrimaryDark"),We("Secondary")),Ve={Light:{1:We("Accent.Light.1"),2:We("Accent.Light.2"),3:We("Accent.Light.3"),4:We("Accent.Light.4"),5:We("Accent.Light.5"),6:We("Accent.Light.6")},Dark:{1:We("Accent.Dark.1"),2:We("Accent.Dark.2"),3:We("Accent.Dark.3")}},Te={1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")};We("Validation.Green.Text"),We("Validation.Green.Icon"),We("Validation.Green.Border"),We("Validation.Green.Background"),We("Validation.Orange.Text"),We("Validation.Orange.Icon"),We("Validation.Orange.Border"),We("Validation.Orange.Background"),We("Validation.Orange.Badge"),We("Validation.Red.Text"),We("Validation.Red.Icon"),We("Validation.Red.Border"),We("Validation.Red.Background"),We("Validation.Blue.Text"),We("Validation.Blue.Icon"),We("Validation.Blue.Border"),We("Validation.Blue.Background"),We("Shadow.Accent"),We("Shadow.Red"),We("Shadow.Elevation");var Ie;!function(t){t.D1=o.h1`
        ${t=>a`
                ${Ce("D1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${Ce("D2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${Ce("D3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${Ce("D4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${Ce("DBody",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${Ce("H1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${Ce("H2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${Ce("H3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${Ce("H4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${Ce("H5",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${Ce("H6",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${Ce("Body",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${Ce("BodySmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${Ce("XSmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Re({...t,textStyle:"Body"}),Small:t=>Re({...t,textStyle:"BodySmall"})}}(Ie||(Ie={}));const Le=o.a`
    ${t=>a`
            ${Ce(t.textStyle,t.weight)}
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
`,Ne=o(ze)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Re=({external:t=!1,children:e,...i})=>n(Le,{...i,children:[e,t&&r(Ne,{})]});var Pe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Pe||(Pe={}));const Xe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ge=t=>Object.keys(Xe).reduce(((e,n)=>{const r=Xe[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Me=Ge("max-width"),Ze=(Ge("min-width"),o.div`
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
`,Ke=o(Ie.H3)`
    margin-bottom: 1rem;

    ${Me.tablet} {
        margin-bottom: 1.5rem;
    }
`,Qe=o.div`
    display: flex;
`,Ye=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,tn=o(Ie.H4)`
    margin-bottom: 0.5rem;
`,en=o(Ie.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,nn=o.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?a`
                background-color: ${Te[1]};

                & > span {
                    color: ${Te[8]};
                }
            `:a`
            background-color: ${Te[8]};
            border: 1px solid ${Te[5]};

            & > span {
                color: ${Te[1]};
            }
        `}
`,rn=({items:e,className:o,title:a,startCol:l,colSpan:c,"data-base-indicator-testid":g,"data-testid":h="timeline"})=>{const d=t=>"string"==typeof t?r(Ie.Body,{className:"timeline-item-content-text",children:t}):r(i,{children:t}),f=t=>"string"==typeof t?r(tn,{weight:"semibold",className:"timeline-item-title",children:t}):r(i,{children:t}),p=e=>e.slice(0,2).map(((e,n)=>t(nn,{...e,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"},r(Ie.XSmall,{children:e.label}))));return n(Je,{className:o,"data-testid":h,$startCol:l,$colSpan:c,children:[r(Ke,{id:"timeline-title",children:a}),e.map(((t,e)=>{const{title:i,content:o,statuses:a}=t;return n(Qe,{children:[n(qe,{children:[r(Ze,{"data-testid":g?`circleindicator${e+1}_div_${g}`:"circleindicator",$filled:0===e}),r(Ue,{})]}),n(Ye,{className:"timeline-item-content",children:[f(i),a&&r(en,{children:p(a)}),d(o)]})]},`timeline-item-${e}`)}))]})};export{rn as Timeline};
//# sourceMappingURL=index.js.map
