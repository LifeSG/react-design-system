import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r,{useState as o,useRef as i,useEffect as a}from"react";import l,{css as d}from"styled-components";var c;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(c||(c={}));var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,s="object"==typeof u&&u&&u.Object===Object&&u,g="object"==typeof self&&self&&self.Object===Object&&self,p=s||g||Function("return this")(),f=p.Symbol,y=f,m=Object.prototype,v=m.hasOwnProperty,b=m.toString,F=y?y.toStringTag:void 0;var S=function(e){var t=v.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch(e){}var o=b.call(e);return r&&(t?e[F]=n:delete e[F]),o},$=Object.prototype.toString;var B=S,w=function(e){return $.call(e)},H=f?f.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?B(e):w(e)};var D=x,C=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==D(e)},z=h,k=_,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var N=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!k(e))||(E.test(e)||!O.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,L=A;var j,V=function(e){if(!L(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=p["__core-js_shared__"],I=(j=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var T=function(e){return!!I&&I in e},P=Function.prototype.toString;var G=V,M=T,X=A,Z=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,K=Function.prototype,q=Object.prototype,J=K.toString,Q=q.hasOwnProperty,Y=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!X(e)||M(e))&&(G(e)?Y:U).test(Z(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),oe=re;var ie=function(){this.__data__=oe?oe(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,de=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},ue=re,he=Object.prototype.hasOwnProperty;var se=re;var ge=ie,pe=ae,fe=ce,ye=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ge,ve.prototype.delete=pe,ve.prototype.get=fe,ve.prototype.has=ye,ve.prototype.set=me;var be=ve;var Fe=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var $e=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},Be=$e,we=Array.prototype.splice;var He=$e;var xe=$e;var De=$e;var Ce=Fe,_e=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},ke=function(e){return xe(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=Ce,Ee.prototype.delete=_e,Ee.prototype.get=ze,Ee.prototype.has=ke,Ee.prototype.set=Oe;var Ne=Ee,Ae=ne(p,"Map"),We=be,Le=Ne,je=Ae;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Re;var Te=Re;var Pe=Re;var Ge=Re;var Me=function(){this.size=0,this.__data__={hash:new We,map:new(je||Le),string:new We}},Xe=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Te(this,e).get(e)},Ue=function(e){return Pe(this,e).has(e)},Ke=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Me,qe.prototype.delete=Xe,qe.prototype.get=Ze,qe.prototype.has=Ue,qe.prototype.set=Ke;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var Ye=Qe;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,o){t.push(r?o.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ot=h,it=_,at=f?f.prototype:void 0,lt=at?at.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return rt(t,e)+"";if(it(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=dt;var ut=h,ht=N,st=nt,gt=function(e){return null==e?"":ct(e)};var pt=_;var ft=function(e,t){return ut(e)?e:ht(e,t)?[e]:st(gt(e))},yt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=ft(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var vt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const bt=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(St||(St={}));const $t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=Ft($t,n[St.colorScheme]);return n.options&&n.options.color?bt(r,e,n.options.color):bt(r,e)},wt={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")}}},Ht={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Ft(xt,n[St.textStyleScheme]);return n.options&&n.options.textStyle?bt(r,e,n.options.textStyle):bt(r,e)},Ct={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},zt=(e,t)=>n=>{const r=Ct[e].fontFamily(n),o=Ct[e].fontWeight(n);return Object.values(Ht).includes(r)?d`
                font-family: ${_t(t)||_t(o)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(kt(t)||o)??"normal"};
        `},kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=(e,t,n=!1)=>r=>{const o=Ct[e],i=o.fontSize(r);return d`
            ${zt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Et=(e=!1,t=!1)=>t?d`
            display: block;
        `:e?d`
            display: inline;
        `:d`
            display: block;
        `;var Nt,At={};Object.defineProperty(At,"__esModule",{value:!0});var Wt=e;const Lt=e=>Wt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Wt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var jt;Lt.displayName="ExternalIcon",Nt=At.ExternalIcon=Lt,function(e){e.D1=l.h1`
        ${e=>d`
                ${Ot("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D2=l.h1`
        ${e=>d`
                ${Ot("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D3=l.h1`
        ${e=>d`
                ${Ot("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D4=l.h1`
        ${e=>d`
                ${Ot("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.DBody=l.h1`
        ${e=>d`
                ${Ot("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H1=l.h1`
        ${e=>d`
                ${Ot("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H2=l.h2`
        ${e=>d`
                ${Ot("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H3=l.h3`
        ${e=>d`
                ${Ot("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H4=l.h4`
        ${e=>d`
                ${Ot("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H5=l.h5`
        ${e=>d`
                ${Ot("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H6=l.h6`
        ${e=>d`
                ${Ot("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Body=l.p`
        ${e=>d`
                ${Ot("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=l.p`
        ${e=>d`
                ${Ot("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.XSmall=l.span`
        ${e=>d`
                ${Ot("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>It({...e,textStyle:"Body"}),Small:e=>It({...e,textStyle:"BodySmall"})}}(jt||(jt={}));const Vt=l.a`
    ${e=>d`
            ${Ot(e.textStyle,e.weight)}
            color: ${wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${wt.Secondary};

                svg {
                    color: ${wt.Secondary};
                }
            }
        `}
`,Rt=l(Nt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=({external:e=!1,children:r,...o})=>t(Vt,{...o,children:[r,e&&n(Rt,{})]}),Tt=l.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${wt.Neutral[5]};
    border-radius: 4px;
    background: ${wt.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0;

    :focus,
    :focus-within {
        border: 1px solid ${wt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.$readOnly?d`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?d`
                background: ${wt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${wt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${wt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Pt=l.div`
    position: absolute;
    top: 0;
    left: ${e=>e.$readOnly?"1rem":"2rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,Gt=l.input`
    ${Ot("Body","regular")}
    background: transparent;
    height: 100%;
    width: 3rem;
    border: none;
    text-align: center;
    padding: 0;

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    :focus,
    :active {
        outline: none;
    }

    ${e=>{if(e.disabled)return d`
                cursor: not-allowed;
            `}}
`,Mt=l(Gt)`
    width: 4.5rem;
`,Xt=l(jt.Body)`
    margin-left: 0.1rem;
    ${e=>{if(e.$hide)return d`
                color: ${wt.Neutral[3]};
            `}}
`;var Zt,Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});var Kt=e;const qt=e=>Kt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Kt.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});qt.displayName="CrossIcon",Zt=Ut.CrossIcon=qt;const Jt=l.div`
    ${Ot("Body","regular")}
    border: 1px solid ${wt.Neutral[5]};
    border-radius: 4px;
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background: ${wt.Neutral[8]};
    color: ${wt.Neutral[1]};

    :focus-within {
        outline: none;
        border: 1px solid ${wt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${wt.Neutral[3]};
    }

    ${e=>{if("number"===e.type)return d`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `}}

    ${e=>e.readOnly?d`
                border: none;
                padding: 0.2rem 0 0.3rem;
                background: transparent !important;
                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?d`
                background: ${wt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    outline: none;
                    border: 1px solid ${wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?d`
                border: 1px solid ${wt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${wt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Qt=l.input`
    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;

    ${Ot("Body","regular")}
    padding: 0.2rem 1rem 0.3rem; // Somehow the input text appears lower

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`,Yt=l.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    cursor: pointer;

    color: ${wt.Neutral[3]};
    background-color: transparent;
    border: none;
`,en=l(Zt)`
    height: 1.25rem;
    width: 1.25rem;
`,tn=r.forwardRef((({value:e,spacing:r,type:o,error:i,disabled:a,readOnly:l,onChange:d,onClear:u,allowClear:h=!1,...s},g)=>{const p=()=>"tel"===o&&r,f=e=>{const t=e.target,n=t.value,r=t.value.replace(/\s/g,"");t.value=r,d(e),t.value=n},y=e?(e=>e?p()?c.transformWithSpaces(e,r):e:"")(e):e,m=d?e=>{p()?f(e):d(e)}:void 0,v=h&&!a&&!l&&!i;return t(Jt,{error:i,disabled:a,readOnly:l,...s,children:[n(Qt,{"data-testid":"input",ref:g,disabled:a,value:y,error:i,onChange:m,type:o,readOnly:l,...s}),v&&n(Yt,{onClick:()=>{u&&u()},children:n(en,{})})]})}));var nn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nn||(nn={})),l.div`
    display: flex;
    position: relative;
    border: 1px solid ${wt.Neutral[5]};
    border-radius: 4px;
    background: ${wt.Neutral[8]};
    height: 3rem;
    width: 100%;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${wt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.$readOnly?d`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?d`
                background: ${wt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${wt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${wt.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,l(tn)`
    // overwrite default styles
    background: transparent;
    border: none;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ${e=>"right"===e.$position?d`
                    :not(:only-child) {
                        padding-right: 0;
                    }
                `:d`
                    padding: unset;
                    :not(:only-child) {
                        padding-left: 0;
                    }
                `}
`;const rn=l.div`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;

    ${Ot("Body","regular")}
    color: ${wt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${wt.Neutral[1]};
        }
    }

    ${e=>e.$readOnly?d`
                padding-left: 0rem;
            `:e.disabled?d`
                color: ${wt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${wt.Neutral[4](e)};
                    }
                }
            `:void 0}
`,on=({disabled:e,error:r,value:l,onChange:d,onBlur:u,onChangeRaw:h,onBlurRaw:s,readOnly:g,placeholder:p="00-8888",...f})=>{const[y,m]=o(""),[v,b]=o(""),[F,S]=o("none"),$=i(null),B=i(null),w=i(null),H=i(y),x=i(v),D=i(F),C=e=>{H.current=e,m(e)},_=e=>{x.current=e,b(e)},z=e=>{D.current=e,S(e)};a((()=>(document.addEventListener("mousedown",k),$.current&&$.current.addEventListener("keydown",O),()=>{document.removeEventListener("mousedown",k),$.current&&$.current.removeEventListener("keydown",O)})),[F]),a((()=>{"floor"===F&&3===y.length&&w.current&&w.current.focus()}),[y]),a((()=>{L(l)}),[l]);const k=t=>{e||g||$&&$.current.contains(t.target)||"none"!==D.current&&(z("none"),V())},O=e=>{"unit"===e.target.name&&"Tab"===e.code&&(z("none"),V())},E=e=>{z(e.target.name),e.target.select()},N=e=>{const t=e.target.name,n=e.target.value;"floor"===t?C(W(n)):_(W(n))},A=e=>{const t=e.target.name,n=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(C(n),j(n,t)):(_(n),j(n,t))},W=e=>/^[0-9]$/.test(e)?c.padValue(e,!0):e.toLocaleUpperCase(),L=e=>{if(e!==an)if(void 0===e||0===e.length)C(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];C("floor"===F?e:W(e)),_("unit"===F?n:W(n))}}},j=(e,t)=>{if(!d&&!h)return;const n={floor:H.current,unit:x.current};if(n[t]=e,d){const e=R(n);d(e)}h&&h([n.floor,n.unit])},V=()=>{if(!u&&!s)return;const e={floor:W(H.current),unit:W(x.current)};if(u){const t=R(e);u(t)}s&&s([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":an},I=e=>e.split("-");return t(Tt,{ref:$,onClick:()=>{"none"===F&&B.current&&B.current.focus()},disabled:e,$error:r,$readOnly:g,"data-testid":f["data-testid"],children:[n(rn,{"data-testid":"addon",disabled:e,$readOnly:g,children:"#"}),t(Pt,{$readOnly:g,children:[n(Gt,{name:"floor",maxLength:3,value:y,ref:B,onFocus:E,onBlur:N,onChange:A,disabled:e,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==F||g?I(p)[0]:""}),n(Xt,{$hide:0===y.length,children:"-"}),n(Mt,{name:"unit",maxLength:5,value:v,ref:w,onFocus:E,onBlur:N,onChange:A,onKeyDown:e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===F&&0===v.length&&B.current.focus()},disabled:e,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==F||g?I(p)[1]:""})]})]})},an="Invalid unit number";export{on as UnitNumberInput};
//# sourceMappingURL=index.js.map
