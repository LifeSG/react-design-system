import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{cloneElement as i,useRef as a,useState as o,isValidElement as s,createRef as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import{ArrowRightIcon as m}from"@lifesg/react-icons";import y,{css as v,keyframes as b}from"styled-components";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as x}from"react-dom";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as _}from"@lifesg/react-icons/circle-dot";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{SquareIcon as k}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";function E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},H=Array.isArray,C="object"==typeof A&&A&&A.Object===Object&&A,P="object"==typeof self&&self&&self.Object===Object&&self,I=C||P||Function("return this")(),T=I.Symbol,z=T,j=Object.prototype,N=j.hasOwnProperty,R=j.toString,V=z?z.toStringTag:void 0;var L=function(e){var t=N.call(e,V),n=e[V];try{e[V]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[V]=n:delete e[V]),i},W=Object.prototype.toString;var Y=L,U=function(e){return W.call(e)},q=T?T.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?Y(e):U(e)};var Z=Q,G=function(e){return null!=e&&"object"==typeof e};var X=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Z(e)},J=H,K=X,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var ne=function(e,t){if(J(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=Q,ae=re;var oe,se=function(e){if(!ae(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},le=I["__core-js_shared__"],ue=(oe=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var ce=function(e){return!!ue&&ue in e},de=Function.prototype.toString;var he=se,fe=ce,pe=re,ge=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ye=Function.prototype,ve=Object.prototype,be=ye.toString,we=ve.hasOwnProperty,$e=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!pe(e)||fe(e))&&(he(e)?$e:me).test(ge(e))},xe=function(e,t){return null==e?void 0:e[t]};var Fe=function(e,t){var n=xe(e,t);return Se(n)?n:void 0},De=Fe(Object,"create"),_e=De;var Be=function(){this.__data__=_e?_e(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=De,Me=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(Oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},Ae=De,He=Object.prototype.hasOwnProperty;var Ce=De;var Pe=Be,Ie=ke,Te=Ee,ze=function(e){var t=this.__data__;return Ae?void 0!==t[e]:He.call(t,e)},je=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ce&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Pe,Ne.prototype.delete=Ie,Ne.prototype.get=Te,Ne.prototype.has=ze,Ne.prototype.set=je;var Re=Ne;var Ve=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var We=function(e,t){for(var n=e.length;n--;)if(Le(e[n][0],t))return n;return-1},Ye=We,Ue=Array.prototype.splice;var qe=We;var Qe=We;var Ze=We;var Ge=Ve,Xe=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ue.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=qe(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=Fe(I,"Map"),it=Re,at=nt,ot=rt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},ut=lt;var ct=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},pt=function(e){var t=ut(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ct(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(wt.Cache||bt),n}wt.Cache=bt;var $t=wt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,Ft=function(e){var t=$t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(xt,"$1"):n||e)})),t}));var Dt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},_t=H,Bt=X,kt=T?T.prototype:void 0,Ot=kt?kt.toString:void 0;var Mt=function e(t){if("string"==typeof t)return t;if(_t(t))return Dt(t,e)+"";if(Bt(t))return Ot?Ot.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Et=Mt;var At=H,Ht=ne,Ct=Ft,Pt=function(e){return null==e?"":Et(e)};var It=X;var Tt=function(e,t){return At(e)?e:Ht(e,t)?[e]:Ct(Pt(e))},zt=function(e){if("string"==typeof e||It(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var jt=function(e,t){for(var n=0,r=(t=Tt(t,e)).length;null!=e&&n<r;)e=e[zt(t[n++])];return n&&n==r?e:void 0};var Nt=function(e,t,n){var r=null==e?void 0:jt(e,t);return void 0===r?n:r};const Rt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,Vt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Lt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Lt||(Lt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const n=t.theme,r=Vt(Wt,n[Lt.colorScheme]);return n.options&&n.options.color?Rt(r,e,n.options.color):Rt(r,e)},Ut={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},qt=y.div`
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
`,Qt=y.div`
    width: 100%; // Force next flex item to break to next line
`,Zt=y.div`
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

    ${e=>{if(e.$wrap)return v`
                display: none;
            `}}
`,Jt=({children:n,currentActive:r,error:i,className:a,wrap:o})=>{const[s,l]=n;return e(qt,Object.assign({className:a,$wrap:o},{children:[t(Zt,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Gt,{}),o&&t(Qt,{}),t(Zt,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Xt,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:o})]}))};var Kt=function(e,t){return Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Kt(e,t)};var en=function(){return en=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},en.apply(this,arguments)};var tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var nn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},rn="object"==typeof tn&&tn&&tn.Object===Object&&tn,an="object"==typeof self&&self&&self.Object===Object&&self,on=rn||an||Function("return this")(),sn=on,ln=function(){return sn.Date.now()},un=/\s/;var cn=function(e){for(var t=e.length;t--&&un.test(e.charAt(t)););return t},dn=/^\s+/;var hn=function(e){return e?e.slice(0,cn(e)+1).replace(dn,""):e},fn=on.Symbol,pn=fn,gn=Object.prototype,mn=gn.hasOwnProperty,yn=gn.toString,vn=pn?pn.toStringTag:void 0;var bn=function(e){var t=mn.call(e,vn),n=e[vn];try{e[vn]=void 0;var r=!0}catch(e){}var i=yn.call(e);return r&&(t?e[vn]=n:delete e[vn]),i},wn=Object.prototype.toString;var $n=bn,Sn=function(e){return wn.call(e)},xn=fn?fn.toStringTag:void 0;var Fn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xn&&xn in Object(e)?$n(e):Sn(e)},Dn=function(e){return null!=e&&"object"==typeof e};var _n=hn,Bn=nn,kn=function(e){return"symbol"==typeof e||Dn(e)&&"[object Symbol]"==Fn(e)},On=/^[-+]0x[0-9a-f]+$/i,Mn=/^0b[01]+$/i,En=/^0o[0-7]+$/i,An=parseInt;var Hn=nn,Cn=ln,Pn=function(e){if("number"==typeof e)return e;if(kn(e))return NaN;if(Bn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Bn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_n(e);var n=Mn.test(e);return n||En.test(e)?An(e.slice(2),n?2:8):On.test(e)?NaN:+e},In=Math.max,Tn=Math.min;var zn=function(e,t,n){var r,i,a,o,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,u=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=a}function g(){var e=Cn();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Tn(n,a-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=Cn(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Pn(t)||0,Hn(n)&&(c=!!n.leading,a=(d="maxWait"in n)?In(Pn(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Cn())},y},jn=zn,Nn=nn;var Rn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),jn(e,t,{leading:r,maxWait:t,trailing:i})},Vn=function(e,t,n,r){switch(t){case"debounce":return zn(e,n,r);case"throttle":return Rn(e,n,r);default:return e}},Ln=function(e){return"function"==typeof e},Wn=function(){return"undefined"==typeof window},Yn=function(e){return e instanceof Element||e instanceof HTMLDocument},Un=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Ln(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Wn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Wn())return null;if(t)return document.querySelector(t);if(r&&Yn(r))return r;if(n.targetRef&&Yn(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Un(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Wn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ln(t)?"renderProp":Ln(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,Wn()||(n.resizeHandler=Vn(n.createResizeHandler,i,o,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Kt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Wn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,a=t.children,o=t.nodeType,s=void 0===o?"div":o,l=this.state,u={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=a)(u);case"child":if((e=a).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return i(e,c)}return i(e,u);case"childArray":return(e=a).map((function(e){return!!e&&i(e,u)}));default:return n.createElement(s,null)}}}(u);var qn=Wn()?c:d;var Qn=Object.defineProperty,Zn={};((e,t)=>{for(var n in t)Qn(e,n,{get:t[n],enumerable:!0})})(Zn,{assign:()=>kr,colors:()=>Dr,createStringInterpolator:()=>$r,skipAnimation:()=>_r,to:()=>Sr,willAdvance:()=>Br});var Gn=hr(),Xn=e=>lr(e,Gn),Jn=hr();Xn.write=e=>lr(e,Jn);var Kn=hr();Xn.onStart=e=>lr(e,Kn);var er=hr();Xn.onFrame=e=>lr(e,er);var tr=hr();Xn.onFinish=e=>lr(e,tr);var nr=[];Xn.setTimeout=(e,t)=>{const n=Xn.now()+t,r=()=>{const e=nr.findIndex((e=>e.cancel==r));~e&&nr.splice(e,1),or-=~e?1:0},i={time:n,handler:e,cancel:r};return nr.splice(rr(n),0,i),or+=1,ur(),i};var rr=e=>~(~nr.findIndex((t=>t.time>e))||~nr.length);Xn.cancel=e=>{Kn.delete(e),er.delete(e),tr.delete(e),Gn.delete(e),Jn.delete(e)},Xn.sync=e=>{sr=!0,Xn.batchedUpdates(e),sr=!1},Xn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Xn.onStart(n)}return r.handler=e,r.cancel=()=>{Kn.delete(n),t=null},r};var ir="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Xn.use=e=>ir=e,Xn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Xn.batchedUpdates=e=>e(),Xn.catch=console.error,Xn.frameLoop="always",Xn.advance=()=>{"demand"!==Xn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):dr()};var ar=-1,or=0,sr=!1;function lr(e,t){sr?(t.delete(e),e(0)):(t.add(e),ur())}function ur(){ar<0&&(ar=0,"demand"!==Xn.frameLoop&&ir(cr))}function cr(){~ar&&(ir(cr),Xn.batchedUpdates(dr))}function dr(){const e=ar;ar=Xn.now();const t=rr(ar);t&&(fr(nr.splice(0,t),(e=>e.handler())),or-=t),or?(Kn.flush(),Gn.flush(e?Math.min(64,ar-e):16.667),er.flush(),Jn.flush(),tr.flush()):ar=-1}function hr(){let e=new Set,t=e;return{add(n){or+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(or-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,or-=t.size,fr(t,(t=>t(n)&&e.add(t))),or+=e.size,t=e)}}}function fr(e,t){e.forEach((e=>{try{t(e)}catch(e){Xn.catch(e)}}))}function pr(){}var gr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function mr(e,t){if(gr.arr(e)){if(!gr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var yr=(e,t)=>e.forEach(t);function vr(e,t,n){if(gr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var br=e=>gr.und(e)?[]:gr.arr(e)?e:[e];function wr(e,t){if(e.size){const n=Array.from(e);e.clear(),yr(n,t)}}var $r,Sr,xr=(e,...t)=>wr(e,(e=>e(...t))),Fr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Dr=null,_r=!1,Br=pr,kr=e=>{e.to&&(Sr=e.to),e.now&&(Xn.now=e.now),void 0!==e.colors&&(Dr=e.colors),null!=e.skipAnimation&&(_r=e.skipAnimation),e.createStringInterpolator&&($r=e.createStringInterpolator),e.requestAnimationFrame&&Xn.use(e.requestAnimationFrame),e.batchedUpdates&&(Xn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Br=e.willAdvance),e.frameLoop&&(Xn.frameLoop=e.frameLoop)},Or=new Set,Mr=[],Er=[],Ar=0,Hr={get idle(){return!Or.size&&!Mr.length},start(e){Ar>e.priority?(Or.add(e),Xn.onStart(Cr)):(Pr(e),Xn(Tr))},advance:Tr,sort(e){if(Ar)Xn.onFrame((()=>Hr.sort(e)));else{const t=Mr.indexOf(e);~t&&(Mr.splice(t,1),Ir(e))}},clear(){Mr=[],Or.clear()}};function Cr(){Or.forEach(Pr),Or.clear(),Xn(Tr)}function Pr(e){Mr.includes(e)||Ir(e)}function Ir(e){Mr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Mr,(t=>t.priority>e.priority)),0,e)}function Tr(e){const t=Er;for(let n=0;n<Mr.length;n++){const r=Mr[n];Ar=r.priority,r.idle||(Br(r),r.advance(e),r.idle||t.push(r))}return Ar=0,(Er=Mr).length=0,(Mr=t).length>0}var zr="[-+]?\\d*\\.?\\d+",jr=zr+"%";function Nr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Rr=new RegExp("rgb"+Nr(zr,zr,zr)),Vr=new RegExp("rgba"+Nr(zr,zr,zr,zr)),Lr=new RegExp("hsl"+Nr(zr,jr,jr)),Wr=new RegExp("hsla"+Nr(zr,jr,jr,zr)),Yr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ur=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qr=/^#([0-9a-fA-F]{6})$/,Qr=/^#([0-9a-fA-F]{8})$/;function Zr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Gr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Zr(i,r,e+1/3),o=Zr(i,r,e),s=Zr(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Xr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jr(e){return(parseFloat(e)%360+360)%360/360}function Kr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ei(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ti(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Dr&&void 0!==Dr[e]?Dr[e]:(t=Rr.exec(e))?(Xr(t[1])<<24|Xr(t[2])<<16|Xr(t[3])<<8|255)>>>0:(t=Vr.exec(e))?(Xr(t[1])<<24|Xr(t[2])<<16|Xr(t[3])<<8|Kr(t[4]))>>>0:(t=Yr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Qr.exec(e))?parseInt(t[1],16)>>>0:(t=Ur.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Lr.exec(e))?(255|Gr(Jr(t[1]),ei(t[2]),ei(t[3])))>>>0:(t=Wr.exec(e))?(Gr(Jr(t[1]),ei(t[2]),ei(t[3]))|Kr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ni=(e,t,n)=>{if(gr.fun(e))return e;if(gr.arr(e))return ni({range:e,output:t,extrapolate:n});if(gr.str(e.output[0]))return $r(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=a(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var ri=1.70158,ii=1.525*ri,ai=ri+1,oi=2*Math.PI/3,si=2*Math.PI/4.5,li=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ui={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ai*e*e*e-ri*e*e,easeOutBack:e=>1+ai*Math.pow(e-1,3)+ri*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ii)/2:(Math.pow(2*e-2,2)*((ii+1)*(2*e-2)+ii)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*oi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*oi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*si)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*si)/2+1,easeInBounce:e=>1-li(1-e),easeOutBounce:li,easeInOutBounce:e=>e<.5?(1-li(1-2*e))/2:(1+li(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},ci=Symbol.for("FluidValue.get"),di=Symbol.for("FluidValue.observers"),hi=e=>Boolean(e&&e[ci]),fi=e=>e&&e[ci]?e[ci]():e,pi=e=>e[di]||null;function gi(e,t){const n=e[di];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var mi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yi(this,e)}},yi=(e,t)=>$i(e,ci,t);function vi(e,t){if(e[ci]){let n=e[di];n||$i(e,di,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function bi(e,t){const n=e[di];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[di]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var wi,$i=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Si=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,xi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Fi=new RegExp(`(${Si.source})(%|[a-z]+)`,"i"),Di=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,_i=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Bi=e=>{const[t,n]=ki(e);if(!t||Fr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&_i.test(n)?Bi(n):n||e},ki=e=>{const t=_i.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Oi=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Mi=e=>{wi||(wi=Dr?new RegExp(`(${Object.keys(Dr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>fi(e).replace(_i,Bi).replace(xi,ti).replace(wi,ti))),n=t.map((e=>e.match(Si).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ni({...e,output:t})));return e=>{const n=!Fi.test(t[0])&&t.find((e=>Fi.test(e)))?.replace(Si,"");let i=0;return t[0].replace(Si,(()=>`${r[i++](e)}${n||""}`)).replace(Di,Oi)}},Ei="react-spring: ",Ai=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ei}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Hi=Ai(console.warn);var Ci=Ai(console.warn);function Pi(e){return gr.str(e)&&("#"==e[0]||/\d/.test(e)||!Fr()&&_i.test(e)||e in(Dr||{}))}var Ii=Fr()?c:d,Ti=()=>{const e=a(!1);return Ii((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function zi(){const e=o()[1],t=Ti();return()=>{t.current&&e(Math.random())}}var ji=e=>c(e,Ni),Ni=[];function Ri(e){const t=a();return c((()=>{t.current=e})),t.current}var Vi=Symbol.for("Animated:node"),Li=e=>e&&e[Vi],Wi=(e,t)=>{return n=e,r=Vi,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Yi=e=>e&&e[Vi]&&e[Vi].getPayload(),Ui=class{constructor(){Wi(this,this)}getPayload(){return this.payload||[]}},qi=class extends Ui{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,gr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new qi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return gr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,gr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Qi=class extends qi{constructor(e){super(0),this._string=null,this._toString=ni({output:[e,e]})}static create(e){return new Qi(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(gr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ni({output:[this.getValue(),e]})),this._value=0,super.reset()}},Zi={dependencies:null},Gi=class extends Ui{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return vr(this.source,((n,r)=>{var i;(i=n)&&i[Vi]===i?t[r]=n.getValue(e):hi(n)?t[r]=fi(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&yr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return vr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Zi.dependencies&&hi(e)&&Zi.dependencies.add(e);const t=Yi(e);t&&yr(t,(e=>this.add(e)))}},Xi=class extends Gi{constructor(e){super(e)}static create(e){return new Xi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ji)),!0)}};function Ji(e){return(Pi(e)?Qi:qi).create(e)}function Ki(e){const t=Li(e);return t?t.constructor:gr.arr(e)?Xi:Pi(e)?Qi:qi}var ea=(e,t)=>{const r=!gr.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,o)=>{const s=a(null),l=r&&f((e=>{s.current=function(e,t){e&&(gr.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,d]=function(e,t){const n=new Set;Zi.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Gi(e),Zi.dependencies=null,[e,n]}(i,t),h=zi(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new ta(p,d),m=a();Ii((()=>(m.current=g,yr(d,(e=>vi(e,g))),()=>{m.current&&(yr(m.current.deps,(e=>bi(e,m.current))),Xn.cancel(m.current.update))}))),c(p,[]),ji((()=>()=>{const e=m.current;yr(e.deps,(t=>bi(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,{...y,ref:l})}))},ta=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Xn.write(this.update)}};var na=Symbol.for("AnimatedComponent"),ra=e=>gr.str(e)?e:e&&gr.str(e.displayName)?e.displayName:gr.fun(e)&&e.name||null;function ia(e,...t){return gr.fun(e)?e(...t):e}var aa=(e,t)=>!0===e||!!(t&&e&&(gr.fun(e)?e(t):br(e).includes(t))),oa=(e,t)=>gr.obj(e)?t&&e[t]:e,sa=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,la=e=>e,ua=(e,t=la)=>{let n=ca;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);gr.und(n)||(r[i]=n)}return r},ca=["config","onProps","onStart","onChange","onPause","onResume","onRest"],da={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ha(e){const t=function(e){const t={};let n=0;if(vr(e,((e,r)=>{da[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return vr(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function fa(e){return e=fi(e),gr.arr(e)?e.map(fa):Pi(e)?Zn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function pa(e){return gr.fun(e)||gr.arr(e)&&gr.obj(e[0])}var ga={tension:170,friction:26,mass:1,damping:1,easing:ui.linear,clamp:!1},ma=class{constructor(){this.velocity=0,Object.assign(this,ga)}};function ya(e,t){if(gr.und(t.decay)){const n=!gr.und(t.tension)||!gr.und(t.friction);!n&&gr.und(t.frequency)&&gr.und(t.damping)&&gr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var va=[],ba=class{constructor(){this.changed=!1,this.values=va,this.toValues=null,this.fromValues=va,this.config=new ma,this.immediate=!1}};function wa(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,u,c=aa(n.cancel??r?.cancel,t);if(c)f();else{gr.und(n.pause)||(i.paused=aa(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||aa(e,t)),l=ia(n.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-Xn.now()}function h(){l>0&&!Zn.skipAnimation?(i.delayed=!0,u=Xn.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{a.start({...n,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var $a=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Fa(e.get()):t.every((e=>e.noop))?Sa(e.get()):xa(e.get(),t.every((e=>e.finished))),Sa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),xa=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Fa=e=>({value:e,cancelled:!0,finished:!1});function Da(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=ua(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Fa(r)||i!==n.asyncId&&xa(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new Ba,o=new ka;return(async()=>{if(Zn.skipAnimation)throw _a(n),o.result=xa(r,!1),d(o),o;f(a);const s=gr.obj(e)?{...e}:{...t,to:e};s.parentId=i,vr(u,((e,t)=>{gr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Zn.skipAnimation)return _a(n),xa(r,!1);try{let t;t=gr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=xa(r.get(),!0,!1)}catch(e){if(e instanceof Ba)g=e.result;else{if(!(e instanceof ka))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return gr.fun(o)&&Xn.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function _a(e,t){wr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ba=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},ka=class extends Error{constructor(){super("SkipAnimationSignal")}},Oa=e=>e instanceof Ea,Ma=1,Ea=class extends mi{constructor(){super(...arguments),this.id=Ma++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Li(this);return e&&e.getValue()}to(...e){return Zn.to(this,e)}interpolate(...e){return Hi(`${Ei}The "interpolate" function is deprecated in v9 (use "to" instead)`),Zn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){gi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Hr.sort(this),gi(this,{type:"priority",parent:this,priority:e})}},Aa=Symbol.for("SpringPhase"),Ha=e=>(1&e[Aa])>0,Ca=e=>(2&e[Aa])>0,Pa=e=>(4&e[Aa])>0,Ia=(e,t)=>t?e[Aa]|=3:e[Aa]&=-3,Ta=(e,t)=>t?e[Aa]|=4:e[Aa]&=-5,za=class extends Ea{constructor(e,t){if(super(),this.animation=new ba,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!gr.und(e)||!gr.und(t)){const n=gr.obj(e)?{...e}:{...t,from:e};gr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ca(this)||this._state.asyncTo)||Pa(this)}get goal(){return fi(this.animation.to)}get velocity(){const e=Li(this);return e instanceof qi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ha(this)}get isAnimating(){return Ca(this)}get isPaused(){return Pa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=Yi(r.to);!o&&hi(r.to)&&(i=br(fi(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==Qi?1:o?o[l].lastPosition:i[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=gr.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(gr.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,l=!gr.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(o=-o*r,d=u));o+=(1e-6*-a.tension*(d-u)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+a.easing(r)*(u-n),o=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(n=!0)}));const s=Li(this),l=s.getValue();if(t){const e=fi(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Xn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ca(this)){const{to:e,config:t}=this.animation;Xn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return gr.und(e)?(n=this.queue||[],this.queue=[]):n=[gr.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>$a(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),_a(this._state,e&&this._lastCallId),Xn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=gr.obj(n)?n[t]:n,(null==n||pa(n))&&(n=void 0),r=gr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ha(this)||(e.reverse&&([n,r]=[r,n]),r=fi(r),gr.und(r)?Li(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ua(e,((e,t)=>/^on/.test(t)?oa(e,n):e))),Ya(this,e,"onProps"),Ua(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return wa(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Pa(this)||(Ta(this,!0),xr(a.pauseQueue),Ua(this,"onPause",xa(this,ja(this,this.animation.to)),this))},resume:()=>{Pa(this)&&(Ta(this,!1),Ca(this)&&this._resume(),xr(a.resumeQueue),Ua(this,"onResume",xa(this,ja(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Na(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Fa(this));const r=!gr.und(e.to),i=!gr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Fa(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!gr.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!mr(d,u);h&&(s.from=d),d=fi(d);const f=!mr(c,l);f&&this._focus(c);const p=pa(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(ya(n={...n},t),t={...n,...t}),ya(e,t),Object.assign(e,t);for(const t in ga)null==e[t]&&(e[t]=ga[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;gr.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(g,ia(t.config,a),t.config!==o.config?ia(o.config,a):void 0);let v=Li(this);if(!v||gr.und(c))return n(xa(this,!0));const b=gr.und(t.reset)?i&&!t.default:!gr.und(d)&&aa(t.reset,a),w=b?d:this.get(),$=fa(c),S=gr.num($)||gr.arr($)||Pi($),x=!p&&(!S||aa(o.immediate||t.immediate,a));if(f){const e=Ki(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const F=v.constructor;let D=hi(c),_=!1;if(!D){const e=b||!Ha(this)&&h;(f||e)&&(_=mr(fa(w),$),D=!_),(mr(s.immediate,x)||x)&&mr(g.decay,m)&&mr(g.velocity,y)||(D=!0)}if(_&&Ca(this)&&(s.changed&&!b?D=!0:D||this._stop(l)),!p&&((D||hi(l))&&(s.values=v.getPayload(),s.toValues=hi(c)?null:F==Qi?[1]:br($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),D)){const{onRest:e}=s;yr(Wa,(e=>Ya(this,t,e)));const r=xa(this,ja(this,l));xr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Xn.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?ia(o.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(Da(t.to,t,this._state,this)):D?this._start():Ca(this)&&!f?this._pendingCalls.add(n):n(Sa(w))}_focus(e){const t=this.animation;e!==t.to&&(pi(this)&&this._detach(),t.to=e,pi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;hi(t)&&(vi(t,this),Oa(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;hi(e)&&bi(e,this)}_set(e,t=!0){const n=fi(e);if(!gr.und(n)){const e=Li(this);if(!e||!mr(n,e.getValue())){const r=Ki(n);e&&e.constructor==r?e.setValue(n):Wi(this,r.create(n)),e&&Xn.batchedUpdates((()=>{this._onChange(n,t)}))}}return Li(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ua(this,"onStart",xa(this,ja(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ia(this.animation.onChange,e,this)),ia(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Li(this).reset(fi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ca(this)||(Ia(this,!0),Pa(this)||this._resume())}_resume(){Zn.skipAnimation?this.finish():Hr.start(this)}_stop(e,t){if(Ca(this)){Ia(this,!1);const n=this.animation;yr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),gi(this,{type:"idle",parent:this});const r=t?Fa(this.get()):xa(this.get(),ja(this,e??n.to));xr(this._pendingCalls,r),n.changed&&(n.changed=!1,Ua(this,"onRest",r,this))}}};function ja(e,t){const n=fa(t);return mr(fa(e.get()),n)}function Na(e,t=e.loop,n=e.to){const r=ia(t);if(r){const i=!0!==r&&ha(r),a=(i||e).reverse,o=!i||i.reset;return Ra({...e,loop:t,default:!1,pause:void 0,to:!a||pa(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Ra(e){const{to:t,from:n}=e=ha(e),r=new Set;return gr.obj(t)&&La(t,r),gr.obj(n)&&La(n,r),e.keys=r.size?Array.from(r):null,e}function Va(e){const t=Ra(e);return gr.und(t.default)&&(t.default=ua(t)),t}function La(e,t){vr(e,((e,n)=>null!=e&&t.add(n)))}var Wa=["onStart","onRest","onChange","onPause","onResume"];function Ya(e,t,n){e.animation[n]=t[n]!==sa(t,n)?oa(t[n],e.key):void 0}function Ua(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var qa=["onStart","onChange","onRest"],Qa=1,Za=class{constructor(e,t){this.id=Qa++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];gr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ra(e)),this}start(e){let{queue:t}=this;return e?t=br(e).map(Ra):this.queue=[],this._flush?this._flush(this,t):(no(this,t),Ga(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;yr(br(t),(t=>n[t].stop(!!e)))}else _a(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(gr.und(e))this.start({pause:!0});else{const t=this.springs;yr(br(e),(e=>t[e].pause()))}return this}resume(e){if(gr.und(e))this.start({pause:!1});else{const t=this.springs;yr(br(e),(e=>t[e].resume()))}return this}each(e){vr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,wr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&wr(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,wr(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Xn.onFrame(this._onFrame)}};function Ga(e,t){return Promise.all(t.map((t=>Xa(e,t)))).then((t=>$a(e,t)))}async function Xa(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,u=gr.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=gr.arr(i)||gr.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):yr(qa,(n=>{const r=t[n];if(gr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,xr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===sa(t,"cancel");(c||f&&d.asyncId)&&h.push(wa(++e._lastAsyncId,{props:t,state:d,actions:{pause:pr,resume:pr,start(t,n){f?(_a(d,e._lastAsyncId),n(Fa(e))):(t.onRest=s,n(Da(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=$a(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=Na(t,o,i);if(n)return no(e,[n]),Xa(e,n,!0)}return l&&Xn.batchedUpdates((()=>l(p,e,e.item))),p}function Ja(e,t){const n={...e.springs};return t&&yr(br(t),(e=>{gr.und(e.keys)&&(e=Ra(e)),gr.obj(e.to)||(e={...e,to:void 0}),to(n,e,(e=>eo(e)))})),Ka(e,n),n}function Ka(e,t){vr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,vi(t,e))}))}function eo(e,t){const n=new za;return n.key=e,t&&vi(n,t),n}function to(e,t,n){t.keys&&yr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function no(e,t){yr(t,(t=>{to(e.springs,t,(t=>eo(t,e)))}))}var ro,io,ao=({children:e,...t})=>{const r=p(oo),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=oo;return n.createElement(l,{value:t},e)},oo=(ro=ao,io={},Object.assign(ro,n.createContext(io)),ro.Provider._context=ro,ro.Consumer._context=ro,ro);ao.Provider=oo.Provider,ao.Consumer=oo.Consumer;var so=()=>{const e=[],t=function(t){Ci(`${Ei}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return yr(e,((e,i)=>{if(gr.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return yr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return yr(e,(e=>e.resume(...arguments))),this},t.set=function(t){yr(e,((e,n)=>{const r=gr.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return yr(e,((e,r)=>{if(gr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return yr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return yr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return gr.fun(e)?e(n,t):e};return t._getProps=n,t};function lo(e,t){const n=gr.fun(e),[[r],i]=function(e,t,n){const r=gr.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?so():void 0),[]),o=a(0),s=zi(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Ja(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ga(e,t):new Promise((r=>{Ka(e,n),l.queue.push((()=>{r(Ga(e,t))})),s()}))}})),[]),u=a([...l.ctrls]),c=[],d=Ri(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Za(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=Va(n))}}g((()=>{yr(u.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=u.current.map(((e,t)=>Ja(e,c[t]))),m=p(ao),y=Ri(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ii((()=>{o.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],yr(e,(e=>e()))),yr(u.current,((e,t)=>{i?.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ji((()=>()=>{yr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var uo=class extends Ea{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ni(...t);const n=this._get(),r=Ki(n);Wi(this,r.create(n))}advance(e){const t=this._get();mr(t,this.get())||(Li(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ho(this._active)&&fo(this)}_get(){const e=gr.arr(this.source)?this.source.map(fi):br(fi(this.source));return this.calc(...e)}_start(){this.idle&&!ho(this._active)&&(this.idle=!1,yr(Yi(this),(e=>{e.done=!1})),Zn.skipAnimation?(Xn.batchedUpdates((()=>this.advance())),fo(this)):Hr.start(this))}_attach(){let e=1;yr(br(this.source),(t=>{hi(t)&&vi(t,this),Oa(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){yr(br(this.source),(e=>{hi(e)&&bi(e,this)})),this._active.clear(),fo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=br(this.source).reduce(((e,t)=>Math.max(e,(Oa(t)?t.priority:0)+1)),0))}};function co(e){return!1!==e.idle}function ho(e){return!e.size||Array.from(e).every(co)}function fo(e){e.idle||(e.idle=!0,yr(Yi(e),(e=>{e.done=!0})),gi(e,{type:"idle",parent:e}))}Zn.assign({createStringInterpolator:Mi,to:(e,t)=>new uo(e,t)});var po=/^--/;function go(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||po.test(e)||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}var mo={};var yo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vo=["Webkit","Ms","Moz","O"];yo=Object.keys(yo).reduce(((e,t)=>(vo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),yo);var bo=/^(matrix|translate|scale|rotate|skew)/,wo=/^(translate)/,$o=/^(rotate|skew)/,So=(e,t)=>gr.num(e)&&0!==e?e+t:e,xo=(e,t)=>gr.arr(e)?e.every((e=>xo(e,t))):gr.num(e)?e===t:parseFloat(e)===t,Fo=class extends Gi{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>So(e,"px"))).join(",")})`,xo(e,0)]))),vr(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(bo.test(t)){if(delete r[t],gr.und(e))return;const n=wo.test(t)?"px":$o.test(t)?"deg":"";i.push(br(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${So(i,n)})`,xo(i,0)]:e=>[`${t}(${e.map((e=>So(e,n))).join(",")})`,xo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Do(i,a)),super(r)}},Do=class extends mi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return yr(this.inputs,((n,r)=>{const i=fi(n[0]),[a,o]=this.transforms[r](gr.arr(i)?i:n.map(fi));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&yr(this.inputs,(e=>yr(e,(e=>hi(e)&&vi(e,this)))))}observerRemoved(e){0==e&&yr(this.inputs,(e=>yr(e,(e=>hi(e)&&bi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),gi(this,e)}};Zn.assign({batchedUpdates:x,createStringInterpolator:Mi,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var _o,Bo,ko,Oo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Gi(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=ra(e)||"Anonymous";return(e=gr.str(e)?a[e]||(a[e]=ea(e,i)):e[na]||(e[na]=ea(e,i))).displayName=`Animated(${t})`,e};return vr(e,((t,n)=>{gr.arr(e)&&(n=ra(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:mo[t]||(mo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=go(t,r[t]);po.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Fo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Mo=Oo.animated;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(_o||(_o={})),function(e){e.AM="AM",e.PM="PM"}(Bo||(Bo={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Bo.AM};if(!t)return n;try{if("24hr"===e){const r=Ho(t,e);n.minute=_o.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Bo.AM,n.hour=0===i?"12":_o.padValue(i.toString())):(n.period=Bo.PM,n.hour=12===i?i.toString():_o.padValue((i-12).toString()))}else{const r=Ho(t,e);n.hour=_o.padValue(r.hour),n.minute=_o.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Bo.AM:Bo.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_o.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return _o.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_o.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?_o.padValue(r.toString()):13===r?_o.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Bo.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return _o.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Ho(e,t),r=_o.padValue(n.hour);let i=`${r}:${_o.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(ko||(ko={}));const Eo=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Ao=e=>{const t=parseInt(e);return t>=0&&t<=59},Ho=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!Eo(n[0],t)||!Ao(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Eo(n[0],t)||!Ao(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Co={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Po=e=>Object.keys(Co).reduce(((t,n)=>{const r=Co[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Io=Po("max-width"),To=(Po("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),zo=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,jo=y.div`
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
    animation: ${zo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,No=y(jo)`
    animation-delay: -0.45s;
`,Ro=y(jo)`
    animation-delay: -0.3s;
`,Vo=y(jo)`
    animation-delay: -0.15s;
`,Lo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Wo={collections:{base:{D1:{fontFamily:Lo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Yo=e=>t=>{const n=t.theme,r=Vt(Wo,n[Lt.textStyleScheme]);return n.options&&n.options.textStyle?Rt(r,e,n.options.textStyle):Rt(r,e)},Uo={D1:{fontFamily:Yo("D1.fontFamily"),fontSize:Yo("D1.fontSize"),fontWeight:Yo("D1.fontWeight"),lineHeight:Yo("D1.lineHeight"),letterSpacing:Yo("D1.letterSpacing")},D2:{fontFamily:Yo("D2.fontFamily"),fontSize:Yo("D2.fontSize"),fontWeight:Yo("D2.fontWeight"),lineHeight:Yo("D2.lineHeight"),letterSpacing:Yo("D2.letterSpacing")},D3:{fontFamily:Yo("D3.fontFamily"),fontSize:Yo("D3.fontSize"),fontWeight:Yo("D3.fontWeight"),lineHeight:Yo("D3.lineHeight"),letterSpacing:Yo("D3.letterSpacing")},D4:{fontFamily:Yo("D4.fontFamily"),fontSize:Yo("D4.fontSize"),fontWeight:Yo("D4.fontWeight"),lineHeight:Yo("D4.lineHeight"),letterSpacing:Yo("D4.letterSpacing")},DBody:{fontFamily:Yo("DBody.fontFamily"),fontSize:Yo("DBody.fontSize"),fontWeight:Yo("DBody.fontWeight"),lineHeight:Yo("DBody.lineHeight"),letterSpacing:Yo("DBody.letterSpacing")},H1:{fontFamily:Yo("H1.fontFamily"),fontSize:Yo("H1.fontSize"),fontWeight:Yo("H1.fontWeight"),lineHeight:Yo("H1.lineHeight"),letterSpacing:Yo("H1.letterSpacing")},H2:{fontFamily:Yo("H2.fontFamily"),fontSize:Yo("H2.fontSize"),fontWeight:Yo("H2.fontWeight"),lineHeight:Yo("H2.lineHeight"),letterSpacing:Yo("H2.letterSpacing")},H3:{fontFamily:Yo("H3.fontFamily"),fontSize:Yo("H3.fontSize"),fontWeight:Yo("H3.fontWeight"),lineHeight:Yo("H3.lineHeight"),letterSpacing:Yo("H3.letterSpacing")},H4:{fontFamily:Yo("H4.fontFamily"),fontSize:Yo("H4.fontSize"),fontWeight:Yo("H4.fontWeight"),lineHeight:Yo("H4.lineHeight"),letterSpacing:Yo("H4.letterSpacing")},H5:{fontFamily:Yo("H5.fontFamily"),fontSize:Yo("H5.fontSize"),fontWeight:Yo("H5.fontWeight"),lineHeight:Yo("H5.lineHeight"),letterSpacing:Yo("H5.letterSpacing")},H6:{fontFamily:Yo("H6.fontFamily"),fontSize:Yo("H6.fontSize"),fontWeight:Yo("H6.fontWeight"),lineHeight:Yo("H6.lineHeight"),letterSpacing:Yo("H6.letterSpacing")},Body:{fontFamily:Yo("Body.fontFamily"),fontSize:Yo("Body.fontSize"),fontWeight:Yo("Body.fontWeight"),lineHeight:Yo("Body.lineHeight"),letterSpacing:Yo("Body.letterSpacing")},BodySmall:{fontFamily:Yo("BodySmall.fontFamily"),fontSize:Yo("BodySmall.fontSize"),fontWeight:Yo("BodySmall.fontWeight"),lineHeight:Yo("BodySmall.lineHeight"),letterSpacing:Yo("BodySmall.letterSpacing")},XSmall:{fontFamily:Yo("XSmall.fontFamily"),fontSize:Yo("XSmall.fontSize"),fontWeight:Yo("XSmall.fontWeight"),lineHeight:Yo("XSmall.lineHeight"),letterSpacing:Yo("XSmall.letterSpacing")}},qo=e=>{switch(e){case 700:case"bold":return Lo.Bold;case 600:case"semibold":return Lo.Semibold;case 300:case"light":return Lo.Light;case 400:case"regular":return Lo.Regular;default:return""}},Qo=(e,t)=>n=>{var r;const i=Uo[e].fontFamily(n),a=Uo[e].fontWeight(n);return Object.values(Lo).includes(i)?v`
                font-family: ${qo(t)||qo(a)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=Zo(t)||a)&&void 0!==r?r:"normal"};
        `},Zo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Go=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Xo=Qo,Jo=(e,t,n=!1)=>r=>{const i=Uo[e],a=i.fontSize(r);return v`
            ${Qo(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ko=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${Go(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Go(n)}
        `;var es;!function(e){e.D1=y.h1`
        ${e=>v`
                ${Jo("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${Jo("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${Jo("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${Jo("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${Jo("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${Jo("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${Jo("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${Jo("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${Jo("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${Jo("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${Jo("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${Jo("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${Jo("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${Jo("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${Ko(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>rs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>rs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(es||(es={}));const ts=y.a`
    ${e=>v`
            ${Jo(e.textStyle,e.weight)}
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
`,ns=y(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,rs=n=>{var{external:r=!1,children:i}=n,a=E(n,["external","children"]);return e(ts,Object.assign({},a,{children:[i,r&&t(ns,{})]}))};var is;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(is||(is={}));const as={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},os=e=>t=>{var n;const r=t.theme,i=Vt(as,r[Lt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Rt(i,e,r.options.designToken):Rt(i,e)},ss={InputBoxShadow:os("InputBoxShadow"),InputErrorBoxShadow:os("InputErrorBoxShadow"),ElevationBoxShadow:os("ElevationBoxShadow"),Table:{Header:os("Table.Header"),Cell:{Primary:os("Table.Cell.Primary"),Secondary:os("Table.Cell.Secondary"),Selected:os("Table.Cell.Selected"),Hover:os("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:os("Button.Danger.BackgroundColor"),Hover:os("Button.Danger.Hover"),Primary:os("Button.Danger.Primary"),Border:os("Button.Danger.Border")}}},ls=y.button`
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
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ss.Button.Danger.Border:Ut.Primary};

                    span {
                        color: ${e.$buttonIsDanger?ss.Button.Danger.Primary:Ut.Primary};
                    }
                `;case"light":return v`
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid ${Ut.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?ss.Button.Danger.Primary:Ut.Primary};
                    }
                `;case"disabled":return v`
                    background-color: ${Ut.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ut.Neutral[3]};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ss.Button.Danger.Primary:Ut.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?ss.Button.Danger.Hover:Ut.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?ss.Button.Danger.BackgroundColor:Ut.Primary};
                    border: 1px solid transparent;

                    ${Io.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ut.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${Jo("H5","semibold")}
                    }

                    ${Io.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${Jo("H4","semibold")}
                    }

                    ${Io.mobileS} {
                        height: auto;
                    }
                `}
`,us=y((({color:n,className:r,size:i=18})=>e(To,Object.assign({className:r,$size:i,$color:n},{children:[t(jo,{id:"inner1",$size:i-2,$borderWidth:2}),t(No,{id:"inner2",$size:i-2,$borderWidth:2}),t(Ro,{id:"inner3",$size:i-2,$borderWidth:2}),t(Vo,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ss.Button.Danger.Primary:Ut.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cs={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,u=E(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ls,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(us,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,u=E(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ls,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:a},c,u,{children:[o&&t(us,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},ds=y.div`
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
`,hs=y.input`
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
`,fs=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,ps=y.label`
    ${e=>e.$selected&&!e.$indicator?v`
                ${Jo("H4","semibold")}
            `:v`
                ${Jo("H4","regular")}
            `}

    color: ${Ut.Neutral[1]};

    ${e=>e.$disabled?v`
                color: ${Ut.Neutral[3]};
            `:e.$selected?v`
                color: ${Ut.Primary};
            `:void 0}
`,gs=y.div`
    ${Jo("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Xo("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?v`
                color: ${Ut.Neutral[3]};
            `:e.$selected?v`
                color: ${Ut.Primary};
            `:v`
                color: ${Ut.Neutral[1]};
            `}
`,ms=y.div`
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
`,ys=({type:e,active:n=!1,disabled:r,className:i})=>{let a;switch(e){case"checkbox":a=t(n?O:k,{});break;case"radio":a=t(n?_:D,{});break;case"tick":a=t(M,{});break;case"cross":a=t(B,{});break;default:a=null}return t(ms,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var vs={exports:{}};vs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var u=o[l],c=d[u],h=c&&c[0],f=c&&c[1];o[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,u=e.slice(r),c=a.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],u=!0===o[3],c=l||u,d=o[2];u&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var bs,ws,$s=vs.exports,Ss={exports:{}},xs=Ss.exports=(bs={year:0,month:1,day:2,hour:3,minute:4,second:5},ws={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=ws[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),ws[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,u=s.value,c=bs[l];c>=0&&(a[c]=parseInt(u,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Fs={exports:{}};Fs.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),a=n-i<0,o=t.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof D},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),n&&(w[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=S,F.i=$,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,c=F.p(e),f=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[o]=c+"Hours",n[a]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=F.p(c),g=function(e){var t=x(f);return F.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return F.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:F.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:F.s(o,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=F.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=F.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[a]=v/t,p[i]=v/e,p)[g]||v,f?b:F.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=D.prototype;return x.prototype=_,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Ds=Fs.exports,_s={exports:{}};_s.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Bs=_s.exports,ks={exports:{}};ks.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Os=ks.exports,Ms={exports:{}};Ms.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Es,As=Ms.exports;Ds.extend(Bs),Ds.extend(Os),Ds.extend(As),Ds.extend($s),Ds.extend(xs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ds(t).startOf("week");return Hs(n).map((e=>Cs(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Cs(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ds(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ds(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ds(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Ds(r):void 0,i?Ds(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Es||(Es={}));const Hs=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Cs=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ps=[1,3,5,7,8,10,12],Is=[4,6,9,11];var Ts,zs,js;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Ps.includes(a)?Math.min(i,31).toString():Is.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ds(e,n);return Ds(t,n).diff(r,"minute")},e.toDayjs=e=>e?Ds(e):Ds(),e.addMinutesToTime=(e,t,n="HH:mm")=>Ds(e,n).add(t,"minutes").format(n)}(Ts||(Ts={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Ds(e).isBefore(r,"day"))||!(!i||!Ds(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ds(e).isValid())return e}return""}}(zs||(zs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(js||(js={}));const Ns=(e,t,n="window",r)=>{const i=a();c((()=>{i.current=t}),[t]),c((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])},Rs=y.button`
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
                background-color: ${Ut.Neutral[7]};
            `}
    }
`,Vs=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=E(e,["children","focusHighlight","focusOutline","type"]);return t(Rs,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Ls=y.div`
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
        box-shadow: ${ss.InputBoxShadow};
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
                    box-shadow: ${ss.InputErrorBoxShadow};
                }
            `:void 0}
`,Ws=y.input`
    ${Jo("Body","regular")}
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
`,Ys=y(Mo.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Ut.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Io.mobileS} {
        max-width: 100%;
    }
`,Us=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,qs=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Io.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Qs=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Io.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Zs=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Io.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Gs=y.div`
    display: flex;
    gap: 0.5rem;

    ${Io.tablet} {
        flex-direction: column;
    }

    ${Io.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Xs=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Io.mobileS} {
        width: 6rem;
    }
`,Js=y(Vs)`
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
`,Ks=y(es.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Io.tablet} {
        margin: 0;
    }

    ${Io.mobileS} {
        margin: 0 0.25rem;
    }
`,el=y(Ws)`
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

    ${Io.mobileS} {
        width: 100%;
    }
`,tl=y((({type:n="checkbox",indicator:r,checked:i,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=o(i),[w]=o(js.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=a();c((()=>{b(i)}),[i]);return e(ds,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m},{children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(ys,{type:e,active:v,disabled:d})})(),t(hs,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(fs,{children:[t(ps,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(gs,Object.assign({$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,nl=y(cs.Small)`
    width: 7rem;

    ${Io.mobileL} {
        flex: 1;
    }

    ${Io.mobileS} {
        width: 100%;
    }
`;var rl,il,al;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(rl||(rl={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(il||(il={})),function(e){e.AM="am",e.PM="pm"}(al||(al={}));const ol=({id:n,value:r,show:i,format:s,onChange:l,onCancel:u})=>{const d=ko.getTimeValues(s,r),[h,p]=o(d.hour),[g,m]=o(d.minute),[y,v]=o(d.period),b=a(),S=a(),x=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(n),y=a(null),v=null!=f?f:y,b=a(),w=o({width:void 0,height:void 0}),$=w[0],S=w[1];return qn((function(){if(!Wn()){var e=Un(g,S,c,h);b.current=Vn((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Wn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,p,v.current]),en({ref:v},$)}();c((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=ko.getTimeValues(s,r);p(e),m(t),v(n)}}),[i,r,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case rl.MINUTE_UP:m(ko.updateMinutes(g,"add"));break;case rl.MINUTE_DOWN:m(ko.updateMinutes(g,"minus"));break;case rl.HOUR_UP:p(ko.updateHours(h,"add"));break;case rl.HOUR_DOWN:p(ko.updateHours(h,"minus"))}}),[h,g]),_=e=>{e.target.select()},B=e=>{const t=e.target.value;switch(e.target.name){case il.HOUR:t.length<=2&&p(t);break;case il.MINUTE:t.length<=2&&m(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case il.HOUR:{const n=t>23||t<0?d.hour:ko.convertHourTo12HourFormat(e.target.value);p(n);break}case il.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(_o.padValue(n));break}}},O=e=>{switch(e.target.name){case al.AM:v(Bo.AM);break;case al.PM:v(Bo.PM)}},M=e=>n?`${n}-${e}`:e,E=lo({height:i?x.height+32:0});return t(Ys,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(Us,Object.assign({ref:x.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e(qs,{children:[e(Zs,{children:[e(Xs,{children:[t(Js,Object.assign({"aria-label":"increase hour",name:rl.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(el,{"aria-label":"hour",type:"number",name:il.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:_,onChange:B,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Js,Object.assign({"aria-label":"decrease hour",name:rl.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(Ks,{children:":"}),e(Xs,{children:[t(Js,Object.assign({"aria-label":"increase minute",name:rl.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(el,{"aria-label":"minute",type:"number",name:il.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:B,onBlur:k,onFocus:_,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Js,Object.assign({"aria-label":"decrease minute",name:rl.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Gs,{children:[t(tl,Object.assign({checked:y===Bo.AM,name:al.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(tl,Object.assign({checked:y===Bo.PM,name:al.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Qs,{children:[t(nl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":M("cancel-button")},{children:"Cancel"})),t(nl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?ko.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))},sl=y.div`
    position: relative;
`,ll=y(Ls)`
    height: 3rem;
    gap: 0.5rem;
`,ul=y(Ws)`
    display: block;
    width: 100%;
    flex: 1;
`,cl=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:u="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,g=E(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,y]=o(!1),[v,b]=o(!1),[w,$]=o(""),[S,x]=o(""),F=a();c((()=>{l&&($(l.start),x(l.end))}),[]),Ns("mousedown",(function(e){i||k(e)}),"document"),Ns("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const D=()=>{B()},_=()=>{m||v||f&&f()},B=()=>{y(!1),b(!1),p&&p()},k=e=>{F&&!F.current.contains(e.target)&&(v||m)&&B()};return t(sl,Object.assign({ref:F,id:r},g,{children:e(ll,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[e(Jt,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[t(ul,{onFocus:()=>{i||d||m||(b(!1),y(!0),_())},readOnly:!0,placeholder:"From",value:ko.formatDisplayValue(w,u),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(ul,{onFocus:()=>{i||d||v||(y(!1),b(!0),_())},readOnly:!0,placeholder:"To",value:ko.formatDisplayValue(S,u),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(ol,{id:r,show:m,value:w,format:u,onCancel:D,onChange:e=>{y(!1),b(!0),$(e);h&&h({start:e,end:S})}}),t(ol,{id:r,show:v,value:S,format:u,onCancel:D,onChange:e=>{b(!1),x(e);h&&h({start:w,end:e}),""==w?y(!0):p&&p()}})]}))}))};export{cl as TimeRangePicker};
//# sourceMappingURL=index.js.map
