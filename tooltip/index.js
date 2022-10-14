import{jsx as t,jsxs as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import o,{css as a}from"styled-components";var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},h="object"==typeof l&&l&&l.Object===Object&&l,p="object"==typeof self&&self&&self.Object===Object&&self,s=h||p||Function("return this")(),f=s,g=function(){return f.Date.now()},d=/\s/;var u=function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e},m=/^\s+/;var y=function(t){return t?t.slice(0,u(t)+1).replace(m,""):t},v=s.Symbol,F=v,S=Object.prototype,b=S.hasOwnProperty,x=S.toString,w=F?F.toStringTag:void 0;var $=function(t){var e=b.call(t,w),n=t[w];try{t[w]=void 0;var r=!0}catch(t){}var i=x.call(t);return r&&(e?t[w]=n:delete t[w]),i},B=Object.prototype.toString;var H=$,D=function(t){return B.call(t)},z=v?v.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":z&&z in Object(t)?H(t):D(t)};var C=_,E=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==C(t)},k=y,A=c,O=W,j=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,T=/^0o[0-7]+$/i,R=parseInt;var V=c,N=g,X=function(t){if("number"==typeof t)return t;if(O(t))return NaN;if(A(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=A(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=k(t);var n=L.test(t);return n||T.test(t)?R(t.slice(2),n?2:8):j.test(t)?NaN:+t},I=Math.max,P=Math.min;var M=function(t,e,n){var r,i,o,a,l,c,h=0,p=!1,s=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=r,o=i;return r=i=void 0,h=e,a=t.apply(o,n)}function d(t){return h=t,l=setTimeout(m,e),p?g(t):a}function u(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-h>=o}function m(){var t=N();if(u(t))return y(t);l=setTimeout(m,function(t){var n=e-(t-c);return s?P(n,o-(t-h)):n}(t))}function y(t){return l=void 0,f&&r?g(t):(r=i=void 0,a)}function v(){var t=N(),n=u(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return d(c);if(s)return clearTimeout(l),l=setTimeout(m,e),g(c)}return void 0===l&&(l=setTimeout(m,e)),a}return e=X(e)||0,V(n)&&(p=!!n.leading,o=(s="maxWait"in n)?I(X(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=c=i=l=void 0},v.flush=function(){return void 0===l?a:y(N())},v};var G=Array.isArray,Y=G,Z=W,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var J=function(t,e){if(Y(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Z(t))||(q.test(t)||!U.test(t)||null!=e&&t in Object(e))},K=_,Q=c;var tt,et=function(t){if(!Q(t))return!1;var e=K(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},nt=s["__core-js_shared__"],rt=(tt=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||""))?"Symbol(src)_1."+tt:"";var it=function(t){return!!rt&&rt in t},ot=Function.prototype.toString;var at=et,lt=it,ct=c,ht=function(t){if(null!=t){try{return ot.call(t)}catch(t){}try{return t+""}catch(t){}}return""},pt=/^\[object .+?Constructor\]$/,st=Function.prototype,ft=Object.prototype,gt=st.toString,dt=ft.hasOwnProperty,ut=RegExp("^"+gt.call(dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!ct(t)||lt(t))&&(at(t)?ut:pt).test(ht(t))},yt=function(t,e){return null==t?void 0:t[e]};var vt=function(t,e){var n=yt(t,e);return mt(n)?n:void 0},Ft=vt(Object,"create"),St=Ft;var bt=function(){this.__data__=St?St(null):{},this.size=0};var xt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt=Ft,$t=Object.prototype.hasOwnProperty;var Bt=function(t){var e=this.__data__;if(wt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return $t.call(e,t)?e[t]:void 0},Ht=Ft,Dt=Object.prototype.hasOwnProperty;var zt=Ft;var _t=bt,Ct=xt,Et=Bt,Wt=function(t){var e=this.__data__;return Ht?void 0!==e[t]:Dt.call(e,t)},kt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=zt&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=_t,At.prototype.delete=Ct,At.prototype.get=Et,At.prototype.has=Wt,At.prototype.set=kt;var Ot=At;var jt=function(){this.__data__=[],this.size=0};var Lt=function(t,e){return t===e||t!=t&&e!=e};var Tt=function(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1},Rt=Tt,Vt=Array.prototype.splice;var Nt=Tt;var Xt=Tt;var It=Tt;var Pt=jt,Mt=function(t){var e=this.__data__,n=Rt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Vt.call(e,n,1),--this.size,!0)},Gt=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},Yt=function(t){return Xt(this.__data__,t)>-1},Zt=function(t,e){var n=this.__data__,r=It(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Mt,Ut.prototype.get=Gt,Ut.prototype.has=Yt,Ut.prototype.set=Zt;var qt=Ut,Jt=vt(s,"Map"),Kt=Ot,Qt=qt,te=Jt;var ee=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ne=function(t,e){var n=t.__data__;return ee(e)?n["string"==typeof e?"string":"hash"]:n.map},re=ne;var ie=ne;var oe=ne;var ae=ne;var le=function(){this.size=0,this.__data__={hash:new Kt,map:new(te||Qt),string:new Kt}},ce=function(t){var e=re(this,t).delete(t);return this.size-=e?1:0,e},he=function(t){return ie(this,t).get(t)},pe=function(t){return oe(this,t).has(t)},se=function(t,e){var n=ae(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function fe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}fe.prototype.clear=le,fe.prototype.delete=ce,fe.prototype.get=he,fe.prototype.has=pe,fe.prototype.set=se;var ge=fe;function de(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(de.Cache||ge),n}de.Cache=ge;var ue=de;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,ve=function(t){var e=ue(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(me,(function(t,n,r,i){e.push(r?i.replace(ye,"$1"):n||t)})),e}));var Fe=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Se=G,be=W,xe=v?v.prototype:void 0,we=xe?xe.toString:void 0;var $e=function t(e){if("string"==typeof e)return e;if(Se(e))return Fe(e,t)+"";if(be(e))return we?we.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Be=$e;var He=G,De=J,ze=ve,_e=function(t){return null==t?"":Be(t)};var Ce=W;var Ee=function(t,e){return He(t)?t:De(t,e)?[t]:ze(_e(t))},We=function(t){if("string"==typeof t||Ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ke=function(t,e){for(var n=0,r=(e=Ee(e,t)).length;null!=t&&n<r;)t=t[We(e[n++])];return n&&n==r?t:void 0};var Ae=function(t,e,n){var r=null==t?void 0:ke(t,e);return void 0===r?n:r};const Oe=(t,e,n)=>e?Ae(n,e)||Ae(t,e):n||t,je=(t,e)=>{const n=e||t.defaultValue;return Ae(t.collections,n)};var Le;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Le||(Le={}));const Te={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Re=t=>e=>{const n=e.theme,r=je(Te,n[Le.colorScheme]);return n.options&&n.options.color?Oe(r,t,n.options.color):Oe(r,t)},Ve=(Re("Brand.1"),Re("Brand.2"),Re("Brand.3"),Re("Brand.4"),Re("Brand.5"),Re("Brand.6"),Re("Primary")),Ne=(Re("PrimaryDark"),Re("Secondary")),Xe=(Re("Accent.Light.1"),Re("Accent.Light.2"),Re("Accent.Light.3"),Re("Accent.Light.4"),Re("Accent.Light.5"),Re("Accent.Light.6"),Re("Accent.Dark.1"),Re("Accent.Dark.2"),Re("Accent.Dark.3"),{1:Re("Neutral.1"),2:Re("Neutral.2"),3:Re("Neutral.3"),4:Re("Neutral.4"),5:Re("Neutral.5"),6:Re("Neutral.6"),7:Re("Neutral.7"),8:Re("Neutral.8")}),Ie=(Re("Validation.Green.Text"),Re("Validation.Green.Icon"),Re("Validation.Green.Border"),Re("Validation.Green.Background"),Re("Validation.Orange.Text"),Re("Validation.Orange.Icon"),Re("Validation.Orange.Border"),Re("Validation.Orange.Background"),Re("Validation.Orange.Badge"),Re("Validation.Red.Text"),Re("Validation.Red.Icon"),Re("Validation.Red.Border"),Re("Validation.Red.Background"),o.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${Xe[8]};
    }
`),Pe=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("g",{fill:"none",fillRule:"evenodd",children:t("g",{id:"path",fillRule:"nonzero",children:t("g",{children:t("g",{children:t("g",{children:t("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),Me=e=>t(Ie,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ge=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Ye=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...e,children:t("g",{id:"search",children:t("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Ze=o.span`
    font-size: 1rem;
`,Ue={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},qe={collections:{base:{D1:{fontFamily:Ue.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ue.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ue.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ue.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ue.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ue.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ue.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ue.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ue.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ue.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ue.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ue.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ue.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ue.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Je=t=>e=>{const n=e.theme,r=je(qe,n[Le.textStyleScheme]);return n.options&&n.options.textStyle?Oe(r,t,n.options.textStyle):Oe(r,t)},Ke={D1:{fontFamily:Je("D1.fontFamily"),fontSize:Je("D1.fontSize"),fontWeight:Je("D1.fontWeight"),lineHeight:Je("D1.lineHeight"),letterSpacing:Je("D1.letterSpacing")},D2:{fontFamily:Je("D2.fontFamily"),fontSize:Je("D2.fontSize"),fontWeight:Je("D2.fontWeight"),lineHeight:Je("D2.lineHeight"),letterSpacing:Je("D2.letterSpacing")},D3:{fontFamily:Je("D3.fontFamily"),fontSize:Je("D3.fontSize"),fontWeight:Je("D3.fontWeight"),lineHeight:Je("D3.lineHeight"),letterSpacing:Je("D3.letterSpacing")},D4:{fontFamily:Je("D4.fontFamily"),fontSize:Je("D4.fontSize"),fontWeight:Je("D4.fontWeight"),lineHeight:Je("D4.lineHeight"),letterSpacing:Je("D4.letterSpacing")},DBody:{fontFamily:Je("DBody.fontFamily"),fontSize:Je("DBody.fontSize"),fontWeight:Je("DBody.fontWeight"),lineHeight:Je("DBody.lineHeight"),letterSpacing:Je("DBody.letterSpacing")},H1:{fontFamily:Je("H1.fontFamily"),fontSize:Je("H1.fontSize"),fontWeight:Je("H1.fontWeight"),lineHeight:Je("H1.lineHeight"),letterSpacing:Je("H1.letterSpacing")},H2:{fontFamily:Je("H2.fontFamily"),fontSize:Je("H2.fontSize"),fontWeight:Je("H2.fontWeight"),lineHeight:Je("H2.lineHeight"),letterSpacing:Je("H2.letterSpacing")},H3:{fontFamily:Je("H3.fontFamily"),fontSize:Je("H3.fontSize"),fontWeight:Je("H3.fontWeight"),lineHeight:Je("H3.lineHeight"),letterSpacing:Je("H3.letterSpacing")},H4:{fontFamily:Je("H4.fontFamily"),fontSize:Je("H4.fontSize"),fontWeight:Je("H4.fontWeight"),lineHeight:Je("H4.lineHeight"),letterSpacing:Je("H4.letterSpacing")},H5:{fontFamily:Je("H5.fontFamily"),fontSize:Je("H5.fontSize"),fontWeight:Je("H5.fontWeight"),lineHeight:Je("H5.lineHeight"),letterSpacing:Je("H5.letterSpacing")},H6:{fontFamily:Je("H6.fontFamily"),fontSize:Je("H6.fontSize"),fontWeight:Je("H6.fontWeight"),lineHeight:Je("H6.lineHeight"),letterSpacing:Je("H6.letterSpacing")},Body:{fontFamily:Je("Body.fontFamily"),fontSize:Je("Body.fontSize"),fontWeight:Je("Body.fontWeight"),lineHeight:Je("Body.lineHeight"),letterSpacing:Je("Body.letterSpacing")},BodySmall:{fontFamily:Je("BodySmall.fontFamily"),fontSize:Je("BodySmall.fontSize"),fontWeight:Je("BodySmall.fontWeight"),lineHeight:Je("BodySmall.lineHeight"),letterSpacing:Je("BodySmall.letterSpacing")},XSmall:{fontFamily:Je("XSmall.fontFamily"),fontSize:Je("XSmall.fontSize"),fontWeight:Je("XSmall.fontWeight"),lineHeight:Je("XSmall.lineHeight"),letterSpacing:Je("XSmall.letterSpacing")}},Qe=t=>{switch(t){case 700:case"bold":return Ue.Bold;case 600:case"semibold":return Ue.Semibold;case 300:case"light":return Ue.Light;case 400:case"regular":return Ue.Regular;default:return""}},tn=(t,e)=>n=>{const r=Ke[t].fontFamily(n),i=Ke[t].fontWeight(n);return Object.values(Ue).includes(r)?a`
                font-family: ${Qe(e)||Qe(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(en(e)||i)??"normal"};
        `},en=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=(t,e,n=!1)=>r=>{const i=Ke[t],o=i.fontSize(r);return a`
            ${tn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},rn=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var on;!function(t){t.D1=o.h1`
        ${t=>a`
                ${nn("D1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${nn("D2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${nn("D3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${nn("D4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${nn("DBody",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${nn("H1",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${nn("H2",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${nn("H3",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${nn("H4",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${nn("H5",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${nn("H6",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${nn("Body",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${nn("BodySmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${nn("XSmall",t.weight,t.paragraph)}
                color: ${Xe[1]};
                ${rn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>cn({...t,textStyle:"Body"}),Small:t=>cn({...t,textStyle:"BodySmall"})}}(on||(on={}));const an=o.a`
    ${t=>a`
            ${nn(t.textStyle,t.weight)}
            color: ${Ve};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne};
            }
        `}
`,ln=o((({type:e,...n})=>{switch(e){case"arrow-right":return t(Pe,{...n});case"info":return t(Me,{...n});case"search":return t(Ye,{...n});case"play-alt":return t(Ge,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(Ze,{...n,className:i})}}}))`
    margin-left: 0.4rem;
`,cn=({external:n=!1,children:r,...i})=>e(an,{...i,children:[r,n&&t(ln,{type:"external"})]}),hn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},pn=t=>Object.keys(hn).reduce(((e,n)=>{const r=hn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),sn=pn("max-width"),fn=(pn("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),gn=o.div`
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

                ${sn.mobileL} {
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

                ${sn.mobileL} {
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

                ${sn.mobileL} {
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

                ${sn.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?a`
            visibility: "visible";
            opacity: 1;
            transition: ${fn};
            z-index: 2;
        `:a`
            visibility: "hidden";
            opacity: 0;
            transition: ${fn};
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
`,un=o.div`
    position: relative;
`,mn=({visible:o,position:a="top",children:l,...c})=>{const h=c["data-testid"]||"tooltip",[p,s]=n(a),f=r(null);i((()=>(d(),window.addEventListener("resize",M(g,300)),()=>{window.removeEventListener("resize",M(g,300))})),[]);const g=()=>{d()},d=()=>{if(f.current){const t=f.current.getBoundingClientRect();if(t.x<0)switch(a){case"left":case"top":case"bottom":s("right");break;case"right":s("top")}else if(t.x+t.width>window.outerWidth)switch(a){case"right":case"top":case"bottom":s("left");break;case"left":s("top")}else s(a)}};return e(gn,{position:p,"data-testid":h,visible:o,ref:f,...c,children:["string"==typeof l?t(on.BodySmall,{children:l}):l,t(dn,{position:p})]})},yn=(n,r)=>i=>{const{tooltipVisible:o,position:a,...l}=i;return e(un,{children:[t(n,{...l}),t(mn,{visible:o,position:a,children:r.content})]})};export{mn as Tooltip,yn as withTooltip};
//# sourceMappingURL=index.js.map
