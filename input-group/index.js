import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useImperativeHandle as o,useEffect as s,useLayoutEffect as l,useState as c,forwardRef as u,useCallback as d,useContext as h,useMemo as f}from"react";import p,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{unstable_batchedUpdates as v}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as $,SquareTickFillIcon as x,SquareFillIcon as S,SquareIcon as _}from"@lifesg/react-icons";import{MagnifierIcon as F}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as O}from"@lifesg/react-icons/chevron-down";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B=Array.isArray,j="object"==typeof D&&D&&D.Object===Object&&D,A=j,M="object"==typeof self&&self&&self.Object===Object&&self,E=A||M||Function("return this")(),C=E.Symbol,I=C,z=Object.prototype,P=z.hasOwnProperty,N=z.toString,T=I?I.toStringTag:void 0;var H=function(e){var t=P.call(e,T),n=e[T];try{e[T]=void 0;var r=!0}catch(e){}var i=N.call(e);return r&&(t?e[T]=n:delete e[T]),i},L=Object.prototype.toString;var R=H,V=function(e){return L.call(e)},W=C?C.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?R(e):V(e)};var q=function(e){return null!=e&&"object"==typeof e},U=Y,Q=q;var Z=function(e){return"symbol"==typeof e||Q(e)&&"[object Symbol]"==U(e)},G=B,X=Z,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var ee=function(e,t){if(G(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!X(e))||(K.test(e)||!J.test(e)||null!=t&&e in Object(t))};var te=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ne=Y,re=te;var ie,ae=function(e){if(!re(e))return!1;var t=ne(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},oe=E["__core-js_shared__"],se=(ie=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"";var le=function(e){return!!se&&se in e},ce=Function.prototype.toString;var ue=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},de=ae,he=le,fe=te,pe=ue,ge=/^\[object .+?Constructor\]$/,me=Function.prototype,ye=Object.prototype,be=me.toString,ve=ye.hasOwnProperty,we=RegExp("^"+be.call(ve).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!fe(e)||he(e))&&(de(e)?we:ge).test(pe(e))},xe=function(e,t){return null==e?void 0:e[t]};var Se=function(e,t){var n=xe(e,t);return $e(n)?n:void 0},_e=Se(Object,"create"),Fe=_e;var Oe=function(){this.__data__=Fe?Fe(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=_e,Be=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(De){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Be.call(t,e)?t[e]:void 0},Ae=_e,Me=Object.prototype.hasOwnProperty;var Ee=_e;var Ce=Oe,Ie=ke,ze=je,Pe=function(e){var t=this.__data__;return Ae?void 0!==t[e]:Me.call(t,e)},Ne=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Ce,Te.prototype.delete=Ie,Te.prototype.get=ze,Te.prototype.has=Pe,Te.prototype.set=Ne;var He=Te;var Le=function(){this.__data__=[],this.size=0};var Re=function(e,t){return e===t||e!=e&&t!=t},Ve=Re;var We=function(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1},Ye=We,qe=Array.prototype.splice;var Ue=We;var Qe=We;var Ze=We;var Ge=Le,Xe=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=Se(E,"Map"),it=He,at=nt,ot=rt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},ct=lt;var ut=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},pt=function(e){var t=ct(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ut(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}bt.prototype.clear=ft,bt.prototype.delete=pt,bt.prototype.get=gt,bt.prototype.has=mt,bt.prototype.set=yt;var vt=bt,wt=vt;function $t(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new($t.Cache||wt),n}$t.Cache=wt;var xt=$t;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,Ft=function(e){var t=xt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(_t,"$1"):n||e)})),t}));var Ot=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},kt=B,Dt=Z,Bt=C?C.prototype:void 0,jt=Bt?Bt.toString:void 0;var At=function e(t){if("string"==typeof t)return t;if(kt(t))return Ot(t,e)+"";if(Dt(t))return jt?jt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Mt=At;var Et=B,Ct=ee,It=Ft,zt=function(e){return null==e?"":Mt(e)};var Pt=function(e,t){return Et(e)?e:Ct(e,t)?[e]:It(zt(e))},Nt=Z;var Tt=function(e){if("string"==typeof e||Nt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},Ht=Pt,Lt=Tt;var Rt=function(e,t){for(var n=0,r=(t=Ht(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0},Vt=Rt;var Wt=function(e,t,n){var r=null==e?void 0:Vt(e,t);return void 0===r?n:r};const Yt=(e,t,n)=>t?Wt(n,t)||Wt(e,t):n||e,qt=(e,t)=>{const n=t||e.defaultValue;return Wt(e.collections,n)};var Ut;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ut||(Ut={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Zt=e=>t=>{const n=t.theme,r=qt(Qt,n[Ut.colorScheme]);return n.options&&n.options.color?Yt(r,e,n.options.color):Yt(r,e)},Gt={Brand:{1:Zt("Brand.1"),2:Zt("Brand.2"),3:Zt("Brand.3"),4:Zt("Brand.4"),5:Zt("Brand.5"),6:Zt("Brand.6")},Primary:Zt("Primary"),PrimaryDark:Zt("PrimaryDark"),Secondary:Zt("Secondary"),Accent:{Light:{1:Zt("Accent.Light.1"),2:Zt("Accent.Light.2"),3:Zt("Accent.Light.3"),4:Zt("Accent.Light.4"),5:Zt("Accent.Light.5"),6:Zt("Accent.Light.6")},Dark:{1:Zt("Accent.Dark.1"),2:Zt("Accent.Dark.2"),3:Zt("Accent.Dark.3")}},Neutral:{1:Zt("Neutral.1"),2:Zt("Neutral.2"),3:Zt("Neutral.3"),4:Zt("Neutral.4"),5:Zt("Neutral.5"),6:Zt("Neutral.6"),7:Zt("Neutral.7"),8:Zt("Neutral.8")},Validation:{Green:{Text:Zt("Validation.Green.Text"),Icon:Zt("Validation.Green.Icon"),Border:Zt("Validation.Green.Border"),Background:Zt("Validation.Green.Background")},Orange:{Text:Zt("Validation.Orange.Text"),Icon:Zt("Validation.Orange.Icon"),Border:Zt("Validation.Orange.Border"),Background:Zt("Validation.Orange.Background"),Badge:Zt("Validation.Orange.Badge")},Red:{Text:Zt("Validation.Red.Text"),Icon:Zt("Validation.Red.Icon"),Border:Zt("Validation.Red.Border"),Background:Zt("Validation.Red.Background")},Blue:{Text:Zt("Validation.Blue.Text"),Icon:Zt("Validation.Blue.Icon"),Border:Zt("Validation.Blue.Border"),Background:Zt("Validation.Blue.Background")}},Shadow:{Accent:Zt("Shadow.Accent"),Red:Zt("Shadow.Red"),Elevation:Zt("Shadow.Elevation")}},Xt={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${Gt.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${Gt.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${Gt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Jt=e=>t=>{var n;const r=t.theme,i=qt(Xt,r[Ut.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Yt(i,e,r.options.designToken):Yt(i,e)},Kt=Jt("InputBoxShadow"),en=Jt("InputErrorBoxShadow"),tn=(Jt("ElevationBoxShadow"),Jt("Table.Header"),Jt("Table.Cell.Primary"),Jt("Table.Cell.Secondary"),Jt("Table.Cell.Selected"),Jt("Table.Cell.Hover"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),nn={collections:{base:{D1:{fontFamily:tn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:tn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:tn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:tn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:tn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:tn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:tn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:tn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:tn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:tn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:tn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:tn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rn=e=>t=>{const n=t.theme,r=qt(nn,n[Ut.textStyleScheme]);return n.options&&n.options.textStyle?Yt(r,e,n.options.textStyle):Yt(r,e)},an={D1:{fontFamily:rn("D1.fontFamily"),fontSize:rn("D1.fontSize"),fontWeight:rn("D1.fontWeight"),lineHeight:rn("D1.lineHeight"),letterSpacing:rn("D1.letterSpacing")},D2:{fontFamily:rn("D2.fontFamily"),fontSize:rn("D2.fontSize"),fontWeight:rn("D2.fontWeight"),lineHeight:rn("D2.lineHeight"),letterSpacing:rn("D2.letterSpacing")},D3:{fontFamily:rn("D3.fontFamily"),fontSize:rn("D3.fontSize"),fontWeight:rn("D3.fontWeight"),lineHeight:rn("D3.lineHeight"),letterSpacing:rn("D3.letterSpacing")},D4:{fontFamily:rn("D4.fontFamily"),fontSize:rn("D4.fontSize"),fontWeight:rn("D4.fontWeight"),lineHeight:rn("D4.lineHeight"),letterSpacing:rn("D4.letterSpacing")},DBody:{fontFamily:rn("DBody.fontFamily"),fontSize:rn("DBody.fontSize"),fontWeight:rn("DBody.fontWeight"),lineHeight:rn("DBody.lineHeight"),letterSpacing:rn("DBody.letterSpacing")},H1:{fontFamily:rn("H1.fontFamily"),fontSize:rn("H1.fontSize"),fontWeight:rn("H1.fontWeight"),lineHeight:rn("H1.lineHeight"),letterSpacing:rn("H1.letterSpacing")},H2:{fontFamily:rn("H2.fontFamily"),fontSize:rn("H2.fontSize"),fontWeight:rn("H2.fontWeight"),lineHeight:rn("H2.lineHeight"),letterSpacing:rn("H2.letterSpacing")},H3:{fontFamily:rn("H3.fontFamily"),fontSize:rn("H3.fontSize"),fontWeight:rn("H3.fontWeight"),lineHeight:rn("H3.lineHeight"),letterSpacing:rn("H3.letterSpacing")},H4:{fontFamily:rn("H4.fontFamily"),fontSize:rn("H4.fontSize"),fontWeight:rn("H4.fontWeight"),lineHeight:rn("H4.lineHeight"),letterSpacing:rn("H4.letterSpacing")},H5:{fontFamily:rn("H5.fontFamily"),fontSize:rn("H5.fontSize"),fontWeight:rn("H5.fontWeight"),lineHeight:rn("H5.lineHeight"),letterSpacing:rn("H5.letterSpacing")},H6:{fontFamily:rn("H6.fontFamily"),fontSize:rn("H6.fontSize"),fontWeight:rn("H6.fontWeight"),lineHeight:rn("H6.lineHeight"),letterSpacing:rn("H6.letterSpacing")},Body:{fontFamily:rn("Body.fontFamily"),fontSize:rn("Body.fontSize"),fontWeight:rn("Body.fontWeight"),lineHeight:rn("Body.lineHeight"),letterSpacing:rn("Body.letterSpacing")},BodySmall:{fontFamily:rn("BodySmall.fontFamily"),fontSize:rn("BodySmall.fontSize"),fontWeight:rn("BodySmall.fontWeight"),lineHeight:rn("BodySmall.lineHeight"),letterSpacing:rn("BodySmall.letterSpacing")},XSmall:{fontFamily:rn("XSmall.fontFamily"),fontSize:rn("XSmall.fontSize"),fontWeight:rn("XSmall.fontWeight"),lineHeight:rn("XSmall.lineHeight"),letterSpacing:rn("XSmall.letterSpacing")}},on=e=>{switch(e){case 700:case"bold":return tn.Bold;case 600:case"semibold":return tn.Semibold;case 300:case"light":return tn.Light;case 400:case"regular":return tn.Regular;default:return""}},sn=(e,t)=>n=>{var r;const i=an[e].fontFamily(n),a=an[e].fontWeight(n);return Object.values(tn).includes(i)?g`
                font-family: ${on(t)||on(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(r=ln(t)||a)&&void 0!==r?r:"normal"};
        `},ln=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cn=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},un=(e,t,n=!1)=>r=>{const i=an[e],a=i.fontSize(r);return g`
            ${sn(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},dn=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${cn(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${cn(n)}
        `;var hn;!function(e){e.D1=p.h1`
        ${e=>g`
                ${un("D1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=p.h1`
        ${e=>g`
                ${un("D2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=p.h1`
        ${e=>g`
                ${un("D3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=p.h1`
        ${e=>g`
                ${un("D4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=p.h1`
        ${e=>g`
                ${un("DBody",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=p.h1`
        ${e=>g`
                ${un("H1",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=p.h2`
        ${e=>g`
                ${un("H2",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=p.h3`
        ${e=>g`
                ${un("H3",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=p.h4`
        ${e=>g`
                ${un("H4",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=p.h5`
        ${e=>g`
                ${un("H5",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=p.h6`
        ${e=>g`
                ${un("H6",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=p.p`
        ${e=>g`
                ${un("Body",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=p.p`
        ${e=>g`
                ${un("BodySmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=p.span`
        ${e=>g`
                ${un("XSmall",e.weight,e.paragraph)}
                color: ${Gt.Neutral[1]};
                ${dn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>gn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>gn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(hn||(hn={}));const fn=p.a`
    ${e=>g`
            ${un(e.textStyle,e.weight)}
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
`,pn=p(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,gn=n=>{var{external:r=!1,children:i}=n,a=k(n,["external","children"]);return e(fn,Object.assign({},a,{children:[i,r&&t(pn,{})]}))};var mn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(mn||(mn={}));const yn=p.div`
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
        box-shadow: ${Kt};
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
                    box-shadow: ${en};
                }
            `:void 0}
`,bn=p.input`
    ${un("Body","regular")}
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
`;var vn={exports:{}};vn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,w)):new Date(g,m,p,y,b,v,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var wn,$n,xn=vn.exports,Sn={exports:{}},_n=Sn.exports=(wn={year:0,month:1,day:2,hour:3,minute:4,second:5},$n={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=$n[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$n[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=wn[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Fn={exports:{}};Fn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var $=function(e){return e instanceof F},x=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),n&&(w[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},_=b;_.l=x,_.i=$,_.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,u=_.p(e),f=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return f(r?y-w:y+(6-w),m);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=_.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=_.p(u),g=function(e){var t=S(f);return _.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return _.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:_.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:_.s(o,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=_.p(h),m=S(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=_.m(this,m);return v=(p={},p[d]=v/12,p[c]=v,p[u]=v/3,p[l]=(b-y)/6048e5,p[s]=(b-y)/864e5,p[o]=b/n,p[a]=b/t,p[i]=b/e,p)[g]||b,f?v:_.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=F.prototype;return S.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,F,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[v],S.Ls=w,S.p={},S}();var On=Fn.exports,kn={exports:{}};kn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Dn=kn.exports,Bn={exports:{}};Bn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var jn=Bn.exports,An={exports:{}};An.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Mn,En=An.exports;On.extend(Dn),On.extend(jn),On.extend(En),On.extend(xn),On.extend(_n),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=On(t).startOf("week");return Cn(n).map((e=>In(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return In(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(On(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+On(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=On(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?On(r):void 0,i?On(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Mn||(Mn={}));const Cn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},In=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},zn=[1,3,5,7,8,10,12],Pn=[4,6,9,11];var Nn,Tn,Hn,Ln;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":zn.includes(a)?Math.min(i,31).toString():Pn.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=On(e,n);return On(t,n).diff(r,"minute")},e.toDayjs=e=>e?On(e):On()}(Nn||(Nn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!On(e).isBefore(r,"day"))||!(!i||!On(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(On(e).isValid())return e}return""}}(Tn||(Tn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hn||(Hn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ln||(Ln={}));const Rn=p.input`
    ${un("Body","regular")}
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
`,Vn=p.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Gt.Neutral[3]};
    background-color: transparent;
    border: none;
`,Wn=p(b)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Yn=p.div`
    display: flex;
    width: 100%;
`,qn=i.forwardRef(((r,i)=>{var{value:s,spacing:l,type:c,error:u,disabled:d,readOnly:h,onChange:f,onClear:p,allowClear:g=!1,className:m,styleType:y="bordered"}=r,b=k(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=a();o(i,(()=>v.current),[]);const w=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}({ref:v,formatter:e=>Ln.transformWithSpaces(e,l)}),$=e=>{f&&(S()?_(e):f(e))},x=()=>{p&&p(),v&&v.current&&v.current.focus()},S=()=>"tel"===c&&l,_=e=>{const{nextValue:t,updateCaretPosition:n}=w(),r=t.replace(/\s/g,"");e.target.value=r,f(e),n()},F=s?(e=>e?S()?Ln.transformWithSpaces(e,l):e:"")(s):s,O=()=>e(n,{children:[t(Rn,Object.assign({"data-testid":"input",ref:v,disabled:d,value:F,onChange:$,type:c,readOnly:h},b)),g&&!d&&!h&&!!s&&t(Vn,Object.assign({onClick:x,type:"button"},{children:t(Wn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Yn,Object.assign({className:m},{children:O()})):t(yn,Object.assign({$disabled:d,$error:u,$readOnly:h,className:m},{children:O()}))})})),Un=p.div`
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
        box-shadow: ${Kt};
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
                    box-shadow: ${en};
                }
            `:void 0}
`,Qn=p(qn)`
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
`,Zn=p.div`
    position: relative;
    display: flex;
    align-items: center;

    ${un("Body","regular")}
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
`;var Gn=nt;var Xn=nt,Jn=rt,Kn=vt;var er=nt,tr=function(){this.__data__=new Gn,this.size=0},nr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},rr=function(e){return this.__data__.get(e)},ir=function(e){return this.__data__.has(e)},ar=function(e,t){var n=this.__data__;if(n instanceof Xn){var r=n.__data__;if(!Jn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};function or(e){var t=this.__data__=new er(e);this.size=t.size}or.prototype.clear=tr,or.prototype.delete=nr,or.prototype.get=rr,or.prototype.has=ir,or.prototype.set=ar;var sr=or;var lr=vt,cr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ur=function(e){return this.__data__.has(e)};function dr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new lr;++t<n;)this.add(e[t])}dr.prototype.add=dr.prototype.push=cr,dr.prototype.has=ur;var hr=dr,fr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},pr=function(e,t){return e.has(t)};var gr=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new hr:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=o?r(g,p,d,t,e,a):r(p,g,d,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!fr(t,(function(e,t){if(!pr(f,t)&&(p===e||i(p,e,n,r,a)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var mr=E.Uint8Array,yr=Re,br=gr,vr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},wr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},$r=C?C.prototype:void 0,xr=$r?$r.valueOf:void 0;var Sr=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new mr(e),new mr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return yr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=vr;case"[object Set]":var l=1&r;if(s||(s=wr),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var u=br(s(e),s(t),r,i,a,o);return o.delete(e),u;case"[object Symbol]":if(xr)return xr.call(e)==xr.call(t)}return!1};var _r=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Fr=B;var Or=function(e,t,n){var r=t(e);return Fr(e)?r:_r(r,n(e))};var kr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Dr=function(){return[]},Br=Object.prototype.propertyIsEnumerable,jr=Object.getOwnPropertySymbols,Ar=jr?function(e){return null==e?[]:(e=Object(e),kr(jr(e),(function(t){return Br.call(e,t)})))}:Dr;var Mr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Er=Y,Cr=q;var Ir=function(e){return Cr(e)&&"[object Arguments]"==Er(e)},zr=q,Pr=Object.prototype,Nr=Pr.hasOwnProperty,Tr=Pr.propertyIsEnumerable,Hr=Ir(function(){return arguments}())?Ir:function(e){return zr(e)&&Nr.call(e,"callee")&&!Tr.call(e,"callee")},Lr={exports:{}};var Rr=function(){return!1};!function(e,t){var n=E,r=Rr,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(Lr,Lr.exports);var Vr=/^(?:0|[1-9]\d*)$/;var Wr=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Vr.test(e))&&e>-1&&e%1==0&&e<t};var Yr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},qr=Y,Ur=Yr,Qr=q,Zr={};Zr["[object Float32Array]"]=Zr["[object Float64Array]"]=Zr["[object Int8Array]"]=Zr["[object Int16Array]"]=Zr["[object Int32Array]"]=Zr["[object Uint8Array]"]=Zr["[object Uint8ClampedArray]"]=Zr["[object Uint16Array]"]=Zr["[object Uint32Array]"]=!0,Zr["[object Arguments]"]=Zr["[object Array]"]=Zr["[object ArrayBuffer]"]=Zr["[object Boolean]"]=Zr["[object DataView]"]=Zr["[object Date]"]=Zr["[object Error]"]=Zr["[object Function]"]=Zr["[object Map]"]=Zr["[object Number]"]=Zr["[object Object]"]=Zr["[object RegExp]"]=Zr["[object Set]"]=Zr["[object String]"]=Zr["[object WeakMap]"]=!1;var Gr=function(e){return Qr(e)&&Ur(e.length)&&!!Zr[qr(e)]};var Xr=function(e){return function(t){return e(t)}},Jr={exports:{}};!function(e,t){var n=j,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Jr,Jr.exports);var Kr=Gr,ei=Xr,ti=Jr.exports,ni=ti&&ti.isTypedArray,ri=ni?ei(ni):Kr,ii=Mr,ai=Hr,oi=B,si=Lr.exports,li=Wr,ci=ri,ui=Object.prototype.hasOwnProperty;var di=function(e,t){var n=oi(e),r=!n&&ai(e),i=!n&&!r&&si(e),a=!n&&!r&&!i&&ci(e),o=n||r||i||a,s=o?ii(e.length,String):[],l=s.length;for(var c in e)!t&&!ui.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||li(c,l))||s.push(c);return s},hi=Object.prototype;var fi=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||hi)};var pi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),gi=fi,mi=pi,yi=Object.prototype.hasOwnProperty;var bi=ae,vi=Yr;var wi=function(e){return null!=e&&vi(e.length)&&!bi(e)},$i=di,xi=function(e){if(!gi(e))return mi(e);var t=[];for(var n in Object(e))yi.call(e,n)&&"constructor"!=n&&t.push(n);return t},Si=wi;var _i=function(e){return Si(e)?$i(e):xi(e)},Fi=Or,Oi=Ar,ki=_i;var Di=function(e){return Fi(e,ki,Oi)},Bi=Object.prototype.hasOwnProperty;var ji=function(e,t,n,r,i,a){var o=1&n,s=Di(e),l=s.length;if(l!=Di(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Bi.call(t,u)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var p=o;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=o?r(m,g,u,t,e,a):r(g,m,u,e,t,a);if(!(void 0===y?g===m||i(g,m,n,r,a):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(f=!1)}return a.delete(e),a.delete(t),f},Ai=Se(E,"DataView"),Mi=rt,Ei=Se(E,"Promise"),Ci=Se(E,"Set"),Ii=Se(E,"WeakMap"),zi=Y,Pi=ue,Ni="[object Map]",Ti="[object Promise]",Hi="[object Set]",Li="[object WeakMap]",Ri="[object DataView]",Vi=Pi(Ai),Wi=Pi(Mi),Yi=Pi(Ei),qi=Pi(Ci),Ui=Pi(Ii),Qi=zi;(Ai&&Qi(new Ai(new ArrayBuffer(1)))!=Ri||Mi&&Qi(new Mi)!=Ni||Ei&&Qi(Ei.resolve())!=Ti||Ci&&Qi(new Ci)!=Hi||Ii&&Qi(new Ii)!=Li)&&(Qi=function(e){var t=zi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Pi(n):"";if(r)switch(r){case Vi:return Ri;case Wi:return Ni;case Yi:return Ti;case qi:return Hi;case Ui:return Li}return t});var Zi=sr,Gi=gr,Xi=Sr,Ji=ji,Ki=Qi,ea=B,ta=Lr.exports,na=ri,ra="[object Arguments]",ia="[object Array]",aa="[object Object]",oa=Object.prototype.hasOwnProperty;var sa=function(e,t,n,r,i,a){var o=ea(e),s=ea(t),l=o?ia:Ki(e),c=s?ia:Ki(t),u=(l=l==ra?aa:l)==aa,d=(c=c==ra?aa:c)==aa,h=l==c;if(h&&ta(e)){if(!ta(t))return!1;o=!0,u=!1}if(h&&!u)return a||(a=new Zi),o||na(e)?Gi(e,t,n,r,i,a):Xi(e,t,l,n,r,i,a);if(!(1&n)){var f=u&&oa.call(e,"__wrapped__"),p=d&&oa.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return a||(a=new Zi),i(g,m,n,r,a)}}return!!h&&(a||(a=new Zi),Ji(e,t,n,r,i,a))},la=q;var ca=function e(t,n,r,i,a){return t===n||(null==t||null==n||!la(t)&&!la(n)?t!=t&&n!=n:sa(t,n,r,i,e,a))},ua=sr,da=ca;var ha=te;var fa=function(e){return e==e&&!ha(e)},pa=fa,ga=_i;var ma=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},ya=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new ua;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?da(u,c,3,r,d):h))return!1}}return!0},ba=function(e){for(var t=ga(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,pa(i)]}return t},va=ma;var wa=Pt,$a=Hr,xa=B,Sa=Wr,_a=Yr,Fa=Tt;var Oa=function(e,t){return null!=e&&t in Object(e)},ka=function(e,t,n){for(var r=-1,i=(t=wa(t,e)).length,a=!1;++r<i;){var o=Fa(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&_a(i)&&Sa(o,i)&&(xa(e)||$a(e))};var Da=ca,Ba=Wt,ja=function(e,t){return null!=e&&ka(e,t,Oa)},Aa=ee,Ma=fa,Ea=ma,Ca=Tt;var Ia=Rt;var za=function(e){return function(t){return null==t?void 0:t[e]}},Pa=function(e){return function(t){return Ia(t,e)}},Na=ee,Ta=Tt;var Ha=function(e){var t=ba(e);return 1==t.length&&t[0][2]?va(t[0][0],t[0][1]):function(n){return n===e||ya(n,e,t)}},La=function(e,t){return Aa(e)&&Ma(t)?Ea(Ca(e),t):function(n){var r=Ba(n,e);return void 0===r&&r===t?ja(n,e):Da(t,r,3)}},Ra=function(e){return e},Va=B,Wa=function(e){return Na(e)?za(Ta(e)):Pa(e)};var Ya=function(e){return"function"==typeof e?e:null==e?Ra:"object"==typeof e?Va(e)?La(e[0],e[1]):Ha(e):Wa(e)},qa=Ya,Ua=wi,Qa=_i;var Za=function(e){return function(t,n,r){var i=Object(t);if(!Ua(t)){var a=qa(n);t=Qa(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var Ga=/\s/;var Xa=function(e){for(var t=e.length;t--&&Ga.test(e.charAt(t)););return t},Ja=/^\s+/;var Ka=function(e){return e?e.slice(0,Xa(e)+1).replace(Ja,""):e},eo=te,to=Z,no=/^[-+]0x[0-9a-f]+$/i,ro=/^0b[01]+$/i,io=/^0o[0-7]+$/i,ao=parseInt;var oo=function(e){if("number"==typeof e)return e;if(to(e))return NaN;if(eo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=eo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ka(e);var n=ro.test(e);return n||io.test(e)?ao(e.slice(2),n?2:8):no.test(e)?NaN:+e},so=1/0;var lo=function(e){return e?(e=oo(e))===so||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var co=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},uo=Ya,ho=function(e){var t=lo(e),n=t%1;return t==t?n?t-n:t:0},fo=Math.max;var po=Za((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ho(n);return i<0&&(i=fo(r+i,0)),co(e,uo(t),i)})),go=ca;var mo=function(e,t){return go(e,t)};let yo=Eo();const bo=e=>Bo(e,yo);let vo=Eo();bo.write=e=>Bo(e,vo);let wo=Eo();bo.onStart=e=>Bo(e,wo);let $o=Eo();bo.onFrame=e=>Bo(e,$o);let xo=Eo();bo.onFinish=e=>Bo(e,xo);let So=[];bo.setTimeout=(e,t)=>{let n=bo.now()+t,r=()=>{let e=So.findIndex((e=>e.cancel==r));~e&&So.splice(e,1),ko-=~e?1:0},i={time:n,handler:e,cancel:r};return So.splice(_o(n),0,i),ko+=1,jo(),i};let _o=e=>~(~So.findIndex((t=>t.time>e))||~So.length);bo.cancel=e=>{wo.delete(e),$o.delete(e),xo.delete(e),yo.delete(e),vo.delete(e)},bo.sync=e=>{Do=!0,bo.batchedUpdates(e),Do=!1},bo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,bo.onStart(n)}return r.handler=e,r.cancel=()=>{wo.delete(n),t=null},r};let Fo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};bo.use=e=>Fo=e,bo.now="undefined"!=typeof performance?()=>performance.now():Date.now,bo.batchedUpdates=e=>e(),bo.catch=console.error,bo.frameLoop="always",bo.advance=()=>{"demand"!==bo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Mo()};let Oo=-1,ko=0,Do=!1;function Bo(e,t){Do?(t.delete(e),e(0)):(t.add(e),jo())}function jo(){Oo<0&&(Oo=0,"demand"!==bo.frameLoop&&Fo(Ao))}function Ao(){~Oo&&(Fo(Ao),bo.batchedUpdates(Mo))}function Mo(){let e=Oo;Oo=bo.now();let t=_o(Oo);t&&(Co(So.splice(0,t),(e=>e.handler())),ko-=t),ko?(wo.flush(),yo.flush(e?Math.min(64,Oo-e):16.667),$o.flush(),vo.flush(),xo.flush()):Oo=-1}function Eo(){let e=new Set,t=e;return{add(n){ko+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(ko-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,ko-=t.size,Co(t,(t=>t(n)&&e.add(t))),ko+=e.size,t=e)}}}function Co(e,t){e.forEach((e=>{try{t(e)}catch(e){bo.catch(e)}}))}function Io(){}const zo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Po(e,t){if(zo.arr(e)){if(!zo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const No=(e,t)=>e.forEach(t);function To(e,t,n){if(zo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Ho=e=>zo.und(e)?[]:zo.arr(e)?e:[e];function Lo(e,t){if(e.size){const n=Array.from(e);e.clear(),No(n,t)}}const Ro=(e,...t)=>Lo(e,(e=>e(...t))),Vo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Wo,Yo,qo=null,Uo=!1,Qo=Io;var Zo=Object.freeze({__proto__:null,get createStringInterpolator(){return Wo},get to(){return Yo},get colors(){return qo},get skipAnimation(){return Uo},get willAdvance(){return Qo},assign:e=>{e.to&&(Yo=e.to),e.now&&(bo.now=e.now),void 0!==e.colors&&(qo=e.colors),null!=e.skipAnimation&&(Uo=e.skipAnimation),e.createStringInterpolator&&(Wo=e.createStringInterpolator),e.requestAnimationFrame&&bo.use(e.requestAnimationFrame),e.batchedUpdates&&(bo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Qo=e.willAdvance),e.frameLoop&&(bo.frameLoop=e.frameLoop)}});const Go=new Set;let Xo=[],Jo=[],Ko=0;const es={get idle(){return!Go.size&&!Xo.length},start(e){Ko>e.priority?(Go.add(e),bo.onStart(ts)):(ns(e),bo(is))},advance:is,sort(e){if(Ko)bo.onFrame((()=>es.sort(e)));else{const t=Xo.indexOf(e);~t&&(Xo.splice(t,1),rs(e))}},clear(){Xo=[],Go.clear()}};function ts(){Go.forEach(ns),Go.clear(),bo(is)}function ns(e){Xo.includes(e)||rs(e)}function rs(e){Xo.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Xo,(t=>t.priority>e.priority)),0,e)}function is(e){const t=Jo;for(let n=0;n<Xo.length;n++){const r=Xo[n];Ko=r.priority,r.idle||(Qo(r),r.advance(e),r.idle||t.push(r))}return Ko=0,Jo=Xo,Jo.length=0,Xo=t,Xo.length>0}const as="[-+]?\\d*\\.?\\d+",os=as+"%";function ss(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ls=new RegExp("rgb"+ss(as,as,as)),cs=new RegExp("rgba"+ss(as,as,as,as)),us=new RegExp("hsl"+ss(as,os,os)),ds=new RegExp("hsla"+ss(as,os,os,as)),hs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fs=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ps=/^#([0-9a-fA-F]{6})$/,gs=/^#([0-9a-fA-F]{8})$/;function ms(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ys(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=ms(i,r,e+1/3),o=ms(i,r,e),s=ms(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function bs(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function vs(e){return(parseFloat(e)%360+360)%360/360}function ws(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function $s(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function xs(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ps.exec(e))?parseInt(t[1]+"ff",16)>>>0:qo&&void 0!==qo[e]?qo[e]:(t=ls.exec(e))?(bs(t[1])<<24|bs(t[2])<<16|bs(t[3])<<8|255)>>>0:(t=cs.exec(e))?(bs(t[1])<<24|bs(t[2])<<16|bs(t[3])<<8|ws(t[4]))>>>0:(t=hs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=gs.exec(e))?parseInt(t[1],16)>>>0:(t=fs.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=us.exec(e))?(255|ys(vs(t[1]),$s(t[2]),$s(t[3])))>>>0:(t=ds.exec(e))?(ys(vs(t[1]),$s(t[2]),$s(t[3]))|ws(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ss=(e,t,n)=>{if(zo.fun(e))return e;if(zo.arr(e))return Ss({range:e,output:t,extrapolate:n});if(zo.str(e.output[0]))return Wo(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};const _s=1.70158,Fs=1.525*_s,Os=_s+1,ks=2*Math.PI/3,Ds=2*Math.PI/4.5,Bs=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},js={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Os*e*e*e-_s*e*e,easeOutBack:e=>1+Os*Math.pow(e-1,3)+_s*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Fs)/2:(Math.pow(2*e-2,2)*((Fs+1)*(2*e-2)+Fs)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ks),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ks)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ds)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ds)/2+1,easeInBounce:e=>1-Bs(1-e),easeOutBounce:Bs,easeInOutBounce:e=>e<.5?(1-Bs(1-2*e))/2:(1+Bs(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}};function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(this,arguments)}const Ms=Symbol.for("FluidValue.get"),Es=Symbol.for("FluidValue.observers"),Cs=e=>Boolean(e&&e[Ms]),Is=e=>e&&e[Ms]?e[Ms]():e,zs=e=>e[Es]||null;function Ps(e,t){let n=e[Es];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ns{constructor(e){if(this[Ms]=void 0,this[Es]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ts(this,e)}}const Ts=(e,t)=>Rs(e,Ms,t);function Hs(e,t){if(e[Ms]){let n=e[Es];n||Rs(e,Es,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ls(e,t){let n=e[Es];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Es]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Rs=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Vs=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ws=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ys=new RegExp(`(${Vs.source})(%|[a-z]+)`,"i"),qs=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Us=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Qs=e=>{const[t,n]=Zs(e);if(!t||Vo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Us.test(n)?Qs(n):n||e},Zs=e=>{const t=Us.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Gs;const Xs=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Js=e=>{Gs||(Gs=qo?new RegExp(`(${Object.keys(qo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Is(e).replace(Us,Qs).replace(Ws,xs).replace(Gs,xs))),n=t.map((e=>e.match(Vs).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ss(As({},e,{output:t}))));return e=>{var n;const i=!Ys.test(t[0])&&(null==(n=t.find((e=>Ys.test(e))))?void 0:n.replace(Vs,""));let a=0;return t[0].replace(Vs,(()=>`${r[a++](e)}${i||""}`)).replace(qs,Xs)}},Ks="react-spring: ",el=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ks}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},tl=el(console.warn);const nl=el(console.warn);function rl(e){return zo.str(e)&&("#"==e[0]||/\d/.test(e)||!Vo()&&Us.test(e)||e in(qo||{}))}const il=Vo()?s:l,al=()=>{const e=a(!1);return il((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ol(){const e=c()[1],t=al();return()=>{t.current&&e(Math.random())}}const sl=e=>s(e,ll),ll=[];function cl(e){const t=a();return s((()=>{t.current=e})),t.current}const ul=Symbol.for("Animated:node"),dl=e=>e&&e[ul],hl=(e,t)=>{return n=e,r=ul,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},fl=e=>e&&e[ul]&&e[ul].getPayload();class pl{constructor(){this.payload=void 0,hl(this,this)}getPayload(){return this.payload||[]}}class gl extends pl{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,zo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new gl(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return zo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,zo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ml extends gl{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ss({output:[e,e]})}static create(e){return new ml(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(zo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ss({output:[this.getValue(),e]})),this._value=0,super.reset()}}const yl={dependencies:null};class bl extends pl{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return To(this.source,((n,r)=>{var i;(i=n)&&i[ul]===i?t[r]=n.getValue(e):Cs(n)?t[r]=Is(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&No(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return To(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){yl.dependencies&&Cs(e)&&yl.dependencies.add(e);const t=fl(e);t&&No(t,(e=>this.add(e)))}}class vl extends bl{constructor(e){super(e)}static create(e){return new vl(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(wl)),!0)}}function wl(e){return(rl(e)?ml:gl).create(e)}function $l(e){const t=dl(e);return t?t.constructor:zo.arr(e)?vl:rl(e)?ml:gl}function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}const Sl=(e,t)=>{const n=!zo.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((i,o)=>{const l=a(null),c=n&&d((e=>{l.current=function(e,t){e&&(zo.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,h]=function(e,t){const n=new Set;yl.dependencies=n,e.style&&(e=xl({},e,{style:t.createAnimatedStyle(e.style)}));return e=new bl(e),yl.dependencies=null,[e,n]}(i,t),f=ol(),p=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&f()},g=new _l(p,h),m=a();il((()=>(m.current=g,No(h,(e=>Hs(e,g))),()=>{m.current&&(No(m.current.deps,(e=>Ls(e,m.current))),bo.cancel(m.current.update))}))),s(p,[]),sl((()=>()=>{const e=m.current;No(e.deps,(t=>Ls(t,e)))}));const y=t.getComponentProps(u.getValue());return r.createElement(e,xl({},y,{ref:c}))}))};class _l{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&bo.write(this.update)}}const Fl=Symbol.for("AnimatedComponent"),Ol=e=>zo.str(e)?e:e&&zo.str(e.displayName)?e.displayName:zo.fun(e)&&e.name||null;function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function Dl(e,...t){return zo.fun(e)?e(...t):e}const Bl=(e,t)=>!0===e||!!(t&&e&&(zo.fun(e)?e(t):Ho(e).includes(t))),jl=(e,t)=>zo.obj(e)?t&&e[t]:e,Al=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ml=e=>e,El=(e,t=Ml)=>{let n=Cl;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);zo.und(n)||(r[i]=n)}return r},Cl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Il={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function zl(e){const t=function(e){const t={};let n=0;if(To(e,((e,r)=>{Il[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return To(e,((e,r)=>r in t||(n[r]=e))),n}return kl({},e)}function Pl(e){return e=Is(e),zo.arr(e)?e.map(Pl):rl(e)?Zo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Nl(e){return zo.fun(e)||zo.arr(e)&&zo.obj(e[0])}const Tl=kl({},{tension:170,friction:26},{mass:1,damping:1,easing:js.linear,clamp:!1});class Hl{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Tl)}}function Ll(e,t){if(zo.und(t.decay)){const n=!zo.und(t.tension)||!zo.und(t.friction);!n&&zo.und(t.frequency)&&zo.und(t.damping)&&zo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Rl=[];class Vl{constructor(){this.changed=!1,this.values=Rl,this.toValues=null,this.fromValues=Rl,this.to=void 0,this.from=void 0,this.config=new Hl,this.immediate=!1}}function Wl(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{var l;let c,u,d=Bl(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{zo.und(n.pause)||(i.paused=Bl(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Bl(e,t)),c=Dl(n.delay||0,t),e?(i.resumeQueue.add(f),a.pause()):(a.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-bo.now()}function f(){c>0&&!Zo.skipAnimation?(i.delayed=!0,u=bo.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{a.start(kl({},n,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const Yl=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ql(e.get()):t.every((e=>e.noop))?ql(e.get()):Ul(e.get(),t.every((e=>e.finished))),ql=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ul=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ql=e=>({value:e,cancelled:!0,finished:!1});function Zl(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=El(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Ql(r)||i!==n.asyncId&&Ul(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new Xl,o=new Jl;return(async()=>{if(Zo.skipAnimation)throw Gl(n),o.result=Ul(r,!1),d(o),o;f(a);const s=zo.obj(e)?kl({},e):kl({},t,{to:e});s.parentId=i,To(c,((e,t)=>{zo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Zo.skipAnimation)return Gl(n),Ul(r,!1);try{let t;t=zo.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ul(r.get(),!0,!1)}catch(e){if(e instanceof Xl)g=e.result;else{if(!(e instanceof Jl))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return zo.fun(o)&&bo.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function Gl(e,t){Lo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Xl extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Jl extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Kl=e=>e instanceof tc;let ec=1;class tc extends Ns{constructor(...e){super(...e),this.id=ec++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=dl(this);return e&&e.getValue()}to(...e){return Zo.to(this,e)}interpolate(...e){return tl(`${Ks}The "interpolate" function is deprecated in v9 (use "to" instead)`),Zo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ps(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||es.sort(this),Ps(this,{type:"priority",parent:this,priority:e})}}const nc=Symbol.for("SpringPhase"),rc=e=>(1&e[nc])>0,ic=e=>(2&e[nc])>0,ac=e=>(4&e[nc])>0,oc=(e,t)=>t?e[nc]|=3:e[nc]&=-3,sc=(e,t)=>t?e[nc]|=4:e[nc]&=-5;class lc extends tc{constructor(e,t){if(super(),this.key=void 0,this.animation=new Vl,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!zo.und(e)||!zo.und(t)){const n=zo.obj(e)?kl({},e):kl({},t,{from:e});zo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ic(this)||this._state.asyncTo)||ac(this)}get goal(){return Is(this.animation.to)}get velocity(){const e=dl(this);return e instanceof gl?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return rc(this)}get isAnimating(){return ic(this)}get isPaused(){return ac(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:a}=r;const o=fl(r.to);!o&&Cs(r.to)&&(a=Ho(Is(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ml?1:o?o[l].lastPosition:a[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],a=null!=s.v0?s.v0:s.v0=zo.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(zo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+a/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!zo.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*r,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*m,d+=o*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=dl(this),l=s.getValue();if(t){const e=Is(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return bo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ic(this)){const{to:e,config:t}=this.animation;bo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return zo.und(e)?(n=this.queue||[],this.queue=[]):n=[zo.obj(e)?e:kl({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Yl(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Gl(this._state,e&&this._lastCallId),bo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=zo.obj(n)?n[t]:n,(null==n||Nl(n))&&(n=void 0),r=zo.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return rc(this)||(e.reverse&&([n,r]=[r,n]),r=Is(r),zo.und(r)?dl(this)||this._set(n):this._set(r)),i}_update(e,t){let n=kl({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,El(n,((e,t)=>/^on/.test(t)?jl(e,r):e))),gc(this,n,"onProps"),mc(this,"onProps",n,this);const a=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Wl(++this._lastCallId,{key:r,props:n,defaultProps:i,state:o,actions:{pause:()=>{ac(this)||(sc(this,!0),Ro(o.pauseQueue),mc(this,"onPause",Ul(this,cc(this,this.animation.to)),this))},resume:()=>{ac(this)&&(sc(this,!1),ic(this)&&this._resume(),Ro(o.resumeQueue),mc(this,"onResume",Ul(this,cc(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=uc(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ql(this));const r=!zo.und(e.to),i=!zo.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ql(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!zo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Po(d,c);h&&(s.from=d),d=Is(d);const f=!Po(u,l);f&&this._focus(u);const p=Nl(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ll(n=kl({},n),t),t=kl({},n,t)),Ll(e,t),Object.assign(e,t);for(const t in Tl)null==e[t]&&(e[t]=Tl[t]);let{mass:r,frequency:i,damping:a}=e;zo.und(i)||(i<.01&&(i=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*a*r/i)}(g,Dl(t.config,a),t.config!==o.config?Dl(o.config,a):void 0);let b=dl(this);if(!b||zo.und(u))return n(Ul(this,!0));const v=zo.und(t.reset)?i&&!t.default:!zo.und(d)&&Bl(t.reset,a),w=v?d:this.get(),$=Pl(u),x=zo.num($)||zo.arr($)||rl($),S=!p&&(!x||Bl(o.immediate||t.immediate,a));if(f){const e=$l(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set($)}}const _=b.constructor;let F=Cs(u),O=!1;if(!F){const e=v||!rc(this)&&h;(f||e)&&(O=Po(Pl(w),$),F=!O),(Po(s.immediate,S)||S)&&Po(g.decay,m)&&Po(g.velocity,y)||(F=!0)}if(O&&ic(this)&&(s.changed&&!v?F=!0:F||this._stop(l)),!p&&((F||Cs(l))&&(s.values=b.getPayload(),s.toValues=Cs(u)?null:_==ml?[1]:Ho($)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),F)){const{onRest:e}=s;No(pc,(e=>gc(this,t,e)));const r=Ul(this,cc(this,l));Ro(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&bo.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Dl(o.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),p?n(Zl(t.to,t,this._state,this)):F?this._start():ic(this)&&!f?this._pendingCalls.add(n):n(ql(w))}_focus(e){const t=this.animation;e!==t.to&&(zs(this)&&this._detach(),t.to=e,zs(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Cs(t)&&(Hs(t,this),Kl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Cs(e)&&Ls(e,this)}_set(e,t=!0){const n=Is(e);if(!zo.und(n)){const e=dl(this);if(!e||!Po(n,e.getValue())){const r=$l(n);e&&e.constructor==r?e.setValue(n):hl(this,r.create(n)),e&&bo.batchedUpdates((()=>{this._onChange(n,t)}))}}return dl(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,mc(this,"onStart",Ul(this,cc(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Dl(this.animation.onChange,e,this)),Dl(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;dl(this).reset(Is(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ic(this)||(oc(this,!0),ac(this)||this._resume())}_resume(){Zo.skipAnimation?this.finish():es.start(this)}_stop(e,t){if(ic(this)){oc(this,!1);const n=this.animation;No(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ps(this,{type:"idle",parent:this});const r=t?Ql(this.get()):Ul(this.get(),cc(this,null!=e?e:n.to));Ro(this._pendingCalls,r),n.changed&&(n.changed=!1,mc(this,"onRest",r,this))}}}function cc(e,t){const n=Pl(t);return Po(Pl(e.get()),n)}function uc(e,t=e.loop,n=e.to){let r=Dl(t);if(r){const i=!0!==r&&zl(r),a=(i||e).reverse,o=!i||i.reset;return dc(kl({},e,{loop:t,default:!1,pause:void 0,to:!a||Nl(n)?n:void 0,from:o?e.from:void 0,reset:o},i))}}function dc(e){const{to:t,from:n}=e=zl(e),r=new Set;return zo.obj(t)&&fc(t,r),zo.obj(n)&&fc(n,r),e.keys=r.size?Array.from(r):null,e}function hc(e){const t=dc(e);return zo.und(t.default)&&(t.default=El(t)),t}function fc(e,t){To(e,((e,n)=>null!=e&&t.add(n)))}const pc=["onStart","onRest","onChange","onPause","onResume"];function gc(e,t,n){e.animation[n]=t[n]!==Al(t,n)?jl(t[n],e.key):void 0}function mc(e,t,...n){var r,i,a,o;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(a=(o=e.defaultProps)[t])||a.call(o,...n)}const yc=["onStart","onChange","onRest"];let bc=1;class vc{constructor(e,t){this.id=bc++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(kl({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];zo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(dc(e)),this}start(e){let{queue:t}=this;return e?t=Ho(e).map(dc):this.queue=[],this._flush?this._flush(this,t):(Oc(this,t),wc(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;No(Ho(t),(t=>n[t].stop(!!e)))}else Gl(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(zo.und(e))this.start({pause:!0});else{const t=this.springs;No(Ho(e),(e=>t[e].pause()))}return this}resume(e){if(zo.und(e))this.start({pause:!1});else{const t=this.springs;No(Ho(e),(e=>t[e].resume()))}return this}each(e){To(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Lo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&Lo(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,Lo(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}bo.onFrame(this._onFrame)}}function wc(e,t){return Promise.all(t.map((t=>$c(e,t)))).then((t=>Yl(e,t)))}async function $c(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=zo.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=zo.arr(i)||zo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):No(yc,(n=>{const r=t[n];if(zo.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ro(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Al(t,"cancel");(u||f&&d.asyncId)&&h.push(Wl(++e._lastAsyncId,{props:t,state:d,actions:{pause:Io,resume:Io,start(t,n){f?(Gl(d,e._lastAsyncId),n(Ql(e))):(t.onRest=s,n(Zl(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Yl(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=uc(t,o,i);if(n)return Oc(e,[n]),$c(e,n,!0)}return l&&bo.batchedUpdates((()=>l(p,e,e.item))),p}function xc(e,t){const n=kl({},e.springs);return t&&No(Ho(t),(e=>{zo.und(e.keys)&&(e=dc(e)),zo.obj(e.to)||(e=kl({},e,{to:void 0})),Fc(n,e,(e=>_c(e)))})),Sc(e,n),n}function Sc(e,t){To(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Hs(t,e))}))}function _c(e,t){const n=new lc;return n.key=e,t&&Hs(n,t),n}function Fc(e,t,n){t.keys&&No(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Oc(e,t){No(t,(t=>{Fc(e.springs,t,(t=>_c(t,e)))}))}const kc=["children"],Dc=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,kc);const i=h(Bc),o=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=c((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return s((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:u}=Bc;return r.createElement(u,{value:n},t)},Bc=(jc=Dc,Ac={},Object.assign(jc,r.createContext(Ac)),jc.Provider._context=jc,jc.Consumer._context=jc,jc);var jc,Ac;Dc.Provider=Bc.Provider,Dc.Consumer=Bc.Consumer;const Mc=()=>{const e=[],t=function(t){nl(`${Ks}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return No(e,((e,i)=>{if(zo.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return No(e,(e=>e.pause(...arguments))),this},t.resume=function(){return No(e,(e=>e.resume(...arguments))),this},t.set=function(t){No(e,(e=>e.set(t)))},t.start=function(t){const n=[];return No(e,((e,r)=>{if(zo.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return No(e,(e=>e.stop(...arguments))),this},t.update=function(t){return No(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return zo.fun(e)?e(n,t):e};return t._getProps=n,t};function Ec(e,t){const n=zo.fun(e),[[r],i]=function(e,t,n){const r=zo.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?Mc():void 0),[]),o=a(0),s=ol(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=xc(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?wc(e,t):new Promise((r=>{Sc(e,n),l.queue.push((()=>{r(wc(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=cl(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new vc(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=hc(n))}}f((()=>{No(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(d,e)}),[e]),f((()=>{p(0,Math.min(d,e))}),n);const g=c.current.map(((e,t)=>xc(e,u[t]))),m=h(Dc),y=cl(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);il((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],No(e,(e=>e()))),No(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),sl((()=>()=>{No(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>kl({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Cc;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Cc||(Cc={}));class Ic extends tc{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ss(...t);const n=this._get(),r=$l(n);hl(this,r.create(n))}advance(e){const t=this._get();Po(t,this.get())||(dl(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Pc(this._active)&&Nc(this)}_get(){const e=zo.arr(this.source)?this.source.map(Is):Ho(Is(this.source));return this.calc(...e)}_start(){this.idle&&!Pc(this._active)&&(this.idle=!1,No(fl(this),(e=>{e.done=!1})),Zo.skipAnimation?(bo.batchedUpdates((()=>this.advance())),Nc(this)):es.start(this))}_attach(){let e=1;No(Ho(this.source),(t=>{Cs(t)&&Hs(t,this),Kl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){No(Ho(this.source),(e=>{Cs(e)&&Ls(e,this)})),this._active.clear(),Nc(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ho(this.source).reduce(((e,t)=>Math.max(e,(Kl(t)?t.priority:0)+1)),0))}}function zc(e){return!1!==e.idle}function Pc(e){return!e.size||Array.from(e).every(zc)}function Nc(e){e.idle||(e.idle=!0,No(fl(e),(e=>{e.done=!0})),Ps(e,{type:"idle",parent:e}))}function Tc(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Zo.assign({createStringInterpolator:Js,to:(e,t)=>new Ic(e,t)});const Hc=["style","children","scrollTop","scrollLeft","viewBox"],Lc=/^--/;function Rc(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Lc.test(e)||Wc.hasOwnProperty(e)&&Wc[e]?(""+t).trim():t+"px"}const Vc={};let Wc={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Yc=["Webkit","Ms","Moz","O"];Wc=Object.keys(Wc).reduce(((e,t)=>(Yc.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Wc);const qc=["x","y","z"],Uc=/^(matrix|translate|scale|rotate|skew)/,Qc=/^(translate)/,Zc=/^(rotate|skew)/,Gc=(e,t)=>zo.num(e)&&0!==e?e+t:e,Xc=(e,t)=>zo.arr(e)?e.every((e=>Xc(e,t))):zo.num(e)?e===t:parseFloat(e)===t;class Jc extends bl{constructor(e){let{x:t,y:n,z:r}=e,i=Tc(e,qc);const a=[],o=[];(t||n||r)&&(a.push([t||0,n||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Gc(e,"px"))).join(",")})`,Xc(e,0)]))),To(i,((e,t)=>{if("transform"===t)a.push([e||""]),o.push((e=>[e,""===e]));else if(Uc.test(t)){if(delete i[t],zo.und(e))return;const n=Qc.test(t)?"px":Zc.test(t)?"deg":"";a.push(Ho(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Gc(i,n)})`,Xc(i,0)]:e=>[`${t}(${e.map((e=>Gc(e,n))).join(",")})`,Xc(e,t.startsWith("scale")?1:0)])}})),a.length&&(i.transform=new Kc(a,o)),super(i)}}class Kc extends Ns{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return No(this.inputs,((n,r)=>{const i=Is(n[0]),[a,o]=this.transforms[r](zo.arr(i)?i:n.map(Is));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&No(this.inputs,(e=>No(e,(e=>Cs(e)&&Hs(e,this)))))}observerRemoved(e){0==e&&No(this.inputs,(e=>No(e,(e=>Cs(e)&&Ls(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ps(this,e)}}const eu=["scrollTop","scrollLeft"];Zo.assign({batchedUpdates:v,createStringInterpolator:Js,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const tu=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new bl(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=Ol(e)||"Anonymous";return(e=zo.str(e)?a[e]||(a[e]=Sl(e,i)):e[Fl]||(e[Fl]=Sl(e,i))).displayName=`Animated(${t})`,e};return To(e,((t,n)=>{zo.arr(e)&&(n=Ol(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l}=r,c=Tc(r,Hc),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Vc[t]||(Vc[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(let t in i)if(i.hasOwnProperty(t)){const n=Rc(t,i[t]);Lc.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Jc(e),getComponentProps:e=>Tc(e,eu)}),nu=tu.animated,ru={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},iu=e=>Object.keys(ru).reduce(((t,n)=>{const r=ru[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),au=iu("max-width"),ou=(iu("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),su=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lu=p.div`
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
    animation: ${su} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cu=p(lu)`
    animation-delay: -0.45s;
`,uu=p(lu)`
    animation-delay: -0.3s;
`,du=p(lu)`
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
                    background-color: ${Gt.Neutral[8](e)};
                    border: 1px solid ${Gt.Primary(e)};

                    span {
                        color: ${Gt.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${Gt.Neutral[8](e)};
                    border: 1px solid ${Gt.Neutral[5](e)};

                    span {
                        color: ${Gt.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${Gt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Gt.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Gt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Gt.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${Gt.Primary(e)};
                    border: 1px solid transparent;

                    ${au.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Gt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${un("H5","semibold")}
                    }

                    ${au.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${un("H4","semibold")}
                    }

                    ${au.mobileS} {
                        height: auto;
                    }
                `}
`;const hu=p((({color:n,className:r,size:i=18})=>e(ou,Object.assign({className:r,$size:i,$color:n},{children:[t(lu,{id:"inner1",$size:i-2,$borderWidth:2}),t(cu,{id:"inner2",$size:i-2,$borderWidth:2}),t(uu,{id:"inner3",$size:i-2,$borderWidth:2}),t(du,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Gt.Primary(e);break;case"disabled":t=Gt.Neutral[3](e);break;default:t=Gt.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,fu=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,pu=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${fu};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Gt.Neutral[4](e):e.$unchecked?Gt.Accent.Light[2](e):Gt.Primary(e)};
    }
`,gu=p.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,mu=p(nu.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,yu=p.ul`
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

    ${au.mobileL} {
        max-height: 15rem;
    }
`,bu=p.li`
    :hover,
    :focus,
    :active {
        background: ${Gt.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${Gt.Accent.Light[5]};
            `}}
`,vu=p.button`
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
`,wu=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,$u=p.div`
    ${un("Body","regular")}
    color: ${Gt.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&wu}
`,xu=p.div`
    color: ${Gt.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&wu}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${un("BodySmall","semibold")}
                `:g`
                    ${un("Body","regular")}
                `}
`,Su=p.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${$u} {
                        display: inline;
                    }

                    ${xu} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,_u=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Fu=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Ou=p((n=>{var{className:r,checked:i,disabled:o,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=k(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=a();s((()=>{f.current.indeterminate=l}),[l]);const p=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(pu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:p,$displaySize:d,$disabled:o,$unchecked:!(l||i||o)},{children:[t(gu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:o},h)),l?t($,{"data-testid":"indeterminate"}):i?t(x,{"data-testid":"checkmark"}):o?t(S,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,ku=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Du=p.button`
    ${un("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Gt.Primary(e)};\n\t\t`}
`,Bu=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ju=p(hn.Body)``,Au=p(w)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Gt.Validation.Red.Icon};
`,Mu=p.button`
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
                background-color: ${Gt.Neutral[7]};
            `}
    }
`,Eu=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Mu,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Cu=p.li`
    background: ${Gt.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Iu=p(bn)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,zu=p(F)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
`,Pu=p(Eu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Gt.Neutral[3]};
    cursor: pointer;
`,Nu=p(b)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Gt.Neutral[3]};
`,Tu=u(((n,r)=>{const{onClear:i}=n,a=k(n,["onClear"]);return e(Cu,{children:[t(zu,{}),t(Iu,Object.assign({ref:r},a)),a.value&&t(Pu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(Nu,{})}))]},"search")})),Hu=r=>{var{listItems:i,listExtractor:o,valueExtractor:l,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:$,onRetry:x,itemsLoadState:S="success",itemTruncationType:_="end",itemMaxLines:F=2,labelDisplayType:O="inline",renderListItem:D,onBlur:B,hideNoResultsDisplay:j,renderCustomCallToAction:A}=r,M=k(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[E,C]=c(0),[I,z]=c(""),[P,N]=c(i),[T,H]=c(0),L=Ec({height:T}),R=a(),V=a(),W=a([]),Y=a(),q=a(),U=a(E),Q=a(P),Z=e=>{U.current=e,C(e)},G=e=>{Q.current=e,N(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(I)}),[I]),s((()=>{if(z(""),h){if(setTimeout((()=>{H(te())})),b)return;Y&&Y.current?(Y.current.focus(),Z(-1)):W.current[E]&&W.current[E].focus()}else H(0)}),[h]),s((()=>{if(h){const e=te();H(e)}}),[P,S]),s((()=>{G(i),z(""),Z(0)}),[i]);const X=e=>o?o(e):e.toString(),J=e=>{if("inline"!==O)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Ln.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},K=e=>!!po(w,(t=>mo(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=X(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));G(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(q.current?q.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(U.current<Q.current.length-1){const e=U.current+1;W.current[e].focus(),Z(e)}break;case"ArrowUp":if(U.current>0){const e=U.current-1;W.current[e].focus(),Z(U.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},ae=()=>{z(""),Y.current.focus(),g&&g()},oe=()=>{x&&x()},se=()=>{B&&B()},le=r=>e(n,{children:[t(_u,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r})),t(Fu,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=X(n),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel,o=J(i),s=a&&J(a),l=o||s?"next-line":O;return e(Su,Object.assign({$labelDisplayType:l},{children:[t($u,Object.assign({$truncateType:_,$maxLines:F,"aria-label":i},{children:"middle"===_&&o?le(i):i})),a&&t(xu,Object.assign({$truncateType:_,$maxLines:F,$labelDisplayType:O,"aria-label":a},{children:"middle"===_&&s?le(a):a}))]}))},ue=()=>{if(!x||x&&"success"===S)return P.map(((n,r)=>t(bu,Object.assign({$checked:K(n)&&!v},{children:e(vu,Object.assign({$hasNextLineLabel:"next-line"===O&&P.length>0&&o&&"string"!=typeof o(P[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Ou,{checked:K(n),displaySize:"small"}),D?D(n,{selected:K(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},de=()=>{if(v&&P.length>0&&!I&&"success"===S)return t(ku,{children:t(Du,Object.assign({onClick:$,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(I||!f)&&0===P.length&&"success"===S)return e(Bu,Object.assign({"data-testid":"list-no-results"},{children:[t(Au,{"data-testid":"no-result-icon"}),t(ju,{children:"No results found."})]}),"noResults")},fe=()=>{if(x&&"loading"===S)return e(Bu,Object.assign({"data-testid":"list-loading"},{children:[t(hu,{$buttonStyle:"secondary",size:24}),t(ju,{children:"Loading..."})]}),"loading")},pe=()=>{if(x&&"fail"===S)return e(Bu,Object.assign({"data-testid":"list-fail"},{children:[t(Au,{"data-testid":"load-error-icon"}),t(ju,{children:"Failed to load."}),t(Du,Object.assign({onClick:oe,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(mu,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(yu,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},M,{children:[(f||m)&&"success"===S?t(Tu,{ref:Y,onChange:ie,value:I,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ae}):null,de(),he(),fe(),pe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:q,"data-testid":"custom-cta"},{children:A(y,P)}))})()]}))})},Lu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ru=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Vu=g`
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
`,Wu=p.button`
    ${Vu}
    cursor: pointer;
`;p.div`
    ${Vu}
`;const Yu=m`
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
`,qu=p.div`
    position: relative;
    border: 1px solid ${Gt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Gt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Gt.Accent.Light[1]};
        box-shadow: ${Kt};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Yu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${Gt.Neutral[6](e)};

                ${Wu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Gt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${Wu} {
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
                    box-shadow: ${en};
                }
            `:void 0}
`;p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Lu};
    margin-left: 1rem;
`,p(O)`
    color: ${Gt.Neutral[3]};
    height: ${an.Body.fontSize}rem;
    width: ${an.Body.fontSize}rem;
`,p.div`
    height: 1px;
    background: ${Gt.Neutral[5]};
    margin: 0 0.5rem;
`,p.div`
    display: flex;
    flex: 1;
`;const Uu=p(hn.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;p(Uu)`
    color: ${Gt.Neutral[3]};
`;const Qu=({children:e,show:n,error:r,disabled:i,testId:o,onBlur:l,readOnly:c,className:u})=>{const d=a();return((e,t,n="window",r)=>{const i=a();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&l()}}),"document"),t(Ru,Object.assign({className:u},{children:t(qu,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":o},{children:e}))}))},Zu=p.div`
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
`,Gu=p(Wu)`
    padding: 0;
    width: auto;
`,Xu=p.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Ju=p.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Lu};
    margin: 0 0.75rem;
`,Ku=p(O)`
    color: ${Gt.Neutral[3]};
    height: ${an.Body.fontSize}rem;
    width: ${an.Body.fontSize}rem;
    vertical-align: bottom;
`,ed=p.div`
    display: flex;
    flex: 1 1 auto;
`,td=p(hn.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,nd=p(td)`
    color: ${Gt.Neutral[3]};
`,rd=p.div`
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
`,id=i.forwardRef(((r,i)=>{var{addon:o,error:l,onChange:u,readOnly:d,className:h,onBlur:f}=r,p=k(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:y,searchFunction:b,searchPlaceholder:v,valueExtractor:w,listExtractor:$,displayValueExtractor:x,selectedOption:S,onSelectOption:_,onHideOptions:F,onShowOptions:O,"data-selector-testid":D}=o.attributes,{position:B}=o,[j,A]=c(S),[M,E]=c(!1),C=a();s((()=>{A(S)}),[S]);const I=()=>x?x(j):w?w(j):j.toString(),z=e=>{!e&&F&&F(),e&&O&&O()},P=e=>{e.preventDefault(),p.disabled||(E(!M),z(!M))},N=(e,t)=>{A(e),E(!1),z(!1),C&&C.current.focus(),_&&_(e,t)},T=e=>{u&&u(e)},H=()=>{f&&f()},L=()=>{E(!1),z(!1),C&&C.current.focus()};return e(Qu,Object.assign({className:h,show:M,error:l&&!M,disabled:p.disabled,readOnly:d,onBlur:()=>{E(!1),z(!1),H()}},{children:[e(Zu,Object.assign({$expanded:M,$readOnly:d,$position:B},{children:[d?j?t(Xu,{children:t(td,Object.assign({"data-testid":"selector-label"},{children:I()}))}):null:t(Gu,Object.assign({ref:C,type:"button",disabled:p.disabled,"data-testid":D||"addon-selector",onClick:P},{children:e(n,{children:[e(ed,{children:[g&&!j&&t(nd,{children:g}),j&&t(td,Object.assign({"data-testid":"selector-label"},{children:I()}))]}),t(Ju,Object.assign({$expanded:M},{children:t(Ku,{})}))]})})),t(rd,{$readOnly:d,$position:B}),t(Qn,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:T,"data-testid":p["data-testid"]||"input",onBlur:H}))]})),m&&m.length>0?t(Hu,{listItems:m,selectedItems:S?[S]:[],onSelectItem:N,valueExtractor:w,listExtractor:$,visible:M,enableSearch:y,searchFunction:b,searchPlaceholder:v,"data-testid":"dropdown-list",onBlur:H,onDismiss:L}):null]}))})),ad=i.forwardRef(((n,r)=>{var{addon:i,error:a,className:o}=n,s=k(n,["addon","error","className"]);const l=()=>t(Un,Object.assign({disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:t(Qn,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:u}=s;switch(n){case"list":{const e=i.attributes;return e.options&&e.options.length>0?t(id,Object.assign({ref:r,addon:i,error:a,className:o},s)):l()}case"custom":{const n=i.attributes;return n.children?e(yn,Object.assign({$error:a,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Zn,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),t(Qn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?e(yn,Object.assign({$disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[t(Zn,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),t(Qn,Object.assign({ref:r},s,{allowClear:u&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}}}}));export{ad as InputGroup};
//# sourceMappingURL=index.js.map
