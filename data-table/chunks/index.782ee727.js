import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{lazy as s,Suspense as o,useRef as a,useEffect as g,useState as l,isValidElement as c,createRef as d,cloneElement as h,PureComponent as m,useLayoutEffect as u,useCallback as p}from"react";import f,{useTheme as y,css as b,keyframes as v}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{MinusSquareFillIcon as F,SquareTickFillIcon as w,SquareFillIcon as x,SquareIcon as B,ArrowUpIcon as $,ArrowDownIcon as D}from"@lifesg/react-icons";import{findDOMNode as k}from"react-dom";function H(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function E(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{g(n.next(e))}catch(e){s(e)}}function a(e){try{g(n.throw(e))}catch(e){s(e)}}function g(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}g((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var O=new Map,C=new WeakMap,z=0;function A(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(C.has(e)||(z+=1,C.set(e,z.toString())),C.get(e)):"0"}(e.root):e[t]}`)).toString()}function j(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:s,elements:o}=function(e){const t=A(e);let r=O.get(t);if(!r){const n=new Map;let i;const s=new IntersectionObserver((t=>{t.forEach((t=>{var r;const s=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=n.get(t.target))||r.forEach((e=>{e(s,t)}))}))}),e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:n},O.set(t,r)}return r}(r),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),O.delete(i))}}s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.a854bd9c.js")).LottieSpinner}})))),f.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.e0af86fd.js")).LottieLoadingDots}})))),f.div`
    margin: 0 auto;
`;var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var V=Array.isArray,R="object"==typeof T&&T&&T.Object===Object&&T,I="object"==typeof self&&self&&self.Object===Object&&self,_=R||I||Function("return this")(),W=_.Symbol,N=W,L=Object.prototype,M=L.hasOwnProperty,J=L.toString,X=N?N.toStringTag:void 0;var Y=function(e){var t=M.call(e,X),r=e[X];try{e[X]=void 0;var n=!0}catch(e){}var i=J.call(e);return n&&(t?e[X]=r:delete e[X]),i},G=Object.prototype.toString;var U=Y,K=function(e){return G.call(e)},q=W?W.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?U(e):K(e)};var Q=Z,ee=function(e){return null!=e&&"object"==typeof e};var te=function(e){return"symbol"==typeof e||ee(e)&&"[object Symbol]"==Q(e)},re=V,ne=te,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,se=/^\w*$/;var oe=function(e,t){if(re(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ne(e))||(se.test(e)||!ie.test(e)||null!=t&&e in Object(t))};var ae=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ge=Z,le=ae;var ce,de=function(e){if(!le(e))return!1;var t=ge(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},he=_["__core-js_shared__"],me=(ce=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"";var ue=function(e){return!!me&&me in e},pe=Function.prototype.toString;var fe=de,ye=ue,be=ae,ve=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,Fe=Function.prototype,we=Object.prototype,xe=Fe.toString,Be=we.hasOwnProperty,$e=RegExp("^"+xe.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var De=function(e){return!(!be(e)||ye(e))&&(fe(e)?$e:Se).test(ve(e))},ke=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var r=ke(e,t);return De(r)?r:void 0},Ee=He(Object,"create"),Oe=Ee;var Ce=function(){this.__data__=Oe?Oe(null):{},this.size=0};var ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae=Ee,je=Object.prototype.hasOwnProperty;var Te=function(e){var t=this.__data__;if(Ae){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return je.call(t,e)?t[e]:void 0},Pe=Ee,Ve=Object.prototype.hasOwnProperty;var Re=Ee;var Ie=Ce,_e=ze,We=Te,Ne=function(e){var t=this.__data__;return Pe?void 0!==t[e]:Ve.call(t,e)},Le=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function Me(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Me.prototype.clear=Ie,Me.prototype.delete=_e,Me.prototype.get=We,Me.prototype.has=Ne,Me.prototype.set=Le;var Je=Me;var Xe=function(){this.__data__=[],this.size=0};var Ye=function(e,t){return e===t||e!=e&&t!=t};var Ge=function(e,t){for(var r=e.length;r--;)if(Ye(e[r][0],t))return r;return-1},Ue=Ge,Ke=Array.prototype.splice;var qe=Ge;var Ze=Ge;var Qe=Ge;var et=Xe,tt=function(e){var t=this.__data__,r=Ue(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ke.call(t,r,1),--this.size,!0)},rt=function(e){var t=this.__data__,r=qe(t,e);return r<0?void 0:t[r][1]},nt=function(e){return Ze(this.__data__,e)>-1},it=function(e,t){var r=this.__data__,n=Qe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function st(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}st.prototype.clear=et,st.prototype.delete=tt,st.prototype.get=rt,st.prototype.has=nt,st.prototype.set=it;var ot=st,at=He(_,"Map"),gt=Je,lt=ot,ct=at;var dt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ht=function(e,t){var r=e.__data__;return dt(t)?r["string"==typeof t?"string":"hash"]:r.map},mt=ht;var ut=ht;var pt=ht;var ft=ht;var yt=function(){this.size=0,this.__data__={hash:new gt,map:new(ct||lt),string:new gt}},bt=function(e){var t=mt(this,e).delete(e);return this.size-=t?1:0,t},vt=function(e){return ut(this,e).get(e)},St=function(e){return pt(this,e).has(e)},Ft=function(e,t){var r=ft(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function wt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wt.prototype.clear=yt,wt.prototype.delete=bt,wt.prototype.get=vt,wt.prototype.has=St,wt.prototype.set=Ft;var xt=wt;function Bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var o=e.apply(this,n);return r.cache=s.set(i,o)||s,o};return r.cache=new(Bt.Cache||xt),r}Bt.Cache=xt;var $t=Bt;var Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kt=/\\(\\)?/g,Ht=function(e){var t=$t(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Dt,(function(e,r,n,i){t.push(n?i.replace(kt,"$1"):r||e)})),t}));var Et=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ot=V,Ct=te,zt=W?W.prototype:void 0,At=zt?zt.toString:void 0;var jt=function e(t){if("string"==typeof t)return t;if(Ot(t))return Et(t,e)+"";if(Ct(t))return At?At.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Tt=jt;var Pt=V,Vt=oe,Rt=Ht,It=function(e){return null==e?"":Tt(e)};var _t=te;var Wt=function(e,t){return Pt(e)?e:Vt(e,t)?[e]:Rt(It(e))},Nt=function(e){if("string"==typeof e||_t(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Lt=function(e,t){for(var r=0,n=(t=Wt(t,e)).length;null!=e&&r<n;)e=e[Nt(t[r++])];return r&&r==n?e:void 0};var Mt=P((function(e,t,r){var n=null==e?void 0:Lt(e,t);return void 0===n?r:n}));const Jt=(e,t,r)=>t?Mt(r,t)||Mt(e,t):r||e,Xt=(e,t)=>{const r=t||e.defaultValue;return Mt(e.collections,r)};var Yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yt||(Yt={}));const Gt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ut=e=>t=>{const r=t.theme,n=Xt(Gt,r[Yt.colorScheme]);return r.options&&r.options.color?Jt(n,e,r.options.color):Jt(n,e)},Kt={Brand:{1:Ut("Brand.1"),2:Ut("Brand.2"),3:Ut("Brand.3"),4:Ut("Brand.4"),5:Ut("Brand.5"),6:Ut("Brand.6")},Primary:Ut("Primary"),PrimaryDark:Ut("PrimaryDark"),Secondary:Ut("Secondary"),Accent:{Light:{1:Ut("Accent.Light.1"),2:Ut("Accent.Light.2"),3:Ut("Accent.Light.3"),4:Ut("Accent.Light.4"),5:Ut("Accent.Light.5"),6:Ut("Accent.Light.6")},Dark:{1:Ut("Accent.Dark.1"),2:Ut("Accent.Dark.2"),3:Ut("Accent.Dark.3")}},Neutral:{1:Ut("Neutral.1"),2:Ut("Neutral.2"),3:Ut("Neutral.3"),4:Ut("Neutral.4"),5:Ut("Neutral.5"),6:Ut("Neutral.6"),7:Ut("Neutral.7"),8:Ut("Neutral.8")},Validation:{Green:{Text:Ut("Validation.Green.Text"),Icon:Ut("Validation.Green.Icon"),Border:Ut("Validation.Green.Border"),Background:Ut("Validation.Green.Background")},Orange:{Text:Ut("Validation.Orange.Text"),Icon:Ut("Validation.Orange.Icon"),Border:Ut("Validation.Orange.Border"),Background:Ut("Validation.Orange.Background"),Badge:Ut("Validation.Orange.Badge")},Red:{Text:Ut("Validation.Red.Text"),Icon:Ut("Validation.Red.Icon"),Border:Ut("Validation.Red.Border"),Background:Ut("Validation.Red.Background")},Blue:{Text:Ut("Validation.Blue.Text"),Icon:Ut("Validation.Blue.Icon"),Border:Ut("Validation.Blue.Border"),Background:Ut("Validation.Blue.Background")}},Shadow:{Accent:Ut("Shadow.Accent"),Red:Ut("Shadow.Red"),Elevation:Ut("Shadow.Elevation")}},qt={[Yt.colorScheme]:"base",[Yt.textStyleScheme]:"base",[Yt.designTokenScheme]:"base",[Yt.resourceScheme]:"base"};Yt.colorScheme,Yt.textStyleScheme,Yt.designTokenScheme,Yt.resourceScheme,Yt.colorScheme,Yt.textStyleScheme,Yt.designTokenScheme,Yt.resourceScheme,Yt.colorScheme,Yt.textStyleScheme,Yt.designTokenScheme,Yt.resourceScheme,Yt.colorScheme,Yt.textStyleScheme,Yt.designTokenScheme,Yt.resourceScheme,Yt.colorScheme,Yt.textStyleScheme,Yt.designTokenScheme,Yt.resourceScheme;const Zt=s((()=>E(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.3ac6ed25.js")).LottieLoadingDotsSpinner}})))),Qt=t=>{var{color:r}=t,n=H(t,["color"]);const i=y(),s=r||Kt.Primary({theme:i||qt});return e(tr,Object.assign({},n,{children:e(o,Object.assign({fallback:e(er,{})},{children:e(Zt,{color:s})}))}))},er=()=>e("div",{style:{height:"200px",width:"200px"}}),tr=f.div`
    margin: 0 auto;
`,rr=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,s=Math.floor(n.secondsLeft/60),o=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",s," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}},nr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var ir;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:r,lg:n,width:i,height:s}=e;return{srcSet:`${t} 400w, ${r} 800w, ${n} 1200w`,src:n,sizes:`(max-width: ${nr.mobileL}px) 400px, (max-width: ${nr.tablet}px) 800px, 1200px`,width:i,height:s}}}(ir||(ir={}));const{imgAttributeHelper:sr}=ir,or={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},ar={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},gr=Object.assign(Object.assign({},or),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),lr=Object.assign(Object.assign({},or),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),cr=e=>new Map([["400",{img:sr(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:sr(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:sr(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:sr(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:sr(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:sr(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:sr(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:sr(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:sr(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:sr(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:sr(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:sr(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:sr(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:rr("inactivity")}],["maintenance",{img:sr(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:rr("maintenance")}],["no-item-found",{img:sr(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:sr(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:sr(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:sr(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:sr(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:sr(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),dr={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},hr=e=>t=>{var r;const n=t.theme,i=Xt(dr,n[Yt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Jt(i,e,n.options.designToken):Jt(i,e)},mr={InputBoxShadow:hr("InputBoxShadow"),InputErrorBoxShadow:hr("InputErrorBoxShadow"),ElevationBoxShadow:hr("ElevationBoxShadow"),Table:{Header:hr("Table.Header"),Cell:{Primary:hr("Table.Cell.Primary"),Secondary:hr("Table.Cell.Secondary"),Selected:hr("Table.Cell.Selected"),Hover:hr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:hr("Button.Danger.BackgroundColor"),Hover:hr("Button.Danger.Hover"),Primary:hr("Button.Danger.Primary"),Border:hr("Button.Danger.Border")}}},ur=e=>Object.keys(nr).reduce(((t,r)=>{const n=nr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),pr=ur("max-width"),fr=(ur("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),yr=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,br=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${yr} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vr=f(br)`
    animation-delay: -0.45s;
`,Sr=f(br)`
    animation-delay: -0.3s;
`,Fr=f(br)`
    animation-delay: -0.15s;
`,wr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},xr={D1:{fontFamily:wr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:wr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:wr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:wr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:wr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:wr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:wr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:wr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Br={D1:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:wr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:wr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:wr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:wr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:wr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},$r={collections:{base:xr,oneservice:{D1:{fontFamily:wr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:wr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:wr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:wr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:wr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:wr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:wr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:wr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:wr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:wr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:wr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:wr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Br},defaultValue:"base"},Dr=e=>t=>{const r=t.theme,n=Xt($r,r[Yt.textStyleScheme]);return r.options&&r.options.textStyle?Jt(n,e,r.options.textStyle):Jt(n,e)},kr={D1:{fontFamily:Dr("D1.fontFamily"),fontSize:Dr("D1.fontSize"),fontWeight:Dr("D1.fontWeight"),lineHeight:Dr("D1.lineHeight"),letterSpacing:Dr("D1.letterSpacing"),fontVariant:Dr("D1.fontVariant")},D2:{fontFamily:Dr("D2.fontFamily"),fontSize:Dr("D2.fontSize"),fontWeight:Dr("D2.fontWeight"),lineHeight:Dr("D2.lineHeight"),letterSpacing:Dr("D2.letterSpacing"),fontVariant:Dr("D2.fontVariant")},D3:{fontFamily:Dr("D3.fontFamily"),fontSize:Dr("D3.fontSize"),fontWeight:Dr("D3.fontWeight"),lineHeight:Dr("D3.lineHeight"),letterSpacing:Dr("D3.letterSpacing"),fontVariant:Dr("D3.fontVariant")},D4:{fontFamily:Dr("D4.fontFamily"),fontSize:Dr("D4.fontSize"),fontWeight:Dr("D4.fontWeight"),lineHeight:Dr("D4.lineHeight"),letterSpacing:Dr("D4.letterSpacing"),fontVariant:Dr("D4.fontVariant")},DBody:{fontFamily:Dr("DBody.fontFamily"),fontSize:Dr("DBody.fontSize"),fontWeight:Dr("DBody.fontWeight"),lineHeight:Dr("DBody.lineHeight"),letterSpacing:Dr("DBody.letterSpacing"),fontVariant:Dr("DBody.fontVariant")},H1:{fontFamily:Dr("H1.fontFamily"),fontSize:Dr("H1.fontSize"),fontWeight:Dr("H1.fontWeight"),lineHeight:Dr("H1.lineHeight"),letterSpacing:Dr("H1.letterSpacing"),fontVariant:Dr("H1.fontVariant")},H2:{fontFamily:Dr("H2.fontFamily"),fontSize:Dr("H2.fontSize"),fontWeight:Dr("H2.fontWeight"),lineHeight:Dr("H2.lineHeight"),letterSpacing:Dr("H2.letterSpacing"),fontVariant:Dr("H2.fontVariant")},H3:{fontFamily:Dr("H3.fontFamily"),fontSize:Dr("H3.fontSize"),fontWeight:Dr("H3.fontWeight"),lineHeight:Dr("H3.lineHeight"),letterSpacing:Dr("H3.letterSpacing"),fontVariant:Dr("H3.fontVariant")},H4:{fontFamily:Dr("H4.fontFamily"),fontSize:Dr("H4.fontSize"),fontWeight:Dr("H4.fontWeight"),lineHeight:Dr("H4.lineHeight"),letterSpacing:Dr("H4.letterSpacing"),fontVariant:Dr("H4.fontVariant")},H5:{fontFamily:Dr("H5.fontFamily"),fontSize:Dr("H5.fontSize"),fontWeight:Dr("H5.fontWeight"),lineHeight:Dr("H5.lineHeight"),letterSpacing:Dr("H5.letterSpacing"),fontVariant:Dr("H5.fontVariant")},H6:{fontFamily:Dr("H6.fontFamily"),fontSize:Dr("H6.fontSize"),fontWeight:Dr("H6.fontWeight"),lineHeight:Dr("H6.lineHeight"),letterSpacing:Dr("H6.letterSpacing"),fontVariant:Dr("H6.fontVariant")},Body:{fontFamily:Dr("Body.fontFamily"),fontSize:Dr("Body.fontSize"),fontWeight:Dr("Body.fontWeight"),lineHeight:Dr("Body.lineHeight"),letterSpacing:Dr("Body.letterSpacing"),fontVariant:Dr("Body.fontVariant")},BodySmall:{fontFamily:Dr("BodySmall.fontFamily"),fontSize:Dr("BodySmall.fontSize"),fontWeight:Dr("BodySmall.fontWeight"),lineHeight:Dr("BodySmall.lineHeight"),letterSpacing:Dr("BodySmall.letterSpacing"),fontVariant:Dr("BodySmall.fontVariant")},XSmall:{fontFamily:Dr("XSmall.fontFamily"),fontSize:Dr("XSmall.fontSize"),fontWeight:Dr("XSmall.fontWeight"),lineHeight:Dr("XSmall.lineHeight"),letterSpacing:Dr("XSmall.letterSpacing"),fontVariant:Dr("XSmall.fontVariant")}},Hr=[wr.OpenSans,wr.PlusJakartaSans],Er=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Or=(e,t)=>r=>{var n;const i=kr[e].fontFamily(r),s=kr[e].fontWeight(r),o=Hr.find((e=>Object.values(e).includes(i)));return o?b`
                font-family: ${Er(o,t)||Er(o,s)||i};
                font-weight: normal !important;
            `:b`
            font-family: ${i};
            font-weight: ${null!==(n=Cr(t)||s)&&void 0!==n?n:"normal"};
        `},Cr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zr=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ar=Or,jr=(e,t,r=!1)=>n=>{const i=kr[e],s=i.fontSize(n);return b`
            ${Or(e,t)}
            font-size: ${s}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            font-variant: ${i.fontVariant(n)||"normal"};
            ${b`
                margin-bottom: ${s*(r?1.05:0)}rem;
            `}
        `},Tr=(e=!1,t=!1,r=void 0)=>t?b`
            display: block;
            ${zr(r)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${zr(r)}
        `;var Pr;!function(e){e.D1=f.h1`
        ${e=>b`
                ${jr("D1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>b`
                ${jr("D2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>b`
                ${jr("D3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>b`
                ${jr("D4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>b`
                ${jr("DBody",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>b`
                ${jr("H1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>b`
                ${jr("H2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>b`
                ${jr("H3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>b`
                ${jr("H4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>b`
                ${jr("H5",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>b`
                ${jr("H6",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>b`
                ${jr("Body",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>b`
                ${jr("BodySmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>b`
                ${jr("XSmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${Tr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Pr||(Pr={}));const Vr=f.a`
    ${e=>b`
            ${jr(e.textStyle,e.weight)}
            color: ${Kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Kt.Secondary};

                svg {
                    color: ${Kt.Secondary};
                }
            }
        `}
`,Rr=f(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ir=r=>{var{external:n=!1,children:i}=r,s=H(r,["external","children"]);return t(Vr,Object.assign({},s,{children:[i,n&&e(Rr,{})]}))};var _r;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(_r||(_r={}));const Wr=f.button`
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
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?mr.Button.Danger.Border:Kt.Primary};

                    color: ${e.$buttonIsDanger?mr.Button.Danger.Primary:Kt.Primary};
                `;case"light":return b`
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid ${Kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?mr.Button.Danger.Primary:Kt.Primary};
                `;case"disabled":return b`
                    background-color: ${Kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Kt.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?mr.Button.Danger.Primary:Kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?mr.Button.Danger.Hover:Kt.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?mr.Button.Danger.BackgroundColor:Kt.Primary};
                    border: 1px solid transparent;

                    ${pr.mobileL} {
                        width: 100%;
                    }

                    color: ${Kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${jr("H5","semibold")}

                    ${pr.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${jr("H4","semibold")}

                    ${pr.mobileS} {
                        height: auto;
                    }
                `}
`,Nr=f((({color:r,className:n,size:i=18})=>t(fr,Object.assign({className:n,$size:i,$color:r,"data-testid":"component-loading-spinner"},{children:[e(br,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),e(vr,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),e(Sr,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),e(Fr,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    ${e=>{let t=e.$buttonIsDanger?mr.Button.Danger.Primary:Kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Kt.Neutral[3](e);break;default:t=Kt.Neutral[8](e)}return b`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Lr={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:g};return t(Wr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Nr,Object.assign({},c)),e("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:g=!1}=r,l=H(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:g};return t(Wr,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:s},c,l,{children:[o&&e(Nr,Object.assign({},c,{size:16})),e("span",{children:i})]}))}))},Mr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Jr=f.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${pr.mobileL} {
        width: 20rem;
    }

    ${pr.mobileM} {
        width: 18rem;
    }

    ${pr.mobileS} {
        width: 15rem;
    }
`,Xr=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Yr=f(Pr.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Gr=f.div`
    ${jr("Body","regular")} // Follow styling of Text.Body
    color: ${Kt.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Ar("Body","semibold")}
    }

    a {
        ${jr("Body","semibold")}
        color: ${Kt.Primary};

        :hover,
        :active,
        :focus {
            color: ${Kt.Secondary};
        }
    }
`,Ur=f(Lr.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${pr.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Kr=Kt.Neutral[5],qr=Kt.Neutral[1],Zr=f.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${Kr};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Qr=f.div`
    flex: 1;
`,en=f.table`
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
`,tn=f.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${Kr}`:"none"};
        }
    }
`,rn=f.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return b`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return b`
                position: sticky;
                left: 0;
            `}};
`,nn=f.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${Kr};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${Kr};
    border-radius: 0 0 4px 4px;
    background-color: ${mr.Table.Cell.Selected};
    transition: all 300ms ease;
`,sn=f.tr`
    background-color: ${mr.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${Kr};
`,on=f.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${qr};
    border-bottom: 1px solid ${Kr};
    ${e=>{if(e.$isCheckbox)return b`
                width: 4rem;
            `}};
`,an=f.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Kt.Neutral[1]};
        margin-left: 0.5rem;
    }
`,gn=f.tr`
    background-color: ${e=>e.$isSelected?b`
                ${mr.Table.Cell.Selected};
            `:e.$alternating?b`
                ${mr.Table.Cell.Primary};
            `:b`
                ${mr.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${Kr};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return b`
                    background-color: ${mr.Table.Cell.Hover};
                `}};
    }
`,ln=f.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${qr};
    border-bottom: 1px solid ${Kr};
`,cn=f(Pr.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,dn=f.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,hn=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,mn=f((r=>{var{type:n,img:i,title:s,description:o,actionButton:a,additionalProps:g,imageOnly:l,illustrationScheme:c}=r,d=H(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=y(),m=((e,t)=>{switch(t){case"bookingsg":return cr(ar).get(e);case"ccube":return cr(gr).get(e);case"mylegacy":return cr(lr).get(e);default:return cr(or).get(e)}})(n,c||(h||qt).resourceScheme),u=d["data-testid"]||"error-display",p=()=>{switch(n){case"maintenance":{const e=g;return g&&e.dateString?m.renderDescription(e):o||void 0}case"inactivity":{const e=g;return g&&e.secondsLeft?m.renderDescription(e):o||void 0}default:return o||void 0}};if(!m)return null;const f=Object.assign(Object.assign(Object.assign(Object.assign({},m),i&&{img:i}),s&&{title:s}),p()&&{description:p()});return t(Mr,Object.assign({},d,{"data-testid":u},{children:[e(Jr,Object.assign({},f.img,{alt:"","data-id":"error-display-image"})),!l&&(f.title||f.description?t(Xr,{children:[f.title&&("string"==typeof f.title?e(Yr,Object.assign({"data-testid":`${u}--title`,"data-id":"error-display-title",weight:"semibold"},{children:f.title})):f.title),f.description&&e(Gr,Object.assign({"data-testid":`${u}--description`,"data-id":"error-display-description"},{children:"string"==typeof f.description?e("p",{children:f.description}):f.description}))]}):null),a&&(()=>{const t=Object.assign({children:"Proceed"},a);return e(Ur,Object.assign({},t))})()]}))}))`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,un=f.td`
    padding: 4rem 0;
`,pn=v`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,fn=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return b`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${pn};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Kt.Neutral[4](e):e.$unchecked?Kt.Accent.Light[2](e):Kt.Primary(e)};
    }
`,yn=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,bn=r=>{var{className:n,checked:i,disabled:s,indeterminate:o,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=H(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const m=a();g((()=>{m.current.indeterminate=o}),[o]);const u=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(fn,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:u,$displaySize:d,$disabled:s,$unchecked:!(o||i||s)},{children:[e(yn,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:m,tabIndex:-1,onChange:u,disabled:s},h)),o?e(F,{"data-testid":"indeterminate"}):i?e(w,{"data-testid":"checkmark"}):s?e(x,{"data-testid":"disabled-empty-checkbox"}):e(B,{"data-testid":"empty-checkbox"})]}))};var vn=function(e,t){return vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},vn(e,t)};var Sn=function(){return Sn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Sn.apply(this,arguments)};var Fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var wn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xn="object"==typeof Fn&&Fn&&Fn.Object===Object&&Fn,Bn="object"==typeof self&&self&&self.Object===Object&&self,$n=xn||Bn||Function("return this")(),Dn=$n,kn=function(){return Dn.Date.now()},Hn=/\s/;var En=function(e){for(var t=e.length;t--&&Hn.test(e.charAt(t)););return t},On=/^\s+/;var Cn=function(e){return e?e.slice(0,En(e)+1).replace(On,""):e},zn=$n.Symbol,An=zn,jn=Object.prototype,Tn=jn.hasOwnProperty,Pn=jn.toString,Vn=An?An.toStringTag:void 0;var Rn=function(e){var t=Tn.call(e,Vn),r=e[Vn];try{e[Vn]=void 0;var n=!0}catch(e){}var i=Pn.call(e);return n&&(t?e[Vn]=r:delete e[Vn]),i},In=Object.prototype.toString;var _n=Rn,Wn=function(e){return In.call(e)},Nn=zn?zn.toStringTag:void 0;var Ln=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Nn&&Nn in Object(e)?_n(e):Wn(e)},Mn=function(e){return null!=e&&"object"==typeof e};var Jn=Cn,Xn=wn,Yn=function(e){return"symbol"==typeof e||Mn(e)&&"[object Symbol]"==Ln(e)},Gn=/^[-+]0x[0-9a-f]+$/i,Un=/^0b[01]+$/i,Kn=/^0o[0-7]+$/i,qn=parseInt;var Zn=wn,Qn=kn,ei=function(e){if("number"==typeof e)return e;if(Yn(e))return NaN;if(Xn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Xn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jn(e);var r=Un.test(e);return r||Kn.test(e)?qn(e.slice(2),r?2:8):Gn.test(e)?NaN:+e},ti=Math.max,ri=Math.min;var ni=function(e,t,r){var n,i,s,o,a,g,l=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,s=i;return n=i=void 0,l=t,o=e.apply(s,r)}function u(e){var r=e-g;return void 0===g||r>=t||r<0||d&&e-l>=s}function p(){var e=Qn();if(u(e))return f(e);a=setTimeout(p,function(e){var r=t-(e-g);return d?ri(r,s-(e-l)):r}(e))}function f(e){return a=void 0,h&&n?m(e):(n=i=void 0,o)}function y(){var e=Qn(),r=u(e);if(n=arguments,i=this,g=e,r){if(void 0===a)return function(e){return l=e,a=setTimeout(p,t),c?m(e):o}(g);if(d)return clearTimeout(a),a=setTimeout(p,t),m(g)}return void 0===a&&(a=setTimeout(p,t)),o}return t=ei(t)||0,Zn(r)&&(c=!!r.leading,s=(d="maxWait"in r)?ti(ei(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=g=i=a=void 0},y.flush=function(){return void 0===a?o:f(Qn())},y},ii=ni,si=wn;var oi=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return si(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ii(e,t,{leading:n,maxWait:t,trailing:i})},ai=function(e,t,r,n){switch(t){case"debounce":return ni(e,r,n);case"throttle":return oi(e,r,n);default:return e}},gi=function(e){return"function"==typeof e},li=function(){return"undefined"==typeof window},ci=function(e){return e instanceof Element||e instanceof HTMLDocument},di=function(e,t,r,n){return function(i){var s=i.width,o=i.height;t((function(t){return t.width===s&&t.height===o||t.width===s&&!n||t.height===o&&!r?t:(e&&gi(e)&&e(s,o),{width:s,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!li()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(li())return null;if(t)return document.querySelector(t);if(n&&ci(n))return n;if(r.targetRef&&ci(r.targetRef.current))return r.targetRef.current;var i=k(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,s=t.handleHeight,o=void 0===s||s,a=t.onResize;if(i||o){var g=di(a,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!li()&&g({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return gi(t)?"renderProp":gi(n)?"childFunction":c(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,s=t.refreshRate,o=void 0===s?1e3:s,a=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,li()||(r.resizeHandler=ai(r.createResizeHandler,i,o,a),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}vn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){li()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,s=t.nodeType,o=void 0===s?"div":s,a=this.state,g={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(g);case"childFunction":return(e=i)(g);case"child":if((e=i).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(g,["targetRef"]);return h(e,l)}return h(e,g);case"childArray":return(e=i).map((function(e){return!!e&&h(e,g)}));default:return n.createElement(o,null)}}}(m);var hi=li()?g:u;const mi=i=>{var{id:s,headers:o,rows:c,className:d,sortIndicators:h,alternatingRows:m,loadState:u="success",enableMultiSelect:f,selectedIds:y,disabledIds:b,enableActionBar:v,enableSelectAll:S,enableStickyHeader:F,emptyView:w,actionBarContent:x,renderCustomEmptyView:B,onHeaderClick:k,onSelect:E,onSelectAll:O,onClearSelectionClick:C}=i,z=H(i,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const A=a(null),T=a(null),P=a(null),V=a(null),R=a(null),[I,_]=l(!1),[W,N]=l(!1),[L,M]=l(!1),[J,X]=l(!1),[Y,G]=l(!1),{ref:U,inView:K}=function({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:s,triggerOnce:o,skip:a,initialInView:g,fallbackInView:l,onChange:c}={}){var d;const[h,m]=n.useState(null),u=n.useRef(c),[p,f]=n.useState({inView:!!g,entry:void 0});u.current=c,n.useEffect((()=>{if(a||!h)return;let n;return n=j(h,((e,t)=>{f({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&o&&n&&(n(),n=void 0)}),{root:s,rootMargin:i,threshold:e,trackVisibility:r,delay:t},l),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,s,i,o,a,r,l,t]);const y=null==(d=p.entry)?void 0:d.target,b=n.useRef(void 0);h||!y||o||a||b.current===y||(b.current=y,f({inView:!!g,entry:void 0}));const v=[m,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),q=p((()=>{if(!R.current||!V.current)return;const e=R.current.scrollHeight>R.current.clientHeight;_(e),e?V.current.style.transform="translateY(0)":se()}),[]);g((()=>{q()}),[]),function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,o=e.refreshOptions,g=e.handleWidth,c=void 0===g||g,d=e.handleHeight,h=void 0===d||d,m=e.targetRef,u=e.observerOptions,p=e.onResize,f=a(r),y=a(null),b=null!=m?m:y,v=a(),S=l({width:void 0,height:void 0}),F=S[0],w=S[1];hi((function(){if(!li()){var e=di(p,w,c,h);v.current=ai((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!f.current&&!li()&&e({width:n,height:i}),f.current=!1}))}),n,s,o);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,u),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,o,c,h,p,u,b.current]),Sn({ref:b},F)}({onResize:q});((e,t,r="window",n)=>{const i=a();g((()=>{i.current=t}),[t]),g((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const s=e=>i.current(e);return t.addEventListener(e,s,n),()=>{t.removeEventListener(e,s,n)}}),[e,r])})("scroll",(()=>{requestAnimationFrame((()=>{I?ie():se()})),R.current&&M(R.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),g((()=>{oe()}),[c]);const Z=()=>(null==y?void 0:y.length)===c.length,Q=e=>!!(null==y?void 0:y.includes(e)),ee=e=>!!m&&e%2==1,te=e=>!!(null==b?void 0:b.includes(e)),re=e=>{if(z["data-testid"])return`${z["data-testid"]}-${e}`},ne=()=>o.length+(f?1:0),ie=()=>{if(!R.current)return;const e=R.current.getBoundingClientRect();X(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},se=()=>{if(!(A.current&&T.current&&R.current&&V.current&&P.current))return;const e=T.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=A.current.getBoundingClientRect().height-P.current.clientHeight-32,n=Math.min(t,r);V.current.style.transform=`translateY(-${n}px)`}else V.current.style.transform="translateY(0)"},oe=()=>{A.current&&R.current&&G(A.current.clientHeight+(v?56:0)<R.current.clientHeight)},ae=r=>{const{fieldKey:n,label:i,clickable:s=!1,style:o}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(on,Object.assign({"data-testid":re(`header-${n}`),$clickable:s,onClick:()=>s&&(null==k?void 0:k(n)),style:o,$isCheckbox:!1},{children:t(an,{children:["string"==typeof i?e(Pr.H4,Object.assign({weight:"bold"},{children:i})):i,ge(n)]})}),n)},ge=t=>{const n=null==h?void 0:h[t];return n?"asc"===n?e($,{"data-testid":re(`header-${t}-arrowup`)}):e(D,{"data-testid":re(`header-${t}-arrowdown`)}):e(r,{})},le=()=>e(on,Object.assign({"data-testid":re("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(dn,{children:S&&e(bn,{displaySize:"small",checked:Z(),indeterminate:y&&0!==y.length&&!Z(),onClick:()=>{O&&O(Z())}})})})),ce=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,s=r.id.toString(),o=r[i],a=`${s}-${i}`;return e(ln,Object.assign({"data-testid":re(`row-${a}`),style:n,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(cn,{children:o}):"function"==typeof o?o(r,{isSelected:Q(s)}):o}),a)},de=t=>e(ln,Object.assign({"data-testid":re(`row-${t}-selection`),$isCheckbox:!0},{children:e(dn,{children:e(bn,{displaySize:"small",checked:Q(t),onClick:()=>{E&&E(t,!Q(t))},disabled:te(t)})})})),he=()=>e(mn,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Pr.H3,{children:w.title}):w.title:e(Pr.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(Zr,Object.assign({id:s||"table-wrapper","data-testid":z["data-testid"]||"table",className:d,ref:R,onScroll:()=>{I&&R.current&&N(R.current.scrollTop+R.current.clientHeight>=R.current.scrollHeight)}},{children:[e(Qr,{children:t(en,Object.assign({$end:L,$scrollable:I,ref:A,$stickyHeader:F},{children:[e("thead",Object.assign({ref:P},{children:t(sn,{children:[f&&le(),o.map(ae)]})})),e(tn,Object.assign({$showLastRowBottomBorder:Y},{children:"success"===u?!c||c.length<1?e("tr",{children:e(un,Object.assign({colSpan:ne()},{children:B?B():he()}))}):e(r,{children:null==c?void 0:c.map(((e,r)=>t(gn,Object.assign({"data-testid":re(`row-${e.id.toString()}`),$alternating:ee(r),$isSelectable:f,$isSelected:Q(e.id.toString())},{children:[f&&de(e.id.toString()),o.map((t=>ce(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ne()},{children:e(hn,{children:"loading"===u&&e(Qt,{})})}))})}))]}))}),v&&y&&y.length>0&&(()=>{var r,n,i;return e(rn,Object.assign({ref:V,$fixed:J,$left:null===(n=null===(r=null==A?void 0:A.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==A?void 0:A.current)||void 0===i?void 0:i.clientWidth},{children:t(nn,Object.assign({$float:(I?!W:!K)||J,$scrollable:I},{children:[e(Pr.H5,Object.assign({weight:"semibold"},{children:`${y.length} item${y.length>1?"s":""} selected`})),e(Lr.Small,Object.assign({styleType:"link",onClick:C},{children:"Clear selection"})),x]}))}))})(),e("div",{ref:e=>{T.current=e,U(e)}})]}))};export{mi as D,T as c};
//# sourceMappingURL=index.782ee727.js.map
