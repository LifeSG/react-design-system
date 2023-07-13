import{createElement as t}from"react";import{jsxs as e,jsx as n,Fragment as i}from"react/jsx-runtime";import r,{css as o}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";const l={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},c={D1:{fontFamily:l.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:l.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:l.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:l.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:l.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:l.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:l.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:l.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:l.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:l.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:l.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:l.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}};var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h=Array.isArray,d="object"==typeof g&&g&&g.Object===Object&&g,f="object"==typeof self&&self&&self.Object===Object&&self,p=d||f||Function("return this")(),u=p.Symbol,s=u,F=Object.prototype,m=F.hasOwnProperty,y=F.toString,S=s?s.toStringTag:void 0;var B=function(t){var e=m.call(t,S),n=t[S];try{t[S]=void 0;var i=!0}catch(t){}var r=y.call(t);return i&&(e?t[S]=n:delete t[S]),r},v=Object.prototype.toString;var $=B,D=function(t){return v.call(t)},H=u?u.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?$(t):D(t)};var _=b,E=function(t){return null!=t&&"object"==typeof t};var z=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==_(t)},A=h,w=z,k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var C=function(t,e){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!w(t))||(x.test(t)||!k.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O=b,j=W;var T,V=function(t){if(!j(t))return!1;var e=O(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=p["__core-js_shared__"],L=(T=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var R=function(t){return!!L&&L in t},N=Function.prototype.toString;var P=V,X=R,G=W,M=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,K=q.toString,Q=J.hasOwnProperty,Y=RegExp("^"+K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(t){return!(!G(t)||X(t))&&(P(t)?Y:U).test(M(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return Z(n)?n:void 0},nt=et(Object,"create"),it=nt;var rt=function(){this.__data__=it?it(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,lt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return lt.call(e,t)?e[t]:void 0},gt=nt,ht=Object.prototype.hasOwnProperty;var dt=nt;var ft=rt,pt=ot,ut=ct,st=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=dt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}mt.prototype.clear=ft,mt.prototype.delete=pt,mt.prototype.get=ut,mt.prototype.has=st,mt.prototype.set=Ft;var yt=mt;var St=function(){this.__data__=[],this.size=0};var Bt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1},$t=vt,Dt=Array.prototype.splice;var Ht=vt;var bt=vt;var _t=vt;var Et=St,zt=function(t){var e=this.__data__,n=$t(e,t);return!(n<0)&&(n==e.length-1?e.pop():Dt.call(e,n,1),--this.size,!0)},At=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},wt=function(t){return bt(this.__data__,t)>-1},kt=function(t,e){var n=this.__data__,i=_t(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}xt.prototype.clear=Et,xt.prototype.delete=zt,xt.prototype.get=At,xt.prototype.has=wt,xt.prototype.set=kt;var Ct=xt,Wt=et(p,"Map"),Ot=yt,jt=Ct,Tt=Wt;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=It;var Rt=It;var Nt=It;var Pt=It;var Xt=function(){this.size=0,this.__data__={hash:new Ot,map:new(Tt||jt),string:new Ot}},Gt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return Rt(this,t).get(t)},Ut=function(t){return Nt(this,t).has(t)},qt=function(t,e){var n=Pt(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Jt.prototype.clear=Xt,Jt.prototype.delete=Gt,Jt.prototype.get=Mt,Jt.prototype.has=Ut,Jt.prototype.set=qt;var Kt=Jt;function Qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=t.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Qt.Cache||Kt),n}Qt.Cache=Kt;var Yt=Qt;var Zt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Yt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Zt,(function(t,n,i,r){e.push(i?r.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},ie=h,re=z,oe=u?u.prototype:void 0,ae=oe?oe.toString:void 0;var le=function t(e){if("string"==typeof e)return e;if(ie(e))return ne(e,t)+"";if(re(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},ce=le;var ge=h,he=C,de=ee,fe=function(t){return null==t?"":ce(t)};var pe=z;var ue=function(t,e){return ge(t)?t:he(t,e)?[t]:de(fe(t))},se=function(t){if("string"==typeof t||pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,i=(e=ue(e,t)).length;null!=t&&n<i;)t=t[se(e[n++])];return n&&n==i?t:void 0};var me=function(t,e,n){var i=null==t?void 0:Fe(t,e);return void 0===i?n:i};const ye=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Se=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var Be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Be||(Be={}));const ve={collections:{base:c},defaultValue:"base"},$e=t=>e=>{const n=e.theme,i=Se(ve,n[Be.textStyleScheme]);return n.options&&n.options.textStyle?ye(i,t,n.options.textStyle):ye(i,t)},De={D1:{fontFamily:$e("D1.fontFamily"),fontSize:$e("D1.fontSize"),fontWeight:$e("D1.fontWeight"),lineHeight:$e("D1.lineHeight"),letterSpacing:$e("D1.letterSpacing")},D2:{fontFamily:$e("D2.fontFamily"),fontSize:$e("D2.fontSize"),fontWeight:$e("D2.fontWeight"),lineHeight:$e("D2.lineHeight"),letterSpacing:$e("D2.letterSpacing")},D3:{fontFamily:$e("D3.fontFamily"),fontSize:$e("D3.fontSize"),fontWeight:$e("D3.fontWeight"),lineHeight:$e("D3.lineHeight"),letterSpacing:$e("D3.letterSpacing")},D4:{fontFamily:$e("D4.fontFamily"),fontSize:$e("D4.fontSize"),fontWeight:$e("D4.fontWeight"),lineHeight:$e("D4.lineHeight"),letterSpacing:$e("D4.letterSpacing")},DBody:{fontFamily:$e("DBody.fontFamily"),fontSize:$e("DBody.fontSize"),fontWeight:$e("DBody.fontWeight"),lineHeight:$e("DBody.lineHeight"),letterSpacing:$e("DBody.letterSpacing")},H1:{fontFamily:$e("H1.fontFamily"),fontSize:$e("H1.fontSize"),fontWeight:$e("H1.fontWeight"),lineHeight:$e("H1.lineHeight"),letterSpacing:$e("H1.letterSpacing")},H2:{fontFamily:$e("H2.fontFamily"),fontSize:$e("H2.fontSize"),fontWeight:$e("H2.fontWeight"),lineHeight:$e("H2.lineHeight"),letterSpacing:$e("H2.letterSpacing")},H3:{fontFamily:$e("H3.fontFamily"),fontSize:$e("H3.fontSize"),fontWeight:$e("H3.fontWeight"),lineHeight:$e("H3.lineHeight"),letterSpacing:$e("H3.letterSpacing")},H4:{fontFamily:$e("H4.fontFamily"),fontSize:$e("H4.fontSize"),fontWeight:$e("H4.fontWeight"),lineHeight:$e("H4.lineHeight"),letterSpacing:$e("H4.letterSpacing")},H5:{fontFamily:$e("H5.fontFamily"),fontSize:$e("H5.fontSize"),fontWeight:$e("H5.fontWeight"),lineHeight:$e("H5.lineHeight"),letterSpacing:$e("H5.letterSpacing")},H6:{fontFamily:$e("H6.fontFamily"),fontSize:$e("H6.fontSize"),fontWeight:$e("H6.fontWeight"),lineHeight:$e("H6.lineHeight"),letterSpacing:$e("H6.letterSpacing")},Body:{fontFamily:$e("Body.fontFamily"),fontSize:$e("Body.fontSize"),fontWeight:$e("Body.fontWeight"),lineHeight:$e("Body.lineHeight"),letterSpacing:$e("Body.letterSpacing")},BodySmall:{fontFamily:$e("BodySmall.fontFamily"),fontSize:$e("BodySmall.fontSize"),fontWeight:$e("BodySmall.fontWeight"),lineHeight:$e("BodySmall.lineHeight"),letterSpacing:$e("BodySmall.letterSpacing")},XSmall:{fontFamily:$e("XSmall.fontFamily"),fontSize:$e("XSmall.fontSize"),fontWeight:$e("XSmall.fontWeight"),lineHeight:$e("XSmall.lineHeight"),letterSpacing:$e("XSmall.letterSpacing")}},He=t=>{switch(t){case 700:case"bold":return l.Bold;case 600:case"semibold":return l.Semibold;case 300:case"light":return l.Light;case 400:case"regular":return l.Regular;default:return""}},be=(t,e)=>n=>{const i=De[t].fontFamily(n),r=De[t].fontWeight(n);return Object.values(l).includes(i)?o`
                font-family: ${He(e)||He(r)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${(_e(e)||r)??"normal"};
        `},_e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ee=(t,e,n=!1)=>i=>{const r=De[t],a=r.fontSize(i);return o`
            ${be(t,e)}
            font-size: ${a}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},ze=(t=!1,e=!1)=>e?o`
            display: block;
        `:t?o`
            display: inline;
        `:o`
            display: block;
        `,Ae={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},we=t=>e=>{const n=e.theme,i=Se(Ae,n[Be.colorScheme]);return n.options&&n.options.color?ye(i,t,n.options.color):ye(i,t)},ke=(we("Brand.1"),we("Brand.2"),we("Brand.3"),we("Brand.4"),we("Brand.5"),we("Brand.6"),we("Primary")),xe=(we("PrimaryDark"),we("Secondary")),Ce={Light:{1:we("Accent.Light.1"),2:we("Accent.Light.2"),3:we("Accent.Light.3"),4:we("Accent.Light.4"),5:we("Accent.Light.5"),6:we("Accent.Light.6")},Dark:{1:we("Accent.Dark.1"),2:we("Accent.Dark.2"),3:we("Accent.Dark.3")}},We={1:we("Neutral.1"),2:we("Neutral.2"),3:we("Neutral.3"),4:we("Neutral.4"),5:we("Neutral.5"),6:we("Neutral.6"),7:we("Neutral.7"),8:we("Neutral.8")};we("Validation.Green.Text"),we("Validation.Green.Icon"),we("Validation.Green.Border"),we("Validation.Green.Background"),we("Validation.Orange.Text"),we("Validation.Orange.Icon"),we("Validation.Orange.Border"),we("Validation.Orange.Background"),we("Validation.Orange.Badge"),we("Validation.Red.Text"),we("Validation.Red.Icon"),we("Validation.Red.Border"),we("Validation.Red.Background"),we("Validation.Blue.Text"),we("Validation.Blue.Icon"),we("Validation.Blue.Border"),we("Validation.Blue.Background"),we("Shadow.Accent"),we("Shadow.Red"),we("Shadow.Elevation");var Oe;!function(t){t.D1=r.h1`
        ${t=>o`
                ${Ee("D1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D2=r.h1`
        ${t=>o`
                ${Ee("D2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D3=r.h1`
        ${t=>o`
                ${Ee("D3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.D4=r.h1`
        ${t=>o`
                ${Ee("D4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.DBody=r.h1`
        ${t=>o`
                ${Ee("DBody",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H1=r.h1`
        ${t=>o`
                ${Ee("H1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H2=r.h2`
        ${t=>o`
                ${Ee("H2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H3=r.h3`
        ${t=>o`
                ${Ee("H3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H4=r.h4`
        ${t=>o`
                ${Ee("H4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H5=r.h5`
        ${t=>o`
                ${Ee("H5",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.H6=r.h6`
        ${t=>o`
                ${Ee("H6",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.Body=r.p`
        ${t=>o`
                ${Ee("Body",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=r.p`
        ${t=>o`
                ${Ee("BodySmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.XSmall=r.span`
        ${t=>o`
                ${Ee("XSmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${ze(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ve({...t,textStyle:"Body"}),Small:t=>Ve({...t,textStyle:"BodySmall"})}}(Oe||(Oe={}));const je=r.a`
    ${t=>o`
            ${Ee(t.textStyle,t.weight)}
            color: ${ke};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xe};

                svg {
                    color: ${xe};
                }
            }
        `}
`,Te=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ve=({external:t=!1,children:i,...r})=>e(je,{...r,children:[i,t&&n(Te,{})]});var Ie;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ie||(Ie={}));const Le={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Re=t=>Object.keys(Le).reduce(((e,n)=>{const i=Le[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),Ne=Re("max-width"),Pe=(Re("min-width"),r.div`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${t=>t.$filled?o`
                border: none;
                background-color: ${Ce.Light[1]};
            `:o`
            border: 3.2px solid ${Ce.Light[1]};
            background-color: transparent;
        `}
`),Xe=r.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${Ce.Light[1]};
`,Ge=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`,Me=r.div`
    grid-column: ${t=>t.$startCol?t.$startCol:3} / span
        ${t=>t.$colSpan?t.$colSpan:8};

    ${Ne.tablet} {
        grid-column: span 8;
    }

    ${Ne.mobileL} {
        grid-column: span 4;
    }
`,Ue=r(Oe.H3)`
    margin-bottom: 1rem;

    ${Ne.tablet} {
        margin-bottom: 1.5rem;
    }
`,qe=r.div`
    display: flex;
`,Je=r.div`
    margin-bottom: 2rem;
    width: 100%;
`,Ke=r(Oe.H4)`
    margin-bottom: 0.5rem;
`,Qe=r(Oe.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,Ye=r.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${t=>"dark"===t.type?o`
                background-color: ${We[1]};

                & > span {
                    color: ${We[8]};
                }
            `:o`
            background-color: ${We[8]};
            border: 1px solid ${We[5]};

            & > span {
                color: ${We[1]};
            }
        `}
`,Ze=({items:r,className:o,title:a,startCol:l,colSpan:c,"data-base-indicator-testid":g,"data-testid":h="timeline"})=>{const d=t=>"string"==typeof t?n(Oe.Body,{className:"timeline-item-content-text",children:t}):n(i,{children:t}),f=t=>"string"==typeof t?n(Ke,{weight:"semibold",className:"timeline-item-title",children:t}):n(i,{children:t}),p=e=>e.slice(0,2).map(((e,i)=>t(Ye,{...e,key:`status-pill-${i}`,"data-testid":"status-pill",className:"timeline-status-pill"},n(Oe.XSmall,{children:e.label}))));return e(Me,{className:o,"data-testid":h,$startCol:l,$colSpan:c,children:[n(Ue,{id:"timeline-title",children:a}),r.map(((t,i)=>{const{title:r,content:o,statuses:a}=t;return e(qe,{children:[e(Ge,{children:[n(Pe,{"data-testid":g?`circleindicator${i+1}_div_${g}`:"circleindicator",$filled:0===i}),n(Xe,{})]}),e(Je,{className:"timeline-item-content",children:[f(r),a&&n(Qe,{children:p(a)}),d(o)]})]},`timeline-item-${i}`)}))]})};export{Ze as Timeline};
//# sourceMappingURL=index.js.map
