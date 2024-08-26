import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ArrowRightIcon as n}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as r}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as i}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as o}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as a}from"@lifesg/react-icons/tick-circle-fill";import*as l from"react";import{useRef as c,useState as d,isValidElement as u,createRef as f,cloneElement as s,PureComponent as g,useEffect as h,useLayoutEffect as p}from"react";import{findDOMNode as F}from"react-dom";import{ChevronDownIcon as y}from"@lifesg/react-icons";import m,{css as B}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";function S(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var b=function(e,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},b(e,t)};var D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},D.apply(this,arguments)};var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},H="object"==typeof $&&$&&$.Object===Object&&$,w="object"==typeof self&&self&&self.Object===Object&&self,x=H||w||Function("return this")(),O=x,A=function(){return O.Date.now()},z=/\s/;var k=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},C=/^\s+/;var _=function(e){return e?e.slice(0,k(e)+1).replace(C,""):e},T=x.Symbol,j=T,R=Object.prototype,W=R.hasOwnProperty,I=R.toString,P=j?j.toStringTag:void 0;var N=function(e){var t=W.call(e,P),n=e[P];try{e[P]=void 0;var r=!0}catch(e){}var i=I.call(e);return r&&(t?e[P]=n:delete e[P]),i},L=Object.prototype.toString;var V=N,M=function(e){return L.call(e)},G=T?T.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?V(e):M(e)},U=function(e){return null!=e&&"object"==typeof e};var q=_,J=E,K=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==X(e)},Q=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt;var te=E,ne=A,re=function(e){if("number"==typeof e)return e;if(K(e))return NaN;if(J(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=J(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=q(e);var n=Y.test(e);return n||Z.test(e)?ee(e.slice(2),n?2:8):Q.test(e)?NaN:+e},ie=Math.max,oe=Math.min;var ae=function(e,t,n){var r,i,o,a,l,c,d=0,u=!1,f=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,d=t,a=e.apply(o,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-d>=o}function p(){var e=ne();if(h(e))return F(e);l=setTimeout(p,function(e){var n=t-(e-c);return f?oe(n,o-(e-d)):n}(e))}function F(e){return l=void 0,s&&r?g(e):(r=i=void 0,a)}function y(){var e=ne(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return d=e,l=setTimeout(p,t),u?g(e):a}(c);if(f)return clearTimeout(l),l=setTimeout(p,t),g(c)}return void 0===l&&(l=setTimeout(p,t)),a}return t=re(t)||0,te(n)&&(u=!!n.leading,o=(f="maxWait"in n)?ie(re(n.maxWait)||0,t):o,s="trailing"in n?!!n.trailing:s),y.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=c=i=l=void 0},y.flush=function(){return void 0===l?a:F(ne())},y},le=ae,ce=E;var de=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ce(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),le(e,t,{leading:r,maxWait:t,trailing:i})},ue=function(e,t,n,r){switch(t){case"debounce":return ae(e,n,r);case"throttle":return de(e,n,r);default:return e}},fe=function(e){return"function"==typeof e},se=function(){return"undefined"==typeof window},ge=function(e){return e instanceof Element||e instanceof HTMLDocument},he=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&fe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!se()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(se())return null;if(t)return document.querySelector(t);if(r&&ge(r))return r;if(n.targetRef&&ge(n.targetRef.current))return n.targetRef.current;var i=F(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,l=t.onResize;if(i||a){var c=he(l,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!se()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return fe(t)?"renderProp":fe(r)?"childFunction":u(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=f(),n.observableElement=null,se()||(n.resizeHandler=ue(n.createResizeHandler,i,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){se()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,c={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=r)(c);case"child":if((e=r).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return s(e,d)}return s(e,c);case"childArray":return(e=r).map((function(e){return!!e&&s(e,c)}));default:return l.createElement(o,null)}}}(g);var pe=se()?h:p;var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me=Array.isArray,Be="object"==typeof Fe&&Fe&&Fe.Object===Object&&Fe,ve="object"==typeof self&&self&&self.Object===Object&&self,Se=Be||ve||Function("return this")(),be=Se.Symbol,De=be,$e=Object.prototype,Ee=$e.hasOwnProperty,He=$e.toString,we=De?De.toStringTag:void 0;var xe=function(e){var t=Ee.call(e,we),n=e[we];try{e[we]=void 0;var r=!0}catch(e){}var i=He.call(e);return r&&(t?e[we]=n:delete e[we]),i},Oe=Object.prototype.toString;var Ae=xe,ze=function(e){return Oe.call(e)},ke=be?be.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ke&&ke in Object(e)?Ae(e):ze(e)};var _e=Ce,Te=function(e){return null!=e&&"object"==typeof e};var je=function(e){return"symbol"==typeof e||Te(e)&&"[object Symbol]"==_e(e)},Re=me,We=je,Ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pe=/^\w*$/;var Ne=function(e,t){if(Re(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!We(e))||(Pe.test(e)||!Ie.test(e)||null!=t&&e in Object(t))};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ve=Ce,Me=Le;var Ge,Xe=function(e){if(!Me(e))return!1;var t=Ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ue=Se["__core-js_shared__"],qe=(Ge=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||""))?"Symbol(src)_1."+Ge:"";var Je=function(e){return!!qe&&qe in e},Ke=Function.prototype.toString;var Qe=Xe,Ye=Je,Ze=Le,et=function(e){if(null!=e){try{return Ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},tt=/^\[object .+?Constructor\]$/,nt=Function.prototype,rt=Object.prototype,it=nt.toString,ot=rt.hasOwnProperty,at=RegExp("^"+it.call(ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(e){return!(!Ze(e)||Ye(e))&&(Qe(e)?at:tt).test(et(e))},ct=function(e,t){return null==e?void 0:e[t]};var dt=function(e,t){var n=ct(e,t);return lt(n)?n:void 0},ut=dt(Object,"create"),ft=ut;var st=function(){this.__data__=ft?ft(null):{},this.size=0};var gt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ht=ut,pt=Object.prototype.hasOwnProperty;var Ft=function(e){var t=this.__data__;if(ht){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pt.call(t,e)?t[e]:void 0},yt=ut,mt=Object.prototype.hasOwnProperty;var Bt=ut;var vt=st,St=gt,bt=Ft,Dt=function(e){var t=this.__data__;return yt?void 0!==t[e]:mt.call(t,e)},$t=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Bt&&void 0===t?"__lodash_hash_undefined__":t,this};function Et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Et.prototype.clear=vt,Et.prototype.delete=St,Et.prototype.get=bt,Et.prototype.has=Dt,Et.prototype.set=$t;var Ht=Et;var wt=function(){this.__data__=[],this.size=0};var xt=function(e,t){return e===t||e!=e&&t!=t};var Ot=function(e,t){for(var n=e.length;n--;)if(xt(e[n][0],t))return n;return-1},At=Ot,zt=Array.prototype.splice;var kt=Ot;var Ct=Ot;var _t=Ot;var Tt=wt,jt=function(e){var t=this.__data__,n=At(t,e);return!(n<0)&&(n==t.length-1?t.pop():zt.call(t,n,1),--this.size,!0)},Rt=function(e){var t=this.__data__,n=kt(t,e);return n<0?void 0:t[n][1]},Wt=function(e){return Ct(this.__data__,e)>-1},It=function(e,t){var n=this.__data__,r=_t(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Pt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pt.prototype.clear=Tt,Pt.prototype.delete=jt,Pt.prototype.get=Rt,Pt.prototype.has=Wt,Pt.prototype.set=It;var Nt=Pt,Lt=dt(Se,"Map"),Vt=Ht,Mt=Nt,Gt=Lt;var Xt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ut=function(e,t){var n=e.__data__;return Xt(t)?n["string"==typeof t?"string":"hash"]:n.map},qt=Ut;var Jt=Ut;var Kt=Ut;var Qt=Ut;var Yt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Gt||Mt),string:new Vt}},Zt=function(e){var t=qt(this,e).delete(e);return this.size-=t?1:0,t},en=function(e){return Jt(this,e).get(e)},tn=function(e){return Kt(this,e).has(e)},nn=function(e,t){var n=Qt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function rn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=Yt,rn.prototype.delete=Zt,rn.prototype.get=en,rn.prototype.has=tn,rn.prototype.set=nn;var on=rn;function an(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(an.Cache||on),n}an.Cache=on;var ln=an;var cn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dn=/\\(\\)?/g,un=function(e){var t=ln(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(cn,(function(e,n,r,i){t.push(r?i.replace(dn,"$1"):n||e)})),t}));var fn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},sn=me,gn=je,hn=be?be.prototype:void 0,pn=hn?hn.toString:void 0;var Fn=function e(t){if("string"==typeof t)return t;if(sn(t))return fn(t,e)+"";if(gn(t))return pn?pn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},yn=Fn;var mn=me,Bn=Ne,vn=un,Sn=function(e){return null==e?"":yn(e)};var bn=je;var Dn=function(e,t){return mn(e)?e:Bn(e,t)?[e]:vn(Sn(e))},$n=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var En=function(e,t){for(var n=0,r=(t=Dn(t,e)).length;null!=e&&n<r;)e=e[$n(t[n++])];return n&&n==r?e:void 0};var Hn=ye((function(e,t,n){var r=null==e?void 0:En(e,t);return void 0===r?n:r}));const wn=(e,t,n)=>t?Hn(n,t)||Hn(e,t):n||e,xn=(e,t)=>{const n=t||e.defaultValue;return Hn(e.collections,n)};var On;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(On||(On={}));const An={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zn=e=>t=>{const n=t.theme,r=xn(An,n[On.colorScheme]);return n.options&&n.options.color?wn(r,e,n.options.color):wn(r,e)},kn={Brand:{1:zn("Brand.1"),2:zn("Brand.2"),3:zn("Brand.3"),4:zn("Brand.4"),5:zn("Brand.5"),6:zn("Brand.6")},Primary:zn("Primary"),PrimaryDark:zn("PrimaryDark"),Secondary:zn("Secondary"),Accent:{Light:{1:zn("Accent.Light.1"),2:zn("Accent.Light.2"),3:zn("Accent.Light.3"),4:zn("Accent.Light.4"),5:zn("Accent.Light.5"),6:zn("Accent.Light.6")},Dark:{1:zn("Accent.Dark.1"),2:zn("Accent.Dark.2"),3:zn("Accent.Dark.3")}},Neutral:{1:zn("Neutral.1"),2:zn("Neutral.2"),3:zn("Neutral.3"),4:zn("Neutral.4"),5:zn("Neutral.5"),6:zn("Neutral.6"),7:zn("Neutral.7"),8:zn("Neutral.8")},Validation:{Green:{Text:zn("Validation.Green.Text"),Icon:zn("Validation.Green.Icon"),Border:zn("Validation.Green.Border"),Background:zn("Validation.Green.Background")},Orange:{Text:zn("Validation.Orange.Text"),Icon:zn("Validation.Orange.Icon"),Border:zn("Validation.Orange.Border"),Background:zn("Validation.Orange.Background"),Badge:zn("Validation.Orange.Badge")},Red:{Text:zn("Validation.Red.Text"),Icon:zn("Validation.Red.Icon"),Border:zn("Validation.Red.Border"),Background:zn("Validation.Red.Background")},Blue:{Text:zn("Validation.Blue.Text"),Icon:zn("Validation.Blue.Icon"),Border:zn("Validation.Blue.Border"),Background:zn("Validation.Blue.Background")}},Shadow:{Accent:zn("Shadow.Accent"),Red:zn("Shadow.Red"),Elevation:zn("Shadow.Elevation")}},Cn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_n={collections:{base:{D1:{fontFamily:Cn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Cn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Cn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Cn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Cn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Cn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Cn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Cn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Cn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Cn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Cn.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Cn.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Cn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Cn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Cn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Cn.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Cn.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Cn.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Cn.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Tn=e=>t=>{const n=t.theme,r=xn(_n,n[On.textStyleScheme]);return n.options&&n.options.textStyle?wn(r,e,n.options.textStyle):wn(r,e)},jn={D1:{fontFamily:Tn("D1.fontFamily"),fontSize:Tn("D1.fontSize"),fontWeight:Tn("D1.fontWeight"),lineHeight:Tn("D1.lineHeight"),letterSpacing:Tn("D1.letterSpacing")},D2:{fontFamily:Tn("D2.fontFamily"),fontSize:Tn("D2.fontSize"),fontWeight:Tn("D2.fontWeight"),lineHeight:Tn("D2.lineHeight"),letterSpacing:Tn("D2.letterSpacing")},D3:{fontFamily:Tn("D3.fontFamily"),fontSize:Tn("D3.fontSize"),fontWeight:Tn("D3.fontWeight"),lineHeight:Tn("D3.lineHeight"),letterSpacing:Tn("D3.letterSpacing")},D4:{fontFamily:Tn("D4.fontFamily"),fontSize:Tn("D4.fontSize"),fontWeight:Tn("D4.fontWeight"),lineHeight:Tn("D4.lineHeight"),letterSpacing:Tn("D4.letterSpacing")},DBody:{fontFamily:Tn("DBody.fontFamily"),fontSize:Tn("DBody.fontSize"),fontWeight:Tn("DBody.fontWeight"),lineHeight:Tn("DBody.lineHeight"),letterSpacing:Tn("DBody.letterSpacing")},H1:{fontFamily:Tn("H1.fontFamily"),fontSize:Tn("H1.fontSize"),fontWeight:Tn("H1.fontWeight"),lineHeight:Tn("H1.lineHeight"),letterSpacing:Tn("H1.letterSpacing")},H2:{fontFamily:Tn("H2.fontFamily"),fontSize:Tn("H2.fontSize"),fontWeight:Tn("H2.fontWeight"),lineHeight:Tn("H2.lineHeight"),letterSpacing:Tn("H2.letterSpacing")},H3:{fontFamily:Tn("H3.fontFamily"),fontSize:Tn("H3.fontSize"),fontWeight:Tn("H3.fontWeight"),lineHeight:Tn("H3.lineHeight"),letterSpacing:Tn("H3.letterSpacing")},H4:{fontFamily:Tn("H4.fontFamily"),fontSize:Tn("H4.fontSize"),fontWeight:Tn("H4.fontWeight"),lineHeight:Tn("H4.lineHeight"),letterSpacing:Tn("H4.letterSpacing")},H5:{fontFamily:Tn("H5.fontFamily"),fontSize:Tn("H5.fontSize"),fontWeight:Tn("H5.fontWeight"),lineHeight:Tn("H5.lineHeight"),letterSpacing:Tn("H5.letterSpacing")},H6:{fontFamily:Tn("H6.fontFamily"),fontSize:Tn("H6.fontSize"),fontWeight:Tn("H6.fontWeight"),lineHeight:Tn("H6.lineHeight"),letterSpacing:Tn("H6.letterSpacing")},Body:{fontFamily:Tn("Body.fontFamily"),fontSize:Tn("Body.fontSize"),fontWeight:Tn("Body.fontWeight"),lineHeight:Tn("Body.lineHeight"),letterSpacing:Tn("Body.letterSpacing")},BodySmall:{fontFamily:Tn("BodySmall.fontFamily"),fontSize:Tn("BodySmall.fontSize"),fontWeight:Tn("BodySmall.fontWeight"),lineHeight:Tn("BodySmall.lineHeight"),letterSpacing:Tn("BodySmall.letterSpacing")},XSmall:{fontFamily:Tn("XSmall.fontFamily"),fontSize:Tn("XSmall.fontSize"),fontWeight:Tn("XSmall.fontWeight"),lineHeight:Tn("XSmall.lineHeight"),letterSpacing:Tn("XSmall.letterSpacing")}},Rn=e=>{switch(e){case 700:case"bold":return Cn.Bold;case 600:case"semibold":return Cn.Semibold;case 300:case"light":return Cn.Light;case 400:case"regular":return Cn.Regular;default:return""}},Wn=(e,t)=>n=>{var r;const i=jn[e].fontFamily(n),o=jn[e].fontWeight(n);return Object.values(Cn).includes(i)?B`
                font-family: ${Rn(t)||Rn(o)||i};
                font-weight: normal !important;
            `:B`
            font-family: ${i};
            font-weight: ${null!==(r=In(t)||o)&&void 0!==r?r:"normal"};
        `},In=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pn=e=>{if(e>0)return B`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nn=(e,t,n=!1)=>r=>{const i=jn[e],o=i.fontSize(r);return B`
            ${Wn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${B`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ln=(e=!1,t=!1,n=void 0)=>t?B`
            display: block;
            ${Pn(n)}
        `:e?B`
            display: inline;
        `:B`
            display: block;
            ${Pn(n)}
        `;var Vn;!function(e){e.D1=m.h1`
        ${e=>B`
                ${Nn("D1",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>B`
                ${Nn("D2",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>B`
                ${Nn("D3",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>B`
                ${Nn("D4",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>B`
                ${Nn("DBody",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>B`
                ${Nn("H1",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>B`
                ${Nn("H2",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>B`
                ${Nn("H3",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>B`
                ${Nn("H4",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>B`
                ${Nn("H5",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>B`
                ${Nn("H6",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>B`
                ${Nn("Body",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>B`
                ${Nn("BodySmall",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>B`
                ${Nn("XSmall",e.weight,e.paragraph)}
                color: ${kn.Neutral[1]};
                ${Ln(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vn||(Vn={}));const Mn=m.a`
    ${e=>B`
            ${Nn(e.textStyle,e.weight)}
            color: ${kn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kn.Secondary};

                svg {
                    color: ${kn.Secondary};
                }
            }
        `}
`,Gn=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xn=n=>{var{external:r=!1,children:i}=n,o=S(n,["external","children"]);return e(Mn,Object.assign({},o,{children:[i,r&&t(Gn,{})]}))};var Un;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Un||(Un={}));const qn=e=>{const{textSize:t}=e||{};return B`
        // Text styling
        ${t&&Nn(t,"regular")}

        strong {
            font-family: ${Cn.Semibold};
            ${t&&Nn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Cn.Semibold};
            ${t&&Nn(t,"semibold")}
            color: ${kn.Primary};
            text-decoration: none;

            svg {
                color: ${kn.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${kn.Secondary};

                svg {
                    color: ${kn.Secondary};
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
    `},Jn=m.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=kn.Validation.Red.Background(e),n=kn.Validation.Red.Border(e);break;case"success":t=kn.Validation.Green.Background(e),n=kn.Validation.Green.Border(e);break;case"warning":default:t=kn.Validation.Orange.Background(e),n=kn.Validation.Orange.Border(e);break;case"info":t=kn.Validation.Blue.Background(e),n=kn.Validation.Blue.Border(e);break;case"description":t=kn.Neutral[7](e),n=kn.Neutral[4](e)}return B`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${kn.Neutral[1]};
    ${e=>"small"===e.$sizeType?qn({textSize:"H6"}):qn({textSize:"BodySmall"})}
`,Kn=m.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&B`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=kn.Validation.Red.Icon(e);break;case"success":t=kn.Validation.Green.Icon(e);break;case"warning":default:t=kn.Validation.Orange.Icon(e);break;case"info":t=kn.Validation.Blue.Icon(e);break;case"description":t=kn.Neutral[4](e)}return B`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Qn=m(Vn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?B`
                ${Nn("H6","semibold")}
                margin-top: 0.25rem;
            `:B`
                ${Nn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${kn.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${kn.Primary};
    }
`,Yn=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Zn=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,er=m.button`
    ${e=>"small"===e.$sizeType?B`
                ${Nn("H6","semibold")}
            `:B`
                ${Nn("H5","semibold")}
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

    color: ${kn.Primary};
`,tr=m(y)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,nr=l=>{var{type:u,className:f,children:s,actionLink:g,actionLinkIcon:p,sizeType:F="default",showIcon:y=!1,customIcon:m,maxCollapsedHeight:B}=l,v=S(l,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,$]=d(!1),[E,H]=d(!1),{height:w,ref:x}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,l=e.handleWidth,u=void 0===l||l,f=e.handleHeight,s=void 0===f||f,g=e.targetRef,h=e.observerOptions,p=e.onResize,F=c(n),y=c(null),m=null!=g?g:y,B=c(),v=d({width:void 0,height:void 0}),S=v[0],b=v[1];return pe((function(){if(!se()){var e=he(p,b,u,s);B.current=ue((function(t){(u||s)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!F.current&&!se()&&e({width:r,height:i}),F.current=!1}))}),r,o,a);var t=new window.ResizeObserver(B.current);return m.current&&t.observe(m.current,h),function(){t.disconnect();var e=B.current;e&&e.cancel&&e.cancel()}}}),[r,o,a,u,s,p,h,m.current]),D({ref:m},S)}();h((()=>{O()}),[B,w]);const O=()=>{$(!B),H(A())},A=()=>!!B&&w>B;return e(Jn,Object.assign({className:f,$type:u,$sizeType:F,"data-testid":v["data-testid"]},{children:[y&&t(Kn,Object.assign({$sizeType:F,$type:u},{children:(()=>{if(u&&m)return m;switch(u){case"success":return t(a,{});case"warning":return t(i,{});case"error":return t(r,{});case"info":case"description":return t(o,{});default:return null}})()})),e(Yn,{children:[e(Zn,Object.assign({$maxCollapsedHeight:A()?B:void 0,$showMore:b,$hasActionLink:!!g},{children:[t("div",Object.assign({ref:x},{children:s})),g&&e(Qn,Object.assign({"data-testid":"action-link",$type:u,$sizeType:F},g,{children:[g.children,p||t(n,{})]}))]})),E&&e(er,Object.assign({$sizeType:F,$type:u,type:"button",onClick:()=>$(!b)},{children:["Show ",b?"less":"more",t(tr,{$expanded:b})]}))]})]}))};export{nr as Alert};
//# sourceMappingURL=index.js.map
