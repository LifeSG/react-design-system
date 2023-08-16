import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useImperativeHandle as o,useEffect as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as b}from"@lifesg/react-icons/external";import{CrossIcon as y}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as v}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as x}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";function _(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k=Array.isArray,F="object"==typeof O&&O&&O.Object===Object&&O,B=F,D="object"==typeof self&&self&&self.Object===Object&&self,j=B||D||Function("return this")(),M=j.Symbol,C=M,A=Object.prototype,z=A.hasOwnProperty,E=A.toString,P=C?C.toStringTag:void 0;var T=function(e){var t=z.call(e,P),r=e[P];try{e[P]=void 0;var n=!0}catch(e){}var a=E.call(e);return n&&(t?e[P]=r:delete e[P]),a},N=Object.prototype.toString;var I=T,H=function(e){return N.call(e)},L=M?M.toStringTag:void 0;var R=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?I(e):H(e)};var V=function(e){return null!=e&&"object"==typeof e},W=R,Y=V;var q=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==W(e)},U=k,G=q,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var K=function(e,t){if(U(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!G(e))||(Z.test(e)||!Q.test(e)||null!=t&&e in Object(t))};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},J=R,ee=X;var te,re=function(e){if(!ee(e))return!1;var t=J(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ne=j["__core-js_shared__"],ae=(te=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var ie=function(e){return!!ae&&ae in e},oe=Function.prototype.toString;var se=function(e){if(null!=e){try{return oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=re,ce=ie,ue=X,de=se,he=/^\[object .+?Constructor\]$/,fe=Function.prototype,pe=Object.prototype,ge=fe.toString,me=pe.hasOwnProperty,be=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ue(e)||ce(e))&&(le(e)?be:he).test(de(e))},ve=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var r=ve(e,t);return ye(r)?r:void 0},$e=we(Object,"create"),xe=$e;var Se=function(){this.__data__=xe?xe(null):{},this.size=0};var _e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=$e,ke=Object.prototype.hasOwnProperty;var Fe=function(e){var t=this.__data__;if(Oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ke.call(t,e)?t[e]:void 0},Be=$e,De=Object.prototype.hasOwnProperty;var je=$e;var Me=Se,Ce=_e,Ae=Fe,ze=function(e){var t=this.__data__;return Be?void 0!==t[e]:De.call(t,e)},Ee=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=je&&void 0===t?"__lodash_hash_undefined__":t,this};function Pe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pe.prototype.clear=Me,Pe.prototype.delete=Ce,Pe.prototype.get=Ae,Pe.prototype.has=ze,Pe.prototype.set=Ee;var Te=Pe;var Ne=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t},He=Ie;var Le=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Re=Le,Ve=Array.prototype.splice;var We=Le;var Ye=Le;var qe=Le;var Ue=Ne,Ge=function(e){var t=this.__data__,r=Re(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ve.call(t,r,1),--this.size,!0)},Qe=function(e){var t=this.__data__,r=We(t,e);return r<0?void 0:t[r][1]},Ze=function(e){return Ye(this.__data__,e)>-1},Ke=function(e,t){var r=this.__data__,n=qe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xe.prototype.clear=Ue,Xe.prototype.delete=Ge,Xe.prototype.get=Qe,Xe.prototype.has=Ze,Xe.prototype.set=Ke;var Je=Xe,et=we(j,"Map"),tt=Te,rt=Je,nt=et;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var it=function(e,t){var r=e.__data__;return at(t)?r["string"==typeof t?"string":"hash"]:r.map},ot=it;var st=it;var lt=it;var ct=it;var ut=function(){this.size=0,this.__data__={hash:new tt,map:new(nt||rt),string:new tt}},dt=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},ht=function(e){return st(this,e).get(e)},ft=function(e){return lt(this,e).has(e)},pt=function(e,t){var r=ct(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}gt.prototype.clear=ut,gt.prototype.delete=dt,gt.prototype.get=ht,gt.prototype.has=ft,gt.prototype.set=pt;var mt=gt,bt=mt;function yt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(yt.Cache||bt),r}yt.Cache=bt;var vt=yt;var wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/\\(\\)?/g,xt=function(e){var t=vt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wt,(function(e,r,n,a){t.push(n?a.replace($t,"$1"):r||e)})),t}));var St=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},_t=k,Ot=q,kt=M?M.prototype:void 0,Ft=kt?kt.toString:void 0;var Bt=function e(t){if("string"==typeof t)return t;if(_t(t))return St(t,e)+"";if(Ot(t))return Ft?Ft.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Dt=Bt;var jt=k,Mt=K,Ct=xt,At=function(e){return null==e?"":Dt(e)};var zt=function(e,t){return jt(e)?e:Mt(e,t)?[e]:Ct(At(e))},Et=q;var Pt=function(e){if("string"==typeof e||Et(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Tt=zt,Nt=Pt;var It=function(e,t){for(var r=0,n=(t=Tt(t,e)).length;null!=e&&r<n;)e=e[Nt(t[r++])];return r&&r==n?e:void 0},Ht=It;var Lt=function(e,t,r){var n=null==e?void 0:Ht(e,t);return void 0===n?r:n};const Rt=(e,t,r)=>t?Lt(r,t)||Lt(e,t):r||e,Vt=(e,t)=>{const r=t||e.defaultValue;return Lt(e.collections,r)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wt||(Wt={}));const Yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},qt=e=>t=>{const r=t.theme,n=Vt(Yt,r[Wt.colorScheme]);return r.options&&r.options.color?Rt(n,e,r.options.color):Rt(n,e)},Ut={Brand:{1:qt("Brand.1"),2:qt("Brand.2"),3:qt("Brand.3"),4:qt("Brand.4"),5:qt("Brand.5"),6:qt("Brand.6")},Primary:qt("Primary"),PrimaryDark:qt("PrimaryDark"),Secondary:qt("Secondary"),Accent:{Light:{1:qt("Accent.Light.1"),2:qt("Accent.Light.2"),3:qt("Accent.Light.3"),4:qt("Accent.Light.4"),5:qt("Accent.Light.5"),6:qt("Accent.Light.6")},Dark:{1:qt("Accent.Dark.1"),2:qt("Accent.Dark.2"),3:qt("Accent.Dark.3")}},Neutral:{1:qt("Neutral.1"),2:qt("Neutral.2"),3:qt("Neutral.3"),4:qt("Neutral.4"),5:qt("Neutral.5"),6:qt("Neutral.6"),7:qt("Neutral.7"),8:qt("Neutral.8")},Validation:{Green:{Text:qt("Validation.Green.Text"),Icon:qt("Validation.Green.Icon"),Border:qt("Validation.Green.Border"),Background:qt("Validation.Green.Background")},Orange:{Text:qt("Validation.Orange.Text"),Icon:qt("Validation.Orange.Icon"),Border:qt("Validation.Orange.Border"),Background:qt("Validation.Orange.Background"),Badge:qt("Validation.Orange.Badge")},Red:{Text:qt("Validation.Red.Text"),Icon:qt("Validation.Red.Icon"),Border:qt("Validation.Red.Border"),Background:qt("Validation.Red.Background")},Blue:{Text:qt("Validation.Blue.Text"),Icon:qt("Validation.Blue.Icon"),Border:qt("Validation.Blue.Border"),Background:qt("Validation.Blue.Background")}},Shadow:{Accent:qt("Shadow.Accent"),Red:qt("Shadow.Red"),Elevation:qt("Shadow.Elevation")}},Gt={collections:{base:{InputBoxShadow:g`
        inset 0 0 6px 1px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 6px 1px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Qt=e=>t=>{var r;const n=t.theme,a=Vt(Gt,n[Wt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Rt(a,e,n.options.designToken):Rt(a,e)},Zt=Qt("InputBoxShadow"),Kt=Qt("InputErrorBoxShadow"),Xt=(Qt("ElevationBoxShadow"),Qt("Table.Header"),Qt("Table.Cell.Primary"),Qt("Table.Cell.Secondary"),Qt("Table.Cell.Selected"),Qt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Jt={collections:{base:{D1:{fontFamily:Xt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},er=e=>t=>{const r=t.theme,n=Vt(Jt,r[Wt.textStyleScheme]);return r.options&&r.options.textStyle?Rt(n,e,r.options.textStyle):Rt(n,e)},tr={D1:{fontFamily:er("D1.fontFamily"),fontSize:er("D1.fontSize"),fontWeight:er("D1.fontWeight"),lineHeight:er("D1.lineHeight"),letterSpacing:er("D1.letterSpacing")},D2:{fontFamily:er("D2.fontFamily"),fontSize:er("D2.fontSize"),fontWeight:er("D2.fontWeight"),lineHeight:er("D2.lineHeight"),letterSpacing:er("D2.letterSpacing")},D3:{fontFamily:er("D3.fontFamily"),fontSize:er("D3.fontSize"),fontWeight:er("D3.fontWeight"),lineHeight:er("D3.lineHeight"),letterSpacing:er("D3.letterSpacing")},D4:{fontFamily:er("D4.fontFamily"),fontSize:er("D4.fontSize"),fontWeight:er("D4.fontWeight"),lineHeight:er("D4.lineHeight"),letterSpacing:er("D4.letterSpacing")},DBody:{fontFamily:er("DBody.fontFamily"),fontSize:er("DBody.fontSize"),fontWeight:er("DBody.fontWeight"),lineHeight:er("DBody.lineHeight"),letterSpacing:er("DBody.letterSpacing")},H1:{fontFamily:er("H1.fontFamily"),fontSize:er("H1.fontSize"),fontWeight:er("H1.fontWeight"),lineHeight:er("H1.lineHeight"),letterSpacing:er("H1.letterSpacing")},H2:{fontFamily:er("H2.fontFamily"),fontSize:er("H2.fontSize"),fontWeight:er("H2.fontWeight"),lineHeight:er("H2.lineHeight"),letterSpacing:er("H2.letterSpacing")},H3:{fontFamily:er("H3.fontFamily"),fontSize:er("H3.fontSize"),fontWeight:er("H3.fontWeight"),lineHeight:er("H3.lineHeight"),letterSpacing:er("H3.letterSpacing")},H4:{fontFamily:er("H4.fontFamily"),fontSize:er("H4.fontSize"),fontWeight:er("H4.fontWeight"),lineHeight:er("H4.lineHeight"),letterSpacing:er("H4.letterSpacing")},H5:{fontFamily:er("H5.fontFamily"),fontSize:er("H5.fontSize"),fontWeight:er("H5.fontWeight"),lineHeight:er("H5.lineHeight"),letterSpacing:er("H5.letterSpacing")},H6:{fontFamily:er("H6.fontFamily"),fontSize:er("H6.fontSize"),fontWeight:er("H6.fontWeight"),lineHeight:er("H6.lineHeight"),letterSpacing:er("H6.letterSpacing")},Body:{fontFamily:er("Body.fontFamily"),fontSize:er("Body.fontSize"),fontWeight:er("Body.fontWeight"),lineHeight:er("Body.lineHeight"),letterSpacing:er("Body.letterSpacing")},BodySmall:{fontFamily:er("BodySmall.fontFamily"),fontSize:er("BodySmall.fontSize"),fontWeight:er("BodySmall.fontWeight"),lineHeight:er("BodySmall.lineHeight"),letterSpacing:er("BodySmall.letterSpacing")},XSmall:{fontFamily:er("XSmall.fontFamily"),fontSize:er("XSmall.fontSize"),fontWeight:er("XSmall.fontWeight"),lineHeight:er("XSmall.lineHeight"),letterSpacing:er("XSmall.letterSpacing")}},rr=e=>{switch(e){case 700:case"bold":return Xt.Bold;case 600:case"semibold":return Xt.Semibold;case 300:case"light":return Xt.Light;case 400:case"regular":return Xt.Regular;default:return""}},nr=(e,t)=>r=>{var n;const a=tr[e].fontFamily(r),i=tr[e].fontWeight(r);return Object.values(Xt).includes(a)?g`
                font-family: ${rr(t)||rr(i)||a};
                font-weight: normal !important;
            `:g`
            font-family: ${a};
            font-weight: ${null!==(n=ar(t)||i)&&void 0!==n?n:"normal"};
        `},ar=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ir=(e,t,r=!1)=>n=>{const a=tr[e],i=a.fontSize(n);return g`
            ${nr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var sr;!function(e){e.D1=p.h1`
        ${e=>g`
                ${ir("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${ir("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${ir("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${ir("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${ir("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${ir("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${ir("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${ir("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${ir("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${ir("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${ir("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${ir("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${ir("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${ir("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ur(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ur(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(sr||(sr={}));const lr=p.a`
    ${e=>g`
            ${ir(e.textStyle,e.weight)}
            color: ${Ut.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ut.Secondary};

                svg {
                    color: ${Ut.Secondary};
                }
            }
        `}
`,cr=p(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ur=r=>{var{external:n=!1,children:a}=r,i=_(r,["external","children"]);return e(lr,Object.assign({},i,{children:[a,n&&t(cr,{})]}))};var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const hr=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: 4px;
    background: ${Ut.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Zt};
    }

    ${e=>e.$readOnly?g`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?g`
                background: ${Ut.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Ut.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ut.Validation.Red.Border};
                    box-shadow: ${Kt};
                }
            `:void 0}
`,fr=p.input`
    ${ir("Body","regular")}
    color: ${Ut.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ut.Neutral[3]};
    }

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
`;var pr={exports:{}};pr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=o||(a||i?1:f.getDate()),g=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,y=l||0,v=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,b,y,v,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,y,v,w)):new Date(g,m,p,b,y,v,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var gr,mr,br=pr.exports,yr={exports:{}},vr=yr.exports=(gr={year:0,month:1,day:2,hour:3,minute:4,second:5},mr={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=mr[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),mr[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,u=gr[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),wr={exports:{}};wr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var $=function(e){return e instanceof O},x=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},_=y;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return _},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!_.u(t)||t,u=_.p(e),f=function(e,t){var a=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return f(n?b-w:b+(6-w),m);case s:case h:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case a:return p(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[i]=u+"Minutes",r[a]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[_.p(e)]()},b.add=function(n,u){var h,f=this;n=Number(n);var p=_.p(u),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[o]=r,h[a]=e,h)[p]||1,b=this.$d.getTime()+n*m;return _.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=_.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},d=function(e){return _.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:_.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:_.s(o,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:a};return n.replace(g,(function(e,t){return t||p[e]||a.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=_.p(h),m=S(n),b=(m.utcOffset()-this.utcOffset())*t,y=this-m,v=_.m(this,m);return v=(p={},p[d]=v/12,p[c]=v,p[u]=v/3,p[l]=(y-b)/6048e5,p[s]=(y-b)/864e5,p[o]=y/r,p[i]=y/t,p[a]=y/e,p)[g]||y,f?v:_.a(v)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return w[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return _.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),k=O.prototype;return S.prototype=k,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[v],S.Ls=w,S.p={},S}();var $r=wr.exports,xr={exports:{}};xr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Sr=xr.exports,_r={exports:{}};_r.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Or=_r.exports,kr={exports:{}};kr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Fr,Br=kr.exports;$r.extend(Sr),$r.extend(Or),$r.extend(Br),$r.extend(br),$r.extend(vr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=$r(t).startOf("week");return Dr(r).map((e=>jr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return jr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push($r(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+$r(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=$r(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(Fr||(Fr={}));const Dr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},jr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Mr=[1,3,5,7,8,10,12],Cr=[4,6,9,11];var Ar,zr,Er;function Pr({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),i=n.substring(0,r.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":Mr.includes(i)?Math.min(a,31).toString():Cr.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=$r(e,r);return $r(t,r).diff(n,"minute")}}(Ar||(Ar={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zr||(zr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Er||(Er={}));const Tr=p.input`
    ${ir("Body","regular")}
    color: ${Ut.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ut.Neutral[3]};
    }

    ${e=>"number"===e.type?g`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?g`
                cursor: not-allowed;
            `:void 0}
`,Nr=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ut.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ir=p(y)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Hr=p.div`
    display: flex;
    width: 100%;
`,Lr=a.forwardRef(((n,a)=>{var{value:s,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:b="bordered"}=n,y=_(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=i();o(a,(()=>v.current),[]);const w=Pr({ref:v,formatter:e=>Er.transformWithSpaces(e,l)}),$=e=>{f&&(S()?O(e):f(e))},x=()=>{p&&p(),v&&v.current&&v.current.focus()},S=()=>"tel"===c&&l,O=e=>{const{nextValue:t,updateCaretPosition:r}=w(),n=t.replace(/\s/g,"");e.target.value=n,f(e),r()},k=s?(e=>e?S()?Er.transformWithSpaces(e,l):e:"")(s):s,F=()=>e(r,{children:[t(Tr,Object.assign({"data-testid":"input",ref:v,disabled:d,value:k,onChange:$,type:c,readOnly:h},y)),g&&!d&&!h&&!!s&&t(Nr,Object.assign({onClick:x,type:"button"},{children:t(Ir,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===b?t(Hr,Object.assign({className:m},{children:F()})):t(hr,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:F()}))})})),Rr=p.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: 4px;
    background: ${Ut.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Zt};
    }

    ${e=>e.$readOnly?g`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?g`
                background: ${Ut.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Ut.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ut.Validation.Red.Border(e)};
                    box-shadow: ${Kt};
                }
            `:void 0}
`,Vr=p(Lr)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,Wr=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ir("Body","regular")}
    color: ${Ut.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ut.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return g`
                color: ${Ut.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ut.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?g`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:g`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Yr=Je;var qr=Je,Ur=et,Gr=mt;var Qr=Je,Zr=function(){this.__data__=new Yr,this.size=0},Kr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Xr=function(e){return this.__data__.get(e)},Jr=function(e){return this.__data__.has(e)},en=function(e,t){var r=this.__data__;if(r instanceof qr){var n=r.__data__;if(!Ur||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Gr(n)}return r.set(e,t),this.size=r.size,this};function tn(e){var t=this.__data__=new Qr(e);this.size=t.size}tn.prototype.clear=Zr,tn.prototype.delete=Kr,tn.prototype.get=Xr,tn.prototype.has=Jr,tn.prototype.set=en;var rn=tn;var nn=mt,an=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},on=function(e){return this.__data__.has(e)};function sn(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new nn;++t<r;)this.add(e[t])}sn.prototype.add=sn.prototype.push=an,sn.prototype.has=on;var ln=sn,cn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},un=function(e,t){return e.has(t)};var dn=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&r?new ln:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=o?n(g,p,d,t,e,i):n(p,g,d,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!cn(t,(function(e,t){if(!un(f,t)&&(p===e||a(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!a(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var hn=j.Uint8Array,fn=Ie,pn=dn,gn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},mn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},bn=M?M.prototype:void 0,yn=bn?bn.valueOf:void 0;var vn=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new hn(e),new hn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return fn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=gn;case"[object Set]":var l=1&n;if(s||(s=mn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=pn(s(e),s(t),n,a,i,o);return o.delete(e),u;case"[object Symbol]":if(yn)return yn.call(e)==yn.call(t)}return!1};var wn=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},$n=k;var xn=function(e,t,r){var n=t(e);return $n(e)?n:wn(n,r(e))};var Sn=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},_n=function(){return[]},On=Object.prototype.propertyIsEnumerable,kn=Object.getOwnPropertySymbols,Fn=kn?function(e){return null==e?[]:(e=Object(e),Sn(kn(e),(function(t){return On.call(e,t)})))}:_n;var Bn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Dn=R,jn=V;var Mn=function(e){return jn(e)&&"[object Arguments]"==Dn(e)},Cn=V,An=Object.prototype,zn=An.hasOwnProperty,En=An.propertyIsEnumerable,Pn=Mn(function(){return arguments}())?Mn:function(e){return Cn(e)&&zn.call(e,"callee")&&!En.call(e,"callee")},Tn={exports:{}};var Nn=function(){return!1};!function(e,t){var r=j,n=Nn,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Tn,Tn.exports);var In=/^(?:0|[1-9]\d*)$/;var Hn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&In.test(e))&&e>-1&&e%1==0&&e<t};var Ln=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Rn=R,Vn=Ln,Wn=V,Yn={};Yn["[object Float32Array]"]=Yn["[object Float64Array]"]=Yn["[object Int8Array]"]=Yn["[object Int16Array]"]=Yn["[object Int32Array]"]=Yn["[object Uint8Array]"]=Yn["[object Uint8ClampedArray]"]=Yn["[object Uint16Array]"]=Yn["[object Uint32Array]"]=!0,Yn["[object Arguments]"]=Yn["[object Array]"]=Yn["[object ArrayBuffer]"]=Yn["[object Boolean]"]=Yn["[object DataView]"]=Yn["[object Date]"]=Yn["[object Error]"]=Yn["[object Function]"]=Yn["[object Map]"]=Yn["[object Number]"]=Yn["[object Object]"]=Yn["[object RegExp]"]=Yn["[object Set]"]=Yn["[object String]"]=Yn["[object WeakMap]"]=!1;var qn=function(e){return Wn(e)&&Vn(e.length)&&!!Yn[Rn(e)]};var Un=function(e){return function(t){return e(t)}},Gn={exports:{}};!function(e,t){var r=F,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(Gn,Gn.exports);var Qn=qn,Zn=Un,Kn=Gn.exports,Xn=Kn&&Kn.isTypedArray,Jn=Xn?Zn(Xn):Qn,ea=Bn,ta=Pn,ra=k,na=Tn.exports,aa=Hn,ia=Jn,oa=Object.prototype.hasOwnProperty;var sa=function(e,t){var r=ra(e),n=!r&&ta(e),a=!r&&!n&&na(e),i=!r&&!n&&!a&&ia(e),o=r||n||a||i,s=o?ea(e.length,String):[],l=s.length;for(var c in e)!t&&!oa.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||aa(c,l))||s.push(c);return s},la=Object.prototype;var ca=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||la)};var ua=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),da=ca,ha=ua,fa=Object.prototype.hasOwnProperty;var pa=re,ga=Ln;var ma=function(e){return null!=e&&ga(e.length)&&!pa(e)},ba=sa,ya=function(e){if(!da(e))return ha(e);var t=[];for(var r in Object(e))fa.call(e,r)&&"constructor"!=r&&t.push(r);return t},va=ma;var wa=function(e){return va(e)?ba(e):ya(e)},$a=xn,xa=Fn,Sa=wa;var _a=function(e){return $a(e,Sa,xa)},Oa=Object.prototype.hasOwnProperty;var ka=function(e,t,r,n,a,i){var o=1&r,s=_a(e),l=s.length;if(l!=_a(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Oa.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=o;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var b=o?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(!(void 0===b?g===m||a(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(f=!1)}return i.delete(e),i.delete(t),f},Fa=we(j,"DataView"),Ba=et,Da=we(j,"Promise"),ja=we(j,"Set"),Ma=we(j,"WeakMap"),Ca=R,Aa=se,za="[object Map]",Ea="[object Promise]",Pa="[object Set]",Ta="[object WeakMap]",Na="[object DataView]",Ia=Aa(Fa),Ha=Aa(Ba),La=Aa(Da),Ra=Aa(ja),Va=Aa(Ma),Wa=Ca;(Fa&&Wa(new Fa(new ArrayBuffer(1)))!=Na||Ba&&Wa(new Ba)!=za||Da&&Wa(Da.resolve())!=Ea||ja&&Wa(new ja)!=Pa||Ma&&Wa(new Ma)!=Ta)&&(Wa=function(e){var t=Ca(e),r="[object Object]"==t?e.constructor:void 0,n=r?Aa(r):"";if(n)switch(n){case Ia:return Na;case Ha:return za;case La:return Ea;case Ra:return Pa;case Va:return Ta}return t});var Ya=rn,qa=dn,Ua=vn,Ga=ka,Qa=Wa,Za=k,Ka=Tn.exports,Xa=Jn,Ja="[object Arguments]",ei="[object Array]",ti="[object Object]",ri=Object.prototype.hasOwnProperty;var ni=function(e,t,r,n,a,i){var o=Za(e),s=Za(t),l=o?ei:Qa(e),c=s?ei:Qa(t),u=(l=l==Ja?ti:l)==ti,d=(c=c==Ja?ti:c)==ti,h=l==c;if(h&&Ka(e)){if(!Ka(t))return!1;o=!0,u=!1}if(h&&!u)return i||(i=new Ya),o||Xa(e)?qa(e,t,r,n,a,i):Ua(e,t,l,r,n,a,i);if(!(1&r)){var f=u&&ri.call(e,"__wrapped__"),p=d&&ri.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new Ya),a(g,m,r,n,i)}}return!!h&&(i||(i=new Ya),Ga(e,t,r,n,a,i))},ai=V;var ii=function e(t,r,n,a,i){return t===r||(null==t||null==r||!ai(t)&&!ai(r)?t!=t&&r!=r:ni(t,r,n,a,e,i))},oi=rn,si=ii;var li=X;var ci=function(e){return e==e&&!li(e)},ui=ci,di=wa;var hi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},fi=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new oi;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?si(u,c,3,n,d):h))return!1}}return!0},pi=function(e){for(var t=di(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,ui(a)]}return t},gi=hi;var mi=zt,bi=Pn,yi=k,vi=Hn,wi=Ln,$i=Pt;var xi=function(e,t){return null!=e&&t in Object(e)},Si=function(e,t,r){for(var n=-1,a=(t=mi(t,e)).length,i=!1;++n<a;){var o=$i(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&wi(a)&&vi(o,a)&&(yi(e)||bi(e))};var _i=ii,Oi=Lt,ki=function(e,t){return null!=e&&Si(e,t,xi)},Fi=K,Bi=ci,Di=hi,ji=Pt;var Mi=It;var Ci=function(e){return function(t){return null==t?void 0:t[e]}},Ai=function(e){return function(t){return Mi(t,e)}},zi=K,Ei=Pt;var Pi=function(e){var t=pi(e);return 1==t.length&&t[0][2]?gi(t[0][0],t[0][1]):function(r){return r===e||fi(r,e,t)}},Ti=function(e,t){return Fi(e)&&Bi(t)?Di(ji(e),t):function(r){var n=Oi(r,e);return void 0===n&&n===t?ki(r,e):_i(t,n,3)}},Ni=function(e){return e},Ii=k,Hi=function(e){return zi(e)?Ci(Ei(e)):Ai(e)};var Li=function(e){return"function"==typeof e?e:null==e?Ni:"object"==typeof e?Ii(e)?Ti(e[0],e[1]):Pi(e):Hi(e)},Ri=Li,Vi=ma,Wi=wa;var Yi=function(e){return function(t,r,n){var a=Object(t);if(!Vi(t)){var i=Ri(r);t=Wi(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var qi=/\s/;var Ui=function(e){for(var t=e.length;t--&&qi.test(e.charAt(t)););return t},Gi=/^\s+/;var Qi=function(e){return e?e.slice(0,Ui(e)+1).replace(Gi,""):e},Zi=X,Ki=q,Xi=/^[-+]0x[0-9a-f]+$/i,Ji=/^0b[01]+$/i,eo=/^0o[0-7]+$/i,to=parseInt;var ro=function(e){if("number"==typeof e)return e;if(Ki(e))return NaN;if(Zi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Qi(e);var r=Ji.test(e);return r||eo.test(e)?to(e.slice(2),r?2:8):Xi.test(e)?NaN:+e},no=1/0;var ao=function(e){return e?(e=ro(e))===no||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var io=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},oo=Li,so=function(e){var t=ao(e),r=t%1;return t==t?r?t-r:t:0},lo=Math.max;var co=Yi((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:so(r);return a<0&&(a=lo(n+a,0)),io(e,oo(t),a)})),uo=ii;var ho=function(e,t){return uo(e,t)};let fo=Do();const po=e=>Oo(e,fo);let go=Do();po.write=e=>Oo(e,go);let mo=Do();po.onStart=e=>Oo(e,mo);let bo=Do();po.onFrame=e=>Oo(e,bo);let yo=Do();po.onFinish=e=>Oo(e,yo);let vo=[];po.setTimeout=(e,t)=>{let r=po.now()+t,n=()=>{let e=vo.findIndex((e=>e.cancel==n));~e&&vo.splice(e,1),So-=~e?1:0},a={time:r,handler:e,cancel:n};return vo.splice(wo(r),0,a),So+=1,ko(),a};let wo=e=>~(~vo.findIndex((t=>t.time>e))||~vo.length);po.cancel=e=>{mo.delete(e),bo.delete(e),yo.delete(e),fo.delete(e),go.delete(e)},po.sync=e=>{_o=!0,po.batchedUpdates(e),_o=!1},po.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,po.onStart(r)}return n.handler=e,n.cancel=()=>{mo.delete(r),t=null},n};let $o="undefined"!=typeof window?window.requestAnimationFrame:()=>{};po.use=e=>$o=e,po.now="undefined"!=typeof performance?()=>performance.now():Date.now,po.batchedUpdates=e=>e(),po.catch=console.error,po.frameLoop="always",po.advance=()=>{"demand"!==po.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Bo()};let xo=-1,So=0,_o=!1;function Oo(e,t){_o?(t.delete(e),e(0)):(t.add(e),ko())}function ko(){xo<0&&(xo=0,"demand"!==po.frameLoop&&$o(Fo))}function Fo(){~xo&&($o(Fo),po.batchedUpdates(Bo))}function Bo(){let e=xo;xo=po.now();let t=wo(xo);t&&(jo(vo.splice(0,t),(e=>e.handler())),So-=t),So?(mo.flush(),fo.flush(e?Math.min(64,xo-e):16.667),bo.flush(),go.flush(),yo.flush()):xo=-1}function Do(){let e=new Set,t=e;return{add(r){So+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(So-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,So-=t.size,jo(t,(t=>t(r)&&e.add(t))),So+=e.size,t=e)}}}function jo(e,t){e.forEach((e=>{try{t(e)}catch(e){po.catch(e)}}))}function Mo(){}const Co={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ao(e,t){if(Co.arr(e)){if(!Co.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const zo=(e,t)=>e.forEach(t);function Eo(e,t,r){if(Co.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Po=e=>Co.und(e)?[]:Co.arr(e)?e:[e];function To(e,t){if(e.size){const r=Array.from(e);e.clear(),zo(r,t)}}const No=(e,...t)=>To(e,(e=>e(...t))),Io=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ho,Lo,Ro=null,Vo=!1,Wo=Mo;var Yo=Object.freeze({__proto__:null,get createStringInterpolator(){return Ho},get to(){return Lo},get colors(){return Ro},get skipAnimation(){return Vo},get willAdvance(){return Wo},assign:e=>{e.to&&(Lo=e.to),e.now&&(po.now=e.now),void 0!==e.colors&&(Ro=e.colors),null!=e.skipAnimation&&(Vo=e.skipAnimation),e.createStringInterpolator&&(Ho=e.createStringInterpolator),e.requestAnimationFrame&&po.use(e.requestAnimationFrame),e.batchedUpdates&&(po.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Wo=e.willAdvance),e.frameLoop&&(po.frameLoop=e.frameLoop)}});const qo=new Set;let Uo=[],Go=[],Qo=0;const Zo={get idle(){return!qo.size&&!Uo.length},start(e){Qo>e.priority?(qo.add(e),po.onStart(Ko)):(Xo(e),po(es))},advance:es,sort(e){if(Qo)po.onFrame((()=>Zo.sort(e)));else{const t=Uo.indexOf(e);~t&&(Uo.splice(t,1),Jo(e))}},clear(){Uo=[],qo.clear()}};function Ko(){qo.forEach(Xo),qo.clear(),po(es)}function Xo(e){Uo.includes(e)||Jo(e)}function Jo(e){Uo.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Uo,(t=>t.priority>e.priority)),0,e)}function es(e){const t=Go;for(let r=0;r<Uo.length;r++){const n=Uo[r];Qo=n.priority,n.idle||(Wo(n),n.advance(e),n.idle||t.push(n))}return Qo=0,Go=Uo,Go.length=0,Uo=t,Uo.length>0}const ts="[-+]?\\d*\\.?\\d+",rs=ts+"%";function ns(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const as=new RegExp("rgb"+ns(ts,ts,ts)),is=new RegExp("rgba"+ns(ts,ts,ts,ts)),os=new RegExp("hsl"+ns(ts,rs,rs)),ss=new RegExp("hsla"+ns(ts,rs,rs,ts)),ls=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,us=/^#([0-9a-fA-F]{6})$/,ds=/^#([0-9a-fA-F]{8})$/;function hs(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function fs(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=hs(a,n,e+1/3),o=hs(a,n,e),s=hs(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function ps(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function gs(e){return(parseFloat(e)%360+360)%360/360}function ms(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function bs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ys(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=us.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ro&&void 0!==Ro[e]?Ro[e]:(t=as.exec(e))?(ps(t[1])<<24|ps(t[2])<<16|ps(t[3])<<8|255)>>>0:(t=is.exec(e))?(ps(t[1])<<24|ps(t[2])<<16|ps(t[3])<<8|ms(t[4]))>>>0:(t=ls.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ds.exec(e))?parseInt(t[1],16)>>>0:(t=cs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=os.exec(e))?(255|fs(gs(t[1]),bs(t[2]),bs(t[3])))>>>0:(t=ss.exec(e))?(fs(gs(t[1]),bs(t[2]),bs(t[3]))|ms(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const vs=(e,t,r)=>{if(Co.fun(e))return e;if(Co.arr(e))return vs({range:e,output:t,extrapolate:r});if(Co.str(e.output[0]))return Ho(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const ws=1.70158,$s=1.525*ws,xs=ws+1,Ss=2*Math.PI/3,_s=2*Math.PI/4.5,Os=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ks={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>xs*e*e*e-ws*e*e,easeOutBack:e=>1+xs*Math.pow(e-1,3)+ws*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-$s)/2:(Math.pow(2*e-2,2)*(($s+1)*(2*e-2)+$s)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ss),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ss)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*_s)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*_s)/2+1,easeInBounce:e=>1-Os(1-e),easeOutBounce:Os,easeInOutBounce:e=>e<.5?(1-Os(1-2*e))/2:(1+Os(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fs.apply(this,arguments)}const Bs=Symbol.for("FluidValue.get"),Ds=Symbol.for("FluidValue.observers"),js=e=>Boolean(e&&e[Bs]),Ms=e=>e&&e[Bs]?e[Bs]():e,Cs=e=>e[Ds]||null;function As(e,t){let r=e[Ds];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class zs{constructor(e){if(this[Bs]=void 0,this[Ds]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Es(this,e)}}const Es=(e,t)=>Ns(e,Bs,t);function Ps(e,t){if(e[Bs]){let r=e[Ds];r||Ns(e,Ds,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ts(e,t){let r=e[Ds];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ds]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Ns=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Is=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Hs=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ls=new RegExp(`(${Is.source})(%|[a-z]+)`,"i"),Rs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Vs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ws=e=>{const[t,r]=Ys(e);if(!t||Io())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Vs.test(r)?Ws(r):r||e},Ys=e=>{const t=Vs.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let qs;const Us=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,Gs=e=>{qs||(qs=Ro?new RegExp(`(${Object.keys(Ro).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ms(e).replace(Vs,Ws).replace(Hs,ys).replace(qs,ys))),r=t.map((e=>e.match(Is).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>vs(Fs({},e,{output:t}))));return e=>{var r;const a=!Ls.test(t[0])&&(null==(r=t.find((e=>Ls.test(e))))?void 0:r.replace(Is,""));let i=0;return t[0].replace(Is,(()=>`${n[i++](e)}${a||""}`)).replace(Rs,Us)}},Qs="react-spring: ",Zs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Qs}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Ks=Zs(console.warn);const Xs=Zs(console.warn);function Js(e){return Co.str(e)&&("#"==e[0]||/\d/.test(e)||!Io()&&Vs.test(e)||e in(Ro||{}))}const el=Io()?s:l,tl=()=>{const e=i(!1);return el((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function rl(){const e=c()[1],t=tl();return()=>{t.current&&e(Math.random())}}const nl=e=>s(e,al),al=[];function il(e){const t=i();return s((()=>{t.current=e})),t.current}const ol=Symbol.for("Animated:node"),sl=e=>e&&e[ol],ll=(e,t)=>{return r=e,n=ol,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},cl=e=>e&&e[ol]&&e[ol].getPayload();class ul{constructor(){this.payload=void 0,ll(this,this)}getPayload(){return this.payload||[]}}class dl extends ul{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Co.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new dl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Co.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Co.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class hl extends dl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=vs({output:[e,e]})}static create(e){return new hl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Co.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=vs({output:[this.getValue(),e]})),this._value=0,super.reset()}}const fl={dependencies:null};class pl extends ul{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Eo(this.source,((r,n)=>{var a;(a=r)&&a[ol]===a?t[n]=r.getValue(e):js(r)?t[n]=Ms(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&zo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Eo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){fl.dependencies&&js(e)&&fl.dependencies.add(e);const t=cl(e);t&&zo(t,(e=>this.add(e)))}}class gl extends pl{constructor(e){super(e)}static create(e){return new gl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(ml)),!0)}}function ml(e){return(Js(e)?hl:dl).create(e)}function bl(e){const t=sl(e);return t?t.constructor:Co.arr(e)?gl:Js(e)?hl:dl}function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yl.apply(this,arguments)}const vl=(e,t)=>{const r=!Co.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((a,o)=>{const l=i(null),c=r&&d((e=>{l.current=function(e,t){e&&(Co.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,h]=function(e,t){const r=new Set;fl.dependencies=r,e.style&&(e=yl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new pl(e),fl.dependencies=null,[e,r]}(a,t),f=rl(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new wl(p,h),m=i();el((()=>(m.current=g,zo(h,(e=>Ps(e,g))),()=>{m.current&&(zo(m.current.deps,(e=>Ts(e,m.current))),po.cancel(m.current.update))}))),s(p,[]),nl((()=>()=>{const e=m.current;zo(e.deps,(t=>Ts(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,yl({},b,{ref:c}))}))};class wl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&po.write(this.update)}}const $l=Symbol.for("AnimatedComponent"),xl=e=>Co.str(e)?e:e&&Co.str(e.displayName)?e.displayName:Co.fun(e)&&e.name||null;function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sl.apply(this,arguments)}function _l(e,...t){return Co.fun(e)?e(...t):e}const Ol=(e,t)=>!0===e||!!(t&&e&&(Co.fun(e)?e(t):Po(e).includes(t))),kl=(e,t)=>Co.obj(e)?t&&e[t]:e,Fl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Bl=e=>e,Dl=(e,t=Bl)=>{let r=jl;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Co.und(r)||(n[a]=r)}return n},jl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ml={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cl(e){const t=function(e){const t={};let r=0;if(Eo(e,((e,n)=>{Ml[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Eo(e,((e,n)=>n in t||(r[n]=e))),r}return Sl({},e)}function Al(e){return e=Ms(e),Co.arr(e)?e.map(Al):Js(e)?Yo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function zl(e){return Co.fun(e)||Co.arr(e)&&Co.obj(e[0])}const El=Sl({},{tension:170,friction:26},{mass:1,damping:1,easing:ks.linear,clamp:!1});class Pl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,El)}}function Tl(e,t){if(Co.und(t.decay)){const r=!Co.und(t.tension)||!Co.und(t.friction);!r&&Co.und(t.frequency)&&Co.und(t.damping)&&Co.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Nl=[];class Il{constructor(){this.changed=!1,this.values=Nl,this.toValues=null,this.fromValues=Nl,this.to=void 0,this.from=void 0,this.config=new Pl,this.immediate=!1}}function Hl(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let c,u,d=Ol(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Co.und(r.pause)||(a.paused=Ol(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||Ol(e,t)),c=_l(r.delay||0,t),e?(a.resumeQueue.add(f),i.pause()):(i.resume(),f())}function h(){a.resumeQueue.add(f),a.timeouts.delete(u),u.cancel(),c=u.time-po.now()}function f(){c>0&&!Yo.skipAnimation?(a.delayed=!0,u=po.setTimeout(p,c),a.pauseQueue.add(h),a.timeouts.add(u)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(u),e<=(a.cancelId||0)&&(d=!0);try{i.start(Sl({},r,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const Ll=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Wl(e.get()):t.every((e=>e.noop))?Rl(e.get()):Vl(e.get(),t.every((e=>e.finished))),Rl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Vl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Wl=e=>({value:e,cancelled:!0,finished:!1});function Yl(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Dl(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=a<=(r.cancelId||0)&&Wl(n)||a!==r.asyncId&&Vl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new Ul,o=new Gl;return(async()=>{if(Yo.skipAnimation)throw ql(r),o.result=Vl(n,!1),d(o),o;f(i);const s=Co.obj(e)?Sl({},e):Sl({},t,{to:e});s.parentId=a,Eo(c,((e,t)=>{Co.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Yo.skipAnimation)return ql(r),Vl(n,!1);try{let t;t=Co.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Vl(n.get(),!0,!1)}catch(e){if(e instanceof Ul)g=e.result;else{if(!(e instanceof Gl))throw e;g=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Co.fun(o)&&po.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function ql(e,t){To(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Ul extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Gl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ql=e=>e instanceof Kl;let Zl=1;class Kl extends zs{constructor(...e){super(...e),this.id=Zl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=sl(this);return e&&e.getValue()}to(...e){return Yo.to(this,e)}interpolate(...e){return Ks(`${Qs}The "interpolate" function is deprecated in v9 (use "to" instead)`),Yo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){As(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Zo.sort(this),As(this,{type:"priority",parent:this,priority:e})}}const Xl=Symbol.for("SpringPhase"),Jl=e=>(1&e[Xl])>0,ec=e=>(2&e[Xl])>0,tc=e=>(4&e[Xl])>0,rc=(e,t)=>t?e[Xl]|=3:e[Xl]&=-3,nc=(e,t)=>t?e[Xl]|=4:e[Xl]&=-5;class ac extends Kl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Il,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Co.und(e)||!Co.und(t)){const r=Co.obj(e)?Sl({},e):Sl({},t,{from:e});Co.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ec(this)||this._state.asyncTo)||tc(this)}get goal(){return Ms(this.animation.to)}get velocity(){const e=sl(this);return e instanceof dl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Jl(this)}get isAnimating(){return ec(this)}get isPaused(){return tc(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=cl(n.to);!o&&js(n.to)&&(i=Po(Ms(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==hl?1:o?o[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Co.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Co.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Co.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*n,d=c));o+=(1e-6*-a.tension*(d-c)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(c-r),o=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=sl(this),l=s.getValue();if(t){const e=Ms(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return po.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ec(this)){const{to:e,config:t}=this.animation;po.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Co.und(e)?(r=this.queue||[],this.queue=[]):r=[Co.obj(e)?e:Sl({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Ll(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ql(this._state,e&&this._lastCallId),po.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Co.obj(r)?r[t]:r,(null==r||zl(r))&&(r=void 0),n=Co.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return Jl(this)||(e.reverse&&([r,n]=[n,r]),n=Ms(n),Co.und(n)?sl(this)||this._set(r):this._set(n)),a}_update(e,t){let r=Sl({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,Dl(r,((e,t)=>/^on/.test(t)?kl(e,n):e))),dc(this,r,"onProps"),hc(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Hl(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{tc(this)||(nc(this,!0),No(o.pauseQueue),hc(this,"onPause",Vl(this,ic(this,this.animation.to)),this))},resume:()=>{tc(this)&&(nc(this,!1),ec(this)&&this._resume(),No(o.resumeQueue),hc(this,"onResume",Vl(this,ic(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=oc(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Wl(this));const n=!Co.und(e.to),a=!Co.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Wl(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!a||n||t.default&&!Co.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ao(d,c);h&&(s.from=d),d=Ms(d);const f=!Ao(u,l);f&&this._focus(u);const p=zl(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||a)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Tl(r=Sl({},r),t),t=Sl({},r,t)),Tl(e,t),Object.assign(e,t);for(const t in El)null==e[t]&&(e[t]=El[t]);let{mass:n,frequency:a,damping:i}=e;Co.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(g,_l(t.config,i),t.config!==o.config?_l(o.config,i):void 0);let y=sl(this);if(!y||Co.und(u))return r(Vl(this,!0));const v=Co.und(t.reset)?a&&!t.default:!Co.und(d)&&Ol(t.reset,i),w=v?d:this.get(),$=Al(u),x=Co.num($)||Co.arr($)||Js($),S=!p&&(!x||Ol(o.immediate||t.immediate,i));if(f){const e=bl(u);if(e!==y.constructor){if(!S)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set($)}}const _=y.constructor;let O=js(u),k=!1;if(!O){const e=v||!Jl(this)&&h;(f||e)&&(k=Ao(Al(w),$),O=!k),(Ao(s.immediate,S)||S)&&Ao(g.decay,m)&&Ao(g.velocity,b)||(O=!0)}if(k&&ec(this)&&(s.changed&&!v?O=!0:O||this._stop(l)),!p&&((O||js(l))&&(s.values=y.getPayload(),s.toValues=js(u)?null:_==hl?[1]:Po($)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),O)){const{onRest:e}=s;zo(uc,(e=>dc(this,t,e)));const n=Vl(this,ic(this,l));No(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&po.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?_l(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),p?r(Yl(t.to,t,this._state,this)):O?this._start():ec(this)&&!f?this._pendingCalls.add(r):r(Rl(w))}_focus(e){const t=this.animation;e!==t.to&&(Cs(this)&&this._detach(),t.to=e,Cs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;js(t)&&(Ps(t,this),Ql(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;js(e)&&Ts(e,this)}_set(e,t=!0){const r=Ms(e);if(!Co.und(r)){const e=sl(this);if(!e||!Ao(r,e.getValue())){const n=bl(r);e&&e.constructor==n?e.setValue(r):ll(this,n.create(r)),e&&po.batchedUpdates((()=>{this._onChange(r,t)}))}}return sl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,hc(this,"onStart",Vl(this,ic(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),_l(this.animation.onChange,e,this)),_l(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;sl(this).reset(Ms(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ec(this)||(rc(this,!0),tc(this)||this._resume())}_resume(){Yo.skipAnimation?this.finish():Zo.start(this)}_stop(e,t){if(ec(this)){rc(this,!1);const r=this.animation;zo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),As(this,{type:"idle",parent:this});const n=t?Wl(this.get()):Vl(this.get(),ic(this,null!=e?e:r.to));No(this._pendingCalls,n),r.changed&&(r.changed=!1,hc(this,"onRest",n,this))}}}function ic(e,t){const r=Al(t);return Ao(Al(e.get()),r)}function oc(e,t=e.loop,r=e.to){let n=_l(t);if(n){const a=!0!==n&&Cl(n),i=(a||e).reverse,o=!a||a.reset;return sc(Sl({},e,{loop:t,default:!1,pause:void 0,to:!i||zl(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function sc(e){const{to:t,from:r}=e=Cl(e),n=new Set;return Co.obj(t)&&cc(t,n),Co.obj(r)&&cc(r,n),e.keys=n.size?Array.from(n):null,e}function lc(e){const t=sc(e);return Co.und(t.default)&&(t.default=Dl(t)),t}function cc(e,t){Eo(e,((e,r)=>null!=e&&t.add(r)))}const uc=["onStart","onRest","onChange","onPause","onResume"];function dc(e,t,r){e.animation[r]=t[r]!==Fl(t,r)?kl(t[r],e.key):void 0}function hc(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const fc=["onStart","onChange","onRest"];let pc=1;class gc{constructor(e,t){this.id=pc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Sl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Co.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(sc(e)),this}start(e){let{queue:t}=this;return e?t=Po(e).map(sc):this.queue=[],this._flush?this._flush(this,t):(xc(this,t),mc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;zo(Po(t),(t=>r[t].stop(!!e)))}else ql(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Co.und(e))this.start({pause:!0});else{const t=this.springs;zo(Po(e),(e=>t[e].pause()))}return this}resume(e){if(Co.und(e))this.start({pause:!1});else{const t=this.springs;zo(Po(e),(e=>t[e].resume()))}return this}each(e){Eo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,To(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&To(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,To(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}po.onFrame(this._onFrame)}}function mc(e,t){return Promise.all(t.map((t=>bc(e,t)))).then((t=>Ll(e,t)))}async function bc(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Co.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=Co.arr(a)||Co.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):zo(fc,(r=>{const n=t[r];if(Co.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,No(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Fl(t,"cancel");(u||f&&d.asyncId)&&h.push(Hl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Mo,resume:Mo,start(t,r){f?(ql(d,e._lastAsyncId),r(Wl(e))):(t.onRest=s,r(Yl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ll(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=oc(t,o,a);if(r)return xc(e,[r]),bc(e,r,!0)}return l&&po.batchedUpdates((()=>l(p,e,e.item))),p}function yc(e,t){const r=Sl({},e.springs);return t&&zo(Po(t),(e=>{Co.und(e.keys)&&(e=sc(e)),Co.obj(e.to)||(e=Sl({},e,{to:void 0})),$c(r,e,(e=>wc(e)))})),vc(e,r),r}function vc(e,t){Eo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ps(t,e))}))}function wc(e,t){const r=new ac;return r.key=e,t&&Ps(r,t),r}function $c(e,t,r){t.keys&&zo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function xc(e,t){zo(t,(t=>{$c(e.springs,t,(t=>wc(t,e)))}))}const Sc=["children"],_c=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Sc);const a=h(Oc),o=r.pause||!!a.pause,l=r.immediate||!!a.immediate;r=function(e,t){const[r]=c((()=>({inputs:t,result:e()}))),n=i(),a=n.current;let o=a;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return s((()=>{n.current=o,a==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:u}=Oc;return n.createElement(u,{value:r},t)},Oc=(kc=_c,Fc={},Object.assign(kc,n.createContext(Fc)),kc.Provider._context=kc,kc.Consumer._context=kc,kc);var kc,Fc;_c.Provider=Oc.Provider,_c.Consumer=Oc.Consumer;const Bc=()=>{const e=[],t=function(t){Xs(`${Qs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return zo(e,((e,a)=>{if(Co.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return zo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return zo(e,(e=>e.resume(...arguments))),this},t.set=function(t){zo(e,(e=>e.set(t)))},t.start=function(t){const r=[];return zo(e,((e,n)=>{if(Co.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return zo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return zo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Co.fun(e)?e(r,t):e};return t._getProps=r,t};function Dc(e,t){const r=Co.fun(e),[[n],a]=function(e,t,r){const n=Co.fun(t)&&t;n&&!r&&(r=[]);const a=f((()=>n||3==arguments.length?Bc():void 0),[]),o=i(0),s=rl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=yc(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?mc(e,t):new Promise((n=>{vc(e,r),l.queue.push((()=>{n(mc(e,t))})),s()}))}})),[]),c=i([...l.ctrls]),u=[],d=il(e)||0;function p(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new gc(null,l.flush)),r=n?n(a,e):t[a];r&&(u[a]=lc(r))}}f((()=>{zo(c.current.slice(e,d),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=c.current.map(((e,t)=>yc(e,u[t]))),m=h(_c),b=il(m),y=m!==b&&function(e){for(const t in e)return!0;return!1}(m);el((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],zo(e,(e=>e()))),zo(c.current,((e,t)=>{null==a||a.add(e),y&&e.start({default:m});const r=u[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),nl((()=>()=>{zo(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>Sl({},e)));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let jc;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(jc||(jc={}));class Mc extends Kl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=vs(...t);const r=this._get(),n=bl(r);ll(this,n.create(r))}advance(e){const t=this._get();Ao(t,this.get())||(sl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ac(this._active)&&zc(this)}_get(){const e=Co.arr(this.source)?this.source.map(Ms):Po(Ms(this.source));return this.calc(...e)}_start(){this.idle&&!Ac(this._active)&&(this.idle=!1,zo(cl(this),(e=>{e.done=!1})),Yo.skipAnimation?(po.batchedUpdates((()=>this.advance())),zc(this)):Zo.start(this))}_attach(){let e=1;zo(Po(this.source),(t=>{js(t)&&Ps(t,this),Ql(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){zo(Po(this.source),(e=>{js(e)&&Ts(e,this)})),this._active.clear(),zc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Po(this.source).reduce(((e,t)=>Math.max(e,(Ql(t)?t.priority:0)+1)),0))}}function Cc(e){return!1!==e.idle}function Ac(e){return!e.size||Array.from(e).every(Cc)}function zc(e){e.idle||(e.idle=!0,zo(cl(e),(e=>{e.done=!0})),As(e,{type:"idle",parent:e}))}function Ec(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}Yo.assign({createStringInterpolator:Gs,to:(e,t)=>new Mc(e,t)});const Pc=["style","children","scrollTop","scrollLeft","viewBox"],Tc=/^--/;function Nc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Tc.test(e)||Hc.hasOwnProperty(e)&&Hc[e]?(""+t).trim():t+"px"}const Ic={};let Hc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Lc=["Webkit","Ms","Moz","O"];Hc=Object.keys(Hc).reduce(((e,t)=>(Lc.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Hc);const Rc=["x","y","z"],Vc=/^(matrix|translate|scale|rotate|skew)/,Wc=/^(translate)/,Yc=/^(rotate|skew)/,qc=(e,t)=>Co.num(e)&&0!==e?e+t:e,Uc=(e,t)=>Co.arr(e)?e.every((e=>Uc(e,t))):Co.num(e)?e===t:parseFloat(e)===t;class Gc extends pl{constructor(e){let{x:t,y:r,z:n}=e,a=Ec(e,Rc);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>qc(e,"px"))).join(",")})`,Uc(e,0)]))),Eo(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Vc.test(t)){if(delete a[t],Co.und(e))return;const r=Wc.test(t)?"px":Yc.test(t)?"deg":"";i.push(Po(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${qc(a,r)})`,Uc(a,0)]:e=>[`${t}(${e.map((e=>qc(e,r))).join(",")})`,Uc(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new Qc(i,o)),super(a)}}class Qc extends zs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return zo(this.inputs,((r,n)=>{const a=Ms(r[0]),[i,o]=this.transforms[n](Co.arr(a)?a:r.map(Ms));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&zo(this.inputs,(e=>zo(e,(e=>js(e)&&Ps(e,this)))))}observerRemoved(e){0==e&&zo(this.inputs,(e=>zo(e,(e=>js(e)&&Ts(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),As(this,e)}}const Zc=["scrollTop","scrollLeft"];Yo.assign({batchedUpdates:v,createStringInterpolator:Gs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Kc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new pl(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=xl(e)||"Anonymous";return(e=Co.str(e)?i[e]||(i[e]=vl(e,a)):e[$l]||(e[$l]=vl(e,a))).displayName=`Animated(${t})`,e};return Eo(e,((t,r)=>{Co.arr(e)&&(r=xl(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,c=Ec(n,Pc),u=Object.values(c),d=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:Ic[t]||(Ic[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=Nc(t,a[t]);Tc.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Gc(e),getComponentProps:e=>Ec(e,Zc)}),Xc=Kc.animated,Jc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},eu=e=>Object.keys(Jc).reduce(((t,r)=>{const n=Jc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),tu=eu("max-width"),ru=(eu("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),nu=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,au=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ut.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${nu} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,iu=p(au)`
    animation-delay: -0.45s;
`,ou=p(au)`
    animation-delay: -0.3s;
`,su=p(au)`
    animation-delay: -0.15s;
`;p.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${Ut.Neutral[8](e)};
                    border: 1px solid ${Ut.Primary(e)};

                    span {
                        color: ${Ut.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${Ut.Neutral[8](e)};
                    border: 1px solid ${Ut.Neutral[5](e)};

                    span {
                        color: ${Ut.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${Ut.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ut.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ut.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ut.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${Ut.Primary(e)};
                    border: 1px solid transparent;

                    ${tu.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ut.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${ir("H5","semibold")}
                    }

                    ${tu.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${ir("H4","semibold")}
                    }

                    ${tu.mobileS} {
                        height: auto;
                    }
                `}
`;const lu=p((({color:r,className:n,size:a=18})=>e(ru,Object.assign({className:n,$size:a,$color:r},{children:[t(au,{id:"inner1",$size:a-2,$borderWidth:2}),t(iu,{id:"inner2",$size:a-2,$borderWidth:2}),t(ou,{id:"inner3",$size:a-2,$borderWidth:2}),t(su,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ut.Primary(e);break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cu=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return g`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Ut.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Ut.Primary(e),r=Ut.Primary(e)),e.disabled&&(t=Ut.Neutral[6](e),r=Ut.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,uu=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,du=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Ut.Neutral[4]:Ut.Neutral[8]};
`,hu=p(Xc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,fu=p.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ut.Neutral[4]};
        border-right: 5px solid ${Ut.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${tu.mobileL} {
        max-height: 15rem;
    }
`,pu=p.li`
    :hover,
    :focus,
    :active {
        background: ${Ut.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${Ut.Accent.Light[5]};
            `}}
`,gu=p.button`
    display: flex;
    ${e=>e.$multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
                padding: 0 1rem;
                min-height: ${e.$hasNextLineLabel?"4.255rem":"3.5rem"};
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ut.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,mu=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,bu=p.div`
    ${ir("Body","regular")}
    color: ${Ut.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&mu}
`,yu=p.div`
    color: ${Ut.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&mu}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${ir("BodySmall","semibold")}
                `:g`
                    ${ir("Body","regular")}
                `}
`,vu=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${bu} {
                        display: inline;
                    }

                    ${yu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,wu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,$u=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,xu=p((r=>{var{className:n,checked:a,disabled:i,onChange:o,onKeyPress:l,displaySize:u="default"}=r,d=_(r,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,f]=c(a);s((()=>{f(a)}),[a]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),l&&l(t)}};return e(cu,Object.assign({selected:h,disabled:i,className:n,"data-testid":"checkbox",$displaySize:u,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p},{children:[t(uu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:i,checked:h},d)),h&&t(du,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:u})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Su=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,_u=p.button`
    ${ir("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Ut.Primary(e)};\n\t\t`}
`,Ou=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ku=p(sr.Body)``,Fu=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ut.Validation.Red.Icon};
`,Bu=p.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${Ut.Neutral[7]};
            `}
    }
`,Du=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(Bu,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),ju=p.li`
    background: ${Ut.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Mu=p(fr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Cu=p(x)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Ut.Neutral[3]};
`,Au=p(Du)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Ut.Neutral[3]};
    cursor: pointer;
`,zu=p(y)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Ut.Neutral[3]};
`,Eu=u(((r,n)=>{const{onClear:a}=r,i=_(r,["onClear"]);return e(ju,{children:[t(Cu,{}),t(Mu,Object.assign({ref:n},i)),i.value&&t(Au,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:t(zu,{})}))]},"search")})),Pu=n=>{var{listItems:a,listExtractor:o,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:y,multiSelect:v,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:O="end",itemMaxLines:k=2,labelDisplayType:F="inline",renderListItem:B,onBlur:D,hideNoResultsDisplay:j,renderCustomCallToAction:M}=n,C=_(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[A,z]=c(0),[E,P]=c(""),[T,N]=c(a),[I,H]=c(0),L=Dc({height:I}),R=i(),V=i(),W=i([]),Y=i(),q=i(),U=i(A),G=i(T),Q=e=>{U.current=e,z(e)},Z=e=>{G.current=e,N(e)};s((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),s((()=>{ee(E)}),[E]),s((()=>{if(P(""),h){if(setTimeout((()=>{H(te())})),y)return;Y&&Y.current?(Y.current.focus(),Q(-1)):W.current[A]&&W.current[A].focus()}else H(0)}),[h]),s((()=>{if(h){const e=te();H(e)}}),[T,S]),s((()=>{Z(a),P(""),Q(0)}),[a]);const K=e=>o?o(e):e.toString(),X=e=>{if("inline"!==F)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Er.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!co(w,(t=>ho(t,e))),ee=e=>{if(""===e)Z(a);else if(m){const t=m(e);Z(t)}else{const t=a.filter((t=>{var r;const n=K(t),a="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<G.current.length-1){const e=U.current+1;W.current[e].focus(),Q(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Q(U.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ae=e=>{const t=e.target.value;P(t),g&&g()},ie=()=>{P(""),Y.current.focus(),g&&g()},oe=()=>{x&&x()},se=()=>{D&&D()},le=n=>e(r,{children:[t(wu,Object.assign({$maxLines:k,"aria-hidden":!0},{children:n})),t($u,Object.assign({$maxLines:k,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=K(r),a="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=X(a),s=i&&X(i),l=o||s?"next-line":F;return e(vu,Object.assign({$labelDisplayType:l},{children:[t(bu,Object.assign({$truncateType:O,$maxLines:k,"aria-label":a},{children:"middle"===O&&o?le(a):a})),i&&t(yu,Object.assign({$truncateType:O,$maxLines:k,$labelDisplayType:F,"aria-label":i},{children:"middle"===O&&s?le(i):i}))]}))},ue=()=>{if(!x||x&&"success"===S)return T.map(((r,n)=>t(pu,Object.assign({$checked:J(r)&&!v},{children:e(gu,Object.assign({$hasNextLineLabel:"next-line"===F&&T.length>0&&o&&"string"!=typeof o(T[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(xu,{checked:J(r),displaySize:"small"}),B?B(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},de=()=>{if(v&&T.length>0&&!E&&"success"===S)return t(Su,{children:t(_u,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(E||!f)&&0===T.length&&"success"===S)return e(Ou,Object.assign({"data-testid":"list-no-results"},{children:[t(Fu,{"data-testid":"no-result-icon"}),t(ku,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(Ou,Object.assign({"data-testid":"list-loading"},{children:[t(lu,{$buttonStyle:"secondary",size:24}),t(ku,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(Ou,Object.assign({"data-testid":"list-fail"},{children:[t(Fu,{"data-testid":"load-error-icon"}),t(ku,{children:"Failed to load."}),t(_u,Object.assign({onClick:oe,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(hu,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(fu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},C,{children:[(f||m)&&"success"===S?t(Eu,{ref:Y,onChange:ae,value:E,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ie}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&M)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:M(b,T)}))})()]}))})},Tu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Nu=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Iu=g`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ut.Accent.Light[3]};
    }
`,Hu=p.button`
    ${Iu}
    cursor: pointer;
`;p.div`
    ${Iu}
`;const Lu=m`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,Ru=p.div`
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Ut.Neutral[8]};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Zt};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Lu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${Ut.Neutral[6](e)};

                ${Hu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Hu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${Ut.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ut.Validation.Red.Border(e)};
                    box-shadow: ${Kt};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Tu};
    margin-left: 1rem;
`,p(S)`
    color: ${Ut.Neutral[3]};
    height: ${tr.Body.fontSize}rem;
    width: ${tr.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${Ut.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Vu=p(sr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Vu)`
    color: ${Ut.Neutral[3]};
`;const Wu=({children:e,show:r,error:n,disabled:a,testId:o,onBlur:l,readOnly:c})=>{const u=i();return((e,t,r="window",n)=>{const a=i();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])})("mousedown",(function(e){if(!a){if(u&&u.current.contains(e.target))return;r&&l()}}),"document"),t(Nu,{children:t(Ru,Object.assign({ref:u,error:n&&!r,disabled:a,$readOnly:c,expanded:r,"data-testid":o},{children:e}))})},Yu=p.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return g`
                border-bottom: 1px solid ${Ut.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?g`
                border: 0;
                margin: 0;
            `:"right"===e.$position?g`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:g`
                        flex-direction: row;
                    `}
`,qu=p(Hu)`
    padding: 0;
    width: auto;
`,Uu=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Gu=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Tu};
    margin: 0 0.75rem;
`,Qu=p(S)`
    color: ${Ut.Neutral[3]};
    height: ${tr.Body.fontSize}rem;
    width: ${tr.Body.fontSize}rem;
    vertical-align: bottom;
`,Zu=p.div`
    display: flex;
    flex: 1 1 auto;
`,Ku=p(sr.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Xu=p(Ku)`
    color: ${Ut.Neutral[3]};
`,Ju=p.div`
    width: 1px;
    background: ${Ut.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return g`
                display: none;
            `}}

    ${e=>"right"===e.$position?g`
                    margin: 0 0.75rem;
                `:g`
                    margin: 0 0.75rem 0 0;
                `}
`,ed=a.forwardRef(((n,a)=>{var{addon:o,error:l,onChange:u,readOnly:d,className:h,onBlur:f}=n,p=_(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:b,searchFunction:y,searchPlaceholder:v,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:S,onSelectOption:O,onHideOptions:k,onShowOptions:F,"data-selector-testid":B}=o.attributes,{position:D}=o,[j,M]=c(S),[C,A]=c(!1),z=i();s((()=>{M(S)}),[S]);const E=()=>x?x(j):w?w(j):j.toString(),P=e=>{!e&&k&&k(),e&&F&&F()},T=e=>{e.preventDefault(),p.disabled||(A(!C),P(!C))},N=(e,t)=>{M(e),A(!1),P(!1),z&&z.current.focus(),O&&O(e,t)},I=e=>{u&&u(e)},H=()=>{f&&f()},L=()=>{A(!1),P(!1),z&&z.current.focus()};return e(Wu,Object.assign({className:h,show:C,error:l&&!C,disabled:p.disabled,readOnly:d,onBlur:()=>{A(!1),P(!1),H()}},{children:[e(Yu,Object.assign({$expanded:C,$readOnly:d,$position:D},{children:[d?j?t(Uu,{children:t(Ku,Object.assign({"data-testid":"selector-label"},{children:E()}))}):null:t(qu,Object.assign({ref:z,type:"button",disabled:p.disabled,"data-testid":B||"addon-selector",onClick:T},{children:e(r,{children:[e(Zu,{children:[g&&!j&&t(Xu,{children:g}),j&&t(Ku,Object.assign({"data-testid":"selector-label"},{children:E()}))]}),t(Gu,Object.assign({$expanded:C},{children:t(Qu,{})}))]})})),t(Ju,{$readOnly:d,$position:D}),t(Vr,Object.assign({ref:a},p,{readOnly:d,error:l,onChange:I,"data-testid":p["data-testid"]||"input",onBlur:H}))]})),m&&m.length>0?t(Pu,{listItems:m,selectedItems:S?[S]:[],onSelectItem:N,valueExtractor:w,listExtractor:$,visible:C,enableSearch:b,searchFunction:y,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:H,onDismiss:L}):null]}))})),td=a.forwardRef(((r,n)=>{var{addon:a,error:i,className:o}=r,s=_(r,["addon","error","className"]);const l=()=>t(Rr,Object.assign({disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:t(Vr,Object.assign({ref:n},s,{"data-testid":"input"}))}));if(!a)return l();{const{type:r="label",position:c="left"}=a,{allowClear:u}=s;switch(r){case"list":{const e=a.attributes;return e.options&&e.options.length>0?t(ed,Object.assign({ref:n,addon:a,error:i,className:o},s)):l()}case"custom":{const r=a.attributes;return r.children?e(hr,Object.assign({$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Wr,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.children})),t(Vr,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input"}))]})):l()}default:{const r=a.attributes;return r.value?e(hr,Object.assign({$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Wr,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.value})),t(Vr,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:i,"data-testid":"input"}))]})):l()}}}}));var rd=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var nd=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),ad=wa;var id=ma;var od=function(e,t){return function(r,n){if(null==r)return r;if(!id(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&nd(e,t,ad)}));var sd=rd,ld=od,cd=Li,ud=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},dd=k;var hd=function(e,t,r){var n=dd(e)?sd:ud,a=arguments.length<3;return n(e,cd(t),r,a,ld)};const fd=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],pd=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var gd;!function(e){e.getCountries=()=>[].concat(...fd.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:pd("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return hd(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(gd||(gd={}));const md=e=>{var{onChange:r,value:n,allowClear:a,onClear:o,onBlur:l,error:u,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b}=e,y=_(e,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder"]);const[v]=c(gd.getCountries()),[w,$]=c(void 0),[x,S]=c(""),O=i(),k=Pr({ref:O,formatter:e=>gd.formatNumber(e.replace(/[^0-9]/g,""),w)});s((()=>{const e=v.filter((e=>e.countryCode===bd(null==n?void 0:n.countryCode)))[0];$(e),S(gd.formatNumber(null==n?void 0:n.number,e))}),[n]);const F=e=>{D(x,e),r&&B(x,e)},B=(e,t)=>{const n=gd.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&yd(t.countryCode)})},D=(e,t)=>{S(gd.formatNumber(e,t)),$(t)};return t(td,Object.assign({ref:O,value:x,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=k();t(),D(e,w),r&&B(e,w)},allowClear:a&&!!x,onClear:()=>{o?o():S("")},onBlur:l,error:u,placeholder:b,addon:d?{type:"label",attributes:{value:yd(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:v,selectedOption:w,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:yd(e.countryCode)}),onSelectOption:F,onHideOptions:g,onShowOptions:m}},inputMode:"numeric"},y))},bd=e=>e?e.replace("+",""):"",yd=e=>e?e.includes("+")?e:`+${e}`:"";export{md as PhoneNumberInput};
//# sourceMappingURL=index.js.map
