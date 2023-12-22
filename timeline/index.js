import{createElement as e}from"react";import{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import{TickIcon as i}from"@lifesg/react-icons";import a,{css as o}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";const c={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:c.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:c.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:c.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:c.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:c.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:c.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:c.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:c.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:c.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,s="object"==typeof d&&d&&d.Object===Object&&d,u="object"==typeof self&&self&&self.Object===Object&&self,f=s||u||Function("return this")(),p=f.Symbol,F=p,m=Object.prototype,y=m.hasOwnProperty,B=m.toString,S=F?F.toStringTag:void 0;var v=function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=B.call(e);return r&&(t?e[S]=n:delete e[S]),i},D=Object.prototype.toString;var b=v,$=function(e){return D.call(e)},H=p?p.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?b(e):$(e)};var x=E,_=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==x(e)},k=h,w=A,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var C=function(e,t){if(k(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!w(e))||(O.test(e)||!z.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=E,L=j;var T,I=function(e){if(!L(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=f["__core-js_shared__"],R=(T=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var P=function(e){return!!R&&R in e},N=Function.prototype.toString;var G=I,X=P,M=j,U=function(e){if(null!=e){try{return N.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!M(e)||X(e))&&(G(e)?Z:q).test(U(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),ie=re;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},de=re,he=Object.prototype.hasOwnProperty;var se=re;var ue=ae,fe=oe,pe=ge,Fe=function(e){var t=this.__data__;return de?void 0!==t[e]:he.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=ue,ye.prototype.delete=fe,ye.prototype.get=pe,ye.prototype.has=Fe,ye.prototype.set=me;var Be=ye;var Se=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},be=De,$e=Array.prototype.splice;var He=De;var Ee=De;var xe=De;var _e=Se,Ae=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ke=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},we=function(e){return Ee(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=xe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=_e,Oe.prototype.delete=Ae,Oe.prototype.get=ke,Oe.prototype.has=we,Oe.prototype.set=ze;var Ce=Oe,je=ne(f,"Map"),We=Be,Le=Ce,Te=je;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Ve;var Pe=Ve;var Ne=Ve;var Ge=Ve;var Xe=function(){this.size=0,this.__data__={hash:new We,map:new(Te||Le),string:new We}},Me=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Pe(this,e).get(e)},qe=function(e){return Ne(this,e).has(e)},Je=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Xe,Ke.prototype.delete=Me,Ke.prototype.get=Ue,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var Ze=Ye;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,i){t.push(r?i.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},it=h,at=A,ot=p?p.prototype:void 0,lt=ot?ot.toString:void 0;var ct=function e(t){if("string"==typeof t)return t;if(it(t))return rt(t,e)+"";if(at(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},gt=ct;var dt=h,ht=C,st=nt,ut=function(e){return null==e?"":gt(e)};var ft=A;var pt=function(e,t){return dt(e)?e:ht(e,t)?[e]:st(ut(e))},Ft=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const Bt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const Dt={collections:{base:g},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=St(Dt,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},$t={D1:{fontFamily:bt("D1.fontFamily"),fontSize:bt("D1.fontSize"),fontWeight:bt("D1.fontWeight"),lineHeight:bt("D1.lineHeight"),letterSpacing:bt("D1.letterSpacing")},D2:{fontFamily:bt("D2.fontFamily"),fontSize:bt("D2.fontSize"),fontWeight:bt("D2.fontWeight"),lineHeight:bt("D2.lineHeight"),letterSpacing:bt("D2.letterSpacing")},D3:{fontFamily:bt("D3.fontFamily"),fontSize:bt("D3.fontSize"),fontWeight:bt("D3.fontWeight"),lineHeight:bt("D3.lineHeight"),letterSpacing:bt("D3.letterSpacing")},D4:{fontFamily:bt("D4.fontFamily"),fontSize:bt("D4.fontSize"),fontWeight:bt("D4.fontWeight"),lineHeight:bt("D4.lineHeight"),letterSpacing:bt("D4.letterSpacing")},DBody:{fontFamily:bt("DBody.fontFamily"),fontSize:bt("DBody.fontSize"),fontWeight:bt("DBody.fontWeight"),lineHeight:bt("DBody.lineHeight"),letterSpacing:bt("DBody.letterSpacing")},H1:{fontFamily:bt("H1.fontFamily"),fontSize:bt("H1.fontSize"),fontWeight:bt("H1.fontWeight"),lineHeight:bt("H1.lineHeight"),letterSpacing:bt("H1.letterSpacing")},H2:{fontFamily:bt("H2.fontFamily"),fontSize:bt("H2.fontSize"),fontWeight:bt("H2.fontWeight"),lineHeight:bt("H2.lineHeight"),letterSpacing:bt("H2.letterSpacing")},H3:{fontFamily:bt("H3.fontFamily"),fontSize:bt("H3.fontSize"),fontWeight:bt("H3.fontWeight"),lineHeight:bt("H3.lineHeight"),letterSpacing:bt("H3.letterSpacing")},H4:{fontFamily:bt("H4.fontFamily"),fontSize:bt("H4.fontSize"),fontWeight:bt("H4.fontWeight"),lineHeight:bt("H4.lineHeight"),letterSpacing:bt("H4.letterSpacing")},H5:{fontFamily:bt("H5.fontFamily"),fontSize:bt("H5.fontSize"),fontWeight:bt("H5.fontWeight"),lineHeight:bt("H5.lineHeight"),letterSpacing:bt("H5.letterSpacing")},H6:{fontFamily:bt("H6.fontFamily"),fontSize:bt("H6.fontSize"),fontWeight:bt("H6.fontWeight"),lineHeight:bt("H6.lineHeight"),letterSpacing:bt("H6.letterSpacing")},Body:{fontFamily:bt("Body.fontFamily"),fontSize:bt("Body.fontSize"),fontWeight:bt("Body.fontWeight"),lineHeight:bt("Body.lineHeight"),letterSpacing:bt("Body.letterSpacing")},BodySmall:{fontFamily:bt("BodySmall.fontFamily"),fontSize:bt("BodySmall.fontSize"),fontWeight:bt("BodySmall.fontWeight"),lineHeight:bt("BodySmall.lineHeight"),letterSpacing:bt("BodySmall.letterSpacing")},XSmall:{fontFamily:bt("XSmall.fontFamily"),fontSize:bt("XSmall.fontSize"),fontWeight:bt("XSmall.fontWeight"),lineHeight:bt("XSmall.lineHeight"),letterSpacing:bt("XSmall.letterSpacing")}},Ht=e=>{switch(e){case 700:case"bold":return c.Bold;case 600:case"semibold":return c.Semibold;case 300:case"light":return c.Light;case 400:case"regular":return c.Regular;default:return""}},Et=(e,t)=>n=>{var r;const i=$t[e].fontFamily(n),a=$t[e].fontWeight(n);return Object.values(c).includes(i)?o`
                font-family: ${Ht(t)||Ht(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(r=xt(t)||a)&&void 0!==r?r:"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_t=e=>{if(e>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},At=(e,t,n=!1)=>r=>{const i=$t[e],a=i.fontSize(r);return o`
            ${Et(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1,n=void 0)=>t?o`
            display: block;
            ${_t(n)}
        `:e?o`
            display: inline;
        `:o`
            display: block;
            ${_t(n)}
        `;const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=St(wt,n[vt.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},Ot=(zt("Brand.1"),zt("Brand.2"),zt("Brand.3"),zt("Brand.4"),zt("Brand.5"),zt("Brand.6"),zt("Primary")),Ct=(zt("PrimaryDark"),zt("Secondary")),jt={Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Wt={1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Lt={Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}};zt("Shadow.Accent"),zt("Shadow.Red"),zt("Shadow.Elevation");var Tt;!function(e){e.D1=a.h1`
        ${e=>o`
                ${At("D1",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=a.h1`
        ${e=>o`
                ${At("D2",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=a.h1`
        ${e=>o`
                ${At("D3",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=a.h1`
        ${e=>o`
                ${At("D4",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=a.h1`
        ${e=>o`
                ${At("DBody",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=a.h1`
        ${e=>o`
                ${At("H1",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=a.h2`
        ${e=>o`
                ${At("H2",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=a.h3`
        ${e=>o`
                ${At("H3",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=a.h4`
        ${e=>o`
                ${At("H4",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=a.h5`
        ${e=>o`
                ${At("H5",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=a.h6`
        ${e=>o`
                ${At("H6",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=a.p`
        ${e=>o`
                ${At("Body",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=a.p`
        ${e=>o`
                ${At("BodySmall",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=a.span`
        ${e=>o`
                ${At("XSmall",e.weight,e.paragraph)}
                color: ${Wt[1]};
                ${kt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const It=a.a`
    ${e=>o`
            ${At(e.textStyle,e.weight)}
            color: ${Ot};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ct};

                svg {
                    color: ${Ct};
                }
            }
        `}
`,Vt=a(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=e=>{var{external:r=!1,children:i}=e,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["external","children"]);return t(It,Object.assign({},a,{children:[i,r&&n(Vt,{})]}))};var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Nt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gt=e=>Object.keys(Nt).reduce(((t,n)=>{const r=Nt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Xt=Gt("max-width"),Mt=(Gt("min-width"),a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return o`
                    background-color: ${jt.Light[1]};
                `;case"upcoming-active":return o`
                    border: 4px solid ${jt.Light[1]};
                `;case"upcoming-inactive":return o`
                    border: 4px solid ${Wt[4]};
                `;case"completed":return o`
                    background-color: ${Lt.Green.Icon};
                    svg {
                        color: ${Wt[8]};
                    }
                `}}}
`),Ut=a.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return o`
                    background-color: ${jt.Light[1]};
                `;case"upcoming-inactive":return o`
                    background-color: ${Wt[4]};
                `;case"completed":return o`
                    background-color: ${Lt.Green.Icon};
                `}}}
`,qt=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Jt=a.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Xt.tablet} {
        grid-column: span 8;
    }

    ${Xt.mobileL} {
        grid-column: span 4;
    }
`,Kt=a(Tt.H3)`
    margin-bottom: 1rem;

    ${Xt.tablet} {
        margin-bottom: 1.5rem;
    }
`,Qt=a.div`
    display: flex;

    :first-of-type ${Mt} {
        margin-top: 0;
    }
`,Yt=a.div`
    margin-bottom: 2rem;
    width: 100%;
`,Zt=a(Tt.H4)`
    margin-bottom: 0.5rem;
`,en=a(Tt.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,tn=a.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${e=>"dark"===e.type?o`
                background-color: ${Wt[1]};

                & > span {
                    color: ${Wt[8]};
                }
            `:o`
            background-color: ${Wt[8]};
            border: 1px solid ${Wt[5]};

            & > span {
                color: ${Wt[1]};
            }
        `}
`,nn=({items:a,className:o,title:l,startCol:c,colSpan:g,"data-base-indicator-testid":d,"data-testid":h="timeline"})=>{const s=e=>"string"==typeof e?n(Tt.Body,Object.assign({className:"timeline-item-content-text"},{children:e})):n(r,{children:e}),u=e=>"string"==typeof e?n(Zt,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:e})):n(r,{children:e}),f=t=>t.slice(0,2).map(((t,r)=>e(tn,Object.assign({},t,{key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),n(Tt.XSmall,{children:t.label})))),p=e=>"completed"===e?n(i,{}):null;return t(Jt,Object.assign({className:o,"data-testid":h,$startCol:c,$colSpan:g},{children:[n(Kt,Object.assign({id:"timeline-title"},{children:l})),a.map(((e,r)=>{const{title:i,content:a,statuses:o,variant:l}=e,c=d?`circleindicator${r+1}_div_${d}`:"circleindicator",g=l||(0===r?"current":"upcoming-active");return t(Qt,{children:[t(qt,{children:[n(Mt,Object.assign({"data-testid":c,$variant:g},{children:p(g)})),n(Ut,{$variant:g})]}),t(Yt,Object.assign({className:"timeline-item-content"},{children:[u(i),o&&n(en,{children:f(o)}),s(a)]}))]},`timeline-item-${r}`)}))]}))};export{nn as Timeline};
//# sourceMappingURL=index.js.map
