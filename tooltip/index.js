import{jsx as t,jsxs as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import o,{css as a}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},h="object"==typeof l&&l&&l.Object===Object&&l,p="object"==typeof self&&self&&self.Object===Object&&self,s=h||p||Function("return this")(),f=s,g=function(){return f.Date.now()},u=/\s/;var d=function(t){for(var e=t.length;e--&&u.test(t.charAt(e)););return e},m=/^\s+/;var y=function(t){return t?t.slice(0,d(t)+1).replace(m,""):t},v=s.Symbol,F=v,S=Object.prototype,b=S.hasOwnProperty,w=S.toString,x=F?F.toStringTag:void 0;var B=function(t){var e=b.call(t,x),n=t[x];try{t[x]=void 0;var r=!0}catch(t){}var i=w.call(t);return r&&(e?t[x]=n:delete t[x]),i},$=Object.prototype.toString;var H=B,D=function(t){return $.call(t)},_=v?v.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?H(t):D(t)};var C=z,E=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==C(t)},k=y,A=c,L=W,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,T=/^0o[0-7]+$/i,V=parseInt;var R=c,N=g,X=function(t){if("number"==typeof t)return t;if(L(t))return NaN;if(A(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=A(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=k(t);var n=j.test(t);return n||T.test(t)?V(t.slice(2),n?2:8):O.test(t)?NaN:+t},I=Math.max,P=Math.min;var M=function(t,e,n){var r,i,o,a,l,c,h=0,p=!1,s=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=r,o=i;return r=i=void 0,h=e,a=t.apply(o,n)}function u(t){return h=t,l=setTimeout(m,e),p?g(t):a}function d(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-h>=o}function m(){var t=N();if(d(t))return y(t);l=setTimeout(m,function(t){var n=e-(t-c);return s?P(n,o-(t-h)):n}(t))}function y(t){return l=void 0,f&&r?g(t):(r=i=void 0,a)}function v(){var t=N(),n=d(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return u(c);if(s)return clearTimeout(l),l=setTimeout(m,e),g(c)}return void 0===l&&(l=setTimeout(m,e)),a}return e=X(e)||0,R(n)&&(p=!!n.leading,o=(s="maxWait"in n)?I(X(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=c=i=l=void 0},v.flush=function(){return void 0===l?a:y(N())},v};var G=Array.isArray,Y=G,Z=W,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var J=function(t,e){if(Y(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Z(t))||(q.test(t)||!U.test(t)||null!=e&&t in Object(e))},K=z,Q=c;var tt,et=function(t){if(!Q(t))return!1;var e=K(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},nt=s["__core-js_shared__"],rt=(tt=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||""))?"Symbol(src)_1."+tt:"";var it=function(t){return!!rt&&rt in t},ot=Function.prototype.toString;var at=et,lt=it,ct=c,ht=function(t){if(null!=t){try{return ot.call(t)}catch(t){}try{return t+""}catch(t){}}return""},pt=/^\[object .+?Constructor\]$/,st=Function.prototype,ft=Object.prototype,gt=st.toString,ut=ft.hasOwnProperty,dt=RegExp("^"+gt.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!ct(t)||lt(t))&&(at(t)?dt:pt).test(ht(t))},yt=function(t,e){return null==t?void 0:t[e]};var vt=function(t,e){var n=yt(t,e);return mt(n)?n:void 0},Ft=vt(Object,"create"),St=Ft;var bt=function(){this.__data__=St?St(null):{},this.size=0};var wt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},xt=Ft,Bt=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(xt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Bt.call(e,t)?e[t]:void 0},Ht=Ft,Dt=Object.prototype.hasOwnProperty;var _t=Ft;var zt=bt,Ct=wt,Et=$t,Wt=function(t){var e=this.__data__;return Ht?void 0!==e[t]:Dt.call(e,t)},kt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=_t&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=zt,At.prototype.delete=Ct,At.prototype.get=Et,At.prototype.has=Wt,At.prototype.set=kt;var Lt=At;var Ot=function(){this.__data__=[],this.size=0};var jt=function(t,e){return t===e||t!=t&&e!=e};var Tt=function(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1},Vt=Tt,Rt=Array.prototype.splice;var Nt=Tt;var Xt=Tt;var It=Tt;var Pt=Ot,Mt=function(t){var e=this.__data__,n=Vt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Rt.call(e,n,1),--this.size,!0)},Gt=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},Yt=function(t){return Xt(this.__data__,t)>-1},Zt=function(t,e){var n=this.__data__,r=It(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Mt,Ut.prototype.get=Gt,Ut.prototype.has=Yt,Ut.prototype.set=Zt;var qt=Ut,Jt=vt(s,"Map"),Kt=Lt,Qt=qt,te=Jt;var ee=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ne=function(t,e){var n=t.__data__;return ee(e)?n["string"==typeof e?"string":"hash"]:n.map},re=ne;var ie=ne;var oe=ne;var ae=ne;var le=function(){this.size=0,this.__data__={hash:new Kt,map:new(te||Qt),string:new Kt}},ce=function(t){var e=re(this,t).delete(t);return this.size-=e?1:0,e},he=function(t){return ie(this,t).get(t)},pe=function(t){return oe(this,t).has(t)},se=function(t,e){var n=ae(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function fe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}fe.prototype.clear=le,fe.prototype.delete=ce,fe.prototype.get=he,fe.prototype.has=pe,fe.prototype.set=se;var ge=fe;function ue(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ue.Cache||ge),n}ue.Cache=ge;var de=ue;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,ve=function(t){var e=de(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(me,(function(t,n,r,i){e.push(r?i.replace(ye,"$1"):n||t)})),e}));var Fe=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Se=G,be=W,we=v?v.prototype:void 0,xe=we?we.toString:void 0;var Be=function t(e){if("string"==typeof e)return e;if(Se(e))return Fe(e,t)+"";if(be(e))return xe?xe.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},$e=Be;var He=G,De=J,_e=ve,ze=function(t){return null==t?"":$e(t)};var Ce=W;var Ee=function(t,e){return He(t)?t:De(t,e)?[t]:_e(ze(t))},We=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ke=function(t,e){for(var n=0,r=(e=Ee(e,t)).length;null!=t&&n<r;)t=t[We(e[n++])];return n&&n==r?t:void 0};var Ae=function(t,e,n){var r=null==t?void 0:ke(t,e);return void 0===r?n:r};const Le=(t,e,n)=>e?Ae(n,e)||Ae(t,e):n||t,Oe=(t,e)=>{const n=e||t.defaultValue;return Ae(t.collections,n)};var je;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(je||(je={}));const Te={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ve=t=>e=>{const n=e.theme,r=Oe(Te,n[je.colorScheme]);return n.options&&n.options.color?Le(r,t,n.options.color):Le(r,t)},Re=(Ve("Brand.1"),Ve("Brand.2"),Ve("Brand.3"),Ve("Brand.4"),Ve("Brand.5"),Ve("Brand.6"),Ve("Primary")),Ne=(Ve("PrimaryDark"),Ve("Secondary")),Xe=(Ve("Accent.Light.1"),Ve("Accent.Light.2"),Ve("Accent.Light.3"),Ve("Accent.Light.4"),Ve("Accent.Light.5"),Ve("Accent.Light.6"),Ve("Accent.Dark.1"),Ve("Accent.Dark.2"),Ve("Accent.Dark.3"),{1:Ve("Neutral.1"),2:Ve("Neutral.2"),3:Ve("Neutral.3"),4:Ve("Neutral.4"),5:Ve("Neutral.5"),6:Ve("Neutral.6"),7:Ve("Neutral.7"),8:Ve("Neutral.8")}),Ie=(Ve("Validation.Green.Text"),Ve("Validation.Green.Icon"),Ve("Validation.Green.Border"),Ve("Validation.Green.Background"),Ve("Validation.Orange.Text"),Ve("Validation.Orange.Icon"),Ve("Validation.Orange.Border"),Ve("Validation.Orange.Background"),Ve("Validation.Orange.Badge"),Ve("Validation.Red.Text"),Ve("Validation.Red.Icon"),Ve("Validation.Red.Border"),Ve("Validation.Red.Background"),o.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Re};
`),Pe=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Me=e=>t(Ie,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ge=e=>t(Ie,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ye=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Ze=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Ue=o.span`
    font-size: 1rem;
`,qe={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Je={collections:{base:{D1:{fontFamily:qe.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:qe.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:qe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:qe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:qe.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:qe.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:qe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:qe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:qe.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:qe.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:qe.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:qe.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:qe.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:qe.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ke=t=>e=>{const n=e.theme,r=Oe(Je,n[je.textStyleScheme]);return n.options&&n.options.textStyle?Le(r,t,n.options.textStyle):Le(r,t)},Qe={D1:{fontFamily:Ke("D1.fontFamily"),fontSize:Ke("D1.fontSize"),fontWeight:Ke("D1.fontWeight"),lineHeight:Ke("D1.lineHeight"),letterSpacing:Ke("D1.letterSpacing")},D2:{fontFamily:Ke("D2.fontFamily"),fontSize:Ke("D2.fontSize"),fontWeight:Ke("D2.fontWeight"),lineHeight:Ke("D2.lineHeight"),letterSpacing:Ke("D2.letterSpacing")},D3:{fontFamily:Ke("D3.fontFamily"),fontSize:Ke("D3.fontSize"),fontWeight:Ke("D3.fontWeight"),lineHeight:Ke("D3.lineHeight"),letterSpacing:Ke("D3.letterSpacing")},D4:{fontFamily:Ke("D4.fontFamily"),fontSize:Ke("D4.fontSize"),fontWeight:Ke("D4.fontWeight"),lineHeight:Ke("D4.lineHeight"),letterSpacing:Ke("D4.letterSpacing")},DBody:{fontFamily:Ke("DBody.fontFamily"),fontSize:Ke("DBody.fontSize"),fontWeight:Ke("DBody.fontWeight"),lineHeight:Ke("DBody.lineHeight"),letterSpacing:Ke("DBody.letterSpacing")},H1:{fontFamily:Ke("H1.fontFamily"),fontSize:Ke("H1.fontSize"),fontWeight:Ke("H1.fontWeight"),lineHeight:Ke("H1.lineHeight"),letterSpacing:Ke("H1.letterSpacing")},H2:{fontFamily:Ke("H2.fontFamily"),fontSize:Ke("H2.fontSize"),fontWeight:Ke("H2.fontWeight"),lineHeight:Ke("H2.lineHeight"),letterSpacing:Ke("H2.letterSpacing")},H3:{fontFamily:Ke("H3.fontFamily"),fontSize:Ke("H3.fontSize"),fontWeight:Ke("H3.fontWeight"),lineHeight:Ke("H3.lineHeight"),letterSpacing:Ke("H3.letterSpacing")},H4:{fontFamily:Ke("H4.fontFamily"),fontSize:Ke("H4.fontSize"),fontWeight:Ke("H4.fontWeight"),lineHeight:Ke("H4.lineHeight"),letterSpacing:Ke("H4.letterSpacing")},H5:{fontFamily:Ke("H5.fontFamily"),fontSize:Ke("H5.fontSize"),fontWeight:Ke("H5.fontWeight"),lineHeight:Ke("H5.lineHeight"),letterSpacing:Ke("H5.letterSpacing")},H6:{fontFamily:Ke("H6.fontFamily"),fontSize:Ke("H6.fontSize"),fontWeight:Ke("H6.fontWeight"),lineHeight:Ke("H6.lineHeight"),letterSpacing:Ke("H6.letterSpacing")},Body:{fontFamily:Ke("Body.fontFamily"),fontSize:Ke("Body.fontSize"),fontWeight:Ke("Body.fontWeight"),lineHeight:Ke("Body.lineHeight"),letterSpacing:Ke("Body.letterSpacing")},BodySmall:{fontFamily:Ke("BodySmall.fontFamily"),fontSize:Ke("BodySmall.fontSize"),fontWeight:Ke("BodySmall.fontWeight"),lineHeight:Ke("BodySmall.lineHeight"),letterSpacing:Ke("BodySmall.letterSpacing")},XSmall:{fontFamily:Ke("XSmall.fontFamily"),fontSize:Ke("XSmall.fontSize"),fontWeight:Ke("XSmall.fontWeight"),lineHeight:Ke("XSmall.lineHeight"),letterSpacing:Ke("XSmall.letterSpacing")}},tn=t=>{switch(t){case 700:case"bold":return qe.Bold;case 600:case"semibold":return qe.Semibold;case 300:case"light":return qe.Light;case 400:case"regular":return qe.Regular;default:return""}},en=(t,e)=>n=>{const r=Qe[t].fontFamily(n),i=Qe[t].fontWeight(n);return Object.values(qe).includes(r)?a`
                font-family: ${tn(e)||tn(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(nn(e)||i)??"normal"};
        `},nn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rn=(t,e,n=!1)=>r=>{const i=Qe[t],o=i.fontSize(r);return a`
            ${en(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},on=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var an;!function(t){t.D1=o.h1`
        ${t=>a`
                ${rn("D1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${rn("D2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${rn("D3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${rn("D4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${rn("DBody",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${rn("H1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${rn("H2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${rn("H3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${rn("H4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${rn("H5",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${rn("H6",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${rn("Body",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${rn("BodySmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${rn("XSmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${on(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>hn({...t,textStyle:"Body"}),Small:t=>hn({...t,textStyle:"BodySmall"})}}(an||(an={}));const ln=o.a`
    ${t=>a`
            ${rn(t.textStyle,t.weight)}
            color: ${Re};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne};
            }
        `}
`,cn=o((({type:e,...n})=>{switch(e){case"arrow-right":return t(Pe,{...n});case"info":return t(Ge,{...n});case"cross":return t(Me,{...n});case"play":return t(Ye,{...n});case"search":return t(Ze,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(Ue,{...n,className:i})}}}))`
    margin-left: 0.4rem;
`,hn=({external:n=!1,children:r,...i})=>e(ln,{...i,children:[r,n&&t(cn,{type:"external"})]}),pn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sn=t=>Object.keys(pn).reduce(((e,n)=>{const r=pn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),fn=sn("max-width"),gn=(sn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),un=o.div`
    position: absolute;
    padding: 1rem 2rem;
    border-radius: 4px;
    background: ${Xe[8]};
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
    max-width: 30rem;
    ${t=>(t=>{switch(t){case"left":return a`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${fn.mobileL} {
                    width: auto;
                }
            `;case"right":return a`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${fn.mobileL} {
                    width: auto;
                }
            `;case"bottom":return a`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${fn.mobileL} {
                    max-width: 80vw;
                }
            `;default:return a`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${fn.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?a`
            visibility: "visible";
            opacity: 1;
            transition: ${gn};
            z-index: 2;
        `:a`
            visibility: "hidden";
            opacity: 0;
            transition: ${gn};
            z-index: -1;
        `}
	pointer-events: auto;
`,dn=o.div`
    position: absolute;
    overflow: hidden;

    ${t=>{switch(t.position){case"top":default:return a`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Xe[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return a`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Xe[8]}
                            transparent transparent;
                    }
                `;case"left":return a`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Xe[8]};
                    }
                `;case"bottom":return a`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Xe[8]} transparent;
                    }
                `}}}
`,mn=o.div`
    position: relative;
`,yn=({visible:o,position:a="top",children:l,...c})=>{const h=c["data-testid"]||"tooltip",[p,s]=n(a),f=r(null);i((()=>(u(),window.addEventListener("resize",M(g,300)),()=>{window.removeEventListener("resize",M(g,300))})),[]);const g=()=>{u()},u=()=>{if(f.current){const t=f.current.getBoundingClientRect();if(t.x<0)switch(a){case"left":case"top":case"bottom":s("right");break;case"right":s("top")}else if(t.x+t.width>window.outerWidth)switch(a){case"right":case"top":case"bottom":s("left");break;case"left":s("top")}else s(a)}};return e(un,{position:p,"data-testid":h,visible:o,ref:f,...c,children:["string"==typeof l?t(an.BodySmall,{children:l}):l,t(dn,{position:p})]})},vn=(n,r)=>i=>{const{tooltipVisible:o,position:a,...l}=i;return e(mn,{children:[t(n,{...l}),t(yn,{visible:o,position:a,children:r.content})]})};export{yn as Tooltip,vn as withTooltip};
//# sourceMappingURL=index.js.map
