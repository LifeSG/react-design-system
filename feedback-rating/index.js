import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";const d={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},h={D1:{fontFamily:d.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),m=p.Symbol,y=m,F=Object.prototype,S=F.hasOwnProperty,b=F.toString,B=y?y.toStringTag:void 0;var $=function(e){var t=S.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=b.call(e);return n&&(t?e[B]=r:delete e[B]),i},v=Object.prototype.toString;var D=$,H=function(e){return v.call(e)},x=m?m.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?D(e):H(e)};var w=E,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==w(e)},k=s,A=_,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var N=function(e,t){if(k(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!A(e))||(C.test(e)||!W.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=E,j=T;var R,P=function(e){if(!j(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=p["__core-js_shared__"],V=(R=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var L=function(e){return!!V&&V in e},X=Function.prototype.toString;var G=P,M=L,U=T,Z=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Y=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,ee=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(G(e)?ee:Y).test(Z(e))},re=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var r=re(e,t);return te(r)?r:void 0},ie=ne(Object,"create"),ae=ie;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,de=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(ce){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return de.call(t,e)?t[e]:void 0},ge=ie,se=Object.prototype.hasOwnProperty;var ue=ie;var fe=oe,pe=le,me=he,ye=function(e){var t=this.__data__;return ge?void 0!==t[e]:se.call(t,e)},Fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=fe,Se.prototype.delete=pe,Se.prototype.get=me,Se.prototype.has=ye,Se.prototype.set=Fe;var be=Se;var Be=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var r=e.length;r--;)if($e(e[r][0],t))return r;return-1},De=ve,He=Array.prototype.splice;var xe=ve;var Ee=ve;var we=ve;var ze=Be,_e=function(e){var t=this.__data__,r=De(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ke=function(e){var t=this.__data__,r=xe(t,e);return r<0?void 0:t[r][1]},Ae=function(e){return Ee(this.__data__,e)>-1},We=function(e,t){var r=this.__data__,n=we(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ce(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ce.prototype.clear=ze,Ce.prototype.delete=_e,Ce.prototype.get=ke,Ce.prototype.has=Ae,Ce.prototype.set=We;var Ne=Ce,Te=ne(p,"Map"),Oe=be,je=Ne,Re=Te;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var r=e.__data__;return Pe(t)?r["string"==typeof t?"string":"hash"]:r.map},Ve=Ie;var Le=Ie;var Xe=Ie;var Ge=Ie;var Me=function(){this.size=0,this.__data__={hash:new Oe,map:new(Re||je),string:new Oe}},Ue=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Le(this,e).get(e)},Ye=function(e){return Xe(this,e).has(e)},qe=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Je.prototype.clear=Me,Je.prototype.delete=Ue,Je.prototype.get=Ze,Je.prototype.has=Ye,Je.prototype.set=qe;var Ke=Je;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Qe.Cache||Ke),r}Qe.Cache=Ke;var et=Qe;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,nt=function(e){var t=et(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,r,n,i){t.push(n?i.replace(rt,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},at=s,ot=_,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(at(t))return it(t,e)+"";if(ot(t))return ct?ct.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ht=dt;var gt=s,st=N,ut=nt,ft=function(e){return null==e?"":ht(e)};var pt=_;var mt=function(e,t){return gt(e)?e:st(e,t)?[e]:ut(ft(e))},yt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var r=0,n=(t=mt(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var St=function(e,t,r){var n=null==e?void 0:Ft(e,t);return void 0===n?r:n};const bt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const vt={collections:{base:h},defaultValue:"base"},Dt=e=>t=>{const r=t.theme,n=Bt(vt,r[$t.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},Ht={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},xt=e=>{switch(e){case 700:case"bold":return d.Bold;case 600:case"semibold":return d.Semibold;case 300:case"light":return d.Light;case 400:case"regular":return d.Regular;default:return""}},Et=(e,t)=>r=>{const i=Ht[e].fontFamily(r),a=Ht[e].fontWeight(r);return Object.values(d).includes(i)?n`
                font-family: ${xt(t)||xt(a)||i};
                font-weight: normal !important;
            `:n`
            font-family: ${i};
            font-weight: ${(wt(t)||a)??"normal"};
        `},wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=(e,t,r=!1)=>i=>{const a=Ht[e],o=a.fontSize(i);return n`
            ${Et(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},_t=(e=!1,t=!1)=>t?n`
            display: block;
        `:e?n`
            display: inline;
        `:n`
            display: block;
        `,kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const r=t.theme,n=Bt(kt,r[$t.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},Wt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}};var Ct;!function(e){e.D1=r.h1`
        ${e=>n`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ot({...e,textStyle:"Body"}),Small:e=>Ot({...e,textStyle:"BodySmall"})}}(Ct||(Ct={}));const Nt=r.a`
    ${e=>n`
            ${zt(e.textStyle,e.weight)}
            color: ${Wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt.Secondary};

                svg {
                    color: ${Wt.Secondary};
                }
            }
        `}
`,Tt=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ot=({external:r=!1,children:n,...i})=>e(Nt,{...i,children:[n,r&&t(Tt,{})]});var jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jt||(jt={}));const Rt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Pt="Submit",It="Rate your experience",Vt=5,Lt=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Xt=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Wt.Primary};
    ${Lt}:focus-visible + & {
        outline: 0.125rem solid ${Wt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Gt=r(o)`
    ${Xt}
`,Mt=r(l)`
    ${Xt}
`,Ut=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Zt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Yt=r=>{const{description:n,rating:i,onRatingChange:a}=r,o=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=i?Mt:Gt,{"aria-label":r})};return t(Zt,{role:"radiogroup","aria-label":n,children:[...Array(Vt)].map(((r,n)=>{const l=n+1;return e(Ut,{children:[t(Lt,{type:"radio",name:"star",checked:l===i,onChange:()=>(e=>{a(e)})(l)}),o(l)]},l)}))})},qt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Jt=e=>Object.keys(qt).reduce(((t,r)=>{const n=qt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Kt=Jt("max-width"),Qt=(Jt("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),er=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,tr=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${er} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,rr=r(tr)`
    animation-delay: -0.45s;
`,nr=r(tr)`
    animation-delay: -0.3s;
`,ir=r(tr)`
    animation-delay: -0.15s;
`,ar=r.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${Wt.Neutral[8](e)};
                    border: 1px solid ${Wt.Primary(e)};

                    span {
                        color: ${Wt.Primary(e)};
                    }
                `;case"light":return n`
                    background-color: ${Wt.Neutral[8](e)};
                    border: 1px solid ${Wt.Neutral[5](e)};

                    span {
                        color: ${Wt.Primary(e)};
                    }
                `;case"disabled":return n`
                    background-color: ${Wt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Wt.Neutral[3](e)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Wt.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${Wt.Primary(e)};
                    border: 1px solid transparent;

                    ${Kt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Wt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${zt("H5","semibold")}
                    }

                    ${Kt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${zt("H4","semibold")}
                    }

                    ${Kt.mobileS} {
                        height: auto;
                    }
                `}
`,or=r((({color:r,className:n,size:i=18})=>e(Qt,{className:n,$size:i,$color:r,children:[t(tr,{id:"inner1",$size:i-2,$borderWidth:2}),t(rr,{id:"inner2",$size:i-2,$borderWidth:2}),t(nr,{id:"inner3",$size:i-2,$borderWidth:2}),t(ir,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Wt.Primary(e);break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,lr={Default:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(ar,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&t(or,{...d}),t("span",{children:i})]})})),Small:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(ar,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&t(or,{...d,size:16}),t("span",{children:i})]})}))},cr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,dr=r.div`
    border-top: 1px solid ${Wt.Neutral[5]};
    border-bottom: 1px solid ${Wt.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,hr=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,gr=r(lr.Default)`
    margin-top: 1rem;
    width: 100%;
`,sr=r=>{const{imgSrc:n,buttonLabel:i,description:a,rating:o,className:l,onRatingChange:c,onSubmit:d}=r,h=n??Rt,g=a??It;return e(dr,{className:l,children:[h&&t(cr,{src:h,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(hr,{children:[t(Ct.H3,{weight:"semibold",children:g}),t(Yt,{description:g,rating:o,onRatingChange:c}),t(gr,{disabled:!o,onClick:d,type:"button",children:i??Pt})]})]})};export{sr as FeedbackRating};
//# sourceMappingURL=index.js.map
