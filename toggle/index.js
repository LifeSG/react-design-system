import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import{useState as n,useRef as o,useEffect as i}from"react";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,h="object"==typeof c&&c&&c.Object===Object&&c,g="object"==typeof self&&self&&self.Object===Object&&self,s=h||g||Function("return this")(),u=s.Symbol,f=u,p=Object.prototype,y=p.hasOwnProperty,C=p.toString,m=f?f.toStringTag:void 0;var v=function(e){var t=y.call(e,m),r=e[m];try{e[m]=void 0;var n=!0}catch(e){}var o=C.call(e);return n&&(t?e[m]=r:delete e[m]),o},S=Object.prototype.toString;var F=v,$=function(e){return S.call(e)},b=u?u.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?F(e):$(e)};var B=H,w=function(e){return null!=e&&"object"==typeof e};var D=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==B(e)},_=d,x=D,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var j=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!x(e))||(z.test(e)||!k.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E=H,A=N;var O,W=function(e){if(!A(e))return!1;var t=E(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=s["__core-js_shared__"],V=(O=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var I=function(e){return!!V&&V in e},T=Function.prototype.toString;var P=W,R=I,M=N,Z=function(e){if(null!=e){try{return T.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,G=Function.prototype,q=Object.prototype,U=G.toString,J=q.hasOwnProperty,K=RegExp("^"+U.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!M(e)||R(e))&&(P(e)?K:X).test(Z(e))},Y=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var r=Y(e,t);return Q(r)?r:void 0},te=ee(Object,"create"),re=te;var ne=function(){this.__data__=re?re(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,ae=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ae.call(t,e)?t[e]:void 0},ce=te,de=Object.prototype.hasOwnProperty;var he=te;var ge=ne,se=oe,ue=le,fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:de.call(t,e)},pe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ye.prototype.clear=ge,ye.prototype.delete=se,ye.prototype.get=ue,ye.prototype.has=fe,ye.prototype.set=pe;var Ce=ye;var me=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},Fe=Se,$e=Array.prototype.splice;var be=Se;var He=Se;var Be=Se;var we=me,De=function(e){var t=this.__data__,r=Fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():$e.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=be(t,e);return r<0?void 0:t[r][1]},xe=function(e){return He(this.__data__,e)>-1},ke=function(e,t){var r=this.__data__,n=Be(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ze.prototype.clear=we,ze.prototype.delete=De,ze.prototype.get=_e,ze.prototype.has=xe,ze.prototype.set=ke;var je=ze,Ne=ee(s,"Map"),Ee=Ce,Ae=je,Oe=Ne;var We=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var r=e.__data__;return We(t)?r["string"==typeof t?"string":"hash"]:r.map},Ve=Le;var Ie=Le;var Te=Le;var Pe=Le;var Re=function(){this.size=0,this.__data__={hash:new Ee,map:new(Oe||Ae),string:new Ee}},Me=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Ie(this,e).get(e)},Xe=function(e){return Te(this,e).has(e)},Ge=function(e,t){var r=Pe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qe.prototype.clear=Re,qe.prototype.delete=Me,qe.prototype.get=Ze,qe.prototype.has=Xe,qe.prototype.set=Ge;var Ue=qe;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Je.Cache||Ue),r}Je.Cache=Ue;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,et=function(e){var t=Ke(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,r,n,o){t.push(n?o.replace(Ye,"$1"):r||e)})),t}));var tt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},rt=d,nt=D,ot=u?u.prototype:void 0,it=ot?ot.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(rt(t))return tt(t,e)+"";if(nt(t))return it?it.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},lt=at;var ct=d,dt=j,ht=et,gt=function(e){return null==e?"":lt(e)};var st=D;var ut=function(e,t){return ct(e)?e:dt(e,t)?[e]:ht(gt(e))},ft=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var r=0,n=(t=ut(t,e)).length;null!=e&&r<n;)e=e[ft(t[r++])];return r&&r==n?e:void 0};var yt=function(e,t,r){var n=null==e?void 0:pt(e,t);return void 0===n?r:n};const Ct=(e,t,r)=>t?yt(r,t)||yt(e,t):r||e,mt=(e,t)=>{const r=t||e.defaultValue;return yt(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(vt||(vt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ft=e=>t=>{const r=t.theme,n=mt(St,r[vt.colorScheme]);return r.options&&r.options.color?Ct(n,e,r.options.color):Ct(n,e)},$t={Brand:{1:Ft("Brand.1"),2:Ft("Brand.2"),3:Ft("Brand.3"),4:Ft("Brand.4"),5:Ft("Brand.5"),6:Ft("Brand.6")},Primary:Ft("Primary"),PrimaryDark:Ft("PrimaryDark"),Secondary:Ft("Secondary"),Accent:{Light:{1:Ft("Accent.Light.1"),2:Ft("Accent.Light.2"),3:Ft("Accent.Light.3"),4:Ft("Accent.Light.4"),5:Ft("Accent.Light.5"),6:Ft("Accent.Light.6")},Dark:{1:Ft("Accent.Dark.1"),2:Ft("Accent.Dark.2"),3:Ft("Accent.Dark.3")}},Neutral:{1:Ft("Neutral.1"),2:Ft("Neutral.2"),3:Ft("Neutral.3"),4:Ft("Neutral.4"),5:Ft("Neutral.5"),6:Ft("Neutral.6"),7:Ft("Neutral.7"),8:Ft("Neutral.8")},Validation:{Green:{Text:Ft("Validation.Green.Text"),Icon:Ft("Validation.Green.Icon"),Border:Ft("Validation.Green.Border"),Background:Ft("Validation.Green.Background")},Orange:{Text:Ft("Validation.Orange.Text"),Icon:Ft("Validation.Orange.Icon"),Border:Ft("Validation.Orange.Border"),Background:Ft("Validation.Orange.Background"),Badge:Ft("Validation.Orange.Badge")},Red:{Text:Ft("Validation.Red.Text"),Icon:Ft("Validation.Red.Icon"),Border:Ft("Validation.Red.Border"),Background:Ft("Validation.Red.Background")}},Shadow:{Accent:Ft("Shadow.Accent"),Red:Ft("Shadow.Red"),Elevation:Ft("Shadow.Elevation")}},bt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ht={collections:{base:{D1:{fontFamily:bt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Bt=e=>t=>{const r=t.theme,n=mt(Ht,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?Ct(n,e,r.options.textStyle):Ct(n,e)},wt={D1:{fontFamily:Bt("D1.fontFamily"),fontSize:Bt("D1.fontSize"),fontWeight:Bt("D1.fontWeight"),lineHeight:Bt("D1.lineHeight"),letterSpacing:Bt("D1.letterSpacing")},D2:{fontFamily:Bt("D2.fontFamily"),fontSize:Bt("D2.fontSize"),fontWeight:Bt("D2.fontWeight"),lineHeight:Bt("D2.lineHeight"),letterSpacing:Bt("D2.letterSpacing")},D3:{fontFamily:Bt("D3.fontFamily"),fontSize:Bt("D3.fontSize"),fontWeight:Bt("D3.fontWeight"),lineHeight:Bt("D3.lineHeight"),letterSpacing:Bt("D3.letterSpacing")},D4:{fontFamily:Bt("D4.fontFamily"),fontSize:Bt("D4.fontSize"),fontWeight:Bt("D4.fontWeight"),lineHeight:Bt("D4.lineHeight"),letterSpacing:Bt("D4.letterSpacing")},DBody:{fontFamily:Bt("DBody.fontFamily"),fontSize:Bt("DBody.fontSize"),fontWeight:Bt("DBody.fontWeight"),lineHeight:Bt("DBody.lineHeight"),letterSpacing:Bt("DBody.letterSpacing")},H1:{fontFamily:Bt("H1.fontFamily"),fontSize:Bt("H1.fontSize"),fontWeight:Bt("H1.fontWeight"),lineHeight:Bt("H1.lineHeight"),letterSpacing:Bt("H1.letterSpacing")},H2:{fontFamily:Bt("H2.fontFamily"),fontSize:Bt("H2.fontSize"),fontWeight:Bt("H2.fontWeight"),lineHeight:Bt("H2.lineHeight"),letterSpacing:Bt("H2.letterSpacing")},H3:{fontFamily:Bt("H3.fontFamily"),fontSize:Bt("H3.fontSize"),fontWeight:Bt("H3.fontWeight"),lineHeight:Bt("H3.lineHeight"),letterSpacing:Bt("H3.letterSpacing")},H4:{fontFamily:Bt("H4.fontFamily"),fontSize:Bt("H4.fontSize"),fontWeight:Bt("H4.fontWeight"),lineHeight:Bt("H4.lineHeight"),letterSpacing:Bt("H4.letterSpacing")},H5:{fontFamily:Bt("H5.fontFamily"),fontSize:Bt("H5.fontSize"),fontWeight:Bt("H5.fontWeight"),lineHeight:Bt("H5.lineHeight"),letterSpacing:Bt("H5.letterSpacing")},H6:{fontFamily:Bt("H6.fontFamily"),fontSize:Bt("H6.fontSize"),fontWeight:Bt("H6.fontWeight"),lineHeight:Bt("H6.lineHeight"),letterSpacing:Bt("H6.letterSpacing")},Body:{fontFamily:Bt("Body.fontFamily"),fontSize:Bt("Body.fontSize"),fontWeight:Bt("Body.fontWeight"),lineHeight:Bt("Body.lineHeight"),letterSpacing:Bt("Body.letterSpacing")},BodySmall:{fontFamily:Bt("BodySmall.fontFamily"),fontSize:Bt("BodySmall.fontSize"),fontWeight:Bt("BodySmall.fontWeight"),lineHeight:Bt("BodySmall.lineHeight"),letterSpacing:Bt("BodySmall.letterSpacing")},XSmall:{fontFamily:Bt("XSmall.fontFamily"),fontSize:Bt("XSmall.fontSize"),fontWeight:Bt("XSmall.fontWeight"),lineHeight:Bt("XSmall.lineHeight"),letterSpacing:Bt("XSmall.letterSpacing")}},Dt=e=>{switch(e){case 700:case"bold":return bt.Bold;case 600:case"semibold":return bt.Semibold;case 300:case"light":return bt.Light;case 400:case"regular":return bt.Regular;default:return""}},_t=(e,t)=>r=>{const n=wt[e].fontFamily(r),o=wt[e].fontWeight(r);return Object.values(bt).includes(n)?l`
                font-family: ${Dt(t)||Dt(o)||n};
                font-weight: normal !important;
            `:l`
            font-family: ${n};
            font-weight: ${(xt(t)||o)??"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=(e,t,r=!1)=>n=>{const o=wt[e],i=o.fontSize(n);return l`
            ${_t(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},zt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var jt,Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var Et=e;const At=e=>Et.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Et.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Ot;At.displayName="ExternalIcon",jt=Nt.ExternalIcon=At,function(e){e.D1=a.h1`
        ${e=>l`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${zt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Vt({...e,textStyle:"Body"}),Small:e=>Vt({...e,textStyle:"BodySmall"})}}(Ot||(Ot={}));const Wt=a.a`
    ${e=>l`
            ${kt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Lt=a(jt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=({external:e=!1,children:n,...o})=>t(Wt,{...o,children:[n,e&&r(Lt,{})]});var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Tt=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return l`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?l`
                        border-color: ${$t.Validation.Red.Icon};
                        background: ${$t.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${$t.Shadow.Red};
                        }
                    `:e.$disabled?l`
                        border-color: transparent;
                    `:l`
                        border-color: transparent;

                        :hover {
                            background: ${$t.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?l`
                        background: ${$t.Neutral[6]};
                        border-color: ${$t.Neutral[5]};
                    `:e.$disabled&&e.$selected?l`
                        background: ${$t.Neutral[6]};
                        border-color: ${$t.Neutral[4]};
                    `:e.$error?l`
                        background: ${$t.Neutral[8]};
                        border-color: ${$t.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${$t.Shadow.Red};
                        }
                    `:e.$selected?l`
                        background: ${$t.Accent.Light[5]};
                        border-color: ${$t.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${$t.Shadow.Accent};
                        }
                    `:l`
                        background: ${$t.Neutral[8]};
                        border-color: ${$t.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${$t.Shadow.Accent};
                            border-color: ${$t.Accent.Light[1]};
                        }
                    `}
`,Pt=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Rt=a.div`
    display: flex;
    flex-direction: column;
`,Mt=a.label`
    ${e=>e.$selected&&!e.$indicator?l`
                ${kt("H4","semibold")}
            `:l`
                ${kt("H4","regular")}
            `}

    color: ${$t.Neutral[1]};

    ${e=>e.$disabled?l`
                color: ${$t.Neutral[3](e)};
            `:e.$selected?l`
                color: ${$t.Primary(e)};
            `:void 0}
`;var Zt,Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});var Gt=e;const qt=e=>Gt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Gt.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});qt.displayName="CircleIcon",Zt=Xt.CircleIcon=qt;var Ut,Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});var Kt=e;const Qt=e=>Kt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Kt.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});Qt.displayName="CircleDotIcon",Ut=Jt.CircleDotIcon=Qt;var Yt,er={};Object.defineProperty(er,"__esModule",{value:!0});var tr=e;const rr=e=>tr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:tr.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});rr.displayName="CrossIcon",Yt=er.CrossIcon=rr;var nr,or={};Object.defineProperty(or,"__esModule",{value:!0});var ir=e;const ar=e=>ir.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ir.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});ar.displayName="SquareIcon",nr=or.SquareIcon=ar;var lr,cr={};Object.defineProperty(cr,"__esModule",{value:!0});var dr=e;const hr=e=>dr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:dr.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});hr.displayName="SquareTickFillIcon",lr=cr.SquareTickFillIcon=hr;var gr,sr={};Object.defineProperty(sr,"__esModule",{value:!0});var ur=e;const fr=e=>ur.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ur.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});fr.displayName="TickIcon",gr=sr.TickIcon=fr;const pr=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?l`
                    color: ${$t.Primary};
                `:l`
                    color: ${$t.Neutral[4]};
                `};
    }
`,yr=({type:e,active:t=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=r(t?lr:nr,{});break;case"radio":i=r(t?Ut:Zt,{});break;case"tick":i=r(gr,{});break;case"cross":i=r(Yt,{});break;default:i=null}return r(pr,{className:o,$active:t,disabled:n,children:i})},Cr=({type:e="checkbox",indicator:a,checked:l,styleType:c="default",children:d,disabled:h,error:g,name:s,id:u,className:f,"data-testid":p,onChange:y})=>{const[C,m]=n(l),[v]=n((()=>crypto.randomUUID())),S=u?`${u}-input`:v,F=o();i((()=>{m(l)}),[l]);return t(Tt,{$selected:C,$disabled:h,className:f,$styleType:c,$error:g,$indicator:a,id:u,"data-testid":p,children:[a&&(()=>{let t;switch(e){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=e}return r(yr,{type:t,active:C,disabled:h})})(),r(Pt,{ref:F,name:s,id:S,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:t=>{if(!h){switch(e){case"checkbox":C||m((e=>!e));break;case"radio":case"yes":case"no":C||m(!0)}y&&y(t)}},checked:C}),r(Rt,{children:r(Mt,{htmlFor:S,$selected:C,$indicator:a,$disabled:h,"data-testid":"toggle-label",children:d})})]})};export{Cr as Toggle};
//# sourceMappingURL=index.js.map
