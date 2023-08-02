import{jsxs as t,jsx as e}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as i}from"styled-components";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=Array.isArray,l="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,g=l||c||Function("return this")(),h=g.Symbol,f=h,d=Object.prototype,u=d.hasOwnProperty,p=d.toString,F=f?f.toStringTag:void 0;var s=function(t){var e=u.call(t,F),n=t[F];try{t[F]=void 0;var r=!0}catch(t){}var i=p.call(t);return r&&(e?t[F]=n:delete t[F]),i},y=Object.prototype.toString;var S=s,B=function(t){return y.call(t)},m=h?h.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?S(t):B(t)};var D=v,H=function(t){return null!=t&&"object"==typeof t};var $=function(t){return"symbol"==typeof t||H(t)&&"[object Symbol]"==D(t)},_=a,b=$,E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var A=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!b(t))||(z.test(t)||!E.test(t)||null!=e&&t in Object(e))};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=v,C=w;var k,x=function(t){if(!C(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=g["__core-js_shared__"],j=(k=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var T=function(t){return!!j&&j in t},V=Function.prototype.toString;var I=x,R=T,P=w,L=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},N=/^\[object .+?Constructor\]$/,X=Function.prototype,G=Object.prototype,M=X.toString,U=G.hasOwnProperty,q=RegExp("^"+M.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!P(t)||R(t))&&(I(t)?q:N).test(L(t))},K=function(t,e){return null==t?void 0:t[e]};var Q=function(t,e){var n=K(t,e);return J(n)?n:void 0},Y=Q(Object,"create"),Z=Y;var tt=function(){this.__data__=Z?Z(null):{},this.size=0};var et=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt=Y,rt=Object.prototype.hasOwnProperty;var it=function(t){var e=this.__data__;if(nt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return rt.call(e,t)?e[t]:void 0},ot=Y,at=Object.prototype.hasOwnProperty;var lt=Y;var ct=tt,gt=et,ht=it,ft=function(t){var e=this.__data__;return ot?void 0!==e[t]:at.call(e,t)},dt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ut.prototype.clear=ct,ut.prototype.delete=gt,ut.prototype.get=ht,ut.prototype.has=ft,ut.prototype.set=dt;var pt=ut;var Ft=function(){this.__data__=[],this.size=0};var st=function(t,e){return t===e||t!=t&&e!=e};var yt=function(t,e){for(var n=t.length;n--;)if(st(t[n][0],e))return n;return-1},St=yt,Bt=Array.prototype.splice;var mt=yt;var vt=yt;var Dt=yt;var Ht=Ft,$t=function(t){var e=this.__data__,n=St(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=mt(e,t);return n<0?void 0:e[n][1]},bt=function(t){return vt(this.__data__,t)>-1},Et=function(t,e){var n=this.__data__,r=Dt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=Ht,zt.prototype.delete=$t,zt.prototype.get=_t,zt.prototype.has=bt,zt.prototype.set=Et;var At=zt,wt=Q(g,"Map"),Wt=pt,Ct=At,kt=wt;var xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ot=function(t,e){var n=t.__data__;return xt(e)?n["string"==typeof e?"string":"hash"]:n.map},jt=Ot;var Tt=Ot;var Vt=Ot;var It=Ot;var Rt=function(){this.size=0,this.__data__={hash:new Wt,map:new(kt||Ct),string:new Wt}},Pt=function(t){var e=jt(this,t).delete(t);return this.size-=e?1:0,e},Lt=function(t){return Tt(this,t).get(t)},Nt=function(t){return Vt(this,t).has(t)},Xt=function(t,e){var n=It(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Rt,Gt.prototype.delete=Pt,Gt.prototype.get=Lt,Gt.prototype.has=Nt,Gt.prototype.set=Xt;var Mt=Gt;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ut.Cache||Mt),n}Ut.Cache=Mt;var qt=Ut;var Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Qt=function(t){var e=qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,(function(t,n,r,i){e.push(r?i.replace(Kt,"$1"):n||t)})),e}));var Yt=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Zt=a,te=$,ee=h?h.prototype:void 0,ne=ee?ee.toString:void 0;var re=function t(e){if("string"==typeof e)return e;if(Zt(e))return Yt(e,t)+"";if(te(e))return ne?ne.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ie=re;var oe=a,ae=A,le=Qt,ce=function(t){return null==t?"":ie(t)};var ge=$;var he=function(t,e){return oe(t)?t:ae(t,e)?[t]:le(ce(t))},fe=function(t){if("string"==typeof t||ge(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var de=function(t,e){for(var n=0,r=(e=he(e,t)).length;null!=t&&n<r;)t=t[fe(e[n++])];return n&&n==r?t:void 0};var ue=function(t,e,n){var r=null==t?void 0:de(t,e);return void 0===r?n:r};const pe=(t,e,n)=>e?ue(n,e)||ue(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return ue(t.collections,n)};var se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(se||(se={}));const ye={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Se=t=>e=>{const n=e.theme,r=Fe(ye,n[se.colorScheme]);return n.options&&n.options.color?pe(r,t,n.options.color):pe(r,t)},Be=(Se("Brand.1"),Se("Brand.2"),Se("Brand.3"),Se("Brand.4"),Se("Brand.5"),Se("Brand.6"),Se("Primary")),me=(Se("PrimaryDark"),Se("Secondary")),ve=(Se("Accent.Light.1"),Se("Accent.Light.2"),Se("Accent.Light.3"),Se("Accent.Light.4"),Se("Accent.Light.5"),Se("Accent.Light.6"),Se("Accent.Dark.1"),Se("Accent.Dark.2"),Se("Accent.Dark.3"),{1:Se("Neutral.1"),2:Se("Neutral.2"),3:Se("Neutral.3"),4:Se("Neutral.4"),5:Se("Neutral.5"),6:Se("Neutral.6"),7:Se("Neutral.7"),8:Se("Neutral.8")}),De=(Se("Validation.Green.Text"),Se("Validation.Green.Icon"),Se("Validation.Green.Border"),Se("Validation.Green.Background"),Se("Validation.Orange.Text"),Se("Validation.Orange.Icon"),Se("Validation.Orange.Border"),Se("Validation.Orange.Background"),Se("Validation.Orange.Badge"),Se("Validation.Red.Text"),Se("Validation.Red.Icon"),Se("Validation.Red.Border"),Se("Validation.Red.Background"),Se("Validation.Blue.Text"),Se("Validation.Blue.Icon"),Se("Validation.Blue.Border"),Se("Validation.Blue.Background"),Se("Shadow.Accent"),Se("Shadow.Red"),Se("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),He={collections:{base:{D1:{fontFamily:De.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:De.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:De.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:De.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:De.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:De.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:De.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:De.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:De.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:De.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:De.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:De.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},$e=t=>e=>{const n=e.theme,r=Fe(He,n[se.textStyleScheme]);return n.options&&n.options.textStyle?pe(r,t,n.options.textStyle):pe(r,t)},_e={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},be=t=>{switch(t){case 700:case"bold":return De.Bold;case 600:case"semibold":return De.Semibold;case 300:case"light":return De.Light;case 400:case"regular":return De.Regular;default:return""}},Ee=(t,e)=>n=>{const r=_e[t].fontFamily(n),o=_e[t].fontWeight(n);return Object.values(De).includes(r)?i`
                font-family: ${be(e)||be(o)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${(ze(e)||o)??"normal"};
        `},ze=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ae=(t,e,n=!1)=>r=>{const o=_e[t],a=o.fontSize(r);return i`
            ${Ee(t,e)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},we=(t=!1,e=!1)=>e?i`
            display: block;
        `:t?i`
            display: inline;
        `:i`
            display: block;
        `;var We;!function(t){t.D1=r.h1`
        ${t=>i`
                ${Ae("D1",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${Ae("D2",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${Ae("D3",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${Ae("D4",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${Ae("DBody",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${Ae("H1",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${Ae("H2",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${Ae("H3",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${Ae("H4",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${Ae("H5",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${Ae("H6",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${Ae("Body",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${Ae("BodySmall",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${Ae("XSmall",t.weight,t.paragraph)}
                color: ${ve[1]};
                ${we(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>xe({...t,textStyle:"Body"}),Small:t=>xe({...t,textStyle:"BodySmall"})}}(We||(We={}));const Ce=r.a`
    ${t=>i`
            ${Ae(t.textStyle,t.weight)}
            color: ${Be};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${me};

                svg {
                    color: ${me};
                }
            }
        `}
`,ke=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xe=({external:n=!1,children:r,...i})=>t(Ce,{...i,children:[r,n&&e(ke,{})]}),Oe=r.div`
    border-radius: 0.5rem;
    background: ${ve[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,je=({children:t,...n})=>{const r=n["data-testid"]||"card";return e(Oe,{...n,"data-testid":r,children:"string"==typeof t?e(We.Body,{children:t}):t})};export{je as Card};
//# sourceMappingURL=index.js.map
