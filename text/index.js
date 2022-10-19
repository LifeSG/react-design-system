import t,{css as e}from"styled-components";import{jsx as n,jsxs as i}from"react/jsx-runtime";const r={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},a={D1:{fontFamily:r.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:r.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:r.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:r.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:r.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:r.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:r.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:r.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:r.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:r.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:r.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:r.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:r.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:r.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,h=c||g||Function("return this")(),f=h.Symbol,p=f,s=Object.prototype,u=s.hasOwnProperty,y=s.toString,d=p?p.toStringTag:void 0;var S=function(t){var e=u.call(t,d),n=t[d];try{t[d]=void 0;var i=!0}catch(t){}var r=y.call(t);return i&&(e?t[d]=n:delete t[d]),r},F=Object.prototype.toString;var m=S,v=function(t){return F.call(t)},D=f?f.toStringTag:void 0;var B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?m(t):v(t)};var H=B,$=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==H(t)},w=l,z=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,b=/^\w*$/;var x=function(t,e){if(w(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(b.test(t)||!C.test(t)||null!=e&&t in Object(e))};var E=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=B,A=E;var O,T=function(t){if(!A(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},L=h["__core-js_shared__"],j=(O=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var k=function(t){return!!j&&j in t},V=Function.prototype.toString;var R=T,N=k,P=E,I=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,G=Object.prototype,Z=M.toString,U=G.hasOwnProperty,q=RegExp("^"+Z.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!P(t)||N(t))&&(R(t)?q:X).test(I(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var n=K(t,e);return J(n)?n:void 0},Y=Q(Object,"create"),tt=Y;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=Y,rt=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return rt.call(e,t)?e[t]:void 0},ot=Y,lt=Object.prototype.hasOwnProperty;var ct=Y;var gt=et,ht=nt,ft=at,pt=function(t){var e=this.__data__;return ot?void 0!==e[t]:lt.call(e,t)},st=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ut.prototype.clear=gt,ut.prototype.delete=ht,ut.prototype.get=ft,ut.prototype.has=pt,ut.prototype.set=st;var yt=ut;var dt=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var Ft=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},mt=Ft,vt=Array.prototype.splice;var Dt=Ft;var Bt=Ft;var Ht=Ft;var $t=dt,_t=function(t){var e=this.__data__,n=mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)},wt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},zt=function(t){return Bt(this.__data__,t)>-1},Ct=function(t,e){var n=this.__data__,i=Ht(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}bt.prototype.clear=$t,bt.prototype.delete=_t,bt.prototype.get=wt,bt.prototype.has=zt,bt.prototype.set=Ct;var xt=bt,Et=Q(h,"Map"),Wt=yt,At=xt,Ot=Et;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Lt=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},jt=Lt;var kt=Lt;var Vt=Lt;var Rt=Lt;var Nt=function(){this.size=0,this.__data__={hash:new Wt,map:new(Ot||At),string:new Wt}},Pt=function(t){var e=jt(this,t).delete(t);return this.size-=e?1:0,e},It=function(t){return kt(this,t).get(t)},Xt=function(t){return Vt(this,t).has(t)},Mt=function(t,e){var n=Rt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Gt.prototype.clear=Nt,Gt.prototype.delete=Pt,Gt.prototype.get=It,Gt.prototype.has=Xt,Gt.prototype.set=Mt;var Zt=Gt;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=t.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(Ut.Cache||Zt),n}Ut.Cache=Zt;var qt=Ut;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,n,i,r){e.push(i?r.replace(Kt,"$1"):n||t)})),e}));var Yt=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},te=l,ee=_,ne=f?f.prototype:void 0,ie=ne?ne.toString:void 0;var re=function t(e){if("string"==typeof e)return e;if(te(e))return Yt(e,t)+"";if(ee(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ae=re;var oe=l,le=x,ce=Qt,ge=function(t){return null==t?"":ae(t)};var he=_;var fe=function(t,e){return oe(t)?t:le(t,e)?[t]:ce(ge(t))},pe=function(t){if("string"==typeof t||he(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var se=function(t,e){for(var n=0,i=(e=fe(e,t)).length;null!=t&&n<i;)t=t[pe(e[n++])];return n&&n==i?t:void 0};var ue=function(t,e,n){var i=null==t?void 0:se(t,e);return void 0===i?n:i};const ye=(t,e,n)=>e?ue(n,e)||ue(t,e):n||t,de=(t,e)=>{const n=e||t.defaultValue;return ue(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Se||(Se={}));const Fe={collections:{base:a},defaultValue:"base"},me=t=>e=>{const n=e.theme,i=de(Fe,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?ye(i,t,n.options.textStyle):ye(i,t)},ve={D1:{fontFamily:me("D1.fontFamily"),fontSize:me("D1.fontSize"),fontWeight:me("D1.fontWeight"),lineHeight:me("D1.lineHeight"),letterSpacing:me("D1.letterSpacing")},D2:{fontFamily:me("D2.fontFamily"),fontSize:me("D2.fontSize"),fontWeight:me("D2.fontWeight"),lineHeight:me("D2.lineHeight"),letterSpacing:me("D2.letterSpacing")},D3:{fontFamily:me("D3.fontFamily"),fontSize:me("D3.fontSize"),fontWeight:me("D3.fontWeight"),lineHeight:me("D3.lineHeight"),letterSpacing:me("D3.letterSpacing")},D4:{fontFamily:me("D4.fontFamily"),fontSize:me("D4.fontSize"),fontWeight:me("D4.fontWeight"),lineHeight:me("D4.lineHeight"),letterSpacing:me("D4.letterSpacing")},DBody:{fontFamily:me("DBody.fontFamily"),fontSize:me("DBody.fontSize"),fontWeight:me("DBody.fontWeight"),lineHeight:me("DBody.lineHeight"),letterSpacing:me("DBody.letterSpacing")},H1:{fontFamily:me("H1.fontFamily"),fontSize:me("H1.fontSize"),fontWeight:me("H1.fontWeight"),lineHeight:me("H1.lineHeight"),letterSpacing:me("H1.letterSpacing")},H2:{fontFamily:me("H2.fontFamily"),fontSize:me("H2.fontSize"),fontWeight:me("H2.fontWeight"),lineHeight:me("H2.lineHeight"),letterSpacing:me("H2.letterSpacing")},H3:{fontFamily:me("H3.fontFamily"),fontSize:me("H3.fontSize"),fontWeight:me("H3.fontWeight"),lineHeight:me("H3.lineHeight"),letterSpacing:me("H3.letterSpacing")},H4:{fontFamily:me("H4.fontFamily"),fontSize:me("H4.fontSize"),fontWeight:me("H4.fontWeight"),lineHeight:me("H4.lineHeight"),letterSpacing:me("H4.letterSpacing")},H5:{fontFamily:me("H5.fontFamily"),fontSize:me("H5.fontSize"),fontWeight:me("H5.fontWeight"),lineHeight:me("H5.lineHeight"),letterSpacing:me("H5.letterSpacing")},H6:{fontFamily:me("H6.fontFamily"),fontSize:me("H6.fontSize"),fontWeight:me("H6.fontWeight"),lineHeight:me("H6.lineHeight"),letterSpacing:me("H6.letterSpacing")},Body:{fontFamily:me("Body.fontFamily"),fontSize:me("Body.fontSize"),fontWeight:me("Body.fontWeight"),lineHeight:me("Body.lineHeight"),letterSpacing:me("Body.letterSpacing")},BodySmall:{fontFamily:me("BodySmall.fontFamily"),fontSize:me("BodySmall.fontSize"),fontWeight:me("BodySmall.fontWeight"),lineHeight:me("BodySmall.lineHeight"),letterSpacing:me("BodySmall.letterSpacing")},XSmall:{fontFamily:me("XSmall.fontFamily"),fontSize:me("XSmall.fontSize"),fontWeight:me("XSmall.fontWeight"),lineHeight:me("XSmall.lineHeight"),letterSpacing:me("XSmall.letterSpacing")}},De=t=>{switch(t){case 700:case"bold":return r.Bold;case 600:case"semibold":return r.Semibold;case 300:case"light":return r.Light;case 400:case"regular":return r.Regular;default:return""}},Be=(t,n)=>i=>{const a=ve[t].fontFamily(i),o=ve[t].fontWeight(i);return Object.values(r).includes(a)?e`
                font-family: ${De(n)||De(o)||a};
                font-weight: normal !important;
            `:e`
            font-family: ${a};
            font-weight: ${(He(n)||o)??"normal"};
        `},He=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$e={getFontFamily:Be,getTextStyle:(t,n,i=!1)=>r=>{const a=ve[t],o=a.fontSize(r);return e`
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
        `},_e={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},we=t=>e=>{const n=e.theme,i=de(_e,n[Se.colorScheme]);return n.options&&n.options.color?ye(i,t,n.options.color):ye(i,t)},ze=(we("Brand.1"),we("Brand.2"),we("Brand.3"),we("Brand.4"),we("Brand.5"),we("Brand.6"),we("Primary")),Ce=(we("PrimaryDark"),we("Secondary")),be=(we("Accent.Light.1"),we("Accent.Light.2"),we("Accent.Light.3"),we("Accent.Light.4"),we("Accent.Light.5"),we("Accent.Light.6"),we("Accent.Dark.1"),we("Accent.Dark.2"),we("Accent.Dark.3"),{1:we("Neutral.1"),2:we("Neutral.2"),3:we("Neutral.3"),4:we("Neutral.4"),5:we("Neutral.5"),6:we("Neutral.6"),7:we("Neutral.7"),8:we("Neutral.8")}),xe=(we("Validation.Green.Text"),we("Validation.Green.Icon"),we("Validation.Green.Border"),we("Validation.Green.Background"),we("Validation.Orange.Text"),we("Validation.Orange.Icon"),we("Validation.Orange.Border"),we("Validation.Orange.Background"),we("Validation.Orange.Badge"),we("Validation.Red.Text"),we("Validation.Red.Icon"),we("Validation.Red.Border"),we("Validation.Red.Background"),t.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${ze};
`),Ee=t=>n(xe,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:n("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),We=t=>n(xe,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:n("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ae=t=>n(xe,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:n("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Oe=t=>n(xe,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:n("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Te=t=>n(xe,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:n("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Le=t.span`
    font-size: 1rem;
`;var je;!function(n){n.D1=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${$e.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${$e.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${$e.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${$e.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${$e.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${$e.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${$e.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${$e.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${$e.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${$e.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${$e.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${be[1]};
                ${$e.getDisplayStyle(t.inline,t.paragraph)}
            `}
    `,n.Hyperlink={Default:t=>Re({...t,textStyle:"Body"}),Small:t=>Re({...t,textStyle:"BodySmall"})}}(je||(je={}));const ke=t.a`
    ${t=>e`
            ${$e.getTextStyle(t.textStyle,t.weight)}
            color: ${ze};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ce};
            }
        `}
`,Ve=t((({type:t,...e})=>{switch(t){case"arrow-right":return n(Ee,{...e});case"info":return n(Ae,{...e});case"cross":return n(We,{...e});case"play":return n(Oe,{...e});case"search":return n(Te,{...e});default:{const i=`sgds-icon sgds-icon-${t}`,r=e.className?`${i} ${e.className}`:i;return n(Le,{...e,className:r})}}}))`
    margin-left: 0.4rem;
`,Re=({external:t=!1,children:e,...r})=>i(ke,{...r,children:[e,t&&n(Ve,{type:"external"})]});var Ne;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ne||(Ne={}));export{Ne as RedirectScope,je as Text,ve as TextStyle,$e as TextStyleHelper};
//# sourceMappingURL=index.js.map
