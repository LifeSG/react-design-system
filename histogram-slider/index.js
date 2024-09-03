import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import i,{useState as r,useEffect as a,useMemo as o}from"react";import l,{css as s}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function u(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;const h={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},p={D1:{fontFamily:h.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:h.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:h.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:h.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:h.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:h.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:h.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:h.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},d={D1:{fontFamily:h.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:h.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:h.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:h.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:h.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:h.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:h.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:h.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},f={D1:{fontFamily:h.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:h.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:h.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:h.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:h.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:h.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:h.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:h.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:h.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:h.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:h.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:h.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:h.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:h.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,S="object"==typeof self&&self&&self.Object===Object&&self,v=y||S||Function("return this")(),B=v.Symbol,b=B,D=Object.prototype,E=D.hasOwnProperty,x=D.toString,H=b?b.toStringTag:void 0;var k=function(e){var t=E.call(e,H),n=e[H];try{e[H]=void 0;var i=!0}catch(e){}var r=x.call(e);return i&&(t?e[H]=n:delete e[H]),r},O=Object.prototype.toString;var C=k,z=function(e){return O.call(e)},A=B?B.toStringTag:void 0;var $=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?C(e):z(e)};var w=$,P=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==w(e)},_=F,M=T,L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var W=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!M(e))||(R.test(e)||!L.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=$,j=N;var I,K=function(e){if(!j(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=v["__core-js_shared__"],U=(I=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var X=function(e){return!!U&&U in e},G=Function.prototype.toString;var Y=K,q=X,Q=N,Z=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ee=/^\[object .+?Constructor\]$/,te=Function.prototype,ne=Object.prototype,ie=te.toString,re=ne.hasOwnProperty,ae=RegExp("^"+ie.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!Q(e)||q(e))&&(Y(e)?ae:ee).test(Z(e))},le=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var n=le(e,t);return oe(n)?n:void 0},ce=se(Object,"create"),ue=ce;var he=function(){this.__data__=ue?ue(null):{},this.size=0};var pe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ce,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(de){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},me=ce,Fe=Object.prototype.hasOwnProperty;var ye=ce;var Se=he,ve=pe,Be=ge,be=function(e){var t=this.__data__;return me?void 0!==t[e]:Fe.call(t,e)},De=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Ee.prototype.clear=Se,Ee.prototype.delete=ve,Ee.prototype.get=Be,Ee.prototype.has=be,Ee.prototype.set=De;var xe=Ee;var He=function(){this.__data__=[],this.size=0};var ke=function(e,t){return e===t||e!=e&&t!=t};var Oe=function(e,t){for(var n=e.length;n--;)if(ke(e[n][0],t))return n;return-1},Ce=Oe,ze=Array.prototype.splice;var Ae=Oe;var $e=Oe;var we=Oe;var Pe=He,Te=function(e){var t=this.__data__,n=Ce(t,e);return!(n<0)&&(n==t.length-1?t.pop():ze.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},Me=function(e){return $e(this.__data__,e)>-1},Le=function(e,t){var n=this.__data__,i=we(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Re.prototype.clear=Pe,Re.prototype.delete=Te,Re.prototype.get=_e,Re.prototype.has=Me,Re.prototype.set=Le;var We=Re,Ne=se(v,"Map"),Ve=xe,je=We,Ie=Ne;var Ke=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Ke(t)?n["string"==typeof t?"string":"hash"]:n.map},Ue=Je;var Xe=Je;var Ge=Je;var Ye=Je;var qe=function(){this.size=0,this.__data__={hash:new Ve,map:new(Ie||je),string:new Ve}},Qe=function(e){var t=Ue(this,e).delete(e);return this.size-=t?1:0,t},Ze=function(e){return Xe(this,e).get(e)},et=function(e){return Ge(this,e).has(e)},tt=function(e,t){var n=Ye(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}nt.prototype.clear=qe,nt.prototype.delete=Qe,nt.prototype.get=Ze,nt.prototype.has=et,nt.prototype.set=tt;var it=nt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=e.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(rt.Cache||it),n}rt.Cache=it;var at=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g,st=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,i,r){t.push(i?r.replace(lt,"$1"):n||e)})),t}));var ct=function(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r},ut=F,ht=T,pt=B?B.prototype:void 0,dt=pt?pt.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(ut(t))return ct(t,e)+"";if(ht(t))return dt?dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gt=ft;var mt=F,Ft=W,yt=st,St=function(e){return null==e?"":gt(e)};var vt=T;var Bt=function(e,t){return mt(e)?e:Ft(e,t)?[e]:yt(St(e))},bt=function(e){if("string"==typeof e||vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dt=function(e,t){for(var n=0,i=(t=Bt(t,e)).length;null!=e&&n<i;)e=e[bt(t[n++])];return n&&n==i?e:void 0};var Et=m((function(e,t,n){var i=null==e?void 0:Dt(e,t);return void 0===i?n:i}));const xt=(e,t,n)=>t?Et(n,t)||Et(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return Et(e.collections,n)};var kt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(kt||(kt={}));const Ot={collections:{base:p,oneservice:f,plusJakartaSans:d},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,i=Ht(Ot,n[kt.textStyleScheme]);return n.options&&n.options.textStyle?xt(i,e,n.options.textStyle):xt(i,e)},zt={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},At=[h.OpenSans,h.PlusJakartaSans],$t=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},wt=(e,t)=>n=>{var i;const r=zt[e].fontFamily(n),a=zt[e].fontWeight(n),o=At.find((e=>Object.values(e).includes(r)));return o?s`
                font-family: ${$t(o,t)||$t(o,a)||r};
                font-weight: normal !important;
            `:s`
            font-family: ${r};
            font-weight: ${null!==(i=Pt(t)||a)&&void 0!==i?i:"normal"};
        `},Pt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Tt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,n=!1)=>i=>{const r=zt[e],a=r.fontSize(i);return s`
            ${wt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${s`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Mt=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Tt(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Tt(n)}
        `,Lt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Rt=e=>t=>{const n=t.theme,i=Ht(Lt,n[kt.colorScheme]);return n.options&&n.options.color?xt(i,e,n.options.color):xt(i,e)},Wt={Brand:{1:Rt("Brand.1"),2:Rt("Brand.2"),3:Rt("Brand.3"),4:Rt("Brand.4"),5:Rt("Brand.5"),6:Rt("Brand.6")},Primary:Rt("Primary"),PrimaryDark:Rt("PrimaryDark"),Secondary:Rt("Secondary"),Accent:{Light:{1:Rt("Accent.Light.1"),2:Rt("Accent.Light.2"),3:Rt("Accent.Light.3"),4:Rt("Accent.Light.4"),5:Rt("Accent.Light.5"),6:Rt("Accent.Light.6")},Dark:{1:Rt("Accent.Dark.1"),2:Rt("Accent.Dark.2"),3:Rt("Accent.Dark.3")}},Neutral:{1:Rt("Neutral.1"),2:Rt("Neutral.2"),3:Rt("Neutral.3"),4:Rt("Neutral.4"),5:Rt("Neutral.5"),6:Rt("Neutral.6"),7:Rt("Neutral.7"),8:Rt("Neutral.8")},Validation:{Green:{Text:Rt("Validation.Green.Text"),Icon:Rt("Validation.Green.Icon"),Border:Rt("Validation.Green.Border"),Background:Rt("Validation.Green.Background")},Orange:{Text:Rt("Validation.Orange.Text"),Icon:Rt("Validation.Orange.Icon"),Border:Rt("Validation.Orange.Border"),Background:Rt("Validation.Orange.Background"),Badge:Rt("Validation.Orange.Badge")},Red:{Text:Rt("Validation.Red.Text"),Icon:Rt("Validation.Red.Icon"),Border:Rt("Validation.Red.Border"),Background:Rt("Validation.Red.Background")},Blue:{Text:Rt("Validation.Blue.Text"),Icon:Rt("Validation.Blue.Icon"),Border:Rt("Validation.Blue.Border"),Background:Rt("Validation.Blue.Background")}},Shadow:{Accent:Rt("Shadow.Accent"),Red:Rt("Shadow.Red"),Elevation:Rt("Shadow.Elevation")}};var Nt;!function(e){e.D1=l.h1`
        ${e=>s`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>s`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>s`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>s`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>s`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>s`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>s`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>s`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>s`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>s`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>s`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>s`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>s`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>s`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${Mt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>It(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>It(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Nt||(Nt={}));const Vt=l.a`
    ${e=>s`
            ${_t(e.textStyle,e.weight)}
            color: ${Wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt.Secondary};

                svg {
                    color: ${Wt.Secondary};
                }
            }
        `}
`,jt=l(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=n=>{var{external:i=!1,children:r}=n,a=u(n,["external","children"]);return e(Vt,Object.assign({},a,{children:[r,i&&t(jt,{})]}))};var Kt;function Jt(e,t){return Jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Jt(e,t)}function Ut(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Xt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Gt(e){return null!==e&&1===e.length?e[0]:e.slice()}function Yt(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function qt(e,t){return Qt(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Qt(e,t){const n=(e-t.min)%t.step;let i=e-n;return 2*Math.abs(n)>=t.step&&(i+=n>0?t.step:-t.step),parseFloat(i.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));let Zt=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),i=n.getDiffPosition(t[0]),r=n.getValueFromPosition(i);n.move(r)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],i=t[1]-n.startPosition[1];n.isScrolling=Math.abs(i)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const i=n.getDiffPosition(t[0]),r=n.getValueFromPosition(i);n.move(r)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Yt(n.getMouseEventMap())}))}Ut(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),i=qt(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(i)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Yt(n.getKeyDownEventMap()),Ut(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const i=n.getMousePosition(t);n.start(e,i[0]),Yt(n.getMouseEventMap()),Ut(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const i=n.getTouchPosition(t);n.startPosition=i,n.isScrolling=void 0,n.start(e,i[0]),Yt(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const i=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),r={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:i,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:Gt(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(r["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(r,a)},n.renderTrack=(e,t,i)=>{const r={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-i)},a={index:e,value:Gt(n.state.value)};return n.props.renderTrack(r,a)};let r=Xt(t.value);r.length||(r=Xt(t.defaultValue)),n.pendingResizeTimeouts=[];const a=[];for(let e=0;e<r.length;e+=1)r[e]=qt(r[e],t),a.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:a},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jt(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Xt(e.value);return n.length?t.pending?null:{value:n.map((t=>qt(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Gt(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:i}=this.state,r=i.length;for(let a=0;a<r;a+=1){const r=this.calcOffset(i[a]),o=Math.abs(e-r);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return qt(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),i=e.getBoundingClientRect(),r=e[n],a=i[this.posMaxKey()],o=i[this.posMinKey()],l=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],s=r-l,c=Math.abs(a-o);this.state.upperBound===s&&this.state.sliderLength===c&&this.state.thumbSize===l||this.setState({upperBound:s,sliderLength:c,thumbSize:l})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),i=n[this.posMaxKey()],r=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?i:r));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),i=this.getClosestIndex(n),r=qt(this.calcValue(n),this.props),a=this.state.value.slice();a[i]=r;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(i),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:i}=this.state;i.splice(i.indexOf(e),1),i.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:i})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=qt(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=qt(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:i}=t,r=t[n];if(e===r)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:l,minDistance:s}=this.props;if(!a){if(n>0){const i=t[n-1];e<i+s&&(e=i+s)}if(n<i-1){const i=t[n+1];e>i-s&&(e=i-s)}}t[n]=e,a&&i>1&&(e>r?(this.pushSucceeding(t,s,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const a=i-r*n;t[e-1-r]>a&&(t[e-1-r]=a)}}(i,t,s,o)):e<r&&(this.pushPreceding(t,s,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const e=i+r*n;t[r]<e&&(t[r]=e)}}(i,t,s,l))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let i,r;for(i=n,r=e[i]+t;null!==e[i+1]&&r>e[i+1];i+=1,r=e[i]+t)e[i+1]=Qt(r,this.props)},n.pushPreceding=function(e,t,n){for(let i=n,r=e[i]-t;null!==e[i-1]&&r<e[i-1];i-=1,r=e[i]-t)e[i-1]=Qt(r,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Gt(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let i=0;i<t;i+=1)n[i]=this.buildThumbStyle(e[i],i);const i=[];for(let e=0;e<t;e+=1)i[e]=this.renderThumb(n[e],e);return i},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let i=0;i<n;i+=1)t.push(this.renderTrack(i+1,e[i],e[i+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let i=0;i<n;i+=1)e[i]=this.calcOffset(t[i],i);const r=this.props.withTracks?this.renderTracks(e):null,a=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,a,o)},t}(i.Component);Zt.displayName="ReactSlider",Zt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var en=Zt;const tn=l.div`
    isolation: isolate;
`,nn=l.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,rn=l.div`
    margin-bottom: 1rem;
`,an=l(Nt.Body)`
    overflow-wrap: anywhere;
`,on=l(en)`
    height: 0.875rem;
`,ln=l.div`
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

        background-color: ${Wt.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Wt.Neutral[4]};
        border-radius: 50%;
    }
`,sn=l.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${ln}:after {
        border: 1px solid ${Wt.Primary};
    }
`,cn=l.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Wt.Neutral[4](e)};
`,un=l.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,hn=l.div`
    margin: 0 0.5rem;
`,pn=l.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,dn=l.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Wt.Neutral[8]};

    ${e=>{let t=Wt.Neutral[6];return e.$disabled&&e.$selected?t=Wt.Neutral[4]:e.$disabled?t=Wt.Neutral[5]:e.$selected&&(t=Wt.Accent.Light[1]),s`
            background-color: ${t};
        `}}
`,fn=l((n=>{var{value:i,min:o=0,max:l=100,step:s=1,minRange:c,numOfThumbs:h=2,colors:p,disabled:d,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:F,sliderLabelSuffix:y,showIndicatorLabel:S,indicatorLabelPrefix:v,indicatorLabelSuffix:B,renderSliderLabel:b,onChange:D,onChangeEnd:E}=n,x=u(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[H,k]=r(C()),O=function(){const e=function(){const e=d||f?Wt.Neutral[5]:Wt.Neutral[4],t=d||f?Wt.Neutral[4]:Wt.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==p?void 0:p[n])||e[n]))}();a((()=>{i!==H&&k(C())}),[i]);function C(){if(i&&i.length===h)return i;const e=[];for(let t=0;t<h;t++)e.push(o+s*t);return e}const z=t=>b?b(t):e(an,{children:[F,t,y]});return e(tn,Object.assign({},x,{children:[S&&t(rn,{children:(()=>{let t="";if(1===H.length)t=`${H[0]}`;else if(2===H.length)t=`${H[0]} - ${H[1]}`;else if(H.length>2){t=`${Math.min(...H)} - ${Math.max(...H)}`}return e(an,{children:[v,t,B]})})()}),t(on,{step:s,min:o,max:l,value:H,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==D||D(t)}else{if(t>-1&&H[t]===e[t])return;k(e),null==D||D(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==E||E(t)}else k(e),null==E||E(e)},minDistance:c,ariaLabel:g,renderThumb:(e,n)=>t(sn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:d?void 0:e.tabIndex},{children:t(ln,{$disabled:d,$readOnly:f})})),renderTrack:(e,n)=>t(cn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:O[n.index]}))}),m&&e(nn,{children:[t("div",{children:z(o)}),t("div",{children:z(l)})]})]}))}))`
    margin-top: -0.3125rem;
`,gn=i=>{var{bins:l=[],interval:s,disabled:c,readOnly:h,value:p,showRangeLabels:d,rangeLabelPrefix:f,rangeLabelSuffix:g,onChange:m,onChangeEnd:F,renderEmptyView:y,renderRangeLabel:S}=i,v=u(i,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const B=l.map((e=>e.count)),b=Math.max(...B),D=l.map((e=>e.minValue)),E=Math.max(...D),x=Math.min(...D),[H,k]=r(A()),O=o((()=>{const e=[...l].sort(((e,t)=>e.minValue-t.minValue)),t=(E-x)/s+1,n=[];for(let i=0;i<t;i++){const t=e.find((e=>e.minValue===x+s*i));t?n.push(t):n.push({count:0,minValue:x+s*i})}return n}),[l,s]);a((()=>{p!==H&&k(A())}),[p]);const C=e=>{k(e),null==m||m(e)},z=e=>{k(e),null==F||F(e)};function A(){return null!=p?p:[x,x+s]}const $=t=>S?S(t):e(Nt.Body,{children:[f,t,g]});return e("div",Object.assign({},v,{children:[d&&e(un,{children:[$(H[0]),t(hn,{children:"-"}),$(H[1])]}),O.every((e=>0===e.count))&&y?y():e(n,{children:[t(pn,{children:O.map(((e,n)=>{const i=e.count/b;return t(dn,{style:{height:i?`calc(calc(100% - 0.25rem) * ${i} + 0.25rem)`:0},$selected:e.minValue>=H[0]&&e.minValue<H[1],$disabled:c||h},n)}))}),t(fn,{min:x,max:E+s,step:s,minRange:s,numOfThumbs:2,value:H,disabled:c,readOnly:h,onChange:C,onChangeEnd:z})]})]}))};export{gn as HistogramSlider};
//# sourceMappingURL=index.js.map
