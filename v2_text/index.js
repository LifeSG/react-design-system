import t,{css as e}from"styled-components";import{jsxs as n,jsx as a}from"react/jsx-runtime";import{ExternalIcon as i}from"@lifesg/react-icons/external";const o={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},r={D1:{fontFamily:o.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:o.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:o.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:o.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:o.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:o.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:o.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:o.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:o.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},l={D1:{fontFamily:o.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:o.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:o.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:o.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:o.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:o.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:o.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:o.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:o.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},g={D1:{fontFamily:o.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:o.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:o.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:o.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:o.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:o.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:o.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:o.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:o.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:o.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:o.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:o.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:o.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F=Array.isArray,h="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,s=h||d||Function("return this")(),u=s.Symbol,p=u,S=Object.prototype,y=S.hasOwnProperty,B=S.toString,m=p?p.toStringTag:void 0;var D=function(t){var e=y.call(t,m),n=t[m];try{t[m]=void 0;var a=!0}catch(t){}var i=B.call(t);return a&&(e?t[m]=n:delete t[m]),i},v=Object.prototype.toString;var H=D,E=function(t){return v.call(t)},b=u?u.toStringTag:void 0;var A=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?H(t):E(t)};var z=A,$=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||$(t)&&"[object Symbol]"==z(t)},x=F,k=O,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var V=function(t,e){if(x(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!k(t))||(C.test(t)||!_.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},w=A,T=W;var P,j=function(t){if(!T(t))return!1;var e=w(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},R=s["__core-js_shared__"],L=(P=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var I=function(t){return!!L&&L in t},J=Function.prototype.toString;var N=j,X=I,G=W,M=function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,K=Object.prototype,Q=q.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(t){return!(!G(t)||X(t))&&(N(t)?Z:U).test(M(t))},et=function(t,e){return null==t?void 0:t[e]};var nt=function(t,e){var n=et(t,e);return tt(n)?n:void 0},at=nt(Object,"create"),it=at;var ot=function(){this.__data__=it?it(null):{},this.size=0};var rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},lt=at,gt=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;if(lt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return gt.call(e,t)?e[t]:void 0},ft=at,Ft=Object.prototype.hasOwnProperty;var ht=at;var dt=ot,st=rt,ut=ct,pt=function(t){var e=this.__data__;return ft?void 0!==e[t]:Ft.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}yt.prototype.clear=dt,yt.prototype.delete=st,yt.prototype.get=ut,yt.prototype.has=pt,yt.prototype.set=St;var Bt=yt;var mt=function(){this.__data__=[],this.size=0};var Dt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(Dt(t[n][0],e))return n;return-1},Ht=vt,Et=Array.prototype.splice;var bt=vt;var At=vt;var zt=vt;var $t=mt,Ot=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Et.call(e,n,1),--this.size,!0)},xt=function(t){var e=this.__data__,n=bt(e,t);return n<0?void 0:e[n][1]},kt=function(t){return At(this.__data__,t)>-1},_t=function(t,e){var n=this.__data__,a=zt(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this};function Ct(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Ct.prototype.clear=$t,Ct.prototype.delete=Ot,Ct.prototype.get=xt,Ct.prototype.has=kt,Ct.prototype.set=_t;var Vt=Ct,Wt=nt(s,"Map"),wt=Bt,Tt=Vt,Pt=Wt;var jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Rt=function(t,e){var n=t.__data__;return jt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=Rt;var It=Rt;var Jt=Rt;var Nt=Rt;var Xt=function(){this.size=0,this.__data__={hash:new wt,map:new(Pt||Tt),string:new wt}},Gt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Mt=function(t){return It(this,t).get(t)},Ut=function(t){return Jt(this,t).has(t)},qt=function(t,e){var n=Nt(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this};function Kt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}Kt.prototype.clear=Xt,Kt.prototype.delete=Gt,Kt.prototype.get=Mt,Kt.prototype.has=Ut,Kt.prototype.set=qt;var Qt=Kt;function Yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=e?e.apply(this,a):a[0],o=n.cache;if(o.has(i))return o.get(i);var r=t.apply(this,a);return n.cache=o.set(i,r)||o,r};return n.cache=new(Yt.Cache||Qt),n}Yt.Cache=Qt;var Zt=Yt;var te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/\\(\\)?/g,ne=function(t){var e=Zt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(te,(function(t,n,a,i){e.push(a?i.replace(ee,"$1"):n||t)})),e}));var ae=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i},ie=F,oe=O,re=u?u.prototype:void 0,le=re?re.toString:void 0;var ge=function t(e){if("string"==typeof e)return e;if(ie(e))return ae(e,t)+"";if(oe(e))return le?le.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},ce=ge;var fe=F,Fe=V,he=ne,de=function(t){return null==t?"":ce(t)};var se=O;var ue=function(t,e){return fe(t)?t:Fe(t,e)?[t]:he(de(t))},pe=function(t){if("string"==typeof t||se(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Se=function(t,e){for(var n=0,a=(e=ue(e,t)).length;null!=t&&n<a;)t=t[pe(e[n++])];return n&&n==a?t:void 0};var ye=f((function(t,e,n){var a=null==t?void 0:Se(t,e);return void 0===a?n:a}));const Be=(t,e,n)=>e?ye(n,e)||ye(t,e):n||t,me=(t,e)=>{const n=e||t.defaultValue;return ye(t.collections,n)};var De;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(De||(De={}));const ve={collections:{base:r,oneservice:g,plusJakartaSans:l},defaultValue:"base"},He=t=>e=>{var n;const a=(null===(n=e.theme)||void 0===n?void 0:n._v2)||e.theme,i=me(ve,null==a?void 0:a[De.textStyleScheme]);return a.options&&a.options.textStyle?Be(i,t,a.options.textStyle):Be(i,t)},Ee={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing"),fontVariant:He("D1.fontVariant")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing"),fontVariant:He("D2.fontVariant")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing"),fontVariant:He("D3.fontVariant")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing"),fontVariant:He("D4.fontVariant")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing"),fontVariant:He("DBody.fontVariant")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing"),fontVariant:He("H1.fontVariant")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing"),fontVariant:He("H2.fontVariant")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing"),fontVariant:He("H3.fontVariant")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing"),fontVariant:He("H4.fontVariant")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing"),fontVariant:He("H5.fontVariant")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing"),fontVariant:He("H6.fontVariant")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing"),fontVariant:He("Body.fontVariant")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing"),fontVariant:He("BodySmall.fontVariant")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing"),fontVariant:He("XSmall.fontVariant")}},be=[o.OpenSans,o.PlusJakartaSans],Ae=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},ze=(t,n)=>a=>{var i,o,r,l,g;const c=null===(o=(i=Ee[t]).fontFamily)||void 0===o?void 0:o.call(i,a),f=null===(l=(r=Ee[t]).fontWeight)||void 0===l?void 0:l.call(r,a),F=be.find((t=>Object.values(t).includes(c)));return F?e`
                font-family: ${Ae(F,n)||Ae(F,f)||c};
                font-weight: normal !important;
            `:e`
            font-family: ${c};
            font-weight: ${null!==(g=$e(n)||f)&&void 0!==g?g:"normal"};
        `},$e=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oe=t=>{if(t)return e`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},xe={getFontFamily:ze,getTextStyle:(t,n,a=!1)=>i=>{var o,r,l;const g=Ee[t],c=(null===(o=g.fontSize)||void 0===o?void 0:o.call(g,i))||1;return e`
            ${ze(t,n)}
            font-size: ${c}rem !important;
            line-height: ${g.lineHeight}rem !important;
            letter-spacing: ${(null===(r=g.letterSpacing)||void 0===r?void 0:r.call(g,i))||0}rem !important;
            font-variant: ${(null===(l=g.fontVariant)||void 0===l?void 0:l.call(g,i))||"normal"};
            ${e`
                margin-bottom: ${c*(a?1.05:0)}rem;
            `}
        `},getDisplayStyle:(t=!1,n=!1,a=void 0)=>n?e`
            display: block;
            ${Oe(a)}
        `:t?e`
            display: inline;
        `:e`
            display: block;
            ${Oe(a)}
        `};"function"==typeof SuppressedError&&SuppressedError;const ke={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_e=t=>e=>{var n;const a=(null===(n=e.theme)||void 0===n?void 0:n._v2)||e.theme,i=me(ke,null==a?void 0:a[De.colorScheme]);return a.options&&a.options.color?Be(i,t,a.options.color):Be(i,t)},Ce=(_e("Brand.1"),_e("Brand.2"),_e("Brand.3"),_e("Brand.4"),_e("Brand.5"),_e("Brand.6"),_e("Primary")),Ve=(_e("PrimaryDark"),_e("Secondary")),We=(_e("Accent.Light.1"),_e("Accent.Light.2"),_e("Accent.Light.3"),_e("Accent.Light.4"),_e("Accent.Light.5"),_e("Accent.Light.6"),_e("Accent.Dark.1"),_e("Accent.Dark.2"),_e("Accent.Dark.3"),{1:_e("Neutral.1"),2:_e("Neutral.2"),3:_e("Neutral.3"),4:_e("Neutral.4"),5:_e("Neutral.5"),6:_e("Neutral.6"),7:_e("Neutral.7"),8:_e("Neutral.8")});_e("Validation.Green.Text"),_e("Validation.Green.Icon"),_e("Validation.Green.Border"),_e("Validation.Green.Background"),_e("Validation.Orange.Text"),_e("Validation.Orange.Icon"),_e("Validation.Orange.Border"),_e("Validation.Orange.Background"),_e("Validation.Orange.Badge"),_e("Validation.Red.Text"),_e("Validation.Red.Icon"),_e("Validation.Red.Border"),_e("Validation.Red.Background"),_e("Validation.Blue.Text"),_e("Validation.Blue.Icon"),_e("Validation.Blue.Border"),_e("Validation.Blue.Background"),_e("Shadow.Accent"),_e("Shadow.Red"),_e("Shadow.Elevation");var we;!function(n){n.D1=t.h1`
        ${t=>e`
                ${xe.getTextStyle("D1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D2=t.h1`
        ${t=>e`
                ${xe.getTextStyle("D2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D3=t.h1`
        ${t=>e`
                ${xe.getTextStyle("D3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.D4=t.h1`
        ${t=>e`
                ${xe.getTextStyle("D4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.DBody=t.h1`
        ${t=>e`
                ${xe.getTextStyle("DBody",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H1=t.h1`
        ${t=>e`
                ${xe.getTextStyle("H1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H2=t.h2`
        ${t=>e`
                ${xe.getTextStyle("H2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H3=t.h3`
        ${t=>e`
                ${xe.getTextStyle("H3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H4=t.h4`
        ${t=>e`
                ${xe.getTextStyle("H4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H5=t.h5`
        ${t=>e`
                ${xe.getTextStyle("H5",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.H6=t.h6`
        ${t=>e`
                ${xe.getTextStyle("H6",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Body=t.p`
        ${t=>e`
                ${xe.getTextStyle("Body",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.BodySmall=t.p`
        ${t=>e`
                ${xe.getTextStyle("BodySmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.XSmall=t.span`
        ${t=>e`
                ${xe.getTextStyle("XSmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${xe.getDisplayStyle(t.inline,t.paragraph,t.maxLines)}
            `}
    `,n.Hyperlink={Default:t=>je(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>je(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(we||(we={}));const Te=t.a`
    ${t=>e`
            ${xe.getTextStyle(t.textStyle,t.weight)}
            color: ${Ce};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ve};

                svg {
                    color: ${Ve};
                }
            }
        `}
`,Pe=t(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,je=t=>{var{external:e=!1,children:i}=t,o=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}(t,["external","children"]);return n(Te,Object.assign({},o,{children:[i,e&&a(Pe,{})]}))};var Re;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Re||(Re={}));export{Re as RedirectScope,we as V2_Text,Ee as V2_TextStyle,xe as V2_TextStyleHelper};
//# sourceMappingURL=index.js.map
