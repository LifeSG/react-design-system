import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as S,SquareFillIcon as x,SquareIcon as _}from"@lifesg/react-icons";import{MagnifierIcon as F}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as O}from"@lifesg/react-icons/chevron-down";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function D(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var M=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j="object"==typeof B&&B&&B.Object===Object&&B,A=j,E="object"==typeof self&&self&&self.Object===Object&&self,C=A||E||Function("return this")(),z=C,I=function(){return z.Date.now()},T=/\s/;var P=function(e){for(var t=e.length;t--&&T.test(e.charAt(t)););return t},H=/^\s+/;var N=function(e){return e?e.slice(0,P(e)+1).replace(H,""):e},L=C.Symbol,R=L,V=Object.prototype,W=V.hasOwnProperty,Y=V.toString,q=R?R.toStringTag:void 0;var U=function(e){var t=W.call(e,q),n=e[q];try{e[q]=void 0;var r=!0}catch(e){}var i=Y.call(e);return r&&(t?e[q]=n:delete e[q]),i},Q=Object.prototype.toString;var Z=U,G=function(e){return Q.call(e)},X=L?L.toStringTag:void 0;var J=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?Z(e):G(e)};var K=function(e){return null!=e&&"object"==typeof e},ee=J,te=K;var ne=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},re=N,ie=M,oe=ne,ae=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ue=parseInt;var ce=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(ie(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ie(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=re(e);var n=se.test(e);return n||le.test(e)?ue(e.slice(2),n?2:8):ae.test(e)?NaN:+e},de=M,he=I,fe=ce,pe=Math.max,ge=Math.min;var me=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=he();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?ge(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=he(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=fe(t)||0,de(n)&&(c=!!n.leading,o=(d="maxWait"in n)?pe(fe(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(he())},y};var ye=Array.isArray,ve=ye,be=ne,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$e=/^\w*$/;var Se=function(e,t){if(ve(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!be(e))||($e.test(e)||!we.test(e)||null!=t&&e in Object(t))},xe=J,_e=M;var Fe,Oe=function(e){if(!_e(e))return!1;var t=xe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ke=C["__core-js_shared__"],De=(Fe=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Be=function(e){return!!De&&De in e},Me=Function.prototype.toString;var je=function(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=Oe,Ee=Be,Ce=M,ze=je,Ie=/^\[object .+?Constructor\]$/,Te=Function.prototype,Pe=Object.prototype,He=Te.toString,Ne=Pe.hasOwnProperty,Le=RegExp("^"+He.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e){return!(!Ce(e)||Ee(e))&&(Ae(e)?Le:Ie).test(ze(e))},Ve=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=Ve(e,t);return Re(n)?n:void 0},Ye=We(Object,"create"),qe=Ye;var Ue=function(){this.__data__=qe?qe(null):{},this.size=0};var Qe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ze=Ye,Ge=Object.prototype.hasOwnProperty;var Xe=function(e){var t=this.__data__;if(Ze){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ge.call(t,e)?t[e]:void 0},Je=Ye,Ke=Object.prototype.hasOwnProperty;var et=Ye;var tt=Ue,nt=Qe,rt=Xe,it=function(e){var t=this.__data__;return Je?void 0!==t[e]:Ke.call(t,e)},ot=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=it,at.prototype.set=ot;var st=at;var lt=function(){this.__data__=[],this.size=0};var ut=function(e,t){return e===t||e!=e&&t!=t},ct=ut;var dt=function(e,t){for(var n=e.length;n--;)if(ct(e[n][0],t))return n;return-1},ht=dt,ft=Array.prototype.splice;var pt=dt;var gt=dt;var mt=dt;var yt=lt,vt=function(e){var t=this.__data__,n=ht(t,e);return!(n<0)&&(n==t.length-1?t.pop():ft.call(t,n,1),--this.size,!0)},bt=function(e){var t=this.__data__,n=pt(t,e);return n<0?void 0:t[n][1]},wt=function(e){return gt(this.__data__,e)>-1},$t=function(e,t){var n=this.__data__,r=mt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function St(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}St.prototype.clear=yt,St.prototype.delete=vt,St.prototype.get=bt,St.prototype.has=wt,St.prototype.set=$t;var xt=St,_t=We(C,"Map"),Ft=st,Ot=xt,kt=_t;var Dt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Bt=function(e,t){var n=e.__data__;return Dt(t)?n["string"==typeof t?"string":"hash"]:n.map},Mt=Bt;var jt=Bt;var At=Bt;var Et=Bt;var Ct=function(){this.size=0,this.__data__={hash:new Ft,map:new(kt||Ot),string:new Ft}},zt=function(e){var t=Mt(this,e).delete(e);return this.size-=t?1:0,t},It=function(e){return jt(this,e).get(e)},Tt=function(e){return At(this,e).has(e)},Pt=function(e,t){var n=Et(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ht.prototype.clear=Ct,Ht.prototype.delete=zt,Ht.prototype.get=It,Ht.prototype.has=Tt,Ht.prototype.set=Pt;var Nt=Ht,Lt=Nt;function Rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Rt.Cache||Lt),n}Rt.Cache=Lt;var Vt=Rt;var Wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,qt=function(e){var t=Vt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wt,(function(e,n,r,i){t.push(r?i.replace(Yt,"$1"):n||e)})),t}));var Ut=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Qt=ye,Zt=ne,Gt=L?L.prototype:void 0,Xt=Gt?Gt.toString:void 0;var Jt=function e(t){if("string"==typeof t)return t;if(Qt(t))return Ut(t,e)+"";if(Zt(t))return Xt?Xt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Kt=Jt;var en=ye,tn=Se,nn=qt,rn=function(e){return null==e?"":Kt(e)};var on=function(e,t){return en(e)?e:tn(e,t)?[e]:nn(rn(e))},an=ne;var sn=function(e){if("string"==typeof e||an(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},ln=on,un=sn;var cn=function(e,t){for(var n=0,r=(t=ln(t,e)).length;null!=e&&n<r;)e=e[un(t[n++])];return n&&n==r?e:void 0},dn=cn;var hn=function(e,t,n){var r=null==e?void 0:dn(e,t);return void 0===r?n:r};const fn=(e,t,n)=>t?hn(n,t)||hn(e,t):n||e,pn=(e,t)=>{const n=t||e.defaultValue;return hn(e.collections,n)};var gn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(gn||(gn={}));const mn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},yn=e=>t=>{const n=t.theme,r=pn(mn,n[gn.colorScheme]);return n.options&&n.options.color?fn(r,e,n.options.color):fn(r,e)},vn={Brand:{1:yn("Brand.1"),2:yn("Brand.2"),3:yn("Brand.3"),4:yn("Brand.4"),5:yn("Brand.5"),6:yn("Brand.6")},Primary:yn("Primary"),PrimaryDark:yn("PrimaryDark"),Secondary:yn("Secondary"),Accent:{Light:{1:yn("Accent.Light.1"),2:yn("Accent.Light.2"),3:yn("Accent.Light.3"),4:yn("Accent.Light.4"),5:yn("Accent.Light.5"),6:yn("Accent.Light.6")},Dark:{1:yn("Accent.Dark.1"),2:yn("Accent.Dark.2"),3:yn("Accent.Dark.3")}},Neutral:{1:yn("Neutral.1"),2:yn("Neutral.2"),3:yn("Neutral.3"),4:yn("Neutral.4"),5:yn("Neutral.5"),6:yn("Neutral.6"),7:yn("Neutral.7"),8:yn("Neutral.8")},Validation:{Green:{Text:yn("Validation.Green.Text"),Icon:yn("Validation.Green.Icon"),Border:yn("Validation.Green.Border"),Background:yn("Validation.Green.Background")},Orange:{Text:yn("Validation.Orange.Text"),Icon:yn("Validation.Orange.Icon"),Border:yn("Validation.Orange.Border"),Background:yn("Validation.Orange.Background"),Badge:yn("Validation.Orange.Badge")},Red:{Text:yn("Validation.Red.Text"),Icon:yn("Validation.Red.Icon"),Border:yn("Validation.Red.Border"),Background:yn("Validation.Red.Background")},Blue:{Text:yn("Validation.Blue.Text"),Icon:yn("Validation.Blue.Icon"),Border:yn("Validation.Blue.Border"),Background:yn("Validation.Blue.Background")}},Shadow:{Accent:yn("Shadow.Accent"),Red:yn("Shadow.Red"),Elevation:yn("Shadow.Elevation")}},bn={collections:{base:{InputBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${vn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${vn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},wn=e=>t=>{var n;const r=t.theme,i=pn(bn,r[gn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?fn(i,e,r.options.designToken):fn(i,e)},$n=wn("InputBoxShadow"),Sn=wn("InputErrorBoxShadow"),xn=(wn("ElevationBoxShadow"),wn("Table.Header"),wn("Table.Cell.Primary"),wn("Table.Cell.Secondary"),wn("Table.Cell.Selected"),wn("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),_n={collections:{base:{D1:{fontFamily:xn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Fn=e=>t=>{const n=t.theme,r=pn(_n,n[gn.textStyleScheme]);return n.options&&n.options.textStyle?fn(r,e,n.options.textStyle):fn(r,e)},On={D1:{fontFamily:Fn("D1.fontFamily"),fontSize:Fn("D1.fontSize"),fontWeight:Fn("D1.fontWeight"),lineHeight:Fn("D1.lineHeight"),letterSpacing:Fn("D1.letterSpacing")},D2:{fontFamily:Fn("D2.fontFamily"),fontSize:Fn("D2.fontSize"),fontWeight:Fn("D2.fontWeight"),lineHeight:Fn("D2.lineHeight"),letterSpacing:Fn("D2.letterSpacing")},D3:{fontFamily:Fn("D3.fontFamily"),fontSize:Fn("D3.fontSize"),fontWeight:Fn("D3.fontWeight"),lineHeight:Fn("D3.lineHeight"),letterSpacing:Fn("D3.letterSpacing")},D4:{fontFamily:Fn("D4.fontFamily"),fontSize:Fn("D4.fontSize"),fontWeight:Fn("D4.fontWeight"),lineHeight:Fn("D4.lineHeight"),letterSpacing:Fn("D4.letterSpacing")},DBody:{fontFamily:Fn("DBody.fontFamily"),fontSize:Fn("DBody.fontSize"),fontWeight:Fn("DBody.fontWeight"),lineHeight:Fn("DBody.lineHeight"),letterSpacing:Fn("DBody.letterSpacing")},H1:{fontFamily:Fn("H1.fontFamily"),fontSize:Fn("H1.fontSize"),fontWeight:Fn("H1.fontWeight"),lineHeight:Fn("H1.lineHeight"),letterSpacing:Fn("H1.letterSpacing")},H2:{fontFamily:Fn("H2.fontFamily"),fontSize:Fn("H2.fontSize"),fontWeight:Fn("H2.fontWeight"),lineHeight:Fn("H2.lineHeight"),letterSpacing:Fn("H2.letterSpacing")},H3:{fontFamily:Fn("H3.fontFamily"),fontSize:Fn("H3.fontSize"),fontWeight:Fn("H3.fontWeight"),lineHeight:Fn("H3.lineHeight"),letterSpacing:Fn("H3.letterSpacing")},H4:{fontFamily:Fn("H4.fontFamily"),fontSize:Fn("H4.fontSize"),fontWeight:Fn("H4.fontWeight"),lineHeight:Fn("H4.lineHeight"),letterSpacing:Fn("H4.letterSpacing")},H5:{fontFamily:Fn("H5.fontFamily"),fontSize:Fn("H5.fontSize"),fontWeight:Fn("H5.fontWeight"),lineHeight:Fn("H5.lineHeight"),letterSpacing:Fn("H5.letterSpacing")},H6:{fontFamily:Fn("H6.fontFamily"),fontSize:Fn("H6.fontSize"),fontWeight:Fn("H6.fontWeight"),lineHeight:Fn("H6.lineHeight"),letterSpacing:Fn("H6.letterSpacing")},Body:{fontFamily:Fn("Body.fontFamily"),fontSize:Fn("Body.fontSize"),fontWeight:Fn("Body.fontWeight"),lineHeight:Fn("Body.lineHeight"),letterSpacing:Fn("Body.letterSpacing")},BodySmall:{fontFamily:Fn("BodySmall.fontFamily"),fontSize:Fn("BodySmall.fontSize"),fontWeight:Fn("BodySmall.fontWeight"),lineHeight:Fn("BodySmall.lineHeight"),letterSpacing:Fn("BodySmall.letterSpacing")},XSmall:{fontFamily:Fn("XSmall.fontFamily"),fontSize:Fn("XSmall.fontSize"),fontWeight:Fn("XSmall.fontWeight"),lineHeight:Fn("XSmall.lineHeight"),letterSpacing:Fn("XSmall.letterSpacing")}},kn=e=>{switch(e){case 700:case"bold":return xn.Bold;case 600:case"semibold":return xn.Semibold;case 300:case"light":return xn.Light;case 400:case"regular":return xn.Regular;default:return""}},Dn=(e,t)=>n=>{var r;const i=On[e].fontFamily(n),o=On[e].fontWeight(n);return Object.values(xn).includes(i)?g`
                font-family: ${kn(t)||kn(o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=Bn(t)||o)&&void 0!==r?r:"normal"};
        `},Bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Mn=(e,t,n=!1)=>r=>{const i=On[e],o=i.fontSize(r);return g`
            ${Dn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jn=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var An;!function(e){e.D1=p.h1`
        ${e=>g`
                ${Mn("D1",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${Mn("D2",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${Mn("D3",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${Mn("D4",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${Mn("DBody",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${Mn("H1",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${Mn("H2",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${Mn("H3",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${Mn("H4",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${Mn("H5",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${Mn("H6",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${Mn("Body",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${Mn("BodySmall",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${Mn("XSmall",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>zn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(An||(An={}));const En=p.a`
    ${e=>g`
            ${Mn(e.textStyle,e.weight)}
            color: ${vn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${vn.Secondary};

                svg {
                    color: ${vn.Secondary};
                }
            }
        `}
`,Cn=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zn=n=>{var{external:r=!1,children:i}=n,o=k(n,["external","children"]);return e(En,Object.assign({},o,{children:[i,r&&t(Cn,{})]}))};var In;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(In||(In={}));const Tn=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${vn.Neutral[5]};
    border-radius: 4px;
    background: ${vn.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${vn.Accent.Light[1]};
        box-shadow: ${$n};
    }

    ${e=>e.$readOnly?g`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?g`
                background: ${vn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${vn.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${vn.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${vn.Validation.Red.Border};
                    box-shadow: ${Sn};
                }
            `:void 0}
`,Pn=p.input`
    ${Mn("Body","regular")}
    color: ${vn.Neutral[1]};
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
        color: ${vn.Neutral[3]};
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
`;var Hn={exports:{}};Hn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Nn,Ln,Rn=Hn.exports,Vn={exports:{}},Wn=Vn.exports=(Nn={year:0,month:1,day:2,hour:3,minute:4,second:5},Ln={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ln[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ln[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=Nn[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Yn={exports:{}};Yn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},_=v;_.l=S,_.i=$,_.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=_.p(c),g=function(e){var t=x(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=F.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,F,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var qn=Yn.exports,Un={exports:{}};Un.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Qn=Un.exports,Zn={exports:{}};Zn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Gn=Zn.exports,Xn={exports:{}};Xn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Jn,Kn=Xn.exports;qn.extend(Qn),qn.extend(Gn),qn.extend(Kn),qn.extend(Rn),qn.extend(Wn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=qn(t).startOf("week");return er(n).map((e=>tr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return tr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(qn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+qn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=qn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Jn||(Jn={}));const er=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},tr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},nr=[1,3,5,7,8,10,12],rr=[4,6,9,11];var ir,or,ar,sr;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":nr.includes(o)?Math.min(i,31).toString():rr.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=qn(e,n);return qn(t,n).diff(r,"minute")},e.toDayjs=e=>e?qn(e):qn()}(ir||(ir={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!qn(e).isBefore(r,"day"))||!(!i||!qn(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(qn(e).isValid())return e}return""}}(or||(or={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ar||(ar={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(sr||(sr={}));const lr=p.input`
    ${Mn("Body","regular")}
    color: ${vn.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${vn.Neutral[3]};
    }

    ${e=>"number"===e.type?g`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?g`
                cursor: not-allowed;
            `:void 0}
`,ur=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${vn.Neutral[3]};
    background-color: transparent;
    border: none;
`,cr=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,dr=p.div`
    display: flex;
    width: 100%;
`,hr=i.forwardRef(((r,i)=>{var{value:s,spacing:l,type:u,error:c,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,v=k(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=o();a(i,(()=>b.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>sr.transformWithSpaces(e,l)}),$=e=>{f&&(x()?_(e):f(e))},S=()=>{p&&p(),b&&b.current&&b.current.focus()},x=()=>"tel"===u&&l,_=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},F=s?(e=>e?x()?sr.transformWithSpaces(e,l):e:"")(s):s,O=()=>e(n,{children:[t(lr,Object.assign({"data-testid":"input",ref:b,disabled:d,value:F,onChange:$,type:u,readOnly:h},v)),g&&!d&&!h&&!!s&&t(ur,Object.assign({onClick:S,type:"button"},{children:t(cr,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(dr,Object.assign({className:m},{children:O()})):t(Tn,Object.assign({$disabled:d,$error:c,$readOnly:h,className:m},{children:O()}))})}));var fr=xt;var pr=xt,gr=_t,mr=Nt;var yr=xt,vr=function(){this.__data__=new fr,this.size=0},br=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},wr=function(e){return this.__data__.get(e)},$r=function(e){return this.__data__.has(e)},Sr=function(e,t){var n=this.__data__;if(n instanceof pr){var r=n.__data__;if(!gr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new mr(r)}return n.set(e,t),this.size=n.size,this};function xr(e){var t=this.__data__=new yr(e);this.size=t.size}xr.prototype.clear=vr,xr.prototype.delete=br,xr.prototype.get=wr,xr.prototype.has=$r,xr.prototype.set=Sr;var _r=xr;var Fr=Nt,Or=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kr=function(e){return this.__data__.has(e)};function Dr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Fr;++t<n;)this.add(e[t])}Dr.prototype.add=Dr.prototype.push=Or,Dr.prototype.has=kr;var Br=Dr,Mr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jr=function(e,t){return e.has(t)};var Ar=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&n?new Br:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Mr(t,(function(e,t){if(!jr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Er=C.Uint8Array,Cr=ut,zr=Ar,Ir=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Tr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Pr=L?L.prototype:void 0,Hr=Pr?Pr.valueOf:void 0;var Nr=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Er(e),new Er(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Cr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ir;case"[object Set]":var l=1&r;if(s||(s=Tr),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;r|=2,a.set(e,t);var c=zr(s(e),s(t),r,i,o,a);return a.delete(e),c;case"[object Symbol]":if(Hr)return Hr.call(e)==Hr.call(t)}return!1};var Lr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Rr=ye;var Vr=function(e,t,n){var r=t(e);return Rr(e)?r:Lr(r,n(e))};var Wr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Yr=function(){return[]},qr=Object.prototype.propertyIsEnumerable,Ur=Object.getOwnPropertySymbols,Qr=Ur?function(e){return null==e?[]:(e=Object(e),Wr(Ur(e),(function(t){return qr.call(e,t)})))}:Yr;var Zr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Gr=J,Xr=K;var Jr=function(e){return Xr(e)&&"[object Arguments]"==Gr(e)},Kr=K,ei=Object.prototype,ti=ei.hasOwnProperty,ni=ei.propertyIsEnumerable,ri=Jr(function(){return arguments}())?Jr:function(e){return Kr(e)&&ti.call(e,"callee")&&!ni.call(e,"callee")},ii={exports:{}};var oi=function(){return!1};!function(e,t){var n=C,r=oi,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(ii,ii.exports);var ai=/^(?:0|[1-9]\d*)$/;var si=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ai.test(e))&&e>-1&&e%1==0&&e<t};var li=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ui=J,ci=li,di=K,hi={};hi["[object Float32Array]"]=hi["[object Float64Array]"]=hi["[object Int8Array]"]=hi["[object Int16Array]"]=hi["[object Int32Array]"]=hi["[object Uint8Array]"]=hi["[object Uint8ClampedArray]"]=hi["[object Uint16Array]"]=hi["[object Uint32Array]"]=!0,hi["[object Arguments]"]=hi["[object Array]"]=hi["[object ArrayBuffer]"]=hi["[object Boolean]"]=hi["[object DataView]"]=hi["[object Date]"]=hi["[object Error]"]=hi["[object Function]"]=hi["[object Map]"]=hi["[object Number]"]=hi["[object Object]"]=hi["[object RegExp]"]=hi["[object Set]"]=hi["[object String]"]=hi["[object WeakMap]"]=!1;var fi=function(e){return di(e)&&ci(e.length)&&!!hi[ui(e)]};var pi=function(e){return function(t){return e(t)}},gi={exports:{}};!function(e,t){var n=j,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(gi,gi.exports);var mi=fi,yi=pi,vi=gi.exports,bi=vi&&vi.isTypedArray,wi=bi?yi(bi):mi,$i=Zr,Si=ri,xi=ye,_i=ii.exports,Fi=si,Oi=wi,ki=Object.prototype.hasOwnProperty;var Di=function(e,t){var n=xi(e),r=!n&&Si(e),i=!n&&!r&&_i(e),o=!n&&!r&&!i&&Oi(e),a=n||r||i||o,s=a?$i(e.length,String):[],l=s.length;for(var u in e)!t&&!ki.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Fi(u,l))||s.push(u);return s},Bi=Object.prototype;var Mi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Bi)};var ji=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Ai=Mi,Ei=ji,Ci=Object.prototype.hasOwnProperty;var zi=Oe,Ii=li;var Ti=function(e){return null!=e&&Ii(e.length)&&!zi(e)},Pi=Di,Hi=function(e){if(!Ai(e))return Ei(e);var t=[];for(var n in Object(e))Ci.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ni=Ti;var Li=function(e){return Ni(e)?Pi(e):Hi(e)},Ri=Vr,Vi=Qr,Wi=Li;var Yi=function(e){return Ri(e,Wi,Vi)},qi=Object.prototype.hasOwnProperty;var Ui=function(e,t,n,r,i,o){var a=1&n,s=Yi(e),l=s.length;if(l!=Yi(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:qi.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var g=e[c=s[u]],m=t[c];if(r)var y=a?r(m,g,c,t,e,o):r(g,m,c,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Qi=We(C,"DataView"),Zi=_t,Gi=We(C,"Promise"),Xi=We(C,"Set"),Ji=We(C,"WeakMap"),Ki=J,eo=je,to="[object Map]",no="[object Promise]",ro="[object Set]",io="[object WeakMap]",oo="[object DataView]",ao=eo(Qi),so=eo(Zi),lo=eo(Gi),uo=eo(Xi),co=eo(Ji),ho=Ki;(Qi&&ho(new Qi(new ArrayBuffer(1)))!=oo||Zi&&ho(new Zi)!=to||Gi&&ho(Gi.resolve())!=no||Xi&&ho(new Xi)!=ro||Ji&&ho(new Ji)!=io)&&(ho=function(e){var t=Ki(e),n="[object Object]"==t?e.constructor:void 0,r=n?eo(n):"";if(r)switch(r){case ao:return oo;case so:return to;case lo:return no;case uo:return ro;case co:return io}return t});var fo=_r,po=Ar,go=Nr,mo=Ui,yo=ho,vo=ye,bo=ii.exports,wo=wi,$o="[object Arguments]",So="[object Array]",xo="[object Object]",_o=Object.prototype.hasOwnProperty;var Fo=function(e,t,n,r,i,o){var a=vo(e),s=vo(t),l=a?So:yo(e),u=s?So:yo(t),c=(l=l==$o?xo:l)==xo,d=(u=u==$o?xo:u)==xo,h=l==u;if(h&&bo(e)){if(!bo(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new fo),a||wo(e)?po(e,t,n,r,i,o):go(e,t,l,n,r,i,o);if(!(1&n)){var f=c&&_o.call(e,"__wrapped__"),p=d&&_o.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new fo),i(g,m,n,r,o)}}return!!h&&(o||(o=new fo),mo(e,t,n,r,i,o))},Oo=K;var ko=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Oo(t)&&!Oo(n)?t!=t&&n!=n:Fo(t,n,r,i,e,o))},Do=_r,Bo=ko;var Mo=M;var jo=function(e){return e==e&&!Mo(e)},Ao=jo,Eo=Li;var Co=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},zo=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new Do;if(r)var h=r(u,c,l,e,t,d);if(!(void 0===h?Bo(c,u,3,r,d):h))return!1}}return!0},Io=function(e){for(var t=Eo(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Ao(i)]}return t},To=Co;var Po=on,Ho=ri,No=ye,Lo=si,Ro=li,Vo=sn;var Wo=function(e,t){return null!=e&&t in Object(e)},Yo=function(e,t,n){for(var r=-1,i=(t=Po(t,e)).length,o=!1;++r<i;){var a=Vo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Ro(i)&&Lo(a,i)&&(No(e)||Ho(e))};var qo=ko,Uo=hn,Qo=function(e,t){return null!=e&&Yo(e,t,Wo)},Zo=Se,Go=jo,Xo=Co,Jo=sn;var Ko=cn;var ea=function(e){return function(t){return null==t?void 0:t[e]}},ta=function(e){return function(t){return Ko(t,e)}},na=Se,ra=sn;var ia=function(e){var t=Io(e);return 1==t.length&&t[0][2]?To(t[0][0],t[0][1]):function(n){return n===e||zo(n,e,t)}},oa=function(e,t){return Zo(e)&&Go(t)?Xo(Jo(e),t):function(n){var r=Uo(n,e);return void 0===r&&r===t?Qo(n,e):qo(t,r,3)}},aa=function(e){return e},sa=ye,la=function(e){return na(e)?ea(ra(e)):ta(e)};var ua=function(e){return"function"==typeof e?e:null==e?aa:"object"==typeof e?sa(e)?oa(e[0],e[1]):ia(e):la(e)},ca=ua,da=Ti,ha=Li;var fa=function(e){return function(t,n,r){var i=Object(t);if(!da(t)){var o=ca(n);t=ha(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var pa=ce,ga=1/0;var ma=function(e){return e?(e=pa(e))===ga||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ya=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},va=ua,ba=function(e){var t=ma(e),n=t%1;return t==t?n?t-n:t:0},wa=Math.max;var $a=fa((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ba(n);return i<0&&(i=wa(r+i,0)),ya(e,va(t),i)})),Sa=ko;var xa=function(e,t){return Sa(e,t)};let _a=Na();const Fa=e=>Ia(e,_a);let Oa=Na();Fa.write=e=>Ia(e,Oa);let ka=Na();Fa.onStart=e=>Ia(e,ka);let Da=Na();Fa.onFrame=e=>Ia(e,Da);let Ba=Na();Fa.onFinish=e=>Ia(e,Ba);let Ma=[];Fa.setTimeout=(e,t)=>{let n=Fa.now()+t,r=()=>{let e=Ma.findIndex((e=>e.cancel==r));~e&&Ma.splice(e,1),Ca-=~e?1:0},i={time:n,handler:e,cancel:r};return Ma.splice(ja(n),0,i),Ca+=1,Ta(),i};let ja=e=>~(~Ma.findIndex((t=>t.time>e))||~Ma.length);Fa.cancel=e=>{ka.delete(e),Da.delete(e),Ba.delete(e),_a.delete(e),Oa.delete(e)},Fa.sync=e=>{za=!0,Fa.batchedUpdates(e),za=!1},Fa.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Fa.onStart(n)}return r.handler=e,r.cancel=()=>{ka.delete(n),t=null},r};let Aa="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Fa.use=e=>Aa=e,Fa.now="undefined"!=typeof performance?()=>performance.now():Date.now,Fa.batchedUpdates=e=>e(),Fa.catch=console.error,Fa.frameLoop="always",Fa.advance=()=>{"demand"!==Fa.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ha()};let Ea=-1,Ca=0,za=!1;function Ia(e,t){za?(t.delete(e),e(0)):(t.add(e),Ta())}function Ta(){Ea<0&&(Ea=0,"demand"!==Fa.frameLoop&&Aa(Pa))}function Pa(){~Ea&&(Aa(Pa),Fa.batchedUpdates(Ha))}function Ha(){let e=Ea;Ea=Fa.now();let t=ja(Ea);t&&(La(Ma.splice(0,t),(e=>e.handler())),Ca-=t),Ca?(ka.flush(),_a.flush(e?Math.min(64,Ea-e):16.667),Da.flush(),Oa.flush(),Ba.flush()):Ea=-1}function Na(){let e=new Set,t=e;return{add(n){Ca+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ca-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ca-=t.size,La(t,(t=>t(n)&&e.add(t))),Ca+=e.size,t=e)}}}function La(e,t){e.forEach((e=>{try{t(e)}catch(e){Fa.catch(e)}}))}function Ra(){}const Va={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Wa(e,t){if(Va.arr(e)){if(!Va.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Ya=(e,t)=>e.forEach(t);function qa(e,t,n){if(Va.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Ua=e=>Va.und(e)?[]:Va.arr(e)?e:[e];function Qa(e,t){if(e.size){const n=Array.from(e);e.clear(),Ya(n,t)}}const Za=(e,...t)=>Qa(e,(e=>e(...t))),Ga=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Xa,Ja,Ka=null,es=!1,ts=Ra;var ns=Object.freeze({__proto__:null,get createStringInterpolator(){return Xa},get to(){return Ja},get colors(){return Ka},get skipAnimation(){return es},get willAdvance(){return ts},assign:e=>{e.to&&(Ja=e.to),e.now&&(Fa.now=e.now),void 0!==e.colors&&(Ka=e.colors),null!=e.skipAnimation&&(es=e.skipAnimation),e.createStringInterpolator&&(Xa=e.createStringInterpolator),e.requestAnimationFrame&&Fa.use(e.requestAnimationFrame),e.batchedUpdates&&(Fa.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ts=e.willAdvance),e.frameLoop&&(Fa.frameLoop=e.frameLoop)}});const rs=new Set;let is=[],os=[],as=0;const ss={get idle(){return!rs.size&&!is.length},start(e){as>e.priority?(rs.add(e),Fa.onStart(ls)):(us(e),Fa(ds))},advance:ds,sort(e){if(as)Fa.onFrame((()=>ss.sort(e)));else{const t=is.indexOf(e);~t&&(is.splice(t,1),cs(e))}},clear(){is=[],rs.clear()}};function ls(){rs.forEach(us),rs.clear(),Fa(ds)}function us(e){is.includes(e)||cs(e)}function cs(e){is.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(is,(t=>t.priority>e.priority)),0,e)}function ds(e){const t=os;for(let n=0;n<is.length;n++){const r=is[n];as=r.priority,r.idle||(ts(r),r.advance(e),r.idle||t.push(r))}return as=0,os=is,os.length=0,is=t,is.length>0}const hs="[-+]?\\d*\\.?\\d+",fs=hs+"%";function ps(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const gs=new RegExp("rgb"+ps(hs,hs,hs)),ms=new RegExp("rgba"+ps(hs,hs,hs,hs)),ys=new RegExp("hsl"+ps(hs,fs,fs)),vs=new RegExp("hsla"+ps(hs,fs,fs,hs)),bs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ws=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$s=/^#([0-9a-fA-F]{6})$/,Ss=/^#([0-9a-fA-F]{8})$/;function xs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _s(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=xs(i,r,e+1/3),a=xs(i,r,e),s=xs(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Fs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Os(e){return(parseFloat(e)%360+360)%360/360}function ks(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ds(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Bs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=$s.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ka&&void 0!==Ka[e]?Ka[e]:(t=gs.exec(e))?(Fs(t[1])<<24|Fs(t[2])<<16|Fs(t[3])<<8|255)>>>0:(t=ms.exec(e))?(Fs(t[1])<<24|Fs(t[2])<<16|Fs(t[3])<<8|ks(t[4]))>>>0:(t=bs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ss.exec(e))?parseInt(t[1],16)>>>0:(t=ws.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ys.exec(e))?(255|_s(Os(t[1]),Ds(t[2]),Ds(t[3])))>>>0:(t=vs.exec(e))?(_s(Os(t[1]),Ds(t[2]),Ds(t[3]))|ks(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ms=(e,t,n)=>{if(Va.fun(e))return e;if(Va.arr(e))return Ms({range:e,output:t,extrapolate:n});if(Va.str(e.output[0]))return Xa(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const js=1.70158,As=1.525*js,Es=js+1,Cs=2*Math.PI/3,zs=2*Math.PI/4.5,Is=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ts={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Es*e*e*e-js*e*e,easeOutBack:e=>1+Es*Math.pow(e-1,3)+js*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-As)/2:(Math.pow(2*e-2,2)*((As+1)*(2*e-2)+As)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Cs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Cs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zs)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zs)/2+1,easeInBounce:e=>1-Is(1-e),easeOutBounce:Is,easeInOutBounce:e=>e<.5?(1-Is(1-2*e))/2:(1+Is(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ps.apply(this,arguments)}const Hs=Symbol.for("FluidValue.get"),Ns=Symbol.for("FluidValue.observers"),Ls=e=>Boolean(e&&e[Hs]),Rs=e=>e&&e[Hs]?e[Hs]():e,Vs=e=>e[Ns]||null;function Ws(e,t){let n=e[Ns];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ys{constructor(e){if(this[Hs]=void 0,this[Ns]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");qs(this,e)}}const qs=(e,t)=>Zs(e,Hs,t);function Us(e,t){if(e[Hs]){let n=e[Ns];n||Zs(e,Ns,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Qs(e,t){let n=e[Ns];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ns]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Zs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Gs=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Xs=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Js=new RegExp(`(${Gs.source})(%|[a-z]+)`,"i"),Ks=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,el=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,tl=e=>{const[t,n]=nl(e);if(!t||Ga())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&el.test(n)?tl(n):n||e},nl=e=>{const t=el.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let rl;const il=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ol=e=>{rl||(rl=Ka?new RegExp(`(${Object.keys(Ka).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Rs(e).replace(el,tl).replace(Xs,Bs).replace(rl,Bs))),n=t.map((e=>e.match(Gs).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ms(Ps({},e,{output:t}))));return e=>{var n;const i=!Js.test(t[0])&&(null==(n=t.find((e=>Js.test(e))))?void 0:n.replace(Gs,""));let o=0;return t[0].replace(Gs,(()=>`${r[o++](e)}${i||""}`)).replace(Ks,il)}},al="react-spring: ",sl=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${al}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ll=sl(console.warn);const ul=sl(console.warn);function cl(e){return Va.str(e)&&("#"==e[0]||/\d/.test(e)||!Ga()&&el.test(e)||e in(Ka||{}))}const dl=Ga()?s:l,hl=()=>{const e=o(!1);return dl((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function fl(){const e=u()[1],t=hl();return()=>{t.current&&e(Math.random())}}const pl=e=>s(e,gl),gl=[];function ml(e){const t=o();return s((()=>{t.current=e})),t.current}const yl=Symbol.for("Animated:node"),vl=e=>e&&e[yl],bl=(e,t)=>{return n=e,r=yl,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},wl=e=>e&&e[yl]&&e[yl].getPayload();class $l{constructor(){this.payload=void 0,bl(this,this)}getPayload(){return this.payload||[]}}class Sl extends $l{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Va.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Sl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Va.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Va.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class xl extends Sl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ms({output:[e,e]})}static create(e){return new xl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Va.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ms({output:[this.getValue(),e]})),this._value=0,super.reset()}}const _l={dependencies:null};class Fl extends $l{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qa(this.source,((n,r)=>{var i;(i=n)&&i[yl]===i?t[r]=n.getValue(e):Ls(n)?t[r]=Rs(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ya(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qa(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){_l.dependencies&&Ls(e)&&_l.dependencies.add(e);const t=wl(e);t&&Ya(t,(e=>this.add(e)))}}class Ol extends Fl{constructor(e){super(e)}static create(e){return new Ol(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(kl)),!0)}}function kl(e){return(cl(e)?xl:Sl).create(e)}function Dl(e){const t=vl(e);return t?t.constructor:Va.arr(e)?Ol:cl(e)?xl:Sl}function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bl.apply(this,arguments)}const Ml=(e,t)=>{const n=!Va.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const l=o(null),u=n&&d((e=>{l.current=function(e,t){e&&(Va.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,h]=function(e,t){const n=new Set;_l.dependencies=n,e.style&&(e=Bl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Fl(e),_l.dependencies=null,[e,n]}(i,t),f=fl(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new jl(p,h),m=o();dl((()=>(m.current=g,Ya(h,(e=>Us(e,g))),()=>{m.current&&(Ya(m.current.deps,(e=>Qs(e,m.current))),Fa.cancel(m.current.update))}))),s(p,[]),pl((()=>()=>{const e=m.current;Ya(e.deps,(t=>Qs(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Bl({},y,{ref:u}))}))};class jl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Fa.write(this.update)}}const Al=Symbol.for("AnimatedComponent"),El=e=>Va.str(e)?e:e&&Va.str(e.displayName)?e.displayName:Va.fun(e)&&e.name||null;function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cl.apply(this,arguments)}function zl(e,...t){return Va.fun(e)?e(...t):e}const Il=(e,t)=>!0===e||!!(t&&e&&(Va.fun(e)?e(t):Ua(e).includes(t))),Tl=(e,t)=>Va.obj(e)?t&&e[t]:e,Pl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Hl=e=>e,Nl=(e,t=Hl)=>{let n=Ll;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Va.und(n)||(r[i]=n)}return r},Ll=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Rl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Vl(e){const t=function(e){const t={};let n=0;if(qa(e,((e,r)=>{Rl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return qa(e,((e,r)=>r in t||(n[r]=e))),n}return Cl({},e)}function Wl(e){return e=Rs(e),Va.arr(e)?e.map(Wl):cl(e)?ns.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Yl(e){return Va.fun(e)||Va.arr(e)&&Va.obj(e[0])}const ql=Cl({},{tension:170,friction:26},{mass:1,damping:1,easing:Ts.linear,clamp:!1});class Ul{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ql)}}function Ql(e,t){if(Va.und(t.decay)){const n=!Va.und(t.tension)||!Va.und(t.friction);!n&&Va.und(t.frequency)&&Va.und(t.damping)&&Va.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Zl=[];class Gl{constructor(){this.changed=!1,this.values=Zl,this.toValues=null,this.fromValues=Zl,this.to=void 0,this.from=void 0,this.config=new Ul,this.immediate=!1}}function Xl(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Il(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Va.und(n.pause)||(i.paused=Il(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Il(e,t)),u=zl(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-Fa.now()}function f(){u>0&&!ns.skipAnimation?(i.delayed=!0,c=Fa.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(Cl({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Jl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?tu(e.get()):t.every((e=>e.noop))?Kl(e.get()):eu(e.get(),t.every((e=>e.finished))),Kl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),eu=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),tu=e=>({value:e,cancelled:!0,finished:!1});function nu(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Nl(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&tu(r)||i!==n.asyncId&&eu(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new iu,a=new ou;return(async()=>{if(ns.skipAnimation)throw ru(n),a.result=eu(r,!1),d(a),a;f(o);const s=Va.obj(e)?Cl({},e):Cl({},t,{to:e});s.parentId=i,qa(u,((e,t)=>{Va.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(ns.skipAnimation)return ru(n),eu(r,!1);try{let t;t=Va.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=eu(r.get(),!0,!1)}catch(e){if(e instanceof iu)g=e.result;else{if(!(e instanceof ou))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Va.fun(a)&&Fa.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function ru(e,t){Qa(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class iu extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ou extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const au=e=>e instanceof lu;let su=1;class lu extends Ys{constructor(...e){super(...e),this.id=su++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=vl(this);return e&&e.getValue()}to(...e){return ns.to(this,e)}interpolate(...e){return ll(`${al}The "interpolate" function is deprecated in v9 (use "to" instead)`),ns.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ws(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ss.sort(this),Ws(this,{type:"priority",parent:this,priority:e})}}const uu=Symbol.for("SpringPhase"),cu=e=>(1&e[uu])>0,du=e=>(2&e[uu])>0,hu=e=>(4&e[uu])>0,fu=(e,t)=>t?e[uu]|=3:e[uu]&=-3,pu=(e,t)=>t?e[uu]|=4:e[uu]&=-5;class gu extends lu{constructor(e,t){if(super(),this.key=void 0,this.animation=new Gl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Va.und(e)||!Va.und(t)){const n=Va.obj(e)?Cl({},e):Cl({},t,{from:e});Va.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(du(this)||this._state.asyncTo)||hu(this)}get goal(){return Rs(this.animation.to)}get velocity(){const e=vl(this);return e instanceof Sl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return cu(this)}get isAnimating(){return du(this)}get isPaused(){return hu(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=wl(r.to);!a&&Ls(r.to)&&(o=Ua(Rs(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==xl?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Va.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(Va.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Va.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=vl(this),l=s.getValue();if(t){const e=Rs(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Fa.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(du(this)){const{to:e,config:t}=this.animation;Fa.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Va.und(e)?(n=this.queue||[],this.queue=[]):n=[Va.obj(e)?e:Cl({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Jl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ru(this._state,e&&this._lastCallId),Fa.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Va.obj(n)?n[t]:n,(null==n||Yl(n))&&(n=void 0),r=Va.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return cu(this)||(e.reverse&&([n,r]=[r,n]),r=Rs(r),Va.und(r)?vl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Cl({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Nl(n,((e,t)=>/^on/.test(t)?Tl(e,r):e))),Su(this,n,"onProps"),xu(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Xl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{hu(this)||(pu(this,!0),Za(a.pauseQueue),xu(this,"onPause",eu(this,mu(this,this.animation.to)),this))},resume:()=>{hu(this)&&(pu(this,!1),du(this)&&this._resume(),Za(a.resumeQueue),xu(this,"onResume",eu(this,mu(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=yu(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(tu(this));const r=!Va.und(e.to),i=!Va.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(tu(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!Va.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Wa(d,u);h&&(s.from=d),d=Rs(d);const f=!Wa(c,l);f&&this._focus(c);const p=Yl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ql(n=Cl({},n),t),t=Cl({},n,t)),Ql(e,t),Object.assign(e,t);for(const t in ql)null==e[t]&&(e[t]=ql[t]);let{mass:r,frequency:i,damping:o}=e;Va.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,zl(t.config,o),t.config!==a.config?zl(a.config,o):void 0);let v=vl(this);if(!v||Va.und(c))return n(eu(this,!0));const b=Va.und(t.reset)?i&&!t.default:!Va.und(d)&&Il(t.reset,o),w=b?d:this.get(),$=Wl(c),S=Va.num($)||Va.arr($)||cl($),x=!p&&(!S||Il(a.immediate||t.immediate,o));if(f){const e=Dl(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Ls(c),O=!1;if(!F){const e=b||!cu(this)&&h;(f||e)&&(O=Wa(Wl(w),$),F=!O),(Wa(s.immediate,x)||x)&&Wa(g.decay,m)&&Wa(g.velocity,y)||(F=!0)}if(O&&du(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Ls(l))&&(s.values=v.getPayload(),s.toValues=Ls(c)?null:_==xl?[1]:Ua($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),F)){const{onRest:e}=s;Ya($u,(e=>Su(this,t,e)));const r=eu(this,mu(this,l));Za(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Fa.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?zl(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(nu(t.to,t,this._state,this)):F?this._start():du(this)&&!f?this._pendingCalls.add(n):n(Kl(w))}_focus(e){const t=this.animation;e!==t.to&&(Vs(this)&&this._detach(),t.to=e,Vs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ls(t)&&(Us(t,this),au(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ls(e)&&Qs(e,this)}_set(e,t=!0){const n=Rs(e);if(!Va.und(n)){const e=vl(this);if(!e||!Wa(n,e.getValue())){const r=Dl(n);e&&e.constructor==r?e.setValue(n):bl(this,r.create(n)),e&&Fa.batchedUpdates((()=>{this._onChange(n,t)}))}}return vl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,xu(this,"onStart",eu(this,mu(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),zl(this.animation.onChange,e,this)),zl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;vl(this).reset(Rs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),du(this)||(fu(this,!0),hu(this)||this._resume())}_resume(){ns.skipAnimation?this.finish():ss.start(this)}_stop(e,t){if(du(this)){fu(this,!1);const n=this.animation;Ya(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ws(this,{type:"idle",parent:this});const r=t?tu(this.get()):eu(this.get(),mu(this,null!=e?e:n.to));Za(this._pendingCalls,r),n.changed&&(n.changed=!1,xu(this,"onRest",r,this))}}}function mu(e,t){const n=Wl(t);return Wa(Wl(e.get()),n)}function yu(e,t=e.loop,n=e.to){let r=zl(t);if(r){const i=!0!==r&&Vl(r),o=(i||e).reverse,a=!i||i.reset;return vu(Cl({},e,{loop:t,default:!1,pause:void 0,to:!o||Yl(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function vu(e){const{to:t,from:n}=e=Vl(e),r=new Set;return Va.obj(t)&&wu(t,r),Va.obj(n)&&wu(n,r),e.keys=r.size?Array.from(r):null,e}function bu(e){const t=vu(e);return Va.und(t.default)&&(t.default=Nl(t)),t}function wu(e,t){qa(e,((e,n)=>null!=e&&t.add(n)))}const $u=["onStart","onRest","onChange","onPause","onResume"];function Su(e,t,n){e.animation[n]=t[n]!==Pl(t,n)?Tl(t[n],e.key):void 0}function xu(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const _u=["onStart","onChange","onRest"];let Fu=1;class Ou{constructor(e,t){this.id=Fu++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Cl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Va.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(vu(e)),this}start(e){let{queue:t}=this;return e?t=Ua(e).map(vu):this.queue=[],this._flush?this._flush(this,t):(Eu(this,t),ku(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ya(Ua(t),(t=>n[t].stop(!!e)))}else ru(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Va.und(e))this.start({pause:!0});else{const t=this.springs;Ya(Ua(e),(e=>t[e].pause()))}return this}resume(e){if(Va.und(e))this.start({pause:!1});else{const t=this.springs;Ya(Ua(e),(e=>t[e].resume()))}return this}each(e){qa(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Qa(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Qa(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Qa(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Fa.onFrame(this._onFrame)}}function ku(e,t){return Promise.all(t.map((t=>Du(e,t)))).then((t=>Jl(e,t)))}async function Du(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Va.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Va.arr(i)||Va.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Ya(_u,(n=>{const r=t[n];if(Va.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Za(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Pl(t,"cancel");(c||f&&d.asyncId)&&h.push(Xl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ra,resume:Ra,start(t,n){f?(ru(d,e._lastAsyncId),n(tu(e))):(t.onRest=s,n(nu(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Jl(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=yu(t,a,i);if(n)return Eu(e,[n]),Du(e,n,!0)}return l&&Fa.batchedUpdates((()=>l(p,e,e.item))),p}function Bu(e,t){const n=Cl({},e.springs);return t&&Ya(Ua(t),(e=>{Va.und(e.keys)&&(e=vu(e)),Va.obj(e.to)||(e=Cl({},e,{to:void 0})),Au(n,e,(e=>ju(e)))})),Mu(e,n),n}function Mu(e,t){qa(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Us(t,e))}))}function ju(e,t){const n=new gu;return n.key=e,t&&Us(n,t),n}function Au(e,t,n){t.keys&&Ya(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Eu(e,t){Ya(t,(t=>{Au(e.springs,t,(t=>ju(t,e)))}))}const Cu=["children"],zu=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Cu);const i=h(Iu),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=u((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return s((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Iu;return r.createElement(c,{value:n},t)},Iu=(Tu=zu,Pu={},Object.assign(Tu,r.createContext(Pu)),Tu.Provider._context=Tu,Tu.Consumer._context=Tu,Tu);var Tu,Pu;zu.Provider=Iu.Provider,zu.Consumer=Iu.Consumer;const Hu=()=>{const e=[],t=function(t){ul(`${al}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ya(e,((e,i)=>{if(Va.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ya(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ya(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ya(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Ya(e,((e,r)=>{if(Va.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ya(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ya(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Va.fun(e)?e(n,t):e};return t._getProps=n,t};function Nu(e,t){const n=Va.fun(e),[[r],i]=function(e,t,n){const r=Va.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?Hu():void 0),[]),a=o(0),s=fl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=Bu(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ku(e,t):new Promise((r=>{Mu(e,n),l.queue.push((()=>{r(ku(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=ml(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Ou(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=bu(n))}}f((()=>{Ya(u.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=u.current.map(((e,t)=>Bu(e,c[t]))),m=h(zu),y=ml(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);dl((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Ya(e,(e=>e()))),Ya(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),pl((()=>()=>{Ya(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Cl({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Lu;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Lu||(Lu={}));class Ru extends lu{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ms(...t);const n=this._get(),r=Dl(n);bl(this,r.create(n))}advance(e){const t=this._get();Wa(t,this.get())||(vl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wu(this._active)&&Yu(this)}_get(){const e=Va.arr(this.source)?this.source.map(Rs):Ua(Rs(this.source));return this.calc(...e)}_start(){this.idle&&!Wu(this._active)&&(this.idle=!1,Ya(wl(this),(e=>{e.done=!1})),ns.skipAnimation?(Fa.batchedUpdates((()=>this.advance())),Yu(this)):ss.start(this))}_attach(){let e=1;Ya(Ua(this.source),(t=>{Ls(t)&&Us(t,this),au(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ya(Ua(this.source),(e=>{Ls(e)&&Qs(e,this)})),this._active.clear(),Yu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ua(this.source).reduce(((e,t)=>Math.max(e,(au(t)?t.priority:0)+1)),0))}}function Vu(e){return!1!==e.idle}function Wu(e){return!e.size||Array.from(e).every(Vu)}function Yu(e){e.idle||(e.idle=!0,Ya(wl(e),(e=>{e.done=!0})),Ws(e,{type:"idle",parent:e}))}function qu(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}ns.assign({createStringInterpolator:ol,to:(e,t)=>new Ru(e,t)});const Uu=["style","children","scrollTop","scrollLeft","viewBox"],Qu=/^--/;function Zu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Qu.test(e)||Xu.hasOwnProperty(e)&&Xu[e]?(""+t).trim():t+"px"}const Gu={};let Xu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ju=["Webkit","Ms","Moz","O"];Xu=Object.keys(Xu).reduce(((e,t)=>(Ju.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Xu);const Ku=["x","y","z"],ec=/^(matrix|translate|scale|rotate|skew)/,tc=/^(translate)/,nc=/^(rotate|skew)/,rc=(e,t)=>Va.num(e)&&0!==e?e+t:e,ic=(e,t)=>Va.arr(e)?e.every((e=>ic(e,t))):Va.num(e)?e===t:parseFloat(e)===t;class oc extends Fl{constructor(e){let{x:t,y:n,z:r}=e,i=qu(e,Ku);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>rc(e,"px"))).join(",")})`,ic(e,0)]))),qa(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ec.test(t)){if(delete i[t],Va.und(e))return;const n=tc.test(t)?"px":nc.test(t)?"deg":"";o.push(Ua(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${rc(i,n)})`,ic(i,0)]:e=>[`${t}(${e.map((e=>rc(e,n))).join(",")})`,ic(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ac(o,a)),super(i)}}class ac extends Ys{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ya(this.inputs,((n,r)=>{const i=Rs(n[0]),[o,a]=this.transforms[r](Va.arr(i)?i:n.map(Rs));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ya(this.inputs,(e=>Ya(e,(e=>Ls(e)&&Us(e,this)))))}observerRemoved(e){0==e&&Ya(this.inputs,(e=>Ya(e,(e=>Ls(e)&&Qs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ws(this,e)}}const sc=["scrollTop","scrollLeft"];ns.assign({batchedUpdates:b,createStringInterpolator:ol,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const lc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Fl(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=El(e)||"Anonymous";return(e=Va.str(e)?o[e]||(o[e]=Ml(e,i)):e[Al]||(e[Al]=Ml(e,i))).displayName=`Animated(${t})`,e};return qa(e,((t,n)=>{Va.arr(e)&&(n=El(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,u=qu(r,Uu),c=Object.values(u),d=Object.keys(u).map((t=>n||e.hasAttribute(t)?t:Gu[t]||(Gu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Zu(t,i[t]);Qu.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new oc(e),getComponentProps:e=>qu(e,sc)}),uc=lc.animated,cc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dc=e=>Object.keys(cc).reduce(((t,n)=>{const r=cc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),hc=dc("max-width"),fc=(dc("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),pc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,gc=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||vn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${pc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,mc=p(gc)`
    animation-delay: -0.45s;
`,yc=p(gc)`
    animation-delay: -0.3s;
`,vc=p(gc)`
    animation-delay: -0.15s;
`;p.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${vn.Neutral[8](e)};
                    border: 1px solid ${vn.Primary(e)};

                    span {
                        color: ${vn.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${vn.Neutral[8](e)};
                    border: 1px solid ${vn.Neutral[5](e)};

                    span {
                        color: ${vn.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${vn.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${vn.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${vn.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${vn.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${vn.Primary(e)};
                    border: 1px solid transparent;

                    ${hc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${vn.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${Mn("H5","semibold")}
                    }

                    ${hc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${Mn("H4","semibold")}
                    }

                    ${hc.mobileS} {
                        height: auto;
                    }
                `}
`;const bc=p((({color:n,className:r,size:i=18})=>e(fc,Object.assign({className:r,$size:i,$color:n},{children:[t(gc,{id:"inner1",$size:i-2,$borderWidth:2}),t(mc,{id:"inner2",$size:i-2,$borderWidth:2}),t(yc,{id:"inner3",$size:i-2,$borderWidth:2}),t(vc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=vn.Primary(e);break;case"disabled":t=vn.Neutral[3](e);break;default:t=vn.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,wc=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,$c=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${wc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?vn.Neutral[4](e):e.$unchecked?vn.Accent.Light[2](e):vn.Primary(e)};
    }
`,Sc=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,xc=p(uc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,_c=p.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${vn.Neutral[4]};
        border-right: 5px solid ${vn.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${hc.mobileL} {
        max-height: 15rem;
    }
`,Fc=p.li`
    :hover,
    :focus,
    :active {
        background: ${vn.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${vn.Accent.Light[5]};
            `}}
`,Oc=p.button`
    display: flex;
    ${e=>e.$multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
                padding: 0 1rem;
                min-height: ${e.$hasNextLineLabel?"4.255rem":"3.5rem"};
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${vn.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,kc=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Dc=p.div`
    ${Mn("Body","regular")}
    color: ${vn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc}
`,Bc=p.div`
    color: ${vn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${Mn("BodySmall","semibold")}
                `:g`
                    ${Mn("Body","regular")}
                `}
`,Mc=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Dc} {
                        display: inline;
                    }

                    ${Bc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,jc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ac=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Ec=p((n=>{var{className:r,checked:i,disabled:a,indeterminate:l,onChange:u,onKeyPress:c,displaySize:d="default"}=n,h=k(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=o();s((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;u&&u(e),c&&c(t)}};return e($c,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(l||i||a)},{children:[t(Sc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:a},h)),l?t($,{"data-testid":"indeterminate"}):i?t(S,{"data-testid":"checkmark"}):a?t(x,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Cc=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,zc=p.button`
    ${Mn("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${vn.Primary(e)};\n\t\t`}
`,Ic=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Tc=p(An.Body)``,Pc=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${vn.Validation.Red.Icon};
`,Hc=p.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&g`
                background-color: ${vn.Neutral[7]};
            `}
    }
`,Nc=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Hc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Lc=p.li`
    background: ${vn.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Rc=p(Pn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Vc=p(F)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${vn.Neutral[3]};
`,Wc=p(Nc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${vn.Neutral[3]};
    cursor: pointer;
`,Yc=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${vn.Neutral[3]};
`,qc=c(((n,r)=>{const{onClear:i}=n,o=k(n,["onClear"]);return e(Lc,{children:[t(Vc,{}),t(Rc,Object.assign({ref:r},o)),o.value&&t(Wc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Yc,{})}))]},"search")})),Uc=r=>{var{listItems:i,listExtractor:a,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:S,itemsLoadState:x="success",itemTruncationType:_="end",itemMaxLines:F=2,labelDisplayType:O="inline",renderListItem:D,onBlur:B,hideNoResultsDisplay:M,renderCustomCallToAction:j}=r,A=k(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,C]=u(0),[z,I]=u(""),[T,P]=u(i),[H,N]=u(0),L=Nu({height:H}),R=o(),V=o(),W=o([]),Y=o(),q=o(),U=o(E),Q=o(T),Z=e=>{U.current=e,C(e)},G=e=>{Q.current=e,P(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(z)}),[z]),s((()=>{if(I(""),h){if(setTimeout((()=>{N(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[E]&&W.current[E].focus()}else N(0)}),[h]),s((()=>{if(h){const e=te();N(e)}}),[T,x]),s((()=>{G(i),I(""),Z(0)}),[i]);const X=e=>a?a(e):e.toString(),J=e=>{if("inline"!==O)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return sr.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},K=e=>!!$a(w,(t=>xa(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;I(t),g&&g()},oe=()=>{I(""),Y.current.focus(),g&&g()},ae=()=>{S&&S()},se=()=>{B&&B()},le=r=>e(n,{children:[t(jc,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r})),t(Ac,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r}))]}),ue=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":O;return e(Mc,Object.assign({$labelDisplayType:l},{children:[t(Dc,Object.assign({$truncateType:_,$maxLines:F,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(Bc,Object.assign({$truncateType:_,$maxLines:F,$labelDisplayType:O,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ce=()=>{if(!S||S&&"success"===x)return T.map(((n,r)=>t(Fc,Object.assign({$checked:K(n)&&!b},{children:e(Oc,Object.assign({$hasNextLineLabel:"next-line"===O&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(Ec,{checked:K(n),displaySize:"small"}),D?D(n,{selected:K(n)}):ue(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(b&&T.length>0&&!z&&"success"===x)return t(Cc,{children:t(zc,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!M&&(z||!f)&&0===T.length&&"success"===x)return e(Ic,Object.assign({"data-testid":"list-no-results"},{children:[t(Pc,{"data-testid":"no-result-icon"}),t(Tc,{children:"No results found."})]}),"noResults")},fe=()=>{if(S&&"loading"===x)return e(Ic,Object.assign({"data-testid":"list-loading"},{children:[t(bc,{$buttonStyle:"secondary",size:24}),t(Tc,{children:"Loading..."})]}),"loading")},pe=()=>{if(S&&"fail"===x)return e(Ic,Object.assign({"data-testid":"list-fail"},{children:[t(Pc,{"data-testid":"load-error-icon"}),t(Tc,{children:"Failed to load."}),t(zc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(xc,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(_c,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},A,{children:[(f||m)&&"success"===x?t(qc,{ref:Y,onChange:ie,value:z,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ce()]}))})(),(()=>{if(h&&j)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:j(y,T)}))})()]}))})},Qc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Zc=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Gc=g`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${vn.Accent.Light[3]};
    }
`,Xc=p.button`
    ${Gc}
    cursor: pointer;
`,Jc=p.div`
    ${Gc}
`,Kc=m`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,ed=p.div`
    position: relative;
    border: 1px solid ${vn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${vn.Neutral[8]};

    :focus-within {
        border: 1px solid ${vn.Accent.Light[1]};
        box-shadow: ${$n};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Kc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${vn.Neutral[6](e)};

                ${Xc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${vn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Xc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${vn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${vn.Validation.Red.Border(e)};
                    box-shadow: ${Sn};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Qc};
    margin-left: 1rem;
`,p(O)`
    color: ${vn.Neutral[3]};
    height: ${On.Body.fontSize}rem;
    width: ${On.Body.fontSize}rem;
`;const td=p.div`
    height: 1px;
    background: ${vn.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
`;const nd=p(An.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(nd)`
    color: ${vn.Neutral[3]};
`;const rd=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:l,readOnly:u,className:c})=>{const d=o();return((e,t,n="window",r)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&l()}}),"document"),t(Zc,Object.assign({className:c},{children:t(ed,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:u,expanded:n,"data-testid":a},{children:e}))}))},id=({className:r,"data-testid":i,selectedOption:a,minimumCharacters:l=3,fetchOptions:c,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const w=a&&v(a),[$,S]=u(w||""),[x,_]=u(w||""),[F,O]=u([]),[k,B]=u(!0),[M,j]=u(!1),[A,E]=u(!!a),[C,z]=u(a),I=o(c),T=e=>D(void 0,void 0,void 0,(function*(){j(!1),B(!0);try{const t=yield I.current(e);_(e),O(t),B(!1)}catch(e){j(!0)}})),P=d(me((e=>T(e)),500,{leading:!1,trailing:!0}),[]);s((()=>{I.current=c}),[c]),s((()=>{$&&$.length>=l&&$!==x?P($):P.cancel(),""===$&&C&&(b&&b(void 0,void 0),L(),z(void 0)),a&&$!==v(a)&&E(!1)}),[$,a]),s((()=>{S(a?v(a):""),L(a),z(a)}),[a]);const H=e=>{S(e.target.value)},N=(e,t)=>{b&&b(e,t)},L=e=>{_(e?v(e):""),E(!!e),O([]),B(!0)},R=()=>{S(""),b&&b(void 0,void 0),L()},V=()=>{A||C?(L(C),S(v(C)),b&&b(C,Y(C)),z(C)):R()},W=()=>$&&$.length>=l&&!A,Y=e=>m?m(e):e,q=()=>t(hr,{type:"text",value:$,onChange:H,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:$.length<l?V:void 0});return e(rd,Object.assign({className:r,show:W(),error:g&&!W(),disabled:p,readOnly:f,testId:i,onBlur:V},{children:[t(f?n:Jc,{children:q()}),!f&&W()&&t(td,{}),t(Uc,{listItems:F,onSelectItem:N,valueExtractor:m,listExtractor:y,itemsLoadState:M?"fail":k?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>T($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))};export{id as PredictiveTextInput};
//# sourceMappingURL=index.js.map
