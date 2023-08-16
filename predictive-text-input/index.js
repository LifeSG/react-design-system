import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function F(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},D="object"==typeof O&&O&&O.Object===Object&&O,B=D,M="object"==typeof self&&self&&self.Object===Object&&self,j=B||M||Function("return this")(),A=j,E=function(){return A.Date.now()},C=/\s/;var z=function(e){for(var t=e.length;t--&&C.test(e.charAt(t)););return t},I=/^\s+/;var T=function(e){return e?e.slice(0,z(e)+1).replace(I,""):e},P=j.Symbol,H=P,N=Object.prototype,L=N.hasOwnProperty,R=N.toString,V=H?H.toStringTag:void 0;var W=function(e){var t=L.call(e,V),n=e[V];try{e[V]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[V]=n:delete e[V]),i},Y=Object.prototype.toString;var q=W,U=function(e){return Y.call(e)},Q=P?P.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?q(e):U(e)};var G=function(e){return null!=e&&"object"==typeof e},X=Z,J=G;var K=function(e){return"symbol"==typeof e||J(e)&&"[object Symbol]"==X(e)},ee=T,te=k,ne=K,re=/^[-+]0x[0-9a-f]+$/i,ie=/^0b[01]+$/i,oe=/^0o[0-7]+$/i,ae=parseInt;var se=function(e){if("number"==typeof e)return e;if(ne(e))return NaN;if(te(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=te(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ee(e);var n=ie.test(e);return n||oe.test(e)?ae(e.slice(2),n?2:8):re.test(e)?NaN:+e},le=k,ue=E,ce=se,de=Math.max,he=Math.min;var fe=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=ue();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?he(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=ue(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=ce(t)||0,le(n)&&(c=!!n.leading,o=(d="maxWait"in n)?de(ce(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(ue())},y};var pe=Array.isArray,ge=pe,me=K,ye=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ve=/^\w*$/;var be=function(e,t){if(ge(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!me(e))||(ve.test(e)||!ye.test(e)||null!=t&&e in Object(t))},we=Z,$e=k;var Se,xe=function(e){if(!$e(e))return!1;var t=we(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},_e=j["__core-js_shared__"],Fe=(Se=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+Se:"";var Oe=function(e){return!!Fe&&Fe in e},ke=Function.prototype.toString;var De=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Be=xe,Me=Oe,je=k,Ae=De,Ee=/^\[object .+?Constructor\]$/,Ce=Function.prototype,ze=Object.prototype,Ie=Ce.toString,Te=ze.hasOwnProperty,Pe=RegExp("^"+Ie.call(Te).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(e){return!(!je(e)||Me(e))&&(Be(e)?Pe:Ee).test(Ae(e))},Ne=function(e,t){return null==e?void 0:e[t]};var Le=function(e,t){var n=Ne(e,t);return He(n)?n:void 0},Re=Le(Object,"create"),Ve=Re;var We=function(){this.__data__=Ve?Ve(null):{},this.size=0};var Ye=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qe=Re,Ue=Object.prototype.hasOwnProperty;var Qe=function(e){var t=this.__data__;if(qe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ue.call(t,e)?t[e]:void 0},Ze=Re,Ge=Object.prototype.hasOwnProperty;var Xe=Re;var Je=We,Ke=Ye,et=Qe,tt=function(e){var t=this.__data__;return Ze?void 0!==t[e]:Ge.call(t,e)},nt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Xe&&void 0===t?"__lodash_hash_undefined__":t,this};function rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rt.prototype.clear=Je,rt.prototype.delete=Ke,rt.prototype.get=et,rt.prototype.has=tt,rt.prototype.set=nt;var it=rt;var ot=function(){this.__data__=[],this.size=0};var at=function(e,t){return e===t||e!=e&&t!=t},st=at;var lt=function(e,t){for(var n=e.length;n--;)if(st(e[n][0],t))return n;return-1},ut=lt,ct=Array.prototype.splice;var dt=lt;var ht=lt;var ft=lt;var pt=ot,gt=function(e){var t=this.__data__,n=ut(t,e);return!(n<0)&&(n==t.length-1?t.pop():ct.call(t,n,1),--this.size,!0)},mt=function(e){var t=this.__data__,n=dt(t,e);return n<0?void 0:t[n][1]},yt=function(e){return ht(this.__data__,e)>-1},vt=function(e,t){var n=this.__data__,r=ft(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=pt,bt.prototype.delete=gt,bt.prototype.get=mt,bt.prototype.has=yt,bt.prototype.set=vt;var wt=bt,$t=Le(j,"Map"),St=it,xt=wt,_t=$t;var Ft=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ot=function(e,t){var n=e.__data__;return Ft(t)?n["string"==typeof t?"string":"hash"]:n.map},kt=Ot;var Dt=Ot;var Bt=Ot;var Mt=Ot;var jt=function(){this.size=0,this.__data__={hash:new St,map:new(_t||xt),string:new St}},At=function(e){var t=kt(this,e).delete(e);return this.size-=t?1:0,t},Et=function(e){return Dt(this,e).get(e)},Ct=function(e){return Bt(this,e).has(e)},zt=function(e,t){var n=Mt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function It(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}It.prototype.clear=jt,It.prototype.delete=At,It.prototype.get=Et,It.prototype.has=Ct,It.prototype.set=zt;var Tt=It,Pt=Tt;function Ht(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ht.Cache||Pt),n}Ht.Cache=Pt;var Nt=Ht;var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/\\(\\)?/g,Vt=function(e){var t=Nt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Lt,(function(e,n,r,i){t.push(r?i.replace(Rt,"$1"):n||e)})),t}));var Wt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Yt=pe,qt=K,Ut=P?P.prototype:void 0,Qt=Ut?Ut.toString:void 0;var Zt=function e(t){if("string"==typeof t)return t;if(Yt(t))return Wt(t,e)+"";if(qt(t))return Qt?Qt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Gt=Zt;var Xt=pe,Jt=be,Kt=Vt,en=function(e){return null==e?"":Gt(e)};var tn=function(e,t){return Xt(e)?e:Jt(e,t)?[e]:Kt(en(e))},nn=K;var rn=function(e){if("string"==typeof e||nn(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},on=tn,an=rn;var sn=function(e,t){for(var n=0,r=(t=on(t,e)).length;null!=e&&n<r;)e=e[an(t[n++])];return n&&n==r?e:void 0},ln=sn;var un=function(e,t,n){var r=null==e?void 0:ln(e,t);return void 0===r?n:r};const cn=(e,t,n)=>t?un(n,t)||un(e,t):n||e,dn=(e,t)=>{const n=t||e.defaultValue;return un(e.collections,n)};var hn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(hn||(hn={}));const fn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pn=e=>t=>{const n=t.theme,r=dn(fn,n[hn.colorScheme]);return n.options&&n.options.color?cn(r,e,n.options.color):cn(r,e)},gn={Brand:{1:pn("Brand.1"),2:pn("Brand.2"),3:pn("Brand.3"),4:pn("Brand.4"),5:pn("Brand.5"),6:pn("Brand.6")},Primary:pn("Primary"),PrimaryDark:pn("PrimaryDark"),Secondary:pn("Secondary"),Accent:{Light:{1:pn("Accent.Light.1"),2:pn("Accent.Light.2"),3:pn("Accent.Light.3"),4:pn("Accent.Light.4"),5:pn("Accent.Light.5"),6:pn("Accent.Light.6")},Dark:{1:pn("Accent.Dark.1"),2:pn("Accent.Dark.2"),3:pn("Accent.Dark.3")}},Neutral:{1:pn("Neutral.1"),2:pn("Neutral.2"),3:pn("Neutral.3"),4:pn("Neutral.4"),5:pn("Neutral.5"),6:pn("Neutral.6"),7:pn("Neutral.7"),8:pn("Neutral.8")},Validation:{Green:{Text:pn("Validation.Green.Text"),Icon:pn("Validation.Green.Icon"),Border:pn("Validation.Green.Border"),Background:pn("Validation.Green.Background")},Orange:{Text:pn("Validation.Orange.Text"),Icon:pn("Validation.Orange.Icon"),Border:pn("Validation.Orange.Border"),Background:pn("Validation.Orange.Background"),Badge:pn("Validation.Orange.Badge")},Red:{Text:pn("Validation.Red.Text"),Icon:pn("Validation.Red.Icon"),Border:pn("Validation.Red.Border"),Background:pn("Validation.Red.Background")},Blue:{Text:pn("Validation.Blue.Text"),Icon:pn("Validation.Blue.Icon"),Border:pn("Validation.Blue.Border"),Background:pn("Validation.Blue.Background")}},Shadow:{Accent:pn("Shadow.Accent"),Red:pn("Shadow.Red"),Elevation:pn("Shadow.Elevation")}},mn={collections:{base:{InputBoxShadow:g`
        inset 0 0 6px 1px ${gn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${gn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${gn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 6px 1px ${gn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${gn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${gn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},yn=e=>t=>{var n;const r=t.theme,i=dn(mn,r[hn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?cn(i,e,r.options.designToken):cn(i,e)},vn=yn("InputBoxShadow"),bn=yn("InputErrorBoxShadow"),wn=(yn("ElevationBoxShadow"),yn("Table.Header"),yn("Table.Cell.Primary"),yn("Table.Cell.Secondary"),yn("Table.Cell.Selected"),yn("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),$n={collections:{base:{D1:{fontFamily:wn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:wn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:wn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:wn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:wn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:wn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:wn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:wn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:wn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:wn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:wn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:wn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:wn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:wn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Sn=e=>t=>{const n=t.theme,r=dn($n,n[hn.textStyleScheme]);return n.options&&n.options.textStyle?cn(r,e,n.options.textStyle):cn(r,e)},xn={D1:{fontFamily:Sn("D1.fontFamily"),fontSize:Sn("D1.fontSize"),fontWeight:Sn("D1.fontWeight"),lineHeight:Sn("D1.lineHeight"),letterSpacing:Sn("D1.letterSpacing")},D2:{fontFamily:Sn("D2.fontFamily"),fontSize:Sn("D2.fontSize"),fontWeight:Sn("D2.fontWeight"),lineHeight:Sn("D2.lineHeight"),letterSpacing:Sn("D2.letterSpacing")},D3:{fontFamily:Sn("D3.fontFamily"),fontSize:Sn("D3.fontSize"),fontWeight:Sn("D3.fontWeight"),lineHeight:Sn("D3.lineHeight"),letterSpacing:Sn("D3.letterSpacing")},D4:{fontFamily:Sn("D4.fontFamily"),fontSize:Sn("D4.fontSize"),fontWeight:Sn("D4.fontWeight"),lineHeight:Sn("D4.lineHeight"),letterSpacing:Sn("D4.letterSpacing")},DBody:{fontFamily:Sn("DBody.fontFamily"),fontSize:Sn("DBody.fontSize"),fontWeight:Sn("DBody.fontWeight"),lineHeight:Sn("DBody.lineHeight"),letterSpacing:Sn("DBody.letterSpacing")},H1:{fontFamily:Sn("H1.fontFamily"),fontSize:Sn("H1.fontSize"),fontWeight:Sn("H1.fontWeight"),lineHeight:Sn("H1.lineHeight"),letterSpacing:Sn("H1.letterSpacing")},H2:{fontFamily:Sn("H2.fontFamily"),fontSize:Sn("H2.fontSize"),fontWeight:Sn("H2.fontWeight"),lineHeight:Sn("H2.lineHeight"),letterSpacing:Sn("H2.letterSpacing")},H3:{fontFamily:Sn("H3.fontFamily"),fontSize:Sn("H3.fontSize"),fontWeight:Sn("H3.fontWeight"),lineHeight:Sn("H3.lineHeight"),letterSpacing:Sn("H3.letterSpacing")},H4:{fontFamily:Sn("H4.fontFamily"),fontSize:Sn("H4.fontSize"),fontWeight:Sn("H4.fontWeight"),lineHeight:Sn("H4.lineHeight"),letterSpacing:Sn("H4.letterSpacing")},H5:{fontFamily:Sn("H5.fontFamily"),fontSize:Sn("H5.fontSize"),fontWeight:Sn("H5.fontWeight"),lineHeight:Sn("H5.lineHeight"),letterSpacing:Sn("H5.letterSpacing")},H6:{fontFamily:Sn("H6.fontFamily"),fontSize:Sn("H6.fontSize"),fontWeight:Sn("H6.fontWeight"),lineHeight:Sn("H6.lineHeight"),letterSpacing:Sn("H6.letterSpacing")},Body:{fontFamily:Sn("Body.fontFamily"),fontSize:Sn("Body.fontSize"),fontWeight:Sn("Body.fontWeight"),lineHeight:Sn("Body.lineHeight"),letterSpacing:Sn("Body.letterSpacing")},BodySmall:{fontFamily:Sn("BodySmall.fontFamily"),fontSize:Sn("BodySmall.fontSize"),fontWeight:Sn("BodySmall.fontWeight"),lineHeight:Sn("BodySmall.lineHeight"),letterSpacing:Sn("BodySmall.letterSpacing")},XSmall:{fontFamily:Sn("XSmall.fontFamily"),fontSize:Sn("XSmall.fontSize"),fontWeight:Sn("XSmall.fontWeight"),lineHeight:Sn("XSmall.lineHeight"),letterSpacing:Sn("XSmall.letterSpacing")}},_n=e=>{switch(e){case 700:case"bold":return wn.Bold;case 600:case"semibold":return wn.Semibold;case 300:case"light":return wn.Light;case 400:case"regular":return wn.Regular;default:return""}},Fn=(e,t)=>n=>{var r;const i=xn[e].fontFamily(n),o=xn[e].fontWeight(n);return Object.values(wn).includes(i)?g`
                font-family: ${_n(t)||_n(o)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=On(t)||o)&&void 0!==r?r:"normal"};
        `},On=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kn=(e,t,n=!1)=>r=>{const i=xn[e],o=i.fontSize(r);return g`
            ${Fn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Dn=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var Bn;!function(e){e.D1=p.h1`
        ${e=>g`
                ${kn("D1",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${kn("D2",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${kn("D3",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${kn("D4",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${kn("DBody",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${kn("H1",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${kn("H2",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${kn("H3",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${kn("H4",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${kn("H5",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${kn("H6",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${kn("Body",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${kn("BodySmall",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${kn("XSmall",e.weight,e.paragraph)}
                color: ${gn.Neutral[1]};
                ${Dn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>An(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>An(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Bn||(Bn={}));const Mn=p.a`
    ${e=>g`
            ${kn(e.textStyle,e.weight)}
            color: ${gn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${gn.Secondary};

                svg {
                    color: ${gn.Secondary};
                }
            }
        `}
`,jn=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,An=n=>{var{external:r=!1,children:i}=n,o=_(n,["external","children"]);return e(Mn,Object.assign({},o,{children:[i,r&&t(jn,{})]}))};var En;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(En||(En={}));const Cn=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${gn.Neutral[5]};
    border-radius: 4px;
    background: ${gn.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${gn.Accent.Light[1]};
        box-shadow: ${vn};
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
                background: ${gn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${gn.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${gn.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${gn.Validation.Red.Border};
                    box-shadow: ${bn};
                }
            `:void 0}
`,zn=p.input`
    ${kn("Body","regular")}
    color: ${gn.Neutral[1]};
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
        color: ${gn.Neutral[3]};
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
`;var In={exports:{}};In.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Tn,Pn,Hn=In.exports,Nn={exports:{}},Ln=Nn.exports=(Tn={year:0,month:1,day:2,hour:3,minute:4,second:5},Pn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Pn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Pn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=Tn[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Rn={exports:{}};Rn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},_=v;_.l=S,_.i=$,_.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=_.p(c),g=function(e){var t=x(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=F.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,F,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Vn=Rn.exports,Wn={exports:{}};Wn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Yn=Wn.exports,qn={exports:{}};qn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Un=qn.exports,Qn={exports:{}};Qn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Zn,Gn=Qn.exports;Vn.extend(Yn),Vn.extend(Un),Vn.extend(Gn),Vn.extend(Hn),Vn.extend(Ln),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Vn(t).startOf("week");return Xn(n).map((e=>Jn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Jn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Vn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Vn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Vn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Zn||(Zn={}));const Xn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Jn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Kn=[1,3,5,7,8,10,12],er=[4,6,9,11];var tr,nr,rr;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Kn.includes(o)?Math.min(i,31).toString():er.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Vn(e,n);return Vn(t,n).diff(r,"minute")}}(tr||(tr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(nr||(nr={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(rr||(rr={}));const ir=p.input`
    ${kn("Body","regular")}
    color: ${gn.Neutral[1]};

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
        color: ${gn.Neutral[3]};
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
`,or=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${gn.Neutral[3]};
    background-color: transparent;
    border: none;
`,ar=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,sr=p.div`
    display: flex;
    width: 100%;
`,lr=i.forwardRef(((r,i)=>{var{value:s,spacing:l,type:u,error:c,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,v=_(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const b=o();a(i,(()=>b.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:b,formatter:e=>rr.transformWithSpaces(e,l)}),$=e=>{f&&(x()?F(e):f(e))},S=()=>{p&&p(),b&&b.current&&b.current.focus()},x=()=>"tel"===u&&l,F=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},O=s?(e=>e?x()?rr.transformWithSpaces(e,l):e:"")(s):s,k=()=>e(n,{children:[t(ir,Object.assign({"data-testid":"input",ref:b,disabled:d,value:O,onChange:$,type:u,readOnly:h},v)),g&&!d&&!h&&!!s&&t(or,Object.assign({onClick:S,type:"button"},{children:t(ar,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(sr,Object.assign({className:m},{children:k()})):t(Cn,Object.assign({$disabled:d,$error:c,$readOnly:h,className:m},{children:k()}))})}));var ur=wt;var cr=wt,dr=$t,hr=Tt;var fr=wt,pr=function(){this.__data__=new ur,this.size=0},gr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},mr=function(e){return this.__data__.get(e)},yr=function(e){return this.__data__.has(e)},vr=function(e,t){var n=this.__data__;if(n instanceof cr){var r=n.__data__;if(!dr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new hr(r)}return n.set(e,t),this.size=n.size,this};function br(e){var t=this.__data__=new fr(e);this.size=t.size}br.prototype.clear=pr,br.prototype.delete=gr,br.prototype.get=mr,br.prototype.has=yr,br.prototype.set=vr;var wr=br;var $r=Tt,Sr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},xr=function(e){return this.__data__.has(e)};function _r(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $r;++t<n;)this.add(e[t])}_r.prototype.add=_r.prototype.push=Sr,_r.prototype.has=xr;var Fr=_r,Or=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},kr=function(e,t){return e.has(t)};var Dr=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&n?new Fr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Or(t,(function(e,t){if(!kr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Br=j.Uint8Array,Mr=at,jr=Dr,Ar=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Er=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Cr=P?P.prototype:void 0,zr=Cr?Cr.valueOf:void 0;var Ir=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Br(e),new Br(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Mr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ar;case"[object Set]":var l=1&r;if(s||(s=Er),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;r|=2,a.set(e,t);var c=jr(s(e),s(t),r,i,o,a);return a.delete(e),c;case"[object Symbol]":if(zr)return zr.call(e)==zr.call(t)}return!1};var Tr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Pr=pe;var Hr=function(e,t,n){var r=t(e);return Pr(e)?r:Tr(r,n(e))};var Nr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Lr=function(){return[]},Rr=Object.prototype.propertyIsEnumerable,Vr=Object.getOwnPropertySymbols,Wr=Vr?function(e){return null==e?[]:(e=Object(e),Nr(Vr(e),(function(t){return Rr.call(e,t)})))}:Lr;var Yr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},qr=Z,Ur=G;var Qr=function(e){return Ur(e)&&"[object Arguments]"==qr(e)},Zr=G,Gr=Object.prototype,Xr=Gr.hasOwnProperty,Jr=Gr.propertyIsEnumerable,Kr=Qr(function(){return arguments}())?Qr:function(e){return Zr(e)&&Xr.call(e,"callee")&&!Jr.call(e,"callee")},ei={exports:{}};var ti=function(){return!1};!function(e,t){var n=j,r=ti,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(ei,ei.exports);var ni=/^(?:0|[1-9]\d*)$/;var ri=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ni.test(e))&&e>-1&&e%1==0&&e<t};var ii=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},oi=Z,ai=ii,si=G,li={};li["[object Float32Array]"]=li["[object Float64Array]"]=li["[object Int8Array]"]=li["[object Int16Array]"]=li["[object Int32Array]"]=li["[object Uint8Array]"]=li["[object Uint8ClampedArray]"]=li["[object Uint16Array]"]=li["[object Uint32Array]"]=!0,li["[object Arguments]"]=li["[object Array]"]=li["[object ArrayBuffer]"]=li["[object Boolean]"]=li["[object DataView]"]=li["[object Date]"]=li["[object Error]"]=li["[object Function]"]=li["[object Map]"]=li["[object Number]"]=li["[object Object]"]=li["[object RegExp]"]=li["[object Set]"]=li["[object String]"]=li["[object WeakMap]"]=!1;var ui=function(e){return si(e)&&ai(e.length)&&!!li[oi(e)]};var ci=function(e){return function(t){return e(t)}},di={exports:{}};!function(e,t){var n=D,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(di,di.exports);var hi=ui,fi=ci,pi=di.exports,gi=pi&&pi.isTypedArray,mi=gi?fi(gi):hi,yi=Yr,vi=Kr,bi=pe,wi=ei.exports,$i=ri,Si=mi,xi=Object.prototype.hasOwnProperty;var _i=function(e,t){var n=bi(e),r=!n&&vi(e),i=!n&&!r&&wi(e),o=!n&&!r&&!i&&Si(e),a=n||r||i||o,s=a?yi(e.length,String):[],l=s.length;for(var u in e)!t&&!xi.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||$i(u,l))||s.push(u);return s},Fi=Object.prototype;var Oi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fi)};var ki=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Di=Oi,Bi=ki,Mi=Object.prototype.hasOwnProperty;var ji=xe,Ai=ii;var Ei=function(e){return null!=e&&Ai(e.length)&&!ji(e)},Ci=_i,zi=function(e){if(!Di(e))return Bi(e);var t=[];for(var n in Object(e))Mi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ii=Ei;var Ti=function(e){return Ii(e)?Ci(e):zi(e)},Pi=Hr,Hi=Wr,Ni=Ti;var Li=function(e){return Pi(e,Ni,Hi)},Ri=Object.prototype.hasOwnProperty;var Vi=function(e,t,n,r,i,o){var a=1&n,s=Li(e),l=s.length;if(l!=Li(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:Ri.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var g=e[c=s[u]],m=t[c];if(r)var y=a?r(m,g,c,t,e,o):r(g,m,c,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Wi=Le(j,"DataView"),Yi=$t,qi=Le(j,"Promise"),Ui=Le(j,"Set"),Qi=Le(j,"WeakMap"),Zi=Z,Gi=De,Xi="[object Map]",Ji="[object Promise]",Ki="[object Set]",eo="[object WeakMap]",to="[object DataView]",no=Gi(Wi),ro=Gi(Yi),io=Gi(qi),oo=Gi(Ui),ao=Gi(Qi),so=Zi;(Wi&&so(new Wi(new ArrayBuffer(1)))!=to||Yi&&so(new Yi)!=Xi||qi&&so(qi.resolve())!=Ji||Ui&&so(new Ui)!=Ki||Qi&&so(new Qi)!=eo)&&(so=function(e){var t=Zi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Gi(n):"";if(r)switch(r){case no:return to;case ro:return Xi;case io:return Ji;case oo:return Ki;case ao:return eo}return t});var lo=wr,uo=Dr,co=Ir,ho=Vi,fo=so,po=pe,go=ei.exports,mo=mi,yo="[object Arguments]",vo="[object Array]",bo="[object Object]",wo=Object.prototype.hasOwnProperty;var $o=function(e,t,n,r,i,o){var a=po(e),s=po(t),l=a?vo:fo(e),u=s?vo:fo(t),c=(l=l==yo?bo:l)==bo,d=(u=u==yo?bo:u)==bo,h=l==u;if(h&&go(e)){if(!go(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new lo),a||mo(e)?uo(e,t,n,r,i,o):co(e,t,l,n,r,i,o);if(!(1&n)){var f=c&&wo.call(e,"__wrapped__"),p=d&&wo.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new lo),i(g,m,n,r,o)}}return!!h&&(o||(o=new lo),ho(e,t,n,r,i,o))},So=G;var xo=function e(t,n,r,i,o){return t===n||(null==t||null==n||!So(t)&&!So(n)?t!=t&&n!=n:$o(t,n,r,i,e,o))},_o=wr,Fo=xo;var Oo=k;var ko=function(e){return e==e&&!Oo(e)},Do=ko,Bo=Ti;var Mo=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},jo=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new _o;if(r)var h=r(u,c,l,e,t,d);if(!(void 0===h?Fo(c,u,3,r,d):h))return!1}}return!0},Ao=function(e){for(var t=Bo(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Do(i)]}return t},Eo=Mo;var Co=tn,zo=Kr,Io=pe,To=ri,Po=ii,Ho=rn;var No=function(e,t){return null!=e&&t in Object(e)},Lo=function(e,t,n){for(var r=-1,i=(t=Co(t,e)).length,o=!1;++r<i;){var a=Ho(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Po(i)&&To(a,i)&&(Io(e)||zo(e))};var Ro=xo,Vo=un,Wo=function(e,t){return null!=e&&Lo(e,t,No)},Yo=be,qo=ko,Uo=Mo,Qo=rn;var Zo=sn;var Go=function(e){return function(t){return null==t?void 0:t[e]}},Xo=function(e){return function(t){return Zo(t,e)}},Jo=be,Ko=rn;var ea=function(e){var t=Ao(e);return 1==t.length&&t[0][2]?Eo(t[0][0],t[0][1]):function(n){return n===e||jo(n,e,t)}},ta=function(e,t){return Yo(e)&&qo(t)?Uo(Qo(e),t):function(n){var r=Vo(n,e);return void 0===r&&r===t?Wo(n,e):Ro(t,r,3)}},na=function(e){return e},ra=pe,ia=function(e){return Jo(e)?Go(Ko(e)):Xo(e)};var oa=function(e){return"function"==typeof e?e:null==e?na:"object"==typeof e?ra(e)?ta(e[0],e[1]):ea(e):ia(e)},aa=oa,sa=Ei,la=Ti;var ua=function(e){return function(t,n,r){var i=Object(t);if(!sa(t)){var o=aa(n);t=la(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var ca=se,da=1/0;var ha=function(e){return e?(e=ca(e))===da||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fa=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},pa=oa,ga=function(e){var t=ha(e),n=t%1;return t==t?n?t-n:t:0},ma=Math.max;var ya=ua((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ga(n);return i<0&&(i=ma(r+i,0)),fa(e,pa(t),i)})),va=xo;var ba=function(e,t){return va(e,t)};let wa=Ia();const $a=e=>Aa(e,wa);let Sa=Ia();$a.write=e=>Aa(e,Sa);let xa=Ia();$a.onStart=e=>Aa(e,xa);let _a=Ia();$a.onFrame=e=>Aa(e,_a);let Fa=Ia();$a.onFinish=e=>Aa(e,Fa);let Oa=[];$a.setTimeout=(e,t)=>{let n=$a.now()+t,r=()=>{let e=Oa.findIndex((e=>e.cancel==r));~e&&Oa.splice(e,1),Ma-=~e?1:0},i={time:n,handler:e,cancel:r};return Oa.splice(ka(n),0,i),Ma+=1,Ea(),i};let ka=e=>~(~Oa.findIndex((t=>t.time>e))||~Oa.length);$a.cancel=e=>{xa.delete(e),_a.delete(e),Fa.delete(e),wa.delete(e),Sa.delete(e)},$a.sync=e=>{ja=!0,$a.batchedUpdates(e),ja=!1},$a.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,$a.onStart(n)}return r.handler=e,r.cancel=()=>{xa.delete(n),t=null},r};let Da="undefined"!=typeof window?window.requestAnimationFrame:()=>{};$a.use=e=>Da=e,$a.now="undefined"!=typeof performance?()=>performance.now():Date.now,$a.batchedUpdates=e=>e(),$a.catch=console.error,$a.frameLoop="always",$a.advance=()=>{"demand"!==$a.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):za()};let Ba=-1,Ma=0,ja=!1;function Aa(e,t){ja?(t.delete(e),e(0)):(t.add(e),Ea())}function Ea(){Ba<0&&(Ba=0,"demand"!==$a.frameLoop&&Da(Ca))}function Ca(){~Ba&&(Da(Ca),$a.batchedUpdates(za))}function za(){let e=Ba;Ba=$a.now();let t=ka(Ba);t&&(Ta(Oa.splice(0,t),(e=>e.handler())),Ma-=t),Ma?(xa.flush(),wa.flush(e?Math.min(64,Ba-e):16.667),_a.flush(),Sa.flush(),Fa.flush()):Ba=-1}function Ia(){let e=new Set,t=e;return{add(n){Ma+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ma-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ma-=t.size,Ta(t,(t=>t(n)&&e.add(t))),Ma+=e.size,t=e)}}}function Ta(e,t){e.forEach((e=>{try{t(e)}catch(e){$a.catch(e)}}))}function Pa(){}const Ha={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Na(e,t){if(Ha.arr(e)){if(!Ha.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const La=(e,t)=>e.forEach(t);function Ra(e,t,n){if(Ha.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Va=e=>Ha.und(e)?[]:Ha.arr(e)?e:[e];function Wa(e,t){if(e.size){const n=Array.from(e);e.clear(),La(n,t)}}const Ya=(e,...t)=>Wa(e,(e=>e(...t))),qa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ua,Qa,Za=null,Ga=!1,Xa=Pa;var Ja=Object.freeze({__proto__:null,get createStringInterpolator(){return Ua},get to(){return Qa},get colors(){return Za},get skipAnimation(){return Ga},get willAdvance(){return Xa},assign:e=>{e.to&&(Qa=e.to),e.now&&($a.now=e.now),void 0!==e.colors&&(Za=e.colors),null!=e.skipAnimation&&(Ga=e.skipAnimation),e.createStringInterpolator&&(Ua=e.createStringInterpolator),e.requestAnimationFrame&&$a.use(e.requestAnimationFrame),e.batchedUpdates&&($a.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Xa=e.willAdvance),e.frameLoop&&($a.frameLoop=e.frameLoop)}});const Ka=new Set;let es=[],ts=[],ns=0;const rs={get idle(){return!Ka.size&&!es.length},start(e){ns>e.priority?(Ka.add(e),$a.onStart(is)):(os(e),$a(ss))},advance:ss,sort(e){if(ns)$a.onFrame((()=>rs.sort(e)));else{const t=es.indexOf(e);~t&&(es.splice(t,1),as(e))}},clear(){es=[],Ka.clear()}};function is(){Ka.forEach(os),Ka.clear(),$a(ss)}function os(e){es.includes(e)||as(e)}function as(e){es.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(es,(t=>t.priority>e.priority)),0,e)}function ss(e){const t=ts;for(let n=0;n<es.length;n++){const r=es[n];ns=r.priority,r.idle||(Xa(r),r.advance(e),r.idle||t.push(r))}return ns=0,ts=es,ts.length=0,es=t,es.length>0}const ls="[-+]?\\d*\\.?\\d+",us=ls+"%";function cs(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ds=new RegExp("rgb"+cs(ls,ls,ls)),hs=new RegExp("rgba"+cs(ls,ls,ls,ls)),fs=new RegExp("hsl"+cs(ls,us,us)),ps=new RegExp("hsla"+cs(ls,us,us,ls)),gs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ms=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ys=/^#([0-9a-fA-F]{6})$/,vs=/^#([0-9a-fA-F]{8})$/;function bs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ws(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=bs(i,r,e+1/3),a=bs(i,r,e),s=bs(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function $s(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ss(e){return(parseFloat(e)%360+360)%360/360}function xs(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function _s(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Fs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ys.exec(e))?parseInt(t[1]+"ff",16)>>>0:Za&&void 0!==Za[e]?Za[e]:(t=ds.exec(e))?($s(t[1])<<24|$s(t[2])<<16|$s(t[3])<<8|255)>>>0:(t=hs.exec(e))?($s(t[1])<<24|$s(t[2])<<16|$s(t[3])<<8|xs(t[4]))>>>0:(t=gs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=vs.exec(e))?parseInt(t[1],16)>>>0:(t=ms.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=fs.exec(e))?(255|ws(Ss(t[1]),_s(t[2]),_s(t[3])))>>>0:(t=ps.exec(e))?(ws(Ss(t[1]),_s(t[2]),_s(t[3]))|xs(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Os=(e,t,n)=>{if(Ha.fun(e))return e;if(Ha.arr(e))return Os({range:e,output:t,extrapolate:n});if(Ha.str(e.output[0]))return Ua(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ks=1.70158,Ds=1.525*ks,Bs=ks+1,Ms=2*Math.PI/3,js=2*Math.PI/4.5,As=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Es={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Bs*e*e*e-ks*e*e,easeOutBack:e=>1+Bs*Math.pow(e-1,3)+ks*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ds)/2:(Math.pow(2*e-2,2)*((Ds+1)*(2*e-2)+Ds)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ms),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ms)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*js)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*js)/2+1,easeInBounce:e=>1-As(1-e),easeOutBounce:As,easeInOutBounce:e=>e<.5?(1-As(1-2*e))/2:(1+As(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}const zs=Symbol.for("FluidValue.get"),Is=Symbol.for("FluidValue.observers"),Ts=e=>Boolean(e&&e[zs]),Ps=e=>e&&e[zs]?e[zs]():e,Hs=e=>e[Is]||null;function Ns(e,t){let n=e[Is];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ls{constructor(e){if(this[zs]=void 0,this[Is]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Rs(this,e)}}const Rs=(e,t)=>Ys(e,zs,t);function Vs(e,t){if(e[zs]){let n=e[Is];n||Ys(e,Is,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ws(e,t){let n=e[Is];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Is]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ys=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),qs=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Us=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Qs=new RegExp(`(${qs.source})(%|[a-z]+)`,"i"),Zs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Gs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Xs=e=>{const[t,n]=Js(e);if(!t||qa())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Gs.test(n)?Xs(n):n||e},Js=e=>{const t=Gs.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ks;const el=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,tl=e=>{Ks||(Ks=Za?new RegExp(`(${Object.keys(Za).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ps(e).replace(Gs,Xs).replace(Us,Fs).replace(Ks,Fs))),n=t.map((e=>e.match(qs).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Os(Cs({},e,{output:t}))));return e=>{var n;const i=!Qs.test(t[0])&&(null==(n=t.find((e=>Qs.test(e))))?void 0:n.replace(qs,""));let o=0;return t[0].replace(qs,(()=>`${r[o++](e)}${i||""}`)).replace(Zs,el)}},nl="react-spring: ",rl=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${nl}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},il=rl(console.warn);const ol=rl(console.warn);function al(e){return Ha.str(e)&&("#"==e[0]||/\d/.test(e)||!qa()&&Gs.test(e)||e in(Za||{}))}const sl=qa()?s:l,ll=()=>{const e=o(!1);return sl((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ul(){const e=u()[1],t=ll();return()=>{t.current&&e(Math.random())}}const cl=e=>s(e,dl),dl=[];function hl(e){const t=o();return s((()=>{t.current=e})),t.current}const fl=Symbol.for("Animated:node"),pl=e=>e&&e[fl],gl=(e,t)=>{return n=e,r=fl,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ml=e=>e&&e[fl]&&e[fl].getPayload();class yl{constructor(){this.payload=void 0,gl(this,this)}getPayload(){return this.payload||[]}}class vl extends yl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ha.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new vl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ha.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ha.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class bl extends vl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Os({output:[e,e]})}static create(e){return new bl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ha.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Os({output:[this.getValue(),e]})),this._value=0,super.reset()}}const wl={dependencies:null};class $l extends yl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ra(this.source,((n,r)=>{var i;(i=n)&&i[fl]===i?t[r]=n.getValue(e):Ts(n)?t[r]=Ps(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&La(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ra(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){wl.dependencies&&Ts(e)&&wl.dependencies.add(e);const t=ml(e);t&&La(t,(e=>this.add(e)))}}class Sl extends $l{constructor(e){super(e)}static create(e){return new Sl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(xl)),!0)}}function xl(e){return(al(e)?bl:vl).create(e)}function _l(e){const t=pl(e);return t?t.constructor:Ha.arr(e)?Sl:al(e)?bl:vl}function Fl(){return Fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fl.apply(this,arguments)}const Ol=(e,t)=>{const n=!Ha.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const l=o(null),u=n&&d((e=>{l.current=function(e,t){e&&(Ha.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,h]=function(e,t){const n=new Set;wl.dependencies=n,e.style&&(e=Fl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new $l(e),wl.dependencies=null,[e,n]}(i,t),f=ul(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new kl(p,h),m=o();sl((()=>(m.current=g,La(h,(e=>Vs(e,g))),()=>{m.current&&(La(m.current.deps,(e=>Ws(e,m.current))),$a.cancel(m.current.update))}))),s(p,[]),cl((()=>()=>{const e=m.current;La(e.deps,(t=>Ws(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Fl({},y,{ref:u}))}))};class kl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&$a.write(this.update)}}const Dl=Symbol.for("AnimatedComponent"),Bl=e=>Ha.str(e)?e:e&&Ha.str(e.displayName)?e.displayName:Ha.fun(e)&&e.name||null;function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}function jl(e,...t){return Ha.fun(e)?e(...t):e}const Al=(e,t)=>!0===e||!!(t&&e&&(Ha.fun(e)?e(t):Va(e).includes(t))),El=(e,t)=>Ha.obj(e)?t&&e[t]:e,Cl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,zl=e=>e,Il=(e,t=zl)=>{let n=Tl;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Ha.und(n)||(r[i]=n)}return r},Tl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Pl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Hl(e){const t=function(e){const t={};let n=0;if(Ra(e,((e,r)=>{Pl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ra(e,((e,r)=>r in t||(n[r]=e))),n}return Ml({},e)}function Nl(e){return e=Ps(e),Ha.arr(e)?e.map(Nl):al(e)?Ja.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ll(e){return Ha.fun(e)||Ha.arr(e)&&Ha.obj(e[0])}const Rl=Ml({},{tension:170,friction:26},{mass:1,damping:1,easing:Es.linear,clamp:!1});class Vl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Rl)}}function Wl(e,t){if(Ha.und(t.decay)){const n=!Ha.und(t.tension)||!Ha.und(t.friction);!n&&Ha.und(t.frequency)&&Ha.und(t.damping)&&Ha.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Yl=[];class ql{constructor(){this.changed=!1,this.values=Yl,this.toValues=null,this.fromValues=Yl,this.to=void 0,this.from=void 0,this.config=new Vl,this.immediate=!1}}function Ul(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Al(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Ha.und(n.pause)||(i.paused=Al(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Al(e,t)),u=jl(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-$a.now()}function f(){u>0&&!Ja.skipAnimation?(i.delayed=!0,c=$a.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(Ml({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Ql=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Xl(e.get()):t.every((e=>e.noop))?Zl(e.get()):Gl(e.get(),t.every((e=>e.finished))),Zl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Gl=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Xl=e=>({value:e,cancelled:!0,finished:!1});function Jl(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Il(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Xl(r)||i!==n.asyncId&&Gl(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new eu,a=new tu;return(async()=>{if(Ja.skipAnimation)throw Kl(n),a.result=Gl(r,!1),d(a),a;f(o);const s=Ha.obj(e)?Ml({},e):Ml({},t,{to:e});s.parentId=i,Ra(u,((e,t)=>{Ha.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ja.skipAnimation)return Kl(n),Gl(r,!1);try{let t;t=Ha.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=Gl(r.get(),!0,!1)}catch(e){if(e instanceof eu)g=e.result;else{if(!(e instanceof tu))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Ha.fun(a)&&$a.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Kl(e,t){Wa(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class eu extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class tu extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const nu=e=>e instanceof iu;let ru=1;class iu extends Ls{constructor(...e){super(...e),this.id=ru++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=pl(this);return e&&e.getValue()}to(...e){return Ja.to(this,e)}interpolate(...e){return il(`${nl}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ja.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ns(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||rs.sort(this),Ns(this,{type:"priority",parent:this,priority:e})}}const ou=Symbol.for("SpringPhase"),au=e=>(1&e[ou])>0,su=e=>(2&e[ou])>0,lu=e=>(4&e[ou])>0,uu=(e,t)=>t?e[ou]|=3:e[ou]&=-3,cu=(e,t)=>t?e[ou]|=4:e[ou]&=-5;class du extends iu{constructor(e,t){if(super(),this.key=void 0,this.animation=new ql,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ha.und(e)||!Ha.und(t)){const n=Ha.obj(e)?Ml({},e):Ml({},t,{from:e});Ha.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(su(this)||this._state.asyncTo)||lu(this)}get goal(){return Ps(this.animation.to)}get velocity(){const e=pl(this);return e instanceof vl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return au(this)}get isAnimating(){return su(this)}get isPaused(){return lu(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ml(r.to);!a&&Ts(r.to)&&(o=Va(Ps(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==bl?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ha.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(Ha.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Ha.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=pl(this),l=s.getValue();if(t){const e=Ps(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return $a.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(su(this)){const{to:e,config:t}=this.animation;$a.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ha.und(e)?(n=this.queue||[],this.queue=[]):n=[Ha.obj(e)?e:Ml({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Ql(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Kl(this._state,e&&this._lastCallId),$a.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ha.obj(n)?n[t]:n,(null==n||Ll(n))&&(n=void 0),r=Ha.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return au(this)||(e.reverse&&([n,r]=[r,n]),r=Ps(r),Ha.und(r)?pl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Ml({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Il(n,((e,t)=>/^on/.test(t)?El(e,r):e))),vu(this,n,"onProps"),bu(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ul(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{lu(this)||(cu(this,!0),Ya(a.pauseQueue),bu(this,"onPause",Gl(this,hu(this,this.animation.to)),this))},resume:()=>{lu(this)&&(cu(this,!1),su(this)&&this._resume(),Ya(a.resumeQueue),bu(this,"onResume",Gl(this,hu(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=fu(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Xl(this));const r=!Ha.und(e.to),i=!Ha.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Xl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!Ha.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Na(d,u);h&&(s.from=d),d=Ps(d);const f=!Na(c,l);f&&this._focus(c);const p=Ll(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Wl(n=Ml({},n),t),t=Ml({},n,t)),Wl(e,t),Object.assign(e,t);for(const t in Rl)null==e[t]&&(e[t]=Rl[t]);let{mass:r,frequency:i,damping:o}=e;Ha.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,jl(t.config,o),t.config!==a.config?jl(a.config,o):void 0);let v=pl(this);if(!v||Ha.und(c))return n(Gl(this,!0));const b=Ha.und(t.reset)?i&&!t.default:!Ha.und(d)&&Al(t.reset,o),w=b?d:this.get(),$=Nl(c),S=Ha.num($)||Ha.arr($)||al($),x=!p&&(!S||Al(a.immediate||t.immediate,o));if(f){const e=_l(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=Ts(c),O=!1;if(!F){const e=b||!au(this)&&h;(f||e)&&(O=Na(Nl(w),$),F=!O),(Na(s.immediate,x)||x)&&Na(g.decay,m)&&Na(g.velocity,y)||(F=!0)}if(O&&su(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||Ts(l))&&(s.values=v.getPayload(),s.toValues=Ts(c)?null:_==bl?[1]:Va($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),F)){const{onRest:e}=s;La(yu,(e=>vu(this,t,e)));const r=Gl(this,hu(this,l));Ya(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&$a.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?jl(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Jl(t.to,t,this._state,this)):F?this._start():su(this)&&!f?this._pendingCalls.add(n):n(Zl(w))}_focus(e){const t=this.animation;e!==t.to&&(Hs(this)&&this._detach(),t.to=e,Hs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ts(t)&&(Vs(t,this),nu(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ts(e)&&Ws(e,this)}_set(e,t=!0){const n=Ps(e);if(!Ha.und(n)){const e=pl(this);if(!e||!Na(n,e.getValue())){const r=_l(n);e&&e.constructor==r?e.setValue(n):gl(this,r.create(n)),e&&$a.batchedUpdates((()=>{this._onChange(n,t)}))}}return pl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,bu(this,"onStart",Gl(this,hu(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),jl(this.animation.onChange,e,this)),jl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;pl(this).reset(Ps(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),su(this)||(uu(this,!0),lu(this)||this._resume())}_resume(){Ja.skipAnimation?this.finish():rs.start(this)}_stop(e,t){if(su(this)){uu(this,!1);const n=this.animation;La(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ns(this,{type:"idle",parent:this});const r=t?Xl(this.get()):Gl(this.get(),hu(this,null!=e?e:n.to));Ya(this._pendingCalls,r),n.changed&&(n.changed=!1,bu(this,"onRest",r,this))}}}function hu(e,t){const n=Nl(t);return Na(Nl(e.get()),n)}function fu(e,t=e.loop,n=e.to){let r=jl(t);if(r){const i=!0!==r&&Hl(r),o=(i||e).reverse,a=!i||i.reset;return pu(Ml({},e,{loop:t,default:!1,pause:void 0,to:!o||Ll(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function pu(e){const{to:t,from:n}=e=Hl(e),r=new Set;return Ha.obj(t)&&mu(t,r),Ha.obj(n)&&mu(n,r),e.keys=r.size?Array.from(r):null,e}function gu(e){const t=pu(e);return Ha.und(t.default)&&(t.default=Il(t)),t}function mu(e,t){Ra(e,((e,n)=>null!=e&&t.add(n)))}const yu=["onStart","onRest","onChange","onPause","onResume"];function vu(e,t,n){e.animation[n]=t[n]!==Cl(t,n)?El(t[n],e.key):void 0}function bu(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const wu=["onStart","onChange","onRest"];let $u=1;class Su{constructor(e,t){this.id=$u++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ml({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ha.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(pu(e)),this}start(e){let{queue:t}=this;return e?t=Va(e).map(pu):this.queue=[],this._flush?this._flush(this,t):(Bu(this,t),xu(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;La(Va(t),(t=>n[t].stop(!!e)))}else Kl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ha.und(e))this.start({pause:!0});else{const t=this.springs;La(Va(e),(e=>t[e].pause()))}return this}resume(e){if(Ha.und(e))this.start({pause:!1});else{const t=this.springs;La(Va(e),(e=>t[e].resume()))}return this}each(e){Ra(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Wa(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Wa(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Wa(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}$a.onFrame(this._onFrame)}}function xu(e,t){return Promise.all(t.map((t=>_u(e,t)))).then((t=>Ql(e,t)))}async function _u(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Ha.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Ha.arr(i)||Ha.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):La(wu,(n=>{const r=t[n];if(Ha.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ya(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Cl(t,"cancel");(c||f&&d.asyncId)&&h.push(Ul(++e._lastAsyncId,{props:t,state:d,actions:{pause:Pa,resume:Pa,start(t,n){f?(Kl(d,e._lastAsyncId),n(Xl(e))):(t.onRest=s,n(Jl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ql(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=fu(t,a,i);if(n)return Bu(e,[n]),_u(e,n,!0)}return l&&$a.batchedUpdates((()=>l(p,e,e.item))),p}function Fu(e,t){const n=Ml({},e.springs);return t&&La(Va(t),(e=>{Ha.und(e.keys)&&(e=pu(e)),Ha.obj(e.to)||(e=Ml({},e,{to:void 0})),Du(n,e,(e=>ku(e)))})),Ou(e,n),n}function Ou(e,t){Ra(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Vs(t,e))}))}function ku(e,t){const n=new du;return n.key=e,t&&Vs(n,t),n}function Du(e,t,n){t.keys&&La(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Bu(e,t){La(t,(t=>{Du(e.springs,t,(t=>ku(t,e)))}))}const Mu=["children"],ju=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Mu);const i=h(Au),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=u((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return s((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Au;return r.createElement(c,{value:n},t)},Au=(Eu=ju,Cu={},Object.assign(Eu,r.createContext(Cu)),Eu.Provider._context=Eu,Eu.Consumer._context=Eu,Eu);var Eu,Cu;ju.Provider=Au.Provider,ju.Consumer=Au.Consumer;const zu=()=>{const e=[],t=function(t){ol(`${nl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return La(e,((e,i)=>{if(Ha.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return La(e,(e=>e.pause(...arguments))),this},t.resume=function(){return La(e,(e=>e.resume(...arguments))),this},t.set=function(t){La(e,(e=>e.set(t)))},t.start=function(t){const n=[];return La(e,((e,r)=>{if(Ha.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return La(e,(e=>e.stop(...arguments))),this},t.update=function(t){return La(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ha.fun(e)?e(n,t):e};return t._getProps=n,t};function Iu(e,t){const n=Ha.fun(e),[[r],i]=function(e,t,n){const r=Ha.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?zu():void 0),[]),a=o(0),s=ul(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=Fu(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?xu(e,t):new Promise((r=>{Ou(e,n),l.queue.push((()=>{r(xu(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=hl(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Su(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=gu(n))}}f((()=>{La(u.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=u.current.map(((e,t)=>Fu(e,c[t]))),m=h(ju),y=hl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);sl((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],La(e,(e=>e()))),La(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),cl((()=>()=>{La(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Ml({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Tu;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Tu||(Tu={}));class Pu extends iu{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Os(...t);const n=this._get(),r=_l(n);gl(this,r.create(n))}advance(e){const t=this._get();Na(t,this.get())||(pl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Nu(this._active)&&Lu(this)}_get(){const e=Ha.arr(this.source)?this.source.map(Ps):Va(Ps(this.source));return this.calc(...e)}_start(){this.idle&&!Nu(this._active)&&(this.idle=!1,La(ml(this),(e=>{e.done=!1})),Ja.skipAnimation?($a.batchedUpdates((()=>this.advance())),Lu(this)):rs.start(this))}_attach(){let e=1;La(Va(this.source),(t=>{Ts(t)&&Vs(t,this),nu(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){La(Va(this.source),(e=>{Ts(e)&&Ws(e,this)})),this._active.clear(),Lu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Va(this.source).reduce(((e,t)=>Math.max(e,(nu(t)?t.priority:0)+1)),0))}}function Hu(e){return!1!==e.idle}function Nu(e){return!e.size||Array.from(e).every(Hu)}function Lu(e){e.idle||(e.idle=!0,La(ml(e),(e=>{e.done=!0})),Ns(e,{type:"idle",parent:e}))}function Ru(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Ja.assign({createStringInterpolator:tl,to:(e,t)=>new Pu(e,t)});const Vu=["style","children","scrollTop","scrollLeft","viewBox"],Wu=/^--/;function Yu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Wu.test(e)||Uu.hasOwnProperty(e)&&Uu[e]?(""+t).trim():t+"px"}const qu={};let Uu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Qu=["Webkit","Ms","Moz","O"];Uu=Object.keys(Uu).reduce(((e,t)=>(Qu.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Uu);const Zu=["x","y","z"],Gu=/^(matrix|translate|scale|rotate|skew)/,Xu=/^(translate)/,Ju=/^(rotate|skew)/,Ku=(e,t)=>Ha.num(e)&&0!==e?e+t:e,ec=(e,t)=>Ha.arr(e)?e.every((e=>ec(e,t))):Ha.num(e)?e===t:parseFloat(e)===t;class tc extends $l{constructor(e){let{x:t,y:n,z:r}=e,i=Ru(e,Zu);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ku(e,"px"))).join(",")})`,ec(e,0)]))),Ra(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Gu.test(t)){if(delete i[t],Ha.und(e))return;const n=Xu.test(t)?"px":Ju.test(t)?"deg":"";o.push(Va(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ku(i,n)})`,ec(i,0)]:e=>[`${t}(${e.map((e=>Ku(e,n))).join(",")})`,ec(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new nc(o,a)),super(i)}}class nc extends Ls{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return La(this.inputs,((n,r)=>{const i=Ps(n[0]),[o,a]=this.transforms[r](Ha.arr(i)?i:n.map(Ps));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&La(this.inputs,(e=>La(e,(e=>Ts(e)&&Vs(e,this)))))}observerRemoved(e){0==e&&La(this.inputs,(e=>La(e,(e=>Ts(e)&&Ws(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ns(this,e)}}const rc=["scrollTop","scrollLeft"];Ja.assign({batchedUpdates:b,createStringInterpolator:tl,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ic=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new $l(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Bl(e)||"Anonymous";return(e=Ha.str(e)?o[e]||(o[e]=Ol(e,i)):e[Dl]||(e[Dl]=Ol(e,i))).displayName=`Animated(${t})`,e};return Ra(e,((t,n)=>{Ha.arr(e)&&(n=Bl(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,u=Ru(r,Vu),c=Object.values(u),d=Object.keys(u).map((t=>n||e.hasAttribute(t)?t:qu[t]||(qu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Yu(t,i[t]);Wu.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new tc(e),getComponentProps:e=>Ru(e,rc)}),oc=ic.animated,ac={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sc=e=>Object.keys(ac).reduce(((t,n)=>{const r=ac[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),lc=sc("max-width"),uc=(sc("min-width"),p.div`
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
    border-color: ${e=>e.$color||gn.Neutral[8](e)}
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
                    background-color: ${gn.Neutral[8](e)};
                    border: 1px solid ${gn.Primary(e)};

                    span {
                        color: ${gn.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${gn.Neutral[8](e)};
                    border: 1px solid ${gn.Neutral[5](e)};

                    span {
                        color: ${gn.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${gn.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${gn.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gn.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${gn.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${gn.Primary(e)};
                    border: 1px solid transparent;

                    ${lc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${gn.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${kn("H5","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${kn("H4","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `}
`;const gc=p((({color:n,className:r,size:i=18})=>e(uc,Object.assign({className:r,$size:i,$color:n},{children:[t(dc,{id:"inner1",$size:i-2,$borderWidth:2}),t(hc,{id:"inner2",$size:i-2,$borderWidth:2}),t(fc,{id:"inner3",$size:i-2,$borderWidth:2}),t(pc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=gn.Primary(e);break;case"disabled":t=gn.Neutral[3](e);break;default:t=gn.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,mc=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${gn.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=gn.Primary(e),n=gn.Primary(e)),e.disabled&&(t=gn.Neutral[6](e),n=gn.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,yc=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,vc=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?gn.Neutral[4]:gn.Neutral[8]};
`,bc=p(oc.div)`
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

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${gn.Neutral[4]};
        border-right: 5px solid ${gn.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${lc.mobileL} {
        max-height: 15rem;
    }
`,$c=p.li`
    :hover,
    :focus,
    :active {
        background: ${gn.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${gn.Accent.Light[5]};
            `}}
`,Sc=p.button`
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
        outline-color: ${gn.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,xc=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,_c=p.div`
    ${kn("Body","regular")}
    color: ${gn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&xc}
`,Fc=p.div`
    color: ${gn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&xc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${kn("BodySmall","semibold")}
                `:g`
                    ${kn("Body","regular")}
                `}
`,Oc=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${_c} {
                        display: inline;
                    }

                    ${Fc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,kc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Dc=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Bc=p((n=>{var{className:r,checked:i,disabled:o,onChange:a,onKeyPress:l,displaySize:c="default"}=n,d=_(n,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,f]=u(i);s((()=>{f(i)}),[i]);const p=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return e(mc,Object.assign({selected:h,disabled:o,className:r,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:p},{children:[t(yc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:o,checked:h},d)),h&&t(vc,{id:"checkmark","data-testid":"checkmark",disabled:o,$displaySize:c})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Mc=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,jc=p.button`
    ${kn("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${gn.Primary(e)};\n\t\t`}
`,Ac=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ec=p(Bn.Body)``,Cc=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${gn.Validation.Red.Icon};
`,zc=p.button`
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
                background-color: ${gn.Neutral[7]};
            `}
    }
`,Ic=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(zc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Tc=p.li`
    background: ${gn.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Pc=p(zn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Hc=p(S)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${gn.Neutral[3]};
`,Nc=p(Ic)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${gn.Neutral[3]};
    cursor: pointer;
`,Lc=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${gn.Neutral[3]};
`,Rc=c(((n,r)=>{const{onClear:i}=n,o=_(n,["onClear"]);return e(Tc,{children:[t(Hc,{}),t(Pc,Object.assign({ref:r},o)),o.value&&t(Nc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Lc,{})}))]},"search")})),Vc=r=>{var{listItems:i,listExtractor:a,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:v,multiSelect:b,selectedItems:w,onSelectAll:$,onRetry:S,itemsLoadState:x="success",itemTruncationType:F="end",itemMaxLines:O=2,labelDisplayType:k="inline",renderListItem:D,onBlur:B,hideNoResultsDisplay:M,renderCustomCallToAction:j}=r,A=_(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,C]=u(0),[z,I]=u(""),[T,P]=u(i),[H,N]=u(0),L=Iu({height:H}),R=o(),V=o(),W=o([]),Y=o(),q=o(),U=o(E),Q=o(T),Z=e=>{U.current=e,C(e)},G=e=>{Q.current=e,P(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(z)}),[z]),s((()=>{if(I(""),h){if(setTimeout((()=>{N(te())})),v)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[E]&&W.current[E].focus()}else N(0)}),[h]),s((()=>{if(h){const e=te();N(e)}}),[T,x]),s((()=>{G(i),I(""),Z(0)}),[i]);const X=e=>a?a(e):e.toString(),J=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return rr.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},K=e=>!!ya(w,(t=>ba(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;I(t),g&&g()},oe=()=>{I(""),Y.current.focus(),g&&g()},ae=()=>{S&&S()},se=()=>{B&&B()},le=r=>e(n,{children:[t(kc,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r})),t(Dc,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r}))]}),ue=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=J(i),s=o&&J(o),l=a||s?"next-line":k;return e(Oc,Object.assign({$labelDisplayType:l},{children:[t(_c,Object.assign({$truncateType:F,$maxLines:O,"aria-label":i},{children:"middle"===F&&a?le(i):i})),o&&t(Fc,Object.assign({$truncateType:F,$maxLines:O,$labelDisplayType:k,"aria-label":o},{children:"middle"===F&&s?le(o):o}))]}))},ce=()=>{if(!S||S&&"success"===x)return T.map(((n,r)=>t($c,Object.assign({$checked:K(n)&&!b},{children:e(Sc,Object.assign({$hasNextLineLabel:"next-line"===k&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:b,onBlur:se},{children:[b&&t(Bc,{checked:K(n),displaySize:"small"}),D?D(n,{selected:K(n)}):ue(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(b&&T.length>0&&!z&&"success"===x)return t(Mc,{children:t(jc,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!M&&(z||!f)&&0===T.length&&"success"===x)return e(Ac,Object.assign({"data-testid":"list-no-results"},{children:[t(Cc,{"data-testid":"no-result-icon"}),t(Ec,{children:"No results found."})]}),"noResults")},fe=()=>{if(S&&"loading"===x)return e(Ac,Object.assign({"data-testid":"list-loading"},{children:[t(gc,{$buttonStyle:"secondary",size:24}),t(Ec,{children:"Loading..."})]}),"loading")},pe=()=>{if(S&&"fail"===x)return e(Ac,Object.assign({"data-testid":"list-fail"},{children:[t(Cc,{"data-testid":"load-error-icon"}),t(Ec,{children:"Failed to load."}),t(jc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(bc,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(wc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},A,{children:[(f||m)&&"success"===x?t(Rc,{ref:Y,onChange:ie,value:z,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),fe(),pe(),ce()]}))})(),(()=>{if(h&&j)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:j(y,T)}))})()]}))})},Wc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Yc=p.div`
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
        outline: 2px solid ${gn.Accent.Light[3]};
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
    border: 1px solid ${gn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${gn.Neutral[8]};

    :focus-within {
        border: 1px solid ${gn.Accent.Light[1]};
        box-shadow: ${vn};
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
                background: ${gn.Neutral[6](e)};

                ${Uc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${gn.Neutral[5](e)};
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
                border: 1px solid ${gn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${gn.Validation.Red.Border(e)};
                    box-shadow: ${bn};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Wc};
    margin-left: 1rem;
`,p(x)`
    color: ${gn.Neutral[3]};
    height: ${xn.Body.fontSize}rem;
    width: ${xn.Body.fontSize}rem;
`;const Xc=p.div`
    height: 1px;
    background: ${gn.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
`;const Jc=p(Bn.Body)`
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
    color: ${gn.Neutral[3]};
`;const Kc=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:l,readOnly:u})=>{const c=o();return((e,t,n="window",r)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(c&&c.current.contains(e.target))return;n&&l()}}),"document"),t(Yc,{children:t(Gc,Object.assign({ref:c,error:r&&!n,disabled:i,$readOnly:u,expanded:n,"data-testid":a},{children:e}))})},ed=({className:r,"data-testid":i,selectedOption:a,minimumCharacters:l=3,fetchOptions:c,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const w=a&&v(a),[$,S]=u(w||""),[x,_]=u(w||""),[O,k]=u([]),[D,B]=u(!0),[M,j]=u(!1),[A,E]=u(!!a),[C,z]=u(a),I=o(c),T=e=>F(void 0,void 0,void 0,(function*(){j(!1),B(!0);try{const t=yield I.current(e);_(e),k(t),B(!1)}catch(e){j(!0)}})),P=d(fe((e=>T(e)),500,{leading:!1,trailing:!0}),[]);s((()=>{I.current=c}),[c]),s((()=>{$&&$.length>=l&&$!==x?P($):P.cancel(),""===$&&C&&(b&&b(void 0,void 0),L(),z(void 0)),a&&$!==v(a)&&E(!1)}),[$,a]),s((()=>{S(a?v(a):""),L(a),z(a)}),[a]);const H=e=>{S(e.target.value)},N=(e,t)=>{b&&b(e,t)},L=e=>{_(e?v(e):""),E(!!e),k([]),B(!0)},R=()=>{S(""),b&&b(void 0,void 0),L()},V=()=>{A||C?(L(C),S(v(C)),b&&b(C,Y(C)),z(C)):R()},W=()=>$&&$.length>=l&&!A,Y=e=>m?m(e):e,q=()=>t(lr,{type:"text",value:$,onChange:H,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:R,styleType:"no-border",onBlur:$.length<l?V:void 0});return e(Kc,Object.assign({className:r,show:W(),error:g&&!W(),disabled:p,readOnly:f,testId:i,onBlur:V},{children:[t(f?n:Qc,{children:q()}),!f&&W()&&t(Xc,{}),t(Vc,{listItems:O,onSelectItem:N,valueExtractor:m,listExtractor:y,itemsLoadState:M?"fail":D?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>T($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))};export{ed as PredictiveTextInput};
//# sourceMappingURL=index.js.map
