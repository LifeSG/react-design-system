import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useState as a,useEffect as o}from"react";import i,{css as l}from"styled-components";import{ExternalIcon as c}from"@lifesg/react-icons/external";function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,u="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),p=s.Symbol,F=p,y=Object.prototype,S=y.hasOwnProperty,m=y.toString,B=F?F.toStringTag:void 0;var v=function(e){var t=S.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var a=m.call(e);return r&&(t?e[B]=n:delete e[B]),a},b=Object.prototype.toString;var D=v,$=function(e){return b.call(e)},H=p?p.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?D(e):$(e)};var w=x,E=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==w(e)},A=h,z=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var O=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(k.test(e)||!C.test(e)||null!=t&&e in Object(t))};var j=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=x,T=j;var L,N=function(e){if(!T(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=s["__core-js_shared__"],V=(L=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var R=function(e){return!!V&&V in e},P=Function.prototype.toString;var G=N,X=R,M=j,U=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!M(e)||X(e))&&(G(e)?Z:q).test(U(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),ae=re;var oe=function(){this.__data__=ae?ae(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},ge=re,he=Object.prototype.hasOwnProperty;var ue=re;var fe=oe,se=ie,pe=de,Fe=function(e){var t=this.__data__;return ge?void 0!==t[e]:he.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=fe,Se.prototype.delete=se,Se.prototype.get=pe,Se.prototype.has=Fe,Se.prototype.set=ye;var me=Se;var Be=function(){this.__data__=[],this.size=0};var ve=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1},De=be,$e=Array.prototype.splice;var He=be;var xe=be;var we=be;var Ee=Be,_e=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},ze=function(e){return xe(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=we(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=Ee,ke.prototype.delete=_e,ke.prototype.get=Ae,ke.prototype.has=ze,ke.prototype.set=Ce;var Oe=ke,je=ne(s,"Map"),We=me,Te=Oe,Le=je;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Ie;var Re=Ie;var Pe=Ie;var Ge=Ie;var Xe=function(){this.size=0,this.__data__={hash:new We,map:new(Le||Te),string:new We}},Me=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Re(this,e).get(e)},qe=function(e){return Pe(this,e).has(e)},Je=function(e,t){var n=Ge(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Xe,Ke.prototype.delete=Me,Ke.prototype.get=Ue,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var Ze=Ye;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,a){t.push(r?a.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},at=h,ot=_,it=p?p.prototype:void 0,lt=it?it.toString:void 0;var ct=function e(t){if("string"==typeof t)return t;if(at(t))return rt(t,e)+"";if(ot(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},dt=ct;var gt=h,ht=O,ut=nt,ft=function(e){return null==e?"":dt(e)};var st=_;var pt=function(e,t){return gt(e)?e:ht(e,t)?[e]:ut(ft(e))},Ft=function(e){if("string"==typeof e||st(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yt=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:yt(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?St(n,t)||St(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vt||(vt={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Bt(bt,n[vt.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},$t={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},Ht={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},xt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=Bt(xt,n[vt.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},Et={D1:{fontFamily:wt("D1.fontFamily"),fontSize:wt("D1.fontSize"),fontWeight:wt("D1.fontWeight"),lineHeight:wt("D1.lineHeight"),letterSpacing:wt("D1.letterSpacing")},D2:{fontFamily:wt("D2.fontFamily"),fontSize:wt("D2.fontSize"),fontWeight:wt("D2.fontWeight"),lineHeight:wt("D2.lineHeight"),letterSpacing:wt("D2.letterSpacing")},D3:{fontFamily:wt("D3.fontFamily"),fontSize:wt("D3.fontSize"),fontWeight:wt("D3.fontWeight"),lineHeight:wt("D3.lineHeight"),letterSpacing:wt("D3.letterSpacing")},D4:{fontFamily:wt("D4.fontFamily"),fontSize:wt("D4.fontSize"),fontWeight:wt("D4.fontWeight"),lineHeight:wt("D4.lineHeight"),letterSpacing:wt("D4.letterSpacing")},DBody:{fontFamily:wt("DBody.fontFamily"),fontSize:wt("DBody.fontSize"),fontWeight:wt("DBody.fontWeight"),lineHeight:wt("DBody.lineHeight"),letterSpacing:wt("DBody.letterSpacing")},H1:{fontFamily:wt("H1.fontFamily"),fontSize:wt("H1.fontSize"),fontWeight:wt("H1.fontWeight"),lineHeight:wt("H1.lineHeight"),letterSpacing:wt("H1.letterSpacing")},H2:{fontFamily:wt("H2.fontFamily"),fontSize:wt("H2.fontSize"),fontWeight:wt("H2.fontWeight"),lineHeight:wt("H2.lineHeight"),letterSpacing:wt("H2.letterSpacing")},H3:{fontFamily:wt("H3.fontFamily"),fontSize:wt("H3.fontSize"),fontWeight:wt("H3.fontWeight"),lineHeight:wt("H3.lineHeight"),letterSpacing:wt("H3.letterSpacing")},H4:{fontFamily:wt("H4.fontFamily"),fontSize:wt("H4.fontSize"),fontWeight:wt("H4.fontWeight"),lineHeight:wt("H4.lineHeight"),letterSpacing:wt("H4.letterSpacing")},H5:{fontFamily:wt("H5.fontFamily"),fontSize:wt("H5.fontSize"),fontWeight:wt("H5.fontWeight"),lineHeight:wt("H5.lineHeight"),letterSpacing:wt("H5.letterSpacing")},H6:{fontFamily:wt("H6.fontFamily"),fontSize:wt("H6.fontSize"),fontWeight:wt("H6.fontWeight"),lineHeight:wt("H6.lineHeight"),letterSpacing:wt("H6.letterSpacing")},Body:{fontFamily:wt("Body.fontFamily"),fontSize:wt("Body.fontSize"),fontWeight:wt("Body.fontWeight"),lineHeight:wt("Body.lineHeight"),letterSpacing:wt("Body.letterSpacing")},BodySmall:{fontFamily:wt("BodySmall.fontFamily"),fontSize:wt("BodySmall.fontSize"),fontWeight:wt("BodySmall.fontWeight"),lineHeight:wt("BodySmall.lineHeight"),letterSpacing:wt("BodySmall.letterSpacing")},XSmall:{fontFamily:wt("XSmall.fontFamily"),fontSize:wt("XSmall.fontSize"),fontWeight:wt("XSmall.fontWeight"),lineHeight:wt("XSmall.lineHeight"),letterSpacing:wt("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},At=(e,t)=>n=>{var r;const a=Et[e].fontFamily(n),o=Et[e].fontWeight(n);return Object.values(Ht).includes(a)?l`
                font-family: ${_t(t)||_t(o)||a};
                font-weight: normal !important;
            `:l`
            font-family: ${a};
            font-weight: ${null!==(r=zt(t)||o)&&void 0!==r?r:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=e=>{if(e>0)return l`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kt=(e,t,n=!1)=>r=>{const a=Et[e],o=a.fontSize(r);return l`
            ${At(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ot=(e=!1,t=!1,n=void 0)=>t?l`
            display: block;
            ${Ct(n)}
        `:e?l`
            display: inline;
        `:l`
            display: block;
            ${Ct(n)}
        `;var jt;!function(e){e.D1=i.h1`
        ${e=>l`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=i.h1`
        ${e=>l`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=i.h1`
        ${e=>l`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=i.h1`
        ${e=>l`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=i.h1`
        ${e=>l`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=i.h1`
        ${e=>l`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=i.h2`
        ${e=>l`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=i.h3`
        ${e=>l`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=i.h4`
        ${e=>l`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=i.h5`
        ${e=>l`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=i.h6`
        ${e=>l`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=i.p`
        ${e=>l`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=i.p`
        ${e=>l`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=i.span`
        ${e=>l`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Ot(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jt||(jt={}));const Wt=i.a`
    ${e=>l`
            ${kt(e.textStyle,e.weight)}
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
`,Tt=i(c)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lt=n=>{var{external:r=!1,children:a}=n,o=d(n,["external","children"]);return e(Wt,Object.assign({},o,{children:[a,r&&t(Tt,{})]}))};var Nt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Nt||(Nt={}));const It=i(jt.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return l`
                color: ${$t.Neutral[4](e)};
            `}}
`,Vt=({value:e,maxLength:i,disabled:l,renderCustomCounter:c})=>{const[d,g]=a("");o((()=>{g(h(`${e||""}`))}),[e,i]);const h=e=>{if(c)return c(i,e.toString().length);{const t=i-e.toString().length;return t<=1?`${t} character left`:`${t.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(d)?d:t(It,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:l},{children:d}))})},Rt={collections:{base:{InputBoxShadow:l`
        inset 0 0 4px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 4px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:l`
        inset 0 0 3px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 3px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Pt=e=>t=>{var n;const r=t.theme,a=Bt(Rt,r[vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?mt(a,e,r.options.designToken):mt(a,e)},Gt=Pt("InputBoxShadow"),Xt=Pt("InputErrorBoxShadow"),Mt=(Pt("ElevationBoxShadow"),Pt("Table.Header"),Pt("Table.Cell.Primary"),Pt("Table.Cell.Secondary"),Pt("Table.Cell.Selected"),Pt("Table.Cell.Hover"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),Ut=i.div`
    display: flex;
    flex-direction: column;
`,qt=i.textarea`
    border: 1px solid ${$t.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Mt};

    ${kt("Body","regular")}
    color: ${$t.Neutral[1]};
    background: ${$t.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${$t.Accent.Light[1]};
        box-shadow: ${Gt};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${$t.Neutral[3]};
    }

    ${e=>e.readOnly?l`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?l`
                background: ${$t.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${$t.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?l`
                border: 1px solid ${$t.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${$t.Validation.Red.Border(e)};
                    box-shadow: ${Xt};
                }
            `:void 0}
`;r.forwardRef(((e,n)=>{var{value:r,disabled:a,error:o,rows:i=5}=e,l=d(e,["value","disabled","error","rows"]);return t(qt,Object.assign({ref:n,disabled:a,value:r,error:o,rows:i},l))}));const Jt=r.forwardRef(((n,r)=>{var{value:i,disabled:l,rows:c=5,onChange:g}=n,h=d(n,["value","disabled","rows","onChange"]);const[u,f]=a(i);o((()=>{f(i)}),[i]);return e(Ut,{children:[t(qt,Object.assign({ref:r,disabled:l,value:u,rows:c||5,onChange:e=>{const t=e.target.value;h.maxLength&&t.length>h.maxLength||(f(t),e.target.value=t,g&&g(e))}},h)),h.maxLength&&t(Vt,{disabled:l,value:u,maxLength:h.maxLength,renderCustomCounter:h.renderCustomCounter})]})}));export{Jt as Textarea};
//# sourceMappingURL=index.js.map
