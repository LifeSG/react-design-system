import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as i,useState as a,isValidElement as o,createRef as s,cloneElement as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import{ArrowRightIcon as m}from"@lifesg/react-icons";import y,{css as v,keyframes as b}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as F}from"react-dom";import{ExternalIcon as x}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as B}from"@lifesg/react-icons/circle-dot";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{SquareIcon as k}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";function E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,I="object"==typeof A&&A&&A.Object===Object&&A,P="object"==typeof self&&self&&self.Object===Object&&self,T=I||P||Function("return this")(),z=T.Symbol,j=z,N=Object.prototype,R=N.hasOwnProperty,V=N.toString,L=j?j.toStringTag:void 0;var W=function(e){var t=R.call(e,L),n=e[L];try{e[L]=void 0;var r=!0}catch(e){}var i=V.call(e);return r&&(t?e[L]=n:delete e[L]),i},Y=Object.prototype.toString;var U=W,q=function(e){return Y.call(e)},Q=z?z.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?U(e):q(e)};var G=Z,X=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||X(e)&&"[object Symbol]"==G(e)},K=H,ee=J,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/;var re=function(e,t){if(K(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ee(e))||(ne.test(e)||!te.test(e)||null!=t&&e in Object(t))};var ie=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ae=Z,oe=ie;var se,le=function(e){if(!oe(e))return!1;var t=ae(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ue=T["__core-js_shared__"],ce=(se=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+se:"";var de=function(e){return!!ce&&ce in e},he=Function.prototype.toString;var fe=le,pe=de,ge=ie,me=function(e){if(null!=e){try{return he.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=/^\[object .+?Constructor\]$/,ve=Function.prototype,be=Object.prototype,we=ve.toString,$e=be.hasOwnProperty,Se=RegExp("^"+we.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Fe=function(e){return!(!ge(e)||pe(e))&&(fe(e)?Se:ye).test(me(e))},xe=function(e,t){return null==e?void 0:e[t]};var De=function(e,t){var n=xe(e,t);return Fe(n)?n:void 0},Be=De(Object,"create"),_e=Be;var ke=function(){this.__data__=_e?_e(null):{},this.size=0};var Oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Be,Ee=Object.prototype.hasOwnProperty;var Ae=function(e){var t=this.__data__;if(Me){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ee.call(t,e)?t[e]:void 0},Ce=Be,He=Object.prototype.hasOwnProperty;var Ie=Be;var Pe=ke,Te=Oe,ze=Ae,je=function(e){var t=this.__data__;return Ce?void 0!==t[e]:He.call(t,e)},Ne=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Pe,Re.prototype.delete=Te,Re.prototype.get=ze,Re.prototype.has=je,Re.prototype.set=Ne;var Ve=Re;var Le=function(){this.__data__=[],this.size=0};var We=function(e,t){return e===t||e!=e&&t!=t};var Ye=function(e,t){for(var n=e.length;n--;)if(We(e[n][0],t))return n;return-1},Ue=Ye,qe=Array.prototype.splice;var Qe=Ye;var Ze=Ye;var Ge=Ye;var Xe=Le,Je=function(e){var t=this.__data__,n=Ue(t,e);return!(n<0)&&(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,!0)},Ke=function(e){var t=this.__data__,n=Qe(t,e);return n<0?void 0:t[n][1]},et=function(e){return Ze(this.__data__,e)>-1},tt=function(e,t){var n=this.__data__,r=Ge(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=Xe,nt.prototype.delete=Je,nt.prototype.get=Ke,nt.prototype.has=et,nt.prototype.set=tt;var rt=nt,it=De(T,"Map"),at=Ve,ot=rt,st=it;var lt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ut=function(e,t){var n=e.__data__;return lt(t)?n["string"==typeof t?"string":"hash"]:n.map},ct=ut;var dt=ut;var ht=ut;var ft=ut;var pt=function(){this.size=0,this.__data__={hash:new at,map:new(st||ot),string:new at}},gt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},mt=function(e){return dt(this,e).get(e)},yt=function(e){return ht(this,e).has(e)},vt=function(e,t){var n=ft(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=pt,bt.prototype.delete=gt,bt.prototype.get=mt,bt.prototype.has=yt,bt.prototype.set=vt;var wt=bt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new($t.Cache||wt),n}$t.Cache=wt;var St=$t;var Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,Dt=function(e){var t=St(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ft,(function(e,n,r,i){t.push(r?i.replace(xt,"$1"):n||e)})),t}));var Bt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},_t=H,kt=J,Ot=z?z.prototype:void 0,Mt=Ot?Ot.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(_t(t))return Bt(t,e)+"";if(kt(t))return Mt?Mt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},At=Et;var Ct=H,Ht=re,It=Dt,Pt=function(e){return null==e?"":At(e)};var Tt=J;var zt=function(e,t){return Ct(e)?e:Ht(e,t)?[e]:It(Pt(e))},jt=function(e){if("string"==typeof e||Tt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Nt=function(e,t){for(var n=0,r=(t=zt(t,e)).length;null!=e&&n<r;)e=e[jt(t[n++])];return n&&n==r?e:void 0};var Rt=C((function(e,t,n){var r=null==e?void 0:Nt(e,t);return void 0===r?n:r}));const Vt=(e,t,n)=>t?Rt(n,t)||Rt(e,t):n||e,Lt=(e,t)=>{const n=t||e.defaultValue;return Rt(e.collections,n)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wt||(Wt={}));const Yt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ut=e=>t=>{const n=t.theme,r=Lt(Yt,n[Wt.colorScheme]);return n.options&&n.options.color?Vt(r,e,n.options.color):Vt(r,e)},qt={Brand:{1:Ut("Brand.1"),2:Ut("Brand.2"),3:Ut("Brand.3"),4:Ut("Brand.4"),5:Ut("Brand.5"),6:Ut("Brand.6")},Primary:Ut("Primary"),PrimaryDark:Ut("PrimaryDark"),Secondary:Ut("Secondary"),Accent:{Light:{1:Ut("Accent.Light.1"),2:Ut("Accent.Light.2"),3:Ut("Accent.Light.3"),4:Ut("Accent.Light.4"),5:Ut("Accent.Light.5"),6:Ut("Accent.Light.6")},Dark:{1:Ut("Accent.Dark.1"),2:Ut("Accent.Dark.2"),3:Ut("Accent.Dark.3")}},Neutral:{1:Ut("Neutral.1"),2:Ut("Neutral.2"),3:Ut("Neutral.3"),4:Ut("Neutral.4"),5:Ut("Neutral.5"),6:Ut("Neutral.6"),7:Ut("Neutral.7"),8:Ut("Neutral.8")},Validation:{Green:{Text:Ut("Validation.Green.Text"),Icon:Ut("Validation.Green.Icon"),Border:Ut("Validation.Green.Border"),Background:Ut("Validation.Green.Background")},Orange:{Text:Ut("Validation.Orange.Text"),Icon:Ut("Validation.Orange.Icon"),Border:Ut("Validation.Orange.Border"),Background:Ut("Validation.Orange.Background"),Badge:Ut("Validation.Orange.Badge")},Red:{Text:Ut("Validation.Red.Text"),Icon:Ut("Validation.Red.Icon"),Border:Ut("Validation.Red.Border"),Background:Ut("Validation.Red.Background")},Blue:{Text:Ut("Validation.Blue.Text"),Icon:Ut("Validation.Blue.Icon"),Border:Ut("Validation.Blue.Border"),Background:Ut("Validation.Blue.Background")}},Shadow:{Accent:Ut("Shadow.Accent"),Red:Ut("Shadow.Red"),Elevation:Ut("Shadow.Elevation")}},Qt=y.div`
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
`,Kt=({children:n,currentActive:r,error:i,className:a,wrap:o})=>{const[s,l]=n;return e(Qt,Object.assign({className:a,$wrap:o},{children:[t(Gt,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Xt,{}),o&&t(Zt,{}),t(Gt,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Jt,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:o})]}))};var en=function(e,t){return en=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},en(e,t)};var tn=function(){return tn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},tn.apply(this,arguments)};var nn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var rn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},an="object"==typeof nn&&nn&&nn.Object===Object&&nn,on="object"==typeof self&&self&&self.Object===Object&&self,sn=an||on||Function("return this")(),ln=sn,un=function(){return ln.Date.now()},cn=/\s/;var dn=function(e){for(var t=e.length;t--&&cn.test(e.charAt(t)););return t},hn=/^\s+/;var fn=function(e){return e?e.slice(0,dn(e)+1).replace(hn,""):e},pn=sn.Symbol,gn=pn,mn=Object.prototype,yn=mn.hasOwnProperty,vn=mn.toString,bn=gn?gn.toStringTag:void 0;var wn=function(e){var t=yn.call(e,bn),n=e[bn];try{e[bn]=void 0;var r=!0}catch(e){}var i=vn.call(e);return r&&(t?e[bn]=n:delete e[bn]),i},$n=Object.prototype.toString;var Sn=wn,Fn=function(e){return $n.call(e)},xn=pn?pn.toStringTag:void 0;var Dn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xn&&xn in Object(e)?Sn(e):Fn(e)},Bn=function(e){return null!=e&&"object"==typeof e};var _n=fn,kn=rn,On=function(e){return"symbol"==typeof e||Bn(e)&&"[object Symbol]"==Dn(e)},Mn=/^[-+]0x[0-9a-f]+$/i,En=/^0b[01]+$/i,An=/^0o[0-7]+$/i,Cn=parseInt;var Hn=rn,In=un,Pn=function(e){if("number"==typeof e)return e;if(On(e))return NaN;if(kn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_n(e);var n=En.test(e);return n||An.test(e)?Cn(e.slice(2),n?2:8):Mn.test(e)?NaN:+e},Tn=Math.max,zn=Math.min;var jn=function(e,t,n){var r,i,a,o,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,u=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=a}function g(){var e=In();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?zn(n,a-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=In(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Pn(t)||0,Hn(n)&&(c=!!n.leading,a=(d="maxWait"in n)?Tn(Pn(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(In())},y},Nn=jn,Rn=rn;var Vn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Rn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Nn(e,t,{leading:r,maxWait:t,trailing:i})},Ln=function(e,t,n,r){switch(t){case"debounce":return jn(e,n,r);case"throttle":return Vn(e,n,r);default:return e}},Wn=function(e){return"function"==typeof e},Yn=function(){return"undefined"==typeof window},Un=function(e){return e instanceof Element||e instanceof HTMLDocument},qn=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Wn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Yn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Yn())return null;if(t)return document.querySelector(t);if(r&&Un(r))return r;if(n.targetRef&&Un(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=qn(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Yn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Wn(t)?"renderProp":Wn(r)?"childFunction":o(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,l=void 0===a?1e3:a,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Yn()||(n.resizeHandler=Ln(n.createResizeHandler,i,l,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}en(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Yn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,u={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=i)(u);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return l(e,c)}return l(e,u);case"childArray":return(e=i).map((function(e){return!!e&&l(e,u)}));default:return n.createElement(o,null)}}}(u);var Qn=Yn()?c:d;var Zn=Object.defineProperty,Gn={};((e,t)=>{for(var n in t)Zn(e,n,{get:t[n],enumerable:!0})})(Gn,{assign:()=>Or,colors:()=>Br,createStringInterpolator:()=>Sr,skipAnimation:()=>_r,to:()=>Fr,willAdvance:()=>kr});var Xn=fr(),Jn=e=>ur(e,Xn),Kn=fr();Jn.write=e=>ur(e,Kn);var er=fr();Jn.onStart=e=>ur(e,er);var tr=fr();Jn.onFrame=e=>ur(e,tr);var nr=fr();Jn.onFinish=e=>ur(e,nr);var rr=[];Jn.setTimeout=(e,t)=>{const n=Jn.now()+t,r=()=>{const e=rr.findIndex((e=>e.cancel==r));~e&&rr.splice(e,1),sr-=~e?1:0},i={time:n,handler:e,cancel:r};return rr.splice(ir(n),0,i),sr+=1,cr(),i};var ir=e=>~(~rr.findIndex((t=>t.time>e))||~rr.length);Jn.cancel=e=>{er.delete(e),tr.delete(e),nr.delete(e),Xn.delete(e),Kn.delete(e)},Jn.sync=e=>{lr=!0,Jn.batchedUpdates(e),lr=!1},Jn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Jn.onStart(n)}return r.handler=e,r.cancel=()=>{er.delete(n),t=null},r};var ar="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Jn.use=e=>ar=e,Jn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Jn.batchedUpdates=e=>e(),Jn.catch=console.error,Jn.frameLoop="always",Jn.advance=()=>{"demand"!==Jn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):hr()};var or=-1,sr=0,lr=!1;function ur(e,t){lr?(t.delete(e),e(0)):(t.add(e),cr())}function cr(){or<0&&(or=0,"demand"!==Jn.frameLoop&&ar(dr))}function dr(){~or&&(ar(dr),Jn.batchedUpdates(hr))}function hr(){const e=or;or=Jn.now();const t=ir(or);t&&(pr(rr.splice(0,t),(e=>e.handler())),sr-=t),sr?(er.flush(),Xn.flush(e?Math.min(64,or-e):16.667),tr.flush(),Kn.flush(),nr.flush()):or=-1}function fr(){let e=new Set,t=e;return{add(n){sr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(sr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,sr-=t.size,pr(t,(t=>t(n)&&e.add(t))),sr+=e.size,t=e)}}}function pr(e,t){e.forEach((e=>{try{t(e)}catch(e){Jn.catch(e)}}))}function gr(){}var mr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function yr(e,t){if(mr.arr(e)){if(!mr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var vr=(e,t)=>e.forEach(t);function br(e,t,n){if(mr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var wr=e=>mr.und(e)?[]:mr.arr(e)?e:[e];function $r(e,t){if(e.size){const n=Array.from(e);e.clear(),vr(n,t)}}var Sr,Fr,xr=(e,...t)=>$r(e,(e=>e(...t))),Dr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Br=null,_r=!1,kr=gr,Or=e=>{e.to&&(Fr=e.to),e.now&&(Jn.now=e.now),void 0!==e.colors&&(Br=e.colors),null!=e.skipAnimation&&(_r=e.skipAnimation),e.createStringInterpolator&&(Sr=e.createStringInterpolator),e.requestAnimationFrame&&Jn.use(e.requestAnimationFrame),e.batchedUpdates&&(Jn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(kr=e.willAdvance),e.frameLoop&&(Jn.frameLoop=e.frameLoop)},Mr=new Set,Er=[],Ar=[],Cr=0,Hr={get idle(){return!Mr.size&&!Er.length},start(e){Cr>e.priority?(Mr.add(e),Jn.onStart(Ir)):(Pr(e),Jn(zr))},advance:zr,sort(e){if(Cr)Jn.onFrame((()=>Hr.sort(e)));else{const t=Er.indexOf(e);~t&&(Er.splice(t,1),Tr(e))}},clear(){Er=[],Mr.clear()}};function Ir(){Mr.forEach(Pr),Mr.clear(),Jn(zr)}function Pr(e){Er.includes(e)||Tr(e)}function Tr(e){Er.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Er,(t=>t.priority>e.priority)),0,e)}function zr(e){const t=Ar;for(let n=0;n<Er.length;n++){const r=Er[n];Cr=r.priority,r.idle||(kr(r),r.advance(e),r.idle||t.push(r))}return Cr=0,(Ar=Er).length=0,(Er=t).length>0}var jr="[-+]?\\d*\\.?\\d+",Nr=jr+"%";function Rr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Vr=new RegExp("rgb"+Rr(jr,jr,jr)),Lr=new RegExp("rgba"+Rr(jr,jr,jr,jr)),Wr=new RegExp("hsl"+Rr(jr,Nr,Nr)),Yr=new RegExp("hsla"+Rr(jr,Nr,Nr,jr)),Ur=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Qr=/^#([0-9a-fA-F]{6})$/,Zr=/^#([0-9a-fA-F]{8})$/;function Gr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Xr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Gr(i,r,e+1/3),o=Gr(i,r,e),s=Gr(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Jr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Kr(e){return(parseFloat(e)%360+360)%360/360}function ei(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ni(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Qr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Br&&void 0!==Br[e]?Br[e]:(t=Vr.exec(e))?(Jr(t[1])<<24|Jr(t[2])<<16|Jr(t[3])<<8|255)>>>0:(t=Lr.exec(e))?(Jr(t[1])<<24|Jr(t[2])<<16|Jr(t[3])<<8|ei(t[4]))>>>0:(t=Ur.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Zr.exec(e))?parseInt(t[1],16)>>>0:(t=qr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Wr.exec(e))?(255|Xr(Kr(t[1]),ti(t[2]),ti(t[3])))>>>0:(t=Yr.exec(e))?(Xr(Kr(t[1]),ti(t[2]),ti(t[3]))|ei(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ri=(e,t,n)=>{if(mr.fun(e))return e;if(mr.arr(e))return ri({range:e,output:t,extrapolate:n});if(mr.str(e.output[0]))return Sr(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=a(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var ii=1.70158,ai=1.525*ii,oi=ii+1,si=2*Math.PI/3,li=2*Math.PI/4.5,ui=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ci={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>oi*e*e*e-ii*e*e,easeOutBack:e=>1+oi*Math.pow(e-1,3)+ii*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ai)/2:(Math.pow(2*e-2,2)*((ai+1)*(2*e-2)+ai)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*si),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*si)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*li)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*li)/2+1,easeInBounce:e=>1-ui(1-e),easeOutBounce:ui,easeInOutBounce:e=>e<.5?(1-ui(1-2*e))/2:(1+ui(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},di=Symbol.for("FluidValue.get"),hi=Symbol.for("FluidValue.observers"),fi=e=>Boolean(e&&e[di]),pi=e=>e&&e[di]?e[di]():e,gi=e=>e[hi]||null;function mi(e,t){const n=e[hi];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var yi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");vi(this,e)}},vi=(e,t)=>Si(e,di,t);function bi(e,t){if(e[di]){let n=e[hi];n||Si(e,hi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function wi(e,t){const n=e[hi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[hi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var $i,Si=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Fi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Di=new RegExp(`(${Fi.source})(%|[a-z]+)`,"i"),Bi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,_i=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ki=e=>{const[t,n]=Oi(e);if(!t||Dr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&_i.test(n)?ki(n):n||e},Oi=e=>{const t=_i.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Mi=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ei=e=>{$i||($i=Br?new RegExp(`(${Object.keys(Br).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pi(e).replace(_i,ki).replace(xi,ni).replace($i,ni))),n=t.map((e=>e.match(Fi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ri({...e,output:t})));return e=>{const n=!Di.test(t[0])&&t.find((e=>Di.test(e)))?.replace(Fi,"");let i=0;return t[0].replace(Fi,(()=>`${r[i++](e)}${n||""}`)).replace(Bi,Mi)}},Ai="react-spring: ",Ci=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ai}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Hi=Ci(console.warn);var Ii=Ci(console.warn);function Pi(e){return mr.str(e)&&("#"==e[0]||/\d/.test(e)||!Dr()&&_i.test(e)||e in(Br||{}))}var Ti=Dr()?c:d,zi=()=>{const e=i(!1);return Ti((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ji(){const e=a()[1],t=zi();return()=>{t.current&&e(Math.random())}}var Ni=e=>c(e,Ri),Ri=[];function Vi(e){const t=i();return c((()=>{t.current=e})),t.current}var Li=Symbol.for("Animated:node"),Wi=e=>e&&e[Li],Yi=(e,t)=>{return n=e,r=Li,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Ui=e=>e&&e[Li]&&e[Li].getPayload(),qi=class{constructor(){Yi(this,this)}getPayload(){return this.payload||[]}},Qi=class extends qi{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Qi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Zi=class extends Qi{constructor(e){super(0),this._string=null,this._toString=ri({output:[e,e]})}static create(e){return new Zi(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ri({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gi={dependencies:null},Xi=class extends qi{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return br(this.source,((n,r)=>{var i;(i=n)&&i[Li]===i?t[r]=n.getValue(e):fi(n)?t[r]=pi(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return br(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gi.dependencies&&fi(e)&&Gi.dependencies.add(e);const t=Ui(e);t&&vr(t,(e=>this.add(e)))}},Ji=class extends Xi{constructor(e){super(e)}static create(e){return new Ji(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ki)),!0)}};function Ki(e){return(Pi(e)?Zi:Qi).create(e)}function ea(e){const t=Wi(e);return t?t.constructor:mr.arr(e)?Ji:Pi(e)?Zi:Qi}var ta=(e,t)=>{const r=!mr.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((a,o)=>{const s=i(null),l=r&&f((e=>{s.current=function(e,t){e&&(mr.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const n=new Set;Gi.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Xi(e),Gi.dependencies=null,[e,n]}(a,t),h=ji(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new na(p,d),m=i();Ti((()=>(m.current=g,vr(d,(e=>bi(e,g))),()=>{m.current&&(vr(m.current.deps,(e=>wi(e,m.current))),Jn.cancel(m.current.update))}))),c(p,[]),Ni((()=>()=>{const e=m.current;vr(e.deps,(t=>wi(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,{...y,ref:l})}))},na=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Jn.write(this.update)}};var ra=Symbol.for("AnimatedComponent"),ia=e=>mr.str(e)?e:e&&mr.str(e.displayName)?e.displayName:mr.fun(e)&&e.name||null;function aa(e,...t){return mr.fun(e)?e(...t):e}var oa=(e,t)=>!0===e||!!(t&&e&&(mr.fun(e)?e(t):wr(e).includes(t))),sa=(e,t)=>mr.obj(e)?t&&e[t]:e,la=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ua=e=>e,ca=(e,t=ua)=>{let n=da;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);mr.und(n)||(r[i]=n)}return r},da=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ha={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function fa(e){const t=function(e){const t={};let n=0;if(br(e,((e,r)=>{ha[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return br(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function pa(e){return e=pi(e),mr.arr(e)?e.map(pa):Pi(e)?Gn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ga(e){return mr.fun(e)||mr.arr(e)&&mr.obj(e[0])}var ma={tension:170,friction:26,mass:1,damping:1,easing:ci.linear,clamp:!1},ya=class{constructor(){this.velocity=0,Object.assign(this,ma)}};function va(e,t){if(mr.und(t.decay)){const n=!mr.und(t.tension)||!mr.und(t.friction);!n&&mr.und(t.frequency)&&mr.und(t.damping)&&mr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var ba=[],wa=class{constructor(){this.changed=!1,this.values=ba,this.toValues=null,this.fromValues=ba,this.config=new ya,this.immediate=!1}};function $a(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,u,c=oa(n.cancel??r?.cancel,t);if(c)f();else{mr.und(n.pause)||(i.paused=oa(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||oa(e,t)),l=aa(n.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-Jn.now()}function h(){l>0&&!Gn.skipAnimation?(i.delayed=!0,u=Jn.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{a.start({...n,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var Sa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Da(e.get()):t.every((e=>e.noop))?Fa(e.get()):xa(e.get(),t.every((e=>e.finished))),Fa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xa=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Da=e=>({value:e,cancelled:!0,finished:!1});function Ba(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=ca(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Da(r)||i!==n.asyncId&&xa(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new ka,o=new Oa;return(async()=>{if(Gn.skipAnimation)throw _a(n),o.result=xa(r,!1),d(o),o;f(a);const s=mr.obj(e)?{...e}:{...t,to:e};s.parentId=i,br(u,((e,t)=>{mr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Gn.skipAnimation)return _a(n),xa(r,!1);try{let t;t=mr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=xa(r.get(),!0,!1)}catch(e){if(e instanceof ka)g=e.result;else{if(!(e instanceof Oa))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return mr.fun(o)&&Jn.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function _a(e,t){$r(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ka=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Oa=class extends Error{constructor(){super("SkipAnimationSignal")}},Ma=e=>e instanceof Aa,Ea=1,Aa=class extends yi{constructor(){super(...arguments),this.id=Ea++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Wi(this);return e&&e.getValue()}to(...e){return Gn.to(this,e)}interpolate(...e){return Hi(`${Ai}The "interpolate" function is deprecated in v9 (use "to" instead)`),Gn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){mi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hr.sort(this),mi(this,{type:"priority",parent:this,priority:e})}},Ca=Symbol.for("SpringPhase"),Ha=e=>(1&e[Ca])>0,Ia=e=>(2&e[Ca])>0,Pa=e=>(4&e[Ca])>0,Ta=(e,t)=>t?e[Ca]|=3:e[Ca]&=-3,za=(e,t)=>t?e[Ca]|=4:e[Ca]&=-5,ja=class extends Aa{constructor(e,t){if(super(),this.animation=new wa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mr.und(e)||!mr.und(t)){const n=mr.obj(e)?{...e}:{...t,from:e};mr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ia(this)||this._state.asyncTo)||Pa(this)}get goal(){return pi(this.animation.to)}get velocity(){const e=Wi(this);return e instanceof Qi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ha(this)}get isAnimating(){return Ia(this)}get isPaused(){return Pa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=Ui(r.to);!o&&fi(r.to)&&(i=wr(pi(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==Zi?1:o?o[l].lastPosition:i[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=mr.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(mr.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,l=!mr.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(o=-o*r,d=u));o+=(1e-6*-a.tension*(d-u)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+a.easing(r)*(u-n),o=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(n=!0)}));const s=Wi(this),l=s.getValue();if(t){const e=pi(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Jn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ia(this)){const{to:e,config:t}=this.animation;Jn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return mr.und(e)?(n=this.queue||[],this.queue=[]):n=[mr.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Sa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),_a(this._state,e&&this._lastCallId),Jn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=mr.obj(n)?n[t]:n,(null==n||ga(n))&&(n=void 0),r=mr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ha(this)||(e.reverse&&([n,r]=[r,n]),r=pi(r),mr.und(r)?Wi(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ca(e,((e,t)=>/^on/.test(t)?sa(e,n):e))),Ua(this,e,"onProps"),qa(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return $a(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Pa(this)||(za(this,!0),xr(a.pauseQueue),qa(this,"onPause",xa(this,Na(this,this.animation.to)),this))},resume:()=>{Pa(this)&&(za(this,!1),Ia(this)&&this._resume(),xr(a.resumeQueue),qa(this,"onResume",xa(this,Na(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Ra(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Da(this));const r=!mr.und(e.to),i=!mr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Da(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!mr.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!yr(d,u);h&&(s.from=d),d=pi(d);const f=!yr(c,l);f&&this._focus(c);const p=ga(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(va(n={...n},t),t={...n,...t}),va(e,t),Object.assign(e,t);for(const t in ma)null==e[t]&&(e[t]=ma[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;mr.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(g,aa(t.config,a),t.config!==o.config?aa(o.config,a):void 0);let v=Wi(this);if(!v||mr.und(c))return n(xa(this,!0));const b=mr.und(t.reset)?i&&!t.default:!mr.und(d)&&oa(t.reset,a),w=b?d:this.get(),$=pa(c),S=mr.num($)||mr.arr($)||Pi($),F=!p&&(!S||oa(o.immediate||t.immediate,a));if(f){const e=ea(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let D=fi(c),B=!1;if(!D){const e=b||!Ha(this)&&h;(f||e)&&(B=yr(pa(w),$),D=!B),(yr(s.immediate,F)||F)&&yr(g.decay,m)&&yr(g.velocity,y)||(D=!0)}if(B&&Ia(this)&&(s.changed&&!b?D=!0:D||this._stop(l)),!p&&((D||fi(l))&&(s.values=v.getPayload(),s.toValues=fi(c)?null:x==Zi?[1]:wr($)),s.immediate!=F&&(s.immediate=F,F||b||this._set(l)),D)){const{onRest:e}=s;vr(Ya,(e=>Ua(this,t,e)));const r=xa(this,Na(this,l));xr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Jn.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?aa(o.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(Ba(t.to,t,this._state,this)):D?this._start():Ia(this)&&!f?this._pendingCalls.add(n):n(Fa(w))}_focus(e){const t=this.animation;e!==t.to&&(gi(this)&&this._detach(),t.to=e,gi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;fi(t)&&(bi(t,this),Ma(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;fi(e)&&wi(e,this)}_set(e,t=!0){const n=pi(e);if(!mr.und(n)){const e=Wi(this);if(!e||!yr(n,e.getValue())){const r=ea(n);e&&e.constructor==r?e.setValue(n):Yi(this,r.create(n)),e&&Jn.batchedUpdates((()=>{this._onChange(n,t)}))}}return Wi(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qa(this,"onStart",xa(this,Na(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),aa(this.animation.onChange,e,this)),aa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Wi(this).reset(pi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ia(this)||(Ta(this,!0),Pa(this)||this._resume())}_resume(){Gn.skipAnimation?this.finish():Hr.start(this)}_stop(e,t){if(Ia(this)){Ta(this,!1);const n=this.animation;vr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),mi(this,{type:"idle",parent:this});const r=t?Da(this.get()):xa(this.get(),Na(this,e??n.to));xr(this._pendingCalls,r),n.changed&&(n.changed=!1,qa(this,"onRest",r,this))}}};function Na(e,t){const n=pa(t);return yr(pa(e.get()),n)}function Ra(e,t=e.loop,n=e.to){const r=aa(t);if(r){const i=!0!==r&&fa(r),a=(i||e).reverse,o=!i||i.reset;return Va({...e,loop:t,default:!1,pause:void 0,to:!a||ga(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Va(e){const{to:t,from:n}=e=fa(e),r=new Set;return mr.obj(t)&&Wa(t,r),mr.obj(n)&&Wa(n,r),e.keys=r.size?Array.from(r):null,e}function La(e){const t=Va(e);return mr.und(t.default)&&(t.default=ca(t)),t}function Wa(e,t){br(e,((e,n)=>null!=e&&t.add(n)))}var Ya=["onStart","onRest","onChange","onPause","onResume"];function Ua(e,t,n){e.animation[n]=t[n]!==la(t,n)?sa(t[n],e.key):void 0}function qa(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Qa=["onStart","onChange","onRest"],Za=1,Ga=class{constructor(e,t){this.id=Za++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];mr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Va(e)),this}start(e){let{queue:t}=this;return e?t=wr(e).map(Va):this.queue=[],this._flush?this._flush(this,t):(ro(this,t),Xa(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;vr(wr(t),(t=>n[t].stop(!!e)))}else _a(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mr.und(e))this.start({pause:!0});else{const t=this.springs;vr(wr(e),(e=>t[e].pause()))}return this}resume(e){if(mr.und(e))this.start({pause:!1});else{const t=this.springs;vr(wr(e),(e=>t[e].resume()))}return this}each(e){br(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,$r(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&$r(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,$r(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Jn.onFrame(this._onFrame)}};function Xa(e,t){return Promise.all(t.map((t=>Ja(e,t)))).then((t=>Sa(e,t)))}async function Ja(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,u=mr.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=mr.arr(i)||mr.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):vr(Qa,(n=>{const r=t[n];if(mr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,xr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===la(t,"cancel");(c||f&&d.asyncId)&&h.push($a(++e._lastAsyncId,{props:t,state:d,actions:{pause:gr,resume:gr,start(t,n){f?(_a(d,e._lastAsyncId),n(Da(e))):(t.onRest=s,n(Ba(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Sa(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=Ra(t,o,i);if(n)return ro(e,[n]),Ja(e,n,!0)}return l&&Jn.batchedUpdates((()=>l(p,e,e.item))),p}function Ka(e,t){const n={...e.springs};return t&&vr(wr(t),(e=>{mr.und(e.keys)&&(e=Va(e)),mr.obj(e.to)||(e={...e,to:void 0}),no(n,e,(e=>to(e)))})),eo(e,n),n}function eo(e,t){br(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,bi(t,e))}))}function to(e,t){const n=new ja;return n.key=e,t&&bi(n,t),n}function no(e,t,n){t.keys&&vr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ro(e,t){vr(t,(t=>{no(e.springs,t,(t=>to(t,e)))}))}var io,ao,oo=({children:e,...t})=>{const r=p(so),o=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=i(),o=r.current;let s=o;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,o==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:l}=so;return n.createElement(l,{value:t},e)},so=(io=oo,ao={},Object.assign(io,n.createContext(ao)),io.Provider._context=io,io.Consumer._context=io,io);oo.Provider=so.Provider,oo.Consumer=so.Consumer;var lo=()=>{const e=[],t=function(t){Ii(`${Ai}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return vr(e,((e,i)=>{if(mr.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return vr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vr(e,(e=>e.resume(...arguments))),this},t.set=function(t){vr(e,((e,n)=>{const r=mr.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return vr(e,((e,r)=>{if(mr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return vr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return mr.fun(e)?e(n,t):e};return t._getProps=n,t};function uo(e,t){const n=mr.fun(e),[[r],a]=function(e,t,n){const r=mr.fun(t)&&t;r&&!n&&(n=[]);const a=g((()=>r||3==arguments.length?lo():void 0),[]),o=i(0),s=ji(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Ka(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Xa(e,t):new Promise((r=>{eo(e,n),l.queue.push((()=>{r(Xa(e,t))})),s()}))}})),[]),u=i([...l.ctrls]),c=[],d=Vi(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Ga(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=La(n))}}g((()=>{vr(u.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=u.current.map(((e,t)=>Ka(e,c[t]))),m=p(oo),y=Vi(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ti((()=>{o.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],vr(e,(e=>e()))),vr(u.current,((e,t)=>{a?.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ni((()=>()=>{vr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return a?[b,a]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,a]:r}var co=class extends Aa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ri(...t);const n=this._get(),r=ea(n);Yi(this,r.create(n))}advance(e){const t=this._get();yr(t,this.get())||(Wi(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fo(this._active)&&po(this)}_get(){const e=mr.arr(this.source)?this.source.map(pi):wr(pi(this.source));return this.calc(...e)}_start(){this.idle&&!fo(this._active)&&(this.idle=!1,vr(Ui(this),(e=>{e.done=!1})),Gn.skipAnimation?(Jn.batchedUpdates((()=>this.advance())),po(this)):Hr.start(this))}_attach(){let e=1;vr(wr(this.source),(t=>{fi(t)&&bi(t,this),Ma(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vr(wr(this.source),(e=>{fi(e)&&wi(e,this)})),this._active.clear(),po(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=wr(this.source).reduce(((e,t)=>Math.max(e,(Ma(t)?t.priority:0)+1)),0))}};function ho(e){return!1!==e.idle}function fo(e){return!e.size||Array.from(e).every(ho)}function po(e){e.idle||(e.idle=!0,vr(Ui(e),(e=>{e.done=!0})),mi(e,{type:"idle",parent:e}))}Gn.assign({createStringInterpolator:Ei,to:(e,t)=>new co(e,t)});var go=/^--/;function mo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||go.test(e)||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}var yo={};var vo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bo=["Webkit","Ms","Moz","O"];vo=Object.keys(vo).reduce(((e,t)=>(bo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),vo);var wo=/^(matrix|translate|scale|rotate|skew)/,$o=/^(translate)/,So=/^(rotate|skew)/,Fo=(e,t)=>mr.num(e)&&0!==e?e+t:e,xo=(e,t)=>mr.arr(e)?e.every((e=>xo(e,t))):mr.num(e)?e===t:parseFloat(e)===t,Do=class extends Xi{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Fo(e,"px"))).join(",")})`,xo(e,0)]))),br(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(wo.test(t)){if(delete r[t],mr.und(e))return;const n=$o.test(t)?"px":So.test(t)?"deg":"";i.push(wr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Fo(i,n)})`,xo(i,0)]:e=>[`${t}(${e.map((e=>Fo(e,n))).join(",")})`,xo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Bo(i,a)),super(r)}},Bo=class extends yi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vr(this.inputs,((n,r)=>{const i=pi(n[0]),[a,o]=this.transforms[r](mr.arr(i)?i:n.map(pi));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&vr(this.inputs,(e=>vr(e,(e=>fi(e)&&bi(e,this)))))}observerRemoved(e){0==e&&vr(this.inputs,(e=>vr(e,(e=>fi(e)&&wi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),mi(this,e)}};Gn.assign({batchedUpdates:F,createStringInterpolator:Ei,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var _o,ko,Oo,Mo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Xi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=ia(e)||"Anonymous";return(e=mr.str(e)?a[e]||(a[e]=ta(e,i)):e[ra]||(e[ra]=ta(e,i))).displayName=`Animated(${t})`,e};return br(e,((t,n)=>{mr.arr(e)&&(n=ia(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:yo[t]||(yo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=mo(t,r[t]);go.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Do(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Eo=Mo.animated;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(_o||(_o={})),function(e){e.AM="AM",e.PM="PM"}(ko||(ko={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:ko.AM};if(!t)return n;try{if("24hr"===e){const r=Ho(t,e);n.minute=_o.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=ko.AM,n.hour=0===i?"12":_o.padValue(i.toString())):(n.period=ko.PM,n.hour=12===i?i.toString():_o.padValue((i-12).toString()))}else{const r=Ho(t,e);n.hour=_o.padValue(r.hour),n.minute=_o.padValue(r.minute),n.period="am"===r.period.toLowerCase()?ko.AM:ko.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_o.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return _o.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_o.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?_o.padValue(r.toString()):13===r?_o.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===ko.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return _o.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Ho(e,t),r=_o.padValue(n.hour);let i=`${r}:${_o.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(Oo||(Oo={}));const Ao=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Co=e=>{const t=parseInt(e);return t>=0&&t<=59},Ho=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!Ao(n[0],t)||!Co(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ao(n[0],t)||!Co(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Io={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Po=e=>Object.keys(Io).reduce(((t,n)=>{const r=Io[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),To=Po("max-width"),zo=(Po("min-width"),y.div`
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
`,Wo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Yo={collections:{base:{D1:{fontFamily:Wo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Uo=e=>t=>{const n=t.theme,r=Lt(Yo,n[Wt.textStyleScheme]);return n.options&&n.options.textStyle?Vt(r,e,n.options.textStyle):Vt(r,e)},qo={D1:{fontFamily:Uo("D1.fontFamily"),fontSize:Uo("D1.fontSize"),fontWeight:Uo("D1.fontWeight"),lineHeight:Uo("D1.lineHeight"),letterSpacing:Uo("D1.letterSpacing")},D2:{fontFamily:Uo("D2.fontFamily"),fontSize:Uo("D2.fontSize"),fontWeight:Uo("D2.fontWeight"),lineHeight:Uo("D2.lineHeight"),letterSpacing:Uo("D2.letterSpacing")},D3:{fontFamily:Uo("D3.fontFamily"),fontSize:Uo("D3.fontSize"),fontWeight:Uo("D3.fontWeight"),lineHeight:Uo("D3.lineHeight"),letterSpacing:Uo("D3.letterSpacing")},D4:{fontFamily:Uo("D4.fontFamily"),fontSize:Uo("D4.fontSize"),fontWeight:Uo("D4.fontWeight"),lineHeight:Uo("D4.lineHeight"),letterSpacing:Uo("D4.letterSpacing")},DBody:{fontFamily:Uo("DBody.fontFamily"),fontSize:Uo("DBody.fontSize"),fontWeight:Uo("DBody.fontWeight"),lineHeight:Uo("DBody.lineHeight"),letterSpacing:Uo("DBody.letterSpacing")},H1:{fontFamily:Uo("H1.fontFamily"),fontSize:Uo("H1.fontSize"),fontWeight:Uo("H1.fontWeight"),lineHeight:Uo("H1.lineHeight"),letterSpacing:Uo("H1.letterSpacing")},H2:{fontFamily:Uo("H2.fontFamily"),fontSize:Uo("H2.fontSize"),fontWeight:Uo("H2.fontWeight"),lineHeight:Uo("H2.lineHeight"),letterSpacing:Uo("H2.letterSpacing")},H3:{fontFamily:Uo("H3.fontFamily"),fontSize:Uo("H3.fontSize"),fontWeight:Uo("H3.fontWeight"),lineHeight:Uo("H3.lineHeight"),letterSpacing:Uo("H3.letterSpacing")},H4:{fontFamily:Uo("H4.fontFamily"),fontSize:Uo("H4.fontSize"),fontWeight:Uo("H4.fontWeight"),lineHeight:Uo("H4.lineHeight"),letterSpacing:Uo("H4.letterSpacing")},H5:{fontFamily:Uo("H5.fontFamily"),fontSize:Uo("H5.fontSize"),fontWeight:Uo("H5.fontWeight"),lineHeight:Uo("H5.lineHeight"),letterSpacing:Uo("H5.letterSpacing")},H6:{fontFamily:Uo("H6.fontFamily"),fontSize:Uo("H6.fontSize"),fontWeight:Uo("H6.fontWeight"),lineHeight:Uo("H6.lineHeight"),letterSpacing:Uo("H6.letterSpacing")},Body:{fontFamily:Uo("Body.fontFamily"),fontSize:Uo("Body.fontSize"),fontWeight:Uo("Body.fontWeight"),lineHeight:Uo("Body.lineHeight"),letterSpacing:Uo("Body.letterSpacing")},BodySmall:{fontFamily:Uo("BodySmall.fontFamily"),fontSize:Uo("BodySmall.fontSize"),fontWeight:Uo("BodySmall.fontWeight"),lineHeight:Uo("BodySmall.lineHeight"),letterSpacing:Uo("BodySmall.letterSpacing")},XSmall:{fontFamily:Uo("XSmall.fontFamily"),fontSize:Uo("XSmall.fontSize"),fontWeight:Uo("XSmall.fontWeight"),lineHeight:Uo("XSmall.lineHeight"),letterSpacing:Uo("XSmall.letterSpacing")}},Qo=e=>{switch(e){case 700:case"bold":return Wo.Bold;case 600:case"semibold":return Wo.Semibold;case 300:case"light":return Wo.Light;case 400:case"regular":return Wo.Regular;default:return""}},Zo=(e,t)=>n=>{var r;const i=qo[e].fontFamily(n),a=qo[e].fontWeight(n);return Object.values(Wo).includes(i)?v`
                font-family: ${Qo(t)||Qo(a)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=Go(t)||a)&&void 0!==r?r:"normal"};
        `},Go=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xo=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jo=Zo,Ko=(e,t,n=!1)=>r=>{const i=qo[e],a=i.fontSize(r);return v`
            ${Zo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},es=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${Xo(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Xo(n)}
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
    `,e.Hyperlink={Default:e=>is(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>is(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ts||(ts={}));const ns=y.a`
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
`,rs=y(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,is=n=>{var{external:r=!1,children:i}=n,a=E(n,["external","children"]);return e(ns,Object.assign({},a,{children:[i,r&&t(rs,{})]}))};var as;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(as||(as={}));const os={collections:{base:{InputBoxShadow:v`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ss=e=>t=>{var n;const r=t.theme,i=Lt(os,r[Wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Vt(i,e,r.options.designToken):Vt(i,e)},ls={InputBoxShadow:ss("InputBoxShadow"),InputErrorBoxShadow:ss("InputErrorBoxShadow"),ElevationBoxShadow:ss("ElevationBoxShadow"),Table:{Header:ss("Table.Header"),Cell:{Primary:ss("Table.Cell.Primary"),Secondary:ss("Table.Cell.Secondary"),Selected:ss("Table.Cell.Selected"),Hover:ss("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ss("Button.Danger.BackgroundColor"),Hover:ss("Button.Danger.Hover"),Primary:ss("Button.Danger.Primary"),Border:ss("Button.Danger.Border")}}},us=y.button`
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

                    span {
                        color: ${e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary};
                    }
                `;case"light":return v`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid ${qt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary};
                    }
                `;case"disabled":return v`
                    background-color: ${qt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${qt.Neutral[3]};
                    }
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
                        span {
                            color: ${e.$buttonIsDanger?ls.Button.Danger.Hover:qt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?ls.Button.Danger.BackgroundColor:qt.Primary};
                    border: 1px solid transparent;

                    ${To.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${qt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${Ko("H5","semibold")}
                    }

                    ${To.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${Ko("H4","semibold")}
                    }

                    ${To.mobileS} {
                        height: auto;
                    }
                `}
`,cs=y((({color:n,className:r,size:i=18})=>e(zo,Object.assign({className:r,$size:i,$color:n},{children:[t(No,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(Ro,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Vo,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(Lo,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ls.Button.Danger.Primary:qt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ds={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,u=E(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(us,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(cs,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,u=E(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(us,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(cs,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},hs=y.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;
    isolation: isolate;

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
`,vs=({type:e,active:n=!1,disabled:r,className:i})=>{let a;switch(e){case"checkbox":a=t(n?O:k,{});break;case"radio":a=t(n?B:D,{});break;case"tick":a=t(M,{});break;case"cross":a=t(_,{});break;default:a=null}return t(ys,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var bs={exports:{}};bs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var u=o[l],c=d[u],h=c&&c[0],f=c&&c[1];o[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,u=e.slice(r),c=a.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],u=!0===o[3],c=l||u,d=o[2];u&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ws,$s,Ss=C(bs.exports),Fs={exports:{}},xs=C(Fs.exports=(ws={year:0,month:1,day:2,hour:3,minute:4,second:5},$s={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=$s[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$s[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,u=s.value,c=ws[l];c>=0&&(a[c]=parseInt(u,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Ds={exports:{}};Ds.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),a=n-i<0,o=t.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof D},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),n&&(w[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},F=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},x=v;x.l=S,x.i=$,x.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,c=x.p(e),f=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=x.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[o]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=x.p(c),g=function(e){var t=F(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return x.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:x.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=x.p(h),m=F(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=x.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[a]=v/t,p[i]=v/e,p)[g]||v,f?b:x.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return F.prototype=B,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,D,F),e.$i=!0),F},F.locale=S,F.isDayjs=$,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Bs=C(Ds.exports),_s={exports:{}};_s.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var ks=C(_s.exports),Os={exports:{}};Os.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ms=C(Os.exports),Es={exports:{}};Es.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var As,Cs=C(Es.exports);Bs.extend(ks),Bs.extend(Ms),Bs.extend(Cs),Bs.extend(Ss),Bs.extend(xs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Bs(t).startOf("week");return Hs(n).map((e=>Is(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Is(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Bs(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bs(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bs(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Bs(r):void 0,i?Bs(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(As||(As={}));const Hs=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Is=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ps=[1,3,5,7,8,10,12],Ts=[4,6,9,11];var zs,js,Ns;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Ps.includes(a)?Math.min(i,31).toString():Ts.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Bs(e,n);return Bs(t,n).diff(r,"minute")},e.toDayjs=e=>e?Bs(e):Bs(),e.addMinutesToTime=(e,t,n="HH:mm")=>Bs(e,n).add(t,"minutes").format(n)}(zs||(zs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Bs(e).isBefore(r,"day"))||!(!i||!Bs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Bs(e).isValid())return e}return""}}(js||(js={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ns||(Ns={}));const Rs=(e,t,n="window",r)=>{const a=i();c((()=>{a.current=t}),[t]),c((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const i=e=>a.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])},Vs=y.button`
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
`,Ls=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=E(e,["children","focusHighlight","focusOutline","type"]);return t(Vs,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Ws=y.div`
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
`,nl=y((({type:n="checkbox",indicator:r,checked:o,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(o),[w]=a(Ns.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=i();c((()=>{b(o)}),[o]);return e(hs,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m},{children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(vs,{type:e,active:v,disabled:d})})(),t(fs,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(ps,{children:[t(gs,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(ms,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,rl=y(ds.Small)`
    width: 7rem;

    ${To.mobileL} {
        flex: 1;
    }

    ${To.mobileS} {
        width: 100%;
    }
`;var il,al,ol;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(il||(il={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(al||(al={})),function(e){e.AM="am",e.PM="pm"}(ol||(ol={}));const sl=({id:n,value:r,show:o,format:s,onChange:l,onCancel:u})=>{const d=Oo.getTimeValues(s,r),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=i(),S=i(),F=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),y=i(null),v=null!=f?f:y,b=i(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return Qn((function(){if(!Yn()){var e=qn(g,S,c,h);b.current=Ln((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Yn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,p,v.current]),tn({ref:v},$)}();c((()=>{if(o&&b.current&&b.current.focus(),o){const{hour:e,minute:t,period:n}=Oo.getTimeValues(s,r);p(e),m(t),v(n)}}),[o,r,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case il.MINUTE_UP:m(Oo.updateMinutes(g,"add"));break;case il.MINUTE_DOWN:m(Oo.updateMinutes(g,"minus"));break;case il.HOUR_UP:p(Oo.updateHours(h,"add"));break;case il.HOUR_DOWN:p(Oo.updateHours(h,"minus"))}}),[h,g]),B=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case al.HOUR:t.length<=2&&p(t);break;case al.MINUTE:t.length<=2&&m(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case al.HOUR:{const n=t>23||t<0?d.hour:Oo.convertHourTo12HourFormat(e.target.value);p(n);break}case al.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(_o.padValue(n));break}}},O=e=>{switch(e.target.name){case ol.AM:v(ko.AM);break;case ol.PM:v(ko.PM)}},M=e=>n?`${n}-${e}`:e,E=uo({height:o?F.height+32:0});return t(Us,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(qs,Object.assign({ref:F.ref,"data-testid":M("timepicker-dropdown"),inert:o?void 0:""},{children:[e(Qs,{children:[e(Gs,{children:[e(Js,{children:[t(Ks,Object.assign({"aria-label":"increase hour",name:il.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(tl,{"aria-label":"hour",type:"number",name:al.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:B,onChange:_,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Ks,Object.assign({"aria-label":"decrease hour",name:il.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(el,{children:":"}),e(Js,{children:[t(Ks,Object.assign({"aria-label":"increase minute",name:il.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(tl,{"aria-label":"minute",type:"number",name:al.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:_,onBlur:k,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Ks,Object.assign({"aria-label":"decrease minute",name:il.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Xs,{children:[t(nl,Object.assign({checked:y===ko.AM,name:ol.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(nl,Object.assign({checked:y===ko.PM,name:ol.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Zs,{children:[t(rl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":M("cancel-button")},{children:"Cancel"})),t(rl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Oo.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))},ll=y.div`
    position: relative;
`,ul=y(Ws)`
    height: 3rem;
    gap: 0.5rem;
`,cl=y(Ys)`
    display: block;
    width: 100%;
    flex: 1;
`,dl=n=>{var{id:r,disabled:o=!1,error:s,value:l,format:u="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,g=E(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,y]=a(!1),[v,b]=a(!1),[w,$]=a(""),[S,F]=a(""),x=i();c((()=>{l&&($(l.start),F(l.end))}),[]),Rs("mousedown",(function(e){o||k(e)}),"document"),Rs("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const D=()=>{_()},B=()=>{m||v||f&&f()},_=()=>{y(!1),b(!1),p&&p()},k=e=>{x&&!x.current.contains(e.target)&&(v||m)&&_()};return t(ll,Object.assign({ref:x,id:r},g,{children:e(ul,Object.assign({$disabled:o,$error:s,$readOnly:d},{children:[e(Kt,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[t(cl,{onFocus:()=>{o||d||m||(b(!1),y(!0),B())},readOnly:!0,placeholder:"From",value:Oo.formatDisplayValue(w,u),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(cl,{onFocus:()=>{o||d||v||(y(!1),b(!0),B())},readOnly:!0,placeholder:"To",value:Oo.formatDisplayValue(S,u),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(sl,{id:r,show:m,value:w,format:u,onCancel:D,onChange:e=>{y(!1),b(!0),$(e);h&&h({start:e,end:S})}}),t(sl,{id:r,show:v,value:S,format:u,onCancel:D,onChange:e=>{b(!1),F(e);h&&h({start:w,end:e}),""==w?y(!0):p&&p()}})]}))}))};export{dl as TimeRangePicker};
//# sourceMappingURL=index.js.map
