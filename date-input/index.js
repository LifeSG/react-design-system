import{jsx as e,jsxs as t}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as a}from"react";import i,{css as o}from"styled-components";var l;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let a=0;t>n&&(a=Math.floor((t-n)/8));const i=r+a;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(l||(l={}));var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof c&&c&&c.Object===Object&&c,g="object"==typeof self&&self&&self.Object===Object&&self,u=d||g||Function("return this")(),s=u.Symbol,p=s,f=Object.prototype,y=f.hasOwnProperty,m=f.toString,v=p?p.toStringTag:void 0;var F=function(e){var t=y.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var a=m.call(e);return r&&(t?e[v]=n:delete e[v]),a},S=Object.prototype.toString;var B=F,$=function(e){return S.call(e)},b=s?s.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?B(e):$(e)};var D=w,H=function(e){return null!=e&&"object"==typeof e};var _=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==D(e)},z=h,x=_,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var C=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!x(e))||(E.test(e)||!k.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=w,N=A;var L,O=function(e){if(!N(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=u["__core-js_shared__"],V=(L=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var R=function(e){return!!V&&V in e},T=Function.prototype.toString;var I=O,P=R,M=A,G=function(e){if(null!=e){try{return T.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,Y=Function.prototype,Z=Object.prototype,U=Y.toString,q=Z.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!M(e)||P(e))&&(I(e)?J:X).test(G(e))},Q=function(e,t){return null==e?void 0:e[t]};var ee=function(e,t){var n=Q(e,t);return K(n)?n:void 0},te=ee(Object,"create"),ne=te;var re=function(){this.__data__=ne?ne(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=te,oe=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},ce=te,he=Object.prototype.hasOwnProperty;var de=te;var ge=re,ue=ae,se=le,pe=function(e){var t=this.__data__;return ce?void 0!==t[e]:he.call(t,e)},fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=ge,ye.prototype.delete=ue,ye.prototype.get=se,ye.prototype.has=pe,ye.prototype.set=fe;var me=ye;var ve=function(){this.__data__=[],this.size=0};var Fe=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var n=e.length;n--;)if(Fe(e[n][0],t))return n;return-1},Be=Se,$e=Array.prototype.splice;var be=Se;var we=Se;var De=Se;var He=ve,_e=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=be(t,e);return n<0?void 0:t[n][1]},xe=function(e){return we(this.__data__,e)>-1},ke=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=He,Ee.prototype.delete=_e,Ee.prototype.get=ze,Ee.prototype.has=xe,Ee.prototype.set=ke;var Ce=Ee,Ae=ee(u,"Map"),We=me,Ne=Ce,Le=Ae;var Oe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Oe(t)?n["string"==typeof t?"string":"hash"]:n.map},Ve=je;var Re=je;var Te=je;var Ie=je;var Pe=function(){this.size=0,this.__data__={hash:new We,map:new(Le||Ne),string:new We}},Me=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Re(this,e).get(e)},Xe=function(e){return Te(this,e).has(e)},Ye=function(e,t){var n=Ie(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Pe,Ze.prototype.delete=Me,Ze.prototype.get=Ge,Ze.prototype.has=Xe,Ze.prototype.set=Ye;var Ue=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(qe.Cache||Ue),n}qe.Cache=Ue;var Je=qe;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=function(e){var t=Je(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ke,(function(e,n,r,a){t.push(r?a.replace(Qe,"$1"):n||e)})),t}));var tt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},nt=h,rt=_,at=s?s.prototype:void 0,it=at?at.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(nt(t))return tt(t,e)+"";if(rt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=ot;var ct=h,ht=C,dt=et,gt=function(e){return null==e?"":lt(e)};var ut=_;var st=function(e,t){return ct(e)?e:ht(e,t)?[e]:dt(gt(e))},pt=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ft=function(e,t){for(var n=0,r=(t=st(t,e)).length;null!=e&&n<r;)e=e[pt(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:ft(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var Ft;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Ft||(Ft={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=vt(St,n[Ft.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},$t={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")}}},bt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},wt={collections:{base:{D1:{fontFamily:bt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=vt(wt,n[Ft.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},Ht={D1:{fontFamily:Dt("D1.fontFamily"),fontSize:Dt("D1.fontSize"),fontWeight:Dt("D1.fontWeight"),lineHeight:Dt("D1.lineHeight"),letterSpacing:Dt("D1.letterSpacing")},D2:{fontFamily:Dt("D2.fontFamily"),fontSize:Dt("D2.fontSize"),fontWeight:Dt("D2.fontWeight"),lineHeight:Dt("D2.lineHeight"),letterSpacing:Dt("D2.letterSpacing")},D3:{fontFamily:Dt("D3.fontFamily"),fontSize:Dt("D3.fontSize"),fontWeight:Dt("D3.fontWeight"),lineHeight:Dt("D3.lineHeight"),letterSpacing:Dt("D3.letterSpacing")},D4:{fontFamily:Dt("D4.fontFamily"),fontSize:Dt("D4.fontSize"),fontWeight:Dt("D4.fontWeight"),lineHeight:Dt("D4.lineHeight"),letterSpacing:Dt("D4.letterSpacing")},DBody:{fontFamily:Dt("DBody.fontFamily"),fontSize:Dt("DBody.fontSize"),fontWeight:Dt("DBody.fontWeight"),lineHeight:Dt("DBody.lineHeight"),letterSpacing:Dt("DBody.letterSpacing")},H1:{fontFamily:Dt("H1.fontFamily"),fontSize:Dt("H1.fontSize"),fontWeight:Dt("H1.fontWeight"),lineHeight:Dt("H1.lineHeight"),letterSpacing:Dt("H1.letterSpacing")},H2:{fontFamily:Dt("H2.fontFamily"),fontSize:Dt("H2.fontSize"),fontWeight:Dt("H2.fontWeight"),lineHeight:Dt("H2.lineHeight"),letterSpacing:Dt("H2.letterSpacing")},H3:{fontFamily:Dt("H3.fontFamily"),fontSize:Dt("H3.fontSize"),fontWeight:Dt("H3.fontWeight"),lineHeight:Dt("H3.lineHeight"),letterSpacing:Dt("H3.letterSpacing")},H4:{fontFamily:Dt("H4.fontFamily"),fontSize:Dt("H4.fontSize"),fontWeight:Dt("H4.fontWeight"),lineHeight:Dt("H4.lineHeight"),letterSpacing:Dt("H4.letterSpacing")},H5:{fontFamily:Dt("H5.fontFamily"),fontSize:Dt("H5.fontSize"),fontWeight:Dt("H5.fontWeight"),lineHeight:Dt("H5.lineHeight"),letterSpacing:Dt("H5.letterSpacing")},H6:{fontFamily:Dt("H6.fontFamily"),fontSize:Dt("H6.fontSize"),fontWeight:Dt("H6.fontWeight"),lineHeight:Dt("H6.lineHeight"),letterSpacing:Dt("H6.letterSpacing")},Body:{fontFamily:Dt("Body.fontFamily"),fontSize:Dt("Body.fontSize"),fontWeight:Dt("Body.fontWeight"),lineHeight:Dt("Body.lineHeight"),letterSpacing:Dt("Body.letterSpacing")},BodySmall:{fontFamily:Dt("BodySmall.fontFamily"),fontSize:Dt("BodySmall.fontSize"),fontWeight:Dt("BodySmall.fontWeight"),lineHeight:Dt("BodySmall.lineHeight"),letterSpacing:Dt("BodySmall.letterSpacing")},XSmall:{fontFamily:Dt("XSmall.fontFamily"),fontSize:Dt("XSmall.fontSize"),fontWeight:Dt("XSmall.fontWeight"),lineHeight:Dt("XSmall.lineHeight"),letterSpacing:Dt("XSmall.letterSpacing")}},_t=e=>{switch(e){case 700:case"bold":return bt.Bold;case 600:case"semibold":return bt.Semibold;case 300:case"light":return bt.Light;case 400:case"regular":return bt.Regular;default:return""}},zt=(e,t)=>n=>{const r=Ht[e].fontFamily(n),a=Ht[e].fontWeight(n);return Object.values(bt).includes(r)?o`
                font-family: ${_t(t)||_t(a)||r};
                font-weight: normal !important;
            `:o`
            font-family: ${r};
            font-weight: ${(xt(t)||a)??"normal"};
        `},xt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kt=(e,t,n=!1)=>r=>{const a=Ht[e],i=a.fontSize(r);return o`
            ${zt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Et=(e=!1,t=!1)=>t?o`
            display: block;
        `:e?o`
            display: inline;
        `:o`
            display: block;
        `,Ct=i.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${$t.Neutral[8]};
    }
`,At=t=>e(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("g",{fill:"none",fillRule:"evenodd",children:e("g",{id:"path",fillRule:"nonzero",children:e("g",{children:e("g",{children:e("g",{children:e("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Wt=t=>e(Ct,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Nt=t=>e(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Lt=t=>e(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...t,children:e("g",{id:"search",children:e("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Ot=i.span`
    font-size: 1rem;
`;var jt;!function(e){e.D1=i.h1`
        ${e=>o`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D2=i.h1`
        ${e=>o`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D3=i.h1`
        ${e=>o`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.D4=i.h1`
        ${e=>o`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.DBody=i.h1`
        ${e=>o`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H1=i.h1`
        ${e=>o`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H2=i.h2`
        ${e=>o`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H3=i.h3`
        ${e=>o`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H4=i.h4`
        ${e=>o`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H5=i.h5`
        ${e=>o`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.H6=i.h6`
        ${e=>o`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Body=i.p`
        ${e=>o`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=i.p`
        ${e=>o`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.XSmall=i.span`
        ${e=>o`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Et(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Tt({...e,textStyle:"Body"}),Small:e=>Tt({...e,textStyle:"BodySmall"})}}(jt||(jt={}));const Vt=i.a`
    ${e=>o`
            ${kt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};
            }
        `}
`,Rt=i((({type:t,...n})=>{switch(t){case"arrow-right":return e(At,{...n});case"info":return e(Wt,{...n});case"search":return e(Lt,{...n});case"play-alt":return e(Nt,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,a=n.className?`${r} ${n.className}`:r;return e(Ot,{...n,className:a})}}}))`
    margin-left: 0.4rem;
`,Tt=({external:n=!1,children:r,...a})=>t(Vt,{...a,children:[r,n&&e(Rt,{type:"external"})]}),It=i.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${$t.Neutral[5]};
    border-radius: 4px;
    background: ${$t.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${$t.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.disabled?o`
                background: ${$t.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${$t.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?o`
                border: 1px solid ${$t.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${$t.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Pt=i.div`
    position: absolute;
    top: 0;
    left: 1rem; // input value appears slightly right
    height: 100%;
    display: flex;
    align-items: center;

    // Removal of arrow buttons for Mozilla Firefox
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`,Mt=i.input`
    ${kt("Body","regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
    border: none;
    text-align: center;
    padding: 0;

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    :focus,
    :active {
        outline: none;
    }

    ${e=>{if(e.disabled)return o`
                cursor: not-allowed;
            `}}
`,Gt=i(Mt)`
    width: 2.6rem;
`,Xt=i(Mt)`
    width: 3.5rem;
`,Yt=i(jt.Body)`
    opacity: ${e=>e.$hide?0:1};
    margin: 0.1rem 0.2rem 0 0.2rem;
`;i(Yt)`
    /* margin: 0.1rem 0.2rem 0 0.4rem; */
    ${e=>{if(e.$compress)return o`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `}}
`;const Zt=i.div`
    display: flex;
    align-items: center;
`,Ut=i(jt.Body)`
    opacity: ${e=>e.$hide?0:1};
    color: ${$t.Neutral[3]};
    display: inline;
    width: 2.5rem;
    text-align: center;
`,qt=i(Yt)`
    color: ${$t.Neutral[3]};
`,Jt=i(Ut)`
    width: 2.6rem;
`,Kt=i(Ut)`
    width: 3.5rem;
`,Qt=({disabled:i,error:o,value:c,onChange:h,onBlur:d,...g})=>{const[u,s]=n(""),[p,f]=n(""),[y,m]=n(""),[v,F]=n("none"),S=r(null),B=r(null),$=r(null),b=r(null),w=r(u),D=r(p),H=r(y),_=r(v),z=e=>{w.current=e,s(e)},x=e=>{D.current=e,f(e)},k=e=>{H.current=e,m(e)},E=e=>{_.current=e,F(e)};a((()=>(document.addEventListener("mousedown",A),S.current&&S.current.addEventListener("keydown",W),B.current&&B.current.addEventListener("keydown",C),$.current&&$.current.addEventListener("keydown",C),b.current&&b.current.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",A),S.current&&S.current.removeEventListener("keydown",W),B.current&&B.current.removeEventListener("keydown",C),$.current&&$.current.removeEventListener("keydown",C),b.current&&b.current.removeEventListener("keydown",C)})),[v]),a((()=>{"day"===v&&2===u.length&&$.current&&$.current.focus()}),[u]),a((()=>{"month"===v&&2===p.length&&b.current&&b.current.focus()}),[p]),a((()=>{j(c)}),[c]);const C=e=>{const t=["Backspace","0","1","2","3","4","5","6","7","8","9"],n=e.code&&e.code.startsWith("Digit")&&!t.includes(e.key);(!["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight"].includes(e.code)&&!t.includes(e.key)||n)&&e.preventDefault()},A=e=>{i||S&&S.current.contains(e.target)||"none"!==_.current&&(E("none"),R())},W=e=>{"year"===e.target.name&&"Tab"===e.code&&(E("none"),R())},N=e=>{E(e.target.name),e.target.select()},L=e=>{switch(e.target.name){case"day":z(l.padValue(e.target.value,!0));break;case"month":x(l.padValue(e.target.value,!0))}},O=e=>{const t=e.target.name;switch(t){case"day":e.target.value.length<=2&&(z(e.target.value),V(e.target.value,t));break;case"month":e.target.value.length<=2&&(x(e.target.value),V(e.target.value,t));break;case"year":e.target.value.length<=4&&(k(e.target.value),V(e.target.value,t))}},j=e=>{if(void 0===e||""===e)z(""),x(""),k("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();z(l.padValue(e.toString())),x(l.padValue(n.toString())),k(r.toString())}}},V=(e,t)=>{if(h){const n={day:u,month:p,year:y};n[t]=e;const r=T(n);h(r)}},R=()=>{if(d){const e={day:w.current,month:D.current,year:H.current},t=T(e);d(t)}},T=e=>{const t=[e.year,e.month,e.day];return e.day.length>=1&&e.month.length>=1&&4===e.year.length?t.join("-"):t.every((e=>""===e))?"":en};return t(It,{ref:S,onClick:()=>{"none"===v&&B.current&&B.current.focus()},disabled:i,$error:o,"data-testid":g["data-testid"],children:[t(Zt,{children:[e(Ut,{$hide:"day"===v||u.length>0,"data-testid":"day-placeholder",children:"DD"}),e(qt,{$hide:u.length>0,children:"/"}),e(Jt,{$hide:"month"===v||p.length>0,"data-testid":"month-placeholder",children:"MM"}),e(qt,{$hide:p.length>0,children:"/"}),e(Kt,{$hide:"year"===v||y.length>0,"data-testid":"year-placeholder",$addGap:0===u.length&&0===y.length,children:"YYYY"})]}),t(Pt,{children:[e(Mt,{name:"day",maxLength:2,value:u,ref:B,onFocus:N,onBlur:L,onChange:O,disabled:i,type:"number",pattern:"[0-9]{2}","data-testid":"day-input","aria-label":"day-input"}),e(Yt,{$hide:0===u.length,children:"/"}),e(Gt,{name:"month",maxLength:2,value:p,ref:$,onFocus:N,onBlur:L,onChange:O,disabled:i,type:"number",pattern:"[0-9]{2}","data-testid":"month-input","aria-label":"month-input"}),e(Yt,{$hide:0===p.length,children:"/"}),e(Xt,{name:"year",maxLength:4,value:y,ref:b,onFocus:N,onBlur:L,onChange:O,disabled:i,type:"number",pattern:"[0-9]{4}","data-testid":"year-input","aria-label":"year-input"})]})]})},en="Invalid date";export{Qt as DateInput};
//# sourceMappingURL=index.js.map
