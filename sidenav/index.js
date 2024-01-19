import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{useEffect as i,useLayoutEffect as o,useState as a,useRef as s,forwardRef as l,useCallback as c,useContext as u,useMemo as d,createContext as h,cloneElement as p,isValidElement as f,createRef as g,PureComponent as m}from"react";import y,{css as v,keyframes as b}from"styled-components";import{unstable_batchedUpdates as w,findDOMNode as F}from"react-dom";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$=Array.isArray,k="object"==typeof x&&x&&x.Object===Object&&x,D="object"==typeof self&&self&&self.Object===Object&&self,O=k||D||Function("return this")(),I=O.Symbol,E=I,A=Object.prototype,P=A.hasOwnProperty,C=A.toString,H=E?E.toStringTag:void 0;var j=function(e){var t=P.call(e,H),n=e[H];try{e[H]=void 0;var r=!0}catch(e){}var i=C.call(e);return r&&(t?e[H]=n:delete e[H]),i},z=Object.prototype.toString;var T=j,M=function(e){return z.call(e)},R=I?I.toStringTag:void 0;var V=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?T(e):M(e)};var N=V,L=function(e){return null!=e&&"object"==typeof e};var W=function(e){return"symbol"==typeof e||L(e)&&"[object Symbol]"==N(e)},q=$,Q=W,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,t){if(q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Q(e))||(G.test(e)||!U.test(e)||null!=t&&e in Object(t))};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=V,J=Z;var K,ee=function(e){if(!J(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},te=O["__core-js_shared__"],ne=(K=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"";var re=function(e){return!!ne&&ne in e},ie=Function.prototype.toString;var oe=ee,ae=re,se=Z,le=function(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ce=/^\[object .+?Constructor\]$/,ue=Function.prototype,de=Object.prototype,he=ue.toString,pe=de.hasOwnProperty,fe=RegExp("^"+he.call(pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ge=function(e){return!(!se(e)||ae(e))&&(oe(e)?fe:ce).test(le(e))},me=function(e,t){return null==e?void 0:e[t]};var ye=function(e,t){var n=me(e,t);return ge(n)?n:void 0},ve=ye(Object,"create"),be=ve;var we=function(){this.__data__=be?be(null):{},this.size=0};var Fe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Se=ve,_e=Object.prototype.hasOwnProperty;var Be=function(e){var t=this.__data__;if(Se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return _e.call(t,e)?t[e]:void 0},xe=ve,$e=Object.prototype.hasOwnProperty;var ke=ve;var De=we,Oe=Fe,Ie=Be,Ee=function(e){var t=this.__data__;return xe?void 0!==t[e]:$e.call(t,e)},Ae=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ke&&void 0===t?"__lodash_hash_undefined__":t,this};function Pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pe.prototype.clear=De,Pe.prototype.delete=Oe,Pe.prototype.get=Ie,Pe.prototype.has=Ee,Pe.prototype.set=Ae;var Ce=Pe;var He=function(){this.__data__=[],this.size=0};var je=function(e,t){return e===t||e!=e&&t!=t};var ze=function(e,t){for(var n=e.length;n--;)if(je(e[n][0],t))return n;return-1},Te=ze,Me=Array.prototype.splice;var Re=ze;var Ve=ze;var Ne=ze;var Le=He,We=function(e){var t=this.__data__,n=Te(t,e);return!(n<0)&&(n==t.length-1?t.pop():Me.call(t,n,1),--this.size,!0)},qe=function(e){var t=this.__data__,n=Re(t,e);return n<0?void 0:t[n][1]},Qe=function(e){return Ve(this.__data__,e)>-1},Ue=function(e,t){var n=this.__data__,r=Ne(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ge(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ge.prototype.clear=Le,Ge.prototype.delete=We,Ge.prototype.get=qe,Ge.prototype.has=Qe,Ge.prototype.set=Ue;var Xe=Ge,Ze=ye(O,"Map"),Ye=Ce,Je=Xe,Ke=Ze;var et=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var tt=function(e,t){var n=e.__data__;return et(t)?n["string"==typeof t?"string":"hash"]:n.map},nt=tt;var rt=tt;var it=tt;var ot=tt;var at=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ke||Je),string:new Ye}},st=function(e){var t=nt(this,e).delete(e);return this.size-=t?1:0,t},lt=function(e){return rt(this,e).get(e)},ct=function(e){return it(this,e).has(e)},ut=function(e,t){var n=ot(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=lt,dt.prototype.has=ct,dt.prototype.set=ut;var ht=dt;function pt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(pt.Cache||ht),n}pt.Cache=ht;var ft=pt;var gt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mt=/\\(\\)?/g,yt=function(e){var t=ft(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gt,(function(e,n,r,i){t.push(r?i.replace(mt,"$1"):n||e)})),t}));var vt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},bt=$,wt=W,Ft=I?I.prototype:void 0,St=Ft?Ft.toString:void 0;var _t=function e(t){if("string"==typeof t)return t;if(bt(t))return vt(t,e)+"";if(wt(t))return St?St.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Bt=_t;var xt=$,$t=X,kt=yt,Dt=function(e){return null==e?"":Bt(e)};var Ot=W;var It=function(e,t){return xt(e)?e:$t(e,t)?[e]:kt(Dt(e))},Et=function(e){if("string"==typeof e||Ot(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var At=function(e,t){for(var n=0,r=(t=It(t,e)).length;null!=e&&n<r;)e=e[Et(t[n++])];return n&&n==r?e:void 0};var Pt=function(e,t,n){var r=null==e?void 0:At(e,t);return void 0===r?n:r};const Ct=(e,t,n)=>t?Pt(n,t)||Pt(e,t):n||e,Ht=(e,t)=>{const n=t||e.defaultValue;return Pt(e.collections,n)};var jt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(jt||(jt={}));const zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Tt=e=>t=>{const n=t.theme,r=Ht(zt,n[jt.colorScheme]);return n.options&&n.options.color?Ct(r,e,n.options.color):Ct(r,e)},Mt={Brand:{1:Tt("Brand.1"),2:Tt("Brand.2"),3:Tt("Brand.3"),4:Tt("Brand.4"),5:Tt("Brand.5"),6:Tt("Brand.6")},Primary:Tt("Primary"),PrimaryDark:Tt("PrimaryDark"),Secondary:Tt("Secondary"),Accent:{Light:{1:Tt("Accent.Light.1"),2:Tt("Accent.Light.2"),3:Tt("Accent.Light.3"),4:Tt("Accent.Light.4"),5:Tt("Accent.Light.5"),6:Tt("Accent.Light.6")},Dark:{1:Tt("Accent.Dark.1"),2:Tt("Accent.Dark.2"),3:Tt("Accent.Dark.3")}},Neutral:{1:Tt("Neutral.1"),2:Tt("Neutral.2"),3:Tt("Neutral.3"),4:Tt("Neutral.4"),5:Tt("Neutral.5"),6:Tt("Neutral.6"),7:Tt("Neutral.7"),8:Tt("Neutral.8")},Validation:{Green:{Text:Tt("Validation.Green.Text"),Icon:Tt("Validation.Green.Icon"),Border:Tt("Validation.Green.Border"),Background:Tt("Validation.Green.Background")},Orange:{Text:Tt("Validation.Orange.Text"),Icon:Tt("Validation.Orange.Icon"),Border:Tt("Validation.Orange.Border"),Background:Tt("Validation.Orange.Background"),Badge:Tt("Validation.Orange.Badge")},Red:{Text:Tt("Validation.Red.Text"),Icon:Tt("Validation.Red.Icon"),Border:Tt("Validation.Red.Border"),Background:Tt("Validation.Red.Background")},Blue:{Text:Tt("Validation.Blue.Text"),Icon:Tt("Validation.Blue.Icon"),Border:Tt("Validation.Blue.Border"),Background:Tt("Validation.Blue.Background")}},Shadow:{Accent:Tt("Shadow.Accent"),Red:Tt("Shadow.Red"),Elevation:Tt("Shadow.Elevation")}},Rt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Vt=e=>Object.keys(Rt).reduce(((t,n)=>{const r=Rt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nt=Vt("max-width");Vt("min-width");var Lt=Object.defineProperty,Wt={};((e,t)=>{for(var n in t)Lt(e,n,{get:t[n],enumerable:!0})})(Wt,{assign:()=>Bn,colors:()=>Fn,createStringInterpolator:()=>yn,skipAnimation:()=>Sn,to:()=>vn,willAdvance:()=>_n});var qt=ln(),Qt=e=>rn(e,qt),Ut=ln();Qt.write=e=>rn(e,Ut);var Gt=ln();Qt.onStart=e=>rn(e,Gt);var Xt=ln();Qt.onFrame=e=>rn(e,Xt);var Zt=ln();Qt.onFinish=e=>rn(e,Zt);var Yt=[];Qt.setTimeout=(e,t)=>{const n=Qt.now()+t,r=()=>{const e=Yt.findIndex((e=>e.cancel==r));~e&&Yt.splice(e,1),tn-=~e?1:0},i={time:n,handler:e,cancel:r};return Yt.splice(Jt(n),0,i),tn+=1,on(),i};var Jt=e=>~(~Yt.findIndex((t=>t.time>e))||~Yt.length);Qt.cancel=e=>{Gt.delete(e),Xt.delete(e),Zt.delete(e),qt.delete(e),Ut.delete(e)},Qt.sync=e=>{nn=!0,Qt.batchedUpdates(e),nn=!1},Qt.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Qt.onStart(n)}return r.handler=e,r.cancel=()=>{Gt.delete(n),t=null},r};var Kt="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qt.use=e=>Kt=e,Qt.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qt.batchedUpdates=e=>e(),Qt.catch=console.error,Qt.frameLoop="always",Qt.advance=()=>{"demand"!==Qt.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):sn()};var en=-1,tn=0,nn=!1;function rn(e,t){nn?(t.delete(e),e(0)):(t.add(e),on())}function on(){en<0&&(en=0,"demand"!==Qt.frameLoop&&Kt(an))}function an(){~en&&(Kt(an),Qt.batchedUpdates(sn))}function sn(){const e=en;en=Qt.now();const t=Jt(en);t&&(cn(Yt.splice(0,t),(e=>e.handler())),tn-=t),tn?(Gt.flush(),qt.flush(e?Math.min(64,en-e):16.667),Xt.flush(),Ut.flush(),Zt.flush()):en=-1}function ln(){let e=new Set,t=e;return{add(n){tn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(tn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,tn-=t.size,cn(t,(t=>t(n)&&e.add(t))),tn+=e.size,t=e)}}}function cn(e,t){e.forEach((e=>{try{t(e)}catch(e){Qt.catch(e)}}))}function un(){}var dn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function hn(e,t){if(dn.arr(e)){if(!dn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var pn=(e,t)=>e.forEach(t);function fn(e,t,n){if(dn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var gn=e=>dn.und(e)?[]:dn.arr(e)?e:[e];function mn(e,t){if(e.size){const n=Array.from(e);e.clear(),pn(n,t)}}var yn,vn,bn=(e,...t)=>mn(e,(e=>e(...t))),wn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Fn=null,Sn=!1,_n=un,Bn=e=>{e.to&&(vn=e.to),e.now&&(Qt.now=e.now),void 0!==e.colors&&(Fn=e.colors),null!=e.skipAnimation&&(Sn=e.skipAnimation),e.createStringInterpolator&&(yn=e.createStringInterpolator),e.requestAnimationFrame&&Qt.use(e.requestAnimationFrame),e.batchedUpdates&&(Qt.batchedUpdates=e.batchedUpdates),e.willAdvance&&(_n=e.willAdvance),e.frameLoop&&(Qt.frameLoop=e.frameLoop)},xn=new Set,$n=[],kn=[],Dn=0,On={get idle(){return!xn.size&&!$n.length},start(e){Dn>e.priority?(xn.add(e),Qt.onStart(In)):(En(e),Qt(Pn))},advance:Pn,sort(e){if(Dn)Qt.onFrame((()=>On.sort(e)));else{const t=$n.indexOf(e);~t&&($n.splice(t,1),An(e))}},clear(){$n=[],xn.clear()}};function In(){xn.forEach(En),xn.clear(),Qt(Pn)}function En(e){$n.includes(e)||An(e)}function An(e){$n.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}($n,(t=>t.priority>e.priority)),0,e)}function Pn(e){const t=kn;for(let n=0;n<$n.length;n++){const r=$n[n];Dn=r.priority,r.idle||(_n(r),r.advance(e),r.idle||t.push(r))}return Dn=0,(kn=$n).length=0,($n=t).length>0}var Cn="[-+]?\\d*\\.?\\d+",Hn=Cn+"%";function jn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var zn=new RegExp("rgb"+jn(Cn,Cn,Cn)),Tn=new RegExp("rgba"+jn(Cn,Cn,Cn,Cn)),Mn=new RegExp("hsl"+jn(Cn,Hn,Hn)),Rn=new RegExp("hsla"+jn(Cn,Hn,Hn,Cn)),Vn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Nn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ln=/^#([0-9a-fA-F]{6})$/,Wn=/^#([0-9a-fA-F]{8})$/;function qn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Qn(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=qn(i,r,e+1/3),a=qn(i,r,e),s=qn(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Un(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Gn(e){return(parseFloat(e)%360+360)%360/360}function Xn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Zn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Yn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ln.exec(e))?parseInt(t[1]+"ff",16)>>>0:Fn&&void 0!==Fn[e]?Fn[e]:(t=zn.exec(e))?(Un(t[1])<<24|Un(t[2])<<16|Un(t[3])<<8|255)>>>0:(t=Tn.exec(e))?(Un(t[1])<<24|Un(t[2])<<16|Un(t[3])<<8|Xn(t[4]))>>>0:(t=Vn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Wn.exec(e))?parseInt(t[1],16)>>>0:(t=Nn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Mn.exec(e))?(255|Qn(Gn(t[1]),Zn(t[2]),Zn(t[3])))>>>0:(t=Rn.exec(e))?(Qn(Gn(t[1]),Zn(t[2]),Zn(t[3]))|Xn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Jn=(e,t,n)=>{if(dn.fun(e))return e;if(dn.arr(e))return Jn({range:e,output:t,extrapolate:n});if(dn.str(e.output[0]))return yn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var Kn=1.70158,er=1.525*Kn,tr=Kn+1,nr=2*Math.PI/3,rr=2*Math.PI/4.5,ir=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},or={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>tr*e*e*e-Kn*e*e,easeOutBack:e=>1+tr*Math.pow(e-1,3)+Kn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-er)/2:(Math.pow(2*e-2,2)*((er+1)*(2*e-2)+er)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*nr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*nr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*rr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*rr)/2+1,easeInBounce:e=>1-ir(1-e),easeOutBounce:ir,easeInOutBounce:e=>e<.5?(1-ir(1-2*e))/2:(1+ir(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},ar=Symbol.for("FluidValue.get"),sr=Symbol.for("FluidValue.observers"),lr=e=>Boolean(e&&e[ar]),cr=e=>e&&e[ar]?e[ar]():e,ur=e=>e[sr]||null;function dr(e,t){const n=e[sr];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var hr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");pr(this,e)}},pr=(e,t)=>yr(e,ar,t);function fr(e,t){if(e[ar]){let n=e[sr];n||yr(e,sr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function gr(e,t){const n=e[sr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[sr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var mr,yr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),vr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,br=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,wr=new RegExp(`(${vr.source})(%|[a-z]+)`,"i"),Fr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Sr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,_r=e=>{const[t,n]=Br(e);if(!t||wn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Sr.test(n)?_r(n):n||e},Br=e=>{const t=Sr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},xr=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,$r=e=>{mr||(mr=Fn?new RegExp(`(${Object.keys(Fn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>cr(e).replace(Sr,_r).replace(br,Yn).replace(mr,Yn))),n=t.map((e=>e.match(vr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Jn({...e,output:t})));return e=>{const n=!wr.test(t[0])&&t.find((e=>wr.test(e)))?.replace(vr,"");let i=0;return t[0].replace(vr,(()=>`${r[i++](e)}${n||""}`)).replace(Fr,xr)}},kr="react-spring: ",Dr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${kr}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Or=Dr(console.warn);var Ir=Dr(console.warn);function Er(e){return dn.str(e)&&("#"==e[0]||/\d/.test(e)||!wn()&&Sr.test(e)||e in(Fn||{}))}var Ar=wn()?i:o,Pr=()=>{const e=s(!1);return Ar((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Cr(){const e=a()[1],t=Pr();return()=>{t.current&&e(Math.random())}}var Hr=e=>i(e,jr),jr=[];function zr(e){const t=s();return i((()=>{t.current=e})),t.current}var Tr=Symbol.for("Animated:node"),Mr=e=>e&&e[Tr],Rr=(e,t)=>{return n=e,r=Tr,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Vr=e=>e&&e[Tr]&&e[Tr].getPayload(),Nr=class{constructor(){Rr(this,this)}getPayload(){return this.payload||[]}},Lr=class extends Nr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,dn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Lr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return dn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,dn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Wr=class extends Lr{constructor(e){super(0),this._string=null,this._toString=Jn({output:[e,e]})}static create(e){return new Wr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(dn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Jn({output:[this.getValue(),e]})),this._value=0,super.reset()}},qr={dependencies:null},Qr=class extends Nr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return fn(this.source,((n,r)=>{var i;(i=n)&&i[Tr]===i?t[r]=n.getValue(e):lr(n)?t[r]=cr(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&pn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return fn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qr.dependencies&&lr(e)&&qr.dependencies.add(e);const t=Vr(e);t&&pn(t,(e=>this.add(e)))}},Ur=class extends Qr{constructor(e){super(e)}static create(e){return new Ur(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Gr)),!0)}};function Gr(e){return(Er(e)?Wr:Lr).create(e)}function Xr(e){const t=Mr(e);return t?t.constructor:dn.arr(e)?Ur:Er(e)?Wr:Lr}var Zr=(e,t)=>{const r=!dn.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((o,a)=>{const l=s(null),u=r&&c((e=>{l.current=function(e,t){e&&(dn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;qr.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Qr(e),qr.dependencies=null,[e,n]}(o,t),p=Cr(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Yr(f,h),m=s();Ar((()=>(m.current=g,pn(h,(e=>fr(e,g))),()=>{m.current&&(pn(m.current.deps,(e=>gr(e,m.current))),Qt.cancel(m.current.update))}))),i(f,[]),Hr((()=>()=>{const e=m.current;pn(e.deps,(t=>gr(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:u})}))},Yr=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qt.write(this.update)}};var Jr=Symbol.for("AnimatedComponent"),Kr=e=>dn.str(e)?e:e&&dn.str(e.displayName)?e.displayName:dn.fun(e)&&e.name||null;function ei(e,...t){return dn.fun(e)?e(...t):e}var ti=(e,t)=>!0===e||!!(t&&e&&(dn.fun(e)?e(t):gn(e).includes(t))),ni=(e,t)=>dn.obj(e)?t&&e[t]:e,ri=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ii=e=>e,oi=(e,t=ii)=>{let n=ai;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);dn.und(n)||(r[i]=n)}return r},ai=["config","onProps","onStart","onChange","onPause","onResume","onRest"],si={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function li(e){const t=function(e){const t={};let n=0;if(fn(e,((e,r)=>{si[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return fn(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function ci(e){return e=cr(e),dn.arr(e)?e.map(ci):Er(e)?Wt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ui(e){return dn.fun(e)||dn.arr(e)&&dn.obj(e[0])}var di={tension:170,friction:26,mass:1,damping:1,easing:or.linear,clamp:!1},hi=class{constructor(){this.velocity=0,Object.assign(this,di)}};function pi(e,t){if(dn.und(t.decay)){const n=!dn.und(t.tension)||!dn.und(t.friction);!n&&dn.und(t.frequency)&&dn.und(t.damping)&&dn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var fi=[],gi=class{constructor(){this.changed=!1,this.values=fi,this.toValues=null,this.fromValues=fi,this.config=new hi,this.immediate=!1}};function mi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=ti(n.cancel??r?.cancel,t);if(u)p();else{dn.und(n.pause)||(i.paused=ti(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||ti(e,t)),l=ei(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Qt.now()}function h(){l>0&&!Wt.skipAnimation?(i.delayed=!0,c=Qt.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var yi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?wi(e.get()):t.every((e=>e.noop))?vi(e.get()):bi(e.get(),t.every((e=>e.finished))),vi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),bi=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),wi=e=>({value:e,cancelled:!0,finished:!1});function Fi(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=oi(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&wi(r)||i!==n.asyncId&&bi(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new _i,a=new Bi;return(async()=>{if(Wt.skipAnimation)throw Si(n),a.result=bi(r,!1),d(a),a;p(o);const s=dn.obj(e)?{...e}:{...t,to:e};s.parentId=i,fn(c,((e,t)=>{dn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Wt.skipAnimation)return Si(n),bi(r,!1);try{let t;t=dn.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=bi(r.get(),!0,!1)}catch(e){if(e instanceof _i)g=e.result;else{if(!(e instanceof Bi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return dn.fun(a)&&Qt.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Si(e,t){mn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var _i=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Bi=class extends Error{constructor(){super("SkipAnimationSignal")}},xi=e=>e instanceof ki,$i=1,ki=class extends hr{constructor(){super(...arguments),this.id=$i++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Mr(this);return e&&e.getValue()}to(...e){return Wt.to(this,e)}interpolate(...e){return Or(`${kr}The "interpolate" function is deprecated in v9 (use "to" instead)`),Wt.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){dr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||On.sort(this),dr(this,{type:"priority",parent:this,priority:e})}},Di=Symbol.for("SpringPhase"),Oi=e=>(1&e[Di])>0,Ii=e=>(2&e[Di])>0,Ei=e=>(4&e[Di])>0,Ai=(e,t)=>t?e[Di]|=3:e[Di]&=-3,Pi=(e,t)=>t?e[Di]|=4:e[Di]&=-5,Ci=class extends ki{constructor(e,t){if(super(),this.animation=new gi,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!dn.und(e)||!dn.und(t)){const n=dn.obj(e)?{...e}:{...t,from:e};dn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ii(this)||this._state.asyncTo)||Ei(this)}get goal(){return cr(this.animation.to)}get velocity(){const e=Mr(this);return e instanceof Lr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Oi(this)}get isAnimating(){return Ii(this)}get isPaused(){return Ei(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=Vr(r.to);!a&&lr(r.to)&&(i=gn(cr(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Wr?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=dn.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(dn.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!dn.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=Mr(this),l=s.getValue();if(t){const e=cr(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Qt.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ii(this)){const{to:e,config:t}=this.animation;Qt.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return dn.und(e)?(n=this.queue||[],this.queue=[]):n=[dn.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>yi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Si(this._state,e&&this._lastCallId),Qt.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=dn.obj(n)?n[t]:n,(null==n||ui(n))&&(n=void 0),r=dn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Oi(this)||(e.reverse&&([n,r]=[r,n]),r=cr(r),dn.und(r)?Mr(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,oi(e,((e,t)=>/^on/.test(t)?ni(e,n):e))),Vi(this,e,"onProps"),Ni(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return mi(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Ei(this)||(Pi(this,!0),bn(o.pauseQueue),Ni(this,"onPause",bi(this,Hi(this,this.animation.to)),this))},resume:()=>{Ei(this)&&(Pi(this,!1),Ii(this)&&this._resume(),bn(o.resumeQueue),Ni(this,"onResume",bi(this,Hi(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ji(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(wi(this));const r=!dn.und(e.to),i=!dn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(wi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!dn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!hn(d,c);h&&(s.from=d),d=cr(d);const p=!hn(u,l);p&&this._focus(u);const f=ui(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(pi(n={...n},t),t={...n,...t}),pi(e,t),Object.assign(e,t);for(const t in di)null==e[t]&&(e[t]=di[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;dn.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,ei(t.config,o),t.config!==a.config?ei(a.config,o):void 0);let v=Mr(this);if(!v||dn.und(u))return n(bi(this,!0));const b=dn.und(t.reset)?i&&!t.default:!dn.und(d)&&ti(t.reset,o),w=b?d:this.get(),F=ci(u),S=dn.num(F)||dn.arr(F)||Er(F),_=!f&&(!S||ti(a.immediate||t.immediate,o));if(p){const e=Xr(u);if(e!==v.constructor){if(!_)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(F)}}const B=v.constructor;let x=lr(u),$=!1;if(!x){const e=b||!Oi(this)&&h;(p||e)&&($=hn(ci(w),F),x=!$),(hn(s.immediate,_)||_)&&hn(g.decay,m)&&hn(g.velocity,y)||(x=!0)}if($&&Ii(this)&&(s.changed&&!b?x=!0:x||this._stop(l)),!f&&((x||lr(l))&&(s.values=v.getPayload(),s.toValues=lr(u)?null:B==Wr?[1]:gn(F)),s.immediate!=_&&(s.immediate=_,_||b||this._set(l)),x)){const{onRest:e}=s;pn(Ri,(e=>Vi(this,t,e)));const r=bi(this,Hi(this,l));bn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Qt.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?ei(a.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),f?n(Fi(t.to,t,this._state,this)):x?this._start():Ii(this)&&!p?this._pendingCalls.add(n):n(vi(w))}_focus(e){const t=this.animation;e!==t.to&&(ur(this)&&this._detach(),t.to=e,ur(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;lr(t)&&(fr(t,this),xi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;lr(e)&&gr(e,this)}_set(e,t=!0){const n=cr(e);if(!dn.und(n)){const e=Mr(this);if(!e||!hn(n,e.getValue())){const r=Xr(n);e&&e.constructor==r?e.setValue(n):Rr(this,r.create(n)),e&&Qt.batchedUpdates((()=>{this._onChange(n,t)}))}}return Mr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ni(this,"onStart",bi(this,Hi(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ei(this.animation.onChange,e,this)),ei(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Mr(this).reset(cr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ii(this)||(Ai(this,!0),Ei(this)||this._resume())}_resume(){Wt.skipAnimation?this.finish():On.start(this)}_stop(e,t){if(Ii(this)){Ai(this,!1);const n=this.animation;pn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),dr(this,{type:"idle",parent:this});const r=t?wi(this.get()):bi(this.get(),Hi(this,e??n.to));bn(this._pendingCalls,r),n.changed&&(n.changed=!1,Ni(this,"onRest",r,this))}}};function Hi(e,t){const n=ci(t);return hn(ci(e.get()),n)}function ji(e,t=e.loop,n=e.to){const r=ei(t);if(r){const i=!0!==r&&li(r),o=(i||e).reverse,a=!i||i.reset;return zi({...e,loop:t,default:!1,pause:void 0,to:!o||ui(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function zi(e){const{to:t,from:n}=e=li(e),r=new Set;return dn.obj(t)&&Mi(t,r),dn.obj(n)&&Mi(n,r),e.keys=r.size?Array.from(r):null,e}function Ti(e){const t=zi(e);return dn.und(t.default)&&(t.default=oi(t)),t}function Mi(e,t){fn(e,((e,n)=>null!=e&&t.add(n)))}var Ri=["onStart","onRest","onChange","onPause","onResume"];function Vi(e,t,n){e.animation[n]=t[n]!==ri(t,n)?ni(t[n],e.key):void 0}function Ni(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Li=["onStart","onChange","onRest"],Wi=1,qi=class{constructor(e,t){this.id=Wi++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];dn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(zi(e)),this}start(e){let{queue:t}=this;return e?t=gn(e).map(zi):this.queue=[],this._flush?this._flush(this,t):(Ji(this,t),Qi(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;pn(gn(t),(t=>n[t].stop(!!e)))}else Si(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(dn.und(e))this.start({pause:!0});else{const t=this.springs;pn(gn(e),(e=>t[e].pause()))}return this}resume(e){if(dn.und(e))this.start({pause:!1});else{const t=this.springs;pn(gn(e),(e=>t[e].resume()))}return this}each(e){fn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,mn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&mn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,mn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qt.onFrame(this._onFrame)}};function Qi(e,t){return Promise.all(t.map((t=>Ui(e,t)))).then((t=>yi(e,t)))}async function Ui(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=dn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=dn.arr(i)||dn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):pn(Li,(n=>{const r=t[n];if(dn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,bn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===ri(t,"cancel");(u||p&&d.asyncId)&&h.push(mi(++e._lastAsyncId,{props:t,state:d,actions:{pause:un,resume:un,start(t,n){p?(Si(d,e._lastAsyncId),n(wi(e))):(t.onRest=s,n(Fi(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=yi(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=ji(t,a,i);if(n)return Ji(e,[n]),Ui(e,n,!0)}return l&&Qt.batchedUpdates((()=>l(f,e,e.item))),f}function Gi(e,t){const n={...e.springs};return t&&pn(gn(t),(e=>{dn.und(e.keys)&&(e=zi(e)),dn.obj(e.to)||(e={...e,to:void 0}),Yi(n,e,(e=>Zi(e)))})),Xi(e,n),n}function Xi(e,t){fn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,fr(t,e))}))}function Zi(e,t){const n=new Ci;return n.key=e,t&&fr(n,t),n}function Yi(e,t,n){t.keys&&pn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ji(e,t){pn(t,(t=>{Yi(e.springs,t,(t=>Zi(t,e)))}))}var Ki,eo,to=({children:e,...t})=>{const r=u(no),o=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),o=r.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return i((()=>{r.current=l,o==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=no;return n.createElement(c,{value:t},e)},no=(Ki=to,eo={},Object.assign(Ki,n.createContext(eo)),Ki.Provider._context=Ki,Ki.Consumer._context=Ki,Ki);to.Provider=no.Provider,to.Consumer=no.Consumer;var ro=()=>{const e=[],t=function(t){Ir(`${kr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return pn(e,((e,i)=>{if(dn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return pn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return pn(e,(e=>e.resume(...arguments))),this},t.set=function(t){pn(e,((e,n)=>{const r=dn.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return pn(e,((e,r)=>{if(dn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return pn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return pn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return dn.fun(e)?e(n,t):e};return t._getProps=n,t};function io(e,t){const n=dn.fun(e),[[r],i]=function(e,t,n){const r=dn.fun(t)&&t;r&&!n&&(n=[]);const i=d((()=>r||3==arguments.length?ro():void 0),[]),o=s(0),a=Cr(),l=d((()=>({ctrls:[],queue:[],flush(e,t){const n=Gi(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Qi(e,t):new Promise((r=>{Xi(e,n),l.queue.push((()=>{r(Qi(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),h=[],p=zr(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new qi(null,l.flush)),n=r?r(i,e):t[i];n&&(h[i]=Ti(n))}}d((()=>{pn(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),d((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Gi(e,h[t]))),m=u(to),y=zr(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ar((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],pn(e,(e=>e()))),pn(c.current,((e,t)=>{i?.add(e),v&&e.start({default:m});const n=h[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Hr((()=>()=>{pn(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var oo=class extends ki{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Jn(...t);const n=this._get(),r=Xr(n);Rr(this,r.create(n))}advance(e){const t=this._get();hn(t,this.get())||(Mr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&so(this._active)&&lo(this)}_get(){const e=dn.arr(this.source)?this.source.map(cr):gn(cr(this.source));return this.calc(...e)}_start(){this.idle&&!so(this._active)&&(this.idle=!1,pn(Vr(this),(e=>{e.done=!1})),Wt.skipAnimation?(Qt.batchedUpdates((()=>this.advance())),lo(this)):On.start(this))}_attach(){let e=1;pn(gn(this.source),(t=>{lr(t)&&fr(t,this),xi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){pn(gn(this.source),(e=>{lr(e)&&gr(e,this)})),this._active.clear(),lo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=gn(this.source).reduce(((e,t)=>Math.max(e,(xi(t)?t.priority:0)+1)),0))}};function ao(e){return!1!==e.idle}function so(e){return!e.size||Array.from(e).every(ao)}function lo(e){e.idle||(e.idle=!0,pn(Vr(e),(e=>{e.done=!0})),dr(e,{type:"idle",parent:e}))}Wt.assign({createStringInterpolator:$r,to:(e,t)=>new oo(e,t)});var co=/^--/;function uo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||co.test(e)||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}var ho={};var po={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fo=["Webkit","Ms","Moz","O"];po=Object.keys(po).reduce(((e,t)=>(fo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),po);var go=/^(matrix|translate|scale|rotate|skew)/,mo=/^(translate)/,yo=/^(rotate|skew)/,vo=(e,t)=>dn.num(e)&&0!==e?e+t:e,bo=(e,t)=>dn.arr(e)?e.every((e=>bo(e,t))):dn.num(e)?e===t:parseFloat(e)===t,wo=class extends Qr{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>vo(e,"px"))).join(",")})`,bo(e,0)]))),fn(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(go.test(t)){if(delete r[t],dn.und(e))return;const n=mo.test(t)?"px":yo.test(t)?"deg":"";i.push(gn(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${vo(i,n)})`,bo(i,0)]:e=>[`${t}(${e.map((e=>vo(e,n))).join(",")})`,bo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Fo(i,o)),super(r)}},Fo=class extends hr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return pn(this.inputs,((n,r)=>{const i=cr(n[0]),[o,a]=this.transforms[r](dn.arr(i)?i:n.map(cr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&pn(this.inputs,(e=>pn(e,(e=>lr(e)&&fr(e,this)))))}observerRemoved(e){0==e&&pn(this.inputs,(e=>pn(e,(e=>lr(e)&&gr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),dr(this,e)}};Wt.assign({batchedUpdates:w,createStringInterpolator:$r,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var So=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Qr(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Kr(e)||"Anonymous";return(e=dn.str(e)?o[e]||(o[e]=Zr(e,i)):e[Jr]||(e[Jr]=Zr(e,i))).displayName=`Animated(${t})`,e};return fn(e,((t,n)=>{dn.arr(e)&&(n=Kr(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:ho[t]||(ho[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=uo(t,r[t]);co.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new wo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),_o=So.animated;const Bo=y.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,xo=y.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Mt.Neutral[5]};
    background-color: ${Mt.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,$o=y(xo)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Nt.mobileL} {
        display: none;
        visibility: hidden;
    }
`,ko=y(xo)`
    display: none;
    visibility: hidden;
    ${Nt.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,Do=y(_o.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Mt.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${Mt.Neutral[5]};

    ${e=>e.$showDrawer?v`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:v`
                  border: 0;
                  padding: 0;
              `};
`,Oo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Io={collections:{base:{D1:{fontFamily:Oo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Eo=e=>t=>{const n=t.theme,r=Ht(Io,n[jt.textStyleScheme]);return n.options&&n.options.textStyle?Ct(r,e,n.options.textStyle):Ct(r,e)},Ao={D1:{fontFamily:Eo("D1.fontFamily"),fontSize:Eo("D1.fontSize"),fontWeight:Eo("D1.fontWeight"),lineHeight:Eo("D1.lineHeight"),letterSpacing:Eo("D1.letterSpacing")},D2:{fontFamily:Eo("D2.fontFamily"),fontSize:Eo("D2.fontSize"),fontWeight:Eo("D2.fontWeight"),lineHeight:Eo("D2.lineHeight"),letterSpacing:Eo("D2.letterSpacing")},D3:{fontFamily:Eo("D3.fontFamily"),fontSize:Eo("D3.fontSize"),fontWeight:Eo("D3.fontWeight"),lineHeight:Eo("D3.lineHeight"),letterSpacing:Eo("D3.letterSpacing")},D4:{fontFamily:Eo("D4.fontFamily"),fontSize:Eo("D4.fontSize"),fontWeight:Eo("D4.fontWeight"),lineHeight:Eo("D4.lineHeight"),letterSpacing:Eo("D4.letterSpacing")},DBody:{fontFamily:Eo("DBody.fontFamily"),fontSize:Eo("DBody.fontSize"),fontWeight:Eo("DBody.fontWeight"),lineHeight:Eo("DBody.lineHeight"),letterSpacing:Eo("DBody.letterSpacing")},H1:{fontFamily:Eo("H1.fontFamily"),fontSize:Eo("H1.fontSize"),fontWeight:Eo("H1.fontWeight"),lineHeight:Eo("H1.lineHeight"),letterSpacing:Eo("H1.letterSpacing")},H2:{fontFamily:Eo("H2.fontFamily"),fontSize:Eo("H2.fontSize"),fontWeight:Eo("H2.fontWeight"),lineHeight:Eo("H2.lineHeight"),letterSpacing:Eo("H2.letterSpacing")},H3:{fontFamily:Eo("H3.fontFamily"),fontSize:Eo("H3.fontSize"),fontWeight:Eo("H3.fontWeight"),lineHeight:Eo("H3.lineHeight"),letterSpacing:Eo("H3.letterSpacing")},H4:{fontFamily:Eo("H4.fontFamily"),fontSize:Eo("H4.fontSize"),fontWeight:Eo("H4.fontWeight"),lineHeight:Eo("H4.lineHeight"),letterSpacing:Eo("H4.letterSpacing")},H5:{fontFamily:Eo("H5.fontFamily"),fontSize:Eo("H5.fontSize"),fontWeight:Eo("H5.fontWeight"),lineHeight:Eo("H5.lineHeight"),letterSpacing:Eo("H5.letterSpacing")},H6:{fontFamily:Eo("H6.fontFamily"),fontSize:Eo("H6.fontSize"),fontWeight:Eo("H6.fontWeight"),lineHeight:Eo("H6.lineHeight"),letterSpacing:Eo("H6.letterSpacing")},Body:{fontFamily:Eo("Body.fontFamily"),fontSize:Eo("Body.fontSize"),fontWeight:Eo("Body.fontWeight"),lineHeight:Eo("Body.lineHeight"),letterSpacing:Eo("Body.letterSpacing")},BodySmall:{fontFamily:Eo("BodySmall.fontFamily"),fontSize:Eo("BodySmall.fontSize"),fontWeight:Eo("BodySmall.fontWeight"),lineHeight:Eo("BodySmall.lineHeight"),letterSpacing:Eo("BodySmall.letterSpacing")},XSmall:{fontFamily:Eo("XSmall.fontFamily"),fontSize:Eo("XSmall.fontSize"),fontWeight:Eo("XSmall.fontWeight"),lineHeight:Eo("XSmall.lineHeight"),letterSpacing:Eo("XSmall.letterSpacing")}},Po=e=>{switch(e){case 700:case"bold":return Oo.Bold;case 600:case"semibold":return Oo.Semibold;case 300:case"light":return Oo.Light;case 400:case"regular":return Oo.Regular;default:return""}},Co=(e,t)=>n=>{var r;const i=Ao[e].fontFamily(n),o=Ao[e].fontWeight(n);return Object.values(Oo).includes(i)?v`
                font-family: ${Po(t)||Po(o)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=Ho(t)||o)&&void 0!==r?r:"normal"};
        `},Ho=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jo=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},zo=Co,To=(e,t,n=!1)=>r=>{const i=Ao[e],o=i.fontSize(r);return v`
            ${Co(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Mo=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${jo(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${jo(n)}
        `;var Ro;!function(e){e.D1=y.h1`
        ${e=>v`
                ${To("D1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${To("D2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${To("D3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${To("D4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${To("DBody",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${To("H1",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${To("H2",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${To("H3",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${To("H4",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${To("H5",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${To("H6",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${To("Body",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${To("BodySmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${To("XSmall",e.weight,e.paragraph)}
                color: ${Mt.Neutral[1]};
                ${Mo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Lo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Lo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ro||(Ro={}));const Vo=y.a`
    ${e=>v`
            ${To(e.textStyle,e.weight)}
            color: ${Mt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Mt.Secondary};

                svg {
                    color: ${Mt.Secondary};
                }
            }
        `}
`,No=y(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Lo=n=>{var{external:r=!1,children:i}=n,o=B(n,["external","children"]);return e(Vo,Object.assign({},o,{children:[i,r&&t(No,{})]}))};var Wo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Wo||(Wo={}));const qo=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Qo=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Uo=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Mt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Qo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Go=y(Uo)`
    animation-delay: -0.45s;
`,Xo=y(Uo)`
    animation-delay: -0.3s;
`,Zo=y(Uo)`
    animation-delay: -0.15s;
`,Yo={collections:{base:{InputBoxShadow:v`
        inset 0 0 4px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 4px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:v`
        inset 0 0 3px 0px ${Mt.Shadow.Accent}
    `,InputErrorBoxShadow:v`
        inset 0 0 3px 0px ${Mt.Shadow.Red}
    `,ElevationBoxShadow:v`
      0px 2px 8px ${Mt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Jo=e=>t=>{var n;const r=t.theme,i=Ht(Yo,r[jt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ct(i,e,r.options.designToken):Ct(i,e)},Ko={InputBoxShadow:Jo("InputBoxShadow"),InputErrorBoxShadow:Jo("InputErrorBoxShadow"),ElevationBoxShadow:Jo("ElevationBoxShadow"),Table:{Header:Jo("Table.Header"),Cell:{Primary:Jo("Table.Cell.Primary"),Secondary:Jo("Table.Cell.Secondary"),Selected:Jo("Table.Cell.Selected"),Hover:Jo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Jo("Button.Danger.BackgroundColor"),Hover:Jo("Button.Danger.Hover"),Primary:Jo("Button.Danger.Primary"),Border:Jo("Button.Danger.Border")}}},ea=y.button`
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
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ko.Button.Danger.Border:Mt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Ko.Button.Danger.Primary:Mt.Primary};
                    }
                `;case"light":return v`
                    background-color: ${Mt.Neutral[8]};
                    border: 1px solid ${Mt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Ko.Button.Danger.Primary:Mt.Primary};
                    }
                `;case"disabled":return v`
                    background-color: ${Mt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Mt.Neutral[3]};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ko.Button.Danger.Primary:Mt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Ko.Button.Danger.Hover:Mt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${e.$buttonIsDanger?Ko.Button.Danger.BackgroundColor:Mt.Primary};
                    border: 1px solid transparent;

                    ${Nt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Mt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${To("H5","semibold")}
                    }

                    ${Nt.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${To("H4","semibold")}
                    }

                    ${Nt.mobileS} {
                        height: auto;
                    }
                `}
`,ta=y((({color:n,className:r,size:i=18})=>e(qo,Object.assign({className:r,$size:i,$color:n},{children:[t(Uo,{id:"inner1",$size:i-2,$borderWidth:2}),t(Go,{id:"inner2",$size:i-2,$borderWidth:2}),t(Xo,{id:"inner3",$size:i-2,$borderWidth:2}),t(Zo,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ko.Button.Danger.Primary:Mt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Mt.Neutral[3](e);break;default:t=Mt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,na={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ea,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(ta,Object.assign({},u)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ea,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(ta,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},ra=y.li`
    width: 100%;
`,ia=y(na.Default)`
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
            ${zo("XSmall","regular")}
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
                background-color: ${Mt.Accent.Light[5]};
                color: ${Mt.Primary} !important;
            }

            span {
                ${zo("XSmall","semibold")}
                color: ${Mt.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&v`
            span {
                div {
                    background-color: ${Mt.Accent.Light[5]};
                }

                span {
                    ${zo("XSmall","semibold")}
                    color: ${Mt.Primary};
                }
            }
        `}
`,oa=y.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,aa=y(Ro.XSmall)``,sa=h({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),la=y.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`,ca=y.div`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Mt.Neutral[5]};
`;var ua=function(e,t){return ua=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ua(e,t)};var da=function(){return da=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},da.apply(this,arguments)};var ha="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var pa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fa="object"==typeof ha&&ha&&ha.Object===Object&&ha,ga="object"==typeof self&&self&&self.Object===Object&&self,ma=fa||ga||Function("return this")(),ya=ma,va=function(){return ya.Date.now()},ba=/\s/;var wa=function(e){for(var t=e.length;t--&&ba.test(e.charAt(t)););return t},Fa=/^\s+/;var Sa=function(e){return e?e.slice(0,wa(e)+1).replace(Fa,""):e},_a=ma.Symbol,Ba=_a,xa=Object.prototype,$a=xa.hasOwnProperty,ka=xa.toString,Da=Ba?Ba.toStringTag:void 0;var Oa=function(e){var t=$a.call(e,Da),n=e[Da];try{e[Da]=void 0;var r=!0}catch(e){}var i=ka.call(e);return r&&(t?e[Da]=n:delete e[Da]),i},Ia=Object.prototype.toString;var Ea=Oa,Aa=function(e){return Ia.call(e)},Pa=_a?_a.toStringTag:void 0;var Ca=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Pa&&Pa in Object(e)?Ea(e):Aa(e)},Ha=function(e){return null!=e&&"object"==typeof e};var ja=Sa,za=pa,Ta=function(e){return"symbol"==typeof e||Ha(e)&&"[object Symbol]"==Ca(e)},Ma=/^[-+]0x[0-9a-f]+$/i,Ra=/^0b[01]+$/i,Va=/^0o[0-7]+$/i,Na=parseInt;var La=pa,Wa=va,qa=function(e){if("number"==typeof e)return e;if(Ta(e))return NaN;if(za(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=za(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ja(e);var n=Ra.test(e);return n||Va.test(e)?Na(e.slice(2),n?2:8):Ma.test(e)?NaN:+e},Qa=Math.max,Ua=Math.min;var Ga=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=Wa();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Ua(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=Wa(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=qa(t)||0,La(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Qa(qa(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Wa())},y},Xa=Ga,Za=pa;var Ya=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Za(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Xa(e,t,{leading:r,maxWait:t,trailing:i})},Ja=function(e,t,n,r){switch(t){case"debounce":return Ga(e,n,r);case"throttle":return Ya(e,n,r);default:return e}},Ka=function(e){return"function"==typeof e},es=function(){return"undefined"==typeof window},ts=function(e){return e instanceof Element||e instanceof HTMLDocument},ns=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&Ka(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!es()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(es())return null;if(t)return document.querySelector(t);if(r&&ts(r))return r;if(n.targetRef&&ts(n.targetRef.current))return n.targetRef.current;var i=F(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ns(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!es()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ka(t)?"renderProp":Ka(r)?"childFunction":f(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=g(),n.observableElement=null,es()||(n.resizeHandler=Ja(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ua(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){es()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return p(e,c)}return p(e,l);case"childArray":return(e=i).map((function(e){return!!e&&p(e,l)}));default:return n.createElement(a,null)}}}(m);var rs=es()?i:o;const is=y(_o.li)``,os=y(na.Default)`
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
        ${zo("H5","semibold")}
        font-size: 1rem !important;
        color: ${Mt.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Mt.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&v`
                    color: ${Mt.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&v`
            background-color: ${Mt.Accent.Light[4]};
        `}
`,as=y(_o.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ss=y.div`
    align-self: center;
    padding-left: 0.5rem;
`,ls=y(_)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Mt.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,cs=y.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,us=y(_o.ul)``,ds=y.li``,hs=y(na.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${zo("H5","regular")}
        font-size: 1rem !important;
        color: ${Mt.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${Mt.Accent.Light[5]};
        span {
            ${zo("H5","semibold")}
            color: ${Mt.Primary} !important;
        }
    }
`,ps=Object.assign((n=>{var{fixed:r=!0,children:o}=n,l=B(n,["fixed","children"]);const c=s(null),[u,h]=a(void 0),[p,f]=a(void 0),[g,m]=a(void 0),[y,v]=a(!1),b=d((()=>({currentItem:u,selectedItem:p,previouslySelectedItemId:g,setCurrentItem:h,setSelectedItem:f,setPreviouslySelectedItemId:m})),[u,p,g,h,f,m]),w=io({width:y?240:0,borderRightWidth:y?1:0,borderTopWidth:y?1:0,borderBottomWidth:y?1:0,borderLeftWidth:0});return((e,t,n="window",r)=>{const o=s();i((()=>{o.current=t}),[t]),i((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("click",(e=>{c.current&&!c.current.contains(e.target)&&(f({itemId:g||(p?p.itemId:void 0),content:void 0}),m(void 0),h(void 0))}),"window",!0),i((()=>{v(p&&!!p.content||u&&!!u.content)}),[u,p]),t(sa.Provider,Object.assign({value:b},{children:e(Bo,Object.assign({$fixed:r},l,{ref:c,onMouseLeave:()=>{h(void 0)}},{children:[t($o,{children:o}),t(Do,Object.assign({style:w,$showDrawer:y,"data-testid":"sidenav-drawer"},{children:u&&u.content||p&&p.content})),t(ko,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,o=B(n,["separator","children"]);return e(la,Object.assign({},o,{children:[i,r&&t(ca,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:o,title:a,onClick:s}=n,l=B(n,["children","icon","title","onClick"]);const c=l.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:d,previouslySelectedItemId:h,selectedItem:p,setCurrentItem:f,setPreviouslySelectedItemId:g,setSelectedItem:m}=u(sa);i((()=>{l.selected&&m({itemId:c,content:void 0})}),[l.selected]);return t(ra,{children:e(ia,Object.assign({styleType:"link",type:"button",onClick:()=>{g((()=>{if(r&&p)return h||p.itemId})()),f({itemId:c,content:r}),m({itemId:c,content:r}),s&&!r&&s(c)},onMouseEnter:()=>{f({itemId:c,content:r})}},l,{$highlight:p&&p.itemId===c||d&&d.itemId===c},{children:[t(oa,{children:o}),t(aa,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:l}=n,c=B(n,["id","title","onClick","children"]);const[d,h]=a(!0),[p,f]=a(!1),{currentItem:g,setSelectedItem:m,setPreviouslySelectedItemId:y,setCurrentItem:v}=u(sa),b=io({from:{opacity:0},to:{opacity:1}}),w=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=s(n),y=s(null),v=null!=p?p:y,b=s(),w=a({width:void 0,height:void 0}),F=w[0],S=w[1];return rs((function(){if(!es()){var e=ns(g,S,u,h);b.current=Ja((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!es()&&e({width:r,height:i}),m.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,g,f,v.current]),da({ref:v},F)}(),F=w.ref,S=io({height:l&&d?w.height:0});return e(is,Object.assign({onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)}},c,{style:b},{children:[e(os,Object.assign({styleType:"link",type:"button",onClick:()=>{l?h(!d):(m({itemId:g.itemId,content:void 0}),v(void 0),y(void 0),o&&o(r))},$highlight:p&&d,$noChildren:!l},{children:[t(cs,{children:i}),l&&t(ss,{children:t(ls,{"aria-hidden":!0,$expanded:d})})]})),t(as,Object.assign({style:S},{children:t(us,Object.assign({ref:F},{children:l}))}))]}))},DrawerSubitem:e=>{var{id:n,title:r,onClick:i}=e,o=B(e,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=u(sa);return t(ds,Object.assign({},o,{children:t(hs,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:a.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}});export{ps as Sidenav};
//# sourceMappingURL=index.js.map
