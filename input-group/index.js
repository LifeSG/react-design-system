import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useEffect as o,useImperativeHandle as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as v}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as F}from"@lifesg/react-icons";import{MagnifierIcon as _}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";function D(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k=Array.isArray,M="object"==typeof O&&O&&O.Object===Object&&O,A=M,j="object"==typeof self&&self&&self.Object===Object&&self,E=A||j||Function("return this")(),C=E.Symbol,I=C,P=Object.prototype,z=P.hasOwnProperty,H=P.toString,N=I?I.toStringTag:void 0;var T=function(e){var t=z.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch(e){}var i=H.call(e);return n&&(t?e[N]=r:delete e[N]),i},L=Object.prototype.toString;var R=T,V=function(e){return L.call(e)},W=C?C.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?R(e):V(e)};var q=function(e){return null!=e&&"object"==typeof e},U=Y,Q=q;var Z=function(e){return"symbol"==typeof e||Q(e)&&"[object Symbol]"==U(e)},G=k,X=Z,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var ee=function(e,t){if(G(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!X(e))||(K.test(e)||!J.test(e)||null!=t&&e in Object(t))};var te=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re=Y,ne=te;var ie,ae=function(e){if(!ne(e))return!1;var t=re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},oe=E["__core-js_shared__"],se=(ie=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var le=function(e){return!!se&&se in e},ce=Function.prototype.toString;var ue=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},de=ae,he=le,fe=te,pe=ue,ge=/^\[object .+?Constructor\]$/,me=Function.prototype,ye=Object.prototype,be=me.toString,ve=ye.hasOwnProperty,we=RegExp("^"+be.call(ve).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!fe(e)||he(e))&&(de(e)?we:ge).test(pe(e))},xe=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var r=xe(e,t);return $e(r)?r:void 0},Fe=Se(Object,"create"),_e=Fe;var Be=function(){this.__data__=_e?_e(null):{},this.size=0};var De=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=Fe,ke=Object.prototype.hasOwnProperty;var Me=function(e){var t=this.__data__;if(Oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ke.call(t,e)?t[e]:void 0},Ae=Fe,je=Object.prototype.hasOwnProperty;var Ee=Fe;var Ce=Be,Ie=De,Pe=Me,ze=function(e){var t=this.__data__;return Ae?void 0!==t[e]:je.call(t,e)},He=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ne.prototype.clear=Ce,Ne.prototype.delete=Ie,Ne.prototype.get=Pe,Ne.prototype.has=ze,Ne.prototype.set=He;var Te=Ne;var Le=function(){this.__data__=[],this.size=0};var Re=function(e,t){return e===t||e!=e&&t!=t},Ve=Re;var We=function(e,t){for(var r=e.length;r--;)if(Ve(e[r][0],t))return r;return-1},Ye=We,qe=Array.prototype.splice;var Ue=We;var Qe=We;var Ze=We;var Ge=Le,Xe=function(e){var t=this.__data__,r=Ye(t,e);return!(r<0)&&(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,!0)},Je=function(e){var t=this.__data__,r=Ue(t,e);return r<0?void 0:t[r][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var r=this.__data__,n=Ze(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var rt=tt,nt=Se(E,"Map"),it=Te,at=rt,ot=nt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var r=e.__data__;return st(t)?r["string"==typeof t?"string":"hash"]:r.map},ct=lt;var ut=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},pt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ut(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var r=ht(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}bt.prototype.clear=ft,bt.prototype.delete=pt,bt.prototype.get=gt,bt.prototype.has=mt,bt.prototype.set=yt;var vt=bt,wt=vt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new($t.Cache||wt),r}$t.Cache=wt;var xt=$t;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ft=/\\(\\)?/g,_t=function(e){var t=xt(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,r,n,i){t.push(n?i.replace(Ft,"$1"):r||e)})),t}));var Bt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Dt=k,Ot=Z,kt=C?C.prototype:void 0,Mt=kt?kt.toString:void 0;var At=function e(t){if("string"==typeof t)return t;if(Dt(t))return Bt(t,e)+"";if(Ot(t))return Mt?Mt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},jt=At;var Et=k,Ct=ee,It=_t,Pt=function(e){return null==e?"":jt(e)};var zt=function(e,t){return Et(e)?e:Ct(e,t)?[e]:It(Pt(e))},Ht=Z;var Nt=function(e){if("string"==typeof e||Ht(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Tt=zt,Lt=Nt;var Rt=function(e,t){for(var r=0,n=(t=Tt(t,e)).length;null!=e&&r<n;)e=e[Lt(t[r++])];return r&&r==n?e:void 0},Vt=Rt;var Wt=function(e,t,r){var n=null==e?void 0:Vt(e,t);return void 0===n?r:n};const Yt=(e,t,r)=>t?Wt(r,t)||Wt(e,t):r||e,qt=(e,t)=>{const r=t||e.defaultValue;return Wt(e.collections,r)};var Ut;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ut||(Ut={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Zt=e=>t=>{const r=t.theme,n=qt(Qt,r[Ut.colorScheme]);return r.options&&r.options.color?Yt(n,e,r.options.color):Yt(n,e)},Gt={Brand:{1:Zt("Brand.1"),2:Zt("Brand.2"),3:Zt("Brand.3"),4:Zt("Brand.4"),5:Zt("Brand.5"),6:Zt("Brand.6")},Primary:Zt("Primary"),PrimaryDark:Zt("PrimaryDark"),Secondary:Zt("Secondary"),Accent:{Light:{1:Zt("Accent.Light.1"),2:Zt("Accent.Light.2"),3:Zt("Accent.Light.3"),4:Zt("Accent.Light.4"),5:Zt("Accent.Light.5"),6:Zt("Accent.Light.6")},Dark:{1:Zt("Accent.Dark.1"),2:Zt("Accent.Dark.2"),3:Zt("Accent.Dark.3")}},Neutral:{1:Zt("Neutral.1"),2:Zt("Neutral.2"),3:Zt("Neutral.3"),4:Zt("Neutral.4"),5:Zt("Neutral.5"),6:Zt("Neutral.6"),7:Zt("Neutral.7"),8:Zt("Neutral.8")},Validation:{Green:{Text:Zt("Validation.Green.Text"),Icon:Zt("Validation.Green.Icon"),Border:Zt("Validation.Green.Border"),Background:Zt("Validation.Green.Background")},Orange:{Text:Zt("Validation.Orange.Text"),Icon:Zt("Validation.Orange.Icon"),Border:Zt("Validation.Orange.Border"),Background:Zt("Validation.Orange.Background"),Badge:Zt("Validation.Orange.Badge")},Red:{Text:Zt("Validation.Red.Text"),Icon:Zt("Validation.Red.Icon"),Border:Zt("Validation.Red.Border"),Background:Zt("Validation.Red.Background")},Blue:{Text:Zt("Validation.Blue.Text"),Icon:Zt("Validation.Blue.Icon"),Border:Zt("Validation.Blue.Border"),Background:Zt("Validation.Blue.Background")}},Shadow:{Accent:Zt("Shadow.Accent"),Red:Zt("Shadow.Red"),Elevation:Zt("Shadow.Elevation")}},Xt={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Jt=e=>t=>{var r;const n=t.theme,i=qt(Xt,n[Ut.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Yt(i,e,n.options.designToken):Yt(i,e)},Kt={InputBoxShadow:Jt("InputBoxShadow"),InputErrorBoxShadow:Jt("InputErrorBoxShadow"),ElevationBoxShadow:Jt("ElevationBoxShadow"),Table:{Header:Jt("Table.Header"),Cell:{Primary:Jt("Table.Cell.Primary"),Secondary:Jt("Table.Cell.Secondary"),Selected:Jt("Table.Cell.Selected"),Hover:Jt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Jt("Button.Danger.BackgroundColor"),Hover:Jt("Button.Danger.Hover"),Primary:Jt("Button.Danger.Primary"),Border:Jt("Button.Danger.Border")}}},er={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},tr={collections:{base:{D1:{fontFamily:er.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:er.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:er.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:er.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:er.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:er.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:er.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:er.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:er.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:er.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:er.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:er.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:er.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:er.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rr=e=>t=>{const r=t.theme,n=qt(tr,r[Ut.textStyleScheme]);return r.options&&r.options.textStyle?Yt(n,e,r.options.textStyle):Yt(n,e)},nr={D1:{fontFamily:rr("D1.fontFamily"),fontSize:rr("D1.fontSize"),fontWeight:rr("D1.fontWeight"),lineHeight:rr("D1.lineHeight"),letterSpacing:rr("D1.letterSpacing")},D2:{fontFamily:rr("D2.fontFamily"),fontSize:rr("D2.fontSize"),fontWeight:rr("D2.fontWeight"),lineHeight:rr("D2.lineHeight"),letterSpacing:rr("D2.letterSpacing")},D3:{fontFamily:rr("D3.fontFamily"),fontSize:rr("D3.fontSize"),fontWeight:rr("D3.fontWeight"),lineHeight:rr("D3.lineHeight"),letterSpacing:rr("D3.letterSpacing")},D4:{fontFamily:rr("D4.fontFamily"),fontSize:rr("D4.fontSize"),fontWeight:rr("D4.fontWeight"),lineHeight:rr("D4.lineHeight"),letterSpacing:rr("D4.letterSpacing")},DBody:{fontFamily:rr("DBody.fontFamily"),fontSize:rr("DBody.fontSize"),fontWeight:rr("DBody.fontWeight"),lineHeight:rr("DBody.lineHeight"),letterSpacing:rr("DBody.letterSpacing")},H1:{fontFamily:rr("H1.fontFamily"),fontSize:rr("H1.fontSize"),fontWeight:rr("H1.fontWeight"),lineHeight:rr("H1.lineHeight"),letterSpacing:rr("H1.letterSpacing")},H2:{fontFamily:rr("H2.fontFamily"),fontSize:rr("H2.fontSize"),fontWeight:rr("H2.fontWeight"),lineHeight:rr("H2.lineHeight"),letterSpacing:rr("H2.letterSpacing")},H3:{fontFamily:rr("H3.fontFamily"),fontSize:rr("H3.fontSize"),fontWeight:rr("H3.fontWeight"),lineHeight:rr("H3.lineHeight"),letterSpacing:rr("H3.letterSpacing")},H4:{fontFamily:rr("H4.fontFamily"),fontSize:rr("H4.fontSize"),fontWeight:rr("H4.fontWeight"),lineHeight:rr("H4.lineHeight"),letterSpacing:rr("H4.letterSpacing")},H5:{fontFamily:rr("H5.fontFamily"),fontSize:rr("H5.fontSize"),fontWeight:rr("H5.fontWeight"),lineHeight:rr("H5.lineHeight"),letterSpacing:rr("H5.letterSpacing")},H6:{fontFamily:rr("H6.fontFamily"),fontSize:rr("H6.fontSize"),fontWeight:rr("H6.fontWeight"),lineHeight:rr("H6.lineHeight"),letterSpacing:rr("H6.letterSpacing")},Body:{fontFamily:rr("Body.fontFamily"),fontSize:rr("Body.fontSize"),fontWeight:rr("Body.fontWeight"),lineHeight:rr("Body.lineHeight"),letterSpacing:rr("Body.letterSpacing")},BodySmall:{fontFamily:rr("BodySmall.fontFamily"),fontSize:rr("BodySmall.fontSize"),fontWeight:rr("BodySmall.fontWeight"),lineHeight:rr("BodySmall.lineHeight"),letterSpacing:rr("BodySmall.letterSpacing")},XSmall:{fontFamily:rr("XSmall.fontFamily"),fontSize:rr("XSmall.fontSize"),fontWeight:rr("XSmall.fontWeight"),lineHeight:rr("XSmall.lineHeight"),letterSpacing:rr("XSmall.letterSpacing")}},ir=e=>{switch(e){case 700:case"bold":return er.Bold;case 600:case"semibold":return er.Semibold;case 300:case"light":return er.Light;case 400:case"regular":return er.Regular;default:return""}},ar=(e,t)=>r=>{var n;const i=nr[e].fontFamily(r),a=nr[e].fontWeight(r);return Object.values(er).includes(i)?g`
                font-family: ${ir(t)||ir(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=or(t)||a)&&void 0!==n?n:"normal"};
        `},or=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},sr=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},lr=(e,t,r=!1)=>n=>{const i=nr[e],a=i.fontSize(n);return g`
            ${ar(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},cr=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${sr(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${sr(r)}
        `;var ur;!function(e){e.D1=p.h1`
        ${e=>g`
                ${lr("D1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${lr("D2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${lr("D3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${lr("D4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${lr("DBody",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${lr("H1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${lr("H2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${lr("H3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${lr("H4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${lr("H5",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${lr("H6",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${lr("Body",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${lr("BodySmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${lr("XSmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${cr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>fr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>fr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ur||(ur={}));const dr=p.a`
    ${e=>g`
            ${lr(e.textStyle,e.weight)}
            color: ${Gt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Gt.Secondary};

                svg {
                    color: ${Gt.Secondary};
                }
            }
        `}
`,hr=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,fr=r=>{var{external:n=!1,children:i}=r,a=D(r,["external","children"]);return e(dr,Object.assign({},a,{children:[i,n&&t(hr,{})]}))};var pr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(pr||(pr={}));const gr=p.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: 4px;
    background: ${Gt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt.InputBoxShadow};
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
                background: ${Gt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Gt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border};
                    box-shadow: ${Kt.InputErrorBoxShadow};
                }
            `:void 0}
`,mr=p.input`
    ${lr("Body","regular")}
    color: ${Gt.Neutral[1]};
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
        color: ${Gt.Neutral[3]};
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
`;var yr={exports:{}};yr.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,b,v,w)):new Date(g,m,p,y,b,v,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var br,vr,wr=yr.exports,$r={exports:{}},xr=$r.exports=(br={year:0,month:1,day:2,hour:3,minute:4,second:5},vr={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=vr[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),vr[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,u=br[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Sr={exports:{}};Sr.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var $=function(e){return e instanceof _},x=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),r&&(w[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},F=b;F.l=x,F.i=$,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,r){return F.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!F.u(t)||t,u=F.p(e),f=function(e,t){var i=F.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return F.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return f(n?y-w:y+(6-w),m);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=F.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[a]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=F.p(u),g=function(e){var t=S(f);return F.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},d=function(e){return F.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:F.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:F.s(o,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=F.p(h),m=S(n),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=F.m(this,m);return v=(p={},p[d]=v/12,p[c]=v,p[u]=v/3,p[l]=(b-y)/6048e5,p[s]=(b-y)/864e5,p[o]=b/r,p[a]=b/t,p[i]=b/e,p)[g]||b,f?v:F.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=_.prototype;return S.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,_,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[v],S.Ls=w,S.p={},S}();var Fr=Sr.exports,_r={exports:{}};_r.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Br=_r.exports,Dr={exports:{}};Dr.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Or=Dr.exports,kr={exports:{}};kr.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Mr,Ar=kr.exports;Fr.extend(Br),Fr.extend(Or),Fr.extend(Ar),Fr.extend(wr),Fr.extend(xr),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Fr(t).startOf("week");return jr(r).map((e=>Er(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Er(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Fr(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Fr(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Fr(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Fr(n):void 0,i?Fr(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Mr||(Mr={}));const jr=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Er=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Cr=[1,3,5,7,8,10,12],Ir=[4,6,9,11];var Pr,zr,Hr,Nr;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Cr.includes(a)?Math.min(i,31).toString():Ir.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Fr(e,r);return Fr(t,r).diff(n,"minute")},e.toDayjs=e=>e?Fr(e):Fr(),e.addMinutesToTime=(e,t,r="HH:mm")=>Fr(e,r).add(t,"minutes").format(r)}(Pr||(Pr={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Fr(e).isBefore(n,"day"))||!(!i||!Fr(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Fr(e).isValid())return e}return""}}(zr||(zr={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hr||(Hr={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Nr||(Nr={}));const Tr=p.input`
    ${lr("Body","regular")}
    color: ${Gt.Neutral[1]};

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
        color: ${Gt.Neutral[3]};
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
`,Lr=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Gt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Rr=p(b)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Vr=p.div`
    display: flex;
    width: 100%;
`,Wr=i.forwardRef(((n,i)=>{var{value:o,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=n,b=D(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=a();s(i,(()=>v.current),[]);const w=function({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),a=n.substring(0,r.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>Nr.transformWithSpaces(e,l)}),$=e=>{f&&(S()?F(e):f(e))},x=()=>{p&&p(),v&&v.current&&v.current.focus()},S=()=>"tel"===c&&l,F=e=>{const{nextValue:t,updateCaretPosition:r}=w(),n=t.replace(/\s/g,"");e.target.value=n,f(e),r()},_=o?(e=>e?S()?Nr.transformWithSpaces(e,l):e:"")(o):o,B=()=>e(r,{children:[t(Tr,Object.assign({"data-testid":"input",ref:v,disabled:d,value:_,onChange:$,type:c,readOnly:h},b)),g&&!d&&!h&&!!o&&t(Lr,Object.assign({onClick:x,type:"button"},{children:t(Rr,{"aria-hidden":!0})}))]});return t(r,{children:"no-border"===y?t(Vr,Object.assign({className:m},{children:B()})):t(gr,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:B()}))})})),Yr=p.div`
    display: flex;
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: 4px;
    background: ${Gt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt.InputBoxShadow};
    }

    ${e=>e.$readOnly?g`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?g`
                background: ${Gt.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?g`
                border: 1px solid ${Gt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border(e)};
                    box-shadow: ${Kt.InputErrorBoxShadow};
                }
            `:void 0}
`,qr=p(Wr)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,Ur=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${lr("Body","regular")}
    color: ${Gt.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Gt.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return g`
                color: ${Gt.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Gt.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?g`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:g`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Qr=rt;var Zr=rt,Gr=nt,Xr=vt;var Jr=rt,Kr=function(){this.__data__=new Qr,this.size=0},en=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},tn=function(e){return this.__data__.get(e)},rn=function(e){return this.__data__.has(e)},nn=function(e,t){var r=this.__data__;if(r instanceof Zr){var n=r.__data__;if(!Gr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Xr(n)}return r.set(e,t),this.size=r.size,this};function an(e){var t=this.__data__=new Jr(e);this.size=t.size}an.prototype.clear=Kr,an.prototype.delete=en,an.prototype.get=tn,an.prototype.has=rn,an.prototype.set=nn;var on=an;var sn=vt,ln=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},cn=function(e){return this.__data__.has(e)};function un(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new sn;++t<r;)this.add(e[t])}un.prototype.add=un.prototype.push=ln,un.prototype.has=cn;var dn=un,hn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},fn=function(e,t){return e.has(t)};var pn=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&r?new dn:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=o?n(g,p,d,t,e,a):n(p,g,d,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!hn(t,(function(e,t){if(!fn(f,t)&&(p===e||i(p,e,r,n,a)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,r,n,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var gn=E.Uint8Array,mn=Re,yn=pn,bn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},vn=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},wn=C?C.prototype:void 0,$n=wn?wn.valueOf:void 0;var xn=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new gn(e),new gn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return mn(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=bn;case"[object Set]":var l=1&n;if(s||(s=vn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=yn(s(e),s(t),n,i,a,o);return o.delete(e),u;case"[object Symbol]":if($n)return $n.call(e)==$n.call(t)}return!1};var Sn=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Fn=k;var _n=function(e,t,r){var n=t(e);return Fn(e)?n:Sn(n,r(e))};var Bn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},Dn=function(){return[]},On=Object.prototype.propertyIsEnumerable,kn=Object.getOwnPropertySymbols,Mn=kn?function(e){return null==e?[]:(e=Object(e),Bn(kn(e),(function(t){return On.call(e,t)})))}:Dn;var An=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},jn=Y,En=q;var Cn=function(e){return En(e)&&"[object Arguments]"==jn(e)},In=q,Pn=Object.prototype,zn=Pn.hasOwnProperty,Hn=Pn.propertyIsEnumerable,Nn=Cn(function(){return arguments}())?Cn:function(e){return In(e)&&zn.call(e,"callee")&&!Hn.call(e,"callee")},Tn={exports:{}};var Ln=function(){return!1};!function(e,t){var r=E,n=Ln,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(Tn,Tn.exports);var Rn=/^(?:0|[1-9]\d*)$/;var Vn=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Rn.test(e))&&e>-1&&e%1==0&&e<t};var Wn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Yn=Y,qn=Wn,Un=q,Qn={};Qn["[object Float32Array]"]=Qn["[object Float64Array]"]=Qn["[object Int8Array]"]=Qn["[object Int16Array]"]=Qn["[object Int32Array]"]=Qn["[object Uint8Array]"]=Qn["[object Uint8ClampedArray]"]=Qn["[object Uint16Array]"]=Qn["[object Uint32Array]"]=!0,Qn["[object Arguments]"]=Qn["[object Array]"]=Qn["[object ArrayBuffer]"]=Qn["[object Boolean]"]=Qn["[object DataView]"]=Qn["[object Date]"]=Qn["[object Error]"]=Qn["[object Function]"]=Qn["[object Map]"]=Qn["[object Number]"]=Qn["[object Object]"]=Qn["[object RegExp]"]=Qn["[object Set]"]=Qn["[object String]"]=Qn["[object WeakMap]"]=!1;var Zn=function(e){return Un(e)&&qn(e.length)&&!!Qn[Yn(e)]};var Gn=function(e){return function(t){return e(t)}},Xn={exports:{}};!function(e,t){var r=M,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Xn,Xn.exports);var Jn=Zn,Kn=Gn,ei=Xn.exports,ti=ei&&ei.isTypedArray,ri=ti?Kn(ti):Jn,ni=An,ii=Nn,ai=k,oi=Tn.exports,si=Vn,li=ri,ci=Object.prototype.hasOwnProperty;var ui=function(e,t){var r=ai(e),n=!r&&ii(e),i=!r&&!n&&oi(e),a=!r&&!n&&!i&&li(e),o=r||n||i||a,s=o?ni(e.length,String):[],l=s.length;for(var c in e)!t&&!ci.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||si(c,l))||s.push(c);return s},di=Object.prototype;var hi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||di)};var fi=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),pi=hi,gi=fi,mi=Object.prototype.hasOwnProperty;var yi=ae,bi=Wn;var vi=function(e){return null!=e&&bi(e.length)&&!yi(e)},wi=ui,$i=function(e){if(!pi(e))return gi(e);var t=[];for(var r in Object(e))mi.call(e,r)&&"constructor"!=r&&t.push(r);return t},xi=vi;var Si=function(e){return xi(e)?wi(e):$i(e)},Fi=_n,_i=Mn,Bi=Si;var Di=function(e){return Fi(e,Bi,_i)},Oi=Object.prototype.hasOwnProperty;var ki=function(e,t,r,n,i,a){var o=1&r,s=Di(e),l=s.length;if(l!=Di(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Oi.call(t,u)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var p=o;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=o?n(m,g,u,t,e,a):n(g,m,u,e,t,a);if(!(void 0===y?g===m||i(g,m,r,n,a):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Mi=Se(E,"DataView"),Ai=nt,ji=Se(E,"Promise"),Ei=Se(E,"Set"),Ci=Se(E,"WeakMap"),Ii=Y,Pi=ue,zi="[object Map]",Hi="[object Promise]",Ni="[object Set]",Ti="[object WeakMap]",Li="[object DataView]",Ri=Pi(Mi),Vi=Pi(Ai),Wi=Pi(ji),Yi=Pi(Ei),qi=Pi(Ci),Ui=Ii;(Mi&&Ui(new Mi(new ArrayBuffer(1)))!=Li||Ai&&Ui(new Ai)!=zi||ji&&Ui(ji.resolve())!=Hi||Ei&&Ui(new Ei)!=Ni||Ci&&Ui(new Ci)!=Ti)&&(Ui=function(e){var t=Ii(e),r="[object Object]"==t?e.constructor:void 0,n=r?Pi(r):"";if(n)switch(n){case Ri:return Li;case Vi:return zi;case Wi:return Hi;case Yi:return Ni;case qi:return Ti}return t});var Qi=on,Zi=pn,Gi=xn,Xi=ki,Ji=Ui,Ki=k,ea=Tn.exports,ta=ri,ra="[object Arguments]",na="[object Array]",ia="[object Object]",aa=Object.prototype.hasOwnProperty;var oa=function(e,t,r,n,i,a){var o=Ki(e),s=Ki(t),l=o?na:Ji(e),c=s?na:Ji(t),u=(l=l==ra?ia:l)==ia,d=(c=c==ra?ia:c)==ia,h=l==c;if(h&&ea(e)){if(!ea(t))return!1;o=!0,u=!1}if(h&&!u)return a||(a=new Qi),o||ta(e)?Zi(e,t,r,n,i,a):Gi(e,t,l,r,n,i,a);if(!(1&r)){var f=u&&aa.call(e,"__wrapped__"),p=d&&aa.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return a||(a=new Qi),i(g,m,r,n,a)}}return!!h&&(a||(a=new Qi),Xi(e,t,r,n,i,a))},sa=q;var la=function e(t,r,n,i,a){return t===r||(null==t||null==r||!sa(t)&&!sa(r)?t!=t&&r!=r:oa(t,r,n,i,e,a))},ca=on,ua=la;var da=te;var ha=function(e){return e==e&&!da(e)},fa=ha,pa=Si;var ga=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},ma=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var s=r[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=r[i])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new ca;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?ua(u,c,3,n,d):h))return!1}}return!0},ya=function(e){for(var t=pa(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,fa(i)]}return t},ba=ga;var va=zt,wa=Nn,$a=k,xa=Vn,Sa=Wn,Fa=Nt;var _a=function(e,t){return null!=e&&t in Object(e)},Ba=function(e,t,r){for(var n=-1,i=(t=va(t,e)).length,a=!1;++n<i;){var o=Fa(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&Sa(i)&&xa(o,i)&&($a(e)||wa(e))};var Da=la,Oa=Wt,ka=function(e,t){return null!=e&&Ba(e,t,_a)},Ma=ee,Aa=ha,ja=ga,Ea=Nt;var Ca=Rt;var Ia=function(e){return function(t){return null==t?void 0:t[e]}},Pa=function(e){return function(t){return Ca(t,e)}},za=ee,Ha=Nt;var Na=function(e){var t=ya(e);return 1==t.length&&t[0][2]?ba(t[0][0],t[0][1]):function(r){return r===e||ma(r,e,t)}},Ta=function(e,t){return Ma(e)&&Aa(t)?ja(Ea(e),t):function(r){var n=Oa(r,e);return void 0===n&&n===t?ka(r,e):Da(t,n,3)}},La=function(e){return e},Ra=k,Va=function(e){return za(e)?Ia(Ha(e)):Pa(e)};var Wa=function(e){return"function"==typeof e?e:null==e?La:"object"==typeof e?Ra(e)?Ta(e[0],e[1]):Na(e):Va(e)},Ya=Wa,qa=vi,Ua=Si;var Qa=function(e){return function(t,r,n){var i=Object(t);if(!qa(t)){var a=Ya(r);t=Ua(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var Za=/\s/;var Ga=function(e){for(var t=e.length;t--&&Za.test(e.charAt(t)););return t},Xa=/^\s+/;var Ja=function(e){return e?e.slice(0,Ga(e)+1).replace(Xa,""):e},Ka=te,eo=Z,to=/^[-+]0x[0-9a-f]+$/i,ro=/^0b[01]+$/i,no=/^0o[0-7]+$/i,io=parseInt;var ao=function(e){if("number"==typeof e)return e;if(eo(e))return NaN;if(Ka(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ka(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ja(e);var r=ro.test(e);return r||no.test(e)?io(e.slice(2),r?2:8):to.test(e)?NaN:+e},oo=1/0;var so=function(e){return e?(e=ao(e))===oo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var lo=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},co=Wa,uo=function(e){var t=so(e),r=t%1;return t==t?r?t-r:t:0},ho=Math.max;var fo=Qa((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:uo(r);return i<0&&(i=ho(n+i,0)),lo(e,co(t),i)})),po=la;var go=function(e,t){return po(e,t)},mo=Object.defineProperty,yo={};((e,t)=>{for(var r in t)mo(e,r,{get:t[r],enumerable:!0})})(yo,{assign:()=>Go,colors:()=>Uo,createStringInterpolator:()=>Vo,skipAnimation:()=>Qo,to:()=>Wo,willAdvance:()=>Zo});var bo=Co(),vo=e=>Mo(e,bo),wo=Co();vo.write=e=>Mo(e,wo);var $o=Co();vo.onStart=e=>Mo(e,$o);var xo=Co();vo.onFrame=e=>Mo(e,xo);var So=Co();vo.onFinish=e=>Mo(e,So);var Fo=[];vo.setTimeout=(e,t)=>{const r=vo.now()+t,n=()=>{const e=Fo.findIndex((e=>e.cancel==n));~e&&Fo.splice(e,1),Oo-=~e?1:0},i={time:r,handler:e,cancel:n};return Fo.splice(_o(r),0,i),Oo+=1,Ao(),i};var _o=e=>~(~Fo.findIndex((t=>t.time>e))||~Fo.length);vo.cancel=e=>{$o.delete(e),xo.delete(e),So.delete(e),bo.delete(e),wo.delete(e)},vo.sync=e=>{ko=!0,vo.batchedUpdates(e),ko=!1},vo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,vo.onStart(r)}return n.handler=e,n.cancel=()=>{$o.delete(r),t=null},n};var Bo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};vo.use=e=>Bo=e,vo.now="undefined"!=typeof performance?()=>performance.now():Date.now,vo.batchedUpdates=e=>e(),vo.catch=console.error,vo.frameLoop="always",vo.advance=()=>{"demand"!==vo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Eo()};var Do=-1,Oo=0,ko=!1;function Mo(e,t){ko?(t.delete(e),e(0)):(t.add(e),Ao())}function Ao(){Do<0&&(Do=0,"demand"!==vo.frameLoop&&Bo(jo))}function jo(){~Do&&(Bo(jo),vo.batchedUpdates(Eo))}function Eo(){const e=Do;Do=vo.now();const t=_o(Do);t&&(Io(Fo.splice(0,t),(e=>e.handler())),Oo-=t),Oo?($o.flush(),bo.flush(e?Math.min(64,Do-e):16.667),xo.flush(),wo.flush(),So.flush()):Do=-1}function Co(){let e=new Set,t=e;return{add(r){Oo+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Oo-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Oo-=t.size,Io(t,(t=>t(r)&&e.add(t))),Oo+=e.size,t=e)}}}function Io(e,t){e.forEach((e=>{try{t(e)}catch(e){vo.catch(e)}}))}function Po(){}var zo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ho(e,t){if(zo.arr(e)){if(!zo.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var No=(e,t)=>e.forEach(t);function To(e,t,r){if(zo.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Lo=e=>zo.und(e)?[]:zo.arr(e)?e:[e];function Ro(e,t){if(e.size){const r=Array.from(e);e.clear(),No(r,t)}}var Vo,Wo,Yo=(e,...t)=>Ro(e,(e=>e(...t))),qo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Uo=null,Qo=!1,Zo=Po,Go=e=>{e.to&&(Wo=e.to),e.now&&(vo.now=e.now),void 0!==e.colors&&(Uo=e.colors),null!=e.skipAnimation&&(Qo=e.skipAnimation),e.createStringInterpolator&&(Vo=e.createStringInterpolator),e.requestAnimationFrame&&vo.use(e.requestAnimationFrame),e.batchedUpdates&&(vo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Zo=e.willAdvance),e.frameLoop&&(vo.frameLoop=e.frameLoop)},Xo=new Set,Jo=[],Ko=[],es=0,ts={get idle(){return!Xo.size&&!Jo.length},start(e){es>e.priority?(Xo.add(e),vo.onStart(rs)):(ns(e),vo(as))},advance:as,sort(e){if(es)vo.onFrame((()=>ts.sort(e)));else{const t=Jo.indexOf(e);~t&&(Jo.splice(t,1),is(e))}},clear(){Jo=[],Xo.clear()}};function rs(){Xo.forEach(ns),Xo.clear(),vo(as)}function ns(e){Jo.includes(e)||is(e)}function is(e){Jo.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Jo,(t=>t.priority>e.priority)),0,e)}function as(e){const t=Ko;for(let r=0;r<Jo.length;r++){const n=Jo[r];es=n.priority,n.idle||(Zo(n),n.advance(e),n.idle||t.push(n))}return es=0,(Ko=Jo).length=0,(Jo=t).length>0}var os="[-+]?\\d*\\.?\\d+",ss=os+"%";function ls(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var cs=new RegExp("rgb"+ls(os,os,os)),us=new RegExp("rgba"+ls(os,os,os,os)),ds=new RegExp("hsl"+ls(os,ss,ss)),hs=new RegExp("hsla"+ls(os,ss,ss,os)),fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ps=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gs=/^#([0-9a-fA-F]{6})$/,ms=/^#([0-9a-fA-F]{8})$/;function ys(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function bs(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=ys(i,n,e+1/3),o=ys(i,n,e),s=ys(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function vs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ws(e){return(parseFloat(e)%360+360)%360/360}function $s(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function xs(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ss(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=gs.exec(e))?parseInt(t[1]+"ff",16)>>>0:Uo&&void 0!==Uo[e]?Uo[e]:(t=cs.exec(e))?(vs(t[1])<<24|vs(t[2])<<16|vs(t[3])<<8|255)>>>0:(t=us.exec(e))?(vs(t[1])<<24|vs(t[2])<<16|vs(t[3])<<8|$s(t[4]))>>>0:(t=fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ms.exec(e))?parseInt(t[1],16)>>>0:(t=ps.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ds.exec(e))?(255|bs(ws(t[1]),xs(t[2]),xs(t[3])))>>>0:(t=hs.exec(e))?(bs(ws(t[1]),xs(t[2]),xs(t[3]))|$s(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Fs=(e,t,r)=>{if(zo.fun(e))return e;if(zo.arr(e))return Fs({range:e,output:t,extrapolate:r});if(zo.str(e.output[0]))return Vo(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=a(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var _s=1.70158,Bs=1.525*_s,Ds=_s+1,Os=2*Math.PI/3,ks=2*Math.PI/4.5,Ms=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},As={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ds*e*e*e-_s*e*e,easeOutBack:e=>1+Ds*Math.pow(e-1,3)+_s*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Bs)/2:(Math.pow(2*e-2,2)*((Bs+1)*(2*e-2)+Bs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Os),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Os)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ks)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ks)/2+1,easeInBounce:e=>1-Ms(1-e),easeOutBounce:Ms,easeInOutBounce:e=>e<.5?(1-Ms(1-2*e))/2:(1+Ms(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},js=Symbol.for("FluidValue.get"),Es=Symbol.for("FluidValue.observers"),Cs=e=>Boolean(e&&e[js]),Is=e=>e&&e[js]?e[js]():e,Ps=e=>e[Es]||null;function zs(e,t){const r=e[Es];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Hs=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ns(this,e)}},Ns=(e,t)=>Vs(e,js,t);function Ts(e,t){if(e[js]){let r=e[Es];r||Vs(e,Es,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ls(e,t){const r=e[Es];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Es]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Rs,Vs=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ws=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ys=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qs=new RegExp(`(${Ws.source})(%|[a-z]+)`,"i"),Us=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Qs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Zs=e=>{const[t,r]=Gs(e);if(!t||qo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Qs.test(r)?Zs(r):r||e},Gs=e=>{const t=Qs.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Xs=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Js=e=>{Rs||(Rs=Uo?new RegExp(`(${Object.keys(Uo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Is(e).replace(Qs,Zs).replace(Ys,Ss).replace(Rs,Ss))),r=t.map((e=>e.match(Ws).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Fs({...e,output:t})));return e=>{const r=!qs.test(t[0])&&t.find((e=>qs.test(e)))?.replace(Ws,"");let i=0;return t[0].replace(Ws,(()=>`${n[i++](e)}${r||""}`)).replace(Us,Xs)}},Ks="react-spring: ",el=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ks}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},tl=el(console.warn);var rl=el(console.warn);function nl(e){return zo.str(e)&&("#"==e[0]||/\d/.test(e)||!qo()&&Qs.test(e)||e in(Uo||{}))}var il=qo()?o:l,al=()=>{const e=a(!1);return il((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ol(){const e=c()[1],t=al();return()=>{t.current&&e(Math.random())}}var sl=e=>o(e,ll),ll=[];function cl(e){const t=a();return o((()=>{t.current=e})),t.current}var ul=Symbol.for("Animated:node"),dl=e=>e&&e[ul],hl=(e,t)=>{return r=e,n=ul,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},fl=e=>e&&e[ul]&&e[ul].getPayload(),pl=class{constructor(){hl(this,this)}getPayload(){return this.payload||[]}},gl=class extends pl{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,zo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new gl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return zo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,zo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ml=class extends gl{constructor(e){super(0),this._string=null,this._toString=Fs({output:[e,e]})}static create(e){return new ml(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(zo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Fs({output:[this.getValue(),e]})),this._value=0,super.reset()}},yl={dependencies:null},bl=class extends pl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return To(this.source,((r,n)=>{var i;(i=r)&&i[ul]===i?t[n]=r.getValue(e):Cs(r)?t[n]=Is(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&No(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return To(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){yl.dependencies&&Cs(e)&&yl.dependencies.add(e);const t=fl(e);t&&No(t,(e=>this.add(e)))}},vl=class extends bl{constructor(e){super(e)}static create(e){return new vl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(wl)),!0)}};function wl(e){return(nl(e)?ml:gl).create(e)}function $l(e){const t=dl(e);return t?t.constructor:zo.arr(e)?vl:nl(e)?ml:gl}var xl=(e,t)=>{const r=!zo.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((i,s)=>{const l=a(null),c=r&&d((e=>{l.current=function(e,t){e&&(zo.fun(e)?e(t):e.current=t);return t}(s,e)}),[s]),[u,h]=function(e,t){const r=new Set;yl.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new bl(e),yl.dependencies=null,[e,r]}(i,t),f=ol(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new Sl(p,h),m=a();il((()=>(m.current=g,No(h,(e=>Ts(e,g))),()=>{m.current&&(No(m.current.deps,(e=>Ls(e,m.current))),vo.cancel(m.current.update))}))),o(p,[]),sl((()=>()=>{const e=m.current;No(e.deps,(t=>Ls(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,{...y,ref:c})}))},Sl=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&vo.write(this.update)}};var Fl=Symbol.for("AnimatedComponent"),_l=e=>zo.str(e)?e:e&&zo.str(e.displayName)?e.displayName:zo.fun(e)&&e.name||null;function Bl(e,...t){return zo.fun(e)?e(...t):e}var Dl=(e,t)=>!0===e||!!(t&&e&&(zo.fun(e)?e(t):Lo(e).includes(t))),Ol=(e,t)=>zo.obj(e)?t&&e[t]:e,kl=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ml=e=>e,Al=(e,t=Ml)=>{let r=jl;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);zo.und(r)||(n[i]=r)}return n},jl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],El={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cl(e){const t=function(e){const t={};let r=0;if(To(e,((e,n)=>{El[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return To(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Il(e){return e=Is(e),zo.arr(e)?e.map(Il):nl(e)?yo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Pl(e){return zo.fun(e)||zo.arr(e)&&zo.obj(e[0])}var zl={tension:170,friction:26,mass:1,damping:1,easing:As.linear,clamp:!1},Hl=class{constructor(){this.velocity=0,Object.assign(this,zl)}};function Nl(e,t){if(zo.und(t.decay)){const r=!zo.und(t.tension)||!zo.und(t.friction);!r&&zo.und(t.frequency)&&zo.und(t.damping)&&zo.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Tl=[],Ll=class{constructor(){this.changed=!1,this.values=Tl,this.toValues=null,this.fromValues=Tl,this.config=new Hl,this.immediate=!1}};function Rl(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,u=Dl(r.cancel??n?.cancel,t);if(u)f();else{zo.und(r.pause)||(i.paused=Dl(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Dl(e,t)),l=Bl(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-vo.now()}function h(){l>0&&!yo.skipAnimation?(i.delayed=!0,c=vo.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{a.start({...r,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Vl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ql(e.get()):t.every((e=>e.noop))?Wl(e.get()):Yl(e.get(),t.every((e=>e.finished))),Wl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Yl=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ql=e=>({value:e,cancelled:!0,finished:!1});function Ul(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Al(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&ql(n)||i!==r.asyncId&&Yl(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new Zl,o=new Gl;return(async()=>{if(yo.skipAnimation)throw Ql(r),o.result=Yl(n,!1),d(o),o;f(a);const s=zo.obj(e)?{...e}:{...t,to:e};s.parentId=i,To(c,((e,t)=>{zo.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(yo.skipAnimation)return Ql(r),Yl(n,!1);try{let t;t=zo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Yl(n.get(),!0,!1)}catch(e){if(e instanceof Zl)g=e.result;else{if(!(e instanceof Gl))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return zo.fun(o)&&vo.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function Ql(e,t){Ro(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Zl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Gl=class extends Error{constructor(){super("SkipAnimationSignal")}},Xl=e=>e instanceof Kl,Jl=1,Kl=class extends Hs{constructor(){super(...arguments),this.id=Jl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=dl(this);return e&&e.getValue()}to(...e){return yo.to(this,e)}interpolate(...e){return tl(`${Ks}The "interpolate" function is deprecated in v9 (use "to" instead)`),yo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){zs(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ts.sort(this),zs(this,{type:"priority",parent:this,priority:e})}},ec=Symbol.for("SpringPhase"),tc=e=>(1&e[ec])>0,rc=e=>(2&e[ec])>0,nc=e=>(4&e[ec])>0,ic=(e,t)=>t?e[ec]|=3:e[ec]&=-3,ac=(e,t)=>t?e[ec]|=4:e[ec]&=-5,oc=class extends Kl{constructor(e,t){if(super(),this.animation=new Ll,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!zo.und(e)||!zo.und(t)){const r=zo.obj(e)?{...e}:{...t,from:e};zo.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(rc(this)||this._state.asyncTo)||nc(this)}get goal(){return Is(this.animation.to)}get velocity(){const e=dl(this);return e instanceof gl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return tc(this)}get isAnimating(){return rc(this)}get isPaused(){return nc(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=fl(n.to);!o&&Cs(n.to)&&(i=Lo(Is(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ml?1:o?o[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=zo.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(zo.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!zo.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*n,d=c));o+=(1e-6*-a.tension*(d-c)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(c-r),o=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=dl(this),l=s.getValue();if(t){const e=Is(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return vo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(rc(this)){const{to:e,config:t}=this.animation;vo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return zo.und(e)?(r=this.queue||[],this.queue=[]):r=[zo.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Vl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ql(this._state,e&&this._lastCallId),vo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=zo.obj(r)?r[t]:r,(null==r||Pl(r))&&(r=void 0),n=zo.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return tc(this)||(e.reverse&&([r,n]=[n,r]),n=Is(n),zo.und(n)?dl(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Al(e,((e,t)=>/^on/.test(t)?Ol(e,r):e))),fc(this,e,"onProps"),pc(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Rl(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{nc(this)||(ac(this,!0),Yo(a.pauseQueue),pc(this,"onPause",Yl(this,sc(this,this.animation.to)),this))},resume:()=>{nc(this)&&(ac(this,!1),rc(this)&&this._resume(),Yo(a.resumeQueue),pc(this,"onResume",Yl(this,sc(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=lc(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ql(this));const n=!zo.und(e.to),i=!zo.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(ql(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!zo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ho(d,c);h&&(s.from=d),d=Is(d);const f=!Ho(u,l);f&&this._focus(u);const p=Pl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Nl(r={...r},t),t={...r,...t}),Nl(e,t),Object.assign(e,t);for(const t in zl)null==e[t]&&(e[t]=zl[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;zo.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,Bl(t.config,a),t.config!==o.config?Bl(o.config,a):void 0);let b=dl(this);if(!b||zo.und(u))return r(Yl(this,!0));const v=zo.und(t.reset)?i&&!t.default:!zo.und(d)&&Dl(t.reset,a),w=v?d:this.get(),$=Il(u),x=zo.num($)||zo.arr($)||nl($),S=!p&&(!x||Dl(o.immediate||t.immediate,a));if(f){const e=$l(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set($)}}const F=b.constructor;let _=Cs(u),B=!1;if(!_){const e=v||!tc(this)&&h;(f||e)&&(B=Ho(Il(w),$),_=!B),(Ho(s.immediate,S)||S)&&Ho(g.decay,m)&&Ho(g.velocity,y)||(_=!0)}if(B&&rc(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!p&&((_||Cs(l))&&(s.values=b.getPayload(),s.toValues=Cs(u)?null:F==ml?[1]:Lo($)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),_)){const{onRest:e}=s;No(hc,(e=>fc(this,t,e)));const n=Yl(this,sc(this,l));Yo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&vo.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?Bl(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set(w),p?r(Ul(t.to,t,this._state,this)):_?this._start():rc(this)&&!f?this._pendingCalls.add(r):r(Wl(w))}_focus(e){const t=this.animation;e!==t.to&&(Ps(this)&&this._detach(),t.to=e,Ps(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Cs(t)&&(Ts(t,this),Xl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Cs(e)&&Ls(e,this)}_set(e,t=!0){const r=Is(e);if(!zo.und(r)){const e=dl(this);if(!e||!Ho(r,e.getValue())){const n=$l(r);e&&e.constructor==n?e.setValue(r):hl(this,n.create(r)),e&&vo.batchedUpdates((()=>{this._onChange(r,t)}))}}return dl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,pc(this,"onStart",Yl(this,sc(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Bl(this.animation.onChange,e,this)),Bl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;dl(this).reset(Is(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),rc(this)||(ic(this,!0),nc(this)||this._resume())}_resume(){yo.skipAnimation?this.finish():ts.start(this)}_stop(e,t){if(rc(this)){ic(this,!1);const r=this.animation;No(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),zs(this,{type:"idle",parent:this});const n=t?ql(this.get()):Yl(this.get(),sc(this,e??r.to));Yo(this._pendingCalls,n),r.changed&&(r.changed=!1,pc(this,"onRest",n,this))}}};function sc(e,t){const r=Il(t);return Ho(Il(e.get()),r)}function lc(e,t=e.loop,r=e.to){const n=Bl(t);if(n){const i=!0!==n&&Cl(n),a=(i||e).reverse,o=!i||i.reset;return cc({...e,loop:t,default:!1,pause:void 0,to:!a||Pl(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function cc(e){const{to:t,from:r}=e=Cl(e),n=new Set;return zo.obj(t)&&dc(t,n),zo.obj(r)&&dc(r,n),e.keys=n.size?Array.from(n):null,e}function uc(e){const t=cc(e);return zo.und(t.default)&&(t.default=Al(t)),t}function dc(e,t){To(e,((e,r)=>null!=e&&t.add(r)))}var hc=["onStart","onRest","onChange","onPause","onResume"];function fc(e,t,r){e.animation[r]=t[r]!==kl(t,r)?Ol(t[r],e.key):void 0}function pc(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var gc=["onStart","onChange","onRest"],mc=1,yc=class{constructor(e,t){this.id=mc++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];zo.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(cc(e)),this}start(e){let{queue:t}=this;return e?t=Lo(e).map(cc):this.queue=[],this._flush?this._flush(this,t):(Fc(this,t),bc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;No(Lo(t),(t=>r[t].stop(!!e)))}else Ql(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(zo.und(e))this.start({pause:!0});else{const t=this.springs;No(Lo(e),(e=>t[e].pause()))}return this}resume(e){if(zo.und(e))this.start({pause:!1});else{const t=this.springs;No(Lo(e),(e=>t[e].resume()))}return this}each(e){To(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ro(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&Ro(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,Ro(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}vo.onFrame(this._onFrame)}};function bc(e,t){return Promise.all(t.map((t=>vc(e,t)))).then((t=>Vl(e,t)))}async function vc(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=zo.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=zo.arr(i)||zo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):No(gc,(r=>{const n=t[r];if(zo.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Yo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===kl(t,"cancel");(u||f&&d.asyncId)&&h.push(Rl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Po,resume:Po,start(t,r){f?(Ql(d,e._lastAsyncId),r(ql(e))):(t.onRest=s,r(Ul(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Vl(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=lc(t,o,i);if(r)return Fc(e,[r]),vc(e,r,!0)}return l&&vo.batchedUpdates((()=>l(p,e,e.item))),p}function wc(e,t){const r={...e.springs};return t&&No(Lo(t),(e=>{zo.und(e.keys)&&(e=cc(e)),zo.obj(e.to)||(e={...e,to:void 0}),Sc(r,e,(e=>xc(e)))})),$c(e,r),r}function $c(e,t){To(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ts(t,e))}))}function xc(e,t){const r=new oc;return r.key=e,t&&Ts(r,t),r}function Sc(e,t,r){t.keys&&No(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Fc(e,t){No(t,(t=>{Sc(e.springs,t,(t=>xc(t,e)))}))}var _c,Bc,Dc=({children:e,...t})=>{const r=h(Oc),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=c((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return o((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Oc;return n.createElement(l,{value:t},e)},Oc=(_c=Dc,Bc={},Object.assign(_c,n.createContext(Bc)),_c.Provider._context=_c,_c.Consumer._context=_c,_c);Dc.Provider=Oc.Provider,Dc.Consumer=Oc.Consumer;var kc=()=>{const e=[],t=function(t){rl(`${Ks}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return No(e,((e,i)=>{if(zo.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return No(e,(e=>e.pause(...arguments))),this},t.resume=function(){return No(e,(e=>e.resume(...arguments))),this},t.set=function(t){No(e,((e,r)=>{const n=zo.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return No(e,((e,n)=>{if(zo.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return No(e,(e=>e.stop(...arguments))),this},t.update=function(t){return No(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return zo.fun(e)?e(r,t):e};return t._getProps=r,t};function Mc(e,t){const r=zo.fun(e),[[n],i]=function(e,t,r){const n=zo.fun(t)&&t;n&&!r&&(r=[]);const i=f((()=>n||3==arguments.length?kc():void 0),[]),o=a(0),s=ol(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const r=wc(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?bc(e,t):new Promise((n=>{$c(e,r),l.queue.push((()=>{n(bc(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=cl(e)||0;function p(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new yc(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=uc(r))}}f((()=>{No(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),r);const g=c.current.map(((e,t)=>wc(e,u[t]))),m=h(Dc),y=cl(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);il((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],No(e,(e=>e()))),No(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),sl((()=>()=>{No(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Ac=class extends Kl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Fs(...t);const r=this._get(),n=$l(r);hl(this,n.create(r))}advance(e){const t=this._get();Ho(t,this.get())||(dl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ec(this._active)&&Cc(this)}_get(){const e=zo.arr(this.source)?this.source.map(Is):Lo(Is(this.source));return this.calc(...e)}_start(){this.idle&&!Ec(this._active)&&(this.idle=!1,No(fl(this),(e=>{e.done=!1})),yo.skipAnimation?(vo.batchedUpdates((()=>this.advance())),Cc(this)):ts.start(this))}_attach(){let e=1;No(Lo(this.source),(t=>{Cs(t)&&Ts(t,this),Xl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){No(Lo(this.source),(e=>{Cs(e)&&Ls(e,this)})),this._active.clear(),Cc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Lo(this.source).reduce(((e,t)=>Math.max(e,(Xl(t)?t.priority:0)+1)),0))}};function jc(e){return!1!==e.idle}function Ec(e){return!e.size||Array.from(e).every(jc)}function Cc(e){e.idle||(e.idle=!0,No(fl(e),(e=>{e.done=!0})),zs(e,{type:"idle",parent:e}))}yo.assign({createStringInterpolator:Js,to:(e,t)=>new Ac(e,t)});var Ic=/^--/;function Pc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ic.test(e)||Hc.hasOwnProperty(e)&&Hc[e]?(""+t).trim():t+"px"}var zc={};var Hc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nc=["Webkit","Ms","Moz","O"];Hc=Object.keys(Hc).reduce(((e,t)=>(Nc.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Hc);var Tc=/^(matrix|translate|scale|rotate|skew)/,Lc=/^(translate)/,Rc=/^(rotate|skew)/,Vc=(e,t)=>zo.num(e)&&0!==e?e+t:e,Wc=(e,t)=>zo.arr(e)?e.every((e=>Wc(e,t))):zo.num(e)?e===t:parseFloat(e)===t,Yc=class extends bl{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Vc(e,"px"))).join(",")})`,Wc(e,0)]))),To(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Tc.test(t)){if(delete n[t],zo.und(e))return;const r=Lc.test(t)?"px":Rc.test(t)?"deg":"";i.push(Lo(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Vc(i,r)})`,Wc(i,0)]:e=>[`${t}(${e.map((e=>Vc(e,r))).join(",")})`,Wc(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new qc(i,a)),super(n)}},qc=class extends Hs{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return No(this.inputs,((r,n)=>{const i=Is(r[0]),[a,o]=this.transforms[n](zo.arr(i)?i:r.map(Is));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&No(this.inputs,(e=>No(e,(e=>Cs(e)&&Ts(e,this)))))}observerRemoved(e){0==e&&No(this.inputs,(e=>No(e,(e=>Cs(e)&&Ls(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),zs(this,e)}};yo.assign({batchedUpdates:v,createStringInterpolator:Js,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Uc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new bl(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=_l(e)||"Anonymous";return(e=zo.str(e)?a[e]||(a[e]=xl(e,i)):e[Fl]||(e[Fl]=xl(e,i))).displayName=`Animated(${t})`,e};return To(e,((t,r)=>{zo.arr(e)&&(r=_l(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:zc[t]||(zc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Pc(t,n[t]);Ic.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Yc(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Qc=Uc.animated;const Zc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Gc=e=>Object.keys(Zc).reduce(((t,r)=>{const n=Zc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Xc=Gc("max-width"),Jc=(Gc("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Kc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,eu=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Gt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Kc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,tu=p(eu)`
    animation-delay: -0.45s;
`,ru=p(eu)`
    animation-delay: -0.3s;
`,nu=p(eu)`
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
                    background-color: ${Gt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Kt.Button.Danger.Border:Gt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Kt.Button.Danger.Primary:Gt.Primary};
                    }
                `;case"light":return g`
                    background-color: ${Gt.Neutral[8]};
                    border: 1px solid ${Gt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Kt.Button.Danger.Primary:Gt.Primary};
                    }
                `;case"disabled":return g`
                    background-color: ${Gt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Gt.Neutral[3]};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Kt.Button.Danger.Primary:Gt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Kt.Button.Danger.Hover:Gt.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?Kt.Button.Danger.BackgroundColor:Gt.Primary};
                    border: 1px solid transparent;

                    ${Xc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Gt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${lr("H5","semibold")}
                    }

                    ${Xc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${lr("H4","semibold")}
                    }

                    ${Xc.mobileS} {
                        height: auto;
                    }
                `}
`;const iu=p((({color:r,className:n,size:i=18})=>e(Jc,Object.assign({className:n,$size:i,$color:r},{children:[t(eu,{id:"inner1",$size:i-2,$borderWidth:2}),t(tu,{id:"inner2",$size:i-2,$borderWidth:2}),t(ru,{id:"inner3",$size:i-2,$borderWidth:2}),t(nu,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Kt.Button.Danger.Primary:Gt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Gt.Neutral[3](e);break;default:t=Gt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,au=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ou=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return g`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${au};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Gt.Neutral[4](e):e.$unchecked?Gt.Accent.Light[2](e):Gt.Primary(e)};
    }
`,su=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,lu=p(Qc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,cu=p.ul`
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
        background: ${Gt.Neutral[4]};
        border-right: 5px solid ${Gt.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Xc.mobileL} {
        max-height: 15rem;
    }
`,uu=p.li`
    :hover,
    :focus,
    :active {
        background: ${Gt.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${Gt.Accent.Light[5]};
            `}}
`,du=p.button`
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
        outline-color: ${Gt.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,hu=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,fu=p.div`
    ${lr("Body","regular")}
    color: ${Gt.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&hu}
`,pu=p.div`
    color: ${Gt.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&hu}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${lr("BodySmall","semibold")}
                `:g`
                    ${lr("Body","regular")}
                `}
`,gu=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${fu} {
                        display: inline;
                    }

                    ${pu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,mu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,yu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,bu=p((r=>{var{className:n,checked:i,disabled:s,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=r,h=D(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=a();o((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!s){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(ou,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:p,$displaySize:d,$disabled:s,$unchecked:!(l||i||s)},{children:[t(su,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:s},h)),l?t($,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):s?t(S,{"data-testid":"disabled-empty-checkbox"}):t(F,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,vu=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,wu=p.button`
    ${lr("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Gt.Primary(e)};\n\t\t`}
`,$u=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,xu=p(ur.Body)``,Su=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Gt.Validation.Red.Icon};
`,Fu=p.button`
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
                background-color: ${Gt.Neutral[7]};
            `}
    }
`,_u=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=D(e,["children","focusHighlight","focusOutline","type"]);return t(Fu,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Bu=p.li`
    background: ${Gt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Du=p(mr)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Ou=p(_)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
`,ku=p(_u)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
    cursor: pointer;
`,Mu=p(b)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Gt.Neutral[3]};
`,Au=u(((r,n)=>{const{onClear:i}=r,a=D(r,["onClear"]);return e(Bu,{children:[t(Ou,{}),t(Du,Object.assign({ref:n},a)),a.value&&t(ku,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Mu,{})}))]},"search")})),ju=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:F="end",itemMaxLines:_=2,labelDisplayType:B="inline",renderListItem:O,onBlur:k,hideNoResultsDisplay:M,renderCustomCallToAction:A}=n,j=D(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,C]=c(0),[I,P]=c(""),[z,H]=c(i),[N,T]=c(0),L=Mc({height:N}),R=a(),V=a(),W=a([]),Y=a(),q=a(),U=a(E),Q=a(z),Z=e=>{U.current=e,C(e)},G=e=>{Q.current=e,H(e)};o((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),o((()=>{ee(I)}),[I]),o((()=>{if(P(""),h){if(setTimeout((()=>{T(te())})),b)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[E]&&W.current[E].focus()}else T(0)}),[h]),o((()=>{if(h){const e=te();T(e)}}),[z,S]),o((()=>{G(i),P(""),Z(0)}),[i]);const X=e=>s?s(e):e.toString(),J=e=>{if("inline"!==B)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Nr.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},K=e=>!!fo(w,(t=>go(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var r;const n=X(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),a="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;P(t),g&&g()},ae=()=>{P(""),Y.current.focus(),g&&g()},oe=()=>{x&&x()},se=()=>{k&&k()},le=n=>e(r,{children:[t(mu,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(yu,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=X(r),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel,o=J(i),s=a&&J(a),l=o||s?"next-line":B;return e(gu,Object.assign({$labelDisplayType:l},{children:[t(fu,Object.assign({$truncateType:F,$maxLines:_,"aria-label":i},{children:"middle"===F&&o?le(i):i})),a&&t(pu,Object.assign({$truncateType:F,$maxLines:_,$labelDisplayType:B,"aria-label":a},{children:"middle"===F&&s?le(a):a}))]}))},ue=()=>{if(!x||x&&"success"===S)return z.map(((r,n)=>t(uu,Object.assign({$checked:K(r)&&!v},{children:e(du,Object.assign({$hasNextLineLabel:"next-line"===B&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(bu,{checked:K(r),displaySize:"small"}),O?O(r,{selected:K(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},de=()=>{if(v&&z.length>0&&!I&&"success"===S)return t(vu,{children:t(wu,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!M&&(I||!f)&&0===z.length&&"success"===S)return e($u,Object.assign({"data-testid":"list-no-results"},{children:[t(Su,{"data-testid":"no-result-icon"}),t(xu,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e($u,Object.assign({"data-testid":"list-loading"},{children:[t(iu,{$buttonStyle:"secondary",size:24}),t(xu,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e($u,Object.assign({"data-testid":"list-fail"},{children:[t(Su,{"data-testid":"load-error-icon"}),t(xu,{children:"Failed to load."}),t(wu,Object.assign({onClick:oe,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(lu,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(cu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},j,{children:[(f||m)&&"success"===S?t(Au,{ref:Y,onChange:ie,value:I,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ae}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:A(y,z)}))})()]}))})},Eu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Cu=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Iu=g`
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
        outline: 2px solid ${Gt.Accent.Light[3]};
    }
`,Pu=p.button`
    ${Iu}
    cursor: pointer;
`;p.div`
    ${Iu}
`;const zu=m`
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
`,Hu=p.div`
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Gt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt.InputBoxShadow};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${zu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${Gt.Neutral[6](e)};

                ${Pu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Pu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${Gt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Gt.Validation.Red.Border(e)};
                    box-shadow: ${Kt.InputErrorBoxShadow};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Eu};
    margin-left: 1rem;
`,p(B)`
    color: ${Gt.Neutral[3]};
    height: ${nr.Body.fontSize}rem;
    width: ${nr.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${Gt.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Nu=p(ur.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Nu)`
    color: ${Gt.Neutral[3]};
`;const Tu=({children:e,show:r,error:n,disabled:i,testId:s,onBlur:l,readOnly:c,className:u})=>{const d=a();return((e,t,r="window",n)=>{const i=a();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;r&&l()}}),"document"),t(Cu,Object.assign({className:u},{children:t(Hu,Object.assign({ref:d,error:n&&!r,disabled:i,$readOnly:c,expanded:r,"data-testid":s},{children:e}))}))},Lu=p.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return g`
                border-bottom: 1px solid ${Gt.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?g`
                border: 0;
                margin: 0;
            `:"right"===e.$position?g`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:g`
                        flex-direction: row;
                    `}
`,Ru=p(Pu)`
    padding: 0;
    width: auto;
`,Vu=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Wu=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Eu};
    margin: 0 0.75rem;
`,Yu=p(B)`
    color: ${Gt.Neutral[3]};
    height: ${nr.Body.fontSize}rem;
    width: ${nr.Body.fontSize}rem;
    vertical-align: bottom;
`,qu=p.div`
    display: flex;
    flex: 1 1 auto;
`,Uu=p(ur.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Qu=p(Uu)`
    color: ${Gt.Neutral[3]};
`,Zu=p.div`
    width: 1px;
    background: ${Gt.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return g`
                display: none;
            `}}

    ${e=>"right"===e.$position?g`
                    margin: 0 0.75rem;
                `:g`
                    margin: 0 0.75rem 0 0;
                `}
`,Gu=i.forwardRef(((n,i)=>{var{addon:s,error:l,onChange:u,readOnly:d,className:h,onBlur:f}=n,p=D(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:y,searchFunction:b,searchPlaceholder:v,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:S,onSelectOption:F,onHideOptions:_,onShowOptions:B,"data-selector-testid":O}=s.attributes,{position:k}=s,[M,A]=c(S),[j,E]=c(!1),C=a();o((()=>{A(S)}),[S]);const I=()=>x?x(M):w?w(M):M.toString(),P=e=>{!e&&_&&_(),e&&B&&B()},z=e=>{e.preventDefault(),p.disabled||(E(!j),P(!j))},H=(e,t)=>{A(e),E(!1),P(!1),C&&C.current.focus(),F&&F(e,t)},N=e=>{u&&u(e)},T=()=>{f&&f()},L=()=>{E(!1),P(!1),C&&C.current.focus()};return e(Tu,Object.assign({className:h,show:j,error:l&&!j,disabled:p.disabled,readOnly:d,onBlur:()=>{E(!1),P(!1),T()}},{children:[e(Lu,Object.assign({$expanded:j,$readOnly:d,$position:k},{children:[d?M?t(Vu,{children:t(Uu,Object.assign({"data-testid":"selector-label"},{children:I()}))}):null:t(Ru,Object.assign({ref:C,type:"button",disabled:p.disabled,"data-testid":O||"addon-selector",onClick:z},{children:e(r,{children:[e(qu,{children:[g&&!M&&t(Qu,{children:g}),M&&t(Uu,Object.assign({"data-testid":"selector-label"},{children:I()}))]}),t(Wu,Object.assign({$expanded:j},{children:t(Yu,{})}))]})})),t(Zu,{$readOnly:d,$position:k}),t(qr,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:N,"data-testid":p["data-testid"]||"input",onBlur:T}))]})),m&&m.length>0?t(ju,{listItems:m,selectedItems:S?[S]:[],onSelectItem:H,valueExtractor:w,listExtractor:$,visible:j,enableSearch:y,searchFunction:b,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:T,onDismiss:L}):null]}))})),Xu=i.forwardRef(((r,n)=>{var{addon:i,error:a,className:o}=r,s=D(r,["addon","error","className"]);const l=()=>t(Yr,Object.assign({disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:t(qr,Object.assign({ref:n},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:r="label",position:c="left"}=i,{allowClear:u}=s;switch(r){case"list":{const e=i.attributes;return e.options&&e.options.length>0?t(Gu,Object.assign({ref:n,addon:i,error:a,className:o},s)):l()}case"custom":{const r=i.attributes;return r.children?e(gr,Object.assign({$error:a,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Ur,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.children})),t(qr,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}default:{const r=i.attributes;return r.value?e(gr,Object.assign({$disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Ur,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.value})),t(qr,Object.assign({ref:n},s,{allowClear:u&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}}}}));export{Xu as InputGroup};
//# sourceMappingURL=index.js.map
