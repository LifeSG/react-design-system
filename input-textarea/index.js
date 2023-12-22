import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as a,useEffect as o}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),F=s.Symbol,p=F,y=Object.prototype,B=y.hasOwnProperty,S=y.toString,m=p?p.toStringTag:void 0;var v=function(e){var t=B.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(e){}var a=S.call(e);return r&&(t?e[m]=n:delete e[m]),a},b=Object.prototype.toString;var D=v,$=function(e){return b.call(e)},H=F?F.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?D(e):$(e)};var E=x,w=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==E(e)},_=h,C=A,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var O=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(z.test(e)||!k.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=x,W=T;var L,N=function(e){if(!W(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=s["__core-js_shared__"],R=(L=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var V=function(e){return!!R&&R in e},P=Function.prototype.toString;var G=N,X=V,M=T,U=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!M(e)||X(e))&&(G(e)?Z:q).test(U(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),ae=re;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},ge=re,he=Object.prototype.hasOwnProperty;var ue=re;var fe=oe,se=ie,Fe=de,pe=function(e){var t=this.__data__;return ge?void 0!==t[e]:he.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=fe,Be.prototype.delete=se,Be.prototype.get=Fe,Be.prototype.has=pe,Be.prototype.set=ye;var Se=Be;var me=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},De=be,$e=Array.prototype.splice;var He=be;var xe=be;var Ee=be;var we=me,Ae=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return xe(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=Ee(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=we,ze.prototype.delete=Ae,ze.prototype.get=_e,ze.prototype.has=Ce,ze.prototype.set=ke;var Oe=ze,Te=ne(s,"Map"),je=Se,We=Oe,Le=Te;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Ie;var Ve=Ie;var Pe=Ie;var Ge=Ie;var Xe=function(){this.size=0,this.__data__={hash:new je,map:new(Le||We),string:new je}},Me=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Ve(this,e).get(e)},qe=function(e){return Pe(this,e).has(e)},Je=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Xe,Ke.prototype.delete=Me,Ke.prototype.get=Ue,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var Ze=Ye;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,a){t.push(r?a.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},at=h,ot=A,it=F?F.prototype:void 0,lt=it?it.toString:void 0;var ct=function e(t){if("string"==typeof t)return t;if(at(t))return rt(t,e)+"";if(ot(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ct;var gt=h,ht=O,ut=nt,ft=function(e){return null==e?"":dt(e)};var st=A;var Ft=function(e,t){return gt(e)?e:ht(e,t)?[e]:ut(ft(e))},pt=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[pt(t[n++])];return n&&n==r?e:void 0};var Bt=function(e,t,n){var r=null==e?void 0:yt(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,mt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=mt(bt,n[vt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},$t={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},Ht={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Et=e=>t=>{const n=t.theme,r=mt(xt,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},wt={D1:{fontFamily:Et("D1.fontFamily"),fontSize:Et("D1.fontSize"),fontWeight:Et("D1.fontWeight"),lineHeight:Et("D1.lineHeight"),letterSpacing:Et("D1.letterSpacing")},D2:{fontFamily:Et("D2.fontFamily"),fontSize:Et("D2.fontSize"),fontWeight:Et("D2.fontWeight"),lineHeight:Et("D2.lineHeight"),letterSpacing:Et("D2.letterSpacing")},D3:{fontFamily:Et("D3.fontFamily"),fontSize:Et("D3.fontSize"),fontWeight:Et("D3.fontWeight"),lineHeight:Et("D3.lineHeight"),letterSpacing:Et("D3.letterSpacing")},D4:{fontFamily:Et("D4.fontFamily"),fontSize:Et("D4.fontSize"),fontWeight:Et("D4.fontWeight"),lineHeight:Et("D4.lineHeight"),letterSpacing:Et("D4.letterSpacing")},DBody:{fontFamily:Et("DBody.fontFamily"),fontSize:Et("DBody.fontSize"),fontWeight:Et("DBody.fontWeight"),lineHeight:Et("DBody.lineHeight"),letterSpacing:Et("DBody.letterSpacing")},H1:{fontFamily:Et("H1.fontFamily"),fontSize:Et("H1.fontSize"),fontWeight:Et("H1.fontWeight"),lineHeight:Et("H1.lineHeight"),letterSpacing:Et("H1.letterSpacing")},H2:{fontFamily:Et("H2.fontFamily"),fontSize:Et("H2.fontSize"),fontWeight:Et("H2.fontWeight"),lineHeight:Et("H2.lineHeight"),letterSpacing:Et("H2.letterSpacing")},H3:{fontFamily:Et("H3.fontFamily"),fontSize:Et("H3.fontSize"),fontWeight:Et("H3.fontWeight"),lineHeight:Et("H3.lineHeight"),letterSpacing:Et("H3.letterSpacing")},H4:{fontFamily:Et("H4.fontFamily"),fontSize:Et("H4.fontSize"),fontWeight:Et("H4.fontWeight"),lineHeight:Et("H4.lineHeight"),letterSpacing:Et("H4.letterSpacing")},H5:{fontFamily:Et("H5.fontFamily"),fontSize:Et("H5.fontSize"),fontWeight:Et("H5.fontWeight"),lineHeight:Et("H5.lineHeight"),letterSpacing:Et("H5.letterSpacing")},H6:{fontFamily:Et("H6.fontFamily"),fontSize:Et("H6.fontSize"),fontWeight:Et("H6.fontWeight"),lineHeight:Et("H6.lineHeight"),letterSpacing:Et("H6.letterSpacing")},Body:{fontFamily:Et("Body.fontFamily"),fontSize:Et("Body.fontSize"),fontWeight:Et("Body.fontWeight"),lineHeight:Et("Body.lineHeight"),letterSpacing:Et("Body.letterSpacing")},BodySmall:{fontFamily:Et("BodySmall.fontFamily"),fontSize:Et("BodySmall.fontSize"),fontWeight:Et("BodySmall.fontWeight"),lineHeight:Et("BodySmall.lineHeight"),letterSpacing:Et("BodySmall.letterSpacing")},XSmall:{fontFamily:Et("XSmall.fontFamily"),fontSize:Et("XSmall.fontSize"),fontWeight:Et("XSmall.fontWeight"),lineHeight:Et("XSmall.lineHeight"),letterSpacing:Et("XSmall.letterSpacing")}},At=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},_t=(e,t)=>n=>{var r;const a=wt[e].fontFamily(n),o=wt[e].fontWeight(n);return Object.values(Ht).includes(a)?l`
                font-family: ${At(t)||At(o)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(r=Ct(t)||o)&&void 0!==r?r:"normal"};
        `},Ct=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zt=(e,t,n=!1)=>r=>{const a=wt[e],o=a.fontSize(r);return l`
            ${_t(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${kt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${kt(n)}
        `;var Tt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const jt=i.a`
    ${e=>l`
            ${zt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Wt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:r=!1,children:a}=n,o=d(n,["external","children"]);return e(jt,Object.assign({},o,{children:[a,r&&t(Wt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const It=i(Tt.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return l`
                color: ${$t.Neutral[4](e)};
            `}}
`,Rt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,g]=a("");o((()=>{g(h(`${e||""}`))}),[e,i]);const h=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(d)?d:t(It,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:d}))})},Vt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Pt=e=>t=>{var n;const r=t.theme,a=mt(Vt,r[vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?St(a,e,r.options.designToken):St(a,e)},Gt=Pt("InputBoxShadow"),Xt=Pt("InputErrorBoxShadow"),Mt=(Pt("ElevationBoxShadow"),Pt("Table.Header"),Pt("Table.Cell.Primary"),Pt("Table.Cell.Secondary"),Pt("Table.Cell.Selected"),Pt("Table.Cell.Hover"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Ut=i.div`
    display: flex;
    flex-direction: column;
`,qt=i.textarea`
    border: 1px solid ${$t.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Mt};

    ${zt("Body","regular")}
    color: ${$t.Neutral[1]};
    background: ${$t.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${$t.Accent.Light[1]};
        box-shadow: ${Gt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${$t.Neutral[3]};
    }

    ${e=>e.readOnly?l`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?l`
                background: ${$t.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${$t.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${$t.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${$t.Validation.Red.Border(e)};
                    box-shadow: ${Xt};
                }
            `:void 0}
`;r.forwardRef(((e,n)=>{var{value:r,disabled:a,error:o,rows:i=5}=e,l=d(e,["value","disabled","error","rows"]);return t(qt,Object.assign({ref:n,disabled:a,value:r,error:o,rows:i},l))}));const Jt=r.forwardRef(((n,r)=>{var{value:i,disabled:l,rows:c=5,onChange:g}=n,h=d(n,["value","disabled","rows","onChange"]);const[u,f]=a(i);o((()=>{f(i)}),[i]);return e(Ut,{children:[t(qt,Object.assign({ref:r,disabled:l,value:u,rows:c||5,onChange:e=>{const t=e.target.value;h.maxLength&&t.length>h.maxLength||(f(t),e.target.value=t,g&&g(e))}},h)),h.maxLength&&t(Rt,{disabled:l,value:u,maxLength:h.maxLength,renderCustomCounter:h.renderCustomCounter})]})}));export{Jt as Textarea};
//# sourceMappingURL=index.js.map
