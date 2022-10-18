import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import a from"react";const o={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},l={D1:{fontFamily:o.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:o.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:o.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:o.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:o.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:o.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:o.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:o.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:o.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,h="object"==typeof s&&s&&s.Object===Object&&s,d="object"==typeof self&&self&&self.Object===Object&&self,u=h||d||Function("return this")(),f=u.Symbol,g=f,p=Object.prototype,m=p.hasOwnProperty,y=p.toString,$=g?g.toStringTag:void 0;var v=function(t){var e=m.call(t,$),n=t[$];try{t[$]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[$]=n:delete t[$]),i},S=Object.prototype.toString;var F=v,D=function(t){return S.call(t)},w=f?f.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?F(t):D(t)};var H=b,B=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||B(t)&&"[object Symbol]"==H(t)},x=c,C=_,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var M=function(t,e){if(x(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(k.test(t)||!z.test(t)||null!=e&&t in Object(e))};var O=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},L=b,W=O;var A,E=function(t){if(!W(t))return!1;var e=L(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=u["__core-js_shared__"],T=(A=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var V=function(t){return!!T&&T in t},R=Function.prototype.toString;var I=E,N=V,Y=O,P=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,G=Function.prototype,X=Object.prototype,Z=G.toString,J=X.hasOwnProperty,q=RegExp("^"+Z.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!Y(t)||N(t))&&(I(t)?q:U).test(P(t))},K=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=K(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var rt=function(){this.__data__=nt?nt(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=et,ot=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},st=et,ct=Object.prototype.hasOwnProperty;var ht=et;var dt=rt,ut=it,ft=lt,gt=function(t){var e=this.__data__;return st?void 0!==e[t]:ct.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=dt,mt.prototype.delete=ut,mt.prototype.get=ft,mt.prototype.has=gt,mt.prototype.set=pt;var yt=mt;var $t=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},Ft=St,Dt=Array.prototype.splice;var wt=St;var bt=St;var Ht=St;var Bt=$t,_t=function(t){var e=this.__data__,n=Ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},xt=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return bt(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Ht(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=Bt,kt.prototype.delete=_t,kt.prototype.get=xt,kt.prototype.has=Ct,kt.prototype.set=zt;var Mt=kt,Ot=tt(u,"Map"),Lt=yt,Wt=Mt,At=Ot;var Et=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var jt=function(t,e){var n=t.__data__;return Et(e)?n["string"==typeof e?"string":"hash"]:n.map},Tt=jt;var Vt=jt;var Rt=jt;var It=jt;var Nt=function(){this.size=0,this.__data__={hash:new Lt,map:new(At||Wt),string:new Lt}},Yt=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Pt=function(t){return Vt(this,t).get(t)},Ut=function(t){return Rt(this,t).has(t)},Gt=function(t,e){var n=It(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xt.prototype.clear=Nt,Xt.prototype.delete=Yt,Xt.prototype.get=Pt,Xt.prototype.has=Ut,Xt.prototype.set=Gt;var Zt=Xt;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Jt.Cache||Zt),n}Jt.Cache=Zt;var qt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,te=function(t){var e=qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,i){e.push(r?i.replace(Kt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ne=c,re=_,ie=f?f.prototype:void 0,ae=ie?ie.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(re(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=oe;var se=c,ce=M,he=te,de=function(t){return null==t?"":le(t)};var ue=_;var fe=function(t,e){return se(t)?t:ce(t,e)?[t]:he(de(t))},ge=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,r=(e=fe(e,t)).length;null!=t&&n<r;)t=t[ge(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:pe(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,$e=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(ve||(ve={}));const Se={collections:{base:l},defaultValue:"base"},Fe=t=>e=>{const n=e.theme,r=$e(Se,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},De={D1:{fontFamily:Fe("D1.fontFamily"),fontSize:Fe("D1.fontSize"),fontWeight:Fe("D1.fontWeight"),lineHeight:Fe("D1.lineHeight"),letterSpacing:Fe("D1.letterSpacing")},D2:{fontFamily:Fe("D2.fontFamily"),fontSize:Fe("D2.fontSize"),fontWeight:Fe("D2.fontWeight"),lineHeight:Fe("D2.lineHeight"),letterSpacing:Fe("D2.letterSpacing")},D3:{fontFamily:Fe("D3.fontFamily"),fontSize:Fe("D3.fontSize"),fontWeight:Fe("D3.fontWeight"),lineHeight:Fe("D3.lineHeight"),letterSpacing:Fe("D3.letterSpacing")},D4:{fontFamily:Fe("D4.fontFamily"),fontSize:Fe("D4.fontSize"),fontWeight:Fe("D4.fontWeight"),lineHeight:Fe("D4.lineHeight"),letterSpacing:Fe("D4.letterSpacing")},DBody:{fontFamily:Fe("DBody.fontFamily"),fontSize:Fe("DBody.fontSize"),fontWeight:Fe("DBody.fontWeight"),lineHeight:Fe("DBody.lineHeight"),letterSpacing:Fe("DBody.letterSpacing")},H1:{fontFamily:Fe("H1.fontFamily"),fontSize:Fe("H1.fontSize"),fontWeight:Fe("H1.fontWeight"),lineHeight:Fe("H1.lineHeight"),letterSpacing:Fe("H1.letterSpacing")},H2:{fontFamily:Fe("H2.fontFamily"),fontSize:Fe("H2.fontSize"),fontWeight:Fe("H2.fontWeight"),lineHeight:Fe("H2.lineHeight"),letterSpacing:Fe("H2.letterSpacing")},H3:{fontFamily:Fe("H3.fontFamily"),fontSize:Fe("H3.fontSize"),fontWeight:Fe("H3.fontWeight"),lineHeight:Fe("H3.lineHeight"),letterSpacing:Fe("H3.letterSpacing")},H4:{fontFamily:Fe("H4.fontFamily"),fontSize:Fe("H4.fontSize"),fontWeight:Fe("H4.fontWeight"),lineHeight:Fe("H4.lineHeight"),letterSpacing:Fe("H4.letterSpacing")},H5:{fontFamily:Fe("H5.fontFamily"),fontSize:Fe("H5.fontSize"),fontWeight:Fe("H5.fontWeight"),lineHeight:Fe("H5.lineHeight"),letterSpacing:Fe("H5.letterSpacing")},H6:{fontFamily:Fe("H6.fontFamily"),fontSize:Fe("H6.fontSize"),fontWeight:Fe("H6.fontWeight"),lineHeight:Fe("H6.lineHeight"),letterSpacing:Fe("H6.letterSpacing")},Body:{fontFamily:Fe("Body.fontFamily"),fontSize:Fe("Body.fontSize"),fontWeight:Fe("Body.fontWeight"),lineHeight:Fe("Body.lineHeight"),letterSpacing:Fe("Body.letterSpacing")},BodySmall:{fontFamily:Fe("BodySmall.fontFamily"),fontSize:Fe("BodySmall.fontSize"),fontWeight:Fe("BodySmall.fontWeight"),lineHeight:Fe("BodySmall.lineHeight"),letterSpacing:Fe("BodySmall.letterSpacing")},XSmall:{fontFamily:Fe("XSmall.fontFamily"),fontSize:Fe("XSmall.fontSize"),fontWeight:Fe("XSmall.fontWeight"),lineHeight:Fe("XSmall.lineHeight"),letterSpacing:Fe("XSmall.letterSpacing")}},we=t=>{switch(t){case 700:case"bold":return o.Bold;case 600:case"semibold":return o.Semibold;case 300:case"light":return o.Light;case 400:case"regular":return o.Regular;default:return""}},be=(t,e)=>n=>{const r=De[t].fontFamily(n),a=De[t].fontWeight(n);return Object.values(o).includes(r)?i`
                font-family: ${we(e)||we(a)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${(He(e)||a)??"normal"};
        `},He=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Be=(t,e,n=!1)=>r=>{const a=De[t],o=a.fontSize(r);return i`
            ${be(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_e=(t=!1,e=!1)=>e?i`
            display: block;
        `:t?i`
            display: inline;
        `:i`
            display: block;
        `,xe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=$e(xe,n[ve.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},ze=(Ce("Brand.1"),Ce("Brand.2"),Ce("Brand.3"),Ce("Brand.4"),Ce("Brand.5"),Ce("Brand.6"),Ce("Primary")),ke=(Ce("PrimaryDark"),Ce("Secondary")),Me=(Ce("Accent.Light.1"),Ce("Accent.Light.2"),Ce("Accent.Light.3"),Ce("Accent.Light.4"),Ce("Accent.Light.5"),Ce("Accent.Light.6"),Ce("Accent.Dark.1"),Ce("Accent.Dark.2"),Ce("Accent.Dark.3"),{1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")}),Oe=(Ce("Validation.Green.Text"),Ce("Validation.Green.Icon"),Ce("Validation.Green.Border"),Ce("Validation.Green.Background"),Ce("Validation.Orange.Text"),Ce("Validation.Orange.Icon"),Ce("Validation.Orange.Border"),Ce("Validation.Orange.Background"),Ce("Validation.Orange.Badge"),Ce("Validation.Red.Text"),Ce("Validation.Red.Icon"),Ce("Validation.Red.Border"),Ce("Validation.Red.Background"),r.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${ze};
`),Le=e=>t(Oe,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),We=e=>t(Oe,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ae=e=>t(Oe,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ee=e=>t(Oe,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),je=e=>t(Oe,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Te=r.span`
    font-size: 1rem;
`;var Ve;!function(t){t.D1=r.h1`
        ${t=>i`
                ${Be("D1",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${Be("D2",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${Be("D3",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${Be("D4",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${Be("DBody",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${Be("H1",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${Be("H2",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${Be("H3",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${Be("H4",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${Be("H5",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${Be("H6",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${Be("Body",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${Be("BodySmall",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${Be("XSmall",t.weight,t.paragraph)}
                color: ${Me[1]};
                ${_e(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ne({...t,textStyle:"Body"}),Small:t=>Ne({...t,textStyle:"BodySmall"})}}(Ve||(Ve={}));const Re=r.a`
    ${t=>i`
            ${Be(t.textStyle,t.weight)}
            color: ${ze};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ke};
            }
        `}
`,Ie=r((({type:e,...n})=>{switch(e){case"arrow-right":return t(Le,{...n});case"info":return t(Ae,{...n});case"cross":return t(We,{...n});case"play":return t(Ee,{...n});case"search":return t(je,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(Te,{...n,className:i})}}}))`
    margin-left: 0.4rem;
`,Ne=({external:n=!1,children:r,...i})=>e(Re,{...i,children:[r,n&&t(Ie,{type:"external"})]});var Ye;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ye||(Ye={}));const Pe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ue=t=>Object.keys(Pe).reduce(((e,n)=>{const r=Pe[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ge=Ue("max-width"),Xe=(Ue("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ge.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ze=r(Ve.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Je=r.div`
    display: flex;
    align-items: flex-start;
`,qe=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ge.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Qe=()=>e(Xe,{"data-testid":"download-app-section",children:[t(Ze,{weight:"semibold",children:"Download the app"}),e(Je,{children:[t(qe,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),t(qe,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",children:t("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]});var Ke,tn={exports:{}},en=tn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",h="quarter",d="year",u="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:s,d:l,D:u,h:o,m:a,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=m;var F=function(t){return t instanceof H},D=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new H(n)},b=$;b.l=D,b.i=F,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var H=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!b.u(e)||e,h=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(r?y-S:y+(6-S),m);case l:case u:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=b.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[l]=h+"Date",n[u]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[o]=h+"Hours",n[a]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[s],g=s===l?this.$D+(e-this.$W):e;if(s===c||s===d){var p=this.clone().set(u,1);p.$d[f](g),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(r,h){var u,f=this;r=Number(r);var g=b.p(h),p=function(t){var e=w(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(u={},u[a]=e,u[o]=n,u[i]=t,u)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,h=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},d=function(t){return b.s(a%12||12,t,"0")},u=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:b.s(l+1,2,"0"),MMM:h(n.monthsShort,l,c,3),MMMM:h(c,l),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,s,2),ddd:h(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:b.s(a,2,"0"),h:d(1),hh:d(2),a:u(a,o,!0),A:u(a,o,!1),m:String(o),mm:b.s(o,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,u,f){var g,p=b.p(u),m=w(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,v=b.m(this,m);return v=(g={},g[d]=v/12,g[c]=v,g[h]=v/3,g[s]=($-y)/6048e5,g[l]=($-y)/864e5,g[o]=$/n,g[a]=$/e,g[i]=$/t,g)[p]||$,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=H.prototype;return w.prototype=B,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",d],["$D",u]].forEach((function(t){B[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,H,w),t.$i=!0),w},w.locale=D,w.isDayjs=F,w.unix=function(t){return w(1e3*t)},w.en=S[v],w.Ls=S,w.p={},w}();!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${en(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener",...t&&t.privacy?t.privacy:{},children:"Privacy Statement"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener",...t&&t.termsOfUse?t.termsOfUse:{},children:"Terms of Use"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0,...t&&t.reportVulnerability?t.reportVulnerability:{},children:"Report Vulnerability"}})}(Ke||(Ke={}));const nn=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:a="flex",...o}=e;return t(rn,{ref:n,"data-testid":i,type:a,...o,children:r})})),rn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${Ge.desktopM} {
        max-width: 1152px;
    }

    ${Ge.tablet} {
        max-width: 960px;
    }

    ${Ge.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${t=>"grid"===t.type?i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${Ge.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ge.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `:i`
                    display: flex;
                    height: auto;
                `}
`,an=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",...a}=e;return t(on,{ref:n,"data-testid":i,...a,children:r})})),on=r.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,ln=a.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",...l}=e;return t(an,{ref:n,"data-testid":i,className:a,...l,children:t(nn,{"data-testid":`${i}-container`,type:o,"data-id":"container",children:r})})})),sn={Section:an,Container:nn,Content:ln},cn=r.footer`
    background: ${Me[7]};
`,hn=r(Ve.Hyperlink.Small)`
    color: ${Me[1]};
`,dn=r(sn.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Me[5]};

    ${Ge.tablet} {
        padding: 2rem 0;
    }
`,un=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,fn=r.ul`
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

    ${Ge.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ge.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,gn=r.div`
    grid-column: 9 / span 4;

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,pn=r.div`
    display: none;

    ${Ge.tablet} {
        display: block;
        height: 1px;
        background: ${Me[6]};
    }
`,mn=r(sn.Content)`
    padding: 1.375rem 0;

    ${Ge.tablet} {
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

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,$n=r(yn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ge.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,vn=r(Ve.Hyperlink.Small)`
    ${Be("XSmall","regular")}
    color: ${Me[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    &:hover {
        color: ${Me[3]};
    }

    ${Ge.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ge.tablet} {
        margin-bottom: 0.625rem;
    }
`,Sn=({children:r,links:i,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:l,logoSrc:s,copyrightInfo:c,onFooterLinkClick:h})=>{const d=e=>e.map(((e,n)=>{const{"data-options":r,...i}=e;return t("li",{children:t(hn,{...i,onClick:t=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):h&&(t.preventDefault(),h(e))})(t,e)})},n)}));return e(cn,{children:[(()=>{let a=null;return r||((i||l)&&(a=e(n,{children:[t(un,{"data-testid":"logo-section",children:t("img",{src:s||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})}),i[0]&&t(fn,{"data-testid":"link-col-1",children:d(i[0])},"link-col-1"),i[1]&&t(fn,{"data-testid":"link-col-2",children:d(i[1])},"link-col-2"),l&&t(gn,{children:t(Qe,{})})]})),a?t(dn,{type:"grid",children:a}):null)})(),t(pn,{}),e(mn,{type:"grid",children:[t(yn,{children:(()=>{const e=Ke.getDisclaimerLinks(o);return Object.keys(e).map((n=>t(vn,{...e[n]},n)))})()},"disclaimer"),t($n,{children:t(Ve.XSmall,{"data-testid":"copyright-text",children:c||e(n,{children:["©"," ",Ke.getCopyrightInfo(a)]})})},"copyright")]})]})};export{Sn as Footer};
//# sourceMappingURL=index.js.map
