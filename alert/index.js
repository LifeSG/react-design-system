import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import{TickCircleFillIcon as i}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as o}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as l}from"@lifesg/react-icons/exclamation-circle-fill";import{ICircleFillIcon as c}from"@lifesg/react-icons/i-circle-fill";import{ArrowRightIcon as g}from"@lifesg/react-icons/arrow-right";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=Array.isArray,f="object"==typeof h&&h&&h.Object===Object&&h,u="object"==typeof self&&self&&self.Object===Object&&self,p=f||u||Function("return this")(),F=p.Symbol,y=F,m=Object.prototype,B=m.hasOwnProperty,S=m.toString,v=y?y.toStringTag:void 0;var D=function(e){var t=B.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var a=S.call(e);return r&&(t?e[v]=n:delete e[v]),a},$=Object.prototype.toString;var b=D,H=function(e){return $.call(e)},E=F?F.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?b(e):H(e)};var A=x,_=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==A(e)},w=s,z=k,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var T=function(e,t){if(w(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(C.test(e)||!O.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,V=j;var I,N=function(e){if(!V(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=p["__core-js_shared__"],P=(I=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var R=function(e){return!!P&&P in e},G=Function.prototype.toString;var X=N,M=R,U=j,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(X(e)?ee:J).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},ae=re(Object,"create"),ie=ae;var oe=function(){this.__data__=ie?ie(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ae,ge=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},he=ae,se=Object.prototype.hasOwnProperty;var fe=ae;var ue=oe,pe=le,Fe=de,ye=function(e){var t=this.__data__;return he?void 0!==t[e]:se.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=ue,Be.prototype.delete=pe,Be.prototype.get=Fe,Be.prototype.has=ye,Be.prototype.set=me;var Se=Be;var ve=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var $e=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},be=$e,He=Array.prototype.splice;var Ee=$e;var xe=$e;var Ae=$e;var _e=ve,ke=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},we=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},ze=function(e){return xe(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,r=Ae(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ce.prototype.clear=_e,Ce.prototype.delete=ke,Ce.prototype.get=we,Ce.prototype.has=ze,Ce.prototype.set=Oe;var Te=Ce,je=re(p,"Map"),We=Se,Ve=Te,Ie=je;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Le;var Re=Le;var Ge=Le;var Xe=Le;var Me=function(){this.size=0,this.__data__={hash:new We,map:new(Ie||Ve),string:new We}},Ue=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Re(this,e).get(e)},Je=function(e){return Ge(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Me,Qe.prototype.delete=Ue,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ze.Cache||Ye),n}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,a){t.push(r?a.replace(nt,"$1"):n||e)})),t}));var at=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},it=s,ot=k,lt=F?F.prototype:void 0,ct=lt?lt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(it(t))return at(t,e)+"";if(ot(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=gt;var ht=s,st=T,ft=rt,ut=function(e){return null==e?"":dt(e)};var pt=k;var Ft=function(e,t){return ht(e)?e:st(e,t)?[e]:ft(ut(e))},yt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var Bt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const $t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=vt($t,n[Dt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},Ht={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},Et={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:Et.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Et.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Et.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Et.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Et.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Et.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Et.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Et.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Et.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Et.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Et.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Et.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Et.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Et.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=vt(xt,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},_t={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},kt=e=>{switch(e){case 700:case"bold":return Et.Bold;case 600:case"semibold":return Et.Semibold;case 300:case"light":return Et.Light;case 400:case"regular":return Et.Regular;default:return""}},wt=(e,t)=>n=>{var a;const i=_t[e].fontFamily(n),o=_t[e].fontWeight(n);return Object.values(Et).includes(i)?r`
                font-family: ${kt(t)||kt(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${null!==(a=zt(t)||o)&&void 0!==a?a:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ct=(e,t,n=!1)=>a=>{const i=_t[e],o=i.fontSize(a);return r`
            ${wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(a)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Tt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${Ot(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${Ot(n)}
        `;var jt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${Ct("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${Ct("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${Ct("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${Ct("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${Ct("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${Ct("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${Ct("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${Ct("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${Ct("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${Ct("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${Ct("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${Ct("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${Ct("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${Ct("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Tt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>It(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>It(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Wt=n.a`
    ${e=>r`
            ${Ct(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,Vt=n(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,It=n=>{var{external:r=!1,children:a}=n,i=d(n,["external","children"]);return e(Wt,Object.assign({},i,{children:[a,r&&t(Vt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const Lt=n.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;
    ${Ct("BodySmall","regular")}
    color: ${Ht.Neutral[1]};

    ${e=>{let t,n;switch(e.$type){case"error":t=Ht.Validation.Red.Background(e),n=Ht.Validation.Red.Border(e);break;case"success":t=Ht.Validation.Green.Background(e),n=Ht.Validation.Green.Border(e);break;case"warning":default:t=Ht.Validation.Orange.Background(e),n=Ht.Validation.Orange.Border(e);break;case"info":t=Ht.Validation.Blue.Background(e),n=Ht.Validation.Blue.Border(e);break;case"description":t=Ht.Neutral[7](e),n=Ht.Neutral[4](e)}return r`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    p {
        margin: 0;
        ${e=>"small"===e.$sizeType?r`
                    ${Ct("H6","regular")}

                    strong {
                        ${Ct("H6","semibold")}
                    }

                    a {
                        ${Ct("H6","semibold")}
                    }
                `:r`
                    ${Ct("H5","regular")}

                    strong {
                        ${Ct("H5","semibold")}
                    }

                    a {
                        ${Ct("H5","semibold")}
                    }
                `}

        a {
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};
            }
        }
    }
`,Pt=n.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&r`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ht.Validation.Red.Icon(e);break;case"success":t=Ht.Validation.Green.Icon(e);break;case"warning":default:t=Ht.Validation.Orange.Icon(e);break;case"info":t=Ht.Validation.Blue.Icon(e);break;case"description":t=Ht.Neutral[4](e)}return r`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Rt=n(jt.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?r`
                ${Ct("H6","semibold")}
                margin-top: 0.25rem;
            `:r`
                ${Ct("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    color: ${Ht.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Ht.Primary};
    }
`,Gt=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Xt=n=>{var{type:r,className:a,children:h,actionLink:s,actionLinkIcon:f,sizeType:u="default",showIcon:p=!1}=n,F=d(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return e(Lt,Object.assign({className:a,$type:r,$sizeType:u,"data-testid":F["data-testid"]},{children:[p&&t(Pt,Object.assign({$sizeType:u,$type:r},{children:(()=>{switch(r){case"success":return t(i,{});case"warning":return t(o,{});case"error":return t(l,{});case"info":case"description":return t(c,{});default:return null}})()})),e(Gt,{children:[h,s&&e(Rt,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},s,{children:[s.children,f||t(g,{})]}))]})]}))};export{Xt as Alert};
//# sourceMappingURL=index.js.map
