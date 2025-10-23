import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import a from"react";import{CrossIcon as r}from"@lifesg/react-icons/cross";import{StarIcon as o}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as l}from"@lifesg/react-icons/star-half";import c,{css as d,keyframes as s}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=Array.isArray,F="object"==typeof h&&h&&h.Object===Object&&h,m="object"==typeof self&&self&&self.Object===Object&&self,B=F||m||Function("return this")(),S=B.Symbol,y=S,b=Object.prototype,D=b.hasOwnProperty,$=b.toString,v=y?y.toStringTag:void 0;var H=function(e){var t=D.call(e,v),n=e[v];try{e[v]=void 0;var a=!0}catch(e){}var r=$.call(e);return a&&(t?e[v]=n:delete e[v]),r},E=Object.prototype.toString;var x=H,k=function(e){return E.call(e)},w=S?S.toStringTag:void 0;var z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":w&&w in Object(e)?x(e):k(e)};var O=z,A=function(e){return null!=e&&"object"==typeof e};var C=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==O(e)},_=p,V=C,P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/;var T=function(e,t){if(_(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!V(e))||(W.test(e)||!P.test(e)||null!=t&&e in Object(t))};var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j=z,N=I;var R,L=function(e){if(!N(e))return!1;var t=j(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=B["__core-js_shared__"],X=(R=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var G=function(e){return!!X&&X in e},M=Function.prototype.toString;var U=L,Y=G,Z=I,q=function(e){if(null!=e){try{return M.call(e)}catch(e){}try{return e+""}catch(e){}}return""},K=/^\[object .+?Constructor\]$/,Q=Function.prototype,ee=Object.prototype,te=Q.toString,ne=ee.hasOwnProperty,ae=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var re=function(e){return!(!Z(e)||Y(e))&&(U(e)?ae:K).test(q(e))},oe=function(e,t){return null==e?void 0:e[t]};var ie=function(e,t){var n=oe(e,t);return re(n)?n:void 0},le=ie(Object,"create"),ce=le;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var se=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge=le,fe=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(ge){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},ue=le,pe=Object.prototype.hasOwnProperty;var Fe=le;var me=de,Be=se,Se=he,ye=function(e){var t=this.__data__;return ue?void 0!==t[e]:pe.call(t,e)},be=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}De.prototype.clear=me,De.prototype.delete=Be,De.prototype.get=Se,De.prototype.has=ye,De.prototype.set=be;var $e=De;var ve=function(){this.__data__=[],this.size=0};var He=function(e,t){return e===t||e!=e&&t!=t};var Ee=function(e,t){for(var n=e.length;n--;)if(He(e[n][0],t))return n;return-1},xe=Ee,ke=Array.prototype.splice;var we=Ee;var ze=Ee;var Oe=Ee;var Ae=ve,Ce=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,!0)},_e=function(e){var t=this.__data__,n=we(t,e);return n<0?void 0:t[n][1]},Ve=function(e){return ze(this.__data__,e)>-1},Pe=function(e,t){var n=this.__data__,a=Oe(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function We(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}We.prototype.clear=Ae,We.prototype.delete=Ce,We.prototype.get=_e,We.prototype.has=Ve,We.prototype.set=Pe;var Te=We,Ie=ie(B,"Map"),je=$e,Ne=Te,Re=Ie;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},Xe=Je;var Ge=Je;var Me=Je;var Ue=Je;var Ye=function(){this.size=0,this.__data__={hash:new je,map:new(Re||Ne),string:new je}},Ze=function(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t},qe=function(e){return Ge(this,e).get(e)},Ke=function(e){return Me(this,e).has(e)},Qe=function(e,t){var n=Ue(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}et.prototype.clear=Ye,et.prototype.delete=Ze,et.prototype.get=qe,et.prototype.has=Ke,et.prototype.set=Qe;var tt=et;function nt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=e.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(nt.Cache||tt),n}nt.Cache=tt;var at=nt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,it=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rt,(function(e,n,a,r){t.push(a?r.replace(ot,"$1"):n||e)})),t}));var lt=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r},ct=p,dt=C,st=S?S.prototype:void 0,gt=st?st.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(ct(t))return lt(t,e)+"";if(dt(t))return gt?gt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ht=ft;var ut=p,pt=T,Ft=it,mt=function(e){return null==e?"":ht(e)};var Bt=C;var St=function(e,t){return ut(e)?e:pt(e,t)?[e]:Ft(mt(e))},yt=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var bt=function(e,t){for(var n=0,a=(t=St(t,e)).length;null!=e&&n<a;)e=e[yt(t[n++])];return n&&n==a?e:void 0};var Dt=u((function(e,t,n){var a=null==e?void 0:bt(e,t);return void 0===a?n:a}));const $t=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var Ht;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ht||(Ht={}));const Et={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,a=vt(Et,n[Ht.colorScheme]);return n.options&&n.options.color?$t(a,e,n.options.color):$t(a,e)},kt={Brand:{1:xt("Brand.1"),2:xt("Brand.2"),3:xt("Brand.3"),4:xt("Brand.4"),5:xt("Brand.5"),6:xt("Brand.6")},Primary:xt("Primary"),PrimaryDark:xt("PrimaryDark"),Secondary:xt("Secondary"),Accent:{Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Neutral:{1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Validation:{Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Shadow:{Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")}},wt={collections:{base:{InputBoxShadow:d`
        inset 0 0 4px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 4px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:d`
        inset 0 0 3px 0px ${kt.Shadow.Accent}
    `,InputErrorBoxShadow:d`
        inset 0 0 3px 0px ${kt.Shadow.Red}
    `,ElevationBoxShadow:d`
      0px 2px 8px ${kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},zt=e=>t=>{var n;const a=t.theme,r=vt(wt,a[Ht.designTokenScheme]);return(null===(n=a.options)||void 0===n?void 0:n.designToken)?$t(r,e,a.options.designToken):$t(r,e)},Ot={InputBoxShadow:zt("InputBoxShadow"),InputErrorBoxShadow:zt("InputErrorBoxShadow"),ElevationBoxShadow:zt("ElevationBoxShadow"),Table:{Header:zt("Table.Header"),Cell:{Primary:zt("Table.Cell.Primary"),Secondary:zt("Table.Cell.Secondary"),Selected:zt("Table.Cell.Selected"),Hover:zt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:zt("Button.Danger.BackgroundColor"),Hover:zt("Button.Danger.Hover"),Primary:zt("Button.Danger.Primary"),Border:zt("Button.Danger.Border")}}},At={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ct=e=>Object.keys(At).reduce(((t,n)=>{const a=At[n];return t[n]=`@media screen and (${e}: ${a}px)`,t}),{}),_t=Ct("max-width"),Vt=(Ct("min-width"),c.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Pt=s`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Wt=c.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Pt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Tt=c(Wt)`
    animation-delay: -0.45s;
`,It=c(Wt)`
    animation-delay: -0.3s;
`,jt=c(Wt)`
    animation-delay: -0.15s;
`,Nt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Rt={D1:{fontFamily:Nt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Lt={D1:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Nt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Nt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Nt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Nt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Nt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Jt={collections:{base:Rt,oneservice:{D1:{fontFamily:Nt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Nt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Nt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Nt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Nt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Nt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Nt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Nt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Nt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Nt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Nt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Nt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Lt},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,a=vt(Jt,n[Ht.textStyleScheme]);return n.options&&n.options.textStyle?$t(a,e,n.options.textStyle):$t(a,e)},Gt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing"),fontVariant:Xt("D1.fontVariant")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing"),fontVariant:Xt("D2.fontVariant")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing"),fontVariant:Xt("D3.fontVariant")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing"),fontVariant:Xt("D4.fontVariant")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing"),fontVariant:Xt("DBody.fontVariant")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing"),fontVariant:Xt("H1.fontVariant")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing"),fontVariant:Xt("H2.fontVariant")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing"),fontVariant:Xt("H3.fontVariant")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing"),fontVariant:Xt("H4.fontVariant")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing"),fontVariant:Xt("H5.fontVariant")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing"),fontVariant:Xt("H6.fontVariant")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing"),fontVariant:Xt("Body.fontVariant")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing"),fontVariant:Xt("BodySmall.fontVariant")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing"),fontVariant:Xt("XSmall.fontVariant")}},Mt=[Nt.OpenSans,Nt.PlusJakartaSans],Ut=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Yt=(e,t)=>n=>{var a;const r=Gt[e].fontFamily(n),o=Gt[e].fontWeight(n),i=Mt.find((e=>Object.values(e).includes(r)));return i?d`
                font-family: ${Ut(i,t)||Ut(i,o)||r};
                font-weight: normal !important;
            `:d`
            font-family: ${r};
            font-weight: ${null!==(a=Zt(t)||o)&&void 0!==a?a:"normal"};
        `},Zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},qt=e=>{if(e>0)return d`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Kt=(e,t,n=!1)=>a=>{const r=Gt[e],o=r.fontSize(a);return d`
            ${Yt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(a)||0}rem !important;
            font-variant: ${r.fontVariant(a)||"normal"};
            ${d`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Qt=(e=!1,t=!1,n=void 0)=>t?d`
            display: block;
            ${qt(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${qt(n)}
        `;var en;!function(e){e.D1=c.h1`
        ${e=>d`
                ${Kt("D1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=c.h1`
        ${e=>d`
                ${Kt("D2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=c.h1`
        ${e=>d`
                ${Kt("D3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=c.h1`
        ${e=>d`
                ${Kt("D4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=c.h1`
        ${e=>d`
                ${Kt("DBody",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=c.h1`
        ${e=>d`
                ${Kt("H1",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=c.h2`
        ${e=>d`
                ${Kt("H2",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=c.h3`
        ${e=>d`
                ${Kt("H3",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=c.h4`
        ${e=>d`
                ${Kt("H4",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=c.h5`
        ${e=>d`
                ${Kt("H5",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=c.h6`
        ${e=>d`
                ${Kt("H6",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=c.p`
        ${e=>d`
                ${Kt("Body",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=c.p`
        ${e=>d`
                ${Kt("BodySmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=c.span`
        ${e=>d`
                ${Kt("XSmall",e.weight,e.paragraph)}
                color: ${kt.Neutral[1]};
                ${Qt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>an(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>an(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(en||(en={}));const tn=c.a`
    ${e=>d`
            ${Kt(e.textStyle,e.weight)}
            color: ${kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kt.Secondary};

                svg {
                    color: ${kt.Secondary};
                }
            }
        `}
`,nn=c(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,an=n=>{var{external:a=!1,children:r}=n,o=f(n,["external","children"]);return e(tn,Object.assign({},o,{children:[r,a&&t(nn,{})]}))};var rn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rn||(rn={}));const on=c.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ot.Button.Danger.Border:kt.Primary};

                    color: ${e.$buttonIsDanger?Ot.Button.Danger.Primary:kt.Primary};
                `;case"light":return d`
                    background-color: ${kt.Neutral[8]};
                    border: 1px solid ${kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ot.Button.Danger.Primary:kt.Primary};
                `;case"disabled":return d`
                    background-color: ${kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${kt.Neutral[3]};
                `;case"link":return d`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ot.Button.Danger.Primary:kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ot.Button.Danger.Hover:kt.Secondary};
                    }
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?Ot.Button.Danger.BackgroundColor:kt.Primary};
                    border: 1px solid transparent;

                    ${_t.mobileL} {
                        width: 100%;
                    }

                    color: ${kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?d`
                    height: 2.5rem;
                    ${Kt("H5","semibold")}

                    ${_t.mobileS} {
                        height: auto;
                    }
                `:d`
                    height: 3rem;
                    ${Kt("H4","semibold")}

                    ${_t.mobileS} {
                        height: auto;
                    }
                `}
`,ln=c((({color:n,className:a,size:r=18})=>e(Vt,Object.assign({className:a,$size:r,$color:n,"data-testid":"component-loading-spinner"},{children:[t(Wt,{id:"inner1",$size:r-2,$borderWidth:2,$color:n}),t(Tt,{id:"inner2",$size:r-2,$borderWidth:2,$color:n}),t(It,{id:"inner3",$size:r-2,$borderWidth:2,$color:n}),t(jt,{id:"inner4",$size:r-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Ot.Button.Danger.Primary:kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=kt.Neutral[3](e);break;default:t=kt.Neutral[8](e)}return d`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cn={Default:a.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(on,Object.assign({ref:a,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(ln,Object.assign({},s)),t("span",{children:r})]}))})),Small:a.forwardRef(((n,a)=>{const{children:r,disabled:o=!1,loading:i=!1,styleType:l="default",danger:c=!1}=n,d=f(n,["children","disabled","loading","styleType","danger"]),s={$buttonStyle:o?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(on,Object.assign({ref:a,"data-testid":d["data-testid"]||"button",disabled:o},s,d,{children:[i&&t(ln,Object.assign({},s,{size:16})),t("span",{children:r})]}))}))},dn=c.button`
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

        ${({$highlight:e})=>e&&d`
                background-color: ${kt.Neutral[7]};
            `}
    }
`,sn=a.forwardRef(((e,n)=>{var{children:a,focusHighlight:r=!0,focusOutline:o="none",type:i="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(dn,Object.assign({ref:n,$outline:o,$highlight:r,type:i},l,{children:a}))})),gn=s`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,fn=c.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${kt.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return d`
                animation: ${gn} 0.3s;
            `}}
`,hn=c.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,un=c(sn)`
    padding: 0;
`,pn=c(r)`
    color: ${kt.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,Fn=c.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,mn=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${_t.mobileM} {
        margin: 0 0.5rem;
    }
`,Bn=c.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,Sn=c.div`
    max-width: 30%;
`,yn=c(cn.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Kt("XSmall","semibold")};
    }
`,bn=c(en.H6)`
    overflow-wrap: anywhere;
    ${_t.mobileM} {
        ${Kt("XSmall","semibold")}
    }
`,Dn=c(en.XSmall)`
    overflow-wrap: anywhere;
`,$n=c.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,vn=d`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,Hn=c(i)`
    ${vn}
`,En=c(l)`
    ${vn}
`,xn=c(o)`
    ${vn}
`,kn="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",wn="smart-app-banner";const zn=a.forwardRef((function(a,r){const{className:o,show:i,href:l,content:c,offset:d=0,icon:s=kn,animated:g=!1,onDismiss:f,onClick:h}=a,{title:u,message:p,buttonLabel:F,buttonAriaLabel:m,numberOfStars:B}=c,S=e=>{e.stopPropagation(),window.open(l,"_blank","noreferrer"),null==h||h()};return t(n,{children:i&&e(fn,Object.assign({ref:r,$isAnimated:g,$offset:d,className:o},{children:[t(hn,Object.assign({onClick:f,id:`${wn}-dismiss`,"data-testid":`${wn}-dismiss-container`},{children:t(un,Object.assign({"aria-label":"Dismiss"},{children:t(pn,{})}))})),e(Fn,Object.assign({onClick:S,id:`${wn}-proceed`,"data-testid":`${wn}-proceed-container`},{children:[t(Bn,{src:s,alt:"lifesg-app-icon"}),e(mn,{children:[t(bn,{children:u}),t(Dn,{children:p}),(()=>{if(isNaN(B)||B<0)return;const e=[],n=B-Math.floor(B)>=.4;for(let n=0;n<Math.floor(B);n++)e.push(t(Hn,{},`star${n}`));if(n&&e.push(t(En,{},"halfstar")),e.length<5){const n=5-e.length;for(let a=0;a<n;a++)e.push(t(xn,{},`emptystar${a}`))}return t($n,{children:e.slice(0,5)})})()]}),t(Sn,{children:t(yn,Object.assign({type:"button",onClick:S,"aria-label":m},{children:F}))})]}))]}))})}));export{zn as SmartAppBanner};
//# sourceMappingURL=index.js.map
