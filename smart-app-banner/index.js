import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n from"react";import{CrossIcon as i}from"@lifesg/react-icons/cross";import{StarIcon as a}from"@lifesg/react-icons/star";import{StarFillIcon as o}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{keyframes as d,css as s}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,p="object"==typeof self&&self&&self.Object===Object&&self,m=u||p||Function("return this")(),y=m.Symbol,F=y,S=Object.prototype,$=S.hasOwnProperty,b=S.toString,B=F?F.toStringTag:void 0;var v=function(e){var t=$.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=b.call(e);return n&&(t?e[B]=r:delete e[B]),i},D=Object.prototype.toString;var H=v,w=function(e){return D.call(e)},x=y?y.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?H(e):w(e)};var E=z,_=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==E(e)},A=f,N=k,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var O=function(e,t){if(A(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!N(e))||(C.test(e)||!W.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=z,R=T;var I,P=function(e){if(!R(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=m["__core-js_shared__"],L=(I=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var X=function(e){return!!L&&L in e},G=Function.prototype.toString;var M=P,U=X,Y=T,Z=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,ee=K.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Y(e)||U(e))&&(M(e)?te:q).test(Z(e))},ne=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ae=ie(Object,"create"),oe=ae;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ae,se=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return se.call(t,e)?t[e]:void 0},ge=ae,fe=Object.prototype.hasOwnProperty;var ue=ae;var pe=le,me=ce,ye=he,Fe=function(e){var t=this.__data__;return ge?void 0!==t[e]:fe.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}$e.prototype.clear=pe,$e.prototype.delete=me,$e.prototype.get=ye,$e.prototype.has=Fe,$e.prototype.set=Se;var be=$e;var Be=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},He=De,we=Array.prototype.splice;var xe=De;var ze=De;var Ee=De;var _e=Be,ke=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():we.call(t,r,1),--this.size,!0)},Ae=function(e){var t=this.__data__,r=xe(t,e);return r<0?void 0:t[r][1]},Ne=function(e){return ze(this.__data__,e)>-1},We=function(e,t){var r=this.__data__,n=Ee(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ce(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ce.prototype.clear=_e,Ce.prototype.delete=ke,Ce.prototype.get=Ae,Ce.prototype.has=Ne,Ce.prototype.set=We;var Oe=Ce,Te=ie(m,"Map"),je=be,Re=Oe,Ie=Te;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Pe(t)?r["string"==typeof t?"string":"hash"]:r.map},Le=Ve;var Xe=Ve;var Ge=Ve;var Me=Ve;var Ue=function(){this.size=0,this.__data__={hash:new je,map:new(Ie||Re),string:new je}},Ye=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Xe(this,e).get(e)},qe=function(e){return Ge(this,e).has(e)},Je=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Ye,Ke.prototype.get=Ze,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(et.Cache||Qe),r}et.Cache=Qe;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,it=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,i){t.push(n?i.replace(nt,"$1"):r||e)})),t}));var at=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ot=f,lt=k,ct=y?y.prototype:void 0,dt=ct?ct.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(ot(t))return at(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ht=st;var gt=f,ft=O,ut=it,pt=function(e){return null==e?"":ht(e)};var mt=k;var yt=function(e,t){return gt(e)?e:ft(e,t)?[e]:ut(pt(e))},Ft=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[Ft(t[r++])];return r&&r==n?e:void 0};var $t=function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n};const bt=(e,t,r)=>t?$t(r,t)||$t(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return $t(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=Bt(Dt,r[vt.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},wt={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},xt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},zt=e=>Object.keys(xt).reduce(((t,r)=>{const n=xt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Et=zt("max-width"),_t=(zt("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),kt=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,At=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${kt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Nt=c(At)`
    animation-delay: -0.45s;
`,Wt=c(At)`
    animation-delay: -0.3s;
`,Ct=c(At)`
    animation-delay: -0.15s;
`,Ot={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Tt={collections:{base:{D1:{fontFamily:Ot.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},jt=e=>t=>{const r=t.theme,n=Bt(Tt,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},Rt={D1:{fontFamily:jt("D1.fontFamily"),fontSize:jt("D1.fontSize"),fontWeight:jt("D1.fontWeight"),lineHeight:jt("D1.lineHeight"),letterSpacing:jt("D1.letterSpacing")},D2:{fontFamily:jt("D2.fontFamily"),fontSize:jt("D2.fontSize"),fontWeight:jt("D2.fontWeight"),lineHeight:jt("D2.lineHeight"),letterSpacing:jt("D2.letterSpacing")},D3:{fontFamily:jt("D3.fontFamily"),fontSize:jt("D3.fontSize"),fontWeight:jt("D3.fontWeight"),lineHeight:jt("D3.lineHeight"),letterSpacing:jt("D3.letterSpacing")},D4:{fontFamily:jt("D4.fontFamily"),fontSize:jt("D4.fontSize"),fontWeight:jt("D4.fontWeight"),lineHeight:jt("D4.lineHeight"),letterSpacing:jt("D4.letterSpacing")},DBody:{fontFamily:jt("DBody.fontFamily"),fontSize:jt("DBody.fontSize"),fontWeight:jt("DBody.fontWeight"),lineHeight:jt("DBody.lineHeight"),letterSpacing:jt("DBody.letterSpacing")},H1:{fontFamily:jt("H1.fontFamily"),fontSize:jt("H1.fontSize"),fontWeight:jt("H1.fontWeight"),lineHeight:jt("H1.lineHeight"),letterSpacing:jt("H1.letterSpacing")},H2:{fontFamily:jt("H2.fontFamily"),fontSize:jt("H2.fontSize"),fontWeight:jt("H2.fontWeight"),lineHeight:jt("H2.lineHeight"),letterSpacing:jt("H2.letterSpacing")},H3:{fontFamily:jt("H3.fontFamily"),fontSize:jt("H3.fontSize"),fontWeight:jt("H3.fontWeight"),lineHeight:jt("H3.lineHeight"),letterSpacing:jt("H3.letterSpacing")},H4:{fontFamily:jt("H4.fontFamily"),fontSize:jt("H4.fontSize"),fontWeight:jt("H4.fontWeight"),lineHeight:jt("H4.lineHeight"),letterSpacing:jt("H4.letterSpacing")},H5:{fontFamily:jt("H5.fontFamily"),fontSize:jt("H5.fontSize"),fontWeight:jt("H5.fontWeight"),lineHeight:jt("H5.lineHeight"),letterSpacing:jt("H5.letterSpacing")},H6:{fontFamily:jt("H6.fontFamily"),fontSize:jt("H6.fontSize"),fontWeight:jt("H6.fontWeight"),lineHeight:jt("H6.lineHeight"),letterSpacing:jt("H6.letterSpacing")},Body:{fontFamily:jt("Body.fontFamily"),fontSize:jt("Body.fontSize"),fontWeight:jt("Body.fontWeight"),lineHeight:jt("Body.lineHeight"),letterSpacing:jt("Body.letterSpacing")},BodySmall:{fontFamily:jt("BodySmall.fontFamily"),fontSize:jt("BodySmall.fontSize"),fontWeight:jt("BodySmall.fontWeight"),lineHeight:jt("BodySmall.lineHeight"),letterSpacing:jt("BodySmall.letterSpacing")},XSmall:{fontFamily:jt("XSmall.fontFamily"),fontSize:jt("XSmall.fontSize"),fontWeight:jt("XSmall.fontWeight"),lineHeight:jt("XSmall.lineHeight"),letterSpacing:jt("XSmall.letterSpacing")}},It=e=>{switch(e){case 700:case"bold":return Ot.Bold;case 600:case"semibold":return Ot.Semibold;case 300:case"light":return Ot.Light;case 400:case"regular":return Ot.Regular;default:return""}},Pt=(e,t)=>r=>{const n=Rt[e].fontFamily(r),i=Rt[e].fontWeight(r);return Object.values(Ot).includes(n)?s`
                font-family: ${It(t)||It(i)||n};
                font-weight: normal !important;
            `:s`
            font-family: ${n};
            font-weight: ${(Vt(t)||i)??"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Lt=(e,t,r=!1)=>n=>{const i=Rt[e],a=i.fontSize(n);return s`
            ${Pt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${s`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1)=>t?s`
            display: block;
        `:e?s`
            display: inline;
        `:s`
            display: block;
        `;var Gt;!function(e){e.D1=c.h1`
        ${e=>s`
                ${Lt("D1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>s`
                ${Lt("D2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>s`
                ${Lt("D3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>s`
                ${Lt("D4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>s`
                ${Lt("DBody",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>s`
                ${Lt("H1",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>s`
                ${Lt("H2",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>s`
                ${Lt("H3",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>s`
                ${Lt("H4",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>s`
                ${Lt("H5",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>s`
                ${Lt("H6",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>s`
                ${Lt("Body",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>s`
                ${Lt("BodySmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>s`
                ${Lt("XSmall",e.weight,e.paragraph)}
                color: ${wt.Neutral[1]};
                ${Xt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Yt({...e,textStyle:"Body"}),Small:e=>Yt({...e,textStyle:"BodySmall"})}}(Gt||(Gt={}));const Mt=c.a`
    ${e=>s`
            ${Lt(e.textStyle,e.weight)}
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
`,Ut=c(h)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Yt=({external:r=!1,children:n,...i})=>e(Mt,{...i,children:[n,r&&t(Ut,{})]});var Zt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Zt||(Zt={}));const qt=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return s`
                    background-color: ${wt.Neutral[8](e)};
                    border: 1px solid ${wt.Primary(e)};

                    span {
                        color: ${wt.Primary(e)};
                    }
                `;case"light":return s`
                    background-color: ${wt.Neutral[8](e)};
                    border: 1px solid ${wt.Neutral[5](e)};

                    span {
                        color: ${wt.Primary(e)};
                    }
                `;case"disabled":return s`
                    background-color: ${wt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${wt.Neutral[3](e)};
                    }
                `;case"link":return s`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${wt.Secondary};
                        }
                    }
                `;default:return s`
                    background-color: ${wt.Primary(e)};
                    border: 1px solid transparent;

                    ${Et.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${wt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?s`
                    height: 2.5rem;
                    span {
                        ${Lt("H5","semibold")}
                    }

                    ${Et.mobileS} {
                        height: auto;
                    }
                `:s`
                    height: 3rem;
                    span {
                        ${Lt("H4","semibold")}
                    }

                    ${Et.mobileS} {
                        height: auto;
                    }
                `}
`,Jt=c((({color:r,className:n,size:i=18})=>e(_t,{className:n,$size:i,$color:r,children:[t(At,{id:"inner1",$size:i-2,$borderWidth:2}),t(Nt,{id:"inner2",$size:i-2,$borderWidth:2}),t(Wt,{id:"inner3",$size:i-2,$borderWidth:2}),t(Ct,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=wt.Primary(e);break;case"disabled":t=wt.Neutral[3](e);break;default:t=wt.Neutral[8](e)}return s`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Kt={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(qt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&t(Jt,{...d}),t("span",{children:i})]})})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",...c}=r,d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(qt,{ref:n,"data-testid":c["data-testid"]||"button",disabled:a,...d,...c,children:[o&&t(Jt,{...d,size:16}),t("span",{children:i})]})}))},Qt=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&s`
                background-color: ${wt.Neutral[7]};
            `}
    }
`,er=n.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...a},o)=>t(Qt,{ref:o,$outline:n,$highlight:r,type:i,...a,children:e}))),tr=d`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,rr=c.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${wt.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return s`
                animation: ${tr} 0.3s;
            `}}
`,nr=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,ir=c(er)`
    padding: 0;
`,ar=c(i)`
    color: ${wt.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,or=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,lr=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${Et.mobileM} {
        margin: 0 0.5rem;
    }
`,cr=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,dr=c.div`
    max-width: 30%;
`,sr=c(Kt.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Lt("XSmall","semibold")};
    }
`,hr=c(Gt.H6)`
    overflow-wrap: anywhere;
    ${Et.mobileM} {
        ${Lt("XSmall","semibold")}
    }
`,gr=c(Gt.XSmall)`
    overflow-wrap: anywhere;
`,fr=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,ur=s`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,pr=c(o)`
    ${ur}
`,mr=c(l)`
    ${ur}
`,yr=c(a)`
    ${ur}
`,Fr="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",Sr="smart-app-banner";const $r=n.forwardRef((function(n,i){const{className:a,show:o,href:l,content:c,offset:d=0,icon:s=Fr,animated:h=!1,onDismiss:g,onClick:f}=n,{title:u,message:p,buttonLabel:m,buttonAriaLabel:y,numberOfStars:F}=c,S=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),f?.()};return t(r,{children:o&&e(rr,{ref:i,$isAnimated:h,$offset:d,className:a,children:[t(nr,{onClick:g,id:`${Sr}-dismiss`,"data-testid":`${Sr}-dismiss-container`,children:t(ir,{"aria-label":"Dismiss",children:t(ar,{})})}),e(or,{onClick:S,id:`${Sr}-proceed`,"data-testid":`${Sr}-proceed-container`,children:[t(cr,{src:s,alt:"lifesg-app-icon"}),e(lr,{children:[t(hr,{children:u}),t(gr,{children:p}),(()=>{if(isNaN(F)||F<0)return;const e=[],r=F-Math.floor(F)>=.4;for(let r=0;r<Math.floor(F);r++)e.push(t(pr,{},`star${r}`));if(r&&e.push(t(mr,{},"halfstar")),e.length<5){const r=5-e.length;for(let n=0;n<r;n++)e.push(t(yr,{},`emptystar${n}`))}return t(fr,{children:e.slice(0,5)})})()]}),t(dr,{children:t(sr,{type:"button",onClick:S,"aria-label":y,children:m})})]})]})})}));export{$r as SmartAppBanner};
//# sourceMappingURL=index.js.map
