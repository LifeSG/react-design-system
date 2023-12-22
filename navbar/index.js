import{MenuIcon as t}from"@lifesg/react-icons/menu";import e,{css as n,keyframes as r}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import f from"react-dom";import{CrossIcon as p}from"@lifesg/react-icons/cross";import{ExternalIcon as g}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=Array.isArray,v="object"==typeof y&&y&&y.Object===Object&&y,$=v,w="object"==typeof self&&self&&self.Object===Object&&self,S=$||w||Function("return this")(),F=S.Symbol,x=F,B=Object.prototype,D=B.hasOwnProperty,k=B.toString,A=x?x.toStringTag:void 0;var O=function(t){var e=D.call(t,A),n=t[A];try{t[A]=void 0;var r=!0}catch(t){}var i=k.call(t);return r&&(e?t[A]=n:delete t[A]),i},_=Object.prototype.toString;var E=O,j=function(t){return _.call(t)},H=F?F.toStringTag:void 0;var C=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?E(t):j(t)};var M=function(t){return null!=t&&"object"==typeof t},z=C,T=M;var N=function(t){return"symbol"==typeof t||T(t)&&"[object Symbol]"==z(t)},Y=b,L=N,I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var R=function(t,e){if(Y(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!L(t))||(W.test(t)||!I.test(t)||null!=e&&t in Object(e))};var P=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},V=C,U=P;var G,J=function(t){if(!U(t))return!1;var e=V(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},X=S["__core-js_shared__"],Q=(G=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var Z=function(t){return!!Q&&Q in t},K=Function.prototype.toString;var q=function(t){if(null!=t){try{return K.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tt=J,et=Z,nt=P,rt=q,it=/^\[object .+?Constructor\]$/,at=Function.prototype,ot=Object.prototype,st=at.toString,lt=ot.hasOwnProperty,ct=RegExp("^"+st.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var dt=function(t){return!(!nt(t)||et(t))&&(tt(t)?ct:it).test(rt(t))},ut=function(t,e){return null==t?void 0:t[e]};var ht=function(t,e){var n=ut(t,e);return dt(n)?n:void 0},ft=ht(Object,"create"),pt=ft;var gt=function(){this.__data__=pt?pt(null):{},this.size=0};var mt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt=ft,bt=Object.prototype.hasOwnProperty;var vt=function(t){var e=this.__data__;if(yt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return bt.call(e,t)?e[t]:void 0},$t=ft,wt=Object.prototype.hasOwnProperty;var St=ft;var Ft=gt,xt=mt,Bt=vt,Dt=function(t){var e=this.__data__;return $t?void 0!==e[t]:wt.call(e,t)},kt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=St&&void 0===e?"__lodash_hash_undefined__":e,this};function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}At.prototype.clear=Ft,At.prototype.delete=xt,At.prototype.get=Bt,At.prototype.has=Dt,At.prototype.set=kt;var Ot=At;var _t=function(){this.__data__=[],this.size=0};var Et=function(t,e){return t===e||t!=t&&e!=e},jt=Et;var Ht=function(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1},Ct=Ht,Mt=Array.prototype.splice;var zt=Ht;var Tt=Ht;var Nt=Ht;var Yt=_t,Lt=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():Mt.call(e,n,1),--this.size,!0)},It=function(t){var e=this.__data__,n=zt(e,t);return n<0?void 0:e[n][1]},Wt=function(t){return Tt(this.__data__,t)>-1},Rt=function(t,e){var n=this.__data__,r=Nt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Pt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pt.prototype.clear=Yt,Pt.prototype.delete=Lt,Pt.prototype.get=It,Pt.prototype.has=Wt,Pt.prototype.set=Rt;var Vt=Pt,Ut=ht(S,"Map"),Gt=Ot,Jt=Vt,Xt=Ut;var Qt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Zt=function(t,e){var n=t.__data__;return Qt(e)?n["string"==typeof e?"string":"hash"]:n.map},Kt=Zt;var qt=Zt;var te=Zt;var ee=Zt;var ne=function(){this.size=0,this.__data__={hash:new Gt,map:new(Xt||Jt),string:new Gt}},re=function(t){var e=Kt(this,t).delete(t);return this.size-=e?1:0,e},ie=function(t){return qt(this,t).get(t)},ae=function(t){return te(this,t).has(t)},oe=function(t,e){var n=ee(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function se(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}se.prototype.clear=ne,se.prototype.delete=re,se.prototype.get=ie,se.prototype.has=ae,se.prototype.set=oe;var le=se,ce=le;function de(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(de.Cache||ce),n}de.Cache=ce;var ue=de;var he=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fe=/\\(\\)?/g,pe=function(t){var e=ue(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(he,(function(t,n,r,i){e.push(r?i.replace(fe,"$1"):n||t)})),e}));var ge=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},me=b,ye=N,be=F?F.prototype:void 0,ve=be?be.toString:void 0;var $e=function t(e){if("string"==typeof e)return e;if(me(e))return ge(e,t)+"";if(ye(e))return ve?ve.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},we=$e;var Se=b,Fe=R,xe=pe,Be=function(t){return null==t?"":we(t)};var De=function(t,e){return Se(t)?t:Fe(t,e)?[t]:xe(Be(t))},ke=N;var Ae=function(t){if("string"==typeof t||ke(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Oe=De,_e=Ae;var Ee=function(t,e){for(var n=0,r=(e=Oe(e,t)).length;null!=t&&n<r;)t=t[_e(e[n++])];return n&&n==r?t:void 0},je=Ee;var He=function(t,e,n){var r=null==t?void 0:je(t,e);return void 0===r?n:r};const Ce=(t,e,n)=>e?He(n,e)||He(t,e):n||t,Me=(t,e)=>{const n=e||t.defaultValue;return He(t.collections,n)};var ze;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ze||(ze={}));const Te={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ne=t=>e=>{const n=e.theme,r=Me(Te,n[ze.colorScheme]);return n.options&&n.options.color?Ce(r,t,n.options.color):Ce(r,t)},Ye={Brand:{1:Ne("Brand.1"),2:Ne("Brand.2"),3:Ne("Brand.3"),4:Ne("Brand.4"),5:Ne("Brand.5"),6:Ne("Brand.6")},Primary:Ne("Primary"),PrimaryDark:Ne("PrimaryDark"),Secondary:Ne("Secondary"),Accent:{Light:{1:Ne("Accent.Light.1"),2:Ne("Accent.Light.2"),3:Ne("Accent.Light.3"),4:Ne("Accent.Light.4"),5:Ne("Accent.Light.5"),6:Ne("Accent.Light.6")},Dark:{1:Ne("Accent.Dark.1"),2:Ne("Accent.Dark.2"),3:Ne("Accent.Dark.3")}},Neutral:{1:Ne("Neutral.1"),2:Ne("Neutral.2"),3:Ne("Neutral.3"),4:Ne("Neutral.4"),5:Ne("Neutral.5"),6:Ne("Neutral.6"),7:Ne("Neutral.7"),8:Ne("Neutral.8")},Validation:{Green:{Text:Ne("Validation.Green.Text"),Icon:Ne("Validation.Green.Icon"),Border:Ne("Validation.Green.Border"),Background:Ne("Validation.Green.Background")},Orange:{Text:Ne("Validation.Orange.Text"),Icon:Ne("Validation.Orange.Icon"),Border:Ne("Validation.Orange.Border"),Background:Ne("Validation.Orange.Background"),Badge:Ne("Validation.Orange.Badge")},Red:{Text:Ne("Validation.Red.Text"),Icon:Ne("Validation.Red.Icon"),Border:Ne("Validation.Red.Border"),Background:Ne("Validation.Red.Background")},Blue:{Text:Ne("Validation.Blue.Text"),Icon:Ne("Validation.Blue.Icon"),Border:Ne("Validation.Blue.Border"),Background:Ne("Validation.Blue.Background")}},Shadow:{Accent:Ne("Shadow.Accent"),Red:Ne("Shadow.Red"),Elevation:Ne("Shadow.Elevation")}},Le={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ie=t=>Object.keys(Le).reduce(((e,n)=>{const r=Le[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),We=Ie("max-width");Ie("min-width");function Re(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const Pe=e.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&n`
                background-color: ${Ye.Neutral[7]};
            `}
    }
`,Ve=s.forwardRef(((t,e)=>{var{children:n,focusHighlight:r=!0,focusOutline:a="none",type:o="button"}=t,s=Re(t,["children","focusHighlight","focusOutline","type"]);return i(Pe,Object.assign({ref:e,$outline:a,$highlight:r,type:o},s,{children:n}))})),Ue="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ge={notCompress:6,compress:4},Je=e.div`
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
    color: ${Ye.Neutral[1]};
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
`,tn=e.div`
    display: flex;
    background-color: ${Ye.Neutral[5]};
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
`,en=e.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:r,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=t;return n`
            grid-column: ${e||"auto"} / span ${r||1};

            ${We.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${We.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,nn=s.forwardRef(((t,e)=>{const{mobileCols:n,tabletCols:r,desktopCols:a}=t,o=Re(t,["mobileCols","tabletCols","desktopCols"]);return i(en,Object.assign({ref:e},(()=>{const t=r||n,e=n,i=rn(a||r||n),o=rn(t),s=rn(e);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),rn=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},an=s.forwardRef(((t,e)=>{const{children:n,"data-testid":r="container",type:a="flex",stretch:o=!1}=t,s=Re(t,["children","data-testid","type","stretch"]);return i(on,Object.assign({ref:e,"data-testid":r,$type:a,$stretch:o},s,{children:n}))})),on=e.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?n`
                padding: 0 3rem;
            `:n`
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

    ${t=>{switch(t.$type){case"grid":return n`
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
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,sn=s.forwardRef(((t,e)=>{const{children:n,"data-testid":r="section",stretch:a=!1}=t,o=Re(t,["children","data-testid","stretch"]);return i(ln,Object.assign({ref:e,"data-testid":r,$stretch:a},o,{children:n}))})),ln=e.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?n`
                ${We.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:n`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,cn=s.forwardRef(((t,e)=>{const{children:n,"data-testid":r="content",className:a,type:o="flex",stretch:s=!1}=t,l=Re(t,["children","data-testid","className","type","stretch"]);return i(sn,Object.assign({ref:e,"data-testid":r,className:a,stretch:s},l,{children:i(an,Object.assign({"data-testid":`${r}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),dn={Section:sn,Container:an,Content:cn,ColDiv:nn},un=e.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${We.mobileL} {
        padding: 0;
    }
`,hn=()=>{l((()=>{t()||e()}),[]);const t=()=>document.getElementById(fn),e=()=>{if(!document.getElementById(fn)){const t=document.createElement("script");t.id=fn,t.type="module",t.src=pn,document.head.appendChild(t)}};return i(un,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},fn="lifesg-ds-masthead-script",pn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var gn={exports:{}};gn.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},u={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=t.slice(r),d=a.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(g,m,p,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(t){return new Date("")}}(e,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var mn,yn,bn=gn.exports,vn={exports:{}},$n=vn.exports=(mn={year:0,month:1,day:2,hour:3,minute:4,second:5},yn={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=yn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),yn[r]=i),i}(e,n);return i.formatToParts(r)},a=function(t,e){for(var r=i(t,e),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=mn[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+t;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var o=i&&e,s=i||e||r,l=a(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var o=a(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(t,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),wn={exports:{}};wn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",$={};$[v]=m;var w=function(t){return t instanceof B},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;$[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},F=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new B(n)},x=b;x.l=S,x.i=w,x.w=function(t,e){return F(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var B=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=F(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return F(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<F(t)},y.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!x.u(e)||e,d=x.p(t),f=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},p=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(r?y-$:y+(6-$),m);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=x.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(e-this.$W):e;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[x.p(t)]()},y.add=function(r,d){var h,f=this;r=Number(r);var p=x.p(d),g=function(t){var e=F(f);return x.w(e.date(e.date()+Math.round(t*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=e,h[o]=n,h[i]=t,h)[p]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},u=function(t){return x.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:d(n.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:x.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=x.p(h),m=F(r),y=(m.utcOffset()-this.utcOffset())*e,b=this-m,v=x.m(this,m);return v=(p={},p[u]=v/12,p[c]=v,p[d]=v/3,p[l]=(b-y)/6048e5,p[s]=(b-y)/864e5,p[o]=b/n,p[a]=b/e,p[i]=b/t,p)[g]||b,f?v:x.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=B.prototype;return F.prototype=D,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),F.extend=function(t,e){return t.$i||(t(e,B,F),t.$i=!0),F},F.locale=S,F.isDayjs=w,F.unix=function(t){return F(1e3*t)},F.en=$[v],F.Ls=$,F.p={},F}();var Sn=wn.exports,Fn={exports:{}};Fn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var a=n(t),o=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var xn=Fn.exports,Bn={exports:{}};Bn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var Dn=Bn.exports,kn={exports:{}};kn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var An,On=kn.exports;Sn.extend(xn),Sn.extend(Dn),Sn.extend(On),Sn.extend(bn),Sn.extend($n),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=Sn(e).startOf("week");return _n(n).map((t=>En(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return En(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(Sn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+Sn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=Sn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const a=t.isWithinRange(e,r?Sn(r):void 0,i?Sn(i):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(An||(An={}));const _n=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},En=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},jn=[1,3,5,7,8,10,12],Hn=[4,6,9,11];var Cn,Mn,zn,Tn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),a=parseInt(n),o=parseInt(r);return 0==i?"1":jn.includes(a)?Math.min(i,31).toString():Hn.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=Sn(t,n);return Sn(e,n).diff(r,"minute")},t.toDayjs=t=>t?Sn(t):Sn()}(Cn||(Cn={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!Sn(t).isBefore(r,"day"))||!(!i||!Sn(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(Sn(t).isValid())return t}return""}}(Mn||(Mn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(zn||(zn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let a=0;e>n&&(a=Math.floor((e-n)/i));const o=r+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Tn||(Tn={}));const Nn=e.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return n`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Yn=e.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=n`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=n`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=n`
                transition: none;
            `),e}}
`,Ln=({show:t=!1,rootId:e,onOverlayClick:n,children:r,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:p,id:g})=>{const[m,y]=c(null),[b,v]=c(),[$]=c((()=>zn.generate())),w=d(),S=d(null),F=r&&s.cloneElement(r,{ref:S}),x=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root";l((()=>(A(),y(D()),()=>{j(),_().length<1&&O("remove")})),[]),l((()=>{if(t){const t=k();B(t),E();const e=setTimeout((()=>{O("add")}),200);return()=>clearTimeout(e)}{j();const t=setTimeout((()=>{_().length<1&&O("remove")}),200);return()=>clearTimeout(t)}}),[t]);const B=t=>{w.current=t,v(t)},D=()=>document&&e?document.getElementById(e):document?document.body:null,k=()=>_().length>0,A=()=>{if(!document.getElementById(In)){const t=document.createElement("style");t.id=In;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${Wn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Wn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},O=t=>{const e=document.body.classList.contains(Wn);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(Wn):document.body.classList.add(Wn)},_=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},E=()=>{const t=_();document.body.dataset.lifesgDsOverlayOrder=[...t,$].join(",")},j=()=>{const t=_();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==$)).join(",")},H=t=>{var e;const r=null===(e=S.current)||void 0===e?void 0:e.firstChild;r&&r.contains(t.target)||n&&h&&(t.preventDefault(),n())};return m?f.createPortal(i(Nn,Object.assign({id:x,"data-testid":x,$show:t,zIndex:p,$stacked:b},{children:r&&i(Yn,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:a||(b?.5:.8),$backgroundBlur:o,$disableTransition:u,$enableOverlayClick:h,onClick:H},{children:F}))})),m):null},In="lifesg-ds-overlay-stylesheet",Wn="lifesg-ds-overlay-open",Rn=e.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ue};
        object-fit: contain;
    }
`;const Pn=({src:t,alt:e,className:n,"data-testid":r})=>i("img",{src:t,alt:e||"",className:n,"data-testid":r,onError:t=>{t.target.onerror=null,t.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Vn=({resources:t,onClick:e,"data-id":n,"data-testid":r="navbar-brand",type:a})=>i(Rn,Object.assign({role:"link","aria-label":t.brandName+"-app-home-page",onClick:t=>{e&&e(t,a)},tabIndex:0,"data-id":n,"data-testid":r,$type:a},{children:i(Pn,{src:t.logoSrc,alt:t.brandName+"-app-logo"})})),Un=e.div`
    display: none;

    ${We.tablet} {
        display: flex;
    }
`,Gn=e.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${t=>t.$show?"visible":"hidden"};

    ${t=>t.$show?n`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:n`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${t=>{const e=`${t.$viewHeight}px`||"1vh";return n`
            height: calc(${e} * 100);
        `}}

	${We.tablet} {
        width: 75%;
    }

    ${We.mobileL} {
        width: 100%;
    }
`,Jn=e.div`
    display: flex;
    flex-direction: column;
`,Xn=e.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Qn=e(p)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Zn=e(Ve)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Ye.Neutral[1]};

    :active,
    :focus {
        color: ${Ye.Primary};
    }
`,Kn=s.forwardRef(((t,e)=>{const{show:n,resources:r,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=t,[f,p]=c(0),{primary:g,secondary:m}=r;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const t=.01*window.innerHeight;p(t)}};return i(Un,Object.assign({ref:e,"data-testid":"drawer"},{children:i(Gn,Object.assign({$show:n,$viewHeight:f},{children:a(Jn,{children:[a(Xn,{children:[i(qe,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(Vn,{resources:g,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(tn,{}),i(Vn,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(Zn,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Qn,{})}))]}),s]})}))}))}));var qn=function(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return-1},tr=Vt;var er=Vt,nr=Ut,rr=le;var ir=Vt,ar=function(){this.__data__=new tr,this.size=0},or=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},sr=function(t){return this.__data__.get(t)},lr=function(t){return this.__data__.has(t)},cr=function(t,e){var n=this.__data__;if(n instanceof er){var r=n.__data__;if(!nr||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new rr(r)}return n.set(t,e),this.size=n.size,this};function dr(t){var e=this.__data__=new ir(t);this.size=e.size}dr.prototype.clear=ar,dr.prototype.delete=or,dr.prototype.get=sr,dr.prototype.has=lr,dr.prototype.set=cr;var ur=dr;var hr=le,fr=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},pr=function(t){return this.__data__.has(t)};function gr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new hr;++e<n;)this.add(t[e])}gr.prototype.add=gr.prototype.push=fr,gr.prototype.has=pr;var mr=gr,yr=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},br=function(t,e){return t.has(e)};var vr=function(t,e,n,r,i,a){var o=1&n,s=t.length,l=e.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(t),d=a.get(e);if(c&&d)return c==e&&d==t;var u=-1,h=!0,f=2&n?new mr:void 0;for(a.set(t,e),a.set(e,t);++u<s;){var p=t[u],g=e[u];if(r)var m=o?r(g,p,u,e,t,a):r(p,g,u,t,e,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!yr(e,(function(t,e){if(!br(f,e)&&(p===t||i(p,t,n,r,a)))return f.push(e)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,a)){h=!1;break}}return a.delete(t),a.delete(e),h};var $r=S.Uint8Array,wr=Et,Sr=vr,Fr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},xr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Br=F?F.prototype:void 0,Dr=Br?Br.valueOf:void 0;var kr=function(t,e,n,r,i,a,o){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new $r(t),new $r(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wr(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=Fr;case"[object Set]":var l=1&r;if(s||(s=xr),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;r|=2,o.set(t,e);var d=Sr(s(t),s(e),r,i,a,o);return o.delete(t),d;case"[object Symbol]":if(Dr)return Dr.call(t)==Dr.call(e)}return!1};var Ar=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t},Or=b;var _r=function(t,e,n){var r=e(t);return Or(t)?r:Ar(r,n(t))};var Er=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o)}return a},jr=function(){return[]},Hr=Object.prototype.propertyIsEnumerable,Cr=Object.getOwnPropertySymbols,Mr=Cr?function(t){return null==t?[]:(t=Object(t),Er(Cr(t),(function(e){return Hr.call(t,e)})))}:jr;var zr=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Tr=C,Nr=M;var Yr=function(t){return Nr(t)&&"[object Arguments]"==Tr(t)},Lr=M,Ir=Object.prototype,Wr=Ir.hasOwnProperty,Rr=Ir.propertyIsEnumerable,Pr=Yr(function(){return arguments}())?Yr:function(t){return Lr(t)&&Wr.call(t,"callee")&&!Rr.call(t,"callee")},Vr={exports:{}};var Ur=function(){return!1};!function(t,e){var n=S,r=Ur,i=e&&!e.nodeType&&e,a=i&&t&&!t.nodeType&&t,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;t.exports=s}(Vr,Vr.exports);var Gr=/^(?:0|[1-9]\d*)$/;var Jr=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Gr.test(t))&&t>-1&&t%1==0&&t<e};var Xr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Qr=C,Zr=Xr,Kr=M,qr={};qr["[object Float32Array]"]=qr["[object Float64Array]"]=qr["[object Int8Array]"]=qr["[object Int16Array]"]=qr["[object Int32Array]"]=qr["[object Uint8Array]"]=qr["[object Uint8ClampedArray]"]=qr["[object Uint16Array]"]=qr["[object Uint32Array]"]=!0,qr["[object Arguments]"]=qr["[object Array]"]=qr["[object ArrayBuffer]"]=qr["[object Boolean]"]=qr["[object DataView]"]=qr["[object Date]"]=qr["[object Error]"]=qr["[object Function]"]=qr["[object Map]"]=qr["[object Number]"]=qr["[object Object]"]=qr["[object RegExp]"]=qr["[object Set]"]=qr["[object String]"]=qr["[object WeakMap]"]=!1;var ti=function(t){return Kr(t)&&Zr(t.length)&&!!qr[Qr(t)]};var ei=function(t){return function(e){return t(e)}},ni={exports:{}};!function(t,e){var n=v,r=e&&!e.nodeType&&e,i=r&&t&&!t.nodeType&&t,a=i&&i.exports===r&&n.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=o}(ni,ni.exports);var ri=ti,ii=ei,ai=ni.exports,oi=ai&&ai.isTypedArray,si=oi?ii(oi):ri,li=zr,ci=Pr,di=b,ui=Vr.exports,hi=Jr,fi=si,pi=Object.prototype.hasOwnProperty;var gi=function(t,e){var n=di(t),r=!n&&ci(t),i=!n&&!r&&ui(t),a=!n&&!r&&!i&&fi(t),o=n||r||i||a,s=o?li(t.length,String):[],l=s.length;for(var c in t)!e&&!pi.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||hi(c,l))||s.push(c);return s},mi=Object.prototype;var yi=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||mi)};var bi=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),vi=yi,$i=bi,wi=Object.prototype.hasOwnProperty;var Si=J,Fi=Xr;var xi=gi,Bi=function(t){if(!vi(t))return $i(t);var e=[];for(var n in Object(t))wi.call(t,n)&&"constructor"!=n&&e.push(n);return e},Di=function(t){return null!=t&&Fi(t.length)&&!Si(t)};var ki=function(t){return Di(t)?xi(t):Bi(t)},Ai=_r,Oi=Mr,_i=ki;var Ei=function(t){return Ai(t,_i,Oi)},ji=Object.prototype.hasOwnProperty;var Hi=function(t,e,n,r,i,a){var o=1&n,s=Ei(t),l=s.length;if(l!=Ei(e).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in e:ji.call(e,d)))return!1}var u=a.get(t),h=a.get(e);if(u&&h)return u==e&&h==t;var f=!0;a.set(t,e),a.set(e,t);for(var p=o;++c<l;){var g=t[d=s[c]],m=e[d];if(r)var y=o?r(m,g,d,e,t,a):r(g,m,d,t,e,a);if(!(void 0===y?g===m||i(g,m,n,r,a):y)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var b=t.constructor,v=e.constructor;b==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(t),a.delete(e),f},Ci=ht(S,"DataView"),Mi=Ut,zi=ht(S,"Promise"),Ti=ht(S,"Set"),Ni=ht(S,"WeakMap"),Yi=C,Li=q,Ii="[object Map]",Wi="[object Promise]",Ri="[object Set]",Pi="[object WeakMap]",Vi="[object DataView]",Ui=Li(Ci),Gi=Li(Mi),Ji=Li(zi),Xi=Li(Ti),Qi=Li(Ni),Zi=Yi;(Ci&&Zi(new Ci(new ArrayBuffer(1)))!=Vi||Mi&&Zi(new Mi)!=Ii||zi&&Zi(zi.resolve())!=Wi||Ti&&Zi(new Ti)!=Ri||Ni&&Zi(new Ni)!=Pi)&&(Zi=function(t){var e=Yi(t),n="[object Object]"==e?t.constructor:void 0,r=n?Li(n):"";if(r)switch(r){case Ui:return Vi;case Gi:return Ii;case Ji:return Wi;case Xi:return Ri;case Qi:return Pi}return e});var Ki=ur,qi=vr,ta=kr,ea=Hi,na=Zi,ra=b,ia=Vr.exports,aa=si,oa="[object Arguments]",sa="[object Array]",la="[object Object]",ca=Object.prototype.hasOwnProperty;var da=function(t,e,n,r,i,a){var o=ra(t),s=ra(e),l=o?sa:na(t),c=s?sa:na(e),d=(l=l==oa?la:l)==la,u=(c=c==oa?la:c)==la,h=l==c;if(h&&ia(t)){if(!ia(e))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new Ki),o||aa(t)?qi(t,e,n,r,i,a):ta(t,e,l,n,r,i,a);if(!(1&n)){var f=d&&ca.call(t,"__wrapped__"),p=u&&ca.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,m=p?e.value():e;return a||(a=new Ki),i(g,m,n,r,a)}}return!!h&&(a||(a=new Ki),ea(t,e,n,r,i,a))},ua=M;var ha=function t(e,n,r,i,a){return e===n||(null==e||null==n||!ua(e)&&!ua(n)?e!=e&&n!=n:da(e,n,r,i,t,a))},fa=ur,pa=ha;var ga=P;var ma=function(t){return t==t&&!ga(t)},ya=ma,ba=ki;var va=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}},$a=function(t,e,n,r){var i=n.length,a=i,o=!r;if(null==t)return!a;for(t=Object(t);i--;){var s=n[i];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var l=(s=n[i])[0],c=t[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in t))return!1}else{var u=new fa;if(r)var h=r(c,d,l,t,e,u);if(!(void 0===h?pa(d,c,3,r,u):h))return!1}}return!0},wa=function(t){for(var e=ba(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,ya(i)]}return e},Sa=va;var Fa=De,xa=Pr,Ba=b,Da=Jr,ka=Xr,Aa=Ae;var Oa=function(t,e){return null!=t&&e in Object(t)},_a=function(t,e,n){for(var r=-1,i=(e=Fa(e,t)).length,a=!1;++r<i;){var o=Aa(e[r]);if(!(a=null!=t&&n(t,o)))break;t=t[o]}return a||++r!=i?a:!!(i=null==t?0:t.length)&&ka(i)&&Da(o,i)&&(Ba(t)||xa(t))};var Ea=ha,ja=He,Ha=function(t,e){return null!=t&&_a(t,e,Oa)},Ca=R,Ma=ma,za=va,Ta=Ae;var Na=Ee;var Ya=function(t){return function(e){return null==e?void 0:e[t]}},La=function(t){return function(e){return Na(e,t)}},Ia=R,Wa=Ae;var Ra=function(t){var e=wa(t);return 1==e.length&&e[0][2]?Sa(e[0][0],e[0][1]):function(n){return n===t||$a(n,t,e)}},Pa=function(t,e){return Ca(t)&&Ma(e)?za(Ta(t),e):function(n){var r=ja(n,t);return void 0===r&&r===e?Ha(n,t):Ea(e,r,3)}},Va=function(t){return t},Ua=b,Ga=function(t){return Ia(t)?Ya(Wa(t)):La(t)};var Ja=/\s/;var Xa=function(t){for(var e=t.length;e--&&Ja.test(t.charAt(e)););return e},Qa=/^\s+/;var Za=function(t){return t?t.slice(0,Xa(t)+1).replace(Qa,""):t},Ka=P,qa=N,to=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,no=/^0o[0-7]+$/i,ro=parseInt;var io=function(t){if("number"==typeof t)return t;if(qa(t))return NaN;if(Ka(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ka(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Za(t);var n=eo.test(t);return n||no.test(t)?ro(t.slice(2),n?2:8):to.test(t)?NaN:+t},ao=1/0;var oo=function(t){return t?(t=io(t))===ao||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var so=qn,lo=function(t){return"function"==typeof t?t:null==t?Va:"object"==typeof t?Ua(t)?Pa(t[0],t[1]):Ra(t):Ga(t)},co=function(t){var e=oo(t),n=e%1;return e==e?n?e-n:e:0},uo=Math.max;var ho=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:co(n);return i<0&&(i=uo(r+i,0)),so(t,lo(e),i)};const fo=e.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`,po=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,go=e.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Ye.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${po} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,mo=e(go)`
    animation-delay: -0.45s;
`,yo=e(go)`
    animation-delay: -0.3s;
`,bo=e(go)`
    animation-delay: -0.15s;
`,vo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},$o={collections:{base:{D1:{fontFamily:vo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wo=t=>e=>{const n=e.theme,r=Me($o,n[ze.textStyleScheme]);return n.options&&n.options.textStyle?Ce(r,t,n.options.textStyle):Ce(r,t)},So={D1:{fontFamily:wo("D1.fontFamily"),fontSize:wo("D1.fontSize"),fontWeight:wo("D1.fontWeight"),lineHeight:wo("D1.lineHeight"),letterSpacing:wo("D1.letterSpacing")},D2:{fontFamily:wo("D2.fontFamily"),fontSize:wo("D2.fontSize"),fontWeight:wo("D2.fontWeight"),lineHeight:wo("D2.lineHeight"),letterSpacing:wo("D2.letterSpacing")},D3:{fontFamily:wo("D3.fontFamily"),fontSize:wo("D3.fontSize"),fontWeight:wo("D3.fontWeight"),lineHeight:wo("D3.lineHeight"),letterSpacing:wo("D3.letterSpacing")},D4:{fontFamily:wo("D4.fontFamily"),fontSize:wo("D4.fontSize"),fontWeight:wo("D4.fontWeight"),lineHeight:wo("D4.lineHeight"),letterSpacing:wo("D4.letterSpacing")},DBody:{fontFamily:wo("DBody.fontFamily"),fontSize:wo("DBody.fontSize"),fontWeight:wo("DBody.fontWeight"),lineHeight:wo("DBody.lineHeight"),letterSpacing:wo("DBody.letterSpacing")},H1:{fontFamily:wo("H1.fontFamily"),fontSize:wo("H1.fontSize"),fontWeight:wo("H1.fontWeight"),lineHeight:wo("H1.lineHeight"),letterSpacing:wo("H1.letterSpacing")},H2:{fontFamily:wo("H2.fontFamily"),fontSize:wo("H2.fontSize"),fontWeight:wo("H2.fontWeight"),lineHeight:wo("H2.lineHeight"),letterSpacing:wo("H2.letterSpacing")},H3:{fontFamily:wo("H3.fontFamily"),fontSize:wo("H3.fontSize"),fontWeight:wo("H3.fontWeight"),lineHeight:wo("H3.lineHeight"),letterSpacing:wo("H3.letterSpacing")},H4:{fontFamily:wo("H4.fontFamily"),fontSize:wo("H4.fontSize"),fontWeight:wo("H4.fontWeight"),lineHeight:wo("H4.lineHeight"),letterSpacing:wo("H4.letterSpacing")},H5:{fontFamily:wo("H5.fontFamily"),fontSize:wo("H5.fontSize"),fontWeight:wo("H5.fontWeight"),lineHeight:wo("H5.lineHeight"),letterSpacing:wo("H5.letterSpacing")},H6:{fontFamily:wo("H6.fontFamily"),fontSize:wo("H6.fontSize"),fontWeight:wo("H6.fontWeight"),lineHeight:wo("H6.lineHeight"),letterSpacing:wo("H6.letterSpacing")},Body:{fontFamily:wo("Body.fontFamily"),fontSize:wo("Body.fontSize"),fontWeight:wo("Body.fontWeight"),lineHeight:wo("Body.lineHeight"),letterSpacing:wo("Body.letterSpacing")},BodySmall:{fontFamily:wo("BodySmall.fontFamily"),fontSize:wo("BodySmall.fontSize"),fontWeight:wo("BodySmall.fontWeight"),lineHeight:wo("BodySmall.lineHeight"),letterSpacing:wo("BodySmall.letterSpacing")},XSmall:{fontFamily:wo("XSmall.fontFamily"),fontSize:wo("XSmall.fontSize"),fontWeight:wo("XSmall.fontWeight"),lineHeight:wo("XSmall.lineHeight"),letterSpacing:wo("XSmall.letterSpacing")}},Fo=t=>{switch(t){case 700:case"bold":return vo.Bold;case 600:case"semibold":return vo.Semibold;case 300:case"light":return vo.Light;case 400:case"regular":return vo.Regular;default:return""}},xo=(t,e)=>r=>{var i;const a=So[t].fontFamily(r),o=So[t].fontWeight(r);return Object.values(vo).includes(a)?n`
                font-family: ${Fo(e)||Fo(o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=Bo(e)||o)&&void 0!==i?i:"normal"};
        `},Bo=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Do=t=>{if(t>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},ko=(t,e,r=!1)=>i=>{const a=So[t],o=a.fontSize(i);return n`
            ${xo(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Ao=(t=!1,e=!1,r=void 0)=>e?n`
            display: block;
            ${Do(r)}
        `:t?n`
            display: inline;
        `:n`
            display: block;
            ${Do(r)}
        `;var Oo;!function(t){t.D1=e.h1`
        ${t=>n`
                ${ko("D1",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=e.h1`
        ${t=>n`
                ${ko("D2",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=e.h1`
        ${t=>n`
                ${ko("D3",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=e.h1`
        ${t=>n`
                ${ko("D4",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=e.h1`
        ${t=>n`
                ${ko("DBody",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=e.h1`
        ${t=>n`
                ${ko("H1",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=e.h2`
        ${t=>n`
                ${ko("H2",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=e.h3`
        ${t=>n`
                ${ko("H3",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=e.h4`
        ${t=>n`
                ${ko("H4",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=e.h5`
        ${t=>n`
                ${ko("H5",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=e.h6`
        ${t=>n`
                ${ko("H6",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=e.p`
        ${t=>n`
                ${ko("Body",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=e.p`
        ${t=>n`
                ${ko("BodySmall",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=e.span`
        ${t=>n`
                ${ko("XSmall",t.weight,t.paragraph)}
                color: ${Ye.Neutral[1]};
                ${Ao(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>jo(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>jo(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Oo||(Oo={}));const _o=e.a`
    ${t=>n`
            ${ko(t.textStyle,t.weight)}
            color: ${Ye.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ye.Secondary};

                svg {
                    color: ${Ye.Secondary};
                }
            }
        `}
`,Eo=e(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,jo=t=>{var{external:e=!1,children:n}=t,r=Re(t,["external","children"]);return a(_o,Object.assign({},r,{children:[n,e&&i(Eo,{})]}))};var Ho;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ho||(Ho={}));const Co=e.button`
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
    ${t=>{switch(t.$buttonStyle){case"secondary":return n`
                    background-color: ${Ye.Neutral[8](t)};
                    border: 1px solid ${Ye.Primary(t)};

                    span {
                        color: ${Ye.Primary(t)};
                    }
                `;case"light":return n`
                    background-color: ${Ye.Neutral[8](t)};
                    border: 1px solid ${Ye.Neutral[5](t)};

                    span {
                        color: ${Ye.Primary(t)};
                    }
                `;case"disabled":return n`
                    background-color: ${Ye.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ye.Neutral[3](t)};
                    }
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ye.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ye.Secondary};
                        }
                    }
                `;default:return n`
                    background-color: ${Ye.Primary(t)};
                    border: 1px solid transparent;

                    ${We.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ye.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?n`
                    height: 2.5rem;
                    span {
                        ${ko("H5","semibold")}
                    }

                    ${We.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    span {
                        ${ko("H4","semibold")}
                    }

                    ${We.mobileS} {
                        height: auto;
                    }
                `}
`,Mo=e((({color:t,className:e,size:n=18})=>a(fo,Object.assign({className:e,$size:n,$color:t},{children:[i(go,{id:"inner1",$size:n-2,$borderWidth:2}),i(mo,{id:"inner2",$size:n-2,$borderWidth:2}),i(yo,{id:"inner3",$size:n-2,$borderWidth:2}),i(bo,{id:"inner4",$size:n-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=Ye.Primary(t);break;case"disabled":e=Ye.Neutral[3](t);break;default:e=Ye.Neutral[8](t)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`,zo={Default:s.forwardRef(((t,e)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default"}=t,l=Re(t,["children","disabled","loading","styleType"]),c={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"default"};return a(Co,Object.assign({ref:e,"data-testid":l["data-testid"]||"button",disabled:r},c,l,{children:[o&&i(Mo,Object.assign({},c)),i("span",{children:n})]}))})),Small:s.forwardRef(((t,e)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default"}=t,l=Re(t,["children","disabled","loading","styleType"]),c={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"small"};return a(Co,Object.assign({ref:e,"data-testid":l["data-testid"]||"button",disabled:r},c,l,{children:[o&&i(Mo,Object.assign({},c,{size:16})),i("span",{children:n})]}))}))},To=e.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${We.tablet} {
        display: none;
    }
`,No=e.ul`
    display: none;

    ${We.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Yo=e.ul`
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
`,Lo=e.li`
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
        ${t=>{if(t.$mobile)return n`
                    padding: 0 1rem;
                `}}
    }
`,Io=e(zo.Small)`
    ${We.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,Wo=e.div`
    display: none;

    ${We.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,Ro=e(Oo.BodySmall)`
    margin-bottom: 0.5rem;
`,Po=e.div`
    display: flex;
`,Vo=e.a`
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
`,Uo=({actionButtons:t,mobile:e=!1,onActionButtonClick:n})=>{const r=t=>{t.stopPropagation()},s=t=>e=>{e.stopPropagation(),"download"===t.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(e,t)},l=(t,e)=>{const n=t?(t=>{const e=ho(t,(t=>"download"===t.type));if(e>-1){const n=[...t],r=n.splice(e,1);return[...n,r[0]]}return t})(e):e;return n.map(((e,n)=>{let o;switch(e.type){case"download":o=t?(l=e.args,a(Wo,{children:[i(Ro,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(Po,{children:[i(Vo,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(Vo,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(Io,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const r=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;o=i(Io,Object.assign({},e.args,{type:"button",onClick:s(e),"data-testid":r}));break}case"component":{const t=e.args;o=t&&t.render||null;break}default:o=null}var l;if(o)return i(Lo,Object.assign({$mobile:t},{children:o}),`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,r=n.filter((t=>!!t.uncollapsible)),s=n.filter((t=>!t.uncollapsible));return e?i(o,{children:s.length>0&&i(Yo,{children:l(e,s)})}):a(o,{children:[r.length>0&&i(No,{children:l(!1,r)}),t.desktop.length>0&&i(To,{children:l(e,t.desktop)})]})}return i(o,{})},Go={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Ye.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Ye.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ye.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Ye.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Ye.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ye.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Jo=t=>e=>{var n;const r=e.theme,i=Me(Go,r[ze.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ce(i,t,r.options.designToken):Ce(i,t)},Xo=(Jo("InputBoxShadow"),Jo("InputErrorBoxShadow"),Jo("ElevationBoxShadow")),Qo=(Jo("Table.Header"),Jo("Table.Cell.Primary"),Jo("Table.Cell.Secondary"),Jo("Table.Cell.Selected"),Jo("Table.Cell.Hover"),e.ul`
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

    background: ${Ye.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Xo};
`),Zo=e.ul`
    display: none;
    list-style: none;

    ${We.tablet} {
        border-left: 0.25rem solid ${Ye.Primary};
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
    color: ${Ye.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Ye.Primary};
    }
    :hover {
        color: ${Ye.Accent.Light[1]};
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
`,ts=({items:t,mobile:e=!1,onItemClick:n})=>{const r=t=>e=>{e.stopPropagation(),n(e,t)},a=(e=!1)=>t.map(((t,n)=>{const{children:a,options:o}=t,s=Re(t,["children","options"]),l=e?`link__mobile-${n+1}`:`link__${n+1}`;return i(qo,{children:i(Ko,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:r(t)},o,{children:a}))},n)}));if(t&&t.length>0){return i(e?Zo:Qo,{children:a(e)})}return i(o,{})},es=e.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${t=>t.$alignLeft&&"margin-right: auto;"}

    ${We.tablet} {
        display: none;
    }
`,ns=e.ul`
    display: none;
    list-style: none;

    ${We.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,rs=e.li`
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
    color: ${Ye.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Ye.Neutral[1]};
    }

    ${We.tablet} {
        color: ${Ye.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Ye.Neutral[1]};
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
    background-color: ${Ye.Primary};

    ${We.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Ye.Primary};
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
    color: ${Ye.Neutral[3]};
    :hover {
        color: ${Ye.Neutral[1]};
    }
`,ds=({items:t,selectedId:e,mobile:n=!1,hideNavBranding:r,onItemClick:s})=>{const[u,h]=c(-1),[f,p]=c(!1),g=d(null);l((()=>{const t=t=>{g.current&&!g.current.contains(t.target)&&m()};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}}),[]);const m=()=>{p(!1)},y=(t,e)=>n=>{n.stopPropagation(),h(e),p(!0),s(n,t)},b=(t,e)=>{t.stopPropagation(),s(t,e),p(!1)},v=()=>t.map(((t,o)=>{if("component"===t.itemType){const e=t&&t.children||null;return i("li",{children:e},o)}{const s=(t=>{if(t.id===e)return!0;if((null==t?void 0:t.subMenu)&&t.subMenu.length>=1)return!!t.subMenu.find((t=>t.id===e));return!1})(t),{children:l,options:c}=t,d=Re(t,["children","options"]),h=s?n?"bold":"semibold":"regular",p=n?`link__mobile-${o+1}`:`link__${o+1}`,g=u>=0&&u===o&&f;return a(rs,Object.assign({$hiddenBranding:r},{children:[a(is,Object.assign({"data-testid":p,weight:h,$selected:s},d,{onClick:y(t,o)},c,{children:[i(as,{children:l}),s&&i(os,{"data-testid":`${p}-indicator`}),n&&t.subMenu&&i(ss,{children:i(ls,Object.assign({"data-testid":`${p}-expand-collapse-button`,$selected:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:i(cs,{})}))})]})),g&&i(ts,{items:t.subMenu,mobile:n,onItemClick:b})]}),o)}}));return t&&t.length>0?n?i(ns,Object.assign({ref:g},{children:v()})):i(es,Object.assign({ref:g,$alignLeft:r},{children:v()})):i(o,{})},us=u(((t,e)=>{var{items:n,className:r,id:s,selectedId:u,compress:f=!1,fixed:p=!0,resources:g=hs,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:w,onBrandClick:S,masthead:F=!0,layout:x="default"}=t,B=Re(t,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,k]=c(!1),[A,O]=c(!1),_="stretch"===x,E=d(),{primary:j=hs.primary,secondary:H}=g;h(e,(()=>Object.assign(E.current,{dismissDrawer:()=>{C()}})),[D]),l((()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)})),[]);const C=()=>{k(!1),setTimeout((()=>{O(!1)}),550)},M=t=>D&&-1===b.indexOf(t),z=()=>{window.innerWidth<=Le.tablet&&D&&C()},T=(t,e)=>{S&&(t.preventDefault(),S(e)),M("brand-click")&&C()},N=(t,e)=>{e.onClick?e.onClick(t):$&&(t.preventDefault(),$(e)),!(null==e?void 0:e.subMenu)&&M("item-click")&&C()},Y=(t,e)=>{e.args&&e.args.onClick?e.args.onClick(t):w&&(t.preventDefault(),w(e)),M("item-click")&&C()},L=()=>{k(!0),O(!0)},I=()=>{M("close-button-click")&&C()},W=()=>n.mobile&&n.mobile.length>0||n.desktop&&n.desktop.length>0||v&&!(()=>{if(v.mobile&&v.mobile.some((t=>t.uncollapsible)))return!0;if(v.desktop&&v.desktop.some((t=>t.uncollapsible)))return!0;return!1})()?i(Ze,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:L,focusHighlight:!1},{children:i(Ke,{})})):null;return a(Je,Object.assign({ref:E,$fixed:p,className:r,id:s||"navbar-wrapper","data-testid":B["data-testid"]||"navbar-wrapper"},{children:[F&&i(hn,{}),a(dn.Content,Object.assign({stretch:_},{children:[a(Xe,Object.assign({$compress:f},{children:[!y&&a(qe,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(Vn,{resources:j,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),H&&a(o,{children:[i(tn,{$compress:f}),i(Vn,{resources:H,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(Qe,Object.assign({$hideNavBranding:y},{children:[i(ds,{items:n.desktop,onItemClick:N,selectedId:u,hideNavBranding:y}),i(Uo,{actionButtons:v,onActionButtonClick:Y}),W()]}))]})),!m&&i(Ln,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:I},{children:a(Kn,Object.assign({show:D,resources:{primary:j,secondary:H},onClose:I,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(ds,{items:n.mobile||n.desktop,onItemClick:N,selectedId:u,mobile:!0}),i(Uo,{actionButtons:v,onActionButtonClick:Y,mobile:!0})]}))}))]}))]}))})),hs={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},fs=Ge,ps=3.5;export{us as Navbar,fs as NavbarHeight,ps as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
