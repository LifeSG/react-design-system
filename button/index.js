import{jsxs as e,jsx as t}from"react/jsx-runtime";import r from"react";import n,{keyframes as a,css as o}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,s="object"==typeof self&&self&&self.Object===Object&&self,u=g||s||Function("return this")(),h=u.Symbol,p=h,f=Object.prototype,F=f.hasOwnProperty,y=f.toString,B=p?p.toStringTag:void 0;var m=function(e){var t=F.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var a=y.call(e);return n&&(t?e[B]=r:delete e[B]),a},S=Object.prototype.toString;var b=m,D=function(e){return S.call(e)},$=h?h.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?b(e):D(e)};var H=v,E=function(e){return null!=e&&"object"==typeof e};var x=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==H(e)},w=d,k=x,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var _=function(e,t){if(w(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!k(e))||(z.test(e)||!A.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=v,T=C;var I,W=function(e){if(!T(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=u["__core-js_shared__"],N=(I=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!N&&N in e},L=Function.prototype.toString;var R=W,V=P,X=C,G=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,J=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!X(e)||V(e))&&(R(e)?J:M).test(G(e))},Q=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var r=Q(e,t);return K(r)?r:void 0},te=ee(Object,"create"),re=te;var ne=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},oe=te,ie=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ie.call(t,e)?t[e]:void 0},ce=te,de=Object.prototype.hasOwnProperty;var ge=te;var se=ne,ue=ae,he=le,pe=function(e){var t=this.__data__;return ce?void 0!==t[e]:de.call(t,e)},fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=se,Fe.prototype.delete=ue,Fe.prototype.get=he,Fe.prototype.has=pe,Fe.prototype.set=fe;var ye=Fe;var Be=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var r=e.length;r--;)if(me(e[r][0],t))return r;return-1},be=Se,De=Array.prototype.splice;var $e=Se;var ve=Se;var He=Se;var Ee=Be,xe=function(e){var t=this.__data__,r=be(t,e);return!(r<0)&&(r==t.length-1?t.pop():De.call(t,r,1),--this.size,!0)},we=function(e){var t=this.__data__,r=$e(t,e);return r<0?void 0:t[r][1]},ke=function(e){return ve(this.__data__,e)>-1},Ae=function(e,t){var r=this.__data__,n=He(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ze.prototype.clear=Ee,ze.prototype.delete=xe,ze.prototype.get=we,ze.prototype.has=ke,ze.prototype.set=Ae;var _e=ze,Ce=ee(u,"Map"),Oe=ye,Te=_e,Ie=Ce;var We=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var r=e.__data__;return We(t)?r["string"==typeof t?"string":"hash"]:r.map},Ne=je;var Pe=je;var Le=je;var Re=je;var Ve=function(){this.size=0,this.__data__={hash:new Oe,map:new(Ie||Te),string:new Oe}},Xe=function(e){var t=Ne(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Pe(this,e).get(e)},Me=function(e){return Le(this,e).has(e)},Ue=function(e,t){var r=Re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ze.prototype.clear=Ve,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(qe.Cache||Ye),r}qe.Cache=Ye;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=function(e){var t=Je(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,r,n,a){t.push(n?a.replace(Qe,"$1"):r||e)})),t}));var tt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},rt=d,nt=x,at=h?h.prototype:void 0,ot=at?at.toString:void 0;var it=function e(t){if("string"==typeof t)return t;if(rt(t))return tt(t,e)+"";if(nt(t))return ot?ot.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},lt=it;var ct=d,dt=_,gt=et,st=function(e){return null==e?"":lt(e)};var ut=x;var ht=function(e,t){return ct(e)?e:dt(e,t)?[e]:gt(st(e))},pt=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var r=0,n=(t=ht(t,e)).length;null!=e&&r<n;)e=e[pt(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:ft(e,t);return void 0===n?r:n};const yt=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,Bt=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const r=t.theme,n=Bt(St,r[mt.colorScheme]);return r.options&&r.options.color?yt(n,e,r.options.color):yt(n,e)},Dt={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},$t={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vt=e=>Object.keys($t).reduce(((t,r)=>{const n=$t[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ht=vt("max-width"),Et=(vt("min-width"),n.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),xt=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wt=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Dt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${xt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,kt=n(wt)`
    animation-delay: -0.45s;
`,At=n(wt)`
    animation-delay: -0.3s;
`,zt=n(wt)`
    animation-delay: -0.15s;
`,_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ct={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ot=e=>t=>{const r=t.theme,n=Bt(Ct,r[mt.textStyleScheme]);return r.options&&r.options.textStyle?yt(n,e,r.options.textStyle):yt(n,e)},Tt={D1:{fontFamily:Ot("D1.fontFamily"),fontSize:Ot("D1.fontSize"),fontWeight:Ot("D1.fontWeight"),lineHeight:Ot("D1.lineHeight"),letterSpacing:Ot("D1.letterSpacing")},D2:{fontFamily:Ot("D2.fontFamily"),fontSize:Ot("D2.fontSize"),fontWeight:Ot("D2.fontWeight"),lineHeight:Ot("D2.lineHeight"),letterSpacing:Ot("D2.letterSpacing")},D3:{fontFamily:Ot("D3.fontFamily"),fontSize:Ot("D3.fontSize"),fontWeight:Ot("D3.fontWeight"),lineHeight:Ot("D3.lineHeight"),letterSpacing:Ot("D3.letterSpacing")},D4:{fontFamily:Ot("D4.fontFamily"),fontSize:Ot("D4.fontSize"),fontWeight:Ot("D4.fontWeight"),lineHeight:Ot("D4.lineHeight"),letterSpacing:Ot("D4.letterSpacing")},DBody:{fontFamily:Ot("DBody.fontFamily"),fontSize:Ot("DBody.fontSize"),fontWeight:Ot("DBody.fontWeight"),lineHeight:Ot("DBody.lineHeight"),letterSpacing:Ot("DBody.letterSpacing")},H1:{fontFamily:Ot("H1.fontFamily"),fontSize:Ot("H1.fontSize"),fontWeight:Ot("H1.fontWeight"),lineHeight:Ot("H1.lineHeight"),letterSpacing:Ot("H1.letterSpacing")},H2:{fontFamily:Ot("H2.fontFamily"),fontSize:Ot("H2.fontSize"),fontWeight:Ot("H2.fontWeight"),lineHeight:Ot("H2.lineHeight"),letterSpacing:Ot("H2.letterSpacing")},H3:{fontFamily:Ot("H3.fontFamily"),fontSize:Ot("H3.fontSize"),fontWeight:Ot("H3.fontWeight"),lineHeight:Ot("H3.lineHeight"),letterSpacing:Ot("H3.letterSpacing")},H4:{fontFamily:Ot("H4.fontFamily"),fontSize:Ot("H4.fontSize"),fontWeight:Ot("H4.fontWeight"),lineHeight:Ot("H4.lineHeight"),letterSpacing:Ot("H4.letterSpacing")},H5:{fontFamily:Ot("H5.fontFamily"),fontSize:Ot("H5.fontSize"),fontWeight:Ot("H5.fontWeight"),lineHeight:Ot("H5.lineHeight"),letterSpacing:Ot("H5.letterSpacing")},H6:{fontFamily:Ot("H6.fontFamily"),fontSize:Ot("H6.fontSize"),fontWeight:Ot("H6.fontWeight"),lineHeight:Ot("H6.lineHeight"),letterSpacing:Ot("H6.letterSpacing")},Body:{fontFamily:Ot("Body.fontFamily"),fontSize:Ot("Body.fontSize"),fontWeight:Ot("Body.fontWeight"),lineHeight:Ot("Body.lineHeight"),letterSpacing:Ot("Body.letterSpacing")},BodySmall:{fontFamily:Ot("BodySmall.fontFamily"),fontSize:Ot("BodySmall.fontSize"),fontWeight:Ot("BodySmall.fontWeight"),lineHeight:Ot("BodySmall.lineHeight"),letterSpacing:Ot("BodySmall.letterSpacing")},XSmall:{fontFamily:Ot("XSmall.fontFamily"),fontSize:Ot("XSmall.fontSize"),fontWeight:Ot("XSmall.fontWeight"),lineHeight:Ot("XSmall.lineHeight"),letterSpacing:Ot("XSmall.letterSpacing")}},It=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},Wt=(e,t)=>r=>{var n;const a=Tt[e].fontFamily(r),i=Tt[e].fontWeight(r);return Object.values(_t).includes(a)?o`
                font-family: ${It(t)||It(i)||a};
                font-weight: normal !important;
            `:o`
            font-family: ${a};
            font-weight: ${null!==(n=jt(t)||i)&&void 0!==n?n:"normal"};
        `},jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nt=e=>{if(e>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pt=(e,t,r=!1)=>n=>{const a=Tt[e],i=a.fontSize(n);return o`
            ${Wt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${o`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Lt=(e=!1,t=!1,r=void 0)=>t?o`
            display: block;
            ${Nt(r)}
        `:e?o`
            display: inline;
        `:o`
            display: block;
            ${Nt(r)}
        `;var Rt;!function(e){e.D1=n.h1`
        ${e=>o`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>o`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>o`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>o`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>o`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>o`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>o`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>o`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>o`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>o`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>o`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>o`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>o`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>o`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Lt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=n.a`
    ${e=>o`
            ${Pt(e.textStyle,e.weight)}
            color: ${Dt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt.Secondary};

                svg {
                    color: ${Dt.Secondary};
                }
            }
        `}
`,Xt=n(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gt=r=>{var{external:n=!1,children:a}=r,o=l(r,["external","children"]);return e(Vt,Object.assign({},o,{children:[a,n&&t(Xt,{})]}))};var Mt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Mt||(Mt={}));const Ut={collections:{base:{InputBoxShadow:o`
        inset 0 0 4px 0px ${Dt.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 4px 0px ${Dt.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${Dt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:o`
        inset 0 0 3px 0px ${Dt.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 3px 0px ${Dt.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${Dt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Zt=e=>t=>{var r;const n=t.theme,a=Bt(Ut,n[mt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?yt(a,e,n.options.designToken):yt(a,e)},Yt={InputBoxShadow:Zt("InputBoxShadow"),InputErrorBoxShadow:Zt("InputErrorBoxShadow"),ElevationBoxShadow:Zt("ElevationBoxShadow"),Table:{Header:Zt("Table.Header"),Cell:{Primary:Zt("Table.Cell.Primary"),Secondary:Zt("Table.Cell.Secondary"),Selected:Zt("Table.Cell.Selected"),Hover:Zt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Zt("Button.Danger.BackgroundColor"),Hover:Zt("Button.Danger.Hover"),Primary:Zt("Button.Danger.Primary"),Border:Zt("Button.Danger.Border")}}},qt=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return o`
                    background-color: ${Dt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Yt.Button.Danger.Border:Dt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Dt.Primary};
                    }
                `;case"light":return o`
                    background-color: ${Dt.Neutral[8]};
                    border: 1px solid ${Dt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Dt.Primary};
                    }
                `;case"disabled":return o`
                    background-color: ${Dt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Dt.Neutral[3]};
                    }
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Yt.Button.Danger.Primary:Dt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Yt.Button.Danger.Hover:Dt.Secondary};
                        }
                    }
                `;default:return o`
                    background-color: ${e.$buttonIsDanger?Yt.Button.Danger.BackgroundColor:Dt.Primary};
                    border: 1px solid transparent;

                    ${Ht.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Dt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    span {
                        ${Pt("H5","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    span {
                        ${Pt("H4","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `}
`,Jt=n((({color:r,className:n,size:a=18})=>e(Et,Object.assign({className:n,$size:a,$color:r},{children:[t(wt,{id:"inner1",$size:a-2,$borderWidth:2}),t(kt,{id:"inner2",$size:a-2,$borderWidth:2}),t(At,{id:"inner3",$size:a-2,$borderWidth:2}),t(zt,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Yt.Button.Danger.Primary:Dt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Dt.Neutral[3](e);break;default:t=Dt.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Kt={Default:r.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:c="default",danger:d=!1}=r,g=l(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":c,$buttonSizeStyle:"default",$buttonIsDanger:d};return e(qt,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(Jt,Object.assign({},s)),t("span",{children:a})]}))})),Small:r.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:c="default",danger:d=!1}=r,g=l(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":c,$buttonSizeStyle:"small",$buttonIsDanger:d};return e(qt,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(Jt,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))};export{Kt as Button};
//# sourceMappingURL=index.js.map
