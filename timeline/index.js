import{createElement as t}from"react";import{jsxs as e,jsx as n,Fragment as r}from"react/jsx-runtime";import i,{css as o}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,s=d||f||Function("return this")(),p=s.Symbol,u=p,F=Object.prototype,m=F.hasOwnProperty,y=F.toString,S=u?u.toStringTag:void 0;var B=function(t){var e=m.call(t,S),n=t[S];try{t[S]=void 0;var r=!0}catch(t){}var i=y.call(t);return r&&(e?t[S]=n:delete t[S]),i},v=Object.prototype.toString;var b=B,$=function(t){return v.call(t)},D=p?p.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?b(t):$(t)};var _=H,E=function(t){return null!=t&&"object"==typeof t};var z=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==_(t)},A=h,O=z,w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var x=function(t,e){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!O(t))||(k.test(t)||!w.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},C=H,W=j;var T,V=function(t){if(!W(t))return!1;var e=C(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=s["__core-js_shared__"],L=(T=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var R=function(t){return!!L&&L in t},N=Function.prototype.toString;var P=V,X=R,G=j,M=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,Y=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(t){return!(!G(t)||X(t))&&(P(t)?Y:U).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Z(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var dt=nt;var ft=it,st=ot,pt=ct,ut=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=ft,mt.prototype.delete=st,mt.prototype.get=pt,mt.prototype.has=ut,mt.prototype.set=Ft;var yt=mt;var St=function(){this.__data__=[],this.size=0};var Bt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1},bt=vt,$t=Array.prototype.splice;var Dt=vt;var Ht=vt;var _t=vt;var Et=St,zt=function(t){var e=this.__data__,n=bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():$t.call(e,n,1),--this.size,!0)},At=function(t){var e=this.__data__,n=Dt(e,t);return n<0?void 0:e[n][1]},Ot=function(t){return Ht(this.__data__,t)>-1},wt=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=Et,kt.prototype.delete=zt,kt.prototype.get=At,kt.prototype.has=Ot,kt.prototype.set=wt;var xt=kt,jt=et(s,"Map"),Ct=yt,Wt=xt,Tt=jt;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=It;var Rt=It;var Nt=It;var Pt=It;var Xt=function(){this.size=0,this.__data__={hash:new Ct,map:new(Tt||Wt),string:new Ct}},Gt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Rt(this,t).get(t)},Ut=function(t){return Nt(this,t).has(t)},qt=function(t,e){var n=Pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Jt.prototype.clear=Xt,Jt.prototype.delete=Gt,Jt.prototype.get=Mt,Jt.prototype.has=Ut,Jt.prototype.set=qt;var Kt=Jt;function Qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qt.Cache||Kt),n}Qt.Cache=Kt;var Yt=Qt;var Zt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Yt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Zt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=h,ie=z,oe=p?p.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=x,de=ee,fe=function(t){return null==t?"":ce(t)};var se=z;var pe=function(t,e){return ge(t)?t:he(t,e)?[t]:de(fe(t))},ue=function(t){if("string"==typeof t||se(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[ue(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:Fe(t,e);return void 0===r?n:r};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var Be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Be||(Be={}));const ve={collections:{base:c},defaultValue:"base"},be=t=>e=>{const n=e.theme,r=Se(ve,n[Be.textStyleScheme]);return n.options&&n.options.textStyle?ye(r,t,n.options.textStyle):ye(r,t)},$e={D1:{fontFamily:be("D1.fontFamily"),fontSize:be("D1.fontSize"),fontWeight:be("D1.fontWeight"),lineHeight:be("D1.lineHeight"),letterSpacing:be("D1.letterSpacing")},D2:{fontFamily:be("D2.fontFamily"),fontSize:be("D2.fontSize"),fontWeight:be("D2.fontWeight"),lineHeight:be("D2.lineHeight"),letterSpacing:be("D2.letterSpacing")},D3:{fontFamily:be("D3.fontFamily"),fontSize:be("D3.fontSize"),fontWeight:be("D3.fontWeight"),lineHeight:be("D3.lineHeight"),letterSpacing:be("D3.letterSpacing")},D4:{fontFamily:be("D4.fontFamily"),fontSize:be("D4.fontSize"),fontWeight:be("D4.fontWeight"),lineHeight:be("D4.lineHeight"),letterSpacing:be("D4.letterSpacing")},DBody:{fontFamily:be("DBody.fontFamily"),fontSize:be("DBody.fontSize"),fontWeight:be("DBody.fontWeight"),lineHeight:be("DBody.lineHeight"),letterSpacing:be("DBody.letterSpacing")},H1:{fontFamily:be("H1.fontFamily"),fontSize:be("H1.fontSize"),fontWeight:be("H1.fontWeight"),lineHeight:be("H1.lineHeight"),letterSpacing:be("H1.letterSpacing")},H2:{fontFamily:be("H2.fontFamily"),fontSize:be("H2.fontSize"),fontWeight:be("H2.fontWeight"),lineHeight:be("H2.lineHeight"),letterSpacing:be("H2.letterSpacing")},H3:{fontFamily:be("H3.fontFamily"),fontSize:be("H3.fontSize"),fontWeight:be("H3.fontWeight"),lineHeight:be("H3.lineHeight"),letterSpacing:be("H3.letterSpacing")},H4:{fontFamily:be("H4.fontFamily"),fontSize:be("H4.fontSize"),fontWeight:be("H4.fontWeight"),lineHeight:be("H4.lineHeight"),letterSpacing:be("H4.letterSpacing")},H5:{fontFamily:be("H5.fontFamily"),fontSize:be("H5.fontSize"),fontWeight:be("H5.fontWeight"),lineHeight:be("H5.lineHeight"),letterSpacing:be("H5.letterSpacing")},H6:{fontFamily:be("H6.fontFamily"),fontSize:be("H6.fontSize"),fontWeight:be("H6.fontWeight"),lineHeight:be("H6.lineHeight"),letterSpacing:be("H6.letterSpacing")},Body:{fontFamily:be("Body.fontFamily"),fontSize:be("Body.fontSize"),fontWeight:be("Body.fontWeight"),lineHeight:be("Body.lineHeight"),letterSpacing:be("Body.letterSpacing")},BodySmall:{fontFamily:be("BodySmall.fontFamily"),fontSize:be("BodySmall.fontSize"),fontWeight:be("BodySmall.fontWeight"),lineHeight:be("BodySmall.lineHeight"),letterSpacing:be("BodySmall.letterSpacing")},XSmall:{fontFamily:be("XSmall.fontFamily"),fontSize:be("XSmall.fontSize"),fontWeight:be("XSmall.fontWeight"),lineHeight:be("XSmall.lineHeight"),letterSpacing:be("XSmall.letterSpacing")}},De=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},He=(t,e)=>n=>{var r;const i=$e[t].fontFamily(n),a=$e[t].fontWeight(n);return Object.values(l).includes(i)?o`
                font-family: ${De(e)||De(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(r=_e(e)||a)&&void 0!==r?r:"normal"};
        `},_e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=(t,e,n=!1)=>r=>{const i=$e[t],a=i.fontSize(r);return o`
            ${He(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},ze=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `;const Ae={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Oe=t=>e=>{const n=e.theme,r=Se(Ae,n[Be.colorScheme]);return n.options&&n.options.color?ye(r,t,n.options.color):ye(r,t)},we=(Oe("Brand.1"),Oe("Brand.2"),Oe("Brand.3"),Oe("Brand.4"),Oe("Brand.5"),Oe("Brand.6"),Oe("Primary")),ke=(Oe("PrimaryDark"),Oe("Secondary")),xe={Light:{1:Oe("Accent.Light.1"),2:Oe("Accent.Light.2"),3:Oe("Accent.Light.3"),4:Oe("Accent.Light.4"),5:Oe("Accent.Light.5"),6:Oe("Accent.Light.6")},Dark:{1:Oe("Accent.Dark.1"),2:Oe("Accent.Dark.2"),3:Oe("Accent.Dark.3")}},je={1:Oe("Neutral.1"),2:Oe("Neutral.2"),3:Oe("Neutral.3"),4:Oe("Neutral.4"),5:Oe("Neutral.5"),6:Oe("Neutral.6"),7:Oe("Neutral.7"),8:Oe("Neutral.8")};Oe("Validation.Green.Text"),Oe("Validation.Green.Icon"),Oe("Validation.Green.Border"),Oe("Validation.Green.Background"),Oe("Validation.Orange.Text"),Oe("Validation.Orange.Icon"),Oe("Validation.Orange.Border"),Oe("Validation.Orange.Background"),Oe("Validation.Orange.Badge"),Oe("Validation.Red.Text"),Oe("Validation.Red.Icon"),Oe("Validation.Red.Border"),Oe("Validation.Red.Background"),Oe("Validation.Blue.Text"),Oe("Validation.Blue.Icon"),Oe("Validation.Blue.Border"),Oe("Validation.Blue.Background"),Oe("Shadow.Accent"),Oe("Shadow.Red"),Oe("Shadow.Elevation");var Ce;!function(t){t.D1=i.h1`
        ${t=>o`
                ${Ee("D1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D2=i.h1`
        ${t=>o`
                ${Ee("D2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D3=i.h1`
        ${t=>o`
                ${Ee("D3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D4=i.h1`
        ${t=>o`
                ${Ee("D4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.DBody=i.h1`
        ${t=>o`
                ${Ee("DBody",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H1=i.h1`
        ${t=>o`
                ${Ee("H1",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H2=i.h2`
        ${t=>o`
                ${Ee("H2",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H3=i.h3`
        ${t=>o`
                ${Ee("H3",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H4=i.h4`
        ${t=>o`
                ${Ee("H4",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H5=i.h5`
        ${t=>o`
                ${Ee("H5",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H6=i.h6`
        ${t=>o`
                ${Ee("H6",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.Body=i.p`
        ${t=>o`
                ${Ee("Body",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=i.p`
        ${t=>o`
                ${Ee("BodySmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.XSmall=i.span`
        ${t=>o`
                ${Ee("XSmall",t.weight,t.paragraph)}
                color: ${je[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ve(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ve(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ce||(Ce={}));const We=i.a`
    ${t=>o`
            ${Ee(t.textStyle,t.weight)}
            color: ${we};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ke};

                svg {
                    color: ${ke};
                }
            }
        `}
`,Te=i(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ve=t=>{var{external:r=!1,children:i}=t,o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["external","children"]);return e(We,Object.assign({},o,{children:[i,r&&n(Te,{})]}))};var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Le={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Re=t=>Object.keys(Le).reduce(((e,n)=>{const r=Le[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ne=Re("max-width"),Pe=(Re("min-width"),i.div`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${t=>t.$filled?o`
                border: none;
                background-color: ${xe.Light[1]};
            `:o`
            border: 3.2px solid ${xe.Light[1]};
            background-color: transparent;
        `}
`),Xe=i.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${xe.Light[1]};
`,Ge=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`,Me=i.div`
    grid-column: ${t=>t.$startCol?t.$startCol:3} / span
        ${t=>t.$colSpan?t.$colSpan:8};

    ${Ne.tablet} {
        grid-column: span 8;
    }

    ${Ne.mobileL} {
        grid-column: span 4;
    }
`,Ue=i(Ce.H3)`
    margin-bottom: 1rem;

    ${Ne.tablet} {
        margin-bottom: 1.5rem;
    }
`,qe=i.div`
    display: flex;
`,Je=i.div`
    margin-bottom: 2rem;
    width: 100%;
`,Ke=i(Ce.H4)`
    margin-bottom: 0.5rem;
`,Qe=i(Ce.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,Ye=i.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?o`
                background-color: ${je[1]};

                & > span {
                    color: ${je[8]};
                }
            `:o`
            background-color: ${je[8]};
            border: 1px solid ${je[5]};

            & > span {
                color: ${je[1]};
            }
        `}
`,Ze=({items:i,className:o,title:a,startCol:l,colSpan:c,"data-base-indicator-testid":g,"data-testid":h="timeline"})=>{const d=t=>"string"==typeof t?n(Ce.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):n(r,{children:t}),f=t=>"string"==typeof t?n(Ke,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):n(r,{children:t}),s=e=>e.slice(0,2).map(((e,r)=>t(Ye,Object.assign({},e,{key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),n(Ce.XSmall,{children:e.label}))));return e(Me,Object.assign({className:o,"data-testid":h,$startCol:l,$colSpan:c},{children:[n(Ue,Object.assign({id:"timeline-title"},{children:a})),i.map(((t,r)=>{const{title:i,content:o,statuses:a}=t;return e(qe,{children:[e(Ge,{children:[n(Pe,{"data-testid":g?`circleindicator${r+1}_div_${g}`:"circleindicator",$filled:0===r}),n(Xe,{})]}),e(Je,Object.assign({className:"timeline-item-content"},{children:[f(i),a&&n(Qe,{children:s(a)}),d(o)]}))]},`timeline-item-${r}`)}))]}))};export{Ze as Timeline};
//# sourceMappingURL=index.js.map
