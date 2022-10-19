import e,{css as t,keyframes as n}from"styled-components";import{jsx as r,jsxs as o,Fragment as i}from"react/jsx-runtime";import a,{createElement as l,useState as c,useRef as s,useEffect as u}from"react";import d from"react-dom";var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,h="object"==typeof f&&f&&f.Object===Object&&f,g=h,m="object"==typeof self&&self&&self.Object===Object&&self,$=g||m||Function("return this")(),y=$.Symbol,v=y,b=Object.prototype,w=b.hasOwnProperty,S=b.toString,x=v?v.toStringTag:void 0;var _=function(e){var t=w.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var o=S.call(e);return r&&(t?e[x]=n:delete e[x]),o},F=Object.prototype.toString;var k=_,B=function(e){return F.call(e)},j=y?y.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?k(e):B(e)};var H=function(e){return null!=e&&"object"==typeof e},O=C,z=H;var D=function(e){return"symbol"==typeof e||z(e)&&"[object Symbol]"==O(e)},E=p,N=D,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var R=function(e,t){if(E(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!N(e))||(L.test(e)||!A.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=C,W=T;var I,M=function(e){if(!W(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},V=$["__core-js_shared__"],U=(I=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var G=function(e){return!!U&&U in e},X=Function.prototype.toString;var Z=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=M,Y=G,J=T,K=Z,Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,oe=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!J(e)||Y(e))&&(q(e)?oe:Q).test(K(e))},ae=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=ae(e,t);return ie(n)?n:void 0},ce=le(Object,"create"),se=ce;var ue=function(){this.__data__=se?se(null):{},this.size=0};var de=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},fe=ce,pe=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(fe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pe.call(t,e)?t[e]:void 0},ge=ce,me=Object.prototype.hasOwnProperty;var $e=ce;var ye=ue,ve=de,be=he,we=function(e){var t=this.__data__;return ge?void 0!==t[e]:me.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};function xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xe.prototype.clear=ye,xe.prototype.delete=ve,xe.prototype.get=be,xe.prototype.has=we,xe.prototype.set=Se;var _e=xe;var Fe=function(){this.__data__=[],this.size=0};var ke=function(e,t){return e===t||e!=e&&t!=t},Be=ke;var je=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},Ce=je,He=Array.prototype.splice;var Oe=je;var ze=je;var De=je;var Ee=Fe,Ne=function(e){var t=this.__data__,n=Ce(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=Oe(t,e);return n<0?void 0:t[n][1]},Le=function(e){return ze(this.__data__,e)>-1},Re=function(e,t){var n=this.__data__,r=De(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ee,Te.prototype.delete=Ne,Te.prototype.get=Ae,Te.prototype.has=Le,Te.prototype.set=Re;var Pe=Te,We=le($,"Map"),Ie=_e,Me=Pe,Ve=We;var Ue=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ge=function(e,t){var n=e.__data__;return Ue(t)?n["string"==typeof t?"string":"hash"]:n.map},Xe=Ge;var Ze=Ge;var qe=Ge;var Ye=Ge;var Je=function(){this.size=0,this.__data__={hash:new Ie,map:new(Ve||Me),string:new Ie}},Ke=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},Qe=function(e){return Ze(this,e).get(e)},et=function(e){return qe(this,e).has(e)},tt=function(e,t){var n=Ye(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=Je,nt.prototype.delete=Ke,nt.prototype.get=Qe,nt.prototype.has=et,nt.prototype.set=tt;var rt=nt,ot=rt;function it(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(it.Cache||ot),n}it.Cache=ot;var at=it;var lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ct=/\\(\\)?/g,st=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lt,(function(e,n,r,o){t.push(r?o.replace(ct,"$1"):n||e)})),t}));var ut=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},dt=p,ft=D,pt=y?y.prototype:void 0,ht=pt?pt.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(dt(t))return ut(t,e)+"";if(ft(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},mt=gt;var $t=p,yt=R,vt=st,bt=function(e){return null==e?"":mt(e)};var wt=function(e,t){return $t(e)?e:yt(e,t)?[e]:vt(bt(e))},St=D;var xt=function(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},_t=wt,Ft=xt;var kt=function(e,t){for(var n=0,r=(t=_t(t,e)).length;null!=e&&n<r;)e=e[Ft(t[n++])];return n&&n==r?e:void 0},Bt=kt;var jt=function(e,t,n){var r=null==e?void 0:Bt(e,t);return void 0===r?n:r};const Ct=(e,t,n)=>t?jt(n,t)||jt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return jt(e.collections,n)};var Ot;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(Ot||(Ot={}));const zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Ht(zt,n[Ot.colorScheme]);return n.options&&n.options.color?Ct(r,e,n.options.color):Ct(r,e)},Et={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")}}},Nt=e.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Et.Primary};
`,At=e=>r(Nt,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:r("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),Lt=e=>r(Nt,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:r("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Rt=e=>r(Nt,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:r("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Tt=e=>r(Nt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:r("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Pt=e=>r(Nt,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:r("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Wt=({type:e,...t})=>{switch(e){case"arrow-right":return r(At,{...t});case"info":return r(Rt,{...t});case"cross":return r(Lt,{...t});case"play":return r(Tt,{...t});case"search":return r(Pt,{...t});default:{const n=`sgds-icon sgds-icon-${e}`,o=t.className?`${n} ${t.className}`:n;return r(It,{...t,className:o})}}},It=e.span`
    font-size: 1rem;
`,Mt=e.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${Et.Neutral[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${Et.Neutral[7]};
    }
`,Vt=a.forwardRef((({children:e,iconType:t,...n},o)=>{let i;if(e)i=e;else{if(!t)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;i=r(Wt,{type:t})}return r(Mt,{ref:o,...n,children:i})})),Ut={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gt=e=>Object.keys(Ut).reduce(((t,n)=>{const r=Ut[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Xt=Gt("max-width"),Zt=(Gt("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),qt=e.div`
    position: ${e=>e.fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Yt=e.nav`
    height: ${e=>e.compress?Qt.compress:Qt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Zt};

    ${Xt.tablet} {
        height: 3.5rem;
    }
`,Jt=e.div`
    display: flex;
    height: 100%;
`,Kt=e(Vt)`
    display: none;

    ${Xt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
        background: transparent;
        outline-style: none;

        span {
            font-size: 1.5rem;
            color: ${Et.Neutral[1]};
        }

        :active,
        :focus {
            background: transparent;
        }
    }

    ${Xt.mobileS} {
        span {
            font-size: 1.25rem;
        }
    }
`,Qt={notCompress:6,compress:4},en=a.forwardRef(((e,t)=>{const{children:n,"data-testid":o="container",type:i="flex",...a}=e;return r(tn,{ref:t,"data-testid":o,type:i,...a,children:n})})),tn=e.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;

    /* Max width restrictions */
    max-width: 1344px;

    ${Xt.desktopM} {
        max-width: 1152px;
    }

    ${Xt.tablet} {
        max-width: 960px;
    }

    ${Xt.mobileL} {
        width: 100%;
        max-width: unset;
    }

    ${e=>"grid"===e.type?t`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    height: auto;

                    ${Xt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Xt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `:t`
                    display: flex;
                    height: auto;
                `}
`,nn=a.forwardRef(((e,t)=>{const{children:n,"data-testid":o="section",...i}=e;return r(rn,{ref:t,"data-testid":o,...i,children:n})})),rn=e.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,on=a.forwardRef(((e,t)=>{const{children:n,"data-testid":o="content",className:i,type:a="flex",...l}=e;return r(nn,{ref:t,"data-testid":o,className:i,...l,children:r(en,{"data-testid":`${o}-container`,type:a,"data-id":"container",children:n})})})),an={Section:nn,Container:en,Content:on},ln=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),cn=(e,t,n)=>{const r=t.className||t.class,o=n.className||n.class,i=dn(e),a=dn(r?r.split(" "):[]),l=dn(o?o.split(" "):[]),c=[];return i.forEach((e=>{a.has(e)?(c.push(e),a.delete(e)):l.has(e)||c.push(e)})),a.forEach((e=>c.push(e))),c.join(" ")},sn=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let n=t in document;if(!n){const e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},un=(e,t,n)=>{const r=e.__events||(e.__events={}),o=r[t];o&&e.removeEventListener(t,o),e.addEventListener(t,r[t]=function(e){n&&n.call(this,e)})},dn=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},fn=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))};var pn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const hn=(e,t,n,r)=>{void 0!==r&&r();const o=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const i=class extends a.Component{constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){((e,t,n={})=>{if(e instanceof Element){const r=cn(e.classList,t,n);""!==r&&(e.className=r),Object.keys(t).forEach((n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const r=n.substring(2),o=r[0].toLowerCase()+r.substring(1);sn(o)||un(e,o,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(ln(n),t[n])}))}})(this.componentEl,this.props,e)}render(){const t=this.props,{children:r,forwardedRef:o,style:i,className:a,ref:c}=t,s=pn(t,["children","forwardedRef","style","className","ref"]);let u=Object.keys(s).reduce(((e,t)=>{const n=s[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const r=t.substring(2).toLowerCase();"undefined"!=typeof document&&sn(r)&&(e[t]=n)}else{const r=typeof n;"string"!==r&&"boolean"!==r&&"number"!==r||(e[ln(t)]=n)}return e}),{});n&&(u=n(this.props,u));const d=Object.assign(Object.assign({},u),{ref:fn(o,this.setComponentElRef),style:i});return l(e,d,r)}static get displayName(){return o}};return t&&(i.contextType=t),((e,t)=>{const n=(t,n)=>a.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,a.forwardRef(n)})(i,o)};var gn,mn,$n,yn,vn=(gn=function(e,t){return gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},gn(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}gn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),bn=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,l)}c((r=r.apply(e,t||[])).next())}))},wn=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Sn=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},xn=!1,_n=!1,Fn="undefined"!=typeof window?window:{},kn=Fn.document||{head:{}},Bn={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},jn=function(e){return Promise.resolve(e)},Cn=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),Hn=new WeakMap,On=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=zn(t),i=pr.get(o);if(e=11===e.nodeType?e:kn,i)if("string"==typeof i){e=e.head||e;var a=Hn.get(e),l=void 0;a||Hn.set(e,a=new Set),a.has(o)||((l=kn.createElement("style")).innerHTML=i,e.insertBefore(l,e.querySelector("link")),a&&a.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=Sn(Sn([],e.adoptedStyleSheets,!0),[i],!1));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},zn=function(e,t){return"sc-"+e.$tagName$},Dn={},En=function(e){return"object"===(e=typeof e)||"function"===e},Nn=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null};return n},An={},Ln=function(e,t,n,r,o,i){if(n!==r){var a=sr(e,t),l=t.toLowerCase();if("class"===t){var c=e.classList,s=Tn(n),u=Tn(r);c.remove.apply(c,s.filter((function(e){return e&&!u.includes(e)}))),c.add.apply(c,u.filter((function(e){return e&&!s.includes(e)})))}else if(a||"o"!==t[0]||"n"!==t[1]){var d=En(r);if((a||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var f=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==f||(e[t]=f)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!a||4&i||o)&&!d&&(r=!0===r?"":r,e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):sr(Fn,l)?l.slice(2):l[2]+t.slice(3),n&&Bn.rel(e,t,n,!1),r&&Bn.ael(e,t,r,!1)}},Rn=/\s/,Tn=function(e){return e?e.split(Rn):[]},Pn=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||Dn,a=t.$attrs$||Dn;for(r in i)r in a||Ln(o,r,i[r],void 0,n,t.$flags$);for(r in a)Ln(o,r,i[r],a[r],n,t.$flags$)},Wn=function(e,t,n,r){var o,i,a=t.$children$[n],l=0;if(null!==a.$text$)o=a.$elm$=kn.createTextNode(a.$text$);else{if(xn||(xn="svg"===a.$tag$),o=a.$elm$=kn.createElementNS(xn?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a.$tag$),xn&&"foreignObject"===a.$tag$&&(xn=!1),Pn(null,a,xn),function(e){return null!=e}(mn)&&o["s-si"]!==mn&&o.classList.add(o["s-si"]=mn),a.$children$)for(l=0;l<a.$children$.length;++l)(i=Wn(e,a,l))&&o.appendChild(i);"svg"===a.$tag$?xn=!1:"foreignObject"===o.tagName&&(xn=!0)}return o},In=function(e,t,n,r,o,i){var a,l=e;for(l.shadowRoot&&l.tagName===$n&&(l=l.shadowRoot);o<=i;++o)r[o]&&(a=Wn(null,n,o))&&(r[o].$elm$=a,l.insertBefore(a,t))},Mn=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&r.$elm$.remove()},Vn=function(e,t){return e.$tag$===t.$tag$},Un=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?(Pn(e,t,xn="svg"===i||"foreignObject"!==i&&xn),null!==r&&null!==o?function(e,t,n,r){for(var o,i=0,a=0,l=t.length-1,c=t[0],s=t[l],u=r.length-1,d=r[0],f=r[u];i<=l&&a<=u;)null==c?c=t[++i]:null==s?s=t[--l]:null==d?d=r[++a]:null==f?f=r[--u]:Vn(c,d)?(Un(c,d),c=t[++i],d=r[++a]):Vn(s,f)?(Un(s,f),s=t[--l],f=r[--u]):Vn(c,f)?(Un(c,f),e.insertBefore(c.$elm$,s.$elm$.nextSibling),c=t[++i],f=r[--u]):Vn(s,d)?(Un(s,d),e.insertBefore(s.$elm$,c.$elm$),s=t[--l],d=r[++a]):(o=Wn(t&&t[a],n,a),d=r[++a],o&&c.$elm$.parentNode.insertBefore(o,c.$elm$));i>l?In(e,null==r[u+1]?null:r[u+1].$elm$,n,r,a,u):a>u&&Mn(t,i,l)}(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),In(n,null,t,o,0,o.length-1)):null!==r&&Mn(r,0,r.length-1),xn&&"svg"===i&&(xn=!1)):e.$text$!==a&&(n.data=a)},Gn=function(e,t){var n=e.$hostElement$,r=e.$vnode$||Nn(null,null),o=function(e){return e&&e.$tag$===An}(t)?t:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,i=!1,a=!1,l=[],c=function(t){for(var n=0;n<t.length;n++)o=t[n],Array.isArray(o)?c(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof e&&!En(o))&&(o=String(o)),i&&a?l[l.length-1].$text$+=o:l.push(i?Nn(null,o):o),a=i)};if(c(n),t){var s=t.className||t.class;s&&(t.class="object"!=typeof s?s:Object.keys(s).filter((function(e){return s[e]})).join(" "))}var u=Nn(e,null);return u.$attrs$=t,l.length>0&&(u.$children$=l),u}(null,null,t);$n=n.tagName,o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=r.$elm$=n.shadowRoot||n,mn=n["s-sc"],Un(r,o)},Xn=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},Zn=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){Xn(e,e.$ancestorComponent$);return vr((function(){return qn(e,t)}))}e.$flags$|=512},qn=function(e,t){var n=(e.$cmpMeta$.$tagName$,function(){}),r=e.$lazyInstance$;return n(),er(undefined,(function(){return Yn(e,r,t)}))},Yn=function(e,t,n){return bn(void 0,void 0,void 0,(function(){var r,o,i,a,l,c;return wn(this,(function(s){return r=e.$hostElement$,e.$cmpMeta$.$tagName$,o=function(){},i=r["s-rc"],n&&On(e),e.$cmpMeta$.$tagName$,a=function(){},Jn(e,t),i&&(i.map((function(e){return e()})),r["s-rc"]=void 0),a(),o(),l=r["s-p"],c=function(){return Kn(e)},0===l.length?c():(Promise.all(l).then(c),e.$flags$|=4,l.length=0),[2]}))}))},Jn=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,Gn(e,t)}catch(t){ur(t,e.$hostElement$)}return null},Kn=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$ancestorComponent$;64&e.$flags$?n():(e.$flags$|=64,tr(t),n(),e.$onReadyResolve$(t),r||Qn()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&yr((function(){return Zn(e,!1)})),e.$flags$&=-517},Qn=function(e){tr(kn.documentElement),yr((function(){return function(e,t,n){var r=Bn.ce(t,n);return e.dispatchEvent(r),r}(Fn,"appload",{detail:{namespace:"sgds-masthead"}})}))},er=function(e,t){return e&&e.then?e.then(t):t()},tr=function(e){return e.classList.add("hydrated")},nr=function(e,t,n,r){var o=lr(e),i=o.$instanceValues$.get(t),a=o.$flags$,l=o.$lazyInstance$;n=function(e,t){return null==e||En(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?String(e):e}(n,r.$members$[t][0]);var c=Number.isNaN(i)&&Number.isNaN(n);8&a&&void 0!==i||!(n!==i&&!c)||(o.$instanceValues$.set(t,n),l&&2==(18&a)&&Zn(o,!1))},rr=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],i=e[1][0];(31&i||2&n&&32&i)&&Object.defineProperty(o,r,{get:function(){return function(e,t){return lr(e).$instanceValues$.get(t)}(this,r)},set:function(e){nr(this,r,e,t)},configurable:!0,enumerable:!0})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;Bn.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){return e[0],15&e[1][0]})).map((function(e){var t=e[0],n=e[1][1]||t;return i.set(n,t),n}))}}return e},or=function(e,t,n,r,o){return bn(void 0,void 0,void 0,(function(){var e,r,i,a,l,c,s;return wn(this,(function(u){switch(u.label){case 0:return 0!=(32&t.$flags$)?[3,3]:(t.$flags$|=32,(o=fr(n)).then?(e=function(){},[4,o]):[3,2]);case 1:o=u.sent(),e(),u.label=2;case 2:o.isProxied||(rr(o,n,2),o.isProxied=!0),n.$tagName$,r=function(){},t.$flags$|=8;try{new o(t)}catch(e){ur(e)}t.$flags$&=-9,r(),o.style&&(i=o.style,a=zn(n),pr.has(a)||(n.$tagName$,l=function(){},function(e,t,n){var r=pr.get(e);Cn&&n?(r=r||new CSSStyleSheet).replace(t):r=t,pr.set(e,r)}(a,i,!!(1&n.$flags$)),l())),u.label=3;case 3:return c=t.$ancestorComponent$,s=function(){return Zn(t,!0)},c&&c["s-rc"]?c["s-rc"].push(s):s(),[2]}}))}))},ir=function(e,t){void 0===t&&(t={});var n,r=function(){},o=[],i=t.exclude||[],a=Fn.customElements,l=kn.head,c=l.querySelector("meta[charset]"),s=kn.createElement("style"),u=[],d=!0;Object.assign(Bn,t),Bn.$resourcesUrl$=new URL(t.resourcesUrl||"./",kn.baseURI).href,e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2];var l=r.$tagName$,c=function(e){function t(t){var n=e.call(this,t)||this;return cr(t=n,r),1&r.$flags$&&t.attachShadow({mode:"open"}),n}return vn(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),d?u.push(this):Bn.jmp((function(){return function(e){if(0==(1&Bn.$flags$)){var t=lr(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(!(1&t.$flags$)){t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){Xn(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}})),or(0,t,n)}r()}}(e)}))},t.prototype.disconnectedCallback=function(){var e=this;Bn.jmp((function(){return function(e){0==(1&Bn.$flags$)&&lr(e)}(e)}))},t.prototype.componentOnReady=function(){return lr(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleId$=e[0],i.includes(l)||a.get(l)||(o.push(l),a.define(l,rr(c,r,1)))}))})),s.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",s.setAttribute("data-styles",""),l.insertBefore(s,c?c.nextSibling:l.firstChild),d=!1,u.length?u.map((function(e){return e.connectedCallback()})):Bn.jmp((function(){return n=setTimeout(Qn,30)})),r()},ar=new WeakMap,lr=function(e){return ar.get(e)},cr=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],ar.set(e,n)},sr=function(e,t){return t in e},ur=function(e,t){return(0,console.error)(e,t)},dr=new Map,fr=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,i=dr.get(o);return i?i[r]:import("./".concat(o,".entry.js").concat("")).then((function(e){return dr.set(o,e),e[r]}),ur)},pr=new Map,hr=[],gr=[],mr=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ur(e)}e.length=0},$r=function(){mr(hr),mr(gr),(_n=hr.length>0)&&Bn.raf($r)},yr=function(e){return jn().then(e)},vr=function(e,t){return function(n){e.push(n),_n||(_n=!0,t&&4&Bn.$flags$?yr($r):Bn.raf($r))}}(gr,!0);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():jn().then((function(){return ir([["sgds-masthead",[[1,"sgds-masthead",{sgCrest:[1,"sg-crest"],fluid:[4],isOpen:[32]}]]]],yn)}));const br=hn("sgds-masthead"),wr=()=>r(Sr,{children:r(br,{})}),Sr=e.div`
    background: hsl(0, 0%, 94%);
    padding: 0 1rem;
`,xr=e.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return t`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,_r=e.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let n="";return e.$show?n+=t`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:n+=t`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(n+=t`
                transition: none;
            `),n}}
`,Fr=({show:e=!1,rootId:t,onOverlayClick:n,children:o,backgroundOpacity:i,backgroundBlur:l=!0,disableTransition:f=!1,enableOverlayClick:p=!1,zIndex:h,id:g})=>{const[m,$]=c(null),[y,v]=c(),b=s(),w=s(null),S=o&&a.cloneElement(o,{ref:w}),x=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";u((()=>{if(e){const e=k();if(_(e),!e){const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}}else if(!b.current){const e=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(e)}}),[e]),u((()=>{$(F());const e=k();return _(e),e||B(),()=>{j("remove")}}),[]);const _=e=>{b.current=e,v(e)},F=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>document.body.classList.contains(Br),B=()=>{if(!document.getElementById(kr)){const e=document.createElement("style");e.id=kr;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Br} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Br}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(Br);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Br):document.body.classList.add(Br)},C=e=>{e.preventDefault();const t=w.current?.firstChild;t&&t.contains(e.target)||n&&p&&n()};return m?d.createPortal(r(xr,{id:x,"data-testid":x,$show:e,zIndex:h,$stacked:y,children:o&&r(_r,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:i||(y?.5:.8),$backgroundBlur:l,$disableTransition:f,$enableOverlayClick:p,onClick:C,children:S})}),m):null},kr="lifesg-ds-overlay-stylesheet",Br="lifesg-ds-overlay-open",jr=e.a`
    display: flex;
    justify-content: center;
    margin-right: 2rem;

    img {
        width: auto;
        height: ${e=>e.$compress?1.375:2}rem;
        transition: ${Zt};

        ${Xt.tablet} {
            height: 1.375rem;
        }
    }
`,Cr=({resources:e,compress:t,onClick:n,"data-testid":o="navbar-brand"})=>r(jr,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:n,$compress:t,tabIndex:0,"data-testid":o,children:r("img",{src:e.logoSrc,alt:e.brandName+"-app-logo"})}),Hr=e.div`
    display: none;

    ${Xt.tablet} {
        display: flex;
    }
`,Or=e.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?t`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:t`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const n=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${n} * 100);
        `}}

	${Xt.tablet} {
        width: 75%;
    }

    ${Xt.mobileL} {
        width: 100%;
    }
`,zr=e.div`
    display: flex;
    flex-direction: column;
`,Dr=e.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1rem 2rem;
`,Er=e(Vt)`
    position: absolute;
    right: -0.5rem;
    bottom: 0.65rem;

    span {
        color: ${Et.Neutral[1]};
    }

    :active,
    :focus {
        background: transparent;

        span {
            color: ${Et.Primary};
        }
    }
`,Nr=e(Wt)`
    font-size: 2rem;
    margin-right: -0.25rem;
`,Ar=a.forwardRef(((e,t)=>{const{show:n,resources:i,children:a,onClose:l,onBrandClick:s}=e,[d,f]=c(0);u((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;f(e)}};return r(Hr,{ref:t,"data-testid":"drawer",children:r(Or,{$show:n,$viewHeight:d,children:o(zr,{children:[o(Dr,{children:[r(Cr,{resources:i,onClick:s,"data-testid":"drawer__brand"}),r(Er,{onClick:l,"aria-label":"Close nav menu",children:r(Nr,{type:"cross"})})]}),a]})})})}));var Lr=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Rr=Pe;var Tr=Pe,Pr=We,Wr=rt;var Ir=Pe,Mr=function(){this.__data__=new Rr,this.size=0},Vr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Ur=function(e){return this.__data__.get(e)},Gr=function(e){return this.__data__.has(e)},Xr=function(e,t){var n=this.__data__;if(n instanceof Tr){var r=n.__data__;if(!Pr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Wr(r)}return n.set(e,t),this.size=n.size,this};function Zr(e){var t=this.__data__=new Ir(e);this.size=t.size}Zr.prototype.clear=Mr,Zr.prototype.delete=Vr,Zr.prototype.get=Ur,Zr.prototype.has=Gr,Zr.prototype.set=Xr;var qr=Zr;var Yr=rt,Jr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Kr=function(e){return this.__data__.has(e)};function Qr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Yr;++t<n;)this.add(e[t])}Qr.prototype.add=Qr.prototype.push=Jr,Qr.prototype.has=Kr;var eo=Qr,to=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},no=function(e,t){return e.has(t)};var ro=function(e,t,n,r,o,i){var a=1&n,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=i.get(e),u=i.get(t);if(s&&u)return s==t&&u==e;var d=-1,f=!0,p=2&n?new eo:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var h=e[d],g=t[d];if(r)var m=a?r(g,h,d,t,e,i):r(h,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(p){if(!to(t,(function(e,t){if(!no(p,t)&&(h===e||o(h,e,n,r,i)))return p.push(t)}))){f=!1;break}}else if(h!==g&&!o(h,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var oo=$.Uint8Array,io=ke,ao=ro,lo=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},co=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},so=y?y.prototype:void 0,uo=so?so.valueOf:void 0;var fo=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new oo(e),new oo(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return io(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=lo;case"[object Set]":var c=1&r;if(l||(l=co),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;r|=2,a.set(e,t);var u=ao(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(uo)return uo.call(e)==uo.call(t)}return!1};var po=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},ho=p;var go=function(e,t,n){var r=t(e);return ho(e)?r:po(r,n(e))};var mo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},$o=function(){return[]},yo=Object.prototype.propertyIsEnumerable,vo=Object.getOwnPropertySymbols,bo=vo?function(e){return null==e?[]:(e=Object(e),mo(vo(e),(function(t){return yo.call(e,t)})))}:$o;var wo=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},So=C,xo=H;var _o=function(e){return xo(e)&&"[object Arguments]"==So(e)},Fo=H,ko=Object.prototype,Bo=ko.hasOwnProperty,jo=ko.propertyIsEnumerable,Co=_o(function(){return arguments}())?_o:function(e){return Fo(e)&&Bo.call(e,"callee")&&!jo.call(e,"callee")},Ho={exports:{}};var Oo=function(){return!1};!function(e,t){var n=$,r=Oo,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(Ho,Ho.exports);var zo=/^(?:0|[1-9]\d*)$/;var Do=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&zo.test(e))&&e>-1&&e%1==0&&e<t};var Eo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},No=C,Ao=Eo,Lo=H,Ro={};Ro["[object Float32Array]"]=Ro["[object Float64Array]"]=Ro["[object Int8Array]"]=Ro["[object Int16Array]"]=Ro["[object Int32Array]"]=Ro["[object Uint8Array]"]=Ro["[object Uint8ClampedArray]"]=Ro["[object Uint16Array]"]=Ro["[object Uint32Array]"]=!0,Ro["[object Arguments]"]=Ro["[object Array]"]=Ro["[object ArrayBuffer]"]=Ro["[object Boolean]"]=Ro["[object DataView]"]=Ro["[object Date]"]=Ro["[object Error]"]=Ro["[object Function]"]=Ro["[object Map]"]=Ro["[object Number]"]=Ro["[object Object]"]=Ro["[object RegExp]"]=Ro["[object Set]"]=Ro["[object String]"]=Ro["[object WeakMap]"]=!1;var To=function(e){return Lo(e)&&Ao(e.length)&&!!Ro[No(e)]};var Po=function(e){return function(t){return e(t)}},Wo={exports:{}};!function(e,t){var n=h,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Wo,Wo.exports);var Io=To,Mo=Po,Vo=Wo.exports,Uo=Vo&&Vo.isTypedArray,Go=Uo?Mo(Uo):Io,Xo=wo,Zo=Co,qo=p,Yo=Ho.exports,Jo=Do,Ko=Go,Qo=Object.prototype.hasOwnProperty;var ei=function(e,t){var n=qo(e),r=!n&&Zo(e),o=!n&&!r&&Yo(e),i=!n&&!r&&!o&&Ko(e),a=n||r||o||i,l=a?Xo(e.length,String):[],c=l.length;for(var s in e)!t&&!Qo.call(e,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Jo(s,c))||l.push(s);return l},ti=Object.prototype;var ni=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ti)};var ri=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),oi=ni,ii=ri,ai=Object.prototype.hasOwnProperty;var li=M,ci=Eo;var si=ei,ui=function(e){if(!oi(e))return ii(e);var t=[];for(var n in Object(e))ai.call(e,n)&&"constructor"!=n&&t.push(n);return t},di=function(e){return null!=e&&ci(e.length)&&!li(e)};var fi=function(e){return di(e)?si(e):ui(e)},pi=go,hi=bo,gi=fi;var mi=function(e){return pi(e,gi,hi)},$i=Object.prototype.hasOwnProperty;var yi=function(e,t,n,r,o,i){var a=1&n,l=mi(e),c=l.length;if(c!=mi(t).length&&!a)return!1;for(var s=c;s--;){var u=l[s];if(!(a?u in t:$i.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var p=!0;i.set(e,t),i.set(t,e);for(var h=a;++s<c;){var g=e[u=l[s]],m=t[u];if(r)var $=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===$?g===m||o(g,m,n,r,i):$)){p=!1;break}h||(h="constructor"==u)}if(p&&!h){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},vi=le($,"DataView"),bi=We,wi=le($,"Promise"),Si=le($,"Set"),xi=le($,"WeakMap"),_i=C,Fi=Z,ki=Fi(vi),Bi=Fi(bi),ji=Fi(wi),Ci=Fi(Si),Hi=Fi(xi),Oi=_i;(vi&&"[object DataView]"!=Oi(new vi(new ArrayBuffer(1)))||bi&&"[object Map]"!=Oi(new bi)||wi&&"[object Promise]"!=Oi(wi.resolve())||Si&&"[object Set]"!=Oi(new Si)||xi&&"[object WeakMap]"!=Oi(new xi))&&(Oi=function(e){var t=_i(e),n="[object Object]"==t?e.constructor:void 0,r=n?Fi(n):"";if(r)switch(r){case ki:return"[object DataView]";case Bi:return"[object Map]";case ji:return"[object Promise]";case Ci:return"[object Set]";case Hi:return"[object WeakMap]"}return t});var zi=qr,Di=ro,Ei=fo,Ni=yi,Ai=Oi,Li=p,Ri=Ho.exports,Ti=Go,Pi="[object Object]",Wi=Object.prototype.hasOwnProperty;var Ii=function(e,t,n,r,o,i){var a=Li(e),l=Li(t),c=a?"[object Array]":Ai(e),s=l?"[object Array]":Ai(t),u=(c="[object Arguments]"==c?Pi:c)==Pi,d=(s="[object Arguments]"==s?Pi:s)==Pi,f=c==s;if(f&&Ri(e)){if(!Ri(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new zi),a||Ti(e)?Di(e,t,n,r,o,i):Ei(e,t,c,n,r,o,i);if(!(1&n)){var p=u&&Wi.call(e,"__wrapped__"),h=d&&Wi.call(t,"__wrapped__");if(p||h){var g=p?e.value():e,m=h?t.value():t;return i||(i=new zi),o(g,m,n,r,i)}}return!!f&&(i||(i=new zi),Ni(e,t,n,r,o,i))},Mi=H;var Vi=function e(t,n,r,o,i){return t===n||(null==t||null==n||!Mi(t)&&!Mi(n)?t!=t&&n!=n:Ii(t,n,r,o,e,i))},Ui=qr,Gi=Vi;var Xi=T;var Zi=function(e){return e==e&&!Xi(e)},qi=Zi,Yi=fi;var Ji=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Ki=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var c=(l=n[o])[0],s=e[c],u=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var d=new Ui;if(r)var f=r(s,u,c,e,t,d);if(!(void 0===f?Gi(u,s,3,r,d):f))return!1}}return!0},Qi=function(e){for(var t=Yi(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,qi(o)]}return t},ea=Ji;var ta=wt,na=Co,ra=p,oa=Do,ia=Eo,aa=xt;var la=function(e,t){return null!=e&&t in Object(e)},ca=function(e,t,n){for(var r=-1,o=(t=ta(t,e)).length,i=!1;++r<o;){var a=aa(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&ia(o)&&oa(a,o)&&(ra(e)||na(e))};var sa=Vi,ua=jt,da=function(e,t){return null!=e&&ca(e,t,la)},fa=R,pa=Zi,ha=Ji,ga=xt;var ma=kt;var $a=function(e){return function(t){return null==t?void 0:t[e]}},ya=function(e){return function(t){return ma(t,e)}},va=R,ba=xt;var wa=function(e){var t=Qi(e);return 1==t.length&&t[0][2]?ea(t[0][0],t[0][1]):function(n){return n===e||Ki(n,e,t)}},Sa=function(e,t){return fa(e)&&pa(t)?ha(ga(e),t):function(n){var r=ua(n,e);return void 0===r&&r===t?da(n,e):sa(t,r,3)}},xa=function(e){return e},_a=p,Fa=function(e){return va(e)?$a(ba(e)):ya(e)};var ka=/\s/;var Ba=function(e){for(var t=e.length;t--&&ka.test(e.charAt(t)););return t},ja=/^\s+/;var Ca=function(e){return e?e.slice(0,Ba(e)+1).replace(ja,""):e},Ha=T,Oa=D,za=/^[-+]0x[0-9a-f]+$/i,Da=/^0b[01]+$/i,Ea=/^0o[0-7]+$/i,Na=parseInt;var Aa=function(e){if("number"==typeof e)return e;if(Oa(e))return NaN;if(Ha(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ha(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ca(e);var n=Da.test(e);return n||Ea.test(e)?Na(e.slice(2),n?2:8):za.test(e)?NaN:+e};var La=function(e){return e?Infinity===(e=Aa(e))||-Infinity===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ra=Lr,Ta=function(e){return"function"==typeof e?e:null==e?xa:"object"==typeof e?_a(e)?Sa(e[0],e[1]):wa(e):Fa(e)},Pa=function(e){var t=La(e),n=t%1;return t==t?n?t-n:t:0},Wa=Math.max;var Ia=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Pa(n);return o<0&&(o=Wa(r+o,0)),Ra(e,Ta(t),o)};const Ma=e.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Va=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ua=e.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Et.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Va} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ga=e(Ua)`
    animation-delay: -0.45s;
`,Xa=e(Ua)`
    animation-delay: -0.3s;
`,Za=e(Ua)`
    animation-delay: -0.15s;
`,qa={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ya={collections:{base:{D1:{fontFamily:qa.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:qa.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:qa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:qa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:qa.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:qa.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:qa.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:qa.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:qa.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:qa.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:qa.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:qa.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:qa.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:qa.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ja=e=>t=>{const n=t.theme,r=Ht(Ya,n[Ot.textStyleScheme]);return n.options&&n.options.textStyle?Ct(r,e,n.options.textStyle):Ct(r,e)},Ka={D1:{fontFamily:Ja("D1.fontFamily"),fontSize:Ja("D1.fontSize"),fontWeight:Ja("D1.fontWeight"),lineHeight:Ja("D1.lineHeight"),letterSpacing:Ja("D1.letterSpacing")},D2:{fontFamily:Ja("D2.fontFamily"),fontSize:Ja("D2.fontSize"),fontWeight:Ja("D2.fontWeight"),lineHeight:Ja("D2.lineHeight"),letterSpacing:Ja("D2.letterSpacing")},D3:{fontFamily:Ja("D3.fontFamily"),fontSize:Ja("D3.fontSize"),fontWeight:Ja("D3.fontWeight"),lineHeight:Ja("D3.lineHeight"),letterSpacing:Ja("D3.letterSpacing")},D4:{fontFamily:Ja("D4.fontFamily"),fontSize:Ja("D4.fontSize"),fontWeight:Ja("D4.fontWeight"),lineHeight:Ja("D4.lineHeight"),letterSpacing:Ja("D4.letterSpacing")},DBody:{fontFamily:Ja("DBody.fontFamily"),fontSize:Ja("DBody.fontSize"),fontWeight:Ja("DBody.fontWeight"),lineHeight:Ja("DBody.lineHeight"),letterSpacing:Ja("DBody.letterSpacing")},H1:{fontFamily:Ja("H1.fontFamily"),fontSize:Ja("H1.fontSize"),fontWeight:Ja("H1.fontWeight"),lineHeight:Ja("H1.lineHeight"),letterSpacing:Ja("H1.letterSpacing")},H2:{fontFamily:Ja("H2.fontFamily"),fontSize:Ja("H2.fontSize"),fontWeight:Ja("H2.fontWeight"),lineHeight:Ja("H2.lineHeight"),letterSpacing:Ja("H2.letterSpacing")},H3:{fontFamily:Ja("H3.fontFamily"),fontSize:Ja("H3.fontSize"),fontWeight:Ja("H3.fontWeight"),lineHeight:Ja("H3.lineHeight"),letterSpacing:Ja("H3.letterSpacing")},H4:{fontFamily:Ja("H4.fontFamily"),fontSize:Ja("H4.fontSize"),fontWeight:Ja("H4.fontWeight"),lineHeight:Ja("H4.lineHeight"),letterSpacing:Ja("H4.letterSpacing")},H5:{fontFamily:Ja("H5.fontFamily"),fontSize:Ja("H5.fontSize"),fontWeight:Ja("H5.fontWeight"),lineHeight:Ja("H5.lineHeight"),letterSpacing:Ja("H5.letterSpacing")},H6:{fontFamily:Ja("H6.fontFamily"),fontSize:Ja("H6.fontSize"),fontWeight:Ja("H6.fontWeight"),lineHeight:Ja("H6.lineHeight"),letterSpacing:Ja("H6.letterSpacing")},Body:{fontFamily:Ja("Body.fontFamily"),fontSize:Ja("Body.fontSize"),fontWeight:Ja("Body.fontWeight"),lineHeight:Ja("Body.lineHeight"),letterSpacing:Ja("Body.letterSpacing")},BodySmall:{fontFamily:Ja("BodySmall.fontFamily"),fontSize:Ja("BodySmall.fontSize"),fontWeight:Ja("BodySmall.fontWeight"),lineHeight:Ja("BodySmall.lineHeight"),letterSpacing:Ja("BodySmall.letterSpacing")},XSmall:{fontFamily:Ja("XSmall.fontFamily"),fontSize:Ja("XSmall.fontSize"),fontWeight:Ja("XSmall.fontWeight"),lineHeight:Ja("XSmall.lineHeight"),letterSpacing:Ja("XSmall.letterSpacing")}},Qa=e=>{switch(e){case 700:case"bold":return qa.Bold;case 600:case"semibold":return qa.Semibold;case 300:case"light":return qa.Light;case 400:case"regular":return qa.Regular;default:return""}},el=(e,n)=>r=>{const o=Ka[e].fontFamily(r),i=Ka[e].fontWeight(r);return Object.values(qa).includes(o)?t`
                font-family: ${Qa(n)||Qa(i)||o};
                font-weight: normal !important;
            `:t`
            font-family: ${o};
            font-weight: ${(tl(n)||i)??"normal"};
        `},tl=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nl=(e,n,r=!1)=>o=>{const i=Ka[e],a=i.fontSize(o);return t`
            ${el(e,n)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(o)||0}rem !important;
            ${t`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},rl=(e=!1,n=!1)=>n?t`
            display: block;
        `:e?t`
            display: inline;
        `:t`
            display: block;
        `;var ol;!function(n){n.D1=e.h1`
        ${e=>t`
                ${nl("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.D2=e.h1`
        ${e=>t`
                ${nl("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.D3=e.h1`
        ${e=>t`
                ${nl("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.D4=e.h1`
        ${e=>t`
                ${nl("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.DBody=e.h1`
        ${e=>t`
                ${nl("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H1=e.h1`
        ${e=>t`
                ${nl("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H2=e.h2`
        ${e=>t`
                ${nl("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H3=e.h3`
        ${e=>t`
                ${nl("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H4=e.h4`
        ${e=>t`
                ${nl("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H5=e.h5`
        ${e=>t`
                ${nl("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.H6=e.h6`
        ${e=>t`
                ${nl("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.Body=e.p`
        ${e=>t`
                ${nl("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.BodySmall=e.p`
        ${e=>t`
                ${nl("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.XSmall=e.span`
        ${e=>t`
                ${nl("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${rl(e.inline,e.paragraph)}
            `}
    `,n.Hyperlink={Default:e=>ll({...e,textStyle:"Body"}),Small:e=>ll({...e,textStyle:"BodySmall"})}}(ol||(ol={}));const il=e.a`
    ${e=>t`
            ${nl(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};
            }
        `}
`,al=e(Wt)`
    margin-left: 0.4rem;
`,ll=({external:e=!1,children:t,...n})=>o(il,{...n,children:[t,e&&r(al,{type:"external"})]});var cl;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(cl||(cl={}));const sl=e.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Primary(e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"light":return t`
                    background-color: ${Et.Neutral[8](e)};
                    border: 1px solid ${Et.Neutral[5](e)};

                    span {
                        color: ${Et.Primary(e)};
                    }
                `;case"disabled":return t`
                    background-color: ${Et.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Et.Neutral[3](e)};
                    }
                `;case"link":return t`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Et.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Et.Secondary};
                        }
                    }
                `;default:return t`
                    background-color: ${Et.Primary(e)};
                    border: 1px solid transparent;

                    ${Xt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Et.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?t`
                    height: 2.5rem;
                    span {
                        ${nl("H5","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `:t`
                    height: 3rem;
                    span {
                        ${nl("H4","semibold")}
                    }

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `}
`,ul=e((({color:e,className:t,size:n=18})=>o(Ma,{className:t,$size:n,$color:e,children:[r(Ua,{id:"inner1",$size:n-2,$borderWidth:2}),r(Ga,{id:"inner2",$size:n-2,$borderWidth:2}),r(Xa,{id:"inner3",$size:n-2,$borderWidth:2}),r(Za,{id:"inner4",$size:n-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let n;switch(e.$buttonStyle){case"secondary":case"light":case"link":n=Et.Primary(e);break;case"disabled":n=Et.Neutral[3](e);break;default:n=Et.Neutral[8](e)}return t`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${n} transparent transparent transparent;
            }
        `}}
`,dl={Default:a.forwardRef(((e,t)=>{const{children:n,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default"};return o(sl,{ref:t,"data-testid":c["data-testid"]||"button",disabled:i,...s,...c,children:[a&&r(ul,{...s}),r("span",{children:n})]})})),Small:a.forwardRef(((e,t)=>{const{children:n,disabled:i=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small"};return o(sl,{ref:t,"data-testid":c["data-testid"]||"button",disabled:i,...s,...c,children:[a&&r(ul,{...s,size:16}),r("span",{children:n})]})}))},fl=e.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;

    ${Xt.tablet} {
        display: none;
    }
`,pl=e.ul`
    display: none;
    list-style: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Xt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,hl=e.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Xt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Xt.mobileL} {
        padding: 0 1rem;
    }
`,gl=e(dl.Small)`
    ${Xt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ml=e.div`
    display: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,$l=e(ol.BodySmall)`
    margin-bottom: 0.5rem;
`,yl=e.div`
    display: flex;
`,vl=e.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Xt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Xt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,bl=({actionButtons:e,mobile:t=!1,onActionButtonClick:n})=>{const a=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},c=(t=!1)=>(t?(e=>{const t=Ia(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(e):e).map(((e,n)=>{let i;switch(e.type){case"download":i=t?(c=e.args,o(ml,{children:[r($l,{weight:"semibold",children:c&&c.children||"Download the app"}),o(yl,{children:[r(vl,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),r(vl,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:r("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):r(gl,{onClick:l(e),...e.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const o=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;i=r(gl,{...e.args,onClick:l(e),"data-testid":o});break}case"component":{const t=e.args;i=t&&t.render||null;break}default:i=null}var c;if(i)return r(hl,{children:i},`action-button-${n+1}`)}));if(e&&e.length>0){return r(t?pl:fl,{children:c(t)})}return r(i,{})},wl=e.ul`
    display: flex;
    list-style: none;

    ${Xt.tablet} {
        display: none;
    }
`,Sl=e.ul`
    display: none;
    list-style: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
    }
`,xl=e.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Xt.tablet} {
        width: 100%;

        :not(:last-of-type) {
            margin-right: 0;
        }
    }
`,_l=e(ol.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Et.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Et.Neutral[1]};
    }

    ${Xt.tablet} {
        ${e=>nl("H4",e.$selected?"bold":"regular")}
        width: 100%;
        padding: 0.625rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,Fl=e.div`
    position: absolute;
    bottom: 0;
    height: 4px;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Et.Primary};

    ${Xt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 4px;
        background-color: ${Et.Accent.Light[1]};
    }
`,kl=({items:e,selectedId:t,mobile:n=!1,onItemClick:a})=>{const l=e=>t=>{t.stopPropagation(),a(t,e)},c=(n=!1)=>e.map(((e,i)=>{const a=e.id===t,{children:c,options:s,...u}=e;return r(xl,{children:o(_l,{"data-testid":n?`link__mobile-${i+1}`:`link__${i+1}`,weight:a?n?"bold":"semibold":"regular",$selected:a,...u,onClick:l(e),...s,children:[c,a&&r(Fl,{})]})},i)}));if(e&&e.length>0){return r(i,{children:r(n?Sl:wl,{children:c(n)})})}return r(i,{})},Bl=a.forwardRef((({items:e,id:t,selectedId:n,compress:i=!1,fixed:a=!0,resources:l=jl,hideNavElements:s=!1,drawerDismissalExclusions:d=[],actionButtons:f,onItemClick:p,onActionButtonClick:h,onBrandClick:g,...m},$)=>{const[y,v]=c(!1),[b,w]=c(!1);u((()=>(_(),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_)})),[]);const S=()=>{v(!1),setTimeout((()=>{w(!1)}),550)},x=e=>y&&-1===d.indexOf(e),_=()=>{window.innerWidth<=Ut.tablet&&y&&S()},F=e=>{g&&(e.preventDefault(),g()),x("brand-click")&&S()},k=(e,t)=>{t.onClick?t.onClick(e):p&&(e.preventDefault(),p(t)),x("item-click")&&S()},B=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):h&&(e.preventDefault(),h(t)),x("item-click")&&S()},j=()=>{v(!0),w(!0)},C=()=>{x("close-button-click")&&S()};return o(qt,{ref:$,fixed:a,id:t||"navbar-wrapper","data-testid":m["data-testid"]||"navbar-wrapper",children:[r(wr,{}),o(an.Content,{children:[o(Yt,{compress:i,children:[r(Cr,{resources:l,compress:i,onClick:F,"data-testid":"main__brand"}),!s&&o(Jt,{children:[r(kl,{items:e.desktop,onItemClick:k,selectedId:n}),r(bl,{actionButtons:f&&f.desktop,onActionButtonClick:B}),r(Kt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:j,children:r(Wt,{type:"menu"})})]})]}),!s&&r(Fr,{show:b,enableOverlayClick:!0,onOverlayClick:C,children:o(Ar,{show:y,resources:l,onClose:C,onBrandClick:F,actionButtons:f,children:[r(kl,{items:e.mobile||e.desktop,onItemClick:k,selectedId:n,mobile:!0}),r(bl,{actionButtons:f&&(f?.mobile||f.desktop),onActionButtonClick:B,mobile:!0})]})})]})]})})),jl={brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"},Cl=Qt;export{Bl as Navbar,Cl as NavbarHeight};
//# sourceMappingURL=index.js.map
