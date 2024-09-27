import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as n,keyframes as r}from"styled-components";import{jsx as i,jsxs as a,Fragment as o}from"react/jsx-runtime";import s,{useEffect as l,useState as c,useRef as d,forwardRef as u,useImperativeHandle as h}from"react";import{useFloatingTree as f,FloatingTree as g,useFloatingNodeId as p,FloatingNode as m}from"@floating-ui/react";import y from"react-dom";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B=Array.isArray,w="object"==typeof F&&F&&F.Object===Object&&F,D=w,x="object"==typeof self&&self&&self.Object===Object&&self,k=D||x||Function("return this")(),O=k.Symbol,A=O,E=Object.prototype,H=E.hasOwnProperty,C=E.toString,_=A?A.toStringTag:void 0;var j=function(e){var t=H.call(e,_),n=e[_];try{e[_]=void 0;var r=!0}catch(e){}var i=C.call(e);return r&&(t?e[_]=n:delete e[_]),i},z=Object.prototype.toString;var M=j,T=function(e){return z.call(e)},I=O?O.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?M(e):T(e)};var N=function(e){return null!=e&&"object"==typeof e},L=W,Y=N;var P=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==L(e)},R=B,V=P,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/;var G=function(e,t){if(R(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!V(e))||(J.test(e)||!U.test(e)||null!=t&&e in Object(t))};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Q=W,Z=X;var K,q=function(e){if(!Z(e))return!1;var t=Q(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ee=k["__core-js_shared__"],te=(K=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"";var ne=function(e){return!!te&&te in e},re=Function.prototype.toString;var ie=function(e){if(null!=e){try{return re.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ae=q,oe=ne,se=X,le=ie,ce=/^\[object .+?Constructor\]$/,de=Function.prototype,ue=Object.prototype,he=de.toString,fe=ue.hasOwnProperty,ge=RegExp("^"+he.call(fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e){return!(!se(e)||oe(e))&&(ae(e)?ge:ce).test(le(e))},me=function(e,t){return null==e?void 0:e[t]};var ye=function(e,t){var n=me(e,t);return pe(n)?n:void 0},be=ye(Object,"create"),ve=be;var $e=function(){this.__data__=ve?ve(null):{},this.size=0};var Fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Se=be,Be=Object.prototype.hasOwnProperty;var we=function(e){var t=this.__data__;if(Se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},De=be,xe=Object.prototype.hasOwnProperty;var ke=be;var Oe=$e,Ae=Fe,Ee=we,He=function(e){var t=this.__data__;return De?void 0!==t[e]:xe.call(t,e)},Ce=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ke&&void 0===t?"__lodash_hash_undefined__":t,this};function _e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_e.prototype.clear=Oe,_e.prototype.delete=Ae,_e.prototype.get=Ee,_e.prototype.has=He,_e.prototype.set=Ce;var je=_e;var ze=function(){this.__data__=[],this.size=0};var Me=function(e,t){return e===t||e!=e&&t!=t},Te=Me;var Ie=function(e,t){for(var n=e.length;n--;)if(Te(e[n][0],t))return n;return-1},We=Ie,Ne=Array.prototype.splice;var Le=Ie;var Ye=Ie;var Pe=Ie;var Re=ze,Ve=function(e){var t=this.__data__,n=We(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ne.call(t,n,1),--this.size,!0)},Ue=function(e){var t=this.__data__,n=Le(t,e);return n<0?void 0:t[n][1]},Je=function(e){return Ye(this.__data__,e)>-1},Ge=function(e,t){var n=this.__data__,r=Pe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=Re,Xe.prototype.delete=Ve,Xe.prototype.get=Ue,Xe.prototype.has=Je,Xe.prototype.set=Ge;var Qe=Xe,Ze=ye(k,"Map"),Ke=je,qe=Qe,et=Ze;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var it=nt;var at=nt;var ot=nt;var st=function(){this.size=0,this.__data__={hash:new Ke,map:new(et||qe),string:new Ke}},lt=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return it(this,e).get(e)},dt=function(e){return at(this,e).has(e)},ut=function(e,t){var n=ot(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=ct,ht.prototype.has=dt,ht.prototype.set=ut;var ft=ht,gt=ft;function pt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(pt.Cache||gt),n}pt.Cache=gt;var mt=pt;var yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bt=/\\(\\)?/g,vt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(yt,(function(e,n,r,i){t.push(r?i.replace(bt,"$1"):n||e)})),t}));var $t=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ft=B,St=P,Bt=O?O.prototype:void 0,wt=Bt?Bt.toString:void 0;var Dt=function e(t){if("string"==typeof t)return t;if(Ft(t))return $t(t,e)+"";if(St(t))return wt?wt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},xt=Dt;var kt=B,Ot=G,At=vt,Et=function(e){return null==e?"":xt(e)};var Ht=function(e,t){return kt(e)?e:Ot(e,t)?[e]:At(Et(e))},Ct=P;var _t=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},jt=Ht,zt=_t;var Mt=function(e,t){for(var n=0,r=(t=jt(t,e)).length;null!=e&&n<r;)e=e[zt(t[n++])];return n&&n==r?e:void 0},Tt=Mt;var It=function(e,t,n){var r=null==e?void 0:Tt(e,t);return void 0===r?n:r},Wt=S(It);const Nt=(e,t,n)=>t?Wt(n,t)||Wt(e,t):n||e,Lt=(e,t)=>{const n=t||e.defaultValue;return Wt(e.collections,n)};var Yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yt||(Yt={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Rt=e=>t=>{const n=t.theme,r=Lt(Pt,n[Yt.colorScheme]);return n.options&&n.options.color?Nt(r,e,n.options.color):Nt(r,e)},Vt={Brand:{1:Rt("Brand.1"),2:Rt("Brand.2"),3:Rt("Brand.3"),4:Rt("Brand.4"),5:Rt("Brand.5"),6:Rt("Brand.6")},Primary:Rt("Primary"),PrimaryDark:Rt("PrimaryDark"),Secondary:Rt("Secondary"),Accent:{Light:{1:Rt("Accent.Light.1"),2:Rt("Accent.Light.2"),3:Rt("Accent.Light.3"),4:Rt("Accent.Light.4"),5:Rt("Accent.Light.5"),6:Rt("Accent.Light.6")},Dark:{1:Rt("Accent.Dark.1"),2:Rt("Accent.Dark.2"),3:Rt("Accent.Dark.3")}},Neutral:{1:Rt("Neutral.1"),2:Rt("Neutral.2"),3:Rt("Neutral.3"),4:Rt("Neutral.4"),5:Rt("Neutral.5"),6:Rt("Neutral.6"),7:Rt("Neutral.7"),8:Rt("Neutral.8")},Validation:{Green:{Text:Rt("Validation.Green.Text"),Icon:Rt("Validation.Green.Icon"),Border:Rt("Validation.Green.Border"),Background:Rt("Validation.Green.Background")},Orange:{Text:Rt("Validation.Orange.Text"),Icon:Rt("Validation.Orange.Icon"),Border:Rt("Validation.Orange.Border"),Background:Rt("Validation.Orange.Background"),Badge:Rt("Validation.Orange.Badge")},Red:{Text:Rt("Validation.Red.Text"),Icon:Rt("Validation.Red.Icon"),Border:Rt("Validation.Red.Border"),Background:Rt("Validation.Red.Background")},Blue:{Text:Rt("Validation.Blue.Text"),Icon:Rt("Validation.Blue.Icon"),Border:Rt("Validation.Blue.Border"),Background:Rt("Validation.Blue.Background")}},Shadow:{Accent:Rt("Shadow.Accent"),Red:Rt("Shadow.Red"),Elevation:Rt("Shadow.Elevation")}},Ut={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Jt=e=>Object.keys(Ut).reduce(((t,n)=>{const r=Ut[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Gt=Jt("max-width");Jt("min-width");function Xt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Qt=t.button`
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
                background-color: ${Vt.Neutral[7]};
            `}
    }
`,Zt=s.forwardRef(((e,t)=>{var{children:n,focusHighlight:r=!0,focusOutline:a="none",type:o="button"}=e,s=Xt(e,["children","focusHighlight","focusOutline","type"]);return i(Qt,Object.assign({ref:t,$outline:a,$highlight:r,type:o},s,{children:n}))})),Kt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",qt={notCompress:6,compress:4},en=t.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,tn=t.nav`
    height: ${e=>e.$compress?qt.compress:qt.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Kt};

    ${Gt.tablet} {
        height: ${3.5}rem;
    }
`,nn=t.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Gt.tablet} {
        margin-left: 0rem;
    }
`,rn=t(Zt)`
    display: none;

    ${Gt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,an=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Vt.Neutral[1]};
`,on=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Gt.tablet} {
        height: 1.5rem;
    }

    ${Gt.mobileS} {
        height: 1.25rem;
    }
`,sn=t.div`
    display: flex;
    background-color: ${Vt.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Gt.tablet} {
        margin: 0 1rem;
    }

    ${Gt.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,ln=t.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return n`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Gt.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Gt.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,cn=s.forwardRef(((e,t)=>{const{mobileCols:n,tabletCols:r,desktopCols:a}=e,o=Xt(e,["mobileCols","tabletCols","desktopCols"]);return i(ln,Object.assign({ref:t},(()=>{const e=r||n,t=n,i=dn(a||r||n),o=dn(e),s=dn(t);return{$desktopSpan:i.span,$desktopStart:i.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),dn=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},un=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="container",type:a="flex",stretch:o=!1}=e,s=Xt(e,["children","data-testid","type","stretch"]);return i(hn,Object.assign({ref:t,"data-testid":r,$type:a,$stretch:o},s,{children:n}))})),hn=t.div`
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

                ${Gt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Gt.tablet} {
        max-width: 720px;
    }
    ${Gt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return n`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Gt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Gt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,fn=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="section",stretch:a=!1}=e,o=Xt(e,["children","data-testid","stretch"]);return i(gn,Object.assign({ref:t,"data-testid":r,$stretch:a},o,{children:n}))})),gn=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?n`
                ${Gt.tablet} {
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
`,pn=s.forwardRef(((e,t)=>{const{children:n,"data-testid":r="content",className:a,type:o="flex",stretch:s=!1}=e,l=Xt(e,["children","data-testid","className","type","stretch"]);return i(fn,Object.assign({ref:t,"data-testid":r,className:a,stretch:s},l,{children:i(un,Object.assign({"data-testid":`${r}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),mn={Section:fn,Container:un,Content:pn,ColDiv:cn},yn=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Gt.mobileL} {
        padding: 0;
    }
`,bn=()=>{l((()=>{e()||t()}),[]);const e=()=>document.getElementById(vn),t=()=>{if(!document.getElementById(vn)){const e=document.createElement("script");e.id=vn,e.type="module",e.src=$n,document.head.appendChild(e)}};return i(yn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},vn="lifesg-ds-masthead-script",$n="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var Fn={exports:{}};Fn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Sn,Bn,wn=S(Fn.exports),Dn={exports:{}},xn=S(Dn.exports=(Sn={year:0,month:1,day:2,hour:3,minute:4,second:5},Bn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Bn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Bn[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=Sn[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),kn={exports:{}};kn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var F="$isDayjsObject",S=function(e){return e instanceof x||!(!e||!e[F])},B=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},w=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},D=b;D.l=B,D.i=S,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,d=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},g=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=D.p(d),p=function(e){var t=w(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=D.p(h),y=w(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return D.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case l:g=(v-b)/6048e5;break;case s:g=(v-b)/864e5;break;case o:g=v/n;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return f?g:D.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return w.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,x,w),e.$i=!0),w},w.locale=B,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=$[v],w.Ls=$,w.p={},w}();var On=S(kn.exports),An={exports:{}};An.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var En=S(An.exports),Hn={exports:{}};Hn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Cn=S(Hn.exports),_n={exports:{}};_n.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var jn,zn=S(_n.exports);On.extend(En),On.extend(Cn),On.extend(zn),On.extend(wn),On.extend(xn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=On(t).startOf("week");return Mn(n).map((e=>Tn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Tn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(On(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+On(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=On(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?On(r):void 0,i?On(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(jn||(jn={}));const Mn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Tn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},In=[1,3,5,7,8,10,12],Wn=[4,6,9,11];var Nn,Ln,Yn,Pn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":In.includes(a)?Math.min(i,31).toString():Wn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=On(e,n);return On(t,n).diff(r,"minute")},e.toDayjs=e=>e?On(e):On(),e.addMinutesToTime=(e,t,n="HH:mm")=>On(e,n).add(t,"minutes").format(n)}(Nn||(Nn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!On(e).isBefore(r,"day"))||!(!i||!On(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(On(e).isValid())return e}return""}}(Ln||(Ln={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Yn||(Yn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Pn||(Pn={}));const Rn=t.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return n`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Vn=t.div`
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
`;var Un;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Un||(Un={}));const Jn=({show:e=!1,rootId:t,onOverlayClick:n,children:r,backgroundOpacity:a,backgroundBlur:o=!0,disableTransition:u=!1,enableOverlayClick:h=!1,zIndex:g,id:b})=>{const[v,$]=c(null),[F,S]=c(),[B]=c((()=>Yn.generate())),w=p(),D=d(),x=d(null),k=r&&s.cloneElement(r,{ref:x}),O=b?`lifesg-ds-overlay-root-${b}`:"lifesg-ds-overlay-root",A=(null!=g?g:F)?99999:99998;(e=>{const t=f();l((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Un.Change,n)}),[t,e]),l((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Un.Change,n)};return null==t||t.events.on(Un.Ready,n),()=>null==t?void 0:t.events.off(Un.Ready,n)}),[t,e])})(A),l((()=>(_(),$(H()),()=>{T(),z().length<1&&j("remove")})),[]),l((()=>{if(e){const e=C();E(e),M();const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{z().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[e]);const E=e=>{D.current=e,S(e)},H=()=>document&&t?document.getElementById(t):document?document.body:null,C=()=>z().length>0,_=()=>{if(!document.getElementById(Xn)){const e=document.createElement("style");e.id=Xn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Qn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Qn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(Qn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Qn):document.body.classList.add(Qn)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,B].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==B)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return v?y.createPortal(i(Rn,Object.assign({id:O,"data-testid":O,$show:e,$zIndex:A},{children:r&&i(m,Object.assign({id:w},{children:i(Vn,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:a||(F?.5:.8),$backgroundBlur:o,$disableTransition:u,onClick:I},{children:k}))}))})),v):null},Gn=e=>i(g,{children:i(Jn,Object.assign({},e))}),Xn="lifesg-ds-overlay-stylesheet",Qn="lifesg-ds-overlay-open",Zn=t.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Kt};
        object-fit: contain;
    }
`;const Kn=({src:e,alt:t,className:n,"data-testid":r})=>i("img",{src:e,alt:t||"",className:n,"data-testid":r,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),qn=({resources:e,onClick:t,"data-id":n,"data-testid":r="navbar-brand",type:a})=>i(Zn,Object.assign({role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{t&&t(e,a)},tabIndex:0,"data-id":n,"data-testid":r,$type:a},{children:i(Kn,{src:e.logoSrc,alt:e.brandName+"-app-logo"})})),er=t.div`
    display: none;

    ${Gt.tablet} {
        display: flex;
    }
`,tr=t.div`
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

	${Gt.tablet} {
        width: 75%;
    }

    ${Gt.mobileL} {
        width: 100%;
    }
`,nr=t.div`
    display: flex;
    flex-direction: column;
`,rr=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,ir=t(b)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,ar=t(Zt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Vt.Neutral[1]};

    :active,
    :focus {
        color: ${Vt.Primary};
    }
`,or=s.forwardRef(((e,t)=>{const{show:n,resources:r,children:s,hideNavBranding:d,onClose:u,onBrandClick:h}=e,[f,g]=c(0),{primary:p,secondary:m}=r;l((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return i(er,Object.assign({ref:t,"data-testid":"drawer"},{children:i(tr,Object.assign({$show:n,$viewHeight:f},{children:a(nr,{children:[a(rr,{children:[i(on,Object.assign({"data-id":"drawer-brand-container"},{children:!d&&a(o,{children:[i(qn,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&a(o,{children:[i(sn,{}),i(qn,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),i(ar,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:i(ir,{})}))]}),s]})}))}))}));var sr=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},lr=Qe;var cr=Qe,dr=Ze,ur=ft;var hr=Qe,fr=function(){this.__data__=new lr,this.size=0},gr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},pr=function(e){return this.__data__.get(e)},mr=function(e){return this.__data__.has(e)},yr=function(e,t){var n=this.__data__;if(n instanceof cr){var r=n.__data__;if(!dr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ur(r)}return n.set(e,t),this.size=n.size,this};function br(e){var t=this.__data__=new hr(e);this.size=t.size}br.prototype.clear=fr,br.prototype.delete=gr,br.prototype.get=pr,br.prototype.has=mr,br.prototype.set=yr;var vr=br;var $r=ft,Fr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Sr=function(e){return this.__data__.has(e)};function Br(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $r;++t<n;)this.add(e[t])}Br.prototype.add=Br.prototype.push=Fr,Br.prototype.has=Sr;var wr=Br,Dr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},xr=function(e,t){return e.has(t)};var kr=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&n?new wr:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],p=t[u];if(r)var m=o?r(p,g,u,t,e,a):r(g,p,u,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Dr(t,(function(e,t){if(!xr(f,t)&&(g===e||i(g,e,n,r,a)))return f.push(t)}))){h=!1;break}}else if(g!==p&&!i(g,p,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Or=k.Uint8Array,Ar=Me,Er=kr,Hr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Cr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},_r=O?O.prototype:void 0,jr=_r?_r.valueOf:void 0;var zr=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Or(e),new Or(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ar(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Hr;case"[object Set]":var l=1&r;if(s||(s=Cr),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=Er(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(jr)return jr.call(e)==jr.call(t)}return!1};var Mr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Tr=B;var Ir=function(e,t,n){var r=t(e);return Tr(e)?r:Mr(r,n(e))};var Wr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Nr=function(){return[]},Lr=Object.prototype.propertyIsEnumerable,Yr=Object.getOwnPropertySymbols,Pr=Yr?function(e){return null==e?[]:(e=Object(e),Wr(Yr(e),(function(t){return Lr.call(e,t)})))}:Nr;var Rr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Vr=W,Ur=N;var Jr=function(e){return Ur(e)&&"[object Arguments]"==Vr(e)},Gr=N,Xr=Object.prototype,Qr=Xr.hasOwnProperty,Zr=Xr.propertyIsEnumerable,Kr=Jr(function(){return arguments}())?Jr:function(e){return Gr(e)&&Qr.call(e,"callee")&&!Zr.call(e,"callee")},qr={exports:{}};var ei=function(){return!1};!function(e,t){var n=k,r=ei,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(qr,qr.exports);var ti=qr.exports,ni=/^(?:0|[1-9]\d*)$/;var ri=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ni.test(e))&&e>-1&&e%1==0&&e<t};var ii=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ai=W,oi=ii,si=N,li={};li["[object Float32Array]"]=li["[object Float64Array]"]=li["[object Int8Array]"]=li["[object Int16Array]"]=li["[object Int32Array]"]=li["[object Uint8Array]"]=li["[object Uint8ClampedArray]"]=li["[object Uint16Array]"]=li["[object Uint32Array]"]=!0,li["[object Arguments]"]=li["[object Array]"]=li["[object ArrayBuffer]"]=li["[object Boolean]"]=li["[object DataView]"]=li["[object Date]"]=li["[object Error]"]=li["[object Function]"]=li["[object Map]"]=li["[object Number]"]=li["[object Object]"]=li["[object RegExp]"]=li["[object Set]"]=li["[object String]"]=li["[object WeakMap]"]=!1;var ci=function(e){return si(e)&&oi(e.length)&&!!li[ai(e)]};var di=function(e){return function(t){return e(t)}},ui={exports:{}};!function(e,t){var n=w,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(ui,ui.exports);var hi=ui.exports,fi=ci,gi=di,pi=hi&&hi.isTypedArray,mi=pi?gi(pi):fi,yi=Rr,bi=Kr,vi=B,$i=ti,Fi=ri,Si=mi,Bi=Object.prototype.hasOwnProperty;var wi=function(e,t){var n=vi(e),r=!n&&bi(e),i=!n&&!r&&$i(e),a=!n&&!r&&!i&&Si(e),o=n||r||i||a,s=o?yi(e.length,String):[],l=s.length;for(var c in e)!t&&!Bi.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Fi(c,l))||s.push(c);return s},Di=Object.prototype;var xi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Di)};var ki=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Oi=xi,Ai=ki,Ei=Object.prototype.hasOwnProperty;var Hi=q,Ci=ii;var _i=wi,ji=function(e){if(!Oi(e))return Ai(e);var t=[];for(var n in Object(e))Ei.call(e,n)&&"constructor"!=n&&t.push(n);return t},zi=function(e){return null!=e&&Ci(e.length)&&!Hi(e)};var Mi=function(e){return zi(e)?_i(e):ji(e)},Ti=Ir,Ii=Pr,Wi=Mi;var Ni=function(e){return Ti(e,Wi,Ii)},Li=Object.prototype.hasOwnProperty;var Yi=function(e,t,n,r,i,a){var o=1&n,s=Ni(e),l=s.length;if(l!=Ni(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Li.call(t,d)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){var p=e[d=s[c]],m=t[d];if(r)var y=o?r(m,p,d,t,e,a):r(p,m,d,e,t,a);if(!(void 0===y?p===m||i(p,m,n,r,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Pi=ye(k,"DataView"),Ri=Ze,Vi=ye(k,"Promise"),Ui=ye(k,"Set"),Ji=ye(k,"WeakMap"),Gi=W,Xi=ie,Qi="[object Map]",Zi="[object Promise]",Ki="[object Set]",qi="[object WeakMap]",ea="[object DataView]",ta=Xi(Pi),na=Xi(Ri),ra=Xi(Vi),ia=Xi(Ui),aa=Xi(Ji),oa=Gi;(Pi&&oa(new Pi(new ArrayBuffer(1)))!=ea||Ri&&oa(new Ri)!=Qi||Vi&&oa(Vi.resolve())!=Zi||Ui&&oa(new Ui)!=Ki||Ji&&oa(new Ji)!=qi)&&(oa=function(e){var t=Gi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Xi(n):"";if(r)switch(r){case ta:return ea;case na:return Qi;case ra:return Zi;case ia:return Ki;case aa:return qi}return t});var sa=vr,la=kr,ca=zr,da=Yi,ua=oa,ha=B,fa=ti,ga=mi,pa="[object Arguments]",ma="[object Array]",ya="[object Object]",ba=Object.prototype.hasOwnProperty;var va=function(e,t,n,r,i,a){var o=ha(e),s=ha(t),l=o?ma:ua(e),c=s?ma:ua(t),d=(l=l==pa?ya:l)==ya,u=(c=c==pa?ya:c)==ya,h=l==c;if(h&&fa(e)){if(!fa(t))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new sa),o||ga(e)?la(e,t,n,r,i,a):ca(e,t,l,n,r,i,a);if(!(1&n)){var f=d&&ba.call(e,"__wrapped__"),g=u&&ba.call(t,"__wrapped__");if(f||g){var p=f?e.value():e,m=g?t.value():t;return a||(a=new sa),i(p,m,n,r,a)}}return!!h&&(a||(a=new sa),da(e,t,n,r,i,a))},$a=N;var Fa=function e(t,n,r,i,a){return t===n||(null==t||null==n||!$a(t)&&!$a(n)?t!=t&&n!=n:va(t,n,r,i,e,a))},Sa=vr,Ba=Fa;var wa=X;var Da=function(e){return e==e&&!wa(e)},xa=Da,ka=Mi;var Oa=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Aa=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Sa;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?Ba(d,c,3,r,u):h))return!1}}return!0},Ea=function(e){for(var t=ka(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,xa(i)]}return t},Ha=Oa;var Ca=Ht,_a=Kr,ja=B,za=ri,Ma=ii,Ta=_t;var Ia=function(e,t){return null!=e&&t in Object(e)},Wa=function(e,t,n){for(var r=-1,i=(t=Ca(t,e)).length,a=!1;++r<i;){var o=Ta(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Ma(i)&&za(o,i)&&(ja(e)||_a(e))};var Na=Fa,La=It,Ya=function(e,t){return null!=e&&Wa(e,t,Ia)},Pa=G,Ra=Da,Va=Oa,Ua=_t;var Ja=Mt;var Ga=function(e){return function(t){return null==t?void 0:t[e]}},Xa=function(e){return function(t){return Ja(t,e)}},Qa=G,Za=_t;var Ka=function(e){var t=Ea(e);return 1==t.length&&t[0][2]?Ha(t[0][0],t[0][1]):function(n){return n===e||Aa(n,e,t)}},qa=function(e,t){return Pa(e)&&Ra(t)?Va(Ua(e),t):function(n){var r=La(n,e);return void 0===r&&r===t?Ya(n,e):Na(t,r,3)}},eo=function(e){return e},to=B,no=function(e){return Qa(e)?Ga(Za(e)):Xa(e)};var ro=/\s/;var io=function(e){for(var t=e.length;t--&&ro.test(e.charAt(t)););return t},ao=/^\s+/;var oo=function(e){return e?e.slice(0,io(e)+1).replace(ao,""):e},so=X,lo=P,co=/^[-+]0x[0-9a-f]+$/i,uo=/^0b[01]+$/i,ho=/^0o[0-7]+$/i,fo=parseInt;var go=function(e){if("number"==typeof e)return e;if(lo(e))return NaN;if(so(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=so(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=oo(e);var n=uo.test(e);return n||ho.test(e)?fo(e.slice(2),n?2:8):co.test(e)?NaN:+e},po=1/0;var mo=function(e){return e?(e=go(e))===po||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var yo=sr,bo=function(e){return"function"==typeof e?e:null==e?eo:"object"==typeof e?to(e)?qa(e[0],e[1]):Ka(e):no(e)},vo=function(e){var t=mo(e),n=t%1;return t==t?n?t-n:t:0},$o=Math.max;var Fo=S((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:vo(n);return i<0&&(i=$o(r+i,0)),yo(e,bo(t),i)}));const So=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Bo=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wo=t.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Vt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Bo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Do=t(wo)`
    animation-delay: -0.45s;
`,xo=t(wo)`
    animation-delay: -0.3s;
`,ko=t(wo)`
    animation-delay: -0.15s;
`,Oo={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ao={D1:{fontFamily:Oo.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oo.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oo.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Eo={D1:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Oo.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Oo.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Oo.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oo.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ho={collections:{base:Ao,oneservice:{D1:{fontFamily:Oo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Oo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Oo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Oo.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Oo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Oo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Oo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Oo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Oo.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Oo.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Oo.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Oo.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Eo},defaultValue:"base"},Co=e=>t=>{const n=t.theme,r=Lt(Ho,n[Yt.textStyleScheme]);return n.options&&n.options.textStyle?Nt(r,e,n.options.textStyle):Nt(r,e)},_o={D1:{fontFamily:Co("D1.fontFamily"),fontSize:Co("D1.fontSize"),fontWeight:Co("D1.fontWeight"),lineHeight:Co("D1.lineHeight"),letterSpacing:Co("D1.letterSpacing")},D2:{fontFamily:Co("D2.fontFamily"),fontSize:Co("D2.fontSize"),fontWeight:Co("D2.fontWeight"),lineHeight:Co("D2.lineHeight"),letterSpacing:Co("D2.letterSpacing")},D3:{fontFamily:Co("D3.fontFamily"),fontSize:Co("D3.fontSize"),fontWeight:Co("D3.fontWeight"),lineHeight:Co("D3.lineHeight"),letterSpacing:Co("D3.letterSpacing")},D4:{fontFamily:Co("D4.fontFamily"),fontSize:Co("D4.fontSize"),fontWeight:Co("D4.fontWeight"),lineHeight:Co("D4.lineHeight"),letterSpacing:Co("D4.letterSpacing")},DBody:{fontFamily:Co("DBody.fontFamily"),fontSize:Co("DBody.fontSize"),fontWeight:Co("DBody.fontWeight"),lineHeight:Co("DBody.lineHeight"),letterSpacing:Co("DBody.letterSpacing")},H1:{fontFamily:Co("H1.fontFamily"),fontSize:Co("H1.fontSize"),fontWeight:Co("H1.fontWeight"),lineHeight:Co("H1.lineHeight"),letterSpacing:Co("H1.letterSpacing")},H2:{fontFamily:Co("H2.fontFamily"),fontSize:Co("H2.fontSize"),fontWeight:Co("H2.fontWeight"),lineHeight:Co("H2.lineHeight"),letterSpacing:Co("H2.letterSpacing")},H3:{fontFamily:Co("H3.fontFamily"),fontSize:Co("H3.fontSize"),fontWeight:Co("H3.fontWeight"),lineHeight:Co("H3.lineHeight"),letterSpacing:Co("H3.letterSpacing")},H4:{fontFamily:Co("H4.fontFamily"),fontSize:Co("H4.fontSize"),fontWeight:Co("H4.fontWeight"),lineHeight:Co("H4.lineHeight"),letterSpacing:Co("H4.letterSpacing")},H5:{fontFamily:Co("H5.fontFamily"),fontSize:Co("H5.fontSize"),fontWeight:Co("H5.fontWeight"),lineHeight:Co("H5.lineHeight"),letterSpacing:Co("H5.letterSpacing")},H6:{fontFamily:Co("H6.fontFamily"),fontSize:Co("H6.fontSize"),fontWeight:Co("H6.fontWeight"),lineHeight:Co("H6.lineHeight"),letterSpacing:Co("H6.letterSpacing")},Body:{fontFamily:Co("Body.fontFamily"),fontSize:Co("Body.fontSize"),fontWeight:Co("Body.fontWeight"),lineHeight:Co("Body.lineHeight"),letterSpacing:Co("Body.letterSpacing")},BodySmall:{fontFamily:Co("BodySmall.fontFamily"),fontSize:Co("BodySmall.fontSize"),fontWeight:Co("BodySmall.fontWeight"),lineHeight:Co("BodySmall.lineHeight"),letterSpacing:Co("BodySmall.letterSpacing")},XSmall:{fontFamily:Co("XSmall.fontFamily"),fontSize:Co("XSmall.fontSize"),fontWeight:Co("XSmall.fontWeight"),lineHeight:Co("XSmall.lineHeight"),letterSpacing:Co("XSmall.letterSpacing")}},jo=[Oo.OpenSans,Oo.PlusJakartaSans],zo=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Mo=(e,t)=>r=>{var i;const a=_o[e].fontFamily(r),o=_o[e].fontWeight(r),s=jo.find((e=>Object.values(e).includes(a)));return s?n`
                font-family: ${zo(s,t)||zo(s,o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=To(t)||o)&&void 0!==i?i:"normal"};
        `},To=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Io=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Wo=(e,t,r=!1)=>i=>{const a=_o[e],o=a.fontSize(i);return n`
            ${Mo(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},No=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Io(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Io(r)}
        `;var Lo;!function(e){e.D1=t.h1`
        ${e=>n`
                ${Wo("D1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=t.h1`
        ${e=>n`
                ${Wo("D2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=t.h1`
        ${e=>n`
                ${Wo("D3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=t.h1`
        ${e=>n`
                ${Wo("D4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=t.h1`
        ${e=>n`
                ${Wo("DBody",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=t.h1`
        ${e=>n`
                ${Wo("H1",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=t.h2`
        ${e=>n`
                ${Wo("H2",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=t.h3`
        ${e=>n`
                ${Wo("H3",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=t.h4`
        ${e=>n`
                ${Wo("H4",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=t.h5`
        ${e=>n`
                ${Wo("H5",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=t.h6`
        ${e=>n`
                ${Wo("H6",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=t.p`
        ${e=>n`
                ${Wo("Body",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=t.p`
        ${e=>n`
                ${Wo("BodySmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=t.span`
        ${e=>n`
                ${Wo("XSmall",e.weight,e.paragraph)}
                color: ${Vt.Neutral[1]};
                ${No(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ro(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ro(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Lo||(Lo={}));const Yo=t.a`
    ${e=>n`
            ${Wo(e.textStyle,e.weight)}
            color: ${Vt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Vt.Secondary};

                svg {
                    color: ${Vt.Secondary};
                }
            }
        `}
`,Po=t(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ro=e=>{var{external:t=!1,children:n}=e,r=Xt(e,["external","children"]);return a(Yo,Object.assign({},r,{children:[n,t&&i(Po,{})]}))};var Vo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Vo||(Vo={}));const Uo={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Vt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Vt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Vt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Vt.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Vt.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Vt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Jo=e=>t=>{var n;const r=t.theme,i=Lt(Uo,r[Yt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Nt(i,e,r.options.designToken):Nt(i,e)},Go={InputBoxShadow:Jo("InputBoxShadow"),InputErrorBoxShadow:Jo("InputErrorBoxShadow"),ElevationBoxShadow:Jo("ElevationBoxShadow"),Table:{Header:Jo("Table.Header"),Cell:{Primary:Jo("Table.Cell.Primary"),Secondary:Jo("Table.Cell.Secondary"),Selected:Jo("Table.Cell.Selected"),Hover:Jo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Jo("Button.Danger.BackgroundColor"),Hover:Jo("Button.Danger.Hover"),Primary:Jo("Button.Danger.Primary"),Border:Jo("Button.Danger.Border")}}},Xo=t.button`
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
                    background-color: ${Vt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Go.Button.Danger.Border:Vt.Primary};

                    color: ${e.$buttonIsDanger?Go.Button.Danger.Primary:Vt.Primary};
                `;case"light":return n`
                    background-color: ${Vt.Neutral[8]};
                    border: 1px solid ${Vt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Go.Button.Danger.Primary:Vt.Primary};
                `;case"disabled":return n`
                    background-color: ${Vt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Vt.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Go.Button.Danger.Primary:Vt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Go.Button.Danger.Hover:Vt.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?Go.Button.Danger.BackgroundColor:Vt.Primary};
                    border: 1px solid transparent;

                    ${Gt.mobileL} {
                        width: 100%;
                    }

                    color: ${Vt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${Wo("H5","semibold")}

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${Wo("H4","semibold")}

                    ${Gt.mobileS} {
                        height: auto;
                    }
                `}
`,Qo=t((({color:e,className:t,size:n=18})=>a(So,Object.assign({className:t,$size:n,$color:e},{children:[i(wo,{id:"inner1",$size:n-2,$borderWidth:2,$color:e}),i(Do,{id:"inner2",$size:n-2,$borderWidth:2,$color:e}),i(xo,{id:"inner3",$size:n-2,$borderWidth:2,$color:e}),i(ko,{id:"inner4",$size:n-2,$borderWidth:2,$color:e})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Go.Button.Danger.Primary:Vt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Vt.Neutral[3](e);break;default:t=Vt.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Zo={Default:s.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Xt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return a(Xo,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[o&&i(Qo,Object.assign({},d)),i("span",{children:n})]}))})),Small:s.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:o=!1,styleType:s="default",danger:l=!1}=e,c=Xt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return a(Xo,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[o&&i(Qo,Object.assign({},d,{size:16})),i("span",{children:n})]}))}))},Ko=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Gt.tablet} {
        display: none;
    }
`,qo=t.ul`
    display: none;

    ${Gt.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,es=t.ul`
    display: none;
    list-style: none;

    ${Gt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Gt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,ts=t.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Gt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Gt.mobileL} {
        ${e=>{if(e.$mobile)return n`
                    padding: 0 1rem;
                `}}
    }
`,ns=t(Zo.Small)`
    ${Gt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,rs=t.div`
    display: none;

    ${Gt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,is=t(Lo.BodySmall)`
    margin-bottom: 0.5rem;
`,as=t.div`
    display: flex;
`,os=t.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Gt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Gt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,ss=({actionButtons:e,mobile:t=!1,onActionButtonClick:n})=>{const r=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},l=(e,t)=>{const n=e?(e=>{const t=Fo(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(t):t;return n.map(((t,n)=>{let o;switch(t.type){case"download":o=e?(l=t.args,a(rs,{children:[i(is,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),a(as,{children:[i(os,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),i(os,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:r},{children:i("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):i(ns,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const r=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${n+1}`;o=i(ns,Object.assign({},t.args,{type:"button",onClick:s(t),"data-testid":r}));break}case"component":{const e=t.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return i(ts,Object.assign({$mobile:e},{children:o}),`action-button-${n+1}`)}))};if(e){const n=(null==e?void 0:e.mobile)||e.desktop,r=n.filter((e=>!!e.uncollapsible)),s=n.filter((e=>!e.uncollapsible));return t?i(o,{children:s.length>0&&i(es,{children:l(t,s)})}):a(o,{children:[r.length>0&&i(qo,{children:l(!1,r)}),e.desktop.length>0&&i(Ko,{children:l(t,e.desktop)})]})}return i(o,{})},ls=t.ul`
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

    background: ${Vt.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Go.ElevationBoxShadow};
`,cs=t.ul`
    display: none;
    list-style: none;

    ${Gt.tablet} {
        border-left: 0.25rem solid ${Vt.Primary};
        display: flex;
        flex-direction: column;
    }
`,ds=t(Lo.Hyperlink.Small)`
    ${Wo("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Vt.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Vt.Primary};
    }
    :hover {
        color: ${Vt.Accent.Light[1]};
    }

    ${Gt.tablet} {
        ${Wo("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,us=t.li`
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

    ${Gt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,hs=({items:e,mobile:t=!1,onItemClick:n})=>{const r=e=>t=>{t.stopPropagation(),n(t,e)},a=(t=!1)=>e.map(((e,n)=>{const{children:a,options:o}=e,s=Xt(e,["children","options"]),l=t?`link__mobile-${n+1}`:`link__${n+1}`;return i(us,{children:i(ds,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:r(e)},o,{children:a}))},n)}));if(e&&e.length>0){return i(t?cs:ls,{children:a(t)})}return i(o,{})},fs=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Gt.tablet} {
        display: none;
    }
`,gs=t.ul`
    display: none;
    list-style: none;

    ${Gt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,ps=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Gt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,ms=t(Lo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Vt.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Vt.Neutral[1]};
    }

    ${Gt.tablet} {
        color: ${Vt.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Vt.Neutral[1]};
        }
    }
`,ys=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,bs=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Vt.Primary};

    ${Gt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Vt.Primary};
    }
`,vs=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,$s=t(Zt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,Fs=t($)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Vt.Neutral[3]};
    :hover {
        color: ${Vt.Neutral[1]};
    }
`,Ss=({items:e,selectedId:t,mobile:n=!1,hideNavBranding:r,onItemClick:s})=>{const[u,h]=c(-1),[f,g]=c(!1),p=d(null);l((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},y=(e,t)=>n=>{n.stopPropagation(),h(t),g(!0),s(n,e)},b=(e,t)=>{e.stopPropagation(),s(e,t),g(!1)},v=()=>e.map(((e,o)=>{if("component"===e.itemType){const t=e&&e.children||null;return i("li",{children:t},o)}{const s=(e=>{if(e.id===t)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:l,options:c}=e,d=Xt(e,["children","options"]),h=s?n?"bold":"semibold":"regular",g=n?`link__mobile-${o+1}`:`link__${o+1}`,p=u>=0&&u===o&&f;return a(ps,Object.assign({$hiddenBranding:r},{children:[a(ms,Object.assign({"data-testid":g,weight:h,$selected:s},d,{onClick:y(e,o)},c,{children:[i(ys,{children:l}),s&&i(bs,{"data-testid":`${g}-indicator`}),n&&e.subMenu&&i(vs,{children:i($s,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:i(Fs,{})}))})]})),p&&i(hs,{items:e.subMenu,mobile:n,onItemClick:b})]}),o)}}));return e&&e.length>0?n?i(gs,Object.assign({ref:p},{children:v()})):i(fs,Object.assign({ref:p,$alignLeft:r},{children:v()})):i(o,{})},Bs=u(((e,t)=>{var{items:n,className:r,id:s,selectedId:u,compress:f=!1,fixed:g=!0,resources:p=ws,hideNavElements:m=!1,hideNavBranding:y=!1,drawerDismissalExclusions:b=[],actionButtons:v,onItemClick:$,onActionButtonClick:F,onBrandClick:S,masthead:B=!0,layout:w="default"}=e,D=Xt(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[x,k]=c(!1),[O,A]=c(!1),E="stretch"===w,H=d(),{primary:C=ws.primary,secondary:_}=p;h(t,(()=>Object.assign(H.current,{dismissDrawer:()=>{j()}})),[x]),l((()=>(M(),window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M)})),[]);const j=()=>{k(!1),setTimeout((()=>{A(!1)}),550)},z=e=>x&&-1===b.indexOf(e),M=()=>{window.innerWidth<=Ut.tablet&&x&&j()},T=(e,t)=>{S&&(e.preventDefault(),S(t)),z("brand-click")&&j()},I=(e,t)=>{t.onClick?t.onClick(e):$&&(e.preventDefault(),$(t)),!(null==t?void 0:t.subMenu)&&z("item-click")&&j()},W=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):F&&(e.preventDefault(),F(t)),z("item-click")&&j()},N=()=>{k(!0),A(!0)},L=()=>{z("close-button-click")&&j()},Y=()=>{const e=n.mobile||n.desktop;return e&&e.length>0||v&&(()=>{const e=v.mobile||v.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?i(rn,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:N,focusHighlight:!1},{children:i(an,{})})):null};return a(en,Object.assign({ref:H,$fixed:g,className:r,id:s||"navbar-wrapper","data-testid":D["data-testid"]||"navbar-wrapper"},{children:[B&&i(bn,{}),a(mn.Content,Object.assign({stretch:E},{children:[a(tn,Object.assign({$compress:f},{children:[!y&&a(on,Object.assign({$compress:f,"data-id":"brand-container"},{children:[i(qn,{resources:C,onClick:T,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),_&&a(o,{children:[i(sn,{$compress:f}),i(qn,{resources:_,onClick:T,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!m&&a(nn,Object.assign({$hideNavBranding:y},{children:[i(Ss,{items:n.desktop,onItemClick:I,selectedId:u,hideNavBranding:y}),i(ss,{actionButtons:v,onActionButtonClick:W}),Y()]}))]})),!m&&i(Gn,Object.assign({show:O,enableOverlayClick:!0,onOverlayClick:L},{children:a(or,Object.assign({show:x,resources:{primary:C,secondary:_},onClose:L,onBrandClick:T,actionButtons:v,hideNavBranding:y},{children:[i(Ss,{items:n.mobile||n.desktop,onItemClick:I,selectedId:u,mobile:!0}),i(ss,{actionButtons:v,onActionButtonClick:W,mobile:!0})]}))}))]}))]}))})),ws={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},Ds=qt,xs=3.5;export{Bs as Navbar,Ds as NavbarHeight,xs as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
