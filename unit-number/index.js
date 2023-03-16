import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import o,{useRef as i,useImperativeHandle as a,useState as l,useEffect as c}from"react";import d,{css as u}from"styled-components";var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=Array.isArray,s="object"==typeof h&&h&&h.Object===Object&&h,p="object"==typeof self&&self&&self.Object===Object&&self,f=s||p||Function("return this")(),y=f.Symbol,m=y,v=Object.prototype,S=v.hasOwnProperty,F=v.toString,b=m?m.toStringTag:void 0;var $=function(e){var t=S.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var o=F.call(e);return r&&(t?e[b]=n:delete e[b]),o},B=Object.prototype.toString;var w=$,H=function(e){return B.call(e)},x=y?y.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?w(e):H(e)};var C=D,_=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==C(e)},z=g,E=k,O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var N=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!E(e))||(A.test(e)||!O.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=D,L=W;var V,R=function(e){if(!L(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=f["__core-js_shared__"],I=(V=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var P=function(e){return!!I&&I in e},G=Function.prototype.toString;var M=R,X=P,Z=W,U=function(e){if(null!=e){try{return G.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,q=Function.prototype,J=Object.prototype,Q=q.toString,Y=J.hasOwnProperty,ee=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var te=function(e){return!(!Z(e)||X(e))&&(M(e)?ee:K).test(U(e))},ne=function(e,t){return null==e?void 0:e[t]};var re=function(e,t){var n=ne(e,t);return te(n)?n:void 0},oe=re(Object,"create"),ie=oe;var ae=function(){this.__data__=ie?ie(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=oe,de=Object.prototype.hasOwnProperty;var ue=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(t,e)?t[e]:void 0},he=oe,ge=Object.prototype.hasOwnProperty;var se=oe;var pe=ae,fe=le,ye=ue,me=function(e){var t=this.__data__;return he?void 0!==t[e]:ge.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function Se(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=pe,Se.prototype.delete=fe,Se.prototype.get=ye,Se.prototype.has=me,Se.prototype.set=ve;var Fe=Se;var be=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var Be=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},we=Be,He=Array.prototype.splice;var xe=Be;var De=Be;var Ce=Be;var _e=be,ke=function(e){var t=this.__data__,n=we(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},Ee=function(e){return De(this.__data__,e)>-1},Oe=function(e,t){var n=this.__data__,r=Ce(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ae.prototype.clear=_e,Ae.prototype.delete=ke,Ae.prototype.get=ze,Ae.prototype.has=Ee,Ae.prototype.set=Oe;var Ne=Ae,We=re(f,"Map"),je=Fe,Le=Ne,Ve=We;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Te;var Pe=Te;var Ge=Te;var Me=Te;var Xe=function(){this.size=0,this.__data__={hash:new je,map:new(Ve||Le),string:new je}},Ze=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Pe(this,e).get(e)},Ke=function(e){return Ge(this,e).has(e)},qe=function(e,t){var n=Me(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Xe,Je.prototype.delete=Ze,Je.prototype.get=Ue,Je.prototype.has=Ke,Je.prototype.set=qe;var Qe=Je;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var et=Ye;var tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nt=/\\(\\)?/g,rt=function(e){var t=et(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(tt,(function(e,n,r,o){t.push(r?o.replace(nt,"$1"):n||e)})),t}));var ot=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},it=g,at=k,lt=y?y.prototype:void 0,ct=lt?lt.toString:void 0;var dt=function e(t){if("string"==typeof t)return t;if(it(t))return ot(t,e)+"";if(at(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ut=dt;var ht=g,gt=N,st=rt,pt=function(e){return null==e?"":ut(e)};var ft=k;var yt=function(e,t){return ht(e)?e:gt(e,t)?[e]:st(pt(e))},mt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vt=function(e,t){for(var n=0,r=(t=yt(t,e)).length;null!=e&&n<r;)e=e[mt(t[n++])];return n&&n==r?e:void 0};var St=function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r};const Ft=(e,t,n)=>t?St(n,t)||St(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return St(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}($t||($t={}));const Bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},wt=e=>t=>{const n=t.theme,r=bt(Bt,n[$t.colorScheme]);return n.options&&n.options.color?Ft(r,e,n.options.color):Ft(r,e)},Ht={Brand:{1:wt("Brand.1"),2:wt("Brand.2"),3:wt("Brand.3"),4:wt("Brand.4"),5:wt("Brand.5"),6:wt("Brand.6")},Primary:wt("Primary"),PrimaryDark:wt("PrimaryDark"),Secondary:wt("Secondary"),Accent:{Light:{1:wt("Accent.Light.1"),2:wt("Accent.Light.2"),3:wt("Accent.Light.3"),4:wt("Accent.Light.4"),5:wt("Accent.Light.5"),6:wt("Accent.Light.6")},Dark:{1:wt("Accent.Dark.1"),2:wt("Accent.Dark.2"),3:wt("Accent.Dark.3")}},Neutral:{1:wt("Neutral.1"),2:wt("Neutral.2"),3:wt("Neutral.3"),4:wt("Neutral.4"),5:wt("Neutral.5"),6:wt("Neutral.6"),7:wt("Neutral.7"),8:wt("Neutral.8")},Validation:{Green:{Text:wt("Validation.Green.Text"),Icon:wt("Validation.Green.Icon"),Border:wt("Validation.Green.Border"),Background:wt("Validation.Green.Background")},Orange:{Text:wt("Validation.Orange.Text"),Icon:wt("Validation.Orange.Icon"),Border:wt("Validation.Orange.Border"),Background:wt("Validation.Orange.Background"),Badge:wt("Validation.Orange.Badge")},Red:{Text:wt("Validation.Red.Text"),Icon:wt("Validation.Red.Icon"),Border:wt("Validation.Red.Border"),Background:wt("Validation.Red.Background")}},Shadow:{Accent:wt("Shadow.Accent"),Red:wt("Shadow.Red")}},xt={collections:{base:{InputBoxShadow:u`
        inset 0 0 6px 1px ${Ht.Shadow.Accent}
    `,InputErrorBoxShadow:u`
        inset 0 0 6px 1px ${Ht.Shadow.Red}
    `}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=bt(xt,n[$t.designTokenScheme]);return n.options?.designToken?Ft(r,e,n.options.designToken):Ft(r,e)},Ct=Dt("InputBoxShadow"),_t=Dt("InputErrorBoxShadow"),kt=d.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Ct};
    }

    ${e=>e.$readOnly?u`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?u`
                background: ${Ht.Neutral[6](e)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?u`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${_t};
                }
            `:void 0}
`;var zt;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let o=0;t>n&&(o=Math.floor((t-n)/8));const i=r+o;if(i<e.length){const t=Math.floor(i/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(zt||(zt={}));var Et,Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});var At=e;const Nt=e=>At.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:At.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Nt.displayName="CrossIcon",Et=Ot.CrossIcon=Nt;const Wt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},jt={collections:{base:{D1:{fontFamily:Wt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Lt=e=>t=>{const n=t.theme,r=bt(jt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?Ft(r,e,n.options.textStyle):Ft(r,e)},Vt={D1:{fontFamily:Lt("D1.fontFamily"),fontSize:Lt("D1.fontSize"),fontWeight:Lt("D1.fontWeight"),lineHeight:Lt("D1.lineHeight"),letterSpacing:Lt("D1.letterSpacing")},D2:{fontFamily:Lt("D2.fontFamily"),fontSize:Lt("D2.fontSize"),fontWeight:Lt("D2.fontWeight"),lineHeight:Lt("D2.lineHeight"),letterSpacing:Lt("D2.letterSpacing")},D3:{fontFamily:Lt("D3.fontFamily"),fontSize:Lt("D3.fontSize"),fontWeight:Lt("D3.fontWeight"),lineHeight:Lt("D3.lineHeight"),letterSpacing:Lt("D3.letterSpacing")},D4:{fontFamily:Lt("D4.fontFamily"),fontSize:Lt("D4.fontSize"),fontWeight:Lt("D4.fontWeight"),lineHeight:Lt("D4.lineHeight"),letterSpacing:Lt("D4.letterSpacing")},DBody:{fontFamily:Lt("DBody.fontFamily"),fontSize:Lt("DBody.fontSize"),fontWeight:Lt("DBody.fontWeight"),lineHeight:Lt("DBody.lineHeight"),letterSpacing:Lt("DBody.letterSpacing")},H1:{fontFamily:Lt("H1.fontFamily"),fontSize:Lt("H1.fontSize"),fontWeight:Lt("H1.fontWeight"),lineHeight:Lt("H1.lineHeight"),letterSpacing:Lt("H1.letterSpacing")},H2:{fontFamily:Lt("H2.fontFamily"),fontSize:Lt("H2.fontSize"),fontWeight:Lt("H2.fontWeight"),lineHeight:Lt("H2.lineHeight"),letterSpacing:Lt("H2.letterSpacing")},H3:{fontFamily:Lt("H3.fontFamily"),fontSize:Lt("H3.fontSize"),fontWeight:Lt("H3.fontWeight"),lineHeight:Lt("H3.lineHeight"),letterSpacing:Lt("H3.letterSpacing")},H4:{fontFamily:Lt("H4.fontFamily"),fontSize:Lt("H4.fontSize"),fontWeight:Lt("H4.fontWeight"),lineHeight:Lt("H4.lineHeight"),letterSpacing:Lt("H4.letterSpacing")},H5:{fontFamily:Lt("H5.fontFamily"),fontSize:Lt("H5.fontSize"),fontWeight:Lt("H5.fontWeight"),lineHeight:Lt("H5.lineHeight"),letterSpacing:Lt("H5.letterSpacing")},H6:{fontFamily:Lt("H6.fontFamily"),fontSize:Lt("H6.fontSize"),fontWeight:Lt("H6.fontWeight"),lineHeight:Lt("H6.lineHeight"),letterSpacing:Lt("H6.letterSpacing")},Body:{fontFamily:Lt("Body.fontFamily"),fontSize:Lt("Body.fontSize"),fontWeight:Lt("Body.fontWeight"),lineHeight:Lt("Body.lineHeight"),letterSpacing:Lt("Body.letterSpacing")},BodySmall:{fontFamily:Lt("BodySmall.fontFamily"),fontSize:Lt("BodySmall.fontSize"),fontWeight:Lt("BodySmall.fontWeight"),lineHeight:Lt("BodySmall.lineHeight"),letterSpacing:Lt("BodySmall.letterSpacing")},XSmall:{fontFamily:Lt("XSmall.fontFamily"),fontSize:Lt("XSmall.fontSize"),fontWeight:Lt("XSmall.fontWeight"),lineHeight:Lt("XSmall.lineHeight"),letterSpacing:Lt("XSmall.letterSpacing")}},Rt=e=>{switch(e){case 700:case"bold":return Wt.Bold;case 600:case"semibold":return Wt.Semibold;case 300:case"light":return Wt.Light;case 400:case"regular":return Wt.Regular;default:return""}},Tt=(e,t)=>n=>{const r=Vt[e].fontFamily(n),o=Vt[e].fontWeight(n);return Object.values(Wt).includes(r)?u`
                font-family: ${Rt(t)||Rt(o)||r};
                font-weight: normal !important;
            `:u`
            font-family: ${r};
            font-weight: ${(It(t)||o)??"normal"};
        `},It=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=(e,t,n=!1)=>r=>{const o=Vt[e],i=o.fontSize(r);return u`
            ${Tt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${u`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Gt=(e=!1,t=!1)=>t?u`
            display: block;
        `:e?u`
            display: inline;
        `:u`
            display: block;
        `,Mt=d.input`
    ${Pt("Body","regular")}
    color: ${Ht.Neutral[1]};

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
        color: ${Ht.Neutral[3]};
    }

    ${e=>"number"===e.type?u`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?u`
                cursor: not-allowed;
            `:void 0}
`,Xt=d.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ht.Neutral[3]};
    background-color: transparent;
    border: none;
`,Zt=d(Et)`
    height: 1.25rem;
    width: 1.25rem;
`,Ut=o.forwardRef((({value:e,spacing:r,type:o,error:l,disabled:c,readOnly:d,onChange:u,onClear:h,allowClear:g=!1,className:s,...p},f)=>{const y=i();a(f,(()=>y.current),[]);const m=()=>"tel"===o&&r,v=e=>{const t=e.target,n=t.value,r=t.value.replace(/\s/g,"");t.value=r,u(e),t.value=n},S=e?(e=>e?m()?zt.transformWithSpaces(e,r):e:"")(e):e;return t(kt,{disabled:c,$error:l,$readOnly:d,className:s,children:[n(Mt,{"data-testid":"input",ref:y,disabled:c,value:S,onChange:e=>{u&&(m()?v(e):u(e))},type:o,readOnly:d,...p}),g&&!c&&!d&&!!e&&n(Xt,{onClick:()=>{h&&h(),y&&y.current&&y.current.focus()},children:n(Zt,{})})]})}));var Kt,qt={};Object.defineProperty(qt,"__esModule",{value:!0});var Jt=e;const Qt=e=>Jt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Yt;Qt.displayName="ExternalIcon",Kt=qt.ExternalIcon=Qt,function(e){e.D1=d.h1`
        ${e=>u`
                ${Pt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D2=d.h1`
        ${e=>u`
                ${Pt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D3=d.h1`
        ${e=>u`
                ${Pt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.D4=d.h1`
        ${e=>u`
                ${Pt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.DBody=d.h1`
        ${e=>u`
                ${Pt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H1=d.h1`
        ${e=>u`
                ${Pt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H2=d.h2`
        ${e=>u`
                ${Pt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H3=d.h3`
        ${e=>u`
                ${Pt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H4=d.h4`
        ${e=>u`
                ${Pt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H5=d.h5`
        ${e=>u`
                ${Pt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.H6=d.h6`
        ${e=>u`
                ${Pt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Body=d.p`
        ${e=>u`
                ${Pt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=d.p`
        ${e=>u`
                ${Pt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=d.span`
        ${e=>u`
                ${Pt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${Gt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>nn({...e,textStyle:"Body"}),Small:e=>nn({...e,textStyle:"BodySmall"})}}(Yt||(Yt={}));const en=d.a`
    ${e=>u`
            ${Pt(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,tn=d(Kt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,nn=({external:e=!1,children:r,...o})=>t(en,{...o,children:[r,e&&n(tn,{})]});var rn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rn||(rn={})),d.div`
    display: flex;
    position: relative;
    border: 1px solid ${Ht.Neutral[5]};
    border-radius: 4px;
    background: ${Ht.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Accent.Light[1]};
        box-shadow: ${Ct};
    }

    ${e=>e.$readOnly?u`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?u`
                background: ${Ht.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ht.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?u`
                border: 1px solid ${Ht.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ht.Validation.Red.Border(e)};
                    box-shadow: ${_t};
                }
            `:void 0}
`,d(Ut)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0 0 1px 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`;const on=d.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Pt("Body","regular")}
    color: ${Ht.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Ht.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return u`
                color: ${Ht.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Ht.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?u`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:u`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`,an=d(on)`
    margin-right: 0.25rem;
`,ln=d(Ut)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,cn=d(ln)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,dn=d(Yt.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return u`
                color: ${Ht.Neutral[3]};
            `}}
`,un=d.div`
    display: flex;
`,hn=d(Yt.Body)`
    ${e=>{if(e.$inactive)return u`
                color: ${Ht.Neutral[3]};
            `}}
`,gn=({disabled:e,error:o,value:a,onChange:d,onBlur:u,onChangeRaw:h,onBlurRaw:g,readOnly:s,placeholder:p="00-8888",...f})=>{const[y,m]=l(""),[v,S]=l(""),[F,b]=l("none"),$=i(null),B=i(null),w=i(null),H=i(y),x=i(v),D=i(F),C=e=>{H.current=e,m(e)},_=e=>{x.current=e,S(e)},k=e=>{D.current=e,b(e)};c((()=>(document.addEventListener("mousedown",z),$.current&&$.current.addEventListener("keydown",E),()=>{document.removeEventListener("mousedown",z),$.current&&$.current.removeEventListener("keydown",E)})),[F]),c((()=>{"floor"===F&&3===y.length&&w.current&&w.current.focus()}),[y]),c((()=>{L(a)}),[a]);const z=t=>{e||s||$&&$.current.contains(t.target)||"none"!==D.current&&(k("none"),R())},E=e=>{"unit"===e.target.name&&"Tab"===e.code&&(k("none"),R())},O=e=>{k(e.target.name),e.target.select()},A=e=>{const t=e.target.name,n=e.target.value;"floor"===t?C(j(n)):_(j(n))},N=e=>{const t=e.target.name,n=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(C(n),V(n,t)):(_(n),V(n,t))},W=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===F&&0===v.length&&B.current.focus()},j=e=>/^[0-9]$/.test(e)?zt.padValue(e,!0):e.toLocaleUpperCase(),L=e=>{if(e!==sn)if(void 0===e||0===e.length)C(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];C("floor"===F?e:j(e)),_("unit"===F?n:j(n))}}},V=(e,t)=>{if(!d&&!h)return;const n={floor:H.current,unit:x.current};if(n[t]=e,d){const e=T(n);d(e)}h&&h([n.floor,n.unit])},R=()=>{if(!u&&!g)return;const e={floor:j(H.current),unit:j(x.current)};if(u){const t=T(e);u(t)}g&&g([e.floor,e.unit])},T=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":sn},I=e=>e.split("-");return t(kt,{ref:$,onClick:()=>{"none"===F&&B.current&&B.current.focus()},disabled:e,$error:o,$readOnly:s,"data-testid":f["data-testid"],children:[n(an,{"data-testid":"addon",disabled:e,$readOnly:s,children:"#"}),s&&a?(()=>{const e=a.split("-");return t(un,{children:[n(hn,{children:e[0]}),n(dn,{children:"-"}),n(hn,{children:e[1]})]})})():t(r,{children:[n(ln,{name:"floor",maxLength:3,value:y,ref:B,onFocus:O,onBlur:A,onChange:N,disabled:e,readOnly:s,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==F||s?I(p)[0]:""}),n(dn,{$inactive:0===y.length,children:"-"}),n(cn,{name:"unit",maxLength:5,value:v,ref:w,onFocus:O,onBlur:A,onChange:N,onKeyDown:W,disabled:e,readOnly:s,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==F||s?I(p)[1]:""})]})]})},sn="Invalid unit number";export{gn as UnitNumberInput};
//# sourceMappingURL=index.js.map
