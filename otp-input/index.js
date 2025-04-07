import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as i,useState as o,useEffect as l}from"react";import s,{css as c,keyframes as d}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as h}from"@lifesg/react-icons/cross";import"@lifesg/react-icons/i-circle-fill";import"@floating-ui/react";import"react-dom";function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m=Array.isArray,y="object"==typeof g&&g&&g.Object===Object&&g,S="object"==typeof self&&self&&self.Object===Object&&self,F=y||S||Function("return this")(),$=F.Symbol,b=$,v=Object.prototype,B=v.hasOwnProperty,D=v.toString,x=b?b.toStringTag:void 0;var w=function(e){var t=B.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var a=D.call(e);return r&&(t?e[x]=n:delete e[x]),a},H=Object.prototype.toString;var k=w,O=function(e){return H.call(e)},E=$?$.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?k(e):O(e)};var z=C,M=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==z(e)},T=m,W=A,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/;var P=function(e,t){if(T(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!W(e))||(I.test(e)||!_.test(e)||null!=t&&e in Object(t))};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V=C,Y=L;var N,R=function(e){if(!Y(e))return!1;var t=V(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=F["__core-js_shared__"],J=(N=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var Z=function(e){return!!J&&J in e},X=Function.prototype.toString;var U=R,G=Z,q=L,K=function(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Q=/^\[object .+?Constructor\]$/,ee=Function.prototype,te=Object.prototype,ne=ee.toString,re=te.hasOwnProperty,ae=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!q(e)||G(e))&&(U(e)?ae:Q).test(K(e))},oe=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var n=oe(e,t);return ie(n)?n:void 0},se=le(Object,"create"),ce=se;var de=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},he=se,fe=Object.prototype.hasOwnProperty;var ge=function(e){var t=this.__data__;if(he){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return fe.call(t,e)?t[e]:void 0},pe=se,me=Object.prototype.hasOwnProperty;var ye=se;var Se=de,Fe=ue,$e=ge,be=function(e){var t=this.__data__;return pe?void 0!==t[e]:me.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ye&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=Se,Be.prototype.delete=Fe,Be.prototype.get=$e,Be.prototype.has=be,Be.prototype.set=ve;var De=Be;var xe=function(){this.__data__=[],this.size=0};var we=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(we(e[n][0],t))return n;return-1},ke=He,Oe=Array.prototype.splice;var Ee=He;var Ce=He;var ze=He;var Me=xe,Ae=function(e){var t=this.__data__,n=ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():Oe.call(t,n,1),--this.size,!0)},Te=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},We=function(e){return Ce(this.__data__,e)>-1},_e=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ie(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ie.prototype.clear=Me,Ie.prototype.delete=Ae,Ie.prototype.get=Te,Ie.prototype.has=We,Ie.prototype.set=_e;var Pe=Ie,Le=le(F,"Map"),Ve=De,Ye=Pe,Ne=Le;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Je=je;var Ze=je;var Xe=je;var Ue=je;var Ge=function(){this.size=0,this.__data__={hash:new Ve,map:new(Ne||Ye),string:new Ve}},qe=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},Ke=function(e){return Ze(this,e).get(e)},Qe=function(e){return Xe(this,e).has(e)},et=function(e,t){var n=Ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=qe,tt.prototype.get=Ke,tt.prototype.has=Qe,tt.prototype.set=et;var nt=tt;function rt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(rt.Cache||nt),n}rt.Cache=nt;var at=rt;var it=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,lt=function(e){var t=at(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(it,(function(e,n,r,a){t.push(r?a.replace(ot,"$1"):n||e)})),t}));var st=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ct=m,dt=A,ut=$?$.prototype:void 0,ht=ut?ut.toString:void 0;var ft=function e(t){if("string"==typeof t)return t;if(ct(t))return st(t,e)+"";if(dt(t))return ht?ht.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},gt=ft;var pt=m,mt=P,yt=lt,St=function(e){return null==e?"":gt(e)};var Ft=A;var $t=function(e,t){return pt(e)?e:mt(e,t)?[e]:yt(St(e))},bt=function(e){if("string"==typeof e||Ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var vt=function(e,t){for(var n=0,r=(t=$t(t,e)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0};var Bt=p((function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r}));const Dt=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,xt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var wt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wt||(wt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},kt=e=>t=>{const n=t.theme,r=xt(Ht,n[wt.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Ot={Brand:{1:kt("Brand.1"),2:kt("Brand.2"),3:kt("Brand.3"),4:kt("Brand.4"),5:kt("Brand.5"),6:kt("Brand.6")},Primary:kt("Primary"),PrimaryDark:kt("PrimaryDark"),Secondary:kt("Secondary"),Accent:{Light:{1:kt("Accent.Light.1"),2:kt("Accent.Light.2"),3:kt("Accent.Light.3"),4:kt("Accent.Light.4"),5:kt("Accent.Light.5"),6:kt("Accent.Light.6")},Dark:{1:kt("Accent.Dark.1"),2:kt("Accent.Dark.2"),3:kt("Accent.Dark.3")}},Neutral:{1:kt("Neutral.1"),2:kt("Neutral.2"),3:kt("Neutral.3"),4:kt("Neutral.4"),5:kt("Neutral.5"),6:kt("Neutral.6"),7:kt("Neutral.7"),8:kt("Neutral.8")},Validation:{Green:{Text:kt("Validation.Green.Text"),Icon:kt("Validation.Green.Icon"),Border:kt("Validation.Green.Border"),Background:kt("Validation.Green.Background")},Orange:{Text:kt("Validation.Orange.Text"),Icon:kt("Validation.Orange.Icon"),Border:kt("Validation.Orange.Border"),Background:kt("Validation.Orange.Background"),Badge:kt("Validation.Orange.Badge")},Red:{Text:kt("Validation.Red.Text"),Icon:kt("Validation.Red.Icon"),Border:kt("Validation.Red.Border"),Background:kt("Validation.Red.Background")},Blue:{Text:kt("Validation.Blue.Text"),Icon:kt("Validation.Blue.Icon"),Border:kt("Validation.Blue.Border"),Background:kt("Validation.Blue.Background")}},Shadow:{Accent:kt("Shadow.Accent"),Red:kt("Shadow.Red"),Elevation:kt("Shadow.Elevation")}},Et={collections:{base:{InputBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 4px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Accent}
    `,InputErrorBoxShadow:c`
        inset 0 0 3px 0px ${Ot.Shadow.Red}
    `,ElevationBoxShadow:c`
      0px 2px 8px ${Ot.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ct=e=>t=>{var n;const r=t.theme,a=xt(Et,r[wt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Dt(a,e,r.options.designToken):Dt(a,e)},zt={InputBoxShadow:Ct("InputBoxShadow"),InputErrorBoxShadow:Ct("InputErrorBoxShadow"),ElevationBoxShadow:Ct("ElevationBoxShadow"),Table:{Header:Ct("Table.Header"),Cell:{Primary:Ct("Table.Cell.Primary"),Secondary:Ct("Table.Cell.Secondary"),Selected:Ct("Table.Cell.Selected"),Hover:Ct("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ct("Button.Danger.BackgroundColor"),Hover:Ct("Button.Danger.Hover"),Primary:Ct("Button.Danger.Primary"),Border:Ct("Button.Danger.Border")}}},Mt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},At=e=>Object.keys(Mt).reduce(((t,n)=>{const r=Mt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Tt=At("max-width"),Wt=(At("min-width"),s.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),_t=d`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,It=s.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ot.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${_t} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Pt=s(It)`
    animation-delay: -0.45s;
`,Lt=s(It)`
    animation-delay: -0.3s;
`,Vt=s(It)`
    animation-delay: -0.15s;
`,Yt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Nt={D1:{fontFamily:Yt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Rt={D1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Yt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Yt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},jt={collections:{base:Nt,oneservice:{D1:{fontFamily:Yt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Yt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Yt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Yt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Yt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Yt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Yt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Yt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Yt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Yt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Rt},defaultValue:"base"},Jt=e=>t=>{const n=t.theme,r=xt(jt,n[wt.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},Zt={D1:{fontFamily:Jt("D1.fontFamily"),fontSize:Jt("D1.fontSize"),fontWeight:Jt("D1.fontWeight"),lineHeight:Jt("D1.lineHeight"),letterSpacing:Jt("D1.letterSpacing"),fontVariant:Jt("D1.fontVariant")},D2:{fontFamily:Jt("D2.fontFamily"),fontSize:Jt("D2.fontSize"),fontWeight:Jt("D2.fontWeight"),lineHeight:Jt("D2.lineHeight"),letterSpacing:Jt("D2.letterSpacing"),fontVariant:Jt("D2.fontVariant")},D3:{fontFamily:Jt("D3.fontFamily"),fontSize:Jt("D3.fontSize"),fontWeight:Jt("D3.fontWeight"),lineHeight:Jt("D3.lineHeight"),letterSpacing:Jt("D3.letterSpacing"),fontVariant:Jt("D3.fontVariant")},D4:{fontFamily:Jt("D4.fontFamily"),fontSize:Jt("D4.fontSize"),fontWeight:Jt("D4.fontWeight"),lineHeight:Jt("D4.lineHeight"),letterSpacing:Jt("D4.letterSpacing"),fontVariant:Jt("D4.fontVariant")},DBody:{fontFamily:Jt("DBody.fontFamily"),fontSize:Jt("DBody.fontSize"),fontWeight:Jt("DBody.fontWeight"),lineHeight:Jt("DBody.lineHeight"),letterSpacing:Jt("DBody.letterSpacing"),fontVariant:Jt("DBody.fontVariant")},H1:{fontFamily:Jt("H1.fontFamily"),fontSize:Jt("H1.fontSize"),fontWeight:Jt("H1.fontWeight"),lineHeight:Jt("H1.lineHeight"),letterSpacing:Jt("H1.letterSpacing"),fontVariant:Jt("H1.fontVariant")},H2:{fontFamily:Jt("H2.fontFamily"),fontSize:Jt("H2.fontSize"),fontWeight:Jt("H2.fontWeight"),lineHeight:Jt("H2.lineHeight"),letterSpacing:Jt("H2.letterSpacing"),fontVariant:Jt("H2.fontVariant")},H3:{fontFamily:Jt("H3.fontFamily"),fontSize:Jt("H3.fontSize"),fontWeight:Jt("H3.fontWeight"),lineHeight:Jt("H3.lineHeight"),letterSpacing:Jt("H3.letterSpacing"),fontVariant:Jt("H3.fontVariant")},H4:{fontFamily:Jt("H4.fontFamily"),fontSize:Jt("H4.fontSize"),fontWeight:Jt("H4.fontWeight"),lineHeight:Jt("H4.lineHeight"),letterSpacing:Jt("H4.letterSpacing"),fontVariant:Jt("H4.fontVariant")},H5:{fontFamily:Jt("H5.fontFamily"),fontSize:Jt("H5.fontSize"),fontWeight:Jt("H5.fontWeight"),lineHeight:Jt("H5.lineHeight"),letterSpacing:Jt("H5.letterSpacing"),fontVariant:Jt("H5.fontVariant")},H6:{fontFamily:Jt("H6.fontFamily"),fontSize:Jt("H6.fontSize"),fontWeight:Jt("H6.fontWeight"),lineHeight:Jt("H6.lineHeight"),letterSpacing:Jt("H6.letterSpacing"),fontVariant:Jt("H6.fontVariant")},Body:{fontFamily:Jt("Body.fontFamily"),fontSize:Jt("Body.fontSize"),fontWeight:Jt("Body.fontWeight"),lineHeight:Jt("Body.lineHeight"),letterSpacing:Jt("Body.letterSpacing"),fontVariant:Jt("Body.fontVariant")},BodySmall:{fontFamily:Jt("BodySmall.fontFamily"),fontSize:Jt("BodySmall.fontSize"),fontWeight:Jt("BodySmall.fontWeight"),lineHeight:Jt("BodySmall.lineHeight"),letterSpacing:Jt("BodySmall.letterSpacing"),fontVariant:Jt("BodySmall.fontVariant")},XSmall:{fontFamily:Jt("XSmall.fontFamily"),fontSize:Jt("XSmall.fontSize"),fontWeight:Jt("XSmall.fontWeight"),lineHeight:Jt("XSmall.lineHeight"),letterSpacing:Jt("XSmall.letterSpacing"),fontVariant:Jt("XSmall.fontVariant")}},Xt=[Yt.OpenSans,Yt.PlusJakartaSans],Ut=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Gt=(e,t)=>n=>{var r;const a=Zt[e].fontFamily(n),i=Zt[e].fontWeight(n),o=Xt.find((e=>Object.values(e).includes(a)));return o?c`
                font-family: ${Ut(o,t)||Ut(o,i)||a};
                font-weight: normal !important;
            `:c`
            font-family: ${a};
            font-weight: ${null!==(r=qt(t)||i)&&void 0!==r?r:"normal"};
        `},qt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Kt=e=>{if(e>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Qt=Gt,en=(e,t,n=!1)=>r=>{const a=Zt[e],i=a.fontSize(r);return c`
            ${Gt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${c`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},tn=(e=!1,t=!1,n=void 0)=>t?c`
            display: block;
            ${Kt(n)}
        `:e?c`
            display: inline;
        `:c`
            display: block;
            ${Kt(n)}
        `;var nn;!function(e){e.D1=s.h1`
        ${e=>c`
                ${en("D1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=s.h1`
        ${e=>c`
                ${en("D2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=s.h1`
        ${e=>c`
                ${en("D3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=s.h1`
        ${e=>c`
                ${en("D4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=s.h1`
        ${e=>c`
                ${en("DBody",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=s.h1`
        ${e=>c`
                ${en("H1",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=s.h2`
        ${e=>c`
                ${en("H2",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=s.h3`
        ${e=>c`
                ${en("H3",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=s.h4`
        ${e=>c`
                ${en("H4",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=s.h5`
        ${e=>c`
                ${en("H5",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=s.h6`
        ${e=>c`
                ${en("H6",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=s.p`
        ${e=>c`
                ${en("Body",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=s.p`
        ${e=>c`
                ${en("BodySmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=s.span`
        ${e=>c`
                ${en("XSmall",e.weight,e.paragraph)}
                color: ${Ot.Neutral[1]};
                ${tn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>on(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>on(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(nn||(nn={}));const rn=s.a`
    ${e=>c`
            ${en(e.textStyle,e.weight)}
            color: ${Ot.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        `}
`,an=s(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,on=n=>{var{external:r=!1,children:a}=n,i=f(n,["external","children"]);return e(rn,Object.assign({},i,{children:[a,r&&t(an,{})]}))};var ln;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ln||(ln={}));const sn=s.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return c`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?zt.Button.Danger.Border:Ot.Primary};

                    color: ${e.$buttonIsDanger?zt.Button.Danger.Primary:Ot.Primary};
                `;case"light":return c`
                    background-color: ${Ot.Neutral[8]};
                    border: 1px solid ${Ot.Neutral[5]};

                    color: ${e.$buttonIsDanger?zt.Button.Danger.Primary:Ot.Primary};
                `;case"disabled":return c`
                    background-color: ${Ot.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ot.Neutral[3]};
                `;case"link":return c`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?zt.Button.Danger.Primary:Ot.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?zt.Button.Danger.Hover:Ot.Secondary};
                    }
                `;default:return c`
                    background-color: ${e.$buttonIsDanger?zt.Button.Danger.BackgroundColor:Ot.Primary};
                    border: 1px solid transparent;

                    ${Tt.mobileL} {
                        width: 100%;
                    }

                    color: ${Ot.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?c`
                    height: 2.5rem;
                    ${en("H5","semibold")}

                    ${Tt.mobileS} {
                        height: auto;
                    }
                `:c`
                    height: 3rem;
                    ${en("H4","semibold")}

                    ${Tt.mobileS} {
                        height: auto;
                    }
                `}
`,cn=s((({color:n,className:r,size:a=18})=>e(Wt,Object.assign({className:r,$size:a,$color:n,"data-testid":"component-loading-spinner"},{children:[t(It,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(Pt,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(Lt,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(Vt,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?zt.Button.Danger.Primary:Ot.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ot.Neutral[3](e);break;default:t=Ot.Neutral[8](e)}return c`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,dn={Default:r.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(sn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(cn,Object.assign({},d)),t("span",{children:a})]}))})),Small:r.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:l="default",danger:s=!1}=n,c=f(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(sn,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(cn,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},un=c`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: ${zt.InputBoxShadow};
`,hn=c`
    border: 1px solid ${Ot.Accent.Light[1]};
    box-shadow: none;
`,fn=c`
    border: 1px solid ${Ot.Neutral[5]};
    box-shadow: none;
`,gn=c`
    border: 1px solid ${Ot.Validation.Red.Border};
    box-shadow: ${zt.InputErrorBoxShadow};
`,pn=s.div`
    border: 1px solid ${Ot.Neutral[5]};
    border-radius: 4px;
    background: ${Ot.Neutral[8]};

    :focus-within {
        ${un}
    }
    ${e=>e.$focused&&un}

    ${e=>e.$readOnly?c`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${hn}
                }
                ${e.$focused&&hn}
            `:e.$disabled?c`
                background: ${Ot.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${fn}
                }
                ${e.$focused&&fn}
            `:e.$error?c`
                border: 1px solid ${Ot.Validation.Red.Border};

                :focus-within {
                    ${gn}
                }
                ${e.$focused&&gn}
            `:void 0}
`,mn=s(pn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;s.input`
    ${e=>en("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ot.Neutral[1]};
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
        color: ${Ot.Neutral[3]};
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
`,s.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Ot.Primary};
    }
`;var yn={exports:{}};yn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},S={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:i,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",$={};$[F]=m;var b="$isDayjsObject",v=function(e){return e instanceof w||!(!e||!e[b])},B=function e(t,n,r){var a;if(!t)return F;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(a=i),n&&($[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var l=t.name;$[l]=t,a=l}return!r&&a&&(F=a),a||!r&&F},D=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=S;x.l=B,x.i=v,x.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=B(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,d=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(l)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,y=this.$D,S="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case s:var F=this.$locale().weekStart||0,$=(p<F?p+7:p)-F;return f(r?y-$:y+(6-$),m);case l:case h:return g(S+"Hours",0);case o:return g(S+"Minutes",1);case i:return g(S+"Seconds",2);case a:return g(S+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=x.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[l]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[i]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,d){var h,f=this;r=Number(r);var g=x.p(d),p=function(e){var t=D(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===u)return this.set(u,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,s,2);case"ddd":return u(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=x.p(h),y=D(r),S=(y.utcOffset()-this.utcOffset())*t,F=this-y,$=function(){return x.m(p,y)};switch(m){case u:g=$()/12;break;case c:g=$();break;case d:g=$()/3;break;case s:g=(F-S)/6048e5;break;case l:g=(F-S)/864e5;break;case o:g=F/n;break;case i:g=F/t;break;case a:g=F/e;break;default:g=F}return f?g:x.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=B(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return D.prototype=H,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){H[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,w,D),e.$i=!0),D},D.locale=B,D.isDayjs=v,D.unix=function(e){return D(1e3*e)},D.en=$[F],D.Ls=$,D.p={},D}();var Sn=p(yn.exports),Fn={exports:{}};Fn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,s=a.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var y=l||0,S=s||0,F=c||0,$=d||0;return u?new Date(Date.UTC(p,m,g,y,S,F,$+60*u.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,S,F,$)):new Date(p,m,g,y,S,F,$)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var $n=p(Fn.exports),bn={exports:{}};bn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),l="("===(a=a||"()")[0],s=")"===a[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var vn=p(bn.exports),Bn={exports:{}};Bn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Dn=p(Bn.exports),xn={exports:{}};xn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var wn,Hn,kn,On=p(xn.exports),En={exports:{}},Cn=p(En.exports=(wn={year:0,month:1,day:2,hour:3,minute:4,second:5},Hn={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=Hn[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Hn[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,d=wn[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(a-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,l=a||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));Sn.extend(vn),Sn.extend(On),Sn.extend(Dn),Sn.extend($n),Sn.extend(Cn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Sn(t).startOf("week");return zn(n).map((e=>Mn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Mn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Sn(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Sn(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Sn(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?Sn(r):void 0,a?Sn(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(kn||(kn={}));const zn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Mn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},An=[1,3,5,7,8,10,12],Tn=[4,6,9,11];var Wn,_n,In,Pn;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":An.includes(i)?Math.min(a,31).toString():Tn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Sn(e,n);return Sn(t,n).diff(r,"minute")},e.toDayjs=e=>e?Sn(e):Sn(),e.addMinutesToTime=(e,t,n="HH:mm")=>Sn(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Sn(e).isSame(Sn(t),n)}(Wn||(Wn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Sn(e).isBefore(r,"day"))||!(!a||!Sn(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(Sn(e).isValid())return e}return""}}(_n||(_n={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(In||(In={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Pn||(Pn={}));const Ln=s.input`
    ${en("Body","regular")}
    color: ${Ot.Neutral[1]};

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
        color: ${Ot.Neutral[3]};
    }

    ${e=>"number"===e.type?c`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?c`
                cursor: not-allowed;
            `:void 0}
`,Vn=s.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot.Neutral[3]};
    background-color: transparent;
    border: none;
`,Yn=s(h)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Nn=s.div`
    display: flex;
    width: 100%;
`,Rn=r.forwardRef(((r,o)=>{var{value:l,spacing:s,type:c,error:d,disabled:u,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:y,styleType:S="bordered"}=r,F=f(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const $=a();i(o,(()=>$.current),[]);const b=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,a=t(r),i=r.substring(0,n.selectionEnd),o=t(i),l=i.length-o.length,s=Math.max(0,n.selectionEnd-l);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(s,s)}}}}({ref:$,formatter:e=>Pn.transformWithSpaces(e,s)}),v=e=>{g&&(D()?x(e):g(e))},B=()=>{p&&p(),$&&$.current&&$.current.focus()},D=()=>"tel"===c&&s,x=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=l?(e=>e?D()?Pn.transformWithSpaces(e,s):e:"")(l):l,H=()=>e(n,{children:[t(Ln,Object.assign({"data-testid":"input",ref:$,disabled:u,value:w,onChange:v,type:c,readOnly:h},F)),m&&!u&&!h&&!!l&&t(Vn,Object.assign({onClick:B,type:"button"},{children:t(Yn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===S?t(Nn,Object.assign({className:y},{children:H()})):t(mn,Object.assign({$disabled:u,$error:d,$readOnly:h,className:y},{children:H()}))})})),jn=s.div`
    display: flex;
    flex-direction: column;
`,Jn=s.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,Zn=s(Rn)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }

    ${Tt.mobileM} {
        padding: 0 0.5rem;
    }
`,Xn=s(dn.Small)`
    margin: 2rem 0rem;
`;var Un;s.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return c`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,s.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=c`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=c`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=c`
                transition: none;
            `),t}}
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Un||(Un={}));s.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Tt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const Gn=s.div`
    border-radius: 0.5rem;
    background: ${Ot.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,qn=s.button`
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

        ${({$highlight:e})=>e&&c`
                background-color: ${Ot.Neutral[7]};
            `}
    }
`,Kn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,l=f(e,["children","focusHighlight","focusOutline","type"]);return t(qn,Object.assign({ref:n,$outline:i,$highlight:a,type:o},l,{children:r}))})),Qn=s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ot.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Tt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,er=s(Kn)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${Ot.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Ot.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Tt.mobileL} {
        right: 1.25rem;
    }
`,tr=e=>{const{textSize:t}=e||{};return c`
        // Text styling
        ${t&&en(t,"regular")}

        strong {
            font-family: ${Yt.OpenSans.Semibold};
            ${t&&en(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Yt.OpenSans.Semibold};
            ${t&&en(t,"semibold")}
            color: ${Ot.Primary};
            text-decoration: none;

            svg {
                color: ${Ot.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ot.Secondary};

                svg {
                    color: ${Ot.Secondary};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `};s.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,s((e=>{var{children:n}=e,r=f(e,["children"]);const a=r["data-testid"]||"card";return t(Gn,Object.assign({},r,{"data-testid":a},{children:"string"==typeof n?t(nn.Body,{children:n}):n}))}))`
    color: ${Ot.Neutral[1]};
    ${tr({textSize:"BodySmall"})}

    ${Tt.mobileL} {
        display: none;
    }
`,s((n=>{var{id:r="modal-box",children:a,onClose:i,showCloseButton:o=!0}=n,l=f(n,["id","children","onClose","showCloseButton"]);return e(Qn,Object.assign({"data-testid":r},l,{onClick:e=>{e.stopPropagation()}},{children:[o&&t(er,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:t(h,{})})),a]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,s.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ot.Neutral[1]};
    ${tr({textSize:"BodySmall"})}
`,s.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const nr=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};s.span`
    color: ${Ot.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>nr(e)}

    &:hover,
    &:focus-visible {
        color: ${Ot.Secondary};
        ${({$hoverStyle:e})=>nr(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,s.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,s.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Ot.Primary};
    }
`,s.div`
    padding-left: 0.25rem;
    display: inline;
`,s.label`
    ${en("H5","semibold")}
    color: ${Ot.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${en("H5","semibold")}
    }

    a {
        color: ${Ot.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Ot.Secondary};

            svg {
                color: ${Ot.Secondary};
            }
        }
    }
`;const rr=s(nn.H6)`
    color: ${Ot.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;s(nn.BodySmall)`
    && {
        color: ${Ot.Neutral[3]};
        ${Qt("BodySmall","regular")}
    }
`;const ar=e=>t(rr,Object.assign({weight:"semibold"},e)),ir=n=>{var{id:r,value:i=[],"data-testid":s,className:c,cooldownDuration:d,actionButtonProps:u,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:m,onCooldownEnd:y}=n,S=f(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const F=null!=u?u:{},{disabled:$,onClick:b,styleType:v="secondary"}=F,B=f(F,["disabled","onClick","styleType"]),D=a([]),x=a(p),[w,H]=o(new Array(g).fill("")),[k,O]=o(d),[E,C]=o(new Date);l((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",A),()=>document.removeEventListener("paste",A)}),[]),l((()=>{if(0!==d){m&&m();const e=_();return()=>e()}}),[E]),l((()=>{x.current=p}),[p]),l((()=>{i.length===g&&H(i)}),[i]);const z=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(T(r)){const t=[...w];t[e]=r.substring(r.length-1),null===(n=D.current[e+1])||void 0===n||n.focus(),H(t),p&&p(t)}},M=e=>t=>{var n;const{key:r,code:a}=t;if("Backspace"===r||"Backspace"===a){const t=[...w];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=D.current[e-1])||void 0===n||n.focus()),H(t),p&&p(t)}},A=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&T(t,g)?(H(n),x.current&&x.current(n)):e.preventDefault()},T=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),W=()=>{const e=Date.now(),t=1e3*d;return e<E.valueOf()+t},_=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*d,r=Math.ceil((E.valueOf()+n-t)/1e3);O(r),r<=0&&(y&&y(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},I=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e(jn,Object.assign({id:r,"data-testid":s,className:c},{children:[t(Jn,{children:w.map(((e,n)=>t(Zn,Object.assign({id:I(n,"otp-input",r),"data-testid":I(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>D.current[n]=e,type:"text",inputMode:"numeric",value:e,error:!!h,onChange:z(n),onKeyDown:M(n),autoComplete:"off"},S),n)))}),h&&t(ar,{children:h}),t(Xn,Object.assign({styleType:v,type:"button"},B,{onClick:e=>{H(new Array(g).fill("")),W()||(C(new Date),O(d)),b&&b(e)},disabled:$||W()},{children:B.children?B.children:"Resend OTP"+(k?` in ${k} second${k>1?"s":""}`:"")}))]}))};export{ir as OtpInput};
//# sourceMappingURL=index.js.map
