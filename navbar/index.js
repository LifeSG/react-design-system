import{MenuIcon as t}from"@lifesg/react-icons/menu";import e,{css as r,keyframes as n}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import f from"react-dom";import{CrossIcon as g}from"@lifesg/react-icons/cross";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=Array.isArray,v="object"==typeof y&&y&&y.Object===Object&&y,$=v,w="object"==typeof self&&self&&self.Object===Object&&self,S=$||w||Function("return this")(),F=S.Symbol,B=F,x=Object.prototype,D=x.hasOwnProperty,k=x.toString,A=B?B.toStringTag:void 0;var O=function(t){var e=D.call(t,A),r=t[A];try{t[A]=void 0;var n=!0}catch(t){}var i=k.call(t);return n&&(e?t[A]=r:delete t[A]),i},E=Object.prototype.toString;var _=O,H=function(t){return E.call(t)},C=F?F.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":C&&C in Object(t)?_(t):H(t)};var M=function(t){return null!=t&&"object"==typeof t},z=j,T=M;var I=function(t){return"symbol"==typeof t||T(t)&&"[object Symbol]"==z(t)},N=b,Y=I,L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var P=function(t,e){if(N(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Y(t))||(W.test(t)||!L.test(t)||null!=e&&t in Object(e))};var R=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},V=j,U=R;var G,J=function(t){if(!U(t))return!1;var e=V(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},X=S["__core-js_shared__"],Q=(G=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Z=function(t){return!!Q&&Q in t},K=Function.prototype.toString;var q=function(t){if(null!=t){try{return K.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tt=J,et=Z,rt=R,nt=q,it=/^\[object .+?Constructor\]$/,at=Function.prototype,ot=Object.prototype,st=at.toString,lt=ot.hasOwnProperty,ct=RegExp("^"+st.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var dt=function(t){return!(!rt(t)||et(t))&&(tt(t)?ct:it).test(nt(t))},ut=function(t,e){return null==t?void 0:t[e]};var ht=function(t,e){var r=ut(t,e);return dt(r)?r:void 0},ft=ht(Object,"create"),gt=ft;var pt=function(){this.__data__=gt?gt(null):{},this.size=0};var mt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt=ft,bt=Object.prototype.hasOwnProperty;var vt=function(t){var e=this.__data__;if(yt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return bt.call(e,t)?e[t]:void 0},$t=ft,wt=Object.prototype.hasOwnProperty;var St=ft;var Ft=pt,Bt=mt,xt=vt,Dt=function(t){var e=this.__data__;return $t?void 0!==e[t]:wt.call(e,t)},kt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=St&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}At.prototype.clear=Ft,At.prototype.delete=Bt,At.prototype.get=xt,At.prototype.has=Dt,At.prototype.set=kt;var Ot=At;var Et=function(){this.__data__=[],this.size=0};var _t=function(t,e){return t===e||t!=t&&e!=e},Ht=_t;var Ct=function(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1},jt=Ct,Mt=Array.prototype.splice;var zt=Ct;var Tt=Ct;var It=Ct;var Nt=Et,Yt=function(t){var e=this.__data__,r=jt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Mt.call(e,r,1),--this.size,!0)},Lt=function(t){var e=this.__data__,r=zt(e,t);return r<0?void 0:e[r][1]},Wt=function(t){return Tt(this.__data__,t)>-1},Pt=function(t,e){var r=this.__data__,n=It(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Rt.prototype.clear=Nt,Rt.prototype.delete=Yt,Rt.prototype.get=Lt,Rt.prototype.has=Wt,Rt.prototype.set=Pt;var Vt=Rt,Ut=ht(S,"Map"),Gt=Ot,Jt=Vt,Xt=Ut;var Qt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Zt=function(t,e){var r=t.__data__;return Qt(e)?r["string"==typeof e?"string":"hash"]:r.map},Kt=Zt;var qt=Zt;var te=Zt;var ee=Zt;var re=function(){this.size=0,this.__data__={hash:new Gt,map:new(Xt||Jt),string:new Gt}},ne=function(t){var e=Kt(this,t).delete(t);return this.size-=e?1:0,e},ie=function(t){return qt(this,t).get(t)},ae=function(t){return te(this,t).has(t)},oe=function(t,e){var r=ee(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function se(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}se.prototype.clear=re,se.prototype.delete=ne,se.prototype.get=ie,se.prototype.has=ae,se.prototype.set=oe;var le=se,ce=le;function de(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=t.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(de.Cache||ce),r}de.Cache=ce;var ue=de;var he=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fe=/\\(\\)?/g,ge=function(t){var e=ue(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(he,(function(t,r,n,i){e.push(n?i.replace(fe,"$1"):r||t)})),e}));var pe=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},me=b,ye=I,be=F?F.prototype:void 0,ve=be?be.toString:void 0;var $e=function t(e){if("string"==typeof e)return e;if(me(e))return pe(e,t)+"";if(ye(e))return ve?ve.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},we=$e;var Se=b,Fe=P,Be=ge,xe=function(t){return null==t?"":we(t)};var De=function(t,e){return Se(t)?t:Fe(t,e)?[t]:Be(xe(t))},ke=I;var Ae=function(t){if("string"==typeof t||ke(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Oe=De,Ee=Ae;var _e=function(t,e){for(var r=0,n=(e=Oe(e,t)).length;null!=t&&r<n;)t=t[Ee(e[r++])];return r&&r==n?t:void 0},He=_e;var Ce=function(t,e,r){var n=null==t?void 0:He(t,e);return void 0===n?r:n};const je=(t,e,r)=>e?Ce(r,e)||Ce(t,e):r||t,Me=(t,e)=>{const r=e||t.defaultValue;return Ce(t.collections,r)};var ze;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ze||(ze={}));const Te={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ie=t=>e=>{const r=e.theme,n=Me(Te,r[ze.colorScheme]);return r.options&&r.options.color?je(n,t,r.options.color):je(n,t)},Ne={Brand:{1:Ie("Brand.1"),2:Ie("Brand.2"),3:Ie("Brand.3"),4:Ie("Brand.4"),5:Ie("Brand.5"),6:Ie("Brand.6")},Primary:Ie("Primary"),PrimaryDark:Ie("PrimaryDark"),Secondary:Ie("Secondary"),Accent:{Light:{1:Ie("Accent.Light.1"),2:Ie("Accent.Light.2"),3:Ie("Accent.Light.3"),4:Ie("Accent.Light.4"),5:Ie("Accent.Light.5"),6:Ie("Accent.Light.6")},Dark:{1:Ie("Accent.Dark.1"),2:Ie("Accent.Dark.2"),3:Ie("Accent.Dark.3")}},Neutral:{1:Ie("Neutral.1"),2:Ie("Neutral.2"),3:Ie("Neutral.3"),4:Ie("Neutral.4"),5:Ie("Neutral.5"),6:Ie("Neutral.6"),7:Ie("Neutral.7"),8:Ie("Neutral.8")},Validation:{Green:{Text:Ie("Validation.Green.Text"),Icon:Ie("Validation.Green.Icon"),Border:Ie("Validation.Green.Border"),Background:Ie("Validation.Green.Background")},Orange:{Text:Ie("Validation.Orange.Text"),Icon:Ie("Validation.Orange.Icon"),Border:Ie("Validation.Orange.Border"),Background:Ie("Validation.Orange.Background"),Badge:Ie("Validation.Orange.Badge")},Red:{Text:Ie("Validation.Red.Text"),Icon:Ie("Validation.Red.Icon"),Border:Ie("Validation.Red.Border"),Background:Ie("Validation.Red.Background")},Blue:{Text:Ie("Validation.Blue.Text"),Icon:Ie("Validation.Blue.Icon"),Border:Ie("Validation.Blue.Border"),Background:Ie("Validation.Blue.Background")}},Shadow:{Accent:Ie("Shadow.Accent"),Red:Ie("Shadow.Red"),Elevation:Ie("Shadow.Elevation")}},Ye={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Le=t=>Object.keys(Ye).reduce(((e,r)=>{const n=Ye[r];return e[r]=`@media screen and (${t}: ${n}px)`,e}),{}),We=Le("max-width");Le("min-width");function Pe(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}const Re=e.button`
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
                background-color: ${Ne.Neutral[7]};
            `}
    }
`,Ve=s.forwardRef(((t,e)=>{var{children:r,focusHighlight:n=!0,focusOutline:a="none",type:o="button"}=t,s=Pe(t,["children","focusHighlight","focusOutline","type"]);return i(Re,Object.assign({ref:e,$outline:a,$highlight:n,type:o},s,{children:r}))})),Ue="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ge={notCompress:6,compress:4},Je=e.div`
    position: ${t=>t.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Xe=e.nav`
    height: ${t=>t.$compress?Ge.compress:Ge.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ue};

    ${We.tablet} {
        height: ${3.5}rem;
    }
`,Qe=e.div`
    display: flex;
    height: 100%;
    margin-left: ${t=>t.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${We.tablet} {
        margin-left: 0rem;
    }
`,Ze=e(Ve)`
    display: none;

    ${We.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Ke=e(t)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ne.Neutral[1]};
`,qe=e.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${t=>t.$compress?1.5:2}rem;

    ${We.tablet} {
        height: 1.5rem;
    }

    ${We.mobileS} {
        height: 1.25rem;
    }
`,tr=e.div`
    display: flex;
    background-color: ${Ne.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${t=>t.$compress?1:1.5}rem;

    ${We.tablet} {
        margin: 0 1rem;
    }

    ${We.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,er=e.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=t;return r`
            grid-column: ${e||"auto"} / span ${n||1};

            ${We.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${We.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,rr=s.forwardRef(((t,e)=>{const{mobileCols:r,tabletCols:n,desktopCols:a}=t,o=Pe(t,["mobileCols","tabletCols","desktopCols"]);return i(er,Object.assign({ref:e},(()=>{const t=n||r,e=r,i=nr(a||n||r),o=nr(t),s=nr(e);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),nr=t=>{if(Array.isArray(t)&&t.length>1){const[e,r]=t,n=e<=r?e:r,i=e<=r?r:e;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},ir=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="container",type:a="flex",stretch:o=!1}=t,s=Pe(t,["children","data-testid","type","stretch"]);return i(ar,Object.assign({ref:e,"data-testid":n,$type:a,$stretch:o},s,{children:r}))})),ar=e.div`
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

                ${We.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${We.tablet} {
        max-width: 720px;
    }
    ${We.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${We.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${We.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,or=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="section",stretch:a=!1}=t,o=Pe(t,["children","data-testid","stretch"]);return i(sr,Object.assign({ref:e,"data-testid":n,$stretch:a},o,{children:r}))})),sr=e.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?r`
                ${We.tablet} {
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
`,lr=s.forwardRef(((t,e)=>{const{children:r,"data-testid":n="content",className:a,type:o="flex",stretch:s=!1}=t,l=Pe(t,["children","data-testid","className","type","stretch"]);return i(or,Object.assign({ref:e,"data-testid":n,className:a,stretch:s},l,{children:i(ir,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),cr={Section:or,Container:ir,Content:lr,ColDiv:rr},dr=e.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${We.mobileL} {
        padding: 0;
    }
`,ur=()=>{l((()=>{t()||e()}),[]);const t=()=>document.getElementById(hr),e=()=>{if(!document.getElementById(hr)){const t=document.createElement("script");t.id=hr,t.type="module",t.src=fr,document.head.appendChild(t)}};return i(dr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},hr="lifesg-ds-masthead-script",fr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var gr={exports:{}};gr.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],c=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){r=i>12;break}}else r=t===(e?"pm":"PM");return r},u={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(t){var e=a.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(t){var e=c("months"),r=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(t){this.year=o(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var a=n&&n.toUpperCase();return r||i[n]||t[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=t.slice(n),d=a.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,o=t.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(t,e,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=h(e)(t),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(t){return new Date("")}}(e,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var pr,mr,yr=gr.exports,br={exports:{}},vr=br.exports=(pr={year:0,month:1,day:2,hour:3,minute:4,second:5},mr={},function(t,e,r){var n,i=function(t,e,r){void 0===r&&(r={});var n=new Date(t),i=function(t,e){void 0===e&&(e={});var r=e.timeZoneName||"short",n=t+"|"+r,i=mr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),mr[n]=i),i}(e,r);return i.formatToParts(n)},a=function(t,e){for(var n=i(t,e),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=pr[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+t;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},o.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,i){var o=i&&e,s=i||e||n,l=a(+r(),s);if("string"!=typeof t)return r(t).tz(s);var c=function(t,e,r){var n=t-60*e*1e3,i=a(n,r);if(e===i)return[n,e];var o=a(n-=60*(i-e)*1e3,r);return i===o?[n,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(t,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){n=t}}),$r={exports:{}};$r.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},b={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),a=r-i<0,o=e.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",$={};$[v]=m;var w=function(t){return t instanceof x},S=function t(e,r,n){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;$[s]=e,i=s}return!n&&i&&(v=i),i||!n&&v},F=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},B=b;B.l=S,B.i=w,B.w=function(t,e){return F(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=F(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return F(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<F(t)},y.$g=function(t,e,r){return B.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!B.u(e)||e,d=B.p(t),f=function(t,e){var i=B.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(s)},g=function(t,e){return B.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(n?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,l=B.p(t),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=B.p(d),p=function(t){var e=F(f);return B.w(e.date(e.date()+Math.round(t*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=e,h[o]=r,h[i]=t,h)[g]||1,y=this.$d.getTime()+n*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].slice(0,a)},u=function(t){return B.s(a%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:B.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:B.s(o,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=B.p(h),m=F(n),y=(m.utcOffset()-this.utcOffset())*e,b=this-m,v=B.m(this,m);return v=(g={},g[u]=v/12,g[c]=v,g[d]=v/3,g[l]=(b-y)/6048e5,g[s]=(b-y)/864e5,g[o]=b/r,g[a]=b/e,g[i]=b/t,g)[p]||b,f?v:B.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=x.prototype;return F.prototype=D,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),F.extend=function(t,e){return t.$i||(t(e,x,F),t.$i=!0),F},F.locale=S,F.isDayjs=w,F.unix=function(t){return F(1e3*t)},F.en=$[v],F.Ls=$,F.p={},F}();var wr=$r.exports,Sr={exports:{}};Sr.exports=function(t,e,r){e.prototype.isBetween=function(t,e,n,i){var a=r(t),o=r(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Fr=Sr.exports,Br={exports:{}};Br.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var xr=Br.exports,Dr={exports:{}};Dr.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var kr,Ar=Dr.exports;wr.extend(Fr),wr.extend(xr),wr.extend(Ar),wr.extend(yr),wr.extend(vr),function(t){t.generateDays=t=>{const e=t.startOf("month"),r=wr(e).startOf("week");return Or(r).map((t=>Er(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Er(e)},t.generateMonths=t=>{const e=[];for(let r=0;r<12;r++){const n=t.month(r);e.push(wr(n))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),r=10*Math.floor(e/10),n=t.year(r),i=[n.subtract(1,"year"),n];for(let t=1;t<11;t++)i.push(n.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+wr(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=wr(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,r,n="day")=>!e&&!r||(e&&r?t.isBetween(e,r,n,"[]"):e?t.isSameOrAfter(e,n):t.isSameOrBefore(r,n)),t.isPreviousMonthWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"month"),r,void 0,"month"),t.isPreviousYearWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"year"),r,void 0,"year"),t.isPreviousDecadeWithinRange=(e,r)=>{const{beginDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).subtract(1,"year"),r,void 0,"year")},t.isNextMonthWithinRange=(e,r)=>t.isWithinRange(e.add(1,"month"),void 0,r,"month"),t.isNextYearWithinRange=(e,r)=>t.isWithinRange(e.add(1,"year"),void 0,r,"year"),t.isNextDecadeWithinRange=(e,r)=>{const{endDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).add(1,"year"),void 0,r,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,r,n,i)=>{const a=t.isWithinRange(e,n?wr(n):void 0,i?wr(i):void 0),o=r&&r.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(kr||(kr={}));const Or=t=>{const e=[t];for(let r=1;r<6;r++){const n=t.add(r,"week");e.push(n)}return e},Er=t=>{const e=[];for(let r=0;r<7;r++){const n=t.add(r,"day");e.push(n)}return e},_r=[1,3,5,7,8,10,12],Hr=[4,6,9,11];var Cr,jr,Mr,zr;!function(t){t.clampDay=(e,r,n)=>{const i=parseInt(e),a=parseInt(r),o=parseInt(n);return 0==i?"1":_r.includes(a)?Math.min(i,31).toString():Hr.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,r="HH:mm")=>{const n=wr(t,r);return wr(e,r).diff(n,"minute")},t.toDayjs=t=>t?wr(t):wr(),t.addMinutesToTime=(t,e,r="HH:mm")=>wr(t,r).add(e,"minutes").format(r)}(Cr||(Cr={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:r,minDate:n,maxDate:i}=e;return!!(r&&r.length&&r.includes(t))||(!(!n||!wr(t).isBefore(n,"day"))||!(!i||!wr(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(wr(t).isValid())return t}return""}}(jr||(jr={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Mr||(Mr={})),function(t){t.transformWithSpaces=(t,e)=>{const r="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const r=Math.floor(e/9);return t.length>=2*r||1===t.split(" ").length&&t.length>r},t.truncateOneLine=(t,e,r,n,i=8)=>{let a=0;e>r&&(a=Math.floor((e-r)/i));const o=n+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,r)=>{if("undefined"==typeof document)return 0;const n=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(e).width}}(zr||(zr={}));const Tr=e.div`
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
`,Ir=e.div`
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
`,Nr=({show:t=!1,rootId:e,onOverlayClick:r,children:n,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[m,y]=c(null),[b,v]=c(),[$]=c((()=>Mr.generate())),w=d(),S=d(null),F=n&&s.cloneElement(n,{ref:S}),B=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>(A(),y(D()),()=>{H(),E().length<1&&O("remove")})),[]),l((()=>{if(t){const t=k();x(t),_();const e=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(e)}{H();const t=setTimeout((()=>{E().length<1&&O("remove")}),200);return()=>clearTimeout(t)}}),[t]);const x=t=>{w.current=t,v(t)},D=()=>document&&e?document.getElementById(e):document?document.body:null,k=()=>E().length>0,A=()=>{if(!document.getElementById(Yr)){const t=document.createElement("style");t.id=Yr;const e=document.documentElement.clientWidth,r=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${Lr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Lr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},O=t=>{const e=document.body.classList.contains(Lr);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(Lr):document.body.classList.add(Lr)},E=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},_=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=[...t,$].join(",")},H=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==$)).join(",")},C=t=>{var e;const n=null===(e=S.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||r&&h&&(t.preventDefault(),r())};return m?f.createPortal(i(Tr,Object.assign({id:B,"data-testid":B,$show:t,zIndex:g,$stacked:b},{children:n&&i(Ir,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:a||(b?.5:.8),$backgroundBlur:o,$disableTransition:u,$enableOverlayClick:h,onClick:C},{children:F}))})),m):null},Yr="lifesg-ds-overlay-stylesheet",Lr="lifesg-ds-overlay-open",Wr=e.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ue};
        object-fit: contain;
    }
`;const Pr=({src:t,alt:e,className:r,"data-testid":n})=>i("img",{src:t,alt:e||"",className:r,"data-testid":n,onError:t=>{t.target.onerror=null,t.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Rr=({resources:t,onClick:e,"data-id":r,"data-testid":n="navbar-brand",type:a})=>i(Wr,Object.assign({role:"link","aria-label":t.brandName+"-app-home-page",onClick:t=>{e&&e(t,a)},tabIndex:0,"data-id":r,"data-testid":n,$type:a},{children:i(Pr,{src:t.logoSrc,alt:t.brandName+"-app-logo"})})),Vr=e.div`
    display: none;

    ${We.tablet} {
        display: flex;
    }
`,Ur=e.div`
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

	${We.tablet} {
        width: 75%;
    }

    ${We.mobileL} {
        width: 100%;
    }
`,Gr=e.div`
    display: flex;
    flex-direction: column;
`,Jr=e.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Xr=e(g)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Qr=e(Ve)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Ne.Neutral[1]};

    :active,
    :focus {
        color: ${Ne.Primary};
    }
`,Zr=s.forwardRef(((t,e)=>{const{show:r,resources:n,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=t,[f,g]=c(0),{primary:p,secondary:m}=n;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const t=.01*window.innerHeight;g(t)}};return i(Vr,Object.assign({ref:e,"data-testid":"drawer"},{children:i(Ur,Object.assign({$show:r,$viewHeight:f},{children:a(Gr,{children:[a(Jr,{children:[i(qe,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(Rr,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(tr,{}),i(Rr,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(Qr,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Xr,{})}))]}),s]})}))}))}));var Kr=function(t,e,r,n){for(var i=t.length,a=r+(n?1:-1);n?a--:++a<i;)if(e(t[a],a,t))return a;return-1},qr=Vt;var tn=Vt,en=Ut,rn=le;var nn=Vt,an=function(){this.__data__=new qr,this.size=0},on=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},sn=function(t){return this.__data__.get(t)},ln=function(t){return this.__data__.has(t)},cn=function(t,e){var r=this.__data__;if(r instanceof tn){var n=r.__data__;if(!en||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new rn(n)}return r.set(t,e),this.size=r.size,this};function dn(t){var e=this.__data__=new nn(t);this.size=e.size}dn.prototype.clear=an,dn.prototype.delete=on,dn.prototype.get=sn,dn.prototype.has=ln,dn.prototype.set=cn;var un=dn;var hn=le,fn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},gn=function(t){return this.__data__.has(t)};function pn(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new hn;++e<r;)this.add(t[e])}pn.prototype.add=pn.prototype.push=fn,pn.prototype.has=gn;var mn=pn,yn=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1},bn=function(t,e){return t.has(e)};var vn=function(t,e,r,n,i,a){var o=1&r,s=t.length,l=e.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(t),d=a.get(e);if(c&&d)return c==e&&d==t;var u=-1,h=!0,f=2&r?new mn:void 0;for(a.set(t,e),a.set(e,t);++u<s;){var g=t[u],p=e[u];if(n)var m=o?n(p,g,u,e,t,a):n(g,p,u,t,e,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!yn(e,(function(t,e){if(!bn(f,e)&&(g===t||i(g,t,r,n,a)))return f.push(e)}))){h=!1;break}}else if(g!==p&&!i(g,p,r,n,a)){h=!1;break}}return a.delete(t),a.delete(e),h};var $n=S.Uint8Array,wn=_t,Sn=vn,Fn=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r},Bn=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r},xn=F?F.prototype:void 0,Dn=xn?xn.valueOf:void 0;var kn=function(t,e,r,n,i,a,o){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new $n(t),new $n(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wn(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=Fn;case"[object Set]":var l=1&n;if(s||(s=Bn),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;n|=2,o.set(t,e);var d=Sn(s(t),s(e),n,i,a,o);return o.delete(t),d;case"[object Symbol]":if(Dn)return Dn.call(t)==Dn.call(e)}return!1};var An=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t},On=b;var En=function(t,e,r){var n=e(t);return On(t)?n:An(n,r(t))};var _n=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,a=[];++r<n;){var o=t[r];e(o,r,t)&&(a[i++]=o)}return a},Hn=function(){return[]},Cn=Object.prototype.propertyIsEnumerable,jn=Object.getOwnPropertySymbols,Mn=jn?function(t){return null==t?[]:(t=Object(t),_n(jn(t),(function(e){return Cn.call(t,e)})))}:Hn;var zn=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},Tn=j,In=M;var Nn=function(t){return In(t)&&"[object Arguments]"==Tn(t)},Yn=M,Ln=Object.prototype,Wn=Ln.hasOwnProperty,Pn=Ln.propertyIsEnumerable,Rn=Nn(function(){return arguments}())?Nn:function(t){return Yn(t)&&Wn.call(t,"callee")&&!Pn.call(t,"callee")},Vn={exports:{}};var Un=function(){return!1};!function(t,e){var r=S,n=Un,i=e&&!e.nodeType&&e,a=i&&t&&!t.nodeType&&t,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;t.exports=s}(Vn,Vn.exports);var Gn=/^(?:0|[1-9]\d*)$/;var Jn=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Gn.test(t))&&t>-1&&t%1==0&&t<e};var Xn=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Qn=j,Zn=Xn,Kn=M,qn={};qn["[object Float32Array]"]=qn["[object Float64Array]"]=qn["[object Int8Array]"]=qn["[object Int16Array]"]=qn["[object Int32Array]"]=qn["[object Uint8Array]"]=qn["[object Uint8ClampedArray]"]=qn["[object Uint16Array]"]=qn["[object Uint32Array]"]=!0,qn["[object Arguments]"]=qn["[object Array]"]=qn["[object ArrayBuffer]"]=qn["[object Boolean]"]=qn["[object DataView]"]=qn["[object Date]"]=qn["[object Error]"]=qn["[object Function]"]=qn["[object Map]"]=qn["[object Number]"]=qn["[object Object]"]=qn["[object RegExp]"]=qn["[object Set]"]=qn["[object String]"]=qn["[object WeakMap]"]=!1;var ti=function(t){return Kn(t)&&Zn(t.length)&&!!qn[Qn(t)]};var ei=function(t){return function(e){return t(e)}},ri={exports:{}};!function(t,e){var r=v,n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n&&r.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=o}(ri,ri.exports);var ni=ti,ii=ei,ai=ri.exports,oi=ai&&ai.isTypedArray,si=oi?ii(oi):ni,li=zn,ci=Rn,di=b,ui=Vn.exports,hi=Jn,fi=si,gi=Object.prototype.hasOwnProperty;var pi=function(t,e){var r=di(t),n=!r&&ci(t),i=!r&&!n&&ui(t),a=!r&&!n&&!i&&fi(t),o=r||n||i||a,s=o?li(t.length,String):[],l=s.length;for(var c in t)!e&&!gi.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||hi(c,l))||s.push(c);return s},mi=Object.prototype;var yi=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||mi)};var bi=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),vi=yi,$i=bi,wi=Object.prototype.hasOwnProperty;var Si=J,Fi=Xn;var Bi=pi,xi=function(t){if(!vi(t))return $i(t);var e=[];for(var r in Object(t))wi.call(t,r)&&"constructor"!=r&&e.push(r);return e},Di=function(t){return null!=t&&Fi(t.length)&&!Si(t)};var ki=function(t){return Di(t)?Bi(t):xi(t)},Ai=En,Oi=Mn,Ei=ki;var _i=function(t){return Ai(t,Ei,Oi)},Hi=Object.prototype.hasOwnProperty;var Ci=function(t,e,r,n,i,a){var o=1&r,s=_i(t),l=s.length;if(l!=_i(e).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in e:Hi.call(e,d)))return!1}var u=a.get(t),h=a.get(e);if(u&&h)return u==e&&h==t;var f=!0;a.set(t,e),a.set(e,t);for(var g=o;++c<l;){var p=t[d=s[c]],m=e[d];if(n)var y=o?n(m,p,d,e,t,a):n(p,m,d,t,e,a);if(!(void 0===y?p===m||i(p,m,r,n,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=t.constructor,v=e.constructor;b==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(t),a.delete(e),f},ji=ht(S,"DataView"),Mi=Ut,zi=ht(S,"Promise"),Ti=ht(S,"Set"),Ii=ht(S,"WeakMap"),Ni=j,Yi=q,Li="[object Map]",Wi="[object Promise]",Pi="[object Set]",Ri="[object WeakMap]",Vi="[object DataView]",Ui=Yi(ji),Gi=Yi(Mi),Ji=Yi(zi),Xi=Yi(Ti),Qi=Yi(Ii),Zi=Ni;(ji&&Zi(new ji(new ArrayBuffer(1)))!=Vi||Mi&&Zi(new Mi)!=Li||zi&&Zi(zi.resolve())!=Wi||Ti&&Zi(new Ti)!=Pi||Ii&&Zi(new Ii)!=Ri)&&(Zi=function(t){var e=Ni(t),r="[object Object]"==e?t.constructor:void 0,n=r?Yi(r):"";if(n)switch(n){case Ui:return Vi;case Gi:return Li;case Ji:return Wi;case Xi:return Pi;case Qi:return Ri}return e});var Ki=un,qi=vn,ta=kn,ea=Ci,ra=Zi,na=b,ia=Vn.exports,aa=si,oa="[object Arguments]",sa="[object Array]",la="[object Object]",ca=Object.prototype.hasOwnProperty;var da=function(t,e,r,n,i,a){var o=na(t),s=na(e),l=o?sa:ra(t),c=s?sa:ra(e),d=(l=l==oa?la:l)==la,u=(c=c==oa?la:c)==la,h=l==c;if(h&&ia(t)){if(!ia(e))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new Ki),o||aa(t)?qi(t,e,r,n,i,a):ta(t,e,l,r,n,i,a);if(!(1&r)){var f=d&&ca.call(t,"__wrapped__"),g=u&&ca.call(e,"__wrapped__");if(f||g){var p=f?t.value():t,m=g?e.value():e;return a||(a=new Ki),i(p,m,r,n,a)}}return!!h&&(a||(a=new Ki),ea(t,e,r,n,i,a))},ua=M;var ha=function t(e,r,n,i,a){return e===r||(null==e||null==r||!ua(e)&&!ua(r)?e!=e&&r!=r:da(e,r,n,i,t,a))},fa=un,ga=ha;var pa=R;var ma=function(t){return t==t&&!pa(t)},ya=ma,ba=ki;var va=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}},$a=function(t,e,r,n){var i=r.length,a=i,o=!n;if(null==t)return!a;for(t=Object(t);i--;){var s=r[i];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var l=(s=r[i])[0],c=t[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in t))return!1}else{var u=new fa;if(n)var h=n(c,d,l,t,e,u);if(!(void 0===h?ga(d,c,3,n,u):h))return!1}}return!0},wa=function(t){for(var e=ba(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,ya(i)]}return e},Sa=va;var Fa=De,Ba=Rn,xa=b,Da=Jn,ka=Xn,Aa=Ae;var Oa=function(t,e){return null!=t&&e in Object(t)},Ea=function(t,e,r){for(var n=-1,i=(e=Fa(e,t)).length,a=!1;++n<i;){var o=Aa(e[n]);if(!(a=null!=t&&r(t,o)))break;t=t[o]}return a||++n!=i?a:!!(i=null==t?0:t.length)&&ka(i)&&Da(o,i)&&(xa(t)||Ba(t))};var _a=ha,Ha=Ce,Ca=function(t,e){return null!=t&&Ea(t,e,Oa)},ja=P,Ma=ma,za=va,Ta=Ae;var Ia=_e;var Na=function(t){return function(e){return null==e?void 0:e[t]}},Ya=function(t){return function(e){return Ia(e,t)}},La=P,Wa=Ae;var Pa=function(t){var e=wa(t);return 1==e.length&&e[0][2]?Sa(e[0][0],e[0][1]):function(r){return r===t||$a(r,t,e)}},Ra=function(t,e){return ja(t)&&Ma(e)?za(Ta(t),e):function(r){var n=Ha(r,t);return void 0===n&&n===e?Ca(r,t):_a(e,n,3)}},Va=function(t){return t},Ua=b,Ga=function(t){return La(t)?Na(Wa(t)):Ya(t)};var Ja=/\s/;var Xa=function(t){for(var e=t.length;e--&&Ja.test(t.charAt(e)););return e},Qa=/^\s+/;var Za=function(t){return t?t.slice(0,Xa(t)+1).replace(Qa,""):t},Ka=R,qa=I,to=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,no=parseInt;var io=function(t){if("number"==typeof t)return t;if(qa(t))return NaN;if(Ka(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ka(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Za(t);var r=eo.test(t);return r||ro.test(t)?no(t.slice(2),r?2:8):to.test(t)?NaN:+t},ao=1/0;var oo=function(t){return t?(t=io(t))===ao||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var so=Kr,lo=function(t){return"function"==typeof t?t:null==t?Va:"object"==typeof t?Ua(t)?Ra(t[0],t[1]):Pa(t):Ga(t)},co=function(t){var e=oo(t),r=e%1;return e==e?r?e-r:e:0},uo=Math.max;var ho=function(t,e,r){var n=null==t?0:t.length;if(!n)return-1;var i=null==r?0:co(r);return i<0&&(i=uo(n+i,0)),so(t,lo(e),i)};const fo=e.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`,go=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,po=e.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Ne.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${go} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,mo=e(po)`
    animation-delay: -0.45s;
`,yo=e(po)`
    animation-delay: -0.3s;
`,bo=e(po)`
    animation-delay: -0.15s;
`,vo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$o={collections:{base:{D1:{fontFamily:vo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wo=t=>e=>{const r=e.theme,n=Me($o,r[ze.textStyleScheme]);return r.options&&r.options.textStyle?je(n,t,r.options.textStyle):je(n,t)},So={D1:{fontFamily:wo("D1.fontFamily"),fontSize:wo("D1.fontSize"),fontWeight:wo("D1.fontWeight"),lineHeight:wo("D1.lineHeight"),letterSpacing:wo("D1.letterSpacing")},D2:{fontFamily:wo("D2.fontFamily"),fontSize:wo("D2.fontSize"),fontWeight:wo("D2.fontWeight"),lineHeight:wo("D2.lineHeight"),letterSpacing:wo("D2.letterSpacing")},D3:{fontFamily:wo("D3.fontFamily"),fontSize:wo("D3.fontSize"),fontWeight:wo("D3.fontWeight"),lineHeight:wo("D3.lineHeight"),letterSpacing:wo("D3.letterSpacing")},D4:{fontFamily:wo("D4.fontFamily"),fontSize:wo("D4.fontSize"),fontWeight:wo("D4.fontWeight"),lineHeight:wo("D4.lineHeight"),letterSpacing:wo("D4.letterSpacing")},DBody:{fontFamily:wo("DBody.fontFamily"),fontSize:wo("DBody.fontSize"),fontWeight:wo("DBody.fontWeight"),lineHeight:wo("DBody.lineHeight"),letterSpacing:wo("DBody.letterSpacing")},H1:{fontFamily:wo("H1.fontFamily"),fontSize:wo("H1.fontSize"),fontWeight:wo("H1.fontWeight"),lineHeight:wo("H1.lineHeight"),letterSpacing:wo("H1.letterSpacing")},H2:{fontFamily:wo("H2.fontFamily"),fontSize:wo("H2.fontSize"),fontWeight:wo("H2.fontWeight"),lineHeight:wo("H2.lineHeight"),letterSpacing:wo("H2.letterSpacing")},H3:{fontFamily:wo("H3.fontFamily"),fontSize:wo("H3.fontSize"),fontWeight:wo("H3.fontWeight"),lineHeight:wo("H3.lineHeight"),letterSpacing:wo("H3.letterSpacing")},H4:{fontFamily:wo("H4.fontFamily"),fontSize:wo("H4.fontSize"),fontWeight:wo("H4.fontWeight"),lineHeight:wo("H4.lineHeight"),letterSpacing:wo("H4.letterSpacing")},H5:{fontFamily:wo("H5.fontFamily"),fontSize:wo("H5.fontSize"),fontWeight:wo("H5.fontWeight"),lineHeight:wo("H5.lineHeight"),letterSpacing:wo("H5.letterSpacing")},H6:{fontFamily:wo("H6.fontFamily"),fontSize:wo("H6.fontSize"),fontWeight:wo("H6.fontWeight"),lineHeight:wo("H6.lineHeight"),letterSpacing:wo("H6.letterSpacing")},Body:{fontFamily:wo("Body.fontFamily"),fontSize:wo("Body.fontSize"),fontWeight:wo("Body.fontWeight"),lineHeight:wo("Body.lineHeight"),letterSpacing:wo("Body.letterSpacing")},BodySmall:{fontFamily:wo("BodySmall.fontFamily"),fontSize:wo("BodySmall.fontSize"),fontWeight:wo("BodySmall.fontWeight"),lineHeight:wo("BodySmall.lineHeight"),letterSpacing:wo("BodySmall.letterSpacing")},XSmall:{fontFamily:wo("XSmall.fontFamily"),fontSize:wo("XSmall.fontSize"),fontWeight:wo("XSmall.fontWeight"),lineHeight:wo("XSmall.lineHeight"),letterSpacing:wo("XSmall.letterSpacing")}},Fo=t=>{switch(t){case 700:case"bold":return vo.Bold;case 600:case"semibold":return vo.Semibold;case 300:case"light":return vo.Light;case 400:case"regular":return vo.Regular;default:return""}},Bo=(t,e)=>n=>{var i;const a=So[t].fontFamily(n),o=So[t].fontWeight(n);return Object.values(vo).includes(a)?r`
                font-family: ${Fo(e)||Fo(o)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${null!==(i=xo(e)||o)&&void 0!==i?i:"normal"};
        `},xo=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Do=t=>{if(t>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},ko=(t,e,n=!1)=>i=>{const a=So[t],o=a.fontSize(i);return r`
            ${Bo(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ao=(t=!1,e=!1,n=void 0)=>e?r`
            display: block;
            ${Do(n)}
        `:t?r`
            display: inline;
        `:r`
            display: block;
            ${Do(n)}
        `;var Oo;!function(t){t.D1=e.h1`
        ${t=>r`
                ${ko("D1",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=e.h1`
        ${t=>r`
                ${ko("D2",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=e.h1`
        ${t=>r`
                ${ko("D3",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=e.h1`
        ${t=>r`
                ${ko("D4",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=e.h1`
        ${t=>r`
                ${ko("DBody",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=e.h1`
        ${t=>r`
                ${ko("H1",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=e.h2`
        ${t=>r`
                ${ko("H2",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=e.h3`
        ${t=>r`
                ${ko("H3",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=e.h4`
        ${t=>r`
                ${ko("H4",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=e.h5`
        ${t=>r`
                ${ko("H5",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=e.h6`
        ${t=>r`
                ${ko("H6",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=e.p`
        ${t=>r`
                ${ko("Body",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=e.p`
        ${t=>r`
                ${ko("BodySmall",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=e.span`
        ${t=>r`
                ${ko("XSmall",t.weight,t.paragraph)}
                color: ${Ne.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ho(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ho(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Oo||(Oo={}));const Eo=e.a`
    ${t=>r`
            ${ko(t.textStyle,t.weight)}
            color: ${Ne.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne.Secondary};

                svg {
                    color: ${Ne.Secondary};
                }
            }
        `}
`,_o=e(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ho=t=>{var{external:e=!1,children:r}=t,n=Pe(t,["external","children"]);return a(Eo,Object.assign({},n,{children:[r,e&&i(_o,{})]}))};var Co;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Co||(Co={}));const jo={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${Ne.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${Ne.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Ne.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${Ne.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${Ne.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Ne.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Mo=t=>e=>{var r;const n=e.theme,i=Me(jo,n[ze.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?je(i,t,n.options.designToken):je(i,t)},zo={InputBoxShadow:Mo("InputBoxShadow"),InputErrorBoxShadow:Mo("InputErrorBoxShadow"),ElevationBoxShadow:Mo("ElevationBoxShadow"),Table:{Header:Mo("Table.Header"),Cell:{Primary:Mo("Table.Cell.Primary"),Secondary:Mo("Table.Cell.Secondary"),Selected:Mo("Table.Cell.Selected"),Hover:Mo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Mo("Button.Danger.BackgroundColor"),Hover:Mo("Button.Danger.Hover"),Primary:Mo("Button.Danger.Primary"),Border:Mo("Button.Danger.Border")}}},To=e.button`
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
                    background-color: ${Ne.Neutral[8]};
                    border: 1px solid
                        ${t.$buttonIsDanger?zo.Button.Danger.Border:Ne.Primary};

                    span {
                        color: ${t.$buttonIsDanger?zo.Button.Danger.Primary:Ne.Primary};
                    }
                `;case"light":return r`
                    background-color: ${Ne.Neutral[8]};
                    border: 1px solid ${Ne.Neutral[5]};

                    span {
                        color: ${t.$buttonIsDanger?zo.Button.Danger.Primary:Ne.Primary};
                    }
                `;case"disabled":return r`
                    background-color: ${Ne.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ne.Neutral[3]};
                    }
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${t.$buttonIsDanger?zo.Button.Danger.Primary:Ne.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${t.$buttonIsDanger?zo.Button.Danger.Hover:Ne.Secondary};
                        }
                    }
                `;default:return r`
                    background-color: ${t.$buttonIsDanger?zo.Button.Danger.BackgroundColor:Ne.Primary};
                    border: 1px solid transparent;

                    ${We.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ne.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?r`
                    height: 2.5rem;
                    span {
                        ${ko("H5","semibold")}
                    }

                    ${We.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    span {
                        ${ko("H4","semibold")}
                    }

                    ${We.mobileS} {
                        height: auto;
                    }
                `}
`,Io=e((({color:t,className:e,size:r=18})=>a(fo,Object.assign({className:e,$size:r,$color:t},{children:[i(po,{id:"inner1",$size:r-2,$borderWidth:2}),i(mo,{id:"inner2",$size:r-2,$borderWidth:2}),i(yo,{id:"inner3",$size:r-2,$borderWidth:2}),i(bo,{id:"inner4",$size:r-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${t=>{let e=t.$buttonIsDanger?zo.Button.Danger.Primary:Ne.Primary(t);switch(t.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":e=Ne.Neutral[3](t);break;default:e=Ne.Neutral[8](t)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,No={Default:s.forwardRef(((t,e)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=Pe(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return a(To,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Io,Object.assign({},d)),i("span",{children:r})]}))})),Small:s.forwardRef(((t,e)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,c=Pe(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return a(To,Object.assign({ref:e,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Io,Object.assign({},d,{size:16})),i("span",{children:r})]}))}))},Yo=e.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${We.tablet} {
        display: none;
    }
`,Lo=e.ul`
    display: none;

    ${We.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Wo=e.ul`
    display: none;
    list-style: none;

    ${We.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${We.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Po=e.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${We.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${t=>t.$mobile?"1rem":"0"};
        }
    }

    ${We.mobileL} {
        ${t=>{if(t.$mobile)return r`
                    padding: 0 1rem;
                `}}
    }
`,Ro=e(No.Small)`
    ${We.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,Vo=e.div`
    display: none;

    ${We.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,Uo=e(Oo.BodySmall)`
    margin-bottom: 0.5rem;
`,Go=e.div`
    display: flex;
`,Jo=e.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${We.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${We.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,Xo=({actionButtons:t,mobile:e=!1,onActionButtonClick:r})=>{const n=t=>{t.stopPropagation()},s=t=>e=>{e.stopPropagation(),"download"===t.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(e,t)},l=(t,e)=>{const r=t?(t=>{const e=ho(t,(t=>"download"===t.type));if(e>-1){const r=[...t],n=r.splice(e,1);return[...r,n[0]]}return t})(e):e;return r.map(((e,r)=>{let o;switch(e.type){case"download":o=t?(l=e.args,a(Vo,{children:[i(Uo,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(Go,{children:[i(Jo,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(Jo,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(Ro,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;o=i(Ro,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":n}));break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var l;if(o)return i(Po,Object.assign({$mobile:t},{children:o}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,n=r.filter((t=>!!t.uncollapsible)),s=r.filter((t=>!t.uncollapsible));return e?i(o,{children:s.length>0&&i(Wo,{children:l(e,s)})}):a(o,{children:[n.length>0&&i(Lo,{children:l(!1,n)}),t.desktop.length>0&&i(Yo,{children:l(e,t.desktop)})]})}return i(o,{})},Qo=e.ul`
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

    background: ${Ne.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${zo.ElevationBoxShadow};
`,Zo=e.ul`
    display: none;
    list-style: none;

    ${We.tablet} {
        border-left: 0.25rem solid ${Ne.Primary};
        display: flex;
        flex-direction: column;
    }
`,Ko=e(Oo.Hyperlink.Small)`
    ${ko("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Ne.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Ne.Primary};
    }
    :hover {
        color: ${Ne.Accent.Light[1]};
    }

    ${We.tablet} {
        ${ko("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,qo=e.li`
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

    ${We.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ts=({items:t,mobile:e=!1,onItemClick:r})=>{const n=t=>e=>{e.stopPropagation(),r(e,t)},a=(e=!1)=>t.map(((t,r)=>{const{children:a,options:o}=t,s=Pe(t,["children","options"]),l=e?`link__mobile-${r+1}`:`link__${r+1}`;return i(qo,{children:i(Ko,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:n(t)},o,{children:a}))},r)}));if(t&&t.length>0){return i(e?Zo:Qo,{children:a(e)})}return i(o,{})},es=e.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${t=>t.$alignLeft&&"margin-right: auto;"}

    ${We.tablet} {
        display: none;
    }
`,rs=e.ul`
    display: none;
    list-style: none;

    ${We.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,ns=e.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${t=>t.$hiddenBranding?"-0.5rem":"0"};
    }

    ${We.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,is=e(Oo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ne.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Ne.Neutral[1]};
    }

    ${We.tablet} {
        color: ${Ne.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Ne.Neutral[1]};
        }
    }
`,as=e.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,os=e.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Ne.Primary};

    ${We.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Ne.Primary};
    }
`,ss=e.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,ls=e(Ve)`
    padding: 0.5rem;
    transform: rotate(${t=>t.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,cs=e(m)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ne.Neutral[3]};
    :hover {
        color: ${Ne.Neutral[1]};
    }
`,ds=({items:t,selectedId:e,mobile:r=!1,hideNavBranding:n,onItemClick:s})=>{const[u,h]=c(-1),[f,g]=c(!1),p=d(null);l((()=>{const t=t=>{p.current&&!p.current.contains(t.target)&&m()};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}}),[]);const m=()=>{g(!1)},y=(t,e)=>r=>{r.stopPropagation(),h(e),g(!0),s(r,t)},b=(t,e)=>{t.stopPropagation(),s(t,e),g(!1)},v=()=>t.map(((t,o)=>{if("component"===t.itemType){const e=t&&t.children||null;return i("li",{children:e},o)}{const s=(t=>{if(t.id===e)return!0;if((null==t?void 0:t.subMenu)&&t.subMenu.length>=1)return!!t.subMenu.find((t=>t.id===e));return!1})(t),{children:l,options:c}=t,d=Pe(t,["children","options"]),h=s?r?"bold":"semibold":"regular",g=r?`link__mobile-${o+1}`:`link__${o+1}`,p=u>=0&&u===o&&f;return a(ns,Object.assign({$hiddenBranding:n},{children:[a(is,Object.assign({"data-testid":g,weight:h,$selected:s},d,{onClick:y(t,o)},c,{children:[i(as,{children:l}),s&&i(os,{"data-testid":`${g}-indicator`}),r&&t.subMenu&&i(ss,{children:i(ls,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:i(cs,{})}))})]})),p&&i(ts,{items:t.subMenu,mobile:r,onItemClick:b})]}),o)}}));return t&&t.length>0?r?i(rs,Object.assign({ref:p},{children:v()})):i(es,Object.assign({ref:p,$alignLeft:n},{children:v()})):i(o,{})},us=u(((t,e)=>{var{items:r,className:n,id:s,selectedId:u,compress:f=!1,fixed:g=!0,resources:p=hs,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:w,onBrandClick:S,masthead:F=!0,layout:B="default"}=t,x=Pe(t,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,k]=c(!1),[A,O]=c(!1),E="stretch"===B,_=d(),{primary:H=hs.primary,secondary:C}=p;h(e,(()=>Object.assign(_.current,{dismissDrawer:()=>{j()}})),[D]),l((()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)})),[]);const j=()=>{k(!1),setTimeout((()=>{O(!1)}),550)},M=t=>D&&-1===b.indexOf(t),z=()=>{window.innerWidth<=Ye.tablet&&D&&j()},T=(t,e)=>{S&&(t.preventDefault(),S(e)),M("brand-click")&&j()},I=(t,e)=>{e.onClick?e.onClick(t):$&&(t.preventDefault(),$(e)),!(null==e?void 0:e.subMenu)&&M("item-click")&&j()},N=(t,e)=>{e.args&&e.args.onClick?e.args.onClick(t):w&&(t.preventDefault(),w(e)),M("item-click")&&j()},Y=()=>{k(!0),O(!0)},L=()=>{M("close-button-click")&&j()},W=()=>r.mobile&&r.mobile.length>0||r.desktop&&r.desktop.length>0||v&&!(()=>{if(v.mobile&&v.mobile.some((t=>t.uncollapsible)))return!0;if(v.desktop&&v.desktop.some((t=>t.uncollapsible)))return!0;return!1})()?i(Ze,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1},{children:i(Ke,{})})):null;return a(Je,Object.assign({ref:_,$fixed:g,className:n,id:s||"navbar-wrapper","data-testid":x["data-testid"]||"navbar-wrapper"},{children:[F&&i(ur,{}),a(cr.Content,Object.assign({stretch:E},{children:[a(Xe,Object.assign({$compress:f},{children:[!y&&a(qe,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(Rr,{resources:H,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),C&&a(o,{children:[i(tr,{$compress:f}),i(Rr,{resources:C,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(Qe,Object.assign({$hideNavBranding:y},{children:[i(ds,{items:r.desktop,onItemClick:I,selectedId:u,hideNavBranding:y}),i(Xo,{actionButtons:v,onActionButtonClick:N}),W()]}))]})),!m&&i(Nr,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:L},{children:a(Zr,Object.assign({show:D,resources:{primary:H,secondary:C},onClose:L,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(ds,{items:r.mobile||r.desktop,onItemClick:I,selectedId:u,mobile:!0}),i(Xo,{actionButtons:v,onActionButtonClick:N,mobile:!0})]}))}))]}))]}))})),hs={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},fs=Ge,gs=3.5;export{us as Navbar,fs as NavbarHeight,gs as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
