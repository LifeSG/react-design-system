import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useState as a,useEffect as o}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,F="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=F||f||Function("return this")(),p=s.Symbol,B=p,y=Object.prototype,S=y.hasOwnProperty,m=y.toString,D=B?B.toStringTag:void 0;var v=function(e){var t=S.call(e,D),r=e[D];try{e[D]=void 0;var n=!0}catch(e){}var a=m.call(e);return n&&(t?e[D]=r:delete e[D]),a},b=Object.prototype.toString;var E=v,H=function(e){return b.call(e)},$=p?p.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?E(e):H(e)};var A=x,C=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==A(e)},_=h,k=w,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var T=function(e,t){if(_(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!k(e))||(O.test(e)||!z.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,I=j;var L,N=function(e){if(!I(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=s["__core-js_shared__"],R=(L=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var V=function(e){return!!R&&R in e},G=Function.prototype.toString;var X=N,M=V,U=j,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(X(e)?ee:J).test(q(e))},re=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var r=re(e,t);return te(r)?r:void 0},ae=ne(Object,"create"),oe=ae;var ie=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ae,de=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(ce){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return de.call(t,e)?t[e]:void 0},ue=ae,he=Object.prototype.hasOwnProperty;var Fe=ae;var fe=ie,se=le,pe=ge,Be=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},ye=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=fe,Se.prototype.delete=se,Se.prototype.get=pe,Se.prototype.has=Be,Se.prototype.set=ye;var me=Se;var De=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},Ee=be,He=Array.prototype.splice;var $e=be;var xe=be;var Ae=be;var Ce=De,we=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},_e=function(e){var t=this.__data__,r=$e(t,e);return r<0?void 0:t[r][1]},ke=function(e){return xe(this.__data__,e)>-1},ze=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Oe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Oe.prototype.clear=Ce,Oe.prototype.delete=we,Oe.prototype.get=_e,Oe.prototype.has=ke,Oe.prototype.set=ze;var Te=Oe,je=ne(s,"Map"),We=me,Ie=Te,Le=je;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var r=e.__data__;return Ne(t)?r["string"==typeof t?"string":"hash"]:r.map},Re=Pe;var Ve=Pe;var Ge=Pe;var Xe=Pe;var Me=function(){this.size=0,this.__data__={hash:new We,map:new(Le||Ie),string:new We}},Ue=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ve(this,e).get(e)},Je=function(e){return Ge(this,e).has(e)},Ke=function(e,t){var r=Xe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qe.prototype.clear=Me,Qe.prototype.delete=Ue,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Ze.Cache||Ye),r}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,nt=function(e){var t=et(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,r,n,a){t.push(n?a.replace(rt,"$1"):r||e)})),t}));var at=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ot=h,it=w,lt=p?p.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return at(t,e)+"";if(it(t))return ct?ct.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gt=dt;var ut=h,ht=T,Ft=nt,ft=function(e){return null==e?"":gt(e)};var st=w;var pt=function(e,t){return ut(e)?e:ht(e,t)?[e]:Ft(ft(e))},Bt=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yt=function(e,t){for(var r=0,n=(t=pt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0};var St=u((function(e,t,r){var n=null==e?void 0:yt(e,t);return void 0===n?r:n}));const mt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,Dt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=Dt(bt,r[vt.colorScheme]);return r.options&&r.options.color?mt(n,e,r.options.color):mt(n,e)},Ht={Brand:{1:Et("Brand.1"),2:Et("Brand.2"),3:Et("Brand.3"),4:Et("Brand.4"),5:Et("Brand.5"),6:Et("Brand.6")},Primary:Et("Primary"),PrimaryDark:Et("PrimaryDark"),Secondary:Et("Secondary"),Accent:{Light:{1:Et("Accent.Light.1"),2:Et("Accent.Light.2"),3:Et("Accent.Light.3"),4:Et("Accent.Light.4"),5:Et("Accent.Light.5"),6:Et("Accent.Light.6")},Dark:{1:Et("Accent.Dark.1"),2:Et("Accent.Dark.2"),3:Et("Accent.Dark.3")}},Neutral:{1:Et("Neutral.1"),2:Et("Neutral.2"),3:Et("Neutral.3"),4:Et("Neutral.4"),5:Et("Neutral.5"),6:Et("Neutral.6"),7:Et("Neutral.7"),8:Et("Neutral.8")},Validation:{Green:{Text:Et("Validation.Green.Text"),Icon:Et("Validation.Green.Icon"),Border:Et("Validation.Green.Border"),Background:Et("Validation.Green.Background")},Orange:{Text:Et("Validation.Orange.Text"),Icon:Et("Validation.Orange.Icon"),Border:Et("Validation.Orange.Border"),Background:Et("Validation.Orange.Background"),Badge:Et("Validation.Orange.Badge")},Red:{Text:Et("Validation.Red.Text"),Icon:Et("Validation.Red.Icon"),Border:Et("Validation.Red.Border"),Background:Et("Validation.Red.Background")},Blue:{Text:Et("Validation.Blue.Text"),Icon:Et("Validation.Blue.Icon"),Border:Et("Validation.Blue.Border"),Background:Et("Validation.Blue.Background")}},Shadow:{Accent:Et("Shadow.Accent"),Red:Et("Shadow.Red"),Elevation:Et("Shadow.Elevation")}},$t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:$t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const r=t.theme,n=Dt(xt,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?mt(n,e,r.options.textStyle):mt(n,e)},Ct={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return $t.Bold;case 600:case"semibold":return $t.Semibold;case 300:case"light":return $t.Light;case 400:case"regular":return $t.Regular;default:return""}},_t=(e,t)=>r=>{var n;const a=Ct[e].fontFamily(r),o=Ct[e].fontWeight(r);return Object.values($t).includes(a)?l`
                font-family: ${wt(t)||wt(o)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(n=kt(t)||o)&&void 0!==n?n:"normal"};
        `},kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ot=(e,t,r=!1)=>n=>{const a=Ct[e],o=a.fontSize(n);return l`
            ${_t(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,r=void 0)=>t?l`
            display: block;
            ${zt(r)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${zt(r)}
        `;var jt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${Ot("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${Ot("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${Ot("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${Ot("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${Ot("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${Ot("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${Ot("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${Ot("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${Ot("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${Ot("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${Ot("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${Ot("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${Ot("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${Ot("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Wt=i.a`
    ${e=>l`
            ${Ot(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,It=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=r=>{var{external:n=!1,children:a}=r,o=d(r,["external","children"]);return e(Wt,Object.assign({},o,{children:[a,n&&t(It,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const Pt=i(jt.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return l`
                color: ${Ht.Neutral[4](e)};
            `}}
`,Rt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,g]=a("");o((()=>{g(u(`${e||""}`))}),[e,i]);const u=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(r,{children:n.isValidElement(d)?d:t(Pt,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:d}))})},Vt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Gt=e=>t=>{var r;const n=t.theme,a=Dt(Vt,n[vt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?mt(a,e,n.options.designToken):mt(a,e)},Xt=Gt("InputBoxShadow"),Mt=Gt("InputErrorBoxShadow"),Ut=(Gt("ElevationBoxShadow"),Gt("Table.Header"),Gt("Table.Cell.Primary"),Gt("Table.Cell.Secondary"),Gt("Table.Cell.Selected"),Gt("Table.Cell.Hover"),Gt("Button.Danger.BackgroundColor"),Gt("Button.Danger.Hover"),Gt("Button.Danger.Primary"),Gt("Button.Danger.Border"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),qt=i.div`
    display: flex;
    flex-direction: column;
`,Jt=i.textarea`
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Ut};

    ${Ot("Body","regular")}
    color: ${Ht.Neutral[1]};
    background: ${Ht.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Xt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ht.Neutral[3]};
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
                background: ${Ht.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${Mt};
                }
            `:void 0}
`;n.forwardRef(((e,r)=>{var{value:n,disabled:a,error:o,rows:i=5}=e,l=d(e,["value","disabled","error","rows"]);return t(Jt,Object.assign({ref:r,disabled:a,value:n,error:o,rows:i},l))}));const Kt=n.forwardRef(((r,n)=>{var{value:i,disabled:l,rows:c=5,onChange:g}=r,u=d(r,["value","disabled","rows","onChange"]);const[h,F]=a(i);o((()=>{F(i)}),[i]);return e(qt,{children:[t(Jt,Object.assign({ref:n,disabled:l,value:h,rows:c||5,onChange:e=>{const t=e.target.value;u.maxLength&&t.length>u.maxLength||(F(t),e.target.value=t,g&&g(e))}},u)),u.maxLength&&t(Rt,{disabled:l,value:h,maxLength:u.maxLength,renderCustomCounter:u.renderCustomCounter})]})}));export{Kt as Textarea};
//# sourceMappingURL=index.js.map
