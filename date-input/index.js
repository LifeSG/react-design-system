import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as a,useEffect as o}from"react";import i,{css as l}from"styled-components";const c=[1,3,5,7,8,10,12],h=[4,6,9,11];var d,u;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),o=parseInt(n),i=parseInt(r);return 0==a?"1":c.includes(o)?Math.min(a,31).toString():h.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0}(d||(d={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let a=0;t>n&&(a=Math.floor((t-n)/8));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(u||(u={}));var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,s="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,y=s||f||Function("return this")(),m=y.Symbol,S=m,F=Object.prototype,v=F.hasOwnProperty,B=F.toString,$=S?S.toStringTag:void 0;var H=function(e){var t=v.call(e,$),n=e[$];try{e[$]=void 0;var r=!0}catch(e){}var a=B.call(e);return r&&(t?e[$]=n:delete e[$]),a},b=Object.prototype.toString;var D=H,w=function(e){return b.call(e)},_=m?m.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?D(e):w(e)};var z=x,C=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==z(e)},E=p,A=k,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var V=function(e,t){if(E(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(W.test(e)||!O.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=x,T=N;var I,L=function(e){if(!T(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=y["__core-js_shared__"],M=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!M&&M in e},X=Function.prototype.toString;var G=L,Y=P,Z=N,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,Q=q.toString,ee=J.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Z(e)||Y(e))&&(G(e)?te:U).test(K(e))},re=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=re(e,t);return ne(n)?n:void 0},oe=ae(Object,"create"),ie=oe;var le=function(){this.__data__=ie?ie(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=oe,de=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},ge=oe,pe=Object.prototype.hasOwnProperty;var se=oe;var fe=le,ye=ce,me=ue,Se=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=fe,ve.prototype.delete=ye,ve.prototype.get=me,ve.prototype.has=Se,ve.prototype.set=Fe;var Be=ve;var $e=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},De=be,we=Array.prototype.splice;var _e=be;var xe=be;var ze=be;var Ce=$e,ke=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},Ee=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return xe(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function We(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}We.prototype.clear=Ce,We.prototype.delete=ke,We.prototype.get=Ee,We.prototype.has=Ae,We.prototype.set=Oe;var Ve=We,Ne=ae(y,"Map"),je=Be,Te=Ve,Ie=Ne;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Me=Re;var Pe=Re;var Xe=Re;var Ge=Re;var Ye=function(){this.size=0,this.__data__={hash:new je,map:new(Ie||Te),string:new je}},Ze=function(e){var t=Me(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Pe(this,e).get(e)},Ue=function(e){return Xe(this,e).has(e)},qe=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ye,Je.prototype.delete=Ze,Je.prototype.get=Ke,Je.prototype.has=Ue,Je.prototype.set=qe;var Qe=Je;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(et.Cache||Qe),n}et.Cache=Qe;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,a){t.push(r?a.replace(rt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},it=p,lt=k,ct=m?m.prototype:void 0,ht=ct?ct.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(lt(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ut=dt;var gt=p,pt=V,st=at,ft=function(e){return null==e?"":ut(e)};var yt=k;var mt=function(e,t){return gt(e)?e:pt(e,t)?[e]:st(ft(e))},St=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=mt(t,e)).length;null!=e&&n<r;)e=e[St(t[n++])];return n&&n==r?e:void 0};var vt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const Bt=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,$t=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Ht||(Ht={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=$t(bt,n[Ht.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},wt={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red")}},_t={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${wt.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${wt.Shadow.Red}
    `}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=$t(_t,n[Ht.designTokenScheme]);return n.options?.designToken?Bt(r,e,n.options.designToken):Bt(r,e)},zt=xt("InputBoxShadow"),Ct=xt("InputErrorBoxShadow"),kt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Et={collections:{base:{D1:{fontFamily:kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=$t(Et,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},Ot={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},Wt=e=>{switch(e){case 700:case"bold":return kt.Bold;case 600:case"semibold":return kt.Semibold;case 300:case"light":return kt.Light;case 400:case"regular":return kt.Regular;default:return""}},Vt=(e,t)=>n=>{const r=Ot[e].fontFamily(n),a=Ot[e].fontWeight(n);return Object.values(kt).includes(r)?l`
                font-family: ${Wt(t)||Wt(a)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Nt(t)||a)??"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jt=(e,t,n=!1)=>r=>{const a=Ot[e],o=a.fontSize(r);return l`
            ${Vt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var It,Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});var Rt=e;const Mt=e=>Rt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Rt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Pt;Mt.displayName="ExternalIcon",It=Lt.ExternalIcon=Mt,function(e){e.D1=i.h1`
        ${e=>l`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Tt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Yt({...e,textStyle:"Body"}),Small:e=>Yt({...e,textStyle:"BodySmall"})}}(Pt||(Pt={}));const Xt=i.a`
    ${e=>l`
            ${jt(e.textStyle,e.weight)}
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
`,Gt=i(It)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Yt=({external:e=!1,children:r,...a})=>t(Xt,{...a,children:[r,e&&n(Gt,{})]}),Zt=i.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${wt.Neutral[5]};
    border-radius: 4px;
    background: ${wt.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${wt.Accent.Light[1]};
        box-shadow: ${zt};
    }

    ${e=>e.$readOnly?l`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?l`
                background: ${wt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?l`
                border: 1px solid ${wt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${wt.Validation.Red.Border(e)};
                    box-shadow: ${Ct};
                }
            `:void 0}
`,Kt=i.div`
    position: absolute;
    top: 0;
    left: ${e=>e.$readOnly?"-0.5rem":"1rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,Ut=i.input`
    ${jt("Body","regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
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

    ${e=>{if(e.disabled)return l`
                cursor: not-allowed;
            `}}
`,qt=i(Ut)`
    width: 2.6rem;
`,Jt=i(Ut)`
    width: 3.5rem;
`,Qt=i(Pt.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${e=>{if(e.$hide)return l`
                color: ${wt.Neutral[3]};
            `}}
`;i(Qt)`
    ${e=>{if(e.$compress)return l`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const en=({disabled:e,error:i,value:l,onChange:c,onBlur:h,onChangeRaw:g,onBlurRaw:p,readOnly:s,id:f,...y})=>{const[m,S]=r(""),[F,v]=r(""),[B,$]=r(""),[H,b]=r("none"),D=a(null),w=a(null),_=a(null),x=a(null),z=a(m),C=a(F),k=a(B),E=a(H),A=e=>{z.current=e,S(e)},O=e=>{C.current=e,v(e)},W=e=>{k.current=e,$(e)},V=e=>{E.current=e,b(e)};o((()=>(document.addEventListener("mousedown",N),D.current&&D.current.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",N),D.current&&D.current.removeEventListener("keydown",j)})),[H]),o((()=>{"day"===H&&2===m.length&&_.current&&_.current.focus()}),[m]),o((()=>{"month"===H&&2===F.length&&x.current&&x.current.focus()}),[F]),o((()=>{M(l)}),[l]);const N=t=>{e||s||D&&D.current.contains(t.target)||"none"!==E.current&&(V("none"),X())},j=e=>{"year"===e.target.name&&"Tab"===e.code&&(V("none"),X())},T=e=>{V(e.target.name),e.target.select()},I=e=>{const t=e.target.name,n=u.padValue(e.target.value,!0);switch(t){case"day":A(n);break;case"month":O(n)}const r=m.length&&F.length&&4===B.length,a="day"===t,o=d.clampMonth(F);r&&(A(u.padValue(d.clampDay(a?n:m,o,B))),O(u.padValue(o)))},L=e=>{const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,"");switch(t){case"day":A(n),P(n,t);break;case"month":O(n),P(n,t);break;case"year":W(n),P(n,t)}},R=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||("month"===H&&0===F.length&&w.current.focus(),"year"===H&&0===B.length&&_.current.focus())},M=e=>{if(void 0===e||""===e)A(""),O(""),W("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=(t.getMonth()+1).toString(),n=t.getFullYear().toString(),r=d.clampDay(t.getDate().toString(),e,n);A(u.padValue(r)),O(u.padValue(e)),W(n)}}},P=(e,t)=>{if(c){const n={day:m,month:F,year:B};n[t]=e;const r=G(n);c(r)}if(g){const n=[..."day"===t?[u.padValue(e)]:[m],..."month"===t?[u.padValue(e)]:[F],..."year"===t?[e]:[B]];g(n)}},X=()=>{if(h){const e={day:z.current,month:C.current,year:k.current},t=G(e);h(t)}if(p){const e=[u.padValue(z.current.toString()),u.padValue(C.current.toString()),k.current];p(e)}},G=e=>{const t=[e.year,e.month,e.day];return e.day.length>=1&&e.month.length>=1&&4===e.year.length?t.join("-"):t.every((e=>""===e))?"":tn};return n(Zt,{ref:D,onClick:()=>{"none"===H&&w.current&&w.current.focus()},disabled:e,$error:i,id:f,"data-testid":y["data-testid"],$readOnly:s,children:t(Kt,{$readOnly:s,children:[n(Ut,{name:"day",maxLength:2,value:m,ref:w,onFocus:T,onBlur:I,onChange:L,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input",readOnly:s,placeholder:"day"!==H||s?"DD":""}),n(Qt,{$hide:0===m.length,children:"/"}),n(qt,{name:"month",maxLength:2,value:F,ref:_,onFocus:T,onBlur:I,onChange:L,onKeyDown:R,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input",readOnly:s,placeholder:"month"!==H||s?"MM":""}),n(Qt,{$hide:0===F.length,children:"/"}),n(Jt,{name:"year",maxLength:4,value:B,ref:x,onFocus:T,onBlur:I,onChange:L,onKeyDown:R,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input",readOnly:s,placeholder:"year"!==H||s?"YYYY":""})]})})},tn="Invalid date";export{en as DateInput};
//# sourceMappingURL=index.js.map
