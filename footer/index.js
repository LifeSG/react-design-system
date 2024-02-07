import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const s={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:s.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:s.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:s.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:s.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:s.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:s.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:s.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:s.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:s.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:s.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:s.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,f="object"==typeof self&&self&&self.Object===Object&&self,p=g||f||Function("return this")(),m=p.Symbol,y=m,F=Object.prototype,$=F.hasOwnProperty,S=F.toString,v=y?y.toStringTag:void 0;var b=function(t){var e=$.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch(t){}var i=S.call(t);return r&&(e?t[v]=n:delete t[v]),i},D=Object.prototype.toString;var B=b,w=function(t){return D.call(t)},H=m?m.toStringTag:void 0;var x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?B(t):w(t)};var O=x,_=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==O(t)},k=u,A=E,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/;var z=function(t,e){if(k(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!A(t))||(j.test(t)||!C.test(t)||null!=e&&t in Object(e))};var L=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},M=x,W=L;var T,I=function(t){if(!W(t))return!1;var e=M(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=p["__core-js_shared__"],R=(T=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var P=function(t){return!!R&&R in t},N=Function.prototype.toString;var Y=I,G=P,U=L,X=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},J=/^\[object .+?Constructor\]$/,Z=Function.prototype,q=Object.prototype,Q=Z.toString,K=q.hasOwnProperty,tt=RegExp("^"+Q.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var et=function(t){return!(!U(t)||G(t))&&(Y(t)?tt:J).test(X(t))},nt=function(t,e){return null==t?void 0:t[e]};var rt=function(t,e){var n=nt(t,e);return et(n)?n:void 0},it=rt(Object,"create"),at=it;var ot=function(){this.__data__=at?at(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},st=it,ct=Object.prototype.hasOwnProperty;var dt=function(t){var e=this.__data__;if(st){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ct.call(e,t)?e[t]:void 0},ht=it,ut=Object.prototype.hasOwnProperty;var gt=it;var ft=ot,pt=lt,mt=dt,yt=function(t){var e=this.__data__;return ht?void 0!==e[t]:ut.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=ft,$t.prototype.delete=pt,$t.prototype.get=mt,$t.prototype.has=yt,$t.prototype.set=Ft;var St=$t;var vt=function(){this.__data__=[],this.size=0};var bt=function(t,e){return t===e||t!=t&&e!=e};var Dt=function(t,e){for(var n=t.length;n--;)if(bt(t[n][0],e))return n;return-1},Bt=Dt,wt=Array.prototype.splice;var Ht=Dt;var xt=Dt;var Ot=Dt;var _t=vt,Et=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():wt.call(e,n,1),--this.size,!0)},kt=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},At=function(t){return xt(this.__data__,t)>-1},Ct=function(t,e){var n=this.__data__,r=Ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}jt.prototype.clear=_t,jt.prototype.delete=Et,jt.prototype.get=kt,jt.prototype.has=At,jt.prototype.set=Ct;var zt=jt,Lt=rt(p,"Map"),Mt=St,Wt=zt,Tt=Lt;var It=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return It(e)?n["string"==typeof e?"string":"hash"]:n.map},Rt=Vt;var Pt=Vt;var Nt=Vt;var Yt=Vt;var Gt=function(){this.size=0,this.__data__={hash:new Mt,map:new(Tt||Wt),string:new Mt}},Ut=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Pt(this,t).get(t)},Jt=function(t){return Nt(this,t).has(t)},Zt=function(t,e){var n=Yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Gt,qt.prototype.delete=Ut,qt.prototype.get=Xt,qt.prototype.has=Jt,qt.prototype.set=Zt;var Qt=qt;function Kt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Kt.Cache||Qt),n}Kt.Cache=Qt;var te=Kt;var ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/\\(\\)?/g,re=function(t){var e=te(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ee,(function(t,n,r,i){e.push(r?i.replace(ne,"$1"):n||t)})),e}));var ie=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ae=u,oe=E,le=m?m.prototype:void 0,se=le?le.toString:void 0;var ce=function t(e){if("string"==typeof e)return e;if(ae(e))return ie(e,t)+"";if(oe(e))return se?se.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},de=ce;var he=u,ue=z,ge=re,fe=function(t){return null==t?"":de(t)};var pe=E;var me=function(t,e){return he(t)?t:ue(t,e)?[t]:ge(fe(t))},ye=function(t){if("string"==typeof t||pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,r=(e=me(e,t)).length;null!=t&&n<r;)t=t[ye(e[n++])];return n&&n==r?t:void 0};var $e=h((function(t,e,n){var r=null==t?void 0:Fe(t,e);return void 0===r?n:r}));const Se=(t,e,n)=>e?$e(n,e)||$e(t,e):n||t,ve=(t,e)=>{const n=e||t.defaultValue;return $e(t.collections,n)};var be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(be||(be={}));const De={collections:{base:c},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=ve(De,n[be.textStyleScheme]);return n.options&&n.options.textStyle?Se(r,t,n.options.textStyle):Se(r,t)},we={D1:{fontFamily:Be("D1.fontFamily"),fontSize:Be("D1.fontSize"),fontWeight:Be("D1.fontWeight"),lineHeight:Be("D1.lineHeight"),letterSpacing:Be("D1.letterSpacing")},D2:{fontFamily:Be("D2.fontFamily"),fontSize:Be("D2.fontSize"),fontWeight:Be("D2.fontWeight"),lineHeight:Be("D2.lineHeight"),letterSpacing:Be("D2.letterSpacing")},D3:{fontFamily:Be("D3.fontFamily"),fontSize:Be("D3.fontSize"),fontWeight:Be("D3.fontWeight"),lineHeight:Be("D3.lineHeight"),letterSpacing:Be("D3.letterSpacing")},D4:{fontFamily:Be("D4.fontFamily"),fontSize:Be("D4.fontSize"),fontWeight:Be("D4.fontWeight"),lineHeight:Be("D4.lineHeight"),letterSpacing:Be("D4.letterSpacing")},DBody:{fontFamily:Be("DBody.fontFamily"),fontSize:Be("DBody.fontSize"),fontWeight:Be("DBody.fontWeight"),lineHeight:Be("DBody.lineHeight"),letterSpacing:Be("DBody.letterSpacing")},H1:{fontFamily:Be("H1.fontFamily"),fontSize:Be("H1.fontSize"),fontWeight:Be("H1.fontWeight"),lineHeight:Be("H1.lineHeight"),letterSpacing:Be("H1.letterSpacing")},H2:{fontFamily:Be("H2.fontFamily"),fontSize:Be("H2.fontSize"),fontWeight:Be("H2.fontWeight"),lineHeight:Be("H2.lineHeight"),letterSpacing:Be("H2.letterSpacing")},H3:{fontFamily:Be("H3.fontFamily"),fontSize:Be("H3.fontSize"),fontWeight:Be("H3.fontWeight"),lineHeight:Be("H3.lineHeight"),letterSpacing:Be("H3.letterSpacing")},H4:{fontFamily:Be("H4.fontFamily"),fontSize:Be("H4.fontSize"),fontWeight:Be("H4.fontWeight"),lineHeight:Be("H4.lineHeight"),letterSpacing:Be("H4.letterSpacing")},H5:{fontFamily:Be("H5.fontFamily"),fontSize:Be("H5.fontSize"),fontWeight:Be("H5.fontWeight"),lineHeight:Be("H5.lineHeight"),letterSpacing:Be("H5.letterSpacing")},H6:{fontFamily:Be("H6.fontFamily"),fontSize:Be("H6.fontSize"),fontWeight:Be("H6.fontWeight"),lineHeight:Be("H6.lineHeight"),letterSpacing:Be("H6.letterSpacing")},Body:{fontFamily:Be("Body.fontFamily"),fontSize:Be("Body.fontSize"),fontWeight:Be("Body.fontWeight"),lineHeight:Be("Body.lineHeight"),letterSpacing:Be("Body.letterSpacing")},BodySmall:{fontFamily:Be("BodySmall.fontFamily"),fontSize:Be("BodySmall.fontSize"),fontWeight:Be("BodySmall.fontWeight"),lineHeight:Be("BodySmall.lineHeight"),letterSpacing:Be("BodySmall.letterSpacing")},XSmall:{fontFamily:Be("XSmall.fontFamily"),fontSize:Be("XSmall.fontSize"),fontWeight:Be("XSmall.fontWeight"),lineHeight:Be("XSmall.lineHeight"),letterSpacing:Be("XSmall.letterSpacing")}},He=t=>{switch(t){case 700:case"bold":return s.Bold;case 600:case"semibold":return s.Semibold;case 300:case"light":return s.Light;case 400:case"regular":return s.Regular;default:return""}},xe=(t,e)=>n=>{var r;const a=we[t].fontFamily(n),o=we[t].fontWeight(n);return Object.values(s).includes(a)?i`
                font-family: ${He(e)||He(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=Oe(e)||o)&&void 0!==r?r:"normal"};
        `},Oe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_e=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Ee=(t,e,n=!1)=>r=>{const a=we[t],o=a.fontSize(r);return i`
            ${xe(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ke=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${_e(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${_e(n)}
        `,Ae={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=ve(Ae,n[be.colorScheme]);return n.options&&n.options.color?Se(r,t,n.options.color):Se(r,t)},je=(Ce("Brand.1"),Ce("Brand.2"),Ce("Brand.3"),Ce("Brand.4"),Ce("Brand.5"),Ce("Brand.6"),Ce("Primary")),ze=(Ce("PrimaryDark"),Ce("Secondary")),Le=(Ce("Accent.Light.1"),Ce("Accent.Light.2"),Ce("Accent.Light.3"),Ce("Accent.Light.4"),Ce("Accent.Light.5"),Ce("Accent.Light.6"),Ce("Accent.Dark.1"),Ce("Accent.Dark.2"),Ce("Accent.Dark.3"),{1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")});Ce("Validation.Green.Text"),Ce("Validation.Green.Icon"),Ce("Validation.Green.Border"),Ce("Validation.Green.Background"),Ce("Validation.Orange.Text"),Ce("Validation.Orange.Icon"),Ce("Validation.Orange.Border"),Ce("Validation.Orange.Background"),Ce("Validation.Orange.Badge"),Ce("Validation.Red.Text"),Ce("Validation.Red.Icon"),Ce("Validation.Red.Border"),Ce("Validation.Red.Background"),Ce("Validation.Blue.Text"),Ce("Validation.Blue.Icon"),Ce("Validation.Blue.Border"),Ce("Validation.Blue.Background"),Ce("Shadow.Accent"),Ce("Shadow.Red"),Ce("Shadow.Elevation");var Me;!function(t){t.D1=r.h1`
        ${t=>i`
                ${Ee("D1",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${Ee("D2",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${Ee("D3",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${Ee("D4",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${Ee("DBody",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${Ee("H1",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${Ee("H2",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${Ee("H3",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${Ee("H4",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${Ee("H5",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${Ee("H6",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${Ee("Body",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${Ee("BodySmall",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${Ee("XSmall",t.weight,t.paragraph)}
                color: ${Le[1]};
                ${ke(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ie(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ie(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Me||(Me={}));const We=r.a`
    ${t=>i`
            ${Ee(t.textStyle,t.weight)}
            color: ${je};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ze};

                svg {
                    color: ${ze};
                }
            }
        `}
`,Te=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ie=n=>{var{external:r=!1,children:i}=n,a=l(n,["external","children"]);return t(We,Object.assign({},a,{children:[i,r&&e(Te,{})]}))};var Ve;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ve||(Ve={}));const Re={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pe=t=>Object.keys(Re).reduce(((e,n)=>{const r=Re[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ne=Pe("max-width"),Ye=(Pe("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ne.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ge=r(Me.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Ue=r.div`
    display: flex;
    align-items: flex-start;
`,Xe=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ne.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Je=()=>t(Ye,Object.assign({"data-testid":"download-app-section"},{children:[e(Ge,Object.assign({weight:"semibold"},{children:"Download the app"})),t(Ue,{children:[e(Xe,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(Xe,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var Ze,qe={exports:{}},Qe=h(qe.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",h="year",u="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:s,d:l,D:u,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var v=function(t){return t instanceof w},b=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&($=i),i||!r&&$},D=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=F;B.l=b,B.i=v,B.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,d=B.p(t),g=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},f=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(d){case h:return r?g(1,0):g(31,11);case c:return r?g(1,m):g(0,m+1);case s:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return g(r?y-S:y+(6-S),m);case l:case u:return f(F+"Hours",0);case o:return f(F+"Minutes",1);case a:return f(F+"Seconds",2);case i:return f(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=B.p(t),d="set"+(this.$u?"UTC":""),g=(n={},n[l]=d+"Date",n[u]=d+"Date",n[c]=d+"Month",n[h]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],f=s===l?this.$D+(e-this.$W):e;if(s===c||s===h){var p=this.clone().set(u,1);p.$d[g](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,d){var u,g=this;r=Number(r);var f=B.p(d),p=function(t){var e=D(g);return B.w(e.date(e.date()+Math.round(t*r)),g)};if(f===c)return this.set(c,this.$M+r);if(f===h)return this.set(h,this.$y+r);if(f===l)return p(1);if(f===s)return p(7);var m=(u={},u[a]=e,u[o]=n,u[i]=t,u)[f]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return B.s(a%12||12,t,"0")},u=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:B.s(a,2,"0"),h:h(1),hh:h(2),a:u(a,o,!0),A:u(a,o,!1),m:String(o),mm:B.s(o,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||f[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,u,g){var f,p=B.p(u),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,F=this-m,$=B.m(this,m);return $=(f={},f[h]=$/12,f[c]=$,f[d]=$/3,f[s]=(F-y)/6048e5,f[l]=(F-y)/864e5,f[o]=F/n,f[a]=F/e,f[i]=F/t,f)[p]||F,g?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return D.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",h],["$D",u]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,w,D),t.$i=!0),D},D.locale=b,D.isDayjs=v,D.unix=function(t){return D(1e3*t)},D.en=S[$],D.Ls=S,D.p={},D}());!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${Qe(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:Object.assign(Object.assign({href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign({href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign({href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0},t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})})}(Ze||(Ze={}));const Ke=r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:l}=t;return i`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Ne.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${Ne.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${l||1};
            }
        `}}
`,tn=o.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=l(t,["mobileCols","tabletCols","desktopCols"]);return e(Ke,Object.assign({ref:n},(()=>{const t=i||r,e=r,n=en(a||i||r),o=en(t),l=en(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),en=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},nn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=l(t,["children","data-testid","type","stretch"]);return e(rn,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),rn=r.div`
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

                ${Ne.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ne.tablet} {
        max-width: 720px;
    }
    ${Ne.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ne.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ne.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,an=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=l(t,["children","data-testid","stretch"]);return e(on,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),on=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i`
                ${Ne.tablet} {
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
`,ln=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,c=l(t,["children","data-testid","className","type","stretch"]);return e(an,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},c,{children:e(nn,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),sn={Section:an,Container:nn,Content:ln,ColDiv:tn},cn=r.footer`
    background: ${Le[7]};
`,dn=r(Me.Hyperlink.Small)`
    color: ${Le[1]};
`,hn=r(sn.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Le[5]};

    ${Ne.tablet} {
        padding: 2rem 0;
    }
`,un=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Ne.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ne.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,gn=r.ul`
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

    ${Ne.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ne.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,fn=r.div`
    grid-column: 9 / span 4;

    ${Ne.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ne.mobileL} {
        grid-column: 1 / span 4;
    }
`,pn=r.div`
    display: none;

    ${Ne.tablet} {
        display: block;
        height: 1px;
        background: ${Le[6]};
    }
`,mn=r(sn.Content)`
    padding: 1.375rem 0;

    ${Ne.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,yn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Ne.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ne.mobileL} {
        grid-column: 1 / span 4;
    }
`,Fn=r(yn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ne.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ne.mobileL} {
        grid-column: 1 / span 4;
    }
`,$n=r(Me.Hyperlink.Small)`
    ${Ee("XSmall","regular")}
    color: ${Le[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${Le[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${Le[3]};
        svg {
            color: ${Le[3]};
        }
    }

    ${Ne.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ne.tablet} {
        margin-bottom: 0.625rem;
    }
`,Sn=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:s,showDownloadAddon:c,logoSrc:d,copyrightInfo:h,onFooterLinkClick:u,layout:g="default"}=r,f=l(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===g,m=t=>t.map(((t,n)=>{const r=l(t,["data-options"]);return e("li",{children:e(dn,Object.assign({},r,{onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):u&&(t.preventDefault(),u(e))})(e,t)}))},n)}));return t(cn,Object.assign({},f,{children:[(()=>{let r=null;return i||((a||c)&&(r=t(n,{children:[e(un,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:d||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})})),(null==a?void 0:a[0])&&e(gn,Object.assign({"data-testid":"link-col-1"},{children:m(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(gn,Object.assign({"data-testid":"link-col-2"},{children:m(a[1])}),"link-col-2"),c&&e(fn,{children:e(Je,{})})]})),r?e(hn,Object.assign({type:"grid",stretch:p},{children:r})):null)})(),e(pn,{}),t(mn,Object.assign({type:"grid",stretch:p},{children:[e(yn,{children:(()=>{const t=Ze.getDisclaimerLinks(s);return Object.keys(t).map((n=>e($n,Object.assign({},t[n]),n)))})()},"disclaimer"),e(Fn,{children:e(Me.XSmall,Object.assign({"data-testid":"copyright-text"},{children:h||t(n,{children:["©"," ",Ze.getCopyrightInfo(o)]})}))},"copyright")]}))]}))};export{Sn as Footer};
//# sourceMappingURL=index.js.map
