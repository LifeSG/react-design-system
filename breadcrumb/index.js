import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{cloneElement as i,useRef as o,useState as a,isValidElement as l,createRef as c,PureComponent as f,useEffect as h,useLayoutEffect as u,useCallback as s}from"react";import{findDOMNode as d}from"react-dom";import g,{css as p}from"styled-components";var y=function(t,e){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},y(t,e)};var v=function(){return v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},v.apply(this,arguments)};var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var S=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},F="object"==typeof m&&m&&m.Object===Object&&m,b="object"==typeof self&&self&&self.Object===Object&&self,w=F||b||Function("return this")(),H=w,$=function(){return H.Date.now()},B=/\s/;var D=function(t){for(var e=t.length;e--&&B.test(t.charAt(e)););return e},z=/^\s+/;var _=function(t){return t?t.slice(0,D(t)+1).replace(z,""):t},O=w.Symbol,C=O,E=Object.prototype,x=E.hasOwnProperty,W=E.toString,j=C?C.toStringTag:void 0;var k=function(t){var e=x.call(t,j),n=t[j];try{t[j]=void 0;var r=!0}catch(t){}var i=W.call(t);return r&&(e?t[j]=n:delete t[j]),i},R=Object.prototype.toString;var A=k,L=function(t){return R.call(t)},T=O?O.toStringTag:void 0;var N=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?A(t):L(t)},P=function(t){return null!=t&&"object"==typeof t};var M=_,V=S,I=function(t){return"symbol"==typeof t||P(t)&&"[object Symbol]"==N(t)},X=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,U=/^0o[0-7]+$/i,Z=parseInt;var q=S,J=$,K=function(t){if("number"==typeof t)return t;if(I(t))return NaN;if(V(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=V(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=M(t);var n=G.test(t);return n||U.test(t)?Z(t.slice(2),n?2:8):X.test(t)?NaN:+t},Q=Math.max,Y=Math.min;var tt=function(t,e,n){var r,i,o,a,l,c,f=0,h=!1,u=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){return f=t,l=setTimeout(y,e),h?d(t):a}function p(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-f>=o}function y(){var t=J();if(p(t))return v(t);l=setTimeout(y,function(t){var n=e-(t-c);return u?Y(n,o-(t-f)):n}(t))}function v(t){return l=void 0,s&&r?d(t):(r=i=void 0,a)}function m(){var t=J(),n=p(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return g(c);if(u)return clearTimeout(l),l=setTimeout(y,e),d(c)}return void 0===l&&(l=setTimeout(y,e)),a}return e=K(e)||0,q(n)&&(h=!!n.leading,o=(u="maxWait"in n)?Q(K(n.maxWait)||0,e):o,s="trailing"in n?!!n.trailing:s),m.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},m.flush=function(){return void 0===l?a:v(J())},m},et=tt,nt=S;var rt=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return nt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),et(t,e,{leading:r,maxWait:e,trailing:i})},it=function(t,e,n,r){switch(e){case"debounce":return tt(t,n,r);case"throttle":return rt(t,n,r);default:return t}},ot=function(t){return"function"==typeof t},at=function(){return"undefined"==typeof window},lt=function(t){return t instanceof Element||t instanceof HTMLDocument},ct=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ot(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!at()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(at())return null;if(e)return document.querySelector(e);if(r&&lt(r))return r;if(n.targetRef&&lt(n.targetRef.current))return n.targetRef.current;var i=d(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ct(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!at()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ot(e)?"renderProp":ot(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,f=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,at()||(n.resizeHandler=it(n.createResizeHandler,i,a,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){at()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,o=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,f={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=o)(f);case"child":if((t=o).type&&"string"==typeof t.type){var h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return i(t,h)}return i(t,f);case"childArray":return(t=o).map((function(t){return!!t&&i(t,f)}));default:return r.createElement(l,null)}}}(f);var ft=at()?h:u;const ht={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},st=Array.isArray,dt="object"==typeof ut&&ut&&ut.Object===Object&&ut,gt="object"==typeof self&&self&&self.Object===Object&&self,pt=dt||gt||Function("return this")(),yt=pt.Symbol,vt=yt,mt=Object.prototype,St=mt.hasOwnProperty,Ft=mt.toString,bt=vt?vt.toStringTag:void 0;var wt=function(t){var e=St.call(t,bt),n=t[bt];try{t[bt]=void 0;var r=!0}catch(t){}var i=Ft.call(t);return r&&(e?t[bt]=n:delete t[bt]),i},Ht=Object.prototype.toString;var $t=wt,Bt=function(t){return Ht.call(t)},Dt=yt?yt.toStringTag:void 0;var zt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Dt&&Dt in Object(t)?$t(t):Bt(t)};var _t=zt,Ot=function(t){return null!=t&&"object"==typeof t};var Ct=function(t){return"symbol"==typeof t||Ot(t)&&"[object Symbol]"==_t(t)},Et=st,xt=Ct,Wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jt=/^\w*$/;var kt=function(t,e){if(Et(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!xt(t))||(jt.test(t)||!Wt.test(t)||null!=e&&t in Object(e))};var Rt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},At=zt,Lt=Rt;var Tt,Nt=function(t){if(!Lt(t))return!1;var e=At(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Pt=pt["__core-js_shared__"],Mt=(Tt=/[^.]+$/.exec(Pt&&Pt.keys&&Pt.keys.IE_PROTO||""))?"Symbol(src)_1."+Tt:"";var Vt=function(t){return!!Mt&&Mt in t},It=Function.prototype.toString;var Xt=Nt,Gt=Vt,Ut=Rt,Zt=function(t){if(null!=t){try{return It.call(t)}catch(t){}try{return t+""}catch(t){}}return""},qt=/^\[object .+?Constructor\]$/,Jt=Function.prototype,Kt=Object.prototype,Qt=Jt.toString,Yt=Kt.hasOwnProperty,te=RegExp("^"+Qt.call(Yt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(t){return!(!Ut(t)||Gt(t))&&(Xt(t)?te:qt).test(Zt(t))},ne=function(t,e){return null==t?void 0:t[e]};var re=function(t,e){var n=ne(t,e);return ee(n)?n:void 0},ie=re(Object,"create"),oe=ie;var ae=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ce=ie,fe=Object.prototype.hasOwnProperty;var he=function(t){var e=this.__data__;if(ce){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(e,t)?e[t]:void 0},ue=ie,se=Object.prototype.hasOwnProperty;var de=ie;var ge=ae,pe=le,ye=he,ve=function(t){var e=this.__data__;return ue?void 0!==e[t]:se.call(e,t)},me=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=de&&void 0===e?"__lodash_hash_undefined__":e,this};function Se(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Se.prototype.clear=ge,Se.prototype.delete=pe,Se.prototype.get=ye,Se.prototype.has=ve,Se.prototype.set=me;var Fe=Se;var be=function(){this.__data__=[],this.size=0};var we=function(t,e){return t===e||t!=t&&e!=e};var He=function(t,e){for(var n=t.length;n--;)if(we(t[n][0],e))return n;return-1},$e=He,Be=Array.prototype.splice;var De=He;var ze=He;var _e=He;var Oe=be,Ce=function(t){var e=this.__data__,n=$e(e,t);return!(n<0)&&(n==e.length-1?e.pop():Be.call(e,n,1),--this.size,!0)},Ee=function(t){var e=this.__data__,n=De(e,t);return n<0?void 0:e[n][1]},xe=function(t){return ze(this.__data__,t)>-1},We=function(t,e){var n=this.__data__,r=_e(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function je(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}je.prototype.clear=Oe,je.prototype.delete=Ce,je.prototype.get=Ee,je.prototype.has=xe,je.prototype.set=We;var ke=je,Re=re(pt,"Map"),Ae=Fe,Le=ke,Te=Re;var Ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Pe=function(t,e){var n=t.__data__;return Ne(e)?n["string"==typeof e?"string":"hash"]:n.map},Me=Pe;var Ve=Pe;var Ie=Pe;var Xe=Pe;var Ge=function(){this.size=0,this.__data__={hash:new Ae,map:new(Te||Le),string:new Ae}},Ue=function(t){var e=Me(this,t).delete(t);return this.size-=e?1:0,e},Ze=function(t){return Ve(this,t).get(t)},qe=function(t){return Ie(this,t).has(t)},Je=function(t,e){var n=Xe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ke(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ke.prototype.clear=Ge,Ke.prototype.delete=Ue,Ke.prototype.get=Ze,Ke.prototype.has=qe,Ke.prototype.set=Je;var Qe=Ke;function Ye(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var tn=Ye;var en=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nn=/\\(\\)?/g,rn=function(t){var e=tn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(en,(function(t,n,r,i){e.push(r?i.replace(nn,"$1"):n||t)})),e}));var on=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},an=st,ln=Ct,cn=yt?yt.prototype:void 0,fn=cn?cn.toString:void 0;var hn=function t(e){if("string"==typeof e)return e;if(an(e))return on(e,t)+"";if(ln(e))return fn?fn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},un=hn;var sn=st,dn=kt,gn=rn,pn=function(t){return null==t?"":un(t)};var yn=Ct;var vn=function(t,e){return sn(t)?t:dn(t,e)?[t]:gn(pn(t))},mn=function(t){if("string"==typeof t||yn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Sn=function(t,e){for(var n=0,r=(e=vn(e,t)).length;null!=t&&n<r;)t=t[mn(e[n++])];return n&&n==r?t:void 0};var Fn=function(t,e,n){var r=null==t?void 0:Sn(t,e);return void 0===r?n:r};const bn=(t,e,n)=>e?Fn(n,e)||Fn(t,e):n||t,wn=(t,e)=>{const n=e||t.defaultValue;return Fn(t.collections,n)};var Hn;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Hn||(Hn={}));const $n={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Bn=t=>e=>{const n=e.theme,r=wn($n,n[Hn.colorScheme]);return n.options&&n.options.color?bn(r,t,n.options.color):bn(r,t)},Dn={Brand:{1:Bn("Brand.1"),2:Bn("Brand.2"),3:Bn("Brand.3"),4:Bn("Brand.4"),5:Bn("Brand.5"),6:Bn("Brand.6")},Primary:Bn("Primary"),PrimaryDark:Bn("PrimaryDark"),Secondary:Bn("Secondary"),Accent:{Light:{1:Bn("Accent.Light.1"),2:Bn("Accent.Light.2"),3:Bn("Accent.Light.3"),4:Bn("Accent.Light.4"),5:Bn("Accent.Light.5"),6:Bn("Accent.Light.6")},Dark:{1:Bn("Accent.Dark.1"),2:Bn("Accent.Dark.2"),3:Bn("Accent.Dark.3")}},Neutral:{1:Bn("Neutral.1"),2:Bn("Neutral.2"),3:Bn("Neutral.3"),4:Bn("Neutral.4"),5:Bn("Neutral.5"),6:Bn("Neutral.6"),7:Bn("Neutral.7"),8:Bn("Neutral.8")},Validation:{Green:{Text:Bn("Validation.Green.Text"),Icon:Bn("Validation.Green.Icon"),Border:Bn("Validation.Green.Border"),Background:Bn("Validation.Green.Background")},Orange:{Text:Bn("Validation.Orange.Text"),Icon:Bn("Validation.Orange.Icon"),Border:Bn("Validation.Orange.Border"),Background:Bn("Validation.Orange.Background"),Badge:Bn("Validation.Orange.Badge")},Red:{Text:Bn("Validation.Red.Text"),Icon:Bn("Validation.Red.Icon"),Border:Bn("Validation.Red.Border"),Background:Bn("Validation.Red.Background")}}},zn=g.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Dn.Primary};
`,_n=e=>t(zn,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...e,children:t("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),On=e=>t(zn,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),Cn=e=>t(zn,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),En=e=>t(zn,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...e,children:t("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),xn=e=>t(zn,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...e,children:t("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Wn=({type:e,...n})=>{switch(e){case"arrow-right":return t(_n,{...n});case"info":return t(Cn,{...n});case"cross":return t(On,{...n});case"play":return t(En,{...n});case"search":return t(xn,{...n});default:{const r=`sgds-icon sgds-icon-${e}`,i=n.className?`${r} ${n.className}`:r;return t(jn,{...n,className:i})}}},jn=g.span`
    font-size: 1rem;
`,kn=t=>Object.keys(ht).reduce(((e,n)=>{const r=ht[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Rn=kn("max-width"),An=(kn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ln={collections:{base:{D1:{fontFamily:An.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:An.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:An.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:An.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:An.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:An.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:An.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:An.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:An.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:An.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:An.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:An.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:An.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:An.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Tn=t=>e=>{const n=e.theme,r=wn(Ln,n[Hn.textStyleScheme]);return n.options&&n.options.textStyle?bn(r,t,n.options.textStyle):bn(r,t)},Nn={D1:{fontFamily:Tn("D1.fontFamily"),fontSize:Tn("D1.fontSize"),fontWeight:Tn("D1.fontWeight"),lineHeight:Tn("D1.lineHeight"),letterSpacing:Tn("D1.letterSpacing")},D2:{fontFamily:Tn("D2.fontFamily"),fontSize:Tn("D2.fontSize"),fontWeight:Tn("D2.fontWeight"),lineHeight:Tn("D2.lineHeight"),letterSpacing:Tn("D2.letterSpacing")},D3:{fontFamily:Tn("D3.fontFamily"),fontSize:Tn("D3.fontSize"),fontWeight:Tn("D3.fontWeight"),lineHeight:Tn("D3.lineHeight"),letterSpacing:Tn("D3.letterSpacing")},D4:{fontFamily:Tn("D4.fontFamily"),fontSize:Tn("D4.fontSize"),fontWeight:Tn("D4.fontWeight"),lineHeight:Tn("D4.lineHeight"),letterSpacing:Tn("D4.letterSpacing")},DBody:{fontFamily:Tn("DBody.fontFamily"),fontSize:Tn("DBody.fontSize"),fontWeight:Tn("DBody.fontWeight"),lineHeight:Tn("DBody.lineHeight"),letterSpacing:Tn("DBody.letterSpacing")},H1:{fontFamily:Tn("H1.fontFamily"),fontSize:Tn("H1.fontSize"),fontWeight:Tn("H1.fontWeight"),lineHeight:Tn("H1.lineHeight"),letterSpacing:Tn("H1.letterSpacing")},H2:{fontFamily:Tn("H2.fontFamily"),fontSize:Tn("H2.fontSize"),fontWeight:Tn("H2.fontWeight"),lineHeight:Tn("H2.lineHeight"),letterSpacing:Tn("H2.letterSpacing")},H3:{fontFamily:Tn("H3.fontFamily"),fontSize:Tn("H3.fontSize"),fontWeight:Tn("H3.fontWeight"),lineHeight:Tn("H3.lineHeight"),letterSpacing:Tn("H3.letterSpacing")},H4:{fontFamily:Tn("H4.fontFamily"),fontSize:Tn("H4.fontSize"),fontWeight:Tn("H4.fontWeight"),lineHeight:Tn("H4.lineHeight"),letterSpacing:Tn("H4.letterSpacing")},H5:{fontFamily:Tn("H5.fontFamily"),fontSize:Tn("H5.fontSize"),fontWeight:Tn("H5.fontWeight"),lineHeight:Tn("H5.lineHeight"),letterSpacing:Tn("H5.letterSpacing")},H6:{fontFamily:Tn("H6.fontFamily"),fontSize:Tn("H6.fontSize"),fontWeight:Tn("H6.fontWeight"),lineHeight:Tn("H6.lineHeight"),letterSpacing:Tn("H6.letterSpacing")},Body:{fontFamily:Tn("Body.fontFamily"),fontSize:Tn("Body.fontSize"),fontWeight:Tn("Body.fontWeight"),lineHeight:Tn("Body.lineHeight"),letterSpacing:Tn("Body.letterSpacing")},BodySmall:{fontFamily:Tn("BodySmall.fontFamily"),fontSize:Tn("BodySmall.fontSize"),fontWeight:Tn("BodySmall.fontWeight"),lineHeight:Tn("BodySmall.lineHeight"),letterSpacing:Tn("BodySmall.letterSpacing")},XSmall:{fontFamily:Tn("XSmall.fontFamily"),fontSize:Tn("XSmall.fontSize"),fontWeight:Tn("XSmall.fontWeight"),lineHeight:Tn("XSmall.lineHeight"),letterSpacing:Tn("XSmall.letterSpacing")}},Pn=t=>{switch(t){case 700:case"bold":return An.Bold;case 600:case"semibold":return An.Semibold;case 300:case"light":return An.Light;case 400:case"regular":return An.Regular;default:return""}},Mn=(t,e)=>n=>{const r=Nn[t].fontFamily(n),i=Nn[t].fontWeight(n);return Object.values(An).includes(r)?p`
                font-family: ${Pn(e)||Pn(i)||r};
                font-weight: normal !important;
            `:p`
            font-family: ${r};
            font-weight: ${(Vn(e)||i)??"normal"};
        `},Vn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},In=(t,e,n=!1)=>r=>{const i=Nn[t],o=i.fontSize(r);return p`
            ${Mn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${p`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Xn=(t=!1,e=!1)=>e?p`
            display: block;
        `:t?p`
            display: inline;
        `:p`
            display: block;
        `;var Gn;!function(t){t.D1=g.h1`
        ${t=>p`
                ${In("D1",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.D2=g.h1`
        ${t=>p`
                ${In("D2",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.D3=g.h1`
        ${t=>p`
                ${In("D3",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.D4=g.h1`
        ${t=>p`
                ${In("D4",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.DBody=g.h1`
        ${t=>p`
                ${In("DBody",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H1=g.h1`
        ${t=>p`
                ${In("H1",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H2=g.h2`
        ${t=>p`
                ${In("H2",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H3=g.h3`
        ${t=>p`
                ${In("H3",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H4=g.h4`
        ${t=>p`
                ${In("H4",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H5=g.h5`
        ${t=>p`
                ${In("H5",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.H6=g.h6`
        ${t=>p`
                ${In("H6",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.Body=g.p`
        ${t=>p`
                ${In("Body",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=g.p`
        ${t=>p`
                ${In("BodySmall",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=g.span`
        ${t=>p`
                ${In("XSmall",t.weight,t.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Xn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>qn({...t,textStyle:"Body"}),Small:t=>qn({...t,textStyle:"BodySmall"})}}(Gn||(Gn={}));const Un=g.a`
    ${t=>p`
            ${In(t.textStyle,t.weight)}
            color: ${Dn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dn.Secondary};
            }
        `}
`,Zn=g(Wn)`
    margin-left: 0.4rem;
`,qn=({external:n=!1,children:r,...i})=>e(Un,{...i,children:[r,n&&t(Zn,{type:"external"})]}),Jn=g.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${Rn.desktopM} {
        margin: 1.5rem 0;
    }

    ${Rn.tablet} {
        margin: 1rem 0;
    }
`,Kn=g.ul`
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

    ${Rn.tablet} {
        flex-wrap: nowrap;
    }
`,Qn=g.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${Rn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,Yn=g.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,tr=g(Wn)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    font-weight: bold !important;
    color: ${t=>t.$color||Dn.Neutral[4]};
`,er=g(Gn.BodySmall)`
    margin: 0.25rem !important;
`,nr=g(Gn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,rr=({links:r,fadeColor:i,fadePosition:l="both",itemStyle:c,id:f,...u})=>{const[d,g]=a(!!l),[p,y]=a("left"===l||"both"===l),[m,S]=a("right"===l||"both"===l),F=o(null),b=o(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,l=void 0===i?1e3:i,c=t.refreshOptions,f=t.handleWidth,h=void 0===f||f,u=t.handleHeight,s=void 0===u||u,d=t.targetRef,g=t.observerOptions,p=t.onResize,y=o(n),m=o(null),S=null!=d?d:m,F=o(),b=a({width:void 0,height:void 0}),w=b[0],H=b[1];ft((function(){if(!at()){var t=ct(p,H,h,s);F.current=it((function(e){(h||s)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!at()&&t({width:r,height:i}),y.current=!1}))}),r,l,c);var e=new window.ResizeObserver(F.current);return S.current&&e.observe(S.current,g),function(){e.disconnect();var t=F.current;t&&t.cancel&&t.cancel()}}}),[r,l,c,h,s,p,g,S.current]),v({ref:S},w)}({onResize:s((()=>{const t=b.current,e=F.current;t&&e&&r&&r.length>1&&window.innerWidth<=ht.tablet&&(t.scrollLeft=t.scrollWidth-e.offsetWidth)}),[r.length]),targetRef:F,refreshMode:"debounce",refreshRate:50});const w=()=>{if(d){g(window.innerWidth<ht.tablet);const t=b.current,e=F.current;t&&e&&t.scrollWidth>e.offsetWidth?(g(!0),y(t.scrollLeft>=1),S(t.scrollWidth-t.scrollLeft>e.offsetWidth)):g(!1)}};if(h((()=>{const t=b.current;return w(),window.addEventListener("resize",w),t&&t.addEventListener("scroll",w),()=>{window.removeEventListener("resize",w),t&&t.removeEventListener("scroll",w)}}),[]),!r)return null;return e(Jn,{ref:F,id:f||"breadcrumb",...u,children:[t("nav",{children:t(Kn,{ref:b,children:r.map(((n,i)=>{let o;return n.children?(o=i!==r.length-1&&n.href?t(nr,{...n,weight:"semibold"}):t(er,{weight:"semibold",children:n.children}),e(Yn,{$styleProps:c,children:[o,i<r.length-1&&t(tr,{type:"chevron-right"})]},i)):null}))})}),d&&e(n,{children:[p&&t(Qn,{$backgroundColor:i,$position:"left"}),m&&t(Qn,{$backgroundColor:i,$position:"right"})]})]})};export{rr as Breadcrumb};
//# sourceMappingURL=index.js.map
