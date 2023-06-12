import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as i,useEffect as o}from"react";import a,{css as s}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,u="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,d=u||h||Function("return this")(),f=d.Symbol,g=f,p=Object.prototype,m=p.hasOwnProperty,y=p.toString,v=g?g.toStringTag:void 0;var $=function(t){var e=m.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[v]=n:delete t[v]),i},S=Object.prototype.toString;var F=$,C=function(t){return S.call(t)},D=f?f.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?F(t):C(t)};var b=B,w=function(t){return null!=t&&"object"==typeof t};var x=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==b(t)},H=c,M=x,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var k=function(t,e){if(H(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!M(t))||(O.test(t)||!_.test(t)||null!=e&&t in Object(e))};var A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},z=B,E=A;var L,T=function(t){if(!E(t))return!1;var e=z(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},W=d["__core-js_shared__"],Y=(L=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var I=function(t){return!!Y&&Y in t},j=Function.prototype.toString;var V=T,R=I,N=A,Z=function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""},P=/^\[object .+?Constructor\]$/,U=Function.prototype,X=Object.prototype,G=U.toString,q=X.hasOwnProperty,J=RegExp("^"+G.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!N(t)||R(t))&&(V(t)?J:P).test(Z(t))},K=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=K(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var rt=function(){this.__data__=nt?nt(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=et,at=Object.prototype.hasOwnProperty;var st=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},lt=et,ct=Object.prototype.hasOwnProperty;var ut=et;var ht=rt,dt=it,ft=st,gt=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=ht,mt.prototype.delete=dt,mt.prototype.get=ft,mt.prototype.has=gt,mt.prototype.set=pt;var yt=mt;var vt=function(){this.__data__=[],this.size=0};var $t=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if($t(t[n][0],e))return n;return-1},Ft=St,Ct=Array.prototype.splice;var Dt=St;var Bt=St;var bt=St;var wt=vt,xt=function(t){var e=this.__data__,n=Ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ct.call(e,n,1),--this.size,!0)},Ht=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},Mt=function(t){return Bt(this.__data__,t)>-1},_t=function(t,e){var n=this.__data__,r=bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=wt,Ot.prototype.delete=xt,Ot.prototype.get=Ht,Ot.prototype.has=Mt,Ot.prototype.set=_t;var kt=Ot,At=tt(d,"Map"),zt=yt,Et=kt,Lt=At;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Wt=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},Yt=Wt;var It=Wt;var jt=Wt;var Vt=Wt;var Rt=function(){this.size=0,this.__data__={hash:new zt,map:new(Lt||Et),string:new zt}},Nt=function(t){var e=Yt(this,t).delete(t);return this.size-=e?1:0,e},Zt=function(t){return It(this,t).get(t)},Pt=function(t){return jt(this,t).has(t)},Ut=function(t,e){var n=Vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xt.prototype.clear=Rt,Xt.prototype.delete=Nt,Xt.prototype.get=Zt,Xt.prototype.has=Pt,Xt.prototype.set=Ut;var Gt=Xt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(qt.Cache||Gt),n}qt.Cache=Gt;var Jt=qt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,te=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,i){e.push(r?i.replace(Kt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ne=c,re=x,ie=f?f.prototype:void 0,oe=ie?ie.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(re(e))return oe?oe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},se=ae;var le=c,ce=k,ue=te,he=function(t){return null==t?"":se(t)};var de=x;var fe=function(t,e){return le(t)?t:ce(t,e)?[t]:ue(he(t))},ge=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[ge(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,ve=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var $e;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($e||($e={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Fe=t=>e=>{const n=e.theme,r=ve(Se,n[$e.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},Ce=(Fe("Brand.1"),Fe("Brand.2"),Fe("Brand.3"),Fe("Brand.4"),Fe("Brand.5"),Fe("Brand.6"),Fe("Primary")),De=(Fe("PrimaryDark"),Fe("Secondary")),Be={Light:{1:Fe("Accent.Light.1"),2:Fe("Accent.Light.2"),3:Fe("Accent.Light.3"),4:Fe("Accent.Light.4"),5:Fe("Accent.Light.5"),6:Fe("Accent.Light.6")},Dark:{1:Fe("Accent.Dark.1"),2:Fe("Accent.Dark.2"),3:Fe("Accent.Dark.3")}},be={1:Fe("Neutral.1"),2:Fe("Neutral.2"),3:Fe("Neutral.3"),4:Fe("Neutral.4"),5:Fe("Neutral.5"),6:Fe("Neutral.6"),7:Fe("Neutral.7"),8:Fe("Neutral.8")},we={Green:{Text:Fe("Validation.Green.Text"),Icon:Fe("Validation.Green.Icon"),Border:Fe("Validation.Green.Border"),Background:Fe("Validation.Green.Background")},Orange:{Text:Fe("Validation.Orange.Text"),Icon:Fe("Validation.Orange.Icon"),Border:Fe("Validation.Orange.Border"),Background:Fe("Validation.Orange.Background"),Badge:Fe("Validation.Orange.Badge")},Red:{Text:Fe("Validation.Red.Text"),Icon:Fe("Validation.Red.Icon"),Border:Fe("Validation.Red.Border"),Background:Fe("Validation.Red.Background")},Blue:{Text:Fe("Validation.Blue.Text"),Icon:Fe("Validation.Blue.Icon"),Border:Fe("Validation.Blue.Border"),Background:Fe("Validation.Blue.Background")}},xe={Accent:Fe("Shadow.Accent"),Red:Fe("Shadow.Red"),Elevation:Fe("Shadow.Elevation")},He={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Me={collections:{base:{D1:{fontFamily:He.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:He.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:He.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:He.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:He.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:He.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:He.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:He.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:He.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:He.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_e=t=>e=>{const n=e.theme,r=ve(Me,n[$e.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},Oe={D1:{fontFamily:_e("D1.fontFamily"),fontSize:_e("D1.fontSize"),fontWeight:_e("D1.fontWeight"),lineHeight:_e("D1.lineHeight"),letterSpacing:_e("D1.letterSpacing")},D2:{fontFamily:_e("D2.fontFamily"),fontSize:_e("D2.fontSize"),fontWeight:_e("D2.fontWeight"),lineHeight:_e("D2.lineHeight"),letterSpacing:_e("D2.letterSpacing")},D3:{fontFamily:_e("D3.fontFamily"),fontSize:_e("D3.fontSize"),fontWeight:_e("D3.fontWeight"),lineHeight:_e("D3.lineHeight"),letterSpacing:_e("D3.letterSpacing")},D4:{fontFamily:_e("D4.fontFamily"),fontSize:_e("D4.fontSize"),fontWeight:_e("D4.fontWeight"),lineHeight:_e("D4.lineHeight"),letterSpacing:_e("D4.letterSpacing")},DBody:{fontFamily:_e("DBody.fontFamily"),fontSize:_e("DBody.fontSize"),fontWeight:_e("DBody.fontWeight"),lineHeight:_e("DBody.lineHeight"),letterSpacing:_e("DBody.letterSpacing")},H1:{fontFamily:_e("H1.fontFamily"),fontSize:_e("H1.fontSize"),fontWeight:_e("H1.fontWeight"),lineHeight:_e("H1.lineHeight"),letterSpacing:_e("H1.letterSpacing")},H2:{fontFamily:_e("H2.fontFamily"),fontSize:_e("H2.fontSize"),fontWeight:_e("H2.fontWeight"),lineHeight:_e("H2.lineHeight"),letterSpacing:_e("H2.letterSpacing")},H3:{fontFamily:_e("H3.fontFamily"),fontSize:_e("H3.fontSize"),fontWeight:_e("H3.fontWeight"),lineHeight:_e("H3.lineHeight"),letterSpacing:_e("H3.letterSpacing")},H4:{fontFamily:_e("H4.fontFamily"),fontSize:_e("H4.fontSize"),fontWeight:_e("H4.fontWeight"),lineHeight:_e("H4.lineHeight"),letterSpacing:_e("H4.letterSpacing")},H5:{fontFamily:_e("H5.fontFamily"),fontSize:_e("H5.fontSize"),fontWeight:_e("H5.fontWeight"),lineHeight:_e("H5.lineHeight"),letterSpacing:_e("H5.letterSpacing")},H6:{fontFamily:_e("H6.fontFamily"),fontSize:_e("H6.fontSize"),fontWeight:_e("H6.fontWeight"),lineHeight:_e("H6.lineHeight"),letterSpacing:_e("H6.letterSpacing")},Body:{fontFamily:_e("Body.fontFamily"),fontSize:_e("Body.fontSize"),fontWeight:_e("Body.fontWeight"),lineHeight:_e("Body.lineHeight"),letterSpacing:_e("Body.letterSpacing")},BodySmall:{fontFamily:_e("BodySmall.fontFamily"),fontSize:_e("BodySmall.fontSize"),fontWeight:_e("BodySmall.fontWeight"),lineHeight:_e("BodySmall.lineHeight"),letterSpacing:_e("BodySmall.letterSpacing")},XSmall:{fontFamily:_e("XSmall.fontFamily"),fontSize:_e("XSmall.fontSize"),fontWeight:_e("XSmall.fontWeight"),lineHeight:_e("XSmall.lineHeight"),letterSpacing:_e("XSmall.letterSpacing")}},ke=t=>{switch(t){case 700:case"bold":return He.Bold;case 600:case"semibold":return He.Semibold;case 300:case"light":return He.Light;case 400:case"regular":return He.Regular;default:return""}},Ae=(t,e)=>n=>{const r=Oe[t].fontFamily(n),i=Oe[t].fontWeight(n);return Object.values(He).includes(r)?s`
                font-family: ${ke(e)||ke(i)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${(ze(e)||i)??"normal"};
        `},ze=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=Ae,Le=(t,e,n=!1)=>r=>{const i=Oe[t],o=i.fontSize(r);return s`
            ${Ae(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Te=(t=!1,e=!1)=>e?s`
            display: block;
        `:t?s`
            display: inline;
        `:s`
            display: block;
        `;var We,Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});var Ie=t;const je=t=>Ie.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ie.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ve;je.displayName="ExternalIcon",We=Ye.ExternalIcon=je,function(t){t.D1=a.h1`
        ${t=>s`
                ${Le("D1",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D2=a.h1`
        ${t=>s`
                ${Le("D2",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D3=a.h1`
        ${t=>s`
                ${Le("D3",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D4=a.h1`
        ${t=>s`
                ${Le("D4",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.DBody=a.h1`
        ${t=>s`
                ${Le("DBody",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H1=a.h1`
        ${t=>s`
                ${Le("H1",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H2=a.h2`
        ${t=>s`
                ${Le("H2",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H3=a.h3`
        ${t=>s`
                ${Le("H3",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H4=a.h4`
        ${t=>s`
                ${Le("H4",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H5=a.h5`
        ${t=>s`
                ${Le("H5",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H6=a.h6`
        ${t=>s`
                ${Le("H6",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.Body=a.p`
        ${t=>s`
                ${Le("Body",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=a.p`
        ${t=>s`
                ${Le("BodySmall",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.XSmall=a.span`
        ${t=>s`
                ${Le("XSmall",t.weight,t.paragraph)}
                color: ${be[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ze({...t,textStyle:"Body"}),Small:t=>Ze({...t,textStyle:"BodySmall"})}}(Ve||(Ve={}));const Re=a.a`
    ${t=>s`
            ${Le(t.textStyle,t.weight)}
            color: ${Ce};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${De};

                svg {
                    color: ${De};
                }
            }
        `}
`,Ne=a(We)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ze=({external:t=!1,children:r,...i})=>e(Re,{...i,children:[r,t&&n(Ne,{})]});var Pe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Pe||(Pe={}));const Ue=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${t=>{if(!t.$indicator)return s`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${t=>"no-border"===t.$styleType?t.$error?s`
                        border-color: ${we.Red.Icon};
                        background: ${be[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xe.Red};
                        }
                    `:t.$disabled?s`
                        border-color: transparent;
                    `:s`
                        border-color: transparent;

                        :hover {
                            background: ${Be.Light[6]};
                        }
                    `:t.$disabled&&!t.$selected?s`
                        background: ${be[6]};
                        border-color: ${be[5]};
                    `:t.$disabled&&t.$selected?s`
                        background: ${be[6]};
                        border-color: ${be[4]};
                    `:t.$error?s`
                        background: ${be[8]};
                        border-color: ${we.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xe.Red};
                        }
                    `:t.$selected?s`
                        background: ${Be.Light[5]};
                        border-color: ${Ce};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xe.Accent};
                        }
                    `:s`
                        background: ${be[8]};
                        border-color: ${be[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${xe.Accent};
                            border-color: ${Be.Light[1]};
                        }
                    `}
`,Xe=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Ge=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,qe=a.label`
    ${t=>t.$selected&&!t.$indicator?s`
                ${Le("H4","semibold")}
            `:s`
                ${Le("H4","regular")}
            `}

    color: ${be[1]};

    ${t=>t.$disabled?s`
                color: ${be[3]};
            `:t.$selected?s`
                color: ${Ce};
            `:void 0}
`,Je=a.div`
    ${Le("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Ee("BodySmall","semibold")}
        color: inherit;
    }

    ${t=>t.$disabled?s`
                color: ${be[3]};
            `:t.$selected?s`
                color: ${Ce};
            `:s`
                color: ${be[1]};
            `}
`;var Qe,Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});var tn=t;const en=t=>tn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:tn.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});en.displayName="CircleIcon",Qe=Ke.CircleIcon=en;var nn,rn={};Object.defineProperty(rn,"__esModule",{value:!0});var on=t;const an=t=>on.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:on.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});an.displayName="CircleDotIcon",nn=rn.CircleDotIcon=an;var sn,ln={};Object.defineProperty(ln,"__esModule",{value:!0});var cn=t;const un=t=>cn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:cn.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});un.displayName="CrossIcon",sn=ln.CrossIcon=un;var hn,dn={};Object.defineProperty(dn,"__esModule",{value:!0});var fn=t;const gn=t=>fn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:fn.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});gn.displayName="SquareIcon",hn=dn.SquareIcon=gn;var pn,mn={};Object.defineProperty(mn,"__esModule",{value:!0});var yn=t;const vn=t=>yn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:yn.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});vn.displayName="SquareTickFillIcon",pn=mn.SquareTickFillIcon=vn;var $n,Sn={};Object.defineProperty(Sn,"__esModule",{value:!0});var Fn=t;const Cn=t=>Fn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Fn.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Cn.displayName="TickIcon",$n=Sn.TickIcon=Cn;const Dn=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${t=>t.$active&&!t.disabled?s`
                    color: ${Ce};
                `:s`
                    color: ${be[4]};
                `};
    }
`,Bn=({type:t,active:e=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=n(e?pn:hn,{});break;case"radio":o=n(e?nn:Qe,{});break;case"tick":o=n($n,{});break;case"cross":o=n(sn,{});break;default:o=null}return n(Dn,{className:i,$active:e,disabled:r,children:o})};var bn={exports:{}};bn.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function d(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=h[c],d=u&&u[0],f=u&&u[1];a[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,h=a[2];c&&(h=a[2]),o=this.$locale(),!l&&h&&(o=n.Ls[h]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,h=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,$=c||0,S=u||0;return h?new Date(Date.UTC(p,m,g,y,v,$,S+60*h.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(t){return new Date("")}}(e,s,r),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var wn=bn.exports,xn={exports:{}};xn.exports=function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,i){var o,a=function(t,n,r){void 0===r&&(r={});var i=new Date(t),o=function(t,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=t+"|"+r,o=e[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),e[i]=o),o}(n,r);return o.formatToParts(i)},s=function(e,n){for(var r=a(e,n),o=[],s=0;s<r.length;s+=1){var l=r[s],c=l.type,u=l.value,h=t[c];h>=0&&(o[h]=parseInt(u,10))}var d=o[3],f=24===d?0:d,g=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(i.utc(g).valueOf()-(p-=p%1e3))/6e4},l=r.prototype;l.tz=function(t,e){void 0===t&&(t=o);var n=this.utcOffset(),r=this.toDate(),a=r.toLocaleString("en-US",{timeZone:t}),s=Math.round((r-new Date(a))/1e3/60),l=i(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(n-c,"minute")}return l.$x.$timezone=t,l},l.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var c=l.startOf;l.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var r=n&&e,a=n||e||o,l=s(+i(),a);if("string"!=typeof t)return i(t).tz(a);var c=function(t,e,n){var r=t-60*e*1e3,i=s(r,n);if(e===i)return[r,e];var o=s(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(t,r).valueOf(),l,a),u=c[0],h=c[1],d=i(u).utcOffset(h);return d.$x.$timezone=a,d},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){o=t}}}();var Hn=xn.exports,Mn={exports:{}};Mn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:s,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var F=function(t){return t instanceof b},C=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&($=i),i||!r&&$},D=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},B=v;B.l=C,B.i=F,B.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=C(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,u=B.p(t),f=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case h:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return f(r?y-S:y+(6-S),m);case s:case d:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=B.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[h]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,u){var d,f=this;r=Number(r);var g=B.p(u),p=function(t){var e=D(f);return B.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return B.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:h(1),hh:h(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,f){var g,p=B.p(d),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=B.m(this,m);return $=(g={},g[h]=$/12,g[c]=$,g[u]=$/3,g[l]=(v-y)/6048e5,g[s]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=C(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=b.prototype;return D.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",h],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,b,D),t.$i=!0),D},D.locale=C,D.isDayjs=F,D.unix=function(t){return D(1e3*t)},D.en=S[$],D.Ls=S,D.p={},D}();var _n=Mn.exports,On={exports:{}};On.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var kn=On.exports,An={exports:{}};An.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var zn=An.exports,En={exports:{}};En.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Ln,Tn=En.exports;_n.extend(kn),_n.extend(zn),_n.extend(Tn),_n.extend(wn),_n.extend(Hn),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=_n(e).startOf("week");return Wn(n).map((t=>Yn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Yn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(_n(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+_n(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=_n(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(Ln||(Ln={}));const Wn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Yn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},In=[1,3,5,7,8,10,12],jn=[4,6,9,11];var Vn,Rn,Nn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":In.includes(o)?Math.min(i,31).toString():jn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=_n(t,n);return _n(e,n).diff(r,"minute")}}(Vn||(Vn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Rn||(Rn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let i=0;e>n&&(i=Math.floor((e-n)/8));const o=r+i;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(Nn||(Nn={}));const Zn=({type:t="checkbox",indicator:a,checked:s,styleType:l="default",children:c,subLabel:u,disabled:h,error:d,name:f,id:g,className:p,"data-testid":m,onChange:y})=>{const[v,$]=r(s),[S]=r(Rn.generate()),F=g?`${g}-input`:`tg-${S}-input`,C=i();o((()=>{$(s)}),[s]);return e(Ue,{$selected:v,$disabled:h,className:p,$styleType:l,$error:d,$indicator:a,id:g,"data-testid":m,children:[a&&(()=>{let e;switch(t){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=t}return n(Bn,{type:e,active:v,disabled:h})})(),n(Xe,{ref:C,name:f,id:F,type:"checkbox"===t?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:e=>{if(!h){if(y)return void y(e);switch(t){case"checkbox":$((t=>!t));break;case"radio":case"yes":case"no":v||$(!0)}}},checked:v}),e(Ge,{children:[n(qe,{htmlFor:F,$selected:v,$indicator:a,$disabled:h,"data-testid":"toggle-label",children:c}),u&&(()=>{if(!u)return null;let t;return"string"==typeof u?t=u:"function"==typeof u&&(t=u()),n(Je,{$disabled:h,$selected:v,children:t})})()]})]})};export{Zn as Toggle};
//# sourceMappingURL=index.js.map
