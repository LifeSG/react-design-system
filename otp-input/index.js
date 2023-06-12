import e,{jsxs as t,jsx as r}from"react/jsx-runtime";import n,{useRef as o,useImperativeHandle as i,useState as a,useEffect as l}from"react";import c,{css as d,keyframes as s}from"styled-components";import"react-dom";var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,g="object"==typeof self&&self&&self.Object===Object&&self,f=p||g||Function("return this")(),m=f.Symbol,b=m,y=Object.prototype,F=y.hasOwnProperty,$=y.toString,v=b?b.toStringTag:void 0;var S=function(e){var t=F.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(e){}var o=$.call(e);return n&&(t?e[v]=r:delete e[v]),o},w=Object.prototype.toString;var B=S,x=function(e){return w.call(e)},C=m?m.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":C&&C in Object(e)?B(e):x(e)};var D=H,k=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==D(e)},z=h,_=E,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var T=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(N.test(e)||!A.test(e)||null!=t&&e in Object(t))};var O=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=H,I=O;var j,V=function(e){if(!I(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=f["__core-js_shared__"],P=(j=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var R=function(e){return!!P&&P in e},M=Function.prototype.toString;var X=V,G=R,Z=O,U=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Y=Function.prototype,q=Object.prototype,J=Y.toString,Q=q.hasOwnProperty,ee=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!Z(e)||G(e))&&(X(e)?ee:K).test(U(e))},re=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var r=re(e,t);return te(r)?r:void 0},oe=ne(Object,"create"),ie=oe;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=oe,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ce){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return de.call(t,e)?t[e]:void 0},ue=oe,he=Object.prototype.hasOwnProperty;var pe=oe;var ge=ae,fe=le,me=se,be=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},ye=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=ge,Fe.prototype.delete=fe,Fe.prototype.get=me,Fe.prototype.has=be,Fe.prototype.set=ye;var $e=Fe;var ve=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var r=e.length;r--;)if(Se(e[r][0],t))return r;return-1},Be=we,xe=Array.prototype.splice;var Ce=we;var He=we;var De=we;var ke=ve,Ee=function(e){var t=this.__data__,r=Be(t,e);return!(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=Ce(t,e);return r<0?void 0:t[r][1]},_e=function(e){return He(this.__data__,e)>-1},Ae=function(e,t){var r=this.__data__,n=De(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=ke,Ne.prototype.delete=Ee,Ne.prototype.get=ze,Ne.prototype.has=_e,Ne.prototype.set=Ae;var Te=Ne,Oe=ne(f,"Map"),We=$e,Ie=Te,je=Oe;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var r=e.__data__;return Ve(t)?r["string"==typeof t?"string":"hash"]:r.map},Pe=Le;var Re=Le;var Me=Le;var Xe=Le;var Ge=function(){this.size=0,this.__data__={hash:new We,map:new(je||Ie),string:new We}},Ze=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Re(this,e).get(e)},Ke=function(e){return Me(this,e).has(e)},Ye=function(e,t){var r=Xe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qe.prototype.clear=Ge,qe.prototype.delete=Ze,qe.prototype.get=Ue,qe.prototype.has=Ke,qe.prototype.set=Ye;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Qe.Cache||Je),r}Qe.Cache=Je;var et=Qe;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,nt=function(e){var t=et(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,r,n,o){t.push(n?o.replace(rt,"$1"):r||e)})),t}));var ot=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},it=h,at=E,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(at(t))return ct?ct.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},st=dt;var ut=h,ht=T,pt=nt,gt=function(e){return null==e?"":st(e)};var ft=E;var mt=function(e,t){return ut(e)?e:ht(e,t)?[e]:pt(gt(e))},bt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yt=function(e,t){for(var r=0,n=(t=mt(t,e)).length;null!=e&&r<n;)e=e[bt(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:yt(e,t);return void 0===n?r:n};const $t=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,vt=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(131, 151, 252, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const r=t.theme,n=vt(wt,r[St.colorScheme]);return r.options&&r.options.color?$t(n,e,r.options.color):$t(n,e)},xt={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}},Ct={collections:{base:{InputBoxShadow:d`
        inset 0 0 6px 1px ${xt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${xt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${xt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:d`
        inset 0 0 6px 1px ${xt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${xt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${xt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Ht=e=>t=>{const r=t.theme,n=vt(Ct,r[St.designTokenScheme]);return r.options?.designToken?$t(n,e,r.options.designToken):$t(n,e)},Dt=Ht("InputBoxShadow"),kt=Ht("InputErrorBoxShadow"),Et=(Ht("ElevationBoxShadow"),Ht("Table.Header"),Ht("Table.Cell.Primary"),Ht("Table.Cell.Secondary"),Ht("Table.Cell.Selected"),Ht("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),zt={collections:{base:{D1:{fontFamily:Et.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Et.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Et.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Et.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Et.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Et.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Et.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Et.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Et.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Et.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Et.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Et.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Et.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Et.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_t=e=>t=>{const r=t.theme,n=vt(zt,r[St.textStyleScheme]);return r.options&&r.options.textStyle?$t(n,e,r.options.textStyle):$t(n,e)},At={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},Nt=e=>{switch(e){case 700:case"bold":return Et.Bold;case 600:case"semibold":return Et.Semibold;case 300:case"light":return Et.Light;case 400:case"regular":return Et.Regular;default:return""}},Tt=(e,t)=>r=>{const n=At[e].fontFamily(r),o=At[e].fontWeight(r);return Object.values(Et).includes(n)?d`
                font-family: ${Nt(t)||Nt(o)||n};
                font-weight: normal !important;
            `:d`
            font-family: ${n};
            font-weight: ${(Ot(t)||o)??"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=(e,t,r=!1)=>n=>{const o=At[e],i=o.fontSize(n);return d`
            ${Tt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(n)||0}rem !important;
            ${d`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},It=(e=!1,t=!1)=>t?d`
            display: block;
        `:e?d`
            display: inline;
        `:d`
            display: block;
        `;var jt,Vt={};Object.defineProperty(Vt,"__esModule",{value:!0});var Lt=e;const Pt=e=>Lt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Lt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Rt;Pt.displayName="ExternalIcon",jt=Vt.ExternalIcon=Pt,function(e){e.D1=c.h1`
        ${e=>d`
                ${Wt("D1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>d`
                ${Wt("D2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>d`
                ${Wt("D3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>d`
                ${Wt("D4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>d`
                ${Wt("DBody",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>d`
                ${Wt("H1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>d`
                ${Wt("H2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>d`
                ${Wt("H3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>d`
                ${Wt("H4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>d`
                ${Wt("H5",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>d`
                ${Wt("H6",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>d`
                ${Wt("Body",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>d`
                ${Wt("BodySmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>d`
                ${Wt("XSmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${It(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Gt({...e,textStyle:"Body"}),Small:e=>Gt({...e,textStyle:"BodySmall"})}}(Rt||(Rt={}));const Mt=c.a`
    ${e=>d`
            ${Wt(e.textStyle,e.weight)}
            color: ${xt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xt.Secondary};

                svg {
                    color: ${xt.Secondary};
                }
            }
        `}
`,Xt=c(jt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gt=({external:e=!1,children:n,...o})=>t(Mt,{...o,children:[n,e&&r(Xt,{})]});var Zt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Zt||(Zt={}));const Ut=c.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${xt.Neutral[5]};
    border-radius: 4px;
    background: ${xt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${xt.Accent.Light[1]};
        box-shadow: ${Dt};
    }

    ${e=>e.$readOnly?d`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?d`
                background: ${xt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${xt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${xt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${xt.Validation.Red.Border};
                    box-shadow: ${kt};
                }
            `:void 0}
`;var Kt;c.input`
    ${Wt("Body","regular")}
    color: ${xt.Neutral[1]};
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
        color: ${xt.Neutral[3]};
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
`,function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let o=0;t>r&&(o=Math.floor((t-r)/8));const i=n+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Kt||(Kt={}));var Yt,qt={};Object.defineProperty(qt,"__esModule",{value:!0});var Jt=e;const Qt=e=>Jt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jt.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Qt.displayName="CrossIcon",Yt=qt.CrossIcon=Qt;const er=c.input`
    ${Wt("Body","regular")}
    color: ${xt.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
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
        color: ${xt.Neutral[3]};
    }

    ${e=>"number"===e.type?d`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?d`
                cursor: not-allowed;
            `:void 0}
`,tr=c.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${xt.Neutral[3]};
    background-color: transparent;
    border: none;
`,rr=c(Yt)`
    height: 1.25rem;
    width: 1.25rem;
`,nr=n.forwardRef((({value:e,spacing:n,type:a,error:l,disabled:c,readOnly:d,onChange:s,onClear:u,allowClear:h=!1,className:p,...g},f)=>{const m=o();i(f,(()=>m.current),[]);const b=()=>"tel"===a&&n,y=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,s(e),t.value=r},F=e?(e=>e?b()?Kt.transformWithSpaces(e,n):e:"")(e):e;return t(Ut,{$disabled:c,$error:l,$readOnly:d,className:p,children:[r(er,{"data-testid":"input",ref:m,disabled:c,value:F,onChange:e=>{s&&(b()?y(e):s(e))},type:a,readOnly:d,...g}),h&&!c&&!d&&!!e&&r(tr,{onClick:()=>{u&&u(),m&&m.current&&m.current.focus()},type:"button",children:r(rr,{})})]})})),or={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ir=e=>Object.keys(or).reduce(((t,r)=>{const n=or[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ar=ir("max-width"),lr=(ir("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),cr=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,dr=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||xt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${cr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sr=c(dr)`
    animation-delay: -0.45s;
`,ur=c(dr)`
    animation-delay: -0.3s;
`,hr=c(dr)`
    animation-delay: -0.15s;
`,pr=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${xt.Neutral[8](e)};
                    border: 1px solid ${xt.Primary(e)};

                    span {
                        color: ${xt.Primary(e)};
                    }
                `;case"light":return d`
                    background-color: ${xt.Neutral[8](e)};
                    border: 1px solid ${xt.Neutral[5](e)};

                    span {
                        color: ${xt.Primary(e)};
                    }
                `;case"disabled":return d`
                    background-color: ${xt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${xt.Neutral[3](e)};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${xt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${xt.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${xt.Primary(e)};
                    border: 1px solid transparent;

                    ${ar.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${xt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    span {
                        ${Wt("H5","semibold")}
                    }

                    ${ar.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    span {
                        ${Wt("H4","semibold")}
                    }

                    ${ar.mobileS} {
                        height: auto;
                    }
                `}
`,gr=c((({color:e,className:n,size:o=18})=>t(lr,{className:n,$size:o,$color:e,children:[r(dr,{id:"inner1",$size:o-2,$borderWidth:2}),r(sr,{id:"inner2",$size:o-2,$borderWidth:2}),r(ur,{id:"inner3",$size:o-2,$borderWidth:2}),r(hr,{id:"inner4",$size:o-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=xt.Primary(e);break;case"disabled":t=xt.Neutral[3](e);break;default:t=xt.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,fr={Default:n.forwardRef(((e,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default"};return t(pr,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[a&&r(gr,{...d}),r("span",{children:o})]})})),Small:n.forwardRef(((e,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small"};return t(pr,{ref:n,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[a&&r(gr,{...d,size:16}),r("span",{children:o})]})}))},mr=c.div`
    display: flex;
    flex-direction: column;
`,br=c.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,yr=c(nr)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }
`,Fr=c(fr.Small)`
    margin: 2rem 0rem;
`;var $r={};Object.defineProperty($r,"__esModule",{value:!0});var vr=e;const Sr=e=>vr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:vr.jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});Sr.displayName="ICircleFillIcon",$r.ICircleFillIcon=Sr,c.div`
    border-radius: 0.5rem;
    background: ${xt.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=d`
                transition: none;
            `),t}}
`;c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${ar.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const wr=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&d`
                background-color: ${xt.Neutral[7]};
            `}
    }
`,Br=n.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:n="none",type:o="button",...i},a)=>r(wr,{ref:a,$outline:n,$highlight:t,type:o,...i,children:e}))),xr=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${xt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ar.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Cr=c(Br)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${xt.Accent.Light[1]};
    }
`,Hr=c(Yt)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${xt.Neutral[4]};
`,Dr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?d`
            visibility: visible;
            opacity: 1;
            transition: ${Dr};
            z-index: 2;
        `:d`
            visibility: hidden;
            opacity: 0;
            transition: ${Dr};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${ar.mobileL} {
        display: none;
    }
`,c((({id:e="modal-box",children:n,onClose:o,showCloseButton:i=!0,...a})=>t(xr,{"data-testid":e,...a,onClick:e=>{e.stopPropagation()},children:[i&&r(Cr,{onClick:o,"data-testid":"close-button",focusHighlight:!1,children:r(Hr,{})}),n]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,c.div`
    position: relative;
    width: fit-content;
`,c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,c.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${xt.Primary};
    }
`,c.div`
    display: inline;
    position: relative;
    width: fit-content;
`,c.label`
    ${Wt("H5","semibold")}

    color: ${e=>e.disabled?xt.Neutral[4](e):xt.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;const kr=c(Rt.H6)`
    color: ${xt.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;c(Rt.BodySmall)`
    color: ${e=>e.disabled?xt.Neutral[4](e):xt.Neutral[3](e)};
`;const Er=e=>r(kr,{weight:"semibold",...e}),zr=({id:e,value:n=[],"data-testid":i,className:c,cooldownDuration:d,actionButtonProps:s,errorMessage:u,numOfInput:h,onChange:p,onCooldownStart:g,onCooldownEnd:f,...m})=>{const{disabled:b,onClick:y,styleType:F="secondary",...$}=s??{},v=o([]),S=o(p),[w,B]=a(new Array(h).fill("")),[x,C]=a(d),[H,D]=a(new Date);l((()=>(v?.current[0]?.focus(),document.addEventListener("paste",z),()=>document.removeEventListener("paste",z))),[]),l((()=>{if(0!==d){g&&g();const e=N();return()=>e()}}),[H]),l((()=>{S.current=p}),[p]),l((()=>{n.length===h&&B(n)}),[n]);const k=e=>t=>{const r=t.target.value.replace(/[^0-9]/g,"");if(_(r)){const t=[...w];t[e]=r.substring(r.length-1),v.current[e+1]?.focus(),B(t),p&&p(t)}},E=e=>t=>{const{key:r,code:n}=t;if("Backspace"===r||"Backspace"===n){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",v.current[e-1]?.focus()),B(t),p&&p(t)}},z=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&_(t,h)?(B(r),S.current&&S.current(r)):e.preventDefault()},_=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),A=()=>{const e=Date.now(),t=1e3*d;return e<H.valueOf()+t},N=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*d,n=Math.ceil((H.valueOf()+r-t)/1e3);C(n),n<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},T=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return t(mr,{id:e,"data-testid":i,className:c,children:[r(br,{children:w.map(((t,n)=>r(yr,{id:T(n,"otp-input",e),"data-testid":T(n,"otp-input",i),ref:e=>v.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!u,onChange:k(n),onKeyDown:E(n),...m},n)))}),u&&r(Er,{children:u}),r(Fr,{styleType:F,...$,onClick:e=>{B(new Array(h).fill("")),A()||(D(new Date),C(d)),y&&y(e)},disabled:b||A(),children:$.children?$.children:"Resend OTP"+(x?` in ${x} second${x>1?"s":""}`:"")})]})};export{zr as OtpInput};
//# sourceMappingURL=index.js.map
