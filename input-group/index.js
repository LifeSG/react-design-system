import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as x}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F=Array.isArray,k="object"==typeof _&&_&&_.Object===Object&&_,D=k,O="object"==typeof self&&self&&self.Object===Object&&self,B=D||O||Function("return this")(),M=B.Symbol,A=M,E=Object.prototype,C=E.hasOwnProperty,j=E.toString,z=A?A.toStringTag:void 0;var I=function(e){var t=C.call(e,z),r=e[z];try{e[z]=void 0;var n=!0}catch(e){}var i=j.call(e);return n&&(t?e[z]=r:delete e[z]),i},P=Object.prototype.toString;var N=I,H=function(e){return P.call(e)},T=M?M.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?N(e):H(e)};var R=function(e){return null!=e&&"object"==typeof e},V=L,W=R;var Y=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==V(e)},q=F,U=Y,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/;var G=function(e,t){if(q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!U(e))||(Z.test(e)||!Q.test(e)||null!=t&&e in Object(t))};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},J=L,K=X;var ee,te=function(e){if(!K(e))return!1;var t=J(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=B["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!ne&&ne in e},oe=Function.prototype.toString;var ae=function(e){if(null!=e){try{return oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=te,le=ie,ue=X,ce=ae,de=/^\[object .+?Constructor\]$/,he=Function.prototype,fe=Object.prototype,pe=he.toString,ge=fe.hasOwnProperty,me=RegExp("^"+pe.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ue(e)||le(e))&&(se(e)?me:de).test(ce(e))},ve=function(e,t){return null==e?void 0:e[t]};var be=function(e,t){var r=ve(e,t);return ye(r)?r:void 0},we=be(Object,"create"),$e=we;var xe=function(){this.__data__=$e?$e(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=we,Fe=Object.prototype.hasOwnProperty;var ke=function(e){var t=this.__data__;if(_e){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Fe.call(t,e)?t[e]:void 0},De=we,Oe=Object.prototype.hasOwnProperty;var Be=we;var Me=xe,Ae=Se,Ee=ke,Ce=function(e){var t=this.__data__;return De?void 0!==t[e]:Oe.call(t,e)},je=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Be&&void 0===t?"__lodash_hash_undefined__":t,this};function ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ze.prototype.clear=Me,ze.prototype.delete=Ae,ze.prototype.get=Ee,ze.prototype.has=Ce,ze.prototype.set=je;var Ie=ze;var Pe=function(){this.__data__=[],this.size=0};var Ne=function(e,t){return e===t||e!=e&&t!=t},He=Ne;var Te=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Le=Te,Re=Array.prototype.splice;var Ve=Te;var We=Te;var Ye=Te;var qe=Pe,Ue=function(e){var t=this.__data__,r=Le(t,e);return!(r<0)&&(r==t.length-1?t.pop():Re.call(t,r,1),--this.size,!0)},Qe=function(e){var t=this.__data__,r=Ve(t,e);return r<0?void 0:t[r][1]},Ze=function(e){return We(this.__data__,e)>-1},Ge=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xe.prototype.clear=qe,Xe.prototype.delete=Ue,Xe.prototype.get=Qe,Xe.prototype.has=Ze,Xe.prototype.set=Ge;var Je=Xe,Ke=be(B,"Map"),et=Ie,tt=Je,rt=Ke;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var it=function(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map},ot=it;var at=it;var st=it;var lt=it;var ut=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},ct=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return at(this,e).get(e)},ht=function(e){return st(this,e).has(e)},ft=function(e,t){var r=lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=ut,pt.prototype.delete=ct,pt.prototype.get=dt,pt.prototype.has=ht,pt.prototype.set=ft;var gt=pt,mt=gt;function yt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(yt.Cache||mt),r}yt.Cache=mt;var vt=yt;var bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,$t=function(e){var t=vt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(bt,(function(e,r,n,i){t.push(n?i.replace(wt,"$1"):r||e)})),t}));var xt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},St=F,_t=Y,Ft=M?M.prototype:void 0,kt=Ft?Ft.toString:void 0;var Dt=function e(t){if("string"==typeof t)return t;if(St(t))return xt(t,e)+"";if(_t(t))return kt?kt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Ot=Dt;var Bt=F,Mt=G,At=$t,Et=function(e){return null==e?"":Ot(e)};var Ct=function(e,t){return Bt(e)?e:Mt(e,t)?[e]:At(Et(e))},jt=Y;var zt=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},It=Ct,Pt=zt;var Nt=function(e,t){for(var r=0,n=(t=It(t,e)).length;null!=e&&r<n;)e=e[Pt(t[r++])];return r&&r==n?e:void 0},Ht=Nt;var Tt=function(e,t,r){var n=null==e?void 0:Ht(e,t);return void 0===n?r:n};const Lt=(e,t,r)=>t?Tt(r,t)||Tt(e,t):r||e,Rt=(e,t)=>{const r=t||e.defaultValue;return Tt(e.collections,r)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const r=t.theme,n=Rt(Wt,r[Vt.colorScheme]);return r.options&&r.options.color?Lt(n,e,r.options.color):Lt(n,e)},qt={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},Ut={collections:{base:{InputBoxShadow:g`
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
`;var fr={exports:{}};fr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(n),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var pr,gr,mr=fr.exports,yr={exports:{}},vr=yr.exports=(pr={year:0,month:1,day:2,hour:3,minute:4,second:5},gr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=gr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),gr[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,u=s.value,c=pr[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),br={exports:{}};br.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),o=r-i<0,a=t.clone().add(n+(o?-1:1),u);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},x=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),r&&(w[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new F(r)},_=v;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(n?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[a]=c+"Hours",r[o]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(r.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=_.p(h),m=S(n),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=F.prototype;return S.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,F,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var wr=br.exports,$r={exports:{}};$r.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var xr=$r.exports,Sr={exports:{}};Sr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var _r=Sr.exports,Fr={exports:{}};Fr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var kr,Dr=Fr.exports;wr.extend(xr),wr.extend(_r),wr.extend(Dr),wr.extend(mr),wr.extend(vr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=wr(t).startOf("week");return Or(r).map((e=>Br(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Br(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(wr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+wr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=wr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(kr||(kr={}));const Or=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Br=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Mr=[1,3,5,7,8,10,12],Ar=[4,6,9,11];var Er,Cr,jr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Mr.includes(o)?Math.min(i,31).toString():Ar.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=wr(e,r);return wr(t,r).diff(n,"minute")}}(Er||(Er={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Cr||(Cr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(jr||(jr={}));const zr=p.input`
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
`,Ir=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${qt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Pr=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Nr=p.div`
    display: flex;
    width: 100%;
`,Hr=i.forwardRef((({value:n,spacing:i,type:s,error:l,disabled:u,readOnly:c,onChange:d,onClear:h,allowClear:f=!1,className:p,styleType:g="bordered",...m},y)=>{const v=o();a(y,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>jr.transformWithSpaces(e,i)}),w=e=>{d&&(x()?S(e):d(e))},$=()=>{h&&h(),v&&v.current&&v.current.focus()},x=()=>"tel"===s&&i,S=e=>{const{nextValue:t,updateCaretPosition:r}=b(),n=t.replace(/\s/g,"");e.target.value=n,d(e),r()},_=n?(e=>e?x()?jr.transformWithSpaces(e,i):e:"")(n):n,F=()=>e(r,{children:[t(zr,{"data-testid":"input",ref:v,disabled:u,value:_,onChange:w,type:s,readOnly:c,...m}),f&&!u&&!c&&!!n&&t(Ir,{onClick:$,type:"button",children:t(Pr,{"aria-hidden":!0})})]});return t(r,{children:"no-border"===g?t(Nr,{className:p,children:F()}):t(dr,{$disabled:u,$error:l,$readOnly:c,className:p,children:F()})})})),Tr=p.div`
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
`,Lr=p(Hr)`
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
`,Rr=p.div`
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
`;var Vr=Je;var Wr=Je,Yr=Ke,qr=gt;var Ur=Je,Qr=function(){this.__data__=new Vr,this.size=0},Zr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Gr=function(e){return this.__data__.get(e)},Xr=function(e){return this.__data__.has(e)},Jr=function(e,t){var r=this.__data__;if(r instanceof Wr){var n=r.__data__;if(!Yr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new qr(n)}return r.set(e,t),this.size=r.size,this};function Kr(e){var t=this.__data__=new Ur(e);this.size=t.size}Kr.prototype.clear=Qr,Kr.prototype.delete=Zr,Kr.prototype.get=Gr,Kr.prototype.has=Xr,Kr.prototype.set=Jr;var en=Kr;var tn=gt,rn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},nn=function(e){return this.__data__.has(e)};function on(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new tn;++t<r;)this.add(e[t])}on.prototype.add=on.prototype.push=rn,on.prototype.has=nn;var an=on,sn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ln=function(e,t){return e.has(t)};var un=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&r?new an:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=a?n(g,p,d,t,e,o):n(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!sn(t,(function(e,t){if(!ln(f,t)&&(p===e||i(p,e,r,n,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var cn=B.Uint8Array,dn=Ne,hn=un,fn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},pn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},gn=M?M.prototype:void 0,mn=gn?gn.valueOf:void 0;var yn=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new cn(e),new cn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return dn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=fn;case"[object Set]":var l=1&n;if(s||(s=pn),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;n|=2,a.set(e,t);var c=hn(s(e),s(t),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(mn)return mn.call(e)==mn.call(t)}return!1};var vn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},bn=F;var wn=function(e,t,r){var n=t(e);return bn(e)?n:vn(n,r(e))};var $n=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},xn=function(){return[]},Sn=Object.prototype.propertyIsEnumerable,_n=Object.getOwnPropertySymbols,Fn=_n?function(e){return null==e?[]:(e=Object(e),$n(_n(e),(function(t){return Sn.call(e,t)})))}:xn;var kn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Dn=L,On=R;var Bn=function(e){return On(e)&&"[object Arguments]"==Dn(e)},Mn=R,An=Object.prototype,En=An.hasOwnProperty,Cn=An.propertyIsEnumerable,jn=Bn(function(){return arguments}())?Bn:function(e){return Mn(e)&&En.call(e,"callee")&&!Cn.call(e,"callee")},zn={exports:{}};var In=function(){return!1};!function(e,t){var r=B,n=In,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(zn,zn.exports);var Pn=/^(?:0|[1-9]\d*)$/;var Nn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Pn.test(e))&&e>-1&&e%1==0&&e<t};var Hn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Tn=L,Ln=Hn,Rn=R,Vn={};Vn["[object Float32Array]"]=Vn["[object Float64Array]"]=Vn["[object Int8Array]"]=Vn["[object Int16Array]"]=Vn["[object Int32Array]"]=Vn["[object Uint8Array]"]=Vn["[object Uint8ClampedArray]"]=Vn["[object Uint16Array]"]=Vn["[object Uint32Array]"]=!0,Vn["[object Arguments]"]=Vn["[object Array]"]=Vn["[object ArrayBuffer]"]=Vn["[object Boolean]"]=Vn["[object DataView]"]=Vn["[object Date]"]=Vn["[object Error]"]=Vn["[object Function]"]=Vn["[object Map]"]=Vn["[object Number]"]=Vn["[object Object]"]=Vn["[object RegExp]"]=Vn["[object Set]"]=Vn["[object String]"]=Vn["[object WeakMap]"]=!1;var Wn=function(e){return Rn(e)&&Ln(e.length)&&!!Vn[Tn(e)]};var Yn=function(e){return function(t){return e(t)}},qn={exports:{}};!function(e,t){var r=k,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(qn,qn.exports);var Un=Wn,Qn=Yn,Zn=qn.exports,Gn=Zn&&Zn.isTypedArray,Xn=Gn?Qn(Gn):Un,Jn=kn,Kn=jn,ei=F,ti=zn.exports,ri=Nn,ni=Xn,ii=Object.prototype.hasOwnProperty;var oi=function(e,t){var r=ei(e),n=!r&&Kn(e),i=!r&&!n&&ti(e),o=!r&&!n&&!i&&ni(e),a=r||n||i||o,s=a?Jn(e.length,String):[],l=s.length;for(var u in e)!t&&!ii.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ri(u,l))||s.push(u);return s},ai=Object.prototype;var si=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ai)};var li=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),ui=si,ci=li,di=Object.prototype.hasOwnProperty;var hi=te,fi=Hn;var pi=function(e){return null!=e&&fi(e.length)&&!hi(e)},gi=oi,mi=function(e){if(!ui(e))return ci(e);var t=[];for(var r in Object(e))di.call(e,r)&&"constructor"!=r&&t.push(r);return t},yi=pi;var vi=function(e){return yi(e)?gi(e):mi(e)},bi=wn,wi=Fn,$i=vi;var xi=function(e){return bi(e,$i,wi)},Si=Object.prototype.hasOwnProperty;var _i=function(e,t,r,n,i,o){var a=1&r,s=xi(e),l=s.length;if(l!=xi(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:Si.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var g=e[c=s[u]],m=t[c];if(n)var y=a?n(m,g,c,t,e,o):n(g,m,c,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Fi=be(B,"DataView"),ki=Ke,Di=be(B,"Promise"),Oi=be(B,"Set"),Bi=be(B,"WeakMap"),Mi=L,Ai=ae,Ei="[object Map]",Ci="[object Promise]",ji="[object Set]",zi="[object WeakMap]",Ii="[object DataView]",Pi=Ai(Fi),Ni=Ai(ki),Hi=Ai(Di),Ti=Ai(Oi),Li=Ai(Bi),Ri=Mi;(Fi&&Ri(new Fi(new ArrayBuffer(1)))!=Ii||ki&&Ri(new ki)!=Ei||Di&&Ri(Di.resolve())!=Ci||Oi&&Ri(new Oi)!=ji||Bi&&Ri(new Bi)!=zi)&&(Ri=function(e){var t=Mi(e),r="[object Object]"==t?e.constructor:void 0,n=r?Ai(r):"";if(n)switch(n){case Pi:return Ii;case Ni:return Ei;case Hi:return Ci;case Ti:return ji;case Li:return zi}return t});var Vi=en,Wi=un,Yi=yn,qi=_i,Ui=Ri,Qi=F,Zi=zn.exports,Gi=Xn,Xi="[object Arguments]",Ji="[object Array]",Ki="[object Object]",eo=Object.prototype.hasOwnProperty;var to=function(e,t,r,n,i,o){var a=Qi(e),s=Qi(t),l=a?Ji:Ui(e),u=s?Ji:Ui(t),c=(l=l==Xi?Ki:l)==Ki,d=(u=u==Xi?Ki:u)==Ki,h=l==u;if(h&&Zi(e)){if(!Zi(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new Vi),a||Gi(e)?Wi(e,t,r,n,i,o):Yi(e,t,l,r,n,i,o);if(!(1&r)){var f=c&&eo.call(e,"__wrapped__"),p=d&&eo.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new Vi),i(g,m,r,n,o)}}return!!h&&(o||(o=new Vi),qi(e,t,r,n,i,o))},ro=R;var no=function e(t,r,n,i,o){return t===r||(null==t||null==r||!ro(t)&&!ro(r)?t!=t&&r!=r:to(t,r,n,i,e,o))},io=en,oo=no;var ao=X;var so=function(e){return e==e&&!ao(e)},lo=so,uo=vi;var co=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},ho=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new io;if(n)var h=n(u,c,l,e,t,d);if(!(void 0===h?oo(c,u,3,n,d):h))return!1}}return!0},fo=function(e){for(var t=uo(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,lo(i)]}return t},po=co;var go=Ct,mo=jn,yo=F,vo=Nn,bo=Hn,wo=zt;var $o=function(e,t){return null!=e&&t in Object(e)},xo=function(e,t,r){for(var n=-1,i=(t=go(t,e)).length,o=!1;++n<i;){var a=wo(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&bo(i)&&vo(a,i)&&(yo(e)||mo(e))};var So=no,_o=Tt,Fo=function(e,t){return null!=e&&xo(e,t,$o)},ko=G,Do=so,Oo=co,Bo=zt;var Mo=Nt;var Ao=function(e){return function(t){return null==t?void 0:t[e]}},Eo=function(e){return function(t){return Mo(t,e)}},Co=G,jo=zt;var zo=function(e){var t=fo(e);return 1==t.length&&t[0][2]?po(t[0][0],t[0][1]):function(r){return r===e||ho(r,e,t)}},Io=function(e,t){return ko(e)&&Do(t)?Oo(Bo(e),t):function(r){var n=_o(r,e);return void 0===n&&n===t?Fo(r,e):So(t,n,3)}},Po=function(e){return e},No=F,Ho=function(e){return Co(e)?Ao(jo(e)):Eo(e)};var To=function(e){return"function"==typeof e?e:null==e?Po:"object"==typeof e?No(e)?Io(e[0],e[1]):zo(e):Ho(e)},Lo=To,Ro=pi,Vo=vi;var Wo=function(e){return function(t,r,n){var i=Object(t);if(!Ro(t)){var o=Lo(r);t=Vo(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var Yo=/\s/;var qo=function(e){for(var t=e.length;t--&&Yo.test(e.charAt(t)););return t},Uo=/^\s+/;var Qo=function(e){return e?e.slice(0,qo(e)+1).replace(Uo,""):e},Zo=X,Go=Y,Xo=/^[-+]0x[0-9a-f]+$/i,Jo=/^0b[01]+$/i,Ko=/^0o[0-7]+$/i,ea=parseInt;var ta=function(e){if("number"==typeof e)return e;if(Go(e))return NaN;if(Zo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Qo(e);var r=Jo.test(e);return r||Ko.test(e)?ea(e.slice(2),r?2:8):Xo.test(e)?NaN:+e},ra=1/0;var na=function(e){return e?(e=ta(e))===ra||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ia=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},oa=To,aa=function(e){var t=na(e),r=t%1;return t==t?r?t-r:t:0},sa=Math.max;var la=Wo((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:aa(r);return i<0&&(i=sa(n+i,0)),ia(e,oa(t),i)})),ua=no;var ca=function(e,t){return ua(e,t)};let da=Da();const ha=e=>Sa(e,da);let fa=Da();ha.write=e=>Sa(e,fa);let pa=Da();ha.onStart=e=>Sa(e,pa);let ga=Da();ha.onFrame=e=>Sa(e,ga);let ma=Da();ha.onFinish=e=>Sa(e,ma);let ya=[];ha.setTimeout=(e,t)=>{let r=ha.now()+t,n=()=>{let e=ya.findIndex((e=>e.cancel==n));~e&&ya.splice(e,1),$a-=~e?1:0},i={time:r,handler:e,cancel:n};return ya.splice(va(r),0,i),$a+=1,_a(),i};let va=e=>~(~ya.findIndex((t=>t.time>e))||~ya.length);ha.cancel=e=>{pa.delete(e),ga.delete(e),ma.delete(e),da.delete(e),fa.delete(e)},ha.sync=e=>{xa=!0,ha.batchedUpdates(e),xa=!1},ha.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ha.onStart(r)}return n.handler=e,n.cancel=()=>{pa.delete(r),t=null},n};let ba="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ha.use=e=>ba=e,ha.now="undefined"!=typeof performance?()=>performance.now():Date.now,ha.batchedUpdates=e=>e(),ha.catch=console.error,ha.frameLoop="always",ha.advance=()=>{"demand"!==ha.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ka()};let wa=-1,$a=0,xa=!1;function Sa(e,t){xa?(t.delete(e),e(0)):(t.add(e),_a())}function _a(){wa<0&&(wa=0,"demand"!==ha.frameLoop&&ba(Fa))}function Fa(){~wa&&(ba(Fa),ha.batchedUpdates(ka))}function ka(){let e=wa;wa=ha.now();let t=va(wa);t&&(Oa(ya.splice(0,t),(e=>e.handler())),$a-=t),$a?(pa.flush(),da.flush(e?Math.min(64,wa-e):16.667),ga.flush(),fa.flush(),ma.flush()):wa=-1}function Da(){let e=new Set,t=e;return{add(r){$a+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>($a-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,$a-=t.size,Oa(t,(t=>t(r)&&e.add(t))),$a+=e.size,t=e)}}}function Oa(e,t){e.forEach((e=>{try{t(e)}catch(e){ha.catch(e)}}))}function Ba(){}const Ma={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Aa(e,t){if(Ma.arr(e)){if(!Ma.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ea=(e,t)=>e.forEach(t);function Ca(e,t,r){if(Ma.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const ja=e=>Ma.und(e)?[]:Ma.arr(e)?e:[e];function za(e,t){if(e.size){const r=Array.from(e);e.clear(),Ea(r,t)}}const Ia=(e,...t)=>za(e,(e=>e(...t))),Pa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Na,Ha,Ta=null,La=!1,Ra=Ba;var Va=Object.freeze({__proto__:null,get createStringInterpolator(){return Na},get to(){return Ha},get colors(){return Ta},get skipAnimation(){return La},get willAdvance(){return Ra},assign:e=>{e.to&&(Ha=e.to),e.now&&(ha.now=e.now),void 0!==e.colors&&(Ta=e.colors),null!=e.skipAnimation&&(La=e.skipAnimation),e.createStringInterpolator&&(Na=e.createStringInterpolator),e.requestAnimationFrame&&ha.use(e.requestAnimationFrame),e.batchedUpdates&&(ha.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ra=e.willAdvance),e.frameLoop&&(ha.frameLoop=e.frameLoop)}});const Wa=new Set;let Ya=[],qa=[],Ua=0;const Qa={get idle(){return!Wa.size&&!Ya.length},start(e){Ua>e.priority?(Wa.add(e),ha.onStart(Za)):(Ga(e),ha(Ja))},advance:Ja,sort(e){if(Ua)ha.onFrame((()=>Qa.sort(e)));else{const t=Ya.indexOf(e);~t&&(Ya.splice(t,1),Xa(e))}},clear(){Ya=[],Wa.clear()}};function Za(){Wa.forEach(Ga),Wa.clear(),ha(Ja)}function Ga(e){Ya.includes(e)||Xa(e)}function Xa(e){Ya.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ya,(t=>t.priority>e.priority)),0,e)}function Ja(e){const t=qa;for(let r=0;r<Ya.length;r++){const n=Ya[r];Ua=n.priority,n.idle||(Ra(n),n.advance(e),n.idle||t.push(n))}return Ua=0,qa=Ya,qa.length=0,Ya=t,Ya.length>0}const Ka="[-+]?\\d*\\.?\\d+",es=Ka+"%";function ts(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const rs=new RegExp("rgb"+ts(Ka,Ka,Ka)),ns=new RegExp("rgba"+ts(Ka,Ka,Ka,Ka)),is=new RegExp("hsl"+ts(Ka,es,es)),os=new RegExp("hsla"+ts(Ka,es,es,Ka)),as=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ss=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ls=/^#([0-9a-fA-F]{6})$/,us=/^#([0-9a-fA-F]{8})$/;function cs(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ds(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=cs(i,n,e+1/3),a=cs(i,n,e),s=cs(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function hs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fs(e){return(parseFloat(e)%360+360)%360/360}function ps(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function gs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ms(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ls.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ta&&void 0!==Ta[e]?Ta[e]:(t=rs.exec(e))?(hs(t[1])<<24|hs(t[2])<<16|hs(t[3])<<8|255)>>>0:(t=ns.exec(e))?(hs(t[1])<<24|hs(t[2])<<16|hs(t[3])<<8|ps(t[4]))>>>0:(t=as.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=us.exec(e))?parseInt(t[1],16)>>>0:(t=ss.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=is.exec(e))?(255|ds(fs(t[1]),gs(t[2]),gs(t[3])))>>>0:(t=os.exec(e))?(ds(fs(t[1]),gs(t[2]),gs(t[3]))|ps(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ys=(e,t,r)=>{if(Ma.fun(e))return e;if(Ma.arr(e))return ys({range:e,output:t,extrapolate:r});if(Ma.str(e.output[0]))return Na(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=o(u),n===-1/0?u=-u:i===1/0?u+=n:u=u*(i-n)+n;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};const vs=1.70158,bs=1.525*vs,ws=vs+1,$s=2*Math.PI/3,xs=2*Math.PI/4.5,Ss=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},_s={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ws*e*e*e-vs*e*e,easeOutBack:e=>1+ws*Math.pow(e-1,3)+vs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-bs)/2:(Math.pow(2*e-2,2)*((bs+1)*(2*e-2)+bs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$s),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$s)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*xs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*xs)/2+1,easeInBounce:e=>1-Ss(1-e),easeOutBounce:Ss,easeInOutBounce:e=>e<.5?(1-Ss(1-2*e))/2:(1+Ss(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fs.apply(this,arguments)}const ks=Symbol.for("FluidValue.get"),Ds=Symbol.for("FluidValue.observers"),Os=e=>Boolean(e&&e[ks]),Bs=e=>e&&e[ks]?e[ks]():e,Ms=e=>e[Ds]||null;function As(e,t){let r=e[Ds];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Es{constructor(e){if(this[ks]=void 0,this[Ds]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Cs(this,e)}}const Cs=(e,t)=>Is(e,ks,t);function js(e,t){if(e[ks]){let r=e[Ds];r||Is(e,Ds,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function zs(e,t){let r=e[Ds];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ds]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Is=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ps=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ns=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Hs=new RegExp(`(${Ps.source})(%|[a-z]+)`,"i"),Ts=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ls=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Rs=e=>{const[t,r]=Vs(e);if(!t||Pa())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ls.test(r)?Rs(r):r||e},Vs=e=>{const t=Ls.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Ws;const Ys=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,qs=e=>{Ws||(Ws=Ta?new RegExp(`(${Object.keys(Ta).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Bs(e).replace(Ls,Rs).replace(Ns,ms).replace(Ws,ms))),r=t.map((e=>e.match(Ps).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ys(Fs({},e,{output:t}))));return e=>{var r;const i=!Hs.test(t[0])&&(null==(r=t.find((e=>Hs.test(e))))?void 0:r.replace(Ps,""));let o=0;return t[0].replace(Ps,(()=>`${n[o++](e)}${i||""}`)).replace(Ts,Ys)}},Us="react-spring: ",Qs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Us}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Zs=Qs(console.warn);const Gs=Qs(console.warn);function Xs(e){return Ma.str(e)&&("#"==e[0]||/\d/.test(e)||!Pa()&&Ls.test(e)||e in(Ta||{}))}const Js=Pa()?s:l,Ks=()=>{const e=o(!1);return Js((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function el(){const e=u()[1],t=Ks();return()=>{t.current&&e(Math.random())}}const tl=e=>s(e,rl),rl=[];function nl(e){const t=o();return s((()=>{t.current=e})),t.current}const il=Symbol.for("Animated:node"),ol=e=>e&&e[il],al=(e,t)=>{return r=e,n=il,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},sl=e=>e&&e[il]&&e[il].getPayload();class ll{constructor(){this.payload=void 0,al(this,this)}getPayload(){return this.payload||[]}}class ul extends ll{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ma.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ul(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ma.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ma.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class cl extends ul{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ys({output:[e,e]})}static create(e){return new cl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ma.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ys({output:[this.getValue(),e]})),this._value=0,super.reset()}}const dl={dependencies:null};class hl extends ll{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ca(this.source,((r,n)=>{var i;(i=r)&&i[il]===i?t[n]=r.getValue(e):Os(r)?t[n]=Bs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ea(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ca(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){dl.dependencies&&Os(e)&&dl.dependencies.add(e);const t=sl(e);t&&Ea(t,(e=>this.add(e)))}}class fl extends hl{constructor(e){super(e)}static create(e){return new fl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(pl)),!0)}}function pl(e){return(Xs(e)?cl:ul).create(e)}function gl(e){const t=ol(e);return t?t.constructor:Ma.arr(e)?fl:Xs(e)?cl:ul}function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ml.apply(this,arguments)}const yl=(e,t)=>{const r=!Ma.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const l=o(null),u=r&&d((e=>{l.current=function(e,t){e&&(Ma.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,h]=function(e,t){const r=new Set;dl.dependencies=r,e.style&&(e=ml({},e,{style:t.createAnimatedStyle(e.style)}));return e=new hl(e),dl.dependencies=null,[e,r]}(i,t),f=el(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new vl(p,h),m=o();Js((()=>(m.current=g,Ea(h,(e=>js(e,g))),()=>{m.current&&(Ea(m.current.deps,(e=>zs(e,m.current))),ha.cancel(m.current.update))}))),s(p,[]),tl((()=>()=>{const e=m.current;Ea(e.deps,(t=>zs(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,ml({},y,{ref:u}))}))};class vl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ha.write(this.update)}}const bl=Symbol.for("AnimatedComponent"),wl=e=>Ma.str(e)?e:e&&Ma.str(e.displayName)?e.displayName:Ma.fun(e)&&e.name||null;function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$l.apply(this,arguments)}function xl(e,...t){return Ma.fun(e)?e(...t):e}const Sl=(e,t)=>!0===e||!!(t&&e&&(Ma.fun(e)?e(t):ja(e).includes(t))),_l=(e,t)=>Ma.obj(e)?t&&e[t]:e,Fl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,kl=e=>e,Dl=(e,t=kl)=>{let r=Ol;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ma.und(r)||(n[i]=r)}return n},Ol=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Bl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ml(e){const t=function(e){const t={};let r=0;if(Ca(e,((e,n)=>{Bl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ca(e,((e,n)=>n in t||(r[n]=e))),r}return $l({},e)}function Al(e){return e=Bs(e),Ma.arr(e)?e.map(Al):Xs(e)?Va.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function El(e){return Ma.fun(e)||Ma.arr(e)&&Ma.obj(e[0])}const Cl=$l({},{tension:170,friction:26},{mass:1,damping:1,easing:_s.linear,clamp:!1});class jl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Cl)}}function zl(e,t){if(Ma.und(t.decay)){const r=!Ma.und(t.tension)||!Ma.und(t.friction);!r&&Ma.und(t.frequency)&&Ma.und(t.damping)&&Ma.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Il=[];class Pl{constructor(){this.changed=!1,this.values=Il,this.toValues=null,this.fromValues=Il,this.to=void 0,this.from=void 0,this.config=new jl,this.immediate=!1}}function Nl(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Sl(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Ma.und(r.pause)||(i.paused=Sl(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||Sl(e,t)),u=xl(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-ha.now()}function f(){u>0&&!Va.skipAnimation?(i.delayed=!0,c=ha.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start($l({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Hl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Rl(e.get()):t.every((e=>e.noop))?Tl(e.get()):Ll(e.get(),t.every((e=>e.finished))),Tl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ll=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Rl=e=>({value:e,cancelled:!0,finished:!1});function Vl(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const u=Dl(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&Rl(n)||i!==r.asyncId&&Ll(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Yl,a=new ql;return(async()=>{if(Va.skipAnimation)throw Wl(r),a.result=Ll(n,!1),d(a),a;f(o);const s=Ma.obj(e)?$l({},e):$l({},t,{to:e});s.parentId=i,Ca(u,((e,t)=>{Ma.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Va.skipAnimation)return Wl(r),Ll(n,!1);try{let t;t=Ma.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=Ll(n.get(),!0,!1)}catch(e){if(e instanceof Yl)g=e.result;else{if(!(e instanceof ql))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ma.fun(a)&&ha.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Wl(e,t){za(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Yl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ql extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ul=e=>e instanceof Zl;let Ql=1;class Zl extends Es{constructor(...e){super(...e),this.id=Ql++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ol(this);return e&&e.getValue()}to(...e){return Va.to(this,e)}interpolate(...e){return Zs(`${Us}The "interpolate" function is deprecated in v9 (use "to" instead)`),Va.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){As(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Qa.sort(this),As(this,{type:"priority",parent:this,priority:e})}}const Gl=Symbol.for("SpringPhase"),Xl=e=>(1&e[Gl])>0,Jl=e=>(2&e[Gl])>0,Kl=e=>(4&e[Gl])>0,eu=(e,t)=>t?e[Gl]|=3:e[Gl]&=-3,tu=(e,t)=>t?e[Gl]|=4:e[Gl]&=-5;class ru extends Zl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Pl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ma.und(e)||!Ma.und(t)){const r=Ma.obj(e)?$l({},e):$l({},t,{from:e});Ma.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Jl(this)||this._state.asyncTo)||Kl(this)}get goal(){return Bs(this.animation.to)}get velocity(){const e=ol(this);return e instanceof ul?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xl(this)}get isAnimating(){return Jl(this)}get isPaused(){return Kl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=sl(n.to);!a&&Os(n.to)&&(o=ja(Bs(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==cl?1:a?a[l].lastPosition:o[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ma.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(Ma.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Ma.und(n),f=r==u?s.v0>0:r<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*n,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(u-r),a=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=ol(this),l=s.getValue();if(t){const e=Bs(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ha.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Jl(this)){const{to:e,config:t}=this.animation;ha.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ma.und(e)?(r=this.queue||[],this.queue=[]):r=[Ma.obj(e)?e:$l({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Hl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Wl(this._state,e&&this._lastCallId),ha.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ma.obj(r)?r[t]:r,(null==r||El(r))&&(r=void 0),n=Ma.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Xl(this)||(e.reverse&&([r,n]=[n,r]),n=Bs(n),Ma.und(n)?ol(this)||this._set(r):this._set(n)),i}_update(e,t){let r=$l({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Dl(r,((e,t)=>/^on/.test(t)?_l(e,n):e))),uu(this,r,"onProps"),cu(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Nl(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{Kl(this)||(tu(this,!0),Ia(a.pauseQueue),cu(this,"onPause",Ll(this,nu(this,this.animation.to)),this))},resume:()=>{Kl(this)&&(tu(this,!1),Jl(this)&&this._resume(),Ia(a.resumeQueue),cu(this,"onResume",Ll(this,nu(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=iu(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Rl(this));const n=!Ma.und(e.to),i=!Ma.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Rl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||n||t.default&&!Ma.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Aa(d,u);h&&(s.from=d),d=Bs(d);const f=!Aa(c,l);f&&this._focus(c);const p=El(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(zl(r=$l({},r),t),t=$l({},r,t)),zl(e,t),Object.assign(e,t);for(const t in Cl)null==e[t]&&(e[t]=Cl[t]);let{mass:n,frequency:i,damping:o}=e;Ma.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(g,xl(t.config,o),t.config!==a.config?xl(a.config,o):void 0);let v=ol(this);if(!v||Ma.und(c))return r(Ll(this,!0));const b=Ma.und(t.reset)?i&&!t.default:!Ma.und(d)&&Sl(t.reset,o),w=b?d:this.get(),$=Al(c),x=Ma.num($)||Ma.arr($)||Xs($),S=!p&&(!x||Sl(a.immediate||t.immediate,o));if(f){const e=gl(c);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Os(c),k=!1;if(!F){const e=b||!Xl(this)&&h;(f||e)&&(k=Aa(Al(w),$),F=!k),(Aa(s.immediate,S)||S)&&Aa(g.decay,m)&&Aa(g.velocity,y)||(F=!0)}if(k&&Jl(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Os(l))&&(s.values=v.getPayload(),s.toValues=Os(c)?null:_==cl?[1]:ja($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),F)){const{onRest:e}=s;Ea(lu,(e=>uu(this,t,e)));const n=Ll(this,nu(this,l));Ia(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&ha.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?xl(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),p?r(Vl(t.to,t,this._state,this)):F?this._start():Jl(this)&&!f?this._pendingCalls.add(r):r(Tl(w))}_focus(e){const t=this.animation;e!==t.to&&(Ms(this)&&this._detach(),t.to=e,Ms(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Os(t)&&(js(t,this),Ul(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Os(e)&&zs(e,this)}_set(e,t=!0){const r=Bs(e);if(!Ma.und(r)){const e=ol(this);if(!e||!Aa(r,e.getValue())){const n=gl(r);e&&e.constructor==n?e.setValue(r):al(this,n.create(r)),e&&ha.batchedUpdates((()=>{this._onChange(r,t)}))}}return ol(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,cu(this,"onStart",Ll(this,nu(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),xl(this.animation.onChange,e,this)),xl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ol(this).reset(Bs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Jl(this)||(eu(this,!0),Kl(this)||this._resume())}_resume(){Va.skipAnimation?this.finish():Qa.start(this)}_stop(e,t){if(Jl(this)){eu(this,!1);const r=this.animation;Ea(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),As(this,{type:"idle",parent:this});const n=t?Rl(this.get()):Ll(this.get(),nu(this,null!=e?e:r.to));Ia(this._pendingCalls,n),r.changed&&(r.changed=!1,cu(this,"onRest",n,this))}}}function nu(e,t){const r=Al(t);return Aa(Al(e.get()),r)}function iu(e,t=e.loop,r=e.to){let n=xl(t);if(n){const i=!0!==n&&Ml(n),o=(i||e).reverse,a=!i||i.reset;return ou($l({},e,{loop:t,default:!1,pause:void 0,to:!o||El(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function ou(e){const{to:t,from:r}=e=Ml(e),n=new Set;return Ma.obj(t)&&su(t,n),Ma.obj(r)&&su(r,n),e.keys=n.size?Array.from(n):null,e}function au(e){const t=ou(e);return Ma.und(t.default)&&(t.default=Dl(t)),t}function su(e,t){Ca(e,((e,r)=>null!=e&&t.add(r)))}const lu=["onStart","onRest","onChange","onPause","onResume"];function uu(e,t,r){e.animation[r]=t[r]!==Fl(t,r)?_l(t[r],e.key):void 0}function cu(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const du=["onStart","onChange","onRest"];let hu=1;class fu{constructor(e,t){this.id=hu++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start($l({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ma.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ou(e)),this}start(e){let{queue:t}=this;return e?t=ja(e).map(ou):this.queue=[],this._flush?this._flush(this,t):(wu(this,t),pu(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ea(ja(t),(t=>r[t].stop(!!e)))}else Wl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ma.und(e))this.start({pause:!0});else{const t=this.springs;Ea(ja(e),(e=>t[e].pause()))}return this}resume(e){if(Ma.und(e))this.start({pause:!1});else{const t=this.springs;Ea(ja(e),(e=>t[e].resume()))}return this}each(e){Ca(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,za(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&za(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,za(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ha.onFrame(this._onFrame)}}function pu(e,t){return Promise.all(t.map((t=>gu(e,t)))).then((t=>Hl(e,t)))}async function gu(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Ma.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Ma.arr(i)||Ma.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Ea(du,(r=>{const n=t[r];if(Ma.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ia(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Fl(t,"cancel");(c||f&&d.asyncId)&&h.push(Nl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ba,resume:Ba,start(t,r){f?(Wl(d,e._lastAsyncId),r(Rl(e))):(t.onRest=s,r(Vl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Hl(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=iu(t,a,i);if(r)return wu(e,[r]),gu(e,r,!0)}return l&&ha.batchedUpdates((()=>l(p,e,e.item))),p}function mu(e,t){const r=$l({},e.springs);return t&&Ea(ja(t),(e=>{Ma.und(e.keys)&&(e=ou(e)),Ma.obj(e.to)||(e=$l({},e,{to:void 0})),bu(r,e,(e=>vu(e)))})),yu(e,r),r}function yu(e,t){Ca(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,js(t,e))}))}function vu(e,t){const r=new ru;return r.key=e,t&&js(r,t),r}function bu(e,t,r){t.keys&&Ea(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function wu(e,t){Ea(t,(t=>{bu(e.springs,t,(t=>vu(t,e)))}))}const $u=["children"],xu=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,$u);const i=h(Su),a=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[r]=u((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=r;return s((()=>{n.current=a,i==r&&(r.inputs=r.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Su;return n.createElement(c,{value:r},t)},Su=(_u=xu,Fu={},Object.assign(_u,n.createContext(Fu)),_u.Provider._context=_u,_u.Consumer._context=_u,_u);var _u,Fu;xu.Provider=Su.Provider,xu.Consumer=Su.Consumer;const ku=()=>{const e=[],t=function(t){Gs(`${Us}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ea(e,((e,i)=>{if(Ma.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ea(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ea(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ea(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ea(e,((e,n)=>{if(Ma.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ea(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ea(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ma.fun(e)?e(r,t):e};return t._getProps=r,t};function Du(e,t){const r=Ma.fun(e),[[n],i]=function(e,t,r){const n=Ma.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?ku():void 0),[]),a=o(0),s=el(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=mu(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?pu(e,t):new Promise((n=>{yu(e,r),l.queue.push((()=>{n(pu(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=nl(e)||0;function p(e,r){for(let i=e;i<r;i++){const e=u.current[i]||(u.current[i]=new fu(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=au(r))}}f((()=>{Ea(u.current.slice(e,d),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=u.current.map(((e,t)=>mu(e,c[t]))),m=h(xu),y=nl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Js((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Ea(e,(e=>e()))),Ea(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),tl((()=>()=>{Ea(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>$l({},e)));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}let Ou;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ou||(Ou={}));class Bu extends Zl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ys(...t);const r=this._get(),n=gl(r);al(this,n.create(r))}advance(e){const t=this._get();Aa(t,this.get())||(ol(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Au(this._active)&&Eu(this)}_get(){const e=Ma.arr(this.source)?this.source.map(Bs):ja(Bs(this.source));return this.calc(...e)}_start(){this.idle&&!Au(this._active)&&(this.idle=!1,Ea(sl(this),(e=>{e.done=!1})),Va.skipAnimation?(ha.batchedUpdates((()=>this.advance())),Eu(this)):Qa.start(this))}_attach(){let e=1;Ea(ja(this.source),(t=>{Os(t)&&js(t,this),Ul(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ea(ja(this.source),(e=>{Os(e)&&zs(e,this)})),this._active.clear(),Eu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ja(this.source).reduce(((e,t)=>Math.max(e,(Ul(t)?t.priority:0)+1)),0))}}function Mu(e){return!1!==e.idle}function Au(e){return!e.size||Array.from(e).every(Mu)}function Eu(e){e.idle||(e.idle=!0,Ea(sl(e),(e=>{e.done=!0})),As(e,{type:"idle",parent:e}))}function Cu(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}Va.assign({createStringInterpolator:qs,to:(e,t)=>new Bu(e,t)});const ju=["style","children","scrollTop","scrollLeft","viewBox"],zu=/^--/;function Iu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||zu.test(e)||Nu.hasOwnProperty(e)&&Nu[e]?(""+t).trim():t+"px"}const Pu={};let Nu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Hu=["Webkit","Ms","Moz","O"];Nu=Object.keys(Nu).reduce(((e,t)=>(Hu.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Nu);const Tu=["x","y","z"],Lu=/^(matrix|translate|scale|rotate|skew)/,Ru=/^(translate)/,Vu=/^(rotate|skew)/,Wu=(e,t)=>Ma.num(e)&&0!==e?e+t:e,Yu=(e,t)=>Ma.arr(e)?e.every((e=>Yu(e,t))):Ma.num(e)?e===t:parseFloat(e)===t;class qu extends hl{constructor(e){let{x:t,y:r,z:n}=e,i=Cu(e,Tu);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Wu(e,"px"))).join(",")})`,Yu(e,0)]))),Ca(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Lu.test(t)){if(delete i[t],Ma.und(e))return;const r=Ru.test(t)?"px":Vu.test(t)?"deg":"";o.push(ja(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Wu(i,r)})`,Yu(i,0)]:e=>[`${t}(${e.map((e=>Wu(e,r))).join(",")})`,Yu(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Uu(o,a)),super(i)}}class Uu extends Es{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ea(this.inputs,((r,n)=>{const i=Bs(r[0]),[o,a]=this.transforms[n](Ma.arr(i)?i:r.map(Bs));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ea(this.inputs,(e=>Ea(e,(e=>Os(e)&&js(e,this)))))}observerRemoved(e){0==e&&Ea(this.inputs,(e=>Ea(e,(e=>Os(e)&&zs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),As(this,e)}}const Qu=["scrollTop","scrollLeft"];Va.assign({batchedUpdates:b,createStringInterpolator:qs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Zu=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new hl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=wl(e)||"Anonymous";return(e=Ma.str(e)?o[e]||(o[e]=yl(e,i)):e[bl]||(e[bl]=yl(e,i))).displayName=`Animated(${t})`,e};return Ca(e,((t,r)=>{Ma.arr(e)&&(r=wl(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=n,u=Cu(n,ju),c=Object.values(u),d=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Pu[t]||(Pu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=Iu(t,i[t]);zu.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new qu(e),getComponentProps:e=>Cu(e,Qu)}),Gu=Zu.animated,Xu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ju=e=>Object.keys(Xu).reduce(((t,r)=>{const n=Xu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ku=Ju("max-width"),ec=(Ju("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),tc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rc=p.div`
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
    animation: ${tc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,nc=p(rc)`
    animation-delay: -0.45s;
`,ic=p(rc)`
    animation-delay: -0.3s;
`,oc=p(rc)`
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

                    ${Ku.mobileL} {
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

                    ${Ku.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${ir("H4","semibold")}
                    }

                    ${Ku.mobileS} {
                        height: auto;
                    }
                `}
`;const ac=p((({color:r,className:n,size:i=18})=>e(ec,{className:n,$size:i,$color:r,children:[t(rc,{id:"inner1",$size:i-2,$borderWidth:2}),t(nc,{id:"inner2",$size:i-2,$borderWidth:2}),t(ic,{id:"inner3",$size:i-2,$borderWidth:2}),t(oc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=qt.Primary(e);break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,sc=p.div`
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
`,lc=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,uc=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?qt.Neutral[4]:qt.Neutral[8]};
`,cc=p(Gu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,dc=p.ul`
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

    ${Ku.mobileL} {
        max-height: 15rem;
    }
`,hc=p.li`
    :hover,
    :focus,
    :active {
        background: ${qt.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${qt.Accent.Light[5]};
            `}}
`,fc=p.button`
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
        outline-color: ${qt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,pc=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,gc=p.div`
    ${ir("Body","regular")}
    color: ${qt.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&pc}
`,mc=p.div`
    color: ${qt.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&pc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${ir("BodySmall","semibold")}
                `:g`
                    ${ir("Body","regular")}
                `}
`,yc=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${gc} {
                        display: inline;
                    }

                    ${mc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,vc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,bc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,wc=p((({className:r,checked:n,disabled:i,onChange:o,onKeyPress:a,displaySize:l="default",...c})=>{const[d,h]=u(n);s((()=>{h(n)}),[n]);const f=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),a&&a(t)}};return e(sc,{selected:d,disabled:i,className:r,"data-testid":"checkbox",$displaySize:l,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:f,children:[t(lc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:i,checked:d,...c}),d&&t(uc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:l})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,$c=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,xc=p.button`
    ${ir("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${qt.Primary(e)};\n\t\t`}
`,Sc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,_c=p(ar.Body)``,Fc=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${qt.Validation.Red.Icon};
`,kc=p.button`
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
`,Dc=i.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(kc,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),Oc=p.li`
    background: ${qt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Bc=p(hr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Mc=p(x)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
`,Ac=p(Dc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
    cursor: pointer;
`,Ec=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${qt.Neutral[3]};
`,Cc=c(((r,n)=>{const{onClear:i,...o}=r;return e(Oc,{children:[t(Mc,{}),t(Bc,{ref:n,...o}),o.value&&t(Ac,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:t(Ec,{})})]},"search")})),jc=({listItems:n,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:c,visible:d,enableSearch:h,searchPlaceholder:f="Search",onSearch:p,searchFunction:g,onDismiss:m,disableItemFocus:y,multiSelect:v,selectedItems:b,onSelectAll:w,onRetry:$,itemsLoadState:x="success",itemTruncationType:S="end",itemMaxLines:_=2,labelDisplayType:F="inline",renderListItem:k,onBlur:D,hideNoResultsDisplay:O,renderCustomCallToAction:B,...M})=>{const[A,E]=u(0),[C,j]=u(""),[z,I]=u(n),[P,N]=u(0),H=Du({height:P}),T=o(),L=o(),R=o([]),V=o(),W=o(),Y=o(A),q=o(z),U=e=>{Y.current=e,E(e)},Q=e=>{q.current=e,I(e)};s((()=>(document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)})),[]),s((()=>{J(C)}),[C]),s((()=>{if(j(""),d){if(setTimeout((()=>{N(K())})),y)return;V&&V.current?(V.current.focus(),U(-1)):R.current[A]&&R.current[A].focus()}else N(0)}),[d]),s((()=>{if(d){const e=K();N(e)}}),[z,x]),s((()=>{Q(n),j(""),U(0)}),[n]);const Z=e=>i?i(e):e.toString(),G=e=>{if("inline"!==F)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return jr.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},X=e=>!!la(b,(t=>ca(t,e))),J=e=>{if(""===e)Q(n);else if(g){const t=g(e);Q(t)}else{const t=n.filter((t=>{const r=Z(t),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(e.trim().toLowerCase())||r.secondaryLabel.includes(e.trim().toLowerCase()):n.includes(e.trim().toLowerCase())}));Q(t)}},K=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(W.current?W.current.getBoundingClientRect().height:0),ee=e=>{if(T&&T.current.contains(e.target))switch(e.code){case"ArrowDown":if(Y.current<q.current.length-1){const e=Y.current+1;R.current[e].focus(),U(e)}break;case"ArrowUp":if(Y.current>0){const e=Y.current-1;R.current[e].focus(),U(Y.current-1)}break;case"Escape":m&&m(!0)}},te=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},re=e=>{const t=e.target.value;j(t),p&&p()},ne=()=>{j(""),V.current.focus(),p&&p()},ie=()=>{$&&$()},oe=()=>{D&&D()},ae=n=>e(r,{children:[t(vc,{$maxLines:_,"aria-hidden":!0,children:n}),t(bc,{$maxLines:_,"aria-hidden":!0,children:n})]}),se=r=>{const n=Z(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=G(i),s=o&&G(o);return e(yc,{$labelDisplayType:a||s?"next-line":F,children:[t(gc,{$truncateType:S,$maxLines:_,"aria-label":i,children:"middle"===S&&a?ae(i):i}),o&&t(mc,{$truncateType:S,$maxLines:_,$labelDisplayType:F,"aria-label":o,children:"middle"===S&&s?ae(o):o})]})},le=()=>{if(!$||$&&"success"===x)return z.map(((r,n)=>t(hc,{$checked:X(r)&&!v,children:e(fc,{$hasNextLineLabel:"next-line"===F&&z.length>0&&i&&"string"!=typeof i(z[0]),onClick:e=>{te(e,r)},ref:e=>R.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,$multiSelect:v,onBlur:oe,children:[v&&t(wc,{checked:X(r),displaySize:"small"}),k?k(r,{selected:X(r)}):se(r)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(r,n))))},ue=()=>{if(v&&z.length>0&&!C&&"success"===x)return t($c,{children:t(xc,{onClick:w,type:"button",children:0===b.length?"Select all":"Unselect all"})},"selectAll")},ce=()=>{if(!O&&(C||!h)&&0===z.length&&"success"===x)return e(Sc,{"data-testid":"list-no-results",children:[t(Fc,{"data-testid":"no-result-icon"}),t(_c,{children:"No results found."})]},"noResults")},de=()=>{if($&&"loading"===x)return e(Sc,{"data-testid":"list-loading",children:[t(ac,{$buttonStyle:"secondary",size:24}),t(_c,{children:"Loading..."})]},"loading")},he=()=>{if($&&"fail"===x)return e(Sc,{"data-testid":"list-fail",children:[t(Fc,{"data-testid":"load-error-icon"}),t(_c,{children:"Failed to load."}),t(xc,{onClick:ie,type:"button",children:"Try again."})]},"noResults")};return t(r,{children:e(cc,{style:H,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:T,children:[(()=>{if(d)return e(dc,{ref:L,"data-testid":"dropdown-list",width:c,role:"list",...M,children:[(h||g)&&"success"===x?t(Cc,{ref:V,onChange:re,value:C,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ne}):null,ue(),ce(),de(),he(),le()]})})(),(()=>{if(d&&B)return t("div",{ref:W,"data-testid":"custom-cta",children:B(m,z)})})()]})})},zc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ic=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Pc=g`
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
        outline: 2px solid ${qt.Accent.Light[3]};
    }
`,Nc=p.button`
    ${Pc}
    cursor: pointer;
`;p.div`
    ${Pc}
`;const Hc=m`
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
`,Tc=p.div`
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
                animation: ${Hc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${qt.Neutral[6](e)};

                ${Nc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Nc} {
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
    transition: ${zc};
    margin-left: 1rem;
`,p(S)`
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
`;const Lc=p(ar.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Lc)`
    color: ${qt.Neutral[3]};
`;const Rc=({children:e,show:r,error:n,disabled:i,testId:a,onBlur:l,readOnly:u})=>{const c=o();return((e,t,r="window",n)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(c&&c.current.contains(e.target))return;r&&l()}}),"document"),t(Ic,{children:t(Tc,{ref:c,error:n&&!r,disabled:i,$readOnly:u,expanded:r,"data-testid":a,children:e})})},Vc=p.div`
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
`,Wc=p(Nc)`
    padding: 0;
    width: auto;
`,Yc=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,qc=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${zc};
    margin: 0 0.75rem;
`,Uc=p(S)`
    color: ${qt.Neutral[3]};
    height: ${er.Body.fontSize}rem;
    width: ${er.Body.fontSize}rem;
    vertical-align: bottom;
`,Qc=p.div`
    display: flex;
    flex: 1 1 auto;
`,Zc=p(ar.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Gc=p(Zc)`
    color: ${qt.Neutral[3]};
`,Xc=p.div`
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
`,Jc=i.forwardRef((({addon:n,error:i,onChange:a,readOnly:l,className:c,onBlur:d,...h},f)=>{const{placeholder:p,options:g,enableSearch:m,searchFunction:y,searchPlaceholder:v,valueExtractor:b,listExtractor:w,displayValueExtractor:$,selectedOption:x,onSelectOption:S,onHideOptions:_,onShowOptions:F,"data-selector-testid":k}=n.attributes,{position:D}=n,[O,B]=u(x),[M,A]=u(!1),E=o();s((()=>{B(x)}),[x]);const C=()=>$?$(O):b?b(O):O.toString(),j=e=>{!e&&_&&_(),e&&F&&F()},z=e=>{e.preventDefault(),h.disabled||(A(!M),j(!M))},I=(e,t)=>{B(e),A(!1),j(!1),E&&E.current.focus(),S&&S(e,t)},P=e=>{a&&a(e)},N=()=>{d&&d()},H=()=>{A(!1),j(!1),E&&E.current.focus()};return e(Rc,{className:c,show:M,error:i&&!M,disabled:h.disabled,readOnly:l,onBlur:()=>{A(!1),j(!1),N()},children:[e(Vc,{$expanded:M,$readOnly:l,$position:D,children:[l?O?t(Yc,{children:t(Zc,{"data-testid":"selector-label",children:C()})}):null:t(Wc,{ref:E,type:"button",disabled:h.disabled,"data-testid":k||"addon-selector",onClick:z,children:e(r,{children:[e(Qc,{children:[p&&!O&&t(Gc,{children:p}),O&&t(Zc,{"data-testid":"selector-label",children:C()})]}),t(qc,{$expanded:M,children:t(Uc,{})})]})}),t(Xc,{$readOnly:l,$position:D}),t(Lr,{ref:f,...h,readOnly:l,error:i,onChange:P,"data-testid":h["data-testid"]||"input",onBlur:N})]}),g&&g.length>0?t(jc,{listItems:g,selectedItems:x?[x]:[],onSelectItem:I,valueExtractor:b,listExtractor:w,visible:M,enableSearch:m,searchFunction:y,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:N,onDismiss:H}):null]})})),Kc=i.forwardRef((({addon:r,error:n,className:i,...o},a)=>{const s=()=>t(Tr,{disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:i,children:t(Lr,{ref:a,...o,"data-testid":"input"})});if(!r)return s();{const{type:l="label",position:u="left"}=r,{allowClear:c}=o;switch(l){case"list":{const e=r.attributes;return e.options&&e.options.length>0?t(Jc,{ref:a,addon:r,error:n,className:i,...o}):s()}case"custom":{const l=r.attributes;return l.children?e(dr,{$error:n,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:u,className:i,children:[t(Rr,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:u,children:l.children}),t(Lr,{ref:a,...o,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}default:{const l=r.attributes;return l.value?e(dr,{$disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:u,className:i,children:[t(Rr,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:u,children:l.value}),t(Lr,{ref:a,...o,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}}}}));export{Kc as InputGroup};
//# sourceMappingURL=index.js.map
