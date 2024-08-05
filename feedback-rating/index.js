import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as o}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const g={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:g.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},h={D1:{fontFamily:g.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:g.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:g.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:g.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:g.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:g.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:g.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:g.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:g.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:g.Regular,fontSize:.75,lineHeight:1.125}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,B=p||m||Function("return this")(),y=B.Symbol,S=y,b=Object.prototype,D=b.hasOwnProperty,$=b.toString,v=S?S.toStringTag:void 0;var E=function(e){var t=D.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var o=$.call(e);return n&&(t?e[v]=r:delete e[v]),o},H=Object.prototype.toString;var x=E,w=function(e){return H.call(e)},C=y?y.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?x(e):w(e)};var k=A,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==k(e)},O=f,T=_,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var j=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(I.test(e)||!W.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=A,R=P;var L,V=function(e){if(!R(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=B["__core-js_shared__"],X=(L=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var M=function(e){return!!X&&X in e},U=Function.prototype.toString;var Z=V,Y=M,q=P,J=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,re=ee.hasOwnProperty,ne=RegExp("^"+te.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||Y(e))&&(Z(e)?ne:K).test(J(e))},ae=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ae(e,t);return oe(r)?r:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=le,he=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(se){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return he.call(t,e)?t[e]:void 0},Fe=le,fe=Object.prototype.hasOwnProperty;var pe=le;var me=de,Be=ge,ye=ue,Se=function(e){var t=this.__data__;return Fe?void 0!==t[e]:fe.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}De.prototype.clear=me,De.prototype.delete=Be,De.prototype.get=ye,De.prototype.has=Se,De.prototype.set=be;var $e=De;var ve=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var r=e.length;r--;)if(Ee(e[r][0],t))return r;return-1},xe=He,we=Array.prototype.splice;var Ce=He;var Ae=He;var ke=He;var ze=ve,_e=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():we.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=Ce(t,e);return r<0?void 0:t[r][1]},Te=function(e){return Ae(this.__data__,e)>-1},We=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ie(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ie.prototype.clear=ze,Ie.prototype.delete=_e,Ie.prototype.get=Oe,Ie.prototype.has=Te,Ie.prototype.set=We;var je=Ie,Pe=ie(B,"Map"),Ne=$e,Re=je,Le=Pe;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ge=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Xe=Ge;var Me=Ge;var Ue=Ge;var Ze=Ge;var Ye=function(){this.size=0,this.__data__={hash:new Ne,map:new(Le||Re),string:new Ne}},qe=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Me(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},Qe=function(e,t){var r=Ze(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}et.prototype.clear=Ye,et.prototype.delete=qe,et.prototype.get=Je,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(rt.Cache||tt),r}rt.Cache=tt;var nt=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,r,n,o){t.push(n?o.replace(at,"$1"):r||e)})),t}));var lt=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},ct=f,dt=_,gt=y?y.prototype:void 0,st=gt?gt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return st?st.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ut=ht;var Ft=f,ft=j,pt=it,mt=function(e){return null==e?"":ut(e)};var Bt=_;var yt=function(e,t){return Ft(e)?e:ft(e,t)?[e]:pt(mt(e))},St=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var bt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[St(t[r++])];return r&&r==n?e:void 0};var Dt=F((function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n}));const $t=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const Ht={collections:{base:s,oneservice:h},defaultValue:"base"},xt=e=>t=>{const r=t.theme,n=vt(Ht,r[Et.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},wt={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return g.Bold;case 600:case"semibold":return g.Semibold;case 300:case"light":return g.Light;case 400:case"regular":return g.Regular;default:return""}},At=(e,t)=>r=>{var o;const a=wt[e].fontFamily(r),i=wt[e].fontWeight(r);return Object.values(g).includes(a)?n`
                font-family: ${Ct(t)||Ct(i)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(o=kt(t)||i)&&void 0!==o?o:"normal"};
        `},kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,r=!1)=>o=>{const a=wt[e],i=a.fontSize(o);return n`
            ${At(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(o)||0}rem !important;
            ${n`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${zt(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${zt(r)}
        `,Tt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=vt(Tt,r[Et.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},It={Brand:{1:Wt("Brand.1"),2:Wt("Brand.2"),3:Wt("Brand.3"),4:Wt("Brand.4"),5:Wt("Brand.5"),6:Wt("Brand.6")},Primary:Wt("Primary"),PrimaryDark:Wt("PrimaryDark"),Secondary:Wt("Secondary"),Accent:{Light:{1:Wt("Accent.Light.1"),2:Wt("Accent.Light.2"),3:Wt("Accent.Light.3"),4:Wt("Accent.Light.4"),5:Wt("Accent.Light.5"),6:Wt("Accent.Light.6")},Dark:{1:Wt("Accent.Dark.1"),2:Wt("Accent.Dark.2"),3:Wt("Accent.Dark.3")}},Neutral:{1:Wt("Neutral.1"),2:Wt("Neutral.2"),3:Wt("Neutral.3"),4:Wt("Neutral.4"),5:Wt("Neutral.5"),6:Wt("Neutral.6"),7:Wt("Neutral.7"),8:Wt("Neutral.8")},Validation:{Green:{Text:Wt("Validation.Green.Text"),Icon:Wt("Validation.Green.Icon"),Border:Wt("Validation.Green.Border"),Background:Wt("Validation.Green.Background")},Orange:{Text:Wt("Validation.Orange.Text"),Icon:Wt("Validation.Orange.Icon"),Border:Wt("Validation.Orange.Border"),Background:Wt("Validation.Orange.Background"),Badge:Wt("Validation.Orange.Badge")},Red:{Text:Wt("Validation.Red.Text"),Icon:Wt("Validation.Red.Icon"),Border:Wt("Validation.Red.Border"),Background:Wt("Validation.Red.Background")},Blue:{Text:Wt("Validation.Blue.Text"),Icon:Wt("Validation.Blue.Icon"),Border:Wt("Validation.Blue.Border"),Background:Wt("Validation.Blue.Background")}},Shadow:{Accent:Wt("Shadow.Accent"),Red:Wt("Shadow.Red"),Elevation:Wt("Shadow.Elevation")}};var jt;!function(e){e.D1=r.h1`
        ${e=>n`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Pt=r.a`
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
`,Nt=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=r=>{var{external:n=!1,children:o}=r,a=d(r,["external","children"]);return e(Pt,Object.assign({},a,{children:[o,n&&t(Nt,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Vt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Gt="Submit",Xt="Rate your experience",Mt=5,Ut=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Zt=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${It.Primary};
    ${Ut}:focus-visible + & {
        outline: 0.125rem solid ${It.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Yt=r(i)`
    ${Zt}
`,qt=r(l)`
    ${Zt}
`,Jt=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Kt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Qt=r=>{const{description:n,rating:o,onRatingChange:a}=r,i=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=o?qt:Yt,{"aria-label":r})};return t(Kt,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Mt)].map(((r,n)=>{const l=n+1;return e(Jt,{children:[t(Ut,{type:"radio",name:"star",checked:l===o,onChange:()=>(e=>{a(e)})(l)}),i(l)]},l)}))}))},er={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},tr=e=>Object.keys(er).reduce(((t,r)=>{const n=er[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),rr=tr("max-width"),nr=(tr("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),or=o`
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
    animation: ${or} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ir=r(ar)`
    animation-delay: -0.45s;
`,lr=r(ar)`
    animation-delay: -0.3s;
`,cr=r(ar)`
    animation-delay: -0.15s;
`,dr={collections:{base:{InputBoxShadow:n`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},gr=e=>t=>{var r;const n=t.theme,o=vt(dr,n[Et.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?$t(o,e,n.options.designToken):$t(o,e)},sr={InputBoxShadow:gr("InputBoxShadow"),InputErrorBoxShadow:gr("InputErrorBoxShadow"),ElevationBoxShadow:gr("ElevationBoxShadow"),Table:{Header:gr("Table.Header"),Cell:{Primary:gr("Table.Cell.Primary"),Secondary:gr("Table.Cell.Secondary"),Selected:gr("Table.Cell.Selected"),Hover:gr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:gr("Button.Danger.BackgroundColor"),Hover:gr("Button.Danger.Hover"),Primary:gr("Button.Danger.Primary"),Border:gr("Button.Danger.Border")}}},hr=r.button`
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
                        ${e.$buttonIsDanger?sr.Button.Danger.Border:It.Primary};

                    color: ${e.$buttonIsDanger?sr.Button.Danger.Primary:It.Primary};
                `;case"light":return n`
                    background-color: ${It.Neutral[8]};
                    border: 1px solid ${It.Neutral[5]};

                    color: ${e.$buttonIsDanger?sr.Button.Danger.Primary:It.Primary};
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

                    color: ${e.$buttonIsDanger?sr.Button.Danger.Primary:It.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?sr.Button.Danger.Hover:It.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?sr.Button.Danger.BackgroundColor:It.Primary};
                    border: 1px solid transparent;

                    ${rr.mobileL} {
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

                    ${rr.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${_t("H4","semibold")}

                    ${rr.mobileS} {
                        height: auto;
                    }
                `}
`,ur=r((({color:r,className:n,size:o=18})=>e(nr,Object.assign({className:n,$size:o,$color:r},{children:[t(ar,{id:"inner1",$size:o-2,$borderWidth:2,$color:r}),t(ir,{id:"inner2",$size:o-2,$borderWidth:2,$color:r}),t(lr,{id:"inner3",$size:o-2,$borderWidth:2,$color:r}),t(cr,{id:"inner4",$size:o-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?sr.Button.Danger.Primary:It.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=It.Neutral[3](e);break;default:t=It.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Fr={Default:c.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(hr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:a},s,g,{children:[i&&t(ur,Object.assign({},s)),t("span",{children:o})]}))})),Small:c.forwardRef(((r,n)=>{const{children:o,disabled:a=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(hr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:a},s,g,{children:[i&&t(ur,Object.assign({},s,{size:16})),t("span",{children:o})]}))}))},fr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,pr=r.div`
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
`,mr=r.div`
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
`,Br=r(Fr.Default)`
    margin-top: 1rem;
    width: 100%;
`,yr=r=>{const{imgSrc:n,buttonLabel:o,description:a,rating:i,onRatingChange:l,onSubmit:c}=r,g=d(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),s=null!=n?n:Vt,h=null!=a?a:Xt;return e(pr,Object.assign({},g,{children:[s&&t(fr,{src:s,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(mr,{children:[t(jt.H3,Object.assign({weight:"semibold"},{children:h})),t(Qt,{description:h,rating:i,onRatingChange:l}),t(Br,Object.assign({disabled:!i,onClick:c,type:"button"},{children:null!=o?o:Gt}))]})]}))};export{yr as FeedbackRating};
//# sourceMappingURL=index.js.map
