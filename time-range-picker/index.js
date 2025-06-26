import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useEffect as a,useState as s,isValidElement as l,createRef as c,cloneElement as u,PureComponent as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,createElement as v}from"react";import{ArrowRightIcon as b,ChevronDownIcon as y}from"@lifesg/react-icons";import w,{css as x,keyframes as $,useTheme as S}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import{ChevronDownIcon as k}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";import B,{findDOMNode as T,unstable_batchedUpdates as O}from"react-dom";import{CircleIcon as C}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as H}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as z}from"@lifesg/react-icons/tick";import{ArrowRightIcon as M}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as j}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as P}from"@lifesg/react-icons/tick-circle-fill";import{MagnifierIcon as L}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as N}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as V,useFloating as W,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as J,useTransitionStyles as Q,useClick as X,useDismiss as K,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as ne}from"@floating-ui/react";function re(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const oe=(e,t,n="window",r)=>{const o=i();a((()=>{o.current=t}),[t]),a((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se=Array.isArray,le="object"==typeof ie&&ie&&ie.Object===Object&&ie,ce=le,ue="object"==typeof self&&self&&self.Object===Object&&self,de=ce||ue||Function("return this")(),he=de.Symbol,fe=he,pe=Object.prototype,me=pe.hasOwnProperty,ge=pe.toString,ve=fe?fe.toStringTag:void 0;var be=function(e){var t=me.call(e,ve),n=e[ve];try{e[ve]=void 0;var r=!0}catch(e){}var o=ge.call(e);return r&&(t?e[ve]=n:delete e[ve]),o},ye=Object.prototype.toString;var we=be,xe=function(e){return ye.call(e)},$e=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$e&&$e in Object(e)?we(e):xe(e)};var Ie=function(e){return null!=e&&"object"==typeof e},ke=Se,Fe=Ie;var Be=function(e){return"symbol"==typeof e||Fe(e)&&"[object Symbol]"==ke(e)},Te=se,Oe=Be,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,De=/^\w*$/;var He=function(e,t){if(Te(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Oe(e))||(De.test(e)||!Ce.test(e)||null!=t&&e in Object(t))};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ee=Se,ze=_e;var Me,Ae=function(e){if(!ze(e))return!1;var t=Ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Re=de["__core-js_shared__"],je=(Me=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Pe=function(e){return!!je&&je in e},Le=Function.prototype.toString;var Ne=function(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ve=Ae,We=Pe,Ye=_e,Ue=Ne,qe=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ze=Object.prototype,Je=Ge.toString,Qe=Ze.hasOwnProperty,Xe=RegExp("^"+Je.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ke=function(e){return!(!Ye(e)||We(e))&&(Ve(e)?Xe:qe).test(Ue(e))},et=function(e,t){return null==e?void 0:e[t]};var tt=function(e,t){var n=et(e,t);return Ke(n)?n:void 0},nt=tt(Object,"create"),rt=nt;var ot=function(){this.__data__=rt?rt(null):{},this.size=0};var it=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},at=nt,st=Object.prototype.hasOwnProperty;var lt=function(e){var t=this.__data__;if(at){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(t,e)?t[e]:void 0},ct=nt,ut=Object.prototype.hasOwnProperty;var dt=nt;var ht=ot,ft=it,pt=lt,mt=function(e){var t=this.__data__;return ct?void 0!==t[e]:ut.call(t,e)},gt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=dt&&void 0===t?"__lodash_hash_undefined__":t,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ht,vt.prototype.delete=ft,vt.prototype.get=pt,vt.prototype.has=mt,vt.prototype.set=gt;var bt=vt;var yt=function(){this.__data__=[],this.size=0};var wt=function(e,t){return e===t||e!=e&&t!=t},xt=wt;var $t=function(e,t){for(var n=e.length;n--;)if(xt(e[n][0],t))return n;return-1},St=$t,It=Array.prototype.splice;var kt=$t;var Ft=$t;var Bt=$t;var Tt=yt,Ot=function(e){var t=this.__data__,n=St(t,e);return!(n<0)&&(n==t.length-1?t.pop():It.call(t,n,1),--this.size,!0)},Ct=function(e){var t=this.__data__,n=kt(t,e);return n<0?void 0:t[n][1]},Dt=function(e){return Ft(this.__data__,e)>-1},Ht=function(e,t){var n=this.__data__,r=Bt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function _t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_t.prototype.clear=Tt,_t.prototype.delete=Ot,_t.prototype.get=Ct,_t.prototype.has=Dt,_t.prototype.set=Ht;var Et=_t,zt=tt(de,"Map"),Mt=bt,At=Et,Rt=zt;var jt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pt=function(e,t){var n=e.__data__;return jt(t)?n["string"==typeof t?"string":"hash"]:n.map},Lt=Pt;var Nt=Pt;var Vt=Pt;var Wt=Pt;var Yt=function(e,t){var n=Wt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ut=function(){this.size=0,this.__data__={hash:new Mt,map:new(Rt||At),string:new Mt}},qt=function(e){var t=Lt(this,e).delete(e);return this.size-=t?1:0,t},Gt=function(e){return Nt(this,e).get(e)},Zt=function(e){return Vt(this,e).has(e)},Jt=Yt;function Qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qt.prototype.clear=Ut,Qt.prototype.delete=qt,Qt.prototype.get=Gt,Qt.prototype.has=Zt,Qt.prototype.set=Jt;var Xt=Qt,Kt=Xt;function en(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(en.Cache||Kt),n}en.Cache=Kt;var tn=en;var nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/\\(\\)?/g,on=function(e){var t=tn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nn,(function(e,n,r,o){t.push(r?o.replace(rn,"$1"):n||e)})),t}));var an=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},sn=se,ln=Be,cn=he?he.prototype:void 0,un=cn?cn.toString:void 0;var dn=function e(t){if("string"==typeof t)return t;if(sn(t))return an(t,e)+"";if(ln(t))return un?un.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},hn=dn;var fn=se,pn=He,mn=on,gn=function(e){return null==e?"":hn(e)};var vn=function(e,t){return fn(e)?e:pn(e,t)?[e]:mn(gn(e))},bn=Be;var yn=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},wn=vn,xn=yn;var $n=function(e,t){for(var n=0,r=(t=wn(t,e)).length;null!=e&&n<r;)e=e[xn(t[n++])];return n&&n==r?e:void 0},Sn=$n;var In=function(e,t,n){var r=null==e?void 0:Sn(e,t);return void 0===r?n:r},kn=ae(In);const Fn=(e,t,n)=>t?kn(n,t)||kn(e,t):n||e,Bn=(e,t)=>{const n=t||e.defaultValue;return kn(e.collections,n)};var Tn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Tn||(Tn={}));const On={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Cn=e=>t=>{const n=t.theme,r=Bn(On,n[Tn.colorScheme]);return n.options&&n.options.color?Fn(r,e,n.options.color):Fn(r,e)},Dn={Brand:{1:Cn("Brand.1"),2:Cn("Brand.2"),3:Cn("Brand.3"),4:Cn("Brand.4"),5:Cn("Brand.5"),6:Cn("Brand.6")},Primary:Cn("Primary"),PrimaryDark:Cn("PrimaryDark"),Secondary:Cn("Secondary"),Accent:{Light:{1:Cn("Accent.Light.1"),2:Cn("Accent.Light.2"),3:Cn("Accent.Light.3"),4:Cn("Accent.Light.4"),5:Cn("Accent.Light.5"),6:Cn("Accent.Light.6")},Dark:{1:Cn("Accent.Dark.1"),2:Cn("Accent.Dark.2"),3:Cn("Accent.Dark.3")}},Neutral:{1:Cn("Neutral.1"),2:Cn("Neutral.2"),3:Cn("Neutral.3"),4:Cn("Neutral.4"),5:Cn("Neutral.5"),6:Cn("Neutral.6"),7:Cn("Neutral.7"),8:Cn("Neutral.8")},Validation:{Green:{Text:Cn("Validation.Green.Text"),Icon:Cn("Validation.Green.Icon"),Border:Cn("Validation.Green.Border"),Background:Cn("Validation.Green.Background")},Orange:{Text:Cn("Validation.Orange.Text"),Icon:Cn("Validation.Orange.Icon"),Border:Cn("Validation.Orange.Border"),Background:Cn("Validation.Orange.Background"),Badge:Cn("Validation.Orange.Badge")},Red:{Text:Cn("Validation.Red.Text"),Icon:Cn("Validation.Red.Icon"),Border:Cn("Validation.Red.Border"),Background:Cn("Validation.Red.Background")},Blue:{Text:Cn("Validation.Blue.Text"),Icon:Cn("Validation.Blue.Icon"),Border:Cn("Validation.Blue.Border"),Background:Cn("Validation.Blue.Background")}},Shadow:{Accent:Cn("Shadow.Accent"),Red:Cn("Shadow.Red"),Elevation:Cn("Shadow.Elevation")}},Hn=w.div`
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
`,_n=w.div`
    width: 100%; // Force next flex item to break to next line
`,En=w.div`
    display: flex;
    flex: 1;
    align-items: center;
`,zn=w(b)`
    color: ${Dn.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Mn=w.div`
    position: absolute;
    background: ${e=>e.$error?Dn.Validation.Red.Border(e):Dn.Primary(e)};
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
`,An=({children:n,currentActive:r,error:o,className:i,wrap:a})=>{const[s,l]=n;return e(Hn,Object.assign({className:i,$wrap:a},{children:[t(En,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(zn,{}),a&&t(_n,{}),t(En,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Mn,{"data-id":"range-container-indicator",$position:r,$error:o,$wrap:a})]}))},Rn={collections:{base:{InputBoxShadow:x`
        inset 0 0 4px 0px ${Dn.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 4px 0px ${Dn.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:x`
        inset 0 0 3px 0px ${Dn.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 3px 0px ${Dn.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jn=e=>t=>{var n;const r=t.theme,o=Bn(Rn,r[Tn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Fn(o,e,r.options.designToken):Fn(o,e)},Pn={InputBoxShadow:jn("InputBoxShadow"),InputErrorBoxShadow:jn("InputErrorBoxShadow"),ElevationBoxShadow:jn("ElevationBoxShadow"),Table:{Header:jn("Table.Header"),Cell:{Primary:jn("Table.Cell.Primary"),Secondary:jn("Table.Cell.Secondary"),Selected:jn("Table.Cell.Selected"),Hover:jn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jn("Button.Danger.BackgroundColor"),Hover:jn("Button.Danger.Hover"),Primary:jn("Button.Danger.Primary"),Border:jn("Button.Danger.Border")}}},Ln={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Nn={D1:{fontFamily:Ln.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ln.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Vn={D1:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Wn={collections:{base:Nn,oneservice:{D1:{fontFamily:Ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ln.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ln.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ln.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Vn},defaultValue:"base"},Yn=e=>t=>{const n=t.theme,r=Bn(Wn,n[Tn.textStyleScheme]);return n.options&&n.options.textStyle?Fn(r,e,n.options.textStyle):Fn(r,e)},Un={D1:{fontFamily:Yn("D1.fontFamily"),fontSize:Yn("D1.fontSize"),fontWeight:Yn("D1.fontWeight"),lineHeight:Yn("D1.lineHeight"),letterSpacing:Yn("D1.letterSpacing"),fontVariant:Yn("D1.fontVariant")},D2:{fontFamily:Yn("D2.fontFamily"),fontSize:Yn("D2.fontSize"),fontWeight:Yn("D2.fontWeight"),lineHeight:Yn("D2.lineHeight"),letterSpacing:Yn("D2.letterSpacing"),fontVariant:Yn("D2.fontVariant")},D3:{fontFamily:Yn("D3.fontFamily"),fontSize:Yn("D3.fontSize"),fontWeight:Yn("D3.fontWeight"),lineHeight:Yn("D3.lineHeight"),letterSpacing:Yn("D3.letterSpacing"),fontVariant:Yn("D3.fontVariant")},D4:{fontFamily:Yn("D4.fontFamily"),fontSize:Yn("D4.fontSize"),fontWeight:Yn("D4.fontWeight"),lineHeight:Yn("D4.lineHeight"),letterSpacing:Yn("D4.letterSpacing"),fontVariant:Yn("D4.fontVariant")},DBody:{fontFamily:Yn("DBody.fontFamily"),fontSize:Yn("DBody.fontSize"),fontWeight:Yn("DBody.fontWeight"),lineHeight:Yn("DBody.lineHeight"),letterSpacing:Yn("DBody.letterSpacing"),fontVariant:Yn("DBody.fontVariant")},H1:{fontFamily:Yn("H1.fontFamily"),fontSize:Yn("H1.fontSize"),fontWeight:Yn("H1.fontWeight"),lineHeight:Yn("H1.lineHeight"),letterSpacing:Yn("H1.letterSpacing"),fontVariant:Yn("H1.fontVariant")},H2:{fontFamily:Yn("H2.fontFamily"),fontSize:Yn("H2.fontSize"),fontWeight:Yn("H2.fontWeight"),lineHeight:Yn("H2.lineHeight"),letterSpacing:Yn("H2.letterSpacing"),fontVariant:Yn("H2.fontVariant")},H3:{fontFamily:Yn("H3.fontFamily"),fontSize:Yn("H3.fontSize"),fontWeight:Yn("H3.fontWeight"),lineHeight:Yn("H3.lineHeight"),letterSpacing:Yn("H3.letterSpacing"),fontVariant:Yn("H3.fontVariant")},H4:{fontFamily:Yn("H4.fontFamily"),fontSize:Yn("H4.fontSize"),fontWeight:Yn("H4.fontWeight"),lineHeight:Yn("H4.lineHeight"),letterSpacing:Yn("H4.letterSpacing"),fontVariant:Yn("H4.fontVariant")},H5:{fontFamily:Yn("H5.fontFamily"),fontSize:Yn("H5.fontSize"),fontWeight:Yn("H5.fontWeight"),lineHeight:Yn("H5.lineHeight"),letterSpacing:Yn("H5.letterSpacing"),fontVariant:Yn("H5.fontVariant")},H6:{fontFamily:Yn("H6.fontFamily"),fontSize:Yn("H6.fontSize"),fontWeight:Yn("H6.fontWeight"),lineHeight:Yn("H6.lineHeight"),letterSpacing:Yn("H6.letterSpacing"),fontVariant:Yn("H6.fontVariant")},Body:{fontFamily:Yn("Body.fontFamily"),fontSize:Yn("Body.fontSize"),fontWeight:Yn("Body.fontWeight"),lineHeight:Yn("Body.lineHeight"),letterSpacing:Yn("Body.letterSpacing"),fontVariant:Yn("Body.fontVariant")},BodySmall:{fontFamily:Yn("BodySmall.fontFamily"),fontSize:Yn("BodySmall.fontSize"),fontWeight:Yn("BodySmall.fontWeight"),lineHeight:Yn("BodySmall.lineHeight"),letterSpacing:Yn("BodySmall.letterSpacing"),fontVariant:Yn("BodySmall.fontVariant")},XSmall:{fontFamily:Yn("XSmall.fontFamily"),fontSize:Yn("XSmall.fontSize"),fontWeight:Yn("XSmall.fontWeight"),lineHeight:Yn("XSmall.lineHeight"),letterSpacing:Yn("XSmall.letterSpacing"),fontVariant:Yn("XSmall.fontVariant")}},qn=[Ln.OpenSans,Ln.PlusJakartaSans],Gn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Zn=(e,t)=>n=>{var r;const o=Un[e].fontFamily(n),i=Un[e].fontWeight(n),a=qn.find((e=>Object.values(e).includes(o)));return a?x`
                font-family: ${Gn(a,t)||Gn(a,i)||o};
                font-weight: normal !important;
            `:x`
            font-family: ${o};
            font-weight: ${null!==(r=Jn(t)||i)&&void 0!==r?r:"normal"};
        `},Jn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Qn=e=>{if(e>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Xn=Zn,Kn=(e,t,n=!1)=>r=>{const o=Un[e],i=o.fontSize(r);return x`
            ${Zn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${x`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},er=(e=!1,t=!1,n=void 0)=>t?x`
            display: block;
            ${Qn(n)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Qn(n)}
        `;var tr;!function(e){e.D1=w.h1`
        ${e=>x`
                ${Kn("D1",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=w.h1`
        ${e=>x`
                ${Kn("D2",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=w.h1`
        ${e=>x`
                ${Kn("D3",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=w.h1`
        ${e=>x`
                ${Kn("D4",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=w.h1`
        ${e=>x`
                ${Kn("DBody",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=w.h1`
        ${e=>x`
                ${Kn("H1",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=w.h2`
        ${e=>x`
                ${Kn("H2",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=w.h3`
        ${e=>x`
                ${Kn("H3",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=w.h4`
        ${e=>x`
                ${Kn("H4",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=w.h5`
        ${e=>x`
                ${Kn("H5",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=w.h6`
        ${e=>x`
                ${Kn("H6",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=w.p`
        ${e=>x`
                ${Kn("Body",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=w.p`
        ${e=>x`
                ${Kn("BodySmall",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=w.span`
        ${e=>x`
                ${Kn("XSmall",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${er(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>or(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>or(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(tr||(tr={}));const nr=w.a`
    ${e=>x`
            ${Kn(e.textStyle,e.weight)}
            color: ${Dn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dn.Secondary};

                svg {
                    color: ${Dn.Secondary};
                }
            }
        `}
`,rr=w(I)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,or=n=>{var{external:r=!1,children:o}=n,i=re(n,["external","children"]);return e(nr,Object.assign({},i,{children:[o,r&&t(rr,{})]}))};var ir;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ir||(ir={}));const ar=x`
    border: 1px solid ${Dn.Accent.Light[1]};
    box-shadow: ${Pn.InputBoxShadow};
`,sr=x`
    border: 1px solid ${Dn.Accent.Light[1]};
    box-shadow: none;
`,lr=x`
    border: 1px solid ${Dn.Neutral[5]};
    box-shadow: none;
`,cr=x`
    border: 1px solid ${Dn.Validation.Red.Border};
    box-shadow: ${Pn.InputErrorBoxShadow};
`,ur=w.div`
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: 4px;
    background: ${Dn.Neutral[8]};

    :focus-within {
        ${ar}
    }
    ${e=>e.$focused&&ar}

    ${e=>e.$readOnly?x`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${sr}
                }
                ${e.$focused&&sr}
            `:e.$disabled?x`
                background: ${Dn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${lr}
                }
                ${e.$focused&&lr}
            `:e.$error?x`
                border: 1px solid ${Dn.Validation.Red.Border};

                :focus-within {
                    ${cr}
                }
                ${e.$focused&&cr}
            `:void 0}
`,dr=w(ur)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,hr=w.input`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Dn.Neutral[1]};
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
        color: ${Dn.Neutral[3]};
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
`,fr=w.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Dn.Primary};
    }
`,pr=w.div`
    position: relative;
`,mr=w(dr)`
    height: 3rem;
    gap: 0.5rem;
`,gr=w(hr)`
    display: block;
    width: 100%;
    flex: 1;
`;var vr={exports:{}};vr.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",w={};w[y]=g;var x="$isDayjsObject",$=function(e){return e instanceof F||!(!e||!e[x])},S=function e(t,n,r){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(y=o),o||!r&&y},I=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},k=b;k.l=S,k.i=$,k.w=function(e,t){return I(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=I(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return I(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<I(e)},v.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!k.u(t)||t,u=k.p(e),f=function(e,t){var o=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var y=this.$locale().weekStart||0,w=(m<y?m+7:m)-y;return f(r?v-w:v+(6-w),g);case s:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case i:return p(b+"Seconds",2);case o:return p(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=k.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[k.p(e)]()},v.add=function(r,u){var h,f=this;r=Number(r);var p=k.p(u),m=function(e){var t=I(f);return k.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[a]=n,h[o]=e,h)[p]||1,v=this.$d.getTime()+r*g;return k.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},h=function(e){return k.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var p,m=this,g=k.p(h),v=I(r),b=(v.utcOffset()-this.utcOffset())*t,y=this-v,w=function(){return k.m(m,v)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(y-b)/6048e5;break;case s:p=(y-b)/864e5;break;case a:p=y/n;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:k.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),B=F.prototype;return I.prototype=B,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),I.extend=function(e,t){return e.$i||(e(t,F,I),e.$i=!0),I},I.locale=S,I.isDayjs=$,I.unix=function(e){return I(1e3*e)},I.en=w[y],I.Ls=w,I.p={},I}();var br,yr,wr,xr=ae(vr.exports);!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(br||(br={})),function(e){e.AM="AM",e.PM="PM"}(yr||(yr={})),function(e){e.roundToNearestInterval=(e,t,n)=>{const[r,o]=e.split(":"),i=parseInt(r,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,c=0===l?s:n?s+(t-l):s-l,u=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let o=xr(e,r),i=xr(t,r);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(n)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:yr.AM};if(!t)return n;try{if("24hr"===e){const r=Ir(t,e);n.minute=br.padValue(r.minute);const o=parseInt(r.hour);0===Math.floor(o/12)?(n.period=yr.AM,n.hour=0===o?"12":br.padValue(o.toString())):(n.period=yr.PM,n.hour=12===o?o.toString():br.padValue((o-12).toString()))}else{const r=Ir(t,e);n.hour=br.padValue(r.hour),n.minute=br.padValue(r.minute),n.period="am"===r.period.toLowerCase()?yr.AM:yr.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?br.padValue("0"):"55";const r=Math.floor(n/5),o=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return br.padValue((5*o).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?br.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?br.padValue(r.toString()):13===r?br.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===yr.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return br.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Ir(e,t),r=br.padValue(n.hour);let o=`${r}:${br.padValue(n.minute)}`;return"12hr"===t?(o+=n.period.toLowerCase(),o):o}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,o]=t.split(":").map(Number);let i=r;return"pm"===n&&i<12&&(i+=12),"am"===n&&12===i&&(i=0),kr(i,o)}return e},e.generateTimings=(t,n="12hr",r,o)=>{const i=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=kr(e,r,t);i.push(n)}else{const t=kr(e,r);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let o=parseInt(r[1]||"0",10);const i=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),kr(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return kr(o,i,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let o="",i=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<i)i=Math.abs(n),o=t;else if(n>0)break}return o},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,o]=t.split(":").map(Number);let i=r;return"pm"===n&&12!==i&&(i+=12),"am"===n&&12===i&&(i=0),60*i+o}}(wr||(wr={}));const $r=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Sr=e=>{const t=parseInt(e);return t>=0&&t<=59},Ir=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),i=n[1].substring(2);if(!$r(n[0],t)||!Sr(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!$r(n[0],t)||!Sr(n[1]))throw r;return{hour:n[0],minute:n[1]};var o},kr=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Fr=function(e,t){return Fr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Fr(e,t)};var Br=function(){return Br=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Br.apply(this,arguments)};var Tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Or=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Cr="object"==typeof Tr&&Tr&&Tr.Object===Object&&Tr,Dr="object"==typeof self&&self&&self.Object===Object&&self,Hr=Cr||Dr||Function("return this")(),_r=Hr,Er=function(){return _r.Date.now()},zr=/\s/;var Mr=function(e){for(var t=e.length;t--&&zr.test(e.charAt(t)););return t},Ar=/^\s+/;var Rr=function(e){return e?e.slice(0,Mr(e)+1).replace(Ar,""):e},jr=Hr.Symbol,Pr=jr,Lr=Object.prototype,Nr=Lr.hasOwnProperty,Vr=Lr.toString,Wr=Pr?Pr.toStringTag:void 0;var Yr=function(e){var t=Nr.call(e,Wr),n=e[Wr];try{e[Wr]=void 0;var r=!0}catch(e){}var o=Vr.call(e);return r&&(t?e[Wr]=n:delete e[Wr]),o},Ur=Object.prototype.toString;var qr=Yr,Gr=function(e){return Ur.call(e)},Zr=jr?jr.toStringTag:void 0;var Jr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zr&&Zr in Object(e)?qr(e):Gr(e)},Qr=function(e){return null!=e&&"object"==typeof e};var Xr=Rr,Kr=Or,eo=function(e){return"symbol"==typeof e||Qr(e)&&"[object Symbol]"==Jr(e)},to=/^[-+]0x[0-9a-f]+$/i,no=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,oo=parseInt;var io=Or,ao=Er,so=function(e){if("number"==typeof e)return e;if(eo(e))return NaN;if(Kr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xr(e);var n=no.test(e);return n||ro.test(e)?oo(e.slice(2),n?2:8):to.test(e)?NaN:+e},lo=Math.max,co=Math.min;var uo=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=ao();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?co(n,i-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=o=void 0,a)}function v(){var e=ao(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=so(t)||0,io(n)&&(u=!!n.leading,i=(d="maxWait"in n)?lo(so(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},v.flush=function(){return void 0===s?a:g(ao())},v},ho=uo,fo=Or;var po=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fo(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ho(e,t,{leading:r,maxWait:t,trailing:o})},mo=function(e,t,n,r){switch(t){case"debounce":return uo(e,n,r);case"throttle":return po(e,n,r);default:return e}},go=function(e){return"function"==typeof e},vo=function(){return"undefined"==typeof window},bo=function(e){return e instanceof Element||e instanceof HTMLDocument},yo=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&go(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!vo()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(vo())return null;if(t)return document.querySelector(t);if(r&&bo(r))return r;if(n.targetRef&&bo(n.targetRef.current))return n.targetRef.current;var o=T(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=yo(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!vo()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return go(t)?"renderProp":go(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,vo()||(n.resizeHandler=mo(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Fr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){vo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return u(e,c)}return u(e,l);case"childArray":return(e=o).map((function(e){return!!e&&u(e,l)}));default:return r.createElement(a,null)}}}(d);var wo=vo()?a:h;function xo(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=i(n),v=i(null),b=null!=f?f:v,y=i(),w=s({width:void 0,height:void 0}),x=w[0],$=w[1];return wo((function(){if(!vo()){var e=yo(m,$,u,h);y.current=mo((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!vo()&&e({width:r,height:o}),g.current=!1}))}),r,a,l);var t=new window.ResizeObserver(y.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,a,l,u,h,m,p,b.current]),Br({ref:b},x)}var $o=Ro(),So=e=>Eo(e,$o),Io=Ro();So.write=e=>Eo(e,Io);var ko=Ro();So.onStart=e=>Eo(e,ko);var Fo=Ro();So.onFrame=e=>Eo(e,Fo);var Bo=Ro();So.onFinish=e=>Eo(e,Bo);var To=[];So.setTimeout=(e,t)=>{const n=So.now()+t,r=()=>{const e=To.findIndex((e=>e.cancel==r));~e&&To.splice(e,1),Ho-=~e?1:0},o={time:n,handler:e,cancel:r};return To.splice(Oo(n),0,o),Ho+=1,zo(),o};var Oo=e=>~(~To.findIndex((t=>t.time>e))||~To.length);So.cancel=e=>{ko.delete(e),Fo.delete(e),Bo.delete(e),$o.delete(e),Io.delete(e)},So.sync=e=>{_o=!0,So.batchedUpdates(e),_o=!1},So.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,So.onStart(n)}return r.handler=e,r.cancel=()=>{ko.delete(n),t=null},r};var Co="undefined"!=typeof window?window.requestAnimationFrame:()=>{};So.use=e=>Co=e,So.now="undefined"!=typeof performance?()=>performance.now():Date.now,So.batchedUpdates=e=>e(),So.catch=console.error,So.frameLoop="always",So.advance=()=>{"demand"!==So.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ao()};var Do=-1,Ho=0,_o=!1;function Eo(e,t){_o?(t.delete(e),e(0)):(t.add(e),zo())}function zo(){Do<0&&(Do=0,"demand"!==So.frameLoop&&Co(Mo))}function Mo(){~Do&&(Co(Mo),So.batchedUpdates(Ao))}function Ao(){const e=Do;Do=So.now();const t=Oo(Do);t&&(jo(To.splice(0,t),(e=>e.handler())),Ho-=t),Ho?(ko.flush(),$o.flush(e?Math.min(64,Do-e):16.667),Fo.flush(),Io.flush(),Bo.flush()):Do=-1}function Ro(){let e=new Set,t=e;return{add(n){Ho+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ho-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ho-=t.size,jo(t,(t=>t(n)&&e.add(t))),Ho+=e.size,t=e)}}}function jo(e,t){e.forEach((e=>{try{t(e)}catch(e){So.catch(e)}}))}var Po=Object.defineProperty,Lo={};function No(){}((e,t)=>{for(var n in t)Po(e,n,{get:t[n],enumerable:!0})})(Lo,{assign:()=>ni,colors:()=>Ko,createStringInterpolator:()=>Zo,skipAnimation:()=>ei,to:()=>Jo,willAdvance:()=>ti});var Vo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Wo(e,t){if(Vo.arr(e)){if(!Vo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Yo=(e,t)=>e.forEach(t);function Uo(e,t,n){if(Vo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var qo=e=>Vo.und(e)?[]:Vo.arr(e)?e:[e];function Go(e,t){if(e.size){const n=Array.from(e);e.clear(),Yo(n,t)}}var Zo,Jo,Qo=(e,...t)=>Go(e,(e=>e(...t))),Xo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ko=null,ei=!1,ti=No,ni=e=>{e.to&&(Jo=e.to),e.now&&(So.now=e.now),void 0!==e.colors&&(Ko=e.colors),null!=e.skipAnimation&&(ei=e.skipAnimation),e.createStringInterpolator&&(Zo=e.createStringInterpolator),e.requestAnimationFrame&&So.use(e.requestAnimationFrame),e.batchedUpdates&&(So.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ti=e.willAdvance),e.frameLoop&&(So.frameLoop=e.frameLoop)},ri=new Set,oi=[],ii=[],ai=0,si={get idle(){return!ri.size&&!oi.length},start(e){ai>e.priority?(ri.add(e),So.onStart(li)):(ci(e),So(di))},advance:di,sort(e){if(ai)So.onFrame((()=>si.sort(e)));else{const t=oi.indexOf(e);~t&&(oi.splice(t,1),ui(e))}},clear(){oi=[],ri.clear()}};function li(){ri.forEach(ci),ri.clear(),So(di)}function ci(e){oi.includes(e)||ui(e)}function ui(e){oi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(oi,(t=>t.priority>e.priority)),0,e)}function di(e){const t=ii;for(let n=0;n<oi.length;n++){const r=oi[n];ai=r.priority,r.idle||(ti(r),r.advance(e),r.idle||t.push(r))}return ai=0,(ii=oi).length=0,(oi=t).length>0}var hi="[-+]?\\d*\\.?\\d+",fi=hi+"%";function pi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var mi=new RegExp("rgb"+pi(hi,hi,hi)),gi=new RegExp("rgba"+pi(hi,hi,hi,hi)),vi=new RegExp("hsl"+pi(hi,fi,fi)),bi=new RegExp("hsla"+pi(hi,fi,fi,hi)),yi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xi=/^#([0-9a-fA-F]{6})$/,$i=/^#([0-9a-fA-F]{8})$/;function Si(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ii(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Si(o,r,e+1/3),a=Si(o,r,e),s=Si(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ki(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Fi(e){return(parseFloat(e)%360+360)%360/360}function Bi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ko&&void 0!==Ko[e]?Ko[e]:(t=mi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|255)>>>0:(t=gi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|Bi(t[4]))>>>0:(t=yi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$i.exec(e))?parseInt(t[1],16)>>>0:(t=wi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=vi.exec(e))?(255|Ii(Fi(t[1]),Ti(t[2]),Ti(t[3])))>>>0:(t=bi.exec(e))?(Ii(Fi(t[1]),Ti(t[2]),Ti(t[3]))|Bi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ci=(e,t,n)=>{if(Vo.fun(e))return e;if(Vo.arr(e))return Ci({range:e,output:t,extrapolate:n});if(Vo.str(e.output[0]))return Zo(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:o===1/0?c+=r:c=c*(o-r)+r;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,r.map)}};var Di=1.70158,Hi=1.525*Di,_i=Di+1,Ei=2*Math.PI/3,zi=2*Math.PI/4.5,Mi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_i*e*e*e-Di*e*e,easeOutBack:e=>1+_i*Math.pow(e-1,3)+Di*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Hi)/2:(Math.pow(2*e-2,2)*((Hi+1)*(2*e-2)+Hi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ei),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ei)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zi)/2+1,easeInBounce:e=>1-Mi(1-e),easeOutBounce:Mi,easeInOutBounce:e=>e<.5?(1-Mi(1-2*e))/2:(1+Mi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}},Ri=Symbol.for("FluidValue.get"),ji=Symbol.for("FluidValue.observers"),Pi=e=>Boolean(e&&e[Ri]),Li=e=>e&&e[Ri]?e[Ri]():e,Ni=e=>e[ji]||null;function Vi(e,t){const n=e[ji];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Yi(this,e)}},Yi=(e,t)=>Zi(e,Ri,t);function Ui(e,t){if(e[Ri]){let n=e[ji];n||Zi(e,ji,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function qi(e,t){const n=e[ji];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ji]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Gi,Zi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ji=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Qi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xi=new RegExp(`(${Ji.source})(%|[a-z]+)`,"i"),Ki=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ea=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ta=e=>{const[t,n]=na(e);if(!t||Xo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&ea.test(n)?ta(n):n||e},na=e=>{const t=ea.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},ra=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,oa=e=>{Gi||(Gi=Ko?new RegExp(`(${Object.keys(Ko).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Li(e).replace(ea,ta).replace(Qi,Oi).replace(Gi,Oi))),n=t.map((e=>e.match(Ji).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ci({...e,output:t})));return e=>{const n=!Xi.test(t[0])&&t.find((e=>Xi.test(e)))?.replace(Ji,"");let o=0;return t[0].replace(Ji,(()=>`${r[o++](e)}${n||""}`)).replace(Ki,ra)}},ia="react-spring: ",aa=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${ia}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},sa=aa(console.warn);var la=aa(console.warn);function ca(e){return Vo.str(e)&&("#"==e[0]||/\d/.test(e)||!Xo()&&ea.test(e)||e in(Ko||{}))}var ua=Xo()?a:h;function da(){const e=s()[1],t=(()=>{const e=i(!1);return ua((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ha=e=>a(e,fa),fa=[];function pa(e){const t=i();return a((()=>{t.current=e})),t.current}var ma=Symbol.for("Animated:node"),ga=e=>e&&e[ma],va=(e,t)=>{return n=e,r=ma,o=t,Object.defineProperty(n,r,{value:o,writable:!0,configurable:!0});var n,r,o},ba=e=>e&&e[ma]&&e[ma].getPayload(),ya=class{constructor(){va(this,this)}getPayload(){return this.payload||[]}},wa=class extends ya{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Vo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new wa(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Vo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Vo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},xa=class extends wa{constructor(e){super(0),this._string=null,this._toString=Ci({output:[e,e]})}static create(e){return new xa(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Vo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ci({output:[this.getValue(),e]})),this._value=0,super.reset()}},$a={dependencies:null},Sa=class extends ya{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Uo(this.source,((n,r)=>{var o;(o=n)&&o[ma]===o?t[r]=n.getValue(e):Pi(n)?t[r]=Li(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Yo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Uo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){$a.dependencies&&Pi(e)&&$a.dependencies.add(e);const t=ba(e);t&&Yo(t,(e=>this.add(e)))}},Ia=class extends Sa{constructor(e){super(e)}static create(e){return new Ia(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ka)),!0)}};function ka(e){return(ca(e)?xa:wa).create(e)}function Fa(e){const t=ga(e);return t?t.constructor:Vo.arr(e)?Ia:ca(e)?xa:wa}var Ba=(e,t)=>{const n=!Vo.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((o,s)=>{const l=i(null),c=n&&p((e=>{l.current=function(e,t){e&&(Vo.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[u,d]=function(e,t){const n=new Set;$a.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Sa(e),$a.dependencies=null,[e,n]}(o,t),h=da(),f=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},m=new Ta(f,d),g=i();ua((()=>(g.current=m,Yo(d,(e=>Ui(e,m))),()=>{g.current&&(Yo(g.current.deps,(e=>qi(e,g.current))),So.cancel(g.current.update))}))),a(f,[]),ha((()=>()=>{const e=g.current;Yo(e.deps,(t=>qi(t,e)))}));const v=t.getComponentProps(u.getValue());return r.createElement(e,{...v,ref:c})}))},Ta=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&So.write(this.update)}};var Oa=Symbol.for("AnimatedComponent"),Ca=e=>Vo.str(e)?e:e&&Vo.str(e.displayName)?e.displayName:Vo.fun(e)&&e.name||null;function Da(e,...t){return Vo.fun(e)?e(...t):e}var Ha=(e,t)=>!0===e||!!(t&&e&&(Vo.fun(e)?e(t):qo(e).includes(t))),_a=(e,t)=>Vo.obj(e)?t&&e[t]:e,Ea=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,za=e=>e,Ma=(e,t=za)=>{let n=Aa;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const n=t(e[o],o);Vo.und(n)||(r[o]=n)}return r},Aa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ra={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ja(e){const t=function(e){const t={};let n=0;if(Uo(e,((e,r)=>{Ra[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Uo(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Pa(e){return e=Li(e),Vo.arr(e)?e.map(Pa):ca(e)?Lo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function La(e){return Vo.fun(e)||Vo.arr(e)&&Vo.obj(e[0])}var Na={tension:170,friction:26,mass:1,damping:1,easing:Ai.linear,clamp:!1},Va=class{constructor(){this.velocity=0,Object.assign(this,Na)}};function Wa(e,t){if(Vo.und(t.decay)){const n=!Vo.und(t.tension)||!Vo.und(t.friction);!n&&Vo.und(t.frequency)&&Vo.und(t.damping)&&Vo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Ya=[],Ua=class{constructor(){this.changed=!1,this.values=Ya,this.toValues=null,this.fromValues=Ya,this.config=new Va,this.immediate=!1}};function qa(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,u=Ha(n.cancel??r?.cancel,t);if(u)f();else{Vo.und(n.pause)||(o.paused=Ha(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||Ha(e,t)),l=Da(n.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){o.resumeQueue.add(h),o.timeouts.delete(c),c.cancel(),l=c.time-So.now()}function h(){l>0&&!Lo.skipAnimation?(o.delayed=!0,c=So.setTimeout(f,l),o.pauseQueue.add(d),o.timeouts.add(c)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(c),e<=(o.cancelId||0)&&(u=!0);try{i.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Ga=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Qa(e.get()):t.every((e=>e.noop))?Za(e.get()):Ja(e.get(),t.every((e=>e.finished))),Za=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ja=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Qa=e=>({value:e,cancelled:!0,finished:!1});function Xa(e,t,n,r){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=Ma(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=o<=(n.cancelId||0)&&Qa(r)||o!==n.asyncId&&Ja(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new es,a=new ts;return(async()=>{if(Lo.skipAnimation)throw Ka(n),a.result=Ja(r,!1),d(a),a;f(i);const s=Vo.obj(e)?{...e}:{...t,to:e};s.parentId=o,Uo(c,((e,t)=>{Vo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(Lo.skipAnimation)return Ka(n),Ja(r,!1);try{let t;t=Vo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=Ja(r.get(),!0,!1)}catch(e){if(e instanceof es)m=e.result;else{if(!(e instanceof ts))throw e;m=e.result}}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return Vo.fun(a)&&So.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function Ka(e,t){Go(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var es=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},ts=class extends Error{constructor(){super("SkipAnimationSignal")}},ns=e=>e instanceof os,rs=1,os=class extends Wi{constructor(){super(...arguments),this.id=rs++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ga(this);return e&&e.getValue()}to(...e){return Lo.to(this,e)}interpolate(...e){return sa(`${ia}The "interpolate" function is deprecated in v9 (use "to" instead)`),Lo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||si.sort(this),Vi(this,{type:"priority",parent:this,priority:e})}},is=Symbol.for("SpringPhase"),as=e=>(1&e[is])>0,ss=e=>(2&e[is])>0,ls=e=>(4&e[is])>0,cs=(e,t)=>t?e[is]|=3:e[is]&=-3,us=(e,t)=>t?e[is]|=4:e[is]&=-5,ds=class extends os{constructor(e,t){if(super(),this.animation=new Ua,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Vo.und(e)||!Vo.und(t)){const n=Vo.obj(e)?{...e}:{...t,from:e};Vo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ss(this)||this._state.asyncTo)||ls(this)}get goal(){return Li(this.animation.to)}get velocity(){const e=ga(this);return e instanceof wa?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return as(this)}get isAnimating(){return ss(this)}get isPaused(){return ls(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:o}=r;const{config:i}=r,a=ba(r.to);!a&&Pi(r.to)&&(o=qo(Li(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==xa?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Vo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Vo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Vo.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,v=Math.ceil(e/g);for(let e=0;e<v&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ga(this),l=s.getValue();if(t){const e=Li(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return So.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ss(this)){const{to:e,config:t}=this.animation;So.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Vo.und(e)?(n=this.queue||[],this.queue=[]):n=[Vo.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ga(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ka(this._state,e&&this._lastCallId),So.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Vo.obj(n)?n[t]:n,(null==n||La(n))&&(n=void 0),r=Vo.obj(r)?r[t]:r,null==r&&(r=void 0);const o={to:n,from:r};return as(this)||(e.reverse&&([n,r]=[r,n]),r=Li(r),Vo.und(r)?ga(this)||this._set(n):this._set(r)),o}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Ma(e,((e,t)=>/^on/.test(t)?_a(e,n):e))),bs(this,e,"onProps"),ys(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return qa(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{ls(this)||(us(this,!0),Qo(i.pauseQueue),ys(this,"onPause",Ja(this,hs(this,this.animation.to)),this))},resume:()=>{ls(this)&&(us(this,!1),ss(this)&&this._resume(),Qo(i.resumeQueue),ys(this,"onResume",Ja(this,hs(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=fs(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Qa(this));const r=!Vo.und(e.to),o=!Vo.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(Qa(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||r||t.default&&!Vo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Wo(d,c);h&&(s.from=d),d=Li(d);const f=!Wo(u,l);f&&this._focus(u);const p=La(t.to),{config:m}=s,{decay:g,velocity:v}=m;(r||o)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Wa(n={...n},t),t={...n,...t}),Wa(e,t),Object.assign(e,t);for(const t in Na)null==e[t]&&(e[t]=Na[t]);let{frequency:r,damping:o}=e;const{mass:i}=e;Vo.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,Da(t.config,i),t.config!==a.config?Da(a.config,i):void 0);let b=ga(this);if(!b||Vo.und(u))return n(Ja(this,!0));const y=Vo.und(t.reset)?o&&!t.default:!Vo.und(d)&&Ha(t.reset,i),w=y?d:this.get(),x=Pa(u),$=Vo.num(x)||Vo.arr(x)||ca(x),S=!p&&(!$||Ha(a.immediate||t.immediate,i));if(f){const e=Fa(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(x)}}const I=b.constructor;let k=Pi(u),F=!1;if(!k){const e=y||!as(this)&&h;(f||e)&&(F=Wo(Pa(w),x),k=!F),(Wo(s.immediate,S)||S)&&Wo(m.decay,g)&&Wo(m.velocity,v)||(k=!0)}if(F&&ss(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Pi(l))&&(s.values=b.getPayload(),s.toValues=Pi(u)?null:I==xa?[1]:qo(x)),s.immediate!=S&&(s.immediate=S,S||y||this._set(l)),k)){const{onRest:e}=s;Yo(vs,(e=>bs(this,t,e)));const r=Ja(this,hs(this,l));Qo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&So.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?Da(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(w),p?n(Xa(t.to,t,this._state,this)):k?this._start():ss(this)&&!f?this._pendingCalls.add(n):n(Za(w))}_focus(e){const t=this.animation;e!==t.to&&(Ni(this)&&this._detach(),t.to=e,Ni(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pi(t)&&(Ui(t,this),ns(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pi(e)&&qi(e,this)}_set(e,t=!0){const n=Li(e);if(!Vo.und(n)){const e=ga(this);if(!e||!Wo(n,e.getValue())){const r=Fa(n);e&&e.constructor==r?e.setValue(n):va(this,r.create(n)),e&&So.batchedUpdates((()=>{this._onChange(n,t)}))}}return ga(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ys(this,"onStart",Ja(this,hs(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Da(this.animation.onChange,e,this)),Da(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ga(this).reset(Li(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ss(this)||(cs(this,!0),ls(this)||this._resume())}_resume(){Lo.skipAnimation?this.finish():si.start(this)}_stop(e,t){if(ss(this)){cs(this,!1);const n=this.animation;Yo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Vi(this,{type:"idle",parent:this});const r=t?Qa(this.get()):Ja(this.get(),hs(this,e??n.to));Qo(this._pendingCalls,r),n.changed&&(n.changed=!1,ys(this,"onRest",r,this))}}};function hs(e,t){const n=Pa(t);return Wo(Pa(e.get()),n)}function fs(e,t=e.loop,n=e.to){const r=Da(t);if(r){const o=!0!==r&&ja(r),i=(o||e).reverse,a=!o||o.reset;return ps({...e,loop:t,default:!1,pause:void 0,to:!i||La(n)?n:void 0,from:a?e.from:void 0,reset:a,...o})}}function ps(e){const{to:t,from:n}=e=ja(e),r=new Set;return Vo.obj(t)&&gs(t,r),Vo.obj(n)&&gs(n,r),e.keys=r.size?Array.from(r):null,e}function ms(e){const t=ps(e);return Vo.und(t.default)&&(t.default=Ma(t)),t}function gs(e,t){Uo(e,((e,n)=>null!=e&&t.add(n)))}var vs=["onStart","onRest","onChange","onPause","onResume"];function bs(e,t,n){e.animation[n]=t[n]!==Ea(t,n)?_a(t[n],e.key):void 0}function ys(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var ws=["onStart","onChange","onRest"],xs=1,$s=class{constructor(e,t){this.id=xs++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Vo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ps(e)),this}start(e){let{queue:t}=this;return e?t=qo(e).map(ps):this.queue=[],this._flush?this._flush(this,t):(Os(this,t),Ss(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Yo(qo(t),(t=>n[t].stop(!!e)))}else Ka(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Vo.und(e))this.start({pause:!0});else{const t=this.springs;Yo(qo(e),(e=>t[e].pause()))}return this}resume(e){if(Vo.und(e))this.start({pause:!1});else{const t=this.springs;Yo(qo(e),(e=>t[e].resume()))}return this}each(e){Uo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,Go(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&Go(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Go(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}So.onFrame(this._onFrame)}};function Ss(e,t){return Promise.all(t.map((t=>Is(e,t)))).then((t=>Ga(e,t)))}async function Is(e,t,n){const{keys:r,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Vo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=Vo.arr(o)||Vo.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Yo(ws,(n=>{const r=t[n];if(Vo.fun(r)){const o=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Qo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Ea(t,"cancel");(u||f&&d.asyncId)&&h.push(qa(++e._lastAsyncId,{props:t,state:d,actions:{pause:No,resume:No,start(t,n){f?(Ka(d,e._lastAsyncId),n(Qa(e))):(t.onRest=s,n(Xa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ga(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=fs(t,a,o);if(n)return Os(e,[n]),Is(e,n,!0)}return l&&So.batchedUpdates((()=>l(p,e,e.item))),p}function ks(e,t){const n={...e.springs};return t&&Yo(qo(t),(e=>{Vo.und(e.keys)&&(e=ps(e)),Vo.obj(e.to)||(e={...e,to:void 0}),Ts(n,e,(e=>Bs(e)))})),Fs(e,n),n}function Fs(e,t){Uo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ui(t,e))}))}function Bs(e,t){const n=new ds;return n.key=e,t&&Ui(n,t),n}function Ts(e,t,n){t.keys&&Yo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Os(e,t){Yo(t,(t=>{Ts(e.springs,t,(t=>Bs(t,e)))}))}var Cs,Ds,Hs=({children:e,...t})=>{const n=m(_s),o=t.pause||!!n.pause,l=t.immediate||!!n.immediate;t=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=i(),o=r.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return a((()=>{r.current=l,o==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=_s;return r.createElement(c,{value:t},e)},_s=(Cs=Hs,Ds={},Object.assign(Cs,r.createContext(Ds)),Cs.Provider._context=Cs,Cs.Consumer._context=Cs,Cs);Hs.Provider=_s.Provider,Hs.Consumer=_s.Consumer;var Es=()=>{const e=[],t=function(t){la(`${ia}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Yo(e,((e,o)=>{if(Vo.und(t))r.push(e.start());else{const i=n(t,e,o);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Yo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Yo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Yo(e,((e,n)=>{const r=Vo.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Yo(e,((e,r)=>{if(Vo.und(t))n.push(e.start());else{const o=this._getProps(t,e,r);o&&n.push(e.start(o))}})),n},t.stop=function(){return Yo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Yo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Vo.fun(e)?e(n,t):e};return t._getProps=n,t};function zs(e,t){const n=Vo.fun(e),[[r],o]=function(e,t,n){const r=Vo.fun(t)&&t;r&&!n&&(n=[]);const o=g((()=>r||3==arguments.length?Es():void 0),[]),a=i(0),s=da(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=ks(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ss(e,t):new Promise((r=>{Fs(e,n),l.queue.push((()=>{r(Ss(e,t))})),s()}))}})),[]),c=i([...l.ctrls]),u=[],d=pa(e)||0;function h(e,n){for(let o=e;o<n;o++){const e=c.current[o]||(c.current[o]=new $s(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=ms(n))}}g((()=>{Yo(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>ks(e,u[t]))),p=m(Hs),v=pa(p),b=p!==v&&function(e){for(const t in e)return!0;return!1}(p);ua((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Yo(e,(e=>e()))),Yo(c.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ha((()=>()=>{Yo(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return o?[y,o]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}var Ms=class extends os{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ci(...t);const n=this._get(),r=Fa(n);va(this,r.create(n))}advance(e){const t=this._get();Wo(t,this.get())||(ga(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Rs(this._active)&&js(this)}_get(){const e=Vo.arr(this.source)?this.source.map(Li):qo(Li(this.source));return this.calc(...e)}_start(){this.idle&&!Rs(this._active)&&(this.idle=!1,Yo(ba(this),(e=>{e.done=!1})),Lo.skipAnimation?(So.batchedUpdates((()=>this.advance())),js(this)):si.start(this))}_attach(){let e=1;Yo(qo(this.source),(t=>{Pi(t)&&Ui(t,this),ns(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Yo(qo(this.source),(e=>{Pi(e)&&qi(e,this)})),this._active.clear(),js(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=qo(this.source).reduce(((e,t)=>Math.max(e,(ns(t)?t.priority:0)+1)),0))}};function As(e){return!1!==e.idle}function Rs(e){return!e.size||Array.from(e).every(As)}function js(e){e.idle||(e.idle=!0,Yo(ba(e),(e=>{e.done=!0})),Vi(e,{type:"idle",parent:e}))}Lo.assign({createStringInterpolator:oa,to:(e,t)=>new Ms(e,t)});var Ps=/^--/;function Ls(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ps.test(e)||Vs.hasOwnProperty(e)&&Vs[e]?(""+t).trim():t+"px"}var Ns={};var Vs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ws=["Webkit","Ms","Moz","O"];Vs=Object.keys(Vs).reduce(((e,t)=>(Ws.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Vs);var Ys=/^(matrix|translate|scale|rotate|skew)/,Us=/^(translate)/,qs=/^(rotate|skew)/,Gs=(e,t)=>Vo.num(e)&&0!==e?e+t:e,Zs=(e,t)=>Vo.arr(e)?e.every((e=>Zs(e,t))):Vo.num(e)?e===t:parseFloat(e)===t,Js=class extends Sa{constructor({x:e,y:t,z:n,...r}){const o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push((e=>[`translate3d(${e.map((e=>Gs(e,"px"))).join(",")})`,Zs(e,0)]))),Uo(r,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Ys.test(t)){if(delete r[t],Vo.und(e))return;const n=Us.test(t)?"px":qs.test(t)?"deg":"";o.push(qo(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${Gs(o,n)})`,Zs(o,0)]:e=>[`${t}(${e.map((e=>Gs(e,n))).join(",")})`,Zs(e,t.startsWith("scale")?1:0)])}})),o.length&&(r.transform=new Qs(o,i)),super(r)}},Qs=class extends Wi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Yo(this.inputs,((n,r)=>{const o=Li(n[0]),[i,a]=this.transforms[r](Vo.arr(o)?o:n.map(Li));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Yo(this.inputs,(e=>Yo(e,(e=>Pi(e)&&Ui(e,this)))))}observerRemoved(e){0==e&&Yo(this.inputs,(e=>Yo(e,(e=>Pi(e)&&qi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vi(this,e)}};Lo.assign({batchedUpdates:O,createStringInterpolator:oa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Xs=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new Sa(e),getComponentProps:r=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=Ca(e)||"Anonymous";return(e=Vo.str(e)?i[e]||(i[e]=Ba(e,o)):e[Oa]||(e[Oa]=Ba(e,o))).displayName=`Animated(${t})`,e};return Uo(e,((t,n)=>{Vo.arr(e)&&(n=Ca(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:r,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...c}=t,u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ns[t]||(Ns[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const n=Ls(t,o[t]);Ps.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==r&&(e.className=r),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Js(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ks=Xs.animated;const el={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},tl=e=>Object.keys(el).reduce(((t,n)=>{const r=el[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),nl=tl("max-width"),rl=(tl("min-width"),el),ol=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,il=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,al=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Dn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${il} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sl=w(al)`
    animation-delay: -0.45s;
`,ll=w(al)`
    animation-delay: -0.3s;
`,cl=w(al)`
    animation-delay: -0.15s;
`,ul=w.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${Dn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Pn.Button.Danger.Border:Dn.Primary};

                    color: ${e.$buttonIsDanger?Pn.Button.Danger.Primary:Dn.Primary};
                `;case"light":return x`
                    background-color: ${Dn.Neutral[8]};
                    border: 1px solid ${Dn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Pn.Button.Danger.Primary:Dn.Primary};
                `;case"disabled":return x`
                    background-color: ${Dn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Dn.Neutral[3]};
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Pn.Button.Danger.Primary:Dn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Pn.Button.Danger.Hover:Dn.Secondary};
                    }
                `;default:return x`
                    background-color: ${e.$buttonIsDanger?Pn.Button.Danger.BackgroundColor:Dn.Primary};
                    border: 1px solid transparent;

                    ${nl.mobileL} {
                        width: 100%;
                    }

                    color: ${Dn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?x`
                    height: 2.5rem;
                    ${Kn("H5","semibold")}

                    ${nl.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    ${Kn("H4","semibold")}

                    ${nl.mobileS} {
                        height: auto;
                    }
                `}
`,dl=w((({color:n,className:r,size:o=18})=>e(ol,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(al,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(sl,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(ll,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(cl,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Pn.Button.Danger.Primary:Dn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Dn.Neutral[3](e);break;default:t=Dn.Neutral[8](e)}return x`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,hl={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=re(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ul,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(dl,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=re(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ul,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(dl,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},fl=w.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?x`
                    color: ${Dn.Primary};
                `:x`
                    color: ${Dn.Neutral[4]};
                `};
    }
`,pl=({type:e,active:n=!1,disabled:r,className:o})=>{let i;switch(e){case"checkbox":i=t(n?E:_,{});break;case"radio":i=t(n?D:C,{});break;case"tick":i=t(z,{});break;case"cross":i=t(H,{});break;default:i=null}return t(fl,Object.assign({className:o,$active:n,disabled:r},{children:i}))};var ml={exports:{}};ml.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},h={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,l("seconds")],ss:[o,l("seconds")],m:[o,l("minutes")],mm:[o,l("minutes")],H:[o,l("hours")],h:[o,l("hours")],HH:[o,l("hours")],hh:[o,l("hours")],D:[o,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,l("week")],ww:[r,l("week")],M:[o,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=i.length,l=0;l<s;l+=1){var c=i[l],u=h[c],d=u&&u[0],f=u&&u[1];i[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,l=o.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var s=i[1];if("string"==typeof s){var l=!0===i[2],c=!0===i[3],u=l||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=f(t)(e),i=o.year,a=o.month,s=o.day,l=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,h=o.zone,p=o.week,m=new Date,g=s||(i||a?1:m.getDate()),v=i||m.getFullYear(),b=0;i&&!a||(b=a>0?a-1:m.getMonth());var y,w=l||0,x=c||0,$=u||0,S=d||0;return h?new Date(Date.UTC(v,b,g,w,x,$,S+60*h.offset*1e3)):n?new Date(Date.UTC(v,b,g,w,x,$,S)):(y=new Date(v,b,g,w,x,$,S),p&&(y=r(y).week(p).toDate()),y)}catch(e){return new Date("")}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){i[1]=s[p-1];var m=n.apply(this,i);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var gl=ae(ml.exports),vl={exports:{}};vl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var bl=ae(vl.exports),yl={exports:{}};yl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var wl=ae(yl.exports),xl={exports:{}};xl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var $l,Sl,Il=ae(xl.exports),kl={exports:{}};kl.exports=($l={year:0,month:1,day:2,hour:3,minute:4,second:5},Sl={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Sl[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Sl[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=$l[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(s))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-l;if(Number(c)){if(o=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var Fl,Bl=ae(kl.exports);xr.extend(bl),xr.extend(Il),xr.extend(wl),xr.extend(gl),xr.extend(Bl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=xr(t).startOf("week");return Tl(n).map((e=>Ol(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ol(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(xr(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?xr(r):void 0,o?xr(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Fl||(Fl={}));const Tl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ol=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Cl=[1,3,5,7,8,10,12],Dl=[4,6,9,11];var Hl,_l,El;function zl(e){const t=i(null);return h((()=>{t.current=e}),[e]),p(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Cl.includes(i)?Math.min(o,31).toString():Dl.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=xr(e,n);return xr(t,n).diff(r,"minute")},e.toDayjs=e=>e?xr(e):xr(),e.addMinutesToTime=(e,t,n="HH:mm")=>xr(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>xr(e).isSame(xr(t),n)}(Hl||(Hl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!xr(e).isBefore(r,"day"))||!(!o||!xr(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(xr(e).isValid())return e}return""}}(_l||(_l={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(El||(El={}));const Ml=e=>{const t=(e=>{const t=i(e),n=i();return a((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Al=e=>{const{textSize:t}=e||{};return x`
        // Text styling
        ${t&&Kn(t,"regular")}

        strong {
            font-family: ${Ln.OpenSans.Semibold};
            ${t&&Kn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Ln.OpenSans.Semibold};
            ${t&&Kn(t,"semibold")}
            color: ${Dn.Primary};
            text-decoration: none;

            svg {
                color: ${Dn.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Dn.Secondary};

                svg {
                    color: ${Dn.Secondary};
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
    `},Rl=w.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Dn.Validation.Red.Background(e),n=Dn.Validation.Red.Border(e);break;case"success":t=Dn.Validation.Green.Background(e),n=Dn.Validation.Green.Border(e);break;case"warning":default:t=Dn.Validation.Orange.Background(e),n=Dn.Validation.Orange.Border(e);break;case"info":t=Dn.Validation.Blue.Background(e),n=Dn.Validation.Blue.Border(e);break;case"description":t=Dn.Neutral[7](e),n=Dn.Neutral[4](e)}return x`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Dn.Neutral[1]};
    ${e=>"small"===e.$sizeType?Al({textSize:"H6"}):Al({textSize:"BodySmall"})}
`,jl=w.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&x`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Dn.Validation.Red.Icon(e);break;case"success":t=Dn.Validation.Green.Icon(e);break;case"warning":default:t=Dn.Validation.Orange.Icon(e);break;case"info":t=Dn.Validation.Blue.Icon(e);break;case"description":t=Dn.Neutral[4](e)}return x`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Pl=w(tr.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?x`
                ${Kn("H6","semibold")}
                margin-top: 0.25rem;
            `:x`
                ${Kn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Dn.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Dn.Primary};
    }
`,Ll=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Nl=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Vl=w.button`
    ${e=>"small"===e.$sizeType?x`
                ${Kn("H6","semibold")}
            `:x`
                ${Kn("H5","semibold")}
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

    color: ${Dn.Primary};
`,Wl=w(y)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Yl=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Ul=(w.ol`
    ${e=>Yl(e.bottomMargin)}
    margin-left: ${3}rem;

    ${nl.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Kn(e.size,"regular")}
        position: relative;
        color: ${Dn.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return x`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return x`
                counter-reset: list ${t?n+1:n-1};
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
`,w.ul`
    ${e=>Yl(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Kn(e.size,"regular")}
        color: ${Dn.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),ql=e=>{var{size:n="Body",children:r}=e,o=re(e,["size","children"]);return t(Ul,Object.assign({size:n},o,{children:r}))},Gl=w.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return x`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return x`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?x`
                        border-color: ${Dn.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Dn.Shadow.Red};
                        }
                    `:e.$disabled?x`
                        border-color: transparent;
                    `:x`
                        border-color: transparent;

                        :hover {
                            background: ${Dn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?x`
                        border-color: ${Dn.Neutral[5]};
                    `:e.$disabled&&e.$selected?x`
                        border-color: ${Dn.Neutral[4]};
                    `:e.$error?x`
                        border-color: ${Dn.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Dn.Shadow.Red};
                        }
                    `:e.$selected?x`
                        border-color: ${Dn.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Dn.Shadow.Accent};
                        }
                    `:x`
                        background: ${Dn.Neutral[8]};
                        border-color: ${Dn.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Dn.Shadow.Accent};
                            border-color: ${Dn.Accent.Light[1]};
                        }
                    `}
`,Zl=w.input`
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
`,Jl=w.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Ql=w.label`
    ${e=>e.$selected&&!e.$indicator?x`
                ${Kn("H4","semibold")}
            `:x`
                ${Kn("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${nl.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${nl.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Dn.Neutral[1]};

    ${e=>e.$disabled?x`
                color: ${Dn.Neutral[3]};
            `:e.$selected?x`
                color: ${Dn.Primary};
            `:void 0}
`,Xl=w.div`
    ${Kn("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Xn("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?x`
                color: ${Dn.Neutral[3]};
            `:e.$selected?x`
                color: ${Dn.Primary};
            `:x`
                color: ${Dn.Neutral[1]};
            `}
`,Kl=w.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?x`
                        background: ${Dn.Neutral[8]};
                    `:e.$disabled?x``:x`
                        :hover {
                            background: ${Dn.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?x`
                        background: ${Dn.Neutral[6]};
                    `:e.$error?x`
                        background: ${Dn.Neutral[8]};
                    `:e.$selected?x`
                        background: ${Dn.Accent.Light[5]};
                    `:x`
                        background: ${Dn.Neutral[8]};
                    `}
`,ec=w.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,tc=w.button`
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Icon};
    white-space: nowrap;
    ${Kn("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,nc=w.button`
    color: ${e=>e.disabled?Dn.Neutral[3]:Dn.Primary};
    ${Kn("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,rc=w.div`
    width: 100%;
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,oc=w((n=>{var{type:r,className:o,children:i,actionLink:l,actionLinkIcon:c,sizeType:u="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:f}=n,p=re(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,g]=s(!1),[v,b]=s(!1),{height:y,ref:w}=xo();a((()=>{x()}),[f,y]);const x=()=>{g(!f),b($())},$=()=>!!f&&y>f;return e(Rl,Object.assign({className:o,$type:r,$sizeType:u,"data-testid":p["data-testid"]},{children:[d&&t(jl,Object.assign({$sizeType:u,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return t(P,{});case"warning":return t(R,{});case"error":return t(A,{});case"info":case"description":return t(j,{});default:return null}})()})),e(Ll,{children:[e(Nl,Object.assign({$maxCollapsedHeight:$()?f:void 0,$showMore:m,$hasActionLink:!!l},{children:[t("div",Object.assign({ref:w},{children:i})),l&&e(Pl,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},l,{children:[l.children,c||t(M,{})]}))]})),v&&e(Vl,Object.assign({$sizeType:u,$type:r,type:"button",onClick:()=>g(!m)},{children:["Show ",m?"less":"more",t(Wl,{$expanded:m})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,ic=w.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Al({textSize:"BodySmall"})}

    ${e=>e.$disabled?x`
                color: ${Dn.Neutral[3]};
            `:e.$selected?x`
                color: ${Dn.Primary};
            `:x`
                color: ${Dn.Neutral[1]};
            `}
`,ac=w(tr.BodySmall)`
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Text};
`,sc=w(ql)`
    li {
        color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Text};
    }
`,lc=w.button`
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
                background-color: ${Dn.Neutral[7]};
            `}
    }
`,cc=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=re(e,["children","focusHighlight","focusOutline","type"]);return t(lc,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),uc=w(Ks.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Dn.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${nl.mobileS} {
        max-width: 100%;
    }
`,dc=w.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,hc=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${nl.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,fc=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${nl.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,pc=w.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${nl.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,mc=w.div`
    display: flex;
    gap: 0.5rem;

    ${nl.tablet} {
        flex-direction: column;
    }

    ${nl.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,gc=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${nl.mobileS} {
        width: 6rem;
    }
`,vc=w(cc)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Dn.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Dn.Primary};
    }
`,bc=w(tr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${nl.tablet} {
        margin: 0;
    }

    ${nl.mobileS} {
        margin: 0 0.25rem;
    }
`,yc=w(hr)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Dn.Neutral[5]};
    background: ${Dn.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Dn.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Dn.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${nl.mobileS} {
        width: 100%;
    }
`,wc=w((({type:r="checkbox",indicator:o,checked:l,styleType:c="default",children:u,childrenMaxLines:d,subLabel:h,disabled:f,error:p,name:m,id:v,className:b,compositeSection:y,removable:w,onRemove:x,"data-testid":$,onChange:S,useContentWidth:I})=>{const{collapsible:B=!0,errors:T,children:O,initialExpanded:C}=y||{},[D,H]=s(l),[_,E]=s(C),z=g((()=>{const e=Array.isArray(T)&&(null==T?void 0:T.length)>0,t=!Array.isArray(T)&&!!T;return e||t}),[T]),[M]=s(El.generate()),A=v?`${v}`:`tg-${M}`,R=i();a((()=>{H(l)}),[l]),a((()=>{D&&E(null==C||C)}),[D]);const j=e=>{if(!f){if(S)return void S(e);switch(r){case"checkbox":H((e=>!e));break;case"radio":case"yes":case"no":D||H(!0)}}},P=()=>{f||E(!_)},L=()=>{f||!x||x()},N=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(pl,{type:e,active:D,disabled:f})},V=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Xl,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:D},{children:e}))},W=()=>{const n=!_&&!z;return B&&e(nc,Object.assign({$paddingTopRequired:n,disabled:f,onClick:P,"data-testid":_?"collapse-button":"expand-button"},{children:[_?"Show less":"Show more",t(_?F:k,{"aria-hidden":!0})]}))},Y=r=>e(n,{children:[t(ac,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(sc,Object.assign({$disabled:f},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${A}-error-list-item-${n}`},{children:t(ac,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),n)))}))]});return e(Gl,Object.assign({$selected:D,$disabled:f,className:b,$styleType:c,$error:p,$indicator:o,$useContentWidth:I,id:v,"data-testid":$},{children:[e(Kl,Object.assign({id:`${A}-header-container`,$disabled:f,$error:p,$selected:D,$indicator:o,$styleType:c},{children:[e(ec,Object.assign({$addPadding:w},{children:[t(Zl,{ref:R,name:m,id:`${A}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:j,checked:D}),o&&N(),e(Jl,{children:[t(Ql,Object.assign({htmlFor:`${A}-input`,$selected:D,$indicator:o,$disabled:f,"data-testid":`${A}-toggle-label`,$maxLines:d},{children:u})),h&&V()]})]})),w&&t(tc,Object.assign({type:"button",$disabled:f,onClick:L,id:`${A}-remove-button`},{children:"Remove"}))]})),O&&e("div",{children:[(!B||_)&&t(ic,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!B,$disabled:f},{children:O})),B&&!_&&z&&t(rc,Object.assign({$disabled:f,onClick:P,id:`${A}-error-alert`},{children:t(oc,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(T)?Y(T):T}))})),W()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,xc=w(hl.Small)`
    width: 7rem;

    ${nl.mobileL} {
        flex: 1;
    }

    ${nl.mobileS} {
        width: 100%;
    }
`;var $c,Sc,Ic;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}($c||($c={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Sc||(Sc={})),function(e){e.AM="am",e.PM="pm"}(Ic||(Ic={}));const kc=({id:n,value:r,show:o,format:l,onChange:c,onCancel:u})=>{const d=wr.getTimeValues(l,r),[h,f]=s(d.hour),[m,g]=s(d.minute),[v,b]=s(d.period),y=i(),w=i(),x=xo();a((()=>{if(o&&y.current&&y.current.focus(),o){const{hour:e,minute:t,period:n}=wr.getTimeValues(l,r);f(e),g(t),b(n)}}),[o,r,l]),a((()=>{const e=y.current,t=w.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case $c.MINUTE_UP:g(wr.updateMinutes(m,"add"));break;case $c.MINUTE_DOWN:g(wr.updateMinutes(m,"minus"));break;case $c.HOUR_UP:f(wr.updateHours(h,"add"));break;case $c.HOUR_DOWN:f(wr.updateHours(h,"minus"))}}),[h,m]),I=e=>{e.target.select()},B=e=>{const t=e.target.value;switch(e.target.name){case Sc.HOUR:t.length<=2&&f(t);break;case Sc.MINUTE:t.length<=2&&g(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Sc.HOUR:{const n=t>23||t<0?d.hour:wr.convertHourTo12HourFormat(e.target.value);f(n);break}case Sc.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;g(br.padValue(n));break}}},O=e=>{switch(e.target.name){case Ic.AM:b(yr.AM);break;case Ic.PM:b(yr.PM)}},C=e=>n?`${n}-${e}`:e,D=zs({height:o?x.height+32:0});return t(uc,Object.assign({"data-testid":"animated-dropdown-wrapper",style:D},{children:e(dc,Object.assign({ref:x.ref,"data-testid":C("timepicker-dropdown"),inert:o?void 0:""},{children:[e(hc,{children:[e(pc,{children:[e(gc,{children:[t(vc,Object.assign({"aria-label":"increase hour",name:$c.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":C("hour-increment-button")},{children:t(F,{})})),t(yc,{"aria-label":"hour",type:"number",name:Sc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onFocus:I,onChange:B,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),t(vc,Object.assign({"aria-label":"decrease hour",name:$c.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":C("hour-decrement-button")},{children:t(k,{})}))]}),t(bc,{children:":"}),e(gc,{children:[t(vc,Object.assign({"aria-label":"increase minute",name:$c.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":C("minute-increment-button")},{children:t(F,{})})),t(yc,{"aria-label":"minute",type:"number",name:Sc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:B,onBlur:T,onFocus:I,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),t(vc,Object.assign({"aria-label":"decrease minute",name:$c.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":C("minute-decrement-button")},{children:t(k,{})}))]})]}),e(mc,{children:[t(wc,Object.assign({checked:v===yr.AM,name:Ic.AM,type:"radio",onChange:O,"data-testid":C("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(wc,Object.assign({checked:v===yr.PM,name:Ic.PM,type:"radio",onChange:O,"data-testid":C("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(fc,{children:[t(xc,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":C("cancel-button")},{children:"Cancel"})),t(xc,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?wr.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,c(e)},disabled:""===h||""===m,"data-testid":C("confirm-button")},{children:"Done"}))]})]}))}))},Fc=n=>{var{id:r,disabled:o=!1,error:l,value:c,format:u="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,m=re(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[g,v]=s(!1),[b,y]=s(!1),[w,x]=s(""),[$,S]=s(""),I=i();a((()=>{c&&(x(c.start),S(c.end))}),[c]),oe("mousedown",(function(e){o||T(e)}),"document"),oe("keyup",(function(e){if("Tab"===e.code)T(e)}),"document");const k=()=>{B()},F=()=>{g||b||f&&f()},B=()=>{v(!1),y(!1),p&&p()},T=e=>{I.current&&!I.current.contains(e.target)&&(b||g)&&B()};return t(pr,Object.assign({ref:I,id:r},m,{children:e(mr,Object.assign({$disabled:o,$error:l,$readOnly:d},{children:[e(An,Object.assign({error:l,currentActive:g?"start":b?"end":"none"},{children:[t(gr,{onFocus:()=>{o||d||g||(y(!1),v(!0),F())},readOnly:!0,placeholder:"From",value:wr.formatDisplayValue(w,u),disabled:o,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(gr,{onFocus:()=>{o||d||b||(v(!1),y(!0),F())},readOnly:!0,placeholder:"To",value:wr.formatDisplayValue($,u),disabled:o,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(kc,{id:r,show:g,value:w,format:u,onCancel:k,onChange:e=>{v(!1),y(!0),x(e);h&&h({start:e,end:$})}}),t(kc,{id:r,show:b,value:$,format:u,onCancel:k,onChange:e=>{y(!1),S(e);h&&h({start:w,end:e}),""==w?v(!0):p&&p()}})]}))}))};w.label`
    ${Kn("H5","semibold")}
    color: ${Dn.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Kn("H5","semibold")}
    }

    a {
        color: ${Dn.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Dn.Secondary};

            svg {
                color: ${Dn.Secondary};
            }
        }
    }
`;const Bc=w(tr.H6)`
    color: ${Dn.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;w(tr.BodySmall)`
    && {
        color: ${Dn.Neutral[3]};
        ${Xn("BodySmall","regular")}
    }
`,w.input`
    ${Kn("Body","regular")}
    color: ${Dn.Neutral[1]};

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
        color: ${Dn.Neutral[3]};
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
`;const Tc=w.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Dn.Neutral[3]};
    background-color: transparent;
    border: none;
`,Oc=w(H)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;w.div`
    display: flex;
    width: 100%;
`;const Cc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Dc=e=>"small"===e?2.5:3;w.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Dc(e.$variant);return x`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Hc=x`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Dc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Dn.Accent.Light[3]};
    }
`,_c=w.button`
    ${Hc}
    cursor: pointer;
`;w.div`
    ${Hc}
`;const Ec=$`
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
`;w.div`
    position: relative;
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Dn.Neutral[8]};

    :focus-within {
        border: 1px solid ${Dn.Accent.Light[1]};
        box-shadow: ${Pn.InputBoxShadow};
    }

    ${e=>e.expanded?x`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:x`
                animation: ${Ec} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${Dn.Neutral[6](e)};

                ${_c} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Dn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${_c} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?x`
                border: 1px solid ${Dn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Dn.Validation.Red.Border(e)};
                    box-shadow: ${Pn.InputErrorBoxShadow};
                }
            `:void 0}
`,w.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Cc};
    margin-left: 1rem;
`,w(k)`
    color: ${Dn.Neutral[3]};
    ${e=>{let t=Un.Body.fontSize;return"small"===e.$variant&&(t=Un.BodySmall.fontSize),x`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,w.div`
    height: 1px;
    background: ${Dn.Neutral[5]};
    margin: 0 0.5rem;
`,w.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return x`
                color: ${Dn.Neutral[3]};
            `}}
`;const zc=w.div`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return x`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;w(zc)`
    color: ${Dn.Neutral[3]};
`,w.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const Mc=w(Tc)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`;w(_c)`
    padding-right: 2.75rem;
`;const Ac={[Tn.colorScheme]:"base",[Tn.textStyleScheme]:"base",[Tn.designTokenScheme]:"base",[Tn.resourceScheme]:"base"};Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme;const Rc=x`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,jc=w.div`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Dn.Primary:Dn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}
`,Pc=w.div`
    color: ${Dn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}

    ${e=>"next-line"===e.$labelDisplayType?x`
                    ${Kn("BodySmall","semibold")}
                `:x`
                    ${Kn("Body","regular")}
                `}
`,Lc=w.span`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Nc=w.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return x`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return x`
                    ${jc} {
                        display: inline;
                    }

                    ${Pc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Vc=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wc=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Yc=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:u="middle",variant:d})=>{const h=S()||Ac,f=Un.Body.fontSize({theme:h}),m=Un.Body.fontFamily({theme:h}),{ref:v,width:b}=xo(),y=p((e=>{if("inline"!==o)return!1;return br.getTextWidth(e,`${f}rem '${m}'`)>b*s-50}),[b,o,f,m,s]),w=g((()=>y(i)),[y,i]),x=g((()=>c&&y(c)),[y,c]),$=w||x?"next-line":o,I=r=>{if(!a)return r;const o=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(o),l=s+a.length;return-1===s?r:e(n,{children:[i.slice(0,s),t(Lc,Object.assign({$variant:d},{children:i.slice(s,l)})),i.slice(l)]})},k=r=>e(n,{children:[t(Vc,Object.assign({$maxLines:s,"aria-hidden":!0},{children:I(r)})),t(Wc,Object.assign({$maxLines:s,"aria-hidden":!0},{children:I(r)}))]});return e(Nc,Object.assign({ref:v,$labelDisplayType:$},{children:[t(jc,Object.assign({"aria-label":i,$bold:r,$maxLines:s,$selected:l,$truncateType:u,$variant:d},{children:"middle"===u&&w?k(i):I(i)})),c&&t(Pc,Object.assign({"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&x?k(c):c}))]}))};var Uc=Et;var qc=Et,Gc=zt,Zc=Xt;var Jc=Et,Qc=function(){this.__data__=new Uc,this.size=0},Xc=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Kc=function(e){return this.__data__.get(e)},eu=function(e){return this.__data__.has(e)},tu=function(e,t){var n=this.__data__;if(n instanceof qc){var r=n.__data__;if(!Gc||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Zc(r)}return n.set(e,t),this.size=n.size,this};function nu(e){var t=this.__data__=new Jc(e);this.size=t.size}nu.prototype.clear=Qc,nu.prototype.delete=Xc,nu.prototype.get=Kc,nu.prototype.has=eu,nu.prototype.set=tu;var ru=nu;var ou=Xt,iu=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},au=function(e){return this.__data__.has(e)};function su(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ou;++t<n;)this.add(e[t])}su.prototype.add=su.prototype.push=iu,su.prototype.has=au;var lu=su,cu=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},uu=function(e,t){return e.has(t)};var du=function(e,t,n,r,o,i){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new lu:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],m=t[d];if(r)var g=a?r(m,p,d,t,e,i):r(p,m,d,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!cu(t,(function(e,t){if(!uu(f,t)&&(p===e||o(p,e,n,r,i)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!o(p,m,n,r,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var hu=de.Uint8Array,fu=wt,pu=du,mu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},gu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},vu=he?he.prototype:void 0,bu=vu?vu.valueOf:void 0;var yu=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new hu(e),new hu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return fu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=mu;case"[object Set]":var l=1&r;if(s||(s=gu),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=pu(s(e),s(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(bu)return bu.call(e)==bu.call(t)}return!1};var wu=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},xu=wu,$u=se;var Su=function(e,t,n){var r=t(e);return $u(e)?r:xu(r,n(e))};var Iu=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},ku=function(){return[]},Fu=Object.prototype.propertyIsEnumerable,Bu=Object.getOwnPropertySymbols,Tu=Bu?function(e){return null==e?[]:(e=Object(e),Iu(Bu(e),(function(t){return Fu.call(e,t)})))}:ku;var Ou=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Cu=Se,Du=Ie;var Hu=function(e){return Du(e)&&"[object Arguments]"==Cu(e)},_u=Ie,Eu=Object.prototype,zu=Eu.hasOwnProperty,Mu=Eu.propertyIsEnumerable,Au=Hu(function(){return arguments}())?Hu:function(e){return _u(e)&&zu.call(e,"callee")&&!Mu.call(e,"callee")},Ru={exports:{}};var ju=function(){return!1};!function(e,t){var n=de,r=ju,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Ru,Ru.exports);var Pu=Ru.exports,Lu=/^(?:0|[1-9]\d*)$/;var Nu=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Lu.test(e))&&e>-1&&e%1==0&&e<t};var Vu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Wu=Se,Yu=Vu,Uu=Ie,qu={};qu["[object Float32Array]"]=qu["[object Float64Array]"]=qu["[object Int8Array]"]=qu["[object Int16Array]"]=qu["[object Int32Array]"]=qu["[object Uint8Array]"]=qu["[object Uint8ClampedArray]"]=qu["[object Uint16Array]"]=qu["[object Uint32Array]"]=!0,qu["[object Arguments]"]=qu["[object Array]"]=qu["[object ArrayBuffer]"]=qu["[object Boolean]"]=qu["[object DataView]"]=qu["[object Date]"]=qu["[object Error]"]=qu["[object Function]"]=qu["[object Map]"]=qu["[object Number]"]=qu["[object Object]"]=qu["[object RegExp]"]=qu["[object Set]"]=qu["[object String]"]=qu["[object WeakMap]"]=!1;var Gu=function(e){return Uu(e)&&Yu(e.length)&&!!qu[Wu(e)]};var Zu=function(e){return function(t){return e(t)}},Ju={exports:{}};!function(e,t){var n=le,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ju,Ju.exports);var Qu=Ju.exports,Xu=Gu,Ku=Zu,ed=Qu&&Qu.isTypedArray,td=ed?Ku(ed):Xu,nd=Ou,rd=Au,od=se,id=Pu,ad=Nu,sd=td,ld=Object.prototype.hasOwnProperty;var cd=function(e,t){var n=od(e),r=!n&&rd(e),o=!n&&!r&&id(e),i=!n&&!r&&!o&&sd(e),a=n||r||o||i,s=a?nd(e.length,String):[],l=s.length;for(var c in e)!t&&!ld.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ad(c,l))||s.push(c);return s},ud=Object.prototype;var dd=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ud)};var hd=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),fd=dd,pd=hd,md=Object.prototype.hasOwnProperty;var gd=Ae,vd=Vu;var bd=function(e){return null!=e&&vd(e.length)&&!gd(e)},yd=cd,wd=function(e){if(!fd(e))return pd(e);var t=[];for(var n in Object(e))md.call(e,n)&&"constructor"!=n&&t.push(n);return t},xd=bd;var $d=function(e){return xd(e)?yd(e):wd(e)},Sd=Su,Id=Tu,kd=$d;var Fd=function(e){return Sd(e,kd,Id)},Bd=Object.prototype.hasOwnProperty;var Td=function(e,t,n,r,o,i){var a=1&n,s=Fd(e),l=s.length;if(l!=Fd(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Bd.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var m=e[u=s[c]],g=t[u];if(r)var v=a?r(g,m,u,t,e,i):r(m,g,u,e,t,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var b=e.constructor,y=t.constructor;b==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},Od=tt(de,"DataView"),Cd=zt,Dd=tt(de,"Promise"),Hd=tt(de,"Set"),_d=tt(de,"WeakMap"),Ed=Se,zd=Ne,Md="[object Map]",Ad="[object Promise]",Rd="[object Set]",jd="[object WeakMap]",Pd="[object DataView]",Ld=zd(Od),Nd=zd(Cd),Vd=zd(Dd),Wd=zd(Hd),Yd=zd(_d),Ud=Ed;(Od&&Ud(new Od(new ArrayBuffer(1)))!=Pd||Cd&&Ud(new Cd)!=Md||Dd&&Ud(Dd.resolve())!=Ad||Hd&&Ud(new Hd)!=Rd||_d&&Ud(new _d)!=jd)&&(Ud=function(e){var t=Ed(e),n="[object Object]"==t?e.constructor:void 0,r=n?zd(n):"";if(r)switch(r){case Ld:return Pd;case Nd:return Md;case Vd:return Ad;case Wd:return Rd;case Yd:return jd}return t});var qd=ru,Gd=du,Zd=yu,Jd=Td,Qd=Ud,Xd=se,Kd=Pu,eh=td,th="[object Arguments]",nh="[object Array]",rh="[object Object]",oh=Object.prototype.hasOwnProperty;var ih=function(e,t,n,r,o,i){var a=Xd(e),s=Xd(t),l=a?nh:Qd(e),c=s?nh:Qd(t),u=(l=l==th?rh:l)==rh,d=(c=c==th?rh:c)==rh,h=l==c;if(h&&Kd(e)){if(!Kd(t))return!1;a=!0,u=!1}if(h&&!u)return i||(i=new qd),a||eh(e)?Gd(e,t,n,r,o,i):Zd(e,t,l,n,r,o,i);if(!(1&n)){var f=u&&oh.call(e,"__wrapped__"),p=d&&oh.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return i||(i=new qd),o(m,g,n,r,i)}}return!!h&&(i||(i=new qd),Jd(e,t,n,r,o,i))},ah=Ie;var sh=function e(t,n,r,o,i){return t===n||(null==t||null==n||!ah(t)&&!ah(n)?t!=t&&n!=n:ih(t,n,r,o,e,i))},lh=ru,ch=sh;var uh=_e;var dh=function(e){return e==e&&!uh(e)},hh=dh,fh=$d;var ph=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},mh=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=n[o])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new lh;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?ch(u,c,3,r,d):h))return!1}}return!0},gh=function(e){for(var t=fh(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,hh(o)]}return t},vh=ph;var bh=vn,yh=Au,wh=se,xh=Nu,$h=Vu,Sh=yn;var Ih=function(e,t){return null!=e&&t in Object(e)},kh=function(e,t,n){for(var r=-1,o=(t=bh(t,e)).length,i=!1;++r<o;){var a=Sh(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&$h(o)&&xh(a,o)&&(wh(e)||yh(e))};var Fh=sh,Bh=In,Th=function(e,t){return null!=e&&kh(e,t,Ih)},Oh=He,Ch=dh,Dh=ph,Hh=yn;var _h=$n;var Eh=function(e){return function(t){return null==t?void 0:t[e]}},zh=function(e){return function(t){return _h(t,e)}},Mh=He,Ah=yn;var Rh=function(e){var t=gh(e);return 1==t.length&&t[0][2]?vh(t[0][0],t[0][1]):function(n){return n===e||mh(n,e,t)}},jh=function(e,t){return Oh(e)&&Ch(t)?Dh(Hh(e),t):function(n){var r=Bh(n,e);return void 0===r&&r===t?Th(n,e):Fh(t,r,3)}},Ph=function(e){return e},Lh=se,Nh=function(e){return Mh(e)?Eh(Ah(e)):zh(e)};var Vh=function(e){return"function"==typeof e?e:null==e?Ph:"object"==typeof e?Lh(e)?jh(e[0],e[1]):Rh(e):Nh(e)},Wh=Vh,Yh=bd,Uh=$d;var qh=function(e){return function(t,n,r){var o=Object(t);if(!Yh(t)){var i=Wh(n);t=Uh(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var Gh=/\s/;var Zh=function(e){for(var t=e.length;t--&&Gh.test(e.charAt(t)););return t},Jh=/^\s+/;var Qh=function(e){return e?e.slice(0,Zh(e)+1).replace(Jh,""):e},Xh=_e,Kh=Be,ef=/^[-+]0x[0-9a-f]+$/i,tf=/^0b[01]+$/i,nf=/^0o[0-7]+$/i,rf=parseInt;var of=function(e){if("number"==typeof e)return e;if(Kh(e))return NaN;if(Xh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Qh(e);var n=tf.test(e);return n||nf.test(e)?rf(e.slice(2),n?2:8):ef.test(e)?NaN:+e},af=1/0;var sf=function(e){return e?(e=of(e))===af||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var lf=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},cf=Vh,uf=function(e){var t=sf(e),n=t%1;return t==t?n?t-n:t:0},df=Math.max;var hf=ae(qh((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:uf(n);return o<0&&(o=df(r+o,0)),lf(e,cf(t),o)}))),ff=sh;var pf=ae((function(e,t){return ff(e,t)}));function mf(e){return()=>e}function gf(e){e()}function vf(e,t){return n=>e(t(n))}function bf(e,t){return()=>e(t)}function yf(e){return void 0!==e}function wf(){}function xf(e,t){return t(e),e}function $f(e,t){return t(e)}function Sf(...e){return e}function If(e,t){return e(1,t)}function kf(e,t){e(0,t)}function Ff(e){e(2)}function Bf(e){return e(4)}function Tf(e,t){return If(e,function(e,t){return n=>e(t,n)}(t,0))}function Of(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function Cf(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Df(e,t){return e===t}function Hf(e=Df){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function _f(e){return t=>n=>{e(n)&&t(n)}}function Ef(e){return t=>vf(t,e)}function zf(e){return t=>()=>{t(e)}}function Mf(e,...t){const n=function(...e){return t=>e.reduceRight($f,t)}(...t);return(t,r)=>{switch(t){case 2:return void Ff(e);case 1:return If(e,n(r))}}}function Af(e,t){return n=>r=>{n(t=e(t,r))}}function Rf(e){return t=>n=>{e>0?e--:t(n)}}function jf(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Pf(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);If(e,(e=>{const s=n;n|=a,t[i]=e,s!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function Lf(e){let t=e;const n=Vf();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function Nf(e,t){return xf(Lf(t),(t=>Tf(e,t)))}function Vf(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Wf(e){return xf(Vf(),(t=>Tf(e,t)))}function Yf(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:Uf(),singleton:n}}const Uf=()=>Symbol();function qf(...e){const t=Vf(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);If(e,(e=>{n[i]=e,r|=a,r===o&&kf(t,n)}))})),function(e,i){switch(e){case 2:return void Ff(t);case 1:return r===o&&i(n),If(t,i)}}}function Gf(e,t=Df){return Mf(e,Hf(t))}function Zf(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(gf)}}(...e.map((e=>If(e,n))))}}}var Jf=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Jf||{});const Qf={0:"debug",3:"error",1:"log",2:"warn"},Xf=Yf((()=>{const e=Lf(3);return{log:Lf(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Bf(e))&&console[Qf[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function Kf(e,t,n){return ep(e,t,n).callbackRef}function ep(e,t,n){const r=o.useRef(null);let i=e=>{};const a=o.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function tp(e,t,n,r,i,a,s,l,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},Jf.ERROR),c===l)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(n.children,t,l?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType;let d;u&&(d=c.ownerDocument.defaultView);const h=s?l?s.scrollLeft:s.scrollTop:u?l?d.scrollX||d.document.documentElement.scrollLeft:d.scrollY||d.document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:u?l?d.document.documentElement.scrollWidth:d.document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,p=s?l?s.offsetWidth:s.offsetHeight:u?l?d.innerWidth:d.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:f,scrollTop:Math.max(h,0),viewportHeight:p}),null==a||a(l?np("column-gap",getComputedStyle(n).columnGap,i):np("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,r,l]);return ep(u,n,c)}function np(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Jf.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function rp(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,l;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;l=e.height-Math.max(0,n),a=n+t.scrollTop}else{const e=s.current.ownerDocument.defaultView;l=e.innerHeight-Math.max(0,o.top),a=o.top+e.scrollY}r.current={offsetTop:a,visibleHeight:l,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=ep(i,!0,n),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{var e;if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}{const t=null==(e=s.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",l),null==t||t.addEventListener("resize",l),()=>{null==t||t.removeEventListener("scroll",l),null==t||t.removeEventListener("resize",l)}}}),[l,t,s]),a}const op=Yf((()=>{const e=Vf(),t=Vf(),n=Lf(0),r=Vf(),o=Lf(0),i=Vf(),a=Vf(),s=Lf(0),l=Lf(0),c=Lf(0),u=Lf(0),d=Vf(),h=Vf(),f=Lf(!1),p=Lf(!1),m=Lf(!1);return Tf(Mf(e,Ef((({scrollTop:e})=>e))),t),Tf(Mf(e,Ef((({scrollHeight:e})=>e))),a),Tf(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:u,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),ip={lvl:0};function ap(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=s}return i.push({end:1/0,start:r,value:o}),i}function sp(e){return e===ip}function lp(e,t){if(!sp(e))return t===e.k?e.v:t<e.k?lp(e.l,t):lp(e.r,t)}function cp(e,t,n="k"){if(sp(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=cp(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return cp(e.l,t,n)}function up(e,t,n){return sp(e)?xp(t,n,1):t===e.k?vp(e,{k:t,v:n}):t<e.k?$p(vp(e,{l:up(e.l,t,n)})):$p(vp(e,{r:up(e.r,t,n)}))}function dp(){return ip}function hp(e,t,n){if(sp(e))return[];return function(e){return ap(e,(({k:e,v:t})=>({index:e,value:t})))}(mp(e,cp(e,t)[0],n))}function fp(e,t){if(sp(e))return ip;const{k:n,l:r,r:o}=e;if(t===n){if(sp(r))return o;if(sp(o))return r;{const[t,n]=wp(r);return gp(vp(e,{k:t,l:bp(r),v:n}))}}return gp(vp(e,t<n?{l:fp(r,t)}:{r:fp(o,t)}))}function pp(e){return sp(e)?[]:[...pp(e.l),{k:e.k,v:e.v},...pp(e.r)]}function mp(e,t,n){if(sp(e))return[];const{k:r,l:o,r:i,v:a}=e;let s=[];return r>t&&(s=s.concat(mp(o,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(mp(i,t,n))),s}function gp(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(yp(t))return Sp(vp(e,{lvl:n-1}));if(!sp(t)&&!sp(t.r))return vp(t.r,{l:vp(t,{r:t.r.l}),lvl:n,r:vp(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(yp(e))return Ip(vp(e,{lvl:n-1}));if(sp(r)||sp(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=yp(t)?r.lvl-1:r.lvl;return vp(t,{l:vp(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Ip(vp(r,{l:t.r,lvl:o}))})}}function vp(e,t){return xp(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function bp(e){return sp(e.r)?e.l:gp(vp(e,{r:bp(e.r)}))}function yp(e){return sp(e)||e.lvl>e.r.lvl}function wp(e){return sp(e.r)?[e.k,e.v]:wp(e.r)}function xp(e,t,n,r=ip,o=ip){return{k:e,l:r,lvl:n,r:o,v:t}}function $p(e){return Ip(Sp(e))}function Sp(e){const{l:t}=e;return sp(t)||t.lvl!==e.lvl?e:vp(t,{r:vp(e,{l:t.r})})}function Ip(e){const{lvl:t,r:n}=e;return sp(n)||sp(n.r)||n.lvl!==t||n.r.lvl!==t?e:vp(n,{l:vp(e,{r:n.l}),lvl:t+1})}function kp(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Fp(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Bp=Yf((()=>({recalcInProgress:Lf(!1)})),[],{singleton:!0});function Tp(e,t,n){return e[Op(e,t,n)]}function Op(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Cp(e,t){return Math.round(e.getBoundingClientRect()[t])}function Dp(e){return!sp(e.groupOffsetTree)}function Hp({index:e},t){return t===e?0:t<e?-1:1}function _p({offset:e},t){return t===e?0:t<e?-1:1}function Ep(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Tp(t,e,Hp),a=e-r,s=i*a+(a-1)*n+o;return s>0?s+n:s}function zp(e,t){if(!Dp(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Mp(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=zp("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Ap(e,t,n,r=0){return r>0&&(t=Math.max(t,Tp(e,r,Hp).offset)),ap(function(e,t,n,r){const o=Op(e,t,r),i=Op(e,n,r,o);return e.slice(o,i+1)}(e,t,n,_p),Lp)}function Rp(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,Jf.DEBUG);const i=e.sizeTree;let a=i,s=0;if(n.length>0&&sp(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>up(up(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=sp(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),sp(e)){e=up(e,0,o);continue}const a=hp(e,i-1,t+1);if(a.some(Np(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:i}of a)s?(t>=r||o===i)&&(e=fp(e,r)):(l=i!==o,s=!0),n>t&&t>=r&&i!==o&&(e=up(e,t+1,i));l&&(e=up(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d}=Pp(e.offsetTree,s,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>up(e,t,Ep(t,d,o))),dp()),lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function jp(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Pp(e,t,n,r){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=Op(o,t-1,Hp),s=o[l].offset;const e=cp(n,t-1);i=e[0],a=e[1],o.length&&o[l].size===cp(n,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of hp(n,t,1/0)){const t=e-i,n=t*a+s+t*r;o.push({index:e,offset:n,size:l}),i=e,s=n,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Lp(e){return{index:e.index,value:e}}function Np(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Vp={offsetHeight:"height",offsetWidth:"width"},Wp=Yf((([{log:e},{recalcInProgress:t}])=>{const n=Vf(),r=Vf(),o=Nf(r,0),i=Vf(),a=Vf(),s=Lf(0),l=Lf([]),c=Lf(void 0),u=Lf(void 0),d=Lf(((e,t)=>Cp(e,Vp[t]))),h=Lf(void 0),f=Lf(0),p={groupIndices:[],groupOffsetTree:dp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:dp()},m=Nf(Mf(n,Pf(l,e,f),Af(Rp,p),Hf()),p),g=Nf(Mf(l,Hf(),Af(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Ef((({prev:e})=>e))),[]);Tf(Mf(l,_f((e=>e.length>0)),Pf(m,f),Ef((([e,t,n])=>{const r=e.reduce(((e,r,o)=>up(e,r,Ep(r,t.offsetTree,n)||o)),dp());return{...t,groupIndices:e,groupOffsetTree:r}}))),m),Tf(Mf(r,Pf(m),_f((([e,{lastIndex:t}])=>e<t)),Ef((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Tf(c,u);const v=Nf(Mf(c,Ef((e=>void 0===e))),!0);Tf(Mf(u,_f((e=>void 0!==e&&sp(Bf(m).sizeTree))),Ef((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const b=Wf(Mf(n,Pf(m),Af((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),Ef((e=>e.changed))));If(Mf(s,Af(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Ef((e=>e.diff))),(e=>{const{groupIndices:n}=Bf(m);if(e>0)kf(t,!0),kf(i,e+jp(e,n));else if(e<0){const t=Bf(g);t.length>0&&(e-=jp(-e,t)),kf(a,e)}})),If(Mf(s,Pf(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Jf.ERROR)}));const y=Wf(i);Tf(Mf(i,Pf(m),Ef((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=lp(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=pp(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return pp(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const w=Wf(Mf(a,Pf(m,f),Ef((([e,{offsetTree:t},n])=>Ep(-e,t,n)))));return Tf(Mf(a,Pf(m,f),Ef((([e,t,n])=>{if(t.groupIndices.length>0){if(sp(t.sizeTree))return t;let r=dp();const o=Bf(g);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(r=pp(t.sizeTree).reduce(((t,{k:n,v:r})=>up(t,Math.max(0,n+e),r)),r),i!==-e){r=up(r,0,lp(t.sizeTree,s));r=up(r,1,cp(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Pp(t.offsetTree,0,r,n)}}{const r=pp(t.sizeTree).reduce(((t,{k:n,v:r})=>up(t,Math.max(0,n+e),r)),dp());return{...t,sizeTree:r,...Pp(t.offsetTree,0,r,n)}}}))),m),{beforeUnshiftWith:y,data:h,defaultItemSize:u,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:d,listRefresh:b,shiftWith:a,shiftWithOffset:w,sizeRanges:n,sizes:m,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),Sf(Xf,Bp),{singleton:!0});function Yp(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Up=Yf((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Vf(),a=Vf(),s=Wf(Mf(i,Ef(Yp)));return Tf(Mf(s,Ef((e=>e.totalCount))),n),Tf(Mf(s,Ef((e=>e.groupIndices))),e),Tf(Mf(qf(o,t,r),_f((([e,t])=>Dp(t))),Ef((([e,t,n])=>cp(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Hf(),Ef((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Sf(Wp,op)),qp=Yf((([{log:e}])=>{const t=Lf(!1),n=Wf(Mf(t,_f((e=>e)),Hf()));return If(t,(t=>{t&&Bf(e)("props updated",{},Jf.DEBUG)})),{didMount:n,propsReady:t}}),Sf(Xf),{singleton:!0}),Gp=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Zp(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Gp)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Jp=Yf((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:h}])=>{const f=Vf(),p=Vf(),m=Lf(0);let g=null,v=null,b=null;function y(){g&&(g(),g=null),b&&(b(),b=null),v&&(clearTimeout(v),v=null),kf(l,!1)}return Tf(Mf(f,Pf(n,d,r,m,s,a,h),Pf(e,i,o),Ef((([[e,n,r,o,i,a,s,c],d,h,m])=>{const w=Zp(e),{align:x,behavior:$,offset:S}=w,I=o-1,k=Mp(w,n,I);let F=Ep(k,n.offsetTree,d)+a;"end"===x?(F+=h+cp(n.sizeTree,k)[1]-r+m,k===I&&(F+=s)):"center"===x?F+=(h+cp(n.sizeTree,k)[1]-r+m)/2:F-=i,S&&(F+=S);const B=t=>{y(),t?(c("retrying to scroll to",{location:e},Jf.DEBUG),kf(f,e)):(kf(p,!0),c("list did not change, scroll successful",{},Jf.DEBUG))};if(y(),"smooth"===$){let e=!1;b=If(t,(t=>{e=e||t})),g=Of(u,(()=>{B(e)}))}else g=Of(Mf(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),B);return v=setTimeout((()=>{y()}),1200),kf(l,!0),c("scrolling from index to",{behavior:$,index:k,top:F},Jf.DEBUG),{behavior:$,top:F}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:m}}),Sf(Wp,op,Xf),{singleton:!0});function Qp(e,t){0==e?t():requestAnimationFrame((()=>{Qp(e-1,t)}))}function Xp(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const Kp=Yf((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Lf(!0),l=Lf(0),c=Lf(!0);return Tf(Mf(a,Pf(l),_f((([e,t])=>!!t)),zf(!1)),s),Tf(Mf(a,Pf(l),_f((([e,t])=>!!t)),zf(!1)),c),If(Mf(qf(t,a),Pf(s,n,e,c),_f((([[,e],t,{sizeTree:n},r,o])=>e&&(!sp(n)||yf(r))&&!t&&!o)),Pf(l)),(([,e])=>{Of(o,(()=>{kf(c,!0)})),Qp(4,(()=>{Of(r,(()=>{kf(s,!0)})),kf(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Sf(Wp,op,Jp,qp),{singleton:!0});function em(e,t){return Math.abs(e-t)<1.01}const tm="up",nm="down",rm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},om=Yf((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=Lf(!1),s=Lf(!0),l=Vf(),c=Vf(),u=Lf(4),d=Lf(0),h=Nf(Mf(Zf(Mf(Gf(o),Rf(1),zf(!0)),Mf(Gf(o),Rf(1),zf(!1),Cf(100))),Hf()),!1),f=Nf(Mf(Zf(Mf(n,zf(!0)),Mf(n,zf(!1),Cf(200))),Hf()),!1);Tf(Mf(qf(Gf(o),Gf(d)),Ef((([e,t])=>e<=t)),Hf()),s),Tf(Mf(s,jf(50)),c);const p=Wf(Mf(qf(r,Gf(i),Gf(t),Gf(e),Gf(u)),Af(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),rm),Hf(((e,t)=>e&&e.atBottom===t.atBottom)))),m=Nf(Mf(r,Af(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(em(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),_f((e=>e.changed)),Ef((e=>e.jump))),0);Tf(Mf(p,Ef((e=>e.atBottom))),a),Tf(Mf(a,jf(50)),l);const g=Lf(nm);Tf(Mf(r,Ef((({scrollTop:e})=>e)),Hf(),Af(((e,t)=>Bf(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?tm:nm,prevScrollTop:t}),{direction:nm,prevScrollTop:0}),Ef((e=>e.direction))),g),Tf(Mf(r,jf(50),zf("none")),g);const v=Lf(0);return Tf(Mf(h,_f((e=>!e)),zf(0)),v),Tf(Mf(o,jf(100),Pf(h),_f((([e,t])=>!!t)),Af((([e,t],[n])=>[t,n]),[0,0]),Ef((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:m,scrollDirection:g,scrollVelocity:v}}),Sf(op)),im="top",am="bottom",sm="none";function lm(e,t,n){return"number"==typeof e?n===tm&&t===im||n===nm&&t===am?e:0:n===tm?t===im?e.main:e.reverse:t===am?e.main:e.reverse}function cm(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const um=Yf((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Vf(),a=Lf(0),s=Lf(0),l=Lf(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:Nf(Mf(qf(Gf(r),Gf(o),Gf(n),Gf(i,Fp),Gf(l),Gf(a),Gf(t),Gf(e),Gf(s)),Ef((([e,t,n,[r,o],i,a,s,l,c])=>{const u=e-l,d=a+s,h=Math.max(n-u,0);let f=sm;const p=cm(c,im),m=cm(c,am);return r-=l,o+=n+s,(r+=n+s)>e+d-p&&(f=tm),(o-=l)<e-h+t+m&&(f=nm),f!==sm?[Math.max(u-n-lm(i,im,f)-p,0),u-h-s+t+lm(i,am,f)+m]:null})),_f((e=>null!=e)),Hf(Fp)),[0,0])}}),Sf(op),{singleton:!0});const dm={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function hm(e,t,n,r,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,h=c,f=s+d*l+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:pm(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:pm(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function fm(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Xp(t,s);return hm(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,n,r)}function pm(e,t,n){if(0===e.length)return[];if(!Dp(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=hp(t.groupOffsetTree,r,o);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const mm=Yf((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},h,{didMount:f},{recalcInProgress:p}])=>{const m=Lf([]),g=Lf(0),v=Vf();Tf(i.topItemsIndexes,m);const b=Nf(Mf(qf(f,p,Gf(l,Fp),Gf(o),Gf(r),Gf(c),u,Gf(m),Gf(t),Gf(n),e),_f((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),Ef((([,,[e,t],n,r,o,i,a,s,l,c])=>{const u=r,{offsetTree:d,sizeTree:h}=u,f=Bf(g);if(0===n)return{...dm,totalCount:n};if(0===e&&0===t)return 0===f?{...dm,totalCount:n}:fm(f,o,r,s,l,c||[]);if(sp(h))return f>0?null:hm(function(e,t,n){if(Dp(t)){const r=zp(e,t);return[{index:cp(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(Xp(o,n),u,c),[],n,l,u,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of hp(h,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return hm([],p,n,l,u,s);const m=a.length>0?a[a.length-1]+1:0,v=Ap(d,e,t,m);if(0===v.length)return null;const b=n-1;return hm(xf([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-r.start;i+=t*s+t*l}a<m&&(i+=(m-a)*s,a=m);const u=Math.min(r.end,b);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,n,l,u,s)})),_f((e=>null!==e)),Hf()),dm);Tf(Mf(e,_f(yf),Ef((e=>null==e?void 0:e.length))),o),Tf(Mf(b,Ef((e=>e.topListHeight))),d),Tf(d,s),Tf(Mf(b,Ef((e=>[e.top,e.bottom]))),a),Tf(Mf(b,Ef((e=>e.items))),v);const y=Wf(Mf(b,_f((({items:e})=>e.length>0)),Pf(o,e),_f((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Ef((([,e,t])=>[e-1,t])),Hf(Fp),Ef((([e])=>e)))),w=Wf(Mf(b,jf(200),_f((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Ef((({items:e})=>e[0].index)),Hf())),x=Wf(Mf(b,_f((({items:e})=>e.length>0)),Ef((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Hf(kp)));return{endReached:y,initialItemCount:g,itemsRendered:v,listState:b,rangeChanged:x,startReached:w,topItemsIndexes:m,...h}}),Sf(Wp,Up,um,Kp,Jp,om,qp,Bp),{singleton:!0}),gm=Yf((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Vf(),a=Nf(Mf(qf(n,e,r,t,o),Ef((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Tf(Gf(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Sf(op,mm),{singleton:!0}),vm=Yf((([{viewportHeight:e},{totalListHeight:t}])=>{const n=Lf(!1);return{alignToBottom:n,paddingTopAddition:Nf(Mf(qf(n,e,t),_f((([e])=>e)),Ef((([,e,t])=>Math.max(0,e-t))),jf(0),Hf()),0)}}),Sf(op,gm),{singleton:!0});function bm(e){return!!e&&("smooth"===e?"smooth":"auto")}const ym=Yf((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:o},{scrollToIndex:i},{scrolledToInitialItem:a},{didMount:s,propsReady:l},{log:c},{scrollingInProgress:u}])=>{const d=Lf(!1),h=Vf();let f=null;function p(e){kf(i,{align:"end",behavior:e,index:"LAST"})}function m(e){const t=Of(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(Bf(c)("scrolling to bottom due to increased size",{},Jf.DEBUG),p("auto"))}));setTimeout(t,100)}return If(Mf(qf(Mf(Gf(t),Rf(1)),s),Pf(Gf(d),o,a,u),Ef((([[e,t],n,r,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?bm(e(t)):t&&bm(e))(n,r||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),_f((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),Bf(n)?requestAnimationFrame((()=>{Bf(c)("following output to ",{totalCount:r},Jf.DEBUG),p(t)})):f=Of(e,(()=>{Bf(c)("following output to ",{totalCount:r},Jf.DEBUG),p(t),f=null}))})),If(Mf(qf(Gf(d),t,l),_f((([e,,t])=>e&&t)),Af((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),_f((({refreshed:e})=>e)),Pf(d,t)),(([,e])=>{Bf(a)&&m(!1!==e)})),If(h,(()=>{m(!1!==Bf(d))})),If(qf(Gf(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&p("auto")})),{autoscrollToBottom:h,followOutput:d}}),Sf(Wp,om,Jp,Kp,qp,Xf,op)),wm=Yf((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(Tf(Mf(s,Pf(i),_f((([,e])=>0!==e)),Pf(o,r,t,n,e),Ef((([[,e],t,n,r,o,i=[]])=>fm(e,t,n,r,o,i)))),a),{})),Sf(Wp,Kp,mm,qp),{singleton:!0}),xm=Yf((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=Lf(0);return If(Mf(e,Pf(r),_f((([,e])=>0!==e)),Ef((([,e])=>({top:e})))),(e=>{Of(Mf(n,Rf(1),_f((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{kf(t,e)}))}))})),{initialScrollTop:r}}),Sf(qp,op,mm),{singleton:!0}),$m=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,Sm=Yf((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const u=Vf();return Tf(Mf(u,Pf(t,l,n,i,o,r,s),Pf(e),Ef((([[e,t,n,r,o,i,s,l],c])=>{const{align:u,behavior:d,calculateViewLocation:h=$m,done:f,...p}=e,m=Mp(e,t,r-1),g=Ep(m,t.offsetTree,c)+o+i,v=h({itemBottom:g+cp(t.sizeTree,m)[1],itemTop:g,locationParams:{align:u,behavior:d,...p},viewportBottom:l+n-s,viewportTop:l+i});return v?f&&Of(Mf(a,_f((e=>!e)),Rf(Bf(a)?1:2)),f):f&&f(),v})),_f((e=>null!==e))),c),{scrollIntoView:u}}),Sf(Wp,op,Jp,mm,Xf),{singleton:!0}),Im=Yf((([{scrollVelocity:e}])=>{const t=Lf(!1),n=Vf(),r=Lf(!1);return Tf(Mf(e,Pf(r,t,n),_f((([e,t])=>!!t)),Ef((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Hf()),t),If(Mf(qf(t,e,n),Pf(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),Sf(om),{singleton:!0}),km=Yf((([{scrollContainerState:e,scrollTo:t}])=>{const n=Vf(),r=Vf(),o=Vf(),i=Lf(!1),a=Lf(void 0);return Tf(Mf(qf(n,r),Ef((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Tf(Mf(t,Pf(r),Ef((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),Sf(op)),Fm=Yf((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Vf(),u=Lf(void 0),d=Lf(null),h=Lf(null);return Tf(s,d),Tf(l,h),If(Mf(c,Pf(t,r,a,d,h,n)),(([e,t,n,r,o,i,a])=>{const s=function(e){return pp(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:n-=a})})),Tf(Mf(u,_f(yf),Ef(Bm)),o),Tf(Mf(i,Pf(u),_f((([,e])=>void 0!==e)),Hf(),Ef((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Sf(Wp,op,Kp,qp,km));function Bm(e){return{align:"start",index:0,offset:e.scrollTop}}const Tm=Yf((([{topItemsIndexes:e}])=>{const t=Lf(0);return Tf(Mf(t,_f((e=>e>=0)),Ef((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Sf(mm));function Om(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const Cm=Om((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Dm=Yf((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:h},{log:f},{recalcInProgress:p}])=>{const m=Wf(Mf(l,Pf(a),Af((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},s])=>{const l=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),_f((([e])=>0!==e)),Pf(r,s,n,o,f,p),_f((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===tm)),Ef((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Jf.DEBUG),e)))));function g(n){n>0?(kf(t,{behavior:"auto",top:-n}),kf(e,0)):(kf(e,0),kf(t,{behavior:"auto",top:-n}))}return If(Mf(m,Pf(e,i)),(([t,n,r])=>{r&&Cm()?kf(e,n-t):g(-t)})),If(Mf(qf(Nf(i,!1),e,p),_f((([e,t,n])=>!e&&!n&&0!==t)),Ef((([e,t])=>t)),jf(1)),g),Tf(Mf(d,Ef((e=>({top:-e})))),t),If(Mf(c,Pf(h,u),Ef((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=lp(r,0);let a=0,s=0;for(;a<e;){a++,n+=o;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),s++}return n}}))),(n=>{kf(e,n),requestAnimationFrame((()=>{kf(t,{top:n}),requestAnimationFrame((()=>{kf(e,0),kf(p,!1)}))}))})),{deviation:e}}),Sf(op,om,mm,Wp,Xf,Bp)),Hm=Yf((([e,t,n,r,o,i,a,s,l,c])=>({...e,...t,...n,...r,...o,...i,...a,...s,...l,...c})),Sf(um,wm,qp,Im,gm,xm,vm,km,Sm,Xf)),_m=Yf((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},m,g,v,{listState:b,topItemsIndexes:y,...w},{scrollToIndex:x},$,{topItemCount:S},{groupCounts:I},k])=>(Tf(w.rangeChanged,k.scrollSeekRangeChanged),Tf(Mf(k.windowViewportRect,Ef((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:I,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:S,topItemsIndexes:y,totalCount:u,...v,groupIndices:i,itemSize:a,listState:b,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...w,...k,...m,sizes:l,...g})),Sf(Wp,Kp,op,Fm,ym,mm,Jp,Dm,Tm,Up,Hm));function Em(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const zm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Mm(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&kf(e.propsReady,!1);for(const r of i){kf(e[n.required[r]],t[r])}for(const r of a)if(r in t){kf(e[n.optional[r]],t[r])}e.propsReady&&kf(e.propsReady,!0)}function d(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?n===i?void 0:(r(),n=i,t=If(e,i),t):(r(),wf);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...m}=h,[g]=o.useState((()=>xf(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,m)})))),[v]=o.useState(bf(d,g));zm((()=>{for(const e of l)e in m&&If(v[e],m[e]);return()=>{Object.values(v).map(Ff)}}),[m,v,g]),zm((()=>{u(g,m)})),o.useImperativeHandle(f,mf(function(e){return s.reduce(((t,r)=>(t[r]=t=>{kf(e[n.methods[r]],t)},t)),{})}(g)));const b=r;return t(c.Provider,{value:g,children:r?t(b,{...Em([...i,...a,...l],m),children:p}):p})}));return{Component:h,useEmitter:(e,t)=>{const n=o.useContext(c)[e];zm((()=>If(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>If(t,e)),[t]);return o.useSyncExternalStore(n,(()=>Bf(t)),(()=>Bf(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(bf(Bf,t));return zm((()=>If(t,(e=>{e!==n&&r(mf(e))}))),[t,n]),n},usePublisher:e=>{const t=o.useContext(c);return o.useCallback((n=>{kf(t[e],n)}),[t,e])}}}const Am=o.createContext(void 0),Rm=o.createContext(void 0),jm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Pm(e){return"self"in e}function Lm(e,t,n,r=wf,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{let r,o,i;const s=n.target;if(function(e){return"body"in e}(s)||Pm(s)){const e=Pm(s)?s:s.defaultView;i=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,o=a?e.innerWidth:e.innerHeight}else i=a?s.scrollLeft:s.scrollTop,r=a?s.scrollWidth:s.scrollHeight,o=a?s.offsetWidth:s.offsetHeight;const u=()=>{e({scrollHeight:r,scrollTop:Math.max(i,0),viewportHeight:o})};n.suppressFlushSync?u():B.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===r-o)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t,a]);return o.useEffect((()=>{const e=i||s.current;return r(i||s.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[s,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;Pm(r)?(u=Math.max(Cp(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),i=a?r.innerWidth:r.innerHeight,d=a?window.scrollX:window.scrollY):(u=r[a?"scrollWidth":"scrollHeight"],i=Cp(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const h=u-i;if(n.top=Math.ceil(Math.max(Math.min(h,n.top),0)),em(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Nm="-webkit-sticky",Vm="sticky",Wm=Om((()=>{if(typeof document>"u")return Vm;const e=document.createElement("div");return e.style.position=Nm,e.style.position===Nm?Nm:Vm}));function Ym(e){return e}const Um=Yf((()=>{const e=Lf((e=>`Item ${e}`)),t=Lf(null),n=Lf((e=>`Group ${e}`)),r=Lf({}),o=Lf(Ym),i=Lf("div"),a=Lf(wf),s=(e,t=null)=>Nf(Mf(r,Ef((t=>t[e])),Hf()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),qm=Yf((([e,t])=>({...e,...t})),Sf(_m,Um)),Gm=({height:e})=>t("div",{style:{height:e}}),Zm={overflowAnchor:"none",position:Wm(),zIndex:1},Jm={overflowAnchor:"none"},Qm={...Jm,display:"inline-block",height:"100%"},Xm=o.memo((function({showTopList:e=!1}){const n=mg("listState"),r=gg("sizeRanges"),i=mg("useWindowScroll"),a=mg("customScrollParent"),s=gg("windowScrollContainerState"),l=gg("scrollContainerState"),c=a||i?s:l,u=mg("itemContent"),d=mg("context"),h=mg("groupContent"),f=mg("trackItemSizes"),p=mg("itemSize"),m=mg("log"),g=gg("gap"),b=mg("horizontalDirection"),{callbackRef:y}=tp(r,p,f,e?wf:c,m,g,a,b,mg("skipAnimationFrameInResizeObserver")),[w,x]=o.useState(0);pg("deviation",(e=>{w!==e&&x(e)}));const $=mg("EmptyPlaceholder"),S=mg("ScrollSeekPlaceholder")||Gm,I=mg("ListComponent"),k=mg("ItemComponent"),F=mg("GroupComponent"),B=mg("computeItemKey"),T=mg("isSeeking"),O=mg("groupIndices").length>0,C=mg("alignToBottom"),D=mg("initialItemFinalLocationReached"),H=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==w?w:C?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==w?w:C?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...D?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&$?t($,{...rg($,d)}):t(I,{...rg(I,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:H,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=B(t+n.firstItemIndex,e.data,d);return T?v(S,{...rg(S,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?v(F,{...rg(F,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:Zm},h(e.index,d)):v(k,{...rg(k,d),...og(k,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:b?Qm:Jm},O?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),Km={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},eg={outline:"none",overflowX:"auto",position:"relative"},tg=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),ng={position:Wm(),top:0,width:"100%",zIndex:1};function rg(e,t){if("string"!=typeof e)return{context:t}}function og(e,t){return{item:"string"==typeof e?void 0:t}}const ig=o.memo((function(){const e=mg("HeaderComponent"),n=gg("headerHeight"),r=mg("HeaderFooterTag"),i=Kf(o.useMemo((()=>e=>{n(Cp(e,"height"))}),[n]),!0,mg("skipAnimationFrameInResizeObserver")),a=mg("context");return e?t(r,{ref:i,children:t(e,{...rg(e,a)})}):null})),ag=o.memo((function(){const e=mg("FooterComponent"),n=gg("footerHeight"),r=mg("HeaderFooterTag"),i=Kf(o.useMemo((()=>e=>{n(Cp(e,"height"))}),[n]),!0,mg("skipAnimationFrameInResizeObserver")),a=mg("context");return e?t(r,{ref:i,children:t(e,{...rg(e,a)})}):null}));function sg({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),h=n("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:m}=Lm(s,c,l,u,void 0,h);return e("scrollTo",m),e("scrollBy",f),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?eg:Km,...i},tabIndex:0,...a,...rg(l,d),children:o})}))}function lg({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:i,style:a,...s}){const l=r("windowScrollContainerState"),c=n("ScrollerComponent"),u=r("smoothScrollTargetReached"),d=n("totalListHeight"),h=n("deviation"),f=n("customScrollParent"),p=n("context"),m=o.useRef(null),g=n("scrollerRef"),{scrollByCallback:v,scrollerRef:b,scrollToCallback:y}=Lm(l,u,c,g,f);return jm((()=>{var e;return b.current=f||(null==(e=m.current)?void 0:e.ownerDocument.defaultView),()=>{b.current=null}}),[b,f]),e("windowScrollTo",y),e("scrollBy",v),t(c,{ref:m,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+h}:{}},...s,...rg(c,p),children:i})}))}const cg=({children:e})=>{const n=o.useContext(Am),r=gg("viewportHeight"),i=gg("fixedItemHeight"),a=mg("alignToBottom"),s=mg("horizontalDirection"),l=Kf(o.useMemo((()=>vf(r,(e=>Cp(e,s?"width":"height")))),[r,s]),!0,mg("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:l,style:tg(a),children:e})},ug=({children:e})=>{const n=o.useContext(Am),r=gg("windowViewportRect"),i=gg("fixedItemHeight"),a=mg("customScrollParent"),s=rp(r,a,mg("skipAnimationFrameInResizeObserver")),l=mg("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:s,style:tg(l),children:e})},dg=({children:e})=>{const n=mg("TopItemListComponent")||"div",r=mg("headerHeight"),o={...ng,marginTop:`${r}px`},i=mg("context");return t(n,{style:o,...rg(n,i),children:e})},hg=o.memo((function(n){const r=mg("useWindowScroll"),o=mg("topItemsIndexes").length>0,i=mg("customScrollParent"),a=mg("context"),s=i||r?bg:vg,l=i||r?ug:cg;return e(s,{...n,...rg(s,a),children:[o&&t(dg,{children:t(Xm,{showTopList:!0})}),e(l,{children:[t(ig,{}),t(Xm,{}),t(ag,{})]})]})})),{Component:fg,useEmitter:pg,useEmitterValue:mg,usePublisher:gg}=Mm(qm,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},hg),vg=sg({useEmitter:pg,useEmitterValue:mg,usePublisher:gg}),bg=lg({useEmitter:pg,useEmitterValue:mg,usePublisher:gg}),yg=fg,wg={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},xg={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:$g,floor:Sg,max:Ig,min:kg,round:Fg}=Math;function Bg(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Tg(e,t){return e&&e.width===t.width&&e.height===t.height}function Og(e,t){return e&&e.column===t.column&&e.row===t.row}const Cg=Yf((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},h,f,{didMount:p,propsReady:m},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:w},x])=>{const $=Lf(0),S=Lf(0),I=Lf(wg),k=Lf({height:0,width:0}),F=Lf({height:0,width:0}),B=Vf(),T=Vf(),O=Lf(0),C=Lf(null),D=Lf({column:0,row:0}),H=Vf(),_=Vf(),E=Lf(!1),z=Lf(0),M=Lf(!0),A=Lf(!1),R=Lf(!1);If(Mf(p,Pf(z),_f((([e,t])=>!!t))),(()=>{kf(M,!1)})),If(Mf(qf(p,M,F,k,z,A),_f((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{kf(A,!0),Qp(1,(()=>{kf(B,e)})),Of(Mf(c),(()=>{kf(t,[0,0]),kf(M,!0)}))})),Tf(Mf(_,_f((e=>null!=e&&e.scrollTop>0)),zf(0)),S),If(Mf(p,Pf(_),_f((([,e])=>null!=e))),(([,e])=>{e&&(kf(k,e.viewport),kf(F,e.item),kf(D,e.gap),e.scrollTop>0&&(kf(E,!0),Of(Mf(c,Rf(1)),(e=>{kf(E,!1)})),kf(l,{top:e.scrollTop})))})),Tf(Mf(k,Ef((({height:e})=>e))),d),Tf(Mf(qf(Gf(k,Tg),Gf(F,Tg),Gf(D,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Gf(c)),Ef((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),H),Tf(Mf(qf(Gf($),r,Gf(D,Og),Gf(F,Tg),Gf(k,Tg),Gf(C),Gf(S),Gf(E),Gf(M),Gf(z)),_f((([,,,,,,,e])=>!e)),Ef((([e,[t,n],r,o,i,a,s,,l,c])=>{const{column:u,row:d}=r,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return wg;if(0===f){const t=Xp(c,e);return function(e){return{...xg,items:e}}(Bg(t,t+Math.max(s-1,0),a))}const m=Dg(p,f,u);let g,v;l?0===t&&0===n&&s>0?(g=0,v=s-1):(g=m*Sg((t+d)/(h+d)),v=m*$g((n+d)/(h+d))-1,v=kg(e-1,Ig(v,m-1)),g=kg(v,Ig(0,g))):(g=0,v=-1);const b=Bg(g,v,a),{bottom:y,top:w}=Hg(i,r,o,b),x=$g(e/m);return{bottom:y,itemHeight:h,items:b,itemWidth:f,offsetBottom:x*h+(x-1)*d-y,offsetTop:w,top:w}}))),I),Tf(Mf(C,_f((e=>null!==e)),Ef((e=>e.length))),$),Tf(Mf(qf(k,F,I,D),_f((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),Ef((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Hg(e,r,t,n);return[i,o]})),Hf(Fp)),t);const j=Lf(!1);Tf(Mf(c,Pf(j),Ef((([e,t])=>t||0!==e))),j);const P=Wf(Mf(qf(I,$),_f((([{items:e}])=>e.length>0)),Pf(j),_f((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),Ef((([[,e]])=>e-1)),Hf())),L=Wf(Mf(Gf(I),_f((({items:e})=>e.length>0&&0===e[0].index)),zf(0),Hf())),N=Wf(Mf(Gf(I),Pf(E),_f((([{items:e},t])=>e.length>0&&!t)),Ef((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Hf(kp),jf(0)));Tf(N,f.scrollSeekRangeChanged),Tf(Mf(B,Pf(k,F,$,D),Ef((([e,t,n,r,o])=>{const i=Zp(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=r-1),c=Ig(0,c,kg(r-1,c));let u=_g(t,o,n,c);return"end"===a?u=Fg(u-t.height+n.height):"center"===a&&(u=Fg(u-t.height/2+n.height/2)),l&&(u+=l),{behavior:s,top:u}}))),l);const V=Nf(Mf(I,Ef((e=>e.offsetBottom+e.bottom))),0);return Tf(Mf(w,Ef((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:g,data:C,deviation:O,footerHeight:o,gap:D,headerHeight:i,increaseViewportBy:e,initialItemCount:S,itemDimensions:F,overscan:n,restoreStateFrom:_,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:B,scrollTop:c,smoothScrollTargetReached:u,totalCount:$,useWindowScroll:v,viewportDimensions:k,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:w,...f,gridState:I,horizontalDirection:R,initialTopMostItemIndex:z,totalListHeight:V,...h,endReached:P,propsReady:m,rangeChanged:N,startReached:L,stateChanged:H,stateRestoreInProgress:E,...x}}),Sf(um,op,om,Im,qp,km,Xf));function Dg(e,t,n){return Ig(1,Sg((e+n)/(Sg(t)+n)))}function Hg(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=_g(e,t,n,r[0].index);return{bottom:_g(e,t,n,r[r.length-1].index)+o,top:i}}function _g(e,t,n,r){const o=Dg(e.width,n.width,t.column),i=Sg(r/o),a=i*n.height+Ig(0,i-1)*t.row;return a>0?a+t.row:a}const Eg=Yf((()=>{const e=Lf((e=>`Item ${e}`)),t=Lf({}),n=Lf(null),r=Lf("virtuoso-grid-item"),o=Lf("virtuoso-grid-list"),i=Lf(Ym),a=Lf("div"),s=Lf(wf),l=(e,n=null)=>Nf(Mf(t,Ef((t=>t[e])),Hf()),n),c=Lf(!1),u=Lf(!1);return Tf(Gf(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),zg=Yf((([e,t])=>({...e,...t})),Sf(Cg,Eg)),Mg=o.memo((function(){const e=Wg("gridState"),n=Wg("listClassName"),r=Wg("itemClassName"),i=Wg("itemContent"),a=Wg("computeItemKey"),s=Wg("isSeeking"),l=Yg("scrollHeight"),c=Wg("ItemComponent"),u=Wg("ListComponent"),d=Wg("ScrollSeekPlaceholder"),h=Wg("context"),f=Yg("itemDimensions"),p=Yg("gap"),m=Wg("log"),g=Wg("stateRestoreInProgress"),b=Yg("reportReadyState"),y=Kf(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();f({height:e,width:t})}p({column:Gg("column-gap",getComputedStyle(e).columnGap,m),row:Gg("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,p,m]),!0,!1);return jm((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),g?null:t(u,{className:n,ref:y,...rg(u,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,h);return s?t(d,{...rg(d,h),height:e.itemHeight,index:n.index,width:e.itemWidth},o):v(c,{...rg(c,h),className:r,"data-index":n.index,key:o},i(n.index,n.data,h))}))})})),Ag=o.memo((function(){const e=Wg("HeaderComponent"),n=Yg("headerHeight"),r=Wg("headerFooterTag"),i=Kf(o.useMemo((()=>e=>{n(Cp(e,"height"))}),[n]),!0,!1),a=Wg("context");return e?t(r,{ref:i,children:t(e,{...rg(e,a)})}):null})),Rg=o.memo((function(){const e=Wg("FooterComponent"),n=Yg("footerHeight"),r=Wg("headerFooterTag"),i=Kf(o.useMemo((()=>e=>{n(Cp(e,"height"))}),[n]),!0,!1),a=Wg("context");return e?t(r,{ref:i,children:t(e,{...rg(e,a)})}):null})),jg=({children:e})=>{const n=o.useContext(Rm),r=Yg("itemDimensions"),i=Yg("viewportDimensions"),a=Kf(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:tg(!1),children:e})},Pg=({children:e})=>{const n=o.useContext(Rm),r=Yg("windowViewportRect"),i=Yg("itemDimensions"),a=Wg("customScrollParent"),s=rp(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:s,style:tg(!1),children:e})},Lg=o.memo((function({...n}){const r=Wg("useWindowScroll"),o=Wg("customScrollParent"),i=o||r?qg:Ug,a=o||r?Pg:jg,s=Wg("context");return t(i,{...n,...rg(i,s),children:e(a,{children:[t(Ag,{}),t(Mg,{}),t(Rg,{})]})})})),{Component:Ng,useEmitter:Vg,useEmitterValue:Wg,usePublisher:Yg}=Mm(zg,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},Lg),Ug=sg({useEmitter:Vg,useEmitterValue:Wg,usePublisher:Yg}),qg=lg({useEmitter:Vg,useEmitterValue:Wg,usePublisher:Yg});function Gg(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Jf.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Zg=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Jg=({children:e})=>{const[n,r]=s(-1);return t(Zg.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},Qg=w.div`
    overflow: hidden;
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: 4px;
    background: ${Dn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${nl.mobileL} {
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
        background: ${Dn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Xg=w.div`
    background: transparent;
    padding: 0.5rem;
`,Kg=w.ul`
    list-style-type: none;
`,ev=w.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Dn.Accent.Light[3]};

    ${e=>e.$active&&x`
            background: ${Dn.Accent.Light[5]};
        `}
`,tv=w(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Dn.Primary};
`,nv=w.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,rv=w(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Primary};
`,ov=w(_)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Accent.Light[2]};
`,iv=w.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,av=w(fr)`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Dn.Primary};
`,sv=w(av)`
    outline-offset: 0.25rem;
`,lv=w(av)`
    padding: 0.5rem 1rem;
`,cv=w.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,uv=w.div`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}
`,dv=w(A)`
    ${e=>{const t="small"===e.$variant?1:1.125;return x`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Dn.Validation.Red.Icon};
`,hv=e=>"small"===e?1:1.125,fv=e=>x`
        height: ${hv(e)}rem;
        width: ${hv(e)}rem;
    `,pv=w.div`
    background: ${Dn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,mv=w.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,gv=w(hr)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,vv=w(L)`
    color: ${Dn.Neutral[3]};
    flex-shrink: 0;
    ${e=>fv(e.$variant)}
`,bv=w(cc)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Dn.Neutral[3]};
    cursor: pointer;

    ${e=>x`
            svg {
                ${fv(e.$variant)}
            }
        `}
`,yv=f(((n,r)=>{var{value:o,variant:i,onClear:a}=n,s=re(n,["value","variant","onClear"]);return e(pv,{children:[e(mv,{children:[t(vv,{$variant:i,"aria-hidden":!0}),t(gv,Object.assign({ref:r,value:o,$variant:i},s))]}),o&&t(bv,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(H,{"aria-hidden":!0})}))]})})),wv=({listItems:r,multiSelect:o,selectedItems:l,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:g="default",listboxId:v,width:b,topScrollItem:y,onSelectItem:w,onSelectAll:x,onDismiss:$,onRetry:S,valueExtractor:I,listExtractor:k,renderListItem:F,renderCustomCallToAction:B,enableSearch:T,hideNoResultsDisplay:O,searchPlaceholder:C="Search",searchFunction:D,onSearch:H})=>{const{focusedIndex:_,setFocusedIndex:E}=m(Zg),[z,M]=s(""),[A,R]=s(r),j=Ml(u),P=(()=>{const[e,t]=s(!1);return a((()=>{t(!0)}),[]),e})(),L=i(),N=i(),V=i([]),W=i(),Y=i(null),U=e=>k?k(e):e.toString(),q=p((e=>!!hf(l,(t=>pf(t,e)))),[l]),G=zl((()=>D(z))),Z=zl((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=z.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),J=(e,t)=>{E(t),null==w||w(e,(e=>I?I(e):e)(e))},Q=e=>{const t=e.target.value;M(t),null==H||H()},X=()=>{var e;M(""),null===(e=W.current)||void 0===e||e.focus(),null==H||H()},K=()=>{null==S||S()};oe("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<A.length-1){const e=_+1;null===(t=V.current[e])||void 0===t||t.focus(),E(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(n=V.current[e])||void 0===n||n.focus(),E(e)}else 0===_&&W.current&&(W.current.focus(),E(-1));break;case"Space":case"Enter":document.activeElement===V.current[_]&&(e.preventDefault(),A[_]&&J(A[_],_))}})),a((()=>{if(!y&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),E(e))}),0);return()=>clearTimeout(e)}),[V,r,E,y]),a((()=>{var e,t,n;if(P)return;if(c)return;const o=r.findIndex((e=>q(e)));W.current?(E(-1),setTimeout((()=>W.current.focus()),200)):_>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:_,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[_])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),E(o),setTimeout((()=>{var e;return null===(e=V.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(n=Y.current)||void 0===n||n.scrollToIndex({index:0}),E(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,c,_,r,P,E]),a((()=>{P&&j&&(c||"success"===u&&W.current&&(E(-1),W.current.focus()))}),[P,j,u,E,c]),a((()=>{R(""===z?r:D?G():Z())}),[G,Z,r,D,z]);const ee=e=>o?t(e?rv:ov,{"aria-hidden":!0}):e?t(tv,{"aria-hidden":!0}):t(nv,{}),te=(e,n)=>{const r=U(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(Yc,{displayType:f,label:o,maxLines:h,selected:n,sublabel:i,truncationType:d,variant:g})},ne=(r,i)=>{if(!S||S&&"success"===u){const a=q(r),s=i===_;return t(ev,Object.assign({"aria-selected":a,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>J(r,i),onMouseEnter:()=>(e=>{E(e)})(i),ref:e=>{V.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s},{children:F?F(r,{selected:a}):e(n,{children:[ee(a),te(r,a)]})}),((e,t)=>`item_${t}__${I?I(e):e}`)(r,i))}},re=()=>{if((T||D)&&"success"===u)return t(yv,{ref:W,onChange:Q,value:z,placeholder:C,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:g})},ie=()=>{if(o&&A.length>0&&!z&&"success"===u)return t(iv,{children:t(lv,Object.assign({onClick:x,type:"button",$variant:g},{children:0===l.length?"Select all":"Clear all"}))})},ae=()=>{if(!O&&(z||!T)&&0===A.length&&"success"===u)return e(cv,Object.assign({"data-testid":"list-no-results"},{children:[t(dv,{"data-testid":"no-result-icon",$variant:g}),t(uv,Object.assign({$variant:g},{children:"No results found."}))]}))},se=()=>{if(S&&"loading"===u){const n="small"===g?16:18;return e(cv,Object.assign({"data-testid":"list-loading"},{children:[t(dl,{$buttonStyle:"secondary",size:n}),t(uv,Object.assign({$variant:g},{children:"Loading..."}))]}))}},le=()=>{if(S&&"fail"===u)return e(cv,Object.assign({"data-testid":"list-fail"},{children:[t(dv,{"data-testid":"load-error-icon",$variant:g}),t(uv,Object.assign({$variant:g},{children:"Failed to load."}))," ",t(sv,Object.assign({onClick:K,type:"button",$variant:g},{children:"Try again."}))]}))},ce=()=>{const e="test"===process.env.NODE_ENV;return t(Kg,Object.assign({role:"listbox",id:v},{children:t(yg,Object.assign({ref:Y,style:{height:"100%"},data:A,customScrollParent:L.current,itemContent:(e,t)=>ne(t,e)},e?{initialItemCount:A.length}:{}),e?A.length:void 0)}))};return e(Qg,Object.assign({"data-testid":"dropdown-container",ref:L,$width:b},{children:[e(Xg,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[re(),ie(),ae(),se(),le(),ce()]})),(()=>{if(B)return t("div",Object.assign({"data-testid":"custom-cta"},{children:B($,A)}))})()]}))},xv=w(fr)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,$v=w.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Cc};

    svg {
        color: ${Dn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Un.BodySmall.fontSize:Un.Body.fontSize;return x`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`;var Sv;f((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(xv,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!s&&t($v,Object.assign({$expanded:o,$variant:l},{children:t(k,{"aria-hidden":!0})}))]})))),w.li`
    display: ${e=>e.$visible?"flex":"none"};
`,w.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Dn.Accent.Light[3]};

    ${e=>e.$active&&x`
            background: ${Dn.Accent.Light[5]};
        `}
`,w.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,w.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Dn.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return x`
                    transform: rotate(90deg);
                `}}
    }
`,w.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,w.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,w(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Dn.Primary};
`,w(N)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Primary};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Sv||(Sv={}));const Iv=w.div`
    display: flex;
    flex-direction: column;
`,kv=e=>"right"===e?"bottom-end":"bottom-start",Fv=({enabled:r,isOpen:o,onOpen:l,onClose:c,onDismiss:u,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:p=!1,offset:m=0,alignment:g="left",fitAvailableHeight:v})=>{var b;const y=i(null),w=i(null),{width:x}=xo({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<rl.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:I,context:k}=W({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!o?null==l||l():!e&&o&&(null==c||c(n))},whileElementsMounted:Y,placement:kv(g),middleware:[U(m),q(),G({limiter:Z()}),J({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),$]}),F=(()=>{const[e,t]=s(void 0),n=V();return a((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Sv.Change,e),n.events.emit(Sv.Ready),()=>n.events.off(Sv.Change,e)}),[n]),e})(),{isMounted:B,styles:T}=Q(k,{initial:{opacity:0},open:{opacity:1},duration:300}),O=X(k,{enabled:r,toggle:p}),C=K(k,{enabled:r}),{getReferenceProps:D,getFloatingProps:H}=ee([O,C]);return e(n,{children:[t("div",Object.assign({ref:e=>{y.current=e,S.setReference(e)}},D(),{children:d()})),B&&t(te,{children:t(ne,Object.assign({context:k,modal:!1,initialFocus:w,returnFocus:!1},{children:t("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},I),{zIndex:null!==(b=null!=f?f:F)&&void 0!==b?b:50})},H(),{children:t(Iv,Object.assign({ref:w,style:Object.assign({},T),inert:T.opacity<1?"":void 0},{children:h({elementWidth:x})}))}))}))})]})},Bv=w(dr)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,Tv=n=>{var{id:r,disabled:o=!1,error:l,value:c,format:u="12hr",readOnly:d,onChange:h,onFocus:f,onBlur:m,alignment:v="left",dropdownZIndex:b,startLimit:y,endLimit:w,interval:x=15}=n,$=re(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[S]=s((()=>El.generate())),[I,k]=s(null),[F,B]=s(!1),[T,O]=s(""),[C,D]=s(""),[H,_]=s(""),[E,z]=s(""),[M,A]=s(""),R=i(),j=i(),P=i(),L=g((()=>wr.generateTimings(x,u,y,w)),[x,u,y,w]),N=g((()=>{if(""===E)return L;const e=wr.findClosestFlooredTime(E,L);return L.slice(L.indexOf(e))}),[L,E]),V=p((e=>wr.parseInput(e,u)),[u]);a((()=>{var e,t;if(c){const n=null!==(e=V(c.start))&&void 0!==e?e:"",r=null!==(t=V(c.end))&&void 0!==t?t:"";D(n),_(r),z(n),A(r)}}),[c,V]),a((()=>{if(l)return void B(!1);const e=V(C),t=V(H);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&wr.to24Hour(t)<wr.to24Hour(e)))return O(""),void(document.activeElement!==j.current&&document.activeElement!==P.current||B(!0));O("End time must be after start time")}B(!1)}),[C,H,V,l]);const W=e=>{o||d||(I||F||null==f||f(),k(e),B(!0))},Y=e=>{var t;o||d||(k(e),B(!0),null===(t=("start"===e?j:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===I?q(C):"end"===I&&(F&&G(H),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(C,H,{})}}const q=e=>{Z(e,H,{goToNextInput:!0})},G=e=>{Z(C,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var o,i,a;const s=null!==(o=V(e))&&void 0!==o?o:E,l=null!==(i=V(t))&&void 0!==i?i:M;D(s),_(l);s===E&&l===M||null==h||h({start:s,end:l}),n&&void 0!==V(e)&&(k("end"),null===(a=P.current)||void 0===a||a.select()),r&&(k(null),B(!1),null==m||m()),z(s),A(l)},J=e=>{e.stopPropagation(),D(""),_(""),z(""),A("");null==h||h({start:"",end:""}),k(null),B(!1)},Q=e=>{R.current&&!R.current.contains(e.relatedTarget)&&I&&!F&&Z(C,H,{triggerOnBlur:!0})},X=()=>{if(!d&&!o&&((null==C?void 0:C.length)>0||(null==H?void 0:H.length)>0))return t(Mc,Object.assign({onClick:J,type:"button","aria-label":"Clear"},{children:t(Oc,{"aria-hidden":!0})}))};return e(pr,Object.assign({id:r},$,{children:[t(Jg,{children:t(Fv,{enabled:!d&&!o,isOpen:F,renderElement:()=>e(Bv,Object.assign({ref:R,$disabled:o,$error:l||!!T,$readOnly:d,onBlur:Q},{children:[e(An,Object.assign({error:l||!!T,currentActive:null===I?"none":I},{children:[t(gr,{ref:j,onFocus:()=>W("start"),placeholder:"start"===I?"hh:mm":"From",onChange:e=>D(e.target.value),value:C,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":F,"aria-controls":S,"aria-autocomplete":"list"}),t(gr,{ref:P,onFocus:()=>W("end"),placeholder:"end"===I?"hh:mm":"To",onChange:e=>_(e.target.value),value:H,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":F,"aria-controls":S,"aria-autocomplete":"list"})]})),X()]})),renderDropdown:()=>{if(F)return t(wv,"start"===I?{listItems:L,onSelectItem:q,selectedItems:[C],disableItemFocus:!0,topScrollItem:wr.findClosestFlooredTime(V(C),L),listboxId:S}:{listItems:N,onSelectItem:G,selectedItems:[H],disableItemFocus:!0,topScrollItem:wr.findClosestFlooredTime(V(H),N),listboxId:S})},onClose:e=>{"outside-press"===e?(k(null),B(!1),null==m||m()):Z(C,H,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===I?j:P).current)||void 0===e||e.focus(),B(!1)},offset:8,alignment:v,fitAvailableHeight:!0,customZIndex:b})}),!l&&T&&t(Bc,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:T}))]}))},Ov=e=>{var{variant:n="dial"}=e,r=re(e,["variant"]);return"dial"===n?t(Fc,Object.assign({},r)):"combobox"===n?t(Tv,Object.assign({},r)):void 0};export{Ov as TimeRangePicker};
//# sourceMappingURL=index.js.map
