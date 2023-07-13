import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as o,useEffect as a}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,u="object"==typeof self&&self&&self.Object===Object&&self,f=g||u||Function("return this")(),p=f.Symbol,s=p,F=Object.prototype,y=F.hasOwnProperty,S=F.toString,B=s?s.toStringTag:void 0;var m=function(e){var t=y.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var o=S.call(e);return r&&(t?e[B]=n:delete e[B]),o},v=Object.prototype.toString;var D=m,b=function(e){return v.call(e)},H=p?p.toStringTag:void 0;var $=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?D(e):b(e)};var x=$,E=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==x(e)},_=h,A=w,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var k=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(C.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=$,N=W;var O,I=function(e){if(!N(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=f["__core-js_shared__"],j=(O=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var R=function(e){return!!j&&j in e},L=Function.prototype.toString;var P=I,G=R,X=W,M=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,Y=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(e){return!(!X(e)||G(e))&&(P(e)?Y:U).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Z(n)?n:void 0},ne=te(Object,"create"),re=ne;var oe=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},de=ne,he=Object.prototype.hasOwnProperty;var ge=ne;var ue=oe,fe=ae,pe=ce,se=function(e){var t=this.__data__;return de?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=ue,ye.prototype.delete=fe,ye.prototype.get=pe,ye.prototype.has=se,ye.prototype.set=Fe;var Se=ye;var Be=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1},De=ve,be=Array.prototype.splice;var He=ve;var $e=ve;var xe=ve;var Ee=Be,we=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():be.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return $e(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ce.prototype.clear=Ee,Ce.prototype.delete=we,Ce.prototype.get=_e,Ce.prototype.has=Ae,Ce.prototype.set=ze;var ke=Ce,We=te(f,"Map"),Te=Se,Ne=ke,Oe=We;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ve;var Re=Ve;var Le=Ve;var Pe=Ve;var Ge=function(){this.size=0,this.__data__={hash:new Te,map:new(Oe||Ne),string:new Te}},Xe=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Re(this,e).get(e)},Ue=function(e){return Le(this,e).has(e)},qe=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ge,Je.prototype.delete=Xe,Je.prototype.get=Me,Je.prototype.has=Ue,Je.prototype.set=qe;var Ke=Je;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Qe.Cache||Ke),n}Qe.Cache=Ke;var Ye=Qe;var Ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ze,(function(e,n,r,o){t.push(r?o.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},rt=h,ot=w,at=p?p.prototype:void 0,it=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(ot(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=lt;var dt=h,ht=k,gt=tt,ut=function(e){return null==e?"":ct(e)};var ft=w;var pt=function(e,t){return dt(e)?e:ht(e,t)?[e]:gt(ut(e))},st=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[st(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Bt(vt,n[mt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},bt={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},Ht={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$t={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=Bt($t,n[mt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},Et={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},_t=(e,t)=>n=>{const r=Et[e].fontFamily(n),o=Et[e].fontWeight(n);return Object.values(Ht).includes(r)?l`
                font-family: ${wt(t)||wt(o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(At(t)||o)??"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=(e,t,n=!1)=>r=>{const o=Et[e],a=o.fontSize(r);return l`
            ${_t(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ct=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var kt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Ct(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Nt({...e,textStyle:"Body"}),Small:e=>Nt({...e,textStyle:"BodySmall"})}}(kt||(kt={}));const Wt=i.a`
    ${e=>l`
            ${zt(e.textStyle,e.weight)}
            color: ${bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${bt.Secondary};

                svg {
                    color: ${bt.Secondary};
                }
            }
        `}
`,Tt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=({external:n=!1,children:r,...o})=>e(Wt,{...o,children:[r,n&&t(Tt,{})]});var Ot;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ot||(Ot={}));const It=i(kt.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return l`
                color: ${bt.Neutral[4](e)};
            `}}
`,Vt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,h]=o("");a((()=>{h(g(`${e||""}`))}),[e,i]);const g=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(d)?d:t(It,{"data-testid":"counter-label",weight:"semibold",disabled:l,children:d})})},jt={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${bt.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${bt.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${bt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:l`
        inset 0 0 6px 1px ${bt.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${bt.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${bt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Rt=e=>t=>{const n=t.theme,r=Bt(jt,n[mt.designTokenScheme]);return n.options?.designToken?St(r,e,n.options.designToken):St(r,e)},Lt=Rt("InputBoxShadow"),Pt=Rt("InputErrorBoxShadow"),Gt=(Rt("ElevationBoxShadow"),Rt("Table.Header"),Rt("Table.Cell.Primary"),Rt("Table.Cell.Secondary"),Rt("Table.Cell.Selected"),Rt("Table.Cell.Hover"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Xt=i.div`
    display: flex;
    flex-direction: column;
`,Mt=i.textarea`
    border: 1px solid ${bt.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Gt};

    ${zt("Body","regular")}
    color: ${bt.Neutral[1]};
    background: ${bt.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${bt.Accent.Light[1]};
        box-shadow: ${Lt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${bt.Neutral[3]};
    }

    ${e=>e.readOnly?l`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?l`
                background: ${bt.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${bt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${bt.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${bt.Validation.Red.Border(e)};
                    box-shadow: ${Pt};
                }
            `:void 0}
`;r.forwardRef((({value:e,disabled:n,error:r,rows:o=5,...a},i)=>t(Mt,{ref:i,disabled:n,value:e,error:r,rows:o,...a})));const Ut=r.forwardRef((({value:n,disabled:r,rows:i=5,onChange:l,...c},d)=>{const[h,g]=o(n);a((()=>{g(n)}),[n]);return e(Xt,{children:[t(Mt,{ref:d,disabled:r,value:h,rows:i||5,onChange:e=>{const t=e.target.value;c.maxLength&&t.length>c.maxLength||(g(t),e.target.value=t,l&&l(e))},...c}),c.maxLength&&t(Vt,{disabled:r,value:h,maxLength:c.maxLength,renderCustomCounter:c.renderCustomCounter})]})}));export{Ut as Textarea};
//# sourceMappingURL=index.js.map
