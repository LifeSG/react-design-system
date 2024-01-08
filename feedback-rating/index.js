import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{css as n,keyframes as a}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import{StarIcon as i}from"@lifesg/react-icons/star";import{StarFillIcon as l}from"@lifesg/react-icons/star-fill";import c from"react";function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}const g={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:g.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:g.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:g.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:g.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:g.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:g.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:g.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:g.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:g.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:g.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:g.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:g.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,f="object"==typeof self&&self&&self.Object===Object&&self,m=p||f||Function("return this")(),F=m.Symbol,y=F,B=Object.prototype,b=B.hasOwnProperty,S=B.toString,$=y?y.toStringTag:void 0;var D=function(e){var t=b.call(e,$),r=e[$];try{e[$]=void 0;var n=!0}catch(e){}var a=S.call(e);return n&&(t?e[$]=r:delete e[$]),a},v=Object.prototype.toString;var x=D,H=function(e){return v.call(e)},E=F?F.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?x(e):H(e)};var k=w,A=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==k(e)},z=h,_=C,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var j=function(e,t){if(z(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!_(e))||(T.test(e)||!O.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=w,N=I;var P,L=function(e){if(!N(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=m["__core-js_shared__"],V=(P=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(e){return!!V&&V in e},G=Function.prototype.toString;var M=L,U=X,Z=I,Y=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,ee=K.hasOwnProperty,te=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Z(e)||U(e))&&(M(e)?te:q).test(Y(e))},ne=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var r=ne(e,t);return re(r)?r:void 0},oe=ae(Object,"create"),ie=oe;var le=function(){this.__data__=ie?ie(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},de=oe,ge=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(de){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ge.call(t,e)?t[e]:void 0},ue=oe,he=Object.prototype.hasOwnProperty;var pe=oe;var fe=le,me=ce,Fe=se,ye=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},Be=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}be.prototype.clear=fe,be.prototype.delete=me,be.prototype.get=Fe,be.prototype.has=ye,be.prototype.set=Be;var Se=be;var $e=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1},xe=ve,He=Array.prototype.splice;var Ee=ve;var we=ve;var ke=ve;var Ae=$e,Ce=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():He.call(t,r,1),--this.size,!0)},ze=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},_e=function(e){return we(this.__data__,e)>-1},Oe=function(e,t){var r=this.__data__,n=ke(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Te.prototype.clear=Ae,Te.prototype.delete=Ce,Te.prototype.get=ze,Te.prototype.has=_e,Te.prototype.set=Oe;var je=Te,Ie=ae(m,"Map"),We=Se,Ne=je,Pe=Ie;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var r=e.__data__;return Le(t)?r["string"==typeof t?"string":"hash"]:r.map},Ve=Re;var Xe=Re;var Ge=Re;var Me=Re;var Ue=function(){this.size=0,this.__data__={hash:new We,map:new(Pe||Ne),string:new We}},Ze=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ye=function(e){return Xe(this,e).get(e)},qe=function(e){return Ge(this,e).has(e)},Je=function(e,t){var r=Me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Ze,Ke.prototype.get=Ye,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(et.Cache||Qe),r}et.Cache=Qe;var tt=et;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,r,n,a){t.push(n?a.replace(nt,"$1"):r||e)})),t}));var ot=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},it=h,lt=C,ct=F?F.prototype:void 0,dt=ct?ct.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(lt(t))return dt?dt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},st=gt;var ut=h,ht=j,pt=at,ft=function(e){return null==e?"":st(e)};var mt=C;var Ft=function(e,t){return ut(e)?e:ht(e,t)?[e]:pt(ft(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Bt=function(e,t){for(var r=0,n=(t=Ft(t,e)).length;null!=e&&r<n;)e=e[yt(t[r++])];return r&&r==n?e:void 0};var bt=function(e,t,r){var n=null==e?void 0:Bt(e,t);return void 0===n?r:n};const St=(e,t,r)=>t?bt(r,t)||bt(e,t):r||e,$t=(e,t)=>{const r=t||e.defaultValue;return bt(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const vt={collections:{base:s},defaultValue:"base"},xt=e=>t=>{const r=t.theme,n=$t(vt,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?St(n,e,r.options.textStyle):St(n,e)},Ht={D1:{fontFamily:xt("D1.fontFamily"),fontSize:xt("D1.fontSize"),fontWeight:xt("D1.fontWeight"),lineHeight:xt("D1.lineHeight"),letterSpacing:xt("D1.letterSpacing")},D2:{fontFamily:xt("D2.fontFamily"),fontSize:xt("D2.fontSize"),fontWeight:xt("D2.fontWeight"),lineHeight:xt("D2.lineHeight"),letterSpacing:xt("D2.letterSpacing")},D3:{fontFamily:xt("D3.fontFamily"),fontSize:xt("D3.fontSize"),fontWeight:xt("D3.fontWeight"),lineHeight:xt("D3.lineHeight"),letterSpacing:xt("D3.letterSpacing")},D4:{fontFamily:xt("D4.fontFamily"),fontSize:xt("D4.fontSize"),fontWeight:xt("D4.fontWeight"),lineHeight:xt("D4.lineHeight"),letterSpacing:xt("D4.letterSpacing")},DBody:{fontFamily:xt("DBody.fontFamily"),fontSize:xt("DBody.fontSize"),fontWeight:xt("DBody.fontWeight"),lineHeight:xt("DBody.lineHeight"),letterSpacing:xt("DBody.letterSpacing")},H1:{fontFamily:xt("H1.fontFamily"),fontSize:xt("H1.fontSize"),fontWeight:xt("H1.fontWeight"),lineHeight:xt("H1.lineHeight"),letterSpacing:xt("H1.letterSpacing")},H2:{fontFamily:xt("H2.fontFamily"),fontSize:xt("H2.fontSize"),fontWeight:xt("H2.fontWeight"),lineHeight:xt("H2.lineHeight"),letterSpacing:xt("H2.letterSpacing")},H3:{fontFamily:xt("H3.fontFamily"),fontSize:xt("H3.fontSize"),fontWeight:xt("H3.fontWeight"),lineHeight:xt("H3.lineHeight"),letterSpacing:xt("H3.letterSpacing")},H4:{fontFamily:xt("H4.fontFamily"),fontSize:xt("H4.fontSize"),fontWeight:xt("H4.fontWeight"),lineHeight:xt("H4.lineHeight"),letterSpacing:xt("H4.letterSpacing")},H5:{fontFamily:xt("H5.fontFamily"),fontSize:xt("H5.fontSize"),fontWeight:xt("H5.fontWeight"),lineHeight:xt("H5.lineHeight"),letterSpacing:xt("H5.letterSpacing")},H6:{fontFamily:xt("H6.fontFamily"),fontSize:xt("H6.fontSize"),fontWeight:xt("H6.fontWeight"),lineHeight:xt("H6.lineHeight"),letterSpacing:xt("H6.letterSpacing")},Body:{fontFamily:xt("Body.fontFamily"),fontSize:xt("Body.fontSize"),fontWeight:xt("Body.fontWeight"),lineHeight:xt("Body.lineHeight"),letterSpacing:xt("Body.letterSpacing")},BodySmall:{fontFamily:xt("BodySmall.fontFamily"),fontSize:xt("BodySmall.fontSize"),fontWeight:xt("BodySmall.fontWeight"),lineHeight:xt("BodySmall.lineHeight"),letterSpacing:xt("BodySmall.letterSpacing")},XSmall:{fontFamily:xt("XSmall.fontFamily"),fontSize:xt("XSmall.fontSize"),fontWeight:xt("XSmall.fontWeight"),lineHeight:xt("XSmall.lineHeight"),letterSpacing:xt("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return g.Bold;case 600:case"semibold":return g.Semibold;case 300:case"light":return g.Light;case 400:case"regular":return g.Regular;default:return""}},wt=(e,t)=>r=>{var a;const o=Ht[e].fontFamily(r),i=Ht[e].fontWeight(r);return Object.values(g).includes(o)?n`
                font-family: ${Et(t)||Et(i)||o};
                font-weight: normal !important;
            `:n`
            font-family: ${o};
            font-weight: ${null!==(a=kt(t)||i)&&void 0!==a?a:"normal"};
        `},kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},At=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ct=(e,t,r=!1)=>a=>{const o=Ht[e],i=o.fontSize(a);return n`
            ${wt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(a)||0}rem !important;
            ${n`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},zt=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${At(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${At(r)}
        `,_t={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ot=e=>t=>{const r=t.theme,n=$t(_t,r[Dt.colorScheme]);return r.options&&r.options.color?St(n,e,r.options.color):St(n,e)},Tt={Brand:{1:Ot("Brand.1"),2:Ot("Brand.2"),3:Ot("Brand.3"),4:Ot("Brand.4"),5:Ot("Brand.5"),6:Ot("Brand.6")},Primary:Ot("Primary"),PrimaryDark:Ot("PrimaryDark"),Secondary:Ot("Secondary"),Accent:{Light:{1:Ot("Accent.Light.1"),2:Ot("Accent.Light.2"),3:Ot("Accent.Light.3"),4:Ot("Accent.Light.4"),5:Ot("Accent.Light.5"),6:Ot("Accent.Light.6")},Dark:{1:Ot("Accent.Dark.1"),2:Ot("Accent.Dark.2"),3:Ot("Accent.Dark.3")}},Neutral:{1:Ot("Neutral.1"),2:Ot("Neutral.2"),3:Ot("Neutral.3"),4:Ot("Neutral.4"),5:Ot("Neutral.5"),6:Ot("Neutral.6"),7:Ot("Neutral.7"),8:Ot("Neutral.8")},Validation:{Green:{Text:Ot("Validation.Green.Text"),Icon:Ot("Validation.Green.Icon"),Border:Ot("Validation.Green.Border"),Background:Ot("Validation.Green.Background")},Orange:{Text:Ot("Validation.Orange.Text"),Icon:Ot("Validation.Orange.Icon"),Border:Ot("Validation.Orange.Border"),Background:Ot("Validation.Orange.Background"),Badge:Ot("Validation.Orange.Badge")},Red:{Text:Ot("Validation.Red.Text"),Icon:Ot("Validation.Red.Icon"),Border:Ot("Validation.Red.Border"),Background:Ot("Validation.Red.Background")},Blue:{Text:Ot("Validation.Blue.Text"),Icon:Ot("Validation.Blue.Icon"),Border:Ot("Validation.Blue.Border"),Background:Ot("Validation.Blue.Background")}},Shadow:{Accent:Ot("Shadow.Accent"),Red:Ot("Shadow.Red"),Elevation:Ot("Shadow.Elevation")}};var jt;!function(e){e.D1=r.h1`
        ${e=>n`
                ${Ct("D1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>n`
                ${Ct("D2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>n`
                ${Ct("D3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>n`
                ${Ct("D4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>n`
                ${Ct("DBody",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>n`
                ${Ct("H1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>n`
                ${Ct("H2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>n`
                ${Ct("H3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>n`
                ${Ct("H4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>n`
                ${Ct("H5",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>n`
                ${Ct("H6",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>n`
                ${Ct("Body",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>n`
                ${Ct("BodySmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>n`
                ${Ct("XSmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${zt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Nt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const It=r.a`
    ${e=>n`
            ${Ct(e.textStyle,e.weight)}
            color: ${Tt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Tt.Secondary};

                svg {
                    color: ${Tt.Secondary};
                }
            }
        `}
`,Wt=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Nt=r=>{var{external:n=!1,children:a}=r,o=d(r,["external","children"]);return e(It,Object.assign({},o,{children:[a,n&&t(Wt,{})]}))};var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Lt="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Rt="Submit",Vt="Rate your experience",Xt=5,Gt=r.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Mt=n`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Tt.Primary};
    ${Gt}:focus-visible + & {
        outline: 0.125rem solid ${Tt.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Ut=r(i)`
    ${Mt}
`,Zt=r(l)`
    ${Mt}
`,Yt=r.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,qt=r.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Jt=r=>{const{description:n,rating:a,onRatingChange:o}=r,i=e=>{const r=`${e} star${1===e?"":"s"}`;return t(e<=a?Zt:Ut,{"aria-label":r})};return t(qt,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Xt)].map(((r,n)=>{const l=n+1;return e(Yt,{children:[t(Gt,{type:"radio",name:"star",checked:l===a,onChange:()=>(e=>{o(e)})(l)}),i(l)]},l)}))}))},Kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Qt=e=>Object.keys(Kt).reduce(((t,r)=>{const n=Kt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),er=Qt("max-width"),tr=(Qt("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),rr=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,nr=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Tt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${rr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ar=r(nr)`
    animation-delay: -0.45s;
`,or=r(nr)`
    animation-delay: -0.3s;
`,ir=r(nr)`
    animation-delay: -0.15s;
`,lr={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Tt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Tt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Tt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},cr=e=>t=>{var r;const n=t.theme,a=$t(lr,n[Dt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?St(a,e,n.options.designToken):St(a,e)},dr={InputBoxShadow:cr("InputBoxShadow"),InputErrorBoxShadow:cr("InputErrorBoxShadow"),ElevationBoxShadow:cr("ElevationBoxShadow"),Table:{Header:cr("Table.Header"),Cell:{Primary:cr("Table.Cell.Primary"),Secondary:cr("Table.Cell.Secondary"),Selected:cr("Table.Cell.Selected"),Hover:cr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:cr("Button.Danger.BackgroundColor"),Hover:cr("Button.Danger.Hover"),Primary:cr("Button.Danger.Primary"),Border:cr("Button.Danger.Border")}}},gr=r.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${Tt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?dr.Button.Danger.Border:Tt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?dr.Button.Danger.Primary:Tt.Primary};
                    }
                `;case"light":return n`
                    background-color: ${Tt.Neutral[8]};
                    border: 1px solid ${Tt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?dr.Button.Danger.Primary:Tt.Primary};
                    }
                `;case"disabled":return n`
                    background-color: ${Tt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Tt.Neutral[3]};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?dr.Button.Danger.Primary:Tt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?dr.Button.Danger.Hover:Tt.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?dr.Button.Danger.BackgroundColor:Tt.Primary};
                    border: 1px solid transparent;

                    ${er.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Tt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${Ct("H5","semibold")}
                    }

                    ${er.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${Ct("H4","semibold")}
                    }

                    ${er.mobileS} {
                        height: auto;
                    }
                `}
`,sr=r((({color:r,className:n,size:a=18})=>e(tr,Object.assign({className:n,$size:a,$color:r},{children:[t(nr,{id:"inner1",$size:a-2,$borderWidth:2}),t(ar,{id:"inner2",$size:a-2,$borderWidth:2}),t(or,{id:"inner3",$size:a-2,$borderWidth:2}),t(ir,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?dr.Button.Danger.Primary:Tt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Tt.Neutral[3](e);break;default:t=Tt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ur={Default:c.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(gr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(sr,Object.assign({},s)),t("span",{children:a})]}))})),Small:c.forwardRef(((r,n)=>{const{children:a,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=r,g=d(r,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(gr,Object.assign({ref:n,"data-testid":g["data-testid"]||"button",disabled:o},s,g,{children:[i&&t(sr,Object.assign({},s,{size:16})),t("span",{children:a})]}))}))},hr=r.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,pr=r.div`
    border-top: 1px solid ${Tt.Neutral[5]};
    border-bottom: 1px solid ${Tt.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,fr=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,mr=r(ur.Default)`
    margin-top: 1rem;
    width: 100%;
`,Fr=r=>{const{imgSrc:n,buttonLabel:a,description:o,rating:i,onRatingChange:l,onSubmit:c}=r,g=d(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),s=null!=n?n:Lt,u=null!=o?o:Vt;return e(pr,Object.assign({},g,{children:[s&&t(hr,{src:s,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),e(fr,{children:[t(jt.H3,Object.assign({weight:"semibold"},{children:u})),t(Jt,{description:u,rating:i,onRatingChange:l}),t(mr,Object.assign({disabled:!i,onClick:c,type:"button"},{children:null!=a?a:Rt}))]})]}))};export{Fr as FeedbackRating};
//# sourceMappingURL=index.js.map
