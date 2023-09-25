import{createElement as t}from"react";import{jsxs as e,jsx as n,Fragment as r}from"react/jsx-runtime";import{TickIcon as i}from"@lifesg/react-icons";import o,{css as a}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";const c={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},g={D1:{fontFamily:c.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:c.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:c.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:c.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:c.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:c.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:c.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:c.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:c.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,s="object"==typeof d&&d&&d.Object===Object&&d,u="object"==typeof self&&self&&self.Object===Object&&self,f=s||u||Function("return this")(),p=f.Symbol,m=p,F=Object.prototype,y=F.hasOwnProperty,S=F.toString,B=m?m.toStringTag:void 0;var v=function(t){var e=y.call(t,B),n=t[B];try{t[B]=void 0;var r=!0}catch(t){}var i=S.call(t);return r&&(e?t[B]=n:delete t[B]),i},$=Object.prototype.toString;var b=v,D=function(t){return $.call(t)},H=p?p.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?b(t):D(t)};var E=_,z=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||z(t)&&"[object Symbol]"==E(t)},k=h,w=O,x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var j=function(t,e){if(k(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!w(t))||(A.test(t)||!x.test(t)||null!=e&&t in Object(e))};var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=_,T=C;var I,V=function(t){if(!T(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},R=f["__core-js_shared__"],L=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var N=function(t){return!!L&&L in t},P=Function.prototype.toString;var G=V,X=N,M=C,U=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(t){return!(!M(t)||X(t))&&(G(t)?Z:q).test(U(t))},et=function(t,e){return null==t?void 0:t[e]};var nt=function(t,e){var n=et(t,e);return tt(n)?n:void 0},rt=nt(Object,"create"),it=rt;var ot=function(){this.__data__=it?it(null):{},this.size=0};var at=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},lt=rt,ct=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(lt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ct.call(e,t)?e[t]:void 0},dt=rt,ht=Object.prototype.hasOwnProperty;var st=rt;var ut=ot,ft=at,pt=gt,mt=function(t){var e=this.__data__;return dt?void 0!==e[t]:ht.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=st&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=ut,yt.prototype.delete=ft,yt.prototype.get=pt,yt.prototype.has=mt,yt.prototype.set=Ft;var St=yt;var Bt=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var $t=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},bt=$t,Dt=Array.prototype.splice;var Ht=$t;var _t=$t;var Et=$t;var zt=Bt,Ot=function(t){var e=this.__data__,n=bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},kt=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},wt=function(t){return _t(this.__data__,t)>-1},xt=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=zt,At.prototype.delete=Ot,At.prototype.get=kt,At.prototype.has=wt,At.prototype.set=xt;var jt=At,Ct=nt(f,"Map"),Wt=St,Tt=jt,It=Ct;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Rt=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=Rt;var Nt=Rt;var Pt=Rt;var Gt=Rt;var Xt=function(){this.size=0,this.__data__={hash:new Wt,map:new(It||Tt),string:new Wt}},Mt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Ut=function(t){return Nt(this,t).get(t)},qt=function(t){return Pt(this,t).has(t)},Jt=function(t,e){var n=Gt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Xt,Kt.prototype.delete=Mt,Kt.prototype.get=Ut,Kt.prototype.has=qt,Kt.prototype.set=Jt;var Qt=Kt;function Yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Yt.Cache||Qt),n}Yt.Cache=Qt;var Zt=Yt;var te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/\\(\\)?/g,ne=function(t){var e=Zt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(te,(function(t,n,r,i){e.push(r?i.replace(ee,"$1"):n||t)})),e}));var re=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ie=h,oe=O,ae=p?p.prototype:void 0,le=ae?ae.toString:void 0;var ce=function t(e){if("string"==typeof e)return e;if(ie(e))return re(e,t)+"";if(oe(e))return le?le.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ge=ce;var de=h,he=j,se=ne,ue=function(t){return null==t?"":ge(t)};var fe=O;var pe=function(t,e){return de(t)?t:he(t,e)?[t]:se(ue(t))},me=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,r=(e=pe(e,t)).length;null!=t&&n<r;)t=t[me(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:Fe(t,e);return void 0===r?n:r};const Se=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Be=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ve||(ve={}));const $e={collections:{base:g},defaultValue:"base"},be=t=>e=>{const n=e.theme,r=Be($e,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?Se(r,t,n.options.textStyle):Se(r,t)},De={D1:{fontFamily:be("D1.fontFamily"),fontSize:be("D1.fontSize"),fontWeight:be("D1.fontWeight"),lineHeight:be("D1.lineHeight"),letterSpacing:be("D1.letterSpacing")},D2:{fontFamily:be("D2.fontFamily"),fontSize:be("D2.fontSize"),fontWeight:be("D2.fontWeight"),lineHeight:be("D2.lineHeight"),letterSpacing:be("D2.letterSpacing")},D3:{fontFamily:be("D3.fontFamily"),fontSize:be("D3.fontSize"),fontWeight:be("D3.fontWeight"),lineHeight:be("D3.lineHeight"),letterSpacing:be("D3.letterSpacing")},D4:{fontFamily:be("D4.fontFamily"),fontSize:be("D4.fontSize"),fontWeight:be("D4.fontWeight"),lineHeight:be("D4.lineHeight"),letterSpacing:be("D4.letterSpacing")},DBody:{fontFamily:be("DBody.fontFamily"),fontSize:be("DBody.fontSize"),fontWeight:be("DBody.fontWeight"),lineHeight:be("DBody.lineHeight"),letterSpacing:be("DBody.letterSpacing")},H1:{fontFamily:be("H1.fontFamily"),fontSize:be("H1.fontSize"),fontWeight:be("H1.fontWeight"),lineHeight:be("H1.lineHeight"),letterSpacing:be("H1.letterSpacing")},H2:{fontFamily:be("H2.fontFamily"),fontSize:be("H2.fontSize"),fontWeight:be("H2.fontWeight"),lineHeight:be("H2.lineHeight"),letterSpacing:be("H2.letterSpacing")},H3:{fontFamily:be("H3.fontFamily"),fontSize:be("H3.fontSize"),fontWeight:be("H3.fontWeight"),lineHeight:be("H3.lineHeight"),letterSpacing:be("H3.letterSpacing")},H4:{fontFamily:be("H4.fontFamily"),fontSize:be("H4.fontSize"),fontWeight:be("H4.fontWeight"),lineHeight:be("H4.lineHeight"),letterSpacing:be("H4.letterSpacing")},H5:{fontFamily:be("H5.fontFamily"),fontSize:be("H5.fontSize"),fontWeight:be("H5.fontWeight"),lineHeight:be("H5.lineHeight"),letterSpacing:be("H5.letterSpacing")},H6:{fontFamily:be("H6.fontFamily"),fontSize:be("H6.fontSize"),fontWeight:be("H6.fontWeight"),lineHeight:be("H6.lineHeight"),letterSpacing:be("H6.letterSpacing")},Body:{fontFamily:be("Body.fontFamily"),fontSize:be("Body.fontSize"),fontWeight:be("Body.fontWeight"),lineHeight:be("Body.lineHeight"),letterSpacing:be("Body.letterSpacing")},BodySmall:{fontFamily:be("BodySmall.fontFamily"),fontSize:be("BodySmall.fontSize"),fontWeight:be("BodySmall.fontWeight"),lineHeight:be("BodySmall.lineHeight"),letterSpacing:be("BodySmall.letterSpacing")},XSmall:{fontFamily:be("XSmall.fontFamily"),fontSize:be("XSmall.fontSize"),fontWeight:be("XSmall.fontWeight"),lineHeight:be("XSmall.lineHeight"),letterSpacing:be("XSmall.letterSpacing")}},He=t=>{switch(t){case 700:case"bold":return c.Bold;case 600:case"semibold":return c.Semibold;case 300:case"light":return c.Light;case 400:case"regular":return c.Regular;default:return""}},_e=(t,e)=>n=>{var r;const i=De[t].fontFamily(n),o=De[t].fontWeight(n);return Object.values(c).includes(i)?a`
                font-family: ${He(e)||He(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=Ee(e)||o)&&void 0!==r?r:"normal"};
        `},Ee=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ze=(t,e,n=!1)=>r=>{const i=De[t],o=i.fontSize(r);return a`
            ${_e(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Oe=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;const ke={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},we=t=>e=>{const n=e.theme,r=Be(ke,n[ve.colorScheme]);return n.options&&n.options.color?Se(r,t,n.options.color):Se(r,t)},xe=(we("Brand.1"),we("Brand.2"),we("Brand.3"),we("Brand.4"),we("Brand.5"),we("Brand.6"),we("Primary")),Ae=(we("PrimaryDark"),we("Secondary")),je={Light:{1:we("Accent.Light.1"),2:we("Accent.Light.2"),3:we("Accent.Light.3"),4:we("Accent.Light.4"),5:we("Accent.Light.5"),6:we("Accent.Light.6")},Dark:{1:we("Accent.Dark.1"),2:we("Accent.Dark.2"),3:we("Accent.Dark.3")}},Ce={1:we("Neutral.1"),2:we("Neutral.2"),3:we("Neutral.3"),4:we("Neutral.4"),5:we("Neutral.5"),6:we("Neutral.6"),7:we("Neutral.7"),8:we("Neutral.8")},We={Green:{Text:we("Validation.Green.Text"),Icon:we("Validation.Green.Icon"),Border:we("Validation.Green.Border"),Background:we("Validation.Green.Background")},Orange:{Text:we("Validation.Orange.Text"),Icon:we("Validation.Orange.Icon"),Border:we("Validation.Orange.Border"),Background:we("Validation.Orange.Background"),Badge:we("Validation.Orange.Badge")},Red:{Text:we("Validation.Red.Text"),Icon:we("Validation.Red.Icon"),Border:we("Validation.Red.Border"),Background:we("Validation.Red.Background")},Blue:{Text:we("Validation.Blue.Text"),Icon:we("Validation.Blue.Icon"),Border:we("Validation.Blue.Border"),Background:we("Validation.Blue.Background")}};we("Shadow.Accent"),we("Shadow.Red"),we("Shadow.Elevation");var Te;!function(t){t.D1=o.h1`
        ${t=>a`
                ${ze("D1",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${ze("D2",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${ze("D3",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${ze("D4",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${ze("DBody",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${ze("H1",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${ze("H2",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${ze("H3",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${ze("H4",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${ze("H5",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${ze("H6",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${ze("Body",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${ze("BodySmall",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${ze("XSmall",t.weight,t.paragraph)}
                color: ${Ce[1]};
                ${Oe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Re(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Re(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Te||(Te={}));const Ie=o.a`
    ${t=>a`
            ${ze(t.textStyle,t.weight)}
            color: ${xe};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ae};

                svg {
                    color: ${Ae};
                }
            }
        `}
`,Ve=o(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Re=t=>{var{external:r=!1,children:i}=t,o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["external","children"]);return e(Ie,Object.assign({},o,{children:[i,r&&n(Ve,{})]}))};var Le;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Le||(Le={}));const Ne={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pe=t=>Object.keys(Ne).reduce(((e,n)=>{const r=Ne[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ge=Pe("max-width"),Xe=(Pe("min-width"),o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    border-radius: 50%;

    ${t=>{switch(t.$variant){case"current":return a`
                    background-color: ${je.Light[1]};
                `;case"upcoming-active":return a`
                    border: 4px solid ${je.Light[1]};
                `;case"upcoming-inactive":return a`
                    border: 4px solid ${Ce[4]};
                `;case"completed":return a`
                    background-color: ${We.Green.Icon};
                    svg {
                        color: ${Ce[8]};
                    }
                `}}}
`),Me=o.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;

    ${t=>{switch(t.$variant){case"current":case"upcoming-active":return a`
                    background-color: ${je.Light[1]};
                `;case"upcoming-inactive":return a`
                    background-color: ${Ce[4]};
                `;case"completed":return a`
                    background-color: ${We.Green.Icon};
                `}}}
`,Ue=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,qe=o.div`
    grid-column: ${t=>t.$startCol?t.$startCol:3} / span
        ${t=>t.$colSpan?t.$colSpan:8};

    ${Ge.tablet} {
        grid-column: span 8;
    }

    ${Ge.mobileL} {
        grid-column: span 4;
    }
`,Je=o(Te.H3)`
    margin-bottom: 1rem;

    ${Ge.tablet} {
        margin-bottom: 1.5rem;
    }
`,Ke=o.div`
    display: flex;

    :first-of-type ${Xe} {
        margin-top: 0;
    }
`,Qe=o.div`
    margin-bottom: 2rem;
    width: 100%;
`,Ye=o(Te.H4)`
    margin-bottom: 0.5rem;
`,Ze=o(Te.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,tn=o.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?a`
                background-color: ${Ce[1]};

                & > span {
                    color: ${Ce[8]};
                }
            `:a`
            background-color: ${Ce[8]};
            border: 1px solid ${Ce[5]};

            & > span {
                color: ${Ce[1]};
            }
        `}
`,en=({items:o,className:a,title:l,startCol:c,colSpan:g,"data-base-indicator-testid":d,"data-testid":h="timeline"})=>{const s=t=>"string"==typeof t?n(Te.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):n(r,{children:t}),u=t=>"string"==typeof t?n(Ye,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):n(r,{children:t}),f=e=>e.slice(0,2).map(((e,r)=>t(tn,Object.assign({},e,{key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),n(Te.XSmall,{children:e.label})))),p=t=>"completed"===t?n(i,{}):null;return e(qe,Object.assign({className:a,"data-testid":h,$startCol:c,$colSpan:g},{children:[n(Je,Object.assign({id:"timeline-title"},{children:l})),o.map(((t,r)=>{const{title:i,content:o,statuses:a,variant:l}=t,c=d?`circleindicator${r+1}_div_${d}`:"circleindicator",g=l||(0===r?"current":"upcoming-active");return e(Ke,{children:[e(Ue,{children:[n(Xe,Object.assign({"data-testid":c,$variant:g},{children:p(g)})),n(Me,{$variant:g})]}),e(Qe,Object.assign({className:"timeline-item-content"},{children:[u(i),a&&n(Ze,{children:f(a)}),s(o)]}))]},`timeline-item-${r}`)}))]}))};export{en as Timeline};
//# sourceMappingURL=index.js.map
