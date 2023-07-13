import{jsxs as t,jsx as e}from"react/jsx-runtime";import n,{useRef as r,useImperativeHandle as i}from"react";import o,{css as a}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";import{CrossIcon as l}from"@lifesg/react-icons/cross";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,h="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,f=h||d||Function("return this")(),g=f.Symbol,p=g,m=Object.prototype,y=m.hasOwnProperty,F=m.toString,v=p?p.toStringTag:void 0;var S=function(t){var e=y.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch(t){}var i=F.call(t);return r&&(e?t[v]=n:delete t[v]),i},$=Object.prototype.toString;var D=S,B=function(t){return $.call(t)},b=g?g.toStringTag:void 0;var x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?D(t):B(t)};var w=x,H=function(t){return null!=t&&"object"==typeof t};var M=function(t){return"symbol"==typeof t||H(t)&&"[object Symbol]"==w(t)},_=u,E=M,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var A=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(z.test(t)||!O.test(t)||null!=e&&t in Object(e))};var k=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},C=x,T=k;var W,Y=function(t){if(!T(t))return!1;var e=C(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},L=f["__core-js_shared__"],I=(W=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var R=function(t){return!!I&&I in t},V=Function.prototype.toString;var j=Y,P=R,N=k,Z=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,X=Function.prototype,G=Object.prototype,J=X.toString,q=G.hasOwnProperty,Q=RegExp("^"+J.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(t){return!(!N(t)||P(t))&&(j(t)?Q:U).test(Z(t))},tt=function(t,e){return null==t?void 0:t[e]};var et=function(t,e){var n=tt(t,e);return K(n)?n:void 0},nt=et(Object,"create"),rt=nt;var it=function(){this.__data__=rt?rt(null):{},this.size=0};var ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at=nt,st=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(at){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(e,t)?e[t]:void 0},ct=nt,ut=Object.prototype.hasOwnProperty;var ht=nt;var dt=it,ft=ot,gt=lt,pt=function(t){var e=this.__data__;return ct?void 0!==e[t]:ut.call(e,t)},mt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yt.prototype.clear=dt,yt.prototype.delete=ft,yt.prototype.get=gt,yt.prototype.has=pt,yt.prototype.set=mt;var Ft=yt;var vt=function(){this.__data__=[],this.size=0};var St=function(t,e){return t===e||t!=t&&e!=e};var $t=function(t,e){for(var n=t.length;n--;)if(St(t[n][0],e))return n;return-1},Dt=$t,Bt=Array.prototype.splice;var bt=$t;var xt=$t;var wt=$t;var Ht=vt,Mt=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Bt.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},Et=function(t){return xt(this.__data__,t)>-1},Ot=function(t,e){var n=this.__data__,r=wt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=Ht,zt.prototype.delete=Mt,zt.prototype.get=_t,zt.prototype.has=Et,zt.prototype.set=Ot;var At=zt,kt=et(f,"Map"),Ct=Ft,Tt=At,Wt=kt;var Yt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Lt=function(t,e){var n=t.__data__;return Yt(e)?n["string"==typeof e?"string":"hash"]:n.map},It=Lt;var Rt=Lt;var Vt=Lt;var jt=Lt;var Pt=function(){this.size=0,this.__data__={hash:new Ct,map:new(Wt||Tt),string:new Ct}},Nt=function(t){var e=It(this,t).delete(t);return this.size-=e?1:0,e},Zt=function(t){return Rt(this,t).get(t)},Ut=function(t){return Vt(this,t).has(t)},Xt=function(t,e){var n=jt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Pt,Gt.prototype.delete=Nt,Gt.prototype.get=Zt,Gt.prototype.has=Ut,Gt.prototype.set=Xt;var Jt=Gt;function qt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(qt.Cache||Jt),n}qt.Cache=Jt;var Qt=qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/\\(\\)?/g,ee=function(t){var e=Qt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Kt,(function(t,n,r,i){e.push(r?i.replace(te,"$1"):n||t)})),e}));var ne=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},re=u,ie=M,oe=g?g.prototype:void 0,ae=oe?oe.toString:void 0;var se=function t(e){if("string"==typeof e)return e;if(re(e))return ne(e,t)+"";if(ie(e))return ae?ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=se;var ce=u,ue=A,he=ee,de=function(t){return null==t?"":le(t)};var fe=M;var ge=function(t,e){return ce(t)?t:ue(t,e)?[t]:he(de(t))},pe=function(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var me=function(t,e){for(var n=0,r=(e=ge(e,t)).length;null!=t&&n<r;)t=t[pe(e[n++])];return n&&n==r?t:void 0};var ye=function(t,e,n){var r=null==t?void 0:me(t,e);return void 0===r?n:r};const Fe=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,ve=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var Se;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Se||(Se={}));const $e={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=ve($e,n[Se.colorScheme]);return n.options&&n.options.color?Fe(r,t,n.options.color):Fe(r,t)},Be=(De("Brand.1"),De("Brand.2"),De("Brand.3"),De("Brand.4"),De("Brand.5"),De("Brand.6"),De("Primary")),be=(De("PrimaryDark"),De("Secondary")),xe={Light:{1:De("Accent.Light.1"),2:De("Accent.Light.2"),3:De("Accent.Light.3"),4:De("Accent.Light.4"),5:De("Accent.Light.5"),6:De("Accent.Light.6")},Dark:{1:De("Accent.Dark.1"),2:De("Accent.Dark.2"),3:De("Accent.Dark.3")}},we={1:De("Neutral.1"),2:De("Neutral.2"),3:De("Neutral.3"),4:De("Neutral.4"),5:De("Neutral.5"),6:De("Neutral.6"),7:De("Neutral.7"),8:De("Neutral.8")},He={Green:{Text:De("Validation.Green.Text"),Icon:De("Validation.Green.Icon"),Border:De("Validation.Green.Border"),Background:De("Validation.Green.Background")},Orange:{Text:De("Validation.Orange.Text"),Icon:De("Validation.Orange.Icon"),Border:De("Validation.Orange.Border"),Background:De("Validation.Orange.Background"),Badge:De("Validation.Orange.Badge")},Red:{Text:De("Validation.Red.Text"),Icon:De("Validation.Red.Icon"),Border:De("Validation.Red.Border"),Background:De("Validation.Red.Background")},Blue:{Text:De("Validation.Blue.Text"),Icon:De("Validation.Blue.Icon"),Border:De("Validation.Blue.Border"),Background:De("Validation.Blue.Background")}},Me={Accent:De("Shadow.Accent"),Red:De("Shadow.Red"),Elevation:De("Shadow.Elevation")},_e={collections:{base:{InputBoxShadow:a`
        inset 0 0 6px 1px ${Me.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 6px 1px ${Me.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${Me.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:a`
        inset 0 0 6px 1px ${Me.Accent}
    `,InputErrorBoxShadow:a`
        inset 0 0 6px 1px ${Me.Red}
    `,ElevationBoxShadow:a`
      0px 2px 8px ${Me.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Ee=t=>e=>{const n=e.theme,r=ve(_e,n[Se.designTokenScheme]);return n.options?.designToken?Fe(r,t,n.options.designToken):Fe(r,t)},Oe=Ee("InputBoxShadow"),ze=Ee("InputErrorBoxShadow"),Ae=(Ee("ElevationBoxShadow"),Ee("Table.Header"),Ee("Table.Cell.Primary"),Ee("Table.Cell.Secondary"),Ee("Table.Cell.Selected"),Ee("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),ke={collections:{base:{D1:{fontFamily:Ae.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ae.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ae.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ae.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ae.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ae.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ae.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ae.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ae.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ae.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ae.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ae.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ae.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ae.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ce=t=>e=>{const n=e.theme,r=ve(ke,n[Se.textStyleScheme]);return n.options&&n.options.textStyle?Fe(r,t,n.options.textStyle):Fe(r,t)},Te={D1:{fontFamily:Ce("D1.fontFamily"),fontSize:Ce("D1.fontSize"),fontWeight:Ce("D1.fontWeight"),lineHeight:Ce("D1.lineHeight"),letterSpacing:Ce("D1.letterSpacing")},D2:{fontFamily:Ce("D2.fontFamily"),fontSize:Ce("D2.fontSize"),fontWeight:Ce("D2.fontWeight"),lineHeight:Ce("D2.lineHeight"),letterSpacing:Ce("D2.letterSpacing")},D3:{fontFamily:Ce("D3.fontFamily"),fontSize:Ce("D3.fontSize"),fontWeight:Ce("D3.fontWeight"),lineHeight:Ce("D3.lineHeight"),letterSpacing:Ce("D3.letterSpacing")},D4:{fontFamily:Ce("D4.fontFamily"),fontSize:Ce("D4.fontSize"),fontWeight:Ce("D4.fontWeight"),lineHeight:Ce("D4.lineHeight"),letterSpacing:Ce("D4.letterSpacing")},DBody:{fontFamily:Ce("DBody.fontFamily"),fontSize:Ce("DBody.fontSize"),fontWeight:Ce("DBody.fontWeight"),lineHeight:Ce("DBody.lineHeight"),letterSpacing:Ce("DBody.letterSpacing")},H1:{fontFamily:Ce("H1.fontFamily"),fontSize:Ce("H1.fontSize"),fontWeight:Ce("H1.fontWeight"),lineHeight:Ce("H1.lineHeight"),letterSpacing:Ce("H1.letterSpacing")},H2:{fontFamily:Ce("H2.fontFamily"),fontSize:Ce("H2.fontSize"),fontWeight:Ce("H2.fontWeight"),lineHeight:Ce("H2.lineHeight"),letterSpacing:Ce("H2.letterSpacing")},H3:{fontFamily:Ce("H3.fontFamily"),fontSize:Ce("H3.fontSize"),fontWeight:Ce("H3.fontWeight"),lineHeight:Ce("H3.lineHeight"),letterSpacing:Ce("H3.letterSpacing")},H4:{fontFamily:Ce("H4.fontFamily"),fontSize:Ce("H4.fontSize"),fontWeight:Ce("H4.fontWeight"),lineHeight:Ce("H4.lineHeight"),letterSpacing:Ce("H4.letterSpacing")},H5:{fontFamily:Ce("H5.fontFamily"),fontSize:Ce("H5.fontSize"),fontWeight:Ce("H5.fontWeight"),lineHeight:Ce("H5.lineHeight"),letterSpacing:Ce("H5.letterSpacing")},H6:{fontFamily:Ce("H6.fontFamily"),fontSize:Ce("H6.fontSize"),fontWeight:Ce("H6.fontWeight"),lineHeight:Ce("H6.lineHeight"),letterSpacing:Ce("H6.letterSpacing")},Body:{fontFamily:Ce("Body.fontFamily"),fontSize:Ce("Body.fontSize"),fontWeight:Ce("Body.fontWeight"),lineHeight:Ce("Body.lineHeight"),letterSpacing:Ce("Body.letterSpacing")},BodySmall:{fontFamily:Ce("BodySmall.fontFamily"),fontSize:Ce("BodySmall.fontSize"),fontWeight:Ce("BodySmall.fontWeight"),lineHeight:Ce("BodySmall.lineHeight"),letterSpacing:Ce("BodySmall.letterSpacing")},XSmall:{fontFamily:Ce("XSmall.fontFamily"),fontSize:Ce("XSmall.fontSize"),fontWeight:Ce("XSmall.fontWeight"),lineHeight:Ce("XSmall.lineHeight"),letterSpacing:Ce("XSmall.letterSpacing")}},We=t=>{switch(t){case 700:case"bold":return Ae.Bold;case 600:case"semibold":return Ae.Semibold;case 300:case"light":return Ae.Light;case 400:case"regular":return Ae.Regular;default:return""}},Ye=(t,e)=>n=>{const r=Te[t].fontFamily(n),i=Te[t].fontWeight(n);return Object.values(Ae).includes(r)?a`
                font-family: ${We(e)||We(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(Le(e)||i)??"normal"};
        `},Le=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ie=(t,e,n=!1)=>r=>{const i=Te[t],o=i.fontSize(r);return a`
            ${Ye(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Re=(t=!1,e=!1)=>e?a`
            display: block;
        `:t?a`
            display: inline;
        `:a`
            display: block;
        `;var Ve;!function(t){t.D1=o.h1`
        ${t=>a`
                ${Ie("D1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D2=o.h1`
        ${t=>a`
                ${Ie("D2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D3=o.h1`
        ${t=>a`
                ${Ie("D3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.D4=o.h1`
        ${t=>a`
                ${Ie("D4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.DBody=o.h1`
        ${t=>a`
                ${Ie("DBody",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H1=o.h1`
        ${t=>a`
                ${Ie("H1",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H2=o.h2`
        ${t=>a`
                ${Ie("H2",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H3=o.h3`
        ${t=>a`
                ${Ie("H3",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H4=o.h4`
        ${t=>a`
                ${Ie("H4",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H5=o.h5`
        ${t=>a`
                ${Ie("H5",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.H6=o.h6`
        ${t=>a`
                ${Ie("H6",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.Body=o.p`
        ${t=>a`
                ${Ie("Body",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=o.p`
        ${t=>a`
                ${Ie("BodySmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.XSmall=o.span`
        ${t=>a`
                ${Ie("XSmall",t.weight,t.paragraph)}
                color: ${we[1]};
                ${Re(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ne({...t,textStyle:"Body"}),Small:t=>Ne({...t,textStyle:"BodySmall"})}}(Ve||(Ve={}));const je=o.a`
    ${t=>a`
            ${Ie(t.textStyle,t.weight)}
            color: ${Be};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${be};

                svg {
                    color: ${be};
                }
            }
        `}
`,Pe=o(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ne=({external:n=!1,children:r,...i})=>t(je,{...i,children:[r,n&&e(Pe,{})]});var Ze;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ze||(Ze={}));const Ue=o.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${we[5]};
    border-radius: 4px;
    background: ${we[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${xe.Light[1]};
        box-shadow: ${Oe};
    }

    ${t=>t.$readOnly?a`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:t.$disabled?a`
                background: ${we[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${we[5]};
                    box-shadow: none;
                }
            `:t.$error?a`
                border: 1px solid ${He.Red.Border};

                :focus-within {
                    border: 1px solid ${He.Red.Border};
                    box-shadow: ${ze};
                }
            `:void 0}
`;o.input`
    ${Ie("Body","regular")}
    color: ${we[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${we[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;var Xe={exports:{}};Xe.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function d(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=h[c],d=u&&u[0],f=u&&u[1];a[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,h=a[2];c&&(h=a[2]),o=this.$locale(),!l&&h&&(o=n.Ls[h]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,h=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,F=l||0,v=c||0,S=u||0;return h?new Date(Date.UTC(p,m,g,y,F,v,S+60*h.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,v,S)):new Date(p,m,g,y,F,v,S)}catch(t){return new Date("")}}(e,s,r),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var Ge,Je,qe=Xe.exports,Qe={exports:{}},Ke=Qe.exports=(Ge={year:0,month:1,day:2,hour:3,minute:4,second:5},Je={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=Je[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Je[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ge[l];u>=0&&(o[u]=parseInt(c,10))}var h=o[3],d=24===h?0:h,f=o[0]+"-"+o[1]+"-"+o[2]+" "+d+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,s=i||e||r,l=o(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),l,s),u=c[0],h=c[1],d=n(u).utcOffset(h);return d.$x.$timezone=s,d},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),tn={exports:{}};tn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:s,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=m;var $=function(t){return t instanceof x},D=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},B=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},b=F;b.l=D,b.i=$,b.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return B(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<B(t)},y.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!b.u(e)||e,u=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case h:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(r?y-S:y+(6-S),m);case s:case d:return g(F+"Hours",0);case a:return g(F+"Minutes",1);case o:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=b.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[h]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(r,u){var d,f=this;r=Number(r);var g=b.p(u),p=function(t){var e=B(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return b.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:b.s(o,2,"0"),h:h(1),hh:h(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,f){var g,p=b.p(d),m=B(r),y=(m.utcOffset()-this.utcOffset())*e,F=this-m,v=b.m(this,m);return v=(g={},g[h]=v/12,g[c]=v,g[u]=v/3,g[l]=(F-y)/6048e5,g[s]=(F-y)/864e5,g[a]=F/n,g[o]=F/e,g[i]=F/t,g)[p]||F,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),w=x.prototype;return B.prototype=w,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",h],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,x,B),t.$i=!0),B},B.locale=D,B.isDayjs=$,B.unix=function(t){return B(1e3*t)},B.en=S[v],B.Ls=S,B.p={},B}();var en=tn.exports,nn={exports:{}};nn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var rn=nn.exports,on={exports:{}};on.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var an=on.exports,sn={exports:{}};sn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var ln,cn=sn.exports;en.extend(rn),en.extend(an),en.extend(cn),en.extend(qe),en.extend(Ke),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=en(e).startOf("week");return un(n).map((t=>hn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return hn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(en(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+en(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=en(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(ln||(ln={}));const un=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},hn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},dn=[1,3,5,7,8,10,12],fn=[4,6,9,11];var gn,pn,mn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":dn.includes(o)?Math.min(i,31).toString():fn.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=en(t,n);return en(e,n).diff(r,"minute")}}(gn||(gn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(pn||(pn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(mn||(mn={}));const yn=o.input`
    ${Ie("Body","regular")}
    color: ${we[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${we[3]};
    }

    ${t=>"number"===t.type?a`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:t.disabled?a`
                cursor: not-allowed;
            `:void 0}
`,Fn=o.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${we[3]};
    background-color: transparent;
    border: none;
`,vn=o(l)`
    height: 1.25rem;
    width: 1.25rem;
`,Sn=n.forwardRef((({value:n,spacing:o,type:a,error:s,disabled:l,readOnly:c,onChange:u,onClear:h,allowClear:d=!1,className:f,...g},p)=>{const m=r();i(p,(()=>m.current),[]);const y=function({ref:t,formatter:e}){return()=>{const n=t.current,r=n.value,i=e(r),o=r.substring(0,n.selectionEnd),a=e(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:m,formatter:t=>mn.transformWithSpaces(t,o)}),F=()=>"tel"===a&&o,v=t=>{const{nextValue:e,updateCaretPosition:n}=y(),r=e.replace(/\s/g,"");t.target.value=r,u(t),n()},S=n?(t=>t?F()?mn.transformWithSpaces(t,o):t:"")(n):n;return t(Ue,{$disabled:l,$error:s,$readOnly:c,className:f,children:[e(yn,{"data-testid":"input",ref:m,disabled:l,value:S,onChange:t=>{u&&(F()?v(t):u(t))},type:a,readOnly:c,...g}),d&&!l&&!c&&!!n&&e(Fn,{onClick:()=>{h&&h(),m&&m.current&&m.current.focus()},type:"button",children:e(vn,{"aria-hidden":!0})})]})}));export{Sn as Input};
//# sourceMappingURL=index.js.map
