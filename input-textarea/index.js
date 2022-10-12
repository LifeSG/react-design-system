import{jsx as t,jsxs as e}from"react/jsx-runtime";import n,{useState as r,useEffect as a}from"react";import i,{css as o}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,h="object"==typeof l&&l&&l.Object===Object&&l,g="object"==typeof self&&self&&self.Object===Object&&self,d=h||g||Function("return this")(),f=d.Symbol,u=f,p=Object.prototype,s=p.hasOwnProperty,y=p.toString,m=u?u.toStringTag:void 0;var F=function(t){var e=s.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch(t){}var a=y.call(t);return r&&(e?t[m]=n:delete t[m]),a},S=Object.prototype.toString;var v=F,B=function(t){return S.call(t)},H=f?f.toStringTag:void 0;var $=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?v(t):B(t)};var D=$,b=function(t){return null!=t&&"object"==typeof t};var w=function(t){return"symbol"==typeof t||b(t)&&"[object Symbol]"==D(t)},_=c,z=w,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var E=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(C.test(t)||!x.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},A=$,N=W;var k,O=function(t){if(!N(t))return!1;var e=A(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=d["__core-js_shared__"],L=(k=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var R=function(t){return!!L&&L in t},V=Function.prototype.toString;var T=O,P=R,I=W,X=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,M=Function.prototype,Z=Object.prototype,U=M.toString,q=Z.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!I(t)||P(t))&&(T(t)?J:G).test(X(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},tt=Y(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=tt,it=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var ht=tt;var gt=nt,dt=rt,ft=ot,ut=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}st.prototype.clear=gt,st.prototype.delete=dt,st.prototype.get=ft,st.prototype.has=ut,st.prototype.set=pt;var yt=st;var mt=function(){this.__data__=[],this.size=0};var Ft=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1},vt=St,Bt=Array.prototype.splice;var Ht=St;var $t=St;var Dt=St;var bt=mt,wt=function(t){var e=this.__data__,n=vt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},zt=function(t){return $t(this.__data__,t)>-1},xt=function(t,e){var n=this.__data__,r=Dt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=bt,Ct.prototype.delete=wt,Ct.prototype.get=_t,Ct.prototype.has=zt,Ct.prototype.set=xt;var Et=Ct,Wt=Y(d,"Map"),At=yt,Nt=Et,kt=Wt;var Ot=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Ot(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=jt;var Rt=jt;var Vt=jt;var Tt=jt;var Pt=function(){this.size=0,this.__data__={hash:new At,map:new(kt||Nt),string:new At}},It=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Rt(this,t).get(t)},Gt=function(t){return Vt(this,t).has(t)},Mt=function(t,e){var n=Tt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Zt.prototype.clear=Pt,Zt.prototype.delete=It,Zt.prototype.get=Xt,Zt.prototype.has=Gt,Zt.prototype.set=Mt;var Ut=Zt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,a){e.push(r?a.replace(Qt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},ee=c,ne=w,re=f?f.prototype:void 0,ae=re?re.toString:void 0;var ie=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},oe=ie;var le=c,ce=E,he=Yt,ge=function(t){return null==t?"":oe(t)};var de=w;var fe=function(t,e){return le(t)?t:ce(t,e)?[t]:he(ge(t))},ue=function(t){if("string"==typeof t||de(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[ue(e[n++])];return n&&n==r?t:void 0};var se=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?se(n,e)||se(t,e):n||t,me=(t,e)=>{const n=e||t.defaultValue;return se(t.collections,n)};var Fe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Fe||(Fe={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},ve=t=>e=>{const n=e.theme,r=me(Se,n[Fe.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},Be={Brand:{1:ve("Brand.1"),2:ve("Brand.2"),3:ve("Brand.3"),4:ve("Brand.4"),5:ve("Brand.5"),6:ve("Brand.6")},Primary:ve("Primary"),PrimaryDark:ve("PrimaryDark"),Secondary:ve("Secondary"),Accent:{Light:{1:ve("Accent.Light.1"),2:ve("Accent.Light.2"),3:ve("Accent.Light.3"),4:ve("Accent.Light.4"),5:ve("Accent.Light.5"),6:ve("Accent.Light.6")},Dark:{1:ve("Accent.Dark.1"),2:ve("Accent.Dark.2"),3:ve("Accent.Dark.3")}},Neutral:{1:ve("Neutral.1"),2:ve("Neutral.2"),3:ve("Neutral.3"),4:ve("Neutral.4"),5:ve("Neutral.5"),6:ve("Neutral.6"),7:ve("Neutral.7"),8:ve("Neutral.8")},Validation:{Green:{Text:ve("Validation.Green.Text"),Icon:ve("Validation.Green.Icon"),Border:ve("Validation.Green.Border"),Background:ve("Validation.Green.Background")},Orange:{Text:ve("Validation.Orange.Text"),Icon:ve("Validation.Orange.Icon"),Border:ve("Validation.Orange.Border"),Background:ve("Validation.Orange.Background"),Badge:ve("Validation.Orange.Badge")},Red:{Text:ve("Validation.Red.Text"),Icon:ve("Validation.Red.Icon"),Border:ve("Validation.Red.Border"),Background:ve("Validation.Red.Background")}}},He={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$e={collections:{base:{D1:{fontFamily:He.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:He.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:He.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:He.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:He.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:He.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:He.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:He.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:He.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:He.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:He.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:He.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=me($e,n[Fe.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},be={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},we=t=>{switch(t){case 700:case"bold":return He.Bold;case 600:case"semibold":return He.Semibold;case 300:case"light":return He.Light;case 400:case"regular":return He.Regular;default:return""}},_e=(t,e)=>n=>{const r=be[t].fontFamily(n),a=be[t].fontWeight(n);return Object.values(He).includes(r)?o`
                font-family: ${we(e)||we(a)||r};
                font-weight: normal !important;
            `:o`
            font-family: ${r};
            font-weight: ${(ze(e)||a)??"normal"};
        `},ze=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xe=(t,e,n=!1)=>r=>{const a=be[t],i=a.fontSize(r);return o`
            ${_e(t,e)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Ce=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `,Ee=i.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${Be.Neutral[8]};
    }
`,We=e=>t(Ee,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("g",{fill:"none",fillRule:"evenodd",children:t("g",{id:"path",fillRule:"nonzero",children:t("g",{children:t("g",{children:t("g",{children:t("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Ae=e=>t(Ee,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ne=e=>t(Ee,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),ke=e=>t(Ee,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...e,children:t("g",{id:"search",children:t("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Oe=i.span`
    font-size: 1rem;
`;var je;!function(t){t.D1=i.h1`
        ${t=>o`
                ${xe("D1",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D2=i.h1`
        ${t=>o`
                ${xe("D2",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D3=i.h1`
        ${t=>o`
                ${xe("D3",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.D4=i.h1`
        ${t=>o`
                ${xe("D4",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.DBody=i.h1`
        ${t=>o`
                ${xe("DBody",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H1=i.h1`
        ${t=>o`
                ${xe("H1",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H2=i.h2`
        ${t=>o`
                ${xe("H2",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H3=i.h3`
        ${t=>o`
                ${xe("H3",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H4=i.h4`
        ${t=>o`
                ${xe("H4",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H5=i.h5`
        ${t=>o`
                ${xe("H5",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.H6=i.h6`
        ${t=>o`
                ${xe("H6",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.Body=i.p`
        ${t=>o`
                ${xe("Body",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=i.p`
        ${t=>o`
                ${xe("BodySmall",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.XSmall=i.span`
        ${t=>o`
                ${xe("XSmall",t.weight,t.paragraph)}
                color: ${Be.Neutral[1]};
                ${Ce(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ve({...t,textStyle:"Body"}),Small:t=>Ve({...t,textStyle:"BodySmall"})}}(je||(je={}));const Le=i.a`
    ${t=>o`
            ${xe(t.textStyle,t.weight)}
            color: ${Be.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Be.Secondary};
            }
        `}
`,Re=i((({type:e,...n})=>{switch(e){case"arrow-right":return t(We,{...n});case"info":return t(Ae,{...n});case"search":return t(ke,{...n});case"play-alt":return t(Ne,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,a=n.className?`${r} ${n.className}`:r;return t(Oe,{...n,className:a})}}}))`
    margin-left: 0.4rem;
`,Ve=({external:n=!1,children:r,...a})=>e(Le,{...a,children:[r,n&&t(Re,{type:"external"})]});var Te;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Te||(Te={}));const Pe=i(je.H6)`
    text-align: right;

    ${t=>{if(t.disabled)return o`
                color: ${Be.Neutral[4](t)};
            `}}
`,Ie=({value:e,maxLength:n,disabled:i})=>{const[o,l]=r("");a((()=>{l(c(`${e||""}`))}),[e,n]);const c=t=>{const e=n-t.toString().length;return e<=1?`${e} character left`:`${e.toLocaleString()} characters left`};return t(Pe,{"data-testid":"counter-label",weight:"semibold",disabled:i,children:o})},Xe="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ge=i.div`
    display: flex;
    flex-direction: column;
`,Me=i.textarea`
    border: 1px solid ${Be.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Xe};

    ${xe("Body","regular")}
    color: ${Be.Neutral[1]};
    background: ${Be.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Be.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Be.Neutral[34]};
    }

    ${t=>t.disabled?o`
                background: ${Be.Neutral[6](t)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Be.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.error?o`
                border: 1px solid ${Be.Validation.Red.Border(t)};

                :focus,
                :active {
                    border: 1px solid ${Be.Validation.Red.Border(t)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`;n.forwardRef((({value:e,disabled:n,error:r,rows:a=5,...i},o)=>t(Me,{ref:o,disabled:n,value:e,error:r,rows:a,...i})));const Ze=n.forwardRef((({value:n,disabled:i,rows:o=5,onChange:l,...c},h)=>{const[g,d]=r(n);a((()=>{d(n)}),[n]);return e(Ge,{children:[t(Me,{ref:h,disabled:i,value:g,rows:o||5,onChange:t=>{const e=t.target.value;c.maxLength&&e.length>c.maxLength||(d(e),t.target.value=e,l&&l(t))},...c}),c.maxLength&&t(Ie,{disabled:i,value:g,maxLength:c.maxLength})]})}));export{Ze as Textarea};
//# sourceMappingURL=index.js.map
