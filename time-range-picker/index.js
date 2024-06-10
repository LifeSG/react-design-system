import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as r from"react";import n,{useRef as i,useState as a,isValidElement as o,createRef as s,cloneElement as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import{ArrowRightIcon as m}from"@lifesg/react-icons";import y,{css as v,keyframes as b}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as F}from"react-dom";import{ExternalIcon as x}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as B}from"@lifesg/react-icons/circle-dot";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{SquareIcon as k}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";function E(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,I="object"==typeof A&&A&&A.Object===Object&&A,P="object"==typeof self&&self&&self.Object===Object&&self,T=I||P||Function("return this")(),z=T.Symbol,j=z,N=Object.prototype,R=N.hasOwnProperty,V=N.toString,L=j?j.toStringTag:void 0;var W=function(e){var t=R.call(e,L),r=e[L];try{e[L]=void 0;var n=!0}catch(e){}var i=V.call(e);return n&&(t?e[L]=r:delete e[L]),i},Y=Object.prototype.toString;var U=W,q=function(e){return Y.call(e)},Q=z?z.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?U(e):q(e)};var G=Z,X=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||X(e)&&"[object Symbol]"==G(e)},K=H,ee=J,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,re=/^\w*$/;var ne=function(e,t){if(K(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ee(e))||(re.test(e)||!te.test(e)||null!=t&&e in Object(t))};var ie=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ae=Z,oe=ie;var se,le=function(e){if(!oe(e))return!1;var t=ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ue=T["__core-js_shared__"],ce=(se=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+se:"";var de=function(e){return!!ce&&ce in e},he=Function.prototype.toString;var fe=le,pe=de,ge=ie,me=function(e){if(null!=e){try{return he.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=/^\[object .+?Constructor\]$/,ve=Function.prototype,be=Object.prototype,we=ve.toString,$e=be.hasOwnProperty,Se=RegExp("^"+we.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Fe=function(e){return!(!ge(e)||pe(e))&&(fe(e)?Se:ye).test(me(e))},xe=function(e,t){return null==e?void 0:e[t]};var De=function(e,t){var r=xe(e,t);return Fe(r)?r:void 0},Be=De(Object,"create"),_e=Be;var ke=function(){this.__data__=_e?_e(null):{},this.size=0};var Oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Be,Ee=Object.prototype.hasOwnProperty;var Ae=function(e){var t=this.__data__;if(Me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ee.call(t,e)?t[e]:void 0},Ce=Be,He=Object.prototype.hasOwnProperty;var Ie=Be;var Pe=ke,Te=Oe,ze=Ae,je=function(e){var t=this.__data__;return Ce?void 0!==t[e]:He.call(t,e)},Ne=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Re.prototype.clear=Pe,Re.prototype.delete=Te,Re.prototype.get=ze,Re.prototype.has=je,Re.prototype.set=Ne;var Ve=Re;var Le=function(){this.__data__=[],this.size=0};var We=function(e,t){return e===t||e!=e&&t!=t};var Ye=function(e,t){for(var r=e.length;r--;)if(We(e[r][0],t))return r;return-1},Ue=Ye,qe=Array.prototype.splice;var Qe=Ye;var Ze=Ye;var Ge=Ye;var Xe=Le,Je=function(e){var t=this.__data__,r=Ue(t,e);return!(r<0)&&(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,!0)},Ke=function(e){var t=this.__data__,r=Qe(t,e);return r<0?void 0:t[r][1]},et=function(e){return Ze(this.__data__,e)>-1},tt=function(e,t){var r=this.__data__,n=Ge(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function rt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rt.prototype.clear=Xe,rt.prototype.delete=Je,rt.prototype.get=Ke,rt.prototype.has=et,rt.prototype.set=tt;var nt=rt,it=De(T,"Map"),at=Ve,ot=nt,st=it;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ut=function(e,t){var r=e.__data__;return lt(t)?r["string"==typeof t?"string":"hash"]:r.map},ct=ut;var dt=ut;var ht=ut;var ft=ut;var pt=function(){this.size=0,this.__data__={hash:new at,map:new(st||ot),string:new at}},gt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return dt(this,e).get(e)},yt=function(e){return ht(this,e).has(e)},vt=function(e,t){var r=ft(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}bt.prototype.clear=pt,bt.prototype.delete=gt,bt.prototype.get=mt,bt.prototype.has=yt,bt.prototype.set=vt;var wt=bt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new($t.Cache||wt),r}$t.Cache=wt;var St=$t;var Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,Dt=function(e){var t=St(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ft,(function(e,r,n,i){t.push(n?i.replace(xt,"$1"):r||e)})),t}));var Bt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},_t=H,kt=J,Ot=z?z.prototype:void 0,Mt=Ot?Ot.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(_t(t))return Bt(t,e)+"";if(kt(t))return Mt?Mt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},At=Et;var Ct=H,Ht=ne,It=Dt,Pt=function(e){return null==e?"":At(e)};var Tt=J;var zt=function(e,t){return Ct(e)?e:Ht(e,t)?[e]:It(Pt(e))},jt=function(e){if("string"==typeof e||Tt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Nt=function(e,t){for(var r=0,n=(t=zt(t,e)).length;null!=e&&r<n;)e=e[jt(t[r++])];return r&&r==n?e:void 0};var Rt=C((function(e,t,r){var n=null==e?void 0:Nt(e,t);return void 0===n?r:n}));const Vt=(e,t,r)=>t?Rt(r,t)||Rt(e,t):r||e,Lt=(e,t)=>{const r=t||e.defaultValue;return Rt(e.collections,r)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wt||(Wt={}));const Yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ut=e=>t=>{const r=t.theme,n=Lt(Yt,r[Wt.colorScheme]);return r.options&&r.options.color?Vt(n,e,r.options.color):Vt(n,e)},qt={Brand:{1:Ut("Brand.1"),2:Ut("Brand.2"),3:Ut("Brand.3"),4:Ut("Brand.4"),5:Ut("Brand.5"),6:Ut("Brand.6")},Primary:Ut("Primary"),PrimaryDark:Ut("PrimaryDark"),Secondary:Ut("Secondary"),Accent:{Light:{1:Ut("Accent.Light.1"),2:Ut("Accent.Light.2"),3:Ut("Accent.Light.3"),4:Ut("Accent.Light.4"),5:Ut("Accent.Light.5"),6:Ut("Accent.Light.6")},Dark:{1:Ut("Accent.Dark.1"),2:Ut("Accent.Dark.2"),3:Ut("Accent.Dark.3")}},Neutral:{1:Ut("Neutral.1"),2:Ut("Neutral.2"),3:Ut("Neutral.3"),4:Ut("Neutral.4"),5:Ut("Neutral.5"),6:Ut("Neutral.6"),7:Ut("Neutral.7"),8:Ut("Neutral.8")},Validation:{Green:{Text:Ut("Validation.Green.Text"),Icon:Ut("Validation.Green.Icon"),Border:Ut("Validation.Green.Border"),Background:Ut("Validation.Green.Background")},Orange:{Text:Ut("Validation.Orange.Text"),Icon:Ut("Validation.Orange.Icon"),Border:Ut("Validation.Orange.Border"),Background:Ut("Validation.Orange.Background"),Badge:Ut("Validation.Orange.Badge")},Red:{Text:Ut("Validation.Red.Text"),Icon:Ut("Validation.Red.Icon"),Border:Ut("Validation.Red.Border"),Background:Ut("Validation.Red.Background")},Blue:{Text:Ut("Validation.Blue.Text"),Icon:Ut("Validation.Blue.Icon"),Border:Ut("Validation.Blue.Border"),Background:Ut("Validation.Blue.Background")}},Shadow:{Accent:Ut("Shadow.Accent"),Red:Ut("Shadow.Red"),Elevation:Ut("Shadow.Elevation")}},Qt=y.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return v`
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
`,Zt=y.div`
    width: 100%; // Force next flex item to break to next line
`,Gt=y.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Xt=y(m)`
    color: ${qt.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Jt=y.div`
    position: absolute;
    background: ${e=>e.$error?qt.Validation.Red.Border(e):qt.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return v`
                    opacity: 1;
                `;case"end":return v`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return v`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,Kt=({children:r,currentActive:n,error:i,className:a,wrap:o})=>{const[s,l]=r;return e(Qt,Object.assign({className:a,$wrap:o},{children:[t(Gt,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Xt,{}),o&&t(Zt,{}),t(Gt,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Jt,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:o})]}))};var er=function(e,t){return er=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},er(e,t)};var tr=function(){return tr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},tr.apply(this,arguments)};var rr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var nr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ir="object"==typeof rr&&rr&&rr.Object===Object&&rr,ar="object"==typeof self&&self&&self.Object===Object&&self,or=ir||ar||Function("return this")(),sr=or,lr=function(){return sr.Date.now()},ur=/\s/;var cr=function(e){for(var t=e.length;t--&&ur.test(e.charAt(t)););return t},dr=/^\s+/;var hr=function(e){return e?e.slice(0,cr(e)+1).replace(dr,""):e},fr=or.Symbol,pr=fr,gr=Object.prototype,mr=gr.hasOwnProperty,yr=gr.toString,vr=pr?pr.toStringTag:void 0;var br=function(e){var t=mr.call(e,vr),r=e[vr];try{e[vr]=void 0;var n=!0}catch(e){}var i=yr.call(e);return n&&(t?e[vr]=r:delete e[vr]),i},wr=Object.prototype.toString;var $r=br,Sr=function(e){return wr.call(e)},Fr=fr?fr.toStringTag:void 0;var xr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fr&&Fr in Object(e)?$r(e):Sr(e)},Dr=function(e){return null!=e&&"object"==typeof e};var Br=hr,_r=nr,kr=function(e){return"symbol"==typeof e||Dr(e)&&"[object Symbol]"==xr(e)},Or=/^[-+]0x[0-9a-f]+$/i,Mr=/^0b[01]+$/i,Er=/^0o[0-7]+$/i,Ar=parseInt;var Cr=nr,Hr=lr,Ir=function(e){if("number"==typeof e)return e;if(kr(e))return NaN;if(_r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Br(e);var r=Mr.test(e);return r||Er.test(e)?Ar(e.slice(2),r?2:8):Or.test(e)?NaN:+e},Pr=Math.max,Tr=Math.min;var zr=function(e,t,r){var n,i,a,o,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,a=i;return n=i=void 0,u=t,o=e.apply(a,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-u>=a}function g(){var e=Hr();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?Tr(r,a-(e-u)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,o)}function y(){var e=Hr(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Ir(t)||0,Cr(r)&&(c=!!r.leading,a=(d="maxWait"in r)?Pr(Ir(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Hr())},y},jr=zr,Nr=nr;var Rr=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),jr(e,t,{leading:n,maxWait:t,trailing:i})},Vr=function(e,t,r,n){switch(t){case"debounce":return zr(e,r,n);case"throttle":return Rr(e,r,n);default:return e}},Lr=function(e){return"function"==typeof e},Wr=function(){return"undefined"==typeof window},Yr=function(e){return e instanceof Element||e instanceof HTMLDocument},Ur=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&Lr(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Wr()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Wr())return null;if(t)return document.querySelector(t);if(n&&Yr(n))return n;if(r.targetRef&&Yr(r.targetRef.current))return r.targetRef.current;var i=S(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Ur(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Wr()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Lr(t)?"renderProp":Lr(n)?"childFunction":o(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,l=void 0===a?1e3:a,u=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=s(),r.observableElement=null,Wr()||(r.resizeHandler=Vr(r.createResizeHandler,i,l,u),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}er(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Wr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,u={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(u);case"childFunction":return(e=i)(u);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(u,["targetRef"]);return l(e,c)}return l(e,u);case"childArray":return(e=i).map((function(e){return!!e&&l(e,u)}));default:return r.createElement(o,null)}}}(u);var qr=Wr()?c:d;var Qr=Object.defineProperty,Zr={};((e,t)=>{for(var r in t)Qr(e,r,{get:t[r],enumerable:!0})})(Zr,{assign:()=>On,colors:()=>Bn,createStringInterpolator:()=>Sn,skipAnimation:()=>_n,to:()=>Fn,willAdvance:()=>kn});var Gr=fn(),Xr=e=>un(e,Gr),Jr=fn();Xr.write=e=>un(e,Jr);var Kr=fn();Xr.onStart=e=>un(e,Kr);var en=fn();Xr.onFrame=e=>un(e,en);var tn=fn();Xr.onFinish=e=>un(e,tn);var rn=[];Xr.setTimeout=(e,t)=>{const r=Xr.now()+t,n=()=>{const e=rn.findIndex((e=>e.cancel==n));~e&&rn.splice(e,1),sn-=~e?1:0},i={time:r,handler:e,cancel:n};return rn.splice(nn(r),0,i),sn+=1,cn(),i};var nn=e=>~(~rn.findIndex((t=>t.time>e))||~rn.length);Xr.cancel=e=>{Kr.delete(e),en.delete(e),tn.delete(e),Gr.delete(e),Jr.delete(e)},Xr.sync=e=>{ln=!0,Xr.batchedUpdates(e),ln=!1},Xr.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Xr.onStart(r)}return n.handler=e,n.cancel=()=>{Kr.delete(r),t=null},n};var an="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Xr.use=e=>an=e,Xr.now="undefined"!=typeof performance?()=>performance.now():Date.now,Xr.batchedUpdates=e=>e(),Xr.catch=console.error,Xr.frameLoop="always",Xr.advance=()=>{"demand"!==Xr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):hn()};var on=-1,sn=0,ln=!1;function un(e,t){ln?(t.delete(e),e(0)):(t.add(e),cn())}function cn(){on<0&&(on=0,"demand"!==Xr.frameLoop&&an(dn))}function dn(){~on&&(an(dn),Xr.batchedUpdates(hn))}function hn(){const e=on;on=Xr.now();const t=nn(on);t&&(pn(rn.splice(0,t),(e=>e.handler())),sn-=t),sn?(Kr.flush(),Gr.flush(e?Math.min(64,on-e):16.667),en.flush(),Jr.flush(),tn.flush()):on=-1}function fn(){let e=new Set,t=e;return{add(r){sn+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(sn-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,sn-=t.size,pn(t,(t=>t(r)&&e.add(t))),sn+=e.size,t=e)}}}function pn(e,t){e.forEach((e=>{try{t(e)}catch(e){Xr.catch(e)}}))}function gn(){}var mn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function yn(e,t){if(mn.arr(e)){if(!mn.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var vn=(e,t)=>e.forEach(t);function bn(e,t,r){if(mn.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var wn=e=>mn.und(e)?[]:mn.arr(e)?e:[e];function $n(e,t){if(e.size){const r=Array.from(e);e.clear(),vn(r,t)}}var Sn,Fn,xn=(e,...t)=>$n(e,(e=>e(...t))),Dn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Bn=null,_n=!1,kn=gn,On=e=>{e.to&&(Fn=e.to),e.now&&(Xr.now=e.now),void 0!==e.colors&&(Bn=e.colors),null!=e.skipAnimation&&(_n=e.skipAnimation),e.createStringInterpolator&&(Sn=e.createStringInterpolator),e.requestAnimationFrame&&Xr.use(e.requestAnimationFrame),e.batchedUpdates&&(Xr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(kn=e.willAdvance),e.frameLoop&&(Xr.frameLoop=e.frameLoop)},Mn=new Set,En=[],An=[],Cn=0,Hn={get idle(){return!Mn.size&&!En.length},start(e){Cn>e.priority?(Mn.add(e),Xr.onStart(In)):(Pn(e),Xr(zn))},advance:zn,sort(e){if(Cn)Xr.onFrame((()=>Hn.sort(e)));else{const t=En.indexOf(e);~t&&(En.splice(t,1),Tn(e))}},clear(){En=[],Mn.clear()}};function In(){Mn.forEach(Pn),Mn.clear(),Xr(zn)}function Pn(e){En.includes(e)||Tn(e)}function Tn(e){En.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(En,(t=>t.priority>e.priority)),0,e)}function zn(e){const t=An;for(let r=0;r<En.length;r++){const n=En[r];Cn=n.priority,n.idle||(kn(n),n.advance(e),n.idle||t.push(n))}return Cn=0,(An=En).length=0,(En=t).length>0}var jn="[-+]?\\d*\\.?\\d+",Nn=jn+"%";function Rn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Vn=new RegExp("rgb"+Rn(jn,jn,jn)),Ln=new RegExp("rgba"+Rn(jn,jn,jn,jn)),Wn=new RegExp("hsl"+Rn(jn,Nn,Nn)),Yn=new RegExp("hsla"+Rn(jn,Nn,Nn,jn)),Un=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Qn=/^#([0-9a-fA-F]{6})$/,Zn=/^#([0-9a-fA-F]{8})$/;function Gn(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Xn(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=Gn(i,n,e+1/3),o=Gn(i,n,e),s=Gn(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Jn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Kn(e){return(parseFloat(e)%360+360)%360/360}function ei(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ri(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Qn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Bn&&void 0!==Bn[e]?Bn[e]:(t=Vn.exec(e))?(Jn(t[1])<<24|Jn(t[2])<<16|Jn(t[3])<<8|255)>>>0:(t=Ln.exec(e))?(Jn(t[1])<<24|Jn(t[2])<<16|Jn(t[3])<<8|ei(t[4]))>>>0:(t=Un.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Zn.exec(e))?parseInt(t[1],16)>>>0:(t=qn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Wn.exec(e))?(255|Xn(Kn(t[1]),ti(t[2]),ti(t[3])))>>>0:(t=Yn.exec(e))?(Xn(Kn(t[1]),ti(t[2]),ti(t[3]))|ei(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ni=(e,t,r)=>{if(mn.fun(e))return e;if(mn.arr(e))return ni({range:e,output:t,extrapolate:r});if(mn.str(e.output[0]))return Sn(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=a(u),n===-1/0?u=-u:i===1/0?u+=n:u=u*(i-n)+n;return u}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var ii=1.70158,ai=1.525*ii,oi=ii+1,si=2*Math.PI/3,li=2*Math.PI/4.5,ui=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},ci={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>oi*e*e*e-ii*e*e,easeOutBack:e=>1+oi*Math.pow(e-1,3)+ii*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ai)/2:(Math.pow(2*e-2,2)*((ai+1)*(2*e-2)+ai)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*si),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*si)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*li)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*li)/2+1,easeInBounce:e=>1-ui(1-e),easeOutBounce:ui,easeInOutBounce:e=>e<.5?(1-ui(1-2*e))/2:(1+ui(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},di=Symbol.for("FluidValue.get"),hi=Symbol.for("FluidValue.observers"),fi=e=>Boolean(e&&e[di]),pi=e=>e&&e[di]?e[di]():e,gi=e=>e[hi]||null;function mi(e,t){const r=e[hi];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var yi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");vi(this,e)}},vi=(e,t)=>Si(e,di,t);function bi(e,t){if(e[di]){let r=e[hi];r||Si(e,hi,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function wi(e,t){const r=e[hi];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[hi]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var $i,Si=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Fi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Di=new RegExp(`(${Fi.source})(%|[a-z]+)`,"i"),Bi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,_i=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ki=e=>{const[t,r]=Oi(e);if(!t||Dn())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&_i.test(r)?ki(r):r||e},Oi=e=>{const t=_i.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Mi=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ei=e=>{$i||($i=Bn?new RegExp(`(${Object.keys(Bn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pi(e).replace(_i,ki).replace(xi,ri).replace($i,ri))),r=t.map((e=>e.match(Fi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ni({...e,output:t})));return e=>{const r=!Di.test(t[0])&&t.find((e=>Di.test(e)))?.replace(Fi,"");let i=0;return t[0].replace(Fi,(()=>`${n[i++](e)}${r||""}`)).replace(Bi,Mi)}},Ai="react-spring: ",Ci=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ai}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Hi=Ci(console.warn);var Ii=Ci(console.warn);function Pi(e){return mn.str(e)&&("#"==e[0]||/\d/.test(e)||!Dn()&&_i.test(e)||e in(Bn||{}))}var Ti=Dn()?c:d,zi=()=>{const e=i(!1);return Ti((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ji(){const e=a()[1],t=zi();return()=>{t.current&&e(Math.random())}}var Ni=e=>c(e,Ri),Ri=[];function Vi(e){const t=i();return c((()=>{t.current=e})),t.current}var Li=Symbol.for("Animated:node"),Wi=e=>e&&e[Li],Yi=(e,t)=>{return r=e,n=Li,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ui=e=>e&&e[Li]&&e[Li].getPayload(),qi=class{constructor(){Yi(this,this)}getPayload(){return this.payload||[]}},Qi=class extends qi{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Qi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Zi=class extends Qi{constructor(e){super(0),this._string=null,this._toString=ni({output:[e,e]})}static create(e){return new Zi(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ni({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gi={dependencies:null},Xi=class extends qi{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return bn(this.source,((r,n)=>{var i;(i=r)&&i[Li]===i?t[n]=r.getValue(e):fi(r)?t[n]=pi(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return bn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gi.dependencies&&fi(e)&&Gi.dependencies.add(e);const t=Ui(e);t&&vn(t,(e=>this.add(e)))}},Ji=class extends Xi{constructor(e){super(e)}static create(e){return new Ji(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ki)),!0)}};function Ki(e){return(Pi(e)?Zi:Qi).create(e)}function ea(e){const t=Wi(e);return t?t.constructor:mn.arr(e)?Ji:Pi(e)?Zi:Qi}var ta=(e,t)=>{const n=!mn.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((a,o)=>{const s=i(null),l=n&&f((e=>{s.current=function(e,t){e&&(mn.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const r=new Set;Gi.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Xi(e),Gi.dependencies=null,[e,r]}(a,t),h=ji(),p=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new ra(p,d),m=i();Ti((()=>(m.current=g,vn(d,(e=>bi(e,g))),()=>{m.current&&(vn(m.current.deps,(e=>wi(e,m.current))),Xr.cancel(m.current.update))}))),c(p,[]),Ni((()=>()=>{const e=m.current;vn(e.deps,(t=>wi(t,e)))}));const y=t.getComponentProps(u.getValue());return r.createElement(e,{...y,ref:l})}))},ra=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Xr.write(this.update)}};var na=Symbol.for("AnimatedComponent"),ia=e=>mn.str(e)?e:e&&mn.str(e.displayName)?e.displayName:mn.fun(e)&&e.name||null;function aa(e,...t){return mn.fun(e)?e(...t):e}var oa=(e,t)=>!0===e||!!(t&&e&&(mn.fun(e)?e(t):wn(e).includes(t))),sa=(e,t)=>mn.obj(e)?t&&e[t]:e,la=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ua=e=>e,ca=(e,t=ua)=>{let r=da;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);mn.und(r)||(n[i]=r)}return n},da=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ha={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function fa(e){const t=function(e){const t={};let r=0;if(bn(e,((e,n)=>{ha[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return bn(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function pa(e){return e=pi(e),mn.arr(e)?e.map(pa):Pi(e)?Zr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ga(e){return mn.fun(e)||mn.arr(e)&&mn.obj(e[0])}var ma={tension:170,friction:26,mass:1,damping:1,easing:ci.linear,clamp:!1},ya=class{constructor(){this.velocity=0,Object.assign(this,ma)}};function va(e,t){if(mn.und(t.decay)){const r=!mn.und(t.tension)||!mn.und(t.friction);!r&&mn.und(t.frequency)&&mn.und(t.damping)&&mn.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var ba=[],wa=class{constructor(){this.changed=!1,this.values=ba,this.toValues=null,this.fromValues=ba,this.config=new ya,this.immediate=!1}};function $a(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,u,c=oa(r.cancel??n?.cancel,t);if(c)f();else{mn.und(r.pause)||(i.paused=oa(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||oa(e,t)),l=aa(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-Xr.now()}function h(){l>0&&!Zr.skipAnimation?(i.delayed=!0,u=Xr.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var Sa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Da(e.get()):t.every((e=>e.noop))?Fa(e.get()):xa(e.get(),t.every((e=>e.finished))),Fa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xa=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Da=e=>({value:e,cancelled:!0,finished:!1});function Ba(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const u=ca(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&Da(n)||i!==r.asyncId&&xa(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new ka,o=new Oa;return(async()=>{if(Zr.skipAnimation)throw _a(r),o.result=xa(n,!1),d(o),o;f(a);const s=mn.obj(e)?{...e}:{...t,to:e};s.parentId=i,bn(u,((e,t)=>{mn.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Zr.skipAnimation)return _a(r),xa(n,!1);try{let t;t=mn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=xa(n.get(),!0,!1)}catch(e){if(e instanceof ka)g=e.result;else{if(!(e instanceof Oa))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return mn.fun(o)&&Xr.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function _a(e,t){$n(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ka=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Oa=class extends Error{constructor(){super("SkipAnimationSignal")}},Ma=e=>e instanceof Aa,Ea=1,Aa=class extends yi{constructor(){super(...arguments),this.id=Ea++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Wi(this);return e&&e.getValue()}to(...e){return Zr.to(this,e)}interpolate(...e){return Hi(`${Ai}The "interpolate" function is deprecated in v9 (use "to" instead)`),Zr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){mi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hn.sort(this),mi(this,{type:"priority",parent:this,priority:e})}},Ca=Symbol.for("SpringPhase"),Ha=e=>(1&e[Ca])>0,Ia=e=>(2&e[Ca])>0,Pa=e=>(4&e[Ca])>0,Ta=(e,t)=>t?e[Ca]|=3:e[Ca]&=-3,za=(e,t)=>t?e[Ca]|=4:e[Ca]&=-5,ja=class extends Aa{constructor(e,t){if(super(),this.animation=new wa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mn.und(e)||!mn.und(t)){const r=mn.obj(e)?{...e}:{...t,from:e};mn.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ia(this)||this._state.asyncTo)||Pa(this)}get goal(){return pi(this.animation.to)}get velocity(){const e=Wi(this);return e instanceof Qi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ha(this)}get isAnimating(){return Ia(this)}get isPaused(){return Pa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=Ui(n.to);!o&&fi(n.to)&&(i=wn(pi(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==Zi?1:o?o[l].lastPosition:i[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=mn.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(mn.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!mn.und(n),f=r==u?s.v0>0:r<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(o=-o*n,d=u));o+=(1e-6*-a.tension*(d-u)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(u-r),o=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=Wi(this),l=s.getValue();if(t){const e=pi(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Xr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ia(this)){const{to:e,config:t}=this.animation;Xr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return mn.und(e)?(r=this.queue||[],this.queue=[]):r=[mn.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Sa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),_a(this._state,e&&this._lastCallId),Xr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=mn.obj(r)?r[t]:r,(null==r||ga(r))&&(r=void 0),n=mn.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Ha(this)||(e.reverse&&([r,n]=[n,r]),n=pi(n),mn.und(n)?Wi(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,ca(e,((e,t)=>/^on/.test(t)?sa(e,r):e))),Ua(this,e,"onProps"),qa(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return $a(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{Pa(this)||(za(this,!0),xn(a.pauseQueue),qa(this,"onPause",xa(this,Na(this,this.animation.to)),this))},resume:()=>{Pa(this)&&(za(this,!1),Ia(this)&&this._resume(),xn(a.resumeQueue),qa(this,"onResume",xa(this,Na(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Ra(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Da(this));const n=!mn.und(e.to),i=!mn.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Da(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||n||t.default&&!mn.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!yn(d,u);h&&(s.from=d),d=pi(d);const f=!yn(c,l);f&&this._focus(c);const p=ga(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(va(r={...r},t),t={...r,...t}),va(e,t),Object.assign(e,t);for(const t in ma)null==e[t]&&(e[t]=ma[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;mn.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,aa(t.config,a),t.config!==o.config?aa(o.config,a):void 0);let v=Wi(this);if(!v||mn.und(c))return r(xa(this,!0));const b=mn.und(t.reset)?i&&!t.default:!mn.und(d)&&oa(t.reset,a),w=b?d:this.get(),$=pa(c),S=mn.num($)||mn.arr($)||Pi($),F=!p&&(!S||oa(o.immediate||t.immediate,a));if(f){const e=ea(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let D=fi(c),B=!1;if(!D){const e=b||!Ha(this)&&h;(f||e)&&(B=yn(pa(w),$),D=!B),(yn(s.immediate,F)||F)&&yn(g.decay,m)&&yn(g.velocity,y)||(D=!0)}if(B&&Ia(this)&&(s.changed&&!b?D=!0:D||this._stop(l)),!p&&((D||fi(l))&&(s.values=v.getPayload(),s.toValues=fi(c)?null:x==Zi?[1]:wn($)),s.immediate!=F&&(s.immediate=F,F||b||this._set(l)),D)){const{onRest:e}=s;vn(Ya,(e=>Ua(this,t,e)));const n=xa(this,Na(this,l));xn(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Xr.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?aa(o.onRest,n):s.onStart?.(n,this)}))}b&&this._set(w),p?r(Ba(t.to,t,this._state,this)):D?this._start():Ia(this)&&!f?this._pendingCalls.add(r):r(Fa(w))}_focus(e){const t=this.animation;e!==t.to&&(gi(this)&&this._detach(),t.to=e,gi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;fi(t)&&(bi(t,this),Ma(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;fi(e)&&wi(e,this)}_set(e,t=!0){const r=pi(e);if(!mn.und(r)){const e=Wi(this);if(!e||!yn(r,e.getValue())){const n=ea(r);e&&e.constructor==n?e.setValue(r):Yi(this,n.create(r)),e&&Xr.batchedUpdates((()=>{this._onChange(r,t)}))}}return Wi(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qa(this,"onStart",xa(this,Na(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),aa(this.animation.onChange,e,this)),aa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Wi(this).reset(pi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ia(this)||(Ta(this,!0),Pa(this)||this._resume())}_resume(){Zr.skipAnimation?this.finish():Hn.start(this)}_stop(e,t){if(Ia(this)){Ta(this,!1);const r=this.animation;vn(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),mi(this,{type:"idle",parent:this});const n=t?Da(this.get()):xa(this.get(),Na(this,e??r.to));xn(this._pendingCalls,n),r.changed&&(r.changed=!1,qa(this,"onRest",n,this))}}};function Na(e,t){const r=pa(t);return yn(pa(e.get()),r)}function Ra(e,t=e.loop,r=e.to){const n=aa(t);if(n){const i=!0!==n&&fa(n),a=(i||e).reverse,o=!i||i.reset;return Va({...e,loop:t,default:!1,pause:void 0,to:!a||ga(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function Va(e){const{to:t,from:r}=e=fa(e),n=new Set;return mn.obj(t)&&Wa(t,n),mn.obj(r)&&Wa(r,n),e.keys=n.size?Array.from(n):null,e}function La(e){const t=Va(e);return mn.und(t.default)&&(t.default=ca(t)),t}function Wa(e,t){bn(e,((e,r)=>null!=e&&t.add(r)))}var Ya=["onStart","onRest","onChange","onPause","onResume"];function Ua(e,t,r){e.animation[r]=t[r]!==la(t,r)?sa(t[r],e.key):void 0}function qa(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Qa=["onStart","onChange","onRest"],Za=1,Ga=class{constructor(e,t){this.id=Za++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];mn.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Va(e)),this}start(e){let{queue:t}=this;return e?t=wn(e).map(Va):this.queue=[],this._flush?this._flush(this,t):(no(this,t),Xa(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;vn(wn(t),(t=>r[t].stop(!!e)))}else _a(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mn.und(e))this.start({pause:!0});else{const t=this.springs;vn(wn(e),(e=>t[e].pause()))}return this}resume(e){if(mn.und(e))this.start({pause:!1});else{const t=this.springs;vn(wn(e),(e=>t[e].resume()))}return this}each(e){bn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,$n(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&$n(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,$n(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Xr.onFrame(this._onFrame)}};function Xa(e,t){return Promise.all(t.map((t=>Ja(e,t)))).then((t=>Sa(e,t)))}async function Ja(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,u=mn.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=mn.arr(i)||mn.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):vn(Qa,(r=>{const n=t[r];if(mn.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,xn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===la(t,"cancel");(c||f&&d.asyncId)&&h.push($a(++e._lastAsyncId,{props:t,state:d,actions:{pause:gn,resume:gn,start(t,r){f?(_a(d,e._lastAsyncId),r(Da(e))):(t.onRest=s,r(Ba(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Sa(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=Ra(t,o,i);if(r)return no(e,[r]),Ja(e,r,!0)}return l&&Xr.batchedUpdates((()=>l(p,e,e.item))),p}function Ka(e,t){const r={...e.springs};return t&&vn(wn(t),(e=>{mn.und(e.keys)&&(e=Va(e)),mn.obj(e.to)||(e={...e,to:void 0}),ro(r,e,(e=>to(e)))})),eo(e,r),r}function eo(e,t){bn(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,bi(t,e))}))}function to(e,t){const r=new ja;return r.key=e,t&&bi(r,t),r}function ro(e,t,r){t.keys&&vn(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function no(e,t){vn(t,(t=>{ro(e.springs,t,(t=>to(t,e)))}))}var io,ao,oo=({children:e,...t})=>{const n=p(so),o=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let s=o;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return c((()=>{n.current=s,o==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:l}=so;return r.createElement(l,{value:t},e)},so=(io=oo,ao={},Object.assign(io,r.createContext(ao)),io.Provider._context=io,io.Consumer._context=io,io);oo.Provider=so.Provider,oo.Consumer=so.Consumer;var lo=()=>{const e=[],t=function(t){Ii(`${Ai}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return vn(e,((e,i)=>{if(mn.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return vn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vn(e,(e=>e.resume(...arguments))),this},t.set=function(t){vn(e,((e,r)=>{const n=mn.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return vn(e,((e,n)=>{if(mn.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return vn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vn(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return mn.fun(e)?e(r,t):e};return t._getProps=r,t};function uo(e,t){const r=mn.fun(e),[[n],a]=function(e,t,r){const n=mn.fun(t)&&t;n&&!r&&(r=[]);const a=g((()=>n||3==arguments.length?lo():void 0),[]),o=i(0),s=ji(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const r=Ka(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Xa(e,t):new Promise((n=>{eo(e,r),l.queue.push((()=>{n(Xa(e,t))})),s()}))}})),[]),u=i([...l.ctrls]),c=[],d=Vi(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=u.current[i]||(u.current[i]=new Ga(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=La(r))}}g((()=>{vn(u.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),r);const f=u.current.map(((e,t)=>Ka(e,c[t]))),m=p(oo),y=Vi(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ti((()=>{o.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],vn(e,(e=>e()))),vn(u.current,((e,t)=>{a?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Ni((()=>()=>{vn(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return a?[b,a]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}var co=class extends Aa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ni(...t);const r=this._get(),n=ea(r);Yi(this,n.create(r))}advance(e){const t=this._get();yn(t,this.get())||(Wi(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fo(this._active)&&po(this)}_get(){const e=mn.arr(this.source)?this.source.map(pi):wn(pi(this.source));return this.calc(...e)}_start(){this.idle&&!fo(this._active)&&(this.idle=!1,vn(Ui(this),(e=>{e.done=!1})),Zr.skipAnimation?(Xr.batchedUpdates((()=>this.advance())),po(this)):Hn.start(this))}_attach(){let e=1;vn(wn(this.source),(t=>{fi(t)&&bi(t,this),Ma(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vn(wn(this.source),(e=>{fi(e)&&wi(e,this)})),this._active.clear(),po(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=wn(this.source).reduce(((e,t)=>Math.max(e,(Ma(t)?t.priority:0)+1)),0))}};function ho(e){return!1!==e.idle}function fo(e){return!e.size||Array.from(e).every(ho)}function po(e){e.idle||(e.idle=!0,vn(Ui(e),(e=>{e.done=!0})),mi(e,{type:"idle",parent:e}))}Zr.assign({createStringInterpolator:Ei,to:(e,t)=>new co(e,t)});var go=/^--/;function mo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||go.test(e)||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}var yo={};var vo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bo=["Webkit","Ms","Moz","O"];vo=Object.keys(vo).reduce(((e,t)=>(bo.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),vo);var wo=/^(matrix|translate|scale|rotate|skew)/,$o=/^(translate)/,So=/^(rotate|skew)/,Fo=(e,t)=>mn.num(e)&&0!==e?e+t:e,xo=(e,t)=>mn.arr(e)?e.every((e=>xo(e,t))):mn.num(e)?e===t:parseFloat(e)===t,Do=class extends Xi{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Fo(e,"px"))).join(",")})`,xo(e,0)]))),bn(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(wo.test(t)){if(delete n[t],mn.und(e))return;const r=$o.test(t)?"px":So.test(t)?"deg":"";i.push(wn(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Fo(i,r)})`,xo(i,0)]:e=>[`${t}(${e.map((e=>Fo(e,r))).join(",")})`,xo(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Bo(i,a)),super(n)}},Bo=class extends yi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vn(this.inputs,((r,n)=>{const i=pi(r[0]),[a,o]=this.transforms[n](mn.arr(i)?i:r.map(pi));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&vn(this.inputs,(e=>vn(e,(e=>fi(e)&&bi(e,this)))))}observerRemoved(e){0==e&&vn(this.inputs,(e=>vn(e,(e=>fi(e)&&wi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),mi(this,e)}};Zr.assign({batchedUpdates:F,createStringInterpolator:Ei,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var _o,ko,Oo,Mo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Xi(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=ia(e)||"Anonymous";return(e=mn.str(e)?a[e]||(a[e]=ta(e,i)):e[na]||(e[na]=ta(e,i))).displayName=`Animated(${t})`,e};return bn(e,((t,r)=>{mn.arr(e)&&(r=ia(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:yo[t]||(yo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=mo(t,n[t]);go.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Do(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Eo=Mo.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(_o||(_o={})),function(e){e.AM="AM",e.PM="PM"}(ko||(ko={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:ko.AM};if(!t)return r;try{if("24hr"===e){const n=Ho(t,e);r.minute=_o.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=ko.AM,r.hour=0===i?"12":_o.padValue(i.toString())):(r.period=ko.PM,r.hour=12===i?i.toString():_o.padValue((i-12).toString()))}else{const n=Ho(t,e);r.hour=_o.padValue(n.hour),r.minute=_o.padValue(n.minute),r.period="am"===n.period.toLowerCase()?ko.AM:ko.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_o.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return _o.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?_o.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?_o.padValue(n.toString()):13===n?_o.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===ko.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return _o.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=Ho(e,t),n=_o.padValue(r.hour);let i=`${n}:${_o.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(Oo||(Oo={}));const Ao=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Co=e=>{const t=parseInt(e);return t>=0&&t<=59},Ho=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!Ao(r[0],t)||!Co(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Ao(r[0],t)||!Co(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Io={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Po=e=>Object.keys(Io).reduce(((t,r)=>{const n=Io[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),To=Po("max-width"),zo=(Po("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),jo=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,No=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||qt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${jo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ro=y(No)`
    animation-delay: -0.45s;
`,Vo=y(No)`
    animation-delay: -0.3s;
`,Lo=y(No)`
    animation-delay: -0.15s;
`,Wo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Yo={collections:{base:{D1:{fontFamily:Wo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Uo=e=>t=>{const r=t.theme,n=Lt(Yo,r[Wt.textStyleScheme]);return r.options&&r.options.textStyle?Vt(n,e,r.options.textStyle):Vt(n,e)},qo={D1:{fontFamily:Uo("D1.fontFamily"),fontSize:Uo("D1.fontSize"),fontWeight:Uo("D1.fontWeight"),lineHeight:Uo("D1.lineHeight"),letterSpacing:Uo("D1.letterSpacing")},D2:{fontFamily:Uo("D2.fontFamily"),fontSize:Uo("D2.fontSize"),fontWeight:Uo("D2.fontWeight"),lineHeight:Uo("D2.lineHeight"),letterSpacing:Uo("D2.letterSpacing")},D3:{fontFamily:Uo("D3.fontFamily"),fontSize:Uo("D3.fontSize"),fontWeight:Uo("D3.fontWeight"),lineHeight:Uo("D3.lineHeight"),letterSpacing:Uo("D3.letterSpacing")},D4:{fontFamily:Uo("D4.fontFamily"),fontSize:Uo("D4.fontSize"),fontWeight:Uo("D4.fontWeight"),lineHeight:Uo("D4.lineHeight"),letterSpacing:Uo("D4.letterSpacing")},DBody:{fontFamily:Uo("DBody.fontFamily"),fontSize:Uo("DBody.fontSize"),fontWeight:Uo("DBody.fontWeight"),lineHeight:Uo("DBody.lineHeight"),letterSpacing:Uo("DBody.letterSpacing")},H1:{fontFamily:Uo("H1.fontFamily"),fontSize:Uo("H1.fontSize"),fontWeight:Uo("H1.fontWeight"),lineHeight:Uo("H1.lineHeight"),letterSpacing:Uo("H1.letterSpacing")},H2:{fontFamily:Uo("H2.fontFamily"),fontSize:Uo("H2.fontSize"),fontWeight:Uo("H2.fontWeight"),lineHeight:Uo("H2.lineHeight"),letterSpacing:Uo("H2.letterSpacing")},H3:{fontFamily:Uo("H3.fontFamily"),fontSize:Uo("H3.fontSize"),fontWeight:Uo("H3.fontWeight"),lineHeight:Uo("H3.lineHeight"),letterSpacing:Uo("H3.letterSpacing")},H4:{fontFamily:Uo("H4.fontFamily"),fontSize:Uo("H4.fontSize"),fontWeight:Uo("H4.fontWeight"),lineHeight:Uo("H4.lineHeight"),letterSpacing:Uo("H4.letterSpacing")},H5:{fontFamily:Uo("H5.fontFamily"),fontSize:Uo("H5.fontSize"),fontWeight:Uo("H5.fontWeight"),lineHeight:Uo("H5.lineHeight"),letterSpacing:Uo("H5.letterSpacing")},H6:{fontFamily:Uo("H6.fontFamily"),fontSize:Uo("H6.fontSize"),fontWeight:Uo("H6.fontWeight"),lineHeight:Uo("H6.lineHeight"),letterSpacing:Uo("H6.letterSpacing")},Body:{fontFamily:Uo("Body.fontFamily"),fontSize:Uo("Body.fontSize"),fontWeight:Uo("Body.fontWeight"),lineHeight:Uo("Body.lineHeight"),letterSpacing:Uo("Body.letterSpacing")},BodySmall:{fontFamily:Uo("BodySmall.fontFamily"),fontSize:Uo("BodySmall.fontSize"),fontWeight:Uo("BodySmall.fontWeight"),lineHeight:Uo("BodySmall.lineHeight"),letterSpacing:Uo("BodySmall.letterSpacing")},XSmall:{fontFamily:Uo("XSmall.fontFamily"),fontSize:Uo("XSmall.fontSize"),fontWeight:Uo("XSmall.fontWeight"),lineHeight:Uo("XSmall.lineHeight"),letterSpacing:Uo("XSmall.letterSpacing")}},Qo=e=>{switch(e){case 700:case"bold":return Wo.Bold;case 600:case"semibold":return Wo.Semibold;case 300:case"light":return Wo.Light;case 400:case"regular":return Wo.Regular;default:return""}},Zo=(e,t)=>r=>{var n;const i=qo[e].fontFamily(r),a=qo[e].fontWeight(r);return Object.values(Wo).includes(i)?v`
                font-family: ${Qo(t)||Qo(a)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(n=Go(t)||a)&&void 0!==n?n:"normal"};
        `},Go=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xo=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jo=Zo,Ko=(e,t,r=!1)=>n=>{const i=qo[e],a=i.fontSize(n);return v`
            ${Zo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${v`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},es=(e=!1,t=!1,r=void 0)=>t?v`
            display: block;
            ${Xo(r)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Xo(r)}
        `;var ts;!function(e){e.D1=y.h1`
        ${e=>v`
                ${Ko("D1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${Ko("D2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${Ko("D3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${Ko("D4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${Ko("DBody",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${Ko("H1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${Ko("H2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${Ko("H3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${Ko("H4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${Ko("H5",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${Ko("H6",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${Ko("Body",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${Ko("BodySmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${Ko("XSmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${es(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>is(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>is(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ts||(ts={}));const rs=y.a`
    ${e=>v`
            ${Ko(e.textStyle,e.weight)}
            color: ${qt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${qt.Secondary};

                svg {
                    color: ${qt.Secondary};
                }
            }
        `}
`,ns=y(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,is=r=>{var{external:n=!1,children:i}=r,a=E(r,["external","children"]);return e(rs,Object.assign({},a,{children:[i,n&&t(ns,{})]}))};var as;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(as||(as={}));const os={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ss=e=>t=>{var r;const n=t.theme,i=Lt(os,n[Wt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Vt(i,e,n.options.designToken):Vt(i,e)},ls={InputBoxShadow:ss("InputBoxShadow"),InputErrorBoxShadow:ss("InputErrorBoxShadow"),ElevationBoxShadow:ss("ElevationBoxShadow"),Table:{Header:ss("Table.Header"),Cell:{Primary:ss("Table.Cell.Primary"),Secondary:ss("Table.Cell.Secondary"),Selected:ss("Table.Cell.Selected"),Hover:ss("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ss("Button.Danger.BackgroundColor"),Hover:ss("Button.Danger.Hover"),Primary:ss("Button.Danger.Primary"),Border:ss("Button.Danger.Border")}}},us=y.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ls.Button.Danger.Border:qt.Primary};

                    color: ${e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary};
                `;case"light":return v`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid ${qt.Neutral[5]};

                    color: ${e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary};
                `;case"disabled":return v`
                    background-color: ${qt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qt.Neutral[3]};
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ls.Button.Danger.Hover:qt.Secondary};
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?ls.Button.Danger.BackgroundColor:qt.Primary};
                    border: 1px solid transparent;

                    ${To.mobileL} {
                        width: 100%;
                    }

                    color: ${qt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    ${Ko("H5","semibold")}

                    ${To.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    ${Ko("H4","semibold")}

                    ${To.mobileS} {
                        height: auto;
                    }
                `}
`,cs=y((({color:r,className:n,size:i=18})=>e(zo,Object.assign({className:n,$size:i,$color:r},{children:[t(No,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(Ro,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(Vo,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(Lo,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ds={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,u=E(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(us,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(cs,Object.assign({},c)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,u=E(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(us,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(cs,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},hs=y.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return v`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?v`
                        border-color: ${qt.Validation.Red.Icon};
                        background: ${qt.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${qt.Shadow.Red};
                        }
                    `:e.$disabled?v`
                        border-color: transparent;
                    `:v`
                        border-color: transparent;

                        :hover {
                            background: ${qt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?v`
                        background: ${qt.Neutral[6]};
                        border-color: ${qt.Neutral[5]};
                    `:e.$disabled&&e.$selected?v`
                        background: ${qt.Neutral[6]};
                        border-color: ${qt.Neutral[4]};
                    `:e.$error?v`
                        background: ${qt.Neutral[8]};
                        border-color: ${qt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${qt.Shadow.Red};
                        }
                    `:e.$selected?v`
                        background: ${qt.Accent.Light[5]};
                        border-color: ${qt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${qt.Shadow.Accent};
                        }
                    `:v`
                        background: ${qt.Neutral[8]};
                        border-color: ${qt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${qt.Shadow.Accent};
                            border-color: ${qt.Accent.Light[1]};
                        }
                    `}
`,fs=y.input`
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
`,ps=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
`,gs=y.label`
    ${e=>e.$selected&&!e.$indicator?v`
                ${Ko("H4","semibold")}
            `:v`
                ${Ko("H4","regular")}
            `}

    color: ${qt.Neutral[1]};

    ${e=>e.$disabled?v`
                color: ${qt.Neutral[3]};
            `:e.$selected?v`
                color: ${qt.Primary};
            `:void 0}
`,ms=y.div`
    ${Ko("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Jo("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?v`
                color: ${qt.Neutral[3]};
            `:e.$selected?v`
                color: ${qt.Primary};
            `:v`
                color: ${qt.Neutral[1]};
            `}
`,ys=y.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?v`
                    color: ${qt.Primary};
                `:v`
                    color: ${qt.Neutral[4]};
                `};
    }
`,vs=({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?O:k,{});break;case"radio":a=t(r?B:D,{});break;case"tick":a=t(M,{});break;case"cross":a=t(_,{});break;default:a=null}return t(ys,Object.assign({className:i,$active:r,disabled:n},{children:a}))};var bs={exports:{}};bs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var u=o[l],c=d[u],h=c&&c[0],f=c&&c[1];o[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,u=e.slice(n),c=a.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],u=!0===o[3],c=l||u,d=o[2];u&&(d=o[2]),a=this.$locale(),!l&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ws,$s,Ss=C(bs.exports),Fs={exports:{}},xs=C(Fs.exports=(ws={year:0,month:1,day:2,hour:3,minute:4,second:5},$s={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=$s[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),$s[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,u=s.value,c=ws[l];c>=0&&(a[c]=parseInt(u,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Ds={exports:{}};Ds.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),a=r-i<0,o=t.clone().add(n+(a?-1:1),u);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[$])},F=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),r&&(w[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},D=v;D.l=F,D.i=S,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),f=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(n?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=D.p(c),g=function(e){var t=x(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,u,3);case"MMMM":return d(u,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=D.p(h),y=x(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return D.m(g,y)};switch(m){case d:p=w()/12;break;case u:p=w();break;case c:p=w()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case o:p=b/r;break;case a:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:D.a(p)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=B.prototype;return x.prototype=_,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,B,x),e.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Bs=C(Ds.exports),_s={exports:{}};_s.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var ks=C(_s.exports),Os={exports:{}};Os.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ms=C(Os.exports),Es={exports:{}};Es.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var As,Cs=C(Es.exports);Bs.extend(ks),Bs.extend(Ms),Bs.extend(Cs),Bs.extend(Ss),Bs.extend(xs),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Bs(t).startOf("week");return Hs(r).map((e=>Is(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Is(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Bs(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bs(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bs(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Bs(n):void 0,i?Bs(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(As||(As={}));const Hs=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Is=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ps=[1,3,5,7,8,10,12],Ts=[4,6,9,11];var zs,js,Ns;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Ps.includes(a)?Math.min(i,31).toString():Ts.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Bs(e,r);return Bs(t,r).diff(n,"minute")},e.toDayjs=e=>e?Bs(e):Bs(),e.addMinutesToTime=(e,t,r="HH:mm")=>Bs(e,r).add(t,"minutes").format(r)}(zs||(zs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Bs(e).isBefore(n,"day"))||!(!i||!Bs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Bs(e).isValid())return e}return""}}(js||(js={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ns||(Ns={}));const Rs=(e,t,r="window",n)=>{const a=i();c((()=>{a.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])},Vs=y.button`
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

        ${({$highlight:e})=>e&&v`
                background-color: ${qt.Neutral[7]};
            `}
    }
`,Ls=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=E(e,["children","focusHighlight","focusOutline","type"]);return t(Vs,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Ws=y.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${qt.Neutral[5]};
    border-radius: 4px;
    background: ${qt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${qt.Accent.Light[1]};
        box-shadow: ${ls.InputBoxShadow};
    }

    ${e=>e.$readOnly?v`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?v`
                background: ${qt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${qt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?v`
                border: 1px solid ${qt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${qt.Validation.Red.Border};
                    box-shadow: ${ls.InputErrorBoxShadow};
                }
            `:void 0}
`,Ys=y.input`
    ${Ko("Body","regular")}
    color: ${qt.Neutral[1]};
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
        color: ${qt.Neutral[3]};
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
`,Us=y(Eo.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${qt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${To.mobileS} {
        max-width: 100%;
    }
`,qs=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Qs=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${To.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Zs=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${To.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Gs=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${To.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Xs=y.div`
    display: flex;
    gap: 0.5rem;

    ${To.tablet} {
        flex-direction: column;
    }

    ${To.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Js=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${To.mobileS} {
        width: 6rem;
    }
`,Ks=y(Ls)`
    width: 5rem;
    padding: 1rem 0;
    color: ${qt.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${qt.Primary};
    }
`,el=y(ts.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${To.tablet} {
        margin: 0;
    }

    ${To.mobileS} {
        margin: 0 0.25rem;
    }
`,tl=y(Ys)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${qt.Neutral[5]};
    background: ${qt.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${qt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${qt.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${To.mobileS} {
        width: 100%;
    }
`,rl=y((({type:r="checkbox",indicator:n,checked:o,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(o),[w]=a(Ns.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=i();c((()=>{b(o)}),[o]);return e(hs,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:n,id:p,"data-testid":m},{children:[n&&(()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(vs,{type:e,active:v,disabled:d})})(),t(fs,{ref:S,name:f,id:$,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(r){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(ps,{children:[t(gs,Object.assign({htmlFor:$,$selected:v,$indicator:n,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(ms,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,nl=y(ds.Small)`
    width: 7rem;

    ${To.mobileL} {
        flex: 1;
    }

    ${To.mobileS} {
        width: 100%;
    }
`;var il,al,ol;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(il||(il={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(al||(al={})),function(e){e.AM="am",e.PM="pm"}(ol||(ol={}));const sl=({id:r,value:n,show:o,format:s,onChange:l,onCancel:u})=>{const d=Oo.getTimeValues(s,n),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=i(),S=i(),F=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(r),y=i(null),v=null!=f?f:y,b=i(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return qr((function(){if(!Wr()){var e=Ur(g,S,c,h);b.current=Vr((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!Wr()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,g,p,v.current]),tr({ref:v},$)}();c((()=>{if(o&&b.current&&b.current.focus(),o){const{hour:e,minute:t,period:r}=Oo.getTimeValues(s,n);p(e),m(t),v(r)}}),[o,n,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case il.MINUTE_UP:m(Oo.updateMinutes(g,"add"));break;case il.MINUTE_DOWN:m(Oo.updateMinutes(g,"minus"));break;case il.HOUR_UP:p(Oo.updateHours(h,"add"));break;case il.HOUR_DOWN:p(Oo.updateHours(h,"minus"))}}),[h,g]),B=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case al.HOUR:t.length<=2&&p(t);break;case al.MINUTE:t.length<=2&&m(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case al.HOUR:{const r=t>23||t<0?d.hour:Oo.convertHourTo12HourFormat(e.target.value);p(r);break}case al.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;m(_o.padValue(r));break}}},O=e=>{switch(e.target.name){case ol.AM:v(ko.AM);break;case ol.PM:v(ko.PM)}},M=e=>r?`${r}-${e}`:e,E=uo({height:o?F.height+32:0});return t(Us,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(qs,Object.assign({ref:F.ref,"data-testid":M("timepicker-dropdown"),inert:o?void 0:""},{children:[e(Qs,{children:[e(Gs,{children:[e(Js,{children:[t(Ks,Object.assign({"aria-label":"increase hour",name:il.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(tl,{"aria-label":"hour",type:"number",name:al.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:B,onChange:_,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Ks,Object.assign({"aria-label":"decrease hour",name:il.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(el,{children:":"}),e(Js,{children:[t(Ks,Object.assign({"aria-label":"increase minute",name:il.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(tl,{"aria-label":"minute",type:"number",name:al.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:_,onBlur:k,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Ks,Object.assign({"aria-label":"decrease minute",name:il.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Xs,{children:[t(rl,Object.assign({checked:y===ko.AM,name:ol.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(rl,Object.assign({checked:y===ko.PM,name:ol.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Zs,{children:[t(nl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":M("cancel-button")},{children:"Cancel"})),t(nl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Oo.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))},ll=y.div`
    position: relative;
`,ul=y(Ws)`
    height: 3rem;
    gap: 0.5rem;
`,cl=y(Ys)`
    display: block;
    width: 100%;
    flex: 1;
`,dl=r=>{var{id:n,disabled:o=!1,error:s,value:l,format:u="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=r,g=E(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,y]=a(!1),[v,b]=a(!1),[w,$]=a(""),[S,F]=a(""),x=i();c((()=>{l&&($(l.start),F(l.end))}),[]),Rs("mousedown",(function(e){o||k(e)}),"document"),Rs("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const D=()=>{_()},B=()=>{m||v||f&&f()},_=()=>{y(!1),b(!1),p&&p()},k=e=>{x&&!x.current.contains(e.target)&&(v||m)&&_()};return t(ll,Object.assign({ref:x,id:n},g,{children:e(ul,Object.assign({$disabled:o,$error:s,$readOnly:d},{children:[e(Kt,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[t(cl,{onFocus:()=>{o||d||m||(b(!1),y(!0),B())},readOnly:!0,placeholder:"From",value:Oo.formatDisplayValue(w,u),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(cl,{onFocus:()=>{o||d||v||(y(!1),b(!0),B())},readOnly:!0,placeholder:"To",value:Oo.formatDisplayValue(S,u),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(sl,{id:n,show:m,value:w,format:u,onCancel:D,onChange:e=>{y(!1),b(!0),$(e);h&&h({start:e,end:S})}}),t(sl,{id:n,show:v,value:S,format:u,onCancel:D,onChange:e=>{b(!1),F(e);h&&h({start:w,end:e}),""==w?y(!0):p&&p()}})]}))}))};export{dl as TimeRangePicker};
//# sourceMappingURL=index.js.map
