import{MenuIcon as t}from"@lifesg/react-icons/menu";import e,{css as r,keyframes as n}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import f from"react-dom";import{CrossIcon as g}from"@lifesg/react-icons/cross";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function b(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v=Array.isArray,$="object"==typeof y&&y&&y.Object===Object&&y,w=$,S="object"==typeof self&&self&&self.Object===Object&&self,F=w||S||Function("return this")(),B=F.Symbol,x=B,D=Object.prototype,k=D.hasOwnProperty,A=D.toString,O=x?x.toStringTag:void 0;var E=function(t){var e=k.call(t,O),r=t[O];try{t[O]=void 0;var n=!0}catch(t){}var i=A.call(t);return n&&(e?t[O]=r:delete t[O]),i},_=Object.prototype.toString;var H=E,j=function(t){return _.call(t)},C=B?B.toStringTag:void 0;var M=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":C&&C in Object(t)?H(t):j(t)};var z=function(t){return null!=t&&"object"==typeof t},T=M,I=z;var N=function(t){return"symbol"==typeof t||I(t)&&"[object Symbol]"==T(t)},Y=v,L=N,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var R=function(t,e){if(Y(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!L(t))||(P.test(t)||!W.test(t)||null!=e&&t in Object(e))};var V=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},U=M,G=V;var J,X=function(t){if(!G(t))return!1;var e=U(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Q=F["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"";var K=function(t){return!!Z&&Z in t},q=Function.prototype.toString;var tt=function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},et=X,rt=K,nt=V,it=tt,at=/^\[object .+?Constructor\]$/,ot=Function.prototype,st=Object.prototype,lt=ot.toString,ct=st.hasOwnProperty,dt=RegExp("^"+lt.call(ct).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ut=function(t){return!(!nt(t)||rt(t))&&(et(t)?dt:at).test(it(t))},ht=function(t,e){return null==t?void 0:t[e]};var ft=function(t,e){var r=ht(t,e);return ut(r)?r:void 0},gt=ft(Object,"create"),pt=gt;var mt=function(){this.__data__=pt?pt(null):{},this.size=0};var yt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},bt=gt,vt=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(bt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return vt.call(e,t)?e[t]:void 0},wt=gt,St=Object.prototype.hasOwnProperty;var Ft=gt;var Bt=mt,xt=yt,Dt=$t,kt=function(t){var e=this.__data__;return wt?void 0!==e[t]:St.call(e,t)},At=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Ft&&void 0===e?"__lodash_hash_undefined__":e,this};function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ot.prototype.clear=Bt,Ot.prototype.delete=xt,Ot.prototype.get=Dt,Ot.prototype.has=kt,Ot.prototype.set=At;var Et=Ot;var _t=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e},jt=Ht;var Ct=function(t,e){for(var r=t.length;r--;)if(jt(t[r][0],e))return r;return-1},Mt=Ct,zt=Array.prototype.splice;var Tt=Ct;var It=Ct;var Nt=Ct;var Yt=_t,Lt=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0)&&(r==e.length-1?e.pop():zt.call(e,r,1),--this.size,!0)},Wt=function(t){var e=this.__data__,r=Tt(e,t);return r<0?void 0:e[r][1]},Pt=function(t){return It(this.__data__,t)>-1},Rt=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Vt.prototype.clear=Yt,Vt.prototype.delete=Lt,Vt.prototype.get=Wt,Vt.prototype.has=Pt,Vt.prototype.set=Rt;var Ut=Vt,Gt=ft(F,"Map"),Jt=Et,Xt=Ut,Qt=Gt;var Zt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Kt=function(t,e){var r=t.__data__;return Zt(e)?r["string"==typeof e?"string":"hash"]:r.map},qt=Kt;var te=Kt;var ee=Kt;var re=Kt;var ne=function(){this.size=0,this.__data__={hash:new Jt,map:new(Qt||Xt),string:new Jt}},ie=function(t){var e=qt(this,t).delete(t);return this.size-=e?1:0,e},ae=function(t){return te(this,t).get(t)},oe=function(t){return ee(this,t).has(t)},se=function(t,e){var r=re(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function le(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}le.prototype.clear=ne,le.prototype.delete=ie,le.prototype.get=ae,le.prototype.has=oe,le.prototype.set=se;var ce=le,de=ce;function ue(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=t.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(ue.Cache||de),r}ue.Cache=de;var he=ue;var fe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ge=/\\(\\)?/g,pe=function(t){var e=he(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(fe,(function(t,r,n,i){e.push(n?i.replace(ge,"$1"):r||t)})),e}));var me=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},ye=v,be=N,ve=B?B.prototype:void 0,$e=ve?ve.toString:void 0;var we=function t(e){if("string"==typeof e)return e;if(ye(e))return me(e,t)+"";if(be(e))return $e?$e.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},Se=we;var Fe=v,Be=R,xe=pe,De=function(t){return null==t?"":Se(t)};var ke=function(t,e){return Fe(t)?t:Be(t,e)?[t]:xe(De(t))},Ae=N;var Oe=function(t){if("string"==typeof t||Ae(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Ee=ke,_e=Oe;var He=function(t,e){for(var r=0,n=(e=Ee(e,t)).length;null!=t&&r<n;)t=t[_e(e[r++])];return r&&r==n?t:void 0},je=He;var Ce=function(t,e,r){var n=null==t?void 0:je(t,e);return void 0===n?r:n},Me=b(Ce);const ze=(t,e,r)=>e?Me(r,e)||Me(t,e):r||t,Te=(t,e)=>{const r=e||t.defaultValue;return Me(t.collections,r)};var Ie;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ie||(Ie={}));const Ne={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ye=t=>e=>{const r=e.theme,n=Te(Ne,r[Ie.colorScheme]);return r.options&&r.options.color?ze(n,t,r.options.color):ze(n,t)},Le={Brand:{1:Ye("Brand.1"),2:Ye("Brand.2"),3:Ye("Brand.3"),4:Ye("Brand.4"),5:Ye("Brand.5"),6:Ye("Brand.6")},Primary:Ye("Primary"),PrimaryDark:Ye("PrimaryDark"),Secondary:Ye("Secondary"),Accent:{Light:{1:Ye("Accent.Light.1"),2:Ye("Accent.Light.2"),3:Ye("Accent.Light.3"),4:Ye("Accent.Light.4"),5:Ye("Accent.Light.5"),6:Ye("Accent.Light.6")},Dark:{1:Ye("Accent.Dark.1"),2:Ye("Accent.Dark.2"),3:Ye("Accent.Dark.3")}},Neutral:{1:Ye("Neutral.1"),2:Ye("Neutral.2"),3:Ye("Neutral.3"),4:Ye("Neutral.4"),5:Ye("Neutral.5"),6:Ye("Neutral.6"),7:Ye("Neutral.7"),8:Ye("Neutral.8")},Validation:{Green:{Text:Ye("Validation.Green.Text"),Icon:Ye("Validation.Green.Icon"),Border:Ye("Validation.Green.Border"),Background:Ye("Validation.Green.Background")},Orange:{Text:Ye("Validation.Orange.Text"),Icon:Ye("Validation.Orange.Icon"),Border:Ye("Validation.Orange.Border"),Background:Ye("Validation.Orange.Background"),Badge:Ye("Validation.Orange.Badge")},Red:{Text:Ye("Validation.Red.Text"),Icon:Ye("Validation.Red.Icon"),Border:Ye("Validation.Red.Border"),Background:Ye("Validation.Red.Background")},Blue:{Text:Ye("Validation.Blue.Text"),Icon:Ye("Validation.Blue.Icon"),Border:Ye("Validation.Blue.Border"),Background:Ye("Validation.Blue.Background")}},Shadow:{Accent:Ye("Shadow.Accent"),Red:Ye("Shadow.Red"),Elevation:Ye("Shadow.Elevation")}},We={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pe=t=>Object.keys(We).reduce(((e,r)=>{const n=We[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),Re=Pe("max-width");Pe("min-width");function Ve(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const Ue=e.button`
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&r`
                background-color: ${Le.Neutral[7]};
            `}
    }
`,Ge=s.forwardRef(((t,e)=>{var{children:r,focusHighlight:n=!0,focusOutline:a="none",type:o="button"}=t,s=Ve(t,["children","focusHighlight","focusOutline","type"]);return i(Ue,Object.assign({ref:e,$outline:a,$highlight:n,type:o},s,{children:r}))})),Je="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Xe={notCompress:6,compress:4},Qe=e.div`
    position: ${t=>t.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Ze=e.nav`
    height: ${t=>t.$compress?Xe.compress:Xe.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Je};

    ${Re.tablet} {
        height: ${3.5}rem;
    }
`,Ke=e.div`
    display: flex;
    height: 100%;
    margin-left: ${t=>t.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Re.tablet} {
        margin-left: 0rem;
    }
`,qe=e(Ge)`
    display: none;

    ${Re.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,tr=e(t)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Le.Neutral[1]};
`,er=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${t=>t.$compress?1.5:2}rem;

    ${Re.tablet} {
        height: 1.5rem;
    }

    ${Re.mobileS} {
        height: 1.25rem;
    }
`,rr=e.div`
    display: flex;
    background-color: ${Le.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${t=>t.$compress?1:1.5}rem;

    ${Re.tablet} {
        margin: 0 1rem;
    }

    ${Re.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,nr=e.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=t;return r`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Re.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Re.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,ir=s.forwardRef(((t,e)=>{const{mobileCols:r,tabletCols:n,desktopCols:a}=t,o=Ve(t,["mobileCols","tabletCols","desktopCols"]);return i(nr,Object.assign({ref:e},(()=>{const t=n||r,e=r,i=ar(a||n||r),o=ar(t),s=ar(e);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),ar=t=>{if(Array.isArray(t)&&t.length>1){const[e,r]=t,n=e<=r?e:r,i=e<=r?r:e;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},or=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="container",type:a="flex",stretch:o=!1}=t,s=Ve(t,["children","data-testid","type","stretch"]);return i(sr,Object.assign({ref:e,"data-testid":n,$type:a,$stretch:o},s,{children:r}))})),sr=e.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?r`
                padding: 0 3rem;
            `:r`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Re.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Re.tablet} {
        max-width: 720px;
    }
    ${Re.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Re.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Re.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,lr=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="section",stretch:a=!1}=t,o=Ve(t,["children","data-testid","stretch"]);return i(cr,Object.assign({ref:e,"data-testid":n,$stretch:a},o,{children:r}))})),cr=e.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?r`
                ${Re.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:r`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,dr=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="content",className:a,type:o="flex",stretch:s=!1}=t,l=Ve(t,["children","data-testid","className","type","stretch"]);return i(lr,Object.assign({ref:e,"data-testid":n,className:a,stretch:s},l,{children:i(or,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),ur={Section:lr,Container:or,Content:dr,ColDiv:ir},hr=e.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Re.mobileL} {
        padding: 0;
    }
`,fr=()=>{l((()=>{t()||e()}),[]);const t=()=>document.getElementById(gr),e=()=>{if(!document.getElementById(gr)){const t=document.createElement("script");t.id=gr,t.type="module",t.src=pr,document.head.appendChild(t)}};return i(hr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},gr="lifesg-ds-masthead-script",pr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var mr={exports:{}};mr.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],c=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){r=i>12;break}}else r=t===(e?"pm":"PM");return r},u={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(t){var e=a.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(t){var e=c("months"),r=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(t){this.year=o(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var a=n&&n.toUpperCase();return r||i[n]||t[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=t.slice(n),d=a.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,o=t.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(t,e,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=h(e)(t),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(t){return new Date("")}}(e,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var yr,br,vr=b(mr.exports),$r={exports:{}},wr=b($r.exports=(yr={year:0,month:1,day:2,hour:3,minute:4,second:5},br={},function(t,e,r){var n,i=function(t,e,r){void 0===r&&(r={});var n=new Date(t),i=function(t,e){void 0===e&&(e={});var r=e.timeZoneName||"short",n=t+"|"+r,i=br[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),br[n]=i),i}(e,r);return i.formatToParts(n)},a=function(t,e){for(var n=i(t,e),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=yr[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+t;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},o.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,i){var o=i&&e,s=i||e||n,l=a(+r(),s);if("string"!=typeof t)return r(t).tz(s);var c=function(t,e,r){var n=t-60*e*1e3,i=a(n,r);if(e===i)return[n,e];var o=a(n-=60*(i-e)*1e3,r);return i===o?[n,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(t,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){n=t}})),Sr={exports:{}};Sr.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},b={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),a=r-i<0,o=e.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",$={};$[v]=m;var w=function(t){return t instanceof x},S=function t(e,r,n){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;$[s]=e,i=s}return!n&&i&&(v=i),i||!n&&v},F=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},B=b;B.l=S,B.i=w,B.w=function(t,e){return F(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=F(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return F(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<F(t)},y.$g=function(t,e,r){return B.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!B.u(e)||e,d=B.p(t),f=function(t,e){var i=B.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(s)},g=function(t,e){return B.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(n?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,l=B.p(t),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=B.p(d),p=function(t){var e=F(f);return B.w(e.date(e.date()+Math.round(t*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=e,h[o]=r,h[i]=t,h)[g]||1,y=this.$d.getTime()+n*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].slice(0,a)},u=function(t){return B.s(a%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:B.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:B.s(o,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=B.p(h),m=F(n),y=(m.utcOffset()-this.utcOffset())*e,b=this-m,v=B.m(this,m);return v=(g={},g[u]=v/12,g[c]=v,g[d]=v/3,g[l]=(b-y)/6048e5,g[s]=(b-y)/864e5,g[o]=b/r,g[a]=b/e,g[i]=b/t,g)[p]||b,f?v:B.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=x.prototype;return F.prototype=D,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),F.extend=function(t,e){return t.$i||(t(e,x,F),t.$i=!0),F},F.locale=S,F.isDayjs=w,F.unix=function(t){return F(1e3*t)},F.en=$[v],F.Ls=$,F.p={},F}();var Fr=b(Sr.exports),Br={exports:{}};Br.exports=function(t,e,r){e.prototype.isBetween=function(t,e,n,i){var a=r(t),o=r(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var xr=b(Br.exports),Dr={exports:{}};Dr.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var kr=b(Dr.exports),Ar={exports:{}};Ar.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Or,Er=b(Ar.exports);Fr.extend(xr),Fr.extend(kr),Fr.extend(Er),Fr.extend(vr),Fr.extend(wr),function(t){t.generateDays=t=>{const e=t.startOf("month"),r=Fr(e).startOf("week");return _r(r).map((t=>Hr(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Hr(e)},t.generateMonths=t=>{const e=[];for(let r=0;r<12;r++){const n=t.month(r);e.push(Fr(n))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),r=10*Math.floor(e/10),n=t.year(r),i=[n.subtract(1,"year"),n];for(let t=1;t<11;t++)i.push(n.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+Fr(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=Fr(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,r,n="day")=>!e&&!r||(e&&r?t.isBetween(e,r,n,"[]"):e?t.isSameOrAfter(e,n):t.isSameOrBefore(r,n)),t.isPreviousMonthWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"month"),r,void 0,"month"),t.isPreviousYearWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"year"),r,void 0,"year"),t.isPreviousDecadeWithinRange=(e,r)=>{const{beginDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).subtract(1,"year"),r,void 0,"year")},t.isNextMonthWithinRange=(e,r)=>t.isWithinRange(e.add(1,"month"),void 0,r,"month"),t.isNextYearWithinRange=(e,r)=>t.isWithinRange(e.add(1,"year"),void 0,r,"year"),t.isNextDecadeWithinRange=(e,r)=>{const{endDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).add(1,"year"),void 0,r,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,r,n,i)=>{const a=t.isWithinRange(e,n?Fr(n):void 0,i?Fr(i):void 0),o=r&&r.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(Or||(Or={}));const _r=t=>{const e=[t];for(let r=1;r<6;r++){const n=t.add(r,"week");e.push(n)}return e},Hr=t=>{const e=[];for(let r=0;r<7;r++){const n=t.add(r,"day");e.push(n)}return e},jr=[1,3,5,7,8,10,12],Cr=[4,6,9,11];var Mr,zr,Tr,Ir;!function(t){t.clampDay=(e,r,n)=>{const i=parseInt(e),a=parseInt(r),o=parseInt(n);return 0==i?"1":jr.includes(a)?Math.min(i,31).toString():Cr.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,r="HH:mm")=>{const n=Fr(t,r);return Fr(e,r).diff(n,"minute")},t.toDayjs=t=>t?Fr(t):Fr(),t.addMinutesToTime=(t,e,r="HH:mm")=>Fr(t,r).add(e,"minutes").format(r)}(Mr||(Mr={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:r,minDate:n,maxDate:i}=e;return!!(r&&r.length&&r.includes(t))||(!(!n||!Fr(t).isBefore(n,"day"))||!(!i||!Fr(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(Fr(t).isValid())return t}return""}}(zr||(zr={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Tr||(Tr={})),function(t){t.transformWithSpaces=(t,e)=>{const r="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const r=Math.floor(e/9);return t.length>=2*r||1===t.split(" ").length&&t.length>r},t.truncateOneLine=(t,e,r,n,i=8)=>{let a=0;e>r&&(a=Math.floor((e-r)/i));const o=n+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,r)=>{if("undefined"==typeof document)return 0;const n=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(e).width}}(Ir||(Ir={}));const Nr=e.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return r`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Yr=e.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=r`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=r`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=r`
                transition: none;
            `),e}}
`,Lr=({show:t=!1,rootId:e,onOverlayClick:r,children:n,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[m,y]=c(null),[b,v]=c(),[$]=c((()=>Tr.generate())),w=d(),S=d(null),F=n&&s.cloneElement(n,{ref:S}),B=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>(A(),y(D()),()=>{H(),E().length<1&&O("remove")})),[]),l((()=>{if(t){const t=k();x(t),_();const e=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(e)}{H();const t=setTimeout((()=>{E().length<1&&O("remove")}),200);return()=>clearTimeout(t)}}),[t]);const x=t=>{w.current=t,v(t)},D=()=>document&&e?document.getElementById(e):document?document.body:null,k=()=>E().length>0,A=()=>{if(!document.getElementById(Wr)){const t=document.createElement("style");t.id=Wr;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${Pr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Pr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},O=t=>{const e=document.body.classList.contains(Pr);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(Pr):document.body.classList.add(Pr)},E=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},_=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=[...t,$].join(",")},H=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==$)).join(",")},j=t=>{var e;const n=null===(e=S.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||r&&h&&(t.preventDefault(),r())};return m?f.createPortal(i(Nr,Object.assign({id:B,"data-testid":B,$show:t,zIndex:g,$stacked:b},{children:n&&i(Yr,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:a||(b?.5:.8),$backgroundBlur:o,$disableTransition:u,$enableOverlayClick:h,onClick:j},{children:F}))})),m):null},Wr="lifesg-ds-overlay-stylesheet",Pr="lifesg-ds-overlay-open",Rr=e.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Je};
        object-fit: contain;
    }
`;const Vr=({src:t,alt:e,className:r,"data-testid":n})=>i("img",{src:t,alt:e||"",className:r,"data-testid":n,onError:t=>{t.target.onerror=null,t.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Ur=({resources:t,onClick:e,"data-id":r,"data-testid":n="navbar-brand",type:a})=>i(Rr,Object.assign({role:"link","aria-label":t.brandName+"-app-home-page",onClick:t=>{e&&e(t,a)},tabIndex:0,"data-id":r,"data-testid":n,$type:a},{children:i(Vr,{src:t.logoSrc,alt:t.brandName+"-app-logo"})})),Gr=e.div`
    display: none;

    ${Re.tablet} {
        display: flex;
    }
`,Jr=e.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${t=>t.$show?"visible":"hidden"};

    ${t=>t.$show?r`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:r`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${t=>{const e=`${t.$viewHeight}px`||"1vh";return r`
            height: calc(${e} * 100);
        `}}

	${Re.tablet} {
        width: 75%;
    }

    ${Re.mobileL} {
        width: 100%;
    }
`,Xr=e.div`
    display: flex;
    flex-direction: column;
`,Qr=e.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Zr=e(g)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Kr=e(Ge)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Le.Neutral[1]};

    :active,
    :focus {
        color: ${Le.Primary};
    }
`,qr=s.forwardRef(((t,e)=>{const{show:r,resources:n,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=t,[f,g]=c(0),{primary:p,secondary:m}=n;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const t=.01*window.innerHeight;g(t)}};return i(Gr,Object.assign({ref:e,"data-testid":"drawer"},{children:i(Jr,Object.assign({$show:r,$viewHeight:f},{children:a(Xr,{children:[a(Qr,{children:[i(er,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(Ur,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(rr,{}),i(Ur,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(Kr,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Zr,{})}))]}),s]})}))}))}));var tn=function(t,e,r,n){for(var i=t.length,a=r+(n?1:-1);n?a--:++a<i;)if(e(t[a],a,t))return a;return-1},en=Ut;var rn=Ut,nn=Gt,an=ce;var on=Ut,sn=function(){this.__data__=new en,this.size=0},ln=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},cn=function(t){return this.__data__.get(t)},dn=function(t){return this.__data__.has(t)},un=function(t,e){var r=this.__data__;if(r instanceof rn){var n=r.__data__;if(!nn||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new an(n)}return r.set(t,e),this.size=r.size,this};function hn(t){var e=this.__data__=new on(t);this.size=e.size}hn.prototype.clear=sn,hn.prototype.delete=ln,hn.prototype.get=cn,hn.prototype.has=dn,hn.prototype.set=un;var fn=hn;var gn=ce,pn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},mn=function(t){return this.__data__.has(t)};function yn(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new gn;++e<r;)this.add(t[e])}yn.prototype.add=yn.prototype.push=pn,yn.prototype.has=mn;var bn=yn,vn=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1},$n=function(t,e){return t.has(e)};var wn=function(t,e,r,n,i,a){var o=1&r,s=t.length,l=e.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(t),d=a.get(e);if(c&&d)return c==e&&d==t;var u=-1,h=!0,f=2&r?new bn:void 0;for(a.set(t,e),a.set(e,t);++u<s;){var g=t[u],p=e[u];if(n)var m=o?n(p,g,u,e,t,a):n(g,p,u,t,e,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!vn(e,(function(t,e){if(!$n(f,e)&&(g===t||i(g,t,r,n,a)))return f.push(e)}))){h=!1;break}}else if(g!==p&&!i(g,p,r,n,a)){h=!1;break}}return a.delete(t),a.delete(e),h};var Sn=F.Uint8Array,Fn=Ht,Bn=wn,xn=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r},Dn=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r},kn=B?B.prototype:void 0,An=kn?kn.valueOf:void 0;var On=function(t,e,r,n,i,a,o){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new Sn(t),new Sn(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Fn(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=xn;case"[object Set]":var l=1&n;if(s||(s=Dn),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;n|=2,o.set(t,e);var d=Bn(s(t),s(e),n,i,a,o);return o.delete(t),d;case"[object Symbol]":if(An)return An.call(t)==An.call(e)}return!1};var En=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t},_n=v;var Hn=function(t,e,r){var n=e(t);return _n(t)?n:En(n,r(t))};var jn=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,a=[];++r<n;){var o=t[r];e(o,r,t)&&(a[i++]=o)}return a},Cn=function(){return[]},Mn=Object.prototype.propertyIsEnumerable,zn=Object.getOwnPropertySymbols,Tn=zn?function(t){return null==t?[]:(t=Object(t),jn(zn(t),(function(e){return Mn.call(t,e)})))}:Cn;var In=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},Nn=M,Yn=z;var Ln=function(t){return Yn(t)&&"[object Arguments]"==Nn(t)},Wn=z,Pn=Object.prototype,Rn=Pn.hasOwnProperty,Vn=Pn.propertyIsEnumerable,Un=Ln(function(){return arguments}())?Ln:function(t){return Wn(t)&&Rn.call(t,"callee")&&!Vn.call(t,"callee")},Gn={exports:{}};var Jn=function(){return!1};!function(t,e){var r=F,n=Jn,i=e&&!e.nodeType&&e,a=i&&t&&!t.nodeType&&t,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;t.exports=s}(Gn,Gn.exports);var Xn=Gn.exports,Qn=/^(?:0|[1-9]\d*)$/;var Zn=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Qn.test(t))&&t>-1&&t%1==0&&t<e};var Kn=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},qn=M,ti=Kn,ei=z,ri={};ri["[object Float32Array]"]=ri["[object Float64Array]"]=ri["[object Int8Array]"]=ri["[object Int16Array]"]=ri["[object Int32Array]"]=ri["[object Uint8Array]"]=ri["[object Uint8ClampedArray]"]=ri["[object Uint16Array]"]=ri["[object Uint32Array]"]=!0,ri["[object Arguments]"]=ri["[object Array]"]=ri["[object ArrayBuffer]"]=ri["[object Boolean]"]=ri["[object DataView]"]=ri["[object Date]"]=ri["[object Error]"]=ri["[object Function]"]=ri["[object Map]"]=ri["[object Number]"]=ri["[object Object]"]=ri["[object RegExp]"]=ri["[object Set]"]=ri["[object String]"]=ri["[object WeakMap]"]=!1;var ni=function(t){return ei(t)&&ti(t.length)&&!!ri[qn(t)]};var ii=function(t){return function(e){return t(e)}},ai={exports:{}};!function(t,e){var r=$,n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n&&r.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=o}(ai,ai.exports);var oi=ai.exports,si=ni,li=ii,ci=oi&&oi.isTypedArray,di=ci?li(ci):si,ui=In,hi=Un,fi=v,gi=Xn,pi=Zn,mi=di,yi=Object.prototype.hasOwnProperty;var bi=function(t,e){var r=fi(t),n=!r&&hi(t),i=!r&&!n&&gi(t),a=!r&&!n&&!i&&mi(t),o=r||n||i||a,s=o?ui(t.length,String):[],l=s.length;for(var c in t)!e&&!yi.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||pi(c,l))||s.push(c);return s},vi=Object.prototype;var $i=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||vi)};var wi=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Si=$i,Fi=wi,Bi=Object.prototype.hasOwnProperty;var xi=X,Di=Kn;var ki=bi,Ai=function(t){if(!Si(t))return Fi(t);var e=[];for(var r in Object(t))Bi.call(t,r)&&"constructor"!=r&&e.push(r);return e},Oi=function(t){return null!=t&&Di(t.length)&&!xi(t)};var Ei=function(t){return Oi(t)?ki(t):Ai(t)},_i=Hn,Hi=Tn,ji=Ei;var Ci=function(t){return _i(t,ji,Hi)},Mi=Object.prototype.hasOwnProperty;var zi=function(t,e,r,n,i,a){var o=1&r,s=Ci(t),l=s.length;if(l!=Ci(e).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in e:Mi.call(e,d)))return!1}var u=a.get(t),h=a.get(e);if(u&&h)return u==e&&h==t;var f=!0;a.set(t,e),a.set(e,t);for(var g=o;++c<l;){var p=t[d=s[c]],m=e[d];if(n)var y=o?n(m,p,d,e,t,a):n(p,m,d,t,e,a);if(!(void 0===y?p===m||i(p,m,r,n,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=t.constructor,v=e.constructor;b==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(t),a.delete(e),f},Ti=ft(F,"DataView"),Ii=Gt,Ni=ft(F,"Promise"),Yi=ft(F,"Set"),Li=ft(F,"WeakMap"),Wi=M,Pi=tt,Ri="[object Map]",Vi="[object Promise]",Ui="[object Set]",Gi="[object WeakMap]",Ji="[object DataView]",Xi=Pi(Ti),Qi=Pi(Ii),Zi=Pi(Ni),Ki=Pi(Yi),qi=Pi(Li),ta=Wi;(Ti&&ta(new Ti(new ArrayBuffer(1)))!=Ji||Ii&&ta(new Ii)!=Ri||Ni&&ta(Ni.resolve())!=Vi||Yi&&ta(new Yi)!=Ui||Li&&ta(new Li)!=Gi)&&(ta=function(t){var e=Wi(t),r="[object Object]"==e?t.constructor:void 0,n=r?Pi(r):"";if(n)switch(n){case Xi:return Ji;case Qi:return Ri;case Zi:return Vi;case Ki:return Ui;case qi:return Gi}return e});var ea=fn,ra=wn,na=On,ia=zi,aa=ta,oa=v,sa=Xn,la=di,ca="[object Arguments]",da="[object Array]",ua="[object Object]",ha=Object.prototype.hasOwnProperty;var fa=function(t,e,r,n,i,a){var o=oa(t),s=oa(e),l=o?da:aa(t),c=s?da:aa(e),d=(l=l==ca?ua:l)==ua,u=(c=c==ca?ua:c)==ua,h=l==c;if(h&&sa(t)){if(!sa(e))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new ea),o||la(t)?ra(t,e,r,n,i,a):na(t,e,l,r,n,i,a);if(!(1&r)){var f=d&&ha.call(t,"__wrapped__"),g=u&&ha.call(e,"__wrapped__");if(f||g){var p=f?t.value():t,m=g?e.value():e;return a||(a=new ea),i(p,m,r,n,a)}}return!!h&&(a||(a=new ea),ia(t,e,r,n,i,a))},ga=z;var pa=function t(e,r,n,i,a){return e===r||(null==e||null==r||!ga(e)&&!ga(r)?e!=e&&r!=r:fa(e,r,n,i,t,a))},ma=fn,ya=pa;var ba=V;var va=function(t){return t==t&&!ba(t)},$a=va,wa=Ei;var Sa=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}},Fa=function(t,e,r,n){var i=r.length,a=i,o=!n;if(null==t)return!a;for(t=Object(t);i--;){var s=r[i];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var l=(s=r[i])[0],c=t[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in t))return!1}else{var u=new ma;if(n)var h=n(c,d,l,t,e,u);if(!(void 0===h?ya(d,c,3,n,u):h))return!1}}return!0},Ba=function(t){for(var e=wa(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,$a(i)]}return e},xa=Sa;var Da=ke,ka=Un,Aa=v,Oa=Zn,Ea=Kn,_a=Oe;var Ha=function(t,e){return null!=t&&e in Object(t)},ja=function(t,e,r){for(var n=-1,i=(e=Da(e,t)).length,a=!1;++n<i;){var o=_a(e[n]);if(!(a=null!=t&&r(t,o)))break;t=t[o]}return a||++n!=i?a:!!(i=null==t?0:t.length)&&Ea(i)&&Oa(o,i)&&(Aa(t)||ka(t))};var Ca=pa,Ma=Ce,za=function(t,e){return null!=t&&ja(t,e,Ha)},Ta=R,Ia=va,Na=Sa,Ya=Oe;var La=He;var Wa=function(t){return function(e){return null==e?void 0:e[t]}},Pa=function(t){return function(e){return La(e,t)}},Ra=R,Va=Oe;var Ua=function(t){var e=Ba(t);return 1==e.length&&e[0][2]?xa(e[0][0],e[0][1]):function(r){return r===t||Fa(r,t,e)}},Ga=function(t,e){return Ta(t)&&Ia(e)?Na(Ya(t),e):function(r){var n=Ma(r,t);return void 0===n&&n===e?za(r,t):Ca(e,n,3)}},Ja=function(t){return t},Xa=v,Qa=function(t){return Ra(t)?Wa(Va(t)):Pa(t)};var Za=/\s/;var Ka=function(t){for(var e=t.length;e--&&Za.test(t.charAt(e)););return e},qa=/^\s+/;var to=function(t){return t?t.slice(0,Ka(t)+1).replace(qa,""):t},eo=V,ro=N,no=/^[-+]0x[0-9a-f]+$/i,io=/^0b[01]+$/i,ao=/^0o[0-7]+$/i,oo=parseInt;var so=function(t){if("number"==typeof t)return t;if(ro(t))return NaN;if(eo(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=eo(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=to(t);var r=io.test(t);return r||ao.test(t)?oo(t.slice(2),r?2:8):no.test(t)?NaN:+t},lo=1/0;var co=function(t){return t?(t=so(t))===lo||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var uo=tn,ho=function(t){return"function"==typeof t?t:null==t?Ja:"object"==typeof t?Xa(t)?Ga(t[0],t[1]):Ua(t):Qa(t)},fo=function(t){var e=co(t),r=e%1;return e==e?r?e-r:e:0},go=Math.max;var po=b((function(t,e,r){var n=null==t?0:t.length;if(!n)return-1;var i=null==r?0:fo(r);return i<0&&(i=go(n+i,0)),uo(t,ho(e),i)}));const mo=e.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`,yo=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,bo=e.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Le.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${yo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vo=e(bo)`
    animation-delay: -0.45s;
`,$o=e(bo)`
    animation-delay: -0.3s;
`,wo=e(bo)`
    animation-delay: -0.15s;
`,So={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Fo={collections:{base:{D1:{fontFamily:So.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:So.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:So.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:So.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:So.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:So.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:So.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:So.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:So.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:So.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:So.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:So.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:So.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:So.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Bo=t=>e=>{const r=e.theme,n=Te(Fo,r[Ie.textStyleScheme]);return r.options&&r.options.textStyle?ze(n,t,r.options.textStyle):ze(n,t)},xo={D1:{fontFamily:Bo("D1.fontFamily"),fontSize:Bo("D1.fontSize"),fontWeight:Bo("D1.fontWeight"),lineHeight:Bo("D1.lineHeight"),letterSpacing:Bo("D1.letterSpacing")},D2:{fontFamily:Bo("D2.fontFamily"),fontSize:Bo("D2.fontSize"),fontWeight:Bo("D2.fontWeight"),lineHeight:Bo("D2.lineHeight"),letterSpacing:Bo("D2.letterSpacing")},D3:{fontFamily:Bo("D3.fontFamily"),fontSize:Bo("D3.fontSize"),fontWeight:Bo("D3.fontWeight"),lineHeight:Bo("D3.lineHeight"),letterSpacing:Bo("D3.letterSpacing")},D4:{fontFamily:Bo("D4.fontFamily"),fontSize:Bo("D4.fontSize"),fontWeight:Bo("D4.fontWeight"),lineHeight:Bo("D4.lineHeight"),letterSpacing:Bo("D4.letterSpacing")},DBody:{fontFamily:Bo("DBody.fontFamily"),fontSize:Bo("DBody.fontSize"),fontWeight:Bo("DBody.fontWeight"),lineHeight:Bo("DBody.lineHeight"),letterSpacing:Bo("DBody.letterSpacing")},H1:{fontFamily:Bo("H1.fontFamily"),fontSize:Bo("H1.fontSize"),fontWeight:Bo("H1.fontWeight"),lineHeight:Bo("H1.lineHeight"),letterSpacing:Bo("H1.letterSpacing")},H2:{fontFamily:Bo("H2.fontFamily"),fontSize:Bo("H2.fontSize"),fontWeight:Bo("H2.fontWeight"),lineHeight:Bo("H2.lineHeight"),letterSpacing:Bo("H2.letterSpacing")},H3:{fontFamily:Bo("H3.fontFamily"),fontSize:Bo("H3.fontSize"),fontWeight:Bo("H3.fontWeight"),lineHeight:Bo("H3.lineHeight"),letterSpacing:Bo("H3.letterSpacing")},H4:{fontFamily:Bo("H4.fontFamily"),fontSize:Bo("H4.fontSize"),fontWeight:Bo("H4.fontWeight"),lineHeight:Bo("H4.lineHeight"),letterSpacing:Bo("H4.letterSpacing")},H5:{fontFamily:Bo("H5.fontFamily"),fontSize:Bo("H5.fontSize"),fontWeight:Bo("H5.fontWeight"),lineHeight:Bo("H5.lineHeight"),letterSpacing:Bo("H5.letterSpacing")},H6:{fontFamily:Bo("H6.fontFamily"),fontSize:Bo("H6.fontSize"),fontWeight:Bo("H6.fontWeight"),lineHeight:Bo("H6.lineHeight"),letterSpacing:Bo("H6.letterSpacing")},Body:{fontFamily:Bo("Body.fontFamily"),fontSize:Bo("Body.fontSize"),fontWeight:Bo("Body.fontWeight"),lineHeight:Bo("Body.lineHeight"),letterSpacing:Bo("Body.letterSpacing")},BodySmall:{fontFamily:Bo("BodySmall.fontFamily"),fontSize:Bo("BodySmall.fontSize"),fontWeight:Bo("BodySmall.fontWeight"),lineHeight:Bo("BodySmall.lineHeight"),letterSpacing:Bo("BodySmall.letterSpacing")},XSmall:{fontFamily:Bo("XSmall.fontFamily"),fontSize:Bo("XSmall.fontSize"),fontWeight:Bo("XSmall.fontWeight"),lineHeight:Bo("XSmall.lineHeight"),letterSpacing:Bo("XSmall.letterSpacing")}},Do=t=>{switch(t){case 700:case"bold":return So.Bold;case 600:case"semibold":return So.Semibold;case 300:case"light":return So.Light;case 400:case"regular":return So.Regular;default:return""}},ko=(t,e)=>n=>{var i;const a=xo[t].fontFamily(n),o=xo[t].fontWeight(n);return Object.values(So).includes(a)?r`
                font-family: ${Do(e)||Do(o)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${null!==(i=Ao(e)||o)&&void 0!==i?i:"normal"};
        `},Ao=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oo=t=>{if(t>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Eo=(t,e,n=!1)=>i=>{const a=xo[t],o=a.fontSize(i);return r`
            ${ko(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_o=(t=!1,e=!1,n=void 0)=>e?r`
            display: block;
            ${Oo(n)}
        `:t?r`
            display: inline;
        `:r`
            display: block;
            ${Oo(n)}
        `;var Ho;!function(t){t.D1=e.h1`
        ${t=>r`
                ${Eo("D1",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=e.h1`
        ${t=>r`
                ${Eo("D2",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=e.h1`
        ${t=>r`
                ${Eo("D3",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=e.h1`
        ${t=>r`
                ${Eo("D4",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=e.h1`
        ${t=>r`
                ${Eo("DBody",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=e.h1`
        ${t=>r`
                ${Eo("H1",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=e.h2`
        ${t=>r`
                ${Eo("H2",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=e.h3`
        ${t=>r`
                ${Eo("H3",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=e.h4`
        ${t=>r`
                ${Eo("H4",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=e.h5`
        ${t=>r`
                ${Eo("H5",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=e.h6`
        ${t=>r`
                ${Eo("H6",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=e.p`
        ${t=>r`
                ${Eo("Body",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=e.p`
        ${t=>r`
                ${Eo("BodySmall",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=e.span`
        ${t=>r`
                ${Eo("XSmall",t.weight,t.paragraph)}
                color: ${Le.Neutral[1]};
                ${_o(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Mo(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Mo(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ho||(Ho={}));const jo=e.a`
    ${t=>r`
            ${Eo(t.textStyle,t.weight)}
            color: ${Le.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Le.Secondary};

                svg {
                    color: ${Le.Secondary};
                }
            }
        `}
`,Co=e(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mo=t=>{var{external:e=!1,children:r}=t,n=Ve(t,["external","children"]);return a(jo,Object.assign({},n,{children:[r,e&&i(Co,{})]}))};var zo;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(zo||(zo={}));const To={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${Le.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${Le.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Le.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${Le.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${Le.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Le.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Io=t=>e=>{var r;const n=e.theme,i=Te(To,n[Ie.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?ze(i,t,n.options.designToken):ze(i,t)},No={InputBoxShadow:Io("InputBoxShadow"),InputErrorBoxShadow:Io("InputErrorBoxShadow"),ElevationBoxShadow:Io("ElevationBoxShadow"),Table:{Header:Io("Table.Header"),Cell:{Primary:Io("Table.Cell.Primary"),Secondary:Io("Table.Cell.Secondary"),Selected:Io("Table.Cell.Selected"),Hover:Io("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Io("Button.Danger.BackgroundColor"),Hover:Io("Button.Danger.Hover"),Primary:Io("Button.Danger.Primary"),Border:Io("Button.Danger.Border")}}},Yo=e.button`
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
    ${t=>{switch(t.$buttonStyle){case"secondary":return r`
                    background-color: ${Le.Neutral[8]};
                    border: 1px solid
                        ${t.$buttonIsDanger?No.Button.Danger.Border:Le.Primary};

                    span {
                        color: ${t.$buttonIsDanger?No.Button.Danger.Primary:Le.Primary};
                    }
                `;case"light":return r`
                    background-color: ${Le.Neutral[8]};
                    border: 1px solid ${Le.Neutral[5]};

                    span {
                        color: ${t.$buttonIsDanger?No.Button.Danger.Primary:Le.Primary};
                    }
                `;case"disabled":return r`
                    background-color: ${Le.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Le.Neutral[3]};
                    }
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${t.$buttonIsDanger?No.Button.Danger.Primary:Le.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${t.$buttonIsDanger?No.Button.Danger.Hover:Le.Secondary};
                        }
                    }
                `;default:return r`
                    background-color: ${t.$buttonIsDanger?No.Button.Danger.BackgroundColor:Le.Primary};
                    border: 1px solid transparent;

                    ${Re.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Le.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?r`
                    height: 2.5rem;
                    span {
                        ${Eo("H5","semibold")}
                    }

                    ${Re.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    span {
                        ${Eo("H4","semibold")}
                    }

                    ${Re.mobileS} {
                        height: auto;
                    }
                `}
`,Lo=e((({color:t,className:e,size:r=18})=>a(mo,Object.assign({className:e,$size:r,$color:t},{children:[i(bo,{id:"inner1",$size:r-2,$borderWidth:2}),i(vo,{id:"inner2",$size:r-2,$borderWidth:2}),i($o,{id:"inner3",$size:r-2,$borderWidth:2}),i(wo,{id:"inner4",$size:r-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${t=>{let e=t.$buttonIsDanger?No.Button.Danger.Primary:Le.Primary(t);switch(t.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":e=Le.Neutral[3](t);break;default:e=Le.Neutral[8](t)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,Wo={Default:s.forwardRef(((t,e)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=Ve(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return a(Yo,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Lo,Object.assign({},d)),i("span",{children:r})]}))})),Small:s.forwardRef(((t,e)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=Ve(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return a(Yo,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Lo,Object.assign({},d,{size:16})),i("span",{children:r})]}))}))},Po=e.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Re.tablet} {
        display: none;
    }
`,Ro=e.ul`
    display: none;

    ${Re.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Vo=e.ul`
    display: none;
    list-style: none;

    ${Re.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Re.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Uo=e.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Re.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${t=>t.$mobile?"1rem":"0"};
        }
    }

    ${Re.mobileL} {
        ${t=>{if(t.$mobile)return r`
                    padding: 0 1rem;
                `}}
    }
`,Go=e(Wo.Small)`
    ${Re.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,Jo=e.div`
    display: none;

    ${Re.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,Xo=e(Ho.BodySmall)`
    margin-bottom: 0.5rem;
`,Qo=e.div`
    display: flex;
`,Zo=e.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Re.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Re.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,Ko=({actionButtons:t,mobile:e=!1,onActionButtonClick:r})=>{const n=t=>{t.stopPropagation()},s=t=>e=>{e.stopPropagation(),"download"===t.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(e,t)},l=(t,e)=>{const r=t?(t=>{const e=po(t,(t=>"download"===t.type));if(e>-1){const r=[...t],n=r.splice(e,1);return[...r,n[0]]}return t})(e):e;return r.map(((e,r)=>{let o;switch(e.type){case"download":o=t?(l=e.args,a(Jo,{children:[i(Xo,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(Qo,{children:[i(Zo,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(Zo,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(Go,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;o=i(Go,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":n}));break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var l;if(o)return i(Uo,Object.assign({$mobile:t},{children:o}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,n=r.filter((t=>!!t.uncollapsible)),s=r.filter((t=>!t.uncollapsible));return e?i(o,{children:s.length>0&&i(Vo,{children:l(e,s)})}):a(o,{children:[n.length>0&&i(Ro,{children:l(!1,n)}),t.desktop.length>0&&i(Po,{children:l(e,t.desktop)})]})}return i(o,{})},qo=e.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${Le.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${No.ElevationBoxShadow};
`,ts=e.ul`
    display: none;
    list-style: none;

    ${Re.tablet} {
        border-left: 0.25rem solid ${Le.Primary};
        display: flex;
        flex-direction: column;
    }
`,es=e(Ho.Hyperlink.Small)`
    ${Eo("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Le.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Le.Primary};
    }
    :hover {
        color: ${Le.Accent.Light[1]};
    }

    ${Re.tablet} {
        ${Eo("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,rs=e.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${Re.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ns=({items:t,mobile:e=!1,onItemClick:r})=>{const n=t=>e=>{e.stopPropagation(),r(e,t)},a=(e=!1)=>t.map(((t,r)=>{const{children:a,options:o}=t,s=Ve(t,["children","options"]),l=e?`link__mobile-${r+1}`:`link__${r+1}`;return i(rs,{children:i(es,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:n(t)},o,{children:a}))},r)}));if(t&&t.length>0){return i(e?ts:qo,{children:a(e)})}return i(o,{})},is=e.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${t=>t.$alignLeft&&"margin-right: auto;"}

    ${Re.tablet} {
        display: none;
    }
`,as=e.ul`
    display: none;
    list-style: none;

    ${Re.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,os=e.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${t=>t.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Re.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,ss=e(Ho.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Le.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Le.Neutral[1]};
    }

    ${Re.tablet} {
        color: ${Le.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Le.Neutral[1]};
        }
    }
`,ls=e.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,cs=e.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Le.Primary};

    ${Re.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Le.Primary};
    }
`,ds=e.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,us=e(Ge)`
    padding: 0.5rem;
    transform: rotate(${t=>t.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,hs=e(m)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Le.Neutral[3]};
    :hover {
        color: ${Le.Neutral[1]};
    }
`,fs=({items:t,selectedId:e,mobile:r=!1,hideNavBranding:n,onItemClick:s})=>{const[u,h]=c(-1),[f,g]=c(!1),p=d(null);l((()=>{const t=t=>{p.current&&!p.current.contains(t.target)&&m()};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}}),[]);const m=()=>{g(!1)},y=(t,e)=>r=>{r.stopPropagation(),h(e),g(!0),s(r,t)},b=(t,e)=>{t.stopPropagation(),s(t,e),g(!1)},v=()=>t.map(((t,o)=>{if("component"===t.itemType){const e=t&&t.children||null;return i("li",{children:e},o)}{const s=(t=>{if(t.id===e)return!0;if((null==t?void 0:t.subMenu)&&t.subMenu.length>=1)return!!t.subMenu.find((t=>t.id===e));return!1})(t),{children:l,options:c}=t,d=Ve(t,["children","options"]),h=s?r?"bold":"semibold":"regular",g=r?`link__mobile-${o+1}`:`link__${o+1}`,p=u>=0&&u===o&&f;return a(os,Object.assign({$hiddenBranding:n},{children:[a(ss,Object.assign({"data-testid":g,weight:h,$selected:s},d,{onClick:y(t,o)},c,{children:[i(ls,{children:l}),s&&i(cs,{"data-testid":`${g}-indicator`}),r&&t.subMenu&&i(ds,{children:i(us,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:i(hs,{})}))})]})),p&&i(ns,{items:t.subMenu,mobile:r,onItemClick:b})]}),o)}}));return t&&t.length>0?r?i(as,Object.assign({ref:p},{children:v()})):i(is,Object.assign({ref:p,$alignLeft:n},{children:v()})):i(o,{})},gs=u(((t,e)=>{var{items:r,className:n,id:s,selectedId:u,compress:f=!1,fixed:g=!0,resources:p=ps,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:w,onBrandClick:S,masthead:F=!0,layout:B="default"}=t,x=Ve(t,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,k]=c(!1),[A,O]=c(!1),E="stretch"===B,_=d(),{primary:H=ps.primary,secondary:j}=p;h(e,(()=>Object.assign(_.current,{dismissDrawer:()=>{C()}})),[D]),l((()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)})),[]);const C=()=>{k(!1),setTimeout((()=>{O(!1)}),550)},M=t=>D&&-1===b.indexOf(t),z=()=>{window.innerWidth<=We.tablet&&D&&C()},T=(t,e)=>{S&&(t.preventDefault(),S(e)),M("brand-click")&&C()},I=(t,e)=>{e.onClick?e.onClick(t):$&&(t.preventDefault(),$(e)),!(null==e?void 0:e.subMenu)&&M("item-click")&&C()},N=(t,e)=>{e.args&&e.args.onClick?e.args.onClick(t):w&&(t.preventDefault(),w(e)),M("item-click")&&C()},Y=()=>{k(!0),O(!0)},L=()=>{M("close-button-click")&&C()},W=()=>r.mobile&&r.mobile.length>0||r.desktop&&r.desktop.length>0||v&&!(()=>{if(v.mobile&&v.mobile.some((t=>t.uncollapsible)))return!0;if(v.desktop&&v.desktop.some((t=>t.uncollapsible)))return!0;return!1})()?i(qe,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1},{children:i(tr,{})})):null;return a(Qe,Object.assign({ref:_,$fixed:g,className:n,id:s||"navbar-wrapper","data-testid":x["data-testid"]||"navbar-wrapper"},{children:[F&&i(fr,{}),a(ur.Content,Object.assign({stretch:E},{children:[a(Ze,Object.assign({$compress:f},{children:[!y&&a(er,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(Ur,{resources:H,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),j&&a(o,{children:[i(rr,{$compress:f}),i(Ur,{resources:j,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(Ke,Object.assign({$hideNavBranding:y},{children:[i(fs,{items:r.desktop,onItemClick:I,selectedId:u,hideNavBranding:y}),i(Ko,{actionButtons:v,onActionButtonClick:N}),W()]}))]})),!m&&i(Lr,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:L},{children:a(qr,Object.assign({show:D,resources:{primary:H,secondary:j},onClose:L,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(fs,{items:r.mobile||r.desktop,onItemClick:I,selectedId:u,mobile:!0}),i(Ko,{actionButtons:v,onActionButtonClick:N,mobile:!0})]}))}))]}))]}))})),ps={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},ms=Xe,ys=3.5;export{gs as Navbar,ms as NavbarHeight,ys as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
