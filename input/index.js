import t,{jsxs as e,jsx as n}from"react/jsx-runtime";import r from"react";import o,{css as i}from"styled-components";var a;!function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let o=0;e>n&&(o=Math.floor((e-n)/8));const i=r+o;if(i<t.length){const e=Math.floor(i/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(a||(a={}));var l,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d={};Object.defineProperty(d,"__esModule",{value:!0});var f=t;const u=t=>f.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:f.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});u.displayName="CrossIcon",l=d.CrossIcon=u;var h=Array.isArray,g="object"==typeof c&&c&&c.Object===Object&&c,s="object"==typeof self&&self&&self.Object===Object&&self,p=g||s||Function("return this")(),y=p.Symbol,S=y,F=Object.prototype,m=F.hasOwnProperty,v=F.toString,B=S?S.toStringTag:void 0;var b=function(t){var e=m.call(t,B),n=t[B];try{t[B]=void 0;var r=!0}catch(t){}var o=v.call(t);return r&&(e?t[B]=n:delete t[B]),o},H=Object.prototype.toString;var D=b,_=function(t){return H.call(t)},w=y?y.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?D(t):_(t)};var x=z,C=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||C(t)&&"[object Symbol]"==x(t)},A=h,k=E,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var $=function(t,e){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!k(t))||(O.test(t)||!W.test(t)||null!=e&&t in Object(e))};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=z,R=j;var L,V=function(t){if(!R(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},I=p["__core-js_shared__"],N=(L=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var P=function(t){return!!N&&N in t},G=Function.prototype.toString;var X=V,M=P,Z=j,U=function(t){if(null!=t){try{return G.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,J=Function.prototype,K=Object.prototype,Q=J.toString,Y=K.hasOwnProperty,tt=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var et=function(t){return!(!Z(t)||M(t))&&(X(t)?tt:q).test(U(t))},nt=function(t,e){return null==t?void 0:t[e]};var rt=function(t,e){var n=nt(t,e);return et(n)?n:void 0},ot=rt(Object,"create"),it=ot;var at=function(){this.__data__=it?it(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ct=ot,dt=Object.prototype.hasOwnProperty;var ft=function(t){var e=this.__data__;if(ct){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return dt.call(e,t)?e[t]:void 0},ut=ot,ht=Object.prototype.hasOwnProperty;var gt=ot;var st=at,pt=lt,yt=ft,St=function(t){var e=this.__data__;return ut?void 0!==e[t]:ht.call(e,t)},Ft=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}mt.prototype.clear=st,mt.prototype.delete=pt,mt.prototype.get=yt,mt.prototype.has=St,mt.prototype.set=Ft;var vt=mt;var Bt=function(){this.__data__=[],this.size=0};var bt=function(t,e){return t===e||t!=t&&e!=e};var Ht=function(t,e){for(var n=t.length;n--;)if(bt(t[n][0],e))return n;return-1},Dt=Ht,_t=Array.prototype.splice;var wt=Ht;var zt=Ht;var xt=Ht;var Ct=Bt,Et=function(t){var e=this.__data__,n=Dt(e,t);return!(n<0)&&(n==e.length-1?e.pop():_t.call(e,n,1),--this.size,!0)},At=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},kt=function(t){return zt(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=xt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=Ct,Ot.prototype.delete=Et,Ot.prototype.get=At,Ot.prototype.has=kt,Ot.prototype.set=Wt;var $t=Ot,jt=rt(p,"Map"),Tt=vt,Rt=$t,Lt=jt;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var It=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Nt=It;var Pt=It;var Gt=It;var Xt=It;var Mt=function(){this.size=0,this.__data__={hash:new Tt,map:new(Lt||Rt),string:new Tt}},Zt=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},Ut=function(t){return Pt(this,t).get(t)},qt=function(t){return Gt(this,t).has(t)},Jt=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Mt,Kt.prototype.delete=Zt,Kt.prototype.get=Ut,Kt.prototype.has=qt,Kt.prototype.set=Jt;var Qt=Kt;function Yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Yt.Cache||Qt),n}Yt.Cache=Qt;var te=Yt;var ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/\\(\\)?/g,re=function(t){var e=te(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ee,(function(t,n,r,o){e.push(r?o.replace(ne,"$1"):n||t)})),e}));var oe=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},ie=h,ae=E,le=y?y.prototype:void 0,ce=le?le.toString:void 0;var de=function t(e){if("string"==typeof e)return e;if(ie(e))return oe(e,t)+"";if(ae(e))return ce?ce.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},fe=de;var ue=h,he=$,ge=re,se=function(t){return null==t?"":fe(t)};var pe=E;var ye=function(t,e){return ue(t)?t:he(t,e)?[t]:ge(se(t))},Se=function(t){if("string"==typeof t||pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Fe=function(t,e){for(var n=0,r=(e=ye(e,t)).length;null!=t&&n<r;)t=t[Se(e[n++])];return n&&n==r?t:void 0};var me=function(t,e,n){var r=null==t?void 0:Fe(t,e);return void 0===r?n:r};const ve=(t,e,n)=>e?me(n,e)||me(t,e):n||t,Be=(t,e)=>{const n=e||t.defaultValue;return me(t.collections,n)};var be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme"}(be||(be={}));const He={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},De=t=>e=>{const n=e.theme,r=Be(He,n[be.colorScheme]);return n.options&&n.options.color?ve(r,t,n.options.color):ve(r,t)},_e={Brand:{1:De("Brand.1"),2:De("Brand.2"),3:De("Brand.3"),4:De("Brand.4"),5:De("Brand.5"),6:De("Brand.6")},Primary:De("Primary"),PrimaryDark:De("PrimaryDark"),Secondary:De("Secondary"),Accent:{Light:{1:De("Accent.Light.1"),2:De("Accent.Light.2"),3:De("Accent.Light.3"),4:De("Accent.Light.4"),5:De("Accent.Light.5"),6:De("Accent.Light.6")},Dark:{1:De("Accent.Dark.1"),2:De("Accent.Dark.2"),3:De("Accent.Dark.3")}},Neutral:{1:De("Neutral.1"),2:De("Neutral.2"),3:De("Neutral.3"),4:De("Neutral.4"),5:De("Neutral.5"),6:De("Neutral.6"),7:De("Neutral.7"),8:De("Neutral.8")},Validation:{Green:{Text:De("Validation.Green.Text"),Icon:De("Validation.Green.Icon"),Border:De("Validation.Green.Border"),Background:De("Validation.Green.Background")},Orange:{Text:De("Validation.Orange.Text"),Icon:De("Validation.Orange.Icon"),Border:De("Validation.Orange.Border"),Background:De("Validation.Orange.Background"),Badge:De("Validation.Orange.Badge")},Red:{Text:De("Validation.Red.Text"),Icon:De("Validation.Red.Icon"),Border:De("Validation.Red.Border"),Background:De("Validation.Red.Background")}},Shadow:{Accent:De("Shadow.Accent"),Red:De("Shadow.Red")}},we={collections:{base:{InputBoxShadow:i`
        inset 0 0 6px 1px ${_e.Shadow.Accent}
    `,InputErrorBoxShadow:i`
        inset 0 0 6px 1px ${_e.Shadow.Red}
    `}},defaultValue:"base"},ze=t=>e=>{const n=e.theme,r=Be(we,n[be.designTokenScheme]);return n.options?.designToken?ve(r,t,n.options.designToken):ve(r,t)},xe=ze("InputBoxShadow"),Ce=ze("InputErrorBoxShadow"),Ee={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ae={collections:{base:{D1:{fontFamily:Ee.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ee.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ee.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ee.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ee.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ee.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ee.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ee.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ee.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ee.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ee.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ee.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ee.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ee.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ke=t=>e=>{const n=e.theme,r=Be(Ae,n[be.textStyleScheme]);return n.options&&n.options.textStyle?ve(r,t,n.options.textStyle):ve(r,t)},We={D1:{fontFamily:ke("D1.fontFamily"),fontSize:ke("D1.fontSize"),fontWeight:ke("D1.fontWeight"),lineHeight:ke("D1.lineHeight"),letterSpacing:ke("D1.letterSpacing")},D2:{fontFamily:ke("D2.fontFamily"),fontSize:ke("D2.fontSize"),fontWeight:ke("D2.fontWeight"),lineHeight:ke("D2.lineHeight"),letterSpacing:ke("D2.letterSpacing")},D3:{fontFamily:ke("D3.fontFamily"),fontSize:ke("D3.fontSize"),fontWeight:ke("D3.fontWeight"),lineHeight:ke("D3.lineHeight"),letterSpacing:ke("D3.letterSpacing")},D4:{fontFamily:ke("D4.fontFamily"),fontSize:ke("D4.fontSize"),fontWeight:ke("D4.fontWeight"),lineHeight:ke("D4.lineHeight"),letterSpacing:ke("D4.letterSpacing")},DBody:{fontFamily:ke("DBody.fontFamily"),fontSize:ke("DBody.fontSize"),fontWeight:ke("DBody.fontWeight"),lineHeight:ke("DBody.lineHeight"),letterSpacing:ke("DBody.letterSpacing")},H1:{fontFamily:ke("H1.fontFamily"),fontSize:ke("H1.fontSize"),fontWeight:ke("H1.fontWeight"),lineHeight:ke("H1.lineHeight"),letterSpacing:ke("H1.letterSpacing")},H2:{fontFamily:ke("H2.fontFamily"),fontSize:ke("H2.fontSize"),fontWeight:ke("H2.fontWeight"),lineHeight:ke("H2.lineHeight"),letterSpacing:ke("H2.letterSpacing")},H3:{fontFamily:ke("H3.fontFamily"),fontSize:ke("H3.fontSize"),fontWeight:ke("H3.fontWeight"),lineHeight:ke("H3.lineHeight"),letterSpacing:ke("H3.letterSpacing")},H4:{fontFamily:ke("H4.fontFamily"),fontSize:ke("H4.fontSize"),fontWeight:ke("H4.fontWeight"),lineHeight:ke("H4.lineHeight"),letterSpacing:ke("H4.letterSpacing")},H5:{fontFamily:ke("H5.fontFamily"),fontSize:ke("H5.fontSize"),fontWeight:ke("H5.fontWeight"),lineHeight:ke("H5.lineHeight"),letterSpacing:ke("H5.letterSpacing")},H6:{fontFamily:ke("H6.fontFamily"),fontSize:ke("H6.fontSize"),fontWeight:ke("H6.fontWeight"),lineHeight:ke("H6.lineHeight"),letterSpacing:ke("H6.letterSpacing")},Body:{fontFamily:ke("Body.fontFamily"),fontSize:ke("Body.fontSize"),fontWeight:ke("Body.fontWeight"),lineHeight:ke("Body.lineHeight"),letterSpacing:ke("Body.letterSpacing")},BodySmall:{fontFamily:ke("BodySmall.fontFamily"),fontSize:ke("BodySmall.fontSize"),fontWeight:ke("BodySmall.fontWeight"),lineHeight:ke("BodySmall.lineHeight"),letterSpacing:ke("BodySmall.letterSpacing")},XSmall:{fontFamily:ke("XSmall.fontFamily"),fontSize:ke("XSmall.fontSize"),fontWeight:ke("XSmall.fontWeight"),lineHeight:ke("XSmall.lineHeight"),letterSpacing:ke("XSmall.letterSpacing")}},Oe=t=>{switch(t){case 700:case"bold":return Ee.Bold;case 600:case"semibold":return Ee.Semibold;case 300:case"light":return Ee.Light;case 400:case"regular":return Ee.Regular;default:return""}},$e=(t,e)=>n=>{const r=We[t].fontFamily(n),o=We[t].fontWeight(n);return Object.values(Ee).includes(r)?i`
                font-family: ${Oe(e)||Oe(o)||r};
                font-weight: normal !important;
            `:i`
            font-family: ${r};
            font-weight: ${(je(e)||o)??"normal"};
        `},je=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Te=(t,e,n=!1)=>r=>{const o=We[t],a=o.fontSize(r);return i`
            ${$e(t,e)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Re=o.div`
    ${Te("Body","regular")}
    border: 1px solid ${_e.Neutral[5]};
    border-radius: 4px;
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background: ${_e.Neutral[8]};
    color: ${_e.Neutral[1]};

    :focus-within {
        outline: none;
        border: 1px solid ${_e.Accent.Light[1]};
        box-shadow: ${xe};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${_e.Neutral[3]};
    }

    ${t=>{if("number"===t.type)return i`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `}}

    ${t=>t.readOnly?i`
                border: none;
                padding: 0.2rem 0 0.3rem;
                background: transparent !important;
                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:t.disabled?i`
                background: ${_e.Neutral[6](t)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    outline: none;
                    border: 1px solid ${_e.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.error?i`
                border: 1px solid ${_e.Validation.Red.Border(t)};

                :focus-within {
                    border: 1px solid ${_e.Validation.Red.Border(t)};
                    box-shadow: ${Ce};
                }
            `:void 0}
`,Le=o.input`
    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;

    ${Te("Body","regular")}
    padding: 0.2rem 1rem 0.3rem; // Somehow the input text appears lower

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`,Ve=o.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    cursor: pointer;

    color: ${_e.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ie=o(l)`
    height: 1.25rem;
    width: 1.25rem;
`,Ne=r.forwardRef((({value:t,spacing:r,type:o,error:i,disabled:l,readOnly:c,onChange:d,onClear:f,allowClear:u=!1,...h},g)=>{const s=()=>"tel"===o&&r,p=t=>{const e=t.target,n=e.value,r=e.value.replace(/\s/g,"");e.value=r,d(t),e.value=n},y=t?(t=>t?s()?a.transformWithSpaces(t,r):t:"")(t):t,S=d?t=>{s()?p(t):d(t)}:void 0,F=u&&!l&&!c&&!i;return e(Re,{error:i,disabled:l,readOnly:c,className:h.className,children:[n(Le,{"data-testid":"input",ref:g,disabled:l,value:y,error:i,onChange:S,type:o,readOnly:c,...h}),F&&n(Ve,{onClick:()=>{f&&f()},children:n(Ie,{})})]})}));export{Ne as Input};
//# sourceMappingURL=index.js.map
