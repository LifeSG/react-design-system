import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r,{useRef as o,useImperativeHandle as i}from"react";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof c&&c&&c.Object===Object&&c,g="object"==typeof self&&self&&self.Object===Object&&self,p=d||g||Function("return this")(),u=p.Symbol,f=u,s=Object.prototype,y=s.hasOwnProperty,m=s.toString,S=f?f.toStringTag:void 0;var F=function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var o=m.call(e);return r&&(t?e[S]=n:delete e[S]),o},v=Object.prototype.toString;var B=F,b=function(e){return v.call(e)},$=u?u.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?B(e):b(e)};var w=H,D=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||D(e)&&"[object Symbol]"==w(e)},x=h,_=C,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var k=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(E.test(e)||!z.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=H,W=A;var j,T=function(e){if(!W(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=p["__core-js_shared__"],I=(j=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var L=function(e){return!!I&&I in e},R=Function.prototype.toString;var N=T,P=L,M=A,X=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,Z=Function.prototype,U=Object.prototype,q=Z.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!M(e)||P(e))&&(N(e)?K:G).test(X(e))},Y=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,ae=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ae.call(t,e)?t[e]:void 0},ce=te,he=Object.prototype.hasOwnProperty;var de=te;var ge=re,pe=oe,ue=le,fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:he.call(t,e)},se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=ge,ye.prototype.delete=pe,ye.prototype.get=ue,ye.prototype.has=fe,ye.prototype.set=se;var me=ye;var Se=function(){this.__data__=[],this.size=0};var Fe=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(Fe(e[n][0],t))return n;return-1},Be=ve,be=Array.prototype.splice;var $e=ve;var He=ve;var we=ve;var De=Se,Ce=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():be.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=$e(t,e);return n<0?void 0:t[n][1]},_e=function(e){return He(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=we(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=De,Ee.prototype.delete=Ce,Ee.prototype.get=xe,Ee.prototype.has=_e,Ee.prototype.set=ze;var ke=Ee,Ae=ee(p,"Map"),Oe=me,We=ke,je=Ae;var Te=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Te(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Ve;var Le=Ve;var Re=Ve;var Ne=Ve;var Pe=function(){this.size=0,this.__data__={hash:new Oe,map:new(je||We),string:new Oe}},Me=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Le(this,e).get(e)},Ge=function(e){return Re(this,e).has(e)},Ze=function(e,t){var n=Ne(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Pe,Ue.prototype.delete=Me,Ue.prototype.get=Xe,Ue.prototype.has=Ge,Ue.prototype.set=Ze;var qe=Ue;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,et=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,o){t.push(r?o.replace(Ye,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},nt=h,rt=C,ot=u?u.prototype:void 0,it=ot?ot.toString:void 0;var at=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=at;var ct=h,ht=k,dt=et,gt=function(e){return null==e?"":lt(e)};var pt=C;var ut=function(e,t){return ct(e)?e:ht(e,t)?[e]:dt(gt(e))},ft=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var st=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[ft(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:st(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var Ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ft||(Ft={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=St(vt,n[Ft.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},bt=(Bt("Brand.1"),Bt("Brand.2"),Bt("Brand.3"),Bt("Brand.4"),Bt("Brand.5"),Bt("Brand.6"),Bt("Primary")),$t=(Bt("PrimaryDark"),Bt("Secondary")),Ht={Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},wt={1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Dt={Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Ct={Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")},xt={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${Ct.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${Ct.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${Ct.Elevation}
 `}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=St(xt,n[Ft.designTokenScheme]);return n.options?.designToken?mt(r,e,n.options.designToken):mt(r,e)},zt=_t("InputBoxShadow"),Et=_t("InputErrorBoxShadow"),kt=(_t("ElevationBoxShadow"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),At={collections:{base:{D1:{fontFamily:kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ot=e=>t=>{const n=t.theme,r=St(At,n[Ft.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},Wt={D1:{fontFamily:Ot("D1.fontFamily"),fontSize:Ot("D1.fontSize"),fontWeight:Ot("D1.fontWeight"),lineHeight:Ot("D1.lineHeight"),letterSpacing:Ot("D1.letterSpacing")},D2:{fontFamily:Ot("D2.fontFamily"),fontSize:Ot("D2.fontSize"),fontWeight:Ot("D2.fontWeight"),lineHeight:Ot("D2.lineHeight"),letterSpacing:Ot("D2.letterSpacing")},D3:{fontFamily:Ot("D3.fontFamily"),fontSize:Ot("D3.fontSize"),fontWeight:Ot("D3.fontWeight"),lineHeight:Ot("D3.lineHeight"),letterSpacing:Ot("D3.letterSpacing")},D4:{fontFamily:Ot("D4.fontFamily"),fontSize:Ot("D4.fontSize"),fontWeight:Ot("D4.fontWeight"),lineHeight:Ot("D4.lineHeight"),letterSpacing:Ot("D4.letterSpacing")},DBody:{fontFamily:Ot("DBody.fontFamily"),fontSize:Ot("DBody.fontSize"),fontWeight:Ot("DBody.fontWeight"),lineHeight:Ot("DBody.lineHeight"),letterSpacing:Ot("DBody.letterSpacing")},H1:{fontFamily:Ot("H1.fontFamily"),fontSize:Ot("H1.fontSize"),fontWeight:Ot("H1.fontWeight"),lineHeight:Ot("H1.lineHeight"),letterSpacing:Ot("H1.letterSpacing")},H2:{fontFamily:Ot("H2.fontFamily"),fontSize:Ot("H2.fontSize"),fontWeight:Ot("H2.fontWeight"),lineHeight:Ot("H2.lineHeight"),letterSpacing:Ot("H2.letterSpacing")},H3:{fontFamily:Ot("H3.fontFamily"),fontSize:Ot("H3.fontSize"),fontWeight:Ot("H3.fontWeight"),lineHeight:Ot("H3.lineHeight"),letterSpacing:Ot("H3.letterSpacing")},H4:{fontFamily:Ot("H4.fontFamily"),fontSize:Ot("H4.fontSize"),fontWeight:Ot("H4.fontWeight"),lineHeight:Ot("H4.lineHeight"),letterSpacing:Ot("H4.letterSpacing")},H5:{fontFamily:Ot("H5.fontFamily"),fontSize:Ot("H5.fontSize"),fontWeight:Ot("H5.fontWeight"),lineHeight:Ot("H5.lineHeight"),letterSpacing:Ot("H5.letterSpacing")},H6:{fontFamily:Ot("H6.fontFamily"),fontSize:Ot("H6.fontSize"),fontWeight:Ot("H6.fontWeight"),lineHeight:Ot("H6.lineHeight"),letterSpacing:Ot("H6.letterSpacing")},Body:{fontFamily:Ot("Body.fontFamily"),fontSize:Ot("Body.fontSize"),fontWeight:Ot("Body.fontWeight"),lineHeight:Ot("Body.lineHeight"),letterSpacing:Ot("Body.letterSpacing")},BodySmall:{fontFamily:Ot("BodySmall.fontFamily"),fontSize:Ot("BodySmall.fontSize"),fontWeight:Ot("BodySmall.fontWeight"),lineHeight:Ot("BodySmall.lineHeight"),letterSpacing:Ot("BodySmall.letterSpacing")},XSmall:{fontFamily:Ot("XSmall.fontFamily"),fontSize:Ot("XSmall.fontSize"),fontWeight:Ot("XSmall.fontWeight"),lineHeight:Ot("XSmall.lineHeight"),letterSpacing:Ot("XSmall.letterSpacing")}},jt=e=>{switch(e){case 700:case"bold":return kt.Bold;case 600:case"semibold":return kt.Semibold;case 300:case"light":return kt.Light;case 400:case"regular":return kt.Regular;default:return""}},Tt=(e,t)=>n=>{const r=Wt[e].fontFamily(n),o=Wt[e].fontWeight(n);return Object.values(kt).includes(r)?l`
                font-family: ${jt(t)||jt(o)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Vt(t)||o)??"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},It=(e,t,n=!1)=>r=>{const o=Wt[e],i=o.fontSize(r);return l`
            ${Tt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Lt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `;var Rt,Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var Pt=e;const Mt=e=>Pt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Pt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Xt;Mt.displayName="ExternalIcon",Rt=Nt.ExternalIcon=Mt,function(e){e.D1=a.h1`
        ${e=>l`
                ${It("D1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D2=a.h1`
        ${e=>l`
                ${It("D2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D3=a.h1`
        ${e=>l`
                ${It("D3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D4=a.h1`
        ${e=>l`
                ${It("D4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.DBody=a.h1`
        ${e=>l`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H1=a.h1`
        ${e=>l`
                ${It("H1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H2=a.h2`
        ${e=>l`
                ${It("H2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H3=a.h3`
        ${e=>l`
                ${It("H3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H4=a.h4`
        ${e=>l`
                ${It("H4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H5=a.h5`
        ${e=>l`
                ${It("H5",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H6=a.h6`
        ${e=>l`
                ${It("H6",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Body=a.p`
        ${e=>l`
                ${It("Body",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=a.p`
        ${e=>l`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=a.span`
        ${e=>l`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ut({...e,textStyle:"Body"}),Small:e=>Ut({...e,textStyle:"BodySmall"})}}(Xt||(Xt={}));const Gt=a.a`
    ${e=>l`
            ${It(e.textStyle,e.weight)}
            color: ${bt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t};

                svg {
                    color: ${$t};
                }
            }
        `}
`,Zt=a(Rt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ut=({external:e=!1,children:r,...o})=>t(Gt,{...o,children:[r,e&&n(Zt,{})]});var qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(qt||(qt={}));const Jt=a.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${wt[5]};
    border-radius: 4px;
    background: ${wt[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Light[1]};
        box-shadow: ${zt};
    }

    ${e=>e.$readOnly?l`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?l`
                background: ${wt[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${wt[5]};
                    box-shadow: none;
                }
            `:e.$error?l`
                border: 1px solid ${Dt.Red.Border};

                :focus-within {
                    border: 1px solid ${Dt.Red.Border};
                    box-shadow: ${Et};
                }
            `:void 0}
`;var Kt;a.input`
    ${It("Body","regular")}
    color: ${wt[1]};
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
        color: ${wt[3]};
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
`,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Kt||(Kt={}));var Qt,Yt={};Object.defineProperty(Yt,"__esModule",{value:!0});var en=e;const tn=e=>en.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:en.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});tn.displayName="CrossIcon",Qt=Yt.CrossIcon=tn;const nn=a.input`
    ${It("Body","regular")}
    color: ${wt[1]};

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
        color: ${wt[3]};
    }

    ${e=>"number"===e.type?l`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?l`
                cursor: not-allowed;
            `:void 0}
`,rn=a.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${wt[3]};
    background-color: transparent;
    border: none;
`,on=a(Qt)`
    height: 1.25rem;
    width: 1.25rem;
`,an=r.forwardRef((({value:e,spacing:r,type:a,error:l,disabled:c,readOnly:h,onChange:d,onClear:g,allowClear:p=!1,className:u,...f},s)=>{const y=o();i(s,(()=>y.current),[]);const m=()=>"tel"===a&&r,S=e=>{const t=e.target,n=t.value,r=t.value.replace(/\s/g,"");t.value=r,d(e),t.value=n},F=e?(e=>e?m()?Kt.transformWithSpaces(e,r):e:"")(e):e;return t(Jt,{$disabled:c,$error:l,$readOnly:h,className:u,children:[n(nn,{"data-testid":"input",ref:y,disabled:c,value:F,onChange:e=>{d&&(m()?S(e):d(e))},type:a,readOnly:h,...f}),p&&!c&&!h&&!!e&&n(rn,{onClick:()=>{g&&g(),y&&y.current&&y.current.focus()},type:"button",children:n(on,{})})]})}));export{an as Input};
//# sourceMappingURL=index.js.map
