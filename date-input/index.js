import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import{useState as r,useRef as a,useEffect as o}from"react";import i,{css as l}from"styled-components";const c=[1,3,5,7,8,10,12],h=[4,6,9,11];var u,d;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),o=parseInt(n),i=parseInt(r);return 0==a?"1":c.includes(o)?Math.min(a,31).toString():h.includes(o)?Math.min(a,30).toString():2===o?e.isLeapYear(i)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0}(u||(u={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let a=0;t>n&&(a=Math.floor((t-n)/8));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(d||(d={}));var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,f="object"==typeof g&&g&&g.Object===Object&&g,s="object"==typeof self&&self&&self.Object===Object&&self,y=f||s||Function("return this")(),m=y.Symbol,S=m,F=Object.prototype,v=F.hasOwnProperty,B=F.toString,H=S?S.toStringTag:void 0;var $=function(e){var t=v.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var a=B.call(e);return r&&(t?e[H]=n:delete e[H]),a},b=Object.prototype.toString;var D=$,w=function(e){return b.call(e)},_=m?m.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?D(e):w(e)};var z=x,C=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==z(e)},k=p,O=E,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var V=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(A.test(e)||!W.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=x,L=N;var I,T=function(e){if(!L(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=y["__core-js_shared__"],M=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!M&&M in e},X=Function.prototype.toString;var G=T,Y=P,Z=N,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,Q=q.toString,ee=J.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Z(e)||Y(e))&&(G(e)?te:U).test(K(e))},re=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=re(e,t);return ne(n)?n:void 0},oe=ae(Object,"create"),ie=oe;var le=function(){this.__data__=ie?ie(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=oe,ue=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},ge=oe,pe=Object.prototype.hasOwnProperty;var fe=oe;var se=le,ye=ce,me=de,Se=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=se,ve.prototype.delete=ye,ve.prototype.get=me,ve.prototype.has=Se,ve.prototype.set=Fe;var Be=ve;var He=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},De=be,we=Array.prototype.splice;var _e=be;var xe=be;var ze=be;var Ce=He,Ee=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return xe(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ae.prototype.clear=Ce,Ae.prototype.delete=Ee,Ae.prototype.get=ke,Ae.prototype.has=Oe,Ae.prototype.set=We;var Ve=Ae,Ne=ae(y,"Map"),je=Be,Le=Ve,Ie=Ne;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Me=Re;var Pe=Re;var Xe=Re;var Ge=Re;var Ye=function(){this.size=0,this.__data__={hash:new je,map:new(Ie||Le),string:new je}},Ze=function(e){var t=Me(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Pe(this,e).get(e)},Ue=function(e){return Xe(this,e).has(e)},qe=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ye,Je.prototype.delete=Ze,Je.prototype.get=Ke,Je.prototype.has=Ue,Je.prototype.set=qe;var Qe=Je;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(et.Cache||Qe),n}et.Cache=Qe;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,a){t.push(r?a.replace(rt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},it=p,lt=E,ct=m?m.prototype:void 0,ht=ct?ct.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(lt(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ut;var gt=p,pt=V,ft=at,st=function(e){return null==e?"":dt(e)};var yt=E;var mt=function(e,t){return gt(e)?e:pt(e,t)?[e]:ft(st(e))},St=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=mt(t,e)).length;null!=e&&n<r;)e=e[St(t[n++])];return n&&n==r?e:void 0};var vt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const Bt=(e,t,n)=>t?vt(n,t)||vt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return vt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}($t||($t={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Ht(bt,n[$t.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},wt={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")}}},_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=Ht(xt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},Ct={D1:{fontFamily:zt("D1.fontFamily"),fontSize:zt("D1.fontSize"),fontWeight:zt("D1.fontWeight"),lineHeight:zt("D1.lineHeight"),letterSpacing:zt("D1.letterSpacing")},D2:{fontFamily:zt("D2.fontFamily"),fontSize:zt("D2.fontSize"),fontWeight:zt("D2.fontWeight"),lineHeight:zt("D2.lineHeight"),letterSpacing:zt("D2.letterSpacing")},D3:{fontFamily:zt("D3.fontFamily"),fontSize:zt("D3.fontSize"),fontWeight:zt("D3.fontWeight"),lineHeight:zt("D3.lineHeight"),letterSpacing:zt("D3.letterSpacing")},D4:{fontFamily:zt("D4.fontFamily"),fontSize:zt("D4.fontSize"),fontWeight:zt("D4.fontWeight"),lineHeight:zt("D4.lineHeight"),letterSpacing:zt("D4.letterSpacing")},DBody:{fontFamily:zt("DBody.fontFamily"),fontSize:zt("DBody.fontSize"),fontWeight:zt("DBody.fontWeight"),lineHeight:zt("DBody.lineHeight"),letterSpacing:zt("DBody.letterSpacing")},H1:{fontFamily:zt("H1.fontFamily"),fontSize:zt("H1.fontSize"),fontWeight:zt("H1.fontWeight"),lineHeight:zt("H1.lineHeight"),letterSpacing:zt("H1.letterSpacing")},H2:{fontFamily:zt("H2.fontFamily"),fontSize:zt("H2.fontSize"),fontWeight:zt("H2.fontWeight"),lineHeight:zt("H2.lineHeight"),letterSpacing:zt("H2.letterSpacing")},H3:{fontFamily:zt("H3.fontFamily"),fontSize:zt("H3.fontSize"),fontWeight:zt("H3.fontWeight"),lineHeight:zt("H3.lineHeight"),letterSpacing:zt("H3.letterSpacing")},H4:{fontFamily:zt("H4.fontFamily"),fontSize:zt("H4.fontSize"),fontWeight:zt("H4.fontWeight"),lineHeight:zt("H4.lineHeight"),letterSpacing:zt("H4.letterSpacing")},H5:{fontFamily:zt("H5.fontFamily"),fontSize:zt("H5.fontSize"),fontWeight:zt("H5.fontWeight"),lineHeight:zt("H5.lineHeight"),letterSpacing:zt("H5.letterSpacing")},H6:{fontFamily:zt("H6.fontFamily"),fontSize:zt("H6.fontSize"),fontWeight:zt("H6.fontWeight"),lineHeight:zt("H6.lineHeight"),letterSpacing:zt("H6.letterSpacing")},Body:{fontFamily:zt("Body.fontFamily"),fontSize:zt("Body.fontSize"),fontWeight:zt("Body.fontWeight"),lineHeight:zt("Body.lineHeight"),letterSpacing:zt("Body.letterSpacing")},BodySmall:{fontFamily:zt("BodySmall.fontFamily"),fontSize:zt("BodySmall.fontSize"),fontWeight:zt("BodySmall.fontWeight"),lineHeight:zt("BodySmall.lineHeight"),letterSpacing:zt("BodySmall.letterSpacing")},XSmall:{fontFamily:zt("XSmall.fontFamily"),fontSize:zt("XSmall.fontSize"),fontWeight:zt("XSmall.fontWeight"),lineHeight:zt("XSmall.lineHeight"),letterSpacing:zt("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},kt=(e,t)=>n=>{const r=Ct[e].fontFamily(n),a=Ct[e].fontWeight(n);return Object.values(_t).includes(r)?l`
                font-family: ${Et(t)||Et(a)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Ot(t)||a)??"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=(e,t,n=!1)=>r=>{const a=Ct[e],o=a.fontSize(r);return l`
            ${kt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},At=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Vt,Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var jt=e;const Lt=e=>jt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var It;Lt.displayName="ExternalIcon",Vt=Nt.ExternalIcon=Lt,function(e){e.D1=i.h1`
        ${e=>l`
                ${Wt("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${Wt("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${Wt("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${Wt("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${Wt("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${Wt("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${Wt("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${Wt("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${Wt("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${Wt("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${Wt("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${Wt("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${Wt("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${Wt("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${At(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Mt({...e,textStyle:"Body"}),Small:e=>Mt({...e,textStyle:"BodySmall"})}}(It||(It={}));const Tt=i.a`
    ${e=>l`
            ${Wt(e.textStyle,e.weight)}
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
`,Rt=i(Vt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mt=({external:e=!1,children:r,...a})=>t(Tt,{...a,children:[r,e&&n(Rt,{})]}),Pt=i.div`
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
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
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
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Xt=i.div`
    position: absolute;
    top: 0;
    left: ${e=>e.$readOnly?"-0.5rem":"1rem"};
    height: 100%;
    display: flex;
    align-items: center;
`,Gt=i.input`
    ${Wt("Body","regular")}
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
`,Yt=i(Gt)`
    width: 2.6rem;
`,Zt=i(Gt)`
    width: 3.5rem;
`,Kt=i(It.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${e=>{if(e.$hide)return l`
                color: ${wt.Neutral[3]};
            `}}
`;i(Kt)`
    ${e=>{if(e.$compress)return l`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const Ut=({disabled:e,error:i,value:l,onChange:c,onBlur:h,onChangeRaw:g,onBlurRaw:p,readOnly:f,id:s,...y})=>{const[m,S]=r(""),[F,v]=r(""),[B,H]=r(""),[$,b]=r("none"),D=a(null),w=a(null),_=a(null),x=a(null),z=a(m),C=a(F),E=a(B),k=a($),O=e=>{z.current=e,S(e)},W=e=>{C.current=e,v(e)},A=e=>{E.current=e,H(e)},V=e=>{k.current=e,b(e)};o((()=>(document.addEventListener("mousedown",N),D.current&&D.current.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",N),D.current&&D.current.removeEventListener("keydown",j)})),[$]),o((()=>{"day"===$&&2===m.length&&_.current&&_.current.focus()}),[m]),o((()=>{"month"===$&&2===F.length&&x.current&&x.current.focus()}),[F]),o((()=>{M(l)}),[l]);const N=t=>{e||f||D&&D.current.contains(t.target)||"none"!==k.current&&(V("none"),X())},j=e=>{"year"===e.target.name&&"Tab"===e.code&&(V("none"),X())},L=e=>{V(e.target.name),e.target.select()},I=e=>{const t=e.target.name,n=d.padValue(e.target.value,!0);switch(t){case"day":O(n);break;case"month":W(n)}const r=m.length&&F.length&&4===B.length,a="day"===t,o=u.clampMonth(F);r&&(O(d.padValue(u.clampDay(a?n:m,o,B))),W(d.padValue(o)))},T=e=>{const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,"");switch(t){case"day":O(n),P(n,t);break;case"month":W(n),P(n,t);break;case"year":A(n),P(n,t)}},R=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||("month"===$&&0===F.length&&w.current.focus(),"year"===$&&0===B.length&&_.current.focus())},M=e=>{if(void 0===e||""===e)O(""),W(""),A("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=(t.getMonth()+1).toString(),n=t.getFullYear().toString(),r=u.clampDay(t.getDate().toString(),e,n);O(d.padValue(r)),W(d.padValue(e)),A(n)}}},P=(e,t)=>{if(c){const n={day:m,month:F,year:B};n[t]=e;const r=G(n);c(r)}if(g){const n=[..."day"===t?[d.padValue(e)]:[m],..."month"===t?[d.padValue(e)]:[F],..."year"===t?[e]:[B]];g(n)}},X=()=>{if(h){const e={day:z.current,month:C.current,year:E.current},t=G(e);h(t)}if(p){const e=[d.padValue(z.current.toString()),d.padValue(C.current.toString()),E.current];p(e)}},G=e=>{const t=[e.year,e.month,e.day];return e.day.length>=1&&e.month.length>=1&&4===e.year.length?t.join("-"):t.every((e=>""===e))?"":qt};return n(Pt,{ref:D,onClick:()=>{"none"===$&&w.current&&w.current.focus()},disabled:e,$error:i,id:s,"data-testid":y["data-testid"],$readOnly:f,children:t(Xt,{$readOnly:f,children:[n(Gt,{name:"day",maxLength:2,value:m,ref:w,onFocus:L,onBlur:I,onChange:T,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input",readOnly:f,placeholder:"day"!==$||f?"DD":""}),n(Kt,{$hide:0===m.length,children:"/"}),n(Yt,{name:"month",maxLength:2,value:F,ref:_,onFocus:L,onBlur:I,onChange:T,onKeyDown:R,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input",readOnly:f,placeholder:"month"!==$||f?"MM":""}),n(Kt,{$hide:0===F.length,children:"/"}),n(Zt,{name:"year",maxLength:4,value:B,ref:x,onFocus:L,onBlur:I,onChange:T,onKeyDown:R,disabled:e,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input",readOnly:f,placeholder:"year"!==$||f?"YYYY":""})]})})},qt="Invalid date";export{Ut as DateInput};
//# sourceMappingURL=index.js.map
