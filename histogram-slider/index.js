import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useEffect as o,useMemo as a}from"react";import s,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const h={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},p={D1:{fontFamily:h.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:h.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:h.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:h.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:h.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:h.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,m="object"==typeof d&&d&&d.Object===Object&&d,y="object"==typeof self&&self&&self.Object===Object&&self,F=m||y||Function("return this")(),v=F.Symbol,b=v,B=Object.prototype,S=B.hasOwnProperty,D=B.toString,E=b?b.toStringTag:void 0;var x=function(e){var t=S.call(e,E),n=e[E];try{e[E]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[E]=n:delete e[E]),i},w=Object.prototype.toString;var C=x,$=function(e){return w.call(e)},k=v?v.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?C(e):$(e)};var H=A,O=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==H(e)},T=f,_=z,M=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var L=function(e,t){if(T(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(P.test(e)||!M.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=A,R=N;var j,I=function(e){if(!R(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},W=F["__core-js_shared__"],K=(j=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var U=function(e){return!!K&&K in e},X=Function.prototype.toString;var G=I,Y=U,q=N,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,Z=Function.prototype,ee=Object.prototype,te=Z.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!q(e)||Y(e))&&(G(e)?re:Q).test(J(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},se=ae(Object,"create"),le=se;var ce=function(){this.__data__=le?le(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,pe=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pe.call(t,e)?t[e]:void 0},ge=se,fe=Object.prototype.hasOwnProperty;var me=se;var ye=ce,Fe=ue,ve=de,be=function(e){var t=this.__data__;return ge?void 0!==t[e]:fe.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=ye,Se.prototype.delete=Fe,Se.prototype.get=ve,Se.prototype.has=be,Se.prototype.set=Be;var De=Se;var Ee=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},Ce=we,$e=Array.prototype.splice;var ke=we;var Ae=we;var He=we;var Oe=Ee,ze=function(e){var t=this.__data__,n=Ce(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},Te=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},_e=function(e){return Ae(this.__data__,e)>-1},Me=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pe.prototype.clear=Oe,Pe.prototype.delete=ze,Pe.prototype.get=Te,Pe.prototype.has=_e,Pe.prototype.set=Me;var Le=Pe,Ne=ae(F,"Map"),Ve=De,Re=Le,je=Ne;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var We=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Ke=We;var Ue=We;var Xe=We;var Ge=We;var Ye=function(){this.size=0,this.__data__={hash:new Ve,map:new(je||Re),string:new Ve}},qe=function(e){var t=Ke(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ue(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},Ze=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ye,et.prototype.delete=qe,et.prototype.get=Je,et.prototype.has=Qe,et.prototype.set=Ze;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},lt=f,ct=z,ut=v?v.prototype:void 0,ht=ut?ut.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(lt(t))return st(t,e)+"";if(ct(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=pt;var gt=f,ft=L,mt=at,yt=function(e){return null==e?"":dt(e)};var Ft=z;var vt=function(e,t){return gt(e)?e:ft(e,t)?[e]:mt(yt(e))},bt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var St=g((function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r}));const Dt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Et=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:p},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,r=Et(wt,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},$t={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},kt=e=>{switch(e){case 700:case"bold":return h.Bold;case 600:case"semibold":return h.Semibold;case 300:case"light":return h.Light;case 400:case"regular":return h.Regular;default:return""}},At=(e,t)=>n=>{var r;const i=$t[e].fontFamily(n),o=$t[e].fontWeight(n);return Object.values(h).includes(i)?l`
                font-family: ${kt(t)||kt(o)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=Ht(t)||o)&&void 0!==r?r:"normal"};
        `},Ht=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zt=(e,t,n=!1)=>r=>{const i=$t[e],o=i.fontSize(r);return l`
            ${At(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Ot(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Ot(n)}
        `,_t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,r=Et(_t,n[xt.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Pt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}};var Lt;!function(e){e.D1=s.h1`
        ${e=>l`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>l`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>l`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>l`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>l`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>l`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>l`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>l`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>l`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>l`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>l`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>l`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>l`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>l`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Lt||(Lt={}));const Nt=s.a`
    ${e=>l`
            ${zt(e.textStyle,e.weight)}
            color: ${Pt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Pt.Secondary};

                svg {
                    color: ${Pt.Secondary};
                }
            }
        `}
`,Vt=s(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=n=>{var{external:r=!1,children:i}=n,o=u(n,["external","children"]);return e(Nt,Object.assign({},o,{children:[i,r&&t(Vt,{})]}))};var jt;function It(e,t){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},It(e,t)}function Wt(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Kt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Ut(e){return null!==e&&1===e.length?e[0]:e.slice()}function Xt(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Gt(e,t){return Yt(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Yt(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jt||(jt={}));let qt=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Xt(n.getMouseEventMap())}))}Wt(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Gt(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Xt(n.getKeyDownEventMap()),Wt(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Xt(n.getMouseEventMap()),Wt(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Xt(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Ut(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:Ut(n.state.value)};return n.props.renderTrack(i,o)};let i=Kt(t.value);i.length||(i=Kt(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<i.length;e+=1)i[e]=Gt(i[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=r.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:i,zIndices:o},n}var n,i;i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,It(n,i);var o=t.prototype;return o.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Kt(e.value);return n.length?t.pending?null:{value:n.map((t=>Gt(t,e)))}:null},o.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},o.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},o.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},o.getValue=function(){return Ut(this.state.value)},o.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},o.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},o.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},o.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},o.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},o.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},o.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Gt(this.state.startValue+t,this.props)},o.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},o.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},o.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},o.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},o.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},o.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Gt(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},o.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},o.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},o.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Gt(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},o.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Gt(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},o.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},o.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Yt(i,this.props)},o.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Yt(i,this.props)},o.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},o.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},o.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},o.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},o.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},o.fireChangeEvent=function(e){this.props[e]&&this.props[e](Ut(this.state.value),this.state.index)},o.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},o.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},o.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},o.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},o.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},o.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},o.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const i=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return r.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},i,o,a)},t}(r.Component);qt.displayName="ReactSlider",qt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>r.createElement("div",e),renderTrack:e=>r.createElement("div",e),renderMark:e=>r.createElement("span",e)};var Jt=qt;const Qt=s.div`
    isolation: isolate;
`,Zt=s.div`
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,en=s(Lt.BodySmall)`
    overflow-wrap: anywhere;
`,tn=s(Jt)`
    height: 0.875rem;
`,nn=s.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?l`
                cursor: not-allowed;
            `:e.$readOnly?void 0:l`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Pt.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Pt.Neutral[4]};
        border-radius: 50%;
    }
`,rn=s.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${nn}:after {
        border: 1px solid ${Pt.Primary};
    }
`,on=s.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Pt.Neutral[4](e)};
`,an=s.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,sn=s.div`
    margin: 0 0.5rem;
`,ln=s.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,cn=s.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Pt.Neutral[8]};

    ${e=>{let t=Pt.Neutral[6];return e.$disabled&&e.$selected?t=Pt.Neutral[4]:e.$disabled?t=Pt.Neutral[5]:e.$selected&&(t=Pt.Accent.Light[1]),l`
            background-color: ${t};
        `}}
`,un=s((n=>{var{value:r,min:a=0,max:s=100,step:l=1,minRange:c,numOfThumbs:h=2,colors:p,disabled:d,readOnly:g,ariaLabels:f,showSliderLabels:m,sliderLabelPrefix:y,sliderLabelSuffix:F,renderSliderLabel:v,onChange:b,onChangeEnd:B}=n,S=u(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,E]=i(w()),x=function(){const e=function(){const e=d||g?Pt.Neutral[5]:Pt.Neutral[4],t=d||g?Pt.Neutral[4]:Pt.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==p?void 0:p[n])||e[n]))}();o((()=>{r!==D&&E(w())}),[r]);function w(){if(r&&r.length===h)return r;const e=[];for(let t=0;t<h;t++)e.push(a+l*t);return e}const C=t=>v?v(t):e(en,{children:[y,t,F]});return e(Qt,Object.assign({},S,{children:[t(tn,{step:l,min:a,max:s,value:D,disabled:d||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];E(t),null==b||b(t)}else{if(t>-1&&D[t]===e[t])return;E(e),null==b||b(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];E(t),null==B||B(t)}else E(e),null==B||B(e)},minDistance:c,ariaLabel:f,renderThumb:(e,n)=>t(rn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:d?void 0:e.tabIndex},{children:t(nn,{$disabled:d,$readOnly:g})})),renderTrack:(e,n)=>t(on,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:x[n.index]}))}),m&&e(Zt,{children:[t("div",{children:C(a)}),t("div",{children:C(s)})]})]}))}))`
    margin-top: -0.3125rem;
`,hn=r=>{var{bins:s=[],interval:l,disabled:c,readOnly:h,value:p,showRangeLabels:d,rangeLabelPrefix:g,rangeLabelSuffix:f,onChange:m,onChangeEnd:y,renderEmptyView:F,renderRangeLabel:v}=r,b=u(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const B=s.map((e=>e.count)),S=Math.max(...B),D=s.map((e=>e.minValue)),E=Math.max(...D),x=Math.min(...D),[w,C]=i(H()),$=a((()=>{const e=[...s].sort(((e,t)=>e.minValue-t.minValue)),t=(E-x)/l+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===x+l*r));t?n.push(t):n.push({count:0,minValue:x+l*r})}return n}),[s,l]);o((()=>{p!==w&&C(H())}),[p]);const k=e=>{C(e),null==m||m(e)},A=e=>{C(e),null==y||y(e)};function H(){return null!=p?p:[x,x+l]}const O=t=>v?v(t):e(Lt.Body,{children:[g,t,f]});return e("div",Object.assign({},b,{children:[d&&e(an,{children:[O(w[0]),t(sn,{children:"-"}),O(w[1])]}),$.every((e=>0===e.count))&&F?F():e(n,{children:[t(ln,{children:$.map(((e,n)=>{const r=e.count/S;return t(cn,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:e.minValue>=w[0]&&e.minValue<w[1],$disabled:c||h},n)}))}),t(un,{min:x,max:E+l,step:l,minRange:l,numOfThumbs:2,value:w,disabled:c,readOnly:h,onChange:k,onChangeEnd:A})]})]}))};export{hn as HistogramSlider};
//# sourceMappingURL=index.js.map
