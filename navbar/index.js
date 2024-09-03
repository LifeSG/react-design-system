import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as n,keyframes as r}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import f from"react-dom";import{CrossIcon as g}from"@lifesg/react-icons/cross";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function b(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v=Array.isArray,$="object"==typeof y&&y&&y.Object===Object&&y,F=$,S="object"==typeof self&&self&&self.Object===Object&&self,B=F||S||Function("return this")(),w=B.Symbol,D=w,x=Object.prototype,k=x.hasOwnProperty,O=x.toString,A=D?D.toStringTag:void 0;var E=function(e){var t=k.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var i=O.call(e);return r&&(t?e[A]=n:delete e[A]),i},H=Object.prototype.toString;var C=E,_=function(e){return H.call(e)},j=w?w.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?C(e):_(e)};var M=function(e){return null!=e&&"object"==typeof e},T=z,I=M;var W=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==T(e)},N=v,L=W,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/;var R=function(e,t){if(N(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!L(e))||(P.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var V=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U=z,J=V;var G,X=function(e){if(!J(e))return!1;var t=U(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=B["__core-js_shared__"],Z=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var K=function(e){return!!Z&&Z in e},q=Function.prototype.toString;var ee=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},te=X,ne=K,re=V,ie=ee,ae=/^\[object .+?Constructor\]$/,oe=Function.prototype,se=Object.prototype,le=oe.toString,ce=se.hasOwnProperty,de=RegExp("^"+le.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ue=function(e){return!(!re(e)||ne(e))&&(te(e)?de:ae).test(ie(e))},he=function(e,t){return null==e?void 0:e[t]};var fe=function(e,t){var n=he(e,t);return ue(n)?n:void 0},ge=fe(Object,"create"),pe=ge;var me=function(){this.__data__=pe?pe(null):{},this.size=0};var ye=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},be=ge,ve=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(be){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ve.call(t,e)?t[e]:void 0},Fe=ge,Se=Object.prototype.hasOwnProperty;var Be=ge;var we=me,De=ye,xe=$e,ke=function(e){var t=this.__data__;return Fe?void 0!==t[e]:Se.call(t,e)},Oe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Be&&void 0===t?"__lodash_hash_undefined__":t,this};function Ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ae.prototype.clear=we,Ae.prototype.delete=De,Ae.prototype.get=xe,Ae.prototype.has=ke,Ae.prototype.set=Oe;var Ee=Ae;var He=function(){this.__data__=[],this.size=0};var Ce=function(e,t){return e===t||e!=e&&t!=t},_e=Ce;var je=function(e,t){for(var n=e.length;n--;)if(_e(e[n][0],t))return n;return-1},ze=je,Me=Array.prototype.splice;var Te=je;var Ie=je;var We=je;var Ne=He,Le=function(e){var t=this.__data__,n=ze(t,e);return!(n<0)&&(n==t.length-1?t.pop():Me.call(t,n,1),--this.size,!0)},Ye=function(e){var t=this.__data__,n=Te(t,e);return n<0?void 0:t[n][1]},Pe=function(e){return Ie(this.__data__,e)>-1},Re=function(e,t){var n=this.__data__,r=We(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ve.prototype.clear=Ne,Ve.prototype.delete=Le,Ve.prototype.get=Ye,Ve.prototype.has=Pe,Ve.prototype.set=Re;var Ue=Ve,Je=fe(B,"Map"),Ge=Ee,Xe=Ue,Qe=Je;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var n=e.__data__;return Ze(t)?n["string"==typeof t?"string":"hash"]:n.map},qe=Ke;var et=Ke;var tt=Ke;var nt=Ke;var rt=function(){this.size=0,this.__data__={hash:new Ge,map:new(Qe||Xe),string:new Ge}},it=function(e){var t=qe(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return et(this,e).get(e)},ot=function(e){return tt(this,e).has(e)},st=function(e,t){var n=nt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lt.prototype.clear=rt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var ct=lt,dt=ct;function ut(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ut.Cache||dt),n}ut.Cache=dt;var ht=ut;var ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gt=/\\(\\)?/g,pt=function(e){var t=ht(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ft,(function(e,n,r,i){t.push(r?i.replace(gt,"$1"):n||e)})),t}));var mt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},yt=v,bt=W,vt=w?w.prototype:void 0,$t=vt?vt.toString:void 0;var Ft=function e(t){if("string"==typeof t)return t;if(yt(t))return mt(t,e)+"";if(bt(t))return $t?$t.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},St=Ft;var Bt=v,wt=R,Dt=pt,xt=function(e){return null==e?"":St(e)};var kt=function(e,t){return Bt(e)?e:wt(e,t)?[e]:Dt(xt(e))},Ot=W;var At=function(e){if("string"==typeof e||Ot(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Et=kt,Ht=At;var Ct=function(e,t){for(var n=0,r=(t=Et(t,e)).length;null!=e&&n<r;)e=e[Ht(t[n++])];return n&&n==r?e:void 0},_t=Ct;var jt=function(e,t,n){var r=null==e?void 0:_t(e,t);return void 0===r?n:r},zt=b(jt);const Mt=(e,t,n)=>t?zt(n,t)||zt(e,t):n||e,Tt=(e,t)=>{const n=t||e.defaultValue;return zt(e.collections,n)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Nt=e=>t=>{const n=t.theme,r=Tt(Wt,n[It.colorScheme]);return n.options&&n.options.color?Mt(r,e,n.options.color):Mt(r,e)},Lt={Brand:{1:Nt("Brand.1"),2:Nt("Brand.2"),3:Nt("Brand.3"),4:Nt("Brand.4"),5:Nt("Brand.5"),6:Nt("Brand.6")},Primary:Nt("Primary"),PrimaryDark:Nt("PrimaryDark"),Secondary:Nt("Secondary"),Accent:{Light:{1:Nt("Accent.Light.1"),2:Nt("Accent.Light.2"),3:Nt("Accent.Light.3"),4:Nt("Accent.Light.4"),5:Nt("Accent.Light.5"),6:Nt("Accent.Light.6")},Dark:{1:Nt("Accent.Dark.1"),2:Nt("Accent.Dark.2"),3:Nt("Accent.Dark.3")}},Neutral:{1:Nt("Neutral.1"),2:Nt("Neutral.2"),3:Nt("Neutral.3"),4:Nt("Neutral.4"),5:Nt("Neutral.5"),6:Nt("Neutral.6"),7:Nt("Neutral.7"),8:Nt("Neutral.8")},Validation:{Green:{Text:Nt("Validation.Green.Text"),Icon:Nt("Validation.Green.Icon"),Border:Nt("Validation.Green.Border"),Background:Nt("Validation.Green.Background")},Orange:{Text:Nt("Validation.Orange.Text"),Icon:Nt("Validation.Orange.Icon"),Border:Nt("Validation.Orange.Border"),Background:Nt("Validation.Orange.Background"),Badge:Nt("Validation.Orange.Badge")},Red:{Text:Nt("Validation.Red.Text"),Icon:Nt("Validation.Red.Icon"),Border:Nt("Validation.Red.Border"),Background:Nt("Validation.Red.Background")},Blue:{Text:Nt("Validation.Blue.Text"),Icon:Nt("Validation.Blue.Icon"),Border:Nt("Validation.Blue.Border"),Background:Nt("Validation.Blue.Background")}},Shadow:{Accent:Nt("Shadow.Accent"),Red:Nt("Shadow.Red"),Elevation:Nt("Shadow.Elevation")}},Yt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Pt=e=>Object.keys(Yt).reduce(((t,n)=>{const r=Yt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Rt=Pt("max-width");Pt("min-width");function Vt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Ut=t.button`
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
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&n`
                background-color: ${Lt.Neutral[7]};
            `}
    }
`,Jt=s.forwardRef(((e,t)=>{var{children:n,focusHighlight:r=!0,focusOutline:a="none",type:o="button"}=e,s=Vt(e,["children","focusHighlight","focusOutline","type"]);return i(Ut,Object.assign({ref:t,$outline:a,$highlight:r,type:o},s,{children:n}))})),Gt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Xt={notCompress:6,compress:4},Qt=t.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Zt=t.nav`
    height: ${e=>e.$compress?Xt.compress:Xt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Gt};

    ${Rt.tablet} {
        height: ${3.5}rem;
    }
`,Kt=t.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Rt.tablet} {
        margin-left: 0rem;
    }
`,qt=t(Jt)`
    display: none;

    ${Rt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,en=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Lt.Neutral[1]};
`,tn=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Rt.tablet} {
        height: 1.5rem;
    }

    ${Rt.mobileS} {
        height: 1.25rem;
    }
`,nn=t.div`
    display: flex;
    background-color: ${Lt.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Rt.tablet} {
        margin: 0 1rem;
    }

    ${Rt.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,rn=t.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return n`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Rt.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Rt.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,an=s.forwardRef(((e,t)=>{const{mobileCols:n,tabletCols:r,desktopCols:a}=e,o=Vt(e,["mobileCols","tabletCols","desktopCols"]);return i(rn,Object.assign({ref:t},(()=>{const e=r||n,t=n,i=on(a||r||n),o=on(e),s=on(t);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),on=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},sn=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="container",type:a="flex",stretch:o=!1}=e,s=Vt(e,["children","data-testid","type","stretch"]);return i(ln,Object.assign({ref:t,"data-testid":r,$type:a,$stretch:o},s,{children:n}))})),ln=t.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?n`
                padding: 0 3rem;
            `:n`
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

    ${e=>{switch(e.$type){case"grid":return n`
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
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,cn=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="section",stretch:a=!1}=e,o=Vt(e,["children","data-testid","stretch"]);return i(dn,Object.assign({ref:t,"data-testid":r,$stretch:a},o,{children:n}))})),dn=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?n`
                ${Rt.tablet} {
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
`,un=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="content",className:a,type:o="flex",stretch:s=!1}=e,l=Vt(e,["children","data-testid","className","type","stretch"]);return i(cn,Object.assign({ref:t,"data-testid":r,className:a,stretch:s},l,{children:i(sn,Object.assign({"data-testid":`${r}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),hn={Section:cn,Container:sn,Content:un,ColDiv:an},fn=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Rt.mobileL} {
        padding: 0;
    }
`,gn=()=>{l((()=>{e()||t()}),[]);const e=()=>document.getElementById(pn),t=()=>{if(!document.getElementById(pn)){const e=document.createElement("script");e.id=pn,e.type="module",e.src=mn,document.head.appendChild(e)}};return i(fn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},pn="lifesg-ds-masthead-script",mn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var yn={exports:{}};yn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bn,vn,$n=b(yn.exports),Fn={exports:{}},Sn=b(Fn.exports=(bn={year:0,month:1,day:2,hour:3,minute:4,second:5},vn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=vn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),vn[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=bn[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Bn={exports:{}};Bn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var F="$isDayjsObject",S=function(e){return e instanceof x||!(!e||!e[F])},B=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},w=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},D=b;D.l=B,D.i=S,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,d=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},g=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=D.p(d),p=function(e){var t=w(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=D.p(h),y=w(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return D.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case l:g=(v-b)/6048e5;break;case s:g=(v-b)/864e5;break;case o:g=v/n;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return f?g:D.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return w.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,x,w),e.$i=!0),w},w.locale=B,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=$[v],w.Ls=$,w.p={},w}();var wn=b(Bn.exports),Dn={exports:{}};Dn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var xn=b(Dn.exports),kn={exports:{}};kn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var On=b(kn.exports),An={exports:{}};An.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var En,Hn=b(An.exports);wn.extend(xn),wn.extend(On),wn.extend(Hn),wn.extend($n),wn.extend(Sn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=wn(t).startOf("week");return Cn(n).map((e=>_n(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return _n(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(wn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+wn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=wn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?wn(r):void 0,i?wn(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(En||(En={}));const Cn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},_n=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},jn=[1,3,5,7,8,10,12],zn=[4,6,9,11];var Mn,Tn,In,Wn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":jn.includes(a)?Math.min(i,31).toString():zn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=wn(e,n);return wn(t,n).diff(r,"minute")},e.toDayjs=e=>e?wn(e):wn(),e.addMinutesToTime=(e,t,n="HH:mm")=>wn(e,n).add(t,"minutes").format(n)}(Mn||(Mn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!wn(e).isBefore(r,"day"))||!(!i||!wn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(wn(e).isValid())return e}return""}}(Tn||(Tn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Wn||(Wn={}));const Nn=t.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return n`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Ln=t.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=n`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=n`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=n`
                transition: none;
            `),t}}
`,Yn=({show:e=!1,rootId:t,onOverlayClick:n,children:r,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[m,y]=c(null),[b,v]=c(),[$]=c((()=>In.generate())),F=d(),S=d(null),B=r&&s.cloneElement(r,{ref:S}),w=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>(O(),y(x()),()=>{C(),E().length<1&&A("remove")})),[]),l((()=>{if(e){const e=k();D(e),H();const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}{C();const e=setTimeout((()=>{E().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{F.current=e,v(e)},x=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>E().length>0,O=()=>{if(!document.getElementById(Pn)){const e=document.createElement("style");e.id=Pn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Rn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Rn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const t=document.body.classList.contains(Rn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Rn):document.body.classList.add(Rn)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},H=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},C=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},_=e=>{var t;const r=null===(t=S.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return m?f.createPortal(i(Nn,Object.assign({id:w,"data-testid":w,$show:e,zIndex:g,$stacked:b},{children:r&&i(Ln,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:a||(b?.5:.8),$backgroundBlur:o,$disableTransition:u,$enableOverlayClick:h,onClick:_},{children:B}))})),m):null},Pn="lifesg-ds-overlay-stylesheet",Rn="lifesg-ds-overlay-open",Vn=t.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Gt};
        object-fit: contain;
    }
`;const Un=({src:e,alt:t,className:n,"data-testid":r})=>i("img",{src:e,alt:t||"",className:n,"data-testid":r,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Jn=({resources:e,onClick:t,"data-id":n,"data-testid":r="navbar-brand",type:a})=>i(Vn,Object.assign({role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{t&&t(e,a)},tabIndex:0,"data-id":n,"data-testid":r,$type:a},{children:i(Un,{src:e.logoSrc,alt:e.brandName+"-app-logo"})})),Gn=t.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
    }
`,Xn=t.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?n`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:n`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return n`
            height: calc(${t} * 100);
        `}}

	${Rt.tablet} {
        width: 75%;
    }

    ${Rt.mobileL} {
        width: 100%;
    }
`,Qn=t.div`
    display: flex;
    flex-direction: column;
`,Zn=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Kn=t(g)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,qn=t(Jt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Lt.Neutral[1]};

    :active,
    :focus {
        color: ${Lt.Primary};
    }
`,er=s.forwardRef(((e,t)=>{const{show:n,resources:r,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=e,[f,g]=c(0),{primary:p,secondary:m}=r;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return i(Gn,Object.assign({ref:t,"data-testid":"drawer"},{children:i(Xn,Object.assign({$show:n,$viewHeight:f},{children:a(Qn,{children:[a(Zn,{children:[i(tn,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(Jn,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(nn,{}),i(Jn,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(qn,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Kn,{})}))]}),s]})}))}))}));var tr=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},nr=Ue;var rr=Ue,ir=Je,ar=ct;var or=Ue,sr=function(){this.__data__=new nr,this.size=0},lr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},cr=function(e){return this.__data__.get(e)},dr=function(e){return this.__data__.has(e)},ur=function(e,t){var n=this.__data__;if(n instanceof rr){var r=n.__data__;if(!ir||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ar(r)}return n.set(e,t),this.size=n.size,this};function hr(e){var t=this.__data__=new or(e);this.size=t.size}hr.prototype.clear=sr,hr.prototype.delete=lr,hr.prototype.get=cr,hr.prototype.has=dr,hr.prototype.set=ur;var fr=hr;var gr=ct,pr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},mr=function(e){return this.__data__.has(e)};function yr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new gr;++t<n;)this.add(e[t])}yr.prototype.add=yr.prototype.push=pr,yr.prototype.has=mr;var br=yr,vr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},$r=function(e,t){return e.has(t)};var Fr=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&n?new br:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],p=t[u];if(r)var m=o?r(p,g,u,t,e,a):r(g,p,u,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!vr(t,(function(e,t){if(!$r(f,t)&&(g===e||i(g,e,n,r,a)))return f.push(t)}))){h=!1;break}}else if(g!==p&&!i(g,p,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Sr=B.Uint8Array,Br=Ce,wr=Fr,Dr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},xr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},kr=w?w.prototype:void 0,Or=kr?kr.valueOf:void 0;var Ar=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Sr(e),new Sr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Br(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Dr;case"[object Set]":var l=1&r;if(s||(s=xr),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=wr(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(Or)return Or.call(e)==Or.call(t)}return!1};var Er=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Hr=v;var Cr=function(e,t,n){var r=t(e);return Hr(e)?r:Er(r,n(e))};var _r=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},jr=function(){return[]},zr=Object.prototype.propertyIsEnumerable,Mr=Object.getOwnPropertySymbols,Tr=Mr?function(e){return null==e?[]:(e=Object(e),_r(Mr(e),(function(t){return zr.call(e,t)})))}:jr;var Ir=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Wr=z,Nr=M;var Lr=function(e){return Nr(e)&&"[object Arguments]"==Wr(e)},Yr=M,Pr=Object.prototype,Rr=Pr.hasOwnProperty,Vr=Pr.propertyIsEnumerable,Ur=Lr(function(){return arguments}())?Lr:function(e){return Yr(e)&&Rr.call(e,"callee")&&!Vr.call(e,"callee")},Jr={exports:{}};var Gr=function(){return!1};!function(e,t){var n=B,r=Gr,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(Jr,Jr.exports);var Xr=Jr.exports,Qr=/^(?:0|[1-9]\d*)$/;var Zr=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Qr.test(e))&&e>-1&&e%1==0&&e<t};var Kr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},qr=z,ei=Kr,ti=M,ni={};ni["[object Float32Array]"]=ni["[object Float64Array]"]=ni["[object Int8Array]"]=ni["[object Int16Array]"]=ni["[object Int32Array]"]=ni["[object Uint8Array]"]=ni["[object Uint8ClampedArray]"]=ni["[object Uint16Array]"]=ni["[object Uint32Array]"]=!0,ni["[object Arguments]"]=ni["[object Array]"]=ni["[object ArrayBuffer]"]=ni["[object Boolean]"]=ni["[object DataView]"]=ni["[object Date]"]=ni["[object Error]"]=ni["[object Function]"]=ni["[object Map]"]=ni["[object Number]"]=ni["[object Object]"]=ni["[object RegExp]"]=ni["[object Set]"]=ni["[object String]"]=ni["[object WeakMap]"]=!1;var ri=function(e){return ti(e)&&ei(e.length)&&!!ni[qr(e)]};var ii=function(e){return function(t){return e(t)}},ai={exports:{}};!function(e,t){var n=$,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(ai,ai.exports);var oi=ai.exports,si=ri,li=ii,ci=oi&&oi.isTypedArray,di=ci?li(ci):si,ui=Ir,hi=Ur,fi=v,gi=Xr,pi=Zr,mi=di,yi=Object.prototype.hasOwnProperty;var bi=function(e,t){var n=fi(e),r=!n&&hi(e),i=!n&&!r&&gi(e),a=!n&&!r&&!i&&mi(e),o=n||r||i||a,s=o?ui(e.length,String):[],l=s.length;for(var c in e)!t&&!yi.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||pi(c,l))||s.push(c);return s},vi=Object.prototype;var $i=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||vi)};var Fi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Si=$i,Bi=Fi,wi=Object.prototype.hasOwnProperty;var Di=X,xi=Kr;var ki=bi,Oi=function(e){if(!Si(e))return Bi(e);var t=[];for(var n in Object(e))wi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ai=function(e){return null!=e&&xi(e.length)&&!Di(e)};var Ei=function(e){return Ai(e)?ki(e):Oi(e)},Hi=Cr,Ci=Tr,_i=Ei;var ji=function(e){return Hi(e,_i,Ci)},zi=Object.prototype.hasOwnProperty;var Mi=function(e,t,n,r,i,a){var o=1&n,s=ji(e),l=s.length;if(l!=ji(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:zi.call(t,d)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){var p=e[d=s[c]],m=t[d];if(r)var y=o?r(m,p,d,t,e,a):r(p,m,d,e,t,a);if(!(void 0===y?p===m||i(p,m,n,r,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Ti=fe(B,"DataView"),Ii=Je,Wi=fe(B,"Promise"),Ni=fe(B,"Set"),Li=fe(B,"WeakMap"),Yi=z,Pi=ee,Ri="[object Map]",Vi="[object Promise]",Ui="[object Set]",Ji="[object WeakMap]",Gi="[object DataView]",Xi=Pi(Ti),Qi=Pi(Ii),Zi=Pi(Wi),Ki=Pi(Ni),qi=Pi(Li),ea=Yi;(Ti&&ea(new Ti(new ArrayBuffer(1)))!=Gi||Ii&&ea(new Ii)!=Ri||Wi&&ea(Wi.resolve())!=Vi||Ni&&ea(new Ni)!=Ui||Li&&ea(new Li)!=Ji)&&(ea=function(e){var t=Yi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Pi(n):"";if(r)switch(r){case Xi:return Gi;case Qi:return Ri;case Zi:return Vi;case Ki:return Ui;case qi:return Ji}return t});var ta=fr,na=Fr,ra=Ar,ia=Mi,aa=ea,oa=v,sa=Xr,la=di,ca="[object Arguments]",da="[object Array]",ua="[object Object]",ha=Object.prototype.hasOwnProperty;var fa=function(e,t,n,r,i,a){var o=oa(e),s=oa(t),l=o?da:aa(e),c=s?da:aa(t),d=(l=l==ca?ua:l)==ua,u=(c=c==ca?ua:c)==ua,h=l==c;if(h&&sa(e)){if(!sa(t))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new ta),o||la(e)?na(e,t,n,r,i,a):ra(e,t,l,n,r,i,a);if(!(1&n)){var f=d&&ha.call(e,"__wrapped__"),g=u&&ha.call(t,"__wrapped__");if(f||g){var p=f?e.value():e,m=g?t.value():t;return a||(a=new ta),i(p,m,n,r,a)}}return!!h&&(a||(a=new ta),ia(e,t,n,r,i,a))},ga=M;var pa=function e(t,n,r,i,a){return t===n||(null==t||null==n||!ga(t)&&!ga(n)?t!=t&&n!=n:fa(t,n,r,i,e,a))},ma=fr,ya=pa;var ba=V;var va=function(e){return e==e&&!ba(e)},$a=va,Fa=Ei;var Sa=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Ba=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ma;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?ya(d,c,3,r,u):h))return!1}}return!0},wa=function(e){for(var t=Fa(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,$a(i)]}return t},Da=Sa;var xa=kt,ka=Ur,Oa=v,Aa=Zr,Ea=Kr,Ha=At;var Ca=function(e,t){return null!=e&&t in Object(e)},_a=function(e,t,n){for(var r=-1,i=(t=xa(t,e)).length,a=!1;++r<i;){var o=Ha(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Ea(i)&&Aa(o,i)&&(Oa(e)||ka(e))};var ja=pa,za=jt,Ma=function(e,t){return null!=e&&_a(e,t,Ca)},Ta=R,Ia=va,Wa=Sa,Na=At;var La=Ct;var Ya=function(e){return function(t){return null==t?void 0:t[e]}},Pa=function(e){return function(t){return La(t,e)}},Ra=R,Va=At;var Ua=function(e){var t=wa(e);return 1==t.length&&t[0][2]?Da(t[0][0],t[0][1]):function(n){return n===e||Ba(n,e,t)}},Ja=function(e,t){return Ta(e)&&Ia(t)?Wa(Na(e),t):function(n){var r=za(n,e);return void 0===r&&r===t?Ma(n,e):ja(t,r,3)}},Ga=function(e){return e},Xa=v,Qa=function(e){return Ra(e)?Ya(Va(e)):Pa(e)};var Za=/\s/;var Ka=function(e){for(var t=e.length;t--&&Za.test(e.charAt(t)););return t},qa=/^\s+/;var eo=function(e){return e?e.slice(0,Ka(e)+1).replace(qa,""):e},to=V,no=W,ro=/^[-+]0x[0-9a-f]+$/i,io=/^0b[01]+$/i,ao=/^0o[0-7]+$/i,oo=parseInt;var so=function(e){if("number"==typeof e)return e;if(no(e))return NaN;if(to(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=to(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=eo(e);var n=io.test(e);return n||ao.test(e)?oo(e.slice(2),n?2:8):ro.test(e)?NaN:+e},lo=1/0;var co=function(e){return e?(e=so(e))===lo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var uo=tr,ho=function(e){return"function"==typeof e?e:null==e?Ga:"object"==typeof e?Xa(e)?Ja(e[0],e[1]):Ua(e):Qa(e)},fo=function(e){var t=co(e),n=t%1;return t==t?n?t-n:t:0},go=Math.max;var po=b((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:fo(n);return i<0&&(i=go(r+i,0)),uo(e,ho(t),i)}));const mo=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,yo=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,bo=t.div`
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
    animation: ${yo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vo=t(bo)`
    animation-delay: -0.45s;
`,$o=t(bo)`
    animation-delay: -0.3s;
`,Fo=t(bo)`
    animation-delay: -0.15s;
`,So={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Bo={D1:{fontFamily:So.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:So.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:So.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:So.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:So.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:So.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:So.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:So.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:So.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:So.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:So.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:So.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:So.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:So.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},wo={D1:{fontFamily:So.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:So.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:So.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:So.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:So.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:So.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:So.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:So.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:So.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Do={collections:{base:Bo,oneservice:{D1:{fontFamily:So.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:So.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:So.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:So.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:So.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:So.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:So.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:So.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:So.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:So.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:So.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:So.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:So.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:So.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:wo},defaultValue:"base"},xo=e=>t=>{const n=t.theme,r=Tt(Do,n[It.textStyleScheme]);return n.options&&n.options.textStyle?Mt(r,e,n.options.textStyle):Mt(r,e)},ko={D1:{fontFamily:xo("D1.fontFamily"),fontSize:xo("D1.fontSize"),fontWeight:xo("D1.fontWeight"),lineHeight:xo("D1.lineHeight"),letterSpacing:xo("D1.letterSpacing")},D2:{fontFamily:xo("D2.fontFamily"),fontSize:xo("D2.fontSize"),fontWeight:xo("D2.fontWeight"),lineHeight:xo("D2.lineHeight"),letterSpacing:xo("D2.letterSpacing")},D3:{fontFamily:xo("D3.fontFamily"),fontSize:xo("D3.fontSize"),fontWeight:xo("D3.fontWeight"),lineHeight:xo("D3.lineHeight"),letterSpacing:xo("D3.letterSpacing")},D4:{fontFamily:xo("D4.fontFamily"),fontSize:xo("D4.fontSize"),fontWeight:xo("D4.fontWeight"),lineHeight:xo("D4.lineHeight"),letterSpacing:xo("D4.letterSpacing")},DBody:{fontFamily:xo("DBody.fontFamily"),fontSize:xo("DBody.fontSize"),fontWeight:xo("DBody.fontWeight"),lineHeight:xo("DBody.lineHeight"),letterSpacing:xo("DBody.letterSpacing")},H1:{fontFamily:xo("H1.fontFamily"),fontSize:xo("H1.fontSize"),fontWeight:xo("H1.fontWeight"),lineHeight:xo("H1.lineHeight"),letterSpacing:xo("H1.letterSpacing")},H2:{fontFamily:xo("H2.fontFamily"),fontSize:xo("H2.fontSize"),fontWeight:xo("H2.fontWeight"),lineHeight:xo("H2.lineHeight"),letterSpacing:xo("H2.letterSpacing")},H3:{fontFamily:xo("H3.fontFamily"),fontSize:xo("H3.fontSize"),fontWeight:xo("H3.fontWeight"),lineHeight:xo("H3.lineHeight"),letterSpacing:xo("H3.letterSpacing")},H4:{fontFamily:xo("H4.fontFamily"),fontSize:xo("H4.fontSize"),fontWeight:xo("H4.fontWeight"),lineHeight:xo("H4.lineHeight"),letterSpacing:xo("H4.letterSpacing")},H5:{fontFamily:xo("H5.fontFamily"),fontSize:xo("H5.fontSize"),fontWeight:xo("H5.fontWeight"),lineHeight:xo("H5.lineHeight"),letterSpacing:xo("H5.letterSpacing")},H6:{fontFamily:xo("H6.fontFamily"),fontSize:xo("H6.fontSize"),fontWeight:xo("H6.fontWeight"),lineHeight:xo("H6.lineHeight"),letterSpacing:xo("H6.letterSpacing")},Body:{fontFamily:xo("Body.fontFamily"),fontSize:xo("Body.fontSize"),fontWeight:xo("Body.fontWeight"),lineHeight:xo("Body.lineHeight"),letterSpacing:xo("Body.letterSpacing")},BodySmall:{fontFamily:xo("BodySmall.fontFamily"),fontSize:xo("BodySmall.fontSize"),fontWeight:xo("BodySmall.fontWeight"),lineHeight:xo("BodySmall.lineHeight"),letterSpacing:xo("BodySmall.letterSpacing")},XSmall:{fontFamily:xo("XSmall.fontFamily"),fontSize:xo("XSmall.fontSize"),fontWeight:xo("XSmall.fontWeight"),lineHeight:xo("XSmall.lineHeight"),letterSpacing:xo("XSmall.letterSpacing")}},Oo=[So.OpenSans,So.PlusJakartaSans],Ao=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Eo=(e,t)=>r=>{var i;const a=ko[e].fontFamily(r),o=ko[e].fontWeight(r),s=Oo.find((e=>Object.values(e).includes(a)));return s?n`
                font-family: ${Ao(s,t)||Ao(s,o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=Ho(t)||o)&&void 0!==i?i:"normal"};
        `},Ho=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Co=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_o=(e,t,r=!1)=>i=>{const a=ko[e],o=a.fontSize(i);return n`
            ${Eo(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},jo=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Co(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Co(r)}
        `;var zo;!function(e){e.D1=t.h1`
        ${e=>n`
                ${_o("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=t.h1`
        ${e=>n`
                ${_o("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=t.h1`
        ${e=>n`
                ${_o("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=t.h1`
        ${e=>n`
                ${_o("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=t.h1`
        ${e=>n`
                ${_o("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=t.h1`
        ${e=>n`
                ${_o("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=t.h2`
        ${e=>n`
                ${_o("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=t.h3`
        ${e=>n`
                ${_o("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=t.h4`
        ${e=>n`
                ${_o("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=t.h5`
        ${e=>n`
                ${_o("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=t.h6`
        ${e=>n`
                ${_o("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=t.p`
        ${e=>n`
                ${_o("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=t.p`
        ${e=>n`
                ${_o("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=t.span`
        ${e=>n`
                ${_o("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${jo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Io(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Io(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(zo||(zo={}));const Mo=t.a`
    ${e=>n`
            ${_o(e.textStyle,e.weight)}
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
`,To=t(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Io=e=>{var{external:t=!1,children:n}=e,r=Vt(e,["external","children"]);return a(Mo,Object.assign({},r,{children:[n,t&&i(To,{})]}))};var Wo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Wo||(Wo={}));const No={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Lt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Lt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Lt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Lt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Lo=e=>t=>{var n;const r=t.theme,i=Tt(No,r[It.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Mt(i,e,r.options.designToken):Mt(i,e)},Yo={InputBoxShadow:Lo("InputBoxShadow"),InputErrorBoxShadow:Lo("InputErrorBoxShadow"),ElevationBoxShadow:Lo("ElevationBoxShadow"),Table:{Header:Lo("Table.Header"),Cell:{Primary:Lo("Table.Cell.Primary"),Secondary:Lo("Table.Cell.Secondary"),Selected:Lo("Table.Cell.Selected"),Hover:Lo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Lo("Button.Danger.BackgroundColor"),Hover:Lo("Button.Danger.Hover"),Primary:Lo("Button.Danger.Primary"),Border:Lo("Button.Danger.Border")}}},Po=t.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return n`
                    background-color: ${Lt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Yo.Button.Danger.Border:Lt.Primary};

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:Lt.Primary};
                `;case"light":return n`
                    background-color: ${Lt.Neutral[8]};
                    border: 1px solid ${Lt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:Lt.Primary};
                `;case"disabled":return n`
                    background-color: ${Lt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Lt.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:Lt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Yo.Button.Danger.Hover:Lt.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?Yo.Button.Danger.BackgroundColor:Lt.Primary};
                    border: 1px solid transparent;

                    ${Rt.mobileL} {
                        width: 100%;
                    }

                    color: ${Lt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${_o("H5","semibold")}

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${_o("H4","semibold")}

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `}
`,Ro=t((({color:e,className:t,size:n=18})=>a(mo,Object.assign({className:t,$size:n,$color:e},{children:[i(bo,{id:"inner1",$size:n-2,$borderWidth:2,$color:e}),i(vo,{id:"inner2",$size:n-2,$borderWidth:2,$color:e}),i($o,{id:"inner3",$size:n-2,$borderWidth:2,$color:e}),i(Fo,{id:"inner4",$size:n-2,$borderWidth:2,$color:e})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Yo.Button.Danger.Primary:Lt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Vo={Default:s.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Vt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return a(Po,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[o&&i(Ro,Object.assign({},d)),i("span",{children:n})]}))})),Small:s.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Vt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return a(Po,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[o&&i(Ro,Object.assign({},d,{size:16})),i("span",{children:n})]}))}))},Uo=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Rt.tablet} {
        display: none;
    }
`,Jo=t.ul`
    display: none;

    ${Rt.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Go=t.ul`
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
`,Xo=t.li`
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
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Rt.mobileL} {
        ${e=>{if(e.$mobile)return n`
                    padding: 0 1rem;
                `}}
    }
`,Qo=t(Vo.Small)`
    ${Rt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,Zo=t.div`
    display: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,Ko=t(zo.BodySmall)`
    margin-bottom: 0.5rem;
`,qo=t.div`
    display: flex;
`,es=t.a`
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
`,ts=({actionButtons:e,mobile:t=!1,onActionButtonClick:n})=>{const r=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},l=(e,t)=>{const n=e?(e=>{const t=po(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(t):t;return n.map(((t,n)=>{let o;switch(t.type){case"download":o=e?(l=t.args,a(Zo,{children:[i(Ko,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(qo,{children:[i(es,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(es,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(Qo,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const r=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${n+1}`;o=i(Qo,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":r}));break}case"component":{const e=t.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return i(Xo,Object.assign({$mobile:e},{children:o}),`action-button-${n+1}`)}))};if(e){const n=(null==e?void 0:e.mobile)||e.desktop,r=n.filter((e=>!!e.uncollapsible)),s=n.filter((e=>!e.uncollapsible));return t?i(o,{children:s.length>0&&i(Go,{children:l(t,s)})}):a(o,{children:[r.length>0&&i(Jo,{children:l(!1,r)}),e.desktop.length>0&&i(Uo,{children:l(t,e.desktop)})]})}return i(o,{})},ns=t.ul`
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

    background: ${Lt.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Yo.ElevationBoxShadow};
`,rs=t.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        border-left: 0.25rem solid ${Lt.Primary};
        display: flex;
        flex-direction: column;
    }
`,is=t(zo.Hyperlink.Small)`
    ${_o("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Lt.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Lt.Primary};
    }
    :hover {
        color: ${Lt.Accent.Light[1]};
    }

    ${Rt.tablet} {
        ${_o("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,as=t.li`
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
`,os=({items:e,mobile:t=!1,onItemClick:n})=>{const r=e=>t=>{t.stopPropagation(),n(t,e)},a=(t=!1)=>e.map(((e,n)=>{const{children:a,options:o}=e,s=Vt(e,["children","options"]),l=t?`link__mobile-${n+1}`:`link__${n+1}`;return i(as,{children:i(is,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:r(e)},o,{children:a}))},n)}));if(e&&e.length>0){return i(t?rs:ns,{children:a(t)})}return i(o,{})},ss=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Rt.tablet} {
        display: none;
    }
`,ls=t.ul`
    display: none;
    list-style: none;

    ${Rt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,cs=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Rt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,ds=t(zo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Lt.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Lt.Neutral[1]};
    }

    ${Rt.tablet} {
        color: ${Lt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Lt.Neutral[1]};
        }
    }
`,us=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,hs=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Lt.Primary};

    ${Rt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Lt.Primary};
    }
`,fs=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,gs=t(Jt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,ps=t(m)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Lt.Neutral[3]};
    :hover {
        color: ${Lt.Neutral[1]};
    }
`,ms=({items:e,selectedId:t,mobile:n=!1,hideNavBranding:r,onItemClick:s})=>{const[u,h]=c(-1),[f,g]=c(!1),p=d(null);l((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},y=(e,t)=>n=>{n.stopPropagation(),h(t),g(!0),s(n,e)},b=(e,t)=>{e.stopPropagation(),s(e,t),g(!1)},v=()=>e.map(((e,o)=>{if("component"===e.itemType){const t=e&&e.children||null;return i("li",{children:t},o)}{const s=(e=>{if(e.id===t)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:l,options:c}=e,d=Vt(e,["children","options"]),h=s?n?"bold":"semibold":"regular",g=n?`link__mobile-${o+1}`:`link__${o+1}`,p=u>=0&&u===o&&f;return a(cs,Object.assign({$hiddenBranding:r},{children:[a(ds,Object.assign({"data-testid":g,weight:h,$selected:s},d,{onClick:y(e,o)},c,{children:[i(us,{children:l}),s&&i(hs,{"data-testid":`${g}-indicator`}),n&&e.subMenu&&i(fs,{children:i(gs,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:i(ps,{})}))})]})),p&&i(os,{items:e.subMenu,mobile:n,onItemClick:b})]}),o)}}));return e&&e.length>0?n?i(ls,Object.assign({ref:p},{children:v()})):i(ss,Object.assign({ref:p,$alignLeft:r},{children:v()})):i(o,{})},ys=u(((e,t)=>{var{items:n,className:r,id:s,selectedId:u,compress:f=!1,fixed:g=!0,resources:p=bs,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:F,onBrandClick:S,masthead:B=!0,layout:w="default"}=e,D=Vt(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[x,k]=c(!1),[O,A]=c(!1),E="stretch"===w,H=d(),{primary:C=bs.primary,secondary:_}=p;h(t,(()=>Object.assign(H.current,{dismissDrawer:()=>{j()}})),[x]),l((()=>(M(),window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M)})),[]);const j=()=>{k(!1),setTimeout((()=>{A(!1)}),550)},z=e=>x&&-1===b.indexOf(e),M=()=>{window.innerWidth<=Yt.tablet&&x&&j()},T=(e,t)=>{S&&(e.preventDefault(),S(t)),z("brand-click")&&j()},I=(e,t)=>{t.onClick?t.onClick(e):$&&(e.preventDefault(),$(t)),!(null==t?void 0:t.subMenu)&&z("item-click")&&j()},W=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):F&&(e.preventDefault(),F(t)),z("item-click")&&j()},N=()=>{k(!0),A(!0)},L=()=>{z("close-button-click")&&j()},Y=()=>{const e=n.mobile||n.desktop;return e&&e.length>0||v&&(()=>{const e=v.mobile||v.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?i(qt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:N,focusHighlight:!1},{children:i(en,{})})):null};return a(Qt,Object.assign({ref:H,$fixed:g,className:r,id:s||"navbar-wrapper","data-testid":D["data-testid"]||"navbar-wrapper"},{children:[B&&i(gn,{}),a(hn.Content,Object.assign({stretch:E},{children:[a(Zt,Object.assign({$compress:f},{children:[!y&&a(tn,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(Jn,{resources:C,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),_&&a(o,{children:[i(nn,{$compress:f}),i(Jn,{resources:_,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(Kt,Object.assign({$hideNavBranding:y},{children:[i(ms,{items:n.desktop,onItemClick:I,selectedId:u,hideNavBranding:y}),i(ts,{actionButtons:v,onActionButtonClick:W}),Y()]}))]})),!m&&i(Yn,Object.assign({show:O,enableOverlayClick:!0,onOverlayClick:L},{children:a(er,Object.assign({show:x,resources:{primary:C,secondary:_},onClose:L,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(ms,{items:n.mobile||n.desktop,onItemClick:I,selectedId:u,mobile:!0}),i(ts,{actionButtons:v,onActionButtonClick:W,mobile:!0})]}))}))]}))]}))})),bs={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},vs=Xt,$s=3.5;export{ys as Navbar,vs as NavbarHeight,$s as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
