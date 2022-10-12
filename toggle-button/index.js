import{jsx as e,jsxs as t}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i,useCallback as a}from"react";import o,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,f=g||d||Function("return this")(),u=f.Symbol,p=u,s=Object.prototype,y=s.hasOwnProperty,m=s.toString,F=p?p.toStringTag:void 0;var S=function(e){var t=y.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch(e){}var i=m.call(e);return r&&(t?e[F]=n:delete e[F]),i},v=Object.prototype.toString;var B=S,$=function(e){return v.call(e)},H=u?u.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?B(e):$(e)};var D=b,w=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==D(e)},z=h,x=_,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var E=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!x(e))||(k.test(e)||!C.test(e)||null!=t&&e in Object(t))};var N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=b,A=N;var O,j=function(e){if(!A(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=f["__core-js_shared__"],V=(O=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var L=function(e){return!!V&&V in e},P=Function.prototype.toString;var T=j,I=L,X=N,G=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,Z=Function.prototype,U=Object.prototype,q=Z.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!X(e)||I(e))&&(T(e)?K:M).test(G(e))},Y=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},ce=te,he=Object.prototype.hasOwnProperty;var ge=te;var de=re,fe=ie,ue=le,pe=function(e){var t=this.__data__;return ce?void 0!==t[e]:he.call(t,e)},se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=de,ye.prototype.delete=fe,ye.prototype.get=ue,ye.prototype.has=pe,ye.prototype.set=se;var me=ye;var Fe=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},Be=ve,$e=Array.prototype.splice;var He=ve;var be=ve;var De=ve;var we=Fe,_e=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},xe=function(e){return be(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=we,ke.prototype.delete=_e,ke.prototype.get=ze,ke.prototype.has=xe,ke.prototype.set=Ce;var Ee=ke,Ne=ee(f,"Map"),We=me,Ae=Ee,Oe=Ne;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=Re;var Le=Re;var Pe=Re;var Te=Re;var Ie=function(){this.size=0,this.__data__={hash:new We,map:new(Oe||Ae),string:new We}},Xe=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Le(this,e).get(e)},Me=function(e){return Pe(this,e).has(e)},Ze=function(e,t){var n=Te(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ie,Ue.prototype.delete=Xe,Ue.prototype.get=Ge,Ue.prototype.has=Me,Ue.prototype.set=Ze;var qe=Ue;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,et=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,i){t.push(r?i.replace(Ye,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},nt=h,rt=_,it=u?u.prototype:void 0,at=it?it.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=ot;var ct=h,ht=E,gt=et,dt=function(e){return null==e?"":lt(e)};var ft=_;var ut=function(e,t){return ct(e)?e:ht(e,t)?[e]:gt(dt(e))},pt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var st=function(e,t){for(var n=0,r=(t=ut(t,e)).length;null!=e&&n<r;)e=e[pt(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:st(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(St||(St={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=Ft(vt,n[St.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},$t={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")}}},Ht={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},bt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Ft(bt,n[St.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},wt={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},zt=(e,t)=>n=>{const r=wt[e].fontFamily(n),i=wt[e].fontWeight(n);return Object.values(Ht).includes(r)?l`
                font-family: ${_t(t)||_t(i)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(xt(t)||i)??"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ct=(e,t,n=!1)=>r=>{const i=wt[e],a=i.fontSize(r);return l`
            ${zt(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},kt=(e=!1,t=!1)=>t?l`
            display: block;
        `:e?l`
            display: inline;
        `:l`
            display: block;
        `,Et=o.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${$t.Neutral[8]};
    }
`,Nt=t=>e(Et,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("g",{fill:"none",fillRule:"evenodd",children:e("g",{id:"path",fillRule:"nonzero",children:e("g",{children:e("g",{children:e("g",{children:e("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Wt=t=>e(Et,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),At=t=>e(Et,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Ot=t=>e(Et,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...t,children:e("g",{id:"search",children:e("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),jt=o.span`
    font-size: 1rem;
`;var Rt;!function(e){e.D1=o.h1`
        ${e=>l`
                ${Ct("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D2=o.h1`
        ${e=>l`
                ${Ct("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D3=o.h1`
        ${e=>l`
                ${Ct("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.D4=o.h1`
        ${e=>l`
                ${Ct("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.DBody=o.h1`
        ${e=>l`
                ${Ct("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H1=o.h1`
        ${e=>l`
                ${Ct("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H2=o.h2`
        ${e=>l`
                ${Ct("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H3=o.h3`
        ${e=>l`
                ${Ct("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H4=o.h4`
        ${e=>l`
                ${Ct("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H5=o.h5`
        ${e=>l`
                ${Ct("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.H6=o.h6`
        ${e=>l`
                ${Ct("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Body=o.p`
        ${e=>l`
                ${Ct("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=o.p`
        ${e=>l`
                ${Ct("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=o.span`
        ${e=>l`
                ${Ct("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${kt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Pt({...e,textStyle:"Body"}),Small:e=>Pt({...e,textStyle:"BodySmall"})}}(Rt||(Rt={}));const Vt=o.a`
    ${e=>l`
            ${Ct(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};
            }
        `}
`,Lt=o((({type:t,...n})=>{switch(t){case"arrow-right":return e(Nt,{...n});case"info":return e(Wt,{...n});case"search":return e(Ot,{...n});case"play-alt":return e(At,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,i=n.className?`${r} ${n.className}`:r;return e(jt,{...n,className:i})}}}))`
    margin-left: 0.4rem;
`,Pt=({external:n=!1,children:r,...i})=>t(Vt,{...i,children:[r,n&&e(Lt,{type:"external"})]});var Tt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Tt||(Tt={}));const It=o.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${$t.Primary};
    background: ${$t.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.disabled&&!e.$selected?l`
                background: ${$t.Neutral[6](e)};
                border: 1px solid ${$t.Neutral[6](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.disabled&&e.$selected?l`
                background: ${$t.Neutral[6](e)};
                border: 1px solid ${$t.Neutral[4](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.$selected?l`
                background: ${$t.Accent.Light[5](e)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `:0==e.$selected?l`
                border: 1px solid ${$t.Neutral[5](e)};
            `:void 0}
`,Xt=o.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Gt=o.span`
    ${e=>l`
            ${Ct("H4",e.$weight)}
        `}
    color: ${$t.Neutral[1]};
    text-align: center;

    ${e=>e.disabled?l`
                color: ${$t.Neutral[3](e)};
            `:e.$selected?l`
                color: ${$t.Primary(e)};
            `:void 0}
`,Mt=({disabled:o,checked:l,onChange:c,type:h="checkbox",children:g,className:d,...f})=>{const[u,p]=n(l),s=r();i((()=>{p(l)}),[l]);const y=a((e=>{o||("radio"!==h||u||p(!0),"checkbox"===h&&p((e=>!e)),c&&c(e))}),[]);return t(It,{$selected:u,disabled:o,role:"checkbox","aria-checked":u,className:d,children:[e(Xt,{ref:s,type:"checkbox","data-testid":"toggle-button-input",disabled:o,onChange:y,checked:u,...f}),e(Gt,{$weight:u?"bold":"regular",$selected:u,disabled:o,"data-testid":"toggle-button-label",children:g})]})};export{Mt as ToggleButton};
//# sourceMappingURL=index.js.map
