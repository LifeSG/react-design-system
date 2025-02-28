import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r,keyframes as a}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import d from"react";function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const g={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},s={D1:{fontFamily:g.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},h={D1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:g.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},u={D1:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:g.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:g.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof F&&F&&F.Object===Object&&F,S="object"==typeof self&&self&&self.Object===Object&&self,B=m||S||Function("return this")(),y=B.Symbol,b=y,D=Object.prototype,$=D.hasOwnProperty,v=D.toString,H=b?b.toStringTag:void 0;var E=function(e){var t=$.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var a=v.call(e);return r&&(t?e[H]=n:delete e[H]),a},x=Object.prototype.toString;var k=E,w=function(e){return x.call(e)},z=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?k(e):w(e)};var A=C,O=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==A(e)},P=p,W=_,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var j=function(e,t){if(P(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(I.test(e)||!T.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=C,L=R;var V,J=function(e){if(!L(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=B["__core-js_shared__"],G=(V=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var M=function(e){return!!G&&G in e},U=Function.prototype.toString;var Z=J,Y=M,q=R,K=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ae=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||Y(e))&&(Z(e)?ae:Q).test(K(e))},ie=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=ie(e,t);return oe(n)?n:void 0},de=le(Object,"create"),ce=de;var ge=function(){this.__data__=ce?ce(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=de,ue=Object.prototype.hasOwnProperty;var Fe=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},fe=de,pe=Object.prototype.hasOwnProperty;var me=de;var Se=ge,Be=se,ye=Fe,be=function(e){var t=this.__data__;return fe?void 0!==t[e]:pe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=Se,$e.prototype.delete=Be,$e.prototype.get=ye,$e.prototype.has=be,$e.prototype.set=De;var ve=$e;var He=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var xe=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},ke=xe,we=Array.prototype.splice;var ze=xe;var Ce=xe;var Ae=xe;var Oe=He,_e=function(e){var t=this.__data__,n=ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},Pe=function(e){var t=this.__data__,n=ze(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ce(this.__data__,e)>-1},Te=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Oe,Ie.prototype.delete=_e,Ie.prototype.get=Pe,Ie.prototype.has=We,Ie.prototype.set=Te;var je=Ie,Re=le(B,"Map"),Ne=ve,Le=je,Ve=Re;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var n=e.__data__;return Je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ge=Xe;var Me=Xe;var Ue=Xe;var Ze=Xe;var Ye=function(){this.size=0,this.__data__={hash:new Ne,map:new(Ve||Le),string:new Ne}},qe=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Me(this,e).get(e)},Qe=function(e){return Ue(this,e).has(e)},et=function(e,t){var n=Ze(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ye,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var at=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,lt=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,a){t.push(r?a.replace(it,"$1"):n||e)})),t}));var dt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ct=p,gt=_,st=y?y.prototype:void 0,ht=st?st.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(ct(t))return dt(t,e)+"";if(gt(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ft=ut;var ft=p,pt=j,mt=lt,St=function(e){return null==e?"":Ft(e)};var Bt=_;var yt=function(e,t){return ft(e)?e:pt(e,t)?[e]:mt(St(e))},bt=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var $t=f((function(e,t,n){var r=null==e?void 0:Dt(e,t);return void 0===r?n:r}));const vt=(e,t,n)=>t?$t(n,t)||$t(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return $t(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const xt={collections:{base:s,oneservice:u,plusJakartaSans:h},defaultValue:"base"},kt=e=>t=>{const n=t.theme,r=Ht(xt,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},wt={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing")}},zt=[g.OpenSans,g.PlusJakartaSans],Ct=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},At=(e,t)=>n=>{var a;const o=wt[e].fontFamily(n),i=wt[e].fontWeight(n),l=zt.find((e=>Object.values(e).includes(o)));return l?r`
                font-family: ${Ct(l,t)||Ct(l,i)||o};
                font-weight: normal !important;
            `:r`
            font-family: ${o};
            font-weight: ${null!==(a=Ot(t)||i)&&void 0!==a?a:"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_t=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,n=!1)=>a=>{const o=wt[e],i=o.fontSize(a);return r`
            ${At(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Wt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${_t(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${_t(n)}
        `,Tt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},It=e=>t=>{const n=t.theme,r=Ht(Tt,n[Et.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},jt={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")},Blue:{Text:It("Validation.Blue.Text"),Icon:It("Validation.Blue.Icon"),Border:It("Validation.Blue.Border"),Background:It("Validation.Blue.Background")}},Shadow:{Accent:It("Shadow.Accent"),Red:It("Shadow.Red"),Elevation:It("Shadow.Elevation")}};var Rt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Nt=n.a`
    ${e=>r`
            ${Pt(e.textStyle,e.weight)}
            color: ${jt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jt.Secondary};

                svg {
                    color: ${jt.Secondary};
                }
            }
        `}
`,Lt=n(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=n=>{var{external:r=!1,children:a}=n,o=c(n,["external","children"]);return e(Nt,Object.assign({},o,{children:[a,r&&t(Lt,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const Xt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Gt="Submit",Mt="Rate your experience",Ut=5,Zt=n.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Yt=r`
    width: 2.75rem;
    height: 2.75rem;
    color: ${jt.Primary};
    ${Zt}:focus-visible + & {
        outline: 0.125rem solid ${jt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,qt=n(i)`
    ${Yt}
`,Kt=n(l)`
    ${Yt}
`,Qt=n.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,en=n.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,tn=n=>{const{description:r,rating:a,onRatingChange:o}=n,i=e=>{const n=`${e} star${1===e?"":"s"}`;return t(e<=a?Kt:qt,{"aria-label":n})};return t(en,Object.assign({role:"radiogroup","aria-label":r},{children:[...Array(Ut)].map(((n,r)=>{const l=r+1;return e(Qt,{children:[t(Zt,{type:"radio",name:"star",checked:l===a,onChange:()=>(e=>{o(e)})(l)}),i(l)]},l)}))}))},nn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rn=e=>Object.keys(nn).reduce(((t,n)=>{const r=nn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),an=rn("max-width"),on=(rn("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ln=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,dn=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||jt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ln} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cn=n(dn)`
    animation-delay: -0.45s;
`,gn=n(dn)`
    animation-delay: -0.3s;
`,sn=n(dn)`
    animation-delay: -0.15s;
`,hn={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${jt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${jt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${jt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${jt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${jt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${jt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},un=e=>t=>{var n;const r=t.theme,a=Ht(hn,r[Et.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?vt(a,e,r.options.designToken):vt(a,e)},Fn={InputBoxShadow:un("InputBoxShadow"),InputErrorBoxShadow:un("InputErrorBoxShadow"),ElevationBoxShadow:un("ElevationBoxShadow"),Table:{Header:un("Table.Header"),Cell:{Primary:un("Table.Cell.Primary"),Secondary:un("Table.Cell.Secondary"),Selected:un("Table.Cell.Selected"),Hover:un("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:un("Button.Danger.BackgroundColor"),Hover:un("Button.Danger.Hover"),Primary:un("Button.Danger.Primary"),Border:un("Button.Danger.Border")}}},fn=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return r`
                    background-color: ${jt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Fn.Button.Danger.Border:jt.Primary};

                    color: ${e.$buttonIsDanger?Fn.Button.Danger.Primary:jt.Primary};
                `;case"light":return r`
                    background-color: ${jt.Neutral[8]};
                    border: 1px solid ${jt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Fn.Button.Danger.Primary:jt.Primary};
                `;case"disabled":return r`
                    background-color: ${jt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jt.Neutral[3]};
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Fn.Button.Danger.Primary:jt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Fn.Button.Danger.Hover:jt.Secondary};
                    }
                `;default:return r`
                    background-color: ${e.$buttonIsDanger?Fn.Button.Danger.BackgroundColor:jt.Primary};
                    border: 1px solid transparent;

                    ${an.mobileL} {
                        width: 100%;
                    }

                    color: ${jt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?r`
                    height: 2.5rem;
                    ${Pt("H5","semibold")}

                    ${an.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    ${Pt("H4","semibold")}

                    ${an.mobileS} {
                        height: auto;
                    }
                `}
`,pn=n((({color:n,className:r,size:a=18})=>e(on,Object.assign({className:r,$size:a,$color:n},{children:[t(dn,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(cn,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(gn,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(sn,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Fn.Button.Danger.Primary:jt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=jt.Neutral[3](e);break;default:t=jt.Neutral[8](e)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,mn={Default:d.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:d=!1}=n,g=c(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:d};return e(fn,Object.assign({ref:r,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(pn,Object.assign({},s)),t("span",{children:a})]}))})),Small:d.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:d=!1}=n,g=c(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:d};return e(fn,Object.assign({ref:r,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(pn,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},Sn=n.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Bn=n.div`
    border-top: 1px solid ${jt.Neutral[5]};
    border-bottom: 1px solid ${jt.Neutral[5]};
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
`,yn=n.div`
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
`,bn=n(mn.Default)`
    margin-top: 1rem;
    width: 100%;
`,Dn=n=>{const{imgSrc:r,buttonLabel:a,description:o,rating:i,onRatingChange:l,onSubmit:d}=n,g=c(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),s=null!=r?r:Xt,h=null!=o?o:Mt;return e(Bn,Object.assign({},g,{children:[s&&t(Sn,{"data-testid":"feedback-banner-image",src:s,alt:"",onError:e=>e.currentTarget.style.display="none"}),e(yn,{children:[t(Rt.H3,Object.assign({weight:"semibold"},{children:h})),t(tn,{description:h,rating:i,onRatingChange:l}),t(bn,Object.assign({disabled:!i,onClick:d,type:"button"},{children:null!=a?a:Gt}))]})]}))};export{Dn as FeedbackRating};
//# sourceMappingURL=index.js.map
