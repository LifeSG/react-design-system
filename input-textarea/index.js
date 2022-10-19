import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{useState as a,useEffect as i}from"react";import o,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,u=g||d||Function("return this")(),f=u.Symbol,s=f,p=Object.prototype,y=p.hasOwnProperty,m=p.toString,F=s?s.toStringTag:void 0;var S=function(t){var e=y.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var a=m.call(t);return r&&(e?t[F]=n:delete t[F]),a},v=Object.prototype.toString;var B=S,H=function(t){return v.call(t)},$=f?f.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":$&&$ in Object(t)?B(t):H(t)};var D=b,w=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==D(t)},C=h,x=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var W=function(t,e){if(C(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!x(t))||(E.test(t)||!z.test(t)||null!=e&&t in Object(e))};var A=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},L=b,N=A;var k,O=function(t){if(!N(t))return!1;var e=L(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=u["__core-js_shared__"],R=(k=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var V=function(t){return!!R&&R in t},T=Function.prototype.toString;var P=O,I=V,X=A,G=function(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,Z=Function.prototype,U=Object.prototype,q=Z.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!X(t)||I(t))&&(P(t)?K:M).test(G(t))},Y=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var rt=function(){this.__data__=nt?nt(null):{},this.size=0};var at=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=et,ot=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},ct=et,ht=Object.prototype.hasOwnProperty;var gt=et;var dt=rt,ut=at,ft=lt,st=function(t){var e=this.__data__;return ct?void 0!==e[t]:ht.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=dt,yt.prototype.delete=ut,yt.prototype.get=ft,yt.prototype.has=st,yt.prototype.set=pt;var mt=yt;var Ft=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},Bt=vt,Ht=Array.prototype.splice;var $t=vt;var bt=vt;var Dt=vt;var wt=Ft,_t=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},Ct=function(t){var e=this.__data__,n=$t(e,t);return n<0?void 0:e[n][1]},xt=function(t){return bt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Dt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Et.prototype.clear=wt,Et.prototype.delete=_t,Et.prototype.get=Ct,Et.prototype.has=xt,Et.prototype.set=zt;var Wt=Et,At=tt(u,"Map"),Lt=mt,Nt=Wt,kt=At;var Ot=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Ot(e)?n["string"==typeof e?"string":"hash"]:n.map},Rt=jt;var Vt=jt;var Tt=jt;var Pt=jt;var It=function(){this.size=0,this.__data__={hash:new Lt,map:new(kt||Nt),string:new Lt}},Xt=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return Vt(this,t).get(t)},Mt=function(t){return Tt(this,t).has(t)},Zt=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=It,Ut.prototype.delete=Xt,Ut.prototype.get=Gt,Ut.prototype.has=Mt,Ut.prototype.set=Zt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,te=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,a){e.push(r?a.replace(Yt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},ne=h,re=_,ae=f?f.prototype:void 0,ie=ae?ae.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(re(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=oe;var ce=h,he=W,ge=te,de=function(t){return null==t?"":le(t)};var ue=_;var fe=function(t,e){return ce(t)?t:he(t,e)?[t]:ge(de(t))},se=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[se(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const me=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Se||(Se={}));const ve={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=Fe(ve,n[Se.colorScheme]);return n.options&&n.options.color?me(r,t,n.options.color):me(r,t)},He={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")}}},$e={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},be={collections:{base:{D1:{fontFamily:$e.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$e.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$e.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$e.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$e.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$e.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$e.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$e.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$e.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$e.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$e.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$e.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$e.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$e.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=Fe(be,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?me(r,t,n.options.textStyle):me(r,t)},we={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},_e=t=>{switch(t){case 700:case"bold":return $e.Bold;case 600:case"semibold":return $e.Semibold;case 300:case"light":return $e.Light;case 400:case"regular":return $e.Regular;default:return""}},Ce=(t,e)=>n=>{const r=we[t].fontFamily(n),a=we[t].fontWeight(n);return Object.values($e).includes(r)?l`
                font-family: ${_e(e)||_e(a)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(xe(e)||a)??"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ze=(t,e,n=!1)=>r=>{const a=we[t],i=a.fontSize(r);return l`
            ${Ce(t,e)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Ee=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `,We=o.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${He.Primary};
`,Ae=e=>t(We,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Le=e=>t(We,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ne=e=>t(We,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),ke=e=>t(We,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Oe=e=>t(We,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),je=o.span`
    font-size: 1rem;
`;var Re;!function(t){t.D1=o.h1`
        ${t=>l`
                ${ze("D1",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>l`
                ${ze("D2",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>l`
                ${ze("D3",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>l`
                ${ze("D4",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>l`
                ${ze("DBody",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>l`
                ${ze("H1",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>l`
                ${ze("H2",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>l`
                ${ze("H3",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>l`
                ${ze("H4",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>l`
                ${ze("H5",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>l`
                ${ze("H6",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>l`
                ${ze("Body",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>l`
                ${ze("BodySmall",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>l`
                ${ze("XSmall",t.weight,t.paragraph)}
                color: ${He.Neutral[1]};
                ${Ee(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Pe({...t,textStyle:"Body"}),Small:t=>Pe({...t,textStyle:"BodySmall"})}}(Re||(Re={}));const Ve=o.a`
    ${t=>l`
            ${ze(t.textStyle,t.weight)}
            color: ${He.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${He.Secondary};
            }
        `}
`,Te=o((({type:e,...n})=>{switch(e){case"arrow-right":return t(Ae,{...n});case"info":return t(Ne,{...n});case"cross":return t(Le,{...n});case"play":return t(ke,{...n});case"search":return t(Oe,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,a=n.className?`${r} ${n.className}`:r;return t(je,{...n,className:a})}}}))`
    margin-left: 0.4rem;
`,Pe=({external:n=!1,children:r,...a})=>e(Ve,{...a,children:[r,n&&t(Te,{type:"external"})]});var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Xe=o(Re.H6)`
    text-align: right;

    ${t=>{if(t.disabled)return l`
                color: ${He.Neutral[4](t)};
            `}}
`,Ge=({value:e,maxLength:o,disabled:l,renderCustomCounter:c})=>{const[h,g]=a("");i((()=>{g(d(`${e||""}`))}),[e,o]);const d=t=>{if(c)return c(o,t.toString().length);{const e=o-t.toString().length;return e<=1?`${e} character left`:`${e.toLocaleString()} characters left`}};return t(n,{children:r.isValidElement(h)?h:t(Xe,{"data-testid":"counter-label",weight:"semibold",disabled:l,children:h})})},Me="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ze=o.div`
    display: flex;
    flex-direction: column;
`,Ue=o.textarea`
    border: 1px solid ${He.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Me};

    ${ze("Body","regular")}
    color: ${He.Neutral[1]};
    background: ${He.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${He.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${He.Neutral[4]};
    }

    ${t=>t.readOnly?l`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:t.disabled?l`
                background: ${He.Neutral[6](t)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${He.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.error?l`
                border: 1px solid ${He.Validation.Red.Border(t)};

                :focus,
                :active {
                    border: 1px solid ${He.Validation.Red.Border(t)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`;r.forwardRef((({value:e,disabled:n,error:r,rows:a=5,...i},o)=>t(Ue,{ref:o,disabled:n,value:e,error:r,rows:a,...i})));const qe=r.forwardRef((({value:n,disabled:r,rows:o=5,onChange:l,...c},h)=>{const[g,d]=a(n);i((()=>{d(n)}),[n]);return e(Ze,{children:[t(Ue,{ref:h,disabled:r,value:g,rows:o||5,onChange:t=>{const e=t.target.value;c.maxLength&&e.length>c.maxLength||(d(e),t.target.value=e,l&&l(t))},...c}),c.maxLength&&t(Ge,{disabled:r,value:g,maxLength:c.maxLength,renderCustomCounter:c.renderCustomCounter})]})}));export{qe as Textarea};
//# sourceMappingURL=index.js.map
