import{jsx as e,jsxs as t}from"react/jsx-runtime";import n,{useState as r,useEffect as o}from"react";import i,{css as a}from"styled-components";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,f="object"==typeof s&&s&&s.Object===Object&&s,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),m=p.Symbol,h=m,g=Object.prototype,y=g.hasOwnProperty,v=g.toString,b=h?h.toStringTag:void 0;var S=function(e){var t=y.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var o=v.call(e);return r&&(t?e[b]=n:delete e[b]),o},w=Object.prototype.toString;var F=S,D=function(e){return w.call(e)},_=m?m.toStringTag:void 0;var x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_&&_ in Object(e)?F(e):D(e)};var E=x,T=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==E(e)},H=u,C=A,B=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var N=function(e,t){if(H(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(k.test(e)||!B.test(e)||null!=t&&e in Object(t))};var O=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$=x,L=O;var R,z=function(e){if(!L(e))return!1;var t=$(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},M=p["__core-js_shared__"],I=(R=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var j=function(e){return!!I&&I in e},W=Function.prototype.toString;var U=function(e){if(null!=e){try{return W.call(e)}catch(e){}try{return e+""}catch(e){}}return""},P=z,G=j,V=O,X=U,q=/^\[object .+?Constructor\]$/,Y=Function.prototype,Z=Object.prototype,K=Y.toString,J=Z.hasOwnProperty,Q=RegExp("^"+K.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!V(e)||G(e))&&(P(e)?Q:q).test(X(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),oe=re;var ie=function(){this.__data__=oe?oe(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=re,ce=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ce.call(t,e)?t[e]:void 0},ue=re,fe=Object.prototype.hasOwnProperty;var de=re;var pe=ie,me=ae,he=se,ge=function(e){var t=this.__data__;return ue?void 0!==t[e]:fe.call(t,e)},ye=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=pe,ve.prototype.delete=me,ve.prototype.get=he,ve.prototype.has=ge,ve.prototype.set=ye;var be=ve;var Se=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var Fe=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},De=Fe,_e=Array.prototype.splice;var xe=Fe;var Ee=Fe;var Te=Fe;var Ae=Se,He=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():_e.call(t,n,1),--this.size,!0)},Ce=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},Be=function(e){return Ee(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=Te(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Ae,Ne.prototype.delete=He,Ne.prototype.get=Ce,Ne.prototype.has=Be,Ne.prototype.set=ke;var Oe=Ne,$e=ne(p,"Map"),Le=be,Re=Oe,ze=$e;var Me=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ie=function(e,t){var n=e.__data__;return Me(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ie;var We=Ie;var Ue=Ie;var Pe=Ie;var Ge=function(){this.size=0,this.__data__={hash:new Le,map:new(ze||Re),string:new Le}},Ve=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return We(this,e).get(e)},qe=function(e){return Ue(this,e).has(e)},Ye=function(e,t){var n=Pe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Ge,Ze.prototype.delete=Ve,Ze.prototype.get=Xe,Ze.prototype.has=qe,Ze.prototype.set=Ye;var Ke=Ze;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Je.Cache||Ke),n}Je.Cache=Ke;var Qe=Je;var et=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=et((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,o){t.push(r?o.replace(nt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},it=u,at=A,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(at(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ut=st;var ft=u,dt=N,pt=rt,mt=function(e){return null==e?"":ut(e)};var ht=A;var gt=function(e,t){return ft(e)?e:dt(e,t)?[e]:pt(mt(e))},yt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=gt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var bt=function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r};const St=(e,t,n)=>t?bt(n,t)||bt(e,t):n||e,wt=(e,t)=>{const n=t||e.defaultValue;return bt(e.collections,n)};var Ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Ft||(Ft={}));const Dt={collections:{base:c},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=wt(Dt,n[Ft.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},xt={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},Tt=(e,t)=>n=>{const r=xt[e].fontFamily(n),o=xt[e].fontWeight(n);return Object.values(l).includes(r)?a`
                font-family: ${Et(t)||Et(o)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(At(t)||o)??"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ht=Tt,Ct=(e,t,n=!1)=>r=>{const o=xt[e],i=o.fontSize(r);return a`
            ${Tt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Bt=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `,kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=wt(kt,n[Ft.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},Ot=(Nt("Brand.1"),Nt("Brand.2"),Nt("Brand.3"),Nt("Brand.4"),Nt("Brand.5"),Nt("Brand.6"),Nt("Primary")),$t=(Nt("PrimaryDark"),Nt("Secondary")),Lt=(Nt("Accent.Light.1"),Nt("Accent.Light.2"),Nt("Accent.Light.3"),Nt("Accent.Light.4"),Nt("Accent.Light.5"),Nt("Accent.Light.6"),Nt("Accent.Dark.1"),Nt("Accent.Dark.2"),Nt("Accent.Dark.3"),{1:Nt("Neutral.1"),2:Nt("Neutral.2"),3:Nt("Neutral.3"),4:Nt("Neutral.4"),5:Nt("Neutral.5"),6:Nt("Neutral.6"),7:Nt("Neutral.7"),8:Nt("Neutral.8")}),Rt={Green:{Text:Nt("Validation.Green.Text"),Icon:Nt("Validation.Green.Icon"),Border:Nt("Validation.Green.Border"),Background:Nt("Validation.Green.Background")},Orange:{Text:Nt("Validation.Orange.Text"),Icon:Nt("Validation.Orange.Icon"),Border:Nt("Validation.Orange.Border"),Background:Nt("Validation.Orange.Background"),Badge:Nt("Validation.Orange.Badge")},Red:{Text:Nt("Validation.Red.Text"),Icon:Nt("Validation.Red.Icon"),Border:Nt("Validation.Red.Border"),Background:Nt("Validation.Red.Background")}},zt=i.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Ot};
`,Mt=t=>e(zt,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),It=t=>e(zt,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),jt=t=>e(zt,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Wt=t=>e(zt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Ut=t=>e(zt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Pt=({type:t,...n})=>{switch(t){case"arrow-right":return e(Mt,{...n});case"info":return e(jt,{...n});case"cross":return e(It,{...n});case"play":return e(Wt,{...n});case"search":return e(Ut,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,o=n.className?`${r} ${n.className}`:r;return e(Gt,{...n,className:o})}}},Gt=i.span`
    font-size: 1rem;
`;var Vt;!function(e){e.D1=i.h1`
        ${e=>a`
                ${Ct("D1",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>a`
                ${Ct("D2",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>a`
                ${Ct("D3",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>a`
                ${Ct("D4",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>a`
                ${Ct("DBody",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>a`
                ${Ct("H1",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>a`
                ${Ct("H2",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>a`
                ${Ct("H3",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>a`
                ${Ct("H4",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>a`
                ${Ct("H5",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>a`
                ${Ct("H6",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>a`
                ${Ct("Body",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>a`
                ${Ct("BodySmall",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>a`
                ${Ct("XSmall",e.weight,e.paragraph)}
                color: ${Lt[1]};
                ${Bt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Yt({...e,textStyle:"Body"}),Small:e=>Yt({...e,textStyle:"BodySmall"})}}(Vt||(Vt={}));const Xt=i.a`
    ${e=>a`
            ${Ct(e.textStyle,e.weight)}
            color: ${Ot};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t};
            }
        `}
`,qt=i(Pt)`
    margin-left: 0.4rem;
`,Yt=({external:n=!1,children:r,...o})=>t(Xt,{...o,children:[r,n&&e(qt,{type:"external"})]});var Zt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Zt||(Zt={}));const Kt=i.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${Lt[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${Lt[7]};
    }
`,Jt=n.forwardRef((({children:t,iconType:n,...r},o)=>{let i;if(t)i=t;else{if(!n)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=e(Pt,{type:n})}return e(Kt,{ref:o,...r,children:i})})),Qt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},en=e=>Object.keys(Qt).reduce(((t,n)=>{const r=Qt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),tn=en("max-width"),nn=(en("min-width"),n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",...a}=t;return e(rn,{ref:n,"data-testid":o,type:i,...a,children:r})}))),rn=i.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${tn.desktopM} {
        max-width: 1152px;
    }

    ${tn.tablet} {
        max-width: 960px;
    }

    ${tn.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${e=>"grid"===e.type?a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${tn.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${tn.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `:a`
                    display: flex;
                    height: auto;
                `}
`,on=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",...i}=t;return e(an,{ref:n,"data-testid":o,...i,children:r})})),an=i.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,ln=n.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",...l}=t;return e(on,{ref:n,"data-testid":o,className:i,...l,children:e(nn,{"data-testid":`${o}-container`,type:a,"data-id":"container",children:r})})})),cn={Section:on,Container:nn,Content:ln},sn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",un=a`
    color: ${Rt.Orange.Icon};
    :hover,
    :active,
    :visited,
    :focus {
        color: ${Rt.Orange.Icon};
    }
`,fn=i.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${sn};
    background: ${Lt[2]};
    z-index: 25;
`,dn=i(cn.Content)`
    display: flex;
`,pn=i.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,mn=i.div`
    display: inline-block;
    width: 100%;

    ${Ct("Body","regular")}
    color: ${Lt[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Ht("Body","semibold")}
        color: ${Lt[8]};
    }

    a {
        ${Ct("Body","regular")}
        ${un}
    }
`,hn=i(Vt.Hyperlink.Default)`
    position: relative;

    ${un}
`,gn=i(Jt)`
    background: transparent;
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;

    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Lt[8]};
    }

    :focus,
    :active {
        background: transparent;
    }
`;i(Pt)`
    font-weight: bold;
    font-size: 2rem;
    color: ${Lt[8]};
`;const yn=({children:n,visible:i=!0,dismissible:a=!0,sticky:l=!0,onDismiss:c,id:s,forwardedRef:u,...f})=>{const d=f["data-testid"],[p,m]=r(i);o((()=>{m(i)}),[i]);return p?e(fn,{ref:u,$sticky:l,...f,children:t(dn,{id:vn("container",s),children:[e(pn,{children:e(mn,{"data-testid":vn("text-content",d),children:n})}),a&&e(gn,{onClick:()=>{m(!1),a&&c&&c()},id:vn("dismiss-button",s),"data-testid":vn("dismiss-button",d),children:e(Pt,{type:"cross"})})]})}):null},vn=(e,t="wrapper")=>`${t}-${e}`,bn=n.forwardRef(((t,n)=>e(yn,{...t,forwardedRef:n}))),Sn=Object.assign(bn,{Link:hn});
/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */
function wn(e){return wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wn(e)}function Fn(e,t){return Fn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Fn(e,t)}function Dn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _n(e,t,n){return _n=Dn()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Fn(o,n.prototype),o},_n.apply(null,arguments)}function xn(e){return function(e){if(Array.isArray(e))return En(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return En(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return En(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function En(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Tn=Object.hasOwnProperty,An=Object.setPrototypeOf,Hn=Object.isFrozen,Cn=Object.getPrototypeOf,Bn=Object.getOwnPropertyDescriptor,kn=Object.freeze,Nn=Object.seal,On=Object.create,$n="undefined"!=typeof Reflect&&Reflect,Ln=$n.apply,Rn=$n.construct;Ln||(Ln=function(e,t,n){return e.apply(t,n)}),kn||(kn=function(e){return e}),Nn||(Nn=function(e){return e}),Rn||(Rn=function(e,t){return _n(e,xn(t))});var zn,Mn=Yn(Array.prototype.forEach),In=Yn(Array.prototype.pop),jn=Yn(Array.prototype.push),Wn=Yn(String.prototype.toLowerCase),Un=Yn(String.prototype.match),Pn=Yn(String.prototype.replace),Gn=Yn(String.prototype.indexOf),Vn=Yn(String.prototype.trim),Xn=Yn(RegExp.prototype.test),qn=(zn=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Rn(zn,t)});function Yn(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Ln(e,t,r)}}function Zn(e,t,n){n=n||Wn,An&&An(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(Hn(t)||(t[r]=i),o=i)}e[o]=!0}return e}function Kn(e){var t,n=On(null);for(t in e)Ln(Tn,e,[t])&&(n[t]=e[t]);return n}function Jn(e,t){for(;null!==e;){var n=Bn(e,t);if(n){if(n.get)return Yn(n.get);if("function"==typeof n.value)return Yn(n.value)}e=Cn(e)}return function(e){return console.warn("fallback value for",e),null}}var Qn=kn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),er=kn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),tr=kn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nr=kn(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rr=kn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),or=kn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ir=kn(["#text"]),ar=kn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),lr=kn(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),cr=kn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),sr=kn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ur=Nn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fr=Nn(/<%[\w\W]*|[\w\W]*%>/gm),dr=Nn(/^data-[\-\w.\u00B7-\uFFFF]/),pr=Nn(/^aria-[\-\w]+$/),mr=Nn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hr=Nn(/^(?:\w+script|data):/i),gr=Nn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yr=Nn(/^html$/i),vr=function(){return"undefined"==typeof window?null:window},br=function(e,t){if("object"!==wn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};var Sr=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vr(),n=function(t){return e(t)};if(n.version="2.4.0",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,d=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=Jn(h,"cloneNode"),y=Jn(h,"nextSibling"),v=Jn(h,"childNodes"),b=Jn(h,"parentNode");if("function"==typeof a){var S=o.createElement("template");S.content&&S.content.ownerDocument&&(o=S.content.ownerDocument)}var w=br(m,r),F=w?w.createHTML(""):"",D=o,_=D.implementation,x=D.createNodeIterator,E=D.createDocumentFragment,T=D.getElementsByTagName,A=r.importNode,H={};try{H=Kn(o).documentMode?o.documentMode:{}}catch(e){}var C={};n.isSupported="function"==typeof b&&_&&void 0!==_.createHTMLDocument&&9!==H;var B,k,N=ur,O=fr,$=dr,L=pr,R=hr,z=gr,M=mr,I=null,j=Zn({},[].concat(xn(Qn),xn(er),xn(tr),xn(rr),xn(ir))),W=null,U=Zn({},[].concat(xn(ar),xn(lr),xn(cr),xn(sr))),P=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),G=null,V=null,X=!0,q=!0,Y=!1,Z=!1,K=!1,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!0,oe=!1,ie="user-content-",ae=!0,le=!1,ce={},se=null,ue=Zn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),fe=null,de=Zn({},["audio","video","img","source","image","track"]),pe=null,me=Zn({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",ye="http://www.w3.org/1999/xhtml",ve=ye,be=!1,Se=["application/xhtml+xml","text/html"],we="text/html",Fe=null,De=o.createElement("form"),_e=function(e){return e instanceof RegExp||e instanceof Function},xe=function(e){Fe&&Fe===e||(e&&"object"===wn(e)||(e={}),e=Kn(e),B=B=-1===Se.indexOf(e.PARSER_MEDIA_TYPE)?we:e.PARSER_MEDIA_TYPE,k="application/xhtml+xml"===B?function(e){return e}:Wn,I="ALLOWED_TAGS"in e?Zn({},e.ALLOWED_TAGS,k):j,W="ALLOWED_ATTR"in e?Zn({},e.ALLOWED_ATTR,k):U,pe="ADD_URI_SAFE_ATTR"in e?Zn(Kn(me),e.ADD_URI_SAFE_ATTR,k):me,fe="ADD_DATA_URI_TAGS"in e?Zn(Kn(de),e.ADD_DATA_URI_TAGS,k):de,se="FORBID_CONTENTS"in e?Zn({},e.FORBID_CONTENTS,k):ue,G="FORBID_TAGS"in e?Zn({},e.FORBID_TAGS,k):{},V="FORBID_ATTR"in e?Zn({},e.FORBID_ATTR,k):{},ce="USE_PROFILES"in e&&e.USE_PROFILES,X=!1!==e.ALLOW_ARIA_ATTR,q=!1!==e.ALLOW_DATA_ATTR,Y=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Z=e.SAFE_FOR_TEMPLATES||!1,K=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Q=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,oe=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,le=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,ve=e.NAMESPACE||ye,e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(P.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Z&&(q=!1),te&&(ee=!0),ce&&(I=Zn({},xn(ir)),W=[],!0===ce.html&&(Zn(I,Qn),Zn(W,ar)),!0===ce.svg&&(Zn(I,er),Zn(W,lr),Zn(W,sr)),!0===ce.svgFilters&&(Zn(I,tr),Zn(W,lr),Zn(W,sr)),!0===ce.mathMl&&(Zn(I,rr),Zn(W,cr),Zn(W,sr))),e.ADD_TAGS&&(I===j&&(I=Kn(I)),Zn(I,e.ADD_TAGS,k)),e.ADD_ATTR&&(W===U&&(W=Kn(W)),Zn(W,e.ADD_ATTR,k)),e.ADD_URI_SAFE_ATTR&&Zn(pe,e.ADD_URI_SAFE_ATTR,k),e.FORBID_CONTENTS&&(se===ue&&(se=Kn(se)),Zn(se,e.FORBID_CONTENTS,k)),ae&&(I["#text"]=!0),K&&Zn(I,["html","head","body"]),I.table&&(Zn(I,["tbody"]),delete G.tbody),kn&&kn(e),Fe=e)},Ee=Zn({},["mi","mo","mn","ms","mtext"]),Te=Zn({},["foreignobject","desc","title","annotation-xml"]),Ae=Zn({},["title","style","font","a","script"]),He=Zn({},er);Zn(He,tr),Zn(He,nr);var Ce=Zn({},rr);Zn(Ce,or);var Be=function(e){var t=b(e);t&&t.tagName||(t={namespaceURI:ye,tagName:"template"});var n=Wn(e.tagName),r=Wn(t.tagName);return e.namespaceURI===ge?t.namespaceURI===ye?"svg"===n:t.namespaceURI===he?"svg"===n&&("annotation-xml"===r||Ee[r]):Boolean(He[n]):e.namespaceURI===he?t.namespaceURI===ye?"math"===n:t.namespaceURI===ge?"math"===n&&Te[r]:Boolean(Ce[n]):e.namespaceURI===ye&&(!(t.namespaceURI===ge&&!Te[r])&&(!(t.namespaceURI===he&&!Ee[r])&&(!Ce[n]&&(Ae[n]||!He[n]))))},ke=function(e){jn(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=F}catch(t){e.remove()}}},Ne=function(e,t){try{jn(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){jn(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!W[e])if(ee||te)try{ke(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Oe=function(e){var t,n;if(Q)e="<remove></remove>"+e;else{var r=Un(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===B&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=w?w.createHTML(e):e;if(ve===ye)try{t=(new p).parseFromString(i,B)}catch(e){}if(!t||!t.documentElement){t=_.createDocument(ve,"template",null);try{t.documentElement.innerHTML=be?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),ve===ye?T.call(t,K?"html":"body")[0]:K?t.documentElement:a},$e=function(e){return x.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},Le=function(e){return e instanceof d&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},Re=function(e){return"object"===wn(l)?e instanceof l:e&&"object"===wn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,r){C[e]&&Mn(C[e],(function(e){e.call(n,t,r,Fe)}))},Me=function(e){var t;if(ze("beforeSanitizeElements",e,null),Le(e))return ke(e),!0;if(Xn(/[\u0080-\uFFFF]/,e.nodeName))return ke(e),!0;var r=k(e.nodeName);if(ze("uponSanitizeElement",e,{tagName:r,allowedTags:I}),e.hasChildNodes()&&!Re(e.firstElementChild)&&(!Re(e.content)||!Re(e.content.firstElementChild))&&Xn(/<[/\w]/g,e.innerHTML)&&Xn(/<[/\w]/g,e.textContent))return ke(e),!0;if("select"===r&&Xn(/<template/i,e.innerHTML))return ke(e),!0;if(!I[r]||G[r]){if(!G[r]&&je(r)){if(P.tagNameCheck instanceof RegExp&&Xn(P.tagNameCheck,r))return!1;if(P.tagNameCheck instanceof Function&&P.tagNameCheck(r))return!1}if(ae&&!se[r]){var o=b(e)||e.parentNode,i=v(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(g(i[a],!0),y(e))}return ke(e),!0}return e instanceof c&&!Be(e)?(ke(e),!0):"noscript"!==r&&"noembed"!==r||!Xn(/<\/no(script|embed)/i,e.innerHTML)?(Z&&3===e.nodeType&&(t=e.textContent,t=Pn(t,N," "),t=Pn(t,O," "),e.textContent!==t&&(jn(n.removed,{element:e.cloneNode()}),e.textContent=t)),ze("afterSanitizeElements",e,null),!1):(ke(e),!0)},Ie=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in o||n in De))return!1;if(q&&!V[t]&&Xn($,t));else if(X&&Xn(L,t));else if(!W[t]||V[t]){if(!(je(e)&&(P.tagNameCheck instanceof RegExp&&Xn(P.tagNameCheck,e)||P.tagNameCheck instanceof Function&&P.tagNameCheck(e))&&(P.attributeNameCheck instanceof RegExp&&Xn(P.attributeNameCheck,t)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(t))||"is"===t&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&Xn(P.tagNameCheck,n)||P.tagNameCheck instanceof Function&&P.tagNameCheck(n))))return!1}else if(pe[t]);else if(Xn(M,Pn(n,z,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Gn(n,"data:")||!fe[e]){if(Y&&!Xn(R,Pn(n,z,"")));else if(n)return!1}else;return!0},je=function(e){return e.indexOf("-")>0},We=function(e){var t,r,o,i;ze("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Vn(t.value),o=k(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ze("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Ne(s,e),l.keepAttr))if(Xn(/\/>/i,r))Ne(s,e);else{Z&&(r=Pn(r,N," "),r=Pn(r,O," "));var f=k(e.nodeName);if(Ie(f,o,r)){if(!oe||"id"!==o&&"name"!==o||(Ne(s,e),r=ie+r),w&&"object"===wn(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,o)){case"TrustedHTML":r=w.createHTML(r);break;case"TrustedScriptURL":r=w.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),In(n.removed)}catch(e){}}}}ze("afterSanitizeAttributes",e,null)}},Ue=function e(t){var n,r=$e(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),Me(n)||(n.content instanceof i&&e(n.content),We(n));ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((be=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw qn("toString is not a function");if("string"!=typeof(e=e.toString()))throw qn("dirty is not a string, aborting")}if(!n.isSupported){if("object"===wn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Re(e))return t.toStaticHTML(e.outerHTML)}return e}if(J||xe(f),n.removed=[],"string"==typeof e&&(le=!1),le){if(e.nodeName){var d=k(e.nodeName);if(!I[d]||G[d])throw qn("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=Oe("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!ee&&!Z&&!K&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(!(o=Oe(e)))return ee?null:ne?F:""}o&&Q&&ke(o.firstChild);for(var p=$e(le?e:o);c=p.nextNode();)3===c.nodeType&&c===s||Me(c)||(c.content instanceof i&&Ue(c.content),We(c),s=c);if(s=null,le)return e;if(ee){if(te)for(u=E.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return W.shadowroot&&(u=A.call(r,u,!0)),u}var m=K?o.outerHTML:o.innerHTML;return K&&I["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Xn(yr,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),Z&&(m=Pn(m,N," "),m=Pn(m,O," ")),w&&ne?w.createHTML(m):m},n.setConfig=function(e){xe(e),J=!0},n.clearConfig=function(){Fe=null,J=!1},n.isValidAttribute=function(e,t,n){Fe||xe({});var r=k(e),o=k(t);return Ie(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(C[e]=C[e]||[],jn(C[e],t))},n.removeHook=function(e){if(C[e])return In(C[e])},n.removeHooks=function(e){C[e]&&(C[e]=[])},n.removeAllHooks=function(){C={}},n}();const wr=t=>n.forwardRef(((n,r)=>e(yn,{forwardedRef:r,...n,children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=Sr.sanitize(t.content);return e("p",{...r,dangerouslySetInnerHTML:{__html:o}},n)}{const r=t.otherAttributes;return e(Sn.Link,{...r,children:t.content},n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})));export{yn as NBComponent,Sn as NotificationBanner,wr as withNotificationBanner};
//# sourceMappingURL=index.js.map
