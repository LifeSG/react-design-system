import{jsxs as e,jsx as t}from"react/jsx-runtime";import{forwardRef as n}from"react";import r,{css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,F="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=F||h||Function("return this")(),d=f.Symbol,u=d,s=Object.prototype,p=s.hasOwnProperty,y=s.toString,B=u?u.toStringTag:void 0;var m=function(e){var t=p.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var i=y.call(e);return r&&(t?e[B]=n:delete e[B]),i},S=Object.prototype.toString;var D=m,v=function(e){return S.call(e)},E=d?d.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?D(e):v(e)};var H=b,$=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==H(e)},_=g,x=A,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var w=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!x(e))||(z.test(e)||!C.test(e)||null!=t&&e in Object(t))};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=b,W=k;var j,T=function(e){if(!W(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=f["__core-js_shared__"],I=(j=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(e){return!!I&&I in e},P=Function.prototype.toString;var R=T,N=V,G=k,X=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!G(e)||N(e))&&(R(e)?Q:M).test(X(e))},Z=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Z(e,t);return Y(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},oe=te,ae=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ae.call(t,e)?t[e]:void 0},ce=te,ge=Object.prototype.hasOwnProperty;var Fe=te;var he=re,fe=ie,de=le,ue=function(e){var t=this.__data__;return ce?void 0!==t[e]:ge.call(t,e)},se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=he,pe.prototype.delete=fe,pe.prototype.get=de,pe.prototype.has=ue,pe.prototype.set=se;var ye=pe;var Be=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1},De=Se,ve=Array.prototype.splice;var Ee=Se;var be=Se;var He=Se;var $e=Be,Ae=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():ve.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},xe=function(e){return be(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=$e,ze.prototype.delete=Ae,ze.prototype.get=_e,ze.prototype.has=xe,ze.prototype.set=Ce;var we=ze,ke=ee(f,"Map"),Oe=ye,We=we,je=ke;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Le;var Ve=Le;var Pe=Le;var Re=Le;var Ne=function(){this.size=0,this.__data__={hash:new Oe,map:new(je||We),string:new Oe}},Ge=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Me=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var n=Re(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ne,qe.prototype.delete=Ge,qe.prototype.get=Xe,qe.prototype.has=Me,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ze=/\\(\\)?/g,et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,i){t.push(r?i.replace(Ze,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},nt=g,rt=A,it=d?d.prototype:void 0,ot=it?it.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return ot?ot.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=at;var ct=g,gt=w,Ft=et,ht=function(e){return null==e?"":lt(e)};var ft=A;var dt=function(e,t){return ct(e)?e:gt(e,t)?[e]:Ft(ht(e))},ut=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var st=function(e,t){for(var n=0,r=(t=dt(t,e)).length;null!=e&&n<r;)e=e[ut(t[n++])];return n&&n==r?e:void 0};var pt=c((function(e,t,n){var r=null==e?void 0:st(e,t);return void 0===r?n:r}));const yt=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Bt(St,n[mt.colorScheme]);return n.options&&n.options.color?yt(r,e,n.options.color):yt(r,e)},vt=(Dt("Brand.1"),Dt("Brand.2"),Dt("Brand.3"),Dt("Brand.4"),Dt("Brand.5"),Dt("Brand.6"),Dt("Primary")),Et=(Dt("PrimaryDark"),Dt("Secondary")),bt=(Dt("Accent.Light.1"),Dt("Accent.Light.2"),Dt("Accent.Light.3"),Dt("Accent.Light.4"),Dt("Accent.Light.5"),Dt("Accent.Light.6"),Dt("Accent.Dark.1"),Dt("Accent.Dark.2"),Dt("Accent.Dark.3"),{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")}),Ht=(Dt("Validation.Green.Text"),Dt("Validation.Green.Icon"),Dt("Validation.Green.Border"),Dt("Validation.Green.Background"),Dt("Validation.Orange.Text"),Dt("Validation.Orange.Icon"),Dt("Validation.Orange.Border"),Dt("Validation.Orange.Background"),Dt("Validation.Orange.Badge"),Dt("Validation.Red.Text"),Dt("Validation.Red.Icon"),Dt("Validation.Red.Border"),Dt("Validation.Red.Background"),Dt("Validation.Blue.Text"),Dt("Validation.Blue.Icon"),Dt("Validation.Blue.Border"),Dt("Validation.Blue.Background"),Dt("Shadow.Accent"),Dt("Shadow.Red"),Dt("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),$t={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=Bt($t,n[mt.textStyleScheme]);return n.options&&n.options.textStyle?yt(r,e,n.options.textStyle):yt(r,e)},_t={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},xt=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},Ct=(e,t)=>n=>{var r;const o=_t[e].fontFamily(n),a=_t[e].fontWeight(n);return Object.values(Ht).includes(o)?i`
                font-family: ${xt(t)||xt(a)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(r=zt(t)||a)&&void 0!==r?r:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kt=(e,t,n=!1)=>r=>{const o=_t[e],a=o.fontSize(r);return i`
            ${Ct(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${wt(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${wt(n)}
        `;var Wt;!function(e){e.D1=r.h1`
        ${e=>i`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>i`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>i`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>i`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>i`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>i`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>i`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>i`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>i`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>i`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>i`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>i`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>i`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>i`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${bt[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const jt=r.a`
    ${e=>i`
            ${kt(e.textStyle,e.weight)}
            color: ${vt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et};

                svg {
                    color: ${Et};
                }
            }
        `}
`,Tt=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:r=!1,children:i}=n,o=a(n,["external","children"]);return e(jt,Object.assign({},o,{children:[i,r&&t(Tt,{})]}))};var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Vt=r.div`
    ${e=>(e=>{const{textSize:t}=e||{};return i`
        // Text styling
        ${t&&kt(t,"regular")}

        strong {
            font-family: ${Ht.Semibold};
            ${t&&kt(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Ht.Semibold};
            ${t&&kt(t,"semibold")}
            color: ${vt};
            text-decoration: none;

            svg {
                color: ${vt};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Et};

                svg {
                    color: ${Et};
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
    `})({textSize:e.$textSize})}
    ${e=>e.color&&i`
            color: ${e.color};
        `}
`,Pt=n(((e,n)=>{const{baseTextColor:r,baseTextSize:i,inline:o}=e,l=a(e,["baseTextColor","baseTextSize","inline"]);return t(Vt,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:r},l))}));export{Pt as Markup};
//# sourceMappingURL=index.js.map
