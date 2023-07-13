import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as r,keyframes as n}from"styled-components";import{jsx as i,jsxs as o,Fragment as a}from"react/jsx-runtime";import l,{useEffect as c,useState as s,useRef as d}from"react";import u from"react-dom";import{CrossIcon as h}from"@lifesg/react-icons/cross";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{ChevronUpIcon as f}from"@lifesg/react-icons/chevron-up";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,b=y,v="object"==typeof self&&self&&self.Object===Object&&self,$=b||v||Function("return this")(),w=$.Symbol,F=w,S=Object.prototype,B=S.hasOwnProperty,x=S.toString,k=F?F.toStringTag:void 0;var A=function(e){var t=B.call(e,k),r=e[k];try{e[k]=void 0;var n=!0}catch(e){}var i=x.call(e);return n&&(t?e[k]=r:delete e[k]),i},_=Object.prototype.toString;var E=A,H=function(e){return _.call(e)},D=w?w.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":D&&D in Object(e)?E(e):H(e)};var j=function(e){return null!=e&&"object"==typeof e},z=C,O=j;var N=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==z(e)},I=m,T=N,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var P=function(e,t){if(I(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!T(e))||(R.test(e)||!W.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=C,U=L;var M,Y=function(e){if(!U(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},G=$["__core-js_shared__"],Q=(M=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var X=function(e){return!!Q&&Q in e},J=Function.prototype.toString;var K=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},q=Y,Z=X,ee=L,te=K,re=/^\[object .+?Constructor\]$/,ne=Function.prototype,ie=Object.prototype,oe=ne.toString,ae=ie.hasOwnProperty,le=RegExp("^"+oe.call(ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ce=function(e){return!(!ee(e)||Z(e))&&(q(e)?le:re).test(te(e))},se=function(e,t){return null==e?void 0:e[t]};var de=function(e,t){var r=se(e,t);return ce(r)?r:void 0},ue=de(Object,"create"),he=ue;var pe=function(){this.__data__=he?he(null):{},this.size=0};var fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=ue,me=Object.prototype.hasOwnProperty;var ye=function(e){var t=this.__data__;if(ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return me.call(t,e)?t[e]:void 0},be=ue,ve=Object.prototype.hasOwnProperty;var $e=ue;var we=pe,Fe=fe,Se=ye,Be=function(e){var t=this.__data__;return be?void 0!==t[e]:ve.call(t,e)},xe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$e&&void 0===t?"__lodash_hash_undefined__":t,this};function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ke.prototype.clear=we,ke.prototype.delete=Fe,ke.prototype.get=Se,ke.prototype.has=Be,ke.prototype.set=xe;var Ae=ke;var _e=function(){this.__data__=[],this.size=0};var Ee=function(e,t){return e===t||e!=e&&t!=t},He=Ee;var De=function(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1},Ce=De,je=Array.prototype.splice;var ze=De;var Oe=De;var Ne=De;var Ie=_e,Te=function(e){var t=this.__data__,r=Ce(t,e);return!(r<0)&&(r==t.length-1?t.pop():je.call(t,r,1),--this.size,!0)},We=function(e){var t=this.__data__,r=ze(t,e);return r<0?void 0:t[r][1]},Re=function(e){return Oe(this.__data__,e)>-1},Pe=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Le(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Le.prototype.clear=Ie,Le.prototype.delete=Te,Le.prototype.get=We,Le.prototype.has=Re,Le.prototype.set=Pe;var Ve=Le,Ue=de($,"Map"),Me=Ae,Ye=Ve,Ge=Ue;var Qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xe=function(e,t){var r=e.__data__;return Qe(t)?r["string"==typeof t?"string":"hash"]:r.map},Je=Xe;var Ke=Xe;var qe=Xe;var Ze=Xe;var et=function(){this.size=0,this.__data__={hash:new Me,map:new(Ge||Ye),string:new Me}},tt=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},rt=function(e){return Ke(this,e).get(e)},nt=function(e){return qe(this,e).has(e)},it=function(e,t){var r=Ze(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ot(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ot.prototype.clear=et,ot.prototype.delete=tt,ot.prototype.get=rt,ot.prototype.has=nt,ot.prototype.set=it;var at=ot,lt=at;function ct(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(ct.Cache||lt),r}ct.Cache=lt;var st=ct;var dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ut=/\\(\\)?/g,ht=function(e){var t=st(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(dt,(function(e,r,n,i){t.push(n?i.replace(ut,"$1"):r||e)})),t}));var pt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ft=m,gt=N,mt=w?w.prototype:void 0,yt=mt?mt.toString:void 0;var bt=function e(t){if("string"==typeof t)return t;if(ft(t))return pt(t,e)+"";if(gt(t))return yt?yt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},vt=bt;var $t=m,wt=P,Ft=ht,St=function(e){return null==e?"":vt(e)};var Bt=function(e,t){return $t(e)?e:wt(e,t)?[e]:Ft(St(e))},xt=N;var kt=function(e){if("string"==typeof e||xt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},At=Bt,_t=kt;var Et=function(e,t){for(var r=0,n=(t=At(t,e)).length;null!=e&&r<n;)e=e[_t(t[r++])];return r&&r==n?e:void 0},Ht=Et;var Dt=function(e,t,r){var n=null==e?void 0:Ht(e,t);return void 0===n?r:n};const Ct=(e,t,r)=>t?Dt(r,t)||Dt(e,t):r||e,jt=(e,t)=>{const r=t||e.defaultValue;return Dt(e.collections,r)};var zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(zt||(zt={}));const Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Nt=e=>t=>{const r=t.theme,n=jt(Ot,r[zt.colorScheme]);return r.options&&r.options.color?Ct(n,e,r.options.color):Ct(n,e)},It={Brand:{1:Nt("Brand.1"),2:Nt("Brand.2"),3:Nt("Brand.3"),4:Nt("Brand.4"),5:Nt("Brand.5"),6:Nt("Brand.6")},Primary:Nt("Primary"),PrimaryDark:Nt("PrimaryDark"),Secondary:Nt("Secondary"),Accent:{Light:{1:Nt("Accent.Light.1"),2:Nt("Accent.Light.2"),3:Nt("Accent.Light.3"),4:Nt("Accent.Light.4"),5:Nt("Accent.Light.5"),6:Nt("Accent.Light.6")},Dark:{1:Nt("Accent.Dark.1"),2:Nt("Accent.Dark.2"),3:Nt("Accent.Dark.3")}},Neutral:{1:Nt("Neutral.1"),2:Nt("Neutral.2"),3:Nt("Neutral.3"),4:Nt("Neutral.4"),5:Nt("Neutral.5"),6:Nt("Neutral.6"),7:Nt("Neutral.7"),8:Nt("Neutral.8")},Validation:{Green:{Text:Nt("Validation.Green.Text"),Icon:Nt("Validation.Green.Icon"),Border:Nt("Validation.Green.Border"),Background:Nt("Validation.Green.Background")},Orange:{Text:Nt("Validation.Orange.Text"),Icon:Nt("Validation.Orange.Icon"),Border:Nt("Validation.Orange.Border"),Background:Nt("Validation.Orange.Background"),Badge:Nt("Validation.Orange.Badge")},Red:{Text:Nt("Validation.Red.Text"),Icon:Nt("Validation.Red.Icon"),Border:Nt("Validation.Red.Border"),Background:Nt("Validation.Red.Background")},Blue:{Text:Nt("Validation.Blue.Text"),Icon:Nt("Validation.Blue.Icon"),Border:Nt("Validation.Blue.Border"),Background:Nt("Validation.Blue.Background")}},Shadow:{Accent:Nt("Shadow.Accent"),Red:Nt("Shadow.Red"),Elevation:Nt("Shadow.Elevation")}},Tt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Wt=e=>Object.keys(Tt).reduce(((t,r)=>{const n=Tt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Rt=Wt("max-width"),Pt=(Wt("min-width"),t.button`
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
                background-color: ${It.Neutral[7]};
            `}
    }
`),Lt=l.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",type:n="button",...o},a)=>i(Pt,{ref:a,$outline:r,$highlight:t,type:n,...o,children:e}))),Vt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ut={notCompress:6,compress:4},Mt=t.div`
    position: ${e=>e.$fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Yt=t.nav`
    height: ${e=>e.$compress?Ut.compress:Ut.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Vt};

    ${Rt.tablet} {
        height: ${3.5}rem;
    }
`,Gt=t.div`
    display: flex;
    height: 100%;
    margin-left: 5rem;
    flex: 1;
    justify-content: flex-end;
    ${Rt.tablet} {
        margin-left: 0rem;
    }
`,Qt=t(Lt)`
    display: none;

    ${Rt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,Xt=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${It.Neutral[1]};
`,Jt=t.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`,Kt=t.div`
    display: flex;
    background-color: ${It.Neutral[5]};
    height: ${e=>e.$compress?2:2.5}rem;
    width: 1px;
    margin: 0 ${e=>e.$compress?1.125:1.5}rem;

    ${Rt.tablet} {
        height: 1.5rem;
        margin: 0 1rem;
    }
`,qt=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="container",type:o="flex",stretch:a=!1,...l}=e;return i(Zt,{ref:t,"data-testid":n,$type:o,$stretch:a,...l,children:r})})),Zt=t.div`
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

                ${Rt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Rt.tablet} {
        max-width: 720px;
    }
    ${Rt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Rt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Rt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,er=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="section",stretch:o=!1,...a}=e;return i(tr,{ref:t,"data-testid":n,$stretch:o,...a,children:r})})),tr=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?r`
                ${Rt.tablet} {
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
`,rr=l.forwardRef(((e,t)=>{const{children:r,"data-testid":n="content",className:o,type:a="flex",stretch:l=!1,...c}=e;return i(er,{ref:t,"data-testid":n,className:o,stretch:l,...c,children:i(qt,{"data-testid":`${n}-container`,type:a,"data-id":"container",stretch:l,children:r})})})),nr={Section:er,Container:qt,Content:rr},ir=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Rt.mobileL} {
        padding: 0;
    }
`,or=()=>{c((()=>{e()||t()}),[]);const e=()=>document.getElementById(ar),t=()=>{if(!document.getElementById(ar)){const e=document.createElement("script");e.id=ar,e.type="module",e.src=lr,document.head.appendChild(e)}};return i(ir,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},ar="lifesg-ds-masthead-script",lr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",cr=t.div`
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
`,sr=t.div`
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
`,dr=({show:e=!1,rootId:t,onOverlayClick:r,children:n,backgroundOpacity:o,backgroundBlur:a=!0,disableTransition:h=!1,enableOverlayClick:p=!1,zIndex:f,id:g})=>{const[m,y]=s(null),[b,v]=s(),$=d(),w=d(null),F=n&&l.cloneElement(n,{ref:w}),S=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";c((()=>{if(e){const e=k();if(B(e),!e){const e=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(e)}}else if(!$.current){const e=setTimeout((()=>{_("remove")}),200);return()=>clearTimeout(e)}}),[e]),c((()=>{y(x());const e=k();return B(e),e||A(),()=>{_("remove")}}),[]);const B=e=>{$.current=e,v(e)},x=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>document.body.classList.contains(hr),A=()=>{if(!document.getElementById(ur)){const e=document.createElement("style");e.id=ur;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${hr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${hr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(hr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(hr):document.body.classList.add(hr)},E=e=>{const t=w.current?.firstChild;t&&t.contains(e.target)||r&&p&&(e.preventDefault(),r())};return m?u.createPortal(i(cr,{id:S,"data-testid":S,$show:e,zIndex:f,$stacked:b,children:n&&i(sr,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:o||(b?.5:.8),$backgroundBlur:a,$disableTransition:h,$enableOverlayClick:p,onClick:E,children:F})}),m):null},ur="lifesg-ds-overlay-stylesheet",hr="lifesg-ds-overlay-open",pr=t.a`
    display: flex;
    justify-content: center;

    img {
        width: auto;
        height: ${e=>"primary"===e.$type?e.$compress?1.25:1.625:e.$compress?2:2.5}rem;
        transition: ${Vt};
        object-fit: contain;

        ${Rt.tablet} {
            height: ${e=>"primary"===e.$type?1:1.5}rem;
        }
    }
`;const fr=({src:e,alt:t,className:r,"data-testid":n})=>i("img",{src:e,alt:t||"",className:r,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),gr=({resources:e,compress:t,onClick:r,"data-testid":n="navbar-brand",type:o})=>i(pr,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{r&&r(e,o)},$compress:t,tabIndex:0,"data-testid":n,$type:o,children:i(fr,{src:e.logoSrc,alt:e.brandName+"-app-logo"})}),mr=t.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
    }
`,yr=t.div`
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

	${Rt.tablet} {
        width: 75%;
    }

    ${Rt.mobileL} {
        width: 100%;
    }
`,br=t.div`
    display: flex;
    flex-direction: column;
`,vr=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,$r=t(h)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,wr=t(Lt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${It.Neutral[1]};

    :active,
    :focus {
        color: ${It.Primary};
    }
`,Fr=l.forwardRef(((e,t)=>{const{show:r,resources:n,children:l,onClose:d,onBrandClick:u}=e,[h,p]=s(0),{primary:f,secondary:g}=n;c((()=>(m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)})),[]);const m=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return i(mr,{ref:t,"data-testid":"drawer",children:i(yr,{$show:r,$viewHeight:h,children:o(br,{children:[o(vr,{children:[o(Jt,{children:[i(gr,{resources:f,compress:!0,onClick:u,"data-testid":"drawer__brand",type:"primary"}),g&&o(a,{children:[i(Kt,{}),i(gr,{resources:g,compress:!0,onClick:u,"data-testid":"drawer__brand-secondary",type:"secondary"})]})]}),i(wr,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:i($r,{})})]}),l]})})})}));var Sr=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Br=Ve;var xr=Ve,kr=Ue,Ar=at;var _r=Ve,Er=function(){this.__data__=new Br,this.size=0},Hr=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Dr=function(e){return this.__data__.get(e)},Cr=function(e){return this.__data__.has(e)},jr=function(e,t){var r=this.__data__;if(r instanceof xr){var n=r.__data__;if(!kr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ar(n)}return r.set(e,t),this.size=r.size,this};function zr(e){var t=this.__data__=new _r(e);this.size=t.size}zr.prototype.clear=Er,zr.prototype.delete=Hr,zr.prototype.get=Dr,zr.prototype.has=Cr,zr.prototype.set=jr;var Or=zr;var Nr=at,Ir=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Tr=function(e){return this.__data__.has(e)};function Wr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Nr;++t<r;)this.add(e[t])}Wr.prototype.add=Wr.prototype.push=Ir,Wr.prototype.has=Tr;var Rr=Wr,Pr=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Lr=function(e,t){return e.has(t)};var Vr=function(e,t,r,n,i,o){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=o.get(e),d=o.get(t);if(s&&d)return s==t&&d==e;var u=-1,h=!0,p=2&r?new Rr:void 0;for(o.set(e,t),o.set(t,e);++u<l;){var f=e[u],g=t[u];if(n)var m=a?n(g,f,u,t,e,o):n(f,g,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Pr(t,(function(e,t){if(!Lr(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Ur=$.Uint8Array,Mr=Ee,Yr=Vr,Gr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Qr=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Xr=w?w.prototype:void 0,Jr=Xr?Xr.valueOf:void 0;var Kr=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Ur(e),new Ur(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Mr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=Gr;case"[object Set]":var c=1&n;if(l||(l=Qr),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;n|=2,a.set(e,t);var d=Yr(l(e),l(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(Jr)return Jr.call(e)==Jr.call(t)}return!1};var qr=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Zr=m;var en=function(e,t,r){var n=t(e);return Zr(e)?n:qr(n,r(e))};var tn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},rn=function(){return[]},nn=Object.prototype.propertyIsEnumerable,on=Object.getOwnPropertySymbols,an=on?function(e){return null==e?[]:(e=Object(e),tn(on(e),(function(t){return nn.call(e,t)})))}:rn;var ln=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},cn=C,sn=j;var dn=function(e){return sn(e)&&"[object Arguments]"==cn(e)},un=j,hn=Object.prototype,pn=hn.hasOwnProperty,fn=hn.propertyIsEnumerable,gn=dn(function(){return arguments}())?dn:function(e){return un(e)&&pn.call(e,"callee")&&!fn.call(e,"callee")},mn={exports:{}};var yn=function(){return!1};!function(e,t){var r=$,n=yn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,l=(a?a.isBuffer:void 0)||n;e.exports=l}(mn,mn.exports);var bn=/^(?:0|[1-9]\d*)$/;var vn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&bn.test(e))&&e>-1&&e%1==0&&e<t};var $n=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},wn=C,Fn=$n,Sn=j,Bn={};Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=!0,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=!1;var xn=function(e){return Sn(e)&&Fn(e.length)&&!!Bn[wn(e)]};var kn=function(e){return function(t){return e(t)}},An={exports:{}};!function(e,t){var r=y,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(An,An.exports);var _n=xn,En=kn,Hn=An.exports,Dn=Hn&&Hn.isTypedArray,Cn=Dn?En(Dn):_n,jn=ln,zn=gn,On=m,Nn=mn.exports,In=vn,Tn=Cn,Wn=Object.prototype.hasOwnProperty;var Rn=function(e,t){var r=On(e),n=!r&&zn(e),i=!r&&!n&&Nn(e),o=!r&&!n&&!i&&Tn(e),a=r||n||i||o,l=a?jn(e.length,String):[],c=l.length;for(var s in e)!t&&!Wn.call(e,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||In(s,c))||l.push(s);return l},Pn=Object.prototype;var Ln=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pn)};var Vn=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Un=Ln,Mn=Vn,Yn=Object.prototype.hasOwnProperty;var Gn=Y,Qn=$n;var Xn=Rn,Jn=function(e){if(!Un(e))return Mn(e);var t=[];for(var r in Object(e))Yn.call(e,r)&&"constructor"!=r&&t.push(r);return t},Kn=function(e){return null!=e&&Qn(e.length)&&!Gn(e)};var qn=function(e){return Kn(e)?Xn(e):Jn(e)},Zn=en,ei=an,ti=qn;var ri=function(e){return Zn(e,ti,ei)},ni=Object.prototype.hasOwnProperty;var ii=function(e,t,r,n,i,o){var a=1&r,l=ri(e),c=l.length;if(c!=ri(t).length&&!a)return!1;for(var s=c;s--;){var d=l[s];if(!(a?d in t:ni.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++s<c;){var g=e[d=l[s]],m=t[d];if(n)var y=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},oi=de($,"DataView"),ai=Ue,li=de($,"Promise"),ci=de($,"Set"),si=de($,"WeakMap"),di=C,ui=K,hi="[object Map]",pi="[object Promise]",fi="[object Set]",gi="[object WeakMap]",mi="[object DataView]",yi=ui(oi),bi=ui(ai),vi=ui(li),$i=ui(ci),wi=ui(si),Fi=di;(oi&&Fi(new oi(new ArrayBuffer(1)))!=mi||ai&&Fi(new ai)!=hi||li&&Fi(li.resolve())!=pi||ci&&Fi(new ci)!=fi||si&&Fi(new si)!=gi)&&(Fi=function(e){var t=di(e),r="[object Object]"==t?e.constructor:void 0,n=r?ui(r):"";if(n)switch(n){case yi:return mi;case bi:return hi;case vi:return pi;case $i:return fi;case wi:return gi}return t});var Si=Or,Bi=Vr,xi=Kr,ki=ii,Ai=Fi,_i=m,Ei=mn.exports,Hi=Cn,Di="[object Arguments]",Ci="[object Array]",ji="[object Object]",zi=Object.prototype.hasOwnProperty;var Oi=function(e,t,r,n,i,o){var a=_i(e),l=_i(t),c=a?Ci:Ai(e),s=l?Ci:Ai(t),d=(c=c==Di?ji:c)==ji,u=(s=s==Di?ji:s)==ji,h=c==s;if(h&&Ei(e)){if(!Ei(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new Si),a||Hi(e)?Bi(e,t,r,n,i,o):xi(e,t,c,r,n,i,o);if(!(1&r)){var p=d&&zi.call(e,"__wrapped__"),f=u&&zi.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new Si),i(g,m,r,n,o)}}return!!h&&(o||(o=new Si),ki(e,t,r,n,i,o))},Ni=j;var Ii=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Ni(t)&&!Ni(r)?t!=t&&r!=r:Oi(t,r,n,i,e,o))},Ti=Or,Wi=Ii;var Ri=L;var Pi=function(e){return e==e&&!Ri(e)},Li=Pi,Vi=qn;var Ui=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Mi=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var l=r[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){var c=(l=r[i])[0],s=e[c],d=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var u=new Ti;if(n)var h=n(s,d,c,e,t,u);if(!(void 0===h?Wi(d,s,3,n,u):h))return!1}}return!0},Yi=function(e){for(var t=Vi(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Li(i)]}return t},Gi=Ui;var Qi=Bt,Xi=gn,Ji=m,Ki=vn,qi=$n,Zi=kt;var eo=function(e,t){return null!=e&&t in Object(e)},to=function(e,t,r){for(var n=-1,i=(t=Qi(t,e)).length,o=!1;++n<i;){var a=Zi(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&qi(i)&&Ki(a,i)&&(Ji(e)||Xi(e))};var ro=Ii,no=Dt,io=function(e,t){return null!=e&&to(e,t,eo)},oo=P,ao=Pi,lo=Ui,co=kt;var so=Et;var uo=function(e){return function(t){return null==t?void 0:t[e]}},ho=function(e){return function(t){return so(t,e)}},po=P,fo=kt;var go=function(e){var t=Yi(e);return 1==t.length&&t[0][2]?Gi(t[0][0],t[0][1]):function(r){return r===e||Mi(r,e,t)}},mo=function(e,t){return oo(e)&&ao(t)?lo(co(e),t):function(r){var n=no(r,e);return void 0===n&&n===t?io(r,e):ro(t,n,3)}},yo=function(e){return e},bo=m,vo=function(e){return po(e)?uo(fo(e)):ho(e)};var $o=/\s/;var wo=function(e){for(var t=e.length;t--&&$o.test(e.charAt(t)););return t},Fo=/^\s+/;var So=function(e){return e?e.slice(0,wo(e)+1).replace(Fo,""):e},Bo=L,xo=N,ko=/^[-+]0x[0-9a-f]+$/i,Ao=/^0b[01]+$/i,_o=/^0o[0-7]+$/i,Eo=parseInt;var Ho=function(e){if("number"==typeof e)return e;if(xo(e))return NaN;if(Bo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Bo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=So(e);var r=Ao.test(e);return r||_o.test(e)?Eo(e.slice(2),r?2:8):ko.test(e)?NaN:+e},Do=1/0;var Co=function(e){return e?(e=Ho(e))===Do||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var jo=Sr,zo=function(e){return"function"==typeof e?e:null==e?yo:"object"==typeof e?bo(e)?mo(e[0],e[1]):go(e):vo(e)},Oo=function(e){var t=Co(e),r=t%1;return t==t?r?t-r:t:0},No=Math.max;var Io=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Oo(r);return i<0&&(i=No(n+i,0)),jo(e,zo(t),i)};const To=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Wo=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ro=t.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||It.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Wo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Po=t(Ro)`
    animation-delay: -0.45s;
`,Lo=t(Ro)`
    animation-delay: -0.3s;
`,Vo=t(Ro)`
    animation-delay: -0.15s;
`,Uo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Mo={collections:{base:{D1:{fontFamily:Uo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Uo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Uo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Uo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Uo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Uo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Uo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Uo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Uo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Uo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Uo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Uo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Uo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Uo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Yo=e=>t=>{const r=t.theme,n=jt(Mo,r[zt.textStyleScheme]);return r.options&&r.options.textStyle?Ct(n,e,r.options.textStyle):Ct(n,e)},Go={D1:{fontFamily:Yo("D1.fontFamily"),fontSize:Yo("D1.fontSize"),fontWeight:Yo("D1.fontWeight"),lineHeight:Yo("D1.lineHeight"),letterSpacing:Yo("D1.letterSpacing")},D2:{fontFamily:Yo("D2.fontFamily"),fontSize:Yo("D2.fontSize"),fontWeight:Yo("D2.fontWeight"),lineHeight:Yo("D2.lineHeight"),letterSpacing:Yo("D2.letterSpacing")},D3:{fontFamily:Yo("D3.fontFamily"),fontSize:Yo("D3.fontSize"),fontWeight:Yo("D3.fontWeight"),lineHeight:Yo("D3.lineHeight"),letterSpacing:Yo("D3.letterSpacing")},D4:{fontFamily:Yo("D4.fontFamily"),fontSize:Yo("D4.fontSize"),fontWeight:Yo("D4.fontWeight"),lineHeight:Yo("D4.lineHeight"),letterSpacing:Yo("D4.letterSpacing")},DBody:{fontFamily:Yo("DBody.fontFamily"),fontSize:Yo("DBody.fontSize"),fontWeight:Yo("DBody.fontWeight"),lineHeight:Yo("DBody.lineHeight"),letterSpacing:Yo("DBody.letterSpacing")},H1:{fontFamily:Yo("H1.fontFamily"),fontSize:Yo("H1.fontSize"),fontWeight:Yo("H1.fontWeight"),lineHeight:Yo("H1.lineHeight"),letterSpacing:Yo("H1.letterSpacing")},H2:{fontFamily:Yo("H2.fontFamily"),fontSize:Yo("H2.fontSize"),fontWeight:Yo("H2.fontWeight"),lineHeight:Yo("H2.lineHeight"),letterSpacing:Yo("H2.letterSpacing")},H3:{fontFamily:Yo("H3.fontFamily"),fontSize:Yo("H3.fontSize"),fontWeight:Yo("H3.fontWeight"),lineHeight:Yo("H3.lineHeight"),letterSpacing:Yo("H3.letterSpacing")},H4:{fontFamily:Yo("H4.fontFamily"),fontSize:Yo("H4.fontSize"),fontWeight:Yo("H4.fontWeight"),lineHeight:Yo("H4.lineHeight"),letterSpacing:Yo("H4.letterSpacing")},H5:{fontFamily:Yo("H5.fontFamily"),fontSize:Yo("H5.fontSize"),fontWeight:Yo("H5.fontWeight"),lineHeight:Yo("H5.lineHeight"),letterSpacing:Yo("H5.letterSpacing")},H6:{fontFamily:Yo("H6.fontFamily"),fontSize:Yo("H6.fontSize"),fontWeight:Yo("H6.fontWeight"),lineHeight:Yo("H6.lineHeight"),letterSpacing:Yo("H6.letterSpacing")},Body:{fontFamily:Yo("Body.fontFamily"),fontSize:Yo("Body.fontSize"),fontWeight:Yo("Body.fontWeight"),lineHeight:Yo("Body.lineHeight"),letterSpacing:Yo("Body.letterSpacing")},BodySmall:{fontFamily:Yo("BodySmall.fontFamily"),fontSize:Yo("BodySmall.fontSize"),fontWeight:Yo("BodySmall.fontWeight"),lineHeight:Yo("BodySmall.lineHeight"),letterSpacing:Yo("BodySmall.letterSpacing")},XSmall:{fontFamily:Yo("XSmall.fontFamily"),fontSize:Yo("XSmall.fontSize"),fontWeight:Yo("XSmall.fontWeight"),lineHeight:Yo("XSmall.lineHeight"),letterSpacing:Yo("XSmall.letterSpacing")}},Qo=e=>{switch(e){case 700:case"bold":return Uo.Bold;case 600:case"semibold":return Uo.Semibold;case 300:case"light":return Uo.Light;case 400:case"regular":return Uo.Regular;default:return""}},Xo=(e,t)=>n=>{const i=Go[e].fontFamily(n),o=Go[e].fontWeight(n);return Object.values(Uo).includes(i)?r`
                font-family: ${Qo(t)||Qo(o)||i};
                font-weight: normal !important;
            `:r`
            font-family: ${i};
            font-weight: ${(Jo(t)||o)??"normal"};
        `},Jo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ko=(e,t,n=!1)=>i=>{const o=Go[e],a=o.fontSize(i);return r`
            ${Xo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},qo=(e=!1,t=!1)=>t?r`
            display: block;
        `:e?r`
            display: inline;
        `:r`
            display: block;
        `;var Zo;!function(e){e.D1=t.h1`
        ${e=>r`
                ${Ko("D1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.D2=t.h1`
        ${e=>r`
                ${Ko("D2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.D3=t.h1`
        ${e=>r`
                ${Ko("D3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.D4=t.h1`
        ${e=>r`
                ${Ko("D4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.DBody=t.h1`
        ${e=>r`
                ${Ko("DBody",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H1=t.h1`
        ${e=>r`
                ${Ko("H1",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H2=t.h2`
        ${e=>r`
                ${Ko("H2",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H3=t.h3`
        ${e=>r`
                ${Ko("H3",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H4=t.h4`
        ${e=>r`
                ${Ko("H4",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H5=t.h5`
        ${e=>r`
                ${Ko("H5",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.H6=t.h6`
        ${e=>r`
                ${Ko("H6",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.Body=t.p`
        ${e=>r`
                ${Ko("Body",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=t.p`
        ${e=>r`
                ${Ko("BodySmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.XSmall=t.span`
        ${e=>r`
                ${Ko("XSmall",e.weight,e.paragraph)}
                color: ${It.Neutral[1]};
                ${qo(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ra({...e,textStyle:"Body"}),Small:e=>ra({...e,textStyle:"BodySmall"})}}(Zo||(Zo={}));const ea=t.a`
    ${e=>r`
            ${Ko(e.textStyle,e.weight)}
            color: ${It.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${It.Secondary};

                svg {
                    color: ${It.Secondary};
                }
            }
        `}
`,ta=t(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ra=({external:e=!1,children:t,...r})=>o(ea,{...r,children:[t,e&&i(ta,{})]});var na;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(na||(na={}));const ia=t.button`
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
                    background-color: ${It.Neutral[8](e)};
                    border: 1px solid ${It.Primary(e)};

                    span {
                        color: ${It.Primary(e)};
                    }
                `;case"light":return r`
                    background-color: ${It.Neutral[8](e)};
                    border: 1px solid ${It.Neutral[5](e)};

                    span {
                        color: ${It.Primary(e)};
                    }
                `;case"disabled":return r`
                    background-color: ${It.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${It.Neutral[3](e)};
                    }
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${It.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${It.Secondary};
                        }
                    }
                `;default:return r`
                    background-color: ${It.Primary(e)};
                    border: 1px solid transparent;

                    ${Rt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${It.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?r`
                    height: 2.5rem;
                    span {
                        ${Ko("H5","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    span {
                        ${Ko("H4","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `}
`,oa=t((({color:e,className:t,size:r=18})=>o(To,{className:t,$size:r,$color:e,children:[i(Ro,{id:"inner1",$size:r-2,$borderWidth:2}),i(Po,{id:"inner2",$size:r-2,$borderWidth:2}),i(Lo,{id:"inner3",$size:r-2,$borderWidth:2}),i(Vo,{id:"inner4",$size:r-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=It.Primary(e);break;case"disabled":t=It.Neutral[3](e);break;default:t=It.Neutral[8](e)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,aa={Default:l.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:n?"disabled":l,$buttonSizeStyle:"default"};return o(ia,{ref:t,"data-testid":c["data-testid"]||"button",disabled:n,...s,...c,children:[a&&i(oa,{...s}),i("span",{children:r})]})})),Small:l.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:a=!1,styleType:l="default",...c}=e,s={$buttonStyle:n?"disabled":l,$buttonSizeStyle:"small"};return o(ia,{ref:t,"data-testid":c["data-testid"]||"button",disabled:n,...s,...c,children:[a&&i(oa,{...s,size:16}),i("span",{children:r})]})}))},la=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Rt.tablet} {
        display: none;
    }
`,ca=t.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Rt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,sa=t.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Rt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${Rt.mobileL} {
        padding: 0 1rem;
    }
`,da=t(aa.Small)`
    ${Rt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ua=t.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,ha=t(Zo.BodySmall)`
    margin-bottom: 0.5rem;
`,pa=t.div`
    display: flex;
`,fa=t.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Rt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Rt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,ga=({actionButtons:e,mobile:t=!1,onActionButtonClick:r})=>{const n=e=>{e.stopPropagation()},l=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},c=(t=!1)=>(t?(e=>{const t=Io(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(e):e).map(((e,r)=>{let a;switch(e.type){case"download":a=t?(c=e.args,o(ua,{children:[i(ha,{weight:"semibold",children:c&&c.children||"Download the app"}),o(pa,{children:[i(fa,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n,children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),i(fa,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n,children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):i(da,{...e.args,type:"button",onClick:l(e),"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const n=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;a=i(da,{...e.args,type:"button",onClick:l(e),"data-testid":n});break}case"component":{const t=e.args;a=t&&t.render||null;break}default:a=null}var c;if(a)return i(sa,{children:a},`action-button-${r+1}`)}));if(e&&e.length>0){return i(t?ca:la,{children:c(t)})}return i(a,{})},ma={collections:{base:{InputBoxShadow:r`
        inset 0 0 6px 1px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 6px 1px ${It.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:r`
        inset 0 0 6px 1px ${It.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 6px 1px ${It.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${It.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},ya=e=>t=>{const r=t.theme,n=jt(ma,r[zt.designTokenScheme]);return r.options?.designToken?Ct(n,e,r.options.designToken):Ct(n,e)},ba=(ya("InputBoxShadow"),ya("InputErrorBoxShadow"),ya("ElevationBoxShadow")),va=(ya("Table.Header"),ya("Table.Cell.Primary"),ya("Table.Cell.Secondary"),ya("Table.Cell.Selected"),ya("Table.Cell.Hover"),t.ul`
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

    background: ${It.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${ba};
`),$a=t.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        border-left: 0.25rem solid ${It.Primary};
        display: flex;
        flex-direction: column;
    }
`,wa=t(Zo.Hyperlink.Small)`
    ${Ko("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${It.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${It.Primary};
    }
    :hover {
        color: ${It.Accent.Light[1]};
    }

    ${Rt.tablet} {
        ${Ko("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,Fa=t.li`
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

    ${Rt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Sa=({items:e,mobile:t=!1,onItemClick:r})=>{const n=e=>t=>{t.stopPropagation(),r(t,e)},o=(t=!1)=>e.map(((e,r)=>{const{children:o,options:a,...l}=e;return i(Fa,{children:i(wa,{"data-testid":t?`link__mobile-${r+1}`:`link__${r+1}`,weight:"bold",...l,onClick:n(e),...a,children:o})},r)}));if(e&&e.length>0){return i(t?$a:va,{children:o(t)})}return i(a,{})},Ba=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${Rt.tablet} {
        display: none;
    }
`,xa=t.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,ka=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        margin-left: 0;
    }
    ${Rt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Aa=t(Zo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${It.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${It.Neutral[1]};
    }

    ${Rt.tablet} {
        color: ${It.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${It.Neutral[1]};
        }
    }
`,_a=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Ea=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${It.Primary};

    ${Rt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${It.Primary};
    }
`,Ha=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Da=t(Lt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Ca=t(f)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${It.Neutral[3]};
    :hover {
        color: ${It.Neutral[1]};
    }
`,ja=({items:e,selectedId:t,mobile:r=!1,onItemClick:n})=>{const[l,u]=s(-1),[h,p]=s(!1),f=d(null);c((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&g()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const g=()=>{p(!1)},m=(e,t)=>r=>{r.stopPropagation(),u(t),p(!0),n(r,e)},y=(e,t)=>{e.stopPropagation(),n(e,t),p(!1)},b=()=>e.map(((e,n)=>{const a=(e=>{if(e.id===t)return!0;if(e?.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:c,options:s,...d}=e,u=r?`link__mobile-${n+1}`:`link__${n+1}`,p=l>=0&&l===n&&h;return o(ka,{children:[o(Aa,{"data-testid":u,weight:a?r?"bold":"semibold":"regular",$selected:a,...d,onClick:m(e,n),...s,children:[i(_a,{children:c}),a&&i(Ea,{}),r&&e.subMenu&&i(Ha,{children:i(Da,{"data-testid":`${u}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand",children:i(Ca,{})})})]}),p&&i(Sa,{items:e.subMenu,mobile:r,onItemClick:y})]},n)}));if(e&&e.length>0){return i(r?xa:Ba,{ref:f,children:b()})}return i(a,{})},za=l.forwardRef((({items:e,id:t,selectedId:r,compress:n=!1,fixed:l=!0,resources:d=Oa,hideNavElements:u=!1,drawerDismissalExclusions:h=[],actionButtons:p,onItemClick:f,onActionButtonClick:g,onBrandClick:m,masthead:y=!0,layout:b="default",...v},$)=>{const[w,F]=s(!1),[S,B]=s(!1),x="stretch"===b,{primary:k=Oa.primary,secondary:A}=d;c((()=>(H(),window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)})),[]);const _=()=>{F(!1),setTimeout((()=>{B(!1)}),550)},E=e=>w&&-1===h.indexOf(e),H=()=>{window.innerWidth<=Tt.tablet&&w&&_()},D=(e,t)=>{m&&(e.preventDefault(),m(t)),E("brand-click")&&_()},C=(e,t)=>{t.onClick?t.onClick(e):f&&(e.preventDefault(),f(t)),!t?.subMenu&&E("item-click")&&_()},j=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):g&&(e.preventDefault(),g(t)),E("item-click")&&_()},z=()=>{F(!0),B(!0)},O=()=>{E("close-button-click")&&_()};return o(Mt,{ref:$,$fixed:l,id:t||"navbar-wrapper","data-testid":v["data-testid"]||"navbar-wrapper",children:[y&&i(or,{}),o(nr.Content,{stretch:x,children:[o(Yt,{$compress:n,children:[o(Jt,{children:[i(gr,{resources:k,compress:n,onClick:D,"data-testid":"main__brand",type:"primary"}),A&&o(a,{children:[i(Kt,{$compress:n}),i(gr,{resources:A,compress:n,onClick:D,"data-testid":"main__brand-secondary",type:"secondary"})]})]}),!u&&o(Gt,{children:[i(ja,{items:e.desktop,onItemClick:C,selectedId:r}),i(ga,{actionButtons:p&&p.desktop,onActionButtonClick:j}),i(Qt,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:z,focusHighlight:!1,children:i(Xt,{})})]})]}),!u&&i(dr,{show:S,enableOverlayClick:!0,onOverlayClick:O,children:o(Fr,{show:w,resources:{primary:k,secondary:A},onClose:O,onBrandClick:D,actionButtons:p,children:[i(ja,{items:e.mobile||e.desktop,onItemClick:C,selectedId:r,mobile:!0}),i(ga,{actionButtons:p&&(p?.mobile||p.desktop),onActionButtonClick:j,mobile:!0})]})})]})]})})),Oa={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},Na=Ut,Ia=3.5;export{za as Navbar,Na as NavbarHeight,Ia as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
