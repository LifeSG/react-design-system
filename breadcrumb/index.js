import t,{jsxs as e,jsx as n,Fragment as r}from"react/jsx-runtime";import*as i from"react";import{cloneElement as o,useRef as a,useState as l,isValidElement as c,createRef as f,PureComponent as h,useEffect as u,useLayoutEffect as s,useCallback as d}from"react";import{findDOMNode as g}from"react-dom";import p,{css as y}from"styled-components";var v=function(t,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},v(t,e)};var m=function(){return m=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},m.apply(this,arguments)};var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var F=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},b="object"==typeof S&&S&&S.Object===Object&&S,w="object"==typeof self&&self&&self.Object===Object&&self,H=b||w||Function("return this")(),$=H,B=function(){return $.Date.now()},D=/\s/;var _=function(t){for(var e=t.length;e--&&D.test(t.charAt(e)););return e},O=/^\s+/;var z=function(t){return t?t.slice(0,_(t)+1).replace(O,""):t},C=H.Symbol,E=C,j=Object.prototype,x=j.hasOwnProperty,W=j.toString,k=E?E.toStringTag:void 0;var A=function(t){var e=x.call(t,k),n=t[k];try{t[k]=void 0;var r=!0}catch(t){}var i=W.call(t);return r&&(e?t[k]=n:delete t[k]),i},R=Object.prototype.toString;var T=A,P=function(t){return R.call(t)},L=C?C.toStringTag:void 0;var V=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":L&&L in Object(t)?T(t):P(t)},M=function(t){return null!=t&&"object"==typeof t};var I=z,N=F,X=function(t){return"symbol"==typeof t||M(t)&&"[object Symbol]"==V(t)},G=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,q=parseInt;var J=F,K=B,Q=function(t){if("number"==typeof t)return t;if(X(t))return NaN;if(N(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=N(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=I(t);var n=U.test(t);return n||Z.test(t)?q(t.slice(2),n?2:8):G.test(t)?NaN:+t},Y=Math.max,tt=Math.min;var et=function(t,e,n){var r,i,o,a,l,c,f=0,h=!1,u=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){return f=t,l=setTimeout(y,e),h?d(t):a}function p(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-f>=o}function y(){var t=K();if(p(t))return v(t);l=setTimeout(y,function(t){var n=e-(t-c);return u?tt(n,o-(t-f)):n}(t))}function v(t){return l=void 0,s&&r?d(t):(r=i=void 0,a)}function m(){var t=K(),n=p(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return g(c);if(u)return clearTimeout(l),l=setTimeout(y,e),d(c)}return void 0===l&&(l=setTimeout(y,e)),a}return e=Q(e)||0,J(n)&&(h=!!n.leading,o=(u="maxWait"in n)?Y(Q(n.maxWait)||0,e):o,s="trailing"in n?!!n.trailing:s),m.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},m.flush=function(){return void 0===l?a:v(K())},m},nt=et,rt=F;var it=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return rt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),nt(t,e,{leading:r,maxWait:e,trailing:i})},ot=function(t,e,n,r){switch(e){case"debounce":return et(t,n,r);case"throttle":return it(t,n,r);default:return t}},at=function(t){return"function"==typeof t},lt=function(){return"undefined"==typeof window},ct=function(t){return t instanceof Element||t instanceof HTMLDocument},ft=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&at(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!lt()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(lt())return null;if(e)return document.querySelector(e);if(r&&ct(r))return r;if(n.targetRef&&ct(n.targetRef.current))return n.targetRef.current;var i=g(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ft(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!lt()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return at(e)?"renderProp":at(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=f(),n.observableElement=null,lt()||(n.resizeHandler=ot(n.createResizeHandler,i,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){lt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,r=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,f={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=r)(f);case"child":if((t=r).type&&"string"==typeof t.type){var h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return o(t,h)}return o(t,f);case"childArray":return(t=r).map((function(t){return!!t&&o(t,f)}));default:return i.createElement(l,null)}}}(h);var ht=lt()?u:s;const ut={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var st,dt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gt={};Object.defineProperty(gt,"__esModule",{value:!0});var pt=t;const yt=t=>pt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:pt.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});yt.displayName="ChevronRightIcon",st=gt.ChevronRightIcon=yt;var vt=Array.isArray,mt="object"==typeof dt&&dt&&dt.Object===Object&&dt,St="object"==typeof self&&self&&self.Object===Object&&self,Ft=mt||St||Function("return this")(),bt=Ft.Symbol,wt=bt,Ht=Object.prototype,$t=Ht.hasOwnProperty,Bt=Ht.toString,Dt=wt?wt.toStringTag:void 0;var _t=function(t){var e=$t.call(t,Dt),n=t[Dt];try{t[Dt]=void 0;var r=!0}catch(t){}var i=Bt.call(t);return r&&(e?t[Dt]=n:delete t[Dt]),i},Ot=Object.prototype.toString;var zt=_t,Ct=function(t){return Ot.call(t)},Et=bt?bt.toStringTag:void 0;var jt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Et&&Et in Object(t)?zt(t):Ct(t)};var xt=jt,Wt=function(t){return null!=t&&"object"==typeof t};var kt=function(t){return"symbol"==typeof t||Wt(t)&&"[object Symbol]"==xt(t)},At=vt,Rt=kt,Tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pt=/^\w*$/;var Lt=function(t,e){if(At(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Rt(t))||(Pt.test(t)||!Tt.test(t)||null!=e&&t in Object(e))};var Vt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Mt=jt,It=Vt;var Nt,Xt=function(t){if(!It(t))return!1;var e=Mt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Gt=Ft["__core-js_shared__"],Ut=(Nt=/[^.]+$/.exec(Gt&&Gt.keys&&Gt.keys.IE_PROTO||""))?"Symbol(src)_1."+Nt:"";var Zt=function(t){return!!Ut&&Ut in t},qt=Function.prototype.toString;var Jt=Xt,Kt=Zt,Qt=Vt,Yt=function(t){if(null!=t){try{return qt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},te=/^\[object .+?Constructor\]$/,ee=Function.prototype,ne=Object.prototype,re=ee.toString,ie=ne.hasOwnProperty,oe=RegExp("^"+re.call(ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ae=function(t){return!(!Qt(t)||Kt(t))&&(Jt(t)?oe:te).test(Yt(t))},le=function(t,e){return null==t?void 0:t[e]};var ce=function(t,e){var n=le(t,e);return ae(n)?n:void 0},fe=ce(Object,"create"),he=fe;var ue=function(){this.__data__=he?he(null):{},this.size=0};var se=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},de=fe,ge=Object.prototype.hasOwnProperty;var pe=function(t){var e=this.__data__;if(de){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(e,t)?e[t]:void 0},ye=fe,ve=Object.prototype.hasOwnProperty;var me=fe;var Se=ue,Fe=se,be=pe,we=function(t){var e=this.__data__;return ye?void 0!==e[t]:ve.call(e,t)},He=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=me&&void 0===e?"__lodash_hash_undefined__":e,this};function $e(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$e.prototype.clear=Se,$e.prototype.delete=Fe,$e.prototype.get=be,$e.prototype.has=we,$e.prototype.set=He;var Be=$e;var De=function(){this.__data__=[],this.size=0};var _e=function(t,e){return t===e||t!=t&&e!=e};var Oe=function(t,e){for(var n=t.length;n--;)if(_e(t[n][0],e))return n;return-1},ze=Oe,Ce=Array.prototype.splice;var Ee=Oe;var je=Oe;var xe=Oe;var We=De,ke=function(t){var e=this.__data__,n=ze(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ce.call(e,n,1),--this.size,!0)},Ae=function(t){var e=this.__data__,n=Ee(e,t);return n<0?void 0:e[n][1]},Re=function(t){return je(this.__data__,t)>-1},Te=function(t,e){var n=this.__data__,r=xe(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Pe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pe.prototype.clear=We,Pe.prototype.delete=ke,Pe.prototype.get=Ae,Pe.prototype.has=Re,Pe.prototype.set=Te;var Le=Pe,Ve=ce(Ft,"Map"),Me=Be,Ie=Le,Ne=Ve;var Xe=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ge=function(t,e){var n=t.__data__;return Xe(e)?n["string"==typeof e?"string":"hash"]:n.map},Ue=Ge;var Ze=Ge;var qe=Ge;var Je=Ge;var Ke=function(){this.size=0,this.__data__={hash:new Me,map:new(Ne||Ie),string:new Me}},Qe=function(t){var e=Ue(this,t).delete(t);return this.size-=e?1:0,e},Ye=function(t){return Ze(this,t).get(t)},tn=function(t){return qe(this,t).has(t)},en=function(t,e){var n=Je(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function nn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}nn.prototype.clear=Ke,nn.prototype.delete=Qe,nn.prototype.get=Ye,nn.prototype.has=tn,nn.prototype.set=en;var rn=nn;function on(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(on.Cache||rn),n}on.Cache=rn;var an=on;var ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cn=/\\(\\)?/g,fn=function(t){var e=an(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ln,(function(t,n,r,i){e.push(r?i.replace(cn,"$1"):n||t)})),e}));var hn=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},un=vt,sn=kt,dn=bt?bt.prototype:void 0,gn=dn?dn.toString:void 0;var pn=function t(e){if("string"==typeof e)return e;if(un(e))return hn(e,t)+"";if(sn(e))return gn?gn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},yn=pn;var vn=vt,mn=Lt,Sn=fn,Fn=function(t){return null==t?"":yn(t)};var bn=kt;var wn=function(t,e){return vn(t)?t:mn(t,e)?[t]:Sn(Fn(t))},Hn=function(t){if("string"==typeof t||bn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var $n=function(t,e){for(var n=0,r=(e=wn(e,t)).length;null!=t&&n<r;)t=t[Hn(e[n++])];return n&&n==r?t:void 0};var Bn=function(t,e,n){var r=null==t?void 0:$n(t,e);return void 0===r?n:r};const Dn=(t,e,n)=>e?Bn(n,e)||Bn(t,e):n||t,_n=(t,e)=>{const n=e||t.defaultValue;return Bn(t.collections,n)};var On;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(On||(On={}));const zn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Cn=t=>e=>{const n=e.theme,r=_n(zn,n[On.colorScheme]);return n.options&&n.options.color?Dn(r,t,n.options.color):Dn(r,t)},En=(Cn("Brand.1"),Cn("Brand.2"),Cn("Brand.3"),Cn("Brand.4"),Cn("Brand.5"),Cn("Brand.6"),Cn("Primary")),jn=(Cn("PrimaryDark"),Cn("Secondary")),xn=(Cn("Accent.Light.1"),Cn("Accent.Light.2"),Cn("Accent.Light.3"),Cn("Accent.Light.4"),Cn("Accent.Light.5"),Cn("Accent.Light.6"),Cn("Accent.Dark.1"),Cn("Accent.Dark.2"),Cn("Accent.Dark.3"),{1:Cn("Neutral.1"),2:Cn("Neutral.2"),3:Cn("Neutral.3"),4:Cn("Neutral.4"),5:Cn("Neutral.5"),6:Cn("Neutral.6"),7:Cn("Neutral.7"),8:Cn("Neutral.8")}),Wn=(Cn("Validation.Green.Text"),Cn("Validation.Green.Icon"),Cn("Validation.Green.Border"),Cn("Validation.Green.Background"),Cn("Validation.Orange.Text"),Cn("Validation.Orange.Icon"),Cn("Validation.Orange.Border"),Cn("Validation.Orange.Background"),Cn("Validation.Orange.Badge"),Cn("Validation.Red.Text"),Cn("Validation.Red.Icon"),Cn("Validation.Red.Border"),Cn("Validation.Red.Background"),t=>Object.keys(ut).reduce(((e,n)=>{const r=ut[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{})),kn=Wn("max-width");Wn("min-width");var An,Rn={};Object.defineProperty(Rn,"__esModule",{value:!0});var Tn=t;const Pn=t=>Tn.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:Tn.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});Pn.displayName="ExternalIcon",An=Rn.ExternalIcon=Pn;const Ln={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Vn={collections:{base:{D1:{fontFamily:Ln.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ln.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ln.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ln.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ln.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ln.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ln.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ln.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ln.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ln.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Mn=t=>e=>{const n=e.theme,r=_n(Vn,n[On.textStyleScheme]);return n.options&&n.options.textStyle?Dn(r,t,n.options.textStyle):Dn(r,t)},In={D1:{fontFamily:Mn("D1.fontFamily"),fontSize:Mn("D1.fontSize"),fontWeight:Mn("D1.fontWeight"),lineHeight:Mn("D1.lineHeight"),letterSpacing:Mn("D1.letterSpacing")},D2:{fontFamily:Mn("D2.fontFamily"),fontSize:Mn("D2.fontSize"),fontWeight:Mn("D2.fontWeight"),lineHeight:Mn("D2.lineHeight"),letterSpacing:Mn("D2.letterSpacing")},D3:{fontFamily:Mn("D3.fontFamily"),fontSize:Mn("D3.fontSize"),fontWeight:Mn("D3.fontWeight"),lineHeight:Mn("D3.lineHeight"),letterSpacing:Mn("D3.letterSpacing")},D4:{fontFamily:Mn("D4.fontFamily"),fontSize:Mn("D4.fontSize"),fontWeight:Mn("D4.fontWeight"),lineHeight:Mn("D4.lineHeight"),letterSpacing:Mn("D4.letterSpacing")},DBody:{fontFamily:Mn("DBody.fontFamily"),fontSize:Mn("DBody.fontSize"),fontWeight:Mn("DBody.fontWeight"),lineHeight:Mn("DBody.lineHeight"),letterSpacing:Mn("DBody.letterSpacing")},H1:{fontFamily:Mn("H1.fontFamily"),fontSize:Mn("H1.fontSize"),fontWeight:Mn("H1.fontWeight"),lineHeight:Mn("H1.lineHeight"),letterSpacing:Mn("H1.letterSpacing")},H2:{fontFamily:Mn("H2.fontFamily"),fontSize:Mn("H2.fontSize"),fontWeight:Mn("H2.fontWeight"),lineHeight:Mn("H2.lineHeight"),letterSpacing:Mn("H2.letterSpacing")},H3:{fontFamily:Mn("H3.fontFamily"),fontSize:Mn("H3.fontSize"),fontWeight:Mn("H3.fontWeight"),lineHeight:Mn("H3.lineHeight"),letterSpacing:Mn("H3.letterSpacing")},H4:{fontFamily:Mn("H4.fontFamily"),fontSize:Mn("H4.fontSize"),fontWeight:Mn("H4.fontWeight"),lineHeight:Mn("H4.lineHeight"),letterSpacing:Mn("H4.letterSpacing")},H5:{fontFamily:Mn("H5.fontFamily"),fontSize:Mn("H5.fontSize"),fontWeight:Mn("H5.fontWeight"),lineHeight:Mn("H5.lineHeight"),letterSpacing:Mn("H5.letterSpacing")},H6:{fontFamily:Mn("H6.fontFamily"),fontSize:Mn("H6.fontSize"),fontWeight:Mn("H6.fontWeight"),lineHeight:Mn("H6.lineHeight"),letterSpacing:Mn("H6.letterSpacing")},Body:{fontFamily:Mn("Body.fontFamily"),fontSize:Mn("Body.fontSize"),fontWeight:Mn("Body.fontWeight"),lineHeight:Mn("Body.lineHeight"),letterSpacing:Mn("Body.letterSpacing")},BodySmall:{fontFamily:Mn("BodySmall.fontFamily"),fontSize:Mn("BodySmall.fontSize"),fontWeight:Mn("BodySmall.fontWeight"),lineHeight:Mn("BodySmall.lineHeight"),letterSpacing:Mn("BodySmall.letterSpacing")},XSmall:{fontFamily:Mn("XSmall.fontFamily"),fontSize:Mn("XSmall.fontSize"),fontWeight:Mn("XSmall.fontWeight"),lineHeight:Mn("XSmall.lineHeight"),letterSpacing:Mn("XSmall.letterSpacing")}},Nn=t=>{switch(t){case 700:case"bold":return Ln.Bold;case 600:case"semibold":return Ln.Semibold;case 300:case"light":return Ln.Light;case 400:case"regular":return Ln.Regular;default:return""}},Xn=(t,e)=>n=>{const r=In[t].fontFamily(n),i=In[t].fontWeight(n);return Object.values(Ln).includes(r)?y`
                font-family: ${Nn(e)||Nn(i)||r};
                font-weight: normal !important;
            `:y`
            font-family: ${r};
            font-weight: ${(Gn(e)||i)??"normal"};
        `},Gn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Un=(t,e,n=!1)=>r=>{const i=In[t],o=i.fontSize(r);return y`
            ${Xn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Zn=(t=!1,e=!1)=>e?y`
            display: block;
        `:t?y`
            display: inline;
        `:y`
            display: block;
        `;var qn;!function(t){t.D1=p.h1`
        ${t=>y`
                ${Un("D1",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.D2=p.h1`
        ${t=>y`
                ${Un("D2",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.D3=p.h1`
        ${t=>y`
                ${Un("D3",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.D4=p.h1`
        ${t=>y`
                ${Un("D4",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.DBody=p.h1`
        ${t=>y`
                ${Un("DBody",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H1=p.h1`
        ${t=>y`
                ${Un("H1",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H2=p.h2`
        ${t=>y`
                ${Un("H2",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H3=p.h3`
        ${t=>y`
                ${Un("H3",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H4=p.h4`
        ${t=>y`
                ${Un("H4",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H5=p.h5`
        ${t=>y`
                ${Un("H5",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.H6=p.h6`
        ${t=>y`
                ${Un("H6",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.Body=p.p`
        ${t=>y`
                ${Un("Body",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=p.p`
        ${t=>y`
                ${Un("BodySmall",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=p.span`
        ${t=>y`
                ${Un("XSmall",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Zn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Qn({...t,textStyle:"Body"}),Small:t=>Qn({...t,textStyle:"BodySmall"})}}(qn||(qn={}));const Jn=p.a`
    ${t=>y`
            ${Un(t.textStyle,t.weight)}
            color: ${En};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jn};

                svg {
                    color: ${jn};
                }
            }
        `}
`,Kn=p(An)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qn=({external:t=!1,children:r,...i})=>e(Jn,{...i,children:[r,t&&n(Kn,{})]}),Yn=p.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${kn.desktopM} {
        margin: 1.5rem 0;
    }

    ${kn.tablet} {
        margin: 1rem 0;
    }
`,tr=p.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -0.25rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${kn.tablet} {
        flex-wrap: nowrap;
    }
`,er=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${kn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,nr=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,rr=p(st)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${xn[4]};
`,ir=p(qn.BodySmall)`
    margin: 0.25rem !important;
`,or=p(qn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,ar=({links:t,fadeColor:i,fadePosition:o="both",itemStyle:c,id:f,...h})=>{const[s,g]=l(!!o),[p,y]=l("left"===o||"both"===o),[v,S]=l("right"===o||"both"===o),F=a(null),b=a(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions,f=t.handleWidth,h=void 0===f||f,u=t.handleHeight,s=void 0===u||u,d=t.targetRef,g=t.observerOptions,p=t.onResize,y=a(n),v=a(null),S=null!=d?d:v,F=a(),b=l({width:void 0,height:void 0}),w=b[0],H=b[1];ht((function(){if(!lt()){var t=ft(p,H,h,s);F.current=ot((function(e){(h||s)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!lt()&&t({width:r,height:i}),y.current=!1}))}),r,o,c);var e=new window.ResizeObserver(F.current);return S.current&&e.observe(S.current,g),function(){e.disconnect();var t=F.current;t&&t.cancel&&t.cancel()}}}),[r,o,c,h,s,p,g,S.current]),m({ref:S},w)}({onResize:d((()=>{const e=b.current,n=F.current;e&&n&&t&&t.length>1&&window.innerWidth<=ut.tablet&&(e.scrollLeft=e.scrollWidth-n.offsetWidth)}),[t.length]),targetRef:F,refreshMode:"debounce",refreshRate:50});const w=()=>{if(s){g(window.innerWidth<ut.tablet);const t=b.current,e=F.current;t&&e&&t.scrollWidth>e.offsetWidth?(g(!0),y(t.scrollLeft>=1),S(t.scrollWidth-t.scrollLeft>e.offsetWidth)):g(!1)}};if(u((()=>{const t=b.current;return w(),window.addEventListener("resize",w),t&&t.addEventListener("scroll",w),()=>{window.removeEventListener("resize",w),t&&t.removeEventListener("scroll",w)}}),[]),!t)return null;return e(Yn,{ref:F,id:f||"breadcrumb",...h,children:[n("nav",{children:n(tr,{ref:b,children:t.map(((r,i)=>{let o;return r.children?(o=i!==t.length-1&&r.href?n(or,{...r,weight:"semibold"}):n(ir,{weight:"semibold",children:r.children}),e(nr,{$styleProps:c,children:[o,i<t.length-1&&n(rr,{})]},i)):null}))})}),s&&(()=>{let t;return t=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},e(r,{children:[p&&n(er,{$backgroundColor:t.left,$position:"left"}),v&&n(er,{$backgroundColor:t.right,$position:"right"})]})})()]})};export{ar as Breadcrumb};
//# sourceMappingURL=index.js.map
