import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o,useState as a,useEffect as l}from"react";import s,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as d}from"@lifesg/react-icons/cross";function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,p="object"==typeof f&&f&&f.Object===Object&&f,m="object"==typeof self&&self&&self.Object===Object&&self,y=p||m||Function("return this")(),v=y.Symbol,$=v,S=Object.prototype,F=S.hasOwnProperty,b=S.toString,D=$?$.toStringTag:void 0;var B=function(e){var t=F.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch(e){}var i=b.call(e);return r&&(t?e[D]=n:delete e[D]),i},w=Object.prototype.toString;var x=B,H=function(e){return w.call(e)},O=v?v.toStringTag:void 0;var M=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?x(e):H(e)};var E=M,_=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==E(e)},A=g,C=k,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var W=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(T.test(e)||!z.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=M,L=N;var I,j=function(e){if(!L(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=y["__core-js_shared__"],V=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!V&&V in e},Z=Function.prototype.toString;var U=j,X=P,G=N,J=function(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,ee=K.toString,te=Q.hasOwnProperty,ne=RegExp("^"+ee.call(te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!G(e)||X(e))&&(U(e)?ne:q).test(J(e))},ie=function(e,t){return null==e?void 0:e[t]};var oe=function(e,t){var n=ie(e,t);return re(n)?n:void 0},ae=oe(Object,"create"),le=ae;var se=function(){this.__data__=le?le(null):{},this.size=0};var ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ue=ae,de=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(ue){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},fe=ae,ge=Object.prototype.hasOwnProperty;var pe=ae;var me=se,ye=ce,ve=he,$e=function(e){var t=this.__data__;return fe?void 0!==t[e]:ge.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Fe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fe.prototype.clear=me,Fe.prototype.delete=ye,Fe.prototype.get=ve,Fe.prototype.has=$e,Fe.prototype.set=Se;var be=Fe;var De=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var we=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},xe=we,He=Array.prototype.splice;var Oe=we;var Me=we;var Ee=we;var _e=De,ke=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=Oe(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return Me(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=Ee(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=_e,Te.prototype.delete=ke,Te.prototype.get=Ae,Te.prototype.has=Ce,Te.prototype.set=ze;var We=Te,Ne=oe(y,"Map"),Ye=be,Le=We,Ie=Ne;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Re;var Pe=Re;var Ze=Re;var Ue=Re;var Xe=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ie||Le),string:new Ye}},Ge=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Pe(this,e).get(e)},qe=function(e){return Ze(this,e).has(e)},Ke=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Xe,Qe.prototype.delete=Ge,Qe.prototype.get=Je,Qe.prototype.has=qe,Qe.prototype.set=Ke;var et=Qe;function tt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(tt.Cache||et),n}tt.Cache=et;var nt=tt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,it=/\\(\\)?/g,ot=function(e){var t=nt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,r,i){t.push(r?i.replace(it,"$1"):n||e)})),t}));var at=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},lt=g,st=k,ct=v?v.prototype:void 0,ut=ct?ct.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(lt(t))return at(t,e)+"";if(st(t))return ut?ut.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ht=dt;var ft=g,gt=W,pt=ot,mt=function(e){return null==e?"":ht(e)};var yt=k;var vt=function(e,t){return ft(e)?e:gt(e,t)?[e]:pt(mt(e))},$t=function(e){if("string"==typeof e||yt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var St=function(e,t){for(var n=0,r=(t=vt(t,e)).length;null!=e&&n<r;)e=e[$t(t[n++])];return n&&n==r?e:void 0};var Ft=function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r};const bt=(e,t,n)=>t?Ft(n,t)||Ft(e,t):n||e,Dt=(e,t)=>{const n=t||e.defaultValue;return Ft(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=Dt(wt,n[Bt.colorScheme]);return n.options&&n.options.color?bt(r,e,n.options.color):bt(r,e)},Ht={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},Ot={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Ht.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ht.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Mt=e=>t=>{var n;const r=t.theme,i=Dt(Ot,r[Bt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?bt(i,e,r.options.designToken):bt(i,e)},Et=Mt("InputBoxShadow"),_t=Mt("InputErrorBoxShadow"),kt=(Mt("ElevationBoxShadow"),Mt("Table.Header"),Mt("Table.Cell.Primary"),Mt("Table.Cell.Secondary"),Mt("Table.Cell.Selected"),Mt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),At={collections:{base:{D1:{fontFamily:kt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:kt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:kt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:kt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:kt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:kt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:kt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:kt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:kt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:kt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:kt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:kt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,r=Dt(At,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?bt(r,e,n.options.textStyle):bt(r,e)},zt={D1:{fontFamily:Ct("D1.fontFamily"),fontSize:Ct("D1.fontSize"),fontWeight:Ct("D1.fontWeight"),lineHeight:Ct("D1.lineHeight"),letterSpacing:Ct("D1.letterSpacing")},D2:{fontFamily:Ct("D2.fontFamily"),fontSize:Ct("D2.fontSize"),fontWeight:Ct("D2.fontWeight"),lineHeight:Ct("D2.lineHeight"),letterSpacing:Ct("D2.letterSpacing")},D3:{fontFamily:Ct("D3.fontFamily"),fontSize:Ct("D3.fontSize"),fontWeight:Ct("D3.fontWeight"),lineHeight:Ct("D3.lineHeight"),letterSpacing:Ct("D3.letterSpacing")},D4:{fontFamily:Ct("D4.fontFamily"),fontSize:Ct("D4.fontSize"),fontWeight:Ct("D4.fontWeight"),lineHeight:Ct("D4.lineHeight"),letterSpacing:Ct("D4.letterSpacing")},DBody:{fontFamily:Ct("DBody.fontFamily"),fontSize:Ct("DBody.fontSize"),fontWeight:Ct("DBody.fontWeight"),lineHeight:Ct("DBody.lineHeight"),letterSpacing:Ct("DBody.letterSpacing")},H1:{fontFamily:Ct("H1.fontFamily"),fontSize:Ct("H1.fontSize"),fontWeight:Ct("H1.fontWeight"),lineHeight:Ct("H1.lineHeight"),letterSpacing:Ct("H1.letterSpacing")},H2:{fontFamily:Ct("H2.fontFamily"),fontSize:Ct("H2.fontSize"),fontWeight:Ct("H2.fontWeight"),lineHeight:Ct("H2.lineHeight"),letterSpacing:Ct("H2.letterSpacing")},H3:{fontFamily:Ct("H3.fontFamily"),fontSize:Ct("H3.fontSize"),fontWeight:Ct("H3.fontWeight"),lineHeight:Ct("H3.lineHeight"),letterSpacing:Ct("H3.letterSpacing")},H4:{fontFamily:Ct("H4.fontFamily"),fontSize:Ct("H4.fontSize"),fontWeight:Ct("H4.fontWeight"),lineHeight:Ct("H4.lineHeight"),letterSpacing:Ct("H4.letterSpacing")},H5:{fontFamily:Ct("H5.fontFamily"),fontSize:Ct("H5.fontSize"),fontWeight:Ct("H5.fontWeight"),lineHeight:Ct("H5.lineHeight"),letterSpacing:Ct("H5.letterSpacing")},H6:{fontFamily:Ct("H6.fontFamily"),fontSize:Ct("H6.fontSize"),fontWeight:Ct("H6.fontWeight"),lineHeight:Ct("H6.lineHeight"),letterSpacing:Ct("H6.letterSpacing")},Body:{fontFamily:Ct("Body.fontFamily"),fontSize:Ct("Body.fontSize"),fontWeight:Ct("Body.fontWeight"),lineHeight:Ct("Body.lineHeight"),letterSpacing:Ct("Body.letterSpacing")},BodySmall:{fontFamily:Ct("BodySmall.fontFamily"),fontSize:Ct("BodySmall.fontSize"),fontWeight:Ct("BodySmall.fontWeight"),lineHeight:Ct("BodySmall.lineHeight"),letterSpacing:Ct("BodySmall.letterSpacing")},XSmall:{fontFamily:Ct("XSmall.fontFamily"),fontSize:Ct("XSmall.fontSize"),fontWeight:Ct("XSmall.fontWeight"),lineHeight:Ct("XSmall.lineHeight"),letterSpacing:Ct("XSmall.letterSpacing")}},Tt=e=>{switch(e){case 700:case"bold":return kt.Bold;case 600:case"semibold":return kt.Semibold;case 300:case"light":return kt.Light;case 400:case"regular":return kt.Regular;default:return""}},Wt=(e,t)=>n=>{var r;const i=zt[e].fontFamily(n),o=zt[e].fontWeight(n);return Object.values(kt).includes(i)?c`
                font-family: ${Tt(t)||Tt(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=Nt(t)||o)&&void 0!==r?r:"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Yt=(e,t,n=!1)=>r=>{const i=zt[e],o=i.fontSize(r);return c`
            ${Wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Lt=(e=!1,t=!1)=>t?c`
            display: block;
        `:e?c`
            display: inline;
        `:c`
            display: block;
        `;var It;!function(e){e.D1=s.h1`
        ${e=>c`
                ${Yt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${Yt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${Yt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${Yt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${Yt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${Yt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${Yt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${Yt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${Yt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${Yt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${Yt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${Yt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${Yt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${Yt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Lt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Vt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(It||(It={}));const jt=s.a`
    ${e=>c`
            ${Yt(e.textStyle,e.weight)}
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
`,Rt=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Vt=n=>{var{external:r=!1,children:i}=n,o=h(n,["external","children"]);return e(jt,Object.assign({},o,{children:[i,r&&t(Rt,{})]}))};var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Zt=s.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Et};
    }

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?c`
                background: ${Ht.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ht.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border};
                    box-shadow: ${_t};
                }
            `:void 0}
`;s.input`
    ${Yt("Body","regular")}
    color: ${Ht.Neutral[1]};
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
        color: ${Ht.Neutral[3]};
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
`;var Ut={exports:{}};Ut.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],h=u&&u[0],f=u&&u[1];a[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=e.slice(r),u=o.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!s&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=l||0,v=s||0,$=c||0,S=u||0;return d?new Date(Date.UTC(p,m,g,y,v,$,S+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Xt,Gt,Jt=Ut.exports,qt={exports:{}},Kt=qt.exports=(Xt={year:0,month:1,day:2,hour:3,minute:4,second:5},Gt={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Gt[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Gt[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Xt[s];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,l=i||t||r,s=o(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Qt={exports:{}};Qt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",S={};S[$]=m;var F=function(e){return e instanceof w},b=function e(t,n,r){var i;if(!t)return $;if("string"==typeof t){var o=t.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;S[l]=t,i=l}return!r&&i&&($=i),i||!r&&$},D=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},B=v;B.l=b,B.i=F,B.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=b(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return f(r?y-S:y+(6-S),m);case l:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[l]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=B.p(u),p=function(e){var t=D(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return B.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:B.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=B.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,$=B.m(this,m);return $=(g={},g[d]=$/12,g[c]=$,g[u]=$/3,g[s]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/n,g[o]=v/t,g[i]=v/e,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=b(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),x=w.prototype;return D.prototype=x,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",d],["$D",h]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,w,D),e.$i=!0),D},D.locale=b,D.isDayjs=F,D.unix=function(e){return D(1e3*e)},D.en=S[$],D.Ls=S,D.p={},D}();var en=Qt.exports,tn={exports:{}};tn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var nn=tn.exports,rn={exports:{}};rn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var on=rn.exports,an={exports:{}};an.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ln,sn=an.exports;en.extend(nn),en.extend(on),en.extend(sn),en.extend(Jt),en.extend(Kt),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=en(t).startOf("week");return cn(n).map((e=>un(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return un(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(en(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+en(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=en(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(ln||(ln={}));const cn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},un=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},dn=[1,3,5,7,8,10,12],hn=[4,6,9,11];var fn,gn,pn,mn;function yn({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),l=o.length-a.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(s,s)}}}}!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":dn.includes(o)?Math.min(i,31).toString():hn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=en(e,n);return en(t,n).diff(r,"minute")},e.toDayjs=e=>e?en(e):en()}(fn||(fn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!en(e).isBefore(r,"day"))||!(!i||!en(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(en(e).isValid())return e}return""}}(gn||(gn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(pn||(pn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(mn||(mn={}));const vn=s.input`
    ${Yt("Body","regular")}
    color: ${Ht.Neutral[1]};

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
        color: ${Ht.Neutral[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,$n=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ht.Neutral[3]};
    background-color: transparent;
    border: none;
`,Sn=s(d)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Fn=s.div`
    display: flex;
    width: 100%;
`,bn=r.forwardRef(((r,a)=>{var{value:l,spacing:s,type:c,error:u,disabled:d,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:v="bordered"}=r,$=h(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const S=i();o(a,(()=>S.current),[]);const F=yn({ref:S,formatter:e=>mn.transformWithSpaces(e,s)}),b=e=>{g&&(B()?w(e):g(e))},D=()=>{p&&p(),S&&S.current&&S.current.focus()},B=()=>"tel"===c&&s,w=e=>{const{nextValue:t,updateCaretPosition:n}=F(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},x=l?(e=>e?B()?mn.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t(vn,Object.assign({"data-testid":"input",ref:S,disabled:d,value:x,onChange:b,type:c,readOnly:f},$)),m&&!d&&!f&&!!l&&t($n,Object.assign({onClick:D,type:"button"},{children:t(Sn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===v?t(Fn,Object.assign({className:y},{children:H()})):t(Zt,Object.assign({$disabled:d,$error:u,$readOnly:f,className:y},{children:H()}))})}));s.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Et};
    }

    ${e=>e.$readOnly?c`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?c`
                background: ${Ht.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?c`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${_t};
                }
            `:void 0}
`,s(bn)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const Dn=s.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Yt("Body","regular")}
    color: ${Ht.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ht.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return c`
                color: ${Ht.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ht.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?c`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:c`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,Bn=s(Dn)`
    margin-right: 0.25rem;
`,wn=s(bn)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,xn=s(wn)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,Hn=s(It.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,On=s.div`
    display: flex;
`,Mn=s(It.Body)`
    ${e=>{if(e.$inactive)return c`
                color: ${Ht.Neutral[3]};
            `}}
`,En=r=>{var{disabled:o,error:s,value:c,onChange:u,onBlur:d,onChangeRaw:f,onBlurRaw:g,readOnly:p,placeholder:m="00-8888"}=r,y=h(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder"]);const[v,$]=a(""),[S,F]=a(""),[b,D]=a("none"),B=i(null),w=i(null),x=i(null),H=i(v),O=i(S),M=i(b),E=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),_=yn({ref:w,formatter:E}),k=yn({ref:x,formatter:E}),A=e=>{H.current=e,$(e)},C=e=>{O.current=e,F(e)},z=e=>{M.current=e,D(e)};l((()=>{"floor"===b&&3===v.length&&x.current&&x.current.focus()}),[v]),l((()=>{I(c)}),[c]);const T=e=>{z(e.target.name),e.target.select()},W=e=>{const t=e.target.name,n=e.target.value,r=L(n);"floor"===t?(A(r),r!==v&&j(r,t)):(C(r),r!==S&&j(r,t))},N=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=_();n(),A(e),j(e,t)}else{const{nextValue:e,updateCaretPosition:n}=k();n(),C(e),j(e,t)}},Y=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===b&&0===S.length&&w.current.focus()},L=e=>/^[0-9]$/.test(e)?mn.padValue(e,!0):e.toLocaleUpperCase(),I=e=>{if(e!==_n)if(void 0===e||0===e.length)A(""),C("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];A("floor"===b?e:L(e)),C("unit"===b?n:L(n))}}},j=(e,t)=>{if(!u&&!f)return;const n={floor:H.current,unit:O.current};if(n[t]=e,u){const e=V(n);u(e)}f&&f([n.floor,n.unit])},R=()=>{if(!d&&!g)return;const e={floor:L(H.current),unit:L(O.current)};if(d){const t=V(e);d(t)}g&&g([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":_n},P=e=>e.split("-");return e(Zt,Object.assign({},y,{ref:B,onClick:()=>{"none"===b&&w.current&&w.current.focus()},$disabled:o,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{B.current&&B.current.contains(e.relatedTarget)||"none"!==M.current&&(z("none"),R())}},{children:[t(Bn,Object.assign({"data-testid":"addon",disabled:o,$readOnly:p},{children:"#"})),p&&c?(()=>{const n=c.split("-");return e(On,{children:[t(Mn,{children:n[0]}),t(Hn,{children:"-"}),t(Mn,{children:n[1]})]})})():e(n,{children:[t(wn,{name:"floor",maxLength:3,value:v,ref:w,onFocus:T,onBlur:W,onChange:N,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==b||p?P(m)[0]:""}),t(Hn,Object.assign({$inactive:0===v.length},{children:"-"})),t(xn,{name:"unit",maxLength:5,value:S,ref:x,onFocus:T,onBlur:W,onChange:N,onKeyDown:Y,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==b||p?P(m)[1]:""})]})]}))},_n="Invalid unit number";export{En as UnitNumberInput};
//# sourceMappingURL=index.js.map
