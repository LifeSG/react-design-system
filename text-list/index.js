import{jsx as t}from"react/jsx-runtime";import e,{css as n}from"styled-components";const i={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},o=t=>Object.keys(i).reduce(((e,n)=>{const o=i[n];return e[n]=`@media screen and (${t}: ${o}px)`,e}),{}),r=o("max-width");o("min-width");var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=Array.isArray,c="object"==typeof a&&a&&a.Object===Object&&a,f="object"==typeof self&&self&&self.Object===Object&&self,u=c||f||Function("return this")(),g=u.Symbol,s=g,h=Object.prototype,d=h.hasOwnProperty,y=h.toString,p=s?s.toStringTag:void 0;var F=function(t){var e=d.call(t,p),n=t[p];try{t[p]=void 0;var i=!0}catch(t){}var o=y.call(t);return i&&(e?t[p]=n:delete t[p]),o},m=Object.prototype.toString;var S=F,v=function(t){return m.call(t)},B=g?g.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?S(t):v(t)};var D=H,_=function(t){return null!=t&&"object"==typeof t};var b=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==D(t)},z=l,E=b,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/;var A=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||($.test(t)||!W.test(t)||null!=e&&t in Object(e))};var O=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},j=H,k=O;var w,x=function(t){if(!k(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},C=u["__core-js_shared__"],V=(w=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var T=function(t){return!!V&&V in t},R=Function.prototype.toString;var L=x,P=T,I=O,N=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,X=Function.prototype,M=Object.prototype,U=X.toString,q=M.hasOwnProperty,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!I(t)||P(t))&&(L(t)?J:G).test(N(t))},Q=function(t,e){return null==t?void 0:t[e]};var Y=function(t,e){var n=Q(t,e);return K(n)?n:void 0},Z=Y(Object,"create"),tt=Z;var et=function(){this.__data__=tt?tt(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=Z,ot=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},at=Z,lt=Object.prototype.hasOwnProperty;var ct=Z;var ft=et,ut=nt,gt=rt,st=function(t){var e=this.__data__;return at?void 0!==e[t]:lt.call(e,t)},ht=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this};function dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}dt.prototype.clear=ft,dt.prototype.delete=ut,dt.prototype.get=gt,dt.prototype.has=st,dt.prototype.set=ht;var yt=dt;var pt=function(){this.__data__=[],this.size=0};var Ft=function(t,e){return t===e||t!=t&&e!=e};var mt=function(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1},St=mt,vt=Array.prototype.splice;var Bt=mt;var Ht=mt;var Dt=mt;var _t=pt,bt=function(t){var e=this.__data__,n=St(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Bt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Ht(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,i=Dt(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}$t.prototype.clear=_t,$t.prototype.delete=bt,$t.prototype.get=zt,$t.prototype.has=Et,$t.prototype.set=Wt;var At=$t,Ot=Y(u,"Map"),jt=yt,kt=At,wt=Ot;var xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ct=function(t,e){var n=t.__data__;return xt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Ct;var Tt=Ct;var Rt=Ct;var Lt=Ct;var Pt=function(){this.size=0,this.__data__={hash:new jt,map:new(wt||kt),string:new jt}},It=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Nt=function(t){return Tt(this,t).get(t)},Gt=function(t){return Rt(this,t).has(t)},Xt=function(t,e){var n=Lt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Mt.prototype.clear=Pt,Mt.prototype.delete=It,Mt.prototype.get=Nt,Mt.prototype.has=Gt,Mt.prototype.set=Xt;var Ut=Mt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],r=n.cache;if(r.has(o))return r.get(o);var a=t.apply(this,i);return n.cache=r.set(o,a)||r,a};return n.cache=new(qt.Cache||Ut),n}qt.Cache=Ut;var Jt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/\\(\\)?/g,Yt=function(t){var e=Jt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,i,o){e.push(i?o.replace(Qt,"$1"):n||t)})),e}));var Zt=function(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o},te=l,ee=b,ne=g?g.prototype:void 0,ie=ne?ne.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(te(e))return Zt(e,t)+"";if(ee(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},re=oe;var ae=l,le=A,ce=Yt,fe=function(t){return null==t?"":re(t)};var ue=b;var ge=function(t,e){return ae(t)?t:le(t,e)?[t]:ce(fe(t))},se=function(t){if("string"==typeof t||ue(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var he=function(t,e){for(var n=0,i=(e=ge(e,t)).length;null!=t&&n<i;)t=t[se(e[n++])];return n&&n==i?t:void 0};var de=function(t,e,n){var i=null==t?void 0:he(t,e);return void 0===i?n:i};const ye=(t,e,n)=>e?de(n,e)||de(t,e):n||t,pe=(t,e)=>{const n=e||t.defaultValue;return de(t.collections,n)};var Fe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Fe||(Fe={}));const me={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Se=t=>e=>{const n=e.theme,i=pe(me,n[Fe.colorScheme]);return n.options&&n.options.color?ye(i,t,n.options.color):ye(i,t)},ve=(Se("Brand.1"),Se("Brand.2"),Se("Brand.3"),Se("Brand.4"),Se("Brand.5"),Se("Brand.6"),Se("Primary"),Se("PrimaryDark"),Se("Secondary"),Se("Accent.Light.1"),Se("Accent.Light.2"),Se("Accent.Light.3"),Se("Accent.Light.4"),Se("Accent.Light.5"),Se("Accent.Light.6"),Se("Accent.Dark.1"),Se("Accent.Dark.2"),Se("Accent.Dark.3"),{1:Se("Neutral.1"),2:Se("Neutral.2"),3:Se("Neutral.3"),4:Se("Neutral.4"),5:Se("Neutral.5"),6:Se("Neutral.6"),7:Se("Neutral.7"),8:Se("Neutral.8")}),Be=(Se("Validation.Green.Text"),Se("Validation.Green.Icon"),Se("Validation.Green.Border"),Se("Validation.Green.Background"),Se("Validation.Orange.Text"),Se("Validation.Orange.Icon"),Se("Validation.Orange.Border"),Se("Validation.Orange.Background"),Se("Validation.Orange.Badge"),Se("Validation.Red.Text"),Se("Validation.Red.Icon"),Se("Validation.Red.Border"),Se("Validation.Red.Background"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),He={collections:{base:{D1:{fontFamily:Be.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Be.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Be.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Be.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Be.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Be.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Be.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Be.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Be.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Be.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Be.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Be.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,i=pe(He,n[Fe.textStyleScheme]);return n.options&&n.options.textStyle?ye(i,t,n.options.textStyle):ye(i,t)},_e={D1:{fontFamily:De("D1.fontFamily"),fontSize:De("D1.fontSize"),fontWeight:De("D1.fontWeight"),lineHeight:De("D1.lineHeight"),letterSpacing:De("D1.letterSpacing")},D2:{fontFamily:De("D2.fontFamily"),fontSize:De("D2.fontSize"),fontWeight:De("D2.fontWeight"),lineHeight:De("D2.lineHeight"),letterSpacing:De("D2.letterSpacing")},D3:{fontFamily:De("D3.fontFamily"),fontSize:De("D3.fontSize"),fontWeight:De("D3.fontWeight"),lineHeight:De("D3.lineHeight"),letterSpacing:De("D3.letterSpacing")},D4:{fontFamily:De("D4.fontFamily"),fontSize:De("D4.fontSize"),fontWeight:De("D4.fontWeight"),lineHeight:De("D4.lineHeight"),letterSpacing:De("D4.letterSpacing")},DBody:{fontFamily:De("DBody.fontFamily"),fontSize:De("DBody.fontSize"),fontWeight:De("DBody.fontWeight"),lineHeight:De("DBody.lineHeight"),letterSpacing:De("DBody.letterSpacing")},H1:{fontFamily:De("H1.fontFamily"),fontSize:De("H1.fontSize"),fontWeight:De("H1.fontWeight"),lineHeight:De("H1.lineHeight"),letterSpacing:De("H1.letterSpacing")},H2:{fontFamily:De("H2.fontFamily"),fontSize:De("H2.fontSize"),fontWeight:De("H2.fontWeight"),lineHeight:De("H2.lineHeight"),letterSpacing:De("H2.letterSpacing")},H3:{fontFamily:De("H3.fontFamily"),fontSize:De("H3.fontSize"),fontWeight:De("H3.fontWeight"),lineHeight:De("H3.lineHeight"),letterSpacing:De("H3.letterSpacing")},H4:{fontFamily:De("H4.fontFamily"),fontSize:De("H4.fontSize"),fontWeight:De("H4.fontWeight"),lineHeight:De("H4.lineHeight"),letterSpacing:De("H4.letterSpacing")},H5:{fontFamily:De("H5.fontFamily"),fontSize:De("H5.fontSize"),fontWeight:De("H5.fontWeight"),lineHeight:De("H5.lineHeight"),letterSpacing:De("H5.letterSpacing")},H6:{fontFamily:De("H6.fontFamily"),fontSize:De("H6.fontSize"),fontWeight:De("H6.fontWeight"),lineHeight:De("H6.lineHeight"),letterSpacing:De("H6.letterSpacing")},Body:{fontFamily:De("Body.fontFamily"),fontSize:De("Body.fontSize"),fontWeight:De("Body.fontWeight"),lineHeight:De("Body.lineHeight"),letterSpacing:De("Body.letterSpacing")},BodySmall:{fontFamily:De("BodySmall.fontFamily"),fontSize:De("BodySmall.fontSize"),fontWeight:De("BodySmall.fontWeight"),lineHeight:De("BodySmall.lineHeight"),letterSpacing:De("BodySmall.letterSpacing")},XSmall:{fontFamily:De("XSmall.fontFamily"),fontSize:De("XSmall.fontSize"),fontWeight:De("XSmall.fontWeight"),lineHeight:De("XSmall.lineHeight"),letterSpacing:De("XSmall.letterSpacing")}},be=t=>{switch(t){case 700:case"bold":return Be.Bold;case 600:case"semibold":return Be.Semibold;case 300:case"light":return Be.Light;case 400:case"regular":return Be.Regular;default:return""}},ze=(t,e)=>i=>{const o=_e[t].fontFamily(i),r=_e[t].fontWeight(i);return Object.values(Be).includes(o)?n`
                font-family: ${be(e)||be(r)||o};
                font-weight: normal !important;
            `:n`
            font-family: ${o};
            font-weight: ${(Ee(e)||r)??"normal"};
        `},Ee=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},We=(t,e,i=!1)=>o=>{const r=_e[t],a=r.fontSize(o);return n`
            ${ze(t,e)}
            font-size: ${a}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(o)||0}rem !important;
            ${n`
                margin-bottom: ${a*(i?1.05:0)}rem;
            `}
        `},$e=t=>`\n\tmargin-bottom: ${t||0}rem;\n`,Ae=e.ol`
    ${t=>$e(t.bottomMargin)}
    margin-left: ${3}rem;

    ${r.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${t=>We(t.size,"regular")}
        position: relative;
        color: ${ve[1]};
    }

    ${t=>{const{reversed:e}=t,i=t.counterType||"decimal",o=t.counterSeparator||")";return n`
            li:before {
                content: counter(list, ${i}) "${o}";
                counter-increment: ${e?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${t=>{const{reversed:e,start:i}=t;if(i){return n`
                counter-reset: list ${e?i+1:i-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,Oe=e.ul`
    ${t=>$e(t.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${t=>t.bulletType||"disc"};

    li {
        ${t=>We(t.size,"regular")}
        color: ${ve[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,je={Ul:({size:e="Body",children:n,...i})=>t(Oe,{size:e,...i,children:n}),Ol:({size:e="Body",children:n,...i})=>t(Ae,{size:e,...i,children:n})};export{je as TextList};
//# sourceMappingURL=index.js.map
