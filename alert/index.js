import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";import{TickCircleFillIcon as a}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as o}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as l}from"@lifesg/react-icons/exclamation-circle-fill";import{ICircleFillIcon as c}from"@lifesg/react-icons/i-circle-fill";import{ArrowRightIcon as g}from"@lifesg/react-icons/arrow-right";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=Array.isArray,s="object"==typeof h&&h&&h.Object===Object&&h,u="object"==typeof self&&self&&self.Object===Object&&self,p=s||u||Function("return this")(),y=p.Symbol,F=y,m=Object.prototype,B=m.hasOwnProperty,S=m.toString,v=F?F.toStringTag:void 0;var $=function(e){var t=B.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var i=S.call(e);return r&&(t?e[v]=n:delete e[v]),i},D=Object.prototype.toString;var H=$,b=function(e){return D.call(e)},_=y?y.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?H(e):b(e)};var z=E,k=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==z(e)},A=f,O=w,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var W=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!O(e))||(j.test(e)||!x.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=E,V=C;var N,I=function(e){if(!V(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=p["__core-js_shared__"],R=(N=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var L=function(e){return!!R&&R in e},G=Function.prototype.toString;var X=I,M=L,U=C,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(X(e)?ee:J).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},ie=re(Object,"create"),ae=ie;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,ge=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},he=ie,fe=Object.prototype.hasOwnProperty;var se=ie;var ue=oe,pe=le,ye=de,Fe=function(e){var t=this.__data__;return he?void 0!==t[e]:fe.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=ue,Be.prototype.delete=pe,Be.prototype.get=ye,Be.prototype.has=Fe,Be.prototype.set=me;var Se=Be;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},He=De,be=Array.prototype.splice;var _e=De;var Ee=De;var ze=De;var ke=ve,we=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():be.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Oe=function(e){return Ee(this.__data__,e)>-1},xe=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=ke,je.prototype.delete=we,je.prototype.get=Ae,je.prototype.has=Oe,je.prototype.set=xe;var We=je,Ce=re(p,"Map"),Te=Se,Ve=We,Ne=Ce;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Pe;var Le=Pe;var Ge=Pe;var Xe=Pe;var Me=function(){this.size=0,this.__data__={hash:new Te,map:new(Ne||Ve),string:new Te}},Ue=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Le(this,e).get(e)},Je=function(e){return Ge(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Me,Qe.prototype.delete=Ue,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ze.Cache||Ye),n}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,i){t.push(r?i.replace(nt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},at=f,ot=w,lt=y?y.prototype:void 0,ct=lt?lt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(at(t))return it(t,e)+"";if(ot(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=gt;var ht=f,ft=W,st=rt,ut=function(e){return null==e?"":dt(e)};var pt=w;var yt=function(e,t){return ht(e)?e:ft(e,t)?[e]:st(ut(e))},Ft=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0};var Bt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=vt(Dt,n[$t.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},bt={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Et={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=vt(Et,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},kt={D1:{fontFamily:zt("D1.fontFamily"),fontSize:zt("D1.fontSize"),fontWeight:zt("D1.fontWeight"),lineHeight:zt("D1.lineHeight"),letterSpacing:zt("D1.letterSpacing")},D2:{fontFamily:zt("D2.fontFamily"),fontSize:zt("D2.fontSize"),fontWeight:zt("D2.fontWeight"),lineHeight:zt("D2.lineHeight"),letterSpacing:zt("D2.letterSpacing")},D3:{fontFamily:zt("D3.fontFamily"),fontSize:zt("D3.fontSize"),fontWeight:zt("D3.fontWeight"),lineHeight:zt("D3.lineHeight"),letterSpacing:zt("D3.letterSpacing")},D4:{fontFamily:zt("D4.fontFamily"),fontSize:zt("D4.fontSize"),fontWeight:zt("D4.fontWeight"),lineHeight:zt("D4.lineHeight"),letterSpacing:zt("D4.letterSpacing")},DBody:{fontFamily:zt("DBody.fontFamily"),fontSize:zt("DBody.fontSize"),fontWeight:zt("DBody.fontWeight"),lineHeight:zt("DBody.lineHeight"),letterSpacing:zt("DBody.letterSpacing")},H1:{fontFamily:zt("H1.fontFamily"),fontSize:zt("H1.fontSize"),fontWeight:zt("H1.fontWeight"),lineHeight:zt("H1.lineHeight"),letterSpacing:zt("H1.letterSpacing")},H2:{fontFamily:zt("H2.fontFamily"),fontSize:zt("H2.fontSize"),fontWeight:zt("H2.fontWeight"),lineHeight:zt("H2.lineHeight"),letterSpacing:zt("H2.letterSpacing")},H3:{fontFamily:zt("H3.fontFamily"),fontSize:zt("H3.fontSize"),fontWeight:zt("H3.fontWeight"),lineHeight:zt("H3.lineHeight"),letterSpacing:zt("H3.letterSpacing")},H4:{fontFamily:zt("H4.fontFamily"),fontSize:zt("H4.fontSize"),fontWeight:zt("H4.fontWeight"),lineHeight:zt("H4.lineHeight"),letterSpacing:zt("H4.letterSpacing")},H5:{fontFamily:zt("H5.fontFamily"),fontSize:zt("H5.fontSize"),fontWeight:zt("H5.fontWeight"),lineHeight:zt("H5.lineHeight"),letterSpacing:zt("H5.letterSpacing")},H6:{fontFamily:zt("H6.fontFamily"),fontSize:zt("H6.fontSize"),fontWeight:zt("H6.fontWeight"),lineHeight:zt("H6.lineHeight"),letterSpacing:zt("H6.letterSpacing")},Body:{fontFamily:zt("Body.fontFamily"),fontSize:zt("Body.fontSize"),fontWeight:zt("Body.fontWeight"),lineHeight:zt("Body.lineHeight"),letterSpacing:zt("Body.letterSpacing")},BodySmall:{fontFamily:zt("BodySmall.fontFamily"),fontSize:zt("BodySmall.fontSize"),fontWeight:zt("BodySmall.fontWeight"),lineHeight:zt("BodySmall.lineHeight"),letterSpacing:zt("BodySmall.letterSpacing")},XSmall:{fontFamily:zt("XSmall.fontFamily"),fontSize:zt("XSmall.fontSize"),fontWeight:zt("XSmall.fontWeight"),lineHeight:zt("XSmall.lineHeight"),letterSpacing:zt("XSmall.letterSpacing")}},wt=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},At=(e,t)=>n=>{var i;const a=kt[e].fontFamily(n),o=kt[e].fontWeight(n);return Object.values(_t).includes(a)?r`
                font-family: ${wt(t)||wt(o)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${null!==(i=Ot(t)||o)&&void 0!==i?i:"normal"};
        `},Ot=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xt=(e,t,n=!1)=>i=>{const a=kt[e],o=a.fontSize(i);return r`
            ${At(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jt=(e=!1,t=!1)=>t?r`
            display: block;
        `:e?r`
            display: inline;
        `:r`
            display: block;
        `;var Wt;!function(e){e.D1=n.h1`
        ${e=>r`
                ${xt("D1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${xt("D2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${xt("D3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${xt("D4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${xt("DBody",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${xt("H1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${xt("H2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${xt("H3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${xt("H4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${xt("H5",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${xt("H6",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${xt("Body",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${xt("BodySmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${xt("XSmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${jt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const Ct=n.a`
    ${e=>r`
            ${xt(e.textStyle,e.weight)}
            color: ${bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${bt.Secondary};

                svg {
                    color: ${bt.Secondary};
                }
            }
        `}
`,Tt=n(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=n=>{var{external:r=!1,children:i}=n,a=d(n,["external","children"]);return e(Ct,Object.assign({},a,{children:[i,r&&t(Tt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const It=n.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;
    ${xt("BodySmall","regular")}

    ${e=>{let t,n;switch(e.$type){case"error":t=bt.Validation.Red.Background(e),n=bt.Validation.Red.Border(e);break;case"success":t=bt.Validation.Green.Background(e),n=bt.Validation.Green.Border(e);break;case"warning":default:t=bt.Validation.Orange.Background(e),n=bt.Validation.Orange.Border(e);break;case"info":t=bt.Validation.Blue.Background(e),n=bt.Validation.Blue.Border(e);break;case"description":t=bt.Neutral[7](e),n=bt.Neutral[4](e)}return r`
            background: ${t};
            border-left: 2pt solid ${n};
        `}}

    p {
        margin: 0;
        ${e=>"small"===e.$sizeType?r`
                    ${xt("H6","regular")}

                    strong {
                        ${xt("H6","semibold")}
                    }

                    a {
                        ${xt("H6","semibold")}
                    }
                `:r`
                    ${xt("H5","regular")}

                    strong {
                        ${xt("H5","semibold")}
                    }

                    a {
                        ${xt("H5","semibold")}
                    }
                `}

        a {
            color: ${bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${bt.Secondary};
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

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=bt.Validation.Red.Icon(e);break;case"success":t=bt.Validation.Green.Icon(e);break;case"warning":default:t=bt.Validation.Orange.Icon(e);break;case"info":t=bt.Validation.Blue.Icon(e);break;case"description":t=bt.Neutral[4](e)}return r`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Rt=n(Wt.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?r`
                ${xt("H6","semibold")}
                margin-top: 0.25rem;
            `:r`
                ${xt("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    color: ${bt.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${bt.Primary};
    }
`,Lt=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Gt=n=>{var{type:r,className:i,children:h,actionLink:f,actionLinkIcon:s,sizeType:u="default",showIcon:p=!1}=n,y=d(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return e(It,Object.assign({className:i,$type:r,$sizeType:u,"data-testid":y["data-testid"]},{children:[p&&t(Pt,Object.assign({$sizeType:u,$type:r},{children:(()=>{switch(r){case"success":return t(a,{});case"warning":return t(o,{});case"error":return t(l,{});case"info":case"description":return t(c,{});default:return null}})()})),e(Lt,{children:[h,f&&e(Rt,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},f,{children:[f.children,s||t(g,{})]}))]})]}))};export{Gt as Alert};
//# sourceMappingURL=index.js.map
