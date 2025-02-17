import{MenuIcon as e}from"@lifesg/react-icons/menu";import t,{css as n,keyframes as r,useTheme as i}from"styled-components";import{jsx as a,jsxs as o,Fragment as s}from"react/jsx-runtime";import l,{useEffect as c,useState as d,useRef as u,forwardRef as h,useImperativeHandle as f}from"react";import{useFloatingTree as g,FloatingTree as p,useFloatingNodeId as m,FloatingNode as y}from"@floating-ui/react";import b from"react-dom";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w=Array.isArray,D="object"==typeof F&&F&&F.Object===Object&&F,x=D,k="object"==typeof self&&self&&self.Object===Object&&self,O=x||k||Function("return this")(),A=O.Symbol,E=A,H=Object.prototype,C=H.hasOwnProperty,_=H.toString,j=E?E.toStringTag:void 0;var z=function(e){var t=C.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch(e){}var i=_.call(e);return r&&(t?e[j]=n:delete e[j]),i},M=Object.prototype.toString;var T=z,I=function(e){return M.call(e)},W=A?A.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?T(e):I(e)};var L=function(e){return null!=e&&"object"==typeof e},Y=N,P=L;var R=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==Y(e)},V=w,U=R,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,t){if(V(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!U(e))||(G.test(e)||!J.test(e)||null!=t&&e in Object(t))};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Z=N,K=Q;var q,ee=function(e){if(!K(e))return!1;var t=Z(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},te=O["__core-js_shared__"],ne=(q=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var re=function(e){return!!ne&&ne in e},ie=Function.prototype.toString;var ae=function(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},oe=ee,se=re,le=Q,ce=ae,de=/^\[object .+?Constructor\]$/,ue=Function.prototype,he=Object.prototype,fe=ue.toString,ge=he.hasOwnProperty,pe=RegExp("^"+fe.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var me=function(e){return!(!le(e)||se(e))&&(oe(e)?pe:de).test(ce(e))},ye=function(e,t){return null==e?void 0:e[t]};var be=function(e,t){var n=ye(e,t);return me(n)?n:void 0},ve=be(Object,"create"),$e=ve;var Se=function(){this.__data__=$e?$e(null):{},this.size=0};var Fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Be=ve,we=Object.prototype.hasOwnProperty;var De=function(e){var t=this.__data__;if(Be){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return we.call(t,e)?t[e]:void 0},xe=ve,ke=Object.prototype.hasOwnProperty;var Oe=ve;var Ae=Se,Ee=Fe,He=De,Ce=function(e){var t=this.__data__;return xe?void 0!==t[e]:ke.call(t,e)},_e=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Oe&&void 0===t?"__lodash_hash_undefined__":t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=Ae,je.prototype.delete=Ee,je.prototype.get=He,je.prototype.has=Ce,je.prototype.set=_e;var ze=je;var Me=function(){this.__data__=[],this.size=0};var Te=function(e,t){return e===t||e!=e&&t!=t},Ie=Te;var We=function(e,t){for(var n=e.length;n--;)if(Ie(e[n][0],t))return n;return-1},Ne=We,Le=Array.prototype.splice;var Ye=We;var Pe=We;var Re=We;var Ve=Me,Ue=function(e){var t=this.__data__,n=Ne(t,e);return!(n<0)&&(n==t.length-1?t.pop():Le.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=Ye(t,e);return n<0?void 0:t[n][1]},Ge=function(e){return Pe(this.__data__,e)>-1},Xe=function(e,t){var n=this.__data__,r=Re(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Ve,Qe.prototype.delete=Ue,Qe.prototype.get=Je,Qe.prototype.has=Ge,Qe.prototype.set=Xe;var Ze=Qe,Ke=be(O,"Map"),qe=ze,et=Ze,tt=Ke;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var rt=function(e,t){var n=e.__data__;return nt(t)?n["string"==typeof t?"string":"hash"]:n.map},it=rt;var at=rt;var ot=rt;var st=rt;var lt=function(){this.size=0,this.__data__={hash:new qe,map:new(tt||et),string:new qe}},ct=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return at(this,e).get(e)},ut=function(e){return ot(this,e).has(e)},ht=function(e,t){var n=st(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ft.prototype.clear=lt,ft.prototype.delete=ct,ft.prototype.get=dt,ft.prototype.has=ut,ft.prototype.set=ht;var gt=ft,pt=gt;function mt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(mt.Cache||pt),n}mt.Cache=pt;var yt=mt;var bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,$t=function(e){var t=yt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(bt,(function(e,n,r,i){t.push(r?i.replace(vt,"$1"):n||e)})),t}));var St=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ft=w,Bt=R,wt=A?A.prototype:void 0,Dt=wt?wt.toString:void 0;var xt=function e(t){if("string"==typeof t)return t;if(Ft(t))return St(t,e)+"";if(Bt(t))return Dt?Dt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},kt=xt;var Ot=w,At=X,Et=$t,Ht=function(e){return null==e?"":kt(e)};var Ct=function(e,t){return Ot(e)?e:At(e,t)?[e]:Et(Ht(e))},_t=R;var jt=function(e){if("string"==typeof e||_t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},zt=Ct,Mt=jt;var Tt=function(e,t){for(var n=0,r=(t=zt(t,e)).length;null!=e&&n<r;)e=e[Mt(t[n++])];return n&&n==r?e:void 0},It=Tt;var Wt=function(e,t,n){var r=null==e?void 0:It(e,t);return void 0===r?n:r},Nt=B(Wt);const Lt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,Yt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Pt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Pt||(Pt={}));const Rt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Vt=e=>t=>{const n=t.theme,r=Yt(Rt,n[Pt.colorScheme]);return n.options&&n.options.color?Lt(r,e,n.options.color):Lt(r,e)},Ut={Brand:{1:Vt("Brand.1"),2:Vt("Brand.2"),3:Vt("Brand.3"),4:Vt("Brand.4"),5:Vt("Brand.5"),6:Vt("Brand.6")},Primary:Vt("Primary"),PrimaryDark:Vt("PrimaryDark"),Secondary:Vt("Secondary"),Accent:{Light:{1:Vt("Accent.Light.1"),2:Vt("Accent.Light.2"),3:Vt("Accent.Light.3"),4:Vt("Accent.Light.4"),5:Vt("Accent.Light.5"),6:Vt("Accent.Light.6")},Dark:{1:Vt("Accent.Dark.1"),2:Vt("Accent.Dark.2"),3:Vt("Accent.Dark.3")}},Neutral:{1:Vt("Neutral.1"),2:Vt("Neutral.2"),3:Vt("Neutral.3"),4:Vt("Neutral.4"),5:Vt("Neutral.5"),6:Vt("Neutral.6"),7:Vt("Neutral.7"),8:Vt("Neutral.8")},Validation:{Green:{Text:Vt("Validation.Green.Text"),Icon:Vt("Validation.Green.Icon"),Border:Vt("Validation.Green.Border"),Background:Vt("Validation.Green.Background")},Orange:{Text:Vt("Validation.Orange.Text"),Icon:Vt("Validation.Orange.Icon"),Border:Vt("Validation.Orange.Border"),Background:Vt("Validation.Orange.Background"),Badge:Vt("Validation.Orange.Badge")},Red:{Text:Vt("Validation.Red.Text"),Icon:Vt("Validation.Red.Icon"),Border:Vt("Validation.Red.Border"),Background:Vt("Validation.Red.Background")},Blue:{Text:Vt("Validation.Blue.Text"),Icon:Vt("Validation.Blue.Icon"),Border:Vt("Validation.Blue.Border"),Background:Vt("Validation.Blue.Background")}},Shadow:{Accent:Vt("Shadow.Accent"),Red:Vt("Shadow.Red"),Elevation:Vt("Shadow.Elevation")}},Jt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gt=e=>Object.keys(Jt).reduce(((t,n)=>{const r=Jt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Xt=Gt("max-width");Gt("min-width");function Qt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Zt=t.button`
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
                background-color: ${Ut.Neutral[7]};
            `}
    }
`,Kt=l.forwardRef(((e,t)=>{var{children:n,focusHighlight:r=!0,focusOutline:i="none",type:o="button"}=e,s=Qt(e,["children","focusHighlight","focusOutline","type"]);return a(Zt,Object.assign({ref:t,$outline:i,$highlight:r,type:o},s,{children:n}))})),qt="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",en={notCompress:6,compress:4},tn=t.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,nn=t.nav`
    height: ${e=>e.$compress?en.compress:en.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${qt};

    ${Xt.tablet} {
        height: ${3.5}rem;
    }
`,rn=t.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Xt.tablet} {
        margin-left: 0rem;
    }
`,an=t(Kt)`
    display: none;

    ${Xt.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,on=t(e)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ut.Neutral[1]};
`,sn=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Xt.tablet} {
        height: 1.5rem;
    }

    ${Xt.mobileS} {
        height: 1.25rem;
    }
`,ln=t.div`
    display: flex;
    background-color: ${Ut.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Xt.tablet} {
        margin: 0 1rem;
    }

    ${Xt.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,cn=t.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:i,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return n`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Xt.tablet} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }

            ${Xt.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,dn=l.forwardRef(((e,t)=>{const{mobileCols:n,tabletCols:r,desktopCols:i}=e,o=Qt(e,["mobileCols","tabletCols","desktopCols"]);return a(cn,Object.assign({ref:t},(()=>{const e=r||n,t=n,a=un(i||r||n),o=un(e),s=un(t);return{$desktopSpan:a.span,$desktopStart:a.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),un=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},hn=l.forwardRef(((e,t)=>{const{children:n,"data-testid":r="container",type:i="flex",stretch:o=!1}=e,s=Qt(e,["children","data-testid","type","stretch"]);return a(fn,Object.assign({ref:t,"data-testid":r,$type:i,$stretch:o},s,{children:n}))})),fn=t.div`
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

                ${Xt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Xt.tablet} {
        max-width: 720px;
    }
    ${Xt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return n`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Xt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Xt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return n`
                    display: flex;
                    flex-direction: column;
                `;default:return n`
                    display: flex;
                `}}}
`,gn=l.forwardRef(((e,t)=>{const{children:n,"data-testid":r="section",stretch:i=!1}=e,o=Qt(e,["children","data-testid","stretch"]);return a(pn,Object.assign({ref:t,"data-testid":r,$stretch:i},o,{children:n}))})),pn=t.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?n`
                ${Xt.tablet} {
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
`,mn=l.forwardRef(((e,t)=>{const{children:n,"data-testid":r="content",className:i,type:o="flex",stretch:s=!1}=e,l=Qt(e,["children","data-testid","className","type","stretch"]);return a(gn,Object.assign({ref:t,"data-testid":r,className:i,stretch:s},l,{children:a(hn,Object.assign({"data-testid":`${r}-container`,type:o,"data-id":"container",stretch:s},{children:n}))}))})),yn={Section:gn,Container:hn,Content:mn,ColDiv:dn},bn=t.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${Xt.mobileL} {
        padding: 0;
    }
`,vn=()=>{c((()=>{e()||t()}),[]);const e=()=>document.getElementById($n),t=()=>{if(!document.getElementById($n)){const e=document.createElement("script");e.id=$n,e.type="module",e.src=Sn,document.head.appendChild(e)}};return a(bn,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},$n="lifesg-ds-masthead-script",Sn="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js";var Fn={exports:{}};Fn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var S="$isDayjsObject",F=function(e){return e instanceof x||!(!e||!e[S])},B=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},w=function(e,t){if(F(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},D=b;D.l=B,D.i=F,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,d=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},g=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(p<v?p+7:p)-v;return f(r?y-$:y+(6-$),m);case s:case h:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case a:return g(b+"Seconds",2);case i:return g(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=D.p(d),p=function(e){var t=w(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[g]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=D.p(h),y=w(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return D.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case l:g=(v-b)/6048e5;break;case s:g=(v-b)/864e5;break;case o:g=v/n;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return f?g:D.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=x.prototype;return w.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,x,w),e.$i=!0),w},w.locale=B,w.isDayjs=F,w.unix=function(e){return w(1e3*e)},w.en=$[v],w.Ls=$,w.p={},w}();var Bn=B(Fn.exports),wn={exports:{}};wn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,b,v,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,b,v,$)):new Date(p,m,g,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Dn=B(wn.exports),xn={exports:{}};xn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var kn=B(xn.exports),On={exports:{}};On.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var An=B(On.exports),En={exports:{}};En.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Hn,Cn,_n,jn=B(En.exports),zn={exports:{}},Mn=B(zn.exports=(Hn={year:0,month:1,day:2,hour:3,minute:4,second:5},Cn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Cn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Cn[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=Hn[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Bn.extend(kn),Bn.extend(jn),Bn.extend(An),Bn.extend(Dn),Bn.extend(Mn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Bn(t).startOf("week");return Tn(n).map((e=>In(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return In(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Bn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Bn(r):void 0,i?Bn(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(_n||(_n={}));const Tn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},In=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Wn=[1,3,5,7,8,10,12],Nn=[4,6,9,11];var Ln,Yn,Pn,Rn;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Wn.includes(a)?Math.min(i,31).toString():Nn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Bn(e,n);return Bn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Bn(e):Bn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Bn(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Bn(e).isSame(Bn(t),n)}(Ln||(Ln={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Bn(e).isBefore(r,"day"))||!(!i||!Bn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Bn(e).isValid())return e}return""}}(Yn||(Yn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Pn||(Pn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Rn||(Rn={}));const Vn=t.div`
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
`,Un=t.div`
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
`;var Jn;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Jn||(Jn={}));const Gn=({show:e=!1,rootId:t,onOverlayClick:n,children:r,backgroundOpacity:i,backgroundBlur:o=!0,disableTransition:s=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[v,$]=d(null),[S,F]=d(),[B]=d((()=>Pn.generate())),w=m(),D=u(),x=u(null),k=r&&l.cloneElement(r,{ref:x}),O=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",A=null!=f?f:S?99999:99998;(e=>{const t=g();c((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Jn.Change,n)}),[t,e]),c((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Jn.Change,n)};return null==t||t.events.on(Jn.Ready,n),()=>null==t?void 0:t.events.off(Jn.Ready,n)}),[t,e])})(A),c((()=>(_(),$(H()),()=>{T(),z().length<1&&j("remove")})),[]),c((()=>{if(e){const e=C();E(e),M();const t=setTimeout((()=>{j("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{z().length<1&&j("remove")}),200);return()=>clearTimeout(e)}}),[e]);const E=e=>{D.current=e,F(e)},H=()=>document&&t?document.getElementById(t):document?document.body:null,C=()=>z().length>0,_=()=>{if(!document.getElementById(Qn)){const e=document.createElement("style");e.id=Qn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Zn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Zn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},j=e=>{const t=document.body.classList.contains(Zn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Zn):document.body.classList.add(Zn)},z=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=[...e,B].join(",")},T=()=>{const e=z();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==B)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return v?b.createPortal(a(Vn,Object.assign({id:O,"data-testid":O,$show:e,$zIndex:A},{children:r&&a(y,Object.assign({id:w},{children:a(Un,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:i||(S?.5:.8),$backgroundBlur:o,$disableTransition:s,onClick:I},{children:k}))}))})),v):null},Xn=e=>a(p,{children:a(Gn,Object.assign({},e))}),Qn="lifesg-ds-overlay-stylesheet",Zn="lifesg-ds-overlay-open",Kn=t.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${qt};
        object-fit: contain;
    }
`;const qn=({src:e,alt:t,className:n,"data-testid":r})=>a("img",{src:e,alt:t||"",className:n,"data-testid":r,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),er=({resources:e,onClick:t,"data-id":n,"data-testid":r="navbar-brand",type:i})=>a(Kn,Object.assign({role:"link",onClick:e=>{t&&t(e,i)},tabIndex:0,"data-id":n,"data-testid":r,$type:i},{children:a(qn,{src:e.logoSrc,alt:e.brandName})})),tr=t.div`
    display: none;

    ${Xt.tablet} {
        display: flex;
    }
`,nr=t.div`
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

	${Xt.tablet} {
        width: 75%;
    }

    ${Xt.mobileL} {
        width: 100%;
    }
`,rr=t.div`
    display: flex;
    flex-direction: column;
`,ir=t.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,ar=t(v)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,or=t(Kt)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Ut.Neutral[1]};

    :active,
    :focus {
        color: ${Ut.Primary};
    }
`,sr=l.forwardRef(((e,t)=>{const{show:n,resources:r,children:i,hideNavBranding:l,onClose:u,onBrandClick:h}=e,[f,g]=d(0),{primary:p,secondary:m}=r;c((()=>(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const y=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return a(tr,Object.assign({ref:t,"data-testid":"drawer"},{children:a(nr,Object.assign({$show:n,$viewHeight:f},{children:o(rr,{children:[o(ir,{children:[a(sn,Object.assign({"data-id":"drawer-brand-container"},{children:!l&&o(s,{children:[a(er,{resources:p,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&o(s,{children:[a(ln,{}),a(er,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),a(or,Object.assign({onClick:u,focusHighlight:!1,"aria-label":"Close nav menu"},{children:a(ar,{})}))]}),i]})}))}))})),lr={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},cr={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},dr={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},ur={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}};var hr=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},fr=Ze;var gr=Ze,pr=Ke,mr=gt;var yr=Ze,br=function(){this.__data__=new fr,this.size=0},vr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},$r=function(e){return this.__data__.get(e)},Sr=function(e){return this.__data__.has(e)},Fr=function(e,t){var n=this.__data__;if(n instanceof gr){var r=n.__data__;if(!pr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new mr(r)}return n.set(e,t),this.size=n.size,this};function Br(e){var t=this.__data__=new yr(e);this.size=t.size}Br.prototype.clear=br,Br.prototype.delete=vr,Br.prototype.get=$r,Br.prototype.has=Sr,Br.prototype.set=Fr;var wr=Br;var Dr=gt,xr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kr=function(e){return this.__data__.has(e)};function Or(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Dr;++t<n;)this.add(e[t])}Or.prototype.add=Or.prototype.push=xr,Or.prototype.has=kr;var Ar=Or,Er=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Hr=function(e,t){return e.has(t)};var Cr=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&n?new Ar:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],p=t[u];if(r)var m=o?r(p,g,u,t,e,a):r(g,p,u,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Er(t,(function(e,t){if(!Hr(f,t)&&(g===e||i(g,e,n,r,a)))return f.push(t)}))){h=!1;break}}else if(g!==p&&!i(g,p,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var _r=O.Uint8Array,jr=Te,zr=Cr,Mr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Tr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ir=A?A.prototype:void 0,Wr=Ir?Ir.valueOf:void 0;var Nr=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new _r(e),new _r(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Mr;case"[object Set]":var l=1&r;if(s||(s=Tr),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=zr(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(Wr)return Wr.call(e)==Wr.call(t)}return!1};var Lr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Yr=w;var Pr=function(e,t,n){var r=t(e);return Yr(e)?r:Lr(r,n(e))};var Rr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Vr=function(){return[]},Ur=Object.prototype.propertyIsEnumerable,Jr=Object.getOwnPropertySymbols,Gr=Jr?function(e){return null==e?[]:(e=Object(e),Rr(Jr(e),(function(t){return Ur.call(e,t)})))}:Vr;var Xr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Qr=N,Zr=L;var Kr=function(e){return Zr(e)&&"[object Arguments]"==Qr(e)},qr=L,ei=Object.prototype,ti=ei.hasOwnProperty,ni=ei.propertyIsEnumerable,ri=Kr(function(){return arguments}())?Kr:function(e){return qr(e)&&ti.call(e,"callee")&&!ni.call(e,"callee")},ii={exports:{}};var ai=function(){return!1};!function(e,t){var n=O,r=ai,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(ii,ii.exports);var oi=ii.exports,si=/^(?:0|[1-9]\d*)$/;var li=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&si.test(e))&&e>-1&&e%1==0&&e<t};var ci=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},di=N,ui=ci,hi=L,fi={};fi["[object Float32Array]"]=fi["[object Float64Array]"]=fi["[object Int8Array]"]=fi["[object Int16Array]"]=fi["[object Int32Array]"]=fi["[object Uint8Array]"]=fi["[object Uint8ClampedArray]"]=fi["[object Uint16Array]"]=fi["[object Uint32Array]"]=!0,fi["[object Arguments]"]=fi["[object Array]"]=fi["[object ArrayBuffer]"]=fi["[object Boolean]"]=fi["[object DataView]"]=fi["[object Date]"]=fi["[object Error]"]=fi["[object Function]"]=fi["[object Map]"]=fi["[object Number]"]=fi["[object Object]"]=fi["[object RegExp]"]=fi["[object Set]"]=fi["[object String]"]=fi["[object WeakMap]"]=!1;var gi=function(e){return hi(e)&&ui(e.length)&&!!fi[di(e)]};var pi=function(e){return function(t){return e(t)}},mi={exports:{}};!function(e,t){var n=D,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(mi,mi.exports);var yi=mi.exports,bi=gi,vi=pi,$i=yi&&yi.isTypedArray,Si=$i?vi($i):bi,Fi=Xr,Bi=ri,wi=w,Di=oi,xi=li,ki=Si,Oi=Object.prototype.hasOwnProperty;var Ai=function(e,t){var n=wi(e),r=!n&&Bi(e),i=!n&&!r&&Di(e),a=!n&&!r&&!i&&ki(e),o=n||r||i||a,s=o?Fi(e.length,String):[],l=s.length;for(var c in e)!t&&!Oi.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||xi(c,l))||s.push(c);return s},Ei=Object.prototype;var Hi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ei)};var Ci=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),_i=Hi,ji=Ci,zi=Object.prototype.hasOwnProperty;var Mi=ee,Ti=ci;var Ii=Ai,Wi=function(e){if(!_i(e))return ji(e);var t=[];for(var n in Object(e))zi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ni=function(e){return null!=e&&Ti(e.length)&&!Mi(e)};var Li=function(e){return Ni(e)?Ii(e):Wi(e)},Yi=Pr,Pi=Gr,Ri=Li;var Vi=function(e){return Yi(e,Ri,Pi)},Ui=Object.prototype.hasOwnProperty;var Ji=function(e,t,n,r,i,a){var o=1&n,s=Vi(e),l=s.length;if(l!=Vi(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Ui.call(t,d)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){var p=e[d=s[c]],m=t[d];if(r)var y=o?r(m,p,d,t,e,a):r(p,m,d,e,t,a);if(!(void 0===y?p===m||i(p,m,n,r,a):y)){f=!1;break}g||(g="constructor"==d)}if(f&&!g){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Gi=be(O,"DataView"),Xi=Ke,Qi=be(O,"Promise"),Zi=be(O,"Set"),Ki=be(O,"WeakMap"),qi=N,ea=ae,ta="[object Map]",na="[object Promise]",ra="[object Set]",ia="[object WeakMap]",aa="[object DataView]",oa=ea(Gi),sa=ea(Xi),la=ea(Qi),ca=ea(Zi),da=ea(Ki),ua=qi;(Gi&&ua(new Gi(new ArrayBuffer(1)))!=aa||Xi&&ua(new Xi)!=ta||Qi&&ua(Qi.resolve())!=na||Zi&&ua(new Zi)!=ra||Ki&&ua(new Ki)!=ia)&&(ua=function(e){var t=qi(e),n="[object Object]"==t?e.constructor:void 0,r=n?ea(n):"";if(r)switch(r){case oa:return aa;case sa:return ta;case la:return na;case ca:return ra;case da:return ia}return t});var ha=wr,fa=Cr,ga=Nr,pa=Ji,ma=ua,ya=w,ba=oi,va=Si,$a="[object Arguments]",Sa="[object Array]",Fa="[object Object]",Ba=Object.prototype.hasOwnProperty;var wa=function(e,t,n,r,i,a){var o=ya(e),s=ya(t),l=o?Sa:ma(e),c=s?Sa:ma(t),d=(l=l==$a?Fa:l)==Fa,u=(c=c==$a?Fa:c)==Fa,h=l==c;if(h&&ba(e)){if(!ba(t))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new ha),o||va(e)?fa(e,t,n,r,i,a):ga(e,t,l,n,r,i,a);if(!(1&n)){var f=d&&Ba.call(e,"__wrapped__"),g=u&&Ba.call(t,"__wrapped__");if(f||g){var p=f?e.value():e,m=g?t.value():t;return a||(a=new ha),i(p,m,n,r,a)}}return!!h&&(a||(a=new ha),pa(e,t,n,r,i,a))},Da=L;var xa=function e(t,n,r,i,a){return t===n||(null==t||null==n||!Da(t)&&!Da(n)?t!=t&&n!=n:wa(t,n,r,i,e,a))},ka=wr,Oa=xa;var Aa=Q;var Ea=function(e){return e==e&&!Aa(e)},Ha=Ea,Ca=Li;var _a=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},ja=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new ka;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?Oa(d,c,3,r,u):h))return!1}}return!0},za=function(e){for(var t=Ca(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Ha(i)]}return t},Ma=_a;var Ta=Ct,Ia=ri,Wa=w,Na=li,La=ci,Ya=jt;var Pa=function(e,t){return null!=e&&t in Object(e)},Ra=function(e,t,n){for(var r=-1,i=(t=Ta(t,e)).length,a=!1;++r<i;){var o=Ya(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&La(i)&&Na(o,i)&&(Wa(e)||Ia(e))};var Va=xa,Ua=Wt,Ja=function(e,t){return null!=e&&Ra(e,t,Pa)},Ga=X,Xa=Ea,Qa=_a,Za=jt;var Ka=Tt;var qa=function(e){return function(t){return null==t?void 0:t[e]}},eo=function(e){return function(t){return Ka(t,e)}},to=X,no=jt;var ro=function(e){var t=za(e);return 1==t.length&&t[0][2]?Ma(t[0][0],t[0][1]):function(n){return n===e||ja(n,e,t)}},io=function(e,t){return Ga(e)&&Xa(t)?Qa(Za(e),t):function(n){var r=Ua(n,e);return void 0===r&&r===t?Ja(n,e):Va(t,r,3)}},ao=function(e){return e},oo=w,so=function(e){return to(e)?qa(no(e)):eo(e)};var lo=/\s/;var co=function(e){for(var t=e.length;t--&&lo.test(e.charAt(t)););return t},uo=/^\s+/;var ho=function(e){return e?e.slice(0,co(e)+1).replace(uo,""):e},fo=Q,go=R,po=/^[-+]0x[0-9a-f]+$/i,mo=/^0b[01]+$/i,yo=/^0o[0-7]+$/i,bo=parseInt;var vo=function(e){if("number"==typeof e)return e;if(go(e))return NaN;if(fo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=fo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ho(e);var n=mo.test(e);return n||yo.test(e)?bo(e.slice(2),n?2:8):po.test(e)?NaN:+e},$o=1/0;var So=function(e){return e?(e=vo(e))===$o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Fo=hr,Bo=function(e){return"function"==typeof e?e:null==e?ao:"object"==typeof e?oo(e)?io(e[0],e[1]):ro(e):so(e)},wo=function(e){var t=So(e),n=t%1;return t==t?n?t-n:t:0},Do=Math.max;var xo=B((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:wo(n);return i<0&&(i=Do(r+i,0)),Fo(e,Bo(t),i)}));const ko=t.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Oo=r`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ao=t.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ut.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Oo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Eo=t(Ao)`
    animation-delay: -0.45s;
`,Ho=t(Ao)`
    animation-delay: -0.3s;
`,Co=t(Ao)`
    animation-delay: -0.15s;
`,_o={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},jo={D1:{fontFamily:_o.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_o.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_o.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_o.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_o.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_o.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_o.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_o.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_o.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_o.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},zo={D1:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_o.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:_o.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:_o.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:_o.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_o.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Mo={collections:{base:jo,oneservice:{D1:{fontFamily:_o.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:_o.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:_o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_o.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:_o.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:_o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:_o.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:_o.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:_o.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:_o.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:_o.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:_o.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:_o.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:zo},defaultValue:"base"},To=e=>t=>{const n=t.theme,r=Yt(Mo,n[Pt.textStyleScheme]);return n.options&&n.options.textStyle?Lt(r,e,n.options.textStyle):Lt(r,e)},Io={D1:{fontFamily:To("D1.fontFamily"),fontSize:To("D1.fontSize"),fontWeight:To("D1.fontWeight"),lineHeight:To("D1.lineHeight"),letterSpacing:To("D1.letterSpacing")},D2:{fontFamily:To("D2.fontFamily"),fontSize:To("D2.fontSize"),fontWeight:To("D2.fontWeight"),lineHeight:To("D2.lineHeight"),letterSpacing:To("D2.letterSpacing")},D3:{fontFamily:To("D3.fontFamily"),fontSize:To("D3.fontSize"),fontWeight:To("D3.fontWeight"),lineHeight:To("D3.lineHeight"),letterSpacing:To("D3.letterSpacing")},D4:{fontFamily:To("D4.fontFamily"),fontSize:To("D4.fontSize"),fontWeight:To("D4.fontWeight"),lineHeight:To("D4.lineHeight"),letterSpacing:To("D4.letterSpacing")},DBody:{fontFamily:To("DBody.fontFamily"),fontSize:To("DBody.fontSize"),fontWeight:To("DBody.fontWeight"),lineHeight:To("DBody.lineHeight"),letterSpacing:To("DBody.letterSpacing")},H1:{fontFamily:To("H1.fontFamily"),fontSize:To("H1.fontSize"),fontWeight:To("H1.fontWeight"),lineHeight:To("H1.lineHeight"),letterSpacing:To("H1.letterSpacing")},H2:{fontFamily:To("H2.fontFamily"),fontSize:To("H2.fontSize"),fontWeight:To("H2.fontWeight"),lineHeight:To("H2.lineHeight"),letterSpacing:To("H2.letterSpacing")},H3:{fontFamily:To("H3.fontFamily"),fontSize:To("H3.fontSize"),fontWeight:To("H3.fontWeight"),lineHeight:To("H3.lineHeight"),letterSpacing:To("H3.letterSpacing")},H4:{fontFamily:To("H4.fontFamily"),fontSize:To("H4.fontSize"),fontWeight:To("H4.fontWeight"),lineHeight:To("H4.lineHeight"),letterSpacing:To("H4.letterSpacing")},H5:{fontFamily:To("H5.fontFamily"),fontSize:To("H5.fontSize"),fontWeight:To("H5.fontWeight"),lineHeight:To("H5.lineHeight"),letterSpacing:To("H5.letterSpacing")},H6:{fontFamily:To("H6.fontFamily"),fontSize:To("H6.fontSize"),fontWeight:To("H6.fontWeight"),lineHeight:To("H6.lineHeight"),letterSpacing:To("H6.letterSpacing")},Body:{fontFamily:To("Body.fontFamily"),fontSize:To("Body.fontSize"),fontWeight:To("Body.fontWeight"),lineHeight:To("Body.lineHeight"),letterSpacing:To("Body.letterSpacing")},BodySmall:{fontFamily:To("BodySmall.fontFamily"),fontSize:To("BodySmall.fontSize"),fontWeight:To("BodySmall.fontWeight"),lineHeight:To("BodySmall.lineHeight"),letterSpacing:To("BodySmall.letterSpacing")},XSmall:{fontFamily:To("XSmall.fontFamily"),fontSize:To("XSmall.fontSize"),fontWeight:To("XSmall.fontWeight"),lineHeight:To("XSmall.lineHeight"),letterSpacing:To("XSmall.letterSpacing")}},Wo=[_o.OpenSans,_o.PlusJakartaSans],No=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Lo=(e,t)=>r=>{var i;const a=Io[e].fontFamily(r),o=Io[e].fontWeight(r),s=Wo.find((e=>Object.values(e).includes(a)));return s?n`
                font-family: ${No(s,t)||No(s,o)||a};
                font-weight: normal !important;
            `:n`
            font-family: ${a};
            font-weight: ${null!==(i=Yo(t)||o)&&void 0!==i?i:"normal"};
        `},Yo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Po=e=>{if(e>0)return n`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ro=(e,t,r=!1)=>i=>{const a=Io[e],o=a.fontSize(i);return n`
            ${Lo(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${n`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Vo=(e=!1,t=!1,r=void 0)=>t?n`
            display: block;
            ${Po(r)}
        `:e?n`
            display: inline;
        `:n`
            display: block;
            ${Po(r)}
        `;var Uo;!function(e){e.D1=t.h1`
        ${e=>n`
                ${Ro("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=t.h1`
        ${e=>n`
                ${Ro("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=t.h1`
        ${e=>n`
                ${Ro("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=t.h1`
        ${e=>n`
                ${Ro("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=t.h1`
        ${e=>n`
                ${Ro("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=t.h1`
        ${e=>n`
                ${Ro("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=t.h2`
        ${e=>n`
                ${Ro("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=t.h3`
        ${e=>n`
                ${Ro("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=t.h4`
        ${e=>n`
                ${Ro("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=t.h5`
        ${e=>n`
                ${Ro("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=t.h6`
        ${e=>n`
                ${Ro("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=t.p`
        ${e=>n`
                ${Ro("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=t.p`
        ${e=>n`
                ${Ro("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=t.span`
        ${e=>n`
                ${Ro("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Vo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Uo||(Uo={}));const Jo=t.a`
    ${e=>n`
            ${Ro(e.textStyle,e.weight)}
            color: ${Ut.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ut.Secondary};

                svg {
                    color: ${Ut.Secondary};
                }
            }
        `}
`,Go=t($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xo=e=>{var{external:t=!1,children:n}=e,r=Qt(e,["external","children"]);return o(Jo,Object.assign({},r,{children:[n,t&&a(Go,{})]}))};var Qo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Qo||(Qo={}));const Zo={collections:{base:{InputBoxShadow:n`
        inset 0 0 4px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 4px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:n`
        inset 0 0 3px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:n`
        inset 0 0 3px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:n`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ko=e=>t=>{var n;const r=t.theme,i=Yt(Zo,r[Pt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Lt(i,e,r.options.designToken):Lt(i,e)},qo={InputBoxShadow:Ko("InputBoxShadow"),InputErrorBoxShadow:Ko("InputErrorBoxShadow"),ElevationBoxShadow:Ko("ElevationBoxShadow"),Table:{Header:Ko("Table.Header"),Cell:{Primary:Ko("Table.Cell.Primary"),Secondary:Ko("Table.Cell.Secondary"),Selected:Ko("Table.Cell.Selected"),Hover:Ko("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ko("Button.Danger.BackgroundColor"),Hover:Ko("Button.Danger.Hover"),Primary:Ko("Button.Danger.Primary"),Border:Ko("Button.Danger.Border")}}},es=t.button`
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
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?qo.Button.Danger.Border:Ut.Primary};

                    color: ${e.$buttonIsDanger?qo.Button.Danger.Primary:Ut.Primary};
                `;case"light":return n`
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid ${Ut.Neutral[5]};

                    color: ${e.$buttonIsDanger?qo.Button.Danger.Primary:Ut.Primary};
                `;case"disabled":return n`
                    background-color: ${Ut.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ut.Neutral[3]};
                `;case"link":return n`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?qo.Button.Danger.Primary:Ut.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?qo.Button.Danger.Hover:Ut.Secondary};
                    }
                `;default:return n`
                    background-color: ${e.$buttonIsDanger?qo.Button.Danger.BackgroundColor:Ut.Primary};
                    border: 1px solid transparent;

                    ${Xt.mobileL} {
                        width: 100%;
                    }

                    color: ${Ut.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?n`
                    height: 2.5rem;
                    ${Ro("H5","semibold")}

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `:n`
                    height: 3rem;
                    ${Ro("H4","semibold")}

                    ${Xt.mobileS} {
                        height: auto;
                    }
                `}
`,ts=t((({color:e,className:t,size:n=18})=>o(ko,Object.assign({className:t,$size:n,$color:e},{children:[a(Ao,{id:"inner1",$size:n-2,$borderWidth:2,$color:e}),a(Eo,{id:"inner2",$size:n-2,$borderWidth:2,$color:e}),a(Ho,{id:"inner3",$size:n-2,$borderWidth:2,$color:e}),a(Co,{id:"inner4",$size:n-2,$borderWidth:2,$color:e})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?qo.Button.Danger.Primary:Ut.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return n`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ns={Default:l.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,c=Qt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return o(es,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[i&&a(ts,Object.assign({},d)),a("span",{children:n})]}))})),Small:l.forwardRef(((e,t)=>{const{children:n,disabled:r=!1,loading:i=!1,styleType:s="default",danger:l=!1}=e,c=Qt(e,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:r?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return o(es,Object.assign({ref:t,"data-testid":c["data-testid"]||"button",disabled:r},d,c,{children:[i&&a(ts,Object.assign({},d,{size:16})),a("span",{children:n})]}))}))},rs=t.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${Xt.tablet} {
        display: none;
    }
`,is=t.ul`
    display: none;

    ${Xt.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,as=t.ul`
    display: none;
    list-style: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Xt.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,os=t.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${Xt.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${Xt.mobileL} {
        ${e=>{if(e.$mobile)return n`
                    padding: 0 1rem;
                `}}
    }
`,ss=t(ns.Small)`
    ${Xt.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ls=t.div`
    display: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,cs=t(Uo.BodySmall)`
    margin-bottom: 0.5rem;
`,ds=t.div`
    display: flex;
`,us=t.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Xt.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${Xt.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,hs=({actionButtons:e,mobile:t=!1,onActionButtonClick:n})=>{const r=e=>{e.stopPropagation()},i=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},l=(e,t)=>{const n=e?(e=>{const t=xo(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(t):t;return n.map(((t,n)=>{let s;switch(t.type){case"download":s=e?(l=t.args,o(ls,{children:[a(cs,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),o(ds,{children:[a(us,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:r},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),a(us,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:r},{children:a("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):a(ss,Object.assign({},t.args,{type:"button",onClick:i(t),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const r=t.args["data-testid"]?`action-button__${t.args["data-testid"]}`:`action-button__button-${e?"mobile-":""}${n+1}`;s=a(ss,Object.assign({},t.args,{type:"button",onClick:i(t),"data-testid":r}));break}case"component":{const e=t.args;s=e&&e.render||null;break}default:s=null}var l;if(s)return a(os,Object.assign({$mobile:e},{children:s}),`action-button-${n+1}`)}))};if(e){const n=(null==e?void 0:e.mobile)||e.desktop,r=n.filter((e=>!!e.uncollapsible)),i=n.filter((e=>!e.uncollapsible));return t?a(s,{children:i.length>0&&a(as,{children:l(t,i)})}):o(s,{children:[r.length>0&&a(is,{children:l(!1,r)}),e.desktop.length>0&&a(rs,{children:l(t,e.desktop)})]})}return a(s,{})},fs=t.ul`
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

    background: ${Ut.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${qo.ElevationBoxShadow};
`,gs=t.ul`
    display: none;
    list-style: none;

    ${Xt.tablet} {
        border-left: 0.25rem solid ${Ut.Primary};
        display: flex;
        flex-direction: column;
    }
`,ps=t(Uo.Hyperlink.Small)`
    ${Ro("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Ut.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Ut.Primary};
    }
    :hover {
        color: ${Ut.Accent.Light[1]};
    }

    ${Xt.tablet} {
        ${Ro("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,ms=t.li`
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

    ${Xt.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,ys=({items:e,mobile:t=!1,onItemClick:n})=>{const r=e=>t=>{t.stopPropagation(),n(t,e)},i=(t=!1)=>e.map(((e,n)=>{const{children:i,options:o}=e,s=Qt(e,["children","options"]),l=t?`link__mobile-${n+1}`:`link__${n+1}`;return a(ms,{children:a(ps,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:r(e)},o,{children:i}))},n)}));if(e&&e.length>0){return a(t?gs:fs,{children:i(t)})}return a(s,{})},bs=t.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Xt.tablet} {
        display: none;
    }
`,vs=t.ul`
    display: none;
    list-style: none;

    ${Xt.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,$s=t.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Xt.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Ss=t(Uo.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ut.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Ut.Neutral[1]};
    }

    ${Xt.tablet} {
        color: ${Ut.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Ut.Neutral[1]};
        }
    }
`,Fs=t.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,Bs=t.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Ut.Primary};

    ${Xt.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Ut.Primary};
    }
`,ws=t.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,Ds=t(Kt)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,xs=t(S)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ut.Neutral[3]};
    :hover {
        color: ${Ut.Neutral[1]};
    }
`,ks=({items:e,selectedId:t,mobile:n=!1,hideNavBranding:r,onItemClick:i})=>{const[l,h]=d(-1),[f,g]=d(!1),p=u(null);c((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},y=(e,t)=>n=>{n.stopPropagation(),h(t),g(!0),i(n,e)},b=(e,t)=>{e.stopPropagation(),i(e,t),g(!1)},v=()=>e.map(((e,i)=>{if("component"===e.itemType){const t=e&&e.children||null;return a("li",{children:t},i)}{const s=(e=>{if(e.id===t)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:c,options:d}=e,u=Qt(e,["children","options"]),h=s?n?"bold":"semibold":"regular",g=n?`link__mobile-${i+1}`:`link__${i+1}`,p=l>=0&&l===i&&f;return o($s,Object.assign({$hiddenBranding:r},{children:[o(Ss,Object.assign({"data-testid":g,weight:h,$selected:s},u,{onClick:y(e,i)},d,{children:[a(Fs,{children:c}),s&&a(Bs,{"data-testid":`${g}-indicator`}),n&&e.subMenu&&a(ws,{children:a(Ds,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:p,focusHighlight:!1,focusOutline:"browser","aria-label":p?"Collapse":"Expand"},{children:a(xs,{})}))})]})),p&&a(ys,{items:e.subMenu,mobile:n,onItemClick:b})]}),i)}}));return e&&e.length>0?n?a(vs,Object.assign({ref:p},{children:v()})):a(bs,Object.assign({ref:p,$alignLeft:r},{children:v()})):a(s,{})},Os=h(((e,t)=>{var{items:n,className:r,id:l,selectedId:h,compress:g=!1,fixed:p=!0,resources:m,hideNavElements:y=!1,hideNavBranding:b=!1,drawerDismissalExclusions:v=[],actionButtons:$,onItemClick:S,onActionButtonClick:F,onBrandClick:B,masthead:w=!0,layout:D="default"}=e,x=Qt(e,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[k,O]=d(!1),[A,E]=d(!1),H="stretch"===D,C=u(),_=i(),j=(e=>{switch(e){case"bookingsg":return cr;case"mylegacy":return ur;case"ccube":return dr;default:return lr}})(null==_?void 0:_.resourceScheme),z=(null==m?void 0:m.primary)||j.primary,M=null==m?void 0:m.secondary;f(t,(()=>Object.assign(C.current,{dismissDrawer:()=>{T()}})),[k]),c((()=>(W(),window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W)})),[]);const T=()=>{O(!1),setTimeout((()=>{E(!1)}),550)},I=e=>k&&-1===v.indexOf(e),W=()=>{window.innerWidth<=Jt.tablet&&k&&T()},N=(e,t)=>{B&&(e.preventDefault(),B(t)),I("brand-click")&&T()},L=(e,t)=>{t.onClick?t.onClick(e):S&&(e.preventDefault(),S(t)),!(null==t?void 0:t.subMenu)&&I("item-click")&&T()},Y=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):F&&(e.preventDefault(),F(t)),I("item-click")&&T()},P=()=>{O(!0),E(!0)},R=()=>{I("close-button-click")&&T()},V=()=>{const e=n.mobile||n.desktop;return e&&e.length>0||$&&(()=>{const e=$.mobile||$.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?a(an,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1},{children:a(on,{})})):null};return o(tn,Object.assign({ref:C,$fixed:p,className:r,id:l||"navbar-wrapper","data-testid":x["data-testid"]||"navbar-wrapper"},{children:[w&&a(vn,{}),o(yn.Content,Object.assign({stretch:H},{children:[o(nn,Object.assign({$compress:g},{children:[!b&&o(sn,Object.assign({$compress:g,"data-id":"brand-container"},{children:[a(er,{resources:z,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),M&&o(s,{children:[a(ln,{$compress:g}),a(er,{resources:M,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!y&&o(rn,Object.assign({$hideNavBranding:b},{children:[a(ks,{items:n.desktop,onItemClick:L,selectedId:h,hideNavBranding:b}),a(hs,{actionButtons:$,onActionButtonClick:Y}),V()]}))]})),!y&&a(Xn,Object.assign({show:A,enableOverlayClick:!0,onOverlayClick:R},{children:o(sr,Object.assign({show:k,resources:{primary:z,secondary:M},onClose:R,onBrandClick:N,actionButtons:$,hideNavBranding:b},{children:[a(ks,{items:n.mobile||n.desktop,onItemClick:L,selectedId:h,mobile:!0}),a(hs,{actionButtons:$,onActionButtonClick:Y,mobile:!0})]}))}))]}))]}))})),As=en,Es=3.5;export{Os as Navbar,As as NavbarHeight,Es as NavbarMobileHeight};
//# sourceMappingURL=index.js.map
