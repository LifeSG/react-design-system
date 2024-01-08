import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const s={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:s.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:s.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:s.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:s.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:s.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:s.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:s.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:s.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:s.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,u="object"==typeof d&&d&&d.Object===Object&&d,g="object"==typeof self&&self&&self.Object===Object&&self,f=u||g||Function("return this")(),p=f.Symbol,m=p,y=Object.prototype,F=y.hasOwnProperty,$=y.toString,S=m?m.toStringTag:void 0;var v=function(t){var e=F.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var i=$.call(t);return r&&(e?t[S]=n:delete t[S]),i},b=Object.prototype.toString;var D=v,B=function(t){return b.call(t)},w=p?p.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?D(t):B(t)};var x=H,O=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==x(t)},k=h,E=_,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var j=function(t,e){if(k(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(C.test(t)||!A.test(t)||null!=e&&t in Object(e))};var z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},L=H,M=z;var W,T=function(t){if(!M(t))return!1;var e=L(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=f["__core-js_shared__"],V=(W=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var R=function(t){return!!V&&V in t},P=Function.prototype.toString;var N=T,Y=R,G=z,U=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,Q=Z.hasOwnProperty,K=RegExp("^"+q.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(t){return!(!G(t)||Y(t))&&(N(t)?K:X).test(U(t))},et=function(t,e){return null==t?void 0:t[e]};var nt=function(t,e){var n=et(t,e);return tt(n)?n:void 0},rt=nt(Object,"create"),it=rt;var at=function(){this.__data__=it?it(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},lt=rt,st=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(lt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(e,t)?e[t]:void 0},dt=rt,ht=Object.prototype.hasOwnProperty;var ut=rt;var gt=at,ft=ot,pt=ct,mt=function(t){var e=this.__data__;return dt?void 0!==e[t]:ht.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?"__lodash_hash_undefined__":e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=gt,Ft.prototype.delete=ft,Ft.prototype.get=pt,Ft.prototype.has=mt,Ft.prototype.set=yt;var $t=Ft;var St=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var bt=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Dt=bt,Bt=Array.prototype.splice;var wt=bt;var Ht=bt;var xt=bt;var Ot=St,_t=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},kt=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Ht(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=xt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=Ot,Ct.prototype.delete=_t,Ct.prototype.get=kt,Ct.prototype.has=Et,Ct.prototype.set=At;var jt=Ct,zt=nt(f,"Map"),Lt=$t,Mt=jt,Wt=zt;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=It;var Rt=It;var Pt=It;var Nt=It;var Yt=function(){this.size=0,this.__data__={hash:new Lt,map:new(Wt||Mt),string:new Lt}},Gt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Ut=function(t){return Rt(this,t).get(t)},Xt=function(t){return Pt(this,t).has(t)},Jt=function(t,e){var n=Nt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Zt.prototype.clear=Yt,Zt.prototype.delete=Gt,Zt.prototype.get=Ut,Zt.prototype.has=Xt,Zt.prototype.set=Jt;var qt=Zt;function Qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Qt.Cache||qt),n}Qt.Cache=qt;var Kt=Qt;var te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/\\(\\)?/g,ne=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(te,(function(t,n,r,i){e.push(r?i.replace(ee,"$1"):n||t)})),e}));var re=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ie=h,ae=_,oe=p?p.prototype:void 0,le=oe?oe.toString:void 0;var se=function t(e){if("string"==typeof e)return e;if(ie(e))return re(e,t)+"";if(ae(e))return le?le.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=se;var de=h,he=j,ue=ne,ge=function(t){return null==t?"":ce(t)};var fe=_;var pe=function(t,e){return de(t)?t:he(t,e)?[t]:ue(ge(t))},me=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[me(e[n++])];return n&&n==r?t:void 0};var Fe=function(t,e,n){var r=null==t?void 0:ye(t,e);return void 0===r?n:r};const $e=(t,e,n)=>e?Fe(n,e)||Fe(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return Fe(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ve||(ve={}));const be={collections:{base:c},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=Se(be,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?$e(r,t,n.options.textStyle):$e(r,t)},Be={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},we=t=>{switch(t){case 700:case"bold":return s.Bold;case 600:case"semibold":return s.Semibold;case 300:case"light":return s.Light;case 400:case"regular":return s.Regular;default:return""}},He=(t,e)=>n=>{var r;const a=Be[t].fontFamily(n),o=Be[t].fontWeight(n);return Object.values(s).includes(a)?i`
                font-family: ${we(e)||we(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=xe(e)||o)&&void 0!==r?r:"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oe=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},_e=(t,e,n=!1)=>r=>{const a=Be[t],o=a.fontSize(r);return i`
            ${He(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ke=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${Oe(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${Oe(n)}
        `,Ee={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ae=t=>e=>{const n=e.theme,r=Se(Ee,n[ve.colorScheme]);return n.options&&n.options.color?$e(r,t,n.options.color):$e(r,t)},Ce=(Ae("Brand.1"),Ae("Brand.2"),Ae("Brand.3"),Ae("Brand.4"),Ae("Brand.5"),Ae("Brand.6"),Ae("Primary")),je=(Ae("PrimaryDark"),Ae("Secondary")),ze=(Ae("Accent.Light.1"),Ae("Accent.Light.2"),Ae("Accent.Light.3"),Ae("Accent.Light.4"),Ae("Accent.Light.5"),Ae("Accent.Light.6"),Ae("Accent.Dark.1"),Ae("Accent.Dark.2"),Ae("Accent.Dark.3"),{1:Ae("Neutral.1"),2:Ae("Neutral.2"),3:Ae("Neutral.3"),4:Ae("Neutral.4"),5:Ae("Neutral.5"),6:Ae("Neutral.6"),7:Ae("Neutral.7"),8:Ae("Neutral.8")});Ae("Validation.Green.Text"),Ae("Validation.Green.Icon"),Ae("Validation.Green.Border"),Ae("Validation.Green.Background"),Ae("Validation.Orange.Text"),Ae("Validation.Orange.Icon"),Ae("Validation.Orange.Border"),Ae("Validation.Orange.Background"),Ae("Validation.Orange.Badge"),Ae("Validation.Red.Text"),Ae("Validation.Red.Icon"),Ae("Validation.Red.Border"),Ae("Validation.Red.Background"),Ae("Validation.Blue.Text"),Ae("Validation.Blue.Icon"),Ae("Validation.Blue.Border"),Ae("Validation.Blue.Background"),Ae("Shadow.Accent"),Ae("Shadow.Red"),Ae("Shadow.Elevation");var Le;!function(t){t.D1=r.h1`
        ${t=>i`
                ${_e("D1",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${_e("D2",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${_e("D3",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${_e("D4",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${_e("DBody",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${_e("H1",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${_e("H2",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${_e("H3",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${_e("H4",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${_e("H5",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${_e("H6",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${_e("Body",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${_e("BodySmall",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${_e("XSmall",t.weight,t.paragraph)}
                color: ${ze[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Te(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Te(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Le||(Le={}));const Me=r.a`
    ${t=>i`
            ${_e(t.textStyle,t.weight)}
            color: ${Ce};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${je};

                svg {
                    color: ${je};
                }
            }
        `}
`,We=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Te=n=>{var{external:r=!1,children:i}=n,a=l(n,["external","children"]);return t(Me,Object.assign({},a,{children:[i,r&&e(We,{})]}))};var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Ve={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Re=t=>Object.keys(Ve).reduce(((e,n)=>{const r=Ve[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Pe=Re("max-width"),Ne=(Re("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Pe.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ye=r(Le.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Ge=r.div`
    display: flex;
    align-items: flex-start;
`,Ue=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Pe.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Xe=()=>t(Ne,Object.assign({"data-testid":"download-app-section"},{children:[e(Ye,Object.assign({weight:"semibold"},{children:"Download the app"})),t(Ge,{children:[e(Ue,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(Ue,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var Je,Ze={exports:{}},qe=Ze.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",h="year",u="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:s,d:l,D:u,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var v=function(t){return t instanceof w},b=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&($=i),i||!r&&$},D=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=F;B.l=b,B.i=v,B.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,d=B.p(t),g=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},f=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(d){case h:return r?g(1,0):g(31,11);case c:return r?g(1,m):g(0,m+1);case s:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return g(r?y-S:y+(6-S),m);case l:case u:return f(F+"Hours",0);case o:return f(F+"Minutes",1);case a:return f(F+"Seconds",2);case i:return f(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=B.p(t),d="set"+(this.$u?"UTC":""),g=(n={},n[l]=d+"Date",n[u]=d+"Date",n[c]=d+"Month",n[h]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],f=s===l?this.$D+(e-this.$W):e;if(s===c||s===h){var p=this.clone().set(u,1);p.$d[g](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,d){var u,g=this;r=Number(r);var f=B.p(d),p=function(t){var e=D(g);return B.w(e.date(e.date()+Math.round(t*r)),g)};if(f===c)return this.set(c,this.$M+r);if(f===h)return this.set(h,this.$y+r);if(f===l)return p(1);if(f===s)return p(7);var m=(u={},u[a]=e,u[o]=n,u[i]=t,u)[f]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return B.s(a%12||12,t,"0")},u=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:B.s(a,2,"0"),h:h(1),hh:h(2),a:u(a,o,!0),A:u(a,o,!1),m:String(o),mm:B.s(o,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||f[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,u,g){var f,p=B.p(u),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,F=this-m,$=B.m(this,m);return $=(f={},f[h]=$/12,f[c]=$,f[d]=$/3,f[s]=(F-y)/6048e5,f[l]=(F-y)/864e5,f[o]=F/n,f[a]=F/e,f[i]=F/t,f)[p]||F,g?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return D.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",h],["$D",u]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,w,D),t.$i=!0),D},D.locale=b,D.isDayjs=v,D.unix=function(t){return D(1e3*t)},D.en=S[$],D.Ls=S,D.p={},D}();!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${qe(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:Object.assign(Object.assign({href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign({href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign({href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0},t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})})}(Je||(Je={}));const Qe=r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:l}=t;return i`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Pe.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${Pe.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${l||1};
            }
        `}}
`,Ke=o.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=l(t,["mobileCols","tabletCols","desktopCols"]);return e(Qe,Object.assign({ref:n},(()=>{const t=i||r,e=r,n=tn(a||i||r),o=tn(t),l=tn(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),tn=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},en=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=l(t,["children","data-testid","type","stretch"]);return e(nn,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),nn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?i`
                padding: 0 3rem;
            `:i`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Pe.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Pe.tablet} {
        max-width: 720px;
    }
    ${Pe.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Pe.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Pe.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,rn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=l(t,["children","data-testid","stretch"]);return e(an,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),an=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i`
                ${Pe.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,on=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,c=l(t,["children","data-testid","className","type","stretch"]);return e(rn,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},c,{children:e(en,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),ln={Section:rn,Container:en,Content:on,ColDiv:Ke},sn=r.footer`
    background: ${ze[7]};
`,cn=r(Le.Hyperlink.Small)`
    color: ${ze[1]};
`,dn=r(ln.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${ze[5]};

    ${Pe.tablet} {
        padding: 2rem 0;
    }
`,hn=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,un=r.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${Pe.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Pe.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,gn=r.div`
    grid-column: 9 / span 4;

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,fn=r.div`
    display: none;

    ${Pe.tablet} {
        display: block;
        height: 1px;
        background: ${ze[6]};
    }
`,pn=r(ln.Content)`
    padding: 1.375rem 0;

    ${Pe.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,mn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Pe.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,yn=r(mn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Pe.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Pe.mobileL} {
        grid-column: 1 / span 4;
    }
`,Fn=r(Le.Hyperlink.Small)`
    ${_e("XSmall","regular")}
    color: ${ze[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${ze[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${ze[3]};
        svg {
            color: ${ze[3]};
        }
    }

    ${Pe.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Pe.tablet} {
        margin-bottom: 0.625rem;
    }
`,$n=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:s,showDownloadAddon:c,logoSrc:d,copyrightInfo:h,onFooterLinkClick:u,layout:g="default"}=r,f=l(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===g,m=t=>t.map(((t,n)=>{const r=l(t,["data-options"]);return e("li",{children:e(cn,Object.assign({},r,{onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):u&&(t.preventDefault(),u(e))})(e,t)}))},n)}));return t(sn,Object.assign({},f,{children:[(()=>{let r=null;return i||((a||c)&&(r=t(n,{children:[e(hn,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:d||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})})),(null==a?void 0:a[0])&&e(un,Object.assign({"data-testid":"link-col-1"},{children:m(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(un,Object.assign({"data-testid":"link-col-2"},{children:m(a[1])}),"link-col-2"),c&&e(gn,{children:e(Xe,{})})]})),r?e(dn,Object.assign({type:"grid",stretch:p},{children:r})):null)})(),e(fn,{}),t(pn,Object.assign({type:"grid",stretch:p},{children:[e(mn,{children:(()=>{const t=Je.getDisclaimerLinks(s);return Object.keys(t).map((n=>e(Fn,Object.assign({},t[n]),n)))})()},"disclaimer"),e(yn,{children:e(Le.XSmall,Object.assign({"data-testid":"copyright-text"},{children:h||t(n,{children:["©"," ",Je.getCopyrightInfo(o)]})}))},"copyright")]}))]}))};export{$n as Footer};
//# sourceMappingURL=index.js.map
