import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";var o,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l={};Object.defineProperty(l,"__esModule",{value:!0});var c=t;const g=t=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:c.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});g.displayName="ExternalIcon",o=l.ExternalIcon=g;var h=Array.isArray,f="object"==typeof a&&a&&a.Object===Object&&a,d="object"==typeof self&&self&&self.Object===Object&&self,u=f||d||Function("return this")(),p=u.Symbol,F=p,s=Object.prototype,y=s.hasOwnProperty,S=s.toString,B=F?F.toStringTag:void 0;var m=function(t){var e=y.call(t,B),n=t[B];try{t[B]=void 0;var r=!0}catch(t){}var i=S.call(t);return r&&(e?t[B]=n:delete t[B]),i},v=Object.prototype.toString;var H=m,D=function(t){return v.call(t)},$=p?p.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":$&&$ in Object(t)?H(t):D(t)};var b=_,E=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==b(t)},z=h,A=C,w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var W=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!A(t))||(x.test(t)||!w.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=_,j=k;var V,T=function(t){if(!j(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=u["__core-js_shared__"],R=(V=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var P=function(t){return!!R&&R in t},L=Function.prototype.toString;var N=T,X=P,G=k,M=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(t){return!(!G(t)||X(t))&&(N(t)?Q:Z).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Y(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var ft=nt;var dt=it,ut=ot,pt=ct,Ft=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},st=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=dt,yt.prototype.delete=ut,yt.prototype.get=pt,yt.prototype.has=Ft,yt.prototype.set=st;var St=yt;var Bt=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1},Ht=vt,Dt=Array.prototype.splice;var $t=vt;var _t=vt;var bt=vt;var Et=Bt,Ct=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=$t(e,t);return n<0?void 0:e[n][1]},At=function(t){return _t(this.__data__,t)>-1},wt=function(t,e){var n=this.__data__,r=bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xt.prototype.clear=Et,xt.prototype.delete=Ct,xt.prototype.get=zt,xt.prototype.has=At,xt.prototype.set=wt;var Wt=xt,kt=et(u,"Map"),Ot=St,jt=Wt,Vt=kt;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},Rt=It;var Pt=It;var Lt=It;var Nt=It;var Xt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Vt||jt),string:new Ot}},Gt=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Pt(this,t).get(t)},Zt=function(t){return Lt(this,t).has(t)},Ut=function(t,e){var n=Nt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Xt,qt.prototype.delete=Gt,qt.prototype.get=Mt,qt.prototype.has=Zt,qt.prototype.set=Ut;var Jt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Kt.Cache||Jt),n}Kt.Cache=Jt;var Qt=Kt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Yt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=h,ie=C,oe=p?p.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=W,fe=ee,de=function(t){return null==t?"":ce(t)};var ue=C;var pe=function(t,e){return ge(t)?t:he(t,e)?[t]:fe(de(t))},Fe=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var se=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[Fe(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:se(t,e);return void 0===r?n:r};const Se=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Be=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(me||(me={}));const ve={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=Be(ve,n[me.colorScheme]);return n.options&&n.options.color?Se(r,t,n.options.color):Se(r,t)},De=(He("Brand.1"),He("Brand.2"),He("Brand.3"),He("Brand.4"),He("Brand.5"),He("Brand.6"),He("Primary")),$e=(He("PrimaryDark"),He("Secondary")),_e=(He("Accent.Light.1"),He("Accent.Light.2"),He("Accent.Light.3"),He("Accent.Light.4"),He("Accent.Light.5"),He("Accent.Light.6"),He("Accent.Dark.1"),He("Accent.Dark.2"),He("Accent.Dark.3"),{1:He("Neutral.1"),2:He("Neutral.2"),3:He("Neutral.3"),4:He("Neutral.4"),5:He("Neutral.5"),6:He("Neutral.6"),7:He("Neutral.7"),8:He("Neutral.8")}),be=(He("Validation.Green.Text"),He("Validation.Green.Icon"),He("Validation.Green.Border"),He("Validation.Green.Background"),He("Validation.Orange.Text"),He("Validation.Orange.Icon"),He("Validation.Orange.Border"),He("Validation.Orange.Background"),He("Validation.Orange.Badge"),He("Validation.Red.Text"),He("Validation.Red.Icon"),He("Validation.Red.Border"),He("Validation.Red.Background"),He("Validation.Blue.Text"),He("Validation.Blue.Icon"),He("Validation.Blue.Border"),He("Validation.Blue.Background"),He("Shadow.Accent"),He("Shadow.Red"),He("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ee={collections:{base:{D1:{fontFamily:be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=Be(Ee,n[me.textStyleScheme]);return n.options&&n.options.textStyle?Se(r,t,n.options.textStyle):Se(r,t)},ze={D1:{fontFamily:Ce("D1.fontFamily"),fontSize:Ce("D1.fontSize"),fontWeight:Ce("D1.fontWeight"),lineHeight:Ce("D1.lineHeight"),letterSpacing:Ce("D1.letterSpacing")},D2:{fontFamily:Ce("D2.fontFamily"),fontSize:Ce("D2.fontSize"),fontWeight:Ce("D2.fontWeight"),lineHeight:Ce("D2.lineHeight"),letterSpacing:Ce("D2.letterSpacing")},D3:{fontFamily:Ce("D3.fontFamily"),fontSize:Ce("D3.fontSize"),fontWeight:Ce("D3.fontWeight"),lineHeight:Ce("D3.lineHeight"),letterSpacing:Ce("D3.letterSpacing")},D4:{fontFamily:Ce("D4.fontFamily"),fontSize:Ce("D4.fontSize"),fontWeight:Ce("D4.fontWeight"),lineHeight:Ce("D4.lineHeight"),letterSpacing:Ce("D4.letterSpacing")},DBody:{fontFamily:Ce("DBody.fontFamily"),fontSize:Ce("DBody.fontSize"),fontWeight:Ce("DBody.fontWeight"),lineHeight:Ce("DBody.lineHeight"),letterSpacing:Ce("DBody.letterSpacing")},H1:{fontFamily:Ce("H1.fontFamily"),fontSize:Ce("H1.fontSize"),fontWeight:Ce("H1.fontWeight"),lineHeight:Ce("H1.lineHeight"),letterSpacing:Ce("H1.letterSpacing")},H2:{fontFamily:Ce("H2.fontFamily"),fontSize:Ce("H2.fontSize"),fontWeight:Ce("H2.fontWeight"),lineHeight:Ce("H2.lineHeight"),letterSpacing:Ce("H2.letterSpacing")},H3:{fontFamily:Ce("H3.fontFamily"),fontSize:Ce("H3.fontSize"),fontWeight:Ce("H3.fontWeight"),lineHeight:Ce("H3.lineHeight"),letterSpacing:Ce("H3.letterSpacing")},H4:{fontFamily:Ce("H4.fontFamily"),fontSize:Ce("H4.fontSize"),fontWeight:Ce("H4.fontWeight"),lineHeight:Ce("H4.lineHeight"),letterSpacing:Ce("H4.letterSpacing")},H5:{fontFamily:Ce("H5.fontFamily"),fontSize:Ce("H5.fontSize"),fontWeight:Ce("H5.fontWeight"),lineHeight:Ce("H5.lineHeight"),letterSpacing:Ce("H5.letterSpacing")},H6:{fontFamily:Ce("H6.fontFamily"),fontSize:Ce("H6.fontSize"),fontWeight:Ce("H6.fontWeight"),lineHeight:Ce("H6.lineHeight"),letterSpacing:Ce("H6.letterSpacing")},Body:{fontFamily:Ce("Body.fontFamily"),fontSize:Ce("Body.fontSize"),fontWeight:Ce("Body.fontWeight"),lineHeight:Ce("Body.lineHeight"),letterSpacing:Ce("Body.letterSpacing")},BodySmall:{fontFamily:Ce("BodySmall.fontFamily"),fontSize:Ce("BodySmall.fontSize"),fontWeight:Ce("BodySmall.fontWeight"),lineHeight:Ce("BodySmall.lineHeight"),letterSpacing:Ce("BodySmall.letterSpacing")},XSmall:{fontFamily:Ce("XSmall.fontFamily"),fontSize:Ce("XSmall.fontSize"),fontWeight:Ce("XSmall.fontWeight"),lineHeight:Ce("XSmall.lineHeight"),letterSpacing:Ce("XSmall.letterSpacing")}},Ae=t=>{switch(t){case 700:case"bold":return be.Bold;case 600:case"semibold":return be.Semibold;case 300:case"light":return be.Light;case 400:case"regular":return be.Regular;default:return""}},we=(t,e)=>n=>{const r=ze[t].fontFamily(n),o=ze[t].fontWeight(n);return Object.values(be).includes(r)?i`
                font-family: ${Ae(e)||Ae(o)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${(xe(e)||o)??"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},We=(t,e,n=!1)=>r=>{const o=ze[t],a=o.fontSize(r);return i`
            ${we(t,e)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},ke=(t=!1,e=!1)=>e?i`
            display: block;
        `:t?i`
            display: inline;
        `:i`
            display: block;
        `;var Oe;!function(t){t.D1=r.h1`
        ${t=>i`
                ${We("D1",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${We("D2",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${We("D3",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${We("D4",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${We("DBody",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${We("H1",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${We("H2",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${We("H3",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${We("H4",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${We("H5",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${We("H6",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${We("Body",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${We("BodySmall",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${We("XSmall",t.weight,t.paragraph)}
                color: ${_e[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Te({...t,textStyle:"Body"}),Small:t=>Te({...t,textStyle:"BodySmall"})}}(Oe||(Oe={}));const je=r.a`
    ${t=>i`
            ${We(t.textStyle,t.weight)}
            color: ${De};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$e};

                svg {
                    color: ${$e};
                }
            }
        `}
`,Ve=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Te=({external:t=!1,children:r,...i})=>e(je,{...i,children:[r,t&&n(Ve,{})]}),Ie=r.div`
    border-radius: 0.5rem;
    background: ${_e[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Re=({children:t,...e})=>{const r=e["data-testid"]||"card";return n(Ie,{...e,"data-testid":r,children:"string"==typeof t?n(Oe.Body,{children:t}):t})};export{Re as Card};
//# sourceMappingURL=index.js.map
