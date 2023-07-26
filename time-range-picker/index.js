import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{cloneElement as i,useRef as o,useState as a,isValidElement as s,createRef as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import{ArrowRightIcon as m}from"@lifesg/react-icons";import y,{css as v,keyframes as b}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as x}from"react-dom";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{CircleIcon as _}from"@lifesg/react-icons/circle";import{CircleDotIcon as k}from"@lifesg/react-icons/circle-dot";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{SquareIcon as M}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},H=Array.isArray,E="object"==typeof A&&A&&A.Object===Object&&A,P="object"==typeof self&&self&&self.Object===Object&&self,T=E||P||Function("return this")(),I=T.Symbol,C=I,z=Object.prototype,N=z.hasOwnProperty,R=z.toString,j=C?C.toStringTag:void 0;var V=function(e){var t=N.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[j]=n:delete e[j]),i},W=Object.prototype.toString;var L=V,Y=function(e){return W.call(e)},U=I?I.toStringTag:void 0;var q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":U&&U in Object(e)?L(e):Y(e)};var Q=q,Z=function(e){return null!=e&&"object"==typeof e};var G=function(e){return"symbol"==typeof e||Z(e)&&"[object Symbol]"==Q(e)},X=H,J=G,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/;var te=function(e,t){if(X(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!J(e))||(ee.test(e)||!K.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re=q,ie=ne;var oe,ae=function(e){if(!ie(e))return!1;var t=re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=T["__core-js_shared__"],le=(oe=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var ue=function(e){return!!le&&le in e},ce=Function.prototype.toString;var de=ae,he=ue,fe=ne,pe=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ge=/^\[object .+?Constructor\]$/,me=Function.prototype,ye=Object.prototype,ve=me.toString,be=ye.hasOwnProperty,we=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!fe(e)||he(e))&&(de(e)?we:ge).test(pe(e))},Se=function(e,t){return null==e?void 0:e[t]};var xe=function(e,t){var n=Se(e,t);return $e(n)?n:void 0},Fe=xe(Object,"create"),_e=Fe;var ke=function(){this.__data__=_e?_e(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Fe,Oe=Object.prototype.hasOwnProperty;var Be=function(e){var t=this.__data__;if(Me){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Oe.call(t,e)?t[e]:void 0},Ae=Fe,He=Object.prototype.hasOwnProperty;var Ee=Fe;var Pe=ke,Te=De,Ie=Be,Ce=function(e){var t=this.__data__;return Ae?void 0!==t[e]:He.call(t,e)},ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Pe,Ne.prototype.delete=Te,Ne.prototype.get=Ie,Ne.prototype.has=Ce,Ne.prototype.set=ze;var Re=Ne;var je=function(){this.__data__=[],this.size=0};var Ve=function(e,t){return e===t||e!=e&&t!=t};var We=function(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1},Le=We,Ye=Array.prototype.splice;var Ue=We;var qe=We;var Qe=We;var Ze=je,Ge=function(e){var t=this.__data__,n=Le(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ye.call(t,n,1),--this.size,!0)},Xe=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},Je=function(e){return qe(this.__data__,e)>-1},Ke=function(e,t){var n=this.__data__,r=Qe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ze,et.prototype.delete=Ge,et.prototype.get=Xe,et.prototype.has=Je,et.prototype.set=Ke;var tt=et,nt=xe(T,"Map"),rt=Re,it=tt,ot=nt;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var n=e.__data__;return at(t)?n["string"==typeof t?"string":"hash"]:n.map},lt=st;var ut=st;var ct=st;var dt=st;var ht=function(){this.size=0,this.__data__={hash:new rt,map:new(ot||it),string:new rt}},ft=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},pt=function(e){return ut(this,e).get(e)},gt=function(e){return ct(this,e).has(e)},mt=function(e,t){var n=dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function yt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yt.prototype.clear=ht,yt.prototype.delete=ft,yt.prototype.get=pt,yt.prototype.has=gt,yt.prototype.set=mt;var vt=yt;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(bt.Cache||vt),n}bt.Cache=vt;var wt=bt;var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/\\(\\)?/g,xt=function(e){var t=wt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace($t,(function(e,n,r,i){t.push(r?i.replace(St,"$1"):n||e)})),t}));var Ft=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},_t=H,kt=G,Dt=I?I.prototype:void 0,Mt=Dt?Dt.toString:void 0;var Ot=function e(t){if("string"==typeof t)return t;if(_t(t))return Ft(t,e)+"";if(kt(t))return Mt?Mt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Bt=Ot;var At=H,Ht=te,Et=xt,Pt=function(e){return null==e?"":Bt(e)};var Tt=G;var It=function(e,t){return At(e)?e:Ht(e,t)?[e]:Et(Pt(e))},Ct=function(e){if("string"==typeof e||Tt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var zt=function(e,t){for(var n=0,r=(t=It(t,e)).length;null!=e&&n<r;)e=e[Ct(t[n++])];return n&&n==r?e:void 0};var Nt=function(e,t,n){var r=null==e?void 0:zt(e,t);return void 0===r?n:r};const Rt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,jt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Lt=e=>t=>{const n=t.theme,r=jt(Wt,n[Vt.colorScheme]);return n.options&&n.options.color?Rt(r,e,n.options.color):Rt(r,e)},Yt={Brand:{1:Lt("Brand.1"),2:Lt("Brand.2"),3:Lt("Brand.3"),4:Lt("Brand.4"),5:Lt("Brand.5"),6:Lt("Brand.6")},Primary:Lt("Primary"),PrimaryDark:Lt("PrimaryDark"),Secondary:Lt("Secondary"),Accent:{Light:{1:Lt("Accent.Light.1"),2:Lt("Accent.Light.2"),3:Lt("Accent.Light.3"),4:Lt("Accent.Light.4"),5:Lt("Accent.Light.5"),6:Lt("Accent.Light.6")},Dark:{1:Lt("Accent.Dark.1"),2:Lt("Accent.Dark.2"),3:Lt("Accent.Dark.3")}},Neutral:{1:Lt("Neutral.1"),2:Lt("Neutral.2"),3:Lt("Neutral.3"),4:Lt("Neutral.4"),5:Lt("Neutral.5"),6:Lt("Neutral.6"),7:Lt("Neutral.7"),8:Lt("Neutral.8")},Validation:{Green:{Text:Lt("Validation.Green.Text"),Icon:Lt("Validation.Green.Icon"),Border:Lt("Validation.Green.Border"),Background:Lt("Validation.Green.Background")},Orange:{Text:Lt("Validation.Orange.Text"),Icon:Lt("Validation.Orange.Icon"),Border:Lt("Validation.Orange.Border"),Background:Lt("Validation.Orange.Background"),Badge:Lt("Validation.Orange.Badge")},Red:{Text:Lt("Validation.Red.Text"),Icon:Lt("Validation.Red.Icon"),Border:Lt("Validation.Red.Border"),Background:Lt("Validation.Red.Background")},Blue:{Text:Lt("Validation.Blue.Text"),Icon:Lt("Validation.Blue.Icon"),Border:Lt("Validation.Blue.Border"),Background:Lt("Validation.Blue.Background")}},Shadow:{Accent:Lt("Shadow.Accent"),Red:Lt("Shadow.Red"),Elevation:Lt("Shadow.Elevation")}},Ut=e=>`@media screen and (max-width: ${e}px)`,qt=y.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return v`
                ${Ut(e.$minWidthBeforeWrap)} {
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
`,Qt=y.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Zt=y(m)`
    color: ${Yt.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Gt=y.div`
    position: absolute;
    background: ${e=>e.$error?Yt.Validation.Red.Border(e):Yt.Primary(e)};
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
                ${Ut(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,Xt=({children:n,currentActive:r,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=n;return e(qt,{className:o,$minWidthBeforeWrap:a,children:[t(Qt,{"data-id":"range-container-elem1-container",children:s}),t(Zt,{}),t(Qt,{"data-id":"range-container-elem2-container",children:l}),t(Gt,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:a})]})};var Jt=function(e,t){return Jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Jt(e,t)};var Kt=function(){return Kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Kt.apply(this,arguments)};var en="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var tn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},nn="object"==typeof en&&en&&en.Object===Object&&en,rn="object"==typeof self&&self&&self.Object===Object&&self,on=nn||rn||Function("return this")(),an=on,sn=function(){return an.Date.now()},ln=/\s/;var un=function(e){for(var t=e.length;t--&&ln.test(e.charAt(t)););return t},cn=/^\s+/;var dn=function(e){return e?e.slice(0,un(e)+1).replace(cn,""):e},hn=on.Symbol,fn=hn,pn=Object.prototype,gn=pn.hasOwnProperty,mn=pn.toString,yn=fn?fn.toStringTag:void 0;var vn=function(e){var t=gn.call(e,yn),n=e[yn];try{e[yn]=void 0;var r=!0}catch(e){}var i=mn.call(e);return r&&(t?e[yn]=n:delete e[yn]),i},bn=Object.prototype.toString;var wn=vn,$n=function(e){return bn.call(e)},Sn=hn?hn.toStringTag:void 0;var xn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Sn&&Sn in Object(e)?wn(e):$n(e)},Fn=function(e){return null!=e&&"object"==typeof e};var _n=dn,kn=tn,Dn=function(e){return"symbol"==typeof e||Fn(e)&&"[object Symbol]"==xn(e)},Mn=/^[-+]0x[0-9a-f]+$/i,On=/^0b[01]+$/i,Bn=/^0o[0-7]+$/i,An=parseInt;var Hn=tn,En=sn,Pn=function(e){if("number"==typeof e)return e;if(Dn(e))return NaN;if(kn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_n(e);var n=On.test(e);return n||Bn.test(e)?An(e.slice(2),n?2:8):Mn.test(e)?NaN:+e},Tn=Math.max,In=Math.min;var Cn=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=En();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?In(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=En(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Pn(t)||0,Hn(n)&&(c=!!n.leading,o=(d="maxWait"in n)?Tn(Pn(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(En())},y},zn=Cn,Nn=tn;var Rn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),zn(e,t,{leading:r,maxWait:t,trailing:i})},jn=function(e,t,n,r){switch(t){case"debounce":return Cn(e,n,r);case"throttle":return Rn(e,n,r);default:return e}},Vn=function(e){return"function"==typeof e},Wn=function(){return"undefined"==typeof window},Ln=function(e){return e instanceof Element||e instanceof HTMLDocument},Yn=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Vn(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Wn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Wn())return null;if(t)return document.querySelector(t);if(r&&Ln(r))return r;if(n.targetRef&&Ln(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Yn(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Wn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Vn(t)?"renderProp":Vn(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,Wn()||(n.resizeHandler=jn(n.createResizeHandler,i,a,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Jt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Wn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,u={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=o)(u);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return i(e,c)}return i(e,u);case"childArray":return(e=o).map((function(e){return!!e&&i(e,u)}));default:return n.createElement(s,null)}}}(u);var Un=Wn()?c:d;let qn=ur();const Qn=e=>or(e,qn);let Zn=ur();Qn.write=e=>or(e,Zn);let Gn=ur();Qn.onStart=e=>or(e,Gn);let Xn=ur();Qn.onFrame=e=>or(e,Xn);let Jn=ur();Qn.onFinish=e=>or(e,Jn);let Kn=[];Qn.setTimeout=(e,t)=>{let n=Qn.now()+t,r=()=>{let e=Kn.findIndex((e=>e.cancel==r));~e&&Kn.splice(e,1),rr-=~e?1:0},i={time:n,handler:e,cancel:r};return Kn.splice(er(n),0,i),rr+=1,ar(),i};let er=e=>~(~Kn.findIndex((t=>t.time>e))||~Kn.length);Qn.cancel=e=>{Gn.delete(e),Xn.delete(e),Jn.delete(e),qn.delete(e),Zn.delete(e)},Qn.sync=e=>{ir=!0,Qn.batchedUpdates(e),ir=!1},Qn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Qn.onStart(n)}return r.handler=e,r.cancel=()=>{Gn.delete(n),t=null},r};let tr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qn.use=e=>tr=e,Qn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qn.batchedUpdates=e=>e(),Qn.catch=console.error,Qn.frameLoop="always",Qn.advance=()=>{"demand"!==Qn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):lr()};let nr=-1,rr=0,ir=!1;function or(e,t){ir?(t.delete(e),e(0)):(t.add(e),ar())}function ar(){nr<0&&(nr=0,"demand"!==Qn.frameLoop&&tr(sr))}function sr(){~nr&&(tr(sr),Qn.batchedUpdates(lr))}function lr(){let e=nr;nr=Qn.now();let t=er(nr);t&&(cr(Kn.splice(0,t),(e=>e.handler())),rr-=t),rr?(Gn.flush(),qn.flush(e?Math.min(64,nr-e):16.667),Xn.flush(),Zn.flush(),Jn.flush()):nr=-1}function ur(){let e=new Set,t=e;return{add(n){rr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(rr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,rr-=t.size,cr(t,(t=>t(n)&&e.add(t))),rr+=e.size,t=e)}}}function cr(e,t){e.forEach((e=>{try{t(e)}catch(e){Qn.catch(e)}}))}function dr(){}const hr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function fr(e,t){if(hr.arr(e)){if(!hr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const pr=(e,t)=>e.forEach(t);function gr(e,t,n){if(hr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const mr=e=>hr.und(e)?[]:hr.arr(e)?e:[e];function yr(e,t){if(e.size){const n=Array.from(e);e.clear(),pr(n,t)}}const vr=(e,...t)=>yr(e,(e=>e(...t))),br=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let wr,$r,Sr=null,xr=!1,Fr=dr;var _r=Object.freeze({__proto__:null,get createStringInterpolator(){return wr},get to(){return $r},get colors(){return Sr},get skipAnimation(){return xr},get willAdvance(){return Fr},assign:e=>{e.to&&($r=e.to),e.now&&(Qn.now=e.now),void 0!==e.colors&&(Sr=e.colors),null!=e.skipAnimation&&(xr=e.skipAnimation),e.createStringInterpolator&&(wr=e.createStringInterpolator),e.requestAnimationFrame&&Qn.use(e.requestAnimationFrame),e.batchedUpdates&&(Qn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Fr=e.willAdvance),e.frameLoop&&(Qn.frameLoop=e.frameLoop)}});const kr=new Set;let Dr=[],Mr=[],Or=0;const Br={get idle(){return!kr.size&&!Dr.length},start(e){Or>e.priority?(kr.add(e),Qn.onStart(Ar)):(Hr(e),Qn(Pr))},advance:Pr,sort(e){if(Or)Qn.onFrame((()=>Br.sort(e)));else{const t=Dr.indexOf(e);~t&&(Dr.splice(t,1),Er(e))}},clear(){Dr=[],kr.clear()}};function Ar(){kr.forEach(Hr),kr.clear(),Qn(Pr)}function Hr(e){Dr.includes(e)||Er(e)}function Er(e){Dr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Dr,(t=>t.priority>e.priority)),0,e)}function Pr(e){const t=Mr;for(let n=0;n<Dr.length;n++){const r=Dr[n];Or=r.priority,r.idle||(Fr(r),r.advance(e),r.idle||t.push(r))}return Or=0,Mr=Dr,Mr.length=0,Dr=t,Dr.length>0}const Tr="[-+]?\\d*\\.?\\d+",Ir=Tr+"%";function Cr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const zr=new RegExp("rgb"+Cr(Tr,Tr,Tr)),Nr=new RegExp("rgba"+Cr(Tr,Tr,Tr,Tr)),Rr=new RegExp("hsl"+Cr(Tr,Ir,Ir)),jr=new RegExp("hsla"+Cr(Tr,Ir,Ir,Tr)),Vr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Lr=/^#([0-9a-fA-F]{6})$/,Yr=/^#([0-9a-fA-F]{8})$/;function Ur(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Ur(i,r,e+1/3),a=Ur(i,r,e),s=Ur(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Qr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Zr(e){return(parseFloat(e)%360+360)%360/360}function Gr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Xr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Lr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Sr&&void 0!==Sr[e]?Sr[e]:(t=zr.exec(e))?(Qr(t[1])<<24|Qr(t[2])<<16|Qr(t[3])<<8|255)>>>0:(t=Nr.exec(e))?(Qr(t[1])<<24|Qr(t[2])<<16|Qr(t[3])<<8|Gr(t[4]))>>>0:(t=Vr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Yr.exec(e))?parseInt(t[1],16)>>>0:(t=Wr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Rr.exec(e))?(255|qr(Zr(t[1]),Xr(t[2]),Xr(t[3])))>>>0:(t=jr.exec(e))?(qr(Zr(t[1]),Xr(t[2]),Xr(t[3]))|Gr(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Kr=(e,t,n)=>{if(hr.fun(e))return e;if(hr.arr(e))return Kr({range:e,output:t,extrapolate:n});if(hr.str(e.output[0]))return wr(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ei=1.70158,ti=1.525*ei,ni=ei+1,ri=2*Math.PI/3,ii=2*Math.PI/4.5,oi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ni*e*e*e-ei*e*e,easeOutBack:e=>1+ni*Math.pow(e-1,3)+ei*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ti)/2:(Math.pow(2*e-2,2)*((ti+1)*(2*e-2)+ti)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ri),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ri)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ii)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ii)/2+1,easeInBounce:e=>1-oi(1-e),easeOutBounce:oi,easeInOutBounce:e=>e<.5?(1-oi(1-2*e))/2:(1+oi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}const li=Symbol.for("FluidValue.get"),ui=Symbol.for("FluidValue.observers"),ci=e=>Boolean(e&&e[li]),di=e=>e&&e[li]?e[li]():e,hi=e=>e[ui]||null;function fi(e,t){let n=e[ui];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class pi{constructor(e){if(this[li]=void 0,this[ui]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");gi(this,e)}}const gi=(e,t)=>vi(e,li,t);function mi(e,t){if(e[li]){let n=e[ui];n||vi(e,ui,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function yi(e,t){let n=e[ui];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ui]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const vi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),bi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,wi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,$i=new RegExp(`(${bi.source})(%|[a-z]+)`,"i"),Si=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,xi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Fi=e=>{const[t,n]=_i(e);if(!t||br())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&xi.test(n)?Fi(n):n||e},_i=e=>{const t=xi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let ki;const Di=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Mi=e=>{ki||(ki=Sr?new RegExp(`(${Object.keys(Sr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>di(e).replace(xi,Fi).replace(wi,Jr).replace(ki,Jr))),n=t.map((e=>e.match(bi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Kr(si({},e,{output:t}))));return e=>{var n;const i=!$i.test(t[0])&&(null==(n=t.find((e=>$i.test(e))))?void 0:n.replace(bi,""));let o=0;return t[0].replace(bi,(()=>`${r[o++](e)}${i||""}`)).replace(Si,Di)}},Oi="react-spring: ",Bi=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Oi}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ai=Bi(console.warn);const Hi=Bi(console.warn);function Ei(e){return hr.str(e)&&("#"==e[0]||/\d/.test(e)||!br()&&xi.test(e)||e in(Sr||{}))}const Pi=br()?c:d,Ti=()=>{const e=o(!1);return Pi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ii(){const e=a()[1],t=Ti();return()=>{t.current&&e(Math.random())}}const Ci=e=>c(e,zi),zi=[];function Ni(e){const t=o();return c((()=>{t.current=e})),t.current}const Ri=Symbol.for("Animated:node"),ji=e=>e&&e[Ri],Vi=(e,t)=>{return n=e,r=Ri,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Wi=e=>e&&e[Ri]&&e[Ri].getPayload();class Li{constructor(){this.payload=void 0,Vi(this,this)}getPayload(){return this.payload||[]}}class Yi extends Li{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,hr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Yi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return hr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,hr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Ui extends Yi{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Kr({output:[e,e]})}static create(e){return new Ui(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(hr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Kr({output:[this.getValue(),e]})),this._value=0,super.reset()}}const qi={dependencies:null};class Qi extends Li{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return gr(this.source,((n,r)=>{var i;(i=n)&&i[Ri]===i?t[r]=n.getValue(e):ci(n)?t[r]=di(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&pr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return gr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qi.dependencies&&ci(e)&&qi.dependencies.add(e);const t=Wi(e);t&&pr(t,(e=>this.add(e)))}}class Zi extends Qi{constructor(e){super(e)}static create(e){return new Zi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Gi)),!0)}}function Gi(e){return(Ei(e)?Ui:Yi).create(e)}function Xi(e){const t=ji(e);return t?t.constructor:hr.arr(e)?Zi:Ei(e)?Ui:Yi}function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}const Ki=(e,t)=>{const r=!hr.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,a)=>{const s=o(null),l=r&&f((e=>{s.current=function(e,t){e&&(hr.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,d]=function(e,t){const n=new Set;qi.dependencies=n,e.style&&(e=Ji({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Qi(e),qi.dependencies=null,[e,n]}(i,t),h=Ii(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new eo(p,d),m=o();Pi((()=>(m.current=g,pr(d,(e=>mi(e,g))),()=>{m.current&&(pr(m.current.deps,(e=>yi(e,m.current))),Qn.cancel(m.current.update))}))),c(p,[]),Ci((()=>()=>{const e=m.current;pr(e.deps,(t=>yi(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,Ji({},y,{ref:l}))}))};class eo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qn.write(this.update)}}const to=Symbol.for("AnimatedComponent"),no=e=>hr.str(e)?e:e&&hr.str(e.displayName)?e.displayName:hr.fun(e)&&e.name||null;function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function io(e,...t){return hr.fun(e)?e(...t):e}const oo=(e,t)=>!0===e||!!(t&&e&&(hr.fun(e)?e(t):mr(e).includes(t))),ao=(e,t)=>hr.obj(e)?t&&e[t]:e,so=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,lo=e=>e,uo=(e,t=lo)=>{let n=co;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);hr.und(n)||(r[i]=n)}return r},co=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ho={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function fo(e){const t=function(e){const t={};let n=0;if(gr(e,((e,r)=>{ho[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return gr(e,((e,r)=>r in t||(n[r]=e))),n}return ro({},e)}function po(e){return e=di(e),hr.arr(e)?e.map(po):Ei(e)?_r.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function go(e){return hr.fun(e)||hr.arr(e)&&hr.obj(e[0])}const mo=ro({},{tension:170,friction:26},{mass:1,damping:1,easing:ai.linear,clamp:!1});class yo{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,mo)}}function vo(e,t){if(hr.und(t.decay)){const n=!hr.und(t.tension)||!hr.und(t.friction);!n&&hr.und(t.frequency)&&hr.und(t.damping)&&hr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const bo=[];class wo{constructor(){this.changed=!1,this.values=bo,this.toValues=null,this.fromValues=bo,this.to=void 0,this.from=void 0,this.config=new yo,this.immediate=!1}}function $o(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=oo(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{hr.und(n.pause)||(i.paused=oo(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||oo(e,t)),u=io(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-Qn.now()}function f(){u>0&&!_r.skipAnimation?(i.delayed=!0,c=Qn.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(ro({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const So=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?_o(e.get()):t.every((e=>e.noop))?xo(e.get()):Fo(e.get(),t.every((e=>e.finished))),xo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Fo=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),_o=e=>({value:e,cancelled:!0,finished:!1});function ko(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=uo(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&_o(r)||i!==n.asyncId&&Fo(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Mo,a=new Oo;return(async()=>{if(_r.skipAnimation)throw Do(n),a.result=Fo(r,!1),d(a),a;f(o);const s=hr.obj(e)?ro({},e):ro({},t,{to:e});s.parentId=i,gr(u,((e,t)=>{hr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(_r.skipAnimation)return Do(n),Fo(r,!1);try{let t;t=hr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=Fo(r.get(),!0,!1)}catch(e){if(e instanceof Mo)g=e.result;else{if(!(e instanceof Oo))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return hr.fun(a)&&Qn.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Do(e,t){yr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Mo extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Oo extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Bo=e=>e instanceof Ho;let Ao=1;class Ho extends pi{constructor(...e){super(...e),this.id=Ao++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ji(this);return e&&e.getValue()}to(...e){return _r.to(this,e)}interpolate(...e){return Ai(`${Oi}The "interpolate" function is deprecated in v9 (use "to" instead)`),_r.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){fi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Br.sort(this),fi(this,{type:"priority",parent:this,priority:e})}}const Eo=Symbol.for("SpringPhase"),Po=e=>(1&e[Eo])>0,To=e=>(2&e[Eo])>0,Io=e=>(4&e[Eo])>0,Co=(e,t)=>t?e[Eo]|=3:e[Eo]&=-3,zo=(e,t)=>t?e[Eo]|=4:e[Eo]&=-5;class No extends Ho{constructor(e,t){if(super(),this.key=void 0,this.animation=new wo,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!hr.und(e)||!hr.und(t)){const n=hr.obj(e)?ro({},e):ro({},t,{from:e});hr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(To(this)||this._state.asyncTo)||Io(this)}get goal(){return di(this.animation.to)}get velocity(){const e=ji(this);return e instanceof Yi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Po(this)}get isAnimating(){return To(this)}get isPaused(){return Io(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Wi(r.to);!a&&ci(r.to)&&(o=mr(di(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==Ui?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=hr.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(hr.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!hr.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ji(this),l=s.getValue();if(t){const e=di(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Qn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(To(this)){const{to:e,config:t}=this.animation;Qn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return hr.und(e)?(n=this.queue||[],this.queue=[]):n=[hr.obj(e)?e:ro({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>So(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Do(this._state,e&&this._lastCallId),Qn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=hr.obj(n)?n[t]:n,(null==n||go(n))&&(n=void 0),r=hr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Po(this)||(e.reverse&&([n,r]=[r,n]),r=di(r),hr.und(r)?ji(this)||this._set(n):this._set(r)),i}_update(e,t){let n=ro({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,uo(n,((e,t)=>/^on/.test(t)?ao(e,r):e))),Uo(this,n,"onProps"),qo(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return $o(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Io(this)||(zo(this,!0),vr(a.pauseQueue),qo(this,"onPause",Fo(this,Ro(this,this.animation.to)),this))},resume:()=>{Io(this)&&(zo(this,!1),To(this)&&this._resume(),vr(a.resumeQueue),qo(this,"onResume",Fo(this,Ro(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=jo(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(_o(this));const r=!hr.und(e.to),i=!hr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(_o(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!hr.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!fr(d,u);h&&(s.from=d),d=di(d);const f=!fr(c,l);f&&this._focus(c);const p=go(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(vo(n=ro({},n),t),t=ro({},n,t)),vo(e,t),Object.assign(e,t);for(const t in mo)null==e[t]&&(e[t]=mo[t]);let{mass:r,frequency:i,damping:o}=e;hr.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,io(t.config,o),t.config!==a.config?io(a.config,o):void 0);let v=ji(this);if(!v||hr.und(c))return n(Fo(this,!0));const b=hr.und(t.reset)?i&&!t.default:!hr.und(d)&&oo(t.reset,o),w=b?d:this.get(),$=po(c),S=hr.num($)||hr.arr($)||Ei($),x=!p&&(!S||oo(a.immediate||t.immediate,o));if(f){const e=Xi(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const F=v.constructor;let _=ci(c),k=!1;if(!_){const e=b||!Po(this)&&h;(f||e)&&(k=fr(po(w),$),_=!k),(fr(s.immediate,x)||x)&&fr(g.decay,m)&&fr(g.velocity,y)||(_=!0)}if(k&&To(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||ci(l))&&(s.values=v.getPayload(),s.toValues=ci(c)?null:F==Ui?[1]:mr($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;pr(Yo,(e=>Uo(this,t,e)));const r=Fo(this,Ro(this,l));vr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Qn.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?io(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(ko(t.to,t,this._state,this)):_?this._start():To(this)&&!f?this._pendingCalls.add(n):n(xo(w))}_focus(e){const t=this.animation;e!==t.to&&(hi(this)&&this._detach(),t.to=e,hi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ci(t)&&(mi(t,this),Bo(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ci(e)&&yi(e,this)}_set(e,t=!0){const n=di(e);if(!hr.und(n)){const e=ji(this);if(!e||!fr(n,e.getValue())){const r=Xi(n);e&&e.constructor==r?e.setValue(n):Vi(this,r.create(n)),e&&Qn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ji(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qo(this,"onStart",Fo(this,Ro(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),io(this.animation.onChange,e,this)),io(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ji(this).reset(di(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),To(this)||(Co(this,!0),Io(this)||this._resume())}_resume(){_r.skipAnimation?this.finish():Br.start(this)}_stop(e,t){if(To(this)){Co(this,!1);const n=this.animation;pr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),fi(this,{type:"idle",parent:this});const r=t?_o(this.get()):Fo(this.get(),Ro(this,null!=e?e:n.to));vr(this._pendingCalls,r),n.changed&&(n.changed=!1,qo(this,"onRest",r,this))}}}function Ro(e,t){const n=po(t);return fr(po(e.get()),n)}function jo(e,t=e.loop,n=e.to){let r=io(t);if(r){const i=!0!==r&&fo(r),o=(i||e).reverse,a=!i||i.reset;return Vo(ro({},e,{loop:t,default:!1,pause:void 0,to:!o||go(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Vo(e){const{to:t,from:n}=e=fo(e),r=new Set;return hr.obj(t)&&Lo(t,r),hr.obj(n)&&Lo(n,r),e.keys=r.size?Array.from(r):null,e}function Wo(e){const t=Vo(e);return hr.und(t.default)&&(t.default=uo(t)),t}function Lo(e,t){gr(e,((e,n)=>null!=e&&t.add(n)))}const Yo=["onStart","onRest","onChange","onPause","onResume"];function Uo(e,t,n){e.animation[n]=t[n]!==so(t,n)?ao(t[n],e.key):void 0}function qo(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Qo=["onStart","onChange","onRest"];let Zo=1;class Go{constructor(e,t){this.id=Zo++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(ro({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];hr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Vo(e)),this}start(e){let{queue:t}=this;return e?t=mr(e).map(Vo):this.queue=[],this._flush?this._flush(this,t):(ra(this,t),Xo(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;pr(mr(t),(t=>n[t].stop(!!e)))}else Do(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(hr.und(e))this.start({pause:!0});else{const t=this.springs;pr(mr(e),(e=>t[e].pause()))}return this}resume(e){if(hr.und(e))this.start({pause:!1});else{const t=this.springs;pr(mr(e),(e=>t[e].resume()))}return this}each(e){gr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,yr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&yr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,yr(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qn.onFrame(this._onFrame)}}function Xo(e,t){return Promise.all(t.map((t=>Jo(e,t)))).then((t=>So(e,t)))}async function Jo(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=hr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=hr.arr(i)||hr.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):pr(Qo,(n=>{const r=t[n];if(hr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,vr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===so(t,"cancel");(c||f&&d.asyncId)&&h.push($o(++e._lastAsyncId,{props:t,state:d,actions:{pause:dr,resume:dr,start(t,n){f?(Do(d,e._lastAsyncId),n(_o(e))):(t.onRest=s,n(ko(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=So(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=jo(t,a,i);if(n)return ra(e,[n]),Jo(e,n,!0)}return l&&Qn.batchedUpdates((()=>l(p,e,e.item))),p}function Ko(e,t){const n=ro({},e.springs);return t&&pr(mr(t),(e=>{hr.und(e.keys)&&(e=Vo(e)),hr.obj(e.to)||(e=ro({},e,{to:void 0})),na(n,e,(e=>ta(e)))})),ea(e,n),n}function ea(e,t){gr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,mi(t,e))}))}function ta(e,t){const n=new No;return n.key=e,t&&mi(n,t),n}function na(e,t,n){t.keys&&pr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ra(e,t){pr(t,(t=>{na(e.springs,t,(t=>ta(t,e)))}))}const ia=["children"],oa=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,ia);const i=p(aa),s=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:u}=aa;return n.createElement(u,{value:r},t)},aa=(sa=oa,la={},Object.assign(sa,n.createContext(la)),sa.Provider._context=sa,sa.Consumer._context=sa,sa);var sa,la;oa.Provider=aa.Provider,oa.Consumer=aa.Consumer;const ua=()=>{const e=[],t=function(t){Hi(`${Oi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return pr(e,((e,i)=>{if(hr.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return pr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return pr(e,(e=>e.resume(...arguments))),this},t.set=function(t){pr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return pr(e,((e,r)=>{if(hr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return pr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return pr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return hr.fun(e)?e(n,t):e};return t._getProps=n,t};function ca(e,t){const n=hr.fun(e),[[r],i]=function(e,t,n){const r=hr.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?ua():void 0),[]),a=o(0),s=Ii(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Ko(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Xo(e,t):new Promise((r=>{ea(e,n),l.queue.push((()=>{r(Xo(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=Ni(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Go(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=Wo(n))}}g((()=>{pr(u.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=u.current.map(((e,t)=>Ko(e,c[t]))),m=p(oa),y=Ni(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Pi((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],pr(e,(e=>e()))),pr(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ci((()=>()=>{pr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>ro({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let da;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(da||(da={}));class ha extends Ho{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Kr(...t);const n=this._get(),r=Xi(n);Vi(this,r.create(n))}advance(e){const t=this._get();fr(t,this.get())||(ji(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&pa(this._active)&&ga(this)}_get(){const e=hr.arr(this.source)?this.source.map(di):mr(di(this.source));return this.calc(...e)}_start(){this.idle&&!pa(this._active)&&(this.idle=!1,pr(Wi(this),(e=>{e.done=!1})),_r.skipAnimation?(Qn.batchedUpdates((()=>this.advance())),ga(this)):Br.start(this))}_attach(){let e=1;pr(mr(this.source),(t=>{ci(t)&&mi(t,this),Bo(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){pr(mr(this.source),(e=>{ci(e)&&yi(e,this)})),this._active.clear(),ga(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=mr(this.source).reduce(((e,t)=>Math.max(e,(Bo(t)?t.priority:0)+1)),0))}}function fa(e){return!1!==e.idle}function pa(e){return!e.size||Array.from(e).every(fa)}function ga(e){e.idle||(e.idle=!0,pr(Wi(e),(e=>{e.done=!0})),fi(e,{type:"idle",parent:e}))}function ma(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}_r.assign({createStringInterpolator:Mi,to:(e,t)=>new ha(e,t)});const ya=["style","children","scrollTop","scrollLeft","viewBox"],va=/^--/;function ba(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||va.test(e)||$a.hasOwnProperty(e)&&$a[e]?(""+t).trim():t+"px"}const wa={};let $a={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Sa=["Webkit","Ms","Moz","O"];$a=Object.keys($a).reduce(((e,t)=>(Sa.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),$a);const xa=["x","y","z"],Fa=/^(matrix|translate|scale|rotate|skew)/,_a=/^(translate)/,ka=/^(rotate|skew)/,Da=(e,t)=>hr.num(e)&&0!==e?e+t:e,Ma=(e,t)=>hr.arr(e)?e.every((e=>Ma(e,t))):hr.num(e)?e===t:parseFloat(e)===t;class Oa extends Qi{constructor(e){let{x:t,y:n,z:r}=e,i=ma(e,xa);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Da(e,"px"))).join(",")})`,Ma(e,0)]))),gr(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Fa.test(t)){if(delete i[t],hr.und(e))return;const n=_a.test(t)?"px":ka.test(t)?"deg":"";o.push(mr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Da(i,n)})`,Ma(i,0)]:e=>[`${t}(${e.map((e=>Da(e,n))).join(",")})`,Ma(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Ba(o,a)),super(i)}}class Ba extends pi{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return pr(this.inputs,((n,r)=>{const i=di(n[0]),[o,a]=this.transforms[r](hr.arr(i)?i:n.map(di));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&pr(this.inputs,(e=>pr(e,(e=>ci(e)&&mi(e,this)))))}observerRemoved(e){0==e&&pr(this.inputs,(e=>pr(e,(e=>ci(e)&&yi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),fi(this,e)}}const Aa=["scrollTop","scrollLeft"];_r.assign({batchedUpdates:x,createStringInterpolator:Mi,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ha=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Qi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=no(e)||"Anonymous";return(e=hr.str(e)?o[e]||(o[e]=Ki(e,i)):e[to]||(e[to]=Ki(e,i))).displayName=`Animated(${t})`,e};return gr(e,((t,n)=>{hr.arr(e)&&(n=no(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,u=ma(r,ya),c=Object.values(u),d=Object.keys(u).map((t=>n||e.hasAttribute(t)?t:wa[t]||(wa[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=ba(t,i[t]);va.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Oa(e),getComponentProps:e=>ma(e,Aa)}),Ea=Ha.animated;var Pa,Ta,Ia;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Pa||(Pa={})),function(e){e.AM="AM",e.PM="PM"}(Ta||(Ta={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Ta.AM};if(!t)return n;try{if("24hr"===e){const r=Na(t,e);n.minute=Pa.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Ta.AM,n.hour=0===i?"12":Pa.padValue(i.toString())):(n.period=Ta.PM,n.hour=12===i?i.toString():Pa.padValue((i-12).toString()))}else{const r=Na(t,e);n.hour=Pa.padValue(r.hour),n.minute=Pa.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Ta.AM:Ta.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Pa.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Pa.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Pa.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Pa.padValue(r.toString()):13===r?Pa.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Ta.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Pa.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Na(e,t),r=Pa.padValue(n.hour);let i=`${r}:${Pa.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}}}(Ia||(Ia={}));const Ca=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},za=e=>{const t=parseInt(e);return t>=0&&t<=59},Na=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Ca(n[0],t)||!za(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ca(n[0],t)||!za(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Ra={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ja=e=>Object.keys(Ra).reduce(((t,n)=>{const r=Ra[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Va=ja("max-width"),Wa=(ja("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),La=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ya=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Yt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${La} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ua=y(Ya)`
    animation-delay: -0.45s;
`,qa=y(Ya)`
    animation-delay: -0.3s;
`,Qa=y(Ya)`
    animation-delay: -0.15s;
`,Za={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ga={collections:{base:{D1:{fontFamily:Za.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Za.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Za.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Za.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Za.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Za.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Za.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Za.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Za.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Za.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Za.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Za.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Za.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Za.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xa=e=>t=>{const n=t.theme,r=jt(Ga,n[Vt.textStyleScheme]);return n.options&&n.options.textStyle?Rt(r,e,n.options.textStyle):Rt(r,e)},Ja={D1:{fontFamily:Xa("D1.fontFamily"),fontSize:Xa("D1.fontSize"),fontWeight:Xa("D1.fontWeight"),lineHeight:Xa("D1.lineHeight"),letterSpacing:Xa("D1.letterSpacing")},D2:{fontFamily:Xa("D2.fontFamily"),fontSize:Xa("D2.fontSize"),fontWeight:Xa("D2.fontWeight"),lineHeight:Xa("D2.lineHeight"),letterSpacing:Xa("D2.letterSpacing")},D3:{fontFamily:Xa("D3.fontFamily"),fontSize:Xa("D3.fontSize"),fontWeight:Xa("D3.fontWeight"),lineHeight:Xa("D3.lineHeight"),letterSpacing:Xa("D3.letterSpacing")},D4:{fontFamily:Xa("D4.fontFamily"),fontSize:Xa("D4.fontSize"),fontWeight:Xa("D4.fontWeight"),lineHeight:Xa("D4.lineHeight"),letterSpacing:Xa("D4.letterSpacing")},DBody:{fontFamily:Xa("DBody.fontFamily"),fontSize:Xa("DBody.fontSize"),fontWeight:Xa("DBody.fontWeight"),lineHeight:Xa("DBody.lineHeight"),letterSpacing:Xa("DBody.letterSpacing")},H1:{fontFamily:Xa("H1.fontFamily"),fontSize:Xa("H1.fontSize"),fontWeight:Xa("H1.fontWeight"),lineHeight:Xa("H1.lineHeight"),letterSpacing:Xa("H1.letterSpacing")},H2:{fontFamily:Xa("H2.fontFamily"),fontSize:Xa("H2.fontSize"),fontWeight:Xa("H2.fontWeight"),lineHeight:Xa("H2.lineHeight"),letterSpacing:Xa("H2.letterSpacing")},H3:{fontFamily:Xa("H3.fontFamily"),fontSize:Xa("H3.fontSize"),fontWeight:Xa("H3.fontWeight"),lineHeight:Xa("H3.lineHeight"),letterSpacing:Xa("H3.letterSpacing")},H4:{fontFamily:Xa("H4.fontFamily"),fontSize:Xa("H4.fontSize"),fontWeight:Xa("H4.fontWeight"),lineHeight:Xa("H4.lineHeight"),letterSpacing:Xa("H4.letterSpacing")},H5:{fontFamily:Xa("H5.fontFamily"),fontSize:Xa("H5.fontSize"),fontWeight:Xa("H5.fontWeight"),lineHeight:Xa("H5.lineHeight"),letterSpacing:Xa("H5.letterSpacing")},H6:{fontFamily:Xa("H6.fontFamily"),fontSize:Xa("H6.fontSize"),fontWeight:Xa("H6.fontWeight"),lineHeight:Xa("H6.lineHeight"),letterSpacing:Xa("H6.letterSpacing")},Body:{fontFamily:Xa("Body.fontFamily"),fontSize:Xa("Body.fontSize"),fontWeight:Xa("Body.fontWeight"),lineHeight:Xa("Body.lineHeight"),letterSpacing:Xa("Body.letterSpacing")},BodySmall:{fontFamily:Xa("BodySmall.fontFamily"),fontSize:Xa("BodySmall.fontSize"),fontWeight:Xa("BodySmall.fontWeight"),lineHeight:Xa("BodySmall.lineHeight"),letterSpacing:Xa("BodySmall.letterSpacing")},XSmall:{fontFamily:Xa("XSmall.fontFamily"),fontSize:Xa("XSmall.fontSize"),fontWeight:Xa("XSmall.fontWeight"),lineHeight:Xa("XSmall.lineHeight"),letterSpacing:Xa("XSmall.letterSpacing")}},Ka=e=>{switch(e){case 700:case"bold":return Za.Bold;case 600:case"semibold":return Za.Semibold;case 300:case"light":return Za.Light;case 400:case"regular":return Za.Regular;default:return""}},es=(e,t)=>n=>{const r=Ja[e].fontFamily(n),i=Ja[e].fontWeight(n);return Object.values(Za).includes(r)?v`
                font-family: ${Ka(t)||Ka(i)||r};
                font-weight: normal !important;
            `:v`
            font-family: ${r};
            font-weight: ${(ts(t)||i)??"normal"};
        `},ts=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ns=es,rs=(e,t,n=!1)=>r=>{const i=Ja[e],o=i.fontSize(r);return v`
            ${es(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},is=(e=!1,t=!1)=>t?v`
            display: block;
        `:e?v`
            display: inline;
        `:v`
            display: block;
        `;var os;!function(e){e.D1=y.h1`
        ${e=>v`
                ${rs("D1",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${rs("D2",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${rs("D3",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${rs("D4",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${rs("DBody",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${rs("H1",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${rs("H2",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${rs("H3",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${rs("H4",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${rs("H5",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${rs("H6",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${rs("Body",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${rs("BodySmall",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${rs("XSmall",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${is(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ls({...e,textStyle:"Body"}),Small:e=>ls({...e,textStyle:"BodySmall"})}}(os||(os={}));const as=y.a`
    ${e=>v`
            ${rs(e.textStyle,e.weight)}
            color: ${Yt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Yt.Secondary};

                svg {
                    color: ${Yt.Secondary};
                }
            }
        `}
`,ss=y(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ls=({external:n=!1,children:r,...i})=>e(as,{...i,children:[r,n&&t(ss,{})]});var us;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(us||(us={}));const cs=y.button`
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
                    background-color: ${Yt.Neutral[8](e)};
                    border: 1px solid ${Yt.Primary(e)};

                    span {
                        color: ${Yt.Primary(e)};
                    }
                `;case"light":return v`
                    background-color: ${Yt.Neutral[8](e)};
                    border: 1px solid ${Yt.Neutral[5](e)};

                    span {
                        color: ${Yt.Primary(e)};
                    }
                `;case"disabled":return v`
                    background-color: ${Yt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Yt.Neutral[3](e)};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Yt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Yt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${Yt.Primary(e)};
                    border: 1px solid transparent;

                    ${Va.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Yt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${rs("H5","semibold")}
                    }

                    ${Va.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${rs("H4","semibold")}
                    }

                    ${Va.mobileS} {
                        height: auto;
                    }
                `}
`,ds=y((({color:n,className:r,size:i=18})=>e(Wa,{className:r,$size:i,$color:n,children:[t(Ya,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ua,{id:"inner2",$size:i-2,$borderWidth:2}),t(qa,{id:"inner3",$size:i-2,$borderWidth:2}),t(Qa,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Yt.Primary(e);break;case"disabled":t=Yt.Neutral[3](e);break;default:t=Yt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,hs={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=n,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(cs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&t(ds,{...u}),t("span",{children:i})]})})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=n,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(cs,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&t(ds,{...u,size:16}),t("span",{children:i})]})}))},fs=y.div`
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
                        border-color: ${Yt.Validation.Red.Icon};
                        background: ${Yt.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Red};
                        }
                    `:e.$disabled?v`
                        border-color: transparent;
                    `:v`
                        border-color: transparent;

                        :hover {
                            background: ${Yt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?v`
                        background: ${Yt.Neutral[6]};
                        border-color: ${Yt.Neutral[5]};
                    `:e.$disabled&&e.$selected?v`
                        background: ${Yt.Neutral[6]};
                        border-color: ${Yt.Neutral[4]};
                    `:e.$error?v`
                        background: ${Yt.Neutral[8]};
                        border-color: ${Yt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Red};
                        }
                    `:e.$selected?v`
                        background: ${Yt.Accent.Light[5]};
                        border-color: ${Yt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Accent};
                        }
                    `:v`
                        background: ${Yt.Neutral[8]};
                        border-color: ${Yt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Accent};
                            border-color: ${Yt.Accent.Light[1]};
                        }
                    `}
`,ps=y.input`
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
`,gs=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,ms=y.label`
    ${e=>e.$selected&&!e.$indicator?v`
                ${rs("H4","semibold")}
            `:v`
                ${rs("H4","regular")}
            `}

    color: ${Yt.Neutral[1]};

    ${e=>e.$disabled?v`
                color: ${Yt.Neutral[3]};
            `:e.$selected?v`
                color: ${Yt.Primary};
            `:void 0}
`,ys=y.div`
    ${rs("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${ns("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?v`
                color: ${Yt.Neutral[3]};
            `:e.$selected?v`
                color: ${Yt.Primary};
            `:v`
                color: ${Yt.Neutral[1]};
            `}
`,vs=y.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?v`
                    color: ${Yt.Primary};
                `:v`
                    color: ${Yt.Neutral[4]};
                `};
    }
`,bs=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?O:M,{});break;case"radio":o=t(n?k:_,{});break;case"tick":o=t(B,{});break;case"cross":o=t(D,{});break;default:o=null}return t(vs,{className:i,$active:n,disabled:r,children:o})};var ws={exports:{}};ws.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var $s,Ss,xs=ws.exports,Fs={exports:{}},_s=Fs.exports=($s={year:0,month:1,day:2,hour:3,minute:4,second:5},Ss={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ss[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ss[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=$s[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),ks={exports:{}};ks.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof _},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},F=v;F.l=S,F.i=$,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,c=F.p(e),f=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=F.p(c),g=function(e){var t=x(f);return F.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return F.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:F.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=F.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=F.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:F.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=_.prototype;return x.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Ds=ks.exports,Ms={exports:{}};Ms.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Os=Ms.exports,Bs={exports:{}};Bs.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var As=Bs.exports,Hs={exports:{}};Hs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Es,Ps=Hs.exports;Ds.extend(Os),Ds.extend(As),Ds.extend(Ps),Ds.extend(xs),Ds.extend(_s),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ds(t).startOf("week");return Ts(n).map((e=>Is(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Is(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ds(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ds(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ds(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Es||(Es={}));const Ts=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Is=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Cs=[1,3,5,7,8,10,12],zs=[4,6,9,11];var Ns,Rs;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Cs.includes(o)?Math.min(i,31).toString():zs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ds(e,n);return Ds(t,n).diff(r,"minute")}}(Ns||(Ns={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Rs||(Rs={}));const js=y.button`
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
                background-color: ${Yt.Neutral[7]};
            `}
    }
`,Vs=r.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>t(js,{ref:a,$outline:r,$highlight:n,type:i,...o,children:e}))),Ws={collections:{base:{InputBoxShadow:v`
        inset 0 0 6px 1px ${Yt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 6px 1px ${Yt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Yt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:v`
        inset 0 0 6px 1px ${Yt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 6px 1px ${Yt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Yt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Ls=e=>t=>{const n=t.theme,r=jt(Ws,n[Vt.designTokenScheme]);return n.options?.designToken?Rt(r,e,n.options.designToken):Rt(r,e)},Ys=Ls("InputBoxShadow"),Us=Ls("InputErrorBoxShadow"),qs=(Ls("ElevationBoxShadow"),Ls("Table.Header"),Ls("Table.Cell.Primary"),Ls("Table.Cell.Secondary"),Ls("Table.Cell.Selected"),Ls("Table.Cell.Hover"),y.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Yt.Neutral[5]};
    border-radius: 4px;
    background: ${Yt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Yt.Accent.Light[1]};
        box-shadow: ${Ys};
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
                background: ${Yt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Yt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?v`
                border: 1px solid ${Yt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Yt.Validation.Red.Border};
                    box-shadow: ${Us};
                }
            `:void 0}
`),Qs=y.input`
    ${rs("Body","regular")}
    color: ${Yt.Neutral[1]};
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
        color: ${Yt.Neutral[3]};
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
`,Zs=y(Ea.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Yt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Va.mobileS} {
        max-width: 100%;
    }
`,Gs=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Xs=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Va.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Js=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Va.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Ks=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Va.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,el=y.div`
    display: flex;
    gap: 0.5rem;

    ${Va.tablet} {
        flex-direction: column;
    }

    ${Va.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,tl=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Va.mobileS} {
        width: 6rem;
    }
`,nl=y(Vs)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Yt.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Yt.Primary};
    }
`,rl=y(os.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Va.tablet} {
        margin: 0;
    }

    ${Va.mobileS} {
        margin: 0 0.25rem;
    }
`,il=y(Qs)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Yt.Neutral[5]};
    background: ${Yt.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Yt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Yt.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Va.mobileS} {
        width: 100%;
    }
`,ol=y((({type:n="checkbox",indicator:r,checked:i,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(i),[w]=a(Rs.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=o();c((()=>{b(i)}),[i]);return e(fs,{$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m,children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(bs,{type:e,active:v,disabled:d})})(),t(ps,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(gs,{children:[t(ms,{htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label",children:l}),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(ys,{$disabled:d,$selected:v,children:e})})()]})]})}))`
    min-width: 5rem;
    flex: 1;
`,al=y(hs.Small)`
    width: 7rem;

    ${Va.mobileL} {
        flex: 1;
    }

    ${Va.mobileS} {
        width: 100%;
    }
`;var sl,ll,ul;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(sl||(sl={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(ll||(ll={})),function(e){e.AM="am",e.PM="pm"}(ul||(ul={}));const cl=({id:n,value:r,show:i,format:s,onChange:l,onCancel:u})=>{const d=Ia.getTimeValues(s,r),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=o(),S=o(),x=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=f?f:y,b=o(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return Un((function(){if(!Wn()){var e=Yn(g,S,c,h);b.current=jn((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Wn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,p,v.current]),Kt({ref:v},$)}();c((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=Ia.getTimeValues(s,r);p(e),m(t),v(n)}}),[i,r,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},_=f((e=>{switch(e.currentTarget.name){case sl.MINUTE_UP:m(Ia.updateMinutes(g,"add"));break;case sl.MINUTE_DOWN:m(Ia.updateMinutes(g,"minus"));break;case sl.HOUR_UP:p(Ia.updateHours(h,"add"));break;case sl.HOUR_DOWN:p(Ia.updateHours(h,"minus"))}}),[h,g]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case ll.HOUR:t.length<=2&&p(t);break;case ll.MINUTE:t.length<=2&&m(t)}},M=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case ll.HOUR:{const n=t>23||t<0?d.hour:Ia.convertHourTo12HourFormat(e.target.value);p(n);break}case ll.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Pa.padValue(n));break}}},O=e=>{switch(e.target.name){case ul.AM:v(Ta.AM);break;case ul.PM:v(Ta.PM)}},B=e=>n?`${n}-${e}`:e,A=ca({height:i?x.height+32:0});return t(Zs,{"data-testid":"animated-dropdown-wrapper",style:A,children:e(Gs,{ref:x.ref,"data-testid":B("timepicker-dropdown"),inert:i?void 0:"",children:[e(Xs,{children:[e(Ks,{children:[e(tl,{children:[t(nl,{"aria-label":"increase hour",name:sl.HOUR_UP,tabIndex:-1,onClick:_,"data-testid":B("hour-increment-button"),children:t($,{})}),t(il,{"aria-label":"hour",type:"number",name:ll.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:k,onChange:D,onBlur:M,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")}),t(nl,{"aria-label":"decrease hour",name:sl.HOUR_DOWN,tabIndex:-1,onClick:_,"data-testid":B("hour-decrement-button"),children:t(w,{})})]}),t(rl,{children:":"}),e(tl,{children:[t(nl,{"aria-label":"increase minute",name:sl.MINUTE_UP,tabIndex:-1,onClick:_,"data-testid":B("minute-increment-button"),children:t($,{})}),t(il,{"aria-label":"minute",type:"number",name:ll.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:D,onBlur:M,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")}),t(nl,{"aria-label":"decrease minute",name:sl.MINUTE_DOWN,tabIndex:-1,onClick:_,"data-testid":B("minute-decrement-button"),children:t(w,{})})]})]}),e(el,{children:[t(ol,{checked:y===Ta.AM,name:ul.AM,type:"radio",onChange:O,"data-testid":B("am-toggle"),"aria-label":"AM",children:"AM"}),t(ol,{checked:y===Ta.PM,name:ul.PM,type:"radio",onChange:O,"data-testid":B("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Js,{children:[t(al,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":B("cancel-button"),children:"Cancel"}),t(al,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Ia.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":B("confirm-button"),children:"Done"})]})]})})},dl=(e,t,n="window",r)=>{const i=o();c((()=>{i.current=t}),[t]),c((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])},hl=y.div`
    position: relative;
`,fl=y(qs)`
    height: 3rem;
    gap: 0.5rem;
`,pl=y(Qs)`
    display: block;
    width: 100%;
    flex: 1;
`,gl=({id:n,disabled:r=!1,error:i,value:s,format:l="24hr",readOnly:u,onChange:d,onFocus:h,onBlur:f,...p})=>{const[g,m]=a(!1),[y,v]=a(!1),[b,w]=a(""),[$,S]=a(""),x=o();c((()=>{s&&(w(s.start),S(s.end))}),[]),dl("mousedown",(function(e){r||D(e)}),"document"),dl("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const F=()=>{k()},_=()=>{g||y||h&&h()},k=()=>{m(!1),v(!1),f&&f()},D=e=>{x&&!x.current.contains(e.target)&&(y||g)&&k()};return t(hl,{ref:x,id:n,...p,children:e(fl,{$disabled:r,$error:i,$readOnly:u,children:[e(Xt,{error:i,currentActive:g?"start":y?"end":"none",children:[t(pl,{onFocus:()=>{r||u||g||(v(!1),m(!0),_())},readOnly:!0,placeholder:"From",value:Ia.formatDisplayValue(b,l),disabled:r,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(pl,{onFocus:()=>{r||u||y||(m(!1),v(!0),_())},readOnly:!0,placeholder:"To",value:Ia.formatDisplayValue($,l),disabled:r,"data-testid":p["data-testid"]?`${p["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),t(cl,{id:n,show:g,value:b,format:l,onCancel:F,onChange:e=>{m(!1),v(!0),w(e);d&&d({start:e,end:$})}}),t(cl,{id:n,show:y,value:$,format:l,onCancel:F,onChange:e=>{v(!1),S(e);d&&d({start:b,end:e}),""==b?m(!0):f&&f()}})]})})};export{gl as TimeRangePicker};
//# sourceMappingURL=index.js.map
