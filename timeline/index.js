import{createElement as e}from"react";import{jsxs as t,jsx as n,Fragment as a}from"react/jsx-runtime";import{ExclamationCircleFillIcon as r,TickIcon as i}from"@lifesg/react-icons";import o,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";const d={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},g={D1:{fontFamily:d.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},s={D1:{fontFamily:d.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:d.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:d.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:d.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:d.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:d.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},u={D1:{fontFamily:d.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:d.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:d.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:d.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:d.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:d.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:d.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:d.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:d.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:d.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:d.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:d.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,p="object"==typeof h&&h&&h.Object===Object&&h,m="object"==typeof self&&self&&self.Object===Object&&self,B=p||m||Function("return this")(),S=B.Symbol,y=S,D=Object.prototype,b=D.hasOwnProperty,v=D.toString,H=y?y.toStringTag:void 0;var $=function(e){var t=b.call(e,H),n=e[H];try{e[H]=void 0;var a=!0}catch(e){}var r=v.call(e);return a&&(t?e[H]=n:delete e[H]),r},E=Object.prototype.toString;var k=$,x=function(e){return E.call(e)},A=S?S.toStringTag:void 0;var O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?k(e):x(e)};var z=O,w=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==z(e)},_=F,W=C,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var V=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(N.test(e)||!T.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=O,R=P;var I,L=function(e){if(!R(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=B["__core-js_shared__"],G=(I=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var X=function(e){return!!G&&G in e},M=Function.prototype.toString;var U=L,q=X,K=P,Q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Y=/^\[object .+?Constructor\]$/,Z=Function.prototype,ee=Object.prototype,te=Z.toString,ne=ee.hasOwnProperty,ae=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!K(e)||q(e))&&(U(e)?ae:Y).test(Q(e))},ie=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var n=ie(e,t);return re(n)?n:void 0},le=oe(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=le,ue=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},fe=le,Fe=Object.prototype.hasOwnProperty;var pe=le;var me=de,Be=ge,Se=he,ye=function(e){var t=this.__data__;return fe?void 0!==t[e]:Fe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}be.prototype.clear=me,be.prototype.delete=Be,be.prototype.get=Se,be.prototype.has=ye,be.prototype.set=De;var ve=be;var He=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},ke=Ee,xe=Array.prototype.splice;var Ae=Ee;var Oe=Ee;var ze=Ee;var we=He,Ce=function(e){var t=this.__data__,n=ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():xe.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},We=function(e){return Oe(this.__data__,e)>-1},Te=function(e,t){var n=this.__data__,a=ze(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ne.prototype.clear=we,Ne.prototype.delete=Ce,Ne.prototype.get=_e,Ne.prototype.has=We,Ne.prototype.set=Te;var Ve=Ne,Pe=oe(B,"Map"),je=ve,Re=Ve,Ie=Pe;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Ge=Je;var Xe=Je;var Me=Je;var Ue=Je;var qe=function(){this.size=0,this.__data__={hash:new je,map:new(Ie||Re),string:new je}},Ke=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Xe(this,e).get(e)},Ye=function(e){return Me(this,e).has(e)},Ze=function(e,t){var n=Ue(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}et.prototype.clear=qe,et.prototype.delete=Ke,et.prototype.get=Qe,et.prototype.has=Ye,et.prototype.set=Ze;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=e.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var at=nt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,ot=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,a,r){t.push(a?r.replace(it,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},ct=F,dt=C,gt=S?S.prototype:void 0,st=gt?gt.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return st?st.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ht=ut;var ft=F,Ft=V,pt=ot,mt=function(e){return null==e?"":ht(e)};var Bt=C;var St=function(e,t){return ft(e)?e:Ft(e,t)?[e]:pt(mt(e))},yt=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,a=(t=St(t,e)).length;null!=e&&n<a;)e=e[yt(t[n++])];return n&&n==a?e:void 0};var bt=f((function(e,t,n){var a=null==e?void 0:Dt(e,t);return void 0===a?n:a}));const vt=(e,t,n)=>t?bt(n,t)||bt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return bt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Et={collections:{base:g,oneservice:u,plusJakartaSans:s},defaultValue:"base"},kt=e=>t=>{const n=t.theme,a=Ht(Et,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?vt(a,e,n.options.textStyle):vt(a,e)},xt={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing")}},At=[d.OpenSans,d.PlusJakartaSans],Ot=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},zt=(e,t)=>n=>{var a;const r=xt[e].fontFamily(n),i=xt[e].fontWeight(n),o=At.find((e=>Object.values(e).includes(r)));return o?l`
                font-family: ${Ot(o,t)||Ot(o,i)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${null!==(a=wt(t)||i)&&void 0!==a?a:"normal"};
        `},wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,n=!1)=>a=>{const r=xt[e],i=r.fontSize(a);return l`
            ${zt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(a)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Wt=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Ct(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Ct(n)}
        `;function Tt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,a=Ht(Nt,n[$t.colorScheme]);return n.options&&n.options.color?vt(a,e,n.options.color):vt(a,e)},Pt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}};var jt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Pt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Rt=o.a`
    ${e=>l`
            ${_t(e.textStyle,e.weight)}
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
`,It=o(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=e=>{var{external:a=!1,children:r}=e,i=Tt(e,["external","children"]);return t(Rt,Object.assign({},i,{children:[r,a&&n(It,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const Gt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Xt=e=>Object.keys(Gt).reduce(((t,n)=>{const a=Gt[n];return t[n]=`@media screen and (${e}: ${a}px)`,t}),{}),Mt=Xt("max-width"),Ut=(Xt("min-width"),o.div`
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

    ${e=>{let t,n,a;if("solid"===e.$type)switch(a=Pt.Neutral[8],e.$color){case"grey":t=Pt.Neutral[3],n=Pt.Neutral[3];break;case"green":t=Pt.Validation.Green.Text,n=Pt.Validation.Green.Text;break;case"yellow":t=Pt.Validation.Orange.Text,n=Pt.Validation.Orange.Text;break;case"red":t=Pt.Validation.Red.Text,n=Pt.Validation.Red.Text;break;case"blue":t=Pt.Validation.Blue.Text,n=Pt.Validation.Blue.Text;break;default:t=Pt.Neutral[1],n=Pt.Neutral[1]}else switch(e.$color){case"grey":t=Pt.Neutral[6],n=Pt.Neutral[4],a=Pt.Neutral[3];break;case"green":t=Pt.Validation.Green.Background,n=Pt.Validation.Green.Border,a=Pt.Validation.Green.Text;break;case"yellow":t=Pt.Validation.Orange.Background,n=Pt.Validation.Orange.Border,a=Pt.Validation.Orange.Text;break;case"red":t=Pt.Validation.Red.Background,n=Pt.Validation.Red.Border,a=Pt.Validation.Red.Text;break;case"blue":t=Pt.Validation.Blue.Background,n=Pt.Validation.Blue.Border,a=Pt.Validation.Blue.Text;break;default:t=Pt.Neutral[8],n=Pt.Neutral[5],a=Pt.Neutral[1]}return l`
            background: ${t};
            border: 1px solid ${n};
            color: ${a};
        `}}
`),qt=o.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Kt=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return l`
                    background-color: ${Pt.Accent.Light[1]};
                `;case"upcoming-active":return l`
                    border: 4px solid ${Pt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    border: 4px solid ${Pt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Pt.Validation.Green.Icon};
                    svg {
                        color: ${Pt.Neutral[8]};
                    }
                `;case"error":return l`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Pt.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return l`
                    background-color: ${Pt.Neutral[4]};
                `}}}
`,Qt=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return l`
                    background-color: ${Pt.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return l`
                    background-color: ${Pt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Pt.Validation.Green.Icon};
                `;case"error":return l`
                    margin-left: -0.15rem;
                    background-color: ${Pt.Validation.Red.Icon};
                `}}}
`,Yt=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Zt=o.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Mt.tablet} {
        grid-column: span 8;
    }

    ${Mt.mobileL} {
        grid-column: span 4;
    }
`,en=o(jt.H3)`
    margin-bottom: 1rem;

    ${Mt.tablet} {
        margin-bottom: 1.5rem;
    }
`,tn=o(jt.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,nn=o.div`
    display: flex;

    :last-of-type ${Qt} {
        margin-bottom: 0;
    }
`,an=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,rn=o(jt.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,on=o((e=>{var{type:a,colorType:r="black",children:i,icon:o}=e,l=Tt(e,["type","colorType","children","icon"]);return t(Ut,Object.assign({$type:a,$color:r},l,{children:[o,n(qt,{children:i})]}))}))`
    padding: 0.125rem 0.5rem;
`,ln=({items:o,className:l,title:c,startCol:d,colSpan:g,"data-base-indicator-testid":s,"data-testid":u="timeline"})=>{const h=e=>"string"==typeof e?n(jt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):n(a,{children:e}),f=e=>"string"==typeof e?n(tn,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):n(a,{children:e}),F=t=>t.slice(0,2).map(((t,n)=>e(on,Object.assign({},t,{type:t.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),t.children))),p=e=>{switch(e){case"completed":return n(i,{});case"error":return n(r,{});default:return null}};return t(Zt,Object.assign({className:l,"data-testid":u,$startCol:d,$colSpan:g},{children:[n(en,Object.assign({id:"timeline-title"},{children:c})),o.map(((e,a)=>{const{title:r,content:i,statuses:o,variant:l}=e,c=s?`circleindicator${a+1}_div_${s}`:"circleindicator",d=l||(0===a?"current":"upcoming-active");return t(nn,{children:[t(Yt,{children:[n(Kt,Object.assign({"data-testid":c,$variant:d},{children:p(d)})),n(Qt,{$variant:d})]}),t(an,Object.assign({className:"timeline-item-content"},{children:[f(r),o&&n(rn,{children:F(o)}),h(i)]}))]},`timeline-item-${a}`)}))]}))};export{ln as Timeline};
//# sourceMappingURL=index.js.map
