import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}const s={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:s.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:s.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:s.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:s.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:s.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:s.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:s.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:s.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:s.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,f="object"==typeof h&&h&&h.Object===Object&&h,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),F=m.Symbol,y=F,b=Object.prototype,S=b.hasOwnProperty,B=b.toString,$=y?y.toStringTag:void 0;var v=function(e){var t=S.call(e,$),r=e[$];try{e[$]=void 0;var n=!0}catch(e){}var i=B.call(e);return n&&(t?e[$]=r:delete e[$]),i},D=Object.prototype.toString;var H=v,x=function(e){return D.call(e)},E=F?F.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?H(e):x(e)};var A=w,z=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==A(e)},k=u,O=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var T=function(e,t){if(k(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!O(e))||(j.test(e)||!C.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=w,L=W;var P,R=function(e){if(!L(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=m["__core-js_shared__"],V=(P=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(e){return!!V&&V in e},G=Function.prototype.toString;var M=R,U=X,Z=W,Y=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,ee=K.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Z(e)||U(e))&&(M(e)?te:q).test(Y(e))},ne=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var r=ne(e,t);return re(r)?r:void 0},ae=ie(Object,"create"),oe=ae;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=ae,se=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return se.call(t,e)?t[e]:void 0},he=ae,ue=Object.prototype.hasOwnProperty;var fe=ae;var pe=le,me=ce,Fe=ge,ye=function(e){var t=this.__data__;return he?void 0!==t[e]:ue.call(t,e)},be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=pe,Se.prototype.delete=me,Se.prototype.get=Fe,Se.prototype.has=ye,Se.prototype.set=be;var Be=Se;var $e=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var r=e.length;r--;)if(ve(e[r][0],t))return r;return-1},He=De,xe=Array.prototype.splice;var Ee=De;var we=De;var Ae=De;var ze=$e,_e=function(e){var t=this.__data__,r=He(t,e);return!(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},ke=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},Oe=function(e){return we(this.__data__,e)>-1},Ce=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}je.prototype.clear=ze,je.prototype.delete=_e,je.prototype.get=ke,je.prototype.has=Oe,je.prototype.set=Ce;var Te=je,We=ie(m,"Map"),Ne=Be,Le=Te,Pe=We;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var r=e.__data__;return Re(t)?r["string"==typeof t?"string":"hash"]:r.map},Ve=Ie;var Xe=Ie;var Ge=Ie;var Me=Ie;var Ue=function(){this.size=0,this.__data__={hash:new Ne,map:new(Pe||Le),string:new Ne}},Ze=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ye=function(e){return Xe(this,e).get(e)},qe=function(e){return Ge(this,e).has(e)},Je=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Ze,Ke.prototype.get=Ye,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(et.Cache||Qe),r}et.Cache=Qe;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,it=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,i){t.push(n?i.replace(nt,"$1"):r||e)})),t}));var at=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ot=u,lt=_,ct=F?F.prototype:void 0,dt=ct?ct.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(ot(t))return at(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},gt=st;var ht=u,ut=T,ft=it,pt=function(e){return null==e?"":gt(e)};var mt=_;var Ft=function(e,t){return ht(e)?e:ut(e,t)?[e]:ft(pt(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var St=function(e,t,r){var n=null==e?void 0:bt(e,t);return void 0===n?r:n};const Bt=(e,t,r)=>t?St(r,t)||St(e,t):r||e,$t=(e,t)=>{const r=t||e.defaultValue;return St(e.collections,r)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Dt={collections:{base:g},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=$t(Dt,r[vt.textStyleScheme]);return r.options&&r.options.textStyle?Bt(n,e,r.options.textStyle):Bt(n,e)},xt={D1:{fontFamily:Ht("D1.fontFamily"),fontSize:Ht("D1.fontSize"),fontWeight:Ht("D1.fontWeight"),lineHeight:Ht("D1.lineHeight"),letterSpacing:Ht("D1.letterSpacing")},D2:{fontFamily:Ht("D2.fontFamily"),fontSize:Ht("D2.fontSize"),fontWeight:Ht("D2.fontWeight"),lineHeight:Ht("D2.lineHeight"),letterSpacing:Ht("D2.letterSpacing")},D3:{fontFamily:Ht("D3.fontFamily"),fontSize:Ht("D3.fontSize"),fontWeight:Ht("D3.fontWeight"),lineHeight:Ht("D3.lineHeight"),letterSpacing:Ht("D3.letterSpacing")},D4:{fontFamily:Ht("D4.fontFamily"),fontSize:Ht("D4.fontSize"),fontWeight:Ht("D4.fontWeight"),lineHeight:Ht("D4.lineHeight"),letterSpacing:Ht("D4.letterSpacing")},DBody:{fontFamily:Ht("DBody.fontFamily"),fontSize:Ht("DBody.fontSize"),fontWeight:Ht("DBody.fontWeight"),lineHeight:Ht("DBody.lineHeight"),letterSpacing:Ht("DBody.letterSpacing")},H1:{fontFamily:Ht("H1.fontFamily"),fontSize:Ht("H1.fontSize"),fontWeight:Ht("H1.fontWeight"),lineHeight:Ht("H1.lineHeight"),letterSpacing:Ht("H1.letterSpacing")},H2:{fontFamily:Ht("H2.fontFamily"),fontSize:Ht("H2.fontSize"),fontWeight:Ht("H2.fontWeight"),lineHeight:Ht("H2.lineHeight"),letterSpacing:Ht("H2.letterSpacing")},H3:{fontFamily:Ht("H3.fontFamily"),fontSize:Ht("H3.fontSize"),fontWeight:Ht("H3.fontWeight"),lineHeight:Ht("H3.lineHeight"),letterSpacing:Ht("H3.letterSpacing")},H4:{fontFamily:Ht("H4.fontFamily"),fontSize:Ht("H4.fontSize"),fontWeight:Ht("H4.fontWeight"),lineHeight:Ht("H4.lineHeight"),letterSpacing:Ht("H4.letterSpacing")},H5:{fontFamily:Ht("H5.fontFamily"),fontSize:Ht("H5.fontSize"),fontWeight:Ht("H5.fontWeight"),lineHeight:Ht("H5.lineHeight"),letterSpacing:Ht("H5.letterSpacing")},H6:{fontFamily:Ht("H6.fontFamily"),fontSize:Ht("H6.fontSize"),fontWeight:Ht("H6.fontWeight"),lineHeight:Ht("H6.lineHeight"),letterSpacing:Ht("H6.letterSpacing")},Body:{fontFamily:Ht("Body.fontFamily"),fontSize:Ht("Body.fontSize"),fontWeight:Ht("Body.fontWeight"),lineHeight:Ht("Body.lineHeight"),letterSpacing:Ht("Body.letterSpacing")},BodySmall:{fontFamily:Ht("BodySmall.fontFamily"),fontSize:Ht("BodySmall.fontSize"),fontWeight:Ht("BodySmall.fontWeight"),lineHeight:Ht("BodySmall.lineHeight"),letterSpacing:Ht("BodySmall.letterSpacing")},XSmall:{fontFamily:Ht("XSmall.fontFamily"),fontSize:Ht("XSmall.fontSize"),fontWeight:Ht("XSmall.fontWeight"),lineHeight:Ht("XSmall.lineHeight"),letterSpacing:Ht("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return s.Bold;case 600:case"semibold":return s.Semibold;case 300:case"light":return s.Light;case 400:case"regular":return s.Regular;default:return""}},wt=(e,t)=>r=>{var i;const a=xt[e].fontFamily(r),o=xt[e].fontWeight(r);return Object.values(s).includes(a)?n`
                font-family: ${Et(t)||Et(o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=At(t)||o)&&void 0!==i?i:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t=(e,t,r=!1)=>i=>{const a=xt[e],o=a.fontSize(i);return n`
            ${wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${zt(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${zt(r)}
        `,Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ct=e=>t=>{const r=t.theme,n=$t(Ot,r[vt.colorScheme]);return r.options&&r.options.color?Bt(n,e,r.options.color):Bt(n,e)},jt={Brand:{1:Ct("Brand.1"),2:Ct("Brand.2"),3:Ct("Brand.3"),4:Ct("Brand.4"),5:Ct("Brand.5"),6:Ct("Brand.6")},Primary:Ct("Primary"),PrimaryDark:Ct("PrimaryDark"),Secondary:Ct("Secondary"),Accent:{Light:{1:Ct("Accent.Light.1"),2:Ct("Accent.Light.2"),3:Ct("Accent.Light.3"),4:Ct("Accent.Light.4"),5:Ct("Accent.Light.5"),6:Ct("Accent.Light.6")},Dark:{1:Ct("Accent.Dark.1"),2:Ct("Accent.Dark.2"),3:Ct("Accent.Dark.3")}},Neutral:{1:Ct("Neutral.1"),2:Ct("Neutral.2"),3:Ct("Neutral.3"),4:Ct("Neutral.4"),5:Ct("Neutral.5"),6:Ct("Neutral.6"),7:Ct("Neutral.7"),8:Ct("Neutral.8")},Validation:{Green:{Text:Ct("Validation.Green.Text"),Icon:Ct("Validation.Green.Icon"),Border:Ct("Validation.Green.Border"),Background:Ct("Validation.Green.Background")},Orange:{Text:Ct("Validation.Orange.Text"),Icon:Ct("Validation.Orange.Icon"),Border:Ct("Validation.Orange.Border"),Background:Ct("Validation.Orange.Background"),Badge:Ct("Validation.Orange.Badge")},Red:{Text:Ct("Validation.Red.Text"),Icon:Ct("Validation.Red.Icon"),Border:Ct("Validation.Red.Border"),Background:Ct("Validation.Red.Background")},Blue:{Text:Ct("Validation.Blue.Text"),Icon:Ct("Validation.Blue.Icon"),Border:Ct("Validation.Blue.Border"),Background:Ct("Validation.Blue.Background")}},Shadow:{Accent:Ct("Shadow.Accent"),Red:Ct("Shadow.Red"),Elevation:Ct("Shadow.Elevation")}};var Tt;!function(e){e.D1=r.h1`
        ${e=>n`
                ${_t("D1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${_t("D2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${_t("D3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${_t("D4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${_t("DBody",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${_t("H1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${_t("H2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${_t("H3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${_t("H4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${_t("H5",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${_t("H6",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${_t("Body",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${_t("BodySmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${_t("XSmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const Wt=r.a`
    ${e=>n`
            ${_t(e.textStyle,e.weight)}
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
`,Nt=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=r=>{var{external:n=!1,children:i}=r,a=d(r,["external","children"]);return e(Wt,Object.assign({},a,{children:[i,n&&t(Nt,{})]}))};var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Rt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",It="Submit",Vt="Rate your experience",Xt=5,Gt=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Mt=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${jt.Primary};
    ${Gt}:focus-visible + & {
        outline: 0.125rem solid ${jt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Ut=r(o)`
    ${Mt}
`,Zt=r(l)`
    ${Mt}
`,Yt=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,qt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Jt=r=>{const{description:n,rating:i,onRatingChange:a}=r,o=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=i?Zt:Ut,{"aria-label":r})};return t(qt,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Xt)].map(((r,n)=>{const l=n+1;return e(Yt,{children:[t(Gt,{type:"radio",name:"star",checked:l===i,onChange:()=>(e=>{a(e)})(l)}),o(l)]},l)}))}))},Kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Qt=e=>Object.keys(Kt).reduce(((t,r)=>{const n=Kt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),er=Qt("max-width"),tr=(Qt("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),rr=i`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nr=r.div`
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
    animation: ${rr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ir=r(nr)`
    animation-delay: -0.45s;
`,ar=r(nr)`
    animation-delay: -0.3s;
`,or=r(nr)`
    animation-delay: -0.15s;
`,lr=r.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Primary(e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"light":return n`
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Neutral[5](e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"disabled":return n`
                    background-color: ${jt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${jt.Neutral[3](e)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${jt.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${jt.Primary(e)};
                    border: 1px solid transparent;

                    ${er.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${jt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${_t("H5","semibold")}
                    }

                    ${er.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${_t("H4","semibold")}
                    }

                    ${er.mobileS} {
                        height: auto;
                    }
                `}
`,cr=r((({color:r,className:n,size:i=18})=>e(tr,Object.assign({className:n,$size:i,$color:r},{children:[t(nr,{id:"inner1",$size:i-2,$borderWidth:2}),t(ir,{id:"inner2",$size:i-2,$borderWidth:2}),t(ar,{id:"inner3",$size:i-2,$borderWidth:2}),t(or,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=jt.Primary(e);break;case"disabled":t=jt.Neutral[3](e);break;default:t=jt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,dr={Default:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=d(r,["children","disabled","loading","styleType"]),s={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default"};return e(lr,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},s,c,{children:[o&&t(cr,Object.assign({},s)),t("span",{children:i})]}))})),Small:c.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default"}=r,c=d(r,["children","disabled","loading","styleType"]),s={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small"};return e(lr,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},s,c,{children:[o&&t(cr,Object.assign({},s,{size:16})),t("span",{children:i})]}))}))},sr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,gr=r.div`
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
`,hr=r.div`
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
`,ur=r(dr.Default)`
    margin-top: 1rem;
    width: 100%;
`,fr=r=>{const{imgSrc:n,buttonLabel:i,description:a,rating:o,onRatingChange:l,onSubmit:c}=r,s=d(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),g=null!=n?n:Rt,h=null!=a?a:Vt;return e(gr,Object.assign({},s,{children:[g&&t(sr,{src:g,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(hr,{children:[t(Tt.H3,Object.assign({weight:"semibold"},{children:h})),t(Jt,{description:h,rating:o,onRatingChange:l}),t(ur,Object.assign({disabled:!o,onClick:c,type:"button"},{children:null!=i?i:It}))]})]}))};export{fr as FeedbackRating};
//# sourceMappingURL=index.js.map
