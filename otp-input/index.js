import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as s}from"react";import l,{keyframes as d,css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,v="object"==typeof self&&self&&self.Object===Object&&self,$=y||v||Function("return this")(),b=$.Symbol,F=b,S=Object.prototype,D=S.hasOwnProperty,B=S.toString,x=F?F.toStringTag:void 0;var w=function(e){var t=D.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var i=B.call(e);return r&&(t?e[x]=n:delete e[x]),i},H=Object.prototype.toString;var O=w,E=function(e){return H.call(e)},k=b?b.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?O(e):E(e)};var C=M,z=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==C(e)},T=m,_=A,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var N=function(e,t){if(T(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(W.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},I=M,j=L;var P,R=function(e){if(!j(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=$["__core-js_shared__"],Z=(P=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var U=function(e){return!!Z&&Z in e},X=Function.prototype.toString;var G=R,J=U,q=L,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ie=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(e){return!(!q(e)||J(e))&&(G(e)?ie:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var se=function(e,t){var n=ae(e,t);return oe(n)?n:void 0},le=se(Object,"create"),de=le;var ce=function(){this.__data__=de?de(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=le,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=le,me=Object.prototype.hasOwnProperty;var ye=le;var ve=ce,$e=ue,be=ge,Fe=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=ve,De.prototype.delete=$e,De.prototype.get=be,De.prototype.has=Fe,De.prototype.set=Se;var Be=De;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},Oe=He,Ee=Array.prototype.splice;var ke=He;var Me=He;var Ce=He;var ze=xe,Ae=function(e){var t=this.__data__,n=Oe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},Te=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},_e=function(e){return Me(this.__data__,e)>-1},Ye=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function We(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}We.prototype.clear=ze,We.prototype.delete=Ae,We.prototype.get=Te,We.prototype.has=_e,We.prototype.set=Ye;var Ne=We,Le=se($,"Map"),Ie=Be,je=Ne,Pe=Le;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Ze=Ve;var Ue=Ve;var Xe=Ve;var Ge=Ve;var Je=function(){this.size=0,this.__data__={hash:new Ie,map:new(Pe||je),string:new Ie}},qe=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ue(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},et=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Je,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var it=rt;var ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/\\(\\)?/g,st=function(e){var t=it(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ot,(function(e,n,r,i){t.push(r?i.replace(at,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},dt=m,ct=A,ut=b?b.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(dt(t))return lt(t,e)+"";if(ct(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},gt=ft;var pt=m,mt=N,yt=st,vt=function(e){return null==e?"":gt(e)};var $t=A;var bt=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(vt(e))},Ft=function(e){if("string"==typeof e||$t(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var n=0,r=(t=bt(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0};var Dt=p((function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r}));const Bt=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ot=e=>t=>{const n=t.theme,r=xt(Ht,n[wt.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},Et={Brand:{1:Ot("Brand.1"),2:Ot("Brand.2"),3:Ot("Brand.3"),4:Ot("Brand.4"),5:Ot("Brand.5"),6:Ot("Brand.6")},Primary:Ot("Primary"),PrimaryDark:Ot("PrimaryDark"),Secondary:Ot("Secondary"),Accent:{Light:{1:Ot("Accent.Light.1"),2:Ot("Accent.Light.2"),3:Ot("Accent.Light.3"),4:Ot("Accent.Light.4"),5:Ot("Accent.Light.5"),6:Ot("Accent.Light.6")},Dark:{1:Ot("Accent.Dark.1"),2:Ot("Accent.Dark.2"),3:Ot("Accent.Dark.3")}},Neutral:{1:Ot("Neutral.1"),2:Ot("Neutral.2"),3:Ot("Neutral.3"),4:Ot("Neutral.4"),5:Ot("Neutral.5"),6:Ot("Neutral.6"),7:Ot("Neutral.7"),8:Ot("Neutral.8")},Validation:{Green:{Text:Ot("Validation.Green.Text"),Icon:Ot("Validation.Green.Icon"),Border:Ot("Validation.Green.Border"),Background:Ot("Validation.Green.Background")},Orange:{Text:Ot("Validation.Orange.Text"),Icon:Ot("Validation.Orange.Icon"),Border:Ot("Validation.Orange.Border"),Background:Ot("Validation.Orange.Background"),Badge:Ot("Validation.Orange.Badge")},Red:{Text:Ot("Validation.Red.Text"),Icon:Ot("Validation.Red.Icon"),Border:Ot("Validation.Red.Border"),Background:Ot("Validation.Red.Background")},Blue:{Text:Ot("Validation.Blue.Text"),Icon:Ot("Validation.Blue.Icon"),Border:Ot("Validation.Blue.Border"),Background:Ot("Validation.Blue.Background")}},Shadow:{Accent:Ot("Shadow.Accent"),Red:Ot("Shadow.Red"),Elevation:Ot("Shadow.Elevation")}},kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mt=e=>Object.keys(kt).reduce(((t,n)=>{const r=kt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ct=Mt("max-width"),zt=(Mt("min-width"),l.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),At=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Tt=l.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Et.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${At} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_t=l(Tt)`
    animation-delay: -0.45s;
`,Yt=l(Tt)`
    animation-delay: -0.3s;
`,Wt=l(Tt)`
    animation-delay: -0.15s;
`,Nt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Lt={collections:{base:{D1:{fontFamily:Nt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},It=e=>t=>{const n=t.theme,r=xt(Lt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},jt={D1:{fontFamily:It("D1.fontFamily"),fontSize:It("D1.fontSize"),fontWeight:It("D1.fontWeight"),lineHeight:It("D1.lineHeight"),letterSpacing:It("D1.letterSpacing")},D2:{fontFamily:It("D2.fontFamily"),fontSize:It("D2.fontSize"),fontWeight:It("D2.fontWeight"),lineHeight:It("D2.lineHeight"),letterSpacing:It("D2.letterSpacing")},D3:{fontFamily:It("D3.fontFamily"),fontSize:It("D3.fontSize"),fontWeight:It("D3.fontWeight"),lineHeight:It("D3.lineHeight"),letterSpacing:It("D3.letterSpacing")},D4:{fontFamily:It("D4.fontFamily"),fontSize:It("D4.fontSize"),fontWeight:It("D4.fontWeight"),lineHeight:It("D4.lineHeight"),letterSpacing:It("D4.letterSpacing")},DBody:{fontFamily:It("DBody.fontFamily"),fontSize:It("DBody.fontSize"),fontWeight:It("DBody.fontWeight"),lineHeight:It("DBody.lineHeight"),letterSpacing:It("DBody.letterSpacing")},H1:{fontFamily:It("H1.fontFamily"),fontSize:It("H1.fontSize"),fontWeight:It("H1.fontWeight"),lineHeight:It("H1.lineHeight"),letterSpacing:It("H1.letterSpacing")},H2:{fontFamily:It("H2.fontFamily"),fontSize:It("H2.fontSize"),fontWeight:It("H2.fontWeight"),lineHeight:It("H2.lineHeight"),letterSpacing:It("H2.letterSpacing")},H3:{fontFamily:It("H3.fontFamily"),fontSize:It("H3.fontSize"),fontWeight:It("H3.fontWeight"),lineHeight:It("H3.lineHeight"),letterSpacing:It("H3.letterSpacing")},H4:{fontFamily:It("H4.fontFamily"),fontSize:It("H4.fontSize"),fontWeight:It("H4.fontWeight"),lineHeight:It("H4.lineHeight"),letterSpacing:It("H4.letterSpacing")},H5:{fontFamily:It("H5.fontFamily"),fontSize:It("H5.fontSize"),fontWeight:It("H5.fontWeight"),lineHeight:It("H5.lineHeight"),letterSpacing:It("H5.letterSpacing")},H6:{fontFamily:It("H6.fontFamily"),fontSize:It("H6.fontSize"),fontWeight:It("H6.fontWeight"),lineHeight:It("H6.lineHeight"),letterSpacing:It("H6.letterSpacing")},Body:{fontFamily:It("Body.fontFamily"),fontSize:It("Body.fontSize"),fontWeight:It("Body.fontWeight"),lineHeight:It("Body.lineHeight"),letterSpacing:It("Body.letterSpacing")},BodySmall:{fontFamily:It("BodySmall.fontFamily"),fontSize:It("BodySmall.fontSize"),fontWeight:It("BodySmall.fontWeight"),lineHeight:It("BodySmall.lineHeight"),letterSpacing:It("BodySmall.letterSpacing")},XSmall:{fontFamily:It("XSmall.fontFamily"),fontSize:It("XSmall.fontSize"),fontWeight:It("XSmall.fontWeight"),lineHeight:It("XSmall.lineHeight"),letterSpacing:It("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Nt.Bold;case 600:case"semibold":return Nt.Semibold;case 300:case"light":return Nt.Light;case 400:case"regular":return Nt.Regular;default:return""}},Rt=(e,t)=>n=>{var r;const i=jt[e].fontFamily(n),o=jt[e].fontWeight(n);return Object.values(Nt).includes(i)?c`
                font-family: ${Pt(t)||Pt(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Vt(t)||o)&&void 0!==r?r:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Zt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ut=(e,t,n=!1)=>r=>{const i=jt[e],o=i.fontSize(r);return c`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Zt(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Zt(n)}
        `;var Gt;!function(e){e.D1=l.h1`
        ${e=>c`
                ${Ut("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>c`
                ${Ut("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>c`
                ${Ut("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>c`
                ${Ut("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>c`
                ${Ut("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>c`
                ${Ut("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>c`
                ${Ut("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>c`
                ${Ut("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>c`
                ${Ut("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>c`
                ${Ut("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>c`
                ${Ut("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>c`
                ${Ut("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>c`
                ${Ut("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>c`
                ${Ut("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gt||(Gt={}));const Jt=l.a`
    ${e=>c`
            ${Ut(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,qt=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Kt=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(Jt,Object.assign({},o,{children:[i,r&&t(qt,{})]}))};var Qt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qt||(Qt={}));const en={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Et.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Et.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Et.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},tn=e=>t=>{var n;const r=t.theme,i=xt(en,r[wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Bt(i,e,r.options.designToken):Bt(i,e)},nn={InputBoxShadow:tn("InputBoxShadow"),InputErrorBoxShadow:tn("InputErrorBoxShadow"),ElevationBoxShadow:tn("ElevationBoxShadow"),Table:{Header:tn("Table.Header"),Cell:{Primary:tn("Table.Cell.Primary"),Secondary:tn("Table.Cell.Secondary"),Selected:tn("Table.Cell.Selected"),Hover:tn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:tn("Button.Danger.BackgroundColor"),Hover:tn("Button.Danger.Hover"),Primary:tn("Button.Danger.Primary"),Border:tn("Button.Danger.Border")}}},rn=l.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?nn.Button.Danger.Border:Et.Primary};

                    span {
                        color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Et.Primary};
                    }
                `;case"light":return c`
                    background-color: ${Et.Neutral[8]};
                    border: 1px solid ${Et.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Et.Primary};
                    }
                `;case"disabled":return c`
                    background-color: ${Et.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Et.Neutral[3]};
                    }
                `;case"link":return c`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?nn.Button.Danger.Hover:Et.Secondary};
                        }
                    }
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?nn.Button.Danger.BackgroundColor:Et.Primary};
                    border: 1px solid transparent;

                    ${Ct.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Et.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?c`
                    height: 2.5rem;
                    span {
                        ${Ut("H5","semibold")}
                    }

                    ${Ct.mobileS} {
                        height: auto;
                    }
                `:c`
                    height: 3rem;
                    span {
                        ${Ut("H4","semibold")}
                    }

                    ${Ct.mobileS} {
                        height: auto;
                    }
                `}
`,on=l((({color:n,className:r,size:i=18})=>e(zt,Object.assign({className:r,$size:i,$color:n},{children:[t(Tt,{id:"inner1",$size:i-2,$borderWidth:2}),t(_t,{id:"inner2",$size:i-2,$borderWidth:2}),t(Yt,{id:"inner3",$size:i-2,$borderWidth:2}),t(Wt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?nn.Button.Danger.Primary:Et.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Et.Neutral[3](e);break;default:t=Et.Neutral[8](e)}return c`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,an={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(rn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(on,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(rn,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:o},c,d,{children:[a&&t(on,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},sn=l.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Et.Neutral[5]};
    border-radius: 4px;
    background: ${Et.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Et.Accent.Light[1]};
        box-shadow: ${nn.InputBoxShadow};
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
                background: ${Et.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Et.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Et.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Et.Validation.Red.Border};
                    box-shadow: ${nn.InputErrorBoxShadow};
                }
            `:void 0}
`;l.input`
    ${Ut("Body","regular")}
    color: ${Et.Neutral[1]};
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
        color: ${Et.Neutral[3]};
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
`;var ln={exports:{}};ln.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=d("months"),n=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(r),c=o.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,d=r.seconds,c=r.milliseconds,u=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,$=d||0,b=c||0;return u?new Date(Date.UTC(p,m,g,y,v,$,b+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,b)):new Date(p,m,g,y,v,$,b)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var dn,cn,un=p(ln.exports),hn={exports:{}},fn=p(hn.exports=(dn={year:0,month:1,day:2,hour:3,minute:4,second:5},cn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=cn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),cn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,d=s.value,c=dn[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var d=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=n(c).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),gn={exports:{}};gn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,d),o=n-i<0,a=t.clone().add(r+(o?-1:1),d);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",b={};b[$]=m;var F=function(e){return e instanceof x},S=function e(t,n,r){var i;if(!t)return $;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&($=i),i||!r&&$},D=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},B=v;B.l=S,B.i=F,B.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,c=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return r?f(1,0):f(31,11);case d:return r?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,b=(p<$?p+7:p)-$;return f(r?y-b:y+(6-b),m);case s:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=B.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var g=B.p(c),p=function(e){var t=D(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(g===d)return this.set(d,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},u=function(e){return B.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:c(n.monthsShort,s,d,3),MMMM:c(d,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=B.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,$=B.m(this,m);return $=(g={},g[u]=$/12,g[d]=$,g[c]=$/3,g[l]=(v-y)/6048e5,g[s]=(v-y)/864e5,g[a]=v/n,g[o]=v/t,g[i]=v/e,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return D.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,x,D),e.$i=!0),D},D.locale=S,D.isDayjs=F,D.unix=function(e){return D(1e3*e)},D.en=b[$],D.Ls=b,D.p={},D}();var pn=p(gn.exports),mn={exports:{}};mn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var yn=p(mn.exports),vn={exports:{}};vn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $n=p(vn.exports),bn={exports:{}};bn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Fn,Sn=p(bn.exports);pn.extend(yn),pn.extend($n),pn.extend(Sn),pn.extend(un),pn.extend(fn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=pn(t).startOf("week");return Dn(n).map((e=>Bn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(pn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+pn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=pn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?pn(r):void 0,i?pn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Fn||(Fn={}));const Dn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Bn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},xn=[1,3,5,7,8,10,12],wn=[4,6,9,11];var Hn,On,En,kn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":xn.includes(o)?Math.min(i,31).toString():wn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=pn(e,n);return pn(t,n).diff(r,"minute")},e.toDayjs=e=>e?pn(e):pn(),e.addMinutesToTime=(e,t,n="HH:mm")=>pn(e,n).add(t,"minutes").format(n)}(Hn||(Hn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!pn(e).isBefore(r,"day"))||!(!i||!pn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(pn(e).isValid())return e}return""}}(On||(On={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(En||(En={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(kn||(kn={}));const Mn=l.input`
    ${Ut("Body","regular")}
    color: ${Et.Neutral[1]};

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
        color: ${Et.Neutral[3]};
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
`,Cn=l.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Et.Neutral[3]};
    background-color: transparent;
    border: none;
`,zn=l(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,An=l.div`
    display: flex;
    width: 100%;
`,Tn=r.forwardRef(((r,a)=>{var{value:s,spacing:l,type:d,error:c,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:v="bordered"}=r,$=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=i();o(a,(()=>b.current),[]);const F=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>kn.transformWithSpaces(e,l)}),S=e=>{g&&(B()?x(e):g(e))},D=()=>{p&&p(),b&&b.current&&b.current.focus()},B=()=>"tel"===d&&l,x=e=>{const{nextValue:t,updateCaretPosition:n}=F(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=s?(e=>e?B()?kn.transformWithSpaces(e,l):e:"")(s):s,H=()=>e(n,{children:[t(Mn,Object.assign({"data-testid":"input",ref:b,disabled:u,value:w,onChange:S,type:d,readOnly:h},$)),m&&!u&&!h&&!!s&&t(Cn,Object.assign({onClick:D,type:"button"},{children:t(zn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===v?t(An,Object.assign({className:y},{children:H()})):t(sn,Object.assign({$disabled:u,$error:c,$readOnly:h,className:y},{children:H()}))})})),_n=l.div`
    display: flex;
    flex-direction: column;
`,Yn=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Wn=l(Tn)`
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

    ${Ct.mobileM} {
        padding: 0 0.5rem;
    }
`,Nn=l(an.Small)`
    margin: 2rem 0rem;
`;l.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return c`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,l.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=c`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=c`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=c`
                transition: none;
            `),t}}
`;l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Ct.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Ln=l.div`
    border-radius: 0.5rem;
    background: ${Et.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,In=l.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&c`
                background-color: ${Et.Neutral[7]};
            `}
    }
`,jn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return t(In,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Pn=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Et.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Ct.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Rn=l(jn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Et.Accent.Light[1]};
    }
`,Vn=l(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Et.Neutral[3]};
`;l.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,l((e=>{var{children:n}=e,r=f(e,["children"]);const i=r["data-testid"]||"card";return t(Ln,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Gt.Body,{children:n}):n}))}))`
    ${Ut("BodySmall","regular")}

    ${Ct.mobileL} {
        display: none;
    }

    a {
        color: ${Et.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Et.Secondary};

            svg {
                color: ${Et.Secondary};
            }
        }
    }
`,l((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=f(n,["id","children","onClose","showCloseButton"]);return e(Pn,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Rn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(Vn,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,l.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Et.Primary};
    }
`,l.div`
    display: inline;
    position: relative;
    width: fit-content;
`,l.label`
    ${Ut("H5","semibold")}
    color: ${Et.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Ut("H5","semibold")}
    }

    a {
        color: ${Et.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Et.Secondary};

            svg {
                color: ${Et.Secondary};
            }
        }
    }
`;const Zn=l(Gt.H6)`
    color: ${Et.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;l(Gt.BodySmall)`
    color: ${Et.Neutral[3]};
`;const Un=e=>t(Zn,Object.assign({weight:"semibold"},e)),Xn=n=>{var{id:r,value:o=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=n,v=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const $=null!=u?u:{},{disabled:b,onClick:F,styleType:S="secondary"}=$,D=f($,["disabled","onClick","styleType"]),B=i([]),x=i(p),[w,H]=a(new Array(g).fill("")),[O,E]=a(c),[k,M]=a(new Date);s((()=>{var e;return null===(e=null==B?void 0:B.current[0])||void 0===e||e.focus(),document.addEventListener("paste",A),()=>document.removeEventListener("paste",A)}),[]),s((()=>{if(0!==c){m&&m();const e=Y();return()=>e()}}),[k]),s((()=>{x.current=p}),[p]),s((()=>{o.length===g&&H(o)}),[o]);const C=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(T(r)){const t=[...w];t[e]=r.substring(r.length-1),null===(n=B.current[e+1])||void 0===n||n.focus(),H(t),p&&p(t)}},z=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=B.current[e-1])||void 0===n||n.focus()),H(t),p&&p(t)}},A=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&T(t,g)?(H(n),x.current&&x.current(n)):e.preventDefault()},T=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*c;return e<k.valueOf()+t},Y=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((k.valueOf()+n-t)/1e3);E(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},W=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(_n,Object.assign({id:r,"data-testid":l,className:d},{children:[t(Yn,{children:w.map(((e,n)=>t(Wn,Object.assign({id:W(n,"otp-input",r),"data-testid":W(n,"otp-input",l),ref:e=>B.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:C(n),onKeyDown:z(n)},v),n)))}),h&&t(Un,{children:h}),t(Nn,Object.assign({styleType:S,type:"button"},D,{onClick:e=>{H(new Array(g).fill("")),_()||(M(new Date),E(c)),F&&F(e)},disabled:b||_()},{children:D.children?D.children:"Resend OTP"+(O?` in ${O} second${O>1?"s":""}`:"")}))]}))};export{Xn as OtpInput};
//# sourceMappingURL=index.js.map
