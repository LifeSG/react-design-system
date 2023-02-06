import t,{jsxs as e,jsx as r}from"react/jsx-runtime";import n from"react";import i,{keyframes as a,css as o}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,d="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),s=g.Symbol,u=s,f=Object.prototype,p=f.hasOwnProperty,y=f.toString,m=u?u.toStringTag:void 0;var S=function(t){var e=p.call(t,m),r=t[m];try{t[m]=void 0;var n=!0}catch(t){}var i=y.call(t);return n&&(e?t[m]=r:delete t[m]),i},F=Object.prototype.toString;var $=S,b=function(t){return F.call(t)},v=s?s.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?$(t):b(t)};var B=H,D=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||D(t)&&"[object Symbol]"==B(t)},z=c,w=_,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var E=function(t,e){if(z(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!w(t))||(C.test(t)||!x.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=H,N=k;var O,A=function(t){if(!N(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=g["__core-js_shared__"],T=(O=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var V=function(t){return!!T&&T in t},P=Function.prototype.toString;var I=A,L=V,R=k,X=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,Z=Object.prototype,U=M.toString,Y=Z.hasOwnProperty,q=RegExp("^"+U.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!R(t)||L(t))&&(I(t)?q:G).test(X(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var r=K(t,e);return J(r)?r:void 0},tt=Q(Object,"create"),et=tt;var rt=function(){this.__data__=et?et(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=tt,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(it){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return at.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var dt=tt;var ht=rt,gt=nt,st=ot,ut=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},ft=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}pt.prototype.clear=ht,pt.prototype.delete=gt,pt.prototype.get=st,pt.prototype.has=ut,pt.prototype.set=ft;var yt=pt;var mt=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Ft=function(t,e){for(var r=t.length;r--;)if(St(t[r][0],e))return r;return-1},$t=Ft,bt=Array.prototype.splice;var vt=Ft;var Ht=Ft;var Bt=Ft;var Dt=mt,_t=function(t){var e=this.__data__,r=$t(e,t);return!(r<0)&&(r==e.length-1?e.pop():bt.call(e,r,1),--this.size,!0)},zt=function(t){var e=this.__data__,r=vt(e,t);return r<0?void 0:e[r][1]},wt=function(t){return Ht(this.__data__,t)>-1},xt=function(t,e){var r=this.__data__,n=Bt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Ct(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ct.prototype.clear=Dt,Ct.prototype.delete=_t,Ct.prototype.get=zt,Ct.prototype.has=wt,Ct.prototype.set=xt;var Et=Ct,kt=Q(g,"Map"),Wt=yt,Nt=Et,Ot=kt;var At=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var r=t.__data__;return At(e)?r["string"==typeof e?"string":"hash"]:r.map},Tt=jt;var Vt=jt;var Pt=jt;var It=jt;var Lt=function(){this.size=0,this.__data__={hash:new Wt,map:new(Ot||Nt),string:new Wt}},Rt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Vt(this,t).get(t)},Gt=function(t){return Pt(this,t).has(t)},Mt=function(t,e){var r=It(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Zt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Zt.prototype.clear=Lt,Zt.prototype.delete=Rt,Zt.prototype.get=Xt,Zt.prototype.has=Gt,Zt.prototype.set=Mt;var Ut=Zt;function Yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=t.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Yt.Cache||Ut),r}Yt.Cache=Ut;var qt=Yt;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=qt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,r,n,i){e.push(n?i.replace(Kt,"$1"):r||t)})),e}));var te=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},ee=c,re=_,ne=s?s.prototype:void 0,ie=ne?ne.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(re(e))return ie?ie.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},oe=ae;var le=c,ce=E,de=Qt,he=function(t){return null==t?"":oe(t)};var ge=_;var se=function(t,e){return le(t)?t:ce(t,e)?[t]:de(he(t))},ue=function(t){if("string"==typeof t||ge(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var fe=function(t,e){for(var r=0,n=(e=se(e,t)).length;null!=t&&r<n;)t=t[ue(e[r++])];return r&&r==n?t:void 0};var pe=function(t,e,r){var n=null==t?void 0:fe(t,e);return void 0===n?r:n};const ye=(t,e,r)=>e?pe(r,e)||pe(t,e):r||t,me=(t,e)=>{const r=e||t.defaultValue;return pe(t.collections,r)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Se||(Se={}));const Fe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},$e=t=>e=>{const r=e.theme,n=me(Fe,r[Se.colorScheme]);return r.options&&r.options.color?ye(n,t,r.options.color):ye(n,t)},be={Brand:{1:$e("Brand.1"),2:$e("Brand.2"),3:$e("Brand.3"),4:$e("Brand.4"),5:$e("Brand.5"),6:$e("Brand.6")},Primary:$e("Primary"),PrimaryDark:$e("PrimaryDark"),Secondary:$e("Secondary"),Accent:{Light:{1:$e("Accent.Light.1"),2:$e("Accent.Light.2"),3:$e("Accent.Light.3"),4:$e("Accent.Light.4"),5:$e("Accent.Light.5"),6:$e("Accent.Light.6")},Dark:{1:$e("Accent.Dark.1"),2:$e("Accent.Dark.2"),3:$e("Accent.Dark.3")}},Neutral:{1:$e("Neutral.1"),2:$e("Neutral.2"),3:$e("Neutral.3"),4:$e("Neutral.4"),5:$e("Neutral.5"),6:$e("Neutral.6"),7:$e("Neutral.7"),8:$e("Neutral.8")},Validation:{Green:{Text:$e("Validation.Green.Text"),Icon:$e("Validation.Green.Icon"),Border:$e("Validation.Green.Border"),Background:$e("Validation.Green.Background")},Orange:{Text:$e("Validation.Orange.Text"),Icon:$e("Validation.Orange.Icon"),Border:$e("Validation.Orange.Border"),Background:$e("Validation.Orange.Background"),Badge:$e("Validation.Orange.Badge")},Red:{Text:$e("Validation.Red.Text"),Icon:$e("Validation.Red.Icon"),Border:$e("Validation.Red.Border"),Background:$e("Validation.Red.Background")}}},ve={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},He=t=>Object.keys(ve).reduce(((e,r)=>{const n=ve[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),Be=He("max-width"),De=(He("min-width"),i.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`),_e=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ze=i.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||be.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${_e} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,we=i(ze)`
    animation-delay: -0.45s;
`,xe=i(ze)`
    animation-delay: -0.3s;
`,Ce=i(ze)`
    animation-delay: -0.15s;
`,Ee={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ke={collections:{base:{D1:{fontFamily:Ee.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ee.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ee.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ee.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ee.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ee.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ee.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ee.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ee.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ee.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ee.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ee.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ee.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ee.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},We=t=>e=>{const r=e.theme,n=me(ke,r[Se.textStyleScheme]);return r.options&&r.options.textStyle?ye(n,t,r.options.textStyle):ye(n,t)},Ne={D1:{fontFamily:We("D1.fontFamily"),fontSize:We("D1.fontSize"),fontWeight:We("D1.fontWeight"),lineHeight:We("D1.lineHeight"),letterSpacing:We("D1.letterSpacing")},D2:{fontFamily:We("D2.fontFamily"),fontSize:We("D2.fontSize"),fontWeight:We("D2.fontWeight"),lineHeight:We("D2.lineHeight"),letterSpacing:We("D2.letterSpacing")},D3:{fontFamily:We("D3.fontFamily"),fontSize:We("D3.fontSize"),fontWeight:We("D3.fontWeight"),lineHeight:We("D3.lineHeight"),letterSpacing:We("D3.letterSpacing")},D4:{fontFamily:We("D4.fontFamily"),fontSize:We("D4.fontSize"),fontWeight:We("D4.fontWeight"),lineHeight:We("D4.lineHeight"),letterSpacing:We("D4.letterSpacing")},DBody:{fontFamily:We("DBody.fontFamily"),fontSize:We("DBody.fontSize"),fontWeight:We("DBody.fontWeight"),lineHeight:We("DBody.lineHeight"),letterSpacing:We("DBody.letterSpacing")},H1:{fontFamily:We("H1.fontFamily"),fontSize:We("H1.fontSize"),fontWeight:We("H1.fontWeight"),lineHeight:We("H1.lineHeight"),letterSpacing:We("H1.letterSpacing")},H2:{fontFamily:We("H2.fontFamily"),fontSize:We("H2.fontSize"),fontWeight:We("H2.fontWeight"),lineHeight:We("H2.lineHeight"),letterSpacing:We("H2.letterSpacing")},H3:{fontFamily:We("H3.fontFamily"),fontSize:We("H3.fontSize"),fontWeight:We("H3.fontWeight"),lineHeight:We("H3.lineHeight"),letterSpacing:We("H3.letterSpacing")},H4:{fontFamily:We("H4.fontFamily"),fontSize:We("H4.fontSize"),fontWeight:We("H4.fontWeight"),lineHeight:We("H4.lineHeight"),letterSpacing:We("H4.letterSpacing")},H5:{fontFamily:We("H5.fontFamily"),fontSize:We("H5.fontSize"),fontWeight:We("H5.fontWeight"),lineHeight:We("H5.lineHeight"),letterSpacing:We("H5.letterSpacing")},H6:{fontFamily:We("H6.fontFamily"),fontSize:We("H6.fontSize"),fontWeight:We("H6.fontWeight"),lineHeight:We("H6.lineHeight"),letterSpacing:We("H6.letterSpacing")},Body:{fontFamily:We("Body.fontFamily"),fontSize:We("Body.fontSize"),fontWeight:We("Body.fontWeight"),lineHeight:We("Body.lineHeight"),letterSpacing:We("Body.letterSpacing")},BodySmall:{fontFamily:We("BodySmall.fontFamily"),fontSize:We("BodySmall.fontSize"),fontWeight:We("BodySmall.fontWeight"),lineHeight:We("BodySmall.lineHeight"),letterSpacing:We("BodySmall.letterSpacing")},XSmall:{fontFamily:We("XSmall.fontFamily"),fontSize:We("XSmall.fontSize"),fontWeight:We("XSmall.fontWeight"),lineHeight:We("XSmall.lineHeight"),letterSpacing:We("XSmall.letterSpacing")}},Oe=t=>{switch(t){case 700:case"bold":return Ee.Bold;case 600:case"semibold":return Ee.Semibold;case 300:case"light":return Ee.Light;case 400:case"regular":return Ee.Regular;default:return""}},Ae=(t,e)=>r=>{const n=Ne[t].fontFamily(r),i=Ne[t].fontWeight(r);return Object.values(Ee).includes(n)?o`
                font-family: ${Oe(e)||Oe(i)||n};
                font-weight: normal !important;
            `:o`
            font-family: ${n};
            font-weight: ${(je(e)||i)??"normal"};
        `},je=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Te=(t,e,r=!1)=>n=>{const i=Ne[t],a=i.fontSize(n);return o`
            ${Ae(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Ve=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `;var Pe,Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});var Le=t;const Re=t=>Le.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Le.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Xe;Re.displayName="ExternalIcon",Pe=Ie.ExternalIcon=Re,function(t){t.D1=i.h1`
        ${t=>o`
                ${Te("D1",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.D2=i.h1`
        ${t=>o`
                ${Te("D2",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.D3=i.h1`
        ${t=>o`
                ${Te("D3",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.D4=i.h1`
        ${t=>o`
                ${Te("D4",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.DBody=i.h1`
        ${t=>o`
                ${Te("DBody",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H1=i.h1`
        ${t=>o`
                ${Te("H1",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H2=i.h2`
        ${t=>o`
                ${Te("H2",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H3=i.h3`
        ${t=>o`
                ${Te("H3",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H4=i.h4`
        ${t=>o`
                ${Te("H4",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H5=i.h5`
        ${t=>o`
                ${Te("H5",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.H6=i.h6`
        ${t=>o`
                ${Te("H6",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.Body=i.p`
        ${t=>o`
                ${Te("Body",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=i.p`
        ${t=>o`
                ${Te("BodySmall",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.XSmall=i.span`
        ${t=>o`
                ${Te("XSmall",t.weight,t.paragraph)}
                color: ${be.Neutral[1]};
                ${Ve(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ze({...t,textStyle:"Body"}),Small:t=>Ze({...t,textStyle:"BodySmall"})}}(Xe||(Xe={}));const Ge=i.a`
    ${t=>o`
            ${Te(t.textStyle,t.weight)}
            color: ${be.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${be.Secondary};

                svg {
                    color: ${be.Secondary};
                }
            }
        `}
`,Me=i(Pe)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ze=({external:t=!1,children:n,...i})=>e(Ge,{...i,children:[n,t&&r(Me,{})]});var Ue;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ue||(Ue={}));const Ye=i.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${t=>{switch(t.$buttonStyle){case"secondary":return o`
                    background-color: ${be.Neutral[8](t)};
                    border: 1px solid ${be.Primary(t)};

                    span {
                        color: ${be.Primary(t)};
                    }
                `;case"light":return o`
                    background-color: ${be.Neutral[8](t)};
                    border: 1px solid ${be.Neutral[5](t)};

                    span {
                        color: ${be.Primary(t)};
                    }
                `;case"disabled":return o`
                    background-color: ${be.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${be.Neutral[3](t)};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${be.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${be.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${be.Primary(t)};
                    border: 1px solid transparent;

                    ${Be.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${be.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${Te("H5","semibold")}
                    }

                    ${Be.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Te("H4","semibold")}
                    }

                    ${Be.mobileS} {
                        height: auto;
                    }
                `}
`,qe=i((({color:t,className:n,size:i=18})=>e(De,{className:n,$size:i,$color:t,children:[r(ze,{id:"inner1",$size:i-2,$borderWidth:2}),r(we,{id:"inner2",$size:i-2,$borderWidth:2}),r(xe,{id:"inner3",$size:i-2,$borderWidth:2}),r(Ce,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=be.Primary(t);break;case"disabled":e=be.Neutral[3](t);break;default:e=be.Neutral[8](t)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,Je={Default:n.forwardRef(((t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=t,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(Ye,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(qe,{...d}),r("span",{children:i})]})})),Small:n.forwardRef(((t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=t,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(Ye,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&r(qe,{...d,size:16}),r("span",{children:i})]})}))};export{Je as Button};
//# sourceMappingURL=index.js.map
