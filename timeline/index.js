import{createElement as t}from"react";import{jsx as e,jsxs as n,Fragment as i}from"react/jsx-runtime";import r,{css as a}from"styled-components";const o={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},l={D1:{fontFamily:o.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:o.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:o.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:o.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:o.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:o.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:o.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:o.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:o.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:o.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:o.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,f=g||d||Function("return this")(),s=f.Symbol,p=s,u=Object.prototype,m=u.hasOwnProperty,y=u.toString,F=p?p.toStringTag:void 0;var S=function(t){var e=m.call(t,F),n=t[F];try{t[F]=void 0;var i=!0}catch(t){}var r=y.call(t);return i&&(e?t[F]=n:delete t[F]),r},v=Object.prototype.toString;var $=S,H=function(t){return v.call(t)},B=s?s.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?$(t):H(t)};var b=D,_=function(t){return null!=t&&"object"==typeof t};var w=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==b(t)},z=h,C=w,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/;var W=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(E.test(t)||!x.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},A=D,O=k;var j,L=function(t){if(!O(t))return!1;var e=A(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=f["__core-js_shared__"],R=(j=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(t){return!!R&&R in t},T=Function.prototype.toString;var P=L,I=V,X=k,M=function(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,Z=Function.prototype,U=Object.prototype,q=Z.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!X(t)||I(t))&&(P(t)?K:G).test(M(t))},Y=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var it=function(){this.__data__=nt?nt(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=et,ot=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},ct=et,ht=Object.prototype.hasOwnProperty;var gt=et;var dt=it,ft=rt,st=lt,pt=function(t){var e=this.__data__;return ct?void 0!==e[t]:ht.call(e,t)},ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}mt.prototype.clear=dt,mt.prototype.delete=ft,mt.prototype.get=st,mt.prototype.has=pt,mt.prototype.set=ut;var yt=mt;var Ft=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},$t=vt,Ht=Array.prototype.splice;var Bt=vt;var Dt=vt;var bt=vt;var _t=Ft,wt=function(t){var e=this.__data__,n=$t(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Bt(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return Dt(this.__data__,t)>-1},xt=function(t,e){var n=this.__data__,i=bt(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Et.prototype.clear=_t,Et.prototype.delete=wt,Et.prototype.get=zt,Et.prototype.has=Ct,Et.prototype.set=xt;var Wt=Et,kt=tt(f,"Map"),At=yt,Ot=Wt,jt=kt;var Lt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Nt=function(t,e){var n=t.__data__;return Lt(e)?n["string"==typeof e?"string":"hash"]:n.map},Rt=Nt;var Vt=Nt;var Tt=Nt;var Pt=Nt;var It=function(){this.size=0,this.__data__={hash:new At,map:new(jt||Ot),string:new At}},Xt=function(t){var e=Rt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Vt(this,t).get(t)},Gt=function(t){return Tt(this,t).has(t)},Zt=function(t,e){var n=Pt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ut.prototype.clear=It,Ut.prototype.delete=Xt,Ut.prototype.get=Mt,Ut.prototype.has=Gt,Ut.prototype.set=Zt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],a=n.cache;if(a.has(r))return a.get(r);var o=t.apply(this,i);return n.cache=a.set(r,o)||a,o};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,te=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,i,r){e.push(i?r.replace(Yt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ne=h,ie=w,re=s?s.prototype:void 0,ae=re?re.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=oe;var ce=h,he=W,ge=te,de=function(t){return null==t?"":le(t)};var fe=w;var se=function(t,e){return ce(t)?t:he(t,e)?[t]:ge(de(t))},pe=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var ue=function(t,e){for(var n=0,i=(e=se(e,t)).length;null!=t&&n<i;)t=t[pe(e[n++])];return n&&n==i?t:void 0};var me=function(t,e,n){var i=null==t?void 0:ue(t,e);return void 0===i?n:i};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Se||(Se={}));const ve={collections:{base:l},defaultValue:"base"},$e=t=>e=>{const n=e.theme,i=Fe(ve,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?ye(i,t,n.options.textStyle):ye(i,t)},He={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},Be=t=>{switch(t){case 700:case"bold":return o.Bold;case 600:case"semibold":return o.Semibold;case 300:case"light":return o.Light;case 400:case"regular":return o.Regular;default:return""}},De=(t,e)=>n=>{const i=He[t].fontFamily(n),r=He[t].fontWeight(n);return Object.values(o).includes(i)?a`
                font-family: ${Be(e)||Be(r)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${(be(e)||r)??"normal"};
        `},be=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_e=(t,e,n=!1)=>i=>{const r=He[t],o=r.fontSize(i);return a`
            ${De(t,e)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},we=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `,ze={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,i=Fe(ze,n[Se.colorScheme]);return n.options&&n.options.color?ye(i,t,n.options.color):ye(i,t)},xe=(Ce("Brand.1"),Ce("Brand.2"),Ce("Brand.3"),Ce("Brand.4"),Ce("Brand.5"),Ce("Brand.6"),Ce("Primary")),Ee=(Ce("PrimaryDark"),Ce("Secondary")),We={Light:{1:Ce("Accent.Light.1"),2:Ce("Accent.Light.2"),3:Ce("Accent.Light.3"),4:Ce("Accent.Light.4"),5:Ce("Accent.Light.5"),6:Ce("Accent.Light.6")},Dark:{1:Ce("Accent.Dark.1"),2:Ce("Accent.Dark.2"),3:Ce("Accent.Dark.3")}},ke={1:Ce("Neutral.1"),2:Ce("Neutral.2"),3:Ce("Neutral.3"),4:Ce("Neutral.4"),5:Ce("Neutral.5"),6:Ce("Neutral.6"),7:Ce("Neutral.7"),8:Ce("Neutral.8")},Ae=(Ce("Validation.Green.Text"),Ce("Validation.Green.Icon"),Ce("Validation.Green.Border"),Ce("Validation.Green.Background"),Ce("Validation.Orange.Text"),Ce("Validation.Orange.Icon"),Ce("Validation.Orange.Border"),Ce("Validation.Orange.Background"),Ce("Validation.Orange.Badge"),Ce("Validation.Red.Text"),Ce("Validation.Red.Icon"),Ce("Validation.Red.Border"),Ce("Validation.Red.Background"),r.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;

    #path {
        fill: ${ke[8]};
    }
`),Oe=t=>e(Ae,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("g",{fill:"none",fillRule:"evenodd",children:e("g",{id:"path",fillRule:"nonzero",children:e("g",{children:e("g",{children:e("g",{children:e("path",{d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})})})})})})}),je=t=>e(Ae,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Le=t=>e(Ae,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{id:"path",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z",fillRule:"nonzero"})}),Ne=t=>e(Ae,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",fill:"none",...t,children:e("g",{id:"search",children:e("path",{id:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})})}),Re=r.span`
    font-size: 1rem;
`;var Ve;!function(t){t.D1=r.h1`
        ${t=>a`
                ${_e("D1",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>a`
                ${_e("D2",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>a`
                ${_e("D3",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>a`
                ${_e("D4",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>a`
                ${_e("DBody",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>a`
                ${_e("H1",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>a`
                ${_e("H2",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>a`
                ${_e("H3",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>a`
                ${_e("H4",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>a`
                ${_e("H5",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>a`
                ${_e("H6",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>a`
                ${_e("Body",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>a`
                ${_e("BodySmall",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>a`
                ${_e("XSmall",t.weight,t.paragraph)}
                color: ${ke[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ie({...t,textStyle:"Body"}),Small:t=>Ie({...t,textStyle:"BodySmall"})}}(Ve||(Ve={}));const Te=r.a`
    ${t=>a`
            ${_e(t.textStyle,t.weight)}
            color: ${xe};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ee};
            }
        `}
`,Pe=r((({type:t,...n})=>{switch(t){case"arrow-right":return e(Oe,{...n});case"info":return e(je,{...n});case"search":return e(Ne,{...n});case"play-alt":return e(Le,{...n});default:{const i=`sgds-icon sgds-icon-${t}`,r=n.className?`${i} ${n.className}`:i;return e(Re,{...n,className:r})}}}))`
    margin-left: 0.4rem;
`,Ie=({external:t=!1,children:i,...r})=>n(Te,{...r,children:[i,t&&e(Pe,{type:"external"})]});var Xe;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Xe||(Xe={}));const Me={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ge=t=>Object.keys(Me).reduce(((e,n)=>{const i=Me[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),Ze=Ge("max-width"),Ue=(Ge("min-width"),r.div`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${t=>t.$filled?a`
                border: none;
                background-color: ${We.Light[1]};
            `:a`
            border: 3.2px solid ${We.Light[1]};
            background-color: transparent;
        `}
`),qe=r.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${We.Light[1]};
`,Je=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`,Ke=r.div`
    grid-column: ${t=>t.$startCol?t.$startCol:3} / span
        ${t=>t.$colSpan?t.$colSpan:8};

    ${Ze.tablet} {
        grid-column: span 8;
    }

    ${Ze.mobileL} {
        grid-column: span 4;
    }
`,Qe=r(Ve.H3)`
    margin-bottom: 1rem;

    ${Ze.tablet} {
        margin-bottom: 1.5rem;
    }
`,Ye=r.div`
    display: flex;
`,tn=r.div`
    margin-bottom: 2rem;
    width: 100%;
`,en=r(Ve.H4)`
    margin-bottom: 0.5rem;
`,nn=r(Ve.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,rn=r.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?a`
                background-color: ${ke[1]};

                & > span {
                    color: ${ke[8]};
                }
            `:a`
            background-color: ${ke[8]};
            border: 1px solid ${ke[5]};

            & > span {
                color: ${ke[1]};
            }
        `}
`,an=({items:r,className:a,title:o,startCol:l,colSpan:c,"data-base-indicator-testid":h,"data-testid":g="timeline"})=>{const d=t=>"string"==typeof t?e(Ve.Body,{className:"timeline-item-content-text",children:t}):e(i,{children:t}),f=t=>"string"==typeof t?e(en,{weight:"semibold",className:"timeline-item-title",children:t}):e(i,{children:t}),s=n=>n.slice(0,2).map(((n,i)=>t(rn,{...n,key:`status-pill-${i}`,"data-testid":"status-pill",className:"timeline-status-pill"},e(Ve.XSmall,{children:n.label}))));return n(Ke,{className:a,"data-testid":g,$startCol:l,$colSpan:c,children:[e(Qe,{id:"timeline-title",children:o}),r.map(((t,i)=>{const{title:r,content:a,statuses:o}=t;return n(Ye,{children:[n(Je,{children:[e(Ue,{"data-testid":h?`circleindicator${i+1}_div_${h}`:"circleindicator",$filled:0===i}),e(qe,{})]}),n(tn,{className:"timeline-item-content",children:[f(r),o&&e(nn,{children:s(o)}),d(a)]})]},`timeline-item-${i}`)}))]})};export{an as Timeline};
//# sourceMappingURL=index.js.map
