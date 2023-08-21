import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as _}from"@lifesg/react-icons";import{MagnifierIcon as O}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B=Array.isArray,j="object"==typeof D&&D&&D.Object===Object&&D,M=j,A="object"==typeof self&&self&&self.Object===Object&&self,C=M||A||Function("return this")(),E=C.Symbol,z=E,I=Object.prototype,P=I.hasOwnProperty,N=I.toString,T=z?z.toStringTag:void 0;var H=function(e){var t=P.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(e){}var i=N.call(e);return r&&(t?e[T]=n:delete e[T]),i},L=Object.prototype.toString;var R=H,V=function(e){return L.call(e)},W=E?E.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?R(e):V(e)};var q=function(e){return null!=e&&"object"==typeof e},U=Y,Q=q;var Z=function(e){return"symbol"==typeof e||Q(e)&&"[object Symbol]"==U(e)},G=B,X=Z,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var ee=function(e,t){if(G(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(K.test(e)||!J.test(e)||null!=t&&e in Object(t))};var te=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ne=Y,re=te;var ie,oe=function(e){if(!re(e))return!1;var t=ne(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ae=C["__core-js_shared__"],se=(ie=/[^.]+$/.exec(ae&&ae.keys&&ae.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var le=function(e){return!!se&&se in e},ce=Function.prototype.toString;var ue=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},de=oe,he=le,fe=te,pe=ue,ge=/^\[object .+?Constructor\]$/,me=Function.prototype,ye=Object.prototype,ve=me.toString,be=ye.hasOwnProperty,we=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!fe(e)||he(e))&&(de(e)?we:ge).test(pe(e))},xe=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var n=xe(e,t);return $e(n)?n:void 0},_e=Se(Object,"create"),Oe=_e;var Fe=function(){this.__data__=Oe?Oe(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=_e,Be=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(De){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},Me=_e,Ae=Object.prototype.hasOwnProperty;var Ce=_e;var Ee=Fe,ze=ke,Ie=je,Pe=function(e){var t=this.__data__;return Me?void 0!==t[e]:Ae.call(t,e)},Ne=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ce&&void 0===t?"__lodash_hash_undefined__":t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ee,Te.prototype.delete=ze,Te.prototype.get=Ie,Te.prototype.has=Pe,Te.prototype.set=Ne;var He=Te;var Le=function(){this.__data__=[],this.size=0};var Re=function(e,t){return e===t||e!=e&&t!=t},Ve=Re;var We=function(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1},Ye=We,qe=Array.prototype.splice;var Ue=We;var Qe=We;var Ze=We;var Ge=Le,Xe=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=Se(C,"Map"),it=He,ot=nt,at=rt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},ct=lt;var ut=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(at||ot),string:new it}},pt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ut(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt,wt=bt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new($t.Cache||wt),n}$t.Cache=wt;var xt=$t;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,Ot=function(e){var t=xt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(_t,"$1"):n||e)})),t}));var Ft=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},kt=B,Dt=Z,Bt=E?E.prototype:void 0,jt=Bt?Bt.toString:void 0;var Mt=function e(t){if("string"==typeof t)return t;if(kt(t))return Ft(t,e)+"";if(Dt(t))return jt?jt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},At=Mt;var Ct=B,Et=ee,zt=Ot,It=function(e){return null==e?"":At(e)};var Pt=function(e,t){return Ct(e)?e:Et(e,t)?[e]:zt(It(e))},Nt=Z;var Tt=function(e){if("string"==typeof e||Nt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Ht=Pt,Lt=Tt;var Rt=function(e,t){for(var n=0,r=(t=Ht(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0},Vt=Rt;var Wt=function(e,t,n){var r=null==e?void 0:Vt(e,t);return void 0===r?n:r};const Yt=(e,t,n)=>t?Wt(n,t)||Wt(e,t):n||e,qt=(e,t)=>{const n=t||e.defaultValue;return Wt(e.collections,n)};var Ut;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ut||(Ut={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Zt=e=>t=>{const n=t.theme,r=qt(Qt,n[Ut.colorScheme]);return n.options&&n.options.color?Yt(r,e,n.options.color):Yt(r,e)},Gt={Brand:{1:Zt("Brand.1"),2:Zt("Brand.2"),3:Zt("Brand.3"),4:Zt("Brand.4"),5:Zt("Brand.5"),6:Zt("Brand.6")},Primary:Zt("Primary"),PrimaryDark:Zt("PrimaryDark"),Secondary:Zt("Secondary"),Accent:{Light:{1:Zt("Accent.Light.1"),2:Zt("Accent.Light.2"),3:Zt("Accent.Light.3"),4:Zt("Accent.Light.4"),5:Zt("Accent.Light.5"),6:Zt("Accent.Light.6")},Dark:{1:Zt("Accent.Dark.1"),2:Zt("Accent.Dark.2"),3:Zt("Accent.Dark.3")}},Neutral:{1:Zt("Neutral.1"),2:Zt("Neutral.2"),3:Zt("Neutral.3"),4:Zt("Neutral.4"),5:Zt("Neutral.5"),6:Zt("Neutral.6"),7:Zt("Neutral.7"),8:Zt("Neutral.8")},Validation:{Green:{Text:Zt("Validation.Green.Text"),Icon:Zt("Validation.Green.Icon"),Border:Zt("Validation.Green.Border"),Background:Zt("Validation.Green.Background")},Orange:{Text:Zt("Validation.Orange.Text"),Icon:Zt("Validation.Orange.Icon"),Border:Zt("Validation.Orange.Border"),Background:Zt("Validation.Orange.Background"),Badge:Zt("Validation.Orange.Badge")},Red:{Text:Zt("Validation.Red.Text"),Icon:Zt("Validation.Red.Icon"),Border:Zt("Validation.Red.Border"),Background:Zt("Validation.Red.Background")},Blue:{Text:Zt("Validation.Blue.Text"),Icon:Zt("Validation.Blue.Icon"),Border:Zt("Validation.Blue.Border"),Background:Zt("Validation.Blue.Background")}},Shadow:{Accent:Zt("Shadow.Accent"),Red:Zt("Shadow.Red"),Elevation:Zt("Shadow.Elevation")}},Xt={collections:{base:{InputBoxShadow:g`
        inset 0 0 6px 1px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 6px 1px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Jt=e=>t=>{var n;const r=t.theme,i=qt(Xt,r[Ut.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Yt(i,e,r.options.designToken):Yt(i,e)},Kt=Jt("InputBoxShadow"),en=Jt("InputErrorBoxShadow"),tn=(Jt("ElevationBoxShadow"),Jt("Table.Header"),Jt("Table.Cell.Primary"),Jt("Table.Cell.Secondary"),Jt("Table.Cell.Selected"),Jt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),nn={collections:{base:{D1:{fontFamily:tn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rn=e=>t=>{const n=t.theme,r=qt(nn,n[Ut.textStyleScheme]);return n.options&&n.options.textStyle?Yt(r,e,n.options.textStyle):Yt(r,e)},on={D1:{fontFamily:rn("D1.fontFamily"),fontSize:rn("D1.fontSize"),fontWeight:rn("D1.fontWeight"),lineHeight:rn("D1.lineHeight"),letterSpacing:rn("D1.letterSpacing")},D2:{fontFamily:rn("D2.fontFamily"),fontSize:rn("D2.fontSize"),fontWeight:rn("D2.fontWeight"),lineHeight:rn("D2.lineHeight"),letterSpacing:rn("D2.letterSpacing")},D3:{fontFamily:rn("D3.fontFamily"),fontSize:rn("D3.fontSize"),fontWeight:rn("D3.fontWeight"),lineHeight:rn("D3.lineHeight"),letterSpacing:rn("D3.letterSpacing")},D4:{fontFamily:rn("D4.fontFamily"),fontSize:rn("D4.fontSize"),fontWeight:rn("D4.fontWeight"),lineHeight:rn("D4.lineHeight"),letterSpacing:rn("D4.letterSpacing")},DBody:{fontFamily:rn("DBody.fontFamily"),fontSize:rn("DBody.fontSize"),fontWeight:rn("DBody.fontWeight"),lineHeight:rn("DBody.lineHeight"),letterSpacing:rn("DBody.letterSpacing")},H1:{fontFamily:rn("H1.fontFamily"),fontSize:rn("H1.fontSize"),fontWeight:rn("H1.fontWeight"),lineHeight:rn("H1.lineHeight"),letterSpacing:rn("H1.letterSpacing")},H2:{fontFamily:rn("H2.fontFamily"),fontSize:rn("H2.fontSize"),fontWeight:rn("H2.fontWeight"),lineHeight:rn("H2.lineHeight"),letterSpacing:rn("H2.letterSpacing")},H3:{fontFamily:rn("H3.fontFamily"),fontSize:rn("H3.fontSize"),fontWeight:rn("H3.fontWeight"),lineHeight:rn("H3.lineHeight"),letterSpacing:rn("H3.letterSpacing")},H4:{fontFamily:rn("H4.fontFamily"),fontSize:rn("H4.fontSize"),fontWeight:rn("H4.fontWeight"),lineHeight:rn("H4.lineHeight"),letterSpacing:rn("H4.letterSpacing")},H5:{fontFamily:rn("H5.fontFamily"),fontSize:rn("H5.fontSize"),fontWeight:rn("H5.fontWeight"),lineHeight:rn("H5.lineHeight"),letterSpacing:rn("H5.letterSpacing")},H6:{fontFamily:rn("H6.fontFamily"),fontSize:rn("H6.fontSize"),fontWeight:rn("H6.fontWeight"),lineHeight:rn("H6.lineHeight"),letterSpacing:rn("H6.letterSpacing")},Body:{fontFamily:rn("Body.fontFamily"),fontSize:rn("Body.fontSize"),fontWeight:rn("Body.fontWeight"),lineHeight:rn("Body.lineHeight"),letterSpacing:rn("Body.letterSpacing")},BodySmall:{fontFamily:rn("BodySmall.fontFamily"),fontSize:rn("BodySmall.fontSize"),fontWeight:rn("BodySmall.fontWeight"),lineHeight:rn("BodySmall.lineHeight"),letterSpacing:rn("BodySmall.letterSpacing")},XSmall:{fontFamily:rn("XSmall.fontFamily"),fontSize:rn("XSmall.fontSize"),fontWeight:rn("XSmall.fontWeight"),lineHeight:rn("XSmall.lineHeight"),letterSpacing:rn("XSmall.letterSpacing")}},an=e=>{switch(e){case 700:case"bold":return tn.Bold;case 600:case"semibold":return tn.Semibold;case 300:case"light":return tn.Light;case 400:case"regular":return tn.Regular;default:return""}},sn=(e,t)=>n=>{var r;const i=on[e].fontFamily(n),o=on[e].fontWeight(n);return Object.values(tn).includes(i)?g`
                font-family: ${an(t)||an(o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=ln(t)||o)&&void 0!==r?r:"normal"};
        `},ln=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cn=(e,t,n=!1)=>r=>{const i=on[e],o=i.fontSize(r);return g`
            ${sn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},un=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var dn;!function(e){e.D1=p.h1`
        ${e=>g`
                ${cn("D1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${cn("D2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${cn("D3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${cn("D4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${cn("DBody",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${cn("H1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${cn("H2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${cn("H3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${cn("H4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${cn("H5",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${cn("H6",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${cn("Body",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${cn("BodySmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${cn("XSmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${un(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>pn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>pn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(dn||(dn={}));const hn=p.a`
    ${e=>g`
            ${cn(e.textStyle,e.weight)}
            color: ${Gt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Gt.Secondary};

                svg {
                    color: ${Gt.Secondary};
                }
            }
        `}
`,fn=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,pn=n=>{var{external:r=!1,children:i}=n,o=k(n,["external","children"]);return e(hn,Object.assign({},o,{children:[i,r&&t(fn,{})]}))};var gn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(gn||(gn={}));const mn=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: 4px;
    background: ${Gt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt};
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
                background: ${Gt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Gt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border};
                    box-shadow: ${en};
                }
            `:void 0}
`,yn=p.input`
    ${cn("Body","regular")}
    color: ${Gt.Neutral[1]};
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
        color: ${Gt.Neutral[3]};
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
`;var vn={exports:{}};vn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bn,wn,$n=vn.exports,xn={exports:{}},Sn=xn.exports=(bn={year:0,month:1,day:2,hour:3,minute:4,second:5},wn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=wn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),wn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=bn[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),_n={exports:{}};_n.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof O},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},_=v;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=S(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),F=O.prototype;return S.prototype=F,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var On=_n.exports,Fn={exports:{}};Fn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var kn=Fn.exports,Dn={exports:{}};Dn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Bn=Dn.exports,jn={exports:{}};jn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Mn,An=jn.exports;On.extend(kn),On.extend(Bn),On.extend(An),On.extend($n),On.extend(Sn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=On(t).startOf("week");return Cn(n).map((e=>En(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return En(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(On(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+On(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=On(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Mn||(Mn={}));const Cn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},En=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},zn=[1,3,5,7,8,10,12],In=[4,6,9,11];var Pn,Nn,Tn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":zn.includes(o)?Math.min(i,31).toString():In.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=On(e,n);return On(t,n).diff(r,"minute")}}(Pn||(Pn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Nn||(Nn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Tn||(Tn={}));const Hn=p.input`
    ${cn("Body","regular")}
    color: ${Gt.Neutral[1]};

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
        color: ${Gt.Neutral[3]};
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
`,Ln=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Gt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Rn=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Vn=p.div`
    display: flex;
    width: 100%;
`,Wn=i.forwardRef(((r,i)=>{var{value:s,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,v=k(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=o();a(i,(()=>b.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>Tn.transformWithSpaces(e,l)}),$=e=>{f&&(S()?_(e):f(e))},x=()=>{p&&p(),b&&b.current&&b.current.focus()},S=()=>"tel"===c&&l,_=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},O=s?(e=>e?S()?Tn.transformWithSpaces(e,l):e:"")(s):s,F=()=>e(n,{children:[t(Hn,Object.assign({"data-testid":"input",ref:b,disabled:d,value:O,onChange:$,type:c,readOnly:h},v)),g&&!d&&!h&&!!s&&t(Ln,Object.assign({onClick:x,type:"button"},{children:t(Rn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Vn,Object.assign({className:m},{children:F()})):t(mn,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:F()}))})})),Yn=p.div`
    display: flex;
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: 4px;
    background: ${Gt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt};
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
                background: ${Gt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Gt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border(e)};
                    box-shadow: ${en};
                }
            `:void 0}
`,qn=p(Wn)`
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
`,Un=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${cn("Body","regular")}
    color: ${Gt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Gt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return g`
                color: ${Gt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Gt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?g`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:g`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Qn=nt;var Zn=nt,Gn=rt,Xn=bt;var Jn=nt,Kn=function(){this.__data__=new Qn,this.size=0},er=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},tr=function(e){return this.__data__.get(e)},nr=function(e){return this.__data__.has(e)},rr=function(e,t){var n=this.__data__;if(n instanceof Zn){var r=n.__data__;if(!Gn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xn(r)}return n.set(e,t),this.size=n.size,this};function ir(e){var t=this.__data__=new Jn(e);this.size=t.size}ir.prototype.clear=Kn,ir.prototype.delete=er,ir.prototype.get=tr,ir.prototype.has=nr,ir.prototype.set=rr;var or=ir;var ar=bt,sr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},lr=function(e){return this.__data__.has(e)};function cr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ar;++t<n;)this.add(e[t])}cr.prototype.add=cr.prototype.push=sr,cr.prototype.has=lr;var ur=cr,dr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},hr=function(e,t){return e.has(t)};var fr=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new ur:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!dr(t,(function(e,t){if(!hr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var pr=C.Uint8Array,gr=Re,mr=fr,yr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},vr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},br=E?E.prototype:void 0,wr=br?br.valueOf:void 0;var $r=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new pr(e),new pr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return gr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=yr;case"[object Set]":var l=1&r;if(s||(s=vr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=mr(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(wr)return wr.call(e)==wr.call(t)}return!1};var xr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Sr=B;var _r=function(e,t,n){var r=t(e);return Sr(e)?r:xr(r,n(e))};var Or=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Fr=function(){return[]},kr=Object.prototype.propertyIsEnumerable,Dr=Object.getOwnPropertySymbols,Br=Dr?function(e){return null==e?[]:(e=Object(e),Or(Dr(e),(function(t){return kr.call(e,t)})))}:Fr;var jr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Mr=Y,Ar=q;var Cr=function(e){return Ar(e)&&"[object Arguments]"==Mr(e)},Er=q,zr=Object.prototype,Ir=zr.hasOwnProperty,Pr=zr.propertyIsEnumerable,Nr=Cr(function(){return arguments}())?Cr:function(e){return Er(e)&&Ir.call(e,"callee")&&!Pr.call(e,"callee")},Tr={exports:{}};var Hr=function(){return!1};!function(e,t){var n=C,r=Hr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Tr,Tr.exports);var Lr=/^(?:0|[1-9]\d*)$/;var Rr=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Lr.test(e))&&e>-1&&e%1==0&&e<t};var Vr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Wr=Y,Yr=Vr,qr=q,Ur={};Ur["[object Float32Array]"]=Ur["[object Float64Array]"]=Ur["[object Int8Array]"]=Ur["[object Int16Array]"]=Ur["[object Int32Array]"]=Ur["[object Uint8Array]"]=Ur["[object Uint8ClampedArray]"]=Ur["[object Uint16Array]"]=Ur["[object Uint32Array]"]=!0,Ur["[object Arguments]"]=Ur["[object Array]"]=Ur["[object ArrayBuffer]"]=Ur["[object Boolean]"]=Ur["[object DataView]"]=Ur["[object Date]"]=Ur["[object Error]"]=Ur["[object Function]"]=Ur["[object Map]"]=Ur["[object Number]"]=Ur["[object Object]"]=Ur["[object RegExp]"]=Ur["[object Set]"]=Ur["[object String]"]=Ur["[object WeakMap]"]=!1;var Qr=function(e){return qr(e)&&Yr(e.length)&&!!Ur[Wr(e)]};var Zr=function(e){return function(t){return e(t)}},Gr={exports:{}};!function(e,t){var n=j,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Gr,Gr.exports);var Xr=Qr,Jr=Zr,Kr=Gr.exports,ei=Kr&&Kr.isTypedArray,ti=ei?Jr(ei):Xr,ni=jr,ri=Nr,ii=B,oi=Tr.exports,ai=Rr,si=ti,li=Object.prototype.hasOwnProperty;var ci=function(e,t){var n=ii(e),r=!n&&ri(e),i=!n&&!r&&oi(e),o=!n&&!r&&!i&&si(e),a=n||r||i||o,s=a?ni(e.length,String):[],l=s.length;for(var c in e)!t&&!li.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ai(c,l))||s.push(c);return s},ui=Object.prototype;var di=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ui)};var hi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),fi=di,pi=hi,gi=Object.prototype.hasOwnProperty;var mi=oe,yi=Vr;var vi=function(e){return null!=e&&yi(e.length)&&!mi(e)},bi=ci,wi=function(e){if(!fi(e))return pi(e);var t=[];for(var n in Object(e))gi.call(e,n)&&"constructor"!=n&&t.push(n);return t},$i=vi;var xi=function(e){return $i(e)?bi(e):wi(e)},Si=_r,_i=Br,Oi=xi;var Fi=function(e){return Si(e,Oi,_i)},ki=Object.prototype.hasOwnProperty;var Di=function(e,t,n,r,i,o){var a=1&n,s=Fi(e),l=s.length;if(l!=Fi(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:ki.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Bi=Se(C,"DataView"),ji=rt,Mi=Se(C,"Promise"),Ai=Se(C,"Set"),Ci=Se(C,"WeakMap"),Ei=Y,zi=ue,Ii="[object Map]",Pi="[object Promise]",Ni="[object Set]",Ti="[object WeakMap]",Hi="[object DataView]",Li=zi(Bi),Ri=zi(ji),Vi=zi(Mi),Wi=zi(Ai),Yi=zi(Ci),qi=Ei;(Bi&&qi(new Bi(new ArrayBuffer(1)))!=Hi||ji&&qi(new ji)!=Ii||Mi&&qi(Mi.resolve())!=Pi||Ai&&qi(new Ai)!=Ni||Ci&&qi(new Ci)!=Ti)&&(qi=function(e){var t=Ei(e),n="[object Object]"==t?e.constructor:void 0,r=n?zi(n):"";if(r)switch(r){case Li:return Hi;case Ri:return Ii;case Vi:return Pi;case Wi:return Ni;case Yi:return Ti}return t});var Ui=or,Qi=fr,Zi=$r,Gi=Di,Xi=qi,Ji=B,Ki=Tr.exports,eo=ti,to="[object Arguments]",no="[object Array]",ro="[object Object]",io=Object.prototype.hasOwnProperty;var oo=function(e,t,n,r,i,o){var a=Ji(e),s=Ji(t),l=a?no:Xi(e),c=s?no:Xi(t),u=(l=l==to?ro:l)==ro,d=(c=c==to?ro:c)==ro,h=l==c;if(h&&Ki(e)){if(!Ki(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new Ui),a||eo(e)?Qi(e,t,n,r,i,o):Zi(e,t,l,n,r,i,o);if(!(1&n)){var f=u&&io.call(e,"__wrapped__"),p=d&&io.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new Ui),i(g,m,n,r,o)}}return!!h&&(o||(o=new Ui),Gi(e,t,n,r,i,o))},ao=q;var so=function e(t,n,r,i,o){return t===n||(null==t||null==n||!ao(t)&&!ao(n)?t!=t&&n!=n:oo(t,n,r,i,e,o))},lo=or,co=so;var uo=te;var ho=function(e){return e==e&&!uo(e)},fo=ho,po=xi;var go=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},mo=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new lo;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?co(u,c,3,r,d):h))return!1}}return!0},yo=function(e){for(var t=po(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,fo(i)]}return t},vo=go;var bo=Pt,wo=Nr,$o=B,xo=Rr,So=Vr,_o=Tt;var Oo=function(e,t){return null!=e&&t in Object(e)},Fo=function(e,t,n){for(var r=-1,i=(t=bo(t,e)).length,o=!1;++r<i;){var a=_o(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&So(i)&&xo(a,i)&&($o(e)||wo(e))};var ko=so,Do=Wt,Bo=function(e,t){return null!=e&&Fo(e,t,Oo)},jo=ee,Mo=ho,Ao=go,Co=Tt;var Eo=Rt;var zo=function(e){return function(t){return null==t?void 0:t[e]}},Io=function(e){return function(t){return Eo(t,e)}},Po=ee,No=Tt;var To=function(e){var t=yo(e);return 1==t.length&&t[0][2]?vo(t[0][0],t[0][1]):function(n){return n===e||mo(n,e,t)}},Ho=function(e,t){return jo(e)&&Mo(t)?Ao(Co(e),t):function(n){var r=Do(n,e);return void 0===r&&r===t?Bo(n,e):ko(t,r,3)}},Lo=function(e){return e},Ro=B,Vo=function(e){return Po(e)?zo(No(e)):Io(e)};var Wo=function(e){return"function"==typeof e?e:null==e?Lo:"object"==typeof e?Ro(e)?Ho(e[0],e[1]):To(e):Vo(e)},Yo=Wo,qo=vi,Uo=xi;var Qo=function(e){return function(t,n,r){var i=Object(t);if(!qo(t)){var o=Yo(n);t=Uo(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Zo=/\s/;var Go=function(e){for(var t=e.length;t--&&Zo.test(e.charAt(t)););return t},Xo=/^\s+/;var Jo=function(e){return e?e.slice(0,Go(e)+1).replace(Xo,""):e},Ko=te,ea=Z,ta=/^[-+]0x[0-9a-f]+$/i,na=/^0b[01]+$/i,ra=/^0o[0-7]+$/i,ia=parseInt;var oa=function(e){if("number"==typeof e)return e;if(ea(e))return NaN;if(Ko(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ko(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jo(e);var n=na.test(e);return n||ra.test(e)?ia(e.slice(2),n?2:8):ta.test(e)?NaN:+e},aa=1/0;var sa=function(e){return e?(e=oa(e))===aa||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var la=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},ca=Wo,ua=function(e){var t=sa(e),n=t%1;return t==t?n?t-n:t:0},da=Math.max;var ha=Qo((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ua(n);return i<0&&(i=da(r+i,0)),la(e,ca(t),i)})),fa=so;var pa=function(e,t){return fa(e,t)};let ga=Ma();const ma=e=>ka(e,ga);let ya=Ma();ma.write=e=>ka(e,ya);let va=Ma();ma.onStart=e=>ka(e,va);let ba=Ma();ma.onFrame=e=>ka(e,ba);let wa=Ma();ma.onFinish=e=>ka(e,wa);let $a=[];ma.setTimeout=(e,t)=>{let n=ma.now()+t,r=()=>{let e=$a.findIndex((e=>e.cancel==r));~e&&$a.splice(e,1),Oa-=~e?1:0},i={time:n,handler:e,cancel:r};return $a.splice(xa(n),0,i),Oa+=1,Da(),i};let xa=e=>~(~$a.findIndex((t=>t.time>e))||~$a.length);ma.cancel=e=>{va.delete(e),ba.delete(e),wa.delete(e),ga.delete(e),ya.delete(e)},ma.sync=e=>{Fa=!0,ma.batchedUpdates(e),Fa=!1},ma.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ma.onStart(n)}return r.handler=e,r.cancel=()=>{va.delete(n),t=null},r};let Sa="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ma.use=e=>Sa=e,ma.now="undefined"!=typeof performance?()=>performance.now():Date.now,ma.batchedUpdates=e=>e(),ma.catch=console.error,ma.frameLoop="always",ma.advance=()=>{"demand"!==ma.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ja()};let _a=-1,Oa=0,Fa=!1;function ka(e,t){Fa?(t.delete(e),e(0)):(t.add(e),Da())}function Da(){_a<0&&(_a=0,"demand"!==ma.frameLoop&&Sa(Ba))}function Ba(){~_a&&(Sa(Ba),ma.batchedUpdates(ja))}function ja(){let e=_a;_a=ma.now();let t=xa(_a);t&&(Aa($a.splice(0,t),(e=>e.handler())),Oa-=t),Oa?(va.flush(),ga.flush(e?Math.min(64,_a-e):16.667),ba.flush(),ya.flush(),wa.flush()):_a=-1}function Ma(){let e=new Set,t=e;return{add(n){Oa+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Oa-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Oa-=t.size,Aa(t,(t=>t(n)&&e.add(t))),Oa+=e.size,t=e)}}}function Aa(e,t){e.forEach((e=>{try{t(e)}catch(e){ma.catch(e)}}))}function Ca(){}const Ea={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function za(e,t){if(Ea.arr(e)){if(!Ea.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Ia=(e,t)=>e.forEach(t);function Pa(e,t,n){if(Ea.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Na=e=>Ea.und(e)?[]:Ea.arr(e)?e:[e];function Ta(e,t){if(e.size){const n=Array.from(e);e.clear(),Ia(n,t)}}const Ha=(e,...t)=>Ta(e,(e=>e(...t))),La=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ra,Va,Wa=null,Ya=!1,qa=Ca;var Ua=Object.freeze({__proto__:null,get createStringInterpolator(){return Ra},get to(){return Va},get colors(){return Wa},get skipAnimation(){return Ya},get willAdvance(){return qa},assign:e=>{e.to&&(Va=e.to),e.now&&(ma.now=e.now),void 0!==e.colors&&(Wa=e.colors),null!=e.skipAnimation&&(Ya=e.skipAnimation),e.createStringInterpolator&&(Ra=e.createStringInterpolator),e.requestAnimationFrame&&ma.use(e.requestAnimationFrame),e.batchedUpdates&&(ma.batchedUpdates=e.batchedUpdates),e.willAdvance&&(qa=e.willAdvance),e.frameLoop&&(ma.frameLoop=e.frameLoop)}});const Qa=new Set;let Za=[],Ga=[],Xa=0;const Ja={get idle(){return!Qa.size&&!Za.length},start(e){Xa>e.priority?(Qa.add(e),ma.onStart(Ka)):(es(e),ma(ns))},advance:ns,sort(e){if(Xa)ma.onFrame((()=>Ja.sort(e)));else{const t=Za.indexOf(e);~t&&(Za.splice(t,1),ts(e))}},clear(){Za=[],Qa.clear()}};function Ka(){Qa.forEach(es),Qa.clear(),ma(ns)}function es(e){Za.includes(e)||ts(e)}function ts(e){Za.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Za,(t=>t.priority>e.priority)),0,e)}function ns(e){const t=Ga;for(let n=0;n<Za.length;n++){const r=Za[n];Xa=r.priority,r.idle||(qa(r),r.advance(e),r.idle||t.push(r))}return Xa=0,Ga=Za,Ga.length=0,Za=t,Za.length>0}const rs="[-+]?\\d*\\.?\\d+",is=rs+"%";function os(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const as=new RegExp("rgb"+os(rs,rs,rs)),ss=new RegExp("rgba"+os(rs,rs,rs,rs)),ls=new RegExp("hsl"+os(rs,is,is)),cs=new RegExp("hsla"+os(rs,is,is,rs)),us=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ds=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hs=/^#([0-9a-fA-F]{6})$/,fs=/^#([0-9a-fA-F]{8})$/;function ps(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function gs(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ps(i,r,e+1/3),a=ps(i,r,e),s=ps(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ms(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ys(e){return(parseFloat(e)%360+360)%360/360}function vs(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function bs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ws(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=hs.exec(e))?parseInt(t[1]+"ff",16)>>>0:Wa&&void 0!==Wa[e]?Wa[e]:(t=as.exec(e))?(ms(t[1])<<24|ms(t[2])<<16|ms(t[3])<<8|255)>>>0:(t=ss.exec(e))?(ms(t[1])<<24|ms(t[2])<<16|ms(t[3])<<8|vs(t[4]))>>>0:(t=us.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=fs.exec(e))?parseInt(t[1],16)>>>0:(t=ds.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ls.exec(e))?(255|gs(ys(t[1]),bs(t[2]),bs(t[3])))>>>0:(t=cs.exec(e))?(gs(ys(t[1]),bs(t[2]),bs(t[3]))|vs(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const $s=(e,t,n)=>{if(Ea.fun(e))return e;if(Ea.arr(e))return $s({range:e,output:t,extrapolate:n});if(Ea.str(e.output[0]))return Ra(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const xs=1.70158,Ss=1.525*xs,_s=xs+1,Os=2*Math.PI/3,Fs=2*Math.PI/4.5,ks=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ds={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_s*e*e*e-xs*e*e,easeOutBack:e=>1+_s*Math.pow(e-1,3)+xs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ss)/2:(Math.pow(2*e-2,2)*((Ss+1)*(2*e-2)+Ss)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Os),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Os)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Fs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Fs)/2+1,easeInBounce:e=>1-ks(1-e),easeOutBounce:ks,easeInOutBounce:e=>e<.5?(1-ks(1-2*e))/2:(1+ks(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(this,arguments)}const js=Symbol.for("FluidValue.get"),Ms=Symbol.for("FluidValue.observers"),As=e=>Boolean(e&&e[js]),Cs=e=>e&&e[js]?e[js]():e,Es=e=>e[Ms]||null;function zs(e,t){let n=e[Ms];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Is{constructor(e){if(this[js]=void 0,this[Ms]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ps(this,e)}}const Ps=(e,t)=>Hs(e,js,t);function Ns(e,t){if(e[js]){let n=e[Ms];n||Hs(e,Ms,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ts(e,t){let n=e[Ms];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ms]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Hs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ls=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Rs=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Vs=new RegExp(`(${Ls.source})(%|[a-z]+)`,"i"),Ws=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ys=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,qs=e=>{const[t,n]=Us(e);if(!t||La())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Ys.test(n)?qs(n):n||e},Us=e=>{const t=Ys.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Qs;const Zs=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Gs=e=>{Qs||(Qs=Wa?new RegExp(`(${Object.keys(Wa).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Cs(e).replace(Ys,qs).replace(Rs,ws).replace(Qs,ws))),n=t.map((e=>e.match(Ls).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>$s(Bs({},e,{output:t}))));return e=>{var n;const i=!Vs.test(t[0])&&(null==(n=t.find((e=>Vs.test(e))))?void 0:n.replace(Ls,""));let o=0;return t[0].replace(Ls,(()=>`${r[o++](e)}${i||""}`)).replace(Ws,Zs)}},Xs="react-spring: ",Js=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Xs}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ks=Js(console.warn);const el=Js(console.warn);function tl(e){return Ea.str(e)&&("#"==e[0]||/\d/.test(e)||!La()&&Ys.test(e)||e in(Wa||{}))}const nl=La()?s:l,rl=()=>{const e=o(!1);return nl((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function il(){const e=c()[1],t=rl();return()=>{t.current&&e(Math.random())}}const ol=e=>s(e,al),al=[];function sl(e){const t=o();return s((()=>{t.current=e})),t.current}const ll=Symbol.for("Animated:node"),cl=e=>e&&e[ll],ul=(e,t)=>{return n=e,r=ll,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},dl=e=>e&&e[ll]&&e[ll].getPayload();class hl{constructor(){this.payload=void 0,ul(this,this)}getPayload(){return this.payload||[]}}class fl extends hl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ea.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new fl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ea.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ea.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class pl extends fl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=$s({output:[e,e]})}static create(e){return new pl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ea.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=$s({output:[this.getValue(),e]})),this._value=0,super.reset()}}const gl={dependencies:null};class ml extends hl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Pa(this.source,((n,r)=>{var i;(i=n)&&i[ll]===i?t[r]=n.getValue(e):As(n)?t[r]=Cs(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ia(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Pa(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){gl.dependencies&&As(e)&&gl.dependencies.add(e);const t=dl(e);t&&Ia(t,(e=>this.add(e)))}}class yl extends ml{constructor(e){super(e)}static create(e){return new yl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(vl)),!0)}}function vl(e){return(tl(e)?pl:fl).create(e)}function bl(e){const t=cl(e);return t?t.constructor:Ea.arr(e)?yl:tl(e)?pl:fl}function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}const $l=(e,t)=>{const n=!Ea.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((i,a)=>{const l=o(null),c=n&&d((e=>{l.current=function(e,t){e&&(Ea.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,h]=function(e,t){const n=new Set;gl.dependencies=n,e.style&&(e=wl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new ml(e),gl.dependencies=null,[e,n]}(i,t),f=il(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new xl(p,h),m=o();nl((()=>(m.current=g,Ia(h,(e=>Ns(e,g))),()=>{m.current&&(Ia(m.current.deps,(e=>Ts(e,m.current))),ma.cancel(m.current.update))}))),s(p,[]),ol((()=>()=>{const e=m.current;Ia(e.deps,(t=>Ts(t,e)))}));const y=t.getComponentProps(u.getValue());return r.createElement(e,wl({},y,{ref:c}))}))};class xl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ma.write(this.update)}}const Sl=Symbol.for("AnimatedComponent"),_l=e=>Ea.str(e)?e:e&&Ea.str(e.displayName)?e.displayName:Ea.fun(e)&&e.name||null;function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(this,arguments)}function Fl(e,...t){return Ea.fun(e)?e(...t):e}const kl=(e,t)=>!0===e||!!(t&&e&&(Ea.fun(e)?e(t):Na(e).includes(t))),Dl=(e,t)=>Ea.obj(e)?t&&e[t]:e,Bl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,jl=e=>e,Ml=(e,t=jl)=>{let n=Al;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Ea.und(n)||(r[i]=n)}return r},Al=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Cl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function El(e){const t=function(e){const t={};let n=0;if(Pa(e,((e,r)=>{Cl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Pa(e,((e,r)=>r in t||(n[r]=e))),n}return Ol({},e)}function zl(e){return e=Cs(e),Ea.arr(e)?e.map(zl):tl(e)?Ua.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Il(e){return Ea.fun(e)||Ea.arr(e)&&Ea.obj(e[0])}const Pl=Ol({},{tension:170,friction:26},{mass:1,damping:1,easing:Ds.linear,clamp:!1});class Nl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Pl)}}function Tl(e,t){if(Ea.und(t.decay)){const n=!Ea.und(t.tension)||!Ea.und(t.friction);!n&&Ea.und(t.frequency)&&Ea.und(t.damping)&&Ea.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Hl=[];class Ll{constructor(){this.changed=!1,this.values=Hl,this.toValues=null,this.fromValues=Hl,this.to=void 0,this.from=void 0,this.config=new Nl,this.immediate=!1}}function Rl(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=kl(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Ea.und(n.pause)||(i.paused=kl(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||kl(e,t)),c=Fl(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-ma.now()}function f(){c>0&&!Ua.skipAnimation?(i.delayed=!0,u=ma.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Ol({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Vl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ql(e.get()):t.every((e=>e.noop))?Wl(e.get()):Yl(e.get(),t.every((e=>e.finished))),Wl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Yl=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ql=e=>({value:e,cancelled:!0,finished:!1});function Ul(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Ml(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&ql(r)||i!==n.asyncId&&Yl(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Zl,a=new Gl;return(async()=>{if(Ua.skipAnimation)throw Ql(n),a.result=Yl(r,!1),d(a),a;f(o);const s=Ea.obj(e)?Ol({},e):Ol({},t,{to:e});s.parentId=i,Pa(c,((e,t)=>{Ea.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ua.skipAnimation)return Ql(n),Yl(r,!1);try{let t;t=Ea.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Yl(r.get(),!0,!1)}catch(e){if(e instanceof Zl)g=e.result;else{if(!(e instanceof Gl))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Ea.fun(a)&&ma.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Ql(e,t){Ta(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Zl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Gl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Xl=e=>e instanceof Kl;let Jl=1;class Kl extends Is{constructor(...e){super(...e),this.id=Jl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=cl(this);return e&&e.getValue()}to(...e){return Ua.to(this,e)}interpolate(...e){return Ks(`${Xs}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ua.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){zs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ja.sort(this),zs(this,{type:"priority",parent:this,priority:e})}}const ec=Symbol.for("SpringPhase"),tc=e=>(1&e[ec])>0,nc=e=>(2&e[ec])>0,rc=e=>(4&e[ec])>0,ic=(e,t)=>t?e[ec]|=3:e[ec]&=-3,oc=(e,t)=>t?e[ec]|=4:e[ec]&=-5;class ac extends Kl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ll,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ea.und(e)||!Ea.und(t)){const n=Ea.obj(e)?Ol({},e):Ol({},t,{from:e});Ea.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(nc(this)||this._state.asyncTo)||rc(this)}get goal(){return Cs(this.animation.to)}get velocity(){const e=cl(this);return e instanceof fl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return tc(this)}get isAnimating(){return nc(this)}get isPaused(){return rc(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=dl(r.to);!a&&As(r.to)&&(o=Na(Cs(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==pl?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ea.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Ea.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Ea.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=cl(this),l=s.getValue();if(t){const e=Cs(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ma.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(nc(this)){const{to:e,config:t}=this.animation;ma.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ea.und(e)?(n=this.queue||[],this.queue=[]):n=[Ea.obj(e)?e:Ol({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Vl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ql(this._state,e&&this._lastCallId),ma.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ea.obj(n)?n[t]:n,(null==n||Il(n))&&(n=void 0),r=Ea.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return tc(this)||(e.reverse&&([n,r]=[r,n]),r=Cs(r),Ea.und(r)?cl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Ol({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Ml(n,((e,t)=>/^on/.test(t)?Dl(e,r):e))),fc(this,n,"onProps"),pc(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Rl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{rc(this)||(oc(this,!0),Ha(a.pauseQueue),pc(this,"onPause",Yl(this,sc(this,this.animation.to)),this))},resume:()=>{rc(this)&&(oc(this,!1),nc(this)&&this._resume(),Ha(a.resumeQueue),pc(this,"onResume",Yl(this,sc(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=lc(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ql(this));const r=!Ea.und(e.to),i=!Ea.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(ql(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Ea.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!za(d,c);h&&(s.from=d),d=Cs(d);const f=!za(u,l);f&&this._focus(u);const p=Il(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Tl(n=Ol({},n),t),t=Ol({},n,t)),Tl(e,t),Object.assign(e,t);for(const t in Pl)null==e[t]&&(e[t]=Pl[t]);let{mass:r,frequency:i,damping:o}=e;Ea.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Fl(t.config,o),t.config!==a.config?Fl(a.config,o):void 0);let v=cl(this);if(!v||Ea.und(u))return n(Yl(this,!0));const b=Ea.und(t.reset)?i&&!t.default:!Ea.und(d)&&kl(t.reset,o),w=b?d:this.get(),$=zl(u),x=Ea.num($)||Ea.arr($)||tl($),S=!p&&(!x||kl(a.immediate||t.immediate,o));if(f){const e=bl(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let O=As(u),F=!1;if(!O){const e=b||!tc(this)&&h;(f||e)&&(F=za(zl(w),$),O=!F),(za(s.immediate,S)||S)&&za(g.decay,m)&&za(g.velocity,y)||(O=!0)}if(F&&nc(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||As(l))&&(s.values=v.getPayload(),s.toValues=As(u)?null:_==pl?[1]:Na($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),O)){const{onRest:e}=s;Ia(hc,(e=>fc(this,t,e)));const r=Yl(this,sc(this,l));Ha(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ma.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Fl(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Ul(t.to,t,this._state,this)):O?this._start():nc(this)&&!f?this._pendingCalls.add(n):n(Wl(w))}_focus(e){const t=this.animation;e!==t.to&&(Es(this)&&this._detach(),t.to=e,Es(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;As(t)&&(Ns(t,this),Xl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;As(e)&&Ts(e,this)}_set(e,t=!0){const n=Cs(e);if(!Ea.und(n)){const e=cl(this);if(!e||!za(n,e.getValue())){const r=bl(n);e&&e.constructor==r?e.setValue(n):ul(this,r.create(n)),e&&ma.batchedUpdates((()=>{this._onChange(n,t)}))}}return cl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,pc(this,"onStart",Yl(this,sc(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Fl(this.animation.onChange,e,this)),Fl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;cl(this).reset(Cs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),nc(this)||(ic(this,!0),rc(this)||this._resume())}_resume(){Ua.skipAnimation?this.finish():Ja.start(this)}_stop(e,t){if(nc(this)){ic(this,!1);const n=this.animation;Ia(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),zs(this,{type:"idle",parent:this});const r=t?ql(this.get()):Yl(this.get(),sc(this,null!=e?e:n.to));Ha(this._pendingCalls,r),n.changed&&(n.changed=!1,pc(this,"onRest",r,this))}}}function sc(e,t){const n=zl(t);return za(zl(e.get()),n)}function lc(e,t=e.loop,n=e.to){let r=Fl(t);if(r){const i=!0!==r&&El(r),o=(i||e).reverse,a=!i||i.reset;return cc(Ol({},e,{loop:t,default:!1,pause:void 0,to:!o||Il(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function cc(e){const{to:t,from:n}=e=El(e),r=new Set;return Ea.obj(t)&&dc(t,r),Ea.obj(n)&&dc(n,r),e.keys=r.size?Array.from(r):null,e}function uc(e){const t=cc(e);return Ea.und(t.default)&&(t.default=Ml(t)),t}function dc(e,t){Pa(e,((e,n)=>null!=e&&t.add(n)))}const hc=["onStart","onRest","onChange","onPause","onResume"];function fc(e,t,n){e.animation[n]=t[n]!==Bl(t,n)?Dl(t[n],e.key):void 0}function pc(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const gc=["onStart","onChange","onRest"];let mc=1;class yc{constructor(e,t){this.id=mc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ol({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ea.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(cc(e)),this}start(e){let{queue:t}=this;return e?t=Na(e).map(cc):this.queue=[],this._flush?this._flush(this,t):(_c(this,t),vc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ia(Na(t),(t=>n[t].stop(!!e)))}else Ql(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ea.und(e))this.start({pause:!0});else{const t=this.springs;Ia(Na(e),(e=>t[e].pause()))}return this}resume(e){if(Ea.und(e))this.start({pause:!1});else{const t=this.springs;Ia(Na(e),(e=>t[e].resume()))}return this}each(e){Pa(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ta(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ta(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ta(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ma.onFrame(this._onFrame)}}function vc(e,t){return Promise.all(t.map((t=>bc(e,t)))).then((t=>Vl(e,t)))}async function bc(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ea.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Ea.arr(i)||Ea.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ia(gc,(n=>{const r=t[n];if(Ea.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ha(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Bl(t,"cancel");(u||f&&d.asyncId)&&h.push(Rl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ca,resume:Ca,start(t,n){f?(Ql(d,e._lastAsyncId),n(ql(e))):(t.onRest=s,n(Ul(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Vl(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=lc(t,a,i);if(n)return _c(e,[n]),bc(e,n,!0)}return l&&ma.batchedUpdates((()=>l(p,e,e.item))),p}function wc(e,t){const n=Ol({},e.springs);return t&&Ia(Na(t),(e=>{Ea.und(e.keys)&&(e=cc(e)),Ea.obj(e.to)||(e=Ol({},e,{to:void 0})),Sc(n,e,(e=>xc(e)))})),$c(e,n),n}function $c(e,t){Pa(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ns(t,e))}))}function xc(e,t){const n=new ac;return n.key=e,t&&Ns(n,t),n}function Sc(e,t,n){t.keys&&Ia(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function _c(e,t){Ia(t,(t=>{Sc(e.springs,t,(t=>xc(t,e)))}))}const Oc=["children"],Fc=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Oc);const i=h(kc),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=c((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return s((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:u}=kc;return r.createElement(u,{value:n},t)},kc=(Dc=Fc,Bc={},Object.assign(Dc,r.createContext(Bc)),Dc.Provider._context=Dc,Dc.Consumer._context=Dc,Dc);var Dc,Bc;Fc.Provider=kc.Provider,Fc.Consumer=kc.Consumer;const jc=()=>{const e=[],t=function(t){el(`${Xs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ia(e,((e,i)=>{if(Ea.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ia(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ia(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ia(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Ia(e,((e,r)=>{if(Ea.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ia(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ia(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ea.fun(e)?e(n,t):e};return t._getProps=n,t};function Mc(e,t){const n=Ea.fun(e),[[r],i]=function(e,t,n){const r=Ea.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?jc():void 0),[]),a=o(0),s=il(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=wc(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?vc(e,t):new Promise((r=>{$c(e,n),l.queue.push((()=>{r(vc(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=sl(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new yc(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=uc(n))}}f((()=>{Ia(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=c.current.map(((e,t)=>wc(e,u[t]))),m=h(Fc),y=sl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);nl((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ia(e,(e=>e()))),Ia(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ol((()=>()=>{Ia(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Ol({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Ac;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ac||(Ac={}));class Cc extends Kl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=$s(...t);const n=this._get(),r=bl(n);ul(this,r.create(n))}advance(e){const t=this._get();za(t,this.get())||(cl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&zc(this._active)&&Ic(this)}_get(){const e=Ea.arr(this.source)?this.source.map(Cs):Na(Cs(this.source));return this.calc(...e)}_start(){this.idle&&!zc(this._active)&&(this.idle=!1,Ia(dl(this),(e=>{e.done=!1})),Ua.skipAnimation?(ma.batchedUpdates((()=>this.advance())),Ic(this)):Ja.start(this))}_attach(){let e=1;Ia(Na(this.source),(t=>{As(t)&&Ns(t,this),Xl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ia(Na(this.source),(e=>{As(e)&&Ts(e,this)})),this._active.clear(),Ic(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Na(this.source).reduce(((e,t)=>Math.max(e,(Xl(t)?t.priority:0)+1)),0))}}function Ec(e){return!1!==e.idle}function zc(e){return!e.size||Array.from(e).every(Ec)}function Ic(e){e.idle||(e.idle=!0,Ia(dl(e),(e=>{e.done=!0})),zs(e,{type:"idle",parent:e}))}function Pc(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Ua.assign({createStringInterpolator:Gs,to:(e,t)=>new Cc(e,t)});const Nc=["style","children","scrollTop","scrollLeft","viewBox"],Tc=/^--/;function Hc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Tc.test(e)||Rc.hasOwnProperty(e)&&Rc[e]?(""+t).trim():t+"px"}const Lc={};let Rc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Vc=["Webkit","Ms","Moz","O"];Rc=Object.keys(Rc).reduce(((e,t)=>(Vc.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Rc);const Wc=["x","y","z"],Yc=/^(matrix|translate|scale|rotate|skew)/,qc=/^(translate)/,Uc=/^(rotate|skew)/,Qc=(e,t)=>Ea.num(e)&&0!==e?e+t:e,Zc=(e,t)=>Ea.arr(e)?e.every((e=>Zc(e,t))):Ea.num(e)?e===t:parseFloat(e)===t;class Gc extends ml{constructor(e){let{x:t,y:n,z:r}=e,i=Pc(e,Wc);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Qc(e,"px"))).join(",")})`,Zc(e,0)]))),Pa(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Yc.test(t)){if(delete i[t],Ea.und(e))return;const n=qc.test(t)?"px":Uc.test(t)?"deg":"";o.push(Na(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Qc(i,n)})`,Zc(i,0)]:e=>[`${t}(${e.map((e=>Qc(e,n))).join(",")})`,Zc(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Xc(o,a)),super(i)}}class Xc extends Is{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ia(this.inputs,((n,r)=>{const i=Cs(n[0]),[o,a]=this.transforms[r](Ea.arr(i)?i:n.map(Cs));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ia(this.inputs,(e=>Ia(e,(e=>As(e)&&Ns(e,this)))))}observerRemoved(e){0==e&&Ia(this.inputs,(e=>Ia(e,(e=>As(e)&&Ts(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),zs(this,e)}}const Jc=["scrollTop","scrollLeft"];Ua.assign({batchedUpdates:b,createStringInterpolator:Gs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Kc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ml(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=_l(e)||"Anonymous";return(e=Ea.str(e)?o[e]||(o[e]=$l(e,i)):e[Sl]||(e[Sl]=$l(e,i))).displayName=`Animated(${t})`,e};return Pa(e,((t,n)=>{Ea.arr(e)&&(n=_l(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Pc(r,Nc),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Lc[t]||(Lc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Hc(t,i[t]);Tc.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Gc(e),getComponentProps:e=>Pc(e,Jc)}),eu=Kc.animated,tu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nu=e=>Object.keys(tu).reduce(((t,n)=>{const r=tu[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ru=nu("max-width"),iu=(nu("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ou=m`
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
    border-color: ${e=>e.$color||Gt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ou} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,su=p(au)`
    animation-delay: -0.45s;
`,lu=p(au)`
    animation-delay: -0.3s;
`,cu=p(au)`
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
                    background-color: ${Gt.Neutral[8](e)};
                    border: 1px solid ${Gt.Primary(e)};

                    span {
                        color: ${Gt.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${Gt.Neutral[8](e)};
                    border: 1px solid ${Gt.Neutral[5](e)};

                    span {
                        color: ${Gt.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${Gt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Gt.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Gt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Gt.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${Gt.Primary(e)};
                    border: 1px solid transparent;

                    ${ru.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Gt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${cn("H5","semibold")}
                    }

                    ${ru.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${cn("H4","semibold")}
                    }

                    ${ru.mobileS} {
                        height: auto;
                    }
                `}
`;const uu=p((({color:n,className:r,size:i=18})=>e(iu,Object.assign({className:r,$size:i,$color:n},{children:[t(au,{id:"inner1",$size:i-2,$borderWidth:2}),t(su,{id:"inner2",$size:i-2,$borderWidth:2}),t(lu,{id:"inner3",$size:i-2,$borderWidth:2}),t(cu,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Gt.Primary(e);break;case"disabled":t=Gt.Neutral[3](e);break;default:t=Gt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,du=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,hu=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${du};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Gt.Neutral[4](e):e.$unchecked?Gt.Accent.Light[2](e):Gt.Primary(e)};
    }
`,fu=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,pu=p(eu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,gu=p.ul`
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
        background: ${Gt.Neutral[4]};
        border-right: 5px solid ${Gt.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${ru.mobileL} {
        max-height: 15rem;
    }
`,mu=p.li`
    :hover,
    :focus,
    :active {
        background: ${Gt.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${Gt.Accent.Light[5]};
            `}}
`,yu=p.button`
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
        outline-color: ${Gt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,vu=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,bu=p.div`
    ${cn("Body","regular")}
    color: ${Gt.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&vu}
`,wu=p.div`
    color: ${Gt.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&vu}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${cn("BodySmall","semibold")}
                `:g`
                    ${cn("Body","regular")}
                `}
`,$u=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${bu} {
                        display: inline;
                    }

                    ${wu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,xu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Su=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,_u=p((n=>{var{className:r,checked:i,disabled:a,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=k(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=o();s((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(hu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(l||i||a)},{children:[t(fu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:a},h)),l?t($,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):a?t(S,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ou=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Fu=p.button`
    ${cn("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Gt.Primary(e)};\n\t\t`}
`,ku=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Du=p(dn.Body)``,Bu=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Gt.Validation.Red.Icon};
`,ju=p.button`
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
                background-color: ${Gt.Neutral[7]};
            `}
    }
`,Mu=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(ju,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Au=p.li`
    background: ${Gt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Cu=p(yn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Eu=p(O)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
`,zu=p(Mu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
    cursor: pointer;
`,Iu=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Gt.Neutral[3]};
`,Pu=u(((n,r)=>{const{onClear:i}=n,o=k(n,["onClear"]);return e(Au,{children:[t(Eu,{}),t(Cu,Object.assign({ref:r},o)),o.value&&t(zu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Iu,{})}))]},"search")})),Nu=r=>{var{listItems:i,listExtractor:a,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:O=2,labelDisplayType:F="inline",renderListItem:D,onBlur:B,hideNoResultsDisplay:j,renderCustomCallToAction:M}=r,A=k(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,E]=c(0),[z,I]=c(""),[P,N]=c(i),[T,H]=c(0),L=Mc({height:T}),R=o(),V=o(),W=o([]),Y=o(),q=o(),U=o(C),Q=o(P),Z=e=>{U.current=e,E(e)},G=e=>{Q.current=e,N(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(z)}),[z]),s((()=>{if(I(""),h){if(setTimeout((()=>{H(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[C]&&W.current[C].focus()}else H(0)}),[h]),s((()=>{if(h){const e=te();H(e)}}),[P,S]),s((()=>{G(i),I(""),Z(0)}),[i]);const X=e=>a?a(e):e.toString(),J=e=>{if("inline"!==F)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Tn.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},K=e=>!!ha(w,(t=>pa(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;I(t),g&&g()},oe=()=>{I(""),Y.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{B&&B()},le=r=>e(n,{children:[t(xu,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r})),t(Su,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":F;return e($u,Object.assign({$labelDisplayType:l},{children:[t(bu,Object.assign({$truncateType:_,$maxLines:O,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(wu,Object.assign({$truncateType:_,$maxLines:O,$labelDisplayType:F,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===S)return P.map(((n,r)=>t(mu,Object.assign({$checked:K(n)&&!b},{children:e(yu,Object.assign({$hasNextLineLabel:"next-line"===F&&P.length>0&&a&&"string"!=typeof a(P[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(_u,{checked:K(n),displaySize:"small"}),D?D(n,{selected:K(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(b&&P.length>0&&!z&&"success"===S)return t(Ou,{children:t(Fu,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(z||!f)&&0===P.length&&"success"===S)return e(ku,Object.assign({"data-testid":"list-no-results"},{children:[t(Bu,{"data-testid":"no-result-icon"}),t(Du,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(ku,Object.assign({"data-testid":"list-loading"},{children:[t(uu,{$buttonStyle:"secondary",size:24}),t(Du,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(ku,Object.assign({"data-testid":"list-fail"},{children:[t(Bu,{"data-testid":"load-error-icon"}),t(Du,{children:"Failed to load."}),t(Fu,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(pu,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(gu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},A,{children:[(f||m)&&"success"===S?t(Pu,{ref:Y,onChange:ie,value:z,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&M)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:M(y,P)}))})()]}))})},Tu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Hu=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Lu=g`
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
        outline: 2px solid ${Gt.Accent.Light[3]};
    }
`,Ru=p.button`
    ${Lu}
    cursor: pointer;
`;p.div`
    ${Lu}
`;const Vu=m`
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
`,Wu=p.div`
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Gt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Vu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${Gt.Neutral[6](e)};

                ${Ru} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Ru} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${Gt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border(e)};
                    box-shadow: ${en};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Tu};
    margin-left: 1rem;
`,p(F)`
    color: ${Gt.Neutral[3]};
    height: ${on.Body.fontSize}rem;
    width: ${on.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${Gt.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Yu=p(dn.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Yu)`
    color: ${Gt.Neutral[3]};
`;const qu=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:l,readOnly:c})=>{const u=o();return((e,t,n="window",r)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&l()}}),"document"),t(Hu,{children:t(Wu,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))})},Uu=p.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return g`
                border-bottom: 1px solid ${Gt.Neutral[5](e)};
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
`,Qu=p(Ru)`
    padding: 0;
    width: auto;
`,Zu=p.div`
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
`,Xu=p(F)`
    color: ${Gt.Neutral[3]};
    height: ${on.Body.fontSize}rem;
    width: ${on.Body.fontSize}rem;
    vertical-align: bottom;
`,Ju=p.div`
    display: flex;
    flex: 1 1 auto;
`,Ku=p(dn.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,ed=p(Ku)`
    color: ${Gt.Neutral[3]};
`,td=p.div`
    width: 1px;
    background: ${Gt.Neutral[5]};
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
`,nd=i.forwardRef(((r,i)=>{var{addon:a,error:l,onChange:u,readOnly:d,className:h,onBlur:f}=r,p=k(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:y,searchFunction:v,searchPlaceholder:b,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:S,onSelectOption:_,onHideOptions:O,onShowOptions:F,"data-selector-testid":D}=a.attributes,{position:B}=a,[j,M]=c(S),[A,C]=c(!1),E=o();s((()=>{M(S)}),[S]);const z=()=>x?x(j):w?w(j):j.toString(),I=e=>{!e&&O&&O(),e&&F&&F()},P=e=>{e.preventDefault(),p.disabled||(C(!A),I(!A))},N=(e,t)=>{M(e),C(!1),I(!1),E&&E.current.focus(),_&&_(e,t)},T=e=>{u&&u(e)},H=()=>{f&&f()},L=()=>{C(!1),I(!1),E&&E.current.focus()};return e(qu,Object.assign({className:h,show:A,error:l&&!A,disabled:p.disabled,readOnly:d,onBlur:()=>{C(!1),I(!1),H()}},{children:[e(Uu,Object.assign({$expanded:A,$readOnly:d,$position:B},{children:[d?j?t(Zu,{children:t(Ku,Object.assign({"data-testid":"selector-label"},{children:z()}))}):null:t(Qu,Object.assign({ref:E,type:"button",disabled:p.disabled,"data-testid":D||"addon-selector",onClick:P},{children:e(n,{children:[e(Ju,{children:[g&&!j&&t(ed,{children:g}),j&&t(Ku,Object.assign({"data-testid":"selector-label"},{children:z()}))]}),t(Gu,Object.assign({$expanded:A},{children:t(Xu,{})}))]})})),t(td,{$readOnly:d,$position:B}),t(qn,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:T,"data-testid":p["data-testid"]||"input",onBlur:H}))]})),m&&m.length>0?t(Nu,{listItems:m,selectedItems:S?[S]:[],onSelectItem:N,valueExtractor:w,listExtractor:$,visible:A,enableSearch:y,searchFunction:v,searchPlaceholder:b,"data-testid":"dropdown-list",onBlur:H,onDismiss:L}):null]}))})),rd=i.forwardRef(((n,r)=>{var{addon:i,error:o,className:a}=n,s=k(n,["addon","error","className"]);const l=()=>t(Yn,Object.assign({disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a},{children:t(qn,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:u}=s;switch(n){case"list":{const e=i.attributes;return e.options&&e.options.length>0?t(nd,Object.assign({ref:r,addon:i,error:o,className:a},s)):l()}case"custom":{const n=i.attributes;return n.children?e(mn,Object.assign({$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[t(Un,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),t(qn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?e(mn,Object.assign({$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[t(Un,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),t(qn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}}}}));export{rd as InputGroup};
//# sourceMappingURL=index.js.map
