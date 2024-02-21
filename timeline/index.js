import{createElement as e}from"react";import{jsxs as t,jsx as r,Fragment as n}from"react/jsx-runtime";import{ExclamationCircleFillIcon as a,TickIcon as i}from"@lifesg/react-icons";import o,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";const d={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:d.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:d.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:d.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:d.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:d.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:d.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:d.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:d.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:d.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:d.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:d.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:d.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),F=m.Symbol,y=F,B=Object.prototype,S=B.hasOwnProperty,b=B.toString,v=y?y.toStringTag:void 0;var $=function(e){var t=S.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var a=b.call(e);return n&&(t?e[v]=r:delete e[v]),a},D=Object.prototype.toString;var H=$,x=function(e){return D.call(e)},E=F?F.toStringTag:void 0;var k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?H(e):x(e)};var w=k,A=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==w(e)},O=h,z=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;var N=function(e,t){if(O(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!z(e))||(V.test(e)||!C.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=k,W=j;var L,I=function(e){if(!W(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=m["__core-js_shared__"],P=(L=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var G=function(e){return!!P&&P in e},X=Function.prototype.toString;var M=I,U=G,q=j,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,Z=Q.toString,ee=Y.hasOwnProperty,te=RegExp("^"+Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!q(e)||U(e))&&(M(e)?te:K).test(J(e))},ne=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ie=ae(Object,"create"),oe=ie;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ie,ge=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},se=ie,he=Object.prototype.hasOwnProperty;var fe=ie;var pe=le,me=ce,Fe=ue,ye=function(e){var t=this.__data__;return se?void 0!==t[e]:he.call(t,e)},Be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=pe,Se.prototype.delete=me,Se.prototype.get=Fe,Se.prototype.has=ye,Se.prototype.set=Be;var be=Se;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var r=e.length;r--;)if($e(e[r][0],t))return r;return-1},He=De,xe=Array.prototype.splice;var Ee=De;var ke=De;var we=De;var Ae=ve,_e=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},Oe=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},ze=function(e){return ke(this.__data__,e)>-1},Ce=function(e,t){var r=this.__data__,n=we(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ve(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ve.prototype.clear=Ae,Ve.prototype.delete=_e,Ve.prototype.get=Oe,Ve.prototype.has=ze,Ve.prototype.set=Ce;var Ne=Ve,je=ae(m,"Map"),Te=be,We=Ne,Le=je;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var r=e.__data__;return Ie(t)?r["string"==typeof t?"string":"hash"]:r.map},Pe=Re;var Ge=Re;var Xe=Re;var Me=Re;var Ue=function(){this.size=0,this.__data__={hash:new Te,map:new(Le||We),string:new Te}},qe=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ge(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Ue,Ye.prototype.delete=qe,Ye.prototype.get=Je,Ye.prototype.has=Ke,Ye.prototype.set=Qe;var Ze=Ye;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(et.Cache||Ze),r}et.Cache=Ze;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,a){t.push(n?a.replace(nt,"$1"):r||e)})),t}));var it=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ot=h,lt=_,ct=F?F.prototype:void 0,dt=ct?ct.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ut=gt;var st=h,ht=N,ft=at,pt=function(e){return null==e?"":ut(e)};var mt=_;var Ft=function(e,t){return st(e)?e:ht(e,t)?[e]:ft(pt(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var St=s((function(e,t,r){var n=null==e?void 0:Bt(e,t);return void 0===n?r:n}));const bt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Dt={collections:{base:g},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=vt(Dt,r[$t.textStyleScheme]);return r.options&&r.options.textStyle?bt(n,e,r.options.textStyle):bt(n,e)},xt={D1:{fontFamily:Ht("D1.fontFamily"),fontSize:Ht("D1.fontSize"),fontWeight:Ht("D1.fontWeight"),lineHeight:Ht("D1.lineHeight"),letterSpacing:Ht("D1.letterSpacing")},D2:{fontFamily:Ht("D2.fontFamily"),fontSize:Ht("D2.fontSize"),fontWeight:Ht("D2.fontWeight"),lineHeight:Ht("D2.lineHeight"),letterSpacing:Ht("D2.letterSpacing")},D3:{fontFamily:Ht("D3.fontFamily"),fontSize:Ht("D3.fontSize"),fontWeight:Ht("D3.fontWeight"),lineHeight:Ht("D3.lineHeight"),letterSpacing:Ht("D3.letterSpacing")},D4:{fontFamily:Ht("D4.fontFamily"),fontSize:Ht("D4.fontSize"),fontWeight:Ht("D4.fontWeight"),lineHeight:Ht("D4.lineHeight"),letterSpacing:Ht("D4.letterSpacing")},DBody:{fontFamily:Ht("DBody.fontFamily"),fontSize:Ht("DBody.fontSize"),fontWeight:Ht("DBody.fontWeight"),lineHeight:Ht("DBody.lineHeight"),letterSpacing:Ht("DBody.letterSpacing")},H1:{fontFamily:Ht("H1.fontFamily"),fontSize:Ht("H1.fontSize"),fontWeight:Ht("H1.fontWeight"),lineHeight:Ht("H1.lineHeight"),letterSpacing:Ht("H1.letterSpacing")},H2:{fontFamily:Ht("H2.fontFamily"),fontSize:Ht("H2.fontSize"),fontWeight:Ht("H2.fontWeight"),lineHeight:Ht("H2.lineHeight"),letterSpacing:Ht("H2.letterSpacing")},H3:{fontFamily:Ht("H3.fontFamily"),fontSize:Ht("H3.fontSize"),fontWeight:Ht("H3.fontWeight"),lineHeight:Ht("H3.lineHeight"),letterSpacing:Ht("H3.letterSpacing")},H4:{fontFamily:Ht("H4.fontFamily"),fontSize:Ht("H4.fontSize"),fontWeight:Ht("H4.fontWeight"),lineHeight:Ht("H4.lineHeight"),letterSpacing:Ht("H4.letterSpacing")},H5:{fontFamily:Ht("H5.fontFamily"),fontSize:Ht("H5.fontSize"),fontWeight:Ht("H5.fontWeight"),lineHeight:Ht("H5.lineHeight"),letterSpacing:Ht("H5.letterSpacing")},H6:{fontFamily:Ht("H6.fontFamily"),fontSize:Ht("H6.fontSize"),fontWeight:Ht("H6.fontWeight"),lineHeight:Ht("H6.lineHeight"),letterSpacing:Ht("H6.letterSpacing")},Body:{fontFamily:Ht("Body.fontFamily"),fontSize:Ht("Body.fontSize"),fontWeight:Ht("Body.fontWeight"),lineHeight:Ht("Body.lineHeight"),letterSpacing:Ht("Body.letterSpacing")},BodySmall:{fontFamily:Ht("BodySmall.fontFamily"),fontSize:Ht("BodySmall.fontSize"),fontWeight:Ht("BodySmall.fontWeight"),lineHeight:Ht("BodySmall.lineHeight"),letterSpacing:Ht("BodySmall.letterSpacing")},XSmall:{fontFamily:Ht("XSmall.fontFamily"),fontSize:Ht("XSmall.fontSize"),fontWeight:Ht("XSmall.fontWeight"),lineHeight:Ht("XSmall.lineHeight"),letterSpacing:Ht("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return d.Bold;case 600:case"semibold":return d.Semibold;case 300:case"light":return d.Light;case 400:case"regular":return d.Regular;default:return""}},kt=(e,t)=>r=>{var n;const a=xt[e].fontFamily(r),i=xt[e].fontWeight(r);return Object.values(d).includes(a)?l`
                font-family: ${Et(t)||Et(i)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(n=wt(t)||i)&&void 0!==n?n:"normal"};
        `},wt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},At=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,r=!1)=>n=>{const a=xt[e],i=a.fontSize(n);return l`
            ${kt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${l`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,r=void 0)=>t?l`
            display: block;
            ${At(r)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${At(r)}
        `;function zt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;const Ct={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,n=vt(Ct,r[$t.colorScheme]);return r.options&&r.options.color?bt(n,e,r.options.color):bt(n,e)},Nt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}};var jt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${Nt.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Tt=o.a`
    ${e=>l`
            ${_t(e.textStyle,e.weight)}
            color: ${Nt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Nt.Secondary};

                svg {
                    color: ${Nt.Secondary};
                }
            }
        `}
`,Wt=o(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=e=>{var{external:n=!1,children:a}=e,i=zt(e,["external","children"]);return t(Tt,Object.assign({},i,{children:[a,n&&r(Wt,{})]}))};var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Rt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pt=e=>Object.keys(Rt).reduce(((t,r)=>{const n=Rt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Gt=Pt("max-width"),Xt=(Pt("min-width"),o.div`
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

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Nt.Neutral[8],e.$color){case"grey":t=Nt.Neutral[3],r=Nt.Neutral[3];break;case"green":t=Nt.Validation.Green.Text,r=Nt.Validation.Green.Text;break;case"yellow":t=Nt.Validation.Orange.Text,r=Nt.Validation.Orange.Text;break;case"red":t=Nt.Validation.Red.Text,r=Nt.Validation.Red.Text;break;case"blue":t=Nt.Validation.Blue.Text,r=Nt.Validation.Blue.Text;break;default:t=Nt.Neutral[1],r=Nt.Neutral[1]}else switch(e.$color){case"grey":t=Nt.Neutral[6],r=Nt.Neutral[4],n=Nt.Neutral[3];break;case"green":t=Nt.Validation.Green.Background,r=Nt.Validation.Green.Border,n=Nt.Validation.Green.Text;break;case"yellow":t=Nt.Validation.Orange.Background,r=Nt.Validation.Orange.Border,n=Nt.Validation.Orange.Text;break;case"red":t=Nt.Validation.Red.Background,r=Nt.Validation.Red.Border,n=Nt.Validation.Red.Text;break;case"blue":t=Nt.Validation.Blue.Background,r=Nt.Validation.Blue.Border,n=Nt.Validation.Blue.Text;break;default:t=Nt.Neutral[8],r=Nt.Neutral[5],n=Nt.Neutral[1]}return l`
            background: ${t};
            border: 1px solid ${r};
            color: ${n};
        `}}
`),Mt=o.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Ut=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return l`
                    background-color: ${Nt.Accent.Light[1]};
                `;case"upcoming-active":return l`
                    border: 4px solid ${Nt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    border: 4px solid ${Nt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Nt.Validation.Green.Icon};
                    svg {
                        color: ${Nt.Neutral[8]};
                    }
                `;case"error":return l`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0.3rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Nt.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,qt=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return l`
                    background-color: ${Nt.Accent.Light[1]};
                `;case"upcoming-inactive":return l`
                    background-color: ${Nt.Neutral[4]};
                `;case"completed":return l`
                    background-color: ${Nt.Validation.Green.Icon};
                `;case"error":return l`
                    margin-left: -0.15rem;
                    background-color: ${Nt.Validation.Red.Icon};
                `}}}
`,Jt=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Kt=o.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Gt.tablet} {
        grid-column: span 8;
    }

    ${Gt.mobileL} {
        grid-column: span 4;
    }
`,Qt=o(jt.H3)`
    margin-bottom: 1rem;

    ${Gt.tablet} {
        margin-bottom: 1.5rem;
    }
`,Yt=o.div`
    display: flex;

    :first-of-type ${Ut} {
        margin-top: 0;
    }
`,Zt=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,er=o(jt.H4)`
    margin-bottom: 0.5rem;
`,tr=o(jt.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,rr=o((e=>{var{type:n,colorType:a="black",children:i,icon:o}=e,l=zt(e,["type","colorType","children","icon"]);return t(Xt,Object.assign({$type:n,$color:a},l,{children:[o,r(Mt,{children:i})]}))}))`
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;
`,nr=({items:o,className:l,title:c,startCol:d,colSpan:g,"data-base-indicator-testid":u,"data-testid":s="timeline"})=>{const h=e=>"string"==typeof e?r(jt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):r(n,{children:e}),f=e=>"string"==typeof e?r(er,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):r(n,{children:e}),p=t=>t.slice(0,2).map(((t,r)=>{let n;switch(t.type){case"dark":n="solid";break;case"light":n="outline";break;default:n=t.type}return e(rr,Object.assign({},t,{type:n,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),t.children?t.children:t.label)})),m=e=>{switch(e){case"completed":return r(i,{});case"error":return r(a,{});default:return null}};return t(Kt,Object.assign({className:l,"data-testid":s,$startCol:d,$colSpan:g},{children:[r(Qt,Object.assign({id:"timeline-title"},{children:c})),o.map(((e,n)=>{const{title:a,content:i,statuses:o,variant:l}=e,c=u?`circleindicator${n+1}_div_${u}`:"circleindicator",d=l||(0===n?"current":"upcoming-active");return t(Yt,{children:[t(Jt,{children:[r(Ut,Object.assign({"data-testid":c,$variant:d},{children:m(d)})),r(qt,{$variant:d})]}),t(Zt,Object.assign({className:"timeline-item-content"},{children:[f(a),o&&r(tr,{children:p(o)}),h(i)]}))]},`timeline-item-${n}`)}))]}))};export{nr as Timeline};
//# sourceMappingURL=index.js.map
