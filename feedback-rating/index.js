import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";const d={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:d.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),m=p.Symbol,y=m,F=Object.prototype,b=F.hasOwnProperty,S=F.toString,B=y?y.toStringTag:void 0;var $=function(e){var t=b.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=S.call(e);return n&&(t?e[B]=r:delete e[B]),i},v=Object.prototype.toString;var D=$,H=function(e){return v.call(e)},x=m?m.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?D(e):H(e)};var E=w,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==E(e)},k=h,O=_,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var W=function(e,t){if(k(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!O(e))||(j.test(e)||!A.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=w,T=C;var P,R=function(e){if(!T(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=p["__core-js_shared__"],V=(P=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var L=function(e){return!!V&&V in e},X=Function.prototype.toString;var G=R,M=L,U=C,Z=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Y=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,ee=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(G(e)?ee:Y).test(Z(e))},re=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var r=re(e,t);return te(r)?r:void 0},ie=ne(Object,"create"),ae=ie;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ce){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return de.call(t,e)?t[e]:void 0},ge=ie,he=Object.prototype.hasOwnProperty;var ue=ie;var fe=oe,pe=le,me=se,ye=function(e){var t=this.__data__;return ge?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}be.prototype.clear=fe,be.prototype.delete=pe,be.prototype.get=me,be.prototype.has=ye,be.prototype.set=Fe;var Se=be;var Be=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var r=e.length;r--;)if($e(e[r][0],t))return r;return-1},De=ve,He=Array.prototype.splice;var xe=ve;var we=ve;var Ee=ve;var ze=Be,_e=function(e){var t=this.__data__,r=De(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ke=function(e){var t=this.__data__,r=xe(t,e);return r<0?void 0:t[r][1]},Oe=function(e){return we(this.__data__,e)>-1},Ae=function(e,t){var r=this.__data__,n=Ee(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}je.prototype.clear=ze,je.prototype.delete=_e,je.prototype.get=ke,je.prototype.has=Oe,je.prototype.set=Ae;var We=je,Ce=ne(p,"Map"),Ne=Se,Te=We,Pe=Ce;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ve=Ie;var Le=Ie;var Xe=Ie;var Ge=Ie;var Me=function(){this.size=0,this.__data__={hash:new Ne,map:new(Pe||Te),string:new Ne}},Ue=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Le(this,e).get(e)},Ye=function(e){return Xe(this,e).has(e)},qe=function(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Je.prototype.clear=Me,Je.prototype.delete=Ue,Je.prototype.get=Ze,Je.prototype.has=Ye,Je.prototype.set=qe;var Ke=Je;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Qe.Cache||Ke),r}Qe.Cache=Ke;var et=Qe;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,nt=function(e){var t=et(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,r,n,i){t.push(n?i.replace(rt,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},at=h,ot=_,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(at(t))return it(t,e)+"";if(ot(t))return ct?ct.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},st=dt;var gt=h,ht=W,ut=nt,ft=function(e){return null==e?"":st(e)};var pt=_;var mt=function(e,t){return gt(e)?e:ht(e,t)?[e]:ut(ft(e))},yt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var r=0,n=(t=mt(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var bt=function(e,t,r){var n=null==e?void 0:Ft(e,t);return void 0===n?r:n};const St=(e,t,r)=>t?bt(r,t)||bt(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return bt(e.collections,r)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const vt={collections:{base:s},defaultValue:"base"},Dt=e=>t=>{const r=t.theme,n=Bt(vt,r[$t.textStyleScheme]);return r.options&&r.options.textStyle?St(n,e,r.options.textStyle):St(n,e)},Ht={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},xt=e=>{switch(e){case 700:case"bold":return d.Bold;case 600:case"semibold":return d.Semibold;case 300:case"light":return d.Light;case 400:case"regular":return d.Regular;default:return""}},wt=(e,t)=>r=>{var i;const a=Ht[e].fontFamily(r),o=Ht[e].fontWeight(r);return Object.values(d).includes(a)?n`
                font-family: ${xt(t)||xt(o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=Et(t)||o)&&void 0!==i?i:"normal"};
        `},Et=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=(e,t,r=!1)=>i=>{const a=Ht[e],o=a.fontSize(i);return n`
            ${wt(e,t)}
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
        `;function kt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}const Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const r=t.theme,n=Bt(Ot,r[$t.colorScheme]);return r.options&&r.options.color?St(n,e,r.options.color):St(n,e)},jt={Brand:{1:At("Brand.1"),2:At("Brand.2"),3:At("Brand.3"),4:At("Brand.4"),5:At("Brand.5"),6:At("Brand.6")},Primary:At("Primary"),PrimaryDark:At("PrimaryDark"),Secondary:At("Secondary"),Accent:{Light:{1:At("Accent.Light.1"),2:At("Accent.Light.2"),3:At("Accent.Light.3"),4:At("Accent.Light.4"),5:At("Accent.Light.5"),6:At("Accent.Light.6")},Dark:{1:At("Accent.Dark.1"),2:At("Accent.Dark.2"),3:At("Accent.Dark.3")}},Neutral:{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")},Validation:{Green:{Text:At("Validation.Green.Text"),Icon:At("Validation.Green.Icon"),Border:At("Validation.Green.Border"),Background:At("Validation.Green.Background")},Orange:{Text:At("Validation.Orange.Text"),Icon:At("Validation.Orange.Icon"),Border:At("Validation.Orange.Border"),Background:At("Validation.Orange.Background"),Badge:At("Validation.Orange.Badge")},Red:{Text:At("Validation.Red.Text"),Icon:At("Validation.Red.Icon"),Border:At("Validation.Red.Border"),Background:At("Validation.Red.Background")},Blue:{Text:At("Validation.Blue.Text"),Icon:At("Validation.Blue.Icon"),Border:At("Validation.Blue.Border"),Background:At("Validation.Blue.Background")}},Shadow:{Accent:At("Shadow.Accent"),Red:At("Shadow.Red"),Elevation:At("Shadow.Elevation")}};var Wt;!function(e){e.D1=r.h1`
        ${e=>n`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${_t(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const Ct=r.a`
    ${e=>n`
            ${zt(e.textStyle,e.weight)}
            color: ${jt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jt.Secondary};

                svg {
                    color: ${jt.Secondary};
                }
            }
        `}
`,Nt=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=r=>{var{external:n=!1,children:i}=r,a=kt(r,["external","children"]);return e(Ct,Object.assign({},a,{children:[i,n&&t(Nt,{})]}))};var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Rt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",It="Submit",Vt="Rate your experience",Lt=5,Xt=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Gt=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${jt.Primary};
    ${Xt}:focus-visible + & {
        outline: 0.125rem solid ${jt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Mt=r(o)`
    ${Gt}
`,Ut=r(l)`
    ${Gt}
`,Zt=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Yt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,qt=r=>{const{description:n,rating:i,onRatingChange:a}=r,o=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=i?Ut:Mt,{"aria-label":r})};return t(Yt,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Lt)].map(((r,n)=>{const l=n+1;return e(Zt,{children:[t(Xt,{type:"radio",name:"star",checked:l===i,onChange:()=>(e=>{a(e)})(l)}),o(l)]},l)}))}))},Jt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Kt=e=>Object.keys(Jt).reduce(((t,r)=>{const n=Jt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Qt=Kt("max-width"),er=(Kt("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),tr=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rr=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||jt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${tr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,nr=r(rr)`
    animation-delay: -0.45s;
`,ir=r(rr)`
    animation-delay: -0.3s;
`,ar=r(rr)`
    animation-delay: -0.15s;
`,or=r.button`
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
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Primary(e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"light":return n`
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Neutral[5](e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"disabled":return n`
                    background-color: ${jt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${jt.Neutral[3](e)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${jt.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${jt.Primary(e)};
                    border: 1px solid transparent;

                    ${Qt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${jt.Neutral[8](e)};
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

                    ${Qt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${zt("H4","semibold")}
                    }

                    ${Qt.mobileS} {
                        height: auto;
                    }
                `}
`,lr=r((({color:r,className:n,size:i=18})=>e(er,Object.assign({className:n,$size:i,$color:r},{children:[t(rr,{id:"inner1",$size:i-2,$borderWidth:2}),t(nr,{id:"inner2",$size:i-2,$borderWidth:2}),t(ir,{id:"inner3",$size:i-2,$borderWidth:2}),t(ar,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=jt.Primary(e);break;case"disabled":t=jt.Neutral[3](e);break;default:t=jt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cr={Default:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=kt(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(lr,Object.assign({},d)),t("span",{children:i})]}))})),Small:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=kt(r,["children","disabled","loading","styleType"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(lr,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},dr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,sr=r.div`
    border-top: 1px solid ${jt.Neutral[5]};
    border-bottom: 1px solid ${jt.Neutral[5]};
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
`,gr=r.div`
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
`,hr=r(cr.Default)`
    margin-top: 1rem;
    width: 100%;
`,ur=r=>{const{imgSrc:n,buttonLabel:i,description:a,rating:o,className:l,onRatingChange:c,onSubmit:d}=r,s=null!=n?n:Rt,g=null!=a?a:Vt;return e(sr,Object.assign({className:l},{children:[s&&t(dr,{src:s,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(gr,{children:[t(Wt.H3,Object.assign({weight:"semibold"},{children:g})),t(qt,{description:g,rating:o,onRatingChange:c}),t(hr,Object.assign({disabled:!o,onClick:d,type:"button"},{children:null!=i?i:It}))]})]}))};export{ur as FeedbackRating};
//# sourceMappingURL=index.js.map
