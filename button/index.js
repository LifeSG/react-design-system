import{jsxs as e,jsx as t}from"react/jsx-runtime";import r from"react";import n,{keyframes as a,css as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,s="object"==typeof self&&self&&self.Object===Object&&self,h=g||s||Function("return this")(),u=h.Symbol,f=u,p=Object.prototype,F=p.hasOwnProperty,y=p.toString,m=f?f.toStringTag:void 0;var B=function(e){var t=F.call(e,m),r=e[m];try{e[m]=void 0;var n=!0}catch(e){}var a=y.call(e);return n&&(t?e[m]=r:delete e[m]),a},S=Object.prototype.toString;var b=B,$=function(e){return S.call(e)},v=u?u.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?b(e):$(e)};var H=D,E=function(e){return null!=e&&"object"==typeof e};var x=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==H(e)},z=d,A=x,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var w=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!A(e))||(k.test(e)||!_.test(e)||null!=t&&e in Object(t))};var O=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},C=D,T=O;var W,j=function(e){if(!T(e))return!1;var t=C(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=h["__core-js_shared__"],L=(W=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var I=function(e){return!!L&&L in e},P=Function.prototype.toString;var R=j,V=I,X=O,G=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,J=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!X(e)||V(e))&&(R(e)?J:M).test(G(e))},Q=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var r=Q(e,t);return K(r)?r:void 0},te=ee(Object,"create"),re=te;var ne=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return oe.call(t,e)?t[e]:void 0},ce=te,de=Object.prototype.hasOwnProperty;var ge=te;var se=ne,he=ae,ue=le,fe=function(e){var t=this.__data__;return ce?void 0!==t[e]:de.call(t,e)},pe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fe.prototype.clear=se,Fe.prototype.delete=he,Fe.prototype.get=ue,Fe.prototype.has=fe,Fe.prototype.set=pe;var ye=Fe;var me=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1},be=Se,$e=Array.prototype.splice;var ve=Se;var De=Se;var He=Se;var Ee=me,xe=function(e){var t=this.__data__,r=be(t,e);return!(r<0)&&(r==t.length-1?t.pop():$e.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=ve(t,e);return r<0?void 0:t[r][1]},Ae=function(e){return De(this.__data__,e)>-1},_e=function(e,t){var r=this.__data__,n=He(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ke.prototype.clear=Ee,ke.prototype.delete=xe,ke.prototype.get=ze,ke.prototype.has=Ae,ke.prototype.set=_e;var we=ke,Oe=ee(h,"Map"),Ce=ye,Te=we,We=Oe;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var r=e.__data__;return je(t)?r["string"==typeof t?"string":"hash"]:r.map},Le=Ne;var Ie=Ne;var Pe=Ne;var Re=Ne;var Ve=function(){this.size=0,this.__data__={hash:new Ce,map:new(We||Te),string:new Ce}},Xe=function(e){var t=Le(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ie(this,e).get(e)},Me=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var r=Re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ze.prototype.clear=Ve,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(qe.Cache||Ye),r}qe.Cache=Ye;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=function(e){var t=Je(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,r,n,a){t.push(n?a.replace(Qe,"$1"):r||e)})),t}));var tt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},rt=d,nt=x,at=u?u.prototype:void 0,it=at?at.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(rt(t))return tt(t,e)+"";if(nt(t))return it?it.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},lt=ot;var ct=d,dt=w,gt=et,st=function(e){return null==e?"":lt(e)};var ht=x;var ut=function(e,t){return ct(e)?e:dt(e,t)?[e]:gt(st(e))},ft=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var pt=function(e,t){for(var r=0,n=(t=ut(t,e)).length;null!=e&&r<n;)e=e[ft(t[r++])];return r&&r==n?e:void 0};var Ft=function(e,t,r){var n=null==e?void 0:pt(e,t);return void 0===n?r:n};const yt=(e,t,r)=>t?Ft(r,t)||Ft(e,t):r||e,mt=(e,t)=>{const r=t||e.defaultValue;return Ft(e.collections,r)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const r=t.theme,n=mt(St,r[Bt.colorScheme]);return r.options&&r.options.color?yt(n,e,r.options.color):yt(n,e)},$t={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Dt=e=>Object.keys(vt).reduce(((t,r)=>{const n=vt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Ht=Dt("max-width"),Et=(Dt("min-width"),n.div`
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
`,zt=n.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||$t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${xt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,At=n(zt)`
    animation-delay: -0.45s;
`,_t=n(zt)`
    animation-delay: -0.3s;
`,kt=n(zt)`
    animation-delay: -0.15s;
`,wt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ot={collections:{base:{D1:{fontFamily:wt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:wt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:wt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:wt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:wt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:wt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ct=e=>t=>{const r=t.theme,n=mt(Ot,r[Bt.textStyleScheme]);return r.options&&r.options.textStyle?yt(n,e,r.options.textStyle):yt(n,e)},Tt={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},Wt=e=>{switch(e){case 700:case"bold":return wt.Bold;case 600:case"semibold":return wt.Semibold;case 300:case"light":return wt.Light;case 400:case"regular":return wt.Regular;default:return""}},jt=(e,t)=>r=>{var n;const a=Tt[e].fontFamily(r),o=Tt[e].fontWeight(r);return Object.values(wt).includes(a)?i`
                font-family: ${Wt(t)||Wt(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(n=Nt(t)||o)&&void 0!==n?n:"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Lt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},It=(e,t,r=!1)=>n=>{const a=Tt[e],o=a.fontSize(n);return i`
            ${jt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${i`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Pt=(e=!1,t=!1,r=void 0)=>t?i`
            display: block;
            ${Lt(r)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${Lt(r)}
        `;var Rt;!function(e){e.D1=n.h1`
        ${e=>i`
                ${It("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>i`
                ${It("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>i`
                ${It("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>i`
                ${It("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>i`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>i`
                ${It("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>i`
                ${It("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>i`
                ${It("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>i`
                ${It("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>i`
                ${It("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>i`
                ${It("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>i`
                ${It("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>i`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>i`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Pt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Rt||(Rt={}));const Vt=n.a`
    ${e=>i`
            ${It(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Xt=n(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gt=r=>{var{external:n=!1,children:a}=r,i=l(r,["external","children"]);return e(Vt,Object.assign({},i,{children:[a,n&&t(Xt,{})]}))};var Mt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Mt||(Mt={}));const Ut=n.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return i`
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Primary(e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"light":return i`
                    background-color: ${$t.Neutral[8](e)};
                    border: 1px solid ${$t.Neutral[5](e)};

                    span {
                        color: ${$t.Primary(e)};
                    }
                `;case"disabled":return i`
                    background-color: ${$t.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${$t.Neutral[3](e)};
                    }
                `;case"link":return i`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${$t.Secondary};
                        }
                    }
                `;default:return i`
                    background-color: ${$t.Primary(e)};
                    border: 1px solid transparent;

                    ${Ht.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${$t.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i`
                    height: 2.5rem;
                    span {
                        ${It("H5","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `:i`
                    height: 3rem;
                    span {
                        ${It("H4","semibold")}
                    }

                    ${Ht.mobileS} {
                        height: auto;
                    }
                `}
`,Zt=n((({color:r,className:n,size:a=18})=>e(Et,Object.assign({className:n,$size:a,$color:r},{children:[t(zt,{id:"inner1",$size:a-2,$borderWidth:2}),t(At,{id:"inner2",$size:a-2,$borderWidth:2}),t(_t,{id:"inner3",$size:a-2,$borderWidth:2}),t(kt,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=$t.Primary(e);break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return i`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Yt={Default:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:c="default"}=r,d=l(r,["children","disabled","loading","styleType"]),g={$buttonStyle:i?"disabled":c,$buttonSizeStyle:"default"};return e(Ut,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},g,d,{children:[o&&t(Zt,Object.assign({},g)),t("span",{children:a})]}))})),Small:r.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:c="default"}=r,d=l(r,["children","disabled","loading","styleType"]),g={$buttonStyle:i?"disabled":c,$buttonSizeStyle:"small"};return e(Ut,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},g,d,{children:[o&&t(Zt,Object.assign({},g,{size:16})),t("span",{children:a})]}))}))};export{Yt as Button};
//# sourceMappingURL=index.js.map
