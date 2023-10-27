import t,{css as e}from"styled-components";import{jsxs as n,jsx as i}from"react/jsx-runtime";import{ExternalIcon as r}from"@lifesg/react-icons/external";const a={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:a.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:a.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:a.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:a.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:a.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:a.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:a.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:a.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:a.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:a.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,g="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=g||h||Function("return this")(),p=f.Symbol,u=p,y=Object.prototype,s=y.hasOwnProperty,d=y.toString,F=u?u.toStringTag:void 0;var S=function(t){var e=s.call(t,F),n=t[F];try{t[F]=void 0;var i=!0}catch(t){}var r=d.call(t);return i&&(e?t[F]=n:delete t[F]),r},m=Object.prototype.toString;var B=S,D=function(t){return m.call(t)},v=p?p.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?B(t):D(t)};var b=H,$=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==b(t)},x=c,E=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var w=function(t,e){if(x(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(A.test(t)||!z.test(t)||null!=e&&t in Object(e))};var O=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=H,W=O;var k,C=function(t){if(!W(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=f["__core-js_shared__"],L=(k=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var V=function(t){return!!L&&L in t},I=Function.prototype.toString;var R=C,P=V,N=O,X=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!N(t)||P(t))&&(R(t)?K:G).test(X(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=tt,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ht=nt,ft=it,pt=ot,ut=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},yt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}st.prototype.clear=ht,st.prototype.delete=ft,st.prototype.get=pt,st.prototype.has=ut,st.prototype.set=yt;var dt=st;var Ft=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var mt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},Bt=mt,Dt=Array.prototype.splice;var vt=mt;var Ht=mt;var bt=mt;var $t=Ft,_t=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},xt=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Ht(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,i=bt(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}At.prototype.clear=$t,At.prototype.delete=_t,At.prototype.get=xt,At.prototype.has=Et,At.prototype.set=zt;var wt=At,Ot=Z(f,"Map"),Tt=dt,Wt=wt,kt=Ot;var Ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Ct(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=jt;var Vt=jt;var It=jt;var Rt=jt;var Pt=function(){this.size=0,this.__data__={hash:new Tt,map:new(kt||Wt),string:new Tt}},Nt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Vt(this,t).get(t)},Gt=function(t){return It(this,t).has(t)},Mt=function(t,e){var n=Rt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Nt,Ut.prototype.get=Xt,Ut.prototype.has=Gt,Ut.prototype.set=Mt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=t.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,i,r){e.push(i?r.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ee=c,ne=_,ie=p?p.prototype:void 0,re=ie?ie.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ae;var le=c,ce=w,ge=Zt,he=function(t){return null==t?"":oe(t)};var fe=_;var pe=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(he(t))},ue=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ye=function(t,e){for(var n=0,i=(e=pe(e,t)).length;null!=t&&n<i;)t=t[ue(e[n++])];return n&&n==i?t:void 0};var se=function(t,e,n){var i=null==t?void 0:ye(t,e);return void 0===i?n:i};const de=(t,e,n)=>e?se(n,e)||se(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return se(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Se||(Se={}));const me={collections:{base:o},defaultValue:"base"},Be=t=>e=>{const n=e.theme,i=Fe(me,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?de(i,t,n.options.textStyle):de(i,t)},De={D1:{fontFamily:Be("D1.fontFamily"),fontSize:Be("D1.fontSize"),fontWeight:Be("D1.fontWeight"),lineHeight:Be("D1.lineHeight"),letterSpacing:Be("D1.letterSpacing")},D2:{fontFamily:Be("D2.fontFamily"),fontSize:Be("D2.fontSize"),fontWeight:Be("D2.fontWeight"),lineHeight:Be("D2.lineHeight"),letterSpacing:Be("D2.letterSpacing")},D3:{fontFamily:Be("D3.fontFamily"),fontSize:Be("D3.fontSize"),fontWeight:Be("D3.fontWeight"),lineHeight:Be("D3.lineHeight"),letterSpacing:Be("D3.letterSpacing")},D4:{fontFamily:Be("D4.fontFamily"),fontSize:Be("D4.fontSize"),fontWeight:Be("D4.fontWeight"),lineHeight:Be("D4.lineHeight"),letterSpacing:Be("D4.letterSpacing")},DBody:{fontFamily:Be("DBody.fontFamily"),fontSize:Be("DBody.fontSize"),fontWeight:Be("DBody.fontWeight"),lineHeight:Be("DBody.lineHeight"),letterSpacing:Be("DBody.letterSpacing")},H1:{fontFamily:Be("H1.fontFamily"),fontSize:Be("H1.fontSize"),fontWeight:Be("H1.fontWeight"),lineHeight:Be("H1.lineHeight"),letterSpacing:Be("H1.letterSpacing")},H2:{fontFamily:Be("H2.fontFamily"),fontSize:Be("H2.fontSize"),fontWeight:Be("H2.fontWeight"),lineHeight:Be("H2.lineHeight"),letterSpacing:Be("H2.letterSpacing")},H3:{fontFamily:Be("H3.fontFamily"),fontSize:Be("H3.fontSize"),fontWeight:Be("H3.fontWeight"),lineHeight:Be("H3.lineHeight"),letterSpacing:Be("H3.letterSpacing")},H4:{fontFamily:Be("H4.fontFamily"),fontSize:Be("H4.fontSize"),fontWeight:Be("H4.fontWeight"),lineHeight:Be("H4.lineHeight"),letterSpacing:Be("H4.letterSpacing")},H5:{fontFamily:Be("H5.fontFamily"),fontSize:Be("H5.fontSize"),fontWeight:Be("H5.fontWeight"),lineHeight:Be("H5.lineHeight"),letterSpacing:Be("H5.letterSpacing")},H6:{fontFamily:Be("H6.fontFamily"),fontSize:Be("H6.fontSize"),fontWeight:Be("H6.fontWeight"),lineHeight:Be("H6.lineHeight"),letterSpacing:Be("H6.letterSpacing")},Body:{fontFamily:Be("Body.fontFamily"),fontSize:Be("Body.fontSize"),fontWeight:Be("Body.fontWeight"),lineHeight:Be("Body.lineHeight"),letterSpacing:Be("Body.letterSpacing")},BodySmall:{fontFamily:Be("BodySmall.fontFamily"),fontSize:Be("BodySmall.fontSize"),fontWeight:Be("BodySmall.fontWeight"),lineHeight:Be("BodySmall.lineHeight"),letterSpacing:Be("BodySmall.letterSpacing")},XSmall:{fontFamily:Be("XSmall.fontFamily"),fontSize:Be("XSmall.fontSize"),fontWeight:Be("XSmall.fontWeight"),lineHeight:Be("XSmall.lineHeight"),letterSpacing:Be("XSmall.letterSpacing")}},ve=t=>{switch(t){case 700:case"bold":return a.Bold;case 600:case"semibold":return a.Semibold;case 300:case"light":return a.Light;case 400:case"regular":return a.Regular;default:return""}},He=(t,n)=>i=>{var r;const o=De[t].fontFamily(i),l=De[t].fontWeight(i);return Object.values(a).includes(o)?e`
                font-family: ${ve(n)||ve(l)||o};
                font-weight: normal !important;
            `:e`
            font-family: ${o};
            font-weight: ${null!==(r=be(n)||l)&&void 0!==r?r:"normal"};
        `},be=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$e=t=>{if(t>0)return e`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},_e={getFontFamily:He,getTextStyle:(t,n,i=!1)=>r=>{const a=De[t],o=a.fontSize(r);return e`
            ${He(t,n)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${e`
                margin-bottom: ${o*(i?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,n=!1,i=void 0)=>n?e`
            display: block;
            ${$e(i)}
        `:t?e`
            display: inline;
        `:e`
            display: block;
            ${$e(i)}
        `};const xe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ee=t=>e=>{const n=e.theme,i=Fe(xe,n[Se.colorScheme]);return n.options&&n.options.color?de(i,t,n.options.color):de(i,t)},ze=(Ee("Brand.1"),Ee("Brand.2"),Ee("Brand.3"),Ee("Brand.4"),Ee("Brand.5"),Ee("Brand.6"),Ee("Primary")),Ae=(Ee("PrimaryDark"),Ee("Secondary")),we=(Ee("Accent.Light.1"),Ee("Accent.Light.2"),Ee("Accent.Light.3"),Ee("Accent.Light.4"),Ee("Accent.Light.5"),Ee("Accent.Light.6"),Ee("Accent.Dark.1"),Ee("Accent.Dark.2"),Ee("Accent.Dark.3"),{1:Ee("Neutral.1"),2:Ee("Neutral.2"),3:Ee("Neutral.3"),4:Ee("Neutral.4"),5:Ee("Neutral.5"),6:Ee("Neutral.6"),7:Ee("Neutral.7"),8:Ee("Neutral.8")});Ee("Validation.Green.Text"),Ee("Validation.Green.Icon"),Ee("Validation.Green.Border"),Ee("Validation.Green.Background"),Ee("Validation.Orange.Text"),Ee("Validation.Orange.Icon"),Ee("Validation.Orange.Border"),Ee("Validation.Orange.Background"),Ee("Validation.Orange.Badge"),Ee("Validation.Red.Text"),Ee("Validation.Red.Icon"),Ee("Validation.Red.Border"),Ee("Validation.Red.Background"),Ee("Validation.Blue.Text"),Ee("Validation.Blue.Icon"),Ee("Validation.Blue.Border"),Ee("Validation.Blue.Background"),Ee("Shadow.Accent"),Ee("Shadow.Red"),Ee("Shadow.Elevation");var Oe;!function(n){n.D1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${_e.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${_e.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${_e.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${_e.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${_e.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${_e.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${_e.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${_e.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${_e.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Hyperlink={Default:t=>ke(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>ke(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Oe||(Oe={}));const Te=t.a`
    ${t=>e`
            ${_e.getTextStyle(t.textStyle,t.weight)}
            color: ${ze};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ae};

                svg {
                    color: ${Ae};
                }
            }
        `}
`,We=t(r)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ke=t=>{var{external:e=!1,children:r}=t,a=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}(t,["external","children"]);return n(Te,Object.assign({},a,{children:[r,e&&i(We,{})]}))};var Ce;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ce||(Ce={}));export{Ce as RedirectScope,Oe as Text,De as TextStyle,_e as TextStyleHelper};
//# sourceMappingURL=index.js.map
