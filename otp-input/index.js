import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r,{useRef as o,useImperativeHandle as i,useState as a,useEffect as l}from"react";import c,{css as d,keyframes as s}from"styled-components";import"react-dom";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,p="object"==typeof h&&h&&h.Object===Object&&h,g="object"==typeof self&&self&&self.Object===Object&&self,f=p||g||Function("return this")(),m=f.Symbol,y=m,b=Object.prototype,$=b.hasOwnProperty,v=b.toString,S=y?y.toStringTag:void 0;var w=function(e){var t=$.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var o=v.call(e);return r&&(t?e[S]=n:delete e[S]),o},F=Object.prototype.toString;var x=w,B=function(e){return F.call(e)},H=m?m.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?x(e):B(e)};var D=C,k=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==D(e)},_=u,E=z,N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var T=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!E(e))||(O.test(e)||!N.test(e)||null!=t&&e in Object(t))};var A=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=C,j=A;var I,V=function(e){if(!j(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=f["__core-js_shared__"],R=(I=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var P=function(e){return!!R&&R in e},M=Function.prototype.toString;var X=V,Z=P,G=A,U=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Y=Function.prototype,q=Object.prototype,J=Y.toString,Q=q.hasOwnProperty,ee=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!G(e)||Z(e))&&(X(e)?ee:K).test(U(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},oe=re(Object,"create"),ie=oe;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=oe,de=Object.prototype.hasOwnProperty;var se=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},he=oe,ue=Object.prototype.hasOwnProperty;var pe=oe;var ge=ae,fe=le,me=se,ye=function(e){var t=this.__data__;return he?void 0!==t[e]:ue.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function $e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$e.prototype.clear=ge,$e.prototype.delete=fe,$e.prototype.get=me,$e.prototype.has=ye,$e.prototype.set=be;var ve=$e;var Se=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var Fe=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},xe=Fe,Be=Array.prototype.splice;var He=Fe;var Ce=Fe;var De=Fe;var ke=Se,ze=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Be.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=He(t,e);return n<0?void 0:t[n][1]},Ee=function(e){return Ce(this.__data__,e)>-1},Ne=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=ke,Oe.prototype.delete=ze,Oe.prototype.get=_e,Oe.prototype.has=Ee,Oe.prototype.set=Ne;var Te=Oe,Ae=re(f,"Map"),We=ve,je=Te,Ie=Ae;var Ve=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Ve(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=Le;var Pe=Le;var Me=Le;var Xe=Le;var Ze=function(){this.size=0,this.__data__={hash:new We,map:new(Ie||je),string:new We}},Ge=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Pe(this,e).get(e)},Ke=function(e){return Me(this,e).has(e)},Ye=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ze,qe.prototype.delete=Ge,qe.prototype.get=Ue,qe.prototype.has=Ke,qe.prototype.set=Ye;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var et=Qe;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,o){t.push(r?o.replace(nt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},it=u,at=z,lt=m?m.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(at(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},st=dt;var ht=u,ut=T,pt=rt,gt=function(e){return null==e?"":st(e)};var ft=z;var mt=function(e,t){return ht(e)?e:ut(e,t)?[e]:pt(gt(e))},yt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var bt=function(e,t){for(var n=0,r=(t=mt(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var $t=function(e,t,n){var r=null==e?void 0:bt(e,t);return void 0===r?n:r};const vt=(e,t,n)=>t?$t(n,t)||$t(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return $t(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Ft={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=St(Ft,n[wt.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},Bt={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},Ht={collections:{base:{InputBoxShadow:d`
        inset 0 0 6px 1px ${Bt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 6px 1px ${Bt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${Bt.Shadow.Elevation}
 `}},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,r=St(Ht,n[wt.designTokenScheme]);return n.options?.designToken?vt(r,e,n.options.designToken):vt(r,e)},Dt=Ct("InputBoxShadow"),kt=Ct("InputErrorBoxShadow"),zt=(Ct("ElevationBoxShadow"),c.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Bt.Neutral[5]};
    border-radius: 4px;
    background: ${Bt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Bt.Accent.Light[1]};
        box-shadow: ${Dt};
    }

    ${e=>e.$readOnly?d`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?d`
                background: ${Bt.Neutral[6](e)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Bt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?d`
                border: 1px solid ${Bt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Bt.Validation.Red.Border(e)};
                    box-shadow: ${kt};
                }
            `:void 0}
`);var _t;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(_t||(_t={}));var Et,Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});var Ot=e;const Tt=e=>Ot.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ot.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Tt.displayName="CrossIcon",Et=Nt.CrossIcon=Tt;const At={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wt={collections:{base:{D1:{fontFamily:At.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:At.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:At.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:At.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:At.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:At.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:At.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:At.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:At.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:At.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:At.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:At.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},jt=e=>t=>{const n=t.theme,r=St(Wt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},It={D1:{fontFamily:jt("D1.fontFamily"),fontSize:jt("D1.fontSize"),fontWeight:jt("D1.fontWeight"),lineHeight:jt("D1.lineHeight"),letterSpacing:jt("D1.letterSpacing")},D2:{fontFamily:jt("D2.fontFamily"),fontSize:jt("D2.fontSize"),fontWeight:jt("D2.fontWeight"),lineHeight:jt("D2.lineHeight"),letterSpacing:jt("D2.letterSpacing")},D3:{fontFamily:jt("D3.fontFamily"),fontSize:jt("D3.fontSize"),fontWeight:jt("D3.fontWeight"),lineHeight:jt("D3.lineHeight"),letterSpacing:jt("D3.letterSpacing")},D4:{fontFamily:jt("D4.fontFamily"),fontSize:jt("D4.fontSize"),fontWeight:jt("D4.fontWeight"),lineHeight:jt("D4.lineHeight"),letterSpacing:jt("D4.letterSpacing")},DBody:{fontFamily:jt("DBody.fontFamily"),fontSize:jt("DBody.fontSize"),fontWeight:jt("DBody.fontWeight"),lineHeight:jt("DBody.lineHeight"),letterSpacing:jt("DBody.letterSpacing")},H1:{fontFamily:jt("H1.fontFamily"),fontSize:jt("H1.fontSize"),fontWeight:jt("H1.fontWeight"),lineHeight:jt("H1.lineHeight"),letterSpacing:jt("H1.letterSpacing")},H2:{fontFamily:jt("H2.fontFamily"),fontSize:jt("H2.fontSize"),fontWeight:jt("H2.fontWeight"),lineHeight:jt("H2.lineHeight"),letterSpacing:jt("H2.letterSpacing")},H3:{fontFamily:jt("H3.fontFamily"),fontSize:jt("H3.fontSize"),fontWeight:jt("H3.fontWeight"),lineHeight:jt("H3.lineHeight"),letterSpacing:jt("H3.letterSpacing")},H4:{fontFamily:jt("H4.fontFamily"),fontSize:jt("H4.fontSize"),fontWeight:jt("H4.fontWeight"),lineHeight:jt("H4.lineHeight"),letterSpacing:jt("H4.letterSpacing")},H5:{fontFamily:jt("H5.fontFamily"),fontSize:jt("H5.fontSize"),fontWeight:jt("H5.fontWeight"),lineHeight:jt("H5.lineHeight"),letterSpacing:jt("H5.letterSpacing")},H6:{fontFamily:jt("H6.fontFamily"),fontSize:jt("H6.fontSize"),fontWeight:jt("H6.fontWeight"),lineHeight:jt("H6.lineHeight"),letterSpacing:jt("H6.letterSpacing")},Body:{fontFamily:jt("Body.fontFamily"),fontSize:jt("Body.fontSize"),fontWeight:jt("Body.fontWeight"),lineHeight:jt("Body.lineHeight"),letterSpacing:jt("Body.letterSpacing")},BodySmall:{fontFamily:jt("BodySmall.fontFamily"),fontSize:jt("BodySmall.fontSize"),fontWeight:jt("BodySmall.fontWeight"),lineHeight:jt("BodySmall.lineHeight"),letterSpacing:jt("BodySmall.letterSpacing")},XSmall:{fontFamily:jt("XSmall.fontFamily"),fontSize:jt("XSmall.fontSize"),fontWeight:jt("XSmall.fontWeight"),lineHeight:jt("XSmall.lineHeight"),letterSpacing:jt("XSmall.letterSpacing")}},Vt=e=>{switch(e){case 700:case"bold":return At.Bold;case 600:case"semibold":return At.Semibold;case 300:case"light":return At.Light;case 400:case"regular":return At.Regular;default:return""}},Lt=(e,t)=>n=>{const r=It[e].fontFamily(n),o=It[e].fontWeight(n);return Object.values(At).includes(r)?d`
                font-family: ${Vt(t)||Vt(o)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${(Rt(t)||o)??"normal"};
        `},Rt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=(e,t,n=!1)=>r=>{const o=It[e],i=o.fontSize(r);return d`
            ${Lt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${d`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Mt=(e=!1,t=!1)=>t?d`
            display: block;
        `:e?d`
            display: inline;
        `:d`
            display: block;
        `,Xt=c.input`
    ${Pt("Body","regular")}
    color: ${Bt.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
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
        color: ${Bt.Neutral[3]};
    }

    ${e=>"number"===e.type?d`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?d`
                cursor: not-allowed;
            `:void 0}
`,Zt=c.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Bt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Gt=c(Et)`
    height: 1.25rem;
    width: 1.25rem;
`,Ut=r.forwardRef((({value:e,spacing:r,type:a,error:l,disabled:c,readOnly:d,onChange:s,onClear:h,allowClear:u=!1,className:p,...g},f)=>{const m=o();i(f,(()=>m.current),[]);const y=()=>"tel"===a&&r,b=e=>{const t=e.target,n=t.value,r=t.value.replace(/\s/g,"");t.value=r,s(e),t.value=n},$=e?(e=>e?y()?_t.transformWithSpaces(e,r):e:"")(e):e;return t(zt,{disabled:c,$error:l,$readOnly:d,className:p,children:[n(Xt,{"data-testid":"input",ref:m,disabled:c,value:$,onChange:e=>{s&&(y()?b(e):s(e))},type:a,readOnly:d,...g}),u&&!c&&!d&&!!e&&n(Zt,{onClick:()=>{h&&h(),m&&m.current&&m.current.focus()},type:"button",children:n(Gt,{})})]})})),Kt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Yt=e=>Object.keys(Kt).reduce(((t,n)=>{const r=Kt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),qt=Yt("max-width"),Jt=(Yt("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Qt=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,en=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Bt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Qt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,tn=c(en)`
    animation-delay: -0.45s;
`,nn=c(en)`
    animation-delay: -0.3s;
`,rn=c(en)`
    animation-delay: -0.15s;
`;var on,an={};Object.defineProperty(an,"__esModule",{value:!0});var ln=e;const cn=e=>ln.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ln.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var dn;cn.displayName="ExternalIcon",on=an.ExternalIcon=cn,function(e){e.D1=c.h1`
        ${e=>d`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.D2=c.h1`
        ${e=>d`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.D3=c.h1`
        ${e=>d`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.D4=c.h1`
        ${e=>d`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.DBody=c.h1`
        ${e=>d`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H1=c.h1`
        ${e=>d`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H2=c.h2`
        ${e=>d`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H3=c.h3`
        ${e=>d`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H4=c.h4`
        ${e=>d`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H5=c.h5`
        ${e=>d`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.H6=c.h6`
        ${e=>d`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.Body=c.p`
        ${e=>d`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=c.p`
        ${e=>d`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=c.span`
        ${e=>d`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Bt.Neutral[1]};
                ${Mt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>un({...e,textStyle:"Body"}),Small:e=>un({...e,textStyle:"BodySmall"})}}(dn||(dn={}));const sn=c.a`
    ${e=>d`
            ${Pt(e.textStyle,e.weight)}
            color: ${Bt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Bt.Secondary};

                svg {
                    color: ${Bt.Secondary};
                }
            }
        `}
`,hn=c(on)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,un=({external:e=!1,children:r,...o})=>t(sn,{...o,children:[r,e&&n(hn,{})]});var pn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(pn||(pn={}));const gn=c.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${Bt.Neutral[8](e)};
                    border: 1px solid ${Bt.Primary(e)};

                    span {
                        color: ${Bt.Primary(e)};
                    }
                `;case"light":return d`
                    background-color: ${Bt.Neutral[8](e)};
                    border: 1px solid ${Bt.Neutral[5](e)};

                    span {
                        color: ${Bt.Primary(e)};
                    }
                `;case"disabled":return d`
                    background-color: ${Bt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Bt.Neutral[3](e)};
                    }
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Bt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Bt.Secondary};
                        }
                    }
                `;default:return d`
                    background-color: ${Bt.Primary(e)};
                    border: 1px solid transparent;

                    ${qt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Bt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    span {
                        ${Pt("H5","semibold")}
                    }

                    ${qt.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    span {
                        ${Pt("H4","semibold")}
                    }

                    ${qt.mobileS} {
                        height: auto;
                    }
                `}
`,fn=c((({color:e,className:r,size:o=18})=>t(Jt,{className:r,$size:o,$color:e,children:[n(en,{id:"inner1",$size:o-2,$borderWidth:2}),n(tn,{id:"inner2",$size:o-2,$borderWidth:2}),n(nn,{id:"inner3",$size:o-2,$borderWidth:2}),n(rn,{id:"inner4",$size:o-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Bt.Primary(e);break;case"disabled":t=Bt.Neutral[3](e);break;default:t=Bt.Neutral[8](e)}return d`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,mn={Default:r.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default"};return t(gn,{ref:r,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[a&&n(fn,{...d}),n("span",{children:o})]})})),Small:r.forwardRef(((e,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small"};return t(gn,{ref:r,"data-testid":c["data-testid"]||"button",disabled:i,...d,...c,children:[a&&n(fn,{...d,size:16}),n("span",{children:o})]})}))},yn=c.div`
    display: flex;
    flex-direction: column;
`,bn=c.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,$n=c(Ut)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }
`,vn=c(mn.Small)`
    margin: 2rem 0rem;
`;var Sn={};Object.defineProperty(Sn,"__esModule",{value:!0});var wn=e;const Fn=e=>wn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:wn.jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});Fn.displayName="ICircleFillIcon",Sn.ICircleFillIcon=Fn,c.div`
    border-radius: 0.5rem;
    background: ${Bt.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;c.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,c.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=d`
                transition: none;
            `),t}}
`;c.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${qt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const xn=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&d`
                background-color: ${Bt.Neutral[7]};
            `}
    }
`,Bn=r.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",type:o="button",...i},a)=>n(xn,{ref:a,$outline:r,$highlight:t,type:o,...i,children:e}))),Hn=c.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Bt.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${qt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Cn=c(Bn)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Bt.Accent.Light[1]};
    }
`,Dn=c(Et)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Bt.Neutral[4]};
`,kn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";c.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?d`
            visibility: visible;
            opacity: 1;
            transition: ${kn};
            z-index: 2;
        `:d`
            visibility: hidden;
            opacity: 0;
            transition: ${kn};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return d`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return d`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${qt.mobileL} {
        display: none;
    }
`,c((({id:e="modal-box",children:r,onClose:o,showCloseButton:i=!0,...a})=>t(Hn,{"data-testid":e,...a,onClick:e=>{e.stopPropagation()},children:[i&&n(Cn,{type:"button",onClick:o,"data-testid":"close-button",focusHighlight:!1,children:n(Dn,{})}),r]})))`
    padding: 3.5rem 1.25rem 2.5rem;
`,c.div`
    position: relative;
    width: fit-content;
`,c.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,c.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Bt.Primary};
    }
`,c.div`
    display: inline;
    position: relative;
    width: fit-content;
`,c.label`
    ${Pt("H5","semibold")}

    color: ${e=>e.disabled?Bt.Neutral[4](e):Bt.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;const zn=c(dn.H6)`
    color: ${Bt.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;c(dn.BodySmall)`
    color: ${e=>e.disabled?Bt.Neutral[4](e):Bt.Neutral[3](e)};
`;const _n=e=>n(zn,{weight:"semibold",...e}),En=({id:e,value:r=[],"data-testid":i,className:c,cooldownDuration:d,actionButtonProps:s,errorMessage:h,numOfInput:u,onChange:p,onCooldownStart:g,onCooldownEnd:f,...m})=>{const{disabled:y,onClick:b,styleType:$="secondary",...v}=s??{},S=o([]),w=o(p),[F,x]=a(new Array(u).fill("")),[B,H]=a(d),[C,D]=a(new Date);l((()=>(S?.current[0]?.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_))),[]),l((()=>{if(0!==d){g&&g();const e=O();return()=>e()}}),[C]),l((()=>{w.current=p}),[p]),l((()=>{r.length===u&&x(r)}),[r]);const k=e=>t=>{const n=t.target.value.replace(/[^0-9]/g,"");if(E(n)){const t=[...F];t[e]=n.substring(n.length-1),S.current[e+1]?.focus(),x(t),p&&p(t)}},z=e=>t=>{const{key:n,code:r}=t;if("Backspace"===n||"Backspace"===r){const t=[...F];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",S.current[e-1]?.focus()),x(t),p&&p(t)}},_=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&E(t,u)?(x(n),w.current&&w.current(n)):e.preventDefault()},E=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),N=()=>{const e=Date.now(),t=1e3*d;return e<C.valueOf()+t},O=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*d,r=Math.ceil((C.valueOf()+n-t)/1e3);H(r),r<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},T=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(yn,{id:e,"data-testid":i,className:c,children:[n(bn,{children:F.map(((t,r)=>n($n,{id:T(r,"otp-input",e),"data-testid":T(r,"otp-input",i),ref:e=>S.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:k(r),onKeyDown:z(r),...m},r)))}),h&&n(_n,{children:h}),n(vn,{styleType:$,type:"button",...v,onClick:e=>{x(new Array(u).fill("")),N()||(D(new Date),H(d)),b&&b(e)},disabled:y||N(),children:v.children?v.children:"Resend OTP"+(B?` in ${B} second${B>1?"s":""}`:"")})]})};export{En as OtpInput};
//# sourceMappingURL=index.js.map
