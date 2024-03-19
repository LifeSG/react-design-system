import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{useState as i,useRef as o,useEffect as a,useLayoutEffect as s,forwardRef as l,useCallback as c,useContext as u,useMemo as d,createContext as h,isValidElement as p,createRef as f,cloneElement as g,PureComponent as m}from"react";import y,{css as v,keyframes as b}from"styled-components";import{unstable_batchedUpdates as F,findDOMNode as w}from"react-dom";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{ChevronUpIcon as B}from"@lifesg/react-icons/chevron-up";function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k=Array.isArray,D="object"==typeof x&&x&&x.Object===Object&&x,E="object"==typeof self&&self&&self.Object===Object&&self,O=D||E||Function("return this")(),I=O.Symbol,A=I,C=Object.prototype,P=C.hasOwnProperty,H=C.toString,j=A?A.toStringTag:void 0;var z=function(e){var t=P.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch(e){}var i=H.call(e);return r&&(t?e[j]=n:delete e[j]),i},T=Object.prototype.toString;var M=z,R=function(e){return T.call(e)},V=I?I.toStringTag:void 0;var N=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":V&&V in Object(e)?M(e):R(e)};var L=N,W=function(e){return null!=e&&"object"==typeof e};var q=function(e){return"symbol"==typeof e||W(e)&&"[object Symbol]"==L(e)},Q=k,U=q,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/;var Z=function(e,t){if(Q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!U(e))||(X.test(e)||!G.test(e)||null!=t&&e in Object(t))};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},J=N,K=Y;var ee,te=function(e){if(!K(e))return!1;var t=J(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ne=O["__core-js_shared__"],re=(ee=/[^.]+$/.exec(ne&&ne.keys&&ne.keys.IE_PROTO||""))?"Symbol(src)_1."+ee:"";var ie=function(e){return!!re&&re in e},oe=Function.prototype.toString;var ae=te,se=ie,le=Y,ce=function(e){if(null!=e){try{return oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ue=/^\[object .+?Constructor\]$/,de=Function.prototype,he=Object.prototype,pe=de.toString,fe=he.hasOwnProperty,ge=RegExp("^"+pe.call(fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var me=function(e){return!(!le(e)||se(e))&&(ae(e)?ge:ue).test(ce(e))},ye=function(e,t){return null==e?void 0:e[t]};var ve=function(e,t){var n=ye(e,t);return me(n)?n:void 0},be=ve(Object,"create"),Fe=be;var we=function(){this.__data__=Fe?Fe(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Be=be,_e=Object.prototype.hasOwnProperty;var xe=function(e){var t=this.__data__;if(Be){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return _e.call(t,e)?t[e]:void 0},$e=be,ke=Object.prototype.hasOwnProperty;var De=be;var Ee=we,Oe=Se,Ie=xe,Ae=function(e){var t=this.__data__;return $e?void 0!==t[e]:ke.call(t,e)},Ce=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=De&&void 0===t?"__lodash_hash_undefined__":t,this};function Pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pe.prototype.clear=Ee,Pe.prototype.delete=Oe,Pe.prototype.get=Ie,Pe.prototype.has=Ae,Pe.prototype.set=Ce;var He=Pe;var je=function(){this.__data__=[],this.size=0};var ze=function(e,t){return e===t||e!=e&&t!=t};var Te=function(e,t){for(var n=e.length;n--;)if(ze(e[n][0],t))return n;return-1},Me=Te,Re=Array.prototype.splice;var Ve=Te;var Ne=Te;var Le=Te;var We=je,qe=function(e){var t=this.__data__,n=Me(t,e);return!(n<0)&&(n==t.length-1?t.pop():Re.call(t,n,1),--this.size,!0)},Qe=function(e){var t=this.__data__,n=Ve(t,e);return n<0?void 0:t[n][1]},Ue=function(e){return Ne(this.__data__,e)>-1},Ge=function(e,t){var n=this.__data__,r=Le(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=We,Xe.prototype.delete=qe,Xe.prototype.get=Qe,Xe.prototype.has=Ue,Xe.prototype.set=Ge;var Ze=Xe,Ye=ve(O,"Map"),Je=He,Ke=Ze,et=Ye;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var it=nt;var ot=nt;var at=nt;var st=function(){this.size=0,this.__data__={hash:new Je,map:new(et||Ke),string:new Je}},lt=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return it(this,e).get(e)},ut=function(e){return ot(this,e).has(e)},dt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=ct,ht.prototype.has=ut,ht.prototype.set=dt;var pt=ht;function ft(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ft.Cache||pt),n}ft.Cache=pt;var gt=ft;var mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,vt=function(e){var t=gt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mt,(function(e,n,r,i){t.push(r?i.replace(yt,"$1"):n||e)})),t}));var bt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ft=k,wt=q,St=I?I.prototype:void 0,Bt=St?St.toString:void 0;var _t=function e(t){if("string"==typeof t)return t;if(Ft(t))return bt(t,e)+"";if(wt(t))return Bt?Bt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},xt=_t;var $t=k,kt=Z,Dt=vt,Et=function(e){return null==e?"":xt(e)};var Ot=q;var It=function(e,t){return $t(e)?e:kt(e,t)?[e]:Dt(Et(e))},At=function(e){if("string"==typeof e||Ot(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ct=function(e,t){for(var n=0,r=(t=It(t,e)).length;null!=e&&n<r;)e=e[At(t[n++])];return n&&n==r?e:void 0};var Pt=$((function(e,t,n){var r=null==e?void 0:Ct(e,t);return void 0===r?n:r}));const Ht=(e,t,n)=>t?Pt(n,t)||Pt(e,t):n||e,jt=(e,t)=>{const n=t||e.defaultValue;return Pt(e.collections,n)};var zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(zt||(zt={}));const Tt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,r=jt(Tt,n[zt.colorScheme]);return n.options&&n.options.color?Ht(r,e,n.options.color):Ht(r,e)},Rt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}},Vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Nt=e=>Object.keys(Vt).reduce(((t,n)=>{const r=Vt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Lt=Nt("max-width");Nt("min-width");var Wt=Object.defineProperty,qt={};((e,t)=>{for(var n in t)Wt(e,n,{get:t[n],enumerable:!0})})(qt,{assign:()=>xn,colors:()=>Sn,createStringInterpolator:()=>vn,skipAnimation:()=>Bn,to:()=>bn,willAdvance:()=>_n});var Qt=cn(),Ut=e=>on(e,Qt),Gt=cn();Ut.write=e=>on(e,Gt);var Xt=cn();Ut.onStart=e=>on(e,Xt);var Zt=cn();Ut.onFrame=e=>on(e,Zt);var Yt=cn();Ut.onFinish=e=>on(e,Yt);var Jt=[];Ut.setTimeout=(e,t)=>{const n=Ut.now()+t,r=()=>{const e=Jt.findIndex((e=>e.cancel==r));~e&&Jt.splice(e,1),nn-=~e?1:0},i={time:n,handler:e,cancel:r};return Jt.splice(Kt(n),0,i),nn+=1,an(),i};var Kt=e=>~(~Jt.findIndex((t=>t.time>e))||~Jt.length);Ut.cancel=e=>{Xt.delete(e),Zt.delete(e),Yt.delete(e),Qt.delete(e),Gt.delete(e)},Ut.sync=e=>{rn=!0,Ut.batchedUpdates(e),rn=!1},Ut.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Ut.onStart(n)}return r.handler=e,r.cancel=()=>{Xt.delete(n),t=null},r};var en="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ut.use=e=>en=e,Ut.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ut.batchedUpdates=e=>e(),Ut.catch=console.error,Ut.frameLoop="always",Ut.advance=()=>{"demand"!==Ut.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ln()};var tn=-1,nn=0,rn=!1;function on(e,t){rn?(t.delete(e),e(0)):(t.add(e),an())}function an(){tn<0&&(tn=0,"demand"!==Ut.frameLoop&&en(sn))}function sn(){~tn&&(en(sn),Ut.batchedUpdates(ln))}function ln(){const e=tn;tn=Ut.now();const t=Kt(tn);t&&(un(Jt.splice(0,t),(e=>e.handler())),nn-=t),nn?(Xt.flush(),Qt.flush(e?Math.min(64,tn-e):16.667),Zt.flush(),Gt.flush(),Yt.flush()):tn=-1}function cn(){let e=new Set,t=e;return{add(n){nn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(nn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,nn-=t.size,un(t,(t=>t(n)&&e.add(t))),nn+=e.size,t=e)}}}function un(e,t){e.forEach((e=>{try{t(e)}catch(e){Ut.catch(e)}}))}function dn(){}var hn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function pn(e,t){if(hn.arr(e)){if(!hn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var fn=(e,t)=>e.forEach(t);function gn(e,t,n){if(hn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var mn=e=>hn.und(e)?[]:hn.arr(e)?e:[e];function yn(e,t){if(e.size){const n=Array.from(e);e.clear(),fn(n,t)}}var vn,bn,Fn=(e,...t)=>yn(e,(e=>e(...t))),wn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Sn=null,Bn=!1,_n=dn,xn=e=>{e.to&&(bn=e.to),e.now&&(Ut.now=e.now),void 0!==e.colors&&(Sn=e.colors),null!=e.skipAnimation&&(Bn=e.skipAnimation),e.createStringInterpolator&&(vn=e.createStringInterpolator),e.requestAnimationFrame&&Ut.use(e.requestAnimationFrame),e.batchedUpdates&&(Ut.batchedUpdates=e.batchedUpdates),e.willAdvance&&(_n=e.willAdvance),e.frameLoop&&(Ut.frameLoop=e.frameLoop)},$n=new Set,kn=[],Dn=[],En=0,On={get idle(){return!$n.size&&!kn.length},start(e){En>e.priority?($n.add(e),Ut.onStart(In)):(An(e),Ut(Pn))},advance:Pn,sort(e){if(En)Ut.onFrame((()=>On.sort(e)));else{const t=kn.indexOf(e);~t&&(kn.splice(t,1),Cn(e))}},clear(){kn=[],$n.clear()}};function In(){$n.forEach(An),$n.clear(),Ut(Pn)}function An(e){kn.includes(e)||Cn(e)}function Cn(e){kn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(kn,(t=>t.priority>e.priority)),0,e)}function Pn(e){const t=Dn;for(let n=0;n<kn.length;n++){const r=kn[n];En=r.priority,r.idle||(_n(r),r.advance(e),r.idle||t.push(r))}return En=0,(Dn=kn).length=0,(kn=t).length>0}var Hn="[-+]?\\d*\\.?\\d+",jn=Hn+"%";function zn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Tn=new RegExp("rgb"+zn(Hn,Hn,Hn)),Mn=new RegExp("rgba"+zn(Hn,Hn,Hn,Hn)),Rn=new RegExp("hsl"+zn(Hn,jn,jn)),Vn=new RegExp("hsla"+zn(Hn,jn,jn,Hn)),Nn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ln=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wn=/^#([0-9a-fA-F]{6})$/,qn=/^#([0-9a-fA-F]{8})$/;function Qn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Un(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Qn(i,r,e+1/3),a=Qn(i,r,e),s=Qn(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Gn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Xn(e){return(parseFloat(e)%360+360)%360/360}function Zn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Yn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Jn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Wn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Sn&&void 0!==Sn[e]?Sn[e]:(t=Tn.exec(e))?(Gn(t[1])<<24|Gn(t[2])<<16|Gn(t[3])<<8|255)>>>0:(t=Mn.exec(e))?(Gn(t[1])<<24|Gn(t[2])<<16|Gn(t[3])<<8|Zn(t[4]))>>>0:(t=Nn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=qn.exec(e))?parseInt(t[1],16)>>>0:(t=Ln.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Rn.exec(e))?(255|Un(Xn(t[1]),Yn(t[2]),Yn(t[3])))>>>0:(t=Vn.exec(e))?(Un(Xn(t[1]),Yn(t[2]),Yn(t[3]))|Zn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Kn=(e,t,n)=>{if(hn.fun(e))return e;if(hn.arr(e))return Kn({range:e,output:t,extrapolate:n});if(hn.str(e.output[0]))return vn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var er=1.70158,tr=1.525*er,nr=er+1,rr=2*Math.PI/3,ir=2*Math.PI/4.5,or=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ar={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>nr*e*e*e-er*e*e,easeOutBack:e=>1+nr*Math.pow(e-1,3)+er*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-tr)/2:(Math.pow(2*e-2,2)*((tr+1)*(2*e-2)+tr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*rr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*rr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ir)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ir)/2+1,easeInBounce:e=>1-or(1-e),easeOutBounce:or,easeInOutBounce:e=>e<.5?(1-or(1-2*e))/2:(1+or(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},sr=Symbol.for("FluidValue.get"),lr=Symbol.for("FluidValue.observers"),cr=e=>Boolean(e&&e[sr]),ur=e=>e&&e[sr]?e[sr]():e,dr=e=>e[lr]||null;function hr(e,t){const n=e[lr];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var pr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");fr(this,e)}},fr=(e,t)=>vr(e,sr,t);function gr(e,t){if(e[sr]){let n=e[lr];n||vr(e,lr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function mr(e,t){const n=e[lr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[lr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var yr,vr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),br=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Fr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,wr=new RegExp(`(${br.source})(%|[a-z]+)`,"i"),Sr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Br=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,_r=e=>{const[t,n]=xr(e);if(!t||wn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Br.test(n)?_r(n):n||e},xr=e=>{const t=Br.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},$r=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,kr=e=>{yr||(yr=Sn?new RegExp(`(${Object.keys(Sn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ur(e).replace(Br,_r).replace(Fr,Jn).replace(yr,Jn))),n=t.map((e=>e.match(br).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Kn({...e,output:t})));return e=>{const n=!wr.test(t[0])&&t.find((e=>wr.test(e)))?.replace(br,"");let i=0;return t[0].replace(br,(()=>`${r[i++](e)}${n||""}`)).replace(Sr,$r)}},Dr="react-spring: ",Er=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Dr}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Or=Er(console.warn);var Ir=Er(console.warn);function Ar(e){return hn.str(e)&&("#"==e[0]||/\d/.test(e)||!wn()&&Br.test(e)||e in(Sn||{}))}var Cr=wn()?a:s,Pr=()=>{const e=o(!1);return Cr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Hr(){const e=i()[1],t=Pr();return()=>{t.current&&e(Math.random())}}var jr=e=>a(e,zr),zr=[];function Tr(e){const t=o();return a((()=>{t.current=e})),t.current}var Mr=Symbol.for("Animated:node"),Rr=e=>e&&e[Mr],Vr=(e,t)=>{return n=e,r=Mr,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Nr=e=>e&&e[Mr]&&e[Mr].getPayload(),Lr=class{constructor(){Vr(this,this)}getPayload(){return this.payload||[]}},Wr=class extends Lr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,hn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Wr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return hn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,hn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},qr=class extends Wr{constructor(e){super(0),this._string=null,this._toString=Kn({output:[e,e]})}static create(e){return new qr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(hn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Kn({output:[this.getValue(),e]})),this._value=0,super.reset()}},Qr={dependencies:null},Ur=class extends Lr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return gn(this.source,((n,r)=>{var i;(i=n)&&i[Mr]===i?t[r]=n.getValue(e):cr(n)?t[r]=ur(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&fn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return gn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Qr.dependencies&&cr(e)&&Qr.dependencies.add(e);const t=Nr(e);t&&fn(t,(e=>this.add(e)))}},Gr=class extends Ur{constructor(e){super(e)}static create(e){return new Gr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Xr)),!0)}};function Xr(e){return(Ar(e)?qr:Wr).create(e)}function Zr(e){const t=Rr(e);return t?t.constructor:hn.arr(e)?Gr:Ar(e)?qr:Wr}var Yr=(e,t)=>{const r=!hn.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((i,s)=>{const l=o(null),u=r&&c((e=>{l.current=function(e,t){e&&(hn.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[d,h]=function(e,t){const n=new Set;Qr.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ur(e),Qr.dependencies=null,[e,n]}(i,t),p=Hr(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Jr(f,h),m=o();Cr((()=>(m.current=g,fn(h,(e=>gr(e,g))),()=>{m.current&&(fn(m.current.deps,(e=>mr(e,m.current))),Ut.cancel(m.current.update))}))),a(f,[]),jr((()=>()=>{const e=m.current;fn(e.deps,(t=>mr(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:u})}))},Jr=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ut.write(this.update)}};var Kr=Symbol.for("AnimatedComponent"),ei=e=>hn.str(e)?e:e&&hn.str(e.displayName)?e.displayName:hn.fun(e)&&e.name||null;function ti(e,...t){return hn.fun(e)?e(...t):e}var ni=(e,t)=>!0===e||!!(t&&e&&(hn.fun(e)?e(t):mn(e).includes(t))),ri=(e,t)=>hn.obj(e)?t&&e[t]:e,ii=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,oi=e=>e,ai=(e,t=oi)=>{let n=si;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);hn.und(n)||(r[i]=n)}return r},si=["config","onProps","onStart","onChange","onPause","onResume","onRest"],li={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ci(e){const t=function(e){const t={};let n=0;if(gn(e,((e,r)=>{li[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return gn(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function ui(e){return e=ur(e),hn.arr(e)?e.map(ui):Ar(e)?qt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function di(e){return hn.fun(e)||hn.arr(e)&&hn.obj(e[0])}var hi={tension:170,friction:26,mass:1,damping:1,easing:ar.linear,clamp:!1},pi=class{constructor(){this.velocity=0,Object.assign(this,hi)}};function fi(e,t){if(hn.und(t.decay)){const n=!hn.und(t.tension)||!hn.und(t.friction);!n&&hn.und(t.frequency)&&hn.und(t.damping)&&hn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var gi=[],mi=class{constructor(){this.changed=!1,this.values=gi,this.toValues=null,this.fromValues=gi,this.config=new pi,this.immediate=!1}};function yi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=ni(n.cancel??r?.cancel,t);if(u)p();else{hn.und(n.pause)||(i.paused=ni(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||ni(e,t)),l=ti(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Ut.now()}function h(){l>0&&!qt.skipAnimation?(i.delayed=!0,c=Ut.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var vi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?wi(e.get()):t.every((e=>e.noop))?bi(e.get()):Fi(e.get(),t.every((e=>e.finished))),bi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Fi=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),wi=e=>({value:e,cancelled:!0,finished:!1});function Si(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ai(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&wi(r)||i!==n.asyncId&&Fi(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new _i,a=new xi;return(async()=>{if(qt.skipAnimation)throw Bi(n),a.result=Fi(r,!1),d(a),a;p(o);const s=hn.obj(e)?{...e}:{...t,to:e};s.parentId=i,gn(c,((e,t)=>{hn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(qt.skipAnimation)return Bi(n),Fi(r,!1);try{let t;t=hn.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Fi(r.get(),!0,!1)}catch(e){if(e instanceof _i)g=e.result;else{if(!(e instanceof xi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return hn.fun(a)&&Ut.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Bi(e,t){yn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var _i=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},xi=class extends Error{constructor(){super("SkipAnimationSignal")}},$i=e=>e instanceof Di,ki=1,Di=class extends pr{constructor(){super(...arguments),this.id=ki++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Rr(this);return e&&e.getValue()}to(...e){return qt.to(this,e)}interpolate(...e){return Or(`${Dr}The "interpolate" function is deprecated in v9 (use "to" instead)`),qt.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){hr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||On.sort(this),hr(this,{type:"priority",parent:this,priority:e})}},Ei=Symbol.for("SpringPhase"),Oi=e=>(1&e[Ei])>0,Ii=e=>(2&e[Ei])>0,Ai=e=>(4&e[Ei])>0,Ci=(e,t)=>t?e[Ei]|=3:e[Ei]&=-3,Pi=(e,t)=>t?e[Ei]|=4:e[Ei]&=-5,Hi=class extends Di{constructor(e,t){if(super(),this.animation=new mi,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!hn.und(e)||!hn.und(t)){const n=hn.obj(e)?{...e}:{...t,from:e};hn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ii(this)||this._state.asyncTo)||Ai(this)}get goal(){return ur(this.animation.to)}get velocity(){const e=Rr(this);return e instanceof Wr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Oi(this)}get isAnimating(){return Ii(this)}get isPaused(){return Ai(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=Nr(r.to);!a&&cr(r.to)&&(i=mn(ur(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==qr?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=hn.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(hn.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!hn.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=Rr(this),l=s.getValue();if(t){const e=ur(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Ut.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ii(this)){const{to:e,config:t}=this.animation;Ut.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return hn.und(e)?(n=this.queue||[],this.queue=[]):n=[hn.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>vi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Bi(this._state,e&&this._lastCallId),Ut.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=hn.obj(n)?n[t]:n,(null==n||di(n))&&(n=void 0),r=hn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Oi(this)||(e.reverse&&([n,r]=[r,n]),r=ur(r),hn.und(r)?Rr(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ai(e,((e,t)=>/^on/.test(t)?ri(e,n):e))),Ni(this,e,"onProps"),Li(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return yi(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Ai(this)||(Pi(this,!0),Fn(o.pauseQueue),Li(this,"onPause",Fi(this,ji(this,this.animation.to)),this))},resume:()=>{Ai(this)&&(Pi(this,!1),Ii(this)&&this._resume(),Fn(o.resumeQueue),Li(this,"onResume",Fi(this,ji(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=zi(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(wi(this));const r=!hn.und(e.to),i=!hn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(wi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!hn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!pn(d,c);h&&(s.from=d),d=ur(d);const p=!pn(u,l);p&&this._focus(u);const f=di(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(fi(n={...n},t),t={...n,...t}),fi(e,t),Object.assign(e,t);for(const t in hi)null==e[t]&&(e[t]=hi[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;hn.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,ti(t.config,o),t.config!==a.config?ti(a.config,o):void 0);let v=Rr(this);if(!v||hn.und(u))return n(Fi(this,!0));const b=hn.und(t.reset)?i&&!t.default:!hn.und(d)&&ni(t.reset,o),F=b?d:this.get(),w=ui(u),S=hn.num(w)||hn.arr(w)||Ar(w),B=!f&&(!S||ni(a.immediate||t.immediate,o));if(p){const e=Zr(u);if(e!==v.constructor){if(!B)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const _=v.constructor;let x=cr(u),$=!1;if(!x){const e=b||!Oi(this)&&h;(p||e)&&($=pn(ui(F),w),x=!$),(pn(s.immediate,B)||B)&&pn(g.decay,m)&&pn(g.velocity,y)||(x=!0)}if($&&Ii(this)&&(s.changed&&!b?x=!0:x||this._stop(l)),!f&&((x||cr(l))&&(s.values=v.getPayload(),s.toValues=cr(u)?null:_==qr?[1]:mn(w)),s.immediate!=B&&(s.immediate=B,B||b||this._set(l)),x)){const{onRest:e}=s;fn(Vi,(e=>Ni(this,t,e)));const r=Fi(this,ji(this,l));Fn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Ut.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?ti(a.onRest,r):s.onStart?.(r,this)}))}b&&this._set(F),f?n(Si(t.to,t,this._state,this)):x?this._start():Ii(this)&&!p?this._pendingCalls.add(n):n(bi(F))}_focus(e){const t=this.animation;e!==t.to&&(dr(this)&&this._detach(),t.to=e,dr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;cr(t)&&(gr(t,this),$i(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;cr(e)&&mr(e,this)}_set(e,t=!0){const n=ur(e);if(!hn.und(n)){const e=Rr(this);if(!e||!pn(n,e.getValue())){const r=Zr(n);e&&e.constructor==r?e.setValue(n):Vr(this,r.create(n)),e&&Ut.batchedUpdates((()=>{this._onChange(n,t)}))}}return Rr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Li(this,"onStart",Fi(this,ji(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ti(this.animation.onChange,e,this)),ti(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Rr(this).reset(ur(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ii(this)||(Ci(this,!0),Ai(this)||this._resume())}_resume(){qt.skipAnimation?this.finish():On.start(this)}_stop(e,t){if(Ii(this)){Ci(this,!1);const n=this.animation;fn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),hr(this,{type:"idle",parent:this});const r=t?wi(this.get()):Fi(this.get(),ji(this,e??n.to));Fn(this._pendingCalls,r),n.changed&&(n.changed=!1,Li(this,"onRest",r,this))}}};function ji(e,t){const n=ui(t);return pn(ui(e.get()),n)}function zi(e,t=e.loop,n=e.to){const r=ti(t);if(r){const i=!0!==r&&ci(r),o=(i||e).reverse,a=!i||i.reset;return Ti({...e,loop:t,default:!1,pause:void 0,to:!o||di(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function Ti(e){const{to:t,from:n}=e=ci(e),r=new Set;return hn.obj(t)&&Ri(t,r),hn.obj(n)&&Ri(n,r),e.keys=r.size?Array.from(r):null,e}function Mi(e){const t=Ti(e);return hn.und(t.default)&&(t.default=ai(t)),t}function Ri(e,t){gn(e,((e,n)=>null!=e&&t.add(n)))}var Vi=["onStart","onRest","onChange","onPause","onResume"];function Ni(e,t,n){e.animation[n]=t[n]!==ii(t,n)?ri(t[n],e.key):void 0}function Li(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Wi=["onStart","onChange","onRest"],qi=1,Qi=class{constructor(e,t){this.id=qi++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];hn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ti(e)),this}start(e){let{queue:t}=this;return e?t=mn(e).map(Ti):this.queue=[],this._flush?this._flush(this,t):(Ki(this,t),Ui(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;fn(mn(t),(t=>n[t].stop(!!e)))}else Bi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(hn.und(e))this.start({pause:!0});else{const t=this.springs;fn(mn(e),(e=>t[e].pause()))}return this}resume(e){if(hn.und(e))this.start({pause:!1});else{const t=this.springs;fn(mn(e),(e=>t[e].resume()))}return this}each(e){gn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,yn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&yn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,yn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ut.onFrame(this._onFrame)}};function Ui(e,t){return Promise.all(t.map((t=>Gi(e,t)))).then((t=>vi(e,t)))}async function Gi(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=hn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=hn.arr(i)||hn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):fn(Wi,(n=>{const r=t[n];if(hn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Fn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===ii(t,"cancel");(u||p&&d.asyncId)&&h.push(yi(++e._lastAsyncId,{props:t,state:d,actions:{pause:dn,resume:dn,start(t,n){p?(Bi(d,e._lastAsyncId),n(wi(e))):(t.onRest=s,n(Si(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=vi(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=zi(t,a,i);if(n)return Ki(e,[n]),Gi(e,n,!0)}return l&&Ut.batchedUpdates((()=>l(f,e,e.item))),f}function Xi(e,t){const n={...e.springs};return t&&fn(mn(t),(e=>{hn.und(e.keys)&&(e=Ti(e)),hn.obj(e.to)||(e={...e,to:void 0}),Ji(n,e,(e=>Yi(e)))})),Zi(e,n),n}function Zi(e,t){gn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,gr(t,e))}))}function Yi(e,t){const n=new Hi;return n.key=e,t&&gr(n,t),n}function Ji(e,t,n){t.keys&&fn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ki(e,t){fn(t,(t=>{Ji(e.springs,t,(t=>Yi(t,e)))}))}var eo,to,no=({children:e,...t})=>{const r=u(ro),s=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[n]=i((()=>({inputs:t,result:e()}))),r=o(),s=r.current;let l=s;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return a((()=>{r.current=l,s==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:c}=ro;return n.createElement(c,{value:t},e)},ro=(eo=no,to={},Object.assign(eo,n.createContext(to)),eo.Provider._context=eo,eo.Consumer._context=eo,eo);no.Provider=ro.Provider,no.Consumer=ro.Consumer;var io=()=>{const e=[],t=function(t){Ir(`${Dr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return fn(e,((e,i)=>{if(hn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return fn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return fn(e,(e=>e.resume(...arguments))),this},t.set=function(t){fn(e,((e,n)=>{const r=hn.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return fn(e,((e,r)=>{if(hn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return fn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return fn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return hn.fun(e)?e(n,t):e};return t._getProps=n,t};function oo(e,t){const n=hn.fun(e),[[r],i]=function(e,t,n){const r=hn.fun(t)&&t;r&&!n&&(n=[]);const i=d((()=>r||3==arguments.length?io():void 0),[]),a=o(0),s=Hr(),l=d((()=>({ctrls:[],queue:[],flush(e,t){const n=Xi(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ui(e,t):new Promise((r=>{Zi(e,n),l.queue.push((()=>{r(Ui(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),h=[],p=Tr(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Qi(null,l.flush)),n=r?r(i,e):t[i];n&&(h[i]=Mi(n))}}d((()=>{fn(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),d((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Xi(e,h[t]))),m=u(no),y=Tr(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Cr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],fn(e,(e=>e()))),fn(c.current,((e,t)=>{i?.add(e),v&&e.start({default:m});const n=h[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),jr((()=>()=>{fn(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var ao=class extends Di{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Kn(...t);const n=this._get(),r=Zr(n);Vr(this,r.create(n))}advance(e){const t=this._get();pn(t,this.get())||(Rr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&lo(this._active)&&co(this)}_get(){const e=hn.arr(this.source)?this.source.map(ur):mn(ur(this.source));return this.calc(...e)}_start(){this.idle&&!lo(this._active)&&(this.idle=!1,fn(Nr(this),(e=>{e.done=!1})),qt.skipAnimation?(Ut.batchedUpdates((()=>this.advance())),co(this)):On.start(this))}_attach(){let e=1;fn(mn(this.source),(t=>{cr(t)&&gr(t,this),$i(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){fn(mn(this.source),(e=>{cr(e)&&mr(e,this)})),this._active.clear(),co(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=mn(this.source).reduce(((e,t)=>Math.max(e,($i(t)?t.priority:0)+1)),0))}};function so(e){return!1!==e.idle}function lo(e){return!e.size||Array.from(e).every(so)}function co(e){e.idle||(e.idle=!0,fn(Nr(e),(e=>{e.done=!0})),hr(e,{type:"idle",parent:e}))}qt.assign({createStringInterpolator:kr,to:(e,t)=>new ao(e,t)});var uo=/^--/;function ho(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||uo.test(e)||fo.hasOwnProperty(e)&&fo[e]?(""+t).trim():t+"px"}var po={};var fo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},go=["Webkit","Ms","Moz","O"];fo=Object.keys(fo).reduce(((e,t)=>(go.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),fo);var mo=/^(matrix|translate|scale|rotate|skew)/,yo=/^(translate)/,vo=/^(rotate|skew)/,bo=(e,t)=>hn.num(e)&&0!==e?e+t:e,Fo=(e,t)=>hn.arr(e)?e.every((e=>Fo(e,t))):hn.num(e)?e===t:parseFloat(e)===t,wo=class extends Ur{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>bo(e,"px"))).join(",")})`,Fo(e,0)]))),gn(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(mo.test(t)){if(delete r[t],hn.und(e))return;const n=yo.test(t)?"px":vo.test(t)?"deg":"";i.push(mn(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${bo(i,n)})`,Fo(i,0)]:e=>[`${t}(${e.map((e=>bo(e,n))).join(",")})`,Fo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new So(i,o)),super(r)}},So=class extends pr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return fn(this.inputs,((n,r)=>{const i=ur(n[0]),[o,a]=this.transforms[r](hn.arr(i)?i:n.map(ur));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&fn(this.inputs,(e=>fn(e,(e=>cr(e)&&gr(e,this)))))}observerRemoved(e){0==e&&fn(this.inputs,(e=>fn(e,(e=>cr(e)&&mr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),hr(this,e)}};qt.assign({batchedUpdates:F,createStringInterpolator:kr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Bo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Ur(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ei(e)||"Anonymous";return(e=hn.str(e)?o[e]||(o[e]=Yr(e,i)):e[Kr]||(e[Kr]=Yr(e,i))).displayName=`Animated(${t})`,e};return gn(e,((t,n)=>{hn.arr(e)&&(n=ei(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:po[t]||(po[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=ho(t,r[t]);uo.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new wo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),_o=Bo.animated;const xo=y.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,$o=y.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Rt.Neutral[5]};
    background-color: ${Rt.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,ko=y($o)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Lt.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Do=y($o)`
    display: none;
    visibility: hidden;
    ${Lt.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,Eo=y(_o.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Rt.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${Rt.Neutral[5]};

    ${e=>e.$showDrawer?v`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:v`
                  border: 0;
                  padding: 0;
              `};
`,Oo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Io={collections:{base:{D1:{fontFamily:Oo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ao=e=>t=>{const n=t.theme,r=jt(Io,n[zt.textStyleScheme]);return n.options&&n.options.textStyle?Ht(r,e,n.options.textStyle):Ht(r,e)},Co={D1:{fontFamily:Ao("D1.fontFamily"),fontSize:Ao("D1.fontSize"),fontWeight:Ao("D1.fontWeight"),lineHeight:Ao("D1.lineHeight"),letterSpacing:Ao("D1.letterSpacing")},D2:{fontFamily:Ao("D2.fontFamily"),fontSize:Ao("D2.fontSize"),fontWeight:Ao("D2.fontWeight"),lineHeight:Ao("D2.lineHeight"),letterSpacing:Ao("D2.letterSpacing")},D3:{fontFamily:Ao("D3.fontFamily"),fontSize:Ao("D3.fontSize"),fontWeight:Ao("D3.fontWeight"),lineHeight:Ao("D3.lineHeight"),letterSpacing:Ao("D3.letterSpacing")},D4:{fontFamily:Ao("D4.fontFamily"),fontSize:Ao("D4.fontSize"),fontWeight:Ao("D4.fontWeight"),lineHeight:Ao("D4.lineHeight"),letterSpacing:Ao("D4.letterSpacing")},DBody:{fontFamily:Ao("DBody.fontFamily"),fontSize:Ao("DBody.fontSize"),fontWeight:Ao("DBody.fontWeight"),lineHeight:Ao("DBody.lineHeight"),letterSpacing:Ao("DBody.letterSpacing")},H1:{fontFamily:Ao("H1.fontFamily"),fontSize:Ao("H1.fontSize"),fontWeight:Ao("H1.fontWeight"),lineHeight:Ao("H1.lineHeight"),letterSpacing:Ao("H1.letterSpacing")},H2:{fontFamily:Ao("H2.fontFamily"),fontSize:Ao("H2.fontSize"),fontWeight:Ao("H2.fontWeight"),lineHeight:Ao("H2.lineHeight"),letterSpacing:Ao("H2.letterSpacing")},H3:{fontFamily:Ao("H3.fontFamily"),fontSize:Ao("H3.fontSize"),fontWeight:Ao("H3.fontWeight"),lineHeight:Ao("H3.lineHeight"),letterSpacing:Ao("H3.letterSpacing")},H4:{fontFamily:Ao("H4.fontFamily"),fontSize:Ao("H4.fontSize"),fontWeight:Ao("H4.fontWeight"),lineHeight:Ao("H4.lineHeight"),letterSpacing:Ao("H4.letterSpacing")},H5:{fontFamily:Ao("H5.fontFamily"),fontSize:Ao("H5.fontSize"),fontWeight:Ao("H5.fontWeight"),lineHeight:Ao("H5.lineHeight"),letterSpacing:Ao("H5.letterSpacing")},H6:{fontFamily:Ao("H6.fontFamily"),fontSize:Ao("H6.fontSize"),fontWeight:Ao("H6.fontWeight"),lineHeight:Ao("H6.lineHeight"),letterSpacing:Ao("H6.letterSpacing")},Body:{fontFamily:Ao("Body.fontFamily"),fontSize:Ao("Body.fontSize"),fontWeight:Ao("Body.fontWeight"),lineHeight:Ao("Body.lineHeight"),letterSpacing:Ao("Body.letterSpacing")},BodySmall:{fontFamily:Ao("BodySmall.fontFamily"),fontSize:Ao("BodySmall.fontSize"),fontWeight:Ao("BodySmall.fontWeight"),lineHeight:Ao("BodySmall.lineHeight"),letterSpacing:Ao("BodySmall.letterSpacing")},XSmall:{fontFamily:Ao("XSmall.fontFamily"),fontSize:Ao("XSmall.fontSize"),fontWeight:Ao("XSmall.fontWeight"),lineHeight:Ao("XSmall.lineHeight"),letterSpacing:Ao("XSmall.letterSpacing")}},Po=e=>{switch(e){case 700:case"bold":return Oo.Bold;case 600:case"semibold":return Oo.Semibold;case 300:case"light":return Oo.Light;case 400:case"regular":return Oo.Regular;default:return""}},Ho=(e,t)=>n=>{var r;const i=Co[e].fontFamily(n),o=Co[e].fontWeight(n);return Object.values(Oo).includes(i)?v`
                font-family: ${Po(t)||Po(o)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=jo(t)||o)&&void 0!==r?r:"normal"};
        `},jo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zo=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},To=Ho,Mo=(e,t,n=!1)=>r=>{const i=Co[e],o=i.fontSize(r);return v`
            ${Ho(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ro=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${zo(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${zo(n)}
        `;var Vo;!function(e){e.D1=y.h1`
        ${e=>v`
                ${Mo("D1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${Mo("D2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${Mo("D3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${Mo("D4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${Mo("DBody",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${Mo("H1",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${Mo("H2",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${Mo("H3",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${Mo("H4",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${Mo("H5",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${Mo("H6",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${Mo("Body",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${Mo("BodySmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${Mo("XSmall",e.weight,e.paragraph)}
                color: ${Rt.Neutral[1]};
                ${Ro(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Wo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Wo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vo||(Vo={}));const No=y.a`
    ${e=>v`
            ${Mo(e.textStyle,e.weight)}
            color: ${Rt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Rt.Secondary};

                svg {
                    color: ${Rt.Secondary};
                }
            }
        `}
`,Lo=y(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Wo=n=>{var{external:r=!1,children:i}=n,o=_(n,["external","children"]);return e(No,Object.assign({},o,{children:[i,r&&t(Lo,{})]}))};var qo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(qo||(qo={}));const Qo=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Uo=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Go=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Rt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Uo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Xo=y(Go)`
    animation-delay: -0.45s;
`,Zo=y(Go)`
    animation-delay: -0.3s;
`,Yo=y(Go)`
    animation-delay: -0.15s;
`,Jo={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${Rt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${Rt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${Rt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${Rt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Rt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ko=e=>t=>{var n;const r=t.theme,i=jt(Jo,r[zt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ht(i,e,r.options.designToken):Ht(i,e)},ea={InputBoxShadow:Ko("InputBoxShadow"),InputErrorBoxShadow:Ko("InputErrorBoxShadow"),ElevationBoxShadow:Ko("ElevationBoxShadow"),Table:{Header:Ko("Table.Header"),Cell:{Primary:Ko("Table.Cell.Primary"),Secondary:Ko("Table.Cell.Secondary"),Selected:Ko("Table.Cell.Selected"),Hover:Ko("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ko("Button.Danger.BackgroundColor"),Hover:Ko("Button.Danger.Hover"),Primary:Ko("Button.Danger.Primary"),Border:Ko("Button.Danger.Border")}}},ta=y.button`
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
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ea.Button.Danger.Border:Rt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?ea.Button.Danger.Primary:Rt.Primary};
                    }
                `;case"light":return v`
                    background-color: ${Rt.Neutral[8]};
                    border: 1px solid ${Rt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?ea.Button.Danger.Primary:Rt.Primary};
                    }
                `;case"disabled":return v`
                    background-color: ${Rt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Rt.Neutral[3]};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ea.Button.Danger.Primary:Rt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?ea.Button.Danger.Hover:Rt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?ea.Button.Danger.BackgroundColor:Rt.Primary};
                    border: 1px solid transparent;

                    ${Lt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Rt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${Mo("H5","semibold")}
                    }

                    ${Lt.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${Mo("H4","semibold")}
                    }

                    ${Lt.mobileS} {
                        height: auto;
                    }
                `}
`,na=y((({color:n,className:r,size:i=18})=>e(Qo,Object.assign({className:r,$size:i,$color:n},{children:[t(Go,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(Xo,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Zo,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(Yo,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ea.Button.Danger.Primary:Rt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Rt.Neutral[3](e);break;default:t=Rt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ra={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=_(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ta,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(na,Object.assign({},u)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=_(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ta,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(na,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},ia=y.li`
    width: 100%;
`,oa=y(ra.Default)`
    width: 100%;
    height: unset;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            height: 1.25rem;
            width: 1.25rem;
            margin-top: 0.25rem;
        }

        span {
            ${To("XSmall","regular")}
            font-size: 0.75rem !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    :hover,
    :focus {
        span {
            div {
                background-color: ${Rt.Accent.Light[5]};
                color: ${Rt.Primary} !important;
            }

            span {
                ${To("XSmall","semibold")}
                color: ${Rt.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&v`
            span {
                div {
                    background-color: ${Rt.Accent.Light[5]};
                }

                span {
                    ${To("XSmall","semibold")}
                    color: ${Rt.Primary};
                }
            }
        `}
`,aa=y.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,sa=y(Vo.XSmall)``,la=h({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),ca=y.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`,ua=y.div`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Rt.Neutral[5]};
`;var da=function(e,t){return da=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},da(e,t)};var ha=function(){return ha=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ha.apply(this,arguments)};var pa="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var fa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ga="object"==typeof pa&&pa&&pa.Object===Object&&pa,ma="object"==typeof self&&self&&self.Object===Object&&self,ya=ga||ma||Function("return this")(),va=ya,ba=function(){return va.Date.now()},Fa=/\s/;var wa=function(e){for(var t=e.length;t--&&Fa.test(e.charAt(t)););return t},Sa=/^\s+/;var Ba=function(e){return e?e.slice(0,wa(e)+1).replace(Sa,""):e},_a=ya.Symbol,xa=_a,$a=Object.prototype,ka=$a.hasOwnProperty,Da=$a.toString,Ea=xa?xa.toStringTag:void 0;var Oa=function(e){var t=ka.call(e,Ea),n=e[Ea];try{e[Ea]=void 0;var r=!0}catch(e){}var i=Da.call(e);return r&&(t?e[Ea]=n:delete e[Ea]),i},Ia=Object.prototype.toString;var Aa=Oa,Ca=function(e){return Ia.call(e)},Pa=_a?_a.toStringTag:void 0;var Ha=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Pa&&Pa in Object(e)?Aa(e):Ca(e)},ja=function(e){return null!=e&&"object"==typeof e};var za=Ba,Ta=fa,Ma=function(e){return"symbol"==typeof e||ja(e)&&"[object Symbol]"==Ha(e)},Ra=/^[-+]0x[0-9a-f]+$/i,Va=/^0b[01]+$/i,Na=/^0o[0-7]+$/i,La=parseInt;var Wa=fa,qa=ba,Qa=function(e){if("number"==typeof e)return e;if(Ma(e))return NaN;if(Ta(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ta(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=za(e);var n=Va.test(e);return n||Na.test(e)?La(e.slice(2),n?2:8):Ra.test(e)?NaN:+e},Ua=Math.max,Ga=Math.min;var Xa=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=qa();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Ga(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=qa(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Qa(t)||0,Wa(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Ua(Qa(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(qa())},y},Za=Xa,Ya=fa;var Ja=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ya(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Za(e,t,{leading:r,maxWait:t,trailing:i})},Ka=function(e,t,n,r){switch(t){case"debounce":return Xa(e,n,r);case"throttle":return Ja(e,n,r);default:return e}},es=function(e){return"function"==typeof e},ts=function(){return"undefined"==typeof window},ns=function(e){return e instanceof Element||e instanceof HTMLDocument},rs=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&es(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ts()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ts())return null;if(t)return document.querySelector(t);if(r&&ns(r))return r;if(n.targetRef&&ns(n.targetRef.current))return n.targetRef.current;var i=w(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=rs(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ts()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return es(t)?"renderProp":es(r)?"childFunction":p(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=f(),n.observableElement=null,ts()||(n.resizeHandler=Ka(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}da(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ts()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return g(e,c)}return g(e,l);case"childArray":return(e=i).map((function(e){return!!e&&g(e,l)}));default:return n.createElement(a,null)}}}(m);var is=ts()?a:s;const os=y(_o.li)``,as=y(ra.Default)`
    justify-content: flex-start;
    width: 100%;
    height: unset;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${To("H5","semibold")}
        font-size: 1rem !important;
        color: ${Rt.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Rt.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&v`
                    color: ${Rt.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&v`
            background-color: ${Rt.Accent.Light[4]};
        `}
`,ss=y(_o.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ls=y.div`
    align-self: center;
    padding-left: 0.5rem;
`,cs=y(B)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Rt.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,us=y.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,ds=y(_o.ul)``,hs=y.li``,ps=y(ra.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${To("H5","regular")}
        font-size: 1rem !important;
        color: ${Rt.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${Rt.Accent.Light[5]};
        span {
            ${To("H5","semibold")}
            color: ${Rt.Primary} !important;
        }
    }
`,fs=Object.assign((n=>{var{fixed:r=!0,children:s}=n,l=_(n,["fixed","children"]);const c=o(null),[u,h]=i(void 0),[p,f]=i(void 0),[g,m]=i(void 0),[y,v]=i(!1),b=d((()=>({currentItem:u,selectedItem:p,previouslySelectedItemId:g,setCurrentItem:h,setSelectedItem:f,setPreviouslySelectedItemId:m})),[u,p,g,h,f,m]),F=oo({width:y?240:0,borderRightWidth:y?1:0,borderTopWidth:y?1:0,borderBottomWidth:y?1:0,borderLeftWidth:0});return((e,t,n="window",r)=>{const i=o();a((()=>{i.current=t}),[t]),a((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("click",(e=>{c.current&&!c.current.contains(e.target)&&(f({itemId:g||(p?p.itemId:void 0),content:void 0}),m(void 0),h(void 0))}),"window",!0),a((()=>{v(p&&!!p.content||u&&!!u.content)}),[u,p]),t(la.Provider,Object.assign({value:b},{children:e(xo,Object.assign({$fixed:r},l,{ref:c,onMouseLeave:()=>{h(void 0)}},{children:[t(ko,{children:s}),t(Eo,Object.assign({style:F,$showDrawer:y,"data-testid":"sidenav-drawer"},{children:u&&u.content||p&&p.content})),t(Do,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,o=_(n,["separator","children"]);return e(ca,Object.assign({},o,{children:[i,r&&t(ua,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:o,onClick:s}=n,l=_(n,["children","icon","title","onClick"]);const c=l.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:d,previouslySelectedItemId:h,selectedItem:p,setCurrentItem:f,setPreviouslySelectedItemId:g,setSelectedItem:m}=u(la);a((()=>{l.selected&&m({itemId:c,content:void 0})}),[l.selected]);return t(ia,{children:e(oa,Object.assign({styleType:"link",type:"button",onClick:()=>{g((()=>{if(r&&p)return h||p.itemId})()),f({itemId:c,content:r}),m({itemId:c,content:r}),s&&!r&&s(c)},onMouseEnter:()=>{f({itemId:c,content:r})}},l,{$highlight:p&&p.itemId===c||d&&d.itemId===c},{children:[t(aa,{children:i}),t(sa,{children:o})]}))})},DrawerItem:n=>{var{id:r,title:a,onClick:s,children:l}=n,c=_(n,["id","title","onClick","children"]);const[d,h]=i(!0),[p,f]=i(!1),{currentItem:g,setSelectedItem:m,setPreviouslySelectedItemId:y,setCurrentItem:v}=u(la),b=oo({from:{opacity:0},to:{opacity:1}}),F=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=p?p:y,b=o(),F=i({width:void 0,height:void 0}),w=F[0],S=F[1];return is((function(){if(!ts()){var e=rs(g,S,u,h);b.current=Ka((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!ts()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,h,g,f,v.current]),ha({ref:v},w)}(),w=F.ref,S=oo({height:l&&d?F.height:0});return e(os,Object.assign({onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)}},c,{style:b},{children:[e(as,Object.assign({styleType:"link",type:"button",onClick:()=>{l?h(!d):(m({itemId:g.itemId,content:void 0}),v(void 0),y(void 0),s&&s(r))},$highlight:p&&d,$noChildren:!l},{children:[t(us,{children:a}),l&&t(ls,{children:t(cs,{"aria-hidden":!0,$expanded:d})})]})),t(ss,Object.assign({style:S},{children:t(ds,Object.assign({ref:w},{children:l}))}))]}))},DrawerSubitem:e=>{var{id:n,title:r,onClick:i}=e,o=_(e,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=u(la);return t(hs,Object.assign({},o,{children:t(ps,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:a.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}});export{fs as Sidenav};
//# sourceMappingURL=index.js.map
