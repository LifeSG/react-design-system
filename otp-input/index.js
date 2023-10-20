import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,m="object"==typeof p&&p&&p.Object===Object&&p,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),v=b.Symbol,$=v,S=Object.prototype,F=S.hasOwnProperty,x=S.toString,w=$?$.toStringTag:void 0;var D=function(e){var t=F.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var i=x.call(e);return r&&(t?e[w]=n:delete e[w]),i},B=Object.prototype.toString;var H=D,O=function(e){return B.call(e)},k=v?v.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?H(e):O(e)};var z=M,E=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==z(e)},_=g,C=T,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var N=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(W.test(e)||!A.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=M,j=L;var I,R=function(e){if(!j(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=b["__core-js_shared__"],V=(I=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var Z=function(e){return!!V&&V in e},X=Function.prototype.toString;var U=R,G=Z,J=L,q=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||G(e))&&(U(e)?re:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},le=ae(Object,"create"),se=le;var ce=function(){this.__data__=se?se(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=le,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},pe=le,ge=Object.prototype.hasOwnProperty;var me=le;var ye=ce,be=de,ve=fe,$e=function(e){var t=this.__data__;return pe?void 0!==t[e]:ge.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=ye,Fe.prototype.delete=be,Fe.prototype.get=ve,Fe.prototype.has=$e,Fe.prototype.set=Se;var xe=Fe;var we=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},He=Be,Oe=Array.prototype.splice;var ke=Be;var Me=Be;var ze=Be;var Ee=we,Te=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return Me(this.__data__,e)>-1},Ae=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function We(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}We.prototype.clear=Ee,We.prototype.delete=Te,We.prototype.get=_e,We.prototype.has=Ce,We.prototype.set=Ae;var Ne=We,Le=ae(b,"Map"),Ye=xe,je=Ne,Ie=Le;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Pe;var Ze=Pe;var Xe=Pe;var Ue=Pe;var Ge=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ie||je),string:new Ye}},Je=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ze(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ge,et.prototype.delete=Je,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},st=g,ct=T,dt=v?v.prototype:void 0,ut=dt?dt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(st(t))return lt(t,e)+"";if(ct(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ft=ht;var pt=g,gt=N,mt=at,yt=function(e){return null==e?"":ft(e)};var bt=T;var vt=function(e,t){return pt(e)?e:gt(e,t)?[e]:mt(yt(e))},$t=function(e){if("string"==typeof e||bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[$t(t[n++])];return n&&n==r?e:void 0};var Ft=function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r};const xt=(e,t,n)=>t?Ft(n,t)||Ft(e,t):n||e,wt=(e,t)=>{const n=t||e.defaultValue;return Ft(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=wt(Bt,n[Dt.colorScheme]);return n.options&&n.options.color?xt(r,e,n.options.color):xt(r,e)},Ot={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Mt=e=>Object.keys(kt).reduce(((t,n)=>{const r=kt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),zt=Mt("max-width"),Et=(Mt("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Tt=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_t=s.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ot.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Tt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ct=s(_t)`
    animation-delay: -0.45s;
`,At=s(_t)`
    animation-delay: -0.3s;
`,Wt=s(_t)`
    animation-delay: -0.15s;
`,Nt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Lt={collections:{base:{D1:{fontFamily:Nt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Yt=e=>t=>{const n=t.theme,r=wt(Lt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?xt(r,e,n.options.textStyle):xt(r,e)},jt={D1:{fontFamily:Yt("D1.fontFamily"),fontSize:Yt("D1.fontSize"),fontWeight:Yt("D1.fontWeight"),lineHeight:Yt("D1.lineHeight"),letterSpacing:Yt("D1.letterSpacing")},D2:{fontFamily:Yt("D2.fontFamily"),fontSize:Yt("D2.fontSize"),fontWeight:Yt("D2.fontWeight"),lineHeight:Yt("D2.lineHeight"),letterSpacing:Yt("D2.letterSpacing")},D3:{fontFamily:Yt("D3.fontFamily"),fontSize:Yt("D3.fontSize"),fontWeight:Yt("D3.fontWeight"),lineHeight:Yt("D3.lineHeight"),letterSpacing:Yt("D3.letterSpacing")},D4:{fontFamily:Yt("D4.fontFamily"),fontSize:Yt("D4.fontSize"),fontWeight:Yt("D4.fontWeight"),lineHeight:Yt("D4.lineHeight"),letterSpacing:Yt("D4.letterSpacing")},DBody:{fontFamily:Yt("DBody.fontFamily"),fontSize:Yt("DBody.fontSize"),fontWeight:Yt("DBody.fontWeight"),lineHeight:Yt("DBody.lineHeight"),letterSpacing:Yt("DBody.letterSpacing")},H1:{fontFamily:Yt("H1.fontFamily"),fontSize:Yt("H1.fontSize"),fontWeight:Yt("H1.fontWeight"),lineHeight:Yt("H1.lineHeight"),letterSpacing:Yt("H1.letterSpacing")},H2:{fontFamily:Yt("H2.fontFamily"),fontSize:Yt("H2.fontSize"),fontWeight:Yt("H2.fontWeight"),lineHeight:Yt("H2.lineHeight"),letterSpacing:Yt("H2.letterSpacing")},H3:{fontFamily:Yt("H3.fontFamily"),fontSize:Yt("H3.fontSize"),fontWeight:Yt("H3.fontWeight"),lineHeight:Yt("H3.lineHeight"),letterSpacing:Yt("H3.letterSpacing")},H4:{fontFamily:Yt("H4.fontFamily"),fontSize:Yt("H4.fontSize"),fontWeight:Yt("H4.fontWeight"),lineHeight:Yt("H4.lineHeight"),letterSpacing:Yt("H4.letterSpacing")},H5:{fontFamily:Yt("H5.fontFamily"),fontSize:Yt("H5.fontSize"),fontWeight:Yt("H5.fontWeight"),lineHeight:Yt("H5.lineHeight"),letterSpacing:Yt("H5.letterSpacing")},H6:{fontFamily:Yt("H6.fontFamily"),fontSize:Yt("H6.fontSize"),fontWeight:Yt("H6.fontWeight"),lineHeight:Yt("H6.lineHeight"),letterSpacing:Yt("H6.letterSpacing")},Body:{fontFamily:Yt("Body.fontFamily"),fontSize:Yt("Body.fontSize"),fontWeight:Yt("Body.fontWeight"),lineHeight:Yt("Body.lineHeight"),letterSpacing:Yt("Body.letterSpacing")},BodySmall:{fontFamily:Yt("BodySmall.fontFamily"),fontSize:Yt("BodySmall.fontSize"),fontWeight:Yt("BodySmall.fontWeight"),lineHeight:Yt("BodySmall.lineHeight"),letterSpacing:Yt("BodySmall.letterSpacing")},XSmall:{fontFamily:Yt("XSmall.fontFamily"),fontSize:Yt("XSmall.fontSize"),fontWeight:Yt("XSmall.fontWeight"),lineHeight:Yt("XSmall.lineHeight"),letterSpacing:Yt("XSmall.letterSpacing")}},It=e=>{switch(e){case 700:case"bold":return Nt.Bold;case 600:case"semibold":return Nt.Semibold;case 300:case"light":return Nt.Light;case 400:case"regular":return Nt.Regular;default:return""}},Rt=(e,t)=>n=>{var r;const i=jt[e].fontFamily(n),o=jt[e].fontWeight(n);return Object.values(Nt).includes(i)?d`
                font-family: ${It(t)||It(o)||i};
                font-weight: normal !important;
            `:d`
            font-family: ${i};
            font-weight: ${null!==(r=Pt(t)||o)&&void 0!==r?r:"normal"};
        `},Pt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vt=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Zt=(e,t,n=!1)=>r=>{const i=jt[e],o=i.fontSize(r);return d`
            ${Rt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1,n=void 0)=>t?d`
            display: block;
            ${Vt(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${Vt(n)}
        `;var Ut;!function(e){e.D1=s.h1`
        ${e=>d`
                ${Zt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>d`
                ${Zt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>d`
                ${Zt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>d`
                ${Zt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>d`
                ${Zt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>d`
                ${Zt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>d`
                ${Zt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>d`
                ${Zt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>d`
                ${Zt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>d`
                ${Zt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>d`
                ${Zt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>d`
                ${Zt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>d`
                ${Zt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>d`
                ${Zt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ut||(Ut={}));const Gt=s.a`
    ${e=>d`
            ${Zt(e.textStyle,e.weight)}
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
`,Jt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qt=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(Gt,Object.assign({},o,{children:[i,r&&t(Jt,{})]}))};var Kt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));const Qt=s.button`
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
                    background-color: ${Ot.Neutral[8](e)};
                    border: 1px solid ${Ot.Primary(e)};

                    span {
                        color: ${Ot.Primary(e)};
                    }
                `;case"light":return d`
                    background-color: ${Ot.Neutral[8](e)};
                    border: 1px solid ${Ot.Neutral[5](e)};

                    span {
                        color: ${Ot.Primary(e)};
                    }
                `;case"disabled":return d`
                    background-color: ${Ot.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ot.Neutral[3](e)};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ot.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${Ot.Primary(e)};
                    border: 1px solid transparent;

                    ${zt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ot.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    span {
                        ${Zt("H5","semibold")}
                    }

                    ${zt.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    span {
                        ${Zt("H4","semibold")}
                    }

                    ${zt.mobileS} {
                        height: auto;
                    }
                `}
`,en=s((({color:n,className:r,size:i=18})=>e(Et,Object.assign({className:r,$size:i,$color:n},{children:[t(_t,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ct,{id:"inner2",$size:i-2,$borderWidth:2}),t(At,{id:"inner3",$size:i-2,$borderWidth:2}),t(Wt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ot.Primary(e);break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,tn={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default"}=n,s=f(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return e(Qt,Object.assign({ref:r,"data-testid":s["data-testid"]||"button",disabled:o},c,s,{children:[a&&t(en,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default"}=n,s=f(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return e(Qt,Object.assign({ref:r,"data-testid":s["data-testid"]||"button",disabled:o},c,s,{children:[a&&t(en,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},nn={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},rn=e=>t=>{var n;const r=t.theme,i=wt(nn,r[Dt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?xt(i,e,r.options.designToken):xt(i,e)},on=rn("InputBoxShadow"),an=rn("InputErrorBoxShadow"),ln=(rn("ElevationBoxShadow"),rn("Table.Header"),rn("Table.Cell.Primary"),rn("Table.Cell.Secondary"),rn("Table.Cell.Selected"),rn("Table.Cell.Hover"),s.div`
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
        box-shadow: ${on};
    }

    ${e=>e.$readOnly?d`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?d`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ot.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ot.Validation.Red.Border};
                    box-shadow: ${an};
                }
            `:void 0}
`);s.input`
    ${Zt("Body","regular")}
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
`;var sn={exports:{}};sn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],h=d&&d[0],f=d&&d[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(r),d=o.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!s&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,b=s||0,v=c||0,$=d||0;return u?new Date(Date.UTC(g,m,p,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var cn,dn,un=sn.exports,hn={exports:{}},fn=hn.exports=(cn={year:0,month:1,day:2,hour:3,minute:4,second:5},dn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=dn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),dn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,d=cn[s];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,l=i||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),pn={exports:{}};pn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var S=function(e){return e instanceof D},F=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;$[l]=t,i=l}return!r&&i&&(v=i),i||!r&&v},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},w=b;w.l=F,w.i=S,w.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!w.u(t)||t,d=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},p=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(r?y-$:y+(6-$),m);case l:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=w.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var p=w.p(d),g=function(e){var t=x(f);return w.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},u=function(e){return w.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:w.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=w.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=w.m(this,m);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[s]=(b-y)/6048e5,p[l]=(b-y)/864e5,p[a]=b/n,p[o]=b/t,p[i]=b/e,p)[g]||b,f?v:w.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return x.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=$[v],x.Ls=$,x.p={},x}();var gn=pn.exports,mn={exports:{}};mn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var yn=mn.exports,bn={exports:{}};bn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var vn=bn.exports,$n={exports:{}};$n.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Sn,Fn=$n.exports;gn.extend(yn),gn.extend(vn),gn.extend(Fn),gn.extend(un),gn.extend(fn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=gn(t).startOf("week");return xn(n).map((e=>wn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return wn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(gn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+gn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=gn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Sn||(Sn={}));const xn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},wn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Dn=[1,3,5,7,8,10,12],Bn=[4,6,9,11];var Hn,On,kn,Mn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Dn.includes(o)?Math.min(i,31).toString():Bn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=gn(e,n);return gn(t,n).diff(r,"minute")},e.toDayjs=e=>e?gn(e):gn()}(Hn||(Hn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!gn(e).isBefore(r,"day"))||!(!i||!gn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gn(e).isValid())return e}return""}}(On||(On={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(kn||(kn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Mn||(Mn={}));const zn=s.input`
    ${Zt("Body","regular")}
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
`,En=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Tn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,_n=s.div`
    display: flex;
    width: 100%;
`,Cn=r.forwardRef(((r,a)=>{var{value:l,spacing:s,type:c,error:d,disabled:u,readOnly:h,onChange:p,onClear:g,allowClear:m=!1,className:y,styleType:b="bordered"}=r,v=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=i();o(a,(()=>$.current),[]);const S=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}({ref:$,formatter:e=>Mn.transformWithSpaces(e,s)}),F=e=>{p&&(w()?D(e):p(e))},x=()=>{g&&g(),$&&$.current&&$.current.focus()},w=()=>"tel"===c&&s,D=e=>{const{nextValue:t,updateCaretPosition:n}=S(),r=t.replace(/\s/g,"");e.target.value=r,p(e),n()},B=l?(e=>e?w()?Mn.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t(zn,Object.assign({"data-testid":"input",ref:$,disabled:u,value:B,onChange:F,type:c,readOnly:h},v)),m&&!u&&!h&&!!l&&t(En,Object.assign({onClick:x,type:"button"},{children:t(Tn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===b?t(_n,Object.assign({className:y},{children:H()})):t(ln,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:H()}))})})),An=s.div`
    display: flex;
    flex-direction: column;
`,Wn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Nn=s(Cn)`
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

    ${zt.mobileM} {
        padding: 0 0.5rem;
    }
`,Ln=s(tn.Small)`
    margin: 2rem 0rem;
`;s.div`
    border-radius: 0.5rem;
    background: ${Ot.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;s.div`
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
`,s.div`
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
`;s.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${zt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Yn=s.button`
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
                background-color: ${Ot.Neutral[7]};
            `}
    }
`,jn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(Yn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),In=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ot.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${zt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Rn=s(jn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Ot.Accent.Light[1]};
    }
`,Pn=s(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ot.Neutral[3]};
`,Vn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";s.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?d`
            visibility: visible;
            opacity: 1;
            transition: ${Vn};
            z-index: 50;
        `:d`
            visibility: hidden;
            opacity: 0;
            transition: ${Vn};
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

	${zt.mobileL} {
        display: none;
    }
`,s((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return e(In,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(Rn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(Pn,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    position: relative;
    width: fit-content;
`,s.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,s.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,s.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Ot.Primary};
    }
`,s.div`
    display: inline;
    position: relative;
    width: fit-content;
`,s.label`
    ${Zt("H5","semibold")}
    color: ${Ot.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;const Zn=s(Ut.H6)`
    color: ${Ot.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Ut.BodySmall)`
    color: ${Ot.Neutral[3]};
`;const Xn=e=>t(Zn,Object.assign({weight:"semibold"},e)),Un=n=>{var{id:r,value:o=[],"data-testid":s,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:p,onChange:g,onCooldownStart:m,onCooldownEnd:y}=n,b=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:$,onClick:S,styleType:F="secondary"}=v,x=f(v,["disabled","onClick","styleType"]),w=i([]),D=i(g),[B,H]=a(new Array(p).fill("")),[O,k]=a(d),[M,z]=a(new Date);l((()=>{var e;return null===(e=null==w?void 0:w.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),l((()=>{if(0!==d){m&&m();const e=W();return()=>e()}}),[M]),l((()=>{D.current=g}),[g]),l((()=>{o.length===p&&H(o)}),[o]);const E=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(C(r)){const t=[...B];t[e]=r.substring(r.length-1),null===(n=w.current[e+1])||void 0===n||n.focus(),H(t),g&&g(t)}},T=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...B];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=w.current[e-1])||void 0===n||n.focus()),H(t),g&&g(t)}},_=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&C(t,p)?(H(n),D.current&&D.current(n)):e.preventDefault()},C=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),A=()=>{const e=Date.now(),t=1e3*d;return e<M.valueOf()+t},W=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*d,r=Math.ceil((M.valueOf()+n-t)/1e3);k(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},N=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(An,Object.assign({id:r,"data-testid":s,className:c},{children:[t(Wn,{children:B.map(((e,n)=>t(Nn,Object.assign({id:N(n,"otp-input",r),"data-testid":N(n,"otp-input",s),ref:e=>w.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:E(n),onKeyDown:T(n)},b),n)))}),h&&t(Xn,{children:h}),t(Ln,Object.assign({styleType:F,type:"button"},x,{onClick:e=>{H(new Array(p).fill("")),A()||(z(new Date),k(d)),S&&S(e)},disabled:$||A()},{children:x.children?x.children:"Resend OTP"+(O?` in ${O} second${O>1?"s":""}`:"")}))]}))};export{Un as OtpInput};
//# sourceMappingURL=index.js.map
