import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as a,useEffect as o}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,h="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=h||f||Function("return this")(),F=s.Symbol,p=F,B=Object.prototype,y=B.hasOwnProperty,m=B.toString,S=p?p.toStringTag:void 0;var v=function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var a=m.call(e);return r&&(t?e[S]=n:delete e[S]),a},D=Object.prototype.toString;var b=v,H=function(e){return D.call(e)},$=F?F.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?b(e):H(e)};var x=E,w=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==x(e)},C=u,_=A,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var O=function(e,t){if(C(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(z.test(e)||!k.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=E,W=T;var L,N=function(e){if(!W(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=s["__core-js_shared__"],P=(L=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var R=function(e){return!!P&&P in e},V=Function.prototype.toString;var G=N,X=R,M=T,U=function(e){if(null!=e){try{return V.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!M(e)||X(e))&&(G(e)?Z:q).test(U(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),ae=re;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},ge=re,ue=Object.prototype.hasOwnProperty;var he=re;var fe=oe,se=ie,Fe=de,pe=function(e){var t=this.__data__;return ge?void 0!==t[e]:ue.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=fe,ye.prototype.delete=se,ye.prototype.get=Fe,ye.prototype.has=pe,ye.prototype.set=Be;var me=ye;var Se=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},be=De,He=Array.prototype.splice;var $e=De;var Ee=De;var xe=De;var we=Se,Ae=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},Ce=function(e){var t=this.__data__,n=$e(t,e);return n<0?void 0:t[n][1]},_e=function(e){return Ee(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=we,ze.prototype.delete=Ae,ze.prototype.get=Ce,ze.prototype.has=_e,ze.prototype.set=ke;var Oe=ze,Te=ne(s,"Map"),je=me,We=Oe,Le=Te;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Ie;var Re=Ie;var Ve=Ie;var Ge=Ie;var Xe=function(){this.size=0,this.__data__={hash:new je,map:new(Le||We),string:new je}},Me=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Re(this,e).get(e)},qe=function(e){return Ve(this,e).has(e)},Je=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Xe,Ke.prototype.delete=Me,Ke.prototype.get=Ue,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var Ze=Ye;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,a){t.push(r?a.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},at=u,ot=A,it=F?F.prototype:void 0,lt=it?it.toString:void 0;var ct=function e(t){if("string"==typeof t)return t;if(at(t))return rt(t,e)+"";if(ot(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ct;var gt=u,ut=O,ht=nt,ft=function(e){return null==e?"":dt(e)};var st=A;var Ft=function(e,t){return gt(e)?e:ut(e,t)?[e]:ht(ft(e))},pt=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[pt(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=St(Dt,n[vt.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},Ht={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},$t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Et={collections:{base:{D1:{fontFamily:$t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=St(Et,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},wt={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},At=e=>{switch(e){case 700:case"bold":return $t.Bold;case 600:case"semibold":return $t.Semibold;case 300:case"light":return $t.Light;case 400:case"regular":return $t.Regular;default:return""}},Ct=(e,t)=>n=>{var r;const a=wt[e].fontFamily(n),o=wt[e].fontWeight(n);return Object.values($t).includes(a)?l`
                font-family: ${At(t)||At(o)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(r=_t(t)||o)&&void 0!==r?r:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zt=(e,t,n=!1)=>r=>{const a=wt[e],o=a.fontSize(r);return l`
            ${Ct(e,t)}
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
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const jt=i.a`
    ${e=>l`
            ${zt(e.textStyle,e.weight)}
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
`,Wt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:r=!1,children:a}=n,o=d(n,["external","children"]);return e(jt,Object.assign({},o,{children:[a,r&&t(Wt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const It=i(Tt.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return l`
                color: ${Ht.Neutral[4](e)};
            `}}
`,Pt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,g]=a("");o((()=>{g(u(`${e||""}`))}),[e,i]);const u=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(d)?d:t(It,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:d}))})},Rt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vt=e=>t=>{var n;const r=t.theme,a=St(Rt,r[vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?mt(a,e,r.options.designToken):mt(a,e)},Gt=Vt("InputBoxShadow"),Xt=Vt("InputErrorBoxShadow"),Mt=(Vt("ElevationBoxShadow"),Vt("Table.Header"),Vt("Table.Cell.Primary"),Vt("Table.Cell.Secondary"),Vt("Table.Cell.Selected"),Vt("Table.Cell.Hover"),Vt("Button.Danger.BackgroundColor"),Vt("Button.Danger.Hover"),Vt("Button.Danger.Primary"),Vt("Button.Danger.Border"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Ut=i.div`
    display: flex;
    flex-direction: column;
`,qt=i.textarea`
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Mt};

    ${zt("Body","regular")}
    color: ${Ht.Neutral[1]};
    background: ${Ht.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Gt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ht.Neutral[3]};
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
                background: ${Ht.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${Xt};
                }
            `:void 0}
`;r.forwardRef(((e,n)=>{var{value:r,disabled:a,error:o,rows:i=5}=e,l=d(e,["value","disabled","error","rows"]);return t(qt,Object.assign({ref:n,disabled:a,value:r,error:o,rows:i},l))}));const Jt=r.forwardRef(((n,r)=>{var{value:i,disabled:l,rows:c=5,onChange:g}=n,u=d(n,["value","disabled","rows","onChange"]);const[h,f]=a(i);o((()=>{f(i)}),[i]);return e(Ut,{children:[t(qt,Object.assign({ref:r,disabled:l,value:h,rows:c||5,onChange:e=>{const t=e.target.value;u.maxLength&&t.length>u.maxLength||(f(t),e.target.value=t,g&&g(e))}},u)),u.maxLength&&t(Pt,{disabled:l,value:h,maxLength:u.maxLength,renderCustomCounter:u.renderCustomCounter})]})}));export{Jt as Textarea};
//# sourceMappingURL=index.js.map
