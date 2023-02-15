import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r,{useState as o,useRef as a,useEffect as i}from"react";import l,{css as d}from"styled-components";var c;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(c||(c={}));var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,s="object"==typeof u&&u&&u.Object===Object&&u,g="object"==typeof self&&self&&self.Object===Object&&self,p=s||g||Function("return this")(),f=p.Symbol,y=f,m=Object.prototype,v=m.hasOwnProperty,S=m.toString,b=y?y.toStringTag:void 0;var F=function(e){var t=v.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var o=S.call(e);return r&&(t?e[b]=n:delete e[b]),o},$=Object.prototype.toString;var w=F,B=function(e){return $.call(e)},H=f?f.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?w(e):B(e)};var D=x,C=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==D(e)},k=h,z=_,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var N=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(O.test(e)||!E.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,L=A;var V,j=function(e){if(!L(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=p["__core-js_shared__"],T=(V=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var I=function(e){return!!T&&T in e},P=Function.prototype.toString;var G=j,M=I,X=A,Z=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,K=Function.prototype,q=Object.prototype,J=K.toString,Q=q.hasOwnProperty,Y=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!X(e)||M(e))&&(G(e)?Y:U).test(Z(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),oe=re;var ae=function(){this.__data__=oe?oe(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,de=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},ue=re,he=Object.prototype.hasOwnProperty;var se=re;var ge=ae,pe=ie,fe=ce,ye=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ge,ve.prototype.delete=pe,ve.prototype.get=fe,ve.prototype.has=ye,ve.prototype.set=me;var Se=ve;var be=function(){this.__data__=[],this.size=0};var Fe=function(e,t){return e===t||e!=e&&t!=t};var $e=function(e,t){for(var n=e.length;n--;)if(Fe(e[n][0],t))return n;return-1},we=$e,Be=Array.prototype.splice;var He=$e;var xe=$e;var De=$e;var Ce=be,_e=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():Be.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},ze=function(e){return xe(this.__data__,e)>-1},Ee=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=Ce,Oe.prototype.delete=_e,Oe.prototype.get=ke,Oe.prototype.has=ze,Oe.prototype.set=Ee;var Ne=Oe,Ae=ne(p,"Map"),We=Se,Le=Ne,Ve=Ae;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Te=Re;var Ie=Re;var Pe=Re;var Ge=Re;var Me=function(){this.size=0,this.__data__={hash:new We,map:new(Ve||Le),string:new We}},Xe=function(e){var t=Te(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Ie(this,e).get(e)},Ue=function(e){return Pe(this,e).has(e)},Ke=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Me,qe.prototype.delete=Xe,qe.prototype.get=Ze,qe.prototype.has=Ue,qe.prototype.set=Ke;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var Ye=Qe;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,o){t.push(r?o.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},ot=h,at=_,it=f?f.prototype:void 0,lt=it?it.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return rt(t,e)+"";if(at(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=dt;var ut=h,ht=N,st=nt,gt=function(e){return null==e?"":ct(e)};var pt=_;var ft=function(e,t){return ut(e)?e:ht(e,t)?[e]:st(gt(e))},yt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=ft(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var vt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var Ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Ft||(Ft={}));const $t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=bt($t,n[Ft.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},Bt={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red")}},Ht={collections:{base:{InputBoxShadow:d`
        inset 0 0 6px 1px ${Bt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${Bt.Shadow.Red}
    `}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=bt(Ht,n[Ft.designTokenScheme]);return n.options?.designToken?St(r,e,n.options.designToken):St(r,e)},Dt=xt("InputBoxShadow"),Ct=xt("InputErrorBoxShadow"),_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},kt={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=bt(kt,n[Ft.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},Et={D1:{fontFamily:zt("D1.fontFamily"),fontSize:zt("D1.fontSize"),fontWeight:zt("D1.fontWeight"),lineHeight:zt("D1.lineHeight"),letterSpacing:zt("D1.letterSpacing")},D2:{fontFamily:zt("D2.fontFamily"),fontSize:zt("D2.fontSize"),fontWeight:zt("D2.fontWeight"),lineHeight:zt("D2.lineHeight"),letterSpacing:zt("D2.letterSpacing")},D3:{fontFamily:zt("D3.fontFamily"),fontSize:zt("D3.fontSize"),fontWeight:zt("D3.fontWeight"),lineHeight:zt("D3.lineHeight"),letterSpacing:zt("D3.letterSpacing")},D4:{fontFamily:zt("D4.fontFamily"),fontSize:zt("D4.fontSize"),fontWeight:zt("D4.fontWeight"),lineHeight:zt("D4.lineHeight"),letterSpacing:zt("D4.letterSpacing")},DBody:{fontFamily:zt("DBody.fontFamily"),fontSize:zt("DBody.fontSize"),fontWeight:zt("DBody.fontWeight"),lineHeight:zt("DBody.lineHeight"),letterSpacing:zt("DBody.letterSpacing")},H1:{fontFamily:zt("H1.fontFamily"),fontSize:zt("H1.fontSize"),fontWeight:zt("H1.fontWeight"),lineHeight:zt("H1.lineHeight"),letterSpacing:zt("H1.letterSpacing")},H2:{fontFamily:zt("H2.fontFamily"),fontSize:zt("H2.fontSize"),fontWeight:zt("H2.fontWeight"),lineHeight:zt("H2.lineHeight"),letterSpacing:zt("H2.letterSpacing")},H3:{fontFamily:zt("H3.fontFamily"),fontSize:zt("H3.fontSize"),fontWeight:zt("H3.fontWeight"),lineHeight:zt("H3.lineHeight"),letterSpacing:zt("H3.letterSpacing")},H4:{fontFamily:zt("H4.fontFamily"),fontSize:zt("H4.fontSize"),fontWeight:zt("H4.fontWeight"),lineHeight:zt("H4.lineHeight"),letterSpacing:zt("H4.letterSpacing")},H5:{fontFamily:zt("H5.fontFamily"),fontSize:zt("H5.fontSize"),fontWeight:zt("H5.fontWeight"),lineHeight:zt("H5.lineHeight"),letterSpacing:zt("H5.letterSpacing")},H6:{fontFamily:zt("H6.fontFamily"),fontSize:zt("H6.fontSize"),fontWeight:zt("H6.fontWeight"),lineHeight:zt("H6.lineHeight"),letterSpacing:zt("H6.letterSpacing")},Body:{fontFamily:zt("Body.fontFamily"),fontSize:zt("Body.fontSize"),fontWeight:zt("Body.fontWeight"),lineHeight:zt("Body.lineHeight"),letterSpacing:zt("Body.letterSpacing")},BodySmall:{fontFamily:zt("BodySmall.fontFamily"),fontSize:zt("BodySmall.fontSize"),fontWeight:zt("BodySmall.fontWeight"),lineHeight:zt("BodySmall.lineHeight"),letterSpacing:zt("BodySmall.letterSpacing")},XSmall:{fontFamily:zt("XSmall.fontFamily"),fontSize:zt("XSmall.fontSize"),fontWeight:zt("XSmall.fontWeight"),lineHeight:zt("XSmall.lineHeight"),letterSpacing:zt("XSmall.letterSpacing")}},Ot=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},Nt=(e,t)=>n=>{const r=Et[e].fontFamily(n),o=Et[e].fontWeight(n);return Object.values(_t).includes(r)?d`
                font-family: ${Ot(t)||Ot(o)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(At(t)||o)??"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=(e,t,n=!1)=>r=>{const o=Et[e],a=o.fontSize(r);return d`
            ${Nt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Lt=(e=!1,t=!1)=>t?d`
            display: block;
        `:e?d`
            display: inline;
        `:d`
            display: block;
        `;var Vt,jt={};Object.defineProperty(jt,"__esModule",{value:!0});var Rt=e;const Tt=e=>Rt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Rt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var It;Tt.displayName="ExternalIcon",Vt=jt.ExternalIcon=Tt,function(e){e.D1=l.h1`
        ${e=>d`
                ${Wt("D1",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D2=l.h1`
        ${e=>d`
                ${Wt("D2",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D3=l.h1`
        ${e=>d`
                ${Wt("D3",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D4=l.h1`
        ${e=>d`
                ${Wt("D4",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.DBody=l.h1`
        ${e=>d`
                ${Wt("DBody",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H1=l.h1`
        ${e=>d`
                ${Wt("H1",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H2=l.h2`
        ${e=>d`
                ${Wt("H2",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H3=l.h3`
        ${e=>d`
                ${Wt("H3",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H4=l.h4`
        ${e=>d`
                ${Wt("H4",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H5=l.h5`
        ${e=>d`
                ${Wt("H5",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H6=l.h6`
        ${e=>d`
                ${Wt("H6",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Body=l.p`
        ${e=>d`
                ${Wt("Body",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=l.p`
        ${e=>d`
                ${Wt("BodySmall",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=l.span`
        ${e=>d`
                ${Wt("XSmall",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Mt({...e,textStyle:"Body"}),Small:e=>Mt({...e,textStyle:"BodySmall"})}}(It||(It={}));const Pt=l.a`
    ${e=>d`
            ${Wt(e.textStyle,e.weight)}
            color: ${Bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Bt.Secondary};

                svg {
                    color: ${Bt.Secondary};
                }
            }
        `}
`,Gt=l(Vt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mt=({external:e=!1,children:r,...o})=>t(Pt,{...o,children:[r,e&&n(Gt,{})]}),Xt=l.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Bt.Neutral[5]};
    border-radius: 4px;
    background: ${Bt.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0;

    :focus,
    :focus-within {
        border: 1px solid ${Bt.Accent.Light[1]};
        box-shadow: ${Dt};
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
                background: ${Bt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Bt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${Bt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Bt.Validation.Red.Border(e)};
                    box-shadow: ${Ct};
                }
            `:void 0}
`,Zt=l.div`
    position: absolute;
    top: 0;
    left: ${e=>e.$readOnly?"1rem":"2rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,Ut=l.input`
    ${Wt("Body","regular")}
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
`,Kt=l(Ut)`
    width: 4.5rem;
`,qt=l(It.Body)`
    margin-left: 0.1rem;
    ${e=>{if(e.$hide)return d`
                color: ${Bt.Neutral[3]};
            `}}
`;var Jt,Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});var Yt=e;const en=e=>Yt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Yt.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});en.displayName="CrossIcon",Jt=Qt.CrossIcon=en;const tn=l.div`
    ${Wt("Body","regular")}
    border: 1px solid ${Bt.Neutral[5]};
    border-radius: 4px;
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background: ${Bt.Neutral[8]};
    color: ${Bt.Neutral[1]};

    :focus-within {
        outline: none;
        border: 1px solid ${Bt.Accent.Light[1]};
        box-shadow: ${Dt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Bt.Neutral[3]};
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
                background: ${Bt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    outline: none;
                    border: 1px solid ${Bt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?d`
                border: 1px solid ${Bt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Bt.Validation.Red.Border(e)};
                    box-shadow: ${Ct};
                }
            `:void 0}
`,nn=l.input`
    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;

    ${Wt("Body","regular")}
    padding: 0.2rem 1rem 0.3rem; // Somehow the input text appears lower

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`,rn=l.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    cursor: pointer;

    color: ${Bt.Neutral[3]};
    background-color: transparent;
    border: none;
`,on=l(Jt)`
    height: 1.25rem;
    width: 1.25rem;
`,an=r.forwardRef((({value:e,spacing:r,type:o,error:a,disabled:i,readOnly:l,onChange:d,onClear:u,allowClear:h=!1,...s},g)=>{const p=()=>"tel"===o&&r,f=e=>{const t=e.target,n=t.value,r=t.value.replace(/\s/g,"");t.value=r,d(e),t.value=n},y=e?(e=>e?p()?c.transformWithSpaces(e,r):e:"")(e):e,m=d?e=>{p()?f(e):d(e)}:void 0,v=h&&!i&&!l&&!a;return t(tn,{error:a,disabled:i,readOnly:l,className:s.className,children:[n(nn,{"data-testid":"input",ref:g,disabled:i,value:y,error:a,onChange:m,type:o,readOnly:l,...s}),v&&n(rn,{onClick:()=>{u&&u()},children:n(on,{})})]})}));var ln;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ln||(ln={})),l.div`
    display: flex;
    position: relative;
    border: 1px solid ${Bt.Neutral[5]};
    border-radius: 4px;
    background: ${Bt.Neutral[8]};
    height: 3rem;
    width: 100%;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Bt.Accent.Light[1]};
        box-shadow: ${Dt};
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
                background: ${Bt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Bt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${Bt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Bt.Validation.Red.Border(e)};
                    box-shadow: ${Ct};
                }
            `:void 0}
`,l(an)`
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
`;const dn=l.div`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;

    ${Wt("Body","regular")}
    color: ${Bt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Bt.Neutral[1]};
        }
    }

    ${e=>e.$readOnly?d`
                padding-left: 0rem;
            `:e.disabled?d`
                color: ${Bt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Bt.Neutral[4](e)};
                    }
                }
            `:void 0}
`,cn=({disabled:e,error:r,value:l,onChange:d,onBlur:u,onChangeRaw:h,onBlurRaw:s,readOnly:g,placeholder:p="00-8888",...f})=>{const[y,m]=o(""),[v,S]=o(""),[b,F]=o("none"),$=a(null),w=a(null),B=a(null),H=a(y),x=a(v),D=a(b),C=e=>{H.current=e,m(e)},_=e=>{x.current=e,S(e)},k=e=>{D.current=e,F(e)};i((()=>(document.addEventListener("mousedown",z),$.current&&$.current.addEventListener("keydown",E),()=>{document.removeEventListener("mousedown",z),$.current&&$.current.removeEventListener("keydown",E)})),[b]),i((()=>{"floor"===b&&3===y.length&&B.current&&B.current.focus()}),[y]),i((()=>{L(l)}),[l]);const z=t=>{e||g||$&&$.current.contains(t.target)||"none"!==D.current&&(k("none"),j())},E=e=>{"unit"===e.target.name&&"Tab"===e.code&&(k("none"),j())},O=e=>{k(e.target.name),e.target.select()},N=e=>{const t=e.target.name,n=e.target.value;"floor"===t?C(W(n)):_(W(n))},A=e=>{const t=e.target.name,n=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(C(n),V(n,t)):(_(n),V(n,t))},W=e=>/^[0-9]$/.test(e)?c.padValue(e,!0):e.toLocaleUpperCase(),L=e=>{if(e!==un)if(void 0===e||0===e.length)C(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];C("floor"===b?e:W(e)),_("unit"===b?n:W(n))}}},V=(e,t)=>{if(!d&&!h)return;const n={floor:H.current,unit:x.current};if(n[t]=e,d){const e=R(n);d(e)}h&&h([n.floor,n.unit])},j=()=>{if(!u&&!s)return;const e={floor:W(H.current),unit:W(x.current)};if(u){const t=R(e);u(t)}s&&s([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":un},T=e=>e.split("-");return t(Xt,{ref:$,onClick:()=>{"none"===b&&w.current&&w.current.focus()},disabled:e,$error:r,$readOnly:g,"data-testid":f["data-testid"],children:[n(dn,{"data-testid":"addon",disabled:e,$readOnly:g,children:"#"}),t(Zt,{$readOnly:g,children:[n(Ut,{name:"floor",maxLength:3,value:y,ref:w,onFocus:O,onBlur:N,onChange:A,disabled:e,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==b||g?T(p)[0]:""}),n(qt,{$hide:0===y.length,children:"-"}),n(Kt,{name:"unit",maxLength:5,value:v,ref:B,onFocus:O,onBlur:N,onChange:A,onKeyDown:e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===b&&0===v.length&&w.current.focus()},disabled:e,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==b||g?T(p)[1]:""})]})]})},un="Invalid unit number";export{cn as UnitNumberInput};
//# sourceMappingURL=index.js.map
