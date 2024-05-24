import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{useRef as i,useState as o,isValidElement as a,createRef as l,cloneElement as c,PureComponent as f,useEffect as u,useLayoutEffect as d,useCallback as h}from"react";import{findDOMNode as s}from"react-dom";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import p,{css as F}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var v=function(e,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},v(e,t)};var B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},B.apply(this,arguments)};var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},D="object"==typeof b&&b&&b.Object===Object&&b,E="object"==typeof self&&self&&self.Object===Object&&self,w=D||E||Function("return this")(),H=w,$=function(){return H.Date.now()},O=/\s/;var A=function(e){for(var t=e.length;t--&&O.test(e.charAt(t)););return t},_=/^\s+/;var x=function(e){return e?e.slice(0,A(e)+1).replace(_,""):e},z=w.Symbol,k=z,C=Object.prototype,j=C.hasOwnProperty,W=C.toString,T=k?k.toStringTag:void 0;var R=function(e){var t=j.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(e){}var i=W.call(e);return r&&(t?e[T]=n:delete e[T]),i},L=Object.prototype.toString;var P=R,I=function(e){return L.call(e)},V=z?z.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?P(e):I(e)},M=function(e){return null!=e&&"object"==typeof e};var G=x,X=S,U=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==N(e)},q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;var Y=S,Z=$,ee=function(e){if("number"==typeof e)return e;if(U(e))return NaN;if(X(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=X(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=G(e);var n=J.test(e);return n||K.test(e)?Q(e.slice(2),n?2:8):q.test(e)?NaN:+e},te=Math.max,ne=Math.min;var re=function(e,t,n){var r,i,o,a,l,c,f=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function s(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-f>=o}function p(){var e=Z();if(g(e))return F(e);l=setTimeout(p,function(e){var n=t-(e-c);return d?ne(n,o-(e-f)):n}(e))}function F(e){return l=void 0,h&&r?s(e):(r=i=void 0,a)}function y(){var e=Z(),n=g(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return f=e,l=setTimeout(p,t),u?s(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(p,t),s(c)}return void 0===l&&(l=setTimeout(p,t)),a}return t=ee(t)||0,Y(n)&&(u=!!n.leading,o=(d="maxWait"in n)?te(ee(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},y.flush=function(){return void 0===l?a:F(Z())},y},ie=re,oe=S;var ae=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oe(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ie(e,t,{leading:r,maxWait:t,trailing:i})},le=function(e,t,n,r){switch(t){case"debounce":return re(e,n,r);case"throttle":return ae(e,n,r);default:return e}},ce=function(e){return"function"==typeof e},fe=function(){return"undefined"==typeof window},ue=function(e){return e instanceof Element||e instanceof HTMLDocument},de=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&ce(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!fe()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(fe())return null;if(t)return document.querySelector(t);if(r&&ue(r))return r;if(n.targetRef&&ue(n.targetRef.current))return n.targetRef.current;var i=s(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,l=t.onResize;if(i||a){var c=de(l,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!fe()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ce(t)?"renderProp":ce(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,c=void 0===o?1e3:o,f=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,fe()||(n.resizeHandler=le(n.createResizeHandler,i,c,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fe()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,l=this.state,f={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(e=i)(f);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(f,["targetRef"]);return c(e,u)}return c(e,f);case"childArray":return(e=i).map((function(e){return!!e&&c(e,f)}));default:return r.createElement(a,null)}}}(f);var he=fe()?u:d;const se={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var ge="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fe=Array.isArray,ye="object"==typeof ge&&ge&&ge.Object===Object&&ge,me="object"==typeof self&&self&&self.Object===Object&&self,ve=ye||me||Function("return this")(),Be=ve.Symbol,be=Be,Se=Object.prototype,De=Se.hasOwnProperty,Ee=Se.toString,we=be?be.toStringTag:void 0;var He=function(e){var t=De.call(e,we),n=e[we];try{e[we]=void 0;var r=!0}catch(e){}var i=Ee.call(e);return r&&(t?e[we]=n:delete e[we]),i},$e=Object.prototype.toString;var Oe=He,Ae=function(e){return $e.call(e)},_e=Be?Be.toStringTag:void 0;var xe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_e&&_e in Object(e)?Oe(e):Ae(e)};var ze=xe,ke=function(e){return null!=e&&"object"==typeof e};var Ce=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==ze(e)},je=Fe,We=Ce,Te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/;var Le=function(e,t){if(je(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!We(e))||(Re.test(e)||!Te.test(e)||null!=t&&e in Object(t))};var Pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ie=xe,Ve=Pe;var Ne,Me=function(e){if(!Ve(e))return!1;var t=Ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ge=ve["__core-js_shared__"],Xe=(Ne=/[^.]+$/.exec(Ge&&Ge.keys&&Ge.keys.IE_PROTO||""))?"Symbol(src)_1."+Ne:"";var Ue=function(e){return!!Xe&&Xe in e},qe=Function.prototype.toString;var Je=Me,Ke=Ue,Qe=Pe,Ye=function(e){if(null!=e){try{return qe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ze=/^\[object .+?Constructor\]$/,et=Function.prototype,tt=Object.prototype,nt=et.toString,rt=tt.hasOwnProperty,it=RegExp("^"+nt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(e){return!(!Qe(e)||Ke(e))&&(Je(e)?it:Ze).test(Ye(e))},at=function(e,t){return null==e?void 0:e[t]};var lt=function(e,t){var n=at(e,t);return ot(n)?n:void 0},ct=lt(Object,"create"),ft=ct;var ut=function(){this.__data__=ft?ft(null):{},this.size=0};var dt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ht=ct,st=Object.prototype.hasOwnProperty;var gt=function(e){var t=this.__data__;if(ht){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return st.call(t,e)?t[e]:void 0},pt=ct,Ft=Object.prototype.hasOwnProperty;var yt=ct;var mt=ut,vt=dt,Bt=gt,bt=function(e){var t=this.__data__;return pt?void 0!==t[e]:Ft.call(t,e)},St=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=yt&&void 0===t?"__lodash_hash_undefined__":t,this};function Dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Dt.prototype.clear=mt,Dt.prototype.delete=vt,Dt.prototype.get=Bt,Dt.prototype.has=bt,Dt.prototype.set=St;var Et=Dt;var wt=function(){this.__data__=[],this.size=0};var Ht=function(e,t){return e===t||e!=e&&t!=t};var $t=function(e,t){for(var n=e.length;n--;)if(Ht(e[n][0],t))return n;return-1},Ot=$t,At=Array.prototype.splice;var _t=$t;var xt=$t;var zt=$t;var kt=wt,Ct=function(e){var t=this.__data__,n=Ot(t,e);return!(n<0)&&(n==t.length-1?t.pop():At.call(t,n,1),--this.size,!0)},jt=function(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]},Wt=function(e){return xt(this.__data__,e)>-1},Tt=function(e,t){var n=this.__data__,r=zt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=kt,Rt.prototype.delete=Ct,Rt.prototype.get=jt,Rt.prototype.has=Wt,Rt.prototype.set=Tt;var Lt=Rt,Pt=lt(ve,"Map"),It=Et,Vt=Lt,Nt=Pt;var Mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Gt=function(e,t){var n=e.__data__;return Mt(t)?n["string"==typeof t?"string":"hash"]:n.map},Xt=Gt;var Ut=Gt;var qt=Gt;var Jt=Gt;var Kt=function(){this.size=0,this.__data__={hash:new It,map:new(Nt||Vt),string:new It}},Qt=function(e){var t=Xt(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Ut(this,e).get(e)},Zt=function(e){return qt(this,e).has(e)},en=function(e,t){var n=Jt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Kt,tn.prototype.delete=Qt,tn.prototype.get=Yt,tn.prototype.has=Zt,tn.prototype.set=en;var nn=tn;function rn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(rn.Cache||nn),n}rn.Cache=nn;var on=rn;var an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ln=/\\(\\)?/g,cn=function(e){var t=on(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(an,(function(e,n,r,i){t.push(r?i.replace(ln,"$1"):n||e)})),t}));var fn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},un=Fe,dn=Ce,hn=Be?Be.prototype:void 0,sn=hn?hn.toString:void 0;var gn=function e(t){if("string"==typeof t)return t;if(un(t))return fn(t,e)+"";if(dn(t))return sn?sn.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},pn=gn;var Fn=Fe,yn=Le,mn=cn,vn=function(e){return null==e?"":pn(e)};var Bn=Ce;var bn=function(e,t){return Fn(e)?e:yn(e,t)?[e]:mn(vn(e))},Sn=function(e){if("string"==typeof e||Bn(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Dn=function(e,t){for(var n=0,r=(t=bn(t,e)).length;null!=e&&n<r;)e=e[Sn(t[n++])];return n&&n==r?e:void 0};var En=pe((function(e,t,n){var r=null==e?void 0:Dn(e,t);return void 0===r?n:r}));const wn=(e,t,n)=>t?En(n,t)||En(e,t):n||e,Hn=(e,t)=>{const n=t||e.defaultValue;return En(e.collections,n)};var $n;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($n||($n={}));const On={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},An=e=>t=>{const n=t.theme,r=Hn(On,n[$n.colorScheme]);return n.options&&n.options.color?wn(r,e,n.options.color):wn(r,e)},_n=(An("Brand.1"),An("Brand.2"),An("Brand.3"),An("Brand.4"),An("Brand.5"),An("Brand.6"),An("Primary")),xn=(An("PrimaryDark"),An("Secondary")),zn=(An("Accent.Light.1"),An("Accent.Light.2"),An("Accent.Light.3"),An("Accent.Light.4"),An("Accent.Light.5"),An("Accent.Light.6"),An("Accent.Dark.1"),An("Accent.Dark.2"),An("Accent.Dark.3"),{1:An("Neutral.1"),2:An("Neutral.2"),3:An("Neutral.3"),4:An("Neutral.4"),5:An("Neutral.5"),6:An("Neutral.6"),7:An("Neutral.7"),8:An("Neutral.8")}),kn=(An("Validation.Green.Text"),An("Validation.Green.Icon"),An("Validation.Green.Border"),An("Validation.Green.Background"),An("Validation.Orange.Text"),An("Validation.Orange.Icon"),An("Validation.Orange.Border"),An("Validation.Orange.Background"),An("Validation.Orange.Badge"),An("Validation.Red.Text"),An("Validation.Red.Icon"),An("Validation.Red.Border"),An("Validation.Red.Background"),An("Validation.Blue.Text"),An("Validation.Blue.Icon"),An("Validation.Blue.Border"),An("Validation.Blue.Background"),An("Shadow.Accent"),An("Shadow.Red"),An("Shadow.Elevation"),e=>Object.keys(se).reduce(((t,n)=>{const r=se[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{})),Cn=kn("max-width"),jn=(kn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Wn={collections:{base:{D1:{fontFamily:jn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:jn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:jn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:jn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:jn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:jn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:jn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:jn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:jn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:jn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:jn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:jn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Tn=e=>t=>{const n=t.theme,r=Hn(Wn,n[$n.textStyleScheme]);return n.options&&n.options.textStyle?wn(r,e,n.options.textStyle):wn(r,e)},Rn={D1:{fontFamily:Tn("D1.fontFamily"),fontSize:Tn("D1.fontSize"),fontWeight:Tn("D1.fontWeight"),lineHeight:Tn("D1.lineHeight"),letterSpacing:Tn("D1.letterSpacing")},D2:{fontFamily:Tn("D2.fontFamily"),fontSize:Tn("D2.fontSize"),fontWeight:Tn("D2.fontWeight"),lineHeight:Tn("D2.lineHeight"),letterSpacing:Tn("D2.letterSpacing")},D3:{fontFamily:Tn("D3.fontFamily"),fontSize:Tn("D3.fontSize"),fontWeight:Tn("D3.fontWeight"),lineHeight:Tn("D3.lineHeight"),letterSpacing:Tn("D3.letterSpacing")},D4:{fontFamily:Tn("D4.fontFamily"),fontSize:Tn("D4.fontSize"),fontWeight:Tn("D4.fontWeight"),lineHeight:Tn("D4.lineHeight"),letterSpacing:Tn("D4.letterSpacing")},DBody:{fontFamily:Tn("DBody.fontFamily"),fontSize:Tn("DBody.fontSize"),fontWeight:Tn("DBody.fontWeight"),lineHeight:Tn("DBody.lineHeight"),letterSpacing:Tn("DBody.letterSpacing")},H1:{fontFamily:Tn("H1.fontFamily"),fontSize:Tn("H1.fontSize"),fontWeight:Tn("H1.fontWeight"),lineHeight:Tn("H1.lineHeight"),letterSpacing:Tn("H1.letterSpacing")},H2:{fontFamily:Tn("H2.fontFamily"),fontSize:Tn("H2.fontSize"),fontWeight:Tn("H2.fontWeight"),lineHeight:Tn("H2.lineHeight"),letterSpacing:Tn("H2.letterSpacing")},H3:{fontFamily:Tn("H3.fontFamily"),fontSize:Tn("H3.fontSize"),fontWeight:Tn("H3.fontWeight"),lineHeight:Tn("H3.lineHeight"),letterSpacing:Tn("H3.letterSpacing")},H4:{fontFamily:Tn("H4.fontFamily"),fontSize:Tn("H4.fontSize"),fontWeight:Tn("H4.fontWeight"),lineHeight:Tn("H4.lineHeight"),letterSpacing:Tn("H4.letterSpacing")},H5:{fontFamily:Tn("H5.fontFamily"),fontSize:Tn("H5.fontSize"),fontWeight:Tn("H5.fontWeight"),lineHeight:Tn("H5.lineHeight"),letterSpacing:Tn("H5.letterSpacing")},H6:{fontFamily:Tn("H6.fontFamily"),fontSize:Tn("H6.fontSize"),fontWeight:Tn("H6.fontWeight"),lineHeight:Tn("H6.lineHeight"),letterSpacing:Tn("H6.letterSpacing")},Body:{fontFamily:Tn("Body.fontFamily"),fontSize:Tn("Body.fontSize"),fontWeight:Tn("Body.fontWeight"),lineHeight:Tn("Body.lineHeight"),letterSpacing:Tn("Body.letterSpacing")},BodySmall:{fontFamily:Tn("BodySmall.fontFamily"),fontSize:Tn("BodySmall.fontSize"),fontWeight:Tn("BodySmall.fontWeight"),lineHeight:Tn("BodySmall.lineHeight"),letterSpacing:Tn("BodySmall.letterSpacing")},XSmall:{fontFamily:Tn("XSmall.fontFamily"),fontSize:Tn("XSmall.fontSize"),fontWeight:Tn("XSmall.fontWeight"),lineHeight:Tn("XSmall.lineHeight"),letterSpacing:Tn("XSmall.letterSpacing")}},Ln=e=>{switch(e){case 700:case"bold":return jn.Bold;case 600:case"semibold":return jn.Semibold;case 300:case"light":return jn.Light;case 400:case"regular":return jn.Regular;default:return""}},Pn=(e,t)=>n=>{var r;const i=Rn[e].fontFamily(n),o=Rn[e].fontWeight(n);return Object.values(jn).includes(i)?F`
                font-family: ${Ln(t)||Ln(o)||i};
                font-weight: normal !important;
            `:F`
            font-family: ${i};
            font-weight: ${null!==(r=In(t)||o)&&void 0!==r?r:"normal"};
        `},In=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=e=>{if(e>0)return F`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nn=(e,t,n=!1)=>r=>{const i=Rn[e],o=i.fontSize(r);return F`
            ${Pn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${F`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Mn=(e=!1,t=!1,n=void 0)=>t?F`
            display: block;
            ${Vn(n)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Vn(n)}
        `;var Gn;!function(e){e.D1=p.h1`
        ${e=>F`
                ${Nn("D1",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>F`
                ${Nn("D2",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>F`
                ${Nn("D3",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>F`
                ${Nn("D4",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>F`
                ${Nn("DBody",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>F`
                ${Nn("H1",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>F`
                ${Nn("H2",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>F`
                ${Nn("H3",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>F`
                ${Nn("H4",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>F`
                ${Nn("H5",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>F`
                ${Nn("H6",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>F`
                ${Nn("Body",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>F`
                ${Nn("BodySmall",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>F`
                ${Nn("XSmall",e.weight,e.paragraph)}
                color: ${zn[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>qn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>qn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gn||(Gn={}));const Xn=p.a`
    ${e=>F`
            ${Nn(e.textStyle,e.weight)}
            color: ${_n};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xn};

                svg {
                    color: ${xn};
                }
            }
        `}
`,Un=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qn=n=>{var{external:r=!1,children:i}=n,o=m(n,["external","children"]);return e(Xn,Object.assign({},o,{children:[i,r&&t(Un,{})]}))},Jn=p.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${Cn.desktopM} {
        margin: 1.5rem 0;
    }

    ${Cn.tablet} {
        margin: 1rem 0;
    }
`,Kn=p.ul`
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

    ${Cn.tablet} {
        flex-wrap: nowrap;
    }
`,Qn=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${Cn.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,Yn=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Zn=p(g)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${zn[4]};
`,er=p(Gn.BodySmall)`
    margin: 0.25rem !important;
`,tr=p(Gn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,nr=r=>{var{links:a,fadeColor:l,fadePosition:c="both",itemStyle:f,id:d}=r,s=m(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[g,p]=o(!!c),[F,y]=o("left"===c||"both"===c),[v,b]=o("right"===c||"both"===c),S=i(null),D=i(null);!function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,c=e.refreshOptions,f=e.handleWidth,u=void 0===f||f,d=e.handleHeight,h=void 0===d||d,s=e.targetRef,g=e.observerOptions,p=e.onResize,F=i(n),y=i(null),m=null!=s?s:y,v=i(),b=o({width:void 0,height:void 0}),S=b[0],D=b[1];he((function(){if(!fe()){var e=de(p,D,u,h);v.current=le((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!F.current&&!fe()&&e({width:r,height:i}),F.current=!1}))}),r,l,c);var t=new window.ResizeObserver(v.current);return m.current&&t.observe(m.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,h,p,g,m.current]),B({ref:m},S)}({onResize:h((()=>{const e=D.current,t=S.current;e&&t&&a&&a.length>1&&window.innerWidth<=se.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)}),[a.length]),targetRef:S,refreshMode:"debounce",refreshRate:50});const E=()=>{if(g){p(window.innerWidth<se.tablet);const e=D.current,t=S.current;e&&t&&e.scrollWidth>t.offsetWidth?(p(!0),y(e.scrollLeft>=1),b(e.scrollWidth-e.scrollLeft>t.offsetWidth)):p(!1)}};if(u((()=>{const e=D.current;return E(),window.addEventListener("resize",E),e&&e.addEventListener("scroll",E),()=>{window.removeEventListener("resize",E),e&&e.removeEventListener("scroll",E)}}),[]),!a)return null;return e(Jn,Object.assign({ref:S,id:d||"breadcrumb"},s,{children:[t("nav",{children:t(Kn,Object.assign({ref:D},{children:a.map(((n,r)=>{let i;return n.children?(i=r!==a.length-1&&n.href?t(tr,Object.assign({},n,{weight:"semibold"})):t(er,Object.assign({weight:"semibold"},{children:n.children})),e(Yn,Object.assign({$styleProps:f},{children:[i,r<a.length-1&&t(Zn,{})]}),r)):null}))}))}),g&&(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},e(n,{children:[F&&t(Qn,{$backgroundColor:r.left,$position:"left"}),v&&t(Qn,{$backgroundColor:r.right,$position:"right"})]})})()]}))};export{nr as Breadcrumb};
//# sourceMappingURL=index.js.map
