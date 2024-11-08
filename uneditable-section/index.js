import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h}from"react";import m,{css as f,keyframes as g}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";import{EyeIcon as b}from"@lifesg/react-icons/eye";import{EyeSlashIcon as y}from"@lifesg/react-icons/eye-slash";import{ICircleFillIcon as v}from"@lifesg/react-icons/i-circle-fill";import{useFloatingTree as x,FloatingTree as F,useFloatingNodeId as w,FloatingNode as $,useFloating as D,autoUpdate as S,offset as B,flip as E,shift as C,limitShift as O,useClick as k,useDismiss as A,useHover as z,useInteractions as j,FloatingPortal as H,FloatingFocusManager as M}from"@floating-ui/react";import _,{findDOMNode as T}from"react-dom";import{CrossIcon as L}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as P}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as R}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as I}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as W}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Y}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N}from"@lifesg/react-icons";function V(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const J={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},X=e=>Object.keys(J).reduce(((r,t)=>{const n=J[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),U=X("max-width"),q=(X("min-width"),J),Z=m.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:t,$tabletStart:n,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return f`
            grid-column: ${r||"auto"} / span ${t||1};

            ${U.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${U.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`,Q=i.forwardRef(((r,t)=>{const{mobileCols:n,tabletCols:i,desktopCols:a}=r,o=V(r,["mobileCols","tabletCols","desktopCols"]);return e(Z,Object.assign({ref:t},(()=>{const e=i||n,r=n,t=G(a||i||n),o=G(e),s=G(r);return{$desktopSpan:t.span,$desktopStart:t.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),G=e=>{if(Array.isArray(e)&&e.length>1){const[r,t]=e,n=r<=t?r:t,i=r<=t?t:r;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},K=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="container",type:a="flex",stretch:o=!1}=r,s=V(r,["children","data-testid","type","stretch"]);return e(ee,Object.assign({ref:t,"data-testid":i,$type:a,$stretch:o},s,{children:n}))})),ee=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?f`
                padding: 0 3rem;
            `:f`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${U.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${U.tablet} {
        max-width: 720px;
    }
    ${U.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return f`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${U.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${U.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return f`
                    display: flex;
                    flex-direction: column;
                `;default:return f`
                    display: flex;
                `}}}
`,re=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="section",stretch:a=!1}=r,o=V(r,["children","data-testid","stretch"]);return e(te,Object.assign({ref:t,"data-testid":i,$stretch:a},o,{children:n}))})),te=m.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?f`
                ${U.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:f`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,ne=i.forwardRef(((r,t)=>{const{children:n,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=r,l=V(r,["children","data-testid","className","type","stretch"]);return e(re,Object.assign({ref:t,"data-testid":i,className:a,stretch:s},l,{children:e(K,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),ie={Section:re,Container:K,Content:ne,ColDiv:Q};var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function oe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se=Array.isArray,le="object"==typeof ae&&ae&&ae.Object===Object&&ae,de="object"==typeof self&&self&&self.Object===Object&&self,ce=le||de||Function("return this")(),ue=ce.Symbol,he=ue,me=Object.prototype,fe=me.hasOwnProperty,ge=me.toString,pe=he?he.toStringTag:void 0;var be=function(e){var r=fe.call(e,pe),t=e[pe];try{e[pe]=void 0;var n=!0}catch(e){}var i=ge.call(e);return n&&(r?e[pe]=t:delete e[pe]),i},ye=Object.prototype.toString;var ve=be,xe=function(e){return ye.call(e)},Fe=ue?ue.toStringTag:void 0;var we=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?ve(e):xe(e)};var $e=we,De=function(e){return null!=e&&"object"==typeof e};var Se=function(e){return"symbol"==typeof e||De(e)&&"[object Symbol]"==$e(e)},Be=se,Ee=Se,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oe=/^\w*$/;var ke=function(e,r){if(Be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Ee(e))||(Oe.test(e)||!Ce.test(e)||null!=r&&e in Object(r))};var Ae=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ze=we,je=Ae;var He,Me=function(e){if(!je(e))return!1;var r=ze(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},_e=ce["__core-js_shared__"],Te=(He=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+He:"";var Le=function(e){return!!Te&&Te in e},Pe=Function.prototype.toString;var Re=Me,Ie=Le,We=Ae,Ye=function(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ne=/^\[object .+?Constructor\]$/,Ve=Function.prototype,Je=Object.prototype,Xe=Ve.toString,Ue=Je.hasOwnProperty,qe=RegExp("^"+Xe.call(Ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ze=function(e){return!(!We(e)||Ie(e))&&(Re(e)?qe:Ne).test(Ye(e))},Qe=function(e,r){return null==e?void 0:e[r]};var Ge=function(e,r){var t=Qe(e,r);return Ze(t)?t:void 0},Ke=Ge(Object,"create"),er=Ke;var rr=function(){this.__data__=er?er(null):{},this.size=0};var tr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},nr=Ke,ir=Object.prototype.hasOwnProperty;var ar=function(e){var r=this.__data__;if(nr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return ir.call(r,e)?r[e]:void 0},or=Ke,sr=Object.prototype.hasOwnProperty;var lr=Ke;var dr=rr,cr=tr,ur=ar,hr=function(e){var r=this.__data__;return or?void 0!==r[e]:sr.call(r,e)},mr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=lr&&void 0===r?"__lodash_hash_undefined__":r,this};function fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}fr.prototype.clear=dr,fr.prototype.delete=cr,fr.prototype.get=ur,fr.prototype.has=hr,fr.prototype.set=mr;var gr=fr;var pr=function(){this.__data__=[],this.size=0};var br=function(e,r){return e===r||e!=e&&r!=r};var yr=function(e,r){for(var t=e.length;t--;)if(br(e[t][0],r))return t;return-1},vr=yr,xr=Array.prototype.splice;var Fr=yr;var wr=yr;var $r=yr;var Dr=pr,Sr=function(e){var r=this.__data__,t=vr(r,e);return!(t<0)&&(t==r.length-1?r.pop():xr.call(r,t,1),--this.size,!0)},Br=function(e){var r=this.__data__,t=Fr(r,e);return t<0?void 0:r[t][1]},Er=function(e){return wr(this.__data__,e)>-1},Cr=function(e,r){var t=this.__data__,n=$r(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function Or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Or.prototype.clear=Dr,Or.prototype.delete=Sr,Or.prototype.get=Br,Or.prototype.has=Er,Or.prototype.set=Cr;var kr=Or,Ar=Ge(ce,"Map"),zr=gr,jr=kr,Hr=Ar;var Mr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var _r=function(e,r){var t=e.__data__;return Mr(r)?t["string"==typeof r?"string":"hash"]:t.map},Tr=_r;var Lr=_r;var Pr=_r;var Rr=_r;var Ir=function(){this.size=0,this.__data__={hash:new zr,map:new(Hr||jr),string:new zr}},Wr=function(e){var r=Tr(this,e).delete(e);return this.size-=r?1:0,r},Yr=function(e){return Lr(this,e).get(e)},Nr=function(e){return Pr(this,e).has(e)},Vr=function(e,r){var t=Rr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function Jr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Jr.prototype.clear=Ir,Jr.prototype.delete=Wr,Jr.prototype.get=Yr,Jr.prototype.has=Nr,Jr.prototype.set=Vr;var Xr=Jr;function Ur(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(Ur.Cache||Xr),t}Ur.Cache=Xr;var qr=Ur;var Zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qr=/\\(\\)?/g,Gr=function(e){var r=qr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Zr,(function(e,t,n,i){r.push(n?i.replace(Qr,"$1"):t||e)})),r}));var Kr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},et=se,rt=Se,tt=ue?ue.prototype:void 0,nt=tt?tt.toString:void 0;var it=function e(r){if("string"==typeof r)return r;if(et(r))return Kr(r,e)+"";if(rt(r))return nt?nt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=it;var ot=se,st=ke,lt=Gr,dt=function(e){return null==e?"":at(e)};var ct=Se;var ut=function(e,r){return ot(e)?e:st(e,r)?[e]:lt(dt(e))},ht=function(e){if("string"==typeof e||ct(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var mt=function(e,r){for(var t=0,n=(r=ut(r,e)).length;null!=e&&t<n;)e=e[ht(r[t++])];return t&&t==n?e:void 0};var ft=oe((function(e,r,t){var n=null==e?void 0:mt(e,r);return void 0===n?t:n}));const gt=(e,r,t)=>r?ft(t,r)||ft(e,r):t||e,pt=(e,r)=>{const t=r||e.defaultValue;return ft(e.collections,t)};var bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(bt||(bt={}));const yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},vt=e=>r=>{const t=r.theme,n=pt(yt,t[bt.colorScheme]);return t.options&&t.options.color?gt(n,e,t.options.color):gt(n,e)},xt={Brand:{1:vt("Brand.1"),2:vt("Brand.2"),3:vt("Brand.3"),4:vt("Brand.4"),5:vt("Brand.5"),6:vt("Brand.6")},Primary:vt("Primary"),PrimaryDark:vt("PrimaryDark"),Secondary:vt("Secondary"),Accent:{Light:{1:vt("Accent.Light.1"),2:vt("Accent.Light.2"),3:vt("Accent.Light.3"),4:vt("Accent.Light.4"),5:vt("Accent.Light.5"),6:vt("Accent.Light.6")},Dark:{1:vt("Accent.Dark.1"),2:vt("Accent.Dark.2"),3:vt("Accent.Dark.3")}},Neutral:{1:vt("Neutral.1"),2:vt("Neutral.2"),3:vt("Neutral.3"),4:vt("Neutral.4"),5:vt("Neutral.5"),6:vt("Neutral.6"),7:vt("Neutral.7"),8:vt("Neutral.8")},Validation:{Green:{Text:vt("Validation.Green.Text"),Icon:vt("Validation.Green.Icon"),Border:vt("Validation.Green.Border"),Background:vt("Validation.Green.Background")},Orange:{Text:vt("Validation.Orange.Text"),Icon:vt("Validation.Orange.Icon"),Border:vt("Validation.Orange.Border"),Background:vt("Validation.Orange.Background"),Badge:vt("Validation.Orange.Badge")},Red:{Text:vt("Validation.Red.Text"),Icon:vt("Validation.Red.Icon"),Border:vt("Validation.Red.Border"),Background:vt("Validation.Red.Background")},Blue:{Text:vt("Validation.Blue.Text"),Icon:vt("Validation.Blue.Icon"),Border:vt("Validation.Blue.Border"),Background:vt("Validation.Blue.Background")}},Shadow:{Accent:vt("Shadow.Accent"),Red:vt("Shadow.Red"),Elevation:vt("Shadow.Elevation")}},Ft={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},wt={D1:{fontFamily:Ft.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ft.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ft.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ft.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ft.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ft.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ft.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ft.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ft.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ft.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ft.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ft.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ft.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ft.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},$t={D1:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ft.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ft.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ft.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ft.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ft.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Dt={collections:{base:wt,oneservice:{D1:{fontFamily:Ft.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ft.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ft.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ft.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ft.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ft.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ft.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ft.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ft.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ft.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ft.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ft.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ft.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ft.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:$t},defaultValue:"base"},St=e=>r=>{const t=r.theme,n=pt(Dt,t[bt.textStyleScheme]);return t.options&&t.options.textStyle?gt(n,e,t.options.textStyle):gt(n,e)},Bt={D1:{fontFamily:St("D1.fontFamily"),fontSize:St("D1.fontSize"),fontWeight:St("D1.fontWeight"),lineHeight:St("D1.lineHeight"),letterSpacing:St("D1.letterSpacing")},D2:{fontFamily:St("D2.fontFamily"),fontSize:St("D2.fontSize"),fontWeight:St("D2.fontWeight"),lineHeight:St("D2.lineHeight"),letterSpacing:St("D2.letterSpacing")},D3:{fontFamily:St("D3.fontFamily"),fontSize:St("D3.fontSize"),fontWeight:St("D3.fontWeight"),lineHeight:St("D3.lineHeight"),letterSpacing:St("D3.letterSpacing")},D4:{fontFamily:St("D4.fontFamily"),fontSize:St("D4.fontSize"),fontWeight:St("D4.fontWeight"),lineHeight:St("D4.lineHeight"),letterSpacing:St("D4.letterSpacing")},DBody:{fontFamily:St("DBody.fontFamily"),fontSize:St("DBody.fontSize"),fontWeight:St("DBody.fontWeight"),lineHeight:St("DBody.lineHeight"),letterSpacing:St("DBody.letterSpacing")},H1:{fontFamily:St("H1.fontFamily"),fontSize:St("H1.fontSize"),fontWeight:St("H1.fontWeight"),lineHeight:St("H1.lineHeight"),letterSpacing:St("H1.letterSpacing")},H2:{fontFamily:St("H2.fontFamily"),fontSize:St("H2.fontSize"),fontWeight:St("H2.fontWeight"),lineHeight:St("H2.lineHeight"),letterSpacing:St("H2.letterSpacing")},H3:{fontFamily:St("H3.fontFamily"),fontSize:St("H3.fontSize"),fontWeight:St("H3.fontWeight"),lineHeight:St("H3.lineHeight"),letterSpacing:St("H3.letterSpacing")},H4:{fontFamily:St("H4.fontFamily"),fontSize:St("H4.fontSize"),fontWeight:St("H4.fontWeight"),lineHeight:St("H4.lineHeight"),letterSpacing:St("H4.letterSpacing")},H5:{fontFamily:St("H5.fontFamily"),fontSize:St("H5.fontSize"),fontWeight:St("H5.fontWeight"),lineHeight:St("H5.lineHeight"),letterSpacing:St("H5.letterSpacing")},H6:{fontFamily:St("H6.fontFamily"),fontSize:St("H6.fontSize"),fontWeight:St("H6.fontWeight"),lineHeight:St("H6.lineHeight"),letterSpacing:St("H6.letterSpacing")},Body:{fontFamily:St("Body.fontFamily"),fontSize:St("Body.fontSize"),fontWeight:St("Body.fontWeight"),lineHeight:St("Body.lineHeight"),letterSpacing:St("Body.letterSpacing")},BodySmall:{fontFamily:St("BodySmall.fontFamily"),fontSize:St("BodySmall.fontSize"),fontWeight:St("BodySmall.fontWeight"),lineHeight:St("BodySmall.lineHeight"),letterSpacing:St("BodySmall.letterSpacing")},XSmall:{fontFamily:St("XSmall.fontFamily"),fontSize:St("XSmall.fontSize"),fontWeight:St("XSmall.fontWeight"),lineHeight:St("XSmall.lineHeight"),letterSpacing:St("XSmall.letterSpacing")}},Et=[Ft.OpenSans,Ft.PlusJakartaSans],Ct=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ot=(e,r)=>t=>{var n;const i=Bt[e].fontFamily(t),a=Bt[e].fontWeight(t),o=Et.find((e=>Object.values(e).includes(i)));return o?f`
                font-family: ${Ct(o,r)||Ct(o,a)||i};
                font-weight: normal !important;
            `:f`
            font-family: ${i};
            font-weight: ${null!==(n=kt(r)||a)&&void 0!==n?n:"normal"};
        `},kt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},At=e=>{if(e>0)return f`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zt=(e,r,t=!1)=>n=>{const i=Bt[e],a=i.fontSize(n);return f`
            ${Ot(e,r)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${f`
                margin-bottom: ${a*(t?1.05:0)}rem;
            `}
        `},jt=(e=!1,r=!1,t=void 0)=>r?f`
            display: block;
            ${At(t)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${At(t)}
        `;var Ht;!function(e){e.D1=m.h1`
        ${e=>f`
                ${zt("D1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>f`
                ${zt("D2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>f`
                ${zt("D3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>f`
                ${zt("D4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>f`
                ${zt("DBody",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>f`
                ${zt("H1",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>f`
                ${zt("H2",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>f`
                ${zt("H3",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>f`
                ${zt("H4",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>f`
                ${zt("H5",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>f`
                ${zt("H6",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>f`
                ${zt("Body",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>f`
                ${zt("BodySmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>f`
                ${zt("XSmall",e.weight,e.paragraph)}
                color: ${xt.Neutral[1]};
                ${jt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ht||(Ht={}));const Mt=m.a`
    ${e=>f`
            ${zt(e.textStyle,e.weight)}
            color: ${xt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xt.Secondary};

                svg {
                    color: ${xt.Secondary};
                }
            }
        `}
`,_t=m(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=t=>{var{external:n=!1,children:i}=t,a=V(t,["external","children"]);return r(Mt,Object.assign({},a,{children:[i,n&&e(_t,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));const Pt=f`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${U.mobileL} {
        grid-column: 1 / -1;
    }
`,Rt=m(ie.Content)`
    background: ${({$background:e})=>e?xt.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,It=m(Ht.H3)`
    margin-bottom: 1rem;
    ${Pt}
`,Wt=m(Ht.Body)`
    margin-bottom: 2rem;
    ${Pt}
`,Yt=m.div`
    ${Pt}
`,Nt=m.ul`
    ${Pt}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${U.tablet} {
        column-gap: 1.5rem;
    }

    ${U.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Vt=i.forwardRef(((r,t)=>{var{stretch:n}=r,i=V(r,["stretch"]);return e(Nt,Object.assign({ref:t,$stretch:n},i))}));var Jt,Xt={exports:{}};Jt=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var i=e.expressions.every((function(e){var t=e.feature,n=e.modifier,i=e.value,a=r[t];if(!a)return!1;switch(t){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=c(i),a=c(a);break;case"resolution":i=d(i),a=d(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),a=l(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!t||!i&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),a=r[1],o=r[2],s=r[3]||"",l={};return l.inverse=!!a&&"not"===a.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(i);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,a={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(a.hasOwnProperty(e))return a[e];var r=e.replace(n,o);return a[e]=i.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function a(e,r,t){var a=this;if(i&&!t){var o=i.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,r,t){return new a(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in a=Object(arguments[l]))t.call(a,d)&&(s[d]=a[d]);if(r){o=r(a);for(var c=0;c<o.length;c++)n.call(a,o[c])&&(s[o[c]]=a[o[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,i=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(o(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,i)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in a)){a[c.message]=!0;var h=l?l():"";n("Failed "+t+" type: "+c.message+(null!=h?h:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,i=t(/*! react-is */"./node_modules/react-is/index.js"),a=t(/*! object-assign */"./node_modules/object-assign/index.js"),o=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",u="<<anonymous>>",h={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:g(d),arrayOf:function(e){return g((function(r,t,n,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new f("Invalid "+i+" `"+a+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,i,a+"["+l+"]",o);if(d instanceof Error)return d}return null}))},element:g((function(r,t,n,i,a){var o=r[t];return e(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+v(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,r,t,n,a){var o=e[r];return i.isValidElementType(o)?null:new f("Invalid "+n+" `"+a+"` of type `"+v(o)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(r,t,n,i,a){if(!(r[t]instanceof e)){var o=e.name||u;return new f("Invalid "+i+" `"+a+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+o+"`.")}var s;return null}))},node:g((function(e,r,t,n,i){return y(e[r])?null:new f("Invalid "+n+" `"+i+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(r,t,n,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=v(l);if("object"!==d)return new f("Invalid "+i+" `"+a+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,i,a+"."+c,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(r,t,n,i,a){for(var o=r[t],s=0;s<e.length;s++)if(m(o,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===x(r)?String(r):r}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+F(t)+" at index "+r+"."),d}return g((function(r,t,n,i,a){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,i,a,o);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new f("Invalid "+i+" `"+a+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(r,t,n,i,a){var s=r[t],l=v(s);if("object"!==l)return new f("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,i,a,d,x(c));var u=c(s,d,n,i,a+"."+d,o);if(u)return u}return null}))},exact:function(e){return g((function(r,t,n,i,l){var d=r[t],c=v(d);if("object"!==c)return new f("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=a({},r[t],e);for(var h in u){var m=e[h];if(s(e,h)&&"function"!=typeof m)return b(n,i,l,h,x(m));if(!m)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=m(d,h,n,i,l+"."+h,o);if(g)return g}return null}))}};function m(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function f(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function g(e){var t={},i=0;function a(a,s,l,d,c,h,m){if(d=d||u,h=h||l,m!==o){if(r){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var p=d+":"+l;!t[p]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[p]=!0,i++)}}return null==s[l]?a?null===s[l]?new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `null`."):new f("The "+c+" `"+h+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,c,h)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function p(e){return g((function(r,t,n,i,a,o){var s=r[t];return v(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,i){return new f((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(y);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e[c]);if("function"==typeof r)return r}(r);if(!n)return!1;var i,a=n.call(r);if(n!==r.entries){for(;!(i=a.next()).done;)if(!y(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!y(o[1]))return!1}return!0;default:return!1}}function v(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function x(e){if(null==e)return""+e;var r=v(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function F(e){var r=x(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,t)=>{var n=t(/*! react-is */"./node_modules/react-is/index.js");e.exports=t(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var m=e.type;switch(m){case d:case c:case i:case o:case a:case h:return m;default:var p=m&&m.$$typeof;switch(p){case l:case u:case g:case f:case s:return p;default:return r}}case n:return r}}}var F=d,w=c,$=l,D=s,S=t,B=u,E=i,C=g,O=f,k=n,A=o,z=a,j=h,H=!1;function M(e){return x(e)===c}r.AsyncMode=F,r.ConcurrentMode=w,r.ContextConsumer=$,r.ContextProvider=D,r.Element=S,r.ForwardRef=B,r.Fragment=E,r.Lazy=C,r.Memo=O,r.Portal=k,r.Profiler=A,r.StrictMode=z,r.Suspense=j,r.isAsyncMode=function(e){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||x(e)===d},r.isConcurrentMode=M,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===i},r.isLazy=function(e){return x(e)===g},r.isMemo=function(e){return x(e)===f},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===o},r.isStrictMode=function(e){return x(e)===a},r.isSuspense=function(e){return x(e)===h},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===c||e===o||e===a||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===p)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),i=t.length;if(n.length!==i)return!1;for(var a=0;a<i;a++){var o=t[a];if(e[o]!==r[o]||!Object.prototype.hasOwnProperty.call(r,o))return!1}return!0}function i(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=i(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,i=e.onChange,o=n(e,["children","device","onChange"]),s=(0,a.default)(o,t,i);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var i=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=i.default;var a=n(t(/*! ./Component */"./src/Component.ts"));r.default=a.default;var o=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=o.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=a(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},d={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},c=i(d,["type"]),u=n({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},c),h=n(n({},l),u);r.default={all:h,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(a.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,i.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(/*! react */"react"),a=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,o.default)(t)]=e[t],r}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,i.useState)(r),n=t[0],a=t[1];return(0,i.useEffect)((function(){var e=r();n!==e&&a(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,i.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,i.useState)(t),a=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,r]),a}(r),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,a.default)(e,r||{},!!r)},n=(0,i.useState)(t),o=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),o}(o,n),m=function(e){var r=(0,i.useState)(e.matches),t=r[0],n=r[1];return(0,i.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),f=u();return(0,i.useEffect)((function(){f&&t&&t(m)}),[m]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),m}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}};return r[e].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Ut=Xt.exports=Jt(i),qt={exports:{}};qt.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},b=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:b,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var F="$isDayjsObject",w=function(e){return e instanceof B||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new B(t)},S=y;S.l=$,S.i=w,S.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var B=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(S.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},b.isAfter=function(e,r){return D(e)<this.startOf(r)},b.isBefore=function(e,r){return this.endOf(r)<D(e)},b.$g=function(e,r,t){return S.u(e)?this[r]:this.set(t,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,r){var t=this,n=!!S.u(r)||r,c=S.p(e),m=function(e,r){var i=S.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},f=function(e,r){return S.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return m(n?b-x:b+(6-x),p);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,r){var t,l=S.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[m](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},b.set=function(e,r){return this.clone().$set(e,r)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var f=S.p(c),g=function(e){var r=D(m);return S.w(r.date(r.date()+Math.round(e*n)),m)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return g(1);if(f===l)return g(7);var p=(h={},h[a]=r,h[o]=t,h[i]=e,h)[f]||1,b=this.$d.getTime()+n*p;return S.w(b,this)},b.subtract=function(e,r){return this.add(-1*e,r)},b.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},h=function(e){return S.s(a%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return S.s(r.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return S.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return S.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return S.s(o,2,"0");case"s":return String(r.$s);case"ss":return S.s(r.$s,2,"0");case"SSS":return S.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var f,g=this,p=S.p(h),b=D(n),y=(b.utcOffset()-this.utcOffset())*r,v=this-b,x=function(){return S.m(g,b)};switch(p){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case o:f=v/t;break;case a:f=v/r;break;case i:f=v/e;break;default:f=v}return m?f:S.a(f)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),E=B.prototype;return D.prototype=E,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,B,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Zt=oe(qt.exports),Qt={exports:{}};Qt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],m=c&&c[1];o[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,f=o||(i||a?1:m.getDate()),g=i||m.getFullYear(),p=0;i&&!a||(p=a>0?a-1:m.getMonth());var b=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,p,f,b,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,p,f,b,y,v,x)):new Date(g,p,f,b,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var m=s.length,f=1;f<=m;f+=1){o[1]=s[f-1];var g=t.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Gt=oe(Qt.exports),Kt={exports:{}};Kt.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var en=oe(Kt.exports),rn={exports:{}};rn.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var tn=oe(rn.exports),nn={exports:{}};nn.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var an,on,sn,ln=oe(nn.exports),dn={exports:{}},cn=oe(dn.exports=(an={year:0,month:1,day:2,hour:3,minute:4,second:5},on={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=on[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),on[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=an[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],h=24===u?0:u,m=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",f=+e;return(t.utc(m).valueOf()-(f-=f%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Zt.extend(en),Zt.extend(ln),Zt.extend(tn),Zt.extend(Gt),Zt.extend(cn),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Zt(r).startOf("week");return un(t).map((e=>hn(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return hn(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Zt(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Zt(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Zt(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?Zt(n):void 0,i?Zt(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(sn||(sn={}));const un=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},hn=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},mn=[1,3,5,7,8,10,12],fn=[4,6,9,11];var gn,pn,bn,yn;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":mn.includes(a)?Math.min(i,31).toString():fn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Zt(e,t);return Zt(r,t).diff(n,"minute")},e.toDayjs=e=>e?Zt(e):Zt(),e.addMinutesToTime=(e,r,t="HH:mm")=>Zt(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Zt(e).isSame(Zt(r),t)}(gn||(gn={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Zt(e).isBefore(n,"day"))||!(!i||!Zt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Zt(e).isValid())return e}return""}}(pn||(pn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(bn||(bn={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(yn||(yn={}));var vn=function(e,r){return vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},vn(e,r)};var xn=function(){return xn=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},xn.apply(this,arguments)};var Fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var wn=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},$n="object"==typeof Fn&&Fn&&Fn.Object===Object&&Fn,Dn="object"==typeof self&&self&&self.Object===Object&&self,Sn=$n||Dn||Function("return this")(),Bn=Sn,En=function(){return Bn.Date.now()},Cn=/\s/;var On=function(e){for(var r=e.length;r--&&Cn.test(e.charAt(r)););return r},kn=/^\s+/;var An=function(e){return e?e.slice(0,On(e)+1).replace(kn,""):e},zn=Sn.Symbol,jn=zn,Hn=Object.prototype,Mn=Hn.hasOwnProperty,_n=Hn.toString,Tn=jn?jn.toStringTag:void 0;var Ln=function(e){var r=Mn.call(e,Tn),t=e[Tn];try{e[Tn]=void 0;var n=!0}catch(e){}var i=_n.call(e);return n&&(r?e[Tn]=t:delete e[Tn]),i},Pn=Object.prototype.toString;var Rn=Ln,In=function(e){return Pn.call(e)},Wn=zn?zn.toStringTag:void 0;var Yn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Wn&&Wn in Object(e)?Rn(e):In(e)},Nn=function(e){return null!=e&&"object"==typeof e};var Vn=An,Jn=wn,Xn=function(e){return"symbol"==typeof e||Nn(e)&&"[object Symbol]"==Yn(e)},Un=/^[-+]0x[0-9a-f]+$/i,qn=/^0b[01]+$/i,Zn=/^0o[0-7]+$/i,Qn=parseInt;var Gn=wn,Kn=En,ei=function(e){if("number"==typeof e)return e;if(Xn(e))return NaN;if(Jn(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Jn(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Vn(e);var t=qn.test(e);return t||Zn.test(e)?Qn(e.slice(2),t?2:8):Un.test(e)?NaN:+e},ri=Math.max,ti=Math.min;var ni=function(e,r,t){var n,i,a,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,a=i;return n=i=void 0,d=r,o=e.apply(a,t)}function f(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=a}function g(){var e=Kn();if(f(e))return p(e);s=setTimeout(g,function(e){var t=r-(e-l);return u?ti(t,a-(e-d)):t}(e))}function p(e){return s=void 0,h&&n?m(e):(n=i=void 0,o)}function b(){var e=Kn(),t=f(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(g,r),c?m(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(g,r),m(l)}return void 0===s&&(s=setTimeout(g,r)),o}return r=ei(r)||0,Gn(t)&&(c=!!t.leading,a=(u="maxWait"in t)?ri(ei(t.maxWait)||0,r):a,h="trailing"in t?!!t.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:p(Kn())},b},ii=ni,ai=wn;var oi=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ai(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),ii(e,r,{leading:n,maxWait:r,trailing:i})},si=function(e,r,t,n){switch(r){case"debounce":return ni(e,t,n);case"throttle":return oi(e,t,n);default:return e}},li=function(e){return"function"==typeof e},di=function(){return"undefined"==typeof window},ci=function(e){return e instanceof Element||e instanceof HTMLDocument},ui=function(e,r,t,n){return function(i){var a=i.width,o=i.height;r((function(r){return r.width===a&&r.height===o||r.width===a&&!n||r.height===o&&!t?r:(e&&li(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!di()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(di())return null;if(r)return document.querySelector(r);if(n&&ci(n))return n;if(t.targetRef&&ci(t.targetRef.current))return t.targetRef.current;var i=T(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,a=r.handleHeight,o=void 0===a||a,s=r.onResize;if(i||o){var l=ui(s,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!di()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return li(r)?"renderProp":li(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,a=r.refreshRate,o=void 0===a?1e3:a,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,di()||(t.resizeHandler=si(t.createResizeHandler,i,o,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}vn(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){di()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,a=r.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var hi=di()?u:h;const mi=(e,r,t)=>ft(t,r)||ft(e,r),fi=(e,r)=>{const t=r||e.defaultValue;return ft(e.collections,t)},gi={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},pi=e=>r=>{const t=r.theme,n=fi(gi,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?mi(n,e,t.overrides.primitiveColour):n[e]},bi={"primary-10":pi("primary-10"),"primary-20":pi("primary-20"),"primary-30":pi("primary-30"),"primary-40":pi("primary-40"),"primary-50":pi("primary-50"),"primary-60":pi("primary-60"),"primary-70":pi("primary-70"),"primary-80":pi("primary-80"),"primary-90":pi("primary-90"),"primary-95":pi("primary-95"),"primary-100":pi("primary-100"),"secondary-10":pi("secondary-10"),"secondary-20":pi("secondary-20"),"secondary-30":pi("secondary-30"),"secondary-40":pi("secondary-40"),"secondary-50":pi("secondary-50"),"secondary-60":pi("secondary-60"),"secondary-70":pi("secondary-70"),"secondary-80":pi("secondary-80"),"secondary-90":pi("secondary-90"),"secondary-95":pi("secondary-95"),"secondary-100":pi("secondary-100"),"neutral-10":pi("neutral-10"),"neutral-20":pi("neutral-20"),"neutral-30":pi("neutral-30"),"neutral-40":pi("neutral-40"),"neutral-50":pi("neutral-50"),"neutral-60":pi("neutral-60"),"neutral-70":pi("neutral-70"),"neutral-80":pi("neutral-80"),"neutral-90":pi("neutral-90"),"neutral-95":pi("neutral-95"),"neutral-100":pi("neutral-100"),"success-10":pi("success-10"),"success-20":pi("success-20"),"success-30":pi("success-30"),"success-40":pi("success-40"),"success-50":pi("success-50"),"success-60":pi("success-60"),"success-70":pi("success-70"),"success-80":pi("success-80"),"success-90":pi("success-90"),"success-95":pi("success-95"),"success-100":pi("success-100"),"warning-10":pi("warning-10"),"warning-20":pi("warning-20"),"warning-30":pi("warning-30"),"warning-40":pi("warning-40"),"warning-50":pi("warning-50"),"warning-60":pi("warning-60"),"warning-70":pi("warning-70"),"warning-80":pi("warning-80"),"warning-90":pi("warning-90"),"warning-95":pi("warning-95"),"warning-100":pi("warning-100"),"error-10":pi("error-10"),"error-20":pi("error-20"),"error-30":pi("error-30"),"error-40":pi("error-40"),"error-50":pi("error-50"),"error-60":pi("error-60"),"error-70":pi("error-70"),"error-80":pi("error-80"),"error-90":pi("error-90"),"error-95":pi("error-95"),"error-100":pi("error-100"),"info-10":pi("info-10"),"info-20":pi("info-20"),"info-30":pi("info-30"),"info-40":pi("info-40"),"info-50":pi("info-50"),"info-60":pi("info-60"),"info-70":pi("info-70"),"info-80":pi("info-80"),"info-90":pi("info-90"),"info-95":pi("info-95"),"info-100":pi("info-100"),white:pi("white"),black:pi("black")},yi={text:pi("neutral-20"),"text-subtle":pi("neutral-30"),"text-subtler":pi("neutral-50"),"text-subtlest":pi("neutral-60"),"text-primary":pi("primary-50"),"text-hover":pi("primary-40"),"text-selected":pi("primary-50"),"text-selected-hover":pi("primary-40"),"text-disabled":pi("neutral-50"),"text-disabled-subtle":pi("neutral-60"),"text-disabled-subtlest":pi("neutral-80"),"text-selected-disabled":pi("neutral-50"),"text-success":pi("success-40"),"text-warning":pi("warning-40"),"text-error":pi("error-40"),"text-info":pi("info-40"),"text-inverse":pi("white"),icon:pi("neutral-50"),"icon-subtle":pi("neutral-60"),"icon-strongest":pi("neutral-20"),"icon-primary":pi("primary-50"),"icon-primary-subtle":pi("primary-60"),"icon-primary-subtlest":pi("primary-70"),"icon-hover":pi("primary-40"),"icon-selected":pi("primary-50"),"icon-selected-hover":pi("primary-40"),"icon-disabled":pi("neutral-50"),"icon-disabled-subtle":pi("neutral-60"),"icon-selected-disabled":pi("neutral-60"),"icon-success":pi("success-50"),"icon-warning":pi("warning-60"),"icon-error":pi("error-50"),"icon-error-strong":pi("error-40"),"icon-info":pi("info-50"),"icon-inverse":pi("white"),"icon-primary-inverse":"#FEAB10",border:pi("neutral-90"),"border-strong":pi("neutral-70"),"border-stronger":pi("neutral-30"),"border-primary":pi("primary-50"),"border-primary-subtle":pi("primary-60"),"border-hover":pi("primary-90"),"border-hover-strong":pi("primary-60"),"border-selected":pi("primary-50"),"border-selected-subtle":pi("primary-70"),"border-selected-subtlest":pi("primary-90"),"border-selected-hover":pi("primary-40"),"border-focus":pi("primary-60"),"border-focus-strong":pi("primary-50"),"border-disabled":pi("neutral-90"),"border-selected-disabled":pi("neutral-70"),"border-success":pi("success-60"),"border-warning":pi("warning-60"),"border-error":pi("error-60"),"border-error-focus":pi("error-60"),"border-error-strong":pi("error-40"),"border-info":pi("info-60"),bg:pi("white"),"bg-strong":pi("neutral-100"),"bg-stronger":pi("neutral-95"),"bg-strongest":pi("neutral-90"),"bg-hover":pi("primary-95"),"bg-hover-strong":pi("primary-90"),"bg-hover-subtle":pi("primary-100"),"bg-hover-neutral":pi("neutral-95"),"bg-selected":pi("primary-95"),"bg-selected-hover":pi("primary-90"),"bg-selected-strong":pi("primary-90"),"bg-selected-strongest":pi("primary-90"),"bg-disabled":pi("neutral-95"),"bg-selected-disabled":pi("neutral-95"),"bg-success":pi("success-100"),"bg-success-strong":pi("success-50"),"bg-warning":pi("warning-100"),"bg-warning-strong":pi("warning-50"),"bg-info":pi("info-100"),"bg-info-strong":pi("info-50"),"bg-error":pi("error-100"),"bg-error-strong":pi("error-50"),"bg-error-strong-hover":pi("error-30"),"bg-inverse":pi("neutral-20"),"bg-inverse-subtle":pi("neutral-30"),"bg-inverse-subtler":pi("neutral-50"),"bg-inverse-subtlest":pi("neutral-60"),"bg-primary":pi("primary-50"),"bg-primary-subtle":pi("primary-60"),"bg-primary-subtler":pi("primary-80"),"bg-primary-subtlest":pi("primary-100"),"bg-primary-hover":pi("primary-40"),"bg-primary-subtlest-hover":pi("primary-90"),"bg-primary-subtlest-selected":pi("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:pi("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":pi("black"),"focus-ring-inverse":pi("white")},vi={collections:{lifesg:yi,bookingsg:yi,rbs:yi,mylegacy:yi,ccube:yi},defaultValue:"lifesg"},xi=e=>r=>{const t=r.theme,n=fi(vi,t.colourScheme),i=t.overrides&&t.overrides.semanticColour?mi(n,e,t.overrides.semanticColour):n[e];return"function"==typeof i?i(r):i},Fi={text:xi("text"),"text-subtle":xi("text-subtle"),"text-subtler":xi("text-subtler"),"text-subtlest":xi("text-subtlest"),"text-primary":xi("text-primary"),"text-hover":xi("text-hover"),"text-selected":xi("text-selected"),"text-selected-hover":xi("text-selected-hover"),"text-disabled":xi("text-disabled"),"text-disabled-subtle":xi("text-disabled-subtle"),"text-disabled-subtlest":xi("text-disabled-subtlest"),"text-selected-disabled":xi("text-selected-disabled"),"text-success":xi("text-success"),"text-warning":xi("text-warning"),"text-error":xi("text-error"),"text-info":xi("text-info"),"text-inverse":xi("text-inverse"),icon:xi("icon"),"icon-subtle":xi("icon-subtle"),"icon-strongest":xi("icon-strongest"),"icon-primary":xi("icon-primary"),"icon-primary-subtle":xi("icon-primary-subtle"),"icon-primary-subtlest":xi("icon-primary-subtlest"),"icon-hover":xi("icon-hover"),"icon-selected":xi("icon-selected"),"icon-selected-hover":xi("icon-selected-hover"),"icon-disabled":xi("icon-disabled"),"icon-disabled-subtle":xi("icon-disabled-subtle"),"icon-selected-disabled":xi("icon-selected-disabled"),"icon-success":xi("icon-success"),"icon-warning":xi("icon-warning"),"icon-error":xi("icon-error"),"icon-error-strong":xi("icon-error-strong"),"icon-info":xi("icon-info"),"icon-inverse":xi("icon-inverse"),"icon-primary-inverse":xi("icon-primary-inverse"),border:xi("border"),"border-strong":xi("border-strong"),"border-stronger":xi("border-stronger"),"border-primary":xi("border-primary"),"border-primary-subtle":xi("border-primary-subtle"),"border-hover":xi("border-hover"),"border-hover-strong":xi("border-hover-strong"),"border-selected":xi("border-selected"),"border-selected-subtle":xi("border-selected-subtle"),"border-selected-subtlest":xi("border-selected-subtlest"),"border-selected-hover":xi("border-selected-hover"),"border-focus":xi("border-focus"),"border-focus-strong":xi("border-focus-strong"),"border-disabled":xi("border-disabled"),"border-selected-disabled":xi("border-selected-disabled"),"border-success":xi("border-success"),"border-warning":xi("border-warning"),"border-error":xi("border-error"),"border-error-focus":xi("border-error-focus"),"border-error-strong":xi("border-error-strong"),"border-info":xi("border-info"),bg:xi("bg"),"bg-strong":xi("bg-strong"),"bg-stronger":xi("bg-stronger"),"bg-strongest":xi("bg-strongest"),"bg-hover":xi("bg-hover"),"bg-hover-strong":xi("bg-hover-strong"),"bg-hover-subtle":xi("bg-hover-subtle"),"bg-hover-neutral":xi("bg-hover-neutral"),"bg-selected":xi("bg-selected"),"bg-selected-hover":xi("bg-selected-hover"),"bg-selected-strong":xi("bg-selected-strong"),"bg-selected-strongest":xi("bg-selected-strongest"),"bg-disabled":xi("bg-disabled"),"bg-selected-disabled":xi("bg-selected-disabled"),"bg-success":xi("bg-success"),"bg-success-strong":xi("bg-success-strong"),"bg-warning":xi("bg-warning"),"bg-warning-strong":xi("bg-warning-strong"),"bg-info":xi("bg-info"),"bg-info-strong":xi("bg-info-strong"),"bg-error":xi("bg-error"),"bg-error-strong":xi("bg-error-strong"),"bg-error-strong-hover":xi("bg-error-strong-hover"),"bg-inverse":xi("bg-inverse"),"bg-inverse-subtle":xi("bg-inverse-subtle"),"bg-inverse-subtler":xi("bg-inverse-subtler"),"bg-inverse-subtlest":xi("bg-inverse-subtlest"),"bg-primary":xi("bg-primary"),"bg-primary-subtle":xi("bg-primary-subtle"),"bg-primary-subtler":xi("bg-primary-subtler"),"bg-primary-subtlest":xi("bg-primary-subtlest"),"bg-primary-hover":xi("bg-primary-hover"),"bg-primary-subtlest-hover":xi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":xi("bg-primary-subtlest-selected"),"bg-available":xi("bg-available"),"overlay-strong":xi("overlay-strong"),"overlay-subtle":xi("overlay-subtle"),hyperlink:xi("hyperlink"),"hyperlink-inverse":xi("hyperlink-inverse"),"focus-ring":xi("focus-ring"),"focus-ring-inverse":xi("focus-ring-inverse")},wi={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},$i=e=>r=>{var t;const n=r.theme,i=fi(wi,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?mi(i,e,n.overrides.breakpoint):i[e],a},Di={"xxs-min":$i("xxs-min"),"xxs-max":$i("xxs-max"),"xs-min":$i("xs-min"),"xs-max":$i("xs-max"),"sm-min":$i("sm-min"),"sm-max":$i("sm-max"),"md-min":$i("md-min"),"md-max":$i("md-max"),"lg-min":$i("lg-min"),"lg-max":$i("lg-max"),"xl-min":$i("xl-min"),"xl-max":$i("xl-max"),"xxl-min":$i("xxl-min"),"xxs-column":$i("xxs-column"),"xs-column":$i("xs-column"),"sm-column":$i("sm-column"),"md-column":$i("md-column"),"lg-column":$i("lg-column"),"xl-column":$i("xl-column"),"xxl-column":$i("xxl-column"),"xxs-gutter":$i("xxs-gutter"),"xs-gutter":$i("xs-gutter"),"sm-gutter":$i("sm-gutter"),"md-gutter":$i("md-gutter"),"lg-gutter":$i("lg-gutter"),"xl-gutter":$i("xl-gutter"),"xxl-gutter":$i("xxl-gutter"),"xxs-margin":$i("xxs-margin"),"xs-margin":$i("xs-margin"),"sm-margin":$i("sm-margin"),"md-margin":$i("md-margin"),"lg-margin":$i("lg-margin"),"xl-margin":$i("xl-margin"),"xxl-margin":$i("xxl-margin")},Si=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Di["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Bi={MaxWidth:Si("max-width"),MinWidth:Si("min-width")},Ei={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Ci={collections:{lifesg:Ei,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ei,mylegacy:Ei,ccube:Ei},defaultValue:"lifesg"},Oi=e=>r=>{const t=r.theme,n=fi(Ci,t.fontScheme);return t.overrides&&t.overrides.fontSpec?mi(n,e,t.overrides.fontSpec):n[e]},ki={"header-size-xxl":Oi("header-size-xxl"),"header-size-xl":Oi("header-size-xl"),"header-size-lg":Oi("header-size-lg"),"header-size-md":Oi("header-size-md"),"header-size-sm":Oi("header-size-sm"),"header-size-xs":Oi("header-size-xs"),"header-lh-xxl":Oi("header-lh-xxl"),"header-lh-xl":Oi("header-lh-xl"),"header-lh-lg":Oi("header-lh-lg"),"header-lh-md":Oi("header-lh-md"),"header-lh-sm":Oi("header-lh-sm"),"header-lh-xs":Oi("header-lh-xs"),"header-ls-xxl":Oi("header-ls-xxl"),"header-ls-xl":Oi("header-ls-xl"),"header-ls-lg":Oi("header-ls-lg"),"header-ls-md":Oi("header-ls-md"),"header-ls-sm":Oi("header-ls-sm"),"header-ls-xs":Oi("header-ls-xs"),"weight-light":Oi("weight-light"),"weight-regular":Oi("weight-regular"),"weight-semibold":Oi("weight-semibold"),"weight-bold":Oi("weight-bold"),"font-family":Oi("font-family"),"body-size-baseline":Oi("body-size-baseline"),"body-size-md":Oi("body-size-md"),"body-size-sm":Oi("body-size-sm"),"body-size-xs":Oi("body-size-xs"),"body-lh-baseline":Oi("body-lh-baseline"),"body-lh-md":Oi("body-lh-md"),"body-lh-sm":Oi("body-lh-sm"),"body-lh-xs":Oi("body-lh-xs"),"body-ls-baseline":Oi("body-ls-baseline"),"body-ls-md":Oi("body-ls-md"),"body-ls-sm":Oi("body-ls-sm"),"body-ls-xs":Oi("body-ls-xs"),"formlabel-size-baseline":Oi("formlabel-size-baseline"),"formlabel-size-lg":Oi("formlabel-size-lg"),"formlabel-lh-baseline":Oi("formlabel-lh-baseline"),"formlabel-lh-lg":Oi("formlabel-lh-lg"),"formlabel-ls-baseline":Oi("formlabel-ls-baseline"),"formlabel-ls-lg":Oi("formlabel-ls-lg")},Ai={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},zi=e=>r=>{const t=r.theme,n=fi(Ai,t.radiusScheme);return t.overrides&&t.overrides.radius?`${mi(n,e,t.overrides.radius)}px`:`${n[e]}px`},ji={none:zi("none"),xs:zi("xs"),sm:zi("sm"),md:zi("md"),lg:zi("lg"),full:zi("full")},Hi={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Mi=e=>r=>{const t=r.theme,n=fi(Hi,t.spacingScheme);return t.overrides&&t.overrides.spacing?`${mi(n,e,t.overrides.spacing)}px`:`${n[e]}px`},_i={"spacing-0":Mi("spacing-0"),"spacing-4":Mi("spacing-4"),"spacing-8":Mi("spacing-8"),"spacing-12":Mi("spacing-12"),"spacing-16":Mi("spacing-16"),"spacing-20":Mi("spacing-20"),"spacing-24":Mi("spacing-24"),"spacing-32":Mi("spacing-32"),"spacing-40":Mi("spacing-40"),"spacing-48":Mi("spacing-48"),"spacing-64":Mi("spacing-64"),"spacing-72":Mi("spacing-72"),"layout-xs":Mi("layout-xs"),"layout-sm":Mi("layout-sm"),"layout-md":Mi("layout-md"),"layout-lg":Mi("layout-lg"),"layout-xl":Mi("layout-xl"),"layout-xxl":Mi("layout-xxl"),"layout-xxxl":Mi("layout-xxxl")},Ti=(e,r,t,n)=>f`
    font-family: ${Oi("font-family")};
    font-size: ${Oi(e)};
    font-weight: ${Oi(r)};
    line-height: ${Oi(t)};
    letter-spacing: ${Oi(n)};
`,Li={"header-xxl-light":Ti("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ti("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ti("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ti("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ti("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ti("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ti("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ti("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ti("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ti("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ti("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ti("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ti("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ti("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ti("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ti("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ti("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ti("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ti("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ti("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ti("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ti("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ti("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ti("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ti("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ti("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ti("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ti("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ti("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ti("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ti("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ti("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ti("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ti("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ti("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ti("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ti("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ti("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ti("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ti("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ti("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ti("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Pi={collections:{lifesg:Li,bookingsg:Li,rbs:Li,mylegacy:Li,ccube:Li},defaultValue:"lifesg"},Ri=e=>r=>{const t=r.theme,n=fi(Pi,t.fontScheme),i=t.overrides&&t.overrides.font?mi(n,e,t.overrides.font):n[e];return"function"==typeof i?i(r):i},Ii={"header-xxl-light":Ri("header-xxl-light"),"header-xxl-regular":Ri("header-xxl-regular"),"header-xxl-semibold":Ri("header-xxl-semibold"),"header-xxl-bold":Ri("header-xxl-bold"),"header-xl-light":Ri("header-xl-light"),"header-xl-regular":Ri("header-xl-regular"),"header-xl-semibold":Ri("header-xl-semibold"),"header-xl-bold":Ri("header-xl-bold"),"header-lg-light":Ri("header-lg-light"),"header-lg-regular":Ri("header-lg-regular"),"header-lg-semibold":Ri("header-lg-semibold"),"header-lg-bold":Ri("header-lg-bold"),"header-md-light":Ri("header-md-light"),"header-md-regular":Ri("header-md-regular"),"header-md-semibold":Ri("header-md-semibold"),"header-md-bold":Ri("header-md-bold"),"header-sm-light":Ri("header-sm-light"),"header-sm-regular":Ri("header-sm-regular"),"header-sm-semibold":Ri("header-sm-semibold"),"header-sm-bold":Ri("header-sm-bold"),"header-xs-light":Ri("header-xs-light"),"header-xs-regular":Ri("header-xs-regular"),"header-xs-semibold":Ri("header-xs-semibold"),"header-xs-bold":Ri("header-xs-bold"),"body-baseline-light":Ri("body-baseline-light"),"body-baseline-regular":Ri("body-baseline-regular"),"body-baseline-semibold":Ri("body-baseline-semibold"),"body-baseline-bold":Ri("body-baseline-bold"),"body-md-light":Ri("body-md-light"),"body-md-regular":Ri("body-md-regular"),"body-md-semibold":Ri("body-md-semibold"),"body-md-bold":Ri("body-md-bold"),"body-sm-light":Ri("body-sm-light"),"body-sm-regular":Ri("body-sm-regular"),"body-sm-semibold":Ri("body-sm-semibold"),"body-sm-bold":Ri("body-sm-bold"),"body-xs-light":Ri("body-xs-light"),"body-xs-regular":Ri("body-xs-regular"),"body-xs-semibold":Ri("body-xs-semibold"),"body-xs-bold":Ri("body-xs-bold"),"formlabel-baseline-semibold":Ri("formlabel-baseline-semibold"),"formlabel-lg-semibold":Ri("formlabel-lg-semibold")},Wi=Object.assign(Object.assign({},Fi),{Primitive:bi}),Yi=ki,Ni=Ii,Vi=_i,Ji=ji,Xi=Bi,Ui=m.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return f`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,qi=m.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Wi["overlay-subtle"]:Wi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=f`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=f`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=f`
                transition: none;
            `),r}}
`;var Zi;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Zi||(Zi={}));const Qi=({show:r=!1,rootId:t,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:h=!1,zIndex:m,id:f})=>{const[g,p]=o(null),[b,y]=o(),[v]=o((()=>bn.generate())),F=w(),D=a(),S=a(null),B=s&&i.cloneElement(s,{ref:S}),E=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",C=(null!=m?m:b)?99999:99998;(e=>{const r=x();u((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Zi.Change,t)}),[r,e]),u((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Zi.Change,t)};return null==r||r.events.on(Zi.Ready,t),()=>null==r?void 0:r.events.off(Zi.Ready,t)}),[r,e])})(C),u((()=>(z(),p(k()),()=>{T(),H().length<1&&j("remove")})),[]),u((()=>{if(r){const e=A();O(e),M();const r=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{H().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[r]);const O=e=>{D.current=e,y(e)},k=()=>document&&t?document.getElementById(t):document?document.body:null,A=()=>H().length>0,z=()=>{if(!document.getElementById(Ki)){const e=document.createElement("style");e.id=Ki;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${ea} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ea}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const r=document.body.classList.contains(ea);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ea):document.body.classList.add(ea)},H=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},T=()=>{const e=H();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},L=e=>{var r;const t=null===(r=S.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&h&&(e.preventDefault(),n())};return g?_.createPortal(e(Ui,Object.assign({id:E,"data-testid":E,$show:r,$zIndex:C},{children:s&&e($,Object.assign({id:F},{children:e(qi,Object.assign({"data-testid":"overlay-wrapper",$show:r,$stacked:b,$backgroundBlur:d,$disableTransition:c,onClick:L},{children:B}))}))})),g):null},Gi=r=>e(F,{children:e(Qi,Object.assign({},r))}),Ki="lifesg-ds-overlay-stylesheet",ea="lifesg-ds-overlay-open",ra=m.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,t=e.animationFrom||"bottom",r?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,t}}

    ${Xi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ta=r=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:h=!0}=r,m=V(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,g]=o(),[p,b]=o();u((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),u((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;g(e)},v=()=>{const e=.01*window.visualViewport.height;g(e),b(window.visualViewport.offsetTop)};return e(Gi,Object.assign({"data-testid":`${t}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:c,id:t,rootId:l,zIndex:d},{children:e(ra,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:f,offsetTop:p},m,{children:a}))}))},na=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return f`
        ${Ni[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},ia=(e,r)=>f`
    ${na(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?f`
            display: block;
        `:e?f`
            display: inline;
        `:f`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Wi.text};
`;var aa;!function(t){const n=(e,r,t)=>{const n=m(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ia(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=m.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>ia(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=m.a`
            ${e=>f`
                ${na(t,e.weight||"regular")}
                color: ${Wi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Wi["text-hover"]};
                }
            `}
        `,a=t=>{var{external:n=!1,children:a}=t,o=V(t,["external","children"]);return r(i,Object.assign({},o,{children:[a,n&&e(oa,{})]}))};return a.displayName=`Typography.${n}`,a};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(aa||(aa={}));const oa=m(p)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,sa=m.div`
    border-radius: ${Ji.md};
    background: ${Wi.bg};
    padding: ${Vi["spacing-16"]} ${Vi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,la=m.button`
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

        ${({$highlight:e})=>e&&f`
                background-color: ${xt.Neutral[7]};
            `}
    }
`,da=i.forwardRef(((r,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=r,s=V(r,["children","focusHighlight","focusOutline","type"]);return e(la,Object.assign({ref:t,$outline:a,$highlight:i,type:o},s,{children:n}))})),ca=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Wi.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Xi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ua=m(da)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Wi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Xi.MaxWidth.sm} {
        right: 1.25rem;
    }
`,ha=e=>{const{textSize:r}=e||{};return f`
        // Text styling
        ${r&&Ni[`${r}-regular`]}

        strong {
            font-weight: ${Yi["weight-semibold"]};
            ${r&&Ni[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Yi["weight-semibold"]};
            ${r&&Ni[`${r}-semibold`]}
            color: ${Wi.hyperlink};
            text-decoration: none;

            svg {
                color: ${Wi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Wi["hyperlink-hover"]};

                svg {
                    color: ${Wi["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},ma=m.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,fa=m((r=>{var{children:t}=r,n=V(r,["children"]);const i=n["data-testid"]||"card";return e(sa,Object.assign({},n,{"data-testid":i},{children:"string"==typeof t?e(aa.BodyBL,{children:t}):t}))}))`
    color: ${Wi.text};
    ${ha({textSize:"body-md"})}

    ${Xi.MaxWidth.sm} {
        display: none;
    }
`,ga=m((t=>{var{id:n="modal-box",children:i,onClose:a,showCloseButton:o=!0}=t,s=V(t,["id","children","onClose","showCloseButton"]);return r(ca,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&e(ua,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:e(L,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,pa=m.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Wi.text};
    ${ha({textSize:"body-md"})}
`,ba=n=>{var{children:i,visible:a,onMobileClose:o}=n,s=V(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",d=Ut.useMediaQuery({maxWidth:J.mobileL}),c=()=>{o&&o()},u=()=>"string"==typeof i?e(aa.BodyMD,{children:i}):i;return r(t,{children:[a&&e(ma,Object.assign({"data-testid":l},s,{children:e(fa,{children:u()})})),d&&e(ta,Object.assign({show:a,onOverlayClick:c},{children:e(ga,Object.assign({onClose:c},{children:e(pa,{children:u()})}))}))]})},ya=m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,va=n=>{var i,s,{children:l,popoverContent:d,trigger:c="click",position:h="top",zIndex:m,rootNode:f,customOffset:g,delay:p,onPopoverAppear:b,onPopoverDismiss:y}=n,v=V(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[F,w]=o(!1),$=a(),_=a(),T=Ut.useMediaQuery({maxWidth:q.mobileL}),{refs:L,floatingStyles:P,context:R}=D({open:F,placement:h,whileElementsMounted:S,middleware:[B(null!=g?g:16),E(),C({limiter:O()})],onOpenChange:e=>{w(e),F!==e&&Q(e)}}),I=(()=>{const[e,r]=o(void 0),t=x();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Zi.Change,e),t.events.emit(Zi.Ready),()=>t.events.off(Zi.Change,e)}),[t]),e})(),W=T?"click":c,Y=k(R,{ignoreMouse:"hover"===W}),N=A(R),J=z(R,{enabled:"hover"===W,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(s=null==p?void 0:p.close)&&void 0!==s?s:500}}),{getReferenceProps:X,getFloatingProps:U}=j([Y,N,J]),Z=()=>{w(!1),Q(!1)},Q=e=>{e&&b&&b(),!e&&y&&y()};return r(t,{children:[e(ya,Object.assign({ref:e=>{$.current=e,L.setReference(e)}},X({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),F&&e(H,Object.assign({root:f},{children:e(M,Object.assign({context:R},{children:e("div",Object.assign({ref:e=>{_.current=e,L.setFloating(e)},style:Object.assign(Object.assign({},P),{outline:"none",zIndex:null!=m?m:I})},U(),{children:"function"==typeof d?d():e(ba,Object.assign({visible:!0,onMobileClose:Z},{children:d}))}))}))}))]})},xa=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Fa=m.span`
    color: ${xt.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>xa(e)}

    &:hover,
    &:focus-visible {
        color: ${xt.Secondary};
        ${({$hoverStyle:e})=>xa(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,wa=m.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$a=t=>{var{ariaLabel:n,content:i,icon:a,underlineStyle:o="default",underlineHoverStyle:s="default"}=t,l=V(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!i;return e(va,Object.assign({},l,{children:r(Fa,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:s,"aria-label":null!=n?n:d?void 0:"More info"},{children:[i,a&&e(wa,Object.assign({$standalone:!d},{children:a}))]}))}))};m.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${xt.Primary};
    }
`;const Da=m.div`
    padding-left: 0.25rem;
    display: inline;
`,Sa=({addon:r,rootNode:t})=>{const{content:n,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=r;return e(Da,{children:e($a,{trigger:"click",id:o,"data-testid":l,popoverContent:n,rootNode:t,zIndex:s,icon:null!=a?a:e(v,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Ba=m.label`
    color: ${Wi["text-subtle"]};
    margin-bottom: 0.5rem;
    display: inline-block;

    ${ha({textSize:"body-md"})}
    font-weight: ${Yi["weight-semibold"]};
`;m(aa.BodySM)`
    color: ${Wi["text-error"]};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const Ea=m(aa.BodySM)`
    color: ${Wi["text-subtler"]};
`,Ca=t=>{var{children:n,addon:i,subtitle:a,"data-testid":o}=t,s=V(t,["children","addon","subtitle","data-testid"]);return r(Ba,Object.assign({},s,{children:[n,i&&i.type&&("popover"===i.type?e(Sa,{addon:i}):null),"string"==typeof a?e(Ea,Object.assign({as:"span","data-testid":o?`${o}-subtitle`:"subtitle"},s,{children:a})):a]}))},Oa=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ka=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Aa=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${ka} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,za=m(Aa)`
    animation-delay: -0.45s;
`,ja=m(Aa)`
    animation-delay: -0.3s;
`,Ha=m(Aa)`
    animation-delay: -0.15s;
`,Ma=m.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=Wi["bg-error"](e),t=Wi["border-error"](e);break;case"success":r=Wi["bg-success"](e),t=Wi["border-success"](e);break;case"warning":default:r=Wi["bg-warning"](e),t=Wi["border-warning"](e);break;case"info":r=Wi["bg-info"](e),t=Wi["border-info"](e);break;case"description":r=Wi["bg-strong"](e),t=Wi["border-strong"](e)}return f`
            background: ${r};
            border-left: 2px solid ${t};
        `}}

    color: ${Wi.text};
    ${e=>"small"===e.$sizeType?ha({textSize:"body-sm"}):ha({textSize:"body-md"})}
`,_a=m.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&f`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=Wi["icon-error"](e);break;case"success":r=Wi["icon-success"](e);break;case"warning":default:r=Wi["icon-warning"](e);break;case"info":r=Wi["icon-info"](e);break;case"description":r=Wi["icon-subtle"](e)}return f`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Ta=m(aa.LinkSM)`
    ${e=>"small"===e.$sizeType?f`
                ${Ni["body-sm-semibold"]}
                margin-top: 0.25rem;
            `:f`
                ${Ni["body-md-semibold"]}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
    }
`,La=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Pa=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Ra=m.button`
    ${e=>"small"===e.$sizeType?f`
                ${Ni["body-sm-semibold"]}
            `:f`
                ${Ni["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Wi["text-primary"]};
`,Ia=m(N)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Wa=m.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return f`
                    grid-column: auto / span 4;
                `;case"full":return f`
                    grid-column: auto / span 8;
                `}}}

    ${U.tablet} {
        grid-column: auto / span 8;
    }

    ${U.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,Ya=m.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${xt.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,Na=m.button`
    ${zt("Body","regular")}
    color: ${xt.Neutral[1]};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,Va=m.span`
    color: ${xt.Neutral[3]};
`,Ja=m((({color:t,className:n,size:i})=>r(Oa,Object.assign({className:n,$size:i,$color:t},{children:[e(Aa,{id:"inner1"}),e(za,{id:"inner2"}),e(ja,{id:"inner3"}),e(Ha,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${xt.Neutral[3]} transparent transparent transparent;
    }
`,Xa=m(P)`
    color: ${xt.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,Ua=m.span`
    color: ${xt.Validation.Orange.Text};
`,qa=m.span`
    ${zt("Body","semibold")}
    color: ${xt.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Za=m((t=>{var{type:n,className:i,children:s,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:h=!1,customIcon:m,maxCollapsedHeight:f}=t,g=V(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[p,b]=o(!1),[y,x]=o(!1),{height:F,ref:w}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,m=e.targetRef,f=e.observerOptions,g=e.onResize,p=a(t),b=a(null),y=null!=m?m:b,v=a(),x=o({width:void 0,height:void 0}),F=x[0],w=x[1];return hi((function(){if(!di()){var e=ui(g,w,c,h);v.current=si((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!p.current&&!di()&&e({width:n,height:i}),p.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,f),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,g,f,y.current]),xn({ref:y},F)}();u((()=>{$()}),[f,F]);const $=()=>{b(!f),x(D())},D=()=>!!f&&F>f;return r(Ma,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":g["data-testid"]},{children:[h&&e(_a,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&m)return m;switch(n){case"success":return e(Y,{});case"warning":return e(W,{});case"error":return e(I,{});case"info":case"description":return e(v,{});default:return null}})()})),r(La,{children:[r(Pa,Object.assign({$maxCollapsedHeight:D()?f:void 0,$showMore:p,$hasActionLink:!!l},{children:[e("div",Object.assign({ref:w},{children:s})),l&&r(Ta,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||e(R,{})]}))]})),y&&r(Ra,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>b(!p)},{children:["Show ",p?"less":"more",e(Ia,{$expanded:p})]}))]})]}))}))`
    margin-top: 0.5rem;
`,Qa=({label:n,value:i,displayWidth:a="full",maskState:s,maskLoadingState:l,maskChar:d="•",maskRange:c,unmaskRange:h,maskRegex:m,disableMaskUnmask:f,alert:g,maskTransformer:p,onMask:v,onUnmask:x,onTryAgain:F})=>{const[w,$]=o(s);u((()=>{$(s)}),[s]);const D=()=>{switch("fail"===l&&F&&F(),w){case"masked":x&&x(),$("unmasked");break;case"unmasked":v&&v(),$("masked")}},S=()=>"string"!=typeof i?i:"masked"===w?yn.maskValue(i,{maskChar:d,maskRange:c,unmaskRange:h,maskRegex:m,maskTransformer:p}):i,B=()=>{switch(l){case"fail":return r(t,{children:[e(Xa,{}),e(Ua,{children:"Error"}),e(qa,{children:"Try again?"})]});case"loading":return r(t,{children:[e(Ja,{}),e(Va,{children:"Retrieving..."})]});default:return r(t,{children:[S(),e(Ya,{children:"masked"===w?e(b,{"data-testid":"masked-icon"}):e(y,{"data-testid":"unmasked-icon"})})]})}};return r(Wa,Object.assign({$widthStyle:a},{children:[e(Ca,{children:n}),"string"!=typeof i?i:w?f?e(Ht.Body,{children:S()}):e(Na,Object.assign({"data-testid":"clickable-label",onClick:D,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:B()})):e(Ht.Body,{children:i}),g&&e(Za,Object.assign({sizeType:"small"},g))]}))},Ga=Object.assign((n=>{var{items:i,title:a,description:o,topSection:s,bottomSection:l,children:d,background:c=!0,stretch:u,onMask:h,onUnmask:m,onTryAgain:f}=n,g=V(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{h&&h(e)},b=e=>()=>{m&&m(e)},y=e=>()=>{f&&f(e)},v=()=>{if(i&&i.length>0){const r=i.map(((r,t)=>e(Qa,Object.assign({},r,{onMask:p(r),onUnmask:b(r),onTryAgain:y(r)}),t)));return e(Nt,Object.assign({$stretch:u},{children:r}))}return null};return e(Rt,Object.assign({$background:c},g,{type:"grid"},{children:d||r(t,{children:[a&&e(It,Object.assign({weight:"semibold",$stretch:u},{children:a})),o&&e(Wt,Object.assign({$stretch:u},{children:o})),s&&e(Yt,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),v(),l&&e(Yt,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:Vt,Item:Qa});export{Ga as UneditableSection};
//# sourceMappingURL=index.js.map
