import{jsxs as e,jsx as r}from"react/jsx-runtime";import n,{css as a,keyframes as t}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import s from"react";function d(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]])}return n}"function"==typeof SuppressedError&&SuppressedError;const g={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},c={D1:{fontFamily:g.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},m={D1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:g.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:g.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},b={D1:{fontFamily:g.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:g.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:g.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:g.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:g.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:g.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:g.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:g.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:g.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:g.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:g.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:g.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,y="object"==typeof h&&h&&h.Object===Object&&h,f="object"==typeof self&&self&&self.Object===Object&&self,p=y||f||Function("return this")(),x=p.Symbol,B=x,E=Object.prototype,D=E.hasOwnProperty,C=E.toString,S=B?B.toStringTag:void 0;var v=function(e){var r=D.call(e,S),n=e[S];try{e[S]=void 0;var a=!0}catch(e){}var t=C.call(e);return a&&(r?e[S]=n:delete e[S]),t},w=Object.prototype.toString;var A=v,z=function(e){return w.call(e)},$=x?x.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?A(e):z(e)};var k=H,O=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==k(e)},W=F,T=_,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var R=function(e,r){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!T(e))||(P.test(e)||!j.test(e)||null!=r&&e in Object(r))};var I=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},L=H,V=I;var J,N=function(e){if(!V(e))return!1;var r=L(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},X=p["__core-js_shared__"],G=(J=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var M=function(e){return!!G&&G in e},U=Function.prototype.toString;var Z=N,Y=M,q=I,K=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,re=Object.prototype,ne=ee.toString,ae=re.hasOwnProperty,te=RegExp("^"+ne.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!q(e)||Y(e))&&(Z(e)?te:Q).test(K(e))},oe=function(e,r){return null==e?void 0:e[r]};var le=function(e,r){var n=oe(e,r);return ie(n)?n:void 0},se=le(Object,"create"),de=se;var ge=function(){this.__data__=de?de(null):{},this.size=0};var ce=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},me=se,be=Object.prototype.hasOwnProperty;var he=function(e){var r=this.__data__;if(me){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return be.call(r,e)?r[e]:void 0},ue=se,Fe=Object.prototype.hasOwnProperty;var ye=se;var fe=ge,pe=ce,xe=he,Be=function(e){var r=this.__data__;return ue?void 0!==r[e]:Fe.call(r,e)},Ee=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===r?"__lodash_hash_undefined__":r,this};function De(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}De.prototype.clear=fe,De.prototype.delete=pe,De.prototype.get=xe,De.prototype.has=Be,De.prototype.set=Ee;var Ce=De;var Se=function(){this.__data__=[],this.size=0};var ve=function(e,r){return e===r||e!=e&&r!=r};var we=function(e,r){for(var n=e.length;n--;)if(ve(e[n][0],r))return n;return-1},Ae=we,ze=Array.prototype.splice;var $e=we;var He=we;var ke=we;var Oe=Se,_e=function(e){var r=this.__data__,n=Ae(r,e);return!(n<0)&&(n==r.length-1?r.pop():ze.call(r,n,1),--this.size,!0)},We=function(e){var r=this.__data__,n=$e(r,e);return n<0?void 0:r[n][1]},Te=function(e){return He(this.__data__,e)>-1},je=function(e,r){var n=this.__data__,a=ke(n,e);return a<0?(++this.size,n.push([e,r])):n[a][1]=r,this};function Pe(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}Pe.prototype.clear=Oe,Pe.prototype.delete=_e,Pe.prototype.get=We,Pe.prototype.has=Te,Pe.prototype.set=je;var Re=Pe,Ie=le(p,"Map"),Le=Ce,Ve=Re,Je=Ie;var Ne=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Xe=function(e,r){var n=e.__data__;return Ne(r)?n["string"==typeof r?"string":"hash"]:n.map},Ge=Xe;var Me=Xe;var Ue=Xe;var Ze=Xe;var Ye=function(){this.size=0,this.__data__={hash:new Le,map:new(Je||Ve),string:new Le}},qe=function(e){var r=Ge(this,e).delete(e);return this.size-=r?1:0,r},Ke=function(e){return Me(this,e).get(e)},Qe=function(e){return Ue(this,e).has(e)},er=function(e,r){var n=Ze(this,e),a=n.size;return n.set(e,r),this.size+=n.size==a?0:1,this};function rr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var a=e[r];this.set(a[0],a[1])}}rr.prototype.clear=Ye,rr.prototype.delete=qe,rr.prototype.get=Ke,rr.prototype.has=Qe,rr.prototype.set=er;var nr=rr;function ar(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var a=arguments,t=r?r.apply(this,a):a[0],i=n.cache;if(i.has(t))return i.get(t);var o=e.apply(this,a);return n.cache=i.set(t,o)||i,o};return n.cache=new(ar.Cache||nr),n}ar.Cache=nr;var tr=ar;var ir=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,or=/\\(\\)?/g,lr=function(e){var r=tr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(ir,(function(e,n,a,t){r.push(a?t.replace(or,"$1"):n||e)})),r}));var sr=function(e,r){for(var n=-1,a=null==e?0:e.length,t=Array(a);++n<a;)t[n]=r(e[n],n,e);return t},dr=F,gr=_,cr=x?x.prototype:void 0,mr=cr?cr.toString:void 0;var br=function e(r){if("string"==typeof r)return r;if(dr(r))return sr(r,e)+"";if(gr(r))return mr?mr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},hr=br;var ur=F,Fr=R,yr=lr,fr=function(e){return null==e?"":hr(e)};var pr=_;var xr=function(e,r){return ur(e)?e:Fr(e,r)?[e]:yr(fr(e))},Br=function(e){if("string"==typeof e||pr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Er=function(e,r){for(var n=0,a=(r=xr(r,e)).length;null!=e&&n<a;)e=e[Br(r[n++])];return n&&n==a?e:void 0};var Dr=u((function(e,r,n){var a=null==e?void 0:Er(e,r);return void 0===a?n:a}));const Cr=(e,r,n)=>r?Dr(n,r)||Dr(e,r):n||e,Sr=(e,r)=>{const n=r||e.defaultValue;return Dr(e.collections,n)};var vr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vr||(vr={}));const wr={collections:{base:c,oneservice:b,plusJakartaSans:m},defaultValue:"base"},Ar=e=>r=>{const n=r.theme,a=Sr(wr,n[vr.textStyleScheme]);return n.options&&n.options.textStyle?Cr(a,e,n.options.textStyle):Cr(a,e)},zr={D1:{fontFamily:Ar("D1.fontFamily"),fontSize:Ar("D1.fontSize"),fontWeight:Ar("D1.fontWeight"),lineHeight:Ar("D1.lineHeight"),letterSpacing:Ar("D1.letterSpacing")},D2:{fontFamily:Ar("D2.fontFamily"),fontSize:Ar("D2.fontSize"),fontWeight:Ar("D2.fontWeight"),lineHeight:Ar("D2.lineHeight"),letterSpacing:Ar("D2.letterSpacing")},D3:{fontFamily:Ar("D3.fontFamily"),fontSize:Ar("D3.fontSize"),fontWeight:Ar("D3.fontWeight"),lineHeight:Ar("D3.lineHeight"),letterSpacing:Ar("D3.letterSpacing")},D4:{fontFamily:Ar("D4.fontFamily"),fontSize:Ar("D4.fontSize"),fontWeight:Ar("D4.fontWeight"),lineHeight:Ar("D4.lineHeight"),letterSpacing:Ar("D4.letterSpacing")},DBody:{fontFamily:Ar("DBody.fontFamily"),fontSize:Ar("DBody.fontSize"),fontWeight:Ar("DBody.fontWeight"),lineHeight:Ar("DBody.lineHeight"),letterSpacing:Ar("DBody.letterSpacing")},H1:{fontFamily:Ar("H1.fontFamily"),fontSize:Ar("H1.fontSize"),fontWeight:Ar("H1.fontWeight"),lineHeight:Ar("H1.lineHeight"),letterSpacing:Ar("H1.letterSpacing")},H2:{fontFamily:Ar("H2.fontFamily"),fontSize:Ar("H2.fontSize"),fontWeight:Ar("H2.fontWeight"),lineHeight:Ar("H2.lineHeight"),letterSpacing:Ar("H2.letterSpacing")},H3:{fontFamily:Ar("H3.fontFamily"),fontSize:Ar("H3.fontSize"),fontWeight:Ar("H3.fontWeight"),lineHeight:Ar("H3.lineHeight"),letterSpacing:Ar("H3.letterSpacing")},H4:{fontFamily:Ar("H4.fontFamily"),fontSize:Ar("H4.fontSize"),fontWeight:Ar("H4.fontWeight"),lineHeight:Ar("H4.lineHeight"),letterSpacing:Ar("H4.letterSpacing")},H5:{fontFamily:Ar("H5.fontFamily"),fontSize:Ar("H5.fontSize"),fontWeight:Ar("H5.fontWeight"),lineHeight:Ar("H5.lineHeight"),letterSpacing:Ar("H5.letterSpacing")},H6:{fontFamily:Ar("H6.fontFamily"),fontSize:Ar("H6.fontSize"),fontWeight:Ar("H6.fontWeight"),lineHeight:Ar("H6.lineHeight"),letterSpacing:Ar("H6.letterSpacing")},Body:{fontFamily:Ar("Body.fontFamily"),fontSize:Ar("Body.fontSize"),fontWeight:Ar("Body.fontWeight"),lineHeight:Ar("Body.lineHeight"),letterSpacing:Ar("Body.letterSpacing")},BodySmall:{fontFamily:Ar("BodySmall.fontFamily"),fontSize:Ar("BodySmall.fontSize"),fontWeight:Ar("BodySmall.fontWeight"),lineHeight:Ar("BodySmall.lineHeight"),letterSpacing:Ar("BodySmall.letterSpacing")},XSmall:{fontFamily:Ar("XSmall.fontFamily"),fontSize:Ar("XSmall.fontSize"),fontWeight:Ar("XSmall.fontWeight"),lineHeight:Ar("XSmall.lineHeight"),letterSpacing:Ar("XSmall.letterSpacing")}},$r=[g.OpenSans,g.PlusJakartaSans],Hr=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},kr=(e,r)=>n=>{var t;const i=zr[e].fontFamily(n),o=zr[e].fontWeight(n),l=$r.find((e=>Object.values(e).includes(i)));return l?a`
                font-family: ${Hr(l,r)||Hr(l,o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(t=Or(r)||o)&&void 0!==t?t:"normal"};
        `},Or=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_r=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Wr=(e,r,n=!1)=>t=>{const i=zr[e],o=i.fontSize(t);return a`
            ${kr(e,r)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(t)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Tr=(e=!1,r=!1,n=void 0)=>r?a`
            display: block;
            ${_r(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${_r(n)}
        `,jr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Pr=e=>r=>{const n=r.theme,a=Sr(jr,n[vr.colorScheme]);return n.options&&n.options.color?Cr(a,e,n.options.color):Cr(a,e)},Rr=(Pr("Brand.1"),Pr("Brand.2"),Pr("Brand.3"),Pr("Brand.4"),Pr("Brand.5"),Pr("Brand.6"),Pr("Primary")),Ir=(Pr("PrimaryDark"),Pr("Secondary")),Lr=(Pr("Accent.Light.1"),Pr("Accent.Light.2"),Pr("Accent.Light.3"),Pr("Accent.Light.4"),Pr("Accent.Light.5"),Pr("Accent.Light.6"),Pr("Accent.Dark.1"),Pr("Accent.Dark.2"),Pr("Accent.Dark.3"),{1:Pr("Neutral.1"),2:Pr("Neutral.2"),3:Pr("Neutral.3"),4:Pr("Neutral.4"),5:Pr("Neutral.5"),6:Pr("Neutral.6"),7:Pr("Neutral.7"),8:Pr("Neutral.8")});Pr("Validation.Green.Text"),Pr("Validation.Green.Icon"),Pr("Validation.Green.Border"),Pr("Validation.Green.Background"),Pr("Validation.Orange.Text"),Pr("Validation.Orange.Icon"),Pr("Validation.Orange.Border"),Pr("Validation.Orange.Background"),Pr("Validation.Orange.Badge"),Pr("Validation.Red.Text"),Pr("Validation.Red.Icon"),Pr("Validation.Red.Border"),Pr("Validation.Red.Background"),Pr("Validation.Blue.Text"),Pr("Validation.Blue.Icon"),Pr("Validation.Blue.Border"),Pr("Validation.Blue.Background"),Pr("Shadow.Accent"),Pr("Shadow.Red"),Pr("Shadow.Elevation");var Vr;!function(e){e.D1=n.h1`
        ${e=>a`
                ${Wr("D1",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>a`
                ${Wr("D2",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>a`
                ${Wr("D3",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>a`
                ${Wr("D4",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>a`
                ${Wr("DBody",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>a`
                ${Wr("H1",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>a`
                ${Wr("H2",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>a`
                ${Wr("H3",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>a`
                ${Wr("H4",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>a`
                ${Wr("H5",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>a`
                ${Wr("H6",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>a`
                ${Wr("Body",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>a`
                ${Wr("BodySmall",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>a`
                ${Wr("XSmall",e.weight,e.paragraph)}
                color: ${Lr[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vr||(Vr={}));const Jr=n.a`
    ${e=>a`
            ${Wr(e.textStyle,e.weight)}
            color: ${Rr};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ir};

                svg {
                    color: ${Ir};
                }
            }
        `}
`,Nr=n(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xr=n=>{var{external:a=!1,children:t}=n,i=d(n,["external","children"]);return e(Jr,Object.assign({},i,{children:[t,a&&r(Nr,{})]}))};var Gr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gr||(Gr={}));const Mr="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Ur="Submit",Zr="Rate your experience",Yr=5,qr=n.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Kr=a`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Rr};
    ${qr}:focus-visible + & {
        outline: 0.125rem solid ${Rr};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Qr=n(o)`
    ${Kr}
`,en=n(l)`
    ${Kr}
`,rn=n.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,nn=n.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,an=n=>{const{description:a,rating:t,onRatingChange:i}=n,o=e=>{const n=`${e} star${1===e?"":"s"}`;return r(e<=t?en:Qr,{"aria-label":n})};return r(nn,Object.assign({role:"radiogroup","aria-label":a},{children:[...Array(Yr)].map(((n,a)=>{const l=a+1;return e(rn,{children:[r(qr,{type:"radio",name:"star",checked:l===t,onChange:()=>(e=>{i(e)})(l)}),o(l)]},l)}))}))},tn=n.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,on=t`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ln=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${on} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sn=n(ln)`
    animation-delay: -0.45s;
`,dn=n(ln)`
    animation-delay: -0.3s;
`,gn=n(ln)`
    animation-delay: -0.15s;
`,cn=(e,r,n)=>Dr(n,r)||Dr(e,r),mn=(e,r)=>{const n=r||e.defaultValue;return Dr(e.collections,n)},bn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},hn=e=>r=>{const n=r.theme,a=mn(bn,n.colourScheme);return n.overrides&&n.overrides.primitiveColour?cn(a,e,n.overrides.primitiveColour):a[e]},un={"primary-10":hn("primary-10"),"primary-20":hn("primary-20"),"primary-30":hn("primary-30"),"primary-40":hn("primary-40"),"primary-50":hn("primary-50"),"primary-60":hn("primary-60"),"primary-70":hn("primary-70"),"primary-80":hn("primary-80"),"primary-90":hn("primary-90"),"primary-95":hn("primary-95"),"primary-100":hn("primary-100"),"secondary-10":hn("secondary-10"),"secondary-20":hn("secondary-20"),"secondary-30":hn("secondary-30"),"secondary-40":hn("secondary-40"),"secondary-50":hn("secondary-50"),"secondary-60":hn("secondary-60"),"secondary-70":hn("secondary-70"),"secondary-80":hn("secondary-80"),"secondary-90":hn("secondary-90"),"secondary-95":hn("secondary-95"),"secondary-100":hn("secondary-100"),"neutral-10":hn("neutral-10"),"neutral-20":hn("neutral-20"),"neutral-30":hn("neutral-30"),"neutral-40":hn("neutral-40"),"neutral-50":hn("neutral-50"),"neutral-60":hn("neutral-60"),"neutral-70":hn("neutral-70"),"neutral-80":hn("neutral-80"),"neutral-90":hn("neutral-90"),"neutral-95":hn("neutral-95"),"neutral-100":hn("neutral-100"),"success-10":hn("success-10"),"success-20":hn("success-20"),"success-30":hn("success-30"),"success-40":hn("success-40"),"success-50":hn("success-50"),"success-60":hn("success-60"),"success-70":hn("success-70"),"success-80":hn("success-80"),"success-90":hn("success-90"),"success-95":hn("success-95"),"success-100":hn("success-100"),"warning-10":hn("warning-10"),"warning-20":hn("warning-20"),"warning-30":hn("warning-30"),"warning-40":hn("warning-40"),"warning-50":hn("warning-50"),"warning-60":hn("warning-60"),"warning-70":hn("warning-70"),"warning-80":hn("warning-80"),"warning-90":hn("warning-90"),"warning-95":hn("warning-95"),"warning-100":hn("warning-100"),"error-10":hn("error-10"),"error-20":hn("error-20"),"error-30":hn("error-30"),"error-40":hn("error-40"),"error-50":hn("error-50"),"error-60":hn("error-60"),"error-70":hn("error-70"),"error-80":hn("error-80"),"error-90":hn("error-90"),"error-95":hn("error-95"),"error-100":hn("error-100"),"info-10":hn("info-10"),"info-20":hn("info-20"),"info-30":hn("info-30"),"info-40":hn("info-40"),"info-50":hn("info-50"),"info-60":hn("info-60"),"info-70":hn("info-70"),"info-80":hn("info-80"),"info-90":hn("info-90"),"info-95":hn("info-95"),"info-100":hn("info-100"),white:hn("white"),black:hn("black")},Fn={text:hn("neutral-20"),"text-subtle":hn("neutral-30"),"text-subtler":hn("neutral-50"),"text-subtlest":hn("neutral-60"),"text-primary":hn("primary-50"),"text-hover":hn("primary-40"),"text-selected":hn("primary-50"),"text-selected-hover":hn("primary-40"),"text-disabled":hn("neutral-50"),"text-disabled-subtle":hn("neutral-60"),"text-disabled-subtlest":hn("neutral-80"),"text-selected-disabled":hn("neutral-50"),"text-success":hn("success-40"),"text-warning":hn("warning-40"),"text-error":hn("error-40"),"text-info":hn("info-40"),"text-inverse":hn("white"),icon:hn("neutral-50"),"icon-subtle":hn("neutral-60"),"icon-strongest":hn("neutral-20"),"icon-primary":hn("primary-50"),"icon-primary-subtle":hn("primary-60"),"icon-primary-subtlest":hn("primary-70"),"icon-hover":hn("primary-40"),"icon-selected":hn("primary-50"),"icon-selected-hover":hn("primary-40"),"icon-disabled":hn("neutral-50"),"icon-disabled-subtle":hn("neutral-60"),"icon-selected-disabled":hn("neutral-60"),"icon-success":hn("success-50"),"icon-warning":hn("warning-60"),"icon-error":hn("error-50"),"icon-error-strong":hn("error-40"),"icon-info":hn("info-50"),"icon-inverse":hn("white"),"icon-primary-inverse":"#FEAB10",border:hn("neutral-90"),"border-strong":hn("neutral-70"),"border-stronger":hn("neutral-30"),"border-primary":hn("primary-50"),"border-primary-subtle":hn("primary-60"),"border-hover":hn("primary-90"),"border-hover-strong":hn("primary-60"),"border-selected":hn("primary-50"),"border-selected-subtle":hn("primary-70"),"border-selected-subtlest":hn("primary-90"),"border-selected-hover":hn("primary-40"),"border-focus":hn("primary-60"),"border-focus-strong":hn("primary-50"),"border-disabled":hn("neutral-90"),"border-selected-disabled":hn("neutral-70"),"border-success":hn("success-60"),"border-warning":hn("warning-60"),"border-error":hn("error-60"),"border-error-focus":hn("error-60"),"border-error-strong":hn("error-40"),"border-info":hn("info-60"),bg:hn("white"),"bg-strong":hn("neutral-100"),"bg-stronger":hn("neutral-95"),"bg-strongest":hn("neutral-90"),"bg-hover":hn("primary-95"),"bg-hover-strong":hn("primary-90"),"bg-hover-subtle":hn("primary-100"),"bg-hover-neutral":hn("neutral-95"),"bg-selected":hn("primary-95"),"bg-selected-hover":hn("primary-90"),"bg-selected-strong":hn("primary-90"),"bg-selected-strongest":hn("primary-90"),"bg-disabled":hn("neutral-95"),"bg-selected-disabled":hn("neutral-95"),"bg-success":hn("success-100"),"bg-success-strong":hn("success-50"),"bg-warning":hn("warning-100"),"bg-warning-strong":hn("warning-50"),"bg-info":hn("info-100"),"bg-info-strong":hn("info-50"),"bg-error":hn("error-100"),"bg-error-strong":hn("error-50"),"bg-error-strong-hover":hn("error-30"),"bg-inverse":hn("neutral-20"),"bg-inverse-subtle":hn("neutral-30"),"bg-inverse-subtler":hn("neutral-50"),"bg-inverse-subtlest":hn("neutral-60"),"bg-primary":hn("primary-50"),"bg-primary-subtle":hn("primary-60"),"bg-primary-subtler":hn("primary-80"),"bg-primary-subtlest":hn("primary-100"),"bg-primary-hover":hn("primary-40"),"bg-primary-subtlest-hover":hn("primary-90"),"bg-primary-subtlest-selected":hn("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:hn("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":hn("black"),"focus-ring-inverse":hn("white")},yn={collections:{lifesg:Fn,bookingsg:Fn,rbs:Fn,mylegacy:Fn,ccube:Fn},defaultValue:"lifesg"},fn=e=>r=>{const n=r.theme,a=mn(yn,n.colourScheme),t=n.overrides&&n.overrides.semanticColour?cn(a,e,n.overrides.semanticColour):a[e];return"function"==typeof t?t(r):t},pn={text:fn("text"),"text-subtle":fn("text-subtle"),"text-subtler":fn("text-subtler"),"text-subtlest":fn("text-subtlest"),"text-primary":fn("text-primary"),"text-hover":fn("text-hover"),"text-selected":fn("text-selected"),"text-selected-hover":fn("text-selected-hover"),"text-disabled":fn("text-disabled"),"text-disabled-subtle":fn("text-disabled-subtle"),"text-disabled-subtlest":fn("text-disabled-subtlest"),"text-selected-disabled":fn("text-selected-disabled"),"text-success":fn("text-success"),"text-warning":fn("text-warning"),"text-error":fn("text-error"),"text-info":fn("text-info"),"text-inverse":fn("text-inverse"),icon:fn("icon"),"icon-subtle":fn("icon-subtle"),"icon-strongest":fn("icon-strongest"),"icon-primary":fn("icon-primary"),"icon-primary-subtle":fn("icon-primary-subtle"),"icon-primary-subtlest":fn("icon-primary-subtlest"),"icon-hover":fn("icon-hover"),"icon-selected":fn("icon-selected"),"icon-selected-hover":fn("icon-selected-hover"),"icon-disabled":fn("icon-disabled"),"icon-disabled-subtle":fn("icon-disabled-subtle"),"icon-selected-disabled":fn("icon-selected-disabled"),"icon-success":fn("icon-success"),"icon-warning":fn("icon-warning"),"icon-error":fn("icon-error"),"icon-error-strong":fn("icon-error-strong"),"icon-info":fn("icon-info"),"icon-inverse":fn("icon-inverse"),"icon-primary-inverse":fn("icon-primary-inverse"),border:fn("border"),"border-strong":fn("border-strong"),"border-stronger":fn("border-stronger"),"border-primary":fn("border-primary"),"border-primary-subtle":fn("border-primary-subtle"),"border-hover":fn("border-hover"),"border-hover-strong":fn("border-hover-strong"),"border-selected":fn("border-selected"),"border-selected-subtle":fn("border-selected-subtle"),"border-selected-subtlest":fn("border-selected-subtlest"),"border-selected-hover":fn("border-selected-hover"),"border-focus":fn("border-focus"),"border-focus-strong":fn("border-focus-strong"),"border-disabled":fn("border-disabled"),"border-selected-disabled":fn("border-selected-disabled"),"border-success":fn("border-success"),"border-warning":fn("border-warning"),"border-error":fn("border-error"),"border-error-focus":fn("border-error-focus"),"border-error-strong":fn("border-error-strong"),"border-info":fn("border-info"),bg:fn("bg"),"bg-strong":fn("bg-strong"),"bg-stronger":fn("bg-stronger"),"bg-strongest":fn("bg-strongest"),"bg-hover":fn("bg-hover"),"bg-hover-strong":fn("bg-hover-strong"),"bg-hover-subtle":fn("bg-hover-subtle"),"bg-hover-neutral":fn("bg-hover-neutral"),"bg-selected":fn("bg-selected"),"bg-selected-hover":fn("bg-selected-hover"),"bg-selected-strong":fn("bg-selected-strong"),"bg-selected-strongest":fn("bg-selected-strongest"),"bg-disabled":fn("bg-disabled"),"bg-selected-disabled":fn("bg-selected-disabled"),"bg-success":fn("bg-success"),"bg-success-strong":fn("bg-success-strong"),"bg-warning":fn("bg-warning"),"bg-warning-strong":fn("bg-warning-strong"),"bg-info":fn("bg-info"),"bg-info-strong":fn("bg-info-strong"),"bg-error":fn("bg-error"),"bg-error-strong":fn("bg-error-strong"),"bg-error-strong-hover":fn("bg-error-strong-hover"),"bg-inverse":fn("bg-inverse"),"bg-inverse-subtle":fn("bg-inverse-subtle"),"bg-inverse-subtler":fn("bg-inverse-subtler"),"bg-inverse-subtlest":fn("bg-inverse-subtlest"),"bg-primary":fn("bg-primary"),"bg-primary-subtle":fn("bg-primary-subtle"),"bg-primary-subtler":fn("bg-primary-subtler"),"bg-primary-subtlest":fn("bg-primary-subtlest"),"bg-primary-hover":fn("bg-primary-hover"),"bg-primary-subtlest-hover":fn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":fn("bg-primary-subtlest-selected"),"bg-available":fn("bg-available"),"overlay-strong":fn("overlay-strong"),"overlay-subtle":fn("overlay-subtle"),hyperlink:fn("hyperlink"),"hyperlink-inverse":fn("hyperlink-inverse"),"focus-ring":fn("focus-ring"),"focus-ring-inverse":fn("focus-ring-inverse")},xn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Bn=e=>r=>{var n;const a=r.theme,t=mn(xn,null==a?void 0:a.breakpointScheme);let i;return i=(null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.breakpoint)?cn(t,e,a.overrides.breakpoint):t[e],i},En={"xxs-min":Bn("xxs-min"),"xxs-max":Bn("xxs-max"),"xs-min":Bn("xs-min"),"xs-max":Bn("xs-max"),"sm-min":Bn("sm-min"),"sm-max":Bn("sm-max"),"md-min":Bn("md-min"),"md-max":Bn("md-max"),"lg-min":Bn("lg-min"),"lg-max":Bn("lg-max"),"xl-min":Bn("xl-min"),"xl-max":Bn("xl-max"),"xxl-min":Bn("xxl-min"),"xxs-column":Bn("xxs-column"),"xs-column":Bn("xs-column"),"sm-column":Bn("sm-column"),"md-column":Bn("md-column"),"lg-column":Bn("lg-column"),"xl-column":Bn("xl-column"),"xxl-column":Bn("xxl-column"),"xxs-gutter":Bn("xxs-gutter"),"xs-gutter":Bn("xs-gutter"),"sm-gutter":Bn("sm-gutter"),"md-gutter":Bn("md-gutter"),"lg-gutter":Bn("lg-gutter"),"xl-gutter":Bn("xl-gutter"),"xxl-gutter":Bn("xxl-gutter"),"xxs-margin":Bn("xxs-margin"),"xs-margin":Bn("xs-margin"),"sm-margin":Bn("sm-margin"),"md-margin":Bn("md-margin"),"lg-margin":Bn("lg-margin"),"xl-margin":Bn("xl-margin"),"xxl-margin":Bn("xxl-margin")},Dn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=En["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const a=n(r);return`@media screen and (${e}: ${a}px)`}})(e,n),r)),{}),Cn={MaxWidth:Dn("max-width"),MinWidth:Dn("min-width")},Sn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},vn={collections:{lifesg:Sn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Sn,mylegacy:Sn,ccube:Sn},defaultValue:"lifesg"},wn=e=>r=>{const n=r.theme,a=mn(vn,n.fontScheme);return n.overrides&&n.overrides.fontSpec?cn(a,e,n.overrides.fontSpec):a[e]},An=(e,r,n,t)=>a`
    font-family: ${wn("font-family")};
    font-size: ${wn(e)};
    font-weight: ${wn(r)};
    line-height: ${wn(n)};
    letter-spacing: ${wn(t)};
`,zn={"header-xxl-light":An("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":An("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":An("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":An("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":An("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":An("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":An("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":An("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":An("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":An("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":An("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":An("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":An("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":An("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":An("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":An("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":An("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":An("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":An("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":An("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":An("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":An("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":An("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":An("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":An("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":An("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":An("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":An("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":An("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":An("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":An("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":An("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":An("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":An("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":An("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":An("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":An("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":An("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":An("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":An("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":An("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":An("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},$n={collections:{lifesg:zn,bookingsg:zn,rbs:zn,mylegacy:zn,ccube:zn},defaultValue:"lifesg"},Hn=e=>r=>{const n=r.theme,a=mn($n,n.fontScheme),t=n.overrides&&n.overrides.font?cn(a,e,n.overrides.font):a[e];return"function"==typeof t?t(r):t},kn={"header-xxl-light":Hn("header-xxl-light"),"header-xxl-regular":Hn("header-xxl-regular"),"header-xxl-semibold":Hn("header-xxl-semibold"),"header-xxl-bold":Hn("header-xxl-bold"),"header-xl-light":Hn("header-xl-light"),"header-xl-regular":Hn("header-xl-regular"),"header-xl-semibold":Hn("header-xl-semibold"),"header-xl-bold":Hn("header-xl-bold"),"header-lg-light":Hn("header-lg-light"),"header-lg-regular":Hn("header-lg-regular"),"header-lg-semibold":Hn("header-lg-semibold"),"header-lg-bold":Hn("header-lg-bold"),"header-md-light":Hn("header-md-light"),"header-md-regular":Hn("header-md-regular"),"header-md-semibold":Hn("header-md-semibold"),"header-md-bold":Hn("header-md-bold"),"header-sm-light":Hn("header-sm-light"),"header-sm-regular":Hn("header-sm-regular"),"header-sm-semibold":Hn("header-sm-semibold"),"header-sm-bold":Hn("header-sm-bold"),"header-xs-light":Hn("header-xs-light"),"header-xs-regular":Hn("header-xs-regular"),"header-xs-semibold":Hn("header-xs-semibold"),"header-xs-bold":Hn("header-xs-bold"),"body-baseline-light":Hn("body-baseline-light"),"body-baseline-regular":Hn("body-baseline-regular"),"body-baseline-semibold":Hn("body-baseline-semibold"),"body-baseline-bold":Hn("body-baseline-bold"),"body-md-light":Hn("body-md-light"),"body-md-regular":Hn("body-md-regular"),"body-md-semibold":Hn("body-md-semibold"),"body-md-bold":Hn("body-md-bold"),"body-sm-light":Hn("body-sm-light"),"body-sm-regular":Hn("body-sm-regular"),"body-sm-semibold":Hn("body-sm-semibold"),"body-sm-bold":Hn("body-sm-bold"),"body-xs-light":Hn("body-xs-light"),"body-xs-regular":Hn("body-xs-regular"),"body-xs-semibold":Hn("body-xs-semibold"),"body-xs-bold":Hn("body-xs-bold"),"formlabel-baseline-semibold":Hn("formlabel-baseline-semibold"),"formlabel-lg-semibold":Hn("formlabel-lg-semibold")},On=Object.assign(Object.assign({},pn),{Primitive:un}),_n=kn,Wn=Cn,Tn=n.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return a`
                    background-color: ${On.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?On["border-error-strong"]:On["border-primary"]};

                    color: ${e.$buttonIsDanger?On["text-error"]:On["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${On["bg-hover-neutral"]};
                    }
                `;case"light":return a`
                    background-color: ${On.bg};
                    border: 1px solid ${On.border};

                    color: ${e.$buttonIsDanger?On["text-error"]:On["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${On["bg-hover-neutral"]};
                    }
                `;case"link":return a`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?On["text-error"]:On["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${On["bg-hover-neutral"]};
                    }
                `;case"disabled":return a`
                    background-color: ${On["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${On["text-disabled"]};
                `;default:return a`
                    background-color: ${e.$buttonIsDanger?On["bg-error-strong"]:On["bg-primary"]};
                    border: 1px solid transparent;

                    ${Wn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${On["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?On["bg-error-strong-hover"]:On["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return a`
                    height: 2.5rem;
                    ${_n["body-md-semibold"]}

                    ${Wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return a`
                    height: 4rem;
                    ${_n["header-md-semibold"]}

                    ${Wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return a`
                    height: 3rem;
                    ${_n["header-xs-semibold"]}

                    ${Wn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,jn=n((({color:n,className:a,size:t})=>e(tn,Object.assign({className:a,$size:t,$color:n},{children:[r(ln,{id:"inner1"}),r(sn,{id:"inner2"}),r(dn,{id:"inner3"}),r(gn,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,Pn={Default:s.forwardRef(((n,a)=>{const{children:t,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,g=d(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Tn,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:i},c,g,{children:[o&&r(jn,{}),r("span",{children:t})]}))})),Small:s.forwardRef(((n,a)=>{const{children:t,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,g=d(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Tn,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:i},c,g,{children:[o&&r(jn,{}),r("span",{children:t})]}))})),Large:s.forwardRef(((n,a)=>{const{children:t,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,g=d(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"large",$buttonIsDanger:s};return e(Tn,Object.assign({ref:a,"data-testid":g["data-testid"]||"button",disabled:i},c,g,{children:[o&&r(jn,{}),r("span",{children:t})]}))}))},Rn=n.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,In=n.div`
    border-top: 1px solid ${Lr[5]};
    border-bottom: 1px solid ${Lr[5]};
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
`,Ln=n.div`
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
`,Vn=n(Pn.Default)`
    margin-top: 1rem;
    width: 100%;
`,Jn=n=>{const{imgSrc:a,buttonLabel:t,description:i,rating:o,onRatingChange:l,onSubmit:s}=n,g=d(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=a?a:Mr,m=null!=i?i:Zr;return e(In,Object.assign({},g,{children:[c&&r(Rn,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e(Ln,{children:[r(Vr.H3,Object.assign({weight:"semibold"},{children:m})),r(an,{description:m,rating:o,onRatingChange:l}),r(Vn,Object.assign({disabled:!o,onClick:s,type:"button"},{children:null!=t?t:Ur}))]})]}))};export{Jn as FeedbackRating};
//# sourceMappingURL=index.js.map
