import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as o,useState as i,isValidElement as a,createRef as l,cloneElement as c,PureComponent as s,useEffect as u,useLayoutEffect as d}from"react";import{findDOMNode as f}from"react-dom";import{CrossIcon as p}from"@lifesg/react-icons/cross";import m,{css as h}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var v=function(e,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},v(e,t)};var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof F&&F&&F.Object===Object&&F,D="object"==typeof self&&self&&self.Object===Object&&self,B=E||D||Function("return this")(),w=B,A=function(){return w.Date.now()},O=/\s/;var x=function(e){for(var t=e.length;t--&&O.test(e.charAt(t)););return t},T=/^\s+/;var _=function(e){return e?e.slice(0,x(e)+1).replace(T,""):e},k=B.Symbol,C=k,$=Object.prototype,H=$.hasOwnProperty,N=$.toString,R=C?C.toStringTag:void 0;var L=function(e){var t=H.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch(e){}var o=N.call(e);return r&&(t?e[R]=n:delete e[R]),o},z=Object.prototype.toString;var j=L,I=function(e){return z.call(e)},M=k?k.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?j(e):I(e)},P=function(e){return null!=e&&"object"==typeof e};var U=_,G=S,V=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==W(e)},X=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,K=parseInt;var Z=S,J=A,Q=function(e){if("number"==typeof e)return e;if(V(e))return NaN;if(G(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=G(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=U(e);var n=q.test(e);return n||Y.test(e)?K(e.slice(2),n?2:8):X.test(e)?NaN:+e},ee=Math.max,te=Math.min;var ne=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function h(){var e=J();if(m(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-c);return d?te(n,i-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=J(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(h,t),u?p(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(h,t),p(c)}return void 0===l&&(l=setTimeout(h,t)),a}return t=Q(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ee(Q(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},y.flush=function(){return void 0===l?a:g(J())},y},re=ne,oe=S;var ie=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),re(e,t,{leading:r,maxWait:t,trailing:o})},ae=function(e,t,n,r){switch(t){case"debounce":return ne(e,n,r);case"throttle":return ie(e,n,r);default:return e}},le=function(e){return"function"==typeof e},ce=function(){return"undefined"==typeof window},se=function(e){return e instanceof Element||e instanceof HTMLDocument},ue=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&le(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ce()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ce())return null;if(t)return document.querySelector(t);if(r&&se(r))return r;if(n.targetRef&&se(n.targetRef.current))return n.targetRef.current;var o=f(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=ue(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ce()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return le(t)?"renderProp":le(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ce()||(n.resizeHandler=ae(n.createResizeHandler,o,c,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ce()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return n.createElement(a,null)}}}(s);var de=ce()?u:d;var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me=Array.isArray,he="object"==typeof fe&&fe&&fe.Object===Object&&fe,ge="object"==typeof self&&self&&self.Object===Object&&self,ye=he||ge||Function("return this")(),ve=ye.Symbol,be=ve,Fe=Object.prototype,Se=Fe.hasOwnProperty,Ee=Fe.toString,De=be?be.toStringTag:void 0;var Be=function(e){var t=Se.call(e,De),n=e[De];try{e[De]=void 0;var r=!0}catch(e){}var o=Ee.call(e);return r&&(t?e[De]=n:delete e[De]),o},we=Object.prototype.toString;var Ae=Be,Oe=function(e){return we.call(e)},xe=ve?ve.toStringTag:void 0;var Te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xe&&xe in Object(e)?Ae(e):Oe(e)};var _e=Te,ke=function(e){return null!=e&&"object"==typeof e};var Ce=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==_e(e)},$e=me,He=Ce,Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/;var Le=function(e,t){if($e(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!He(e))||(Re.test(e)||!Ne.test(e)||null!=t&&e in Object(t))};var ze=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},je=Te,Ie=ze;var Me,We=function(e){if(!Ie(e))return!1;var t=je(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Pe=ye["__core-js_shared__"],Ue=(Me=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Ge=function(e){return!!Ue&&Ue in e},Ve=Function.prototype.toString;var Xe=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},qe=We,Ye=Ge,Ke=ze,Ze=Xe,Je=/^\[object .+?Constructor\]$/,Qe=Function.prototype,et=Object.prototype,tt=Qe.toString,nt=et.hasOwnProperty,rt=RegExp("^"+tt.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ot=function(e){return!(!Ke(e)||Ye(e))&&(qe(e)?rt:Je).test(Ze(e))},it=function(e,t){return null==e?void 0:e[t]};var at=function(e,t){var n=it(e,t);return ot(n)?n:void 0},lt=at(Object,"create"),ct=lt;var st=function(){this.__data__=ct?ct(null):{},this.size=0};var ut=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},dt=lt,ft=Object.prototype.hasOwnProperty;var pt=function(e){var t=this.__data__;if(dt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(t,e)?t[e]:void 0},mt=lt,ht=Object.prototype.hasOwnProperty;var gt=lt;var yt=st,vt=ut,bt=pt,Ft=function(e){var t=this.__data__;return mt?void 0!==t[e]:ht.call(t,e)},St=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=gt&&void 0===t?"__lodash_hash_undefined__":t,this};function Et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Et.prototype.clear=yt,Et.prototype.delete=vt,Et.prototype.get=bt,Et.prototype.has=Ft,Et.prototype.set=St;var Dt=Et;var Bt=function(){this.__data__=[],this.size=0};var wt=function(e,t){return e===t||e!=e&&t!=t};var At=function(e,t){for(var n=e.length;n--;)if(wt(e[n][0],t))return n;return-1},Ot=At,xt=Array.prototype.splice;var Tt=At;var _t=At;var kt=At;var Ct=Bt,$t=function(e){var t=this.__data__,n=Ot(t,e);return!(n<0)&&(n==t.length-1?t.pop():xt.call(t,n,1),--this.size,!0)},Ht=function(e){var t=this.__data__,n=Tt(t,e);return n<0?void 0:t[n][1]},Nt=function(e){return _t(this.__data__,e)>-1},Rt=function(e,t){var n=this.__data__,r=kt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Lt.prototype.clear=Ct,Lt.prototype.delete=$t,Lt.prototype.get=Ht,Lt.prototype.has=Nt,Lt.prototype.set=Rt;var zt=Lt,jt=at(ye,"Map"),It=Dt,Mt=zt,Wt=jt;var Pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ut=function(e,t){var n=e.__data__;return Pt(t)?n["string"==typeof t?"string":"hash"]:n.map},Gt=Ut;var Vt=Ut;var Xt=Ut;var qt=Ut;var Yt=function(){this.size=0,this.__data__={hash:new It,map:new(Wt||Mt),string:new It}},Kt=function(e){var t=Gt(this,e).delete(e);return this.size-=t?1:0,t},Zt=function(e){return Vt(this,e).get(e)},Jt=function(e){return Xt(this,e).has(e)},Qt=function(e,t){var n=qt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function en(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}en.prototype.clear=Yt,en.prototype.delete=Kt,en.prototype.get=Zt,en.prototype.has=Jt,en.prototype.set=Qt;var tn=en;function nn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(nn.Cache||tn),n}nn.Cache=tn;var rn=nn;var on=function(e){var t=rn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ln=/\\(\\)?/g,cn=on((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(an,(function(e,n,r,o){t.push(r?o.replace(ln,"$1"):n||e)})),t}));var sn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},un=me,dn=Ce,fn=ve?ve.prototype:void 0,pn=fn?fn.toString:void 0;var mn=function e(t){if("string"==typeof t)return t;if(un(t))return sn(t,e)+"";if(dn(t))return pn?pn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},hn=mn;var gn=me,yn=Le,vn=cn,bn=function(e){return null==e?"":hn(e)};var Fn=Ce;var Sn=function(e,t){return gn(e)?e:yn(e,t)?[e]:vn(bn(e))},En=function(e){if("string"==typeof e||Fn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Dn=function(e,t){for(var n=0,r=(t=Sn(t,e)).length;null!=e&&n<r;)e=e[En(t[n++])];return n&&n==r?e:void 0};var Bn=pe((function(e,t,n){var r=null==e?void 0:Dn(e,t);return void 0===r?n:r}));const wn=(e,t,n)=>t?Bn(n,t)||Bn(e,t):n||e,An=(e,t)=>{const n=t||e.defaultValue;return Bn(e.collections,n)};var On;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(On||(On={}));const xn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tn=e=>t=>{const n=t.theme,r=An(xn,n[On.colorScheme]);return n.options&&n.options.color?wn(r,e,n.options.color):wn(r,e)},_n=(Tn("Brand.1"),Tn("Brand.2"),Tn("Brand.3"),Tn("Brand.4"),Tn("Brand.5"),Tn("Brand.6"),Tn("Primary")),kn=(Tn("PrimaryDark"),Tn("Secondary")),Cn=(Tn("Accent.Light.1"),Tn("Accent.Light.2"),Tn("Accent.Light.3"),Tn("Accent.Light.4"),Tn("Accent.Light.5"),Tn("Accent.Light.6"),Tn("Accent.Dark.1"),Tn("Accent.Dark.2"),Tn("Accent.Dark.3"),{1:Tn("Neutral.1"),2:Tn("Neutral.2"),3:Tn("Neutral.3"),4:Tn("Neutral.4"),5:Tn("Neutral.5"),6:Tn("Neutral.6"),7:Tn("Neutral.7"),8:Tn("Neutral.8")}),$n={Green:{Text:Tn("Validation.Green.Text"),Icon:Tn("Validation.Green.Icon"),Border:Tn("Validation.Green.Border"),Background:Tn("Validation.Green.Background")},Orange:{Text:Tn("Validation.Orange.Text"),Icon:Tn("Validation.Orange.Icon"),Border:Tn("Validation.Orange.Border"),Background:Tn("Validation.Orange.Background"),Badge:Tn("Validation.Orange.Badge")},Red:{Text:Tn("Validation.Red.Text"),Icon:Tn("Validation.Red.Icon"),Border:Tn("Validation.Red.Border"),Background:Tn("Validation.Red.Background")},Blue:{Text:Tn("Validation.Blue.Text"),Icon:Tn("Validation.Blue.Icon"),Border:Tn("Validation.Blue.Border"),Background:Tn("Validation.Blue.Background")}},Hn=(Tn("Shadow.Accent"),Tn("Shadow.Red"),Tn("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),Nn=e=>Object.keys(Hn).reduce(((t,n)=>{const r=Hn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Rn=Nn("max-width"),Ln=(Nn("min-width"),m.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return h`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Rn.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Rn.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),zn=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=y(t,["mobileCols","tabletCols","desktopCols"]);return e(Ln,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=jn(i||o||r),a=jn(e),l=jn(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),jn=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},In=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,l=y(t,["children","data-testid","type","stretch"]);return e(Mn,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),Mn=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?h`
                padding: 0 3rem;
            `:h`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Rn.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Rn.tablet} {
        max-width: 720px;
    }
    ${Rn.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return h`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Rn.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Rn.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return h`
                    display: flex;
                    flex-direction: column;
                `;default:return h`
                    display: flex;
                `}}}
`,Wn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=y(t,["children","data-testid","stretch"]);return e(Pn,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Pn=m.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?h`
                ${Rn.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:h`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Un=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=t,c=y(t,["children","data-testid","className","type","stretch"]);return e(Wn,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:e(In,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Gn={Section:Wn,Container:In,Content:Un,ColDiv:zn},Vn=m.button`
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

        ${({$highlight:e})=>e&&h`
                background-color: ${Cn[7]};
            `}
    }
`,Xn=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=y(t,["children","focusHighlight","focusOutline","type"]);return e(Vn,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),qn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Yn={collections:{base:{D1:{fontFamily:qn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:qn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:qn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:qn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:qn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:qn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:qn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:qn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:qn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:qn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:qn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:qn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:qn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:qn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Kn=e=>t=>{const n=t.theme,r=An(Yn,n[On.textStyleScheme]);return n.options&&n.options.textStyle?wn(r,e,n.options.textStyle):wn(r,e)},Zn={D1:{fontFamily:Kn("D1.fontFamily"),fontSize:Kn("D1.fontSize"),fontWeight:Kn("D1.fontWeight"),lineHeight:Kn("D1.lineHeight"),letterSpacing:Kn("D1.letterSpacing")},D2:{fontFamily:Kn("D2.fontFamily"),fontSize:Kn("D2.fontSize"),fontWeight:Kn("D2.fontWeight"),lineHeight:Kn("D2.lineHeight"),letterSpacing:Kn("D2.letterSpacing")},D3:{fontFamily:Kn("D3.fontFamily"),fontSize:Kn("D3.fontSize"),fontWeight:Kn("D3.fontWeight"),lineHeight:Kn("D3.lineHeight"),letterSpacing:Kn("D3.letterSpacing")},D4:{fontFamily:Kn("D4.fontFamily"),fontSize:Kn("D4.fontSize"),fontWeight:Kn("D4.fontWeight"),lineHeight:Kn("D4.lineHeight"),letterSpacing:Kn("D4.letterSpacing")},DBody:{fontFamily:Kn("DBody.fontFamily"),fontSize:Kn("DBody.fontSize"),fontWeight:Kn("DBody.fontWeight"),lineHeight:Kn("DBody.lineHeight"),letterSpacing:Kn("DBody.letterSpacing")},H1:{fontFamily:Kn("H1.fontFamily"),fontSize:Kn("H1.fontSize"),fontWeight:Kn("H1.fontWeight"),lineHeight:Kn("H1.lineHeight"),letterSpacing:Kn("H1.letterSpacing")},H2:{fontFamily:Kn("H2.fontFamily"),fontSize:Kn("H2.fontSize"),fontWeight:Kn("H2.fontWeight"),lineHeight:Kn("H2.lineHeight"),letterSpacing:Kn("H2.letterSpacing")},H3:{fontFamily:Kn("H3.fontFamily"),fontSize:Kn("H3.fontSize"),fontWeight:Kn("H3.fontWeight"),lineHeight:Kn("H3.lineHeight"),letterSpacing:Kn("H3.letterSpacing")},H4:{fontFamily:Kn("H4.fontFamily"),fontSize:Kn("H4.fontSize"),fontWeight:Kn("H4.fontWeight"),lineHeight:Kn("H4.lineHeight"),letterSpacing:Kn("H4.letterSpacing")},H5:{fontFamily:Kn("H5.fontFamily"),fontSize:Kn("H5.fontSize"),fontWeight:Kn("H5.fontWeight"),lineHeight:Kn("H5.lineHeight"),letterSpacing:Kn("H5.letterSpacing")},H6:{fontFamily:Kn("H6.fontFamily"),fontSize:Kn("H6.fontSize"),fontWeight:Kn("H6.fontWeight"),lineHeight:Kn("H6.lineHeight"),letterSpacing:Kn("H6.letterSpacing")},Body:{fontFamily:Kn("Body.fontFamily"),fontSize:Kn("Body.fontSize"),fontWeight:Kn("Body.fontWeight"),lineHeight:Kn("Body.lineHeight"),letterSpacing:Kn("Body.letterSpacing")},BodySmall:{fontFamily:Kn("BodySmall.fontFamily"),fontSize:Kn("BodySmall.fontSize"),fontWeight:Kn("BodySmall.fontWeight"),lineHeight:Kn("BodySmall.lineHeight"),letterSpacing:Kn("BodySmall.letterSpacing")},XSmall:{fontFamily:Kn("XSmall.fontFamily"),fontSize:Kn("XSmall.fontSize"),fontWeight:Kn("XSmall.fontWeight"),lineHeight:Kn("XSmall.lineHeight"),letterSpacing:Kn("XSmall.letterSpacing")}},Jn=e=>{switch(e){case 700:case"bold":return qn.Bold;case 600:case"semibold":return qn.Semibold;case 300:case"light":return qn.Light;case 400:case"regular":return qn.Regular;default:return""}},Qn=(e,t)=>n=>{var r;const o=Zn[e].fontFamily(n),i=Zn[e].fontWeight(n);return Object.values(qn).includes(o)?h`
                font-family: ${Jn(t)||Jn(i)||o};
                font-weight: normal !important;
            `:h`
            font-family: ${o};
            font-weight: ${null!==(r=er(t)||i)&&void 0!==r?r:"normal"};
        `},er=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},tr=e=>{if(e>0)return h`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},nr=Qn,rr=(e,t,n=!1)=>r=>{const o=Zn[e],i=o.fontSize(r);return h`
            ${Qn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${h`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1,n=void 0)=>t?h`
            display: block;
            ${tr(n)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${tr(n)}
        `;var ir;!function(e){e.D1=m.h1`
        ${e=>h`
                ${rr("D1",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>h`
                ${rr("D2",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>h`
                ${rr("D3",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>h`
                ${rr("D4",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>h`
                ${rr("DBody",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>h`
                ${rr("H1",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>h`
                ${rr("H2",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>h`
                ${rr("H3",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>h`
                ${rr("H4",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>h`
                ${rr("H5",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>h`
                ${rr("H6",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>h`
                ${rr("Body",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>h`
                ${rr("BodySmall",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>h`
                ${rr("XSmall",e.weight,e.paragraph)}
                color: ${Cn[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>cr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>cr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ir||(ir={}));const ar=m.a`
    ${e=>h`
            ${rr(e.textStyle,e.weight)}
            color: ${_n};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kn};

                svg {
                    color: ${kn};
                }
            }
        `}
`,lr=m(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,cr=n=>{var{external:r=!1,children:o}=n,i=y(n,["external","children"]);return t(ar,Object.assign({},i,{children:[o,r&&e(lr,{})]}))};var sr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(sr||(sr={}));const ur="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",dr=h`
    color: ${$n.Orange.Icon};

    svg {
        color: ${$n.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${$n.Orange.Icon};
        svg {
            color: ${$n.Orange.Icon};
        }
    }
`,fr=m.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${ur};
    background: ${Cn[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,pr=m(Gn.Content)`
    display: flex;
`,mr=m.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,hr=m.div`
    display: inline-block;
    width: 100%;

    ${rr("Body","regular")}
    color: ${Cn[8]};

    p {
        display: inline-block;
    }

    strong {
        ${nr("Body","semibold")}
        color: ${Cn[8]};
    }

    a {
        ${rr("Body","regular")}
        ${dr}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return h`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,gr=m(ir.Hyperlink.Default)`
    position: relative;

    ${dr}
`,yr=m(Xn)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,vr=m(p)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Cn[8]};
`,br=m.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${$n.Orange.Icon};
    ${rr("BodySmall","semibold")};

    cursor: pointer;
`,Fr=m.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,Sr=n=>{var{children:r,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:s,id:d,forwardedRef:f,maxCollapsedHeight:p,onClick:m,actionButton:h}=n,g=y(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const v=g["data-testid"],[F,S]=i(a),{height:E,ref:D}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,d=e.handleHeight,f=void 0===d||d,p=e.targetRef,m=e.observerOptions,h=e.onResize,g=o(n),y=o(null),v=null!=p?p:y,F=o(),S=i({width:void 0,height:void 0}),E=S[0],D=S[1];return de((function(){if(!ce()){var e=ue(h,D,u,f);F.current=ae((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!ce()&&e({width:r,height:o}),g.current=!1}))}),r,l,c);var t=new window.ResizeObserver(F.current);return v.current&&t.observe(v.current,m),function(){t.disconnect();var e=F.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,f,h,m,v.current]),b({ref:v},E)}();u((()=>{S(a)}),[a]);const B=e=>{e.stopPropagation(),S(!1),l&&s&&s()},w=e=>{h.onClick&&(e.stopPropagation(),h.onClick(e))};if(!F)return null;return t(fr,Object.assign({ref:f,$sticky:c,$clickable:!!m,onClick:m},g,{children:[t(pr,Object.assign({id:Er("container",d)},{children:[t(mr,{children:[e(hr,Object.assign({"data-testid":Er("text-content",v),$maxCollapsedHeight:p&&E>p?p:void 0},{children:e("div",Object.assign({ref:D},{children:r}))})),h&&e(br,Object.assign({id:Er("action-button",d),"data-testid":Er("action-button",v),type:"button"},h,{onClick:w},{children:h.children}))]}),l&&e(yr,Object.assign({onClick:B,id:Er("dismiss-button",d),"data-testid":Er("dismiss-button",v),focusHighlight:!1,type:"button"},{children:e(vr,{})}))]})),m&&e(Fr,{"aria-label":"Clickable banner",type:"button"})]}))},Er=(e,t="wrapper")=>`${t}-${e}`,Dr=r.forwardRef(((t,n)=>e(Sr,Object.assign({},t,{forwardedRef:n})))),Br=Object.assign(Dr,{Link:gr});
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */
function wr(e){return wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wr(e)}function Ar(e,t){return Ar=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ar(e,t)}function Or(e,t,n){return Or=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Ar(o,n.prototype),o},Or.apply(null,arguments)}function xr(e){return function(e){if(Array.isArray(e))return Tr(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tr(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _r=Object.hasOwnProperty,kr=Object.setPrototypeOf,Cr=Object.isFrozen,$r=Object.getPrototypeOf,Hr=Object.getOwnPropertyDescriptor,Nr=Object.freeze,Rr=Object.seal,Lr=Object.create,zr="undefined"!=typeof Reflect&&Reflect,jr=zr.apply,Ir=zr.construct;jr||(jr=function(e,t,n){return e.apply(t,n)}),Nr||(Nr=function(e){return e}),Rr||(Rr=function(e){return e}),Ir||(Ir=function(e,t){return Or(e,xr(t))});var Mr,Wr=Qr(Array.prototype.forEach),Pr=Qr(Array.prototype.pop),Ur=Qr(Array.prototype.push),Gr=Qr(String.prototype.toLowerCase),Vr=Qr(String.prototype.toString),Xr=Qr(String.prototype.match),qr=Qr(String.prototype.replace),Yr=Qr(String.prototype.indexOf),Kr=Qr(String.prototype.trim),Zr=Qr(RegExp.prototype.test),Jr=(Mr=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ir(Mr,t)});function Qr(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return jr(e,t,r)}}function eo(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:Gr,kr&&kr(e,null);for(var o=t.length;o--;){var i=t[o];if("string"==typeof i){var a=n(i);a!==i&&(Cr(t)||(t[o]=a),i=a)}e[i]=!0}return e}function to(e){var t,n=Lr(null);for(t in e)!0===jr(_r,e,[t])&&(n[t]=e[t]);return n}function no(e,t){for(;null!==e;){var n=Hr(e,t);if(n){if(n.get)return Qr(n.get);if("function"==typeof n.value)return Qr(n.value)}e=$r(e)}return function(e){return console.warn("fallback value for",e),null}}var ro=Nr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),oo=Nr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),io=Nr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ao=Nr(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),lo=Nr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),co=Nr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),so=Nr(["#text"]),uo=Nr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),fo=Nr(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),po=Nr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),mo=Nr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ho=Rr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),go=Rr(/<%[\w\W]*|[\w\W]*%>/gm),yo=Rr(/\${[\w\W]*}/gm),vo=Rr(/^data-[\-\w.\u00B7-\uFFFF]/),bo=Rr(/^aria-[\-\w]+$/),Fo=Rr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),So=Rr(/^(?:\w+script|data):/i),Eo=Rr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Do=Rr(/^html$/i),Bo=Rr(/^[a-z][.\w]*(-[.\w]+)+$/i),wo=function(){return"undefined"==typeof window?null:window};var Ao=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wo(),n=function(t){return e(t)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.Element,s=t.NodeFilter,u=t.NamedNodeMap,d=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,h=c.prototype,g=no(h,"cloneNode"),y=no(h,"nextSibling"),v=no(h,"childNodes"),b=no(h,"parentNode");if("function"==typeof a){var F=o.createElement("template");F.content&&F.content.ownerDocument&&(o=F.content.ownerDocument)}var S=function(e,t){if("object"!==wr(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(m,r),E=S?S.createHTML(""):"",D=o,B=D.implementation,w=D.createNodeIterator,A=D.createDocumentFragment,O=D.getElementsByTagName,x=r.importNode,T={};try{T=to(o).documentMode?o.documentMode:{}}catch(e){}var _={};n.isSupported="function"==typeof b&&B&&void 0!==B.createHTMLDocument&&9!==T;var k,C,$=ho,H=go,N=yo,R=vo,L=bo,z=So,j=Eo,I=Bo,M=Fo,W=null,P=eo({},[].concat(xr(ro),xr(oo),xr(io),xr(lo),xr(so))),U=null,G=eo({},[].concat(xr(uo),xr(fo),xr(po),xr(mo))),V=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,q=null,Y=!0,K=!0,Z=!1,J=!0,Q=!1,ee=!0,te=!1,ne=!1,re=!1,oe=!1,ie=!1,ae=!1,le=!0,ce=!1,se=!0,ue=!1,de={},fe=null,pe=eo({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),me=null,he=eo({},["audio","video","img","source","image","track"]),ge=null,ye=eo({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ve="http://www.w3.org/1998/Math/MathML",be="http://www.w3.org/2000/svg",Fe="http://www.w3.org/1999/xhtml",Se=Fe,Ee=!1,De=null,Be=eo({},[ve,be,Fe],Vr),we=["application/xhtml+xml","text/html"],Ae=null,Oe=o.createElement("form"),xe=function(e){return e instanceof RegExp||e instanceof Function},Te=function(e){Ae&&Ae===e||(e&&"object"===wr(e)||(e={}),e=to(e),k=k=-1===we.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,C="application/xhtml+xml"===k?Vr:Gr,W="ALLOWED_TAGS"in e?eo({},e.ALLOWED_TAGS,C):P,U="ALLOWED_ATTR"in e?eo({},e.ALLOWED_ATTR,C):G,De="ALLOWED_NAMESPACES"in e?eo({},e.ALLOWED_NAMESPACES,Vr):Be,ge="ADD_URI_SAFE_ATTR"in e?eo(to(ye),e.ADD_URI_SAFE_ATTR,C):ye,me="ADD_DATA_URI_TAGS"in e?eo(to(he),e.ADD_DATA_URI_TAGS,C):he,fe="FORBID_CONTENTS"in e?eo({},e.FORBID_CONTENTS,C):pe,X="FORBID_TAGS"in e?eo({},e.FORBID_TAGS,C):{},q="FORBID_ATTR"in e?eo({},e.FORBID_ATTR,C):{},de="USE_PROFILES"in e&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,K=!1!==e.ALLOW_DATA_ATTR,Z=e.ALLOW_UNKNOWN_PROTOCOLS||!1,J=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Q=e.SAFE_FOR_TEMPLATES||!1,ee=!1!==e.SAFE_FOR_XML,te=e.WHOLE_DOCUMENT||!1,oe=e.RETURN_DOM||!1,ie=e.RETURN_DOM_FRAGMENT||!1,ae=e.RETURN_TRUSTED_TYPE||!1,re=e.FORCE_BODY||!1,le=!1!==e.SANITIZE_DOM,ce=e.SANITIZE_NAMED_PROPS||!1,se=!1!==e.KEEP_CONTENT,ue=e.IN_PLACE||!1,M=e.ALLOWED_URI_REGEXP||M,Se=e.NAMESPACE||Fe,V=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(V.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(V.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(V.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(K=!1),ie&&(oe=!0),de&&(W=eo({},xr(so)),U=[],!0===de.html&&(eo(W,ro),eo(U,uo)),!0===de.svg&&(eo(W,oo),eo(U,fo),eo(U,mo)),!0===de.svgFilters&&(eo(W,io),eo(U,fo),eo(U,mo)),!0===de.mathMl&&(eo(W,lo),eo(U,po),eo(U,mo))),e.ADD_TAGS&&(W===P&&(W=to(W)),eo(W,e.ADD_TAGS,C)),e.ADD_ATTR&&(U===G&&(U=to(U)),eo(U,e.ADD_ATTR,C)),e.ADD_URI_SAFE_ATTR&&eo(ge,e.ADD_URI_SAFE_ATTR,C),e.FORBID_CONTENTS&&(fe===pe&&(fe=to(fe)),eo(fe,e.FORBID_CONTENTS,C)),se&&(W["#text"]=!0),te&&eo(W,["html","head","body"]),W.table&&(eo(W,["tbody"]),delete X.tbody),Nr&&Nr(e),Ae=e)},_e=eo({},["mi","mo","mn","ms","mtext"]),ke=eo({},["foreignobject","annotation-xml"]),Ce=eo({},["title","style","font","a","script"]),$e=eo({},oo);eo($e,io),eo($e,ao);var He=eo({},lo);eo(He,co);var Ne=function(e){Ur(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=E}catch(t){e.remove()}}},Re=function(e,t){try{Ur(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Ur(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!U[e])if(oe||ie)try{Ne(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Le=function(e){var t,n;if(re)e="<remove></remove>"+e;else{var r=Xr(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===k&&Se===Fe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=S?S.createHTML(e):e;if(Se===Fe)try{t=(new p).parseFromString(i,k)}catch(e){}if(!t||!t.documentElement){t=B.createDocument(Se,"template",null);try{t.documentElement.innerHTML=Ee?E:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Se===Fe?O.call(t,te?"html":"body")[0]:te?t.documentElement:a},ze=function(e){return w.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT|s.SHOW_PROCESSING_INSTRUCTION|s.SHOW_CDATA_SECTION,null,!1)},je=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Ie=function(e){return"object"===wr(l)?e instanceof l:e&&"object"===wr(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Me=function(e,t,r){_[e]&&Wr(_[e],(function(e){e.call(n,t,r,Ae)}))},We=function(e){var t;if(Me("beforeSanitizeElements",e,null),je(e))return Ne(e),!0;if(Zr(/[\u0080-\uFFFF]/,e.nodeName))return Ne(e),!0;var r=C(e.nodeName);if(Me("uponSanitizeElement",e,{tagName:r,allowedTags:W}),e.hasChildNodes()&&!Ie(e.firstElementChild)&&(!Ie(e.content)||!Ie(e.content.firstElementChild))&&Zr(/<[/\w]/g,e.innerHTML)&&Zr(/<[/\w]/g,e.textContent))return Ne(e),!0;if("select"===r&&Zr(/<template/i,e.innerHTML))return Ne(e),!0;if(7===e.nodeType)return Ne(e),!0;if(ee&&8===e.nodeType&&Zr(/<[/\w]/g,e.data))return Ne(e),!0;if(!W[r]||X[r]){if(!X[r]&&Ue(r)){if(V.tagNameCheck instanceof RegExp&&Zr(V.tagNameCheck,r))return!1;if(V.tagNameCheck instanceof Function&&V.tagNameCheck(r))return!1}if(se&&!fe[r]){var o=b(e)||e.parentNode,i=v(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a){var l=g(i[a],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,y(e))}}return Ne(e),!0}return e instanceof c&&!function(e){var t=b(e);t&&t.tagName||(t={namespaceURI:Se,tagName:"template"});var n=Gr(e.tagName),r=Gr(t.tagName);return!!De[e.namespaceURI]&&(e.namespaceURI===be?t.namespaceURI===Fe?"svg"===n:t.namespaceURI===ve?"svg"===n&&("annotation-xml"===r||_e[r]):Boolean($e[n]):e.namespaceURI===ve?t.namespaceURI===Fe?"math"===n:t.namespaceURI===be?"math"===n&&ke[r]:Boolean(He[n]):e.namespaceURI===Fe?!(t.namespaceURI===be&&!ke[r])&&!(t.namespaceURI===ve&&!_e[r])&&!He[n]&&(Ce[n]||!$e[n]):!("application/xhtml+xml"!==k||!De[e.namespaceURI]))}(e)?(Ne(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!Zr(/<\/no(script|embed|frames)/i,e.innerHTML)?(Q&&3===e.nodeType&&(t=e.textContent,t=qr(t,$," "),t=qr(t,H," "),t=qr(t,N," "),e.textContent!==t&&(Ur(n.removed,{element:e.cloneNode()}),e.textContent=t)),Me("afterSanitizeElements",e,null),!1):(Ne(e),!0)},Pe=function(e,t,n){if(le&&("id"===t||"name"===t)&&(n in o||n in Oe))return!1;if(K&&!q[t]&&Zr(R,t));else if(Y&&Zr(L,t));else if(!U[t]||q[t]){if(!(Ue(e)&&(V.tagNameCheck instanceof RegExp&&Zr(V.tagNameCheck,e)||V.tagNameCheck instanceof Function&&V.tagNameCheck(e))&&(V.attributeNameCheck instanceof RegExp&&Zr(V.attributeNameCheck,t)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(t))||"is"===t&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&Zr(V.tagNameCheck,n)||V.tagNameCheck instanceof Function&&V.tagNameCheck(n))))return!1}else if(ge[t]);else if(Zr(M,qr(n,j,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Yr(n,"data:")||!me[e]){if(Z&&!Zr(z,qr(n,j,"")));else if(n)return!1}else;return!0},Ue=function(e){return"annotation-xml"!==e&&Xr(e,I)},Ge=function(e){var t,r,o,i;Me("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:U};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r="value"===s?t.value:Kr(t.value),o=C(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,Me("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(Re(s,e),l.keepAttr))if(J||!Zr(/\/>/i,r))if(ee&&Zr(/((--!?|])>)|<\/(style|title)/i,r))Re(s,e);else{Q&&(r=qr(r,$," "),r=qr(r,H," "),r=qr(r,N," "));var d=C(e.nodeName);if(Pe(d,o,r)){if(!ce||"id"!==o&&"name"!==o||(Re(s,e),r="user-content-"+r),S&&"object"===wr(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(d,o)){case"TrustedHTML":r=S.createHTML(r);break;case"TrustedScriptURL":r=S.createScriptURL(r)}try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),je(e)?Ne(e):Pr(n.removed)}catch(e){}}}else Re(s,e)}Me("afterSanitizeAttributes",e,null)}},Ve=function e(t){var n,r=ze(t);for(Me("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Me("uponSanitizeShadowNode",n,null),We(n)||(n.content instanceof i&&e(n.content),Ge(n));Me("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var o,a,c,s,u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Ee=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw Jr("toString is not a function");if("string"!=typeof(e=e.toString()))throw Jr("dirty is not a string, aborting")}if(!n.isSupported){if("object"===wr(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ie(e))return t.toStaticHTML(e.outerHTML)}return e}if(ne||Te(d),n.removed=[],"string"==typeof e&&(ue=!1),ue){if(e.nodeName){var f=C(e.nodeName);if(!W[f]||X[f])throw Jr("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)1===(a=(o=Le("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!oe&&!Q&&!te&&-1===e.indexOf("<"))return S&&ae?S.createHTML(e):e;if(!(o=Le(e)))return oe?null:ae?E:""}o&&re&&Ne(o.firstChild);for(var p=ze(ue?e:o);c=p.nextNode();)3===c.nodeType&&c===s||We(c)||(c.content instanceof i&&Ve(c.content),Ge(c),s=c);if(s=null,ue)return e;if(oe){if(ie)for(u=A.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(U.shadowroot||U.shadowrootmod)&&(u=x.call(r,u,!0)),u}var m=te?o.outerHTML:o.innerHTML;return te&&W["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&Zr(Do,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),Q&&(m=qr(m,$," "),m=qr(m,H," "),m=qr(m,N," ")),S&&ae?S.createHTML(m):m},n.setConfig=function(e){Te(e),ne=!0},n.clearConfig=function(){Ae=null,ne=!1},n.isValidAttribute=function(e,t,n){Ae||Te({});var r=C(e),o=C(t);return Pe(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(_[e]=_[e]||[],Ur(_[e],t))},n.removeHook=function(e){if(_[e])return Pr(_[e])},n.removeHooks=function(e){_[e]&&(_[e]=[])},n.removeAllHooks=function(){_={}},n}();const Oo=t=>r.forwardRef(((n,r)=>e(Sr,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=Ao.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:o}}),n)}{const r=t.otherAttributes;return e(Br.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{Sr as NBComponent,Br as NotificationBanner,Oo as withNotificationBanner};
//# sourceMappingURL=index.js.map
