import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useState as i,useEffect as a,useMemo as s,useRef as l,isValidElement as c,createRef as u,cloneElement as d,PureComponent as f,useLayoutEffect as h,forwardRef as p}from"react";import g,{css as m,keyframes as v}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as x}from"@lifesg/react-icons/square";import{SquareTickFillIcon as w}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as S}from"@lifesg/react-icons/tick";import{CrossIcon as $}from"@lifesg/react-icons/cross";import{MagnifierIcon as F}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import*as B from"react-dom";import{findDOMNode as E,createPortal as k}from"react-dom";function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const M={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},R={D1:{fontFamily:M.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:M.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:M.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:M.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:M.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:M.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:M.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:M.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:M.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:M.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:M.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:M.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:M.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:M.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},T={D1:{fontFamily:M.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:M.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:M.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:M.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:M.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:M.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:M.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:M.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:M.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},A={D1:{fontFamily:M.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:M.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:M.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:M.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:M.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:M.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:M.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:M.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:M.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:M.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:M.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:M.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:M.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:M.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P=Array.isArray,L="object"==typeof C&&C&&C.Object===Object&&C,z=L,_="object"==typeof self&&self&&self.Object===Object&&self,N=z||_||Function("return this")(),I=N.Symbol,W=I,j=Object.prototype,Y=j.hasOwnProperty,V=j.toString,K=W?W.toStringTag:void 0;var U=function(e){var t=Y.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch(e){}var o=V.call(e);return r&&(t?e[K]=n:delete e[K]),o},J=Object.prototype.toString;var Z=U,X=function(e){return J.call(e)},q=I?I.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?Z(e):X(e)};var Q=function(e){return null!=e&&"object"==typeof e},ee=G,te=Q;var ne=function(e){return"symbol"==typeof e||te(e)&&"[object Symbol]"==ee(e)},re=P,oe=ne,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ae=/^\w*$/;var se=function(e,t){if(re(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!oe(e))||(ae.test(e)||!ie.test(e)||null!=t&&e in Object(t))};var le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ce=G,ue=le;var de,fe=function(e){if(!ue(e))return!1;var t=ce(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},he=N["__core-js_shared__"],pe=(de=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var ge=function(e){return!!pe&&pe in e},me=Function.prototype.toString;var ve=function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=fe,be=ge,xe=le,we=ve,Se=/^\[object .+?Constructor\]$/,$e=Function.prototype,Fe=Object.prototype,De=$e.toString,Be=Fe.hasOwnProperty,Ee=RegExp("^"+De.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!xe(e)||be(e))&&(ye(e)?Ee:Se).test(we(e))},Oe=function(e,t){return null==e?void 0:e[t]};var Me=function(e,t){var n=Oe(e,t);return ke(n)?n:void 0},Re=Me(Object,"create"),Te=Re;var Ae=function(){this.__data__=Te?Te(null):{},this.size=0};var Ce=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=Re,Pe=Object.prototype.hasOwnProperty;var Le=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Pe.call(t,e)?t[e]:void 0},ze=Re,_e=Object.prototype.hasOwnProperty;var Ne=Re;var Ie=Ae,We=Ce,je=Le,Ye=function(e){var t=this.__data__;return ze?void 0!==t[e]:_e.call(t,e)},Ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&void 0===t?"__lodash_hash_undefined__":t,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Ie,Ke.prototype.delete=We,Ke.prototype.get=je,Ke.prototype.has=Ye,Ke.prototype.set=Ve;var Ue=Ke;var Je=function(){this.__data__=[],this.size=0};var Ze=function(e,t){return e===t||e!=e&&t!=t};var Xe=function(e,t){for(var n=e.length;n--;)if(Ze(e[n][0],t))return n;return-1},qe=Xe,Ge=Array.prototype.splice;var Qe=function(e){var t=this.__data__,n=qe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ge.call(t,n,1),--this.size,!0)},et=Xe;var tt=function(e){var t=this.__data__,n=et(t,e);return n<0?void 0:t[n][1]},nt=Xe;var rt=Xe;var ot=function(e,t){var n=this.__data__,r=rt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},it=Je,at=Qe,st=tt,lt=function(e){return nt(this.__data__,e)>-1},ct=ot;function ut(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ut.prototype.clear=it,ut.prototype.delete=at,ut.prototype.get=st,ut.prototype.has=lt,ut.prototype.set=ct;var dt=ut,ft=Me(N,"Map"),ht=Ue,pt=dt,gt=ft;var mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var vt=function(e,t){var n=e.__data__;return mt(t)?n["string"==typeof t?"string":"hash"]:n.map},yt=vt;var bt=vt;var xt=vt;var wt=vt;var St=function(e,t){var n=wt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},$t=function(){this.size=0,this.__data__={hash:new ht,map:new(gt||pt),string:new ht}},Ft=function(e){var t=yt(this,e).delete(e);return this.size-=t?1:0,t},Dt=function(e){return bt(this,e).get(e)},Bt=function(e){return xt(this,e).has(e)},Et=St;function kt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kt.prototype.clear=$t,kt.prototype.delete=Ft,kt.prototype.get=Dt,kt.prototype.has=Bt,kt.prototype.set=Et;var Ot=kt,Mt=Ot;function Rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Rt.Cache||Mt),n}Rt.Cache=Mt;var Tt=Rt;var At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Ht=function(e){var t=Tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(At,(function(e,n,r,o){t.push(r?o.replace(Ct,"$1"):n||e)})),t}));var Pt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Lt=Pt,zt=P,_t=ne,Nt=I?I.prototype:void 0,It=Nt?Nt.toString:void 0;var Wt=function e(t){if("string"==typeof t)return t;if(zt(t))return Lt(t,e)+"";if(_t(t))return It?It.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},jt=Wt;var Yt=P,Vt=se,Kt=Ht,Ut=function(e){return null==e?"":jt(e)};var Jt=ne;var Zt=function(e,t){return Yt(e)?e:Vt(e,t)?[e]:Kt(Ut(e))},Xt=function(e){if("string"==typeof e||Jt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var qt=function(e,t){for(var n=0,r=(t=Zt(t,e)).length;null!=e&&n<r;)e=e[Xt(t[n++])];return n&&n==r?e:void 0},Gt=qt;var Qt=H((function(e,t,n){var r=null==e?void 0:Gt(e,t);return void 0===r?n:r}));const en=(e,t,n)=>t?Qt(n,t)||Qt(e,t):n||e,tn=(e,t)=>{const n=t||e.defaultValue;return Qt(e.collections,n)};var nn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nn||(nn={}));const rn={collections:{base:R,oneservice:A,plusJakartaSans:T},defaultValue:"base"},on=e=>t=>{const n=t.theme,r=tn(rn,n[nn.textStyleScheme]);return n.options&&n.options.textStyle?en(r,e,n.options.textStyle):en(r,e)},an={D1:{fontFamily:on("D1.fontFamily"),fontSize:on("D1.fontSize"),fontWeight:on("D1.fontWeight"),lineHeight:on("D1.lineHeight"),letterSpacing:on("D1.letterSpacing")},D2:{fontFamily:on("D2.fontFamily"),fontSize:on("D2.fontSize"),fontWeight:on("D2.fontWeight"),lineHeight:on("D2.lineHeight"),letterSpacing:on("D2.letterSpacing")},D3:{fontFamily:on("D3.fontFamily"),fontSize:on("D3.fontSize"),fontWeight:on("D3.fontWeight"),lineHeight:on("D3.lineHeight"),letterSpacing:on("D3.letterSpacing")},D4:{fontFamily:on("D4.fontFamily"),fontSize:on("D4.fontSize"),fontWeight:on("D4.fontWeight"),lineHeight:on("D4.lineHeight"),letterSpacing:on("D4.letterSpacing")},DBody:{fontFamily:on("DBody.fontFamily"),fontSize:on("DBody.fontSize"),fontWeight:on("DBody.fontWeight"),lineHeight:on("DBody.lineHeight"),letterSpacing:on("DBody.letterSpacing")},H1:{fontFamily:on("H1.fontFamily"),fontSize:on("H1.fontSize"),fontWeight:on("H1.fontWeight"),lineHeight:on("H1.lineHeight"),letterSpacing:on("H1.letterSpacing")},H2:{fontFamily:on("H2.fontFamily"),fontSize:on("H2.fontSize"),fontWeight:on("H2.fontWeight"),lineHeight:on("H2.lineHeight"),letterSpacing:on("H2.letterSpacing")},H3:{fontFamily:on("H3.fontFamily"),fontSize:on("H3.fontSize"),fontWeight:on("H3.fontWeight"),lineHeight:on("H3.lineHeight"),letterSpacing:on("H3.letterSpacing")},H4:{fontFamily:on("H4.fontFamily"),fontSize:on("H4.fontSize"),fontWeight:on("H4.fontWeight"),lineHeight:on("H4.lineHeight"),letterSpacing:on("H4.letterSpacing")},H5:{fontFamily:on("H5.fontFamily"),fontSize:on("H5.fontSize"),fontWeight:on("H5.fontWeight"),lineHeight:on("H5.lineHeight"),letterSpacing:on("H5.letterSpacing")},H6:{fontFamily:on("H6.fontFamily"),fontSize:on("H6.fontSize"),fontWeight:on("H6.fontWeight"),lineHeight:on("H6.lineHeight"),letterSpacing:on("H6.letterSpacing")},Body:{fontFamily:on("Body.fontFamily"),fontSize:on("Body.fontSize"),fontWeight:on("Body.fontWeight"),lineHeight:on("Body.lineHeight"),letterSpacing:on("Body.letterSpacing")},BodySmall:{fontFamily:on("BodySmall.fontFamily"),fontSize:on("BodySmall.fontSize"),fontWeight:on("BodySmall.fontWeight"),lineHeight:on("BodySmall.lineHeight"),letterSpacing:on("BodySmall.letterSpacing")},XSmall:{fontFamily:on("XSmall.fontFamily"),fontSize:on("XSmall.fontSize"),fontWeight:on("XSmall.fontWeight"),lineHeight:on("XSmall.lineHeight"),letterSpacing:on("XSmall.letterSpacing")}},sn=[M.OpenSans,M.PlusJakartaSans],ln=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},cn=(e,t)=>n=>{var r;const o=an[e].fontFamily(n),i=an[e].fontWeight(n),a=sn.find((e=>Object.values(e).includes(o)));return a?m`
                font-family: ${ln(a,t)||ln(a,i)||o};
                font-weight: normal !important;
            `:m`
            font-family: ${o};
            font-weight: ${null!==(r=un(t)||i)&&void 0!==r?r:"normal"};
        `},un=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},dn=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},fn=(e,t,n=!1)=>r=>{const o=an[e],i=o.fontSize(r);return m`
            ${cn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},hn=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${dn(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${dn(n)}
        `,pn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},gn=e=>t=>{const n=t.theme,r=tn(pn,n[nn.colorScheme]);return n.options&&n.options.color?en(r,e,n.options.color):en(r,e)},mn={Brand:{1:gn("Brand.1"),2:gn("Brand.2"),3:gn("Brand.3"),4:gn("Brand.4"),5:gn("Brand.5"),6:gn("Brand.6")},Primary:gn("Primary"),PrimaryDark:gn("PrimaryDark"),Secondary:gn("Secondary"),Accent:{Light:{1:gn("Accent.Light.1"),2:gn("Accent.Light.2"),3:gn("Accent.Light.3"),4:gn("Accent.Light.4"),5:gn("Accent.Light.5"),6:gn("Accent.Light.6")},Dark:{1:gn("Accent.Dark.1"),2:gn("Accent.Dark.2"),3:gn("Accent.Dark.3")}},Neutral:{1:gn("Neutral.1"),2:gn("Neutral.2"),3:gn("Neutral.3"),4:gn("Neutral.4"),5:gn("Neutral.5"),6:gn("Neutral.6"),7:gn("Neutral.7"),8:gn("Neutral.8")},Validation:{Green:{Text:gn("Validation.Green.Text"),Icon:gn("Validation.Green.Icon"),Border:gn("Validation.Green.Border"),Background:gn("Validation.Green.Background")},Orange:{Text:gn("Validation.Orange.Text"),Icon:gn("Validation.Orange.Icon"),Border:gn("Validation.Orange.Border"),Background:gn("Validation.Orange.Background"),Badge:gn("Validation.Orange.Badge")},Red:{Text:gn("Validation.Red.Text"),Icon:gn("Validation.Red.Icon"),Border:gn("Validation.Red.Border"),Background:gn("Validation.Red.Background")},Blue:{Text:gn("Validation.Blue.Text"),Icon:gn("Validation.Blue.Icon"),Border:gn("Validation.Blue.Border"),Background:gn("Validation.Blue.Background")}},Shadow:{Accent:gn("Shadow.Accent"),Red:gn("Shadow.Red"),Elevation:gn("Shadow.Elevation")}};var vn;!function(e){e.D1=g.h1`
        ${e=>m`
                ${fn("D1",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=g.h1`
        ${e=>m`
                ${fn("D2",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=g.h1`
        ${e=>m`
                ${fn("D3",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=g.h1`
        ${e=>m`
                ${fn("D4",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=g.h1`
        ${e=>m`
                ${fn("DBody",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=g.h1`
        ${e=>m`
                ${fn("H1",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=g.h2`
        ${e=>m`
                ${fn("H2",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=g.h3`
        ${e=>m`
                ${fn("H3",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=g.h4`
        ${e=>m`
                ${fn("H4",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=g.h5`
        ${e=>m`
                ${fn("H5",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=g.h6`
        ${e=>m`
                ${fn("H6",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=g.p`
        ${e=>m`
                ${fn("Body",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=g.p`
        ${e=>m`
                ${fn("BodySmall",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=g.span`
        ${e=>m`
                ${fn("XSmall",e.weight,e.paragraph)}
                color: ${mn.Neutral[1]};
                ${hn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>xn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>xn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(vn||(vn={}));const yn=g.a`
    ${e=>m`
            ${fn(e.textStyle,e.weight)}
            color: ${mn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${mn.Secondary};

                svg {
                    color: ${mn.Secondary};
                }
            }
        `}
`,bn=g(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xn=n=>{var{external:r=!1,children:o}=n,i=O(n,["external","children"]);return e(yn,Object.assign({},i,{children:[o,r&&t(bn,{})]}))};var wn;function Sn(e,t){return Sn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Sn(e,t)}function $n(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Fn(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Dn(e){return null!==e&&1===e.length?e[0]:e.slice()}function Bn(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function En(e,t){return kn(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function kn(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wn||(wn={}));let On=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),o=n.getValueFromPosition(r);n.move(o)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),o=n.getValueFromPosition(r);n.move(o)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Bn(n.getMouseEventMap())}))}$n(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=En(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Bn(n.getKeyDownEventMap()),$n(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Bn(n.getMouseEventMap()),$n(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Bn(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),o={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},i={index:t,value:Dn(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(i)),n.props.renderThumb(o,i)},n.renderTrack=(e,t,r)=>{const o={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},i={index:e,value:Dn(n.state.value)};return n.props.renderTrack(o,i)};let r=Fn(t.value);r.length||(r=Fn(t.defaultValue)),n.pendingResizeTimeouts=[];const i=[];for(let e=0;e<r.length;e+=1)r[e]=En(r[e],t),i.push(e);return n.resizeObserver=null,n.resizeElementRef=o.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:i},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sn(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Fn(e.value);return n.length?t.pending?null:{value:n.map((t=>En(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Dn(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,o=r.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(r[i]),a=Math.abs(e-o);a<t&&(t=a,n=i)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return En(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),o=e[n],i=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=o-s,c=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],o=n[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),o=En(this.calcValue(n),this.props),i=this.state.value.slice();i[r]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=En(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=En(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,o=t[n];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,i&&r>1&&(e>o?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let o=0;o<e;o+=1){const i=r-o*n;t[e-1-o]>i&&(t[e-1-o]=i)}}(r,t,l,a)):e<o&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let o=0;o<e;o+=1){const e=r+o*n;t[o]<e&&(t[o]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,o;for(r=n,o=e[r]+t;null!==e[r+1]&&o>e[r+1];r+=1,o=e[r]+t)e[r+1]=kn(o,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,o=e[r]-t;null!==e[r-1]&&o<e[r-1];r-=1,o=e[r]-t)e[r-1]=kn(o,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Dn(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,i,a)},t}(o.Component);On.displayName="ReactSlider",On.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var Mn=On;const Rn=g.div`
    isolation: isolate;
`,Tn=g.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,An=g.div`
    margin-bottom: 1rem;
`,Cn=g(vn.Body)`
    overflow-wrap: anywhere;
`,Hn=g(Mn)`
    height: 0.875rem;
`,Pn=g.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?m`
                cursor: not-allowed;
            `:e.$readOnly?void 0:m`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${mn.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${mn.Neutral[4]};
        border-radius: 50%;
    }
`,Ln=g.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${Pn}:after {
        border: 1px solid ${mn.Primary};
    }
`,zn=g.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||mn.Neutral[4](e)};
`,_n=g.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Nn=g.div`
    margin: 0 0.5rem;
`,In=g.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Wn=g.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${mn.Neutral[8]};

    ${e=>{let t=mn.Neutral[6];return e.$disabled&&e.$selected?t=mn.Neutral[4]:e.$disabled?t=mn.Neutral[5]:e.$selected&&(t=mn.Accent.Light[1]),m`
            background-color: ${t};
        `}}
`,jn=g((n=>{var{value:r,min:o=0,max:s=100,step:l=1,minRange:c,numOfThumbs:u=2,colors:d,disabled:f,readOnly:h,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:v,showIndicatorLabel:y,indicatorLabelPrefix:b,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:S,onChangeEnd:$}=n,F=O(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,B]=i(k()),E=function(){const e=function(){const e=f||h?mn.Neutral[5]:mn.Neutral[4],t=f||h?mn.Neutral[4]:mn.Primary;if(1===u)return[t,e];const n=[];n.push(e);for(let e=0;e<u-1;e++)n.push(t);return n.push(e),n}();return new Array(u+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();a((()=>{r!==D&&B(k())}),[r]);function k(){if(r&&r.length===u)return r;const e=[];for(let t=0;t<u;t++)e.push(o+l*t);return e}const M=t=>w?w(t):e(Cn,{children:[m,t,v]});return e(Rn,Object.assign({},F,{children:[y&&t(An,{children:(()=>{let t="";if(1===D.length)t=`${D[0]}`;else if(2===D.length)t=`${D[0]} - ${D[1]}`;else if(D.length>2){t=`${Math.min(...D)} - ${Math.max(...D)}`}return e(Cn,{children:[b,t,x]})})()}),t(Hn,{step:l,min:o,max:s,value:D,disabled:f||h,onChange:(e,t)=>{if("number"==typeof e){const t=[e];B(t),null==S||S(t)}else{if(t>-1&&D[t]===e[t])return;B(e),null==S||S(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];B(t),null==$||$(t)}else B(e),null==$||$(e)},minDistance:c,ariaLabel:p,renderThumb:(e,n)=>t(Ln,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:f?void 0:e.tabIndex},{children:t(Pn,{$disabled:f,$readOnly:h})})),renderTrack:(e,n)=>t(zn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:E[n.index]}))}),g&&e(Tn,{children:[t("div",{children:M(o)}),t("div",{children:M(s)})]})]}))}))`
    margin-top: -0.3125rem;
`,Yn=r=>{var{bins:o=[],interval:l,disabled:c,readOnly:u,value:d,showRangeLabels:f,rangeLabelPrefix:h,rangeLabelSuffix:p,onChange:g,onChangeEnd:m,renderEmptyView:v,renderRangeLabel:y}=r,b=O(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const x=o.map((e=>e.count)),w=Math.max(...x),S=o.map((e=>e.minValue)),$=Math.max(...S),F=Math.min(...S),[D,B]=i(R()),E=s((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=($-F)/l+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===F+l*r));t?n.push(t):n.push({count:0,minValue:F+l*r})}return n}),[o,l]);a((()=>{d!==D&&B(R())}),[d]);const k=e=>{B(e),null==g||g(e)},M=e=>{B(e),null==m||m(e)};function R(){return null!=d?d:[F,F+l]}const T=t=>y?y(t):e(vn.Body,{children:[h,t,p]});return e("div",Object.assign({},b,{children:[f&&e(_n,{children:[T(D[0]),t(Nn,{children:"-"}),T(D[1])]}),E.every((e=>0===e.count))&&v?v():e(n,{children:[t(In,{children:E.map(((e,n)=>{const r=e.count/w;return t(Wn,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:e.minValue>=D[0]&&e.minValue<D[1],$disabled:c||u},n)}))}),t(jn,{min:F,max:$+l,step:l,minRange:l,numOfThumbs:2,value:D,disabled:c,readOnly:u,onChange:k,onChangeEnd:M})]})]}))};var Vn=function(e,t){return Vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Vn(e,t)};var Kn=function(){return Kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Kn.apply(this,arguments)};var Un="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Jn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Zn="object"==typeof Un&&Un&&Un.Object===Object&&Un,Xn="object"==typeof self&&self&&self.Object===Object&&self,qn=Zn||Xn||Function("return this")(),Gn=qn,Qn=function(){return Gn.Date.now()},er=/\s/;var tr=function(e){for(var t=e.length;t--&&er.test(e.charAt(t)););return t},nr=tr,rr=/^\s+/;var or=function(e){return e?e.slice(0,nr(e)+1).replace(rr,""):e},ir=qn.Symbol,ar=ir,sr=Object.prototype,lr=sr.hasOwnProperty,cr=sr.toString,ur=ar?ar.toStringTag:void 0;var dr=function(e){var t=lr.call(e,ur),n=e[ur];try{e[ur]=void 0;var r=!0}catch(e){}var o=cr.call(e);return r&&(t?e[ur]=n:delete e[ur]),o},fr=Object.prototype.toString;var hr=dr,pr=function(e){return fr.call(e)},gr=ir?ir.toStringTag:void 0;var mr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":gr&&gr in Object(e)?hr(e):pr(e)},vr=function(e){return null!=e&&"object"==typeof e};var yr=or,br=Jn,xr=function(e){return"symbol"==typeof e||vr(e)&&"[object Symbol]"==mr(e)},wr=/^[-+]0x[0-9a-f]+$/i,Sr=/^0b[01]+$/i,$r=/^0o[0-7]+$/i,Fr=parseInt;var Dr=Jn,Br=Qn,Er=function(e){if("number"==typeof e)return e;if(xr(e))return NaN;if(br(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=br(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=yr(e);var n=Sr.test(e);return n||$r.test(e)?Fr(e.slice(2),n?2:8):wr.test(e)?NaN:+e},kr=Math.max,Or=Math.min;var Mr=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function g(){var e=Br();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Or(n,i-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Br(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Er(t)||0,Dr(n)&&(u=!!n.leading,i=(d="maxWait"in n)?kr(Er(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},v.flush=function(){return void 0===s?a:m(Br())},v},Rr=Mr,Tr=Jn;var Ar=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Tr(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Rr(e,t,{leading:r,maxWait:t,trailing:o})},Cr=function(e,t,n,r){switch(t){case"debounce":return Mr(e,n,r);case"throttle":return Ar(e,n,r);default:return e}},Hr=function(e){return"function"==typeof e},Pr=function(){return"undefined"==typeof window},Lr=function(e){return e instanceof Element||e instanceof HTMLDocument},zr=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Hr(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Pr()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Pr())return null;if(t)return document.querySelector(t);if(r&&Lr(r))return r;if(n.targetRef&&Lr(n.targetRef.current))return n.targetRef.current;var o=E(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=zr(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Pr()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Hr(t)?"renderProp":Hr(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,Pr()||(n.resizeHandler=Cr(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Vn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Pr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=o).map((function(e){return!!e&&d(e,l)}));default:return r.createElement(a,null)}}}(f);var _r,Nr=Pr()?a:h;nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,nn.colorScheme,nn.textStyleScheme,nn.designTokenScheme,nn.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(_r||(_r={}));const Ir=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Wr=g.div`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?mn.Primary:mn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ir}
`,jr=g.div`
    color: ${mn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ir}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${fn("BodySmall","semibold")}
                `:m`
                    ${fn("Body","regular")}
                `}
`;g.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Wr} {
                        display: inline;
                    }

                    ${jr} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,g.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,g.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;var Yr=dt;var Vr=dt,Kr=ft,Ur=Ot;var Jr=dt,Zr=function(){this.__data__=new Yr,this.size=0},Xr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},qr=function(e){return this.__data__.get(e)},Gr=function(e){return this.__data__.has(e)},Qr=function(e,t){var n=this.__data__;if(n instanceof Vr){var r=n.__data__;if(!Kr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ur(r)}return n.set(e,t),this.size=n.size,this};function eo(e){var t=this.__data__=new Jr(e);this.size=t.size}eo.prototype.clear=Zr,eo.prototype.delete=Xr,eo.prototype.get=qr,eo.prototype.has=Gr,eo.prototype.set=Qr;var to=Ot,no=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ro=function(e){return this.__data__.has(e)};function oo(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new to;++t<n;)this.add(e[t])}oo.prototype.add=oo.prototype.push=no,oo.prototype.has=ro,N.Uint8Array;var io=I?I.prototype:void 0;io&&io.valueOf;var ao=G,so=Q;var lo=function(e){return so(e)&&"[object Arguments]"==ao(e)},co=Object.prototype;co.hasOwnProperty,co.propertyIsEnumerable;lo(function(){return arguments}());var uo={exports:{}};var fo=function(){return!1};!function(e,t){var n=N,r=fo,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(uo,uo.exports);var ho={exports:{}};!function(e,t){var n=L,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(ho,ho.exports);var po=ho.exports;po&&po.isTypedArray;var go=Me(N,"DataView"),mo=ft,vo=Me(N,"Promise"),yo=Me(N,"Set"),bo=Me(N,"WeakMap"),xo=G,wo=ve,So="[object Map]",$o="[object Promise]",Fo="[object Set]",Do="[object WeakMap]",Bo="[object DataView]",Eo=wo(go),ko=wo(mo),Oo=wo(vo),Mo=wo(yo),Ro=wo(bo),To=xo;(go&&To(new go(new ArrayBuffer(1)))!=Bo||mo&&To(new mo)!=So||vo&&To(vo.resolve())!=$o||yo&&To(new yo)!=Fo||bo&&To(new bo)!=Do)&&(To=function(e){var t=xo(e),n="[object Object]"==t?e.constructor:void 0,r=n?wo(n):"";if(r)switch(r){case Eo:return Bo;case ko:return So;case Oo:return $o;case Mo:return Fo;case Ro:return Do}return t});const Ao={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Co=e=>Object.keys(Ao).reduce(((t,n)=>{const r=Ao[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ho=Co("max-width"),Po=(Co("min-width"),g.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Lo=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zo=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||mn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Lo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,_o=g(zo)`
    animation-delay: -0.45s;
`,No=g(zo)`
    animation-delay: -0.3s;
`,Io=g(zo)`
    animation-delay: -0.15s;
`,Wo={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${mn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${mn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${mn.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${mn.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${mn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jo=e=>t=>{var n;const r=t.theme,o=tn(Wo,r[nn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?en(o,e,r.options.designToken):en(o,e)},Yo={InputBoxShadow:jo("InputBoxShadow"),InputErrorBoxShadow:jo("InputErrorBoxShadow"),ElevationBoxShadow:jo("ElevationBoxShadow"),Table:{Header:jo("Table.Header"),Cell:{Primary:jo("Table.Cell.Primary"),Secondary:jo("Table.Cell.Secondary"),Selected:jo("Table.Cell.Selected"),Hover:jo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jo("Button.Danger.BackgroundColor"),Hover:jo("Button.Danger.Hover"),Primary:jo("Button.Danger.Primary"),Border:jo("Button.Danger.Border")}}};g.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${mn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Yo.Button.Danger.Border:mn.Primary};

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:mn.Primary};
                `;case"light":return m`
                    background-color: ${mn.Neutral[8]};
                    border: 1px solid ${mn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:mn.Primary};
                `;case"disabled":return m`
                    background-color: ${mn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${mn.Neutral[3]};
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Yo.Button.Danger.Primary:mn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Yo.Button.Danger.Hover:mn.Secondary};
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Yo.Button.Danger.BackgroundColor:mn.Primary};
                    border: 1px solid transparent;

                    ${Ho.mobileL} {
                        width: 100%;
                    }

                    color: ${mn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    ${fn("H5","semibold")}

                    ${Ho.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    ${fn("H4","semibold")}

                    ${Ho.mobileS} {
                        height: auto;
                    }
                `}
`,g((({color:n,className:r,size:o=18})=>e(Po,Object.assign({className:r,$size:o,$color:n},{children:[t(zo,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(_o,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(No,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Io,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Yo.Button.Danger.Primary:mn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=mn.Neutral[3](e);break;default:t=mn.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Vo={exports:{}};Vo.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=s||0,y=l||0,b=c||0,x=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,x+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,x)):new Date(g,m,p,v,y,b,x)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ko,Uo,Jo=H(Vo.exports),Zo={exports:{}};Zo.exports=(Ko={year:0,month:1,day:2,hour:3,minute:4,second:5},Uo={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Uo[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Uo[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ko[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var Xo=H(Zo.exports),qo={exports:{}};qo.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",x={};x[b]=m;var w="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[w])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),n&&(x[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=y;D.l=$,D.i=S,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,x=(g<b?g+7:g)-b;return h(r?v-x:v+(6-x),m);case s:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[D.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=F(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return D.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=D.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,x=function(){return D.m(g,v)};switch(m){case d:p=x()/12;break;case c:p=x();break;case u:p=x()/3;break;case l:p=(b-y)/6048e5;break;case s:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return x[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return F.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=$,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=x[b],F.Ls=x,F.p={},F}();var Go=H(qo.exports),Qo={exports:{}};Qo.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var ei=H(Qo.exports),ti={exports:{}};ti.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ni=H(ti.exports),ri={exports:{}};ri.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var oi,ii=H(ri.exports);Go.extend(ei),Go.extend(ni),Go.extend(ii),Go.extend(Jo),Go.extend(Xo),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Go(t).startOf("week");return ai(n).map((e=>si(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return si(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Go(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Go(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Go(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Go(r):void 0,o?Go(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(oi||(oi={}));const ai=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},si=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},li=[1,3,5,7,8,10,12],ci=[4,6,9,11];var ui,di,fi;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":li.includes(i)?Math.min(o,31).toString():ci.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Go(e,n);return Go(t,n).diff(r,"minute")},e.toDayjs=e=>e?Go(e):Go(),e.addMinutesToTime=(e,t,n="HH:mm")=>Go(e,n).add(t,"minutes").format(n)}(ui||(ui={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Go(e).isBefore(r,"day"))||!(!o||!Go(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Go(e).isValid())return e}return""}}(di||(di={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(fi||(fi={}));const hi=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),pi=({children:e})=>{const[n,r]=i(-1);return t(hi.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},gi=m`
    border: 1px solid ${mn.Accent.Light[1]};
    box-shadow: ${Yo.InputBoxShadow};
`,mi=m`
    border: 1px solid ${mn.Accent.Light[1]};
    box-shadow: none;
`,vi=m`
    border: 1px solid ${mn.Neutral[5]};
    box-shadow: none;
`,yi=m`
    border: 1px solid ${mn.Validation.Red.Border};
    box-shadow: ${Yo.InputErrorBoxShadow};
`,bi=g.div`
    border: 1px solid ${mn.Neutral[5]};
    border-radius: 4px;
    background: ${mn.Neutral[8]};

    :focus-within {
        ${gi}
    }
    ${e=>e.$focused&&gi}

    ${e=>e.$readOnly?m`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${mi}
                }
                ${e.$focused&&mi}
            `:e.$disabled?m`
                background: ${mn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${vi}
                }
                ${e.$focused&&vi}
            `:e.$error?m`
                border: 1px solid ${mn.Validation.Red.Border};

                :focus-within {
                    ${yi}
                }
                ${e.$focused&&yi}
            `:void 0}
`;g(bi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const xi=g.input`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${mn.Neutral[1]};
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
        color: ${mn.Neutral[3]};
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
`,wi=g.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${mn.Primary};
    }
`;g.div`
    overflow: hidden;
    border: 1px solid ${mn.Neutral[5]};
    border-radius: 4px;
    background: ${mn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Ho.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${mn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,g.div`
    background: transparent;
    padding: 0.5rem;
`,g.ul`
    list-style-type: none;
`,g.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${mn.Accent.Light[3]};

    ${e=>e.$active&&m`
            background: ${mn.Accent.Light[5]};
        `}
`,g(S)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${mn.Primary};
`,g.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,g(w)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${mn.Primary};
`,g(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${mn.Accent.Light[2]};
`,g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;const Si=g(wi)`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${mn.Primary};
`;g(Si)`
    outline-offset: 0.25rem;
`,g(Si)`
    padding: 0.5rem 1rem;
`,g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,g.div`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}
`,g(b)`
    ${e=>{const t="small"===e.$variant?1:1.125;return m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${mn.Validation.Red.Icon};
`;const $i=g.button`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${mn.Neutral[7]};
            `}
    }
`,Fi=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=O(e,["children","focusHighlight","focusOutline","type"]);return t($i,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),Di=e=>"small"===e?1:1.125,Bi=e=>m`
        height: ${Di(e)}rem;
        width: ${Di(e)}rem;
    `,Ei=g.div`
    background: ${mn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,ki=g.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Oi=g(xi)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Mi=g(F)`
    color: ${mn.Neutral[3]};
    flex-shrink: 0;
    ${e=>Bi(e.$variant)}
`,Ri=g(Fi)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${mn.Neutral[3]};
    cursor: pointer;

    ${e=>m`
            svg {
                ${Bi(e.$variant)}
            }
        `}
`;p(((n,r)=>{var{value:o,variant:i,onClear:a}=n,s=O(n,["value","variant","onClear"]);return e(Ei,{children:[e(ki,{children:[t(Mi,{$variant:i,"aria-hidden":!0}),t(Oi,Object.assign({ref:r,value:o,$variant:i},s))]}),o&&t(Ri,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t($,{"aria-hidden":!0})}))]})}));const Ti="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ai=g(wi)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Ci=g.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ti};

    svg {
        color: ${mn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?an.BodySmall.fontSize:an.Body.fontSize;return m`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Hi=p((({children:n,disabled:r,expanded:o,listboxId:i,readOnly:a,variant:s},l)=>e(Ai,Object.assign({ref:l,type:"button","aria-expanded":o,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[n,!a&&t(Ci,Object.assign({$expanded:o,$variant:s},{children:t(D,{"aria-hidden":!0})}))]})))),Pi=e=>"small"===e?2.5:3;g.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Pi(e.$variant);return m`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Li=m`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Pi(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${mn.Accent.Light[3]};
    }
`,zi=g.button`
    ${Li}
    cursor: pointer;
`;g.div`
    ${Li}
`;const _i=v`
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
`;g.div`
    position: relative;
    border: 1px solid ${mn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${mn.Neutral[8]};

    :focus-within {
        border: 1px solid ${mn.Accent.Light[1]};
        box-shadow: ${Yo.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${_i} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${mn.Neutral[6](e)};

                ${zi} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${mn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${zi} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${mn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${mn.Validation.Red.Border(e)};
                    box-shadow: ${Yo.InputErrorBoxShadow};
                }
            `:void 0}
`,g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ti};
    margin-left: 1rem;
`,g(D)`
    color: ${mn.Neutral[3]};
    ${e=>{let t=an.Body.fontSize;return"small"===e.$variant&&(t=an.BodySmall.fontSize),m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,g.div`
    height: 1px;
    background: ${mn.Neutral[5]};
    margin: 0 0.5rem;
`;const Ni=g.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Ii=g.div`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function Wi(e){return Vi(e)?(e.nodeName||"").toLowerCase():"#document"}function ji(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Yi(e){var t;return null==(t=(Vi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Vi(e){return e instanceof Node||e instanceof ji(e).Node}function Ki(e){return e instanceof Element||e instanceof ji(e).Element}function Ui(e){return e instanceof HTMLElement||e instanceof ji(e).HTMLElement}function Ji(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ji(e).ShadowRoot)}function Zi(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ea(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Xi(e){return["table","td","th"].includes(Wi(e))}function qi(e){const t=Gi(),n=ea(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Gi(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Qi(e){return["html","body","#document"].includes(Wi(e))}function ea(e){return ji(e).getComputedStyle(e)}function ta(e){return Ki(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function na(e){if("html"===Wi(e))return e;const t=e.assignedSlot||e.parentNode||Ji(e)&&e.host||Yi(e);return Ji(t)?t.host:t}function ra(e){const t=na(e);return Qi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ui(t)&&Zi(t)?t:ra(t)}function oa(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=ra(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=ji(o);return i?t.concat(a,a.visualViewport||[],Zi(o)?o:[],a.frameElement&&n?oa(a.frameElement):[]):t.concat(o,oa(o,[],n))}function ia(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function aa(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Ji(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function sa(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function la(e){return!sa().includes("jsdom/")&&(!ca()&&0===e.width&&0===e.height||ca()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function ca(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(sa())}function ua(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function da(e){return(null==e?void 0:e.ownerDocument)||document}function fa(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function ha(e){return"composedPath"in e?e.composedPath()[0]:e.target}g(Ii)`
    color: ${mn.Neutral[3]};
`;const pa="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function ga(e){return Ui(e)&&e.matches(pa)}function ma(e){e.preventDefault(),e.stopPropagation()}const va=Math.min,ya=Math.max,ba=Math.round,xa=Math.floor,wa=e=>({x:e,y:e}),Sa={left:"right",right:"left",bottom:"top",top:"bottom"},$a={start:"end",end:"start"};function Fa(e,t,n){return ya(e,va(t,n))}function Da(e,t){return"function"==typeof e?e(t):e}function Ba(e){return e.split("-")[0]}function Ea(e){return e.split("-")[1]}function ka(e){return"x"===e?"y":"x"}function Oa(e){return"y"===e?"height":"width"}function Ma(e){return["top","bottom"].includes(Ba(e))?"y":"x"}function Ra(e){return ka(Ma(e))}function Ta(e){return e.replace(/start|end/g,(e=>$a[e]))}function Aa(e){return e.replace(/left|right|bottom|top/g,(e=>Sa[e]))}function Ca(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Ha(e,t,n){let{reference:r,floating:o}=e;const i=Ma(t),a=Ra(t),s=Oa(a),l=Ba(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let h;switch(l){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Ea(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function Pa(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Da(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=s[f?"floating"===d?"reference":"floating":d],m=Ca(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},x=Ca(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:y,strategy:l}):v);return{top:(m.top-x.top+p.top)/b.y,bottom:(x.bottom-m.bottom+p.bottom)/b.y,left:(m.left-x.left+p.left)/b.x,right:(x.right-m.right+p.right)/b.x}}function La(e){const t=ea(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Ui(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=ba(n)!==i||ba(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function za(e){return Ki(e)?e:e.contextElement}function _a(e){const t=za(e);if(!Ui(t))return wa(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=La(t);let a=(i?ba(n.width):n.width)/r,s=(i?ba(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const Na=wa(0);function Ia(e){const t=ji(e);return Gi()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Na}function Wa(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=za(e);let a=wa(1);t&&(r?Ki(r)&&(a=_a(r)):a=_a(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==ji(e))&&t}(i,n,r)?Ia(i):wa(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=ji(i),t=r&&Ki(r)?ji(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=_a(o),t=o.getBoundingClientRect(),r=ea(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=ji(o),o=n.frameElement}}return Ca({width:u,height:d,x:l,y:c})}const ja=[":popover-open",":modal"];function Ya(e){return ja.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Va(e){return Wa(Yi(e)).left+ta(e).scrollLeft}function Ka(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=ji(e),r=Yi(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Gi();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Yi(e),n=ta(e),r=e.ownerDocument.body,o=ya(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ya(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Va(e);const s=-n.scrollTop;return"rtl"===ea(r).direction&&(a+=ya(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Yi(e));else if(Ki(t))r=function(e,t){const n=Wa(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Ui(e)?_a(e):wa(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Ia(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return Ca(r)}function Ua(e,t){const n=na(e);return!(n===t||!Ki(n)||Qi(n))&&("fixed"===ea(n).position||Ua(n,t))}function Ja(e,t,n){const r=Ui(t),o=Yi(t),i="fixed"===n,a=Wa(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=wa(0);if(r||!r&&!i)if(("body"!==Wi(t)||Zi(o))&&(s=ta(t)),r){const e=Wa(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=Va(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Za(e){return"static"===ea(e).position}function Xa(e,t){return Ui(e)&&"fixed"!==ea(e).position?t?t(e):e.offsetParent:null}function qa(e,t){const n=ji(e);if(Ya(e))return n;if(!Ui(e)){let t=na(e);for(;t&&!Qi(t);){if(Ki(t)&&!Za(t))return t;t=na(t)}return n}let r=Xa(e,t);for(;r&&Xi(r)&&Za(r);)r=Xa(r,t);return r&&Qi(r)&&Za(r)&&!qi(r)?n:r||function(e){let t=na(e);for(;Ui(t)&&!Qi(t);){if(qi(t))return t;t=na(t)}return null}(e)||n}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Yi(r),s=!!t&&Ya(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=wa(1);const u=wa(0),d=Ui(r);if((d||!d&&!i)&&(("body"!==Wi(r)||Zi(a))&&(l=ta(r)),Ui(r))){const e=Wa(r);c=_a(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:Yi,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Ya(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=oa(e,[],!1).filter((e=>Ki(e)&&"body"!==Wi(e))),o=null;const i="fixed"===ea(e).position;let a=i?na(e):e;for(;Ki(a)&&!Qi(a);){const t=ea(a),n=qi(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Zi(a)&&!n&&Ua(e,a))?r=r.filter((e=>e!==a)):o=t,a=na(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=Ka(t,n,o);return e.top=ya(r.top,e.top),e.right=va(r.right,e.right),e.bottom=va(r.bottom,e.bottom),e.left=ya(r.left,e.left),e}),Ka(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:qa,getElementRects:async function(e){const t=this.getOffsetParent||qa,n=this.getDimensions,r=await n(e.floating);return{reference:Ja(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=La(e);return{width:t,height:n}},getScale:_a,isElement:Ki,isRTL:function(e){return"rtl"===ea(e).direction}};function Qa(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=za(e),u=o||i?[...c?oa(c):[],...oa(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=Yi(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const h={rootMargin:-xa(u)+"px "+-xa(o.clientWidth-(c+d))+"px "+-xa(o.clientHeight-(u+f))+"px "+-xa(c)+"px",threshold:ya(0,va(1,l))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!l&&p.observe(c),p.observe(t));let g=l?Wa(e):null;return l&&function t(){const r=Wa(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const es=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Ba(n),s=Ea(n),l="y"===Ma(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=Da(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof p&&(h="end"===s?-1*p:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},ts=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Da(e,t),c={x:n,y:r},u=await Pa(t,l),d=Ma(Ba(o)),f=ka(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=Fa(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Fa(p+u["y"===d?"top":"left"],p,p-u[e])}const g=s.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},ns=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Da(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=Ba(o),y=Ba(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),x=f||(y||!g?[Aa(s)]:function(e){const t=Aa(e);return[Ta(e),t,Ta(t)]}(s));f||"none"===p||x.push(...function(e,t,n,r){const o=Ea(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Ba(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(Ta)))),i}(s,g,p,b));const w=[s,...x],S=await Pa(t,m),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Ea(e),o=Ra(e),i=Oa(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Aa(a)),[a,Aa(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,B;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(B=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},rs=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...s}=Da(e,t),l=await Pa(t,s),c=Ba(n),u=Ea(n),d="y"===Ma(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-l.top-l.bottom,v=f-l.left-l.right,y=va(h-l[p],m),b=va(f-l[g],v),x=!t.middlewareData.shift;let w=y,S=b;if(d?S=u||x?va(b,v):v:w=u||x?va(y,m):m,x&&!u){const e=ya(l.left,0),t=ya(l.right,0),n=ya(l.top,0),r=ya(l.bottom,0);d?S=f-2*(0!==e||0!==t?e+t:ya(l.left,l.right)):w=h-2*(0!==n||0!==r?n+r:ya(l.top,l.bottom))}await a({...t,availableWidth:S,availableHeight:w});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},os=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=Da(e,t),u={x:n,y:r},d=Ma(o),f=ka(d);let h=u[f],p=u[d];const g=Da(s,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(Ba(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},is=(e,t,n)=>{const r=new Map,o={platform:Ga,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Ha(c,r,l),f=r,h={},p=0;for(let n=0;n<s.length;n++){const{name:i,fn:g}=s[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Ha(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var as="undefined"!=typeof document?h:a;function ss(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!ss(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ss(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ls(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function cs(e,t){const n=ls(e);return Math.round(t*n)/n}function us(e){const t=r.useRef(e);return as((()=>{t.current=e})),t}const ds=(e,t)=>({...ts(e),options:[e,t]}),fs=(e,t)=>({...os(e),options:[e,t]}),hs=(e,t)=>({...ns(e),options:[e,t]}),ps=(e,t)=>({...rs(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var gs=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),ms="undefined"==typeof Element,vs=ms?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ys=!ms&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},bs=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},xs=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!bs(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{vs.call(a,gs)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!bs(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},ws=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Ss=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!ws(e)?0:e.tabIndex},$s=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Fs=function(e){return"INPUT"===e.tagName},Ds=function(e){return function(e){return Fs(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||ys(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Bs=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Es=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=vs.call(e,"details>summary:first-of-type")?e.parentElement:e;if(vs.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Bs(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=ys(e);if(a&&!a.shadowRoot&&!0===r(a))return Bs(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&ys(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=ys(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},ks=function(e,t){return!(t.disabled||bs(t)||function(e){return Fs(e)&&"hidden"===e.type}(t)||Es(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!vs.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Os=function(e,t){return!(Ds(t)||Ss(t)<0||!ks(e,t))},Ms=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Rs=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Ss(e);return n<0&&t&&!ws(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort($s).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Ts=function(e,t){var n;return n=(t=t||{}).getShadowRoot?xs([e],t.includeContainer,{filter:Os.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ms}):function(e,t,n){if(bs(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(gs));return t&&vs.call(e,gs)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Os.bind(null,t)),Rs(n)},As=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==vs.call(e,gs)&&Os(t,e)};const Cs={...r},Hs=Cs.useInsertionEffect||(e=>e());function Ps(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Hs((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let Ls=0;function zs(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Ls);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():Ls=requestAnimationFrame(i)}var _s="undefined"!=typeof document?h:a;function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ns.apply(this,arguments)}let Is=!1,Ws=0;const js=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Ws++;const Ys=Cs.useId||function(){const[e,t]=r.useState((()=>Is?js():void 0));return _s((()=>{null==e&&t(js())}),[]),r.useEffect((()=>{Is=!0}),[]),e};let Vs;"production"!==process.env.NODE_ENV&&(Vs=new Set);const Ks=r.createContext(null),Us=r.createContext(null),Js=()=>{var e;return(null==(e=r.useContext(Ks))?void 0:e.id)||null},Zs=()=>r.useContext(Us);function Xs(e){return"data-floating-ui-"+e}function qs(e){const t=l(e);return _s((()=>{t.current=e})),t}function Gs(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Qs=new WeakMap,el=new WeakSet,tl={},nl=0;const rl=e=>e&&(e.host||rl(e.parentNode)),ol=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=rl(t);return e.contains(n)?n:null})).filter((e=>null!=e));function il(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=da(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=ol(t,e),s=new Set,l=new Set(a),c=[];tl[o]||(tl[o]=new WeakMap);const u=tl[o];return a.forEach((function e(t){t&&!s.has(t)&&(s.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!l.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==Wi(t))if(s.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Qs.get(t)||0)+1,a=(u.get(t)||0)+1;Qs.set(t,r),u.set(t,a),c.push(t),1===r&&n&&el.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),s.clear(),nl++,()=>{c.forEach((e=>{const t=(Qs.get(e)||0)-1,n=(u.get(e)||0)-1;Qs.set(e,t),u.set(e,n),t||(!el.has(e)&&i&&e.removeAttribute(i),el.delete(e)),n||e.removeAttribute(o)})),nl--,nl||(Qs=new WeakMap,Qs=new WeakMap,el=new WeakSet,tl={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const al=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function sl(e,t){const n=Ts(e,al());"prev"===t&&n.reverse();const r=n.indexOf(ia(da(e)));return n.slice(r+1)[0]}function ll(){return sl(document.body,"next")}function cl(){return sl(document.body,"prev")}function ul(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!aa(n,r)}function dl(e){Ts(e,al()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function fl(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const hl={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function pl(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const gl=r.forwardRef((function(e,t){const[n,o]=r.useState();_s((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",pl),()=>{document.removeEventListener("keydown",pl)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Xs("focus-guard")]:"",style:hl};return r.createElement("span",Ns({},e,i))})),ml=r.createContext(null),vl=Xs("portal");function yl(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Ys(),i=bl(),[a,s]=r.useState(null),l=r.useRef(null);return _s((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{l.current=null}))}),[a]),_s((()=>{if(!o)return;if(l.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(vl,""),e.appendChild(n),l.current=n,s(n)}),[t,o]),_s((()=>{if(!o)return;if(l.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Ki(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(vl,""),e=r||e,e.appendChild(a),l.current=a,s(a)}),[t,n,o,i]),a}({id:n,root:o}),[s,l]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!s&&!s.modal&&s.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ul(e)){("focusin"===e.type?fl:dl)(a)}}}),[a,i,null==s?void 0:s.modal]),r.createElement(ml.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[i,a])},h&&a&&r.createElement(gl,{"data-type":"outside",ref:c,onFocus:e=>{if(ul(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=cl()||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:hl}),a&&k(t,a),h&&a&&r.createElement(gl,{"data-type":"outside",ref:u,onFocus:e=>{if(ul(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=ll()||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const bl=()=>r.useContext(ml),xl=20;let wl=[];function Sl(e){wl=wl.filter((e=>e.isConnected));let t=e;if(t&&"body"!==Wi(t)){if(!As(t,al())){const e=Ts(t,al())[0];e&&(t=e)}wl.push(t),wl.length>xl&&(wl=wl.slice(-xl))}}function $l(){return wl.slice().reverse().find((e=>e.isConnected))}const Fl=r.forwardRef((function(e,t){return r.createElement("button",Ns({},e,{type:"button",ref:t,tabIndex:-1,style:hl}))}));function Dl(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:s=0,returnFocus:l=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,x="number"==typeof s&&s<0,w=!!(S=y)&&"combobox"===S.getAttribute("role")&&ga(S)&&x;var S;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,F=qs(i),D=qs(s),B=qs(l),E=Zs(),k=bl(),O=r.useRef(null),M=r.useRef(null),R=r.useRef(!1),T=r.useRef(!1),A=null!=k,C=r.useCallback((function(e){return void 0===e&&(e=b),e?Ts(e,al()):[]}),[b]),H=r.useCallback((e=>{const t=C(e);return F.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,F,C]);function P(e){return!o&&u&&c?r.createElement(Fl,{ref:"start"===e?O:M,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){aa(b,ia(da(b)))&&0===C().length&&!w&&ma(e);const t=H(),n=ha(e);"reference"===F.current[0]&&n===y&&(ma(e),e.shiftKey?zs(t[t.length-1]):zs(t[1])),"floating"===F.current[1]&&n===b&&e.shiftKey&&(ma(e),zs(t[0]))}}const t=da(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,c,F,w,C,H]),r.useEffect((()=>{if(!o&&d)return b&&Ui(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){T.current=!0,setTimeout((()=>{T.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(aa(y,t)||aa(b,t)||aa(t,b)||aa(null==k?void 0:k.portalNode,t)||null!=t&&t.hasAttribute(Xs("focus-guard"))||E&&(Gs(E.nodesRef.current,p).find((e=>{var n,r;return aa(null==(n=e.context)?void 0:n.elements.floating,t)||aa(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!T.current&&t!==$l()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,c,p,E,k,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==k||null==(e=k.portalNode)?void 0:e.querySelectorAll("["+Xs("portal")+"]"))||[]);if(b){const e=[b,...t,O.current,M.current,F.current.includes("reference")||w?y:null].filter((e=>null!=e)),n=c||w?il(e,$,!$):il(e);return()=>{n()}}}),[o,y,b,c,F,k,w,$]),_s((()=>{if(o||!b)return;const e=ia(da(b));queueMicrotask((()=>{const t=H(b),n=D.current,r=("number"==typeof n?t[n]:n.current)||b,o=aa(b,e);x||o||!f||zs(r,{preventScroll:r===b})}))}),[o,f,b,x,H,D]),_s((()=>{if(o||!b)return;let e=!1;const t=da(b),n=ia(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&Sl(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(ca()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||la(i)))}return Sl(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=ia(t),o=aa(b,n)||E&&Gs(E.nodesRef.current,p).some((e=>{var t;return aa(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&Sl(h.domReference.current);const a=$l();B.current&&!R.current&&Ui(a)&&(a===n||n===t.body||o)&&zs(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,v,h,m,E,p]),_s((()=>{if(!o&&k)return k.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{k.setFocusManagerState(null)}}),[o,k,c,f,g,h,d]),_s((()=>{if(o||!b||"function"!=typeof MutationObserver||x)return;const e=()=>{const e=b.getAttribute("tabindex");F.current.includes("floating")||ia(da(b))!==h.domReference.current&&0===C().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,F,C,x]);const L=!o&&$&&(A||c);return r.createElement(r.Fragment,null,L&&r.createElement(gl,{"data-type":"inside",ref:null==k?void 0:k.beforeInsideRef,onFocus:e=>{if(c){const e=H();zs("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(R.current=!1,ul(e,k.portalNode)){const e=ll()||y;null==e||e.focus()}else{var t;null==(t=k.beforeOutsideRef.current)||t.focus()}}}),!w&&P("start"),n,P("end"),L&&r.createElement(gl,{"data-type":"inside",ref:null==k?void 0:k.afterInsideRef,onFocus:e=>{if(c)zs(H()[0]);else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(d&&(R.current=!0),ul(e,k.portalNode)){const e=cl()||y;null==e||e.focus()}else{var t;null==(t=k.afterOutsideRef.current)||t.focus()}}}))}function Bl(e){return Ui(e.target)&&"BUTTON"===e.target.tagName}function El(e){return ga(e)}const kl={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ol={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ml=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Rl(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Ys(),a=r.useRef({}),[s]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),l=null!=Js();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Ki(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Vs)&&e.has(o)||(null==(i=Vs)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=Ps(((e,t,r)=>{a.current.openEvent=e?t:void 0,s.emit("openchange",{open:e,event:t,reason:r,nested:l}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:s,floatingId:i,refs:f})),[t,d,h,s,i,f])}function Tl(e){void 0===e&&(e={});const{nodeId:t}=e,n=Rl({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,s]=r.useState(null),[l,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Zs();_s((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);ss(h,o)||p(o);const[g,m]=r.useState(null),[v,y]=r.useState(null),b=r.useCallback((e=>{e!==$.current&&($.current=e,m(e))}),[]),x=r.useCallback((e=>{e!==F.current&&(F.current=e,y(e))}),[]),w=a||g,S=s||v,$=r.useRef(null),F=r.useRef(null),D=r.useRef(d),E=null!=c,k=us(c),O=us(i),M=r.useCallback((()=>{if(!$.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};O.current&&(e.platform=O.current),is($.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!ss(D.current,t)&&(D.current=t,B.flushSync((()=>{f(t)})))}))}),[h,t,n,O]);as((()=>{!1===u&&D.current.isPositioned&&(D.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);as((()=>(R.current=!0,()=>{R.current=!1})),[]),as((()=>{if(w&&($.current=w),S&&(F.current=S),w&&S){if(k.current)return k.current(w,S,M);M()}}),[w,S,M,k,E]);const T=r.useMemo((()=>({reference:$,floating:F,setReference:b,setFloating:x})),[b,x]),A=r.useMemo((()=>({reference:w,floating:S})),[w,S]),C=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!A.floating)return e;const t=cs(A.floating,d.x),r=cs(A.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...ls(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,A.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:M,refs:T,elements:A,floatingStyles:C})),[d,M,T,A,C])}({...e,elements:{...i,...l&&{reference:l}}}),p=r.useCallback((e=>{const t=Ki(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(Ki(e)||null===e)&&(d.current=e,s(e)),(Ki(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Ki(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),y=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return _s((()=>{o.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),r.useMemo((()=>({...h,context:y,refs:m,elements:v})),[h,m,v,y])}const Al="active",Cl="selected";function Hl(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Al]:t,[Cl]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Al,Cl].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const Pl=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Ll(e,t){return"function"==typeof e?e(t):e}function zl(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[s,l]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==s||l("unmounted"),_s((()=>{if(o){if(n){l("initial");const e=requestAnimationFrame((()=>{l("open")}));return()=>{cancelAnimationFrame(e)}}l("close")}}),[n,o]),{isMounted:c,status:s}}const _l=g.div`
    display: flex;
    flex-direction: column;
`,Nl=e=>"right"===e?"bottom-end":"bottom-start",Il=({enabled:o,isOpen:a,onOpen:s,onClose:c,onDismiss:u,renderElement:d,renderDropdown:f,zIndex:h=50,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{const y=l(null),b=l(null),{width:x}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=l(n),v=l(null),y=null!=h?h:v,b=l(),x=i({width:void 0,height:void 0}),w=x[0],S=x[1];return Nr((function(){if(!Pr()){var e=zr(g,S,u,f);b.current=Cr((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Pr()&&e({width:r,height:o}),m.current=!1}))}),r,a,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,a,s,u,f,g,p,y.current]),Kn({ref:y},w)}({targetRef:y,handleHeight:!1}),{refs:w,floatingStyles:S,context:$}=Tl({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==u||u():e&&!a?null==s||s():!e&&a&&(null==c||c(n))},whileElementsMounted:Qa,placement:Nl(m),middleware:[(F=g,{...es(F),options:[F,D]}),hs(),ds({limiter:fs()}),ps({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}})]});var F,D;const{isMounted:B,styles:E}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:s=250}=t,l=e.placement,c=l.split("-")[0],u=r.useMemo((()=>({side:c,placement:l})),[c,l]),d="number"==typeof s,f=(d?s:s.open)||0,h=(d?s:s.close)||0,[p,g]=r.useState((()=>({...Ll(a,u),...Ll(n,u)}))),{isMounted:m,status:v}=zl(e,{duration:s}),y=qs(n),b=qs(o),x=qs(i),w=qs(a);return _s((()=>{const e=Ll(y.current,u),t=Ll(x.current,u),n=Ll(w.current,u),r=Ll(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(Pl).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(Pl).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,x,y,b,w,f,v,u]),{isMounted:m,styles:p}}($,{initial:{opacity:0},open:{opacity:1},duration:300}),k=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:s=!0,event:l="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>s?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(ua(f.current,!0)&&u||"click"!==l&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===l&&f.current?f.current=void 0:ua(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||Bl(e)||(" "!==e.key||El(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||Bl(e)||El(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[s,i,l,u,d,a,c,n,o])}($,{enabled:o,toggle:p}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:s},dataRef:l}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Zs(),b=Ps("function"==typeof d?d:()=>!1),x="function"==typeof d?b:d,w=r.useRef(!1),S=r.useRef(!1),{escapeKey:$,outsidePress:F}=Ml(m),{escapeKey:D,outsidePress:B}=Ml(v),E=Ps((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=l.current.floatingContext)?void 0:t.nodeId,i=y?Gs(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),k=Ps((e=>{var t;const n=()=>{var t;E(e),null==(t=ha(e))||t.removeEventListener("keydown",n)};null==(t=ha(e))||t.addEventListener("keydown",n)})),O=Ps((e=>{var t;const n=w.current;w.current=!1;const r=S.current;if(S.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof x&&!x(e))return;const i=ha(e),c="["+Xs("inert")+"]",u=da(s).querySelectorAll(c);let d=Ki(i)?i:null;for(;d&&!Qi(d);){const e=na(d);if(Qi(e)||!Ki(e))break;d=e}if(u.length&&Ki(i)&&!i.matches("html,body")&&!aa(i,s)&&Array.from(u).every((e=>!aa(d,e))))return;if(Ui(i)&&s){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===ea(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=l.current.floatingContext)?void 0:t.nodeId,p=y&&Gs(y.nodesRef.current,h).some((t=>{var n;return fa(e,null==(n=t.context)?void 0:n.elements.floating)}));if(fa(e,s)||fa(e,a)||p)return;const g=y?Gs(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),M=Ps((e=>{var t;const n=()=>{var t;O(e),null==(t=ha(e))||t.removeEventListener(f,n)};null==(t=ha(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}l.current.__escapeKeyBubbles=$,l.current.__outsidePressBubbles=F;const t=da(s);u&&t.addEventListener("keydown",D?k:E,D),x&&t.addEventListener(f,B?M:O,B);let r=[];return g&&(Ki(a)&&(r=oa(a)),Ki(s)&&(r=r.concat(oa(s))),!Ki(i)&&i&&i.contextElement&&(r=r.concat(oa(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",D?k:E,D),x&&t.removeEventListener(f,B?M:O,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[l,s,a,i,u,x,f,n,o,g,c,$,F,E,D,k,O,B,M]),r.useEffect((()=>{w.current=!1}),[x,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[kl[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[Ol[f]]:()=>{w.current=!0}}}:{}),[c,h,f,p,o,E])}($,{enabled:o}),{getReferenceProps:M,getFloatingProps:R}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Hl(t,e,"reference")),t),o=r.useCallback((t=>Hl(t,e,"floating")),t),i=r.useCallback((t=>Hl(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([k,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{y.current=e,w.setReference(e)}},M(),{children:d()})),B&&t(yl,{children:t(Dl,Object.assign({context:$,modal:!1,initialFocus:b,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},S),{zIndex:h})},R(),{children:t(_l,Object.assign({ref:b,style:Object.assign({},E),inert:E.opacity<1?"":void 0},{children:f({elementWidth:x})}))}))}))})]})},Wl=g.div`
    overflow: hidden;
    border: 1px solid ${mn.Neutral[5]};
    border-radius: 4px;
    background: ${mn.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${Ho.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,jl=g.div`
    display: flex;
    align-items: baseline;
`,Yl=g.div`
    margin: 0 0.5rem;
`,Vl=g.div`
    ${e=>fn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Kl=g(Vl)`
    color: ${mn.Neutral[3]};
`,Ul=n=>{var{alignment:r="left",className:o,disabled:s,dropdownZIndex:c,error:u,histogramSlider:d,id:f,onBlur:h,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:v="Select",rangeLabelPrefix:y,rangeLabelSuffix:b,readOnly:x,renderRangeLabel:w,value:S}=n,$=O(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:F,bins:D=[],renderEmptyView:B}=d,[E,k]=i(V()),[M,R]=i(!1),[T,A]=i(!1),[C]=i((()=>fi.generate())),H=D.map((e=>e.minValue)),P=Math.min(...H),L=l(),z=l(),_=l(),N=$["data-testid"]||"select-histogram";a((()=>{S!==E&&k(V())}),[S]);const I=e=>{k(e),null==p||p(e)},W=e=>{k(e),null==g||g(e)},j=()=>{T||M||A(!0)},Y=e=>{!T||M||L.current.contains(e.relatedTarget)||(A(!1),null==h||h())};function V(){return null!=S?S:[P,P+F]}const K=t=>w?w(t):e(vn.Body,{children:[y,t,b]});return t(pi,{children:t(Il,{enabled:!x&&!s,isOpen:M,renderElement:()=>t(bi,Object.assign({className:o,"data-testid":N,id:f,ref:L,tabIndex:-1,onFocus:j,onBlur:Y,$focused:T,$disabled:s,$readOnly:x,$error:u},{children:t(Hi,Object.assign({ref:z,disabled:s,expanded:M,listboxId:C,readOnly:x,variant:"default"},{children:t(Ni,Object.assign({ref:_},{children:H&&0!==H.length?e(jl,{children:[K(E[0]),t(Yl,{children:"-"}),K(E[1])]}):t(Kl,Object.assign({truncateType:m,$variant:"default"},{children:v}))}))}))})),renderDropdown:({elementWidth:e})=>t(Wl,Object.assign({style:{width:e}},{children:t(Yn,{interval:F,value:E,bins:D,onChange:I,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:B})})),onOpen:()=>{R(!0)},onClose:()=>{R(!1)},onDismiss:()=>{z.current.focus(),R(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,zIndex:c})})};export{Ul as SelectHistogram};
//# sourceMappingURL=index.js.map
