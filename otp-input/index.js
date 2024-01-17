import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as s}from"react";import l,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof g&&g&&g.Object===Object&&g,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),v=b.Symbol,$=v,F=Object.prototype,S=F.hasOwnProperty,D=F.toString,B=$?$.toStringTag:void 0;var x=function(e){var t=S.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var i=D.call(e);return r&&(t?e[B]=n:delete e[B]),i},w=Object.prototype.toString;var H=x,O=function(e){return w.call(e)},k=v?v.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?H(e):O(e)};var M=E,C=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||C(e)&&"[object Symbol]"==M(e)},A=p,T=z,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var W=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!T(e))||(Y.test(e)||!_.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},L=E,I=N;var j,P=function(e){if(!I(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=b["__core-js_shared__"],V=(j=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var Z=function(e){return!!V&&V in e},X=Function.prototype.toString;var U=P,G=Z,J=N,q=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,re=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||G(e))&&(U(e)?re:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},se=ae(Object,"create"),le=se;var ce=function(){this.__data__=le?le(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=se,he=Object.prototype.hasOwnProperty;var fe=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(t,e)?t[e]:void 0},ge=se,pe=Object.prototype.hasOwnProperty;var me=se;var ye=ce,be=de,ve=fe,$e=function(e){var t=this.__data__;return ge?void 0!==t[e]:pe.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=me&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=ye,Se.prototype.delete=be,Se.prototype.get=ve,Se.prototype.has=$e,Se.prototype.set=Fe;var De=Se;var Be=function(){this.__data__=[],this.size=0};var xe=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(xe(e[n][0],t))return n;return-1},He=we,Oe=Array.prototype.splice;var ke=we;var Ee=we;var Me=we;var Ce=Be,ze=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=ke(t,e);return n<0?void 0:t[n][1]},Te=function(e){return Ee(this.__data__,e)>-1},_e=function(e,t){var n=this.__data__,r=Me(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ce,Ye.prototype.delete=ze,Ye.prototype.get=Ae,Ye.prototype.has=Te,Ye.prototype.set=_e;var We=Ye,Ne=ae(b,"Map"),Le=De,Ie=We,je=Ne;var Pe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Pe(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Re;var Ze=Re;var Xe=Re;var Ue=Re;var Ge=function(){this.size=0,this.__data__={hash:new Le,map:new(je||Ie),string:new Le}},Je=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ze(this,e).get(e)},Ke=function(e){return Xe(this,e).has(e)},Qe=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ge,et.prototype.delete=Je,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var rt=nt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var t=rt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,i){t.push(r?i.replace(ot,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},lt=p,ct=z,dt=v?v.prototype:void 0,ut=dt?dt.toString:void 0;var ht=function e(t){if("string"==typeof t)return t;if(lt(t))return st(t,e)+"";if(ct(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ft=ht;var gt=p,pt=W,mt=at,yt=function(e){return null==e?"":ft(e)};var bt=z;var vt=function(e,t){return gt(e)?e:pt(e,t)?[e]:mt(yt(e))},$t=function(e){if("string"==typeof e||bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[$t(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const Dt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var xt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xt||(xt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=Bt(wt,n[xt.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Ot={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Et=e=>Object.keys(kt).reduce(((t,n)=>{const r=kt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Mt=Et("max-width"),Ct=(Et("min-width"),l.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),zt=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,At=l.div`
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
    animation: ${zt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tt=l(At)`
    animation-delay: -0.45s;
`,_t=l(At)`
    animation-delay: -0.3s;
`,Yt=l(At)`
    animation-delay: -0.15s;
`,Wt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Nt={collections:{base:{D1:{fontFamily:Wt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Lt=e=>t=>{const n=t.theme,r=Bt(Nt,n[xt.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},It={D1:{fontFamily:Lt("D1.fontFamily"),fontSize:Lt("D1.fontSize"),fontWeight:Lt("D1.fontWeight"),lineHeight:Lt("D1.lineHeight"),letterSpacing:Lt("D1.letterSpacing")},D2:{fontFamily:Lt("D2.fontFamily"),fontSize:Lt("D2.fontSize"),fontWeight:Lt("D2.fontWeight"),lineHeight:Lt("D2.lineHeight"),letterSpacing:Lt("D2.letterSpacing")},D3:{fontFamily:Lt("D3.fontFamily"),fontSize:Lt("D3.fontSize"),fontWeight:Lt("D3.fontWeight"),lineHeight:Lt("D3.lineHeight"),letterSpacing:Lt("D3.letterSpacing")},D4:{fontFamily:Lt("D4.fontFamily"),fontSize:Lt("D4.fontSize"),fontWeight:Lt("D4.fontWeight"),lineHeight:Lt("D4.lineHeight"),letterSpacing:Lt("D4.letterSpacing")},DBody:{fontFamily:Lt("DBody.fontFamily"),fontSize:Lt("DBody.fontSize"),fontWeight:Lt("DBody.fontWeight"),lineHeight:Lt("DBody.lineHeight"),letterSpacing:Lt("DBody.letterSpacing")},H1:{fontFamily:Lt("H1.fontFamily"),fontSize:Lt("H1.fontSize"),fontWeight:Lt("H1.fontWeight"),lineHeight:Lt("H1.lineHeight"),letterSpacing:Lt("H1.letterSpacing")},H2:{fontFamily:Lt("H2.fontFamily"),fontSize:Lt("H2.fontSize"),fontWeight:Lt("H2.fontWeight"),lineHeight:Lt("H2.lineHeight"),letterSpacing:Lt("H2.letterSpacing")},H3:{fontFamily:Lt("H3.fontFamily"),fontSize:Lt("H3.fontSize"),fontWeight:Lt("H3.fontWeight"),lineHeight:Lt("H3.lineHeight"),letterSpacing:Lt("H3.letterSpacing")},H4:{fontFamily:Lt("H4.fontFamily"),fontSize:Lt("H4.fontSize"),fontWeight:Lt("H4.fontWeight"),lineHeight:Lt("H4.lineHeight"),letterSpacing:Lt("H4.letterSpacing")},H5:{fontFamily:Lt("H5.fontFamily"),fontSize:Lt("H5.fontSize"),fontWeight:Lt("H5.fontWeight"),lineHeight:Lt("H5.lineHeight"),letterSpacing:Lt("H5.letterSpacing")},H6:{fontFamily:Lt("H6.fontFamily"),fontSize:Lt("H6.fontSize"),fontWeight:Lt("H6.fontWeight"),lineHeight:Lt("H6.lineHeight"),letterSpacing:Lt("H6.letterSpacing")},Body:{fontFamily:Lt("Body.fontFamily"),fontSize:Lt("Body.fontSize"),fontWeight:Lt("Body.fontWeight"),lineHeight:Lt("Body.lineHeight"),letterSpacing:Lt("Body.letterSpacing")},BodySmall:{fontFamily:Lt("BodySmall.fontFamily"),fontSize:Lt("BodySmall.fontSize"),fontWeight:Lt("BodySmall.fontWeight"),lineHeight:Lt("BodySmall.lineHeight"),letterSpacing:Lt("BodySmall.letterSpacing")},XSmall:{fontFamily:Lt("XSmall.fontFamily"),fontSize:Lt("XSmall.fontSize"),fontWeight:Lt("XSmall.fontWeight"),lineHeight:Lt("XSmall.lineHeight"),letterSpacing:Lt("XSmall.letterSpacing")}},jt=e=>{switch(e){case 700:case"bold":return Wt.Bold;case 600:case"semibold":return Wt.Semibold;case 300:case"light":return Wt.Light;case 400:case"regular":return Wt.Regular;default:return""}},Pt=(e,t)=>n=>{var r;const i=It[e].fontFamily(n),o=It[e].fontWeight(n);return Object.values(Wt).includes(i)?d`
                font-family: ${jt(t)||jt(o)||i};
                font-weight: normal !important;
            `:d`
            font-family: ${i};
            font-weight: ${null!==(r=Rt(t)||o)&&void 0!==r?r:"normal"};
        `},Rt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vt=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Zt=(e,t,n=!1)=>r=>{const i=It[e],o=i.fontSize(r);return d`
            ${Pt(e,t)}
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
        `;var Ut;!function(e){e.D1=l.h1`
        ${e=>d`
                ${Zt("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=l.h1`
        ${e=>d`
                ${Zt("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=l.h1`
        ${e=>d`
                ${Zt("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=l.h1`
        ${e=>d`
                ${Zt("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=l.h1`
        ${e=>d`
                ${Zt("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=l.h1`
        ${e=>d`
                ${Zt("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=l.h2`
        ${e=>d`
                ${Zt("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=l.h3`
        ${e=>d`
                ${Zt("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=l.h4`
        ${e=>d`
                ${Zt("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=l.h5`
        ${e=>d`
                ${Zt("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=l.h6`
        ${e=>d`
                ${Zt("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=l.p`
        ${e=>d`
                ${Zt("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=l.p`
        ${e=>d`
                ${Zt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=l.span`
        ${e=>d`
                ${Zt("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ut||(Ut={}));const Gt=l.a`
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
`,Jt=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qt=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return e(Gt,Object.assign({},o,{children:[i,r&&t(Jt,{})]}))};var Kt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));const Qt={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},en=e=>t=>{var n;const r=t.theme,i=Bt(Qt,r[xt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Dt(i,e,r.options.designToken):Dt(i,e)},tn={InputBoxShadow:en("InputBoxShadow"),InputErrorBoxShadow:en("InputErrorBoxShadow"),ElevationBoxShadow:en("ElevationBoxShadow"),Table:{Header:en("Table.Header"),Cell:{Primary:en("Table.Cell.Primary"),Secondary:en("Table.Cell.Secondary"),Selected:en("Table.Cell.Selected"),Hover:en("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:en("Button.Danger.BackgroundColor"),Hover:en("Button.Danger.Hover"),Primary:en("Button.Danger.Primary"),Border:en("Button.Danger.Border")}}},nn=l.button`
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
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?tn.Button.Danger.Border:Ot.Primary};

                    span {
                        color: ${e.$buttonIsDanger?tn.Button.Danger.Primary:Ot.Primary};
                    }
                `;case"light":return d`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid ${Ot.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?tn.Button.Danger.Primary:Ot.Primary};
                    }
                `;case"disabled":return d`
                    background-color: ${Ot.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ot.Neutral[3]};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?tn.Button.Danger.Primary:Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?tn.Button.Danger.Hover:Ot.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?tn.Button.Danger.BackgroundColor:Ot.Primary};
                    border: 1px solid transparent;

                    ${Mt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ot.Neutral[8]};
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

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    span {
                        ${Zt("H4","semibold")}
                    }

                    ${Mt.mobileS} {
                        height: auto;
                    }
                `}
`,rn=l((({color:n,className:r,size:i=18})=>e(Ct,Object.assign({className:r,$size:i,$color:n},{children:[t(At,{id:"inner1",$size:i-2,$borderWidth:2}),t(Tt,{id:"inner2",$size:i-2,$borderWidth:2}),t(_t,{id:"inner3",$size:i-2,$borderWidth:2}),t(Yt,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?tn.Button.Danger.Primary:Ot.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,on={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(nn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(rn,Object.assign({},d)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(nn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&t(rn,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},an=l.div`
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
        box-shadow: ${tn.InputBoxShadow};
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
                    box-shadow: ${tn.InputErrorBoxShadow};
                }
            `:void 0}
`;l.input`
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
`;var sn={exports:{}};sn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ln,cn,dn=sn.exports,un={exports:{}},hn=un.exports=(ln={year:0,month:1,day:2,hour:3,minute:4,second:5},cn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=cn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),cn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=ln[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),fn={exports:{}};fn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var F=function(e){return e instanceof x},S=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},D=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},B=b;B.l=S,B.i=F,B.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,d=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case a:return g(b+"Minutes",1);case o:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=B.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=B.p(d),p=function(e){var t=D(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},u=function(e){return B.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:d(n.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=B.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=B.m(this,m);return v=(g={},g[u]=v/12,g[c]=v,g[d]=v/3,g[l]=(b-y)/6048e5,g[s]=(b-y)/864e5,g[a]=b/n,g[o]=b/t,g[i]=b/e,g)[p]||b,f?v:B.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return D.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,x,D),e.$i=!0),D},D.locale=S,D.isDayjs=F,D.unix=function(e){return D(1e3*e)},D.en=$[v],D.Ls=$,D.p={},D}();var gn=fn.exports,pn={exports:{}};pn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var mn=pn.exports,yn={exports:{}};yn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var bn=yn.exports,vn={exports:{}};vn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var $n,Fn=vn.exports;gn.extend(mn),gn.extend(bn),gn.extend(Fn),gn.extend(dn),gn.extend(hn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=gn(t).startOf("week");return Sn(n).map((e=>Dn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Dn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(gn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+gn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=gn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?gn(r):void 0,i?gn(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}($n||($n={}));const Sn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Dn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Bn=[1,3,5,7,8,10,12],xn=[4,6,9,11];var wn,Hn,On,kn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Bn.includes(o)?Math.min(i,31).toString():xn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=gn(e,n);return gn(t,n).diff(r,"minute")},e.toDayjs=e=>e?gn(e):gn(),e.addMinutesToTime=(e,t,n="HH:mm")=>gn(e,n).add(t,"minutes").format(n)}(wn||(wn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!gn(e).isBefore(r,"day"))||!(!i||!gn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gn(e).isValid())return e}return""}}(Hn||(Hn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(On||(On={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(kn||(kn={}));const En=l.input`
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
`,Mn=l.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Cn=l(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,zn=l.div`
    display: flex;
    width: 100%;
`,An=r.forwardRef(((r,a)=>{var{value:s,spacing:l,type:c,error:d,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:b="bordered"}=r,v=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=i();o(a,(()=>$.current),[]);const F=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:$,formatter:e=>kn.transformWithSpaces(e,l)}),S=e=>{g&&(B()?x(e):g(e))},D=()=>{p&&p(),$&&$.current&&$.current.focus()},B=()=>"tel"===c&&l,x=e=>{const{nextValue:t,updateCaretPosition:n}=F(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=s?(e=>e?B()?kn.transformWithSpaces(e,l):e:"")(s):s,H=()=>e(n,{children:[t(En,Object.assign({"data-testid":"input",ref:$,disabled:u,value:w,onChange:S,type:c,readOnly:h},v)),m&&!u&&!h&&!!s&&t(Mn,Object.assign({onClick:D,type:"button"},{children:t(Cn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===b?t(zn,Object.assign({className:y},{children:H()})):t(an,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:H()}))})})),Tn=l.div`
    display: flex;
    flex-direction: column;
`,_n=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Yn=l(An)`
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

    ${Mt.mobileM} {
        padding: 0 0.5rem;
    }
`,Wn=l(on.Small)`
    margin: 2rem 0rem;
`;l.div`
    border-radius: 0.5rem;
    background: ${Ot.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;l.div`
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
`,l.div`
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
`;l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Mt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Nn=l.button`
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

        ${({$highlight:e})=>e&&d`
                background-color: ${Ot.Neutral[7]};
            `}
    }
`,Ln=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return t(Nn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),In=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ot.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Mt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,jn=l(Ln)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Ot.Accent.Light[1]};
    }
`,Pn=l(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ot.Neutral[3]};
`,Rn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";l.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?d`
            visibility: visible;
            opacity: 1;
            transition: ${Rn};
            z-index: 50;
        `:d`
            visibility: hidden;
            opacity: 0;
            transition: ${Rn};
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

	${Mt.mobileL} {
        display: none;
    }
`,l((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=f(n,["id","children","onClose","showCloseButton"]);return e(In,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&t(jn,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:t(Pn,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    position: relative;
    width: fit-content;
`,l.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,l.button`
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
`,l.div`
    display: inline;
    position: relative;
    width: fit-content;
`,l.label`
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
`;const Vn=l(Ut.H6)`
    color: ${Ot.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;l(Ut.BodySmall)`
    color: ${Ot.Neutral[3]};
`;const Zn=e=>t(Vn,Object.assign({weight:"semibold"},e)),Xn=n=>{var{id:r,value:o=[],"data-testid":l,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=n,b=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:$,onClick:F,styleType:S="secondary"}=v,D=f(v,["disabled","onClick","styleType"]),B=i([]),x=i(p),[w,H]=a(new Array(g).fill("")),[O,k]=a(d),[E,M]=a(new Date);s((()=>{var e;return null===(e=null==B?void 0:B.current[0])||void 0===e||e.focus(),document.addEventListener("paste",A),()=>document.removeEventListener("paste",A)}),[]),s((()=>{if(0!==d){m&&m();const e=Y();return()=>e()}}),[E]),s((()=>{x.current=p}),[p]),s((()=>{o.length===g&&H(o)}),[o]);const C=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(T(r)){const t=[...w];t[e]=r.substring(r.length-1),null===(n=B.current[e+1])||void 0===n||n.focus(),H(t),p&&p(t)}},z=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=B.current[e-1])||void 0===n||n.focus()),H(t),p&&p(t)}},A=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&T(t,g)?(H(n),x.current&&x.current(n)):e.preventDefault()},T=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*d;return e<E.valueOf()+t},Y=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*d,r=Math.ceil((E.valueOf()+n-t)/1e3);k(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},W=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(Tn,Object.assign({id:r,"data-testid":l,className:c},{children:[t(_n,{children:w.map(((e,n)=>t(Yn,Object.assign({id:W(n,"otp-input",r),"data-testid":W(n,"otp-input",l),ref:e=>B.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:C(n),onKeyDown:z(n)},b),n)))}),h&&t(Zn,{children:h}),t(Wn,Object.assign({styleType:S,type:"button"},D,{onClick:e=>{H(new Array(g).fill("")),_()||(M(new Date),k(d)),F&&F(e)},disabled:$||_()},{children:D.children?D.children:"Resend OTP"+(O?` in ${O} second${O>1?"s":""}`:"")}))]}))};export{Xn as OtpInput};
//# sourceMappingURL=index.js.map
