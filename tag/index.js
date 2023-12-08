import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,g=c||d||Function("return this")(),u=g.Symbol,h=u,f=Object.prototype,p=f.hasOwnProperty,s=f.toString,F=h?h.toStringTag:void 0;var y=function(e){var t=p.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[F]=n:delete e[F]),a},B=Object.prototype.toString;var m=y,S=function(e){return B.call(e)},v=u?u.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?m(e):S(e)};var b=D,$=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==b(e)},x=l,E=H,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var _=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!E(e))||(A.test(e)||!k.test(e)||null!=t&&e in Object(t))};var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},z=D,O=w;var C,T=function(e){if(!O(e))return!1;var t=z(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=g["__core-js_shared__"],N=(C=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var W=function(e){return!!N&&N in e},j=Function.prototype.toString;var L=T,I=W,R=w,P=function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!R(e)||I(e))&&(L(e)?J:G).test(P(e))},Q=function(e,t){return null==e?void 0:e[t]};var Y=function(e,t){var n=Q(e,t);return K(n)?n:void 0},Z=Y(Object,"create"),ee=Z;var te=function(){this.__data__=ee?ee(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},re=Z,ae=Object.prototype.hasOwnProperty;var ie=function(e){var t=this.__data__;if(re){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ae.call(t,e)?t[e]:void 0},oe=Z,le=Object.prototype.hasOwnProperty;var ce=Z;var de=te,ge=ne,ue=ie,he=function(e){var t=this.__data__;return oe?void 0!==t[e]:le.call(t,e)},fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ce&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=de,pe.prototype.delete=ge,pe.prototype.get=ue,pe.prototype.has=he,pe.prototype.set=fe;var se=pe;var Fe=function(){this.__data__=[],this.size=0};var ye=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},me=Be,Se=Array.prototype.splice;var ve=Be;var De=Be;var be=Be;var $e=Fe,He=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():Se.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},Ee=function(e){return De(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ae.prototype.clear=$e,Ae.prototype.delete=He,Ae.prototype.get=xe,Ae.prototype.has=Ee,Ae.prototype.set=ke;var _e=Ae,we=Y(g,"Map"),ze=se,Oe=_e,Ce=we;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Ne=Ve;var We=Ve;var je=Ve;var Le=Ve;var Ie=function(){this.size=0,this.__data__={hash:new ze,map:new(Ce||Oe),string:new ze}},Re=function(e){var t=Ne(this,e).delete(e);return this.size-=t?1:0,t},Pe=function(e){return We(this,e).get(e)},Ge=function(e){return je(this,e).has(e)},Xe=function(e,t){var n=Le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Me.prototype.clear=Ie,Me.prototype.delete=Re,Me.prototype.get=Pe,Me.prototype.has=Ge,Me.prototype.set=Xe;var Ue=Me;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,Ye=function(e){var t=Je(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,n,r,a){t.push(r?a.replace(Qe,"$1"):n||e)})),t}));var Ze=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},et=l,tt=H,nt=u?u.prototype:void 0,rt=nt?nt.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(et(t))return Ze(t,e)+"";if(tt(t))return rt?rt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},it=at;var ot=l,lt=_,ct=Ye,dt=function(e){return null==e?"":it(e)};var gt=H;var ut=function(e,t){return ot(e)?e:lt(e,t)?[e]:ct(dt(e))},ht=function(e){if("string"==typeof e||gt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[ht(t[n++])];return n&&n==r?e:void 0};var pt=function(e,t,n){var r=null==e?void 0:ft(e,t);return void 0===r?n:r};const st=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yt||(yt={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mt=e=>t=>{const n=t.theme,r=Ft(Bt,n[yt.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},St={Brand:{1:mt("Brand.1"),2:mt("Brand.2"),3:mt("Brand.3"),4:mt("Brand.4"),5:mt("Brand.5"),6:mt("Brand.6")},Primary:mt("Primary"),PrimaryDark:mt("PrimaryDark"),Secondary:mt("Secondary"),Accent:{Light:{1:mt("Accent.Light.1"),2:mt("Accent.Light.2"),3:mt("Accent.Light.3"),4:mt("Accent.Light.4"),5:mt("Accent.Light.5"),6:mt("Accent.Light.6")},Dark:{1:mt("Accent.Dark.1"),2:mt("Accent.Dark.2"),3:mt("Accent.Dark.3")}},Neutral:{1:mt("Neutral.1"),2:mt("Neutral.2"),3:mt("Neutral.3"),4:mt("Neutral.4"),5:mt("Neutral.5"),6:mt("Neutral.6"),7:mt("Neutral.7"),8:mt("Neutral.8")},Validation:{Green:{Text:mt("Validation.Green.Text"),Icon:mt("Validation.Green.Icon"),Border:mt("Validation.Green.Border"),Background:mt("Validation.Green.Background")},Orange:{Text:mt("Validation.Orange.Text"),Icon:mt("Validation.Orange.Icon"),Border:mt("Validation.Orange.Border"),Background:mt("Validation.Orange.Background"),Badge:mt("Validation.Orange.Badge")},Red:{Text:mt("Validation.Red.Text"),Icon:mt("Validation.Red.Icon"),Border:mt("Validation.Red.Border"),Background:mt("Validation.Red.Background")},Blue:{Text:mt("Validation.Blue.Text"),Icon:mt("Validation.Blue.Icon"),Border:mt("Validation.Blue.Border"),Background:mt("Validation.Blue.Background")}},Shadow:{Accent:mt("Shadow.Accent"),Red:mt("Shadow.Red"),Elevation:mt("Shadow.Elevation")}},vt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Dt={collections:{base:{D1:{fontFamily:vt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=Ft(Dt,n[yt.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},$t={D1:{fontFamily:bt("D1.fontFamily"),fontSize:bt("D1.fontSize"),fontWeight:bt("D1.fontWeight"),lineHeight:bt("D1.lineHeight"),letterSpacing:bt("D1.letterSpacing")},D2:{fontFamily:bt("D2.fontFamily"),fontSize:bt("D2.fontSize"),fontWeight:bt("D2.fontWeight"),lineHeight:bt("D2.lineHeight"),letterSpacing:bt("D2.letterSpacing")},D3:{fontFamily:bt("D3.fontFamily"),fontSize:bt("D3.fontSize"),fontWeight:bt("D3.fontWeight"),lineHeight:bt("D3.lineHeight"),letterSpacing:bt("D3.letterSpacing")},D4:{fontFamily:bt("D4.fontFamily"),fontSize:bt("D4.fontSize"),fontWeight:bt("D4.fontWeight"),lineHeight:bt("D4.lineHeight"),letterSpacing:bt("D4.letterSpacing")},DBody:{fontFamily:bt("DBody.fontFamily"),fontSize:bt("DBody.fontSize"),fontWeight:bt("DBody.fontWeight"),lineHeight:bt("DBody.lineHeight"),letterSpacing:bt("DBody.letterSpacing")},H1:{fontFamily:bt("H1.fontFamily"),fontSize:bt("H1.fontSize"),fontWeight:bt("H1.fontWeight"),lineHeight:bt("H1.lineHeight"),letterSpacing:bt("H1.letterSpacing")},H2:{fontFamily:bt("H2.fontFamily"),fontSize:bt("H2.fontSize"),fontWeight:bt("H2.fontWeight"),lineHeight:bt("H2.lineHeight"),letterSpacing:bt("H2.letterSpacing")},H3:{fontFamily:bt("H3.fontFamily"),fontSize:bt("H3.fontSize"),fontWeight:bt("H3.fontWeight"),lineHeight:bt("H3.lineHeight"),letterSpacing:bt("H3.letterSpacing")},H4:{fontFamily:bt("H4.fontFamily"),fontSize:bt("H4.fontSize"),fontWeight:bt("H4.fontWeight"),lineHeight:bt("H4.lineHeight"),letterSpacing:bt("H4.letterSpacing")},H5:{fontFamily:bt("H5.fontFamily"),fontSize:bt("H5.fontSize"),fontWeight:bt("H5.fontWeight"),lineHeight:bt("H5.lineHeight"),letterSpacing:bt("H5.letterSpacing")},H6:{fontFamily:bt("H6.fontFamily"),fontSize:bt("H6.fontSize"),fontWeight:bt("H6.fontWeight"),lineHeight:bt("H6.lineHeight"),letterSpacing:bt("H6.letterSpacing")},Body:{fontFamily:bt("Body.fontFamily"),fontSize:bt("Body.fontSize"),fontWeight:bt("Body.fontWeight"),lineHeight:bt("Body.lineHeight"),letterSpacing:bt("Body.letterSpacing")},BodySmall:{fontFamily:bt("BodySmall.fontFamily"),fontSize:bt("BodySmall.fontSize"),fontWeight:bt("BodySmall.fontWeight"),lineHeight:bt("BodySmall.lineHeight"),letterSpacing:bt("BodySmall.letterSpacing")},XSmall:{fontFamily:bt("XSmall.fontFamily"),fontSize:bt("XSmall.fontSize"),fontWeight:bt("XSmall.fontWeight"),lineHeight:bt("XSmall.lineHeight"),letterSpacing:bt("XSmall.letterSpacing")}},Ht=e=>{switch(e){case 700:case"bold":return vt.Bold;case 600:case"semibold":return vt.Semibold;case 300:case"light":return vt.Light;case 400:case"regular":return vt.Regular;default:return""}},xt=(e,t)=>n=>{var a;const i=$t[e].fontFamily(n),o=$t[e].fontWeight(n);return Object.values(vt).includes(i)?r`
                font-family: ${Ht(t)||Ht(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${null!==(a=Et(t)||o)&&void 0!==a?a:"normal"};
        `},Et=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},At=(e,t,n=!1)=>a=>{const i=$t[e],o=i.fontSize(a);return r`
            ${xt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_t=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${kt(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${kt(n)}
        `;var wt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${At("D1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${At("D2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${At("D3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${At("D4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${At("DBody",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${At("H1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${At("H2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${At("H3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${At("H4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${At("H5",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${At("H6",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${At("Body",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${At("BodySmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${At("XSmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${_t(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ct(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ct(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wt||(wt={}));const zt=n.a`
    ${e=>r`
            ${At(e.textStyle,e.weight)}
            color: ${St.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${St.Secondary};

                svg {
                    color: ${St.Secondary};
                }
            }
        `}
`,Ot=n(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ct=n=>{var{external:r=!1,children:a}=n,o=i(n,["external","children"]);return e(zt,Object.assign({},o,{children:[a,r&&t(Ot,{})]}))};var Tt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Tt||(Tt={}));const Vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Nt=e=>Object.keys(Vt).reduce(((t,n)=>{const r=Vt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Wt=Nt("max-width"),jt=(Nt("min-width"),n.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${At("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,a,i;if("solid"===e.$type)switch(a=St.Neutral[8],i=`0px 0px 4px 1px ${St.Neutral[4](e)}`,e.$color){case"grey":t=St.Neutral[3],n=St.Neutral[3];break;case"green":t=St.Validation.Green.Text,n=St.Validation.Green.Text;break;case"yellow":t=St.Validation.Orange.Text,n=St.Validation.Orange.Text;break;case"red":t=St.Validation.Red.Text,n=St.Validation.Red.Text;break;case"blue":t=St.Validation.Blue.Text,n=St.Validation.Blue.Text;break;default:t=St.Neutral[1],n=St.Neutral[1]}else switch(i="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=St.Neutral[6],n=St.Neutral[4],a=St.Neutral[3];break;case"green":t=St.Validation.Green.Background,n=St.Validation.Green.Border,a=St.Validation.Green.Text;break;case"yellow":t=St.Validation.Orange.Background,n=St.Validation.Orange.Border,a=St.Validation.Orange.Text;break;case"red":t=St.Validation.Red.Background,n=St.Validation.Red.Border,a=St.Validation.Red.Text;break;case"blue":t=St.Validation.Blue.Background,n=St.Validation.Blue.Border,a=St.Validation.Blue.Text;break;default:t=St.Neutral[8],n=St.Neutral[5],a=St.Neutral[1],i="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return r`
            background: ${t};
            border: 1px solid ${n};
            color: ${a};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?i:"none"};
                }
            }
        `}}

    ${Wt.tablet} {
        ${({$interactive:e})=>{if(e)return r`
                    ${At("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`),Lt=n.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,It=n=>{var{type:r,colorType:a="black",children:o,interactive:l=!1,icon:c}=n,d=i(n,["type","colorType","children","interactive","icon"]);return e(jt,Object.assign({as:l?"button":"div",$type:r,$color:a,$interactive:l},d,{children:[c,t(Lt,{children:o})]}))};export{It as Tag};
//# sourceMappingURL=index.js.map