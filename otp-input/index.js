import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";function f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,m="object"==typeof p&&p&&p.Object===Object&&p,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),v=b.Symbol,$=v,S=Object.prototype,F=S.hasOwnProperty,w=S.toString,x=$?$.toStringTag:void 0;var D=function(t){var e=F.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var i=w.call(t);return r&&(e?t[x]=n:delete t[x]),i},B=Object.prototype.toString;var H=D,O=function(t){return B.call(t)},k=v?v.toStringTag:void 0;var M=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?H(t):O(t)};var z=M,E=function(t){return null!=t&&"object"==typeof t};var T=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==z(t)},_=g,C=T,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var W=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(N.test(t)||!A.test(t)||null!=e&&t in Object(e))};var Y=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},j=M,L=Y;var I,R=function(t){if(!L(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=b["__core-js_shared__"],V=(I=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var Z=function(t){return!!V&&V in t},X=Function.prototype.toString;var U=R,G=Z,J=Y,q=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,tt=Object.prototype,et=Q.toString,nt=tt.hasOwnProperty,rt=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!J(t)||G(t))&&(U(t)?rt:K).test(q(t))},ot=function(t,e){return null==t?void 0:t[e]};var at=function(t,e){var n=ot(t,e);return it(n)?n:void 0},lt=at(Object,"create"),st=lt;var ct=function(){this.__data__=st?st(null):{},this.size=0};var dt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut=lt,ht=Object.prototype.hasOwnProperty;var ft=function(t){var e=this.__data__;if(ut){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ht.call(e,t)?e[t]:void 0},pt=lt,gt=Object.prototype.hasOwnProperty;var mt=lt;var yt=ct,bt=dt,vt=ft,$t=function(t){var e=this.__data__;return pt?void 0!==e[t]:gt.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=yt,Ft.prototype.delete=bt,Ft.prototype.get=vt,Ft.prototype.has=$t,Ft.prototype.set=St;var wt=Ft;var xt=function(){this.__data__=[],this.size=0};var Dt=function(t,e){return t===e||t!=t&&e!=e};var Bt=function(t,e){for(var n=t.length;n--;)if(Dt(t[n][0],e))return n;return-1},Ht=Bt,Ot=Array.prototype.splice;var kt=Bt;var Mt=Bt;var zt=Bt;var Et=xt,Tt=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ot.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=kt(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return Mt(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=Et,Nt.prototype.delete=Tt,Nt.prototype.get=_t,Nt.prototype.has=Ct,Nt.prototype.set=At;var Wt=Nt,Yt=at(b,"Map"),jt=wt,Lt=Wt,It=Yt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Pt;var Zt=Pt;var Xt=Pt;var Ut=Pt;var Gt=function(){this.size=0,this.__data__={hash:new jt,map:new(It||Lt),string:new jt}},Jt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},qt=function(t){return Zt(this,t).get(t)},Kt=function(t){return Xt(this,t).has(t)},Qt=function(t,e){var n=Ut(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Gt,te.prototype.delete=Jt,te.prototype.get=qt,te.prototype.has=Kt,te.prototype.set=Qt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var re=ne;var ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/\\(\\)?/g,ae=function(t){var e=re(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ie,(function(t,n,r,i){e.push(r?i.replace(oe,"$1"):n||t)})),e}));var le=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},se=g,ce=T,de=v?v.prototype:void 0,ue=de?de.toString:void 0;var he=function t(e){if("string"==typeof e)return e;if(se(e))return le(e,t)+"";if(ce(e))return ue?ue.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},fe=he;var pe=g,ge=W,me=ae,ye=function(t){return null==t?"":fe(t)};var be=T;var ve=function(t,e){return pe(t)?t:ge(t,e)?[t]:me(ye(t))},$e=function(t){if("string"==typeof t||be(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Se=function(t,e){for(var n=0,r=(e=ve(e,t)).length;null!=t&&n<r;)t=t[$e(e[n++])];return n&&n==r?t:void 0};var Fe=function(t,e,n){var r=null==t?void 0:Se(t,e);return void 0===r?n:r};const we=(t,e,n)=>e?Fe(n,e)||Fe(t,e):n||t,xe=(t,e)=>{const n=e||t.defaultValue;return Fe(t.collections,n)};var De;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(De||(De={}));const Be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=xe(Be,n[De.colorScheme]);return n.options&&n.options.color?we(r,t,n.options.color):we(r,t)},Oe={Brand:{1:He("Brand.1"),2:He("Brand.2"),3:He("Brand.3"),4:He("Brand.4"),5:He("Brand.5"),6:He("Brand.6")},Primary:He("Primary"),PrimaryDark:He("PrimaryDark"),Secondary:He("Secondary"),Accent:{Light:{1:He("Accent.Light.1"),2:He("Accent.Light.2"),3:He("Accent.Light.3"),4:He("Accent.Light.4"),5:He("Accent.Light.5"),6:He("Accent.Light.6")},Dark:{1:He("Accent.Dark.1"),2:He("Accent.Dark.2"),3:He("Accent.Dark.3")}},Neutral:{1:He("Neutral.1"),2:He("Neutral.2"),3:He("Neutral.3"),4:He("Neutral.4"),5:He("Neutral.5"),6:He("Neutral.6"),7:He("Neutral.7"),8:He("Neutral.8")},Validation:{Green:{Text:He("Validation.Green.Text"),Icon:He("Validation.Green.Icon"),Border:He("Validation.Green.Border"),Background:He("Validation.Green.Background")},Orange:{Text:He("Validation.Orange.Text"),Icon:He("Validation.Orange.Icon"),Border:He("Validation.Orange.Border"),Background:He("Validation.Orange.Background"),Badge:He("Validation.Orange.Badge")},Red:{Text:He("Validation.Red.Text"),Icon:He("Validation.Red.Icon"),Border:He("Validation.Red.Border"),Background:He("Validation.Red.Background")},Blue:{Text:He("Validation.Blue.Text"),Icon:He("Validation.Blue.Icon"),Border:He("Validation.Blue.Border"),Background:He("Validation.Blue.Background")}},Shadow:{Accent:He("Shadow.Accent"),Red:He("Shadow.Red"),Elevation:He("Shadow.Elevation")}},ke={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Me=t=>Object.keys(ke).reduce(((e,n)=>{const r=ke[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),ze=Me("max-width"),Ee=(Me("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`),Te=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_e=s.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Oe.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${Te} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ce=s(_e)`
    animation-delay: -0.45s;
`,Ae=s(_e)`
    animation-delay: -0.3s;
`,Ne=s(_e)`
    animation-delay: -0.15s;
`,We={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ye={collections:{base:{D1:{fontFamily:We.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:We.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:We.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:We.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:We.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:We.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:We.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:We.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:We.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:We.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:We.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:We.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},je=t=>e=>{const n=e.theme,r=xe(Ye,n[De.textStyleScheme]);return n.options&&n.options.textStyle?we(r,t,n.options.textStyle):we(r,t)},Le={D1:{fontFamily:je("D1.fontFamily"),fontSize:je("D1.fontSize"),fontWeight:je("D1.fontWeight"),lineHeight:je("D1.lineHeight"),letterSpacing:je("D1.letterSpacing")},D2:{fontFamily:je("D2.fontFamily"),fontSize:je("D2.fontSize"),fontWeight:je("D2.fontWeight"),lineHeight:je("D2.lineHeight"),letterSpacing:je("D2.letterSpacing")},D3:{fontFamily:je("D3.fontFamily"),fontSize:je("D3.fontSize"),fontWeight:je("D3.fontWeight"),lineHeight:je("D3.lineHeight"),letterSpacing:je("D3.letterSpacing")},D4:{fontFamily:je("D4.fontFamily"),fontSize:je("D4.fontSize"),fontWeight:je("D4.fontWeight"),lineHeight:je("D4.lineHeight"),letterSpacing:je("D4.letterSpacing")},DBody:{fontFamily:je("DBody.fontFamily"),fontSize:je("DBody.fontSize"),fontWeight:je("DBody.fontWeight"),lineHeight:je("DBody.lineHeight"),letterSpacing:je("DBody.letterSpacing")},H1:{fontFamily:je("H1.fontFamily"),fontSize:je("H1.fontSize"),fontWeight:je("H1.fontWeight"),lineHeight:je("H1.lineHeight"),letterSpacing:je("H1.letterSpacing")},H2:{fontFamily:je("H2.fontFamily"),fontSize:je("H2.fontSize"),fontWeight:je("H2.fontWeight"),lineHeight:je("H2.lineHeight"),letterSpacing:je("H2.letterSpacing")},H3:{fontFamily:je("H3.fontFamily"),fontSize:je("H3.fontSize"),fontWeight:je("H3.fontWeight"),lineHeight:je("H3.lineHeight"),letterSpacing:je("H3.letterSpacing")},H4:{fontFamily:je("H4.fontFamily"),fontSize:je("H4.fontSize"),fontWeight:je("H4.fontWeight"),lineHeight:je("H4.lineHeight"),letterSpacing:je("H4.letterSpacing")},H5:{fontFamily:je("H5.fontFamily"),fontSize:je("H5.fontSize"),fontWeight:je("H5.fontWeight"),lineHeight:je("H5.lineHeight"),letterSpacing:je("H5.letterSpacing")},H6:{fontFamily:je("H6.fontFamily"),fontSize:je("H6.fontSize"),fontWeight:je("H6.fontWeight"),lineHeight:je("H6.lineHeight"),letterSpacing:je("H6.letterSpacing")},Body:{fontFamily:je("Body.fontFamily"),fontSize:je("Body.fontSize"),fontWeight:je("Body.fontWeight"),lineHeight:je("Body.lineHeight"),letterSpacing:je("Body.letterSpacing")},BodySmall:{fontFamily:je("BodySmall.fontFamily"),fontSize:je("BodySmall.fontSize"),fontWeight:je("BodySmall.fontWeight"),lineHeight:je("BodySmall.lineHeight"),letterSpacing:je("BodySmall.letterSpacing")},XSmall:{fontFamily:je("XSmall.fontFamily"),fontSize:je("XSmall.fontSize"),fontWeight:je("XSmall.fontWeight"),lineHeight:je("XSmall.lineHeight"),letterSpacing:je("XSmall.letterSpacing")}},Ie=t=>{switch(t){case 700:case"bold":return We.Bold;case 600:case"semibold":return We.Semibold;case 300:case"light":return We.Light;case 400:case"regular":return We.Regular;default:return""}},Re=(t,e)=>n=>{var r;const i=Le[t].fontFamily(n),o=Le[t].fontWeight(n);return Object.values(We).includes(i)?d`
                font-family: ${Ie(e)||Ie(o)||i};
                font-weight: normal !important;
            `:d`
            font-family: ${i};
            font-weight: ${null!==(r=Pe(e)||o)&&void 0!==r?r:"normal"};
        `},Pe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ve=(t,e,n=!1)=>r=>{const i=Le[t],o=i.fontSize(r);return d`
            ${Re(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ze=(t=!1,e=!1)=>e?d`
            display: block;
        `:t?d`
            display: inline;
        `:d`
            display: block;
        `;var Xe;!function(t){t.D1=s.h1`
        ${t=>d`
                ${Ve("D1",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D2=s.h1`
        ${t=>d`
                ${Ve("D2",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D3=s.h1`
        ${t=>d`
                ${Ve("D3",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.D4=s.h1`
        ${t=>d`
                ${Ve("D4",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.DBody=s.h1`
        ${t=>d`
                ${Ve("DBody",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H1=s.h1`
        ${t=>d`
                ${Ve("H1",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H2=s.h2`
        ${t=>d`
                ${Ve("H2",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H3=s.h3`
        ${t=>d`
                ${Ve("H3",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H4=s.h4`
        ${t=>d`
                ${Ve("H4",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H5=s.h5`
        ${t=>d`
                ${Ve("H5",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.H6=s.h6`
        ${t=>d`
                ${Ve("H6",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.Body=s.p`
        ${t=>d`
                ${Ve("Body",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=s.p`
        ${t=>d`
                ${Ve("BodySmall",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.XSmall=s.span`
        ${t=>d`
                ${Ve("XSmall",t.weight,t.paragraph)}
                color: ${Oe.Neutral[1]};
                ${Ze(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Je(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Je(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Xe||(Xe={}));const Ue=s.a`
    ${t=>d`
            ${Ve(t.textStyle,t.weight)}
            color: ${Oe.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Oe.Secondary};

                svg {
                    color: ${Oe.Secondary};
                }
            }
        `}
`,Ge=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Je=n=>{var{external:r=!1,children:i}=n,o=f(n,["external","children"]);return t(Ue,Object.assign({},o,{children:[i,r&&e(Ge,{})]}))};var qe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(qe||(qe={}));const Ke=s.button`
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
    ${t=>{switch(t.$buttonStyle){case"secondary":return d`
                    background-color: ${Oe.Neutral[8](t)};
                    border: 1px solid ${Oe.Primary(t)};

                    span {
                        color: ${Oe.Primary(t)};
                    }
                `;case"light":return d`
                    background-color: ${Oe.Neutral[8](t)};
                    border: 1px solid ${Oe.Neutral[5](t)};

                    span {
                        color: ${Oe.Primary(t)};
                    }
                `;case"disabled":return d`
                    background-color: ${Oe.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Oe.Neutral[3](t)};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Oe.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Oe.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${Oe.Primary(t)};
                    border: 1px solid transparent;

                    ${ze.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Oe.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?d`
                    height: 2.5rem;
                    span {
                        ${Ve("H5","semibold")}
                    }

                    ${ze.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    span {
                        ${Ve("H4","semibold")}
                    }

                    ${ze.mobileS} {
                        height: auto;
                    }
                `}
`,Qe=s((({color:n,className:r,size:i=18})=>t(Ee,Object.assign({className:r,$size:i,$color:n},{children:[e(_e,{id:"inner1",$size:i-2,$borderWidth:2}),e(Ce,{id:"inner2",$size:i-2,$borderWidth:2}),e(Ae,{id:"inner3",$size:i-2,$borderWidth:2}),e(Ne,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=Oe.Primary(t);break;case"disabled":e=Oe.Neutral[3](t);break;default:e=Oe.Neutral[8](t)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,tn={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default"}=n,s=f(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return t(Ke,Object.assign({ref:r,"data-testid":s["data-testid"]||"button",disabled:o},c,s,{children:[a&&e(Qe,Object.assign({},c)),e("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default"}=n,s=f(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return t(Ke,Object.assign({ref:r,"data-testid":s["data-testid"]||"button",disabled:o},c,s,{children:[a&&e(Qe,Object.assign({},c,{size:16})),e("span",{children:i})]}))}))},en={collections:{base:{InputBoxShadow:d`
        inset 0 0 6px 1px ${Oe.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${Oe.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Oe.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:d`
        inset 0 0 6px 1px ${Oe.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${Oe.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Oe.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},nn=t=>e=>{var n;const r=e.theme,i=xe(en,r[De.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?we(i,t,r.options.designToken):we(i,t)},rn=nn("InputBoxShadow"),on=nn("InputErrorBoxShadow"),an=(nn("ElevationBoxShadow"),nn("Table.Header"),nn("Table.Cell.Primary"),nn("Table.Cell.Secondary"),nn("Table.Cell.Selected"),nn("Table.Cell.Hover"),s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Oe.Neutral[5]};
    border-radius: 4px;
    background: ${Oe.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Oe.Accent.Light[1]};
        box-shadow: ${rn};
    }

    ${t=>t.$readOnly?d`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:t.$disabled?d`
                background: ${Oe.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Oe.Neutral[5]};
                    box-shadow: none;
                }
            `:t.$error?d`
                border: 1px solid ${Oe.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Oe.Validation.Red.Border};
                    box-shadow: ${on};
                }
            `:void 0}
`);s.input`
    ${Ve("Body","regular")}
    color: ${Oe.Neutral[1]};
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
        color: ${Oe.Neutral[3]};
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
`;var ln={exports:{}};ln.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},u={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],h=d&&d[0],f=d&&d[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=t.slice(r),d=o.exec(c)[0];s.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!s&&u&&(o=n.Ls[u]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,b=s||0,v=c||0,$=d||0;return u?new Date(Date.UTC(g,m,p,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(t){return new Date("")}}(e,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var sn,cn,dn=ln.exports,un={exports:{}},hn=un.exports=(sn={year:0,month:1,day:2,hour:3,minute:4,second:5},cn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=cn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),cn[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,d=sn[s];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+t;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=t,s},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,l=i||e||r,s=o(+n(),l);if("string"!=typeof t)return n(t).tz(l);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),fn={exports:{}};fn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",$={};$[v]=m;var S=function(t){return t instanceof D},F=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;$[l]=e,i=l}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},x=b;x.l=F,x.i=S,x.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=F(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!x.u(e)||e,d=x.p(t),f=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},p=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(r?y-$:y+(6-$),m);case l:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=x.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],p=s===l?this.$D+(e-this.$W):e;if(s===c||s===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[x.p(t)]()},y.add=function(r,d){var h,f=this;r=Number(r);var p=x.p(d),g=function(t){var e=w(f);return x.w(e.date(e.date()+Math.round(t*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[p]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},u=function(t){return x.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:x.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:x.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=x.p(h),m=w(r),y=(m.utcOffset()-this.utcOffset())*e,b=this-m,v=x.m(this,m);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[s]=(b-y)/6048e5,p[l]=(b-y)/864e5,p[a]=b/n,p[o]=b/e,p[i]=b/t,p)[g]||b,f?v:x.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=F(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return w.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(t){B[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,D,w),t.$i=!0),w},w.locale=F,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=$[v],w.Ls=$,w.p={},w}();var pn=fn.exports,gn={exports:{}};gn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var mn=gn.exports,yn={exports:{}};yn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var bn=yn.exports,vn={exports:{}};vn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var $n,Sn=vn.exports;pn.extend(mn),pn.extend(bn),pn.extend(Sn),pn.extend(dn),pn.extend(hn),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=pn(e).startOf("week");return Fn(n).map((t=>wn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return wn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(pn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+pn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=pn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}($n||($n={}));const Fn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},wn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},xn=[1,3,5,7,8,10,12],Dn=[4,6,9,11];var Bn,Hn,On;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":xn.includes(o)?Math.min(i,31).toString():Dn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=pn(t,n);return pn(e,n).diff(r,"minute")}}(Bn||(Bn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Hn||(Hn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(On||(On={}));const kn=s.input`
    ${Ve("Body","regular")}
    color: ${Oe.Neutral[1]};

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
        color: ${Oe.Neutral[3]};
    }

    ${t=>"number"===t.type?d`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:t.disabled?d`
                cursor: not-allowed;
            `:void 0}
`,Mn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Oe.Neutral[3]};
    background-color: transparent;
    border: none;
`,zn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,En=s.div`
    display: flex;
    width: 100%;
`,Tn=r.forwardRef(((r,a)=>{var{value:l,spacing:s,type:c,error:d,disabled:u,readOnly:h,onChange:p,onClear:g,allowClear:m=!1,className:y,styleType:b="bordered"}=r,v=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=i();o(a,(()=>$.current),[]);const S=function({ref:t,formatter:e}){return()=>{const n=t.current,r=n.value,i=e(r),o=r.substring(0,n.selectionEnd),a=e(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}({ref:$,formatter:t=>On.transformWithSpaces(t,s)}),F=t=>{p&&(x()?D(t):p(t))},w=()=>{g&&g(),$&&$.current&&$.current.focus()},x=()=>"tel"===c&&s,D=t=>{const{nextValue:e,updateCaretPosition:n}=S(),r=e.replace(/\s/g,"");t.target.value=r,p(t),n()},B=l?(t=>t?x()?On.transformWithSpaces(t,s):t:"")(l):l,H=()=>t(n,{children:[e(kn,Object.assign({"data-testid":"input",ref:$,disabled:u,value:B,onChange:F,type:c,readOnly:h},v)),m&&!u&&!h&&!!l&&e(Mn,Object.assign({onClick:w,type:"button"},{children:e(zn,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===b?e(En,Object.assign({className:y},{children:H()})):e(an,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:H()}))})})),_n=s.div`
    display: flex;
    flex-direction: column;
`,Cn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,An=s(Tn)`
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

    ${ze.mobileM} {
        padding: 0 0.5rem;
    }
`,Nn=s(tn.Small)`
    margin: 2rem 0rem;
`;s.div`
    border-radius: 0.5rem;
    background: ${Oe.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;s.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,s.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=d`
                transition: none;
            `),e}}
`;s.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,n=t.animationFrom||"bottom",e?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,n}}

    ${ze.mobileL} {
        height: calc(
            ${t=>t.verticalHeight?`${t.verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.offsetTop||0}px;
    }
`;const Wn=s.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&d`
                background-color: ${Oe.Neutral[7]};
            `}
    }
`,Yn=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,l=f(t,["children","focusHighlight","focusOutline","type"]);return e(Wn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),jn=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Oe.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ze.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ln=s(Yn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Oe.Accent.Light[1]};
    }
`,In=s(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Oe.Neutral[4]};
`,Rn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";s.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${t=>t.$visible?d`
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
    ${t=>(t=>{switch(t){case"top-center":return d`
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
            `}})(t.$offset)}

	${ze.mobileL} {
        display: none;
    }
`,s((n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return t(jn,Object.assign({"data-testid":r},l,{onClick:t=>{t.stopPropagation()}},{children:[a&&e(Ln,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:e(In,{})})),i]}))}))`
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
        color: ${Oe.Primary};
    }
`,s.div`
    display: inline;
    position: relative;
    width: fit-content;
`,s.label`
    ${Ve("H5","semibold")}

    color: ${t=>t.disabled?Oe.Neutral[4](t):Oe.Neutral[3](t)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;const Pn=s(Xe.H6)`
    color: ${Oe.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Xe.BodySmall)`
    color: ${t=>t.disabled?Oe.Neutral[4](t):Oe.Neutral[3](t)};
`;const Vn=t=>e(Pn,Object.assign({weight:"semibold"},t)),Zn=n=>{var{id:r,value:o=[],"data-testid":s,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:p,onChange:g,onCooldownStart:m,onCooldownEnd:y}=n,b=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=u?u:{},{disabled:$,onClick:S,styleType:F="secondary"}=v,w=f(v,["disabled","onClick","styleType"]),x=i([]),D=i(g),[B,H]=a(new Array(p).fill("")),[O,k]=a(d),[M,z]=a(new Date);l((()=>{var t;return null===(t=null==x?void 0:x.current[0])||void 0===t||t.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),l((()=>{if(0!==d){m&&m();const t=N();return()=>t()}}),[M]),l((()=>{D.current=g}),[g]),l((()=>{o.length===p&&H(o)}),[o]);const E=t=>e=>{var n;const r=e.target.value.replace(/[^0-9]/g,"");if(C(r)){const e=[...B];e[t]=r.substring(r.length-1),null===(n=x.current[t+1])||void 0===n||n.focus(),H(e),g&&g(e)}},T=t=>e=>{var n;const{key:r,code:i}=e;if("Backspace"===r||"Backspace"===i){const e=[...B];""!==e[t]?e[t]="":0!==t&&(e[t-1]="",null===(n=x.current[t-1])||void 0===n||n.focus()),H(e),g&&g(e)}},_=t=>{const e=t.clipboardData.getData("text"),n=e.split("");e&&C(e,p)?(H(n),D.current&&D.current(n)):t.preventDefault()},C=(t,e=1)=>!!t&&RegExp(`^[0-9]{${e}}$`).test(t),A=()=>{const t=Date.now(),e=1e3*d;return t<M.valueOf()+e},N=()=>{const t=setInterval((()=>{const e=Date.now(),n=1e3*d,r=Math.ceil((M.valueOf()+n-e)/1e3);k(r),r<=0&&(y&&y(),clearInterval(t))}),1e3);return()=>{clearInterval(t)}},W=(t,e,n)=>n?`${n}-${e}-${t+1}`:`${e}-${t+1}`;return t(_n,Object.assign({id:r,"data-testid":s,className:c},{children:[e(Cn,{children:B.map(((t,n)=>e(An,Object.assign({id:W(n,"otp-input",r),"data-testid":W(n,"otp-input",s),ref:t=>x.current[n]=t,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:E(n),onKeyDown:T(n)},b),n)))}),h&&e(Vn,{children:h}),e(Nn,Object.assign({styleType:F,type:"button"},w,{onClick:t=>{H(new Array(p).fill("")),A()||(z(new Date),k(d)),S&&S(t)},disabled:$||A()},{children:w.children?w.children:"Resend OTP"+(O?` in ${O} second${O>1?"s":""}`:"")}))]}))};export{Zn as OtpInput};
//# sourceMappingURL=index.js.map
