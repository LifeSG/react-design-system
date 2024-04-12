import{createElement as e}from"react";import{jsxs as t,jsx as r,Fragment as n}from"react/jsx-runtime";import{ExclamationCircleFillIcon as a,TickIcon as i}from"@lifesg/react-icons";import o,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";const d={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:d.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,F=f||p||Function("return this")(),m=F.Symbol,y=m,B=Object.prototype,S=B.hasOwnProperty,b=B.toString,D=y?y.toStringTag:void 0;var v=function(e){var t=S.call(e,D),r=e[D];try{e[D]=void 0;var n=!0}catch(e){}var a=b.call(e);return n&&(t?e[D]=r:delete e[D]),a},$=Object.prototype.toString;var E=v,H=function(e){return $.call(e)},x=m?m.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?E(e):H(e)};var A=k,w=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==A(e)},C=h,O=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var V=function(e,t){if(C(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!O(e))||(T.test(e)||!z.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=k,W=N;var I,L=function(e){if(!W(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=F["__core-js_shared__"],P=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var G=function(e){return!!P&&P in e},X=Function.prototype.toString;var M=L,U=G,q=N,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,Z=Q.toString,ee=Y.hasOwnProperty,te=RegExp("^"+Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!q(e)||U(e))&&(M(e)?te:K).test(J(e))},ne=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ie=ae(Object,"create"),oe=ie;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ie,ge=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},se=ie,he=Object.prototype.hasOwnProperty;var fe=ie;var pe=le,Fe=ce,me=ue,ye=function(e){var t=this.__data__;return se?void 0!==t[e]:he.call(t,e)},Be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=pe,Se.prototype.delete=Fe,Se.prototype.get=me,Se.prototype.has=ye,Se.prototype.set=Be;var be=Se;var De=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var $e=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},Ee=$e,He=Array.prototype.splice;var xe=$e;var ke=$e;var Ae=$e;var we=De,_e=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},Ce=function(e){var t=this.__data__,r=xe(t,e);return r<0?void 0:t[r][1]},Oe=function(e){return ke(this.__data__,e)>-1},ze=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Te.prototype.clear=we,Te.prototype.delete=_e,Te.prototype.get=Ce,Te.prototype.has=Oe,Te.prototype.set=ze;var Ve=Te,Ne=ae(F,"Map"),je=be,We=Ve,Ie=Ne;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var r=e.__data__;return Le(t)?r["string"==typeof t?"string":"hash"]:r.map},Pe=Re;var Ge=Re;var Xe=Re;var Me=Re;var Ue=function(){this.size=0,this.__data__={hash:new je,map:new(Ie||We),string:new je}},qe=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ge(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Ue,Ye.prototype.delete=qe,Ye.prototype.get=Je,Ye.prototype.has=Ke,Ye.prototype.set=Qe;var Ze=Ye;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(et.Cache||Ze),r}et.Cache=Ze;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,a){t.push(n?a.replace(nt,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ot=h,lt=_,ct=m?m.prototype:void 0,dt=ct?ct.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=gt;var st=h,ht=V,ft=at,pt=function(e){return null==e?"":ut(e)};var Ft=_;var mt=function(e,t){return st(e)?e:ht(e,t)?[e]:ft(pt(e))},yt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var r=0,n=(t=mt(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var St=s((function(e,t,r){var n=null==e?void 0:Bt(e,t);return void 0===n?r:n}));const bt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,Dt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const $t={collections:{base:g},defaultValue:"base"},Et=e=>t=>{const r=t.theme,n=Dt($t,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},Ht={D1:{fontFamily:Et("D1.fontFamily"),fontSize:Et("D1.fontSize"),fontWeight:Et("D1.fontWeight"),lineHeight:Et("D1.lineHeight"),letterSpacing:Et("D1.letterSpacing")},D2:{fontFamily:Et("D2.fontFamily"),fontSize:Et("D2.fontSize"),fontWeight:Et("D2.fontWeight"),lineHeight:Et("D2.lineHeight"),letterSpacing:Et("D2.letterSpacing")},D3:{fontFamily:Et("D3.fontFamily"),fontSize:Et("D3.fontSize"),fontWeight:Et("D3.fontWeight"),lineHeight:Et("D3.lineHeight"),letterSpacing:Et("D3.letterSpacing")},D4:{fontFamily:Et("D4.fontFamily"),fontSize:Et("D4.fontSize"),fontWeight:Et("D4.fontWeight"),lineHeight:Et("D4.lineHeight"),letterSpacing:Et("D4.letterSpacing")},DBody:{fontFamily:Et("DBody.fontFamily"),fontSize:Et("DBody.fontSize"),fontWeight:Et("DBody.fontWeight"),lineHeight:Et("DBody.lineHeight"),letterSpacing:Et("DBody.letterSpacing")},H1:{fontFamily:Et("H1.fontFamily"),fontSize:Et("H1.fontSize"),fontWeight:Et("H1.fontWeight"),lineHeight:Et("H1.lineHeight"),letterSpacing:Et("H1.letterSpacing")},H2:{fontFamily:Et("H2.fontFamily"),fontSize:Et("H2.fontSize"),fontWeight:Et("H2.fontWeight"),lineHeight:Et("H2.lineHeight"),letterSpacing:Et("H2.letterSpacing")},H3:{fontFamily:Et("H3.fontFamily"),fontSize:Et("H3.fontSize"),fontWeight:Et("H3.fontWeight"),lineHeight:Et("H3.lineHeight"),letterSpacing:Et("H3.letterSpacing")},H4:{fontFamily:Et("H4.fontFamily"),fontSize:Et("H4.fontSize"),fontWeight:Et("H4.fontWeight"),lineHeight:Et("H4.lineHeight"),letterSpacing:Et("H4.letterSpacing")},H5:{fontFamily:Et("H5.fontFamily"),fontSize:Et("H5.fontSize"),fontWeight:Et("H5.fontWeight"),lineHeight:Et("H5.lineHeight"),letterSpacing:Et("H5.letterSpacing")},H6:{fontFamily:Et("H6.fontFamily"),fontSize:Et("H6.fontSize"),fontWeight:Et("H6.fontWeight"),lineHeight:Et("H6.lineHeight"),letterSpacing:Et("H6.letterSpacing")},Body:{fontFamily:Et("Body.fontFamily"),fontSize:Et("Body.fontSize"),fontWeight:Et("Body.fontWeight"),lineHeight:Et("Body.lineHeight"),letterSpacing:Et("Body.letterSpacing")},BodySmall:{fontFamily:Et("BodySmall.fontFamily"),fontSize:Et("BodySmall.fontSize"),fontWeight:Et("BodySmall.fontWeight"),lineHeight:Et("BodySmall.lineHeight"),letterSpacing:Et("BodySmall.letterSpacing")},XSmall:{fontFamily:Et("XSmall.fontFamily"),fontSize:Et("XSmall.fontSize"),fontWeight:Et("XSmall.fontWeight"),lineHeight:Et("XSmall.lineHeight"),letterSpacing:Et("XSmall.letterSpacing")}},xt=e=>{switch(e){case 700:case"bold":return d.Bold;case 600:case"semibold":return d.Semibold;case 300:case"light":return d.Light;case 400:case"regular":return d.Regular;default:return""}},kt=(e,t)=>r=>{var n;const a=Ht[e].fontFamily(r),i=Ht[e].fontWeight(r);return Object.values(d).includes(a)?l`
                font-family: ${xt(t)||xt(i)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(n=At(t)||i)&&void 0!==n?n:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,r=!1)=>n=>{const a=Ht[e],i=a.fontSize(n);return l`
            ${kt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Ct=(e=!1,t=!1,r=void 0)=>t?l`
            display: block;
            ${wt(r)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${wt(r)}
        `;function Ot(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;const zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=Dt(zt,r[vt.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},Vt={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}};var Nt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${Ct(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>It(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>It(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Nt||(Nt={}));const jt=o.a`
    ${e=>l`
            ${_t(e.textStyle,e.weight)}
            color: ${Vt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Vt.Secondary};

                svg {
                    color: ${Vt.Secondary};
                }
            }
        `}
`,Wt=o(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=e=>{var{external:n=!1,children:a}=e,i=Ot(e,["external","children"]);return t(jt,Object.assign({},i,{children:[a,n&&r(Wt,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Rt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pt=e=>Object.keys(Rt).reduce(((t,r)=>{const n=Rt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Gt=Pt("max-width"),Xt=(Pt("min-width"),o.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_t("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Vt.Neutral[8],e.$color){case"grey":t=Vt.Neutral[3],r=Vt.Neutral[3];break;case"green":t=Vt.Validation.Green.Text,r=Vt.Validation.Green.Text;break;case"yellow":t=Vt.Validation.Orange.Text,r=Vt.Validation.Orange.Text;break;case"red":t=Vt.Validation.Red.Text,r=Vt.Validation.Red.Text;break;case"blue":t=Vt.Validation.Blue.Text,r=Vt.Validation.Blue.Text;break;default:t=Vt.Neutral[1],r=Vt.Neutral[1]}else switch(e.$color){case"grey":t=Vt.Neutral[6],r=Vt.Neutral[4],n=Vt.Neutral[3];break;case"green":t=Vt.Validation.Green.Background,r=Vt.Validation.Green.Border,n=Vt.Validation.Green.Text;break;case"yellow":t=Vt.Validation.Orange.Background,r=Vt.Validation.Orange.Border,n=Vt.Validation.Orange.Text;break;case"red":t=Vt.Validation.Red.Background,r=Vt.Validation.Red.Border,n=Vt.Validation.Red.Text;break;case"blue":t=Vt.Validation.Blue.Background,r=Vt.Validation.Blue.Border,n=Vt.Validation.Blue.Text;break;default:t=Vt.Neutral[8],r=Vt.Neutral[5],n=Vt.Neutral[1]}return l`
            background: ${t};
            border: 1px solid ${r};
            color: ${n};
        `}}
`),Mt=o.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Ut=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return l`
                    background-color: ${Vt.Accent.Light[1]};
                `;case"upcoming-active":return l`
                    border: 4px solid ${Vt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    border: 4px solid ${Vt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Vt.Validation.Green.Icon};
                    svg {
                        color: ${Vt.Neutral[8]};
                    }
                `;case"error":return l`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Vt.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,qt=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return l`
                    background-color: ${Vt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    background-color: ${Vt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Vt.Validation.Green.Icon};
                `;case"error":return l`
                    margin-left: -0.15rem;
                    background-color: ${Vt.Validation.Red.Icon};
                `}}}
`,Jt=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Kt=o.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Gt.tablet} {
        grid-column: span 8;
    }

    ${Gt.mobileL} {
        grid-column: span 4;
    }
`,Qt=o(Nt.H3)`
    margin-bottom: 1rem;

    ${Gt.tablet} {
        margin-bottom: 1.5rem;
    }
`,Yt=o(Nt.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,Zt=o.div`
    display: flex;

    :last-of-type ${qt} {
        margin-bottom: 0;
    }
`,er=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,tr=o(Nt.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,rr=o((e=>{var{type:n,colorType:a="black",children:i,icon:o}=e,l=Ot(e,["type","colorType","children","icon"]);return t(Xt,Object.assign({$type:n,$color:a},l,{children:[o,r(Mt,{children:i})]}))}))`
    padding: 0.125rem 0.5rem;
`,nr=({items:o,className:l,title:c,startCol:d,colSpan:g,"data-base-indicator-testid":u,"data-testid":s="timeline"})=>{const h=e=>"string"==typeof e?r(Nt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):r(n,{children:e}),f=e=>"string"==typeof e?r(Yt,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):r(n,{children:e}),p=t=>t.slice(0,2).map(((t,r)=>e(rr,Object.assign({},t,{type:t.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),t.children))),F=e=>{switch(e){case"completed":return r(i,{});case"error":return r(a,{});default:return null}};return t(Kt,Object.assign({className:l,"data-testid":s,$startCol:d,$colSpan:g},{children:[r(Qt,Object.assign({id:"timeline-title"},{children:c})),o.map(((e,n)=>{const{title:a,content:i,statuses:o,variant:l}=e,c=u?`circleindicator${n+1}_div_${u}`:"circleindicator",d=l||(0===n?"current":"upcoming-active");return t(Zt,{children:[t(Jt,{children:[r(Ut,Object.assign({"data-testid":c,$variant:d},{children:F(d)})),r(qt,{$variant:d})]}),t(er,Object.assign({className:"timeline-item-content"},{children:[f(a),o&&r(tr,{children:p(o)}),h(i)]}))]},`timeline-item-${n}`)}))]}))};export{nr as Timeline};
//# sourceMappingURL=index.js.map
