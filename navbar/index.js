import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as r,keyframes as n}from"styled-components";import{jsx as i,jsxs as o,Fragment as a}from"react/jsx-runtime";import l,{useEffect as c,useState as s,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import p from"react-dom";import{CrossIcon as g}from"@lifesg/react-icons/cross";import{ExternalIcon as f}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=Array.isArray,v="object"==typeof b&&b&&b.Object===Object&&b,$=v,w="object"==typeof self&&self&&self.Object===Object&&self,F=$||w||Function("return this")(),B=F.Symbol,S=B,x=Object.prototype,k=x.hasOwnProperty,j=x.toString,A=S?S.toStringTag:void 0;var _=function(e){var t=k.call(e,A),r=e[A];try{e[A]=void 0;var n=!0}catch(e){}var i=j.call(e);return n&&(t?e[A]=r:delete e[A]),i},E=Object.prototype.toString;var O=_,H=function(e){return E.call(e)},D=B?B.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":D&&D in Object(e)?O(e):H(e)};var z=function(e){return null!=e&&"object"==typeof e},N=C,I=z;var T=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==N(e)},W=y,P=T,R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,L=/^\w*$/;var V=function(e,t){if(W(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!P(e))||(L.test(e)||!R.test(e)||null!=t&&e in Object(t))};var U=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=C,Y=U;var G,Q=function(e){if(!Y(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},X=F["__core-js_shared__"],J=(G=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var K=function(e){return!!J&&J in e},q=Function.prototype.toString;var Z=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ee=Q,te=K,re=U,ne=Z,ie=/^\[object .+?Constructor\]$/,oe=Function.prototype,ae=Object.prototype,le=oe.toString,ce=ae.hasOwnProperty,se=RegExp("^"+le.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var de=function(e){return!(!re(e)||te(e))&&(ee(e)?se:ie).test(ne(e))},ue=function(e,t){return null==e?void 0:e[t]};var he=function(e,t){var r=ue(e,t);return de(r)?r:void 0},pe=he(Object,"create"),ge=pe;var fe=function(){this.__data__=ge?ge(null):{},this.size=0};var me=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},be=pe,ye=Object.prototype.hasOwnProperty;var ve=function(e){var t=this.__data__;if(be){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ye.call(t,e)?t[e]:void 0},$e=pe,we=Object.prototype.hasOwnProperty;var Fe=pe;var Be=fe,Se=me,xe=ve,ke=function(e){var t=this.__data__;return $e?void 0!==t[e]:we.call(t,e)},je=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ae.prototype.clear=Be,Ae.prototype.delete=Se,Ae.prototype.get=xe,Ae.prototype.has=ke,Ae.prototype.set=je;var _e=Ae;var Ee=function(){this.__data__=[],this.size=0};var Oe=function(e,t){return e===t||e!=e&&t!=t},He=Oe;var De=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Ce=De,ze=Array.prototype.splice;var Ne=De;var Ie=De;var Te=De;var We=Ee,Pe=function(e){var t=this.__data__,r=Ce(t,e);return!(r<0)&&(r==t.length-1?t.pop():ze.call(t,r,1),--this.size,!0)},Re=function(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]},Le=function(e){return Ie(this.__data__,e)>-1},Ve=function(e,t){var r=this.__data__,n=Te(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ue.prototype.clear=We,Ue.prototype.delete=Pe,Ue.prototype.get=Re,Ue.prototype.has=Le,Ue.prototype.set=Ve;var Me=Ue,Ye=he(F,"Map"),Ge=_e,Qe=Me,Xe=Ye;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var r=e.__data__;return Je(t)?r["string"==typeof t?"string":"hash"]:r.map},qe=Ke;var Ze=Ke;var et=Ke;var tt=Ke;var rt=function(){this.size=0,this.__data__={hash:new Ge,map:new(Xe||Qe),string:new Ge}},nt=function(e){var t=qe(this,e).delete(e);return this.size-=t?1:0,t},it=function(e){return Ze(this,e).get(e)},ot=function(e){return et(this,e).has(e)},at=function(e,t){var r=tt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=rt,lt.prototype.delete=nt,lt.prototype.get=it,lt.prototype.has=ot,lt.prototype.set=at;var ct=lt,st=ct;function dt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(dt.Cache||st),r}dt.Cache=st;var ut=dt;var ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pt=/\\(\\)?/g,gt=function(e){var t=ut(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ht,(function(e,r,n,i){t.push(n?i.replace(pt,"$1"):r||e)})),t}));var ft=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},mt=y,bt=T,yt=B?B.prototype:void 0,vt=yt?yt.toString:void 0;var $t=function e(t){if("string"==typeof t)return t;if(mt(t))return ft(t,e)+"";if(bt(t))return vt?vt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},wt=$t;var Ft=y,Bt=V,St=gt,xt=function(e){return null==e?"":wt(e)};var kt=function(e,t){return Ft(e)?e:Bt(e,t)?[e]:St(xt(e))},jt=T;var At=function(e){if("string"==typeof e||jt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},_t=kt,Et=At;var Ot=function(e,t){for(var r=0,n=(t=_t(t,e)).length;null!=e&&r<n;)e=e[Et(t[r++])];return r&&r==n?e:void 0},Ht=Ot;var Dt=function(e,t,r){var n=null==e?void 0:Ht(e,t);return void 0===n?r:n};const Ct=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,zt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var Nt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Nt||(Nt={}));const It={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const r=t.theme,n=zt(It,r[Nt.colorScheme]);return r.options&&r.options.color?Ct(n,e,r.options.color):Ct(n,e)},Wt={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}},Pt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Rt=e=>Object.keys(Pt).reduce(((t,r)=>{const n=Pt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Lt=Rt("max-width");Rt("min-width");function Vt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}const Ut=t.button`
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

        ${({$highlight:e})=>e&&r`
                background-color: ${Wt.Neutral[7]};
            `}
    }
`,Mt=l.forwardRef(((e,t)=>{var{children:r,focusHighlight:n=!0,focusOutline:o="none",type:a="button"}=e,l=Vt(e,["children","focusHighlight","focusOutline","type"]);return i(Ut,Object.assign({ref:t,$outline:o,$highlight:n,type:a},l,{children:r}))})),Yt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Gt={notCompress:6,compress:4},Qt=t.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Xt=t.nav`
    height: ${e=>e.$compress?Gt.compress:Gt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Yt};

    ${Lt.tablet} {
        height: ${3.5}rem;
    }
`,Jt=t.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Lt.tablet} {
        margin-left: 0rem;
    }
`,Kt=t(Mt)`
    display: none;

    ${Lt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,qt=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Wt.Neutral[1]};
`,Zt=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Lt.tablet} {
        height: 1.5rem;
    }

    ${Lt.mobileS} {
        height: 1.25rem;
    }
`,er=t.div`
    display: flex;
    background-color: ${Wt.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Lt.tablet} {
        margin: 0 1rem;
    }

    ${Lt.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,tr=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="container",type:o="flex",stretch:a=!1}=e,l=Vt(e,["children","data-testid","type","stretch"]);return i(rr,Object.assign({ref:t,"data-testid":n,$type:o,$stretch:a},l,{children:r}))})),rr=t.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?r`
                padding: 0 3rem;
            `:r`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Lt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Lt.tablet} {
        max-width: 720px;
    }
    ${Lt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Lt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Lt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,nr=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="section",stretch:o=!1}=e,a=Vt(e,["children","data-testid","stretch"]);return i(ir,Object.assign({ref:t,"data-testid":n,$stretch:o},a,{children:r}))})),ir=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?r`
                ${Lt.tablet} {
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
`,or=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="content",className:o,type:a="flex",stretch:l=!1}=e,c=Vt(e,["children","data-testid","className","type","stretch"]);return i(nr,Object.assign({ref:t,"data-testid":n,className:o,stretch:l},c,{children:i(tr,Object.assign({"data-testid":`${n}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),ar={Section:nr,Container:tr,Content:or},lr=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Lt.mobileL} {
        padding: 0;
    }
`,cr=()=>{c((()=>{e()||t()}),[]);const e=()=>document.getElementById(sr),t=()=>{if(!document.getElementById(sr)){const e=document.createElement("script");e.id=sr,e.type="module",e.src=dr,document.head.appendChild(e)}};return i(lr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},sr="lifesg-ds-masthead-script",dr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",ur=t.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return r`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,hr=t.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=r`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=r`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=r`
                transition: none;
            `),t}}
`,pr=({show:e=!1,rootId:t,onOverlayClick:r,children:n,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:f})=>{const[m,b]=s(null),[y,v]=s(),$=d(),w=d(!1),F=d(null),B=n&&l.cloneElement(n,{ref:F}),S=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root";c((()=>{const t=!0===w.current;if(t||(w.current=!0),e){const e=j();if(x(e),!e){const e=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(e)}}else{if(!t)return;if(!$.current){const e=setTimeout((()=>{_("remove")}),200);return()=>clearTimeout(e)}}}),[e]),c((()=>{b(k());const e=j();return x(e),e||A(),()=>{_("remove")}}),[]);const x=e=>{$.current=e,v(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,j=()=>document.body.classList.contains(fr),A=()=>{if(!document.getElementById(gr)){const e=document.createElement("style");e.id=gr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${fr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${fr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(fr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(fr):document.body.classList.add(fr)},E=e=>{var t;const n=null===(t=F.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?p.createPortal(i(ur,Object.assign({id:S,"data-testid":S,$show:e,zIndex:g,$stacked:y},{children:n&&i(hr,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(y?.5:.8),$backgroundBlur:a,$disableTransition:u,$enableOverlayClick:h,onClick:E},{children:B}))})),m):null},gr="lifesg-ds-overlay-stylesheet",fr="lifesg-ds-overlay-open",mr=t.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Yt};
        object-fit: contain;
    }
`;const br=({src:e,alt:t,className:r,"data-testid":n})=>i("img",{src:e,alt:t||"",className:r,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),yr=({resources:e,onClick:t,"data-id":r,"data-testid":n="navbar-brand",type:o})=>i(mr,Object.assign({role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{t&&t(e,o)},tabIndex:0,"data-id":r,"data-testid":n,$type:o},{children:i(br,{src:e.logoSrc,alt:e.brandName+"-app-logo"})})),vr=t.div`
    display: none;

    ${Lt.tablet} {
        display: flex;
    }
`,$r=t.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?r`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:r`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return r`
            height: calc(${t} * 100);
        `}}

	${Lt.tablet} {
        width: 75%;
    }

    ${Lt.mobileL} {
        width: 100%;
    }
`,wr=t.div`
    display: flex;
    flex-direction: column;
`,Fr=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Br=t(g)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Sr=t(Mt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Wt.Neutral[1]};

    :active,
    :focus {
        color: ${Wt.Primary};
    }
`,xr=l.forwardRef(((e,t)=>{const{show:r,resources:n,children:l,hideNavBranding:d,onClose:u,onBrandClick:h}=e,[p,g]=s(0),{primary:f,secondary:m}=n;c((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return i(vr,Object.assign({ref:t,"data-testid":"drawer"},{children:i($r,Object.assign({$show:r,$viewHeight:p},{children:o(wr,{children:[o(Fr,{children:[i(Zt,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&o(a,{children:[i(yr,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&o(a,{children:[i(er,{}),i(yr,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(Sr,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Br,{})}))]}),l]})}))}))}));var kr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},jr=Me;var Ar=Me,_r=Ye,Er=ct;var Or=Me,Hr=function(){this.__data__=new jr,this.size=0},Dr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Cr=function(e){return this.__data__.get(e)},zr=function(e){return this.__data__.has(e)},Nr=function(e,t){var r=this.__data__;if(r instanceof Ar){var n=r.__data__;if(!_r||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Er(n)}return r.set(e,t),this.size=r.size,this};function Ir(e){var t=this.__data__=new Or(e);this.size=t.size}Ir.prototype.clear=Hr,Ir.prototype.delete=Dr,Ir.prototype.get=Cr,Ir.prototype.has=zr,Ir.prototype.set=Nr;var Tr=Ir;var Wr=ct,Pr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Rr=function(e){return this.__data__.has(e)};function Lr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Wr;++t<r;)this.add(e[t])}Lr.prototype.add=Lr.prototype.push=Pr,Lr.prototype.has=Rr;var Vr=Lr,Ur=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Mr=function(e,t){return e.has(t)};var Yr=function(e,t,r,n,i,o){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(e),d=o.get(t);if(s&&d)return s==t&&d==e;var u=-1,h=!0,p=2&r?new Vr:void 0;for(o.set(e,t),o.set(t,e);++u<l;){var g=e[u],f=t[u];if(n)var m=a?n(f,g,u,t,e,o):n(g,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Ur(t,(function(e,t){if(!Mr(p,t)&&(g===e||i(g,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(g!==f&&!i(g,f,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Gr=F.Uint8Array,Qr=Oe,Xr=Yr,Jr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Kr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},qr=B?B.prototype:void 0,Zr=qr?qr.valueOf:void 0;var en=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Gr(e),new Gr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Qr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=Jr;case"[object Set]":var c=1&n;if(l||(l=Kr),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;n|=2,a.set(e,t);var d=Xr(l(e),l(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(Zr)return Zr.call(e)==Zr.call(t)}return!1};var tn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},rn=y;var nn=function(e,t,r){var n=t(e);return rn(e)?n:tn(n,r(e))};var on=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},an=function(){return[]},ln=Object.prototype.propertyIsEnumerable,cn=Object.getOwnPropertySymbols,sn=cn?function(e){return null==e?[]:(e=Object(e),on(cn(e),(function(t){return ln.call(e,t)})))}:an;var dn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},un=C,hn=z;var pn=function(e){return hn(e)&&"[object Arguments]"==un(e)},gn=z,fn=Object.prototype,mn=fn.hasOwnProperty,bn=fn.propertyIsEnumerable,yn=pn(function(){return arguments}())?pn:function(e){return gn(e)&&mn.call(e,"callee")&&!bn.call(e,"callee")},vn={exports:{}};var $n=function(){return!1};!function(e,t){var r=F,n=$n,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}(vn,vn.exports);var wn=/^(?:0|[1-9]\d*)$/;var Fn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&wn.test(e))&&e>-1&&e%1==0&&e<t};var Bn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Sn=C,xn=Bn,kn=z,jn={};jn["[object Float32Array]"]=jn["[object Float64Array]"]=jn["[object Int8Array]"]=jn["[object Int16Array]"]=jn["[object Int32Array]"]=jn["[object Uint8Array]"]=jn["[object Uint8ClampedArray]"]=jn["[object Uint16Array]"]=jn["[object Uint32Array]"]=!0,jn["[object Arguments]"]=jn["[object Array]"]=jn["[object ArrayBuffer]"]=jn["[object Boolean]"]=jn["[object DataView]"]=jn["[object Date]"]=jn["[object Error]"]=jn["[object Function]"]=jn["[object Map]"]=jn["[object Number]"]=jn["[object Object]"]=jn["[object RegExp]"]=jn["[object Set]"]=jn["[object String]"]=jn["[object WeakMap]"]=!1;var An=function(e){return kn(e)&&xn(e.length)&&!!jn[Sn(e)]};var _n=function(e){return function(t){return e(t)}},En={exports:{}};!function(e,t){var r=v,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(En,En.exports);var On=An,Hn=_n,Dn=En.exports,Cn=Dn&&Dn.isTypedArray,zn=Cn?Hn(Cn):On,Nn=dn,In=yn,Tn=y,Wn=vn.exports,Pn=Fn,Rn=zn,Ln=Object.prototype.hasOwnProperty;var Vn=function(e,t){var r=Tn(e),n=!r&&In(e),i=!r&&!n&&Wn(e),o=!r&&!n&&!i&&Rn(e),a=r||n||i||o,l=a?Nn(e.length,String):[],c=l.length;for(var s in e)!t&&!Ln.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Pn(s,c))||l.push(s);return l},Un=Object.prototype;var Mn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Un)};var Yn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Gn=Mn,Qn=Yn,Xn=Object.prototype.hasOwnProperty;var Jn=Q,Kn=Bn;var qn=Vn,Zn=function(e){if(!Gn(e))return Qn(e);var t=[];for(var r in Object(e))Xn.call(e,r)&&"constructor"!=r&&t.push(r);return t},ei=function(e){return null!=e&&Kn(e.length)&&!Jn(e)};var ti=function(e){return ei(e)?qn(e):Zn(e)},ri=nn,ni=sn,ii=ti;var oi=function(e){return ri(e,ii,ni)},ai=Object.prototype.hasOwnProperty;var li=function(e,t,r,n,i,o){var a=1&r,l=oi(e),c=l.length;if(c!=oi(t).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in t:ai.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var g=a;++s<c;){var f=e[d=l[s]],m=t[d];if(n)var b=a?n(m,f,d,t,e,o):n(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,r,n,o):b)){p=!1;break}g||(g="constructor"==d)}if(p&&!g){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},ci=he(F,"DataView"),si=Ye,di=he(F,"Promise"),ui=he(F,"Set"),hi=he(F,"WeakMap"),pi=C,gi=Z,fi="[object Map]",mi="[object Promise]",bi="[object Set]",yi="[object WeakMap]",vi="[object DataView]",$i=gi(ci),wi=gi(si),Fi=gi(di),Bi=gi(ui),Si=gi(hi),xi=pi;(ci&&xi(new ci(new ArrayBuffer(1)))!=vi||si&&xi(new si)!=fi||di&&xi(di.resolve())!=mi||ui&&xi(new ui)!=bi||hi&&xi(new hi)!=yi)&&(xi=function(e){var t=pi(e),r="[object Object]"==t?e.constructor:void 0,n=r?gi(r):"";if(n)switch(n){case $i:return vi;case wi:return fi;case Fi:return mi;case Bi:return bi;case Si:return yi}return t});var ki=Tr,ji=Yr,Ai=en,_i=li,Ei=xi,Oi=y,Hi=vn.exports,Di=zn,Ci="[object Arguments]",zi="[object Array]",Ni="[object Object]",Ii=Object.prototype.hasOwnProperty;var Ti=function(e,t,r,n,i,o){var a=Oi(e),l=Oi(t),c=a?zi:Ei(e),s=l?zi:Ei(t),d=(c=c==Ci?Ni:c)==Ni,u=(s=s==Ci?Ni:s)==Ni,h=c==s;if(h&&Hi(e)){if(!Hi(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new ki),a||Di(e)?ji(e,t,r,n,i,o):Ai(e,t,c,r,n,i,o);if(!(1&r)){var p=d&&Ii.call(e,"__wrapped__"),g=u&&Ii.call(t,"__wrapped__");if(p||g){var f=p?e.value():e,m=g?t.value():t;return o||(o=new ki),i(f,m,r,n,o)}}return!!h&&(o||(o=new ki),_i(e,t,r,n,i,o))},Wi=z;var Pi=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Wi(t)&&!Wi(r)?t!=t&&r!=r:Ti(t,r,n,i,e,o))},Ri=Tr,Li=Pi;var Vi=U;var Ui=function(e){return e==e&&!Vi(e)},Mi=Ui,Yi=ti;var Gi=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Qi=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var c=(l=r[i])[0],s=e[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var u=new Ri;if(n)var h=n(s,d,c,e,t,u);if(!(void 0===h?Li(d,s,3,n,u):h))return!1}}return!0},Xi=function(e){for(var t=Yi(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Mi(i)]}return t},Ji=Gi;var Ki=kt,qi=yn,Zi=y,eo=Fn,to=Bn,ro=At;var no=function(e,t){return null!=e&&t in Object(e)},io=function(e,t,r){for(var n=-1,i=(t=Ki(t,e)).length,o=!1;++n<i;){var a=ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&to(i)&&eo(a,i)&&(Zi(e)||qi(e))};var oo=Pi,ao=Dt,lo=function(e,t){return null!=e&&io(e,t,no)},co=V,so=Ui,uo=Gi,ho=At;var po=Ot;var go=function(e){return function(t){return null==t?void 0:t[e]}},fo=function(e){return function(t){return po(t,e)}},mo=V,bo=At;var yo=function(e){var t=Xi(e);return 1==t.length&&t[0][2]?Ji(t[0][0],t[0][1]):function(r){return r===e||Qi(r,e,t)}},vo=function(e,t){return co(e)&&so(t)?uo(ho(e),t):function(r){var n=ao(r,e);return void 0===n&&n===t?lo(r,e):oo(t,n,3)}},$o=function(e){return e},wo=y,Fo=function(e){return mo(e)?go(bo(e)):fo(e)};var Bo=/\s/;var So=function(e){for(var t=e.length;t--&&Bo.test(e.charAt(t)););return t},xo=/^\s+/;var ko=function(e){return e?e.slice(0,So(e)+1).replace(xo,""):e},jo=U,Ao=T,_o=/^[-+]0x[0-9a-f]+$/i,Eo=/^0b[01]+$/i,Oo=/^0o[0-7]+$/i,Ho=parseInt;var Do=function(e){if("number"==typeof e)return e;if(Ao(e))return NaN;if(jo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=jo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ko(e);var r=Eo.test(e);return r||Oo.test(e)?Ho(e.slice(2),r?2:8):_o.test(e)?NaN:+e},Co=1/0;var zo=function(e){return e?(e=Do(e))===Co||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var No=kr,Io=function(e){return"function"==typeof e?e:null==e?$o:"object"==typeof e?wo(e)?vo(e[0],e[1]):yo(e):Fo(e)},To=function(e){var t=zo(e),r=t%1;return t==t?r?t-r:t:0},Wo=Math.max;var Po=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:To(r);return i<0&&(i=Wo(n+i,0)),No(e,Io(t),i)};const Ro=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Lo=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Vo=t.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Lo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Uo=t(Vo)`
    animation-delay: -0.45s;
`,Mo=t(Vo)`
    animation-delay: -0.3s;
`,Yo=t(Vo)`
    animation-delay: -0.15s;
`,Go={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Qo={collections:{base:{D1:{fontFamily:Go.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Go.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Go.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Go.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Go.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Go.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Go.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Go.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Go.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Go.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Go.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Go.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Go.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Go.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xo=e=>t=>{const r=t.theme,n=zt(Qo,r[Nt.textStyleScheme]);return r.options&&r.options.textStyle?Ct(n,e,r.options.textStyle):Ct(n,e)},Jo={D1:{fontFamily:Xo("D1.fontFamily"),fontSize:Xo("D1.fontSize"),fontWeight:Xo("D1.fontWeight"),lineHeight:Xo("D1.lineHeight"),letterSpacing:Xo("D1.letterSpacing")},D2:{fontFamily:Xo("D2.fontFamily"),fontSize:Xo("D2.fontSize"),fontWeight:Xo("D2.fontWeight"),lineHeight:Xo("D2.lineHeight"),letterSpacing:Xo("D2.letterSpacing")},D3:{fontFamily:Xo("D3.fontFamily"),fontSize:Xo("D3.fontSize"),fontWeight:Xo("D3.fontWeight"),lineHeight:Xo("D3.lineHeight"),letterSpacing:Xo("D3.letterSpacing")},D4:{fontFamily:Xo("D4.fontFamily"),fontSize:Xo("D4.fontSize"),fontWeight:Xo("D4.fontWeight"),lineHeight:Xo("D4.lineHeight"),letterSpacing:Xo("D4.letterSpacing")},DBody:{fontFamily:Xo("DBody.fontFamily"),fontSize:Xo("DBody.fontSize"),fontWeight:Xo("DBody.fontWeight"),lineHeight:Xo("DBody.lineHeight"),letterSpacing:Xo("DBody.letterSpacing")},H1:{fontFamily:Xo("H1.fontFamily"),fontSize:Xo("H1.fontSize"),fontWeight:Xo("H1.fontWeight"),lineHeight:Xo("H1.lineHeight"),letterSpacing:Xo("H1.letterSpacing")},H2:{fontFamily:Xo("H2.fontFamily"),fontSize:Xo("H2.fontSize"),fontWeight:Xo("H2.fontWeight"),lineHeight:Xo("H2.lineHeight"),letterSpacing:Xo("H2.letterSpacing")},H3:{fontFamily:Xo("H3.fontFamily"),fontSize:Xo("H3.fontSize"),fontWeight:Xo("H3.fontWeight"),lineHeight:Xo("H3.lineHeight"),letterSpacing:Xo("H3.letterSpacing")},H4:{fontFamily:Xo("H4.fontFamily"),fontSize:Xo("H4.fontSize"),fontWeight:Xo("H4.fontWeight"),lineHeight:Xo("H4.lineHeight"),letterSpacing:Xo("H4.letterSpacing")},H5:{fontFamily:Xo("H5.fontFamily"),fontSize:Xo("H5.fontSize"),fontWeight:Xo("H5.fontWeight"),lineHeight:Xo("H5.lineHeight"),letterSpacing:Xo("H5.letterSpacing")},H6:{fontFamily:Xo("H6.fontFamily"),fontSize:Xo("H6.fontSize"),fontWeight:Xo("H6.fontWeight"),lineHeight:Xo("H6.lineHeight"),letterSpacing:Xo("H6.letterSpacing")},Body:{fontFamily:Xo("Body.fontFamily"),fontSize:Xo("Body.fontSize"),fontWeight:Xo("Body.fontWeight"),lineHeight:Xo("Body.lineHeight"),letterSpacing:Xo("Body.letterSpacing")},BodySmall:{fontFamily:Xo("BodySmall.fontFamily"),fontSize:Xo("BodySmall.fontSize"),fontWeight:Xo("BodySmall.fontWeight"),lineHeight:Xo("BodySmall.lineHeight"),letterSpacing:Xo("BodySmall.letterSpacing")},XSmall:{fontFamily:Xo("XSmall.fontFamily"),fontSize:Xo("XSmall.fontSize"),fontWeight:Xo("XSmall.fontWeight"),lineHeight:Xo("XSmall.lineHeight"),letterSpacing:Xo("XSmall.letterSpacing")}},Ko=e=>{switch(e){case 700:case"bold":return Go.Bold;case 600:case"semibold":return Go.Semibold;case 300:case"light":return Go.Light;case 400:case"regular":return Go.Regular;default:return""}},qo=(e,t)=>n=>{var i;const o=Jo[e].fontFamily(n),a=Jo[e].fontWeight(n);return Object.values(Go).includes(o)?r`
                font-family: ${Ko(t)||Ko(a)||o};
                font-weight: normal !important;
            `:r`
            font-family: ${o};
            font-weight: ${null!==(i=Zo(t)||a)&&void 0!==i?i:"normal"};
        `},Zo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ea=(e,t,n=!1)=>i=>{const o=Jo[e],a=o.fontSize(i);return r`
            ${qo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},ta=(e=!1,t=!1)=>t?r`
            display: block;
        `:e?r`
            display: inline;
        `:r`
            display: block;
        `;var ra;!function(e){e.D1=t.h1`
        ${e=>r`
                ${ea("D1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.D2=t.h1`
        ${e=>r`
                ${ea("D2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.D3=t.h1`
        ${e=>r`
                ${ea("D3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.D4=t.h1`
        ${e=>r`
                ${ea("D4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.DBody=t.h1`
        ${e=>r`
                ${ea("DBody",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H1=t.h1`
        ${e=>r`
                ${ea("H1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H2=t.h2`
        ${e=>r`
                ${ea("H2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H3=t.h3`
        ${e=>r`
                ${ea("H3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H4=t.h4`
        ${e=>r`
                ${ea("H4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H5=t.h5`
        ${e=>r`
                ${ea("H5",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.H6=t.h6`
        ${e=>r`
                ${ea("H6",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.Body=t.p`
        ${e=>r`
                ${ea("Body",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=t.p`
        ${e=>r`
                ${ea("BodySmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.XSmall=t.span`
        ${e=>r`
                ${ea("XSmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${ta(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>oa(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>oa(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ra||(ra={}));const na=t.a`
    ${e=>r`
            ${ea(e.textStyle,e.weight)}
            color: ${Wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt.Secondary};

                svg {
                    color: ${Wt.Secondary};
                }
            }
        `}
`,ia=t(f)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,oa=e=>{var{external:t=!1,children:r}=e,n=Vt(e,["external","children"]);return o(na,Object.assign({},n,{children:[r,t&&i(ia,{})]}))};var aa;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(aa||(aa={}));const la=t.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return r`
                    background-color: ${Wt.Neutral[8](e)};
                    border: 1px solid ${Wt.Primary(e)};

                    span {
                        color: ${Wt.Primary(e)};
                    }
                `;case"light":return r`
                    background-color: ${Wt.Neutral[8](e)};
                    border: 1px solid ${Wt.Neutral[5](e)};

                    span {
                        color: ${Wt.Primary(e)};
                    }
                `;case"disabled":return r`
                    background-color: ${Wt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Wt.Neutral[3](e)};
                    }
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Wt.Secondary};
                        }
                    }
                `;default:return r`
                    background-color: ${Wt.Primary(e)};
                    border: 1px solid transparent;

                    ${Lt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Wt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?r`
                    height: 2.5rem;
                    span {
                        ${ea("H5","semibold")}
                    }

                    ${Lt.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    span {
                        ${ea("H4","semibold")}
                    }

                    ${Lt.mobileS} {
                        height: auto;
                    }
                `}
`,ca=t((({color:e,className:t,size:r=18})=>o(Ro,Object.assign({className:t,$size:r,$color:e},{children:[i(Vo,{id:"inner1",$size:r-2,$borderWidth:2}),i(Uo,{id:"inner2",$size:r-2,$borderWidth:2}),i(Mo,{id:"inner3",$size:r-2,$borderWidth:2}),i(Yo,{id:"inner4",$size:r-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Wt.Primary(e);break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,sa={Default:l.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:a=!1,styleType:l="default"}=e,c=Vt(e,["children","disabled","loading","styleType"]),s={$buttonStyle:n?"disabled":l,$buttonSizeStyle:"default"};return o(la,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:n},s,c,{children:[a&&i(ca,Object.assign({},s)),i("span",{children:r})]}))})),Small:l.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:a=!1,styleType:l="default"}=e,c=Vt(e,["children","disabled","loading","styleType"]),s={$buttonStyle:n?"disabled":l,$buttonSizeStyle:"small"};return o(la,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:n},s,c,{children:[a&&i(ca,Object.assign({},s,{size:16})),i("span",{children:r})]}))}))},da=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Lt.tablet} {
        display: none;
    }
`,ua=t.ul`
    display: none;

    ${Lt.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,ha=t.ul`
    display: none;
    list-style: none;

    ${Lt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Lt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,pa=t.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Lt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Lt.mobileL} {
        ${e=>{if(e.$mobile)return r`
                    padding: 0 1rem;
                `}}
    }
`,ga=t(sa.Small)`
    ${Lt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,fa=t.div`
    display: none;

    ${Lt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,ma=t(ra.BodySmall)`
    margin-bottom: 0.5rem;
`,ba=t.div`
    display: flex;
`,ya=t.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Lt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Lt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,va=({actionButtons:e,mobile:t=!1,onActionButtonClick:r})=>{const n=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},c=(e,t)=>{const r=e?(e=>{const t=Po(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(t):t;return r.map(((t,r)=>{let a;switch(t.type){case"download":a=e?(c=t.args,o(fa,{children:[i(ma,Object.assign({weight:"semibold"},{children:c&&c.children||"Download the app"})),o(ba,{children:[i(ya,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(ya,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(ga,Object.assign({},t.args,{type:"button",onClick:l(t),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${r+1}`;a=i(ga,Object.assign({},t.args,{type:"button",onClick:l(t),"data-testid":n}));break}case"component":{const e=t.args;a=e&&e.render||null;break}default:a=null}var c;if(a)return i(pa,Object.assign({$mobile:e},{children:a}),`action-button-${r+1}`)}))};if(e){const r=(null==e?void 0:e.mobile)||e.desktop,n=r.filter((e=>!!e.uncollapsible)),l=r.filter((e=>!e.uncollapsible));return t?i(a,{children:l.length>0&&i(ha,{children:c(t,l)})}):o(a,{children:[n.length>0&&i(ua,{children:c(!1,n)}),e.desktop.length>0&&i(da,{children:c(t,e.desktop)})]})}return i(a,{})},$a={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},wa=e=>t=>{var r;const n=t.theme,i=zt($a,n[Nt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Ct(i,e,n.options.designToken):Ct(i,e)},Fa=(wa("InputBoxShadow"),wa("InputErrorBoxShadow"),wa("ElevationBoxShadow")),Ba=(wa("Table.Header"),wa("Table.Cell.Primary"),wa("Table.Cell.Secondary"),wa("Table.Cell.Selected"),wa("Table.Cell.Hover"),t.ul`
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

    background: ${Wt.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Fa};
`),Sa=t.ul`
    display: none;
    list-style: none;

    ${Lt.tablet} {
        border-left: 0.25rem solid ${Wt.Primary};
        display: flex;
        flex-direction: column;
    }
`,xa=t(ra.Hyperlink.Small)`
    ${ea("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Wt.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Wt.Primary};
    }
    :hover {
        color: ${Wt.Accent.Light[1]};
    }

    ${Lt.tablet} {
        ${ea("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,ka=t.li`
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

    ${Lt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ja=({items:e,mobile:t=!1,onItemClick:r})=>{const n=e=>t=>{t.stopPropagation(),r(t,e)},o=(t=!1)=>e.map(((e,r)=>{const{children:o,options:a}=e,l=Vt(e,["children","options"]),c=t?`link__mobile-${r+1}`:`link__${r+1}`;return i(ka,{children:i(xa,Object.assign({"data-testid":c,weight:"bold"},l,{onClick:n(e)},a,{children:o}))},r)}));if(e&&e.length>0){return i(t?Sa:Ba,{children:o(t)})}return i(a,{})},Aa=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Lt.tablet} {
        display: none;
    }
`,_a=t.ul`
    display: none;
    list-style: none;

    ${Lt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Ea=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Lt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Oa=t(ra.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Wt.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Wt.Neutral[1]};
    }

    ${Lt.tablet} {
        color: ${Wt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Wt.Neutral[1]};
        }
    }
`,Ha=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Da=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Wt.Primary};

    ${Lt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Wt.Primary};
    }
`,Ca=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,za=t(Mt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Na=t(m)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Wt.Neutral[3]};
    :hover {
        color: ${Wt.Neutral[1]};
    }
`,Ia=({items:e,selectedId:t,mobile:r=!1,hideNavBranding:n,onItemClick:l})=>{const[u,h]=s(-1),[p,g]=s(!1),f=d(null);c((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},b=(e,t)=>r=>{r.stopPropagation(),h(t),g(!0),l(r,e)},y=(e,t)=>{e.stopPropagation(),l(e,t),g(!1)},v=()=>e.map(((e,a)=>{if("component"===e.itemType){const t=e&&e.children||null;return i("li",{children:t},a)}{const l=(e=>{if(e.id===t)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:c,options:s}=e,d=Vt(e,["children","options"]),h=l?r?"bold":"semibold":"regular",g=r?`link__mobile-${a+1}`:`link__${a+1}`,f=u>=0&&u===a&&p;return o(Ea,Object.assign({$hiddenBranding:n},{children:[o(Oa,Object.assign({"data-testid":g,weight:h,$selected:l},d,{onClick:b(e,a)},s,{children:[i(Ha,{children:c}),l&&i(Da,{"data-testid":`${g}-indicator`}),r&&e.subMenu&&i(Ca,{children:i(za,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:i(Na,{})}))})]})),f&&i(ja,{items:e.subMenu,mobile:r,onItemClick:y})]}),a)}}));return e&&e.length>0?r?i(_a,Object.assign({ref:f},{children:v()})):i(Aa,Object.assign({ref:f,$alignLeft:n},{children:v()})):i(a,{})},Ta=u(((e,t)=>{var{items:r,className:n,id:l,selectedId:u,compress:p=!1,fixed:g=!0,resources:f=Wa,hideNavElements:m=!1,hideNavBranding:b=!1,drawerDismissalExclusions:y=[],actionButtons:v,onItemClick:$,onActionButtonClick:w,onBrandClick:F,masthead:B=!0,layout:S="default"}=e,x=Vt(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[k,j]=s(!1),[A,_]=s(!1),E="stretch"===S,O=d(),{primary:H=Wa.primary,secondary:D}=f;h(t,(()=>Object.assign(O.current,{dismissDrawer:()=>{C()}})),[k]),c((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const C=()=>{j(!1),setTimeout((()=>{_(!1)}),550)},z=e=>k&&-1===y.indexOf(e),N=()=>{window.innerWidth<=Pt.tablet&&k&&C()},I=(e,t)=>{F&&(e.preventDefault(),F(t)),z("brand-click")&&C()},T=(e,t)=>{t.onClick?t.onClick(e):$&&(e.preventDefault(),$(t)),!(null==t?void 0:t.subMenu)&&z("item-click")&&C()},W=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):w&&(e.preventDefault(),w(t)),z("item-click")&&C()},P=()=>{j(!0),_(!0)},R=()=>{z("close-button-click")&&C()},L=()=>r.mobile&&r.mobile.length>0||r.desktop&&r.desktop.length>0||v&&!(()=>{if(v.mobile&&v.mobile.some((e=>e.uncollapsible)))return!0;if(v.desktop&&v.desktop.some((e=>e.uncollapsible)))return!0;return!1})()?i(Kt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1},{children:i(qt,{})})):null;return o(Qt,Object.assign({ref:O,$fixed:g,className:n,id:l||"navbar-wrapper","data-testid":x["data-testid"]||"navbar-wrapper"},{children:[B&&i(cr,{}),o(ar.Content,Object.assign({stretch:E},{children:[o(Xt,Object.assign({$compress:p},{children:[!b&&o(Zt,Object.assign({$compress:p,"data-id":"brand-container"},{children:[i(yr,{resources:H,onClick:I,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),D&&o(a,{children:[i(er,{$compress:p}),i(yr,{resources:D,onClick:I,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&o(Jt,Object.assign({$hideNavBranding:b},{children:[i(Ia,{items:r.desktop,onItemClick:T,selectedId:u,hideNavBranding:b}),i(va,{actionButtons:v,onActionButtonClick:W}),L()]}))]})),!m&&i(pr,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:R},{children:o(xr,Object.assign({show:k,resources:{primary:H,secondary:D},onClose:R,onBrandClick:I,actionButtons:v,hideNavBranding:b},{children:[i(Ia,{items:r.mobile||r.desktop,onItemClick:T,selectedId:u,mobile:!0}),i(va,{actionButtons:v,onActionButtonClick:W,mobile:!0})]}))}))]}))]}))})),Wa={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},Pa=Gt,Ra=3.5;export{Ta as Navbar,Pa as NavbarHeight,Ra as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
