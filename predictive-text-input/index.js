import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useEffect as a,useImperativeHandle as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as _}from"@lifesg/react-icons";import{MagnifierIcon as F}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function O(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var M=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},A="object"==typeof B&&B&&B.Object===Object&&B,j=A,E="object"==typeof self&&self&&self.Object===Object&&self,C=j||E||Function("return this")(),I=C,T=function(){return I.Date.now()},z=/\s/;var P=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},H=/^\s+/;var L=function(e){return e?e.slice(0,P(e)+1).replace(H,""):e},N=C.Symbol,R=N,V=Object.prototype,W=V.hasOwnProperty,Y=V.toString,q=R?R.toStringTag:void 0;var U=function(e){var t=W.call(e,q),n=e[q];try{e[q]=void 0;var r=!0}catch(e){}var i=Y.call(e);return r&&(t?e[q]=n:delete e[q]),i},Q=Object.prototype.toString;var Z=U,G=function(e){return Q.call(e)},X=N?N.toStringTag:void 0;var J=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?Z(e):G(e)};var K=function(e){return null!=e&&"object"==typeof e},ee=J,te=K;var ne=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},re=L,ie=M,oe=ne,ae=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ce=parseInt;var ue=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(ie(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ie(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=re(e);var n=se.test(e);return n||le.test(e)?ce(e.slice(2),n?2:8):ae.test(e)?NaN:+e},de=M,he=T,fe=ue,pe=Math.max,ge=Math.min;var me=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=he();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?ge(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=he(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=fe(t)||0,de(n)&&(u=!!n.leading,o=(d="maxWait"in n)?pe(fe(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(he())},y};var ye=Array.isArray,ve=ye,be=ne,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$e=/^\w*$/;var xe=function(e,t){if(ve(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!be(e))||($e.test(e)||!we.test(e)||null!=t&&e in Object(t))},Se=J,_e=M;var Fe,De=function(e){if(!_e(e))return!1;var t=Se(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ke=C["__core-js_shared__"],Oe=(Fe=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Be=function(e){return!!Oe&&Oe in e},Me=Function.prototype.toString;var Ae=function(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},je=De,Ee=Be,Ce=M,Ie=Ae,Te=/^\[object .+?Constructor\]$/,ze=Function.prototype,Pe=Object.prototype,He=ze.toString,Le=Pe.hasOwnProperty,Ne=RegExp("^"+He.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Re=function(e){return!(!Ce(e)||Ee(e))&&(je(e)?Ne:Te).test(Ie(e))},Ve=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=Ve(e,t);return Re(n)?n:void 0},Ye=We(Object,"create"),qe=Ye;var Ue=function(){this.__data__=qe?qe(null):{},this.size=0};var Qe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ze=Ye,Ge=Object.prototype.hasOwnProperty;var Xe=function(e){var t=this.__data__;if(Ze){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ge.call(t,e)?t[e]:void 0},Je=Ye,Ke=Object.prototype.hasOwnProperty;var et=Ye;var tt=Ue,nt=Qe,rt=Xe,it=function(e){var t=this.__data__;return Je?void 0!==t[e]:Ke.call(t,e)},ot=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=it,at.prototype.set=ot;var st=at;var lt=function(){this.__data__=[],this.size=0};var ct=function(e,t){return e===t||e!=e&&t!=t},ut=ct;var dt=function(e,t){for(var n=e.length;n--;)if(ut(e[n][0],t))return n;return-1},ht=dt,ft=Array.prototype.splice;var pt=dt;var gt=dt;var mt=dt;var yt=lt,vt=function(e){var t=this.__data__,n=ht(t,e);return!(n<0)&&(n==t.length-1?t.pop():ft.call(t,n,1),--this.size,!0)},bt=function(e){var t=this.__data__,n=pt(t,e);return n<0?void 0:t[n][1]},wt=function(e){return gt(this.__data__,e)>-1},$t=function(e,t){var n=this.__data__,r=mt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function xt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xt.prototype.clear=yt,xt.prototype.delete=vt,xt.prototype.get=bt,xt.prototype.has=wt,xt.prototype.set=$t;var St=xt,_t=We(C,"Map"),Ft=st,Dt=St,kt=_t;var Ot=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Bt=function(e,t){var n=e.__data__;return Ot(t)?n["string"==typeof t?"string":"hash"]:n.map},Mt=Bt;var At=Bt;var jt=Bt;var Et=Bt;var Ct=function(){this.size=0,this.__data__={hash:new Ft,map:new(kt||Dt),string:new Ft}},It=function(e){var t=Mt(this,e).delete(e);return this.size-=t?1:0,t},Tt=function(e){return At(this,e).get(e)},zt=function(e){return jt(this,e).has(e)},Pt=function(e,t){var n=Et(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ht.prototype.clear=Ct,Ht.prototype.delete=It,Ht.prototype.get=Tt,Ht.prototype.has=zt,Ht.prototype.set=Pt;var Lt=Ht,Nt=Lt;function Rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Rt.Cache||Nt),n}Rt.Cache=Nt;var Vt=Rt;var Wt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/\\(\\)?/g,qt=function(e){var t=Vt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wt,(function(e,n,r,i){t.push(r?i.replace(Yt,"$1"):n||e)})),t}));var Ut=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Qt=ye,Zt=ne,Gt=N?N.prototype:void 0,Xt=Gt?Gt.toString:void 0;var Jt=function e(t){if("string"==typeof t)return t;if(Qt(t))return Ut(t,e)+"";if(Zt(t))return Xt?Xt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Kt=Jt;var en=ye,tn=xe,nn=qt,rn=function(e){return null==e?"":Kt(e)};var on=function(e,t){return en(e)?e:tn(e,t)?[e]:nn(rn(e))},an=ne;var sn=function(e){if("string"==typeof e||an(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},ln=on,cn=sn;var un=function(e,t){for(var n=0,r=(t=ln(t,e)).length;null!=e&&n<r;)e=e[cn(t[n++])];return n&&n==r?e:void 0},dn=un;var hn=function(e,t,n){var r=null==e?void 0:dn(e,t);return void 0===r?n:r};const fn=(e,t,n)=>t?hn(n,t)||hn(e,t):n||e,pn=(e,t)=>{const n=t||e.defaultValue;return hn(e.collections,n)};var gn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(gn||(gn={}));const mn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},yn=e=>t=>{const n=t.theme,r=pn(mn,n[gn.colorScheme]);return n.options&&n.options.color?fn(r,e,n.options.color):fn(r,e)},vn={Brand:{1:yn("Brand.1"),2:yn("Brand.2"),3:yn("Brand.3"),4:yn("Brand.4"),5:yn("Brand.5"),6:yn("Brand.6")},Primary:yn("Primary"),PrimaryDark:yn("PrimaryDark"),Secondary:yn("Secondary"),Accent:{Light:{1:yn("Accent.Light.1"),2:yn("Accent.Light.2"),3:yn("Accent.Light.3"),4:yn("Accent.Light.4"),5:yn("Accent.Light.5"),6:yn("Accent.Light.6")},Dark:{1:yn("Accent.Dark.1"),2:yn("Accent.Dark.2"),3:yn("Accent.Dark.3")}},Neutral:{1:yn("Neutral.1"),2:yn("Neutral.2"),3:yn("Neutral.3"),4:yn("Neutral.4"),5:yn("Neutral.5"),6:yn("Neutral.6"),7:yn("Neutral.7"),8:yn("Neutral.8")},Validation:{Green:{Text:yn("Validation.Green.Text"),Icon:yn("Validation.Green.Icon"),Border:yn("Validation.Green.Border"),Background:yn("Validation.Green.Background")},Orange:{Text:yn("Validation.Orange.Text"),Icon:yn("Validation.Orange.Icon"),Border:yn("Validation.Orange.Border"),Background:yn("Validation.Orange.Background"),Badge:yn("Validation.Orange.Badge")},Red:{Text:yn("Validation.Red.Text"),Icon:yn("Validation.Red.Icon"),Border:yn("Validation.Red.Border"),Background:yn("Validation.Red.Background")},Blue:{Text:yn("Validation.Blue.Text"),Icon:yn("Validation.Blue.Icon"),Border:yn("Validation.Blue.Border"),Background:yn("Validation.Blue.Background")}},Shadow:{Accent:yn("Shadow.Accent"),Red:yn("Shadow.Red"),Elevation:yn("Shadow.Elevation")}},bn={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${vn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${vn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${vn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${vn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${vn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},wn=e=>t=>{var n;const r=t.theme,i=pn(bn,r[gn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?fn(i,e,r.options.designToken):fn(i,e)},$n=wn("InputBoxShadow"),xn=wn("InputErrorBoxShadow"),Sn=(wn("ElevationBoxShadow"),wn("Table.Header"),wn("Table.Cell.Primary"),wn("Table.Cell.Secondary"),wn("Table.Cell.Selected"),wn("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),_n={collections:{base:{D1:{fontFamily:Sn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Fn=e=>t=>{const n=t.theme,r=pn(_n,n[gn.textStyleScheme]);return n.options&&n.options.textStyle?fn(r,e,n.options.textStyle):fn(r,e)},Dn={D1:{fontFamily:Fn("D1.fontFamily"),fontSize:Fn("D1.fontSize"),fontWeight:Fn("D1.fontWeight"),lineHeight:Fn("D1.lineHeight"),letterSpacing:Fn("D1.letterSpacing")},D2:{fontFamily:Fn("D2.fontFamily"),fontSize:Fn("D2.fontSize"),fontWeight:Fn("D2.fontWeight"),lineHeight:Fn("D2.lineHeight"),letterSpacing:Fn("D2.letterSpacing")},D3:{fontFamily:Fn("D3.fontFamily"),fontSize:Fn("D3.fontSize"),fontWeight:Fn("D3.fontWeight"),lineHeight:Fn("D3.lineHeight"),letterSpacing:Fn("D3.letterSpacing")},D4:{fontFamily:Fn("D4.fontFamily"),fontSize:Fn("D4.fontSize"),fontWeight:Fn("D4.fontWeight"),lineHeight:Fn("D4.lineHeight"),letterSpacing:Fn("D4.letterSpacing")},DBody:{fontFamily:Fn("DBody.fontFamily"),fontSize:Fn("DBody.fontSize"),fontWeight:Fn("DBody.fontWeight"),lineHeight:Fn("DBody.lineHeight"),letterSpacing:Fn("DBody.letterSpacing")},H1:{fontFamily:Fn("H1.fontFamily"),fontSize:Fn("H1.fontSize"),fontWeight:Fn("H1.fontWeight"),lineHeight:Fn("H1.lineHeight"),letterSpacing:Fn("H1.letterSpacing")},H2:{fontFamily:Fn("H2.fontFamily"),fontSize:Fn("H2.fontSize"),fontWeight:Fn("H2.fontWeight"),lineHeight:Fn("H2.lineHeight"),letterSpacing:Fn("H2.letterSpacing")},H3:{fontFamily:Fn("H3.fontFamily"),fontSize:Fn("H3.fontSize"),fontWeight:Fn("H3.fontWeight"),lineHeight:Fn("H3.lineHeight"),letterSpacing:Fn("H3.letterSpacing")},H4:{fontFamily:Fn("H4.fontFamily"),fontSize:Fn("H4.fontSize"),fontWeight:Fn("H4.fontWeight"),lineHeight:Fn("H4.lineHeight"),letterSpacing:Fn("H4.letterSpacing")},H5:{fontFamily:Fn("H5.fontFamily"),fontSize:Fn("H5.fontSize"),fontWeight:Fn("H5.fontWeight"),lineHeight:Fn("H5.lineHeight"),letterSpacing:Fn("H5.letterSpacing")},H6:{fontFamily:Fn("H6.fontFamily"),fontSize:Fn("H6.fontSize"),fontWeight:Fn("H6.fontWeight"),lineHeight:Fn("H6.lineHeight"),letterSpacing:Fn("H6.letterSpacing")},Body:{fontFamily:Fn("Body.fontFamily"),fontSize:Fn("Body.fontSize"),fontWeight:Fn("Body.fontWeight"),lineHeight:Fn("Body.lineHeight"),letterSpacing:Fn("Body.letterSpacing")},BodySmall:{fontFamily:Fn("BodySmall.fontFamily"),fontSize:Fn("BodySmall.fontSize"),fontWeight:Fn("BodySmall.fontWeight"),lineHeight:Fn("BodySmall.lineHeight"),letterSpacing:Fn("BodySmall.letterSpacing")},XSmall:{fontFamily:Fn("XSmall.fontFamily"),fontSize:Fn("XSmall.fontSize"),fontWeight:Fn("XSmall.fontWeight"),lineHeight:Fn("XSmall.lineHeight"),letterSpacing:Fn("XSmall.letterSpacing")}},kn=e=>{switch(e){case 700:case"bold":return Sn.Bold;case 600:case"semibold":return Sn.Semibold;case 300:case"light":return Sn.Light;case 400:case"regular":return Sn.Regular;default:return""}},On=(e,t)=>n=>{var r;const i=Dn[e].fontFamily(n),o=Dn[e].fontWeight(n);return Object.values(Sn).includes(i)?g`
                font-family: ${kn(t)||kn(o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=Bn(t)||o)&&void 0!==r?r:"normal"};
        `},Bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Mn=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},An=(e,t,n=!1)=>r=>{const i=Dn[e],o=i.fontSize(r);return g`
            ${On(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},jn=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${Mn(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Mn(n)}
        `;var En;!function(e){e.D1=p.h1`
        ${e=>g`
                ${An("D1",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${An("D2",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${An("D3",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${An("D4",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${An("DBody",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${An("H1",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${An("H2",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${An("H3",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${An("H4",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${An("H5",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${An("H6",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${An("Body",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${An("BodySmall",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${An("XSmall",e.weight,e.paragraph)}
                color: ${vn.Neutral[1]};
                ${jn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(En||(En={}));const Cn=p.a`
    ${e=>g`
            ${An(e.textStyle,e.weight)}
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
`,In=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tn=n=>{var{external:r=!1,children:i}=n,o=k(n,["external","children"]);return e(Cn,Object.assign({},o,{children:[i,r&&t(In,{})]}))};var zn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(zn||(zn={}));const Pn=p.div`
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
                    box-shadow: ${xn};
                }
            `:void 0}
`,Hn=p.input`
    ${An("Body","regular")}
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
`;var Ln={exports:{}};Ln.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Nn,Rn,Vn=Ln.exports,Wn={exports:{}},Yn=Wn.exports=(Nn={year:0,month:1,day:2,hour:3,minute:4,second:5},Rn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Rn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Rn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Nn[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),qn={exports:{}};qn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},_=v;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=S(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=F.prototype;return S.prototype=D,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,F,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Un=qn.exports,Qn={exports:{}};Qn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Zn=Qn.exports,Gn={exports:{}};Gn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Xn=Gn.exports,Jn={exports:{}};Jn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Kn,er=Jn.exports;Un.extend(Zn),Un.extend(Xn),Un.extend(er),Un.extend(Vn),Un.extend(Yn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Un(t).startOf("week");return tr(n).map((e=>nr(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return nr(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Un(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Un(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Un(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Un(r):void 0,i?Un(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Kn||(Kn={}));const tr=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},nr=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},rr=[1,3,5,7,8,10,12],ir=[4,6,9,11];var or,ar,sr,lr;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":rr.includes(o)?Math.min(i,31).toString():ir.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Un(e,n);return Un(t,n).diff(r,"minute")},e.toDayjs=e=>e?Un(e):Un()}(or||(or={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Un(e).isBefore(r,"day"))||!(!i||!Un(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Un(e).isValid())return e}return""}}(ar||(ar={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(sr||(sr={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(lr||(lr={}));const cr=p.input`
    ${An("Body","regular")}
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
`,dr=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,hr=p.div`
    display: flex;
    width: 100%;
`,fr=i.forwardRef(((r,i)=>{var{value:a,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,v=k(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=o();s(i,(()=>b.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>lr.transformWithSpaces(e,l)}),$=e=>{f&&(S()?_(e):f(e))},x=()=>{p&&p(),b&&b.current&&b.current.focus()},S=()=>"tel"===c&&l,_=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},F=a?(e=>e?S()?lr.transformWithSpaces(e,l):e:"")(a):a,D=()=>e(n,{children:[t(cr,Object.assign({"data-testid":"input",ref:b,disabled:d,value:F,onChange:$,type:c,readOnly:h},v)),g&&!d&&!h&&!!a&&t(ur,Object.assign({onClick:x,type:"button"},{children:t(dr,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(hr,Object.assign({className:m},{children:D()})):t(Pn,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:D()}))})}));var pr=St;var gr=St,mr=_t,yr=Lt;var vr=St,br=function(){this.__data__=new pr,this.size=0},wr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},$r=function(e){return this.__data__.get(e)},xr=function(e){return this.__data__.has(e)},Sr=function(e,t){var n=this.__data__;if(n instanceof gr){var r=n.__data__;if(!mr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new yr(r)}return n.set(e,t),this.size=n.size,this};function _r(e){var t=this.__data__=new vr(e);this.size=t.size}_r.prototype.clear=br,_r.prototype.delete=wr,_r.prototype.get=$r,_r.prototype.has=xr,_r.prototype.set=Sr;var Fr=_r;var Dr=Lt,kr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Or=function(e){return this.__data__.has(e)};function Br(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Dr;++t<n;)this.add(e[t])}Br.prototype.add=Br.prototype.push=kr,Br.prototype.has=Or;var Mr=Br,Ar=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jr=function(e,t){return e.has(t)};var Er=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new Mr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Ar(t,(function(e,t){if(!jr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Cr=C.Uint8Array,Ir=ct,Tr=Er,zr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Pr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Hr=N?N.prototype:void 0,Lr=Hr?Hr.valueOf:void 0;var Nr=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Cr(e),new Cr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ir(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=zr;case"[object Set]":var l=1&r;if(s||(s=Pr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Tr(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Lr)return Lr.call(e)==Lr.call(t)}return!1};var Rr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Vr=ye;var Wr=function(e,t,n){var r=t(e);return Vr(e)?r:Rr(r,n(e))};var Yr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},qr=function(){return[]},Ur=Object.prototype.propertyIsEnumerable,Qr=Object.getOwnPropertySymbols,Zr=Qr?function(e){return null==e?[]:(e=Object(e),Yr(Qr(e),(function(t){return Ur.call(e,t)})))}:qr;var Gr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Xr=J,Jr=K;var Kr=function(e){return Jr(e)&&"[object Arguments]"==Xr(e)},ei=K,ti=Object.prototype,ni=ti.hasOwnProperty,ri=ti.propertyIsEnumerable,ii=Kr(function(){return arguments}())?Kr:function(e){return ei(e)&&ni.call(e,"callee")&&!ri.call(e,"callee")},oi={exports:{}};var ai=function(){return!1};!function(e,t){var n=C,r=ai,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(oi,oi.exports);var si=/^(?:0|[1-9]\d*)$/;var li=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&si.test(e))&&e>-1&&e%1==0&&e<t};var ci=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ui=J,di=ci,hi=K,fi={};fi["[object Float32Array]"]=fi["[object Float64Array]"]=fi["[object Int8Array]"]=fi["[object Int16Array]"]=fi["[object Int32Array]"]=fi["[object Uint8Array]"]=fi["[object Uint8ClampedArray]"]=fi["[object Uint16Array]"]=fi["[object Uint32Array]"]=!0,fi["[object Arguments]"]=fi["[object Array]"]=fi["[object ArrayBuffer]"]=fi["[object Boolean]"]=fi["[object DataView]"]=fi["[object Date]"]=fi["[object Error]"]=fi["[object Function]"]=fi["[object Map]"]=fi["[object Number]"]=fi["[object Object]"]=fi["[object RegExp]"]=fi["[object Set]"]=fi["[object String]"]=fi["[object WeakMap]"]=!1;var pi=function(e){return hi(e)&&di(e.length)&&!!fi[ui(e)]};var gi=function(e){return function(t){return e(t)}},mi={exports:{}};!function(e,t){var n=A,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(mi,mi.exports);var yi=pi,vi=gi,bi=mi.exports,wi=bi&&bi.isTypedArray,$i=wi?vi(wi):yi,xi=Gr,Si=ii,_i=ye,Fi=oi.exports,Di=li,ki=$i,Oi=Object.prototype.hasOwnProperty;var Bi=function(e,t){var n=_i(e),r=!n&&Si(e),i=!n&&!r&&Fi(e),o=!n&&!r&&!i&&ki(e),a=n||r||i||o,s=a?xi(e.length,String):[],l=s.length;for(var c in e)!t&&!Oi.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Di(c,l))||s.push(c);return s},Mi=Object.prototype;var Ai=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Mi)};var ji=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Ei=Ai,Ci=ji,Ii=Object.prototype.hasOwnProperty;var Ti=De,zi=ci;var Pi=function(e){return null!=e&&zi(e.length)&&!Ti(e)},Hi=Bi,Li=function(e){if(!Ei(e))return Ci(e);var t=[];for(var n in Object(e))Ii.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ni=Pi;var Ri=function(e){return Ni(e)?Hi(e):Li(e)},Vi=Wr,Wi=Zr,Yi=Ri;var qi=function(e){return Vi(e,Yi,Wi)},Ui=Object.prototype.hasOwnProperty;var Qi=function(e,t,n,r,i,o){var a=1&n,s=qi(e),l=s.length;if(l!=qi(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Ui.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Zi=We(C,"DataView"),Gi=_t,Xi=We(C,"Promise"),Ji=We(C,"Set"),Ki=We(C,"WeakMap"),eo=J,to=Ae,no="[object Map]",ro="[object Promise]",io="[object Set]",oo="[object WeakMap]",ao="[object DataView]",so=to(Zi),lo=to(Gi),co=to(Xi),uo=to(Ji),ho=to(Ki),fo=eo;(Zi&&fo(new Zi(new ArrayBuffer(1)))!=ao||Gi&&fo(new Gi)!=no||Xi&&fo(Xi.resolve())!=ro||Ji&&fo(new Ji)!=io||Ki&&fo(new Ki)!=oo)&&(fo=function(e){var t=eo(e),n="[object Object]"==t?e.constructor:void 0,r=n?to(n):"";if(r)switch(r){case so:return ao;case lo:return no;case co:return ro;case uo:return io;case ho:return oo}return t});var po=Fr,go=Er,mo=Nr,yo=Qi,vo=fo,bo=ye,wo=oi.exports,$o=$i,xo="[object Arguments]",So="[object Array]",_o="[object Object]",Fo=Object.prototype.hasOwnProperty;var Do=function(e,t,n,r,i,o){var a=bo(e),s=bo(t),l=a?So:vo(e),c=s?So:vo(t),u=(l=l==xo?_o:l)==_o,d=(c=c==xo?_o:c)==_o,h=l==c;if(h&&wo(e)){if(!wo(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new po),a||$o(e)?go(e,t,n,r,i,o):mo(e,t,l,n,r,i,o);if(!(1&n)){var f=u&&Fo.call(e,"__wrapped__"),p=d&&Fo.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new po),i(g,m,n,r,o)}}return!!h&&(o||(o=new po),yo(e,t,n,r,i,o))},ko=K;var Oo=function e(t,n,r,i,o){return t===n||(null==t||null==n||!ko(t)&&!ko(n)?t!=t&&n!=n:Do(t,n,r,i,e,o))},Bo=Fr,Mo=Oo;var Ao=M;var jo=function(e){return e==e&&!Ao(e)},Eo=jo,Co=Ri;var Io=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},To=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Bo;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Mo(u,c,3,r,d):h))return!1}}return!0},zo=function(e){for(var t=Co(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Eo(i)]}return t},Po=Io;var Ho=on,Lo=ii,No=ye,Ro=li,Vo=ci,Wo=sn;var Yo=function(e,t){return null!=e&&t in Object(e)},qo=function(e,t,n){for(var r=-1,i=(t=Ho(t,e)).length,o=!1;++r<i;){var a=Wo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Vo(i)&&Ro(a,i)&&(No(e)||Lo(e))};var Uo=Oo,Qo=hn,Zo=function(e,t){return null!=e&&qo(e,t,Yo)},Go=xe,Xo=jo,Jo=Io,Ko=sn;var ea=un;var ta=function(e){return function(t){return null==t?void 0:t[e]}},na=function(e){return function(t){return ea(t,e)}},ra=xe,ia=sn;var oa=function(e){var t=zo(e);return 1==t.length&&t[0][2]?Po(t[0][0],t[0][1]):function(n){return n===e||To(n,e,t)}},aa=function(e,t){return Go(e)&&Xo(t)?Jo(Ko(e),t):function(n){var r=Qo(n,e);return void 0===r&&r===t?Zo(n,e):Uo(t,r,3)}},sa=function(e){return e},la=ye,ca=function(e){return ra(e)?ta(ia(e)):na(e)};var ua=function(e){return"function"==typeof e?e:null==e?sa:"object"==typeof e?la(e)?aa(e[0],e[1]):oa(e):ca(e)},da=ua,ha=Pi,fa=Ri;var pa=function(e){return function(t,n,r){var i=Object(t);if(!ha(t)){var o=da(n);t=fa(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var ga=ue,ma=1/0;var ya=function(e){return e?(e=ga(e))===ma||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var va=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},ba=ua,wa=function(e){var t=ya(e),n=t%1;return t==t?n?t-n:t:0},$a=Math.max;var xa=pa((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:wa(n);return i<0&&(i=$a(r+i,0)),va(e,ba(t),i)})),Sa=Oo;var _a=function(e,t){return Sa(e,t)};let Fa=Na();const Da=e=>za(e,Fa);let ka=Na();Da.write=e=>za(e,ka);let Oa=Na();Da.onStart=e=>za(e,Oa);let Ba=Na();Da.onFrame=e=>za(e,Ba);let Ma=Na();Da.onFinish=e=>za(e,Ma);let Aa=[];Da.setTimeout=(e,t)=>{let n=Da.now()+t,r=()=>{let e=Aa.findIndex((e=>e.cancel==r));~e&&Aa.splice(e,1),Ia-=~e?1:0},i={time:n,handler:e,cancel:r};return Aa.splice(ja(n),0,i),Ia+=1,Pa(),i};let ja=e=>~(~Aa.findIndex((t=>t.time>e))||~Aa.length);Da.cancel=e=>{Oa.delete(e),Ba.delete(e),Ma.delete(e),Fa.delete(e),ka.delete(e)},Da.sync=e=>{Ta=!0,Da.batchedUpdates(e),Ta=!1},Da.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Da.onStart(n)}return r.handler=e,r.cancel=()=>{Oa.delete(n),t=null},r};let Ea="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Da.use=e=>Ea=e,Da.now="undefined"!=typeof performance?()=>performance.now():Date.now,Da.batchedUpdates=e=>e(),Da.catch=console.error,Da.frameLoop="always",Da.advance=()=>{"demand"!==Da.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):La()};let Ca=-1,Ia=0,Ta=!1;function za(e,t){Ta?(t.delete(e),e(0)):(t.add(e),Pa())}function Pa(){Ca<0&&(Ca=0,"demand"!==Da.frameLoop&&Ea(Ha))}function Ha(){~Ca&&(Ea(Ha),Da.batchedUpdates(La))}function La(){let e=Ca;Ca=Da.now();let t=ja(Ca);t&&(Ra(Aa.splice(0,t),(e=>e.handler())),Ia-=t),Ia?(Oa.flush(),Fa.flush(e?Math.min(64,Ca-e):16.667),Ba.flush(),ka.flush(),Ma.flush()):Ca=-1}function Na(){let e=new Set,t=e;return{add(n){Ia+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ia-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ia-=t.size,Ra(t,(t=>t(n)&&e.add(t))),Ia+=e.size,t=e)}}}function Ra(e,t){e.forEach((e=>{try{t(e)}catch(e){Da.catch(e)}}))}function Va(){}const Wa={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ya(e,t){if(Wa.arr(e)){if(!Wa.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const qa=(e,t)=>e.forEach(t);function Ua(e,t,n){if(Wa.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Qa=e=>Wa.und(e)?[]:Wa.arr(e)?e:[e];function Za(e,t){if(e.size){const n=Array.from(e);e.clear(),qa(n,t)}}const Ga=(e,...t)=>Za(e,(e=>e(...t))),Xa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ja,Ka,es=null,ts=!1,ns=Va;var rs=Object.freeze({__proto__:null,get createStringInterpolator(){return Ja},get to(){return Ka},get colors(){return es},get skipAnimation(){return ts},get willAdvance(){return ns},assign:e=>{e.to&&(Ka=e.to),e.now&&(Da.now=e.now),void 0!==e.colors&&(es=e.colors),null!=e.skipAnimation&&(ts=e.skipAnimation),e.createStringInterpolator&&(Ja=e.createStringInterpolator),e.requestAnimationFrame&&Da.use(e.requestAnimationFrame),e.batchedUpdates&&(Da.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ns=e.willAdvance),e.frameLoop&&(Da.frameLoop=e.frameLoop)}});const is=new Set;let os=[],as=[],ss=0;const ls={get idle(){return!is.size&&!os.length},start(e){ss>e.priority?(is.add(e),Da.onStart(cs)):(us(e),Da(hs))},advance:hs,sort(e){if(ss)Da.onFrame((()=>ls.sort(e)));else{const t=os.indexOf(e);~t&&(os.splice(t,1),ds(e))}},clear(){os=[],is.clear()}};function cs(){is.forEach(us),is.clear(),Da(hs)}function us(e){os.includes(e)||ds(e)}function ds(e){os.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(os,(t=>t.priority>e.priority)),0,e)}function hs(e){const t=as;for(let n=0;n<os.length;n++){const r=os[n];ss=r.priority,r.idle||(ns(r),r.advance(e),r.idle||t.push(r))}return ss=0,as=os,as.length=0,os=t,os.length>0}const fs="[-+]?\\d*\\.?\\d+",ps=fs+"%";function gs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ms=new RegExp("rgb"+gs(fs,fs,fs)),ys=new RegExp("rgba"+gs(fs,fs,fs,fs)),vs=new RegExp("hsl"+gs(fs,ps,ps)),bs=new RegExp("hsla"+gs(fs,ps,ps,fs)),ws=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$s=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xs=/^#([0-9a-fA-F]{6})$/,Ss=/^#([0-9a-fA-F]{8})$/;function _s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Fs(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=_s(i,r,e+1/3),a=_s(i,r,e),s=_s(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ds(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ks(e){return(parseFloat(e)%360+360)%360/360}function Os(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Bs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ms(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xs.exec(e))?parseInt(t[1]+"ff",16)>>>0:es&&void 0!==es[e]?es[e]:(t=ms.exec(e))?(Ds(t[1])<<24|Ds(t[2])<<16|Ds(t[3])<<8|255)>>>0:(t=ys.exec(e))?(Ds(t[1])<<24|Ds(t[2])<<16|Ds(t[3])<<8|Os(t[4]))>>>0:(t=ws.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ss.exec(e))?parseInt(t[1],16)>>>0:(t=$s.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=vs.exec(e))?(255|Fs(ks(t[1]),Bs(t[2]),Bs(t[3])))>>>0:(t=bs.exec(e))?(Fs(ks(t[1]),Bs(t[2]),Bs(t[3]))|Os(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const As=(e,t,n)=>{if(Wa.fun(e))return e;if(Wa.arr(e))return As({range:e,output:t,extrapolate:n});if(Wa.str(e.output[0]))return Ja(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const js=1.70158,Es=1.525*js,Cs=js+1,Is=2*Math.PI/3,Ts=2*Math.PI/4.5,zs=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ps={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Cs*e*e*e-js*e*e,easeOutBack:e=>1+Cs*Math.pow(e-1,3)+js*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Es)/2:(Math.pow(2*e-2,2)*((Es+1)*(2*e-2)+Es)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Is),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Is)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ts)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ts)/2+1,easeInBounce:e=>1-zs(1-e),easeOutBounce:zs,easeInOutBounce:e=>e<.5?(1-zs(1-2*e))/2:(1+zs(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Hs(){return Hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hs.apply(this,arguments)}const Ls=Symbol.for("FluidValue.get"),Ns=Symbol.for("FluidValue.observers"),Rs=e=>Boolean(e&&e[Ls]),Vs=e=>e&&e[Ls]?e[Ls]():e,Ws=e=>e[Ns]||null;function Ys(e,t){let n=e[Ns];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class qs{constructor(e){if(this[Ls]=void 0,this[Ns]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Us(this,e)}}const Us=(e,t)=>Gs(e,Ls,t);function Qs(e,t){if(e[Ls]){let n=e[Ns];n||Gs(e,Ns,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Zs(e,t){let n=e[Ns];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ns]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Gs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Xs=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Js=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ks=new RegExp(`(${Xs.source})(%|[a-z]+)`,"i"),el=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,tl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,nl=e=>{const[t,n]=rl(e);if(!t||Xa())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&tl.test(n)?nl(n):n||e},rl=e=>{const t=tl.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let il;const ol=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,al=e=>{il||(il=es?new RegExp(`(${Object.keys(es).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Vs(e).replace(tl,nl).replace(Js,Ms).replace(il,Ms))),n=t.map((e=>e.match(Xs).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>As(Hs({},e,{output:t}))));return e=>{var n;const i=!Ks.test(t[0])&&(null==(n=t.find((e=>Ks.test(e))))?void 0:n.replace(Xs,""));let o=0;return t[0].replace(Xs,(()=>`${r[o++](e)}${i||""}`)).replace(el,ol)}},sl="react-spring: ",ll=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${sl}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},cl=ll(console.warn);const ul=ll(console.warn);function dl(e){return Wa.str(e)&&("#"==e[0]||/\d/.test(e)||!Xa()&&tl.test(e)||e in(es||{}))}const hl=Xa()?a:l,fl=()=>{const e=o(!1);return hl((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function pl(){const e=c()[1],t=fl();return()=>{t.current&&e(Math.random())}}const gl=e=>a(e,ml),ml=[];function yl(e){const t=o();return a((()=>{t.current=e})),t.current}const vl=Symbol.for("Animated:node"),bl=e=>e&&e[vl],wl=(e,t)=>{return n=e,r=vl,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},$l=e=>e&&e[vl]&&e[vl].getPayload();class xl{constructor(){this.payload=void 0,wl(this,this)}getPayload(){return this.payload||[]}}class Sl extends xl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Wa.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Sl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Wa.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Wa.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class _l extends Sl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=As({output:[e,e]})}static create(e){return new _l(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Wa.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=As({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Fl={dependencies:null};class Dl extends xl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ua(this.source,((n,r)=>{var i;(i=n)&&i[vl]===i?t[r]=n.getValue(e):Rs(n)?t[r]=Vs(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&qa(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ua(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fl.dependencies&&Rs(e)&&Fl.dependencies.add(e);const t=$l(e);t&&qa(t,(e=>this.add(e)))}}class kl extends Dl{constructor(e){super(e)}static create(e){return new kl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ol)),!0)}}function Ol(e){return(dl(e)?_l:Sl).create(e)}function Bl(e){const t=bl(e);return t?t.constructor:Wa.arr(e)?kl:dl(e)?_l:Sl}function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}const Al=(e,t)=>{const n=!Wa.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((i,s)=>{const l=o(null),c=n&&d((e=>{l.current=function(e,t){e&&(Wa.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[u,h]=function(e,t){const n=new Set;Fl.dependencies=n,e.style&&(e=Ml({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Dl(e),Fl.dependencies=null,[e,n]}(i,t),f=pl(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new jl(p,h),m=o();hl((()=>(m.current=g,qa(h,(e=>Qs(e,g))),()=>{m.current&&(qa(m.current.deps,(e=>Zs(e,m.current))),Da.cancel(m.current.update))}))),a(p,[]),gl((()=>()=>{const e=m.current;qa(e.deps,(t=>Zs(t,e)))}));const y=t.getComponentProps(u.getValue());return r.createElement(e,Ml({},y,{ref:c}))}))};class jl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Da.write(this.update)}}const El=Symbol.for("AnimatedComponent"),Cl=e=>Wa.str(e)?e:e&&Wa.str(e.displayName)?e.displayName:Wa.fun(e)&&e.name||null;function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}function Tl(e,...t){return Wa.fun(e)?e(...t):e}const zl=(e,t)=>!0===e||!!(t&&e&&(Wa.fun(e)?e(t):Qa(e).includes(t))),Pl=(e,t)=>Wa.obj(e)?t&&e[t]:e,Hl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ll=e=>e,Nl=(e,t=Ll)=>{let n=Rl;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Wa.und(n)||(r[i]=n)}return r},Rl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Wl(e){const t=function(e){const t={};let n=0;if(Ua(e,((e,r)=>{Vl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ua(e,((e,r)=>r in t||(n[r]=e))),n}return Il({},e)}function Yl(e){return e=Vs(e),Wa.arr(e)?e.map(Yl):dl(e)?rs.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ql(e){return Wa.fun(e)||Wa.arr(e)&&Wa.obj(e[0])}const Ul=Il({},{tension:170,friction:26},{mass:1,damping:1,easing:Ps.linear,clamp:!1});class Ql{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ul)}}function Zl(e,t){if(Wa.und(t.decay)){const n=!Wa.und(t.tension)||!Wa.und(t.friction);!n&&Wa.und(t.frequency)&&Wa.und(t.damping)&&Wa.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Gl=[];class Xl{constructor(){this.changed=!1,this.values=Gl,this.toValues=null,this.fromValues=Gl,this.to=void 0,this.from=void 0,this.config=new Ql,this.immediate=!1}}function Jl(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=zl(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Wa.und(n.pause)||(i.paused=zl(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||zl(e,t)),c=Tl(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-Da.now()}function f(){c>0&&!rs.skipAnimation?(i.delayed=!0,u=Da.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Il({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Kl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?nc(e.get()):t.every((e=>e.noop))?ec(e.get()):tc(e.get(),t.every((e=>e.finished))),ec=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),tc=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),nc=e=>({value:e,cancelled:!0,finished:!1});function rc(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Nl(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&nc(r)||i!==n.asyncId&&tc(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new oc,a=new ac;return(async()=>{if(rs.skipAnimation)throw ic(n),a.result=tc(r,!1),d(a),a;f(o);const s=Wa.obj(e)?Il({},e):Il({},t,{to:e});s.parentId=i,Ua(c,((e,t)=>{Wa.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(rs.skipAnimation)return ic(n),tc(r,!1);try{let t;t=Wa.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=tc(r.get(),!0,!1)}catch(e){if(e instanceof oc)g=e.result;else{if(!(e instanceof ac))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Wa.fun(a)&&Da.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function ic(e,t){Za(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class oc extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ac extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const sc=e=>e instanceof cc;let lc=1;class cc extends qs{constructor(...e){super(...e),this.id=lc++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=bl(this);return e&&e.getValue()}to(...e){return rs.to(this,e)}interpolate(...e){return cl(`${sl}The "interpolate" function is deprecated in v9 (use "to" instead)`),rs.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ys(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ls.sort(this),Ys(this,{type:"priority",parent:this,priority:e})}}const uc=Symbol.for("SpringPhase"),dc=e=>(1&e[uc])>0,hc=e=>(2&e[uc])>0,fc=e=>(4&e[uc])>0,pc=(e,t)=>t?e[uc]|=3:e[uc]&=-3,gc=(e,t)=>t?e[uc]|=4:e[uc]&=-5;class mc extends cc{constructor(e,t){if(super(),this.key=void 0,this.animation=new Xl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Wa.und(e)||!Wa.und(t)){const n=Wa.obj(e)?Il({},e):Il({},t,{from:e});Wa.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(hc(this)||this._state.asyncTo)||fc(this)}get goal(){return Vs(this.animation.to)}get velocity(){const e=bl(this);return e instanceof Sl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return dc(this)}get isAnimating(){return hc(this)}get isPaused(){return fc(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=$l(r.to);!a&&Rs(r.to)&&(o=Qa(Vs(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==_l?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Wa.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Wa.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Wa.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=bl(this),l=s.getValue();if(t){const e=Vs(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Da.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(hc(this)){const{to:e,config:t}=this.animation;Da.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Wa.und(e)?(n=this.queue||[],this.queue=[]):n=[Wa.obj(e)?e:Il({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Kl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ic(this._state,e&&this._lastCallId),Da.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Wa.obj(n)?n[t]:n,(null==n||ql(n))&&(n=void 0),r=Wa.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return dc(this)||(e.reverse&&([n,r]=[r,n]),r=Vs(r),Wa.und(r)?bl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Il({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Nl(n,((e,t)=>/^on/.test(t)?Pl(e,r):e))),Sc(this,n,"onProps"),_c(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Jl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{fc(this)||(gc(this,!0),Ga(a.pauseQueue),_c(this,"onPause",tc(this,yc(this,this.animation.to)),this))},resume:()=>{fc(this)&&(gc(this,!1),hc(this)&&this._resume(),Ga(a.resumeQueue),_c(this,"onResume",tc(this,yc(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=vc(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(nc(this));const r=!Wa.und(e.to),i=!Wa.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(nc(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Wa.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ya(d,c);h&&(s.from=d),d=Vs(d);const f=!Ya(u,l);f&&this._focus(u);const p=ql(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Zl(n=Il({},n),t),t=Il({},n,t)),Zl(e,t),Object.assign(e,t);for(const t in Ul)null==e[t]&&(e[t]=Ul[t]);let{mass:r,frequency:i,damping:o}=e;Wa.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Tl(t.config,o),t.config!==a.config?Tl(a.config,o):void 0);let v=bl(this);if(!v||Wa.und(u))return n(tc(this,!0));const b=Wa.und(t.reset)?i&&!t.default:!Wa.und(d)&&zl(t.reset,o),w=b?d:this.get(),$=Yl(u),x=Wa.num($)||Wa.arr($)||dl($),S=!p&&(!x||zl(a.immediate||t.immediate,o));if(f){const e=Bl(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Rs(u),D=!1;if(!F){const e=b||!dc(this)&&h;(f||e)&&(D=Ya(Yl(w),$),F=!D),(Ya(s.immediate,S)||S)&&Ya(g.decay,m)&&Ya(g.velocity,y)||(F=!0)}if(D&&hc(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Rs(l))&&(s.values=v.getPayload(),s.toValues=Rs(u)?null:_==_l?[1]:Qa($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),F)){const{onRest:e}=s;qa(xc,(e=>Sc(this,t,e)));const r=tc(this,yc(this,l));Ga(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Da.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Tl(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(rc(t.to,t,this._state,this)):F?this._start():hc(this)&&!f?this._pendingCalls.add(n):n(ec(w))}_focus(e){const t=this.animation;e!==t.to&&(Ws(this)&&this._detach(),t.to=e,Ws(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Rs(t)&&(Qs(t,this),sc(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Rs(e)&&Zs(e,this)}_set(e,t=!0){const n=Vs(e);if(!Wa.und(n)){const e=bl(this);if(!e||!Ya(n,e.getValue())){const r=Bl(n);e&&e.constructor==r?e.setValue(n):wl(this,r.create(n)),e&&Da.batchedUpdates((()=>{this._onChange(n,t)}))}}return bl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,_c(this,"onStart",tc(this,yc(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Tl(this.animation.onChange,e,this)),Tl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;bl(this).reset(Vs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),hc(this)||(pc(this,!0),fc(this)||this._resume())}_resume(){rs.skipAnimation?this.finish():ls.start(this)}_stop(e,t){if(hc(this)){pc(this,!1);const n=this.animation;qa(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ys(this,{type:"idle",parent:this});const r=t?nc(this.get()):tc(this.get(),yc(this,null!=e?e:n.to));Ga(this._pendingCalls,r),n.changed&&(n.changed=!1,_c(this,"onRest",r,this))}}}function yc(e,t){const n=Yl(t);return Ya(Yl(e.get()),n)}function vc(e,t=e.loop,n=e.to){let r=Tl(t);if(r){const i=!0!==r&&Wl(r),o=(i||e).reverse,a=!i||i.reset;return bc(Il({},e,{loop:t,default:!1,pause:void 0,to:!o||ql(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function bc(e){const{to:t,from:n}=e=Wl(e),r=new Set;return Wa.obj(t)&&$c(t,r),Wa.obj(n)&&$c(n,r),e.keys=r.size?Array.from(r):null,e}function wc(e){const t=bc(e);return Wa.und(t.default)&&(t.default=Nl(t)),t}function $c(e,t){Ua(e,((e,n)=>null!=e&&t.add(n)))}const xc=["onStart","onRest","onChange","onPause","onResume"];function Sc(e,t,n){e.animation[n]=t[n]!==Hl(t,n)?Pl(t[n],e.key):void 0}function _c(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Fc=["onStart","onChange","onRest"];let Dc=1;class kc{constructor(e,t){this.id=Dc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Il({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Wa.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(bc(e)),this}start(e){let{queue:t}=this;return e?t=Qa(e).map(bc):this.queue=[],this._flush?this._flush(this,t):(Cc(this,t),Oc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;qa(Qa(t),(t=>n[t].stop(!!e)))}else ic(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Wa.und(e))this.start({pause:!0});else{const t=this.springs;qa(Qa(e),(e=>t[e].pause()))}return this}resume(e){if(Wa.und(e))this.start({pause:!1});else{const t=this.springs;qa(Qa(e),(e=>t[e].resume()))}return this}each(e){Ua(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Za(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Za(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Za(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Da.onFrame(this._onFrame)}}function Oc(e,t){return Promise.all(t.map((t=>Bc(e,t)))).then((t=>Kl(e,t)))}async function Bc(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Wa.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Wa.arr(i)||Wa.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):qa(Fc,(n=>{const r=t[n];if(Wa.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ga(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Hl(t,"cancel");(u||f&&d.asyncId)&&h.push(Jl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Va,resume:Va,start(t,n){f?(ic(d,e._lastAsyncId),n(nc(e))):(t.onRest=s,n(rc(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Kl(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=vc(t,a,i);if(n)return Cc(e,[n]),Bc(e,n,!0)}return l&&Da.batchedUpdates((()=>l(p,e,e.item))),p}function Mc(e,t){const n=Il({},e.springs);return t&&qa(Qa(t),(e=>{Wa.und(e.keys)&&(e=bc(e)),Wa.obj(e.to)||(e=Il({},e,{to:void 0})),Ec(n,e,(e=>jc(e)))})),Ac(e,n),n}function Ac(e,t){Ua(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Qs(t,e))}))}function jc(e,t){const n=new mc;return n.key=e,t&&Qs(n,t),n}function Ec(e,t,n){t.keys&&qa(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Cc(e,t){qa(t,(t=>{Ec(e.springs,t,(t=>jc(t,e)))}))}const Ic=["children"],Tc=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ic);const i=h(zc),s=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=c((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return a((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:u}=zc;return r.createElement(u,{value:n},t)},zc=(Pc=Tc,Hc={},Object.assign(Pc,r.createContext(Hc)),Pc.Provider._context=Pc,Pc.Consumer._context=Pc,Pc);var Pc,Hc;Tc.Provider=zc.Provider,Tc.Consumer=zc.Consumer;const Lc=()=>{const e=[],t=function(t){ul(`${sl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return qa(e,((e,i)=>{if(Wa.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return qa(e,(e=>e.pause(...arguments))),this},t.resume=function(){return qa(e,(e=>e.resume(...arguments))),this},t.set=function(t){qa(e,(e=>e.set(t)))},t.start=function(t){const n=[];return qa(e,((e,r)=>{if(Wa.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return qa(e,(e=>e.stop(...arguments))),this},t.update=function(t){return qa(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Wa.fun(e)?e(n,t):e};return t._getProps=n,t};function Nc(e,t){const n=Wa.fun(e),[[r],i]=function(e,t,n){const r=Wa.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?Lc():void 0),[]),a=o(0),s=pl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=Mc(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Oc(e,t):new Promise((r=>{Ac(e,n),l.queue.push((()=>{r(Oc(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=yl(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new kc(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=wc(n))}}f((()=>{qa(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=c.current.map(((e,t)=>Mc(e,u[t]))),m=h(Tc),y=yl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);hl((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],qa(e,(e=>e()))),qa(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),gl((()=>()=>{qa(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Il({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Rc;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Rc||(Rc={}));class Vc extends cc{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=As(...t);const n=this._get(),r=Bl(n);wl(this,r.create(n))}advance(e){const t=this._get();Ya(t,this.get())||(bl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Yc(this._active)&&qc(this)}_get(){const e=Wa.arr(this.source)?this.source.map(Vs):Qa(Vs(this.source));return this.calc(...e)}_start(){this.idle&&!Yc(this._active)&&(this.idle=!1,qa($l(this),(e=>{e.done=!1})),rs.skipAnimation?(Da.batchedUpdates((()=>this.advance())),qc(this)):ls.start(this))}_attach(){let e=1;qa(Qa(this.source),(t=>{Rs(t)&&Qs(t,this),sc(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){qa(Qa(this.source),(e=>{Rs(e)&&Zs(e,this)})),this._active.clear(),qc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qa(this.source).reduce(((e,t)=>Math.max(e,(sc(t)?t.priority:0)+1)),0))}}function Wc(e){return!1!==e.idle}function Yc(e){return!e.size||Array.from(e).every(Wc)}function qc(e){e.idle||(e.idle=!0,qa($l(e),(e=>{e.done=!0})),Ys(e,{type:"idle",parent:e}))}function Uc(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}rs.assign({createStringInterpolator:al,to:(e,t)=>new Vc(e,t)});const Qc=["style","children","scrollTop","scrollLeft","viewBox"],Zc=/^--/;function Gc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Zc.test(e)||Jc.hasOwnProperty(e)&&Jc[e]?(""+t).trim():t+"px"}const Xc={};let Jc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Kc=["Webkit","Ms","Moz","O"];Jc=Object.keys(Jc).reduce(((e,t)=>(Kc.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Jc);const eu=["x","y","z"],tu=/^(matrix|translate|scale|rotate|skew)/,nu=/^(translate)/,ru=/^(rotate|skew)/,iu=(e,t)=>Wa.num(e)&&0!==e?e+t:e,ou=(e,t)=>Wa.arr(e)?e.every((e=>ou(e,t))):Wa.num(e)?e===t:parseFloat(e)===t;class au extends Dl{constructor(e){let{x:t,y:n,z:r}=e,i=Uc(e,eu);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>iu(e,"px"))).join(",")})`,ou(e,0)]))),Ua(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(tu.test(t)){if(delete i[t],Wa.und(e))return;const n=nu.test(t)?"px":ru.test(t)?"deg":"";o.push(Qa(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${iu(i,n)})`,ou(i,0)]:e=>[`${t}(${e.map((e=>iu(e,n))).join(",")})`,ou(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new su(o,a)),super(i)}}class su extends qs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return qa(this.inputs,((n,r)=>{const i=Vs(n[0]),[o,a]=this.transforms[r](Wa.arr(i)?i:n.map(Vs));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&qa(this.inputs,(e=>qa(e,(e=>Rs(e)&&Qs(e,this)))))}observerRemoved(e){0==e&&qa(this.inputs,(e=>qa(e,(e=>Rs(e)&&Zs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ys(this,e)}}const lu=["scrollTop","scrollLeft"];rs.assign({batchedUpdates:b,createStringInterpolator:al,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const cu=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Dl(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Cl(e)||"Anonymous";return(e=Wa.str(e)?o[e]||(o[e]=Al(e,i)):e[El]||(e[El]=Al(e,i))).displayName=`Animated(${t})`,e};return Ua(e,((t,n)=>{Wa.arr(e)&&(n=Cl(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Uc(r,Qc),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Xc[t]||(Xc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Gc(t,i[t]);Zc.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new au(e),getComponentProps:e=>Uc(e,lu)}),uu=cu.animated,du={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},hu=e=>Object.keys(du).reduce(((t,n)=>{const r=du[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),fu=hu("max-width"),pu=(hu("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),gu=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,mu=p.div`
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
    animation: ${gu} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yu=p(mu)`
    animation-delay: -0.45s;
`,vu=p(mu)`
    animation-delay: -0.3s;
`,bu=p(mu)`
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

                    ${fu.mobileL} {
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
                        ${An("H5","semibold")}
                    }

                    ${fu.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${An("H4","semibold")}
                    }

                    ${fu.mobileS} {
                        height: auto;
                    }
                `}
`;const wu=p((({color:n,className:r,size:i=18})=>e(pu,Object.assign({className:r,$size:i,$color:n},{children:[t(mu,{id:"inner1",$size:i-2,$borderWidth:2}),t(yu,{id:"inner2",$size:i-2,$borderWidth:2}),t(vu,{id:"inner3",$size:i-2,$borderWidth:2}),t(bu,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=vn.Primary(e);break;case"disabled":t=vn.Neutral[3](e);break;default:t=vn.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,$u=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,xu=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${$u};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?vn.Neutral[4](e):e.$unchecked?vn.Accent.Light[2](e):vn.Primary(e)};
    }
`,Su=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,_u=p(uu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Fu=p.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    list-style-type: none;

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

    ${fu.mobileL} {
        max-height: 15rem;
    }
`,Du=p.li`
    :hover,
    :focus,
    :active {
        background: ${vn.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${vn.Accent.Light[5]};
            `}}
`,ku=p.button`
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
`,Ou=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Bu=p.div`
    ${An("Body","regular")}
    color: ${vn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ou}
`,Mu=p.div`
    color: ${vn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ou}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${An("BodySmall","semibold")}
                `:g`
                    ${An("Body","regular")}
                `}
`,Au=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Bu} {
                        display: inline;
                    }

                    ${Mu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ju=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Eu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Cu=p((n=>{var{className:r,checked:i,disabled:s,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=k(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=o();a((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(xu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:p,$displaySize:d,$disabled:s,$unchecked:!(l||i||s)},{children:[t(Su,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:s},h)),l?t($,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):s?t(S,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Iu=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Tu=p.button`
    ${An("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${vn.Primary(e)};\n\t\t`}
`,zu=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Pu=p(En.Body)``,Hu=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${vn.Validation.Red.Icon};
`,Lu=p.button`
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
`,Nu=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Lu,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Ru=p.li`
    background: ${vn.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Vu=p(Hn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Wu=p(F)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${vn.Neutral[3]};
`,Yu=p(Nu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${vn.Neutral[3]};
    cursor: pointer;
`,qu=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${vn.Neutral[3]};
`,Uu=u(((n,r)=>{const{onClear:i}=n,o=k(n,["onClear"]);return e(Ru,{children:[t(Wu,{}),t(Vu,Object.assign({ref:r},o)),o.value&&t(Yu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(qu,{})}))]},"search")})),Qu=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:F=2,labelDisplayType:D="inline",renderListItem:O,onBlur:B,hideNoResultsDisplay:M,renderCustomCallToAction:A}=r,j=k(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,C]=c(0),[I,T]=c(""),[z,P]=c(i),[H,L]=c(0),N=Nc({height:H}),R=o(),V=o(),W=o([]),Y=o(),q=o(),U=o(E),Q=o(z),Z=e=>{U.current=e,C(e)},G=e=>{Q.current=e,P(e)};a((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),a((()=>{ee(I)}),[I]),a((()=>{if(T(""),h){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[E]&&W.current[E].focus()}else L(0)}),[h]),a((()=>{if(h){const e=te();L(e)}}),[z,S]),a((()=>{G(i),T(""),Z(0)}),[i]);const X=e=>s?s(e):e.toString(),J=e=>{if("inline"!==D)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return lr.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},K=e=>!!xa(w,(t=>_a(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;T(t),g&&g()},oe=()=>{T(""),Y.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{B&&B()},le=r=>e(n,{children:[t(ju,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r})),t(Eu,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":D;return e(Au,Object.assign({$labelDisplayType:l},{children:[t(Bu,Object.assign({$truncateType:_,$maxLines:F,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(Mu,Object.assign({$truncateType:_,$maxLines:F,$labelDisplayType:D,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===S)return z.map(((n,r)=>t(Du,Object.assign({$checked:K(n)&&!b},{children:e(ku,Object.assign({$hasNextLineLabel:"next-line"===D&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(Cu,{checked:K(n),displaySize:"small"}),O?O(n,{selected:K(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(b&&z.length>0&&!I&&"success"===S)return t(Iu,{children:t(Tu,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!M&&(I||!f)&&0===z.length&&"success"===S)return e(zu,Object.assign({"data-testid":"list-no-results"},{children:[t(Hu,{"data-testid":"no-result-icon"}),t(Pu,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(zu,Object.assign({"data-testid":"list-loading"},{children:[t(wu,{$buttonStyle:"secondary",size:24}),t(Pu,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(zu,Object.assign({"data-testid":"list-fail"},{children:[t(Hu,{"data-testid":"load-error-icon"}),t(Pu,{children:"Failed to load."}),t(Tu,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(_u,Object.assign({style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(Fu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},j,{children:[(f||m)&&"success"===S?t(Uu,{ref:Y,onChange:ie,value:I,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:A(y,z)}))})()]}))})},Zu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Gu=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Xu=g`
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
`,Ju=p.button`
    ${Xu}
    cursor: pointer;
`,Ku=p.div`
    ${Xu}
`,ed=m`
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
`,td=p.div`
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
                animation: ${ed} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${vn.Neutral[6](e)};

                ${Ju} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${vn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Ju} {
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
                    box-shadow: ${xn};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Zu};
    margin-left: 1rem;
`,p(D)`
    color: ${vn.Neutral[3]};
    height: ${Dn.Body.fontSize}rem;
    width: ${Dn.Body.fontSize}rem;
`;const nd=p.div`
    height: 1px;
    background: ${vn.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
`;const rd=p(En.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(rd)`
    color: ${vn.Neutral[3]};
`;const id=({children:e,show:n,error:r,disabled:i,testId:s,onBlur:l,readOnly:c,className:u})=>{const d=o();return((e,t,n="window",r)=>{const i=o();a((()=>{i.current=t}),[t]),a((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&l()}}),"document"),t(Gu,Object.assign({className:u},{children:t(td,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":s},{children:e}))}))},od=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:u,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const w=s&&v(s),[$,x]=c(w||""),[S,_]=c(w||""),[F,D]=c([]),[k,B]=c(!0),[M,A]=c(!1),[j,E]=c(!!s),[C,I]=c(s),T=o(u),z=e=>O(void 0,void 0,void 0,(function*(){A(!1),B(!0);try{const t=yield T.current(e);_(e),D(t),B(!1)}catch(e){A(!0)}})),P=d(me((e=>z(e)),500,{leading:!1,trailing:!0}),[]);a((()=>{T.current=u}),[u]),a((()=>{$&&$.length>=l&&$!==S?P($):P.cancel(),""===$&&C&&(b&&b(void 0,void 0),N(),I(void 0)),s&&$!==v(s)&&E(!1)}),[$,s]),a((()=>{x(s?v(s):""),N(s),I(s)}),[s]);const H=e=>{x(e.target.value)},L=(e,t)=>{b&&b(e,t)},N=e=>{_(e?v(e):""),E(!!e),D([]),B(!0)},R=()=>{x(""),b&&b(void 0,void 0),N()},V=()=>{j||C?(N(C),x(v(C)),b&&b(C,Y(C)),I(C)):R()},W=()=>$&&$.length>=l&&!j,Y=e=>m?m(e):e,q=()=>t(fr,{type:"text",value:$,onChange:H,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:$.length<l?V:void 0});return e(id,Object.assign({className:r,show:W(),error:g&&!W(),disabled:p,readOnly:f,testId:i,onBlur:V},{children:[t(f?n:Ku,{children:q()}),!f&&W()&&t(nd,{}),t(Qu,{listItems:F,onSelectItem:L,valueExtractor:m,listExtractor:y,itemsLoadState:M?"fail":k?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>z($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))};export{od as PredictiveTextInput};
//# sourceMappingURL=index.js.map
