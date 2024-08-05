import e,{css as t}from"styled-components";import{jsxs as n,jsx as r}from"react/jsx-runtime";import{ExternalIcon as i}from"@lifesg/react-icons/external";const o={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},a={D1:{fontFamily:o.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:o.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:o.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:o.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:o.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:o.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:o.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:o.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:o.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},l={D1:{fontFamily:o.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:o.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:o.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:o.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:o.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:o.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:o.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:o.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:o.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:o.Regular,fontSize:.75,lineHeight:1.125}};var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,f="object"==typeof c&&c&&c.Object===Object&&c,h="object"==typeof self&&self&&self.Object===Object&&self,d=f||h||Function("return this")(),u=d.Symbol,y=u,p=Object.prototype,s=p.hasOwnProperty,B=p.toString,S=y?y.toStringTag:void 0;var D=function(e){var t=s.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=B.call(e);return r&&(t?e[S]=n:delete e[S]),i},m=Object.prototype.toString;var E=D,v=function(e){return m.call(e)},H=u?u.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?E(e):v(e)};var A=b,$=function(e){return null!=e&&"object"==typeof e};var x=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==A(e)},C=F,_=x,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var w=function(e,t){if(C(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(k.test(e)||!z.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=b,W=T;var j,I=function(e){if(!W(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=d["__core-js_shared__"],R=(j=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(e){return!!R&&R in e},P=Function.prototype.toString;var N=I,G=V,X=T,M=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,Y=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(e){return!(!X(e)||G(e))&&(N(e)?Y:U).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Z(n)?n:void 0},ne=te(Object,"create"),re=ne;var ie=function(){this.__data__=re?re(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},ge=ne,Fe=Object.prototype.hasOwnProperty;var fe=ne;var he=ie,de=oe,ue=ce,ye=function(e){var t=this.__data__;return ge?void 0!==t[e]:Fe.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}se.prototype.clear=he,se.prototype.delete=de,se.prototype.get=ue,se.prototype.has=ye,se.prototype.set=pe;var Be=se;var Se=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},Ee=me,ve=Array.prototype.splice;var He=me;var be=me;var Ae=me;var $e=Se,xe=function(e){var t=this.__data__,n=Ee(t,e);return!(n<0)&&(n==t.length-1?t.pop():ve.call(t,n,1),--this.size,!0)},Ce=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},_e=function(e){return be(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=$e,ke.prototype.delete=xe,ke.prototype.get=Ce,ke.prototype.has=_e,ke.prototype.set=ze;var we=ke,Te=te(d,"Map"),Oe=Be,We=we,je=Te;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Le;var Ve=Le;var Pe=Le;var Ne=Le;var Ge=function(){this.size=0,this.__data__={hash:new Oe,map:new(je||We),string:new Oe}},Xe=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Ve(this,e).get(e)},Ue=function(e){return Pe(this,e).has(e)},qe=function(e,t){var n=Ne(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ge,Je.prototype.delete=Xe,Je.prototype.get=Me,Je.prototype.has=Ue,Je.prototype.set=qe;var Ke=Je;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qe.Cache||Ke),n}Qe.Cache=Ke;var Ye=Qe;var Ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ze,(function(e,n,r,i){t.push(r?i.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},rt=F,it=x,ot=u?u.prototype:void 0,at=ot?ot.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(it(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ct=lt;var gt=F,Ft=w,ft=tt,ht=function(e){return null==e?"":ct(e)};var dt=x;var ut=function(e,t){return gt(e)?e:Ft(e,t)?[e]:ft(ht(e))},yt=function(e){if("string"==typeof e||dt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var pt=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var st=g((function(e,t,n){var r=null==e?void 0:pt(e,t);return void 0===r?n:r}));const Bt=(e,t,n)=>t?st(n,t)||st(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return st(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const mt={collections:{base:a,oneservice:l},defaultValue:"base"},Et=e=>t=>{const n=t.theme,r=St(mt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},vt={D1:{fontFamily:Et("D1.fontFamily"),fontSize:Et("D1.fontSize"),fontWeight:Et("D1.fontWeight"),lineHeight:Et("D1.lineHeight"),letterSpacing:Et("D1.letterSpacing")},D2:{fontFamily:Et("D2.fontFamily"),fontSize:Et("D2.fontSize"),fontWeight:Et("D2.fontWeight"),lineHeight:Et("D2.lineHeight"),letterSpacing:Et("D2.letterSpacing")},D3:{fontFamily:Et("D3.fontFamily"),fontSize:Et("D3.fontSize"),fontWeight:Et("D3.fontWeight"),lineHeight:Et("D3.lineHeight"),letterSpacing:Et("D3.letterSpacing")},D4:{fontFamily:Et("D4.fontFamily"),fontSize:Et("D4.fontSize"),fontWeight:Et("D4.fontWeight"),lineHeight:Et("D4.lineHeight"),letterSpacing:Et("D4.letterSpacing")},DBody:{fontFamily:Et("DBody.fontFamily"),fontSize:Et("DBody.fontSize"),fontWeight:Et("DBody.fontWeight"),lineHeight:Et("DBody.lineHeight"),letterSpacing:Et("DBody.letterSpacing")},H1:{fontFamily:Et("H1.fontFamily"),fontSize:Et("H1.fontSize"),fontWeight:Et("H1.fontWeight"),lineHeight:Et("H1.lineHeight"),letterSpacing:Et("H1.letterSpacing")},H2:{fontFamily:Et("H2.fontFamily"),fontSize:Et("H2.fontSize"),fontWeight:Et("H2.fontWeight"),lineHeight:Et("H2.lineHeight"),letterSpacing:Et("H2.letterSpacing")},H3:{fontFamily:Et("H3.fontFamily"),fontSize:Et("H3.fontSize"),fontWeight:Et("H3.fontWeight"),lineHeight:Et("H3.lineHeight"),letterSpacing:Et("H3.letterSpacing")},H4:{fontFamily:Et("H4.fontFamily"),fontSize:Et("H4.fontSize"),fontWeight:Et("H4.fontWeight"),lineHeight:Et("H4.lineHeight"),letterSpacing:Et("H4.letterSpacing")},H5:{fontFamily:Et("H5.fontFamily"),fontSize:Et("H5.fontSize"),fontWeight:Et("H5.fontWeight"),lineHeight:Et("H5.lineHeight"),letterSpacing:Et("H5.letterSpacing")},H6:{fontFamily:Et("H6.fontFamily"),fontSize:Et("H6.fontSize"),fontWeight:Et("H6.fontWeight"),lineHeight:Et("H6.lineHeight"),letterSpacing:Et("H6.letterSpacing")},Body:{fontFamily:Et("Body.fontFamily"),fontSize:Et("Body.fontSize"),fontWeight:Et("Body.fontWeight"),lineHeight:Et("Body.lineHeight"),letterSpacing:Et("Body.letterSpacing")},BodySmall:{fontFamily:Et("BodySmall.fontFamily"),fontSize:Et("BodySmall.fontSize"),fontWeight:Et("BodySmall.fontWeight"),lineHeight:Et("BodySmall.lineHeight"),letterSpacing:Et("BodySmall.letterSpacing")},XSmall:{fontFamily:Et("XSmall.fontFamily"),fontSize:Et("XSmall.fontSize"),fontWeight:Et("XSmall.fontWeight"),lineHeight:Et("XSmall.lineHeight"),letterSpacing:Et("XSmall.letterSpacing")}},Ht=e=>{switch(e){case 700:case"bold":return o.Bold;case 600:case"semibold":return o.Semibold;case 300:case"light":return o.Light;case 400:case"regular":return o.Regular;default:return""}},bt=(e,n)=>r=>{var i;const a=vt[e].fontFamily(r),l=vt[e].fontWeight(r);return Object.values(o).includes(a)?t`
                font-family: ${Ht(n)||Ht(l)||a};
                font-weight: normal !important;
            `:t`
            font-family: ${a};
            font-weight: ${null!==(i=At(n)||l)&&void 0!==i?i:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$t=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},xt={getFontFamily:bt,getTextStyle:(e,n,r=!1)=>i=>{const o=vt[e],a=o.fontSize(i);return t`
            ${bt(e,n)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(i)||0}rem !important;
            ${t`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,n=!1,r=void 0)=>n?t`
            display: block;
            ${$t(r)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${$t(r)}
        `};"function"==typeof SuppressedError&&SuppressedError;const Ct={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=St(Ct,n[Dt.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},zt=(_t("Brand.1"),_t("Brand.2"),_t("Brand.3"),_t("Brand.4"),_t("Brand.5"),_t("Brand.6"),_t("Primary")),kt=(_t("PrimaryDark"),_t("Secondary")),wt=(_t("Accent.Light.1"),_t("Accent.Light.2"),_t("Accent.Light.3"),_t("Accent.Light.4"),_t("Accent.Light.5"),_t("Accent.Light.6"),_t("Accent.Dark.1"),_t("Accent.Dark.2"),_t("Accent.Dark.3"),{1:_t("Neutral.1"),2:_t("Neutral.2"),3:_t("Neutral.3"),4:_t("Neutral.4"),5:_t("Neutral.5"),6:_t("Neutral.6"),7:_t("Neutral.7"),8:_t("Neutral.8")});_t("Validation.Green.Text"),_t("Validation.Green.Icon"),_t("Validation.Green.Border"),_t("Validation.Green.Background"),_t("Validation.Orange.Text"),_t("Validation.Orange.Icon"),_t("Validation.Orange.Border"),_t("Validation.Orange.Background"),_t("Validation.Orange.Badge"),_t("Validation.Red.Text"),_t("Validation.Red.Icon"),_t("Validation.Red.Border"),_t("Validation.Red.Background"),_t("Validation.Blue.Text"),_t("Validation.Blue.Icon"),_t("Validation.Blue.Border"),_t("Validation.Blue.Background"),_t("Shadow.Accent"),_t("Shadow.Red"),_t("Shadow.Elevation");var Tt;!function(n){n.D1=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D2=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D3=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D4=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.DBody=e.h1`
        ${e=>t`
                ${xt.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H1=e.h1`
        ${e=>t`
                ${xt.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H2=e.h2`
        ${e=>t`
                ${xt.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H3=e.h3`
        ${e=>t`
                ${xt.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H4=e.h4`
        ${e=>t`
                ${xt.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H5=e.h5`
        ${e=>t`
                ${xt.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H6=e.h6`
        ${e=>t`
                ${xt.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Body=e.p`
        ${e=>t`
                ${xt.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.BodySmall=e.p`
        ${e=>t`
                ${xt.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.XSmall=e.span`
        ${e=>t`
                ${xt.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Hyperlink={Default:e=>jt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>jt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const Ot=e.a`
    ${e=>t`
            ${xt.getTextStyle(e.textStyle,e.weight)}
            color: ${zt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt};

                svg {
                    color: ${kt};
                }
            }
        `}
`,Wt=e(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,jt=e=>{var{external:t=!1,children:i}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["external","children"]);return n(Ot,Object.assign({},o,{children:[i,t&&r(Wt,{})]}))};var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));export{It as RedirectScope,Tt as Text,vt as TextStyle,xt as TextStyleHelper};
//# sourceMappingURL=index.js.map
