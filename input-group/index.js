import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useEffect as o,useState as a,useRef as s,forwardRef as l,useCallback as c,useContext as u,useMemo as d}from"react";import h,{css as p,keyframes as f}from"styled-components";import{unstable_batchedUpdates as g}from"react-dom";var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=Array.isArray,v="object"==typeof m&&m&&m.Object===Object&&m,b=v,w="object"==typeof self&&self&&self.Object===Object&&self,_=b||w||Function("return this")(),$=_.Symbol,x=$,S=Object.prototype,k=S.hasOwnProperty,F=S.toString,O=x?x.toStringTag:void 0;var j=function(e){var t=k.call(e,O),r=e[O];try{e[O]=void 0;var n=!0}catch(e){}var i=F.call(e);return n&&(t?e[O]=r:delete e[O]),i},B=Object.prototype.toString;var z=j,A=function(e){return B.call(e)},P=$?$.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":P&&P in Object(e)?z(e):A(e)};var N=function(e){return null!=e&&"object"==typeof e},D=C,E=N;var I=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==D(e)},H=y,M=I,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var T=function(e,t){if(H(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!M(e))||(R.test(e)||!V.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=C,q=L;var U,Q=function(e){if(!q(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=_["__core-js_shared__"],X=(U=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"";var Z=function(e){return!!X&&X in e},K=Function.prototype.toString;var Y=function(e){if(null!=e){try{return K.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=Q,ee=Z,te=L,re=Y,ne=/^\[object .+?Constructor\]$/,ie=Function.prototype,oe=Object.prototype,ae=ie.toString,se=oe.hasOwnProperty,le=RegExp("^"+ae.call(se).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ce=function(e){return!(!te(e)||ee(e))&&(J(e)?le:ne).test(re(e))},ue=function(e,t){return null==e?void 0:e[t]};var de=function(e,t){var r=ue(e,t);return ce(r)?r:void 0},he=de(Object,"create"),pe=he;var fe=function(){this.__data__=pe?pe(null):{},this.size=0};var ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},me=he,ye=Object.prototype.hasOwnProperty;var ve=function(e){var t=this.__data__;if(me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ye.call(t,e)?t[e]:void 0},be=he,we=Object.prototype.hasOwnProperty;var _e=he;var $e=fe,xe=ge,Se=ve,ke=function(e){var t=this.__data__;return be?void 0!==t[e]:we.call(t,e)},Fe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=_e&&void 0===t?"__lodash_hash_undefined__":t,this};function Oe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Oe.prototype.clear=$e,Oe.prototype.delete=xe,Oe.prototype.get=Se,Oe.prototype.has=ke,Oe.prototype.set=Fe;var je=Oe;var Be=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t},Ae=ze;var Pe=function(e,t){for(var r=e.length;r--;)if(Ae(e[r][0],t))return r;return-1},Ce=Pe,Ne=Array.prototype.splice;var De=Pe;var Ee=Pe;var Ie=Pe;var He=Be,Me=function(e){var t=this.__data__,r=Ce(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ne.call(t,r,1),--this.size,!0)},Ve=function(e){var t=this.__data__,r=De(t,e);return r<0?void 0:t[r][1]},Re=function(e){return Ee(this.__data__,e)>-1},Te=function(e,t){var r=this.__data__,n=Ie(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Le(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Le.prototype.clear=He,Le.prototype.delete=Me,Le.prototype.get=Ve,Le.prototype.has=Re,Le.prototype.set=Te;var We=Le,qe=de(_,"Map"),Ue=je,Qe=We,Ge=qe;var Xe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ze=function(e,t){var r=e.__data__;return Xe(t)?r["string"==typeof t?"string":"hash"]:r.map},Ke=Ze;var Ye=Ze;var Je=Ze;var et=Ze;var tt=function(){this.size=0,this.__data__={hash:new Ue,map:new(Ge||Qe),string:new Ue}},rt=function(e){var t=Ke(this,e).delete(e);return this.size-=t?1:0,t},nt=function(e){return Ye(this,e).get(e)},it=function(e){return Je(this,e).has(e)},ot=function(e,t){var r=et(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function at(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=rt,at.prototype.get=nt,at.prototype.has=it,at.prototype.set=ot;var st=at,lt=st;function ct(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ct.Cache||lt),r}ct.Cache=lt;var ut=ct;var dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ht=/\\(\\)?/g,pt=function(e){var t=ut(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(dt,(function(e,r,n,i){t.push(n?i.replace(ht,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},gt=y,mt=I,yt=$?$.prototype:void 0,vt=yt?yt.toString:void 0;var bt=function e(t){if("string"==typeof t)return t;if(gt(t))return ft(t,e)+"";if(mt(t))return vt?vt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},wt=bt;var _t=y,$t=T,xt=pt,St=function(e){return null==e?"":wt(e)};var kt=function(e,t){return _t(e)?e:$t(e,t)?[e]:xt(St(e))},Ft=I;var Ot=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},jt=kt,Bt=Ot;var zt=function(e,t){for(var r=0,n=(t=jt(t,e)).length;null!=e&&r<n;)e=e[Bt(t[r++])];return r&&r==n?e:void 0},At=zt;var Pt=function(e,t,r){var n=null==e?void 0:At(e,t);return void 0===n?r:n};const Ct=(e,t,r)=>t?Pt(r,t)||Pt(e,t):r||e,Nt=(e,t)=>{const r=t||e.defaultValue;return Pt(e.collections,r)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Dt||(Dt={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},It=e=>t=>{const r=t.theme,n=Nt(Et,r[Dt.colorScheme]);return r.options&&r.options.color?Ct(n,e,r.options.color):Ct(n,e)},Ht={Brand:{1:It("Brand.1"),2:It("Brand.2"),3:It("Brand.3"),4:It("Brand.4"),5:It("Brand.5"),6:It("Brand.6")},Primary:It("Primary"),PrimaryDark:It("PrimaryDark"),Secondary:It("Secondary"),Accent:{Light:{1:It("Accent.Light.1"),2:It("Accent.Light.2"),3:It("Accent.Light.3"),4:It("Accent.Light.4"),5:It("Accent.Light.5"),6:It("Accent.Light.6")},Dark:{1:It("Accent.Dark.1"),2:It("Accent.Dark.2"),3:It("Accent.Dark.3")}},Neutral:{1:It("Neutral.1"),2:It("Neutral.2"),3:It("Neutral.3"),4:It("Neutral.4"),5:It("Neutral.5"),6:It("Neutral.6"),7:It("Neutral.7"),8:It("Neutral.8")},Validation:{Green:{Text:It("Validation.Green.Text"),Icon:It("Validation.Green.Icon"),Border:It("Validation.Green.Border"),Background:It("Validation.Green.Background")},Orange:{Text:It("Validation.Orange.Text"),Icon:It("Validation.Orange.Icon"),Border:It("Validation.Orange.Border"),Background:It("Validation.Orange.Background"),Badge:It("Validation.Orange.Badge")},Red:{Text:It("Validation.Red.Text"),Icon:It("Validation.Red.Icon"),Border:It("Validation.Red.Border"),Background:It("Validation.Red.Background")}}},Mt=h.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${Ht.Neutral[8]};
    }
`,Vt=t=>e(Mt,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("g",{fill:"none",fillRule:"evenodd",children:e("g",{id:"path",fillRule:"nonzero",children:e("g",{children:e("g",{children:e("g",{children:e("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Rt=t=>e(Mt,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Tt=t=>e(Mt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Lt=t=>e(Mt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...t,children:e("g",{id:"search",children:e("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Wt=({type:t,...r})=>{switch(t){case"arrow-right":return e(Vt,{...r});case"info":return e(Rt,{...r});case"search":return e(Lt,{...r});case"play-alt":return e(Tt,{...r});default:{const n=`sgds-icon sgds-icon-${t}`,i=r.className?`${n} ${r.className}`:n;return e(qt,{...r,className:i})}}},qt=h.span`
    font-size: 1rem;
`;var Ut;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let i=0;t>r&&(i=Math.floor((t-r)/8));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Ut||(Ut={}));const Qt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Gt={collections:{base:{D1:{fontFamily:Qt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Qt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Qt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Qt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Qt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Qt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Qt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Qt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Qt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Qt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Qt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Qt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Qt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Qt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xt=e=>t=>{const r=t.theme,n=Nt(Gt,r[Dt.textStyleScheme]);return r.options&&r.options.textStyle?Ct(n,e,r.options.textStyle):Ct(n,e)},Zt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Kt=e=>{switch(e){case 700:case"bold":return Qt.Bold;case 600:case"semibold":return Qt.Semibold;case 300:case"light":return Qt.Light;case 400:case"regular":return Qt.Regular;default:return""}},Yt=(e,t)=>r=>{const n=Zt[e].fontFamily(r),i=Zt[e].fontWeight(r);return Object.values(Qt).includes(n)?p`
                font-family: ${Kt(t)||Kt(i)||n};
                font-weight: normal !important;
            `:p`
            font-family: ${n};
            font-weight: ${(Jt(t)||i)??"normal"};
        `},Jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},er=(e,t,r=!1)=>n=>{const i=Zt[e],o=i.fontSize(n);return p`
            ${Yt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${p`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},tr=(e=!1,t=!1)=>t?p`
            display: block;
        `:e?p`
            display: inline;
        `:p`
            display: block;
        `,rr=h.input`
    ${er("Body","regular")}
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${Ht.Neutral[8]};
    color: ${Ht.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ht.Neutral[3]};
    }

    ${e=>e.readOnly?p`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?p`
                background: ${Ht.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?p`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,nr=i.forwardRef((({value:t,spacing:r,type:n,error:i,disabled:o,onChange:a,...s},l)=>{const c=()=>"tel"===n&&r,u=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,a(e),t.value=r},d=t?(e=>e?c()?Ut.transformWithSpaces(e,r):e:"")(t):t;return e(rr,{"data-testid":"input",ref:l,disabled:o,value:d,error:i,onChange:a?e=>{c()?u(e):a(e)}:void 0,type:n,readOnly:"readonly"===n,...s})}));var ir;!function(e){e.D1=h.h1`
        ${e=>p`
                ${er("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.D2=h.h1`
        ${e=>p`
                ${er("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.D3=h.h1`
        ${e=>p`
                ${er("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.D4=h.h1`
        ${e=>p`
                ${er("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.DBody=h.h1`
        ${e=>p`
                ${er("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H1=h.h1`
        ${e=>p`
                ${er("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H2=h.h2`
        ${e=>p`
                ${er("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H3=h.h3`
        ${e=>p`
                ${er("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H4=h.h4`
        ${e=>p`
                ${er("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H5=h.h5`
        ${e=>p`
                ${er("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.H6=h.h6`
        ${e=>p`
                ${er("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.Body=h.p`
        ${e=>p`
                ${er("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=h.p`
        ${e=>p`
                ${er("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.XSmall=h.span`
        ${e=>p`
                ${er("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${tr(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>sr({...e,textStyle:"Body"}),Small:e=>sr({...e,textStyle:"BodySmall"})}}(ir||(ir={}));const or=h.a`
    ${e=>p`
            ${er(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};
            }
        `}
`,ar=h(Wt)`
    margin-left: 0.4rem;
`,sr=({external:r=!1,children:n,...i})=>t(or,{...i,children:[n,r&&e(ar,{type:"external"})]});var lr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(lr||(lr={}));const cr=h.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: 3rem;
    width: 100%;

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>"right"===e.$position?p`
                flex-direction: row-reverse;
            `:e.$readOnly?p`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?p`
                background: ${Ht.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?p`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,ur=h(nr)`
    // overwrite default styles
    background: transparent;
    border: none;
    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ${e=>"right"===e.$position?p`
                    padding: 0.2rem 0 0.3rem 1rem; // Input text appears lower hence the higher lower padding
                `:p`
                    padding: 0.2rem 1rem 0.3rem 0; // Input text appears lower hence the higher lower padding
                `}
`,dr=h.div`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;

    ${er("Body","regular")}
    color: ${Ht.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ht.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return p`
                color: ${Ht.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ht.Neutral[4](e)};
                    }
                }
            `}}
`;h(Wt)`
    padding-left: 0.5rem;
    color: ${Ht.Neutral[4]};
`;var hr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},pr=We;var fr=We,gr=qe,mr=st;var yr=We,vr=function(){this.__data__=new pr,this.size=0},br=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},wr=function(e){return this.__data__.get(e)},_r=function(e){return this.__data__.has(e)},$r=function(e,t){var r=this.__data__;if(r instanceof fr){var n=r.__data__;if(!gr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new mr(n)}return r.set(e,t),this.size=r.size,this};function xr(e){var t=this.__data__=new yr(e);this.size=t.size}xr.prototype.clear=vr,xr.prototype.delete=br,xr.prototype.get=wr,xr.prototype.has=_r,xr.prototype.set=$r;var Sr=xr;var kr=st,Fr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Or=function(e){return this.__data__.has(e)};function jr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new kr;++t<r;)this.add(e[t])}jr.prototype.add=jr.prototype.push=Fr,jr.prototype.has=Or;var Br=jr,zr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Ar=function(e,t){return e.has(t)};var Pr=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new Br:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=a?n(g,f,d,t,e,o):n(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!zr(t,(function(e,t){if(!Ar(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Cr=_.Uint8Array,Nr=ze,Dr=Pr,Er=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Ir=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Hr=$?$.prototype:void 0,Mr=Hr?Hr.valueOf:void 0;var Vr=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Cr(e),new Cr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Er;case"[object Set]":var l=1&n;if(s||(s=Ir),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=Dr(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Mr)return Mr.call(e)==Mr.call(t)}return!1};var Rr=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Tr=y;var Lr=function(e,t,r){var n=t(e);return Tr(e)?n:Rr(n,r(e))};var Wr=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},qr=function(){return[]},Ur=Object.prototype.propertyIsEnumerable,Qr=Object.getOwnPropertySymbols,Gr=Qr?function(e){return null==e?[]:(e=Object(e),Wr(Qr(e),(function(t){return Ur.call(e,t)})))}:qr;var Xr=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Zr=C,Kr=N;var Yr=function(e){return Kr(e)&&"[object Arguments]"==Zr(e)},Jr=N,en=Object.prototype,tn=en.hasOwnProperty,rn=en.propertyIsEnumerable,nn=Yr(function(){return arguments}())?Yr:function(e){return Jr(e)&&tn.call(e,"callee")&&!rn.call(e,"callee")},on={exports:{}};var an=function(){return!1};!function(e,t){var r=_,n=an,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(on,on.exports);var sn=/^(?:0|[1-9]\d*)$/;var ln=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&sn.test(e))&&e>-1&&e%1==0&&e<t};var cn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},un=C,dn=cn,hn=N,pn={};pn["[object Float32Array]"]=pn["[object Float64Array]"]=pn["[object Int8Array]"]=pn["[object Int16Array]"]=pn["[object Int32Array]"]=pn["[object Uint8Array]"]=pn["[object Uint8ClampedArray]"]=pn["[object Uint16Array]"]=pn["[object Uint32Array]"]=!0,pn["[object Arguments]"]=pn["[object Array]"]=pn["[object ArrayBuffer]"]=pn["[object Boolean]"]=pn["[object DataView]"]=pn["[object Date]"]=pn["[object Error]"]=pn["[object Function]"]=pn["[object Map]"]=pn["[object Number]"]=pn["[object Object]"]=pn["[object RegExp]"]=pn["[object Set]"]=pn["[object String]"]=pn["[object WeakMap]"]=!1;var fn=function(e){return hn(e)&&dn(e.length)&&!!pn[un(e)]};var gn=function(e){return function(t){return e(t)}},mn={exports:{}};!function(e,t){var r=v,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(mn,mn.exports);var yn=fn,vn=gn,bn=mn.exports,wn=bn&&bn.isTypedArray,_n=wn?vn(wn):yn,$n=Xr,xn=nn,Sn=y,kn=on.exports,Fn=ln,On=_n,jn=Object.prototype.hasOwnProperty;var Bn=function(e,t){var r=Sn(e),n=!r&&xn(e),i=!r&&!n&&kn(e),o=!r&&!n&&!i&&On(e),a=r||n||i||o,s=a?$n(e.length,String):[],l=s.length;for(var c in e)!t&&!jn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Fn(c,l))||s.push(c);return s},zn=Object.prototype;var An=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||zn)};var Pn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Cn=An,Nn=Pn,Dn=Object.prototype.hasOwnProperty;var En=Q,In=cn;var Hn=Bn,Mn=function(e){if(!Cn(e))return Nn(e);var t=[];for(var r in Object(e))Dn.call(e,r)&&"constructor"!=r&&t.push(r);return t},Vn=function(e){return null!=e&&In(e.length)&&!En(e)};var Rn=function(e){return Vn(e)?Hn(e):Mn(e)},Tn=Lr,Ln=Gr,Wn=Rn;var qn=function(e){return Tn(e,Wn,Ln)},Un=Object.prototype.hasOwnProperty;var Qn=function(e,t,r,n,i,o){var a=1&r,s=qn(e),l=s.length;if(l!=qn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Un.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(e),o.delete(t),p},Gn=de(_,"DataView"),Xn=qe,Zn=de(_,"Promise"),Kn=de(_,"Set"),Yn=de(_,"WeakMap"),Jn=C,ei=Y,ti=ei(Gn),ri=ei(Xn),ni=ei(Zn),ii=ei(Kn),oi=ei(Yn),ai=Jn;(Gn&&"[object DataView]"!=ai(new Gn(new ArrayBuffer(1)))||Xn&&"[object Map]"!=ai(new Xn)||Zn&&"[object Promise]"!=ai(Zn.resolve())||Kn&&"[object Set]"!=ai(new Kn)||Yn&&"[object WeakMap]"!=ai(new Yn))&&(ai=function(e){var t=Jn(e),r="[object Object]"==t?e.constructor:void 0,n=r?ei(r):"";if(n)switch(n){case ti:return"[object DataView]";case ri:return"[object Map]";case ni:return"[object Promise]";case ii:return"[object Set]";case oi:return"[object WeakMap]"}return t});var si=Sr,li=Pr,ci=Vr,ui=Qn,di=ai,hi=y,pi=on.exports,fi=_n,gi="[object Object]",mi=Object.prototype.hasOwnProperty;var yi=function(e,t,r,n,i,o){var a=hi(e),s=hi(t),l=a?"[object Array]":di(e),c=s?"[object Array]":di(t),u=(l="[object Arguments]"==l?gi:l)==gi,d=(c="[object Arguments]"==c?gi:c)==gi,h=l==c;if(h&&pi(e)){if(!pi(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new si),a||fi(e)?li(e,t,r,n,i,o):ci(e,t,l,r,n,i,o);if(!(1&r)){var p=u&&mi.call(e,"__wrapped__"),f=d&&mi.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new si),i(g,m,r,n,o)}}return!!h&&(o||(o=new si),ui(e,t,r,n,i,o))},vi=N;var bi=function e(t,r,n,i,o){return t===r||(null==t||null==r||!vi(t)&&!vi(r)?t!=t&&r!=r:yi(t,r,n,i,e,o))},wi=Sr,_i=bi;var $i=L;var xi=function(e){return e==e&&!$i(e)},Si=xi,ki=Rn;var Fi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Oi=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new wi;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?_i(u,c,3,n,d):h))return!1}}return!0},ji=function(e){for(var t=ki(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Si(i)]}return t},Bi=Fi;var zi=kt,Ai=nn,Pi=y,Ci=ln,Ni=cn,Di=Ot;var Ei=function(e,t){return null!=e&&t in Object(e)},Ii=function(e,t,r){for(var n=-1,i=(t=zi(t,e)).length,o=!1;++n<i;){var a=Di(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ni(i)&&Ci(a,i)&&(Pi(e)||Ai(e))};var Hi=bi,Mi=Pt,Vi=function(e,t){return null!=e&&Ii(e,t,Ei)},Ri=T,Ti=xi,Li=Fi,Wi=Ot;var qi=zt;var Ui=function(e){return function(t){return null==t?void 0:t[e]}},Qi=function(e){return function(t){return qi(t,e)}},Gi=T,Xi=Ot;var Zi=function(e){var t=ji(e);return 1==t.length&&t[0][2]?Bi(t[0][0],t[0][1]):function(r){return r===e||Oi(r,e,t)}},Ki=function(e,t){return Ri(e)&&Ti(t)?Li(Wi(e),t):function(r){var n=Mi(r,e);return void 0===n&&n===t?Vi(r,e):Hi(t,n,3)}},Yi=function(e){return e},Ji=y,eo=function(e){return Gi(e)?Ui(Xi(e)):Qi(e)};var to=/\s/;var ro=function(e){for(var t=e.length;t--&&to.test(e.charAt(t)););return t},no=/^\s+/;var io=function(e){return e?e.slice(0,ro(e)+1).replace(no,""):e},oo=L,ao=I,so=/^[-+]0x[0-9a-f]+$/i,lo=/^0b[01]+$/i,co=/^0o[0-7]+$/i,uo=parseInt;var ho=function(e){if("number"==typeof e)return e;if(ao(e))return NaN;if(oo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=io(e);var r=lo.test(e);return r||co.test(e)?uo(e.slice(2),r?2:8):so.test(e)?NaN:+e};var po=function(e){return e?Infinity===(e=ho(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fo=hr,go=function(e){return"function"==typeof e?e:null==e?Yi:"object"==typeof e?Ji(e)?Ki(e[0],e[1]):Zi(e):eo(e)},mo=function(e){var t=po(e),r=t%1;return t==t?r?t-r:t:0},yo=Math.max;var vo=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:mo(r);return i<0&&(i=yo(n+i,0)),fo(e,go(t),i)},bo={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wo=i.createContext&&i.createContext(bo),_o=function(){return _o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},_o.apply(this,arguments)},$o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};function xo(e){return e&&e.map((function(e,t){return i.createElement(e.tag,_o({key:t},e.attr),xo(e.child))}))}function So(e){return function(t){return i.createElement(ko,_o({attr:_o({},e.attr)},t),xo(e.child))}}function ko(e){var t=function(t){var r,n=e.attr,o=e.size,a=e.title,s=$o(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",_o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:_o(_o({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),e.children)};return void 0!==wo?i.createElement(wo.Consumer,null,(function(e){return t(e)})):t(bo)}function Fo(e){return So({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"}}]})(e)}let Oo=Lo();const jo=e=>Mo(e,Oo);let Bo=Lo();jo.write=e=>Mo(e,Bo);let zo=Lo();jo.onStart=e=>Mo(e,zo);let Ao=Lo();jo.onFrame=e=>Mo(e,Ao);let Po=Lo();jo.onFinish=e=>Mo(e,Po);let Co=[];jo.setTimeout=(e,t)=>{let r=jo.now()+t,n=()=>{let e=Co.findIndex((e=>e.cancel==n));~e&&Co.splice(e,1),Io-=~e?1:0},i={time:r,handler:e,cancel:n};return Co.splice(No(r),0,i),Io+=1,Vo(),i};let No=e=>~(~Co.findIndex((t=>t.time>e))||~Co.length);jo.cancel=e=>{zo.delete(e),Ao.delete(e),Oo.delete(e),Bo.delete(e),Po.delete(e)},jo.sync=e=>{Ho=!0,jo.batchedUpdates(e),Ho=!1},jo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,jo.onStart(r)}return n.handler=e,n.cancel=()=>{zo.delete(r),t=null},n};let Do="undefined"!=typeof window?window.requestAnimationFrame:()=>{};jo.use=e=>Do=e,jo.now="undefined"!=typeof performance?()=>performance.now():Date.now,jo.batchedUpdates=e=>e(),jo.catch=console.error,jo.frameLoop="always",jo.advance=()=>{"demand"!==jo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):To()};let Eo=-1,Io=0,Ho=!1;function Mo(e,t){Ho?(t.delete(e),e(0)):(t.add(e),Vo())}function Vo(){Eo<0&&(Eo=0,"demand"!==jo.frameLoop&&Do(Ro))}function Ro(){~Eo&&(Do(Ro),jo.batchedUpdates(To))}function To(){let e=Eo;Eo=jo.now();let t=No(Eo);t&&(Wo(Co.splice(0,t),(e=>e.handler())),Io-=t),zo.flush(),Oo.flush(e?Math.min(64,Eo-e):16.667),Ao.flush(),Bo.flush(),Po.flush(),Io||(Eo=-1)}function Lo(){let e=new Set,t=e;return{add(r){Io+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Io-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Io-=t.size,Wo(t,(t=>t(r)&&e.add(t))),Io+=e.size,t=e)}}}function Wo(e,t){e.forEach((e=>{try{t(e)}catch(e){jo.catch(e)}}))}function qo(){}const Uo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Qo(e,t){if(Uo.arr(e)){if(!Uo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Go=(e,t)=>e.forEach(t);function Xo(e,t,r){if(Uo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Zo=e=>Uo.und(e)?[]:Uo.arr(e)?e:[e];function Ko(e,t){if(e.size){const r=Array.from(e);e.clear(),Go(r,t)}}const Yo=(e,...t)=>Ko(e,(e=>e(...t))),Jo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ea,ta,ra=null,na=!1,ia=qo;var oa=Object.freeze({__proto__:null,get createStringInterpolator(){return ea},get to(){return ta},get colors(){return ra},get skipAnimation(){return na},get willAdvance(){return ia},assign:e=>{e.to&&(ta=e.to),e.now&&(jo.now=e.now),void 0!==e.colors&&(ra=e.colors),null!=e.skipAnimation&&(na=e.skipAnimation),e.createStringInterpolator&&(ea=e.createStringInterpolator),e.requestAnimationFrame&&jo.use(e.requestAnimationFrame),e.batchedUpdates&&(jo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ia=e.willAdvance),e.frameLoop&&(jo.frameLoop=e.frameLoop)}});const aa=new Set;let sa=[],la=[],ca=0;const ua={get idle(){return!aa.size&&!sa.length},start(e){ca>e.priority?(aa.add(e),jo.onStart(da)):(ha(e),jo(fa))},advance:fa,sort(e){if(ca)jo.onFrame((()=>ua.sort(e)));else{const t=sa.indexOf(e);~t&&(sa.splice(t,1),pa(e))}},clear(){sa=[],aa.clear()}};function da(){aa.forEach(ha),aa.clear(),jo(fa)}function ha(e){sa.includes(e)||pa(e)}function pa(e){sa.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(sa,(t=>t.priority>e.priority)),0,e)}function fa(e){const t=la;for(let r=0;r<sa.length;r++){const n=sa[r];ca=n.priority,n.idle||(ia(n),n.advance(e),n.idle||t.push(n))}return ca=0,la=sa,la.length=0,sa=t,sa.length>0}const ga="[-+]?\\d*\\.?\\d+";function ma(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ya=new RegExp("rgb"+ma(ga,ga,ga)),va=new RegExp("rgba"+ma(ga,ga,ga,ga)),ba=new RegExp("hsl"+ma(ga,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),wa=new RegExp("hsla"+ma(ga,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",ga)),_a=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$a=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xa=/^#([0-9a-fA-F]{6})$/,Sa=/^#([0-9a-fA-F]{8})$/;function ka(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Fa(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=ka(i,n,e+1/3),a=ka(i,n,e),s=ka(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Oa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ja(e){return(parseFloat(e)%360+360)%360/360}function Ba(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function za(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Aa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xa.exec(e))?parseInt(t[1]+"ff",16)>>>0:ra&&void 0!==ra[e]?ra[e]:(t=ya.exec(e))?(Oa(t[1])<<24|Oa(t[2])<<16|Oa(t[3])<<8|255)>>>0:(t=va.exec(e))?(Oa(t[1])<<24|Oa(t[2])<<16|Oa(t[3])<<8|Ba(t[4]))>>>0:(t=_a.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Sa.exec(e))?parseInt(t[1],16)>>>0:(t=$a.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ba.exec(e))?(255|Fa(ja(t[1]),za(t[2]),za(t[3])))>>>0:(t=wa.exec(e))?(Fa(ja(t[1]),za(t[2]),za(t[3]))|Ba(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Pa=(e,t,r)=>{if(Uo.fun(e))return e;if(Uo.arr(e))return Pa({range:e,output:t,extrapolate:r});if(Uo.str(e.output[0]))return ea(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};function Ca(){return Ca=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ca.apply(this,arguments)}const Na=Symbol.for("FluidValue.get"),Da=Symbol.for("FluidValue.observers"),Ea=e=>Boolean(e&&e[Na]),Ia=e=>e&&e[Na]?e[Na]():e,Ha=e=>e[Da]||null;function Ma(e,t){let r=e[Da];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Va{constructor(e){if(this[Na]=void 0,this[Da]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ra(this,e)}}const Ra=(e,t)=>Wa(e,Na,t);function Ta(e,t){if(e[Na]){let r=e[Da];r||Wa(e,Da,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function La(e,t){let r=e[Da];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Da]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Wa=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),qa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ua=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Qa=new RegExp(`(${qa.source})(%|[a-z]+)`,"i"),Ga=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Xa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Za=e=>{const[t,r]=Ka(e);if(!t||Jo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Xa.test(r)?Za(r):r||e},Ka=e=>{const t=Xa.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let Ya;const Ja=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,es=e=>{Ya||(Ya=ra?new RegExp(`(${Object.keys(ra).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ia(e).replace(Xa,Za).replace(Ua,Aa).replace(Ya,Aa))),r=t.map((e=>e.match(qa).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Pa(Ca({},e,{output:t}))));return e=>{var r;const i=!Qa.test(t[0])&&(null==(r=t.find((e=>Qa.test(e))))?void 0:r.replace(qa,""));let o=0;return t[0].replace(qa,(()=>`${n[o++](e)}${i||""}`)).replace(Ga,Ja)}},ts="react-spring: ",rs=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ts}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ns=rs(console.warn);const is=rs(console.warn);function os(e){return Uo.str(e)&&("#"==e[0]||/\d/.test(e)||!Jo()&&Xa.test(e)||e in(ra||{}))}const as="undefined"!=typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect;function ss(){const e=a()[1],t=(()=>{const e=s(!1);return as((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}const ls=e=>o(e,cs),cs=[];function us(e){const t=s();return o((()=>{t.current=e})),t.current}const ds=Symbol.for("Animated:node"),hs=e=>e&&e[ds],ps=(e,t)=>{return r=e,n=ds,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},fs=e=>e&&e[ds]&&e[ds].getPayload();class gs{constructor(){this.payload=void 0,ps(this,this)}getPayload(){return this.payload||[]}}class ms extends gs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Uo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ms(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Uo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Uo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ys extends ms{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Pa({output:[e,e]})}static create(e){return new ys(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Uo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Pa({output:[this.getValue(),e]})),this._value=0,super.reset()}}const vs={dependencies:null};class bs extends gs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Xo(this.source,((r,n)=>{var i;(i=r)&&i[ds]===i?t[n]=r.getValue(e):Ea(r)?t[n]=Ia(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Go(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Xo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){vs.dependencies&&Ea(e)&&vs.dependencies.add(e);const t=fs(e);t&&Go(t,(e=>this.add(e)))}}class ws extends bs{constructor(e){super(e)}static create(e){return new ws(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(_s)),!0)}}function _s(e){return(os(e)?ys:ms).create(e)}function $s(e){const t=hs(e);return t?t.constructor:Uo.arr(e)?ws:os(e)?ys:ms}function xs(){return xs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xs.apply(this,arguments)}const Ss=(e,t)=>{const r=!Uo.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((i,a)=>{const l=s(null),u=r&&c((e=>{l.current=function(e,t){e&&(Uo.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const r=new Set;vs.dependencies=r,e.style&&(e=xs({},e,{style:t.createAnimatedStyle(e.style)}));return e=new bs(e),vs.dependencies=null,[e,r]}(i,t),p=ss(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new ks(f,h),m=s();as((()=>(m.current=g,Go(h,(e=>Ta(e,g))),()=>{m.current&&(Go(m.current.deps,(e=>La(e,m.current))),jo.cancel(m.current.update))}))),o(f,[]),ls((()=>()=>{const e=m.current;Go(e.deps,(t=>La(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,xs({},y,{ref:u}))}))};class ks{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&jo.write(this.update)}}const Fs=Symbol.for("AnimatedComponent"),Os=e=>Uo.str(e)?e:e&&Uo.str(e.displayName)?e.displayName:Uo.fun(e)&&e.name||null;function js(){return js=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},js.apply(this,arguments)}function Bs(e,...t){return Uo.fun(e)?e(...t):e}const zs=(e,t)=>!0===e||!!(t&&e&&(Uo.fun(e)?e(t):Zo(e).includes(t))),As=(e,t)=>Uo.obj(e)?t&&e[t]:e,Ps=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Cs=e=>e,Ns=(e,t=Cs)=>{let r=Ds;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Uo.und(r)||(n[i]=r)}return n},Ds=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Es={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Is(e){const t=function(e){const t={};let r=0;if(Xo(e,((e,n)=>{Es[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Xo(e,((e,n)=>n in t||(r[n]=e))),r}return js({},e)}function Hs(e){return e=Ia(e),Uo.arr(e)?e.map(Hs):os(e)?oa.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ms(e){for(const t in e)return!0;return!1}function Vs(e){return Uo.fun(e)||Uo.arr(e)&&Uo.obj(e[0])}function Rs(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}function Ts(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}const Ls=1.70158,Ws=1.525*Ls,qs=2*Math.PI/3,Us=2*Math.PI/4.5,Qs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Gs=js({},{tension:170,friction:26},{mass:1,damping:1,easing:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>2.70158*e*e*e-Ls*e*e,easeOutBack:e=>1+2.70158*Math.pow(e-1,3)+Ls*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ws)/2:(Math.pow(2*e-2,2)*((Ws+1)*(2*e-2)+Ws)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*qs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*qs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Us)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Us)/2+1,easeInBounce:e=>1-Qs(1-e),easeOutBounce:Qs,easeInOutBounce:e=>e<.5?(1-Qs(1-2*e))/2:(1+Qs(2*e-1))/2}.linear,clamp:!1});class Xs{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Gs)}}function Zs(e,t){if(Uo.und(t.decay)){const r=!Uo.und(t.tension)||!Uo.und(t.friction);!r&&Uo.und(t.frequency)&&Uo.und(t.damping)&&Uo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const Ks=[];class Ys{constructor(){this.changed=!1,this.values=Ks,this.toValues=null,this.fromValues=Ks,this.to=void 0,this.from=void 0,this.config=new Xs,this.immediate=!1}}function Js(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=zs(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)f();else{Uo.und(r.pause)||(i.paused=zs(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||zs(e,t)),c=Bs(r.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-jo.now()}function p(){c>0&&!oa.skipAnimation?(i.delayed=!0,u=jo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(js({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const el=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?nl(e.get()):t.every((e=>e.noop))?tl(e.get()):rl(e.get(),t.every((e=>e.finished))),tl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),nl=e=>({value:e,cancelled:!0,finished:!1});function il(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Ns(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(r.cancelId||0)&&nl(n)||i!==r.asyncId&&rl(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new al,a=new sl;return(async()=>{if(oa.skipAnimation)throw ol(r),a.result=rl(n,!1),d(a),a;p(o);const s=Uo.obj(e)?js({},e):js({},t,{to:e});s.parentId=i,Xo(c,((e,t)=>{Uo.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(oa.skipAnimation)return ol(r),rl(n,!1);try{let t;t=Uo.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=rl(n.get(),!0,!1)}catch(e){if(e instanceof al)g=e.result;else{if(!(e instanceof sl))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Uo.fun(a)&&jo.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function ol(e,t){Ko(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class al extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class sl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ll=e=>e instanceof ul;let cl=1;class ul extends Va{constructor(...e){super(...e),this.id=cl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=hs(this);return e&&e.getValue()}to(...e){return oa.to(this,e)}interpolate(...e){return ns(`${ts}The "interpolate" function is deprecated in v9 (use "to" instead)`),oa.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ma(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ua.sort(this),Ma(this,{type:"priority",parent:this,priority:e})}}const dl=Symbol.for("SpringPhase"),hl=e=>(1&e[dl])>0,pl=e=>(2&e[dl])>0,fl=e=>(4&e[dl])>0,gl=(e,t)=>t?e[dl]|=3:e[dl]&=-3,ml=(e,t)=>t?e[dl]|=4:e[dl]&=-5;class yl extends ul{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ys,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Uo.und(e)||!Uo.und(t)){const r=Uo.obj(e)?js({},e):js({},t,{from:e});Uo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(pl(this)||this._state.asyncTo)||fl(this)}get goal(){return Ia(this.animation.to)}get velocity(){const e=hs(this);return e instanceof ms?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hl(this)}get isAnimating(){return pl(this)}get isPaused(){return fl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=fs(n.to);!a&&Ea(n.to)&&(o=Zo(Ia(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ys?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Uo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;if(Uo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<.1,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r))),n=i.restVelocity||t/10,l=i.clamp?0:i.bounce,h=!Uo.und(l),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>n,f||(u=Math.abs(c-d)<=t,!u));++e){h&&(g=d==c||d>c==p,g&&(a=-a*l,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=hs(this),l=s.getValue();if(t){const e=Ia(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return jo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(pl(this)){const{to:e,config:t}=this.animation;jo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Uo.und(e)?(r=this.queue||[],this.queue=[]):r=[Uo.obj(e)?e:js({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>el(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ol(this._state,e&&this._lastCallId),jo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Uo.obj(r)?r[t]:r,(null==r||Vs(r))&&(r=void 0),n=Uo.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return hl(this)||(e.reverse&&([r,n]=[n,r]),n=Ia(n),Uo.und(n)?hs(this)||this._set(r):this._set(n)),i}_update(e,t){let r=js({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Ns(r,((e,t)=>/^on/.test(t)?As(e,n):e))),Sl(this,r,"onProps"),kl(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Js(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{fl(this)||(ml(this,!0),Yo(a.pauseQueue),kl(this,"onPause",rl(this,vl(this,this.animation.to)),this))},resume:()=>{fl(this)&&(ml(this,!1),pl(this)&&this._resume(),Yo(a.resumeQueue),kl(this,"onResume",rl(this,vl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=bl(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(nl(this));const n=!Uo.und(e.to),i=!Uo.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(nl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Uo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Qo(d,c);h&&(s.from=d),d=Ia(d);const p=!Qo(u,l);p&&this._focus(u);const f=Vs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(Zs(r=js({},r),t),t=js({},r,t)),Zs(e,t),Object.assign(e,t);for(const t in Gs)null==e[t]&&(e[t]=Gs[t]);let{mass:n,frequency:i,damping:o}=e;Uo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(g,Bs(t.config,o),t.config!==a.config?Bs(a.config,o):void 0);let v=hs(this);if(!v||Uo.und(u))return r(rl(this,!0));const b=Uo.und(t.reset)?i&&!t.default:!Uo.und(d)&&zs(t.reset,o),w=b?d:this.get(),_=Hs(u),$=Uo.num(_)||Uo.arr(_)||os(_),x=!f&&(!$||zs(a.immediate||t.immediate,o));if(p){const e=$s(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(_)}}const S=v.constructor;let k=Ea(u),F=!1;if(!k){const e=b||!hl(this)&&h;(p||e)&&(F=Qo(Hs(w),_),k=!F),(Qo(s.immediate,x)||x)&&Qo(g.decay,m)&&Qo(g.velocity,y)||(k=!0)}if(F&&pl(this)&&(s.changed&&!b?k=!0:k||this._stop(l)),!f&&((k||Ea(l))&&(s.values=v.getPayload(),s.toValues=Ea(u)?null:S==ys?[1]:Zo(_)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),k)){const{onRest:e}=s;Go(xl,(e=>Sl(this,t,e)));const n=rl(this,vl(this,l));Yo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&jo.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?Bs(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set(w),f?r(il(t.to,t,this._state,this)):k?this._start():pl(this)&&!p?this._pendingCalls.add(r):r(tl(w))}_focus(e){const t=this.animation;e!==t.to&&(Ha(this)&&this._detach(),t.to=e,Ha(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ea(t)&&(Ta(t,this),ll(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ea(e)&&La(e,this)}_set(e,t=!0){const r=Ia(e);if(!Uo.und(r)){const e=hs(this);if(!e||!Qo(r,e.getValue())){const n=$s(r);e&&e.constructor==n?e.setValue(r):ps(this,n.create(r)),e&&jo.batchedUpdates((()=>{this._onChange(r,t)}))}}return hs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,kl(this,"onStart",rl(this,vl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Bs(this.animation.onChange,e,this)),Bs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;hs(this).reset(Ia(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),pl(this)||(gl(this,!0),fl(this)||this._resume())}_resume(){oa.skipAnimation?this.finish():ua.start(this)}_stop(e,t){if(pl(this)){gl(this,!1);const r=this.animation;Go(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ma(this,{type:"idle",parent:this});const n=t?nl(this.get()):rl(this.get(),vl(this,null!=e?e:r.to));Yo(this._pendingCalls,n),r.changed&&(r.changed=!1,kl(this,"onRest",n,this))}}}function vl(e,t){const r=Hs(t);return Qo(Hs(e.get()),r)}function bl(e,t=e.loop,r=e.to){let n=Bs(t);if(n){const i=!0!==n&&Is(n),o=(i||e).reverse,a=!i||i.reset;return wl(js({},e,{loop:t,default:!1,pause:void 0,to:!o||Vs(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function wl(e){const{to:t,from:r}=e=Is(e),n=new Set;return Uo.obj(t)&&$l(t,n),Uo.obj(r)&&$l(r,n),e.keys=n.size?Array.from(n):null,e}function _l(e){const t=wl(e);return Uo.und(t.default)&&(t.default=Ns(t)),t}function $l(e,t){Xo(e,((e,r)=>null!=e&&t.add(r)))}const xl=["onStart","onRest","onChange","onPause","onResume"];function Sl(e,t,r){e.animation[r]=t[r]!==Ps(t,r)?As(t[r],e.key):void 0}function kl(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const Fl=["onStart","onChange","onRest"];let Ol=1;class jl{constructor(e,t){this.id=Ol++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(js({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Uo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(wl(e)),this}start(e){let{queue:t}=this;return e?t=Zo(e).map(wl):this.queue=[],this._flush?this._flush(this,t):(Dl(this,t),Bl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Go(Zo(t),(t=>r[t].stop(!!e)))}else ol(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Uo.und(e))this.start({pause:!0});else{const t=this.springs;Go(Zo(e),(e=>t[e].pause()))}return this}resume(e){if(Uo.und(e))this.start({pause:!1});else{const t=this.springs;Go(Zo(e),(e=>t[e].resume()))}return this}each(e){Xo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ko(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Ko(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ko(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}jo.onFrame(this._onFrame)}}function Bl(e,t){return Promise.all(t.map((t=>zl(e,t)))).then((t=>el(e,t)))}async function zl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Uo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Uo.arr(i)||Uo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Go(Fl,(r=>{const n=t[r];if(Uo.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Yo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Ps(t,"cancel");(u||p&&d.asyncId)&&h.push(Js(++e._lastAsyncId,{props:t,state:d,actions:{pause:qo,resume:qo,start(t,r){p?(ol(d,e._lastAsyncId),r(nl(e))):(t.onRest=s,r(il(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=el(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=bl(t,a,i);if(r)return Dl(e,[r]),zl(e,r,!0)}return l&&jo.batchedUpdates((()=>l(f,e,e.item))),f}function Al(e,t){const r=js({},e.springs);return t&&Go(Zo(t),(e=>{Uo.und(e.keys)&&(e=wl(e)),Uo.obj(e.to)||(e=js({},e,{to:void 0})),Nl(r,e,(e=>Cl(e)))})),Pl(e,r),r}function Pl(e,t){Xo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ta(t,e))}))}function Cl(e,t){const r=new yl;return r.key=e,t&&Ta(r,t),r}function Nl(e,t,r){t.keys&&Go(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Dl(e,t){Go(t,(t=>{Nl(e.springs,t,(t=>Cl(t,e)))}))}const El=["children"],Il=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,El);const i=u(Hl),l=r.pause||!!i.pause,c=r.immediate||!!i.immediate;r=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=s(),i=n.current;let l=i;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return o((()=>{n.current=l,i==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:d}=Hl;return n.createElement(d,{value:r},t)},Hl=(Ml=Il,Vl={},Object.assign(Ml,n.createContext(Vl)),Ml.Provider._context=Ml,Ml.Consumer._context=Ml,Ml);var Ml,Vl;Il.Provider=Hl.Provider,Il.Consumer=Hl.Consumer;const Rl=()=>{const e=[],t=function(t){is(`${ts}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Go(e,((e,i)=>{if(Uo.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Go(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Go(e,(e=>e.resume(...arguments))),this},t.set=function(t){Go(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Go(e,((e,n)=>{if(Uo.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Go(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Go(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Uo.fun(e)?e(r,t):e};return t._getProps=r,t};function Tl(e,t,r){const n=Uo.fun(t)&&t;n&&!r&&(r=[]);const i=d((()=>n||3==arguments.length?Rl():void 0),[]),o=s(0),a=ss(),l=d((()=>({ctrls:[],queue:[],flush(e,t){const r=Al(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Bl(e,t):new Promise((n=>{Pl(e,r),l.queue.push((()=>{n(Bl(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),h=[],p=us(e)||0;function f(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new jl(null,l.flush)),r=n?n(i,e):t[i];r&&(h[i]=_l(r))}}d((()=>{Go(c.current.slice(e,p),(e=>{Rs(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),d((()=>{f(0,Math.min(p,e))}),r);const g=c.current.map(((e,t)=>Al(e,h[t]))),m=u(Il),y=us(m),v=m!==y&&Ms(m);as((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Go(e,(e=>e()))),Go(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const r=h[t];r&&(Ts(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ls((()=>()=>{Go(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>js({},e)));return i?[b,i]:b}let Ll;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ll||(Ll={}));class Wl extends ul{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Pa(...t);const r=this._get(),n=$s(r);ps(this,n.create(r))}advance(e){const t=this._get();Qo(t,this.get())||(hs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ul(this._active)&&Ql(this)}_get(){const e=Uo.arr(this.source)?this.source.map(Ia):Zo(Ia(this.source));return this.calc(...e)}_start(){this.idle&&!Ul(this._active)&&(this.idle=!1,Go(fs(this),(e=>{e.done=!1})),oa.skipAnimation?(jo.batchedUpdates((()=>this.advance())),Ql(this)):ua.start(this))}_attach(){let e=1;Go(Zo(this.source),(t=>{Ea(t)&&Ta(t,this),ll(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Go(Zo(this.source),(e=>{Ea(e)&&La(e,this)})),this._active.clear(),Ql(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Zo(this.source).reduce(((e,t)=>Math.max(e,(ll(t)?t.priority:0)+1)),0))}}function ql(e){return!1!==e.idle}function Ul(e){return!e.size||Array.from(e).every(ql)}function Ql(e){e.idle||(e.idle=!0,Go(fs(e),(e=>{e.done=!0})),Ma(e,{type:"idle",parent:e}))}function Gl(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}oa.assign({createStringInterpolator:es,to:(e,t)=>new Wl(e,t)});const Xl=["style","children","scrollTop","scrollLeft"],Zl=/^--/;function Kl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Zl.test(e)||Jl.hasOwnProperty(e)&&Jl[e]?(""+t).trim():t+"px"}const Yl={};let Jl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ec=["Webkit","Ms","Moz","O"];Jl=Object.keys(Jl).reduce(((e,t)=>(ec.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Jl);const tc=["x","y","z"],rc=/^(matrix|translate|scale|rotate|skew)/,nc=/^(translate)/,ic=/^(rotate|skew)/,oc=(e,t)=>Uo.num(e)&&0!==e?e+t:e,ac=(e,t)=>Uo.arr(e)?e.every((e=>ac(e,t))):Uo.num(e)?e===t:parseFloat(e)===t;class sc extends bs{constructor(e){let{x:t,y:r,z:n}=e,i=Gl(e,tc);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>oc(e,"px"))).join(",")})`,ac(e,0)]))),Xo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(rc.test(t)){if(delete i[t],Uo.und(e))return;const r=nc.test(t)?"px":ic.test(t)?"deg":"";o.push(Zo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${oc(i,r)})`,ac(i,0)]:e=>[`${t}(${e.map((e=>oc(e,r))).join(",")})`,ac(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new lc(o,a)),super(i)}}class lc extends Va{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Go(this.inputs,((r,n)=>{const i=Ia(r[0]),[o,a]=this.transforms[n](Uo.arr(i)?i:r.map(Ia));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Go(this.inputs,(e=>Go(e,(e=>Ea(e)&&Ta(e,this)))))}observerRemoved(e){0==e&&Go(this.inputs,(e=>Go(e,(e=>Ea(e)&&La(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ma(this,e)}}const cc=["scrollTop","scrollLeft"];oa.assign({batchedUpdates:g,createStringInterpolator:es,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const uc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new bs(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Os(e)||"Anonymous";return(e=Uo.str(e)?o[e]||(o[e]=Ss(e,i)):e[Fs]||(e[Fs]=Ss(e,i))).displayName=`Animated(${t})`,e};return Xo(e,((t,r)=>{Uo.arr(e)&&(r=Os(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s}=n,l=Gl(n,Xl),c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Yl[t]||(Yl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=Kl(t,i[t]);Zl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s)},createAnimatedStyle:e=>new sc(e),getComponentProps:e=>Gl(e,cc)}),dc=uc.animated,hc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},pc=e=>Object.keys(hc).reduce(((t,r)=>{const n=hc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),fc=pc("max-width"),gc=(pc("min-width"),h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),mc=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,yc=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ht.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${mc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vc=h(yc)`
    animation-delay: -0.45s;
`,bc=h(yc)`
    animation-delay: -0.3s;
`,wc=h(yc)`
    animation-delay: -0.15s;
`;h.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Ht.Neutral[8](e)};
                    border: 1px solid ${Ht.Primary(e)};

                    span {
                        color: ${Ht.Primary(e)};
                    }
                `;case"light":return p`
                    background-color: ${Ht.Neutral[8](e)};
                    border: 1px solid ${Ht.Neutral[5](e)};

                    span {
                        color: ${Ht.Primary(e)};
                    }
                `;case"disabled":return p`
                    background-color: ${Ht.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ht.Neutral[3](e)};
                    }
                `;case"link":return p`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ht.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ht.Secondary};
                        }
                    }
                `;default:return p`
                    background-color: ${Ht.Primary(e)};
                    border: 1px solid transparent;

                    ${fc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ht.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?p`
                    height: 2.5rem;
                    span {
                        ${er("H5","semibold")}
                    }

                    ${fc.mobileS} {
                        height: auto;
                    }
                `:p`
                    height: 3rem;
                    span {
                        ${er("H4","semibold")}
                    }

                    ${fc.mobileS} {
                        height: auto;
                    }
                `}
`;const _c=h((({color:r,className:n,size:i=18})=>t(gc,{className:n,$size:i,$color:r,children:[e(yc,{id:"inner1",$size:i-2,$borderWidth:2}),e(vc,{id:"inner2",$size:i-2,$borderWidth:2}),e(bc,{id:"inner3",$size:i-2,$borderWidth:2}),e(wc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ht.Primary(e);break;case"disabled":t=Ht.Neutral[3](e);break;default:t=Ht.Neutral[8](e)}return p`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,$c=h.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return p`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Ht.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Ht.Primary(e),r=Ht.Primary(e)),e.disabled&&(t=Ht.Neutral[6](e),r=Ht.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,xc=h.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Sc=h(Wt)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.3rem";else t="1.5rem";return p`
            font-size: ${t};
        `}}
    font-weight: bold;
    color: ${e=>e.disabled?Ht.Neutral[4]:Ht.Neutral[8]};
`,kc=h(dc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Fc=h.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ht.Neutral[4]};
        border-right: 5px solid ${Ht.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${fc.mobileL} {
        max-height: 15rem;
    }
`,Oc=h.li`
    :hover,
    :focus,
    :active {
        background: ${Ht.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return p`
                background: ${Ht.Accent.Light[5]};
            `}}
`,jc=h.button`
    display: flex;
    ${e=>e.multiSelect?p`
                padding: 0.5rem 1rem;
            `:p`
                padding: 0 1rem;
                height: 3.5rem;
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ht.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;h.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Ht.Neutral[8]};
`;const Bc=h.div`
    ${er("Body","regular")}
    color: ${Ht.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return p`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,zc=h.div`
    display: flex;
    flex-direction: column;
`,Ac=h.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Pc=h.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;h(ir.Hyperlink.Default)`
    color: ${Ht.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ht.Accent.Light[3]};
        color: ${Ht.Neutral[1]};
    }
`;const Cc=h((({className:r,checked:n,disabled:i,onClick:s,onKeyPress:l,displaySize:c="default",...u})=>{const[d,h]=a(n);o((()=>{h(n)}),[n]);const p=e=>{i||(s&&s(e),l&&l(e))};return t($c,{selected:d,disabled:i,className:r,"data-testid":"checkbox",onKeyPress:p,tabIndex:i?-1:0,role:"checkbox",$displaySize:c,children:[e(xc,{type:"checkbox","data-testid":"checkbox-input",onClick:p,disabled:i,tabIndex:-1,...u}),d&&e(Sc,{type:"check",id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Nc=h.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Dc=h.button`
    ${er("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Ht.Primary(e)};\n\t\t`}
`,Ec=h.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ic=h(ir.Body)``,Hc=h.div`
    display: flex;
    align-items: center;
    margin-right: 0.625rem;
    font-size: 1.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    ${e=>p`
            color: ${Ht.Validation.Red.Icon(e)};
        `}
`,Mc=h.li`
    background: ${Ht.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Vc=h.input`
    ${er("Body","regular")}
    height: 3.5rem;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0.5rem 0 0;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ht.Neutral[3]};
    }
`,Rc=h(Wt)`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;

    #path {
        fill: ${Ht.Neutral[3]};
    }
`,Tc=l(((r,n)=>t(Mc,{children:[e(Rc,{type:"search"}),e(Vc,{ref:n,...r})]},"search"))),Lc=({listItems:r,listExtractor:n,valueExtractor:i,onSelectItem:l,listStyleWidth:c,visible:u,enableSearch:d,searchPlaceholder:h="Search",onSearch:p,searchFunction:f,onDismiss:g,multiSelect:m,selectedItems:y,onSelectAll:v,onRetry:b,itemsLoadState:w="success",itemTruncationType:_="end",...$})=>{const[x,S]=a(0),[k,F]=a(""),[O,j]=a(r),[B,z]=a(0),A=function(e,t){const r=Uo.fun(e),[[n],i]=Tl(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}({height:B}),P=s(),C=s(),N=s([]),D=s(),E=s(x),I=s(O),H=e=>{E.current=e,S(e)},M=e=>{I.current=e,j(e)};o((()=>(document.addEventListener("keydown",q),()=>{document.removeEventListener("keydown",q)})),[]),o((()=>{L(k)}),[k]),o((()=>{F(""),u?(z(W()),D&&D.current?(D.current.focus(),H(-1)):N.current[x]&&N.current[x].focus()):z(0)}),[u]),o((()=>{if(u){const e=W();z(e)}}),[O]),o((()=>{M(r),F(""),H(0)}),[r]);const V=e=>n?n(e):e.toString(),R=e=>{const t=n?n(e):e.toString();let r=0;return C&&C.current&&(r=C.current.getBoundingClientRect().width-100),Ut.shouldTruncateToTwoLines(t,r)},T=e=>vo(y,e)>-1,L=e=>{if(""===e)M(r);else if(f){const t=f(e);M(t)}else{const t=r.filter((t=>V(t).toLowerCase().includes(e.trim().toLowerCase())));M(t)}},W=()=>C&&C.current?C.current.getBoundingClientRect().height:0,q=e=>{if(P&&P.current.contains(e.target))switch(e.code){case"ArrowDown":if(E.current<I.current.length-1){const e=E.current+1;N.current[e].focus(),H(e)}break;case"ArrowUp":if(E.current>0){const e=E.current-1;N.current[e].focus(),H(E.current-1)}break;case"Escape":g&&g()}},U=(e,t)=>{e.preventDefault(),l&&l(t,(e=>i?i(e):e)(t))},Q=()=>{b&&b()},G=r=>{const i=n?n(r):r.toString();return t(zc,{"data-testid":"truncate-middle-container",children:[e(Ac,{children:i}),t(Pc,{children:[" ",i]})]})};return e(kc,{style:A,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:P,children:t(Fc,{ref:C,"data-testid":"dropdown-list",width:c,role:"list",...$,children:[(d||f)&&"success"===w?e(Tc,{ref:D,onChange:e=>{const t=e.target.value;F(t),p&&p()},value:k,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1}):null,(()=>{if(m&&O.length>0&&!k&&"success"===w)return e(Nc,{children:e(Dc,{onClick:v,children:0===y.length?"Select all":"Unselect all"})},"selectAll")})(),(()=>{if(k&&0===O.length)return t(Ec,{"data-testid":"list-no-results",children:[e(Hc,{"data-testid":"no-result-icon",children:e(Fo,{})}),e(Ic,{children:"No results found."})]},"noResults")})(),(()=>{if(b&&"loading"===w)return t(Ec,{"data-testid":"list-loading",children:[e(_c,{$buttonStyle:"secondary",size:24}),e(Ic,{children:"Loading..."})]},"loading")})(),(()=>{if(b&&"fail"===w)return t(Ec,{"data-testid":"list-fail",children:[e(Hc,{"data-testid":"load-error-icon",children:e(Fo,{})}),e(Ic,{children:"Failed to load."}),e(Dc,{onClick:Q,children:"Try again."})]},"noResults")})(),(()=>{if(!b||b&&"success"===w)return O.map(((r,n)=>e(Oc,{checked:T(r)&&!m,children:t(jc,{onClick:e=>{U(e,r)},ref:e=>N.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,multiSelect:m,children:[m&&e(Cc,{checked:T(r),displaySize:"small"}),e(Bc,{truncateType:_,children:"middle"===_&&R(r)?G(r):V(r)})]})},((e,t)=>`item_${t}__${i?i(e):e}`)(r,n))))})()]})})},Wc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",qc=h.div`
    position: relative;
    min-height: 3rem;
    height: 3rem;
    width: 100%;

    ${fc.tablet} {
        height: auto;
    }
`,Uc=h.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0.702rem 1rem; // To make it exactly 3rem height
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }
`,Qc=f`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,Gc=h.div`
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Ht.Neutral[8]};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${Qc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Ht.Neutral[6](e)};

                ${Uc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?p`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`;h.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Wc};
    margin-left: 1rem;
`,h(Wt)`
    color: ${Ht.Neutral[3]};
    font-size: ${Zt.Body.fontSize}rem;
    font-weight: bold;
`,h.div`
    height: 1px;
    background: ${Ht.Neutral[5]};
    margin: 0 0.5rem;
`,h.div`
    display: flex;
    flex: 1;
`;const Xc=h(ir.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return p`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;h(Xc)`
    color: ${Ht.Neutral[3]};
`;const Zc=qc,Kc=h(Gc)``,Yc=h.div`
    position: relative;
    display: flex;
    height: 3rem;
    margin: 0 0.5rem;
    ${e=>{if(e.$expanded)return p`
                border-bottom: 1px solid ${Ht.Neutral[5](e)};
            `}}
`,Jc=h.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 0.5rem;
    height: 3rem;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline-color: ${Ht.Accent.Light[3]};
    }
`,eu=h.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Wc};
    margin-left: 1rem;
`,tu=h(Wt)`
    color: ${Ht.Neutral[3]};
    font-size: ${Zt.Body.fontSize}rem;
    font-weight: bold;
`,ru=h.div`
    display: flex;
    flex: 1 1 auto;
`,nu=h(ir.Body)`
    text-align: left;
    line-height: 1.375rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,iu=h(nu)`
    color: ${Ht.Neutral[3]};
`,ou=h.div`
    margin: 1rem 1rem 1rem 0;
    width: 1px;
    background: ${Ht.Neutral[5]};
`,au=({addon:n,error:i,...l})=>{const{value:c,placeholder:u,options:d,enableSearch:h,searchFunction:p,searchPlaceholder:f,valueExtractor:g,listExtractor:m,displayValueExtractor:y,onSelectOption:v,onHideOptions:b,onShowOptions:w,"data-selector-testid":_}=n.attributes,[$,x]=a(c),[S,k]=a(!1),F=s(),O=s();o((()=>{x(c)}),[c]),o((()=>(document.addEventListener("mousedown",B),()=>{document.removeEventListener("mousedown",B)})),[]);const j=e=>{!e&&b&&b(),e&&w&&w()},B=e=>{if(!l.disabled){if(F&&F.current.contains(e.target))return;k(!1),j(!1)}},z=e=>{e.preventDefault(),l.disabled||(k(!S),j(!S))},A=(e,t)=>{x(e),k(!1),j(!1),O&&O.current.focus(),v&&v(e,t)};return e(Zc,{children:t(Kc,{ref:F,disabled:l.disabled,error:i&&!S,expanded:S,children:[t(Yc,{$expanded:S,children:[e(Jc,{ref:O,type:"button","data-testid":_||"addon-selector",onClick:z,children:t(r,{children:[t(ru,{children:[u&&!$&&e(iu,{children:u}),$&&e(nu,{"data-testid":"selector-label",children:y?y($):g?g($):$.toString()})]}),e(eu,{$expanded:S,children:e(tu,{type:"chevron-down"})})]})}),e(ou,{}),e(ur,{...l,"data-testid":l["data-testid"]||"input"})]}),d&&d.length>0?e(Lc,{listItems:d,onSelectItem:A,valueExtractor:g,listExtractor:m,visible:S,enableSearch:h,searchFunction:p,searchPlaceholder:f,"data-testid":"dropdown-list"}):null]})})},su=i.forwardRef((({addon:r,error:n,...i},o)=>{const a=()=>e(cr,{disabled:i.disabled,$error:n,$readOnly:"readonly"===i.type,"data-testid":i["data-testid"],children:e(ur,{ref:o,"data-testid":"input",...i})});if(!r)return a();{const{type:o="label",position:s="left"}=r;switch(o){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e(au,{addon:r,error:n,...i}):a()}case"custom":{const o=r.attributes;return o.children?t(cr,{$error:n,disabled:i.disabled,$readOnly:"readonly"===i.type,"data-testid":i["data-testid"],$position:s,children:[e(dr,{"data-testid":"addon",disabled:i.disabled,children:o.children}),e(ur,{...i,$position:s,"data-testid":"input"})]}):a()}default:{const o=r.attributes;return o.value?t(cr,{disabled:i.disabled,$error:n,$readOnly:"readonly"===i.type,"data-testid":i["data-testid"],$position:s,children:[e(dr,{"data-testid":"addon",disabled:i.disabled,children:o.value}),e(ur,{...i,$position:s,"data-testid":"input"})]}):a()}}}}));export{su as InputGroup};
//# sourceMappingURL=index.js.map
