import{createElement as e}from"react";import{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import{ExclamationCircleFillIcon as a,TickIcon as i}from"@lifesg/react-icons";import o,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";const d={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:d.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},u={D1:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:d.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:d.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:d.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.125}};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F=Array.isArray,f="object"==typeof h&&h&&h.Object===Object&&h,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),B=m.Symbol,y=B,S=Object.prototype,D=S.hasOwnProperty,b=S.toString,v=y?y.toStringTag:void 0;var $=function(e){var t=D.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var a=b.call(e);return r&&(t?e[v]=n:delete e[v]),a},E=Object.prototype.toString;var H=$,x=function(e){return E.call(e)},A=B?B.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?H(e):x(e)};var w=k,C=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==w(e)},z=F,O=_,T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var V=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(N.test(e)||!T.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=k,I=W;var R,L=function(e){if(!I(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=m["__core-js_shared__"],G=(R=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var X=function(e){return!!G&&G in e},M=Function.prototype.toString;var U=L,q=X,J=W,K=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,Y=Function.prototype,Z=Object.prototype,ee=Y.toString,te=Z.hasOwnProperty,ne=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!J(e)||q(e))&&(U(e)?ne:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=ae(e,t);return re(n)?n:void 0},oe=ie(Object,"create"),le=oe;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=oe,ue=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},se=oe,Fe=Object.prototype.hasOwnProperty;var fe=oe;var pe=ce,me=de,Be=he,ye=function(e){var t=this.__data__;return se?void 0!==t[e]:Fe.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=pe,De.prototype.delete=me,De.prototype.get=Be,De.prototype.has=ye,De.prototype.set=Se;var be=De;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},He=Ee,xe=Array.prototype.splice;var Ae=Ee;var ke=Ee;var we=Ee;var Ce=ve,_e=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():xe.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return ke(this.__data__,e)>-1},Te=function(e,t){var n=this.__data__,r=we(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Ce,Ne.prototype.delete=_e,Ne.prototype.get=ze,Ne.prototype.has=Oe,Ne.prototype.set=Te;var Ve=Ne,We=ie(m,"Map"),je=be,Ie=Ve,Re=We;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Ge=Pe;var Xe=Pe;var Me=Pe;var Ue=Pe;var qe=function(){this.size=0,this.__data__={hash:new je,map:new(Re||Ie),string:new je}},Je=function(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Xe(this,e).get(e)},Qe=function(e){return Me(this,e).has(e)},Ye=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=qe,Ze.prototype.delete=Je,Ze.prototype.get=Ke,Ze.prototype.has=Qe,Ze.prototype.set=Ye;var et=Ze;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(tt.Cache||et),n}tt.Cache=et;var nt=tt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,it=function(e){var t=nt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,r,a){t.push(r?a.replace(at,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},lt=F,ct=_,dt=B?B.prototype:void 0,gt=dt?dt.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(lt(t))return ot(t,e)+"";if(ct(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ht=ut;var st=F,Ft=V,ft=it,pt=function(e){return null==e?"":ht(e)};var mt=_;var Bt=function(e,t){return st(e)?e:Ft(e,t)?[e]:ft(pt(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,r=(t=Bt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var Dt=s((function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r}));const bt=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Et={collections:{base:g,oneservice:u},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=vt(Et,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?bt(r,e,n.options.textStyle):bt(r,e)},xt={D1:{fontFamily:Ht("D1.fontFamily"),fontSize:Ht("D1.fontSize"),fontWeight:Ht("D1.fontWeight"),lineHeight:Ht("D1.lineHeight"),letterSpacing:Ht("D1.letterSpacing")},D2:{fontFamily:Ht("D2.fontFamily"),fontSize:Ht("D2.fontSize"),fontWeight:Ht("D2.fontWeight"),lineHeight:Ht("D2.lineHeight"),letterSpacing:Ht("D2.letterSpacing")},D3:{fontFamily:Ht("D3.fontFamily"),fontSize:Ht("D3.fontSize"),fontWeight:Ht("D3.fontWeight"),lineHeight:Ht("D3.lineHeight"),letterSpacing:Ht("D3.letterSpacing")},D4:{fontFamily:Ht("D4.fontFamily"),fontSize:Ht("D4.fontSize"),fontWeight:Ht("D4.fontWeight"),lineHeight:Ht("D4.lineHeight"),letterSpacing:Ht("D4.letterSpacing")},DBody:{fontFamily:Ht("DBody.fontFamily"),fontSize:Ht("DBody.fontSize"),fontWeight:Ht("DBody.fontWeight"),lineHeight:Ht("DBody.lineHeight"),letterSpacing:Ht("DBody.letterSpacing")},H1:{fontFamily:Ht("H1.fontFamily"),fontSize:Ht("H1.fontSize"),fontWeight:Ht("H1.fontWeight"),lineHeight:Ht("H1.lineHeight"),letterSpacing:Ht("H1.letterSpacing")},H2:{fontFamily:Ht("H2.fontFamily"),fontSize:Ht("H2.fontSize"),fontWeight:Ht("H2.fontWeight"),lineHeight:Ht("H2.lineHeight"),letterSpacing:Ht("H2.letterSpacing")},H3:{fontFamily:Ht("H3.fontFamily"),fontSize:Ht("H3.fontSize"),fontWeight:Ht("H3.fontWeight"),lineHeight:Ht("H3.lineHeight"),letterSpacing:Ht("H3.letterSpacing")},H4:{fontFamily:Ht("H4.fontFamily"),fontSize:Ht("H4.fontSize"),fontWeight:Ht("H4.fontWeight"),lineHeight:Ht("H4.lineHeight"),letterSpacing:Ht("H4.letterSpacing")},H5:{fontFamily:Ht("H5.fontFamily"),fontSize:Ht("H5.fontSize"),fontWeight:Ht("H5.fontWeight"),lineHeight:Ht("H5.lineHeight"),letterSpacing:Ht("H5.letterSpacing")},H6:{fontFamily:Ht("H6.fontFamily"),fontSize:Ht("H6.fontSize"),fontWeight:Ht("H6.fontWeight"),lineHeight:Ht("H6.lineHeight"),letterSpacing:Ht("H6.letterSpacing")},Body:{fontFamily:Ht("Body.fontFamily"),fontSize:Ht("Body.fontSize"),fontWeight:Ht("Body.fontWeight"),lineHeight:Ht("Body.lineHeight"),letterSpacing:Ht("Body.letterSpacing")},BodySmall:{fontFamily:Ht("BodySmall.fontFamily"),fontSize:Ht("BodySmall.fontSize"),fontWeight:Ht("BodySmall.fontWeight"),lineHeight:Ht("BodySmall.lineHeight"),letterSpacing:Ht("BodySmall.letterSpacing")},XSmall:{fontFamily:Ht("XSmall.fontFamily"),fontSize:Ht("XSmall.fontSize"),fontWeight:Ht("XSmall.fontWeight"),lineHeight:Ht("XSmall.lineHeight"),letterSpacing:Ht("XSmall.letterSpacing")}},At=e=>{switch(e){case 700:case"bold":return d.Bold;case 600:case"semibold":return d.Semibold;case 300:case"light":return d.Light;case 400:case"regular":return d.Regular;default:return""}},kt=(e,t)=>n=>{var r;const a=xt[e].fontFamily(n),i=xt[e].fontWeight(n);return Object.values(d).includes(a)?l`
                font-family: ${At(t)||At(i)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(r=wt(t)||i)&&void 0!==r?r:"normal"};
        `},wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,n=!1)=>r=>{const a=xt[e],i=a.fontSize(r);return l`
            ${kt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},zt=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Ct(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Ct(n)}
        `;function Ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Tt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=vt(Tt,n[$t.colorScheme]);return n.options&&n.options.color?bt(r,e,n.options.color):bt(r,e)},Vt={Brand:{1:Nt("Brand.1"),2:Nt("Brand.2"),3:Nt("Brand.3"),4:Nt("Brand.4"),5:Nt("Brand.5"),6:Nt("Brand.6")},Primary:Nt("Primary"),PrimaryDark:Nt("PrimaryDark"),Secondary:Nt("Secondary"),Accent:{Light:{1:Nt("Accent.Light.1"),2:Nt("Accent.Light.2"),3:Nt("Accent.Light.3"),4:Nt("Accent.Light.4"),5:Nt("Accent.Light.5"),6:Nt("Accent.Light.6")},Dark:{1:Nt("Accent.Dark.1"),2:Nt("Accent.Dark.2"),3:Nt("Accent.Dark.3")}},Neutral:{1:Nt("Neutral.1"),2:Nt("Neutral.2"),3:Nt("Neutral.3"),4:Nt("Neutral.4"),5:Nt("Neutral.5"),6:Nt("Neutral.6"),7:Nt("Neutral.7"),8:Nt("Neutral.8")},Validation:{Green:{Text:Nt("Validation.Green.Text"),Icon:Nt("Validation.Green.Icon"),Border:Nt("Validation.Green.Border"),Background:Nt("Validation.Green.Background")},Orange:{Text:Nt("Validation.Orange.Text"),Icon:Nt("Validation.Orange.Icon"),Border:Nt("Validation.Orange.Border"),Background:Nt("Validation.Orange.Background"),Badge:Nt("Validation.Orange.Badge")},Red:{Text:Nt("Validation.Red.Text"),Icon:Nt("Validation.Red.Icon"),Border:Nt("Validation.Red.Border"),Background:Nt("Validation.Red.Background")},Blue:{Text:Nt("Validation.Blue.Text"),Icon:Nt("Validation.Blue.Icon"),Border:Nt("Validation.Blue.Border"),Background:Nt("Validation.Blue.Background")}},Shadow:{Accent:Nt("Shadow.Accent"),Red:Nt("Shadow.Red"),Elevation:Nt("Shadow.Elevation")}};var Wt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const jt=o.a`
    ${e=>l`
            ${_t(e.textStyle,e.weight)}
            color: ${Vt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Vt.Secondary};

                svg {
                    color: ${Vt.Secondary};
                }
            }
        `}
`,It=o(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=e=>{var{external:r=!1,children:a}=e,i=Ot(e,["external","children"]);return t(jt,Object.assign({},i,{children:[a,r&&n(It,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Pt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gt=e=>Object.keys(Pt).reduce(((t,n)=>{const r=Pt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Xt=Gt("max-width"),Mt=(Gt("min-width"),o.div`
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

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=Vt.Neutral[8],e.$color){case"grey":t=Vt.Neutral[3],n=Vt.Neutral[3];break;case"green":t=Vt.Validation.Green.Text,n=Vt.Validation.Green.Text;break;case"yellow":t=Vt.Validation.Orange.Text,n=Vt.Validation.Orange.Text;break;case"red":t=Vt.Validation.Red.Text,n=Vt.Validation.Red.Text;break;case"blue":t=Vt.Validation.Blue.Text,n=Vt.Validation.Blue.Text;break;default:t=Vt.Neutral[1],n=Vt.Neutral[1]}else switch(e.$color){case"grey":t=Vt.Neutral[6],n=Vt.Neutral[4],r=Vt.Neutral[3];break;case"green":t=Vt.Validation.Green.Background,n=Vt.Validation.Green.Border,r=Vt.Validation.Green.Text;break;case"yellow":t=Vt.Validation.Orange.Background,n=Vt.Validation.Orange.Border,r=Vt.Validation.Orange.Text;break;case"red":t=Vt.Validation.Red.Background,n=Vt.Validation.Red.Border,r=Vt.Validation.Red.Text;break;case"blue":t=Vt.Validation.Blue.Background,n=Vt.Validation.Blue.Border,r=Vt.Validation.Blue.Text;break;default:t=Vt.Neutral[8],n=Vt.Neutral[5],r=Vt.Neutral[1]}return l`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`),Ut=o.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,qt=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return l`
                    background-color: ${Vt.Accent.Light[1]};
                `;case"upcoming-active":return l`
                    border: 4px solid ${Vt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    border: 4px solid ${Vt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Vt.Validation.Green.Icon};
                    svg {
                        color: ${Vt.Neutral[8]};
                    }
                `;case"error":return l`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Vt.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return l`
                    background-color: ${Vt.Neutral[4]};
                `}}}
`,Jt=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return l`
                    background-color: ${Vt.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return l`
                    background-color: ${Vt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Vt.Validation.Green.Icon};
                `;case"error":return l`
                    margin-left: -0.15rem;
                    background-color: ${Vt.Validation.Red.Icon};
                `}}}
`,Kt=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Qt=o.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Xt.tablet} {
        grid-column: span 8;
    }

    ${Xt.mobileL} {
        grid-column: span 4;
    }
`,Yt=o(Wt.H3)`
    margin-bottom: 1rem;

    ${Xt.tablet} {
        margin-bottom: 1.5rem;
    }
`,Zt=o(Wt.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,en=o.div`
    display: flex;

    :last-of-type ${Jt} {
        margin-bottom: 0;
    }
`,tn=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,nn=o(Wt.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,rn=o((e=>{var{type:r,colorType:a="black",children:i,icon:o}=e,l=Ot(e,["type","colorType","children","icon"]);return t(Mt,Object.assign({$type:r,$color:a},l,{children:[o,n(Ut,{children:i})]}))}))`
    padding: 0.125rem 0.5rem;
`,an=({items:o,className:l,title:c,startCol:d,colSpan:g,"data-base-indicator-testid":u,"data-testid":h="timeline"})=>{const s=e=>"string"==typeof e?n(Wt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):n(r,{children:e}),F=e=>"string"==typeof e?n(Zt,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):n(r,{children:e}),f=t=>t.slice(0,2).map(((t,n)=>e(rn,Object.assign({},t,{type:t.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),t.children))),p=e=>{switch(e){case"completed":return n(i,{});case"error":return n(a,{});default:return null}};return t(Qt,Object.assign({className:l,"data-testid":h,$startCol:d,$colSpan:g},{children:[n(Yt,Object.assign({id:"timeline-title"},{children:c})),o.map(((e,r)=>{const{title:a,content:i,statuses:o,variant:l}=e,c=u?`circleindicator${r+1}_div_${u}`:"circleindicator",d=l||(0===r?"current":"upcoming-active");return t(en,{children:[t(Kt,{children:[n(qt,Object.assign({"data-testid":c,$variant:d},{children:p(d)})),n(Jt,{$variant:d})]}),t(tn,Object.assign({className:"timeline-item-content"},{children:[F(a),o&&n(nn,{children:f(o)}),s(i)]}))]},`timeline-item-${r}`)}))]}))};export{an as Timeline};
//# sourceMappingURL=index.js.map
