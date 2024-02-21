import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,g="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,u=g||d||Function("return this")(),h=u.Symbol,f=h,p=Object.prototype,F=p.hasOwnProperty,s=p.toString,y=f?f.toStringTag:void 0;var B=function(e){var t=F.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[y]=n:delete e[y]),a},m=Object.prototype.toString;var S=B,D=function(e){return m.call(e)},v=h?h.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?S(e):D(e)};var H=b,$=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==H(e)},x=c,_=E,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var w=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(k.test(e)||!A.test(e)||null!=t&&e in Object(t))};var z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=b,C=z;var T,V=function(e){if(!C(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=u["__core-js_shared__"],W=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var j=function(e){return!!W&&W in e},I=Function.prototype.toString;var L=V,R=j,P=z,G=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!P(e)||R(e))&&(L(e)?K:X).test(G(e))},Y=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},ee=Z(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var re=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ee,ie=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ie.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var ge=ee;var de=ne,ue=re,he=oe,fe=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=de,Fe.prototype.delete=ue,Fe.prototype.get=he,Fe.prototype.has=fe,Fe.prototype.set=pe;var se=Fe;var ye=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},Se=me,De=Array.prototype.splice;var ve=me;var be=me;var He=me;var $e=ye,Ee=function(e){var t=this.__data__,n=Se(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},_e=function(e){return be(this.__data__,e)>-1},Ae=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=$e,ke.prototype.delete=Ee,ke.prototype.get=xe,ke.prototype.has=_e,ke.prototype.set=Ae;var we=ke,ze=Z(u,"Map"),Oe=se,Ce=we,Te=ze;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},We=Ne;var je=Ne;var Ie=Ne;var Le=Ne;var Re=function(){this.size=0,this.__data__={hash:new Oe,map:new(Te||Ce),string:new Oe}},Pe=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return je(this,e).get(e)},Xe=function(e){return Ie(this,e).has(e)},Me=function(e,t){var n=Le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Re,Ue.prototype.delete=Pe,Ue.prototype.get=Ge,Ue.prototype.has=Xe,Ue.prototype.set=Me;var qe=Ue;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ze=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,a){t.push(r?a.replace(Ye,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},tt=c,nt=E,rt=h?h.prototype:void 0,at=rt?rt.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ot=it;var lt=c,ct=w,gt=Ze,dt=function(e){return null==e?"":ot(e)};var ut=E;var ht=function(e,t){return lt(e)?e:ct(e,t)?[e]:gt(dt(e))},ft=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var n=0,r=(t=ht(t,e)).length;null!=e&&n<r;)e=e[ft(t[n++])];return n&&n==r?e:void 0};var Ft=l((function(e,t,n){var r=null==e?void 0:pt(e,t);return void 0===r?n:r}));const st=(e,t,n)=>t?Ft(n,t)||Ft(e,t):n||e,yt=(e,t)=>{const n=t||e.defaultValue;return Ft(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},St=e=>t=>{const n=t.theme,r=yt(mt,n[Bt.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},Dt={Brand:{1:St("Brand.1"),2:St("Brand.2"),3:St("Brand.3"),4:St("Brand.4"),5:St("Brand.5"),6:St("Brand.6")},Primary:St("Primary"),PrimaryDark:St("PrimaryDark"),Secondary:St("Secondary"),Accent:{Light:{1:St("Accent.Light.1"),2:St("Accent.Light.2"),3:St("Accent.Light.3"),4:St("Accent.Light.4"),5:St("Accent.Light.5"),6:St("Accent.Light.6")},Dark:{1:St("Accent.Dark.1"),2:St("Accent.Dark.2"),3:St("Accent.Dark.3")}},Neutral:{1:St("Neutral.1"),2:St("Neutral.2"),3:St("Neutral.3"),4:St("Neutral.4"),5:St("Neutral.5"),6:St("Neutral.6"),7:St("Neutral.7"),8:St("Neutral.8")},Validation:{Green:{Text:St("Validation.Green.Text"),Icon:St("Validation.Green.Icon"),Border:St("Validation.Green.Border"),Background:St("Validation.Green.Background")},Orange:{Text:St("Validation.Orange.Text"),Icon:St("Validation.Orange.Icon"),Border:St("Validation.Orange.Border"),Background:St("Validation.Orange.Background"),Badge:St("Validation.Orange.Badge")},Red:{Text:St("Validation.Red.Text"),Icon:St("Validation.Red.Icon"),Border:St("Validation.Red.Border"),Background:St("Validation.Red.Background")},Blue:{Text:St("Validation.Blue.Text"),Icon:St("Validation.Blue.Icon"),Border:St("Validation.Blue.Border"),Background:St("Validation.Blue.Background")}},Shadow:{Accent:St("Shadow.Accent"),Red:St("Shadow.Red"),Elevation:St("Shadow.Elevation")}},vt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},bt={collections:{base:{D1:{fontFamily:vt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=yt(bt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},$t={D1:{fontFamily:Ht("D1.fontFamily"),fontSize:Ht("D1.fontSize"),fontWeight:Ht("D1.fontWeight"),lineHeight:Ht("D1.lineHeight"),letterSpacing:Ht("D1.letterSpacing")},D2:{fontFamily:Ht("D2.fontFamily"),fontSize:Ht("D2.fontSize"),fontWeight:Ht("D2.fontWeight"),lineHeight:Ht("D2.lineHeight"),letterSpacing:Ht("D2.letterSpacing")},D3:{fontFamily:Ht("D3.fontFamily"),fontSize:Ht("D3.fontSize"),fontWeight:Ht("D3.fontWeight"),lineHeight:Ht("D3.lineHeight"),letterSpacing:Ht("D3.letterSpacing")},D4:{fontFamily:Ht("D4.fontFamily"),fontSize:Ht("D4.fontSize"),fontWeight:Ht("D4.fontWeight"),lineHeight:Ht("D4.lineHeight"),letterSpacing:Ht("D4.letterSpacing")},DBody:{fontFamily:Ht("DBody.fontFamily"),fontSize:Ht("DBody.fontSize"),fontWeight:Ht("DBody.fontWeight"),lineHeight:Ht("DBody.lineHeight"),letterSpacing:Ht("DBody.letterSpacing")},H1:{fontFamily:Ht("H1.fontFamily"),fontSize:Ht("H1.fontSize"),fontWeight:Ht("H1.fontWeight"),lineHeight:Ht("H1.lineHeight"),letterSpacing:Ht("H1.letterSpacing")},H2:{fontFamily:Ht("H2.fontFamily"),fontSize:Ht("H2.fontSize"),fontWeight:Ht("H2.fontWeight"),lineHeight:Ht("H2.lineHeight"),letterSpacing:Ht("H2.letterSpacing")},H3:{fontFamily:Ht("H3.fontFamily"),fontSize:Ht("H3.fontSize"),fontWeight:Ht("H3.fontWeight"),lineHeight:Ht("H3.lineHeight"),letterSpacing:Ht("H3.letterSpacing")},H4:{fontFamily:Ht("H4.fontFamily"),fontSize:Ht("H4.fontSize"),fontWeight:Ht("H4.fontWeight"),lineHeight:Ht("H4.lineHeight"),letterSpacing:Ht("H4.letterSpacing")},H5:{fontFamily:Ht("H5.fontFamily"),fontSize:Ht("H5.fontSize"),fontWeight:Ht("H5.fontWeight"),lineHeight:Ht("H5.lineHeight"),letterSpacing:Ht("H5.letterSpacing")},H6:{fontFamily:Ht("H6.fontFamily"),fontSize:Ht("H6.fontSize"),fontWeight:Ht("H6.fontWeight"),lineHeight:Ht("H6.lineHeight"),letterSpacing:Ht("H6.letterSpacing")},Body:{fontFamily:Ht("Body.fontFamily"),fontSize:Ht("Body.fontSize"),fontWeight:Ht("Body.fontWeight"),lineHeight:Ht("Body.lineHeight"),letterSpacing:Ht("Body.letterSpacing")},BodySmall:{fontFamily:Ht("BodySmall.fontFamily"),fontSize:Ht("BodySmall.fontSize"),fontWeight:Ht("BodySmall.fontWeight"),lineHeight:Ht("BodySmall.lineHeight"),letterSpacing:Ht("BodySmall.letterSpacing")},XSmall:{fontFamily:Ht("XSmall.fontFamily"),fontSize:Ht("XSmall.fontSize"),fontWeight:Ht("XSmall.fontWeight"),lineHeight:Ht("XSmall.lineHeight"),letterSpacing:Ht("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return vt.Bold;case 600:case"semibold":return vt.Semibold;case 300:case"light":return vt.Light;case 400:case"regular":return vt.Regular;default:return""}},xt=(e,t)=>n=>{var a;const i=$t[e].fontFamily(n),o=$t[e].fontWeight(n);return Object.values(vt).includes(i)?r`
                font-family: ${Et(t)||Et(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${null!==(a=_t(t)||o)&&void 0!==a?a:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},At=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kt=(e,t,n=!1)=>a=>{const i=$t[e],o=i.fontSize(a);return r`
            ${xt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},wt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${At(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${At(n)}
        `;var zt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(zt||(zt={}));const Ot=n.a`
    ${e=>r`
            ${kt(e.textStyle,e.weight)}
            color: ${Dt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt.Secondary};

                svg {
                    color: ${Dt.Secondary};
                }
            }
        `}
`,Ct=n(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=n=>{var{external:r=!1,children:a}=n,o=i(n,["external","children"]);return e(Ot,Object.assign({},o,{children:[a,r&&t(Ct,{})]}))};var Vt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Vt||(Vt={}));const Nt=n.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${kt("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,a;if("solid"===e.$type)switch(a=Dt.Neutral[8],e.$color){case"grey":t=Dt.Neutral[3],n=Dt.Neutral[3];break;case"green":t=Dt.Validation.Green.Text,n=Dt.Validation.Green.Text;break;case"yellow":t=Dt.Validation.Orange.Text,n=Dt.Validation.Orange.Text;break;case"red":t=Dt.Validation.Red.Text,n=Dt.Validation.Red.Text;break;case"blue":t=Dt.Validation.Blue.Text,n=Dt.Validation.Blue.Text;break;default:t=Dt.Neutral[1],n=Dt.Neutral[1]}else switch(e.$color){case"grey":t=Dt.Neutral[6],n=Dt.Neutral[4],a=Dt.Neutral[3];break;case"green":t=Dt.Validation.Green.Background,n=Dt.Validation.Green.Border,a=Dt.Validation.Green.Text;break;case"yellow":t=Dt.Validation.Orange.Background,n=Dt.Validation.Orange.Border,a=Dt.Validation.Orange.Text;break;case"red":t=Dt.Validation.Red.Background,n=Dt.Validation.Red.Border,a=Dt.Validation.Red.Text;break;case"blue":t=Dt.Validation.Blue.Background,n=Dt.Validation.Blue.Border,a=Dt.Validation.Blue.Text;break;default:t=Dt.Neutral[8],n=Dt.Neutral[5],a=Dt.Neutral[1]}return r`
            background: ${t};
            border: 1px solid ${n};
            color: ${a};
        `}}
`,Wt=n.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,jt=n=>{var{type:r,colorType:a="black",children:o,icon:l}=n,c=i(n,["type","colorType","children","icon"]);return e(Nt,Object.assign({$type:r,$color:a},c,{children:[l,t(Wt,{children:o})]}))};export{jt as Pill};
//# sourceMappingURL=index.js.map
