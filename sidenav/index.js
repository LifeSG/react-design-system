import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{useEffect as i,useLayoutEffect as o,useState as a,useRef as s,forwardRef as l,useCallback as c,useContext as u,useMemo as d,createContext as h,cloneElement as p,isValidElement as f,createRef as g,PureComponent as m}from"react";import y,{css as v,keyframes as b}from"styled-components";import{unstable_batchedUpdates as w,findDOMNode as S}from"react-dom";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O=Array.isArray,k="object"==typeof x&&x&&x.Object===Object&&x,B="object"==typeof self&&self&&self.Object===Object&&self,I=k||B||Function("return this")(),E=I.Symbol,P=E,A=Object.prototype,D=A.hasOwnProperty,j=A.toString,z=P?P.toStringTag:void 0;var H=function(e){var t=D.call(e,z),n=e[z];try{e[z]=void 0;var r=!0}catch(e){}var i=j.call(e);return r&&(t?e[z]=n:delete e[z]),i},C=Object.prototype.toString;var M=H,T=function(e){return C.call(e)},R=E?E.toStringTag:void 0;var V=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?M(e):T(e)};var N=V,L=function(e){return null!=e&&"object"==typeof e};var W=function(e){return"symbol"==typeof e||L(e)&&"[object Symbol]"==N(e)},q=O,Q=W,U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/;var X=function(e,t){if(q(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Q(e))||(G.test(e)||!U.test(e)||null!=t&&e in Object(t))};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=V,J=Z;var K,ee=function(e){if(!J(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},te=I["__core-js_shared__"],ne=(K=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"";var re=function(e){return!!ne&&ne in e},ie=Function.prototype.toString;var oe=ee,ae=re,se=Z,le=function(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ce=/^\[object .+?Constructor\]$/,ue=Function.prototype,de=Object.prototype,he=ue.toString,pe=de.hasOwnProperty,fe=RegExp("^"+he.call(pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ge=function(e){return!(!se(e)||ae(e))&&(oe(e)?fe:ce).test(le(e))},me=function(e,t){return null==e?void 0:e[t]};var ye=function(e,t){var n=me(e,t);return ge(n)?n:void 0},ve=ye(Object,"create"),be=ve;var we=function(){this.__data__=be?be(null):{},this.size=0};var Se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_e=ve,Fe=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(_e){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Fe.call(t,e)?t[e]:void 0},xe=ve,Oe=Object.prototype.hasOwnProperty;var ke=ve;var Be=we,Ie=Se,Ee=$e,Pe=function(e){var t=this.__data__;return xe?void 0!==t[e]:Oe.call(t,e)},Ae=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ke&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=Be,De.prototype.delete=Ie,De.prototype.get=Ee,De.prototype.has=Pe,De.prototype.set=Ae;var je=De;var ze=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var Ce=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},Me=Ce,Te=Array.prototype.splice;var Re=Ce;var Ve=Ce;var Ne=Ce;var Le=ze,We=function(e){var t=this.__data__,n=Me(t,e);return!(n<0)&&(n==t.length-1?t.pop():Te.call(t,n,1),--this.size,!0)},qe=function(e){var t=this.__data__,n=Re(t,e);return n<0?void 0:t[n][1]},Qe=function(e){return Ve(this.__data__,e)>-1},Ue=function(e,t){var n=this.__data__,r=Ne(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ge(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ge.prototype.clear=Le,Ge.prototype.delete=We,Ge.prototype.get=qe,Ge.prototype.has=Qe,Ge.prototype.set=Ue;var Xe=Ge,Ze=ye(I,"Map"),Ye=je,Je=Xe,Ke=Ze;var et=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var tt=function(e,t){var n=e.__data__;return et(t)?n["string"==typeof t?"string":"hash"]:n.map},nt=tt;var rt=tt;var it=tt;var ot=tt;var at=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ke||Je),string:new Ye}},st=function(e){var t=nt(this,e).delete(e);return this.size-=t?1:0,t},lt=function(e){return rt(this,e).get(e)},ct=function(e){return it(this,e).has(e)},ut=function(e,t){var n=ot(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=lt,dt.prototype.has=ct,dt.prototype.set=ut;var ht=dt;function pt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(pt.Cache||ht),n}pt.Cache=ht;var ft=pt;var gt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mt=/\\(\\)?/g,yt=function(e){var t=ft(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(gt,(function(e,n,r,i){t.push(r?i.replace(mt,"$1"):n||e)})),t}));var vt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},bt=O,wt=W,St=E?E.prototype:void 0,_t=St?St.toString:void 0;var Ft=function e(t){if("string"==typeof t)return t;if(bt(t))return vt(t,e)+"";if(wt(t))return _t?_t.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},$t=Ft;var xt=O,Ot=X,kt=yt,Bt=function(e){return null==e?"":$t(e)};var It=W;var Et=function(e,t){return xt(e)?e:Ot(e,t)?[e]:kt(Bt(e))},Pt=function(e){if("string"==typeof e||It(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var At=function(e,t){for(var n=0,r=(t=Et(t,e)).length;null!=e&&n<r;)e=e[Pt(t[n++])];return n&&n==r?e:void 0};var Dt=function(e,t,n){var r=null==e?void 0:At(e,t);return void 0===r?n:r};const jt=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,zt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const Ct={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,r=zt(Ct,n[Ht.colorScheme]);return n.options&&n.options.color?jt(r,e,n.options.color):jt(r,e)},Tt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}},Rt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Vt=e=>Object.keys(Rt).reduce(((t,n)=>{const r=Rt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Nt=Vt("max-width");Vt("min-width");let Lt=an();const Wt=e=>tn(e,Lt);let qt=an();Wt.write=e=>tn(e,qt);let Qt=an();Wt.onStart=e=>tn(e,Qt);let Ut=an();Wt.onFrame=e=>tn(e,Ut);let Gt=an();Wt.onFinish=e=>tn(e,Gt);let Xt=[];Wt.setTimeout=(e,t)=>{let n=Wt.now()+t,r=()=>{let e=Xt.findIndex((e=>e.cancel==r));~e&&Xt.splice(e,1),Kt-=~e?1:0},i={time:n,handler:e,cancel:r};return Xt.splice(Zt(n),0,i),Kt+=1,nn(),i};let Zt=e=>~(~Xt.findIndex((t=>t.time>e))||~Xt.length);Wt.cancel=e=>{Qt.delete(e),Ut.delete(e),Gt.delete(e),Lt.delete(e),qt.delete(e)},Wt.sync=e=>{en=!0,Wt.batchedUpdates(e),en=!1},Wt.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Wt.onStart(n)}return r.handler=e,r.cancel=()=>{Qt.delete(n),t=null},r};let Yt="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Wt.use=e=>Yt=e,Wt.now="undefined"!=typeof performance?()=>performance.now():Date.now,Wt.batchedUpdates=e=>e(),Wt.catch=console.error,Wt.frameLoop="always",Wt.advance=()=>{"demand"!==Wt.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):on()};let Jt=-1,Kt=0,en=!1;function tn(e,t){en?(t.delete(e),e(0)):(t.add(e),nn())}function nn(){Jt<0&&(Jt=0,"demand"!==Wt.frameLoop&&Yt(rn))}function rn(){~Jt&&(Yt(rn),Wt.batchedUpdates(on))}function on(){let e=Jt;Jt=Wt.now();let t=Zt(Jt);t&&(sn(Xt.splice(0,t),(e=>e.handler())),Kt-=t),Kt?(Qt.flush(),Lt.flush(e?Math.min(64,Jt-e):16.667),Ut.flush(),qt.flush(),Gt.flush()):Jt=-1}function an(){let e=new Set,t=e;return{add(n){Kt+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Kt-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Kt-=t.size,sn(t,(t=>t(n)&&e.add(t))),Kt+=e.size,t=e)}}}function sn(e,t){e.forEach((e=>{try{t(e)}catch(e){Wt.catch(e)}}))}function ln(){}const cn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function un(e,t){if(cn.arr(e)){if(!cn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const dn=(e,t)=>e.forEach(t);function hn(e,t,n){if(cn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const pn=e=>cn.und(e)?[]:cn.arr(e)?e:[e];function fn(e,t){if(e.size){const n=Array.from(e);e.clear(),dn(n,t)}}const gn=(e,...t)=>fn(e,(e=>e(...t))),mn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let yn,vn,bn=null,wn=!1,Sn=ln;var _n=Object.freeze({__proto__:null,get createStringInterpolator(){return yn},get to(){return vn},get colors(){return bn},get skipAnimation(){return wn},get willAdvance(){return Sn},assign:e=>{e.to&&(vn=e.to),e.now&&(Wt.now=e.now),void 0!==e.colors&&(bn=e.colors),null!=e.skipAnimation&&(wn=e.skipAnimation),e.createStringInterpolator&&(yn=e.createStringInterpolator),e.requestAnimationFrame&&Wt.use(e.requestAnimationFrame),e.batchedUpdates&&(Wt.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Sn=e.willAdvance),e.frameLoop&&(Wt.frameLoop=e.frameLoop)}});const Fn=new Set;let $n=[],xn=[],On=0;const kn={get idle(){return!Fn.size&&!$n.length},start(e){On>e.priority?(Fn.add(e),Wt.onStart(Bn)):(In(e),Wt(Pn))},advance:Pn,sort(e){if(On)Wt.onFrame((()=>kn.sort(e)));else{const t=$n.indexOf(e);~t&&($n.splice(t,1),En(e))}},clear(){$n=[],Fn.clear()}};function Bn(){Fn.forEach(In),Fn.clear(),Wt(Pn)}function In(e){$n.includes(e)||En(e)}function En(e){$n.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}($n,(t=>t.priority>e.priority)),0,e)}function Pn(e){const t=xn;for(let n=0;n<$n.length;n++){const r=$n[n];On=r.priority,r.idle||(Sn(r),r.advance(e),r.idle||t.push(r))}return On=0,xn=$n,xn.length=0,$n=t,$n.length>0}const An="[-+]?\\d*\\.?\\d+",Dn=An+"%";function jn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const zn=new RegExp("rgb"+jn(An,An,An)),Hn=new RegExp("rgba"+jn(An,An,An,An)),Cn=new RegExp("hsl"+jn(An,Dn,Dn)),Mn=new RegExp("hsla"+jn(An,Dn,Dn,An)),Tn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Rn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Vn=/^#([0-9a-fA-F]{6})$/,Nn=/^#([0-9a-fA-F]{8})$/;function Ln(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Wn(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Ln(i,r,e+1/3),a=Ln(i,r,e),s=Ln(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function qn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Qn(e){return(parseFloat(e)%360+360)%360/360}function Un(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Gn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Xn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Vn.exec(e))?parseInt(t[1]+"ff",16)>>>0:bn&&void 0!==bn[e]?bn[e]:(t=zn.exec(e))?(qn(t[1])<<24|qn(t[2])<<16|qn(t[3])<<8|255)>>>0:(t=Hn.exec(e))?(qn(t[1])<<24|qn(t[2])<<16|qn(t[3])<<8|Un(t[4]))>>>0:(t=Tn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Nn.exec(e))?parseInt(t[1],16)>>>0:(t=Rn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Cn.exec(e))?(255|Wn(Qn(t[1]),Gn(t[2]),Gn(t[3])))>>>0:(t=Mn.exec(e))?(Wn(Qn(t[1]),Gn(t[2]),Gn(t[3]))|Un(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Zn=(e,t,n)=>{if(cn.fun(e))return e;if(cn.arr(e))return Zn({range:e,output:t,extrapolate:n});if(cn.str(e.output[0]))return yn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Yn=1.70158,Jn=1.525*Yn,Kn=Yn+1,er=2*Math.PI/3,tr=2*Math.PI/4.5,nr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},rr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Kn*e*e*e-Yn*e*e,easeOutBack:e=>1+Kn*Math.pow(e-1,3)+Yn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Jn)/2:(Math.pow(2*e-2,2)*((Jn+1)*(2*e-2)+Jn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*er),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*er)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*tr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*tr)/2+1,easeInBounce:e=>1-nr(1-e),easeOutBounce:nr,easeInOutBounce:e=>e<.5?(1-nr(1-2*e))/2:(1+nr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}const or=Symbol.for("FluidValue.get"),ar=Symbol.for("FluidValue.observers"),sr=e=>Boolean(e&&e[or]),lr=e=>e&&e[or]?e[or]():e,cr=e=>e[ar]||null;function ur(e,t){let n=e[ar];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class dr{constructor(e){if(this[or]=void 0,this[ar]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");hr(this,e)}}const hr=(e,t)=>gr(e,or,t);function pr(e,t){if(e[or]){let n=e[ar];n||gr(e,ar,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function fr(e,t){let n=e[ar];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ar]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const gr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),mr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,yr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,vr=new RegExp(`(${mr.source})(%|[a-z]+)`,"i"),br=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,wr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Sr=e=>{const[t,n]=_r(e);if(!t||mn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&wr.test(n)?Sr(n):n||e},_r=e=>{const t=wr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Fr;const $r=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,xr=e=>{Fr||(Fr=bn?new RegExp(`(${Object.keys(bn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>lr(e).replace(wr,Sr).replace(yr,Xn).replace(Fr,Xn))),n=t.map((e=>e.match(mr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Zn(ir({},e,{output:t}))));return e=>{var n;const i=!vr.test(t[0])&&(null==(n=t.find((e=>vr.test(e))))?void 0:n.replace(mr,""));let o=0;return t[0].replace(mr,(()=>`${r[o++](e)}${i||""}`)).replace(br,$r)}},Or="react-spring: ",kr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Or}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Br=kr(console.warn);const Ir=kr(console.warn);function Er(e){return cn.str(e)&&("#"==e[0]||/\d/.test(e)||!mn()&&wr.test(e)||e in(bn||{}))}const Pr=mn()?i:o,Ar=()=>{const e=s(!1);return Pr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Dr(){const e=a()[1],t=Ar();return()=>{t.current&&e(Math.random())}}const jr=e=>i(e,zr),zr=[];function Hr(e){const t=s();return i((()=>{t.current=e})),t.current}const Cr=Symbol.for("Animated:node"),Mr=e=>e&&e[Cr],Tr=(e,t)=>{return n=e,r=Cr,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Rr=e=>e&&e[Cr]&&e[Cr].getPayload();class Vr{constructor(){this.payload=void 0,Tr(this,this)}getPayload(){return this.payload||[]}}class Nr extends Vr{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,cn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Nr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return cn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,cn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Lr extends Nr{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Zn({output:[e,e]})}static create(e){return new Lr(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(cn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Zn({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Wr={dependencies:null};class qr extends Vr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return hn(this.source,((n,r)=>{var i;(i=n)&&i[Cr]===i?t[r]=n.getValue(e):sr(n)?t[r]=lr(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&dn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return hn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Wr.dependencies&&sr(e)&&Wr.dependencies.add(e);const t=Rr(e);t&&dn(t,(e=>this.add(e)))}}class Qr extends qr{constructor(e){super(e)}static create(e){return new Qr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ur)),!0)}}function Ur(e){return(Er(e)?Lr:Nr).create(e)}function Gr(e){const t=Mr(e);return t?t.constructor:cn.arr(e)?Qr:Er(e)?Lr:Nr}function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}const Zr=(e,t)=>{const r=!cn.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((o,a)=>{const l=s(null),u=r&&c((e=>{l.current=function(e,t){e&&(cn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;Wr.dependencies=n,e.style&&(e=Xr({},e,{style:t.createAnimatedStyle(e.style)}));return e=new qr(e),Wr.dependencies=null,[e,n]}(o,t),p=Dr(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Yr(f,h),m=s();Pr((()=>(m.current=g,dn(h,(e=>pr(e,g))),()=>{m.current&&(dn(m.current.deps,(e=>fr(e,m.current))),Wt.cancel(m.current.update))}))),i(f,[]),jr((()=>()=>{const e=m.current;dn(e.deps,(t=>fr(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,Xr({},y,{ref:u}))}))};class Yr{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Wt.write(this.update)}}const Jr=Symbol.for("AnimatedComponent"),Kr=e=>cn.str(e)?e:e&&cn.str(e.displayName)?e.displayName:cn.fun(e)&&e.name||null;function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}function ti(e,...t){return cn.fun(e)?e(...t):e}const ni=(e,t)=>!0===e||!!(t&&e&&(cn.fun(e)?e(t):pn(e).includes(t))),ri=(e,t)=>cn.obj(e)?t&&e[t]:e,ii=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,oi=e=>e,ai=(e,t=oi)=>{let n=si;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);cn.und(n)||(r[i]=n)}return r},si=["config","onProps","onStart","onChange","onPause","onResume","onRest"],li={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ci(e){const t=function(e){const t={};let n=0;if(hn(e,((e,r)=>{li[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return hn(e,((e,r)=>r in t||(n[r]=e))),n}return ei({},e)}function ui(e){return e=lr(e),cn.arr(e)?e.map(ui):Er(e)?_n.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function di(e){return cn.fun(e)||cn.arr(e)&&cn.obj(e[0])}const hi=ei({},{tension:170,friction:26},{mass:1,damping:1,easing:rr.linear,clamp:!1});class pi{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,hi)}}function fi(e,t){if(cn.und(t.decay)){const n=!cn.und(t.tension)||!cn.und(t.friction);!n&&cn.und(t.frequency)&&cn.und(t.damping)&&cn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const gi=[];class mi{constructor(){this.changed=!1,this.values=gi,this.toValues=null,this.fromValues=gi,this.to=void 0,this.from=void 0,this.config=new pi,this.immediate=!1}}function yi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ni(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{cn.und(n.pause)||(i.paused=ni(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ni(e,t)),c=ti(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-Wt.now()}function p(){c>0&&!_n.skipAnimation?(i.delayed=!0,u=Wt.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(ei({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const vi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Si(e.get()):t.every((e=>e.noop))?bi(e.get()):wi(e.get(),t.every((e=>e.finished))),bi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),wi=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Si=e=>({value:e,cancelled:!0,finished:!1});function _i(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ai(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Si(r)||i!==n.asyncId&&wi(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new $i,a=new xi;return(async()=>{if(_n.skipAnimation)throw Fi(n),a.result=wi(r,!1),d(a),a;p(o);const s=cn.obj(e)?ei({},e):ei({},t,{to:e});s.parentId=i,hn(c,((e,t)=>{cn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(_n.skipAnimation)return Fi(n),wi(r,!1);try{let t;t=cn.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=wi(r.get(),!0,!1)}catch(e){if(e instanceof $i)g=e.result;else{if(!(e instanceof xi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return cn.fun(a)&&Wt.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Fi(e,t){fn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class $i extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class xi extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Oi=e=>e instanceof Bi;let ki=1;class Bi extends dr{constructor(...e){super(...e),this.id=ki++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Mr(this);return e&&e.getValue()}to(...e){return _n.to(this,e)}interpolate(...e){return Br(`${Or}The "interpolate" function is deprecated in v9 (use "to" instead)`),_n.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ur(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||kn.sort(this),ur(this,{type:"priority",parent:this,priority:e})}}const Ii=Symbol.for("SpringPhase"),Ei=e=>(1&e[Ii])>0,Pi=e=>(2&e[Ii])>0,Ai=e=>(4&e[Ii])>0,Di=(e,t)=>t?e[Ii]|=3:e[Ii]&=-3,ji=(e,t)=>t?e[Ii]|=4:e[Ii]&=-5;class zi extends Bi{constructor(e,t){if(super(),this.key=void 0,this.animation=new mi,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!cn.und(e)||!cn.und(t)){const n=cn.obj(e)?ei({},e):ei({},t,{from:e});cn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Pi(this)||this._state.asyncTo)||Ai(this)}get goal(){return lr(this.animation.to)}get velocity(){const e=Mr(this);return e instanceof Nr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ei(this)}get isAnimating(){return Pi(this)}get isPaused(){return Ai(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Rr(r.to);!a&&sr(r.to)&&(o=pn(lr(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Lr?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=cn.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(cn.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!cn.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Mr(this),l=s.getValue();if(t){const e=lr(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Wt.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Pi(this)){const{to:e,config:t}=this.animation;Wt.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return cn.und(e)?(n=this.queue||[],this.queue=[]):n=[cn.obj(e)?e:ei({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>vi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Fi(this._state,e&&this._lastCallId),Wt.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=cn.obj(n)?n[t]:n,(null==n||di(n))&&(n=void 0),r=cn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ei(this)||(e.reverse&&([n,r]=[r,n]),r=lr(r),cn.und(r)?Mr(this)||this._set(n):this._set(r)),i}_update(e,t){let n=ei({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,ai(n,((e,t)=>/^on/.test(t)?ri(e,r):e))),Ni(this,n,"onProps"),Li(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return yi(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Ai(this)||(ji(this,!0),gn(a.pauseQueue),Li(this,"onPause",wi(this,Hi(this,this.animation.to)),this))},resume:()=>{Ai(this)&&(ji(this,!1),Pi(this)&&this._resume(),gn(a.resumeQueue),Li(this,"onResume",wi(this,Hi(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Ci(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Si(this));const r=!cn.und(e.to),i=!cn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Si(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!cn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!un(d,c);h&&(s.from=d),d=lr(d);const p=!un(u,l);p&&this._focus(u);const f=di(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(fi(n=ei({},n),t),t=ei({},n,t)),fi(e,t),Object.assign(e,t);for(const t in hi)null==e[t]&&(e[t]=hi[t]);let{mass:r,frequency:i,damping:o}=e;cn.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,ti(t.config,o),t.config!==a.config?ti(a.config,o):void 0);let v=Mr(this);if(!v||cn.und(u))return n(wi(this,!0));const b=cn.und(t.reset)?i&&!t.default:!cn.und(d)&&ni(t.reset,o),w=b?d:this.get(),S=ui(u),_=cn.num(S)||cn.arr(S)||Er(S),F=!f&&(!_||ni(a.immediate||t.immediate,o));if(p){const e=Gr(u);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(S)}}const $=v.constructor;let x=sr(u),O=!1;if(!x){const e=b||!Ei(this)&&h;(p||e)&&(O=un(ui(w),S),x=!O),(un(s.immediate,F)||F)&&un(g.decay,m)&&un(g.velocity,y)||(x=!0)}if(O&&Pi(this)&&(s.changed&&!b?x=!0:x||this._stop(l)),!f&&((x||sr(l))&&(s.values=v.getPayload(),s.toValues=sr(u)?null:$==Lr?[1]:pn(S)),s.immediate!=F&&(s.immediate=F,F||b||this._set(l)),x)){const{onRest:e}=s;dn(Vi,(e=>Ni(this,t,e)));const r=wi(this,Hi(this,l));gn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Wt.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?ti(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(_i(t.to,t,this._state,this)):x?this._start():Pi(this)&&!p?this._pendingCalls.add(n):n(bi(w))}_focus(e){const t=this.animation;e!==t.to&&(cr(this)&&this._detach(),t.to=e,cr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;sr(t)&&(pr(t,this),Oi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;sr(e)&&fr(e,this)}_set(e,t=!0){const n=lr(e);if(!cn.und(n)){const e=Mr(this);if(!e||!un(n,e.getValue())){const r=Gr(n);e&&e.constructor==r?e.setValue(n):Tr(this,r.create(n)),e&&Wt.batchedUpdates((()=>{this._onChange(n,t)}))}}return Mr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Li(this,"onStart",wi(this,Hi(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ti(this.animation.onChange,e,this)),ti(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Mr(this).reset(lr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Pi(this)||(Di(this,!0),Ai(this)||this._resume())}_resume(){_n.skipAnimation?this.finish():kn.start(this)}_stop(e,t){if(Pi(this)){Di(this,!1);const n=this.animation;dn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ur(this,{type:"idle",parent:this});const r=t?Si(this.get()):wi(this.get(),Hi(this,null!=e?e:n.to));gn(this._pendingCalls,r),n.changed&&(n.changed=!1,Li(this,"onRest",r,this))}}}function Hi(e,t){const n=ui(t);return un(ui(e.get()),n)}function Ci(e,t=e.loop,n=e.to){let r=ti(t);if(r){const i=!0!==r&&ci(r),o=(i||e).reverse,a=!i||i.reset;return Mi(ei({},e,{loop:t,default:!1,pause:void 0,to:!o||di(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Mi(e){const{to:t,from:n}=e=ci(e),r=new Set;return cn.obj(t)&&Ri(t,r),cn.obj(n)&&Ri(n,r),e.keys=r.size?Array.from(r):null,e}function Ti(e){const t=Mi(e);return cn.und(t.default)&&(t.default=ai(t)),t}function Ri(e,t){hn(e,((e,n)=>null!=e&&t.add(n)))}const Vi=["onStart","onRest","onChange","onPause","onResume"];function Ni(e,t,n){e.animation[n]=t[n]!==ii(t,n)?ri(t[n],e.key):void 0}function Li(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Wi=["onStart","onChange","onRest"];let qi=1;class Qi{constructor(e,t){this.id=qi++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(ei({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];cn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Mi(e)),this}start(e){let{queue:t}=this;return e?t=pn(e).map(Mi):this.queue=[],this._flush?this._flush(this,t):(Ki(this,t),Ui(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;dn(pn(t),(t=>n[t].stop(!!e)))}else Fi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(cn.und(e))this.start({pause:!0});else{const t=this.springs;dn(pn(e),(e=>t[e].pause()))}return this}resume(e){if(cn.und(e))this.start({pause:!1});else{const t=this.springs;dn(pn(e),(e=>t[e].resume()))}return this}each(e){hn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,fn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&fn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,fn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Wt.onFrame(this._onFrame)}}function Ui(e,t){return Promise.all(t.map((t=>Gi(e,t)))).then((t=>vi(e,t)))}async function Gi(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=cn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=cn.arr(i)||cn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):dn(Wi,(n=>{const r=t[n];if(cn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,gn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===ii(t,"cancel");(u||p&&d.asyncId)&&h.push(yi(++e._lastAsyncId,{props:t,state:d,actions:{pause:ln,resume:ln,start(t,n){p?(Fi(d,e._lastAsyncId),n(Si(e))):(t.onRest=s,n(_i(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=vi(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Ci(t,a,i);if(n)return Ki(e,[n]),Gi(e,n,!0)}return l&&Wt.batchedUpdates((()=>l(f,e,e.item))),f}function Xi(e,t){const n=ei({},e.springs);return t&&dn(pn(t),(e=>{cn.und(e.keys)&&(e=Mi(e)),cn.obj(e.to)||(e=ei({},e,{to:void 0})),Ji(n,e,(e=>Yi(e)))})),Zi(e,n),n}function Zi(e,t){hn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,pr(t,e))}))}function Yi(e,t){const n=new zi;return n.key=e,t&&pr(n,t),n}function Ji(e,t,n){t.keys&&dn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ki(e,t){dn(t,(t=>{Ji(e.springs,t,(t=>Yi(t,e)))}))}const eo=["children"],to=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,eo);const o=u(no),l=r.pause||!!o.pause,c=r.immediate||!!o.immediate;r=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=s(),o=r.current;let l=o;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return i((()=>{r.current=l,o==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:d}=no;return n.createElement(d,{value:r},t)},no=(ro=to,io={},Object.assign(ro,n.createContext(io)),ro.Provider._context=ro,ro.Consumer._context=ro,ro);var ro,io;to.Provider=no.Provider,to.Consumer=no.Consumer;const oo=()=>{const e=[],t=function(t){Ir(`${Or}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return dn(e,((e,i)=>{if(cn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return dn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return dn(e,(e=>e.resume(...arguments))),this},t.set=function(t){dn(e,(e=>e.set(t)))},t.start=function(t){const n=[];return dn(e,((e,r)=>{if(cn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return dn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return dn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return cn.fun(e)?e(n,t):e};return t._getProps=n,t};function ao(e,t){const n=cn.fun(e),[[r],i]=function(e,t,n){const r=cn.fun(t)&&t;r&&!n&&(n=[]);const i=d((()=>r||3==arguments.length?oo():void 0),[]),o=s(0),a=Dr(),l=d((()=>({ctrls:[],queue:[],flush(e,t){const n=Xi(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ui(e,t):new Promise((r=>{Zi(e,n),l.queue.push((()=>{r(Ui(e,t))})),a()}))}})),[]),c=s([...l.ctrls]),h=[],p=Hr(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Qi(null,l.flush)),n=r?r(i,e):t[i];n&&(h[i]=Ti(n))}}d((()=>{dn(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),d((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Xi(e,h[t]))),m=u(to),y=Hr(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Pr((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],dn(e,(e=>e()))),dn(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=h[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),jr((()=>()=>{dn(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>ei({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let so;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(so||(so={}));class lo extends Bi{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Zn(...t);const n=this._get(),r=Gr(n);Tr(this,r.create(n))}advance(e){const t=this._get();un(t,this.get())||(Mr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&uo(this._active)&&ho(this)}_get(){const e=cn.arr(this.source)?this.source.map(lr):pn(lr(this.source));return this.calc(...e)}_start(){this.idle&&!uo(this._active)&&(this.idle=!1,dn(Rr(this),(e=>{e.done=!1})),_n.skipAnimation?(Wt.batchedUpdates((()=>this.advance())),ho(this)):kn.start(this))}_attach(){let e=1;dn(pn(this.source),(t=>{sr(t)&&pr(t,this),Oi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){dn(pn(this.source),(e=>{sr(e)&&fr(e,this)})),this._active.clear(),ho(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=pn(this.source).reduce(((e,t)=>Math.max(e,(Oi(t)?t.priority:0)+1)),0))}}function co(e){return!1!==e.idle}function uo(e){return!e.size||Array.from(e).every(co)}function ho(e){e.idle||(e.idle=!0,dn(Rr(e),(e=>{e.done=!0})),ur(e,{type:"idle",parent:e}))}function po(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}_n.assign({createStringInterpolator:xr,to:(e,t)=>new lo(e,t)});const fo=["style","children","scrollTop","scrollLeft","viewBox"],go=/^--/;function mo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||go.test(e)||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}const yo={};let vo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const bo=["Webkit","Ms","Moz","O"];vo=Object.keys(vo).reduce(((e,t)=>(bo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),vo);const wo=["x","y","z"],So=/^(matrix|translate|scale|rotate|skew)/,_o=/^(translate)/,Fo=/^(rotate|skew)/,$o=(e,t)=>cn.num(e)&&0!==e?e+t:e,xo=(e,t)=>cn.arr(e)?e.every((e=>xo(e,t))):cn.num(e)?e===t:parseFloat(e)===t;class Oo extends qr{constructor(e){let{x:t,y:n,z:r}=e,i=po(e,wo);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>$o(e,"px"))).join(",")})`,xo(e,0)]))),hn(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(So.test(t)){if(delete i[t],cn.und(e))return;const n=_o.test(t)?"px":Fo.test(t)?"deg":"";o.push(pn(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${$o(i,n)})`,xo(i,0)]:e=>[`${t}(${e.map((e=>$o(e,n))).join(",")})`,xo(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ko(o,a)),super(i)}}class ko extends dr{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return dn(this.inputs,((n,r)=>{const i=lr(n[0]),[o,a]=this.transforms[r](cn.arr(i)?i:n.map(lr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&dn(this.inputs,(e=>dn(e,(e=>sr(e)&&pr(e,this)))))}observerRemoved(e){0==e&&dn(this.inputs,(e=>dn(e,(e=>sr(e)&&fr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ur(this,e)}}const Bo=["scrollTop","scrollLeft"];_n.assign({batchedUpdates:w,createStringInterpolator:xr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Io=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new qr(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Kr(e)||"Anonymous";return(e=cn.str(e)?o[e]||(o[e]=Zr(e,i)):e[Jr]||(e[Jr]=Zr(e,i))).displayName=`Animated(${t})`,e};return hn(e,((t,n)=>{cn.arr(e)&&(n=Kr(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=po(r,fo),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:yo[t]||(yo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=mo(t,i[t]);go.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Oo(e),getComponentProps:e=>po(e,Bo)}),Eo=Io.animated,Po=y.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,Ao=y.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Tt.Neutral[5]};
    background-color: ${Tt.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,Do=y(Ao)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Nt.mobileL} {
        display: none;
        visibility: hidden;
    }
`,jo=y(Ao)`
    display: none;
    visibility: hidden;
    ${Nt.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,zo=y(Eo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Tt.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${Tt.Neutral[5]};

    ${e=>e.$showDrawer?v`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:v`
                  border: 0;
                  padding: 0;
              `};
`,Ho={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Co={collections:{base:{D1:{fontFamily:Ho.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ho.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ho.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ho.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ho.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ho.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ho.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ho.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ho.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ho.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ho.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ho.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ho.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ho.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Mo=e=>t=>{const n=t.theme,r=zt(Co,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?jt(r,e,n.options.textStyle):jt(r,e)},To={D1:{fontFamily:Mo("D1.fontFamily"),fontSize:Mo("D1.fontSize"),fontWeight:Mo("D1.fontWeight"),lineHeight:Mo("D1.lineHeight"),letterSpacing:Mo("D1.letterSpacing")},D2:{fontFamily:Mo("D2.fontFamily"),fontSize:Mo("D2.fontSize"),fontWeight:Mo("D2.fontWeight"),lineHeight:Mo("D2.lineHeight"),letterSpacing:Mo("D2.letterSpacing")},D3:{fontFamily:Mo("D3.fontFamily"),fontSize:Mo("D3.fontSize"),fontWeight:Mo("D3.fontWeight"),lineHeight:Mo("D3.lineHeight"),letterSpacing:Mo("D3.letterSpacing")},D4:{fontFamily:Mo("D4.fontFamily"),fontSize:Mo("D4.fontSize"),fontWeight:Mo("D4.fontWeight"),lineHeight:Mo("D4.lineHeight"),letterSpacing:Mo("D4.letterSpacing")},DBody:{fontFamily:Mo("DBody.fontFamily"),fontSize:Mo("DBody.fontSize"),fontWeight:Mo("DBody.fontWeight"),lineHeight:Mo("DBody.lineHeight"),letterSpacing:Mo("DBody.letterSpacing")},H1:{fontFamily:Mo("H1.fontFamily"),fontSize:Mo("H1.fontSize"),fontWeight:Mo("H1.fontWeight"),lineHeight:Mo("H1.lineHeight"),letterSpacing:Mo("H1.letterSpacing")},H2:{fontFamily:Mo("H2.fontFamily"),fontSize:Mo("H2.fontSize"),fontWeight:Mo("H2.fontWeight"),lineHeight:Mo("H2.lineHeight"),letterSpacing:Mo("H2.letterSpacing")},H3:{fontFamily:Mo("H3.fontFamily"),fontSize:Mo("H3.fontSize"),fontWeight:Mo("H3.fontWeight"),lineHeight:Mo("H3.lineHeight"),letterSpacing:Mo("H3.letterSpacing")},H4:{fontFamily:Mo("H4.fontFamily"),fontSize:Mo("H4.fontSize"),fontWeight:Mo("H4.fontWeight"),lineHeight:Mo("H4.lineHeight"),letterSpacing:Mo("H4.letterSpacing")},H5:{fontFamily:Mo("H5.fontFamily"),fontSize:Mo("H5.fontSize"),fontWeight:Mo("H5.fontWeight"),lineHeight:Mo("H5.lineHeight"),letterSpacing:Mo("H5.letterSpacing")},H6:{fontFamily:Mo("H6.fontFamily"),fontSize:Mo("H6.fontSize"),fontWeight:Mo("H6.fontWeight"),lineHeight:Mo("H6.lineHeight"),letterSpacing:Mo("H6.letterSpacing")},Body:{fontFamily:Mo("Body.fontFamily"),fontSize:Mo("Body.fontSize"),fontWeight:Mo("Body.fontWeight"),lineHeight:Mo("Body.lineHeight"),letterSpacing:Mo("Body.letterSpacing")},BodySmall:{fontFamily:Mo("BodySmall.fontFamily"),fontSize:Mo("BodySmall.fontSize"),fontWeight:Mo("BodySmall.fontWeight"),lineHeight:Mo("BodySmall.lineHeight"),letterSpacing:Mo("BodySmall.letterSpacing")},XSmall:{fontFamily:Mo("XSmall.fontFamily"),fontSize:Mo("XSmall.fontSize"),fontWeight:Mo("XSmall.fontWeight"),lineHeight:Mo("XSmall.lineHeight"),letterSpacing:Mo("XSmall.letterSpacing")}},Ro=e=>{switch(e){case 700:case"bold":return Ho.Bold;case 600:case"semibold":return Ho.Semibold;case 300:case"light":return Ho.Light;case 400:case"regular":return Ho.Regular;default:return""}},Vo=(e,t)=>n=>{var r;const i=To[e].fontFamily(n),o=To[e].fontWeight(n);return Object.values(Ho).includes(i)?v`
                font-family: ${Ro(t)||Ro(o)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(r=No(t)||o)&&void 0!==r?r:"normal"};
        `},No=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Lo=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Wo=Vo,qo=(e,t,n=!1)=>r=>{const i=To[e],o=i.fontSize(r);return v`
            ${Vo(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${v`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Qo=(e=!1,t=!1,n=void 0)=>t?v`
            display: block;
            ${Lo(n)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Lo(n)}
        `;var Uo;!function(e){e.D1=y.h1`
        ${e=>v`
                ${qo("D1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>v`
                ${qo("D2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>v`
                ${qo("D3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>v`
                ${qo("D4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>v`
                ${qo("DBody",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>v`
                ${qo("H1",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>v`
                ${qo("H2",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>v`
                ${qo("H3",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>v`
                ${qo("H4",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>v`
                ${qo("H5",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>v`
                ${qo("H6",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>v`
                ${qo("Body",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>v`
                ${qo("BodySmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>v`
                ${qo("XSmall",e.weight,e.paragraph)}
                color: ${Tt.Neutral[1]};
                ${Qo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Zo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Uo||(Uo={}));const Go=y.a`
    ${e=>v`
            ${qo(e.textStyle,e.weight)}
            color: ${Tt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Tt.Secondary};

                svg {
                    color: ${Tt.Secondary};
                }
            }
        `}
`,Xo=y(_)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zo=n=>{var{external:r=!1,children:i}=n,o=$(n,["external","children"]);return e(Go,Object.assign({},o,{children:[i,r&&t(Xo,{})]}))};var Yo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Yo||(Yo={}));const Jo=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ko=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ea=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Tt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ko} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ta=y(ea)`
    animation-delay: -0.45s;
`,na=y(ea)`
    animation-delay: -0.3s;
`,ra=y(ea)`
    animation-delay: -0.15s;
`,ia=y.button`
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
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Primary(e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"light":return v`
                    background-color: ${Tt.Neutral[8](e)};
                    border: 1px solid ${Tt.Neutral[5](e)};

                    span {
                        color: ${Tt.Primary(e)};
                    }
                `;case"disabled":return v`
                    background-color: ${Tt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Tt.Neutral[3](e)};
                    }
                `;case"link":return v`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Tt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Tt.Secondary};
                        }
                    }
                `;default:return v`
                    background-color: ${Tt.Primary(e)};
                    border: 1px solid transparent;

                    ${Nt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Tt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?v`
                    height: 2.5rem;
                    span {
                        ${qo("H5","semibold")}
                    }

                    ${Nt.mobileS} {
                        height: auto;
                    }
                `:v`
                    height: 3rem;
                    span {
                        ${qo("H4","semibold")}
                    }

                    ${Nt.mobileS} {
                        height: auto;
                    }
                `}
`,oa=y((({color:n,className:r,size:i=18})=>e(Jo,Object.assign({className:r,$size:i,$color:n},{children:[t(ea,{id:"inner1",$size:i-2,$borderWidth:2}),t(ta,{id:"inner2",$size:i-2,$borderWidth:2}),t(na,{id:"inner3",$size:i-2,$borderWidth:2}),t(ra,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Tt.Primary(e);break;case"disabled":t=Tt.Neutral[3](e);break;default:t=Tt.Neutral[8](e)}return v`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,aa={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=$(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(ia,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(oa,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default"}=n,l=$(n,["children","disabled","loading","styleType"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(ia,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:o},c,l,{children:[a&&t(oa,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},sa=y.li`
    width: 100%;
`,la=y(aa.Default)`
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
            ${Wo("XSmall","regular")}
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
                background-color: ${Tt.Accent.Light[5]};
                color: ${Tt.Primary} !important;
            }

            span {
                ${Wo("XSmall","semibold")}
                color: ${Tt.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&v`
            span {
                div {
                    background-color: ${Tt.Accent.Light[5]};
                }

                span {
                    ${Wo("XSmall","semibold")}
                    color: ${Tt.Primary};
                }
            }
        `}
`,ca=y.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,ua=y(Uo.XSmall)``,da=h({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),ha=y.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`,pa=y.div`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Tt.Neutral[5]};
`;var fa=function(e,t){return fa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},fa(e,t)};var ga=function(){return ga=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ga.apply(this,arguments)};var ma="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ya=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},va="object"==typeof ma&&ma&&ma.Object===Object&&ma,ba="object"==typeof self&&self&&self.Object===Object&&self,wa=va||ba||Function("return this")(),Sa=wa,_a=function(){return Sa.Date.now()},Fa=/\s/;var $a=function(e){for(var t=e.length;t--&&Fa.test(e.charAt(t)););return t},xa=/^\s+/;var Oa=function(e){return e?e.slice(0,$a(e)+1).replace(xa,""):e},ka=wa.Symbol,Ba=ka,Ia=Object.prototype,Ea=Ia.hasOwnProperty,Pa=Ia.toString,Aa=Ba?Ba.toStringTag:void 0;var Da=function(e){var t=Ea.call(e,Aa),n=e[Aa];try{e[Aa]=void 0;var r=!0}catch(e){}var i=Pa.call(e);return r&&(t?e[Aa]=n:delete e[Aa]),i},ja=Object.prototype.toString;var za=Da,Ha=function(e){return ja.call(e)},Ca=ka?ka.toStringTag:void 0;var Ma=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ca&&Ca in Object(e)?za(e):Ha(e)},Ta=function(e){return null!=e&&"object"==typeof e};var Ra=Oa,Va=ya,Na=function(e){return"symbol"==typeof e||Ta(e)&&"[object Symbol]"==Ma(e)},La=/^[-+]0x[0-9a-f]+$/i,Wa=/^0b[01]+$/i,qa=/^0o[0-7]+$/i,Qa=parseInt;var Ua=ya,Ga=_a,Xa=function(e){if("number"==typeof e)return e;if(Na(e))return NaN;if(Va(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Va(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ra(e);var n=Wa.test(e);return n||qa.test(e)?Qa(e.slice(2),n?2:8):La.test(e)?NaN:+e},Za=Math.max,Ya=Math.min;var Ja=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=Ga();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Ya(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=Ga(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Xa(t)||0,Ua(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Za(Xa(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Ga())},y},Ka=Ja,es=ya;var ts=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return es(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ka(e,t,{leading:r,maxWait:t,trailing:i})},ns=function(e,t,n,r){switch(t){case"debounce":return Ja(e,n,r);case"throttle":return ts(e,n,r);default:return e}},rs=function(e){return"function"==typeof e},is=function(){return"undefined"==typeof window},os=function(e){return e instanceof Element||e instanceof HTMLDocument},as=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&rs(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!is()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(is())return null;if(t)return document.querySelector(t);if(r&&os(r))return r;if(n.targetRef&&os(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=as(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!is()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return rs(t)?"renderProp":rs(r)?"childFunction":f(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=g(),n.observableElement=null,is()||(n.resizeHandler=ns(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}fa(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){is()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return p(e,c)}return p(e,l);case"childArray":return(e=i).map((function(e){return!!e&&p(e,l)}));default:return n.createElement(a,null)}}}(m);var ss=is()?i:o;const ls=y(Eo.li)``,cs=y(aa.Default)`
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
        ${Wo("H5","semibold")}
        font-size: 1rem !important;
        color: ${Tt.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Tt.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&v`
                    color: ${Tt.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&v`
            background-color: ${Tt.Accent.Light[4]};
        `}
`,us=y(Eo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ds=y.div`
    align-self: center;
    padding-left: 0.5rem;
`,hs=y(F)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${Tt.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,ps=y.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,fs=y(Eo.ul)``,gs=y.li``,ms=y(aa.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${Wo("H5","regular")}
        font-size: 1rem !important;
        color: ${Tt.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${Tt.Accent.Light[5]};
        span {
            ${Wo("H5","semibold")}
            color: ${Tt.Primary} !important;
        }
    }
`,ys=Object.assign((n=>{var{fixed:r=!0,children:o}=n,l=$(n,["fixed","children"]);const c=s(null),[u,h]=a(void 0),[p,f]=a(void 0),[g,m]=a(void 0),[y,v]=a(!1),b=d((()=>({currentItem:u,selectedItem:p,previouslySelectedItemId:g,setCurrentItem:h,setSelectedItem:f,setPreviouslySelectedItemId:m})),[u,p,g,h,f,m]),w=ao({width:y?240:0,borderRightWidth:y?1:0,borderTopWidth:y?1:0,borderBottomWidth:y?1:0,borderLeftWidth:0});return((e,t,n="window",r)=>{const o=s();i((()=>{o.current=t}),[t]),i((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("click",(e=>{c.current&&!c.current.contains(e.target)&&(f({itemId:g||(p?p.itemId:void 0),content:void 0}),m(void 0),h(void 0))}),"window",!0),i((()=>{v(p&&!!p.content||u&&!!u.content)}),[u,p]),t(da.Provider,Object.assign({value:b},{children:e(Po,Object.assign({$fixed:r},l,{ref:c,onMouseLeave:()=>{h(void 0)}},{children:[t(Do,{children:o}),t(zo,Object.assign({style:w,$showDrawer:y,"data-testid":"sidenav-drawer"},{children:u&&u.content||p&&p.content})),t(jo,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,o=$(n,["separator","children"]);return e(ha,Object.assign({},o,{children:[i,r&&t(pa,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:o,title:a,onClick:s}=n,l=$(n,["children","icon","title","onClick"]);const c=l.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:d,previouslySelectedItemId:h,selectedItem:p,setCurrentItem:f,setPreviouslySelectedItemId:g,setSelectedItem:m}=u(da);i((()=>{l.selected&&m({itemId:c,content:void 0})}),[l.selected]);return t(sa,{children:e(la,Object.assign({styleType:"link",type:"button",onClick:()=>{g((()=>{if(r&&p)return h||p.itemId})()),f({itemId:c,content:r}),m({itemId:c,content:r}),s&&!r&&s(c)},onMouseEnter:()=>{f({itemId:c,content:r})}},l,{$highlight:p&&p.itemId===c||d&&d.itemId===c},{children:[t(ca,{children:o}),t(ua,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:l}=n,c=$(n,["id","title","onClick","children"]);const[d,h]=a(!0),[p,f]=a(!1),{currentItem:g,setSelectedItem:m,setPreviouslySelectedItemId:y,setCurrentItem:v}=u(da),b=ao({from:{opacity:0},to:{opacity:1}}),w=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=s(n),y=s(null),v=null!=p?p:y,b=s(),w=a({width:void 0,height:void 0}),S=w[0],_=w[1];return ss((function(){if(!is()){var e=as(g,_,u,h);b.current=ns((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!is()&&e({width:r,height:i}),m.current=!1}))}),r,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,l,u,h,g,f,v.current]),ga({ref:v},S)}(),S=w.ref,_=ao({height:l&&d?w.height:0});return e(ls,Object.assign({onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)}},c,{style:b},{children:[e(cs,Object.assign({styleType:"link",type:"button",onClick:()=>{l?h(!d):(m({itemId:g.itemId,content:void 0}),v(void 0),y(void 0),o&&o(r))},$highlight:p&&d,$noChildren:!l},{children:[t(ps,{children:i}),l&&t(ds,{children:t(hs,{"aria-hidden":!0,$expanded:d})})]})),t(us,Object.assign({style:_},{children:t(fs,Object.assign({ref:S},{children:l}))}))]}))},DrawerSubitem:e=>{var{id:n,title:r,onClick:i}=e,o=$(e,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=u(da);return t(gs,Object.assign({},o,{children:t(ms,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:a.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}});export{ys as Sidenav};
//# sourceMappingURL=index.js.map
