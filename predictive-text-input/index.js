import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useImperativeHandle as a,useEffect as s,useLayoutEffect as l,useState as u,forwardRef as c,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as b}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as $}from"@lifesg/react-icons/tick";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var F=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k="object"==typeof _&&_&&_.Object===Object&&_,D=k,B="object"==typeof self&&self&&self.Object===Object&&self,O=D||B||Function("return this")(),M=O,A=function(){return M.Date.now()},E=/\s/;var j=function(e){for(var t=e.length;t--&&E.test(e.charAt(t)););return t},C=/^\s+/;var z=function(e){return e?e.slice(0,j(e)+1).replace(C,""):e},T=O.Symbol,I=T,P=Object.prototype,H=P.hasOwnProperty,N=P.toString,L=I?I.toStringTag:void 0;var R=function(e){var t=H.call(e,L),n=e[L];try{e[L]=void 0;var r=!0}catch(e){}var i=N.call(e);return r&&(t?e[L]=n:delete e[L]),i},V=Object.prototype.toString;var W=R,Y=function(e){return V.call(e)},q=T?T.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?W(e):Y(e)};var Q=function(e){return null!=e&&"object"==typeof e},Z=U,G=Q;var X=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Z(e)},J=z,K=F,ee=X,te=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,ie=parseInt;var oe=function(e){if("number"==typeof e)return e;if(ee(e))return NaN;if(K(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=K(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=J(e);var n=ne.test(e);return n||re.test(e)?ie(e.slice(2),n?2:8):te.test(e)?NaN:+e},ae=F,se=A,le=oe,ue=Math.max,ce=Math.min;var de=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=se();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?ce(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=se(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=le(t)||0,ae(n)&&(c=!!n.leading,o=(d="maxWait"in n)?ue(le(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(se())},y};var he=Array.isArray,fe=he,pe=X,ge=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,me=/^\w*$/;var ye=function(e,t){if(fe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pe(e))||(me.test(e)||!ge.test(e)||null!=t&&e in Object(t))},ve=U,be=F;var we,$e=function(e){if(!be(e))return!1;var t=ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Se=O["__core-js_shared__"],xe=(we=/[^.]+$/.exec(Se&&Se.keys&&Se.keys.IE_PROTO||""))?"Symbol(src)_1."+we:"";var _e=function(e){return!!xe&&xe in e},Fe=Function.prototype.toString;var ke=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=$e,Be=_e,Oe=F,Me=ke,Ae=/^\[object .+?Constructor\]$/,Ee=Function.prototype,je=Object.prototype,Ce=Ee.toString,ze=je.hasOwnProperty,Te=RegExp("^"+Ce.call(ze).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e){return!(!Oe(e)||Be(e))&&(De(e)?Te:Ae).test(Me(e))},Pe=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var n=Pe(e,t);return Ie(n)?n:void 0},Ne=He(Object,"create"),Le=Ne;var Re=function(){this.__data__=Le?Le(null):{},this.size=0};var Ve=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},We=Ne,Ye=Object.prototype.hasOwnProperty;var qe=function(e){var t=this.__data__;if(We){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ye.call(t,e)?t[e]:void 0},Ue=Ne,Qe=Object.prototype.hasOwnProperty;var Ze=Ne;var Ge=Re,Xe=Ve,Je=qe,Ke=function(e){var t=this.__data__;return Ue?void 0!==t[e]:Qe.call(t,e)},et=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ze&&void 0===t?"__lodash_hash_undefined__":t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt;var rt=function(){this.__data__=[],this.size=0};var it=function(e,t){return e===t||e!=e&&t!=t},ot=it;var at=function(e,t){for(var n=e.length;n--;)if(ot(e[n][0],t))return n;return-1},st=at,lt=Array.prototype.splice;var ut=at;var ct=at;var dt=at;var ht=rt,ft=function(e){var t=this.__data__,n=st(t,e);return!(n<0)&&(n==t.length-1?t.pop():lt.call(t,n,1),--this.size,!0)},pt=function(e){var t=this.__data__,n=ut(t,e);return n<0?void 0:t[n][1]},gt=function(e){return ct(this.__data__,e)>-1},mt=function(e,t){var n=this.__data__,r=dt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function yt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yt.prototype.clear=ht,yt.prototype.delete=ft,yt.prototype.get=pt,yt.prototype.has=gt,yt.prototype.set=mt;var vt=yt,bt=He(O,"Map"),wt=nt,$t=vt,St=bt;var xt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var _t=function(e,t){var n=e.__data__;return xt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ft=_t;var kt=_t;var Dt=_t;var Bt=_t;var Ot=function(){this.size=0,this.__data__={hash:new wt,map:new(St||$t),string:new wt}},Mt=function(e){var t=Ft(this,e).delete(e);return this.size-=t?1:0,t},At=function(e){return kt(this,e).get(e)},Et=function(e){return Dt(this,e).has(e)},jt=function(e,t){var n=Bt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ct.prototype.clear=Ot,Ct.prototype.delete=Mt,Ct.prototype.get=At,Ct.prototype.has=Et,Ct.prototype.set=jt;var zt=Ct,Tt=zt;function It(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(It.Cache||Tt),n}It.Cache=Tt;var Pt=It;var Ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nt=/\\(\\)?/g,Lt=function(e){var t=Pt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ht,(function(e,n,r,i){t.push(r?i.replace(Nt,"$1"):n||e)})),t}));var Rt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Vt=he,Wt=X,Yt=T?T.prototype:void 0,qt=Yt?Yt.toString:void 0;var Ut=function e(t){if("string"==typeof t)return t;if(Vt(t))return Rt(t,e)+"";if(Wt(t))return qt?qt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Qt=Ut;var Zt=he,Gt=ye,Xt=Lt,Jt=function(e){return null==e?"":Qt(e)};var Kt=function(e,t){return Zt(e)?e:Gt(e,t)?[e]:Xt(Jt(e))},en=X;var tn=function(e){if("string"==typeof e||en(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},nn=Kt,rn=tn;var on=function(e,t){for(var n=0,r=(t=nn(t,e)).length;null!=e&&n<r;)e=e[rn(t[n++])];return n&&n==r?e:void 0},an=on;var sn=function(e,t,n){var r=null==e?void 0:an(e,t);return void 0===r?n:r};const ln=(e,t,n)=>t?sn(n,t)||sn(e,t):n||e,un=(e,t)=>{const n=t||e.defaultValue;return sn(e.collections,n)};var cn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(cn||(cn={}));const dn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},hn=e=>t=>{const n=t.theme,r=un(dn,n[cn.colorScheme]);return n.options&&n.options.color?ln(r,e,n.options.color):ln(r,e)},fn={Brand:{1:hn("Brand.1"),2:hn("Brand.2"),3:hn("Brand.3"),4:hn("Brand.4"),5:hn("Brand.5"),6:hn("Brand.6")},Primary:hn("Primary"),PrimaryDark:hn("PrimaryDark"),Secondary:hn("Secondary"),Accent:{Light:{1:hn("Accent.Light.1"),2:hn("Accent.Light.2"),3:hn("Accent.Light.3"),4:hn("Accent.Light.4"),5:hn("Accent.Light.5"),6:hn("Accent.Light.6")},Dark:{1:hn("Accent.Dark.1"),2:hn("Accent.Dark.2"),3:hn("Accent.Dark.3")}},Neutral:{1:hn("Neutral.1"),2:hn("Neutral.2"),3:hn("Neutral.3"),4:hn("Neutral.4"),5:hn("Neutral.5"),6:hn("Neutral.6"),7:hn("Neutral.7"),8:hn("Neutral.8")},Validation:{Green:{Text:hn("Validation.Green.Text"),Icon:hn("Validation.Green.Icon"),Border:hn("Validation.Green.Border"),Background:hn("Validation.Green.Background")},Orange:{Text:hn("Validation.Orange.Text"),Icon:hn("Validation.Orange.Icon"),Border:hn("Validation.Orange.Border"),Background:hn("Validation.Orange.Background"),Badge:hn("Validation.Orange.Badge")},Red:{Text:hn("Validation.Red.Text"),Icon:hn("Validation.Red.Icon"),Border:hn("Validation.Red.Border"),Background:hn("Validation.Red.Background")},Blue:{Text:hn("Validation.Blue.Text"),Icon:hn("Validation.Blue.Icon"),Border:hn("Validation.Blue.Border"),Background:hn("Validation.Blue.Background")}},Shadow:{Accent:hn("Shadow.Accent"),Red:hn("Shadow.Red"),Elevation:hn("Shadow.Elevation")}},pn={collections:{base:{InputBoxShadow:g`
        inset 0 0 6px 1px ${fn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${fn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${fn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 6px 1px ${fn.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 6px 1px ${fn.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${fn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},gn=e=>t=>{const n=t.theme,r=un(pn,n[cn.designTokenScheme]);return n.options?.designToken?ln(r,e,n.options.designToken):ln(r,e)},mn=gn("InputBoxShadow"),yn=gn("InputErrorBoxShadow"),vn=(gn("ElevationBoxShadow"),gn("Table.Header"),gn("Table.Cell.Primary"),gn("Table.Cell.Secondary"),gn("Table.Cell.Selected"),gn("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),bn={collections:{base:{D1:{fontFamily:vn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wn=e=>t=>{const n=t.theme,r=un(bn,n[cn.textStyleScheme]);return n.options&&n.options.textStyle?ln(r,e,n.options.textStyle):ln(r,e)},$n={D1:{fontFamily:wn("D1.fontFamily"),fontSize:wn("D1.fontSize"),fontWeight:wn("D1.fontWeight"),lineHeight:wn("D1.lineHeight"),letterSpacing:wn("D1.letterSpacing")},D2:{fontFamily:wn("D2.fontFamily"),fontSize:wn("D2.fontSize"),fontWeight:wn("D2.fontWeight"),lineHeight:wn("D2.lineHeight"),letterSpacing:wn("D2.letterSpacing")},D3:{fontFamily:wn("D3.fontFamily"),fontSize:wn("D3.fontSize"),fontWeight:wn("D3.fontWeight"),lineHeight:wn("D3.lineHeight"),letterSpacing:wn("D3.letterSpacing")},D4:{fontFamily:wn("D4.fontFamily"),fontSize:wn("D4.fontSize"),fontWeight:wn("D4.fontWeight"),lineHeight:wn("D4.lineHeight"),letterSpacing:wn("D4.letterSpacing")},DBody:{fontFamily:wn("DBody.fontFamily"),fontSize:wn("DBody.fontSize"),fontWeight:wn("DBody.fontWeight"),lineHeight:wn("DBody.lineHeight"),letterSpacing:wn("DBody.letterSpacing")},H1:{fontFamily:wn("H1.fontFamily"),fontSize:wn("H1.fontSize"),fontWeight:wn("H1.fontWeight"),lineHeight:wn("H1.lineHeight"),letterSpacing:wn("H1.letterSpacing")},H2:{fontFamily:wn("H2.fontFamily"),fontSize:wn("H2.fontSize"),fontWeight:wn("H2.fontWeight"),lineHeight:wn("H2.lineHeight"),letterSpacing:wn("H2.letterSpacing")},H3:{fontFamily:wn("H3.fontFamily"),fontSize:wn("H3.fontSize"),fontWeight:wn("H3.fontWeight"),lineHeight:wn("H3.lineHeight"),letterSpacing:wn("H3.letterSpacing")},H4:{fontFamily:wn("H4.fontFamily"),fontSize:wn("H4.fontSize"),fontWeight:wn("H4.fontWeight"),lineHeight:wn("H4.lineHeight"),letterSpacing:wn("H4.letterSpacing")},H5:{fontFamily:wn("H5.fontFamily"),fontSize:wn("H5.fontSize"),fontWeight:wn("H5.fontWeight"),lineHeight:wn("H5.lineHeight"),letterSpacing:wn("H5.letterSpacing")},H6:{fontFamily:wn("H6.fontFamily"),fontSize:wn("H6.fontSize"),fontWeight:wn("H6.fontWeight"),lineHeight:wn("H6.lineHeight"),letterSpacing:wn("H6.letterSpacing")},Body:{fontFamily:wn("Body.fontFamily"),fontSize:wn("Body.fontSize"),fontWeight:wn("Body.fontWeight"),lineHeight:wn("Body.lineHeight"),letterSpacing:wn("Body.letterSpacing")},BodySmall:{fontFamily:wn("BodySmall.fontFamily"),fontSize:wn("BodySmall.fontSize"),fontWeight:wn("BodySmall.fontWeight"),lineHeight:wn("BodySmall.lineHeight"),letterSpacing:wn("BodySmall.letterSpacing")},XSmall:{fontFamily:wn("XSmall.fontFamily"),fontSize:wn("XSmall.fontSize"),fontWeight:wn("XSmall.fontWeight"),lineHeight:wn("XSmall.lineHeight"),letterSpacing:wn("XSmall.letterSpacing")}},Sn=e=>{switch(e){case 700:case"bold":return vn.Bold;case 600:case"semibold":return vn.Semibold;case 300:case"light":return vn.Light;case 400:case"regular":return vn.Regular;default:return""}},xn=(e,t)=>n=>{const r=$n[e].fontFamily(n),i=$n[e].fontWeight(n);return Object.values(vn).includes(r)?g`
                font-family: ${Sn(t)||Sn(i)||r};
                font-weight: normal !important;
            `:g`
            font-family: ${r};
            font-weight: ${(_n(t)||i)??"normal"};
        `},_n=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fn=(e,t,n=!1)=>r=>{const i=$n[e],o=i.fontSize(r);return g`
            ${xn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},kn=(e=!1,t=!1)=>t?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `;var Dn;!function(e){e.D1=p.h1`
        ${e=>g`
                ${Fn("D1",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${Fn("D2",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${Fn("D3",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${Fn("D4",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${Fn("DBody",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${Fn("H1",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${Fn("H2",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${Fn("H3",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${Fn("H4",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${Fn("H5",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${Fn("H6",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${Fn("Body",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${Fn("BodySmall",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${Fn("XSmall",e.weight,e.paragraph)}
                color: ${fn.Neutral[1]};
                ${kn(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Mn({...e,textStyle:"Body"}),Small:e=>Mn({...e,textStyle:"BodySmall"})}}(Dn||(Dn={}));const Bn=p.a`
    ${e=>g`
            ${Fn(e.textStyle,e.weight)}
            color: ${fn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${fn.Secondary};

                svg {
                    color: ${fn.Secondary};
                }
            }
        `}
`,On=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mn=({external:n=!1,children:r,...i})=>e(Bn,{...i,children:[r,n&&t(On,{})]});var An;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(An||(An={}));const En=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${fn.Neutral[5]};
    border-radius: 4px;
    background: ${fn.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${fn.Accent.Light[1]};
        box-shadow: ${mn};
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
                background: ${fn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${fn.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${fn.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${fn.Validation.Red.Border};
                    box-shadow: ${yn};
                }
            `:void 0}
`,jn=p.input`
    ${Fn("Body","regular")}
    color: ${fn.Neutral[1]};
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
        color: ${fn.Neutral[3]};
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
`;var Cn={exports:{}};Cn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var zn,Tn,In=Cn.exports,Pn={exports:{}},Hn=Pn.exports=(zn={year:0,month:1,day:2,hour:3,minute:4,second:5},Tn={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Tn[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Tn[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=zn[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Nn={exports:{}};Nn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof F},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},_=v;_.l=S,_.i=$,_.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,c=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=_.p(c),g=function(e){var t=x(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return _.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:_.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=_.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:_.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=F.prototype;return x.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,F,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Ln=Nn.exports,Rn={exports:{}};Rn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Vn=Rn.exports,Wn={exports:{}};Wn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Yn=Wn.exports,qn={exports:{}};qn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Un,Qn=qn.exports;Ln.extend(Vn),Ln.extend(Yn),Ln.extend(Qn),Ln.extend(In),Ln.extend(Hn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ln(t).startOf("week");return Zn(n).map((e=>Gn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Gn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ln(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ln(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ln(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Un||(Un={}));const Zn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Gn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Xn=[1,3,5,7,8,10,12],Jn=[4,6,9,11];var Kn,er,tr;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Xn.includes(o)?Math.min(i,31).toString():Jn.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ln(e,n);return Ln(t,n).diff(r,"minute")}}(Kn||(Kn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(er||(er={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(tr||(tr={}));const nr=p.input`
    ${Fn("Body","regular")}
    color: ${fn.Neutral[1]};

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
        color: ${fn.Neutral[3]};
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
`,rr=p.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${fn.Neutral[3]};
    background-color: transparent;
    border: none;
`,ir=p(v)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,or=p.div`
    display: flex;
    width: 100%;
`,ar=i.forwardRef((({value:r,spacing:i,type:s,error:l,disabled:u,readOnly:c,onChange:d,onClear:h,allowClear:f=!1,className:p,styleType:g="bordered",...m},y)=>{const v=o();a(y,(()=>v.current),[]);const b=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>tr.transformWithSpaces(e,i)}),w=e=>{d&&(S()?x(e):d(e))},$=()=>{h&&h(),v&&v.current&&v.current.focus()},S=()=>"tel"===s&&i,x=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},_=r?(e=>e?S()?tr.transformWithSpaces(e,i):e:"")(r):r,F=()=>e(n,{children:[t(nr,{"data-testid":"input",ref:v,disabled:u,value:_,onChange:w,type:s,readOnly:c,...m}),f&&!u&&!c&&!!r&&t(rr,{onClick:$,type:"button",children:t(ir,{"aria-hidden":!0})})]});return t(n,{children:"no-border"===g?t(or,{className:p,children:F()}):t(En,{$disabled:u,$error:l,$readOnly:c,className:p,children:F()})})}));var sr=vt;var lr=vt,ur=bt,cr=zt;var dr=vt,hr=function(){this.__data__=new sr,this.size=0},fr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},pr=function(e){return this.__data__.get(e)},gr=function(e){return this.__data__.has(e)},mr=function(e,t){var n=this.__data__;if(n instanceof lr){var r=n.__data__;if(!ur||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new cr(r)}return n.set(e,t),this.size=n.size,this};function yr(e){var t=this.__data__=new dr(e);this.size=t.size}yr.prototype.clear=hr,yr.prototype.delete=fr,yr.prototype.get=pr,yr.prototype.has=gr,yr.prototype.set=mr;var vr=yr;var br=zt,wr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},$r=function(e){return this.__data__.has(e)};function Sr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new br;++t<n;)this.add(e[t])}Sr.prototype.add=Sr.prototype.push=wr,Sr.prototype.has=$r;var xr=Sr,_r=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Fr=function(e,t){return e.has(t)};var kr=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var d=-1,h=!0,f=2&n?new xr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,o):r(p,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!_r(t,(function(e,t){if(!Fr(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Dr=O.Uint8Array,Br=it,Or=kr,Mr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Ar=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Er=T?T.prototype:void 0,jr=Er?Er.valueOf:void 0;var Cr=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Dr(e),new Dr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Br(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Mr;case"[object Set]":var l=1&r;if(s||(s=Ar),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;r|=2,a.set(e,t);var c=Or(s(e),s(t),r,i,o,a);return a.delete(e),c;case"[object Symbol]":if(jr)return jr.call(e)==jr.call(t)}return!1};var zr=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Tr=he;var Ir=function(e,t,n){var r=t(e);return Tr(e)?r:zr(r,n(e))};var Pr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Hr=function(){return[]},Nr=Object.prototype.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,Rr=Lr?function(e){return null==e?[]:(e=Object(e),Pr(Lr(e),(function(t){return Nr.call(e,t)})))}:Hr;var Vr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Wr=U,Yr=Q;var qr=function(e){return Yr(e)&&"[object Arguments]"==Wr(e)},Ur=Q,Qr=Object.prototype,Zr=Qr.hasOwnProperty,Gr=Qr.propertyIsEnumerable,Xr=qr(function(){return arguments}())?qr:function(e){return Ur(e)&&Zr.call(e,"callee")&&!Gr.call(e,"callee")},Jr={exports:{}};var Kr=function(){return!1};!function(e,t){var n=O,r=Kr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Jr,Jr.exports);var ei=/^(?:0|[1-9]\d*)$/;var ti=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ei.test(e))&&e>-1&&e%1==0&&e<t};var ni=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ri=U,ii=ni,oi=Q,ai={};ai["[object Float32Array]"]=ai["[object Float64Array]"]=ai["[object Int8Array]"]=ai["[object Int16Array]"]=ai["[object Int32Array]"]=ai["[object Uint8Array]"]=ai["[object Uint8ClampedArray]"]=ai["[object Uint16Array]"]=ai["[object Uint32Array]"]=!0,ai["[object Arguments]"]=ai["[object Array]"]=ai["[object ArrayBuffer]"]=ai["[object Boolean]"]=ai["[object DataView]"]=ai["[object Date]"]=ai["[object Error]"]=ai["[object Function]"]=ai["[object Map]"]=ai["[object Number]"]=ai["[object Object]"]=ai["[object RegExp]"]=ai["[object Set]"]=ai["[object String]"]=ai["[object WeakMap]"]=!1;var si=function(e){return oi(e)&&ii(e.length)&&!!ai[ri(e)]};var li=function(e){return function(t){return e(t)}},ui={exports:{}};!function(e,t){var n=k,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(ui,ui.exports);var ci=si,di=li,hi=ui.exports,fi=hi&&hi.isTypedArray,pi=fi?di(fi):ci,gi=Vr,mi=Xr,yi=he,vi=Jr.exports,bi=ti,wi=pi,$i=Object.prototype.hasOwnProperty;var Si=function(e,t){var n=yi(e),r=!n&&mi(e),i=!n&&!r&&vi(e),o=!n&&!r&&!i&&wi(e),a=n||r||i||o,s=a?gi(e.length,String):[],l=s.length;for(var u in e)!t&&!$i.call(e,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||bi(u,l))||s.push(u);return s},xi=Object.prototype;var _i=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||xi)};var Fi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),ki=_i,Di=Fi,Bi=Object.prototype.hasOwnProperty;var Oi=$e,Mi=ni;var Ai=function(e){return null!=e&&Mi(e.length)&&!Oi(e)},Ei=Si,ji=function(e){if(!ki(e))return Di(e);var t=[];for(var n in Object(e))Bi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ci=Ai;var zi=function(e){return Ci(e)?Ei(e):ji(e)},Ti=Ir,Ii=Rr,Pi=zi;var Hi=function(e){return Ti(e,Pi,Ii)},Ni=Object.prototype.hasOwnProperty;var Li=function(e,t,n,r,i,o){var a=1&n,s=Hi(e),l=s.length;if(l!=Hi(t).length&&!a)return!1;for(var u=l;u--;){var c=s[u];if(!(a?c in t:Ni.call(t,c)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++u<l;){var g=e[c=s[u]],m=t[c];if(r)var y=a?r(m,g,c,t,e,o):r(g,m,c,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return o.delete(e),o.delete(t),f},Ri=He(O,"DataView"),Vi=bt,Wi=He(O,"Promise"),Yi=He(O,"Set"),qi=He(O,"WeakMap"),Ui=U,Qi=ke,Zi="[object Map]",Gi="[object Promise]",Xi="[object Set]",Ji="[object WeakMap]",Ki="[object DataView]",eo=Qi(Ri),to=Qi(Vi),no=Qi(Wi),ro=Qi(Yi),io=Qi(qi),oo=Ui;(Ri&&oo(new Ri(new ArrayBuffer(1)))!=Ki||Vi&&oo(new Vi)!=Zi||Wi&&oo(Wi.resolve())!=Gi||Yi&&oo(new Yi)!=Xi||qi&&oo(new qi)!=Ji)&&(oo=function(e){var t=Ui(e),n="[object Object]"==t?e.constructor:void 0,r=n?Qi(n):"";if(r)switch(r){case eo:return Ki;case to:return Zi;case no:return Gi;case ro:return Xi;case io:return Ji}return t});var ao=vr,so=kr,lo=Cr,uo=Li,co=oo,ho=he,fo=Jr.exports,po=pi,go="[object Arguments]",mo="[object Array]",yo="[object Object]",vo=Object.prototype.hasOwnProperty;var bo=function(e,t,n,r,i,o){var a=ho(e),s=ho(t),l=a?mo:co(e),u=s?mo:co(t),c=(l=l==go?yo:l)==yo,d=(u=u==go?yo:u)==yo,h=l==u;if(h&&fo(e)){if(!fo(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new ao),a||po(e)?so(e,t,n,r,i,o):lo(e,t,l,n,r,i,o);if(!(1&n)){var f=c&&vo.call(e,"__wrapped__"),p=d&&vo.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new ao),i(g,m,n,r,o)}}return!!h&&(o||(o=new ao),uo(e,t,n,r,i,o))},wo=Q;var $o=function e(t,n,r,i,o){return t===n||(null==t||null==n||!wo(t)&&!wo(n)?t!=t&&n!=n:bo(t,n,r,i,e,o))},So=vr,xo=$o;var _o=F;var Fo=function(e){return e==e&&!_o(e)},ko=Fo,Do=zi;var Bo=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Oo=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],u=e[l],c=s[1];if(a&&s[2]){if(void 0===u&&!(l in e))return!1}else{var d=new So;if(r)var h=r(u,c,l,e,t,d);if(!(void 0===h?xo(c,u,3,r,d):h))return!1}}return!0},Mo=function(e){for(var t=Do(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ko(i)]}return t},Ao=Bo;var Eo=Kt,jo=Xr,Co=he,zo=ti,To=ni,Io=tn;var Po=function(e,t){return null!=e&&t in Object(e)},Ho=function(e,t,n){for(var r=-1,i=(t=Eo(t,e)).length,o=!1;++r<i;){var a=Io(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&To(i)&&zo(a,i)&&(Co(e)||jo(e))};var No=$o,Lo=sn,Ro=function(e,t){return null!=e&&Ho(e,t,Po)},Vo=ye,Wo=Fo,Yo=Bo,qo=tn;var Uo=on;var Qo=function(e){return function(t){return null==t?void 0:t[e]}},Zo=function(e){return function(t){return Uo(t,e)}},Go=ye,Xo=tn;var Jo=function(e){var t=Mo(e);return 1==t.length&&t[0][2]?Ao(t[0][0],t[0][1]):function(n){return n===e||Oo(n,e,t)}},Ko=function(e,t){return Vo(e)&&Wo(t)?Yo(qo(e),t):function(n){var r=Lo(n,e);return void 0===r&&r===t?Ro(n,e):No(t,r,3)}},ea=function(e){return e},ta=he,na=function(e){return Go(e)?Qo(Xo(e)):Zo(e)};var ra=function(e){return"function"==typeof e?e:null==e?ea:"object"==typeof e?ta(e)?Ko(e[0],e[1]):Jo(e):na(e)},ia=ra,oa=Ai,aa=zi;var sa=function(e){return function(t,n,r){var i=Object(t);if(!oa(t)){var o=ia(n);t=aa(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var la=oe,ua=1/0;var ca=function(e){return e?(e=la(e))===ua||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var da=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},ha=ra,fa=function(e){var t=ca(e),n=t%1;return t==t?n?t-n:t:0},pa=Math.max;var ga=sa((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:fa(n);return i<0&&(i=pa(r+i,0)),da(e,ha(t),i)})),ma=$o;var ya=function(e,t){return ma(e,t)};let va=Ca();const ba=e=>Ma(e,va);let wa=Ca();ba.write=e=>Ma(e,wa);let $a=Ca();ba.onStart=e=>Ma(e,$a);let Sa=Ca();ba.onFrame=e=>Ma(e,Sa);let xa=Ca();ba.onFinish=e=>Ma(e,xa);let _a=[];ba.setTimeout=(e,t)=>{let n=ba.now()+t,r=()=>{let e=_a.findIndex((e=>e.cancel==r));~e&&_a.splice(e,1),Ba-=~e?1:0},i={time:n,handler:e,cancel:r};return _a.splice(Fa(n),0,i),Ba+=1,Aa(),i};let Fa=e=>~(~_a.findIndex((t=>t.time>e))||~_a.length);ba.cancel=e=>{$a.delete(e),Sa.delete(e),xa.delete(e),va.delete(e),wa.delete(e)},ba.sync=e=>{Oa=!0,ba.batchedUpdates(e),Oa=!1},ba.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ba.onStart(n)}return r.handler=e,r.cancel=()=>{$a.delete(n),t=null},r};let ka="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ba.use=e=>ka=e,ba.now="undefined"!=typeof performance?()=>performance.now():Date.now,ba.batchedUpdates=e=>e(),ba.catch=console.error,ba.frameLoop="always",ba.advance=()=>{"demand"!==ba.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ja()};let Da=-1,Ba=0,Oa=!1;function Ma(e,t){Oa?(t.delete(e),e(0)):(t.add(e),Aa())}function Aa(){Da<0&&(Da=0,"demand"!==ba.frameLoop&&ka(Ea))}function Ea(){~Da&&(ka(Ea),ba.batchedUpdates(ja))}function ja(){let e=Da;Da=ba.now();let t=Fa(Da);t&&(za(_a.splice(0,t),(e=>e.handler())),Ba-=t),Ba?($a.flush(),va.flush(e?Math.min(64,Da-e):16.667),Sa.flush(),wa.flush(),xa.flush()):Da=-1}function Ca(){let e=new Set,t=e;return{add(n){Ba+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ba-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ba-=t.size,za(t,(t=>t(n)&&e.add(t))),Ba+=e.size,t=e)}}}function za(e,t){e.forEach((e=>{try{t(e)}catch(e){ba.catch(e)}}))}function Ta(){}const Ia={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Pa(e,t){if(Ia.arr(e)){if(!Ia.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Ha=(e,t)=>e.forEach(t);function Na(e,t,n){if(Ia.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const La=e=>Ia.und(e)?[]:Ia.arr(e)?e:[e];function Ra(e,t){if(e.size){const n=Array.from(e);e.clear(),Ha(n,t)}}const Va=(e,...t)=>Ra(e,(e=>e(...t))),Wa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ya,qa,Ua=null,Qa=!1,Za=Ta;var Ga=Object.freeze({__proto__:null,get createStringInterpolator(){return Ya},get to(){return qa},get colors(){return Ua},get skipAnimation(){return Qa},get willAdvance(){return Za},assign:e=>{e.to&&(qa=e.to),e.now&&(ba.now=e.now),void 0!==e.colors&&(Ua=e.colors),null!=e.skipAnimation&&(Qa=e.skipAnimation),e.createStringInterpolator&&(Ya=e.createStringInterpolator),e.requestAnimationFrame&&ba.use(e.requestAnimationFrame),e.batchedUpdates&&(ba.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Za=e.willAdvance),e.frameLoop&&(ba.frameLoop=e.frameLoop)}});const Xa=new Set;let Ja=[],Ka=[],es=0;const ts={get idle(){return!Xa.size&&!Ja.length},start(e){es>e.priority?(Xa.add(e),ba.onStart(ns)):(rs(e),ba(os))},advance:os,sort(e){if(es)ba.onFrame((()=>ts.sort(e)));else{const t=Ja.indexOf(e);~t&&(Ja.splice(t,1),is(e))}},clear(){Ja=[],Xa.clear()}};function ns(){Xa.forEach(rs),Xa.clear(),ba(os)}function rs(e){Ja.includes(e)||is(e)}function is(e){Ja.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Ja,(t=>t.priority>e.priority)),0,e)}function os(e){const t=Ka;for(let n=0;n<Ja.length;n++){const r=Ja[n];es=r.priority,r.idle||(Za(r),r.advance(e),r.idle||t.push(r))}return es=0,Ka=Ja,Ka.length=0,Ja=t,Ja.length>0}const as="[-+]?\\d*\\.?\\d+",ss=as+"%";function ls(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const us=new RegExp("rgb"+ls(as,as,as)),cs=new RegExp("rgba"+ls(as,as,as,as)),ds=new RegExp("hsl"+ls(as,ss,ss)),hs=new RegExp("hsla"+ls(as,ss,ss,as)),fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ps=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gs=/^#([0-9a-fA-F]{6})$/,ms=/^#([0-9a-fA-F]{8})$/;function ys(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vs(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ys(i,r,e+1/3),a=ys(i,r,e),s=ys(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function bs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ws(e){return(parseFloat(e)%360+360)%360/360}function $s(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ss(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function xs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=gs.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ua&&void 0!==Ua[e]?Ua[e]:(t=us.exec(e))?(bs(t[1])<<24|bs(t[2])<<16|bs(t[3])<<8|255)>>>0:(t=cs.exec(e))?(bs(t[1])<<24|bs(t[2])<<16|bs(t[3])<<8|$s(t[4]))>>>0:(t=fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ms.exec(e))?parseInt(t[1],16)>>>0:(t=ps.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ds.exec(e))?(255|vs(ws(t[1]),Ss(t[2]),Ss(t[3])))>>>0:(t=hs.exec(e))?(vs(ws(t[1]),Ss(t[2]),Ss(t[3]))|$s(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const _s=(e,t,n)=>{if(Ia.fun(e))return e;if(Ia.arr(e))return _s({range:e,output:t,extrapolate:n});if(Ia.str(e.output[0]))return Ya(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Fs=1.70158,ks=1.525*Fs,Ds=Fs+1,Bs=2*Math.PI/3,Os=2*Math.PI/4.5,Ms=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},As={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ds*e*e*e-Fs*e*e,easeOutBack:e=>1+Ds*Math.pow(e-1,3)+Fs*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ks)/2:(Math.pow(2*e-2,2)*((ks+1)*(2*e-2)+ks)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Bs),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Bs)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Os)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Os)/2+1,easeInBounce:e=>1-Ms(1-e),easeOutBounce:Ms,easeInOutBounce:e=>e<.5?(1-Ms(1-2*e))/2:(1+Ms(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Es.apply(this,arguments)}const js=Symbol.for("FluidValue.get"),Cs=Symbol.for("FluidValue.observers"),zs=e=>Boolean(e&&e[js]),Ts=e=>e&&e[js]?e[js]():e,Is=e=>e[Cs]||null;function Ps(e,t){let n=e[Cs];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Hs{constructor(e){if(this[js]=void 0,this[Cs]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ns(this,e)}}const Ns=(e,t)=>Vs(e,js,t);function Ls(e,t){if(e[js]){let n=e[Cs];n||Vs(e,Cs,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Rs(e,t){let n=e[Cs];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Cs]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Vs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ws=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ys=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qs=new RegExp(`(${Ws.source})(%|[a-z]+)`,"i"),Us=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Qs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Zs=e=>{const[t,n]=Gs(e);if(!t||Wa())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Qs.test(n)?Zs(n):n||e},Gs=e=>{const t=Qs.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Xs;const Js=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ks=e=>{Xs||(Xs=Ua?new RegExp(`(${Object.keys(Ua).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ts(e).replace(Qs,Zs).replace(Ys,xs).replace(Xs,xs))),n=t.map((e=>e.match(Ws).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>_s(Es({},e,{output:t}))));return e=>{var n;const i=!qs.test(t[0])&&(null==(n=t.find((e=>qs.test(e))))?void 0:n.replace(Ws,""));let o=0;return t[0].replace(Ws,(()=>`${r[o++](e)}${i||""}`)).replace(Us,Js)}},el="react-spring: ",tl=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${el}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},nl=tl(console.warn);const rl=tl(console.warn);function il(e){return Ia.str(e)&&("#"==e[0]||/\d/.test(e)||!Wa()&&Qs.test(e)||e in(Ua||{}))}const ol=Wa()?s:l,al=()=>{const e=o(!1);return ol((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function sl(){const e=u()[1],t=al();return()=>{t.current&&e(Math.random())}}const ll=e=>s(e,ul),ul=[];function cl(e){const t=o();return s((()=>{t.current=e})),t.current}const dl=Symbol.for("Animated:node"),hl=e=>e&&e[dl],fl=(e,t)=>{return n=e,r=dl,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},pl=e=>e&&e[dl]&&e[dl].getPayload();class gl{constructor(){this.payload=void 0,fl(this,this)}getPayload(){return this.payload||[]}}class ml extends gl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ia.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ml(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ia.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ia.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class yl extends ml{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=_s({output:[e,e]})}static create(e){return new yl(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ia.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=_s({output:[this.getValue(),e]})),this._value=0,super.reset()}}const vl={dependencies:null};class bl extends gl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Na(this.source,((n,r)=>{var i;(i=n)&&i[dl]===i?t[r]=n.getValue(e):zs(n)?t[r]=Ts(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ha(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Na(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){vl.dependencies&&zs(e)&&vl.dependencies.add(e);const t=pl(e);t&&Ha(t,(e=>this.add(e)))}}class wl extends bl{constructor(e){super(e)}static create(e){return new wl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map($l)),!0)}}function $l(e){return(il(e)?yl:ml).create(e)}function Sl(e){const t=hl(e);return t?t.constructor:Ia.arr(e)?wl:il(e)?yl:ml}function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}const _l=(e,t)=>{const n=!Ia.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const l=o(null),u=n&&d((e=>{l.current=function(e,t){e&&(Ia.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,h]=function(e,t){const n=new Set;vl.dependencies=n,e.style&&(e=xl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new bl(e),vl.dependencies=null,[e,n]}(i,t),f=sl(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&f()},g=new Fl(p,h),m=o();ol((()=>(m.current=g,Ha(h,(e=>Ls(e,g))),()=>{m.current&&(Ha(m.current.deps,(e=>Rs(e,m.current))),ba.cancel(m.current.update))}))),s(p,[]),ll((()=>()=>{const e=m.current;Ha(e.deps,(t=>Rs(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,xl({},y,{ref:u}))}))};class Fl{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ba.write(this.update)}}const kl=Symbol.for("AnimatedComponent"),Dl=e=>Ia.str(e)?e:e&&Ia.str(e.displayName)?e.displayName:Ia.fun(e)&&e.name||null;function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bl.apply(this,arguments)}function Ol(e,...t){return Ia.fun(e)?e(...t):e}const Ml=(e,t)=>!0===e||!!(t&&e&&(Ia.fun(e)?e(t):La(e).includes(t))),Al=(e,t)=>Ia.obj(e)?t&&e[t]:e,El=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,jl=e=>e,Cl=(e,t=jl)=>{let n=zl;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Ia.und(n)||(r[i]=n)}return r},zl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Tl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Il(e){const t=function(e){const t={};let n=0;if(Na(e,((e,r)=>{Tl[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Na(e,((e,r)=>r in t||(n[r]=e))),n}return Bl({},e)}function Pl(e){return e=Ts(e),Ia.arr(e)?e.map(Pl):il(e)?Ga.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Hl(e){return Ia.fun(e)||Ia.arr(e)&&Ia.obj(e[0])}const Nl=Bl({},{tension:170,friction:26},{mass:1,damping:1,easing:As.linear,clamp:!1});class Ll{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Nl)}}function Rl(e,t){if(Ia.und(t.decay)){const n=!Ia.und(t.tension)||!Ia.und(t.friction);!n&&Ia.und(t.frequency)&&Ia.und(t.damping)&&Ia.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Vl=[];class Wl{constructor(){this.changed=!1,this.values=Vl,this.toValues=null,this.fromValues=Vl,this.to=void 0,this.from=void 0,this.config=new Ll,this.immediate=!1}}function Yl(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=Ml(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Ia.und(n.pause)||(i.paused=Ml(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Ml(e,t)),u=Ol(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-ba.now()}function f(){u>0&&!Ga.skipAnimation?(i.delayed=!0,c=ba.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(Bl({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const ql=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Zl(e.get()):t.every((e=>e.noop))?Ul(e.get()):Ql(e.get(),t.every((e=>e.finished))),Ul=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ql=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Zl=e=>({value:e,cancelled:!0,finished:!1});function Gl(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Cl(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Zl(r)||i!==n.asyncId&&Ql(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Jl,a=new Kl;return(async()=>{if(Ga.skipAnimation)throw Xl(n),a.result=Ql(r,!1),d(a),a;f(o);const s=Ia.obj(e)?Bl({},e):Bl({},t,{to:e});s.parentId=i,Na(u,((e,t)=>{Ia.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ga.skipAnimation)return Xl(n),Ql(r,!1);try{let t;t=Ia.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=Ql(r.get(),!0,!1)}catch(e){if(e instanceof Jl)g=e.result;else{if(!(e instanceof Kl))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Ia.fun(a)&&ba.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Xl(e,t){Ra(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Jl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Kl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const eu=e=>e instanceof nu;let tu=1;class nu extends Hs{constructor(...e){super(...e),this.id=tu++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=hl(this);return e&&e.getValue()}to(...e){return Ga.to(this,e)}interpolate(...e){return nl(`${el}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ga.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ps(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ts.sort(this),Ps(this,{type:"priority",parent:this,priority:e})}}const ru=Symbol.for("SpringPhase"),iu=e=>(1&e[ru])>0,ou=e=>(2&e[ru])>0,au=e=>(4&e[ru])>0,su=(e,t)=>t?e[ru]|=3:e[ru]&=-3,lu=(e,t)=>t?e[ru]|=4:e[ru]&=-5;class uu extends nu{constructor(e,t){if(super(),this.key=void 0,this.animation=new Wl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ia.und(e)||!Ia.und(t)){const n=Ia.obj(e)?Bl({},e):Bl({},t,{from:e});Ia.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ou(this)||this._state.asyncTo)||au(this)}get goal(){return Ts(this.animation.to)}get velocity(){const e=hl(this);return e instanceof ml?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return iu(this)}get isAnimating(){return ou(this)}get isPaused(){return au(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=pl(r.to);!a&&zs(r.to)&&(o=La(Ts(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==yl?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Ia.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(Ia.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Ia.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=hl(this),l=s.getValue();if(t){const e=Ts(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ba.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ou(this)){const{to:e,config:t}=this.animation;ba.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ia.und(e)?(n=this.queue||[],this.queue=[]):n=[Ia.obj(e)?e:Bl({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>ql(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Xl(this._state,e&&this._lastCallId),ba.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ia.obj(n)?n[t]:n,(null==n||Hl(n))&&(n=void 0),r=Ia.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return iu(this)||(e.reverse&&([n,r]=[r,n]),r=Ts(r),Ia.und(r)?hl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Bl({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Cl(n,((e,t)=>/^on/.test(t)?Al(e,r):e))),mu(this,n,"onProps"),yu(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Yl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{au(this)||(lu(this,!0),Va(a.pauseQueue),yu(this,"onPause",Ql(this,cu(this,this.animation.to)),this))},resume:()=>{au(this)&&(lu(this,!1),ou(this)&&this._resume(),Va(a.resumeQueue),yu(this,"onResume",Ql(this,cu(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=du(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Zl(this));const r=!Ia.und(e.to),i=!Ia.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Zl(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!Ia.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Pa(d,u);h&&(s.from=d),d=Ts(d);const f=!Pa(c,l);f&&this._focus(c);const p=Hl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Rl(n=Bl({},n),t),t=Bl({},n,t)),Rl(e,t),Object.assign(e,t);for(const t in Nl)null==e[t]&&(e[t]=Nl[t]);let{mass:r,frequency:i,damping:o}=e;Ia.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Ol(t.config,o),t.config!==a.config?Ol(a.config,o):void 0);let v=hl(this);if(!v||Ia.und(c))return n(Ql(this,!0));const b=Ia.und(t.reset)?i&&!t.default:!Ia.und(d)&&Ml(t.reset,o),w=b?d:this.get(),$=Pl(c),S=Ia.num($)||Ia.arr($)||il($),x=!p&&(!S||Ml(a.immediate||t.immediate,o));if(f){const e=Sl(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const _=v.constructor;let F=zs(c),k=!1;if(!F){const e=b||!iu(this)&&h;(f||e)&&(k=Pa(Pl(w),$),F=!k),(Pa(s.immediate,x)||x)&&Pa(g.decay,m)&&Pa(g.velocity,y)||(F=!0)}if(k&&ou(this)&&(s.changed&&!b?F=!0:F||this._stop(l)),!p&&((F||zs(l))&&(s.values=v.getPayload(),s.toValues=zs(c)?null:_==yl?[1]:La($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),F)){const{onRest:e}=s;Ha(gu,(e=>mu(this,t,e)));const r=Ql(this,cu(this,l));Va(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ba.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Ol(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Gl(t.to,t,this._state,this)):F?this._start():ou(this)&&!f?this._pendingCalls.add(n):n(Ul(w))}_focus(e){const t=this.animation;e!==t.to&&(Is(this)&&this._detach(),t.to=e,Is(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;zs(t)&&(Ls(t,this),eu(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;zs(e)&&Rs(e,this)}_set(e,t=!0){const n=Ts(e);if(!Ia.und(n)){const e=hl(this);if(!e||!Pa(n,e.getValue())){const r=Sl(n);e&&e.constructor==r?e.setValue(n):fl(this,r.create(n)),e&&ba.batchedUpdates((()=>{this._onChange(n,t)}))}}return hl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,yu(this,"onStart",Ql(this,cu(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ol(this.animation.onChange,e,this)),Ol(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;hl(this).reset(Ts(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ou(this)||(su(this,!0),au(this)||this._resume())}_resume(){Ga.skipAnimation?this.finish():ts.start(this)}_stop(e,t){if(ou(this)){su(this,!1);const n=this.animation;Ha(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ps(this,{type:"idle",parent:this});const r=t?Zl(this.get()):Ql(this.get(),cu(this,null!=e?e:n.to));Va(this._pendingCalls,r),n.changed&&(n.changed=!1,yu(this,"onRest",r,this))}}}function cu(e,t){const n=Pl(t);return Pa(Pl(e.get()),n)}function du(e,t=e.loop,n=e.to){let r=Ol(t);if(r){const i=!0!==r&&Il(r),o=(i||e).reverse,a=!i||i.reset;return hu(Bl({},e,{loop:t,default:!1,pause:void 0,to:!o||Hl(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function hu(e){const{to:t,from:n}=e=Il(e),r=new Set;return Ia.obj(t)&&pu(t,r),Ia.obj(n)&&pu(n,r),e.keys=r.size?Array.from(r):null,e}function fu(e){const t=hu(e);return Ia.und(t.default)&&(t.default=Cl(t)),t}function pu(e,t){Na(e,((e,n)=>null!=e&&t.add(n)))}const gu=["onStart","onRest","onChange","onPause","onResume"];function mu(e,t,n){e.animation[n]=t[n]!==El(t,n)?Al(t[n],e.key):void 0}function yu(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const vu=["onStart","onChange","onRest"];let bu=1;class wu{constructor(e,t){this.id=bu++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Bl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ia.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(hu(e)),this}start(e){let{queue:t}=this;return e?t=La(e).map(hu):this.queue=[],this._flush?this._flush(this,t):(Du(this,t),$u(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ha(La(t),(t=>n[t].stop(!!e)))}else Xl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ia.und(e))this.start({pause:!0});else{const t=this.springs;Ha(La(e),(e=>t[e].pause()))}return this}resume(e){if(Ia.und(e))this.start({pause:!1});else{const t=this.springs;Ha(La(e),(e=>t[e].resume()))}return this}each(e){Na(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ra(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ra(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ra(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ba.onFrame(this._onFrame)}}function $u(e,t){return Promise.all(t.map((t=>Su(e,t)))).then((t=>ql(e,t)))}async function Su(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Ia.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Ia.arr(i)||Ia.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Ha(vu,(n=>{const r=t[n];if(Ia.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Va(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===El(t,"cancel");(c||f&&d.asyncId)&&h.push(Yl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ta,resume:Ta,start(t,n){f?(Xl(d,e._lastAsyncId),n(Zl(e))):(t.onRest=s,n(Gl(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=ql(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=du(t,a,i);if(n)return Du(e,[n]),Su(e,n,!0)}return l&&ba.batchedUpdates((()=>l(p,e,e.item))),p}function xu(e,t){const n=Bl({},e.springs);return t&&Ha(La(t),(e=>{Ia.und(e.keys)&&(e=hu(e)),Ia.obj(e.to)||(e=Bl({},e,{to:void 0})),ku(n,e,(e=>Fu(e)))})),_u(e,n),n}function _u(e,t){Na(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ls(t,e))}))}function Fu(e,t){const n=new uu;return n.key=e,t&&Ls(n,t),n}function ku(e,t,n){t.keys&&Ha(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Du(e,t){Ha(t,(t=>{ku(e.springs,t,(t=>Fu(t,e)))}))}const Bu=["children"],Ou=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Bu);const i=h(Mu),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=u((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return s((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Mu;return r.createElement(c,{value:n},t)},Mu=(Au=Ou,Eu={},Object.assign(Au,r.createContext(Eu)),Au.Provider._context=Au,Au.Consumer._context=Au,Au);var Au,Eu;Ou.Provider=Mu.Provider,Ou.Consumer=Mu.Consumer;const ju=()=>{const e=[],t=function(t){rl(`${el}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ha(e,((e,i)=>{if(Ia.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ha(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ha(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ha(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Ha(e,((e,r)=>{if(Ia.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ha(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ha(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ia.fun(e)?e(n,t):e};return t._getProps=n,t};function Cu(e,t){const n=Ia.fun(e),[[r],i]=function(e,t,n){const r=Ia.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?ju():void 0),[]),a=o(0),s=sl(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=xu(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?$u(e,t):new Promise((r=>{_u(e,n),l.queue.push((()=>{r($u(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=cl(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new wu(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=fu(n))}}f((()=>{Ha(u.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=u.current.map(((e,t)=>xu(e,c[t]))),m=h(Ou),y=cl(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);ol((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Ha(e,(e=>e()))),Ha(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ll((()=>()=>{Ha(l.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Bl({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let zu;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(zu||(zu={}));class Tu extends nu{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=_s(...t);const n=this._get(),r=Sl(n);fl(this,r.create(n))}advance(e){const t=this._get();Pa(t,this.get())||(hl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Pu(this._active)&&Hu(this)}_get(){const e=Ia.arr(this.source)?this.source.map(Ts):La(Ts(this.source));return this.calc(...e)}_start(){this.idle&&!Pu(this._active)&&(this.idle=!1,Ha(pl(this),(e=>{e.done=!1})),Ga.skipAnimation?(ba.batchedUpdates((()=>this.advance())),Hu(this)):ts.start(this))}_attach(){let e=1;Ha(La(this.source),(t=>{zs(t)&&Ls(t,this),eu(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ha(La(this.source),(e=>{zs(e)&&Rs(e,this)})),this._active.clear(),Hu(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=La(this.source).reduce(((e,t)=>Math.max(e,(eu(t)?t.priority:0)+1)),0))}}function Iu(e){return!1!==e.idle}function Pu(e){return!e.size||Array.from(e).every(Iu)}function Hu(e){e.idle||(e.idle=!0,Ha(pl(e),(e=>{e.done=!0})),Ps(e,{type:"idle",parent:e}))}function Nu(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Ga.assign({createStringInterpolator:Ks,to:(e,t)=>new Tu(e,t)});const Lu=["style","children","scrollTop","scrollLeft","viewBox"],Ru=/^--/;function Vu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ru.test(e)||Yu.hasOwnProperty(e)&&Yu[e]?(""+t).trim():t+"px"}const Wu={};let Yu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const qu=["Webkit","Ms","Moz","O"];Yu=Object.keys(Yu).reduce(((e,t)=>(qu.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Yu);const Uu=["x","y","z"],Qu=/^(matrix|translate|scale|rotate|skew)/,Zu=/^(translate)/,Gu=/^(rotate|skew)/,Xu=(e,t)=>Ia.num(e)&&0!==e?e+t:e,Ju=(e,t)=>Ia.arr(e)?e.every((e=>Ju(e,t))):Ia.num(e)?e===t:parseFloat(e)===t;class Ku extends bl{constructor(e){let{x:t,y:n,z:r}=e,i=Nu(e,Uu);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Xu(e,"px"))).join(",")})`,Ju(e,0)]))),Na(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Qu.test(t)){if(delete i[t],Ia.und(e))return;const n=Zu.test(t)?"px":Gu.test(t)?"deg":"";o.push(La(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Xu(i,n)})`,Ju(i,0)]:e=>[`${t}(${e.map((e=>Xu(e,n))).join(",")})`,Ju(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ec(o,a)),super(i)}}class ec extends Hs{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ha(this.inputs,((n,r)=>{const i=Ts(n[0]),[o,a]=this.transforms[r](Ia.arr(i)?i:n.map(Ts));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ha(this.inputs,(e=>Ha(e,(e=>zs(e)&&Ls(e,this)))))}observerRemoved(e){0==e&&Ha(this.inputs,(e=>Ha(e,(e=>zs(e)&&Rs(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ps(this,e)}}const tc=["scrollTop","scrollLeft"];Ga.assign({batchedUpdates:b,createStringInterpolator:Ks,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const nc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new bl(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Dl(e)||"Anonymous";return(e=Ia.str(e)?o[e]||(o[e]=_l(e,i)):e[kl]||(e[kl]=_l(e,i))).displayName=`Animated(${t})`,e};return Na(e,((t,n)=>{Ia.arr(e)&&(n=Dl(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,u=Nu(r,Lu),c=Object.values(u),d=Object.keys(u).map((t=>n||e.hasAttribute(t)?t:Wu[t]||(Wu[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Vu(t,i[t]);Ru.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Ku(e),getComponentProps:e=>Nu(e,tc)}),rc=nc.animated,ic={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},oc=e=>Object.keys(ic).reduce(((t,n)=>{const r=ic[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ac=oc("max-width"),sc=(oc("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),lc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,uc=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||fn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${lc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cc=p(uc)`
    animation-delay: -0.45s;
`,dc=p(uc)`
    animation-delay: -0.3s;
`,hc=p(uc)`
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
                    background-color: ${fn.Neutral[8](e)};
                    border: 1px solid ${fn.Primary(e)};

                    span {
                        color: ${fn.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${fn.Neutral[8](e)};
                    border: 1px solid ${fn.Neutral[5](e)};

                    span {
                        color: ${fn.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${fn.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${fn.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${fn.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${fn.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${fn.Primary(e)};
                    border: 1px solid transparent;

                    ${ac.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${fn.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${Fn("H5","semibold")}
                    }

                    ${ac.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${Fn("H4","semibold")}
                    }

                    ${ac.mobileS} {
                        height: auto;
                    }
                `}
`;const fc=p((({color:n,className:r,size:i=18})=>e(sc,{className:r,$size:i,$color:n,children:[t(uc,{id:"inner1",$size:i-2,$borderWidth:2}),t(cc,{id:"inner2",$size:i-2,$borderWidth:2}),t(dc,{id:"inner3",$size:i-2,$borderWidth:2}),t(hc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=fn.Primary(e);break;case"disabled":t=fn.Neutral[3](e);break;default:t=fn.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,pc=p.div`
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
    border: 1px solid ${fn.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=fn.Primary(e),n=fn.Primary(e)),e.disabled&&(t=fn.Neutral[6](e),n=fn.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,gc=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,mc=p($)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return g`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?fn.Neutral[4]:fn.Neutral[8]};
`,yc=p(rc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,vc=p.ul`
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
        background: ${fn.Neutral[4]};
        border-right: 5px solid ${fn.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${ac.mobileL} {
        max-height: 15rem;
    }
`,bc=p.li`
    :hover,
    :focus,
    :active {
        background: ${fn.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${fn.Accent.Light[5]};
            `}}
`,wc=p.button`
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
        outline-color: ${fn.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,$c=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Sc=p.div`
    ${Fn("Body","regular")}
    color: ${fn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$c}
`,xc=p.div`
    color: ${fn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&$c}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${Fn("BodySmall","semibold")}
                `:g`
                    ${Fn("Body","regular")}
                `}
`,_c=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Sc} {
                        display: inline;
                    }

                    ${xc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Fc=p.div`
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
`,Dc=p((({className:n,checked:r,disabled:i,onChange:o,onKeyPress:a,displaySize:l="default",...c})=>{const[d,h]=u(r);s((()=>{h(r)}),[r]);const f=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),a&&a(t)}};return e(pc,{selected:d,disabled:i,className:n,"data-testid":"checkbox",$displaySize:l,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:f,children:[t(gc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:i,checked:d,...c}),d&&t(mc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:l})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Bc=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Oc=p.button`
    ${Fn("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${fn.Primary(e)};\n\t\t`}
`,Mc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ac=p(Dn.Body)``,Ec=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${fn.Validation.Red.Icon};
`,jc=p.button`
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
                background-color: ${fn.Neutral[7]};
            `}
    }
`,Cc=i.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>t(jc,{ref:a,$outline:r,$highlight:n,type:i,...o,children:e}))),zc=p.li`
    background: ${fn.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Tc=p(jn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Ic=p(S)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${fn.Neutral[3]};
`,Pc=p(Cc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${fn.Neutral[3]};
    cursor: pointer;
`,Hc=p(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${fn.Neutral[3]};
`,Nc=c(((n,r)=>{const{onClear:i,...o}=n;return e(zc,{children:[t(Ic,{}),t(Tc,{ref:r,...o}),o.value&&t(Pc,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:t(Hc,{})})]},"search")})),Lc=({listItems:r,listExtractor:i,valueExtractor:a,onSelectItem:l,listStyleWidth:c,visible:d,enableSearch:h,searchPlaceholder:f="Search",onSearch:p,searchFunction:g,onDismiss:m,disableItemFocus:y,multiSelect:v,selectedItems:b,onSelectAll:w,onRetry:$,itemsLoadState:S="success",itemTruncationType:x="end",itemMaxLines:_=2,labelDisplayType:F="inline",renderListItem:k,onBlur:D,hideNoResultsDisplay:B,renderCustomCallToAction:O,...M})=>{const[A,E]=u(0),[j,C]=u(""),[z,T]=u(r),[I,P]=u(0),H=Cu({height:I}),N=o(),L=o(),R=o([]),V=o(),W=o(),Y=o(A),q=o(z),U=e=>{Y.current=e,E(e)},Q=e=>{q.current=e,T(e)};s((()=>(document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)})),[]),s((()=>{J(j)}),[j]),s((()=>{if(C(""),d){if(setTimeout((()=>{P(K())})),y)return;V&&V.current?(V.current.focus(),U(-1)):R.current[A]&&R.current[A].focus()}else P(0)}),[d]),s((()=>{if(d){const e=K();P(e)}}),[z,S]),s((()=>{Q(r),C(""),U(0)}),[r]);const Z=e=>i?i(e):e.toString(),G=e=>{if("inline"!==F)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return tr.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},X=e=>!!ga(b,(t=>ya(t,e))),J=e=>{if(""===e)Q(r);else if(g){const t=g(e);Q(t)}else{const t=r.filter((t=>{const n=Z(t),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase();return"object"==typeof n&&n.secondaryLabel?r.includes(e.trim().toLowerCase())||n.secondaryLabel.includes(e.trim().toLowerCase()):r.includes(e.trim().toLowerCase())}));Q(t)}},K=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(W.current?W.current.getBoundingClientRect().height:0),ee=e=>{if(N&&N.current.contains(e.target))switch(e.code){case"ArrowDown":if(Y.current<q.current.length-1){const e=Y.current+1;R.current[e].focus(),U(e)}break;case"ArrowUp":if(Y.current>0){const e=Y.current-1;R.current[e].focus(),U(Y.current-1)}break;case"Escape":m&&m(!0)}},te=(e,t)=>{e.preventDefault(),l&&l(t,(e=>a?a(e):e)(t))},ne=e=>{const t=e.target.value;C(t),p&&p()},re=()=>{C(""),V.current.focus(),p&&p()},ie=()=>{$&&$()},oe=()=>{D&&D()},ae=r=>e(n,{children:[t(Fc,{$maxLines:_,"aria-hidden":!0,children:r}),t(kc,{$maxLines:_,"aria-hidden":!0,children:r})]}),se=n=>{const r=Z(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=G(i),s=o&&G(o);return e(_c,{$labelDisplayType:a||s?"next-line":F,children:[t(Sc,{$truncateType:x,$maxLines:_,"aria-label":i,children:"middle"===x&&a?ae(i):i}),o&&t(xc,{$truncateType:x,$maxLines:_,$labelDisplayType:F,"aria-label":o,children:"middle"===x&&s?ae(o):o})]})},le=()=>{if(!$||$&&"success"===S)return z.map(((n,r)=>t(bc,{$checked:X(n)&&!v,children:e(wc,{$hasNextLineLabel:"next-line"===F&&z.length>0&&i&&"string"!=typeof i(z[0]),onClick:e=>{te(e,n)},ref:e=>R.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,$multiSelect:v,onBlur:oe,children:[v&&t(Dc,{checked:X(n),displaySize:"small"}),k?k(n,{selected:X(n)}):se(n)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(n,r))))},ue=()=>{if(v&&z.length>0&&!j&&"success"===S)return t(Bc,{children:t(Oc,{onClick:w,type:"button",children:0===b.length?"Select all":"Unselect all"})},"selectAll")},ce=()=>{if(!B&&(j||!h)&&0===z.length&&"success"===S)return e(Mc,{"data-testid":"list-no-results",children:[t(Ec,{"data-testid":"no-result-icon"}),t(Ac,{children:"No results found."})]},"noResults")},de=()=>{if($&&"loading"===S)return e(Mc,{"data-testid":"list-loading",children:[t(fc,{$buttonStyle:"secondary",size:24}),t(Ac,{children:"Loading..."})]},"loading")},he=()=>{if($&&"fail"===S)return e(Mc,{"data-testid":"list-fail",children:[t(Ec,{"data-testid":"load-error-icon"}),t(Ac,{children:"Failed to load."}),t(Oc,{onClick:ie,type:"button",children:"Try again."})]},"noResults")};return t(n,{children:e(yc,{style:H,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:N,children:[(()=>{if(d)return e(vc,{ref:L,"data-testid":"dropdown-list",width:c,role:"list",...M,children:[(h||g)&&"success"===S?t(Nc,{ref:V,onChange:ne,value:j,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:re}):null,ue(),ce(),de(),he(),le()]})})(),(()=>{if(d&&O)return t("div",{ref:W,"data-testid":"custom-cta",children:O(m,z)})})()]})})},Rc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Vc=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Wc=g`
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
        outline: 2px solid ${fn.Accent.Light[3]};
    }
`,Yc=p.button`
    ${Wc}
    cursor: pointer;
`,qc=p.div`
    ${Wc}
`,Uc=m`
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
`,Qc=p.div`
    position: relative;
    border: 1px solid ${fn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${fn.Neutral[8]};

    :focus-within {
        border: 1px solid ${fn.Accent.Light[1]};
        box-shadow: ${mn};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Uc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${fn.Neutral[6](e)};

                ${Yc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${fn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Yc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${fn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${fn.Validation.Red.Border(e)};
                    box-shadow: ${yn};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Rc};
    margin-left: 1rem;
`,p(x)`
    color: ${fn.Neutral[3]};
    height: ${$n.Body.fontSize}rem;
    width: ${$n.Body.fontSize}rem;
`;const Zc=p.div`
    height: 1px;
    background: ${fn.Neutral[5]};
    margin: 0 0.5rem;
`;p.div`
    display: flex;
    flex: 1;
`;const Gc=p(Dn.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Gc)`
    color: ${fn.Neutral[3]};
`;const Xc=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:l,readOnly:u})=>{const c=o();return((e,t,n="window",r)=>{const i=o();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(c&&c.current.contains(e.target))return;n&&l()}}),"document"),t(Vc,{children:t(Qc,{ref:c,error:r&&!n,disabled:i,$readOnly:u,expanded:n,"data-testid":a,children:e})})},Jc=({className:r,"data-testid":i,selectedOption:a,minimumCharacters:l=3,fetchOptions:c,placeholder:h="Enter here...",readOnly:f=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:y,displayValueExtractor:v=(e=>e.toString()),onSelectOption:b})=>{const w=a&&v(a),[$,S]=u(w||""),[x,_]=u(w||""),[F,k]=u([]),[D,B]=u(!0),[O,M]=u(!1),[A,E]=u(!!a),[j,C]=u(a),z=o(c),T=async e=>{M(!1),B(!0);try{const t=await z.current(e);_(e),k(t),B(!1)}catch{M(!0)}},I=d(de((e=>T(e)),500,{leading:!1,trailing:!0}),[]);s((()=>{z.current=c}),[c]),s((()=>{$&&$.length>=l&&$!==x?I($):I.cancel(),""===$&&j&&(b&&b(void 0,void 0),N(),C(void 0)),a&&$!==v(a)&&E(!1)}),[$,a]),s((()=>{a&&(S(v(a)),N(a),C(a))}),[a]);const P=e=>{S(e.target.value)},H=(e,t)=>{b&&b(e,t)},N=e=>{_(e?v(e):""),E(!!e),k([]),B(!0)},L=()=>{S(""),b&&b(void 0,void 0),N()},R=()=>$&&$.length>=l&&!A,V=e=>m?m(e):e,W=()=>t(ar,{type:"text",value:$,onChange:P,placeholder:h,readOnly:f,disabled:p,allowClear:!0,onClear:L,styleType:"no-border"});return e(Xc,{className:r,show:R(),error:g&&!R(),disabled:p,readOnly:f,testId:i,onBlur:()=>{A||j?(N(j),S(v(j)),b&&b(j,V(j)),C(j)):L()},children:[t(f?n:qc,{children:W()}),!f&&R()&&t(Zc,{}),t(Lc,{listItems:F,onSelectItem:H,valueExtractor:m,listExtractor:y,itemsLoadState:O?"fail":D?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>T($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})};export{Jc as PredictiveTextInput};
//# sourceMappingURL=index.js.map
