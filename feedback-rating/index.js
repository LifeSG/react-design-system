import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as a,keyframes as r}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;const g={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},s={D1:{fontFamily:g.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},u={D1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:g.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},h={D1:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:g.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:g.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof f&&f&&f.Object===Object&&f,B="object"==typeof self&&self&&self.Object===Object&&self,S=m||B||Function("return this")(),y=S.Symbol,b=y,D=Object.prototype,$=D.hasOwnProperty,H=D.toString,v=b?b.toStringTag:void 0;var E=function(e){var t=$.call(e,v),n=e[v];try{e[v]=void 0;var a=!0}catch(e){}var r=H.call(e);return a&&(t?e[v]=n:delete e[v]),r},x=Object.prototype.toString;var k=E,w=function(e){return x.call(e)},z=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?k(e):w(e)};var A=C,O=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==A(e)},V=p,P=_,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var I=function(e,t){if(V(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!P(e))||(T.test(e)||!W.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=C,N=j;var L,J=function(e){if(!N(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=S["__core-js_shared__"],G=(L=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var M=function(e){return!!G&&G in e},U=Function.prototype.toString;var Z=J,Y=M,q=j,K=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,ae=te.hasOwnProperty,re=RegExp("^"+ne.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||Y(e))&&(Z(e)?re:Q).test(K(e))},ie=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=ie(e,t);return oe(n)?n:void 0},ce=le(Object,"create"),de=ce;var ge=function(){this.__data__=de?de(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=ce,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},Fe=ce,pe=Object.prototype.hasOwnProperty;var me=ce;var Be=ge,Se=se,ye=fe,be=function(e){var t=this.__data__;return Fe?void 0!==t[e]:pe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}$e.prototype.clear=Be,$e.prototype.delete=Se,$e.prototype.get=ye,$e.prototype.has=be,$e.prototype.set=De;var He=$e;var ve=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t};var xe=function(e,t){for(var n=e.length;n--;)if(Ee(e[n][0],t))return n;return-1},ke=xe,we=Array.prototype.splice;var ze=xe;var Ce=xe;var Ae=xe;var Oe=ve,_e=function(e){var t=this.__data__,n=ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},Ve=function(e){var t=this.__data__,n=ze(t,e);return n<0?void 0:t[n][1]},Pe=function(e){return Ce(this.__data__,e)>-1},We=function(e,t){var n=this.__data__,a=Ae(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Te.prototype.clear=Oe,Te.prototype.delete=_e,Te.prototype.get=Ve,Te.prototype.has=Pe,Te.prototype.set=We;var Ie=Te,je=le(S,"Map"),Re=He,Ne=Ie,Le=je;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var n=e.__data__;return Je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ge=Xe;var Me=Xe;var Ue=Xe;var Ze=Xe;var Ye=function(){this.size=0,this.__data__={hash:new Re,map:new(Le||Ne),string:new Re}},qe=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Me(this,e).get(e)},Qe=function(e){return Ue(this,e).has(e)},et=function(e,t){var n=Ze(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}tt.prototype.clear=Ye,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function at(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=e.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(at.Cache||nt),n}at.Cache=nt;var rt=at;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,lt=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,a,r){t.push(a?r.replace(it,"$1"):n||e)})),t}));var ct=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},dt=p,gt=_,st=y?y.prototype:void 0,ut=st?st.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(dt(t))return ct(t,e)+"";if(gt(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ft=ht;var Ft=p,pt=I,mt=lt,Bt=function(e){return null==e?"":ft(e)};var St=_;var yt=function(e,t){return Ft(e)?e:pt(e,t)?[e]:mt(Bt(e))},bt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,a=(t=yt(t,e)).length;null!=e&&n<a;)e=e[bt(t[n++])];return n&&n==a?e:void 0};var $t=F((function(e,t,n){var a=null==e?void 0:Dt(e,t);return void 0===a?n:a}));const Ht=(e,t,n)=>t?$t(n,t)||$t(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return $t(e.collections,n)};var Et;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Et||(Et={}));const xt={collections:{base:s,oneservice:h,plusJakartaSans:u},defaultValue:"base"},kt=e=>t=>{const n=t.theme,a=vt(xt,n[Et.textStyleScheme]);return n.options&&n.options.textStyle?Ht(a,e,n.options.textStyle):Ht(a,e)},wt={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing"),fontVariant:kt("D1.fontVariant")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing"),fontVariant:kt("D2.fontVariant")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing"),fontVariant:kt("D3.fontVariant")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing"),fontVariant:kt("D4.fontVariant")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing"),fontVariant:kt("DBody.fontVariant")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing"),fontVariant:kt("H1.fontVariant")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing"),fontVariant:kt("H2.fontVariant")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing"),fontVariant:kt("H3.fontVariant")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing"),fontVariant:kt("H4.fontVariant")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing"),fontVariant:kt("H5.fontVariant")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing"),fontVariant:kt("H6.fontVariant")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing"),fontVariant:kt("Body.fontVariant")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing"),fontVariant:kt("BodySmall.fontVariant")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing"),fontVariant:kt("XSmall.fontVariant")}},zt=[g.OpenSans,g.PlusJakartaSans],Ct=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},At=(e,t)=>n=>{var r;const o=wt[e].fontFamily(n),i=wt[e].fontWeight(n),l=zt.find((e=>Object.values(e).includes(o)));return l?a`
                font-family: ${Ct(l,t)||Ct(l,i)||o};
                font-weight: normal !important;
            `:a`
            font-family: ${o};
            font-weight: ${null!==(r=Ot(t)||i)&&void 0!==r?r:"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_t=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vt=(e,t,n=!1)=>r=>{const o=wt[e],i=o.fontSize(r);return a`
            ${At(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${a`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Pt=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${_t(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${_t(n)}
        `,Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const n=t.theme,a=vt(Wt,n[Et.colorScheme]);return n.options&&n.options.color?Ht(a,e,n.options.color):Ht(a,e)},It={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}};var jt;!function(e){e.D1=n.h1`
        ${e=>a`
                ${Vt("D1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${Vt("D2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${Vt("D3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${Vt("D4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${Vt("DBody",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${Vt("H1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${Vt("H2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${Vt("H3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${Vt("H4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${Vt("H5",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${Vt("H6",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${Vt("Body",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${Vt("BodySmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${Vt("XSmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Rt=n.a`
    ${e=>a`
            ${Vt(e.textStyle,e.weight)}
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
`,Nt=n(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:a=!1,children:r}=n,o=d(n,["external","children"]);return e(Rt,Object.assign({},o,{children:[r,a&&t(Nt,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const Xt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Gt="Submit",Mt="Rate your experience",Ut=5,Zt=n.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Yt=a`
    width: 2.75rem;
    height: 2.75rem;
    color: ${It.Primary};
    ${Zt}:focus-visible + & {
        outline: 0.125rem solid ${It.Primary};
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
`,tn=n=>{const{description:a,rating:r,onRatingChange:o}=n,i=e=>{const n=`${e} star${1===e?"":"s"}`;return t(e<=r?Kt:qt,{"aria-label":n})};return t(en,Object.assign({role:"radiogroup","aria-label":a},{children:[...Array(Ut)].map(((n,a)=>{const l=a+1;return e(Qt,{children:[t(Zt,{type:"radio",name:"star",checked:l===r,onChange:()=>(e=>{o(e)})(l)}),i(l)]},l)}))}))},nn={collections:{base:{InputBoxShadow:a`
        inset 0 0 4px 0px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 4px 0px ${It.Shadow.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:a`
        inset 0 0 3px 0px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 3px 0px ${It.Shadow.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},an=e=>t=>{var n;const a=t.theme,r=vt(nn,a[Et.designTokenScheme]);return(null===(n=a.options)||void 0===n?void 0:n.designToken)?Ht(r,e,a.options.designToken):Ht(r,e)},rn={InputBoxShadow:an("InputBoxShadow"),InputErrorBoxShadow:an("InputErrorBoxShadow"),ElevationBoxShadow:an("ElevationBoxShadow"),Table:{Header:an("Table.Header"),Cell:{Primary:an("Table.Cell.Primary"),Secondary:an("Table.Cell.Secondary"),Selected:an("Table.Cell.Selected"),Hover:an("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:an("Button.Danger.BackgroundColor"),Hover:an("Button.Danger.Hover"),Primary:an("Button.Danger.Primary"),Border:an("Button.Danger.Border")}}},on={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ln=e=>Object.keys(on).reduce(((t,n)=>{const a=on[n];return t[n]=`@media screen and (${e}: ${a}px)`,t}),{}),cn=ln("max-width"),dn=(ln("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),gn=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sn=n.div`
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
    animation: ${gn} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,un=n(sn)`
    animation-delay: -0.45s;
`,hn=n(sn)`
    animation-delay: -0.3s;
`,fn=n(sn)`
    animation-delay: -0.15s;
`,Fn=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return a`
                    background-color: ${It.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?rn.Button.Danger.Border:It.Primary};

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:It.Primary};
                `;case"light":return a`
                    background-color: ${It.Neutral[8]};
                    border: 1px solid ${It.Neutral[5]};

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:It.Primary};
                `;case"disabled":return a`
                    background-color: ${It.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${It.Neutral[3]};
                `;case"link":return a`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?rn.Button.Danger.Primary:It.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?rn.Button.Danger.Hover:It.Secondary};
                    }
                `;default:return a`
                    background-color: ${e.$buttonIsDanger?rn.Button.Danger.BackgroundColor:It.Primary};
                    border: 1px solid transparent;

                    ${cn.mobileL} {
                        width: 100%;
                    }

                    color: ${It.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?a`
                    height: 2.5rem;
                    ${Vt("H5","semibold")}

                    ${cn.mobileS} {
                        height: auto;
                    }
                `:a`
                    height: 3rem;
                    ${Vt("H4","semibold")}

                    ${cn.mobileS} {
                        height: auto;
                    }
                `}
`,pn=n((({color:n,className:a,size:r=18})=>e(dn,Object.assign({className:a,$size:r,$color:n,"data-testid":"component-loading-spinner"},{children:[t(sn,{id:"inner1",$size:r-2,$borderWidth:2,$color:n}),t(un,{id:"inner2",$size:r-2,$borderWidth:2,$color:n}),t(hn,{id:"inner3",$size:r-2,$borderWidth:2,$color:n}),t(fn,{id:"inner4",$size:r-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?rn.Button.Danger.Primary:It.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=It.Neutral[3](e);break;default:t=It.Neutral[8](e)}return a`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,mn={Default:c.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,g=d(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(Fn,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(pn,Object.assign({},s)),t("span",{children:r})]}))})),Small:c.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,g=d(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(Fn,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(pn,Object.assign({},s,{size:16})),t("span",{children:r})]}))}))},Bn=n.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Sn=n.div`
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
`,Dn=n=>{const{imgSrc:a,buttonLabel:r,description:o,rating:i,onRatingChange:l,onSubmit:c}=n,g=d(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),s=null!=a?a:Xt,u=null!=o?o:Mt;return e(Sn,Object.assign({},g,{children:[s&&t(Bn,{"data-testid":"feedback-banner-image",src:s,alt:"",onError:e=>e.currentTarget.style.display="none"}),e(yn,{children:[t(jt.H3,Object.assign({weight:"semibold"},{children:u})),t(tn,{description:u,rating:i,onRatingChange:l}),t(bn,Object.assign({disabled:!i,onClick:c,type:"button"},{children:null!=r?r:Gt}))]})]}))};export{Dn as FeedbackRating};
//# sourceMappingURL=index.js.map
