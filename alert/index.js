import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{TickCircleFillIcon as i}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as o}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as l}from"@lifesg/react-icons/exclamation-circle-fill";import{ICircleFillIcon as c}from"@lifesg/react-icons/i-circle-fill";import{ArrowRightIcon as g}from"@lifesg/react-icons/arrow-right";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,f="object"==typeof s&&s&&s.Object===Object&&s,F="object"==typeof self&&self&&self.Object===Object&&self,p=f||F||Function("return this")(),y=p.Symbol,B=y,m=Object.prototype,S=m.hasOwnProperty,D=m.toString,v=B?B.toStringTag:void 0;var $=function(e){var t=S.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var a=D.call(e);return n&&(t?e[v]=r:delete e[v]),a},E=Object.prototype.toString;var b=$,H=function(e){return E.call(e)},A=y?y.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":A&&A in Object(e)?b(e):H(e)};var k=x,_=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==k(e)},z=h,C=w,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var j=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!C(e))||(T.test(e)||!O.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,V=I;var N,L=function(e){if(!V(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=p["__core-js_shared__"],R=(N=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var G=function(e){return!!R&&R in e},X=Function.prototype.toString;var M=L,U=G,q=I,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,Z=Q.toString,ee=Y.hasOwnProperty,te=RegExp("^"+Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!q(e)||U(e))&&(M(e)?te:K).test(J(e))},ne=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ie=ae(Object,"create"),oe=ie;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=ie,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return de.call(t,e)?t[e]:void 0},ue=ie,he=Object.prototype.hasOwnProperty;var fe=ie;var Fe=le,pe=ce,ye=se,Be=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},me=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=Fe,Se.prototype.delete=pe,Se.prototype.get=ye,Se.prototype.has=Be,Se.prototype.set=me;var De=Se;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var r=e.length;r--;)if($e(e[r][0],t))return r;return-1},be=Ee,He=Array.prototype.splice;var Ae=Ee;var xe=Ee;var ke=Ee;var _e=ve,we=function(e){var t=this.__data__,r=be(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=Ae(t,e);return r<0?void 0:t[r][1]},Ce=function(e){return xe(this.__data__,e)>-1},Oe=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Te.prototype.clear=_e,Te.prototype.delete=we,Te.prototype.get=ze,Te.prototype.has=Ce,Te.prototype.set=Oe;var je=Te,Ie=ae(p,"Map"),We=De,Ve=je,Ne=Ie;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var r=e.__data__;return Le(t)?r["string"==typeof t?"string":"hash"]:r.map},Re=Pe;var Ge=Pe;var Xe=Pe;var Me=Pe;var Ue=function(){this.size=0,this.__data__={hash:new We,map:new(Ne||Ve),string:new We}},qe=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ge(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Ue,Ye.prototype.delete=qe,Ye.prototype.get=Je,Ye.prototype.has=Ke,Ye.prototype.set=Qe;var Ze=Ye;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(et.Cache||Ze),r}et.Cache=Ze;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,a){t.push(n?a.replace(nt,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ot=h,lt=w,ct=y?y.prototype:void 0,gt=ct?ct.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(lt(t))return gt?gt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},st=dt;var ut=h,ht=j,ft=at,Ft=function(e){return null==e?"":st(e)};var pt=w;var yt=function(e,t){return ut(e)?e:ht(e,t)?[e]:ft(Ft(e))},Bt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var r=0,n=(t=yt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0};var St=u((function(e,t,r){var n=null==e?void 0:mt(e,t);return void 0===n?r:n}));const Dt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const r=t.theme,n=vt(Et,r[$t.colorScheme]);return r.options&&r.options.color?Dt(n,e,r.options.color):Dt(n,e)},Ht={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},At={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:At.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:At.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:At.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:At.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:At.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:At.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:At.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:At.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:At.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},kt=e=>t=>{const r=t.theme,n=vt(xt,r[$t.textStyleScheme]);return r.options&&r.options.textStyle?Dt(n,e,r.options.textStyle):Dt(n,e)},_t={D1:{fontFamily:kt("D1.fontFamily"),fontSize:kt("D1.fontSize"),fontWeight:kt("D1.fontWeight"),lineHeight:kt("D1.lineHeight"),letterSpacing:kt("D1.letterSpacing")},D2:{fontFamily:kt("D2.fontFamily"),fontSize:kt("D2.fontSize"),fontWeight:kt("D2.fontWeight"),lineHeight:kt("D2.lineHeight"),letterSpacing:kt("D2.letterSpacing")},D3:{fontFamily:kt("D3.fontFamily"),fontSize:kt("D3.fontSize"),fontWeight:kt("D3.fontWeight"),lineHeight:kt("D3.lineHeight"),letterSpacing:kt("D3.letterSpacing")},D4:{fontFamily:kt("D4.fontFamily"),fontSize:kt("D4.fontSize"),fontWeight:kt("D4.fontWeight"),lineHeight:kt("D4.lineHeight"),letterSpacing:kt("D4.letterSpacing")},DBody:{fontFamily:kt("DBody.fontFamily"),fontSize:kt("DBody.fontSize"),fontWeight:kt("DBody.fontWeight"),lineHeight:kt("DBody.lineHeight"),letterSpacing:kt("DBody.letterSpacing")},H1:{fontFamily:kt("H1.fontFamily"),fontSize:kt("H1.fontSize"),fontWeight:kt("H1.fontWeight"),lineHeight:kt("H1.lineHeight"),letterSpacing:kt("H1.letterSpacing")},H2:{fontFamily:kt("H2.fontFamily"),fontSize:kt("H2.fontSize"),fontWeight:kt("H2.fontWeight"),lineHeight:kt("H2.lineHeight"),letterSpacing:kt("H2.letterSpacing")},H3:{fontFamily:kt("H3.fontFamily"),fontSize:kt("H3.fontSize"),fontWeight:kt("H3.fontWeight"),lineHeight:kt("H3.lineHeight"),letterSpacing:kt("H3.letterSpacing")},H4:{fontFamily:kt("H4.fontFamily"),fontSize:kt("H4.fontSize"),fontWeight:kt("H4.fontWeight"),lineHeight:kt("H4.lineHeight"),letterSpacing:kt("H4.letterSpacing")},H5:{fontFamily:kt("H5.fontFamily"),fontSize:kt("H5.fontSize"),fontWeight:kt("H5.fontWeight"),lineHeight:kt("H5.lineHeight"),letterSpacing:kt("H5.letterSpacing")},H6:{fontFamily:kt("H6.fontFamily"),fontSize:kt("H6.fontSize"),fontWeight:kt("H6.fontWeight"),lineHeight:kt("H6.lineHeight"),letterSpacing:kt("H6.letterSpacing")},Body:{fontFamily:kt("Body.fontFamily"),fontSize:kt("Body.fontSize"),fontWeight:kt("Body.fontWeight"),lineHeight:kt("Body.lineHeight"),letterSpacing:kt("Body.letterSpacing")},BodySmall:{fontFamily:kt("BodySmall.fontFamily"),fontSize:kt("BodySmall.fontSize"),fontWeight:kt("BodySmall.fontWeight"),lineHeight:kt("BodySmall.lineHeight"),letterSpacing:kt("BodySmall.letterSpacing")},XSmall:{fontFamily:kt("XSmall.fontFamily"),fontSize:kt("XSmall.fontSize"),fontWeight:kt("XSmall.fontWeight"),lineHeight:kt("XSmall.lineHeight"),letterSpacing:kt("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return At.Bold;case 600:case"semibold":return At.Semibold;case 300:case"light":return At.Light;case 400:case"regular":return At.Regular;default:return""}},zt=(e,t)=>r=>{var a;const i=_t[e].fontFamily(r),o=_t[e].fontWeight(r);return Object.values(At).includes(i)?n`
                font-family: ${wt(t)||wt(o)||i};
                font-weight: normal !important;
            `:n`
            font-family: ${i};
            font-weight: ${null!==(a=Ct(t)||o)&&void 0!==a?a:"normal"};
        `},Ct=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Tt=(e,t,r=!1)=>a=>{const i=_t[e],o=i.fontSize(a);return n`
            ${zt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},jt=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Ot(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Ot(r)}
        `;var It;!function(e){e.D1=r.h1`
        ${e=>n`
                ${Tt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${Tt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${Tt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${Tt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${Tt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${Tt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${Tt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${Tt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${Tt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${Tt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${Tt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${Tt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${Tt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${Tt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(It||(It={}));const Wt=r.a`
    ${e=>n`
            ${Tt(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,Vt=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=r=>{var{external:n=!1,children:a}=r,i=d(r,["external","children"]);return e(Wt,Object.assign({},i,{children:[a,n&&t(Vt,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Pt=(e,t)=>{const{textColor:r=Ht.Neutral[1]}=t||{};return n`
        // Text
        ${Tt(e,"regular")}
        color: ${r};

        a,
        strong {
            ${Tt(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},Rt=r.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ht.Validation.Red.Background(e),r=Ht.Validation.Red.Border(e);break;case"success":t=Ht.Validation.Green.Background(e),r=Ht.Validation.Green.Border(e);break;case"warning":default:t=Ht.Validation.Orange.Background(e),r=Ht.Validation.Orange.Border(e);break;case"info":t=Ht.Validation.Blue.Background(e),r=Ht.Validation.Blue.Border(e);break;case"description":t=Ht.Neutral[7](e),r=Ht.Neutral[4](e)}return n`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    ${e=>"small"===e.$sizeType?Pt("H6"):Pt("BodySmall")}
`,Gt=r.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&n`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ht.Validation.Red.Icon(e);break;case"success":t=Ht.Validation.Green.Icon(e);break;case"warning":default:t=Ht.Validation.Orange.Icon(e);break;case"info":t=Ht.Validation.Blue.Icon(e);break;case"description":t=Ht.Neutral[4](e)}return n`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Xt=r(It.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?n`
                ${Tt("H6","semibold")}
                margin-top: 0.25rem;
            `:n`
                ${Tt("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    color: ${Ht.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Ht.Primary};
    }
`,Mt=r.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ut=r=>{var{type:n,className:a,children:s,actionLink:u,actionLinkIcon:h,sizeType:f="default",showIcon:F=!1}=r,p=d(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return e(Rt,Object.assign({className:a,$type:n,$sizeType:f,"data-testid":p["data-testid"]},{children:[F&&t(Gt,Object.assign({$sizeType:f,$type:n},{children:(()=>{switch(n){case"success":return t(i,{});case"warning":return t(o,{});case"error":return t(l,{});case"info":case"description":return t(c,{});default:return null}})()})),e(Mt,{children:[s,u&&e(Xt,Object.assign({"data-testid":"action-link",$type:n,$sizeType:f},u,{children:[u.children,h||t(g,{})]}))]})]}))};export{Ut as Alert};
//# sourceMappingURL=index.js.map
