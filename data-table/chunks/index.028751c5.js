import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as i from"react";import n,{lazy as s,Suspense as o,useRef as a,useEffect as g,useState as l,isValidElement as c,createRef as d,cloneElement as h,PureComponent as m,useLayoutEffect as p,useCallback as u}from"react";import f,{useTheme as y,keyframes as b,css as v}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{MinusSquareFillIcon as F,SquareTickFillIcon as w,SquareFillIcon as x,SquareIcon as B,ArrowUpIcon as $,ArrowDownIcon as D}from"@lifesg/react-icons";import{findDOMNode as k}from"react-dom";function H(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}function E(e,t,r,i){return new(r||(r=Promise))((function(n,s){function o(e){try{g(i.next(e))}catch(e){s(e)}}function a(e){try{g(i.throw(e))}catch(e){s(e)}}function g(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}g((i=i.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var O=new Map,C=new WeakMap,z=0,A=void 0;function j(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(C.has(e)||(z+=1,C.set(e,z.toString())),C.get(e)):"0"}(e.root):e[t]}`)).toString()}function T(e,t,r={},i=A){if(void 0===window.IntersectionObserver&&void 0!==i){const n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:s,elements:o}=function(e){const t=j(e);let r=O.get(t);if(!r){const i=new Map;let n;const s=new IntersectionObserver((t=>{t.forEach((t=>{var r;const s=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=i.get(t.target))||r.forEach((e=>{e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},O.set(t,r)}return r}(r),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),O.delete(n))}}s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.30060b96.js")).LottieSpinner}})))),f.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.a7897a65.js")).LottieLoadingDots}})))),f.div`
    margin: 0 auto;
`;var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _=Array.isArray,I="object"==typeof P&&P&&P.Object===Object&&P,W="object"==typeof self&&self&&self.Object===Object&&self,N=I||W||Function("return this")(),L=N.Symbol,V=L,M=Object.prototype,J=M.hasOwnProperty,X=M.toString,Y=V?V.toStringTag:void 0;var G=function(e){var t=J.call(e,Y),r=e[Y];try{e[Y]=void 0;var i=!0}catch(e){}var n=X.call(e);return i&&(t?e[Y]=r:delete e[Y]),n},U=Object.prototype.toString;var K=G,q=function(e){return U.call(e)},Z=L?L.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Z&&Z in Object(e)?K(e):q(e)};var ee=Q,te=function(e){return null!=e&&"object"==typeof e};var re=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},ie=_,ne=re,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(e,t){if(ie(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ne(e))||(oe.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ge=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},le=Q,ce=ge;var de,he=function(e){if(!ce(e))return!1;var t=le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=N["__core-js_shared__"],pe=(de=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var ue=function(e){return!!pe&&pe in e},fe=Function.prototype.toString;var ye=he,be=ue,ve=ge,Se=function(e){if(null!=e){try{return fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,we=Function.prototype,xe=Object.prototype,Be=we.toString,$e=xe.hasOwnProperty,De=RegExp("^"+Be.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!ve(e)||be(e))&&(ye(e)?De:Fe).test(Se(e))},He=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var r=He(e,t);return ke(r)?r:void 0},Oe=Ee(Object,"create"),Ce=Oe;var ze=function(){this.__data__=Ce?Ce(null):{},this.size=0};var Ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},je=Oe,Te=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(je){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Te.call(t,e)?t[e]:void 0},Re=Oe,_e=Object.prototype.hasOwnProperty;var Ie=Oe;var We=ze,Ne=Ae,Le=Pe,Ve=function(e){var t=this.__data__;return Re?void 0!==t[e]:_e.call(t,e)},Me=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Je.prototype.clear=We,Je.prototype.delete=Ne,Je.prototype.get=Le,Je.prototype.has=Ve,Je.prototype.set=Me;var Xe=Je;var Ye=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Ue=function(e,t){for(var r=e.length;r--;)if(Ge(e[r][0],t))return r;return-1},Ke=Ue,qe=Array.prototype.splice;var Ze=Ue;var Qe=Ue;var et=Ue;var tt=Ye,rt=function(e){var t=this.__data__,r=Ke(t,e);return!(r<0)&&(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,!0)},it=function(e){var t=this.__data__,r=Ze(t,e);return r<0?void 0:t[r][1]},nt=function(e){return Qe(this.__data__,e)>-1},st=function(e,t){var r=this.__data__,i=et(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this};function ot(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ot.prototype.clear=tt,ot.prototype.delete=rt,ot.prototype.get=it,ot.prototype.has=nt,ot.prototype.set=st;var at=ot,gt=Ee(N,"Map"),lt=Xe,ct=at,dt=gt;var ht=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var r=e.__data__;return ht(t)?r["string"==typeof t?"string":"hash"]:r.map},pt=mt;var ut=mt;var ft=mt;var yt=mt;var bt=function(){this.size=0,this.__data__={hash:new lt,map:new(dt||ct),string:new lt}},vt=function(e){var t=pt(this,e).delete(e);return this.size-=t?1:0,t},St=function(e){return ut(this,e).get(e)},Ft=function(e){return ft(this,e).has(e)},wt=function(e,t){var r=yt(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this};function xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}xt.prototype.clear=bt,xt.prototype.delete=vt,xt.prototype.get=St,xt.prototype.has=Ft,xt.prototype.set=wt;var Bt=xt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=t?t.apply(this,i):i[0],s=r.cache;if(s.has(n))return s.get(n);var o=e.apply(this,i);return r.cache=s.set(n,o)||s,o};return r.cache=new($t.Cache||Bt),r}$t.Cache=Bt;var Dt=$t;var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ht=/\\(\\)?/g,Et=function(e){var t=Dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(kt,(function(e,r,i,n){t.push(i?n.replace(Ht,"$1"):r||e)})),t}));var Ot=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n},Ct=_,zt=re,At=L?L.prototype:void 0,jt=At?At.toString:void 0;var Tt=function e(t){if("string"==typeof t)return t;if(Ct(t))return Ot(t,e)+"";if(zt(t))return jt?jt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Pt=Tt;var Rt=_,_t=ae,It=Et,Wt=function(e){return null==e?"":Pt(e)};var Nt=re;var Lt=function(e,t){return Rt(e)?e:_t(e,t)?[e]:It(Wt(e))},Vt=function(e){if("string"==typeof e||Nt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Mt=function(e,t){for(var r=0,i=(t=Lt(t,e)).length;null!=e&&r<i;)e=e[Vt(t[r++])];return r&&r==i?e:void 0};var Jt=R((function(e,t,r){var i=null==e?void 0:Mt(e,t);return void 0===i?r:i}));const Xt=(e,t,r)=>t?Jt(r,t)||Jt(e,t):r||e,Yt=(e,t)=>{const r=t||e.defaultValue;return Jt(e.collections,r)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gt||(Gt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Kt=e=>t=>{const r=t.theme,i=Yt(Ut,r[Gt.colorScheme]);return r.options&&r.options.color?Xt(i,e,r.options.color):Xt(i,e)},qt={Brand:{1:Kt("Brand.1"),2:Kt("Brand.2"),3:Kt("Brand.3"),4:Kt("Brand.4"),5:Kt("Brand.5"),6:Kt("Brand.6")},Primary:Kt("Primary"),PrimaryDark:Kt("PrimaryDark"),Secondary:Kt("Secondary"),Accent:{Light:{1:Kt("Accent.Light.1"),2:Kt("Accent.Light.2"),3:Kt("Accent.Light.3"),4:Kt("Accent.Light.4"),5:Kt("Accent.Light.5"),6:Kt("Accent.Light.6")},Dark:{1:Kt("Accent.Dark.1"),2:Kt("Accent.Dark.2"),3:Kt("Accent.Dark.3")}},Neutral:{1:Kt("Neutral.1"),2:Kt("Neutral.2"),3:Kt("Neutral.3"),4:Kt("Neutral.4"),5:Kt("Neutral.5"),6:Kt("Neutral.6"),7:Kt("Neutral.7"),8:Kt("Neutral.8")},Validation:{Green:{Text:Kt("Validation.Green.Text"),Icon:Kt("Validation.Green.Icon"),Border:Kt("Validation.Green.Border"),Background:Kt("Validation.Green.Background")},Orange:{Text:Kt("Validation.Orange.Text"),Icon:Kt("Validation.Orange.Icon"),Border:Kt("Validation.Orange.Border"),Background:Kt("Validation.Orange.Background"),Badge:Kt("Validation.Orange.Badge")},Red:{Text:Kt("Validation.Red.Text"),Icon:Kt("Validation.Red.Icon"),Border:Kt("Validation.Red.Border"),Background:Kt("Validation.Red.Background")},Blue:{Text:Kt("Validation.Blue.Text"),Icon:Kt("Validation.Blue.Icon"),Border:Kt("Validation.Blue.Border"),Background:Kt("Validation.Blue.Background")}},Shadow:{Accent:Kt("Shadow.Accent"),Red:Kt("Shadow.Red"),Elevation:Kt("Shadow.Elevation")}},Zt={[Gt.colorScheme]:"base",[Gt.textStyleScheme]:"base",[Gt.designTokenScheme]:"base",[Gt.resourceScheme]:"base"};Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme;const Qt=s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.549d096a.js")).LottieLoadingDotsSpinner}})))),er=t=>{var{color:r}=t,i=H(t,["color"]);const n=y(),s=r||qt.Primary({theme:n||Zt});return e(rr,Object.assign({},i,{children:e(o,Object.assign({fallback:e(tr,{})},{children:e(Qt,{color:s})}))}))},tr=()=>e("div",{style:{height:"200px",width:"200px"}}),rr=f.div`
    margin: 0 auto;
`,ir=i=>n=>{switch(i){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:n.dateString}),"."]});case"inactivity":{const i=n,s=Math.floor(i.secondsLeft/60),o=i.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",s," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}},nr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var sr;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:i,width:n,height:s}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${nr.mobileL}px) 400px, (max-width: ${nr.tablet}px) 800px, 1200px`,width:n,height:s}}}(sr||(sr={}));const{imgAttributeHelper:or}=sr,ar={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},gr={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},lr=Object.assign(Object.assign({},ar),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),cr=Object.assign(Object.assign({},ar),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),dr=e=>new Map([["400",{img:or(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:or(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:or(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:or(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:or(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:or(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:or(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:or(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:or(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:or(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:or(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:or(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:or(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ir("inactivity")}],["maintenance",{img:or(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ir("maintenance")}],["no-item-found",{img:or(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:or(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:or(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:or(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:or(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:or(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),hr=e=>Object.keys(nr).reduce(((t,r)=>{const i=nr[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),mr=hr("max-width"),pr=(hr("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ur=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fr=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||qt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ur} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yr=f(fr)`
    animation-delay: -0.45s;
`,br=f(fr)`
    animation-delay: -0.3s;
`,vr=f(fr)`
    animation-delay: -0.15s;
`,Sr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Fr={D1:{fontFamily:Sr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},wr={D1:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Sr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Sr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Sr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},xr={collections:{base:Fr,oneservice:{D1:{fontFamily:Sr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Sr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Sr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Sr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Sr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Sr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Sr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Sr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Sr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Sr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Sr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Sr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:wr},defaultValue:"base"},Br=e=>t=>{const r=t.theme,i=Yt(xr,r[Gt.textStyleScheme]);return r.options&&r.options.textStyle?Xt(i,e,r.options.textStyle):Xt(i,e)},$r={D1:{fontFamily:Br("D1.fontFamily"),fontSize:Br("D1.fontSize"),fontWeight:Br("D1.fontWeight"),lineHeight:Br("D1.lineHeight"),letterSpacing:Br("D1.letterSpacing")},D2:{fontFamily:Br("D2.fontFamily"),fontSize:Br("D2.fontSize"),fontWeight:Br("D2.fontWeight"),lineHeight:Br("D2.lineHeight"),letterSpacing:Br("D2.letterSpacing")},D3:{fontFamily:Br("D3.fontFamily"),fontSize:Br("D3.fontSize"),fontWeight:Br("D3.fontWeight"),lineHeight:Br("D3.lineHeight"),letterSpacing:Br("D3.letterSpacing")},D4:{fontFamily:Br("D4.fontFamily"),fontSize:Br("D4.fontSize"),fontWeight:Br("D4.fontWeight"),lineHeight:Br("D4.lineHeight"),letterSpacing:Br("D4.letterSpacing")},DBody:{fontFamily:Br("DBody.fontFamily"),fontSize:Br("DBody.fontSize"),fontWeight:Br("DBody.fontWeight"),lineHeight:Br("DBody.lineHeight"),letterSpacing:Br("DBody.letterSpacing")},H1:{fontFamily:Br("H1.fontFamily"),fontSize:Br("H1.fontSize"),fontWeight:Br("H1.fontWeight"),lineHeight:Br("H1.lineHeight"),letterSpacing:Br("H1.letterSpacing")},H2:{fontFamily:Br("H2.fontFamily"),fontSize:Br("H2.fontSize"),fontWeight:Br("H2.fontWeight"),lineHeight:Br("H2.lineHeight"),letterSpacing:Br("H2.letterSpacing")},H3:{fontFamily:Br("H3.fontFamily"),fontSize:Br("H3.fontSize"),fontWeight:Br("H3.fontWeight"),lineHeight:Br("H3.lineHeight"),letterSpacing:Br("H3.letterSpacing")},H4:{fontFamily:Br("H4.fontFamily"),fontSize:Br("H4.fontSize"),fontWeight:Br("H4.fontWeight"),lineHeight:Br("H4.lineHeight"),letterSpacing:Br("H4.letterSpacing")},H5:{fontFamily:Br("H5.fontFamily"),fontSize:Br("H5.fontSize"),fontWeight:Br("H5.fontWeight"),lineHeight:Br("H5.lineHeight"),letterSpacing:Br("H5.letterSpacing")},H6:{fontFamily:Br("H6.fontFamily"),fontSize:Br("H6.fontSize"),fontWeight:Br("H6.fontWeight"),lineHeight:Br("H6.lineHeight"),letterSpacing:Br("H6.letterSpacing")},Body:{fontFamily:Br("Body.fontFamily"),fontSize:Br("Body.fontSize"),fontWeight:Br("Body.fontWeight"),lineHeight:Br("Body.lineHeight"),letterSpacing:Br("Body.letterSpacing")},BodySmall:{fontFamily:Br("BodySmall.fontFamily"),fontSize:Br("BodySmall.fontSize"),fontWeight:Br("BodySmall.fontWeight"),lineHeight:Br("BodySmall.lineHeight"),letterSpacing:Br("BodySmall.letterSpacing")},XSmall:{fontFamily:Br("XSmall.fontFamily"),fontSize:Br("XSmall.fontSize"),fontWeight:Br("XSmall.fontWeight"),lineHeight:Br("XSmall.lineHeight"),letterSpacing:Br("XSmall.letterSpacing")}},Dr=[Sr.OpenSans,Sr.PlusJakartaSans],kr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Hr=(e,t)=>r=>{var i;const n=$r[e].fontFamily(r),s=$r[e].fontWeight(r),o=Dr.find((e=>Object.values(e).includes(n)));return o?v`
                font-family: ${kr(o,t)||kr(o,s)||n};
                font-weight: normal !important;
            `:v`
            font-family: ${n};
            font-weight: ${null!==(i=Er(t)||s)&&void 0!==i?i:"normal"};
        `},Er=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Or=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Cr=Hr,zr=(e,t,r=!1)=>i=>{const n=$r[e],s=n.fontSize(i);return v`
            ${Hr(e,t)}
            font-size: ${s}rem !important;
            line-height: ${n.lineHeight}rem !important;
            letter-spacing: ${n.letterSpacing(i)||0}rem !important;
            ${v`
                margin-bottom: ${s*(r?1.05:0)}rem;
            `}
        `},Ar=(e=!1,t=!1,r=void 0)=>t?v`
            display: block;
            ${Or(r)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Or(r)}
        `;var jr;!function(e){e.D1=f.h1`
        ${e=>v`
                ${zr("D1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>v`
                ${zr("D2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>v`
                ${zr("D3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>v`
                ${zr("D4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>v`
                ${zr("DBody",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>v`
                ${zr("H1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>v`
                ${zr("H2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>v`
                ${zr("H3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>v`
                ${zr("H4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>v`
                ${zr("H5",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>v`
                ${zr("H6",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>v`
                ${zr("Body",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>v`
                ${zr("BodySmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>v`
                ${zr("XSmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Ar(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jr||(jr={}));const Tr=f.a`
    ${e=>v`
            ${zr(e.textStyle,e.weight)}
            color: ${qt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${qt.Secondary};

                svg {
                    color: ${qt.Secondary};
                }
            }
        `}
`,Pr=f(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rr=r=>{var{external:i=!1,children:n}=r,s=H(r,["external","children"]);return t(Tr,Object.assign({},s,{children:[n,i&&e(Pr,{})]}))};var _r;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(_r||(_r={}));const Ir={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Wr=e=>t=>{var r;const i=t.theme,n=Yt(Ir,i[Gt.designTokenScheme]);return(null===(r=i.options)||void 0===r?void 0:r.designToken)?Xt(n,e,i.options.designToken):Xt(n,e)},Nr={InputBoxShadow:Wr("InputBoxShadow"),InputErrorBoxShadow:Wr("InputErrorBoxShadow"),ElevationBoxShadow:Wr("ElevationBoxShadow"),Table:{Header:Wr("Table.Header"),Cell:{Primary:Wr("Table.Cell.Primary"),Secondary:Wr("Table.Cell.Secondary"),Selected:Wr("Table.Cell.Selected"),Hover:Wr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Wr("Button.Danger.BackgroundColor"),Hover:Wr("Button.Danger.Hover"),Primary:Wr("Button.Danger.Primary"),Border:Wr("Button.Danger.Border")}}},Lr=f.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return v`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Nr.Button.Danger.Border:qt.Primary};

                    color: ${e.$buttonIsDanger?Nr.Button.Danger.Primary:qt.Primary};
                `;case"light":return v`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid ${qt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Nr.Button.Danger.Primary:qt.Primary};
                `;case"disabled":return v`
                    background-color: ${qt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qt.Neutral[3]};
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Nr.Button.Danger.Primary:qt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Nr.Button.Danger.Hover:qt.Secondary};
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Nr.Button.Danger.BackgroundColor:qt.Primary};
                    border: 1px solid transparent;

                    ${mr.mobileL} {
                        width: 100%;
                    }

                    color: ${qt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    ${zr("H5","semibold")}

                    ${mr.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    ${zr("H4","semibold")}

                    ${mr.mobileS} {
                        height: auto;
                    }
                `}
`,Vr=f((({color:r,className:i,size:n=18})=>t(pr,Object.assign({className:i,$size:n,$color:r},{children:[e(fr,{id:"inner1",$size:n-2,$borderWidth:2,$color:r}),e(yr,{id:"inner2",$size:n-2,$borderWidth:2,$color:r}),e(br,{id:"inner3",$size:n-2,$borderWidth:2,$color:r}),e(vr,{id:"inner4",$size:n-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Nr.Button.Danger.Primary:qt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Mr={Default:n.forwardRef(((r,i)=>{const{children:n,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return t(Lr,Object.assign({ref:i,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Vr,Object.assign({},c)),e("span",{children:n})]}))})),Small:n.forwardRef(((r,i)=>{const{children:n,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return t(Lr,Object.assign({ref:i,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Vr,Object.assign({},c,{size:16})),e("span",{children:n})]}))}))},Jr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Xr=f.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${mr.mobileL} {
        width: 20rem;
    }

    ${mr.mobileM} {
        width: 18rem;
    }

    ${mr.mobileS} {
        width: 15rem;
    }
`,Yr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Gr=f(jr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Ur=f.div`
    ${zr("Body","regular")} // Follow styling of Text.Body
    color: ${qt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Cr("Body","semibold")}
    }

    a {
        ${zr("Body","semibold")}
        color: ${qt.Primary};

        :hover,
        :active,
        :focus {
            color: ${qt.Secondary};
        }
    }
`,Kr=f(Mr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${mr.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,qr=qt.Neutral[5],Zr=qt.Neutral[1],Qr=f.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${qr};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,ei=f.div`
    flex: 1;
`,ti=f.table`
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;

    ${e=>{if(e.$stickyHeader)return v`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,ri=f.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${qr}`:"none"};
        }
    }
`,ii=f.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return v`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return v`
                position: sticky;
                left: 0;
            `}};
`,ni=f.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${qr};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${qr};
    border-radius: 0 0 4px 4px;
    background-color: ${Nr.Table.Cell.Selected};
    transition: all 300ms ease;
`,si=f.tr`
    background-color: ${Nr.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${qr};
`,oi=f.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Zr};
    border-bottom: 1px solid ${qr};
    ${e=>{if(e.$isCheckbox)return v`
                width: 4rem;
            `}};
`,ai=f.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${qt.Neutral[1]};
        margin-left: 0.5rem;
    }
`,gi=f.tr`
    background-color: ${e=>e.$isSelected?v`
                ${Nr.Table.Cell.Selected};
            `:e.$alternating?v`
                ${Nr.Table.Cell.Primary};
            `:v`
                ${Nr.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${qr};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return v`
                    background-color: ${Nr.Table.Cell.Hover};
                `}};
    }
`,li=f.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Zr};
    border-bottom: 1px solid ${qr};
`,ci=f(jr.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,di=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,hi=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,mi=f((r=>{var{type:i,img:n,title:s,description:o,actionButton:a,additionalProps:g,imageOnly:l,illustrationScheme:c}=r,d=H(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=y(),m=((e,t)=>{switch(t){case"bookingsg":return dr(gr).get(e);case"ccube":return dr(lr).get(e);case"mylegacy":return dr(cr).get(e);default:return dr(ar).get(e)}})(i,c||(h||Zt).resourceScheme),p=d["data-testid"]||"error-display",u=()=>{switch(i){case"maintenance":{const e=g;return g&&e.dateString?m.renderDescription(e):o||void 0}case"inactivity":{const e=g;return g&&e.secondsLeft?m.renderDescription(e):o||void 0}default:return o||void 0}};if(!m)return null;const f=Object.assign(Object.assign(Object.assign(Object.assign({},m),n&&{img:n}),s&&{title:s}),u()&&{description:u()});return t(Jr,Object.assign({},d,{"data-testid":p},{children:[e(Xr,Object.assign({},f.img,{alt:"","data-id":"error-display-image"})),!l&&(f.title||f.description?t(Yr,{children:[f.title&&("string"==typeof f.title?e(Gr,Object.assign({"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold"},{children:f.title})):f.title),f.description&&e(Ur,Object.assign({"data-testid":`${p}--description`,"data-id":"error-display-description"},{children:"string"==typeof f.description?e("p",{children:f.description}):f.description}))]}):null),a&&(()=>{const t=Object.assign({children:"Proceed"},a);return e(Kr,Object.assign({},t))})()]}))}))`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,pi=f.td`
    padding: 4rem 0;
`,ui=b`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,fi=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return v`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${ui};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?qt.Neutral[4](e):e.$unchecked?qt.Accent.Light[2](e):qt.Primary(e)};
    }
`,yi=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,bi=r=>{var{className:i,checked:n,disabled:s,indeterminate:o,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=H(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const m=a();g((()=>{m.current.indeterminate=o}),[o]);const p=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(fi,Object.assign({className:i,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":n,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:p,$displaySize:d,$disabled:s,$unchecked:!(o||n||s)},{children:[e(yi,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:n,ref:m,tabIndex:-1,onChange:p,disabled:s},h)),o?e(F,{"data-testid":"indeterminate"}):n?e(w,{"data-testid":"checkmark"}):s?e(x,{"data-testid":"disabled-empty-checkbox"}):e(B,{"data-testid":"empty-checkbox"})]}))};var vi=function(e,t){return vi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},vi(e,t)};var Si=function(){return Si=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Si.apply(this,arguments)};var Fi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var wi=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xi="object"==typeof Fi&&Fi&&Fi.Object===Object&&Fi,Bi="object"==typeof self&&self&&self.Object===Object&&self,$i=xi||Bi||Function("return this")(),Di=$i,ki=function(){return Di.Date.now()},Hi=/\s/;var Ei=function(e){for(var t=e.length;t--&&Hi.test(e.charAt(t)););return t},Oi=/^\s+/;var Ci=function(e){return e?e.slice(0,Ei(e)+1).replace(Oi,""):e},zi=$i.Symbol,Ai=zi,ji=Object.prototype,Ti=ji.hasOwnProperty,Pi=ji.toString,Ri=Ai?Ai.toStringTag:void 0;var _i=function(e){var t=Ti.call(e,Ri),r=e[Ri];try{e[Ri]=void 0;var i=!0}catch(e){}var n=Pi.call(e);return i&&(t?e[Ri]=r:delete e[Ri]),n},Ii=Object.prototype.toString;var Wi=_i,Ni=function(e){return Ii.call(e)},Li=zi?zi.toStringTag:void 0;var Vi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Li&&Li in Object(e)?Wi(e):Ni(e)},Mi=function(e){return null!=e&&"object"==typeof e};var Ji=Ci,Xi=wi,Yi=function(e){return"symbol"==typeof e||Mi(e)&&"[object Symbol]"==Vi(e)},Gi=/^[-+]0x[0-9a-f]+$/i,Ui=/^0b[01]+$/i,Ki=/^0o[0-7]+$/i,qi=parseInt;var Zi=wi,Qi=ki,en=function(e){if("number"==typeof e)return e;if(Yi(e))return NaN;if(Xi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ji(e);var r=Ui.test(e);return r||Ki.test(e)?qi(e.slice(2),r?2:8):Gi.test(e)?NaN:+e},tn=Math.max,rn=Math.min;var nn=function(e,t,r){var i,n,s,o,a,g,l=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=i,s=n;return i=n=void 0,l=t,o=e.apply(s,r)}function p(e){var r=e-g;return void 0===g||r>=t||r<0||d&&e-l>=s}function u(){var e=Qi();if(p(e))return f(e);a=setTimeout(u,function(e){var r=t-(e-g);return d?rn(r,s-(e-l)):r}(e))}function f(e){return a=void 0,h&&i?m(e):(i=n=void 0,o)}function y(){var e=Qi(),r=p(e);if(i=arguments,n=this,g=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(u,t),c?m(e):o}(g);if(d)return clearTimeout(a),a=setTimeout(u,t),m(g)}return void 0===a&&(a=setTimeout(u,t)),o}return t=en(t)||0,Zi(r)&&(c=!!r.leading,s=(d="maxWait"in r)?tn(en(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=g=n=a=void 0},y.flush=function(){return void 0===a?o:f(Qi())},y},sn=nn,on=wi;var an=function(e,t,r){var i=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return on(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),sn(e,t,{leading:i,maxWait:t,trailing:n})},gn=function(e,t,r,i){switch(t){case"debounce":return nn(e,r,i);case"throttle":return an(e,r,i);default:return e}},ln=function(e){return"function"==typeof e},cn=function(){return"undefined"==typeof window},dn=function(e){return e instanceof Element||e instanceof HTMLDocument},hn=function(e,t,r,i){return function(n){var s=n.width,o=n.height;t((function(t){return t.width===s&&t.height===o||t.width===s&&!i||t.height===o&&!r?t:(e&&ln(e)&&e(s,o),{width:s,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,i=e.observerOptions;if(!cn()){t&&t.current&&(r.targetRef.current=t.current);var n=r.getElement();n&&(r.observableElement&&r.observableElement===n||(r.observableElement=n,r.resizeObserver.observe(n,i)))}},r.getElement=function(){var e=r.props,t=e.querySelector,i=e.targetDomEl;if(cn())return null;if(t)return document.querySelector(t);if(i&&dn(i))return i;if(r.targetRef&&dn(r.targetRef.current))return r.targetRef.current;var n=k(r);if(!n)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return n;default:return n.parentElement}},r.createResizeHandler=function(e){var t=r.props,i=t.handleWidth,n=void 0===i||i,s=t.handleHeight,o=void 0===s||s,a=t.onResize;if(n||o){var g=hn(a,r.setState.bind(r),n,o);e.forEach((function(e){var t=e&&e.contentRect||{},i=t.width,n=t.height;!r.skipOnMount&&!cn()&&g({width:i,height:n}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,i=e.children;return ln(t)?"renderProp":ln(i)?"childFunction":c(i)?"child":Array.isArray(i)?"childArray":"parent"};var i=t.skipOnMount,n=t.refreshMode,s=t.refreshRate,o=void 0===s?1e3:s,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=i,r.targetRef=d(),r.observableElement=null,cn()||(r.resizeHandler=gn(r.createResizeHandler,n,o,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}vi(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){cn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,s=t.nodeType,o=void 0===s?"div":s,a=this.state,g={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(g);case"childFunction":return(e=n)(g);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}(g,["targetRef"]);return h(e,l)}return h(e,g);case"childArray":return(e=n).map((function(e){return!!e&&h(e,g)}));default:return i.createElement(o,null)}}}(m);var mn=cn()?g:p;const pn=n=>{var{id:s,headers:o,rows:c,className:d,sortIndicators:h,alternatingRows:m,loadState:p="success",enableMultiSelect:f,selectedIds:y,disabledIds:b,enableActionBar:v,enableSelectAll:S,enableStickyHeader:F,emptyView:w,actionBarContent:x,renderCustomEmptyView:B,onHeaderClick:k,onSelect:E,onSelectAll:O,onClearSelectionClick:C}=n,z=H(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const A=a(null),j=a(null),P=a(null),R=a(null),_=a(null),[I,W]=l(!1),[N,L]=l(!1),[V,M]=l(!1),[J,X]=l(!1),[Y,G]=l(!1),{ref:U,inView:K}=function({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:s,triggerOnce:o,skip:a,initialInView:g,fallbackInView:l,onChange:c}={}){var d;const[h,m]=i.useState(null),p=i.useRef(),[u,f]=i.useState({inView:!!g,entry:void 0});p.current=c,i.useEffect((()=>{if(a||!h)return;let i;return i=T(h,((e,t)=>{f({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&o&&i&&(i(),i=void 0)}),{root:s,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,h,s,n,o,a,r,l,t]);const y=null==(d=u.entry)?void 0:d.target,b=i.useRef();h||!y||o||a||b.current===y||(b.current=y,f({inView:!!g,entry:void 0}));const v=[m,u.inView,u.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),q=u((()=>{if(!_.current||!R.current)return;const e=_.current.scrollHeight>_.current.clientHeight;W(e),e?R.current.style.transform="translateY(0)":se()}),[]);g((()=>{q()}),[]),function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,i=e.refreshMode,n=e.refreshRate,s=void 0===n?1e3:n,o=e.refreshOptions,g=e.handleWidth,c=void 0===g||g,d=e.handleHeight,h=void 0===d||d,m=e.targetRef,p=e.observerOptions,u=e.onResize,f=a(r),y=a(null),b=null!=m?m:y,v=a(),S=l({width:void 0,height:void 0}),F=S[0],w=S[1];mn((function(){if(!cn()){var e=hn(u,w,c,h);v.current=gn((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},i=r.width,n=r.height;!f.current&&!cn()&&e({width:i,height:n}),f.current=!1}))}),i,s,o);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,s,o,c,h,u,p,b.current]),Si({ref:b},F)}({onResize:q});((e,t,r="window",i)=>{const n=a();g((()=>{n.current=t}),[t]),g((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const s=e=>n.current(e);return t.addEventListener(e,s,i),()=>{t.removeEventListener(e,s,i)}}),[e,r])})("scroll",(()=>{requestAnimationFrame((()=>{I?ne():se()})),_.current&&M(_.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),g((()=>{oe()}),[c]);const Z=()=>(null==y?void 0:y.length)===c.length,Q=e=>!!(null==y?void 0:y.includes(e)),ee=e=>!!m&&e%2==1,te=e=>!!(null==b?void 0:b.includes(e)),re=e=>{if(z["data-testid"])return`${z["data-testid"]}-${e}`},ie=()=>o.length+(f?1:0),ne=()=>{if(!_.current)return;const e=_.current.getBoundingClientRect();X(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},se=()=>{if(!(A.current&&j.current&&_.current&&R.current&&P.current))return;const e=j.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=A.current.getBoundingClientRect().height-P.current.clientHeight-32,i=Math.min(t,r);R.current.style.transform=`translateY(-${i}px)`}else R.current.style.transform="translateY(0)"},oe=()=>{A.current&&_.current&&G(A.current.clientHeight+(v?56:0)<_.current.clientHeight)},ae=r=>{const{fieldKey:i,label:n,clickable:s=!1,style:o}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(oi,Object.assign({"data-testid":re(`header-${i}`),$clickable:s,onClick:()=>s&&(null==k?void 0:k(i)),style:o,$isCheckbox:!1},{children:t(ai,{children:["string"==typeof n?e(jr.H4,Object.assign({weight:"bold"},{children:n})):n,ge(i)]})}),i)},ge=t=>{const i=null==h?void 0:h[t];return i?"asc"===i?e($,{"data-testid":re(`header-${t}-arrowup`)}):e(D,{"data-testid":re(`header-${t}-arrowdown`)}):e(r,{})},le=()=>e(oi,Object.assign({"data-testid":re("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(di,{children:S&&e(bi,{displaySize:"small",checked:Z(),indeterminate:y&&0!==y.length&&!Z(),onClick:()=>{O&&O(Z())}})})})),ce=(t,r)=>{const i="string"!=typeof t?t.style:void 0,n="string"==typeof t?t:t.fieldKey,s=r.id.toString(),o=r[n],a=`${s}-${n}`;return e(li,Object.assign({"data-testid":re(`row-${a}`),style:i,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(ci,{children:o}):"function"==typeof o?o(r,{isSelected:Q(s)}):o}),a)},de=t=>e(li,Object.assign({"data-testid":re(`row-${t}-selection`),$isCheckbox:!0},{children:e(di,{children:e(bi,{displaySize:"small",checked:Q(t),onClick:()=>{E&&E(t,!Q(t))},disabled:te(t)})})})),he=()=>e(mi,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(jr.H3,{children:w.title}):w.title:e(jr.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(Qr,Object.assign({id:s||"table-wrapper","data-testid":z["data-testid"]||"table",className:d,ref:_,onScroll:()=>{I&&_.current&&L(_.current.scrollTop+_.current.clientHeight>=_.current.scrollHeight)}},{children:[e(ei,{children:t(ti,Object.assign({$end:V,$scrollable:I,ref:A,$stickyHeader:F},{children:[e("thead",Object.assign({ref:P},{children:t(si,{children:[f&&le(),o.map(ae)]})})),e(ri,Object.assign({$showLastRowBottomBorder:Y},{children:"success"===p?!c||c.length<1?e("tr",{children:e(pi,Object.assign({colSpan:ie()},{children:B?B():he()}))}):e(r,{children:null==c?void 0:c.map(((e,r)=>t(gi,Object.assign({"data-testid":re(`row-${e.id.toString()}`),$alternating:ee(r),$isSelectable:f,$isSelected:Q(e.id.toString())},{children:[f&&de(e.id.toString()),o.map((t=>ce(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ie()},{children:e(hi,{children:"loading"===p&&e(er,{})})}))})}))]}))}),v&&y&&y.length>0&&(()=>{var r,i,n;return e(ii,Object.assign({ref:R,$fixed:J,$left:null===(i=null===(r=null==A?void 0:A.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(n=null==A?void 0:A.current)||void 0===n?void 0:n.clientWidth},{children:t(ni,Object.assign({$float:(I?!N:!K)||J,$scrollable:I},{children:[e(jr.H5,Object.assign({weight:"semibold"},{children:`${y.length} item${y.length>1?"s":""} selected`})),e(Mr.Small,Object.assign({styleType:"link",onClick:C},{children:"Clear selection"})),x]}))}))})(),e("div",{ref:e=>{j.current=e,U(e)}})]}))};export{pn as D,P as c};
//# sourceMappingURL=index.028751c5.js.map
