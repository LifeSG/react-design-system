import t,{css as e}from"styled-components";import n,{jsxs as i,jsx as r}from"react/jsx-runtime";const a={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},o={D1:{fontFamily:a.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:a.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:a.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:a.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:a.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:a.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:a.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:a.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:a.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:a.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:a.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:a.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,g="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,f=g||h||Function("return this")(),p=f.Symbol,y=p,u=Object.prototype,s=u.hasOwnProperty,d=u.toString,S=y?y.toStringTag:void 0;var F=function(t){var e=s.call(t,S),n=t[S];try{t[S]=void 0;var i=!0}catch(t){}var r=d.call(t);return i&&(e?t[S]=n:delete t[S]),r},m=Object.prototype.toString;var v=F,H=function(t){return m.call(t)},D=p?p.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?v(t):H(t)};var $=B,_=function(t){return null!=t&&"object"==typeof t};var b=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==$(t)},z=c,C=b,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;var E=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(w.test(t)||!x.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},A=B,O=W;var T,j=function(t){if(!O(t))return!1;var e=A(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},k=f["__core-js_shared__"],V=(T=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var I=function(t){return!!V&&V in t},P=Function.prototype.toString;var R=j,L=I,N=W,X=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,Z=Object.prototype,U=M.toString,q=Z.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!N(t)||L(t))&&(R(t)?J:G).test(X(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},tt=Y(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},rt=tt,at=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var gt=tt;var ht=nt,ft=it,pt=ot,yt=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}st.prototype.clear=ht,st.prototype.delete=ft,st.prototype.get=pt,st.prototype.has=yt,st.prototype.set=ut;var dt=st;var St=function(){this.__data__=[],this.size=0};var Ft=function(t,e){return t===e||t!=t&&e!=e};var mt=function(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1},vt=mt,Ht=Array.prototype.splice;var Dt=mt;var Bt=mt;var $t=mt;var _t=St,bt=function(t){var e=this.__data__,n=vt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return Bt(this.__data__,t)>-1},xt=function(t,e){var n=this.__data__,i=$t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}wt.prototype.clear=_t,wt.prototype.delete=bt,wt.prototype.get=zt,wt.prototype.has=Ct,wt.prototype.set=xt;var Et=wt,Wt=Y(f,"Map"),At=dt,Ot=Et,Tt=Wt;var jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var kt=function(t,e){var n=t.__data__;return jt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=kt;var It=kt;var Pt=kt;var Rt=kt;var Lt=function(){this.size=0,this.__data__={hash:new At,map:new(Tt||Ot),string:new At}},Nt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return It(this,t).get(t)},Gt=function(t){return Pt(this,t).has(t)},Mt=function(t,e){var n=Rt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Zt.prototype.clear=Lt,Zt.prototype.delete=Nt,Zt.prototype.get=Xt,Zt.prototype.has=Gt,Zt.prototype.set=Mt;var Ut=Zt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=t.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,i,r){e.push(i?r.replace(Qt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ee=c,ne=b,ie=p?p.prototype:void 0,re=ie?ie.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return re?re.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ae;var le=c,ce=E,ge=Yt,he=function(t){return null==t?"":oe(t)};var fe=b;var pe=function(t,e){return le(t)?t:ce(t,e)?[t]:ge(he(t))},ye=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,i=(e=pe(e,t)).length;null!=t&&n<i;)t=t[ye(e[n++])];return n&&n==i?t:void 0};var se=function(t,e,n){var i=null==t?void 0:ue(t,e);return void 0===i?n:i};const de=(t,e,n)=>e?se(n,e)||se(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return se(t.collections,n)};var Fe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Fe||(Fe={}));const me={collections:{base:o},defaultValue:"base"},ve=t=>e=>{const n=e.theme,i=Se(me,n[Fe.textStyleScheme]);return n.options&&n.options.textStyle?de(i,t,n.options.textStyle):de(i,t)},He={D1:{fontFamily:ve("D1.fontFamily"),fontSize:ve("D1.fontSize"),fontWeight:ve("D1.fontWeight"),lineHeight:ve("D1.lineHeight"),letterSpacing:ve("D1.letterSpacing")},D2:{fontFamily:ve("D2.fontFamily"),fontSize:ve("D2.fontSize"),fontWeight:ve("D2.fontWeight"),lineHeight:ve("D2.lineHeight"),letterSpacing:ve("D2.letterSpacing")},D3:{fontFamily:ve("D3.fontFamily"),fontSize:ve("D3.fontSize"),fontWeight:ve("D3.fontWeight"),lineHeight:ve("D3.lineHeight"),letterSpacing:ve("D3.letterSpacing")},D4:{fontFamily:ve("D4.fontFamily"),fontSize:ve("D4.fontSize"),fontWeight:ve("D4.fontWeight"),lineHeight:ve("D4.lineHeight"),letterSpacing:ve("D4.letterSpacing")},DBody:{fontFamily:ve("DBody.fontFamily"),fontSize:ve("DBody.fontSize"),fontWeight:ve("DBody.fontWeight"),lineHeight:ve("DBody.lineHeight"),letterSpacing:ve("DBody.letterSpacing")},H1:{fontFamily:ve("H1.fontFamily"),fontSize:ve("H1.fontSize"),fontWeight:ve("H1.fontWeight"),lineHeight:ve("H1.lineHeight"),letterSpacing:ve("H1.letterSpacing")},H2:{fontFamily:ve("H2.fontFamily"),fontSize:ve("H2.fontSize"),fontWeight:ve("H2.fontWeight"),lineHeight:ve("H2.lineHeight"),letterSpacing:ve("H2.letterSpacing")},H3:{fontFamily:ve("H3.fontFamily"),fontSize:ve("H3.fontSize"),fontWeight:ve("H3.fontWeight"),lineHeight:ve("H3.lineHeight"),letterSpacing:ve("H3.letterSpacing")},H4:{fontFamily:ve("H4.fontFamily"),fontSize:ve("H4.fontSize"),fontWeight:ve("H4.fontWeight"),lineHeight:ve("H4.lineHeight"),letterSpacing:ve("H4.letterSpacing")},H5:{fontFamily:ve("H5.fontFamily"),fontSize:ve("H5.fontSize"),fontWeight:ve("H5.fontWeight"),lineHeight:ve("H5.lineHeight"),letterSpacing:ve("H5.letterSpacing")},H6:{fontFamily:ve("H6.fontFamily"),fontSize:ve("H6.fontSize"),fontWeight:ve("H6.fontWeight"),lineHeight:ve("H6.lineHeight"),letterSpacing:ve("H6.letterSpacing")},Body:{fontFamily:ve("Body.fontFamily"),fontSize:ve("Body.fontSize"),fontWeight:ve("Body.fontWeight"),lineHeight:ve("Body.lineHeight"),letterSpacing:ve("Body.letterSpacing")},BodySmall:{fontFamily:ve("BodySmall.fontFamily"),fontSize:ve("BodySmall.fontSize"),fontWeight:ve("BodySmall.fontWeight"),lineHeight:ve("BodySmall.lineHeight"),letterSpacing:ve("BodySmall.letterSpacing")},XSmall:{fontFamily:ve("XSmall.fontFamily"),fontSize:ve("XSmall.fontSize"),fontWeight:ve("XSmall.fontWeight"),lineHeight:ve("XSmall.lineHeight"),letterSpacing:ve("XSmall.letterSpacing")}},De=t=>{switch(t){case 700:case"bold":return a.Bold;case 600:case"semibold":return a.Semibold;case 300:case"light":return a.Light;case 400:case"regular":return a.Regular;default:return""}},Be=(t,n)=>i=>{const r=He[t].fontFamily(i),o=He[t].fontWeight(i);return Object.values(a).includes(r)?e`
                font-family: ${De(n)||De(o)||r};
                font-weight: normal !important;
            `:e`
            font-family: ${r};
            font-weight: ${($e(n)||o)??"normal"};
        `},$e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_e={getFontFamily:Be,getTextStyle:(t,n,i=!1)=>r=>{const a=He[t],o=a.fontSize(r);return e`
            ${Be(t,n)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${e`
                margin-bottom: ${o*(i?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,n=!1)=>n?e`
            display: block;
        `:t?e`
            display: inline;
        `:e`
            display: block;
        `};var be,ze={};Object.defineProperty(ze,"__esModule",{value:!0});var Ce=n;const xe=t=>Ce.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Ce.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});xe.displayName="ExternalIcon",be=ze.ExternalIcon=xe;const we={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ee=t=>e=>{const n=e.theme,i=Se(we,n[Fe.colorScheme]);return n.options&&n.options.color?de(i,t,n.options.color):de(i,t)},We=(Ee("Brand.1"),Ee("Brand.2"),Ee("Brand.3"),Ee("Brand.4"),Ee("Brand.5"),Ee("Brand.6"),Ee("Primary")),Ae=(Ee("PrimaryDark"),Ee("Secondary")),Oe=(Ee("Accent.Light.1"),Ee("Accent.Light.2"),Ee("Accent.Light.3"),Ee("Accent.Light.4"),Ee("Accent.Light.5"),Ee("Accent.Light.6"),Ee("Accent.Dark.1"),Ee("Accent.Dark.2"),Ee("Accent.Dark.3"),{1:Ee("Neutral.1"),2:Ee("Neutral.2"),3:Ee("Neutral.3"),4:Ee("Neutral.4"),5:Ee("Neutral.5"),6:Ee("Neutral.6"),7:Ee("Neutral.7"),8:Ee("Neutral.8")});Ee("Validation.Green.Text"),Ee("Validation.Green.Icon"),Ee("Validation.Green.Border"),Ee("Validation.Green.Background"),Ee("Validation.Orange.Text"),Ee("Validation.Orange.Icon"),Ee("Validation.Orange.Border"),Ee("Validation.Orange.Background"),Ee("Validation.Orange.Badge"),Ee("Validation.Red.Text"),Ee("Validation.Red.Icon"),Ee("Validation.Red.Border"),Ee("Validation.Red.Background");var Te;!function(n){n.D1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${_e.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${_e.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${_e.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${_e.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${_e.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${_e.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${_e.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${_e.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${_e.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${_e.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${_e.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${_e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Hyperlink={Default:t=>Ve({...t,textStyle:"Body"}),Small:t=>Ve({...t,textStyle:"BodySmall"})}}(Te||(Te={}));const je=t.a`
    ${t=>e`
            ${_e.getTextStyle(t.textStyle,t.weight)}
            color: ${We};
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
`,ke=t(be)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ve=({external:t=!1,children:e,...n})=>i(je,{...n,children:[e,t&&r(ke,{})]});var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));export{Ie as RedirectScope,Te as Text,He as TextStyle,_e as TextStyleHelper};
//# sourceMappingURL=index.js.map
