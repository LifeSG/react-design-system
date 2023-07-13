import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F=Array.isArray,k="object"==typeof _&&_&&_.Object===Object&&_,O=k,D="object"==typeof self&&self&&self.Object===Object&&self,B=O||D||Function("return this")(),M=B.Symbol,A=M,E=Object.prototype,j=E.hasOwnProperty,C=E.toString,z=A?A.toStringTag:void 0;var P=function(e){var t=j.call(e,z),r=e[z];try{e[z]=void 0;var n=!0}catch(e){}var i=C.call(e);return n&&(t?e[z]=r:delete e[z]),i},I=Object.prototype.toString;var N=P,H=function(e){return I.call(e)},T=M?M.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?N(e):H(e)};var R=function(e){return null!=e&&"object"==typeof e},V=L,W=R;var Y=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==V(e)},q=F,U=Y,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var G=function(e,t){if(q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!U(e))||(Z.test(e)||!Q.test(e)||null!=t&&e in Object(t))};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},J=L,K=X;var ee,te=function(e){if(!K(e))return!1;var t=J(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=B["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},oe=Function.prototype.toString;var ae=function(e){if(null!=e){try{return oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=te,le=ie,ue=X,ce=ae,de=/^\[object .+?Constructor\]$/,he=Function.prototype,fe=Object.prototype,pe=he.toString,ge=fe.hasOwnProperty,me=RegExp("^"+pe.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ue(e)||le(e))&&(se(e)?me:de).test(ce(e))},ve=function(e,t){return null==e?void 0:e[t]};var be=function(e,t){var r=ve(e,t);return ye(r)?r:void 0},we=be(Object,"create"),$e=we;var Se=function(){this.__data__=$e?$e(null):{},this.size=0};var xe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=we,Fe=Object.prototype.hasOwnProperty;var ke=function(e){var t=this.__data__;if(_e){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Fe.call(t,e)?t[e]:void 0},Oe=we,De=Object.prototype.hasOwnProperty;var Be=we;var Me=Se,Ae=xe,Ee=ke,je=function(e){var t=this.__data__;return Oe?void 0!==t[e]:De.call(t,e)},Ce=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Be&&void 0===t?"__lodash_hash_undefined__":t,this};function ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ze.prototype.clear=Me,ze.prototype.delete=Ae,ze.prototype.get=Ee,ze.prototype.has=je,ze.prototype.set=Ce;var Pe=ze;var Ie=function(){this.__data__=[],this.size=0};var Ne=function(e,t){return e===t||e!=e&&t!=t},He=Ne;var Te=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Le=Te,Re=Array.prototype.splice;var Ve=Te;var We=Te;var Ye=Te;var qe=Ie,Ue=function(e){var t=this.__data__,r=Le(t,e);return!(r<0)&&(r==t.length-1?t.pop():Re.call(t,r,1),--this.size,!0)},Qe=function(e){var t=this.__data__,r=Ve(t,e);return r<0?void 0:t[r][1]},Ze=function(e){return We(this.__data__,e)>-1},Ge=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xe.prototype.clear=qe,Xe.prototype.delete=Ue,Xe.prototype.get=Qe,Xe.prototype.has=Ze,Xe.prototype.set=Ge;var Je=Xe,Ke=be(B,"Map"),et=Pe,tt=Je,rt=Ke;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var it=function(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map},ot=it;var at=it;var st=it;var lt=it;var ut=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},ct=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return at(this,e).get(e)},ht=function(e){return st(this,e).has(e)},ft=function(e,t){var r=lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=ut,pt.prototype.delete=ct,pt.prototype.get=dt,pt.prototype.has=ht,pt.prototype.set=ft;var gt=pt,mt=gt;function yt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(yt.Cache||mt),r}yt.Cache=mt;var vt=yt;var bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,$t=function(e){var t=vt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(bt,(function(e,r,n,i){t.push(n?i.replace(wt,"$1"):r||e)})),t}));var St=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},xt=F,_t=Y,Ft=M?M.prototype:void 0,kt=Ft?Ft.toString:void 0;var Ot=function e(t){if("string"==typeof t)return t;if(xt(t))return St(t,e)+"";if(_t(t))return kt?kt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Dt=Ot;var Bt=F,Mt=G,At=$t,Et=function(e){return null==e?"":Dt(e)};var jt=function(e,t){return Bt(e)?e:Mt(e,t)?[e]:At(Et(e))},Ct=Y;var zt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Pt=jt,It=zt;var Nt=function(e,t){for(var r=0,n=(t=Pt(t,e)).length;null!=e&&r<n;)e=e[It(t[r++])];return r&&r==n?e:void 0},Ht=Nt;var Tt=function(e,t,r){var n=null==e?void 0:Ht(e,t);return void 0===n?r:n};const Lt=(e,t,r)=>t?Tt(r,t)||Tt(e,t):r||e,Rt=(e,t)=>{const r=t||e.defaultValue;return Tt(e.collections,r)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const r=t.theme,n=Rt(Wt,r[Vt.colorScheme]);return r.options&&r.options.color?Lt(n,e,r.options.color):Lt(n,e)},qt={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},Ut={collections:{base:{InputBoxShadow:g`
        inset 0 0 6px 1px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${qt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 6px 1px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${qt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Qt=e=>t=>{const r=t.theme,n=Rt(Ut,r[Vt.designTokenScheme]);return r.options?.designToken?Lt(n,e,r.options.designToken):Lt(n,e)},Zt=Qt("InputBoxShadow"),Gt=Qt("InputErrorBoxShadow"),Xt=(Qt("ElevationBoxShadow"),Qt("Table.Header"),Qt("Table.Cell.Primary"),Qt("Table.Cell.Secondary"),Qt("Table.Cell.Selected"),Qt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Jt={collections:{base:{D1:{fontFamily:Xt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Kt=e=>t=>{const r=t.theme,n=Rt(Jt,r[Vt.textStyleScheme]);return r.options&&r.options.textStyle?Lt(n,e,r.options.textStyle):Lt(n,e)},er={D1:{fontFamily:Kt("D1.fontFamily"),fontSize:Kt("D1.fontSize"),fontWeight:Kt("D1.fontWeight"),lineHeight:Kt("D1.lineHeight"),letterSpacing:Kt("D1.letterSpacing")},D2:{fontFamily:Kt("D2.fontFamily"),fontSize:Kt("D2.fontSize"),fontWeight:Kt("D2.fontWeight"),lineHeight:Kt("D2.lineHeight"),letterSpacing:Kt("D2.letterSpacing")},D3:{fontFamily:Kt("D3.fontFamily"),fontSize:Kt("D3.fontSize"),fontWeight:Kt("D3.fontWeight"),lineHeight:Kt("D3.lineHeight"),letterSpacing:Kt("D3.letterSpacing")},D4:{fontFamily:Kt("D4.fontFamily"),fontSize:Kt("D4.fontSize"),fontWeight:Kt("D4.fontWeight"),lineHeight:Kt("D4.lineHeight"),letterSpacing:Kt("D4.letterSpacing")},DBody:{fontFamily:Kt("DBody.fontFamily"),fontSize:Kt("DBody.fontSize"),fontWeight:Kt("DBody.fontWeight"),lineHeight:Kt("DBody.lineHeight"),letterSpacing:Kt("DBody.letterSpacing")},H1:{fontFamily:Kt("H1.fontFamily"),fontSize:Kt("H1.fontSize"),fontWeight:Kt("H1.fontWeight"),lineHeight:Kt("H1.lineHeight"),letterSpacing:Kt("H1.letterSpacing")},H2:{fontFamily:Kt("H2.fontFamily"),fontSize:Kt("H2.fontSize"),fontWeight:Kt("H2.fontWeight"),lineHeight:Kt("H2.lineHeight"),letterSpacing:Kt("H2.letterSpacing")},H3:{fontFamily:Kt("H3.fontFamily"),fontSize:Kt("H3.fontSize"),fontWeight:Kt("H3.fontWeight"),lineHeight:Kt("H3.lineHeight"),letterSpacing:Kt("H3.letterSpacing")},H4:{fontFamily:Kt("H4.fontFamily"),fontSize:Kt("H4.fontSize"),fontWeight:Kt("H4.fontWeight"),lineHeight:Kt("H4.lineHeight"),letterSpacing:Kt("H4.letterSpacing")},H5:{fontFamily:Kt("H5.fontFamily"),fontSize:Kt("H5.fontSize"),fontWeight:Kt("H5.fontWeight"),lineHeight:Kt("H5.lineHeight"),letterSpacing:Kt("H5.letterSpacing")},H6:{fontFamily:Kt("H6.fontFamily"),fontSize:Kt("H6.fontSize"),fontWeight:Kt("H6.fontWeight"),lineHeight:Kt("H6.lineHeight"),letterSpacing:Kt("H6.letterSpacing")},Body:{fontFamily:Kt("Body.fontFamily"),fontSize:Kt("Body.fontSize"),fontWeight:Kt("Body.fontWeight"),lineHeight:Kt("Body.lineHeight"),letterSpacing:Kt("Body.letterSpacing")},BodySmall:{fontFamily:Kt("BodySmall.fontFamily"),fontSize:Kt("BodySmall.fontSize"),fontWeight:Kt("BodySmall.fontWeight"),lineHeight:Kt("BodySmall.lineHeight"),letterSpacing:Kt("BodySmall.letterSpacing")},XSmall:{fontFamily:Kt("XSmall.fontFamily"),fontSize:Kt("XSmall.fontSize"),fontWeight:Kt("XSmall.fontWeight"),lineHeight:Kt("XSmall.lineHeight"),letterSpacing:Kt("XSmall.letterSpacing")}},tr=e=>{switch(e){case 700:case"bold":return Xt.Bold;case 600:case"semibold":return Xt.Semibold;case 300:case"light":return Xt.Light;case 400:case"regular":return Xt.Regular;default:return""}},rr=(e,t)=>r=>{const n=er[e].fontFamily(r),i=er[e].fontWeight(r);return Object.values(Xt).includes(n)?g`
                font-family: ${tr(t)||tr(i)||n};
                font-weight: normal !important;
            `:g`
            font-family: ${n};
            font-weight: ${(nr(t)||i)??"normal"};
        `},nr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ir=(e,t,r=!1)=>n=>{const i=er[e],o=i.fontSize(n);return g`
            ${rr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var ar;!function(e){e.D1=p.h1`
        ${e=>g`
                ${ir("D1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${ir("D2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${ir("D3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${ir("D4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${ir("DBody",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${ir("H1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${ir("H2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${ir("H3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${ir("H4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${ir("H5",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${ir("H6",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${ir("Body",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${ir("BodySmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${ir("XSmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${or(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ur({...e,textStyle:"Body"}),Small:e=>ur({...e,textStyle:"BodySmall"})}}(ar||(ar={}));const sr=p.a`
    ${e=>g`
            ${ir(e.textStyle,e.weight)}
            color: ${qt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${qt.Secondary};

                svg {
                    color: ${qt.Secondary};
                }
            }
        `}
`,lr=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ur=({external:r=!1,children:n,...i})=>e(sr,{...i,children:[n,r&&t(lr,{})]});var cr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cr||(cr={}));const dr=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${qt.Neutral[5]};
    border-radius: 4px;
    background: ${qt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${qt.Accent.Light[1]};
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
                background: ${qt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${qt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${qt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border};
                    box-shadow: ${Gt};
                }
            `:void 0}
`,hr=p.input`
    ${ir("Body","regular")}
    color: ${qt.Neutral[1]};
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
        color: ${qt.Neutral[3]};
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
`;var fr={exports:{}};fr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(n),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var pr,gr,mr=fr.exports,yr={exports:{}},vr=yr.exports=(pr={year:0,month:1,day:2,hour:3,minute:4,second:5},gr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=gr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),gr[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,u=s.value,c=pr[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),br={exports:{}};br.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),o=r-i<0,a=t.clone().add(n+(o?-1:1),u);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new F(r)},_=v;_.l=S,_.i=$,_.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(n?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),g=function(e){var t=x(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(r.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=_.p(h),m=x(n),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=F.prototype;return x.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,F,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var wr=br.exports,$r={exports:{}};$r.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Sr=$r.exports,xr={exports:{}};xr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var _r=xr.exports,Fr={exports:{}};Fr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var kr,Or=Fr.exports;wr.extend(Sr),wr.extend(_r),wr.extend(Or),wr.extend(mr),wr.extend(vr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=wr(t).startOf("week");return Dr(r).map((e=>Br(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Br(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(wr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+wr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=wr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(kr||(kr={}));const Dr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Br=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Mr=[1,3,5,7,8,10,12],Ar=[4,6,9,11];var Er,jr,Cr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Mr.includes(o)?Math.min(i,31).toString():Ar.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=wr(e,r);return wr(t,r).diff(n,"minute")}}(Er||(Er={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(jr||(jr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Cr||(Cr={}));const zr=p.input`
    ${ir("Body","regular")}
    color: ${qt.Neutral[1]};

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
        color: ${qt.Neutral[3]};
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
`,Pr=p.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${qt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ir=p(v)`
    height: 1.25rem;
    width: 1.25rem;
`,Nr=i.forwardRef((({value:r,spacing:n,type:i,error:s,disabled:l,readOnly:u,onChange:c,onClear:d,allowClear:h=!1,className:f,...p},g)=>{const m=o();a(g,(()=>m.current),[]);const y=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:m,formatter:e=>Cr.transformWithSpaces(e,n)}),v=()=>"tel"===i&&n,b=e=>{const{nextValue:t,updateCaretPosition:r}=y(),n=t.replace(/\s/g,"");e.target.value=n,c(e),r()},w=r?(e=>e?v()?Cr.transformWithSpaces(e,n):e:"")(r):r;return e(dr,{$disabled:l,$error:s,$readOnly:u,className:f,children:[t(zr,{"data-testid":"input",ref:m,disabled:l,value:w,onChange:e=>{c&&(v()?b(e):c(e))},type:i,readOnly:u,...p}),h&&!l&&!u&&!!r&&t(Pr,{onClick:()=>{d&&d(),m&&m.current&&m.current.focus()},type:"button",children:t(Ir,{"aria-hidden":!0})})]})})),Hr=p.div`
    display: flex;
    position: relative;
    border: 1px solid ${qt.Neutral[5]};
    border-radius: 4px;
    background: ${qt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${qt.Accent.Light[1]};
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
                background: ${qt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border(e)};
                    box-shadow: ${Gt};
                }
            `:void 0}
`,Tr=p(Nr)`
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
`,Lr=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ir("Body","regular")}
    color: ${qt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${qt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return g`
                color: ${qt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${qt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?g`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:g`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Rr=Je;var Vr=Je,Wr=Ke,Yr=gt;var qr=Je,Ur=function(){this.__data__=new Rr,this.size=0},Qr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Zr=function(e){return this.__data__.get(e)},Gr=function(e){return this.__data__.has(e)},Xr=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Wr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Yr(n)}return r.set(e,t),this.size=r.size,this};function Jr(e){var t=this.__data__=new qr(e);this.size=t.size}Jr.prototype.clear=Ur,Jr.prototype.delete=Qr,Jr.prototype.get=Zr,Jr.prototype.has=Gr,Jr.prototype.set=Xr;var Kr=Jr;var en=gt,tn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},rn=function(e){return this.__data__.has(e)};function nn(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new en;++t<r;)this.add(e[t])}nn.prototype.add=nn.prototype.push=tn,nn.prototype.has=rn;var on=nn,an=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},sn=function(e,t){return e.has(t)};var ln=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&r?new on:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=a?n(g,p,d,t,e,o):n(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!an(t,(function(e,t){if(!sn(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var un=B.Uint8Array,cn=Ne,dn=ln,hn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},fn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},pn=M?M.prototype:void 0,gn=pn?pn.valueOf:void 0;var mn=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new un(e),new un(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return cn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=hn;case"[object Set]":var l=1&n;if(s||(s=fn),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;n|=2,a.set(e,t);var c=dn(s(e),s(t),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(gn)return gn.call(e)==gn.call(t)}return!1};var yn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},vn=F;var bn=function(e,t,r){var n=t(e);return vn(e)?n:yn(n,r(e))};var wn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},$n=function(){return[]},Sn=Object.prototype.propertyIsEnumerable,xn=Object.getOwnPropertySymbols,_n=xn?function(e){return null==e?[]:(e=Object(e),wn(xn(e),(function(t){return Sn.call(e,t)})))}:$n;var Fn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},kn=L,On=R;var Dn=function(e){return On(e)&&"[object Arguments]"==kn(e)},Bn=R,Mn=Object.prototype,An=Mn.hasOwnProperty,En=Mn.propertyIsEnumerable,jn=Dn(function(){return arguments}())?Dn:function(e){return Bn(e)&&An.call(e,"callee")&&!En.call(e,"callee")},Cn={exports:{}};var zn=function(){return!1};!function(e,t){var r=B,n=zn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Cn,Cn.exports);var Pn=/^(?:0|[1-9]\d*)$/;var In=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Pn.test(e))&&e>-1&&e%1==0&&e<t};var Nn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Hn=L,Tn=Nn,Ln=R,Rn={};Rn["[object Float32Array]"]=Rn["[object Float64Array]"]=Rn["[object Int8Array]"]=Rn["[object Int16Array]"]=Rn["[object Int32Array]"]=Rn["[object Uint8Array]"]=Rn["[object Uint8ClampedArray]"]=Rn["[object Uint16Array]"]=Rn["[object Uint32Array]"]=!0,Rn["[object Arguments]"]=Rn["[object Array]"]=Rn["[object ArrayBuffer]"]=Rn["[object Boolean]"]=Rn["[object DataView]"]=Rn["[object Date]"]=Rn["[object Error]"]=Rn["[object Function]"]=Rn["[object Map]"]=Rn["[object Number]"]=Rn["[object Object]"]=Rn["[object RegExp]"]=Rn["[object Set]"]=Rn["[object String]"]=Rn["[object WeakMap]"]=!1;var Vn=function(e){return Ln(e)&&Tn(e.length)&&!!Rn[Hn(e)]};var Wn=function(e){return function(t){return e(t)}},Yn={exports:{}};!function(e,t){var r=k,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Yn,Yn.exports);var qn=Vn,Un=Wn,Qn=Yn.exports,Zn=Qn&&Qn.isTypedArray,Gn=Zn?Un(Zn):qn,Xn=Fn,Jn=jn,Kn=F,ei=Cn.exports,ti=In,ri=Gn,ni=Object.prototype.hasOwnProperty;var ii=function(e,t){var r=Kn(e),n=!r&&Jn(e),i=!r&&!n&&ei(e),o=!r&&!n&&!i&&ri(e),a=r||n||i||o,s=a?Xn(e.length,String):[],l=s.length;for(var u in e)!t&&!ni.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ti(u,l))||s.push(u);return s},oi=Object.prototype;var ai=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||oi)};var si=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),li=ai,ui=si,ci=Object.prototype.hasOwnProperty;var di=te,hi=Nn;var fi=function(e){return null!=e&&hi(e.length)&&!di(e)},pi=ii,gi=function(e){if(!li(e))return ui(e);var t=[];for(var r in Object(e))ci.call(e,r)&&"constructor"!=r&&t.push(r);return t},mi=fi;var yi=function(e){return mi(e)?pi(e):gi(e)},vi=bn,bi=_n,wi=yi;var $i=function(e){return vi(e,wi,bi)},Si=Object.prototype.hasOwnProperty;var xi=function(e,t,r,n,i,o){var a=1&r,s=$i(e),l=s.length;if(l!=$i(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:Si.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var g=e[c=s[u]],m=t[c];if(n)var y=a?n(m,g,c,t,e,o):n(g,m,c,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},_i=be(B,"DataView"),Fi=Ke,ki=be(B,"Promise"),Oi=be(B,"Set"),Di=be(B,"WeakMap"),Bi=L,Mi=ae,Ai="[object Map]",Ei="[object Promise]",ji="[object Set]",Ci="[object WeakMap]",zi="[object DataView]",Pi=Mi(_i),Ii=Mi(Fi),Ni=Mi(ki),Hi=Mi(Oi),Ti=Mi(Di),Li=Bi;(_i&&Li(new _i(new ArrayBuffer(1)))!=zi||Fi&&Li(new Fi)!=Ai||ki&&Li(ki.resolve())!=Ei||Oi&&Li(new Oi)!=ji||Di&&Li(new Di)!=Ci)&&(Li=function(e){var t=Bi(e),r="[object Object]"==t?e.constructor:void 0,n=r?Mi(r):"";if(n)switch(n){case Pi:return zi;case Ii:return Ai;case Ni:return Ei;case Hi:return ji;case Ti:return Ci}return t});var Ri=Kr,Vi=ln,Wi=mn,Yi=xi,qi=Li,Ui=F,Qi=Cn.exports,Zi=Gn,Gi="[object Arguments]",Xi="[object Array]",Ji="[object Object]",Ki=Object.prototype.hasOwnProperty;var eo=function(e,t,r,n,i,o){var a=Ui(e),s=Ui(t),l=a?Xi:qi(e),u=s?Xi:qi(t),c=(l=l==Gi?Ji:l)==Ji,d=(u=u==Gi?Ji:u)==Ji,h=l==u;if(h&&Qi(e)){if(!Qi(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new Ri),a||Zi(e)?Vi(e,t,r,n,i,o):Wi(e,t,l,r,n,i,o);if(!(1&r)){var f=c&&Ki.call(e,"__wrapped__"),p=d&&Ki.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new Ri),i(g,m,r,n,o)}}return!!h&&(o||(o=new Ri),Yi(e,t,r,n,i,o))},to=R;var ro=function e(t,r,n,i,o){return t===r||(null==t||null==r||!to(t)&&!to(r)?t!=t&&r!=r:eo(t,r,n,i,e,o))},no=Kr,io=ro;var oo=X;var ao=function(e){return e==e&&!oo(e)},so=ao,lo=yi;var uo=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},co=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new no;if(n)var h=n(u,c,l,e,t,d);if(!(void 0===h?io(c,u,3,n,d):h))return!1}}return!0},ho=function(e){for(var t=lo(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,so(i)]}return t},fo=uo;var po=jt,go=jn,mo=F,yo=In,vo=Nn,bo=zt;var wo=function(e,t){return null!=e&&t in Object(e)},$o=function(e,t,r){for(var n=-1,i=(t=po(t,e)).length,o=!1;++n<i;){var a=bo(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&vo(i)&&yo(a,i)&&(mo(e)||go(e))};var So=ro,xo=Tt,_o=function(e,t){return null!=e&&$o(e,t,wo)},Fo=G,ko=ao,Oo=uo,Do=zt;var Bo=Nt;var Mo=function(e){return function(t){return null==t?void 0:t[e]}},Ao=function(e){return function(t){return Bo(t,e)}},Eo=G,jo=zt;var Co=function(e){var t=ho(e);return 1==t.length&&t[0][2]?fo(t[0][0],t[0][1]):function(r){return r===e||co(r,e,t)}},zo=function(e,t){return Fo(e)&&ko(t)?Oo(Do(e),t):function(r){var n=xo(r,e);return void 0===n&&n===t?_o(r,e):So(t,n,3)}},Po=function(e){return e},Io=F,No=function(e){return Eo(e)?Mo(jo(e)):Ao(e)};var Ho=function(e){return"function"==typeof e?e:null==e?Po:"object"==typeof e?Io(e)?zo(e[0],e[1]):Co(e):No(e)},To=Ho,Lo=fi,Ro=yi;var Vo=function(e){return function(t,r,n){var i=Object(t);if(!Lo(t)){var o=To(r);t=Ro(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var Wo=/\s/;var Yo=function(e){for(var t=e.length;t--&&Wo.test(e.charAt(t)););return t},qo=/^\s+/;var Uo=function(e){return e?e.slice(0,Yo(e)+1).replace(qo,""):e},Qo=X,Zo=Y,Go=/^[-+]0x[0-9a-f]+$/i,Xo=/^0b[01]+$/i,Jo=/^0o[0-7]+$/i,Ko=parseInt;var ea=function(e){if("number"==typeof e)return e;if(Zo(e))return NaN;if(Qo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Qo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Uo(e);var r=Xo.test(e);return r||Jo.test(e)?Ko(e.slice(2),r?2:8):Go.test(e)?NaN:+e},ta=1/0;var ra=function(e){return e?(e=ea(e))===ta||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var na=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},ia=Ho,oa=function(e){var t=ra(e),r=t%1;return t==t?r?t-r:t:0},aa=Math.max;var sa=Vo((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:oa(r);return i<0&&(i=aa(n+i,0)),na(e,ia(t),i)})),la=ro;var ua=function(e,t){return la(e,t)};let ca=ka();const da=e=>Sa(e,ca);let ha=ka();da.write=e=>Sa(e,ha);let fa=ka();da.onStart=e=>Sa(e,fa);let pa=ka();da.onFrame=e=>Sa(e,pa);let ga=ka();da.onFinish=e=>Sa(e,ga);let ma=[];da.setTimeout=(e,t)=>{let r=da.now()+t,n=()=>{let e=ma.findIndex((e=>e.cancel==n));~e&&ma.splice(e,1),wa-=~e?1:0},i={time:r,handler:e,cancel:n};return ma.splice(ya(r),0,i),wa+=1,xa(),i};let ya=e=>~(~ma.findIndex((t=>t.time>e))||~ma.length);da.cancel=e=>{fa.delete(e),pa.delete(e),ga.delete(e),ca.delete(e),ha.delete(e)},da.sync=e=>{$a=!0,da.batchedUpdates(e),$a=!1},da.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,da.onStart(r)}return n.handler=e,n.cancel=()=>{fa.delete(r),t=null},n};let va="undefined"!=typeof window?window.requestAnimationFrame:()=>{};da.use=e=>va=e,da.now="undefined"!=typeof performance?()=>performance.now():Date.now,da.batchedUpdates=e=>e(),da.catch=console.error,da.frameLoop="always",da.advance=()=>{"demand"!==da.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Fa()};let ba=-1,wa=0,$a=!1;function Sa(e,t){$a?(t.delete(e),e(0)):(t.add(e),xa())}function xa(){ba<0&&(ba=0,"demand"!==da.frameLoop&&va(_a))}function _a(){~ba&&(va(_a),da.batchedUpdates(Fa))}function Fa(){let e=ba;ba=da.now();let t=ya(ba);t&&(Oa(ma.splice(0,t),(e=>e.handler())),wa-=t),wa?(fa.flush(),ca.flush(e?Math.min(64,ba-e):16.667),pa.flush(),ha.flush(),ga.flush()):ba=-1}function ka(){let e=new Set,t=e;return{add(r){wa+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(wa-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,wa-=t.size,Oa(t,(t=>t(r)&&e.add(t))),wa+=e.size,t=e)}}}function Oa(e,t){e.forEach((e=>{try{t(e)}catch(e){da.catch(e)}}))}function Da(){}const Ba={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ma(e,t){if(Ba.arr(e)){if(!Ba.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Aa=(e,t)=>e.forEach(t);function Ea(e,t,r){if(Ba.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const ja=e=>Ba.und(e)?[]:Ba.arr(e)?e:[e];function Ca(e,t){if(e.size){const r=Array.from(e);e.clear(),Aa(r,t)}}const za=(e,...t)=>Ca(e,(e=>e(...t))),Pa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ia,Na,Ha=null,Ta=!1,La=Da;var Ra=Object.freeze({__proto__:null,get createStringInterpolator(){return Ia},get to(){return Na},get colors(){return Ha},get skipAnimation(){return Ta},get willAdvance(){return La},assign:e=>{e.to&&(Na=e.to),e.now&&(da.now=e.now),void 0!==e.colors&&(Ha=e.colors),null!=e.skipAnimation&&(Ta=e.skipAnimation),e.createStringInterpolator&&(Ia=e.createStringInterpolator),e.requestAnimationFrame&&da.use(e.requestAnimationFrame),e.batchedUpdates&&(da.batchedUpdates=e.batchedUpdates),e.willAdvance&&(La=e.willAdvance),e.frameLoop&&(da.frameLoop=e.frameLoop)}});const Va=new Set;let Wa=[],Ya=[],qa=0;const Ua={get idle(){return!Va.size&&!Wa.length},start(e){qa>e.priority?(Va.add(e),da.onStart(Qa)):(Za(e),da(Xa))},advance:Xa,sort(e){if(qa)da.onFrame((()=>Ua.sort(e)));else{const t=Wa.indexOf(e);~t&&(Wa.splice(t,1),Ga(e))}},clear(){Wa=[],Va.clear()}};function Qa(){Va.forEach(Za),Va.clear(),da(Xa)}function Za(e){Wa.includes(e)||Ga(e)}function Ga(e){Wa.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Wa,(t=>t.priority>e.priority)),0,e)}function Xa(e){const t=Ya;for(let r=0;r<Wa.length;r++){const n=Wa[r];qa=n.priority,n.idle||(La(n),n.advance(e),n.idle||t.push(n))}return qa=0,Ya=Wa,Ya.length=0,Wa=t,Wa.length>0}const Ja="[-+]?\\d*\\.?\\d+",Ka=Ja+"%";function es(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ts=new RegExp("rgb"+es(Ja,Ja,Ja)),rs=new RegExp("rgba"+es(Ja,Ja,Ja,Ja)),ns=new RegExp("hsl"+es(Ja,Ka,Ka)),is=new RegExp("hsla"+es(Ja,Ka,Ka,Ja)),os=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,as=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ss=/^#([0-9a-fA-F]{6})$/,ls=/^#([0-9a-fA-F]{8})$/;function us(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function cs(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=us(i,n,e+1/3),a=us(i,n,e),s=us(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ds(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function hs(e){return(parseFloat(e)%360+360)%360/360}function fs(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ps(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function gs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ss.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ha&&void 0!==Ha[e]?Ha[e]:(t=ts.exec(e))?(ds(t[1])<<24|ds(t[2])<<16|ds(t[3])<<8|255)>>>0:(t=rs.exec(e))?(ds(t[1])<<24|ds(t[2])<<16|ds(t[3])<<8|fs(t[4]))>>>0:(t=os.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ls.exec(e))?parseInt(t[1],16)>>>0:(t=as.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ns.exec(e))?(255|cs(hs(t[1]),ps(t[2]),ps(t[3])))>>>0:(t=is.exec(e))?(cs(hs(t[1]),ps(t[2]),ps(t[3]))|fs(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ms=(e,t,r)=>{if(Ba.fun(e))return e;if(Ba.arr(e))return ms({range:e,output:t,extrapolate:r});if(Ba.str(e.output[0]))return Ia(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=o(u),n===-1/0?u=-u:i===1/0?u+=n:u=u*(i-n)+n;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};const ys=1.70158,vs=1.525*ys,bs=ys+1,ws=2*Math.PI/3,$s=2*Math.PI/4.5,Ss=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},xs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>bs*e*e*e-ys*e*e,easeOutBack:e=>1+bs*Math.pow(e-1,3)+ys*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-vs)/2:(Math.pow(2*e-2,2)*((vs+1)*(2*e-2)+vs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ws),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ws)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*$s)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*$s)/2+1,easeInBounce:e=>1-Ss(1-e),easeOutBounce:Ss,easeInOutBounce:e=>e<.5?(1-Ss(1-2*e))/2:(1+Ss(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_s.apply(this,arguments)}const Fs=Symbol.for("FluidValue.get"),ks=Symbol.for("FluidValue.observers"),Os=e=>Boolean(e&&e[Fs]),Ds=e=>e&&e[Fs]?e[Fs]():e,Bs=e=>e[ks]||null;function Ms(e,t){let r=e[ks];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class As{constructor(e){if(this[Fs]=void 0,this[ks]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Es(this,e)}}const Es=(e,t)=>zs(e,Fs,t);function js(e,t){if(e[Fs]){let r=e[ks];r||zs(e,ks,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Cs(e,t){let r=e[ks];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[ks]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const zs=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ps=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Is=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ns=new RegExp(`(${Ps.source})(%|[a-z]+)`,"i"),Hs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ts=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ls=e=>{const[t,r]=Rs(e);if(!t||Pa())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ts.test(r)?Ls(r):r||e},Rs=e=>{const t=Ts.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Vs;const Ws=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ys=e=>{Vs||(Vs=Ha?new RegExp(`(${Object.keys(Ha).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ds(e).replace(Ts,Ls).replace(Is,gs).replace(Vs,gs))),r=t.map((e=>e.match(Ps).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ms(_s({},e,{output:t}))));return e=>{var r;const i=!Ns.test(t[0])&&(null==(r=t.find((e=>Ns.test(e))))?void 0:r.replace(Ps,""));let o=0;return t[0].replace(Ps,(()=>`${n[o++](e)}${i||""}`)).replace(Hs,Ws)}},qs="react-spring: ",Us=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${qs}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Qs=Us(console.warn);const Zs=Us(console.warn);function Gs(e){return Ba.str(e)&&("#"==e[0]||/\d/.test(e)||!Pa()&&Ts.test(e)||e in(Ha||{}))}const Xs=Pa()?s:l,Js=()=>{const e=o(!1);return Xs((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ks(){const e=u()[1],t=Js();return()=>{t.current&&e(Math.random())}}const el=e=>s(e,tl),tl=[];function rl(e){const t=o();return s((()=>{t.current=e})),t.current}const nl=Symbol.for("Animated:node"),il=e=>e&&e[nl],ol=(e,t)=>{return r=e,n=nl,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},al=e=>e&&e[nl]&&e[nl].getPayload();class sl{constructor(){this.payload=void 0,ol(this,this)}getPayload(){return this.payload||[]}}class ll extends sl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ba.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ll(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ba.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ba.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ul extends ll{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ms({output:[e,e]})}static create(e){return new ul(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ba.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ms({output:[this.getValue(),e]})),this._value=0,super.reset()}}const cl={dependencies:null};class dl extends sl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ea(this.source,((r,n)=>{var i;(i=r)&&i[nl]===i?t[n]=r.getValue(e):Os(r)?t[n]=Ds(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Aa(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ea(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){cl.dependencies&&Os(e)&&cl.dependencies.add(e);const t=al(e);t&&Aa(t,(e=>this.add(e)))}}class hl extends dl{constructor(e){super(e)}static create(e){return new hl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(fl)),!0)}}function fl(e){return(Gs(e)?ul:ll).create(e)}function pl(e){const t=il(e);return t?t.constructor:Ba.arr(e)?hl:Gs(e)?ul:ll}function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gl.apply(this,arguments)}const ml=(e,t)=>{const r=!Ba.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const l=o(null),u=r&&d((e=>{l.current=function(e,t){e&&(Ba.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,h]=function(e,t){const r=new Set;cl.dependencies=r,e.style&&(e=gl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new dl(e),cl.dependencies=null,[e,r]}(i,t),f=Ks(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new yl(p,h),m=o();Xs((()=>(m.current=g,Aa(h,(e=>js(e,g))),()=>{m.current&&(Aa(m.current.deps,(e=>Cs(e,m.current))),da.cancel(m.current.update))}))),s(p,[]),el((()=>()=>{const e=m.current;Aa(e.deps,(t=>Cs(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,gl({},y,{ref:u}))}))};class yl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&da.write(this.update)}}const vl=Symbol.for("AnimatedComponent"),bl=e=>Ba.str(e)?e:e&&Ba.str(e.displayName)?e.displayName:Ba.fun(e)&&e.name||null;function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wl.apply(this,arguments)}function $l(e,...t){return Ba.fun(e)?e(...t):e}const Sl=(e,t)=>!0===e||!!(t&&e&&(Ba.fun(e)?e(t):ja(e).includes(t))),xl=(e,t)=>Ba.obj(e)?t&&e[t]:e,_l=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Fl=e=>e,kl=(e,t=Fl)=>{let r=Ol;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ba.und(r)||(n[i]=r)}return n},Ol=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Dl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bl(e){const t=function(e){const t={};let r=0;if(Ea(e,((e,n)=>{Dl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ea(e,((e,n)=>n in t||(r[n]=e))),r}return wl({},e)}function Ml(e){return e=Ds(e),Ba.arr(e)?e.map(Ml):Gs(e)?Ra.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Al(e){return Ba.fun(e)||Ba.arr(e)&&Ba.obj(e[0])}const El=wl({},{tension:170,friction:26},{mass:1,damping:1,easing:xs.linear,clamp:!1});class jl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,El)}}function Cl(e,t){if(Ba.und(t.decay)){const r=!Ba.und(t.tension)||!Ba.und(t.friction);!r&&Ba.und(t.frequency)&&Ba.und(t.damping)&&Ba.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const zl=[];class Pl{constructor(){this.changed=!1,this.values=zl,this.toValues=null,this.fromValues=zl,this.to=void 0,this.from=void 0,this.config=new jl,this.immediate=!1}}function Il(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Sl(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Ba.und(r.pause)||(i.paused=Sl(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||Sl(e,t)),u=$l(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-da.now()}function f(){u>0&&!Ra.skipAnimation?(i.delayed=!0,c=da.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(wl({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Nl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ll(e.get()):t.every((e=>e.noop))?Hl(e.get()):Tl(e.get(),t.every((e=>e.finished))),Hl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Tl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ll=e=>({value:e,cancelled:!0,finished:!1});function Rl(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const u=kl(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&Ll(n)||i!==r.asyncId&&Tl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Wl,a=new Yl;return(async()=>{if(Ra.skipAnimation)throw Vl(r),a.result=Tl(n,!1),d(a),a;f(o);const s=Ba.obj(e)?wl({},e):wl({},t,{to:e});s.parentId=i,Ea(u,((e,t)=>{Ba.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Ra.skipAnimation)return Vl(r),Tl(n,!1);try{let t;t=Ba.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=Tl(n.get(),!0,!1)}catch(e){if(e instanceof Wl)g=e.result;else{if(!(e instanceof Yl))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ba.fun(a)&&da.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Vl(e,t){Ca(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Wl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Yl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ql=e=>e instanceof Ql;let Ul=1;class Ql extends As{constructor(...e){super(...e),this.id=Ul++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=il(this);return e&&e.getValue()}to(...e){return Ra.to(this,e)}interpolate(...e){return Qs(`${qs}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ra.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ms(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ua.sort(this),Ms(this,{type:"priority",parent:this,priority:e})}}const Zl=Symbol.for("SpringPhase"),Gl=e=>(1&e[Zl])>0,Xl=e=>(2&e[Zl])>0,Jl=e=>(4&e[Zl])>0,Kl=(e,t)=>t?e[Zl]|=3:e[Zl]&=-3,eu=(e,t)=>t?e[Zl]|=4:e[Zl]&=-5;class tu extends Ql{constructor(e,t){if(super(),this.key=void 0,this.animation=new Pl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ba.und(e)||!Ba.und(t)){const r=Ba.obj(e)?wl({},e):wl({},t,{from:e});Ba.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Xl(this)||this._state.asyncTo)||Jl(this)}get goal(){return Ds(this.animation.to)}get velocity(){const e=il(this);return e instanceof ll?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gl(this)}get isAnimating(){return Xl(this)}get isPaused(){return Jl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=al(n.to);!a&&Os(n.to)&&(o=ja(Ds(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==ul?1:a?a[l].lastPosition:o[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ba.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(Ba.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ba.und(n),f=r==u?s.v0>0:r<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*n,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(u-r),a=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=il(this),l=s.getValue();if(t){const e=Ds(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return da.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Xl(this)){const{to:e,config:t}=this.animation;da.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ba.und(e)?(r=this.queue||[],this.queue=[]):r=[Ba.obj(e)?e:wl({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Nl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Vl(this._state,e&&this._lastCallId),da.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ba.obj(r)?r[t]:r,(null==r||Al(r))&&(r=void 0),n=Ba.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Gl(this)||(e.reverse&&([r,n]=[n,r]),n=Ds(n),Ba.und(n)?il(this)||this._set(r):this._set(n)),i}_update(e,t){let r=wl({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,kl(r,((e,t)=>/^on/.test(t)?xl(e,n):e))),lu(this,r,"onProps"),uu(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Il(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{Jl(this)||(eu(this,!0),za(a.pauseQueue),uu(this,"onPause",Tl(this,ru(this,this.animation.to)),this))},resume:()=>{Jl(this)&&(eu(this,!1),Xl(this)&&this._resume(),za(a.resumeQueue),uu(this,"onResume",Tl(this,ru(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=nu(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ll(this));const n=!Ba.und(e.to),i=!Ba.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Ll(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||n||t.default&&!Ba.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Ma(d,u);h&&(s.from=d),d=Ds(d);const f=!Ma(c,l);f&&this._focus(c);const p=Al(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Cl(r=wl({},r),t),t=wl({},r,t)),Cl(e,t),Object.assign(e,t);for(const t in El)null==e[t]&&(e[t]=El[t]);let{mass:n,frequency:i,damping:o}=e;Ba.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(g,$l(t.config,o),t.config!==a.config?$l(a.config,o):void 0);let v=il(this);if(!v||Ba.und(c))return r(Tl(this,!0));const b=Ba.und(t.reset)?i&&!t.default:!Ba.und(d)&&Sl(t.reset,o),w=b?d:this.get(),$=Ml(c),S=Ba.num($)||Ba.arr($)||Gs($),x=!p&&(!S||Sl(a.immediate||t.immediate,o));if(f){const e=pl(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Os(c),k=!1;if(!F){const e=b||!Gl(this)&&h;(f||e)&&(k=Ma(Ml(w),$),F=!k),(Ma(s.immediate,x)||x)&&Ma(g.decay,m)&&Ma(g.velocity,y)||(F=!0)}if(k&&Xl(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Os(l))&&(s.values=v.getPayload(),s.toValues=Os(c)?null:_==ul?[1]:ja($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),F)){const{onRest:e}=s;Aa(su,(e=>lu(this,t,e)));const n=Tl(this,ru(this,l));za(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&da.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?$l(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),p?r(Rl(t.to,t,this._state,this)):F?this._start():Xl(this)&&!f?this._pendingCalls.add(r):r(Hl(w))}_focus(e){const t=this.animation;e!==t.to&&(Bs(this)&&this._detach(),t.to=e,Bs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Os(t)&&(js(t,this),ql(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Os(e)&&Cs(e,this)}_set(e,t=!0){const r=Ds(e);if(!Ba.und(r)){const e=il(this);if(!e||!Ma(r,e.getValue())){const n=pl(r);e&&e.constructor==n?e.setValue(r):ol(this,n.create(r)),e&&da.batchedUpdates((()=>{this._onChange(r,t)}))}}return il(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,uu(this,"onStart",Tl(this,ru(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),$l(this.animation.onChange,e,this)),$l(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;il(this).reset(Ds(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Xl(this)||(Kl(this,!0),Jl(this)||this._resume())}_resume(){Ra.skipAnimation?this.finish():Ua.start(this)}_stop(e,t){if(Xl(this)){Kl(this,!1);const r=this.animation;Aa(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ms(this,{type:"idle",parent:this});const n=t?Ll(this.get()):Tl(this.get(),ru(this,null!=e?e:r.to));za(this._pendingCalls,n),r.changed&&(r.changed=!1,uu(this,"onRest",n,this))}}}function ru(e,t){const r=Ml(t);return Ma(Ml(e.get()),r)}function nu(e,t=e.loop,r=e.to){let n=$l(t);if(n){const i=!0!==n&&Bl(n),o=(i||e).reverse,a=!i||i.reset;return iu(wl({},e,{loop:t,default:!1,pause:void 0,to:!o||Al(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function iu(e){const{to:t,from:r}=e=Bl(e),n=new Set;return Ba.obj(t)&&au(t,n),Ba.obj(r)&&au(r,n),e.keys=n.size?Array.from(n):null,e}function ou(e){const t=iu(e);return Ba.und(t.default)&&(t.default=kl(t)),t}function au(e,t){Ea(e,((e,r)=>null!=e&&t.add(r)))}const su=["onStart","onRest","onChange","onPause","onResume"];function lu(e,t,r){e.animation[r]=t[r]!==_l(t,r)?xl(t[r],e.key):void 0}function uu(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const cu=["onStart","onChange","onRest"];let du=1;class hu{constructor(e,t){this.id=du++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(wl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ba.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(iu(e)),this}start(e){let{queue:t}=this;return e?t=ja(e).map(iu):this.queue=[],this._flush?this._flush(this,t):(bu(this,t),fu(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Aa(ja(t),(t=>r[t].stop(!!e)))}else Vl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ba.und(e))this.start({pause:!0});else{const t=this.springs;Aa(ja(e),(e=>t[e].pause()))}return this}resume(e){if(Ba.und(e))this.start({pause:!1});else{const t=this.springs;Aa(ja(e),(e=>t[e].resume()))}return this}each(e){Ea(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ca(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Ca(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ca(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}da.onFrame(this._onFrame)}}function fu(e,t){return Promise.all(t.map((t=>pu(e,t)))).then((t=>Nl(e,t)))}async function pu(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Ba.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Ba.arr(i)||Ba.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Aa(cu,(r=>{const n=t[r];if(Ba.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,za(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===_l(t,"cancel");(c||f&&d.asyncId)&&h.push(Il(++e._lastAsyncId,{props:t,state:d,actions:{pause:Da,resume:Da,start(t,r){f?(Vl(d,e._lastAsyncId),r(Ll(e))):(t.onRest=s,r(Rl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Nl(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=nu(t,a,i);if(r)return bu(e,[r]),pu(e,r,!0)}return l&&da.batchedUpdates((()=>l(p,e,e.item))),p}function gu(e,t){const r=wl({},e.springs);return t&&Aa(ja(t),(e=>{Ba.und(e.keys)&&(e=iu(e)),Ba.obj(e.to)||(e=wl({},e,{to:void 0})),vu(r,e,(e=>yu(e)))})),mu(e,r),r}function mu(e,t){Ea(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,js(t,e))}))}function yu(e,t){const r=new tu;return r.key=e,t&&js(r,t),r}function vu(e,t,r){t.keys&&Aa(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function bu(e,t){Aa(t,(t=>{vu(e.springs,t,(t=>yu(t,e)))}))}const wu=["children"],$u=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,wu);const i=h(Su),a=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[r]=u((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=r;return s((()=>{n.current=a,i==r&&(r.inputs=r.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Su;return n.createElement(c,{value:r},t)},Su=(xu=$u,_u={},Object.assign(xu,n.createContext(_u)),xu.Provider._context=xu,xu.Consumer._context=xu,xu);var xu,_u;$u.Provider=Su.Provider,$u.Consumer=Su.Consumer;const Fu=()=>{const e=[],t=function(t){Zs(`${qs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Aa(e,((e,i)=>{if(Ba.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Aa(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Aa(e,(e=>e.resume(...arguments))),this},t.set=function(t){Aa(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Aa(e,((e,n)=>{if(Ba.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Aa(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Aa(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ba.fun(e)?e(r,t):e};return t._getProps=r,t};function ku(e,t){const r=Ba.fun(e),[[n],i]=function(e,t,r){const n=Ba.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?Fu():void 0),[]),a=o(0),s=Ks(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=gu(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?fu(e,t):new Promise((n=>{mu(e,r),l.queue.push((()=>{n(fu(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=rl(e)||0;function p(e,r){for(let i=e;i<r;i++){const e=u.current[i]||(u.current[i]=new hu(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=ou(r))}}f((()=>{Aa(u.current.slice(e,d),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=u.current.map(((e,t)=>gu(e,c[t]))),m=h($u),y=rl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Xs((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Aa(e,(e=>e()))),Aa(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),el((()=>()=>{Aa(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>wl({},e)));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}let Ou;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ou||(Ou={}));class Du extends Ql{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ms(...t);const r=this._get(),n=pl(r);ol(this,n.create(r))}advance(e){const t=this._get();Ma(t,this.get())||(il(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Mu(this._active)&&Au(this)}_get(){const e=Ba.arr(this.source)?this.source.map(Ds):ja(Ds(this.source));return this.calc(...e)}_start(){this.idle&&!Mu(this._active)&&(this.idle=!1,Aa(al(this),(e=>{e.done=!1})),Ra.skipAnimation?(da.batchedUpdates((()=>this.advance())),Au(this)):Ua.start(this))}_attach(){let e=1;Aa(ja(this.source),(t=>{Os(t)&&js(t,this),ql(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Aa(ja(this.source),(e=>{Os(e)&&Cs(e,this)})),this._active.clear(),Au(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ja(this.source).reduce(((e,t)=>Math.max(e,(ql(t)?t.priority:0)+1)),0))}}function Bu(e){return!1!==e.idle}function Mu(e){return!e.size||Array.from(e).every(Bu)}function Au(e){e.idle||(e.idle=!0,Aa(al(e),(e=>{e.done=!0})),Ms(e,{type:"idle",parent:e}))}function Eu(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}Ra.assign({createStringInterpolator:Ys,to:(e,t)=>new Du(e,t)});const ju=["style","children","scrollTop","scrollLeft","viewBox"],Cu=/^--/;function zu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Cu.test(e)||Iu.hasOwnProperty(e)&&Iu[e]?(""+t).trim():t+"px"}const Pu={};let Iu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Nu=["Webkit","Ms","Moz","O"];Iu=Object.keys(Iu).reduce(((e,t)=>(Nu.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Iu);const Hu=["x","y","z"],Tu=/^(matrix|translate|scale|rotate|skew)/,Lu=/^(translate)/,Ru=/^(rotate|skew)/,Vu=(e,t)=>Ba.num(e)&&0!==e?e+t:e,Wu=(e,t)=>Ba.arr(e)?e.every((e=>Wu(e,t))):Ba.num(e)?e===t:parseFloat(e)===t;class Yu extends dl{constructor(e){let{x:t,y:r,z:n}=e,i=Eu(e,Hu);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Vu(e,"px"))).join(",")})`,Wu(e,0)]))),Ea(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Tu.test(t)){if(delete i[t],Ba.und(e))return;const r=Lu.test(t)?"px":Ru.test(t)?"deg":"";o.push(ja(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Vu(i,r)})`,Wu(i,0)]:e=>[`${t}(${e.map((e=>Vu(e,r))).join(",")})`,Wu(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new qu(o,a)),super(i)}}class qu extends As{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Aa(this.inputs,((r,n)=>{const i=Ds(r[0]),[o,a]=this.transforms[n](Ba.arr(i)?i:r.map(Ds));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Aa(this.inputs,(e=>Aa(e,(e=>Os(e)&&js(e,this)))))}observerRemoved(e){0==e&&Aa(this.inputs,(e=>Aa(e,(e=>Os(e)&&Cs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ms(this,e)}}const Uu=["scrollTop","scrollLeft"];Ra.assign({batchedUpdates:b,createStringInterpolator:Ys,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Qu=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new dl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=bl(e)||"Anonymous";return(e=Ba.str(e)?o[e]||(o[e]=ml(e,i)):e[vl]||(e[vl]=ml(e,i))).displayName=`Animated(${t})`,e};return Ea(e,((t,r)=>{Ba.arr(e)&&(r=bl(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=n,u=Eu(n,ju),c=Object.values(u),d=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Pu[t]||(Pu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=zu(t,i[t]);Cu.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Yu(e),getComponentProps:e=>Eu(e,Uu)}),Zu=Qu.animated,Gu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Xu=e=>Object.keys(Gu).reduce(((t,r)=>{const n=Gu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ju=Xu("max-width"),Ku=(Xu("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ec=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,tc=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||qt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ec} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,rc=p(tc)`
    animation-delay: -0.45s;
`,nc=p(tc)`
    animation-delay: -0.3s;
`,ic=p(tc)`
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
                    background-color: ${qt.Neutral[8](e)};
                    border: 1px solid ${qt.Primary(e)};

                    span {
                        color: ${qt.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${qt.Neutral[8](e)};
                    border: 1px solid ${qt.Neutral[5](e)};

                    span {
                        color: ${qt.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${qt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${qt.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${qt.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${qt.Primary(e)};
                    border: 1px solid transparent;

                    ${Ju.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${qt.Neutral[8](e)};
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

                    ${Ju.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${ir("H4","semibold")}
                    }

                    ${Ju.mobileS} {
                        height: auto;
                    }
                `}
`;const oc=p((({color:r,className:n,size:i=18})=>e(Ku,{className:n,$size:i,$color:r,children:[t(tc,{id:"inner1",$size:i-2,$borderWidth:2}),t(rc,{id:"inner2",$size:i-2,$borderWidth:2}),t(nc,{id:"inner3",$size:i-2,$borderWidth:2}),t(ic,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=qt.Primary(e);break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ac=p.div`
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
    border: 1px solid ${qt.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=qt.Primary(e),r=qt.Primary(e)),e.disabled&&(t=qt.Neutral[6](e),r=qt.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,sc=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,lc=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?qt.Neutral[4]:qt.Neutral[8]};
`,uc=p(Zu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,cc=p.ul`
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
        background: ${qt.Neutral[4]};
        border-right: 5px solid ${qt.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Ju.mobileL} {
        max-height: 15rem;
    }
`,dc=p.li`
    :hover,
    :focus,
    :active {
        background: ${qt.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return g`
                background: ${qt.Accent.Light[5]};
            `}}
`,hc=p.button`
    display: flex;
    ${e=>e.multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
                padding: 0 1rem;
                min-height: 3.5rem;
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
        outline-color: ${qt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;p.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${qt.Neutral[8]};
`;const fc=p.div`
    ${ir("Body","regular")}
    color: ${qt.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,pc=p.span`
    color: ${qt.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,gc=p.div`
    display: flex;
    flex-direction: column;
`,mc=p.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,yc=p.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;p(ar.Hyperlink.Default)`
    color: ${qt.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${qt.Accent.Light[3]};
        color: ${qt.Neutral[1]};
    }
`;const vc=p((({className:r,checked:n,disabled:i,onChange:o,onKeyPress:a,displaySize:l="default",...c})=>{const[d,h]=u(n);s((()=>{h(n)}),[n]);const f=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),a&&a(t)}};return e(ac,{selected:d,disabled:i,className:r,"data-testid":"checkbox",$displaySize:l,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:f,children:[t(sc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:i,checked:d,...c}),d&&t(lc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:l})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,bc=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,wc=p.button`
    ${ir("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${qt.Primary(e)};\n\t\t`}
`,$c=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Sc=p(ar.Body)``,xc=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${qt.Validation.Red.Icon};
`,_c=p.button`
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
                background-color: ${qt.Neutral[7]};
            `}
    }
`,Fc=i.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(_c,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),kc=p.li`
    background: ${qt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Oc=p(hr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Dc=p(S)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
`,Bc=p(Fc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
    cursor: pointer;
`,Mc=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${qt.Neutral[3]};
`,Ac=c(((r,n)=>{const{onClear:i,...o}=r;return e(kc,{children:[t(Dc,{}),t(Oc,{ref:n,...o}),o.value&&t(Bc,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:t(Mc,{})})]},"search")})),Ec=({listItems:n,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:c,visible:d,enableSearch:h,searchPlaceholder:f="Search",onSearch:p,searchFunction:g,onDismiss:m,multiSelect:y,selectedItems:v,onSelectAll:b,onRetry:w,itemsLoadState:$="success",itemTruncationType:S="end",renderListItem:x,onBlur:_,hideNoResultsDisplay:F,renderCustomCallToAction:k,...O})=>{const[D,B]=u(0),[M,A]=u(""),[E,j]=u(n),[C,z]=u(0),P=ku({height:C}),I=o(),N=o(),H=o([]),T=o(),L=o(),R=o(D),V=o(E),W=e=>{R.current=e,B(e)},Y=e=>{V.current=e,j(e)};s((()=>(document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)})),[]),s((()=>{Z(M)}),[M]),s((()=>{A(""),d?(setTimeout((()=>{z(G())})),T&&T.current?(T.current.focus(),W(-1)):H.current[D]&&H.current[D].focus()):z(0)}),[d]),s((()=>{if(d){const e=G();z(e)}}),[E]),s((()=>{Y(n),A(""),W(0)}),[n]);const q=e=>i?i(e):e.toString(),U=e=>{const t=i?i(e):e.toString();let r=0;return N&&N.current&&(r=N.current.getBoundingClientRect().width-100),Cr.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},Q=e=>!!sa(v,(t=>ua(t,e))),Z=e=>{if(""===e)Y(n);else if(g){const t=g(e);Y(t)}else{const t=n.filter((t=>{const r=q(t),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(e.trim().toLowerCase())||r.secondaryLabel.includes(e.trim().toLowerCase()):n.includes(e.trim().toLowerCase())}));Y(t)}},G=()=>(N&&N.current?N.current.getBoundingClientRect().height:0)+(L.current?L.current.getBoundingClientRect().height:0),X=e=>{if(I&&I.current.contains(e.target))switch(e.code){case"ArrowDown":if(R.current<V.current.length-1){const e=R.current+1;H.current[e].focus(),W(e)}break;case"ArrowUp":if(R.current>0){const e=R.current-1;H.current[e].focus(),W(R.current-1)}break;case"Escape":m&&m(!0)}},J=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},K=e=>{const t=e.target.value;A(t),p&&p()},ee=()=>{A(""),T.current.focus(),p&&p()},te=()=>{w&&w()},re=()=>{_&&_()},ne=r=>{const n=q(r),i="string"==typeof n?n:n.title;return e(gc,{"data-testid":"truncate-middle-container",children:[t(mc,{children:i}),e(yc,{children:[" ",i]})]})},ie=n=>{const i=q(n);return"string"==typeof i?t(r,{children:i}):e(r,{children:[i.title,i.secondaryLabel&&t(pc,{children:i.secondaryLabel})]})},oe=()=>{if(!w||w&&"success"===$)return E.map(((r,n)=>t(dc,{checked:Q(r)&&!y,children:e(hc,{onClick:e=>{J(e,r)},ref:e=>H.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:y,onBlur:re,children:[y&&t(vc,{checked:Q(r),displaySize:"small"}),x?x(r,{selected:Q(r)}):t(fc,{truncateType:S,children:"middle"===S&&U(r)?ne(r):ie(r)})]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},ae=()=>{if(y&&E.length>0&&!M&&"success"===$)return t(bc,{children:t(wc,{onClick:b,type:"button",children:0===v.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!F&&M&&0===E.length)return e($c,{"data-testid":"list-no-results",children:[t(xc,{"data-testid":"no-result-icon"}),t(Sc,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===$)return e($c,{"data-testid":"list-loading",children:[t(oc,{$buttonStyle:"secondary",size:24}),t(Sc,{children:"Loading..."})]},"loading")},ue=()=>{if(w&&"fail"===$)return e($c,{"data-testid":"list-fail",children:[t(xc,{"data-testid":"load-error-icon"}),t(Sc,{children:"Failed to load."}),t(wc,{onClick:te,type:"button",children:"Try again."})]},"noResults")};return t(r,{children:e(uc,{style:P,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:I,children:[(()=>{if(d)return e(cc,{ref:N,"data-testid":"dropdown-list",width:c,role:"list",...O,children:[(h||g)&&"success"===$?t(Ac,{ref:T,onChange:K,value:M,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ee}):null,ae(),se(),le(),ue(),oe()]})})(),(()=>{if(d&&k)return t("div",{ref:L,"data-testid":"custom-cta",children:k(m,E)})})()]})})},jc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Cc=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,zc=p.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${qt.Accent.Light[3]};
    }
`,Pc=m`
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
`,Ic=p.div`
    position: relative;
    border: 1px solid ${qt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${qt.Neutral[8]};

    :focus-within {
        border: 1px solid ${qt.Accent.Light[1]};
        box-shadow: ${Zt};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Pc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${qt.Neutral[6](e)};

                ${zc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${zc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border(e)};
                    box-shadow: ${Gt};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${jc};
    margin-left: 1rem;
`,p(x)`
    color: ${qt.Neutral[3]};
    height: ${er.Body.fontSize}rem;
    width: ${er.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${qt.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Nc=p(ar.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Nc)`
    color: ${qt.Neutral[3]};
`;const Hc=({children:e,show:r,error:n,disabled:i,testId:a,onBlur:l,readOnly:u})=>{const c=o();return((e,t,r="window",n)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(c&&c.current.contains(e.target))return;r&&l()}}),"document"),t(Cc,{children:t(Ic,{ref:c,error:n&&!r,disabled:i,$readOnly:u,expanded:r,"data-testid":a,children:e})})},Tc=p.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return g`
                border-bottom: 1px solid ${qt.Neutral[5](e)};
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
`,Lc=p(zc)`
    padding: 0;
    width: auto;
`,Rc=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Vc=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${jc};
    margin: 0 0.75rem;
`,Wc=p(x)`
    color: ${qt.Neutral[3]};
    height: ${er.Body.fontSize}rem;
    width: ${er.Body.fontSize}rem;
    vertical-align: bottom;
`,Yc=p.div`
    display: flex;
    flex: 1 1 auto;
`,qc=p(ar.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Uc=p(qc)`
    color: ${qt.Neutral[3]};
`,Qc=p.div`
    width: 1px;
    background: ${qt.Neutral[5]};
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
`,Zc=i.forwardRef((({addon:n,error:i,onChange:a,readOnly:l,className:c,onBlur:d,...h},f)=>{const{placeholder:p,options:g,enableSearch:m,searchFunction:y,searchPlaceholder:v,valueExtractor:b,listExtractor:w,displayValueExtractor:$,selectedOption:S,onSelectOption:x,onHideOptions:_,onShowOptions:F,"data-selector-testid":k}=n.attributes,{position:O}=n,[D,B]=u(S),[M,A]=u(!1),E=o();s((()=>{B(S)}),[S]);const j=()=>$?$(D):b?b(D):D.toString(),C=e=>{!e&&_&&_(),e&&F&&F()},z=e=>{e.preventDefault(),h.disabled||(A(!M),C(!M))},P=(e,t)=>{B(e),A(!1),C(!1),E&&E.current.focus(),x&&x(e,t)},I=e=>{a&&a(e)},N=()=>{d&&d()},H=()=>{A(!1),C(!1),E&&E.current.focus()};return e(Hc,{className:c,show:M,error:i&&!M,disabled:h.disabled,readOnly:l,onBlur:()=>{A(!1),C(!1),N()},children:[e(Tc,{$expanded:M,$readOnly:l,$position:O,children:[l?D?t(Rc,{children:t(qc,{"data-testid":"selector-label",children:j()})}):null:t(Lc,{ref:E,type:"button",disabled:h.disabled,"data-testid":k||"addon-selector",onClick:z,children:e(r,{children:[e(Yc,{children:[p&&!D&&t(Uc,{children:p}),D&&t(qc,{"data-testid":"selector-label",children:j()})]}),t(Vc,{$expanded:M,children:t(Wc,{})})]})}),t(Qc,{$readOnly:l,$position:O}),t(Tr,{ref:f,...h,readOnly:l,error:i,onChange:I,"data-testid":h["data-testid"]||"input",onBlur:N})]}),g&&g.length>0?t(Ec,{listItems:g,selectedItems:S?[S]:[],onSelectItem:P,valueExtractor:b,listExtractor:w,visible:M,enableSearch:m,searchFunction:y,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:N,onDismiss:H}):null]})})),Gc=i.forwardRef((({addon:r,error:n,className:i,...o},a)=>{const s=()=>t(Hr,{disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:i,children:t(Tr,{ref:a,...o,"data-testid":"input"})});if(!r)return s();{const{type:l="label",position:u="left"}=r,{allowClear:c}=o;switch(l){case"list":{const e=r.attributes;return e.options&&e.options.length>0?t(Zc,{ref:a,addon:r,error:n,className:i,...o}):s()}case"custom":{const l=r.attributes;return l.children?e(dr,{$error:n,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:u,className:i,children:[t(Lr,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:u,children:l.children}),t(Tr,{ref:a,...o,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}default:{const l=r.attributes;return l.value?e(dr,{$disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:u,className:i,children:[t(Lr,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:u,children:l.value}),t(Tr,{ref:a,...o,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}}}}));export{Gc as InputGroup};
//# sourceMappingURL=index.js.map
