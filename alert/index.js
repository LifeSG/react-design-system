import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{css as r}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";import{TickCircleFillIcon as a}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as o}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as l}from"@lifesg/react-icons/exclamation-circle-fill";import{ICircleFillIcon as c}from"@lifesg/react-icons/i-circle-fill";import{ArrowRightIcon as g}from"@lifesg/react-icons/arrow-right";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,f="object"==typeof s&&s&&s.Object===Object&&s,u="object"==typeof self&&self&&self.Object===Object&&self,p=f||u||Function("return this")(),y=p.Symbol,m=y,F=Object.prototype,B=F.hasOwnProperty,S=F.toString,v=m?m.toStringTag:void 0;var $=function(e){var t=B.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var i=S.call(e);return r&&(t?e[v]=n:delete e[v]),i},D=Object.prototype.toString;var H=$,b=function(e){return D.call(e)},_=y?y.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?H(e):b(e)};var x=E,w=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==x(e)},k=h,A=z,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var W=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(j.test(e)||!O.test(e)||null!=t&&e in Object(t))};var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=E,V=C;var N,I=function(e){if(!V(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=p["__core-js_shared__"],P=(N=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var R=function(e){return!!P&&P in e},G=Function.prototype.toString;var X=I,M=R,U=C,q=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,Y=K.toString,Z=Q.hasOwnProperty,ee=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!U(e)||M(e))&&(X(e)?ee:J).test(q(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},ie=re(Object,"create"),ae=ie;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,ge=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},se=ie,he=Object.prototype.hasOwnProperty;var fe=ie;var ue=oe,pe=le,ye=de,me=function(e){var t=this.__data__;return se?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=ue,Be.prototype.delete=pe,Be.prototype.get=ye,Be.prototype.has=me,Be.prototype.set=Fe;var Se=Be;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},He=De,be=Array.prototype.splice;var _e=De;var Ee=De;var xe=De;var we=ve,ze=function(e){var t=this.__data__,n=He(t,e);return!(n<0)&&(n==t.length-1?t.pop():be.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return Ee(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=we,je.prototype.delete=ze,je.prototype.get=ke,je.prototype.has=Ae,je.prototype.set=Oe;var We=je,Ce=re(p,"Map"),Te=Se,Ve=We,Ne=Ce;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=Le;var Re=Le;var Ge=Le;var Xe=Le;var Me=function(){this.size=0,this.__data__={hash:new Te,map:new(Ne||Ve),string:new Te}},Ue=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Re(this,e).get(e)},Je=function(e){return Ge(this,e).has(e)},Ke=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Me,Qe.prototype.delete=Ue,Qe.prototype.get=qe,Qe.prototype.has=Je,Qe.prototype.set=Ke;var Ye=Qe;function Ze(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ze.Cache||Ye),n}Ze.Cache=Ye;var et=Ze;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,i){t.push(r?i.replace(nt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},at=h,ot=z,lt=y?y.prototype:void 0,ct=lt?lt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(at(t))return it(t,e)+"";if(ot(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=gt;var st=h,ht=W,ft=rt,ut=function(e){return null==e?"":dt(e)};var pt=z;var yt=function(e,t){return st(e)?e:ht(e,t)?[e]:ft(ut(e))},mt=function(e){if("string"==typeof e||pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[mt(t[n++])];return n&&n==r?e:void 0};var Bt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ht=e=>t=>{const n=t.theme,r=vt(Dt,n[$t.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},bt={Brand:{1:Ht("Brand.1"),2:Ht("Brand.2"),3:Ht("Brand.3"),4:Ht("Brand.4"),5:Ht("Brand.5"),6:Ht("Brand.6")},Primary:Ht("Primary"),PrimaryDark:Ht("PrimaryDark"),Secondary:Ht("Secondary"),Accent:{Light:{1:Ht("Accent.Light.1"),2:Ht("Accent.Light.2"),3:Ht("Accent.Light.3"),4:Ht("Accent.Light.4"),5:Ht("Accent.Light.5"),6:Ht("Accent.Light.6")},Dark:{1:Ht("Accent.Dark.1"),2:Ht("Accent.Dark.2"),3:Ht("Accent.Dark.3")}},Neutral:{1:Ht("Neutral.1"),2:Ht("Neutral.2"),3:Ht("Neutral.3"),4:Ht("Neutral.4"),5:Ht("Neutral.5"),6:Ht("Neutral.6"),7:Ht("Neutral.7"),8:Ht("Neutral.8")},Validation:{Green:{Text:Ht("Validation.Green.Text"),Icon:Ht("Validation.Green.Icon"),Border:Ht("Validation.Green.Border"),Background:Ht("Validation.Green.Background")},Orange:{Text:Ht("Validation.Orange.Text"),Icon:Ht("Validation.Orange.Icon"),Border:Ht("Validation.Orange.Border"),Background:Ht("Validation.Orange.Background"),Badge:Ht("Validation.Orange.Badge")},Red:{Text:Ht("Validation.Red.Text"),Icon:Ht("Validation.Red.Icon"),Border:Ht("Validation.Red.Border"),Background:Ht("Validation.Red.Background")},Blue:{Text:Ht("Validation.Blue.Text"),Icon:Ht("Validation.Blue.Icon"),Border:Ht("Validation.Blue.Border"),Background:Ht("Validation.Blue.Background")}},Shadow:{Accent:Ht("Shadow.Accent"),Red:Ht("Shadow.Red"),Elevation:Ht("Shadow.Elevation")}},_t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Et={collections:{base:{D1:{fontFamily:_t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=vt(Et,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},wt={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},zt=e=>{switch(e){case 700:case"bold":return _t.Bold;case 600:case"semibold":return _t.Semibold;case 300:case"light":return _t.Light;case 400:case"regular":return _t.Regular;default:return""}},kt=(e,t)=>n=>{var i;const a=wt[e].fontFamily(n),o=wt[e].fontWeight(n);return Object.values(_t).includes(a)?r`
                font-family: ${zt(t)||zt(o)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${null!==(i=At(t)||o)&&void 0!==i?i:"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},jt=(e,t,n=!1)=>i=>{const a=wt[e],o=a.fontSize(i);return r`
            ${kt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Wt=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${Ot(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${Ot(n)}
        `;var Ct;!function(e){e.D1=n.h1`
        ${e=>r`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=n.h1`
        ${e=>r`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=n.h1`
        ${e=>r`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=n.h1`
        ${e=>r`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=n.h1`
        ${e=>r`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=n.h1`
        ${e=>r`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=n.h2`
        ${e=>r`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=n.h3`
        ${e=>r`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=n.h4`
        ${e=>r`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=n.h5`
        ${e=>r`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=n.h6`
        ${e=>r`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=n.p`
        ${e=>r`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=n.p`
        ${e=>r`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=n.span`
        ${e=>r`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${bt.Neutral[1]};
                ${Wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ct||(Ct={}));const Tt=n.a`
    ${e=>r`
            ${jt(e.textStyle,e.weight)}
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
`,Vt=n(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=n=>{var{external:r=!1,children:i}=n,a=d(n,["external","children"]);return e(Tt,Object.assign({},a,{children:[i,r&&t(Vt,{})]}))};var It;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(It||(It={}));const Lt=n.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;
    ${jt("BodySmall","regular")}

    ${e=>{let t,n;switch(e.$type){case"error":t=bt.Validation.Red.Background(e),n=bt.Validation.Red.Border(e);break;case"success":t=bt.Validation.Green.Background(e),n=bt.Validation.Green.Border(e);break;case"warning":default:t=bt.Validation.Orange.Background(e),n=bt.Validation.Orange.Border(e);break;case"info":t=bt.Validation.Blue.Background(e),n=bt.Validation.Blue.Border(e);break;case"description":t=bt.Neutral[7](e),n=bt.Neutral[4](e)}return r`
            background: ${t};
            border-left: 2pt solid ${n};
        `}}

    p {
        margin: 0;
        ${e=>"small"===e.$sizeType?r`
                    ${jt("H6","regular")}

                    strong {
                        ${jt("H6","semibold")}
                    }

                    a {
                        ${jt("H6","semibold")}
                    }
                `:r`
                    ${jt("H5","regular")}

                    strong {
                        ${jt("H5","semibold")}
                    }

                    a {
                        ${jt("H5","semibold")}
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
`,Rt=n(Ct.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?r`
                ${jt("H6","semibold")}
                margin-top: 0.25rem;
            `:r`
                ${jt("H5","semibold")}
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
`,Gt=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Xt=n=>{var{type:r,className:i,children:s,actionLink:h,actionLinkIcon:f,sizeType:u="default",showIcon:p=!1}=n,y=d(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return e(Lt,Object.assign({className:i,$type:r,$sizeType:u,"data-testid":y["data-testid"]},{children:[p&&t(Pt,Object.assign({$sizeType:u,$type:r},{children:(()=>{switch(r){case"success":return t(a,{});case"warning":return t(o,{});case"error":return t(l,{});case"info":case"description":return t(c,{});default:return null}})()})),e(Gt,{children:[s,h&&e(Rt,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},h,{children:[h.children,f||t(g,{})]}))]})]}))};export{Xt as Alert};
//# sourceMappingURL=index.js.map
