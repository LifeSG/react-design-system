import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ArrowRightIcon as n}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as r}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as i}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as a}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as o}from"@lifesg/react-icons/tick-circle-fill";import*as l from"react";import{useRef as c,useState as s,isValidElement as f,createRef as u,cloneElement as d,PureComponent as g,useEffect as h,useLayoutEffect as p}from"react";import{findDOMNode as F}from"react-dom";import{ChevronDownIcon as y}from"@lifesg/react-icons";import m,{css as S}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var b=function(e,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},b(e,t)};var D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},D.apply(this,arguments)};var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var $=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof H&&H&&H.Object===Object&&H,O="object"==typeof self&&self&&self.Object===Object&&self,w=E||O||Function("return this")(),k=w,z=function(){return k.Date.now()},x=/\s/;var A=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t},C=/^\s+/;var _=function(e){return e?e.slice(0,A(e)+1).replace(C,""):e},T=w.Symbol,j=T,W=Object.prototype,P=W.hasOwnProperty,R=W.toString,I=j?j.toStringTag:void 0;var N=function(e){var t=P.call(e,I),n=e[I];try{e[I]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[I]=n:delete e[I]),i},L=Object.prototype.toString;var V=N,J=function(e){return L.call(e)},M=T?T.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?V(e):J(e)},X=function(e){return null!=e&&"object"==typeof e};var U=_,q=$,K=function(e){return"symbol"==typeof e||X(e)&&"[object Symbol]"==G(e)},Q=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt;var te=$,ne=z,re=function(e){if("number"==typeof e)return e;if(K(e))return NaN;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=U(e);var n=Y.test(e);return n||Z.test(e)?ee(e.slice(2),n?2:8):Q.test(e)?NaN:+e},ie=Math.max,ae=Math.min;var oe=function(e,t,n){var r,i,a,o,l,c,s=0,f=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,a=i;return r=i=void 0,s=t,o=e.apply(a,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-s>=a}function p(){var e=ne();if(h(e))return F(e);l=setTimeout(p,function(e){var n=t-(e-c);return u?ae(n,a-(e-s)):n}(e))}function F(e){return l=void 0,d&&r?g(e):(r=i=void 0,o)}function y(){var e=ne(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(p,t),f?g(e):o}(c);if(u)return clearTimeout(l),l=setTimeout(p,t),g(c)}return void 0===l&&(l=setTimeout(p,t)),o}return t=re(t)||0,te(n)&&(f=!!n.leading,a=(u="maxWait"in n)?ie(re(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=i=l=void 0},y.flush=function(){return void 0===l?o:F(ne())},y},le=oe,ce=$;var se=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ce(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),le(e,t,{leading:r,maxWait:t,trailing:i})},fe=function(e,t,n,r){switch(t){case"debounce":return oe(e,n,r);case"throttle":return se(e,n,r);default:return e}},ue=function(e){return"function"==typeof e},de=function(){return"undefined"==typeof window},ge=function(e){return e instanceof Element||e instanceof HTMLDocument},he=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&ue(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!de()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(de())return null;if(t)return document.querySelector(t);if(r&&ge(r))return r;if(n.targetRef&&ge(n.targetRef.current))return n.targetRef.current;var i=F(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,l=t.onResize;if(i||o){var c=he(l,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!de()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ue(t)?"renderProp":ue(r)?"childFunction":f(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,de()||(n.resizeHandler=fe(n.createResizeHandler,i,o,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){de()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,i=t.nodeType,a=void 0===i?"div":i,o=this.state,c={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=r)(c);case"child":if((e=r).type&&"string"==typeof e.type){var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return d(e,s)}return d(e,c);case"childArray":return(e=r).map((function(e){return!!e&&d(e,c)}));default:return l.createElement(a,null)}}}(g);var pe=de()?h:p;var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me=Array.isArray,Se="object"==typeof Fe&&Fe&&Fe.Object===Object&&Fe,Be="object"==typeof self&&self&&self.Object===Object&&self,ve=Se||Be||Function("return this")(),be=ve.Symbol,De=be,He=Object.prototype,$e=He.hasOwnProperty,Ee=He.toString,Oe=De?De.toStringTag:void 0;var we=function(e){var t=$e.call(e,Oe),n=e[Oe];try{e[Oe]=void 0;var r=!0}catch(e){}var i=Ee.call(e);return r&&(t?e[Oe]=n:delete e[Oe]),i},ke=Object.prototype.toString;var ze=we,xe=function(e){return ke.call(e)},Ae=be?be.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ae&&Ae in Object(e)?ze(e):xe(e)};var _e=Ce,Te=function(e){return null!=e&&"object"==typeof e};var je=function(e){return"symbol"==typeof e||Te(e)&&"[object Symbol]"==_e(e)},We=me,Pe=je,Re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ie=/^\w*$/;var Ne=function(e,t){if(We(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Pe(e))||(Ie.test(e)||!Re.test(e)||null!=t&&e in Object(t))};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ve=Ce,Je=Le;var Me,Ge=function(e){if(!Je(e))return!1;var t=Ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Xe=ve["__core-js_shared__"],Ue=(Me=/[^.]+$/.exec(Xe&&Xe.keys&&Xe.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var qe=function(e){return!!Ue&&Ue in e},Ke=Function.prototype.toString;var Qe=Ge,Ye=qe,Ze=Le,et=function(e){if(null!=e){try{return Ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},tt=/^\[object .+?Constructor\]$/,nt=Function.prototype,rt=Object.prototype,it=nt.toString,at=rt.hasOwnProperty,ot=RegExp("^"+it.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(e){return!(!Ze(e)||Ye(e))&&(Qe(e)?ot:tt).test(et(e))},ct=function(e,t){return null==e?void 0:e[t]};var st=function(e,t){var n=ct(e,t);return lt(n)?n:void 0},ft=st(Object,"create"),ut=ft;var dt=function(){this.__data__=ut?ut(null):{},this.size=0};var gt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ht=ft,pt=Object.prototype.hasOwnProperty;var Ft=function(e){var t=this.__data__;if(ht){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return pt.call(t,e)?t[e]:void 0},yt=ft,mt=Object.prototype.hasOwnProperty;var St=ft;var Bt=dt,vt=gt,bt=Ft,Dt=function(e){var t=this.__data__;return yt?void 0!==t[e]:mt.call(t,e)},Ht=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=St&&void 0===t?"__lodash_hash_undefined__":t,this};function $t(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$t.prototype.clear=Bt,$t.prototype.delete=vt,$t.prototype.get=bt,$t.prototype.has=Dt,$t.prototype.set=Ht;var Et=$t;var Ot=function(){this.__data__=[],this.size=0};var wt=function(e,t){return e===t||e!=e&&t!=t};var kt=function(e,t){for(var n=e.length;n--;)if(wt(e[n][0],t))return n;return-1},zt=kt,xt=Array.prototype.splice;var At=kt;var Ct=kt;var _t=kt;var Tt=Ot,jt=function(e){var t=this.__data__,n=zt(t,e);return!(n<0)&&(n==t.length-1?t.pop():xt.call(t,n,1),--this.size,!0)},Wt=function(e){var t=this.__data__,n=At(t,e);return n<0?void 0:t[n][1]},Pt=function(e){return Ct(this.__data__,e)>-1},Rt=function(e,t){var n=this.__data__,r=_t(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function It(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}It.prototype.clear=Tt,It.prototype.delete=jt,It.prototype.get=Wt,It.prototype.has=Pt,It.prototype.set=Rt;var Nt=It,Lt=st(ve,"Map"),Vt=Et,Jt=Nt,Mt=Lt;var Gt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Xt=function(e,t){var n=e.__data__;return Gt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ut=Xt;var qt=Xt;var Kt=Xt;var Qt=Xt;var Yt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Mt||Jt),string:new Vt}},Zt=function(e){var t=Ut(this,e).delete(e);return this.size-=t?1:0,t},en=function(e){return qt(this,e).get(e)},tn=function(e){return Kt(this,e).has(e)},nn=function(e,t){var n=Qt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function rn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=Yt,rn.prototype.delete=Zt,rn.prototype.get=en,rn.prototype.has=tn,rn.prototype.set=nn;var an=rn;function on(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(on.Cache||an),n}on.Cache=an;var ln=on;var cn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sn=/\\(\\)?/g,fn=function(e){var t=ln(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(cn,(function(e,n,r,i){t.push(r?i.replace(sn,"$1"):n||e)})),t}));var un=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},dn=me,gn=je,hn=be?be.prototype:void 0,pn=hn?hn.toString:void 0;var Fn=function e(t){if("string"==typeof t)return t;if(dn(t))return un(t,e)+"";if(gn(t))return pn?pn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},yn=Fn;var mn=me,Sn=Ne,Bn=fn,vn=function(e){return null==e?"":yn(e)};var bn=je;var Dn=function(e,t){return mn(e)?e:Sn(e,t)?[e]:Bn(vn(e))},Hn=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var $n=function(e,t){for(var n=0,r=(t=Dn(t,e)).length;null!=e&&n<r;)e=e[Hn(t[n++])];return n&&n==r?e:void 0};var En=ye((function(e,t,n){var r=null==e?void 0:$n(e,t);return void 0===r?n:r}));const On=(e,t,n)=>t?En(n,t)||En(e,t):n||e,wn=(e,t)=>{const n=t||e.defaultValue;return En(e.collections,n)};var kn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(kn||(kn={}));const zn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xn=e=>t=>{const n=t.theme,r=wn(zn,n[kn.colorScheme]);return n.options&&n.options.color?On(r,e,n.options.color):On(r,e)},An={Brand:{1:xn("Brand.1"),2:xn("Brand.2"),3:xn("Brand.3"),4:xn("Brand.4"),5:xn("Brand.5"),6:xn("Brand.6")},Primary:xn("Primary"),PrimaryDark:xn("PrimaryDark"),Secondary:xn("Secondary"),Accent:{Light:{1:xn("Accent.Light.1"),2:xn("Accent.Light.2"),3:xn("Accent.Light.3"),4:xn("Accent.Light.4"),5:xn("Accent.Light.5"),6:xn("Accent.Light.6")},Dark:{1:xn("Accent.Dark.1"),2:xn("Accent.Dark.2"),3:xn("Accent.Dark.3")}},Neutral:{1:xn("Neutral.1"),2:xn("Neutral.2"),3:xn("Neutral.3"),4:xn("Neutral.4"),5:xn("Neutral.5"),6:xn("Neutral.6"),7:xn("Neutral.7"),8:xn("Neutral.8")},Validation:{Green:{Text:xn("Validation.Green.Text"),Icon:xn("Validation.Green.Icon"),Border:xn("Validation.Green.Border"),Background:xn("Validation.Green.Background")},Orange:{Text:xn("Validation.Orange.Text"),Icon:xn("Validation.Orange.Icon"),Border:xn("Validation.Orange.Border"),Background:xn("Validation.Orange.Background"),Badge:xn("Validation.Orange.Badge")},Red:{Text:xn("Validation.Red.Text"),Icon:xn("Validation.Red.Icon"),Border:xn("Validation.Red.Border"),Background:xn("Validation.Red.Background")},Blue:{Text:xn("Validation.Blue.Text"),Icon:xn("Validation.Blue.Icon"),Border:xn("Validation.Blue.Border"),Background:xn("Validation.Blue.Background")}},Shadow:{Accent:xn("Shadow.Accent"),Red:xn("Shadow.Red"),Elevation:xn("Shadow.Elevation")}},Cn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},_n={D1:{fontFamily:Cn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Cn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Cn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Cn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Cn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Cn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Cn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Cn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Cn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Cn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Cn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Cn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Tn={D1:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Cn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Cn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Cn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Cn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},jn={collections:{base:_n,oneservice:{D1:{fontFamily:Cn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Cn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Cn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Cn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Cn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Cn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Cn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Cn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Cn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Cn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Cn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Cn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Tn},defaultValue:"base"},Wn=e=>t=>{const n=t.theme,r=wn(jn,n[kn.textStyleScheme]);return n.options&&n.options.textStyle?On(r,e,n.options.textStyle):On(r,e)},Pn={D1:{fontFamily:Wn("D1.fontFamily"),fontSize:Wn("D1.fontSize"),fontWeight:Wn("D1.fontWeight"),lineHeight:Wn("D1.lineHeight"),letterSpacing:Wn("D1.letterSpacing")},D2:{fontFamily:Wn("D2.fontFamily"),fontSize:Wn("D2.fontSize"),fontWeight:Wn("D2.fontWeight"),lineHeight:Wn("D2.lineHeight"),letterSpacing:Wn("D2.letterSpacing")},D3:{fontFamily:Wn("D3.fontFamily"),fontSize:Wn("D3.fontSize"),fontWeight:Wn("D3.fontWeight"),lineHeight:Wn("D3.lineHeight"),letterSpacing:Wn("D3.letterSpacing")},D4:{fontFamily:Wn("D4.fontFamily"),fontSize:Wn("D4.fontSize"),fontWeight:Wn("D4.fontWeight"),lineHeight:Wn("D4.lineHeight"),letterSpacing:Wn("D4.letterSpacing")},DBody:{fontFamily:Wn("DBody.fontFamily"),fontSize:Wn("DBody.fontSize"),fontWeight:Wn("DBody.fontWeight"),lineHeight:Wn("DBody.lineHeight"),letterSpacing:Wn("DBody.letterSpacing")},H1:{fontFamily:Wn("H1.fontFamily"),fontSize:Wn("H1.fontSize"),fontWeight:Wn("H1.fontWeight"),lineHeight:Wn("H1.lineHeight"),letterSpacing:Wn("H1.letterSpacing")},H2:{fontFamily:Wn("H2.fontFamily"),fontSize:Wn("H2.fontSize"),fontWeight:Wn("H2.fontWeight"),lineHeight:Wn("H2.lineHeight"),letterSpacing:Wn("H2.letterSpacing")},H3:{fontFamily:Wn("H3.fontFamily"),fontSize:Wn("H3.fontSize"),fontWeight:Wn("H3.fontWeight"),lineHeight:Wn("H3.lineHeight"),letterSpacing:Wn("H3.letterSpacing")},H4:{fontFamily:Wn("H4.fontFamily"),fontSize:Wn("H4.fontSize"),fontWeight:Wn("H4.fontWeight"),lineHeight:Wn("H4.lineHeight"),letterSpacing:Wn("H4.letterSpacing")},H5:{fontFamily:Wn("H5.fontFamily"),fontSize:Wn("H5.fontSize"),fontWeight:Wn("H5.fontWeight"),lineHeight:Wn("H5.lineHeight"),letterSpacing:Wn("H5.letterSpacing")},H6:{fontFamily:Wn("H6.fontFamily"),fontSize:Wn("H6.fontSize"),fontWeight:Wn("H6.fontWeight"),lineHeight:Wn("H6.lineHeight"),letterSpacing:Wn("H6.letterSpacing")},Body:{fontFamily:Wn("Body.fontFamily"),fontSize:Wn("Body.fontSize"),fontWeight:Wn("Body.fontWeight"),lineHeight:Wn("Body.lineHeight"),letterSpacing:Wn("Body.letterSpacing")},BodySmall:{fontFamily:Wn("BodySmall.fontFamily"),fontSize:Wn("BodySmall.fontSize"),fontWeight:Wn("BodySmall.fontWeight"),lineHeight:Wn("BodySmall.lineHeight"),letterSpacing:Wn("BodySmall.letterSpacing")},XSmall:{fontFamily:Wn("XSmall.fontFamily"),fontSize:Wn("XSmall.fontSize"),fontWeight:Wn("XSmall.fontWeight"),lineHeight:Wn("XSmall.lineHeight"),letterSpacing:Wn("XSmall.letterSpacing")}},Rn=[Cn.OpenSans,Cn.PlusJakartaSans],In=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Nn=(e,t)=>n=>{var r;const i=Pn[e].fontFamily(n),a=Pn[e].fontWeight(n),o=Rn.find((e=>Object.values(e).includes(i)));return o?S`
                font-family: ${In(o,t)||In(o,a)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(r=Ln(t)||a)&&void 0!==r?r:"normal"};
        `},Ln=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jn=(e,t,n=!1)=>r=>{const i=Pn[e],a=i.fontSize(r);return S`
            ${Nn(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${S`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Mn=(e=!1,t=!1,n=void 0)=>t?S`
            display: block;
            ${Vn(n)}
        `:e?S`
            display: inline;
        `:S`
            display: block;
            ${Vn(n)}
        `;var Gn;!function(e){e.D1=m.h1`
        ${e=>S`
                ${Jn("D1",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>S`
                ${Jn("D2",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>S`
                ${Jn("D3",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>S`
                ${Jn("D4",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>S`
                ${Jn("DBody",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>S`
                ${Jn("H1",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>S`
                ${Jn("H2",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>S`
                ${Jn("H3",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>S`
                ${Jn("H4",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>S`
                ${Jn("H5",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>S`
                ${Jn("H6",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>S`
                ${Jn("Body",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>S`
                ${Jn("BodySmall",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>S`
                ${Jn("XSmall",e.weight,e.paragraph)}
                color: ${An.Neutral[1]};
                ${Mn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>qn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>qn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gn||(Gn={}));const Xn=m.a`
    ${e=>S`
            ${Jn(e.textStyle,e.weight)}
            color: ${An.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${An.Secondary};

                svg {
                    color: ${An.Secondary};
                }
            }
        `}
`,Un=m(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qn=n=>{var{external:r=!1,children:i}=n,a=v(n,["external","children"]);return e(Xn,Object.assign({},a,{children:[i,r&&t(Un,{})]}))};var Kn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kn||(Kn={}));const Qn=e=>{const{textSize:t}=e||{};return S`
        // Text styling
        ${t&&Jn(t,"regular")}

        strong {
            font-family: ${Cn.OpenSans.Semibold};
            ${t&&Jn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Cn.OpenSans.Semibold};
            ${t&&Jn(t,"semibold")}
            color: ${An.Primary};
            text-decoration: none;

            svg {
                color: ${An.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${An.Secondary};

                svg {
                    color: ${An.Secondary};
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
    `},Yn=m.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=An.Validation.Red.Background(e),n=An.Validation.Red.Border(e);break;case"success":t=An.Validation.Green.Background(e),n=An.Validation.Green.Border(e);break;case"warning":default:t=An.Validation.Orange.Background(e),n=An.Validation.Orange.Border(e);break;case"info":t=An.Validation.Blue.Background(e),n=An.Validation.Blue.Border(e);break;case"description":t=An.Neutral[7](e),n=An.Neutral[4](e)}return S`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${An.Neutral[1]};
    ${e=>"small"===e.$sizeType?Qn({textSize:"H6"}):Qn({textSize:"BodySmall"})}
`,Zn=m.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&S`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=An.Validation.Red.Icon(e);break;case"success":t=An.Validation.Green.Icon(e);break;case"warning":default:t=An.Validation.Orange.Icon(e);break;case"info":t=An.Validation.Blue.Icon(e);break;case"description":t=An.Neutral[4](e)}return S`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,er=m(Gn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?S`
                ${Jn("H6","semibold")}
                margin-top: 0.25rem;
            `:S`
                ${Jn("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${An.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${An.Primary};
    }
`,tr=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,nr=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,rr=m.button`
    ${e=>"small"===e.$sizeType?S`
                ${Jn("H6","semibold")}
            `:S`
                ${Jn("H5","semibold")}
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

    color: ${An.Primary};
`,ir=m(y)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,ar=l=>{var{type:f,className:u,children:d,actionLink:g,actionLinkIcon:p,sizeType:F="default",showIcon:y=!1,customIcon:m,maxCollapsedHeight:S}=l,B=v(l,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[b,H]=s(!1),[$,E]=s(!1),{height:O,ref:w}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,o=e.refreshOptions,l=e.handleWidth,f=void 0===l||l,u=e.handleHeight,d=void 0===u||u,g=e.targetRef,h=e.observerOptions,p=e.onResize,F=c(n),y=c(null),m=null!=g?g:y,S=c(),B=s({width:void 0,height:void 0}),v=B[0],b=B[1];return pe((function(){if(!de()){var e=he(p,b,f,d);S.current=fe((function(t){(f||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!F.current&&!de()&&e({width:r,height:i}),F.current=!1}))}),r,a,o);var t=new window.ResizeObserver(S.current);return m.current&&t.observe(m.current,h),function(){t.disconnect();var e=S.current;e&&e.cancel&&e.cancel()}}}),[r,a,o,f,d,p,h,m.current]),D({ref:m},v)}();h((()=>{k()}),[S,O]);const k=()=>{H(!S),E(z())},z=()=>!!S&&O>S;return e(Yn,Object.assign({className:u,$type:f,$sizeType:F,"data-testid":B["data-testid"]},{children:[y&&t(Zn,Object.assign({$sizeType:F,$type:f},{children:(()=>{if(f&&m)return m;switch(f){case"success":return t(o,{});case"warning":return t(i,{});case"error":return t(r,{});case"info":case"description":return t(a,{});default:return null}})()})),e(tr,{children:[e(nr,Object.assign({$maxCollapsedHeight:z()?S:void 0,$showMore:b,$hasActionLink:!!g},{children:[t("div",Object.assign({ref:w},{children:d})),g&&e(er,Object.assign({"data-testid":"action-link",$type:f,$sizeType:F},g,{children:[g.children,p||t(n,{})]}))]})),$&&e(rr,Object.assign({$sizeType:F,$type:f,type:"button",onClick:()=>H(!b)},{children:["Show ",b?"less":"more",t(ir,{$expanded:b})]}))]})]}))};export{ar as Alert};
//# sourceMappingURL=index.js.map
