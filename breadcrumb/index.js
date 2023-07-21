import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{cloneElement as i,useRef as o,useState as a,isValidElement as l,createRef as c,PureComponent as f,useEffect as u,useLayoutEffect as h,useCallback as d}from"react";import{findDOMNode as s}from"react-dom";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import p,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";var m=function(t,e){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},m(t,e)};var F=function(){return F=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},F.apply(this,arguments)};var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},B="object"==typeof S&&S&&S.Object===Object&&S,w="object"==typeof self&&self&&self.Object===Object&&self,H=B||w||Function("return this")(),D=H,$=function(){return D.Date.now()},E=/\s/;var _=function(t){for(var e=t.length;e--&&E.test(t.charAt(e)););return e},O=/^\s+/;var z=function(t){return t?t.slice(0,_(t)+1).replace(O,""):t},A=H.Symbol,k=A,W=Object.prototype,x=W.hasOwnProperty,j=W.toString,C=k?k.toStringTag:void 0;var R=function(t){var e=x.call(t,C),n=t[C];try{t[C]=void 0;var r=!0}catch(t){}var i=j.call(t);return r&&(e?t[C]=n:delete t[C]),i},T=Object.prototype.toString;var P=R,V=function(t){return T.call(t)},I=A?A.toStringTag:void 0;var L=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":I&&I in Object(t)?P(t):V(t)},N=function(t){return null!=t&&"object"==typeof t};var M=z,X=b,G=function(t){return"symbol"==typeof t||N(t)&&"[object Symbol]"==L(t)},U=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;var Q=b,Y=$,Z=function(t){if("number"==typeof t)return t;if(G(t))return NaN;if(X(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=X(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=M(t);var n=q.test(t);return n||J.test(t)?K(t.slice(2),n?2:8):U.test(t)?NaN:+t},tt=Math.max,et=Math.min;var nt=function(t,e,n){var r,i,o,a,l,c,f=0,u=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function s(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-f>=o}function p(){var t=Y();if(g(t))return y(t);l=setTimeout(p,function(t){var n=e-(t-c);return h?et(n,o-(t-f)):n}(t))}function y(t){return l=void 0,d&&r?s(t):(r=i=void 0,a)}function v(){var t=Y(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return f=t,l=setTimeout(p,e),u?s(t):a}(c);if(h)return clearTimeout(l),l=setTimeout(p,e),s(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=Z(e)||0,Q(n)&&(u=!!n.leading,o=(h="maxWait"in n)?tt(Z(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},v.flush=function(){return void 0===l?a:y(Y())},v},rt=nt,it=b;var ot=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return it(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),rt(t,e,{leading:r,maxWait:e,trailing:i})},at=function(t,e,n,r){switch(e){case"debounce":return nt(t,n,r);case"throttle":return ot(t,n,r);default:return t}},lt=function(t){return"function"==typeof t},ct=function(){return"undefined"==typeof window},ft=function(t){return t instanceof Element||t instanceof HTMLDocument},ut=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&lt(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!ct()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(ct())return null;if(e)return document.querySelector(e);if(r&&ft(r))return r;if(n.targetRef&&ft(n.targetRef.current))return n.targetRef.current;var i=s(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ut(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!ct()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return lt(e)?"renderProp":lt(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,f=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,ct()||(n.resizeHandler=at(n.createResizeHandler,i,a,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ct()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,o=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,f={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=o)(f);case"child":if((t=o).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return i(t,u)}return i(t,f);case"childArray":return(t=o).map((function(t){return!!t&&i(t,f)}));default:return r.createElement(l,null)}}}(f);var ht=ct()?u:h;const dt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var st="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gt=Array.isArray,pt="object"==typeof st&&st&&st.Object===Object&&st,yt="object"==typeof self&&self&&self.Object===Object&&self,vt=pt||yt||Function("return this")(),mt=vt.Symbol,Ft=mt,St=Object.prototype,bt=St.hasOwnProperty,Bt=St.toString,wt=Ft?Ft.toStringTag:void 0;var Ht=function(t){var e=bt.call(t,wt),n=t[wt];try{t[wt]=void 0;var r=!0}catch(t){}var i=Bt.call(t);return r&&(e?t[wt]=n:delete t[wt]),i},Dt=Object.prototype.toString;var $t=Ht,Et=function(t){return Dt.call(t)},_t=mt?mt.toStringTag:void 0;var Ot=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_t&&_t in Object(t)?$t(t):Et(t)};var zt=Ot,At=function(t){return null!=t&&"object"==typeof t};var kt=function(t){return"symbol"==typeof t||At(t)&&"[object Symbol]"==zt(t)},Wt=gt,xt=kt,jt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ct=/^\w*$/;var Rt=function(t,e){if(Wt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!xt(t))||(Ct.test(t)||!jt.test(t)||null!=e&&t in Object(e))};var Tt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Pt=Ot,Vt=Tt;var It,Lt=function(t){if(!Vt(t))return!1;var e=Pt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Nt=vt["__core-js_shared__"],Mt=(It=/[^.]+$/.exec(Nt&&Nt.keys&&Nt.keys.IE_PROTO||""))?"Symbol(src)_1."+It:"";var Xt=function(t){return!!Mt&&Mt in t},Gt=Function.prototype.toString;var Ut=Lt,qt=Xt,Jt=Tt,Kt=function(t){if(null!=t){try{return Gt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Qt=/^\[object .+?Constructor\]$/,Yt=Function.prototype,Zt=Object.prototype,te=Yt.toString,ee=Zt.hasOwnProperty,ne=RegExp("^"+te.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(t){return!(!Jt(t)||qt(t))&&(Ut(t)?ne:Qt).test(Kt(t))},ie=function(t,e){return null==t?void 0:t[e]};var oe=function(t,e){var n=ie(t,e);return re(n)?n:void 0},ae=oe(Object,"create"),le=ae;var ce=function(){this.__data__=le?le(null):{},this.size=0};var fe=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ue=ae,he=Object.prototype.hasOwnProperty;var de=function(t){var e=this.__data__;if(ue){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return he.call(e,t)?e[t]:void 0},se=ae,ge=Object.prototype.hasOwnProperty;var pe=ae;var ye=ce,ve=fe,me=de,Fe=function(t){var e=this.__data__;return se?void 0!==e[t]:ge.call(e,t)},Se=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pe&&void 0===e?"__lodash_hash_undefined__":e,this};function be(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}be.prototype.clear=ye,be.prototype.delete=ve,be.prototype.get=me,be.prototype.has=Fe,be.prototype.set=Se;var Be=be;var we=function(){this.__data__=[],this.size=0};var He=function(t,e){return t===e||t!=t&&e!=e};var De=function(t,e){for(var n=t.length;n--;)if(He(t[n][0],e))return n;return-1},$e=De,Ee=Array.prototype.splice;var _e=De;var Oe=De;var ze=De;var Ae=we,ke=function(t){var e=this.__data__,n=$e(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ee.call(e,n,1),--this.size,!0)},We=function(t){var e=this.__data__,n=_e(e,t);return n<0?void 0:e[n][1]},xe=function(t){return Oe(this.__data__,t)>-1},je=function(t,e){var n=this.__data__,r=ze(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ce(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ce.prototype.clear=Ae,Ce.prototype.delete=ke,Ce.prototype.get=We,Ce.prototype.has=xe,Ce.prototype.set=je;var Re=Ce,Te=oe(vt,"Map"),Pe=Be,Ve=Re,Ie=Te;var Le=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ne=function(t,e){var n=t.__data__;return Le(e)?n["string"==typeof e?"string":"hash"]:n.map},Me=Ne;var Xe=Ne;var Ge=Ne;var Ue=Ne;var qe=function(){this.size=0,this.__data__={hash:new Pe,map:new(Ie||Ve),string:new Pe}},Je=function(t){var e=Me(this,t).delete(t);return this.size-=e?1:0,e},Ke=function(t){return Xe(this,t).get(t)},Qe=function(t){return Ge(this,t).has(t)},Ye=function(t,e){var n=Ue(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ze(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ze.prototype.clear=qe,Ze.prototype.delete=Je,Ze.prototype.get=Ke,Ze.prototype.has=Qe,Ze.prototype.set=Ye;var tn=Ze;function en(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(en.Cache||tn),n}en.Cache=tn;var nn=en;var rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/\\(\\)?/g,an=function(t){var e=nn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(rn,(function(t,n,r,i){e.push(r?i.replace(on,"$1"):n||t)})),e}));var ln=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},cn=gt,fn=kt,un=mt?mt.prototype:void 0,hn=un?un.toString:void 0;var dn=function t(e){if("string"==typeof e)return e;if(cn(e))return ln(e,t)+"";if(fn(e))return hn?hn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},sn=dn;var gn=gt,pn=Rt,yn=an,vn=function(t){return null==t?"":sn(t)};var mn=kt;var Fn=function(t,e){return gn(t)?t:pn(t,e)?[t]:yn(vn(t))},Sn=function(t){if("string"==typeof t||mn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var bn=function(t,e){for(var n=0,r=(e=Fn(e,t)).length;null!=t&&n<r;)t=t[Sn(e[n++])];return n&&n==r?t:void 0};var Bn=function(t,e,n){var r=null==t?void 0:bn(t,e);return void 0===r?n:r};const wn=(t,e,n)=>e?Bn(n,e)||Bn(t,e):n||t,Hn=(t,e)=>{const n=e||t.defaultValue;return Bn(t.collections,n)};var Dn;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Dn||(Dn={}));const $n={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},En=t=>e=>{const n=e.theme,r=Hn($n,n[Dn.colorScheme]);return n.options&&n.options.color?wn(r,t,n.options.color):wn(r,t)},_n=(En("Brand.1"),En("Brand.2"),En("Brand.3"),En("Brand.4"),En("Brand.5"),En("Brand.6"),En("Primary")),On=(En("PrimaryDark"),En("Secondary")),zn=(En("Accent.Light.1"),En("Accent.Light.2"),En("Accent.Light.3"),En("Accent.Light.4"),En("Accent.Light.5"),En("Accent.Light.6"),En("Accent.Dark.1"),En("Accent.Dark.2"),En("Accent.Dark.3"),{1:En("Neutral.1"),2:En("Neutral.2"),3:En("Neutral.3"),4:En("Neutral.4"),5:En("Neutral.5"),6:En("Neutral.6"),7:En("Neutral.7"),8:En("Neutral.8")}),An=(En("Validation.Green.Text"),En("Validation.Green.Icon"),En("Validation.Green.Border"),En("Validation.Green.Background"),En("Validation.Orange.Text"),En("Validation.Orange.Icon"),En("Validation.Orange.Border"),En("Validation.Orange.Background"),En("Validation.Orange.Badge"),En("Validation.Red.Text"),En("Validation.Red.Icon"),En("Validation.Red.Border"),En("Validation.Red.Background"),En("Validation.Blue.Text"),En("Validation.Blue.Icon"),En("Validation.Blue.Border"),En("Validation.Blue.Background"),En("Shadow.Accent"),En("Shadow.Red"),En("Shadow.Elevation"),t=>Object.keys(dt).reduce(((e,n)=>{const r=dt[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{})),kn=An("max-width"),Wn=(An("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),xn={collections:{base:{D1:{fontFamily:Wn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},jn=t=>e=>{const n=e.theme,r=Hn(xn,n[Dn.textStyleScheme]);return n.options&&n.options.textStyle?wn(r,t,n.options.textStyle):wn(r,t)},Cn={D1:{fontFamily:jn("D1.fontFamily"),fontSize:jn("D1.fontSize"),fontWeight:jn("D1.fontWeight"),lineHeight:jn("D1.lineHeight"),letterSpacing:jn("D1.letterSpacing")},D2:{fontFamily:jn("D2.fontFamily"),fontSize:jn("D2.fontSize"),fontWeight:jn("D2.fontWeight"),lineHeight:jn("D2.lineHeight"),letterSpacing:jn("D2.letterSpacing")},D3:{fontFamily:jn("D3.fontFamily"),fontSize:jn("D3.fontSize"),fontWeight:jn("D3.fontWeight"),lineHeight:jn("D3.lineHeight"),letterSpacing:jn("D3.letterSpacing")},D4:{fontFamily:jn("D4.fontFamily"),fontSize:jn("D4.fontSize"),fontWeight:jn("D4.fontWeight"),lineHeight:jn("D4.lineHeight"),letterSpacing:jn("D4.letterSpacing")},DBody:{fontFamily:jn("DBody.fontFamily"),fontSize:jn("DBody.fontSize"),fontWeight:jn("DBody.fontWeight"),lineHeight:jn("DBody.lineHeight"),letterSpacing:jn("DBody.letterSpacing")},H1:{fontFamily:jn("H1.fontFamily"),fontSize:jn("H1.fontSize"),fontWeight:jn("H1.fontWeight"),lineHeight:jn("H1.lineHeight"),letterSpacing:jn("H1.letterSpacing")},H2:{fontFamily:jn("H2.fontFamily"),fontSize:jn("H2.fontSize"),fontWeight:jn("H2.fontWeight"),lineHeight:jn("H2.lineHeight"),letterSpacing:jn("H2.letterSpacing")},H3:{fontFamily:jn("H3.fontFamily"),fontSize:jn("H3.fontSize"),fontWeight:jn("H3.fontWeight"),lineHeight:jn("H3.lineHeight"),letterSpacing:jn("H3.letterSpacing")},H4:{fontFamily:jn("H4.fontFamily"),fontSize:jn("H4.fontSize"),fontWeight:jn("H4.fontWeight"),lineHeight:jn("H4.lineHeight"),letterSpacing:jn("H4.letterSpacing")},H5:{fontFamily:jn("H5.fontFamily"),fontSize:jn("H5.fontSize"),fontWeight:jn("H5.fontWeight"),lineHeight:jn("H5.lineHeight"),letterSpacing:jn("H5.letterSpacing")},H6:{fontFamily:jn("H6.fontFamily"),fontSize:jn("H6.fontSize"),fontWeight:jn("H6.fontWeight"),lineHeight:jn("H6.lineHeight"),letterSpacing:jn("H6.letterSpacing")},Body:{fontFamily:jn("Body.fontFamily"),fontSize:jn("Body.fontSize"),fontWeight:jn("Body.fontWeight"),lineHeight:jn("Body.lineHeight"),letterSpacing:jn("Body.letterSpacing")},BodySmall:{fontFamily:jn("BodySmall.fontFamily"),fontSize:jn("BodySmall.fontSize"),fontWeight:jn("BodySmall.fontWeight"),lineHeight:jn("BodySmall.lineHeight"),letterSpacing:jn("BodySmall.letterSpacing")},XSmall:{fontFamily:jn("XSmall.fontFamily"),fontSize:jn("XSmall.fontSize"),fontWeight:jn("XSmall.fontWeight"),lineHeight:jn("XSmall.lineHeight"),letterSpacing:jn("XSmall.letterSpacing")}},Rn=t=>{switch(t){case 700:case"bold":return Wn.Bold;case 600:case"semibold":return Wn.Semibold;case 300:case"light":return Wn.Light;case 400:case"regular":return Wn.Regular;default:return""}},Tn=(t,e)=>n=>{const r=Cn[t].fontFamily(n),i=Cn[t].fontWeight(n);return Object.values(Wn).includes(r)?y`
                font-family: ${Rn(e)||Rn(i)||r};
                font-weight: normal !important;
            `:y`
            font-family: ${r};
            font-weight: ${(Pn(e)||i)??"normal"};
        `},Pn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=(t,e,n=!1)=>r=>{const i=Cn[t],o=i.fontSize(r);return y`
            ${Tn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},In=(t=!1,e=!1)=>e?y`
            display: block;
        `:t?y`
            display: inline;
        `:y`
            display: block;
        `;var Ln;!function(t){t.D1=p.h1`
        ${t=>y`
                ${Vn("D1",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.D2=p.h1`
        ${t=>y`
                ${Vn("D2",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.D3=p.h1`
        ${t=>y`
                ${Vn("D3",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.D4=p.h1`
        ${t=>y`
                ${Vn("D4",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.DBody=p.h1`
        ${t=>y`
                ${Vn("DBody",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H1=p.h1`
        ${t=>y`
                ${Vn("H1",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H2=p.h2`
        ${t=>y`
                ${Vn("H2",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H3=p.h3`
        ${t=>y`
                ${Vn("H3",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H4=p.h4`
        ${t=>y`
                ${Vn("H4",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H5=p.h5`
        ${t=>y`
                ${Vn("H5",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.H6=p.h6`
        ${t=>y`
                ${Vn("H6",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.Body=p.p`
        ${t=>y`
                ${Vn("Body",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=p.p`
        ${t=>y`
                ${Vn("BodySmall",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.XSmall=p.span`
        ${t=>y`
                ${Vn("XSmall",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${In(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Xn({...t,textStyle:"Body"}),Small:t=>Xn({...t,textStyle:"BodySmall"})}}(Ln||(Ln={}));const Nn=p.a`
    ${t=>y`
            ${Vn(t.textStyle,t.weight)}
            color: ${_n};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${On};

                svg {
                    color: ${On};
                }
            }
        `}
`,Mn=p(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xn=({external:n=!1,children:r,...i})=>t(Nn,{...i,children:[r,n&&e(Mn,{})]}),Gn=p.div`
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
`,Un=p.ul`
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
`,qn=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${kn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,Jn=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,Kn=p(g)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${zn[4]};
`,Qn=p(Ln.BodySmall)`
    margin: 0.25rem !important;
`,Yn=p(Ln.Hyperlink.Small)`
    margin: 0.25rem !important;
`,Zn=({links:r,fadeColor:i,fadePosition:l="both",itemStyle:c,id:f,...h})=>{const[s,g]=a(!!l),[p,y]=a("left"===l||"both"===l),[v,m]=a("right"===l||"both"===l),S=o(null),b=o(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,l=void 0===i?1e3:i,c=t.refreshOptions,f=t.handleWidth,u=void 0===f||f,h=t.handleHeight,d=void 0===h||h,s=t.targetRef,g=t.observerOptions,p=t.onResize,y=o(n),v=o(null),m=null!=s?s:v,S=o(),b=a({width:void 0,height:void 0}),B=b[0],w=b[1];ht((function(){if(!ct()){var t=ut(p,w,u,d);S.current=at((function(e){(u||d)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!ct()&&t({width:r,height:i}),y.current=!1}))}),r,l,c);var e=new window.ResizeObserver(S.current);return m.current&&e.observe(m.current,g),function(){e.disconnect();var t=S.current;t&&t.cancel&&t.cancel()}}}),[r,l,c,u,d,p,g,m.current]),F({ref:m},B)}({onResize:d((()=>{const t=b.current,e=S.current;t&&e&&r&&r.length>1&&window.innerWidth<=dt.tablet&&(t.scrollLeft=t.scrollWidth-e.offsetWidth)}),[r.length]),targetRef:S,refreshMode:"debounce",refreshRate:50});const B=()=>{if(s){g(window.innerWidth<dt.tablet);const t=b.current,e=S.current;t&&e&&t.scrollWidth>e.offsetWidth?(g(!0),y(t.scrollLeft>=1),m(t.scrollWidth-t.scrollLeft>e.offsetWidth)):g(!1)}};if(u((()=>{const t=b.current;return B(),window.addEventListener("resize",B),t&&t.addEventListener("scroll",B),()=>{window.removeEventListener("resize",B),t&&t.removeEventListener("scroll",B)}}),[]),!r)return null;return t(Gn,{ref:S,id:f||"breadcrumb",...h,children:[e("nav",{children:e(Un,{ref:b,children:r.map(((n,i)=>{let o;return n.children?(o=i!==r.length-1&&n.href?e(Yn,{...n,weight:"semibold"}):e(Qn,{weight:"semibold",children:n.children}),t(Jn,{$styleProps:c,children:[o,i<r.length-1&&e(Kn,{})]},i)):null}))})}),s&&(()=>{let r;return r=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},t(n,{children:[p&&e(qn,{$backgroundColor:r.left,$position:"left"}),v&&e(qn,{$backgroundColor:r.right,$position:"right"})]})})()]})};export{Zn as Breadcrumb};
//# sourceMappingURL=index.js.map
