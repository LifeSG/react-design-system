import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{css as a,useTheme as i}from"styled-components";import{ExternalIcon as o}from"@lifesg/react-icons/external";import l from"react";function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;const c={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},g={D1:{fontFamily:c.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:c.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:c.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:c.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:c.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:c.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:c.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:c.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:c.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:c.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:c.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:c.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},d={D1:{fontFamily:c.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:c.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:c.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:c.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:c.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:c.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:c.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:c.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:c.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},u={D1:{fontFamily:c.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:c.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:c.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:c.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:c.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:c.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:c.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:c.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:c.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:c.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:c.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:c.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p=Array.isArray,m="object"==typeof f&&f&&f.Object===Object&&f,F="object"==typeof self&&self&&self.Object===Object&&self,y=m||F||Function("return this")(),S=y.Symbol,B=S,b=Object.prototype,$=b.hasOwnProperty,v=b.toString,D=B?B.toStringTag:void 0;var H=function(t){var e=$.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var a=v.call(t);return r&&(e?t[D]=n:delete t[D]),a},k=Object.prototype.toString;var O=H,E=function(t){return k.call(t)},w=S?S.toStringTag:void 0;var x=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?O(t):E(t)};var _=x,A=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==_(t)},z=p,V=C,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var L=function(t,e){if(z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!V(t))||(W.test(t)||!j.test(t)||null!=e&&t in Object(e))};var M=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=x,P=M;var I,R=function(t){if(!P(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=y["__core-js_shared__"],N=(I=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var G=function(t){return!!N&&N in t},U=Function.prototype.toString;var Y=R,X=G,Z=M,q=function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=/^\[object .+?Constructor\]$/,K=Function.prototype,tt=Object.prototype,et=K.toString,nt=tt.hasOwnProperty,rt=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!Z(t)||X(t))&&(Y(t)?rt:Q).test(q(t))},it=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=it(t,e);return at(n)?n:void 0},lt=ot(Object,"create"),st=lt;var ct=function(){this.__data__=st?st(null):{},this.size=0};var gt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=lt,ut=Object.prototype.hasOwnProperty;var ft=function(t){var e=this.__data__;if(dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ut.call(e,t)?e[t]:void 0},ht=lt,pt=Object.prototype.hasOwnProperty;var mt=lt;var Ft=ct,yt=gt,St=ft,Bt=function(t){var e=this.__data__;return ht?void 0!==e[t]:pt.call(e,t)},bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=Ft,$t.prototype.delete=yt,$t.prototype.get=St,$t.prototype.has=Bt,$t.prototype.set=bt;var vt=$t;var Dt=function(){this.__data__=[],this.size=0};var Ht=function(t,e){return t===e||t!=t&&e!=e};var kt=function(t,e){for(var n=t.length;n--;)if(Ht(t[n][0],e))return n;return-1},Ot=kt,Et=Array.prototype.splice;var wt=kt;var xt=kt;var _t=kt;var At=Dt,Ct=function(t){var e=this.__data__,n=Ot(e,t);return!(n<0)&&(n==e.length-1?e.pop():Et.call(e,n,1),--this.size,!0)},zt=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},Vt=function(t){return xt(this.__data__,t)>-1},jt=function(t,e){var n=this.__data__,r=_t(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=At,Wt.prototype.delete=Ct,Wt.prototype.get=zt,Wt.prototype.has=Vt,Wt.prototype.set=jt;var Lt=Wt,Mt=ot(y,"Map"),Tt=vt,Pt=Lt,It=Mt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Jt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Nt=Jt;var Gt=Jt;var Ut=Jt;var Yt=Jt;var Xt=function(){this.size=0,this.__data__={hash:new Tt,map:new(It||Pt),string:new Tt}},Zt=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},qt=function(t){return Gt(this,t).get(t)},Qt=function(t){return Ut(this,t).has(t)},Kt=function(t,e){var n=Yt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Xt,te.prototype.delete=Zt,te.prototype.get=qt,te.prototype.has=Qt,te.prototype.set=Kt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var re=ne;var ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/\\(\\)?/g,oe=function(t){var e=re(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ae,(function(t,n,r,a){e.push(r?a.replace(ie,"$1"):n||t)})),e}));var le=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},se=p,ce=C,ge=S?S.prototype:void 0,de=ge?ge.toString:void 0;var ue=function t(e){if("string"==typeof e)return e;if(se(e))return le(e,t)+"";if(ce(e))return de?de.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},fe=ue;var he=p,pe=L,me=oe,Fe=function(t){return null==t?"":fe(t)};var ye=C;var Se=function(t,e){return he(t)?t:pe(t,e)?[t]:me(Fe(t))},Be=function(t){if("string"==typeof t||ye(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var be=function(t,e){for(var n=0,r=(e=Se(e,t)).length;null!=t&&n<r;)t=t[Be(e[n++])];return n&&n==r?t:void 0};var $e=h((function(t,e,n){var r=null==t?void 0:be(t,e);return void 0===r?n:r}));const ve=(t,e,n)=>e?$e(n,e)||$e(t,e):n||t,De=(t,e)=>{const n=e||t.defaultValue;return $e(t.collections,n)};var He;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(He||(He={}));const ke={collections:{base:g,oneservice:u,plusJakartaSans:d},defaultValue:"base"},Oe=t=>e=>{const n=e.theme,r=De(ke,n[He.textStyleScheme]);return n.options&&n.options.textStyle?ve(r,t,n.options.textStyle):ve(r,t)},Ee={D1:{fontFamily:Oe("D1.fontFamily"),fontSize:Oe("D1.fontSize"),fontWeight:Oe("D1.fontWeight"),lineHeight:Oe("D1.lineHeight"),letterSpacing:Oe("D1.letterSpacing"),fontVariant:Oe("D1.fontVariant")},D2:{fontFamily:Oe("D2.fontFamily"),fontSize:Oe("D2.fontSize"),fontWeight:Oe("D2.fontWeight"),lineHeight:Oe("D2.lineHeight"),letterSpacing:Oe("D2.letterSpacing"),fontVariant:Oe("D2.fontVariant")},D3:{fontFamily:Oe("D3.fontFamily"),fontSize:Oe("D3.fontSize"),fontWeight:Oe("D3.fontWeight"),lineHeight:Oe("D3.lineHeight"),letterSpacing:Oe("D3.letterSpacing"),fontVariant:Oe("D3.fontVariant")},D4:{fontFamily:Oe("D4.fontFamily"),fontSize:Oe("D4.fontSize"),fontWeight:Oe("D4.fontWeight"),lineHeight:Oe("D4.lineHeight"),letterSpacing:Oe("D4.letterSpacing"),fontVariant:Oe("D4.fontVariant")},DBody:{fontFamily:Oe("DBody.fontFamily"),fontSize:Oe("DBody.fontSize"),fontWeight:Oe("DBody.fontWeight"),lineHeight:Oe("DBody.lineHeight"),letterSpacing:Oe("DBody.letterSpacing"),fontVariant:Oe("DBody.fontVariant")},H1:{fontFamily:Oe("H1.fontFamily"),fontSize:Oe("H1.fontSize"),fontWeight:Oe("H1.fontWeight"),lineHeight:Oe("H1.lineHeight"),letterSpacing:Oe("H1.letterSpacing"),fontVariant:Oe("H1.fontVariant")},H2:{fontFamily:Oe("H2.fontFamily"),fontSize:Oe("H2.fontSize"),fontWeight:Oe("H2.fontWeight"),lineHeight:Oe("H2.lineHeight"),letterSpacing:Oe("H2.letterSpacing"),fontVariant:Oe("H2.fontVariant")},H3:{fontFamily:Oe("H3.fontFamily"),fontSize:Oe("H3.fontSize"),fontWeight:Oe("H3.fontWeight"),lineHeight:Oe("H3.lineHeight"),letterSpacing:Oe("H3.letterSpacing"),fontVariant:Oe("H3.fontVariant")},H4:{fontFamily:Oe("H4.fontFamily"),fontSize:Oe("H4.fontSize"),fontWeight:Oe("H4.fontWeight"),lineHeight:Oe("H4.lineHeight"),letterSpacing:Oe("H4.letterSpacing"),fontVariant:Oe("H4.fontVariant")},H5:{fontFamily:Oe("H5.fontFamily"),fontSize:Oe("H5.fontSize"),fontWeight:Oe("H5.fontWeight"),lineHeight:Oe("H5.lineHeight"),letterSpacing:Oe("H5.letterSpacing"),fontVariant:Oe("H5.fontVariant")},H6:{fontFamily:Oe("H6.fontFamily"),fontSize:Oe("H6.fontSize"),fontWeight:Oe("H6.fontWeight"),lineHeight:Oe("H6.lineHeight"),letterSpacing:Oe("H6.letterSpacing"),fontVariant:Oe("H6.fontVariant")},Body:{fontFamily:Oe("Body.fontFamily"),fontSize:Oe("Body.fontSize"),fontWeight:Oe("Body.fontWeight"),lineHeight:Oe("Body.lineHeight"),letterSpacing:Oe("Body.letterSpacing"),fontVariant:Oe("Body.fontVariant")},BodySmall:{fontFamily:Oe("BodySmall.fontFamily"),fontSize:Oe("BodySmall.fontSize"),fontWeight:Oe("BodySmall.fontWeight"),lineHeight:Oe("BodySmall.lineHeight"),letterSpacing:Oe("BodySmall.letterSpacing"),fontVariant:Oe("BodySmall.fontVariant")},XSmall:{fontFamily:Oe("XSmall.fontFamily"),fontSize:Oe("XSmall.fontSize"),fontWeight:Oe("XSmall.fontWeight"),lineHeight:Oe("XSmall.lineHeight"),letterSpacing:Oe("XSmall.letterSpacing"),fontVariant:Oe("XSmall.fontVariant")}},we=[c.OpenSans,c.PlusJakartaSans],xe=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},_e=(t,e)=>n=>{var r;const i=Ee[t].fontFamily(n),o=Ee[t].fontWeight(n),l=we.find((t=>Object.values(t).includes(i)));return l?a`
                font-family: ${xe(l,e)||xe(l,o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=Ae(e)||o)&&void 0!==r?r:"normal"};
        `},Ae=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ce=t=>{if(t>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},ze=(t,e,n=!1)=>r=>{const i=Ee[t],o=i.fontSize(r);return a`
            ${_e(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ve=(t=!1,e=!1,n=void 0)=>e?a`
            display: block;
            ${Ce(n)}
        `:t?a`
            display: inline;
        `:a`
            display: block;
            ${Ce(n)}
        `,je={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=De(je,n[He.colorScheme]);return n.options&&n.options.color?ve(r,t,n.options.color):ve(r,t)},Le=(We("Brand.1"),We("Brand.2"),We("Brand.3"),We("Brand.4"),We("Brand.5"),We("Brand.6"),We("Primary")),Me=(We("PrimaryDark"),We("Secondary")),Te=(We("Accent.Light.1"),We("Accent.Light.2"),We("Accent.Light.3"),We("Accent.Light.4"),We("Accent.Light.5"),We("Accent.Light.6"),We("Accent.Dark.1"),We("Accent.Dark.2"),We("Accent.Dark.3"),{1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")});We("Validation.Green.Text"),We("Validation.Green.Icon"),We("Validation.Green.Border"),We("Validation.Green.Background"),We("Validation.Orange.Text"),We("Validation.Orange.Icon"),We("Validation.Orange.Border"),We("Validation.Orange.Background"),We("Validation.Orange.Badge"),We("Validation.Red.Text"),We("Validation.Red.Icon"),We("Validation.Red.Border"),We("Validation.Red.Background"),We("Validation.Blue.Text"),We("Validation.Blue.Icon"),We("Validation.Blue.Border"),We("Validation.Blue.Background"),We("Shadow.Accent"),We("Shadow.Red"),We("Shadow.Elevation");var Pe;!function(t){t.D1=r.h1`
        ${t=>a`
                ${ze("D1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>a`
                ${ze("D2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>a`
                ${ze("D3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>a`
                ${ze("D4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>a`
                ${ze("DBody",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>a`
                ${ze("H1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>a`
                ${ze("H2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>a`
                ${ze("H3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>a`
                ${ze("H4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>a`
                ${ze("H5",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>a`
                ${ze("H6",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>a`
                ${ze("Body",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>a`
                ${ze("BodySmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>a`
                ${ze("XSmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${Ve(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Je(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Je(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Pe||(Pe={}));const Ie=r.a`
    ${t=>a`
            ${ze(t.textStyle,t.weight)}
            color: ${Le};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Me};

                svg {
                    color: ${Me};
                }
            }
        `}
`,Re=r(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Je=n=>{var{external:r=!1,children:a}=n,i=s(n,["external","children"]);return t(Ie,Object.assign({},i,{children:[a,r&&e(Re,{})]}))};var Ne;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ne||(Ne={}));const Ge={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ue=t=>Object.keys(Ge).reduce(((e,n)=>{const r=Ge[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ye=Ue("max-width"),Xe=(Ue("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ye.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ze=r(Pe.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,qe=r.div`
    display: flex;
    align-items: flex-start;
`,Qe=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ye.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Ke=()=>t(Xe,Object.assign({"data-testid":"download-app-section"},{children:[e(Ze,Object.assign({weight:"semibold"},{children:"Download the app"})),t(qe,{children:[e(Qe,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(Qe,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var tn={exports:{}},en=h(tn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",g="quarter",d="year",u="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},F=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:F,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,c),i=n-a<0,o=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:s,d:l,D:u,h:o,m:i,s:a,ms:r,Q:g}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",B={};B[S]=m;var b="$isDayjsObject",$=function(t){return t instanceof k||!(!t||!t[b])},v=function t(e,n,r){var a;if(!e)return S;if("string"==typeof e){var i=e.toLowerCase();B[i]&&(a=i),n&&(B[i]=n,a=i);var o=e.split("-");if(!a&&o.length>1)return t(o[0])}else{var l=e.name;B[l]=e,a=l}return!r&&a&&(S=a),a||!r&&S},D=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},H=y;H.l=v,H.i=$,H.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=v(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var F=m.prototype;return F.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},F.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},F.$utils=function(){return H},F.isValid=function(){return!(this.$d.toString()===f)},F.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},F.isAfter=function(t,e){return D(t)<this.startOf(e)},F.isBefore=function(t,e){return this.endOf(e)<D(t)},F.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(t,e){var n=this,r=!!H.u(e)||e,g=H.p(t),f=function(t,e){var a=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(l)},h=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(g){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var S=this.$locale().weekStart||0,B=(p<S?p+7:p)-S;return f(r?F-B:F+(6-B),m);case l:case u:return h(y+"Hours",0);case o:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case a:return h(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(t){return this.startOf(t,!1)},F.$set=function(t,e){var n,s=H.p(t),g="set"+(this.$u?"UTC":""),f=(n={},n[l]=g+"Date",n[u]=g+"Date",n[c]=g+"Month",n[d]=g+"FullYear",n[o]=g+"Hours",n[i]=g+"Minutes",n[a]=g+"Seconds",n[r]=g+"Milliseconds",n)[s],h=s===l?this.$D+(e-this.$W):e;if(s===c||s===d){var p=this.clone().set(u,1);p.$d[f](h),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},F.set=function(t,e){return this.clone().$set(t,e)},F.get=function(t){return this[H.p(t)]()},F.add=function(r,g){var u,f=this;r=Number(r);var h=H.p(g),p=function(t){var e=D(f);return H.w(e.date(e.date()+Math.round(t*r)),f)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===l)return p(1);if(h===s)return p(7);var m=(u={},u[i]=e,u[o]=n,u[a]=t,u)[h]||1,F=this.$d.getTime()+r*m;return H.w(F,this)},F.subtract=function(t,e){return this.add(-1*t,e)},F.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=H.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,g=n.meridiem,d=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},u=function(t){return H.s(i%12||12,t,"0")},h=g||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return H.s(e.$y,4,"0");case"M":return l+1;case"MM":return H.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return e.$D;case"DD":return H.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,s,2);case"ddd":return d(n.weekdaysShort,e.$W,s,3);case"dddd":return s[e.$W];case"H":return String(i);case"HH":return H.s(i,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(i,o,!0);case"A":return h(i,o,!1);case"m":return String(o);case"mm":return H.s(o,2,"0");case"s":return String(e.$s);case"ss":return H.s(e.$s,2,"0");case"SSS":return H.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,u,f){var h,p=this,m=H.p(u),F=D(r),y=(F.utcOffset()-this.utcOffset())*e,S=this-F,B=function(){return H.m(p,F)};switch(m){case d:h=B()/12;break;case c:h=B();break;case g:h=B()/3;break;case s:h=(S-y)/6048e5;break;case l:h=(S-y)/864e5;break;case o:h=S/n;break;case i:h=S/e;break;case a:h=S/t;break;default:h=S}return f?h:H.a(h)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return B[this.$L]},F.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},F.clone=function(){return H.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),O=k.prototype;return D.prototype=O,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",d],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,k,D),t.$i=!0),D},D.locale=v,D.isDayjs=$,D.unix=function(t){return D(1e3*t)},D.en=B[S],D.Ls=B,D.p={},D}());const nn={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},rn={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},an={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var on;!function(t){t.getCopyrightInfo=(t=new Date,n)=>{const r=e(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${en(t).format("D MMMM YYYY")}`};const e=t=>{switch(t){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};t.getFooterLogo=t=>{switch(t){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},t.getDisclaimerLinks=(t,e)=>{const n=(t=>{switch(t){case"bookingsg":return rn;case"mylegacy":return an;default:return nn}})(t);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),e&&e.privacy?e.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),e&&e.termsOfUse?e.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),e&&e.reportVulnerability?e.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(on||(on={}));const ln=r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:l}=t;return a`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Ye.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${Ye.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${l||1};
            }
        `}}
`,sn=l.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:a,desktopCols:i}=t,o=s(t,["mobileCols","tabletCols","desktopCols"]);return e(ln,Object.assign({ref:n},(()=>{const t=a||r,e=r,n=cn(i||a||r),o=cn(t),l=cn(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),cn=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,a=e<=n?n:e;let i;return i=a===r?1:a-r,{start:r,span:i}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},gn=l.forwardRef(((t,n)=>{const{children:r,"data-testid":a="container",type:i="flex",stretch:o=!1}=t,l=s(t,["children","data-testid","type","stretch"]);return e(dn,Object.assign({ref:n,"data-testid":a,$type:i,$stretch:o},l,{children:r}))})),dn=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?a`
                padding: 0 3rem;
            `:a`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Ye.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ye.tablet} {
        max-width: 720px;
    }
    ${Ye.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return a`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ye.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ye.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return a`
                    display: flex;
                    flex-direction: column;
                `;default:return a`
                    display: flex;
                `}}}
`,un=l.forwardRef(((t,n)=>{const{children:r,"data-testid":a="section",stretch:i=!1}=t,o=s(t,["children","data-testid","stretch"]);return e(fn,Object.assign({ref:n,"data-testid":a,$stretch:i},o,{children:r}))})),fn=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?a`
                ${Ye.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:a`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,hn=l.forwardRef(((t,n)=>{const{children:r,"data-testid":a="content",className:i,type:o="flex",stretch:l=!1}=t,c=s(t,["children","data-testid","className","type","stretch"]);return e(un,Object.assign({ref:n,"data-testid":a,className:i,stretch:l},c,{children:e(gn,Object.assign({"data-testid":`${a}-container`,type:o,"data-id":"container",stretch:l},{children:r}))}))})),pn={Section:un,Container:gn,Content:hn,ColDiv:sn},mn=r.footer`
    background: ${Te[7]};
`,Fn=r(Pe.Hyperlink.Small)`
    color: ${Te[1]};
`,yn=r(pn.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Te[5]};

    ${Ye.tablet} {
        padding: 2rem 0;
    }
`,Sn=r.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,Bn=r.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${Ye.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ye.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,bn=r.div`
    grid-column: 9 / span 4;

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,$n=r.div`
    display: none;

    ${Ye.tablet} {
        display: block;
        height: 1px;
        background: ${Te[6]};
    }
`,vn=r(pn.Content)`
    padding: 1.375rem 0;

    ${Ye.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,Dn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,Hn=r(Dn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ye.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,kn=r(Pe.Hyperlink.Small)`
    ${ze("XSmall","regular")}
    color: ${Te[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${Te[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${Te[3]};
        svg {
            color: ${Te[3]};
        }
    }

    ${Ye.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.tablet} {
        margin-bottom: 0.625rem;
    }
`,On=r=>{var{children:a,links:o,lastUpdated:l,disclaimerLinks:c,showDownloadAddon:g,logoSrc:d,copyrightInfo:u,onFooterLinkClick:f,layout:h="default"}=r,p=s(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const m="stretch"===h,F=i(),y=t=>t.map(((t,n)=>{const r=s(t,["data-options"]);return e("li",{children:e(Fn,Object.assign({},r,{onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):f&&(t.preventDefault(),f(e))})(e,t)}))},n)}));return t(mn,Object.assign({},p,{children:[(()=>{let r=null;return a||((o||g)&&(r=t(n,{children:[e(Sn,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:d||on.getFooterLogo(null==F?void 0:F.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==o?void 0:o[0])&&e(Bn,Object.assign({"data-testid":"link-col-1"},{children:y(o[0])}),"link-col-1"),(null==o?void 0:o[1])&&e(Bn,Object.assign({"data-testid":"link-col-2"},{children:y(o[1])}),"link-col-2"),g&&e(bn,{children:e(Ke,{})})]})),r?e(yn,Object.assign({type:"grid",stretch:m},{children:r})):null)})(),e($n,{}),t(vn,Object.assign({type:"grid",stretch:m},{children:[e(Dn,{children:(()=>{const t=on.getDisclaimerLinks(null==F?void 0:F.resourceScheme,c);return Object.keys(t).map((n=>e(kn,Object.assign({},t[n]),n)))})()},"disclaimer"),e(Hn,{children:e(Pe.XSmall,Object.assign({"data-testid":"copyright-text"},{children:u||t(n,{children:["©"," ",on.getCopyrightInfo(l,null==F?void 0:F.resourceScheme)]})}))},"copyright")]}))]}))};export{On as Footer};
//# sourceMappingURL=index.js.map
