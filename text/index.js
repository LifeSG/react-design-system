import e,{css as t}from"styled-components";import{jsxs as n,jsx as r}from"react/jsx-runtime";import{ExternalIcon as i}from"@lifesg/react-icons/external";const a={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:a.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:a.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:a.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:a.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:a.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:a.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:a.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:a.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:a.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:a.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,h="object"==typeof l&&l&&l.Object===Object&&l,f="object"==typeof self&&self&&self.Object===Object&&self,p=h||f||Function("return this")(),u=p.Symbol,F=u,d=Object.prototype,y=d.hasOwnProperty,s=d.toString,S=F?F.toStringTag:void 0;var B=function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=s.call(e);return r&&(t?e[S]=n:delete e[S]),i},m=Object.prototype.toString;var D=B,v=function(e){return m.call(e)},H=u?u.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?D(e):v(e)};var b=E,$=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==b(e)},x=g,A=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;var O=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(w.test(e)||!z.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k=E,T=C;var W,j=function(e){if(!T(e))return!1;var t=k(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=p["__core-js_shared__"],I=(W=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var V=function(e){return!!I&&I in e},P=Function.prototype.toString;var R=j,N=V,G=C,X=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!G(e)||N(e))&&(R(e)?Q:M).test(X(e))},Z=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Z(e,t);return Y(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},ce=te,ge=Object.prototype.hasOwnProperty;var he=te;var fe=re,pe=ie,ue=le,Fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:ge.call(t,e)},de=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=fe,ye.prototype.delete=pe,ye.prototype.get=ue,ye.prototype.has=Fe,ye.prototype.set=de;var se=ye;var Se=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},De=me,ve=Array.prototype.splice;var He=me;var Ee=me;var be=me;var $e=Se,_e=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():ve.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return Ee(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function we(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}we.prototype.clear=$e,we.prototype.delete=_e,we.prototype.get=xe,we.prototype.has=Ae,we.prototype.set=ze;var Oe=we,Ce=ee(p,"Map"),ke=se,Te=Oe,We=Ce;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Le;var Ve=Le;var Pe=Le;var Re=Le;var Ne=function(){this.size=0,this.__data__={hash:new ke,map:new(We||Te),string:new ke}},Ge=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Me=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var n=Re(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ne,qe.prototype.delete=Ge,qe.prototype.get=Xe,qe.prototype.has=Me,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ze=/\\(\\)?/g,et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,i){t.push(r?i.replace(Ze,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},nt=g,rt=_,it=u?u.prototype:void 0,at=it?it.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=ot;var ct=g,gt=O,ht=et,ft=function(e){return null==e?"":lt(e)};var pt=_;var ut=function(e,t){return ct(e)?e:gt(e,t)?[e]:ht(ft(e))},Ft=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var dt=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0};var yt=c((function(e,t,n){var r=null==e?void 0:dt(e,t);return void 0===r?n:r}));const st=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const mt={collections:{base:o},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=St(mt,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?st(r,e,n.options.textStyle):st(r,e)},vt={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},Ht=e=>{switch(e){case 700:case"bold":return a.Bold;case 600:case"semibold":return a.Semibold;case 300:case"light":return a.Light;case 400:case"regular":return a.Regular;default:return""}},Et=(e,n)=>r=>{var i;const o=vt[e].fontFamily(r),l=vt[e].fontWeight(r);return Object.values(a).includes(o)?t`
                font-family: ${Ht(n)||Ht(l)||o};
                font-weight: normal !important;
            `:t`
            font-family: ${o};
            font-weight: ${null!==(i=bt(n)||l)&&void 0!==i?i:"normal"};
        `},bt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$t=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_t={getFontFamily:Et,getTextStyle:(e,n,r=!1)=>i=>{const a=vt[e],o=a.fontSize(i);return t`
            ${Et(e,n)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
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
        `};"function"==typeof SuppressedError&&SuppressedError;const xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=St(xt,n[Bt.colorScheme]);return n.options&&n.options.color?st(r,e,n.options.color):st(r,e)},zt=(At("Brand.1"),At("Brand.2"),At("Brand.3"),At("Brand.4"),At("Brand.5"),At("Brand.6"),At("Primary")),wt=(At("PrimaryDark"),At("Secondary")),Ot=(At("Accent.Light.1"),At("Accent.Light.2"),At("Accent.Light.3"),At("Accent.Light.4"),At("Accent.Light.5"),At("Accent.Light.6"),At("Accent.Dark.1"),At("Accent.Dark.2"),At("Accent.Dark.3"),{1:At("Neutral.1"),2:At("Neutral.2"),3:At("Neutral.3"),4:At("Neutral.4"),5:At("Neutral.5"),6:At("Neutral.6"),7:At("Neutral.7"),8:At("Neutral.8")});At("Validation.Green.Text"),At("Validation.Green.Icon"),At("Validation.Green.Border"),At("Validation.Green.Background"),At("Validation.Orange.Text"),At("Validation.Orange.Icon"),At("Validation.Orange.Border"),At("Validation.Orange.Background"),At("Validation.Orange.Badge"),At("Validation.Red.Text"),At("Validation.Red.Icon"),At("Validation.Red.Border"),At("Validation.Red.Background"),At("Validation.Blue.Text"),At("Validation.Blue.Icon"),At("Validation.Blue.Border"),At("Validation.Blue.Background"),At("Shadow.Accent"),At("Shadow.Red"),At("Shadow.Elevation");var Ct;!function(n){n.D1=e.h1`
        ${e=>t`
                ${_t.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D2=e.h1`
        ${e=>t`
                ${_t.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D3=e.h1`
        ${e=>t`
                ${_t.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D4=e.h1`
        ${e=>t`
                ${_t.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.DBody=e.h1`
        ${e=>t`
                ${_t.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H1=e.h1`
        ${e=>t`
                ${_t.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H2=e.h2`
        ${e=>t`
                ${_t.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H3=e.h3`
        ${e=>t`
                ${_t.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H4=e.h4`
        ${e=>t`
                ${_t.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H5=e.h5`
        ${e=>t`
                ${_t.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H6=e.h6`
        ${e=>t`
                ${_t.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Body=e.p`
        ${e=>t`
                ${_t.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.BodySmall=e.p`
        ${e=>t`
                ${_t.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.XSmall=e.span`
        ${e=>t`
                ${_t.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${_t.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Hyperlink={Default:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Wt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ct||(Ct={}));const kt=e.a`
    ${e=>t`
            ${_t.getTextStyle(e.textStyle,e.weight)}
            color: ${zt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${wt};

                svg {
                    color: ${wt};
                }
            }
        `}
`,Tt=e(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wt=e=>{var{external:t=!1,children:i}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["external","children"]);return n(kt,Object.assign({},a,{children:[i,t&&r(Tt,{})]}))};var jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jt||(jt={}));export{jt as RedirectScope,Ct as Text,vt as TextStyle,_t as TextStyleHelper};
//# sourceMappingURL=index.js.map
