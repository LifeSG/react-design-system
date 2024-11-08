import{MenuIcon as e}from"@lifesg/react-icons/menu";import r,{css as t,keyframes as n,useTheme as i}from"styled-components";import{jsx as a,jsxs as o,Fragment as s}from"react/jsx-runtime";import l,{useEffect as d,useState as c,useRef as u,forwardRef as g,useImperativeHandle as h}from"react";import{useFloatingTree as m,FloatingTree as b,useFloatingNodeId as f,FloatingNode as p}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as x}from"@lifesg/react-icons/chevron-up";var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D=Array.isArray,$="object"==typeof B&&B&&B.Object===Object&&B,E=$,S="object"==typeof self&&self&&self.Object===Object&&self,C=E||S||Function("return this")(),A=C.Symbol,k=A,O=Object.prototype,z=O.hasOwnProperty,H=O.toString,_=k?k.toStringTag:void 0;var j=function(e){var r=z.call(e,_),t=e[_];try{e[_]=void 0;var n=!0}catch(e){}var i=H.call(e);return n&&(r?e[_]=t:delete e[_]),i},M=Object.prototype.toString;var T=j,I=function(e){return M.call(e)},W=A?A.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?T(e):I(e)};var Y=function(e){return null!=e&&"object"==typeof e},R=L,P=Y;var N=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==R(e)},V=D,J=N,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,r){if(V(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!J(e))||(G.test(e)||!U.test(e)||null!=r&&e in Object(r))};var Q=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Z=L,K=Q;var q,ee=function(e){if(!K(e))return!1;var r=Z(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},re=C["__core-js_shared__"],te=(q=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var ne=function(e){return!!te&&te in e},ie=Function.prototype.toString;var ae=function(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=ee,se=ne,le=Q,de=ae,ce=/^\[object .+?Constructor\]$/,ue=Function.prototype,ge=Object.prototype,he=ue.toString,me=ge.hasOwnProperty,be=RegExp("^"+he.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fe=function(e){return!(!le(e)||se(e))&&(oe(e)?be:ce).test(de(e))},pe=function(e,r){return null==e?void 0:e[r]};var ye=function(e,r){var t=pe(e,r);return fe(t)?t:void 0},Fe=ye(Object,"create"),ve=Fe;var xe=function(){this.__data__=ve?ve(null):{},this.size=0};var Be=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},we=Fe,De=Object.prototype.hasOwnProperty;var $e=function(e){var r=this.__data__;if(we){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return De.call(r,e)?r[e]:void 0},Ee=Fe,Se=Object.prototype.hasOwnProperty;var Ce=Fe;var Ae=xe,ke=Be,Oe=$e,ze=function(e){var r=this.__data__;return Ee?void 0!==r[e]:Se.call(r,e)},He=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ce&&void 0===r?"__lodash_hash_undefined__":r,this};function _e(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}_e.prototype.clear=Ae,_e.prototype.delete=ke,_e.prototype.get=Oe,_e.prototype.has=ze,_e.prototype.set=He;var je=_e;var Me=function(){this.__data__=[],this.size=0};var Te=function(e,r){return e===r||e!=e&&r!=r},Ie=Te;var We=function(e,r){for(var t=e.length;t--;)if(Ie(e[t][0],r))return t;return-1},Le=We,Ye=Array.prototype.splice;var Re=We;var Pe=We;var Ne=We;var Ve=Me,Je=function(e){var r=this.__data__,t=Le(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ye.call(r,t,1),--this.size,!0)},Ue=function(e){var r=this.__data__,t=Re(r,e);return t<0?void 0:r[t][1]},Ge=function(e){return Pe(this.__data__,e)>-1},Xe=function(e,r){var t=this.__data__,n=Ne(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function Qe(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qe.prototype.clear=Ve,Qe.prototype.delete=Je,Qe.prototype.get=Ue,Qe.prototype.has=Ge,Qe.prototype.set=Xe;var Ze=Qe,Ke=ye(C,"Map"),qe=je,er=Ze,rr=Ke;var tr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var nr=function(e,r){var t=e.__data__;return tr(r)?t["string"==typeof r?"string":"hash"]:t.map},ir=nr;var ar=nr;var or=nr;var sr=nr;var lr=function(){this.size=0,this.__data__={hash:new qe,map:new(rr||er),string:new qe}},dr=function(e){var r=ir(this,e).delete(e);return this.size-=r?1:0,r},cr=function(e){return ar(this,e).get(e)},ur=function(e){return or(this,e).has(e)},gr=function(e,r){var t=sr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function hr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}hr.prototype.clear=lr,hr.prototype.delete=dr,hr.prototype.get=cr,hr.prototype.has=ur,hr.prototype.set=gr;var mr=hr,br=mr;function fr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(fr.Cache||br),t}fr.Cache=br;var pr=fr;var yr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fr=/\\(\\)?/g,vr=function(e){var r=pr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(yr,(function(e,t,n,i){r.push(n?i.replace(Fr,"$1"):t||e)})),r}));var xr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Br=D,wr=N,Dr=A?A.prototype:void 0,$r=Dr?Dr.toString:void 0;var Er=function e(r){if("string"==typeof r)return r;if(Br(r))return xr(r,e)+"";if(wr(r))return $r?$r.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Sr=Er;var Cr=D,Ar=X,kr=vr,Or=function(e){return null==e?"":Sr(e)};var zr=function(e,r){return Cr(e)?e:Ar(e,r)?[e]:kr(Or(e))},Hr=N;var _r=function(e){if("string"==typeof e||Hr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},jr=zr,Mr=_r;var Tr=function(e,r){for(var t=0,n=(r=jr(r,e)).length;null!=e&&t<n;)e=e[Mr(r[t++])];return t&&t==n?e:void 0},Ir=Tr;var Wr=function(e,r,t){var n=null==e?void 0:Ir(e,r);return void 0===n?t:n},Lr=w(Wr);const Yr=(e,r,t)=>r?Lr(t,r)||Lr(e,r):t||e,Rr=(e,r)=>{const t=r||e.defaultValue;return Lr(e.collections,t)};var Pr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Pr||(Pr={}));const Nr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vr=e=>r=>{const t=r.theme,n=Rr(Nr,t[Pr.colorScheme]);return t.options&&t.options.color?Yr(n,e,t.options.color):Yr(n,e)},Jr=(Vr("Brand.1"),Vr("Brand.2"),Vr("Brand.3"),Vr("Brand.4"),Vr("Brand.5"),Vr("Brand.6"),Vr("Primary")),Ur=(Vr("PrimaryDark"),Vr("Secondary")),Gr={Light:{1:Vr("Accent.Light.1"),2:Vr("Accent.Light.2"),3:Vr("Accent.Light.3"),4:Vr("Accent.Light.4"),5:Vr("Accent.Light.5"),6:Vr("Accent.Light.6")},Dark:{1:Vr("Accent.Dark.1"),2:Vr("Accent.Dark.2"),3:Vr("Accent.Dark.3")}},Xr={1:Vr("Neutral.1"),2:Vr("Neutral.2"),3:Vr("Neutral.3"),4:Vr("Neutral.4"),5:Vr("Neutral.5"),6:Vr("Neutral.6"),7:Vr("Neutral.7"),8:Vr("Neutral.8")},Qr=(Vr("Validation.Green.Text"),Vr("Validation.Green.Icon"),Vr("Validation.Green.Border"),Vr("Validation.Green.Background"),Vr("Validation.Orange.Text"),Vr("Validation.Orange.Icon"),Vr("Validation.Orange.Border"),Vr("Validation.Orange.Background"),Vr("Validation.Orange.Badge"),Vr("Validation.Red.Text"),Vr("Validation.Red.Icon"),Vr("Validation.Red.Border"),Vr("Validation.Red.Background"),Vr("Validation.Blue.Text"),Vr("Validation.Blue.Icon"),Vr("Validation.Blue.Border"),Vr("Validation.Blue.Background"),{Accent:Vr("Shadow.Accent"),Red:Vr("Shadow.Red"),Elevation:Vr("Shadow.Elevation")}),Zr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Kr=e=>Object.keys(Zr).reduce(((r,t)=>{const n=Zr[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),qr=Kr("max-width");Kr("min-width");function et(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const rt=r.button`
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

        ${({$highlight:e})=>e&&t`
                background-color: ${Xr[7]};
            `}
    }
`,tt=l.forwardRef(((e,r)=>{var{children:t,focusHighlight:n=!0,focusOutline:i="none",type:o="button"}=e,s=et(e,["children","focusHighlight","focusOutline","type"]);return a(rt,Object.assign({ref:r,$outline:i,$highlight:n,type:o},s,{children:t}))})),nt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",it={notCompress:6,compress:4},at=r.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ot=r.nav`
    height: ${e=>e.$compress?it.compress:it.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${nt};

    ${qr.tablet} {
        height: ${3.5}rem;
    }
`,st=r.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${qr.tablet} {
        margin-left: 0rem;
    }
`,lt=r(tt)`
    display: none;

    ${qr.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,dt=r(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Xr[1]};
`,ct=r.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${qr.tablet} {
        height: 1.5rem;
    }

    ${qr.mobileS} {
        height: 1.25rem;
    }
`,ut=r.div`
    display: flex;
    background-color: ${Xr[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${qr.tablet} {
        margin: 0 1rem;
    }

    ${qr.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,gt=r.div`
    position: relative;
    ${e=>{const{$desktopStart:r,$desktopSpan:n,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return t`
            grid-column: ${r||"auto"} / span ${n||1};

            ${qr.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${qr.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,ht=l.forwardRef(((e,r)=>{const{mobileCols:t,tabletCols:n,desktopCols:i}=e,o=et(e,["mobileCols","tabletCols","desktopCols"]);return a(gt,Object.assign({ref:r},(()=>{const e=n||t,r=t,a=mt(i||n||t),o=mt(e),s=mt(r);return{$desktopSpan:a.span,$desktopStart:a.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),mt=e=>{if(Array.isArray(e)&&e.length>1){const[r,t]=e,n=r<=t?r:t,i=r<=t?t:r;let a;return a=i===n?1:i-n,{start:n,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},bt=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="container",type:i="flex",stretch:o=!1}=e,s=et(e,["children","data-testid","type","stretch"]);return a(ft,Object.assign({ref:r,"data-testid":n,$type:i,$stretch:o},s,{children:t}))})),ft=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?t`
                padding: 0 3rem;
            `:t`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${qr.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${qr.tablet} {
        max-width: 720px;
    }
    ${qr.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return t`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${qr.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${qr.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return t`
                    display: flex;
                    flex-direction: column;
                `;default:return t`
                    display: flex;
                `}}}
`,pt=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="section",stretch:i=!1}=e,o=et(e,["children","data-testid","stretch"]);return a(yt,Object.assign({ref:r,"data-testid":n,$stretch:i},o,{children:t}))})),yt=r.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?t`
                ${qr.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:t`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Ft=l.forwardRef(((e,r)=>{const{children:t,"data-testid":n="content",className:i,type:o="flex",stretch:s=!1}=e,l=et(e,["children","data-testid","className","type","stretch"]);return a(pt,Object.assign({ref:r,"data-testid":n,className:i,stretch:s},l,{children:a(bt,Object.assign({"data-testid":`${n}-container`,type:o,"data-id":"container",stretch:s},{children:t}))}))})),vt={Section:pt,Container:bt,Content:Ft,ColDiv:ht},xt=r.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${qr.mobileL} {
        padding: 0;
    }
`,Bt=()=>{d((()=>{e()||r()}),[]);const e=()=>document.getElementById(wt),r=()=>{if(!document.getElementById(wt)){const e=document.createElement("script");e.id=wt,e.type="module",e.src=Dt,document.head.appendChild(e)}};return a(xt,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},wt="lifesg-ds-masthead-script",Dt="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var $t={exports:{}};$t.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",v={};v[F]=f;var x="$isDayjsObject",B=function(e){return e instanceof E||!(!e||!e[x])},w=function e(r,t,n){var i;if(!r)return F;if("string"==typeof r){var a=r.toLowerCase();v[a]&&(i=a),t&&(v[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;v[s]=r,i=s}return!n&&i&&(F=i),i||!n&&F},D=function(e,r){if(B(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new E(t)},$=y;$.l=w,$.i=B,$.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function f(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if($.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return $},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return $.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!$.u(r)||r,c=$.p(e),h=function(e,r){var i=$.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},m=function(e,r){return $.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,f):h(0,f+1);case l:var F=this.$locale().weekStart||0,v=(b<F?b+7:b)-F;return h(n?p-v:p+(6-v),f);case s:case g:return m(y+"Hours",0);case o:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=$.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[h](m),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[$.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=$.p(c),b=function(e){var r=D(h);return $.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(g={},g[a]=r,g[o]=t,g[i]=e,g)[m]||1,p=this.$d.getTime()+n*f;return $.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return $.s(a%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return $.s(r.$y,4,"0");case"M":return s+1;case"MM":return $.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return $.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return $.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(a,o,!0);case"A":return m(a,o,!1);case"m":return String(o);case"mm":return $.s(o,2,"0");case"s":return String(r.$s);case"ss":return $.s(r.$s,2,"0");case"SSS":return $.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,b=this,f=$.p(g),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,F=this-p,v=function(){return $.m(b,p)};switch(f){case u:m=v()/12;break;case d:m=v();break;case c:m=v()/3;break;case l:m=(F-y)/6048e5;break;case s:m=(F-y)/864e5;break;case o:m=F/t;break;case a:m=F/r;break;case i:m=F/e;break;default:m=F}return h?m:$.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return v[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=w(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return $.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),S=E.prototype;return D.prototype=S,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,E,D),e.$i=!0),D},D.locale=w,D.isDayjs=B,D.unix=function(e){return D(1e3*e)},D.en=v[F],D.Ls=v,D.p={},D}();var Et=w($t.exports),St={exports:{}};St.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=o||(i||a?1:h.getDate()),b=i||h.getFullYear(),f=0;i&&!a||(f=a>0?a-1:h.getMonth());var p=s||0,y=l||0,F=d||0,v=c||0;return u?new Date(Date.UTC(b,f,m,p,y,F,v+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,p,y,F,v)):new Date(b,f,m,p,y,F,v)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ct=w(St.exports),At={exports:{}};At.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var kt=w(At.exports),Ot={exports:{}};Ot.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var zt=w(Ot.exports),Ht={exports:{}};Ht.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var _t,jt,Mt,Tt=w(Ht.exports),It={exports:{}},Wt=w(It.exports=(_t={year:0,month:1,day:2,hour:3,minute:4,second:5},jt={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=jt[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),jt[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=_t[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Et.extend(kt),Et.extend(Tt),Et.extend(zt),Et.extend(Ct),Et.extend(Wt),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Et(r).startOf("week");return Lt(t).map((e=>Yt(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Yt(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Et(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Et(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Et(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?Et(n):void 0,i?Et(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(Mt||(Mt={}));const Lt=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Yt=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Rt=[1,3,5,7,8,10,12],Pt=[4,6,9,11];var Nt,Vt,Jt,Ut;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":Rt.includes(a)?Math.min(i,31).toString():Pt.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Et(e,t);return Et(r,t).diff(n,"minute")},e.toDayjs=e=>e?Et(e):Et(),e.addMinutesToTime=(e,r,t="HH:mm")=>Et(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Et(e).isSame(Et(r),t)}(Nt||(Nt={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Et(e).isBefore(n,"day"))||!(!i||!Et(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Et(e).isValid())return e}return""}}(Vt||(Vt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Jt||(Jt={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ut||(Ut={}));const Gt=(e,r,t)=>Lr(t,r)||Lr(e,r),Xt=(e,r)=>{const t=r||e.defaultValue;return Lr(e.collections,t)},Qt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},Zt=e=>r=>{const t=r.theme,n=Xt(Qt,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?Gt(n,e,t.overrides.primitiveColour):n[e]},Kt={"primary-10":Zt("primary-10"),"primary-20":Zt("primary-20"),"primary-30":Zt("primary-30"),"primary-40":Zt("primary-40"),"primary-50":Zt("primary-50"),"primary-60":Zt("primary-60"),"primary-70":Zt("primary-70"),"primary-80":Zt("primary-80"),"primary-90":Zt("primary-90"),"primary-95":Zt("primary-95"),"primary-100":Zt("primary-100"),"secondary-10":Zt("secondary-10"),"secondary-20":Zt("secondary-20"),"secondary-30":Zt("secondary-30"),"secondary-40":Zt("secondary-40"),"secondary-50":Zt("secondary-50"),"secondary-60":Zt("secondary-60"),"secondary-70":Zt("secondary-70"),"secondary-80":Zt("secondary-80"),"secondary-90":Zt("secondary-90"),"secondary-95":Zt("secondary-95"),"secondary-100":Zt("secondary-100"),"neutral-10":Zt("neutral-10"),"neutral-20":Zt("neutral-20"),"neutral-30":Zt("neutral-30"),"neutral-40":Zt("neutral-40"),"neutral-50":Zt("neutral-50"),"neutral-60":Zt("neutral-60"),"neutral-70":Zt("neutral-70"),"neutral-80":Zt("neutral-80"),"neutral-90":Zt("neutral-90"),"neutral-95":Zt("neutral-95"),"neutral-100":Zt("neutral-100"),"success-10":Zt("success-10"),"success-20":Zt("success-20"),"success-30":Zt("success-30"),"success-40":Zt("success-40"),"success-50":Zt("success-50"),"success-60":Zt("success-60"),"success-70":Zt("success-70"),"success-80":Zt("success-80"),"success-90":Zt("success-90"),"success-95":Zt("success-95"),"success-100":Zt("success-100"),"warning-10":Zt("warning-10"),"warning-20":Zt("warning-20"),"warning-30":Zt("warning-30"),"warning-40":Zt("warning-40"),"warning-50":Zt("warning-50"),"warning-60":Zt("warning-60"),"warning-70":Zt("warning-70"),"warning-80":Zt("warning-80"),"warning-90":Zt("warning-90"),"warning-95":Zt("warning-95"),"warning-100":Zt("warning-100"),"error-10":Zt("error-10"),"error-20":Zt("error-20"),"error-30":Zt("error-30"),"error-40":Zt("error-40"),"error-50":Zt("error-50"),"error-60":Zt("error-60"),"error-70":Zt("error-70"),"error-80":Zt("error-80"),"error-90":Zt("error-90"),"error-95":Zt("error-95"),"error-100":Zt("error-100"),"info-10":Zt("info-10"),"info-20":Zt("info-20"),"info-30":Zt("info-30"),"info-40":Zt("info-40"),"info-50":Zt("info-50"),"info-60":Zt("info-60"),"info-70":Zt("info-70"),"info-80":Zt("info-80"),"info-90":Zt("info-90"),"info-95":Zt("info-95"),"info-100":Zt("info-100"),white:Zt("white"),black:Zt("black")},qt={text:Zt("neutral-20"),"text-subtle":Zt("neutral-30"),"text-subtler":Zt("neutral-50"),"text-subtlest":Zt("neutral-60"),"text-primary":Zt("primary-50"),"text-hover":Zt("primary-40"),"text-selected":Zt("primary-50"),"text-selected-hover":Zt("primary-40"),"text-disabled":Zt("neutral-50"),"text-disabled-subtle":Zt("neutral-60"),"text-disabled-subtlest":Zt("neutral-80"),"text-selected-disabled":Zt("neutral-50"),"text-success":Zt("success-40"),"text-warning":Zt("warning-40"),"text-error":Zt("error-40"),"text-info":Zt("info-40"),"text-inverse":Zt("white"),icon:Zt("neutral-50"),"icon-subtle":Zt("neutral-60"),"icon-strongest":Zt("neutral-20"),"icon-primary":Zt("primary-50"),"icon-primary-subtle":Zt("primary-60"),"icon-primary-subtlest":Zt("primary-70"),"icon-hover":Zt("primary-40"),"icon-selected":Zt("primary-50"),"icon-selected-hover":Zt("primary-40"),"icon-disabled":Zt("neutral-50"),"icon-disabled-subtle":Zt("neutral-60"),"icon-selected-disabled":Zt("neutral-60"),"icon-success":Zt("success-50"),"icon-warning":Zt("warning-60"),"icon-error":Zt("error-50"),"icon-error-strong":Zt("error-40"),"icon-info":Zt("info-50"),"icon-inverse":Zt("white"),"icon-primary-inverse":"#FEAB10",border:Zt("neutral-90"),"border-strong":Zt("neutral-70"),"border-stronger":Zt("neutral-30"),"border-primary":Zt("primary-50"),"border-primary-subtle":Zt("primary-60"),"border-hover":Zt("primary-90"),"border-hover-strong":Zt("primary-60"),"border-selected":Zt("primary-50"),"border-selected-subtle":Zt("primary-70"),"border-selected-subtlest":Zt("primary-90"),"border-selected-hover":Zt("primary-40"),"border-focus":Zt("primary-60"),"border-focus-strong":Zt("primary-50"),"border-disabled":Zt("neutral-90"),"border-selected-disabled":Zt("neutral-70"),"border-success":Zt("success-60"),"border-warning":Zt("warning-60"),"border-error":Zt("error-60"),"border-error-focus":Zt("error-60"),"border-error-strong":Zt("error-40"),"border-info":Zt("info-60"),bg:Zt("white"),"bg-strong":Zt("neutral-100"),"bg-stronger":Zt("neutral-95"),"bg-strongest":Zt("neutral-90"),"bg-hover":Zt("primary-95"),"bg-hover-strong":Zt("primary-90"),"bg-hover-subtle":Zt("primary-100"),"bg-hover-neutral":Zt("neutral-95"),"bg-selected":Zt("primary-95"),"bg-selected-hover":Zt("primary-90"),"bg-selected-strong":Zt("primary-90"),"bg-selected-strongest":Zt("primary-90"),"bg-disabled":Zt("neutral-95"),"bg-selected-disabled":Zt("neutral-95"),"bg-success":Zt("success-100"),"bg-success-strong":Zt("success-50"),"bg-warning":Zt("warning-100"),"bg-warning-strong":Zt("warning-50"),"bg-info":Zt("info-100"),"bg-info-strong":Zt("info-50"),"bg-error":Zt("error-100"),"bg-error-strong":Zt("error-50"),"bg-error-strong-hover":Zt("error-30"),"bg-inverse":Zt("neutral-20"),"bg-inverse-subtle":Zt("neutral-30"),"bg-inverse-subtler":Zt("neutral-50"),"bg-inverse-subtlest":Zt("neutral-60"),"bg-primary":Zt("primary-50"),"bg-primary-subtle":Zt("primary-60"),"bg-primary-subtler":Zt("primary-80"),"bg-primary-subtlest":Zt("primary-100"),"bg-primary-hover":Zt("primary-40"),"bg-primary-subtlest-hover":Zt("primary-90"),"bg-primary-subtlest-selected":Zt("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Zt("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":Zt("black"),"focus-ring-inverse":Zt("white")},en={collections:{lifesg:qt,bookingsg:qt,rbs:qt,mylegacy:qt,ccube:qt},defaultValue:"lifesg"},rn=e=>r=>{const t=r.theme,n=Xt(en,t.colourScheme),i=t.overrides&&t.overrides.semanticColour?Gt(n,e,t.overrides.semanticColour):n[e];return"function"==typeof i?i(r):i},tn={text:rn("text"),"text-subtle":rn("text-subtle"),"text-subtler":rn("text-subtler"),"text-subtlest":rn("text-subtlest"),"text-primary":rn("text-primary"),"text-hover":rn("text-hover"),"text-selected":rn("text-selected"),"text-selected-hover":rn("text-selected-hover"),"text-disabled":rn("text-disabled"),"text-disabled-subtle":rn("text-disabled-subtle"),"text-disabled-subtlest":rn("text-disabled-subtlest"),"text-selected-disabled":rn("text-selected-disabled"),"text-success":rn("text-success"),"text-warning":rn("text-warning"),"text-error":rn("text-error"),"text-info":rn("text-info"),"text-inverse":rn("text-inverse"),icon:rn("icon"),"icon-subtle":rn("icon-subtle"),"icon-strongest":rn("icon-strongest"),"icon-primary":rn("icon-primary"),"icon-primary-subtle":rn("icon-primary-subtle"),"icon-primary-subtlest":rn("icon-primary-subtlest"),"icon-hover":rn("icon-hover"),"icon-selected":rn("icon-selected"),"icon-selected-hover":rn("icon-selected-hover"),"icon-disabled":rn("icon-disabled"),"icon-disabled-subtle":rn("icon-disabled-subtle"),"icon-selected-disabled":rn("icon-selected-disabled"),"icon-success":rn("icon-success"),"icon-warning":rn("icon-warning"),"icon-error":rn("icon-error"),"icon-error-strong":rn("icon-error-strong"),"icon-info":rn("icon-info"),"icon-inverse":rn("icon-inverse"),"icon-primary-inverse":rn("icon-primary-inverse"),border:rn("border"),"border-strong":rn("border-strong"),"border-stronger":rn("border-stronger"),"border-primary":rn("border-primary"),"border-primary-subtle":rn("border-primary-subtle"),"border-hover":rn("border-hover"),"border-hover-strong":rn("border-hover-strong"),"border-selected":rn("border-selected"),"border-selected-subtle":rn("border-selected-subtle"),"border-selected-subtlest":rn("border-selected-subtlest"),"border-selected-hover":rn("border-selected-hover"),"border-focus":rn("border-focus"),"border-focus-strong":rn("border-focus-strong"),"border-disabled":rn("border-disabled"),"border-selected-disabled":rn("border-selected-disabled"),"border-success":rn("border-success"),"border-warning":rn("border-warning"),"border-error":rn("border-error"),"border-error-focus":rn("border-error-focus"),"border-error-strong":rn("border-error-strong"),"border-info":rn("border-info"),bg:rn("bg"),"bg-strong":rn("bg-strong"),"bg-stronger":rn("bg-stronger"),"bg-strongest":rn("bg-strongest"),"bg-hover":rn("bg-hover"),"bg-hover-strong":rn("bg-hover-strong"),"bg-hover-subtle":rn("bg-hover-subtle"),"bg-hover-neutral":rn("bg-hover-neutral"),"bg-selected":rn("bg-selected"),"bg-selected-hover":rn("bg-selected-hover"),"bg-selected-strong":rn("bg-selected-strong"),"bg-selected-strongest":rn("bg-selected-strongest"),"bg-disabled":rn("bg-disabled"),"bg-selected-disabled":rn("bg-selected-disabled"),"bg-success":rn("bg-success"),"bg-success-strong":rn("bg-success-strong"),"bg-warning":rn("bg-warning"),"bg-warning-strong":rn("bg-warning-strong"),"bg-info":rn("bg-info"),"bg-info-strong":rn("bg-info-strong"),"bg-error":rn("bg-error"),"bg-error-strong":rn("bg-error-strong"),"bg-error-strong-hover":rn("bg-error-strong-hover"),"bg-inverse":rn("bg-inverse"),"bg-inverse-subtle":rn("bg-inverse-subtle"),"bg-inverse-subtler":rn("bg-inverse-subtler"),"bg-inverse-subtlest":rn("bg-inverse-subtlest"),"bg-primary":rn("bg-primary"),"bg-primary-subtle":rn("bg-primary-subtle"),"bg-primary-subtler":rn("bg-primary-subtler"),"bg-primary-subtlest":rn("bg-primary-subtlest"),"bg-primary-hover":rn("bg-primary-hover"),"bg-primary-subtlest-hover":rn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":rn("bg-primary-subtlest-selected"),"bg-available":rn("bg-available"),"overlay-strong":rn("overlay-strong"),"overlay-subtle":rn("overlay-subtle"),hyperlink:rn("hyperlink"),"hyperlink-inverse":rn("hyperlink-inverse"),"focus-ring":rn("focus-ring"),"focus-ring-inverse":rn("focus-ring-inverse")},nn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},an=e=>r=>{var t;const n=r.theme,i=Xt(nn,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Gt(i,e,n.overrides.breakpoint):i[e],a},on={"xxs-min":an("xxs-min"),"xxs-max":an("xxs-max"),"xs-min":an("xs-min"),"xs-max":an("xs-max"),"sm-min":an("sm-min"),"sm-max":an("sm-max"),"md-min":an("md-min"),"md-max":an("md-max"),"lg-min":an("lg-min"),"lg-max":an("lg-max"),"xl-min":an("xl-min"),"xl-max":an("xl-max"),"xxl-min":an("xxl-min"),"xxs-column":an("xxs-column"),"xs-column":an("xs-column"),"sm-column":an("sm-column"),"md-column":an("md-column"),"lg-column":an("lg-column"),"xl-column":an("xl-column"),"xxl-column":an("xxl-column"),"xxs-gutter":an("xxs-gutter"),"xs-gutter":an("xs-gutter"),"sm-gutter":an("sm-gutter"),"md-gutter":an("md-gutter"),"lg-gutter":an("lg-gutter"),"xl-gutter":an("xl-gutter"),"xxl-gutter":an("xxl-gutter"),"xxs-margin":an("xxs-margin"),"xs-margin":an("xs-margin"),"sm-margin":an("sm-margin"),"md-margin":an("md-margin"),"lg-margin":an("lg-margin"),"xl-margin":an("xl-margin"),"xxl-margin":an("xxl-margin")},sn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=on["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),ln={MaxWidth:sn("max-width"),MinWidth:sn("min-width")},dn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},cn={collections:{lifesg:dn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:dn,mylegacy:dn,ccube:dn},defaultValue:"lifesg"},un=e=>r=>{const t=r.theme,n=Xt(cn,t.fontScheme);return t.overrides&&t.overrides.fontSpec?Gt(n,e,t.overrides.fontSpec):n[e]},gn=(e,r,n,i)=>t`
    font-family: ${un("font-family")};
    font-size: ${un(e)};
    font-weight: ${un(r)};
    line-height: ${un(n)};
    letter-spacing: ${un(i)};
`,hn={"header-xxl-light":gn("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":gn("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":gn("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":gn("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":gn("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":gn("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":gn("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":gn("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":gn("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":gn("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":gn("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":gn("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":gn("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":gn("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":gn("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":gn("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":gn("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":gn("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":gn("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":gn("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":gn("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":gn("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":gn("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":gn("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":gn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":gn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":gn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":gn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":gn("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":gn("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":gn("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":gn("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":gn("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":gn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":gn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":gn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":gn("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":gn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":gn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":gn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":gn("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":gn("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},mn={collections:{lifesg:hn,bookingsg:hn,rbs:hn,mylegacy:hn,ccube:hn},defaultValue:"lifesg"},bn=e=>r=>{const t=r.theme,n=Xt(mn,t.fontScheme),i=t.overrides&&t.overrides.font?Gt(n,e,t.overrides.font):n[e];return"function"==typeof i?i(r):i},fn={"header-xxl-light":bn("header-xxl-light"),"header-xxl-regular":bn("header-xxl-regular"),"header-xxl-semibold":bn("header-xxl-semibold"),"header-xxl-bold":bn("header-xxl-bold"),"header-xl-light":bn("header-xl-light"),"header-xl-regular":bn("header-xl-regular"),"header-xl-semibold":bn("header-xl-semibold"),"header-xl-bold":bn("header-xl-bold"),"header-lg-light":bn("header-lg-light"),"header-lg-regular":bn("header-lg-regular"),"header-lg-semibold":bn("header-lg-semibold"),"header-lg-bold":bn("header-lg-bold"),"header-md-light":bn("header-md-light"),"header-md-regular":bn("header-md-regular"),"header-md-semibold":bn("header-md-semibold"),"header-md-bold":bn("header-md-bold"),"header-sm-light":bn("header-sm-light"),"header-sm-regular":bn("header-sm-regular"),"header-sm-semibold":bn("header-sm-semibold"),"header-sm-bold":bn("header-sm-bold"),"header-xs-light":bn("header-xs-light"),"header-xs-regular":bn("header-xs-regular"),"header-xs-semibold":bn("header-xs-semibold"),"header-xs-bold":bn("header-xs-bold"),"body-baseline-light":bn("body-baseline-light"),"body-baseline-regular":bn("body-baseline-regular"),"body-baseline-semibold":bn("body-baseline-semibold"),"body-baseline-bold":bn("body-baseline-bold"),"body-md-light":bn("body-md-light"),"body-md-regular":bn("body-md-regular"),"body-md-semibold":bn("body-md-semibold"),"body-md-bold":bn("body-md-bold"),"body-sm-light":bn("body-sm-light"),"body-sm-regular":bn("body-sm-regular"),"body-sm-semibold":bn("body-sm-semibold"),"body-sm-bold":bn("body-sm-bold"),"body-xs-light":bn("body-xs-light"),"body-xs-regular":bn("body-xs-regular"),"body-xs-semibold":bn("body-xs-semibold"),"body-xs-bold":bn("body-xs-bold"),"formlabel-baseline-semibold":bn("formlabel-baseline-semibold"),"formlabel-lg-semibold":bn("formlabel-lg-semibold")},pn=Object.assign(Object.assign({},tn),{Primitive:Kt}),yn=fn,Fn=ln,vn=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return t`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,xn=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?pn["overlay-subtle"]:pn["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=t`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=t`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=t`
                transition: none;
            `),r}}
`;var Bn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bn||(Bn={}));const wn=({show:e=!1,rootId:r,onOverlayClick:t,children:n,backgroundOpacity:i,backgroundBlur:o=!0,disableTransition:s=!1,enableOverlayClick:g=!1,zIndex:h,id:b})=>{const[F,v]=c(null),[x,B]=c(),[w]=c((()=>Jt.generate())),D=f(),$=u(),E=u(null),S=n&&l.cloneElement(n,{ref:E}),C=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",A=(null!=h?h:x)?99999:99998;(e=>{const r=m();d((()=>{if(!r)return;const t={zIndex:e};r.events.emit(Bn.Change,t)}),[r,e]),d((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(Bn.Change,t)};return null==r||r.events.on(Bn.Ready,t),()=>null==r?void 0:r.events.off(Bn.Ready,t)}),[r,e])})(A),d((()=>(H(),v(O()),()=>{T(),j().length<1&&_("remove")})),[]),d((()=>{if(e){const e=z();k(e),M();const r=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(r)}{T();const e=setTimeout((()=>{j().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[e]);const k=e=>{$.current=e,B(e)},O=()=>document&&r?document.getElementById(r):document?document.body:null,z=()=>j().length>0,H=()=>{if(!document.getElementById($n)){const e=document.createElement("style");e.id=$n;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${En} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${En}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const r=document.body.classList.contains(En);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(En):document.body.classList.add(En)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},I=e=>{var r;const n=null===(r=E.current)||void 0===r?void 0:r.firstChild;n&&n.contains(e.target)||t&&g&&(e.preventDefault(),t())};return F?y.createPortal(a(vn,Object.assign({id:C,"data-testid":C,$show:e,$zIndex:A},{children:n&&a(p,Object.assign({id:D},{children:a(xn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:x,$backgroundBlur:o,$disableTransition:s,onClick:I},{children:S}))}))})),F):null},Dn=e=>a(b,{children:a(wn,Object.assign({},e))}),$n="lifesg-ds-overlay-stylesheet",En="lifesg-ds-overlay-open",Sn=r.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${nt};
        object-fit: contain;
    }
`;const Cn=({src:e,alt:r,className:t,"data-testid":n})=>a("img",{src:e,alt:r||"",className:t,"data-testid":n,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),An=({resources:e,onClick:r,"data-id":t,"data-testid":n="navbar-brand",type:i})=>a(Sn,Object.assign({role:"link",onClick:e=>{r&&r(e,i)},tabIndex:0,"data-id":t,"data-testid":n,$type:i},{children:a(Cn,{src:e.logoSrc,alt:e.brandName})})),kn=r.div`
    display: none;

    ${qr.tablet} {
        display: flex;
    }
`,On=r.div`
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
    ${e=>{const r=`${e.$viewHeight}px`||"1vh";return t`
            height: calc(${r} * 100);
        `}}

	${qr.tablet} {
        width: 75%;
    }

    ${qr.mobileL} {
        width: 100%;
    }
`,zn=r.div`
    display: flex;
    flex-direction: column;
`,Hn=r.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,_n=r(F)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,jn=r(tt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Xr[1]};

    :active,
    :focus {
        color: ${Jr};
    }
`,Mn=l.forwardRef(((e,r)=>{const{show:t,resources:n,children:i,hideNavBranding:l,onClose:u,onBrandClick:g}=e,[h,m]=c(0),{primary:b,secondary:f}=n;d((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return a(kn,Object.assign({ref:r,"data-testid":"drawer"},{children:a(On,Object.assign({$show:t,$viewHeight:h},{children:o(zn,{children:[o(Hn,{children:[a(ct,Object.assign({"data-id":"drawer-brand-container"},{children:!l&&o(s,{children:[a(An,{resources:b,compress:!0,onClick:g,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),f&&o(s,{children:[a(ut,{}),a(An,{resources:f,compress:!0,onClick:g,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),a(jn,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:a(_n,{})}))]}),i]})}))}))})),Tn={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},In={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},Wn={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},Ln={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}};var Yn=function(e,r,t,n){for(var i=e.length,a=t+(n?1:-1);n?a--:++a<i;)if(r(e[a],a,e))return a;return-1},Rn=Ze;var Pn=Ze,Nn=Ke,Vn=mr;var Jn=Ze,Un=function(){this.__data__=new Rn,this.size=0},Gn=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t},Xn=function(e){return this.__data__.get(e)},Qn=function(e){return this.__data__.has(e)},Zn=function(e,r){var t=this.__data__;if(t instanceof Pn){var n=t.__data__;if(!Nn||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Vn(n)}return t.set(e,r),this.size=t.size,this};function Kn(e){var r=this.__data__=new Jn(e);this.size=r.size}Kn.prototype.clear=Un,Kn.prototype.delete=Gn,Kn.prototype.get=Xn,Kn.prototype.has=Qn,Kn.prototype.set=Zn;var qn=Kn;var ei=mr,ri=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ti=function(e){return this.__data__.has(e)};function ni(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new ei;++r<t;)this.add(e[r])}ni.prototype.add=ni.prototype.push=ri,ni.prototype.has=ti;var ii=ni,ai=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},oi=function(e,r){return e.has(r)};var si=function(e,r,t,n,i,a){var o=1&t,s=e.length,l=r.length;if(s!=l&&!(o&&l>s))return!1;var d=a.get(e),c=a.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new ii:void 0;for(a.set(e,r),a.set(r,e);++u<s;){var m=e[u],b=r[u];if(n)var f=o?n(b,m,u,r,e,a):n(m,b,u,e,r,a);if(void 0!==f){if(f)continue;g=!1;break}if(h){if(!ai(r,(function(e,r){if(!oi(h,r)&&(m===e||i(m,e,t,n,a)))return h.push(r)}))){g=!1;break}}else if(m!==b&&!i(m,b,t,n,a)){g=!1;break}}return a.delete(e),a.delete(r),g};var li=C.Uint8Array,di=Te,ci=si,ui=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t},gi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},hi=A?A.prototype:void 0,mi=hi?hi.valueOf:void 0;var bi=function(e,r,t,n,i,a,o){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!a(new li(e),new li(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return di(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=ui;case"[object Set]":var l=1&n;if(s||(s=gi),e.size!=r.size&&!l)return!1;var d=o.get(e);if(d)return d==r;n|=2,o.set(e,r);var c=ci(s(e),s(r),n,i,a,o);return o.delete(e),c;case"[object Symbol]":if(mi)return mi.call(e)==mi.call(r)}return!1};var fi=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},pi=D;var yi=function(e,r,t){var n=r(e);return pi(e)?n:fi(n,t(e))};var Fi=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,a=[];++t<n;){var o=e[t];r(o,t,e)&&(a[i++]=o)}return a},vi=function(){return[]},xi=Object.prototype.propertyIsEnumerable,Bi=Object.getOwnPropertySymbols,wi=Bi?function(e){return null==e?[]:(e=Object(e),Fi(Bi(e),(function(r){return xi.call(e,r)})))}:vi;var Di=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},$i=L,Ei=Y;var Si=function(e){return Ei(e)&&"[object Arguments]"==$i(e)},Ci=Y,Ai=Object.prototype,ki=Ai.hasOwnProperty,Oi=Ai.propertyIsEnumerable,zi=Si(function(){return arguments}())?Si:function(e){return Ci(e)&&ki.call(e,"callee")&&!Oi.call(e,"callee")},Hi={exports:{}};var _i=function(){return!1};!function(e,r){var t=C,n=_i,i=r&&!r.nodeType&&r,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?t.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Hi,Hi.exports);var ji=Hi.exports,Mi=/^(?:0|[1-9]\d*)$/;var Ti=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Mi.test(e))&&e>-1&&e%1==0&&e<r};var Ii=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Wi=L,Li=Ii,Yi=Y,Ri={};Ri["[object Float32Array]"]=Ri["[object Float64Array]"]=Ri["[object Int8Array]"]=Ri["[object Int16Array]"]=Ri["[object Int32Array]"]=Ri["[object Uint8Array]"]=Ri["[object Uint8ClampedArray]"]=Ri["[object Uint16Array]"]=Ri["[object Uint32Array]"]=!0,Ri["[object Arguments]"]=Ri["[object Array]"]=Ri["[object ArrayBuffer]"]=Ri["[object Boolean]"]=Ri["[object DataView]"]=Ri["[object Date]"]=Ri["[object Error]"]=Ri["[object Function]"]=Ri["[object Map]"]=Ri["[object Number]"]=Ri["[object Object]"]=Ri["[object RegExp]"]=Ri["[object Set]"]=Ri["[object String]"]=Ri["[object WeakMap]"]=!1;var Pi=function(e){return Yi(e)&&Li(e.length)&&!!Ri[Wi(e)]};var Ni=function(e){return function(r){return e(r)}},Vi={exports:{}};!function(e,r){var t=$,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&t.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Vi,Vi.exports);var Ji=Vi.exports,Ui=Pi,Gi=Ni,Xi=Ji&&Ji.isTypedArray,Qi=Xi?Gi(Xi):Ui,Zi=Di,Ki=zi,qi=D,ea=ji,ra=Ti,ta=Qi,na=Object.prototype.hasOwnProperty;var ia=function(e,r){var t=qi(e),n=!t&&Ki(e),i=!t&&!n&&ea(e),a=!t&&!n&&!i&&ta(e),o=t||n||i||a,s=o?Zi(e.length,String):[],l=s.length;for(var d in e)!r&&!na.call(e,d)||o&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||ra(d,l))||s.push(d);return s},aa=Object.prototype;var oa=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||aa)};var sa=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),la=oa,da=sa,ca=Object.prototype.hasOwnProperty;var ua=ee,ga=Ii;var ha=ia,ma=function(e){if(!la(e))return da(e);var r=[];for(var t in Object(e))ca.call(e,t)&&"constructor"!=t&&r.push(t);return r},ba=function(e){return null!=e&&ga(e.length)&&!ua(e)};var fa=function(e){return ba(e)?ha(e):ma(e)},pa=yi,ya=wi,Fa=fa;var va=function(e){return pa(e,Fa,ya)},xa=Object.prototype.hasOwnProperty;var Ba=function(e,r,t,n,i,a){var o=1&t,s=va(e),l=s.length;if(l!=va(r).length&&!o)return!1;for(var d=l;d--;){var c=s[d];if(!(o?c in r:xa.call(r,c)))return!1}var u=a.get(e),g=a.get(r);if(u&&g)return u==r&&g==e;var h=!0;a.set(e,r),a.set(r,e);for(var m=o;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=o?n(f,b,c,r,e,a):n(b,f,c,e,r,a);if(!(void 0===p?b===f||i(b,f,t,n,a):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,F=r.constructor;y==F||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof F&&F instanceof F||(h=!1)}return a.delete(e),a.delete(r),h},wa=ye(C,"DataView"),Da=Ke,$a=ye(C,"Promise"),Ea=ye(C,"Set"),Sa=ye(C,"WeakMap"),Ca=L,Aa=ae,ka="[object Map]",Oa="[object Promise]",za="[object Set]",Ha="[object WeakMap]",_a="[object DataView]",ja=Aa(wa),Ma=Aa(Da),Ta=Aa($a),Ia=Aa(Ea),Wa=Aa(Sa),La=Ca;(wa&&La(new wa(new ArrayBuffer(1)))!=_a||Da&&La(new Da)!=ka||$a&&La($a.resolve())!=Oa||Ea&&La(new Ea)!=za||Sa&&La(new Sa)!=Ha)&&(La=function(e){var r=Ca(e),t="[object Object]"==r?e.constructor:void 0,n=t?Aa(t):"";if(n)switch(n){case ja:return _a;case Ma:return ka;case Ta:return Oa;case Ia:return za;case Wa:return Ha}return r});var Ya=qn,Ra=si,Pa=bi,Na=Ba,Va=La,Ja=D,Ua=ji,Ga=Qi,Xa="[object Arguments]",Qa="[object Array]",Za="[object Object]",Ka=Object.prototype.hasOwnProperty;var qa=function(e,r,t,n,i,a){var o=Ja(e),s=Ja(r),l=o?Qa:Va(e),d=s?Qa:Va(r),c=(l=l==Xa?Za:l)==Za,u=(d=d==Xa?Za:d)==Za,g=l==d;if(g&&Ua(e)){if(!Ua(r))return!1;o=!0,c=!1}if(g&&!c)return a||(a=new Ya),o||Ga(e)?Ra(e,r,t,n,i,a):Pa(e,r,l,t,n,i,a);if(!(1&t)){var h=c&&Ka.call(e,"__wrapped__"),m=u&&Ka.call(r,"__wrapped__");if(h||m){var b=h?e.value():e,f=m?r.value():r;return a||(a=new Ya),i(b,f,t,n,a)}}return!!g&&(a||(a=new Ya),Na(e,r,t,n,i,a))},eo=Y;var ro=function e(r,t,n,i,a){return r===t||(null==r||null==t||!eo(r)&&!eo(t)?r!=r&&t!=t:qa(r,t,n,i,e,a))},to=qn,no=ro;var io=Q;var ao=function(e){return e==e&&!io(e)},oo=ao,so=fa;var lo=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},co=function(e,r,t,n){var i=t.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=t[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=t[i])[0],d=e[l],c=s[1];if(o&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new to;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?no(c,d,3,n,u):g))return!1}}return!0},uo=function(e){for(var r=so(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,oo(i)]}return r},go=lo;var ho=zr,mo=zi,bo=D,fo=Ti,po=Ii,yo=_r;var Fo=function(e,r){return null!=e&&r in Object(e)},vo=function(e,r,t){for(var n=-1,i=(r=ho(r,e)).length,a=!1;++n<i;){var o=yo(r[n]);if(!(a=null!=e&&t(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&po(i)&&fo(o,i)&&(bo(e)||mo(e))};var xo=ro,Bo=Wr,wo=function(e,r){return null!=e&&vo(e,r,Fo)},Do=X,$o=ao,Eo=lo,So=_r;var Co=Tr;var Ao=function(e){return function(r){return null==r?void 0:r[e]}},ko=function(e){return function(r){return Co(r,e)}},Oo=X,zo=_r;var Ho=function(e){var r=uo(e);return 1==r.length&&r[0][2]?go(r[0][0],r[0][1]):function(t){return t===e||co(t,e,r)}},_o=function(e,r){return Do(e)&&$o(r)?Eo(So(e),r):function(t){var n=Bo(t,e);return void 0===n&&n===r?wo(t,e):xo(r,n,3)}},jo=function(e){return e},Mo=D,To=function(e){return Oo(e)?Ao(zo(e)):ko(e)};var Io=/\s/;var Wo=function(e){for(var r=e.length;r--&&Io.test(e.charAt(r)););return r},Lo=/^\s+/;var Yo=function(e){return e?e.slice(0,Wo(e)+1).replace(Lo,""):e},Ro=Q,Po=N,No=/^[-+]0x[0-9a-f]+$/i,Vo=/^0b[01]+$/i,Jo=/^0o[0-7]+$/i,Uo=parseInt;var Go=function(e){if("number"==typeof e)return e;if(Po(e))return NaN;if(Ro(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ro(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Yo(e);var t=Vo.test(e);return t||Jo.test(e)?Uo(e.slice(2),t?2:8):No.test(e)?NaN:+e},Xo=1/0;var Qo=function(e){return e?(e=Go(e))===Xo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Zo=Yn,Ko=function(e){return"function"==typeof e?e:null==e?jo:"object"==typeof e?Mo(e)?_o(e[0],e[1]):Ho(e):To(e)},qo=function(e){var r=Qo(e),t=r%1;return r==r?t?r-t:r:0},es=Math.max;var rs=w((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:qo(t);return i<0&&(i=es(n+i,0)),Zo(e,Ko(r),i)}));const ts=r.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,ns=n`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,is=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${ns} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,as=r(is)`
    animation-delay: -0.45s;
`,os=r(is)`
    animation-delay: -0.3s;
`,ss=r(is)`
    animation-delay: -0.15s;
`,ls=r.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return t`
                    background-color: ${pn.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?pn["border-error-strong"]:pn["border-primary"]};

                    color: ${e.$buttonIsDanger?pn["text-error"]:pn["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${pn["bg-hover-neutral"]};
                    }
                `;case"light":return t`
                    background-color: ${pn.bg};
                    border: 1px solid ${pn.border};

                    color: ${e.$buttonIsDanger?pn["text-error"]:pn["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${pn["bg-hover-neutral"]};
                    }
                `;case"link":return t`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?pn["text-error"]:pn["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${pn["bg-hover-neutral"]};
                    }
                `;case"disabled":return t`
                    background-color: ${pn["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${pn["text-disabled"]};
                `;default:return t`
                    background-color: ${e.$buttonIsDanger?pn["bg-error-strong"]:pn["bg-primary"]};
                    border: 1px solid transparent;

                    ${Fn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${pn["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?pn["bg-error-strong-hover"]:pn["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return t`
                    height: 2.5rem;
                    ${yn["body-md-semibold"]}

                    ${Fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return t`
                    height: 4rem;
                    ${yn["header-md-semibold"]}

                    ${Fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return t`
                    height: 3rem;
                    ${yn["header-xs-semibold"]}

                    ${Fn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,ds=r((({color:e,className:r,size:t})=>o(ts,Object.assign({className:r,$size:t,$color:e},{children:[a(is,{id:"inner1"}),a(as,{id:"inner2"}),a(os,{id:"inner3"}),a(ss,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,cs={Default:l.forwardRef(((e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=et(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return o(ls,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(ds,{}),a("span",{children:t})]}))})),Small:l.forwardRef(((e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=et(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return o(ls,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(ds,{}),a("span",{children:t})]}))})),Large:l.forwardRef(((e,r)=>{const{children:t,disabled:n=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,d=et(e,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:n?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return o(ls,Object.assign({ref:r,"data-testid":d["data-testid"]||"button",disabled:n},c,d,{children:[i&&a(ds,{}),a("span",{children:t})]}))}))},us={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},gs={D1:{fontFamily:us.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:us.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:us.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:us.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:us.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:us.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:us.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:us.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:us.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:us.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:us.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:us.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:us.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:us.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},hs={D1:{fontFamily:us.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:us.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:us.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:us.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:us.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:us.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:us.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:us.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:us.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ms={collections:{base:gs,oneservice:{D1:{fontFamily:us.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:us.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:us.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:us.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:us.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:us.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:us.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:us.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:us.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:us.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:us.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:us.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:us.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:us.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:hs},defaultValue:"base"},bs=e=>r=>{const t=r.theme,n=Rr(ms,t[Pr.textStyleScheme]);return t.options&&t.options.textStyle?Yr(n,e,t.options.textStyle):Yr(n,e)},fs={D1:{fontFamily:bs("D1.fontFamily"),fontSize:bs("D1.fontSize"),fontWeight:bs("D1.fontWeight"),lineHeight:bs("D1.lineHeight"),letterSpacing:bs("D1.letterSpacing")},D2:{fontFamily:bs("D2.fontFamily"),fontSize:bs("D2.fontSize"),fontWeight:bs("D2.fontWeight"),lineHeight:bs("D2.lineHeight"),letterSpacing:bs("D2.letterSpacing")},D3:{fontFamily:bs("D3.fontFamily"),fontSize:bs("D3.fontSize"),fontWeight:bs("D3.fontWeight"),lineHeight:bs("D3.lineHeight"),letterSpacing:bs("D3.letterSpacing")},D4:{fontFamily:bs("D4.fontFamily"),fontSize:bs("D4.fontSize"),fontWeight:bs("D4.fontWeight"),lineHeight:bs("D4.lineHeight"),letterSpacing:bs("D4.letterSpacing")},DBody:{fontFamily:bs("DBody.fontFamily"),fontSize:bs("DBody.fontSize"),fontWeight:bs("DBody.fontWeight"),lineHeight:bs("DBody.lineHeight"),letterSpacing:bs("DBody.letterSpacing")},H1:{fontFamily:bs("H1.fontFamily"),fontSize:bs("H1.fontSize"),fontWeight:bs("H1.fontWeight"),lineHeight:bs("H1.lineHeight"),letterSpacing:bs("H1.letterSpacing")},H2:{fontFamily:bs("H2.fontFamily"),fontSize:bs("H2.fontSize"),fontWeight:bs("H2.fontWeight"),lineHeight:bs("H2.lineHeight"),letterSpacing:bs("H2.letterSpacing")},H3:{fontFamily:bs("H3.fontFamily"),fontSize:bs("H3.fontSize"),fontWeight:bs("H3.fontWeight"),lineHeight:bs("H3.lineHeight"),letterSpacing:bs("H3.letterSpacing")},H4:{fontFamily:bs("H4.fontFamily"),fontSize:bs("H4.fontSize"),fontWeight:bs("H4.fontWeight"),lineHeight:bs("H4.lineHeight"),letterSpacing:bs("H4.letterSpacing")},H5:{fontFamily:bs("H5.fontFamily"),fontSize:bs("H5.fontSize"),fontWeight:bs("H5.fontWeight"),lineHeight:bs("H5.lineHeight"),letterSpacing:bs("H5.letterSpacing")},H6:{fontFamily:bs("H6.fontFamily"),fontSize:bs("H6.fontSize"),fontWeight:bs("H6.fontWeight"),lineHeight:bs("H6.lineHeight"),letterSpacing:bs("H6.letterSpacing")},Body:{fontFamily:bs("Body.fontFamily"),fontSize:bs("Body.fontSize"),fontWeight:bs("Body.fontWeight"),lineHeight:bs("Body.lineHeight"),letterSpacing:bs("Body.letterSpacing")},BodySmall:{fontFamily:bs("BodySmall.fontFamily"),fontSize:bs("BodySmall.fontSize"),fontWeight:bs("BodySmall.fontWeight"),lineHeight:bs("BodySmall.lineHeight"),letterSpacing:bs("BodySmall.letterSpacing")},XSmall:{fontFamily:bs("XSmall.fontFamily"),fontSize:bs("XSmall.fontSize"),fontWeight:bs("XSmall.fontWeight"),lineHeight:bs("XSmall.lineHeight"),letterSpacing:bs("XSmall.letterSpacing")}},ps=[us.OpenSans,us.PlusJakartaSans],ys=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Fs=(e,r)=>n=>{var i;const a=fs[e].fontFamily(n),o=fs[e].fontWeight(n),s=ps.find((e=>Object.values(e).includes(a)));return s?t`
                font-family: ${ys(s,r)||ys(s,o)||a};
                font-weight: normal !important;
            `:t`
            font-family: ${a};
            font-weight: ${null!==(i=vs(r)||o)&&void 0!==i?i:"normal"};
        `},vs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xs=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Bs=(e,r,n=!1)=>i=>{const a=fs[e],o=a.fontSize(i);return t`
            ${Fs(e,r)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${t`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ws=(e=!1,r=!1,n=void 0)=>r?t`
            display: block;
            ${xs(n)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${xs(n)}
        `;var Ds;!function(e){e.D1=r.h1`
        ${e=>t`
                ${Bs("D1",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>t`
                ${Bs("D2",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>t`
                ${Bs("D3",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>t`
                ${Bs("D4",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>t`
                ${Bs("DBody",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>t`
                ${Bs("H1",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>t`
                ${Bs("H2",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>t`
                ${Bs("H3",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>t`
                ${Bs("H4",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>t`
                ${Bs("H5",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>t`
                ${Bs("H6",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>t`
                ${Bs("Body",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>t`
                ${Bs("BodySmall",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>t`
                ${Bs("XSmall",e.weight,e.paragraph)}
                color: ${Xr[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ss(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ss(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ds||(Ds={}));const $s=r.a`
    ${e=>t`
            ${Bs(e.textStyle,e.weight)}
            color: ${Jr};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ur};

                svg {
                    color: ${Ur};
                }
            }
        `}
`,Es=r(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ss=e=>{var{external:r=!1,children:t}=e,n=et(e,["external","children"]);return o($s,Object.assign({},n,{children:[t,r&&a(Es,{})]}))};var Cs;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Cs||(Cs={}));const As=r.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${qr.tablet} {
        display: none;
    }
`,ks=r.ul`
    display: none;

    ${qr.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,Os=r.ul`
    display: none;
    list-style: none;

    ${qr.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${qr.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,zs=r.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${qr.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${qr.mobileL} {
        ${e=>{if(e.$mobile)return t`
                    padding: 0 1rem;
                `}}
    }
`,Hs=r(cs.Small)`
    ${qr.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,_s=r.div`
    display: none;

    ${qr.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,js=r(Ds.BodySmall)`
    margin-bottom: 0.5rem;
`,Ms=r.div`
    display: flex;
`,Ts=r.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${qr.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${qr.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,Is=({actionButtons:e,mobile:r=!1,onActionButtonClick:t})=>{const n=e=>{e.stopPropagation()},i=e=>r=>{r.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),t(r,e)},l=(e,r)=>{const t=e?(e=>{const r=rs(e,(e=>"download"===e.type));if(r>-1){const t=[...e],n=t.splice(r,1);return[...t,n[0]]}return e})(r):r;return t.map(((r,t)=>{let s;switch(r.type){case"download":s=e?(l=r.args,o(_s,{children:[a(js,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),o(Ms,{children:[a(Ts,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),a(Ts,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:n},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):a(Hs,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const n=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${t+1}`;s=a(Hs,Object.assign({},r.args,{type:"button",onClick:i(r),"data-testid":n}));break}case"component":{const e=r.args;s=e&&e.render||null;break}default:s=null}var l;if(s)return a(zs,Object.assign({$mobile:e},{children:s}),`action-button-${t+1}`)}))};if(e){const t=(null==e?void 0:e.mobile)||e.desktop,n=t.filter((e=>!!e.uncollapsible)),i=t.filter((e=>!e.uncollapsible));return r?a(s,{children:i.length>0&&a(Os,{children:l(r,i)})}):o(s,{children:[n.length>0&&a(ks,{children:l(!1,n)}),e.desktop.length>0&&a(As,{children:l(r,e.desktop)})]})}return a(s,{})},Ws={collections:{base:{InputBoxShadow:t`
        inset 0 0 4px 0px ${Qr.Accent}
    `,InputErrorBoxShadow:t`
        inset 0 0 4px 0px ${Qr.Red}
    `,ElevationBoxShadow:t`
      0px 2px 8px ${Qr.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:t`
        inset 0 0 3px 0px ${Qr.Accent}
    `,InputErrorBoxShadow:t`
        inset 0 0 3px 0px ${Qr.Red}
    `,ElevationBoxShadow:t`
      0px 2px 8px ${Qr.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ls=e=>r=>{var t;const n=r.theme,i=Rr(Ws,n[Pr.designTokenScheme]);return(null===(t=n.options)||void 0===t?void 0:t.designToken)?Yr(i,e,n.options.designToken):Yr(i,e)},Ys=(Ls("InputBoxShadow"),Ls("InputErrorBoxShadow"),Ls("ElevationBoxShadow")),Rs=(Ls("Table.Header"),Ls("Table.Cell.Primary"),Ls("Table.Cell.Secondary"),Ls("Table.Cell.Selected"),Ls("Table.Cell.Hover"),Ls("Button.Danger.BackgroundColor"),Ls("Button.Danger.Hover"),Ls("Button.Danger.Primary"),Ls("Button.Danger.Border"),r.ul`
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

    background: ${Xr[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Ys};
`),Ps=r.ul`
    display: none;
    list-style: none;

    ${qr.tablet} {
        border-left: 0.25rem solid ${Jr};
        display: flex;
        flex-direction: column;
    }
`,Ns=r(Ds.Hyperlink.Small)`
    ${Bs("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Xr[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Jr};
    }
    :hover {
        color: ${Gr.Light[1]};
    }

    ${qr.tablet} {
        ${Bs("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,Vs=r.li`
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

    ${qr.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Js=({items:e,mobile:r=!1,onItemClick:t})=>{const n=e=>r=>{r.stopPropagation(),t(r,e)},i=(r=!1)=>e.map(((e,t)=>{const{children:i,options:o}=e,s=et(e,["children","options"]),l=r?`link__mobile-${t+1}`:`link__${t+1}`;return a(Vs,{children:a(Ns,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:n(e)},o,{children:i}))},t)}));if(e&&e.length>0){return a(r?Ps:Rs,{children:i(r)})}return a(s,{})},Us=r.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${qr.tablet} {
        display: none;
    }
`,Gs=r.ul`
    display: none;
    list-style: none;

    ${qr.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,Xs=r.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${qr.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Qs=r(Ds.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Xr[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Xr[1]};
    }

    ${qr.tablet} {
        color: ${Xr[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Xr[1]};
        }
    }
`,Zs=r.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Ks=r.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Jr};

    ${qr.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Jr};
    }
`,qs=r.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,el=r(tt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,rl=r(x)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Xr[3]};
    :hover {
        color: ${Xr[1]};
    }
`,tl=({items:e,selectedId:r,mobile:t=!1,hideNavBranding:n,onItemClick:i})=>{const[l,g]=c(-1),[h,m]=c(!1),b=u(null);d((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{m(!1)},p=(e,r)=>t=>{t.stopPropagation(),g(r),m(!0),i(t,e)},y=(e,r)=>{e.stopPropagation(),i(e,r),m(!1)},F=()=>e.map(((e,i)=>{if("component"===e.itemType){const r=e&&e.children||null;return a("li",{children:r},i)}{const s=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(e),{children:d,options:c}=e,u=et(e,["children","options"]),g=s?t?"bold":"semibold":"regular",m=t?`link__mobile-${i+1}`:`link__${i+1}`,b=l>=0&&l===i&&h;return o(Xs,Object.assign({$hiddenBranding:n},{children:[o(Qs,Object.assign({"data-testid":m,weight:g,$selected:s},u,{onClick:p(e,i)},c,{children:[a(Zs,{children:d}),s&&a(Ks,{"data-testid":`${m}-indicator`}),t&&e.subMenu&&a(qs,{children:a(el,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand"},{children:a(rl,{})}))})]})),b&&a(Js,{items:e.subMenu,mobile:t,onItemClick:y})]}),i)}}));return e&&e.length>0?t?a(Gs,Object.assign({ref:b},{children:F()})):a(Us,Object.assign({ref:b,$alignLeft:n},{children:F()})):a(s,{})},nl=g(((e,r)=>{var{items:t,className:n,id:l,selectedId:g,compress:m=!1,fixed:b=!0,resources:f,hideNavElements:p=!1,hideNavBranding:y=!1,drawerDismissalExclusions:F=[],actionButtons:v,onItemClick:x,onActionButtonClick:B,onBrandClick:w,masthead:D=!0,layout:$="default"}=e,E=et(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[S,C]=c(!1),[A,k]=c(!1),O="stretch"===$,z=u(),H=i(),_=(e=>{switch(e){case"bookingsg":return In;case"mylegacy":return Ln;case"ccube":return Wn;default:return Tn}})(null==H?void 0:H.resourceScheme),j=(null==f?void 0:f.primary)||_.primary,M=null==f?void 0:f.secondary;h(r,(()=>Object.assign(z.current,{dismissDrawer:()=>{T()}})),[S]),d((()=>(W(),window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W)})),[]);const T=()=>{C(!1),setTimeout((()=>{k(!1)}),550)},I=e=>S&&-1===F.indexOf(e),W=()=>{window.innerWidth<=Zr.tablet&&S&&T()},L=(e,r)=>{w&&(e.preventDefault(),w(r)),I("brand-click")&&T()},Y=(e,r)=>{r.onClick?r.onClick(e):x&&(e.preventDefault(),x(r)),!(null==r?void 0:r.subMenu)&&I("item-click")&&T()},R=(e,r)=>{r.args&&r.args.onClick?r.args.onClick(e):B&&(e.preventDefault(),B(r)),I("item-click")&&T()},P=()=>{C(!0),k(!0)},N=()=>{I("close-button-click")&&T()},V=()=>{const e=t.mobile||t.desktop;return e&&e.length>0||v&&(()=>{const e=v.mobile||v.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?a(lt,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1},{children:a(dt,{})})):null};return o(at,Object.assign({ref:z,$fixed:b,className:n,id:l||"navbar-wrapper","data-testid":E["data-testid"]||"navbar-wrapper"},{children:[D&&a(Bt,{}),o(vt.Content,Object.assign({stretch:O},{children:[o(ot,Object.assign({$compress:m},{children:[!y&&o(ct,Object.assign({$compress:m,"data-id":"brand-container"},{children:[a(An,{resources:j,onClick:L,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),M&&o(s,{children:[a(ut,{$compress:m}),a(An,{resources:M,onClick:L,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!p&&o(st,Object.assign({$hideNavBranding:y},{children:[a(tl,{items:t.desktop,onItemClick:Y,selectedId:g,hideNavBranding:y}),a(Is,{actionButtons:v,onActionButtonClick:R}),V()]}))]})),!p&&a(Dn,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:N},{children:o(Mn,Object.assign({show:S,resources:{primary:j,secondary:M},onClose:N,onBrandClick:L,actionButtons:v,hideNavBranding:y},{children:[a(tl,{items:t.mobile||t.desktop,onItemClick:Y,selectedId:g,mobile:!0}),a(Is,{actionButtons:v,onActionButtonClick:R,mobile:!0})]}))}))]}))]}))})),il=it,al=3.5;export{nl as Navbar,il as NavbarHeight,al as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
