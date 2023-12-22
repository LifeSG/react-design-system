import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{cloneElement as i,useRef as o,useState as a,isValidElement as l,createRef as c,PureComponent as f,useEffect as u,useLayoutEffect as h,useCallback as d}from"react";import{findDOMNode as s}from"react-dom";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import p,{css as y}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";function m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var v=function(t,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},v(t,e)};var b=function(){return b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},b.apply(this,arguments)};var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},D="object"==typeof S&&S&&S.Object===Object&&S,w="object"==typeof self&&self&&self.Object===Object&&self,E=D||w||Function("return this")(),H=E,$=function(){return H.Date.now()},O=/\s/;var A=function(t){for(var e=t.length;e--&&O.test(t.charAt(e)););return e},_=/^\s+/;var x=function(t){return t?t.slice(0,A(t)+1).replace(_,""):t},z=E.Symbol,k=z,j=Object.prototype,C=j.hasOwnProperty,W=j.toString,R=k?k.toStringTag:void 0;var T=function(t){var e=C.call(t,R),n=t[R];try{t[R]=void 0;var r=!0}catch(t){}var i=W.call(t);return r&&(e?t[R]=n:delete t[R]),i},L=Object.prototype.toString;var P=T,I=function(t){return L.call(t)},V=z?z.toStringTag:void 0;var N=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?P(t):I(t)},M=function(t){return null!=t&&"object"==typeof t};var G=x,X=B,U=function(t){return"symbol"==typeof t||M(t)&&"[object Symbol]"==N(t)},q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;var Y=B,Z=$,tt=function(t){if("number"==typeof t)return t;if(U(t))return NaN;if(X(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=X(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=G(t);var n=J.test(t);return n||K.test(t)?Q(t.slice(2),n?2:8):q.test(t)?NaN:+t},et=Math.max,nt=Math.min;var rt=function(t,e,n){var r,i,o,a,l,c,f=0,u=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function s(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-f>=o}function p(){var t=Z();if(g(t))return y(t);l=setTimeout(p,function(t){var n=e-(t-c);return h?nt(n,o-(t-f)):n}(t))}function y(t){return l=void 0,d&&r?s(t):(r=i=void 0,a)}function F(){var t=Z(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return f=t,l=setTimeout(p,e),u?s(t):a}(c);if(h)return clearTimeout(l),l=setTimeout(p,e),s(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=tt(e)||0,Y(n)&&(u=!!n.leading,o=(h="maxWait"in n)?et(tt(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),F.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},F.flush=function(){return void 0===l?a:y(Z())},F},it=rt,ot=B;var at=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ot(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),it(t,e,{leading:r,maxWait:e,trailing:i})},lt=function(t,e,n,r){switch(e){case"debounce":return rt(t,n,r);case"throttle":return at(t,n,r);default:return t}},ct=function(t){return"function"==typeof t},ft=function(){return"undefined"==typeof window},ut=function(t){return t instanceof Element||t instanceof HTMLDocument},ht=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ct(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!ft()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(ft())return null;if(e)return document.querySelector(e);if(r&&ut(r))return r;if(n.targetRef&&ut(n.targetRef.current))return n.targetRef.current;var i=s(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ht(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!ft()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ct(e)?"renderProp":ct(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,f=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,ft()||(n.resizeHandler=lt(n.createResizeHandler,i,a,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ft()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,o=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,f={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=o)(f);case"child":if((t=o).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return i(t,u)}return i(t,f);case"childArray":return(t=o).map((function(t){return!!t&&i(t,f)}));default:return r.createElement(l,null)}}}(f);var dt=ft()?u:h;const st={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pt=Array.isArray,yt="object"==typeof gt&&gt&&gt.Object===Object&&gt,Ft="object"==typeof self&&self&&self.Object===Object&&self,mt=yt||Ft||Function("return this")(),vt=mt.Symbol,bt=vt,St=Object.prototype,Bt=St.hasOwnProperty,Dt=St.toString,wt=bt?bt.toStringTag:void 0;var Et=function(t){var e=Bt.call(t,wt),n=t[wt];try{t[wt]=void 0;var r=!0}catch(t){}var i=Dt.call(t);return r&&(e?t[wt]=n:delete t[wt]),i},Ht=Object.prototype.toString;var $t=Et,Ot=function(t){return Ht.call(t)},At=vt?vt.toStringTag:void 0;var _t=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":At&&At in Object(t)?$t(t):Ot(t)};var xt=_t,zt=function(t){return null!=t&&"object"==typeof t};var kt=function(t){return"symbol"==typeof t||zt(t)&&"[object Symbol]"==xt(t)},jt=pt,Ct=kt,Wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/;var Tt=function(t,e){if(jt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ct(t))||(Rt.test(t)||!Wt.test(t)||null!=e&&t in Object(e))};var Lt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Pt=_t,It=Lt;var Vt,Nt=function(t){if(!It(t))return!1;var e=Pt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Mt=mt["__core-js_shared__"],Gt=(Vt=/[^.]+$/.exec(Mt&&Mt.keys&&Mt.keys.IE_PROTO||""))?"Symbol(src)_1."+Vt:"";var Xt=function(t){return!!Gt&&Gt in t},Ut=Function.prototype.toString;var qt=Nt,Jt=Xt,Kt=Lt,Qt=function(t){if(null!=t){try{return Ut.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Yt=/^\[object .+?Constructor\]$/,Zt=Function.prototype,te=Object.prototype,ee=Zt.toString,ne=te.hasOwnProperty,re=RegExp("^"+ee.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(t){return!(!Kt(t)||Jt(t))&&(qt(t)?re:Yt).test(Qt(t))},oe=function(t,e){return null==t?void 0:t[e]};var ae=function(t,e){var n=oe(t,e);return ie(n)?n:void 0},le=ae(Object,"create"),ce=le;var fe=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},he=le,de=Object.prototype.hasOwnProperty;var se=function(t){var e=this.__data__;if(he){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(e,t)?e[t]:void 0},ge=le,pe=Object.prototype.hasOwnProperty;var ye=le;var Fe=fe,me=ue,ve=se,be=function(t){var e=this.__data__;return ge?void 0!==e[t]:pe.call(e,t)},Se=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ye&&void 0===e?"__lodash_hash_undefined__":e,this};function Be(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Be.prototype.clear=Fe,Be.prototype.delete=me,Be.prototype.get=ve,Be.prototype.has=be,Be.prototype.set=Se;var De=Be;var we=function(){this.__data__=[],this.size=0};var Ee=function(t,e){return t===e||t!=t&&e!=e};var He=function(t,e){for(var n=t.length;n--;)if(Ee(t[n][0],e))return n;return-1},$e=He,Oe=Array.prototype.splice;var Ae=He;var _e=He;var xe=He;var ze=we,ke=function(t){var e=this.__data__,n=$e(e,t);return!(n<0)&&(n==e.length-1?e.pop():Oe.call(e,n,1),--this.size,!0)},je=function(t){var e=this.__data__,n=Ae(e,t);return n<0?void 0:e[n][1]},Ce=function(t){return _e(this.__data__,t)>-1},We=function(t,e){var n=this.__data__,r=xe(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Re(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Re.prototype.clear=ze,Re.prototype.delete=ke,Re.prototype.get=je,Re.prototype.has=Ce,Re.prototype.set=We;var Te=Re,Le=ae(mt,"Map"),Pe=De,Ie=Te,Ve=Le;var Ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Me=function(t,e){var n=t.__data__;return Ne(e)?n["string"==typeof e?"string":"hash"]:n.map},Ge=Me;var Xe=Me;var Ue=Me;var qe=Me;var Je=function(){this.size=0,this.__data__={hash:new Pe,map:new(Ve||Ie),string:new Pe}},Ke=function(t){var e=Ge(this,t).delete(t);return this.size-=e?1:0,e},Qe=function(t){return Xe(this,t).get(t)},Ye=function(t){return Ue(this,t).has(t)},Ze=function(t,e){var n=qe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function tn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}tn.prototype.clear=Je,tn.prototype.delete=Ke,tn.prototype.get=Qe,tn.prototype.has=Ye,tn.prototype.set=Ze;var en=tn;function nn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nn.Cache||en),n}nn.Cache=en;var rn=nn;var on=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,an=/\\(\\)?/g,ln=function(t){var e=rn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(on,(function(t,n,r,i){e.push(r?i.replace(an,"$1"):n||t)})),e}));var cn=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},fn=pt,un=kt,hn=vt?vt.prototype:void 0,dn=hn?hn.toString:void 0;var sn=function t(e){if("string"==typeof e)return e;if(fn(e))return cn(e,t)+"";if(un(e))return dn?dn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},gn=sn;var pn=pt,yn=Tt,Fn=ln,mn=function(t){return null==t?"":gn(t)};var vn=kt;var bn=function(t,e){return pn(t)?t:yn(t,e)?[t]:Fn(mn(t))},Sn=function(t){if("string"==typeof t||vn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Bn=function(t,e){for(var n=0,r=(e=bn(e,t)).length;null!=t&&n<r;)t=t[Sn(e[n++])];return n&&n==r?t:void 0};var Dn=function(t,e,n){var r=null==t?void 0:Bn(t,e);return void 0===r?n:r};const wn=(t,e,n)=>e?Dn(n,e)||Dn(t,e):n||t,En=(t,e)=>{const n=e||t.defaultValue;return Dn(t.collections,n)};var Hn;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Hn||(Hn={}));const $n={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},On=t=>e=>{const n=e.theme,r=En($n,n[Hn.colorScheme]);return n.options&&n.options.color?wn(r,t,n.options.color):wn(r,t)},An=(On("Brand.1"),On("Brand.2"),On("Brand.3"),On("Brand.4"),On("Brand.5"),On("Brand.6"),On("Primary")),_n=(On("PrimaryDark"),On("Secondary")),xn=(On("Accent.Light.1"),On("Accent.Light.2"),On("Accent.Light.3"),On("Accent.Light.4"),On("Accent.Light.5"),On("Accent.Light.6"),On("Accent.Dark.1"),On("Accent.Dark.2"),On("Accent.Dark.3"),{1:On("Neutral.1"),2:On("Neutral.2"),3:On("Neutral.3"),4:On("Neutral.4"),5:On("Neutral.5"),6:On("Neutral.6"),7:On("Neutral.7"),8:On("Neutral.8")}),zn=(On("Validation.Green.Text"),On("Validation.Green.Icon"),On("Validation.Green.Border"),On("Validation.Green.Background"),On("Validation.Orange.Text"),On("Validation.Orange.Icon"),On("Validation.Orange.Border"),On("Validation.Orange.Background"),On("Validation.Orange.Badge"),On("Validation.Red.Text"),On("Validation.Red.Icon"),On("Validation.Red.Border"),On("Validation.Red.Background"),On("Validation.Blue.Text"),On("Validation.Blue.Icon"),On("Validation.Blue.Border"),On("Validation.Blue.Background"),On("Shadow.Accent"),On("Shadow.Red"),On("Shadow.Elevation"),t=>Object.keys(st).reduce(((e,n)=>{const r=st[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{})),kn=zn("max-width"),jn=(zn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Cn={collections:{base:{D1:{fontFamily:jn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:jn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:jn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:jn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:jn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:jn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:jn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:jn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:jn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:jn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:jn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:jn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:jn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:jn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wn=t=>e=>{const n=e.theme,r=En(Cn,n[Hn.textStyleScheme]);return n.options&&n.options.textStyle?wn(r,t,n.options.textStyle):wn(r,t)},Rn={D1:{fontFamily:Wn("D1.fontFamily"),fontSize:Wn("D1.fontSize"),fontWeight:Wn("D1.fontWeight"),lineHeight:Wn("D1.lineHeight"),letterSpacing:Wn("D1.letterSpacing")},D2:{fontFamily:Wn("D2.fontFamily"),fontSize:Wn("D2.fontSize"),fontWeight:Wn("D2.fontWeight"),lineHeight:Wn("D2.lineHeight"),letterSpacing:Wn("D2.letterSpacing")},D3:{fontFamily:Wn("D3.fontFamily"),fontSize:Wn("D3.fontSize"),fontWeight:Wn("D3.fontWeight"),lineHeight:Wn("D3.lineHeight"),letterSpacing:Wn("D3.letterSpacing")},D4:{fontFamily:Wn("D4.fontFamily"),fontSize:Wn("D4.fontSize"),fontWeight:Wn("D4.fontWeight"),lineHeight:Wn("D4.lineHeight"),letterSpacing:Wn("D4.letterSpacing")},DBody:{fontFamily:Wn("DBody.fontFamily"),fontSize:Wn("DBody.fontSize"),fontWeight:Wn("DBody.fontWeight"),lineHeight:Wn("DBody.lineHeight"),letterSpacing:Wn("DBody.letterSpacing")},H1:{fontFamily:Wn("H1.fontFamily"),fontSize:Wn("H1.fontSize"),fontWeight:Wn("H1.fontWeight"),lineHeight:Wn("H1.lineHeight"),letterSpacing:Wn("H1.letterSpacing")},H2:{fontFamily:Wn("H2.fontFamily"),fontSize:Wn("H2.fontSize"),fontWeight:Wn("H2.fontWeight"),lineHeight:Wn("H2.lineHeight"),letterSpacing:Wn("H2.letterSpacing")},H3:{fontFamily:Wn("H3.fontFamily"),fontSize:Wn("H3.fontSize"),fontWeight:Wn("H3.fontWeight"),lineHeight:Wn("H3.lineHeight"),letterSpacing:Wn("H3.letterSpacing")},H4:{fontFamily:Wn("H4.fontFamily"),fontSize:Wn("H4.fontSize"),fontWeight:Wn("H4.fontWeight"),lineHeight:Wn("H4.lineHeight"),letterSpacing:Wn("H4.letterSpacing")},H5:{fontFamily:Wn("H5.fontFamily"),fontSize:Wn("H5.fontSize"),fontWeight:Wn("H5.fontWeight"),lineHeight:Wn("H5.lineHeight"),letterSpacing:Wn("H5.letterSpacing")},H6:{fontFamily:Wn("H6.fontFamily"),fontSize:Wn("H6.fontSize"),fontWeight:Wn("H6.fontWeight"),lineHeight:Wn("H6.lineHeight"),letterSpacing:Wn("H6.letterSpacing")},Body:{fontFamily:Wn("Body.fontFamily"),fontSize:Wn("Body.fontSize"),fontWeight:Wn("Body.fontWeight"),lineHeight:Wn("Body.lineHeight"),letterSpacing:Wn("Body.letterSpacing")},BodySmall:{fontFamily:Wn("BodySmall.fontFamily"),fontSize:Wn("BodySmall.fontSize"),fontWeight:Wn("BodySmall.fontWeight"),lineHeight:Wn("BodySmall.lineHeight"),letterSpacing:Wn("BodySmall.letterSpacing")},XSmall:{fontFamily:Wn("XSmall.fontFamily"),fontSize:Wn("XSmall.fontSize"),fontWeight:Wn("XSmall.fontWeight"),lineHeight:Wn("XSmall.lineHeight"),letterSpacing:Wn("XSmall.letterSpacing")}},Tn=t=>{switch(t){case 700:case"bold":return jn.Bold;case 600:case"semibold":return jn.Semibold;case 300:case"light":return jn.Light;case 400:case"regular":return jn.Regular;default:return""}},Ln=(t,e)=>n=>{var r;const i=Rn[t].fontFamily(n),o=Rn[t].fontWeight(n);return Object.values(jn).includes(i)?y`
                font-family: ${Tn(e)||Tn(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=Pn(e)||o)&&void 0!==r?r:"normal"};
        `},Pn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},In=t=>{if(t>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Vn=(t,e,n=!1)=>r=>{const i=Rn[t],o=i.fontSize(r);return y`
            ${Ln(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Nn=(t=!1,e=!1,n=void 0)=>e?y`
            display: block;
            ${In(n)}
        `:t?y`
            display: inline;
        `:y`
            display: block;
            ${In(n)}
        `;var Mn;!function(t){t.D1=p.h1`
        ${t=>y`
                ${Vn("D1",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=p.h1`
        ${t=>y`
                ${Vn("D2",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=p.h1`
        ${t=>y`
                ${Vn("D3",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=p.h1`
        ${t=>y`
                ${Vn("D4",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=p.h1`
        ${t=>y`
                ${Vn("DBody",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=p.h1`
        ${t=>y`
                ${Vn("H1",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=p.h2`
        ${t=>y`
                ${Vn("H2",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=p.h3`
        ${t=>y`
                ${Vn("H3",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=p.h4`
        ${t=>y`
                ${Vn("H4",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=p.h5`
        ${t=>y`
                ${Vn("H5",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=p.h6`
        ${t=>y`
                ${Vn("H6",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=p.p`
        ${t=>y`
                ${Vn("Body",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=p.p`
        ${t=>y`
                ${Vn("BodySmall",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=p.span`
        ${t=>y`
                ${Vn("XSmall",t.weight,t.paragraph)}
                color: ${xn[1]};
                ${Nn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Un(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Un(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Mn||(Mn={}));const Gn=p.a`
    ${t=>y`
            ${Vn(t.textStyle,t.weight)}
            color: ${An};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_n};

                svg {
                    color: ${_n};
                }
            }
        `}
`,Xn=p(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Un=n=>{var{external:r=!1,children:i}=n,o=m(n,["external","children"]);return t(Gn,Object.assign({},o,{children:[i,r&&e(Xn,{})]}))},qn=p.div`
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
`,Jn=p.ul`
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
`,Kn=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${kn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,Qn=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,Yn=p(g)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${xn[4]};
`,Zn=p(Mn.BodySmall)`
    margin: 0.25rem !important;
`,tr=p(Mn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,er=r=>{var{links:i,fadeColor:l,fadePosition:c="both",itemStyle:f,id:h}=r,s=m(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[g,p]=a(!!c),[y,F]=a("left"===c||"both"===c),[v,S]=a("right"===c||"both"===c),B=o(null),D=o(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,l=void 0===i?1e3:i,c=t.refreshOptions,f=t.handleWidth,u=void 0===f||f,h=t.handleHeight,d=void 0===h||h,s=t.targetRef,g=t.observerOptions,p=t.onResize,y=o(n),F=o(null),m=null!=s?s:F,v=o(),S=a({width:void 0,height:void 0}),B=S[0],D=S[1];dt((function(){if(!ft()){var t=ht(p,D,u,d);v.current=lt((function(e){(u||d)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!ft()&&t({width:r,height:i}),y.current=!1}))}),r,l,c);var e=new window.ResizeObserver(v.current);return m.current&&e.observe(m.current,g),function(){e.disconnect();var t=v.current;t&&t.cancel&&t.cancel()}}}),[r,l,c,u,d,p,g,m.current]),b({ref:m},B)}({onResize:d((()=>{const t=D.current,e=B.current;t&&e&&i&&i.length>1&&window.innerWidth<=st.tablet&&(t.scrollLeft=t.scrollWidth-e.offsetWidth)}),[i.length]),targetRef:B,refreshMode:"debounce",refreshRate:50});const w=()=>{if(g){p(window.innerWidth<st.tablet);const t=D.current,e=B.current;t&&e&&t.scrollWidth>e.offsetWidth?(p(!0),F(t.scrollLeft>=1),S(t.scrollWidth-t.scrollLeft>e.offsetWidth)):p(!1)}};if(u((()=>{const t=D.current;return w(),window.addEventListener("resize",w),t&&t.addEventListener("scroll",w),()=>{window.removeEventListener("resize",w),t&&t.removeEventListener("scroll",w)}}),[]),!i)return null;return t(qn,Object.assign({ref:B,id:h||"breadcrumb"},s,{children:[e("nav",{children:e(Jn,Object.assign({ref:D},{children:i.map(((n,r)=>{let o;return n.children?(o=r!==i.length-1&&n.href?e(tr,Object.assign({},n,{weight:"semibold"})):e(Zn,Object.assign({weight:"semibold"},{children:n.children})),t(Qn,Object.assign({$styleProps:f},{children:[o,r<i.length-1&&e(Yn,{})]}),r)):null}))}))}),g&&(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[y&&e(Kn,{$backgroundColor:r.left,$position:"left"}),v&&e(Kn,{$backgroundColor:r.right,$position:"right"})]})})()]}))};export{er as Breadcrumb};
//# sourceMappingURL=index.js.map
