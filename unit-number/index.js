import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,m="object"==typeof f&&f&&f.Object===Object&&f,y="object"==typeof self&&self&&self.Object===Object&&self,F=m||y||Function("return this")(),v=F.Symbol,$=v,S=Object.prototype,D=S.hasOwnProperty,B=S.toString,b=$?$.toStringTag:void 0;var x=function(e){var t=D.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var i=B.call(e);return r&&(t?e[b]=n:delete e[b]),i},w=Object.prototype.toString;var H=x,O=function(e){return w.call(e)},E=v?v.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?H(e):O(e)};var A=M,C=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==A(e)},_=p,z=k,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var W=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(T.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N=M,I=L;var R,j=function(e){if(!I(e))return!1;var t=N(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=F["__core-js_shared__"],P=(R=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var Z=function(e){return!!P&&P in e},U=Function.prototype.toString;var G=j,X=Z,J=L,q=function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||X(e))&&(G(e)?re:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},le=ae(Object,"create"),se=le;var ce=function(){this.__data__=se?se(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=le,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(de){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},ge=le,pe=Object.prototype.hasOwnProperty;var me=le;var ye=ce,Fe=ue,ve=fe,$e=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=ye,De.prototype.delete=Fe,De.prototype.get=ve,De.prototype.has=$e,De.prototype.set=Se;var Be=De;var be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},He=we,Oe=Array.prototype.splice;var Ee=we;var Me=we;var Ae=we;var Ce=be,ke=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},ze=function(e){return Me(this.__data__,e)>-1},Ye=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ce,Te.prototype.delete=ke,Te.prototype.get=_e,Te.prototype.has=ze,Te.prototype.set=Ye;var We=Te,Le=ae(F,"Map"),Ne=Be,Ie=We,Re=Le;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Ve;var Ze=Ve;var Ue=Ve;var Ge=Ve;var Xe=function(){this.size=0,this.__data__={hash:new Ne,map:new(Re||Ie),string:new Ne}},Je=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ze(this,e).get(e)},Ke=function(e){return Ue(this,e).has(e)},Qe=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Xe,et.prototype.delete=Je,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},st=p,ct=k,ut=v?v.prototype:void 0,dt=ut?ut.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(st(t))return lt(t,e)+"";if(ct(t))return dt?dt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ft=ht;var gt=p,pt=W,mt=at,yt=function(e){return null==e?"":ft(e)};var Ft=k;var vt=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(yt(e))},$t=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[$t(t[n++])];return n&&n==r?e:void 0};var Dt=g((function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r}));const Bt=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=bt(wt,n[xt.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},Ot={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},Et={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Mt=e=>t=>{var n;const r=t.theme,i=bt(Et,r[xt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Bt(i,e,r.options.designToken):Bt(i,e)},At=Mt("InputBoxShadow"),Ct=Mt("InputErrorBoxShadow"),kt=(Mt("ElevationBoxShadow"),Mt("Table.Header"),Mt("Table.Cell.Primary"),Mt("Table.Cell.Secondary"),Mt("Table.Cell.Selected"),Mt("Table.Cell.Hover"),Mt("Button.Danger.BackgroundColor"),Mt("Button.Danger.Hover"),Mt("Button.Danger.Primary"),Mt("Button.Danger.Border"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),_t={collections:{base:{D1:{fontFamily:kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=bt(_t,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},Yt={D1:{fontFamily:zt("D1.fontFamily"),fontSize:zt("D1.fontSize"),fontWeight:zt("D1.fontWeight"),lineHeight:zt("D1.lineHeight"),letterSpacing:zt("D1.letterSpacing")},D2:{fontFamily:zt("D2.fontFamily"),fontSize:zt("D2.fontSize"),fontWeight:zt("D2.fontWeight"),lineHeight:zt("D2.lineHeight"),letterSpacing:zt("D2.letterSpacing")},D3:{fontFamily:zt("D3.fontFamily"),fontSize:zt("D3.fontSize"),fontWeight:zt("D3.fontWeight"),lineHeight:zt("D3.lineHeight"),letterSpacing:zt("D3.letterSpacing")},D4:{fontFamily:zt("D4.fontFamily"),fontSize:zt("D4.fontSize"),fontWeight:zt("D4.fontWeight"),lineHeight:zt("D4.lineHeight"),letterSpacing:zt("D4.letterSpacing")},DBody:{fontFamily:zt("DBody.fontFamily"),fontSize:zt("DBody.fontSize"),fontWeight:zt("DBody.fontWeight"),lineHeight:zt("DBody.lineHeight"),letterSpacing:zt("DBody.letterSpacing")},H1:{fontFamily:zt("H1.fontFamily"),fontSize:zt("H1.fontSize"),fontWeight:zt("H1.fontWeight"),lineHeight:zt("H1.lineHeight"),letterSpacing:zt("H1.letterSpacing")},H2:{fontFamily:zt("H2.fontFamily"),fontSize:zt("H2.fontSize"),fontWeight:zt("H2.fontWeight"),lineHeight:zt("H2.lineHeight"),letterSpacing:zt("H2.letterSpacing")},H3:{fontFamily:zt("H3.fontFamily"),fontSize:zt("H3.fontSize"),fontWeight:zt("H3.fontWeight"),lineHeight:zt("H3.lineHeight"),letterSpacing:zt("H3.letterSpacing")},H4:{fontFamily:zt("H4.fontFamily"),fontSize:zt("H4.fontSize"),fontWeight:zt("H4.fontWeight"),lineHeight:zt("H4.lineHeight"),letterSpacing:zt("H4.letterSpacing")},H5:{fontFamily:zt("H5.fontFamily"),fontSize:zt("H5.fontSize"),fontWeight:zt("H5.fontWeight"),lineHeight:zt("H5.lineHeight"),letterSpacing:zt("H5.letterSpacing")},H6:{fontFamily:zt("H6.fontFamily"),fontSize:zt("H6.fontSize"),fontWeight:zt("H6.fontWeight"),lineHeight:zt("H6.lineHeight"),letterSpacing:zt("H6.letterSpacing")},Body:{fontFamily:zt("Body.fontFamily"),fontSize:zt("Body.fontSize"),fontWeight:zt("Body.fontWeight"),lineHeight:zt("Body.lineHeight"),letterSpacing:zt("Body.letterSpacing")},BodySmall:{fontFamily:zt("BodySmall.fontFamily"),fontSize:zt("BodySmall.fontSize"),fontWeight:zt("BodySmall.fontWeight"),lineHeight:zt("BodySmall.lineHeight"),letterSpacing:zt("BodySmall.letterSpacing")},XSmall:{fontFamily:zt("XSmall.fontFamily"),fontSize:zt("XSmall.fontSize"),fontWeight:zt("XSmall.fontWeight"),lineHeight:zt("XSmall.lineHeight"),letterSpacing:zt("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return kt.Bold;case 600:case"semibold":return kt.Semibold;case 300:case"light":return kt.Light;case 400:case"regular":return kt.Regular;default:return""}},Wt=(e,t)=>n=>{var r;const i=Yt[e].fontFamily(n),o=Yt[e].fontWeight(n);return Object.values(kt).includes(i)?c`
                font-family: ${Tt(t)||Tt(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Lt(t)||o)&&void 0!==r?r:"normal"};
        `},Lt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},It=(e,t,n=!1)=>r=>{const i=Yt[e],o=i.fontSize(r);return c`
            ${Wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Rt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Nt(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Nt(n)}
        `;var jt;!function(e){e.D1=s.h1`
        ${e=>c`
                ${It("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${It("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${It("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${It("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${It("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${It("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${It("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${It("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${It("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${It("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${It("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Rt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Vt=s.a`
    ${e=>c`
            ${It(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,Pt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=n=>{var{external:r=!1,children:i}=n,o=h(n,["external","children"]);return e(Vt,Object.assign({},o,{children:[i,r&&t(Pt,{})]}))};var Ut;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ut||(Ut={}));const Gt=s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ot.Accent.Light[1]};
        box-shadow: ${At};
    }

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?c`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ot.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ot.Validation.Red.Border};
                    box-shadow: ${Ct};
                }
            `:void 0}
`;s.input`
    ${It("Body","regular")}
    color: ${Ot.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ot.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;var Xt={exports:{}};Xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],h=u&&u[0],f=u&&u[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(r),u=o.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!s&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,F=s||0,v=c||0,$=u||0;return d?new Date(Date.UTC(p,m,g,y,F,v,$+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,v,$)):new Date(p,m,g,y,F,v,$)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Jt,qt,Kt=g(Xt.exports),Qt={exports:{}},en=g(Qt.exports=(Jt={year:0,month:1,day:2,hour:3,minute:4,second:5},qt={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=qt[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),qt[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Jt[s];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,l=i||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),tn={exports:{}};tn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},F={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var S=function(e){return e instanceof x},D=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;$[l]=t,i=l}return!r&&i&&(v=i),i||!r&&v},B=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},b=F;b.l=D,b.i=S,b.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=D(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=B(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return B(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<B(e)},y.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!b.u(t)||t,u=b.p(e),f=function(e,t){var i=b.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return b.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case l:case h:return g(F+"Hours",0);case a:return g(F+"Minutes",1);case o:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=b.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[b.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=b.p(u),p=function(e){var t=B(f);return b.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return b.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:b.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:b.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=b.p(h),m=B(r),y=(m.utcOffset()-this.utcOffset())*t,F=this-m,v=b.m(this,m);return v=(g={},g[d]=v/12,g[c]=v,g[u]=v/3,g[s]=(F-y)/6048e5,g[l]=(F-y)/864e5,g[a]=F/n,g[o]=F/t,g[i]=F/e,g)[p]||F,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=D(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return B.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,x,B),e.$i=!0),B},B.locale=D,B.isDayjs=S,B.unix=function(e){return B(1e3*e)},B.en=$[v],B.Ls=$,B.p={},B}();var nn=g(tn.exports),rn={exports:{}};rn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var on=g(rn.exports),an={exports:{}};an.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ln=g(an.exports),sn={exports:{}};sn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var cn,un=g(sn.exports);nn.extend(on),nn.extend(ln),nn.extend(un),nn.extend(Kt),nn.extend(en),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=nn(t).startOf("week");return dn(n).map((e=>hn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return hn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(nn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+nn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=nn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?nn(r):void 0,i?nn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(cn||(cn={}));const dn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},hn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},fn=[1,3,5,7,8,10,12],gn=[4,6,9,11];var pn,mn,yn,Fn;function vn({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":fn.includes(o)?Math.min(i,31).toString():gn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=nn(e,n);return nn(t,n).diff(r,"minute")},e.toDayjs=e=>e?nn(e):nn(),e.addMinutesToTime=(e,t,n="HH:mm")=>nn(e,n).add(t,"minutes").format(n)}(pn||(pn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!nn(e).isBefore(r,"day"))||!(!i||!nn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(nn(e).isValid())return e}return""}}(mn||(mn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(yn||(yn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Fn||(Fn={}));const $n=s.input`
    ${It("Body","regular")}
    color: ${Ot.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ot.Neutral[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,Sn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Dn=s(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Bn=s.div`
    display: flex;
    width: 100%;
`,bn=r.forwardRef(((r,a)=>{var{value:l,spacing:s,type:c,error:u,disabled:d,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:F="bordered"}=r,v=h(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=i();o(a,(()=>$.current),[]);const S=vn({ref:$,formatter:e=>Fn.transformWithSpaces(e,s)}),D=e=>{g&&(b()?x(e):g(e))},B=()=>{p&&p(),$&&$.current&&$.current.focus()},b=()=>"tel"===c&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=S(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?b()?Fn.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t($n,Object.assign({"data-testid":"input",ref:$,disabled:d,value:w,onChange:D,type:c,readOnly:f},v)),m&&!d&&!f&&!!l&&t(Sn,Object.assign({onClick:B,type:"button"},{children:t(Dn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===F?t(Bn,Object.assign({className:y},{children:H()})):t(Gt,Object.assign({$disabled:d,$error:u,$readOnly:f,className:y},{children:H()}))})}));s.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ot.Accent.Light[1]};
        box-shadow: ${At};
    }

    ${e=>e.$readOnly?c`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?c`
                background: ${Ot.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ot.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ot.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ot.Validation.Red.Border(e)};
                    box-shadow: ${Ct};
                }
            `:void 0}
`,s(bn)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const xn=s.div`
    position: relative;
    display: flex;
    align-items: center;

    ${It("Body","regular")}
    color: ${Ot.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ot.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return c`
                color: ${Ot.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ot.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?c`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:c`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,wn=s(xn)`
    margin-right: 0.25rem;
`,Hn=s(bn)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,On=s(Hn)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,En=s(jt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return c`
                color: ${Ot.Neutral[3]};
            `}}
`,Mn=s.div`
    display: flex;
`,An=s(jt.Body)`
    ${e=>{if(e.$inactive)return c`
                color: ${Ot.Neutral[3]};
            `}}
`,Cn=r=>{var{disabled:o,error:s,value:c,onChange:u,onBlur:d,onChangeRaw:f,onBlurRaw:g,readOnly:p,placeholder:m="00-8888"}=r,y=h(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder"]);const[F,v]=a(""),[$,S]=a(""),[D,B]=a("none"),b=i(null),x=i(null),w=i(null),H=i(F),O=i($),E=i(D),M=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),A=vn({ref:x,formatter:M}),C=vn({ref:w,formatter:M}),k=e=>{H.current=e,v(e)},_=e=>{O.current=e,S(e)},z=e=>{E.current=e,B(e)};l((()=>{"floor"===D&&3===F.length&&w.current&&w.current.focus()}),[F]),l((()=>{I(c)}),[c]);const Y=e=>{z(e.target.name),e.target.select()},T=e=>{const t=e.target.name,n=e.target.value,r=N(n);"floor"===t?(k(r),r!==F&&R(r,t)):(_(r),r!==$&&R(r,t))},W=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=A();n(),k(e),R(e,t)}else{const{nextValue:e,updateCaretPosition:n}=C();n(),_(e),R(e,t)}},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===D&&0===$.length&&x.current.focus()},N=e=>/^[0-9]$/.test(e)?Fn.padValue(e,!0):e.toLocaleUpperCase(),I=e=>{if(e!==kn)if(void 0===e||0===e.length)k(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];k("floor"===D?e:N(e)),_("unit"===D?n:N(n))}}},R=(e,t)=>{if(!u&&!f)return;const n={floor:H.current,unit:O.current};if(n[t]=e,u){const e=V(n);u(e)}f&&f([n.floor,n.unit])},j=()=>{if(!d&&!g)return;const e={floor:N(H.current),unit:N(O.current)};if(d){const t=V(e);d(t)}g&&g([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":kn},P=e=>e.split("-");return e(Gt,Object.assign({},y,{ref:b,onClick:()=>{"none"===D&&x.current&&x.current.focus()},$disabled:o,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{b.current&&b.current.contains(e.relatedTarget)||"none"!==E.current&&(z("none"),j())}},{children:[t(wn,Object.assign({"data-testid":"addon",disabled:o,$readOnly:p},{children:"#"})),p&&c?(()=>{const n=c.split("-");return e(Mn,{children:[t(An,{children:n[0]}),t(En,{children:"-"}),t(An,{children:n[1]})]})})():e(n,{children:[t(Hn,{name:"floor",maxLength:3,value:F,ref:x,onFocus:Y,onBlur:T,onChange:W,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==D||p?P(m)[0]:""}),t(En,Object.assign({$inactive:0===F.length},{children:"-"})),t(On,{name:"unit",maxLength:5,value:$,ref:w,onFocus:Y,onBlur:T,onChange:W,onKeyDown:L,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==D||p?P(m)[1]:""})]})]}))},kn="Invalid unit number";export{Cn as UnitNumberInput};
//# sourceMappingURL=index.js.map
