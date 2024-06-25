import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as a}from"styled-components";function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,g="object"==typeof o&&o&&o.Object===Object&&o,F="object"==typeof self&&self&&self.Object===Object&&self,h=g||F||Function("return this")(),d=h.Symbol,f=d,u=Object.prototype,p=u.hasOwnProperty,s=u.toString,y=f?f.toStringTag:void 0;var B=function(e){var t=p.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[y]=n:delete e[y]),a},m=Object.prototype.toString;var S=B,D=function(e){return m.call(e)},v=d?d.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?S(e):D(e)};var H=E,b=function(e){return null!=e&&"object"==typeof e};var $=function(e){return"symbol"==typeof e||b(e)&&"[object Symbol]"==H(e)},A=c,_=$,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var z=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(x.test(e)||!C.test(e)||null!=t&&e in Object(t))};var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k=E,O=w;var W,j=function(e){if(!O(e))return!1;var t=k(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=h["__core-js_shared__"],L=(W=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var I=function(e){return!!L&&L in e},V=Function.prototype.toString;var P=j,R=I,N=w,G=function(e){if(null!=e){try{return V.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!N(e)||R(e))&&(P(e)?K:X).test(G(e))},Y=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},ee=Z(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var re=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ee,ie=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ie.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var ge=ee;var Fe=ne,he=re,de=oe,fe=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=Fe,pe.prototype.delete=he,pe.prototype.get=de,pe.prototype.has=fe,pe.prototype.set=ue;var se=pe;var ye=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},Se=me,De=Array.prototype.splice;var ve=me;var Ee=me;var He=me;var be=ye,$e=function(e){var t=this.__data__,n=Se(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},_e=function(e){return Ee(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=be,xe.prototype.delete=$e,xe.prototype.get=Ae,xe.prototype.has=_e,xe.prototype.set=Ce;var ze=xe,we=Z(h,"Map"),ke=se,Oe=ze,We=we;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Le=Te;var Ie=Te;var Ve=Te;var Pe=Te;var Re=function(){this.size=0,this.__data__={hash:new ke,map:new(We||Oe),string:new ke}},Ne=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ie(this,e).get(e)},Xe=function(e){return Ve(this,e).has(e)},Me=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Re,Ue.prototype.delete=Ne,Ue.prototype.get=Ge,Ue.prototype.has=Xe,Ue.prototype.set=Me;var qe=Ue;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ze=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,a){t.push(r?a.replace(Ye,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},tt=c,nt=$,rt=d?d.prototype:void 0,at=rt?rt.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ot=it;var lt=c,ct=z,gt=Ze,Ft=function(e){return null==e?"":ot(e)};var ht=$;var dt=function(e,t){return lt(e)?e:ct(e,t)?[e]:gt(Ft(e))},ft=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ut=function(e,t){for(var n=0,r=(t=dt(t,e)).length;null!=e&&n<r;)e=e[ft(t[n++])];return n&&n==r?e:void 0};var pt=l((function(e,t,n){var r=null==e?void 0:ut(e,t);return void 0===r?n:r}));const st=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,yt=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},St=e=>t=>{const n=t.theme,r=yt(mt,n[Bt.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},Dt=(St("Brand.1"),St("Brand.2"),St("Brand.3"),St("Brand.4"),St("Brand.5"),St("Brand.6"),St("Primary")),vt=(St("PrimaryDark"),St("Secondary")),Et=(St("Accent.Light.1"),St("Accent.Light.2"),St("Accent.Light.3"),St("Accent.Light.4"),St("Accent.Light.5"),St("Accent.Light.6"),St("Accent.Dark.1"),St("Accent.Dark.2"),St("Accent.Dark.3"),{1:St("Neutral.1"),2:St("Neutral.2"),3:St("Neutral.3"),4:St("Neutral.4"),5:St("Neutral.5"),6:St("Neutral.6"),7:St("Neutral.7"),8:St("Neutral.8")}),Ht=(St("Validation.Green.Text"),St("Validation.Green.Icon"),St("Validation.Green.Border"),St("Validation.Green.Background"),St("Validation.Orange.Text"),St("Validation.Orange.Icon"),St("Validation.Orange.Border"),St("Validation.Orange.Background"),St("Validation.Orange.Badge"),St("Validation.Red.Text"),St("Validation.Red.Icon"),St("Validation.Red.Border"),St("Validation.Red.Background"),St("Validation.Blue.Text"),St("Validation.Blue.Icon"),St("Validation.Blue.Border"),St("Validation.Blue.Background"),St("Shadow.Accent"),St("Shadow.Red"),St("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),bt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},$t=e=>t=>{const n=t.theme,r=yt(bt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},At={D1:{fontFamily:$t("D1.fontFamily"),fontSize:$t("D1.fontSize"),fontWeight:$t("D1.fontWeight"),lineHeight:$t("D1.lineHeight"),letterSpacing:$t("D1.letterSpacing")},D2:{fontFamily:$t("D2.fontFamily"),fontSize:$t("D2.fontSize"),fontWeight:$t("D2.fontWeight"),lineHeight:$t("D2.lineHeight"),letterSpacing:$t("D2.letterSpacing")},D3:{fontFamily:$t("D3.fontFamily"),fontSize:$t("D3.fontSize"),fontWeight:$t("D3.fontWeight"),lineHeight:$t("D3.lineHeight"),letterSpacing:$t("D3.letterSpacing")},D4:{fontFamily:$t("D4.fontFamily"),fontSize:$t("D4.fontSize"),fontWeight:$t("D4.fontWeight"),lineHeight:$t("D4.lineHeight"),letterSpacing:$t("D4.letterSpacing")},DBody:{fontFamily:$t("DBody.fontFamily"),fontSize:$t("DBody.fontSize"),fontWeight:$t("DBody.fontWeight"),lineHeight:$t("DBody.lineHeight"),letterSpacing:$t("DBody.letterSpacing")},H1:{fontFamily:$t("H1.fontFamily"),fontSize:$t("H1.fontSize"),fontWeight:$t("H1.fontWeight"),lineHeight:$t("H1.lineHeight"),letterSpacing:$t("H1.letterSpacing")},H2:{fontFamily:$t("H2.fontFamily"),fontSize:$t("H2.fontSize"),fontWeight:$t("H2.fontWeight"),lineHeight:$t("H2.lineHeight"),letterSpacing:$t("H2.letterSpacing")},H3:{fontFamily:$t("H3.fontFamily"),fontSize:$t("H3.fontSize"),fontWeight:$t("H3.fontWeight"),lineHeight:$t("H3.lineHeight"),letterSpacing:$t("H3.letterSpacing")},H4:{fontFamily:$t("H4.fontFamily"),fontSize:$t("H4.fontSize"),fontWeight:$t("H4.fontWeight"),lineHeight:$t("H4.lineHeight"),letterSpacing:$t("H4.letterSpacing")},H5:{fontFamily:$t("H5.fontFamily"),fontSize:$t("H5.fontSize"),fontWeight:$t("H5.fontWeight"),lineHeight:$t("H5.lineHeight"),letterSpacing:$t("H5.letterSpacing")},H6:{fontFamily:$t("H6.fontFamily"),fontSize:$t("H6.fontSize"),fontWeight:$t("H6.fontWeight"),lineHeight:$t("H6.lineHeight"),letterSpacing:$t("H6.letterSpacing")},Body:{fontFamily:$t("Body.fontFamily"),fontSize:$t("Body.fontSize"),fontWeight:$t("Body.fontWeight"),lineHeight:$t("Body.lineHeight"),letterSpacing:$t("Body.letterSpacing")},BodySmall:{fontFamily:$t("BodySmall.fontFamily"),fontSize:$t("BodySmall.fontSize"),fontWeight:$t("BodySmall.fontWeight"),lineHeight:$t("BodySmall.lineHeight"),letterSpacing:$t("BodySmall.letterSpacing")},XSmall:{fontFamily:$t("XSmall.fontFamily"),fontSize:$t("XSmall.fontSize"),fontWeight:$t("XSmall.fontWeight"),lineHeight:$t("XSmall.lineHeight"),letterSpacing:$t("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},Ct=(e,t)=>n=>{var r;const i=At[e].fontFamily(n),o=At[e].fontWeight(n);return Object.values(Ht).includes(i)?a`
                font-family: ${_t(t)||_t(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=xt(t)||o)&&void 0!==r?r:"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wt=(e,t,n=!1)=>r=>{const i=At[e],o=i.fontSize(r);return a`
            ${Ct(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${zt(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${zt(n)}
        `;var Ot;!function(e){e.D1=r.h1`
        ${e=>a`
                ${wt("D1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>a`
                ${wt("D2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>a`
                ${wt("D3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>a`
                ${wt("D4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>a`
                ${wt("DBody",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>a`
                ${wt("H1",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>a`
                ${wt("H2",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>a`
                ${wt("H3",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>a`
                ${wt("H4",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>a`
                ${wt("H5",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>a`
                ${wt("H6",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>a`
                ${wt("Body",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>a`
                ${wt("BodySmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>a`
                ${wt("XSmall",e.weight,e.paragraph)}
                color: ${Et[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ot||(Ot={}));const Wt=r.a`
    ${e=>a`
            ${wt(e.textStyle,e.weight)}
            color: ${Dt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${vt};

                svg {
                    color: ${vt};
                }
            }
        `}
`,jt=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=n=>{var{external:r=!1,children:a}=n,o=i(n,["external","children"]);return e(Wt,Object.assign({},o,{children:[a,r&&t(jt,{})]}))},Lt=r.div`
    border-radius: 0.5rem;
    background: ${Et[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,It=e=>{var{children:n}=e,r=i(e,["children"]);const a=r["data-testid"]||"card";return t(Lt,Object.assign({},r,{"data-testid":a},{children:"string"==typeof n?t(Ot.Body,{children:n}):n}))};export{It as Card};
//# sourceMappingURL=index.js.map
