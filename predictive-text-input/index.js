import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useEffect as o,useImperativeHandle as s,useState as l,useLayoutEffect as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as $}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as w,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as F,CrossIcon as _}from"@lifesg/react-icons";import{MagnifierIcon as D}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";function k(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function O(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},C="object"==typeof A&&A&&A.Object===Object&&A,j=C,I="object"==typeof self&&self&&self.Object===Object&&self,T=j||I||Function("return this")(),P=T,z=function(){return P.Date.now()},H=/\s/;var L=function(e){for(var t=e.length;t--&&H.test(e.charAt(t)););return t},N=/^\s+/;var R=function(e){return e?e.slice(0,L(e)+1).replace(N,""):e},V=T.Symbol,W=V,Y=Object.prototype,q=Y.hasOwnProperty,U=Y.toString,Q=W?W.toStringTag:void 0;var Z=function(e){var t=q.call(e,Q),r=e[Q];try{e[Q]=void 0;var n=!0}catch(e){}var i=U.call(e);return n&&(t?e[Q]=r:delete e[Q]),i},G=Object.prototype.toString;var X=Z,J=function(e){return G.call(e)},K=V?V.toStringTag:void 0;var ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":K&&K in Object(e)?X(e):J(e)};var te=function(e){return null!=e&&"object"==typeof e},re=ee,ne=te;var ie=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},ae=R,oe=M,se=ie,le=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,ce=/^0o[0-7]+$/i,de=parseInt;var he=function(e){if("number"==typeof e)return e;if(se(e))return NaN;if(oe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ae(e);var r=ue.test(e);return r||ce.test(e)?de(e.slice(2),r?2:8):le.test(e)?NaN:+e},fe=M,pe=z,ge=he,me=Math.max,ye=Math.min;var ve=E((function(e,t,r){var n,i,a,o,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,a=i;return n=i=void 0,u=t,o=e.apply(a,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-u>=a}function g(){var e=pe();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?ye(r,a-(e-u)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,o)}function y(){var e=pe(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=ge(t)||0,fe(r)&&(c=!!r.leading,a=(d="maxWait"in r)?me(ge(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(pe())},y}));var be=Array.isArray,$e=be,we=ie,xe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/;var Fe=function(e,t){if($e(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!we(e))||(Se.test(e)||!xe.test(e)||null!=t&&e in Object(t))},_e=ee,De=M;var Be,ke=function(e){if(!De(e))return!1;var t=_e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Oe=T["__core-js_shared__"],Ae=(Be=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||""))?"Symbol(src)_1."+Be:"";var Ee=function(e){return!!Ae&&Ae in e},Me=Function.prototype.toString;var Ce=function(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},je=ke,Ie=Ee,Te=M,Pe=Ce,ze=/^\[object .+?Constructor\]$/,He=Function.prototype,Le=Object.prototype,Ne=He.toString,Re=Le.hasOwnProperty,Ve=RegExp("^"+Ne.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var We=function(e){return!(!Te(e)||Ie(e))&&(je(e)?Ve:ze).test(Pe(e))},Ye=function(e,t){return null==e?void 0:e[t]};var qe=function(e,t){var r=Ye(e,t);return We(r)?r:void 0},Ue=qe(Object,"create"),Qe=Ue;var Ze=function(){this.__data__=Qe?Qe(null):{},this.size=0};var Ge=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xe=Ue,Je=Object.prototype.hasOwnProperty;var Ke=function(e){var t=this.__data__;if(Xe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Je.call(t,e)?t[e]:void 0},et=Ue,tt=Object.prototype.hasOwnProperty;var rt=Ue;var nt=Ze,it=Ge,at=Ke,ot=function(e){var t=this.__data__;return et?void 0!==t[e]:tt.call(t,e)},st=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=rt&&void 0===t?"__lodash_hash_undefined__":t,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var ut=lt;var ct=function(){this.__data__=[],this.size=0};var dt=function(e,t){return e===t||e!=e&&t!=t},ht=dt;var ft=function(e,t){for(var r=e.length;r--;)if(ht(e[r][0],t))return r;return-1},pt=ft,gt=Array.prototype.splice;var mt=ft;var yt=ft;var vt=ft;var bt=ct,$t=function(e){var t=this.__data__,r=pt(t,e);return!(r<0)&&(r==t.length-1?t.pop():gt.call(t,r,1),--this.size,!0)},wt=function(e){var t=this.__data__,r=mt(t,e);return r<0?void 0:t[r][1]},xt=function(e){return yt(this.__data__,e)>-1},St=function(e,t){var r=this.__data__,n=vt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ft(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ft.prototype.clear=bt,Ft.prototype.delete=$t,Ft.prototype.get=wt,Ft.prototype.has=xt,Ft.prototype.set=St;var _t=Ft,Dt=qe(T,"Map"),Bt=ut,kt=_t,Ot=Dt;var At=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Et=function(e,t){var r=e.__data__;return At(t)?r["string"==typeof t?"string":"hash"]:r.map},Mt=Et;var Ct=Et;var jt=Et;var It=Et;var Tt=function(){this.size=0,this.__data__={hash:new Bt,map:new(Ot||kt),string:new Bt}},Pt=function(e){var t=Mt(this,e).delete(e);return this.size-=t?1:0,t},zt=function(e){return Ct(this,e).get(e)},Ht=function(e){return jt(this,e).has(e)},Lt=function(e,t){var r=It(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nt.prototype.clear=Tt,Nt.prototype.delete=Pt,Nt.prototype.get=zt,Nt.prototype.has=Ht,Nt.prototype.set=Lt;var Rt=Nt,Vt=Rt;function Wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Wt.Cache||Vt),r}Wt.Cache=Vt;var Yt=Wt;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ut=/\\(\\)?/g,Qt=function(e){var t=Yt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(qt,(function(e,r,n,i){t.push(n?i.replace(Ut,"$1"):r||e)})),t}));var Zt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Gt=be,Xt=ie,Jt=V?V.prototype:void 0,Kt=Jt?Jt.toString:void 0;var er=function e(t){if("string"==typeof t)return t;if(Gt(t))return Zt(t,e)+"";if(Xt(t))return Kt?Kt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},tr=er;var rr=be,nr=Fe,ir=Qt,ar=function(e){return null==e?"":tr(e)};var or=function(e,t){return rr(e)?e:nr(e,t)?[e]:ir(ar(e))},sr=ie;var lr=function(e){if("string"==typeof e||sr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ur=or,cr=lr;var dr=function(e,t){for(var r=0,n=(t=ur(t,e)).length;null!=e&&r<n;)e=e[cr(t[r++])];return r&&r==n?e:void 0},hr=dr;var fr=function(e,t,r){var n=null==e?void 0:hr(e,t);return void 0===n?r:n},pr=E(fr);const gr=(e,t,r)=>t?pr(r,t)||pr(e,t):r||e,mr=(e,t)=>{const r=t||e.defaultValue;return pr(e.collections,r)};var yr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yr||(yr={}));const vr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},br=e=>t=>{const r=t.theme,n=mr(vr,r[yr.colorScheme]);return r.options&&r.options.color?gr(n,e,r.options.color):gr(n,e)},$r={Brand:{1:br("Brand.1"),2:br("Brand.2"),3:br("Brand.3"),4:br("Brand.4"),5:br("Brand.5"),6:br("Brand.6")},Primary:br("Primary"),PrimaryDark:br("PrimaryDark"),Secondary:br("Secondary"),Accent:{Light:{1:br("Accent.Light.1"),2:br("Accent.Light.2"),3:br("Accent.Light.3"),4:br("Accent.Light.4"),5:br("Accent.Light.5"),6:br("Accent.Light.6")},Dark:{1:br("Accent.Dark.1"),2:br("Accent.Dark.2"),3:br("Accent.Dark.3")}},Neutral:{1:br("Neutral.1"),2:br("Neutral.2"),3:br("Neutral.3"),4:br("Neutral.4"),5:br("Neutral.5"),6:br("Neutral.6"),7:br("Neutral.7"),8:br("Neutral.8")},Validation:{Green:{Text:br("Validation.Green.Text"),Icon:br("Validation.Green.Icon"),Border:br("Validation.Green.Border"),Background:br("Validation.Green.Background")},Orange:{Text:br("Validation.Orange.Text"),Icon:br("Validation.Orange.Icon"),Border:br("Validation.Orange.Border"),Background:br("Validation.Orange.Background"),Badge:br("Validation.Orange.Badge")},Red:{Text:br("Validation.Red.Text"),Icon:br("Validation.Red.Icon"),Border:br("Validation.Red.Border"),Background:br("Validation.Red.Background")},Blue:{Text:br("Validation.Blue.Text"),Icon:br("Validation.Blue.Icon"),Border:br("Validation.Blue.Border"),Background:br("Validation.Blue.Background")}},Shadow:{Accent:br("Shadow.Accent"),Red:br("Shadow.Red"),Elevation:br("Shadow.Elevation")}},wr={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${$r.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${$r.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${$r.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${$r.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${$r.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${$r.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},xr=e=>t=>{var r;const n=t.theme,i=mr(wr,n[yr.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?gr(i,e,n.options.designToken):gr(i,e)},Sr={InputBoxShadow:xr("InputBoxShadow"),InputErrorBoxShadow:xr("InputErrorBoxShadow"),ElevationBoxShadow:xr("ElevationBoxShadow"),Table:{Header:xr("Table.Header"),Cell:{Primary:xr("Table.Cell.Primary"),Secondary:xr("Table.Cell.Secondary"),Selected:xr("Table.Cell.Selected"),Hover:xr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:xr("Button.Danger.BackgroundColor"),Hover:xr("Button.Danger.Hover"),Primary:xr("Button.Danger.Primary"),Border:xr("Button.Danger.Border")}}},Fr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_r={collections:{base:{D1:{fontFamily:Fr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Fr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Fr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Fr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Fr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Fr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Fr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Fr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Fr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Fr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Fr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Fr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Dr=e=>t=>{const r=t.theme,n=mr(_r,r[yr.textStyleScheme]);return r.options&&r.options.textStyle?gr(n,e,r.options.textStyle):gr(n,e)},Br={D1:{fontFamily:Dr("D1.fontFamily"),fontSize:Dr("D1.fontSize"),fontWeight:Dr("D1.fontWeight"),lineHeight:Dr("D1.lineHeight"),letterSpacing:Dr("D1.letterSpacing")},D2:{fontFamily:Dr("D2.fontFamily"),fontSize:Dr("D2.fontSize"),fontWeight:Dr("D2.fontWeight"),lineHeight:Dr("D2.lineHeight"),letterSpacing:Dr("D2.letterSpacing")},D3:{fontFamily:Dr("D3.fontFamily"),fontSize:Dr("D3.fontSize"),fontWeight:Dr("D3.fontWeight"),lineHeight:Dr("D3.lineHeight"),letterSpacing:Dr("D3.letterSpacing")},D4:{fontFamily:Dr("D4.fontFamily"),fontSize:Dr("D4.fontSize"),fontWeight:Dr("D4.fontWeight"),lineHeight:Dr("D4.lineHeight"),letterSpacing:Dr("D4.letterSpacing")},DBody:{fontFamily:Dr("DBody.fontFamily"),fontSize:Dr("DBody.fontSize"),fontWeight:Dr("DBody.fontWeight"),lineHeight:Dr("DBody.lineHeight"),letterSpacing:Dr("DBody.letterSpacing")},H1:{fontFamily:Dr("H1.fontFamily"),fontSize:Dr("H1.fontSize"),fontWeight:Dr("H1.fontWeight"),lineHeight:Dr("H1.lineHeight"),letterSpacing:Dr("H1.letterSpacing")},H2:{fontFamily:Dr("H2.fontFamily"),fontSize:Dr("H2.fontSize"),fontWeight:Dr("H2.fontWeight"),lineHeight:Dr("H2.lineHeight"),letterSpacing:Dr("H2.letterSpacing")},H3:{fontFamily:Dr("H3.fontFamily"),fontSize:Dr("H3.fontSize"),fontWeight:Dr("H3.fontWeight"),lineHeight:Dr("H3.lineHeight"),letterSpacing:Dr("H3.letterSpacing")},H4:{fontFamily:Dr("H4.fontFamily"),fontSize:Dr("H4.fontSize"),fontWeight:Dr("H4.fontWeight"),lineHeight:Dr("H4.lineHeight"),letterSpacing:Dr("H4.letterSpacing")},H5:{fontFamily:Dr("H5.fontFamily"),fontSize:Dr("H5.fontSize"),fontWeight:Dr("H5.fontWeight"),lineHeight:Dr("H5.lineHeight"),letterSpacing:Dr("H5.letterSpacing")},H6:{fontFamily:Dr("H6.fontFamily"),fontSize:Dr("H6.fontSize"),fontWeight:Dr("H6.fontWeight"),lineHeight:Dr("H6.lineHeight"),letterSpacing:Dr("H6.letterSpacing")},Body:{fontFamily:Dr("Body.fontFamily"),fontSize:Dr("Body.fontSize"),fontWeight:Dr("Body.fontWeight"),lineHeight:Dr("Body.lineHeight"),letterSpacing:Dr("Body.letterSpacing")},BodySmall:{fontFamily:Dr("BodySmall.fontFamily"),fontSize:Dr("BodySmall.fontSize"),fontWeight:Dr("BodySmall.fontWeight"),lineHeight:Dr("BodySmall.lineHeight"),letterSpacing:Dr("BodySmall.letterSpacing")},XSmall:{fontFamily:Dr("XSmall.fontFamily"),fontSize:Dr("XSmall.fontSize"),fontWeight:Dr("XSmall.fontWeight"),lineHeight:Dr("XSmall.lineHeight"),letterSpacing:Dr("XSmall.letterSpacing")}},kr=e=>{switch(e){case 700:case"bold":return Fr.Bold;case 600:case"semibold":return Fr.Semibold;case 300:case"light":return Fr.Light;case 400:case"regular":return Fr.Regular;default:return""}},Or=(e,t)=>r=>{var n;const i=Br[e].fontFamily(r),a=Br[e].fontWeight(r);return Object.values(Fr).includes(i)?g`
                font-family: ${kr(t)||kr(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=Ar(t)||a)&&void 0!==n?n:"normal"};
        `},Ar=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Er=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mr=(e,t,r=!1)=>n=>{const i=Br[e],a=i.fontSize(n);return g`
            ${Or(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Cr=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${Er(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Er(r)}
        `;var jr;!function(e){e.D1=p.h1`
        ${e=>g`
                ${Mr("D1",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${Mr("D2",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${Mr("D3",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${Mr("D4",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${Mr("DBody",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${Mr("H1",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${Mr("H2",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${Mr("H3",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${Mr("H4",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${Mr("H5",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${Mr("H6",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${Mr("Body",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${Mr("BodySmall",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${Mr("XSmall",e.weight,e.paragraph)}
                color: ${$r.Neutral[1]};
                ${Cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Pr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Pr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(jr||(jr={}));const Ir=p.a`
    ${e=>g`
            ${Mr(e.textStyle,e.weight)}
            color: ${$r.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$r.Secondary};

                svg {
                    color: ${$r.Secondary};
                }
            }
        `}
`,Tr=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Pr=r=>{var{external:n=!1,children:i}=r,a=k(r,["external","children"]);return e(Ir,Object.assign({},a,{children:[i,n&&t(Tr,{})]}))};var zr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(zr||(zr={}));const Hr=g`
    border: 1px solid ${$r.Accent.Light[1]};
    box-shadow: ${Sr.InputBoxShadow};
`,Lr=g`
    border: 1px solid transparent;
    box-shadow: none;
`,Nr=g`
    border: 1px solid ${$r.Neutral[5]};
    box-shadow: none;
`,Rr=g`
    border: 1px solid ${$r.Validation.Red.Border};
    box-shadow: ${Sr.InputErrorBoxShadow};
`,Vr=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${$r.Neutral[5]};
    border-radius: 4px;
    background: ${$r.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        ${Hr}
    }
    ${e=>e.$focused&&Hr}

    ${e=>e.$readOnly?g`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Lr}
                }
                ${e.$focused&&Lr}
            `:e.$disabled?g`
                background: ${$r.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Nr}
                }
                ${e.$focused&&Nr}
            `:e.$error?g`
                border: 1px solid ${$r.Validation.Red.Border};

                :focus-within {
                    ${Rr}
                }
                ${e.$focused&&Rr}
            `:void 0}
`,Wr=p.input`
    ${e=>Mr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${$r.Neutral[1]};
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
        color: ${$r.Neutral[3]};
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
`;var Yr={exports:{}};Yr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),r=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var u=o[l],c=d[u],h=c&&c[0],f=c&&c[1];o[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,u=e.slice(n),c=a.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],u=!0===o[3],c=l||u,d=o[2];u&&(d=o[2]),a=this.$locale(),!l&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=u||0,$=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,$+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,$)):new Date(g,m,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var qr,Ur,Qr=E(Yr.exports),Zr={exports:{}},Gr=E(Zr.exports=(qr={year:0,month:1,day:2,hour:3,minute:4,second:5},Ur={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ur[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ur[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,u=s.value,c=qr[l];c>=0&&(a[c]=parseInt(u,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var u=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),c=u[0],d=u[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Xr={exports:{}};Xr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,u),a=r-i<0,o=t.clone().add(n+(a?-1:1),u);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var w="$isDayjsObject",x=function(e){return e instanceof D||!(!e||!e[w])},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},F=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},_=v;_.l=S,_.i=x,_.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return _.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return _.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case u:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,$=(g<b?g+7:g)-b;return f(n?y-$:y+(6-$),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[u]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=_.p(c),g=function(e){var t=F(f);return _.w(t.date(t.date()+Math.round(e*n)),f)};if(p===u)return this.set(u,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,u=r.months,c=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return _.s(a%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return _.s(t.$y,4,"0");case"M":return s+1;case"MM":return _.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,u,3);case"MMMM":return d(u,s);case"D":return t.$D;case"DD":return _.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return _.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return _.s(o,2,"0");case"s":return String(t.$s);case"ss":return _.s(t.$s,2,"0");case"SSS":return _.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=_.p(h),y=F(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,$=function(){return _.m(g,y)};switch(m){case d:p=$()/12;break;case u:p=$();break;case c:p=$()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case o:p=b/r;break;case a:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:_.a(p)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return F.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,D,F),e.$i=!0),F},F.locale=S,F.isDayjs=x,F.unix=function(e){return F(1e3*e)},F.en=$[b],F.Ls=$,F.p={},F}();var Jr=E(Xr.exports),Kr={exports:{}};Kr.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var en=E(Kr.exports),tn={exports:{}};tn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var rn=E(tn.exports),nn={exports:{}};nn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var an,on=E(nn.exports);Jr.extend(en),Jr.extend(rn),Jr.extend(on),Jr.extend(Qr),Jr.extend(Gr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Jr(t).startOf("week");return sn(r).map((e=>ln(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ln(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Jr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Jr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Jr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Jr(n):void 0,i?Jr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(an||(an={}));const sn=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},ln=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},un=[1,3,5,7,8,10,12],cn=[4,6,9,11];var dn,hn,fn,pn;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":un.includes(a)?Math.min(i,31).toString():cn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Jr(e,r);return Jr(t,r).diff(n,"minute")},e.toDayjs=e=>e?Jr(e):Jr(),e.addMinutesToTime=(e,t,r="HH:mm")=>Jr(e,r).add(t,"minutes").format(r)}(dn||(dn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Jr(e).isBefore(n,"day"))||!(!i||!Jr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Jr(e).isValid())return e}return""}}(hn||(hn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(fn||(fn={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(pn||(pn={}));const gn=p.input`
    ${Mr("Body","regular")}
    color: ${$r.Neutral[1]};

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
        color: ${$r.Neutral[3]};
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
`,mn=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${$r.Neutral[3]};
    background-color: transparent;
    border: none;
`,yn=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,vn=p.div`
    display: flex;
    width: 100%;
`,bn=i.forwardRef(((n,i)=>{var{value:o,spacing:l,type:u,error:c,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=n,v=k(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=a();s(i,(()=>b.current),[]);const $=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),a=n.substring(0,r.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>pn.transformWithSpaces(e,l)}),w=e=>{f&&(S()?F(e):f(e))},x=()=>{p&&p(),b&&b.current&&b.current.focus()},S=()=>"tel"===u&&l,F=e=>{const{nextValue:t,updateCaretPosition:r}=$(),n=t.replace(/\s/g,"");e.target.value=n,f(e),r()},_=o?(e=>e?S()?pn.transformWithSpaces(e,l):e:"")(o):o,D=()=>e(r,{children:[t(gn,Object.assign({"data-testid":"input",ref:b,disabled:d,value:_,onChange:w,type:u,readOnly:h},v)),g&&!d&&!h&&!!o&&t(mn,Object.assign({onClick:x,type:"button"},{children:t(yn,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===y?t(vn,Object.assign({className:m},{children:D()})):t(Vr,Object.assign({$disabled:d,$error:c,$readOnly:h,className:m},{children:D()}))})}));var $n=_t;var wn=_t,xn=Dt,Sn=Rt;var Fn=_t,_n=function(){this.__data__=new $n,this.size=0},Dn=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Bn=function(e){return this.__data__.get(e)},kn=function(e){return this.__data__.has(e)},On=function(e,t){var r=this.__data__;if(r instanceof wn){var n=r.__data__;if(!xn||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Sn(n)}return r.set(e,t),this.size=r.size,this};function An(e){var t=this.__data__=new Fn(e);this.size=t.size}An.prototype.clear=_n,An.prototype.delete=Dn,An.prototype.get=Bn,An.prototype.has=kn,An.prototype.set=On;var En=An;var Mn=Rt,Cn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},jn=function(e){return this.__data__.has(e)};function In(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Mn;++t<r;)this.add(e[t])}In.prototype.add=In.prototype.push=Cn,In.prototype.has=jn;var Tn=In,Pn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},zn=function(e,t){return e.has(t)};var Hn=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var u=a.get(e),c=a.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&r?new Tn:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=o?n(g,p,d,t,e,a):n(p,g,d,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Pn(t,(function(e,t){if(!zn(f,t)&&(p===e||i(p,e,r,n,a)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Ln=T.Uint8Array,Nn=dt,Rn=Hn,Vn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Wn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Yn=V?V.prototype:void 0,qn=Yn?Yn.valueOf:void 0;var Un=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Ln(e),new Ln(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Vn;case"[object Set]":var l=1&n;if(s||(s=Wn),e.size!=t.size&&!l)return!1;var u=o.get(e);if(u)return u==t;n|=2,o.set(e,t);var c=Rn(s(e),s(t),n,i,a,o);return o.delete(e),c;case"[object Symbol]":if(qn)return qn.call(e)==qn.call(t)}return!1};var Qn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Zn=be;var Gn=function(e,t,r){var n=t(e);return Zn(e)?n:Qn(n,r(e))};var Xn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},Jn=function(){return[]},Kn=Object.prototype.propertyIsEnumerable,ei=Object.getOwnPropertySymbols,ti=ei?function(e){return null==e?[]:(e=Object(e),Xn(ei(e),(function(t){return Kn.call(e,t)})))}:Jn;var ri=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ni=ee,ii=te;var ai=function(e){return ii(e)&&"[object Arguments]"==ni(e)},oi=te,si=Object.prototype,li=si.hasOwnProperty,ui=si.propertyIsEnumerable,ci=ai(function(){return arguments}())?ai:function(e){return oi(e)&&li.call(e,"callee")&&!ui.call(e,"callee")},di={exports:{}};var hi=function(){return!1};!function(e,t){var r=T,n=hi,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(di,di.exports);var fi=di.exports,pi=/^(?:0|[1-9]\d*)$/;var gi=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&pi.test(e))&&e>-1&&e%1==0&&e<t};var mi=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yi=ee,vi=mi,bi=te,$i={};$i["[object Float32Array]"]=$i["[object Float64Array]"]=$i["[object Int8Array]"]=$i["[object Int16Array]"]=$i["[object Int32Array]"]=$i["[object Uint8Array]"]=$i["[object Uint8ClampedArray]"]=$i["[object Uint16Array]"]=$i["[object Uint32Array]"]=!0,$i["[object Arguments]"]=$i["[object Array]"]=$i["[object ArrayBuffer]"]=$i["[object Boolean]"]=$i["[object DataView]"]=$i["[object Date]"]=$i["[object Error]"]=$i["[object Function]"]=$i["[object Map]"]=$i["[object Number]"]=$i["[object Object]"]=$i["[object RegExp]"]=$i["[object Set]"]=$i["[object String]"]=$i["[object WeakMap]"]=!1;var wi=function(e){return bi(e)&&vi(e.length)&&!!$i[yi(e)]};var xi=function(e){return function(t){return e(t)}},Si={exports:{}};!function(e,t){var r=C,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Si,Si.exports);var Fi=Si.exports,_i=wi,Di=xi,Bi=Fi&&Fi.isTypedArray,ki=Bi?Di(Bi):_i,Oi=ri,Ai=ci,Ei=be,Mi=fi,Ci=gi,ji=ki,Ii=Object.prototype.hasOwnProperty;var Ti=function(e,t){var r=Ei(e),n=!r&&Ai(e),i=!r&&!n&&Mi(e),a=!r&&!n&&!i&&ji(e),o=r||n||i||a,s=o?Oi(e.length,String):[],l=s.length;for(var u in e)!t&&!Ii.call(e,u)||o&&("length"==u||i&&("offset"==u||"parent"==u)||a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ci(u,l))||s.push(u);return s},Pi=Object.prototype;var zi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pi)};var Hi=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Li=zi,Ni=Hi,Ri=Object.prototype.hasOwnProperty;var Vi=ke,Wi=mi;var Yi=function(e){return null!=e&&Wi(e.length)&&!Vi(e)},qi=Ti,Ui=function(e){if(!Li(e))return Ni(e);var t=[];for(var r in Object(e))Ri.call(e,r)&&"constructor"!=r&&t.push(r);return t},Qi=Yi;var Zi=function(e){return Qi(e)?qi(e):Ui(e)},Gi=Gn,Xi=ti,Ji=Zi;var Ki=function(e){return Gi(e,Ji,Xi)},ea=Object.prototype.hasOwnProperty;var ta=function(e,t,r,n,i,a){var o=1&r,s=Ki(e),l=s.length;if(l!=Ki(t).length&&!o)return!1;for(var u=l;u--;){var c=s[u];if(!(o?c in t:ea.call(t,c)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var p=o;++u<l;){var g=e[c=s[u]],m=t[c];if(n)var y=o?n(m,g,c,t,e,a):n(g,m,c,e,t,a);if(!(void 0===y?g===m||i(g,m,r,n,a):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return a.delete(e),a.delete(t),f},ra=qe(T,"DataView"),na=Dt,ia=qe(T,"Promise"),aa=qe(T,"Set"),oa=qe(T,"WeakMap"),sa=ee,la=Ce,ua="[object Map]",ca="[object Promise]",da="[object Set]",ha="[object WeakMap]",fa="[object DataView]",pa=la(ra),ga=la(na),ma=la(ia),ya=la(aa),va=la(oa),ba=sa;(ra&&ba(new ra(new ArrayBuffer(1)))!=fa||na&&ba(new na)!=ua||ia&&ba(ia.resolve())!=ca||aa&&ba(new aa)!=da||oa&&ba(new oa)!=ha)&&(ba=function(e){var t=sa(e),r="[object Object]"==t?e.constructor:void 0,n=r?la(r):"";if(n)switch(n){case pa:return fa;case ga:return ua;case ma:return ca;case ya:return da;case va:return ha}return t});var $a=En,wa=Hn,xa=Un,Sa=ta,Fa=ba,_a=be,Da=fi,Ba=ki,ka="[object Arguments]",Oa="[object Array]",Aa="[object Object]",Ea=Object.prototype.hasOwnProperty;var Ma=function(e,t,r,n,i,a){var o=_a(e),s=_a(t),l=o?Oa:Fa(e),u=s?Oa:Fa(t),c=(l=l==ka?Aa:l)==Aa,d=(u=u==ka?Aa:u)==Aa,h=l==u;if(h&&Da(e)){if(!Da(t))return!1;o=!0,c=!1}if(h&&!c)return a||(a=new $a),o||Ba(e)?wa(e,t,r,n,i,a):xa(e,t,l,r,n,i,a);if(!(1&r)){var f=c&&Ea.call(e,"__wrapped__"),p=d&&Ea.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return a||(a=new $a),i(g,m,r,n,a)}}return!!h&&(a||(a=new $a),Sa(e,t,r,n,i,a))},Ca=te;var ja=function e(t,r,n,i,a){return t===r||(null==t||null==r||!Ca(t)&&!Ca(r)?t!=t&&r!=r:Ma(t,r,n,i,e,a))},Ia=En,Ta=ja;var Pa=M;var za=function(e){return e==e&&!Pa(e)},Ha=za,La=Zi;var Na=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ra=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=r[i])[0],u=e[l],c=s[1];if(o&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new Ia;if(n)var h=n(u,c,l,e,t,d);if(!(void 0===h?Ta(c,u,3,n,d):h))return!1}}return!0},Va=function(e){for(var t=La(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ha(i)]}return t},Wa=Na;var Ya=or,qa=ci,Ua=be,Qa=gi,Za=mi,Ga=lr;var Xa=function(e,t){return null!=e&&t in Object(e)},Ja=function(e,t,r){for(var n=-1,i=(t=Ya(t,e)).length,a=!1;++n<i;){var o=Ga(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Za(i)&&Qa(o,i)&&(Ua(e)||qa(e))};var Ka=ja,eo=fr,to=function(e,t){return null!=e&&Ja(e,t,Xa)},ro=Fe,no=za,io=Na,ao=lr;var oo=dr;var so=function(e){return function(t){return null==t?void 0:t[e]}},lo=function(e){return function(t){return oo(t,e)}},uo=Fe,co=lr;var ho=function(e){var t=Va(e);return 1==t.length&&t[0][2]?Wa(t[0][0],t[0][1]):function(r){return r===e||Ra(r,e,t)}},fo=function(e,t){return ro(e)&&no(t)?io(ao(e),t):function(r){var n=eo(r,e);return void 0===n&&n===t?to(r,e):Ka(t,n,3)}},po=function(e){return e},go=be,mo=function(e){return uo(e)?so(co(e)):lo(e)};var yo=function(e){return"function"==typeof e?e:null==e?po:"object"==typeof e?go(e)?fo(e[0],e[1]):ho(e):mo(e)},vo=yo,bo=Yi,$o=Zi;var wo=function(e){return function(t,r,n){var i=Object(t);if(!bo(t)){var a=vo(r);t=$o(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var xo=he,So=1/0;var Fo=function(e){return e?(e=xo(e))===So||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var _o=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},Do=yo,Bo=function(e){var t=Fo(e),r=t%1;return t==t?r?t-r:t:0},ko=Math.max;var Oo=E(wo((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Bo(r);return i<0&&(i=ko(n+i,0)),_o(e,Do(t),i)}))),Ao=ja;var Eo=E((function(e,t){return Ao(e,t)})),Mo=Object.defineProperty,Co={};((e,t)=>{for(var r in t)Mo(e,r,{get:t[r],enumerable:!0})})(Co,{assign:()=>hs,colors:()=>us,createStringInterpolator:()=>as,skipAnimation:()=>cs,to:()=>os,willAdvance:()=>ds});var jo=Go(),Io=e=>qo(e,jo),To=Go();Io.write=e=>qo(e,To);var Po=Go();Io.onStart=e=>qo(e,Po);var zo=Go();Io.onFrame=e=>qo(e,zo);var Ho=Go();Io.onFinish=e=>qo(e,Ho);var Lo=[];Io.setTimeout=(e,t)=>{const r=Io.now()+t,n=()=>{const e=Lo.findIndex((e=>e.cancel==n));~e&&Lo.splice(e,1),Wo-=~e?1:0},i={time:r,handler:e,cancel:n};return Lo.splice(No(r),0,i),Wo+=1,Uo(),i};var No=e=>~(~Lo.findIndex((t=>t.time>e))||~Lo.length);Io.cancel=e=>{Po.delete(e),zo.delete(e),Ho.delete(e),jo.delete(e),To.delete(e)},Io.sync=e=>{Yo=!0,Io.batchedUpdates(e),Yo=!1},Io.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Io.onStart(r)}return n.handler=e,n.cancel=()=>{Po.delete(r),t=null},n};var Ro="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Io.use=e=>Ro=e,Io.now="undefined"!=typeof performance?()=>performance.now():Date.now,Io.batchedUpdates=e=>e(),Io.catch=console.error,Io.frameLoop="always",Io.advance=()=>{"demand"!==Io.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Zo()};var Vo=-1,Wo=0,Yo=!1;function qo(e,t){Yo?(t.delete(e),e(0)):(t.add(e),Uo())}function Uo(){Vo<0&&(Vo=0,"demand"!==Io.frameLoop&&Ro(Qo))}function Qo(){~Vo&&(Ro(Qo),Io.batchedUpdates(Zo))}function Zo(){const e=Vo;Vo=Io.now();const t=No(Vo);t&&(Xo(Lo.splice(0,t),(e=>e.handler())),Wo-=t),Wo?(Po.flush(),jo.flush(e?Math.min(64,Vo-e):16.667),zo.flush(),To.flush(),Ho.flush()):Vo=-1}function Go(){let e=new Set,t=e;return{add(r){Wo+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Wo-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Wo-=t.size,Xo(t,(t=>t(r)&&e.add(t))),Wo+=e.size,t=e)}}}function Xo(e,t){e.forEach((e=>{try{t(e)}catch(e){Io.catch(e)}}))}function Jo(){}var Ko={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function es(e,t){if(Ko.arr(e)){if(!Ko.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var ts=(e,t)=>e.forEach(t);function rs(e,t,r){if(Ko.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var ns=e=>Ko.und(e)?[]:Ko.arr(e)?e:[e];function is(e,t){if(e.size){const r=Array.from(e);e.clear(),ts(r,t)}}var as,os,ss=(e,...t)=>is(e,(e=>e(...t))),ls=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),us=null,cs=!1,ds=Jo,hs=e=>{e.to&&(os=e.to),e.now&&(Io.now=e.now),void 0!==e.colors&&(us=e.colors),null!=e.skipAnimation&&(cs=e.skipAnimation),e.createStringInterpolator&&(as=e.createStringInterpolator),e.requestAnimationFrame&&Io.use(e.requestAnimationFrame),e.batchedUpdates&&(Io.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ds=e.willAdvance),e.frameLoop&&(Io.frameLoop=e.frameLoop)},fs=new Set,ps=[],gs=[],ms=0,ys={get idle(){return!fs.size&&!ps.length},start(e){ms>e.priority?(fs.add(e),Io.onStart(vs)):(bs(e),Io(ws))},advance:ws,sort(e){if(ms)Io.onFrame((()=>ys.sort(e)));else{const t=ps.indexOf(e);~t&&(ps.splice(t,1),$s(e))}},clear(){ps=[],fs.clear()}};function vs(){fs.forEach(bs),fs.clear(),Io(ws)}function bs(e){ps.includes(e)||$s(e)}function $s(e){ps.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ps,(t=>t.priority>e.priority)),0,e)}function ws(e){const t=gs;for(let r=0;r<ps.length;r++){const n=ps[r];ms=n.priority,n.idle||(ds(n),n.advance(e),n.idle||t.push(n))}return ms=0,(gs=ps).length=0,(ps=t).length>0}var xs="[-+]?\\d*\\.?\\d+",Ss=xs+"%";function Fs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var _s=new RegExp("rgb"+Fs(xs,xs,xs)),Ds=new RegExp("rgba"+Fs(xs,xs,xs,xs)),Bs=new RegExp("hsl"+Fs(xs,Ss,Ss)),ks=new RegExp("hsla"+Fs(xs,Ss,Ss,xs)),Os=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,As=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Es=/^#([0-9a-fA-F]{6})$/,Ms=/^#([0-9a-fA-F]{8})$/;function Cs(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function js(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=Cs(i,n,e+1/3),o=Cs(i,n,e),s=Cs(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Is(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ts(e){return(parseFloat(e)%360+360)%360/360}function Ps(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function zs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Hs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Es.exec(e))?parseInt(t[1]+"ff",16)>>>0:us&&void 0!==us[e]?us[e]:(t=_s.exec(e))?(Is(t[1])<<24|Is(t[2])<<16|Is(t[3])<<8|255)>>>0:(t=Ds.exec(e))?(Is(t[1])<<24|Is(t[2])<<16|Is(t[3])<<8|Ps(t[4]))>>>0:(t=Os.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ms.exec(e))?parseInt(t[1],16)>>>0:(t=As.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Bs.exec(e))?(255|js(Ts(t[1]),zs(t[2]),zs(t[3])))>>>0:(t=ks.exec(e))?(js(Ts(t[1]),zs(t[2]),zs(t[3]))|Ps(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ls=(e,t,r)=>{if(Ko.fun(e))return e;if(Ko.arr(e))return Ls({range:e,output:t,extrapolate:r});if(Ko.str(e.output[0]))return as(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=a(u),n===-1/0?u=-u:i===1/0?u+=n:u=u*(i-n)+n;return u}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var Ns=1.70158,Rs=1.525*Ns,Vs=Ns+1,Ws=2*Math.PI/3,Ys=2*Math.PI/4.5,qs=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Us={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Vs*e*e*e-Ns*e*e,easeOutBack:e=>1+Vs*Math.pow(e-1,3)+Ns*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Rs)/2:(Math.pow(2*e-2,2)*((Rs+1)*(2*e-2)+Rs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ws),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ws)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ys)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ys)/2+1,easeInBounce:e=>1-qs(1-e),easeOutBounce:qs,easeInOutBounce:e=>e<.5?(1-qs(1-2*e))/2:(1+qs(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Qs=Symbol.for("FluidValue.get"),Zs=Symbol.for("FluidValue.observers"),Gs=e=>Boolean(e&&e[Qs]),Xs=e=>e&&e[Qs]?e[Qs]():e,Js=e=>e[Zs]||null;function Ks(e,t){const r=e[Zs];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var el=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");tl(this,e)}},tl=(e,t)=>al(e,Qs,t);function rl(e,t){if(e[Qs]){let r=e[Zs];r||al(e,Zs,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function nl(e,t){const r=e[Zs];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Zs]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var il,al=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ol=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,sl=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ll=new RegExp(`(${ol.source})(%|[a-z]+)`,"i"),ul=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,cl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,dl=e=>{const[t,r]=hl(e);if(!t||ls())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&cl.test(r)?dl(r):r||e},hl=e=>{const t=cl.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},fl=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,pl=e=>{il||(il=us?new RegExp(`(${Object.keys(us).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Xs(e).replace(cl,dl).replace(sl,Hs).replace(il,Hs))),r=t.map((e=>e.match(ol).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ls({...e,output:t})));return e=>{const r=!ll.test(t[0])&&t.find((e=>ll.test(e)))?.replace(ol,"");let i=0;return t[0].replace(ol,(()=>`${n[i++](e)}${r||""}`)).replace(ul,fl)}},gl="react-spring: ",ml=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${gl}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},yl=ml(console.warn);var vl=ml(console.warn);function bl(e){return Ko.str(e)&&("#"==e[0]||/\d/.test(e)||!ls()&&cl.test(e)||e in(us||{}))}var $l=ls()?o:u,wl=()=>{const e=a(!1);return $l((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function xl(){const e=l()[1],t=wl();return()=>{t.current&&e(Math.random())}}var Sl=e=>o(e,Fl),Fl=[];function _l(e){const t=a();return o((()=>{t.current=e})),t.current}var Dl=Symbol.for("Animated:node"),Bl=e=>e&&e[Dl],kl=(e,t)=>{return r=e,n=Dl,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ol=e=>e&&e[Dl]&&e[Dl].getPayload(),Al=class{constructor(){kl(this,this)}getPayload(){return this.payload||[]}},El=class extends Al{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ko.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new El(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ko.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ko.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Ml=class extends El{constructor(e){super(0),this._string=null,this._toString=Ls({output:[e,e]})}static create(e){return new Ml(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ko.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ls({output:[this.getValue(),e]})),this._value=0,super.reset()}},Cl={dependencies:null},jl=class extends Al{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return rs(this.source,((r,n)=>{var i;(i=r)&&i[Dl]===i?t[n]=r.getValue(e):Gs(r)?t[n]=Xs(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ts(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return rs(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Cl.dependencies&&Gs(e)&&Cl.dependencies.add(e);const t=Ol(e);t&&ts(t,(e=>this.add(e)))}},Il=class extends jl{constructor(e){super(e)}static create(e){return new Il(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Tl)),!0)}};function Tl(e){return(bl(e)?Ml:El).create(e)}function Pl(e){const t=Bl(e);return t?t.constructor:Ko.arr(e)?Il:bl(e)?Ml:El}var zl=(e,t)=>{const r=!Ko.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,s)=>{const l=a(null),u=r&&d((e=>{l.current=function(e,t){e&&(Ko.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[c,h]=function(e,t){const r=new Set;Cl.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new jl(e),Cl.dependencies=null,[e,r]}(i,t),f=xl(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new Hl(p,h),m=a();$l((()=>(m.current=g,ts(h,(e=>rl(e,g))),()=>{m.current&&(ts(m.current.deps,(e=>nl(e,m.current))),Io.cancel(m.current.update))}))),o(p,[]),Sl((()=>()=>{const e=m.current;ts(e.deps,(t=>nl(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,{...y,ref:u})}))},Hl=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Io.write(this.update)}};var Ll=Symbol.for("AnimatedComponent"),Nl=e=>Ko.str(e)?e:e&&Ko.str(e.displayName)?e.displayName:Ko.fun(e)&&e.name||null;function Rl(e,...t){return Ko.fun(e)?e(...t):e}var Vl=(e,t)=>!0===e||!!(t&&e&&(Ko.fun(e)?e(t):ns(e).includes(t))),Wl=(e,t)=>Ko.obj(e)?t&&e[t]:e,Yl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ql=e=>e,Ul=(e,t=ql)=>{let r=Ql;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ko.und(r)||(n[i]=r)}return n},Ql=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Zl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Gl(e){const t=function(e){const t={};let r=0;if(rs(e,((e,n)=>{Zl[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return rs(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Xl(e){return e=Xs(e),Ko.arr(e)?e.map(Xl):bl(e)?Co.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Jl(e){return Ko.fun(e)||Ko.arr(e)&&Ko.obj(e[0])}var Kl={tension:170,friction:26,mass:1,damping:1,easing:Us.linear,clamp:!1},eu=class{constructor(){this.velocity=0,Object.assign(this,Kl)}};function tu(e,t){if(Ko.und(t.decay)){const r=!Ko.und(t.tension)||!Ko.und(t.friction);!r&&Ko.und(t.frequency)&&Ko.und(t.damping)&&Ko.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var ru=[],nu=class{constructor(){this.changed=!1,this.values=ru,this.toValues=null,this.fromValues=ru,this.config=new eu,this.immediate=!1}};function iu(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,u,c=Vl(r.cancel??n?.cancel,t);if(c)f();else{Ko.und(r.pause)||(i.paused=Vl(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Vl(e,t)),l=Rl(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-Io.now()}function h(){l>0&&!Co.skipAnimation?(i.delayed=!0,u=Io.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var au=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?lu(e.get()):t.every((e=>e.noop))?ou(e.get()):su(e.get(),t.every((e=>e.finished))),ou=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),su=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),lu=e=>({value:e,cancelled:!0,finished:!1});function uu(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const u=Ul(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&lu(n)||i!==r.asyncId&&su(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new du,o=new hu;return(async()=>{if(Co.skipAnimation)throw cu(r),o.result=su(n,!1),d(o),o;f(a);const s=Ko.obj(e)?{...e}:{...t,to:e};s.parentId=i,rs(u,((e,t)=>{Ko.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Co.skipAnimation)return cu(r),su(n,!1);try{let t;t=Ko.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=su(n.get(),!0,!1)}catch(e){if(e instanceof du)g=e.result;else{if(!(e instanceof hu))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return Ko.fun(o)&&Io.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function cu(e,t){is(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var du=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},hu=class extends Error{constructor(){super("SkipAnimationSignal")}},fu=e=>e instanceof gu,pu=1,gu=class extends el{constructor(){super(...arguments),this.id=pu++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Bl(this);return e&&e.getValue()}to(...e){return Co.to(this,e)}interpolate(...e){return yl(`${gl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Co.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ks(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ys.sort(this),Ks(this,{type:"priority",parent:this,priority:e})}},mu=Symbol.for("SpringPhase"),yu=e=>(1&e[mu])>0,vu=e=>(2&e[mu])>0,bu=e=>(4&e[mu])>0,$u=(e,t)=>t?e[mu]|=3:e[mu]&=-3,wu=(e,t)=>t?e[mu]|=4:e[mu]&=-5,xu=class extends gu{constructor(e,t){if(super(),this.animation=new nu,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ko.und(e)||!Ko.und(t)){const r=Ko.obj(e)?{...e}:{...t,from:e};Ko.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(vu(this)||this._state.asyncTo)||bu(this)}get goal(){return Xs(this.animation.to)}get velocity(){const e=Bl(this);return e instanceof El?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return yu(this)}get isAnimating(){return vu(this)}get isPaused(){return bu(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=Ol(n.to);!o&&Gs(n.to)&&(i=ns(Xs(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==Ml?1:o?o[l].lastPosition:i[l];let c=n.immediate,d=u;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ko.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==u?.005:Math.min(1,.001*Math.abs(u-r)));if(Ko.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Ko.und(n),f=r==u?s.v0>0:r<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(o=-o*n,d=u));o+=(1e-6*-a.tension*(d-u)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(u-r),o=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=Bl(this),l=s.getValue();if(t){const e=Xs(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Io.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(vu(this)){const{to:e,config:t}=this.animation;Io.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ko.und(e)?(r=this.queue||[],this.queue=[]):r=[Ko.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>au(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),cu(this._state,e&&this._lastCallId),Io.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ko.obj(r)?r[t]:r,(null==r||Jl(r))&&(r=void 0),n=Ko.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return yu(this)||(e.reverse&&([r,n]=[n,r]),n=Xs(n),Ko.und(n)?Bl(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ul(e,((e,t)=>/^on/.test(t)?Wl(e,r):e))),Ou(this,e,"onProps"),Au(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return iu(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{bu(this)||(wu(this,!0),ss(a.pauseQueue),Au(this,"onPause",su(this,Su(this,this.animation.to)),this))},resume:()=>{bu(this)&&(wu(this,!1),vu(this)&&this._resume(),ss(a.resumeQueue),Au(this,"onResume",su(this,Su(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Fu(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(lu(this));const n=!Ko.und(e.to),i=!Ko.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(lu(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||n||t.default&&!Ko.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!es(d,u);h&&(s.from=d),d=Xs(d);const f=!es(c,l);f&&this._focus(c);const p=Jl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(tu(r={...r},t),t={...r,...t}),tu(e,t),Object.assign(e,t);for(const t in Kl)null==e[t]&&(e[t]=Kl[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Ko.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,Rl(t.config,a),t.config!==o.config?Rl(o.config,a):void 0);let v=Bl(this);if(!v||Ko.und(c))return r(su(this,!0));const b=Ko.und(t.reset)?i&&!t.default:!Ko.und(d)&&Vl(t.reset,a),$=b?d:this.get(),w=Xl(c),x=Ko.num(w)||Ko.arr(w)||bl(w),S=!p&&(!x||Vl(o.immediate||t.immediate,a));if(f){const e=Pl(c);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const F=v.constructor;let _=Gs(c),D=!1;if(!_){const e=b||!yu(this)&&h;(f||e)&&(D=es(Xl($),w),_=!D),(es(s.immediate,S)||S)&&es(g.decay,m)&&es(g.velocity,y)||(_=!0)}if(D&&vu(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||Gs(l))&&(s.values=v.getPayload(),s.toValues=Gs(c)?null:F==Ml?[1]:ns(w)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),_)){const{onRest:e}=s;ts(ku,(e=>Ou(this,t,e)));const n=su(this,Su(this,l));ss(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Io.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?Rl(o.onRest,n):s.onStart?.(n,this)}))}b&&this._set($),p?r(uu(t.to,t,this._state,this)):_?this._start():vu(this)&&!f?this._pendingCalls.add(r):r(ou($))}_focus(e){const t=this.animation;e!==t.to&&(Js(this)&&this._detach(),t.to=e,Js(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Gs(t)&&(rl(t,this),fu(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Gs(e)&&nl(e,this)}_set(e,t=!0){const r=Xs(e);if(!Ko.und(r)){const e=Bl(this);if(!e||!es(r,e.getValue())){const n=Pl(r);e&&e.constructor==n?e.setValue(r):kl(this,n.create(r)),e&&Io.batchedUpdates((()=>{this._onChange(r,t)}))}}return Bl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Au(this,"onStart",su(this,Su(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Rl(this.animation.onChange,e,this)),Rl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Bl(this).reset(Xs(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),vu(this)||($u(this,!0),bu(this)||this._resume())}_resume(){Co.skipAnimation?this.finish():ys.start(this)}_stop(e,t){if(vu(this)){$u(this,!1);const r=this.animation;ts(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ks(this,{type:"idle",parent:this});const n=t?lu(this.get()):su(this.get(),Su(this,e??r.to));ss(this._pendingCalls,n),r.changed&&(r.changed=!1,Au(this,"onRest",n,this))}}};function Su(e,t){const r=Xl(t);return es(Xl(e.get()),r)}function Fu(e,t=e.loop,r=e.to){const n=Rl(t);if(n){const i=!0!==n&&Gl(n),a=(i||e).reverse,o=!i||i.reset;return _u({...e,loop:t,default:!1,pause:void 0,to:!a||Jl(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function _u(e){const{to:t,from:r}=e=Gl(e),n=new Set;return Ko.obj(t)&&Bu(t,n),Ko.obj(r)&&Bu(r,n),e.keys=n.size?Array.from(n):null,e}function Du(e){const t=_u(e);return Ko.und(t.default)&&(t.default=Ul(t)),t}function Bu(e,t){rs(e,((e,r)=>null!=e&&t.add(r)))}var ku=["onStart","onRest","onChange","onPause","onResume"];function Ou(e,t,r){e.animation[r]=t[r]!==Yl(t,r)?Wl(t[r],e.key):void 0}function Au(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Eu=["onStart","onChange","onRest"],Mu=1,Cu=class{constructor(e,t){this.id=Mu++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ko.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(_u(e)),this}start(e){let{queue:t}=this;return e?t=ns(e).map(_u):this.queue=[],this._flush?this._flush(this,t):(Lu(this,t),ju(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;ts(ns(t),(t=>r[t].stop(!!e)))}else cu(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ko.und(e))this.start({pause:!0});else{const t=this.springs;ts(ns(e),(e=>t[e].pause()))}return this}resume(e){if(Ko.und(e))this.start({pause:!1});else{const t=this.springs;ts(ns(e),(e=>t[e].resume()))}return this}each(e){rs(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,is(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&is(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,is(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Io.onFrame(this._onFrame)}};function ju(e,t){return Promise.all(t.map((t=>Iu(e,t)))).then((t=>au(e,t)))}async function Iu(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,u=Ko.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=Ko.arr(i)||Ko.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):ts(Eu,(r=>{const n=t[r];if(Ko.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ss(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Yl(t,"cancel");(c||f&&d.asyncId)&&h.push(iu(++e._lastAsyncId,{props:t,state:d,actions:{pause:Jo,resume:Jo,start(t,r){f?(cu(d,e._lastAsyncId),r(lu(e))):(t.onRest=s,r(uu(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=au(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=Fu(t,o,i);if(r)return Lu(e,[r]),Iu(e,r,!0)}return l&&Io.batchedUpdates((()=>l(p,e,e.item))),p}function Tu(e,t){const r={...e.springs};return t&&ts(ns(t),(e=>{Ko.und(e.keys)&&(e=_u(e)),Ko.obj(e.to)||(e={...e,to:void 0}),Hu(r,e,(e=>zu(e)))})),Pu(e,r),r}function Pu(e,t){rs(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,rl(t,e))}))}function zu(e,t){const r=new xu;return r.key=e,t&&rl(r,t),r}function Hu(e,t,r){t.keys&&ts(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Lu(e,t){ts(t,(t=>{Hu(e.springs,t,(t=>zu(t,e)))}))}var Nu,Ru,Vu=({children:e,...t})=>{const r=h(Wu),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=l((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return o((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:u}=Wu;return n.createElement(u,{value:t},e)},Wu=(Nu=Vu,Ru={},Object.assign(Nu,n.createContext(Ru)),Nu.Provider._context=Nu,Nu.Consumer._context=Nu,Nu);Vu.Provider=Wu.Provider,Vu.Consumer=Wu.Consumer;var Yu=()=>{const e=[],t=function(t){vl(`${gl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return ts(e,((e,i)=>{if(Ko.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return ts(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ts(e,(e=>e.resume(...arguments))),this},t.set=function(t){ts(e,((e,r)=>{const n=Ko.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return ts(e,((e,n)=>{if(Ko.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return ts(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ts(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ko.fun(e)?e(r,t):e};return t._getProps=r,t};function qu(e,t){const r=Ko.fun(e),[[n],i]=function(e,t,r){const n=Ko.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?Yu():void 0),[]),o=a(0),s=xl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=Tu(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?ju(e,t):new Promise((n=>{Pu(e,r),l.queue.push((()=>{n(ju(e,t))})),s()}))}})),[]),u=a([...l.ctrls]),c=[],d=_l(e)||0;function p(e,r){for(let i=e;i<r;i++){const e=u.current[i]||(u.current[i]=new Cu(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=Du(r))}}f((()=>{ts(u.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=u.current.map(((e,t)=>Tu(e,c[t]))),m=h(Vu),y=_l(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);$l((()=>{o.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],ts(e,(e=>e()))),ts(u.current,((e,t)=>{i?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Sl((()=>()=>{ts(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>({...e})));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Uu=class extends gu{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ls(...t);const r=this._get(),n=Pl(r);kl(this,n.create(r))}advance(e){const t=this._get();es(t,this.get())||(Bl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Zu(this._active)&&Gu(this)}_get(){const e=Ko.arr(this.source)?this.source.map(Xs):ns(Xs(this.source));return this.calc(...e)}_start(){this.idle&&!Zu(this._active)&&(this.idle=!1,ts(Ol(this),(e=>{e.done=!1})),Co.skipAnimation?(Io.batchedUpdates((()=>this.advance())),Gu(this)):ys.start(this))}_attach(){let e=1;ts(ns(this.source),(t=>{Gs(t)&&rl(t,this),fu(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ts(ns(this.source),(e=>{Gs(e)&&nl(e,this)})),this._active.clear(),Gu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ns(this.source).reduce(((e,t)=>Math.max(e,(fu(t)?t.priority:0)+1)),0))}};function Qu(e){return!1!==e.idle}function Zu(e){return!e.size||Array.from(e).every(Qu)}function Gu(e){e.idle||(e.idle=!0,ts(Ol(e),(e=>{e.done=!0})),Ks(e,{type:"idle",parent:e}))}Co.assign({createStringInterpolator:pl,to:(e,t)=>new Uu(e,t)});var Xu=/^--/;function Ju(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Xu.test(e)||ec.hasOwnProperty(e)&&ec[e]?(""+t).trim():t+"px"}var Ku={};var ec={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tc=["Webkit","Ms","Moz","O"];ec=Object.keys(ec).reduce(((e,t)=>(tc.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ec);var rc=/^(matrix|translate|scale|rotate|skew)/,nc=/^(translate)/,ic=/^(rotate|skew)/,ac=(e,t)=>Ko.num(e)&&0!==e?e+t:e,oc=(e,t)=>Ko.arr(e)?e.every((e=>oc(e,t))):Ko.num(e)?e===t:parseFloat(e)===t,sc=class extends jl{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>ac(e,"px"))).join(",")})`,oc(e,0)]))),rs(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(rc.test(t)){if(delete n[t],Ko.und(e))return;const r=nc.test(t)?"px":ic.test(t)?"deg":"";i.push(ns(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${ac(i,r)})`,oc(i,0)]:e=>[`${t}(${e.map((e=>ac(e,r))).join(",")})`,oc(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new lc(i,a)),super(n)}},lc=class extends el{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ts(this.inputs,((r,n)=>{const i=Xs(r[0]),[a,o]=this.transforms[n](Ko.arr(i)?i:r.map(Xs));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&ts(this.inputs,(e=>ts(e,(e=>Gs(e)&&rl(e,this)))))}observerRemoved(e){0==e&&ts(this.inputs,(e=>ts(e,(e=>Gs(e)&&nl(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ks(this,e)}};Co.assign({batchedUpdates:b,createStringInterpolator:pl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var uc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new jl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=Nl(e)||"Anonymous";return(e=Ko.str(e)?a[e]||(a[e]=zl(e,i)):e[Ll]||(e[Ll]=zl(e,i))).displayName=`Animated(${t})`,e};return rs(e,((t,r)=>{Ko.arr(e)&&(r=Nl(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Ku[t]||(Ku[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ju(t,n[t]);Xu.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new sc(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),cc=uc.animated;const dc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},hc=e=>Object.keys(dc).reduce(((t,r)=>{const n=dc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),fc=hc("max-width"),pc=(hc("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),gc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,mc=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||$r.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${gc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yc=p(mc)`
    animation-delay: -0.45s;
`,vc=p(mc)`
    animation-delay: -0.3s;
`,bc=p(mc)`
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
                    background-color: ${$r.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Sr.Button.Danger.Border:$r.Primary};

                    color: ${e.$buttonIsDanger?Sr.Button.Danger.Primary:$r.Primary};
                `;case"light":return g`
                    background-color: ${$r.Neutral[8]};
                    border: 1px solid ${$r.Neutral[5]};

                    color: ${e.$buttonIsDanger?Sr.Button.Danger.Primary:$r.Primary};
                `;case"disabled":return g`
                    background-color: ${$r.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$r.Neutral[3]};
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Sr.Button.Danger.Primary:$r.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Sr.Button.Danger.Hover:$r.Secondary};
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?Sr.Button.Danger.BackgroundColor:$r.Primary};
                    border: 1px solid transparent;

                    ${fc.mobileL} {
                        width: 100%;
                    }

                    color: ${$r.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    ${Mr("H5","semibold")}

                    ${fc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    ${Mr("H4","semibold")}

                    ${fc.mobileS} {
                        height: auto;
                    }
                `}
`;const $c=p((({color:r,className:n,size:i=18})=>e(pc,Object.assign({className:n,$size:i,$color:r},{children:[t(mc,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(yc,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(vc,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(bc,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Sr.Button.Danger.Primary:$r.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=$r.Neutral[3](e);break;default:t=$r.Neutral[8](e)}return g`
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
`,xc=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return g`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${wc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?$r.Neutral[4](e):e.$unchecked?$r.Accent.Light[2](e):$r.Primary(e)};
    }
`,Sc=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Fc=p(cc.div)`
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
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${$r.Neutral[4]};
        border-right: 5px solid ${$r.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${fc.mobileL} {
        max-height: 15rem;
    }
`,Dc=p.li`
    :hover,
    :focus,
    :active {
        background: ${$r.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${$r.Accent.Light[5]};
            `}}
`,Bc=p.button`
    display: flex;
    ${e=>e.$multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
                padding: 0 1rem;
                min-height: ${(e=>{let t=3.5;return"small"===e.$variant&&(t=3.25),e.$hasNextLineLabel&&(t=4.255),t})(e)}rem;
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
        outline-color: ${$r.Accent.Light[3]};
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
`,Oc=p.div`
    ${e=>Mr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${$r.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc}
`,Ac=p.div`
    color: ${$r.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&kc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${Mr("BodySmall","semibold")}
                `:g`
                    ${Mr("Body","regular")}
                `}
`,Ec=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Oc} {
                        display: inline;
                    }

                    ${Ac} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Mc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Cc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,jc=p((r=>{var{className:n,checked:i,disabled:s,indeterminate:l,onChange:u,onKeyPress:c,displaySize:d="default"}=r,h=k(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=a();o((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;u&&u(e),c&&c(t)}};return e(xc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:p,$displaySize:d,$disabled:s,$unchecked:!(l||i||s)},{children:[t(Sc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:s},h)),l?t(w,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):s?t(S,{"data-testid":"disabled-empty-checkbox"}):t(F,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ic=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Tc=p.button`
    ${e=>Mr("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${$r.Primary(e)};\n\t\t`}
`,Pc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,zc=p.div`
    ${e=>Mr("small"===e.$variant?"BodySmall":"Body","regular")}
`,Hc=p($)`
    ${e=>{const t="small"===e.$variant?1:1.5;return g`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${$r.Validation.Red.Icon};
`,Lc=p.button`
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
                background-color: ${$r.Neutral[7]};
            `}
    }
`,Nc=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Lc,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Rc=e=>"small"===e?1:1.375,Vc=e=>g`
        height: ${Rc(e)}rem;
        width: ${Rc(e)}rem;
    `,Wc=p.li`
    background: ${$r.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Yc=p(Wr)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,qc=p(D)`
    ${e=>Vc(e.$variant)}
    margin: 0 0.5rem;
    color: ${$r.Neutral[3]};
`,Uc=p(Nc)`
    ${e=>Vc(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${$r.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return g`
                svg {
                    ${Vc(e.$variant)}
                }
            `}}
`,Qc=c(((r,n)=>{const{onClear:i}=r,a=k(r,["onClear"]);return e(Wc,{children:[t(qc,{$variant:r.variant}),t(Yc,Object.assign({ref:n,$variant:r.variant},a)),a.value&&t(Uc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:r.variant},{children:t(_,{})}))]},"search")})),Zc=n=>{var{listItems:i,listExtractor:s,valueExtractor:u,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:$,onSelectAll:w,onRetry:x,itemsLoadState:S="success",itemTruncationType:F="end",itemMaxLines:_=2,labelDisplayType:D="inline",renderListItem:B,onBlur:O,hideNoResultsDisplay:A,renderCustomCallToAction:E,variant:M="default"}=n,C=k(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[j,I]=l(0),[T,P]=l(""),[z,H]=l(i),[L,N]=l(0),R=qu({height:L}),V=a(),W=a(),Y=a([]),q=a(),U=a(),Q=a(j),Z=a(z),G=e=>{Q.current=e,I(e)},X=e=>{Z.current=e,H(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{te(T)}),[T]),o((()=>{if(P(""),h){if(setTimeout((()=>{N(re())})),v)return;q&&q.current?(q.current.focus(),G(-1)):Y.current[j]&&Y.current[j].focus()}else N(0)}),[h]),o((()=>{if(h){const e=re();N(e)}}),[z,S]),o((()=>{X(i),P(""),G(0)}),[i]);const J=e=>s?s(e):e.toString(),K=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return pn.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},ee=e=>!!Oo($,(t=>Eo(t,e))),te=e=>{if(""===e)X(i);else if(m){const t=m(e);X(t)}else{const t=i.filter((t=>{var r;const n=J(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),a="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));X(t)}},re=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(V&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<Z.current.length-1){const e=Q.current+1;Y.current[e].focus(),G(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;Y.current[e].focus(),G(Q.current-1)}break;case"Escape":y&&y(!0)}},ie=(e,t)=>{e.preventDefault(),c&&c(t,(e=>u?u(e):e)(t))},ae=e=>{const t=e.target.value;P(t),g&&g()},oe=()=>{P(""),q.current.focus(),g&&g()},se=()=>{x&&x()},le=()=>{O&&O()},ue=n=>e(r,{children:[t(Mc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Cc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=J(r),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel,o=K(i),s=a&&K(a),l=o||s?"next-line":D;return e(Ec,Object.assign({$labelDisplayType:l},{children:[t(Oc,Object.assign({$truncateType:F,$maxLines:_,$variant:M,"aria-label":i},{children:"middle"===F&&o?ue(i):i})),a&&t(Ac,Object.assign({$truncateType:F,$maxLines:_,$labelDisplayType:D,"aria-label":a},{children:"middle"===F&&s?ue(a):a}))]}))},de=()=>{if(!x||x&&"success"===S)return z.map(((r,n)=>t(Dc,Object.assign({$checked:ee(r)&&!b},{children:e(Bc,Object.assign({$hasNextLineLabel:"next-line"===D&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{ie(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:le,$variant:M},{children:[b&&t(jc,{checked:ee(r),displaySize:"small"}),B?B(r,{selected:ee(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${u?u(e):e}`)(r,n))))},he=()=>{if(b&&z.length>0&&!T&&"success"===S)return t(Ic,{children:t(Tc,Object.assign({onClick:w,type:"button",$variant:M},{children:0===$.length?"Select all":"Clear all"}))},"selectAll")},fe=()=>{if(!A&&(T||!f)&&0===z.length&&"success"===S)return e(Pc,Object.assign({"data-testid":"list-no-results"},{children:[t(Hc,{"data-testid":"no-result-icon",$variant:M}),t(zc,Object.assign({$variant:M},{children:"No results found."}))]}),"noResults")},pe=()=>{if(x&&"loading"===S){const r="small"===M?16:24;return e(Pc,Object.assign({"data-testid":"list-loading"},{children:[t($c,{$buttonStyle:"secondary",size:r}),t(zc,Object.assign({$variant:M},{children:"Loading..."}))]}),"loading")}},ge=()=>{if(x&&"fail"===S)return e(Pc,Object.assign({"data-testid":"list-fail"},{children:[t(Hc,{"data-testid":"load-error-icon",$variant:M}),t(zc,Object.assign({$variant:M},{children:"Failed to load."}))," ",t(Tc,Object.assign({onClick:se,type:"button",$variant:M},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Fc,Object.assign({style:R,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:V},{children:[(()=>{if(h)return e(_c,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},C,{children:[(f||m)&&"success"===S?t(Qc,{ref:q,onChange:ae,value:T,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:M}):null,he(),fe(),pe(),ge(),de()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:E(y,z)}))})()]}))})},Gc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Xc=e=>"small"===e?2.5:3,Jc=p.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Xc(e.$variant);return g`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Kc=g`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Xc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${$r.Accent.Light[3]};
    }
`,ed=p.button`
    ${Kc}
    cursor: pointer;
`,td=p.div`
    ${Kc}
`,rd=m`
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
`,nd=p.div`
    position: relative;
    border: 1px solid ${$r.Neutral[5]};
    border-radius: ${"4px"};
    background: ${$r.Neutral[8]};

    :focus-within {
        border: 1px solid ${$r.Accent.Light[1]};
        box-shadow: ${Sr.InputBoxShadow};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${rd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${$r.Neutral[6](e)};

                ${ed} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${$r.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${ed} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${$r.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${$r.Validation.Red.Border(e)};
                    box-shadow: ${Sr.InputErrorBoxShadow};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Gc};
    margin-left: 1rem;
`,p(B)`
    color: ${$r.Neutral[3]};
    ${e=>{let t=Br.Body.fontSize;return"small"===e.$variant&&(t=Br.BodySmall.fontSize),g`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const id=p.div`
    height: 1px;
    background: ${$r.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const ad=p.div`
    ${e=>Mr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(ad)`
    color: ${$r.Neutral[3]};
`;const od=({children:e,show:r,error:n,disabled:i,testId:s,onBlur:l,readOnly:u,className:c,variant:d})=>{const h=a();return((e,t,r="window",n)=>{const i=a();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(h&&h.current.contains(e.target))return;r&&l()}}),"document"),t(Jc,Object.assign({className:c,$variant:d},{children:t(nd,Object.assign({ref:h,error:n&&!r,disabled:i,$readOnly:u,expanded:r,"data-testid":s},{children:e}))}))},sd=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:u=3,fetchOptions:c,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const $=s&&v(s),[w,x]=l($||""),[S,F]=l($||""),[_,D]=l([]),[B,k]=l(!0),[A,E]=l(!1),[M,C]=l(!!s),[j,I]=l(s),T=a(c),P=e=>O(void 0,void 0,void 0,(function*(){E(!1),k(!0);try{const t=yield T.current(e);F(e),D(t),k(!1)}catch(e){E(!0)}})),z=d(ve((e=>P(e)),500,{leading:!1,trailing:!0}),[]);o((()=>{T.current=c}),[c]),o((()=>{w&&w.length>=u&&w!==S?z(w):z.cancel(),""===w&&j&&(b&&b(void 0,void 0),N(),I(void 0)),s&&w!==v(s)&&C(!1)}),[w,s]),o((()=>{x(s?v(s):""),N(s),I(s)}),[s]);const H=e=>{x(e.target.value)},L=(e,t)=>{b&&b(e,t)},N=e=>{F(e?v(e):""),C(!!e),D([]),k(!0)},R=()=>{x(""),b&&b(void 0,void 0),N()},V=()=>{M||j?(N(j),x(v(j)),b&&b(j,Y(j)),I(j)):R()},W=()=>w&&w.length>=u&&!M,Y=e=>m?m(e):e,q=()=>t(bn,{type:"text",value:w,onChange:H,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:w.length<u?V:void 0});return e(od,Object.assign({className:n,show:W(),error:g&&!W(),disabled:p,readOnly:f,testId:i,onBlur:V},{children:[t(f?r:td,{children:q()}),!f&&W()&&t(id,{}),t(Zc,{listItems:_,onSelectItem:L,valueExtractor:m,listExtractor:y,itemsLoadState:A?"fail":B?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>P(w),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))};export{sd as PredictiveTextInput};
//# sourceMappingURL=index.js.map
