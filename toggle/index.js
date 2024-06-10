import{jsxs as e,jsx as t}from"react/jsx-runtime";import{useState as r,useRef as n,useEffect as i}from"react";import a,{css as o}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";import{CircleIcon as c}from"@lifesg/react-icons/circle";import{CircleDotIcon as l}from"@lifesg/react-icons/circle-dot";import{CrossIcon as u}from"@lifesg/react-icons/cross";import{SquareIcon as d}from"@lifesg/react-icons/square";import{SquareTickFillIcon as h}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as f}from"@lifesg/react-icons/tick";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,F="object"==typeof self&&self&&self.Object===Object&&self,$=y||F||Function("return this")(),v=$.Symbol,D=v,S=Object.prototype,B=S.hasOwnProperty,b=S.toString,x=D?D.toStringTag:void 0;var H=function(e){var t=B.call(e,x),r=e[x];try{e[x]=void 0;var n=!0}catch(e){}var i=b.call(e);return n&&(t?e[x]=r:delete e[x]),i},w=Object.prototype.toString;var E=H,k=function(e){return w.call(e)},M=v?v.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?E(e):k(e)};var O=A,_=function(e){return null!=e&&"object"==typeof e};var Y=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==O(e)},C=m,z=Y,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var W=function(e,t){if(C(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!z(e))||(L.test(e)||!T.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=A,R=I;var V,N=function(e){if(!R(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=$["__core-js_shared__"],Z=(V=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var G=function(e){return!!Z&&Z in e},U=Function.prototype.toString;var X=N,J=G,q=I,Q=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,re=ee.toString,ne=te.hasOwnProperty,ie=RegExp("^"+re.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(e){return!(!q(e)||J(e))&&(X(e)?ie:K).test(Q(e))},oe=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var r=oe(e,t);return ae(r)?r:void 0},ce=se(Object,"create"),le=ce;var ue=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=ce,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return fe.call(t,e)?t[e]:void 0},pe=ce,me=Object.prototype.hasOwnProperty;var ye=ce;var Fe=ue,$e=de,ve=ge,De=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=Fe,Be.prototype.delete=$e,Be.prototype.get=ve,Be.prototype.has=De,Be.prototype.set=Se;var be=Be;var xe=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Ee=we,ke=Array.prototype.splice;var Me=we;var Ae=we;var Oe=we;var _e=xe,Ye=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():ke.call(t,r,1),--this.size,!0)},Ce=function(e){var t=this.__data__,r=Me(t,e);return r<0?void 0:t[r][1]},ze=function(e){return Ae(this.__data__,e)>-1},Te=function(e,t){var r=this.__data__,n=Oe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Le(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Le.prototype.clear=_e,Le.prototype.delete=Ye,Le.prototype.get=Ce,Le.prototype.has=ze,Le.prototype.set=Te;var We=Le,Ie=se($,"Map"),je=be,Re=We,Ve=Ie;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var r=e.__data__;return Ne(t)?r["string"==typeof t?"string":"hash"]:r.map},Ze=Pe;var Ge=Pe;var Ue=Pe;var Xe=Pe;var Je=function(){this.size=0,this.__data__={hash:new je,map:new(Ve||Re),string:new je}},qe=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Ge(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},et=function(e,t){var r=Xe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=Je,tt.prototype.delete=qe,tt.prototype.get=Qe,tt.prototype.has=Ke,tt.prototype.set=et;var rt=tt;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(nt.Cache||rt),r}nt.Cache=rt;var it=nt;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,st=function(e){var t=it(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,(function(e,r,n,i){t.push(n?i.replace(ot,"$1"):r||e)})),t}));var ct=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},lt=m,ut=Y,dt=v?v.prototype:void 0,ht=dt?dt.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(lt(t))return ct(t,e)+"";if(ut(t))return ht?ht.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},gt=ft;var pt=m,mt=W,yt=st,Ft=function(e){return null==e?"":gt(e)};var $t=Y;var vt=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(Ft(e))},Dt=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var r=0,n=(t=vt(t,e)).length;null!=e&&r<n;)e=e[Dt(t[r++])];return r&&r==n?e:void 0};var Bt=p((function(e,t,r){var n=null==e?void 0:St(e,t);return void 0===n?r:n}));const bt=(e,t,r)=>t?Bt(r,t)||Bt(e,t):r||e,xt=(e,t)=>{const r=t||e.defaultValue;return Bt(e.collections,r)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=xt(wt,r[Ht.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},kt=(Et("Brand.1"),Et("Brand.2"),Et("Brand.3"),Et("Brand.4"),Et("Brand.5"),Et("Brand.6"),Et("Primary")),Mt=(Et("PrimaryDark"),Et("Secondary")),At={Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Ot={1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},_t={Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Yt={Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")},Ct={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},zt={collections:{base:{D1:{fontFamily:Ct.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ct.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ct.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ct.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ct.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ct.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ct.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ct.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ct.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ct.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ct.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ct.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=xt(zt,r[Ht.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},Lt={D1:{fontFamily:Tt("D1.fontFamily"),fontSize:Tt("D1.fontSize"),fontWeight:Tt("D1.fontWeight"),lineHeight:Tt("D1.lineHeight"),letterSpacing:Tt("D1.letterSpacing")},D2:{fontFamily:Tt("D2.fontFamily"),fontSize:Tt("D2.fontSize"),fontWeight:Tt("D2.fontWeight"),lineHeight:Tt("D2.lineHeight"),letterSpacing:Tt("D2.letterSpacing")},D3:{fontFamily:Tt("D3.fontFamily"),fontSize:Tt("D3.fontSize"),fontWeight:Tt("D3.fontWeight"),lineHeight:Tt("D3.lineHeight"),letterSpacing:Tt("D3.letterSpacing")},D4:{fontFamily:Tt("D4.fontFamily"),fontSize:Tt("D4.fontSize"),fontWeight:Tt("D4.fontWeight"),lineHeight:Tt("D4.lineHeight"),letterSpacing:Tt("D4.letterSpacing")},DBody:{fontFamily:Tt("DBody.fontFamily"),fontSize:Tt("DBody.fontSize"),fontWeight:Tt("DBody.fontWeight"),lineHeight:Tt("DBody.lineHeight"),letterSpacing:Tt("DBody.letterSpacing")},H1:{fontFamily:Tt("H1.fontFamily"),fontSize:Tt("H1.fontSize"),fontWeight:Tt("H1.fontWeight"),lineHeight:Tt("H1.lineHeight"),letterSpacing:Tt("H1.letterSpacing")},H2:{fontFamily:Tt("H2.fontFamily"),fontSize:Tt("H2.fontSize"),fontWeight:Tt("H2.fontWeight"),lineHeight:Tt("H2.lineHeight"),letterSpacing:Tt("H2.letterSpacing")},H3:{fontFamily:Tt("H3.fontFamily"),fontSize:Tt("H3.fontSize"),fontWeight:Tt("H3.fontWeight"),lineHeight:Tt("H3.lineHeight"),letterSpacing:Tt("H3.letterSpacing")},H4:{fontFamily:Tt("H4.fontFamily"),fontSize:Tt("H4.fontSize"),fontWeight:Tt("H4.fontWeight"),lineHeight:Tt("H4.lineHeight"),letterSpacing:Tt("H4.letterSpacing")},H5:{fontFamily:Tt("H5.fontFamily"),fontSize:Tt("H5.fontSize"),fontWeight:Tt("H5.fontWeight"),lineHeight:Tt("H5.lineHeight"),letterSpacing:Tt("H5.letterSpacing")},H6:{fontFamily:Tt("H6.fontFamily"),fontSize:Tt("H6.fontSize"),fontWeight:Tt("H6.fontWeight"),lineHeight:Tt("H6.lineHeight"),letterSpacing:Tt("H6.letterSpacing")},Body:{fontFamily:Tt("Body.fontFamily"),fontSize:Tt("Body.fontSize"),fontWeight:Tt("Body.fontWeight"),lineHeight:Tt("Body.lineHeight"),letterSpacing:Tt("Body.letterSpacing")},BodySmall:{fontFamily:Tt("BodySmall.fontFamily"),fontSize:Tt("BodySmall.fontSize"),fontWeight:Tt("BodySmall.fontWeight"),lineHeight:Tt("BodySmall.lineHeight"),letterSpacing:Tt("BodySmall.letterSpacing")},XSmall:{fontFamily:Tt("XSmall.fontFamily"),fontSize:Tt("XSmall.fontSize"),fontWeight:Tt("XSmall.fontWeight"),lineHeight:Tt("XSmall.lineHeight"),letterSpacing:Tt("XSmall.letterSpacing")}},Wt=e=>{switch(e){case 700:case"bold":return Ct.Bold;case 600:case"semibold":return Ct.Semibold;case 300:case"light":return Ct.Light;case 400:case"regular":return Ct.Regular;default:return""}},It=(e,t)=>r=>{var n;const i=Lt[e].fontFamily(r),a=Lt[e].fontWeight(r);return Object.values(Ct).includes(i)?o`
                font-family: ${Wt(t)||Wt(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(n=jt(t)||a)&&void 0!==n?n:"normal"};
        `},jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Rt=e=>{if(e>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vt=It,Nt=(e,t,r=!1)=>n=>{const i=Lt[e],a=i.fontSize(n);return o`
            ${It(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Pt=(e=!1,t=!1,r=void 0)=>t?o`
            display: block;
            ${Rt(r)}
        `:e?o`
            display: inline;
        `:o`
            display: block;
            ${Rt(r)}
        `;var Zt;"function"==typeof SuppressedError&&SuppressedError,function(e){e.D1=a.h1`
        ${e=>o`
                ${Nt("D1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>o`
                ${Nt("D2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>o`
                ${Nt("D3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>o`
                ${Nt("D4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>o`
                ${Nt("DBody",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>o`
                ${Nt("H1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>o`
                ${Nt("H2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>o`
                ${Nt("H3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>o`
                ${Nt("H4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>o`
                ${Nt("H5",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>o`
                ${Nt("H6",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>o`
                ${Nt("Body",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>o`
                ${Nt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>o`
                ${Nt("XSmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zt||(Zt={}));const Gt=a.a`
    ${e=>o`
            ${Nt(e.textStyle,e.weight)}
            color: ${kt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Mt};

                svg {
                    color: ${Mt};
                }
            }
        `}
`,Ut=a(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xt=r=>{var{external:n=!1,children:i}=r,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(r,["external","children"]);return e(Gt,Object.assign({},a,{children:[i,n&&t(Ut,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const qt=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return o`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?o`
                        border-color: ${_t.Red.Icon};
                        background: ${Ot[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Red};
                        }
                    `:e.$disabled?o`
                        border-color: transparent;
                    `:o`
                        border-color: transparent;

                        :hover {
                            background: ${At.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?o`
                        background: ${Ot[6]};
                        border-color: ${Ot[5]};
                    `:e.$disabled&&e.$selected?o`
                        background: ${Ot[6]};
                        border-color: ${Ot[4]};
                    `:e.$error?o`
                        background: ${Ot[8]};
                        border-color: ${_t.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Red};
                        }
                    `:e.$selected?o`
                        background: ${At.Light[5]};
                        border-color: ${kt};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Accent};
                        }
                    `:o`
                        background: ${Ot[8]};
                        border-color: ${Ot[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Accent};
                            border-color: ${At.Light[1]};
                        }
                    `}
`,Qt=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Kt=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
`,er=a.label`
    ${e=>e.$selected&&!e.$indicator?o`
                ${Nt("H4","semibold")}
            `:o`
                ${Nt("H4","regular")}
            `}

    color: ${Ot[1]};

    ${e=>e.$disabled?o`
                color: ${Ot[3]};
            `:e.$selected?o`
                color: ${kt};
            `:void 0}
`,tr=a.div`
    ${Nt("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Vt("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?o`
                color: ${Ot[3]};
            `:e.$selected?o`
                color: ${kt};
            `:o`
                color: ${Ot[1]};
            `}
`,rr=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?o`
                    color: ${kt};
                `:o`
                    color: ${Ot[4]};
                `};
    }
`,nr=({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?h:d,{});break;case"radio":a=t(r?l:c,{});break;case"tick":a=t(f,{});break;case"cross":a=t(u,{});break;default:a=null}return t(rr,Object.assign({className:i,$active:r,disabled:n},{children:a}))};var ir={exports:{}};ir.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],l=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=l("months"),r=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,c=0;c<s;c+=1){var l=o[c],u=d[l],h=u&&u[0],f=u&&u[1];o[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,c=i.parser,l=e.slice(n),u=a.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var c=!0===o[2],l=!0===o[3],u=c||l,d=o[2];l&&(d=o[2]),a=this.$locale(),!c&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,c=n.minutes,l=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,F=c||0,$=l||0,v=u||0;return d?new Date(Date.UTC(p,m,g,y,F,$,v+60*d.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,F,$,v)):new Date(p,m,g,y,F,$,v)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ar,or,sr=p(ir.exports),cr={exports:{}},lr=p(cr.exports=(ar={year:0,month:1,day:2,hour:3,minute:4,second:5},or={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=or[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),or[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],c=s.type,l=s.value,u=ar[c];u>=0&&(a[u]=parseInt(l,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),c=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=e,c},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,c=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var l=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),c,s),u=l[0],d=l[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),ur={exports:{}};ur.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},F={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,l),a=r-i<0,o=t.clone().add(n+(a?-1:1),l);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:o,m:a,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",v={};v[$]=m;var D="$isDayjsObject",S=function(e){return e instanceof H||!(!e||!e[D])},B=function e(t,r,n){var i;if(!t)return $;if("string"==typeof t){var a=t.toLowerCase();v[a]&&(i=a),r&&(v[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;v[s]=t,i=s}return!n&&i&&($=i),i||!n&&$},b=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new H(r)},x=F;x.l=B,x.i=S,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var H=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return b(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<b(e)},y.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!x.u(t)||t,u=x.p(e),f=function(e,t){var i=x.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return x.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case l:return n?f(1,m):f(0,m+1);case c:var $=this.$locale().weekStart||0,v=(p<$?p+7:p)-$;return f(n?y-v:y+(6-v),m);case s:case h:return g(F+"Hours",0);case o:return g(F+"Minutes",1);case a:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,c=x.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[l]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[a]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[c],g=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var g=x.p(u),p=function(e){var t=b(f);return x.w(t.date(t.date()+Math.round(e*n)),f)};if(g===l)return this.set(l,this.$M+n);if(g===d)return this.set(d,this.$y+n);if(g===s)return p(1);if(g===c)return p(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,s=this.$M,c=r.weekdays,l=r.months,u=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return x.s(a%12||12,e,"0")},g=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,c,2);case"ddd":return d(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=this,m=x.p(h),y=b(n),F=(y.utcOffset()-this.utcOffset())*t,$=this-y,v=function(){return x.m(p,y)};switch(m){case d:g=v()/12;break;case l:g=v();break;case u:g=v()/3;break;case c:g=($-F)/6048e5;break;case s:g=($-F)/864e5;break;case o:g=$/r;break;case a:g=$/t;break;case i:g=$/e;break;default:g=$}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=B(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=H.prototype;return b.prototype=w,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,H,b),e.$i=!0),b},b.locale=B,b.isDayjs=S,b.unix=function(e){return b(1e3*e)},b.en=v[$],b.Ls=v,b.p={},b}();var dr=p(ur.exports),hr={exports:{}};hr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(c?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(c?this.isAfter(o,n):!this.isBefore(o,n))}};var fr=p(hr.exports),gr={exports:{}};gr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var pr=p(gr.exports),mr={exports:{}};mr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var yr,Fr=p(mr.exports);dr.extend(fr),dr.extend(pr),dr.extend(Fr),dr.extend(sr),dr.extend(lr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=dr(t).startOf("week");return $r(r).map((e=>vr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return vr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(dr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+dr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=dr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?dr(n):void 0,i?dr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(yr||(yr={}));const $r=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},vr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Dr=[1,3,5,7,8,10,12],Sr=[4,6,9,11];var Br,br,xr,Hr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Dr.includes(a)?Math.min(i,31).toString():Sr.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=dr(e,r);return dr(t,r).diff(n,"minute")},e.toDayjs=e=>e?dr(e):dr(),e.addMinutesToTime=(e,t,r="HH:mm")=>dr(e,r).add(t,"minutes").format(r)}(Br||(Br={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!dr(e).isBefore(n,"day"))||!(!i||!dr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(dr(e).isValid())return e}return""}}(br||(br={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(xr||(xr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Hr||(Hr={}));const wr=({type:a="checkbox",indicator:o,checked:s,styleType:c="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:g,className:p,"data-testid":m,onChange:y})=>{const[F,$]=r(s),[v]=r(xr.generate()),D=g?`${g}-input`:`tg-${v}-input`,S=n();i((()=>{$(s)}),[s]);return e(qt,Object.assign({$selected:F,$disabled:d,className:p,$styleType:c,$error:h,$indicator:o,id:g,"data-testid":m},{children:[o&&(()=>{let e;switch(a){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=a}return t(nr,{type:e,active:F,disabled:d})})(),t(Qt,{ref:S,name:f,id:D,type:"checkbox"===a?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(a){case"checkbox":$((e=>!e));break;case"radio":case"yes":case"no":F||$(!0)}}},checked:F}),e(Kt,{children:[t(er,Object.assign({htmlFor:D,$selected:F,$indicator:o,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(tr,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:F},{children:e}))})()]})]}))};export{wr as Toggle};
//# sourceMappingURL=index.js.map
