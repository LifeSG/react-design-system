import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const s={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},c={D1:{fontFamily:s.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:s.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:s.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:s.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:s.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:s.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:s.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:s.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:s.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:s.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:s.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:s.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},d={D1:{fontFamily:s.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:s.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:s.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:s.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:s.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:s.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:s.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:s.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},g={D1:{fontFamily:s.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:s.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:s.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:s.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:s.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:s.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:s.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:s.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:s.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:s.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:s.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:s.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:s.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:s.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f=Array.isArray,p="object"==typeof u&&u&&u.Object===Object&&u,m="object"==typeof self&&self&&self.Object===Object&&self,F=p||m||Function("return this")(),y=F.Symbol,S=y,B=Object.prototype,$=B.hasOwnProperty,D=B.toString,b=S?S.toStringTag:void 0;var v=function(t){var e=$.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch(t){}var i=D.call(t);return r&&(e?t[b]=n:delete t[b]),i},H=Object.prototype.toString;var k=v,O=function(t){return H.call(t)},E=y?y.toStringTag:void 0;var w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?k(t):O(t)};var x=w,A=function(t){return null!=t&&"object"==typeof t};var C=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==x(t)},_=f,z=C,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var L=function(t,e){if(_(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(W.test(t)||!j.test(t)||null!=e&&t in Object(e))};var M=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},T=w,P=M;var I,R=function(t){if(!P(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=F["__core-js_shared__"],J=(I=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var N=function(t){return!!J&&J in t},Y=Function.prototype.toString;var G=R,U=N,X=M,Z=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,Q=Function.prototype,K=Object.prototype,tt=Q.toString,et=K.hasOwnProperty,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(t){return!(!X(t)||U(t))&&(G(t)?nt:q).test(Z(t))},it=function(t,e){return null==t?void 0:t[e]};var at=function(t,e){var n=it(t,e);return rt(n)?n:void 0},ot=at(Object,"create"),lt=ot;var st=function(){this.__data__=lt?lt(null):{},this.size=0};var ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=ot,gt=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;if(dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},ht=ot,ft=Object.prototype.hasOwnProperty;var pt=ot;var mt=st,Ft=ct,yt=ut,St=function(t){var e=this.__data__;return ht?void 0!==e[t]:ft.call(e,t)},Bt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&void 0===e?"__lodash_hash_undefined__":e,this};function $t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=mt,$t.prototype.delete=Ft,$t.prototype.get=yt,$t.prototype.has=St,$t.prototype.set=Bt;var Dt=$t;var bt=function(){this.__data__=[],this.size=0};var vt=function(t,e){return t===e||t!=t&&e!=e};var Ht=function(t,e){for(var n=t.length;n--;)if(vt(t[n][0],e))return n;return-1},kt=Ht,Ot=Array.prototype.splice;var Et=Ht;var wt=Ht;var xt=Ht;var At=bt,Ct=function(t){var e=this.__data__,n=kt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ot.call(e,n,1),--this.size,!0)},_t=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},zt=function(t){return wt(this.__data__,t)>-1},jt=function(t,e){var n=this.__data__,r=xt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=At,Wt.prototype.delete=Ct,Wt.prototype.get=_t,Wt.prototype.has=zt,Wt.prototype.set=jt;var Lt=Wt,Mt=at(F,"Map"),Tt=Dt,Pt=Lt,It=Mt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Jt=Vt;var Nt=Vt;var Yt=Vt;var Gt=Vt;var Ut=function(){this.size=0,this.__data__={hash:new Tt,map:new(It||Pt),string:new Tt}},Xt=function(t){var e=Jt(this,t).delete(t);return this.size-=e?1:0,e},Zt=function(t){return Nt(this,t).get(t)},qt=function(t){return Yt(this,t).has(t)},Qt=function(t,e){var n=Gt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kt.prototype.clear=Ut,Kt.prototype.delete=Xt,Kt.prototype.get=Zt,Kt.prototype.has=qt,Kt.prototype.set=Qt;var te=Kt;function ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ee.Cache||te),n}ee.Cache=te;var ne=ee;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/\\(\\)?/g,ae=function(t){var e=ne(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(re,(function(t,n,r,i){e.push(r?i.replace(ie,"$1"):n||t)})),e}));var oe=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},le=f,se=C,ce=y?y.prototype:void 0,de=ce?ce.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(le(e))return oe(e,t)+"";if(se(e))return de?de.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},ue=ge;var he=f,fe=L,pe=ae,me=function(t){return null==t?"":ue(t)};var Fe=C;var ye=function(t,e){return he(t)?t:fe(t,e)?[t]:pe(me(t))},Se=function(t){if("string"==typeof t||Fe(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Be=function(t,e){for(var n=0,r=(e=ye(e,t)).length;null!=t&&n<r;)t=t[Se(e[n++])];return n&&n==r?t:void 0};var $e=h((function(t,e,n){var r=null==t?void 0:Be(t,e);return void 0===r?n:r}));const De=(t,e,n)=>e?$e(n,e)||$e(t,e):n||t,be=(t,e)=>{const n=e||t.defaultValue;return $e(t.collections,n)};var ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(ve||(ve={}));const He={collections:{base:c,oneservice:g,plusJakartaSans:d},defaultValue:"base"},ke=t=>e=>{const n=e.theme,r=be(He,n[ve.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Oe={D1:{fontFamily:ke("D1.fontFamily"),fontSize:ke("D1.fontSize"),fontWeight:ke("D1.fontWeight"),lineHeight:ke("D1.lineHeight"),letterSpacing:ke("D1.letterSpacing")},D2:{fontFamily:ke("D2.fontFamily"),fontSize:ke("D2.fontSize"),fontWeight:ke("D2.fontWeight"),lineHeight:ke("D2.lineHeight"),letterSpacing:ke("D2.letterSpacing")},D3:{fontFamily:ke("D3.fontFamily"),fontSize:ke("D3.fontSize"),fontWeight:ke("D3.fontWeight"),lineHeight:ke("D3.lineHeight"),letterSpacing:ke("D3.letterSpacing")},D4:{fontFamily:ke("D4.fontFamily"),fontSize:ke("D4.fontSize"),fontWeight:ke("D4.fontWeight"),lineHeight:ke("D4.lineHeight"),letterSpacing:ke("D4.letterSpacing")},DBody:{fontFamily:ke("DBody.fontFamily"),fontSize:ke("DBody.fontSize"),fontWeight:ke("DBody.fontWeight"),lineHeight:ke("DBody.lineHeight"),letterSpacing:ke("DBody.letterSpacing")},H1:{fontFamily:ke("H1.fontFamily"),fontSize:ke("H1.fontSize"),fontWeight:ke("H1.fontWeight"),lineHeight:ke("H1.lineHeight"),letterSpacing:ke("H1.letterSpacing")},H2:{fontFamily:ke("H2.fontFamily"),fontSize:ke("H2.fontSize"),fontWeight:ke("H2.fontWeight"),lineHeight:ke("H2.lineHeight"),letterSpacing:ke("H2.letterSpacing")},H3:{fontFamily:ke("H3.fontFamily"),fontSize:ke("H3.fontSize"),fontWeight:ke("H3.fontWeight"),lineHeight:ke("H3.lineHeight"),letterSpacing:ke("H3.letterSpacing")},H4:{fontFamily:ke("H4.fontFamily"),fontSize:ke("H4.fontSize"),fontWeight:ke("H4.fontWeight"),lineHeight:ke("H4.lineHeight"),letterSpacing:ke("H4.letterSpacing")},H5:{fontFamily:ke("H5.fontFamily"),fontSize:ke("H5.fontSize"),fontWeight:ke("H5.fontWeight"),lineHeight:ke("H5.lineHeight"),letterSpacing:ke("H5.letterSpacing")},H6:{fontFamily:ke("H6.fontFamily"),fontSize:ke("H6.fontSize"),fontWeight:ke("H6.fontWeight"),lineHeight:ke("H6.lineHeight"),letterSpacing:ke("H6.letterSpacing")},Body:{fontFamily:ke("Body.fontFamily"),fontSize:ke("Body.fontSize"),fontWeight:ke("Body.fontWeight"),lineHeight:ke("Body.lineHeight"),letterSpacing:ke("Body.letterSpacing")},BodySmall:{fontFamily:ke("BodySmall.fontFamily"),fontSize:ke("BodySmall.fontSize"),fontWeight:ke("BodySmall.fontWeight"),lineHeight:ke("BodySmall.lineHeight"),letterSpacing:ke("BodySmall.letterSpacing")},XSmall:{fontFamily:ke("XSmall.fontFamily"),fontSize:ke("XSmall.fontSize"),fontWeight:ke("XSmall.fontWeight"),lineHeight:ke("XSmall.lineHeight"),letterSpacing:ke("XSmall.letterSpacing")}},Ee=[s.OpenSans,s.PlusJakartaSans],we=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},xe=(t,e)=>n=>{var r;const a=Oe[t].fontFamily(n),o=Oe[t].fontWeight(n),l=Ee.find((t=>Object.values(t).includes(a)));return l?i`
                font-family: ${we(l,e)||we(l,o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=Ae(e)||o)&&void 0!==r?r:"normal"};
        `},Ae=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ce=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},_e=(t,e,n=!1)=>r=>{const a=Oe[t],o=a.fontSize(r);return i`
            ${xe(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},ze=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${Ce(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${Ce(n)}
        `,je={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=be(je,n[ve.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},Le=(We("Brand.1"),We("Brand.2"),We("Brand.3"),We("Brand.4"),We("Brand.5"),We("Brand.6"),We("Primary")),Me=(We("PrimaryDark"),We("Secondary")),Te=(We("Accent.Light.1"),We("Accent.Light.2"),We("Accent.Light.3"),We("Accent.Light.4"),We("Accent.Light.5"),We("Accent.Light.6"),We("Accent.Dark.1"),We("Accent.Dark.2"),We("Accent.Dark.3"),{1:We("Neutral.1"),2:We("Neutral.2"),3:We("Neutral.3"),4:We("Neutral.4"),5:We("Neutral.5"),6:We("Neutral.6"),7:We("Neutral.7"),8:We("Neutral.8")});We("Validation.Green.Text"),We("Validation.Green.Icon"),We("Validation.Green.Border"),We("Validation.Green.Background"),We("Validation.Orange.Text"),We("Validation.Orange.Icon"),We("Validation.Orange.Border"),We("Validation.Orange.Background"),We("Validation.Orange.Badge"),We("Validation.Red.Text"),We("Validation.Red.Icon"),We("Validation.Red.Border"),We("Validation.Red.Background"),We("Validation.Blue.Text"),We("Validation.Blue.Icon"),We("Validation.Blue.Border"),We("Validation.Blue.Background"),We("Shadow.Accent"),We("Shadow.Red"),We("Shadow.Elevation");var Pe;!function(t){t.D1=r.h1`
        ${t=>i`
                ${_e("D1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${_e("D2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${_e("D3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${_e("D4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${_e("DBody",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${_e("H1",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${_e("H2",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${_e("H3",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${_e("H4",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${_e("H5",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${_e("H6",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${_e("Body",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${_e("BodySmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${_e("XSmall",t.weight,t.paragraph)}
                color: ${Te[1]};
                ${ze(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Ve(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Ve(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Pe||(Pe={}));const Ie=r.a`
    ${t=>i`
            ${_e(t.textStyle,t.weight)}
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
`,Re=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ve=n=>{var{external:r=!1,children:i}=n,a=l(n,["external","children"]);return t(Ie,Object.assign({},a,{children:[i,r&&e(Re,{})]}))};var Je;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Je||(Je={}));const Ne={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ye=t=>Object.keys(Ne).reduce(((e,n)=>{const r=Ne[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ge=Ye("max-width"),Ue=(Ye("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ge.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Xe=r(Pe.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Ze=r.div`
    display: flex;
    align-items: flex-start;
`,qe=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ge.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Qe=()=>t(Ue,Object.assign({"data-testid":"download-app-section"},{children:[e(Xe,Object.assign({weight:"semibold"},{children:"Download the app"})),t(Ze,{children:[e(qe,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(qe,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var Ke,tn={exports:{}},en=h(tn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",g="year",u="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},F=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:F,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+F(r,2,"0")+":"+F(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:g,w:s,d:l,D:u,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",B={};B[S]=m;var $="$isDayjsObject",D=function(t){return t instanceof k||!(!t||!t[$])},b=function t(e,n,r){var i;if(!e)return S;if("string"==typeof e){var a=e.toLowerCase();B[a]&&(i=a),n&&(B[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;B[l]=e,i=l}return!r&&i&&(S=i),i||!r&&S},v=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},H=y;H.l=b,H.i=D,H.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[$]=!0}var F=m.prototype;return F.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},F.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},F.$utils=function(){return H},F.isValid=function(){return!(this.$d.toString()===h)},F.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},F.isAfter=function(t,e){return v(t)<this.startOf(e)},F.isBefore=function(t,e){return this.endOf(e)<v(t)},F.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(t,e){var n=this,r=!!H.u(e)||e,d=H.p(t),h=function(t,e){var i=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},f=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case g:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var S=this.$locale().weekStart||0,B=(p<S?p+7:p)-S;return h(r?F-B:F+(6-B),m);case l:case u:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(t){return this.startOf(t,!1)},F.$set=function(t,e){var n,s=H.p(t),d="set"+(this.$u?"UTC":""),h=(n={},n[l]=d+"Date",n[u]=d+"Date",n[c]=d+"Month",n[g]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],f=s===l?this.$D+(e-this.$W):e;if(s===c||s===g){var p=this.clone().set(u,1);p.$d[h](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},F.set=function(t,e){return this.clone().$set(t,e)},F.get=function(t){return this[H.p(t)]()},F.add=function(r,d){var u,h=this;r=Number(r);var f=H.p(d),p=function(t){var e=v(h);return H.w(e.date(e.date()+Math.round(t*r)),h)};if(f===c)return this.set(c,this.$M+r);if(f===g)return this.set(g,this.$y+r);if(f===l)return p(1);if(f===s)return p(7);var m=(u={},u[a]=e,u[o]=n,u[i]=t,u)[f]||1,F=this.$d.getTime()+r*m;return H.w(F,this)},F.subtract=function(t,e){return this.add(-1*t,e)},F.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=H.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,g=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},u=function(t){return H.s(a%12||12,t,"0")},f=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return H.s(e.$y,4,"0");case"M":return l+1;case"MM":return H.s(l+1,2,"0");case"MMM":return g(n.monthsShort,l,c,3);case"MMMM":return g(c,l);case"D":return e.$D;case"DD":return H.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return g(n.weekdaysMin,e.$W,s,2);case"ddd":return g(n.weekdaysShort,e.$W,s,3);case"dddd":return s[e.$W];case"H":return String(a);case"HH":return H.s(a,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return H.s(o,2,"0");case"s":return String(e.$s);case"ss":return H.s(e.$s,2,"0");case"SSS":return H.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,u,h){var f,p=this,m=H.p(u),F=v(r),y=(F.utcOffset()-this.utcOffset())*e,S=this-F,B=function(){return H.m(p,F)};switch(m){case g:f=B()/12;break;case c:f=B();break;case d:f=B()/3;break;case s:f=(S-y)/6048e5;break;case l:f=(S-y)/864e5;break;case o:f=S/n;break;case a:f=S/e;break;case i:f=S/t;break;default:f=S}return h?f:H.a(f)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return B[this.$L]},F.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},F.clone=function(){return H.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),O=k.prototype;return v.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",g],["$D",u]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t.$i||(t(e,k,v),t.$i=!0),v},v.locale=b,v.isDayjs=D,v.unix=function(t){return v(1e3*t)},v.en=B[S],v.Ls=B,v.p={},v}());!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${en(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:Object.assign(Object.assign({href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign({href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign({href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0},t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})})}(Ke||(Ke={}));const nn=r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:l}=t;return i`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Ge.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${Ge.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${l||1};
            }
        `}}
`,rn=o.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=l(t,["mobileCols","tabletCols","desktopCols"]);return e(nn,Object.assign({ref:n},(()=>{const t=i||r,e=r,n=an(a||i||r),o=an(t),l=an(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),an=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},on=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=l(t,["children","data-testid","type","stretch"]);return e(ln,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),ln=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?i`
                padding: 0 3rem;
            `:i`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Ge.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ge.tablet} {
        max-width: 720px;
    }
    ${Ge.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ge.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ge.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,sn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=l(t,["children","data-testid","stretch"]);return e(cn,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),cn=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i`
                ${Ge.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,dn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,c=l(t,["children","data-testid","className","type","stretch"]);return e(sn,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},c,{children:e(on,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),gn={Section:sn,Container:on,Content:dn,ColDiv:rn},un=r.footer`
    background: ${Te[7]};
`,hn=r(Pe.Hyperlink.Small)`
    color: ${Te[1]};
`,fn=r(gn.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Te[5]};

    ${Ge.tablet} {
        padding: 2rem 0;
    }
`,pn=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,mn=r.ul`
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

    ${Ge.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ge.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,Fn=r.div`
    grid-column: 9 / span 4;

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,yn=r.div`
    display: none;

    ${Ge.tablet} {
        display: block;
        height: 1px;
        background: ${Te[6]};
    }
`,Sn=r(gn.Content)`
    padding: 1.375rem 0;

    ${Ge.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,Bn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Ge.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,$n=r(Bn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ge.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ge.mobileL} {
        grid-column: 1 / span 4;
    }
`,Dn=r(Pe.Hyperlink.Small)`
    ${_e("XSmall","regular")}
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

    ${Ge.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ge.tablet} {
        margin-bottom: 0.625rem;
    }
`,bn=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:s,showDownloadAddon:c,logoSrc:d,copyrightInfo:g,onFooterLinkClick:u,layout:h="default"}=r,f=l(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,m=t=>t.map(((t,n)=>{const r=l(t,["data-options"]);return e("li",{children:e(hn,Object.assign({},r,{onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):u&&(t.preventDefault(),u(e))})(e,t)}))},n)}));return t(un,Object.assign({},f,{children:[(()=>{let r=null;return i||((a||c)&&(r=t(n,{children:[e(pn,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:d||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})})),(null==a?void 0:a[0])&&e(mn,Object.assign({"data-testid":"link-col-1"},{children:m(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(mn,Object.assign({"data-testid":"link-col-2"},{children:m(a[1])}),"link-col-2"),c&&e(Fn,{children:e(Qe,{})})]})),r?e(fn,Object.assign({type:"grid",stretch:p},{children:r})):null)})(),e(yn,{}),t(Sn,Object.assign({type:"grid",stretch:p},{children:[e(Bn,{children:(()=>{const t=Ke.getDisclaimerLinks(s);return Object.keys(t).map((n=>e(Dn,Object.assign({},t[n]),n)))})()},"disclaimer"),e($n,{children:e(Pe.XSmall,Object.assign({"data-testid":"copyright-text"},{children:g||t(n,{children:["©"," ",Ke.getCopyrightInfo(o)]})}))},"copyright")]}))]}))};export{bn as Footer};
//# sourceMappingURL=index.js.map
