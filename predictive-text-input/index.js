import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useEffect as o,useImperativeHandle as s,useState as u,useLayoutEffect as l,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as F}from"@lifesg/react-icons";import{MagnifierIcon as _}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";function B(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function k(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M="object"==typeof O&&O&&O.Object===Object&&O,C=M,j="object"==typeof self&&self&&self.Object===Object&&self,I=C||j||Function("return this")(),T=I,P=function(){return T.Date.now()},z=/\s/;var H=function(e){for(var t=e.length;t--&&z.test(e.charAt(t)););return t},L=/^\s+/;var N=function(e){return e?e.slice(0,H(e)+1).replace(L,""):e},R=I.Symbol,V=R,W=Object.prototype,Y=W.hasOwnProperty,q=W.toString,U=V?V.toStringTag:void 0;var Q=function(e){var t=Y.call(e,U),r=e[U];try{e[U]=void 0;var n=!0}catch(e){}var i=q.call(e);return n&&(t?e[U]=r:delete e[U]),i},Z=Object.prototype.toString;var G=Q,X=function(e){return Z.call(e)},J=R?R.toStringTag:void 0;var K=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":J&&J in Object(e)?G(e):X(e)};var ee=function(e){return null!=e&&"object"==typeof e},te=K,re=ee;var ne=function(e){return"symbol"==typeof e||re(e)&&"[object Symbol]"==te(e)},ie=N,ae=E,oe=ne,se=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ce=parseInt;var de=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(ae(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ae(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ie(e);var r=ue.test(e);return r||le.test(e)?ce(e.slice(2),r?2:8):se.test(e)?NaN:+e},he=E,fe=P,pe=de,ge=Math.max,me=Math.min;var ye=A((function(e,t,r){var n,i,a,o,s,u,l=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,a=i;return n=i=void 0,l=t,o=e.apply(a,r)}function p(e){var r=e-u;return void 0===u||r>=t||r<0||d&&e-l>=a}function g(){var e=fe();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-u);return d?me(r,a-(e-l)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,o)}function y(){var e=fe(),r=p(e);if(n=arguments,i=this,u=e,r){if(void 0===s)return function(e){return l=e,s=setTimeout(g,t),c?f(e):o}(u);if(d)return clearTimeout(s),s=setTimeout(g,t),f(u)}return void 0===s&&(s=setTimeout(g,t)),o}return t=pe(t)||0,he(r)&&(c=!!r.leading,a=(d="maxWait"in r)?ge(pe(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=u=i=s=void 0},y.flush=function(){return void 0===s?o:m(fe())},y}));var ve=Array.isArray,be=ve,we=ne,$e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xe=/^\w*$/;var Se=function(e,t){if(be(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!we(e))||(xe.test(e)||!$e.test(e)||null!=t&&e in Object(t))},Fe=K,_e=E;var De,Be=function(e){if(!_e(e))return!1;var t=Fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ke=I["__core-js_shared__"],Oe=(De=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Ae=function(e){return!!Oe&&Oe in e},Ee=Function.prototype.toString;var Me=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ce=Be,je=Ae,Ie=E,Te=Me,Pe=/^\[object .+?Constructor\]$/,ze=Function.prototype,He=Object.prototype,Le=ze.toString,Ne=He.hasOwnProperty,Re=RegExp("^"+Le.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ve=function(e){return!(!Ie(e)||je(e))&&(Ce(e)?Re:Pe).test(Te(e))},We=function(e,t){return null==e?void 0:e[t]};var Ye=function(e,t){var r=We(e,t);return Ve(r)?r:void 0},qe=Ye(Object,"create"),Ue=qe;var Qe=function(){this.__data__=Ue?Ue(null):{},this.size=0};var Ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ge=qe,Xe=Object.prototype.hasOwnProperty;var Je=function(e){var t=this.__data__;if(Ge){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Xe.call(t,e)?t[e]:void 0},Ke=qe,et=Object.prototype.hasOwnProperty;var tt=qe;var rt=Qe,nt=Ze,it=Je,at=function(e){var t=this.__data__;return Ke?void 0!==t[e]:et.call(t,e)},ot=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=tt&&void 0===t?"__lodash_hash_undefined__":t,this};function st(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}st.prototype.clear=rt,st.prototype.delete=nt,st.prototype.get=it,st.prototype.has=at,st.prototype.set=ot;var ut=st;var lt=function(){this.__data__=[],this.size=0};var ct=function(e,t){return e===t||e!=e&&t!=t},dt=ct;var ht=function(e,t){for(var r=e.length;r--;)if(dt(e[r][0],t))return r;return-1},ft=ht,pt=Array.prototype.splice;var gt=ht;var mt=ht;var yt=ht;var vt=lt,bt=function(e){var t=this.__data__,r=ft(t,e);return!(r<0)&&(r==t.length-1?t.pop():pt.call(t,r,1),--this.size,!0)},wt=function(e){var t=this.__data__,r=gt(t,e);return r<0?void 0:t[r][1]},$t=function(e){return mt(this.__data__,e)>-1},xt=function(e,t){var r=this.__data__,n=yt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function St(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}St.prototype.clear=vt,St.prototype.delete=bt,St.prototype.get=wt,St.prototype.has=$t,St.prototype.set=xt;var Ft=St,_t=Ye(I,"Map"),Dt=ut,Bt=Ft,kt=_t;var Ot=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var At=function(e,t){var r=e.__data__;return Ot(t)?r["string"==typeof t?"string":"hash"]:r.map},Et=At;var Mt=At;var Ct=At;var jt=At;var It=function(){this.size=0,this.__data__={hash:new Dt,map:new(kt||Bt),string:new Dt}},Tt=function(e){var t=Et(this,e).delete(e);return this.size-=t?1:0,t},Pt=function(e){return Mt(this,e).get(e)},zt=function(e){return Ct(this,e).has(e)},Ht=function(e,t){var r=jt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Lt.prototype.clear=It,Lt.prototype.delete=Tt,Lt.prototype.get=Pt,Lt.prototype.has=zt,Lt.prototype.set=Ht;var Nt=Lt,Rt=Nt;function Vt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Vt.Cache||Rt),r}Vt.Cache=Rt;var Wt=Vt;var Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Ut=function(e){var t=Wt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yt,(function(e,r,n,i){t.push(n?i.replace(qt,"$1"):r||e)})),t}));var Qt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Zt=ve,Gt=ne,Xt=R?R.prototype:void 0,Jt=Xt?Xt.toString:void 0;var Kt=function e(t){if("string"==typeof t)return t;if(Zt(t))return Qt(t,e)+"";if(Gt(t))return Jt?Jt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},er=Kt;var tr=ve,rr=Se,nr=Ut,ir=function(e){return null==e?"":er(e)};var ar=function(e,t){return tr(e)?e:rr(e,t)?[e]:nr(ir(e))},or=ne;var sr=function(e){if("string"==typeof e||or(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ur=ar,lr=sr;var cr=function(e,t){for(var r=0,n=(t=ur(t,e)).length;null!=e&&r<n;)e=e[lr(t[r++])];return r&&r==n?e:void 0},dr=cr;var hr=function(e,t,r){var n=null==e?void 0:dr(e,t);return void 0===n?r:n},fr=A(hr);const pr=(e,t,r)=>t?fr(r,t)||fr(e,t):r||e,gr=(e,t)=>{const r=t||e.defaultValue;return fr(e.collections,r)};var mr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mr||(mr={}));const yr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},vr=e=>t=>{const r=t.theme,n=gr(yr,r[mr.colorScheme]);return r.options&&r.options.color?pr(n,e,r.options.color):pr(n,e)},br={Brand:{1:vr("Brand.1"),2:vr("Brand.2"),3:vr("Brand.3"),4:vr("Brand.4"),5:vr("Brand.5"),6:vr("Brand.6")},Primary:vr("Primary"),PrimaryDark:vr("PrimaryDark"),Secondary:vr("Secondary"),Accent:{Light:{1:vr("Accent.Light.1"),2:vr("Accent.Light.2"),3:vr("Accent.Light.3"),4:vr("Accent.Light.4"),5:vr("Accent.Light.5"),6:vr("Accent.Light.6")},Dark:{1:vr("Accent.Dark.1"),2:vr("Accent.Dark.2"),3:vr("Accent.Dark.3")}},Neutral:{1:vr("Neutral.1"),2:vr("Neutral.2"),3:vr("Neutral.3"),4:vr("Neutral.4"),5:vr("Neutral.5"),6:vr("Neutral.6"),7:vr("Neutral.7"),8:vr("Neutral.8")},Validation:{Green:{Text:vr("Validation.Green.Text"),Icon:vr("Validation.Green.Icon"),Border:vr("Validation.Green.Border"),Background:vr("Validation.Green.Background")},Orange:{Text:vr("Validation.Orange.Text"),Icon:vr("Validation.Orange.Icon"),Border:vr("Validation.Orange.Border"),Background:vr("Validation.Orange.Background"),Badge:vr("Validation.Orange.Badge")},Red:{Text:vr("Validation.Red.Text"),Icon:vr("Validation.Red.Icon"),Border:vr("Validation.Red.Border"),Background:vr("Validation.Red.Background")},Blue:{Text:vr("Validation.Blue.Text"),Icon:vr("Validation.Blue.Icon"),Border:vr("Validation.Blue.Border"),Background:vr("Validation.Blue.Background")}},Shadow:{Accent:vr("Shadow.Accent"),Red:vr("Shadow.Red"),Elevation:vr("Shadow.Elevation")}},wr={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${br.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${br.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${br.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${br.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${br.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${br.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},$r=e=>t=>{var r;const n=t.theme,i=gr(wr,n[mr.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?pr(i,e,n.options.designToken):pr(i,e)},xr={InputBoxShadow:$r("InputBoxShadow"),InputErrorBoxShadow:$r("InputErrorBoxShadow"),ElevationBoxShadow:$r("ElevationBoxShadow"),Table:{Header:$r("Table.Header"),Cell:{Primary:$r("Table.Cell.Primary"),Secondary:$r("Table.Cell.Secondary"),Selected:$r("Table.Cell.Selected"),Hover:$r("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:$r("Button.Danger.BackgroundColor"),Hover:$r("Button.Danger.Hover"),Primary:$r("Button.Danger.Primary"),Border:$r("Button.Danger.Border")}}},Sr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Fr={collections:{base:{D1:{fontFamily:Sr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_r=e=>t=>{const r=t.theme,n=gr(Fr,r[mr.textStyleScheme]);return r.options&&r.options.textStyle?pr(n,e,r.options.textStyle):pr(n,e)},Dr={D1:{fontFamily:_r("D1.fontFamily"),fontSize:_r("D1.fontSize"),fontWeight:_r("D1.fontWeight"),lineHeight:_r("D1.lineHeight"),letterSpacing:_r("D1.letterSpacing")},D2:{fontFamily:_r("D2.fontFamily"),fontSize:_r("D2.fontSize"),fontWeight:_r("D2.fontWeight"),lineHeight:_r("D2.lineHeight"),letterSpacing:_r("D2.letterSpacing")},D3:{fontFamily:_r("D3.fontFamily"),fontSize:_r("D3.fontSize"),fontWeight:_r("D3.fontWeight"),lineHeight:_r("D3.lineHeight"),letterSpacing:_r("D3.letterSpacing")},D4:{fontFamily:_r("D4.fontFamily"),fontSize:_r("D4.fontSize"),fontWeight:_r("D4.fontWeight"),lineHeight:_r("D4.lineHeight"),letterSpacing:_r("D4.letterSpacing")},DBody:{fontFamily:_r("DBody.fontFamily"),fontSize:_r("DBody.fontSize"),fontWeight:_r("DBody.fontWeight"),lineHeight:_r("DBody.lineHeight"),letterSpacing:_r("DBody.letterSpacing")},H1:{fontFamily:_r("H1.fontFamily"),fontSize:_r("H1.fontSize"),fontWeight:_r("H1.fontWeight"),lineHeight:_r("H1.lineHeight"),letterSpacing:_r("H1.letterSpacing")},H2:{fontFamily:_r("H2.fontFamily"),fontSize:_r("H2.fontSize"),fontWeight:_r("H2.fontWeight"),lineHeight:_r("H2.lineHeight"),letterSpacing:_r("H2.letterSpacing")},H3:{fontFamily:_r("H3.fontFamily"),fontSize:_r("H3.fontSize"),fontWeight:_r("H3.fontWeight"),lineHeight:_r("H3.lineHeight"),letterSpacing:_r("H3.letterSpacing")},H4:{fontFamily:_r("H4.fontFamily"),fontSize:_r("H4.fontSize"),fontWeight:_r("H4.fontWeight"),lineHeight:_r("H4.lineHeight"),letterSpacing:_r("H4.letterSpacing")},H5:{fontFamily:_r("H5.fontFamily"),fontSize:_r("H5.fontSize"),fontWeight:_r("H5.fontWeight"),lineHeight:_r("H5.lineHeight"),letterSpacing:_r("H5.letterSpacing")},H6:{fontFamily:_r("H6.fontFamily"),fontSize:_r("H6.fontSize"),fontWeight:_r("H6.fontWeight"),lineHeight:_r("H6.lineHeight"),letterSpacing:_r("H6.letterSpacing")},Body:{fontFamily:_r("Body.fontFamily"),fontSize:_r("Body.fontSize"),fontWeight:_r("Body.fontWeight"),lineHeight:_r("Body.lineHeight"),letterSpacing:_r("Body.letterSpacing")},BodySmall:{fontFamily:_r("BodySmall.fontFamily"),fontSize:_r("BodySmall.fontSize"),fontWeight:_r("BodySmall.fontWeight"),lineHeight:_r("BodySmall.lineHeight"),letterSpacing:_r("BodySmall.letterSpacing")},XSmall:{fontFamily:_r("XSmall.fontFamily"),fontSize:_r("XSmall.fontSize"),fontWeight:_r("XSmall.fontWeight"),lineHeight:_r("XSmall.lineHeight"),letterSpacing:_r("XSmall.letterSpacing")}},Br=e=>{switch(e){case 700:case"bold":return Sr.Bold;case 600:case"semibold":return Sr.Semibold;case 300:case"light":return Sr.Light;case 400:case"regular":return Sr.Regular;default:return""}},kr=(e,t)=>r=>{var n;const i=Dr[e].fontFamily(r),a=Dr[e].fontWeight(r);return Object.values(Sr).includes(i)?g`
                font-family: ${Br(t)||Br(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=Or(t)||a)&&void 0!==n?n:"normal"};
        `},Or=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ar=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Er=(e,t,r=!1)=>n=>{const i=Dr[e],a=i.fontSize(n);return g`
            ${kr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Mr=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${Ar(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Ar(r)}
        `;var Cr;!function(e){e.D1=p.h1`
        ${e=>g`
                ${Er("D1",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${Er("D2",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${Er("D3",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${Er("D4",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${Er("DBody",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${Er("H1",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${Er("H2",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${Er("H3",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${Er("H4",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${Er("H5",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${Er("H6",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${Er("Body",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${Er("BodySmall",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${Er("XSmall",e.weight,e.paragraph)}
                color: ${br.Neutral[1]};
                ${Mr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Cr||(Cr={}));const jr=p.a`
    ${e=>g`
            ${Er(e.textStyle,e.weight)}
            color: ${br.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${br.Secondary};

                svg {
                    color: ${br.Secondary};
                }
            }
        `}
`,Ir=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tr=r=>{var{external:n=!1,children:i}=r,a=B(r,["external","children"]);return e(jr,Object.assign({},a,{children:[i,n&&t(Ir,{})]}))};var Pr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pr||(Pr={}));const zr=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${br.Neutral[5]};
    border-radius: 4px;
    background: ${br.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${br.Accent.Light[1]};
        box-shadow: ${xr.InputBoxShadow};
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
                background: ${br.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${br.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${br.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${br.Validation.Red.Border};
                    box-shadow: ${xr.InputErrorBoxShadow};
                }
            `:void 0}
`,Hr=p.input`
    ${Er("Body","regular")}
    color: ${br.Neutral[1]};
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
        color: ${br.Neutral[3]};
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
`;var Lr={exports:{}};Lr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],l=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=l("months"),r=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:u,ZZ:u};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,u=0;u<s;u+=1){var l=o[u],c=d[l],h=c&&c[0],f=c&&c[1];o[u]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,u=i.parser,l=e.slice(n),c=a.exec(l)[0];u.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var u=!0===o[2],l=!0===o[3],c=u||l,d=o[2];l&&(d=o[2]),a=this.$locale(),!u&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,u=n.minutes,l=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=u||0,b=l||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Nr,Rr,Vr=A(Lr.exports),Wr={exports:{}},Yr=A(Wr.exports=(Nr={year:0,month:1,day:2,hour:3,minute:4,second:5},Rr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Rr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Rr[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],u=s.type,l=s.value,c=Nr[u];c>=0&&(a[c]=parseInt(l,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),u=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var l=u.utcOffset();u=u.add(i-l,"minute")}return u.$x.$timezone=e,u},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,u=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var l=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),u,s),c=l[0],d=l[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),qr={exports:{}};qr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",u="week",l="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,l),a=r-i<0,o=t.clone().add(n+(a?-1:1),l);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:u,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $="$isDayjsObject",x=function(e){return e instanceof D||!(!e||!e[$])},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),r&&(w[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},F=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},_=v;_.l=S,_.i=x,_.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case l:return n?f(1,m):f(0,m+1);case u:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(n?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,u=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[l]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[u],p=u===s?this.$D+(t-this.$W):t;if(u===l||u===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),g=function(e){var t=F(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===u)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),a=this.$H,o=this.$m,s=this.$M,u=r.weekdays,l=r.months,c=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return _.s(a%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return _.s(t.$y,4,"0");case"M":return s+1;case"MM":return _.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return _.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,u,2);case"ddd":return d(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(a);case"HH":return _.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return _.s(o,2,"0");case"s":return String(t.$s);case"ss":return _.s(t.$s,2,"0");case"SSS":return _.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=_.p(h),y=F(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return _.m(g,y)};switch(m){case d:p=w()/12;break;case l:p=w();break;case c:p=w()/3;break;case u:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case o:p=b/r;break;case a:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:_.a(p)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return F.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,D,F),e.$i=!0),F},F.locale=S,F.isDayjs=x,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Ur=A(qr.exports),Qr={exports:{}};Qr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],u=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(u?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(u?this.isAfter(o,n):!this.isBefore(o,n))}};var Zr=A(Qr.exports),Gr={exports:{}};Gr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Xr=A(Gr.exports),Jr={exports:{}};Jr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Kr,en=A(Jr.exports);Ur.extend(Zr),Ur.extend(Xr),Ur.extend(en),Ur.extend(Vr),Ur.extend(Yr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ur(t).startOf("week");return tn(r).map((e=>rn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return rn(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ur(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ur(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ur(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Ur(n):void 0,i?Ur(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Kr||(Kr={}));const tn=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},rn=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},nn=[1,3,5,7,8,10,12],an=[4,6,9,11];var on,sn,un,ln;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":nn.includes(a)?Math.min(i,31).toString():an.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ur(e,r);return Ur(t,r).diff(n,"minute")},e.toDayjs=e=>e?Ur(e):Ur(),e.addMinutesToTime=(e,t,r="HH:mm")=>Ur(e,r).add(t,"minutes").format(r)}(on||(on={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Ur(e).isBefore(n,"day"))||!(!i||!Ur(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ur(e).isValid())return e}return""}}(sn||(sn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(un||(un={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ln||(ln={}));const cn=p.input`
    ${Er("Body","regular")}
    color: ${br.Neutral[1]};

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
        color: ${br.Neutral[3]};
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
`,dn=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${br.Neutral[3]};
    background-color: transparent;
    border: none;
`,hn=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,fn=p.div`
    display: flex;
    width: 100%;
`,pn=i.forwardRef(((n,i)=>{var{value:o,spacing:u,type:l,error:c,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=n,v=B(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=a();s(i,(()=>b.current),[]);const w=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),a=n.substring(0,r.selectionEnd),o=t(a),s=a.length-o.length,u=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(u,u)}}}}({ref:b,formatter:e=>ln.transformWithSpaces(e,u)}),$=e=>{f&&(S()?F(e):f(e))},x=()=>{p&&p(),b&&b.current&&b.current.focus()},S=()=>"tel"===l&&u,F=e=>{const{nextValue:t,updateCaretPosition:r}=w(),n=t.replace(/\s/g,"");e.target.value=n,f(e),r()},_=o?(e=>e?S()?ln.transformWithSpaces(e,u):e:"")(o):o,D=()=>e(r,{children:[t(cn,Object.assign({"data-testid":"input",ref:b,disabled:d,value:_,onChange:$,type:l,readOnly:h},v)),g&&!d&&!h&&!!o&&t(dn,Object.assign({onClick:x,type:"button"},{children:t(hn,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===y?t(fn,Object.assign({className:m},{children:D()})):t(zr,Object.assign({$disabled:d,$error:c,$readOnly:h,className:m},{children:D()}))})}));var gn=Ft;var mn=Ft,yn=_t,vn=Nt;var bn=Ft,wn=function(){this.__data__=new gn,this.size=0},$n=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},xn=function(e){return this.__data__.get(e)},Sn=function(e){return this.__data__.has(e)},Fn=function(e,t){var r=this.__data__;if(r instanceof mn){var n=r.__data__;if(!yn||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new vn(n)}return r.set(e,t),this.size=r.size,this};function _n(e){var t=this.__data__=new bn(e);this.size=t.size}_n.prototype.clear=wn,_n.prototype.delete=$n,_n.prototype.get=xn,_n.prototype.has=Sn,_n.prototype.set=Fn;var Dn=_n;var Bn=Nt,kn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},On=function(e){return this.__data__.has(e)};function An(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Bn;++t<r;)this.add(e[t])}An.prototype.add=An.prototype.push=kn,An.prototype.has=On;var En=An,Mn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Cn=function(e,t){return e.has(t)};var jn=function(e,t,r,n,i,a){var o=1&r,s=e.length,u=t.length;if(s!=u&&!(o&&u>s))return!1;var l=a.get(e),c=a.get(t);if(l&&c)return l==t&&c==e;var d=-1,h=!0,f=2&r?new En:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=o?n(g,p,d,t,e,a):n(p,g,d,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Mn(t,(function(e,t){if(!Cn(f,t)&&(p===e||i(p,e,r,n,a)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var In=I.Uint8Array,Tn=ct,Pn=jn,zn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Hn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ln=R?R.prototype:void 0,Nn=Ln?Ln.valueOf:void 0;var Rn=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new In(e),new In(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Tn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=zn;case"[object Set]":var u=1&n;if(s||(s=Hn),e.size!=t.size&&!u)return!1;var l=o.get(e);if(l)return l==t;n|=2,o.set(e,t);var c=Pn(s(e),s(t),n,i,a,o);return o.delete(e),c;case"[object Symbol]":if(Nn)return Nn.call(e)==Nn.call(t)}return!1};var Vn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Wn=ve;var Yn=function(e,t,r){var n=t(e);return Wn(e)?n:Vn(n,r(e))};var qn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},Un=function(){return[]},Qn=Object.prototype.propertyIsEnumerable,Zn=Object.getOwnPropertySymbols,Gn=Zn?function(e){return null==e?[]:(e=Object(e),qn(Zn(e),(function(t){return Qn.call(e,t)})))}:Un;var Xn=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Jn=K,Kn=ee;var ei=function(e){return Kn(e)&&"[object Arguments]"==Jn(e)},ti=ee,ri=Object.prototype,ni=ri.hasOwnProperty,ii=ri.propertyIsEnumerable,ai=ei(function(){return arguments}())?ei:function(e){return ti(e)&&ni.call(e,"callee")&&!ii.call(e,"callee")},oi={exports:{}};var si=function(){return!1};!function(e,t){var r=I,n=si,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(oi,oi.exports);var ui=oi.exports,li=/^(?:0|[1-9]\d*)$/;var ci=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&li.test(e))&&e>-1&&e%1==0&&e<t};var di=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},hi=K,fi=di,pi=ee,gi={};gi["[object Float32Array]"]=gi["[object Float64Array]"]=gi["[object Int8Array]"]=gi["[object Int16Array]"]=gi["[object Int32Array]"]=gi["[object Uint8Array]"]=gi["[object Uint8ClampedArray]"]=gi["[object Uint16Array]"]=gi["[object Uint32Array]"]=!0,gi["[object Arguments]"]=gi["[object Array]"]=gi["[object ArrayBuffer]"]=gi["[object Boolean]"]=gi["[object DataView]"]=gi["[object Date]"]=gi["[object Error]"]=gi["[object Function]"]=gi["[object Map]"]=gi["[object Number]"]=gi["[object Object]"]=gi["[object RegExp]"]=gi["[object Set]"]=gi["[object String]"]=gi["[object WeakMap]"]=!1;var mi=function(e){return pi(e)&&fi(e.length)&&!!gi[hi(e)]};var yi=function(e){return function(t){return e(t)}},vi={exports:{}};!function(e,t){var r=M,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(vi,vi.exports);var bi=vi.exports,wi=mi,$i=yi,xi=bi&&bi.isTypedArray,Si=xi?$i(xi):wi,Fi=Xn,_i=ai,Di=ve,Bi=ui,ki=ci,Oi=Si,Ai=Object.prototype.hasOwnProperty;var Ei=function(e,t){var r=Di(e),n=!r&&_i(e),i=!r&&!n&&Bi(e),a=!r&&!n&&!i&&Oi(e),o=r||n||i||a,s=o?Fi(e.length,String):[],u=s.length;for(var l in e)!t&&!Ai.call(e,l)||o&&("length"==l||i&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ki(l,u))||s.push(l);return s},Mi=Object.prototype;var Ci=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Mi)};var ji=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Ii=Ci,Ti=ji,Pi=Object.prototype.hasOwnProperty;var zi=Be,Hi=di;var Li=function(e){return null!=e&&Hi(e.length)&&!zi(e)},Ni=Ei,Ri=function(e){if(!Ii(e))return Ti(e);var t=[];for(var r in Object(e))Pi.call(e,r)&&"constructor"!=r&&t.push(r);return t},Vi=Li;var Wi=function(e){return Vi(e)?Ni(e):Ri(e)},Yi=Yn,qi=Gn,Ui=Wi;var Qi=function(e){return Yi(e,Ui,qi)},Zi=Object.prototype.hasOwnProperty;var Gi=function(e,t,r,n,i,a){var o=1&r,s=Qi(e),u=s.length;if(u!=Qi(t).length&&!o)return!1;for(var l=u;l--;){var c=s[l];if(!(o?c in t:Zi.call(t,c)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var p=o;++l<u;){var g=e[c=s[l]],m=t[c];if(n)var y=o?n(m,g,c,t,e,a):n(g,m,c,e,t,a);if(!(void 0===y?g===m||i(g,m,r,n,a):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return a.delete(e),a.delete(t),f},Xi=Ye(I,"DataView"),Ji=_t,Ki=Ye(I,"Promise"),ea=Ye(I,"Set"),ta=Ye(I,"WeakMap"),ra=K,na=Me,ia="[object Map]",aa="[object Promise]",oa="[object Set]",sa="[object WeakMap]",ua="[object DataView]",la=na(Xi),ca=na(Ji),da=na(Ki),ha=na(ea),fa=na(ta),pa=ra;(Xi&&pa(new Xi(new ArrayBuffer(1)))!=ua||Ji&&pa(new Ji)!=ia||Ki&&pa(Ki.resolve())!=aa||ea&&pa(new ea)!=oa||ta&&pa(new ta)!=sa)&&(pa=function(e){var t=ra(e),r="[object Object]"==t?e.constructor:void 0,n=r?na(r):"";if(n)switch(n){case la:return ua;case ca:return ia;case da:return aa;case ha:return oa;case fa:return sa}return t});var ga=Dn,ma=jn,ya=Rn,va=Gi,ba=pa,wa=ve,$a=ui,xa=Si,Sa="[object Arguments]",Fa="[object Array]",_a="[object Object]",Da=Object.prototype.hasOwnProperty;var Ba=function(e,t,r,n,i,a){var o=wa(e),s=wa(t),u=o?Fa:ba(e),l=s?Fa:ba(t),c=(u=u==Sa?_a:u)==_a,d=(l=l==Sa?_a:l)==_a,h=u==l;if(h&&$a(e)){if(!$a(t))return!1;o=!0,c=!1}if(h&&!c)return a||(a=new ga),o||xa(e)?ma(e,t,r,n,i,a):ya(e,t,u,r,n,i,a);if(!(1&r)){var f=c&&Da.call(e,"__wrapped__"),p=d&&Da.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return a||(a=new ga),i(g,m,r,n,a)}}return!!h&&(a||(a=new ga),va(e,t,r,n,i,a))},ka=ee;var Oa=function e(t,r,n,i,a){return t===r||(null==t||null==r||!ka(t)&&!ka(r)?t!=t&&r!=r:Ba(t,r,n,i,e,a))},Aa=Dn,Ea=Oa;var Ma=E;var Ca=function(e){return e==e&&!Ma(e)},ja=Ca,Ia=Wi;var Ta=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Pa=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var u=(s=r[i])[0],l=e[u],c=s[1];if(o&&s[2]){if(void 0===l&&!(u in e))return!1}else{var d=new Aa;if(n)var h=n(l,c,u,e,t,d);if(!(void 0===h?Ea(c,l,3,n,d):h))return!1}}return!0},za=function(e){for(var t=Ia(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ja(i)]}return t},Ha=Ta;var La=ar,Na=ai,Ra=ve,Va=ci,Wa=di,Ya=sr;var qa=function(e,t){return null!=e&&t in Object(e)},Ua=function(e,t,r){for(var n=-1,i=(t=La(t,e)).length,a=!1;++n<i;){var o=Ya(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Wa(i)&&Va(o,i)&&(Ra(e)||Na(e))};var Qa=Oa,Za=hr,Ga=function(e,t){return null!=e&&Ua(e,t,qa)},Xa=Se,Ja=Ca,Ka=Ta,eo=sr;var to=cr;var ro=function(e){return function(t){return null==t?void 0:t[e]}},no=function(e){return function(t){return to(t,e)}},io=Se,ao=sr;var oo=function(e){var t=za(e);return 1==t.length&&t[0][2]?Ha(t[0][0],t[0][1]):function(r){return r===e||Pa(r,e,t)}},so=function(e,t){return Xa(e)&&Ja(t)?Ka(eo(e),t):function(r){var n=Za(r,e);return void 0===n&&n===t?Ga(r,e):Qa(t,n,3)}},uo=function(e){return e},lo=ve,co=function(e){return io(e)?ro(ao(e)):no(e)};var ho=function(e){return"function"==typeof e?e:null==e?uo:"object"==typeof e?lo(e)?so(e[0],e[1]):oo(e):co(e)},fo=ho,po=Li,go=Wi;var mo=function(e){return function(t,r,n){var i=Object(t);if(!po(t)){var a=fo(r);t=go(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var yo=de,vo=1/0;var bo=function(e){return e?(e=yo(e))===vo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var wo=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},$o=ho,xo=function(e){var t=bo(e),r=t%1;return t==t?r?t-r:t:0},So=Math.max;var Fo=A(mo((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:xo(r);return i<0&&(i=So(n+i,0)),wo(e,$o(t),i)}))),_o=Oa;var Do=A((function(e,t){return _o(e,t)})),Bo=Object.defineProperty,ko={};((e,t)=>{for(var r in t)Bo(e,r,{get:t[r],enumerable:!0})})(ko,{assign:()=>ss,colors:()=>is,createStringInterpolator:()=>es,skipAnimation:()=>as,to:()=>ts,willAdvance:()=>os});var Oo=Yo(),Ao=e=>No(e,Oo),Eo=Yo();Ao.write=e=>No(e,Eo);var Mo=Yo();Ao.onStart=e=>No(e,Mo);var Co=Yo();Ao.onFrame=e=>No(e,Co);var jo=Yo();Ao.onFinish=e=>No(e,jo);var Io=[];Ao.setTimeout=(e,t)=>{const r=Ao.now()+t,n=()=>{const e=Io.findIndex((e=>e.cancel==n));~e&&Io.splice(e,1),Ho-=~e?1:0},i={time:r,handler:e,cancel:n};return Io.splice(To(r),0,i),Ho+=1,Ro(),i};var To=e=>~(~Io.findIndex((t=>t.time>e))||~Io.length);Ao.cancel=e=>{Mo.delete(e),Co.delete(e),jo.delete(e),Oo.delete(e),Eo.delete(e)},Ao.sync=e=>{Lo=!0,Ao.batchedUpdates(e),Lo=!1},Ao.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ao.onStart(r)}return n.handler=e,n.cancel=()=>{Mo.delete(r),t=null},n};var Po="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ao.use=e=>Po=e,Ao.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ao.batchedUpdates=e=>e(),Ao.catch=console.error,Ao.frameLoop="always",Ao.advance=()=>{"demand"!==Ao.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Wo()};var zo=-1,Ho=0,Lo=!1;function No(e,t){Lo?(t.delete(e),e(0)):(t.add(e),Ro())}function Ro(){zo<0&&(zo=0,"demand"!==Ao.frameLoop&&Po(Vo))}function Vo(){~zo&&(Po(Vo),Ao.batchedUpdates(Wo))}function Wo(){const e=zo;zo=Ao.now();const t=To(zo);t&&(qo(Io.splice(0,t),(e=>e.handler())),Ho-=t),Ho?(Mo.flush(),Oo.flush(e?Math.min(64,zo-e):16.667),Co.flush(),Eo.flush(),jo.flush()):zo=-1}function Yo(){let e=new Set,t=e;return{add(r){Ho+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ho-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ho-=t.size,qo(t,(t=>t(r)&&e.add(t))),Ho+=e.size,t=e)}}}function qo(e,t){e.forEach((e=>{try{t(e)}catch(e){Ao.catch(e)}}))}function Uo(){}var Qo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Zo(e,t){if(Qo.arr(e)){if(!Qo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Go=(e,t)=>e.forEach(t);function Xo(e,t,r){if(Qo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Jo=e=>Qo.und(e)?[]:Qo.arr(e)?e:[e];function Ko(e,t){if(e.size){const r=Array.from(e);e.clear(),Go(r,t)}}var es,ts,rs=(e,...t)=>Ko(e,(e=>e(...t))),ns=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),is=null,as=!1,os=Uo,ss=e=>{e.to&&(ts=e.to),e.now&&(Ao.now=e.now),void 0!==e.colors&&(is=e.colors),null!=e.skipAnimation&&(as=e.skipAnimation),e.createStringInterpolator&&(es=e.createStringInterpolator),e.requestAnimationFrame&&Ao.use(e.requestAnimationFrame),e.batchedUpdates&&(Ao.batchedUpdates=e.batchedUpdates),e.willAdvance&&(os=e.willAdvance),e.frameLoop&&(Ao.frameLoop=e.frameLoop)},us=new Set,ls=[],cs=[],ds=0,hs={get idle(){return!us.size&&!ls.length},start(e){ds>e.priority?(us.add(e),Ao.onStart(fs)):(ps(e),Ao(ms))},advance:ms,sort(e){if(ds)Ao.onFrame((()=>hs.sort(e)));else{const t=ls.indexOf(e);~t&&(ls.splice(t,1),gs(e))}},clear(){ls=[],us.clear()}};function fs(){us.forEach(ps),us.clear(),Ao(ms)}function ps(e){ls.includes(e)||gs(e)}function gs(e){ls.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ls,(t=>t.priority>e.priority)),0,e)}function ms(e){const t=cs;for(let r=0;r<ls.length;r++){const n=ls[r];ds=n.priority,n.idle||(os(n),n.advance(e),n.idle||t.push(n))}return ds=0,(cs=ls).length=0,(ls=t).length>0}var ys="[-+]?\\d*\\.?\\d+",vs=ys+"%";function bs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ws=new RegExp("rgb"+bs(ys,ys,ys)),$s=new RegExp("rgba"+bs(ys,ys,ys,ys)),xs=new RegExp("hsl"+bs(ys,vs,vs)),Ss=new RegExp("hsla"+bs(ys,vs,vs,ys)),Fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,_s=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ds=/^#([0-9a-fA-F]{6})$/,Bs=/^#([0-9a-fA-F]{8})$/;function ks(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Os(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=ks(i,n,e+1/3),o=ks(i,n,e),s=ks(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function As(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Es(e){return(parseFloat(e)%360+360)%360/360}function Ms(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Cs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function js(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ds.exec(e))?parseInt(t[1]+"ff",16)>>>0:is&&void 0!==is[e]?is[e]:(t=ws.exec(e))?(As(t[1])<<24|As(t[2])<<16|As(t[3])<<8|255)>>>0:(t=$s.exec(e))?(As(t[1])<<24|As(t[2])<<16|As(t[3])<<8|Ms(t[4]))>>>0:(t=Fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Bs.exec(e))?parseInt(t[1],16)>>>0:(t=_s.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=xs.exec(e))?(255|Os(Es(t[1]),Cs(t[2]),Cs(t[3])))>>>0:(t=Ss.exec(e))?(Os(Es(t[1]),Cs(t[2]),Cs(t[3]))|Ms(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Is=(e,t,r)=>{if(Qo.fun(e))return e;if(Qo.arr(e))return Is({range:e,output:t,extrapolate:r});if(Qo.str(e.output[0]))return es(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",u=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,u){let l=u?u(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>r){if("identity"===s)return l;"clamp"===s&&(l=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t);l=a(l),n===-1/0?l=-l:i===1/0?l+=n:l=l*(i-n)+n;return l}(e,a[t],a[t+1],i[t],i[t+1],u,o,s,n.map)}};var Ts=1.70158,Ps=1.525*Ts,zs=Ts+1,Hs=2*Math.PI/3,Ls=2*Math.PI/4.5,Ns=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Rs={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>zs*e*e*e-Ts*e*e,easeOutBack:e=>1+zs*Math.pow(e-1,3)+Ts*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ps)/2:(Math.pow(2*e-2,2)*((Ps+1)*(2*e-2)+Ps)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Hs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Hs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ls)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ls)/2+1,easeInBounce:e=>1-Ns(1-e),easeOutBounce:Ns,easeInOutBounce:e=>e<.5?(1-Ns(1-2*e))/2:(1+Ns(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Vs=Symbol.for("FluidValue.get"),Ws=Symbol.for("FluidValue.observers"),Ys=e=>Boolean(e&&e[Vs]),qs=e=>e&&e[Vs]?e[Vs]():e,Us=e=>e[Ws]||null;function Qs(e,t){const r=e[Ws];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Zs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Gs(this,e)}},Gs=(e,t)=>eu(e,Vs,t);function Xs(e,t){if(e[Vs]){let r=e[Ws];r||eu(e,Ws,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Js(e,t){const r=e[Ws];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ws]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ks,eu=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),tu=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ru=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,nu=new RegExp(`(${tu.source})(%|[a-z]+)`,"i"),iu=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,au=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ou=e=>{const[t,r]=su(e);if(!t||ns())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&au.test(r)?ou(r):r||e},su=e=>{const t=au.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},uu=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,lu=e=>{Ks||(Ks=is?new RegExp(`(${Object.keys(is).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>qs(e).replace(au,ou).replace(ru,js).replace(Ks,js))),r=t.map((e=>e.match(tu).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Is({...e,output:t})));return e=>{const r=!nu.test(t[0])&&t.find((e=>nu.test(e)))?.replace(tu,"");let i=0;return t[0].replace(tu,(()=>`${n[i++](e)}${r||""}`)).replace(iu,uu)}},cu="react-spring: ",du=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${cu}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},hu=du(console.warn);var fu=du(console.warn);function pu(e){return Qo.str(e)&&("#"==e[0]||/\d/.test(e)||!ns()&&au.test(e)||e in(is||{}))}var gu=ns()?o:l,mu=()=>{const e=a(!1);return gu((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function yu(){const e=u()[1],t=mu();return()=>{t.current&&e(Math.random())}}var vu=e=>o(e,bu),bu=[];function wu(e){const t=a();return o((()=>{t.current=e})),t.current}var $u=Symbol.for("Animated:node"),xu=e=>e&&e[$u],Su=(e,t)=>{return r=e,n=$u,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Fu=e=>e&&e[$u]&&e[$u].getPayload(),_u=class{constructor(){Su(this,this)}getPayload(){return this.payload||[]}},Du=class extends _u{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Qo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Du(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Qo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Qo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Bu=class extends Du{constructor(e){super(0),this._string=null,this._toString=Is({output:[e,e]})}static create(e){return new Bu(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Qo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Is({output:[this.getValue(),e]})),this._value=0,super.reset()}},ku={dependencies:null},Ou=class extends _u{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Xo(this.source,((r,n)=>{var i;(i=r)&&i[$u]===i?t[n]=r.getValue(e):Ys(r)?t[n]=qs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Go(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Xo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ku.dependencies&&Ys(e)&&ku.dependencies.add(e);const t=Fu(e);t&&Go(t,(e=>this.add(e)))}},Au=class extends Ou{constructor(e){super(e)}static create(e){return new Au(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Eu)),!0)}};function Eu(e){return(pu(e)?Bu:Du).create(e)}function Mu(e){const t=xu(e);return t?t.constructor:Qo.arr(e)?Au:pu(e)?Bu:Du}var Cu=(e,t)=>{const r=!Qo.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,s)=>{const u=a(null),l=r&&d((e=>{u.current=function(e,t){e&&(Qo.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[c,h]=function(e,t){const r=new Set;ku.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ou(e),ku.dependencies=null,[e,r]}(i,t),f=yu(),p=()=>{const e=u.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new ju(p,h),m=a();gu((()=>(m.current=g,Go(h,(e=>Xs(e,g))),()=>{m.current&&(Go(m.current.deps,(e=>Js(e,m.current))),Ao.cancel(m.current.update))}))),o(p,[]),vu((()=>()=>{const e=m.current;Go(e.deps,(t=>Js(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,{...y,ref:l})}))},ju=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ao.write(this.update)}};var Iu=Symbol.for("AnimatedComponent"),Tu=e=>Qo.str(e)?e:e&&Qo.str(e.displayName)?e.displayName:Qo.fun(e)&&e.name||null;function Pu(e,...t){return Qo.fun(e)?e(...t):e}var zu=(e,t)=>!0===e||!!(t&&e&&(Qo.fun(e)?e(t):Jo(e).includes(t))),Hu=(e,t)=>Qo.obj(e)?t&&e[t]:e,Lu=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Nu=e=>e,Ru=(e,t=Nu)=>{let r=Vu;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Qo.und(r)||(n[i]=r)}return n},Vu=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Wu={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Yu(e){const t=function(e){const t={};let r=0;if(Xo(e,((e,n)=>{Wu[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Xo(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function qu(e){return e=qs(e),Qo.arr(e)?e.map(qu):pu(e)?ko.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Uu(e){return Qo.fun(e)||Qo.arr(e)&&Qo.obj(e[0])}var Qu={tension:170,friction:26,mass:1,damping:1,easing:Rs.linear,clamp:!1},Zu=class{constructor(){this.velocity=0,Object.assign(this,Qu)}};function Gu(e,t){if(Qo.und(t.decay)){const r=!Qo.und(t.tension)||!Qo.und(t.friction);!r&&Qo.und(t.frequency)&&Qo.und(t.damping)&&Qo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Xu=[],Ju=class{constructor(){this.changed=!1,this.values=Xu,this.toValues=null,this.fromValues=Xu,this.config=new Zu,this.immediate=!1}};function Ku(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let u,l,c=zu(r.cancel??n?.cancel,t);if(c)f();else{Qo.und(r.pause)||(i.paused=zu(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||zu(e,t)),u=Pu(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(l),l.cancel(),u=l.time-Ao.now()}function h(){u>0&&!ko.skipAnimation?(i.delayed=!0,l=Ao.setTimeout(f,u),i.pauseQueue.add(d),i.timeouts.add(l)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(l),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var el=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?nl(e.get()):t.every((e=>e.noop))?tl(e.get()):rl(e.get(),t.every((e=>e.finished))),tl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),rl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),nl=e=>({value:e,cancelled:!0,finished:!1});function il(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:u}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const l=Ru(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&nl(n)||i!==r.asyncId&&rl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new ol,o=new sl;return(async()=>{if(ko.skipAnimation)throw al(r),o.result=rl(n,!1),d(o),o;f(a);const s=Qo.obj(e)?{...e}:{...t,to:e};s.parentId=i,Xo(l,((e,t)=>{Qo.und(s[t])&&(s[t]=e)}));const u=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),u})()};let g;if(ko.skipAnimation)return al(r),rl(n,!1);try{let t;t=Qo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=rl(n.get(),!0,!1)}catch(e){if(e instanceof ol)g=e.result;else{if(!(e instanceof sl))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?u:void 0)}return Qo.fun(o)&&Ao.batchedUpdates((()=>{o(g,n,n.item)})),g})():u}function al(e,t){Ko(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ol=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},sl=class extends Error{constructor(){super("SkipAnimationSignal")}},ul=e=>e instanceof cl,ll=1,cl=class extends Zs{constructor(){super(...arguments),this.id=ll++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=xu(this);return e&&e.getValue()}to(...e){return ko.to(this,e)}interpolate(...e){return hu(`${cu}The "interpolate" function is deprecated in v9 (use "to" instead)`),ko.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Qs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||hs.sort(this),Qs(this,{type:"priority",parent:this,priority:e})}},dl=Symbol.for("SpringPhase"),hl=e=>(1&e[dl])>0,fl=e=>(2&e[dl])>0,pl=e=>(4&e[dl])>0,gl=(e,t)=>t?e[dl]|=3:e[dl]&=-3,ml=(e,t)=>t?e[dl]|=4:e[dl]&=-5,yl=class extends cl{constructor(e,t){if(super(),this.animation=new Ju,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Qo.und(e)||!Qo.und(t)){const r=Qo.obj(e)?{...e}:{...t,from:e};Qo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(fl(this)||this._state.asyncTo)||pl(this)}get goal(){return qs(this.animation.to)}get velocity(){const e=xu(this);return e instanceof Du?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hl(this)}get isAnimating(){return fl(this)}get isPaused(){return pl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=Fu(n.to);!o&&Ys(n.to)&&(i=Jo(qs(n.to))),n.values.forEach(((s,u)=>{if(s.done)return;const l=s.constructor==Bu?1:o?o[u].lastPosition:i[u];let c=n.immediate,d=l;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[u],i=null!=s.v0?s.v0:s.v0=Qo.arr(a.velocity)?a.velocity[u]:a.velocity;let o;const h=a.precision||(r==l?.005:Math.min(1,.001*Math.abs(l-r)));if(Qo.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,u=!Qo.und(n),f=r==l?s.v0>0:r<l;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(l-d)<=h,!c));++e){u&&(g=d==l||d>l==f,g&&(o=-o*n,d=l));o+=(1e-6*-a.tension*(d-l)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(l-r),o=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[u].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=xu(this),u=s.getValue();if(t){const e=qs(n.to);u===e&&!r||a.decay?r&&a.decay&&this._onChange(u):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(u)}set(e){return Ao.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(fl(this)){const{to:e,config:t}=this.animation;Ao.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Qo.und(e)?(r=this.queue||[],this.queue=[]):r=[Qo.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>el(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),al(this._state,e&&this._lastCallId),Ao.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Qo.obj(r)?r[t]:r,(null==r||Uu(r))&&(r=void 0),n=Qo.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return hl(this)||(e.reverse&&([r,n]=[n,r]),n=qs(n),Qo.und(n)?xu(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ru(e,((e,t)=>/^on/.test(t)?Hu(e,r):e))),Fl(this,e,"onProps"),_l(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ku(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{pl(this)||(ml(this,!0),rs(a.pauseQueue),_l(this,"onPause",rl(this,vl(this,this.animation.to)),this))},resume:()=>{pl(this)&&(ml(this,!1),fl(this)&&this._resume(),rs(a.resumeQueue),_l(this,"onResume",rl(this,vl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=bl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(nl(this));const n=!Qo.und(e.to),i=!Qo.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(nl(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:u,from:l}=s;let{to:c=u,from:d=l}=e;!i||n||t.default&&!Qo.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Zo(d,l);h&&(s.from=d),d=qs(d);const f=!Zo(c,u);f&&this._focus(c);const p=Uu(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Gu(r={...r},t),t={...r,...t}),Gu(e,t),Object.assign(e,t);for(const t in Qu)null==e[t]&&(e[t]=Qu[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Qo.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,Pu(t.config,a),t.config!==o.config?Pu(o.config,a):void 0);let v=xu(this);if(!v||Qo.und(c))return r(rl(this,!0));const b=Qo.und(t.reset)?i&&!t.default:!Qo.und(d)&&zu(t.reset,a),w=b?d:this.get(),$=qu(c),x=Qo.num($)||Qo.arr($)||pu($),S=!p&&(!x||zu(o.immediate||t.immediate,a));if(f){const e=Mu(c);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const F=v.constructor;let _=Ys(c),D=!1;if(!_){const e=b||!hl(this)&&h;(f||e)&&(D=Zo(qu(w),$),_=!D),(Zo(s.immediate,S)||S)&&Zo(g.decay,m)&&Zo(g.velocity,y)||(_=!0)}if(D&&fl(this)&&(s.changed&&!b?_=!0:_||this._stop(u)),!p&&((_||Ys(u))&&(s.values=v.getPayload(),s.toValues=Ys(c)?null:F==Bu?[1]:Jo($)),s.immediate!=S&&(s.immediate=S,S||b||this._set(u)),_)){const{onRest:e}=s;Go(Sl,(e=>Fl(this,t,e)));const n=rl(this,vl(this,u));rs(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Ao.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?Pu(o.onRest,n):s.onStart?.(n,this)}))}b&&this._set(w),p?r(il(t.to,t,this._state,this)):_?this._start():fl(this)&&!f?this._pendingCalls.add(r):r(tl(w))}_focus(e){const t=this.animation;e!==t.to&&(Us(this)&&this._detach(),t.to=e,Us(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ys(t)&&(Xs(t,this),ul(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ys(e)&&Js(e,this)}_set(e,t=!0){const r=qs(e);if(!Qo.und(r)){const e=xu(this);if(!e||!Zo(r,e.getValue())){const n=Mu(r);e&&e.constructor==n?e.setValue(r):Su(this,n.create(r)),e&&Ao.batchedUpdates((()=>{this._onChange(r,t)}))}}return xu(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,_l(this,"onStart",rl(this,vl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Pu(this.animation.onChange,e,this)),Pu(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;xu(this).reset(qs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),fl(this)||(gl(this,!0),pl(this)||this._resume())}_resume(){ko.skipAnimation?this.finish():hs.start(this)}_stop(e,t){if(fl(this)){gl(this,!1);const r=this.animation;Go(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Qs(this,{type:"idle",parent:this});const n=t?nl(this.get()):rl(this.get(),vl(this,e??r.to));rs(this._pendingCalls,n),r.changed&&(r.changed=!1,_l(this,"onRest",n,this))}}};function vl(e,t){const r=qu(t);return Zo(qu(e.get()),r)}function bl(e,t=e.loop,r=e.to){const n=Pu(t);if(n){const i=!0!==n&&Yu(n),a=(i||e).reverse,o=!i||i.reset;return wl({...e,loop:t,default:!1,pause:void 0,to:!a||Uu(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function wl(e){const{to:t,from:r}=e=Yu(e),n=new Set;return Qo.obj(t)&&xl(t,n),Qo.obj(r)&&xl(r,n),e.keys=n.size?Array.from(n):null,e}function $l(e){const t=wl(e);return Qo.und(t.default)&&(t.default=Ru(t)),t}function xl(e,t){Xo(e,((e,r)=>null!=e&&t.add(r)))}var Sl=["onStart","onRest","onChange","onPause","onResume"];function Fl(e,t,r){e.animation[r]=t[r]!==Lu(t,r)?Hu(t[r],e.key):void 0}function _l(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Dl=["onStart","onChange","onRest"],Bl=1,kl=class{constructor(e,t){this.id=Bl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Qo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(wl(e)),this}start(e){let{queue:t}=this;return e?t=Jo(e).map(wl):this.queue=[],this._flush?this._flush(this,t):(Il(this,t),Ol(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Go(Jo(t),(t=>r[t].stop(!!e)))}else al(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Qo.und(e))this.start({pause:!0});else{const t=this.springs;Go(Jo(e),(e=>t[e].pause()))}return this}resume(e){if(Qo.und(e))this.start({pause:!1});else{const t=this.springs;Go(Jo(e),(e=>t[e].resume()))}return this}each(e){Xo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ko(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&Ko(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,Ko(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ao.onFrame(this._onFrame)}};function Ol(e,t){return Promise.all(t.map((t=>Al(e,t)))).then((t=>el(e,t)))}async function Al(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:u}=t,l=Qo.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=Qo.arr(i)||Qo.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):Go(Dl,(r=>{const n=t[r];if(Qo.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,rs(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Lu(t,"cancel");(c||f&&d.asyncId)&&h.push(Ku(++e._lastAsyncId,{props:t,state:d,actions:{pause:Uo,resume:Uo,start(t,r){f?(al(d,e._lastAsyncId),r(nl(e))):(t.onRest=s,r(il(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=el(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=bl(t,o,i);if(r)return Il(e,[r]),Al(e,r,!0)}return u&&Ao.batchedUpdates((()=>u(p,e,e.item))),p}function El(e,t){const r={...e.springs};return t&&Go(Jo(t),(e=>{Qo.und(e.keys)&&(e=wl(e)),Qo.obj(e.to)||(e={...e,to:void 0}),jl(r,e,(e=>Cl(e)))})),Ml(e,r),r}function Ml(e,t){Xo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Xs(t,e))}))}function Cl(e,t){const r=new yl;return r.key=e,t&&Xs(r,t),r}function jl(e,t,r){t.keys&&Go(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Il(e,t){Go(t,(t=>{jl(e.springs,t,(t=>Cl(t,e)))}))}var Tl,Pl,zl=({children:e,...t})=>{const r=h(Hl),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=u((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return o((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Hl;return n.createElement(l,{value:t},e)},Hl=(Tl=zl,Pl={},Object.assign(Tl,n.createContext(Pl)),Tl.Provider._context=Tl,Tl.Consumer._context=Tl,Tl);zl.Provider=Hl.Provider,zl.Consumer=Hl.Consumer;var Ll=()=>{const e=[],t=function(t){fu(`${cu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Go(e,((e,i)=>{if(Qo.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Go(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Go(e,(e=>e.resume(...arguments))),this},t.set=function(t){Go(e,((e,r)=>{const n=Qo.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Go(e,((e,n)=>{if(Qo.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Go(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Go(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Qo.fun(e)?e(r,t):e};return t._getProps=r,t};function Nl(e,t){const r=Qo.fun(e),[[n],i]=function(e,t,r){const n=Qo.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?Ll():void 0),[]),o=a(0),s=yu(),u=f((()=>({ctrls:[],queue:[],flush(e,t){const r=El(e,t);return o.current>0&&!u.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Ol(e,t):new Promise((n=>{Ml(e,r),u.queue.push((()=>{n(Ol(e,t))})),s()}))}})),[]),l=a([...u.ctrls]),c=[],d=wu(e)||0;function p(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new kl(null,u.flush)),r=n?n(i,e):t[i];r&&(c[i]=$l(r))}}f((()=>{Go(l.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=l.current.map(((e,t)=>El(e,c[t]))),m=h(zl),y=wu(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);gu((()=>{o.current++,u.ctrls=l.current;const{queue:e}=u;e.length&&(u.queue=[],Go(e,(e=>e()))),Go(l.current,((e,t)=>{i?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),vu((()=>()=>{Go(u.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Rl=class extends cl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Is(...t);const r=this._get(),n=Mu(r);Su(this,n.create(r))}advance(e){const t=this._get();Zo(t,this.get())||(xu(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Wl(this._active)&&Yl(this)}_get(){const e=Qo.arr(this.source)?this.source.map(qs):Jo(qs(this.source));return this.calc(...e)}_start(){this.idle&&!Wl(this._active)&&(this.idle=!1,Go(Fu(this),(e=>{e.done=!1})),ko.skipAnimation?(Ao.batchedUpdates((()=>this.advance())),Yl(this)):hs.start(this))}_attach(){let e=1;Go(Jo(this.source),(t=>{Ys(t)&&Xs(t,this),ul(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Go(Jo(this.source),(e=>{Ys(e)&&Js(e,this)})),this._active.clear(),Yl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Jo(this.source).reduce(((e,t)=>Math.max(e,(ul(t)?t.priority:0)+1)),0))}};function Vl(e){return!1!==e.idle}function Wl(e){return!e.size||Array.from(e).every(Vl)}function Yl(e){e.idle||(e.idle=!0,Go(Fu(e),(e=>{e.done=!0})),Qs(e,{type:"idle",parent:e}))}ko.assign({createStringInterpolator:lu,to:(e,t)=>new Rl(e,t)});var ql=/^--/;function Ul(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ql.test(e)||Zl.hasOwnProperty(e)&&Zl[e]?(""+t).trim():t+"px"}var Ql={};var Zl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","Ms","Moz","O"];Zl=Object.keys(Zl).reduce(((e,t)=>(Gl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Zl);var Xl=/^(matrix|translate|scale|rotate|skew)/,Jl=/^(translate)/,Kl=/^(rotate|skew)/,ec=(e,t)=>Qo.num(e)&&0!==e?e+t:e,tc=(e,t)=>Qo.arr(e)?e.every((e=>tc(e,t))):Qo.num(e)?e===t:parseFloat(e)===t,rc=class extends Ou{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>ec(e,"px"))).join(",")})`,tc(e,0)]))),Xo(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Xl.test(t)){if(delete n[t],Qo.und(e))return;const r=Jl.test(t)?"px":Kl.test(t)?"deg":"";i.push(Jo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${ec(i,r)})`,tc(i,0)]:e=>[`${t}(${e.map((e=>ec(e,r))).join(",")})`,tc(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new nc(i,a)),super(n)}},nc=class extends Zs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Go(this.inputs,((r,n)=>{const i=qs(r[0]),[a,o]=this.transforms[n](Qo.arr(i)?i:r.map(qs));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Go(this.inputs,(e=>Go(e,(e=>Ys(e)&&Xs(e,this)))))}observerRemoved(e){0==e&&Go(this.inputs,(e=>Go(e,(e=>Ys(e)&&Js(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Qs(this,e)}};ko.assign({batchedUpdates:b,createStringInterpolator:lu,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ic=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ou(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=Tu(e)||"Anonymous";return(e=Qo.str(e)?a[e]||(a[e]=Cu(e,i)):e[Iu]||(e[Iu]=Cu(e,i))).displayName=`Animated(${t})`,e};return Xo(e,((t,r)=>{Qo.arr(e)&&(r=Tu(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...u}=t,l=Object.values(u),c=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Ql[t]||(Ql[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ul(t,n[t]);ql.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,l[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new rc(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),ac=ic.animated;const oc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sc=e=>Object.keys(oc).reduce(((t,r)=>{const n=oc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),uc=sc("max-width"),lc=(sc("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),cc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,dc=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||br.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${cc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,hc=p(dc)`
    animation-delay: -0.45s;
`,fc=p(dc)`
    animation-delay: -0.3s;
`,pc=p(dc)`
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
                    background-color: ${br.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?xr.Button.Danger.Border:br.Primary};

                    color: ${e.$buttonIsDanger?xr.Button.Danger.Primary:br.Primary};
                `;case"light":return g`
                    background-color: ${br.Neutral[8]};
                    border: 1px solid ${br.Neutral[5]};

                    color: ${e.$buttonIsDanger?xr.Button.Danger.Primary:br.Primary};
                `;case"disabled":return g`
                    background-color: ${br.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${br.Neutral[3]};
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?xr.Button.Danger.Primary:br.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?xr.Button.Danger.Hover:br.Secondary};
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?xr.Button.Danger.BackgroundColor:br.Primary};
                    border: 1px solid transparent;

                    ${uc.mobileL} {
                        width: 100%;
                    }

                    color: ${br.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    ${Er("H5","semibold")}

                    ${uc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    ${Er("H4","semibold")}

                    ${uc.mobileS} {
                        height: auto;
                    }
                `}
`;const gc=p((({color:r,className:n,size:i=18})=>e(lc,Object.assign({className:n,$size:i,$color:r},{children:[t(dc,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(hc,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(fc,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(pc,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?xr.Button.Danger.Primary:br.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=br.Neutral[3](e);break;default:t=br.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,mc=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,yc=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return g`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${mc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?br.Neutral[4](e):e.$unchecked?br.Accent.Light[2](e):br.Primary(e)};
    }
`,vc=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,bc=p(ac.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,wc=p.ul`
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
        background: ${br.Neutral[4]};
        border-right: 5px solid ${br.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${uc.mobileL} {
        max-height: 15rem;
    }
`,$c=p.li`
    :hover,
    :focus,
    :active {
        background: ${br.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${br.Accent.Light[5]};
            `}}
`,xc=p.button`
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
        outline-color: ${br.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Sc=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Fc=p.div`
    ${Er("Body","regular")}
    color: ${br.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Sc}
`,_c=p.div`
    color: ${br.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Sc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${Er("BodySmall","semibold")}
                `:g`
                    ${Er("Body","regular")}
                `}
`,Dc=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Fc} {
                        display: inline;
                    }

                    ${_c} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Bc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,kc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Oc=p((r=>{var{className:n,checked:i,disabled:s,indeterminate:u,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=B(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=a();o((()=>{f.current.indeterminate=u}),[u]);const p=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return e(yc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":u?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:p,$displaySize:d,$disabled:s,$unchecked:!(u||i||s)},{children:[t(vc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:s},h)),u?t($,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):s?t(S,{"data-testid":"disabled-empty-checkbox"}):t(F,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ac=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Ec=p.button`
    ${Er("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${br.Primary(e)};\n\t\t`}
`,Mc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Cc=p(Cr.Body)``,jc=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${br.Validation.Red.Icon};
`,Ic=p.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${br.Neutral[7]};
            `}
    }
`,Tc=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(Ic,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Pc=p.li`
    background: ${br.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,zc=p(Hr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Hc=p(_)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${br.Neutral[3]};
`,Lc=p(Tc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${br.Neutral[3]};
    cursor: pointer;
`,Nc=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${br.Neutral[3]};
`,Rc=c(((r,n)=>{const{onClear:i}=r,a=B(r,["onClear"]);return e(Pc,{children:[t(Hc,{}),t(zc,Object.assign({ref:n},a)),a.value&&t(Lc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Nc,{})}))]},"search")})),Vc=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:F="end",itemMaxLines:_=2,labelDisplayType:D="inline",renderListItem:k,onBlur:O,hideNoResultsDisplay:A,renderCustomCallToAction:E}=n,M=B(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,j]=u(0),[I,T]=u(""),[P,z]=u(i),[H,L]=u(0),N=Nl({height:H}),R=a(),V=a(),W=a([]),Y=a(),q=a(),U=a(C),Q=a(P),Z=e=>{U.current=e,j(e)},G=e=>{Q.current=e,z(e)};o((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),o((()=>{ee(I)}),[I]),o((()=>{if(T(""),h){if(setTimeout((()=>{L(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),o((()=>{if(h){const e=te();L(e)}}),[P,S]),o((()=>{G(i),T(""),Z(0)}),[i]);const X=e=>s?s(e):e.toString(),J=e=>{if("inline"!==D)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return ln.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},K=e=>!!Fo(w,(t=>Do(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var r;const n=X(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),a="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;T(t),g&&g()},ae=()=>{T(""),Y.current.focus(),g&&g()},oe=()=>{x&&x()},se=()=>{O&&O()},ue=n=>e(r,{children:[t(Bc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(kc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),le=r=>{const n=X(r),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel,o=J(i),s=a&&J(a),u=o||s?"next-line":D;return e(Dc,Object.assign({$labelDisplayType:u},{children:[t(Fc,Object.assign({$truncateType:F,$maxLines:_,"aria-label":i},{children:"middle"===F&&o?ue(i):i})),a&&t(_c,Object.assign({$truncateType:F,$maxLines:_,$labelDisplayType:D,"aria-label":a},{children:"middle"===F&&s?ue(a):a}))]}))},ce=()=>{if(!x||x&&"success"===S)return P.map(((r,n)=>t($c,Object.assign({$checked:K(r)&&!b},{children:e(xc,Object.assign({$hasNextLineLabel:"next-line"===D&&P.length>0&&s&&"string"!=typeof s(P[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(Oc,{checked:K(r),displaySize:"small"}),k?k(r,{selected:K(r)}):le(r)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},de=()=>{if(b&&P.length>0&&!I&&"success"===S)return t(Ac,{children:t(Ec,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(I||!f)&&0===P.length&&"success"===S)return e(Mc,Object.assign({"data-testid":"list-no-results"},{children:[t(jc,{"data-testid":"no-result-icon"}),t(Cc,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(Mc,Object.assign({"data-testid":"list-loading"},{children:[t(gc,{$buttonStyle:"secondary",size:24}),t(Cc,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(Mc,Object.assign({"data-testid":"list-fail"},{children:[t(jc,{"data-testid":"load-error-icon"}),t(Cc,{children:"Failed to load."}),t(Ec,Object.assign({onClick:oe,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(bc,Object.assign({style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(wc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},M,{children:[(f||m)&&"success"===S?t(Rc,{ref:Y,onChange:ie,value:I,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ae}):null,de(),he(),fe(),pe(),ce()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:E(y,P)}))})()]}))})},Wc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Yc=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,qc=g`
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
        outline: 2px solid ${br.Accent.Light[3]};
    }
`,Uc=p.button`
    ${qc}
    cursor: pointer;
`,Qc=p.div`
    ${qc}
`,Zc=m`
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
`,Gc=p.div`
    position: relative;
    border: 1px solid ${br.Neutral[5]};
    border-radius: ${"4px"};
    background: ${br.Neutral[8]};

    :focus-within {
        border: 1px solid ${br.Accent.Light[1]};
        box-shadow: ${xr.InputBoxShadow};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Zc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${br.Neutral[6](e)};

                ${Uc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${br.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Uc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${br.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${br.Validation.Red.Border(e)};
                    box-shadow: ${xr.InputErrorBoxShadow};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Wc};
    margin-left: 1rem;
`,p(D)`
    color: ${br.Neutral[3]};
    height: ${Dr.Body.fontSize}rem;
    width: ${Dr.Body.fontSize}rem;
`;const Xc=p.div`
    height: 1px;
    background: ${br.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const Jc=p(Cr.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Jc)`
    color: ${br.Neutral[3]};
`;const Kc=({children:e,show:r,error:n,disabled:i,testId:s,onBlur:u,readOnly:l,className:c})=>{const d=a();return((e,t,r="window",n)=>{const i=a();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;r&&u()}}),"document"),t(Yc,Object.assign({className:c},{children:t(Gc,Object.assign({ref:d,error:n&&!r,disabled:i,$readOnly:l,expanded:r,"data-testid":s},{children:e}))}))},ed=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const w=s&&v(s),[$,x]=u(w||""),[S,F]=u(w||""),[_,D]=u([]),[B,O]=u(!0),[A,E]=u(!1),[M,C]=u(!!s),[j,I]=u(s),T=a(c),P=e=>k(void 0,void 0,void 0,(function*(){E(!1),O(!0);try{const t=yield T.current(e);F(e),D(t),O(!1)}catch(e){E(!0)}})),z=d(ye((e=>P(e)),500,{leading:!1,trailing:!0}),[]);o((()=>{T.current=c}),[c]),o((()=>{$&&$.length>=l&&$!==S?z($):z.cancel(),""===$&&j&&(b&&b(void 0,void 0),N(),I(void 0)),s&&$!==v(s)&&C(!1)}),[$,s]),o((()=>{x(s?v(s):""),N(s),I(s)}),[s]);const H=e=>{x(e.target.value)},L=(e,t)=>{b&&b(e,t)},N=e=>{F(e?v(e):""),C(!!e),D([]),O(!0)},R=()=>{x(""),b&&b(void 0,void 0),N()},V=()=>{M||j?(N(j),x(v(j)),b&&b(j,Y(j)),I(j)):R()},W=()=>$&&$.length>=l&&!M,Y=e=>m?m(e):e,q=()=>t(pn,{type:"text",value:$,onChange:H,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:$.length<l?V:void 0});return e(Kc,Object.assign({className:n,show:W(),error:g&&!W(),disabled:p,readOnly:f,testId:i,onBlur:V},{children:[t(f?r:Qc,{children:q()}),!f&&W()&&t(Xc,{}),t(Vc,{listItems:_,onSelectItem:L,valueExtractor:m,listExtractor:y,itemsLoadState:A?"fail":B?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>P($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))};export{ed as PredictiveTextInput};
//# sourceMappingURL=index.js.map
