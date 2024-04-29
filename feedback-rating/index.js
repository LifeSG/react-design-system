import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as a}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;const g={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:g.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,F="object"==typeof u&&u&&u.Object===Object&&u,f="object"==typeof self&&self&&self.Object===Object&&self,m=F||f||Function("return this")(),y=m.Symbol,B=y,b=Object.prototype,S=b.hasOwnProperty,D=b.toString,$=B?B.toStringTag:void 0;var v=function(e){var t=S.call(e,$),r=e[$];try{e[$]=void 0;var n=!0}catch(e){}var a=D.call(e);return n&&(t?e[$]=r:delete e[$]),a},E=Object.prototype.toString;var x=v,H=function(e){return E.call(e)},w=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?x(e):H(e)};var A=C,k=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==A(e)},z=p,O=_,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var j=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!O(e))||(I.test(e)||!T.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=C,N=P;var L,R=function(e){if(!N(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=m["__core-js_shared__"],G=(L=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var X=function(e){return!!G&&G in e},M=Function.prototype.toString;var U=R,Z=X,Y=P,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,ee=K.toString,te=Q.hasOwnProperty,re=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!Y(e)||Z(e))&&(U(e)?re:J).test(q(e))},ae=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var r=ae(e,t);return ne(r)?r:void 0},ie=oe(Object,"create"),le=ie;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=ie,se=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return se.call(t,e)?t[e]:void 0},he=ie,pe=Object.prototype.hasOwnProperty;var Fe=ie;var fe=ce,me=de,ye=ue,Be=function(e){var t=this.__data__;return he?void 0!==t[e]:pe.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=fe,Se.prototype.delete=me,Se.prototype.get=ye,Se.prototype.has=Be,Se.prototype.set=be;var De=Se;var $e=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},xe=Ee,He=Array.prototype.splice;var we=Ee;var Ce=Ee;var Ae=Ee;var ke=$e,_e=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=we(t,e);return r<0?void 0:t[r][1]},Oe=function(e){return Ce(this.__data__,e)>-1},Te=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ie(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ie.prototype.clear=ke,Ie.prototype.delete=_e,Ie.prototype.get=ze,Ie.prototype.has=Oe,Ie.prototype.set=Te;var je=Ie,Pe=oe(m,"Map"),We=De,Ne=je,Le=Pe;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ge=Ve;var Xe=Ve;var Me=Ve;var Ue=Ve;var Ze=function(){this.size=0,this.__data__={hash:new We,map:new(Le||Ne),string:new We}},Ye=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Xe(this,e).get(e)},Je=function(e){return Me(this,e).has(e)},Ke=function(e,t){var r=Ue(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qe.prototype.clear=Ze,Qe.prototype.delete=Ye,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(tt.Cache||et),r}tt.Cache=et;var rt=tt;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,ot=function(e){var t=rt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,r,n,a){t.push(n?a.replace(at,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},lt=p,ct=_,dt=y?y.prototype:void 0,gt=dt?dt.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(lt(t))return it(t,e)+"";if(ct(t))return gt?gt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=st;var ht=p,pt=j,Ft=ot,ft=function(e){return null==e?"":ut(e)};var mt=_;var yt=function(e,t){return ht(e)?e:pt(e,t)?[e]:Ft(ft(e))},Bt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0};var St=h((function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n}));const Dt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,$t=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Et={collections:{base:s},defaultValue:"base"},xt=e=>t=>{const r=t.theme,n=$t(Et,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?Dt(n,e,r.options.textStyle):Dt(n,e)},Ht={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return g.Bold;case 600:case"semibold":return g.Semibold;case 300:case"light":return g.Light;case 400:case"regular":return g.Regular;default:return""}},Ct=(e,t)=>r=>{var a;const o=Ht[e].fontFamily(r),i=Ht[e].fontWeight(r);return Object.values(g).includes(o)?n`
                font-family: ${wt(t)||wt(i)||o};
                font-weight: normal !important;
            `:n`
            font-family: ${o};
            font-weight: ${null!==(a=At(t)||i)&&void 0!==a?a:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,r=!1)=>a=>{const o=Ht[e],i=o.fontSize(a);return n`
            ${Ct(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            ${n`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},zt=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${kt(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${kt(r)}
        `,Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=$t(Ot,r[vt.colorScheme]);return r.options&&r.options.color?Dt(n,e,r.options.color):Dt(n,e)},It={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}};var jt;!function(e){e.D1=r.h1`
        ${e=>n`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Pt=r.a`
    ${e=>n`
            ${_t(e.textStyle,e.weight)}
            color: ${It.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${It.Secondary};

                svg {
                    color: ${It.Secondary};
                }
            }
        `}
`,Wt=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=r=>{var{external:n=!1,children:a}=r,o=d(r,["external","children"]);return e(Pt,Object.assign({},o,{children:[a,n&&t(Wt,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Rt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Vt="Submit",Gt="Rate your experience",Xt=5,Mt=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Ut=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${It.Primary};
    ${Mt}:focus-visible + & {
        outline: 0.125rem solid ${It.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Zt=r(i)`
    ${Ut}
`,Yt=r(l)`
    ${Ut}
`,qt=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Jt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Kt=r=>{const{description:n,rating:a,onRatingChange:o}=r,i=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=a?Yt:Zt,{"aria-label":r})};return t(Jt,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Xt)].map(((r,n)=>{const l=n+1;return e(qt,{children:[t(Mt,{type:"radio",name:"star",checked:l===a,onChange:()=>(e=>{o(e)})(l)}),i(l)]},l)}))}))},Qt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},er=e=>Object.keys(Qt).reduce(((t,r)=>{const n=Qt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),tr=er("max-width"),rr=(er("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),nr=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ar=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||It.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${nr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,or=r(ar)`
    animation-delay: -0.45s;
`,ir=r(ar)`
    animation-delay: -0.3s;
`,lr=r(ar)`
    animation-delay: -0.15s;
`,cr={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${It.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${It.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},dr=e=>t=>{var r;const n=t.theme,a=$t(cr,n[vt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Dt(a,e,n.options.designToken):Dt(a,e)},gr={InputBoxShadow:dr("InputBoxShadow"),InputErrorBoxShadow:dr("InputErrorBoxShadow"),ElevationBoxShadow:dr("ElevationBoxShadow"),Table:{Header:dr("Table.Header"),Cell:{Primary:dr("Table.Cell.Primary"),Secondary:dr("Table.Cell.Secondary"),Selected:dr("Table.Cell.Selected"),Hover:dr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:dr("Button.Danger.BackgroundColor"),Hover:dr("Button.Danger.Hover"),Primary:dr("Button.Danger.Primary"),Border:dr("Button.Danger.Border")}}},sr=r.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${It.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?gr.Button.Danger.Border:It.Primary};

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:It.Primary};
                `;case"light":return n`
                    background-color: ${It.Neutral[8]};
                    border: 1px solid ${It.Neutral[5]};

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:It.Primary};
                `;case"disabled":return n`
                    background-color: ${It.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${It.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?gr.Button.Danger.Primary:It.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?gr.Button.Danger.Hover:It.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?gr.Button.Danger.BackgroundColor:It.Primary};
                    border: 1px solid transparent;

                    ${tr.mobileL} {
                        width: 100%;
                    }

                    color: ${It.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${_t("H5","semibold")}

                    ${tr.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${_t("H4","semibold")}

                    ${tr.mobileS} {
                        height: auto;
                    }
                `}
`,ur=r((({color:r,className:n,size:a=18})=>e(rr,Object.assign({className:n,$size:a,$color:r},{children:[t(ar,{id:"inner1",$size:a-2,$borderWidth:2,$color:r}),t(or,{id:"inner2",$size:a-2,$borderWidth:2,$color:r}),t(ir,{id:"inner3",$size:a-2,$borderWidth:2,$color:r}),t(lr,{id:"inner4",$size:a-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?gr.Button.Danger.Primary:It.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=It.Neutral[3](e);break;default:t=It.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,hr={Default:c.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(sr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(ur,Object.assign({},s)),t("span",{children:a})]}))})),Small:c.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(sr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(ur,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},pr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Fr=r.div`
    border-top: 1px solid ${It.Neutral[5]};
    border-bottom: 1px solid ${It.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,fr=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,mr=r(hr.Default)`
    margin-top: 1rem;
    width: 100%;
`,yr=r=>{const{imgSrc:n,buttonLabel:a,description:o,rating:i,onRatingChange:l,onSubmit:c}=r,g=d(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),s=null!=n?n:Rt,u=null!=o?o:Gt;return e(Fr,Object.assign({},g,{children:[s&&t(pr,{src:s,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(fr,{children:[t(jt.H3,Object.assign({weight:"semibold"},{children:u})),t(Kt,{description:u,rating:i,onRatingChange:l}),t(mr,Object.assign({disabled:!i,onClick:c,type:"button"},{children:null!=a?a:Vt}))]})]}))};export{yr as FeedbackRating};
//# sourceMappingURL=index.js.map
