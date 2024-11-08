import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useEffect as o,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useLayoutEffect as h,forwardRef as m,useCallback as g,useContext as f,useMemo as p}from"react";import{ArrowRightIcon as b,ChevronDownIcon as y}from"@lifesg/react-icons";import v,{css as x,keyframes as w,useTheme as F}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as D}from"@lifesg/react-icons/chevron-up";import{findDOMNode as B,unstable_batchedUpdates as E}from"react-dom";import{ArrowRightIcon as k}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as C}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as O}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as A}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as _}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as z}from"@lifesg/react-icons/circle";import{CircleDotIcon as M}from"@lifesg/react-icons/circle-dot";import{CrossIcon as j}from"@lifesg/react-icons/cross";import{SquareIcon as T}from"@lifesg/react-icons/square";import{SquareTickFillIcon as H}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as I}from"@lifesg/react-icons/tick";import{MagnifierIcon as P}from"@lifesg/react-icons/magnifier";import{useFloatingTree as L,useFloating as R,autoUpdate as N,offset as W,flip as V,shift as Y,limitShift as U,size as q,useTransitionStyles as X,useClick as J,useDismiss as Z,useInteractions as Q,FloatingPortal as G,FloatingFocusManager as K}from"@floating-ui/react";function ee(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const te=(e,t,r="window",n)=>{const i=a();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])};var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ne(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ie=Array.isArray,ae="object"==typeof re&&re&&re.Object===Object&&re,oe=ae,se="object"==typeof self&&self&&self.Object===Object&&self,le=oe||se||Function("return this")(),de=le.Symbol,ce=de,ue=Object.prototype,he=ue.hasOwnProperty,me=ue.toString,ge=ce?ce.toStringTag:void 0;var fe=function(e){var t=he.call(e,ge),r=e[ge];try{e[ge]=void 0;var n=!0}catch(e){}var i=me.call(e);return n&&(t?e[ge]=r:delete e[ge]),i},pe=Object.prototype.toString;var be=fe,ye=function(e){return pe.call(e)},ve=de?de.toStringTag:void 0;var xe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ve&&ve in Object(e)?be(e):ye(e)};var we=function(e){return null!=e&&"object"==typeof e},Fe=xe,$e=we;var Se=function(e){return"symbol"==typeof e||$e(e)&&"[object Symbol]"==Fe(e)},De=ie,Be=Se,Ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ke=/^\w*$/;var Ce=function(e,t){if(De(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Be(e))||(ke.test(e)||!Ee.test(e)||null!=t&&e in Object(t))};var Oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ae=xe,_e=Oe;var ze,Me=function(e){if(!_e(e))return!1;var t=Ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},je=le["__core-js_shared__"],Te=(ze=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+ze:"";var He=function(e){return!!Te&&Te in e},Ie=Function.prototype.toString;var Pe=function(e){if(null!=e){try{return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Le=Me,Re=He,Ne=Oe,We=Pe,Ve=/^\[object .+?Constructor\]$/,Ye=Function.prototype,Ue=Object.prototype,qe=Ye.toString,Xe=Ue.hasOwnProperty,Je=RegExp("^"+qe.call(Xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ze=function(e){return!(!Ne(e)||Re(e))&&(Le(e)?Je:Ve).test(We(e))},Qe=function(e,t){return null==e?void 0:e[t]};var Ge=function(e,t){var r=Qe(e,t);return Ze(r)?r:void 0},Ke=Ge(Object,"create"),et=Ke;var tt=function(){this.__data__=et?et(null):{},this.size=0};var rt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nt=Ke,it=Object.prototype.hasOwnProperty;var at=function(e){var t=this.__data__;if(nt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return it.call(t,e)?t[e]:void 0},ot=Ke,st=Object.prototype.hasOwnProperty;var lt=Ke;var dt=tt,ct=rt,ut=at,ht=function(e){var t=this.__data__;return ot?void 0!==t[e]:st.call(t,e)},mt=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=lt&&void 0===t?"__lodash_hash_undefined__":t,this};function gt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}gt.prototype.clear=dt,gt.prototype.delete=ct,gt.prototype.get=ut,gt.prototype.has=ht,gt.prototype.set=mt;var ft=gt;var pt=function(){this.__data__=[],this.size=0};var bt=function(e,t){return e===t||e!=e&&t!=t},yt=bt;var vt=function(e,t){for(var r=e.length;r--;)if(yt(e[r][0],t))return r;return-1},xt=vt,wt=Array.prototype.splice;var Ft=vt;var $t=vt;var St=vt;var Dt=pt,Bt=function(e){var t=this.__data__,r=xt(t,e);return!(r<0)&&(r==t.length-1?t.pop():wt.call(t,r,1),--this.size,!0)},Et=function(e){var t=this.__data__,r=Ft(t,e);return r<0?void 0:t[r][1]},kt=function(e){return $t(this.__data__,e)>-1},Ct=function(e,t){var r=this.__data__,n=St(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ot(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ot.prototype.clear=Dt,Ot.prototype.delete=Bt,Ot.prototype.get=Et,Ot.prototype.has=kt,Ot.prototype.set=Ct;var At=Ot,_t=Ge(le,"Map"),zt=ft,Mt=At,jt=_t;var Tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ht=function(e,t){var r=e.__data__;return Tt(t)?r["string"==typeof t?"string":"hash"]:r.map},It=Ht;var Pt=Ht;var Lt=Ht;var Rt=Ht;var Nt=function(e,t){var r=Rt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Wt=function(){this.size=0,this.__data__={hash:new zt,map:new(jt||Mt),string:new zt}},Vt=function(e){var t=It(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Pt(this,e).get(e)},Ut=function(e){return Lt(this,e).has(e)},qt=Nt;function Xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xt.prototype.clear=Wt,Xt.prototype.delete=Vt,Xt.prototype.get=Yt,Xt.prototype.has=Ut,Xt.prototype.set=qt;var Jt=Xt,Zt=Jt;function Qt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Qt.Cache||Zt),r}Qt.Cache=Zt;var Gt=Qt;var Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,er=/\\(\\)?/g,tr=function(e){var t=Gt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Kt,(function(e,r,n,i){t.push(n?i.replace(er,"$1"):r||e)})),t}));var rr=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},nr=ie,ir=Se,ar=de?de.prototype:void 0,or=ar?ar.toString:void 0;var sr=function e(t){if("string"==typeof t)return t;if(nr(t))return rr(t,e)+"";if(ir(t))return or?or.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},lr=sr;var dr=ie,cr=Ce,ur=tr,hr=function(e){return null==e?"":lr(e)};var mr=function(e,t){return dr(e)?e:cr(e,t)?[e]:ur(hr(e))},gr=Se;var fr=function(e){if("string"==typeof e||gr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},pr=mr,br=fr;var yr=function(e,t){for(var r=0,n=(t=pr(t,e)).length;null!=e&&r<n;)e=e[br(t[r++])];return r&&r==n?e:void 0},vr=yr;var xr=function(e,t,r){var n=null==e?void 0:vr(e,t);return void 0===n?r:n},wr=ne(xr);const Fr=(e,t,r)=>t?wr(r,t)||wr(e,t):r||e,$r=(e,t)=>{const r=t||e.defaultValue;return wr(e.collections,r)};var Sr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Sr||(Sr={}));const Dr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Br=e=>t=>{const r=t.theme,n=$r(Dr,r[Sr.colorScheme]);return r.options&&r.options.color?Fr(n,e,r.options.color):Fr(n,e)},Er={Brand:{1:Br("Brand.1"),2:Br("Brand.2"),3:Br("Brand.3"),4:Br("Brand.4"),5:Br("Brand.5"),6:Br("Brand.6")},Primary:Br("Primary"),PrimaryDark:Br("PrimaryDark"),Secondary:Br("Secondary"),Accent:{Light:{1:Br("Accent.Light.1"),2:Br("Accent.Light.2"),3:Br("Accent.Light.3"),4:Br("Accent.Light.4"),5:Br("Accent.Light.5"),6:Br("Accent.Light.6")},Dark:{1:Br("Accent.Dark.1"),2:Br("Accent.Dark.2"),3:Br("Accent.Dark.3")}},Neutral:{1:Br("Neutral.1"),2:Br("Neutral.2"),3:Br("Neutral.3"),4:Br("Neutral.4"),5:Br("Neutral.5"),6:Br("Neutral.6"),7:Br("Neutral.7"),8:Br("Neutral.8")},Validation:{Green:{Text:Br("Validation.Green.Text"),Icon:Br("Validation.Green.Icon"),Border:Br("Validation.Green.Border"),Background:Br("Validation.Green.Background")},Orange:{Text:Br("Validation.Orange.Text"),Icon:Br("Validation.Orange.Icon"),Border:Br("Validation.Orange.Border"),Background:Br("Validation.Orange.Background"),Badge:Br("Validation.Orange.Badge")},Red:{Text:Br("Validation.Red.Text"),Icon:Br("Validation.Red.Icon"),Border:Br("Validation.Red.Border"),Background:Br("Validation.Red.Background")},Blue:{Text:Br("Validation.Blue.Text"),Icon:Br("Validation.Blue.Icon"),Border:Br("Validation.Blue.Border"),Background:Br("Validation.Blue.Background")}},Shadow:{Accent:Br("Shadow.Accent"),Red:Br("Shadow.Red"),Elevation:Br("Shadow.Elevation")}},kr=v.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return x`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,Cr=v.div`
    width: 100%; // Force next flex item to break to next line
`,Or=v.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Ar=v(b)`
    color: ${Er.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,_r=v.div`
    position: absolute;
    background: ${e=>e.$error?Er.Validation.Red.Border(e):Er.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return x`
                    opacity: 1;
                `;case"end":return x`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return x`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return x`
                display: none;
            `}}
`,zr=({children:r,currentActive:n,error:i,className:a,wrap:o})=>{const[s,l]=r;return e(kr,Object.assign({className:a,$wrap:o},{children:[t(Or,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Ar,{}),o&&t(Cr,{}),t(Or,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(_r,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:o})]}))},Mr={collections:{base:{InputBoxShadow:x`
        inset 0 0 4px 0px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 4px 0px ${Er.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:x`
        inset 0 0 3px 0px ${Er.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 3px 0px ${Er.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Er.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jr=e=>t=>{var r;const n=t.theme,i=$r(Mr,n[Sr.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Fr(i,e,n.options.designToken):Fr(i,e)},Tr=jr("InputBoxShadow"),Hr=jr("InputErrorBoxShadow"),Ir=(jr("ElevationBoxShadow"),jr("Table.Header"),jr("Table.Cell.Primary"),jr("Table.Cell.Secondary"),jr("Table.Cell.Selected"),jr("Table.Cell.Hover"),jr("Button.Danger.BackgroundColor"),jr("Button.Danger.Hover"),jr("Button.Danger.Primary"),jr("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Pr={D1:{fontFamily:Ir.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ir.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ir.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ir.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ir.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ir.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ir.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ir.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ir.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ir.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ir.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ir.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ir.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ir.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Lr={D1:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ir.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ir.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ir.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ir.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ir.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Rr={collections:{base:Pr,oneservice:{D1:{fontFamily:Ir.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ir.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ir.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ir.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ir.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ir.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ir.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ir.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ir.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ir.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ir.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ir.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ir.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ir.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Lr},defaultValue:"base"},Nr=e=>t=>{const r=t.theme,n=$r(Rr,r[Sr.textStyleScheme]);return r.options&&r.options.textStyle?Fr(n,e,r.options.textStyle):Fr(n,e)},Wr={D1:{fontFamily:Nr("D1.fontFamily"),fontSize:Nr("D1.fontSize"),fontWeight:Nr("D1.fontWeight"),lineHeight:Nr("D1.lineHeight"),letterSpacing:Nr("D1.letterSpacing")},D2:{fontFamily:Nr("D2.fontFamily"),fontSize:Nr("D2.fontSize"),fontWeight:Nr("D2.fontWeight"),lineHeight:Nr("D2.lineHeight"),letterSpacing:Nr("D2.letterSpacing")},D3:{fontFamily:Nr("D3.fontFamily"),fontSize:Nr("D3.fontSize"),fontWeight:Nr("D3.fontWeight"),lineHeight:Nr("D3.lineHeight"),letterSpacing:Nr("D3.letterSpacing")},D4:{fontFamily:Nr("D4.fontFamily"),fontSize:Nr("D4.fontSize"),fontWeight:Nr("D4.fontWeight"),lineHeight:Nr("D4.lineHeight"),letterSpacing:Nr("D4.letterSpacing")},DBody:{fontFamily:Nr("DBody.fontFamily"),fontSize:Nr("DBody.fontSize"),fontWeight:Nr("DBody.fontWeight"),lineHeight:Nr("DBody.lineHeight"),letterSpacing:Nr("DBody.letterSpacing")},H1:{fontFamily:Nr("H1.fontFamily"),fontSize:Nr("H1.fontSize"),fontWeight:Nr("H1.fontWeight"),lineHeight:Nr("H1.lineHeight"),letterSpacing:Nr("H1.letterSpacing")},H2:{fontFamily:Nr("H2.fontFamily"),fontSize:Nr("H2.fontSize"),fontWeight:Nr("H2.fontWeight"),lineHeight:Nr("H2.lineHeight"),letterSpacing:Nr("H2.letterSpacing")},H3:{fontFamily:Nr("H3.fontFamily"),fontSize:Nr("H3.fontSize"),fontWeight:Nr("H3.fontWeight"),lineHeight:Nr("H3.lineHeight"),letterSpacing:Nr("H3.letterSpacing")},H4:{fontFamily:Nr("H4.fontFamily"),fontSize:Nr("H4.fontSize"),fontWeight:Nr("H4.fontWeight"),lineHeight:Nr("H4.lineHeight"),letterSpacing:Nr("H4.letterSpacing")},H5:{fontFamily:Nr("H5.fontFamily"),fontSize:Nr("H5.fontSize"),fontWeight:Nr("H5.fontWeight"),lineHeight:Nr("H5.lineHeight"),letterSpacing:Nr("H5.letterSpacing")},H6:{fontFamily:Nr("H6.fontFamily"),fontSize:Nr("H6.fontSize"),fontWeight:Nr("H6.fontWeight"),lineHeight:Nr("H6.lineHeight"),letterSpacing:Nr("H6.letterSpacing")},Body:{fontFamily:Nr("Body.fontFamily"),fontSize:Nr("Body.fontSize"),fontWeight:Nr("Body.fontWeight"),lineHeight:Nr("Body.lineHeight"),letterSpacing:Nr("Body.letterSpacing")},BodySmall:{fontFamily:Nr("BodySmall.fontFamily"),fontSize:Nr("BodySmall.fontSize"),fontWeight:Nr("BodySmall.fontWeight"),lineHeight:Nr("BodySmall.lineHeight"),letterSpacing:Nr("BodySmall.letterSpacing")},XSmall:{fontFamily:Nr("XSmall.fontFamily"),fontSize:Nr("XSmall.fontSize"),fontWeight:Nr("XSmall.fontWeight"),lineHeight:Nr("XSmall.lineHeight"),letterSpacing:Nr("XSmall.letterSpacing")}},Vr=[Ir.OpenSans,Ir.PlusJakartaSans],Yr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ur=(e,t)=>r=>{var n;const i=Wr[e].fontFamily(r),a=Wr[e].fontWeight(r),o=Vr.find((e=>Object.values(e).includes(i)));return o?x`
                font-family: ${Yr(o,t)||Yr(o,a)||i};
                font-weight: normal !important;
            `:x`
            font-family: ${i};
            font-weight: ${null!==(n=qr(t)||a)&&void 0!==n?n:"normal"};
        `},qr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xr=e=>{if(e>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jr=(e,t,r=!1)=>n=>{const i=Wr[e],a=i.fontSize(n);return x`
            ${Ur(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${x`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Zr=(e=!1,t=!1,r=void 0)=>t?x`
            display: block;
            ${Xr(r)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Xr(r)}
        `;var Qr;!function(e){e.D1=v.h1`
        ${e=>x`
                ${Jr("D1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>x`
                ${Jr("D2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>x`
                ${Jr("D3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>x`
                ${Jr("D4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>x`
                ${Jr("DBody",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>x`
                ${Jr("H1",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>x`
                ${Jr("H2",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>x`
                ${Jr("H3",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>x`
                ${Jr("H4",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>x`
                ${Jr("H5",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>x`
                ${Jr("H6",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>x`
                ${Jr("Body",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>x`
                ${Jr("BodySmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>x`
                ${Jr("XSmall",e.weight,e.paragraph)}
                color: ${Er.Neutral[1]};
                ${Zr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>en(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>en(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Qr||(Qr={}));const Gr=v.a`
    ${e=>x`
            ${Jr(e.textStyle,e.weight)}
            color: ${Er.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Er.Secondary};

                svg {
                    color: ${Er.Secondary};
                }
            }
        `}
`,Kr=v($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,en=r=>{var{external:n=!1,children:i}=r,a=ee(r,["external","children"]);return e(Gr,Object.assign({},a,{children:[i,n&&t(Kr,{})]}))};var tn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(tn||(tn={}));const rn=x`
    border: 1px solid ${Er.Accent.Light[1]};
    box-shadow: ${Tr};
`,nn=x`
    border: 1px solid ${Er.Accent.Light[1]};
    box-shadow: none;
`,an=x`
    border: 1px solid ${Er.Neutral[5]};
    box-shadow: none;
`,on=x`
    border: 1px solid ${Er.Validation.Red.Border};
    box-shadow: ${Hr};
`,sn=v.div`
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    background: ${Er.Neutral[8]};

    :focus-within {
        ${rn}
    }
    ${e=>e.$focused&&rn}

    ${e=>e.$readOnly?x`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${nn}
                }
                ${e.$focused&&nn}
            `:e.$disabled?x`
                background: ${Er.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${an}
                }
                ${e.$focused&&an}
            `:e.$error?x`
                border: 1px solid ${Er.Validation.Red.Border};

                :focus-within {
                    ${on}
                }
                ${e.$focused&&on}
            `:void 0}
`,ln=v(sn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,dn=v.input`
    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Er.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Er.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`,cn=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Er.Primary};
    }
`,un=v.div`
    position: relative;
`,hn=v(ln)`
    height: 3rem;
    gap: 0.5rem;
`,mn=v(dn)`
    display: block;
    width: 100%;
    flex: 1;
`;var gn={exports:{}};gn.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),a=r-i<0,o=t.clone().add(n+(a?-1:1),d);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=p;var w="$isDayjsObject",F=function(e){return e instanceof B||!(!e||!e[w])},$=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(i=a),r&&(x[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},S=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},D=y;D.l=$,D.i=F,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),m=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return m(n?b-x:b+(6-x),p);case s:case h:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),c="set"+(this.$u?"UTC":""),m=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[m](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var g=D.p(c),f=function(e){var t=S(m);return D.w(t.date(t.date()+Math.round(e*n)),m)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return f(1);if(g===l)return f(7);var p=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,b=this.$d.getTime()+n*p;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var g,f=this,p=D.p(h),b=S(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return D.m(f,b)};switch(p){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case o:g=v/r;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return m?g:D.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),E=B.prototype;return S.prototype=E,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,B,S),e.$i=!0),S},S.locale=$,S.isDayjs=F,S.unix=function(e){return S(1e3*e)},S.en=x[v],S.Ls=x,S.p={},S}();var fn,pn,bn,yn=ne(gn.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(fn||(fn={})),function(e){e.AM="AM",e.PM="PM"}(pn||(pn={})),function(e){e.roundToNearestHour=(e,t)=>{const r=yn(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=yn(e,n),a=yn(t,n);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(r)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:pn.AM};if(!t)return r;try{if("24hr"===e){const n=wn(t,e);r.minute=fn.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=pn.AM,r.hour=0===i?"12":fn.padValue(i.toString())):(r.period=pn.PM,r.hour=12===i?i.toString():fn.padValue((i-12).toString()))}else{const n=wn(t,e);r.hour=fn.padValue(n.hour),r.minute=fn.padValue(n.minute),r.period="am"===n.period.toLowerCase()?pn.AM:pn.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?fn.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return fn.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?fn.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?fn.padValue(n.toString()):13===n?fn.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===pn.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return fn.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=wn(e,t),n=fn.padValue(r.hour);let i=`${n}:${fn.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&a<12&&(a+=12),"am"===r&&12===a&&(a=0),Fn(a,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const a=[];let o=0,s=1440-t;for(n&&(o=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const n=o%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Fn(e,n,t);a.push(r)}else{const t=Fn(e,n);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const a=parseInt(n[3]||"0",10);let o=n[4];if(void 0===n[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),Fn(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Fn(i,a,o)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",a=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<a)a=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&12!==a&&(a+=12),"am"===r&&12===a&&(a=0),60*a+i}}(bn||(bn={}));const vn=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},xn=e=>{const t=parseInt(e);return t>=0&&t<=59},wn=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!vn(r[0],t)||!xn(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!vn(r[0],t)||!xn(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Fn=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var $n=function(e,t){return $n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},$n(e,t)};var Sn=function(){return Sn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Sn.apply(this,arguments)};var Dn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Bn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},En="object"==typeof Dn&&Dn&&Dn.Object===Object&&Dn,kn="object"==typeof self&&self&&self.Object===Object&&self,Cn=En||kn||Function("return this")(),On=Cn,An=function(){return On.Date.now()},_n=/\s/;var zn=function(e){for(var t=e.length;t--&&_n.test(e.charAt(t)););return t},Mn=/^\s+/;var jn=function(e){return e?e.slice(0,zn(e)+1).replace(Mn,""):e},Tn=Cn.Symbol,Hn=Tn,In=Object.prototype,Pn=In.hasOwnProperty,Ln=In.toString,Rn=Hn?Hn.toStringTag:void 0;var Nn=function(e){var t=Pn.call(e,Rn),r=e[Rn];try{e[Rn]=void 0;var n=!0}catch(e){}var i=Ln.call(e);return n&&(t?e[Rn]=r:delete e[Rn]),i},Wn=Object.prototype.toString;var Vn=Nn,Yn=function(e){return Wn.call(e)},Un=Tn?Tn.toStringTag:void 0;var qn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Un&&Un in Object(e)?Vn(e):Yn(e)},Xn=function(e){return null!=e&&"object"==typeof e};var Jn=jn,Zn=Bn,Qn=function(e){return"symbol"==typeof e||Xn(e)&&"[object Symbol]"==qn(e)},Gn=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,ei=/^0o[0-7]+$/i,ti=parseInt;var ri=Bn,ni=An,ii=function(e){if("number"==typeof e)return e;if(Qn(e))return NaN;if(Zn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jn(e);var r=Kn.test(e);return r||ei.test(e)?ti(e.slice(2),r?2:8):Gn.test(e)?NaN:+e},ai=Math.max,oi=Math.min;var si=function(e,t,r){var n,i,a,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,a=i;return n=i=void 0,d=t,o=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=a}function f(){var e=ni();if(g(e))return p(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?oi(r,a-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?m(e):(n=i=void 0,o)}function b(){var e=ni(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(f,t),c?m(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),m(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=ii(t)||0,ri(r)&&(c=!!r.leading,a=(u="maxWait"in r)?ai(ii(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:p(ni())},b},li=si,di=Bn;var ci=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return di(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),li(e,t,{leading:n,maxWait:t,trailing:i})},ui=function(e,t,r,n){switch(t){case"debounce":return si(e,r,n);case"throttle":return ci(e,r,n);default:return e}},hi=function(e){return"function"==typeof e},mi=function(){return"undefined"==typeof window},gi=function(e){return e instanceof Element||e instanceof HTMLDocument},fi=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&hi(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!mi()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(mi())return null;if(t)return document.querySelector(t);if(n&&gi(n))return n;if(r.targetRef&&gi(r.targetRef.current))return r.targetRef.current;var i=B(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=fi(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!mi()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return hi(t)?"renderProp":hi(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,mi()||(r.resizeHandler=ui(r.createResizeHandler,i,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}$n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){mi()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(o,null)}}}(u);var pi=mi()?o:h;function bi(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,m=e.targetRef,g=e.observerOptions,f=e.onResize,p=a(r),b=a(null),y=null!=m?m:b,v=a(),x=s({width:void 0,height:void 0}),w=x[0],F=x[1];return pi((function(){if(!mi()){var e=fi(f,F,c,h);v.current=ui((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!mi()&&e({width:n,height:i}),p.current=!1}))}),n,o,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,l,c,h,f,g,y.current]),Sn({ref:y},w)}var yi=Object.defineProperty,vi={};((e,t)=>{for(var r in t)yi(e,r,{get:t[r],enumerable:!0})})(vi,{assign:()=>Gi,colors:()=>Ji,createStringInterpolator:()=>Yi,skipAnimation:()=>Zi,to:()=>Ui,willAdvance:()=>Qi});var xi=Ti(),wi=e=>_i(e,xi),Fi=Ti();wi.write=e=>_i(e,Fi);var $i=Ti();wi.onStart=e=>_i(e,$i);var Si=Ti();wi.onFrame=e=>_i(e,Si);var Di=Ti();wi.onFinish=e=>_i(e,Di);var Bi=[];wi.setTimeout=(e,t)=>{const r=wi.now()+t,n=()=>{const e=Bi.findIndex((e=>e.cancel==n));~e&&Bi.splice(e,1),Oi-=~e?1:0},i={time:r,handler:e,cancel:n};return Bi.splice(Ei(r),0,i),Oi+=1,zi(),i};var Ei=e=>~(~Bi.findIndex((t=>t.time>e))||~Bi.length);wi.cancel=e=>{$i.delete(e),Si.delete(e),Di.delete(e),xi.delete(e),Fi.delete(e)},wi.sync=e=>{Ai=!0,wi.batchedUpdates(e),Ai=!1},wi.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,wi.onStart(r)}return n.handler=e,n.cancel=()=>{$i.delete(r),t=null},n};var ki="undefined"!=typeof window?window.requestAnimationFrame:()=>{};wi.use=e=>ki=e,wi.now="undefined"!=typeof performance?()=>performance.now():Date.now,wi.batchedUpdates=e=>e(),wi.catch=console.error,wi.frameLoop="always",wi.advance=()=>{"demand"!==wi.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ji()};var Ci=-1,Oi=0,Ai=!1;function _i(e,t){Ai?(t.delete(e),e(0)):(t.add(e),zi())}function zi(){Ci<0&&(Ci=0,"demand"!==wi.frameLoop&&ki(Mi))}function Mi(){~Ci&&(ki(Mi),wi.batchedUpdates(ji))}function ji(){const e=Ci;Ci=wi.now();const t=Ei(Ci);t&&(Hi(Bi.splice(0,t),(e=>e.handler())),Oi-=t),Oi?($i.flush(),xi.flush(e?Math.min(64,Ci-e):16.667),Si.flush(),Fi.flush(),Di.flush()):Ci=-1}function Ti(){let e=new Set,t=e;return{add(r){Oi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Oi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Oi-=t.size,Hi(t,(t=>t(r)&&e.add(t))),Oi+=e.size,t=e)}}}function Hi(e,t){e.forEach((e=>{try{t(e)}catch(e){wi.catch(e)}}))}function Ii(){}var Pi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Li(e,t){if(Pi.arr(e)){if(!Pi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Ri=(e,t)=>e.forEach(t);function Ni(e,t,r){if(Pi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Wi=e=>Pi.und(e)?[]:Pi.arr(e)?e:[e];function Vi(e,t){if(e.size){const r=Array.from(e);e.clear(),Ri(r,t)}}var Yi,Ui,qi=(e,...t)=>Vi(e,(e=>e(...t))),Xi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ji=null,Zi=!1,Qi=Ii,Gi=e=>{e.to&&(Ui=e.to),e.now&&(wi.now=e.now),void 0!==e.colors&&(Ji=e.colors),null!=e.skipAnimation&&(Zi=e.skipAnimation),e.createStringInterpolator&&(Yi=e.createStringInterpolator),e.requestAnimationFrame&&wi.use(e.requestAnimationFrame),e.batchedUpdates&&(wi.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Qi=e.willAdvance),e.frameLoop&&(wi.frameLoop=e.frameLoop)},Ki=new Set,ea=[],ta=[],ra=0,na={get idle(){return!Ki.size&&!ea.length},start(e){ra>e.priority?(Ki.add(e),wi.onStart(ia)):(aa(e),wi(sa))},advance:sa,sort(e){if(ra)wi.onFrame((()=>na.sort(e)));else{const t=ea.indexOf(e);~t&&(ea.splice(t,1),oa(e))}},clear(){ea=[],Ki.clear()}};function ia(){Ki.forEach(aa),Ki.clear(),wi(sa)}function aa(e){ea.includes(e)||oa(e)}function oa(e){ea.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ea,(t=>t.priority>e.priority)),0,e)}function sa(e){const t=ta;for(let r=0;r<ea.length;r++){const n=ea[r];ra=n.priority,n.idle||(Qi(n),n.advance(e),n.idle||t.push(n))}return ra=0,(ta=ea).length=0,(ea=t).length>0}var la="[-+]?\\d*\\.?\\d+",da=la+"%";function ca(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ua=new RegExp("rgb"+ca(la,la,la)),ha=new RegExp("rgba"+ca(la,la,la,la)),ma=new RegExp("hsl"+ca(la,da,da)),ga=new RegExp("hsla"+ca(la,da,da,la)),fa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,pa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ba=/^#([0-9a-fA-F]{6})$/,ya=/^#([0-9a-fA-F]{8})$/;function va(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function xa(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=va(i,n,e+1/3),o=va(i,n,e),s=va(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function wa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Fa(e){return(parseFloat(e)%360+360)%360/360}function $a(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Sa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Da(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ba.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ji&&void 0!==Ji[e]?Ji[e]:(t=ua.exec(e))?(wa(t[1])<<24|wa(t[2])<<16|wa(t[3])<<8|255)>>>0:(t=ha.exec(e))?(wa(t[1])<<24|wa(t[2])<<16|wa(t[3])<<8|$a(t[4]))>>>0:(t=fa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ya.exec(e))?parseInt(t[1],16)>>>0:(t=pa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ma.exec(e))?(255|xa(Fa(t[1]),Sa(t[2]),Sa(t[3])))>>>0:(t=ga.exec(e))?(xa(Fa(t[1]),Sa(t[2]),Sa(t[3]))|$a(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ba=(e,t,r)=>{if(Pi.fun(e))return e;if(Pi.arr(e))return Ba({range:e,output:t,extrapolate:r});if(Pi.str(e.output[0]))return Yi(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let d=l?l(e):e;if(d<t){if("identity"===o)return d;"clamp"===o&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=a(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var Ea=1.70158,ka=1.525*Ea,Ca=Ea+1,Oa=2*Math.PI/3,Aa=2*Math.PI/4.5,_a=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},za={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ca*e*e*e-Ea*e*e,easeOutBack:e=>1+Ca*Math.pow(e-1,3)+Ea*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ka)/2:(Math.pow(2*e-2,2)*((ka+1)*(2*e-2)+ka)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Oa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Oa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Aa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Aa)/2+1,easeInBounce:e=>1-_a(1-e),easeOutBounce:_a,easeInOutBounce:e=>e<.5?(1-_a(1-2*e))/2:(1+_a(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Ma=Symbol.for("FluidValue.get"),ja=Symbol.for("FluidValue.observers"),Ta=e=>Boolean(e&&e[Ma]),Ha=e=>e&&e[Ma]?e[Ma]():e,Ia=e=>e[ja]||null;function Pa(e,t){const r=e[ja];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var La=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ra(this,e)}},Ra=(e,t)=>Ya(e,Ma,t);function Na(e,t){if(e[Ma]){let r=e[ja];r||Ya(e,ja,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Wa(e,t){const r=e[ja];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[ja]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Va,Ya=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ua=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,qa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xa=new RegExp(`(${Ua.source})(%|[a-z]+)`,"i"),Ja=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Za=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Qa=e=>{const[t,r]=Ga(e);if(!t||Xi())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Za.test(r)?Qa(r):r||e},Ga=e=>{const t=Za.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ka=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,eo=e=>{Va||(Va=Ji?new RegExp(`(${Object.keys(Ji).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ha(e).replace(Za,Qa).replace(qa,Da).replace(Va,Da))),r=t.map((e=>e.match(Ua).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ba({...e,output:t})));return e=>{const r=!Xa.test(t[0])&&t.find((e=>Xa.test(e)))?.replace(Ua,"");let i=0;return t[0].replace(Ua,(()=>`${n[i++](e)}${r||""}`)).replace(Ja,Ka)}},to="react-spring: ",ro=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${to}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},no=ro(console.warn);var io=ro(console.warn);function ao(e){return Pi.str(e)&&("#"==e[0]||/\d/.test(e)||!Xi()&&Za.test(e)||e in(Ji||{}))}var oo=Xi()?o:h,so=()=>{const e=a(!1);return oo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function lo(){const e=s()[1],t=so();return()=>{t.current&&e(Math.random())}}var co=e=>o(e,uo),uo=[];function ho(e){const t=a();return o((()=>{t.current=e})),t.current}var mo=Symbol.for("Animated:node"),go=e=>e&&e[mo],fo=(e,t)=>{return r=e,n=mo,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},po=e=>e&&e[mo]&&e[mo].getPayload(),bo=class{constructor(){fo(this,this)}getPayload(){return this.payload||[]}},yo=class extends bo{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Pi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new yo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Pi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Pi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},vo=class extends yo{constructor(e){super(0),this._string=null,this._toString=Ba({output:[e,e]})}static create(e){return new vo(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Pi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ba({output:[this.getValue(),e]})),this._value=0,super.reset()}},xo={dependencies:null},wo=class extends bo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ni(this.source,((r,n)=>{var i;(i=r)&&i[mo]===i?t[n]=r.getValue(e):Ta(r)?t[n]=Ha(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ri(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ni(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){xo.dependencies&&Ta(e)&&xo.dependencies.add(e);const t=po(e);t&&Ri(t,(e=>this.add(e)))}},Fo=class extends wo{constructor(e){super(e)}static create(e){return new Fo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map($o)),!0)}};function $o(e){return(ao(e)?vo:yo).create(e)}function So(e){const t=go(e);return t?t.constructor:Pi.arr(e)?Fo:ao(e)?vo:yo}var Do=(e,t)=>{const r=!Pi.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((i,s)=>{const l=a(null),d=r&&g((e=>{l.current=function(e,t){e&&(Pi.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[c,u]=function(e,t){const r=new Set;xo.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new wo(e),xo.dependencies=null,[e,r]}(i,t),h=lo(),m=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new Bo(m,u),p=a();oo((()=>(p.current=f,Ri(u,(e=>Na(e,f))),()=>{p.current&&(Ri(p.current.deps,(e=>Wa(e,p.current))),wi.cancel(p.current.update))}))),o(m,[]),co((()=>()=>{const e=p.current;Ri(e.deps,(t=>Wa(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:d})}))},Bo=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&wi.write(this.update)}};var Eo=Symbol.for("AnimatedComponent"),ko=e=>Pi.str(e)?e:e&&Pi.str(e.displayName)?e.displayName:Pi.fun(e)&&e.name||null;function Co(e,...t){return Pi.fun(e)?e(...t):e}var Oo=(e,t)=>!0===e||!!(t&&e&&(Pi.fun(e)?e(t):Wi(e).includes(t))),Ao=(e,t)=>Pi.obj(e)?t&&e[t]:e,_o=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,zo=e=>e,Mo=(e,t=zo)=>{let r=jo;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Pi.und(r)||(n[i]=r)}return n},jo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],To={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ho(e){const t=function(e){const t={};let r=0;if(Ni(e,((e,n)=>{To[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ni(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Io(e){return e=Ha(e),Pi.arr(e)?e.map(Io):ao(e)?vi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Po(e){return Pi.fun(e)||Pi.arr(e)&&Pi.obj(e[0])}var Lo={tension:170,friction:26,mass:1,damping:1,easing:za.linear,clamp:!1},Ro=class{constructor(){this.velocity=0,Object.assign(this,Lo)}};function No(e,t){if(Pi.und(t.decay)){const r=!Pi.und(t.tension)||!Pi.und(t.friction);!r&&Pi.und(t.frequency)&&Pi.und(t.damping)&&Pi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Wo=[],Vo=class{constructor(){this.changed=!1,this.values=Wo,this.toValues=null,this.fromValues=Wo,this.config=new Ro,this.immediate=!1}};function Yo(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,d,c=Oo(r.cancel??n?.cancel,t);if(c)m();else{Pi.und(r.pause)||(i.paused=Oo(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Oo(e,t)),l=Co(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-wi.now()}function h(){l>0&&!vi.skipAnimation?(i.delayed=!0,d=wi.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var Uo=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Jo(e.get()):t.every((e=>e.noop))?qo(e.get()):Xo(e.get(),t.every((e=>e.finished))),qo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Xo=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Jo=e=>({value:e,cancelled:!0,finished:!1});function Zo(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=Mo(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),m=e=>{const t=i<=(r.cancelId||0)&&Jo(n)||i!==r.asyncId&&Xo(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const a=new Go,o=new Ko;return(async()=>{if(vi.skipAnimation)throw Qo(r),o.result=Xo(n,!1),u(o),o;m(a);const s=Pi.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ni(d,((e,t)=>{Pi.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return m(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(vi.skipAnimation)return Qo(r),Xo(n,!1);try{let t;t=Pi.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=Xo(n.get(),!0,!1)}catch(e){if(e instanceof Go)f=e.result;else{if(!(e instanceof Ko))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return Pi.fun(o)&&wi.batchedUpdates((()=>{o(f,n,n.item)})),f})():l}function Qo(e,t){Vi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Go=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ko=class extends Error{constructor(){super("SkipAnimationSignal")}},es=e=>e instanceof rs,ts=1,rs=class extends La{constructor(){super(...arguments),this.id=ts++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=go(this);return e&&e.getValue()}to(...e){return vi.to(this,e)}interpolate(...e){return no(`${to}The "interpolate" function is deprecated in v9 (use "to" instead)`),vi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Pa(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||na.sort(this),Pa(this,{type:"priority",parent:this,priority:e})}},ns=Symbol.for("SpringPhase"),is=e=>(1&e[ns])>0,as=e=>(2&e[ns])>0,os=e=>(4&e[ns])>0,ss=(e,t)=>t?e[ns]|=3:e[ns]&=-3,ls=(e,t)=>t?e[ns]|=4:e[ns]&=-5,ds=class extends rs{constructor(e,t){if(super(),this.animation=new Vo,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Pi.und(e)||!Pi.und(t)){const r=Pi.obj(e)?{...e}:{...t,from:e};Pi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(as(this)||this._state.asyncTo)||os(this)}get goal(){return Ha(this.animation.to)}get velocity(){const e=go(this);return e instanceof yo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return is(this)}get isAnimating(){return as(this)}get isPaused(){return os(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=po(n.to);!o&&Ta(n.to)&&(i=Wi(Ha(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==vo?1:o?o[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Pi.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Pi.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Pi.und(n),m=r==d?s.v0>0:r<d;let g,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(g=Math.abs(o)>t,g||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==m,f&&(o=-o*n,u=d));o+=(1e-6*-a.tension*(u-d)+.001*-a.friction*o)/a.mass*p,u+=o*p}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(d-r),o=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=go(this),l=s.getValue();if(t){const e=Ha(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return wi.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(as(this)){const{to:e,config:t}=this.animation;wi.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Pi.und(e)?(r=this.queue||[],this.queue=[]):r=[Pi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Uo(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Qo(this._state,e&&this._lastCallId),wi.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Pi.obj(r)?r[t]:r,(null==r||Po(r))&&(r=void 0),n=Pi.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return is(this)||(e.reverse&&([r,n]=[n,r]),n=Ha(n),Pi.und(n)?go(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Mo(e,((e,t)=>/^on/.test(t)?Ao(e,r):e))),ps(this,e,"onProps"),bs(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Yo(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{os(this)||(ls(this,!0),qi(a.pauseQueue),bs(this,"onPause",Xo(this,cs(this,this.animation.to)),this))},resume:()=>{os(this)&&(ls(this,!1),as(this)&&this._resume(),qi(a.resumeQueue),bs(this,"onResume",Xo(this,cs(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=us(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Jo(this));const n=!Pi.und(e.to),i=!Pi.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Jo(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||t.default&&!Pi.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Li(u,d);h&&(s.from=u),u=Ha(u);const m=!Li(c,l);m&&this._focus(c);const g=Po(t.to),{config:f}=s,{decay:p,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!g&&function(e,t,r){r&&(No(r={...r},t),t={...r,...t}),No(e,t),Object.assign(e,t);for(const t in Lo)null==e[t]&&(e[t]=Lo[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Pi.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(f,Co(t.config,a),t.config!==o.config?Co(o.config,a):void 0);let y=go(this);if(!y||Pi.und(c))return r(Xo(this,!0));const v=Pi.und(t.reset)?i&&!t.default:!Pi.und(u)&&Oo(t.reset,a),x=v?u:this.get(),w=Io(c),F=Pi.num(w)||Pi.arr(w)||ao(w),$=!g&&(!F||Oo(o.immediate||t.immediate,a));if(m){const e=So(c);if(e!==y.constructor){if(!$)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const S=y.constructor;let D=Ta(c),B=!1;if(!D){const e=v||!is(this)&&h;(m||e)&&(B=Li(Io(x),w),D=!B),(Li(s.immediate,$)||$)&&Li(f.decay,p)&&Li(f.velocity,b)||(D=!0)}if(B&&as(this)&&(s.changed&&!v?D=!0:D||this._stop(l)),!g&&((D||Ta(l))&&(s.values=y.getPayload(),s.toValues=Ta(c)?null:S==vo?[1]:Wi(w)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),D)){const{onRest:e}=s;Ri(fs,(e=>ps(this,t,e)));const n=Xo(this,cs(this,l));qi(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&wi.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?Co(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set(x),g?r(Zo(t.to,t,this._state,this)):D?this._start():as(this)&&!m?this._pendingCalls.add(r):r(qo(x))}_focus(e){const t=this.animation;e!==t.to&&(Ia(this)&&this._detach(),t.to=e,Ia(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ta(t)&&(Na(t,this),es(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ta(e)&&Wa(e,this)}_set(e,t=!0){const r=Ha(e);if(!Pi.und(r)){const e=go(this);if(!e||!Li(r,e.getValue())){const n=So(r);e&&e.constructor==n?e.setValue(r):fo(this,n.create(r)),e&&wi.batchedUpdates((()=>{this._onChange(r,t)}))}}return go(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,bs(this,"onStart",Xo(this,cs(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Co(this.animation.onChange,e,this)),Co(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;go(this).reset(Ha(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),as(this)||(ss(this,!0),os(this)||this._resume())}_resume(){vi.skipAnimation?this.finish():na.start(this)}_stop(e,t){if(as(this)){ss(this,!1);const r=this.animation;Ri(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Pa(this,{type:"idle",parent:this});const n=t?Jo(this.get()):Xo(this.get(),cs(this,e??r.to));qi(this._pendingCalls,n),r.changed&&(r.changed=!1,bs(this,"onRest",n,this))}}};function cs(e,t){const r=Io(t);return Li(Io(e.get()),r)}function us(e,t=e.loop,r=e.to){const n=Co(t);if(n){const i=!0!==n&&Ho(n),a=(i||e).reverse,o=!i||i.reset;return hs({...e,loop:t,default:!1,pause:void 0,to:!a||Po(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function hs(e){const{to:t,from:r}=e=Ho(e),n=new Set;return Pi.obj(t)&&gs(t,n),Pi.obj(r)&&gs(r,n),e.keys=n.size?Array.from(n):null,e}function ms(e){const t=hs(e);return Pi.und(t.default)&&(t.default=Mo(t)),t}function gs(e,t){Ni(e,((e,r)=>null!=e&&t.add(r)))}var fs=["onStart","onRest","onChange","onPause","onResume"];function ps(e,t,r){e.animation[r]=t[r]!==_o(t,r)?Ao(t[r],e.key):void 0}function bs(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var ys=["onStart","onChange","onRest"],vs=1,xs=class{constructor(e,t){this.id=vs++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Pi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(hs(e)),this}start(e){let{queue:t}=this;return e?t=Wi(e).map(hs):this.queue=[],this._flush?this._flush(this,t):(Es(this,t),ws(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ri(Wi(t),(t=>r[t].stop(!!e)))}else Qo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Pi.und(e))this.start({pause:!0});else{const t=this.springs;Ri(Wi(e),(e=>t[e].pause()))}return this}resume(e){if(Pi.und(e))this.start({pause:!1});else{const t=this.springs;Ri(Wi(e),(e=>t[e].resume()))}return this}each(e){Ni(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Vi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&Vi(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,Vi(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}wi.onFrame(this._onFrame)}};function ws(e,t){return Promise.all(t.map((t=>Fs(e,t)))).then((t=>Uo(e,t)))}async function Fs(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,d=Pi.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=Pi.arr(i)||Pi.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Ri(ys,(r=>{const n=t[r];if(Pi.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,qi(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),m=!0===t.cancel||!0===_o(t,"cancel");(c||m&&u.asyncId)&&h.push(Yo(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ii,resume:Ii,start(t,r){m?(Qo(u,e._lastAsyncId),r(Jo(e))):(t.onRest=s,r(Zo(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=Uo(e,await Promise.all(h));if(o&&g.finished&&(!r||!g.noop)){const r=us(t,o,i);if(r)return Es(e,[r]),Fs(e,r,!0)}return l&&wi.batchedUpdates((()=>l(g,e,e.item))),g}function $s(e,t){const r={...e.springs};return t&&Ri(Wi(t),(e=>{Pi.und(e.keys)&&(e=hs(e)),Pi.obj(e.to)||(e={...e,to:void 0}),Bs(r,e,(e=>Ds(e)))})),Ss(e,r),r}function Ss(e,t){Ni(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Na(t,e))}))}function Ds(e,t){const r=new ds;return r.key=e,t&&Na(r,t),r}function Bs(e,t,r){t.keys&&Ri(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Es(e,t){Ri(t,(t=>{Bs(e.springs,t,(t=>Ds(t,e)))}))}var ks,Cs,Os=({children:e,...t})=>{const r=f(As),i=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=s((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let l=i;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return o((()=>{n.current=l,i==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:i,immediate:l})),[i,l]);const{Provider:d}=As;return n.createElement(d,{value:t},e)},As=(ks=Os,Cs={},Object.assign(ks,n.createContext(Cs)),ks.Provider._context=ks,ks.Consumer._context=ks,ks);Os.Provider=As.Provider,Os.Consumer=As.Consumer;var _s=()=>{const e=[],t=function(t){io(`${to}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ri(e,((e,i)=>{if(Pi.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ri(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ri(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ri(e,((e,r)=>{const n=Pi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Ri(e,((e,n)=>{if(Pi.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ri(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ri(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Pi.fun(e)?e(r,t):e};return t._getProps=r,t};function zs(e,t){const r=Pi.fun(e),[[n],i]=function(e,t,r){const n=Pi.fun(t)&&t;n&&!r&&(r=[]);const i=p((()=>n||3==arguments.length?_s():void 0),[]),o=a(0),s=lo(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=$s(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?ws(e,t):new Promise((n=>{Ss(e,r),l.queue.push((()=>{n(ws(e,t))})),s()}))}})),[]),d=a([...l.ctrls]),c=[],u=ho(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=d.current[i]||(d.current[i]=new xs(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=ms(r))}}p((()=>{Ri(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const m=d.current.map(((e,t)=>$s(e,c[t]))),g=f(Os),b=ho(g),y=g!==b&&function(e){for(const t in e)return!0;return!1}(g);oo((()=>{o.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Ri(e,(e=>e()))),Ri(d.current,((e,t)=>{i?.add(e),y&&e.start({default:g});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),co((()=>()=>{Ri(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Ms=class extends rs{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ba(...t);const r=this._get(),n=So(r);fo(this,n.create(r))}advance(e){const t=this._get();Li(t,this.get())||(go(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ts(this._active)&&Hs(this)}_get(){const e=Pi.arr(this.source)?this.source.map(Ha):Wi(Ha(this.source));return this.calc(...e)}_start(){this.idle&&!Ts(this._active)&&(this.idle=!1,Ri(po(this),(e=>{e.done=!1})),vi.skipAnimation?(wi.batchedUpdates((()=>this.advance())),Hs(this)):na.start(this))}_attach(){let e=1;Ri(Wi(this.source),(t=>{Ta(t)&&Na(t,this),es(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ri(Wi(this.source),(e=>{Ta(e)&&Wa(e,this)})),this._active.clear(),Hs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Wi(this.source).reduce(((e,t)=>Math.max(e,(es(t)?t.priority:0)+1)),0))}};function js(e){return!1!==e.idle}function Ts(e){return!e.size||Array.from(e).every(js)}function Hs(e){e.idle||(e.idle=!0,Ri(po(e),(e=>{e.done=!0})),Pa(e,{type:"idle",parent:e}))}vi.assign({createStringInterpolator:eo,to:(e,t)=>new Ms(e,t)});var Is=/^--/;function Ps(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Is.test(e)||Rs.hasOwnProperty(e)&&Rs[e]?(""+t).trim():t+"px"}var Ls={};var Rs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ns=["Webkit","Ms","Moz","O"];Rs=Object.keys(Rs).reduce(((e,t)=>(Ns.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Rs);var Ws=/^(matrix|translate|scale|rotate|skew)/,Vs=/^(translate)/,Ys=/^(rotate|skew)/,Us=(e,t)=>Pi.num(e)&&0!==e?e+t:e,qs=(e,t)=>Pi.arr(e)?e.every((e=>qs(e,t))):Pi.num(e)?e===t:parseFloat(e)===t,Xs=class extends wo{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Us(e,"px"))).join(",")})`,qs(e,0)]))),Ni(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Ws.test(t)){if(delete n[t],Pi.und(e))return;const r=Vs.test(t)?"px":Ys.test(t)?"deg":"";i.push(Wi(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Us(i,r)})`,qs(i,0)]:e=>[`${t}(${e.map((e=>Us(e,r))).join(",")})`,qs(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Js(i,a)),super(n)}},Js=class extends La{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ri(this.inputs,((r,n)=>{const i=Ha(r[0]),[a,o]=this.transforms[n](Pi.arr(i)?i:r.map(Ha));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Ri(this.inputs,(e=>Ri(e,(e=>Ta(e)&&Na(e,this)))))}observerRemoved(e){0==e&&Ri(this.inputs,(e=>Ri(e,(e=>Ta(e)&&Wa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Pa(this,e)}};vi.assign({batchedUpdates:E,createStringInterpolator:eo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Zs=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new wo(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=ko(e)||"Anonymous";return(e=Pi.str(e)?a[e]||(a[e]=Do(e,i)):e[Eo]||(e[Eo]=Do(e,i))).displayName=`Animated(${t})`,e};return Ni(e,((t,r)=>{Pi.arr(e)&&(r=ko(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Ls[t]||(Ls[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ps(t,n[t]);Is.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Xs(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Qs=Zs.animated;const Gs=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ks=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,el=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Ks} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,tl=v(el)`
    animation-delay: -0.45s;
`,rl=v(el)`
    animation-delay: -0.3s;
`,nl=v(el)`
    animation-delay: -0.15s;
`,il=({color:r,className:n,size:i})=>e(Gs,Object.assign({className:n,$size:i,$color:r},{children:[t(el,{id:"inner1"}),t(tl,{id:"inner2"}),t(rl,{id:"inner3"}),t(nl,{id:"inner4"})]})),al=(e,t,r)=>wr(r,t)||wr(e,t),ol=(e,t)=>{const r=t||e.defaultValue;return wr(e.collections,r)},sl={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},ll=e=>t=>{const r=t.theme,n=ol(sl,r.colourScheme);return r.overrides&&r.overrides.primitiveColour?al(n,e,r.overrides.primitiveColour):n[e]},dl={"primary-10":ll("primary-10"),"primary-20":ll("primary-20"),"primary-30":ll("primary-30"),"primary-40":ll("primary-40"),"primary-50":ll("primary-50"),"primary-60":ll("primary-60"),"primary-70":ll("primary-70"),"primary-80":ll("primary-80"),"primary-90":ll("primary-90"),"primary-95":ll("primary-95"),"primary-100":ll("primary-100"),"secondary-10":ll("secondary-10"),"secondary-20":ll("secondary-20"),"secondary-30":ll("secondary-30"),"secondary-40":ll("secondary-40"),"secondary-50":ll("secondary-50"),"secondary-60":ll("secondary-60"),"secondary-70":ll("secondary-70"),"secondary-80":ll("secondary-80"),"secondary-90":ll("secondary-90"),"secondary-95":ll("secondary-95"),"secondary-100":ll("secondary-100"),"neutral-10":ll("neutral-10"),"neutral-20":ll("neutral-20"),"neutral-30":ll("neutral-30"),"neutral-40":ll("neutral-40"),"neutral-50":ll("neutral-50"),"neutral-60":ll("neutral-60"),"neutral-70":ll("neutral-70"),"neutral-80":ll("neutral-80"),"neutral-90":ll("neutral-90"),"neutral-95":ll("neutral-95"),"neutral-100":ll("neutral-100"),"success-10":ll("success-10"),"success-20":ll("success-20"),"success-30":ll("success-30"),"success-40":ll("success-40"),"success-50":ll("success-50"),"success-60":ll("success-60"),"success-70":ll("success-70"),"success-80":ll("success-80"),"success-90":ll("success-90"),"success-95":ll("success-95"),"success-100":ll("success-100"),"warning-10":ll("warning-10"),"warning-20":ll("warning-20"),"warning-30":ll("warning-30"),"warning-40":ll("warning-40"),"warning-50":ll("warning-50"),"warning-60":ll("warning-60"),"warning-70":ll("warning-70"),"warning-80":ll("warning-80"),"warning-90":ll("warning-90"),"warning-95":ll("warning-95"),"warning-100":ll("warning-100"),"error-10":ll("error-10"),"error-20":ll("error-20"),"error-30":ll("error-30"),"error-40":ll("error-40"),"error-50":ll("error-50"),"error-60":ll("error-60"),"error-70":ll("error-70"),"error-80":ll("error-80"),"error-90":ll("error-90"),"error-95":ll("error-95"),"error-100":ll("error-100"),"info-10":ll("info-10"),"info-20":ll("info-20"),"info-30":ll("info-30"),"info-40":ll("info-40"),"info-50":ll("info-50"),"info-60":ll("info-60"),"info-70":ll("info-70"),"info-80":ll("info-80"),"info-90":ll("info-90"),"info-95":ll("info-95"),"info-100":ll("info-100"),white:ll("white"),black:ll("black")},cl={text:ll("neutral-20"),"text-subtle":ll("neutral-30"),"text-subtler":ll("neutral-50"),"text-subtlest":ll("neutral-60"),"text-primary":ll("primary-50"),"text-hover":ll("primary-40"),"text-selected":ll("primary-50"),"text-selected-hover":ll("primary-40"),"text-disabled":ll("neutral-50"),"text-disabled-subtle":ll("neutral-60"),"text-disabled-subtlest":ll("neutral-80"),"text-selected-disabled":ll("neutral-50"),"text-success":ll("success-40"),"text-warning":ll("warning-40"),"text-error":ll("error-40"),"text-info":ll("info-40"),"text-inverse":ll("white"),icon:ll("neutral-50"),"icon-subtle":ll("neutral-60"),"icon-strongest":ll("neutral-20"),"icon-primary":ll("primary-50"),"icon-primary-subtle":ll("primary-60"),"icon-primary-subtlest":ll("primary-70"),"icon-hover":ll("primary-40"),"icon-selected":ll("primary-50"),"icon-selected-hover":ll("primary-40"),"icon-disabled":ll("neutral-50"),"icon-disabled-subtle":ll("neutral-60"),"icon-selected-disabled":ll("neutral-60"),"icon-success":ll("success-50"),"icon-warning":ll("warning-60"),"icon-error":ll("error-50"),"icon-error-strong":ll("error-40"),"icon-info":ll("info-50"),"icon-inverse":ll("white"),"icon-primary-inverse":"#FEAB10",border:ll("neutral-90"),"border-strong":ll("neutral-70"),"border-stronger":ll("neutral-30"),"border-primary":ll("primary-50"),"border-primary-subtle":ll("primary-60"),"border-hover":ll("primary-90"),"border-hover-strong":ll("primary-60"),"border-selected":ll("primary-50"),"border-selected-subtle":ll("primary-70"),"border-selected-subtlest":ll("primary-90"),"border-selected-hover":ll("primary-40"),"border-focus":ll("primary-60"),"border-focus-strong":ll("primary-50"),"border-disabled":ll("neutral-90"),"border-selected-disabled":ll("neutral-70"),"border-success":ll("success-60"),"border-warning":ll("warning-60"),"border-error":ll("error-60"),"border-error-focus":ll("error-60"),"border-error-strong":ll("error-40"),"border-info":ll("info-60"),bg:ll("white"),"bg-strong":ll("neutral-100"),"bg-stronger":ll("neutral-95"),"bg-strongest":ll("neutral-90"),"bg-hover":ll("primary-95"),"bg-hover-strong":ll("primary-90"),"bg-hover-subtle":ll("primary-100"),"bg-hover-neutral":ll("neutral-95"),"bg-selected":ll("primary-95"),"bg-selected-hover":ll("primary-90"),"bg-selected-strong":ll("primary-90"),"bg-selected-strongest":ll("primary-90"),"bg-disabled":ll("neutral-95"),"bg-selected-disabled":ll("neutral-95"),"bg-success":ll("success-100"),"bg-success-strong":ll("success-50"),"bg-warning":ll("warning-100"),"bg-warning-strong":ll("warning-50"),"bg-info":ll("info-100"),"bg-info-strong":ll("info-50"),"bg-error":ll("error-100"),"bg-error-strong":ll("error-50"),"bg-error-strong-hover":ll("error-30"),"bg-inverse":ll("neutral-20"),"bg-inverse-subtle":ll("neutral-30"),"bg-inverse-subtler":ll("neutral-50"),"bg-inverse-subtlest":ll("neutral-60"),"bg-primary":ll("primary-50"),"bg-primary-subtle":ll("primary-60"),"bg-primary-subtler":ll("primary-80"),"bg-primary-subtlest":ll("primary-100"),"bg-primary-hover":ll("primary-40"),"bg-primary-subtlest-hover":ll("primary-90"),"bg-primary-subtlest-selected":ll("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ll("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":ll("black"),"focus-ring-inverse":ll("white")},ul={collections:{lifesg:cl,bookingsg:cl,rbs:cl,mylegacy:cl,ccube:cl},defaultValue:"lifesg"},hl=e=>t=>{const r=t.theme,n=ol(ul,r.colourScheme),i=r.overrides&&r.overrides.semanticColour?al(n,e,r.overrides.semanticColour):n[e];return"function"==typeof i?i(t):i},ml={text:hl("text"),"text-subtle":hl("text-subtle"),"text-subtler":hl("text-subtler"),"text-subtlest":hl("text-subtlest"),"text-primary":hl("text-primary"),"text-hover":hl("text-hover"),"text-selected":hl("text-selected"),"text-selected-hover":hl("text-selected-hover"),"text-disabled":hl("text-disabled"),"text-disabled-subtle":hl("text-disabled-subtle"),"text-disabled-subtlest":hl("text-disabled-subtlest"),"text-selected-disabled":hl("text-selected-disabled"),"text-success":hl("text-success"),"text-warning":hl("text-warning"),"text-error":hl("text-error"),"text-info":hl("text-info"),"text-inverse":hl("text-inverse"),icon:hl("icon"),"icon-subtle":hl("icon-subtle"),"icon-strongest":hl("icon-strongest"),"icon-primary":hl("icon-primary"),"icon-primary-subtle":hl("icon-primary-subtle"),"icon-primary-subtlest":hl("icon-primary-subtlest"),"icon-hover":hl("icon-hover"),"icon-selected":hl("icon-selected"),"icon-selected-hover":hl("icon-selected-hover"),"icon-disabled":hl("icon-disabled"),"icon-disabled-subtle":hl("icon-disabled-subtle"),"icon-selected-disabled":hl("icon-selected-disabled"),"icon-success":hl("icon-success"),"icon-warning":hl("icon-warning"),"icon-error":hl("icon-error"),"icon-error-strong":hl("icon-error-strong"),"icon-info":hl("icon-info"),"icon-inverse":hl("icon-inverse"),"icon-primary-inverse":hl("icon-primary-inverse"),border:hl("border"),"border-strong":hl("border-strong"),"border-stronger":hl("border-stronger"),"border-primary":hl("border-primary"),"border-primary-subtle":hl("border-primary-subtle"),"border-hover":hl("border-hover"),"border-hover-strong":hl("border-hover-strong"),"border-selected":hl("border-selected"),"border-selected-subtle":hl("border-selected-subtle"),"border-selected-subtlest":hl("border-selected-subtlest"),"border-selected-hover":hl("border-selected-hover"),"border-focus":hl("border-focus"),"border-focus-strong":hl("border-focus-strong"),"border-disabled":hl("border-disabled"),"border-selected-disabled":hl("border-selected-disabled"),"border-success":hl("border-success"),"border-warning":hl("border-warning"),"border-error":hl("border-error"),"border-error-focus":hl("border-error-focus"),"border-error-strong":hl("border-error-strong"),"border-info":hl("border-info"),bg:hl("bg"),"bg-strong":hl("bg-strong"),"bg-stronger":hl("bg-stronger"),"bg-strongest":hl("bg-strongest"),"bg-hover":hl("bg-hover"),"bg-hover-strong":hl("bg-hover-strong"),"bg-hover-subtle":hl("bg-hover-subtle"),"bg-hover-neutral":hl("bg-hover-neutral"),"bg-selected":hl("bg-selected"),"bg-selected-hover":hl("bg-selected-hover"),"bg-selected-strong":hl("bg-selected-strong"),"bg-selected-strongest":hl("bg-selected-strongest"),"bg-disabled":hl("bg-disabled"),"bg-selected-disabled":hl("bg-selected-disabled"),"bg-success":hl("bg-success"),"bg-success-strong":hl("bg-success-strong"),"bg-warning":hl("bg-warning"),"bg-warning-strong":hl("bg-warning-strong"),"bg-info":hl("bg-info"),"bg-info-strong":hl("bg-info-strong"),"bg-error":hl("bg-error"),"bg-error-strong":hl("bg-error-strong"),"bg-error-strong-hover":hl("bg-error-strong-hover"),"bg-inverse":hl("bg-inverse"),"bg-inverse-subtle":hl("bg-inverse-subtle"),"bg-inverse-subtler":hl("bg-inverse-subtler"),"bg-inverse-subtlest":hl("bg-inverse-subtlest"),"bg-primary":hl("bg-primary"),"bg-primary-subtle":hl("bg-primary-subtle"),"bg-primary-subtler":hl("bg-primary-subtler"),"bg-primary-subtlest":hl("bg-primary-subtlest"),"bg-primary-hover":hl("bg-primary-hover"),"bg-primary-subtlest-hover":hl("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":hl("bg-primary-subtlest-selected"),"bg-available":hl("bg-available"),"overlay-strong":hl("overlay-strong"),"overlay-subtle":hl("overlay-subtle"),hyperlink:hl("hyperlink"),"hyperlink-inverse":hl("hyperlink-inverse"),"focus-ring":hl("focus-ring"),"focus-ring-inverse":hl("focus-ring-inverse")},gl={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},fl=e=>t=>{var r;const n=t.theme,i=ol(gl,null==n?void 0:n.breakpointScheme);let a;return a=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?al(i,e,n.overrides.breakpoint):i[e],a},pl={"xxs-min":fl("xxs-min"),"xxs-max":fl("xxs-max"),"xs-min":fl("xs-min"),"xs-max":fl("xs-max"),"sm-min":fl("sm-min"),"sm-max":fl("sm-max"),"md-min":fl("md-min"),"md-max":fl("md-max"),"lg-min":fl("lg-min"),"lg-max":fl("lg-max"),"xl-min":fl("xl-min"),"xl-max":fl("xl-max"),"xxl-min":fl("xxl-min"),"xxs-column":fl("xxs-column"),"xs-column":fl("xs-column"),"sm-column":fl("sm-column"),"md-column":fl("md-column"),"lg-column":fl("lg-column"),"xl-column":fl("xl-column"),"xxl-column":fl("xxl-column"),"xxs-gutter":fl("xxs-gutter"),"xs-gutter":fl("xs-gutter"),"sm-gutter":fl("sm-gutter"),"md-gutter":fl("md-gutter"),"lg-gutter":fl("lg-gutter"),"xl-gutter":fl("xl-gutter"),"xxl-gutter":fl("xxl-gutter"),"xxs-margin":fl("xxs-margin"),"xs-margin":fl("xs-margin"),"sm-margin":fl("sm-margin"),"md-margin":fl("md-margin"),"lg-margin":fl("lg-margin"),"xl-margin":fl("xl-margin"),"xxl-margin":fl("xxl-margin")},bl=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=pl["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),yl={MaxWidth:bl("max-width"),MinWidth:bl("min-width")},vl={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},xl={collections:{lifesg:vl,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:vl,mylegacy:vl,ccube:vl},defaultValue:"lifesg"},wl=e=>t=>{const r=t.theme,n=ol(xl,r.fontScheme);return r.overrides&&r.overrides.fontSpec?al(n,e,r.overrides.fontSpec):n[e]},Fl={"header-size-xxl":wl("header-size-xxl"),"header-size-xl":wl("header-size-xl"),"header-size-lg":wl("header-size-lg"),"header-size-md":wl("header-size-md"),"header-size-sm":wl("header-size-sm"),"header-size-xs":wl("header-size-xs"),"header-lh-xxl":wl("header-lh-xxl"),"header-lh-xl":wl("header-lh-xl"),"header-lh-lg":wl("header-lh-lg"),"header-lh-md":wl("header-lh-md"),"header-lh-sm":wl("header-lh-sm"),"header-lh-xs":wl("header-lh-xs"),"header-ls-xxl":wl("header-ls-xxl"),"header-ls-xl":wl("header-ls-xl"),"header-ls-lg":wl("header-ls-lg"),"header-ls-md":wl("header-ls-md"),"header-ls-sm":wl("header-ls-sm"),"header-ls-xs":wl("header-ls-xs"),"weight-light":wl("weight-light"),"weight-regular":wl("weight-regular"),"weight-semibold":wl("weight-semibold"),"weight-bold":wl("weight-bold"),"font-family":wl("font-family"),"body-size-baseline":wl("body-size-baseline"),"body-size-md":wl("body-size-md"),"body-size-sm":wl("body-size-sm"),"body-size-xs":wl("body-size-xs"),"body-lh-baseline":wl("body-lh-baseline"),"body-lh-md":wl("body-lh-md"),"body-lh-sm":wl("body-lh-sm"),"body-lh-xs":wl("body-lh-xs"),"body-ls-baseline":wl("body-ls-baseline"),"body-ls-md":wl("body-ls-md"),"body-ls-sm":wl("body-ls-sm"),"body-ls-xs":wl("body-ls-xs"),"formlabel-size-baseline":wl("formlabel-size-baseline"),"formlabel-size-lg":wl("formlabel-size-lg"),"formlabel-lh-baseline":wl("formlabel-lh-baseline"),"formlabel-lh-lg":wl("formlabel-lh-lg"),"formlabel-ls-baseline":wl("formlabel-ls-baseline"),"formlabel-ls-lg":wl("formlabel-ls-lg")},$l=(e,t,r,n)=>x`
    font-family: ${wl("font-family")};
    font-size: ${wl(e)};
    font-weight: ${wl(t)};
    line-height: ${wl(r)};
    letter-spacing: ${wl(n)};
`,Sl={"header-xxl-light":$l("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":$l("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":$l("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":$l("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":$l("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":$l("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":$l("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":$l("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":$l("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":$l("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":$l("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":$l("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":$l("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":$l("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":$l("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":$l("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":$l("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":$l("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":$l("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":$l("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":$l("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":$l("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":$l("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":$l("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":$l("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":$l("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":$l("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":$l("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":$l("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":$l("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":$l("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":$l("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":$l("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":$l("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":$l("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":$l("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":$l("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":$l("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":$l("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":$l("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":$l("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":$l("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Dl={collections:{lifesg:Sl,bookingsg:Sl,rbs:Sl,mylegacy:Sl,ccube:Sl},defaultValue:"lifesg"},Bl=e=>t=>{const r=t.theme,n=ol(Dl,r.fontScheme),i=r.overrides&&r.overrides.font?al(n,e,r.overrides.font):n[e];return"function"==typeof i?i(t):i},El={"header-xxl-light":Bl("header-xxl-light"),"header-xxl-regular":Bl("header-xxl-regular"),"header-xxl-semibold":Bl("header-xxl-semibold"),"header-xxl-bold":Bl("header-xxl-bold"),"header-xl-light":Bl("header-xl-light"),"header-xl-regular":Bl("header-xl-regular"),"header-xl-semibold":Bl("header-xl-semibold"),"header-xl-bold":Bl("header-xl-bold"),"header-lg-light":Bl("header-lg-light"),"header-lg-regular":Bl("header-lg-regular"),"header-lg-semibold":Bl("header-lg-semibold"),"header-lg-bold":Bl("header-lg-bold"),"header-md-light":Bl("header-md-light"),"header-md-regular":Bl("header-md-regular"),"header-md-semibold":Bl("header-md-semibold"),"header-md-bold":Bl("header-md-bold"),"header-sm-light":Bl("header-sm-light"),"header-sm-regular":Bl("header-sm-regular"),"header-sm-semibold":Bl("header-sm-semibold"),"header-sm-bold":Bl("header-sm-bold"),"header-xs-light":Bl("header-xs-light"),"header-xs-regular":Bl("header-xs-regular"),"header-xs-semibold":Bl("header-xs-semibold"),"header-xs-bold":Bl("header-xs-bold"),"body-baseline-light":Bl("body-baseline-light"),"body-baseline-regular":Bl("body-baseline-regular"),"body-baseline-semibold":Bl("body-baseline-semibold"),"body-baseline-bold":Bl("body-baseline-bold"),"body-md-light":Bl("body-md-light"),"body-md-regular":Bl("body-md-regular"),"body-md-semibold":Bl("body-md-semibold"),"body-md-bold":Bl("body-md-bold"),"body-sm-light":Bl("body-sm-light"),"body-sm-regular":Bl("body-sm-regular"),"body-sm-semibold":Bl("body-sm-semibold"),"body-sm-bold":Bl("body-sm-bold"),"body-xs-light":Bl("body-xs-light"),"body-xs-regular":Bl("body-xs-regular"),"body-xs-semibold":Bl("body-xs-semibold"),"body-xs-bold":Bl("body-xs-bold"),"formlabel-baseline-semibold":Bl("formlabel-baseline-semibold"),"formlabel-lg-semibold":Bl("formlabel-lg-semibold")},kl=Object.assign(Object.assign({},ml),{Primitive:dl}),Cl=Fl,Ol=El,Al=yl,_l=v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${kl.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?kl["border-error-strong"]:kl["border-primary"]};

                    color: ${e.$buttonIsDanger?kl["text-error"]:kl["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${kl["bg-hover-neutral"]};
                    }
                `;case"light":return x`
                    background-color: ${kl.bg};
                    border: 1px solid ${kl.border};

                    color: ${e.$buttonIsDanger?kl["text-error"]:kl["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${kl["bg-hover-neutral"]};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?kl["text-error"]:kl["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${kl["bg-hover-neutral"]};
                    }
                `;case"disabled":return x`
                    background-color: ${kl["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${kl["text-disabled"]};
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?kl["bg-error-strong"]:kl["bg-primary"]};
                    border: 1px solid transparent;

                    ${Al.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${kl["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?kl["bg-error-strong-hover"]:kl["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return x`
                    height: 2.5rem;
                    ${Ol["body-md-semibold"]}

                    ${Al.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return x`
                    height: 4rem;
                    ${Ol["header-md-semibold"]}

                    ${Al.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return x`
                    height: 3rem;
                    ${Ol["header-xs-semibold"]}

                    ${Al.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,zl=v(il)`
    margin-right: 0.5rem;
`,Ml={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=ee(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(_l,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(zl,{}),t("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=ee(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(_l,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(zl,{}),t("span",{children:i})]}))})),Large:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=ee(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(_l,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(zl,{}),t("span",{children:i})]}))}))},jl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Tl=e=>Object.keys(jl).reduce(((t,r)=>{const n=jl[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Hl=Tl("max-width"),Il=(Tl("min-width"),jl);var Pl={exports:{}};Pl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],m=c&&c[1];o[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,g=o||(i||a?1:m.getDate()),f=i||m.getFullYear(),p=0;i&&!a||(p=a>0?a-1:m.getMonth());var b=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,p,g,b,y,v,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,g,b,y,v,x)):new Date(f,p,g,b,y,v,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var m=s.length,g=1;g<=m;g+=1){o[1]=s[g-1];var f=r.apply(this,o);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ll=ne(Pl.exports),Rl={exports:{}};Rl.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Nl=ne(Rl.exports),Wl={exports:{}};Wl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vl=ne(Wl.exports),Yl={exports:{}};Yl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ul,ql,Xl,Jl=ne(Yl.exports),Zl={exports:{}},Ql=ne(Zl.exports=(Ul={year:0,month:1,day:2,hour:3,minute:4,second:5},ql={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=ql[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),ql[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=Ul[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],h=24===u?0:u,m=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(m).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));yn.extend(Nl),yn.extend(Jl),yn.extend(Vl),yn.extend(Ll),yn.extend(Ql),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=yn(t).startOf("week");return Gl(r).map((e=>Kl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Kl(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(yn(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+yn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=yn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?yn(n):void 0,i?yn(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Xl||(Xl={}));const Gl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Kl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},ed=[1,3,5,7,8,10,12],td=[4,6,9,11];var rd,nd,id;function ad(e){const t=a(null);return h((()=>{t.current=e}),[e]),g(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":ed.includes(a)?Math.min(i,31).toString():td.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=yn(e,r);return yn(t,r).diff(n,"minute")},e.toDayjs=e=>e?yn(e):yn(),e.addMinutesToTime=(e,t,r="HH:mm")=>yn(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>yn(e).isSame(yn(t),r)}(rd||(rd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!yn(e).isBefore(n,"day"))||!(!i||!yn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(yn(e).isValid())return e}return""}}(nd||(nd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(id||(id={}));const od=e=>{const t=(e=>{const t=a(e),r=a();return o((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},sd=e=>{const{textSize:t}=e||{};return x`
        // Text styling
        ${t&&Ol[`${t}-regular`]}

        strong {
            font-weight: ${Cl["weight-semibold"]};
            ${t&&Ol[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Cl["weight-semibold"]};
            ${t&&Ol[`${t}-semibold`]}
            color: ${kl.hyperlink};
            text-decoration: none;

            svg {
                color: ${kl["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${kl["hyperlink-hover"]};

                svg {
                    color: ${kl["icon-hover"]};
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
    `},ld=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return x`
        ${Ol[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},dd=(e,t)=>x`
    ${ld(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?x`
            display: block;
        `:e?x`
            display: inline;
        `:x`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${kl.text};
`;var cd;!function(r){const n=(e,t,r)=>{const n=v(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>dd(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=v.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>dd(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=v.a`
            ${e=>x`
                ${ld(r,e.weight||"regular")}
                color: ${kl.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${kl["text-hover"]};
                }
            `}
        `,a=r=>{var{external:n=!1,children:a}=r,o=ee(r,["external","children"]);return e(i,Object.assign({},o,{children:[a,n&&t(ud,{})]}))};return a.displayName=`Typography.${n}`,a};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(cd||(cd={}));const ud=v($)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,hd=v.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=kl["bg-error"](e),r=kl["border-error"](e);break;case"success":t=kl["bg-success"](e),r=kl["border-success"](e);break;case"warning":default:t=kl["bg-warning"](e),r=kl["border-warning"](e);break;case"info":t=kl["bg-info"](e),r=kl["border-info"](e);break;case"description":t=kl["bg-strong"](e),r=kl["border-strong"](e)}return x`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${kl.text};
    ${e=>"small"===e.$sizeType?sd({textSize:"body-sm"}):sd({textSize:"body-md"})}
`,md=v.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&x`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=kl["icon-error"](e);break;case"success":t=kl["icon-success"](e);break;case"warning":default:t=kl["icon-warning"](e);break;case"info":t=kl["icon-info"](e);break;case"description":t=kl["icon-subtle"](e)}return x`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,gd=v(cd.LinkSM)`
    ${e=>"small"===e.$sizeType?x`
                ${Ol["body-sm-semibold"]}
                margin-top: 0.25rem;
            `:x`
                ${Ol["body-md-semibold"]}
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
`,fd=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,pd=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,bd=v.button`
    ${e=>"small"===e.$sizeType?x`
                ${Ol["body-sm-semibold"]}
            `:x`
                ${Ol["body-md-semibold"]}
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

    color: ${kl["text-primary"]};
`,yd=v(y)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,vd=v.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?x`
                    color: ${kl["icon-selected-disabled"]};
                `:x`
                    color: ${kl["icon-disabled-subtle"]};
                `:e.$active?x`
                color: ${kl["icon-selected"]};
            `:x`
            color: ${kl["icon-subtle"]};
        `};
`,xd=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,wd=(v.ol`
    ${e=>xd(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Hl.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Jr(e.size,"regular")}
        position: relative;
        color: ${Er.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return x`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return x`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,v.ul`
    ${e=>xd(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Jr(e.size,"regular")}
        color: ${Er.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),Fd=e=>{var{size:r="Body",children:n}=e,i=ee(e,["size","children"]);return t(wd,Object.assign({size:r},i,{children:n}))},$d=v.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${kl.bg};

    ${e=>{if(!e.$indicator)return x`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return x`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?x`
                        border-color: ${kl["border-error-strong"]};
                    `:e.$disabled?e.$selected?x`
                            border: none;
                            background: ${kl["bg-selected-disabled"]};
                        `:x`
                            border: none;
                        `:e.$selected?x`
                        border: none;
                        background: ${kl["bg-selected"]};

                        :hover {
                            background: ${kl["bg-selected-hover"]};
                        }
                    `:x`
                    border: none;

                    :hover {
                        background: ${kl["bg-hover-subtle"]};
                    }
                `:e.$error?x`
                        border-color: ${kl["border-error-strong"]};
                    `:e.$disabled?e.$selected?x`
                            border-color: ${kl["border-selected-disabled"]};
                            background: ${kl["bg-selected-disabled"]};
                        `:x`
                            border-color: ${kl["border-disabled"]};
                            background: ${kl["bg-disabled"]};
                        `:e.$selected?x`
                        border-color: ${kl["border-selected"]};
                        background: ${kl["bg-selected"]};

                        :hover {
                            border-color: ${kl["border-selected-hover"]};
                            background: ${kl["bg-selected-hover"]};
                        }
                    `:x`
                    border-color: ${kl.border};

                    :hover {
                        border-color: ${kl["border-hover-strong"]};
                    }
                `}
`,Sd=v.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Dd=v.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?x`
                    color: ${kl["text-selected-disabled"]};
                `:x`
                    color: ${kl["text-disabled"]};
                `:e.$selected?x`
                color: ${kl["text-selected"]};

                // this syntax is a workaround for this issue:
                // https://github.com/styled-components/styled-components/issues/3265#issuecomment-1199263511
                &:is(${$d}:hover *) {
                    color: ${kl["text-selected-hover"]};
                }
            `:x`
            color: ${kl.text};

            &:is(${$d}:hover *) {
                color: ${kl["text-hover"]};
            }
        `}
`,Bd=v.label`
    ${Ol["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Al.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Al.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Ed=v.div`
    ${Ol["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ol["body-md-semibold"]}
    }
`,kd=v.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Cd=v.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Od=v.button`
    color: ${e=>e.$disabled?kl["text-disabled"]:kl["text-error"]};
    white-space: nowrap;
    ${Ol["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ad=v.button`
    color: ${e=>e.disabled?kl["text-disabled"]:kl["text-primary"]};
    ${Ol["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${kl.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,_d=v.div`
    width: 100%;
    color: ${e=>e.$disabled?kl["text-disabled"]:kl["text-error"]};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,zd=v((r=>{var{type:n,className:i,children:a,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:m}=r,g=ee(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=s(!1),[b,y]=s(!1),{height:v,ref:x}=bi();o((()=>{w()}),[m,v]);const w=()=>{p(!m),y(F())},F=()=>!!m&&v>m;return e(hd,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":g["data-testid"]},{children:[u&&t(md,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return t(_,{});case"warning":return t(O,{});case"error":return t(C,{});case"info":case"description":return t(A,{});default:return null}})()})),e(fd,{children:[e(pd,Object.assign({$maxCollapsedHeight:F()?m:void 0,$showMore:f,$hasActionLink:!!l},{children:[t("div",Object.assign({ref:x},{children:a})),l&&e(gd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||t(k,{})]}))]})),b&&e(bd,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>p(!f)},{children:["Show ",f?"less":"more",t(yd,{$expanded:f})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,Md=v.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${kl.bg};
    ${sd({textSize:"body-md"})}

    ${e=>e.$disabled?x`
                color: ${kl["text-disabled"]};
            `:e.$selected?x`
                color: ${kl["text-selected"]};
            `:x`
                color: ${kl.text};
            `}
`,jd=v(cd.BodyMD)`
    color: ${e=>e.$disabled?kl["text-disabled"]:kl["text-error"]};
`,Td=v(Fd)`
    color: ${e=>e.$disabled?kl["text-disabled"]:kl["text-error"]};
`,Hd=v((({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?H:T,{});break;case"radio":a=t(r?M:z,{});break;case"tick":a=t(I,{});break;case"cross":a=t(j,{});break;default:a=null}return t(vd,Object.assign({className:i,$active:r,$disabled:n},{children:a}))}))`
    ${e=>e.$disabled?e.$selected?x`
                    color: ${kl["icon-selected-disabled"]};
                `:x`
                    color: ${kl["icon-disabled-subtle"]};
                `:e.$selected?x`
                color: ${kl["icon-selected"]};

                &:is(${$d}:hover *) {
                    color: ${kl["icon-selected-hover"]};
                }
            `:x`
            color: ${kl["icon-subtle"]};

            &:is(${$d}:hover *) {
                color: ${kl["icon-hover"]};
            }
        `};
`,Id=v.button`
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

        ${({$highlight:e})=>e&&x`
                background-color: ${Er.Neutral[7]};
            `}
    }
`,Pd=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=ee(e,["children","focusHighlight","focusOutline","type"]);return t(Id,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Ld=v(Qs.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Er.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Hl.mobileS} {
        max-width: 100%;
    }
`,Rd=v.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Nd=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Hl.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Wd=v.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Hl.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Vd=v.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Hl.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Yd=v.div`
    display: flex;
    gap: 0.5rem;

    ${Hl.tablet} {
        flex-direction: column;
    }

    ${Hl.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Ud=v.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Hl.mobileS} {
        width: 6rem;
    }
`,qd=v(Pd)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Er.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Er.Primary};
    }
`,Xd=v(Qr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Hl.tablet} {
        margin: 0;
    }

    ${Hl.mobileS} {
        margin: 0 0.25rem;
    }
`,Jd=v(dn)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Er.Neutral[5]};
    background: ${Er.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Er.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Hl.mobileS} {
        width: 100%;
    }
`,Zd=v((({type:n="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:h,disabled:m,error:g,name:f,id:b,className:y,compositeSection:v,removable:x,onRemove:w,"data-testid":F,onChange:$,useContentWidth:B})=>{const{collapsible:E=!0,errors:k,children:C,initialExpanded:O}=v||{},[A,_]=s(l),[z,M]=s(O),j=p((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[T]=s(id.generate()),H=b?`${b}`:`tg-${T}`,I=a();o((()=>{_(l)}),[l]),o((()=>{A&&M(null==O||O)}),[A]);const P=e=>{if(!m){if($)return void $(e);switch(n){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":A||_(!0)}}},L=()=>{m||M(!z)},R=()=>{m||!w||w()},N=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(Hd,{type:e,active:A,disabled:m,$selected:A,$disabled:m})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Ed,Object.assign({"data-id":"toggle-sublabel"},{children:e}))},V=()=>{const r=!z&&!j;return E&&e(Ad,Object.assign({$paddingTopRequired:r,disabled:m,onClick:L,"data-testid":z?"collapse-button":"expand-button"},{children:[z?"Show less":"Show more",t(z?D:S,{"aria-hidden":!0})]}))},Y=n=>e(r,{children:[t(jd,Object.assign({weight:"semibold",$disabled:m},{children:"Error"})),t(Td,Object.assign({$disabled:m},{children:null==n?void 0:n.map(((e,r)=>t("li",Object.assign({id:`${H}-error-list-item-${r}`},{children:t(jd,Object.assign({weight:"semibold",$disabled:m},{children:e}))}),r)))}))]});return e($d,Object.assign({$selected:A,$disabled:m,className:y,$styleType:d,$error:g,$indicator:i,$useContentWidth:B,id:b,"data-testid":F},{children:[e(kd,Object.assign({id:`${H}-header-container`,$disabled:m,$error:g,$selected:A,$indicator:i,$styleType:d},{children:[e(Cd,Object.assign({$addPadding:x},{children:[t(Sd,{ref:I,name:f,id:`${H}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:P,checked:A}),i&&N(),e(Dd,Object.assign({$selected:A,$disabled:m},{children:[t(Bd,Object.assign({htmlFor:`${H}-input`,"data-testid":`${H}-toggle-label`,$maxLines:u},{children:c})),h&&W()]}))]})),x&&t(Od,Object.assign({type:"button",$disabled:m,onClick:R,id:`${H}-remove-button`},{children:"Remove"}))]})),C&&e("div",{children:[(!E||z)&&t(Md,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:m},{children:C})),E&&!z&&j&&t(_d,Object.assign({$disabled:m,onClick:L,id:`${H}-error-alert`},{children:t(zd,Object.assign({type:m?"description":"error",className:y,showIcon:!0},{children:Array.isArray(k)?Y(k):k}))})),V()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,Qd=v(Ml.Small)`
    width: 7rem;

    ${Hl.mobileL} {
        flex: 1;
    }

    ${Hl.mobileS} {
        width: 100%;
    }
`;var Gd,Kd,ec;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Gd||(Gd={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Kd||(Kd={})),function(e){e.AM="am",e.PM="pm"}(ec||(ec={}));const tc=({id:r,value:n,show:i,format:l,onChange:d,onCancel:c})=>{const u=bn.getTimeValues(l,n),[h,m]=s(u.hour),[f,p]=s(u.minute),[b,y]=s(u.period),v=a(),x=a(),w=bi();o((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:r}=bn.getTimeValues(l,n);m(e),p(t),y(r)}}),[i,n,l]),o((()=>{const e=v.current,t=x.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=g((e=>{switch(e.currentTarget.name){case Gd.MINUTE_UP:p(bn.updateMinutes(f,"add"));break;case Gd.MINUTE_DOWN:p(bn.updateMinutes(f,"minus"));break;case Gd.HOUR_UP:m(bn.updateHours(h,"add"));break;case Gd.HOUR_DOWN:m(bn.updateHours(h,"minus"))}}),[h,f]),B=e=>{e.target.select()},E=e=>{const t=e.target.value;switch(e.target.name){case Kd.HOUR:t.length<=2&&m(t);break;case Kd.MINUTE:t.length<=2&&p(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Kd.HOUR:{const r=t>23||t<0?u.hour:bn.convertHourTo12HourFormat(e.target.value);m(r);break}case Kd.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;p(fn.padValue(r));break}}},C=e=>{switch(e.target.name){case ec.AM:y(pn.AM);break;case ec.PM:y(pn.PM)}},O=e=>r?`${r}-${e}`:e,A=zs({height:i?w.height+32:0});return t(Ld,Object.assign({"data-testid":"animated-dropdown-wrapper",style:A},{children:e(Rd,Object.assign({ref:w.ref,"data-testid":O("timepicker-dropdown"),inert:i?void 0:""},{children:[e(Nd,{children:[e(Vd,{children:[e(Ud,{children:[t(qd,Object.assign({"aria-label":"increase hour",name:Gd.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":O("hour-increment-button")},{children:t(D,{})})),t(Jd,{"aria-label":"hour",type:"number",name:Kd.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:B,onChange:E,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")}),t(qd,Object.assign({"aria-label":"decrease hour",name:Gd.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":O("hour-decrement-button")},{children:t(S,{})}))]}),t(Xd,{children:":"}),e(Ud,{children:[t(qd,Object.assign({"aria-label":"increase minute",name:Gd.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":O("minute-increment-button")},{children:t(D,{})})),t(Jd,{"aria-label":"minute",type:"number",name:Kd.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onChange:E,onBlur:k,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")}),t(qd,Object.assign({"aria-label":"decrease minute",name:Gd.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":O("minute-decrement-button")},{children:t(S,{})}))]})]}),e(Yd,{children:[t(Zd,Object.assign({checked:b===pn.AM,name:ec.AM,type:"radio",onChange:C,"data-testid":O("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(Zd,Object.assign({checked:b===pn.PM,name:ec.PM,type:"radio",onChange:C,"data-testid":O("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Wd,{children:[t(Qd,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":O("cancel-button")},{children:"Cancel"})),t(Qd,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?bn.convertTo24HourFormat({hour:h,minute:f,period:b}):`${h}:${f}${b}`,d(e)},disabled:""===h||""===f,"data-testid":O("confirm-button")},{children:"Done"}))]})]}))}))},rc=r=>{var{id:n,disabled:i=!1,error:l,value:d,format:c="24hr",readOnly:u,onChange:h,onFocus:m,onBlur:g}=r,f=ee(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[p,b]=s(!1),[y,v]=s(!1),[x,w]=s(""),[F,$]=s(""),S=a();o((()=>{d&&(w(d.start),$(d.end))}),[]),te("mousedown",(function(e){i||k(e)}),"document"),te("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const D=()=>{E()},B=()=>{p||y||m&&m()},E=()=>{b(!1),v(!1),g&&g()},k=e=>{S&&!S.current.contains(e.target)&&(y||p)&&E()};return t(un,Object.assign({ref:S,id:n},f,{children:e(hn,Object.assign({$disabled:i,$error:l,$readOnly:u},{children:[e(zr,Object.assign({error:l,currentActive:p?"start":y?"end":"none"},{children:[t(mn,{onFocus:()=>{i||u||p||(v(!1),b(!0),B())},readOnly:!0,placeholder:"From",value:bn.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(mn,{onFocus:()=>{i||u||y||(b(!1),v(!0),B())},readOnly:!0,placeholder:"To",value:bn.formatDisplayValue(F,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(tc,{id:n,show:p,value:x,format:c,onCancel:D,onChange:e=>{b(!1),v(!0),w(e);h&&h({start:e,end:F})}}),t(tc,{id:n,show:y,value:F,format:c,onCancel:D,onChange:e=>{v(!1),$(e);h&&h({start:x,end:e}),""==x?b(!0):g&&g()}})]}))}))};v.label`
    color: ${kl["text-subtle"]};
    margin-bottom: 0.5rem;
    display: inline-block;

    ${sd({textSize:"body-md"})}
    font-weight: ${Cl["weight-semibold"]};
`;const nc=v(cd.BodySM)`
    color: ${kl["text-error"]};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;v(cd.BodySM)`
    color: ${kl["text-subtler"]};
`,v.input`
    ${Jr("Body","regular")}
    color: ${Er.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Er.Neutral[3]};
    }

    ${e=>"number"===e.type?x`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?x`
                cursor: not-allowed;
            `:void 0}
`;const ic=v.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Er.Neutral[3]};
    background-color: transparent;
    border: none;
`,ac=v(j)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;v.div`
    display: flex;
    width: 100%;
`;const oc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",sc=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=sc(e.$variant);return x`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const lc=x`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>sc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Er.Accent.Light[3]};
    }
`,dc=v.button`
    ${lc}
    cursor: pointer;
`;v.div`
    ${lc}
`;const cc=w`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`;v.div`
    position: relative;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Er.Neutral[8]};

    :focus-within {
        border: 1px solid ${Er.Accent.Light[1]};
        box-shadow: ${Tr};
    }

    ${e=>e.expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${cc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${Er.Neutral[6](e)};

                ${dc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Er.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${dc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${Er.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Er.Validation.Red.Border(e)};
                    box-shadow: ${Hr};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${oc};
    margin-left: 1rem;
`,v(S)`
    color: ${Er.Neutral[3]};
    ${e=>{let t=Wr.Body.fontSize;return"small"===e.$variant&&(t=Wr.BodySmall.fontSize),x`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Er.Neutral[5]};
    margin: 0 0.5rem;
`,v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const uc=v.div`
    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;v(uc)`
    color: ${Er.Neutral[3]};
`,v.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const hc=v(ic)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`;v(dc)`
    padding-right: 2.75rem;
`;const mc={[Sr.colorScheme]:"base",[Sr.textStyleScheme]:"base",[Sr.designTokenScheme]:"base",[Sr.resourceScheme]:"base"};Sr.colorScheme,Sr.textStyleScheme,Sr.designTokenScheme,Sr.resourceScheme,Sr.colorScheme,Sr.textStyleScheme,Sr.designTokenScheme,Sr.resourceScheme,Sr.colorScheme,Sr.textStyleScheme,Sr.designTokenScheme,Sr.resourceScheme,Sr.colorScheme,Sr.textStyleScheme,Sr.designTokenScheme,Sr.resourceScheme,Sr.colorScheme,Sr.textStyleScheme,Sr.designTokenScheme,Sr.resourceScheme;const gc=x`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,fc=v.div`
    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?Er.Primary:Er.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gc}
`,pc=v.div`
    color: ${Er.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gc}

    ${e=>"next-line"===e.$labelDisplayType?x`
                    ${Jr("BodySmall","semibold")}
                `:x`
                    ${Jr("Body","regular")}
                `}
`,bc=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return x`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return x`
                    ${fc} {
                        display: inline;
                    }

                    ${pc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,yc=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,vc=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,xc=({displayType:n="inline",label:i,maxLines:a=2,selected:o,sublabel:s,truncationType:l="middle",variant:d})=>{const c=F()||mc,u=Wr.Body.fontSize({theme:c}),h=Wr.Body.fontFamily({theme:c}),{ref:m,width:f}=bi(),b=g((e=>{if("inline"!==n)return!1;return fn.getTextWidth(e,`${u}rem '${h}'`)>f*a-50}),[f,n,u,h,a]),y=p((()=>b(i)),[b,i]),v=p((()=>s&&b(s)),[b,s]),x=y||v?"next-line":n,w=n=>e(r,{children:[t(yc,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n})),t(vc,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n}))]});return e(bc,Object.assign({ref:m,$labelDisplayType:x},{children:[t(fc,Object.assign({"aria-label":i,$maxLines:a,$selected:o,$truncateType:l,$variant:d},{children:"middle"===l&&y?w(i):i})),s&&t(pc,Object.assign({"aria-label":s,$maxLines:a,$truncateType:l,$labelDisplayType:n},{children:"middle"===l&&v?w(s):s}))]}))};var wc=At;var Fc=At,$c=_t,Sc=Jt;var Dc=At,Bc=function(){this.__data__=new wc,this.size=0},Ec=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},kc=function(e){return this.__data__.get(e)},Cc=function(e){return this.__data__.has(e)},Oc=function(e,t){var r=this.__data__;if(r instanceof Fc){var n=r.__data__;if(!$c||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Sc(n)}return r.set(e,t),this.size=r.size,this};function Ac(e){var t=this.__data__=new Dc(e);this.size=t.size}Ac.prototype.clear=Bc,Ac.prototype.delete=Ec,Ac.prototype.get=kc,Ac.prototype.has=Cc,Ac.prototype.set=Oc;var _c=Ac;var zc=Jt,Mc=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},jc=function(e){return this.__data__.has(e)};function Tc(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new zc;++t<r;)this.add(e[t])}Tc.prototype.add=Tc.prototype.push=Mc,Tc.prototype.has=jc;var Hc=Tc,Ic=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Pc=function(e,t){return e.has(t)};var Lc=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var d=a.get(e),c=a.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,m=2&r?new Hc:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var g=e[u],f=t[u];if(n)var p=o?n(f,g,u,t,e,a):n(g,f,u,e,t,a);if(void 0!==p){if(p)continue;h=!1;break}if(m){if(!Ic(t,(function(e,t){if(!Pc(m,t)&&(g===e||i(g,e,r,n,a)))return m.push(t)}))){h=!1;break}}else if(g!==f&&!i(g,f,r,n,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Rc=le.Uint8Array,Nc=bt,Wc=Lc,Vc=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Yc=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Uc=de?de.prototype:void 0,qc=Uc?Uc.valueOf:void 0;var Xc=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Rc(e),new Rc(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nc(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Vc;case"[object Set]":var l=1&n;if(s||(s=Yc),e.size!=t.size&&!l)return!1;var d=o.get(e);if(d)return d==t;n|=2,o.set(e,t);var c=Wc(s(e),s(t),n,i,a,o);return o.delete(e),c;case"[object Symbol]":if(qc)return qc.call(e)==qc.call(t)}return!1};var Jc=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Zc=Jc,Qc=ie;var Gc=function(e,t,r){var n=t(e);return Qc(e)?n:Zc(n,r(e))};var Kc=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},eu=function(){return[]},tu=Object.prototype.propertyIsEnumerable,ru=Object.getOwnPropertySymbols,nu=ru?function(e){return null==e?[]:(e=Object(e),Kc(ru(e),(function(t){return tu.call(e,t)})))}:eu;var iu=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},au=xe,ou=we;var su=function(e){return ou(e)&&"[object Arguments]"==au(e)},lu=we,du=Object.prototype,cu=du.hasOwnProperty,uu=du.propertyIsEnumerable,hu=su(function(){return arguments}())?su:function(e){return lu(e)&&cu.call(e,"callee")&&!uu.call(e,"callee")},mu={exports:{}};var gu=function(){return!1};!function(e,t){var r=le,n=gu,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(mu,mu.exports);var fu=mu.exports,pu=/^(?:0|[1-9]\d*)$/;var bu=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&pu.test(e))&&e>-1&&e%1==0&&e<t};var yu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},vu=xe,xu=yu,wu=we,Fu={};Fu["[object Float32Array]"]=Fu["[object Float64Array]"]=Fu["[object Int8Array]"]=Fu["[object Int16Array]"]=Fu["[object Int32Array]"]=Fu["[object Uint8Array]"]=Fu["[object Uint8ClampedArray]"]=Fu["[object Uint16Array]"]=Fu["[object Uint32Array]"]=!0,Fu["[object Arguments]"]=Fu["[object Array]"]=Fu["[object ArrayBuffer]"]=Fu["[object Boolean]"]=Fu["[object DataView]"]=Fu["[object Date]"]=Fu["[object Error]"]=Fu["[object Function]"]=Fu["[object Map]"]=Fu["[object Number]"]=Fu["[object Object]"]=Fu["[object RegExp]"]=Fu["[object Set]"]=Fu["[object String]"]=Fu["[object WeakMap]"]=!1;var $u=function(e){return wu(e)&&xu(e.length)&&!!Fu[vu(e)]};var Su=function(e){return function(t){return e(t)}},Du={exports:{}};!function(e,t){var r=ae,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Du,Du.exports);var Bu=Du.exports,Eu=$u,ku=Su,Cu=Bu&&Bu.isTypedArray,Ou=Cu?ku(Cu):Eu,Au=iu,_u=hu,zu=ie,Mu=fu,ju=bu,Tu=Ou,Hu=Object.prototype.hasOwnProperty;var Iu=function(e,t){var r=zu(e),n=!r&&_u(e),i=!r&&!n&&Mu(e),a=!r&&!n&&!i&&Tu(e),o=r||n||i||a,s=o?Au(e.length,String):[],l=s.length;for(var d in e)!t&&!Hu.call(e,d)||o&&("length"==d||i&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||ju(d,l))||s.push(d);return s},Pu=Object.prototype;var Lu=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pu)};var Ru=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Nu=Lu,Wu=Ru,Vu=Object.prototype.hasOwnProperty;var Yu=Me,Uu=yu;var qu=function(e){return null!=e&&Uu(e.length)&&!Yu(e)},Xu=Iu,Ju=function(e){if(!Nu(e))return Wu(e);var t=[];for(var r in Object(e))Vu.call(e,r)&&"constructor"!=r&&t.push(r);return t},Zu=qu;var Qu=function(e){return Zu(e)?Xu(e):Ju(e)},Gu=Gc,Ku=nu,eh=Qu;var th=function(e){return Gu(e,eh,Ku)},rh=Object.prototype.hasOwnProperty;var nh=function(e,t,r,n,i,a){var o=1&r,s=th(e),l=s.length;if(l!=th(t).length&&!o)return!1;for(var d=l;d--;){var c=s[d];if(!(o?c in t:rh.call(t,c)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var m=!0;a.set(e,t),a.set(t,e);for(var g=o;++d<l;){var f=e[c=s[d]],p=t[c];if(n)var b=o?n(p,f,c,t,e,a):n(f,p,c,e,t,a);if(!(void 0===b?f===p||i(f,p,r,n,a):b)){m=!1;break}g||(g="constructor"==c)}if(m&&!g){var y=e.constructor,v=t.constructor;y==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(m=!1)}return a.delete(e),a.delete(t),m},ih=Ge(le,"DataView"),ah=_t,oh=Ge(le,"Promise"),sh=Ge(le,"Set"),lh=Ge(le,"WeakMap"),dh=xe,ch=Pe,uh="[object Map]",hh="[object Promise]",mh="[object Set]",gh="[object WeakMap]",fh="[object DataView]",ph=ch(ih),bh=ch(ah),yh=ch(oh),vh=ch(sh),xh=ch(lh),wh=dh;(ih&&wh(new ih(new ArrayBuffer(1)))!=fh||ah&&wh(new ah)!=uh||oh&&wh(oh.resolve())!=hh||sh&&wh(new sh)!=mh||lh&&wh(new lh)!=gh)&&(wh=function(e){var t=dh(e),r="[object Object]"==t?e.constructor:void 0,n=r?ch(r):"";if(n)switch(n){case ph:return fh;case bh:return uh;case yh:return hh;case vh:return mh;case xh:return gh}return t});var Fh=_c,$h=Lc,Sh=Xc,Dh=nh,Bh=wh,Eh=ie,kh=fu,Ch=Ou,Oh="[object Arguments]",Ah="[object Array]",_h="[object Object]",zh=Object.prototype.hasOwnProperty;var Mh=function(e,t,r,n,i,a){var o=Eh(e),s=Eh(t),l=o?Ah:Bh(e),d=s?Ah:Bh(t),c=(l=l==Oh?_h:l)==_h,u=(d=d==Oh?_h:d)==_h,h=l==d;if(h&&kh(e)){if(!kh(t))return!1;o=!0,c=!1}if(h&&!c)return a||(a=new Fh),o||Ch(e)?$h(e,t,r,n,i,a):Sh(e,t,l,r,n,i,a);if(!(1&r)){var m=c&&zh.call(e,"__wrapped__"),g=u&&zh.call(t,"__wrapped__");if(m||g){var f=m?e.value():e,p=g?t.value():t;return a||(a=new Fh),i(f,p,r,n,a)}}return!!h&&(a||(a=new Fh),Dh(e,t,r,n,i,a))},jh=we;var Th=function e(t,r,n,i,a){return t===r||(null==t||null==r||!jh(t)&&!jh(r)?t!=t&&r!=r:Mh(t,r,n,i,e,a))},Hh=_c,Ih=Th;var Ph=Oe;var Lh=function(e){return e==e&&!Ph(e)},Rh=Lh,Nh=Qu;var Wh=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Vh=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=r[i])[0],d=e[l],c=s[1];if(o&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Hh;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Ih(c,d,3,n,u):h))return!1}}return!0},Yh=function(e){for(var t=Nh(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Rh(i)]}return t},Uh=Wh;var qh=mr,Xh=hu,Jh=ie,Zh=bu,Qh=yu,Gh=fr;var Kh=function(e,t){return null!=e&&t in Object(e)},em=function(e,t,r){for(var n=-1,i=(t=qh(t,e)).length,a=!1;++n<i;){var o=Gh(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Qh(i)&&Zh(o,i)&&(Jh(e)||Xh(e))};var tm=Th,rm=xr,nm=function(e,t){return null!=e&&em(e,t,Kh)},im=Ce,am=Lh,om=Wh,sm=fr;var lm=yr;var dm=function(e){return function(t){return null==t?void 0:t[e]}},cm=function(e){return function(t){return lm(t,e)}},um=Ce,hm=fr;var mm=function(e){var t=Yh(e);return 1==t.length&&t[0][2]?Uh(t[0][0],t[0][1]):function(r){return r===e||Vh(r,e,t)}},gm=function(e,t){return im(e)&&am(t)?om(sm(e),t):function(r){var n=rm(r,e);return void 0===n&&n===t?nm(r,e):tm(t,n,3)}},fm=function(e){return e},pm=ie,bm=function(e){return um(e)?dm(hm(e)):cm(e)};var ym=function(e){return"function"==typeof e?e:null==e?fm:"object"==typeof e?pm(e)?gm(e[0],e[1]):mm(e):bm(e)},vm=ym,xm=qu,wm=Qu;var Fm=function(e){return function(t,r,n){var i=Object(t);if(!xm(t)){var a=vm(r);t=wm(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var $m=/\s/;var Sm=function(e){for(var t=e.length;t--&&$m.test(e.charAt(t)););return t},Dm=/^\s+/;var Bm=function(e){return e?e.slice(0,Sm(e)+1).replace(Dm,""):e},Em=Oe,km=Se,Cm=/^[-+]0x[0-9a-f]+$/i,Om=/^0b[01]+$/i,Am=/^0o[0-7]+$/i,_m=parseInt;var zm=function(e){if("number"==typeof e)return e;if(km(e))return NaN;if(Em(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Em(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bm(e);var r=Om.test(e);return r||Am.test(e)?_m(e.slice(2),r?2:8):Cm.test(e)?NaN:+e},Mm=1/0;var jm=function(e){return e?(e=zm(e))===Mm||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Tm=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},Hm=ym,Im=function(e){var t=jm(e),r=t%1;return t==t?r?t-r:t:0},Pm=Math.max;var Lm=ne(Fm((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Im(r);return i<0&&(i=Pm(n+i,0)),Tm(e,Hm(t),i)}))),Rm=Th;var Nm=ne((function(e,t){return Rm(e,t)}));const Wm=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Vm=({children:e})=>{const[r,n]=s(-1);return t(Wm.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:n}},{children:e}))},Ym=v.div`
    overflow: hidden;
    border: 1px solid ${Er.Neutral[5]};
    border-radius: 4px;
    background: ${Er.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Hl.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Er.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Um=v.div`
    background: transparent;
    padding: 0.5rem;
`,qm=v.ul`
    list-style-type: none;
`,Xm=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Er.Accent.Light[3]};

    ${e=>e.$active&&x`
            background: ${Er.Accent.Light[5]};
        `}
`,Jm=v(I)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Er.Primary};
`,Zm=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,Qm=v(H)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Er.Primary};
`,Gm=v(T)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Er.Accent.Light[2]};
`,Km=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,eg=v(cn)`
    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Er.Primary};
`,tg=v(eg)`
    outline-offset: 0.25rem;
`,rg=v(eg)`
    padding: 0.5rem 1rem;
`,ng=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","regular")}
`,ig=v(C)`
    ${e=>{const t="small"===e.$variant?1:1.125;return x`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Er.Validation.Red.Icon};
`,ag=v(il)`
    margin-right: 0.625rem;
    color: ${Er.Primary};
`,og=e=>"small"===e?1:1.125,sg=e=>x`
        height: ${og(e)}rem;
        width: ${og(e)}rem;
    `,lg=v.div`
    background: ${Er.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,dg=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,cg=v(dn)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,ug=v(P)`
    color: ${Er.Neutral[3]};
    flex-shrink: 0;
    ${e=>sg(e.$variant)}
`,hg=v(Pd)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Er.Neutral[3]};
    cursor: pointer;

    ${e=>x`
            svg {
                ${sg(e.$variant)}
            }
        `}
`,mg=m(((r,n)=>{var{value:i,variant:a,onClear:o}=r,s=ee(r,["value","variant","onClear"]);return e(lg,{children:[e(dg,{children:[t(ug,{$variant:a,"aria-hidden":!0}),t(cg,Object.assign({ref:n,value:i,$variant:a},s))]}),i&&t(hg,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:t(j,{"aria-hidden":!0})}))]})})),gg=({listItems:n,multiSelect:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:m="inline",variant:p="default",listboxId:b,width:y,topScrollItem:v,onSelectItem:x,onSelectAll:w,onDismiss:F,onRetry:$,valueExtractor:S,listExtractor:D,renderListItem:B,renderCustomCallToAction:E,enableSearch:k,hideNoResultsDisplay:C,searchPlaceholder:O="Search",searchFunction:A,onSearch:_})=>{const{focusedIndex:z,setFocusedIndex:M}=f(Wm),[j,T]=s(""),[H,I]=s(n),P=od(c),L=(()=>{const[e,t]=s(!1);return o((()=>{t(!0)}),[]),e})(),R=a(),N=a(),W=a([]),V=a(),Y=e=>D?D(e):e.toString(),U=g((e=>!!Lm(l,(t=>Nm(t,e)))),[l]),q=ad((()=>A(j))),X=ad((()=>n.filter((e=>{var t;const r=Y(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(t=r.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=j.trim().toLowerCase();return n.includes(a)||i&&i.includes(a)})))),J=(e,t)=>{M(t),null==x||x(e,(e=>S?S(e):e)(e))},Z=e=>{const t=e.target.value;T(t),null==_||_()},Q=()=>{var e;T(""),null===(e=V.current)||void 0===e||e.focus(),null==_||_()},G=()=>{null==$||$()};te("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),z<H.length-1){const e=z+1;null===(t=W.current[e])||void 0===t||t.focus(),M(e)}break;case"ArrowUp":if(e.preventDefault(),z>0){const e=z-1;null===(r=W.current[e])||void 0===r||r.focus(),M(e)}else 0===z&&V.current&&(V.current.focus(),M(-1));break;case"Space":case"Enter":document.activeElement===W.current[z]&&(e.preventDefault(),H[z]&&J(H[z],z))}})),o((()=>{if(void 0===v)return;const e=setTimeout((()=>{var e;const t=n.indexOf(v),r=W.current[t];if(R.current){const t=null!==(e=null==r?void 0:r.offsetTop)&&void 0!==e?e:0;R.current.scrollTop=t-8}M(t)}),0);return()=>clearTimeout(e)}),[W,n,M,v]),o((()=>{if(L)return;if(d)return;const e=n.findIndex((e=>U(e)));V.current?(M(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):W.current[z]?setTimeout((()=>{var e;return null===(e=W.current[z])||void 0===e?void 0:e.focus()}),200):W.current[e]?(M(e),setTimeout((()=>{var t;return null===(t=W.current[e])||void 0===t?void 0:t.focus()}),200)):(M(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[U,d,z,n,L,M]),o((()=>{L&&P&&(d||"success"===c&&V.current&&(M(-1),V.current.focus()))}),[L,P,c,M,d]),o((()=>{I(""===j?n:A?q():X())}),[q,X,n,A,j]);const K=e=>i?t(e?Qm:Gm,{"aria-hidden":!0}):e?t(Jm,{"aria-hidden":!0}):t(Zm,{}),ee=(e,r)=>{const n=Y(e),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel;return t(xc,{displayType:m,label:i,maxLines:h,selected:r,sublabel:a,truncationType:u,variant:p})},re=()=>{if(!$||$&&"success"===c)return H.map(((n,a)=>{const o=U(n),s=a===z;return t(Xm,Object.assign({"aria-selected":o,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>J(n,a),onMouseEnter:()=>(e=>{M(e)})(a),ref:e=>W.current[a]=e,role:"option",tabIndex:s?0:-1,$active:s},{children:B?B(n,{selected:o}):e(r,{children:[K(o),ee(n,o)]})}),((e,t)=>`item_${t}__${S?S(e):e}`)(n,a))}))},ne=()=>{if((k||A)&&"success"===c)return t(mg,{ref:V,onChange:Z,value:j,placeholder:O,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:p})},ie=()=>{if(i&&H.length>0&&!j&&"success"===c)return t(Km,{children:t(rg,Object.assign({onClick:w,type:"button",$variant:p},{children:0===l.length?"Select all":"Clear all"}))})},ae=()=>{if(!C&&(j||!k)&&0===H.length&&"success"===c)return e(ng,Object.assign({"data-testid":"list-no-results",$variant:p},{children:[t(ig,{"data-testid":"no-result-icon",$variant:p}),"No results found."]}))},oe=()=>{if($&&"loading"===c)return e(ng,Object.assign({"data-testid":"list-loading",$variant:p},{children:[t(ag,{}),"Loading..."]}))},se=()=>{if($&&"fail"===c)return e(ng,Object.assign({"data-testid":"list-fail",$variant:p},{children:[t(ig,{"data-testid":"load-error-icon",$variant:p}),"Failed to load. ",t(tg,Object.assign({onClick:G,type:"button",$variant:p},{children:"Try again."}))]}))};return e(Ym,Object.assign({"data-testid":"dropdown-container",ref:R,$width:y},{children:[e(Um,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[ne(),ie(),ae(),oe(),se(),t(qm,Object.assign({role:"listbox",id:b},{children:re()}))]})),(()=>{if(E)return t("div",Object.assign({"data-testid":"custom-cta"},{children:E(F,H)}))})()]}))},fg=v(cn)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Jr("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,pg=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${oc};

    svg {
        color: ${Er.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Wr.BodySmall.fontSize:Wr.Body.fontSize;return x`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`;var bg;m((({children:r,disabled:n,expanded:i,listboxId:a,readOnly:o,variant:s},l)=>e(fg,Object.assign({ref:l,type:"button","aria-expanded":i,"aria-haspopup":"listbox","data-testid":"selector",disabled:n,"aria-controls":a,$variant:s},{children:[r,!o&&t(pg,Object.assign({$expanded:i,$variant:s},{children:t(S,{"aria-hidden":!0})}))]})))),function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(bg||(bg={}));const yg=v.div`
    display: flex;
    flex-direction: column;
`,vg=e=>"right"===e?"bottom-end":"bottom-start",xg=({enabled:n,isOpen:i,onOpen:l,onClose:d,onDismiss:c,renderElement:u,renderDropdown:h,customZIndex:m,clickToToggle:g=!1,offset:f=0,alignment:p="left",fitAvailableHeight:b})=>{var y;const v=a(null),x=a(null),{width:w}=bi({targetRef:v,handleHeight:!1}),F={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<Il.mobileL;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:S,context:D}=R({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!i?null==l||l():!e&&i&&(null==d||d(r))},whileElementsMounted:N,placement:vg(p),middleware:[W(f),V(),Y({limiter:U()}),q({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:b?`${e}px`:void 0,overflowY:b?"hidden":void 0})}}),F]}),B=(()=>{const[e,t]=s(void 0),r=L();return o((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(bg.Change,e),r.events.emit(bg.Ready),()=>r.events.off(bg.Change,e)}),[r]),e})(),{isMounted:E,styles:k}=X(D,{initial:{opacity:0},open:{opacity:1},duration:300}),C=J(D,{enabled:n,toggle:g}),O=Z(D,{enabled:n}),{getReferenceProps:A,getFloatingProps:_}=Q([C,O]);return e(r,{children:[t("div",Object.assign({ref:e=>{v.current=e,$.setReference(e)}},A(),{children:u()})),E&&t(G,{children:t(K,Object.assign({context:D,modal:!1,initialFocus:x,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(y=null!=m?m:B)&&void 0!==y?y:50})},_(),{children:t(yg,Object.assign({ref:x,style:Object.assign({},k),inert:k.opacity<1?"":void 0},{children:h({elementWidth:w})}))}))}))})]})},wg=v(ln)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,Fg=r=>{var{id:n,disabled:i=!1,error:l,value:d,format:c="12hr",readOnly:u,onChange:h,onFocus:m,onBlur:f,alignment:b="left",dropdownZIndex:y,startLimit:v,endLimit:x,interval:w=15}=r,F=ee(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[$]=s((()=>id.generate())),[S,D]=s(null),[B,E]=s(!1),[k,C]=s(""),[O,A]=s(""),[_,z]=s(""),[M,j]=s(""),[T,H]=s(""),I=a(),P=a(),L=a(),R=p((()=>bn.generateTimings(w,c,v,x)),[w,c,v,x]),N=p((()=>{if(""===M)return R;const e=bn.findClosestFlooredTime(M,R);return R.slice(R.indexOf(e))}),[R,M]),W=g((e=>bn.parseInput(e,c)),[c]);o((()=>{var e,t;if(d){const r=null!==(e=W(d.start))&&void 0!==e?e:"",n=null!==(t=W(d.end))&&void 0!==t?t:"";A(r),z(n),j(r),H(n)}}),[d,W]),o((()=>{if(l)return void E(!1);const e=W(O),t=W(_);if(void 0===e)C("Invalid start time");else if(void 0===t)C("Invalid end time");else{if(!(""!==e&&""!==t&&bn.to24Hour(t)<bn.to24Hour(e)))return C(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||E(!0));C("End time must be after start time")}E(!1)}),[O,_,W,l]);const V=e=>{i||u||(S||B||null==m||m(),D(e),E(!0))},Y=e=>{i||u||(D(e),E(!0),("start"===e?P:L).current.select())};function U(e){switch(e.code){case"Enter":"start"===S?q(O):"end"===S&&(B&&X(_),L.current.blur());break;case"Tab":J(O,_,{})}}const q=e=>{J(e,_,{goToNextInput:!0})},X=e=>{J(O,e,{triggerOnBlur:!0})},J=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,a;const o=null!==(i=W(e))&&void 0!==i?i:M,s=null!==(a=W(t))&&void 0!==a?a:T;A(o),z(s);o===M&&s===T||null==h||h({start:o,end:s}),r&&void 0!==W(e)&&(D("end"),L.current.select()),n&&(D(null),E(!1),null==f||f()),j(o),H(s)},Z=e=>{e.stopPropagation(),A(""),z(""),j(""),H("");null==h||h({start:"",end:""}),D(null),E(!1)},Q=e=>{I.current&&!I.current.contains(e.relatedTarget)&&S&&!B&&J(O,_,{triggerOnBlur:!0})},G=()=>{if(!u&&!i&&((null==O?void 0:O.length)>0||(null==_?void 0:_.length)>0))return t(hc,Object.assign({onClick:Z,type:"button","aria-label":"Clear"},{children:t(ac,{"aria-hidden":!0})}))};return e(un,Object.assign({id:n},F,{children:[t(Vm,{children:t(xg,{enabled:!u&&!i,isOpen:B,renderElement:()=>e(wg,Object.assign({ref:I,$disabled:i,$error:l||!!k,$readOnly:u,onBlur:Q},{children:[e(zr,Object.assign({error:l||!!k,currentActive:null===S?"none":S},{children:[t(mn,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>A(e.target.value),value:O,disabled:i,readOnly:u,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":B,"aria-controls":$,"aria-autocomplete":"list"}),t(mn,{ref:L,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>z(e.target.value),value:_,disabled:i,readOnly:u,"data-testid":F["data-testid"]?`${F["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":B,"aria-controls":$,"aria-autocomplete":"list"})]})),G()]})),renderDropdown:()=>{if(B)return t(gg,"start"===S?{listItems:R,onSelectItem:q,selectedItems:[O],disableItemFocus:!0,topScrollItem:bn.findClosestFlooredTime(W(O),R),listboxId:$}:{listItems:N,onSelectItem:X,selectedItems:[_],disableItemFocus:!0,topScrollItem:bn.findClosestFlooredTime(W(_),N),listboxId:$})},onClose:e=>{"outside-press"===e?(D(null),E(!1),null==f||f()):J(O,_,{triggerOnBlur:!0})},onDismiss:()=>{("start"===S?P:L).current.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:y})}),!l&&k&&t(nc,Object.assign({id:n?`${n}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message"},{children:k}))]}))},$g=e=>{var{variant:r="dial"}=e,n=ee(e,["variant"]);return"dial"===r?t(rc,Object.assign({},n)):"combobox"===r?t(Fg,Object.assign({},n)):void 0};export{$g as TimeRangePicker};
//# sourceMappingURL=index.js.map
