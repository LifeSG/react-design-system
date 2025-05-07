import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{lazy as s,Suspense as o,useRef as a,useEffect as g,useState as l,isValidElement as c,createRef as d,cloneElement as h,PureComponent as m,useLayoutEffect as u,useCallback as p}from"react";import f,{useTheme as y,css as b,keyframes as v}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{MinusSquareFillIcon as F,SquareTickFillIcon as w,SquareFillIcon as x,SquareIcon as B,ArrowUpIcon as $,ArrowDownIcon as D}from"@lifesg/react-icons";import{findDOMNode as k}from"react-dom";function H(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function E(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{g(n.next(e))}catch(e){s(e)}}function a(e){try{g(n.throw(e))}catch(e){s(e)}}function g(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}g((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var O=new Map,C=new WeakMap,z=0,A=void 0;function j(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(C.has(e)||(z+=1,C.set(e,z.toString())),C.get(e)):"0"}(e.root):e[t]}`)).toString()}function T(e,t,r={},n=A){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:s,elements:o}=function(e){const t=j(e);let r=O.get(t);if(!r){const n=new Map;let i;const s=new IntersectionObserver((t=>{t.forEach((t=>{var r;const s=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=n.get(t.target))||r.forEach((e=>{e(s,t)}))}))}),e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:n},O.set(t,r)}return r}(r),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),O.delete(i))}}s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.556b1d42.js")).LottieSpinner}})))),f.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.8119e0d6.js")).LottieLoadingDots}})))),f.div`
    margin: 0 auto;
`;var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R=Array.isArray,I="object"==typeof P&&P&&P.Object===Object&&P,_="object"==typeof self&&self&&self.Object===Object&&self,W=I||_||Function("return this")(),N=W.Symbol,L=N,M=Object.prototype,J=M.hasOwnProperty,X=M.toString,Y=L?L.toStringTag:void 0;var G=function(e){var t=J.call(e,Y),r=e[Y];try{e[Y]=void 0;var n=!0}catch(e){}var i=X.call(e);return n&&(t?e[Y]=r:delete e[Y]),i},U=Object.prototype.toString;var K=G,q=function(e){return U.call(e)},Z=N?N.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Z&&Z in Object(e)?K(e):q(e)};var ee=Q,te=function(e){return null!=e&&"object"==typeof e};var re=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},ne=R,ie=re,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(e,t){if(ne(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ie(e))||(oe.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ge=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},le=Q,ce=ge;var de,he=function(e){if(!ce(e))return!1;var t=le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=W["__core-js_shared__"],ue=(de=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var pe=function(e){return!!ue&&ue in e},fe=Function.prototype.toString;var ye=he,be=pe,ve=ge,Se=function(e){if(null!=e){try{return fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,we=Function.prototype,xe=Object.prototype,Be=we.toString,$e=xe.hasOwnProperty,De=RegExp("^"+Be.call($e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!ve(e)||be(e))&&(ye(e)?De:Fe).test(Se(e))},He=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var r=He(e,t);return ke(r)?r:void 0},Oe=Ee(Object,"create"),Ce=Oe;var ze=function(){this.__data__=Ce?Ce(null):{},this.size=0};var Ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},je=Oe,Te=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(je){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Te.call(t,e)?t[e]:void 0},Ve=Oe,Re=Object.prototype.hasOwnProperty;var Ie=Oe;var _e=ze,We=Ae,Ne=Pe,Le=function(e){var t=this.__data__;return Ve?void 0!==t[e]:Re.call(t,e)},Me=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ie&&void 0===t?"__lodash_hash_undefined__":t,this};function Je(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Je.prototype.clear=_e,Je.prototype.delete=We,Je.prototype.get=Ne,Je.prototype.has=Le,Je.prototype.set=Me;var Xe=Je;var Ye=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Ue=function(e,t){for(var r=e.length;r--;)if(Ge(e[r][0],t))return r;return-1},Ke=Ue,qe=Array.prototype.splice;var Ze=Ue;var Qe=Ue;var et=Ue;var tt=Ye,rt=function(e){var t=this.__data__,r=Ke(t,e);return!(r<0)&&(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,!0)},nt=function(e){var t=this.__data__,r=Ze(t,e);return r<0?void 0:t[r][1]},it=function(e){return Qe(this.__data__,e)>-1},st=function(e,t){var r=this.__data__,n=et(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ot(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ot.prototype.clear=tt,ot.prototype.delete=rt,ot.prototype.get=nt,ot.prototype.has=it,ot.prototype.set=st;var at=ot,gt=Ee(W,"Map"),lt=Xe,ct=at,dt=gt;var ht=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var r=e.__data__;return ht(t)?r["string"==typeof t?"string":"hash"]:r.map},ut=mt;var pt=mt;var ft=mt;var yt=mt;var bt=function(){this.size=0,this.__data__={hash:new lt,map:new(dt||ct),string:new lt}},vt=function(e){var t=ut(this,e).delete(e);return this.size-=t?1:0,t},St=function(e){return pt(this,e).get(e)},Ft=function(e){return ft(this,e).has(e)},wt=function(e,t){var r=yt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function xt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xt.prototype.clear=bt,xt.prototype.delete=vt,xt.prototype.get=St,xt.prototype.has=Ft,xt.prototype.set=wt;var Bt=xt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var o=e.apply(this,n);return r.cache=s.set(i,o)||s,o};return r.cache=new($t.Cache||Bt),r}$t.Cache=Bt;var Dt=$t;var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ht=/\\(\\)?/g,Et=function(e){var t=Dt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(kt,(function(e,r,n,i){t.push(n?i.replace(Ht,"$1"):r||e)})),t}));var Ot=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ct=R,zt=re,At=N?N.prototype:void 0,jt=At?At.toString:void 0;var Tt=function e(t){if("string"==typeof t)return t;if(Ct(t))return Ot(t,e)+"";if(zt(t))return jt?jt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Pt=Tt;var Vt=R,Rt=ae,It=Et,_t=function(e){return null==e?"":Pt(e)};var Wt=re;var Nt=function(e,t){return Vt(e)?e:Rt(e,t)?[e]:It(_t(e))},Lt=function(e){if("string"==typeof e||Wt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Mt=function(e,t){for(var r=0,n=(t=Nt(t,e)).length;null!=e&&r<n;)e=e[Lt(t[r++])];return r&&r==n?e:void 0};var Jt=V((function(e,t,r){var n=null==e?void 0:Mt(e,t);return void 0===n?r:n}));const Xt=(e,t,r)=>t?Jt(r,t)||Jt(e,t):r||e,Yt=(e,t)=>{const r=t||e.defaultValue;return Jt(e.collections,r)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gt||(Gt={}));const Ut={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Kt=e=>t=>{const r=t.theme,n=Yt(Ut,r[Gt.colorScheme]);return r.options&&r.options.color?Xt(n,e,r.options.color):Xt(n,e)},qt={Brand:{1:Kt("Brand.1"),2:Kt("Brand.2"),3:Kt("Brand.3"),4:Kt("Brand.4"),5:Kt("Brand.5"),6:Kt("Brand.6")},Primary:Kt("Primary"),PrimaryDark:Kt("PrimaryDark"),Secondary:Kt("Secondary"),Accent:{Light:{1:Kt("Accent.Light.1"),2:Kt("Accent.Light.2"),3:Kt("Accent.Light.3"),4:Kt("Accent.Light.4"),5:Kt("Accent.Light.5"),6:Kt("Accent.Light.6")},Dark:{1:Kt("Accent.Dark.1"),2:Kt("Accent.Dark.2"),3:Kt("Accent.Dark.3")}},Neutral:{1:Kt("Neutral.1"),2:Kt("Neutral.2"),3:Kt("Neutral.3"),4:Kt("Neutral.4"),5:Kt("Neutral.5"),6:Kt("Neutral.6"),7:Kt("Neutral.7"),8:Kt("Neutral.8")},Validation:{Green:{Text:Kt("Validation.Green.Text"),Icon:Kt("Validation.Green.Icon"),Border:Kt("Validation.Green.Border"),Background:Kt("Validation.Green.Background")},Orange:{Text:Kt("Validation.Orange.Text"),Icon:Kt("Validation.Orange.Icon"),Border:Kt("Validation.Orange.Border"),Background:Kt("Validation.Orange.Background"),Badge:Kt("Validation.Orange.Badge")},Red:{Text:Kt("Validation.Red.Text"),Icon:Kt("Validation.Red.Icon"),Border:Kt("Validation.Red.Border"),Background:Kt("Validation.Red.Background")},Blue:{Text:Kt("Validation.Blue.Text"),Icon:Kt("Validation.Blue.Icon"),Border:Kt("Validation.Blue.Border"),Background:Kt("Validation.Blue.Background")}},Shadow:{Accent:Kt("Shadow.Accent"),Red:Kt("Shadow.Red"),Elevation:Kt("Shadow.Elevation")}},Zt={[Gt.colorScheme]:"base",[Gt.textStyleScheme]:"base",[Gt.designTokenScheme]:"base",[Gt.resourceScheme]:"base"};Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme,Gt.colorScheme,Gt.textStyleScheme,Gt.designTokenScheme,Gt.resourceScheme;const Qt=s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.0cf38255.js")).LottieLoadingDotsSpinner}})))),er=t=>{var{color:r}=t,n=H(t,["color"]);const i=y(),s=r||qt.Primary({theme:i||Zt});return e(rr,Object.assign({},n,{children:e(o,Object.assign({fallback:e(tr,{})},{children:e(Qt,{color:s})}))}))},tr=()=>e("div",{style:{height:"200px",width:"200px"}}),rr=f.div`
    margin: 0 auto;
`,nr=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,s=Math.floor(n.secondsLeft/60),o=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",s," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}},ir={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var sr;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:n,width:i,height:s}=e;return{srcSet:`${t} 400w, ${r} 800w, ${n} 1200w`,src:n,sizes:`(max-width: ${ir.mobileL}px) 400px, (max-width: ${ir.tablet}px) 800px, 1200px`,width:i,height:s}}}(sr||(sr={}));const{imgAttributeHelper:or}=sr,ar={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},gr={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},lr=Object.assign(Object.assign({},ar),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),cr=Object.assign(Object.assign({},ar),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),dr=e=>new Map([["400",{img:or(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:or(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:or(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:or(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:or(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:or(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:or(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:or(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:or(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:or(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:or(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:or(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:or(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:nr("inactivity")}],["maintenance",{img:or(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:nr("maintenance")}],["no-item-found",{img:or(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:or(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:or(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:or(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:or(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:or(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),hr={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${qt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${qt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${qt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},mr=e=>t=>{var r;const n=t.theme,i=Yt(hr,n[Gt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Xt(i,e,n.options.designToken):Xt(i,e)},ur={InputBoxShadow:mr("InputBoxShadow"),InputErrorBoxShadow:mr("InputErrorBoxShadow"),ElevationBoxShadow:mr("ElevationBoxShadow"),Table:{Header:mr("Table.Header"),Cell:{Primary:mr("Table.Cell.Primary"),Secondary:mr("Table.Cell.Secondary"),Selected:mr("Table.Cell.Selected"),Hover:mr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:mr("Button.Danger.BackgroundColor"),Hover:mr("Button.Danger.Hover"),Primary:mr("Button.Danger.Primary"),Border:mr("Button.Danger.Border")}}},pr=e=>Object.keys(ir).reduce(((t,r)=>{const n=ir[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),fr=pr("max-width"),yr=(pr("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),br=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,vr=f.div`
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
    animation: ${br} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Sr=f(vr)`
    animation-delay: -0.45s;
`,Fr=f(vr)`
    animation-delay: -0.3s;
`,wr=f(vr)`
    animation-delay: -0.15s;
`,xr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Br={D1:{fontFamily:xr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},$r={D1:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:xr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:xr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:xr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:xr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:xr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Dr={collections:{base:Br,oneservice:{D1:{fontFamily:xr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:xr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:xr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:xr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:xr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:xr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:xr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:xr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:xr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:xr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:xr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:xr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:$r},defaultValue:"base"},kr=e=>t=>{const r=t.theme,n=Yt(Dr,r[Gt.textStyleScheme]);return r.options&&r.options.textStyle?Xt(n,e,r.options.textStyle):Xt(n,e)},Hr={D1:{fontFamily:kr("D1.fontFamily"),fontSize:kr("D1.fontSize"),fontWeight:kr("D1.fontWeight"),lineHeight:kr("D1.lineHeight"),letterSpacing:kr("D1.letterSpacing"),fontVariant:kr("D1.fontVariant")},D2:{fontFamily:kr("D2.fontFamily"),fontSize:kr("D2.fontSize"),fontWeight:kr("D2.fontWeight"),lineHeight:kr("D2.lineHeight"),letterSpacing:kr("D2.letterSpacing"),fontVariant:kr("D2.fontVariant")},D3:{fontFamily:kr("D3.fontFamily"),fontSize:kr("D3.fontSize"),fontWeight:kr("D3.fontWeight"),lineHeight:kr("D3.lineHeight"),letterSpacing:kr("D3.letterSpacing"),fontVariant:kr("D3.fontVariant")},D4:{fontFamily:kr("D4.fontFamily"),fontSize:kr("D4.fontSize"),fontWeight:kr("D4.fontWeight"),lineHeight:kr("D4.lineHeight"),letterSpacing:kr("D4.letterSpacing"),fontVariant:kr("D4.fontVariant")},DBody:{fontFamily:kr("DBody.fontFamily"),fontSize:kr("DBody.fontSize"),fontWeight:kr("DBody.fontWeight"),lineHeight:kr("DBody.lineHeight"),letterSpacing:kr("DBody.letterSpacing"),fontVariant:kr("DBody.fontVariant")},H1:{fontFamily:kr("H1.fontFamily"),fontSize:kr("H1.fontSize"),fontWeight:kr("H1.fontWeight"),lineHeight:kr("H1.lineHeight"),letterSpacing:kr("H1.letterSpacing"),fontVariant:kr("H1.fontVariant")},H2:{fontFamily:kr("H2.fontFamily"),fontSize:kr("H2.fontSize"),fontWeight:kr("H2.fontWeight"),lineHeight:kr("H2.lineHeight"),letterSpacing:kr("H2.letterSpacing"),fontVariant:kr("H2.fontVariant")},H3:{fontFamily:kr("H3.fontFamily"),fontSize:kr("H3.fontSize"),fontWeight:kr("H3.fontWeight"),lineHeight:kr("H3.lineHeight"),letterSpacing:kr("H3.letterSpacing"),fontVariant:kr("H3.fontVariant")},H4:{fontFamily:kr("H4.fontFamily"),fontSize:kr("H4.fontSize"),fontWeight:kr("H4.fontWeight"),lineHeight:kr("H4.lineHeight"),letterSpacing:kr("H4.letterSpacing"),fontVariant:kr("H4.fontVariant")},H5:{fontFamily:kr("H5.fontFamily"),fontSize:kr("H5.fontSize"),fontWeight:kr("H5.fontWeight"),lineHeight:kr("H5.lineHeight"),letterSpacing:kr("H5.letterSpacing"),fontVariant:kr("H5.fontVariant")},H6:{fontFamily:kr("H6.fontFamily"),fontSize:kr("H6.fontSize"),fontWeight:kr("H6.fontWeight"),lineHeight:kr("H6.lineHeight"),letterSpacing:kr("H6.letterSpacing"),fontVariant:kr("H6.fontVariant")},Body:{fontFamily:kr("Body.fontFamily"),fontSize:kr("Body.fontSize"),fontWeight:kr("Body.fontWeight"),lineHeight:kr("Body.lineHeight"),letterSpacing:kr("Body.letterSpacing"),fontVariant:kr("Body.fontVariant")},BodySmall:{fontFamily:kr("BodySmall.fontFamily"),fontSize:kr("BodySmall.fontSize"),fontWeight:kr("BodySmall.fontWeight"),lineHeight:kr("BodySmall.lineHeight"),letterSpacing:kr("BodySmall.letterSpacing"),fontVariant:kr("BodySmall.fontVariant")},XSmall:{fontFamily:kr("XSmall.fontFamily"),fontSize:kr("XSmall.fontSize"),fontWeight:kr("XSmall.fontWeight"),lineHeight:kr("XSmall.lineHeight"),letterSpacing:kr("XSmall.letterSpacing"),fontVariant:kr("XSmall.fontVariant")}},Er=[xr.OpenSans,xr.PlusJakartaSans],Or=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Cr=(e,t)=>r=>{var n;const i=Hr[e].fontFamily(r),s=Hr[e].fontWeight(r),o=Er.find((e=>Object.values(e).includes(i)));return o?b`
                font-family: ${Or(o,t)||Or(o,s)||i};
                font-weight: normal !important;
            `:b`
            font-family: ${i};
            font-weight: ${null!==(n=zr(t)||s)&&void 0!==n?n:"normal"};
        `},zr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ar=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},jr=Cr,Tr=(e,t,r=!1)=>n=>{const i=Hr[e],s=i.fontSize(n);return b`
            ${Cr(e,t)}
            font-size: ${s}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            font-variant: ${i.fontVariant(n)||"normal"};
            ${b`
                margin-bottom: ${s*(r?1.05:0)}rem;
            `}
        `},Pr=(e=!1,t=!1,r=void 0)=>t?b`
            display: block;
            ${Ar(r)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${Ar(r)}
        `;var Vr;!function(e){e.D1=f.h1`
        ${e=>b`
                ${Tr("D1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>b`
                ${Tr("D2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>b`
                ${Tr("D3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>b`
                ${Tr("D4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>b`
                ${Tr("DBody",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>b`
                ${Tr("H1",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>b`
                ${Tr("H2",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>b`
                ${Tr("H3",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>b`
                ${Tr("H4",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>b`
                ${Tr("H5",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>b`
                ${Tr("H6",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>b`
                ${Tr("Body",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>b`
                ${Tr("BodySmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>b`
                ${Tr("XSmall",e.weight,e.paragraph)}
                color: ${qt.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>_r(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>_r(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vr||(Vr={}));const Rr=f.a`
    ${e=>b`
            ${Tr(e.textStyle,e.weight)}
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
`,Ir=f(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,_r=r=>{var{external:n=!1,children:i}=r,s=H(r,["external","children"]);return t(Rr,Object.assign({},s,{children:[i,n&&e(Ir,{})]}))};var Wr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Wr||(Wr={}));const Nr=f.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ur.Button.Danger.Border:qt.Primary};

                    color: ${e.$buttonIsDanger?ur.Button.Danger.Primary:qt.Primary};
                `;case"light":return b`
                    background-color: ${qt.Neutral[8]};
                    border: 1px solid ${qt.Neutral[5]};

                    color: ${e.$buttonIsDanger?ur.Button.Danger.Primary:qt.Primary};
                `;case"disabled":return b`
                    background-color: ${qt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qt.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ur.Button.Danger.Primary:qt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ur.Button.Danger.Hover:qt.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?ur.Button.Danger.BackgroundColor:qt.Primary};
                    border: 1px solid transparent;

                    ${fr.mobileL} {
                        width: 100%;
                    }

                    color: ${qt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${Tr("H5","semibold")}

                    ${fr.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${Tr("H4","semibold")}

                    ${fr.mobileS} {
                        height: auto;
                    }
                `}
`,Lr=f((({color:r,className:n,size:i=18})=>t(yr,Object.assign({className:n,$size:i,$color:r,"data-testid":"component-loading-spinner"},{children:[e(vr,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),e(Sr,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),e(Fr,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),e(wr,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    ${e=>{let t=e.$buttonIsDanger?ur.Button.Danger.Primary:qt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=qt.Neutral[3](e);break;default:t=qt.Neutral[8](e)}return b`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Mr={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return t(Nr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Lr,Object.assign({},c)),e("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return t(Nr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Lr,Object.assign({},c,{size:16})),e("span",{children:i})]}))}))},Jr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Xr=f.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${fr.mobileL} {
        width: 20rem;
    }

    ${fr.mobileM} {
        width: 18rem;
    }

    ${fr.mobileS} {
        width: 15rem;
    }
`,Yr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Gr=f(Vr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Ur=f.div`
    ${Tr("Body","regular")} // Follow styling of Text.Body
    color: ${qt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${jr("Body","semibold")}
    }

    a {
        ${Tr("Body","semibold")}
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

    ${fr.mobileL} {
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
`,en=f.div`
    flex: 1;
`,tn=f.table`
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

    ${e=>{if(e.$stickyHeader)return b`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,rn=f.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${qr}`:"none"};
        }
    }
`,nn=f.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return b`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return b`
                position: sticky;
                left: 0;
            `}};
`,sn=f.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${qr};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${qr};
    border-radius: 0 0 4px 4px;
    background-color: ${ur.Table.Cell.Selected};
    transition: all 300ms ease;
`,on=f.tr`
    background-color: ${ur.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${qr};
`,an=f.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Zr};
    border-bottom: 1px solid ${qr};
    ${e=>{if(e.$isCheckbox)return b`
                width: 4rem;
            `}};
`,gn=f.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${qt.Neutral[1]};
        margin-left: 0.5rem;
    }
`,ln=f.tr`
    background-color: ${e=>e.$isSelected?b`
                ${ur.Table.Cell.Selected};
            `:e.$alternating?b`
                ${ur.Table.Cell.Primary};
            `:b`
                ${ur.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${qr};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return b`
                    background-color: ${ur.Table.Cell.Hover};
                `}};
    }
`,cn=f.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Zr};
    border-bottom: 1px solid ${qr};
`,dn=f(Vr.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,hn=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,mn=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,un=f((r=>{var{type:n,img:i,title:s,description:o,actionButton:a,additionalProps:g,imageOnly:l,illustrationScheme:c}=r,d=H(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=y(),m=((e,t)=>{switch(t){case"bookingsg":return dr(gr).get(e);case"ccube":return dr(lr).get(e);case"mylegacy":return dr(cr).get(e);default:return dr(ar).get(e)}})(n,c||(h||Zt).resourceScheme),u=d["data-testid"]||"error-display",p=()=>{switch(n){case"maintenance":{const e=g;return g&&e.dateString?m.renderDescription(e):o||void 0}case"inactivity":{const e=g;return g&&e.secondsLeft?m.renderDescription(e):o||void 0}default:return o||void 0}};if(!m)return null;const f=Object.assign(Object.assign(Object.assign(Object.assign({},m),i&&{img:i}),s&&{title:s}),p()&&{description:p()});return t(Jr,Object.assign({},d,{"data-testid":u},{children:[e(Xr,Object.assign({},f.img,{alt:"","data-id":"error-display-image"})),!l&&(f.title||f.description?t(Yr,{children:[f.title&&("string"==typeof f.title?e(Gr,Object.assign({"data-testid":`${u}--title`,"data-id":"error-display-title",weight:"semibold"},{children:f.title})):f.title),f.description&&e(Ur,Object.assign({"data-testid":`${u}--description`,"data-id":"error-display-description"},{children:"string"==typeof f.description?e("p",{children:f.description}):f.description}))]}):null),a&&(()=>{const t=Object.assign({children:"Proceed"},a);return e(Kr,Object.assign({},t))})()]}))}))`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,pn=f.td`
    padding: 4rem 0;
`,fn=v`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,yn=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return b`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${fn};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?qt.Neutral[4](e):e.$unchecked?qt.Accent.Light[2](e):qt.Primary(e)};
    }
`,bn=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,vn=r=>{var{className:n,checked:i,disabled:s,indeterminate:o,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=H(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const m=a();g((()=>{m.current.indeterminate=o}),[o]);const u=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(yn,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:u,$displaySize:d,$disabled:s,$unchecked:!(o||i||s)},{children:[e(bn,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:m,tabIndex:-1,onChange:u,disabled:s},h)),o?e(F,{"data-testid":"indeterminate"}):i?e(w,{"data-testid":"checkmark"}):s?e(x,{"data-testid":"disabled-empty-checkbox"}):e(B,{"data-testid":"empty-checkbox"})]}))};var Sn=function(e,t){return Sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Sn(e,t)};var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Fn.apply(this,arguments)};var wn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var xn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Bn="object"==typeof wn&&wn&&wn.Object===Object&&wn,$n="object"==typeof self&&self&&self.Object===Object&&self,Dn=Bn||$n||Function("return this")(),kn=Dn,Hn=function(){return kn.Date.now()},En=/\s/;var On=function(e){for(var t=e.length;t--&&En.test(e.charAt(t)););return t},Cn=/^\s+/;var zn=function(e){return e?e.slice(0,On(e)+1).replace(Cn,""):e},An=Dn.Symbol,jn=An,Tn=Object.prototype,Pn=Tn.hasOwnProperty,Vn=Tn.toString,Rn=jn?jn.toStringTag:void 0;var In=function(e){var t=Pn.call(e,Rn),r=e[Rn];try{e[Rn]=void 0;var n=!0}catch(e){}var i=Vn.call(e);return n&&(t?e[Rn]=r:delete e[Rn]),i},_n=Object.prototype.toString;var Wn=In,Nn=function(e){return _n.call(e)},Ln=An?An.toStringTag:void 0;var Mn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ln&&Ln in Object(e)?Wn(e):Nn(e)},Jn=function(e){return null!=e&&"object"==typeof e};var Xn=zn,Yn=xn,Gn=function(e){return"symbol"==typeof e||Jn(e)&&"[object Symbol]"==Mn(e)},Un=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,qn=/^0o[0-7]+$/i,Zn=parseInt;var Qn=xn,ei=Hn,ti=function(e){if("number"==typeof e)return e;if(Gn(e))return NaN;if(Yn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Yn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xn(e);var r=Kn.test(e);return r||qn.test(e)?Zn(e.slice(2),r?2:8):Un.test(e)?NaN:+e},ri=Math.max,ni=Math.min;var ii=function(e,t,r){var n,i,s,o,a,g,l=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,s=i;return n=i=void 0,l=t,o=e.apply(s,r)}function u(e){var r=e-g;return void 0===g||r>=t||r<0||d&&e-l>=s}function p(){var e=ei();if(u(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-g);return d?ni(r,s-(e-l)):r}(e))}function f(e){return a=void 0,h&&n?m(e):(n=i=void 0,o)}function y(){var e=ei(),r=u(e);if(n=arguments,i=this,g=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(p,t),c?m(e):o}(g);if(d)return clearTimeout(a),a=setTimeout(p,t),m(g)}return void 0===a&&(a=setTimeout(p,t)),o}return t=ti(t)||0,Qn(r)&&(c=!!r.leading,s=(d="maxWait"in r)?ri(ti(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=g=i=a=void 0},y.flush=function(){return void 0===a?o:f(ei())},y},si=ii,oi=xn;var ai=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oi(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),si(e,t,{leading:n,maxWait:t,trailing:i})},gi=function(e,t,r,n){switch(t){case"debounce":return ii(e,r,n);case"throttle":return ai(e,r,n);default:return e}},li=function(e){return"function"==typeof e},ci=function(){return"undefined"==typeof window},di=function(e){return e instanceof Element||e instanceof HTMLDocument},hi=function(e,t,r,n){return function(i){var s=i.width,o=i.height;t((function(t){return t.width===s&&t.height===o||t.width===s&&!n||t.height===o&&!r?t:(e&&li(e)&&e(s,o),{width:s,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!ci()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(ci())return null;if(t)return document.querySelector(t);if(n&&di(n))return n;if(r.targetRef&&di(r.targetRef.current))return r.targetRef.current;var i=k(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,s=t.handleHeight,o=void 0===s||s,a=t.onResize;if(i||o){var g=hi(a,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!ci()&&g({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return li(t)?"renderProp":li(n)?"childFunction":c(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,s=t.refreshRate,o=void 0===s?1e3:s,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,ci()||(r.resizeHandler=gi(r.createResizeHandler,i,o,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Sn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ci()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,s=t.nodeType,o=void 0===s?"div":s,a=this.state,g={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(g);case"childFunction":return(e=i)(g);case"child":if((e=i).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(g,["targetRef"]);return h(e,l)}return h(e,g);case"childArray":return(e=i).map((function(e){return!!e&&h(e,g)}));default:return n.createElement(o,null)}}}(m);var mi=ci()?g:u;const ui=i=>{var{id:s,headers:o,rows:c,className:d,sortIndicators:h,alternatingRows:m,loadState:u="success",enableMultiSelect:f,selectedIds:y,disabledIds:b,enableActionBar:v,enableSelectAll:S,enableStickyHeader:F,emptyView:w,actionBarContent:x,renderCustomEmptyView:B,onHeaderClick:k,onSelect:E,onSelectAll:O,onClearSelectionClick:C}=i,z=H(i,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const A=a(null),j=a(null),P=a(null),V=a(null),R=a(null),[I,_]=l(!1),[W,N]=l(!1),[L,M]=l(!1),[J,X]=l(!1),[Y,G]=l(!1),{ref:U,inView:K}=function({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:s,triggerOnce:o,skip:a,initialInView:g,fallbackInView:l,onChange:c}={}){var d;const[h,m]=n.useState(null),u=n.useRef(),[p,f]=n.useState({inView:!!g,entry:void 0});u.current=c,n.useEffect((()=>{if(a||!h)return;let n;return n=T(h,((e,t)=>{f({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:s,rootMargin:i,threshold:e,trackVisibility:r,delay:t},l),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,s,i,o,a,r,l,t]);const y=null==(d=p.entry)?void 0:d.target,b=n.useRef();h||!y||o||a||b.current===y||(b.current=y,f({inView:!!g,entry:void 0}));const v=[m,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),q=p((()=>{if(!R.current||!V.current)return;const e=R.current.scrollHeight>R.current.clientHeight;_(e),e?V.current.style.transform="translateY(0)":se()}),[]);g((()=>{q()}),[]),function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,o=e.refreshOptions,g=e.handleWidth,c=void 0===g||g,d=e.handleHeight,h=void 0===d||d,m=e.targetRef,u=e.observerOptions,p=e.onResize,f=a(r),y=a(null),b=null!=m?m:y,v=a(),S=l({width:void 0,height:void 0}),F=S[0],w=S[1];mi((function(){if(!ci()){var e=hi(p,w,c,h);v.current=gi((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!f.current&&!ci()&&e({width:n,height:i}),f.current=!1}))}),n,s,o);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,u),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,o,c,h,p,u,b.current]),Fn({ref:b},F)}({onResize:q});((e,t,r="window",n)=>{const i=a();g((()=>{i.current=t}),[t]),g((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const s=e=>i.current(e);return t.addEventListener(e,s,n),()=>{t.removeEventListener(e,s,n)}}),[e,r])})("scroll",(()=>{requestAnimationFrame((()=>{I?ie():se()})),R.current&&M(R.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),g((()=>{oe()}),[c]);const Z=()=>(null==y?void 0:y.length)===c.length,Q=e=>!!(null==y?void 0:y.includes(e)),ee=e=>!!m&&e%2==1,te=e=>!!(null==b?void 0:b.includes(e)),re=e=>{if(z["data-testid"])return`${z["data-testid"]}-${e}`},ne=()=>o.length+(f?1:0),ie=()=>{if(!R.current)return;const e=R.current.getBoundingClientRect();X(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},se=()=>{if(!(A.current&&j.current&&R.current&&V.current&&P.current))return;const e=j.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=A.current.getBoundingClientRect().height-P.current.clientHeight-32,n=Math.min(t,r);V.current.style.transform=`translateY(-${n}px)`}else V.current.style.transform="translateY(0)"},oe=()=>{A.current&&R.current&&G(A.current.clientHeight+(v?56:0)<R.current.clientHeight)},ae=r=>{const{fieldKey:n,label:i,clickable:s=!1,style:o}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(an,Object.assign({"data-testid":re(`header-${n}`),$clickable:s,onClick:()=>s&&(null==k?void 0:k(n)),style:o,$isCheckbox:!1},{children:t(gn,{children:["string"==typeof i?e(Vr.H4,Object.assign({weight:"bold"},{children:i})):i,ge(n)]})}),n)},ge=t=>{const n=null==h?void 0:h[t];return n?"asc"===n?e($,{"data-testid":re(`header-${t}-arrowup`)}):e(D,{"data-testid":re(`header-${t}-arrowdown`)}):e(r,{})},le=()=>e(an,Object.assign({"data-testid":re("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(hn,{children:S&&e(vn,{displaySize:"small",checked:Z(),indeterminate:y&&0!==y.length&&!Z(),onClick:()=>{O&&O(Z())}})})})),ce=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,s=r.id.toString(),o=r[i],a=`${s}-${i}`;return e(cn,Object.assign({"data-testid":re(`row-${a}`),style:n,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(dn,{children:o}):"function"==typeof o?o(r,{isSelected:Q(s)}):o}),a)},de=t=>e(cn,Object.assign({"data-testid":re(`row-${t}-selection`),$isCheckbox:!0},{children:e(hn,{children:e(vn,{displaySize:"small",checked:Q(t),onClick:()=>{E&&E(t,!Q(t))},disabled:te(t)})})})),he=()=>e(un,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Vr.H3,{children:w.title}):w.title:e(Vr.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(Qr,Object.assign({id:s||"table-wrapper","data-testid":z["data-testid"]||"table",className:d,ref:R,onScroll:()=>{I&&R.current&&N(R.current.scrollTop+R.current.clientHeight>=R.current.scrollHeight)}},{children:[e(en,{children:t(tn,Object.assign({$end:L,$scrollable:I,ref:A,$stickyHeader:F},{children:[e("thead",Object.assign({ref:P},{children:t(on,{children:[f&&le(),o.map(ae)]})})),e(rn,Object.assign({$showLastRowBottomBorder:Y},{children:"success"===u?!c||c.length<1?e("tr",{children:e(pn,Object.assign({colSpan:ne()},{children:B?B():he()}))}):e(r,{children:null==c?void 0:c.map(((e,r)=>t(ln,Object.assign({"data-testid":re(`row-${e.id.toString()}`),$alternating:ee(r),$isSelectable:f,$isSelected:Q(e.id.toString())},{children:[f&&de(e.id.toString()),o.map((t=>ce(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ne()},{children:e(mn,{children:"loading"===u&&e(er,{})})}))})}))]}))}),v&&y&&y.length>0&&(()=>{var r,n,i;return e(nn,Object.assign({ref:V,$fixed:J,$left:null===(n=null===(r=null==A?void 0:A.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==A?void 0:A.current)||void 0===i?void 0:i.clientWidth},{children:t(sn,Object.assign({$float:(I?!W:!K)||J,$scrollable:I},{children:[e(Vr.H5,Object.assign({weight:"semibold"},{children:`${y.length} item${y.length>1?"s":""} selected`})),e(Mr.Small,Object.assign({styleType:"link",onClick:C},{children:"Clear selection"})),x]}))}))})(),e("div",{ref:e=>{j.current=e,U(e)}})]}))};export{ui as D,P as c};
//# sourceMappingURL=index.8498b53c.js.map
