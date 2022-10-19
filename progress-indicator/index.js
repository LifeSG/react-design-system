import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import r,{useState as i,useRef as o,useEffect as a}from"react";import l,{css as c}from"styled-components";const h={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},d=t=>Object.keys(h).reduce(((e,n)=>{const r=h[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),g=d("max-width"),f=(d("min-width"),h);var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,p="object"==typeof s&&s&&s.Object===Object&&s,m="object"==typeof self&&self&&self.Object===Object&&self,y=p||m||Function("return this")(),v=y.Symbol,F=v,S=Object.prototype,B=S.hasOwnProperty,$=S.toString,w=F?F.toStringTag:void 0;var H=function(t){var e=B.call(t,w),n=t[w];try{t[w]=void 0;var r=!0}catch(t){}var i=$.call(t);return r&&(e?t[w]=n:delete t[w]),i},b=Object.prototype.toString;var D=H,C=function(t){return b.call(t)},_=v?v.toStringTag:void 0;var x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?D(t):C(t)};var z=x,E=function(t){return null!=t&&"object"==typeof t};var L=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==z(t)},W=u,k=L,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;var O=function(t,e){if(W(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!k(t))||(N.test(t)||!A.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},R=x,V=j;var P,T=function(t){if(!V(t))return!1;var e=R(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=y["__core-js_shared__"],M=(P=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var X=function(t){return!!M&&M in t},G=Function.prototype.toString;var Z=T,U=X,q=j,J=function(t){if(null!=t){try{return G.call(t)}catch(t){}try{return t+""}catch(t){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,Y=Object.prototype,tt=Q.toString,et=Y.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(t){return!(!q(t)||U(t))&&(Z(t)?nt:K).test(J(t))},it=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=it(t,e);return rt(n)?n:void 0},at=ot(Object,"create"),lt=at;var ct=function(){this.__data__=lt?lt(null):{},this.size=0};var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=at,gt=Object.prototype.hasOwnProperty;var ft=function(t){var e=this.__data__;if(dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},st=at,ut=Object.prototype.hasOwnProperty;var pt=at;var mt=ct,yt=ht,vt=ft,Ft=function(t){var e=this.__data__;return st?void 0!==e[t]:ut.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&void 0===e?"__lodash_hash_undefined__":e,this};function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Bt.prototype.clear=mt,Bt.prototype.delete=yt,Bt.prototype.get=vt,Bt.prototype.has=Ft,Bt.prototype.set=St;var $t=Bt;var wt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var bt=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},Dt=bt,Ct=Array.prototype.splice;var _t=bt;var xt=bt;var zt=bt;var Et=wt,Lt=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ct.call(e,n,1),--this.size,!0)},Wt=function(t){var e=this.__data__,n=_t(e,t);return n<0?void 0:e[n][1]},kt=function(t){return xt(this.__data__,t)>-1},At=function(t,e){var n=this.__data__,r=zt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nt.prototype.clear=Et,Nt.prototype.delete=Lt,Nt.prototype.get=Wt,Nt.prototype.has=kt,Nt.prototype.set=At;var Ot=Nt,jt=ot(y,"Map"),Rt=$t,Vt=Ot,Pt=jt;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},Mt=It;var Xt=It;var Gt=It;var Zt=It;var Ut=function(){this.size=0,this.__data__={hash:new Rt,map:new(Pt||Vt),string:new Rt}},qt=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e},Jt=function(t){return Xt(this,t).get(t)},Kt=function(t){return Gt(this,t).has(t)},Qt=function(t,e){var n=Zt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Yt.prototype.clear=Ut,Yt.prototype.delete=qt,Yt.prototype.get=Jt,Yt.prototype.has=Kt,Yt.prototype.set=Qt;var te=Yt;function ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ee.Cache||te),n}ee.Cache=te;var ne=ee;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/\\(\\)?/g,oe=function(t){var e=ne(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(re,(function(t,n,r,i){e.push(r?i.replace(ie,"$1"):n||t)})),e}));var ae=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},le=u,ce=L,he=v?v.prototype:void 0,de=he?he.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(le(e))return ae(e,t)+"";if(ce(e))return de?de.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},fe=ge;var se=u,ue=O,pe=oe,me=function(t){return null==t?"":fe(t)};var ye=L;var ve=function(t,e){return se(t)?t:ue(t,e)?[t]:pe(me(t))},Fe=function(t){if("string"==typeof t||ye(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Se=function(t,e){for(var n=0,r=(e=ve(e,t)).length;null!=t&&n<r;)t=t[Fe(e[n++])];return n&&n==r?t:void 0};var Be=function(t,e,n){var r=null==t?void 0:Se(t,e);return void 0===r?n:r};const $e=(t,e,n)=>e?Be(n,e)||Be(t,e):n||t,we=(t,e)=>{const n=e||t.defaultValue;return Be(t.collections,n)};var He;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(He||(He={}));const be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=we(be,n[He.colorScheme]);return n.options&&n.options.color?$e(r,t,n.options.color):$e(r,t)},Ce={Brand:{1:De("Brand.1"),2:De("Brand.2"),3:De("Brand.3"),4:De("Brand.4"),5:De("Brand.5"),6:De("Brand.6")},Primary:De("Primary"),PrimaryDark:De("PrimaryDark"),Secondary:De("Secondary"),Accent:{Light:{1:De("Accent.Light.1"),2:De("Accent.Light.2"),3:De("Accent.Light.3"),4:De("Accent.Light.4"),5:De("Accent.Light.5"),6:De("Accent.Light.6")},Dark:{1:De("Accent.Dark.1"),2:De("Accent.Dark.2"),3:De("Accent.Dark.3")}},Neutral:{1:De("Neutral.1"),2:De("Neutral.2"),3:De("Neutral.3"),4:De("Neutral.4"),5:De("Neutral.5"),6:De("Neutral.6"),7:De("Neutral.7"),8:De("Neutral.8")},Validation:{Green:{Text:De("Validation.Green.Text"),Icon:De("Validation.Green.Icon"),Border:De("Validation.Green.Border"),Background:De("Validation.Green.Background")},Orange:{Text:De("Validation.Orange.Text"),Icon:De("Validation.Orange.Icon"),Border:De("Validation.Orange.Border"),Background:De("Validation.Orange.Background"),Badge:De("Validation.Orange.Badge")},Red:{Text:De("Validation.Red.Text"),Icon:De("Validation.Red.Icon"),Border:De("Validation.Red.Border"),Background:De("Validation.Red.Background")}}},_e=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="container",type:o="flex",...a}=e;return t(xe,{ref:n,"data-testid":i,type:o,...a,children:r})})),xe=l.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${g.desktopM} {
        max-width: 1152px;
    }

    ${g.tablet} {
        max-width: 960px;
    }

    ${g.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${t=>"grid"===t.type?c`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${g.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${g.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `:c`
                    display: flex;
                    height: auto;
                `}
`,ze=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="section",...o}=e;return t(Ee,{ref:n,"data-testid":i,...o,children:r})})),Ee=l.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,Le=r.forwardRef(((e,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",...l}=e;return t(ze,{ref:n,"data-testid":i,className:o,...l,children:t(_e,{"data-testid":`${i}-container`,type:a,"data-id":"container",children:r})})})),We={Section:ze,Container:_e,Content:Le},ke={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ae={collections:{base:{D1:{fontFamily:ke.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ke.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ke.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ke.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ke.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ke.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ke.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ke.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ke.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ke.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ke.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ke.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ke.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ke.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ne=t=>e=>{const n=e.theme,r=we(Ae,n[He.textStyleScheme]);return n.options&&n.options.textStyle?$e(r,t,n.options.textStyle):$e(r,t)},Oe={D1:{fontFamily:Ne("D1.fontFamily"),fontSize:Ne("D1.fontSize"),fontWeight:Ne("D1.fontWeight"),lineHeight:Ne("D1.lineHeight"),letterSpacing:Ne("D1.letterSpacing")},D2:{fontFamily:Ne("D2.fontFamily"),fontSize:Ne("D2.fontSize"),fontWeight:Ne("D2.fontWeight"),lineHeight:Ne("D2.lineHeight"),letterSpacing:Ne("D2.letterSpacing")},D3:{fontFamily:Ne("D3.fontFamily"),fontSize:Ne("D3.fontSize"),fontWeight:Ne("D3.fontWeight"),lineHeight:Ne("D3.lineHeight"),letterSpacing:Ne("D3.letterSpacing")},D4:{fontFamily:Ne("D4.fontFamily"),fontSize:Ne("D4.fontSize"),fontWeight:Ne("D4.fontWeight"),lineHeight:Ne("D4.lineHeight"),letterSpacing:Ne("D4.letterSpacing")},DBody:{fontFamily:Ne("DBody.fontFamily"),fontSize:Ne("DBody.fontSize"),fontWeight:Ne("DBody.fontWeight"),lineHeight:Ne("DBody.lineHeight"),letterSpacing:Ne("DBody.letterSpacing")},H1:{fontFamily:Ne("H1.fontFamily"),fontSize:Ne("H1.fontSize"),fontWeight:Ne("H1.fontWeight"),lineHeight:Ne("H1.lineHeight"),letterSpacing:Ne("H1.letterSpacing")},H2:{fontFamily:Ne("H2.fontFamily"),fontSize:Ne("H2.fontSize"),fontWeight:Ne("H2.fontWeight"),lineHeight:Ne("H2.lineHeight"),letterSpacing:Ne("H2.letterSpacing")},H3:{fontFamily:Ne("H3.fontFamily"),fontSize:Ne("H3.fontSize"),fontWeight:Ne("H3.fontWeight"),lineHeight:Ne("H3.lineHeight"),letterSpacing:Ne("H3.letterSpacing")},H4:{fontFamily:Ne("H4.fontFamily"),fontSize:Ne("H4.fontSize"),fontWeight:Ne("H4.fontWeight"),lineHeight:Ne("H4.lineHeight"),letterSpacing:Ne("H4.letterSpacing")},H5:{fontFamily:Ne("H5.fontFamily"),fontSize:Ne("H5.fontSize"),fontWeight:Ne("H5.fontWeight"),lineHeight:Ne("H5.lineHeight"),letterSpacing:Ne("H5.letterSpacing")},H6:{fontFamily:Ne("H6.fontFamily"),fontSize:Ne("H6.fontSize"),fontWeight:Ne("H6.fontWeight"),lineHeight:Ne("H6.lineHeight"),letterSpacing:Ne("H6.letterSpacing")},Body:{fontFamily:Ne("Body.fontFamily"),fontSize:Ne("Body.fontSize"),fontWeight:Ne("Body.fontWeight"),lineHeight:Ne("Body.lineHeight"),letterSpacing:Ne("Body.letterSpacing")},BodySmall:{fontFamily:Ne("BodySmall.fontFamily"),fontSize:Ne("BodySmall.fontSize"),fontWeight:Ne("BodySmall.fontWeight"),lineHeight:Ne("BodySmall.lineHeight"),letterSpacing:Ne("BodySmall.letterSpacing")},XSmall:{fontFamily:Ne("XSmall.fontFamily"),fontSize:Ne("XSmall.fontSize"),fontWeight:Ne("XSmall.fontWeight"),lineHeight:Ne("XSmall.lineHeight"),letterSpacing:Ne("XSmall.letterSpacing")}},je=t=>{switch(t){case 700:case"bold":return ke.Bold;case 600:case"semibold":return ke.Semibold;case 300:case"light":return ke.Light;case 400:case"regular":return ke.Regular;default:return""}},Re=(t,e)=>n=>{const r=Oe[t].fontFamily(n),i=Oe[t].fontWeight(n);return Object.values(ke).includes(r)?c`
                font-family: ${je(e)||je(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(Ve(e)||i)??"normal"};
        `},Ve=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pe=(t,e,n=!1)=>r=>{const i=Oe[t],o=i.fontSize(r);return c`
            ${Re(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Te=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `,Ie=l.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Ce.Primary};
`,Me=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Xe=e=>t(Ie,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Ge=e=>t(Ie,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Ze=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Ue=e=>t(Ie,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),qe=l.span`
    font-size: 1rem;
`;var Je;!function(t){t.D1=l.h1`
        ${t=>c`
                ${Pe("D1",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Pe("D2",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Pe("D3",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Pe("D4",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Pe("DBody",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Pe("H1",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Pe("H2",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Pe("H3",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Pe("H4",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Pe("H5",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Pe("H6",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Pe("Body",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Pe("BodySmall",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Pe("XSmall",t.weight,t.paragraph)}
                color: ${Ce.Neutral[1]};
                ${Te(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Ye({...t,textStyle:"Body"}),Small:t=>Ye({...t,textStyle:"BodySmall"})}}(Je||(Je={}));const Ke=l.a`
    ${t=>c`
            ${Pe(t.textStyle,t.weight)}
            color: ${Ce.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ce.Secondary};
            }
        `}
`,Qe=l((({type:e,...n})=>{switch(e){case"arrow-right":return t(Me,{...n});case"info":return t(Ge,{...n});case"cross":return t(Xe,{...n});case"play":return t(Ze,{...n});case"search":return t(Ue,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(qe,{...n,className:i})}}}))`
    margin-left: 0.4rem;
`,Ye=({external:n=!1,children:r,...i})=>e(Ke,{...i,children:[r,n&&t(Qe,{type:"external"})]});var tn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(tn||(tn={}));const en=l.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${g.desktopM} {
        margin: 1.5rem 0;
    }

    ${g.tablet} {
        margin: 1rem 0;
    }
`,nn=l.nav`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,rn=l.div`
    width: ${"4rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{const{position:e,backgroundColor:n}=t;let r;const i="rgba(255,255,255,0.001)";return r="left"===e?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${n||"white"}, ${i});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${n||"white"}, ${i});\n            `,`\n            ${g.tablet} {\n                ${r}\n            }\n        `}};
`;l(We.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const on=l.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${t=>{const{highlighted:e}=t;return`\n            background-color: ${(e?Ce.Accent.Light[1]:Ce.Neutral[6])(t)};\n        `}};

    ${g.mobileL} {
        width: ${"10rem"};
    }
`,an=l(Je.BodySmall)`
    margin-right: 0.5rem;

    ${t=>{const{highlighted:e}=t;return`color: ${(e?Ce.Primary:Ce.Neutral[4])(t)};`}};
`,ln=l.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`,cn=({steps:r,currentIndex:l,displayExtractor:c,fadeColor:h,fadePosition:d="both"})=>{const[g,s]=i(!!d),[u,p]=i("left"===d||"both"===d),[m,y]=i("right"===d||"both"===d),v=o(null),F=o(null);a((()=>{B(),window.addEventListener("resize",B);const t=F.current;return t&&t.addEventListener("scroll",B),()=>{window.removeEventListener("resize",B),t&&t.removeEventListener("scroll",B)}}),[]),a((()=>(S(),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S)})),[l]);const S=()=>{if(window.innerWidth>f.mobileL)return;const t=F.current;if(t){const e=10.5*l-4;t.scrollLeft=16*e}},B=()=>{if(g){s(window.innerWidth<f.mobileL);const t=F.current,e=v.current;t&&e&&t.scrollWidth>e.offsetWidth?(s(!0),p(t.scrollLeft>=1),y(t.scrollWidth-t.scrollLeft>e.offsetWidth)):s(!1)}},$=(t,e)=>t<e?"Completed step":t===e?"Current step":"Uncompleted step";if(!r.length)return null;return e(en,{ref:v,children:[t(nn,{ref:F,children:r.map(((n,r)=>{const i=r<=l,o=r===l?"bold":"regular";return e(ln,{"aria-label":$(r,l),children:[t(on,{highlighted:i}),t(an,{highlighted:i,weight:o,children:(a=n,c?c(a):a.toString())})]},r);var a}))}),g&&e(n,{children:[u&&t(rn,{backgroundColor:h,position:"left"}),m&&t(rn,{backgroundColor:h,position:"right"})]})]})};export{cn as ProgressIndicator};
//# sourceMappingURL=index.js.map
