import e,{jsxs as t,jsx as r,Fragment as n}from"react/jsx-runtime";import*as i from"react";import o,{useRef as a,useImperativeHandle as s,useEffect as l,useLayoutEffect as c,useState as u,forwardRef as d,useCallback as h,useContext as p,useMemo as f}from"react";import g,{css as m,keyframes as y}from"styled-components";import{unstable_batchedUpdates as b}from"react-dom";var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w=Array.isArray,$="object"==typeof v&&v&&v.Object===Object&&v,_=$,x="object"==typeof self&&self&&self.Object===Object&&self,S=_||x||Function("return this")(),C=S.Symbol,k=C,F=Object.prototype,O=F.hasOwnProperty,j=F.toString,B=k?k.toStringTag:void 0;var A=function(e){var t=O.call(e,B),r=e[B];try{e[B]=void 0;var n=!0}catch(e){}var i=j.call(e);return n&&(t?e[B]=r:delete e[B]),i},P=Object.prototype.toString;var z=A,I=function(e){return P.call(e)},N=C?C.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":N&&N in Object(e)?z(e):I(e)};var E=function(e){return null!=e&&"object"==typeof e},H=D,M=E;var V=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==H(e)},L=w,T=V,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var q=function(e,t){if(L(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(W.test(e)||!R.test(e)||null!=t&&e in Object(t))};var U=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q=D,Z=U;var G,X=function(e){if(!Z(e))return!1;var t=Q(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=S["__core-js_shared__"],Y=(G=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var J=function(e){return!!Y&&Y in e},ee=Function.prototype.toString;var te=function(e){if(null!=e){try{return ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},re=X,ne=J,ie=U,oe=te,ae=/^\[object .+?Constructor\]$/,se=Function.prototype,le=Object.prototype,ce=se.toString,ue=le.hasOwnProperty,de=RegExp("^"+ce.call(ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var he=function(e){return!(!ie(e)||ne(e))&&(re(e)?de:ae).test(oe(e))},pe=function(e,t){return null==e?void 0:e[t]};var fe=function(e,t){var r=pe(e,t);return he(r)?r:void 0},ge=fe(Object,"create"),me=ge;var ye=function(){this.__data__=me?me(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ve=ge,we=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(ve){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return we.call(t,e)?t[e]:void 0},_e=ge,xe=Object.prototype.hasOwnProperty;var Se=ge;var Ce=ye,ke=be,Fe=$e,Oe=function(e){var t=this.__data__;return _e?void 0!==t[e]:xe.call(t,e)},je=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Se&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Be.prototype.clear=Ce,Be.prototype.delete=ke,Be.prototype.get=Fe,Be.prototype.has=Oe,Be.prototype.set=je;var Ae=Be;var Pe=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t},Ie=ze;var Ne=function(e,t){for(var r=e.length;r--;)if(Ie(e[r][0],t))return r;return-1},De=Ne,Ee=Array.prototype.splice;var He=Ne;var Me=Ne;var Ve=Ne;var Le=Pe,Te=function(e){var t=this.__data__,r=De(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ee.call(t,r,1),--this.size,!0)},Re=function(e){var t=this.__data__,r=He(t,e);return r<0?void 0:t[r][1]},We=function(e){return Me(this.__data__,e)>-1},qe=function(e,t){var r=this.__data__,n=Ve(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ue.prototype.clear=Le,Ue.prototype.delete=Te,Ue.prototype.get=Re,Ue.prototype.has=We,Ue.prototype.set=qe;var Qe=Ue,Ze=fe(S,"Map"),Ge=Ae,Xe=Qe,Ke=Ze;var Ye=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var r=e.__data__;return Ye(t)?r["string"==typeof t?"string":"hash"]:r.map},et=Je;var tt=Je;var rt=Je;var nt=Je;var it=function(){this.size=0,this.__data__={hash:new Ge,map:new(Ke||Xe),string:new Ge}},ot=function(e){var t=et(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return tt(this,e).get(e)},st=function(e){return rt(this,e).has(e)},lt=function(e,t){var r=nt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ct(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ct.prototype.clear=it,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct,dt=ut;function ht(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ht.Cache||dt),r}ht.Cache=dt;var pt=ht;var ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gt=/\\(\\)?/g,mt=function(e){var t=pt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ft,(function(e,r,n,i){t.push(n?i.replace(gt,"$1"):r||e)})),t}));var yt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},bt=w,vt=V,wt=C?C.prototype:void 0,$t=wt?wt.toString:void 0;var _t=function e(t){if("string"==typeof t)return t;if(bt(t))return yt(t,e)+"";if(vt(t))return $t?$t.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},xt=_t;var St=w,Ct=q,kt=mt,Ft=function(e){return null==e?"":xt(e)};var Ot=function(e,t){return St(e)?e:Ct(e,t)?[e]:kt(Ft(e))},jt=V;var Bt=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},At=Ot,Pt=Bt;var zt=function(e,t){for(var r=0,n=(t=At(t,e)).length;null!=e&&r<n;)e=e[Pt(t[r++])];return r&&r==n?e:void 0},It=zt;var Nt=function(e,t,r){var n=null==e?void 0:It(e,t);return void 0===n?r:n};const Dt=(e,t,r)=>t?Nt(r,t)||Nt(e,t):r||e,Et=(e,t)=>{const r=t||e.defaultValue;return Nt(e.collections,r)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme"}(Ht||(Ht={}));const Mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)"}}},defaultValue:"base"},Vt=e=>t=>{const r=t.theme,n=Et(Mt,r[Ht.colorScheme]);return r.options&&r.options.color?Dt(n,e,r.options.color):Dt(n,e)},Lt={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red")}},Tt={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${Lt.Shadow.Red}
    `}},defaultValue:"base"},Rt=e=>t=>{const r=t.theme,n=Et(Tt,r[Ht.designTokenScheme]);return r.options?.designToken?Dt(n,e,r.options.designToken):Dt(n,e)},Wt=Rt("InputBoxShadow"),qt=Rt("InputErrorBoxShadow"),Ut=g.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Lt.Neutral[5]};
    border-radius: 4px;
    background: ${Lt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Lt.Accent.Light[1]};
        box-shadow: ${Wt};
    }

    ${e=>e.$readOnly?m`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?m`
                background: ${Lt.Neutral[6](e)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Lt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${Lt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Lt.Validation.Red.Border(e)};
                    box-shadow: ${qt};
                }
            `:void 0}
`;var Qt;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n)=>{let i=0;t>r&&(i=Math.floor((t-r)/8));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Qt||(Qt={}));var Zt,Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});var Xt=e;const Kt=e=>Xt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Xt.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});Kt.displayName="CrossIcon",Zt=Gt.CrossIcon=Kt;const Yt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Jt={collections:{base:{D1:{fontFamily:Yt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},er=e=>t=>{const r=t.theme,n=Et(Jt,r[Ht.textStyleScheme]);return r.options&&r.options.textStyle?Dt(n,e,r.options.textStyle):Dt(n,e)},tr={D1:{fontFamily:er("D1.fontFamily"),fontSize:er("D1.fontSize"),fontWeight:er("D1.fontWeight"),lineHeight:er("D1.lineHeight"),letterSpacing:er("D1.letterSpacing")},D2:{fontFamily:er("D2.fontFamily"),fontSize:er("D2.fontSize"),fontWeight:er("D2.fontWeight"),lineHeight:er("D2.lineHeight"),letterSpacing:er("D2.letterSpacing")},D3:{fontFamily:er("D3.fontFamily"),fontSize:er("D3.fontSize"),fontWeight:er("D3.fontWeight"),lineHeight:er("D3.lineHeight"),letterSpacing:er("D3.letterSpacing")},D4:{fontFamily:er("D4.fontFamily"),fontSize:er("D4.fontSize"),fontWeight:er("D4.fontWeight"),lineHeight:er("D4.lineHeight"),letterSpacing:er("D4.letterSpacing")},DBody:{fontFamily:er("DBody.fontFamily"),fontSize:er("DBody.fontSize"),fontWeight:er("DBody.fontWeight"),lineHeight:er("DBody.lineHeight"),letterSpacing:er("DBody.letterSpacing")},H1:{fontFamily:er("H1.fontFamily"),fontSize:er("H1.fontSize"),fontWeight:er("H1.fontWeight"),lineHeight:er("H1.lineHeight"),letterSpacing:er("H1.letterSpacing")},H2:{fontFamily:er("H2.fontFamily"),fontSize:er("H2.fontSize"),fontWeight:er("H2.fontWeight"),lineHeight:er("H2.lineHeight"),letterSpacing:er("H2.letterSpacing")},H3:{fontFamily:er("H3.fontFamily"),fontSize:er("H3.fontSize"),fontWeight:er("H3.fontWeight"),lineHeight:er("H3.lineHeight"),letterSpacing:er("H3.letterSpacing")},H4:{fontFamily:er("H4.fontFamily"),fontSize:er("H4.fontSize"),fontWeight:er("H4.fontWeight"),lineHeight:er("H4.lineHeight"),letterSpacing:er("H4.letterSpacing")},H5:{fontFamily:er("H5.fontFamily"),fontSize:er("H5.fontSize"),fontWeight:er("H5.fontWeight"),lineHeight:er("H5.lineHeight"),letterSpacing:er("H5.letterSpacing")},H6:{fontFamily:er("H6.fontFamily"),fontSize:er("H6.fontSize"),fontWeight:er("H6.fontWeight"),lineHeight:er("H6.lineHeight"),letterSpacing:er("H6.letterSpacing")},Body:{fontFamily:er("Body.fontFamily"),fontSize:er("Body.fontSize"),fontWeight:er("Body.fontWeight"),lineHeight:er("Body.lineHeight"),letterSpacing:er("Body.letterSpacing")},BodySmall:{fontFamily:er("BodySmall.fontFamily"),fontSize:er("BodySmall.fontSize"),fontWeight:er("BodySmall.fontWeight"),lineHeight:er("BodySmall.lineHeight"),letterSpacing:er("BodySmall.letterSpacing")},XSmall:{fontFamily:er("XSmall.fontFamily"),fontSize:er("XSmall.fontSize"),fontWeight:er("XSmall.fontWeight"),lineHeight:er("XSmall.lineHeight"),letterSpacing:er("XSmall.letterSpacing")}},rr=e=>{switch(e){case 700:case"bold":return Yt.Bold;case 600:case"semibold":return Yt.Semibold;case 300:case"light":return Yt.Light;case 400:case"regular":return Yt.Regular;default:return""}},nr=(e,t)=>r=>{const n=tr[e].fontFamily(r),i=tr[e].fontWeight(r);return Object.values(Yt).includes(n)?m`
                font-family: ${rr(t)||rr(i)||n};
                font-weight: normal !important;
            `:m`
            font-family: ${n};
            font-weight: ${(ir(t)||i)??"normal"};
        `},ir=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},or=(e,t,r=!1)=>n=>{const i=tr[e],o=i.fontSize(n);return m`
            ${nr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},ar=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `,sr=g.input`
    ${or("Body","regular")}
    color: ${Lt.Neutral[1]};

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
        color: ${Lt.Neutral[3]};
    }

    ${e=>"number"===e.type?m`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?m`
                cursor: not-allowed;
            `:void 0}
`,lr=g.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Lt.Neutral[3]};
    background-color: transparent;
    border: none;
`,cr=g(Zt)`
    height: 1.25rem;
    width: 1.25rem;
`,ur=o.forwardRef((({value:e,spacing:n,type:i,error:o,disabled:l,readOnly:c,onChange:u,onClear:d,allowClear:h=!1,className:p,...f},g)=>{const m=a();s(g,(()=>m.current),[]);const y=()=>"tel"===i&&n,b=e=>{const t=e.target,r=t.value,n=t.value.replace(/\s/g,"");t.value=n,u(e),t.value=r},v=e?(e=>e?y()?Qt.transformWithSpaces(e,n):e:"")(e):e;return t(Ut,{disabled:l,$error:o,$readOnly:c,className:p,children:[r(sr,{"data-testid":"input",ref:m,disabled:l,value:v,onChange:e=>{u&&(y()?b(e):u(e))},type:i,readOnly:c,...f}),h&&!l&&!c&&!!e&&r(lr,{onClick:()=>{d&&d(),m&&m.current&&m.current.focus()},children:r(cr,{})})]})}));var dr,hr={};Object.defineProperty(hr,"__esModule",{value:!0});var pr=e;const fr=e=>pr.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:pr.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var gr;fr.displayName="ExternalIcon",dr=hr.ExternalIcon=fr,function(e){e.D1=g.h1`
        ${e=>m`
                ${or("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.D2=g.h1`
        ${e=>m`
                ${or("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.D3=g.h1`
        ${e=>m`
                ${or("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.D4=g.h1`
        ${e=>m`
                ${or("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.DBody=g.h1`
        ${e=>m`
                ${or("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H1=g.h1`
        ${e=>m`
                ${or("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H2=g.h2`
        ${e=>m`
                ${or("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H3=g.h3`
        ${e=>m`
                ${or("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H4=g.h4`
        ${e=>m`
                ${or("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H5=g.h5`
        ${e=>m`
                ${or("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.H6=g.h6`
        ${e=>m`
                ${or("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.Body=g.p`
        ${e=>m`
                ${or("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=g.p`
        ${e=>m`
                ${or("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.XSmall=g.span`
        ${e=>m`
                ${or("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${ar(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>br({...e,textStyle:"Body"}),Small:e=>br({...e,textStyle:"BodySmall"})}}(gr||(gr={}));const mr=g.a`
    ${e=>m`
            ${or(e.textStyle,e.weight)}
            color: ${Lt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Lt.Secondary};

                svg {
                    color: ${Lt.Secondary};
                }
            }
        `}
`,yr=g(dr)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,br=({external:e=!1,children:n,...i})=>t(mr,{...i,children:[n,e&&r(yr,{})]});var vr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(vr||(vr={}));const wr=g.div`
    display: flex;
    position: relative;
    border: 1px solid ${Lt.Neutral[5]};
    border-radius: 4px;
    background: ${Lt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Lt.Accent.Light[1]};
        box-shadow: ${Wt};
    }

    ${e=>e.$readOnly?m`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?m`
                background: ${Lt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Lt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${Lt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Lt.Validation.Red.Border(e)};
                    box-shadow: ${qt};
                }
            `:void 0}
`,$r=g(ur)`
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
`,_r=g.div`
    position: relative;
    display: flex;
    align-items: center;

    ${or("Body","regular")}
    color: ${Lt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Lt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return m`
                color: ${Lt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Lt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?m`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:m`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var xr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Sr=Qe;var Cr=Qe,kr=Ze,Fr=ut;var Or=Qe,jr=function(){this.__data__=new Sr,this.size=0},Br=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Ar=function(e){return this.__data__.get(e)},Pr=function(e){return this.__data__.has(e)},zr=function(e,t){var r=this.__data__;if(r instanceof Cr){var n=r.__data__;if(!kr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Fr(n)}return r.set(e,t),this.size=r.size,this};function Ir(e){var t=this.__data__=new Or(e);this.size=t.size}Ir.prototype.clear=jr,Ir.prototype.delete=Br,Ir.prototype.get=Ar,Ir.prototype.has=Pr,Ir.prototype.set=zr;var Nr=Ir;var Dr=ut,Er=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Hr=function(e){return this.__data__.has(e)};function Mr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Dr;++t<r;)this.add(e[t])}Mr.prototype.add=Mr.prototype.push=Er,Mr.prototype.has=Hr;var Vr=Mr,Lr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Tr=function(e,t){return e.has(t)};var Rr=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new Vr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=a?n(g,f,d,t,e,o):n(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Lr(t,(function(e,t){if(!Tr(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Wr=S.Uint8Array,qr=ze,Ur=Rr,Qr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Zr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Gr=C?C.prototype:void 0,Xr=Gr?Gr.valueOf:void 0;var Kr=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Wr(e),new Wr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return qr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Qr;case"[object Set]":var l=1&n;if(s||(s=Zr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=Ur(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Xr)return Xr.call(e)==Xr.call(t)}return!1};var Yr=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Jr=w;var en=function(e,t,r){var n=t(e);return Jr(e)?n:Yr(n,r(e))};var tn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},rn=function(){return[]},nn=Object.prototype.propertyIsEnumerable,on=Object.getOwnPropertySymbols,an=on?function(e){return null==e?[]:(e=Object(e),tn(on(e),(function(t){return nn.call(e,t)})))}:rn;var sn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ln=D,cn=E;var un=function(e){return cn(e)&&"[object Arguments]"==ln(e)},dn=E,hn=Object.prototype,pn=hn.hasOwnProperty,fn=hn.propertyIsEnumerable,gn=un(function(){return arguments}())?un:function(e){return dn(e)&&pn.call(e,"callee")&&!fn.call(e,"callee")},mn={exports:{}};var yn=function(){return!1};!function(e,t){var r=S,n=yn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(mn,mn.exports);var bn=/^(?:0|[1-9]\d*)$/;var vn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&bn.test(e))&&e>-1&&e%1==0&&e<t};var wn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},$n=D,_n=wn,xn=E,Sn={};Sn["[object Float32Array]"]=Sn["[object Float64Array]"]=Sn["[object Int8Array]"]=Sn["[object Int16Array]"]=Sn["[object Int32Array]"]=Sn["[object Uint8Array]"]=Sn["[object Uint8ClampedArray]"]=Sn["[object Uint16Array]"]=Sn["[object Uint32Array]"]=!0,Sn["[object Arguments]"]=Sn["[object Array]"]=Sn["[object ArrayBuffer]"]=Sn["[object Boolean]"]=Sn["[object DataView]"]=Sn["[object Date]"]=Sn["[object Error]"]=Sn["[object Function]"]=Sn["[object Map]"]=Sn["[object Number]"]=Sn["[object Object]"]=Sn["[object RegExp]"]=Sn["[object Set]"]=Sn["[object String]"]=Sn["[object WeakMap]"]=!1;var Cn=function(e){return xn(e)&&_n(e.length)&&!!Sn[$n(e)]};var kn=function(e){return function(t){return e(t)}},Fn={exports:{}};!function(e,t){var r=$,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Fn,Fn.exports);var On=Cn,jn=kn,Bn=Fn.exports,An=Bn&&Bn.isTypedArray,Pn=An?jn(An):On,zn=sn,In=gn,Nn=w,Dn=mn.exports,En=vn,Hn=Pn,Mn=Object.prototype.hasOwnProperty;var Vn=function(e,t){var r=Nn(e),n=!r&&In(e),i=!r&&!n&&Dn(e),o=!r&&!n&&!i&&Hn(e),a=r||n||i||o,s=a?zn(e.length,String):[],l=s.length;for(var c in e)!t&&!Mn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||En(c,l))||s.push(c);return s},Ln=Object.prototype;var Tn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ln)};var Rn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Wn=Tn,qn=Rn,Un=Object.prototype.hasOwnProperty;var Qn=X,Zn=wn;var Gn=Vn,Xn=function(e){if(!Wn(e))return qn(e);var t=[];for(var r in Object(e))Un.call(e,r)&&"constructor"!=r&&t.push(r);return t},Kn=function(e){return null!=e&&Zn(e.length)&&!Qn(e)};var Yn=function(e){return Kn(e)?Gn(e):Xn(e)},Jn=en,ei=an,ti=Yn;var ri=function(e){return Jn(e,ti,ei)},ni=Object.prototype.hasOwnProperty;var ii=function(e,t,r,n,i,o){var a=1&r,s=ri(e),l=s.length;if(l!=ri(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:ni.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},oi=fe(S,"DataView"),ai=Ze,si=fe(S,"Promise"),li=fe(S,"Set"),ci=fe(S,"WeakMap"),ui=D,di=te,hi=di(oi),pi=di(ai),fi=di(si),gi=di(li),mi=di(ci),yi=ui;(oi&&"[object DataView]"!=yi(new oi(new ArrayBuffer(1)))||ai&&"[object Map]"!=yi(new ai)||si&&"[object Promise]"!=yi(si.resolve())||li&&"[object Set]"!=yi(new li)||ci&&"[object WeakMap]"!=yi(new ci))&&(yi=function(e){var t=ui(e),r="[object Object]"==t?e.constructor:void 0,n=r?di(r):"";if(n)switch(n){case hi:return"[object DataView]";case pi:return"[object Map]";case fi:return"[object Promise]";case gi:return"[object Set]";case mi:return"[object WeakMap]"}return t});var bi=Nr,vi=Rr,wi=Kr,$i=ii,_i=yi,xi=w,Si=mn.exports,Ci=Pn,ki="[object Object]",Fi=Object.prototype.hasOwnProperty;var Oi=function(e,t,r,n,i,o){var a=xi(e),s=xi(t),l=a?"[object Array]":_i(e),c=s?"[object Array]":_i(t),u=(l="[object Arguments]"==l?ki:l)==ki,d=(c="[object Arguments]"==c?ki:c)==ki,h=l==c;if(h&&Si(e)){if(!Si(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new bi),a||Ci(e)?vi(e,t,r,n,i,o):wi(e,t,l,r,n,i,o);if(!(1&r)){var p=u&&Fi.call(e,"__wrapped__"),f=d&&Fi.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new bi),i(g,m,r,n,o)}}return!!h&&(o||(o=new bi),$i(e,t,r,n,i,o))},ji=E;var Bi=function e(t,r,n,i,o){return t===r||(null==t||null==r||!ji(t)&&!ji(r)?t!=t&&r!=r:Oi(t,r,n,i,e,o))},Ai=Nr,Pi=Bi;var zi=U;var Ii=function(e){return e==e&&!zi(e)},Ni=Ii,Di=Yn;var Ei=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Hi=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Ai;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?Pi(u,c,3,n,d):h))return!1}}return!0},Mi=function(e){for(var t=Di(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ni(i)]}return t},Vi=Ei;var Li=Ot,Ti=gn,Ri=w,Wi=vn,qi=wn,Ui=Bt;var Qi=function(e,t){return null!=e&&t in Object(e)},Zi=function(e,t,r){for(var n=-1,i=(t=Li(t,e)).length,o=!1;++n<i;){var a=Ui(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&qi(i)&&Wi(a,i)&&(Ri(e)||Ti(e))};var Gi=Bi,Xi=Nt,Ki=function(e,t){return null!=e&&Zi(e,t,Qi)},Yi=q,Ji=Ii,eo=Ei,to=Bt;var ro=zt;var no=function(e){return function(t){return null==t?void 0:t[e]}},io=function(e){return function(t){return ro(t,e)}},oo=q,ao=Bt;var so=function(e){var t=Mi(e);return 1==t.length&&t[0][2]?Vi(t[0][0],t[0][1]):function(r){return r===e||Hi(r,e,t)}},lo=function(e,t){return Yi(e)&&Ji(t)?eo(to(e),t):function(r){var n=Xi(r,e);return void 0===n&&n===t?Ki(r,e):Gi(t,n,3)}},co=function(e){return e},uo=w,ho=function(e){return oo(e)?no(ao(e)):io(e)};var po=/\s/;var fo=function(e){for(var t=e.length;t--&&po.test(e.charAt(t)););return t},go=/^\s+/;var mo=function(e){return e?e.slice(0,fo(e)+1).replace(go,""):e},yo=U,bo=V,vo=/^[-+]0x[0-9a-f]+$/i,wo=/^0b[01]+$/i,$o=/^0o[0-7]+$/i,_o=parseInt;var xo=function(e){if("number"==typeof e)return e;if(bo(e))return NaN;if(yo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=yo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=mo(e);var r=wo.test(e);return r||$o.test(e)?_o(e.slice(2),r?2:8):vo.test(e)?NaN:+e};var So=function(e){return e?Infinity===(e=xo(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Co=xr,ko=function(e){return"function"==typeof e?e:null==e?co:"object"==typeof e?uo(e)?lo(e[0],e[1]):so(e):ho(e)},Fo=function(e){var t=So(e),r=t%1;return t==t?r?t-r:t:0},Oo=Math.max;var jo=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Fo(r);return i<0&&(i=Oo(n+i,0)),Co(e,ko(t),i)};let Bo=Uo();const Ao=e=>To(e,Bo);let Po=Uo();Ao.write=e=>To(e,Po);let zo=Uo();Ao.onStart=e=>To(e,zo);let Io=Uo();Ao.onFrame=e=>To(e,Io);let No=Uo();Ao.onFinish=e=>To(e,No);let Do=[];Ao.setTimeout=(e,t)=>{let r=Ao.now()+t,n=()=>{let e=Do.findIndex((e=>e.cancel==n));~e&&Do.splice(e,1),Vo-=~e?1:0},i={time:r,handler:e,cancel:n};return Do.splice(Eo(r),0,i),Vo+=1,Ro(),i};let Eo=e=>~(~Do.findIndex((t=>t.time>e))||~Do.length);Ao.cancel=e=>{zo.delete(e),Io.delete(e),No.delete(e),Bo.delete(e),Po.delete(e)},Ao.sync=e=>{Lo=!0,Ao.batchedUpdates(e),Lo=!1},Ao.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ao.onStart(r)}return n.handler=e,n.cancel=()=>{zo.delete(r),t=null},n};let Ho="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ao.use=e=>Ho=e,Ao.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ao.batchedUpdates=e=>e(),Ao.catch=console.error,Ao.frameLoop="always",Ao.advance=()=>{"demand"!==Ao.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):qo()};let Mo=-1,Vo=0,Lo=!1;function To(e,t){Lo?(t.delete(e),e(0)):(t.add(e),Ro())}function Ro(){Mo<0&&(Mo=0,"demand"!==Ao.frameLoop&&Ho(Wo))}function Wo(){~Mo&&(Ho(Wo),Ao.batchedUpdates(qo))}function qo(){let e=Mo;Mo=Ao.now();let t=Eo(Mo);t&&(Qo(Do.splice(0,t),(e=>e.handler())),Vo-=t),Vo?(zo.flush(),Bo.flush(e?Math.min(64,Mo-e):16.667),Io.flush(),Po.flush(),No.flush()):Mo=-1}function Uo(){let e=new Set,t=e;return{add(r){Vo+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Vo-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Vo-=t.size,Qo(t,(t=>t(r)&&e.add(t))),Vo+=e.size,t=e)}}}function Qo(e,t){e.forEach((e=>{try{t(e)}catch(e){Ao.catch(e)}}))}function Zo(){}const Go={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Xo(e,t){if(Go.arr(e)){if(!Go.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ko=(e,t)=>e.forEach(t);function Yo(e,t,r){if(Go.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const Jo=e=>Go.und(e)?[]:Go.arr(e)?e:[e];function ea(e,t){if(e.size){const r=Array.from(e);e.clear(),Ko(r,t)}}const ta=(e,...t)=>ea(e,(e=>e(...t))),ra=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let na,ia,oa=null,aa=!1,sa=Zo;var la=Object.freeze({__proto__:null,get createStringInterpolator(){return na},get to(){return ia},get colors(){return oa},get skipAnimation(){return aa},get willAdvance(){return sa},assign:e=>{e.to&&(ia=e.to),e.now&&(Ao.now=e.now),void 0!==e.colors&&(oa=e.colors),null!=e.skipAnimation&&(aa=e.skipAnimation),e.createStringInterpolator&&(na=e.createStringInterpolator),e.requestAnimationFrame&&Ao.use(e.requestAnimationFrame),e.batchedUpdates&&(Ao.batchedUpdates=e.batchedUpdates),e.willAdvance&&(sa=e.willAdvance),e.frameLoop&&(Ao.frameLoop=e.frameLoop)}});const ca=new Set;let ua=[],da=[],ha=0;const pa={get idle(){return!ca.size&&!ua.length},start(e){ha>e.priority?(ca.add(e),Ao.onStart(fa)):(ga(e),Ao(ya))},advance:ya,sort(e){if(ha)Ao.onFrame((()=>pa.sort(e)));else{const t=ua.indexOf(e);~t&&(ua.splice(t,1),ma(e))}},clear(){ua=[],ca.clear()}};function fa(){ca.forEach(ga),ca.clear(),Ao(ya)}function ga(e){ua.includes(e)||ma(e)}function ma(e){ua.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ua,(t=>t.priority>e.priority)),0,e)}function ya(e){const t=da;for(let r=0;r<ua.length;r++){const n=ua[r];ha=n.priority,n.idle||(sa(n),n.advance(e),n.idle||t.push(n))}return ha=0,da=ua,da.length=0,ua=t,ua.length>0}const ba="[-+]?\\d*\\.?\\d+";function va(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const wa=new RegExp("rgb"+va(ba,ba,ba)),$a=new RegExp("rgba"+va(ba,ba,ba,ba)),_a=new RegExp("hsl"+va(ba,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),xa=new RegExp("hsla"+va(ba,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",ba)),Sa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ca=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ka=/^#([0-9a-fA-F]{6})$/,Fa=/^#([0-9a-fA-F]{8})$/;function Oa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ja(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Oa(i,n,e+1/3),a=Oa(i,n,e),s=Oa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ba(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Aa(e){return(parseFloat(e)%360+360)%360/360}function Pa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function za(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ia(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ka.exec(e))?parseInt(t[1]+"ff",16)>>>0:oa&&void 0!==oa[e]?oa[e]:(t=wa.exec(e))?(Ba(t[1])<<24|Ba(t[2])<<16|Ba(t[3])<<8|255)>>>0:(t=$a.exec(e))?(Ba(t[1])<<24|Ba(t[2])<<16|Ba(t[3])<<8|Pa(t[4]))>>>0:(t=Sa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Fa.exec(e))?parseInt(t[1],16)>>>0:(t=Ca.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=_a.exec(e))?(255|ja(Aa(t[1]),za(t[2]),za(t[3])))>>>0:(t=xa.exec(e))?(ja(Aa(t[1]),za(t[2]),za(t[3]))|Pa(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Na=(e,t,r)=>{if(Go.fun(e))return e;if(Go.arr(e))return Na({range:e,output:t,extrapolate:r});if(Go.str(e.output[0]))return na(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Da.apply(this,arguments)}const Ea=Symbol.for("FluidValue.get"),Ha=Symbol.for("FluidValue.observers"),Ma=e=>Boolean(e&&e[Ea]),Va=e=>e&&e[Ea]?e[Ea]():e,La=e=>e[Ha]||null;function Ta(e,t){let r=e[Ha];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ra{constructor(e){if(this[Ea]=void 0,this[Ha]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Wa(this,e)}}const Wa=(e,t)=>Qa(e,Ea,t);function qa(e,t){if(e[Ea]){let r=e[Ha];r||Qa(e,Ha,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ua(e,t){let r=e[Ha];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ha]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const Qa=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Za=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ga=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xa=new RegExp(`(${Za.source})(%|[a-z]+)`,"i"),Ka=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ya=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ja=e=>{const[t,r]=es(e);if(!t||ra())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ya.test(r)?Ja(r):r||e},es=e=>{const t=Ya.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let ts;const rs=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,ns=e=>{ts||(ts=oa?new RegExp(`(${Object.keys(oa).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Va(e).replace(Ya,Ja).replace(Ga,Ia).replace(ts,Ia))),r=t.map((e=>e.match(Za).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Na(Da({},e,{output:t}))));return e=>{var r;const i=!Xa.test(t[0])&&(null==(r=t.find((e=>Xa.test(e))))?void 0:r.replace(Za,""));let o=0;return t[0].replace(Za,(()=>`${n[o++](e)}${i||""}`)).replace(Ka,rs)}},is="react-spring: ",os=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${is}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},as=os(console.warn);const ss=os(console.warn);function ls(e){return Go.str(e)&&("#"==e[0]||/\d/.test(e)||!ra()&&Ya.test(e)||e in(oa||{}))}const cs=ra()?l:c;function us(){const e=u()[1],t=(()=>{const e=a(!1);return cs((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}const ds=e=>l(e,hs),hs=[];function ps(e){const t=a();return l((()=>{t.current=e})),t.current}const fs=Symbol.for("Animated:node"),gs=e=>e&&e[fs],ms=(e,t)=>{return r=e,n=fs,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},ys=e=>e&&e[fs]&&e[fs].getPayload();class bs{constructor(){this.payload=void 0,ms(this,this)}getPayload(){return this.payload||[]}}class vs extends bs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Go.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new vs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Go.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Go.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ws extends vs{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Na({output:[e,e]})}static create(e){return new ws(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Go.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Na({output:[this.getValue(),e]})),this._value=0,super.reset()}}const $s={dependencies:null};class _s extends bs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Yo(this.source,((r,n)=>{var i;(i=r)&&i[fs]===i?t[n]=r.getValue(e):Ma(r)?t[n]=Va(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ko(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Yo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){$s.dependencies&&Ma(e)&&$s.dependencies.add(e);const t=ys(e);t&&Ko(t,(e=>this.add(e)))}}class xs extends _s{constructor(e){super(e)}static create(e){return new xs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ss)),!0)}}function Ss(e){return(ls(e)?ws:vs).create(e)}function Cs(e){const t=gs(e);return t?t.constructor:Go.arr(e)?xs:ls(e)?ws:vs}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ks.apply(this,arguments)}const Fs=(e,t)=>{const r=!Go.fun(e)||e.prototype&&e.prototype.isReactComponent;return d(((n,o)=>{const s=a(null),c=r&&h((e=>{s.current=function(e,t){e&&(Go.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const r=new Set;$s.dependencies=r,e.style&&(e=ks({},e,{style:t.createAnimatedStyle(e.style)}));return e=new _s(e),$s.dependencies=null,[e,r]}(n,t),p=us(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&p()},g=new Os(f,d),m=a();cs((()=>(m.current=g,Ko(d,(e=>qa(e,g))),()=>{m.current&&(Ko(m.current.deps,(e=>Ua(e,m.current))),Ao.cancel(m.current.update))}))),l(f,[]),ds((()=>()=>{const e=m.current;Ko(e.deps,(t=>Ua(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,ks({},y,{ref:c}))}))};class Os{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ao.write(this.update)}}const js=Symbol.for("AnimatedComponent"),Bs=e=>Go.str(e)?e:e&&Go.str(e.displayName)?e.displayName:Go.fun(e)&&e.name||null;function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},As.apply(this,arguments)}function Ps(e,...t){return Go.fun(e)?e(...t):e}const zs=(e,t)=>!0===e||!!(t&&e&&(Go.fun(e)?e(t):Jo(e).includes(t))),Is=(e,t)=>Go.obj(e)?t&&e[t]:e,Ns=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ds=e=>e,Es=(e,t=Ds)=>{let r=Hs;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Go.und(r)||(n[i]=r)}return n},Hs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ms={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Vs(e){const t=function(e){const t={};let r=0;if(Yo(e,((e,n)=>{Ms[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Yo(e,((e,n)=>n in t||(r[n]=e))),r}return As({},e)}function Ls(e){return e=Va(e),Go.arr(e)?e.map(Ls):ls(e)?la.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ts(e){for(const t in e)return!0;return!1}function Rs(e){return Go.fun(e)||Go.arr(e)&&Go.obj(e[0])}function Ws(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}function qs(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}const Us=1.70158,Qs=1.525*Us,Zs=2*Math.PI/3,Gs=2*Math.PI/4.5,Xs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ks=As({},{tension:170,friction:26},{mass:1,damping:1,easing:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>2.70158*e*e*e-Us*e*e,easeOutBack:e=>1+2.70158*Math.pow(e-1,3)+Us*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Qs)/2:(Math.pow(2*e-2,2)*((Qs+1)*(2*e-2)+Qs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Zs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Zs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Gs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Gs)/2+1,easeInBounce:e=>1-Xs(1-e),easeOutBounce:Xs,easeInOutBounce:e=>e<.5?(1-Xs(1-2*e))/2:(1+Xs(2*e-1))/2}.linear,clamp:!1});class Ys{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ks)}}function Js(e,t){if(Go.und(t.decay)){const r=!Go.und(t.tension)||!Go.und(t.friction);!r&&Go.und(t.frequency)&&Go.und(t.damping)&&Go.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const el=[];class tl{constructor(){this.changed=!1,this.values=el,this.toValues=null,this.fromValues=el,this.to=void 0,this.from=void 0,this.config=new Ys,this.immediate=!1}}function rl(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=zs(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)f();else{Go.und(r.pause)||(i.paused=zs(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||zs(e,t)),c=Ps(r.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-Ao.now()}function p(){c>0&&!la.skipAnimation?(i.delayed=!0,u=Ao.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(As({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const nl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?al(e.get()):t.every((e=>e.noop))?il(e.get()):ol(e.get(),t.every((e=>e.finished))),il=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ol=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),al=e=>({value:e,cancelled:!0,finished:!1});function sl(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Es(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(r.cancelId||0)&&al(n)||i!==r.asyncId&&ol(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new cl,a=new ul;return(async()=>{if(la.skipAnimation)throw ll(r),a.result=ol(n,!1),d(a),a;p(o);const s=Go.obj(e)?As({},e):As({},t,{to:e});s.parentId=i,Yo(c,((e,t)=>{Go.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(la.skipAnimation)return ll(r),ol(n,!1);try{let t;t=Go.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=ol(n.get(),!0,!1)}catch(e){if(e instanceof cl)g=e.result;else{if(!(e instanceof ul))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Go.fun(a)&&Ao.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function ll(e,t){ea(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class cl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ul extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const dl=e=>e instanceof pl;let hl=1;class pl extends Ra{constructor(...e){super(...e),this.id=hl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=gs(this);return e&&e.getValue()}to(...e){return la.to(this,e)}interpolate(...e){return as(`${is}The "interpolate" function is deprecated in v9 (use "to" instead)`),la.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ta(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||pa.sort(this),Ta(this,{type:"priority",parent:this,priority:e})}}const fl=Symbol.for("SpringPhase"),gl=e=>(1&e[fl])>0,ml=e=>(2&e[fl])>0,yl=e=>(4&e[fl])>0,bl=(e,t)=>t?e[fl]|=3:e[fl]&=-3,vl=(e,t)=>t?e[fl]|=4:e[fl]&=-5;class wl extends pl{constructor(e,t){if(super(),this.key=void 0,this.animation=new tl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Go.und(e)||!Go.und(t)){const r=Go.obj(e)?As({},e):As({},t,{from:e});Go.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ml(this)||this._state.asyncTo)||yl(this)}get goal(){return Va(this.animation.to)}get velocity(){const e=gs(this);return e instanceof vs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return gl(this)}get isAnimating(){return ml(this)}get isPaused(){return yl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=ys(n.to);!a&&Ma(n.to)&&(o=Jo(Va(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ws?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Go.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Go.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Go.und(n),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*n,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=gs(this),l=s.getValue();if(t){const e=Va(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ao.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ml(this)){const{to:e,config:t}=this.animation;Ao.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Go.und(e)?(r=this.queue||[],this.queue=[]):r=[Go.obj(e)?e:As({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>nl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ll(this._state,e&&this._lastCallId),Ao.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Go.obj(r)?r[t]:r,(null==r||Rs(r))&&(r=void 0),n=Go.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return gl(this)||(e.reverse&&([r,n]=[n,r]),n=Va(n),Go.und(n)?gs(this)||this._set(r):this._set(n)),i}_update(e,t){let r=As({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Es(r,((e,t)=>/^on/.test(t)?Is(e,n):e))),Fl(this,r,"onProps"),Ol(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return rl(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{yl(this)||(vl(this,!0),ta(a.pauseQueue),Ol(this,"onPause",ol(this,$l(this,this.animation.to)),this))},resume:()=>{yl(this)&&(vl(this,!1),ml(this)&&this._resume(),ta(a.resumeQueue),Ol(this,"onResume",ol(this,$l(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=_l(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(al(this));const n=!Go.und(e.to),i=!Go.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(al(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Go.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Xo(d,c);h&&(s.from=d),d=Va(d);const p=!Xo(u,l);p&&this._focus(u);const f=Rs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(Js(r=As({},r),t),t=As({},r,t)),Js(e,t),Object.assign(e,t);for(const t in Ks)null==e[t]&&(e[t]=Ks[t]);let{mass:n,frequency:i,damping:o}=e;Go.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(g,Ps(t.config,o),t.config!==a.config?Ps(a.config,o):void 0);let b=gs(this);if(!b||Go.und(u))return r(ol(this,!0));const v=Go.und(t.reset)?i&&!t.default:!Go.und(d)&&zs(t.reset,o),w=v?d:this.get(),$=Ls(u),_=Go.num($)||Go.arr($)||ls($),x=!f&&(!_||zs(a.immediate||t.immediate,o));if(p){const e=Cs(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set($)}}const S=b.constructor;let C=Ma(u),k=!1;if(!C){const e=v||!gl(this)&&h;(p||e)&&(k=Xo(Ls(w),$),C=!k),(Xo(s.immediate,x)||x)&&Xo(g.decay,m)&&Xo(g.velocity,y)||(C=!0)}if(k&&ml(this)&&(s.changed&&!v?C=!0:C||this._stop(l)),!f&&((C||Ma(l))&&(s.values=b.getPayload(),s.toValues=Ma(u)?null:S==ws?[1]:Jo($)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),C)){const{onRest:e}=s;Ko(kl,(e=>Fl(this,t,e)));const n=ol(this,$l(this,l));ta(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Ao.batchedUpdates((()=>{s.changed=!v,null==e||e(n,this),v?Ps(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}v&&this._set(w),f?r(sl(t.to,t,this._state,this)):C?this._start():ml(this)&&!p?this._pendingCalls.add(r):r(il(w))}_focus(e){const t=this.animation;e!==t.to&&(La(this)&&this._detach(),t.to=e,La(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ma(t)&&(qa(t,this),dl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ma(e)&&Ua(e,this)}_set(e,t=!0){const r=Va(e);if(!Go.und(r)){const e=gs(this);if(!e||!Xo(r,e.getValue())){const n=Cs(r);e&&e.constructor==n?e.setValue(r):ms(this,n.create(r)),e&&Ao.batchedUpdates((()=>{this._onChange(r,t)}))}}return gs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ol(this,"onStart",ol(this,$l(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ps(this.animation.onChange,e,this)),Ps(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;gs(this).reset(Va(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ml(this)||(bl(this,!0),yl(this)||this._resume())}_resume(){la.skipAnimation?this.finish():pa.start(this)}_stop(e,t){if(ml(this)){bl(this,!1);const r=this.animation;Ko(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ta(this,{type:"idle",parent:this});const n=t?al(this.get()):ol(this.get(),$l(this,null!=e?e:r.to));ta(this._pendingCalls,n),r.changed&&(r.changed=!1,Ol(this,"onRest",n,this))}}}function $l(e,t){const r=Ls(t);return Xo(Ls(e.get()),r)}function _l(e,t=e.loop,r=e.to){let n=Ps(t);if(n){const i=!0!==n&&Vs(n),o=(i||e).reverse,a=!i||i.reset;return xl(As({},e,{loop:t,default:!1,pause:void 0,to:!o||Rs(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function xl(e){const{to:t,from:r}=e=Vs(e),n=new Set;return Go.obj(t)&&Cl(t,n),Go.obj(r)&&Cl(r,n),e.keys=n.size?Array.from(n):null,e}function Sl(e){const t=xl(e);return Go.und(t.default)&&(t.default=Es(t)),t}function Cl(e,t){Yo(e,((e,r)=>null!=e&&t.add(r)))}const kl=["onStart","onRest","onChange","onPause","onResume"];function Fl(e,t,r){e.animation[r]=t[r]!==Ns(t,r)?Is(t[r],e.key):void 0}function Ol(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const jl=["onStart","onChange","onRest"];let Bl=1;class Al{constructor(e,t){this.id=Bl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(As({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Go.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(xl(e)),this}start(e){let{queue:t}=this;return e?t=Jo(e).map(xl):this.queue=[],this._flush?this._flush(this,t):(Hl(this,t),Pl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ko(Jo(t),(t=>r[t].stop(!!e)))}else ll(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Go.und(e))this.start({pause:!0});else{const t=this.springs;Ko(Jo(e),(e=>t[e].pause()))}return this}resume(e){if(Go.und(e))this.start({pause:!1});else{const t=this.springs;Ko(Jo(e),(e=>t[e].resume()))}return this}each(e){Yo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,ea(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&ea(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,ea(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ao.onFrame(this._onFrame)}}function Pl(e,t){return Promise.all(t.map((t=>zl(e,t)))).then((t=>nl(e,t)))}async function zl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Go.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Go.arr(i)||Go.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ko(jl,(r=>{const n=t[r];if(Go.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ta(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Ns(t,"cancel");(u||p&&d.asyncId)&&h.push(rl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Zo,resume:Zo,start(t,r){p?(ll(d,e._lastAsyncId),r(al(e))):(t.onRest=s,r(sl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=nl(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=_l(t,a,i);if(r)return Hl(e,[r]),zl(e,r,!0)}return l&&Ao.batchedUpdates((()=>l(f,e,e.item))),f}function Il(e,t){const r=As({},e.springs);return t&&Ko(Jo(t),(e=>{Go.und(e.keys)&&(e=xl(e)),Go.obj(e.to)||(e=As({},e,{to:void 0})),El(r,e,(e=>Dl(e)))})),Nl(e,r),r}function Nl(e,t){Yo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,qa(t,e))}))}function Dl(e,t){const r=new wl;return r.key=e,t&&qa(r,t),r}function El(e,t,r){t.keys&&Ko(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Hl(e,t){Ko(t,(t=>{El(e.springs,t,(t=>Dl(t,e)))}))}const Ml=["children"],Vl=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,Ml);const n=p(Ll),o=r.pause||!!n.pause,s=r.immediate||!!n.immediate;r=function(e,t){const[r]=u((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return l((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:c}=Ll;return i.createElement(c,{value:r},t)},Ll=(Tl=Vl,Rl={},Object.assign(Tl,i.createContext(Rl)),Tl.Provider._context=Tl,Tl.Consumer._context=Tl,Tl);var Tl,Rl;Vl.Provider=Ll.Provider,Vl.Consumer=Ll.Consumer;const Wl=()=>{const e=[],t=function(t){ss(`${is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ko(e,((e,i)=>{if(Go.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ko(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ko(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ko(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ko(e,((e,n)=>{if(Go.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ko(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ko(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Go.fun(e)?e(r,t):e};return t._getProps=r,t};function ql(e,t,r){const n=Go.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?Wl():void 0),[]),o=a(0),s=us(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=Il(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Pl(e,t):new Promise((n=>{Nl(e,r),l.queue.push((()=>{n(Pl(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=ps(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new Al(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=Sl(r))}}f((()=>{Ko(c.current.slice(e,d),(e=>{Ws(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),f((()=>{h(0,Math.min(d,e))}),r);const g=c.current.map(((e,t)=>Il(e,u[t]))),m=p(Vl),y=ps(m),b=m!==y&&Ts(m);cs((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ko(e,(e=>e()))),Ko(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const r=u[t];r&&(qs(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ds((()=>()=>{Ko(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>As({},e)));return i?[v,i]:v}let Ul;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ul||(Ul={}));class Ql extends pl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Na(...t);const r=this._get(),n=Cs(r);ms(this,n.create(r))}advance(e){const t=this._get();Xo(t,this.get())||(gs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Gl(this._active)&&Xl(this)}_get(){const e=Go.arr(this.source)?this.source.map(Va):Jo(Va(this.source));return this.calc(...e)}_start(){this.idle&&!Gl(this._active)&&(this.idle=!1,Ko(ys(this),(e=>{e.done=!1})),la.skipAnimation?(Ao.batchedUpdates((()=>this.advance())),Xl(this)):pa.start(this))}_attach(){let e=1;Ko(Jo(this.source),(t=>{Ma(t)&&qa(t,this),dl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ko(Jo(this.source),(e=>{Ma(e)&&Ua(e,this)})),this._active.clear(),Xl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Jo(this.source).reduce(((e,t)=>Math.max(e,(dl(t)?t.priority:0)+1)),0))}}function Zl(e){return!1!==e.idle}function Gl(e){return!e.size||Array.from(e).every(Zl)}function Xl(e){e.idle||(e.idle=!0,Ko(ys(e),(e=>{e.done=!0})),Ta(e,{type:"idle",parent:e}))}function Kl(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}la.assign({createStringInterpolator:ns,to:(e,t)=>new Ql(e,t)});const Yl=["style","children","scrollTop","scrollLeft"],Jl=/^--/;function ec(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Jl.test(e)||rc.hasOwnProperty(e)&&rc[e]?(""+t).trim():t+"px"}const tc={};let rc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const nc=["Webkit","Ms","Moz","O"];rc=Object.keys(rc).reduce(((e,t)=>(nc.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),rc);const ic=["x","y","z"],oc=/^(matrix|translate|scale|rotate|skew)/,ac=/^(translate)/,sc=/^(rotate|skew)/,lc=(e,t)=>Go.num(e)&&0!==e?e+t:e,cc=(e,t)=>Go.arr(e)?e.every((e=>cc(e,t))):Go.num(e)?e===t:parseFloat(e)===t;class uc extends _s{constructor(e){let{x:t,y:r,z:n}=e,i=Kl(e,ic);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>lc(e,"px"))).join(",")})`,cc(e,0)]))),Yo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(oc.test(t)){if(delete i[t],Go.und(e))return;const r=ac.test(t)?"px":sc.test(t)?"deg":"";o.push(Jo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${lc(i,r)})`,cc(i,0)]:e=>[`${t}(${e.map((e=>lc(e,r))).join(",")})`,cc(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new dc(o,a)),super(i)}}class dc extends Ra{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ko(this.inputs,((r,n)=>{const i=Va(r[0]),[o,a]=this.transforms[n](Go.arr(i)?i:r.map(Va));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ko(this.inputs,(e=>Ko(e,(e=>Ma(e)&&qa(e,this)))))}observerRemoved(e){0==e&&Ko(this.inputs,(e=>Ko(e,(e=>Ma(e)&&Ua(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ta(this,e)}}const hc=["scrollTop","scrollLeft"];la.assign({batchedUpdates:b,createStringInterpolator:ns,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const pc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new _s(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Bs(e)||"Anonymous";return(e=Go.str(e)?o[e]||(o[e]=Fs(e,i)):e[js]||(e[js]=Fs(e,i))).displayName=`Animated(${t})`,e};return Yo(e,((t,r)=>{Go.arr(e)&&(r=Bs(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s}=n,l=Kl(n,Yl),c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:tc[t]||(tc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=ec(t,i[t]);Jl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s)},createAnimatedStyle:e=>new uc(e),getComponentProps:e=>Kl(e,hc)}),fc=pc.animated,gc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},mc=e=>Object.keys(gc).reduce(((t,r)=>{const n=gc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),yc=mc("max-width"),bc=(mc("min-width"),g.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),vc=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wc=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Lt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${vc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$c=g(wc)`
    animation-delay: -0.45s;
`,_c=g(wc)`
    animation-delay: -0.3s;
`,xc=g(wc)`
    animation-delay: -0.15s;
`;g.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Primary(e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${Lt.Neutral[8](e)};
                    border: 1px solid ${Lt.Neutral[5](e)};

                    span {
                        color: ${Lt.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${Lt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Lt.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Lt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Lt.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${Lt.Primary(e)};
                    border: 1px solid transparent;

                    ${yc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Lt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${or("H5","semibold")}
                    }

                    ${yc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${or("H4","semibold")}
                    }

                    ${yc.mobileS} {
                        height: auto;
                    }
                `}
`;const Sc=g((({color:e,className:n,size:i=18})=>t(bc,{className:n,$size:i,$color:e,children:[r(wc,{id:"inner1",$size:i-2,$borderWidth:2}),r($c,{id:"inner2",$size:i-2,$borderWidth:2}),r(_c,{id:"inner3",$size:i-2,$borderWidth:2}),r(xc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Lt.Primary(e);break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Cc,kc={};Object.defineProperty(kc,"__esModule",{value:!0});var Fc=e;const Oc=e=>Fc.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Fc.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});Oc.displayName="ExclamationCircleFillIcon",Cc=kc.ExclamationCircleFillIcon=Oc;var jc,Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});var Ac=e;const Pc=e=>Ac.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ac.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Pc.displayName="TickIcon",jc=Bc.TickIcon=Pc;const zc=g.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Lt.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Lt.Primary(e),r=Lt.Primary(e)),e.disabled&&(t=Lt.Neutral[6](e),r=Lt.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Ic=g.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Nc=g(jc)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return m`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Lt.Neutral[4]:Lt.Neutral[8]};
`,Dc=g(fc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Ec=g.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Lt.Neutral[4]};
        border-right: 5px solid ${Lt.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${yc.mobileL} {
        max-height: 15rem;
    }
`,Hc=g.li`
    :hover,
    :focus,
    :active {
        background: ${Lt.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return m`
                background: ${Lt.Accent.Light[5]};
            `}}
`,Mc=g.button`
    display: flex;
    ${e=>e.multiSelect?m`
                padding: 0.5rem 1rem;
            `:m`
                padding: 0 1rem;
                min-height: 3.5rem;
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Lt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;g.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Lt.Neutral[8]};
`;const Vc=g.div`
    ${or("Body","regular")}
    color: ${Lt.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Lc=g.span`
    color: ${Lt.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,Tc=g.div`
    display: flex;
    flex-direction: column;
`,Rc=g.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wc=g.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;g(gr.Hyperlink.Default)`
    color: ${Lt.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Lt.Accent.Light[3]};
        color: ${Lt.Neutral[1]};
    }
`;const qc=g((({className:e,checked:n,disabled:i,onChange:o,onKeyPress:a,displaySize:s="default",...c})=>{const[d,h]=u(n);l((()=>{h(n)}),[n]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),a&&a(t)}};return t(zc,{selected:d,disabled:i,className:e,"data-testid":"checkbox",$displaySize:s,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,children:[r(Ic,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:i,checked:d,...c}),d&&r(Nc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:s})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Uc=g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Qc=g.button`
    ${or("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Lt.Primary(e)};\n\t\t`}
`,Zc=g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gc=g(gr.Body)``,Xc=g(Cc)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Lt.Validation.Red.Icon};
`;var Kc,Yc={};Object.defineProperty(Yc,"__esModule",{value:!0});var Jc=e;const eu=e=>Jc.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Jc.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});eu.displayName="MagnifierIcon",Kc=Yc.MagnifierIcon=eu;const tu=g.button`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${Lt.Neutral[7]};
            `}
    }
`,ru=o.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:n="none",...i},o)=>r(tu,{ref:o,$outline:n,$highlight:t,...i,children:e}))),nu=g.li`
    background: ${Lt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,iu=g.input`
    ${or("Body","regular")}
    height: 3rem;
    border: none;
    background: transparent;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Lt.Neutral[3]};
    }
`,ou=g(Kc)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Lt.Neutral[3]};
`,au=g(ru)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Lt.Neutral[3]};
    cursor: pointer;
`,su=g(Zt)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Lt.Neutral[3]};
`,lu=d(((e,n)=>{const{onClear:i,...o}=e;return t(nu,{children:[r(ou,{}),r(iu,{ref:n,...o}),o.value&&r(au,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:r(su,{})})]},"search")})),cu=({listItems:e,listExtractor:i,valueExtractor:o,onSelectItem:s,listStyleWidth:c,visible:d,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:g,onDismiss:m,multiSelect:y,selectedItems:b,onSelectAll:v,onRetry:w,itemsLoadState:$="success",itemTruncationType:_="end",renderListItem:x,onBlur:S,...C})=>{const[k,F]=u(0),[O,j]=u(""),[B,A]=u(e),[P,z]=u(0),I=function(e,t){const r=Go.fun(e),[[n],i]=ql(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}({height:P}),N=a(),D=a(),E=a([]),H=a(),M=a(k),V=a(B),L=e=>{M.current=e,F(e)},T=e=>{V.current=e,A(e)};l((()=>(document.addEventListener("keydown",Z),()=>{document.removeEventListener("keydown",Z)})),[]),l((()=>{U(O)}),[O]),l((()=>{j(""),d?(z(Q()),H&&H.current?(H.current.focus(),L(-1)):E.current[k]&&E.current[k].focus()):z(0)}),[d]),l((()=>{if(d){const e=Q();z(e)}}),[B]),l((()=>{T(e),j(""),L(0)}),[e]);const R=e=>i?i(e):e.toString(),W=e=>{const t=i?i(e):e.toString();let r=0;return D&&D.current&&(r=D.current.getBoundingClientRect().width-100),Qt.shouldTruncateToTwoLines("string"==typeof t?t:t.title,r)},q=e=>jo(b,e)>-1,U=t=>{if(""===t)T(e);else if(g){const e=g(t);T(e)}else{const r=e.filter((e=>{const r=R(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?n.includes(t.trim().toLowerCase())||r.secondaryLabel.includes(t.trim().toLowerCase()):n.includes(t.trim().toLowerCase())}));T(r)}},Q=()=>D&&D.current?D.current.getBoundingClientRect().height:0,Z=e=>{if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(M.current<V.current.length-1){const e=M.current+1;E.current[e].focus(),L(e)}break;case"ArrowUp":if(M.current>0){const e=M.current-1;E.current[e].focus(),L(M.current-1)}break;case"Escape":m&&m()}},G=(e,t)=>{e.preventDefault(),s&&s(t,(e=>o?o(e):e)(t))},X=e=>{const t=e.target.value;j(t),f&&f()},K=()=>{j(""),f&&f()},Y=()=>{w&&w()},J=()=>{S&&S()},ee=e=>{const n=R(e),i="string"==typeof n?n:n.title;return t(Tc,{"data-testid":"truncate-middle-container",children:[r(Rc,{children:i}),t(Wc,{children:[" ",i]})]})},te=e=>{const i=R(e);return"string"==typeof i?r(n,{children:i}):t(n,{children:[i.title,i.secondaryLabel&&r(Lc,{children:i.secondaryLabel})]})},re=()=>{if(!w||w&&"success"===$)return B.map(((e,n)=>r(Hc,{checked:q(e)&&!y,children:t(Mc,{onClick:t=>{G(t,e)},ref:e=>E.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:y,onBlur:J,children:[y&&r(qc,{checked:q(e),displaySize:"small"}),x?x(e,{selected:q(e)}):r(Vc,{truncateType:_,children:"middle"===_&&W(e)?ee(e):te(e)})]})},((e,t)=>`item_${t}__${o?o(e):e}`)(e,n))))},ne=()=>{if(y&&B.length>0&&!O&&"success"===$)return r(Uc,{children:r(Qc,{onClick:v,children:0===b.length?"Select all":"Unselect all"})},"selectAll")},ie=()=>{if(O&&0===B.length)return t(Zc,{"data-testid":"list-no-results",children:[r(Xc,{"data-testid":"no-result-icon"}),r(Gc,{children:"No results found."})]},"noResults")},oe=()=>{if(w&&"loading"===$)return t(Zc,{"data-testid":"list-loading",children:[r(Sc,{$buttonStyle:"secondary",size:24}),r(Gc,{children:"Loading..."})]},"loading")},ae=()=>{if(w&&"fail"===$)return t(Zc,{"data-testid":"list-fail",children:[r(Xc,{"data-testid":"load-error-icon"}),r(Gc,{children:"Failed to load."}),r(Qc,{onClick:Y,children:"Try again."})]},"noResults")};return r(Dc,{style:I,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:N,children:(()=>{if(d)return t(Ec,{ref:D,"data-testid":"dropdown-list",width:c,role:"list",...C,children:[(h||g)&&"success"===$?r(lu,{ref:H,onChange:X,value:O,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:K}):null,ne(),ie(),oe(),ae(),re()]})})()})};var uu,du={};Object.defineProperty(du,"__esModule",{value:!0});var hu=e;const pu=e=>hu.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:hu.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});pu.displayName="ChevronDownIcon",uu=du.ChevronDownIcon=pu;const fu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",gu=g.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;

    ${yc.tablet} {
        height: auto;
    }
`,mu=g.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 3rem;
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Lt.Accent.Light[3]};
    }
`,yu=y`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,bu=g.div`
    position: relative;
    border: 1px solid ${Lt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Lt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Lt.Accent.Light[1]};
        box-shadow: ${Wt};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${yu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${Lt.Neutral[6](e)};

                ${mu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Lt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${mu} {
                    padding-left: 0rem;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${Lt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Lt.Validation.Red.Border(e)};
                    box-shadow: ${qt};
                }
            `:void 0}
`;g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${fu};
    margin-left: 1rem;
`,g(uu)`
    color: ${Lt.Neutral[3]};
    height: ${tr.Body.fontSize}rem;
    width: ${tr.Body.fontSize}rem;
`,g.div`
    height: 1px;
    background: ${Lt.Neutral[5]};
    margin: 0 0.5rem;
`,g.div`
    display: flex;
    flex: 1;
`;const vu=g(gr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;g(vu)`
    color: ${Lt.Neutral[3]};
`;const wu=gu,$u=g(bu)``,_u=g.div`
    position: relative;
    display: flex;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return m`
                border-bottom: 1px solid ${Lt.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?m`
                border: 0;
                margin: 0;
            `:"right"===e.$position?m`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:m`
                        flex-direction: row;
                    `}
`,xu=g(mu)`
    padding: 0;
    width: auto;
`,Su=g.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Cu=g.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${fu};
    margin: 0 0.75rem;
`,ku=g(uu)`
    color: ${Lt.Neutral[3]};
    height: ${tr.Body.fontSize}rem;
    width: ${tr.Body.fontSize}rem;
    vertical-align: bottom;
`,Fu=g.div`
    display: flex;
    flex: 1 1 auto;
`,Ou=g(gr.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px; // align with input
`,ju=g(Ou)`
    color: ${Lt.Neutral[3]};
`,Bu=g.div`
    width: 1px;
    background: ${Lt.Neutral[5]};

    ${e=>{if(e.$readOnly)return m`
                display: none;
            `}}

    ${e=>"right"===e.$position?m`
                    margin: 1rem 0.75rem;
                `:m`
                    margin: 1rem 0.75rem 1rem 0;
                `}
`,Au=({addon:e,error:i,onChange:o,readOnly:s,className:c,onBlur:d,...h})=>{const{placeholder:p,options:f,enableSearch:g,searchFunction:m,searchPlaceholder:y,valueExtractor:b,listExtractor:v,displayValueExtractor:w,selectedOption:$,onSelectOption:_,onHideOptions:x,onShowOptions:S,"data-selector-testid":C}=e.attributes,{position:k}=e,[F,O]=u($),[j,B]=u(!1),A=a(),P=a();l((()=>{O($)}),[$]),l((()=>(document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)})),[]);const z=()=>w?w(F):b?b(F):F.toString(),I=e=>{!e&&x&&x(),e&&S&&S()},N=e=>{if(!h.disabled){if(A&&A.current.contains(e.target))return;B(!1),I(!1),M()}},D=e=>{e.preventDefault(),h.disabled||(B(!j),I(!j))},E=(e,t)=>{O(e),B(!1),I(!1),P&&P.current.focus(),_&&_(e,t)},H=e=>{o&&o(e)},M=()=>{d&&d()},V=()=>{B(!1),I(!1),P&&P.current.focus()};return r(wu,{className:c,children:t($u,{ref:A,disabled:h.disabled,error:i&&!j,expanded:j,$readOnly:s,children:[t(_u,{$expanded:j,$readOnly:s,$position:k,children:[s?F?r(Su,{children:r(Ou,{"data-testid":"selector-label",children:z()})}):null:r(xu,{ref:P,type:"button",disabled:h.disabled,"data-testid":C||"addon-selector",onClick:D,children:t(n,{children:[t(Fu,{children:[p&&!F&&r(ju,{children:p}),F&&r(Ou,{"data-testid":"selector-label",children:z()})]}),r(Cu,{$expanded:j,children:r(ku,{})})]})}),r(Bu,{$readOnly:s,$position:k}),r($r,{...h,readOnly:s,error:i,onChange:H,"data-testid":h["data-testid"]||"input",onBlur:M})]}),f&&f.length>0?r(cu,{listItems:f,selectedItems:$?[$]:[],onSelectItem:E,valueExtractor:b,listExtractor:v,visible:j,enableSearch:g,searchFunction:m,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:M,onDismiss:V}):null]})})},Pu=o.forwardRef((({addon:e,error:n,className:i,...o},a)=>{const s=()=>r(wr,{disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:i,children:r($r,{ref:a,...o,"data-testid":"input"})});if(!e)return s();{const{type:a="label",position:l="left"}=e,{allowClear:c}=o;switch(a){case"list":{const t=e.attributes;return t.options&&t.options.length>0?r(Au,{addon:e,error:n,className:i,...o}):s()}case"custom":{const a=e.attributes;return a.children?t(Ut,{$error:n,disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:i,children:[r(_r,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l,children:a.children}),r($r,{...o,allowClear:c&&"right"!==l,error:n,"data-testid":"input"})]}):s()}default:{const a=e.attributes;return a.value?t(Ut,{disabled:o.disabled,$error:n,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:i,children:[r(_r,{"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l,children:a.value}),r($r,{...o,allowClear:c&&"right"!==l,error:n,"data-testid":"input"})]}):s()}}}}));export{Pu as InputGroup};
//# sourceMappingURL=index.js.map
