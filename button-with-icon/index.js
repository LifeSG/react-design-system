import{jsxs as e,jsx as t}from"react/jsx-runtime";import n from"react";import r,{keyframes as a,css as o}from"styled-components";import{ExternalIcon as i}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g=Array.isArray,s="object"==typeof c&&c&&c.Object===Object&&c,h="object"==typeof self&&self&&self.Object===Object&&self,u=s||h||Function("return this")(),F=u.Symbol,f=F,p=Object.prototype,B=p.hasOwnProperty,S=p.toString,y=f?f.toStringTag:void 0;var m=function(e){var t=B.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(e){}var a=S.call(e);return r&&(t?e[y]=n:delete e[y]),a},D=Object.prototype.toString;var b=m,$=function(e){return D.call(e)},v=F?F.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?b(e):$(e)};var E=H,x=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||x(e)&&"[object Symbol]"==E(e)},z=g,A=k,w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var O=function(e,t){if(z(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(C.test(e)||!w.test(e)||null!=t&&e in Object(t))};var P=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_=H,W=P;var T,I=function(e){if(!W(e))return!1;var t=_(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=u["__core-js_shared__"],j=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"";var R=function(e){return!!j&&j in e},L=Function.prototype.toString;var V=I,J=R,X=P,G=function(e){if(null!=e){try{return L.call(e)}catch(e){}try{return e+""}catch(e){}}return""},M=/^\[object .+?Constructor\]$/,U=Function.prototype,Z=Object.prototype,Y=U.toString,q=Z.hasOwnProperty,K=RegExp("^"+Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!X(e)||J(e))&&(V(e)?K:M).test(G(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Q(n)?n:void 0},ne=te(Object,"create"),re=ne;var ae=function(){this.__data__=re?re(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},de=ne,ge=Object.prototype.hasOwnProperty;var se=ne;var he=ae,ue=oe,Fe=ce,fe=function(e){var t=this.__data__;return de?void 0!==t[e]:ge.call(t,e)},pe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=se&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=he,Be.prototype.delete=ue,Be.prototype.get=Fe,Be.prototype.has=fe,Be.prototype.set=pe;var Se=Be;var ye=function(){this.__data__=[],this.size=0};var me=function(e,t){return e===t||e!=e&&t!=t};var De=function(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1},be=De,$e=Array.prototype.splice;var ve=De;var He=De;var Ee=De;var xe=ye,ke=function(e){var t=this.__data__,n=be(t,e);return!(n<0)&&(n==t.length-1?t.pop():$e.call(t,n,1),--this.size,!0)},ze=function(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return He(this.__data__,e)>-1},we=function(e,t){var n=this.__data__,r=Ee(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ce.prototype.clear=xe,Ce.prototype.delete=ke,Ce.prototype.get=ze,Ce.prototype.has=Ae,Ce.prototype.set=we;var Oe=Ce,Pe=te(u,"Map"),_e=Se,We=Oe,Te=Pe;var Ie=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var n=e.__data__;return Ie(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ne;var Re=Ne;var Le=Ne;var Ve=Ne;var Je=function(){this.size=0,this.__data__={hash:new _e,map:new(Te||We),string:new _e}},Xe=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Re(this,e).get(e)},Me=function(e){return Le(this,e).has(e)},Ue=function(e,t){var n=Ve(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Je,Ze.prototype.delete=Xe,Ze.prototype.get=Ge,Ze.prototype.has=Me,Ze.prototype.set=Ue;var Ye=Ze;function qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(qe.Cache||Ye),n}qe.Cache=Ye;var Ke=qe;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,a){t.push(r?a.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},rt=g,at=k,ot=F?F.prototype:void 0,it=ot?ot.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(at(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ct=lt;var dt=g,gt=O,st=tt,ht=function(e){return null==e?"":ct(e)};var ut=k;var Ft=function(e,t){return dt(e)?e:gt(e,t)?[e]:st(ht(e))},ft=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var pt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[ft(t[n++])];return n&&n==r?e:void 0};var Bt=d((function(e,t,n){var r=null==e?void 0:pt(e,t);return void 0===r?n:r}));const St=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,yt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var mt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(mt||(mt={}));const Dt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=yt(Dt,n[mt.colorScheme]);return n.options&&n.options.color?St(r,e,n.options.color):St(r,e)},$t={Brand:{1:bt("Brand.1"),2:bt("Brand.2"),3:bt("Brand.3"),4:bt("Brand.4"),5:bt("Brand.5"),6:bt("Brand.6")},Primary:bt("Primary"),PrimaryDark:bt("PrimaryDark"),Secondary:bt("Secondary"),Accent:{Light:{1:bt("Accent.Light.1"),2:bt("Accent.Light.2"),3:bt("Accent.Light.3"),4:bt("Accent.Light.4"),5:bt("Accent.Light.5"),6:bt("Accent.Light.6")},Dark:{1:bt("Accent.Dark.1"),2:bt("Accent.Dark.2"),3:bt("Accent.Dark.3")}},Neutral:{1:bt("Neutral.1"),2:bt("Neutral.2"),3:bt("Neutral.3"),4:bt("Neutral.4"),5:bt("Neutral.5"),6:bt("Neutral.6"),7:bt("Neutral.7"),8:bt("Neutral.8")},Validation:{Green:{Text:bt("Validation.Green.Text"),Icon:bt("Validation.Green.Icon"),Border:bt("Validation.Green.Border"),Background:bt("Validation.Green.Background")},Orange:{Text:bt("Validation.Orange.Text"),Icon:bt("Validation.Orange.Icon"),Border:bt("Validation.Orange.Border"),Background:bt("Validation.Orange.Background"),Badge:bt("Validation.Orange.Badge")},Red:{Text:bt("Validation.Red.Text"),Icon:bt("Validation.Red.Icon"),Border:bt("Validation.Red.Border"),Background:bt("Validation.Red.Background")},Blue:{Text:bt("Validation.Blue.Text"),Icon:bt("Validation.Blue.Icon"),Border:bt("Validation.Blue.Border"),Background:bt("Validation.Blue.Background")}},Shadow:{Accent:bt("Shadow.Accent"),Red:bt("Shadow.Red"),Elevation:bt("Shadow.Elevation")}},vt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ht=e=>Object.keys(vt).reduce(((t,n)=>{const r=vt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Et=Ht("max-width"),xt=(Ht("min-width"),r.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),kt=a`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,zt=r.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||$t.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${kt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,At=r(zt)`
    animation-delay: -0.45s;
`,wt=r(zt)`
    animation-delay: -0.3s;
`,Ct=r(zt)`
    animation-delay: -0.15s;
`,Ot={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Pt={D1:{fontFamily:Ot.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},_t={D1:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Ot.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Ot.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Ot.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Wt={collections:{base:Pt,oneservice:{D1:{fontFamily:Ot.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ot.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ot.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ot.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ot.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ot.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ot.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ot.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ot.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ot.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ot.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ot.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:_t},defaultValue:"base"},Tt=e=>t=>{const n=t.theme,r=yt(Wt,n[mt.textStyleScheme]);return n.options&&n.options.textStyle?St(r,e,n.options.textStyle):St(r,e)},It={D1:{fontFamily:Tt("D1.fontFamily"),fontSize:Tt("D1.fontSize"),fontWeight:Tt("D1.fontWeight"),lineHeight:Tt("D1.lineHeight"),letterSpacing:Tt("D1.letterSpacing")},D2:{fontFamily:Tt("D2.fontFamily"),fontSize:Tt("D2.fontSize"),fontWeight:Tt("D2.fontWeight"),lineHeight:Tt("D2.lineHeight"),letterSpacing:Tt("D2.letterSpacing")},D3:{fontFamily:Tt("D3.fontFamily"),fontSize:Tt("D3.fontSize"),fontWeight:Tt("D3.fontWeight"),lineHeight:Tt("D3.lineHeight"),letterSpacing:Tt("D3.letterSpacing")},D4:{fontFamily:Tt("D4.fontFamily"),fontSize:Tt("D4.fontSize"),fontWeight:Tt("D4.fontWeight"),lineHeight:Tt("D4.lineHeight"),letterSpacing:Tt("D4.letterSpacing")},DBody:{fontFamily:Tt("DBody.fontFamily"),fontSize:Tt("DBody.fontSize"),fontWeight:Tt("DBody.fontWeight"),lineHeight:Tt("DBody.lineHeight"),letterSpacing:Tt("DBody.letterSpacing")},H1:{fontFamily:Tt("H1.fontFamily"),fontSize:Tt("H1.fontSize"),fontWeight:Tt("H1.fontWeight"),lineHeight:Tt("H1.lineHeight"),letterSpacing:Tt("H1.letterSpacing")},H2:{fontFamily:Tt("H2.fontFamily"),fontSize:Tt("H2.fontSize"),fontWeight:Tt("H2.fontWeight"),lineHeight:Tt("H2.lineHeight"),letterSpacing:Tt("H2.letterSpacing")},H3:{fontFamily:Tt("H3.fontFamily"),fontSize:Tt("H3.fontSize"),fontWeight:Tt("H3.fontWeight"),lineHeight:Tt("H3.lineHeight"),letterSpacing:Tt("H3.letterSpacing")},H4:{fontFamily:Tt("H4.fontFamily"),fontSize:Tt("H4.fontSize"),fontWeight:Tt("H4.fontWeight"),lineHeight:Tt("H4.lineHeight"),letterSpacing:Tt("H4.letterSpacing")},H5:{fontFamily:Tt("H5.fontFamily"),fontSize:Tt("H5.fontSize"),fontWeight:Tt("H5.fontWeight"),lineHeight:Tt("H5.lineHeight"),letterSpacing:Tt("H5.letterSpacing")},H6:{fontFamily:Tt("H6.fontFamily"),fontSize:Tt("H6.fontSize"),fontWeight:Tt("H6.fontWeight"),lineHeight:Tt("H6.lineHeight"),letterSpacing:Tt("H6.letterSpacing")},Body:{fontFamily:Tt("Body.fontFamily"),fontSize:Tt("Body.fontSize"),fontWeight:Tt("Body.fontWeight"),lineHeight:Tt("Body.lineHeight"),letterSpacing:Tt("Body.letterSpacing")},BodySmall:{fontFamily:Tt("BodySmall.fontFamily"),fontSize:Tt("BodySmall.fontSize"),fontWeight:Tt("BodySmall.fontWeight"),lineHeight:Tt("BodySmall.lineHeight"),letterSpacing:Tt("BodySmall.letterSpacing")},XSmall:{fontFamily:Tt("XSmall.fontFamily"),fontSize:Tt("XSmall.fontSize"),fontWeight:Tt("XSmall.fontWeight"),lineHeight:Tt("XSmall.lineHeight"),letterSpacing:Tt("XSmall.letterSpacing")}},Nt=[Ot.OpenSans,Ot.PlusJakartaSans],jt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Rt=(e,t)=>n=>{var r;const a=It[e].fontFamily(n),i=It[e].fontWeight(n),l=Nt.find((e=>Object.values(e).includes(a)));return l?o`
                font-family: ${jt(l,t)||jt(l,i)||a};
                font-weight: normal !important;
            `:o`
            font-family: ${a};
            font-weight: ${null!==(r=Lt(t)||i)&&void 0!==r?r:"normal"};
        `},Lt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vt=e=>{if(e>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Jt=(e,t,n=!1)=>r=>{const a=It[e],i=a.fontSize(r);return o`
            ${Rt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1,n=void 0)=>t?o`
            display: block;
            ${Vt(n)}
        `:e?o`
            display: inline;
        `:o`
            display: block;
            ${Vt(n)}
        `;var Gt;!function(e){e.D1=r.h1`
        ${e=>o`
                ${Jt("D1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>o`
                ${Jt("D2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>o`
                ${Jt("D3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>o`
                ${Jt("D4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>o`
                ${Jt("DBody",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>o`
                ${Jt("H1",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>o`
                ${Jt("H2",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>o`
                ${Jt("H3",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>o`
                ${Jt("H4",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>o`
                ${Jt("H5",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>o`
                ${Jt("H6",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>o`
                ${Jt("Body",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>o`
                ${Jt("BodySmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>o`
                ${Jt("XSmall",e.weight,e.paragraph)}
                color: ${$t.Neutral[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gt||(Gt={}));const Mt=r.a`
    ${e=>o`
            ${Jt(e.textStyle,e.weight)}
            color: ${$t.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$t.Secondary};

                svg {
                    color: ${$t.Secondary};
                }
            }
        `}
`,Ut=r(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zt=n=>{var{external:r=!1,children:a}=n,o=l(n,["external","children"]);return e(Mt,Object.assign({},o,{children:[a,r&&t(Ut,{})]}))};var Yt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Yt||(Yt={}));const qt={collections:{base:{InputBoxShadow:o`
        inset 0 0 4px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 4px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:o`
        inset 0 0 3px 0px ${$t.Shadow.Accent}
    `,InputErrorBoxShadow:o`
        inset 0 0 3px 0px ${$t.Shadow.Red}
    `,ElevationBoxShadow:o`
      0px 2px 8px ${$t.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Kt=e=>t=>{var n;const r=t.theme,a=yt(qt,r[mt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?St(a,e,r.options.designToken):St(a,e)},Qt={InputBoxShadow:Kt("InputBoxShadow"),InputErrorBoxShadow:Kt("InputErrorBoxShadow"),ElevationBoxShadow:Kt("ElevationBoxShadow"),Table:{Header:Kt("Table.Header"),Cell:{Primary:Kt("Table.Cell.Primary"),Secondary:Kt("Table.Cell.Secondary"),Selected:Kt("Table.Cell.Selected"),Hover:Kt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Kt("Button.Danger.BackgroundColor"),Hover:Kt("Button.Danger.Hover"),Primary:Kt("Button.Danger.Primary"),Border:Kt("Button.Danger.Border")}}},en=r.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return o`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Qt.Button.Danger.Border:$t.Primary};

                    color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:$t.Primary};
                `;case"light":return o`
                    background-color: ${$t.Neutral[8]};
                    border: 1px solid ${$t.Neutral[5]};

                    color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:$t.Primary};
                `;case"disabled":return o`
                    background-color: ${$t.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$t.Neutral[3]};
                `;case"link":return o`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:$t.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Qt.Button.Danger.Hover:$t.Secondary};
                    }
                `;default:return o`
                    background-color: ${e.$buttonIsDanger?Qt.Button.Danger.BackgroundColor:$t.Primary};
                    border: 1px solid transparent;

                    ${Et.mobileL} {
                        width: 100%;
                    }

                    color: ${$t.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?o`
                    height: 2.5rem;
                    ${Jt("H5","semibold")}

                    ${Et.mobileS} {
                        height: auto;
                    }
                `:o`
                    height: 3rem;
                    ${Jt("H4","semibold")}

                    ${Et.mobileS} {
                        height: auto;
                    }
                `}
`;r((({color:n,className:r,size:a=18})=>e(xt,Object.assign({className:r,$size:a,$color:n},{children:[t(zt,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(At,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(wt,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(Ct,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Qt.Button.Danger.Primary:$t.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=$t.Neutral[3](e);break;default:t=$t.Neutral[8](e)}return o`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;const tn=r(en)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?o`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:o`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,nn={Default:n.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,styleType:i="default",danger:c=!1,icon:d,iconPosition:g="left"}=n,s=l(n,["children","disabled","styleType","danger","icon","iconPosition"]),h={$buttonIconPosition:g,$buttonStyle:o?"disabled":i,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(tn,Object.assign({ref:r,"data-testid":s["data-testid"]||"button-with-icon",disabled:o},h,s,{children:[d,t("span",{children:a})]}))})),Small:n.forwardRef(((n,r)=>{const{children:a,disabled:o=!1,styleType:i="default",danger:c=!1,icon:d,iconPosition:g="left"}=n,s=l(n,["children","disabled","styleType","danger","icon","iconPosition"]),h={$buttonIconPosition:g,$buttonStyle:o?"disabled":i,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(tn,Object.assign({ref:r,"data-testid":s["data-testid"]||"button-with-icon",disabled:o},h,s,{children:[d,t("span",{children:a})]}))}))};export{nn as ButtonWithIcon};
//# sourceMappingURL=index.js.map
