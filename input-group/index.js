import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as v}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as x}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F=Array.isArray,k="object"==typeof O&&O&&O.Object===Object&&O,D=k,B="object"==typeof self&&self&&self.Object===Object&&self,j=D||B||Function("return this")(),M=j.Symbol,A=M,C=Object.prototype,E=C.hasOwnProperty,z=C.toString,I=A?A.toStringTag:void 0;var P=function(e){var t=E.call(e,I),n=e[I];try{e[I]=void 0;var r=!0}catch(e){}var i=z.call(e);return r&&(t?e[I]=n:delete e[I]),i},N=Object.prototype.toString;var T=P,H=function(e){return N.call(e)},L=M?M.toStringTag:void 0;var R=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?T(e):H(e)};var V=function(e){return null!=e&&"object"==typeof e},W=R,Y=V;var q=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==W(e)},U=F,Q=q,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,t){if(U(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Q(e))||(G.test(e)||!Z.test(e)||null!=t&&e in Object(t))};var J=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},K=R,ee=J;var te,ne=function(e){if(!ee(e))return!1;var t=K(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=j["__core-js_shared__"],ie=(te=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var oe=function(e){return!!ie&&ie in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=ne,ce=oe,ue=J,de=se,he=/^\[object .+?Constructor\]$/,fe=Function.prototype,pe=Object.prototype,ge=fe.toString,me=pe.hasOwnProperty,ye=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var be=function(e){return!(!ue(e)||ce(e))&&(le(e)?ye:he).test(de(e))},ve=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var n=ve(e,t);return be(n)?n:void 0},$e=we(Object,"create"),xe=$e;var Se=function(){this.__data__=xe?xe(null):{},this.size=0};var _e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=$e,Fe=Object.prototype.hasOwnProperty;var ke=function(e){var t=this.__data__;if(Oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Fe.call(t,e)?t[e]:void 0},De=$e,Be=Object.prototype.hasOwnProperty;var je=$e;var Me=Se,Ae=_e,Ce=ke,Ee=function(e){var t=this.__data__;return De?void 0!==t[e]:Be.call(t,e)},ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=je&&void 0===t?"__lodash_hash_undefined__":t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Me,Ie.prototype.delete=Ae,Ie.prototype.get=Ce,Ie.prototype.has=Ee,Ie.prototype.set=ze;var Pe=Ie;var Ne=function(){this.__data__=[],this.size=0};var Te=function(e,t){return e===t||e!=e&&t!=t},He=Te;var Le=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},Re=Le,Ve=Array.prototype.splice;var We=Le;var Ye=Le;var qe=Le;var Ue=Ne,Qe=function(e){var t=this.__data__,n=Re(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ve.call(t,n,1),--this.size,!0)},Ze=function(e){var t=this.__data__,n=We(t,e);return n<0?void 0:t[n][1]},Ge=function(e){return Ye(this.__data__,e)>-1},Xe=function(e,t){var n=this.__data__,r=qe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ue,Je.prototype.delete=Qe,Je.prototype.get=Ze,Je.prototype.has=Ge,Je.prototype.set=Xe;var Ke=Je,et=we(j,"Map"),tt=Pe,nt=Ke,rt=et;var it=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ot=function(e,t){var n=e.__data__;return it(t)?n["string"==typeof t?"string":"hash"]:n.map},at=ot;var st=ot;var lt=ot;var ct=ot;var ut=function(){this.size=0,this.__data__={hash:new tt,map:new(rt||nt),string:new tt}},dt=function(e){var t=at(this,e).delete(e);return this.size-=t?1:0,t},ht=function(e){return st(this,e).get(e)},ft=function(e){return lt(this,e).has(e)},pt=function(e,t){var n=ct(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function gt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gt.prototype.clear=ut,gt.prototype.delete=dt,gt.prototype.get=ht,gt.prototype.has=ft,gt.prototype.set=pt;var mt=gt,yt=mt;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(bt.Cache||yt),n}bt.Cache=yt;var vt=bt;var wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/\\(\\)?/g,xt=function(e){var t=vt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wt,(function(e,n,r,i){t.push(r?i.replace($t,"$1"):n||e)})),t}));var St=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},_t=F,Ot=q,Ft=M?M.prototype:void 0,kt=Ft?Ft.toString:void 0;var Dt=function e(t){if("string"==typeof t)return t;if(_t(t))return St(t,e)+"";if(Ot(t))return kt?kt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Bt=Dt;var jt=F,Mt=X,At=xt,Ct=function(e){return null==e?"":Bt(e)};var Et=function(e,t){return jt(e)?e:Mt(e,t)?[e]:At(Ct(e))},zt=q;var It=function(e){if("string"==typeof e||zt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Pt=Et,Nt=It;var Tt=function(e,t){for(var n=0,r=(t=Pt(t,e)).length;null!=e&&n<r;)e=e[Nt(t[n++])];return n&&n==r?e:void 0},Ht=Tt;var Lt=function(e,t,n){var r=null==e?void 0:Ht(e,t);return void 0===r?n:r};const Rt=(e,t,n)=>t?Lt(n,t)||Lt(e,t):n||e,Vt=(e,t)=>{const n=t||e.defaultValue;return Lt(e.collections,n)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wt||(Wt={}));const Yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},qt=e=>t=>{const n=t.theme,r=Vt(Yt,n[Wt.colorScheme]);return n.options&&n.options.color?Rt(r,e,n.options.color):Rt(r,e)},Ut={Brand:{1:qt("Brand.1"),2:qt("Brand.2"),3:qt("Brand.3"),4:qt("Brand.4"),5:qt("Brand.5"),6:qt("Brand.6")},Primary:qt("Primary"),PrimaryDark:qt("PrimaryDark"),Secondary:qt("Secondary"),Accent:{Light:{1:qt("Accent.Light.1"),2:qt("Accent.Light.2"),3:qt("Accent.Light.3"),4:qt("Accent.Light.4"),5:qt("Accent.Light.5"),6:qt("Accent.Light.6")},Dark:{1:qt("Accent.Dark.1"),2:qt("Accent.Dark.2"),3:qt("Accent.Dark.3")}},Neutral:{1:qt("Neutral.1"),2:qt("Neutral.2"),3:qt("Neutral.3"),4:qt("Neutral.4"),5:qt("Neutral.5"),6:qt("Neutral.6"),7:qt("Neutral.7"),8:qt("Neutral.8")},Validation:{Green:{Text:qt("Validation.Green.Text"),Icon:qt("Validation.Green.Icon"),Border:qt("Validation.Green.Border"),Background:qt("Validation.Green.Background")},Orange:{Text:qt("Validation.Orange.Text"),Icon:qt("Validation.Orange.Icon"),Border:qt("Validation.Orange.Border"),Background:qt("Validation.Orange.Background"),Badge:qt("Validation.Orange.Badge")},Red:{Text:qt("Validation.Red.Text"),Icon:qt("Validation.Red.Icon"),Border:qt("Validation.Red.Border"),Background:qt("Validation.Red.Background")},Blue:{Text:qt("Validation.Blue.Text"),Icon:qt("Validation.Blue.Icon"),Border:qt("Validation.Blue.Border"),Background:qt("Validation.Blue.Background")}},Shadow:{Accent:qt("Shadow.Accent"),Red:qt("Shadow.Red"),Elevation:qt("Shadow.Elevation")}},Qt={collections:{base:{InputBoxShadow:g`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Zt=e=>t=>{var n;const r=t.theme,i=Vt(Qt,r[Wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Rt(i,e,r.options.designToken):Rt(i,e)},Gt=Zt("InputBoxShadow"),Xt=Zt("InputErrorBoxShadow"),Jt=(Zt("ElevationBoxShadow"),Zt("Table.Header"),Zt("Table.Cell.Primary"),Zt("Table.Cell.Secondary"),Zt("Table.Cell.Selected"),Zt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Kt={collections:{base:{D1:{fontFamily:Jt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},en=e=>t=>{const n=t.theme,r=Vt(Kt,n[Wt.textStyleScheme]);return n.options&&n.options.textStyle?Rt(r,e,n.options.textStyle):Rt(r,e)},tn={D1:{fontFamily:en("D1.fontFamily"),fontSize:en("D1.fontSize"),fontWeight:en("D1.fontWeight"),lineHeight:en("D1.lineHeight"),letterSpacing:en("D1.letterSpacing")},D2:{fontFamily:en("D2.fontFamily"),fontSize:en("D2.fontSize"),fontWeight:en("D2.fontWeight"),lineHeight:en("D2.lineHeight"),letterSpacing:en("D2.letterSpacing")},D3:{fontFamily:en("D3.fontFamily"),fontSize:en("D3.fontSize"),fontWeight:en("D3.fontWeight"),lineHeight:en("D3.lineHeight"),letterSpacing:en("D3.letterSpacing")},D4:{fontFamily:en("D4.fontFamily"),fontSize:en("D4.fontSize"),fontWeight:en("D4.fontWeight"),lineHeight:en("D4.lineHeight"),letterSpacing:en("D4.letterSpacing")},DBody:{fontFamily:en("DBody.fontFamily"),fontSize:en("DBody.fontSize"),fontWeight:en("DBody.fontWeight"),lineHeight:en("DBody.lineHeight"),letterSpacing:en("DBody.letterSpacing")},H1:{fontFamily:en("H1.fontFamily"),fontSize:en("H1.fontSize"),fontWeight:en("H1.fontWeight"),lineHeight:en("H1.lineHeight"),letterSpacing:en("H1.letterSpacing")},H2:{fontFamily:en("H2.fontFamily"),fontSize:en("H2.fontSize"),fontWeight:en("H2.fontWeight"),lineHeight:en("H2.lineHeight"),letterSpacing:en("H2.letterSpacing")},H3:{fontFamily:en("H3.fontFamily"),fontSize:en("H3.fontSize"),fontWeight:en("H3.fontWeight"),lineHeight:en("H3.lineHeight"),letterSpacing:en("H3.letterSpacing")},H4:{fontFamily:en("H4.fontFamily"),fontSize:en("H4.fontSize"),fontWeight:en("H4.fontWeight"),lineHeight:en("H4.lineHeight"),letterSpacing:en("H4.letterSpacing")},H5:{fontFamily:en("H5.fontFamily"),fontSize:en("H5.fontSize"),fontWeight:en("H5.fontWeight"),lineHeight:en("H5.lineHeight"),letterSpacing:en("H5.letterSpacing")},H6:{fontFamily:en("H6.fontFamily"),fontSize:en("H6.fontSize"),fontWeight:en("H6.fontWeight"),lineHeight:en("H6.lineHeight"),letterSpacing:en("H6.letterSpacing")},Body:{fontFamily:en("Body.fontFamily"),fontSize:en("Body.fontSize"),fontWeight:en("Body.fontWeight"),lineHeight:en("Body.lineHeight"),letterSpacing:en("Body.letterSpacing")},BodySmall:{fontFamily:en("BodySmall.fontFamily"),fontSize:en("BodySmall.fontSize"),fontWeight:en("BodySmall.fontWeight"),lineHeight:en("BodySmall.lineHeight"),letterSpacing:en("BodySmall.letterSpacing")},XSmall:{fontFamily:en("XSmall.fontFamily"),fontSize:en("XSmall.fontSize"),fontWeight:en("XSmall.fontWeight"),lineHeight:en("XSmall.lineHeight"),letterSpacing:en("XSmall.letterSpacing")}},nn=e=>{switch(e){case 700:case"bold":return Jt.Bold;case 600:case"semibold":return Jt.Semibold;case 300:case"light":return Jt.Light;case 400:case"regular":return Jt.Regular;default:return""}},rn=(e,t)=>n=>{var r;const i=tn[e].fontFamily(n),o=tn[e].fontWeight(n);return Object.values(Jt).includes(i)?g`
                font-family: ${nn(t)||nn(o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=on(t)||o)&&void 0!==r?r:"normal"};
        `},on=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},an=(e,t,n=!1)=>r=>{const i=tn[e],o=i.fontSize(r);return g`
            ${rn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},sn=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var ln;!function(e){e.D1=p.h1`
        ${e=>g`
                ${an("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${an("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${an("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${an("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${an("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${an("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${an("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${an("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${an("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${an("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${an("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${an("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${an("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${an("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>dn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ln||(ln={}));const cn=p.a`
    ${e=>g`
            ${an(e.textStyle,e.weight)}
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
`,un=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dn=n=>{var{external:r=!1,children:i}=n,o=_(n,["external","children"]);return e(cn,Object.assign({},o,{children:[i,r&&t(un,{})]}))};var hn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(hn||(hn={}));const fn=p.div`
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
        box-shadow: ${Gt};
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
                    box-shadow: ${Xt};
                }
            `:void 0}
`,pn=p.input`
    ${an("Body","regular")}
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
`;var gn={exports:{}};gn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,b=l||0,v=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,w)):new Date(g,m,p,y,b,v,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var mn,yn,bn=gn.exports,vn={exports:{}},wn=vn.exports=(mn={year:0,month:1,day:2,hour:3,minute:4,second:5},yn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=yn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),yn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=mn[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),$n={exports:{}};$n.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var $=function(e){return e instanceof O},x=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},_=b;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return f(r?y-w:y+(6-w),m);case s:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=S(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=_.m(this,m);return v=(p={},p[d]=v/12,p[c]=v,p[u]=v/3,p[l]=(b-y)/6048e5,p[s]=(b-y)/864e5,p[a]=b/n,p[o]=b/t,p[i]=b/e,p)[g]||b,f?v:_.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),F=O.prototype;return S.prototype=F,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[v],S.Ls=w,S.p={},S}();var xn=$n.exports,Sn={exports:{}};Sn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var _n=Sn.exports,On={exports:{}};On.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fn=On.exports,kn={exports:{}};kn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Dn,Bn=kn.exports;xn.extend(_n),xn.extend(Fn),xn.extend(Bn),xn.extend(bn),xn.extend(wn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=xn(t).startOf("week");return jn(n).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Mn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(xn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Dn||(Dn={}));const jn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Mn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},An=[1,3,5,7,8,10,12],Cn=[4,6,9,11];var En,zn,In;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":An.includes(o)?Math.min(i,31).toString():Cn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=xn(e,n);return xn(t,n).diff(r,"minute")}}(En||(En={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zn||(zn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(In||(In={}));const Pn=p.input`
    ${an("Body","regular")}
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
`,Nn=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ut.Neutral[3]};
    background-color: transparent;
    border: none;
`,Tn=p(b)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Hn=p.div`
    display: flex;
    width: 100%;
`,Ln=i.forwardRef(((r,i)=>{var{value:s,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,b=_(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=o();a(i,(()=>v.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>In.transformWithSpaces(e,l)}),$=e=>{f&&(S()?O(e):f(e))},x=()=>{p&&p(),v&&v.current&&v.current.focus()},S=()=>"tel"===c&&l,O=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},F=s?(e=>e?S()?In.transformWithSpaces(e,l):e:"")(s):s,k=()=>e(n,{children:[t(Pn,Object.assign({"data-testid":"input",ref:v,disabled:d,value:F,onChange:$,type:c,readOnly:h},b)),g&&!d&&!h&&!!s&&t(Nn,Object.assign({onClick:x,type:"button"},{children:t(Tn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Hn,Object.assign({className:m},{children:k()})):t(fn,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:k()}))})})),Rn=p.div`
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
        box-shadow: ${Gt};
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
                    box-shadow: ${Xt};
                }
            `:void 0}
`,Vn=p(Ln)`
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
`,Wn=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${an("Body","regular")}
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
`;var Yn=Ke;var qn=Ke,Un=et,Qn=mt;var Zn=Ke,Gn=function(){this.__data__=new Yn,this.size=0},Xn=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Jn=function(e){return this.__data__.get(e)},Kn=function(e){return this.__data__.has(e)},er=function(e,t){var n=this.__data__;if(n instanceof qn){var r=n.__data__;if(!Un||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qn(r)}return n.set(e,t),this.size=n.size,this};function tr(e){var t=this.__data__=new Zn(e);this.size=t.size}tr.prototype.clear=Gn,tr.prototype.delete=Xn,tr.prototype.get=Jn,tr.prototype.has=Kn,tr.prototype.set=er;var nr=tr;var rr=mt,ir=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},or=function(e){return this.__data__.has(e)};function ar(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new rr;++t<n;)this.add(e[t])}ar.prototype.add=ar.prototype.push=ir,ar.prototype.has=or;var sr=ar,lr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},cr=function(e,t){return e.has(t)};var ur=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new sr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!lr(t,(function(e,t){if(!cr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var dr=j.Uint8Array,hr=Te,fr=ur,pr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},gr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},mr=M?M.prototype:void 0,yr=mr?mr.valueOf:void 0;var br=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new dr(e),new dr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return hr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=pr;case"[object Set]":var l=1&r;if(s||(s=gr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=fr(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(yr)return yr.call(e)==yr.call(t)}return!1};var vr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},wr=F;var $r=function(e,t,n){var r=t(e);return wr(e)?r:vr(r,n(e))};var xr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Sr=function(){return[]},_r=Object.prototype.propertyIsEnumerable,Or=Object.getOwnPropertySymbols,Fr=Or?function(e){return null==e?[]:(e=Object(e),xr(Or(e),(function(t){return _r.call(e,t)})))}:Sr;var kr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Dr=R,Br=V;var jr=function(e){return Br(e)&&"[object Arguments]"==Dr(e)},Mr=V,Ar=Object.prototype,Cr=Ar.hasOwnProperty,Er=Ar.propertyIsEnumerable,zr=jr(function(){return arguments}())?jr:function(e){return Mr(e)&&Cr.call(e,"callee")&&!Er.call(e,"callee")},Ir={exports:{}};var Pr=function(){return!1};!function(e,t){var n=j,r=Pr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Ir,Ir.exports);var Nr=/^(?:0|[1-9]\d*)$/;var Tr=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Nr.test(e))&&e>-1&&e%1==0&&e<t};var Hr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Lr=R,Rr=Hr,Vr=V,Wr={};Wr["[object Float32Array]"]=Wr["[object Float64Array]"]=Wr["[object Int8Array]"]=Wr["[object Int16Array]"]=Wr["[object Int32Array]"]=Wr["[object Uint8Array]"]=Wr["[object Uint8ClampedArray]"]=Wr["[object Uint16Array]"]=Wr["[object Uint32Array]"]=!0,Wr["[object Arguments]"]=Wr["[object Array]"]=Wr["[object ArrayBuffer]"]=Wr["[object Boolean]"]=Wr["[object DataView]"]=Wr["[object Date]"]=Wr["[object Error]"]=Wr["[object Function]"]=Wr["[object Map]"]=Wr["[object Number]"]=Wr["[object Object]"]=Wr["[object RegExp]"]=Wr["[object Set]"]=Wr["[object String]"]=Wr["[object WeakMap]"]=!1;var Yr=function(e){return Vr(e)&&Rr(e.length)&&!!Wr[Lr(e)]};var qr=function(e){return function(t){return e(t)}},Ur={exports:{}};!function(e,t){var n=k,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Ur,Ur.exports);var Qr=Yr,Zr=qr,Gr=Ur.exports,Xr=Gr&&Gr.isTypedArray,Jr=Xr?Zr(Xr):Qr,Kr=kr,ei=zr,ti=F,ni=Ir.exports,ri=Tr,ii=Jr,oi=Object.prototype.hasOwnProperty;var ai=function(e,t){var n=ti(e),r=!n&&ei(e),i=!n&&!r&&ni(e),o=!n&&!r&&!i&&ii(e),a=n||r||i||o,s=a?Kr(e.length,String):[],l=s.length;for(var c in e)!t&&!oi.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ri(c,l))||s.push(c);return s},si=Object.prototype;var li=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||si)};var ci=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),ui=li,di=ci,hi=Object.prototype.hasOwnProperty;var fi=ne,pi=Hr;var gi=function(e){return null!=e&&pi(e.length)&&!fi(e)},mi=ai,yi=function(e){if(!ui(e))return di(e);var t=[];for(var n in Object(e))hi.call(e,n)&&"constructor"!=n&&t.push(n);return t},bi=gi;var vi=function(e){return bi(e)?mi(e):yi(e)},wi=$r,$i=Fr,xi=vi;var Si=function(e){return wi(e,xi,$i)},_i=Object.prototype.hasOwnProperty;var Oi=function(e,t,n,r,i,o){var a=1&n,s=Si(e),l=s.length;if(l!=Si(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:_i.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return o.delete(e),o.delete(t),f},Fi=we(j,"DataView"),ki=et,Di=we(j,"Promise"),Bi=we(j,"Set"),ji=we(j,"WeakMap"),Mi=R,Ai=se,Ci="[object Map]",Ei="[object Promise]",zi="[object Set]",Ii="[object WeakMap]",Pi="[object DataView]",Ni=Ai(Fi),Ti=Ai(ki),Hi=Ai(Di),Li=Ai(Bi),Ri=Ai(ji),Vi=Mi;(Fi&&Vi(new Fi(new ArrayBuffer(1)))!=Pi||ki&&Vi(new ki)!=Ci||Di&&Vi(Di.resolve())!=Ei||Bi&&Vi(new Bi)!=zi||ji&&Vi(new ji)!=Ii)&&(Vi=function(e){var t=Mi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ai(n):"";if(r)switch(r){case Ni:return Pi;case Ti:return Ci;case Hi:return Ei;case Li:return zi;case Ri:return Ii}return t});var Wi=nr,Yi=ur,qi=br,Ui=Oi,Qi=Vi,Zi=F,Gi=Ir.exports,Xi=Jr,Ji="[object Arguments]",Ki="[object Array]",eo="[object Object]",to=Object.prototype.hasOwnProperty;var no=function(e,t,n,r,i,o){var a=Zi(e),s=Zi(t),l=a?Ki:Qi(e),c=s?Ki:Qi(t),u=(l=l==Ji?eo:l)==eo,d=(c=c==Ji?eo:c)==eo,h=l==c;if(h&&Gi(e)){if(!Gi(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new Wi),a||Xi(e)?Yi(e,t,n,r,i,o):qi(e,t,l,n,r,i,o);if(!(1&n)){var f=u&&to.call(e,"__wrapped__"),p=d&&to.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new Wi),i(g,m,n,r,o)}}return!!h&&(o||(o=new Wi),Ui(e,t,n,r,i,o))},ro=V;var io=function e(t,n,r,i,o){return t===n||(null==t||null==n||!ro(t)&&!ro(n)?t!=t&&n!=n:no(t,n,r,i,e,o))},oo=nr,ao=io;var so=J;var lo=function(e){return e==e&&!so(e)},co=lo,uo=vi;var ho=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},fo=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new oo;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?ao(u,c,3,r,d):h))return!1}}return!0},po=function(e){for(var t=uo(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,co(i)]}return t},go=ho;var mo=Et,yo=zr,bo=F,vo=Tr,wo=Hr,$o=It;var xo=function(e,t){return null!=e&&t in Object(e)},So=function(e,t,n){for(var r=-1,i=(t=mo(t,e)).length,o=!1;++r<i;){var a=$o(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&wo(i)&&vo(a,i)&&(bo(e)||yo(e))};var _o=io,Oo=Lt,Fo=function(e,t){return null!=e&&So(e,t,xo)},ko=X,Do=lo,Bo=ho,jo=It;var Mo=Tt;var Ao=function(e){return function(t){return null==t?void 0:t[e]}},Co=function(e){return function(t){return Mo(t,e)}},Eo=X,zo=It;var Io=function(e){var t=po(e);return 1==t.length&&t[0][2]?go(t[0][0],t[0][1]):function(n){return n===e||fo(n,e,t)}},Po=function(e,t){return ko(e)&&Do(t)?Bo(jo(e),t):function(n){var r=Oo(n,e);return void 0===r&&r===t?Fo(n,e):_o(t,r,3)}},No=function(e){return e},To=F,Ho=function(e){return Eo(e)?Ao(zo(e)):Co(e)};var Lo=function(e){return"function"==typeof e?e:null==e?No:"object"==typeof e?To(e)?Po(e[0],e[1]):Io(e):Ho(e)},Ro=Lo,Vo=gi,Wo=vi;var Yo=function(e){return function(t,n,r){var i=Object(t);if(!Vo(t)){var o=Ro(n);t=Wo(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var qo=/\s/;var Uo=function(e){for(var t=e.length;t--&&qo.test(e.charAt(t)););return t},Qo=/^\s+/;var Zo=function(e){return e?e.slice(0,Uo(e)+1).replace(Qo,""):e},Go=J,Xo=q,Jo=/^[-+]0x[0-9a-f]+$/i,Ko=/^0b[01]+$/i,ea=/^0o[0-7]+$/i,ta=parseInt;var na=function(e){if("number"==typeof e)return e;if(Xo(e))return NaN;if(Go(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Go(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zo(e);var n=Ko.test(e);return n||ea.test(e)?ta(e.slice(2),n?2:8):Jo.test(e)?NaN:+e},ra=1/0;var ia=function(e){return e?(e=na(e))===ra||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var oa=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},aa=Lo,sa=function(e){var t=ia(e),n=t%1;return t==t?n?t-n:t:0},la=Math.max;var ca=Yo((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:sa(n);return i<0&&(i=la(r+i,0)),oa(e,aa(t),i)})),ua=io;var da=function(e,t){return ua(e,t)};let ha=Da();const fa=e=>_a(e,ha);let pa=Da();fa.write=e=>_a(e,pa);let ga=Da();fa.onStart=e=>_a(e,ga);let ma=Da();fa.onFrame=e=>_a(e,ma);let ya=Da();fa.onFinish=e=>_a(e,ya);let ba=[];fa.setTimeout=(e,t)=>{let n=fa.now()+t,r=()=>{let e=ba.findIndex((e=>e.cancel==r));~e&&ba.splice(e,1),xa-=~e?1:0},i={time:n,handler:e,cancel:r};return ba.splice(va(n),0,i),xa+=1,Oa(),i};let va=e=>~(~ba.findIndex((t=>t.time>e))||~ba.length);fa.cancel=e=>{ga.delete(e),ma.delete(e),ya.delete(e),ha.delete(e),pa.delete(e)},fa.sync=e=>{Sa=!0,fa.batchedUpdates(e),Sa=!1},fa.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,fa.onStart(n)}return r.handler=e,r.cancel=()=>{ga.delete(n),t=null},r};let wa="undefined"!=typeof window?window.requestAnimationFrame:()=>{};fa.use=e=>wa=e,fa.now="undefined"!=typeof performance?()=>performance.now():Date.now,fa.batchedUpdates=e=>e(),fa.catch=console.error,fa.frameLoop="always",fa.advance=()=>{"demand"!==fa.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ka()};let $a=-1,xa=0,Sa=!1;function _a(e,t){Sa?(t.delete(e),e(0)):(t.add(e),Oa())}function Oa(){$a<0&&($a=0,"demand"!==fa.frameLoop&&wa(Fa))}function Fa(){~$a&&(wa(Fa),fa.batchedUpdates(ka))}function ka(){let e=$a;$a=fa.now();let t=va($a);t&&(Ba(ba.splice(0,t),(e=>e.handler())),xa-=t),xa?(ga.flush(),ha.flush(e?Math.min(64,$a-e):16.667),ma.flush(),pa.flush(),ya.flush()):$a=-1}function Da(){let e=new Set,t=e;return{add(n){xa+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(xa-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,xa-=t.size,Ba(t,(t=>t(n)&&e.add(t))),xa+=e.size,t=e)}}}function Ba(e,t){e.forEach((e=>{try{t(e)}catch(e){fa.catch(e)}}))}function ja(){}const Ma={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Aa(e,t){if(Ma.arr(e)){if(!Ma.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Ca=(e,t)=>e.forEach(t);function Ea(e,t,n){if(Ma.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const za=e=>Ma.und(e)?[]:Ma.arr(e)?e:[e];function Ia(e,t){if(e.size){const n=Array.from(e);e.clear(),Ca(n,t)}}const Pa=(e,...t)=>Ia(e,(e=>e(...t))),Na=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ta,Ha,La=null,Ra=!1,Va=ja;var Wa=Object.freeze({__proto__:null,get createStringInterpolator(){return Ta},get to(){return Ha},get colors(){return La},get skipAnimation(){return Ra},get willAdvance(){return Va},assign:e=>{e.to&&(Ha=e.to),e.now&&(fa.now=e.now),void 0!==e.colors&&(La=e.colors),null!=e.skipAnimation&&(Ra=e.skipAnimation),e.createStringInterpolator&&(Ta=e.createStringInterpolator),e.requestAnimationFrame&&fa.use(e.requestAnimationFrame),e.batchedUpdates&&(fa.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Va=e.willAdvance),e.frameLoop&&(fa.frameLoop=e.frameLoop)}});const Ya=new Set;let qa=[],Ua=[],Qa=0;const Za={get idle(){return!Ya.size&&!qa.length},start(e){Qa>e.priority?(Ya.add(e),fa.onStart(Ga)):(Xa(e),fa(Ka))},advance:Ka,sort(e){if(Qa)fa.onFrame((()=>Za.sort(e)));else{const t=qa.indexOf(e);~t&&(qa.splice(t,1),Ja(e))}},clear(){qa=[],Ya.clear()}};function Ga(){Ya.forEach(Xa),Ya.clear(),fa(Ka)}function Xa(e){qa.includes(e)||Ja(e)}function Ja(e){qa.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(qa,(t=>t.priority>e.priority)),0,e)}function Ka(e){const t=Ua;for(let n=0;n<qa.length;n++){const r=qa[n];Qa=r.priority,r.idle||(Va(r),r.advance(e),r.idle||t.push(r))}return Qa=0,Ua=qa,Ua.length=0,qa=t,qa.length>0}const es="[-+]?\\d*\\.?\\d+",ts=es+"%";function ns(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const rs=new RegExp("rgb"+ns(es,es,es)),is=new RegExp("rgba"+ns(es,es,es,es)),os=new RegExp("hsl"+ns(es,ts,ts)),as=new RegExp("hsla"+ns(es,ts,ts,es)),ss=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ls=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cs=/^#([0-9a-fA-F]{6})$/,us=/^#([0-9a-fA-F]{8})$/;function ds(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function hs(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ds(i,r,e+1/3),a=ds(i,r,e),s=ds(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function fs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ps(e){return(parseFloat(e)%360+360)%360/360}function gs(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ms(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ys(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=cs.exec(e))?parseInt(t[1]+"ff",16)>>>0:La&&void 0!==La[e]?La[e]:(t=rs.exec(e))?(fs(t[1])<<24|fs(t[2])<<16|fs(t[3])<<8|255)>>>0:(t=is.exec(e))?(fs(t[1])<<24|fs(t[2])<<16|fs(t[3])<<8|gs(t[4]))>>>0:(t=ss.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=us.exec(e))?parseInt(t[1],16)>>>0:(t=ls.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=os.exec(e))?(255|hs(ps(t[1]),ms(t[2]),ms(t[3])))>>>0:(t=as.exec(e))?(hs(ps(t[1]),ms(t[2]),ms(t[3]))|gs(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const bs=(e,t,n)=>{if(Ma.fun(e))return e;if(Ma.arr(e))return bs({range:e,output:t,extrapolate:n});if(Ma.str(e.output[0]))return Ta(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const vs=1.70158,ws=1.525*vs,$s=vs+1,xs=2*Math.PI/3,Ss=2*Math.PI/4.5,_s=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Os={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>$s*e*e*e-vs*e*e,easeOutBack:e=>1+$s*Math.pow(e-1,3)+vs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ws)/2:(Math.pow(2*e-2,2)*((ws+1)*(2*e-2)+ws)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*xs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*xs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ss)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ss)/2+1,easeInBounce:e=>1-_s(1-e),easeOutBounce:_s,easeInOutBounce:e=>e<.5?(1-_s(1-2*e))/2:(1+_s(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}const ks=Symbol.for("FluidValue.get"),Ds=Symbol.for("FluidValue.observers"),Bs=e=>Boolean(e&&e[ks]),js=e=>e&&e[ks]?e[ks]():e,Ms=e=>e[Ds]||null;function As(e,t){let n=e[Ds];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Cs{constructor(e){if(this[ks]=void 0,this[Ds]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Es(this,e)}}const Es=(e,t)=>Ps(e,ks,t);function zs(e,t){if(e[ks]){let n=e[Ds];n||Ps(e,Ds,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Is(e,t){let n=e[Ds];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ds]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ps=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ns=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ts=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Hs=new RegExp(`(${Ns.source})(%|[a-z]+)`,"i"),Ls=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Rs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vs=e=>{const[t,n]=Ws(e);if(!t||Na())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Rs.test(n)?Vs(n):n||e},Ws=e=>{const t=Rs.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ys;const qs=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Us=e=>{Ys||(Ys=La?new RegExp(`(${Object.keys(La).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>js(e).replace(Rs,Vs).replace(Ts,ys).replace(Ys,ys))),n=t.map((e=>e.match(Ns).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>bs(Fs({},e,{output:t}))));return e=>{var n;const i=!Hs.test(t[0])&&(null==(n=t.find((e=>Hs.test(e))))?void 0:n.replace(Ns,""));let o=0;return t[0].replace(Ns,(()=>`${r[o++](e)}${i||""}`)).replace(Ls,qs)}},Qs="react-spring: ",Zs=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Qs}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Gs=Zs(console.warn);const Xs=Zs(console.warn);function Js(e){return Ma.str(e)&&("#"==e[0]||/\d/.test(e)||!Na()&&Rs.test(e)||e in(La||{}))}const Ks=Na()?s:l,el=()=>{const e=o(!1);return Ks((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function tl(){const e=c()[1],t=el();return()=>{t.current&&e(Math.random())}}const nl=e=>s(e,rl),rl=[];function il(e){const t=o();return s((()=>{t.current=e})),t.current}const ol=Symbol.for("Animated:node"),al=e=>e&&e[ol],sl=(e,t)=>{return n=e,r=ol,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ll=e=>e&&e[ol]&&e[ol].getPayload();class cl{constructor(){this.payload=void 0,sl(this,this)}getPayload(){return this.payload||[]}}class ul extends cl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ma.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ul(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ma.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ma.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class dl extends ul{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=bs({output:[e,e]})}static create(e){return new dl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ma.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=bs({output:[this.getValue(),e]})),this._value=0,super.reset()}}const hl={dependencies:null};class fl extends cl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ea(this.source,((n,r)=>{var i;(i=n)&&i[ol]===i?t[r]=n.getValue(e):Bs(n)?t[r]=js(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ca(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ea(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hl.dependencies&&Bs(e)&&hl.dependencies.add(e);const t=ll(e);t&&Ca(t,(e=>this.add(e)))}}class pl extends fl{constructor(e){super(e)}static create(e){return new pl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(gl)),!0)}}function gl(e){return(Js(e)?dl:ul).create(e)}function ml(e){const t=al(e);return t?t.constructor:Ma.arr(e)?pl:Js(e)?dl:ul}function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}const bl=(e,t)=>{const n=!Ma.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((i,a)=>{const l=o(null),c=n&&d((e=>{l.current=function(e,t){e&&(Ma.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,h]=function(e,t){const n=new Set;hl.dependencies=n,e.style&&(e=yl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new fl(e),hl.dependencies=null,[e,n]}(i,t),f=tl(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new vl(p,h),m=o();Ks((()=>(m.current=g,Ca(h,(e=>zs(e,g))),()=>{m.current&&(Ca(m.current.deps,(e=>Is(e,m.current))),fa.cancel(m.current.update))}))),s(p,[]),nl((()=>()=>{const e=m.current;Ca(e.deps,(t=>Is(t,e)))}));const y=t.getComponentProps(u.getValue());return r.createElement(e,yl({},y,{ref:c}))}))};class vl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&fa.write(this.update)}}const wl=Symbol.for("AnimatedComponent"),$l=e=>Ma.str(e)?e:e&&Ma.str(e.displayName)?e.displayName:Ma.fun(e)&&e.name||null;function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}function Sl(e,...t){return Ma.fun(e)?e(...t):e}const _l=(e,t)=>!0===e||!!(t&&e&&(Ma.fun(e)?e(t):za(e).includes(t))),Ol=(e,t)=>Ma.obj(e)?t&&e[t]:e,Fl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,kl=e=>e,Dl=(e,t=kl)=>{let n=Bl;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Ma.und(n)||(r[i]=n)}return r},Bl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],jl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ml(e){const t=function(e){const t={};let n=0;if(Ea(e,((e,r)=>{jl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ea(e,((e,r)=>r in t||(n[r]=e))),n}return xl({},e)}function Al(e){return e=js(e),Ma.arr(e)?e.map(Al):Js(e)?Wa.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Cl(e){return Ma.fun(e)||Ma.arr(e)&&Ma.obj(e[0])}const El=xl({},{tension:170,friction:26},{mass:1,damping:1,easing:Os.linear,clamp:!1});class zl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,El)}}function Il(e,t){if(Ma.und(t.decay)){const n=!Ma.und(t.tension)||!Ma.und(t.friction);!n&&Ma.und(t.frequency)&&Ma.und(t.damping)&&Ma.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Pl=[];class Nl{constructor(){this.changed=!1,this.values=Pl,this.toValues=null,this.fromValues=Pl,this.to=void 0,this.from=void 0,this.config=new zl,this.immediate=!1}}function Tl(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=_l(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Ma.und(n.pause)||(i.paused=_l(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||_l(e,t)),c=Sl(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-fa.now()}function f(){c>0&&!Wa.skipAnimation?(i.delayed=!0,u=fa.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(xl({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Hl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Vl(e.get()):t.every((e=>e.noop))?Ll(e.get()):Rl(e.get(),t.every((e=>e.finished))),Ll=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Rl=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Vl=e=>({value:e,cancelled:!0,finished:!1});function Wl(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Dl(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Vl(r)||i!==n.asyncId&&Rl(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new ql,a=new Ul;return(async()=>{if(Wa.skipAnimation)throw Yl(n),a.result=Rl(r,!1),d(a),a;f(o);const s=Ma.obj(e)?xl({},e):xl({},t,{to:e});s.parentId=i,Ea(c,((e,t)=>{Ma.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Wa.skipAnimation)return Yl(n),Rl(r,!1);try{let t;t=Ma.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Rl(r.get(),!0,!1)}catch(e){if(e instanceof ql)g=e.result;else{if(!(e instanceof Ul))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Ma.fun(a)&&fa.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Yl(e,t){Ia(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ql extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Ul extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ql=e=>e instanceof Gl;let Zl=1;class Gl extends Cs{constructor(...e){super(...e),this.id=Zl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=al(this);return e&&e.getValue()}to(...e){return Wa.to(this,e)}interpolate(...e){return Gs(`${Qs}The "interpolate" function is deprecated in v9 (use "to" instead)`),Wa.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){As(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Za.sort(this),As(this,{type:"priority",parent:this,priority:e})}}const Xl=Symbol.for("SpringPhase"),Jl=e=>(1&e[Xl])>0,Kl=e=>(2&e[Xl])>0,ec=e=>(4&e[Xl])>0,tc=(e,t)=>t?e[Xl]|=3:e[Xl]&=-3,nc=(e,t)=>t?e[Xl]|=4:e[Xl]&=-5;class rc extends Gl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Nl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ma.und(e)||!Ma.und(t)){const n=Ma.obj(e)?xl({},e):xl({},t,{from:e});Ma.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Kl(this)||this._state.asyncTo)||ec(this)}get goal(){return js(this.animation.to)}get velocity(){const e=al(this);return e instanceof ul?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Jl(this)}get isAnimating(){return Kl(this)}get isPaused(){return ec(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ll(r.to);!a&&Bs(r.to)&&(o=za(js(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==dl?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ma.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Ma.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Ma.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=al(this),l=s.getValue();if(t){const e=js(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return fa.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Kl(this)){const{to:e,config:t}=this.animation;fa.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ma.und(e)?(n=this.queue||[],this.queue=[]):n=[Ma.obj(e)?e:xl({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Hl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Yl(this._state,e&&this._lastCallId),fa.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ma.obj(n)?n[t]:n,(null==n||Cl(n))&&(n=void 0),r=Ma.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Jl(this)||(e.reverse&&([n,r]=[r,n]),r=js(r),Ma.und(r)?al(this)||this._set(n):this._set(r)),i}_update(e,t){let n=xl({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Dl(n,((e,t)=>/^on/.test(t)?Ol(e,r):e))),uc(this,n,"onProps"),dc(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Tl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{ec(this)||(nc(this,!0),Pa(a.pauseQueue),dc(this,"onPause",Rl(this,ic(this,this.animation.to)),this))},resume:()=>{ec(this)&&(nc(this,!1),Kl(this)&&this._resume(),Pa(a.resumeQueue),dc(this,"onResume",Rl(this,ic(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=oc(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Vl(this));const r=!Ma.und(e.to),i=!Ma.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Vl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Ma.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Aa(d,c);h&&(s.from=d),d=js(d);const f=!Aa(u,l);f&&this._focus(u);const p=Cl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Il(n=xl({},n),t),t=xl({},n,t)),Il(e,t),Object.assign(e,t);for(const t in El)null==e[t]&&(e[t]=El[t]);let{mass:r,frequency:i,damping:o}=e;Ma.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Sl(t.config,o),t.config!==a.config?Sl(a.config,o):void 0);let b=al(this);if(!b||Ma.und(u))return n(Rl(this,!0));const v=Ma.und(t.reset)?i&&!t.default:!Ma.und(d)&&_l(t.reset,o),w=v?d:this.get(),$=Al(u),x=Ma.num($)||Ma.arr($)||Js($),S=!p&&(!x||_l(a.immediate||t.immediate,o));if(f){const e=ml(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set($)}}const _=b.constructor;let O=Bs(u),F=!1;if(!O){const e=v||!Jl(this)&&h;(f||e)&&(F=Aa(Al(w),$),O=!F),(Aa(s.immediate,S)||S)&&Aa(g.decay,m)&&Aa(g.velocity,y)||(O=!0)}if(F&&Kl(this)&&(s.changed&&!v?O=!0:O||this._stop(l)),!p&&((O||Bs(l))&&(s.values=b.getPayload(),s.toValues=Bs(u)?null:_==dl?[1]:za($)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),O)){const{onRest:e}=s;Ca(cc,(e=>uc(this,t,e)));const r=Rl(this,ic(this,l));Pa(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&fa.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Sl(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),p?n(Wl(t.to,t,this._state,this)):O?this._start():Kl(this)&&!f?this._pendingCalls.add(n):n(Ll(w))}_focus(e){const t=this.animation;e!==t.to&&(Ms(this)&&this._detach(),t.to=e,Ms(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Bs(t)&&(zs(t,this),Ql(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Bs(e)&&Is(e,this)}_set(e,t=!0){const n=js(e);if(!Ma.und(n)){const e=al(this);if(!e||!Aa(n,e.getValue())){const r=ml(n);e&&e.constructor==r?e.setValue(n):sl(this,r.create(n)),e&&fa.batchedUpdates((()=>{this._onChange(n,t)}))}}return al(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,dc(this,"onStart",Rl(this,ic(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Sl(this.animation.onChange,e,this)),Sl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;al(this).reset(js(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Kl(this)||(tc(this,!0),ec(this)||this._resume())}_resume(){Wa.skipAnimation?this.finish():Za.start(this)}_stop(e,t){if(Kl(this)){tc(this,!1);const n=this.animation;Ca(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),As(this,{type:"idle",parent:this});const r=t?Vl(this.get()):Rl(this.get(),ic(this,null!=e?e:n.to));Pa(this._pendingCalls,r),n.changed&&(n.changed=!1,dc(this,"onRest",r,this))}}}function ic(e,t){const n=Al(t);return Aa(Al(e.get()),n)}function oc(e,t=e.loop,n=e.to){let r=Sl(t);if(r){const i=!0!==r&&Ml(r),o=(i||e).reverse,a=!i||i.reset;return ac(xl({},e,{loop:t,default:!1,pause:void 0,to:!o||Cl(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function ac(e){const{to:t,from:n}=e=Ml(e),r=new Set;return Ma.obj(t)&&lc(t,r),Ma.obj(n)&&lc(n,r),e.keys=r.size?Array.from(r):null,e}function sc(e){const t=ac(e);return Ma.und(t.default)&&(t.default=Dl(t)),t}function lc(e,t){Ea(e,((e,n)=>null!=e&&t.add(n)))}const cc=["onStart","onRest","onChange","onPause","onResume"];function uc(e,t,n){e.animation[n]=t[n]!==Fl(t,n)?Ol(t[n],e.key):void 0}function dc(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const hc=["onStart","onChange","onRest"];let fc=1;class pc{constructor(e,t){this.id=fc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(xl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ma.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ac(e)),this}start(e){let{queue:t}=this;return e?t=za(e).map(ac):this.queue=[],this._flush?this._flush(this,t):($c(this,t),gc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ca(za(t),(t=>n[t].stop(!!e)))}else Yl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ma.und(e))this.start({pause:!0});else{const t=this.springs;Ca(za(e),(e=>t[e].pause()))}return this}resume(e){if(Ma.und(e))this.start({pause:!1});else{const t=this.springs;Ca(za(e),(e=>t[e].resume()))}return this}each(e){Ea(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ia(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ia(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ia(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}fa.onFrame(this._onFrame)}}function gc(e,t){return Promise.all(t.map((t=>mc(e,t)))).then((t=>Hl(e,t)))}async function mc(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ma.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Ma.arr(i)||Ma.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ca(hc,(n=>{const r=t[n];if(Ma.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Pa(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Fl(t,"cancel");(u||f&&d.asyncId)&&h.push(Tl(++e._lastAsyncId,{props:t,state:d,actions:{pause:ja,resume:ja,start(t,n){f?(Yl(d,e._lastAsyncId),n(Vl(e))):(t.onRest=s,n(Wl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Hl(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=oc(t,a,i);if(n)return $c(e,[n]),mc(e,n,!0)}return l&&fa.batchedUpdates((()=>l(p,e,e.item))),p}function yc(e,t){const n=xl({},e.springs);return t&&Ca(za(t),(e=>{Ma.und(e.keys)&&(e=ac(e)),Ma.obj(e.to)||(e=xl({},e,{to:void 0})),wc(n,e,(e=>vc(e)))})),bc(e,n),n}function bc(e,t){Ea(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,zs(t,e))}))}function vc(e,t){const n=new rc;return n.key=e,t&&zs(n,t),n}function wc(e,t,n){t.keys&&Ca(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function $c(e,t){Ca(t,(t=>{wc(e.springs,t,(t=>vc(t,e)))}))}const xc=["children"],Sc=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,xc);const i=h(_c),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=c((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return s((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:u}=_c;return r.createElement(u,{value:n},t)},_c=(Oc=Sc,Fc={},Object.assign(Oc,r.createContext(Fc)),Oc.Provider._context=Oc,Oc.Consumer._context=Oc,Oc);var Oc,Fc;Sc.Provider=_c.Provider,Sc.Consumer=_c.Consumer;const kc=()=>{const e=[],t=function(t){Xs(`${Qs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ca(e,((e,i)=>{if(Ma.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ca(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ca(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ca(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Ca(e,((e,r)=>{if(Ma.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ca(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ca(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ma.fun(e)?e(n,t):e};return t._getProps=n,t};function Dc(e,t){const n=Ma.fun(e),[[r],i]=function(e,t,n){const r=Ma.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?kc():void 0),[]),a=o(0),s=tl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=yc(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?gc(e,t):new Promise((r=>{bc(e,n),l.queue.push((()=>{r(gc(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=il(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new pc(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=sc(n))}}f((()=>{Ca(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=c.current.map(((e,t)=>yc(e,u[t]))),m=h(Sc),y=il(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ks((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ca(e,(e=>e()))),Ca(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),nl((()=>()=>{Ca(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>xl({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Bc;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Bc||(Bc={}));class jc extends Gl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=bs(...t);const n=this._get(),r=ml(n);sl(this,r.create(n))}advance(e){const t=this._get();Aa(t,this.get())||(al(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ac(this._active)&&Cc(this)}_get(){const e=Ma.arr(this.source)?this.source.map(js):za(js(this.source));return this.calc(...e)}_start(){this.idle&&!Ac(this._active)&&(this.idle=!1,Ca(ll(this),(e=>{e.done=!1})),Wa.skipAnimation?(fa.batchedUpdates((()=>this.advance())),Cc(this)):Za.start(this))}_attach(){let e=1;Ca(za(this.source),(t=>{Bs(t)&&zs(t,this),Ql(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ca(za(this.source),(e=>{Bs(e)&&Is(e,this)})),this._active.clear(),Cc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=za(this.source).reduce(((e,t)=>Math.max(e,(Ql(t)?t.priority:0)+1)),0))}}function Mc(e){return!1!==e.idle}function Ac(e){return!e.size||Array.from(e).every(Mc)}function Cc(e){e.idle||(e.idle=!0,Ca(ll(e),(e=>{e.done=!0})),As(e,{type:"idle",parent:e}))}function Ec(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Wa.assign({createStringInterpolator:Us,to:(e,t)=>new jc(e,t)});const zc=["style","children","scrollTop","scrollLeft","viewBox"],Ic=/^--/;function Pc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ic.test(e)||Tc.hasOwnProperty(e)&&Tc[e]?(""+t).trim():t+"px"}const Nc={};let Tc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Hc=["Webkit","Ms","Moz","O"];Tc=Object.keys(Tc).reduce(((e,t)=>(Hc.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Tc);const Lc=["x","y","z"],Rc=/^(matrix|translate|scale|rotate|skew)/,Vc=/^(translate)/,Wc=/^(rotate|skew)/,Yc=(e,t)=>Ma.num(e)&&0!==e?e+t:e,qc=(e,t)=>Ma.arr(e)?e.every((e=>qc(e,t))):Ma.num(e)?e===t:parseFloat(e)===t;class Uc extends fl{constructor(e){let{x:t,y:n,z:r}=e,i=Ec(e,Lc);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Yc(e,"px"))).join(",")})`,qc(e,0)]))),Ea(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Rc.test(t)){if(delete i[t],Ma.und(e))return;const n=Vc.test(t)?"px":Wc.test(t)?"deg":"";o.push(za(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Yc(i,n)})`,qc(i,0)]:e=>[`${t}(${e.map((e=>Yc(e,n))).join(",")})`,qc(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Qc(o,a)),super(i)}}class Qc extends Cs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ca(this.inputs,((n,r)=>{const i=js(n[0]),[o,a]=this.transforms[r](Ma.arr(i)?i:n.map(js));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ca(this.inputs,(e=>Ca(e,(e=>Bs(e)&&zs(e,this)))))}observerRemoved(e){0==e&&Ca(this.inputs,(e=>Ca(e,(e=>Bs(e)&&Is(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),As(this,e)}}const Zc=["scrollTop","scrollLeft"];Wa.assign({batchedUpdates:v,createStringInterpolator:Us,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Gc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new fl(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=$l(e)||"Anonymous";return(e=Ma.str(e)?o[e]||(o[e]=bl(e,i)):e[wl]||(e[wl]=bl(e,i))).displayName=`Animated(${t})`,e};return Ea(e,((t,n)=>{Ma.arr(e)&&(n=$l(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Ec(r,zc),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Nc[t]||(Nc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Pc(t,i[t]);Ic.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Uc(e),getComponentProps:e=>Ec(e,Zc)}),Xc=Gc.animated,Jc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Kc=e=>Object.keys(Jc).reduce(((t,n)=>{const r=Jc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),eu=Kc("max-width"),tu=(Kc("min-width"),p.div`
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
`,ru=p.div`
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
`,iu=p(ru)`
    animation-delay: -0.45s;
`,ou=p(ru)`
    animation-delay: -0.3s;
`,au=p(ru)`
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

                    ${eu.mobileL} {
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
                        ${an("H5","semibold")}
                    }

                    ${eu.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${an("H4","semibold")}
                    }

                    ${eu.mobileS} {
                        height: auto;
                    }
                `}
`;const su=p((({color:n,className:r,size:i=18})=>e(tu,Object.assign({className:r,$size:i,$color:n},{children:[t(ru,{id:"inner1",$size:i-2,$borderWidth:2}),t(iu,{id:"inner2",$size:i-2,$borderWidth:2}),t(ou,{id:"inner3",$size:i-2,$borderWidth:2}),t(au,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ut.Primary(e);break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,lu=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Ut.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=Ut.Primary(e),n=Ut.Primary(e)),e.disabled&&(t=Ut.Neutral[6](e),n=Ut.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,cu=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,uu=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Ut.Neutral[4]:Ut.Neutral[8]};
`,du=p(Xc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,hu=p.ul`
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

    ${eu.mobileL} {
        max-height: 15rem;
    }
`,fu=p.li`
    :hover,
    :focus,
    :active {
        background: ${Ut.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${Ut.Accent.Light[5]};
            `}}
`,pu=p.button`
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
`,gu=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,mu=p.div`
    ${an("Body","regular")}
    color: ${Ut.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gu}
`,yu=p.div`
    color: ${Ut.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gu}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${an("BodySmall","semibold")}
                `:g`
                    ${an("Body","regular")}
                `}
`,bu=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${mu} {
                        display: inline;
                    }

                    ${yu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,vu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,wu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,$u=p((n=>{var{className:r,checked:i,disabled:o,onChange:a,onKeyPress:l,displaySize:u="default"}=n,d=_(n,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,f]=c(i);s((()=>{f(i)}),[i]);const p=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return e(lu,Object.assign({selected:h,disabled:o,className:r,"data-testid":"checkbox",$displaySize:u,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:p},{children:[t(cu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:o,checked:h},d)),h&&t(uu,{id:"checkmark","data-testid":"checkmark",disabled:o,$displaySize:u})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,xu=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Su=p.button`
    ${an("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Ut.Primary(e)};\n\t\t`}
`,_u=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ou=p(ln.Body)``,Fu=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ut.Validation.Red.Icon};
`,ku=p.button`
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
`,Du=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(ku,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Bu=p.li`
    background: ${Ut.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,ju=p(pn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Mu=p(x)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Ut.Neutral[3]};
`,Au=p(Du)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Ut.Neutral[3]};
    cursor: pointer;
`,Cu=p(b)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Ut.Neutral[3]};
`,Eu=u(((n,r)=>{const{onClear:i}=n,o=_(n,["onClear"]);return e(Bu,{children:[t(Mu,{}),t(ju,Object.assign({ref:r},o)),o.value&&t(Au,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Cu,{})}))]},"search")})),zu=r=>{var{listItems:i,listExtractor:a,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:O="end",itemMaxLines:F=2,labelDisplayType:k="inline",renderListItem:D,onBlur:B,hideNoResultsDisplay:j,renderCustomCallToAction:M}=r,A=_(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,E]=c(0),[z,I]=c(""),[P,N]=c(i),[T,H]=c(0),L=Dc({height:T}),R=o(),V=o(),W=o([]),Y=o(),q=o(),U=o(C),Q=o(P),Z=e=>{U.current=e,E(e)},G=e=>{Q.current=e,N(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(z)}),[z]),s((()=>{if(I(""),h){if(setTimeout((()=>{H(te())})),b)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[C]&&W.current[C].focus()}else H(0)}),[h]),s((()=>{if(h){const e=te();H(e)}}),[P,S]),s((()=>{G(i),I(""),Z(0)}),[i]);const X=e=>a?a(e):e.toString(),J=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return In.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},K=e=>!!ca(w,(t=>da(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;I(t),g&&g()},oe=()=>{I(""),Y.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{B&&B()},le=r=>e(n,{children:[t(vu,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r})),t(wu,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":k;return e(bu,Object.assign({$labelDisplayType:l},{children:[t(mu,Object.assign({$truncateType:O,$maxLines:F,"aria-label":i},{children:"middle"===O&&a?le(i):i})),o&&t(yu,Object.assign({$truncateType:O,$maxLines:F,$labelDisplayType:k,"aria-label":o},{children:"middle"===O&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===S)return P.map(((n,r)=>t(fu,Object.assign({$checked:K(n)&&!v},{children:e(pu,Object.assign({$hasNextLineLabel:"next-line"===k&&P.length>0&&a&&"string"!=typeof a(P[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t($u,{checked:K(n),displaySize:"small"}),D?D(n,{selected:K(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(v&&P.length>0&&!z&&"success"===S)return t(xu,{children:t(Su,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(z||!f)&&0===P.length&&"success"===S)return e(_u,Object.assign({"data-testid":"list-no-results"},{children:[t(Fu,{"data-testid":"no-result-icon"}),t(Ou,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(_u,Object.assign({"data-testid":"list-loading"},{children:[t(su,{$buttonStyle:"secondary",size:24}),t(Ou,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(_u,Object.assign({"data-testid":"list-fail"},{children:[t(Fu,{"data-testid":"load-error-icon"}),t(Ou,{children:"Failed to load."}),t(Su,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(du,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(hu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},A,{children:[(f||m)&&"success"===S?t(Eu,{ref:Y,onChange:ie,value:z,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&M)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:M(y,P)}))})()]}))})},Iu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Pu=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Nu=g`
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
`,Tu=p.button`
    ${Nu}
    cursor: pointer;
`;p.div`
    ${Nu}
`;const Hu=m`
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
`,Lu=p.div`
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Ut.Neutral[8]};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Gt};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Hu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${Ut.Neutral[6](e)};

                ${Tu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Tu} {
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
                    box-shadow: ${Xt};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Iu};
    margin-left: 1rem;
`,p(S)`
    color: ${Ut.Neutral[3]};
    height: ${tn.Body.fontSize}rem;
    width: ${tn.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${Ut.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Ru=p(ln.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Ru)`
    color: ${Ut.Neutral[3]};
`;const Vu=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:l,readOnly:c})=>{const u=o();return((e,t,n="window",r)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&l()}}),"document"),t(Pu,{children:t(Lu,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))})},Wu=p.div`
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
`,Yu=p(Tu)`
    padding: 0;
    width: auto;
`,qu=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Uu=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Iu};
    margin: 0 0.75rem;
`,Qu=p(S)`
    color: ${Ut.Neutral[3]};
    height: ${tn.Body.fontSize}rem;
    width: ${tn.Body.fontSize}rem;
    vertical-align: bottom;
`,Zu=p.div`
    display: flex;
    flex: 1 1 auto;
`,Gu=p(ln.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Xu=p(Gu)`
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
`,Ku=i.forwardRef(((r,i)=>{var{addon:a,error:l,onChange:u,readOnly:d,className:h,onBlur:f}=r,p=_(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:y,searchFunction:b,searchPlaceholder:v,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:S,onSelectOption:O,onHideOptions:F,onShowOptions:k,"data-selector-testid":D}=a.attributes,{position:B}=a,[j,M]=c(S),[A,C]=c(!1),E=o();s((()=>{M(S)}),[S]);const z=()=>x?x(j):w?w(j):j.toString(),I=e=>{!e&&F&&F(),e&&k&&k()},P=e=>{e.preventDefault(),p.disabled||(C(!A),I(!A))},N=(e,t)=>{M(e),C(!1),I(!1),E&&E.current.focus(),O&&O(e,t)},T=e=>{u&&u(e)},H=()=>{f&&f()},L=()=>{C(!1),I(!1),E&&E.current.focus()};return e(Vu,Object.assign({className:h,show:A,error:l&&!A,disabled:p.disabled,readOnly:d,onBlur:()=>{C(!1),I(!1),H()}},{children:[e(Wu,Object.assign({$expanded:A,$readOnly:d,$position:B},{children:[d?j?t(qu,{children:t(Gu,Object.assign({"data-testid":"selector-label"},{children:z()}))}):null:t(Yu,Object.assign({ref:E,type:"button",disabled:p.disabled,"data-testid":D||"addon-selector",onClick:P},{children:e(n,{children:[e(Zu,{children:[g&&!j&&t(Xu,{children:g}),j&&t(Gu,Object.assign({"data-testid":"selector-label"},{children:z()}))]}),t(Uu,Object.assign({$expanded:A},{children:t(Qu,{})}))]})})),t(Ju,{$readOnly:d,$position:B}),t(Vn,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:T,"data-testid":p["data-testid"]||"input",onBlur:H}))]})),m&&m.length>0?t(zu,{listItems:m,selectedItems:S?[S]:[],onSelectItem:N,valueExtractor:w,listExtractor:$,visible:A,enableSearch:y,searchFunction:b,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:H,onDismiss:L}):null]}))})),ed=i.forwardRef(((n,r)=>{var{addon:i,error:o,className:a}=n,s=_(n,["addon","error","className"]);const l=()=>t(Rn,Object.assign({disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a},{children:t(Vn,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:u}=s;switch(n){case"list":{const e=i.attributes;return e.options&&e.options.length>0?t(Ku,Object.assign({ref:r,addon:i,error:o,className:a},s)):l()}case"custom":{const n=i.attributes;return n.children?e(fn,Object.assign({$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[t(Wn,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),t(Vn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?e(fn,Object.assign({$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[t(Wn,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),t(Vn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}}}}));export{ed as InputGroup};
//# sourceMappingURL=index.js.map
