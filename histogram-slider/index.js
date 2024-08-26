import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import i,{useState as r,useEffect as o,useMemo as a}from"react";import l,{css as s}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function u(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;const h={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},d={D1:{fontFamily:h.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:h.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:h.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:h.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:h.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:h.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},p={D1:{fontFamily:h.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:h.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:h.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:h.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:h.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:h.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:h.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:h.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:h.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:h.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:h.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:h.Regular,fontSize:.75,lineHeight:1.125}};var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,F="object"==typeof f&&f&&f.Object===Object&&f,y="object"==typeof self&&self&&self.Object===Object&&self,v=F||y||Function("return this")(),B=v.Symbol,b=B,S=Object.prototype,D=S.hasOwnProperty,E=S.toString,x=b?b.toStringTag:void 0;var C=function(e){var t=D.call(e,x),n=e[x];try{e[x]=void 0;var i=!0}catch(e){}var r=E.call(e);return i&&(t?e[x]=n:delete e[x]),r},H=Object.prototype.toString;var A=C,k=function(e){return H.call(e)},$=B?B.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?A(e):k(e)};var z=w,O=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==z(e)},_=m,P=T,M=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var N=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!P(e))||(L.test(e)||!M.test(e)||null!=t&&e in Object(t))};var R=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=w,W=R;var j,I=function(e){if(!W(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=v["__core-js_shared__"],U=(j=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var X=function(e){return!!U&&U in e},G=Function.prototype.toString;var Y=I,q=X,J=R,Q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,ie=te.hasOwnProperty,re=RegExp("^"+ne.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!J(e)||q(e))&&(Y(e)?re:Z).test(Q(e))},ae=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=ae(e,t);return oe(n)?n:void 0},se=le(Object,"create"),ce=se;var ue=function(){this.__data__=ce?ce(null):{},this.size=0};var he=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=se,pe=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(de){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pe.call(t,e)?t[e]:void 0},ge=se,me=Object.prototype.hasOwnProperty;var Fe=se;var ye=ue,ve=he,Be=fe,be=function(e){var t=this.__data__;return ge?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}De.prototype.clear=ye,De.prototype.delete=ve,De.prototype.get=Be,De.prototype.has=be,De.prototype.set=Se;var Ee=De;var xe=function(){this.__data__=[],this.size=0};var Ce=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(Ce(e[n][0],t))return n;return-1},Ae=He,ke=Array.prototype.splice;var $e=He;var we=He;var ze=He;var Oe=xe,Te=function(e){var t=this.__data__,n=Ae(t,e);return!(n<0)&&(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=$e(t,e);return n<0?void 0:t[n][1]},Pe=function(e){return we(this.__data__,e)>-1},Me=function(e,t){var n=this.__data__,i=ze(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Le.prototype.clear=Oe,Le.prototype.delete=Te,Le.prototype.get=_e,Le.prototype.has=Pe,Le.prototype.set=Me;var Ne=Le,Re=le(v,"Map"),Ve=Ee,We=Ne,je=Re;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Ke;var Xe=Ke;var Ge=Ke;var Ye=Ke;var qe=function(){this.size=0,this.__data__={hash:new Ve,map:new(je||We),string:new Ve}},Je=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Xe(this,e).get(e)},Ze=function(e){return Ge(this,e).has(e)},et=function(e,t){var n=Ye(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}tt.prototype.clear=qe,tt.prototype.delete=Je,tt.prototype.get=Qe,tt.prototype.has=Ze,tt.prototype.set=et;var nt=tt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=e.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(it.Cache||nt),n}it.Cache=nt;var rt=it;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,lt=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,i,r){t.push(i?r.replace(at,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r},ct=m,ut=T,ht=B?B.prototype:void 0,dt=ht?ht.toString:void 0;var pt=function e(t){if("string"==typeof t)return t;if(ct(t))return st(t,e)+"";if(ut(t))return dt?dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ft=pt;var gt=m,mt=N,Ft=lt,yt=function(e){return null==e?"":ft(e)};var vt=T;var Bt=function(e,t){return gt(e)?e:mt(e,t)?[e]:Ft(yt(e))},bt=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,i=(t=Bt(t,e)).length;null!=e&&n<i;)e=e[bt(t[n++])];return n&&n==i?e:void 0};var Dt=g((function(e,t,n){var i=null==e?void 0:St(e,t);return void 0===i?n:i}));const Et=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var Ct;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ct||(Ct={}));const Ht={collections:{base:d,oneservice:p},defaultValue:"base"},At=e=>t=>{const n=t.theme,i=xt(Ht,n[Ct.textStyleScheme]);return n.options&&n.options.textStyle?Et(i,e,n.options.textStyle):Et(i,e)},kt={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},$t=e=>{switch(e){case 700:case"bold":return h.Bold;case 600:case"semibold":return h.Semibold;case 300:case"light":return h.Light;case 400:case"regular":return h.Regular;default:return""}},wt=(e,t)=>n=>{var i;const r=kt[e].fontFamily(n),o=kt[e].fontWeight(n);return Object.values(h).includes(r)?s`
                font-family: ${$t(t)||$t(o)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${null!==(i=zt(t)||o)&&void 0!==i?i:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Tt=(e,t,n=!1)=>i=>{const r=kt[e],o=r.fontSize(i);return s`
            ${wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${s`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_t=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Ot(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Ot(n)}
        `,Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,i=xt(Pt,n[Ct.colorScheme]);return n.options&&n.options.color?Et(i,e,n.options.color):Et(i,e)},Lt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}};var Nt;!function(e){e.D1=l.h1`
        ${e=>s`
                ${Tt("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>s`
                ${Tt("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>s`
                ${Tt("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>s`
                ${Tt("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>s`
                ${Tt("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>s`
                ${Tt("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>s`
                ${Tt("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>s`
                ${Tt("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>s`
                ${Tt("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>s`
                ${Tt("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>s`
                ${Tt("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>s`
                ${Tt("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>s`
                ${Tt("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>s`
                ${Tt("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Nt||(Nt={}));const Rt=l.a`
    ${e=>s`
            ${Tt(e.textStyle,e.weight)}
            color: ${Lt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Lt.Secondary};

                svg {
                    color: ${Lt.Secondary};
                }
            }
        `}
`,Vt=l(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wt=n=>{var{external:i=!1,children:r}=n,o=u(n,["external","children"]);return e(Rt,Object.assign({},o,{children:[r,i&&t(Vt,{})]}))};var jt;function It(e,t){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},It(e,t)}function Kt(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Ut(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Xt(e){return null!==e&&1===e.length?e[0]:e.slice()}function Gt(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Yt(e,t){return qt(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function qt(e,t){const n=(e-t.min)%t.step;let i=e-n;return 2*Math.abs(n)>=t.step&&(i+=n>0?t.step:-t.step),parseFloat(i.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jt||(jt={}));let Jt=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),i=n.getDiffPosition(t[0]),r=n.getValueFromPosition(i);n.move(r)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],i=t[1]-n.startPosition[1];n.isScrolling=Math.abs(i)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const i=n.getDiffPosition(t[0]),r=n.getValueFromPosition(i);n.move(r)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Gt(n.getMouseEventMap())}))}Kt(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),i=Yt(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(i)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Gt(n.getKeyDownEventMap()),Kt(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const i=n.getMousePosition(t);n.start(e,i[0]),Gt(n.getMouseEventMap()),Kt(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const i=n.getTouchPosition(t);n.startPosition=i,n.isScrolling=void 0,n.start(e,i[0]),Gt(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const i=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),r={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:i,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Xt(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(r["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(r,o)},n.renderTrack=(e,t,i)=>{const r={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-i)},o={index:e,value:Xt(n.state.value)};return n.props.renderTrack(r,o)};let r=Ut(t.value);r.length||(r=Ut(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=Yt(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,It(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Ut(e.value);return n.length?t.pending?null:{value:n.map((t=>Yt(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Xt(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:i}=this.state,r=i.length;for(let o=0;o<r;o+=1){const r=this.calcOffset(i[o]),a=Math.abs(e-r);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Yt(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),i=e.getBoundingClientRect(),r=e[n],o=i[this.posMaxKey()],a=i[this.posMinKey()],l=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],s=r-l,c=Math.abs(o-a);this.state.upperBound===s&&this.state.sliderLength===c&&this.state.thumbSize===l||this.setState({upperBound:s,sliderLength:c,thumbSize:l})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),i=n[this.posMaxKey()],r=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?i:r));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),i=this.getClosestIndex(n),r=Yt(this.calcValue(n),this.props),o=this.state.value.slice();o[i]=r;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(i),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:i}=this.state;i.splice(i.indexOf(e),1),i.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:i})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yt(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yt(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:i}=t,r=t[n];if(e===r)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:l,minDistance:s}=this.props;if(!o){if(n>0){const i=t[n-1];e<i+s&&(e=i+s)}if(n<i-1){const i=t[n+1];e>i-s&&(e=i-s)}}t[n]=e,o&&i>1&&(e>r?(this.pushSucceeding(t,s,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const o=i-r*n;t[e-1-r]>o&&(t[e-1-r]=o)}}(i,t,s,a)):e<r&&(this.pushPreceding(t,s,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const e=i+r*n;t[r]<e&&(t[r]=e)}}(i,t,s,l))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let i,r;for(i=n,r=e[i]+t;null!==e[i+1]&&r>e[i+1];i+=1,r=e[i]+t)e[i+1]=qt(r,this.props)},n.pushPreceding=function(e,t,n){for(let i=n,r=e[i]-t;null!==e[i-1]&&r<e[i-1];i-=1,r=e[i]-t)e[i-1]=qt(r,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Xt(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let i=0;i<t;i+=1)n[i]=this.buildThumbStyle(e[i],i);const i=[];for(let e=0;e<t;e+=1)i[e]=this.renderThumb(n[e],e);return i},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let i=0;i<n;i+=1)t.push(this.renderTrack(i+1,e[i],e[i+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let i=0;i<n;i+=1)e[i]=this.calcOffset(t[i],i);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);Jt.displayName="ReactSlider",Jt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Qt=Jt;const Zt=l.div`
    isolation: isolate;
`,en=l.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,tn=l.div`
    margin-bottom: 1rem;
`,nn=l(Nt.Body)`
    overflow-wrap: anywhere;
`,rn=l(Qt)`
    height: 0.875rem;
`,on=l.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?s`
                cursor: not-allowed;
            `:e.$readOnly?void 0:s`
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

        background-color: ${Lt.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Lt.Neutral[4]};
        border-radius: 50%;
    }
`,an=l.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${on}:after {
        border: 1px solid ${Lt.Primary};
    }
`,ln=l.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Lt.Neutral[4](e)};
`,sn=l.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,cn=l.div`
    margin: 0 0.5rem;
`,un=l.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,hn=l.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Lt.Neutral[8]};

    ${e=>{let t=Lt.Neutral[6];return e.$disabled&&e.$selected?t=Lt.Neutral[4]:e.$disabled?t=Lt.Neutral[5]:e.$selected&&(t=Lt.Accent.Light[1]),s`
            background-color: ${t};
        `}}
`,dn=l((n=>{var{value:i,min:a=0,max:l=100,step:s=1,minRange:c,numOfThumbs:h=2,colors:d,disabled:p,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:F,sliderLabelSuffix:y,showIndicatorLabel:v,indicatorLabelPrefix:B,indicatorLabelSuffix:b,renderSliderLabel:S,onChange:D,onChangeEnd:E}=n,x=u(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,H]=r(k()),A=function(){const e=function(){const e=p||f?Lt.Neutral[5]:Lt.Neutral[4],t=p||f?Lt.Neutral[4]:Lt.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();o((()=>{i!==C&&H(k())}),[i]);function k(){if(i&&i.length===h)return i;const e=[];for(let t=0;t<h;t++)e.push(a+s*t);return e}const $=t=>S?S(t):e(nn,{children:[F,t,y]});return e(Zt,Object.assign({},x,{children:[v&&t(tn,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e(nn,{children:[B,t,b]})})()}),t(rn,{step:s,min:a,max:l,value:C,disabled:p||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];H(t),null==D||D(t)}else{if(t>-1&&C[t]===e[t])return;H(e),null==D||D(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];H(t),null==E||E(t)}else H(e),null==E||E(e)},minDistance:c,ariaLabel:g,renderThumb:(e,n)=>t(an,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:p?void 0:e.tabIndex},{children:t(on,{$disabled:p,$readOnly:f})})),renderTrack:(e,n)=>t(ln,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:A[n.index]}))}),m&&e(en,{children:[t("div",{children:$(a)}),t("div",{children:$(l)})]})]}))}))`
    margin-top: -0.3125rem;
`,pn=i=>{var{bins:l=[],interval:s,disabled:c,readOnly:h,value:d,showRangeLabels:p,rangeLabelPrefix:f,rangeLabelSuffix:g,onChange:m,onChangeEnd:F,renderEmptyView:y,renderRangeLabel:v}=i,B=u(i,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=l.map((e=>e.count)),S=Math.max(...b),D=l.map((e=>e.minValue)),E=Math.max(...D),x=Math.min(...D),[C,H]=r(w()),A=a((()=>{const e=[...l].sort(((e,t)=>e.minValue-t.minValue)),t=(E-x)/s+1,n=[];for(let i=0;i<t;i++){const t=e.find((e=>e.minValue===x+s*i));t?n.push(t):n.push({count:0,minValue:x+s*i})}return n}),[l,s]);o((()=>{d!==C&&H(w())}),[d]);const k=e=>{H(e),null==m||m(e)},$=e=>{H(e),null==F||F(e)};function w(){return null!=d?d:[x,x+s]}const z=t=>v?v(t):e(Nt.Body,{children:[f,t,g]});return e("div",Object.assign({},B,{children:[p&&e(sn,{children:[z(C[0]),t(cn,{children:"-"}),z(C[1])]}),A.every((e=>0===e.count))&&y?y():e(n,{children:[t(un,{children:A.map(((e,n)=>{const i=e.count/S;return t(hn,{style:{height:i?`calc(calc(100% - 0.25rem) * ${i} + 0.25rem)`:0},$selected:e.minValue>=C[0]&&e.minValue<C[1],$disabled:c||h},n)}))}),t(dn,{min:x,max:E+s,step:s,minRange:s,numOfThumbs:2,value:C,disabled:c,readOnly:h,onChange:k,onChangeEnd:$})]})]}))};export{pn as HistogramSlider};
//# sourceMappingURL=index.js.map
