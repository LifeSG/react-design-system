import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{cloneElement as i,useRef as o,useState as a,isValidElement as s,createRef as l,PureComponent as c,useEffect as u,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import{ArrowRightIcon as m}from"@lifesg/react-icons";import y,{css as v,keyframes as b}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as x}from"react-dom";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as O}from"@lifesg/react-icons/circle-dot";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{SquareIcon as D}from"@lifesg/react-icons/square";import{SquareTickFillIcon as M}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E=Array.isArray,P="object"==typeof H&&H&&H.Object===Object&&H,T="object"==typeof self&&self&&self.Object===Object&&self,I=P||T||Function("return this")(),C=I.Symbol,j=C,z=Object.prototype,N=z.hasOwnProperty,R=z.toString,V=j?j.toStringTag:void 0;var W=function(e){var t=N.call(e,V),n=e[V];try{e[V]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[V]=n:delete e[V]),i},L=Object.prototype.toString;var Y=W,U=function(e){return L.call(e)},q=C?C.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?Y(e):U(e)};var Z=Q,G=function(e){return null!=e&&"object"==typeof e};var X=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Z(e)},J=E,K=X,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var ne=function(e,t){if(J(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=Q,oe=re;var ae,se=function(e){if(!oe(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},le=I["__core-js_shared__"],ce=(ae=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var ue=function(e){return!!ce&&ce in e},de=Function.prototype.toString;var he=se,fe=ue,pe=re,ge=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ye=Function.prototype,ve=Object.prototype,be=ye.toString,we=ve.hasOwnProperty,$e=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!pe(e)||fe(e))&&(he(e)?$e:me).test(ge(e))},xe=function(e,t){return null==e?void 0:e[t]};var Fe=function(e,t){var n=xe(e,t);return Se(n)?n:void 0},_e=Fe(Object,"create"),Oe=_e;var ke=function(){this.__data__=Oe?Oe(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=_e,Be=Object.prototype.hasOwnProperty;var Ae=function(e){var t=this.__data__;if(Me){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},He=_e,Ee=Object.prototype.hasOwnProperty;var Pe=_e;var Te=ke,Ie=De,Ce=Ae,je=function(e){var t=this.__data__;return He?void 0!==t[e]:Ee.call(t,e)},ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Te,Ne.prototype.delete=Ie,Ne.prototype.get=Ce,Ne.prototype.has=je,Ne.prototype.set=ze;var Re=Ne;var Ve=function(){this.__data__=[],this.size=0};var We=function(e,t){return e===t||e!=e&&t!=t};var Le=function(e,t){for(var n=e.length;n--;)if(We(e[n][0],t))return n;return-1},Ye=Le,Ue=Array.prototype.splice;var qe=Le;var Qe=Le;var Ze=Le;var Ge=Ve,Xe=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ue.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=qe(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=Fe(I,"Map"),it=Re,ot=nt,at=rt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},ct=lt;var ut=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(at||ot),string:new it}},pt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ut(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(wt.Cache||bt),n}wt.Cache=bt;var $t=wt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,Ft=function(e){var t=$t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(xt,"$1"):n||e)})),t}));var _t=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ot=E,kt=X,Dt=C?C.prototype:void 0,Mt=Dt?Dt.toString:void 0;var Bt=function e(t){if("string"==typeof t)return t;if(Ot(t))return _t(t,e)+"";if(kt(t))return Mt?Mt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},At=Bt;var Ht=E,Et=ne,Pt=Ft,Tt=function(e){return null==e?"":At(e)};var It=X;var Ct=function(e,t){return Ht(e)?e:Et(e,t)?[e]:Pt(Tt(e))},jt=function(e){if("string"==typeof e||It(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var zt=function(e,t){for(var n=0,r=(t=Ct(t,e)).length;null!=e&&n<r;)e=e[jt(t[n++])];return n&&n==r?e:void 0};var Nt=function(e,t,n){var r=null==e?void 0:zt(e,t);return void 0===r?n:r};const Rt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,Vt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wt||(Wt={}));const Lt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const n=t.theme,r=Vt(Lt,n[Wt.colorScheme]);return n.options&&n.options.color?Rt(r,e,n.options.color):Rt(r,e)},Ut={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},qt=e=>`@media screen and (max-width: ${e}px)`,Qt=y.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return v`
                ${qt(e.$minWidthBeforeWrap)} {
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
                }
            `}}
`,Zt=y.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Gt=y(m)`
    color: ${Ut.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Xt=y.div`
    position: absolute;
    background: ${e=>e.$error?Ut.Validation.Red.Border(e):Ut.Primary(e)};
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

    ${e=>{if(e.$minWidthBeforeWrap)return v`
                ${qt(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,Jt=({children:n,currentActive:r,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=n;return e(Qt,Object.assign({className:o,$minWidthBeforeWrap:a},{children:[t(Zt,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Gt,{}),t(Zt,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Xt,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:a})]}))};var Kt=function(e,t){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Kt(e,t)};var en=function(){return en=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},en.apply(this,arguments)};var tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var nn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},rn="object"==typeof tn&&tn&&tn.Object===Object&&tn,on="object"==typeof self&&self&&self.Object===Object&&self,an=rn||on||Function("return this")(),sn=an,ln=function(){return sn.Date.now()},cn=/\s/;var un=function(e){for(var t=e.length;t--&&cn.test(e.charAt(t)););return t},dn=/^\s+/;var hn=function(e){return e?e.slice(0,un(e)+1).replace(dn,""):e},fn=an.Symbol,pn=fn,gn=Object.prototype,mn=gn.hasOwnProperty,yn=gn.toString,vn=pn?pn.toStringTag:void 0;var bn=function(e){var t=mn.call(e,vn),n=e[vn];try{e[vn]=void 0;var r=!0}catch(e){}var i=yn.call(e);return r&&(t?e[vn]=n:delete e[vn]),i},wn=Object.prototype.toString;var $n=bn,Sn=function(e){return wn.call(e)},xn=fn?fn.toStringTag:void 0;var Fn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xn&&xn in Object(e)?$n(e):Sn(e)},_n=function(e){return null!=e&&"object"==typeof e};var On=hn,kn=nn,Dn=function(e){return"symbol"==typeof e||_n(e)&&"[object Symbol]"==Fn(e)},Mn=/^[-+]0x[0-9a-f]+$/i,Bn=/^0b[01]+$/i,An=/^0o[0-7]+$/i,Hn=parseInt;var En=nn,Pn=ln,Tn=function(e){if("number"==typeof e)return e;if(Dn(e))return NaN;if(kn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=On(e);var n=Bn.test(e);return n||An.test(e)?Hn(e.slice(2),n?2:8):Mn.test(e)?NaN:+e},In=Math.max,Cn=Math.min;var jn=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=Pn();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Cn(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=Pn(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Tn(t)||0,En(n)&&(u=!!n.leading,o=(d="maxWait"in n)?In(Tn(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Pn())},y},zn=jn,Nn=nn;var Rn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),zn(e,t,{leading:r,maxWait:t,trailing:i})},Vn=function(e,t,n,r){switch(t){case"debounce":return jn(e,n,r);case"throttle":return Rn(e,n,r);default:return e}},Wn=function(e){return"function"==typeof e},Ln=function(){return"undefined"==typeof window},Yn=function(e){return e instanceof Element||e instanceof HTMLDocument},Un=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Wn(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Ln()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Ln())return null;if(t)return document.querySelector(t);if(r&&Yn(r))return r;if(n.targetRef&&Yn(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Un(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Ln()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Wn(t)?"renderProp":Wn(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,Ln()||(n.resizeHandler=Vn(n.createResizeHandler,i,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Kt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ln()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(c);case"childFunction":return(e=o)(c);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return i(e,u)}return i(e,c);case"childArray":return(e=o).map((function(e){return!!e&&i(e,c)}));default:return n.createElement(s,null)}}}(c);var qn=Ln()?u:d;let Qn=ur();const Zn=e=>ar(e,Qn);let Gn=ur();Zn.write=e=>ar(e,Gn);let Xn=ur();Zn.onStart=e=>ar(e,Xn);let Jn=ur();Zn.onFrame=e=>ar(e,Jn);let Kn=ur();Zn.onFinish=e=>ar(e,Kn);let er=[];Zn.setTimeout=(e,t)=>{let n=Zn.now()+t,r=()=>{let e=er.findIndex((e=>e.cancel==r));~e&&er.splice(e,1),ir-=~e?1:0},i={time:n,handler:e,cancel:r};return er.splice(tr(n),0,i),ir+=1,sr(),i};let tr=e=>~(~er.findIndex((t=>t.time>e))||~er.length);Zn.cancel=e=>{Xn.delete(e),Jn.delete(e),Kn.delete(e),Qn.delete(e),Gn.delete(e)},Zn.sync=e=>{or=!0,Zn.batchedUpdates(e),or=!1},Zn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Zn.onStart(n)}return r.handler=e,r.cancel=()=>{Xn.delete(n),t=null},r};let nr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Zn.use=e=>nr=e,Zn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Zn.batchedUpdates=e=>e(),Zn.catch=console.error,Zn.frameLoop="always",Zn.advance=()=>{"demand"!==Zn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):cr()};let rr=-1,ir=0,or=!1;function ar(e,t){or?(t.delete(e),e(0)):(t.add(e),sr())}function sr(){rr<0&&(rr=0,"demand"!==Zn.frameLoop&&nr(lr))}function lr(){~rr&&(nr(lr),Zn.batchedUpdates(cr))}function cr(){let e=rr;rr=Zn.now();let t=tr(rr);t&&(dr(er.splice(0,t),(e=>e.handler())),ir-=t),ir?(Xn.flush(),Qn.flush(e?Math.min(64,rr-e):16.667),Jn.flush(),Gn.flush(),Kn.flush()):rr=-1}function ur(){let e=new Set,t=e;return{add(n){ir+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(ir-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,ir-=t.size,dr(t,(t=>t(n)&&e.add(t))),ir+=e.size,t=e)}}}function dr(e,t){e.forEach((e=>{try{t(e)}catch(e){Zn.catch(e)}}))}function hr(){}const fr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function pr(e,t){if(fr.arr(e)){if(!fr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const gr=(e,t)=>e.forEach(t);function mr(e,t,n){if(fr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const yr=e=>fr.und(e)?[]:fr.arr(e)?e:[e];function vr(e,t){if(e.size){const n=Array.from(e);e.clear(),gr(n,t)}}const br=(e,...t)=>vr(e,(e=>e(...t))),wr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let $r,Sr,xr=null,Fr=!1,_r=hr;var Or=Object.freeze({__proto__:null,get createStringInterpolator(){return $r},get to(){return Sr},get colors(){return xr},get skipAnimation(){return Fr},get willAdvance(){return _r},assign:e=>{e.to&&(Sr=e.to),e.now&&(Zn.now=e.now),void 0!==e.colors&&(xr=e.colors),null!=e.skipAnimation&&(Fr=e.skipAnimation),e.createStringInterpolator&&($r=e.createStringInterpolator),e.requestAnimationFrame&&Zn.use(e.requestAnimationFrame),e.batchedUpdates&&(Zn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(_r=e.willAdvance),e.frameLoop&&(Zn.frameLoop=e.frameLoop)}});const kr=new Set;let Dr=[],Mr=[],Br=0;const Ar={get idle(){return!kr.size&&!Dr.length},start(e){Br>e.priority?(kr.add(e),Zn.onStart(Hr)):(Er(e),Zn(Tr))},advance:Tr,sort(e){if(Br)Zn.onFrame((()=>Ar.sort(e)));else{const t=Dr.indexOf(e);~t&&(Dr.splice(t,1),Pr(e))}},clear(){Dr=[],kr.clear()}};function Hr(){kr.forEach(Er),kr.clear(),Zn(Tr)}function Er(e){Dr.includes(e)||Pr(e)}function Pr(e){Dr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Dr,(t=>t.priority>e.priority)),0,e)}function Tr(e){const t=Mr;for(let n=0;n<Dr.length;n++){const r=Dr[n];Br=r.priority,r.idle||(_r(r),r.advance(e),r.idle||t.push(r))}return Br=0,Mr=Dr,Mr.length=0,Dr=t,Dr.length>0}const Ir="[-+]?\\d*\\.?\\d+",Cr=Ir+"%";function jr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const zr=new RegExp("rgb"+jr(Ir,Ir,Ir)),Nr=new RegExp("rgba"+jr(Ir,Ir,Ir,Ir)),Rr=new RegExp("hsl"+jr(Ir,Cr,Cr)),Vr=new RegExp("hsla"+jr(Ir,Cr,Cr,Ir)),Wr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Lr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yr=/^#([0-9a-fA-F]{6})$/,Ur=/^#([0-9a-fA-F]{8})$/;function qr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=qr(i,r,e+1/3),a=qr(i,r,e),s=qr(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Zr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Gr(e){return(parseFloat(e)%360+360)%360/360}function Xr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Jr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Kr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yr.exec(e))?parseInt(t[1]+"ff",16)>>>0:xr&&void 0!==xr[e]?xr[e]:(t=zr.exec(e))?(Zr(t[1])<<24|Zr(t[2])<<16|Zr(t[3])<<8|255)>>>0:(t=Nr.exec(e))?(Zr(t[1])<<24|Zr(t[2])<<16|Zr(t[3])<<8|Xr(t[4]))>>>0:(t=Wr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ur.exec(e))?parseInt(t[1],16)>>>0:(t=Lr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Rr.exec(e))?(255|Qr(Gr(t[1]),Jr(t[2]),Jr(t[3])))>>>0:(t=Vr.exec(e))?(Qr(Gr(t[1]),Jr(t[2]),Jr(t[3]))|Xr(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ei=(e,t,n)=>{if(fr.fun(e))return e;if(fr.arr(e))return ei({range:e,output:t,extrapolate:n});if(fr.str(e.output[0]))return $r(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ti=1.70158,ni=1.525*ti,ri=ti+1,ii=2*Math.PI/3,oi=2*Math.PI/4.5,ai=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},si={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ri*e*e*e-ti*e*e,easeOutBack:e=>1+ri*Math.pow(e-1,3)+ti*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ni)/2:(Math.pow(2*e-2,2)*((ni+1)*(2*e-2)+ni)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ii),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ii)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*oi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*oi)/2+1,easeInBounce:e=>1-ai(1-e),easeOutBounce:ai,easeInOutBounce:e=>e<.5?(1-ai(1-2*e))/2:(1+ai(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}const ci=Symbol.for("FluidValue.get"),ui=Symbol.for("FluidValue.observers"),di=e=>Boolean(e&&e[ci]),hi=e=>e&&e[ci]?e[ci]():e,fi=e=>e[ui]||null;function pi(e,t){let n=e[ui];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class gi{constructor(e){if(this[ci]=void 0,this[ui]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");mi(this,e)}}const mi=(e,t)=>bi(e,ci,t);function yi(e,t){if(e[ci]){let n=e[ui];n||bi(e,ui,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function vi(e,t){let n=e[ui];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ui]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const bi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),wi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,$i=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Si=new RegExp(`(${wi.source})(%|[a-z]+)`,"i"),xi=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Fi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,_i=e=>{const[t,n]=Oi(e);if(!t||wr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Fi.test(n)?_i(n):n||e},Oi=e=>{const t=Fi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let ki;const Di=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Mi=e=>{ki||(ki=xr?new RegExp(`(${Object.keys(xr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>hi(e).replace(Fi,_i).replace($i,Kr).replace(ki,Kr))),n=t.map((e=>e.match(wi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ei(li({},e,{output:t}))));return e=>{var n;const i=!Si.test(t[0])&&(null==(n=t.find((e=>Si.test(e))))?void 0:n.replace(wi,""));let o=0;return t[0].replace(wi,(()=>`${r[o++](e)}${i||""}`)).replace(xi,Di)}},Bi="react-spring: ",Ai=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Bi}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Hi=Ai(console.warn);const Ei=Ai(console.warn);function Pi(e){return fr.str(e)&&("#"==e[0]||/\d/.test(e)||!wr()&&Fi.test(e)||e in(xr||{}))}const Ti=wr()?u:d,Ii=()=>{const e=o(!1);return Ti((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ci(){const e=a()[1],t=Ii();return()=>{t.current&&e(Math.random())}}const ji=e=>u(e,zi),zi=[];function Ni(e){const t=o();return u((()=>{t.current=e})),t.current}const Ri=Symbol.for("Animated:node"),Vi=e=>e&&e[Ri],Wi=(e,t)=>{return n=e,r=Ri,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Li=e=>e&&e[Ri]&&e[Ri].getPayload();class Yi{constructor(){this.payload=void 0,Wi(this,this)}getPayload(){return this.payload||[]}}class Ui extends Yi{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,fr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ui(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return fr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,fr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class qi extends Ui{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ei({output:[e,e]})}static create(e){return new qi(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(fr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ei({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Qi={dependencies:null};class Zi extends Yi{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return mr(this.source,((n,r)=>{var i;(i=n)&&i[Ri]===i?t[r]=n.getValue(e):di(n)?t[r]=hi(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&gr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return mr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Qi.dependencies&&di(e)&&Qi.dependencies.add(e);const t=Li(e);t&&gr(t,(e=>this.add(e)))}}class Gi extends Zi{constructor(e){super(e)}static create(e){return new Gi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Xi)),!0)}}function Xi(e){return(Pi(e)?qi:Ui).create(e)}function Ji(e){const t=Vi(e);return t?t.constructor:fr.arr(e)?Gi:Pi(e)?qi:Ui}function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}const eo=(e,t)=>{const r=!fr.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,a)=>{const s=o(null),l=r&&f((e=>{s.current=function(e,t){e&&(fr.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const n=new Set;Qi.dependencies=n,e.style&&(e=Ki({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Zi(e),Qi.dependencies=null,[e,n]}(i,t),h=Ci(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new to(p,d),m=o();Ti((()=>(m.current=g,gr(d,(e=>yi(e,g))),()=>{m.current&&(gr(m.current.deps,(e=>vi(e,m.current))),Zn.cancel(m.current.update))}))),u(p,[]),ji((()=>()=>{const e=m.current;gr(e.deps,(t=>vi(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,Ki({},y,{ref:l}))}))};class to{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Zn.write(this.update)}}const no=Symbol.for("AnimatedComponent"),ro=e=>fr.str(e)?e:e&&fr.str(e.displayName)?e.displayName:fr.fun(e)&&e.name||null;function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}function oo(e,...t){return fr.fun(e)?e(...t):e}const ao=(e,t)=>!0===e||!!(t&&e&&(fr.fun(e)?e(t):yr(e).includes(t))),so=(e,t)=>fr.obj(e)?t&&e[t]:e,lo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,co=e=>e,uo=(e,t=co)=>{let n=ho;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);fr.und(n)||(r[i]=n)}return r},ho=["config","onProps","onStart","onChange","onPause","onResume","onRest"],fo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function po(e){const t=function(e){const t={};let n=0;if(mr(e,((e,r)=>{fo[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return mr(e,((e,r)=>r in t||(n[r]=e))),n}return io({},e)}function go(e){return e=hi(e),fr.arr(e)?e.map(go):Pi(e)?Or.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mo(e){return fr.fun(e)||fr.arr(e)&&fr.obj(e[0])}const yo=io({},{tension:170,friction:26},{mass:1,damping:1,easing:si.linear,clamp:!1});class vo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,yo)}}function bo(e,t){if(fr.und(t.decay)){const n=!fr.und(t.tension)||!fr.und(t.friction);!n&&fr.und(t.frequency)&&fr.und(t.damping)&&fr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const wo=[];class $o{constructor(){this.changed=!1,this.values=wo,this.toValues=null,this.fromValues=wo,this.to=void 0,this.from=void 0,this.config=new vo,this.immediate=!1}}function So(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ao(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{fr.und(n.pause)||(i.paused=ao(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ao(e,t)),c=oo(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-Zn.now()}function f(){c>0&&!Or.skipAnimation?(i.delayed=!0,u=Zn.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(io({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const xo=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Oo(e.get()):t.every((e=>e.noop))?Fo(e.get()):_o(e.get(),t.every((e=>e.finished))),Fo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),_o=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Oo=e=>({value:e,cancelled:!0,finished:!1});function ko(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=uo(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Oo(r)||i!==n.asyncId&&_o(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Mo,a=new Bo;return(async()=>{if(Or.skipAnimation)throw Do(n),a.result=_o(r,!1),d(a),a;f(o);const s=fr.obj(e)?io({},e):io({},t,{to:e});s.parentId=i,mr(c,((e,t)=>{fr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Or.skipAnimation)return Do(n),_o(r,!1);try{let t;t=fr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=_o(r.get(),!0,!1)}catch(e){if(e instanceof Mo)g=e.result;else{if(!(e instanceof Bo))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return fr.fun(a)&&Zn.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Do(e,t){vr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Mo extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Bo extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ao=e=>e instanceof Eo;let Ho=1;class Eo extends gi{constructor(...e){super(...e),this.id=Ho++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Vi(this);return e&&e.getValue()}to(...e){return Or.to(this,e)}interpolate(...e){return Hi(`${Bi}The "interpolate" function is deprecated in v9 (use "to" instead)`),Or.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){pi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ar.sort(this),pi(this,{type:"priority",parent:this,priority:e})}}const Po=Symbol.for("SpringPhase"),To=e=>(1&e[Po])>0,Io=e=>(2&e[Po])>0,Co=e=>(4&e[Po])>0,jo=(e,t)=>t?e[Po]|=3:e[Po]&=-3,zo=(e,t)=>t?e[Po]|=4:e[Po]&=-5;class No extends Eo{constructor(e,t){if(super(),this.key=void 0,this.animation=new $o,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!fr.und(e)||!fr.und(t)){const n=fr.obj(e)?io({},e):io({},t,{from:e});fr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Io(this)||this._state.asyncTo)||Co(this)}get goal(){return hi(this.animation.to)}get velocity(){const e=Vi(this);return e instanceof Ui?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return To(this)}get isAnimating(){return Io(this)}get isPaused(){return Co(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Li(r.to);!a&&di(r.to)&&(o=yr(hi(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==qi?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=fr.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(fr.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!fr.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Vi(this),l=s.getValue();if(t){const e=hi(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Zn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Io(this)){const{to:e,config:t}=this.animation;Zn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return fr.und(e)?(n=this.queue||[],this.queue=[]):n=[fr.obj(e)?e:io({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>xo(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Do(this._state,e&&this._lastCallId),Zn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=fr.obj(n)?n[t]:n,(null==n||mo(n))&&(n=void 0),r=fr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return To(this)||(e.reverse&&([n,r]=[r,n]),r=hi(r),fr.und(r)?Vi(this)||this._set(n):this._set(r)),i}_update(e,t){let n=io({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,uo(n,((e,t)=>/^on/.test(t)?so(e,r):e))),qo(this,n,"onProps"),Qo(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return So(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Co(this)||(zo(this,!0),br(a.pauseQueue),Qo(this,"onPause",_o(this,Ro(this,this.animation.to)),this))},resume:()=>{Co(this)&&(zo(this,!1),Io(this)&&this._resume(),br(a.resumeQueue),Qo(this,"onResume",_o(this,Ro(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Vo(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Oo(this));const r=!fr.und(e.to),i=!fr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Oo(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!fr.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!pr(d,c);h&&(s.from=d),d=hi(d);const f=!pr(u,l);f&&this._focus(u);const p=mo(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(bo(n=io({},n),t),t=io({},n,t)),bo(e,t),Object.assign(e,t);for(const t in yo)null==e[t]&&(e[t]=yo[t]);let{mass:r,frequency:i,damping:o}=e;fr.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,oo(t.config,o),t.config!==a.config?oo(a.config,o):void 0);let v=Vi(this);if(!v||fr.und(u))return n(_o(this,!0));const b=fr.und(t.reset)?i&&!t.default:!fr.und(d)&&ao(t.reset,o),w=b?d:this.get(),$=go(u),S=fr.num($)||fr.arr($)||Pi($),x=!p&&(!S||ao(a.immediate||t.immediate,o));if(f){const e=Ji(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const F=v.constructor;let _=di(u),O=!1;if(!_){const e=b||!To(this)&&h;(f||e)&&(O=pr(go(w),$),_=!O),(pr(s.immediate,x)||x)&&pr(g.decay,m)&&pr(g.velocity,y)||(_=!0)}if(O&&Io(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||di(l))&&(s.values=v.getPayload(),s.toValues=di(u)?null:F==qi?[1]:yr($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;gr(Uo,(e=>qo(this,t,e)));const r=_o(this,Ro(this,l));br(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Zn.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?oo(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(ko(t.to,t,this._state,this)):_?this._start():Io(this)&&!f?this._pendingCalls.add(n):n(Fo(w))}_focus(e){const t=this.animation;e!==t.to&&(fi(this)&&this._detach(),t.to=e,fi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;di(t)&&(yi(t,this),Ao(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;di(e)&&vi(e,this)}_set(e,t=!0){const n=hi(e);if(!fr.und(n)){const e=Vi(this);if(!e||!pr(n,e.getValue())){const r=Ji(n);e&&e.constructor==r?e.setValue(n):Wi(this,r.create(n)),e&&Zn.batchedUpdates((()=>{this._onChange(n,t)}))}}return Vi(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Qo(this,"onStart",_o(this,Ro(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),oo(this.animation.onChange,e,this)),oo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Vi(this).reset(hi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Io(this)||(jo(this,!0),Co(this)||this._resume())}_resume(){Or.skipAnimation?this.finish():Ar.start(this)}_stop(e,t){if(Io(this)){jo(this,!1);const n=this.animation;gr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),pi(this,{type:"idle",parent:this});const r=t?Oo(this.get()):_o(this.get(),Ro(this,null!=e?e:n.to));br(this._pendingCalls,r),n.changed&&(n.changed=!1,Qo(this,"onRest",r,this))}}}function Ro(e,t){const n=go(t);return pr(go(e.get()),n)}function Vo(e,t=e.loop,n=e.to){let r=oo(t);if(r){const i=!0!==r&&po(r),o=(i||e).reverse,a=!i||i.reset;return Wo(io({},e,{loop:t,default:!1,pause:void 0,to:!o||mo(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Wo(e){const{to:t,from:n}=e=po(e),r=new Set;return fr.obj(t)&&Yo(t,r),fr.obj(n)&&Yo(n,r),e.keys=r.size?Array.from(r):null,e}function Lo(e){const t=Wo(e);return fr.und(t.default)&&(t.default=uo(t)),t}function Yo(e,t){mr(e,((e,n)=>null!=e&&t.add(n)))}const Uo=["onStart","onRest","onChange","onPause","onResume"];function qo(e,t,n){e.animation[n]=t[n]!==lo(t,n)?so(t[n],e.key):void 0}function Qo(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Zo=["onStart","onChange","onRest"];let Go=1;class Xo{constructor(e,t){this.id=Go++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(io({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];fr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Wo(e)),this}start(e){let{queue:t}=this;return e?t=yr(e).map(Wo):this.queue=[],this._flush?this._flush(this,t):(ia(this,t),Jo(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;gr(yr(t),(t=>n[t].stop(!!e)))}else Do(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(fr.und(e))this.start({pause:!0});else{const t=this.springs;gr(yr(e),(e=>t[e].pause()))}return this}resume(e){if(fr.und(e))this.start({pause:!1});else{const t=this.springs;gr(yr(e),(e=>t[e].resume()))}return this}each(e){mr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,vr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&vr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,vr(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Zn.onFrame(this._onFrame)}}function Jo(e,t){return Promise.all(t.map((t=>Ko(e,t)))).then((t=>xo(e,t)))}async function Ko(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=fr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=fr.arr(i)||fr.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):gr(Zo,(n=>{const r=t[n];if(fr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,br(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===lo(t,"cancel");(u||f&&d.asyncId)&&h.push(So(++e._lastAsyncId,{props:t,state:d,actions:{pause:hr,resume:hr,start(t,n){f?(Do(d,e._lastAsyncId),n(Oo(e))):(t.onRest=s,n(ko(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=xo(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=Vo(t,a,i);if(n)return ia(e,[n]),Ko(e,n,!0)}return l&&Zn.batchedUpdates((()=>l(p,e,e.item))),p}function ea(e,t){const n=io({},e.springs);return t&&gr(yr(t),(e=>{fr.und(e.keys)&&(e=Wo(e)),fr.obj(e.to)||(e=io({},e,{to:void 0})),ra(n,e,(e=>na(e)))})),ta(e,n),n}function ta(e,t){mr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,yi(t,e))}))}function na(e,t){const n=new No;return n.key=e,t&&yi(n,t),n}function ra(e,t,n){t.keys&&gr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ia(e,t){gr(t,(t=>{ra(e.springs,t,(t=>na(t,e)))}))}const oa=["children"],aa=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,oa);const i=p(sa),s=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:c}=sa;return n.createElement(c,{value:r},t)},sa=(la=aa,ca={},Object.assign(la,n.createContext(ca)),la.Provider._context=la,la.Consumer._context=la,la);var la,ca;aa.Provider=sa.Provider,aa.Consumer=sa.Consumer;const ua=()=>{const e=[],t=function(t){Ei(`${Bi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return gr(e,((e,i)=>{if(fr.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return gr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return gr(e,(e=>e.resume(...arguments))),this},t.set=function(t){gr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return gr(e,((e,r)=>{if(fr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return gr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return gr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return fr.fun(e)?e(n,t):e};return t._getProps=n,t};function da(e,t){const n=fr.fun(e),[[r],i]=function(e,t,n){const r=fr.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?ua():void 0),[]),a=o(0),s=Ci(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=ea(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Jo(e,t):new Promise((r=>{ta(e,n),l.queue.push((()=>{r(Jo(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=Ni(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Xo(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Lo(n))}}g((()=>{gr(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>ea(e,u[t]))),m=p(aa),y=Ni(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ti((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],gr(e,(e=>e()))),gr(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ji((()=>()=>{gr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>io({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let ha;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(ha||(ha={}));class fa extends Eo{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ei(...t);const n=this._get(),r=Ji(n);Wi(this,r.create(n))}advance(e){const t=this._get();pr(t,this.get())||(Vi(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ga(this._active)&&ma(this)}_get(){const e=fr.arr(this.source)?this.source.map(hi):yr(hi(this.source));return this.calc(...e)}_start(){this.idle&&!ga(this._active)&&(this.idle=!1,gr(Li(this),(e=>{e.done=!1})),Or.skipAnimation?(Zn.batchedUpdates((()=>this.advance())),ma(this)):Ar.start(this))}_attach(){let e=1;gr(yr(this.source),(t=>{di(t)&&yi(t,this),Ao(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){gr(yr(this.source),(e=>{di(e)&&vi(e,this)})),this._active.clear(),ma(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=yr(this.source).reduce(((e,t)=>Math.max(e,(Ao(t)?t.priority:0)+1)),0))}}function pa(e){return!1!==e.idle}function ga(e){return!e.size||Array.from(e).every(pa)}function ma(e){e.idle||(e.idle=!0,gr(Li(e),(e=>{e.done=!0})),pi(e,{type:"idle",parent:e}))}function ya(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Or.assign({createStringInterpolator:Mi,to:(e,t)=>new fa(e,t)});const va=["style","children","scrollTop","scrollLeft","viewBox"],ba=/^--/;function wa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ba.test(e)||Sa.hasOwnProperty(e)&&Sa[e]?(""+t).trim():t+"px"}const $a={};let Sa={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const xa=["Webkit","Ms","Moz","O"];Sa=Object.keys(Sa).reduce(((e,t)=>(xa.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Sa);const Fa=["x","y","z"],_a=/^(matrix|translate|scale|rotate|skew)/,Oa=/^(translate)/,ka=/^(rotate|skew)/,Da=(e,t)=>fr.num(e)&&0!==e?e+t:e,Ma=(e,t)=>fr.arr(e)?e.every((e=>Ma(e,t))):fr.num(e)?e===t:parseFloat(e)===t;class Ba extends Zi{constructor(e){let{x:t,y:n,z:r}=e,i=ya(e,Fa);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Da(e,"px"))).join(",")})`,Ma(e,0)]))),mr(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(_a.test(t)){if(delete i[t],fr.und(e))return;const n=Oa.test(t)?"px":ka.test(t)?"deg":"";o.push(yr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Da(i,n)})`,Ma(i,0)]:e=>[`${t}(${e.map((e=>Da(e,n))).join(",")})`,Ma(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Aa(o,a)),super(i)}}class Aa extends gi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return gr(this.inputs,((n,r)=>{const i=hi(n[0]),[o,a]=this.transforms[r](fr.arr(i)?i:n.map(hi));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&gr(this.inputs,(e=>gr(e,(e=>di(e)&&yi(e,this)))))}observerRemoved(e){0==e&&gr(this.inputs,(e=>gr(e,(e=>di(e)&&vi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),pi(this,e)}}const Ha=["scrollTop","scrollLeft"];Or.assign({batchedUpdates:x,createStringInterpolator:Mi,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ea=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Zi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ro(e)||"Anonymous";return(e=fr.str(e)?o[e]||(o[e]=eo(e,i)):e[no]||(e[no]=eo(e,i))).displayName=`Animated(${t})`,e};return mr(e,((t,n)=>{fr.arr(e)&&(n=ro(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=ya(r,va),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:$a[t]||($a[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=wa(t,i[t]);ba.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Ba(e),getComponentProps:e=>ya(e,Ha)}),Pa=Ea.animated;var Ta,Ia,Ca;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ta||(Ta={})),function(e){e.AM="AM",e.PM="PM"}(Ia||(Ia={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Ia.AM};if(!t)return n;try{if("24hr"===e){const r=Na(t,e);n.minute=Ta.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Ia.AM,n.hour=0===i?"12":Ta.padValue(i.toString())):(n.period=Ia.PM,n.hour=12===i?i.toString():Ta.padValue((i-12).toString()))}else{const r=Na(t,e);n.hour=Ta.padValue(r.hour),n.minute=Ta.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Ia.AM:Ia.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ta.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Ta.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ta.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Ta.padValue(r.toString()):13===r?Ta.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Ia.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Ta.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Na(e,t),r=Ta.padValue(n.hour);let i=`${r}:${Ta.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(Ca||(Ca={}));const ja=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},za=e=>{const t=parseInt(e);return t>=0&&t<=59},Na=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!ja(n[0],t)||!za(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!ja(n[0],t)||!za(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Ra={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Va=e=>Object.keys(Ra).reduce(((t,n)=>{const r=Ra[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Wa=Va("max-width"),La=(Va("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ya=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ua=y.div`
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
    animation: ${Ya} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qa=y(Ua)`
    animation-delay: -0.45s;
`,Qa=y(Ua)`
    animation-delay: -0.3s;
`,Za=y(Ua)`
    animation-delay: -0.15s;
`,Ga={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xa={collections:{base:{D1:{fontFamily:Ga.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ga.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ga.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ga.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ga.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ga.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ga.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ga.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ga.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ga.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ga.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ga.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ga.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ga.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ja=e=>t=>{const n=t.theme,r=Vt(Xa,n[Wt.textStyleScheme]);return n.options&&n.options.textStyle?Rt(r,e,n.options.textStyle):Rt(r,e)},Ka={D1:{fontFamily:Ja("D1.fontFamily"),fontSize:Ja("D1.fontSize"),fontWeight:Ja("D1.fontWeight"),lineHeight:Ja("D1.lineHeight"),letterSpacing:Ja("D1.letterSpacing")},D2:{fontFamily:Ja("D2.fontFamily"),fontSize:Ja("D2.fontSize"),fontWeight:Ja("D2.fontWeight"),lineHeight:Ja("D2.lineHeight"),letterSpacing:Ja("D2.letterSpacing")},D3:{fontFamily:Ja("D3.fontFamily"),fontSize:Ja("D3.fontSize"),fontWeight:Ja("D3.fontWeight"),lineHeight:Ja("D3.lineHeight"),letterSpacing:Ja("D3.letterSpacing")},D4:{fontFamily:Ja("D4.fontFamily"),fontSize:Ja("D4.fontSize"),fontWeight:Ja("D4.fontWeight"),lineHeight:Ja("D4.lineHeight"),letterSpacing:Ja("D4.letterSpacing")},DBody:{fontFamily:Ja("DBody.fontFamily"),fontSize:Ja("DBody.fontSize"),fontWeight:Ja("DBody.fontWeight"),lineHeight:Ja("DBody.lineHeight"),letterSpacing:Ja("DBody.letterSpacing")},H1:{fontFamily:Ja("H1.fontFamily"),fontSize:Ja("H1.fontSize"),fontWeight:Ja("H1.fontWeight"),lineHeight:Ja("H1.lineHeight"),letterSpacing:Ja("H1.letterSpacing")},H2:{fontFamily:Ja("H2.fontFamily"),fontSize:Ja("H2.fontSize"),fontWeight:Ja("H2.fontWeight"),lineHeight:Ja("H2.lineHeight"),letterSpacing:Ja("H2.letterSpacing")},H3:{fontFamily:Ja("H3.fontFamily"),fontSize:Ja("H3.fontSize"),fontWeight:Ja("H3.fontWeight"),lineHeight:Ja("H3.lineHeight"),letterSpacing:Ja("H3.letterSpacing")},H4:{fontFamily:Ja("H4.fontFamily"),fontSize:Ja("H4.fontSize"),fontWeight:Ja("H4.fontWeight"),lineHeight:Ja("H4.lineHeight"),letterSpacing:Ja("H4.letterSpacing")},H5:{fontFamily:Ja("H5.fontFamily"),fontSize:Ja("H5.fontSize"),fontWeight:Ja("H5.fontWeight"),lineHeight:Ja("H5.lineHeight"),letterSpacing:Ja("H5.letterSpacing")},H6:{fontFamily:Ja("H6.fontFamily"),fontSize:Ja("H6.fontSize"),fontWeight:Ja("H6.fontWeight"),lineHeight:Ja("H6.lineHeight"),letterSpacing:Ja("H6.letterSpacing")},Body:{fontFamily:Ja("Body.fontFamily"),fontSize:Ja("Body.fontSize"),fontWeight:Ja("Body.fontWeight"),lineHeight:Ja("Body.lineHeight"),letterSpacing:Ja("Body.letterSpacing")},BodySmall:{fontFamily:Ja("BodySmall.fontFamily"),fontSize:Ja("BodySmall.fontSize"),fontWeight:Ja("BodySmall.fontWeight"),lineHeight:Ja("BodySmall.lineHeight"),letterSpacing:Ja("BodySmall.letterSpacing")},XSmall:{fontFamily:Ja("XSmall.fontFamily"),fontSize:Ja("XSmall.fontSize"),fontWeight:Ja("XSmall.fontWeight"),lineHeight:Ja("XSmall.lineHeight"),letterSpacing:Ja("XSmall.letterSpacing")}},es=e=>{switch(e){case 700:case"bold":return Ga.Bold;case 600:case"semibold":return Ga.Semibold;case 300:case"light":return Ga.Light;case 400:case"regular":return Ga.Regular;default:return""}},ts=(e,t)=>n=>{var r;const i=Ka[e].fontFamily(n),o=Ka[e].fontWeight(n);return Object.values(Ga).includes(i)?v`
                font-family: ${es(t)||es(o)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=ns(t)||o)&&void 0!==r?r:"normal"};
        `},ns=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rs=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},is=ts,os=(e,t,n=!1)=>r=>{const i=Ka[e],o=i.fontSize(r);return v`
            ${ts(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},as=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${rs(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${rs(n)}
        `;var ss;!function(e){e.D1=y.h1`
        ${e=>v`
                ${os("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${os("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${os("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${os("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${os("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${os("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${os("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${os("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${os("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${os("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${os("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${os("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${os("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${os("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${as(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>us(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>us(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ss||(ss={}));const ls=y.a`
    ${e=>v`
            ${os(e.textStyle,e.weight)}
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
`,cs=y(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,us=n=>{var{external:r=!1,children:i}=n,o=A(n,["external","children"]);return e(ls,Object.assign({},o,{children:[i,r&&t(cs,{})]}))};var ds;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ds||(ds={}));const hs=y.button`
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
                    background-color: ${Ut.Neutral[8](e)};
                    border: 1px solid ${Ut.Primary(e)};

                    span {
                        color: ${Ut.Primary(e)};
                    }
                `;case"light":return v`
                    background-color: ${Ut.Neutral[8](e)};
                    border: 1px solid ${Ut.Neutral[5](e)};

                    span {
                        color: ${Ut.Primary(e)};
                    }
                `;case"disabled":return v`
                    background-color: ${Ut.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ut.Neutral[3](e)};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ut.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ut.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${Ut.Primary(e)};
                    border: 1px solid transparent;

                    ${Wa.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ut.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${os("H5","semibold")}
                    }

                    ${Wa.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${os("H4","semibold")}
                    }

                    ${Wa.mobileS} {
                        height: auto;
                    }
                `}
`,fs=y((({color:n,className:r,size:i=18})=>e(La,Object.assign({className:r,$size:i,$color:n},{children:[t(Ua,{id:"inner1",$size:i-2,$borderWidth:2}),t(qa,{id:"inner2",$size:i-2,$borderWidth:2}),t(Qa,{id:"inner3",$size:i-2,$borderWidth:2}),t(Za,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ut.Primary(e);break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ps={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=A(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(hs,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(fs,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=A(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(hs,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(fs,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},gs=y.div`
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
                        border-color: ${Ut.Validation.Red.Icon};
                        background: ${Ut.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Red};
                        }
                    `:e.$disabled?v`
                        border-color: transparent;
                    `:v`
                        border-color: transparent;

                        :hover {
                            background: ${Ut.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?v`
                        background: ${Ut.Neutral[6]};
                        border-color: ${Ut.Neutral[5]};
                    `:e.$disabled&&e.$selected?v`
                        background: ${Ut.Neutral[6]};
                        border-color: ${Ut.Neutral[4]};
                    `:e.$error?v`
                        background: ${Ut.Neutral[8]};
                        border-color: ${Ut.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Red};
                        }
                    `:e.$selected?v`
                        background: ${Ut.Accent.Light[5]};
                        border-color: ${Ut.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Accent};
                        }
                    `:v`
                        background: ${Ut.Neutral[8]};
                        border-color: ${Ut.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Accent};
                            border-color: ${Ut.Accent.Light[1]};
                        }
                    `}
`,ms=y.input`
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
`,ys=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,vs=y.label`
    ${e=>e.$selected&&!e.$indicator?v`
                ${os("H4","semibold")}
            `:v`
                ${os("H4","regular")}
            `}

    color: ${Ut.Neutral[1]};

    ${e=>e.$disabled?v`
                color: ${Ut.Neutral[3]};
            `:e.$selected?v`
                color: ${Ut.Primary};
            `:void 0}
`,bs=y.div`
    ${os("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${is("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?v`
                color: ${Ut.Neutral[3]};
            `:e.$selected?v`
                color: ${Ut.Primary};
            `:v`
                color: ${Ut.Neutral[1]};
            `}
`,ws=y.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?v`
                    color: ${Ut.Primary};
                `:v`
                    color: ${Ut.Neutral[4]};
                `};
    }
`,$s=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?M:D,{});break;case"radio":o=t(n?O:_,{});break;case"tick":o=t(B,{});break;case"cross":o=t(k,{});break;default:o=null}return t(ws,Object.assign({className:i,$active:n,disabled:r},{children:o}))};var Ss={exports:{}};Ss.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var xs,Fs,_s=Ss.exports,Os={exports:{}},ks=Os.exports=(xs={year:0,month:1,day:2,hour:3,minute:4,second:5},Fs={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Fs[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fs[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=xs[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Ds={exports:{}};Ds.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof _},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},F=v;F.l=S,F.i=$,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),f=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=F.p(u),g=function(e){var t=x(f);return F.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return F.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:F.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=F.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=F.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:F.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=_.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Ms=Ds.exports,Bs={exports:{}};Bs.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var As=Bs.exports,Hs={exports:{}};Hs.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Es=Hs.exports,Ps={exports:{}};Ps.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ts,Is=Ps.exports;Ms.extend(As),Ms.extend(Es),Ms.extend(Is),Ms.extend(_s),Ms.extend(ks),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ms(t).startOf("week");return Cs(n).map((e=>js(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return js(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ms(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ms(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ms(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Ts||(Ts={}));const Cs=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},js=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},zs=[1,3,5,7,8,10,12],Ns=[4,6,9,11];var Rs,Vs,Ws;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":zs.includes(o)?Math.min(i,31).toString():Ns.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ms(e,n);return Ms(t,n).diff(r,"minute")},e.toDayjs=e=>e?Ms(e):Ms()}(Rs||(Rs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Ms(e).isBefore(r,"day"))||!(!i||!Ms(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ms(e).isValid())return e}return""}}(Vs||(Vs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ws||(Ws={}));const Ls=y.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&v`
                background-color: ${Ut.Neutral[7]};
            `}
    }
`,Ys=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=A(e,["children","focusHighlight","focusOutline","type"]);return t(Ls,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Us={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},qs=e=>t=>{var n;const r=t.theme,i=Vt(Us,r[Wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Rt(i,e,r.options.designToken):Rt(i,e)},Qs=qs("InputBoxShadow"),Zs=qs("InputErrorBoxShadow"),Gs=(qs("ElevationBoxShadow"),qs("Table.Header"),qs("Table.Cell.Primary"),qs("Table.Cell.Secondary"),qs("Table.Cell.Selected"),qs("Table.Cell.Hover"),y.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: 4px;
    background: ${Ut.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Qs};
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
                background: ${Ut.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?v`
                border: 1px solid ${Ut.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ut.Validation.Red.Border};
                    box-shadow: ${Zs};
                }
            `:void 0}
`),Xs=y.input`
    ${os("Body","regular")}
    color: ${Ut.Neutral[1]};
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
        color: ${Ut.Neutral[3]};
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
`,Js=y(Pa.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Ut.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Wa.mobileS} {
        max-width: 100%;
    }
`,Ks=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,el=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Wa.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,tl=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Wa.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,nl=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Wa.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,rl=y.div`
    display: flex;
    gap: 0.5rem;

    ${Wa.tablet} {
        flex-direction: column;
    }

    ${Wa.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,il=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Wa.mobileS} {
        width: 6rem;
    }
`,ol=y(Ys)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Ut.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ut.Primary};
    }
`,al=y(ss.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Wa.tablet} {
        margin: 0;
    }

    ${Wa.mobileS} {
        margin: 0 0.25rem;
    }
`,sl=y(Xs)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Ut.Neutral[5]};
    background: ${Ut.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Ut.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Wa.mobileS} {
        width: 100%;
    }
`,ll=y((({type:n="checkbox",indicator:r,checked:i,styleType:s="default",children:l,subLabel:c,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(i),[w]=a(Ws.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=o();u((()=>{b(i)}),[i]);return e(gs,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m},{children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t($s,{type:e,active:v,disabled:d})})(),t(ms,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(ys,{children:[t(vs,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:l})),c&&(()=>{if(!c)return null;let e;return"string"==typeof c?e=c:"function"==typeof c&&(e=c()),t(bs,Object.assign({$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,cl=y(ps.Small)`
    width: 7rem;

    ${Wa.mobileL} {
        flex: 1;
    }

    ${Wa.mobileS} {
        width: 100%;
    }
`;var ul,dl,hl;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(ul||(ul={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(dl||(dl={})),function(e){e.AM="am",e.PM="pm"}(hl||(hl={}));const fl=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const d=Ca.getTimeValues(s,r),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=o(),S=o(),x=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=f?f:y,b=o(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return qn((function(){if(!Ln()){var e=Un(g,S,u,h);b.current=Vn((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Ln()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,h,g,p,v.current]),en({ref:v},$)}();u((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=Ca.getTimeValues(s,r);p(e),m(t),v(n)}}),[i,r,s]),u((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},_=f((e=>{switch(e.currentTarget.name){case ul.MINUTE_UP:m(Ca.updateMinutes(g,"add"));break;case ul.MINUTE_DOWN:m(Ca.updateMinutes(g,"minus"));break;case ul.HOUR_UP:p(Ca.updateHours(h,"add"));break;case ul.HOUR_DOWN:p(Ca.updateHours(h,"minus"))}}),[h,g]),O=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case dl.HOUR:t.length<=2&&p(t);break;case dl.MINUTE:t.length<=2&&m(t)}},D=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case dl.HOUR:{const n=t>23||t<0?d.hour:Ca.convertHourTo12HourFormat(e.target.value);p(n);break}case dl.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Ta.padValue(n));break}}},M=e=>{switch(e.target.name){case hl.AM:v(Ia.AM);break;case hl.PM:v(Ia.PM)}},B=e=>n?`${n}-${e}`:e,A=da({height:i?x.height+32:0});return t(Js,Object.assign({"data-testid":"animated-dropdown-wrapper",style:A},{children:e(Ks,Object.assign({ref:x.ref,"data-testid":B("timepicker-dropdown"),inert:i?void 0:""},{children:[e(el,{children:[e(nl,{children:[e(il,{children:[t(ol,Object.assign({"aria-label":"increase hour",name:ul.HOUR_UP,tabIndex:-1,onClick:_,"data-testid":B("hour-increment-button")},{children:t($,{})})),t(sl,{"aria-label":"hour",type:"number",name:dl.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:O,onChange:k,onBlur:D,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")}),t(ol,Object.assign({"aria-label":"decrease hour",name:ul.HOUR_DOWN,tabIndex:-1,onClick:_,"data-testid":B("hour-decrement-button")},{children:t(w,{})}))]}),t(al,{children:":"}),e(il,{children:[t(ol,Object.assign({"aria-label":"increase minute",name:ul.MINUTE_UP,tabIndex:-1,onClick:_,"data-testid":B("minute-increment-button")},{children:t($,{})})),t(sl,{"aria-label":"minute",type:"number",name:dl.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:k,onBlur:D,onFocus:O,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")}),t(ol,Object.assign({"aria-label":"decrease minute",name:ul.MINUTE_DOWN,tabIndex:-1,onClick:_,"data-testid":B("minute-decrement-button")},{children:t(w,{})}))]})]}),e(rl,{children:[t(ll,Object.assign({checked:y===Ia.AM,name:hl.AM,type:"radio",onChange:M,"data-testid":B("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(ll,Object.assign({checked:y===Ia.PM,name:hl.PM,type:"radio",onChange:M,"data-testid":B("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(tl,{children:[t(cl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":B("cancel-button")},{children:"Cancel"})),t(cl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Ca.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":B("confirm-button")},{children:"Done"}))]})]}))}))},pl=(e,t,n="window",r)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])},gl=y.div`
    position: relative;
`,ml=y(Gs)`
    height: 3rem;
    gap: 0.5rem;
`,yl=y(Xs)`
    display: block;
    width: 100%;
    flex: 1;
`,vl=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,g=A(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,y]=a(!1),[v,b]=a(!1),[w,$]=a(""),[S,x]=a(""),F=o();u((()=>{l&&($(l.start),x(l.end))}),[]),pl("mousedown",(function(e){i||D(e)}),"document"),pl("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const _=()=>{k()},O=()=>{m||v||f&&f()},k=()=>{y(!1),b(!1),p&&p()},D=e=>{F&&!F.current.contains(e.target)&&(v||m)&&k()};return t(gl,Object.assign({ref:F,id:r},g,{children:e(ml,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[e(Jt,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[t(yl,{onFocus:()=>{i||d||m||(b(!1),y(!0),O())},readOnly:!0,placeholder:"From",value:Ca.formatDisplayValue(w,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(yl,{onFocus:()=>{i||d||v||(y(!1),b(!0),O())},readOnly:!0,placeholder:"To",value:Ca.formatDisplayValue(S,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(fl,{id:r,show:m,value:w,format:c,onCancel:_,onChange:e=>{y(!1),b(!0),$(e);h&&h({start:e,end:S})}}),t(fl,{id:r,show:v,value:S,format:c,onCancel:_,onChange:e=>{b(!1),x(e);h&&h({start:w,end:e}),""==w?y(!0):p&&p()}})]}))}))};export{vl as TimeRangePicker};
//# sourceMappingURL=index.js.map
