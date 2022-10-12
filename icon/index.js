import{jsx as t}from"react/jsx-runtime";import r from"styled-components";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Array.isArray,a="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,i=a||o||Function("return this")(),c=i.Symbol,l=c,u=Object.prototype,s=u.hasOwnProperty,d=u.toString,h=l?l.toStringTag:void 0;var f=function(t){var r=s.call(t,h),e=t[h];try{t[h]=void 0;var n=!0}catch(t){}var a=d.call(t);return n&&(r?t[h]=e:delete t[h]),a},p=Object.prototype.toString;var v=f,F=function(t){return p.call(t)},g=c?c.toStringTag:void 0;var y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?v(t):F(t)};var _=y,B=function(t){return null!=t&&"object"==typeof t};var m=function(t){return"symbol"==typeof t||B(t)&&"[object Symbol]"==_(t)},C=n,w=m,b=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var D=function(t,r){if(C(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!w(t))||(E.test(t)||!b.test(t)||null!=r&&t in Object(r))};var A=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},j=y,x=A;var O,k=function(t){if(!x(t))return!1;var r=j(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},S=i["__core-js_shared__"],z=(O=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var V=function(t){return!!z&&z in t},T=Function.prototype.toString;var N=k,R=V,L=A,P=function(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""},$=/^\[object .+?Constructor\]$/,I=Function.prototype,G=Object.prototype,M=I.toString,Z=G.hasOwnProperty,H=RegExp("^"+M.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var U=function(t){return!(!L(t)||R(t))&&(N(t)?H:$).test(P(t))},q=function(t,r){return null==t?void 0:t[r]};var J=function(t,r){var e=q(t,r);return U(e)?e:void 0},K=J(Object,"create"),Q=K;var W=function(){this.__data__=Q?Q(null):{},this.size=0};var X=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Y=K,tt=Object.prototype.hasOwnProperty;var rt=function(t){var r=this.__data__;if(Y){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return tt.call(r,t)?r[t]:void 0},et=K,nt=Object.prototype.hasOwnProperty;var at=K;var ot=W,it=X,ct=rt,lt=function(t){var r=this.__data__;return et?void 0!==r[t]:nt.call(r,t)},ut=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=at&&void 0===r?"__lodash_hash_undefined__":r,this};function st(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}st.prototype.clear=ot,st.prototype.delete=it,st.prototype.get=ct,st.prototype.has=lt,st.prototype.set=ut;var dt=st;var ht=function(){this.__data__=[],this.size=0};var ft=function(t,r){return t===r||t!=t&&r!=r};var pt=function(t,r){for(var e=t.length;e--;)if(ft(t[e][0],r))return e;return-1},vt=pt,Ft=Array.prototype.splice;var gt=pt;var yt=pt;var _t=pt;var Bt=ht,mt=function(t){var r=this.__data__,e=vt(r,t);return!(e<0)&&(e==r.length-1?r.pop():Ft.call(r,e,1),--this.size,!0)},Ct=function(t){var r=this.__data__,e=gt(r,t);return e<0?void 0:r[e][1]},wt=function(t){return yt(this.__data__,t)>-1},bt=function(t,r){var e=this.__data__,n=_t(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Et(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Et.prototype.clear=Bt,Et.prototype.delete=mt,Et.prototype.get=Ct,Et.prototype.has=wt,Et.prototype.set=bt;var Dt=Et,At=J(i,"Map"),jt=dt,xt=Dt,Ot=At;var kt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var St=function(t,r){var e=t.__data__;return kt(r)?e["string"==typeof r?"string":"hash"]:e.map},zt=St;var Vt=St;var Tt=St;var Nt=St;var Rt=function(){this.size=0,this.__data__={hash:new jt,map:new(Ot||xt),string:new jt}},Lt=function(t){var r=zt(this,t).delete(t);return this.size-=r?1:0,r},Pt=function(t){return Vt(this,t).get(t)},$t=function(t){return Tt(this,t).has(t)},It=function(t,r){var e=Nt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Gt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Gt.prototype.clear=Rt,Gt.prototype.delete=Lt,Gt.prototype.get=Pt,Gt.prototype.has=$t,Gt.prototype.set=It;var Mt=Gt;function Zt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=e.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return e.cache=o.set(a,i)||o,i};return e.cache=new(Zt.Cache||Mt),e}Zt.Cache=Mt;var Ht=Zt;var Ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Jt=function(t){var r=Ht(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Ut,(function(t,e,n,a){r.push(n?a.replace(qt,"$1"):e||t)})),r}));var Kt=function(t,r){for(var e=-1,n=null==t?0:t.length,a=Array(n);++e<n;)a[e]=r(t[e],e,t);return a},Qt=n,Wt=m,Xt=c?c.prototype:void 0,Yt=Xt?Xt.toString:void 0;var tr=function t(r){if("string"==typeof r)return r;if(Qt(r))return Kt(r,t)+"";if(Wt(r))return Yt?Yt.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},rr=tr;var er=n,nr=D,ar=Jt,or=function(t){return null==t?"":rr(t)};var ir=m;var cr=function(t,r){return er(t)?t:nr(t,r)?[t]:ar(or(t))},lr=function(t){if("string"==typeof t||ir(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var ur=function(t,r){for(var e=0,n=(r=cr(r,t)).length;null!=t&&e<n;)t=t[lr(r[e++])];return e&&e==n?t:void 0};var sr=function(t,r,e){var n=null==t?void 0:ur(t,r);return void 0===n?e:n};const dr=(t,r,e)=>r?sr(e,r)||sr(t,r):e||t;var hr;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(hr||(hr={}));const fr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},pr=t=>r=>{const e=r.theme,n=((t,r)=>{const e=r||t.defaultValue;return sr(t.collections,e)})(fr,e[hr.colorScheme]);return e.options&&e.options.color?dr(n,t,e.options.color):dr(n,t)},vr=(pr("Brand.1"),pr("Brand.2"),pr("Brand.3"),pr("Brand.4"),pr("Brand.5"),pr("Brand.6"),pr("Primary"),pr("PrimaryDark"),pr("Secondary"),pr("Accent.Light.1"),pr("Accent.Light.2"),pr("Accent.Light.3"),pr("Accent.Light.4"),pr("Accent.Light.5"),pr("Accent.Light.6"),pr("Accent.Dark.1"),pr("Accent.Dark.2"),pr("Accent.Dark.3"),{1:pr("Neutral.1"),2:pr("Neutral.2"),3:pr("Neutral.3"),4:pr("Neutral.4"),5:pr("Neutral.5"),6:pr("Neutral.6"),7:pr("Neutral.7"),8:pr("Neutral.8")}),Fr=(pr("Validation.Green.Text"),pr("Validation.Green.Icon"),pr("Validation.Green.Border"),pr("Validation.Green.Background"),pr("Validation.Orange.Text"),pr("Validation.Orange.Icon"),pr("Validation.Orange.Border"),pr("Validation.Orange.Background"),pr("Validation.Orange.Badge"),pr("Validation.Red.Text"),pr("Validation.Red.Icon"),pr("Validation.Red.Border"),pr("Validation.Red.Background"),r.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${vr[8]};
    }
`),gr=r=>t(Fr,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...r,children:t("g",{fill:"none",fillRule:"evenodd",children:t("g",{id:"path",fillRule:"nonzero",children:t("g",{children:t("g",{children:t("g",{children:t("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),yr=r=>t(Fr,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...r,children:t("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),_r=r=>t(Fr,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...r,children:t("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Br=r=>t(Fr,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...r,children:t("g",{id:"search",children:t("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),mr=({type:r,...e})=>{switch(r){case"arrow-right":return t(gr,{...e});case"info":return t(yr,{...e});case"search":return t(Br,{...e});case"play-alt":return t(_r,{...e});default:{const n=`sgds-icon sgds-icon-${r}`,a=e.className?`${n} ${e.className}`:n;return t(Cr,{...e,className:a})}}},Cr=r.span`
    font-size: 1rem;
`;export{mr as Icon};
//# sourceMappingURL=index.js.map
