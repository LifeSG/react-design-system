import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import o,{useRef as r,useImperativeHandle as i}from"react";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=Array.isArray,u="object"==typeof c&&c&&c.Object===Object&&c,f="object"==typeof self&&self&&self.Object===Object&&self,g=u||f||Function("return this")(),h=g.Symbol,s=h,p=Object.prototype,y=p.hasOwnProperty,S=p.toString,F=s?s.toStringTag:void 0;var m=function(t){var e=y.call(t,F),n=t[F];try{t[F]=void 0;var o=!0}catch(t){}var r=S.call(t);return o&&(e?t[F]=n:delete t[F]),r},v=Object.prototype.toString;var B=m,b=function(t){return v.call(t)},H=h?h.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?B(t):b(t)};var _=D,w=function(t){return null!=t&&"object"==typeof t};var x=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==_(t)},z=d,E=x,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var A=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!E(t))||(k.test(t)||!C.test(t)||null!=e&&t in Object(e))};var $=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},W=D,O=$;var j,T=function(t){if(!O(t))return!1;var e=W(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=g["__core-js_shared__"],I=(j=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var R=function(t){return!!I&&I in t},L=Function.prototype.toString;var N=T,P=R,G=$,X=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,Z=Function.prototype,U=Object.prototype,q=Z.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!G(t)||P(t))&&(N(t)?K:M).test(X(t))},Y=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var n=Y(t,e);return Q(n)?n:void 0},et=tt(Object,"create"),nt=et;var ot=function(){this.__data__=nt?nt(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},it=et,at=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(it){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return at.call(e,t)?e[t]:void 0},ct=et,dt=Object.prototype.hasOwnProperty;var ut=et;var ft=ot,gt=rt,ht=lt,st=function(t){var e=this.__data__;return ct?void 0!==e[t]:dt.call(e,t)},pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}yt.prototype.clear=ft,yt.prototype.delete=gt,yt.prototype.get=ht,yt.prototype.has=st,yt.prototype.set=pt;var St=yt;var Ft=function(){this.__data__=[],this.size=0};var mt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1},Bt=vt,bt=Array.prototype.splice;var Ht=vt;var Dt=vt;var _t=vt;var wt=Ft,xt=function(t){var e=this.__data__,n=Bt(e,t);return!(n<0)&&(n==e.length-1?e.pop():bt.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=Ht(e,t);return n<0?void 0:e[n][1]},Et=function(t){return Dt(this.__data__,t)>-1},Ct=function(t,e){var n=this.__data__,o=_t(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this};function kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}kt.prototype.clear=wt,kt.prototype.delete=xt,kt.prototype.get=zt,kt.prototype.has=Et,kt.prototype.set=Ct;var At=kt,$t=tt(g,"Map"),Wt=St,Ot=At,jt=$t;var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Tt(e)?n["string"==typeof e?"string":"hash"]:n.map},It=Vt;var Rt=Vt;var Lt=Vt;var Nt=Vt;var Pt=function(){this.size=0,this.__data__={hash:new Wt,map:new(jt||Ot),string:new Wt}},Gt=function(t){var e=It(this,t).delete(t);return this.size-=e?1:0,e},Xt=function(t){return Rt(this,t).get(t)},Mt=function(t){return Lt(this,t).has(t)},Zt=function(t,e){var n=Nt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Gt,Ut.prototype.get=Xt,Ut.prototype.has=Mt,Ut.prototype.set=Zt;var qt=Ut;function Jt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=e?e.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var a=t.apply(this,o);return n.cache=i.set(r,a)||i,a};return n.cache=new(Jt.Cache||qt),n}Jt.Cache=qt;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,te=function(t){var e=Kt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Qt,(function(t,n,o,r){e.push(o?r.replace(Yt,"$1"):n||t)})),e}));var ee=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r},ne=d,oe=x,re=h?h.prototype:void 0,ie=re?re.toString:void 0;var ae=function t(e){if("string"==typeof e)return e;if(ne(e))return ee(e,t)+"";if(oe(e))return ie?ie.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},le=ae;var ce=d,de=A,ue=te,fe=function(t){return null==t?"":le(t)};var ge=x;var he=function(t,e){return ce(t)?t:de(t,e)?[t]:ue(fe(t))},se=function(t){if("string"==typeof t||ge(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var pe=function(t,e){for(var n=0,o=(e=he(e,t)).length;null!=t&&n<o;)t=t[se(e[n++])];return n&&n==o?t:void 0};var ye=function(t,e,n){var o=null==t?void 0:pe(t,e);return void 0===o?n:o};const Se=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,Fe=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var me;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(me||(me={}));const ve={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Be=t=>e=>{const n=e.theme,o=Fe(ve,n[me.colorScheme]);return n.options&&n.options.color?Se(o,t,n.options.color):Se(o,t)},be={Brand:{1:Be("Brand.1"),2:Be("Brand.2"),3:Be("Brand.3"),4:Be("Brand.4"),5:Be("Brand.5"),6:Be("Brand.6")},Primary:Be("Primary"),PrimaryDark:Be("PrimaryDark"),Secondary:Be("Secondary"),Accent:{Light:{1:Be("Accent.Light.1"),2:Be("Accent.Light.2"),3:Be("Accent.Light.3"),4:Be("Accent.Light.4"),5:Be("Accent.Light.5"),6:Be("Accent.Light.6")},Dark:{1:Be("Accent.Dark.1"),2:Be("Accent.Dark.2"),3:Be("Accent.Dark.3")}},Neutral:{1:Be("Neutral.1"),2:Be("Neutral.2"),3:Be("Neutral.3"),4:Be("Neutral.4"),5:Be("Neutral.5"),6:Be("Neutral.6"),7:Be("Neutral.7"),8:Be("Neutral.8")},Validation:{Green:{Text:Be("Validation.Green.Text"),Icon:Be("Validation.Green.Icon"),Border:Be("Validation.Green.Border"),Background:Be("Validation.Green.Background")},Orange:{Text:Be("Validation.Orange.Text"),Icon:Be("Validation.Orange.Icon"),Border:Be("Validation.Orange.Border"),Background:Be("Validation.Orange.Background"),Badge:Be("Validation.Orange.Badge")},Red:{Text:Be("Validation.Red.Text"),Icon:Be("Validation.Red.Icon"),Border:Be("Validation.Red.Border"),Background:Be("Validation.Red.Background")},Blue:{Text:Be("Validation.Blue.Text"),Icon:Be("Validation.Blue.Icon"),Border:Be("Validation.Blue.Border"),Background:Be("Validation.Blue.Background")}},Shadow:{Accent:Be("Shadow.Accent"),Red:Be("Shadow.Red"),Elevation:Be("Shadow.Elevation")}},He={collections:{base:{InputBoxShadow:l`
        inset 0 0 6px 1px ${be.Shadow.Accent}
    `,InputErrorBoxShadow:l`
        inset 0 0 6px 1px ${be.Shadow.Red}
    `,ElevationBoxShadow:l`
      0px 2px 8px ${be.Shadow.Elevation}
 `}},defaultValue:"base"},De=t=>e=>{const n=e.theme,o=Fe(He,n[me.designTokenScheme]);return n.options?.designToken?Se(o,t,n.options.designToken):Se(o,t)},_e=De("InputBoxShadow"),we=De("InputErrorBoxShadow"),xe=(De("ElevationBoxShadow"),a.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${be.Neutral[5]};
    border-radius: 4px;
    background: ${be.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${be.Accent.Light[1]};
        box-shadow: ${_e};
    }

    ${t=>t.$readOnly?l`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:t.disabled?l`
                background: ${be.Neutral[6](t)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${be.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.$error?l`
                border: 1px solid ${be.Validation.Red.Border(t)};

                :focus-within {
                    border: 1px solid ${be.Validation.Red.Border(t)};
                    box-shadow: ${we};
                }
            `:void 0}
`);var ze;!function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,o)=>{let r=0;e>n&&(r=Math.floor((e-n)/8));const i=o+r;if(i<t.length){const e=Math.floor(i/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(ze||(ze={}));var Ee,Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var ke=t;const Ae=t=>ke.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:ke.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Ae.displayName="CrossIcon",Ee=Ce.CrossIcon=Ae;const $e={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},We={collections:{base:{D1:{fontFamily:$e.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$e.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$e.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$e.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$e.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$e.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$e.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$e.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$e.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$e.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$e.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$e.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$e.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$e.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Oe=t=>e=>{const n=e.theme,o=Fe(We,n[me.textStyleScheme]);return n.options&&n.options.textStyle?Se(o,t,n.options.textStyle):Se(o,t)},je={D1:{fontFamily:Oe("D1.fontFamily"),fontSize:Oe("D1.fontSize"),fontWeight:Oe("D1.fontWeight"),lineHeight:Oe("D1.lineHeight"),letterSpacing:Oe("D1.letterSpacing")},D2:{fontFamily:Oe("D2.fontFamily"),fontSize:Oe("D2.fontSize"),fontWeight:Oe("D2.fontWeight"),lineHeight:Oe("D2.lineHeight"),letterSpacing:Oe("D2.letterSpacing")},D3:{fontFamily:Oe("D3.fontFamily"),fontSize:Oe("D3.fontSize"),fontWeight:Oe("D3.fontWeight"),lineHeight:Oe("D3.lineHeight"),letterSpacing:Oe("D3.letterSpacing")},D4:{fontFamily:Oe("D4.fontFamily"),fontSize:Oe("D4.fontSize"),fontWeight:Oe("D4.fontWeight"),lineHeight:Oe("D4.lineHeight"),letterSpacing:Oe("D4.letterSpacing")},DBody:{fontFamily:Oe("DBody.fontFamily"),fontSize:Oe("DBody.fontSize"),fontWeight:Oe("DBody.fontWeight"),lineHeight:Oe("DBody.lineHeight"),letterSpacing:Oe("DBody.letterSpacing")},H1:{fontFamily:Oe("H1.fontFamily"),fontSize:Oe("H1.fontSize"),fontWeight:Oe("H1.fontWeight"),lineHeight:Oe("H1.lineHeight"),letterSpacing:Oe("H1.letterSpacing")},H2:{fontFamily:Oe("H2.fontFamily"),fontSize:Oe("H2.fontSize"),fontWeight:Oe("H2.fontWeight"),lineHeight:Oe("H2.lineHeight"),letterSpacing:Oe("H2.letterSpacing")},H3:{fontFamily:Oe("H3.fontFamily"),fontSize:Oe("H3.fontSize"),fontWeight:Oe("H3.fontWeight"),lineHeight:Oe("H3.lineHeight"),letterSpacing:Oe("H3.letterSpacing")},H4:{fontFamily:Oe("H4.fontFamily"),fontSize:Oe("H4.fontSize"),fontWeight:Oe("H4.fontWeight"),lineHeight:Oe("H4.lineHeight"),letterSpacing:Oe("H4.letterSpacing")},H5:{fontFamily:Oe("H5.fontFamily"),fontSize:Oe("H5.fontSize"),fontWeight:Oe("H5.fontWeight"),lineHeight:Oe("H5.lineHeight"),letterSpacing:Oe("H5.letterSpacing")},H6:{fontFamily:Oe("H6.fontFamily"),fontSize:Oe("H6.fontSize"),fontWeight:Oe("H6.fontWeight"),lineHeight:Oe("H6.lineHeight"),letterSpacing:Oe("H6.letterSpacing")},Body:{fontFamily:Oe("Body.fontFamily"),fontSize:Oe("Body.fontSize"),fontWeight:Oe("Body.fontWeight"),lineHeight:Oe("Body.lineHeight"),letterSpacing:Oe("Body.letterSpacing")},BodySmall:{fontFamily:Oe("BodySmall.fontFamily"),fontSize:Oe("BodySmall.fontSize"),fontWeight:Oe("BodySmall.fontWeight"),lineHeight:Oe("BodySmall.lineHeight"),letterSpacing:Oe("BodySmall.letterSpacing")},XSmall:{fontFamily:Oe("XSmall.fontFamily"),fontSize:Oe("XSmall.fontSize"),fontWeight:Oe("XSmall.fontWeight"),lineHeight:Oe("XSmall.lineHeight"),letterSpacing:Oe("XSmall.letterSpacing")}},Te=t=>{switch(t){case 700:case"bold":return $e.Bold;case 600:case"semibold":return $e.Semibold;case 300:case"light":return $e.Light;case 400:case"regular":return $e.Regular;default:return""}},Ve=(t,e)=>n=>{const o=je[t].fontFamily(n),r=je[t].fontWeight(n);return Object.values($e).includes(o)?l`
                font-family: ${Te(e)||Te(r)||o};
                font-weight: normal !important;
            `:l`
            font-family: ${o};
            font-weight: ${(Ie(e)||r)??"normal"};
        `},Ie=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Re=(t,e,n=!1)=>o=>{const r=je[t],i=r.fontSize(o);return l`
            ${Ve(t,e)}
            font-size: ${i}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(o)||0}rem !important;
            ${l`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Le=a.input`
    ${Re("Body","regular")}
    color: ${be.Neutral[1]};

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
        color: ${be.Neutral[3]};
    }

    ${t=>"number"===t.type?l`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:t.disabled?l`
                cursor: not-allowed;
            `:void 0}
`,Ne=a.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${be.Neutral[3]};
    background-color: transparent;
    border: none;
`,Pe=a(Ee)`
    height: 1.25rem;
    width: 1.25rem;
`,Ge=o.forwardRef((({value:t,spacing:o,type:a,error:l,disabled:c,readOnly:d,onChange:u,onClear:f,allowClear:g=!1,className:h,...s},p)=>{const y=r();i(p,(()=>y.current),[]);const S=()=>"tel"===a&&o,F=t=>{const e=t.target,n=e.value,o=e.value.replace(/\s/g,"");e.value=o,u(t),e.value=n},m=t?(t=>t?S()?ze.transformWithSpaces(t,o):t:"")(t):t;return e(xe,{disabled:c,$error:l,$readOnly:d,className:h,children:[n(Le,{"data-testid":"input",ref:y,disabled:c,value:m,onChange:t=>{u&&(S()?F(t):u(t))},type:a,readOnly:d,...s}),g&&!c&&!d&&!!t&&n(Ne,{onClick:()=>{f&&f(),y&&y.current&&y.current.focus()},children:n(Pe,{})})]})}));export{Ge as Input};
//# sourceMappingURL=index.js.map
