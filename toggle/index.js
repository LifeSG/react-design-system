import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as i,useEffect as o}from"react";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=Array.isArray,u="object"==typeof c&&c&&c.Object===Object&&c,h="object"==typeof self&&self&&self.Object===Object&&self,d=u||h||Function("return this")(),f=d.Symbol,g=f,p=Object.prototype,y=p.hasOwnProperty,m=p.toString,$=g?g.toStringTag:void 0;var v=function(t){var e=y.call(t,$),n=t[$];try{t[$]=void 0;var r=!0}catch(t){}var i=m.call(t);return r&&(e?t[$]=n:delete t[$]),i},S=Object.prototype.toString;var C=v,F=function(t){return S.call(t)},b=f?f.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?C(t):F(t)};var B=D,w=function(t){return null!=t&&"object"==typeof t};var H=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==B(t)},_=s,x=H,M=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var O=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!x(t))||(k.test(t)||!M.test(t)||null!=e&&t in Object(e))};var z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},A=D,N=z;var j,E=function(t){if(!N(t))return!1;var e=A(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},W=d["__core-js_shared__"],T=(j=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var I=function(t){return!!T&&T in t},L=Function.prototype.toString;var V=E,P=I,R=z,Y=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,X=Function.prototype,G=Object.prototype,U=X.toString,q=G.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!R(t)||P(t))&&(V(t)?J:Z).test(Y(t))},K=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=K(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var rt=function(){this.__data__=nt?nt(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=et,at=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},ct=et,st=Object.prototype.hasOwnProperty;var ut=et;var ht=rt,dt=it,ft=lt,gt=function(t){var e=this.__data__;return ct?void 0!==e[t]:st.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=ht,yt.prototype.delete=dt,yt.prototype.get=ft,yt.prototype.has=gt,yt.prototype.set=pt;var mt=yt;var $t=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Ct=St,Ft=Array.prototype.splice;var bt=St;var Dt=St;var Bt=St;var wt=$t,Ht=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ft.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},xt=function(t){return Dt(this.__data__,t)>-1},Mt=function(t,e){var n=this.__data__,r=Bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=wt,kt.prototype.delete=Ht,kt.prototype.get=_t,kt.prototype.has=xt,kt.prototype.set=Mt;var Ot=kt,zt=tt(d,"Map"),At=mt,Nt=Ot,jt=zt;var Et=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Wt=function(t,e){var n=t.__data__;return Et(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=Wt;var It=Wt;var Lt=Wt;var Vt=Wt;var Pt=function(){this.size=0,this.__data__={hash:new At,map:new(jt||Nt),string:new At}},Rt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Yt=function(t){return It(this,t).get(t)},Zt=function(t){return Lt(this,t).has(t)},Xt=function(t,e){var n=Vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Pt,Gt.prototype.delete=Rt,Gt.prototype.get=Yt,Gt.prototype.has=Zt,Gt.prototype.set=Xt;var Ut=Gt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,te=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,i){e.push(r?i.replace(Kt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ne=s,re=H,ie=f?f.prototype:void 0,oe=ie?ie.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(re(e))return oe?oe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=ae;var ce=s,se=O,ue=te,he=function(t){return null==t?"":le(t)};var de=H;var fe=function(t,e){return ce(t)?t:se(t,e)?[t]:ue(he(t))},ge=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[ge(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const me=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,$e=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ve||(ve={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=$e(Se,n[ve.colorScheme]);return n.options&&n.options.color?me(r,t,n.options.color):me(r,t)},Fe={Brand:{1:Ce("Brand.1"),2:Ce("Brand.2"),3:Ce("Brand.3"),4:Ce("Brand.4"),5:Ce("Brand.5"),6:Ce("Brand.6")},Primary:Ce("Primary"),PrimaryDark:Ce("PrimaryDark"),Secondary:Ce("Secondary"),Accent:{Light:{1:Ce("Accent.Light.1"),2:Ce("Accent.Light.2"),3:Ce("Accent.Light.3"),4:Ce("Accent.Light.4"),5:Ce("Accent.Light.5"),6:Ce("Accent.Light.6")},Dark:{1:Ce("Accent.Dark.1"),2:Ce("Accent.Dark.2"),3:Ce("Accent.Dark.3")}},Neutral:{1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")},Validation:{Green:{Text:Ce("Validation.Green.Text"),Icon:Ce("Validation.Green.Icon"),Border:Ce("Validation.Green.Border"),Background:Ce("Validation.Green.Background")},Orange:{Text:Ce("Validation.Orange.Text"),Icon:Ce("Validation.Orange.Icon"),Border:Ce("Validation.Orange.Border"),Background:Ce("Validation.Orange.Background"),Badge:Ce("Validation.Orange.Badge")},Red:{Text:Ce("Validation.Red.Text"),Icon:Ce("Validation.Red.Icon"),Border:Ce("Validation.Red.Border"),Background:Ce("Validation.Red.Background")},Blue:{Text:Ce("Validation.Blue.Text"),Icon:Ce("Validation.Blue.Icon"),Border:Ce("Validation.Blue.Border"),Background:Ce("Validation.Blue.Background")}},Shadow:{Accent:Ce("Shadow.Accent"),Red:Ce("Shadow.Red"),Elevation:Ce("Shadow.Elevation")}},be={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},De={collections:{base:{D1:{fontFamily:be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=$e(De,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?me(r,t,n.options.textStyle):me(r,t)},we={D1:{fontFamily:Be("D1.fontFamily"),fontSize:Be("D1.fontSize"),fontWeight:Be("D1.fontWeight"),lineHeight:Be("D1.lineHeight"),letterSpacing:Be("D1.letterSpacing")},D2:{fontFamily:Be("D2.fontFamily"),fontSize:Be("D2.fontSize"),fontWeight:Be("D2.fontWeight"),lineHeight:Be("D2.lineHeight"),letterSpacing:Be("D2.letterSpacing")},D3:{fontFamily:Be("D3.fontFamily"),fontSize:Be("D3.fontSize"),fontWeight:Be("D3.fontWeight"),lineHeight:Be("D3.lineHeight"),letterSpacing:Be("D3.letterSpacing")},D4:{fontFamily:Be("D4.fontFamily"),fontSize:Be("D4.fontSize"),fontWeight:Be("D4.fontWeight"),lineHeight:Be("D4.lineHeight"),letterSpacing:Be("D4.letterSpacing")},DBody:{fontFamily:Be("DBody.fontFamily"),fontSize:Be("DBody.fontSize"),fontWeight:Be("DBody.fontWeight"),lineHeight:Be("DBody.lineHeight"),letterSpacing:Be("DBody.letterSpacing")},H1:{fontFamily:Be("H1.fontFamily"),fontSize:Be("H1.fontSize"),fontWeight:Be("H1.fontWeight"),lineHeight:Be("H1.lineHeight"),letterSpacing:Be("H1.letterSpacing")},H2:{fontFamily:Be("H2.fontFamily"),fontSize:Be("H2.fontSize"),fontWeight:Be("H2.fontWeight"),lineHeight:Be("H2.lineHeight"),letterSpacing:Be("H2.letterSpacing")},H3:{fontFamily:Be("H3.fontFamily"),fontSize:Be("H3.fontSize"),fontWeight:Be("H3.fontWeight"),lineHeight:Be("H3.lineHeight"),letterSpacing:Be("H3.letterSpacing")},H4:{fontFamily:Be("H4.fontFamily"),fontSize:Be("H4.fontSize"),fontWeight:Be("H4.fontWeight"),lineHeight:Be("H4.lineHeight"),letterSpacing:Be("H4.letterSpacing")},H5:{fontFamily:Be("H5.fontFamily"),fontSize:Be("H5.fontSize"),fontWeight:Be("H5.fontWeight"),lineHeight:Be("H5.lineHeight"),letterSpacing:Be("H5.letterSpacing")},H6:{fontFamily:Be("H6.fontFamily"),fontSize:Be("H6.fontSize"),fontWeight:Be("H6.fontWeight"),lineHeight:Be("H6.lineHeight"),letterSpacing:Be("H6.letterSpacing")},Body:{fontFamily:Be("Body.fontFamily"),fontSize:Be("Body.fontSize"),fontWeight:Be("Body.fontWeight"),lineHeight:Be("Body.lineHeight"),letterSpacing:Be("Body.letterSpacing")},BodySmall:{fontFamily:Be("BodySmall.fontFamily"),fontSize:Be("BodySmall.fontSize"),fontWeight:Be("BodySmall.fontWeight"),lineHeight:Be("BodySmall.lineHeight"),letterSpacing:Be("BodySmall.letterSpacing")},XSmall:{fontFamily:Be("XSmall.fontFamily"),fontSize:Be("XSmall.fontSize"),fontWeight:Be("XSmall.fontWeight"),lineHeight:Be("XSmall.lineHeight"),letterSpacing:Be("XSmall.letterSpacing")}},He=t=>{switch(t){case 700:case"bold":return be.Bold;case 600:case"semibold":return be.Semibold;case 300:case"light":return be.Light;case 400:case"regular":return be.Regular;default:return""}},_e=(t,e)=>n=>{const r=we[t].fontFamily(n),i=we[t].fontWeight(n);return Object.values(be).includes(r)?l`
                font-family: ${He(e)||He(i)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(xe(e)||i)??"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Me=(t,e,n=!1)=>r=>{const i=we[t],o=i.fontSize(r);return l`
            ${_e(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ke=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var Oe,ze={};Object.defineProperty(ze,"__esModule",{value:!0});var Ae=t;const Ne=t=>Ae.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ae.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var je;Ne.displayName="ExternalIcon",Oe=ze.ExternalIcon=Ne,function(t){t.D1=a.h1`
        ${t=>l`
                ${Me("D1",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D2=a.h1`
        ${t=>l`
                ${Me("D2",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D3=a.h1`
        ${t=>l`
                ${Me("D3",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.D4=a.h1`
        ${t=>l`
                ${Me("D4",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.DBody=a.h1`
        ${t=>l`
                ${Me("DBody",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H1=a.h1`
        ${t=>l`
                ${Me("H1",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H2=a.h2`
        ${t=>l`
                ${Me("H2",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H3=a.h3`
        ${t=>l`
                ${Me("H3",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H4=a.h4`
        ${t=>l`
                ${Me("H4",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H5=a.h5`
        ${t=>l`
                ${Me("H5",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.H6=a.h6`
        ${t=>l`
                ${Me("H6",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Body=a.p`
        ${t=>l`
                ${Me("Body",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=a.p`
        ${t=>l`
                ${Me("BodySmall",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.XSmall=a.span`
        ${t=>l`
                ${Me("XSmall",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${ke(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Te({...t,textStyle:"Body"}),Small:t=>Te({...t,textStyle:"BodySmall"})}}(je||(je={}));const Ee=a.a`
    ${t=>l`
            ${Me(t.textStyle,t.weight)}
            color: ${Fe.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Fe.Secondary};

                svg {
                    color: ${Fe.Secondary};
                }
            }
        `}
`,We=a(Oe)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Te=({external:t=!1,children:r,...i})=>e(Ee,{...i,children:[r,t&&n(We,{})]});var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Le=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${t=>{if(!t.$indicator)return l`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${t=>"no-border"===t.$styleType?t.$error?l`
                        border-color: ${Fe.Validation.Red.Icon};
                        background: ${Fe.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Fe.Shadow.Red};
                        }
                    `:t.$disabled?l`
                        border-color: transparent;
                    `:l`
                        border-color: transparent;

                        :hover {
                            background: ${Fe.Accent.Light[6]};
                        }
                    `:t.$disabled&&!t.$selected?l`
                        background: ${Fe.Neutral[6]};
                        border-color: ${Fe.Neutral[5]};
                    `:t.$disabled&&t.$selected?l`
                        background: ${Fe.Neutral[6]};
                        border-color: ${Fe.Neutral[4]};
                    `:t.$error?l`
                        background: ${Fe.Neutral[8]};
                        border-color: ${Fe.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Fe.Shadow.Red};
                        }
                    `:t.$selected?l`
                        background: ${Fe.Accent.Light[5]};
                        border-color: ${Fe.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Fe.Shadow.Accent};
                        }
                    `:l`
                        background: ${Fe.Neutral[8]};
                        border-color: ${Fe.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Fe.Shadow.Accent};
                            border-color: ${Fe.Accent.Light[1]};
                        }
                    `}
`,Ve=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Pe=a.div`
    display: flex;
    flex-direction: column;
`,Re=a.label`
    ${t=>t.$selected&&!t.$indicator?l`
                ${Me("H4","semibold")}
            `:l`
                ${Me("H4","regular")}
            `}

    color: ${Fe.Neutral[1]};

    ${t=>t.$disabled?l`
                color: ${Fe.Neutral[3](t)};
            `:t.$selected?l`
                color: ${Fe.Primary(t)};
            `:void 0}
`;var Ye,Ze={};Object.defineProperty(Ze,"__esModule",{value:!0});var Xe=t;const Ge=t=>Xe.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Xe.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Ge.displayName="CircleIcon",Ye=Ze.CircleIcon=Ge;var Ue,qe={};Object.defineProperty(qe,"__esModule",{value:!0});var Je=t;const Qe=t=>Je.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Je.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Qe.displayName="CircleDotIcon",Ue=qe.CircleDotIcon=Qe;var Ke,tn={};Object.defineProperty(tn,"__esModule",{value:!0});var en=t;const nn=t=>en.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:en.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});nn.displayName="CrossIcon",Ke=tn.CrossIcon=nn;var rn,on={};Object.defineProperty(on,"__esModule",{value:!0});var an=t;const ln=t=>an.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:an.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});ln.displayName="SquareIcon",rn=on.SquareIcon=ln;var cn,sn={};Object.defineProperty(sn,"__esModule",{value:!0});var un=t;const hn=t=>un.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:un.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});hn.displayName="SquareTickFillIcon",cn=sn.SquareTickFillIcon=hn;var dn,fn={};Object.defineProperty(fn,"__esModule",{value:!0});var gn=t;const pn=t=>gn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:gn.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});pn.displayName="TickIcon",dn=fn.TickIcon=pn;const yn=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${t=>t.$active&&!t.disabled?l`
                    color: ${Fe.Primary};
                `:l`
                    color: ${Fe.Neutral[4]};
                `};
    }
`,mn=({type:t,active:e=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=n(e?cn:rn,{});break;case"radio":o=n(e?Ue:Ye,{});break;case"tick":o=n(dn,{});break;case"cross":o=n(Ke,{});break;default:o=null}return n(yn,{className:i,$active:e,disabled:r,children:o})};var $n={exports:{}};$n.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",c="week",s="month",u="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,a=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:h,w:c,d:l,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=y;var C=function(t){return t instanceof B},F=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&(v=i),i||!r&&v},b=function(t,e){if(C(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new B(n)},D=$;D.l=F,D.i=C,D.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var B=function(){function y(t){this.$L=F(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return b(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<b(t)},m.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!D.u(e)||e,u=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},g=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,y=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case h:return r?f(1,0):f(31,11);case s:return r?f(1,y):f(0,y+1);case c:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(r?m-S:m+(6-S),y);case l:case d:return g($+"Hours",0);case a:return g($+"Minutes",1);case o:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=D.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[d]=u+"Date",n[s]=u+"Month",n[h]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===s||c===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(r,u){var d,f=this;r=Number(r);var g=D.p(u),p=function(t){var e=b(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if(g===s)return this.set(s,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===l)return p(1);if(g===c)return p(7);var y=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,m=this.$d.getTime()+r*y;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,l=this.$M,c=n.weekdays,s=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return D.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:D.s(l+1,2,"0"),MMM:u(n.monthsShort,l,s,3),MMMM:u(s,l),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:D.s(o,2,"0"),h:h(1),hh:h(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,f){var g,p=D.p(d),y=b(r),m=(y.utcOffset()-this.utcOffset())*e,$=this-y,v=D.m(this,y);return v=(g={},g[h]=v/12,g[s]=v,g[u]=v/3,g[c]=($-m)/6048e5,g[l]=($-m)/864e5,g[a]=$/n,g[o]=$/e,g[i]=$/t,g)[p]||$,f?v:D.a(v)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return S[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=F(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),w=B.prototype;return b.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",s],["$y",h],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,B,b),t.$i=!0),b},b.locale=F,b.isDayjs=C,b.unix=function(t){return b(1e3*t)},b.en=S[v],b.Ls=S,b.p={},b}();var vn,Sn=$n.exports;!function(t){t.generateDays=t=>{const e=t.startOf("month"),n=Sn(e).startOf("week");return Cn(n).map((t=>Fn(t)))},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(Sn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+Sn(`${e+9}-01-01`).format("YYYY")}}}(vn||(vn={}));const Cn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Fn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},bn=[1,3,5,7,8,10,12],Dn=[4,6,9,11];var Bn,wn,Hn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":bn.includes(o)?Math.min(i,31).toString():Dn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=Sn(t,n);return Sn(e,n).diff(r,"minute")}}(Bn||(Bn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(wn||(wn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let i=0;e>n&&(i=Math.floor((e-n)/8));const o=r+i;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(Hn||(Hn={}));const _n=({type:t="checkbox",indicator:a,checked:l,styleType:c="default",children:s,disabled:u,error:h,name:d,id:f,className:g,"data-testid":p,onChange:y})=>{const[m,$]=r(l),[v]=r(wn.generate()),S=f?`${f}-input`:`tg-${v}-input`,C=i();o((()=>{$(l)}),[l]);return e(Le,{$selected:m,$disabled:u,className:g,$styleType:c,$error:h,$indicator:a,id:f,"data-testid":p,children:[a&&(()=>{let e;switch(t){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=t}return n(mn,{type:e,active:m,disabled:u})})(),n(Ve,{ref:C,name:d,id:S,type:"checkbox"===t?"checkbox":"radio","data-testid":"toggle-input",disabled:u,onChange:e=>{if(!u){switch(t){case"checkbox":m||$((t=>!t));break;case"radio":case"yes":case"no":m||$(!0)}y&&y(e)}},checked:m}),n(Pe,{children:n(Re,{htmlFor:S,$selected:m,$indicator:a,$disabled:u,"data-testid":"toggle-label",children:s})})]})};export{_n as Toggle};
//# sourceMappingURL=index.js.map
