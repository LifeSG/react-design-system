import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useEffect as a,useState as s,isValidElement as l,createRef as c,cloneElement as u,PureComponent as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,createElement as v}from"react";import{ArrowRightIcon as b,ChevronDownIcon as y}from"@lifesg/react-icons";import w,{css as x,keyframes as $,useTheme as S}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ChevronDownIcon as k}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as I}from"@lifesg/react-icons/chevron-up";import B,{findDOMNode as T,unstable_batchedUpdates as O}from"react-dom";import{CircleIcon as C}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as H}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as z}from"@lifesg/react-icons/tick";import{ArrowRightIcon as M}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as j}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as P}from"@lifesg/react-icons/tick-circle-fill";import{MagnifierIcon as L}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as N}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as W,useFloating as V,autoUpdate as Y,offset as U,flip as q,shift as G,limitShift as Z,size as J,useTransitionStyles as Q,useClick as X,useDismiss as K,useInteractions as ee,FloatingPortal as te,FloatingFocusManager as ne}from"@floating-ui/react";function re(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const oe=(e,t,n="window",r)=>{const o=i();a((()=>{o.current=t}),[t]),a((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se=Array.isArray,le="object"==typeof ie&&ie&&ie.Object===Object&&ie,ce=le,ue="object"==typeof self&&self&&self.Object===Object&&self,de=ce||ue||Function("return this")(),he=de.Symbol,fe=he,pe=Object.prototype,me=pe.hasOwnProperty,ge=pe.toString,ve=fe?fe.toStringTag:void 0;var be=function(e){var t=me.call(e,ve),n=e[ve];try{e[ve]=void 0;var r=!0}catch(e){}var o=ge.call(e);return r&&(t?e[ve]=n:delete e[ve]),o},ye=Object.prototype.toString;var we=be,xe=function(e){return ye.call(e)},$e=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$e&&$e in Object(e)?we(e):xe(e)};var Fe=function(e){return null!=e&&"object"==typeof e},ke=Se,Ie=Fe;var Be=function(e){return"symbol"==typeof e||Ie(e)&&"[object Symbol]"==ke(e)},Te=se,Oe=Be,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,De=/^\w*$/;var He=function(e,t){if(Te(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Oe(e))||(De.test(e)||!Ce.test(e)||null!=t&&e in Object(t))};var _e=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ee=Se,ze=_e;var Me,Ae=function(e){if(!ze(e))return!1;var t=Ee(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Re=de["__core-js_shared__"],je=(Me=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Pe=function(e){return!!je&&je in e},Le=Function.prototype.toString;var Ne=function(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},We=Ae,Ve=Pe,Ye=_e,Ue=Ne,qe=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ze=Object.prototype,Je=Ge.toString,Qe=Ze.hasOwnProperty,Xe=RegExp("^"+Je.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ke=function(e){return!(!Ye(e)||Ve(e))&&(We(e)?Xe:qe).test(Ue(e))},et=function(e,t){return null==e?void 0:e[t]};var tt=function(e,t){var n=et(e,t);return Ke(n)?n:void 0},nt=tt(Object,"create"),rt=nt;var ot=function(){this.__data__=rt?rt(null):{},this.size=0};var it=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},at=nt,st=Object.prototype.hasOwnProperty;var lt=function(e){var t=this.__data__;if(at){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(t,e)?t[e]:void 0},ct=nt,ut=Object.prototype.hasOwnProperty;var dt=nt;var ht=ot,ft=it,pt=lt,mt=function(e){var t=this.__data__;return ct?void 0!==t[e]:ut.call(t,e)},gt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=dt&&void 0===t?"__lodash_hash_undefined__":t,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ht,vt.prototype.delete=ft,vt.prototype.get=pt,vt.prototype.has=mt,vt.prototype.set=gt;var bt=vt;var yt=function(){this.__data__=[],this.size=0};var wt=function(e,t){return e===t||e!=e&&t!=t},xt=wt;var $t=function(e,t){for(var n=e.length;n--;)if(xt(e[n][0],t))return n;return-1},St=$t,Ft=Array.prototype.splice;var kt=$t;var It=$t;var Bt=$t;var Tt=yt,Ot=function(e){var t=this.__data__,n=St(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ft.call(t,n,1),--this.size,!0)},Ct=function(e){var t=this.__data__,n=kt(t,e);return n<0?void 0:t[n][1]},Dt=function(e){return It(this.__data__,e)>-1},Ht=function(e,t){var n=this.__data__,r=Bt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function _t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_t.prototype.clear=Tt,_t.prototype.delete=Ot,_t.prototype.get=Ct,_t.prototype.has=Dt,_t.prototype.set=Ht;var Et=_t,zt=tt(de,"Map"),Mt=bt,At=Et,Rt=zt;var jt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pt=function(e,t){var n=e.__data__;return jt(t)?n["string"==typeof t?"string":"hash"]:n.map},Lt=Pt;var Nt=Pt;var Wt=Pt;var Vt=Pt;var Yt=function(e,t){var n=Vt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ut=function(){this.size=0,this.__data__={hash:new Mt,map:new(Rt||At),string:new Mt}},qt=function(e){var t=Lt(this,e).delete(e);return this.size-=t?1:0,t},Gt=function(e){return Nt(this,e).get(e)},Zt=function(e){return Wt(this,e).has(e)},Jt=Yt;function Qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qt.prototype.clear=Ut,Qt.prototype.delete=qt,Qt.prototype.get=Gt,Qt.prototype.has=Zt,Qt.prototype.set=Jt;var Xt=Qt,Kt=Xt;function en(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(en.Cache||Kt),n}en.Cache=Kt;var tn=en;var nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/\\(\\)?/g,on=function(e){var t=tn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nn,(function(e,n,r,o){t.push(r?o.replace(rn,"$1"):n||e)})),t}));var an=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},sn=se,ln=Be,cn=he?he.prototype:void 0,un=cn?cn.toString:void 0;var dn=function e(t){if("string"==typeof t)return t;if(sn(t))return an(t,e)+"";if(ln(t))return un?un.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},hn=dn;var fn=se,pn=He,mn=on,gn=function(e){return null==e?"":hn(e)};var vn=function(e,t){return fn(e)?e:pn(e,t)?[e]:mn(gn(e))},bn=Be;var yn=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},wn=vn,xn=yn;var $n=function(e,t){for(var n=0,r=(t=wn(t,e)).length;null!=e&&n<r;)e=e[xn(t[n++])];return n&&n==r?e:void 0},Sn=$n;var Fn=function(e,t,n){var r=null==e?void 0:Sn(e,t);return void 0===r?n:r},kn=ae(Fn);const In=(e,t,n)=>t?kn(n,t)||kn(e,t):n||e,Bn=(e,t)=>{const n=t||e.defaultValue;return kn(e.collections,n)};var Tn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Tn||(Tn={}));const On={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Cn=e=>t=>{const n=t.theme,r=Bn(On,n[Tn.colorScheme]);return n.options&&n.options.color?In(r,e,n.options.color):In(r,e)},Dn={Brand:{1:Cn("Brand.1"),2:Cn("Brand.2"),3:Cn("Brand.3"),4:Cn("Brand.4"),5:Cn("Brand.5"),6:Cn("Brand.6")},Primary:Cn("Primary"),PrimaryDark:Cn("PrimaryDark"),Secondary:Cn("Secondary"),Accent:{Light:{1:Cn("Accent.Light.1"),2:Cn("Accent.Light.2"),3:Cn("Accent.Light.3"),4:Cn("Accent.Light.4"),5:Cn("Accent.Light.5"),6:Cn("Accent.Light.6")},Dark:{1:Cn("Accent.Dark.1"),2:Cn("Accent.Dark.2"),3:Cn("Accent.Dark.3")}},Neutral:{1:Cn("Neutral.1"),2:Cn("Neutral.2"),3:Cn("Neutral.3"),4:Cn("Neutral.4"),5:Cn("Neutral.5"),6:Cn("Neutral.6"),7:Cn("Neutral.7"),8:Cn("Neutral.8")},Validation:{Green:{Text:Cn("Validation.Green.Text"),Icon:Cn("Validation.Green.Icon"),Border:Cn("Validation.Green.Border"),Background:Cn("Validation.Green.Background")},Orange:{Text:Cn("Validation.Orange.Text"),Icon:Cn("Validation.Orange.Icon"),Border:Cn("Validation.Orange.Border"),Background:Cn("Validation.Orange.Background"),Badge:Cn("Validation.Orange.Badge")},Red:{Text:Cn("Validation.Red.Text"),Icon:Cn("Validation.Red.Icon"),Border:Cn("Validation.Red.Border"),Background:Cn("Validation.Red.Background")},Blue:{Text:Cn("Validation.Blue.Text"),Icon:Cn("Validation.Blue.Icon"),Border:Cn("Validation.Blue.Border"),Background:Cn("Validation.Blue.Background")}},Shadow:{Accent:Cn("Shadow.Accent"),Red:Cn("Shadow.Red"),Elevation:Cn("Shadow.Elevation")}},Hn=w.div`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jn=e=>t=>{var n;const r=t.theme,o=Bn(Rn,r[Tn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?In(o,e,r.options.designToken):In(o,e)},Pn={InputBoxShadow:jn("InputBoxShadow"),InputErrorBoxShadow:jn("InputErrorBoxShadow"),ElevationBoxShadow:jn("ElevationBoxShadow"),Table:{Header:jn("Table.Header"),Cell:{Primary:jn("Table.Cell.Primary"),Secondary:jn("Table.Cell.Secondary"),Selected:jn("Table.Cell.Selected"),Hover:jn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jn("Button.Danger.BackgroundColor"),Hover:jn("Button.Danger.Hover"),Primary:jn("Button.Danger.Primary"),Border:jn("Button.Danger.Border")}}},Ln={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Nn={D1:{fontFamily:Ln.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ln.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Wn={D1:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ln.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ln.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Vn={collections:{base:Nn,oneservice:{D1:{fontFamily:Ln.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ln.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ln.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ln.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ln.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ln.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ln.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ln.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ln.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ln.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Wn},defaultValue:"base"},Yn=e=>t=>{const n=t.theme,r=Bn(Vn,n[Tn.textStyleScheme]);return n.options&&n.options.textStyle?In(r,e,n.options.textStyle):In(r,e)},Un={D1:{fontFamily:Yn("D1.fontFamily"),fontSize:Yn("D1.fontSize"),fontWeight:Yn("D1.fontWeight"),lineHeight:Yn("D1.lineHeight"),letterSpacing:Yn("D1.letterSpacing")},D2:{fontFamily:Yn("D2.fontFamily"),fontSize:Yn("D2.fontSize"),fontWeight:Yn("D2.fontWeight"),lineHeight:Yn("D2.lineHeight"),letterSpacing:Yn("D2.letterSpacing")},D3:{fontFamily:Yn("D3.fontFamily"),fontSize:Yn("D3.fontSize"),fontWeight:Yn("D3.fontWeight"),lineHeight:Yn("D3.lineHeight"),letterSpacing:Yn("D3.letterSpacing")},D4:{fontFamily:Yn("D4.fontFamily"),fontSize:Yn("D4.fontSize"),fontWeight:Yn("D4.fontWeight"),lineHeight:Yn("D4.lineHeight"),letterSpacing:Yn("D4.letterSpacing")},DBody:{fontFamily:Yn("DBody.fontFamily"),fontSize:Yn("DBody.fontSize"),fontWeight:Yn("DBody.fontWeight"),lineHeight:Yn("DBody.lineHeight"),letterSpacing:Yn("DBody.letterSpacing")},H1:{fontFamily:Yn("H1.fontFamily"),fontSize:Yn("H1.fontSize"),fontWeight:Yn("H1.fontWeight"),lineHeight:Yn("H1.lineHeight"),letterSpacing:Yn("H1.letterSpacing")},H2:{fontFamily:Yn("H2.fontFamily"),fontSize:Yn("H2.fontSize"),fontWeight:Yn("H2.fontWeight"),lineHeight:Yn("H2.lineHeight"),letterSpacing:Yn("H2.letterSpacing")},H3:{fontFamily:Yn("H3.fontFamily"),fontSize:Yn("H3.fontSize"),fontWeight:Yn("H3.fontWeight"),lineHeight:Yn("H3.lineHeight"),letterSpacing:Yn("H3.letterSpacing")},H4:{fontFamily:Yn("H4.fontFamily"),fontSize:Yn("H4.fontSize"),fontWeight:Yn("H4.fontWeight"),lineHeight:Yn("H4.lineHeight"),letterSpacing:Yn("H4.letterSpacing")},H5:{fontFamily:Yn("H5.fontFamily"),fontSize:Yn("H5.fontSize"),fontWeight:Yn("H5.fontWeight"),lineHeight:Yn("H5.lineHeight"),letterSpacing:Yn("H5.letterSpacing")},H6:{fontFamily:Yn("H6.fontFamily"),fontSize:Yn("H6.fontSize"),fontWeight:Yn("H6.fontWeight"),lineHeight:Yn("H6.lineHeight"),letterSpacing:Yn("H6.letterSpacing")},Body:{fontFamily:Yn("Body.fontFamily"),fontSize:Yn("Body.fontSize"),fontWeight:Yn("Body.fontWeight"),lineHeight:Yn("Body.lineHeight"),letterSpacing:Yn("Body.letterSpacing")},BodySmall:{fontFamily:Yn("BodySmall.fontFamily"),fontSize:Yn("BodySmall.fontSize"),fontWeight:Yn("BodySmall.fontWeight"),lineHeight:Yn("BodySmall.lineHeight"),letterSpacing:Yn("BodySmall.letterSpacing")},XSmall:{fontFamily:Yn("XSmall.fontFamily"),fontSize:Yn("XSmall.fontSize"),fontWeight:Yn("XSmall.fontWeight"),lineHeight:Yn("XSmall.lineHeight"),letterSpacing:Yn("XSmall.letterSpacing")}},qn=[Ln.OpenSans,Ln.PlusJakartaSans],Gn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Zn=(e,t)=>n=>{var r;const o=Un[e].fontFamily(n),i=Un[e].fontWeight(n),a=qn.find((e=>Object.values(e).includes(o)));return a?x`
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
`,rr=w(F)`
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
`;var vr={exports:{}};vr.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",w={};w[y]=g;var x="$isDayjsObject",$=function(e){return e instanceof I||!(!e||!e[x])},S=function e(t,n,r){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(y=o),o||!r&&y},F=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new I(n)},k=b;k.l=S,k.i=$,k.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var I=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!k.u(t)||t,u=k.p(e),f=function(e,t){var o=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var y=this.$locale().weekStart||0,w=(m<y?m+7:m)-y;return f(r?v-w:v+(6-w),g);case s:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case i:return p(b+"Seconds",2);case o:return p(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=k.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[k.p(e)]()},v.add=function(r,u){var h,f=this;r=Number(r);var p=k.p(u),m=function(e){var t=F(f);return k.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[i]=t,h[a]=n,h[o]=e,h)[p]||1,v=this.$d.getTime()+r*g;return k.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},h=function(e){return k.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,f){var p,m=this,g=k.p(h),v=F(r),b=(v.utcOffset()-this.utcOffset())*t,y=this-v,w=function(){return k.m(m,v)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(y-b)/6048e5;break;case s:p=(y-b)/864e5;break;case a:p=y/n;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:k.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),B=I.prototype;return F.prototype=B,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,I,F),e.$i=!0),F},F.locale=S,F.isDayjs=$,F.unix=function(e){return F(1e3*e)},F.en=w[y],F.Ls=w,F.p={},F}();var br,yr,wr,xr=ae(vr.exports);!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(br||(br={})),function(e){e.AM="AM",e.PM="PM"}(yr||(yr={})),function(e){e.roundToNearestHour=(e,t)=>{const n=xr(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let o=xr(e,r),i=xr(t,r);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(n)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:yr.AM};if(!t)return n;try{if("24hr"===e){const r=Fr(t,e);n.minute=br.padValue(r.minute);const o=parseInt(r.hour);0===Math.floor(o/12)?(n.period=yr.AM,n.hour=0===o?"12":br.padValue(o.toString())):(n.period=yr.PM,n.hour=12===o?o.toString():br.padValue((o-12).toString()))}else{const r=Fr(t,e);n.hour=br.padValue(r.hour),n.minute=br.padValue(r.minute),n.period="am"===r.period.toLowerCase()?yr.AM:yr.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?br.padValue("0"):"55";const r=Math.floor(n/5),o=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return br.padValue((5*o).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?br.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?br.padValue(r.toString()):13===r?br.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===yr.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return br.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Fr(e,t),r=br.padValue(n.hour);let o=`${r}:${br.padValue(n.minute)}`;return"12hr"===t?(o+=n.period.toLowerCase(),o):o}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,o]=t.split(":").map(Number);let i=r;return"pm"===n&&i<12&&(i+=12),"am"===n&&12===i&&(i=0),kr(i,o)}return e},e.generateTimings=(t,n="12hr",r,o)=>{const i=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=kr(e,r,t);i.push(n)}else{const t=kr(e,r);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let o=parseInt(r[1]||"0",10);const i=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),kr(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return kr(o,i,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let o="",i=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<i)i=Math.abs(n),o=t;else if(n>0)break}return o},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,o]=t.split(":").map(Number);let i=r;return"pm"===n&&12!==i&&(i+=12),"am"===n&&12===i&&(i=0),60*i+o}}(wr||(wr={}));const $r=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Sr=e=>{const t=parseInt(e);return t>=0&&t<=59},Fr=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),i=n[1].substring(2);if(!$r(n[0],t)||!Sr(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!$r(n[0],t)||!Sr(n[1]))throw r;return{hour:n[0],minute:n[1]};var o},kr=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var Ir=function(e,t){return Ir=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ir(e,t)};var Br=function(){return Br=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Br.apply(this,arguments)};var Tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Or=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Cr="object"==typeof Tr&&Tr&&Tr.Object===Object&&Tr,Dr="object"==typeof self&&self&&self.Object===Object&&self,Hr=Cr||Dr||Function("return this")(),_r=Hr,Er=function(){return _r.Date.now()},zr=/\s/;var Mr=function(e){for(var t=e.length;t--&&zr.test(e.charAt(t)););return t},Ar=/^\s+/;var Rr=function(e){return e?e.slice(0,Mr(e)+1).replace(Ar,""):e},jr=Hr.Symbol,Pr=jr,Lr=Object.prototype,Nr=Lr.hasOwnProperty,Wr=Lr.toString,Vr=Pr?Pr.toStringTag:void 0;var Yr=function(e){var t=Nr.call(e,Vr),n=e[Vr];try{e[Vr]=void 0;var r=!0}catch(e){}var o=Wr.call(e);return r&&(t?e[Vr]=n:delete e[Vr]),o},Ur=Object.prototype.toString;var qr=Yr,Gr=function(e){return Ur.call(e)},Zr=jr?jr.toStringTag:void 0;var Jr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zr&&Zr in Object(e)?qr(e):Gr(e)},Qr=function(e){return null!=e&&"object"==typeof e};var Xr=Rr,Kr=Or,eo=function(e){return"symbol"==typeof e||Qr(e)&&"[object Symbol]"==Jr(e)},to=/^[-+]0x[0-9a-f]+$/i,no=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,oo=parseInt;var io=Or,ao=Er,so=function(e){if("number"==typeof e)return e;if(eo(e))return NaN;if(Kr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xr(e);var n=no.test(e);return n||ro.test(e)?oo(e.slice(2),n?2:8):to.test(e)?NaN:+e},lo=Math.max,co=Math.min;var uo=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=ao();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?co(n,i-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=o=void 0,a)}function v(){var e=ao(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=so(t)||0,io(n)&&(u=!!n.leading,i=(d="maxWait"in n)?lo(so(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},v.flush=function(){return void 0===s?a:g(ao())},v},ho=uo,fo=Or;var po=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fo(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ho(e,t,{leading:r,maxWait:t,trailing:o})},mo=function(e,t,n,r){switch(t){case"debounce":return uo(e,n,r);case"throttle":return po(e,n,r);default:return e}},go=function(e){return"function"==typeof e},vo=function(){return"undefined"==typeof window},bo=function(e){return e instanceof Element||e instanceof HTMLDocument},yo=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&go(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!vo()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(vo())return null;if(t)return document.querySelector(t);if(r&&bo(r))return r;if(n.targetRef&&bo(n.targetRef.current))return n.targetRef.current;var o=T(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=yo(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!vo()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return go(t)?"renderProp":go(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,vo()||(n.resizeHandler=mo(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Ir(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){vo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return u(e,c)}return u(e,l);case"childArray":return(e=o).map((function(e){return!!e&&u(e,l)}));default:return r.createElement(a,null)}}}(d);var wo=vo()?a:h;function xo(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=i(n),v=i(null),b=null!=f?f:v,y=i(),w=s({width:void 0,height:void 0}),x=w[0],$=w[1];return wo((function(){if(!vo()){var e=yo(m,$,u,h);y.current=mo((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!vo()&&e({width:r,height:o}),g.current=!1}))}),r,a,l);var t=new window.ResizeObserver(y.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,a,l,u,h,m,p,b.current]),Br({ref:b},x)}var $o=Object.defineProperty,So={};((e,t)=>{for(var n in t)$o(e,n,{get:t[n],enumerable:!0})})(So,{assign:()=>ni,colors:()=>Ko,createStringInterpolator:()=>Zo,skipAnimation:()=>ei,to:()=>Jo,willAdvance:()=>ti});var Fo=Po(),ko=e=>Mo(e,Fo),Io=Po();ko.write=e=>Mo(e,Io);var Bo=Po();ko.onStart=e=>Mo(e,Bo);var To=Po();ko.onFrame=e=>Mo(e,To);var Oo=Po();ko.onFinish=e=>Mo(e,Oo);var Co=[];ko.setTimeout=(e,t)=>{const n=ko.now()+t,r=()=>{const e=Co.findIndex((e=>e.cancel==r));~e&&Co.splice(e,1),Eo-=~e?1:0},o={time:n,handler:e,cancel:r};return Co.splice(Do(n),0,o),Eo+=1,Ao(),o};var Do=e=>~(~Co.findIndex((t=>t.time>e))||~Co.length);ko.cancel=e=>{Bo.delete(e),To.delete(e),Oo.delete(e),Fo.delete(e),Io.delete(e)},ko.sync=e=>{zo=!0,ko.batchedUpdates(e),zo=!1},ko.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ko.onStart(n)}return r.handler=e,r.cancel=()=>{Bo.delete(n),t=null},r};var Ho="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ko.use=e=>Ho=e,ko.now="undefined"!=typeof performance?()=>performance.now():Date.now,ko.batchedUpdates=e=>e(),ko.catch=console.error,ko.frameLoop="always",ko.advance=()=>{"demand"!==ko.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):jo()};var _o=-1,Eo=0,zo=!1;function Mo(e,t){zo?(t.delete(e),e(0)):(t.add(e),Ao())}function Ao(){_o<0&&(_o=0,"demand"!==ko.frameLoop&&Ho(Ro))}function Ro(){~_o&&(Ho(Ro),ko.batchedUpdates(jo))}function jo(){const e=_o;_o=ko.now();const t=Do(_o);t&&(Lo(Co.splice(0,t),(e=>e.handler())),Eo-=t),Eo?(Bo.flush(),Fo.flush(e?Math.min(64,_o-e):16.667),To.flush(),Io.flush(),Oo.flush()):_o=-1}function Po(){let e=new Set,t=e;return{add(n){Eo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Eo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Eo-=t.size,Lo(t,(t=>t(n)&&e.add(t))),Eo+=e.size,t=e)}}}function Lo(e,t){e.forEach((e=>{try{t(e)}catch(e){ko.catch(e)}}))}function No(){}var Wo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Vo(e,t){if(Wo.arr(e)){if(!Wo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Yo=(e,t)=>e.forEach(t);function Uo(e,t,n){if(Wo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var qo=e=>Wo.und(e)?[]:Wo.arr(e)?e:[e];function Go(e,t){if(e.size){const n=Array.from(e);e.clear(),Yo(n,t)}}var Zo,Jo,Qo=(e,...t)=>Go(e,(e=>e(...t))),Xo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ko=null,ei=!1,ti=No,ni=e=>{e.to&&(Jo=e.to),e.now&&(ko.now=e.now),void 0!==e.colors&&(Ko=e.colors),null!=e.skipAnimation&&(ei=e.skipAnimation),e.createStringInterpolator&&(Zo=e.createStringInterpolator),e.requestAnimationFrame&&ko.use(e.requestAnimationFrame),e.batchedUpdates&&(ko.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ti=e.willAdvance),e.frameLoop&&(ko.frameLoop=e.frameLoop)},ri=new Set,oi=[],ii=[],ai=0,si={get idle(){return!ri.size&&!oi.length},start(e){ai>e.priority?(ri.add(e),ko.onStart(li)):(ci(e),ko(di))},advance:di,sort(e){if(ai)ko.onFrame((()=>si.sort(e)));else{const t=oi.indexOf(e);~t&&(oi.splice(t,1),ui(e))}},clear(){oi=[],ri.clear()}};function li(){ri.forEach(ci),ri.clear(),ko(di)}function ci(e){oi.includes(e)||ui(e)}function ui(e){oi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(oi,(t=>t.priority>e.priority)),0,e)}function di(e){const t=ii;for(let n=0;n<oi.length;n++){const r=oi[n];ai=r.priority,r.idle||(ti(r),r.advance(e),r.idle||t.push(r))}return ai=0,(ii=oi).length=0,(oi=t).length>0}var hi="[-+]?\\d*\\.?\\d+",fi=hi+"%";function pi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var mi=new RegExp("rgb"+pi(hi,hi,hi)),gi=new RegExp("rgba"+pi(hi,hi,hi,hi)),vi=new RegExp("hsl"+pi(hi,fi,fi)),bi=new RegExp("hsla"+pi(hi,fi,fi,hi)),yi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xi=/^#([0-9a-fA-F]{6})$/,$i=/^#([0-9a-fA-F]{8})$/;function Si(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Fi(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Si(o,r,e+1/3),a=Si(o,r,e),s=Si(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ki(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ii(e){return(parseFloat(e)%360+360)%360/360}function Bi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ko&&void 0!==Ko[e]?Ko[e]:(t=mi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|255)>>>0:(t=gi.exec(e))?(ki(t[1])<<24|ki(t[2])<<16|ki(t[3])<<8|Bi(t[4]))>>>0:(t=yi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$i.exec(e))?parseInt(t[1],16)>>>0:(t=wi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=vi.exec(e))?(255|Fi(Ii(t[1]),Ti(t[2]),Ti(t[3])))>>>0:(t=bi.exec(e))?(Fi(Ii(t[1]),Ti(t[2]),Ti(t[3]))|Bi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ci=(e,t,n)=>{if(Wo.fun(e))return e;if(Wo.arr(e))return Ci({range:e,output:t,extrapolate:n});if(Wo.str(e.output[0]))return Zo(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,o,i,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===o)return r;if(t===n)return e<=t?r:o;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:o===1/0?c+=r:c=c*(o-r)+r;return c}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,r.map)}};var Di=1.70158,Hi=1.525*Di,_i=Di+1,Ei=2*Math.PI/3,zi=2*Math.PI/4.5,Mi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_i*e*e*e-Di*e*e,easeOutBack:e=>1+_i*Math.pow(e-1,3)+Di*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Hi)/2:(Math.pow(2*e-2,2)*((Hi+1)*(2*e-2)+Hi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ei),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ei)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zi)/2+1,easeInBounce:e=>1-Mi(1-e),easeOutBounce:Mi,easeInOutBounce:e=>e<.5?(1-Mi(1-2*e))/2:(1+Mi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,o="end"===t?Math.floor(r):Math.ceil(r);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},Ri=Symbol.for("FluidValue.get"),ji=Symbol.for("FluidValue.observers"),Pi=e=>Boolean(e&&e[Ri]),Li=e=>e&&e[Ri]?e[Ri]():e,Ni=e=>e[ji]||null;function Wi(e,t){const n=e[ji];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Vi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Yi(this,e)}},Yi=(e,t)=>Zi(e,Ri,t);function Ui(e,t){if(e[Ri]){let n=e[ji];n||Zi(e,ji,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function qi(e,t){const n=e[ji];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ji]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Gi,Zi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ji=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Qi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xi=new RegExp(`(${Ji.source})(%|[a-z]+)`,"i"),Ki=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ea=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ta=e=>{const[t,n]=na(e);if(!t||Xo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&ea.test(n)?ta(n):n||e},na=e=>{const t=ea.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},ra=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,oa=e=>{Gi||(Gi=Ko?new RegExp(`(${Object.keys(Ko).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Li(e).replace(ea,ta).replace(Qi,Oi).replace(Gi,Oi))),n=t.map((e=>e.match(Ji).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ci({...e,output:t})));return e=>{const n=!Xi.test(t[0])&&t.find((e=>Xi.test(e)))?.replace(Ji,"");let o=0;return t[0].replace(Ji,(()=>`${r[o++](e)}${n||""}`)).replace(Ki,ra)}},ia="react-spring: ",aa=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${ia}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},sa=aa(console.warn);var la=aa(console.warn);function ca(e){return Wo.str(e)&&("#"==e[0]||/\d/.test(e)||!Xo()&&ea.test(e)||e in(Ko||{}))}var ua=Xo()?a:h,da=()=>{const e=i(!1);return ua((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ha(){const e=s()[1],t=da();return()=>{t.current&&e(Math.random())}}var fa=e=>a(e,pa),pa=[];function ma(e){const t=i();return a((()=>{t.current=e})),t.current}var ga=Symbol.for("Animated:node"),va=e=>e&&e[ga],ba=(e,t)=>{return n=e,r=ga,o=t,Object.defineProperty(n,r,{value:o,writable:!0,configurable:!0});var n,r,o},ya=e=>e&&e[ga]&&e[ga].getPayload(),wa=class{constructor(){ba(this,this)}getPayload(){return this.payload||[]}},xa=class extends wa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Wo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new xa(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Wo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Wo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},$a=class extends xa{constructor(e){super(0),this._string=null,this._toString=Ci({output:[e,e]})}static create(e){return new $a(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Wo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ci({output:[this.getValue(),e]})),this._value=0,super.reset()}},Sa={dependencies:null},Fa=class extends wa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Uo(this.source,((n,r)=>{var o;(o=n)&&o[ga]===o?t[r]=n.getValue(e):Pi(n)?t[r]=Li(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Yo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Uo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Sa.dependencies&&Pi(e)&&Sa.dependencies.add(e);const t=ya(e);t&&Yo(t,(e=>this.add(e)))}},ka=class extends Fa{constructor(e){super(e)}static create(e){return new ka(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ia)),!0)}};function Ia(e){return(ca(e)?$a:xa).create(e)}function Ba(e){const t=va(e);return t?t.constructor:Wo.arr(e)?ka:ca(e)?$a:xa}var Ta=(e,t)=>{const n=!Wo.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((o,s)=>{const l=i(null),c=n&&p((e=>{l.current=function(e,t){e&&(Wo.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[u,d]=function(e,t){const n=new Set;Sa.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Fa(e),Sa.dependencies=null,[e,n]}(o,t),h=ha(),f=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},m=new Oa(f,d),g=i();ua((()=>(g.current=m,Yo(d,(e=>Ui(e,m))),()=>{g.current&&(Yo(g.current.deps,(e=>qi(e,g.current))),ko.cancel(g.current.update))}))),a(f,[]),fa((()=>()=>{const e=g.current;Yo(e.deps,(t=>qi(t,e)))}));const v=t.getComponentProps(u.getValue());return r.createElement(e,{...v,ref:c})}))},Oa=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ko.write(this.update)}};var Ca=Symbol.for("AnimatedComponent"),Da=e=>Wo.str(e)?e:e&&Wo.str(e.displayName)?e.displayName:Wo.fun(e)&&e.name||null;function Ha(e,...t){return Wo.fun(e)?e(...t):e}var _a=(e,t)=>!0===e||!!(t&&e&&(Wo.fun(e)?e(t):qo(e).includes(t))),Ea=(e,t)=>Wo.obj(e)?t&&e[t]:e,za=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ma=e=>e,Aa=(e,t=Ma)=>{let n=Ra;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const n=t(e[o],o);Wo.und(n)||(r[o]=n)}return r},Ra=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ja={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Pa(e){const t=function(e){const t={};let n=0;if(Uo(e,((e,r)=>{ja[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Uo(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function La(e){return e=Li(e),Wo.arr(e)?e.map(La):ca(e)?So.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Na(e){return Wo.fun(e)||Wo.arr(e)&&Wo.obj(e[0])}var Wa={tension:170,friction:26,mass:1,damping:1,easing:Ai.linear,clamp:!1},Va=class{constructor(){this.velocity=0,Object.assign(this,Wa)}};function Ya(e,t){if(Wo.und(t.decay)){const n=!Wo.und(t.tension)||!Wo.und(t.friction);!n&&Wo.und(t.frequency)&&Wo.und(t.damping)&&Wo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Ua=[],qa=class{constructor(){this.changed=!1,this.values=Ua,this.toValues=null,this.fromValues=Ua,this.config=new Va,this.immediate=!1}};function Ga(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise(((a,s)=>{let l,c,u=_a(n.cancel??r?.cancel,t);if(u)f();else{Wo.und(n.pause)||(o.paused=_a(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||_a(e,t)),l=Ha(n.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){o.resumeQueue.add(h),o.timeouts.delete(c),c.cancel(),l=c.time-ko.now()}function h(){l>0&&!So.skipAnimation?(o.delayed=!0,c=ko.setTimeout(f,l),o.pauseQueue.add(d),o.timeouts.add(c)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(c),e<=(o.cancelId||0)&&(u=!0);try{i.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Za=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Xa(e.get()):t.every((e=>e.noop))?Ja(e.get()):Qa(e.get(),t.every((e=>e.finished))),Ja=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Qa=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Xa=e=>({value:e,cancelled:!0,finished:!1});function Ka(e,t,n,r){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=Aa(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=o<=(n.cancelId||0)&&Xa(r)||o!==n.asyncId&&Qa(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new ts,a=new ns;return(async()=>{if(So.skipAnimation)throw es(n),a.result=Qa(r,!1),d(a),a;f(i);const s=Wo.obj(e)?{...e}:{...t,to:e};s.parentId=o,Uo(c,((e,t)=>{Wo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(So.skipAnimation)return es(n),Qa(r,!1);try{let t;t=Wo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=Qa(r.get(),!0,!1)}catch(e){if(e instanceof ts)m=e.result;else{if(!(e instanceof ns))throw e;m=e.result}}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return Wo.fun(a)&&ko.batchedUpdates((()=>{a(m,r,r.item)})),m})():l}function es(e,t){Go(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ts=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},ns=class extends Error{constructor(){super("SkipAnimationSignal")}},rs=e=>e instanceof is,os=1,is=class extends Vi{constructor(){super(...arguments),this.id=os++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=va(this);return e&&e.getValue()}to(...e){return So.to(this,e)}interpolate(...e){return sa(`${ia}The "interpolate" function is deprecated in v9 (use "to" instead)`),So.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Wi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||si.sort(this),Wi(this,{type:"priority",parent:this,priority:e})}},as=Symbol.for("SpringPhase"),ss=e=>(1&e[as])>0,ls=e=>(2&e[as])>0,cs=e=>(4&e[as])>0,us=(e,t)=>t?e[as]|=3:e[as]&=-3,ds=(e,t)=>t?e[as]|=4:e[as]&=-5,hs=class extends is{constructor(e,t){if(super(),this.animation=new qa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Wo.und(e)||!Wo.und(t)){const n=Wo.obj(e)?{...e}:{...t,from:e};Wo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ls(this)||this._state.asyncTo)||cs(this)}get goal(){return Li(this.animation.to)}get velocity(){const e=va(this);return e instanceof xa?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ss(this)}get isAnimating(){return ls(this)}get isPaused(){return cs(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:o}=r;const{config:i}=r,a=ya(r.to);!a&&Pi(r.to)&&(o=qo(Li(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==$a?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Wo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Wo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Wo.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,v=Math.ceil(e/g);for(let e=0;e<v&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=va(this),l=s.getValue();if(t){const e=Li(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ko.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ls(this)){const{to:e,config:t}=this.animation;ko.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Wo.und(e)?(n=this.queue||[],this.queue=[]):n=[Wo.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Za(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),es(this._state,e&&this._lastCallId),ko.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Wo.obj(n)?n[t]:n,(null==n||Na(n))&&(n=void 0),r=Wo.obj(r)?r[t]:r,null==r&&(r=void 0);const o={to:n,from:r};return ss(this)||(e.reverse&&([n,r]=[r,n]),r=Li(r),Wo.und(r)?va(this)||this._set(n):this._set(r)),o}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Aa(e,((e,t)=>/^on/.test(t)?Ea(e,n):e))),ys(this,e,"onProps"),ws(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ga(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{cs(this)||(ds(this,!0),Qo(i.pauseQueue),ws(this,"onPause",Qa(this,fs(this,this.animation.to)),this))},resume:()=>{cs(this)&&(ds(this,!1),ls(this)&&this._resume(),Qo(i.resumeQueue),ws(this,"onResume",Qa(this,fs(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ps(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Xa(this));const r=!Wo.und(e.to),o=!Wo.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(Xa(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!o||r||t.default&&!Wo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Vo(d,c);h&&(s.from=d),d=Li(d);const f=!Vo(u,l);f&&this._focus(u);const p=Na(t.to),{config:m}=s,{decay:g,velocity:v}=m;(r||o)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ya(n={...n},t),t={...n,...t}),Ya(e,t),Object.assign(e,t);for(const t in Wa)null==e[t]&&(e[t]=Wa[t]);let{frequency:r,damping:o}=e;const{mass:i}=e;Wo.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,Ha(t.config,i),t.config!==a.config?Ha(a.config,i):void 0);let b=va(this);if(!b||Wo.und(u))return n(Qa(this,!0));const y=Wo.und(t.reset)?o&&!t.default:!Wo.und(d)&&_a(t.reset,i),w=y?d:this.get(),x=La(u),$=Wo.num(x)||Wo.arr(x)||ca(x),S=!p&&(!$||_a(a.immediate||t.immediate,i));if(f){const e=Ba(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(x)}}const F=b.constructor;let k=Pi(u),I=!1;if(!k){const e=y||!ss(this)&&h;(f||e)&&(I=Vo(La(w),x),k=!I),(Vo(s.immediate,S)||S)&&Vo(m.decay,g)&&Vo(m.velocity,v)||(k=!0)}if(I&&ls(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Pi(l))&&(s.values=b.getPayload(),s.toValues=Pi(u)?null:F==$a?[1]:qo(x)),s.immediate!=S&&(s.immediate=S,S||y||this._set(l)),k)){const{onRest:e}=s;Yo(bs,(e=>ys(this,t,e)));const r=Qa(this,fs(this,l));Qo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ko.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?Ha(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(w),p?n(Ka(t.to,t,this._state,this)):k?this._start():ls(this)&&!f?this._pendingCalls.add(n):n(Ja(w))}_focus(e){const t=this.animation;e!==t.to&&(Ni(this)&&this._detach(),t.to=e,Ni(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pi(t)&&(Ui(t,this),rs(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pi(e)&&qi(e,this)}_set(e,t=!0){const n=Li(e);if(!Wo.und(n)){const e=va(this);if(!e||!Vo(n,e.getValue())){const r=Ba(n);e&&e.constructor==r?e.setValue(n):ba(this,r.create(n)),e&&ko.batchedUpdates((()=>{this._onChange(n,t)}))}}return va(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ws(this,"onStart",Qa(this,fs(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ha(this.animation.onChange,e,this)),Ha(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;va(this).reset(Li(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ls(this)||(us(this,!0),cs(this)||this._resume())}_resume(){So.skipAnimation?this.finish():si.start(this)}_stop(e,t){if(ls(this)){us(this,!1);const n=this.animation;Yo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Wi(this,{type:"idle",parent:this});const r=t?Xa(this.get()):Qa(this.get(),fs(this,e??n.to));Qo(this._pendingCalls,r),n.changed&&(n.changed=!1,ws(this,"onRest",r,this))}}};function fs(e,t){const n=La(t);return Vo(La(e.get()),n)}function ps(e,t=e.loop,n=e.to){const r=Ha(t);if(r){const o=!0!==r&&Pa(r),i=(o||e).reverse,a=!o||o.reset;return ms({...e,loop:t,default:!1,pause:void 0,to:!i||Na(n)?n:void 0,from:a?e.from:void 0,reset:a,...o})}}function ms(e){const{to:t,from:n}=e=Pa(e),r=new Set;return Wo.obj(t)&&vs(t,r),Wo.obj(n)&&vs(n,r),e.keys=r.size?Array.from(r):null,e}function gs(e){const t=ms(e);return Wo.und(t.default)&&(t.default=Aa(t)),t}function vs(e,t){Uo(e,((e,n)=>null!=e&&t.add(n)))}var bs=["onStart","onRest","onChange","onPause","onResume"];function ys(e,t,n){e.animation[n]=t[n]!==za(t,n)?Ea(t[n],e.key):void 0}function ws(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var xs=["onStart","onChange","onRest"],$s=1,Ss=class{constructor(e,t){this.id=$s++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Wo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ms(e)),this}start(e){let{queue:t}=this;return e?t=qo(e).map(ms):this.queue=[],this._flush?this._flush(this,t):(Cs(this,t),Fs(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Yo(qo(t),(t=>n[t].stop(!!e)))}else es(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Wo.und(e))this.start({pause:!0});else{const t=this.springs;Yo(qo(e),(e=>t[e].pause()))}return this}resume(e){if(Wo.und(e))this.start({pause:!1});else{const t=this.springs;Yo(qo(e),(e=>t[e].resume()))}return this}each(e){Uo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,Go(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&Go(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,Go(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ko.onFrame(this._onFrame)}};function Fs(e,t){return Promise.all(t.map((t=>ks(e,t)))).then((t=>Za(e,t)))}async function ks(e,t,n){const{keys:r,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,c=Wo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const u=Wo.arr(o)||Wo.fun(o)?o:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Yo(xs,(n=>{const r=t[n];if(Wo.fun(r)){const o=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Qo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===za(t,"cancel");(u||f&&d.asyncId)&&h.push(Ga(++e._lastAsyncId,{props:t,state:d,actions:{pause:No,resume:No,start(t,n){f?(es(d,e._lastAsyncId),n(Xa(e))):(t.onRest=s,n(Ka(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Za(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=ps(t,a,o);if(n)return Cs(e,[n]),ks(e,n,!0)}return l&&ko.batchedUpdates((()=>l(p,e,e.item))),p}function Is(e,t){const n={...e.springs};return t&&Yo(qo(t),(e=>{Wo.und(e.keys)&&(e=ms(e)),Wo.obj(e.to)||(e={...e,to:void 0}),Os(n,e,(e=>Ts(e)))})),Bs(e,n),n}function Bs(e,t){Uo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ui(t,e))}))}function Ts(e,t){const n=new hs;return n.key=e,t&&Ui(n,t),n}function Os(e,t,n){t.keys&&Yo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Cs(e,t){Yo(t,(t=>{Os(e.springs,t,(t=>Ts(t,e)))}))}var Ds,Hs,_s=({children:e,...t})=>{const n=m(Es),o=t.pause||!!n.pause,l=t.immediate||!!n.immediate;t=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=i(),o=r.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return a((()=>{r.current=l,o==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=Es;return r.createElement(c,{value:t},e)},Es=(Ds=_s,Hs={},Object.assign(Ds,r.createContext(Hs)),Ds.Provider._context=Ds,Ds.Consumer._context=Ds,Ds);_s.Provider=Es.Provider,_s.Consumer=Es.Consumer;var zs=()=>{const e=[],t=function(t){la(`${ia}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Yo(e,((e,o)=>{if(Wo.und(t))r.push(e.start());else{const i=n(t,e,o);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Yo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Yo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Yo(e,((e,n)=>{const r=Wo.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Yo(e,((e,r)=>{if(Wo.und(t))n.push(e.start());else{const o=this._getProps(t,e,r);o&&n.push(e.start(o))}})),n},t.stop=function(){return Yo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Yo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Wo.fun(e)?e(n,t):e};return t._getProps=n,t};function Ms(e,t){const n=Wo.fun(e),[[r],o]=function(e,t,n){const r=Wo.fun(t)&&t;r&&!n&&(n=[]);const o=g((()=>r||3==arguments.length?zs():void 0),[]),a=i(0),s=ha(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Is(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Fs(e,t):new Promise((r=>{Bs(e,n),l.queue.push((()=>{r(Fs(e,t))})),s()}))}})),[]),c=i([...l.ctrls]),u=[],d=ma(e)||0;function h(e,n){for(let o=e;o<n;o++){const e=c.current[o]||(c.current[o]=new Ss(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=gs(n))}}g((()=>{Yo(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>Is(e,u[t]))),p=m(_s),v=ma(p),b=p!==v&&function(e){for(const t in e)return!0;return!1}(p);ua((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Yo(e,(e=>e()))),Yo(c.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),fa((()=>()=>{Yo(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return o?[y,o]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}var As=class extends is{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ci(...t);const n=this._get(),r=Ba(n);ba(this,r.create(n))}advance(e){const t=this._get();Vo(t,this.get())||(va(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&js(this._active)&&Ps(this)}_get(){const e=Wo.arr(this.source)?this.source.map(Li):qo(Li(this.source));return this.calc(...e)}_start(){this.idle&&!js(this._active)&&(this.idle=!1,Yo(ya(this),(e=>{e.done=!1})),So.skipAnimation?(ko.batchedUpdates((()=>this.advance())),Ps(this)):si.start(this))}_attach(){let e=1;Yo(qo(this.source),(t=>{Pi(t)&&Ui(t,this),rs(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Yo(qo(this.source),(e=>{Pi(e)&&qi(e,this)})),this._active.clear(),Ps(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=qo(this.source).reduce(((e,t)=>Math.max(e,(rs(t)?t.priority:0)+1)),0))}};function Rs(e){return!1!==e.idle}function js(e){return!e.size||Array.from(e).every(Rs)}function Ps(e){e.idle||(e.idle=!0,Yo(ya(e),(e=>{e.done=!0})),Wi(e,{type:"idle",parent:e}))}So.assign({createStringInterpolator:oa,to:(e,t)=>new As(e,t)});var Ls=/^--/;function Ns(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ls.test(e)||Vs.hasOwnProperty(e)&&Vs[e]?(""+t).trim():t+"px"}var Ws={};var Vs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ys=["Webkit","Ms","Moz","O"];Vs=Object.keys(Vs).reduce(((e,t)=>(Ys.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Vs);var Us=/^(matrix|translate|scale|rotate|skew)/,qs=/^(translate)/,Gs=/^(rotate|skew)/,Zs=(e,t)=>Wo.num(e)&&0!==e?e+t:e,Js=(e,t)=>Wo.arr(e)?e.every((e=>Js(e,t))):Wo.num(e)?e===t:parseFloat(e)===t,Qs=class extends Fa{constructor({x:e,y:t,z:n,...r}){const o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push((e=>[`translate3d(${e.map((e=>Zs(e,"px"))).join(",")})`,Js(e,0)]))),Uo(r,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(Us.test(t)){if(delete r[t],Wo.und(e))return;const n=qs.test(t)?"px":Gs.test(t)?"deg":"";o.push(qo(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${Zs(o,n)})`,Js(o,0)]:e=>[`${t}(${e.map((e=>Zs(e,n))).join(",")})`,Js(e,t.startsWith("scale")?1:0)])}})),o.length&&(r.transform=new Xs(o,i)),super(r)}},Xs=class extends Vi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Yo(this.inputs,((n,r)=>{const o=Li(n[0]),[i,a]=this.transforms[r](Wo.arr(o)?o:n.map(Li));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Yo(this.inputs,(e=>Yo(e,(e=>Pi(e)&&Ui(e,this)))))}observerRemoved(e){0==e&&Yo(this.inputs,(e=>Yo(e,(e=>Pi(e)&&qi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Wi(this,e)}};So.assign({batchedUpdates:O,createStringInterpolator:oa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ks=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Fa(e)),getComponentProps:r=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=Da(e)||"Anonymous";return(e=Wo.str(e)?i[e]||(i[e]=Ta(e,o)):e[Ca]||(e[Ca]=Ta(e,o))).displayName=`Animated(${t})`,e};return Uo(e,((t,n)=>{Wo.arr(e)&&(n=Da(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:o,scrollTop:i,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Ws[t]||(Ws[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(const t in r)if(r.hasOwnProperty(t)){const n=Ns(t,r[t]);Ls.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Qs(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),el=Ks.animated;const tl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nl=e=>Object.keys(tl).reduce(((t,n)=>{const r=tl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),rl=nl("max-width"),ol=(nl("min-width"),tl),il=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,al=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sl=w.div`
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
    animation: ${al} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ll=w(sl)`
    animation-delay: -0.45s;
`,cl=w(sl)`
    animation-delay: -0.3s;
`,ul=w(sl)`
    animation-delay: -0.15s;
`,dl=w.button`
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

                    ${rl.mobileL} {
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

                    ${rl.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    ${Kn("H4","semibold")}

                    ${rl.mobileS} {
                        height: auto;
                    }
                `}
`,hl=w((({color:n,className:r,size:o=18})=>e(il,Object.assign({className:r,$size:o,$color:n},{children:[t(sl,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(ll,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(cl,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(ul,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Pn.Button.Danger.Primary:Dn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Dn.Neutral[3](e);break;default:t=Dn.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,fl={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=re(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(dl,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(hl,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=re(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(dl,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(hl,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},pl=w.div`
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
`,ml=({type:e,active:n=!1,disabled:r,className:o})=>{let i;switch(e){case"checkbox":i=t(n?E:_,{});break;case"radio":i=t(n?D:C,{});break;case"tick":i=t(z,{});break;case"cross":i=t(H,{});break;default:i=null}return t(pl,Object.assign({className:o,$active:n,disabled:r},{children:i}))};var gl={exports:{}};gl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(o||i?1:f.getDate()),m=o||f.getFullYear(),g=0;o&&!i||(g=i>0?i-1:f.getMonth());var v=s||0,b=l||0,y=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,v,b,y,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,v,b,y,w)):new Date(m,g,p,v,b,y,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var vl=ae(gl.exports),bl={exports:{}};bl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var yl=ae(bl.exports),wl={exports:{}};wl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var xl=ae(wl.exports),$l={exports:{}};$l.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Sl,Fl,kl,Il=ae($l.exports),Bl={exports:{}},Tl=ae(Bl.exports=(Sl={year:0,month:1,day:2,hour:3,minute:4,second:5},Fl={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Fl[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fl[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Sl[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));xr.extend(yl),xr.extend(Il),xr.extend(xl),xr.extend(vl),xr.extend(Tl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=xr(t).startOf("week");return Ol(n).map((e=>Cl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Cl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(xr(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?xr(r):void 0,o?xr(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(kl||(kl={}));const Ol=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Cl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Dl=[1,3,5,7,8,10,12],Hl=[4,6,9,11];var _l,El,zl;function Ml(e){const t=i(null);return h((()=>{t.current=e}),[e]),p(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Dl.includes(i)?Math.min(o,31).toString():Hl.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=xr(e,n);return xr(t,n).diff(r,"minute")},e.toDayjs=e=>e?xr(e):xr(),e.addMinutesToTime=(e,t,n="HH:mm")=>xr(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>xr(e).isSame(xr(t),n)}(_l||(_l={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!xr(e).isBefore(r,"day"))||!(!o||!xr(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(xr(e).isValid())return e}return""}}(El||(El={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zl||(zl={}));const Al=e=>{const t=(e=>{const t=i(e),n=i();return a((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Rl=e=>{const{textSize:t}=e||{};return x`
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
    `},jl=w.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Dn.Validation.Red.Background(e),n=Dn.Validation.Red.Border(e);break;case"success":t=Dn.Validation.Green.Background(e),n=Dn.Validation.Green.Border(e);break;case"warning":default:t=Dn.Validation.Orange.Background(e),n=Dn.Validation.Orange.Border(e);break;case"info":t=Dn.Validation.Blue.Background(e),n=Dn.Validation.Blue.Border(e);break;case"description":t=Dn.Neutral[7](e),n=Dn.Neutral[4](e)}return x`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Dn.Neutral[1]};
    ${e=>"small"===e.$sizeType?Rl({textSize:"H6"}):Rl({textSize:"BodySmall"})}
`,Pl=w.div`
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
`,Ll=w(tr.Hyperlink.Small)`
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
`,Nl=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Wl=w.div`
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
`,Yl=w(y)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Ul=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,ql=(w.ol`
    ${e=>Ul(e.bottomMargin)}
    margin-left: ${3}rem;

    ${rl.tablet} {
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
    ${e=>Ul(e.bottomMargin)}
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
`),Gl=e=>{var{size:n="Body",children:r}=e,o=re(e,["size","children"]);return t(ql,Object.assign({size:n},o,{children:r}))},Zl=w.div`
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
`,Jl=w.input`
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
`,Ql=w.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Xl=w.label`
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
    ${rl.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${rl.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Dn.Neutral[1]};

    ${e=>e.$disabled?x`
                color: ${Dn.Neutral[3]};
            `:e.$selected?x`
                color: ${Dn.Primary};
            `:void 0}
`,Kl=w.div`
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
`,ec=w.div`
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
`,tc=w.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,nc=w.button`
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Icon};
    white-space: nowrap;
    ${Kn("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,rc=w.button`
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
`,oc=w.div`
    width: 100%;
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ic=w((n=>{var{type:r,className:o,children:i,actionLink:l,actionLinkIcon:c,sizeType:u="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:f}=n,p=re(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,g]=s(!1),[v,b]=s(!1),{height:y,ref:w}=xo();a((()=>{x()}),[f,y]);const x=()=>{g(!f),b($())},$=()=>!!f&&y>f;return e(jl,Object.assign({className:o,$type:r,$sizeType:u,"data-testid":p["data-testid"]},{children:[d&&t(Pl,Object.assign({$sizeType:u,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return t(P,{});case"warning":return t(R,{});case"error":return t(A,{});case"info":case"description":return t(j,{});default:return null}})()})),e(Nl,{children:[e(Wl,Object.assign({$maxCollapsedHeight:$()?f:void 0,$showMore:m,$hasActionLink:!!l},{children:[t("div",Object.assign({ref:w},{children:i})),l&&e(Ll,Object.assign({"data-testid":"action-link",$type:r,$sizeType:u},l,{children:[l.children,c||t(M,{})]}))]})),v&&e(Vl,Object.assign({$sizeType:u,$type:r,type:"button",onClick:()=>g(!m)},{children:["Show ",m?"less":"more",t(Yl,{$expanded:m})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,ac=w.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Rl({textSize:"BodySmall"})}

    ${e=>e.$disabled?x`
                color: ${Dn.Neutral[3]};
            `:e.$selected?x`
                color: ${Dn.Primary};
            `:x`
                color: ${Dn.Neutral[1]};
            `}
`,sc=w(tr.BodySmall)`
    color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Text};
`,lc=w(Gl)`
    li {
        color: ${e=>e.$disabled?Dn.Neutral[3]:Dn.Validation.Red.Text};
    }
`,cc=w.button`
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
`,uc=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=re(e,["children","focusHighlight","focusOutline","type"]);return t(cc,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),dc=w(el.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Dn.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${rl.mobileS} {
        max-width: 100%;
    }
`,hc=w.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,fc=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${rl.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,pc=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${rl.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,mc=w.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${rl.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,gc=w.div`
    display: flex;
    gap: 0.5rem;

    ${rl.tablet} {
        flex-direction: column;
    }

    ${rl.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,vc=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${rl.mobileS} {
        width: 6rem;
    }
`,bc=w(uc)`
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
`,yc=w(tr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${rl.tablet} {
        margin: 0;
    }

    ${rl.mobileS} {
        margin: 0 0.25rem;
    }
`,wc=w(hr)`
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

    ${rl.mobileS} {
        width: 100%;
    }
`,xc=w((({type:r="checkbox",indicator:o,checked:l,styleType:c="default",children:u,childrenMaxLines:d,subLabel:h,disabled:f,error:p,name:m,id:v,className:b,compositeSection:y,removable:w,onRemove:x,"data-testid":$,onChange:S,useContentWidth:F})=>{const{collapsible:B=!0,errors:T,children:O,initialExpanded:C}=y||{},[D,H]=s(l),[_,E]=s(C),z=g((()=>{const e=Array.isArray(T)&&(null==T?void 0:T.length)>0,t=!Array.isArray(T)&&!!T;return e||t}),[T]),[M]=s(zl.generate()),A=v?`${v}`:`tg-${M}`,R=i();a((()=>{H(l)}),[l]),a((()=>{D&&E(null==C||C)}),[D]);const j=e=>{if(!f){if(S)return void S(e);switch(r){case"checkbox":H((e=>!e));break;case"radio":case"yes":case"no":D||H(!0)}}},P=()=>{f||E(!_)},L=()=>{f||!x||x()},N=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(ml,{type:e,active:D,disabled:f})},W=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Kl,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:D},{children:e}))},V=()=>{const n=!_&&!z;return B&&e(rc,Object.assign({$paddingTopRequired:n,disabled:f,onClick:P,"data-testid":_?"collapse-button":"expand-button"},{children:[_?"Show less":"Show more",t(_?I:k,{"aria-hidden":!0})]}))},Y=r=>e(n,{children:[t(sc,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(lc,Object.assign({$disabled:f},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${A}-error-list-item-${n}`},{children:t(sc,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),n)))}))]});return e(Zl,Object.assign({$selected:D,$disabled:f,className:b,$styleType:c,$error:p,$indicator:o,$useContentWidth:F,id:v,"data-testid":$},{children:[e(ec,Object.assign({id:`${A}-header-container`,$disabled:f,$error:p,$selected:D,$indicator:o,$styleType:c},{children:[e(tc,Object.assign({$addPadding:w},{children:[t(Jl,{ref:R,name:m,id:`${A}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:j,checked:D}),o&&N(),e(Ql,{children:[t(Xl,Object.assign({htmlFor:`${A}-input`,$selected:D,$indicator:o,$disabled:f,"data-testid":`${A}-toggle-label`,$maxLines:d},{children:u})),h&&W()]})]})),w&&t(nc,Object.assign({type:"button",$disabled:f,onClick:L,id:`${A}-remove-button`},{children:"Remove"}))]})),O&&e("div",{children:[(!B||_)&&t(ac,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!B,$disabled:f},{children:O})),B&&!_&&z&&t(oc,Object.assign({$disabled:f,onClick:P,id:`${A}-error-alert`},{children:t(ic,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(T)?Y(T):T}))})),V()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,$c=w(fl.Small)`
    width: 7rem;

    ${rl.mobileL} {
        flex: 1;
    }

    ${rl.mobileS} {
        width: 100%;
    }
`;var Sc,Fc,kc;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Sc||(Sc={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Fc||(Fc={})),function(e){e.AM="am",e.PM="pm"}(kc||(kc={}));const Ic=({id:n,value:r,show:o,format:l,onChange:c,onCancel:u})=>{const d=wr.getTimeValues(l,r),[h,f]=s(d.hour),[m,g]=s(d.minute),[v,b]=s(d.period),y=i(),w=i(),x=xo();a((()=>{if(o&&y.current&&y.current.focus(),o){const{hour:e,minute:t,period:n}=wr.getTimeValues(l,r);f(e),g(t),b(n)}}),[o,r,l]),a((()=>{const e=y.current,t=w.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case Sc.MINUTE_UP:g(wr.updateMinutes(m,"add"));break;case Sc.MINUTE_DOWN:g(wr.updateMinutes(m,"minus"));break;case Sc.HOUR_UP:f(wr.updateHours(h,"add"));break;case Sc.HOUR_DOWN:f(wr.updateHours(h,"minus"))}}),[h,m]),F=e=>{e.target.select()},B=e=>{const t=e.target.value;switch(e.target.name){case Fc.HOUR:t.length<=2&&f(t);break;case Fc.MINUTE:t.length<=2&&g(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Fc.HOUR:{const n=t>23||t<0?d.hour:wr.convertHourTo12HourFormat(e.target.value);f(n);break}case Fc.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;g(br.padValue(n));break}}},O=e=>{switch(e.target.name){case kc.AM:b(yr.AM);break;case kc.PM:b(yr.PM)}},C=e=>n?`${n}-${e}`:e,D=Ms({height:o?x.height+32:0});return t(dc,Object.assign({"data-testid":"animated-dropdown-wrapper",style:D},{children:e(hc,Object.assign({ref:x.ref,"data-testid":C("timepicker-dropdown"),inert:o?void 0:""},{children:[e(fc,{children:[e(mc,{children:[e(vc,{children:[t(bc,Object.assign({"aria-label":"increase hour",name:Sc.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":C("hour-increment-button")},{children:t(I,{})})),t(wc,{"aria-label":"hour",type:"number",name:Fc.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onFocus:F,onChange:B,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),t(bc,Object.assign({"aria-label":"decrease hour",name:Sc.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":C("hour-decrement-button")},{children:t(k,{})}))]}),t(yc,{children:":"}),e(vc,{children:[t(bc,Object.assign({"aria-label":"increase minute",name:Sc.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":C("minute-increment-button")},{children:t(I,{})})),t(wc,{"aria-label":"minute",type:"number",name:Fc.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:B,onBlur:T,onFocus:F,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),t(bc,Object.assign({"aria-label":"decrease minute",name:Sc.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":C("minute-decrement-button")},{children:t(k,{})}))]})]}),e(gc,{children:[t(xc,Object.assign({checked:v===yr.AM,name:kc.AM,type:"radio",onChange:O,"data-testid":C("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(xc,Object.assign({checked:v===yr.PM,name:kc.PM,type:"radio",onChange:O,"data-testid":C("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(pc,{children:[t($c,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":C("cancel-button")},{children:"Cancel"})),t($c,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===l?wr.convertTo24HourFormat({hour:h,minute:m,period:v}):`${h}:${m}${v}`,c(e)},disabled:""===h||""===m,"data-testid":C("confirm-button")},{children:"Done"}))]})]}))}))},Bc=n=>{var{id:r,disabled:o=!1,error:l,value:c,format:u="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,m=re(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[g,v]=s(!1),[b,y]=s(!1),[w,x]=s(""),[$,S]=s(""),F=i();a((()=>{c&&(x(c.start),S(c.end))}),[c]),oe("mousedown",(function(e){o||T(e)}),"document"),oe("keyup",(function(e){if("Tab"===e.code)T(e)}),"document");const k=()=>{B()},I=()=>{g||b||f&&f()},B=()=>{v(!1),y(!1),p&&p()},T=e=>{F&&!F.current.contains(e.target)&&(b||g)&&B()};return t(pr,Object.assign({ref:F,id:r},m,{children:e(mr,Object.assign({$disabled:o,$error:l,$readOnly:d},{children:[e(An,Object.assign({error:l,currentActive:g?"start":b?"end":"none"},{children:[t(gr,{onFocus:()=>{o||d||g||(y(!1),v(!0),I())},readOnly:!0,placeholder:"From",value:wr.formatDisplayValue(w,u),disabled:o,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(gr,{onFocus:()=>{o||d||b||(v(!1),y(!0),I())},readOnly:!0,placeholder:"To",value:wr.formatDisplayValue($,u),disabled:o,"data-testid":m["data-testid"]?`${m["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(Ic,{id:r,show:g,value:w,format:u,onCancel:k,onChange:e=>{v(!1),y(!0),x(e);h&&h({start:e,end:$})}}),t(Ic,{id:r,show:b,value:$,format:u,onCancel:k,onChange:e=>{y(!1),S(e);h&&h({start:w,end:e}),""==w?v(!0):p&&p()}})]}))}))};w.label`
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
`;const Tc=w(tr.H6)`
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
`;const Oc=w.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Dn.Neutral[3]};
    background-color: transparent;
    border: none;
`,Cc=w(H)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;w.div`
    display: flex;
    width: 100%;
`;const Dc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Hc=e=>"small"===e?2.5:3;w.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Hc(e.$variant);return x`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const _c=x`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Hc(e.$variant)}rem - 2px);
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
`,Ec=w.button`
    ${_c}
    cursor: pointer;
`;w.div`
    ${_c}
`;const zc=$`
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
                animation: ${zc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?x`
                background: ${Dn.Neutral[6](e)};

                ${Ec} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Dn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?x`
                border: none;
                background: transparent !important;

                ${Ec} {
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
    transition: ${Dc};
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
`;const Mc=w.div`
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
`;w(Mc)`
    color: ${Dn.Neutral[3]};
`,w.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;const Ac=w(Oc)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`;w(Ec)`
    padding-right: 2.75rem;
`;const Rc={[Tn.colorScheme]:"base",[Tn.textStyleScheme]:"base",[Tn.designTokenScheme]:"base",[Tn.resourceScheme]:"base"};Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme,Tn.colorScheme,Tn.textStyleScheme,Tn.designTokenScheme,Tn.resourceScheme;const jc=x`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Pc=w.div`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Dn.Primary:Dn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&jc}
`,Lc=w.div`
    color: ${Dn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&jc}

    ${e=>"next-line"===e.$labelDisplayType?x`
                    ${Kn("BodySmall","semibold")}
                `:x`
                    ${Kn("Body","regular")}
                `}
`,Nc=w.span`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Wc=w.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return x`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return x`
                    ${Pc} {
                        display: inline;
                    }

                    ${Lc} {
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
`,Yc=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Uc=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:u="middle",variant:d})=>{const h=S()||Rc,f=Un.Body.fontSize({theme:h}),m=Un.Body.fontFamily({theme:h}),{ref:v,width:b}=xo(),y=p((e=>{if("inline"!==o)return!1;return br.getTextWidth(e,`${f}rem '${m}'`)>b*s-50}),[b,o,f,m,s]),w=g((()=>y(i)),[y,i]),x=g((()=>c&&y(c)),[y,c]),$=w||x?"next-line":o,F=r=>{if(!a)return r;const o=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(o),l=s+a.length;return-1===s?r:e(n,{children:[i.slice(0,s),t(Nc,Object.assign({$variant:d},{children:i.slice(s,l)})),i.slice(l)]})},k=r=>e(n,{children:[t(Vc,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(r)})),t(Yc,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(r)}))]});return e(Wc,Object.assign({ref:v,$labelDisplayType:$},{children:[t(Pc,Object.assign({"aria-label":i,$bold:r,$maxLines:s,$selected:l,$truncateType:u,$variant:d},{children:"middle"===u&&w?k(i):F(i)})),c&&t(Lc,Object.assign({"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&x?k(c):c}))]}))};var qc=Et;var Gc=Et,Zc=zt,Jc=Xt;var Qc=Et,Xc=function(){this.__data__=new qc,this.size=0},Kc=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},eu=function(e){return this.__data__.get(e)},tu=function(e){return this.__data__.has(e)},nu=function(e,t){var n=this.__data__;if(n instanceof Gc){var r=n.__data__;if(!Zc||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Jc(r)}return n.set(e,t),this.size=n.size,this};function ru(e){var t=this.__data__=new Qc(e);this.size=t.size}ru.prototype.clear=Xc,ru.prototype.delete=Kc,ru.prototype.get=eu,ru.prototype.has=tu,ru.prototype.set=nu;var ou=ru;var iu=Xt,au=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},su=function(e){return this.__data__.has(e)};function lu(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new iu;++t<n;)this.add(e[t])}lu.prototype.add=lu.prototype.push=au,lu.prototype.has=su;var cu=lu,uu=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},du=function(e,t){return e.has(t)};var hu=function(e,t,n,r,o,i){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new cu:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],m=t[d];if(r)var g=a?r(m,p,d,t,e,i):r(p,m,d,e,t,i);if(void 0!==g){if(g)continue;h=!1;break}if(f){if(!uu(t,(function(e,t){if(!du(f,t)&&(p===e||o(p,e,n,r,i)))return f.push(t)}))){h=!1;break}}else if(p!==m&&!o(p,m,n,r,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var fu=de.Uint8Array,pu=wt,mu=hu,gu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},vu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},bu=he?he.prototype:void 0,yu=bu?bu.valueOf:void 0;var wu=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new fu(e),new fu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return pu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=gu;case"[object Set]":var l=1&r;if(s||(s=vu),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=mu(s(e),s(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(yu)return yu.call(e)==yu.call(t)}return!1};var xu=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},$u=xu,Su=se;var Fu=function(e,t,n){var r=t(e);return Su(e)?r:$u(r,n(e))};var ku=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Iu=function(){return[]},Bu=Object.prototype.propertyIsEnumerable,Tu=Object.getOwnPropertySymbols,Ou=Tu?function(e){return null==e?[]:(e=Object(e),ku(Tu(e),(function(t){return Bu.call(e,t)})))}:Iu;var Cu=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Du=Se,Hu=Fe;var _u=function(e){return Hu(e)&&"[object Arguments]"==Du(e)},Eu=Fe,zu=Object.prototype,Mu=zu.hasOwnProperty,Au=zu.propertyIsEnumerable,Ru=_u(function(){return arguments}())?_u:function(e){return Eu(e)&&Mu.call(e,"callee")&&!Au.call(e,"callee")},ju={exports:{}};var Pu=function(){return!1};!function(e,t){var n=de,r=Pu,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(ju,ju.exports);var Lu=ju.exports,Nu=/^(?:0|[1-9]\d*)$/;var Wu=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Nu.test(e))&&e>-1&&e%1==0&&e<t};var Vu=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Yu=Se,Uu=Vu,qu=Fe,Gu={};Gu["[object Float32Array]"]=Gu["[object Float64Array]"]=Gu["[object Int8Array]"]=Gu["[object Int16Array]"]=Gu["[object Int32Array]"]=Gu["[object Uint8Array]"]=Gu["[object Uint8ClampedArray]"]=Gu["[object Uint16Array]"]=Gu["[object Uint32Array]"]=!0,Gu["[object Arguments]"]=Gu["[object Array]"]=Gu["[object ArrayBuffer]"]=Gu["[object Boolean]"]=Gu["[object DataView]"]=Gu["[object Date]"]=Gu["[object Error]"]=Gu["[object Function]"]=Gu["[object Map]"]=Gu["[object Number]"]=Gu["[object Object]"]=Gu["[object RegExp]"]=Gu["[object Set]"]=Gu["[object String]"]=Gu["[object WeakMap]"]=!1;var Zu=function(e){return qu(e)&&Uu(e.length)&&!!Gu[Yu(e)]};var Ju=function(e){return function(t){return e(t)}},Qu={exports:{}};!function(e,t){var n=le,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Qu,Qu.exports);var Xu=Qu.exports,Ku=Zu,ed=Ju,td=Xu&&Xu.isTypedArray,nd=td?ed(td):Ku,rd=Cu,od=Ru,id=se,ad=Lu,sd=Wu,ld=nd,cd=Object.prototype.hasOwnProperty;var ud=function(e,t){var n=id(e),r=!n&&od(e),o=!n&&!r&&ad(e),i=!n&&!r&&!o&&ld(e),a=n||r||o||i,s=a?rd(e.length,String):[],l=s.length;for(var c in e)!t&&!cd.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||sd(c,l))||s.push(c);return s},dd=Object.prototype;var hd=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||dd)};var fd=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),pd=hd,md=fd,gd=Object.prototype.hasOwnProperty;var vd=Ae,bd=Vu;var yd=function(e){return null!=e&&bd(e.length)&&!vd(e)},wd=ud,xd=function(e){if(!pd(e))return md(e);var t=[];for(var n in Object(e))gd.call(e,n)&&"constructor"!=n&&t.push(n);return t},$d=yd;var Sd=function(e){return $d(e)?wd(e):xd(e)},Fd=Fu,kd=Ou,Id=Sd;var Bd=function(e){return Fd(e,Id,kd)},Td=Object.prototype.hasOwnProperty;var Od=function(e,t,n,r,o,i){var a=1&n,s=Bd(e),l=s.length;if(l!=Bd(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Td.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var m=e[u=s[c]],g=t[u];if(r)var v=a?r(g,m,u,t,e,i):r(m,g,u,e,t,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var b=e.constructor,y=t.constructor;b==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},Cd=tt(de,"DataView"),Dd=zt,Hd=tt(de,"Promise"),_d=tt(de,"Set"),Ed=tt(de,"WeakMap"),zd=Se,Md=Ne,Ad="[object Map]",Rd="[object Promise]",jd="[object Set]",Pd="[object WeakMap]",Ld="[object DataView]",Nd=Md(Cd),Wd=Md(Dd),Vd=Md(Hd),Yd=Md(_d),Ud=Md(Ed),qd=zd;(Cd&&qd(new Cd(new ArrayBuffer(1)))!=Ld||Dd&&qd(new Dd)!=Ad||Hd&&qd(Hd.resolve())!=Rd||_d&&qd(new _d)!=jd||Ed&&qd(new Ed)!=Pd)&&(qd=function(e){var t=zd(e),n="[object Object]"==t?e.constructor:void 0,r=n?Md(n):"";if(r)switch(r){case Nd:return Ld;case Wd:return Ad;case Vd:return Rd;case Yd:return jd;case Ud:return Pd}return t});var Gd=ou,Zd=hu,Jd=wu,Qd=Od,Xd=qd,Kd=se,eh=Lu,th=nd,nh="[object Arguments]",rh="[object Array]",oh="[object Object]",ih=Object.prototype.hasOwnProperty;var ah=function(e,t,n,r,o,i){var a=Kd(e),s=Kd(t),l=a?rh:Xd(e),c=s?rh:Xd(t),u=(l=l==nh?oh:l)==oh,d=(c=c==nh?oh:c)==oh,h=l==c;if(h&&eh(e)){if(!eh(t))return!1;a=!0,u=!1}if(h&&!u)return i||(i=new Gd),a||th(e)?Zd(e,t,n,r,o,i):Jd(e,t,l,n,r,o,i);if(!(1&n)){var f=u&&ih.call(e,"__wrapped__"),p=d&&ih.call(t,"__wrapped__");if(f||p){var m=f?e.value():e,g=p?t.value():t;return i||(i=new Gd),o(m,g,n,r,i)}}return!!h&&(i||(i=new Gd),Qd(e,t,n,r,o,i))},sh=Fe;var lh=function e(t,n,r,o,i){return t===n||(null==t||null==n||!sh(t)&&!sh(n)?t!=t&&n!=n:ah(t,n,r,o,e,i))},ch=ou,uh=lh;var dh=_e;var hh=function(e){return e==e&&!dh(e)},fh=hh,ph=Sd;var mh=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},gh=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=n[o])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new ch;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?uh(u,c,3,r,d):h))return!1}}return!0},vh=function(e){for(var t=ph(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,fh(o)]}return t},bh=mh;var yh=vn,wh=Ru,xh=se,$h=Wu,Sh=Vu,Fh=yn;var kh=function(e,t){return null!=e&&t in Object(e)},Ih=function(e,t,n){for(var r=-1,o=(t=yh(t,e)).length,i=!1;++r<o;){var a=Fh(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Sh(o)&&$h(a,o)&&(xh(e)||wh(e))};var Bh=lh,Th=Fn,Oh=function(e,t){return null!=e&&Ih(e,t,kh)},Ch=He,Dh=hh,Hh=mh,_h=yn;var Eh=$n;var zh=function(e){return function(t){return null==t?void 0:t[e]}},Mh=function(e){return function(t){return Eh(t,e)}},Ah=He,Rh=yn;var jh=function(e){var t=vh(e);return 1==t.length&&t[0][2]?bh(t[0][0],t[0][1]):function(n){return n===e||gh(n,e,t)}},Ph=function(e,t){return Ch(e)&&Dh(t)?Hh(_h(e),t):function(n){var r=Th(n,e);return void 0===r&&r===t?Oh(n,e):Bh(t,r,3)}},Lh=function(e){return e},Nh=se,Wh=function(e){return Ah(e)?zh(Rh(e)):Mh(e)};var Vh=function(e){return"function"==typeof e?e:null==e?Lh:"object"==typeof e?Nh(e)?Ph(e[0],e[1]):jh(e):Wh(e)},Yh=Vh,Uh=yd,qh=Sd;var Gh=function(e){return function(t,n,r){var o=Object(t);if(!Uh(t)){var i=Yh(n);t=qh(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var Zh=/\s/;var Jh=function(e){for(var t=e.length;t--&&Zh.test(e.charAt(t)););return t},Qh=/^\s+/;var Xh=function(e){return e?e.slice(0,Jh(e)+1).replace(Qh,""):e},Kh=_e,ef=Be,tf=/^[-+]0x[0-9a-f]+$/i,nf=/^0b[01]+$/i,rf=/^0o[0-7]+$/i,of=parseInt;var af=function(e){if("number"==typeof e)return e;if(ef(e))return NaN;if(Kh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xh(e);var n=nf.test(e);return n||rf.test(e)?of(e.slice(2),n?2:8):tf.test(e)?NaN:+e},sf=1/0;var lf=function(e){return e?(e=af(e))===sf||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var cf=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},uf=Vh,df=function(e){var t=lf(e),n=t%1;return t==t?n?t-n:t:0},hf=Math.max;var ff=ae(Gh((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:df(n);return o<0&&(o=hf(r+o,0)),cf(e,uf(t),o)}))),pf=lh;var mf=ae((function(e,t){return pf(e,t)}));const gf=0,vf=1,bf=2,yf=4;function wf(e){return()=>e}function xf(e){e()}function $f(e,t){return n=>e(t(n))}function Sf(e,t){return()=>e(t)}function Ff(e,t){return n=>e(t,n)}function kf(e){return void 0!==e}function If(){}function Bf(e,t){return t(e),e}function Tf(e,t){return t(e)}function Of(...e){return e}function Cf(e,t){return e(vf,t)}function Df(e,t){e(gf,t)}function Hf(e){e(bf)}function _f(e){return e(yf)}function Ef(e,t){return Cf(e,Ff(t,gf))}function zf(e,t){const n=e(vf,(e=>{n(),t(e)}));return n}function Mf(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Af(e,t){return e===t}function Rf(e=Af){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function jf(e){return t=>n=>{e(n)&&t(n)}}function Pf(e){return t=>$f(t,e)}function Lf(e){return t=>()=>{t(e)}}function Nf(e,...t){const n=function(...e){return t=>e.reduceRight(Tf,t)}(...t);return(t,r)=>{switch(t){case bf:return void Hf(e);case vf:return Cf(e,n(r))}}}function Wf(e,t){return n=>r=>{n(t=e(t,r))}}function Vf(e){return t=>n=>{e>0?e--:t(n)}}function Yf(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Uf(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Cf(e,(e=>{const s=n;n|=a,t[i]=e,s!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function qf(e){let t=e;const n=Zf();return(e,r)=>{switch(e){case gf:t=r;break;case vf:r(t);break;case yf:return t}return n(e,r)}}function Gf(e,t){return Bf(qf(t),(t=>Ef(e,t)))}function Zf(){const e=[];return(t,n)=>{switch(t){case gf:return void e.slice().forEach((e=>{e(n)}));case bf:return void e.splice(0,e.length);case vf:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Jf(e){return Bf(Zf(),(t=>Ef(e,t)))}function Qf(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:Xf(),singleton:n}}const Xf=()=>Symbol();function Kf(...e){const t=Zf(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Cf(e,(e=>{n[i]=e,r|=a,r===o&&Df(t,n)}))})),function(e,i){switch(e){case bf:return void Hf(t);case vf:return r===o&&i(n),Cf(t,i)}}}function ep(e,t=Af){return Nf(e,Rf(t))}function tp(...e){return function(t,n){switch(t){case bf:return;case vf:return function(...e){return()=>{e.map(xf)}}(...e.map((e=>Cf(e,n))))}}}var np=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(np||{});const rp={0:"debug",3:"error",1:"log",2:"warn"},op=Qf((()=>{const e=qf(3);return{log:qf(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:_f(e))&&console[rp[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function ip(e,t,n){return ap(e,t,n).callbackRef}function ap(e,t,n){const r=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);i=e=>{e&&t?(a.observe(e),r.current=e):(r.current&&a.unobserve(r.current),r.current=null)}}return{callbackRef:i,ref:r}}function sp(e,t,n,r,i,a,s,l,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},np.ERROR),c===l)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(n.children,t,l?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType,d=s?l?s.scrollLeft:s.scrollTop:u?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:u?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:u?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(d,0),viewportHeight:f}),null==a||a(l?lp("column-gap",getComputedStyle(n).columnGap,i):lp("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,r]);return ap(u,n,c)}function lp(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,np.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function cp(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=ap(i,!0,n),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const up=Qf((()=>{const e=Zf(),t=Zf(),n=qf(0),r=Zf(),o=qf(0),i=Zf(),a=Zf(),s=qf(0),l=qf(0),c=qf(0),u=qf(0),d=Zf(),h=Zf(),f=qf(!1),p=qf(!1),m=qf(!1);return Ef(Nf(e,Pf((({scrollTop:e})=>e))),t),Ef(Nf(e,Pf((({scrollHeight:e})=>e))),a),Ef(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:u,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),dp={lvl:0};function hp(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=s}return i.push({end:1/0,start:r,value:o}),i}function fp(e){return e===dp}function pp(e,t){if(!fp(e))return t===e.k?e.v:t<e.k?pp(e.l,t):pp(e.r,t)}function mp(e,t,n="k"){if(fp(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=mp(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return mp(e.l,t,n)}function gp(e,t,n){return fp(e)?Bp(t,n,1):t===e.k?Sp(e,{k:t,v:n}):t<e.k?Tp(Sp(e,{l:gp(e.l,t,n)})):Tp(Sp(e,{r:gp(e.r,t,n)}))}function vp(){return dp}function bp(e,t,n){if(fp(e))return[];return function(e){return hp(e,(({k:e,v:t})=>({index:e,value:t})))}(xp(e,mp(e,t)[0],n))}function yp(e,t){if(fp(e))return dp;const{k:n,l:r,r:o}=e;if(t===n){if(fp(r))return o;if(fp(o))return r;{const[t,n]=Ip(r);return $p(Sp(e,{k:t,l:Fp(r),v:n}))}}return $p(Sp(e,t<n?{l:yp(r,t)}:{r:yp(o,t)}))}function wp(e){return fp(e)?[]:[...wp(e.l),{k:e.k,v:e.v},...wp(e.r)]}function xp(e,t,n){if(fp(e))return[];const{k:r,l:o,r:i,v:a}=e;let s=[];return r>t&&(s=s.concat(xp(o,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(xp(i,t,n))),s}function $p(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(kp(t))return Op(Sp(e,{lvl:n-1}));if(!fp(t)&&!fp(t.r))return Sp(t.r,{l:Sp(t,{r:t.r.l}),lvl:n,r:Sp(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(kp(e))return Cp(Sp(e,{lvl:n-1}));if(fp(r)||fp(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=kp(t)?r.lvl-1:r.lvl;return Sp(t,{l:Sp(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Cp(Sp(r,{l:t.r,lvl:o}))})}}function Sp(e,t){return Bp(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Fp(e){return fp(e.r)?e.l:$p(Sp(e,{r:Fp(e.r)}))}function kp(e){return fp(e)||e.lvl>e.r.lvl}function Ip(e){return fp(e.r)?[e.k,e.v]:Ip(e.r)}function Bp(e,t,n,r=dp,o=dp){return{k:e,l:r,lvl:n,r:o,v:t}}function Tp(e){return Cp(Op(e))}function Op(e){const{l:t}=e;return fp(t)||t.lvl!==e.lvl?e:Sp(t,{r:Sp(e,{l:t.r})})}function Cp(e){const{lvl:t,r:n}=e;return fp(n)||fp(n.r)||n.lvl!==t||n.r.lvl!==t?e:Sp(n,{l:Sp(e,{r:n.l}),lvl:t+1})}function Dp(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Hp(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const _p=Qf((()=>({recalcInProgress:qf(!1)})),[],{singleton:!0});function Ep(e,t,n){return e[zp(e,t,n)]}function zp(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Mp(e,t){return Math.round(e.getBoundingClientRect()[t])}function Ap(e){return!fp(e.groupOffsetTree)}function Rp({index:e},t){return t===e?0:t<e?-1:1}function jp({offset:e},t){return t===e?0:t<e?-1:1}function Pp(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Ep(t,e,Rp),a=e-r,s=i*a+(a-1)*n+o;return s>0?s+n:s}function Lp(e,t){if(!Ap(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Np(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Lp("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Wp(e,t,n,r=0){return r>0&&(t=Math.max(t,Ep(e,r,Rp).offset)),hp(function(e,t,n,r){const o=zp(e,t,r),i=zp(e,n,r,o);return e.slice(o,i+1)}(e,t,n,jp),qp)}function Vp(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,np.DEBUG);const i=e.sizeTree;let a=i,s=0;if(n.length>0&&fp(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>gp(gp(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=fp(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),fp(e)){e=gp(e,0,o);continue}const a=bp(e,i-1,t+1);if(a.some(Gp(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:i}of a)s?(t>=r||o===i)&&(e=yp(e,r)):(l=i!==o,s=!0),n>t&&t>=r&&i!==o&&(e=gp(e,t+1,i));l&&(e=gp(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d}=Up(e.offsetTree,s,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>gp(e,t,Pp(t,d,o))),vp()),lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function Yp(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Up(e,t,n,r){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=zp(o,t-1,Rp),s=o[l].offset;const e=mp(n,t-1);i=e[0],a=e[1],o.length&&o[l].size===mp(n,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of bp(n,t,1/0)){const t=e-i,n=t*a+s+t*r;o.push({index:e,offset:n,size:l}),i=e,s=n,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function qp(e){return{index:e.index,value:e}}function Gp(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Zp={offsetHeight:"height",offsetWidth:"width"},Jp=Qf((([{log:e},{recalcInProgress:t}])=>{const n=Zf(),r=Zf(),o=Gf(r,0),i=Zf(),a=Zf(),s=qf(0),l=qf([]),c=qf(void 0),u=qf(void 0),d=qf(((e,t)=>Mp(e,Zp[t]))),h=qf(void 0),f=qf(0),p={groupIndices:[],groupOffsetTree:vp(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:vp()},m=Gf(Nf(n,Uf(l,e,f),Wf(Vp,p),Rf()),p),g=Gf(Nf(l,Rf(),Wf(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Pf((({prev:e})=>e))),[]);Ef(Nf(l,jf((e=>e.length>0)),Uf(m,f),Pf((([e,t,n])=>{const r=e.reduce(((e,r,o)=>gp(e,r,Pp(r,t.offsetTree,n)||o)),vp());return{...t,groupIndices:e,groupOffsetTree:r}}))),m),Ef(Nf(r,Uf(m),jf((([e,{lastIndex:t}])=>e<t)),Pf((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Ef(c,u);const v=Gf(Nf(c,Pf((e=>void 0===e))),!0);Ef(Nf(u,jf((e=>void 0!==e&&fp(_f(m).sizeTree))),Pf((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const b=Jf(Nf(n,Uf(m),Wf((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),Pf((e=>e.changed))));Cf(Nf(s,Wf(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Pf((e=>e.diff))),(e=>{const{groupIndices:n}=_f(m);if(e>0)Df(t,!0),Df(i,e+Yp(e,n));else if(e<0){const t=_f(g);t.length>0&&(e-=Yp(-e,t)),Df(a,e)}})),Cf(Nf(s,Uf(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},np.ERROR)}));const y=Jf(i);Ef(Nf(i,Uf(m),Pf((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=pp(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=wp(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return wp(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const w=Jf(Nf(a,Uf(m,f),Pf((([e,{offsetTree:t},n])=>Pp(-e,t,n)))));return Ef(Nf(a,Uf(m,f),Pf((([e,t,n])=>{if(t.groupIndices.length>0){if(fp(t.sizeTree))return t;let r=vp();const o=_f(g);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(r=wp(t.sizeTree).reduce(((t,{k:n,v:r})=>gp(t,Math.max(0,n+e),r)),r),i!==-e){r=gp(r,0,pp(t.sizeTree,s));r=gp(r,1,mp(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Up(t.offsetTree,0,r,n)}}{const r=wp(t.sizeTree).reduce(((t,{k:n,v:r})=>gp(t,Math.max(0,n+e),r)),vp());return{...t,sizeTree:r,...Up(t.offsetTree,0,r,n)}}}))),m),{beforeUnshiftWith:y,data:h,defaultItemSize:u,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:d,listRefresh:b,shiftWith:a,shiftWithOffset:w,sizeRanges:n,sizes:m,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),Of(op,_p),{singleton:!0});function Qp(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Xp=Qf((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Zf(),a=Zf(),s=Jf(Nf(i,Pf(Qp)));return Ef(Nf(s,Pf((e=>e.totalCount))),n),Ef(Nf(s,Pf((e=>e.groupIndices))),e),Ef(Nf(Kf(o,t,r),jf((([e,t])=>Ap(t))),Pf((([e,t,n])=>mp(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Rf(),Pf((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Of(Jp,up)),Kp=Qf((([{log:e}])=>{const t=qf(!1),n=Jf(Nf(t,jf((e=>e)),Rf()));return Cf(t,(t=>{t&&_f(e)("props updated",{},np.DEBUG)})),{didMount:n,propsReady:t}}),Of(op),{singleton:!0}),em=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function tm(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!em)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const nm=Qf((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:h}])=>{const f=Zf(),p=Zf(),m=qf(0);let g=null,v=null,b=null;function y(){g&&(g(),g=null),b&&(b(),b=null),v&&(clearTimeout(v),v=null),Df(l,!1)}return Ef(Nf(f,Uf(n,d,r,m,s,a,h),Uf(e,i,o),Pf((([[e,n,r,o,i,a,s,c],d,h,m])=>{const w=tm(e),{align:x,behavior:$,offset:S}=w,F=o-1,k=Np(w,n,F);let I=Pp(k,n.offsetTree,d)+a;"end"===x?(I+=h+mp(n.sizeTree,k)[1]-r+m,k===F&&(I+=s)):"center"===x?I+=(h+mp(n.sizeTree,k)[1]-r+m)/2:I-=i,S&&(I+=S);const B=t=>{y(),t?(c("retrying to scroll to",{location:e},np.DEBUG),Df(f,e)):(Df(p,!0),c("list did not change, scroll successful",{},np.DEBUG))};if(y(),"smooth"===$){let e=!1;b=Cf(t,(t=>{e=e||t})),g=zf(u,(()=>{B(e)}))}else g=zf(Nf(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),B);return v=setTimeout((()=>{y()}),1200),Df(l,!0),c("scrolling from index to",{behavior:$,index:k,top:I},np.DEBUG),{behavior:$,top:I}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:m}}),Of(Jp,up,op),{singleton:!0});function rm(e,t){0==e?t():requestAnimationFrame((()=>{rm(e-1,t)}))}function om(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const im=Qf((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=qf(!0),l=qf(0),c=qf(!0);return Ef(Nf(a,Uf(l),jf((([e,t])=>!!t)),Lf(!1)),s),Ef(Nf(a,Uf(l),jf((([e,t])=>!!t)),Lf(!1)),c),Cf(Nf(Kf(t,a),Uf(s,n,e,c),jf((([[,e],t,{sizeTree:n},r,o])=>e&&(!fp(n)||kf(r))&&!t&&!o)),Uf(l)),(([,e])=>{zf(o,(()=>{Df(c,!0)})),rm(4,(()=>{zf(r,(()=>{Df(s,!0)})),Df(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Of(Jp,up,nm,Kp),{singleton:!0});function am(e,t){return Math.abs(e-t)<1.01}const sm="up",lm="down",cm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},um=Qf((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=qf(!1),s=qf(!0),l=Zf(),c=Zf(),u=qf(4),d=qf(0),h=Gf(Nf(tp(Nf(ep(o),Vf(1),Lf(!0)),Nf(ep(o),Vf(1),Lf(!1),Mf(100))),Rf()),!1),f=Gf(Nf(tp(Nf(n,Lf(!0)),Nf(n,Lf(!1),Mf(200))),Rf()),!1);Ef(Nf(Kf(ep(o),ep(d)),Pf((([e,t])=>e<=t)),Rf()),s),Ef(Nf(s,Yf(50)),c);const p=Jf(Nf(Kf(r,ep(i),ep(t),ep(e),ep(u)),Wf(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),cm),Rf(((e,t)=>e&&e.atBottom===t.atBottom)))),m=Gf(Nf(r,Wf(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(am(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),jf((e=>e.changed)),Pf((e=>e.jump))),0);Ef(Nf(p,Pf((e=>e.atBottom))),a),Ef(Nf(a,Yf(50)),l);const g=qf(lm);Ef(Nf(r,Pf((({scrollTop:e})=>e)),Rf(),Wf(((e,t)=>_f(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?sm:lm,prevScrollTop:t}),{direction:lm,prevScrollTop:0}),Pf((e=>e.direction))),g),Ef(Nf(r,Yf(50),Lf("none")),g);const v=qf(0);return Ef(Nf(h,jf((e=>!e)),Lf(0)),v),Ef(Nf(o,Yf(100),Uf(h),jf((([e,t])=>!!t)),Wf((([e,t],[n])=>[t,n]),[0,0]),Pf((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:m,scrollDirection:g,scrollVelocity:v}}),Of(up)),dm="top",hm="bottom",fm="none";function pm(e,t,n){return"number"==typeof e?n===sm&&t===dm||n===lm&&t===hm?e:0:n===sm?t===dm?e.main:e.reverse:t===hm?e.main:e.reverse}function mm(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const gm=Qf((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Zf(),a=qf(0),s=qf(0),l=qf(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:Gf(Nf(Kf(ep(r),ep(o),ep(n),ep(i,Hp),ep(l),ep(a),ep(t),ep(e),ep(s)),Pf((([e,t,n,[r,o],i,a,s,l,c])=>{const u=e-l,d=a+s,h=Math.max(n-u,0);let f=fm;const p=mm(c,dm),m=mm(c,hm);return r-=l,o+=n+s,(r+=n+s)>e+d-p&&(f=sm),(o-=l)<e-h+t+m&&(f=lm),f!==fm?[Math.max(u-n-pm(i,dm,f)-p,0),u-h-s+t+pm(i,hm,f)+m]:null})),jf((e=>null!=e)),Rf(Hp)),[0,0])}}),Of(up),{singleton:!0});const vm={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function bm(e,t,n,r,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,h=c,f=s+d*l+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:wm(e,o,i),offsetBottom:f,offsetTop:c,top:h,topItems:wm(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function ym(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=om(t,s);return bm(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,n,r)}function wm(e,t,n){if(0===e.length)return[];if(!Ap(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=bp(t.groupOffsetTree,r,o);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const xm=Qf((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},h,{didMount:f},{recalcInProgress:p}])=>{const m=qf([]),g=qf(0),v=Zf();Ef(i.topItemsIndexes,m);const b=Gf(Nf(Kf(f,p,ep(l,Hp),ep(o),ep(r),ep(c),u,ep(m),ep(t),ep(n),e),jf((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),Pf((([,,[e,t],n,r,o,i,a,s,l,c])=>{const u=r,{offsetTree:d,sizeTree:h}=u,f=_f(g);if(0===n)return{...vm,totalCount:n};if(0===e&&0===t)return 0===f?{...vm,totalCount:n}:ym(f,o,r,s,l,c||[]);if(fp(h))return f>0?null:bm(function(e,t,n){if(Ap(t)){const r=Lp(e,t);return[{index:mp(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(om(o,n),u,c),[],n,l,u,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of bp(h,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return bm([],p,n,l,u,s);const m=a.length>0?a[a.length-1]+1:0,v=Wp(d,e,t,m);if(0===v.length)return null;const b=n-1;return bm(Bf([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-r.start;i+=t*s+t*l}a<m&&(i+=(m-a)*s,a=m);const u=Math.min(r.end,b);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,n,l,u,s)})),jf((e=>null!==e)),Rf()),vm);Ef(Nf(e,jf(kf),Pf((e=>null==e?void 0:e.length))),o),Ef(Nf(b,Pf((e=>e.topListHeight))),d),Ef(d,s),Ef(Nf(b,Pf((e=>[e.top,e.bottom]))),a),Ef(Nf(b,Pf((e=>e.items))),v);const y=Jf(Nf(b,jf((({items:e})=>e.length>0)),Uf(o,e),jf((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Pf((([,e,t])=>[e-1,t])),Rf(Hp),Pf((([e])=>e)))),w=Jf(Nf(b,Yf(200),jf((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Pf((({items:e})=>e[0].index)),Rf())),x=Jf(Nf(b,jf((({items:e})=>e.length>0)),Pf((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Rf(Dp)));return{endReached:y,initialItemCount:g,itemsRendered:v,listState:b,rangeChanged:x,startReached:w,topItemsIndexes:m,...h}}),Of(Jp,Xp,gm,im,nm,um,Kp,_p),{singleton:!0}),$m=Qf((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Zf(),a=Gf(Nf(Kf(n,e,r,t,o),Pf((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Ef(ep(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Of(up,xm),{singleton:!0}),Sm=Qf((([{viewportHeight:e},{totalListHeight:t}])=>{const n=qf(!1);return{alignToBottom:n,paddingTopAddition:Gf(Nf(Kf(n,e,t),jf((([e])=>e)),Pf((([,e,t])=>Math.max(0,e-t))),Yf(0),Rf()),0)}}),Of(up,$m),{singleton:!0});function Fm(e){return!!e&&("smooth"===e?"smooth":"auto")}const km=Qf((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const u=qf(!1),d=Zf();let h=null;function f(e){Df(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=zf(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(_f(l)("scrolling to bottom due to increased size",{},np.DEBUG),f("auto"))}));setTimeout(t,100)}return Cf(Nf(Kf(Nf(ep(t),Vf(1)),a),Uf(ep(u),r,i,c),Pf((([[e,t],n,r,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?Fm(e(t)):t&&Fm(e))(n,r||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),jf((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{h&&(h(),h=null),h=zf(e,(()=>{_f(l)("following output to ",{totalCount:n},np.DEBUG),f(t),h=null}))})),Cf(Nf(Kf(ep(u),t,s),jf((([e,,t])=>e&&t)),Wf((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),jf((({refreshed:e})=>e)),Uf(u,t)),(([,e])=>{_f(i)&&p(!1!==e)})),Cf(d,(()=>{p(!1!==_f(u))})),Cf(Kf(ep(u),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:d,followOutput:u}}),Of(Jp,um,nm,im,Kp,op,up)),Im=Qf((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(Ef(Nf(s,Uf(i),jf((([,e])=>0!==e)),Uf(o,r,t,n,e),Pf((([[,e],t,n,r,o,i=[]])=>ym(e,t,n,r,o,i)))),a),{})),Of(Jp,im,xm,Kp),{singleton:!0}),Bm=Qf((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=qf(0);return Cf(Nf(e,Uf(r),jf((([,e])=>0!==e)),Pf((([,e])=>({top:e})))),(e=>{zf(Nf(n,Vf(1),jf((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Df(t,e)}))}))})),{initialScrollTop:r}}),Of(Kp,up,xm),{singleton:!0}),Tm=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,Om=Qf((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const u=Zf();return Ef(Nf(u,Uf(t,l,n,i,o,r,s),Uf(e),Pf((([[e,t,n,r,o,i,s,l],c])=>{const{align:u,behavior:d,calculateViewLocation:h=Tm,done:f,...p}=e,m=Np(e,t,r-1),g=Pp(m,t.offsetTree,c)+o+i,v=h({itemBottom:g+mp(t.sizeTree,m)[1],itemTop:g,locationParams:{align:u,behavior:d,...p},viewportBottom:l+n-s,viewportTop:l+i});return v?f&&zf(Nf(a,jf((e=>!e)),Vf(_f(a)?1:2)),f):f&&f(),v})),jf((e=>null!==e))),c),{scrollIntoView:u}}),Of(Jp,up,nm,xm,op),{singleton:!0}),Cm=Qf((([{scrollVelocity:e}])=>{const t=qf(!1),n=Zf(),r=qf(!1);return Ef(Nf(e,Uf(r,t,n),jf((([e,t])=>!!t)),Pf((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Rf()),t),Cf(Nf(Kf(t,e,n),Uf(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),Of(um),{singleton:!0}),Dm=Qf((([{scrollContainerState:e,scrollTo:t}])=>{const n=Zf(),r=Zf(),o=Zf(),i=qf(!1),a=qf(void 0);return Ef(Nf(Kf(n,r),Pf((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Ef(Nf(t,Uf(r),Pf((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),Of(up)),Hm=Qf((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Zf(),u=qf(void 0),d=qf(null),h=qf(null);return Ef(s,d),Ef(l,h),Cf(Nf(c,Uf(t,r,a,d,h,n)),(([e,t,n,r,o,i,a])=>{const s=function(e){return wp(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:n-=a})})),Ef(Nf(u,jf(kf),Pf(_m)),o),Ef(Nf(i,Uf(u),jf((([,e])=>void 0!==e)),Rf(),Pf((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Of(Jp,up,im,Kp,Dm));function _m(e){return{align:"start",index:0,offset:e.scrollTop}}const Em=Qf((([{topItemsIndexes:e}])=>{const t=qf(0);return Ef(Nf(t,jf((e=>e>=0)),Pf((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Of(xm));function zm(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const Mm=zm((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Am=Qf((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:h},{log:f},{recalcInProgress:p}])=>{const m=Jf(Nf(l,Uf(a),Wf((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},s])=>{const l=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),jf((([e])=>0!==e)),Uf(r,s,n,o,f,p),jf((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===sm)),Pf((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},np.DEBUG),e)))));function g(n){n>0?(Df(t,{behavior:"auto",top:-n}),Df(e,0)):(Df(e,0),Df(t,{behavior:"auto",top:-n}))}return Cf(Nf(m,Uf(e,i)),(([t,n,r])=>{r&&Mm()?Df(e,n-t):g(-t)})),Cf(Nf(Kf(Gf(i,!1),e,p),jf((([e,t,n])=>!e&&!n&&0!==t)),Pf((([e,t])=>t)),Yf(1)),g),Ef(Nf(d,Pf((e=>({top:-e})))),t),Cf(Nf(c,Uf(h,u),Pf((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=pp(r,0);let a=0,s=0;for(;a<e;){a++,n+=o;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),s++}return n}}))),(n=>{Df(e,n),requestAnimationFrame((()=>{Df(t,{top:n}),requestAnimationFrame((()=>{Df(e,0),Df(p,!1)}))}))})),{deviation:e}}),Of(up,um,xm,Jp,op,_p)),Rm=Qf((([e,t,n,r,o,i,a,s,l,c])=>({...e,...t,...n,...r,...o,...i,...a,...s,...l,...c})),Of(gm,Im,Kp,Cm,$m,Bm,Sm,Dm,Om,op)),jm=Qf((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},m,g,v,{listState:b,topItemsIndexes:y,...w},{scrollToIndex:x},$,{topItemCount:S},{groupCounts:F},k])=>(Ef(w.rangeChanged,k.scrollSeekRangeChanged),Ef(Nf(k.windowViewportRect,Pf((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:S,topItemsIndexes:y,totalCount:u,...v,groupIndices:i,itemSize:a,listState:b,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...w,...k,...m,sizes:l,...g})),Of(Jp,im,up,Hm,km,xm,nm,Am,Em,Xp,Rm));function Pm(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const Lm=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Nm(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&Df(e.propsReady,!1);for(const r of i){Df(e[n.required[r]],t[r])}for(const r of a)if(r in t){Df(e[n.optional[r]],t[r])}e.propsReady&&Df(e.propsReady,!0)}function d(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case vf:return i?n===i?void 0:(r(),n=i,t=Cf(e,i),t):(r(),If);case bf:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...m}=h,[g]=o.useState((()=>Bf(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,m)})))),[v]=o.useState(Sf(d,g));Lm((()=>{for(const e of l)e in m&&Cf(v[e],m[e]);return()=>{Object.values(v).map(Hf)}}),[m,v,g]),Lm((()=>{u(g,m)})),o.useImperativeHandle(f,wf(function(e){return s.reduce(((t,r)=>(t[r]=t=>{Df(e[n.methods[r]],t)},t)),{})}(g)));const b=r;return t(c.Provider,{value:g,children:r?t(b,{...Pm([...i,...a,...l],m),children:p}):p})}));return{Component:h,useEmitter:(e,t)=>{const n=o.useContext(c)[e];Lm((()=>Cf(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>Cf(t,e)),[t]);return o.useSyncExternalStore(n,(()=>_f(t)),(()=>_f(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(Sf(_f,t));return Lm((()=>Cf(t,(e=>{e!==n&&r(wf(e))}))),[t,n]),n},usePublisher:e=>o.useCallback(Ff(Df,o.useContext(c)[e]),[e])}}const Wm=o.createContext(void 0),Vm=o.createContext(void 0),Ym=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Um(e,t,n,r=If,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{const r=n.target,o=r===window||r===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,s=a?o?document.documentElement.scrollWidth:r.scrollWidth:o?document.documentElement.scrollHeight:r.scrollHeight,u=a?o?window.innerWidth:r.offsetWidth:o?window.innerHeight:r.offsetHeight,d=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:u})};n.suppressFlushSync?d():B.flushSync(d),null!==l.current&&(i===l.current||i<=0||i===s-u)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return r(i||s.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[s,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;r===window?(u=Math.max(Mp(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,d=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(u=r[a?"scrollWidth":"scrollHeight"],i=Mp(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const h=u-i;if(n.top=Math.ceil(Math.max(Math.min(h,n.top),0)),am(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const qm="-webkit-sticky",Gm="sticky",Zm=zm((()=>{if(typeof document>"u")return Gm;const e=document.createElement("div");return e.style.position=qm,e.style.position===qm?qm:Gm}));function Jm(e){return e}const Qm=Qf((()=>{const e=qf((e=>`Item ${e}`)),t=qf(null),n=qf((e=>`Group ${e}`)),r=qf({}),o=qf(Jm),i=qf("div"),a=qf(If),s=(e,t=null)=>Gf(Nf(r,Pf((t=>t[e])),Rf()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Xm=Qf((([e,t])=>({...e,...t})),Of(jm,Qm)),Km=({height:e})=>t("div",{style:{height:e}}),eg={overflowAnchor:"none",position:Zm(),zIndex:1},tg={overflowAnchor:"none"},ng={...tg,display:"inline-block",height:"100%"},rg=o.memo((function({showTopList:e=!1}){const n=wg("listState"),r=xg("sizeRanges"),i=wg("useWindowScroll"),a=wg("customScrollParent"),s=xg("windowScrollContainerState"),l=xg("scrollContainerState"),c=a||i?s:l,u=wg("itemContent"),d=wg("context"),h=wg("groupContent"),f=wg("trackItemSizes"),p=wg("itemSize"),m=wg("log"),g=xg("gap"),b=wg("horizontalDirection"),{callbackRef:y}=sp(r,p,f,e?If:c,m,g,a,b,wg("skipAnimationFrameInResizeObserver")),[w,x]=o.useState(0);yg("deviation",(e=>{w!==e&&x(e)}));const $=wg("EmptyPlaceholder"),S=wg("ScrollSeekPlaceholder")||Km,F=wg("ListComponent"),k=wg("ItemComponent"),I=wg("GroupComponent"),B=wg("computeItemKey"),T=wg("isSeeking"),O=wg("groupIndices").length>0,C=wg("alignToBottom"),D=wg("initialItemFinalLocationReached"),H=e?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==w?w:C?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==w?w:C?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...D?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&$?t($,{...lg($,d)}):t(F,{...lg(F,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:y,style:H,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=B(t+n.firstItemIndex,e.data,d);return T?v(S,{...lg(S,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?v(I,{...lg(I,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:eg},h(e.index,d)):v(k,{...lg(k,d),...cg(k,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:b?ng:tg},O?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),og={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},ig={outline:"none",overflowX:"auto",position:"relative"},ag=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),sg={position:Zm(),top:0,width:"100%",zIndex:1};function lg(e,t){if("string"!=typeof e)return{context:t}}function cg(e,t){return{item:"string"==typeof e?void 0:t}}const ug=o.memo((function(){const e=wg("HeaderComponent"),n=xg("headerHeight"),r=wg("HeaderFooterTag"),i=ip(o.useMemo((()=>e=>{n(Mp(e,"height"))}),[n]),!0,wg("skipAnimationFrameInResizeObserver")),a=wg("context");return e?t(r,{ref:i,children:t(e,{...lg(e,a)})}):null})),dg=o.memo((function(){const e=wg("FooterComponent"),n=xg("footerHeight"),r=wg("HeaderFooterTag"),i=ip(o.useMemo((()=>e=>{n(Mp(e,"height"))}),[n]),!0,wg("skipAnimationFrameInResizeObserver")),a=wg("context");return e?t(r,{ref:i,children:t(e,{...lg(e,a)})}):null}));function hg({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),h=n("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:m}=Um(s,c,l,u,void 0,h);return e("scrollTo",m),e("scrollBy",f),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?ig:og,...i},tabIndex:0,...a,...lg(l,d),children:o})}))}function fg({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("totalListHeight"),d=n("deviation"),h=n("customScrollParent"),f=n("context"),{scrollByCallback:p,scrollerRef:m,scrollToCallback:g}=Um(s,c,l,If,h);return Ym((()=>(m.current=h||window,()=>{m.current=null})),[m,h]),e("windowScrollTo",g),e("scrollBy",p),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==u?{height:u+d}:{}},...a,...lg(l,f),children:o})}))}const pg=({children:e})=>{const n=o.useContext(Wm),r=xg("viewportHeight"),i=xg("fixedItemHeight"),a=wg("alignToBottom"),s=wg("horizontalDirection"),l=ip(o.useMemo((()=>$f(r,(e=>Mp(e,s?"width":"height")))),[r,s]),!0,wg("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:l,style:ag(a),children:e})},mg=({children:e})=>{const n=o.useContext(Wm),r=xg("windowViewportRect"),i=xg("fixedItemHeight"),a=wg("customScrollParent"),s=cp(r,a,wg("skipAnimationFrameInResizeObserver")),l=wg("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:s,style:ag(l),children:e})},gg=({children:e})=>{const n=wg("TopItemListComponent")||"div",r=wg("headerHeight"),o={...sg,marginTop:`${r}px`},i=wg("context");return t(n,{style:o,...lg(n,i),children:e})},vg=o.memo((function(n){const r=wg("useWindowScroll"),o=wg("topItemsIndexes").length>0,i=wg("customScrollParent"),a=wg("context"),s=i||r?Sg:$g,l=i||r?mg:pg;return e(s,{...n,...lg(s,a),children:[o&&t(gg,{children:t(rg,{showTopList:!0})}),e(l,{children:[t(ug,{}),t(rg,{}),t(dg,{})]})]})})),{Component:bg,useEmitter:yg,useEmitterValue:wg,usePublisher:xg}=Nm(Xm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},vg),$g=hg({useEmitter:yg,useEmitterValue:wg,usePublisher:xg}),Sg=fg({useEmitter:yg,useEmitterValue:wg,usePublisher:xg}),Fg=bg,kg={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Ig={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Bg,floor:Tg,max:Og,min:Cg,round:Dg}=Math;function Hg(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function _g(e,t){return e&&e.width===t.width&&e.height===t.height}function Eg(e,t){return e&&e.column===t.column&&e.row===t.row}const zg=Qf((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},h,f,{didMount:p,propsReady:m},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:w},x])=>{const $=qf(0),S=qf(0),F=qf(kg),k=qf({height:0,width:0}),I=qf({height:0,width:0}),B=Zf(),T=Zf(),O=qf(0),C=qf(null),D=qf({column:0,row:0}),H=Zf(),_=Zf(),E=qf(!1),z=qf(0),M=qf(!0),A=qf(!1),R=qf(!1);Cf(Nf(p,Uf(z),jf((([e,t])=>!!t))),(()=>{Df(M,!1)})),Cf(Nf(Kf(p,M,I,k,z,A),jf((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{Df(A,!0),rm(1,(()=>{Df(B,e)})),zf(Nf(c),(()=>{Df(t,[0,0]),Df(M,!0)}))})),Ef(Nf(_,jf((e=>null!=e&&e.scrollTop>0)),Lf(0)),S),Cf(Nf(p,Uf(_),jf((([,e])=>null!=e))),(([,e])=>{e&&(Df(k,e.viewport),Df(I,e.item),Df(D,e.gap),e.scrollTop>0&&(Df(E,!0),zf(Nf(c,Vf(1)),(e=>{Df(E,!1)})),Df(l,{top:e.scrollTop})))})),Ef(Nf(k,Pf((({height:e})=>e))),d),Ef(Nf(Kf(ep(k,_g),ep(I,_g),ep(D,((e,t)=>e&&e.column===t.column&&e.row===t.row)),ep(c)),Pf((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),H),Ef(Nf(Kf(ep($),r,ep(D,Eg),ep(I,_g),ep(k,_g),ep(C),ep(S),ep(E),ep(M),ep(z)),jf((([,,,,,,,e])=>!e)),Pf((([e,[t,n],r,o,i,a,s,,l,c])=>{const{column:u,row:d}=r,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return kg;if(0===f){const t=om(c,e);return function(e){return{...Ig,items:e}}(Hg(t,t+Math.max(s-1,0),a))}const m=Mg(p,f,u);let g,v;l?0===t&&0===n&&s>0?(g=0,v=s-1):(g=m*Tg((t+d)/(h+d)),v=m*Bg((n+d)/(h+d))-1,v=Cg(e-1,Og(v,m-1)),g=Cg(v,Og(0,g))):(g=0,v=-1);const b=Hg(g,v,a),{bottom:y,top:w}=Ag(i,r,o,b),x=Bg(e/m);return{bottom:y,itemHeight:h,items:b,itemWidth:f,offsetBottom:x*h+(x-1)*d-y,offsetTop:w,top:w}}))),F),Ef(Nf(C,jf((e=>null!==e)),Pf((e=>e.length))),$),Ef(Nf(Kf(k,I,F,D),jf((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),Pf((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Ag(e,r,t,n);return[i,o]})),Rf(Hp)),t);const j=qf(!1);Ef(Nf(c,Uf(j),Pf((([e,t])=>t||0!==e))),j);const P=Jf(Nf(Kf(F,$),jf((([{items:e}])=>e.length>0)),Uf(j),jf((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),Pf((([[,e]])=>e-1)),Rf())),L=Jf(Nf(ep(F),jf((({items:e})=>e.length>0&&0===e[0].index)),Lf(0),Rf())),N=Jf(Nf(ep(F),Uf(E),jf((([{items:e},t])=>e.length>0&&!t)),Pf((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Rf(Dp),Yf(0)));Ef(N,f.scrollSeekRangeChanged),Ef(Nf(B,Uf(k,I,$,D),Pf((([e,t,n,r,o])=>{const i=tm(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=r-1),c=Og(0,c,Cg(r-1,c));let u=Rg(t,o,n,c);return"end"===a?u=Dg(u-t.height+n.height):"center"===a&&(u=Dg(u-t.height/2+n.height/2)),l&&(u+=l),{behavior:s,top:u}}))),l);const W=Gf(Nf(F,Pf((e=>e.offsetBottom+e.bottom))),0);return Ef(Nf(w,Pf((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:g,data:C,deviation:O,footerHeight:o,gap:D,headerHeight:i,increaseViewportBy:e,initialItemCount:S,itemDimensions:I,overscan:n,restoreStateFrom:_,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:B,scrollTop:c,smoothScrollTargetReached:u,totalCount:$,useWindowScroll:v,viewportDimensions:k,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:w,...f,gridState:F,horizontalDirection:R,initialTopMostItemIndex:z,totalListHeight:W,...h,endReached:P,propsReady:m,rangeChanged:N,startReached:L,stateChanged:H,stateRestoreInProgress:E,...x}}),Of(gm,up,um,Cm,Kp,Dm,op));function Mg(e,t,n){return Og(1,Tg((e+n)/(Tg(t)+n)))}function Ag(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=Rg(e,t,n,r[0].index);return{bottom:Rg(e,t,n,r[r.length-1].index)+o,top:i}}function Rg(e,t,n,r){const o=Mg(e.width,n.width,t.column),i=Tg(r/o),a=i*n.height+Og(0,i-1)*t.row;return a>0?a+t.row:a}const jg=Qf((()=>{const e=qf((e=>`Item ${e}`)),t=qf({}),n=qf(null),r=qf("virtuoso-grid-item"),o=qf("virtuoso-grid-list"),i=qf(Jm),a=qf("div"),s=qf(If),l=(e,n=null)=>Gf(Nf(t,Pf((t=>t[e])),Rf()),n),c=qf(!1),u=qf(!1);return Ef(ep(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),Pg=Qf((([e,t])=>({...e,...t})),Of(zg,jg)),Lg=o.memo((function(){const e=Zg("gridState"),n=Zg("listClassName"),r=Zg("itemClassName"),i=Zg("itemContent"),a=Zg("computeItemKey"),s=Zg("isSeeking"),l=Jg("scrollHeight"),c=Zg("ItemComponent"),u=Zg("ListComponent"),d=Zg("ScrollSeekPlaceholder"),h=Zg("context"),f=Jg("itemDimensions"),p=Jg("gap"),m=Zg("log"),g=Zg("stateRestoreInProgress"),b=Jg("reportReadyState"),y=ip(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();f({height:e,width:t})}p({column:Kg("column-gap",getComputedStyle(e).columnGap,m),row:Kg("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,p,m]),!0,!1);return Ym((()=>{e.itemHeight>0&&e.itemWidth>0&&b(!0)}),[e]),g?null:t(u,{className:n,ref:y,...lg(u,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,h);return s?t(d,{...lg(d,h),height:e.itemHeight,index:n.index,width:e.itemWidth},o):v(c,{...lg(c,h),className:r,"data-index":n.index,key:o},i(n.index,n.data,h))}))})})),Ng=o.memo((function(){const e=Zg("HeaderComponent"),n=Jg("headerHeight"),r=Zg("headerFooterTag"),i=ip(o.useMemo((()=>e=>{n(Mp(e,"height"))}),[n]),!0,!1),a=Zg("context");return e?t(r,{ref:i,children:t(e,{...lg(e,a)})}):null})),Wg=o.memo((function(){const e=Zg("FooterComponent"),n=Jg("footerHeight"),r=Zg("headerFooterTag"),i=ip(o.useMemo((()=>e=>{n(Mp(e,"height"))}),[n]),!0,!1),a=Zg("context");return e?t(r,{ref:i,children:t(e,{...lg(e,a)})}):null})),Vg=({children:e})=>{const n=o.useContext(Vm),r=Jg("itemDimensions"),i=Jg("viewportDimensions"),a=ip(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:ag(!1),children:e})},Yg=({children:e})=>{const n=o.useContext(Vm),r=Jg("windowViewportRect"),i=Jg("itemDimensions"),a=Zg("customScrollParent"),s=cp(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:s,style:ag(!1),children:e})},Ug=o.memo((function({...n}){const r=Zg("useWindowScroll"),o=Zg("customScrollParent"),i=o||r?Xg:Qg,a=o||r?Yg:Vg,s=Zg("context");return t(i,{...n,...lg(i,s),children:e(a,{children:[t(Ng,{}),t(Lg,{}),t(Wg,{})]})})})),{Component:qg,useEmitter:Gg,useEmitterValue:Zg,usePublisher:Jg}=Nm(Pg,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Ug),Qg=hg({useEmitter:Gg,useEmitterValue:Zg,usePublisher:Jg}),Xg=fg({useEmitter:Gg,useEmitterValue:Zg,usePublisher:Jg});function Kg(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,np.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const ev=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),tv=({children:e})=>{const[n,r]=s(-1);return t(ev.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},nv=w.div`
    overflow: hidden;
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: 4px;
    background: ${Dn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${rl.mobileL} {
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
`,rv=w.div`
    background: transparent;
    padding: 0.5rem;
`,ov=w.ul`
    list-style-type: none;
`,iv=w.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Dn.Accent.Light[3]};

    ${e=>e.$active&&x`
            background: ${Dn.Accent.Light[5]};
        `}
`,av=w(z)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Dn.Primary};
`,sv=w.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,lv=w(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Primary};
`,cv=w(_)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Accent.Light[2]};
`,uv=w.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,dv=w(fr)`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Dn.Primary};
`,hv=w(dv)`
    outline-offset: 0.25rem;
`,fv=w(dv)`
    padding: 0.5rem 1rem;
`,pv=w.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,mv=w.div`
    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}
`,gv=w(A)`
    ${e=>{const t="small"===e.$variant?1:1.125;return x`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Dn.Validation.Red.Icon};
`,vv=e=>"small"===e?1:1.125,bv=e=>x`
        height: ${vv(e)}rem;
        width: ${vv(e)}rem;
    `,yv=w.div`
    background: ${Dn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,wv=w.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,xv=w(hr)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,$v=w(L)`
    color: ${Dn.Neutral[3]};
    flex-shrink: 0;
    ${e=>bv(e.$variant)}
`,Sv=w(uc)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Dn.Neutral[3]};
    cursor: pointer;

    ${e=>x`
            svg {
                ${bv(e.$variant)}
            }
        `}
`,Fv=f(((n,r)=>{var{value:o,variant:i,onClear:a}=n,s=re(n,["value","variant","onClear"]);return e(yv,{children:[e(wv,{children:[t($v,{$variant:i,"aria-hidden":!0}),t(xv,Object.assign({ref:r,value:o,$variant:i},s))]}),o&&t(Sv,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(H,{"aria-hidden":!0})}))]})})),kv=({listItems:r,multiSelect:o,selectedItems:l,disableItemFocus:c,itemsLoadState:u="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:g="default",listboxId:v,width:b,topScrollItem:y,onSelectItem:w,onSelectAll:x,onDismiss:$,onRetry:S,valueExtractor:F,listExtractor:k,renderListItem:I,renderCustomCallToAction:B,enableSearch:T,hideNoResultsDisplay:O,searchPlaceholder:C="Search",searchFunction:D,onSearch:H})=>{const{focusedIndex:_,setFocusedIndex:E}=m(ev),[z,M]=s(""),[A,R]=s(r),j=Al(u),P=(()=>{const[e,t]=s(!1);return a((()=>{t(!0)}),[]),e})(),L=i(),N=i(),W=i([]),V=i(),Y=i(null),U=e=>k?k(e):e.toString(),q=p((e=>!!ff(l,(t=>mf(t,e)))),[l]),G=Ml((()=>D(z))),Z=Ml((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=z.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),J=(e,t)=>{E(t),null==w||w(e,(e=>F?F(e):e)(e))},Q=e=>{const t=e.target.value;M(t),null==H||H()},X=()=>{var e;M(""),null===(e=V.current)||void 0===e||e.focus(),null==H||H()},K=()=>{null==S||S()};oe("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<A.length-1){const e=_+1;null===(t=W.current[e])||void 0===t||t.focus(),E(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(n=W.current[e])||void 0===n||n.focus(),E(e)}else 0===_&&V.current&&(V.current.focus(),E(-1));break;case"Space":case"Enter":document.activeElement===W.current[_]&&(e.preventDefault(),A[_]&&J(A[_],_))}})),a((()=>{if(!y&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),E(e))}),0);return()=>clearTimeout(e)}),[W,r,E,y]),a((()=>{if(P)return;if(c)return;const e=r.findIndex((e=>q(e)));V.current?(E(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):_>0?(Y.current.scrollToIndex({index:_,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[_])||void 0===e?void 0:e.focus()}),200)):-1!==e?(Y.current.scrollToIndex({index:e,align:"center"}),E(e),setTimeout((()=>{var t;return null===(t=W.current[e])||void 0===t?void 0:t.focus()}),200)):(Y.current.scrollToIndex({index:0}),E(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,c,_,r,P,E]),a((()=>{P&&j&&(c||"success"===u&&V.current&&(E(-1),V.current.focus()))}),[P,j,u,E,c]),a((()=>{R(""===z?r:D?G():Z())}),[G,Z,r,D,z]);const ee=e=>o?t(e?lv:cv,{"aria-hidden":!0}):e?t(av,{"aria-hidden":!0}):t(sv,{}),te=(e,n)=>{const r=U(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(Uc,{displayType:f,label:o,maxLines:h,selected:n,sublabel:i,truncationType:d,variant:g})},ne=(r,i)=>{if(!S||S&&"success"===u){const a=q(r),s=i===_;return t(iv,Object.assign({"aria-selected":a,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>J(r,i),onMouseEnter:()=>(e=>{E(e)})(i),ref:e=>{W.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s},{children:I?I(r,{selected:a}):e(n,{children:[ee(a),te(r,a)]})}),((e,t)=>`item_${t}__${F?F(e):e}`)(r,i))}},re=()=>{if((T||D)&&"success"===u)return t(Fv,{ref:V,onChange:Q,value:z,placeholder:C,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:g})},ie=()=>{if(o&&A.length>0&&!z&&"success"===u)return t(uv,{children:t(fv,Object.assign({onClick:x,type:"button",$variant:g},{children:0===l.length?"Select all":"Clear all"}))})},ae=()=>{if(!O&&(z||!T)&&0===A.length&&"success"===u)return e(pv,Object.assign({"data-testid":"list-no-results"},{children:[t(gv,{"data-testid":"no-result-icon",$variant:g}),t(mv,Object.assign({$variant:g},{children:"No results found."}))]}))},se=()=>{if(S&&"loading"===u){const n="small"===g?16:18;return e(pv,Object.assign({"data-testid":"list-loading"},{children:[t(hl,{$buttonStyle:"secondary",size:n}),t(mv,Object.assign({$variant:g},{children:"Loading..."}))]}))}},le=()=>{if(S&&"fail"===u)return e(pv,Object.assign({"data-testid":"list-fail"},{children:[t(gv,{"data-testid":"load-error-icon",$variant:g}),t(mv,Object.assign({$variant:g},{children:"Failed to load."}))," ",t(hv,Object.assign({onClick:K,type:"button",$variant:g},{children:"Try again."}))]}))};return e(nv,Object.assign({"data-testid":"dropdown-container",ref:L,$width:b},{children:[e(rv,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[re(),ie(),ae(),se(),le(),t(ov,Object.assign({role:"listbox",id:v},{children:t(Fg,{ref:Y,style:{height:"100%"},data:A,customScrollParent:L.current,itemContent:(e,t)=>ne(t,e)})}))]})),(()=>{if(B)return t("div",Object.assign({"data-testid":"custom-cta"},{children:B($,A)}))})()]}))},Iv=w(fr)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Kn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Bv=w.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Dc};

    svg {
        color: ${Dn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Un.BodySmall.fontSize:Un.Body.fontSize;return x`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`;var Tv;f((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(Iv,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!s&&t(Bv,Object.assign({$expanded:o,$variant:l},{children:t(k,{"aria-hidden":!0})}))]})))),w.li`
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
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Tv||(Tv={}));const Ov=w.div`
    display: flex;
    flex-direction: column;
`,Cv=e=>"right"===e?"bottom-end":"bottom-start",Dv=({enabled:r,isOpen:o,onOpen:l,onClose:c,onDismiss:u,renderElement:d,renderDropdown:h,customZIndex:f,clickToToggle:p=!1,offset:m=0,alignment:g="left",fitAvailableHeight:v})=>{var b;const y=i(null),w=i(null),{width:x}=xo({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<ol.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:F,context:k}=V({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!o?null==l||l():!e&&o&&(null==c||c(n))},whileElementsMounted:Y,placement:Cv(g),middleware:[U(m),q(),G({limiter:Z()}),J({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),$]}),I=(()=>{const[e,t]=s(void 0),n=W();return a((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Tv.Change,e),n.events.emit(Tv.Ready),()=>n.events.off(Tv.Change,e)}),[n]),e})(),{isMounted:B,styles:T}=Q(k,{initial:{opacity:0},open:{opacity:1},duration:300}),O=X(k,{enabled:r,toggle:p}),C=K(k,{enabled:r}),{getReferenceProps:D,getFloatingProps:H}=ee([O,C]);return e(n,{children:[t("div",Object.assign({ref:e=>{y.current=e,S.setReference(e)}},D(),{children:d()})),B&&t(te,{children:t(ne,Object.assign({context:k,modal:!1,initialFocus:w,returnFocus:!1},{children:t("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(b=null!=f?f:I)&&void 0!==b?b:50})},H(),{children:t(Ov,Object.assign({ref:w,style:Object.assign({},T),inert:T.opacity<1?"":void 0},{children:h({elementWidth:x})}))}))}))})]})},Hv=w(dr)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,_v=n=>{var{id:r,disabled:o=!1,error:l,value:c,format:u="12hr",readOnly:d,onChange:h,onFocus:f,onBlur:m,alignment:v="left",dropdownZIndex:b,startLimit:y,endLimit:w,interval:x=15}=n,$=re(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[S]=s((()=>zl.generate())),[F,k]=s(null),[I,B]=s(!1),[T,O]=s(""),[C,D]=s(""),[H,_]=s(""),[E,z]=s(""),[M,A]=s(""),R=i(),j=i(),P=i(),L=g((()=>wr.generateTimings(x,u,y,w)),[x,u,y,w]),N=g((()=>{if(""===E)return L;const e=wr.findClosestFlooredTime(E,L);return L.slice(L.indexOf(e))}),[L,E]),W=p((e=>wr.parseInput(e,u)),[u]);a((()=>{var e,t;if(c){const n=null!==(e=W(c.start))&&void 0!==e?e:"",r=null!==(t=W(c.end))&&void 0!==t?t:"";D(n),_(r),z(n),A(r)}}),[c,W]),a((()=>{if(l)return void B(!1);const e=W(C),t=W(H);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&wr.to24Hour(t)<wr.to24Hour(e)))return O(""),void(document.activeElement!==j.current&&document.activeElement!==P.current||B(!0));O("End time must be after start time")}B(!1)}),[C,H,W,l]);const V=e=>{o||d||(F||I||null==f||f(),k(e),B(!0))},Y=e=>{o||d||(k(e),B(!0),("start"===e?j:P).current.select())};function U(e){switch(e.code){case"Enter":"start"===F?q(C):"end"===F&&(I&&G(H),P.current.blur());break;case"Tab":Z(C,H,{})}}const q=e=>{Z(e,H,{goToNextInput:!0})},G=e=>{Z(C,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var o,i;const a=null!==(o=W(e))&&void 0!==o?o:E,s=null!==(i=W(t))&&void 0!==i?i:M;D(a),_(s);a===E&&s===M||null==h||h({start:a,end:s}),n&&void 0!==W(e)&&(k("end"),P.current.select()),r&&(k(null),B(!1),null==m||m()),z(a),A(s)},J=e=>{e.stopPropagation(),D(""),_(""),z(""),A("");null==h||h({start:"",end:""}),k(null),B(!1)},Q=e=>{R.current&&!R.current.contains(e.relatedTarget)&&F&&!I&&Z(C,H,{triggerOnBlur:!0})},X=()=>{if(!d&&!o&&((null==C?void 0:C.length)>0||(null==H?void 0:H.length)>0))return t(Ac,Object.assign({onClick:J,type:"button","aria-label":"Clear"},{children:t(Cc,{"aria-hidden":!0})}))};return e(pr,Object.assign({id:r},$,{children:[t(tv,{children:t(Dv,{enabled:!d&&!o,isOpen:I,renderElement:()=>e(Hv,Object.assign({ref:R,$disabled:o,$error:l||!!T,$readOnly:d,onBlur:Q},{children:[e(An,Object.assign({error:l||!!T,currentActive:null===F?"none":F},{children:[t(gr,{ref:j,onFocus:()=>V("start"),placeholder:"start"===F?"hh:mm":"From",onChange:e=>D(e.target.value),value:C,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":I,"aria-controls":S,"aria-autocomplete":"list"}),t(gr,{ref:P,onFocus:()=>V("end"),placeholder:"end"===F?"hh:mm":"To",onChange:e=>_(e.target.value),value:H,disabled:o,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":I,"aria-controls":S,"aria-autocomplete":"list"})]})),X()]})),renderDropdown:()=>{if(I)return t(kv,"start"===F?{listItems:L,onSelectItem:q,selectedItems:[C],disableItemFocus:!0,topScrollItem:wr.findClosestFlooredTime(W(C),L),listboxId:S}:{listItems:N,onSelectItem:G,selectedItems:[H],disableItemFocus:!0,topScrollItem:wr.findClosestFlooredTime(W(H),N),listboxId:S})},onClose:e=>{"outside-press"===e?(k(null),B(!1),null==m||m()):Z(C,H,{triggerOnBlur:!0})},onDismiss:()=>{("start"===F?j:P).current.focus(),B(!1)},offset:8,alignment:v,fitAvailableHeight:!0,customZIndex:b})}),!l&&T&&t(Tc,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:T}))]}))},Ev=e=>{var{variant:n="dial"}=e,r=re(e,["variant"]);return"dial"===n?t(Bc,Object.assign({},r)):"combobox"===n?t(_v,Object.assign({},r)):void 0};export{Ev as TimeRangePicker};
//# sourceMappingURL=index.js.map
