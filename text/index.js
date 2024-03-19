import e,{css as t}from"styled-components";import{jsxs as n,jsx as r}from"react/jsx-runtime";import{ExternalIcon as a}from"@lifesg/react-icons/external";const i={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:i.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:i.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:i.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:i.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:i.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:i.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:i.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:i.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:i.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:i.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:i.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:i.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:i.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:i.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,F="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=F||h||Function("return this")(),d=f.Symbol,u=d,p=Object.prototype,y=p.hasOwnProperty,s=p.toString,B=u?u.toStringTag:void 0;var S=function(e){var t=y.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var a=s.call(e);return r&&(t?e[B]=n:delete e[B]),a},D=Object.prototype.toString;var m=S,v=function(e){return D.call(e)},E=d?d.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?m(e):v(e)};var b=H,$=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==b(e)},x=g,_=A,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var w=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(z.test(e)||!C.test(e)||null!=t&&e in Object(t))};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=H,T=k;var W,j=function(e){if(!T(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=f["__core-js_shared__"],L=(W=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var V=function(e){return!!L&&L in e},P=Function.prototype.toString;var R=j,N=V,G=k,X=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!G(e)||N(e))&&(R(e)?Q:M).test(X(e))},Z=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Z(e,t);return Y(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},ce=te,ge=Object.prototype.hasOwnProperty;var Fe=te;var he=re,fe=ae,de=le,ue=function(e){var t=this.__data__;return ce?void 0!==t[e]:ge.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=he,ye.prototype.delete=fe,ye.prototype.get=de,ye.prototype.has=ue,ye.prototype.set=pe;var se=ye;var Be=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},me=De,ve=Array.prototype.splice;var Ee=De;var He=De;var be=De;var $e=Be,Ae=function(e){var t=this.__data__,n=me(t,e);return!(n<0)&&(n==t.length-1?t.pop():ve.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},_e=function(e){return He(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=$e,ze.prototype.delete=Ae,ze.prototype.get=xe,ze.prototype.has=_e,ze.prototype.set=Ce;var we=ze,ke=ee(f,"Map"),Oe=se,Te=we,We=ke;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Le=Ie;var Ve=Ie;var Pe=Ie;var Re=Ie;var Ne=function(){this.size=0,this.__data__={hash:new Oe,map:new(We||Te),string:new Oe}},Ge=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Me=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var n=Re(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ne,qe.prototype.delete=Ge,qe.prototype.get=Xe,qe.prototype.has=Me,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ze=/\\(\\)?/g,et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,a){t.push(r?a.replace(Ze,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},nt=g,rt=A,at=d?d.prototype:void 0,it=at?at.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=ot;var ct=g,gt=w,Ft=et,ht=function(e){return null==e?"":lt(e)};var ft=A;var dt=function(e,t){return ct(e)?e:gt(e,t)?[e]:Ft(ht(e))},ut=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var n=0,r=(t=dt(t,e)).length;null!=e&&n<r;)e=e[ut(t[n++])];return n&&n==r?e:void 0};var yt=c((function(e,t,n){var r=null==e?void 0:pt(e,t);return void 0===r?n:r}));const st=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const Dt={collections:{base:o},defaultValue:"base"},mt=e=>t=>{const n=t.theme,r=Bt(Dt,n[St.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},vt={D1:{fontFamily:mt("D1.fontFamily"),fontSize:mt("D1.fontSize"),fontWeight:mt("D1.fontWeight"),lineHeight:mt("D1.lineHeight"),letterSpacing:mt("D1.letterSpacing")},D2:{fontFamily:mt("D2.fontFamily"),fontSize:mt("D2.fontSize"),fontWeight:mt("D2.fontWeight"),lineHeight:mt("D2.lineHeight"),letterSpacing:mt("D2.letterSpacing")},D3:{fontFamily:mt("D3.fontFamily"),fontSize:mt("D3.fontSize"),fontWeight:mt("D3.fontWeight"),lineHeight:mt("D3.lineHeight"),letterSpacing:mt("D3.letterSpacing")},D4:{fontFamily:mt("D4.fontFamily"),fontSize:mt("D4.fontSize"),fontWeight:mt("D4.fontWeight"),lineHeight:mt("D4.lineHeight"),letterSpacing:mt("D4.letterSpacing")},DBody:{fontFamily:mt("DBody.fontFamily"),fontSize:mt("DBody.fontSize"),fontWeight:mt("DBody.fontWeight"),lineHeight:mt("DBody.lineHeight"),letterSpacing:mt("DBody.letterSpacing")},H1:{fontFamily:mt("H1.fontFamily"),fontSize:mt("H1.fontSize"),fontWeight:mt("H1.fontWeight"),lineHeight:mt("H1.lineHeight"),letterSpacing:mt("H1.letterSpacing")},H2:{fontFamily:mt("H2.fontFamily"),fontSize:mt("H2.fontSize"),fontWeight:mt("H2.fontWeight"),lineHeight:mt("H2.lineHeight"),letterSpacing:mt("H2.letterSpacing")},H3:{fontFamily:mt("H3.fontFamily"),fontSize:mt("H3.fontSize"),fontWeight:mt("H3.fontWeight"),lineHeight:mt("H3.lineHeight"),letterSpacing:mt("H3.letterSpacing")},H4:{fontFamily:mt("H4.fontFamily"),fontSize:mt("H4.fontSize"),fontWeight:mt("H4.fontWeight"),lineHeight:mt("H4.lineHeight"),letterSpacing:mt("H4.letterSpacing")},H5:{fontFamily:mt("H5.fontFamily"),fontSize:mt("H5.fontSize"),fontWeight:mt("H5.fontWeight"),lineHeight:mt("H5.lineHeight"),letterSpacing:mt("H5.letterSpacing")},H6:{fontFamily:mt("H6.fontFamily"),fontSize:mt("H6.fontSize"),fontWeight:mt("H6.fontWeight"),lineHeight:mt("H6.lineHeight"),letterSpacing:mt("H6.letterSpacing")},Body:{fontFamily:mt("Body.fontFamily"),fontSize:mt("Body.fontSize"),fontWeight:mt("Body.fontWeight"),lineHeight:mt("Body.lineHeight"),letterSpacing:mt("Body.letterSpacing")},BodySmall:{fontFamily:mt("BodySmall.fontFamily"),fontSize:mt("BodySmall.fontSize"),fontWeight:mt("BodySmall.fontWeight"),lineHeight:mt("BodySmall.lineHeight"),letterSpacing:mt("BodySmall.letterSpacing")},XSmall:{fontFamily:mt("XSmall.fontFamily"),fontSize:mt("XSmall.fontSize"),fontWeight:mt("XSmall.fontWeight"),lineHeight:mt("XSmall.lineHeight"),letterSpacing:mt("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return i.Bold;case 600:case"semibold":return i.Semibold;case 300:case"light":return i.Light;case 400:case"regular":return i.Regular;default:return""}},Ht=(e,n)=>r=>{var a;const o=vt[e].fontFamily(r),l=vt[e].fontWeight(r);return Object.values(i).includes(o)?t`
                font-family: ${Et(n)||Et(l)||o};
                font-weight: normal !important;
            `:t`
            font-family: ${o};
            font-weight: ${null!==(a=bt(n)||l)&&void 0!==a?a:"normal"};
        `},bt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$t=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},At={getFontFamily:Ht,getTextStyle:(e,n,r=!1)=>a=>{const i=vt[e],o=i.fontSize(a);return t`
            ${Ht(e,n)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${t`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,n=!1,r=void 0)=>n?t`
            display: block;
            ${$t(r)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${$t(r)}
        `};"function"==typeof SuppressedError&&SuppressedError;const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=Bt(xt,n[St.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},Ct=(_t("Brand.1"),_t("Brand.2"),_t("Brand.3"),_t("Brand.4"),_t("Brand.5"),_t("Brand.6"),_t("Primary")),zt=(_t("PrimaryDark"),_t("Secondary")),wt=(_t("Accent.Light.1"),_t("Accent.Light.2"),_t("Accent.Light.3"),_t("Accent.Light.4"),_t("Accent.Light.5"),_t("Accent.Light.6"),_t("Accent.Dark.1"),_t("Accent.Dark.2"),_t("Accent.Dark.3"),{1:_t("Neutral.1"),2:_t("Neutral.2"),3:_t("Neutral.3"),4:_t("Neutral.4"),5:_t("Neutral.5"),6:_t("Neutral.6"),7:_t("Neutral.7"),8:_t("Neutral.8")});_t("Validation.Green.Text"),_t("Validation.Green.Icon"),_t("Validation.Green.Border"),_t("Validation.Green.Background"),_t("Validation.Orange.Text"),_t("Validation.Orange.Icon"),_t("Validation.Orange.Border"),_t("Validation.Orange.Background"),_t("Validation.Orange.Badge"),_t("Validation.Red.Text"),_t("Validation.Red.Icon"),_t("Validation.Red.Border"),_t("Validation.Red.Background"),_t("Validation.Blue.Text"),_t("Validation.Blue.Icon"),_t("Validation.Blue.Border"),_t("Validation.Blue.Background"),_t("Shadow.Accent"),_t("Shadow.Red"),_t("Shadow.Elevation");var kt;!function(n){n.D1=e.h1`
        ${e=>t`
                ${At.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D2=e.h1`
        ${e=>t`
                ${At.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D3=e.h1`
        ${e=>t`
                ${At.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D4=e.h1`
        ${e=>t`
                ${At.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.DBody=e.h1`
        ${e=>t`
                ${At.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H1=e.h1`
        ${e=>t`
                ${At.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H2=e.h2`
        ${e=>t`
                ${At.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H3=e.h3`
        ${e=>t`
                ${At.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H4=e.h4`
        ${e=>t`
                ${At.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H5=e.h5`
        ${e=>t`
                ${At.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H6=e.h6`
        ${e=>t`
                ${At.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Body=e.p`
        ${e=>t`
                ${At.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.BodySmall=e.p`
        ${e=>t`
                ${At.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.XSmall=e.span`
        ${e=>t`
                ${At.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${At.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Hyperlink={Default:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(kt||(kt={}));const Ot=e.a`
    ${e=>t`
            ${At.getTextStyle(e.textStyle,e.weight)}
            color: ${Ct};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${zt};

                svg {
                    color: ${zt};
                }
            }
        `}
`,Tt=e(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wt=e=>{var{external:t=!1,children:a}=e,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["external","children"]);return n(Ot,Object.assign({},i,{children:[a,t&&r(Tt,{})]}))};var jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jt||(jt={}));export{jt as RedirectScope,kt as Text,vt as TextStyle,At as TextStyleHelper};
//# sourceMappingURL=index.js.map
