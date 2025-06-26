import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as o,useState as i,isValidElement as a,createRef as l,cloneElement as c,PureComponent as s,useEffect as u,useLayoutEffect as f}from"react";import{findDOMNode as d}from"react-dom";import{CrossIcon as p}from"@lifesg/react-icons/cross";import g,{css as m}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var S=function(e,t){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},S(e,t)};var F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},F.apply(this,arguments)};var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var v=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof b&&b&&b.Object===Object&&b,B="object"==typeof self&&self&&self.Object===Object&&self,D=E||B||Function("return this")(),A=D,O=function(){return A.Date.now()},T=/\s/;var w=function(e){for(var t=e.length;t--&&T.test(e.charAt(t)););return t},_=/^\s+/;var k=function(e){return e?e.slice(0,w(e)+1).replace(_,""):e},x=D.Symbol,H=x,C=Object.prototype,R=C.hasOwnProperty,$=C.toString,N=H?H.toStringTag:void 0;var z=function(e){var t=R.call(e,N),n=e[N];try{e[N]=void 0;var r=!0}catch(e){}var o=$.call(e);return r&&(t?e[N]=n:delete e[N]),o},L=Object.prototype.toString;var I=z,P=function(e){return L.call(e)},M=x?x.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?I(e):P(e)},W=function(e){return null!=e&&"object"==typeof e};var V=k,U=v,G=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==j(e)},X=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,q=parseInt;var K=v,Z=O,Q=function(e){if("number"==typeof e)return e;if(G(e))return NaN;if(U(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=U(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=V(e);var n=J.test(e);return n||Y.test(e)?q(e.slice(2),n?2:8):X.test(e)?NaN:+e},ee=Math.max,te=Math.min;var ne=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function g(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=i}function m(){var e=Z();if(g(e))return h(e);l=setTimeout(m,function(e){var n=t-(e-c);return f?te(n,i-(e-s)):n}(e))}function h(e){return l=void 0,d&&r?p(e):(r=o=void 0,a)}function y(){var e=Z(),n=g(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(m,t),u?p(e):a}(c);if(f)return clearTimeout(l),l=setTimeout(m,t),p(c)}return void 0===l&&(l=setTimeout(m,t)),a}return t=Q(t)||0,K(n)&&(u=!!n.leading,i=(f="maxWait"in n)?ee(Q(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},y.flush=function(){return void 0===l?a:h(Z())},y},re=ne,oe=v;var ie=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),re(e,t,{leading:r,maxWait:t,trailing:o})},ae=function(e,t,n,r){switch(t){case"debounce":return ne(e,n,r);case"throttle":return ie(e,n,r);default:return e}},le=function(e){return"function"==typeof e},ce=function(){return"undefined"==typeof window},se=function(e){return e instanceof Element||e instanceof HTMLDocument},ue=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&le(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ce()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ce())return null;if(t)return document.querySelector(t);if(r&&se(r))return r;if(n.targetRef&&se(n.targetRef.current))return n.targetRef.current;var o=d(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=ue(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ce()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return le(t)?"renderProp":le(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ce()||(n.resizeHandler=ae(n.createResizeHandler,o,c,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}S(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ce()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return n.createElement(a,null)}}}(s);var fe=ce()?u:f;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ge=Array.isArray,me="object"==typeof de&&de&&de.Object===Object&&de,he="object"==typeof self&&self&&self.Object===Object&&self,ye=me||he||Function("return this")(),Se=ye.Symbol,Fe=Se,be=Object.prototype,ve=be.hasOwnProperty,Ee=be.toString,Be=Fe?Fe.toStringTag:void 0;var De=function(e){var t=ve.call(e,Be),n=e[Be];try{e[Be]=void 0;var r=!0}catch(e){}var o=Ee.call(e);return r&&(t?e[Be]=n:delete e[Be]),o},Ae=Object.prototype.toString;var Oe=De,Te=function(e){return Ae.call(e)},we=Se?Se.toStringTag:void 0;var _e=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":we&&we in Object(e)?Oe(e):Te(e)};var ke=_e,xe=function(e){return null!=e&&"object"==typeof e};var He=function(e){return"symbol"==typeof e||xe(e)&&"[object Symbol]"==ke(e)},Ce=ge,Re=He,$e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ne=/^\w*$/;var ze=function(e,t){if(Ce(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Re(e))||(Ne.test(e)||!$e.test(e)||null!=t&&e in Object(t))};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ie=_e,Pe=Le;var Me,je=function(e){if(!Pe(e))return!1;var t=Ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},We=ye["__core-js_shared__"],Ve=(Me=/[^.]+$/.exec(We&&We.keys&&We.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Ue=function(e){return!!Ve&&Ve in e},Ge=Function.prototype.toString;var Xe=function(e){if(null!=e){try{return Ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Je=je,Ye=Ue,qe=Le,Ke=Xe,Ze=/^\[object .+?Constructor\]$/,Qe=Function.prototype,et=Object.prototype,tt=Qe.toString,nt=et.hasOwnProperty,rt=RegExp("^"+tt.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(e){return!(!qe(e)||Ye(e))&&(Je(e)?rt:Ze).test(Ke(e))},it=function(e,t){return null==e?void 0:e[t]};var at=function(e,t){var n=it(e,t);return ot(n)?n:void 0},lt=at(Object,"create"),ct=lt;var st=function(){this.__data__=ct?ct(null):{},this.size=0};var ut=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ft=lt,dt=Object.prototype.hasOwnProperty;var pt=function(e){var t=this.__data__;if(ft){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return dt.call(t,e)?t[e]:void 0},gt=lt,mt=Object.prototype.hasOwnProperty;var ht=lt;var yt=st,St=ut,Ft=pt,bt=function(e){var t=this.__data__;return gt?void 0!==t[e]:mt.call(t,e)},vt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ht&&void 0===t?"__lodash_hash_undefined__":t,this};function Et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Et.prototype.clear=yt,Et.prototype.delete=St,Et.prototype.get=Ft,Et.prototype.has=bt,Et.prototype.set=vt;var Bt=Et;var Dt=function(){this.__data__=[],this.size=0};var At=function(e,t){return e===t||e!=e&&t!=t};var Ot=function(e,t){for(var n=e.length;n--;)if(At(e[n][0],t))return n;return-1},Tt=Ot,wt=Array.prototype.splice;var _t=Ot;var kt=Ot;var xt=Ot;var Ht=Dt,Ct=function(e){var t=this.__data__,n=Tt(t,e);return!(n<0)&&(n==t.length-1?t.pop():wt.call(t,n,1),--this.size,!0)},Rt=function(e){var t=this.__data__,n=_t(t,e);return n<0?void 0:t[n][1]},$t=function(e){return kt(this.__data__,e)>-1},Nt=function(e,t){var n=this.__data__,r=xt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function zt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}zt.prototype.clear=Ht,zt.prototype.delete=Ct,zt.prototype.get=Rt,zt.prototype.has=$t,zt.prototype.set=Nt;var Lt=zt,It=at(ye,"Map"),Pt=Bt,Mt=Lt,jt=It;var Wt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Vt=function(e,t){var n=e.__data__;return Wt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ut=Vt;var Gt=Vt;var Xt=Vt;var Jt=Vt;var Yt=function(){this.size=0,this.__data__={hash:new Pt,map:new(jt||Mt),string:new Pt}},qt=function(e){var t=Ut(this,e).delete(e);return this.size-=t?1:0,t},Kt=function(e){return Gt(this,e).get(e)},Zt=function(e){return Xt(this,e).has(e)},Qt=function(e,t){var n=Jt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function en(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}en.prototype.clear=Yt,en.prototype.delete=qt,en.prototype.get=Kt,en.prototype.has=Zt,en.prototype.set=Qt;var tn=en;function nn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(nn.Cache||tn),n}nn.Cache=tn;var rn=nn;var on=function(e){var t=rn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ln=/\\(\\)?/g,cn=on((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(an,(function(e,n,r,o){t.push(r?o.replace(ln,"$1"):n||e)})),t}));var sn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},un=ge,fn=He,dn=Se?Se.prototype:void 0,pn=dn?dn.toString:void 0;var gn=function e(t){if("string"==typeof t)return t;if(un(t))return sn(t,e)+"";if(fn(t))return pn?pn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},mn=gn;var hn=ge,yn=ze,Sn=cn,Fn=function(e){return null==e?"":mn(e)};var bn=He;var vn=function(e,t){return hn(e)?e:yn(e,t)?[e]:Sn(Fn(e))},En=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Bn=function(e,t){for(var n=0,r=(t=vn(t,e)).length;null!=e&&n<r;)e=e[En(t[n++])];return n&&n==r?e:void 0};var Dn=pe((function(e,t,n){var r=null==e?void 0:Bn(e,t);return void 0===r?n:r}));const An=(e,t,n)=>t?Dn(n,t)||Dn(e,t):n||e,On=(e,t)=>{const n=t||e.defaultValue;return Dn(e.collections,n)};var Tn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Tn||(Tn={}));const wn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_n=e=>t=>{const n=t.theme,r=On(wn,n[Tn.colorScheme]);return n.options&&n.options.color?An(r,e,n.options.color):An(r,e)},kn=(_n("Brand.1"),_n("Brand.2"),_n("Brand.3"),_n("Brand.4"),_n("Brand.5"),_n("Brand.6"),_n("Primary")),xn=(_n("PrimaryDark"),_n("Secondary")),Hn=(_n("Accent.Light.1"),_n("Accent.Light.2"),_n("Accent.Light.3"),_n("Accent.Light.4"),_n("Accent.Light.5"),_n("Accent.Light.6"),_n("Accent.Dark.1"),_n("Accent.Dark.2"),_n("Accent.Dark.3"),{1:_n("Neutral.1"),2:_n("Neutral.2"),3:_n("Neutral.3"),4:_n("Neutral.4"),5:_n("Neutral.5"),6:_n("Neutral.6"),7:_n("Neutral.7"),8:_n("Neutral.8")}),Cn={Green:{Text:_n("Validation.Green.Text"),Icon:_n("Validation.Green.Icon"),Border:_n("Validation.Green.Border"),Background:_n("Validation.Green.Background")},Orange:{Text:_n("Validation.Orange.Text"),Icon:_n("Validation.Orange.Icon"),Border:_n("Validation.Orange.Border"),Background:_n("Validation.Orange.Background"),Badge:_n("Validation.Orange.Badge")},Red:{Text:_n("Validation.Red.Text"),Icon:_n("Validation.Red.Icon"),Border:_n("Validation.Red.Border"),Background:_n("Validation.Red.Background")},Blue:{Text:_n("Validation.Blue.Text"),Icon:_n("Validation.Blue.Icon"),Border:_n("Validation.Blue.Border"),Background:_n("Validation.Blue.Background")}},Rn=(_n("Shadow.Accent"),_n("Shadow.Red"),_n("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),$n=e=>Object.keys(Rn).reduce(((t,n)=>{const r=Rn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nn=$n("max-width"),zn=($n("min-width"),g.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return m`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Nn.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Nn.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Ln=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=y(t,["mobileCols","tabletCols","desktopCols"]);return e(zn,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=In(i||o||r),a=In(e),l=In(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),In=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Pn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,l=y(t,["children","data-testid","type","stretch"]);return e(Mn,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),Mn=g.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?m`
                padding: 0 3rem;
            `:m`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Nn.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Nn.tablet} {
        max-width: 720px;
    }
    ${Nn.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return m`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Nn.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Nn.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return m`
                    display: flex;
                    flex-direction: column;
                `;default:return m`
                    display: flex;
                `}}}
`,jn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=y(t,["children","data-testid","stretch"]);return e(Wn,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Wn=g.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?m`
                ${Nn.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:m`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Vn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=t,c=y(t,["children","data-testid","className","type","stretch"]);return e(jn,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:e(Pn,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Un={Section:jn,Container:Pn,Content:Vn,ColDiv:Ln},Gn=g.button`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${Hn[7]};
            `}
    }
`,Xn=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=y(t,["children","focusHighlight","focusOutline","type"]);return e(Gn,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Jn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Yn={D1:{fontFamily:Jn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},qn={D1:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Jn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Jn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Jn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Jn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Jn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Kn={collections:{base:Yn,oneservice:{D1:{fontFamily:Jn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Jn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Jn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Jn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Jn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Jn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Jn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Jn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Jn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Jn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Jn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Jn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:qn},defaultValue:"base"},Zn=e=>t=>{const n=t.theme,r=On(Kn,n[Tn.textStyleScheme]);return n.options&&n.options.textStyle?An(r,e,n.options.textStyle):An(r,e)},Qn={D1:{fontFamily:Zn("D1.fontFamily"),fontSize:Zn("D1.fontSize"),fontWeight:Zn("D1.fontWeight"),lineHeight:Zn("D1.lineHeight"),letterSpacing:Zn("D1.letterSpacing"),fontVariant:Zn("D1.fontVariant")},D2:{fontFamily:Zn("D2.fontFamily"),fontSize:Zn("D2.fontSize"),fontWeight:Zn("D2.fontWeight"),lineHeight:Zn("D2.lineHeight"),letterSpacing:Zn("D2.letterSpacing"),fontVariant:Zn("D2.fontVariant")},D3:{fontFamily:Zn("D3.fontFamily"),fontSize:Zn("D3.fontSize"),fontWeight:Zn("D3.fontWeight"),lineHeight:Zn("D3.lineHeight"),letterSpacing:Zn("D3.letterSpacing"),fontVariant:Zn("D3.fontVariant")},D4:{fontFamily:Zn("D4.fontFamily"),fontSize:Zn("D4.fontSize"),fontWeight:Zn("D4.fontWeight"),lineHeight:Zn("D4.lineHeight"),letterSpacing:Zn("D4.letterSpacing"),fontVariant:Zn("D4.fontVariant")},DBody:{fontFamily:Zn("DBody.fontFamily"),fontSize:Zn("DBody.fontSize"),fontWeight:Zn("DBody.fontWeight"),lineHeight:Zn("DBody.lineHeight"),letterSpacing:Zn("DBody.letterSpacing"),fontVariant:Zn("DBody.fontVariant")},H1:{fontFamily:Zn("H1.fontFamily"),fontSize:Zn("H1.fontSize"),fontWeight:Zn("H1.fontWeight"),lineHeight:Zn("H1.lineHeight"),letterSpacing:Zn("H1.letterSpacing"),fontVariant:Zn("H1.fontVariant")},H2:{fontFamily:Zn("H2.fontFamily"),fontSize:Zn("H2.fontSize"),fontWeight:Zn("H2.fontWeight"),lineHeight:Zn("H2.lineHeight"),letterSpacing:Zn("H2.letterSpacing"),fontVariant:Zn("H2.fontVariant")},H3:{fontFamily:Zn("H3.fontFamily"),fontSize:Zn("H3.fontSize"),fontWeight:Zn("H3.fontWeight"),lineHeight:Zn("H3.lineHeight"),letterSpacing:Zn("H3.letterSpacing"),fontVariant:Zn("H3.fontVariant")},H4:{fontFamily:Zn("H4.fontFamily"),fontSize:Zn("H4.fontSize"),fontWeight:Zn("H4.fontWeight"),lineHeight:Zn("H4.lineHeight"),letterSpacing:Zn("H4.letterSpacing"),fontVariant:Zn("H4.fontVariant")},H5:{fontFamily:Zn("H5.fontFamily"),fontSize:Zn("H5.fontSize"),fontWeight:Zn("H5.fontWeight"),lineHeight:Zn("H5.lineHeight"),letterSpacing:Zn("H5.letterSpacing"),fontVariant:Zn("H5.fontVariant")},H6:{fontFamily:Zn("H6.fontFamily"),fontSize:Zn("H6.fontSize"),fontWeight:Zn("H6.fontWeight"),lineHeight:Zn("H6.lineHeight"),letterSpacing:Zn("H6.letterSpacing"),fontVariant:Zn("H6.fontVariant")},Body:{fontFamily:Zn("Body.fontFamily"),fontSize:Zn("Body.fontSize"),fontWeight:Zn("Body.fontWeight"),lineHeight:Zn("Body.lineHeight"),letterSpacing:Zn("Body.letterSpacing"),fontVariant:Zn("Body.fontVariant")},BodySmall:{fontFamily:Zn("BodySmall.fontFamily"),fontSize:Zn("BodySmall.fontSize"),fontWeight:Zn("BodySmall.fontWeight"),lineHeight:Zn("BodySmall.lineHeight"),letterSpacing:Zn("BodySmall.letterSpacing"),fontVariant:Zn("BodySmall.fontVariant")},XSmall:{fontFamily:Zn("XSmall.fontFamily"),fontSize:Zn("XSmall.fontSize"),fontWeight:Zn("XSmall.fontWeight"),lineHeight:Zn("XSmall.lineHeight"),letterSpacing:Zn("XSmall.letterSpacing"),fontVariant:Zn("XSmall.fontVariant")}},er=[Jn.OpenSans,Jn.PlusJakartaSans],tr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},nr=(e,t)=>n=>{var r;const o=Qn[e].fontFamily(n),i=Qn[e].fontWeight(n),a=er.find((e=>Object.values(e).includes(o)));return a?m`
                font-family: ${tr(a,t)||tr(a,i)||o};
                font-weight: normal !important;
            `:m`
            font-family: ${o};
            font-weight: ${null!==(r=rr(t)||i)&&void 0!==r?r:"normal"};
        `},rr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},or=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ir=nr,ar=(e,t,n=!1)=>r=>{const o=Qn[e],i=o.fontSize(r);return m`
            ${nr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${m`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},lr=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${or(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${or(n)}
        `;var cr;!function(e){e.D1=g.h1`
        ${e=>m`
                ${ar("D1",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=g.h1`
        ${e=>m`
                ${ar("D2",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=g.h1`
        ${e=>m`
                ${ar("D3",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=g.h1`
        ${e=>m`
                ${ar("D4",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=g.h1`
        ${e=>m`
                ${ar("DBody",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=g.h1`
        ${e=>m`
                ${ar("H1",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=g.h2`
        ${e=>m`
                ${ar("H2",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=g.h3`
        ${e=>m`
                ${ar("H3",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=g.h4`
        ${e=>m`
                ${ar("H4",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=g.h5`
        ${e=>m`
                ${ar("H5",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=g.h6`
        ${e=>m`
                ${ar("H6",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=g.p`
        ${e=>m`
                ${ar("Body",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=g.p`
        ${e=>m`
                ${ar("BodySmall",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=g.span`
        ${e=>m`
                ${ar("XSmall",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${lr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>fr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>fr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(cr||(cr={}));const sr=g.a`
    ${e=>m`
            ${ar(e.textStyle,e.weight)}
            color: ${kn};
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
`,ur=g(h)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,fr=n=>{var{external:r=!1,children:o}=n,i=y(n,["external","children"]);return t(sr,Object.assign({},i,{children:[o,r&&e(ur,{})]}))};var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const pr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",gr=m`
    color: ${Cn.Orange.Icon};

    svg {
        color: ${Cn.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Cn.Orange.Icon};
        svg {
            color: ${Cn.Orange.Icon};
        }
    }
`,mr=g.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${pr};
    background: ${Hn[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,hr=g(Un.Content)`
    display: flex;
`,yr=g.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,Sr=g.div`
    display: inline-block;
    width: 100%;

    ${ar("Body","regular")}
    color: ${Hn[8]};

    p {
        display: inline-block;
    }

    strong {
        ${ir("Body","semibold")}
        color: ${Hn[8]};
    }

    a {
        ${ar("Body","regular")}
        ${gr}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return m`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,Fr=g(cr.Hyperlink.Default)`
    position: relative;

    ${gr}
`,br=g(Xn)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,vr=g(p)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Hn[8]};
`,Er=g.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Cn.Orange.Icon};
    ${ar("BodySmall","semibold")};

    cursor: pointer;
`,Br=g.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,Dr=n=>{var{children:r,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:s,id:f,forwardedRef:d,maxCollapsedHeight:p,onClick:g,actionButton:m}=n,h=y(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const S=h["data-testid"],[b,v]=i(a),{height:E,ref:B}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,f=e.handleHeight,d=void 0===f||f,p=e.targetRef,g=e.observerOptions,m=e.onResize,h=o(n),y=o(null),S=null!=p?p:y,b=o(),v=i({width:void 0,height:void 0}),E=v[0],B=v[1];return fe((function(){if(!ce()){var e=ue(m,B,u,d);b.current=ae((function(t){(u||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!h.current&&!ce()&&e({width:r,height:o}),h.current=!1}))}),r,l,c);var t=new window.ResizeObserver(b.current);return S.current&&t.observe(S.current,g),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,d,m,g,S.current]),F({ref:S},E)}();u((()=>{v(a)}),[a]);const D=e=>{e.stopPropagation(),v(!1),l&&s&&s()},A=e=>{m.onClick&&(e.stopPropagation(),m.onClick(e))};if(!b)return null;return t(mr,Object.assign({ref:d,$sticky:c,$clickable:!!g,onClick:g},h,{children:[t(hr,Object.assign({id:Ar("container",f)},{children:[t(yr,{children:[e(Sr,Object.assign({"data-testid":Ar("text-content",S),$maxCollapsedHeight:p&&E>p?p:void 0},{children:e("div",Object.assign({ref:B},{children:r}))})),m&&e(Er,Object.assign({id:Ar("action-button",f),"data-testid":Ar("action-button",S),type:"button"},m,{onClick:A},{children:m.children}))]}),l&&e(br,Object.assign({onClick:D,id:Ar("dismiss-button",f),"data-testid":Ar("dismiss-button",S),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(vr,{"aria-hidden":!0})}))]})),g&&e(Br,{"aria-label":"Clickable banner",type:"button"})]}))},Ar=(e,t="wrapper")=>`${t}-${e}`,Or=r.forwardRef(((t,n)=>e(Dr,Object.assign({},t,{forwardedRef:n})))),Tr=Object.assign(Or,{Link:Fr}),{entries:wr,setPrototypeOf:_r,isFrozen:kr,getPrototypeOf:xr,getOwnPropertyDescriptor:Hr}=Object;let{freeze:Cr,seal:Rr,create:$r}=Object,{apply:Nr,construct:zr}="undefined"!=typeof Reflect&&Reflect;Cr||(Cr=function(e){return e}),Rr||(Rr=function(e){return e}),Nr||(Nr=function(e,t,n){return e.apply(t,n)}),zr||(zr=function(e,t){return new e(...t)});const Lr=Qr(Array.prototype.forEach),Ir=Qr(Array.prototype.lastIndexOf),Pr=Qr(Array.prototype.pop),Mr=Qr(Array.prototype.push),jr=Qr(Array.prototype.splice),Wr=Qr(String.prototype.toLowerCase),Vr=Qr(String.prototype.toString),Ur=Qr(String.prototype.match),Gr=Qr(String.prototype.replace),Xr=Qr(String.prototype.indexOf),Jr=Qr(String.prototype.trim),Yr=Qr(Object.prototype.hasOwnProperty),qr=Qr(RegExp.prototype.test),Kr=(Zr=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return zr(Zr,t)});var Zr;function Qr(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Nr(e,t,r)}}function eo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Wr;_r&&_r(e,null);let r=t.length;for(;r--;){let o=t[r];if("string"==typeof o){const e=n(o);e!==o&&(kr(t)||(t[r]=e),o=e)}e[o]=!0}return e}function to(e){for(let t=0;t<e.length;t++){Yr(e,t)||(e[t]=null)}return e}function no(e){const t=$r(null);for(const[n,r]of wr(e)){Yr(e,n)&&(Array.isArray(r)?t[n]=to(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=no(r):t[n]=r)}return t}function ro(e,t){for(;null!==e;){const n=Hr(e,t);if(n){if(n.get)return Qr(n.get);if("function"==typeof n.value)return Qr(n.value)}e=xr(e)}return function(){return null}}const oo=Cr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),io=Cr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ao=Cr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),lo=Cr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),co=Cr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),so=Cr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),uo=Cr(["#text"]),fo=Cr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),po=Cr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),go=Cr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mo=Cr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ho=Rr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),yo=Rr(/<%[\w\W]*|[\w\W]*%>/gm),So=Rr(/\$\{[\w\W]*/gm),Fo=Rr(/^data-[\-\w.\u00B7-\uFFFF]+$/),bo=Rr(/^aria-[\-\w]+$/),vo=Rr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Eo=Rr(/^(?:\w+script|data):/i),Bo=Rr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Do=Rr(/^html$/i),Ao=Rr(/^[a-z][.\w]*(-[.\w]+)+$/i);var Oo=Object.freeze({__proto__:null,ARIA_ATTR:bo,ATTR_WHITESPACE:Bo,CUSTOM_ELEMENT:Ao,DATA_ATTR:Fo,DOCTYPE_NAME:Do,ERB_EXPR:yo,IS_ALLOWED_URI:vo,IS_SCRIPT_OR_DATA:Eo,MUSTACHE_EXPR:ho,TMPLIT_EXPR:So});const To=1,wo=3,_o=7,ko=8,xo=9,Ho=function(){return"undefined"==typeof window?null:window};var Co=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ho();const n=t=>e(t);if(n.version="3.2.6",n.removed=[],!t||!t.document||t.document.nodeType!==xo||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const o=r,i=o.currentScript,{DocumentFragment:a,HTMLTemplateElement:l,Node:c,Element:s,NodeFilter:u,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:p,trustedTypes:g}=t,m=s.prototype,h=ro(m,"cloneNode"),y=ro(m,"remove"),S=ro(m,"nextSibling"),F=ro(m,"childNodes"),b=ro(m,"parentNode");if("function"==typeof l){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let v,E="";const{implementation:B,createNodeIterator:D,createDocumentFragment:A,getElementsByTagName:O}=r,{importNode:T}=o;let w={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof wr&&"function"==typeof b&&B&&void 0!==B.createHTMLDocument;const{MUSTACHE_EXPR:_,ERB_EXPR:k,TMPLIT_EXPR:x,DATA_ATTR:H,ARIA_ATTR:C,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:N}=Oo;let{IS_ALLOWED_URI:z}=Oo,L=null;const I=eo({},[...oo,...io,...ao,...co,...uo]);let P=null;const M=eo({},[...fo,...po,...go,...mo]);let j=Object.seal($r(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,U=!0,G=!0,X=!1,J=!0,Y=!1,q=!0,K=!1,Z=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!0,oe=!1,ie=!0,ae=!1,le={},ce=null;const se=eo({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ue=null;const fe=eo({},["audio","video","img","source","image","track"]);let de=null;const pe=eo({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ge="http://www.w3.org/1998/Math/MathML",me="http://www.w3.org/2000/svg",he="http://www.w3.org/1999/xhtml";let ye=he,Se=!1,Fe=null;const be=eo({},[ge,me,he],Vr);let ve=eo({},["mi","mo","mn","ms","mtext"]),Ee=eo({},["annotation-xml"]);const Be=eo({},["title","style","font","a","script"]);let De=null;const Ae=["application/xhtml+xml","text/html"];let Oe=null,Te=null;const we=r.createElement("form"),_e=function(e){return e instanceof RegExp||e instanceof Function},ke=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Te||Te!==e){if(e&&"object"==typeof e||(e={}),e=no(e),De=-1===Ae.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Oe="application/xhtml+xml"===De?Vr:Wr,L=Yr(e,"ALLOWED_TAGS")?eo({},e.ALLOWED_TAGS,Oe):I,P=Yr(e,"ALLOWED_ATTR")?eo({},e.ALLOWED_ATTR,Oe):M,Fe=Yr(e,"ALLOWED_NAMESPACES")?eo({},e.ALLOWED_NAMESPACES,Vr):be,de=Yr(e,"ADD_URI_SAFE_ATTR")?eo(no(pe),e.ADD_URI_SAFE_ATTR,Oe):pe,ue=Yr(e,"ADD_DATA_URI_TAGS")?eo(no(fe),e.ADD_DATA_URI_TAGS,Oe):fe,ce=Yr(e,"FORBID_CONTENTS")?eo({},e.FORBID_CONTENTS,Oe):se,W=Yr(e,"FORBID_TAGS")?eo({},e.FORBID_TAGS,Oe):no({}),V=Yr(e,"FORBID_ATTR")?eo({},e.FORBID_ATTR,Oe):no({}),le=!!Yr(e,"USE_PROFILES")&&e.USE_PROFILES,U=!1!==e.ALLOW_ARIA_ATTR,G=!1!==e.ALLOW_DATA_ATTR,X=e.ALLOW_UNKNOWN_PROTOCOLS||!1,J=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Y=e.SAFE_FOR_TEMPLATES||!1,q=!1!==e.SAFE_FOR_XML,K=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Q=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,oe=e.SANITIZE_NAMED_PROPS||!1,ie=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,z=e.ALLOWED_URI_REGEXP||vo,ye=e.NAMESPACE||he,ve=e.MATHML_TEXT_INTEGRATION_POINTS||ve,Ee=e.HTML_INTEGRATION_POINTS||Ee,j=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(j.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&_e(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(j.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(j.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Y&&(G=!1),te&&(ee=!0),le&&(L=eo({},uo),P=[],!0===le.html&&(eo(L,oo),eo(P,fo)),!0===le.svg&&(eo(L,io),eo(P,po),eo(P,mo)),!0===le.svgFilters&&(eo(L,ao),eo(P,po),eo(P,mo)),!0===le.mathMl&&(eo(L,co),eo(P,go),eo(P,mo))),e.ADD_TAGS&&(L===I&&(L=no(L)),eo(L,e.ADD_TAGS,Oe)),e.ADD_ATTR&&(P===M&&(P=no(P)),eo(P,e.ADD_ATTR,Oe)),e.ADD_URI_SAFE_ATTR&&eo(de,e.ADD_URI_SAFE_ATTR,Oe),e.FORBID_CONTENTS&&(ce===se&&(ce=no(ce)),eo(ce,e.FORBID_CONTENTS,Oe)),ie&&(L["#text"]=!0),K&&eo(L,["html","head","body"]),L.table&&(eo(L,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');v=e.TRUSTED_TYPES_POLICY,E=v.createHTML("")}else void 0===v&&(v=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(g,i)),null!==v&&"string"==typeof E&&(E=v.createHTML(""));Cr&&Cr(e),Te=e}},xe=eo({},[...io,...ao,...lo]),He=eo({},[...co,...so]),Ce=function(e){Mr(n.removed,{element:e});try{b(e).removeChild(e)}catch(t){y(e)}},Re=function(e,t){try{Mr(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Mr(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Ce(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},$e=function(e){let t=null,n=null;if(Q)e="<remove></remove>"+e;else{const t=Ur(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===De&&ye===he&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=v?v.createHTML(e):e;if(ye===he)try{t=(new p).parseFromString(o,De)}catch(e){}if(!t||!t.documentElement){t=B.createDocument(ye,"template",null);try{t.documentElement.innerHTML=Se?E:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),ye===he?O.call(t,K?"html":"body")[0]:K?t.documentElement:i},Ne=function(e){return D.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},ze=function(e){return e instanceof d&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Le=function(e){return"function"==typeof c&&e instanceof c};function Ie(e,t,r){Lr(e,(e=>{e.call(n,t,r,Te)}))}const Pe=function(e){let t=null;if(Ie(w.beforeSanitizeElements,e,null),ze(e))return Ce(e),!0;const r=Oe(e.nodeName);if(Ie(w.uponSanitizeElement,e,{tagName:r,allowedTags:L}),q&&e.hasChildNodes()&&!Le(e.firstElementChild)&&qr(/<[/\w!]/g,e.innerHTML)&&qr(/<[/\w!]/g,e.textContent))return Ce(e),!0;if(e.nodeType===_o)return Ce(e),!0;if(q&&e.nodeType===ko&&qr(/<[/\w]/g,e.data))return Ce(e),!0;if(!L[r]||W[r]){if(!W[r]&&je(r)){if(j.tagNameCheck instanceof RegExp&&qr(j.tagNameCheck,r))return!1;if(j.tagNameCheck instanceof Function&&j.tagNameCheck(r))return!1}if(ie&&!ce[r]){const t=b(e)||e.parentNode,n=F(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const o=h(n[r],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,S(e))}}}return Ce(e),!0}return e instanceof s&&!function(e){let t=b(e);t&&t.tagName||(t={namespaceURI:ye,tagName:"template"});const n=Wr(e.tagName),r=Wr(t.tagName);return!!Fe[e.namespaceURI]&&(e.namespaceURI===me?t.namespaceURI===he?"svg"===n:t.namespaceURI===ge?"svg"===n&&("annotation-xml"===r||ve[r]):Boolean(xe[n]):e.namespaceURI===ge?t.namespaceURI===he?"math"===n:t.namespaceURI===me?"math"===n&&Ee[r]:Boolean(He[n]):e.namespaceURI===he?!(t.namespaceURI===me&&!Ee[r])&&!(t.namespaceURI===ge&&!ve[r])&&!He[n]&&(Be[n]||!xe[n]):!("application/xhtml+xml"!==De||!Fe[e.namespaceURI]))}(e)?(Ce(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!qr(/<\/no(script|embed|frames)/i,e.innerHTML)?(Y&&e.nodeType===wo&&(t=e.textContent,Lr([_,k,x],(e=>{t=Gr(t,e," ")})),e.textContent!==t&&(Mr(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ie(w.afterSanitizeElements,e,null),!1):(Ce(e),!0)},Me=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in we))return!1;if(G&&!V[t]&&qr(H,t));else if(U&&qr(C,t));else if(!P[t]||V[t]){if(!(je(e)&&(j.tagNameCheck instanceof RegExp&&qr(j.tagNameCheck,e)||j.tagNameCheck instanceof Function&&j.tagNameCheck(e))&&(j.attributeNameCheck instanceof RegExp&&qr(j.attributeNameCheck,t)||j.attributeNameCheck instanceof Function&&j.attributeNameCheck(t))||"is"===t&&j.allowCustomizedBuiltInElements&&(j.tagNameCheck instanceof RegExp&&qr(j.tagNameCheck,n)||j.tagNameCheck instanceof Function&&j.tagNameCheck(n))))return!1}else if(de[t]);else if(qr(z,Gr(n,$,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Xr(n,"data:")||!ue[e]){if(X&&!qr(R,Gr(n,$,"")));else if(n)return!1}else;return!0},je=function(e){return"annotation-xml"!==e&&Ur(e,N)},We=function(e){Ie(w.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||ze(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0};let o=t.length;for(;o--;){const i=t[o],{name:a,namespaceURI:l,value:c}=i,s=Oe(a),u=c;let f="value"===a?u:Jr(u);if(r.attrName=s,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,Ie(w.uponSanitizeAttribute,e,r),f=r.attrValue,!oe||"id"!==s&&"name"!==s||(Re(a,e),f="user-content-"+f),q&&qr(/((--!?|])>)|<\/(style|title)/i,f)){Re(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Re(a,e);continue}if(!J&&qr(/\/>/i,f)){Re(a,e);continue}Y&&Lr([_,k,x],(e=>{f=Gr(f,e," ")}));const d=Oe(e.nodeName);if(Me(d,s,f)){if(v&&"object"==typeof g&&"function"==typeof g.getAttributeType)if(l);else switch(g.getAttributeType(d,s)){case"TrustedHTML":f=v.createHTML(f);break;case"TrustedScriptURL":f=v.createScriptURL(f)}if(f!==u)try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),ze(e)?Ce(e):Pr(n.removed)}catch(t){Re(a,e)}}else Re(a,e)}Ie(w.afterSanitizeAttributes,e,null)},Ve=function e(t){let n=null;const r=Ne(t);for(Ie(w.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Ie(w.uponSanitizeShadowNode,n,null),Pe(n),We(n),n.content instanceof a&&e(n.content);Ie(w.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,i=null,l=null,s=null;if(Se=!e,Se&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Le(e)){if("function"!=typeof e.toString)throw Kr("toString is not a function");if("string"!=typeof(e=e.toString()))throw Kr("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Z||ke(t),n.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=Oe(e.nodeName);if(!L[t]||W[t])throw Kr("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)r=$e("\x3c!----\x3e"),i=r.ownerDocument.importNode(e,!0),i.nodeType===To&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!ee&&!Y&&!K&&-1===e.indexOf("<"))return v&&ne?v.createHTML(e):e;if(r=$e(e),!r)return ee?null:ne?E:""}r&&Q&&Ce(r.firstChild);const u=Ne(ae?e:r);for(;l=u.nextNode();)Pe(l),We(l),l.content instanceof a&&Ve(l.content);if(ae)return e;if(ee){if(te)for(s=A.call(r.ownerDocument);r.firstChild;)s.appendChild(r.firstChild);else s=r;return(P.shadowroot||P.shadowrootmode)&&(s=T.call(o,s,!0)),s}let f=K?r.outerHTML:r.innerHTML;return K&&L["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&qr(Do,r.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+f),Y&&Lr([_,k,x],(e=>{f=Gr(f,e," ")})),v&&ne?v.createHTML(f):f},n.setConfig=function(){ke(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Z=!0},n.clearConfig=function(){Te=null,Z=!1},n.isValidAttribute=function(e,t,n){Te||ke({});const r=Oe(e),o=Oe(t);return Me(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&Mr(w[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=Ir(w[e],t);return-1===n?void 0:jr(w[e],n,1)[0]}return Pr(w[e])},n.removeHooks=function(e){w[e]=[]},n.removeAllHooks=function(){w={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const Ro=t=>r.forwardRef(((n,r)=>e(Dr,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=Co.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:o}}),n)}{const r=t.otherAttributes;return e(Tr.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{Dr as NBComponent,Tr as NotificationBanner,Ro as withNotificationBanner};
//# sourceMappingURL=index.js.map
