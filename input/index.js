import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{useRef as i,useImperativeHandle as o}from"react";import a,{css as s}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";import{CrossIcon as c}from"@lifesg/react-icons/cross";function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),y=m.Symbol,F=y,v=Object.prototype,S=v.hasOwnProperty,D=v.toString,$=F?F.toStringTag:void 0;var B=function(t){var e=S.call(t,$),n=t[$];try{t[$]=void 0;var r=!0}catch(t){}var i=D.call(t);return r&&(e?t[$]=n:delete t[$]),i},b=Object.prototype.toString;var x=B,w=function(t){return b.call(t)},H=y?y.toStringTag:void 0;var E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?x(t):w(t)};var M=E,O=function(t){return null!=t&&"object"==typeof t};var A=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==M(t)},_=f,C=A,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/;var z=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(Y.test(t)||!k.test(t)||null!=e&&t in Object(e))};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=E,L=T;var I,j=function(t){if(!L(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},R=m["__core-js_shared__"],P=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var V=function(t){return!!P&&P in t},N=Function.prototype.toString;var Z=j,U=V,X=T,G=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},J=/^\[object .+?Constructor\]$/,q=Function.prototype,Q=Object.prototype,K=q.toString,tt=Q.hasOwnProperty,et=RegExp("^"+K.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(t){return!(!X(t)||U(t))&&(Z(t)?et:J).test(G(t))},rt=function(t,e){return null==t?void 0:t[e]};var it=function(t,e){var n=rt(t,e);return nt(n)?n:void 0},ot=it(Object,"create"),at=ot;var st=function(){this.__data__=at?at(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ct=ot,ut=Object.prototype.hasOwnProperty;var dt=function(t){var e=this.__data__;if(ct){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ut.call(e,t)?e[t]:void 0},ht=ot,ft=Object.prototype.hasOwnProperty;var gt=ot;var pt=st,mt=lt,yt=dt,Ft=function(t){var e=this.__data__;return ht?void 0!==e[t]:ft.call(e,t)},vt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=pt,St.prototype.delete=mt,St.prototype.get=yt,St.prototype.has=Ft,St.prototype.set=vt;var Dt=St;var $t=function(){this.__data__=[],this.size=0};var Bt=function(t,e){return t===e||t!=t&&e!=e};var bt=function(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1},xt=bt,wt=Array.prototype.splice;var Ht=bt;var Et=bt;var Mt=bt;var Ot=$t,At=function(t){var e=this.__data__,n=xt(e,t);return!(n<0)&&(n==e.length-1?e.pop():wt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return Et(this.__data__,t)>-1},kt=function(t,e){var n=this.__data__,r=Mt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Yt.prototype.clear=Ot,Yt.prototype.delete=At,Yt.prototype.get=_t,Yt.prototype.has=Ct,Yt.prototype.set=kt;var zt=Yt,Tt=it(m,"Map"),Wt=Dt,Lt=zt,It=Tt;var jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Rt=function(t,e){var n=t.__data__;return jt(e)?n["string"==typeof e?"string":"hash"]:n.map},Pt=Rt;var Vt=Rt;var Nt=Rt;var Zt=Rt;var Ut=function(){this.size=0,this.__data__={hash:new Wt,map:new(It||Lt),string:new Wt}},Xt=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return Vt(this,t).get(t)},Jt=function(t){return Nt(this,t).has(t)},qt=function(t,e){var n=Zt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=Ut,Qt.prototype.delete=Xt,Qt.prototype.get=Gt,Qt.prototype.has=Jt,Qt.prototype.set=qt;var Kt=Qt;function te(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(te.Cache||Kt),n}te.Cache=Kt;var ee=te;var ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/\\(\\)?/g,ie=function(t){var e=ee(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ne,(function(t,n,r,i){e.push(r?i.replace(re,"$1"):n||t)})),e}));var oe=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ae=f,se=A,le=y?y.prototype:void 0,ce=le?le.toString:void 0;var ue=function t(e){if("string"==typeof e)return e;if(ae(e))return oe(e,t)+"";if(se(e))return ce?ce.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},de=ue;var he=f,fe=z,ge=ie,pe=function(t){return null==t?"":de(t)};var me=A;var ye=function(t,e){return he(t)?t:fe(t,e)?[t]:ge(pe(t))},Fe=function(t){if("string"==typeof t||me(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ve=function(t,e){for(var n=0,r=(e=ye(e,t)).length;null!=t&&n<r;)t=t[Fe(e[n++])];return n&&n==r?t:void 0};var Se=h((function(t,e,n){var r=null==t?void 0:ve(t,e);return void 0===r?n:r}));const De=(t,e,n)=>e?Se(n,e)||Se(t,e):n||t,$e=(t,e)=>{const n=e||t.defaultValue;return Se(t.collections,n)};var Be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Be||(Be={}));const be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xe=t=>e=>{const n=e.theme,r=$e(be,n[Be.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},we=(xe("Brand.1"),xe("Brand.2"),xe("Brand.3"),xe("Brand.4"),xe("Brand.5"),xe("Brand.6"),xe("Primary")),He=(xe("PrimaryDark"),xe("Secondary")),Ee={Light:{1:xe("Accent.Light.1"),2:xe("Accent.Light.2"),3:xe("Accent.Light.3"),4:xe("Accent.Light.4"),5:xe("Accent.Light.5"),6:xe("Accent.Light.6")},Dark:{1:xe("Accent.Dark.1"),2:xe("Accent.Dark.2"),3:xe("Accent.Dark.3")}},Me={1:xe("Neutral.1"),2:xe("Neutral.2"),3:xe("Neutral.3"),4:xe("Neutral.4"),5:xe("Neutral.5"),6:xe("Neutral.6"),7:xe("Neutral.7"),8:xe("Neutral.8")},Oe={Green:{Text:xe("Validation.Green.Text"),Icon:xe("Validation.Green.Icon"),Border:xe("Validation.Green.Border"),Background:xe("Validation.Green.Background")},Orange:{Text:xe("Validation.Orange.Text"),Icon:xe("Validation.Orange.Icon"),Border:xe("Validation.Orange.Border"),Background:xe("Validation.Orange.Background"),Badge:xe("Validation.Orange.Badge")},Red:{Text:xe("Validation.Red.Text"),Icon:xe("Validation.Red.Icon"),Border:xe("Validation.Red.Border"),Background:xe("Validation.Red.Background")},Blue:{Text:xe("Validation.Blue.Text"),Icon:xe("Validation.Blue.Icon"),Border:xe("Validation.Blue.Border"),Background:xe("Validation.Blue.Background")}},Ae={Accent:xe("Shadow.Accent"),Red:xe("Shadow.Red"),Elevation:xe("Shadow.Elevation")},_e={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${Ae.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${Ae.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Ae.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${Ae.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${Ae.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Ae.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ce=t=>e=>{var n;const r=e.theme,i=$e(_e,r[Be.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?De(i,t,r.options.designToken):De(i,t)},ke=Ce("InputBoxShadow"),Ye=Ce("InputErrorBoxShadow"),ze=(Ce("ElevationBoxShadow"),Ce("Table.Header"),Ce("Table.Cell.Primary"),Ce("Table.Cell.Secondary"),Ce("Table.Cell.Selected"),Ce("Table.Cell.Hover"),Ce("Button.Danger.BackgroundColor"),Ce("Button.Danger.Hover"),Ce("Button.Danger.Primary"),Ce("Button.Danger.Border"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Te={collections:{base:{D1:{fontFamily:ze.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ze.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ze.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ze.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ze.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ze.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ze.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ze.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ze.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ze.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ze.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ze.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=$e(Te,n[Be.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Le={D1:{fontFamily:We("D1.fontFamily"),fontSize:We("D1.fontSize"),fontWeight:We("D1.fontWeight"),lineHeight:We("D1.lineHeight"),letterSpacing:We("D1.letterSpacing")},D2:{fontFamily:We("D2.fontFamily"),fontSize:We("D2.fontSize"),fontWeight:We("D2.fontWeight"),lineHeight:We("D2.lineHeight"),letterSpacing:We("D2.letterSpacing")},D3:{fontFamily:We("D3.fontFamily"),fontSize:We("D3.fontSize"),fontWeight:We("D3.fontWeight"),lineHeight:We("D3.lineHeight"),letterSpacing:We("D3.letterSpacing")},D4:{fontFamily:We("D4.fontFamily"),fontSize:We("D4.fontSize"),fontWeight:We("D4.fontWeight"),lineHeight:We("D4.lineHeight"),letterSpacing:We("D4.letterSpacing")},DBody:{fontFamily:We("DBody.fontFamily"),fontSize:We("DBody.fontSize"),fontWeight:We("DBody.fontWeight"),lineHeight:We("DBody.lineHeight"),letterSpacing:We("DBody.letterSpacing")},H1:{fontFamily:We("H1.fontFamily"),fontSize:We("H1.fontSize"),fontWeight:We("H1.fontWeight"),lineHeight:We("H1.lineHeight"),letterSpacing:We("H1.letterSpacing")},H2:{fontFamily:We("H2.fontFamily"),fontSize:We("H2.fontSize"),fontWeight:We("H2.fontWeight"),lineHeight:We("H2.lineHeight"),letterSpacing:We("H2.letterSpacing")},H3:{fontFamily:We("H3.fontFamily"),fontSize:We("H3.fontSize"),fontWeight:We("H3.fontWeight"),lineHeight:We("H3.lineHeight"),letterSpacing:We("H3.letterSpacing")},H4:{fontFamily:We("H4.fontFamily"),fontSize:We("H4.fontSize"),fontWeight:We("H4.fontWeight"),lineHeight:We("H4.lineHeight"),letterSpacing:We("H4.letterSpacing")},H5:{fontFamily:We("H5.fontFamily"),fontSize:We("H5.fontSize"),fontWeight:We("H5.fontWeight"),lineHeight:We("H5.lineHeight"),letterSpacing:We("H5.letterSpacing")},H6:{fontFamily:We("H6.fontFamily"),fontSize:We("H6.fontSize"),fontWeight:We("H6.fontWeight"),lineHeight:We("H6.lineHeight"),letterSpacing:We("H6.letterSpacing")},Body:{fontFamily:We("Body.fontFamily"),fontSize:We("Body.fontSize"),fontWeight:We("Body.fontWeight"),lineHeight:We("Body.lineHeight"),letterSpacing:We("Body.letterSpacing")},BodySmall:{fontFamily:We("BodySmall.fontFamily"),fontSize:We("BodySmall.fontSize"),fontWeight:We("BodySmall.fontWeight"),lineHeight:We("BodySmall.lineHeight"),letterSpacing:We("BodySmall.letterSpacing")},XSmall:{fontFamily:We("XSmall.fontFamily"),fontSize:We("XSmall.fontSize"),fontWeight:We("XSmall.fontWeight"),lineHeight:We("XSmall.lineHeight"),letterSpacing:We("XSmall.letterSpacing")}},Ie=t=>{switch(t){case 700:case"bold":return ze.Bold;case 600:case"semibold":return ze.Semibold;case 300:case"light":return ze.Light;case 400:case"regular":return ze.Regular;default:return""}},je=(t,e)=>n=>{var r;const i=Le[t].fontFamily(n),o=Le[t].fontWeight(n);return Object.values(ze).includes(i)?s`
                font-family: ${Ie(e)||Ie(o)||i};
                font-weight: normal !important;
            `:s`
            font-family: ${i};
            font-weight: ${null!==(r=Re(e)||o)&&void 0!==r?r:"normal"};
        `},Re=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pe=t=>{if(t>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Ve=(t,e,n=!1)=>r=>{const i=Le[t],o=i.fontSize(r);return s`
            ${je(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ne=(t=!1,e=!1,n=void 0)=>e?s`
            display: block;
            ${Pe(n)}
        `:t?s`
            display: inline;
        `:s`
            display: block;
            ${Pe(n)}
        `;var Ze;!function(t){t.D1=a.h1`
        ${t=>s`
                ${Ve("D1",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=a.h1`
        ${t=>s`
                ${Ve("D2",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=a.h1`
        ${t=>s`
                ${Ve("D3",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=a.h1`
        ${t=>s`
                ${Ve("D4",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=a.h1`
        ${t=>s`
                ${Ve("DBody",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=a.h1`
        ${t=>s`
                ${Ve("H1",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=a.h2`
        ${t=>s`
                ${Ve("H2",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=a.h3`
        ${t=>s`
                ${Ve("H3",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=a.h4`
        ${t=>s`
                ${Ve("H4",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=a.h5`
        ${t=>s`
                ${Ve("H5",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=a.h6`
        ${t=>s`
                ${Ve("H6",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=a.p`
        ${t=>s`
                ${Ve("Body",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=a.p`
        ${t=>s`
                ${Ve("BodySmall",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=a.span`
        ${t=>s`
                ${Ve("XSmall",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ge(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ge(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ze||(Ze={}));const Ue=a.a`
    ${t=>s`
            ${Ve(t.textStyle,t.weight)}
            color: ${we};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${He};

                svg {
                    color: ${He};
                }
            }
        `}
`,Xe=a(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ge=n=>{var{external:r=!1,children:i}=n,o=u(n,["external","children"]);return t(Ue,Object.assign({},o,{children:[i,r&&e(Xe,{})]}))};var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const qe=a.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Me[5]};
    border-radius: 4px;
    background: ${Me[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ee.Light[1]};
        box-shadow: ${ke};
    }

    ${t=>t.$readOnly?s`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:t.$disabled?s`
                background: ${Me[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Me[5]};
                    box-shadow: none;
                }
            `:t.$error?s`
                border: 1px solid ${Oe.Red.Border};

                :focus-within {
                    border: 1px solid ${Oe.Red.Border};
                    box-shadow: ${Ye};
                }
            `:void 0}
`;a.input`
    ${Ve("Body","regular")}
    color: ${Me[1]};
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
        color: ${Me[3]};
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
`;var Qe={exports:{}};Qe.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,F=l||0,v=c||0,S=u||0;return d?new Date(Date.UTC(p,m,g,y,F,v,S+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,v,S)):new Date(p,m,g,y,F,v,S)}catch(t){return new Date("")}}(e,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var Ke,tn,en=h(Qe.exports),nn={exports:{}},rn=h(nn.exports=(Ke={year:0,month:1,day:2,hour:3,minute:4,second:5},tn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=tn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),tn[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ke[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,s=i||e||r,l=o(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}})),on={exports:{}};on.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=m;var D=function(t){return t instanceof x},$=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},B=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},b=F;b.l=$,b.i=D,b.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=$(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return B(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<B(t)},y.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!b.u(e)||e,u=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(r?y-S:y+(6-S),m);case s:case h:return g(F+"Hours",0);case a:return g(F+"Minutes",1);case o:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=b.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=b.p(u),p=function(t){var e=B(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},d=function(t){return b.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:b.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=b.p(h),m=B(r),y=(m.utcOffset()-this.utcOffset())*e,F=this-m,v=b.m(this,m);return v=(g={},g[d]=v/12,g[c]=v,g[u]=v/3,g[l]=(F-y)/6048e5,g[s]=(F-y)/864e5,g[a]=F/n,g[o]=F/e,g[i]=F/t,g)[p]||F,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return B.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,x,B),t.$i=!0),B},B.locale=$,B.isDayjs=D,B.unix=function(t){return B(1e3*t)},B.en=S[v],B.Ls=S,B.p={},B}();var an=h(on.exports),sn={exports:{}};sn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var ln=h(sn.exports),cn={exports:{}};cn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var un=h(cn.exports),dn={exports:{}};dn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var hn,fn=h(dn.exports);an.extend(ln),an.extend(un),an.extend(fn),an.extend(en),an.extend(rn),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=an(e).startOf("week");return gn(n).map((t=>pn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return pn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(an(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+an(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=an(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const o=t.isWithinRange(e,r?an(r):void 0,i?an(i):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!o||!!a}}(hn||(hn={}));const gn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},pn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},mn=[1,3,5,7,8,10,12],yn=[4,6,9,11];var Fn,vn,Sn,Dn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":mn.includes(o)?Math.min(i,31).toString():yn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=an(t,n);return an(e,n).diff(r,"minute")},t.toDayjs=t=>t?an(t):an(),t.addMinutesToTime=(t,e,n="HH:mm")=>an(t,n).add(e,"minutes").format(n)}(Fn||(Fn={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!an(t).isBefore(r,"day"))||!(!i||!an(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(an(t).isValid())return t}return""}}(vn||(vn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Sn||(Sn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Dn||(Dn={}));const $n=a.input`
    ${Ve("Body","regular")}
    color: ${Me[1]};

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
        color: ${Me[3]};
    }

    ${t=>"number"===t.type?s`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:t.disabled?s`
                cursor: not-allowed;
            `:void 0}
`,Bn=a.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Me[3]};
    background-color: transparent;
    border: none;
`,bn=a(c)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,xn=a.div`
    display: flex;
    width: 100%;
`,wn=r.forwardRef(((r,a)=>{var{value:s,spacing:l,type:c,error:d,disabled:h,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:F="bordered"}=r,v=u(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const S=i();o(a,(()=>S.current),[]);const D=function({ref:t,formatter:e}){return()=>{const n=t.current,r=n.value,i=e(r),o=r.substring(0,n.selectionEnd),a=e(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:S,formatter:t=>Dn.transformWithSpaces(t,l)}),$=t=>{g&&(b()?x(t):g(t))},B=()=>{p&&p(),S&&S.current&&S.current.focus()},b=()=>"tel"===c&&l,x=t=>{const{nextValue:e,updateCaretPosition:n}=D(),r=e.replace(/\s/g,"");t.target.value=r,g(t),n()},w=s?(t=>t?b()?Dn.transformWithSpaces(t,l):t:"")(s):s,H=()=>t(n,{children:[e($n,Object.assign({"data-testid":"input",ref:S,disabled:h,value:w,onChange:$,type:c,readOnly:f},v)),m&&!h&&!f&&!!s&&e(Bn,Object.assign({onClick:B,type:"button"},{children:e(bn,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===F?e(xn,Object.assign({className:y},{children:H()})):e(qe,Object.assign({$disabled:h,$error:d,$readOnly:f,className:y},{children:H()}))})}));export{wn as Input};
//# sourceMappingURL=index.js.map
