import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{keyframes as c,css as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"react-dom";var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,g="object"==typeof f&&f&&f.Object===Object&&f,m="object"==typeof self&&self&&self.Object===Object&&self,y=g||m||Function("return this")(),$=y.Symbol,v=$,b=Object.prototype,S=b.hasOwnProperty,F=b.toString,x=v?v.toStringTag:void 0;var w=function(t){var e=S.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var i=F.call(t);return r&&(e?t[x]=n:delete t[x]),i},D=Object.prototype.toString;var B=w,H=function(t){return D.call(t)},k=$?$.toStringTag:void 0;var M=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?B(t):H(t)};var z=M,E=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==z(t)},_=p,T=O,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var N=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!T(t))||(C.test(t)||!A.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Y=M,L=W;var I,R=function(t){if(!L(t))return!1;var e=Y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=y["__core-js_shared__"],V=(I=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var j=function(t){return!!V&&V in t},Z=Function.prototype.toString;var X=R,U=j,G=W,J=function(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,tt=K.toString,et=Q.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(t){return!(!G(t)||U(t))&&(X(t)?nt:q).test(J(t))},it=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=it(t,e);return rt(n)?n:void 0},at=ot(Object,"create"),lt=at;var st=function(){this.__data__=lt?lt(null):{},this.size=0};var ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=at,ut=Object.prototype.hasOwnProperty;var ht=function(t){var e=this.__data__;if(dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ut.call(e,t)?e[t]:void 0},ft=at,pt=Object.prototype.hasOwnProperty;var gt=at;var mt=st,yt=ct,$t=ht,vt=function(t){var e=this.__data__;return ft?void 0!==e[t]:pt.call(e,t)},bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=mt,St.prototype.delete=yt,St.prototype.get=$t,St.prototype.has=vt,St.prototype.set=bt;var Ft=St;var xt=function(){this.__data__=[],this.size=0};var wt=function(t,e){return t===e||t!=t&&e!=e};var Dt=function(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1},Bt=Dt,Ht=Array.prototype.splice;var kt=Dt;var Mt=Dt;var zt=Dt;var Et=xt,Ot=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=kt(e,t);return n<0?void 0:e[n][1]},Tt=function(t){return Mt(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=Et,Ct.prototype.delete=Ot,Ct.prototype.get=_t,Ct.prototype.has=Tt,Ct.prototype.set=At;var Nt=Ct,Wt=ot(y,"Map"),Yt=Ft,Lt=Nt,It=Wt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Pt;var jt=Pt;var Zt=Pt;var Xt=Pt;var Ut=function(){this.size=0,this.__data__={hash:new Yt,map:new(It||Lt),string:new Yt}},Gt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Jt=function(t){return jt(this,t).get(t)},qt=function(t){return Zt(this,t).has(t)},Kt=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=Ut,Qt.prototype.delete=Gt,Qt.prototype.get=Jt,Qt.prototype.has=qt,Qt.prototype.set=Kt;var te=Qt;function ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ee.Cache||te),n}ee.Cache=te;var ne=ee;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/\\(\\)?/g,oe=function(t){var e=ne(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(re,(function(t,n,r,i){e.push(r?i.replace(ie,"$1"):n||t)})),e}));var ae=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},le=p,se=O,ce=$?$.prototype:void 0,de=ce?ce.toString:void 0;var ue=function t(e){if("string"==typeof e)return e;if(le(e))return ae(e,t)+"";if(se(e))return de?de.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},he=ue;var fe=p,pe=N,ge=oe,me=function(t){return null==t?"":he(t)};var ye=O;var $e=function(t,e){return fe(t)?t:pe(t,e)?[t]:ge(me(t))},ve=function(t){if("string"==typeof t||ye(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var be=function(t,e){for(var n=0,r=(e=$e(e,t)).length;null!=t&&n<r;)t=t[ve(e[n++])];return n&&n==r?t:void 0};var Se=function(t,e,n){var r=null==t?void 0:be(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?Se(n,e)||Se(t,e):n||t,xe=(t,e)=>{const n=e||t.defaultValue;return Se(t.collections,n)};var we;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(we||(we={}));const De={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=xe(De,n[we.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},He={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")},Blue:{Text:Be("Validation.Blue.Text"),Icon:Be("Validation.Blue.Icon"),Border:Be("Validation.Blue.Border"),Background:Be("Validation.Blue.Background")}},Shadow:{Accent:Be("Shadow.Accent"),Red:Be("Shadow.Red"),Elevation:Be("Shadow.Elevation")}},ke={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Me=t=>Object.keys(ke).reduce(((e,n)=>{const r=ke[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),ze=Me("max-width"),Ee=(Me("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`),Oe=c`
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
    border-color: ${t=>t.$color||He.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${Oe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Te=s(_e)`
    animation-delay: -0.45s;
`,Ae=s(_e)`
    animation-delay: -0.3s;
`,Ce=s(_e)`
    animation-delay: -0.15s;
`,Ne={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},We={collections:{base:{D1:{fontFamily:Ne.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ne.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ne.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ne.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ne.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ne.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ne.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ne.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ne.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ne.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ne.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ne.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ne.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ne.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ye=t=>e=>{const n=e.theme,r=xe(We,n[we.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},Le={D1:{fontFamily:Ye("D1.fontFamily"),fontSize:Ye("D1.fontSize"),fontWeight:Ye("D1.fontWeight"),lineHeight:Ye("D1.lineHeight"),letterSpacing:Ye("D1.letterSpacing")},D2:{fontFamily:Ye("D2.fontFamily"),fontSize:Ye("D2.fontSize"),fontWeight:Ye("D2.fontWeight"),lineHeight:Ye("D2.lineHeight"),letterSpacing:Ye("D2.letterSpacing")},D3:{fontFamily:Ye("D3.fontFamily"),fontSize:Ye("D3.fontSize"),fontWeight:Ye("D3.fontWeight"),lineHeight:Ye("D3.lineHeight"),letterSpacing:Ye("D3.letterSpacing")},D4:{fontFamily:Ye("D4.fontFamily"),fontSize:Ye("D4.fontSize"),fontWeight:Ye("D4.fontWeight"),lineHeight:Ye("D4.lineHeight"),letterSpacing:Ye("D4.letterSpacing")},DBody:{fontFamily:Ye("DBody.fontFamily"),fontSize:Ye("DBody.fontSize"),fontWeight:Ye("DBody.fontWeight"),lineHeight:Ye("DBody.lineHeight"),letterSpacing:Ye("DBody.letterSpacing")},H1:{fontFamily:Ye("H1.fontFamily"),fontSize:Ye("H1.fontSize"),fontWeight:Ye("H1.fontWeight"),lineHeight:Ye("H1.lineHeight"),letterSpacing:Ye("H1.letterSpacing")},H2:{fontFamily:Ye("H2.fontFamily"),fontSize:Ye("H2.fontSize"),fontWeight:Ye("H2.fontWeight"),lineHeight:Ye("H2.lineHeight"),letterSpacing:Ye("H2.letterSpacing")},H3:{fontFamily:Ye("H3.fontFamily"),fontSize:Ye("H3.fontSize"),fontWeight:Ye("H3.fontWeight"),lineHeight:Ye("H3.lineHeight"),letterSpacing:Ye("H3.letterSpacing")},H4:{fontFamily:Ye("H4.fontFamily"),fontSize:Ye("H4.fontSize"),fontWeight:Ye("H4.fontWeight"),lineHeight:Ye("H4.lineHeight"),letterSpacing:Ye("H4.letterSpacing")},H5:{fontFamily:Ye("H5.fontFamily"),fontSize:Ye("H5.fontSize"),fontWeight:Ye("H5.fontWeight"),lineHeight:Ye("H5.lineHeight"),letterSpacing:Ye("H5.letterSpacing")},H6:{fontFamily:Ye("H6.fontFamily"),fontSize:Ye("H6.fontSize"),fontWeight:Ye("H6.fontWeight"),lineHeight:Ye("H6.lineHeight"),letterSpacing:Ye("H6.letterSpacing")},Body:{fontFamily:Ye("Body.fontFamily"),fontSize:Ye("Body.fontSize"),fontWeight:Ye("Body.fontWeight"),lineHeight:Ye("Body.lineHeight"),letterSpacing:Ye("Body.letterSpacing")},BodySmall:{fontFamily:Ye("BodySmall.fontFamily"),fontSize:Ye("BodySmall.fontSize"),fontWeight:Ye("BodySmall.fontWeight"),lineHeight:Ye("BodySmall.lineHeight"),letterSpacing:Ye("BodySmall.letterSpacing")},XSmall:{fontFamily:Ye("XSmall.fontFamily"),fontSize:Ye("XSmall.fontSize"),fontWeight:Ye("XSmall.fontWeight"),lineHeight:Ye("XSmall.lineHeight"),letterSpacing:Ye("XSmall.letterSpacing")}},Ie=t=>{switch(t){case 700:case"bold":return Ne.Bold;case 600:case"semibold":return Ne.Semibold;case 300:case"light":return Ne.Light;case 400:case"regular":return Ne.Regular;default:return""}},Re=(t,e)=>n=>{const r=Le[t].fontFamily(n),i=Le[t].fontWeight(n);return Object.values(Ne).includes(r)?d`
                font-family: ${Ie(e)||Ie(i)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(Pe(e)||i)??"normal"};
        `},Pe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ve=(t,e,n=!1)=>r=>{const i=Le[t],o=i.fontSize(r);return d`
            ${Re(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},je=(t=!1,e=!1)=>e?d`
            display: block;
        `:t?d`
            display: inline;
        `:d`
            display: block;
        `;var Ze;!function(t){t.D1=s.h1`
        ${t=>d`
                ${Ve("D1",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D2=s.h1`
        ${t=>d`
                ${Ve("D2",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D3=s.h1`
        ${t=>d`
                ${Ve("D3",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.D4=s.h1`
        ${t=>d`
                ${Ve("D4",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.DBody=s.h1`
        ${t=>d`
                ${Ve("DBody",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H1=s.h1`
        ${t=>d`
                ${Ve("H1",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H2=s.h2`
        ${t=>d`
                ${Ve("H2",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H3=s.h3`
        ${t=>d`
                ${Ve("H3",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H4=s.h4`
        ${t=>d`
                ${Ve("H4",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H5=s.h5`
        ${t=>d`
                ${Ve("H5",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.H6=s.h6`
        ${t=>d`
                ${Ve("H6",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.Body=s.p`
        ${t=>d`
                ${Ve("Body",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=s.p`
        ${t=>d`
                ${Ve("BodySmall",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.XSmall=s.span`
        ${t=>d`
                ${Ve("XSmall",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${je(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ge({...t,textStyle:"Body"}),Small:t=>Ge({...t,textStyle:"BodySmall"})}}(Ze||(Ze={}));const Xe=s.a`
    ${t=>d`
            ${Ve(t.textStyle,t.weight)}
            color: ${He.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${He.Secondary};

                svg {
                    color: ${He.Secondary};
                }
            }
        `}
`,Ue=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ge=({external:n=!1,children:r,...i})=>t(Xe,{...i,children:[r,n&&e(Ue,{})]});var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const qe=s.button`
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
                    background-color: ${He.Neutral[8](t)};
                    border: 1px solid ${He.Primary(t)};

                    span {
                        color: ${He.Primary(t)};
                    }
                `;case"light":return d`
                    background-color: ${He.Neutral[8](t)};
                    border: 1px solid ${He.Neutral[5](t)};

                    span {
                        color: ${He.Primary(t)};
                    }
                `;case"disabled":return d`
                    background-color: ${He.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${He.Neutral[3](t)};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${He.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${He.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${He.Primary(t)};
                    border: 1px solid transparent;

                    ${ze.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${He.Neutral[8](t)};
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
`,Ke=s((({color:n,className:r,size:i=18})=>t(Ee,{className:r,$size:i,$color:n,children:[e(_e,{id:"inner1",$size:i-2,$borderWidth:2}),e(Te,{id:"inner2",$size:i-2,$borderWidth:2}),e(Ae,{id:"inner3",$size:i-2,$borderWidth:2}),e(Ce,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=He.Primary(t);break;case"disabled":e=He.Neutral[3](t);break;default:e=He.Neutral[8](t)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,Qe={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=n,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default"};return t(qe,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&e(Ke,{...c}),e("span",{children:i})]})})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:l="default",...s}=n,c={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small"};return t(qe,{ref:r,"data-testid":s["data-testid"]||"button",disabled:o,...c,...s,children:[a&&e(Ke,{...c,size:16}),e("span",{children:i})]})}))},tn={collections:{base:{InputBoxShadow:d`
        inset 0 0 6px 1px ${He.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${He.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${He.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:d`
        inset 0 0 6px 1px ${He.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${He.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${He.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},en=t=>e=>{const n=e.theme,r=xe(tn,n[we.designTokenScheme]);return n.options?.designToken?Fe(r,t,n.options.designToken):Fe(r,t)},nn=en("InputBoxShadow"),rn=en("InputErrorBoxShadow"),on=(en("ElevationBoxShadow"),en("Table.Header"),en("Table.Cell.Primary"),en("Table.Cell.Secondary"),en("Table.Cell.Selected"),en("Table.Cell.Hover"),s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${He.Neutral[5]};
    border-radius: 4px;
    background: ${He.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${He.Accent.Light[1]};
        box-shadow: ${nn};
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
                background: ${He.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${He.Neutral[5]};
                    box-shadow: none;
                }
            `:t.$error?d`
                border: 1px solid ${He.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${He.Validation.Red.Border};
                    box-shadow: ${rn};
                }
            `:void 0}
`);s.input`
    ${Ve("Body","regular")}
    color: ${He.Neutral[1]};
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
        color: ${He.Neutral[3]};
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
`;var an={exports:{}};an.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},u={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],h=d&&d[0],f=d&&d[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=t.slice(r),d=o.exec(c)[0];s.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!s&&u&&(o=n.Ls[u]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,$=s||0,v=c||0,b=d||0;return u?new Date(Date.UTC(g,m,p,y,$,v,b+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,$,v,b)):new Date(g,m,p,y,$,v,b)}catch(t){return new Date("")}}(e,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var ln,sn,cn=an.exports,dn={exports:{}},un=dn.exports=(ln={year:0,month:1,day:2,hour:3,minute:4,second:5},sn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=sn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),sn[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,d=ln[s];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+t;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=t,s},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,l=i||e||r,s=o(+n(),l);if("string"!=typeof t)return n(t).tz(l);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),hn={exports:{}};hn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",b={};b[v]=m;var S=function(t){return t instanceof D},F=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;b[l]=e,i=l}return!r&&i&&(v=i),i||!r&&v},x=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=$;w.l=F,w.i=S,w.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=F(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return x(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<x(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,d=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,b=(g<v?g+7:g)-v;return f(r?y-b:y+(6-b),m);case l:case h:return p($+"Hours",0);case a:return p($+"Minutes",1);case o:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=w.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],p=s===l?this.$D+(e-this.$W):e;if(s===c||s===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,d){var h,f=this;r=Number(r);var p=w.p(d),g=function(t){var e=x(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[p]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},u=function(t){return w.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:w.s(o,2,"0"),h:u(1),hh:u(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=w.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,v=w.m(this,m);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[s]=($-y)/6048e5,p[l]=($-y)/864e5,p[a]=$/n,p[o]=$/e,p[i]=$/t,p)[g]||$,f?v:w.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=F(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return x.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(t){B[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,D,x),t.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(t){return x(1e3*t)},x.en=b[v],x.Ls=b,x.p={},x}();var fn=hn.exports,pn={exports:{}};pn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var gn=pn.exports,mn={exports:{}};mn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var yn=mn.exports,$n={exports:{}};$n.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var vn,bn=$n.exports;fn.extend(gn),fn.extend(yn),fn.extend(bn),fn.extend(cn),fn.extend(un),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=fn(e).startOf("week");return Sn(n).map((t=>Fn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Fn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(fn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+fn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=fn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(vn||(vn={}));const Sn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Fn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},xn=[1,3,5,7,8,10,12],wn=[4,6,9,11];var Dn,Bn,Hn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":xn.includes(o)?Math.min(i,31).toString():wn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=fn(t,n);return fn(e,n).diff(r,"minute")}}(Dn||(Dn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Bn||(Bn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Hn||(Hn={}));const kn=s.input`
    ${Ve("Body","regular")}
    color: ${He.Neutral[1]};

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
        color: ${He.Neutral[3]};
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
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${He.Neutral[3]};
    background-color: transparent;
    border: none;
`,zn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,En=s.div`
    display: flex;
    width: 100%;
`,On=r.forwardRef((({value:r,spacing:a,type:l,error:s,disabled:c,readOnly:d,onChange:u,onClear:h,allowClear:f=!1,className:p,styleType:g="bordered",...m},y)=>{const $=i();o(y,(()=>$.current),[]);const v=function({ref:t,formatter:e}){return()=>{const n=t.current,r=n.value,i=e(r),o=r.substring(0,n.selectionEnd),a=e(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}({ref:$,formatter:t=>Hn.transformWithSpaces(t,a)}),b=t=>{u&&(F()?x(t):u(t))},S=()=>{h&&h(),$&&$.current&&$.current.focus()},F=()=>"tel"===l&&a,x=t=>{const{nextValue:e,updateCaretPosition:n}=v(),r=e.replace(/\s/g,"");t.target.value=r,u(t),n()},w=r?(t=>t?F()?Hn.transformWithSpaces(t,a):t:"")(r):r,D=()=>t(n,{children:[e(kn,{"data-testid":"input",ref:$,disabled:c,value:w,onChange:b,type:l,readOnly:d,...m}),f&&!c&&!d&&!!r&&e(Mn,{onClick:S,type:"button",children:e(zn,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===g?e(En,{className:p,children:D()}):e(on,{$disabled:c,$error:s,$readOnly:d,className:p,children:D()})})})),_n=s.div`
    display: flex;
    flex-direction: column;
`,Tn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,An=s(On)`
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
`,Cn=s(Qe.Small)`
    margin: 2rem 0rem;
`;s.div`
    border-radius: 0.5rem;
    background: ${He.Neutral[8]};
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
`;const Nn=s.button`
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
                background-color: ${He.Neutral[7]};
            `}
    }
`,Wn=r.forwardRef((({children:t,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>e(Nn,{ref:a,$outline:r,$highlight:n,type:i,...o,children:t}))),Yn=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${He.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${ze.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ln=s(Wn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${He.Accent.Light[1]};
    }
`,In=s(h)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${He.Neutral[4]};
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
`,s((({id:n="modal-box",children:r,onClose:i,showCloseButton:o=!0,...a})=>t(Yn,{"data-testid":n,...a,onClick:t=>{t.stopPropagation()},children:[o&&e(Ln,{onClick:i,"data-testid":"close-button",focusHighlight:!1,children:e(In,{})}),r]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    position: relative;
    width: fit-content;
`,s.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,s.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${He.Primary};
    }
`,s.div`
    display: inline;
    position: relative;
    width: fit-content;
`,s.label`
    ${Ve("H5","semibold")}

    color: ${t=>t.disabled?He.Neutral[4](t):He.Neutral[3](t)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;const Pn=s(Ze.H6)`
    color: ${He.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(Ze.BodySmall)`
    color: ${t=>t.disabled?He.Neutral[4](t):He.Neutral[3](t)};
`;const Vn=t=>e(Pn,{weight:"semibold",...t}),jn=({id:n,value:r=[],"data-testid":o,className:s,cooldownDuration:c,actionButtonProps:d,errorMessage:u,numOfInput:h,onChange:f,onCooldownStart:p,onCooldownEnd:g,...m})=>{const{disabled:y,onClick:$,styleType:v="secondary",...b}=d??{},S=i([]),F=i(f),[x,w]=a(new Array(h).fill("")),[D,B]=a(c),[H,k]=a(new Date);l((()=>(S?.current[0]?.focus(),document.addEventListener("paste",E),()=>document.removeEventListener("paste",E))),[]),l((()=>{if(0!==c){p&&p();const t=T();return()=>t()}}),[H]),l((()=>{F.current=f}),[f]),l((()=>{r.length===h&&w(r)}),[r]);const M=t=>e=>{const n=e.target.value.replace(/[^0-9]/g,"");if(O(n)){const e=[...x];e[t]=n.substring(n.length-1),S.current[t+1]?.focus(),w(e),f&&f(e)}},z=t=>e=>{const{key:n,code:r}=e;if("Backspace"===n||"Backspace"===r){const e=[...x];""!==e[t]?e[t]="":0!==t&&(e[t-1]="",S.current[t-1]?.focus()),w(e),f&&f(e)}},E=t=>{const e=t.clipboardData.getData("text"),n=e.split("");e&&O(e,h)?(w(n),F.current&&F.current(n)):t.preventDefault()},O=(t,e=1)=>!!t&&RegExp(`^[0-9]{${e}}$`).test(t),_=()=>{const t=Date.now(),e=1e3*c;return t<H.valueOf()+e},T=()=>{const t=setInterval((()=>{const e=Date.now(),n=1e3*c,r=Math.ceil((H.valueOf()+n-e)/1e3);B(r),r<=0&&(g&&g(),clearInterval(t))}),1e3);return()=>{clearInterval(t)}},A=(t,e,n)=>n?`${n}-${e}-${t+1}`:`${e}-${t+1}`;return t(_n,{id:n,"data-testid":o,className:s,children:[e(Tn,{children:x.map(((t,r)=>e(An,{id:A(r,"otp-input",n),"data-testid":A(r,"otp-input",o),ref:t=>S.current[r]=t,type:"text",inputMode:"numeric",value:t,error:!!u,onChange:M(r),onKeyDown:z(r),...m},r)))}),u&&e(Vn,{children:u}),e(Cn,{styleType:v,type:"button",...b,onClick:t=>{w(new Array(h).fill("")),_()||(k(new Date),B(c)),$&&$(t)},disabled:y||_(),children:b.children?b.children:"Resend OTP"+(D?` in ${D} second${D>1?"s":""}`:"")})]})};export{jn as OtpInput};
//# sourceMappingURL=index.js.map
