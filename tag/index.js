import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,d=c||g||Function("return this")(),h=d.Symbol,u=h,f=Object.prototype,p=f.hasOwnProperty,s=f.toString,F=u?u.toStringTag:void 0;var y=function(e){var t=p.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[F]=n:delete e[F]),a},m=Object.prototype.toString;var B=y,S=function(e){return m.call(e)},v=h?h.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?B(e):S(e)};var D=b,$=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==D(e)},x=l,_=H,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var w=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(E.test(e)||!k.test(e)||null!=t&&e in Object(t))};var z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},A=b,O=z;var V,T=function(e){if(!O(e))return!1;var t=A(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=d["__core-js_shared__"],W=(V=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var j=function(e){return!!W&&W in e},C=Function.prototype.toString;var L=T,R=j,I=z,P=function(e){if(null!=e){try{return C.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!I(e)||R(e))&&(L(e)?J:G).test(P(e))},Q=function(e,t){return null==e?void 0:e[t]};var Y=function(e,t){var n=Q(e,t);return K(n)?n:void 0},Z=Y(Object,"create"),ee=Z;var te=function(){this.__data__=ee?ee(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},re=Z,ae=Object.prototype.hasOwnProperty;var ie=function(e){var t=this.__data__;if(re){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ae.call(t,e)?t[e]:void 0},oe=Z,le=Object.prototype.hasOwnProperty;var ce=Z;var ge=te,de=ne,he=ie,ue=function(e){var t=this.__data__;return oe?void 0!==t[e]:le.call(t,e)},fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ce&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=ge,pe.prototype.delete=de,pe.prototype.get=he,pe.prototype.has=ue,pe.prototype.set=fe;var se=pe;var Fe=function(){this.__data__=[],this.size=0};var ye=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},Be=me,Se=Array.prototype.splice;var ve=me;var be=me;var De=me;var $e=Fe,He=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():Se.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},_e=function(e){return be(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=$e,Ee.prototype.delete=He,Ee.prototype.get=xe,Ee.prototype.has=_e,Ee.prototype.set=ke;var we=Ee,ze=Y(d,"Map"),Ae=se,Oe=we,Ve=ze;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},We=Ne;var je=Ne;var Ce=Ne;var Le=Ne;var Re=function(){this.size=0,this.__data__={hash:new Ae,map:new(Ve||Oe),string:new Ae}},Ie=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},Pe=function(e){return je(this,e).get(e)},Ge=function(e){return Ce(this,e).has(e)},Xe=function(e,t){var n=Le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Me(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Me.prototype.clear=Re,Me.prototype.delete=Ie,Me.prototype.get=Pe,Me.prototype.has=Ge,Me.prototype.set=Xe;var Ue=Me;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,Ye=function(e){var t=Je(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,n,r,a){t.push(r?a.replace(Qe,"$1"):n||e)})),t}));var Ze=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},et=l,tt=H,nt=h?h.prototype:void 0,rt=nt?nt.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(et(t))return Ze(t,e)+"";if(tt(t))return rt?rt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},it=at;var ot=l,lt=w,ct=Ye,gt=function(e){return null==e?"":it(e)};var dt=H;var ht=function(e,t){return ot(e)?e:lt(e,t)?[e]:ct(gt(e))},ut=function(e){if("string"==typeof e||dt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var n=0,r=(t=ht(t,e)).length;null!=e&&n<r;)e=e[ut(t[n++])];return n&&n==r?e:void 0};var pt=function(e,t,n){var r=null==e?void 0:ft(e,t);return void 0===r?n:r};const st=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yt||(yt={}));const mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=Ft(mt,n[yt.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},St={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},vt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},bt={collections:{base:{D1:{fontFamily:vt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Ft(bt,n[yt.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},$t={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},Ht=e=>{switch(e){case 700:case"bold":return vt.Bold;case 600:case"semibold":return vt.Semibold;case 300:case"light":return vt.Light;case 400:case"regular":return vt.Regular;default:return""}},xt=(e,t)=>n=>{var a;const i=$t[e].fontFamily(n),o=$t[e].fontWeight(n);return Object.values(vt).includes(i)?r`
                font-family: ${Ht(t)||Ht(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${null!==(a=_t(t)||o)&&void 0!==a?a:"normal"};
        `},_t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Et=(e,t,n=!1)=>a=>{const i=$t[e],o=i.fontSize(a);return r`
            ${xt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},wt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${kt(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${kt(n)}
        `;var zt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${Et("D1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${Et("D2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${Et("D3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${Et("D4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${Et("DBody",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${Et("H1",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${Et("H2",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${Et("H3",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${Et("H4",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${Et("H5",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${Et("H6",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${Et("Body",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${Et("BodySmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${Et("XSmall",e.weight,e.paragraph)}
                color: ${St.Neutral[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(zt||(zt={}));const At=n.a`
    ${e=>r`
            ${Et(e.textStyle,e.weight)}
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
`,Vt=n=>{var{external:r=!1,children:a}=n,o=i(n,["external","children"]);return e(At,Object.assign({},o,{children:[a,r&&t(Ot,{})]}))};var Tt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Tt||(Tt={}));const Nt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Wt=e=>Object.keys(Nt).reduce(((t,n)=>{const r=Nt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),jt=Wt("max-width"),Ct=(Wt("min-width"),n.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Et("XSmall","semibold")}
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

    ${jt.tablet} {
        ${({$interactive:e})=>{if(e)return r`
                    ${Et("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`),Lt=n.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,Rt=n=>{var{type:r,colorType:a="black",children:o,interactive:l=!1,icon:c}=n,g=i(n,["type","colorType","children","interactive","icon"]);return e(Ct,Object.assign({as:l?"button":"div",$type:r,$color:a,$interactive:l},g,{children:[c,t(Lt,{children:o})]}))};export{Rt as Tag};
//# sourceMappingURL=index.js.map
