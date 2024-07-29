import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as r,keyframes as n}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import f from"react-dom";import{CrossIcon as g}from"@lifesg/react-icons/cross";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{ChevronUpIcon as m}from"@lifesg/react-icons/chevron-up";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function b(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v=Array.isArray,$="object"==typeof y&&y&&y.Object===Object&&y,F=$,B="object"==typeof self&&self&&self.Object===Object&&self,S=F||B||Function("return this")(),w=S.Symbol,D=w,x=Object.prototype,k=x.hasOwnProperty,A=x.toString,E=D?D.toStringTag:void 0;var O=function(e){var t=k.call(e,E),r=e[E];try{e[E]=void 0;var n=!0}catch(e){}var i=A.call(e);return n&&(t?e[E]=r:delete e[E]),i},C=Object.prototype.toString;var H=O,_=function(e){return C.call(e)},j=w?w.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?H(e):_(e)};var M=function(e){return null!=e&&"object"==typeof e},T=z,I=M;var N=function(e){return"symbol"==typeof e||I(e)&&"[object Symbol]"==T(e)},W=v,L=N,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;var P=function(e,t){if(W(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!L(e))||(R.test(e)||!Y.test(e)||null!=t&&e in Object(t))};var V=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U=z,G=V;var X,J=function(e){if(!G(e))return!1;var t=U(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=S["__core-js_shared__"],Z=(X=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"";var K=function(e){return!!Z&&Z in e},q=Function.prototype.toString;var ee=function(e){if(null!=e){try{return q.call(e)}catch(e){}try{return e+""}catch(e){}}return""},te=J,re=K,ne=V,ie=ee,ae=/^\[object .+?Constructor\]$/,oe=Function.prototype,se=Object.prototype,le=oe.toString,ce=se.hasOwnProperty,de=RegExp("^"+le.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ue=function(e){return!(!ne(e)||re(e))&&(te(e)?de:ae).test(ie(e))},he=function(e,t){return null==e?void 0:e[t]};var fe=function(e,t){var r=he(e,t);return ue(r)?r:void 0},ge=fe(Object,"create"),pe=ge;var me=function(){this.__data__=pe?pe(null):{},this.size=0};var ye=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},be=ge,ve=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(be){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ve.call(t,e)?t[e]:void 0},Fe=ge,Be=Object.prototype.hasOwnProperty;var Se=ge;var we=me,De=ye,xe=$e,ke=function(e){var t=this.__data__;return Fe?void 0!==t[e]:Be.call(t,e)},Ae=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Se&&void 0===t?"__lodash_hash_undefined__":t,this};function Ee(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ee.prototype.clear=we,Ee.prototype.delete=De,Ee.prototype.get=xe,Ee.prototype.has=ke,Ee.prototype.set=Ae;var Oe=Ee;var Ce=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t},_e=He;var je=function(e,t){for(var r=e.length;r--;)if(_e(e[r][0],t))return r;return-1},ze=je,Me=Array.prototype.splice;var Te=je;var Ie=je;var Ne=je;var We=Ce,Le=function(e){var t=this.__data__,r=ze(t,e);return!(r<0)&&(r==t.length-1?t.pop():Me.call(t,r,1),--this.size,!0)},Ye=function(e){var t=this.__data__,r=Te(t,e);return r<0?void 0:t[r][1]},Re=function(e){return Ie(this.__data__,e)>-1},Pe=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ve(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ve.prototype.clear=We,Ve.prototype.delete=Le,Ve.prototype.get=Ye,Ve.prototype.has=Re,Ve.prototype.set=Pe;var Ue=Ve,Ge=fe(S,"Map"),Xe=Oe,Je=Ue,Qe=Ge;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var r=e.__data__;return Ze(t)?r["string"==typeof t?"string":"hash"]:r.map},qe=Ke;var et=Ke;var tt=Ke;var rt=Ke;var nt=function(){this.size=0,this.__data__={hash:new Xe,map:new(Qe||Je),string:new Xe}},it=function(e){var t=qe(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return et(this,e).get(e)},ot=function(e){return tt(this,e).has(e)},st=function(e,t){var r=rt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var ct=lt,dt=ct;function ut(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(ut.Cache||dt),r}ut.Cache=dt;var ht=ut;var ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gt=/\\(\\)?/g,pt=function(e){var t=ht(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ft,(function(e,r,n,i){t.push(n?i.replace(gt,"$1"):r||e)})),t}));var mt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},yt=v,bt=N,vt=w?w.prototype:void 0,$t=vt?vt.toString:void 0;var Ft=function e(t){if("string"==typeof t)return t;if(yt(t))return mt(t,e)+"";if(bt(t))return $t?$t.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Bt=Ft;var St=v,wt=P,Dt=pt,xt=function(e){return null==e?"":Bt(e)};var kt=function(e,t){return St(e)?e:wt(e,t)?[e]:Dt(xt(e))},At=N;var Et=function(e){if("string"==typeof e||At(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ot=kt,Ct=Et;var Ht=function(e,t){for(var r=0,n=(t=Ot(t,e)).length;null!=e&&r<n;)e=e[Ct(t[r++])];return r&&r==n?e:void 0},_t=Ht;var jt=function(e,t,r){var n=null==e?void 0:_t(e,t);return void 0===n?r:n},zt=b(jt);const Mt=(e,t,r)=>t?zt(r,t)||zt(e,t):r||e,Tt=(e,t)=>{const r=t||e.defaultValue;return zt(e.collections,r)};var It;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(It||(It={}));const Nt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Wt=e=>t=>{const r=t.theme,n=Tt(Nt,r[It.colorScheme]);return r.options&&r.options.color?Mt(n,e,r.options.color):Mt(n,e)},Lt={Brand:{1:Wt("Brand.1"),2:Wt("Brand.2"),3:Wt("Brand.3"),4:Wt("Brand.4"),5:Wt("Brand.5"),6:Wt("Brand.6")},Primary:Wt("Primary"),PrimaryDark:Wt("PrimaryDark"),Secondary:Wt("Secondary"),Accent:{Light:{1:Wt("Accent.Light.1"),2:Wt("Accent.Light.2"),3:Wt("Accent.Light.3"),4:Wt("Accent.Light.4"),5:Wt("Accent.Light.5"),6:Wt("Accent.Light.6")},Dark:{1:Wt("Accent.Dark.1"),2:Wt("Accent.Dark.2"),3:Wt("Accent.Dark.3")}},Neutral:{1:Wt("Neutral.1"),2:Wt("Neutral.2"),3:Wt("Neutral.3"),4:Wt("Neutral.4"),5:Wt("Neutral.5"),6:Wt("Neutral.6"),7:Wt("Neutral.7"),8:Wt("Neutral.8")},Validation:{Green:{Text:Wt("Validation.Green.Text"),Icon:Wt("Validation.Green.Icon"),Border:Wt("Validation.Green.Border"),Background:Wt("Validation.Green.Background")},Orange:{Text:Wt("Validation.Orange.Text"),Icon:Wt("Validation.Orange.Icon"),Border:Wt("Validation.Orange.Border"),Background:Wt("Validation.Orange.Background"),Badge:Wt("Validation.Orange.Badge")},Red:{Text:Wt("Validation.Red.Text"),Icon:Wt("Validation.Red.Icon"),Border:Wt("Validation.Red.Border"),Background:Wt("Validation.Red.Background")},Blue:{Text:Wt("Validation.Blue.Text"),Icon:Wt("Validation.Blue.Icon"),Border:Wt("Validation.Blue.Border"),Background:Wt("Validation.Blue.Background")}},Shadow:{Accent:Wt("Shadow.Accent"),Red:Wt("Shadow.Red"),Elevation:Wt("Shadow.Elevation")}},Yt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Rt=e=>Object.keys(Yt).reduce(((t,r)=>{const n=Yt[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Pt=Rt("max-width");Rt("min-width");function Vt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const Ut=t.button`
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

        ${({$highlight:e})=>e&&r`
                background-color: ${Lt.Neutral[7]};
            `}
    }
`,Gt=s.forwardRef(((e,t)=>{var{children:r,focusHighlight:n=!0,focusOutline:a="none",type:o="button"}=e,s=Vt(e,["children","focusHighlight","focusOutline","type"]);return i(Ut,Object.assign({ref:t,$outline:a,$highlight:n,type:o},s,{children:r}))})),Xt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Jt={notCompress:6,compress:4},Qt=t.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Zt=t.nav`
    height: ${e=>e.$compress?Jt.compress:Jt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Xt};

    ${Pt.tablet} {
        height: ${3.5}rem;
    }
`,Kt=t.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Pt.tablet} {
        margin-left: 0rem;
    }
`,qt=t(Gt)`
    display: none;

    ${Pt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,er=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Lt.Neutral[1]};
`,tr=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Pt.tablet} {
        height: 1.5rem;
    }

    ${Pt.mobileS} {
        height: 1.25rem;
    }
`,rr=t.div`
    display: flex;
    background-color: ${Lt.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Pt.tablet} {
        margin: 0 1rem;
    }

    ${Pt.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,nr=t.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return r`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Pt.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Pt.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,ir=s.forwardRef(((e,t)=>{const{mobileCols:r,tabletCols:n,desktopCols:a}=e,o=Vt(e,["mobileCols","tabletCols","desktopCols"]);return i(nr,Object.assign({ref:t},(()=>{const e=n||r,t=r,i=ar(a||n||r),o=ar(e),s=ar(t);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),ar=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},or=s.forwardRef(((e,t)=>{const{children:r,"data-testid":n="container",type:a="flex",stretch:o=!1}=e,s=Vt(e,["children","data-testid","type","stretch"]);return i(sr,Object.assign({ref:t,"data-testid":n,$type:a,$stretch:o},s,{children:r}))})),sr=t.div`
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

                ${Pt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Pt.tablet} {
        max-width: 720px;
    }
    ${Pt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return r`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Pt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Pt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return r`
                    display: flex;
                    flex-direction: column;
                `;default:return r`
                    display: flex;
                `}}}
`,lr=s.forwardRef(((e,t)=>{const{children:r,"data-testid":n="section",stretch:a=!1}=e,o=Vt(e,["children","data-testid","stretch"]);return i(cr,Object.assign({ref:t,"data-testid":n,$stretch:a},o,{children:r}))})),cr=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?r`
                ${Pt.tablet} {
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
`,dr=s.forwardRef(((e,t)=>{const{children:r,"data-testid":n="content",className:a,type:o="flex",stretch:s=!1}=e,l=Vt(e,["children","data-testid","className","type","stretch"]);return i(lr,Object.assign({ref:t,"data-testid":n,className:a,stretch:s},l,{children:i(or,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),ur={Section:lr,Container:or,Content:dr,ColDiv:ir},hr=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Pt.mobileL} {
        padding: 0;
    }
`,fr=()=>{l((()=>{e()||t()}),[]);const e=()=>document.getElementById(gr),t=()=>{if(!document.getElementById(gr)){const e=document.createElement("script");e.id=gr,e.type="module",e.src=pr,document.head.appendChild(e)}};return i(hr,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},gr="lifesg-ds-masthead-script",pr="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var mr={exports:{}};mr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var yr,br,vr=b(mr.exports),$r={exports:{}},Fr=b($r.exports=(yr={year:0,month:1,day:2,hour:3,minute:4,second:5},br={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=br[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),br[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=yr[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Br={exports:{}};Br.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var F="$isDayjsObject",B=function(e){return e instanceof x||!(!e||!e[F])},S=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},w=function(e,t){if(B(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},D=b;D.l=S,D.i=B,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,d=D.p(e),f=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(n?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=D.p(d),p=function(e){var t=w(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=this,m=D.p(h),y=w(n),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return D.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case l:g=(v-b)/6048e5;break;case s:g=(v-b)/864e5;break;case o:g=v/r;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return f?g:D.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return w.prototype=k,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,x,w),e.$i=!0),w},w.locale=S,w.isDayjs=B,w.unix=function(e){return w(1e3*e)},w.en=$[v],w.Ls=$,w.p={},w}();var Sr=b(Br.exports),wr={exports:{}};wr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Dr=b(wr.exports),xr={exports:{}};xr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var kr=b(xr.exports),Ar={exports:{}};Ar.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Er,Or=b(Ar.exports);Sr.extend(Dr),Sr.extend(kr),Sr.extend(Or),Sr.extend(vr),Sr.extend(Fr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Sr(t).startOf("week");return Cr(r).map((e=>Hr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Hr(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Sr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Sr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Sr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Sr(n):void 0,i?Sr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Er||(Er={}));const Cr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Hr=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},_r=[1,3,5,7,8,10,12],jr=[4,6,9,11];var zr,Mr,Tr,Ir;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":_r.includes(a)?Math.min(i,31).toString():jr.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Sr(e,r);return Sr(t,r).diff(n,"minute")},e.toDayjs=e=>e?Sr(e):Sr(),e.addMinutesToTime=(e,t,r="HH:mm")=>Sr(e,r).add(t,"minutes").format(r)}(zr||(zr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Sr(e).isBefore(n,"day"))||!(!i||!Sr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Sr(e).isValid())return e}return""}}(Mr||(Mr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Tr||(Tr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ir||(Ir={}));const Nr=t.div`
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
`,Wr=t.div`
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
`,Lr=({show:e=!1,rootId:t,onOverlayClick:r,children:n,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[m,y]=c(null),[b,v]=c(),[$]=c((()=>Tr.generate())),F=d(),B=d(null),S=n&&s.cloneElement(n,{ref:B}),w=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";l((()=>(A(),y(x()),()=>{H(),O().length<1&&E("remove")})),[]),l((()=>{if(e){const e=k();D(e),C();const t=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(t)}{H();const e=setTimeout((()=>{O().length<1&&E("remove")}),200);return()=>clearTimeout(e)}}),[e]);const D=e=>{F.current=e,v(e)},x=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>O().length>0,A=()=>{if(!document.getElementById(Yr)){const e=document.createElement("style");e.id=Yr;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Rr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Rr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},E=e=>{const t=document.body.classList.contains(Rr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Rr):document.body.classList.add(Rr)},O=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},C=()=>{const e=O();document.body.dataset.lifesgDsOverlayOrder=[...e,$].join(",")},H=()=>{const e=O();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==$)).join(",")},_=e=>{var t;const n=null===(t=B.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return m?f.createPortal(i(Nr,Object.assign({id:w,"data-testid":w,$show:e,zIndex:g,$stacked:b},{children:n&&i(Wr,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:a||(b?.5:.8),$backgroundBlur:o,$disableTransition:u,$enableOverlayClick:h,onClick:_},{children:S}))})),m):null},Yr="lifesg-ds-overlay-stylesheet",Rr="lifesg-ds-overlay-open",Pr=t.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Xt};
        object-fit: contain;
    }
`;const Vr=({src:e,alt:t,className:r,"data-testid":n})=>i("img",{src:e,alt:t||"",className:r,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Ur=({resources:e,onClick:t,"data-id":r,"data-testid":n="navbar-brand",type:a})=>i(Pr,Object.assign({role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{t&&t(e,a)},tabIndex:0,"data-id":r,"data-testid":n,$type:a},{children:i(Vr,{src:e.logoSrc,alt:e.brandName+"-app-logo"})})),Gr=t.div`
    display: none;

    ${Pt.tablet} {
        display: flex;
    }
`,Xr=t.div`
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

	${Pt.tablet} {
        width: 75%;
    }

    ${Pt.mobileL} {
        width: 100%;
    }
`,Jr=t.div`
    display: flex;
    flex-direction: column;
`,Qr=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,Zr=t(g)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,Kr=t(Gt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Lt.Neutral[1]};

    :active,
    :focus {
        color: ${Lt.Primary};
    }
`,qr=s.forwardRef(((e,t)=>{const{show:r,resources:n,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=e,[f,g]=c(0),{primary:p,secondary:m}=n;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return i(Gr,Object.assign({ref:t,"data-testid":"drawer"},{children:i(Xr,Object.assign({$show:r,$viewHeight:f},{children:a(Jr,{children:[a(Qr,{children:[i(tr,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(Ur,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(rr,{}),i(Ur,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(Kr,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(Zr,{})}))]}),s]})}))}))}));var en=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},tn=Ue;var rn=Ue,nn=Ge,an=ct;var on=Ue,sn=function(){this.__data__=new tn,this.size=0},ln=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},cn=function(e){return this.__data__.get(e)},dn=function(e){return this.__data__.has(e)},un=function(e,t){var r=this.__data__;if(r instanceof rn){var n=r.__data__;if(!nn||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new an(n)}return r.set(e,t),this.size=r.size,this};function hn(e){var t=this.__data__=new on(e);this.size=t.size}hn.prototype.clear=sn,hn.prototype.delete=ln,hn.prototype.get=cn,hn.prototype.has=dn,hn.prototype.set=un;var fn=hn;var gn=ct,pn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},mn=function(e){return this.__data__.has(e)};function yn(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new gn;++t<r;)this.add(e[t])}yn.prototype.add=yn.prototype.push=pn,yn.prototype.has=mn;var bn=yn,vn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},$n=function(e,t){return e.has(t)};var Fn=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&r?new bn:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],p=t[u];if(n)var m=o?n(p,g,u,t,e,a):n(g,p,u,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!vn(t,(function(e,t){if(!$n(f,t)&&(g===e||i(g,e,r,n,a)))return f.push(t)}))){h=!1;break}}else if(g!==p&&!i(g,p,r,n,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Bn=S.Uint8Array,Sn=He,wn=Fn,Dn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},xn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},kn=w?w.prototype:void 0,An=kn?kn.valueOf:void 0;var En=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Bn(e),new Bn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Sn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Dn;case"[object Set]":var l=1&n;if(s||(s=xn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=wn(s(e),s(t),n,i,a,o);return o.delete(e),d;case"[object Symbol]":if(An)return An.call(e)==An.call(t)}return!1};var On=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Cn=v;var Hn=function(e,t,r){var n=t(e);return Cn(e)?n:On(n,r(e))};var _n=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},jn=function(){return[]},zn=Object.prototype.propertyIsEnumerable,Mn=Object.getOwnPropertySymbols,Tn=Mn?function(e){return null==e?[]:(e=Object(e),_n(Mn(e),(function(t){return zn.call(e,t)})))}:jn;var In=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Nn=z,Wn=M;var Ln=function(e){return Wn(e)&&"[object Arguments]"==Nn(e)},Yn=M,Rn=Object.prototype,Pn=Rn.hasOwnProperty,Vn=Rn.propertyIsEnumerable,Un=Ln(function(){return arguments}())?Ln:function(e){return Yn(e)&&Pn.call(e,"callee")&&!Vn.call(e,"callee")},Gn={exports:{}};var Xn=function(){return!1};!function(e,t){var r=S,n=Xn,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Gn,Gn.exports);var Jn=Gn.exports,Qn=/^(?:0|[1-9]\d*)$/;var Zn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Qn.test(e))&&e>-1&&e%1==0&&e<t};var Kn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},qn=z,ei=Kn,ti=M,ri={};ri["[object Float32Array]"]=ri["[object Float64Array]"]=ri["[object Int8Array]"]=ri["[object Int16Array]"]=ri["[object Int32Array]"]=ri["[object Uint8Array]"]=ri["[object Uint8ClampedArray]"]=ri["[object Uint16Array]"]=ri["[object Uint32Array]"]=!0,ri["[object Arguments]"]=ri["[object Array]"]=ri["[object ArrayBuffer]"]=ri["[object Boolean]"]=ri["[object DataView]"]=ri["[object Date]"]=ri["[object Error]"]=ri["[object Function]"]=ri["[object Map]"]=ri["[object Number]"]=ri["[object Object]"]=ri["[object RegExp]"]=ri["[object Set]"]=ri["[object String]"]=ri["[object WeakMap]"]=!1;var ni=function(e){return ti(e)&&ei(e.length)&&!!ri[qn(e)]};var ii=function(e){return function(t){return e(t)}},ai={exports:{}};!function(e,t){var r=$,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(ai,ai.exports);var oi=ai.exports,si=ni,li=ii,ci=oi&&oi.isTypedArray,di=ci?li(ci):si,ui=In,hi=Un,fi=v,gi=Jn,pi=Zn,mi=di,yi=Object.prototype.hasOwnProperty;var bi=function(e,t){var r=fi(e),n=!r&&hi(e),i=!r&&!n&&gi(e),a=!r&&!n&&!i&&mi(e),o=r||n||i||a,s=o?ui(e.length,String):[],l=s.length;for(var c in e)!t&&!yi.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||pi(c,l))||s.push(c);return s},vi=Object.prototype;var $i=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||vi)};var Fi=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Bi=$i,Si=Fi,wi=Object.prototype.hasOwnProperty;var Di=J,xi=Kn;var ki=bi,Ai=function(e){if(!Bi(e))return Si(e);var t=[];for(var r in Object(e))wi.call(e,r)&&"constructor"!=r&&t.push(r);return t},Ei=function(e){return null!=e&&xi(e.length)&&!Di(e)};var Oi=function(e){return Ei(e)?ki(e):Ai(e)},Ci=Hn,Hi=Tn,_i=Oi;var ji=function(e){return Ci(e,_i,Hi)},zi=Object.prototype.hasOwnProperty;var Mi=function(e,t,r,n,i,a){var o=1&r,s=ji(e),l=s.length;if(l!=ji(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:zi.call(t,d)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){var p=e[d=s[c]],m=t[d];if(n)var y=o?n(m,p,d,t,e,a):n(p,m,d,e,t,a);if(!(void 0===y?p===m||i(p,m,r,n,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Ti=fe(S,"DataView"),Ii=Ge,Ni=fe(S,"Promise"),Wi=fe(S,"Set"),Li=fe(S,"WeakMap"),Yi=z,Ri=ee,Pi="[object Map]",Vi="[object Promise]",Ui="[object Set]",Gi="[object WeakMap]",Xi="[object DataView]",Ji=Ri(Ti),Qi=Ri(Ii),Zi=Ri(Ni),Ki=Ri(Wi),qi=Ri(Li),ea=Yi;(Ti&&ea(new Ti(new ArrayBuffer(1)))!=Xi||Ii&&ea(new Ii)!=Pi||Ni&&ea(Ni.resolve())!=Vi||Wi&&ea(new Wi)!=Ui||Li&&ea(new Li)!=Gi)&&(ea=function(e){var t=Yi(e),r="[object Object]"==t?e.constructor:void 0,n=r?Ri(r):"";if(n)switch(n){case Ji:return Xi;case Qi:return Pi;case Zi:return Vi;case Ki:return Ui;case qi:return Gi}return t});var ta=fn,ra=Fn,na=En,ia=Mi,aa=ea,oa=v,sa=Jn,la=di,ca="[object Arguments]",da="[object Array]",ua="[object Object]",ha=Object.prototype.hasOwnProperty;var fa=function(e,t,r,n,i,a){var o=oa(e),s=oa(t),l=o?da:aa(e),c=s?da:aa(t),d=(l=l==ca?ua:l)==ua,u=(c=c==ca?ua:c)==ua,h=l==c;if(h&&sa(e)){if(!sa(t))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new ta),o||la(e)?ra(e,t,r,n,i,a):na(e,t,l,r,n,i,a);if(!(1&r)){var f=d&&ha.call(e,"__wrapped__"),g=u&&ha.call(t,"__wrapped__");if(f||g){var p=f?e.value():e,m=g?t.value():t;return a||(a=new ta),i(p,m,r,n,a)}}return!!h&&(a||(a=new ta),ia(e,t,r,n,i,a))},ga=M;var pa=function e(t,r,n,i,a){return t===r||(null==t||null==r||!ga(t)&&!ga(r)?t!=t&&r!=r:fa(t,r,n,i,e,a))},ma=fn,ya=pa;var ba=V;var va=function(e){return e==e&&!ba(e)},$a=va,Fa=Oi;var Ba=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Sa=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=r[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ma;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?ya(d,c,3,n,u):h))return!1}}return!0},wa=function(e){for(var t=Fa(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,$a(i)]}return t},Da=Ba;var xa=kt,ka=Un,Aa=v,Ea=Zn,Oa=Kn,Ca=Et;var Ha=function(e,t){return null!=e&&t in Object(e)},_a=function(e,t,r){for(var n=-1,i=(t=xa(t,e)).length,a=!1;++n<i;){var o=Ca(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Oa(i)&&Ea(o,i)&&(Aa(e)||ka(e))};var ja=pa,za=jt,Ma=function(e,t){return null!=e&&_a(e,t,Ha)},Ta=P,Ia=va,Na=Ba,Wa=Et;var La=Ht;var Ya=function(e){return function(t){return null==t?void 0:t[e]}},Ra=function(e){return function(t){return La(t,e)}},Pa=P,Va=Et;var Ua=function(e){var t=wa(e);return 1==t.length&&t[0][2]?Da(t[0][0],t[0][1]):function(r){return r===e||Sa(r,e,t)}},Ga=function(e,t){return Ta(e)&&Ia(t)?Na(Wa(e),t):function(r){var n=za(r,e);return void 0===n&&n===t?Ma(r,e):ja(t,n,3)}},Xa=function(e){return e},Ja=v,Qa=function(e){return Pa(e)?Ya(Va(e)):Ra(e)};var Za=/\s/;var Ka=function(e){for(var t=e.length;t--&&Za.test(e.charAt(t)););return t},qa=/^\s+/;var eo=function(e){return e?e.slice(0,Ka(e)+1).replace(qa,""):e},to=V,ro=N,no=/^[-+]0x[0-9a-f]+$/i,io=/^0b[01]+$/i,ao=/^0o[0-7]+$/i,oo=parseInt;var so=function(e){if("number"==typeof e)return e;if(ro(e))return NaN;if(to(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=to(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=eo(e);var r=io.test(e);return r||ao.test(e)?oo(e.slice(2),r?2:8):no.test(e)?NaN:+e},lo=1/0;var co=function(e){return e?(e=so(e))===lo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var uo=en,ho=function(e){return"function"==typeof e?e:null==e?Xa:"object"==typeof e?Ja(e)?Ga(e[0],e[1]):Ua(e):Qa(e)},fo=function(e){var t=co(e),r=t%1;return t==t?r?t-r:t:0},go=Math.max;var po=b((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:fo(r);return i<0&&(i=go(n+i,0)),uo(e,ho(t),i)}));const mo=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,yo=n`
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
`,Bo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},So={collections:{base:{D1:{fontFamily:Bo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Bo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Bo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Bo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Bo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Bo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Bo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Bo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Bo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Bo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Bo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Bo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Bo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Bo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Bo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Bo.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Bo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Bo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Bo.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Bo.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Bo.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Bo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Bo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Bo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Bo.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Bo.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Bo.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Bo.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},wo=e=>t=>{const r=t.theme,n=Tt(So,r[It.textStyleScheme]);return r.options&&r.options.textStyle?Mt(n,e,r.options.textStyle):Mt(n,e)},Do={D1:{fontFamily:wo("D1.fontFamily"),fontSize:wo("D1.fontSize"),fontWeight:wo("D1.fontWeight"),lineHeight:wo("D1.lineHeight"),letterSpacing:wo("D1.letterSpacing")},D2:{fontFamily:wo("D2.fontFamily"),fontSize:wo("D2.fontSize"),fontWeight:wo("D2.fontWeight"),lineHeight:wo("D2.lineHeight"),letterSpacing:wo("D2.letterSpacing")},D3:{fontFamily:wo("D3.fontFamily"),fontSize:wo("D3.fontSize"),fontWeight:wo("D3.fontWeight"),lineHeight:wo("D3.lineHeight"),letterSpacing:wo("D3.letterSpacing")},D4:{fontFamily:wo("D4.fontFamily"),fontSize:wo("D4.fontSize"),fontWeight:wo("D4.fontWeight"),lineHeight:wo("D4.lineHeight"),letterSpacing:wo("D4.letterSpacing")},DBody:{fontFamily:wo("DBody.fontFamily"),fontSize:wo("DBody.fontSize"),fontWeight:wo("DBody.fontWeight"),lineHeight:wo("DBody.lineHeight"),letterSpacing:wo("DBody.letterSpacing")},H1:{fontFamily:wo("H1.fontFamily"),fontSize:wo("H1.fontSize"),fontWeight:wo("H1.fontWeight"),lineHeight:wo("H1.lineHeight"),letterSpacing:wo("H1.letterSpacing")},H2:{fontFamily:wo("H2.fontFamily"),fontSize:wo("H2.fontSize"),fontWeight:wo("H2.fontWeight"),lineHeight:wo("H2.lineHeight"),letterSpacing:wo("H2.letterSpacing")},H3:{fontFamily:wo("H3.fontFamily"),fontSize:wo("H3.fontSize"),fontWeight:wo("H3.fontWeight"),lineHeight:wo("H3.lineHeight"),letterSpacing:wo("H3.letterSpacing")},H4:{fontFamily:wo("H4.fontFamily"),fontSize:wo("H4.fontSize"),fontWeight:wo("H4.fontWeight"),lineHeight:wo("H4.lineHeight"),letterSpacing:wo("H4.letterSpacing")},H5:{fontFamily:wo("H5.fontFamily"),fontSize:wo("H5.fontSize"),fontWeight:wo("H5.fontWeight"),lineHeight:wo("H5.lineHeight"),letterSpacing:wo("H5.letterSpacing")},H6:{fontFamily:wo("H6.fontFamily"),fontSize:wo("H6.fontSize"),fontWeight:wo("H6.fontWeight"),lineHeight:wo("H6.lineHeight"),letterSpacing:wo("H6.letterSpacing")},Body:{fontFamily:wo("Body.fontFamily"),fontSize:wo("Body.fontSize"),fontWeight:wo("Body.fontWeight"),lineHeight:wo("Body.lineHeight"),letterSpacing:wo("Body.letterSpacing")},BodySmall:{fontFamily:wo("BodySmall.fontFamily"),fontSize:wo("BodySmall.fontSize"),fontWeight:wo("BodySmall.fontWeight"),lineHeight:wo("BodySmall.lineHeight"),letterSpacing:wo("BodySmall.letterSpacing")},XSmall:{fontFamily:wo("XSmall.fontFamily"),fontSize:wo("XSmall.fontSize"),fontWeight:wo("XSmall.fontWeight"),lineHeight:wo("XSmall.lineHeight"),letterSpacing:wo("XSmall.letterSpacing")}},xo=e=>{switch(e){case 700:case"bold":return Bo.Bold;case 600:case"semibold":return Bo.Semibold;case 300:case"light":return Bo.Light;case 400:case"regular":return Bo.Regular;default:return""}},ko=(e,t)=>n=>{var i;const a=Do[e].fontFamily(n),o=Do[e].fontWeight(n);return Object.values(Bo).includes(a)?r`
                font-family: ${xo(t)||xo(o)||a};
                font-weight: normal !important;
            `:r`
            font-family: ${a};
            font-weight: ${null!==(i=Ao(t)||o)&&void 0!==i?i:"normal"};
        `},Ao=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Eo=e=>{if(e>0)return r`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Oo=(e,t,n=!1)=>i=>{const a=Do[e],o=a.fontSize(i);return r`
            ${ko(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${r`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Co=(e=!1,t=!1,n=void 0)=>t?r`
            display: block;
            ${Eo(n)}
        `:e?r`
            display: inline;
        `:r`
            display: block;
            ${Eo(n)}
        `;var Ho;!function(e){e.D1=t.h1`
        ${e=>r`
                ${Oo("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=t.h1`
        ${e=>r`
                ${Oo("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=t.h1`
        ${e=>r`
                ${Oo("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=t.h1`
        ${e=>r`
                ${Oo("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=t.h1`
        ${e=>r`
                ${Oo("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=t.h1`
        ${e=>r`
                ${Oo("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=t.h2`
        ${e=>r`
                ${Oo("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=t.h3`
        ${e=>r`
                ${Oo("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=t.h4`
        ${e=>r`
                ${Oo("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=t.h5`
        ${e=>r`
                ${Oo("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=t.h6`
        ${e=>r`
                ${Oo("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=t.p`
        ${e=>r`
                ${Oo("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=t.p`
        ${e=>r`
                ${Oo("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=t.span`
        ${e=>r`
                ${Oo("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>zo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ho||(Ho={}));const _o=t.a`
    ${e=>r`
            ${Oo(e.textStyle,e.weight)}
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
`,jo=t(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zo=e=>{var{external:t=!1,children:r}=e,n=Vt(e,["external","children"]);return a(_o,Object.assign({},n,{children:[r,t&&i(jo,{})]}))};var Mo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Mo||(Mo={}));const To={collections:{base:{InputBoxShadow:r`
        inset 0 0 4px 0px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 4px 0px ${Lt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Lt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:r`
        inset 0 0 3px 0px ${Lt.Shadow.Accent}
    `,InputErrorBoxShadow:r`
        inset 0 0 3px 0px ${Lt.Shadow.Red}
    `,ElevationBoxShadow:r`
      0px 2px 8px ${Lt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Io=e=>t=>{var r;const n=t.theme,i=Tt(To,n[It.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Mt(i,e,n.options.designToken):Mt(i,e)},No={InputBoxShadow:Io("InputBoxShadow"),InputErrorBoxShadow:Io("InputErrorBoxShadow"),ElevationBoxShadow:Io("ElevationBoxShadow"),Table:{Header:Io("Table.Header"),Cell:{Primary:Io("Table.Cell.Primary"),Secondary:Io("Table.Cell.Secondary"),Selected:Io("Table.Cell.Selected"),Hover:Io("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Io("Button.Danger.BackgroundColor"),Hover:Io("Button.Danger.Hover"),Primary:Io("Button.Danger.Primary"),Border:Io("Button.Danger.Border")}}},Wo=t.button`
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
                    background-color: ${Lt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?No.Button.Danger.Border:Lt.Primary};

                    color: ${e.$buttonIsDanger?No.Button.Danger.Primary:Lt.Primary};
                `;case"light":return r`
                    background-color: ${Lt.Neutral[8]};
                    border: 1px solid ${Lt.Neutral[5]};

                    color: ${e.$buttonIsDanger?No.Button.Danger.Primary:Lt.Primary};
                `;case"disabled":return r`
                    background-color: ${Lt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Lt.Neutral[3]};
                `;case"link":return r`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?No.Button.Danger.Primary:Lt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?No.Button.Danger.Hover:Lt.Secondary};
                    }
                `;default:return r`
                    background-color: ${e.$buttonIsDanger?No.Button.Danger.BackgroundColor:Lt.Primary};
                    border: 1px solid transparent;

                    ${Pt.mobileL} {
                        width: 100%;
                    }

                    color: ${Lt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?r`
                    height: 2.5rem;
                    ${Oo("H5","semibold")}

                    ${Pt.mobileS} {
                        height: auto;
                    }
                `:r`
                    height: 3rem;
                    ${Oo("H4","semibold")}

                    ${Pt.mobileS} {
                        height: auto;
                    }
                `}
`,Lo=t((({color:e,className:t,size:r=18})=>a(mo,Object.assign({className:t,$size:r,$color:e},{children:[i(bo,{id:"inner1",$size:r-2,$borderWidth:2,$color:e}),i(vo,{id:"inner2",$size:r-2,$borderWidth:2,$color:e}),i($o,{id:"inner3",$size:r-2,$borderWidth:2,$color:e}),i(Fo,{id:"inner4",$size:r-2,$borderWidth:2,$color:e})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?No.Button.Danger.Primary:Lt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Lt.Neutral[3](e);break;default:t=Lt.Neutral[8](e)}return r`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Yo={Default:s.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Vt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return a(Wo,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Lo,Object.assign({},d)),i("span",{children:r})]}))})),Small:s.forwardRef(((e,t)=>{const{children:r,disabled:n=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Vt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return a(Wo,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:n},d,c,{children:[o&&i(Lo,Object.assign({},d,{size:16})),i("span",{children:r})]}))}))},Ro=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Pt.tablet} {
        display: none;
    }
`,Po=t.ul`
    display: none;

    ${Pt.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Vo=t.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Pt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,Uo=t.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Pt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Pt.mobileL} {
        ${e=>{if(e.$mobile)return r`
                    padding: 0 1rem;
                `}}
    }
`,Go=t(Yo.Small)`
    ${Pt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,Xo=t.div`
    display: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,Jo=t(Ho.BodySmall)`
    margin-bottom: 0.5rem;
`,Qo=t.div`
    display: flex;
`,Zo=t.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Pt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Pt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,Ko=({actionButtons:e,mobile:t=!1,onActionButtonClick:r})=>{const n=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},l=(e,t)=>{const r=e?(e=>{const t=po(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(t):t;return r.map(((t,r)=>{let o;switch(t.type){case"download":o=e?(l=t.args,a(Xo,{children:[i(Jo,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(Qo,{children:[i(Zo,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(Zo,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(Go,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${r+1}`;o=i(Go,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":n}));break}case"component":{const e=t.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return i(Uo,Object.assign({$mobile:e},{children:o}),`action-button-${r+1}`)}))};if(e){const r=(null==e?void 0:e.mobile)||e.desktop,n=r.filter((e=>!!e.uncollapsible)),s=r.filter((e=>!e.uncollapsible));return t?i(o,{children:s.length>0&&i(Vo,{children:l(t,s)})}):a(o,{children:[n.length>0&&i(Po,{children:l(!1,n)}),e.desktop.length>0&&i(Ro,{children:l(t,e.desktop)})]})}return i(o,{})},qo=t.ul`
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
    box-shadow: ${No.ElevationBoxShadow};
`,es=t.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        border-left: 0.25rem solid ${Lt.Primary};
        display: flex;
        flex-direction: column;
    }
`,ts=t(Ho.Hyperlink.Small)`
    ${Oo("H6","regular")};
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

    ${Pt.tablet} {
        ${Oo("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,rs=t.li`
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

    ${Pt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ns=({items:e,mobile:t=!1,onItemClick:r})=>{const n=e=>t=>{t.stopPropagation(),r(t,e)},a=(t=!1)=>e.map(((e,r)=>{const{children:a,options:o}=e,s=Vt(e,["children","options"]),l=t?`link__mobile-${r+1}`:`link__${r+1}`;return i(rs,{children:i(ts,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:n(e)},o,{children:a}))},r)}));if(e&&e.length>0){return i(t?es:qo,{children:a(t)})}return i(o,{})},is=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Pt.tablet} {
        display: none;
    }
`,as=t.ul`
    display: none;
    list-style: none;

    ${Pt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,os=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Pt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,ss=t(Ho.Hyperlink.Small)`
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

    ${Pt.tablet} {
        color: ${Lt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Lt.Neutral[1]};
        }
    }
`,ls=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,cs=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Lt.Primary};

    ${Pt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Lt.Primary};
    }
`,ds=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,us=t(Gt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,hs=t(m)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Lt.Neutral[3]};
    :hover {
        color: ${Lt.Neutral[1]};
    }
`,fs=({items:e,selectedId:t,mobile:r=!1,hideNavBranding:n,onItemClick:s})=>{const[u,h]=c(-1),[f,g]=c(!1),p=d(null);l((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},y=(e,t)=>r=>{r.stopPropagation(),h(t),g(!0),s(r,e)},b=(e,t)=>{e.stopPropagation(),s(e,t),g(!1)},v=()=>e.map(((e,o)=>{if("component"===e.itemType){const t=e&&e.children||null;return i("li",{children:t},o)}{const s=(e=>{if(e.id===t)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:l,options:c}=e,d=Vt(e,["children","options"]),h=s?r?"bold":"semibold":"regular",g=r?`link__mobile-${o+1}`:`link__${o+1}`,p=u>=0&&u===o&&f;return a(os,Object.assign({$hiddenBranding:n},{children:[a(ss,Object.assign({"data-testid":g,weight:h,$selected:s},d,{onClick:y(e,o)},c,{children:[i(ls,{children:l}),s&&i(cs,{"data-testid":`${g}-indicator`}),r&&e.subMenu&&i(ds,{children:i(us,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:i(hs,{})}))})]})),p&&i(ns,{items:e.subMenu,mobile:r,onItemClick:b})]}),o)}}));return e&&e.length>0?r?i(as,Object.assign({ref:p},{children:v()})):i(is,Object.assign({ref:p,$alignLeft:n},{children:v()})):i(o,{})},gs=u(((e,t)=>{var{items:r,className:n,id:s,selectedId:u,compress:f=!1,fixed:g=!0,resources:p=ps,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:F,onBrandClick:B,masthead:S=!0,layout:w="default"}=e,D=Vt(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[x,k]=c(!1),[A,E]=c(!1),O="stretch"===w,C=d(),{primary:H=ps.primary,secondary:_}=p;h(t,(()=>Object.assign(C.current,{dismissDrawer:()=>{j()}})),[x]),l((()=>(M(),window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M)})),[]);const j=()=>{k(!1),setTimeout((()=>{E(!1)}),550)},z=e=>x&&-1===b.indexOf(e),M=()=>{window.innerWidth<=Yt.tablet&&x&&j()},T=(e,t)=>{B&&(e.preventDefault(),B(t)),z("brand-click")&&j()},I=(e,t)=>{t.onClick?t.onClick(e):$&&(e.preventDefault(),$(t)),!(null==t?void 0:t.subMenu)&&z("item-click")&&j()},N=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):F&&(e.preventDefault(),F(t)),z("item-click")&&j()},W=()=>{k(!0),E(!0)},L=()=>{z("close-button-click")&&j()},Y=()=>{const e=r.mobile||r.desktop;return e&&e.length>0||v&&(()=>{const e=v.mobile||v.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?i(qt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:W,focusHighlight:!1},{children:i(er,{})})):null};return a(Qt,Object.assign({ref:C,$fixed:g,className:n,id:s||"navbar-wrapper","data-testid":D["data-testid"]||"navbar-wrapper"},{children:[S&&i(fr,{}),a(ur.Content,Object.assign({stretch:O},{children:[a(Zt,Object.assign({$compress:f},{children:[!y&&a(tr,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(Ur,{resources:H,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),_&&a(o,{children:[i(rr,{$compress:f}),i(Ur,{resources:_,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(Kt,Object.assign({$hideNavBranding:y},{children:[i(fs,{items:r.desktop,onItemClick:I,selectedId:u,hideNavBranding:y}),i(Ko,{actionButtons:v,onActionButtonClick:N}),Y()]}))]})),!m&&i(Lr,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:L},{children:a(qr,Object.assign({show:x,resources:{primary:H,secondary:_},onClose:L,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(fs,{items:r.mobile||r.desktop,onItemClick:I,selectedId:u,mobile:!0}),i(Ko,{actionButtons:v,onActionButtonClick:N,mobile:!0})]}))}))]}))]}))})),ps={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},ms=Jt,ys=3.5;export{gs as Navbar,ms as NavbarHeight,ys as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
