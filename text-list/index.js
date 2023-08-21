import{jsx as t}from"react/jsx-runtime";import e,{css as n}from"styled-components";function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const i={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},o=t=>Object.keys(i).reduce(((e,n)=>{const r=i[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),a=o("max-width");o("min-width");var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=Array.isArray,f="object"==typeof l&&l&&l.Object===Object&&l,u="object"==typeof self&&self&&self.Object===Object&&self,g=f||u||Function("return this")(),s=g.Symbol,d=s,h=Object.prototype,F=h.hasOwnProperty,y=h.toString,p=d?d.toStringTag:void 0;var m=function(t){var e=F.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[p]=n:delete t[p]),i},S=Object.prototype.toString;var B=m,v=function(t){return S.call(t)},D=s?s.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?B(t):v(t)};var H=b,_=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==H(t)},z=c,A=E,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var W=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!A(t))||(C.test(t)||!O.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},$=b,j=k;var w,x=function(t){if(!j(t))return!1;var e=$(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},T=g["__core-js_shared__"],V=(w=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var I=function(t){return!!V&&V in t},R=Function.prototype.toString;var P=x,L=I,N=k,G=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!N(t)||L(t))&&(P(t)?K:X).test(G(t))},Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},tt=Z(Object,"create"),et=tt;var nt=function(){this.__data__=et?et(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=tt,ot=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},lt=tt,ct=Object.prototype.hasOwnProperty;var ft=tt;var ut=nt,gt=rt,st=at,dt=function(t){var e=this.__data__;return lt?void 0!==e[t]:ct.call(e,t)},ht=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=ut,Ft.prototype.delete=gt,Ft.prototype.get=st,Ft.prototype.has=dt,Ft.prototype.set=ht;var yt=Ft;var pt=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var St=function(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1},Bt=St,vt=Array.prototype.splice;var Dt=St;var bt=St;var Ht=St;var _t=pt,Et=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},At=function(t){return bt(this.__data__,t)>-1},Ot=function(t,e){var n=this.__data__,r=Ht(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ct.prototype.clear=_t,Ct.prototype.delete=Et,Ct.prototype.get=zt,Ct.prototype.has=At,Ct.prototype.set=Ot;var Wt=Ct,kt=Z(g,"Map"),$t=yt,jt=Wt,wt=kt;var xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Tt=function(t,e){var n=t.__data__;return xt(e)?n["string"==typeof e?"string":"hash"]:n.map},Vt=Tt;var It=Tt;var Rt=Tt;var Pt=Tt;var Lt=function(){this.size=0,this.__data__={hash:new $t,map:new(wt||jt),string:new $t}},Nt=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return It(this,t).get(t)},Xt=function(t){return Rt(this,t).has(t)},Mt=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Lt,Ut.prototype.delete=Nt,Ut.prototype.get=Gt,Ut.prototype.has=Xt,Ut.prototype.set=Mt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,Zt=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,r,i){e.push(r?i.replace(Yt,"$1"):n||t)})),e}));var te=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ee=c,ne=E,re=s?s.prototype:void 0,ie=re?re.toString:void 0;var oe=function t(e){if("string"==typeof e)return e;if(ee(e))return te(e,t)+"";if(ne(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ae=oe;var le=c,ce=W,fe=Zt,ue=function(t){return null==t?"":ae(t)};var ge=E;var se=function(t,e){return le(t)?t:ce(t,e)?[t]:fe(ue(t))},de=function(t){if("string"==typeof t||ge(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var he=function(t,e){for(var n=0,r=(e=se(e,t)).length;null!=t&&n<r;)t=t[de(e[n++])];return n&&n==r?t:void 0};var Fe=function(t,e,n){var r=null==t?void 0:he(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?Fe(n,e)||Fe(t,e):n||t,pe=(t,e)=>{const n=e||t.defaultValue;return Fe(t.collections,n)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(me||(me={}));const Se={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,r=pe(Se,n[me.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},ve=(Be("Brand.1"),Be("Brand.2"),Be("Brand.3"),Be("Brand.4"),Be("Brand.5"),Be("Brand.6"),Be("Primary"),Be("PrimaryDark"),Be("Secondary"),Be("Accent.Light.1"),Be("Accent.Light.2"),Be("Accent.Light.3"),Be("Accent.Light.4"),Be("Accent.Light.5"),Be("Accent.Light.6"),Be("Accent.Dark.1"),Be("Accent.Dark.2"),Be("Accent.Dark.3"),{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")}),De=(Be("Validation.Green.Text"),Be("Validation.Green.Icon"),Be("Validation.Green.Border"),Be("Validation.Green.Background"),Be("Validation.Orange.Text"),Be("Validation.Orange.Icon"),Be("Validation.Orange.Border"),Be("Validation.Orange.Background"),Be("Validation.Orange.Badge"),Be("Validation.Red.Text"),Be("Validation.Red.Icon"),Be("Validation.Red.Border"),Be("Validation.Red.Background"),Be("Validation.Blue.Text"),Be("Validation.Blue.Icon"),Be("Validation.Blue.Border"),Be("Validation.Blue.Background"),Be("Shadow.Accent"),Be("Shadow.Red"),Be("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),be={collections:{base:{D1:{fontFamily:De.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:De.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:De.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:De.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:De.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:De.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:De.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:De.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:De.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:De.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=pe(be,n[me.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},_e={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing")}},Ee=t=>{switch(t){case 700:case"bold":return De.Bold;case 600:case"semibold":return De.Semibold;case 300:case"light":return De.Light;case 400:case"regular":return De.Regular;default:return""}},ze=(t,e)=>r=>{var i;const o=_e[t].fontFamily(r),a=_e[t].fontWeight(r);return Object.values(De).includes(o)?n`
                font-family: ${Ee(e)||Ee(a)||o};
                font-weight: normal !important;
            `:n`
            font-family: ${o};
            font-weight: ${null!==(i=Ae(e)||a)&&void 0!==i?i:"normal"};
        `},Ae=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oe=(t,e,r=!1)=>i=>{const o=_e[t],a=o.fontSize(i);return n`
            ${ze(t,e)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Ce=t=>`\n\tmargin-bottom: ${t||0}rem;\n`,We=e.ol`
    ${t=>Ce(t.bottomMargin)}
    margin-left: ${3}rem;

    ${a.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${t=>Oe(t.size,"regular")}
        position: relative;
        color: ${ve[1]};
    }

    ${t=>{const{reversed:e}=t,r=t.counterType||"decimal",i=t.counterSeparator||")";return n`
            li:before {
                content: counter(list, ${r}) "${i}";
                counter-increment: ${e?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${t=>{const{reversed:e,start:r}=t;if(r){return n`
                counter-reset: list ${e?r+1:r-1};
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
`,ke=e.ul`
    ${t=>Ce(t.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${t=>t.bulletType||"disc"};

    li {
        ${t=>Oe(t.size,"regular")}
        color: ${ve[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,$e={Ul:e=>{var{size:n="Body",children:i}=e,o=r(e,["size","children"]);return t(ke,Object.assign({size:n},o,{children:i}))},Ol:e=>{var{size:n="Body",children:i}=e,o=r(e,["size","children"]);return t(We,Object.assign({size:n},o,{children:i}))}};export{$e as TextList};
//# sourceMappingURL=index.js.map
