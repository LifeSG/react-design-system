import{createElement as e}from"react";import{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import{ExclamationCircleFillIcon as i,TickIcon as a}from"@lifesg/react-icons";import o,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";const g={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},d={D1:{fontFamily:g.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u=Array.isArray,f="object"==typeof s&&s&&s.Object===Object&&s,p="object"==typeof self&&self&&self.Object===Object&&self,F=f||p||Function("return this")(),m=F.Symbol,y=m,B=Object.prototype,S=B.hasOwnProperty,v=B.toString,b=y?y.toStringTag:void 0;var D=function(e){var t=S.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var i=v.call(e);return r&&(t?e[b]=n:delete e[b]),i},$=Object.prototype.toString;var H=D,E=function(e){return $.call(e)},_=m?m.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?H(e):E(e)};var A=x,k=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==A(e)},O=u,z=w,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var W=function(e,t){if(O(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(j.test(e)||!C.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=x,T=L;var R,V=function(e){if(!T(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=F["__core-js_shared__"],N=(R=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var G=function(e){return!!N&&N in e},X=Function.prototype.toString;var M=V,U=G,q=L,J=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,Z=Q.toString,ee=Y.hasOwnProperty,te=RegExp("^"+Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!q(e)||U(e))&&(M(e)?te:K).test(J(e))},re=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=re(e,t);return ne(n)?n:void 0},ae=ie(Object,"create"),oe=ae;var le=function(){this.__data__=oe?oe(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=ae,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},he=ae,ue=Object.prototype.hasOwnProperty;var fe=ae;var pe=le,Fe=ce,me=se,ye=function(e){var t=this.__data__;return he?void 0!==t[e]:ue.call(t,e)},Be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=pe,Se.prototype.delete=Fe,Se.prototype.get=me,Se.prototype.has=ye,Se.prototype.set=Be;var ve=Se;var be=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var $e=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},He=$e,Ee=Array.prototype.splice;var _e=$e;var xe=$e;var Ae=$e;var ke=be,we=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},Oe=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},ze=function(e){return xe(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=ke,je.prototype.delete=we,je.prototype.get=Oe,je.prototype.has=ze,je.prototype.set=Ce;var We=je,Le=ie(F,"Map"),Ie=ve,Te=We,Re=Le;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Ne=Pe;var Ge=Pe;var Xe=Pe;var Me=Pe;var Ue=function(){this.size=0,this.__data__={hash:new Ie,map:new(Re||Te),string:new Ie}},qe=function(e){var t=Ne(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ge(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var n=Me(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ue,Ye.prototype.delete=qe,Ye.prototype.get=Je,Ye.prototype.has=Ke,Ye.prototype.set=Qe;var Ze=Ye;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(et.Cache||Ze),n}et.Cache=Ze;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,it=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,i){t.push(r?i.replace(rt,"$1"):n||e)})),t}));var at=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ot=u,lt=w,ct=m?m.prototype:void 0,gt=ct?ct.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(ot(t))return at(t,e)+"";if(lt(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},st=dt;var ht=u,ut=W,ft=it,pt=function(e){return null==e?"":st(e)};var Ft=w;var mt=function(e,t){return ht(e)?e:ut(e,t)?[e]:ft(pt(e))},yt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var n=0,r=(t=mt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var St=h((function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r}));const vt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const $t={collections:{base:d},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=bt($t,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},Et={D1:{fontFamily:Ht("D1.fontFamily"),fontSize:Ht("D1.fontSize"),fontWeight:Ht("D1.fontWeight"),lineHeight:Ht("D1.lineHeight"),letterSpacing:Ht("D1.letterSpacing")},D2:{fontFamily:Ht("D2.fontFamily"),fontSize:Ht("D2.fontSize"),fontWeight:Ht("D2.fontWeight"),lineHeight:Ht("D2.lineHeight"),letterSpacing:Ht("D2.letterSpacing")},D3:{fontFamily:Ht("D3.fontFamily"),fontSize:Ht("D3.fontSize"),fontWeight:Ht("D3.fontWeight"),lineHeight:Ht("D3.lineHeight"),letterSpacing:Ht("D3.letterSpacing")},D4:{fontFamily:Ht("D4.fontFamily"),fontSize:Ht("D4.fontSize"),fontWeight:Ht("D4.fontWeight"),lineHeight:Ht("D4.lineHeight"),letterSpacing:Ht("D4.letterSpacing")},DBody:{fontFamily:Ht("DBody.fontFamily"),fontSize:Ht("DBody.fontSize"),fontWeight:Ht("DBody.fontWeight"),lineHeight:Ht("DBody.lineHeight"),letterSpacing:Ht("DBody.letterSpacing")},H1:{fontFamily:Ht("H1.fontFamily"),fontSize:Ht("H1.fontSize"),fontWeight:Ht("H1.fontWeight"),lineHeight:Ht("H1.lineHeight"),letterSpacing:Ht("H1.letterSpacing")},H2:{fontFamily:Ht("H2.fontFamily"),fontSize:Ht("H2.fontSize"),fontWeight:Ht("H2.fontWeight"),lineHeight:Ht("H2.lineHeight"),letterSpacing:Ht("H2.letterSpacing")},H3:{fontFamily:Ht("H3.fontFamily"),fontSize:Ht("H3.fontSize"),fontWeight:Ht("H3.fontWeight"),lineHeight:Ht("H3.lineHeight"),letterSpacing:Ht("H3.letterSpacing")},H4:{fontFamily:Ht("H4.fontFamily"),fontSize:Ht("H4.fontSize"),fontWeight:Ht("H4.fontWeight"),lineHeight:Ht("H4.lineHeight"),letterSpacing:Ht("H4.letterSpacing")},H5:{fontFamily:Ht("H5.fontFamily"),fontSize:Ht("H5.fontSize"),fontWeight:Ht("H5.fontWeight"),lineHeight:Ht("H5.lineHeight"),letterSpacing:Ht("H5.letterSpacing")},H6:{fontFamily:Ht("H6.fontFamily"),fontSize:Ht("H6.fontSize"),fontWeight:Ht("H6.fontWeight"),lineHeight:Ht("H6.lineHeight"),letterSpacing:Ht("H6.letterSpacing")},Body:{fontFamily:Ht("Body.fontFamily"),fontSize:Ht("Body.fontSize"),fontWeight:Ht("Body.fontWeight"),lineHeight:Ht("Body.lineHeight"),letterSpacing:Ht("Body.letterSpacing")},BodySmall:{fontFamily:Ht("BodySmall.fontFamily"),fontSize:Ht("BodySmall.fontSize"),fontWeight:Ht("BodySmall.fontWeight"),lineHeight:Ht("BodySmall.lineHeight"),letterSpacing:Ht("BodySmall.letterSpacing")},XSmall:{fontFamily:Ht("XSmall.fontFamily"),fontSize:Ht("XSmall.fontSize"),fontWeight:Ht("XSmall.fontWeight"),lineHeight:Ht("XSmall.lineHeight"),letterSpacing:Ht("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return g.Bold;case 600:case"semibold":return g.Semibold;case 300:case"light":return g.Light;case 400:case"regular":return g.Regular;default:return""}},xt=(e,t)=>n=>{var r;const i=Et[e].fontFamily(n),a=Et[e].fontWeight(n);return Object.values(g).includes(i)?l`
                font-family: ${_t(t)||_t(a)||i};
                font-weight: normal !important;
            `:l`
            font-family: ${i};
            font-weight: ${null!==(r=At(t)||a)&&void 0!==r?r:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wt=(e,t,n=!1)=>r=>{const i=Et[e],a=i.fontSize(r);return l`
            ${xt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${kt(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${kt(n)}
        `;"function"==typeof SuppressedError&&SuppressedError;const zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,r=bt(zt,n[Dt.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},jt=(Ct("Brand.1"),Ct("Brand.2"),Ct("Brand.3"),Ct("Brand.4"),Ct("Brand.5"),Ct("Brand.6"),Ct("Primary")),Wt=(Ct("PrimaryDark"),Ct("Secondary")),Lt={Light:{1:Ct("Accent.Light.1"),2:Ct("Accent.Light.2"),3:Ct("Accent.Light.3"),4:Ct("Accent.Light.4"),5:Ct("Accent.Light.5"),6:Ct("Accent.Light.6")},Dark:{1:Ct("Accent.Dark.1"),2:Ct("Accent.Dark.2"),3:Ct("Accent.Dark.3")}},It={1:Ct("Neutral.1"),2:Ct("Neutral.2"),3:Ct("Neutral.3"),4:Ct("Neutral.4"),5:Ct("Neutral.5"),6:Ct("Neutral.6"),7:Ct("Neutral.7"),8:Ct("Neutral.8")},Tt={Green:{Text:Ct("Validation.Green.Text"),Icon:Ct("Validation.Green.Icon"),Border:Ct("Validation.Green.Border"),Background:Ct("Validation.Green.Background")},Orange:{Text:Ct("Validation.Orange.Text"),Icon:Ct("Validation.Orange.Icon"),Border:Ct("Validation.Orange.Border"),Background:Ct("Validation.Orange.Background"),Badge:Ct("Validation.Orange.Badge")},Red:{Text:Ct("Validation.Red.Text"),Icon:Ct("Validation.Red.Icon"),Border:Ct("Validation.Red.Border"),Background:Ct("Validation.Red.Background")},Blue:{Text:Ct("Validation.Blue.Text"),Icon:Ct("Validation.Blue.Icon"),Border:Ct("Validation.Blue.Border"),Background:Ct("Validation.Blue.Background")}};Ct("Shadow.Accent"),Ct("Shadow.Red"),Ct("Shadow.Elevation");var Rt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${wt("D1",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${wt("D2",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${wt("D3",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${wt("D4",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${wt("DBody",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${wt("H1",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${wt("H2",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${wt("H3",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${wt("H4",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${wt("H5",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${wt("H6",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${wt("Body",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${wt("BodySmall",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${wt("XSmall",e.weight,e.paragraph)}
                color: ${It[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=o.a`
    ${e=>l`
            ${wt(e.textStyle,e.weight)}
            color: ${jt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt};

                svg {
                    color: ${Wt};
                }
            }
        `}
`,Pt=o(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=e=>{var{external:r=!1,children:i}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["external","children"]);return t(Vt,Object.assign({},a,{children:[i,r&&n(Pt,{})]}))};var Gt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gt||(Gt={}));const Xt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mt=e=>Object.keys(Xt).reduce(((t,n)=>{const r=Xt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ut=Mt("max-width"),qt=(Mt("min-width"),o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return l`
                    background-color: ${Lt.Light[1]};
                `;case"upcoming-active":return l`
                    border: 4px solid ${Lt.Light[1]};
                `;case"upcoming-inactive":return l`
                    border: 4px solid ${It[4]};
                `;case"completed":return l`
                    background-color: ${Tt.Green.Icon};
                    svg {
                        color: ${It[8]};
                    }
                `;case"error":return l`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0.3rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Tt.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`),Jt=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return l`
                    background-color: ${Lt.Light[1]};
                `;case"upcoming-inactive":return l`
                    background-color: ${It[4]};
                `;case"completed":return l`
                    background-color: ${Tt.Green.Icon};
                `;case"error":return l`
                    margin-left: -0.15rem;
                    background-color: ${Tt.Red.Icon};
                `}}}
`,Kt=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Qt=o.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Ut.tablet} {
        grid-column: span 8;
    }

    ${Ut.mobileL} {
        grid-column: span 4;
    }
`,Yt=o(Rt.H3)`
    margin-bottom: 1rem;

    ${Ut.tablet} {
        margin-bottom: 1.5rem;
    }
`,Zt=o.div`
    display: flex;

    :first-of-type ${qt} {
        margin-top: 0;
    }
`,en=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,tn=o(Rt.H4)`
    margin-bottom: 0.5rem;
`,nn=o(Rt.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,rn=o.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${e=>"dark"===e.type?l`
                background-color: ${It[1]};

                & > span {
                    color: ${It[8]};
                }
            `:l`
            background-color: ${It[8]};
            border: 1px solid ${It[5]};

            & > span {
                color: ${It[1]};
            }
        `}
`,an=({items:o,className:l,title:c,startCol:g,colSpan:d,"data-base-indicator-testid":s,"data-testid":h="timeline"})=>{const u=e=>"string"==typeof e?n(Rt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):n(r,{children:e}),f=e=>"string"==typeof e?n(tn,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):n(r,{children:e}),p=t=>t.slice(0,2).map(((t,r)=>e(rn,Object.assign({},t,{key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),n(Rt.XSmall,{children:t.label})))),F=e=>{switch(e){case"completed":return n(a,{});case"error":return n(i,{});default:return null}};return t(Qt,Object.assign({className:l,"data-testid":h,$startCol:g,$colSpan:d},{children:[n(Yt,Object.assign({id:"timeline-title"},{children:c})),o.map(((e,r)=>{const{title:i,content:a,statuses:o,variant:l}=e,c=s?`circleindicator${r+1}_div_${s}`:"circleindicator",g=l||(0===r?"current":"upcoming-active");return t(Zt,{children:[t(Kt,{children:[n(qt,Object.assign({"data-testid":c,$variant:g},{children:F(g)})),n(Jt,{$variant:g})]}),t(en,Object.assign({className:"timeline-item-content"},{children:[f(i),o&&n(nn,{children:p(o)}),u(a)]}))]},`timeline-item-${r}`)}))]}))};export{an as Timeline};
//# sourceMappingURL=index.js.map
