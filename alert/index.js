import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{TickCircleFillIcon as i}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as o}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as l}from"@lifesg/react-icons/exclamation-circle-fill";import{ICircleFillIcon as c}from"@lifesg/react-icons/i-circle-fill";import{ArrowRightIcon as g}from"@lifesg/react-icons/arrow-right";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=Array.isArray,f="object"==typeof s&&s&&s.Object===Object&&s,p="object"==typeof self&&self&&self.Object===Object&&self,F=f||p||Function("return this")(),y=F.Symbol,m=y,B=Object.prototype,S=B.hasOwnProperty,v=B.toString,D=m?m.toStringTag:void 0;var $=function(e){var t=S.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var a=v.call(e);return r&&(t?e[D]=n:delete e[D]),a},b=Object.prototype.toString;var H=$,E=function(e){return b.call(e)},_=y?y.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?H(e):E(e)};var A=x,k=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==A(e)},z=u,O=w,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var j=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(T.test(e)||!C.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=x,I=W;var N,L=function(e){if(!I(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=F["__core-js_shared__"],R=(N=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var G=function(e){return!!R&&R in e},X=Function.prototype.toString;var M=L,U=G,q=W,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,Z=Q.toString,ee=Y.hasOwnProperty,te=RegExp("^"+Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!q(e)||U(e))&&(M(e)?te:K).test(J(e))},re=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=re(e,t);return ne(n)?n:void 0},ie=ae(Object,"create"),oe=ie;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=ie,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},he=ie,ue=Object.prototype.hasOwnProperty;var fe=ie;var pe=le,Fe=ce,ye=se,me=function(e){var t=this.__data__;return he?void 0!==t[e]:ue.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=pe,Se.prototype.delete=Fe,Se.prototype.get=ye,Se.prototype.has=me,Se.prototype.set=Be;var ve=Se;var De=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},He=be,Ee=Array.prototype.splice;var _e=be;var xe=be;var Ae=be;var ke=De,we=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return xe(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=ke,Te.prototype.delete=we,Te.prototype.get=ze,Te.prototype.has=Oe,Te.prototype.set=Ce;var je=Te,We=ae(F,"Map"),Ve=ve,Ie=je,Ne=We;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Pe;var Ge=Pe;var Xe=Pe;var Me=Pe;var Ue=function(){this.size=0,this.__data__={hash:new Ve,map:new(Ne||Ie),string:new Ve}},qe=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ge(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var n=Me(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ue,Ye.prototype.delete=qe,Ye.prototype.get=Je,Ye.prototype.has=Ke,Ye.prototype.set=Qe;var Ze=Ye;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(et.Cache||Ze),n}et.Cache=Ze;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,a){t.push(r?a.replace(rt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ot=u,lt=w,ct=y?y.prototype:void 0,gt=ct?ct.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(lt(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},st=dt;var ht=u,ut=j,ft=at,pt=function(e){return null==e?"":st(e)};var Ft=w;var yt=function(e,t){return ht(e)?e:ut(e,t)?[e]:ft(pt(e))},mt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[mt(t[n++])];return n&&n==r?e:void 0};var St=h((function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r}));const vt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=Dt(bt,n[$t.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},Et={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Dt(xt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},kt={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},zt=(e,t)=>n=>{var a;const i=kt[e].fontFamily(n),o=kt[e].fontWeight(n);return Object.values(_t).includes(i)?r`
                font-family: ${wt(t)||wt(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${null!==(a=Ot(t)||o)&&void 0!==a?a:"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Tt=(e,t,n=!1)=>a=>{const i=kt[e],o=i.fontSize(a);return r`
            ${zt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${Ct(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${Ct(n)}
        `;var Wt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${Tt("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${Tt("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${Tt("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${Tt("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${Tt("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${Tt("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${Tt("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${Tt("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${Tt("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${Tt("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${Tt("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${Tt("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${Tt("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${Tt("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const Vt=n.a`
    ${e=>r`
            ${Tt(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,It=n(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=n=>{var{external:r=!1,children:a}=n,i=d(n,["external","children"]);return e(Vt,Object.assign({},i,{children:[a,r&&t(It,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Pt=n.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;
    ${Tt("BodySmall","regular")}
    color: ${Et.Neutral[1]};

    ${e=>{let t,n;switch(e.$type){case"error":t=Et.Validation.Red.Background(e),n=Et.Validation.Red.Border(e);break;case"success":t=Et.Validation.Green.Background(e),n=Et.Validation.Green.Border(e);break;case"warning":default:t=Et.Validation.Orange.Background(e),n=Et.Validation.Orange.Border(e);break;case"info":t=Et.Validation.Blue.Background(e),n=Et.Validation.Blue.Border(e);break;case"description":t=Et.Neutral[7](e),n=Et.Neutral[4](e)}return r`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    p {
        margin: 0;
        ${e=>"small"===e.$sizeType?r`
                    ${Tt("H6","regular")}

                    strong {
                        ${Tt("H6","semibold")}
                    }

                    a {
                        ${Tt("H6","semibold")}
                    }
                `:r`
                    ${Tt("H5","regular")}

                    strong {
                        ${Tt("H5","semibold")}
                    }

                    a {
                        ${Tt("H5","semibold")}
                    }
                `}

        a {
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};
            }
        }
    }
`,Rt=n.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&r`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Et.Validation.Red.Icon(e);break;case"success":t=Et.Validation.Green.Icon(e);break;case"warning":default:t=Et.Validation.Orange.Icon(e);break;case"info":t=Et.Validation.Blue.Icon(e);break;case"description":t=Et.Neutral[4](e)}return r`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Gt=n(Wt.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?r`
                ${Tt("H6","semibold")}
                margin-top: 0.25rem;
            `:r`
                ${Tt("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    color: ${Et.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Et.Primary};
    }
`,Xt=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Mt=n=>{var{type:r,className:a,children:s,actionLink:h,actionLinkIcon:u,sizeType:f="default",showIcon:p=!1}=n,F=d(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return e(Pt,Object.assign({className:a,$type:r,$sizeType:f,"data-testid":F["data-testid"]},{children:[p&&t(Rt,Object.assign({$sizeType:f,$type:r},{children:(()=>{switch(r){case"success":return t(i,{});case"warning":return t(o,{});case"error":return t(l,{});case"info":case"description":return t(c,{});default:return null}})()})),e(Xt,{children:[s,h&&e(Gt,Object.assign({"data-testid":"action-link",$type:r,$sizeType:f},h,{children:[h.children,u||t(g,{})]}))]})]}))};export{Mt as Alert};
//# sourceMappingURL=index.js.map
