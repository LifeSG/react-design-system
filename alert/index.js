import{jsx as t,jsxs as e}from"react/jsx-runtime";import n,{css as r}from"styled-components";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,o="object"==typeof i&&i&&i.Object===Object&&i,l="object"==typeof self&&self&&self.Object===Object&&self,c=o||l||Function("return this")(),h=c.Symbol,g=h,f=Object.prototype,d=f.hasOwnProperty,u=f.toString,p=g?g.toStringTag:void 0;var s=function(t){var e=d.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var i=u.call(t);return r&&(e?t[p]=n:delete t[p]),i},y=Object.prototype.toString;var m=s,F=function(t){return y.call(t)},S=h?h.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":S&&S in Object(t)?m(t):F(t)};var B=v,H=function(t){return null!=t&&"object"==typeof t};var $=function(t){return"symbol"==typeof t||H(t)&&"[object Symbol]"==B(t)},D=a,w=$,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,b=/^\w*$/;var z=function(t,e){if(D(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!w(t))||(b.test(t)||!_.test(t)||null!=e&&t in Object(e))};var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},x=v,E=C;var k,W=function(t){if(!E(t))return!1;var e=x(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},A=c["__core-js_shared__"],O=(k=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var N=function(t){return!!O&&O in t},L=Function.prototype.toString;var j=W,V=N,R=C,P=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},T=/^\[object .+?Constructor\]$/,I=Function.prototype,G=Object.prototype,X=I.toString,M=G.hasOwnProperty,Z=RegExp("^"+X.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var U=function(t){return!(!R(t)||V(t))&&(j(t)?Z:T).test(P(t))},q=function(t,e){return null==t?void 0:t[e]};var J=function(t,e){var n=q(t,e);return U(n)?n:void 0},K=J(Object,"create"),Q=K;var Y=function(){this.__data__=Q?Q(null):{},this.size=0};var tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},et=K,nt=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return nt.call(e,t)?e[t]:void 0},it=K,at=Object.prototype.hasOwnProperty;var ot=K;var lt=Y,ct=tt,ht=rt,gt=function(t){var e=this.__data__;return it?void 0!==e[t]:at.call(e,t)},ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};function dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dt.prototype.clear=lt,dt.prototype.delete=ct,dt.prototype.get=ht,dt.prototype.has=gt,dt.prototype.set=ft;var ut=dt;var pt=function(){this.__data__=[],this.size=0};var st=function(t,e){return t===e||t!=t&&e!=e};var yt=function(t,e){for(var n=t.length;n--;)if(st(t[n][0],e))return n;return-1},mt=yt,Ft=Array.prototype.splice;var St=yt;var vt=yt;var Bt=yt;var Ht=pt,$t=function(t){var e=this.__data__,n=mt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ft.call(e,n,1),--this.size,!0)},Dt=function(t){var e=this.__data__,n=St(e,t);return n<0?void 0:e[n][1]},wt=function(t){return vt(this.__data__,t)>-1},_t=function(t,e){var n=this.__data__,r=Bt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=Ht,bt.prototype.delete=$t,bt.prototype.get=Dt,bt.prototype.has=wt,bt.prototype.set=_t;var zt=bt,Ct=J(c,"Map"),xt=ut,Et=zt,kt=Ct;var Wt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var At=function(t,e){var n=t.__data__;return Wt(e)?n["string"==typeof e?"string":"hash"]:n.map},Ot=At;var Nt=At;var Lt=At;var jt=At;var Vt=function(){this.size=0,this.__data__={hash:new xt,map:new(kt||Et),string:new xt}},Rt=function(t){var e=Ot(this,t).delete(t);return this.size-=e?1:0,e},Pt=function(t){return Nt(this,t).get(t)},Tt=function(t){return Lt(this,t).has(t)},It=function(t,e){var n=jt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Vt,Gt.prototype.delete=Rt,Gt.prototype.get=Pt,Gt.prototype.has=Tt,Gt.prototype.set=It;var Xt=Gt;function Mt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Mt.Cache||Xt),n}Mt.Cache=Xt;var Zt=Mt;var Ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Jt=function(t){var e=Zt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ut,(function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)})),e}));var Kt=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Qt=a,Yt=$,te=h?h.prototype:void 0,ee=te?te.toString:void 0;var ne=function t(e){if("string"==typeof e)return e;if(Qt(e))return Kt(e,t)+"";if(Yt(e))return ee?ee.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},re=ne;var ie=a,ae=z,oe=Jt,le=function(t){return null==t?"":re(t)};var ce=$;var he=function(t,e){return ie(t)?t:ae(t,e)?[t]:oe(le(t))},ge=function(t){if("string"==typeof t||ce(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var fe=function(t,e){for(var n=0,r=(e=he(e,t)).length;null!=t&&n<r;)t=t[ge(e[n++])];return n&&n==r?t:void 0};var de=function(t,e,n){var r=null==t?void 0:fe(t,e);return void 0===r?n:r};const ue=(t,e,n)=>e?de(n,e)||de(t,e):n||t,pe=(t,e)=>{const n=e||t.defaultValue;return de(t.collections,n)};var se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(se||(se={}));const ye={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},me=t=>e=>{const n=e.theme,r=pe(ye,n[se.colorScheme]);return n.options&&n.options.color?ue(r,t,n.options.color):ue(r,t)},Fe={Brand:{1:me("Brand.1"),2:me("Brand.2"),3:me("Brand.3"),4:me("Brand.4"),5:me("Brand.5"),6:me("Brand.6")},Primary:me("Primary"),PrimaryDark:me("PrimaryDark"),Secondary:me("Secondary"),Accent:{Light:{1:me("Accent.Light.1"),2:me("Accent.Light.2"),3:me("Accent.Light.3"),4:me("Accent.Light.4"),5:me("Accent.Light.5"),6:me("Accent.Light.6")},Dark:{1:me("Accent.Dark.1"),2:me("Accent.Dark.2"),3:me("Accent.Dark.3")}},Neutral:{1:me("Neutral.1"),2:me("Neutral.2"),3:me("Neutral.3"),4:me("Neutral.4"),5:me("Neutral.5"),6:me("Neutral.6"),7:me("Neutral.7"),8:me("Neutral.8")},Validation:{Green:{Text:me("Validation.Green.Text"),Icon:me("Validation.Green.Icon"),Border:me("Validation.Green.Border"),Background:me("Validation.Green.Background")},Orange:{Text:me("Validation.Orange.Text"),Icon:me("Validation.Orange.Icon"),Border:me("Validation.Orange.Border"),Background:me("Validation.Orange.Background"),Badge:me("Validation.Orange.Badge")},Red:{Text:me("Validation.Red.Text"),Icon:me("Validation.Red.Icon"),Border:me("Validation.Red.Border"),Background:me("Validation.Red.Background")}}},Se=n.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Fe.Primary};
`,ve=e=>t(Se,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Be=e=>t(Se,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),He=e=>t(Se,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),$e=e=>t(Se,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),De=e=>t(Se,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),we=({type:e,...n})=>{switch(e){case"arrow-right":return t(ve,{...n});case"info":return t(He,{...n});case"cross":return t(Be,{...n});case"play":return t($e,{...n});case"search":return t(De,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(_e,{...n,className:i})}}},_e=n.span`
    font-size: 1rem;
`,be={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ze={collections:{base:{D1:{fontFamily:be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=pe(ze,n[se.textStyleScheme]);return n.options&&n.options.textStyle?ue(r,t,n.options.textStyle):ue(r,t)},xe={D1:{fontFamily:Ce("D1.fontFamily"),fontSize:Ce("D1.fontSize"),fontWeight:Ce("D1.fontWeight"),lineHeight:Ce("D1.lineHeight"),letterSpacing:Ce("D1.letterSpacing")},D2:{fontFamily:Ce("D2.fontFamily"),fontSize:Ce("D2.fontSize"),fontWeight:Ce("D2.fontWeight"),lineHeight:Ce("D2.lineHeight"),letterSpacing:Ce("D2.letterSpacing")},D3:{fontFamily:Ce("D3.fontFamily"),fontSize:Ce("D3.fontSize"),fontWeight:Ce("D3.fontWeight"),lineHeight:Ce("D3.lineHeight"),letterSpacing:Ce("D3.letterSpacing")},D4:{fontFamily:Ce("D4.fontFamily"),fontSize:Ce("D4.fontSize"),fontWeight:Ce("D4.fontWeight"),lineHeight:Ce("D4.lineHeight"),letterSpacing:Ce("D4.letterSpacing")},DBody:{fontFamily:Ce("DBody.fontFamily"),fontSize:Ce("DBody.fontSize"),fontWeight:Ce("DBody.fontWeight"),lineHeight:Ce("DBody.lineHeight"),letterSpacing:Ce("DBody.letterSpacing")},H1:{fontFamily:Ce("H1.fontFamily"),fontSize:Ce("H1.fontSize"),fontWeight:Ce("H1.fontWeight"),lineHeight:Ce("H1.lineHeight"),letterSpacing:Ce("H1.letterSpacing")},H2:{fontFamily:Ce("H2.fontFamily"),fontSize:Ce("H2.fontSize"),fontWeight:Ce("H2.fontWeight"),lineHeight:Ce("H2.lineHeight"),letterSpacing:Ce("H2.letterSpacing")},H3:{fontFamily:Ce("H3.fontFamily"),fontSize:Ce("H3.fontSize"),fontWeight:Ce("H3.fontWeight"),lineHeight:Ce("H3.lineHeight"),letterSpacing:Ce("H3.letterSpacing")},H4:{fontFamily:Ce("H4.fontFamily"),fontSize:Ce("H4.fontSize"),fontWeight:Ce("H4.fontWeight"),lineHeight:Ce("H4.lineHeight"),letterSpacing:Ce("H4.letterSpacing")},H5:{fontFamily:Ce("H5.fontFamily"),fontSize:Ce("H5.fontSize"),fontWeight:Ce("H5.fontWeight"),lineHeight:Ce("H5.lineHeight"),letterSpacing:Ce("H5.letterSpacing")},H6:{fontFamily:Ce("H6.fontFamily"),fontSize:Ce("H6.fontSize"),fontWeight:Ce("H6.fontWeight"),lineHeight:Ce("H6.lineHeight"),letterSpacing:Ce("H6.letterSpacing")},Body:{fontFamily:Ce("Body.fontFamily"),fontSize:Ce("Body.fontSize"),fontWeight:Ce("Body.fontWeight"),lineHeight:Ce("Body.lineHeight"),letterSpacing:Ce("Body.letterSpacing")},BodySmall:{fontFamily:Ce("BodySmall.fontFamily"),fontSize:Ce("BodySmall.fontSize"),fontWeight:Ce("BodySmall.fontWeight"),lineHeight:Ce("BodySmall.lineHeight"),letterSpacing:Ce("BodySmall.letterSpacing")},XSmall:{fontFamily:Ce("XSmall.fontFamily"),fontSize:Ce("XSmall.fontSize"),fontWeight:Ce("XSmall.fontWeight"),lineHeight:Ce("XSmall.lineHeight"),letterSpacing:Ce("XSmall.letterSpacing")}},Ee=t=>{switch(t){case 700:case"bold":return be.Bold;case 600:case"semibold":return be.Semibold;case 300:case"light":return be.Light;case 400:case"regular":return be.Regular;default:return""}},ke=(t,e)=>n=>{const i=xe[t].fontFamily(n),a=xe[t].fontWeight(n);return Object.values(be).includes(i)?r`
                font-family: ${Ee(e)||Ee(a)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${(We(e)||a)??"normal"};
        `},We=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ae=ke,Oe=(t,e,n=!1)=>i=>{const a=xe[t],o=a.fontSize(i);return r`
            ${ke(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ne=(t=!1,e=!1)=>e?r`
            display: block;
        `:t?r`
            display: inline;
        `:r`
            display: block;
        `;var Le;!function(t){t.D1=n.h1`
        ${t=>r`
                ${Oe("D1",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.D2=n.h1`
        ${t=>r`
                ${Oe("D2",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.D3=n.h1`
        ${t=>r`
                ${Oe("D3",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.D4=n.h1`
        ${t=>r`
                ${Oe("D4",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.DBody=n.h1`
        ${t=>r`
                ${Oe("DBody",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H1=n.h1`
        ${t=>r`
                ${Oe("H1",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H2=n.h2`
        ${t=>r`
                ${Oe("H2",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H3=n.h3`
        ${t=>r`
                ${Oe("H3",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H4=n.h4`
        ${t=>r`
                ${Oe("H4",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H5=n.h5`
        ${t=>r`
                ${Oe("H5",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.H6=n.h6`
        ${t=>r`
                ${Oe("H6",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.Body=n.p`
        ${t=>r`
                ${Oe("Body",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=n.p`
        ${t=>r`
                ${Oe("BodySmall",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.XSmall=n.span`
        ${t=>r`
                ${Oe("XSmall",t.weight,t.paragraph)}
                color: ${Fe.Neutral[1]};
                ${Ne(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Re({...t,textStyle:"Body"}),Small:t=>Re({...t,textStyle:"BodySmall"})}}(Le||(Le={}));const je=n.a`
    ${t=>r`
            ${Oe(t.textStyle,t.weight)}
            color: ${Fe.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Fe.Secondary};
            }
        `}
`,Ve=n(we)`
    margin-left: 0.4rem;
`,Re=({external:n=!1,children:r,...i})=>e(je,{...i,children:[r,n&&t(Ve,{type:"external"})]});var Pe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Pe||(Pe={}));const Te=n.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${Oe("BodySmall","regular")}

    ${t=>{let e,n;switch(t.$type){case"error":e=Fe.Validation.Red.Background(t),n=Fe.Validation.Red.Border(t);break;case"success":default:e=Fe.Validation.Green.Background(t),n=Fe.Validation.Green.Border(t);break;case"warning":e=Fe.Validation.Orange.Background(t),n=Fe.Validation.Orange.Border(t)}return`\n\t\t\tbackground: ${e};\n\t\t\tborder-left: 2pt solid ${n};\n\t\t`}}

	p {
        ${Oe("BodySmall","regular")}
        /* display: inline-block; */

		strong {
            ${Ae("BodySmall","semibold")}
        }

        a {
            color: ${Fe.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Fe.Secondary};
            }
        }
    }
`,Ie=n(Le.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    :hover {
        #path {
            // This belongs to the arrow icon
            fill: ${Fe.Secondary};
        }
    }
`,Ge=n(we)`
    margin-left: 0.25rem;

    #path {
        fill: ${Fe.Primary};
    }
`,Xe=({type:n,className:r,children:i,actionLink:a,...o})=>e(Te,{className:r,$type:n,"data-testid":o["data-testid"],children:[i,a&&e(Ie,{weight:"semibold",...a,"data-testid":"action-link",children:[a.children,t(Ge,{type:"arrow-right"})]})]});export{Xe as Alert};
//# sourceMappingURL=index.js.map
