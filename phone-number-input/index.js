import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useRef as i,useImperativeHandle as o,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as m,keyframes as g}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as v}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as x}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k=Array.isArray,F="object"==typeof _&&_&&_.Object===Object&&_,B=F,O="object"==typeof self&&self&&self.Object===Object&&self,D=B||O||Function("return this")(),M=D.Symbol,A=M,C=Object.prototype,z=C.hasOwnProperty,j=C.toString,E=A?A.toStringTag:void 0;var P=function(e){var t=z.call(e,E),r=e[E];try{e[E]=void 0;var n=!0}catch(e){}var a=j.call(e);return n&&(t?e[E]=r:delete e[E]),a},N=Object.prototype.toString;var I=P,T=function(e){return N.call(e)},H=M?M.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?I(e):T(e)};var R=function(e){return null!=e&&"object"==typeof e},V=L,W=R;var Y=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==V(e)},q=k,U=Y,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Z=function(e,t){if(q(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!U(e))||(Q.test(e)||!G.test(e)||null!=t&&e in Object(t))};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},K=L,J=X;var ee,te=function(e){if(!J(e))return!1;var t=K(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=D["__core-js_shared__"],ne=(ee=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ae=function(e){return!!ne&&ne in e},ie=Function.prototype.toString;var oe=function(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=te,le=ae,ue=X,ce=oe,de=/^\[object .+?Constructor\]$/,he=Function.prototype,fe=Object.prototype,pe=he.toString,me=fe.hasOwnProperty,ge=RegExp("^"+pe.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ye=function(e){return!(!ue(e)||le(e))&&(se(e)?ge:de).test(ce(e))},be=function(e,t){return null==e?void 0:e[t]};var ve=function(e,t){var r=be(e,t);return ye(r)?r:void 0},we=ve(Object,"create"),$e=we;var xe=function(){this.__data__=$e?$e(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=we,ke=Object.prototype.hasOwnProperty;var Fe=function(e){var t=this.__data__;if(_e){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ke.call(t,e)?t[e]:void 0},Be=we,Oe=Object.prototype.hasOwnProperty;var De=we;var Me=xe,Ae=Se,Ce=Fe,ze=function(e){var t=this.__data__;return Be?void 0!==t[e]:Oe.call(t,e)},je=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=De&&void 0===t?"__lodash_hash_undefined__":t,this};function Ee(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ee.prototype.clear=Me,Ee.prototype.delete=Ae,Ee.prototype.get=Ce,Ee.prototype.has=ze,Ee.prototype.set=je;var Pe=Ee;var Ne=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t},Te=Ie;var He=function(e,t){for(var r=e.length;r--;)if(Te(e[r][0],t))return r;return-1},Le=He,Re=Array.prototype.splice;var Ve=He;var We=He;var Ye=He;var qe=Ne,Ue=function(e){var t=this.__data__,r=Le(t,e);return!(r<0)&&(r==t.length-1?t.pop():Re.call(t,r,1),--this.size,!0)},Ge=function(e){var t=this.__data__,r=Ve(t,e);return r<0?void 0:t[r][1]},Qe=function(e){return We(this.__data__,e)>-1},Ze=function(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Xe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xe.prototype.clear=qe,Xe.prototype.delete=Ue,Xe.prototype.get=Ge,Xe.prototype.has=Qe,Xe.prototype.set=Ze;var Ke=Xe,Je=ve(D,"Map"),et=Pe,tt=Ke,rt=Je;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var at=function(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map},it=at;var ot=at;var st=at;var lt=at;var ut=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},ct=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return ot(this,e).get(e)},ht=function(e){return st(this,e).has(e)},ft=function(e,t){var r=lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=ut,pt.prototype.delete=ct,pt.prototype.get=dt,pt.prototype.has=ht,pt.prototype.set=ft;var mt=pt,gt=mt;function yt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(yt.Cache||gt),r}yt.Cache=gt;var bt=yt;var vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,$t=function(e){var t=bt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(vt,(function(e,r,n,a){t.push(n?a.replace(wt,"$1"):r||e)})),t}));var xt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},St=k,_t=Y,kt=M?M.prototype:void 0,Ft=kt?kt.toString:void 0;var Bt=function e(t){if("string"==typeof t)return t;if(St(t))return xt(t,e)+"";if(_t(t))return Ft?Ft.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Ot=Bt;var Dt=k,Mt=Z,At=$t,Ct=function(e){return null==e?"":Ot(e)};var zt=function(e,t){return Dt(e)?e:Mt(e,t)?[e]:At(Ct(e))},jt=Y;var Et=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Pt=zt,Nt=Et;var It=function(e,t){for(var r=0,n=(t=Pt(t,e)).length;null!=e&&r<n;)e=e[Nt(t[r++])];return r&&r==n?e:void 0},Tt=It;var Ht=function(e,t,r){var n=null==e?void 0:Tt(e,t);return void 0===n?r:n};const Lt=(e,t,r)=>t?Ht(r,t)||Ht(e,t):r||e,Rt=(e,t)=>{const r=t||e.defaultValue;return Ht(e.collections,r)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const r=t.theme,n=Rt(Wt,r[Vt.colorScheme]);return r.options&&r.options.color?Lt(n,e,r.options.color):Lt(n,e)},qt={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},Ut={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${qt.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 6px 1px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${qt.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Gt=e=>t=>{const r=t.theme,n=Rt(Ut,r[Vt.designTokenScheme]);return r.options?.designToken?Lt(n,e,r.options.designToken):Lt(n,e)},Qt=Gt("InputBoxShadow"),Zt=Gt("InputErrorBoxShadow"),Xt=(Gt("ElevationBoxShadow"),Gt("Table.Header"),Gt("Table.Cell.Primary"),Gt("Table.Cell.Secondary"),Gt("Table.Cell.Selected"),Gt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Kt={collections:{base:{D1:{fontFamily:Xt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Jt=e=>t=>{const r=t.theme,n=Rt(Kt,r[Vt.textStyleScheme]);return r.options&&r.options.textStyle?Lt(n,e,r.options.textStyle):Lt(n,e)},er={D1:{fontFamily:Jt("D1.fontFamily"),fontSize:Jt("D1.fontSize"),fontWeight:Jt("D1.fontWeight"),lineHeight:Jt("D1.lineHeight"),letterSpacing:Jt("D1.letterSpacing")},D2:{fontFamily:Jt("D2.fontFamily"),fontSize:Jt("D2.fontSize"),fontWeight:Jt("D2.fontWeight"),lineHeight:Jt("D2.lineHeight"),letterSpacing:Jt("D2.letterSpacing")},D3:{fontFamily:Jt("D3.fontFamily"),fontSize:Jt("D3.fontSize"),fontWeight:Jt("D3.fontWeight"),lineHeight:Jt("D3.lineHeight"),letterSpacing:Jt("D3.letterSpacing")},D4:{fontFamily:Jt("D4.fontFamily"),fontSize:Jt("D4.fontSize"),fontWeight:Jt("D4.fontWeight"),lineHeight:Jt("D4.lineHeight"),letterSpacing:Jt("D4.letterSpacing")},DBody:{fontFamily:Jt("DBody.fontFamily"),fontSize:Jt("DBody.fontSize"),fontWeight:Jt("DBody.fontWeight"),lineHeight:Jt("DBody.lineHeight"),letterSpacing:Jt("DBody.letterSpacing")},H1:{fontFamily:Jt("H1.fontFamily"),fontSize:Jt("H1.fontSize"),fontWeight:Jt("H1.fontWeight"),lineHeight:Jt("H1.lineHeight"),letterSpacing:Jt("H1.letterSpacing")},H2:{fontFamily:Jt("H2.fontFamily"),fontSize:Jt("H2.fontSize"),fontWeight:Jt("H2.fontWeight"),lineHeight:Jt("H2.lineHeight"),letterSpacing:Jt("H2.letterSpacing")},H3:{fontFamily:Jt("H3.fontFamily"),fontSize:Jt("H3.fontSize"),fontWeight:Jt("H3.fontWeight"),lineHeight:Jt("H3.lineHeight"),letterSpacing:Jt("H3.letterSpacing")},H4:{fontFamily:Jt("H4.fontFamily"),fontSize:Jt("H4.fontSize"),fontWeight:Jt("H4.fontWeight"),lineHeight:Jt("H4.lineHeight"),letterSpacing:Jt("H4.letterSpacing")},H5:{fontFamily:Jt("H5.fontFamily"),fontSize:Jt("H5.fontSize"),fontWeight:Jt("H5.fontWeight"),lineHeight:Jt("H5.lineHeight"),letterSpacing:Jt("H5.letterSpacing")},H6:{fontFamily:Jt("H6.fontFamily"),fontSize:Jt("H6.fontSize"),fontWeight:Jt("H6.fontWeight"),lineHeight:Jt("H6.lineHeight"),letterSpacing:Jt("H6.letterSpacing")},Body:{fontFamily:Jt("Body.fontFamily"),fontSize:Jt("Body.fontSize"),fontWeight:Jt("Body.fontWeight"),lineHeight:Jt("Body.lineHeight"),letterSpacing:Jt("Body.letterSpacing")},BodySmall:{fontFamily:Jt("BodySmall.fontFamily"),fontSize:Jt("BodySmall.fontSize"),fontWeight:Jt("BodySmall.fontWeight"),lineHeight:Jt("BodySmall.lineHeight"),letterSpacing:Jt("BodySmall.letterSpacing")},XSmall:{fontFamily:Jt("XSmall.fontFamily"),fontSize:Jt("XSmall.fontSize"),fontWeight:Jt("XSmall.fontWeight"),lineHeight:Jt("XSmall.lineHeight"),letterSpacing:Jt("XSmall.letterSpacing")}},tr=e=>{switch(e){case 700:case"bold":return Xt.Bold;case 600:case"semibold":return Xt.Semibold;case 300:case"light":return Xt.Light;case 400:case"regular":return Xt.Regular;default:return""}},rr=(e,t)=>r=>{const n=er[e].fontFamily(r),a=er[e].fontWeight(r);return Object.values(Xt).includes(n)?m`
                font-family: ${tr(t)||tr(a)||n};
                font-weight: normal !important;
            `:m`
            font-family: ${n};
            font-weight: ${(nr(t)||a)??"normal"};
        `},nr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ar=(e,t,r=!1)=>n=>{const a=er[e],i=a.fontSize(n);return m`
            ${rr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},ir=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var or;!function(e){e.D1=p.h1`
        ${e=>m`
                ${ar("D1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>m`
                ${ar("D2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>m`
                ${ar("D3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>m`
                ${ar("D4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>m`
                ${ar("DBody",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>m`
                ${ar("H1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>m`
                ${ar("H2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>m`
                ${ar("H3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>m`
                ${ar("H4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>m`
                ${ar("H5",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>m`
                ${ar("H6",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>m`
                ${ar("Body",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>m`
                ${ar("BodySmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>m`
                ${ar("XSmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${ir(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ur({...e,textStyle:"Body"}),Small:e=>ur({...e,textStyle:"BodySmall"})}}(or||(or={}));const sr=p.a`
    ${e=>m`
            ${ar(e.textStyle,e.weight)}
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
`,ur=({external:r=!1,children:n,...a})=>e(sr,{...a,children:[n,r&&t(lr,{})]});var cr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cr||(cr={}));const dr=p.div`
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
        box-shadow: ${Qt};
    }

    ${e=>e.$readOnly?m`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?m`
                background: ${qt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${qt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${qt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border};
                    box-shadow: ${Zt};
                }
            `:void 0}
`,hr=p.input`
    ${ar("Body","regular")}
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
`;var fr={exports:{}};fr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var u=o[l],c=d[u],h=c&&c[0],f=c&&c[1];o[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,u=e.slice(n),c=i.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],u=!0===o[3],c=l||u,d=o[2];u&&(d=o[2]),i=this.$locale(),!l&&d&&(i=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),g=0;a&&!i||(g=i>0?i-1:f.getMonth());var y=s||0,b=l||0,v=u||0,w=c||0;return d?new Date(Date.UTC(m,g,p,y,b,v,w+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,b,v,w)):new Date(m,g,p,y,b,v,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=r.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var pr,mr,gr=fr.exports,yr={exports:{}},br=yr.exports=(pr={year:0,month:1,day:2,hour:3,minute:4,second:5},mr={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=mr[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),mr[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,u=s.value,c=pr[l];c>=0&&(i[c]=parseInt(u,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(a-u,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),vr={exports:{}};vr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,u),i=r-a<0,o=t.clone().add(n+(i?-1:1),u);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=g;var $=function(e){return e instanceof k},x=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),r&&(w[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},_=b;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function g(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var a=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,g):f(0,g+1);case l:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return f(n?y-w:y+(6-w),g);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case i:return p(b+"Seconds",2);case a:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[i]=c+"Minutes",r[a]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),m=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[o]=r,h[a]=e,h)[p]||1,y=this.$d.getTime()+n*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=_.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},d=function(e){return _.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(r.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:_.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:_.s(o,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:a};return n.replace(m,(function(e,t){return t||p[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=_.p(h),g=S(n),y=(g.utcOffset()-this.utcOffset())*t,b=this-g,v=_.m(this,g);return v=(p={},p[d]=v/12,p[u]=v,p[c]=v/3,p[l]=(b-y)/6048e5,p[s]=(b-y)/864e5,p[o]=b/r,p[i]=b/t,p[a]=b/e,p)[m]||b,f?v:_.a(v)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),F=k.prototype;return S.prototype=F,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[v],S.Ls=w,S.p={},S}();var wr=vr.exports,$r={exports:{}};$r.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var xr=$r.exports,Sr={exports:{}};Sr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var _r=Sr.exports,kr={exports:{}};kr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Fr,Br=kr.exports;wr.extend(xr),wr.extend(_r),wr.extend(Br),wr.extend(gr),wr.extend(br),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=wr(t).startOf("week");return Or(r).map((e=>Dr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Dr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(wr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+wr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=wr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(Fr||(Fr={}));const Or=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Dr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Mr=[1,3,5,7,8,10,12],Ar=[4,6,9,11];var Cr,zr,jr;function Er({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,a=t(n),i=n.substring(0,r.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{r.value=a,r.setSelectionRange(l,l)}}}}!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":Mr.includes(i)?Math.min(a,31).toString():Ar.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=wr(e,r);return wr(t,r).diff(n,"minute")}}(Cr||(Cr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zr||(zr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(jr||(jr={}));const Pr=p.input`
    ${ar("Body","regular")}
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

    ${e=>"number"===e.type?m`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?m`
                cursor: not-allowed;
            `:void 0}
`,Nr=p.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${qt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ir=p(b)`
    height: 1.25rem;
    width: 1.25rem;
`,Tr=a.forwardRef((({value:r,spacing:n,type:a,error:s,disabled:l,readOnly:u,onChange:c,onClear:d,allowClear:h=!1,className:f,...p},m)=>{const g=i();o(m,(()=>g.current),[]);const y=Er({ref:g,formatter:e=>jr.transformWithSpaces(e,n)}),b=()=>"tel"===a&&n,v=e=>{const{nextValue:t,updateCaretPosition:r}=y(),n=t.replace(/\s/g,"");e.target.value=n,c(e),r()},w=r?(e=>e?b()?jr.transformWithSpaces(e,n):e:"")(r):r;return e(dr,{$disabled:l,$error:s,$readOnly:u,className:f,children:[t(Pr,{"data-testid":"input",ref:g,disabled:l,value:w,onChange:e=>{c&&(b()?v(e):c(e))},type:a,readOnly:u,...p}),h&&!l&&!u&&!!r&&t(Nr,{onClick:()=>{d&&d(),g&&g.current&&g.current.focus()},type:"button",children:t(Ir,{"aria-hidden":!0})})]})})),Hr=p.div`
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
        box-shadow: ${Qt};
    }

    ${e=>e.$readOnly?m`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?m`
                background: ${qt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border(e)};
                    box-shadow: ${Zt};
                }
            `:void 0}
`,Lr=p(Tr)`
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

    ${ar("Body","regular")}
    color: ${qt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${qt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return m`
                color: ${qt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${qt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?m`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:m`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Vr=Ke;var Wr=Ke,Yr=Je,qr=mt;var Ur=Ke,Gr=function(){this.__data__=new Vr,this.size=0},Qr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Zr=function(e){return this.__data__.get(e)},Xr=function(e){return this.__data__.has(e)},Kr=function(e,t){var r=this.__data__;if(r instanceof Wr){var n=r.__data__;if(!Yr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new qr(n)}return r.set(e,t),this.size=r.size,this};function Jr(e){var t=this.__data__=new Ur(e);this.size=t.size}Jr.prototype.clear=Gr,Jr.prototype.delete=Qr,Jr.prototype.get=Zr,Jr.prototype.has=Xr,Jr.prototype.set=Kr;var en=Jr;var tn=mt,rn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},nn=function(e){return this.__data__.has(e)};function an(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new tn;++t<r;)this.add(e[t])}an.prototype.add=an.prototype.push=rn,an.prototype.has=nn;var on=an,sn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ln=function(e,t){return e.has(t)};var un=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var u=i.get(e),c=i.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&r?new on:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],m=t[d];if(n)var g=o?n(m,p,d,t,e,i):n(p,m,d,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!sn(t,(function(e,t){if(!ln(f,t)&&(p===e||a(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!a(p,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var cn=D.Uint8Array,dn=Ie,hn=un,fn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},pn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},mn=M?M.prototype:void 0,gn=mn?mn.valueOf:void 0;var yn=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new cn(e),new cn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return dn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=fn;case"[object Set]":var l=1&n;if(s||(s=pn),e.size!=t.size&&!l)return!1;var u=o.get(e);if(u)return u==t;n|=2,o.set(e,t);var c=hn(s(e),s(t),n,a,i,o);return o.delete(e),c;case"[object Symbol]":if(gn)return gn.call(e)==gn.call(t)}return!1};var bn=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},vn=k;var wn=function(e,t,r){var n=t(e);return vn(e)?n:bn(n,r(e))};var $n=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},xn=function(){return[]},Sn=Object.prototype.propertyIsEnumerable,_n=Object.getOwnPropertySymbols,kn=_n?function(e){return null==e?[]:(e=Object(e),$n(_n(e),(function(t){return Sn.call(e,t)})))}:xn;var Fn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Bn=L,On=R;var Dn=function(e){return On(e)&&"[object Arguments]"==Bn(e)},Mn=R,An=Object.prototype,Cn=An.hasOwnProperty,zn=An.propertyIsEnumerable,jn=Dn(function(){return arguments}())?Dn:function(e){return Mn(e)&&Cn.call(e,"callee")&&!zn.call(e,"callee")},En={exports:{}};var Pn=function(){return!1};!function(e,t){var r=D,n=Pn,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(En,En.exports);var Nn=/^(?:0|[1-9]\d*)$/;var In=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Nn.test(e))&&e>-1&&e%1==0&&e<t};var Tn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Hn=L,Ln=Tn,Rn=R,Vn={};Vn["[object Float32Array]"]=Vn["[object Float64Array]"]=Vn["[object Int8Array]"]=Vn["[object Int16Array]"]=Vn["[object Int32Array]"]=Vn["[object Uint8Array]"]=Vn["[object Uint8ClampedArray]"]=Vn["[object Uint16Array]"]=Vn["[object Uint32Array]"]=!0,Vn["[object Arguments]"]=Vn["[object Array]"]=Vn["[object ArrayBuffer]"]=Vn["[object Boolean]"]=Vn["[object DataView]"]=Vn["[object Date]"]=Vn["[object Error]"]=Vn["[object Function]"]=Vn["[object Map]"]=Vn["[object Number]"]=Vn["[object Object]"]=Vn["[object RegExp]"]=Vn["[object Set]"]=Vn["[object String]"]=Vn["[object WeakMap]"]=!1;var Wn=function(e){return Rn(e)&&Ln(e.length)&&!!Vn[Hn(e)]};var Yn=function(e){return function(t){return e(t)}},qn={exports:{}};!function(e,t){var r=F,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(qn,qn.exports);var Un=Wn,Gn=Yn,Qn=qn.exports,Zn=Qn&&Qn.isTypedArray,Xn=Zn?Gn(Zn):Un,Kn=Fn,Jn=jn,ea=k,ta=En.exports,ra=In,na=Xn,aa=Object.prototype.hasOwnProperty;var ia=function(e,t){var r=ea(e),n=!r&&Jn(e),a=!r&&!n&&ta(e),i=!r&&!n&&!a&&na(e),o=r||n||a||i,s=o?Kn(e.length,String):[],l=s.length;for(var u in e)!t&&!aa.call(e,u)||o&&("length"==u||a&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ra(u,l))||s.push(u);return s},oa=Object.prototype;var sa=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||oa)};var la=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),ua=sa,ca=la,da=Object.prototype.hasOwnProperty;var ha=te,fa=Tn;var pa=function(e){return null!=e&&fa(e.length)&&!ha(e)},ma=ia,ga=function(e){if(!ua(e))return ca(e);var t=[];for(var r in Object(e))da.call(e,r)&&"constructor"!=r&&t.push(r);return t},ya=pa;var ba=function(e){return ya(e)?ma(e):ga(e)},va=wn,wa=kn,$a=ba;var xa=function(e){return va(e,$a,wa)},Sa=Object.prototype.hasOwnProperty;var _a=function(e,t,r,n,a,i){var o=1&r,s=xa(e),l=s.length;if(l!=xa(t).length&&!o)return!1;for(var u=l;u--;){var c=s[u];if(!(o?c in t:Sa.call(t,c)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=o;++u<l;){var m=e[c=s[u]],g=t[c];if(n)var y=o?n(g,m,c,t,e,i):n(m,g,c,e,t,i);if(!(void 0===y?m===g||a(m,g,r,n,i):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return i.delete(e),i.delete(t),f},ka=ve(D,"DataView"),Fa=Je,Ba=ve(D,"Promise"),Oa=ve(D,"Set"),Da=ve(D,"WeakMap"),Ma=L,Aa=oe,Ca="[object Map]",za="[object Promise]",ja="[object Set]",Ea="[object WeakMap]",Pa="[object DataView]",Na=Aa(ka),Ia=Aa(Fa),Ta=Aa(Ba),Ha=Aa(Oa),La=Aa(Da),Ra=Ma;(ka&&Ra(new ka(new ArrayBuffer(1)))!=Pa||Fa&&Ra(new Fa)!=Ca||Ba&&Ra(Ba.resolve())!=za||Oa&&Ra(new Oa)!=ja||Da&&Ra(new Da)!=Ea)&&(Ra=function(e){var t=Ma(e),r="[object Object]"==t?e.constructor:void 0,n=r?Aa(r):"";if(n)switch(n){case Na:return Pa;case Ia:return Ca;case Ta:return za;case Ha:return ja;case La:return Ea}return t});var Va=en,Wa=un,Ya=yn,qa=_a,Ua=Ra,Ga=k,Qa=En.exports,Za=Xn,Xa="[object Arguments]",Ka="[object Array]",Ja="[object Object]",ei=Object.prototype.hasOwnProperty;var ti=function(e,t,r,n,a,i){var o=Ga(e),s=Ga(t),l=o?Ka:Ua(e),u=s?Ka:Ua(t),c=(l=l==Xa?Ja:l)==Ja,d=(u=u==Xa?Ja:u)==Ja,h=l==u;if(h&&Qa(e)){if(!Qa(t))return!1;o=!0,c=!1}if(h&&!c)return i||(i=new Va),o||Za(e)?Wa(e,t,r,n,a,i):Ya(e,t,l,r,n,a,i);if(!(1&r)){var f=c&&ei.call(e,"__wrapped__"),p=d&&ei.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return i||(i=new Va),a(m,g,r,n,i)}}return!!h&&(i||(i=new Va),qa(e,t,r,n,a,i))},ri=R;var ni=function e(t,r,n,a,i){return t===r||(null==t||null==r||!ri(t)&&!ri(r)?t!=t&&r!=r:ti(t,r,n,a,e,i))},ai=en,ii=ni;var oi=X;var si=function(e){return e==e&&!oi(e)},li=si,ui=ba;var ci=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},di=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],u=e[l],c=s[1];if(o&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new ai;if(n)var h=n(u,c,l,e,t,d);if(!(void 0===h?ii(c,u,3,n,d):h))return!1}}return!0},hi=function(e){for(var t=ui(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,li(a)]}return t},fi=ci;var pi=zt,mi=jn,gi=k,yi=In,bi=Tn,vi=Et;var wi=function(e,t){return null!=e&&t in Object(e)},$i=function(e,t,r){for(var n=-1,a=(t=pi(t,e)).length,i=!1;++n<a;){var o=vi(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&bi(a)&&yi(o,a)&&(gi(e)||mi(e))};var xi=ni,Si=Ht,_i=function(e,t){return null!=e&&$i(e,t,wi)},ki=Z,Fi=si,Bi=ci,Oi=Et;var Di=It;var Mi=function(e){return function(t){return null==t?void 0:t[e]}},Ai=function(e){return function(t){return Di(t,e)}},Ci=Z,zi=Et;var ji=function(e){var t=hi(e);return 1==t.length&&t[0][2]?fi(t[0][0],t[0][1]):function(r){return r===e||di(r,e,t)}},Ei=function(e,t){return ki(e)&&Fi(t)?Bi(Oi(e),t):function(r){var n=Si(r,e);return void 0===n&&n===t?_i(r,e):xi(t,n,3)}},Pi=function(e){return e},Ni=k,Ii=function(e){return Ci(e)?Mi(zi(e)):Ai(e)};var Ti=function(e){return"function"==typeof e?e:null==e?Pi:"object"==typeof e?Ni(e)?Ei(e[0],e[1]):ji(e):Ii(e)},Hi=Ti,Li=pa,Ri=ba;var Vi=function(e){return function(t,r,n){var a=Object(t);if(!Li(t)){var i=Hi(r);t=Ri(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var Wi=/\s/;var Yi=function(e){for(var t=e.length;t--&&Wi.test(e.charAt(t)););return t},qi=/^\s+/;var Ui=function(e){return e?e.slice(0,Yi(e)+1).replace(qi,""):e},Gi=X,Qi=Y,Zi=/^[-+]0x[0-9a-f]+$/i,Xi=/^0b[01]+$/i,Ki=/^0o[0-7]+$/i,Ji=parseInt;var eo=function(e){if("number"==typeof e)return e;if(Qi(e))return NaN;if(Gi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Gi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ui(e);var r=Xi.test(e);return r||Ki.test(e)?Ji(e.slice(2),r?2:8):Zi.test(e)?NaN:+e},to=1/0;var ro=function(e){return e?(e=eo(e))===to||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var no=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},ao=Ti,io=function(e){var t=ro(e),r=t%1;return t==t?r?t-r:t:0},oo=Math.max;var so=Vi((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:io(r);return a<0&&(a=oo(n+a,0)),no(e,ao(t),a)})),lo=ni;var uo=function(e,t){return lo(e,t)};let co=Bo();const ho=e=>So(e,co);let fo=Bo();ho.write=e=>So(e,fo);let po=Bo();ho.onStart=e=>So(e,po);let mo=Bo();ho.onFrame=e=>So(e,mo);let go=Bo();ho.onFinish=e=>So(e,go);let yo=[];ho.setTimeout=(e,t)=>{let r=ho.now()+t,n=()=>{let e=yo.findIndex((e=>e.cancel==n));~e&&yo.splice(e,1),$o-=~e?1:0},a={time:r,handler:e,cancel:n};return yo.splice(bo(r),0,a),$o+=1,_o(),a};let bo=e=>~(~yo.findIndex((t=>t.time>e))||~yo.length);ho.cancel=e=>{po.delete(e),mo.delete(e),go.delete(e),co.delete(e),fo.delete(e)},ho.sync=e=>{xo=!0,ho.batchedUpdates(e),xo=!1},ho.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,ho.onStart(r)}return n.handler=e,n.cancel=()=>{po.delete(r),t=null},n};let vo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ho.use=e=>vo=e,ho.now="undefined"!=typeof performance?()=>performance.now():Date.now,ho.batchedUpdates=e=>e(),ho.catch=console.error,ho.frameLoop="always",ho.advance=()=>{"demand"!==ho.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Fo()};let wo=-1,$o=0,xo=!1;function So(e,t){xo?(t.delete(e),e(0)):(t.add(e),_o())}function _o(){wo<0&&(wo=0,"demand"!==ho.frameLoop&&vo(ko))}function ko(){~wo&&(vo(ko),ho.batchedUpdates(Fo))}function Fo(){let e=wo;wo=ho.now();let t=bo(wo);t&&(Oo(yo.splice(0,t),(e=>e.handler())),$o-=t),$o?(po.flush(),co.flush(e?Math.min(64,wo-e):16.667),mo.flush(),fo.flush(),go.flush()):wo=-1}function Bo(){let e=new Set,t=e;return{add(r){$o+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>($o-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,$o-=t.size,Oo(t,(t=>t(r)&&e.add(t))),$o+=e.size,t=e)}}}function Oo(e,t){e.forEach((e=>{try{t(e)}catch(e){ho.catch(e)}}))}function Do(){}const Mo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ao(e,t){if(Mo.arr(e)){if(!Mo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Co=(e,t)=>e.forEach(t);function zo(e,t,r){if(Mo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const jo=e=>Mo.und(e)?[]:Mo.arr(e)?e:[e];function Eo(e,t){if(e.size){const r=Array.from(e);e.clear(),Co(r,t)}}const Po=(e,...t)=>Eo(e,(e=>e(...t))),No=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Io,To,Ho=null,Lo=!1,Ro=Do;var Vo=Object.freeze({__proto__:null,get createStringInterpolator(){return Io},get to(){return To},get colors(){return Ho},get skipAnimation(){return Lo},get willAdvance(){return Ro},assign:e=>{e.to&&(To=e.to),e.now&&(ho.now=e.now),void 0!==e.colors&&(Ho=e.colors),null!=e.skipAnimation&&(Lo=e.skipAnimation),e.createStringInterpolator&&(Io=e.createStringInterpolator),e.requestAnimationFrame&&ho.use(e.requestAnimationFrame),e.batchedUpdates&&(ho.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ro=e.willAdvance),e.frameLoop&&(ho.frameLoop=e.frameLoop)}});const Wo=new Set;let Yo=[],qo=[],Uo=0;const Go={get idle(){return!Wo.size&&!Yo.length},start(e){Uo>e.priority?(Wo.add(e),ho.onStart(Qo)):(Zo(e),ho(Ko))},advance:Ko,sort(e){if(Uo)ho.onFrame((()=>Go.sort(e)));else{const t=Yo.indexOf(e);~t&&(Yo.splice(t,1),Xo(e))}},clear(){Yo=[],Wo.clear()}};function Qo(){Wo.forEach(Zo),Wo.clear(),ho(Ko)}function Zo(e){Yo.includes(e)||Xo(e)}function Xo(e){Yo.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Yo,(t=>t.priority>e.priority)),0,e)}function Ko(e){const t=qo;for(let r=0;r<Yo.length;r++){const n=Yo[r];Uo=n.priority,n.idle||(Ro(n),n.advance(e),n.idle||t.push(n))}return Uo=0,qo=Yo,qo.length=0,Yo=t,Yo.length>0}const Jo="[-+]?\\d*\\.?\\d+",es=Jo+"%";function ts(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const rs=new RegExp("rgb"+ts(Jo,Jo,Jo)),ns=new RegExp("rgba"+ts(Jo,Jo,Jo,Jo)),as=new RegExp("hsl"+ts(Jo,es,es)),is=new RegExp("hsla"+ts(Jo,es,es,Jo)),os=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ss=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ls=/^#([0-9a-fA-F]{6})$/,us=/^#([0-9a-fA-F]{8})$/;function cs(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ds(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=cs(a,n,e+1/3),o=cs(a,n,e),s=cs(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function hs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fs(e){return(parseFloat(e)%360+360)%360/360}function ps(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ms(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function gs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ls.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ho&&void 0!==Ho[e]?Ho[e]:(t=rs.exec(e))?(hs(t[1])<<24|hs(t[2])<<16|hs(t[3])<<8|255)>>>0:(t=ns.exec(e))?(hs(t[1])<<24|hs(t[2])<<16|hs(t[3])<<8|ps(t[4]))>>>0:(t=os.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=us.exec(e))?parseInt(t[1],16)>>>0:(t=ss.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=as.exec(e))?(255|ds(fs(t[1]),ms(t[2]),ms(t[3])))>>>0:(t=is.exec(e))?(ds(fs(t[1]),ms(t[2]),ms(t[3]))|ps(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ys=(e,t,r)=>{if(Mo.fun(e))return e;if(Mo.arr(e))return ys({range:e,output:t,extrapolate:r});if(Mo.str(e.output[0]))return Io(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=i(u),n===-1/0?u=-u:a===1/0?u+=n:u=u*(a-n)+n;return u}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};const bs=1.70158,vs=1.525*bs,ws=bs+1,$s=2*Math.PI/3,xs=2*Math.PI/4.5,Ss=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},_s={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ws*e*e*e-bs*e*e,easeOutBack:e=>1+ws*Math.pow(e-1,3)+bs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-vs)/2:(Math.pow(2*e-2,2)*((vs+1)*(2*e-2)+vs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$s),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$s)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*xs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*xs)/2+1,easeInBounce:e=>1-Ss(1-e),easeOutBounce:Ss,easeInOutBounce:e=>e<.5?(1-Ss(1-2*e))/2:(1+Ss(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ks.apply(this,arguments)}const Fs=Symbol.for("FluidValue.get"),Bs=Symbol.for("FluidValue.observers"),Os=e=>Boolean(e&&e[Fs]),Ds=e=>e&&e[Fs]?e[Fs]():e,Ms=e=>e[Bs]||null;function As(e,t){let r=e[Bs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Cs{constructor(e){if(this[Fs]=void 0,this[Bs]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");zs(this,e)}}const zs=(e,t)=>Ps(e,Fs,t);function js(e,t){if(e[Fs]){let r=e[Bs];r||Ps(e,Bs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Es(e,t){let r=e[Bs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Bs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Ps=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ns=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Is=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ts=new RegExp(`(${Ns.source})(%|[a-z]+)`,"i"),Hs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ls=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Rs=e=>{const[t,r]=Vs(e);if(!t||No())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ls.test(r)?Rs(r):r||e},Vs=e=>{const t=Ls.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Ws;const Ys=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,qs=e=>{Ws||(Ws=Ho?new RegExp(`(${Object.keys(Ho).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ds(e).replace(Ls,Rs).replace(Is,gs).replace(Ws,gs))),r=t.map((e=>e.match(Ns).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ys(ks({},e,{output:t}))));return e=>{var r;const a=!Ts.test(t[0])&&(null==(r=t.find((e=>Ts.test(e))))?void 0:r.replace(Ns,""));let i=0;return t[0].replace(Ns,(()=>`${n[i++](e)}${a||""}`)).replace(Hs,Ys)}},Us="react-spring: ",Gs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Us}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Qs=Gs(console.warn);const Zs=Gs(console.warn);function Xs(e){return Mo.str(e)&&("#"==e[0]||/\d/.test(e)||!No()&&Ls.test(e)||e in(Ho||{}))}const Ks=No()?s:l,Js=()=>{const e=i(!1);return Ks((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function el(){const e=u()[1],t=Js();return()=>{t.current&&e(Math.random())}}const tl=e=>s(e,rl),rl=[];function nl(e){const t=i();return s((()=>{t.current=e})),t.current}const al=Symbol.for("Animated:node"),il=e=>e&&e[al],ol=(e,t)=>{return r=e,n=al,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},sl=e=>e&&e[al]&&e[al].getPayload();class ll{constructor(){this.payload=void 0,ol(this,this)}getPayload(){return this.payload||[]}}class ul extends ll{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Mo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ul(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class cl extends ul{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ys({output:[e,e]})}static create(e){return new cl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ys({output:[this.getValue(),e]})),this._value=0,super.reset()}}const dl={dependencies:null};class hl extends ll{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return zo(this.source,((r,n)=>{var a;(a=r)&&a[al]===a?t[n]=r.getValue(e):Os(r)?t[n]=Ds(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Co(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return zo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){dl.dependencies&&Os(e)&&dl.dependencies.add(e);const t=sl(e);t&&Co(t,(e=>this.add(e)))}}class fl extends hl{constructor(e){super(e)}static create(e){return new fl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(pl)),!0)}}function pl(e){return(Xs(e)?cl:ul).create(e)}function ml(e){const t=il(e);return t?t.constructor:Mo.arr(e)?fl:Xs(e)?cl:ul}function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gl.apply(this,arguments)}const yl=(e,t)=>{const r=!Mo.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((a,o)=>{const l=i(null),u=r&&d((e=>{l.current=function(e,t){e&&(Mo.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,h]=function(e,t){const r=new Set;dl.dependencies=r,e.style&&(e=gl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new hl(e),dl.dependencies=null,[e,r]}(a,t),f=el(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},m=new bl(p,h),g=i();Ks((()=>(g.current=m,Co(h,(e=>js(e,m))),()=>{g.current&&(Co(g.current.deps,(e=>Es(e,g.current))),ho.cancel(g.current.update))}))),s(p,[]),tl((()=>()=>{const e=g.current;Co(e.deps,(t=>Es(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,gl({},y,{ref:u}))}))};class bl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ho.write(this.update)}}const vl=Symbol.for("AnimatedComponent"),wl=e=>Mo.str(e)?e:e&&Mo.str(e.displayName)?e.displayName:Mo.fun(e)&&e.name||null;function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$l.apply(this,arguments)}function xl(e,...t){return Mo.fun(e)?e(...t):e}const Sl=(e,t)=>!0===e||!!(t&&e&&(Mo.fun(e)?e(t):jo(e).includes(t))),_l=(e,t)=>Mo.obj(e)?t&&e[t]:e,kl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Fl=e=>e,Bl=(e,t=Fl)=>{let r=Ol;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Mo.und(r)||(n[a]=r)}return n},Ol=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Dl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ml(e){const t=function(e){const t={};let r=0;if(zo(e,((e,n)=>{Dl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return zo(e,((e,n)=>n in t||(r[n]=e))),r}return $l({},e)}function Al(e){return e=Ds(e),Mo.arr(e)?e.map(Al):Xs(e)?Vo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Cl(e){return Mo.fun(e)||Mo.arr(e)&&Mo.obj(e[0])}const zl=$l({},{tension:170,friction:26},{mass:1,damping:1,easing:_s.linear,clamp:!1});class jl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,zl)}}function El(e,t){if(Mo.und(t.decay)){const r=!Mo.und(t.tension)||!Mo.und(t.friction);!r&&Mo.und(t.frequency)&&Mo.und(t.damping)&&Mo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Pl=[];class Nl{constructor(){this.changed=!1,this.values=Pl,this.toValues=null,this.fromValues=Pl,this.to=void 0,this.from=void 0,this.config=new jl,this.immediate=!1}}function Il(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{var l;let u,c,d=Sl(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Mo.und(r.pause)||(a.paused=Sl(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=a.paused||Sl(e,t)),u=xl(r.delay||0,t),e?(a.resumeQueue.add(f),i.pause()):(i.resume(),f())}function h(){a.resumeQueue.add(f),a.timeouts.delete(c),c.cancel(),u=c.time-ho.now()}function f(){u>0&&!Vo.skipAnimation?(a.delayed=!0,c=ho.setTimeout(p,u),a.pauseQueue.add(h),a.timeouts.add(c)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(c),e<=(a.cancelId||0)&&(d=!0);try{i.start($l({},r,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const Tl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Rl(e.get()):t.every((e=>e.noop))?Hl(e.get()):Ll(e.get(),t.every((e=>e.finished))),Hl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ll=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Rl=e=>({value:e,cancelled:!0,finished:!1});function Vl(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const u=Bl(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=a<=(r.cancelId||0)&&Rl(n)||a!==r.asyncId&&Ll(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new Yl,o=new ql;return(async()=>{if(Vo.skipAnimation)throw Wl(r),o.result=Ll(n,!1),d(o),o;f(i);const s=Mo.obj(e)?$l({},e):$l({},t,{to:e});s.parentId=a,zo(u,((e,t)=>{Mo.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(Vo.skipAnimation)return Wl(r),Ll(n,!1);try{let t;t=Mo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),m=Ll(n.get(),!0,!1)}catch(e){if(e instanceof Yl)m=e.result;else{if(!(e instanceof ql))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Mo.fun(o)&&ho.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function Wl(e,t){Eo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Yl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ql extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ul=e=>e instanceof Ql;let Gl=1;class Ql extends Cs{constructor(...e){super(...e),this.id=Gl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=il(this);return e&&e.getValue()}to(...e){return Vo.to(this,e)}interpolate(...e){return Qs(`${Us}The "interpolate" function is deprecated in v9 (use "to" instead)`),Vo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){As(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Go.sort(this),As(this,{type:"priority",parent:this,priority:e})}}const Zl=Symbol.for("SpringPhase"),Xl=e=>(1&e[Zl])>0,Kl=e=>(2&e[Zl])>0,Jl=e=>(4&e[Zl])>0,eu=(e,t)=>t?e[Zl]|=3:e[Zl]&=-3,tu=(e,t)=>t?e[Zl]|=4:e[Zl]&=-5;class ru extends Ql{constructor(e,t){if(super(),this.key=void 0,this.animation=new Nl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mo.und(e)||!Mo.und(t)){const r=Mo.obj(e)?$l({},e):$l({},t,{from:e});Mo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Kl(this)||this._state.asyncTo)||Jl(this)}get goal(){return Ds(this.animation.to)}get velocity(){const e=il(this);return e instanceof ul?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xl(this)}get isAnimating(){return Kl(this)}get isPaused(){return Jl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:a,toValues:i}=n;const o=sl(n.to);!o&&Os(n.to)&&(i=jo(Ds(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==cl?1:o?o[l].lastPosition:i[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Mo.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(Mo.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Mo.und(n),f=r==u?s.v0>0:r<u;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(m=d==u||d>u==f,m&&(o=-o*n,d=u));o+=(1e-6*-a.tension*(d-u)+.001*-a.friction*o)/a.mass*g,d+=o*g}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(u-r),o=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=il(this),l=s.getValue();if(t){const e=Ds(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return ho.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Kl(this)){const{to:e,config:t}=this.animation;ho.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Mo.und(e)?(r=this.queue||[],this.queue=[]):r=[Mo.obj(e)?e:$l({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>Tl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Wl(this._state,e&&this._lastCallId),ho.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Mo.obj(r)?r[t]:r,(null==r||Cl(r))&&(r=void 0),n=Mo.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return Xl(this)||(e.reverse&&([r,n]=[n,r]),n=Ds(n),Mo.und(n)?il(this)||this._set(r):this._set(n)),a}_update(e,t){let r=$l({},e);const{key:n,defaultProps:a}=this;r.default&&Object.assign(a,Bl(r,((e,t)=>/^on/.test(t)?_l(e,n):e))),uu(this,r,"onProps"),cu(this,"onProps",r,this);const i=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Il(++this._lastCallId,{key:n,props:r,defaultProps:a,state:o,actions:{pause:()=>{Jl(this)||(tu(this,!0),Po(o.pauseQueue),cu(this,"onPause",Ll(this,nu(this,this.animation.to)),this))},resume:()=>{Jl(this)&&(tu(this,!1),Kl(this)&&this._resume(),Po(o.resumeQueue),cu(this,"onResume",Ll(this,nu(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=au(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Rl(this));const n=!Mo.und(e.to),a=!Mo.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Rl(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!a||n||t.default&&!Mo.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Ao(d,u);h&&(s.from=d),d=Ds(d);const f=!Ao(c,l);f&&this._focus(c);const p=Cl(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||a)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(El(r=$l({},r),t),t=$l({},r,t)),El(e,t),Object.assign(e,t);for(const t in zl)null==e[t]&&(e[t]=zl[t]);let{mass:n,frequency:a,damping:i}=e;Mo.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*n,e.friction=4*Math.PI*i*n/a)}(m,xl(t.config,i),t.config!==o.config?xl(o.config,i):void 0);let b=il(this);if(!b||Mo.und(c))return r(Ll(this,!0));const v=Mo.und(t.reset)?a&&!t.default:!Mo.und(d)&&Sl(t.reset,i),w=v?d:this.get(),$=Al(c),x=Mo.num($)||Mo.arr($)||Xs($),S=!p&&(!x||Sl(o.immediate||t.immediate,i));if(f){const e=ml(c);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set($)}}const _=b.constructor;let k=Os(c),F=!1;if(!k){const e=v||!Xl(this)&&h;(f||e)&&(F=Ao(Al(w),$),k=!F),(Ao(s.immediate,S)||S)&&Ao(m.decay,g)&&Ao(m.velocity,y)||(k=!0)}if(F&&Kl(this)&&(s.changed&&!v?k=!0:k||this._stop(l)),!p&&((k||Os(l))&&(s.values=b.getPayload(),s.toValues=Os(c)?null:_==cl?[1]:jo($)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),k)){const{onRest:e}=s;Co(lu,(e=>uu(this,t,e)));const n=Ll(this,nu(this,l));Po(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&ho.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?xl(o.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),p?r(Vl(t.to,t,this._state,this)):k?this._start():Kl(this)&&!f?this._pendingCalls.add(r):r(Hl(w))}_focus(e){const t=this.animation;e!==t.to&&(Ms(this)&&this._detach(),t.to=e,Ms(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Os(t)&&(js(t,this),Ul(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Os(e)&&Es(e,this)}_set(e,t=!0){const r=Ds(e);if(!Mo.und(r)){const e=il(this);if(!e||!Ao(r,e.getValue())){const n=ml(r);e&&e.constructor==n?e.setValue(r):ol(this,n.create(r)),e&&ho.batchedUpdates((()=>{this._onChange(r,t)}))}}return il(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,cu(this,"onStart",Ll(this,nu(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),xl(this.animation.onChange,e,this)),xl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;il(this).reset(Ds(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Kl(this)||(eu(this,!0),Jl(this)||this._resume())}_resume(){Vo.skipAnimation?this.finish():Go.start(this)}_stop(e,t){if(Kl(this)){eu(this,!1);const r=this.animation;Co(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),As(this,{type:"idle",parent:this});const n=t?Rl(this.get()):Ll(this.get(),nu(this,null!=e?e:r.to));Po(this._pendingCalls,n),r.changed&&(r.changed=!1,cu(this,"onRest",n,this))}}}function nu(e,t){const r=Al(t);return Ao(Al(e.get()),r)}function au(e,t=e.loop,r=e.to){let n=xl(t);if(n){const a=!0!==n&&Ml(n),i=(a||e).reverse,o=!a||a.reset;return iu($l({},e,{loop:t,default:!1,pause:void 0,to:!i||Cl(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function iu(e){const{to:t,from:r}=e=Ml(e),n=new Set;return Mo.obj(t)&&su(t,n),Mo.obj(r)&&su(r,n),e.keys=n.size?Array.from(n):null,e}function ou(e){const t=iu(e);return Mo.und(t.default)&&(t.default=Bl(t)),t}function su(e,t){zo(e,((e,r)=>null!=e&&t.add(r)))}const lu=["onStart","onRest","onChange","onPause","onResume"];function uu(e,t,r){e.animation[r]=t[r]!==kl(t,r)?_l(t[r],e.key):void 0}function cu(e,t,...r){var n,a,i,o;null==(n=(a=e.animation)[t])||n.call(a,...r),null==(i=(o=e.defaultProps)[t])||i.call(o,...r)}const du=["onStart","onChange","onRest"];let hu=1;class fu{constructor(e,t){this.id=hu++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start($l({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Mo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(iu(e)),this}start(e){let{queue:t}=this;return e?t=jo(e).map(iu):this.queue=[],this._flush?this._flush(this,t):(wu(this,t),pu(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Co(jo(t),(t=>r[t].stop(!!e)))}else Wl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mo.und(e))this.start({pause:!0});else{const t=this.springs;Co(jo(e),(e=>t[e].pause()))}return this}resume(e){if(Mo.und(e))this.start({pause:!1});else{const t=this.springs;Co(jo(e),(e=>t[e].resume()))}return this}each(e){zo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Eo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Eo(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Eo(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ho.onFrame(this._onFrame)}}function pu(e,t){return Promise.all(t.map((t=>mu(e,t)))).then((t=>Tl(e,t)))}async function mu(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,u=Mo.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const c=Mo.arr(a)||Mo.fun(a)?a:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Co(du,(r=>{const n=t[r];if(Mo.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Po(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===kl(t,"cancel");(c||f&&d.asyncId)&&h.push(Il(++e._lastAsyncId,{props:t,state:d,actions:{pause:Do,resume:Do,start(t,r){f?(Wl(d,e._lastAsyncId),r(Rl(e))):(t.onRest=s,r(Vl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Tl(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=au(t,o,a);if(r)return wu(e,[r]),mu(e,r,!0)}return l&&ho.batchedUpdates((()=>l(p,e,e.item))),p}function gu(e,t){const r=$l({},e.springs);return t&&Co(jo(t),(e=>{Mo.und(e.keys)&&(e=iu(e)),Mo.obj(e.to)||(e=$l({},e,{to:void 0})),vu(r,e,(e=>bu(e)))})),yu(e,r),r}function yu(e,t){zo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,js(t,e))}))}function bu(e,t){const r=new ru;return r.key=e,t&&js(r,t),r}function vu(e,t,r){t.keys&&Co(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function wu(e,t){Co(t,(t=>{vu(e.springs,t,(t=>bu(t,e)))}))}const $u=["children"],xu=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,$u);const a=h(Su),o=r.pause||!!a.pause,l=r.immediate||!!a.immediate;r=function(e,t){const[r]=u((()=>({inputs:t,result:e()}))),n=i(),a=n.current;let o=a;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return s((()=>{n.current=o,a==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=Su;return n.createElement(c,{value:r},t)},Su=(_u=xu,ku={},Object.assign(_u,n.createContext(ku)),_u.Provider._context=_u,_u.Consumer._context=_u,_u);var _u,ku;xu.Provider=Su.Provider,xu.Consumer=Su.Consumer;const Fu=()=>{const e=[],t=function(t){Zs(`${Us}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Co(e,((e,a)=>{if(Mo.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Co(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Co(e,(e=>e.resume(...arguments))),this},t.set=function(t){Co(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Co(e,((e,n)=>{if(Mo.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Co(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Co(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Mo.fun(e)?e(r,t):e};return t._getProps=r,t};function Bu(e,t){const r=Mo.fun(e),[[n],a]=function(e,t,r){const n=Mo.fun(t)&&t;n&&!r&&(r=[]);const a=f((()=>n||3==arguments.length?Fu():void 0),[]),o=i(0),s=el(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=gu(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?pu(e,t):new Promise((n=>{yu(e,r),l.queue.push((()=>{n(pu(e,t))})),s()}))}})),[]),u=i([...l.ctrls]),c=[],d=nl(e)||0;function p(e,r){for(let a=e;a<r;a++){const e=u.current[a]||(u.current[a]=new fu(null,l.flush)),r=n?n(a,e):t[a];r&&(c[a]=ou(r))}}f((()=>{Co(u.current.slice(e,d),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const m=u.current.map(((e,t)=>gu(e,c[t]))),g=h(xu),y=nl(g),b=g!==y&&function(e){for(const t in e)return!0;return!1}(g);Ks((()=>{o.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Co(e,(e=>e()))),Co(u.current,((e,t)=>{null==a||a.add(e),b&&e.start({default:g});const r=c[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),tl((()=>()=>{Co(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>$l({},e)));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}let Ou;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ou||(Ou={}));class Du extends Ql{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ys(...t);const r=this._get(),n=ml(r);ol(this,n.create(r))}advance(e){const t=this._get();Ao(t,this.get())||(il(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Au(this._active)&&Cu(this)}_get(){const e=Mo.arr(this.source)?this.source.map(Ds):jo(Ds(this.source));return this.calc(...e)}_start(){this.idle&&!Au(this._active)&&(this.idle=!1,Co(sl(this),(e=>{e.done=!1})),Vo.skipAnimation?(ho.batchedUpdates((()=>this.advance())),Cu(this)):Go.start(this))}_attach(){let e=1;Co(jo(this.source),(t=>{Os(t)&&js(t,this),Ul(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Co(jo(this.source),(e=>{Os(e)&&Es(e,this)})),this._active.clear(),Cu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=jo(this.source).reduce(((e,t)=>Math.max(e,(Ul(t)?t.priority:0)+1)),0))}}function Mu(e){return!1!==e.idle}function Au(e){return!e.size||Array.from(e).every(Mu)}function Cu(e){e.idle||(e.idle=!0,Co(sl(e),(e=>{e.done=!0})),As(e,{type:"idle",parent:e}))}function zu(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}Vo.assign({createStringInterpolator:qs,to:(e,t)=>new Du(e,t)});const ju=["style","children","scrollTop","scrollLeft","viewBox"],Eu=/^--/;function Pu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Eu.test(e)||Iu.hasOwnProperty(e)&&Iu[e]?(""+t).trim():t+"px"}const Nu={};let Iu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Tu=["Webkit","Ms","Moz","O"];Iu=Object.keys(Iu).reduce(((e,t)=>(Tu.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Iu);const Hu=["x","y","z"],Lu=/^(matrix|translate|scale|rotate|skew)/,Ru=/^(translate)/,Vu=/^(rotate|skew)/,Wu=(e,t)=>Mo.num(e)&&0!==e?e+t:e,Yu=(e,t)=>Mo.arr(e)?e.every((e=>Yu(e,t))):Mo.num(e)?e===t:parseFloat(e)===t;class qu extends hl{constructor(e){let{x:t,y:r,z:n}=e,a=zu(e,Hu);const i=[],o=[];(t||r||n)&&(i.push([t||0,r||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Wu(e,"px"))).join(",")})`,Yu(e,0)]))),zo(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Lu.test(t)){if(delete a[t],Mo.und(e))return;const r=Ru.test(t)?"px":Vu.test(t)?"deg":"";i.push(jo(e)),o.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${Wu(a,r)})`,Yu(a,0)]:e=>[`${t}(${e.map((e=>Wu(e,r))).join(",")})`,Yu(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new Uu(i,o)),super(a)}}class Uu extends Cs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Co(this.inputs,((r,n)=>{const a=Ds(r[0]),[i,o]=this.transforms[n](Mo.arr(a)?a:r.map(Ds));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Co(this.inputs,(e=>Co(e,(e=>Os(e)&&js(e,this)))))}observerRemoved(e){0==e&&Co(this.inputs,(e=>Co(e,(e=>Os(e)&&Es(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),As(this,e)}}const Gu=["scrollTop","scrollLeft"];Vo.assign({batchedUpdates:v,createStringInterpolator:qs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Qu=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new hl(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=wl(e)||"Anonymous";return(e=Mo.str(e)?i[e]||(i[e]=yl(e,a)):e[vl]||(e[vl]=yl(e,a))).displayName=`Animated(${t})`,e};return zo(e,((t,r)=>{Mo.arr(e)&&(r=wl(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l}=n,u=zu(n,ju),c=Object.values(u),d=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Nu[t]||(Nu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const r=Pu(t,a[t]);Eu.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new qu(e),getComponentProps:e=>zu(e,Gu)}),Zu=Qu.animated,Xu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ku=e=>Object.keys(Xu).reduce(((t,r)=>{const n=Xu[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ju=Ku("max-width"),ec=(Ku("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),tc=g`
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
`,ac=p(rc)`
    animation-delay: -0.3s;
`,ic=p(rc)`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${qt.Neutral[8](e)};
                    border: 1px solid ${qt.Primary(e)};

                    span {
                        color: ${qt.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${qt.Neutral[8](e)};
                    border: 1px solid ${qt.Neutral[5](e)};

                    span {
                        color: ${qt.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${qt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${qt.Neutral[3](e)};
                    }
                `;case"link":return m`
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
                `;default:return m`
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
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${ar("H5","semibold")}
                    }

                    ${Ju.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${ar("H4","semibold")}
                    }

                    ${Ju.mobileS} {
                        height: auto;
                    }
                `}
`;const oc=p((({color:r,className:n,size:a=18})=>e(ec,{className:n,$size:a,$color:r,children:[t(rc,{id:"inner1",$size:a-2,$borderWidth:2}),t(nc,{id:"inner2",$size:a-2,$borderWidth:2}),t(ac,{id:"inner3",$size:a-2,$borderWidth:2}),t(ic,{id:"inner4",$size:a-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=qt.Primary(e);break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return m`
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

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
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
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return m`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?qt.Neutral[4]:qt.Neutral[8]};
`,cc=p(Zu.div)`
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

    ${Ju.mobileL} {
        max-height: 15rem;
    }
`,hc=p.li`
    :hover,
    :focus,
    :active {
        background: ${qt.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return m`
                background: ${qt.Accent.Light[5]};
            `}}
`,fc=p.button`
    display: flex;
    ${e=>e.multiSelect?m`
                padding: 0.5rem 1rem;
            `:m`
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
`;const pc=p.div`
    ${ar("Body","regular")}
    color: ${qt.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,mc=p.span`
    color: ${qt.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,gc=p.div`
    display: flex;
    flex-direction: column;
`,yc=p.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,bc=p.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;p(or.Hyperlink.Default)`
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
`;const vc=p((({className:r,checked:n,disabled:a,onChange:i,onKeyPress:o,displaySize:l="default",...c})=>{const[d,h]=u(n);s((()=>{h(n)}),[n]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;i&&i(e),o&&o(t)}};return e(sc,{selected:d,disabled:a,className:r,"data-testid":"checkbox",$displaySize:l,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,children:[t(lc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:a,checked:d,...c}),d&&t(uc,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:l})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,wc=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,$c=p.button`
    ${ar("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${qt.Primary(e)};\n\t\t`}
`,xc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Sc=p(or.Body)``,_c=p(w)`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${qt.Neutral[7]};
            `}
    }
`,Fc=a.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:a="button",...i},o)=>t(kc,{ref:o,$outline:n,$highlight:r,type:a,...i,children:e}))),Bc=p.li`
    background: ${qt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Oc=p(hr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Dc=p(x)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
`,Mc=p(Fc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${qt.Neutral[3]};
    cursor: pointer;
`,Ac=p(b)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${qt.Neutral[3]};
`,Cc=c(((r,n)=>{const{onClear:a,...i}=r;return e(Bc,{children:[t(Dc,{}),t(Oc,{ref:n,...i}),i.value&&t(Mc,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(Ac,{})})]},"search")})),zc=({listItems:n,listExtractor:a,valueExtractor:o,onSelectItem:l,listStyleWidth:c,visible:d,enableSearch:h,searchPlaceholder:f="Search",onSearch:p,searchFunction:m,onDismiss:g,multiSelect:y,selectedItems:b,onSelectAll:v,onRetry:w,itemsLoadState:$="success",itemTruncationType:x="end",renderListItem:S,onBlur:_,hideNoResultsDisplay:k,renderCustomCallToAction:F,...B})=>{const[O,D]=u(0),[M,A]=u(""),[C,z]=u(n),[j,E]=u(0),P=Bu({height:j}),N=i(),I=i(),T=i([]),H=i(),L=i(),R=i(O),V=i(C),W=e=>{R.current=e,D(e)},Y=e=>{V.current=e,z(e)};s((()=>(document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)})),[]),s((()=>{Q(M)}),[M]),s((()=>{A(""),d?(setTimeout((()=>{E(Z())})),H&&H.current?(H.current.focus(),W(-1)):T.current[O]&&T.current[O].focus()):E(0)}),[d]),s((()=>{if(d){const e=Z();E(e)}}),[C]),s((()=>{Y(n),A(""),W(0)}),[n]);const q=e=>a?a(e):e.toString(),U=e=>{const t=a?a(e):e.toString();let r=0;return I&&I.current&&(r=I.current.getBoundingClientRect().width-100),jr.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},G=e=>!!so(b,(t=>uo(t,e))),Q=e=>{if(""===e)Y(n);else if(m){const t=m(e);Y(t)}else{const t=n.filter((t=>{const r=q(t),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(e.trim().toLowerCase())||r.secondaryLabel.includes(e.trim().toLowerCase()):n.includes(e.trim().toLowerCase())}));Y(t)}},Z=()=>(I&&I.current?I.current.getBoundingClientRect().height:0)+(L.current?L.current.getBoundingClientRect().height:0),X=e=>{if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(R.current<V.current.length-1){const e=R.current+1;T.current[e].focus(),W(e)}break;case"ArrowUp":if(R.current>0){const e=R.current-1;T.current[e].focus(),W(R.current-1)}break;case"Escape":g&&g(!0)}},K=(e,t)=>{e.preventDefault(),l&&l(t,(e=>o?o(e):e)(t))},J=e=>{const t=e.target.value;A(t),p&&p()},ee=()=>{A(""),H.current.focus(),p&&p()},te=()=>{w&&w()},re=()=>{_&&_()},ne=r=>{const n=q(r),a="string"==typeof n?n:n.title;return e(gc,{"data-testid":"truncate-middle-container",children:[t(yc,{children:a}),e(bc,{children:[" ",a]})]})},ae=n=>{const a=q(n);return"string"==typeof a?t(r,{children:a}):e(r,{children:[a.title,a.secondaryLabel&&t(mc,{children:a.secondaryLabel})]})},ie=()=>{if(!w||w&&"success"===$)return C.map(((r,n)=>t(hc,{checked:G(r)&&!y,children:e(fc,{onClick:e=>{K(e,r)},ref:e=>T.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:y,onBlur:re,children:[y&&t(vc,{checked:G(r),displaySize:"small"}),S?S(r,{selected:G(r)}):t(pc,{truncateType:x,children:"middle"===x&&U(r)?ne(r):ae(r)})]})},((e,t)=>`item_${t}__${o?o(e):e}`)(r,n))))},oe=()=>{if(y&&C.length>0&&!M&&"success"===$)return t(wc,{children:t($c,{onClick:v,type:"button",children:0===b.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!k&&M&&0===C.length)return e(xc,{"data-testid":"list-no-results",children:[t(_c,{"data-testid":"no-result-icon"}),t(Sc,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===$)return e(xc,{"data-testid":"list-loading",children:[t(oc,{$buttonStyle:"secondary",size:24}),t(Sc,{children:"Loading..."})]},"loading")},ue=()=>{if(w&&"fail"===$)return e(xc,{"data-testid":"list-fail",children:[t(_c,{"data-testid":"load-error-icon"}),t(Sc,{children:"Failed to load."}),t($c,{onClick:te,type:"button",children:"Try again."})]},"noResults")};return t(r,{children:e(cc,{style:P,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(d)return e(dc,{ref:I,"data-testid":"dropdown-list",width:c,role:"list",...B,children:[(h||m)&&"success"===$?t(Cc,{ref:H,onChange:J,value:M,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ee}):null,oe(),se(),le(),ue(),ie()]})})(),(()=>{if(d&&F)return t("div",{ref:L,"data-testid":"custom-cta",children:F(g,C)})})()]})})},jc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ec=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Pc=p.button`
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
`,Nc=g`
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
        box-shadow: ${Qt};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${Nc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${qt.Neutral[6](e)};

                ${Pc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${Pc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${qt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border(e)};
                    box-shadow: ${Zt};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${jc};
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
`;const Tc=p(or.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Tc)`
    color: ${qt.Neutral[3]};
`;const Hc=({children:e,show:r,error:n,disabled:a,testId:o,onBlur:l,readOnly:u})=>{const c=i();return((e,t,r="window",n)=>{const a=i();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])})("mousedown",(function(e){if(!a){if(c&&c.current.contains(e.target))return;r&&l()}}),"document"),t(Ec,{children:t(Ic,{ref:c,error:n&&!r,disabled:a,$readOnly:u,expanded:r,"data-testid":o,children:e})})},Lc=p.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return m`
                border-bottom: 1px solid ${qt.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?m`
                border: 0;
                margin: 0;
            `:"right"===e.$position?m`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:m`
                        flex-direction: row;
                    `}
`,Rc=p(Pc)`
    padding: 0;
    width: auto;
`,Vc=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Wc=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${jc};
    margin: 0 0.75rem;
`,Yc=p(S)`
    color: ${qt.Neutral[3]};
    height: ${er.Body.fontSize}rem;
    width: ${er.Body.fontSize}rem;
    vertical-align: bottom;
`,qc=p.div`
    display: flex;
    flex: 1 1 auto;
`,Uc=p(or.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Gc=p(Uc)`
    color: ${qt.Neutral[3]};
`,Qc=p.div`
    width: 1px;
    background: ${qt.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return m`
                display: none;
            `}}

    ${e=>"right"===e.$position?m`
                    margin: 0 0.75rem;
                `:m`
                    margin: 0 0.75rem 0 0;
                `}
`,Zc=a.forwardRef((({addon:n,error:a,onChange:o,readOnly:l,className:c,onBlur:d,...h},f)=>{const{placeholder:p,options:m,enableSearch:g,searchFunction:y,searchPlaceholder:b,valueExtractor:v,listExtractor:w,displayValueExtractor:$,selectedOption:x,onSelectOption:S,onHideOptions:_,onShowOptions:k,"data-selector-testid":F}=n.attributes,{position:B}=n,[O,D]=u(x),[M,A]=u(!1),C=i();s((()=>{D(x)}),[x]);const z=()=>$?$(O):v?v(O):O.toString(),j=e=>{!e&&_&&_(),e&&k&&k()},E=e=>{e.preventDefault(),h.disabled||(A(!M),j(!M))},P=(e,t)=>{D(e),A(!1),j(!1),C&&C.current.focus(),S&&S(e,t)},N=e=>{o&&o(e)},I=()=>{d&&d()},T=()=>{A(!1),j(!1),C&&C.current.focus()};return e(Hc,{className:c,show:M,error:a&&!M,disabled:h.disabled,readOnly:l,onBlur:()=>{A(!1),j(!1),I()},children:[e(Lc,{$expanded:M,$readOnly:l,$position:B,children:[l?O?t(Vc,{children:t(Uc,{"data-testid":"selector-label",children:z()})}):null:t(Rc,{ref:C,type:"button",disabled:h.disabled,"data-testid":F||"addon-selector",onClick:E,children:e(r,{children:[e(qc,{children:[p&&!O&&t(Gc,{children:p}),O&&t(Uc,{"data-testid":"selector-label",children:z()})]}),t(Wc,{$expanded:M,children:t(Yc,{})})]})}),t(Qc,{$readOnly:l,$position:B}),t(Lr,{ref:f,...h,readOnly:l,error:a,onChange:N,"data-testid":h["data-testid"]||"input",onBlur:I})]}),m&&m.length>0?t(zc,{listItems:m,selectedItems:x?[x]:[],onSelectItem:P,valueExtractor:v,listExtractor:w,visible:M,enableSearch:g,searchFunction:y,searchPlaceholder:b,"data-testid":"dropdown-list",onBlur:I,onDismiss:T}):null]})})),Xc=a.forwardRef((({addon:r,error:n,className:a,...i},o)=>{const s=()=>t(Hr,{disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],className:a,children:t(Lr,{ref:o,...i,"data-testid":"input"})});if(!r)return s();{const{type:l="label",position:u="left"}=r,{allowClear:c}=i;switch(l){case"list":{const e=r.attributes;return e.options&&e.options.length>0?t(Zc,{ref:o,addon:r,error:n,className:a,...i}):s()}case"custom":{const l=r.attributes;return l.children?e(dr,{$error:n,$disabled:i.disabled,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:u,className:a,children:[t(Rr,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:u,children:l.children}),t(Lr,{ref:o,...i,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}default:{const l=r.attributes;return l.value?e(dr,{$disabled:i.disabled,$error:n,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:u,className:a,children:[t(Rr,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:u,children:l.value}),t(Lr,{ref:o,...i,allowClear:c&&"right"!==u,error:n,"data-testid":"input"})]}):s()}}}}));var Kc=function(e,t,r,n){var a=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++a]);++a<i;)r=t(r,e[a],a,e);return r};var Jc=function(e){return function(t,r,n){for(var a=-1,i=Object(t),o=n(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(i[l],l,i))break}return t}}(),ed=ba;var td=pa;var rd=function(e,t){return function(r,n){if(null==r)return r;if(!td(r))return e(r,n);for(var a=r.length,i=t?a:-1,o=Object(r);(t?i--:++i<a)&&!1!==n(o[i],i,o););return r}}((function(e,t){return e&&Jc(e,t,ed)}));var nd=Kc,ad=rd,id=Ti,od=function(e,t,r,n,a){return a(e,(function(e,a,i){r=n?(n=!1,e):t(r,e,a,i)})),r},sd=k;var ld=function(e,t,r){var n=sd(e)?nd:od,a=arguments.length<3;return n(e,id(t),r,a,ad)};const ud=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],cd=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var dd;!function(e){e.getCountries=()=>[].concat(...ud.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:cd("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,a=n.split(" ");a.shift();const i=a.join(" ");return ld(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(dd||(dd={}));const hd=({onChange:e,value:r,allowClear:n,onClear:a,onBlur:o,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:h,enableSearch:f,onHideOptions:p,onShowOptions:m,placeholder:g,...y})=>{const[b]=u(dd.getCountries()),[v,w]=u(void 0),[$,x]=u(""),S=i(),_=Er({ref:S,formatter:e=>dd.formatNumber(e.replace(/[^0-9]/g,""),v)});s((()=>{const e=b.filter((e=>e.countryCode===fd(r?.countryCode)))[0];w(e),x(dd.formatNumber(r?.number,e))}),[r]);const k=t=>{B($,t),e&&F($,t)},F=(t,r)=>{const n=dd.formatNumber(t,r);e({number:n.replace(/[\s()]+/g,""),countryCode:r&&pd(r.countryCode)})},B=(e,t)=>{x(dd.formatNumber(e,t)),w(t)};return t(Xc,{ref:S,value:$,onChange:()=>{const{nextValue:t,updateCaretPosition:r}=_();r(),B(t,v),e&&F(t,v)},allowClear:n&&!!$,onClear:()=>{a?a():x("")},onBlur:o,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:pd(v?.countryCode)}}:{type:"list",attributes:{placeholder:d,options:b,selectedOption:v,enableSearch:f,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:pd(e.countryCode)}),onSelectOption:k,onHideOptions:p,onShowOptions:m}},inputMode:"numeric",...y})},fd=e=>e?e.replace("+",""):"",pd=e=>e?e.includes("+")?e:`+${e}`:"";export{hd as PhoneNumberInput};
//# sourceMappingURL=index.js.map
